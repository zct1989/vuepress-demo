<template>
    <div class="page-footer">
        <div class="prev">
            <div class="prev-content" v-if="prevPage">
                <span>上一篇:</span>
                <a :href="prevPage.path">{{ prevPage.title }}</a>
            </div>
        </div>
        <div class="next">
            <div class="next-content" v-if="nextPage">
                <span>下一篇:</span>
                <a :href="nextPage.path">{{ nextPage.title }}</a>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { Component, Prop } from 'vue-property-decorator'
import Vue from 'vue'
import dayjs from 'dayjs'

@Component
export default class PageFooter extends Vue {
    private prevPage: any = null
    private nextPage: any = null
    private type = ''

    mounted() {
        this.type = this.getType()

        const pages = this.pages()
        const index = pages.findIndex(
            page => page.regularPath === this.$page.regularPath
        )

        this.prevPage = this.getPrevPage(index, pages)
        this.nextPage = this.getNextPage(index, pages)

        console.log(this.$site)
    }

    private getType() {
        return (
            ['/docs/posts', '/docs/diaries'].find(
                x => this.$page.path.indexOf(x) === 0
            ) || '-'
        )
    }

    private pages() {
        return this.$site.pages
            .filter(page => page.path.startsWith('/docs'))
            .filter(page => page.path.indexOf(this.type) === 0)
            .sort((x, y) => (x.frontmatter.date > y.frontmatter.date ? -1 : 1))
    }

    private getPrevPage(index, pages) {
        if (index === 0) {
            return
        }

        const page = pages[index - 1]

        if (this.type === '/docs/diaries') {
            page.title = this.date(page)
        }

        return page
    }

    private getNextPage(index, pages) {
        if (index >= pages.length - 1) {
            return
        }
        const page = pages[index + 1]

        if (this.type === '/docs/diaries') {
            page.title = this.date(page)
        }

        return page
    }

    private date(page) {
        const path = page.path
        var reg = new RegExp(/(?<=^\/docs\/diaries\/)(.*?)(?=\.html)/, 'ig')
        const [date] = reg.exec(path) as string[]
        return dayjs(date).format('YYYY年MM月DD日')
    }
}
</script>

<style lang="less" scoped>
.page-footer {
    display: flex;
    justify-content: space-between;
    padding: 10px;
}
</style>
