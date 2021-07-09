<template>
    <div class="post-list">
        <!-- <div class="title">
            文章列表
        </div> -->
        <div class="flex-row flex-wrap justify-content-start">
            <div class="flex-basis-6" v-for="post of dataSource" :key="post.id">
                <div class="post-item-wrapper">
                    <PostItem :source="post"></PostItem>
                </div>
            </div>
        </div>

        <div class="action" v-if="this.pageIndex < this.pageCount">
            <button class="more" @click="onNext">更多</button>
        </div>
    </div>
</template>

<script lang="ts">
import { Component, Prop } from 'vue-property-decorator'
import Vue from 'vue'
import PostItem from './post-item.vue'
import { PageComputed } from 'vuepress-types'

@Component({
    components: {
        PostItem
    }
})
export default class PostList extends Vue {
    @Prop()
    private tag

    private dataSource: PageComputed[] = []
    private pageIndex = 1
    private pageSize = 10

    private get posts() {
        return this.$site.pages
            .filter(item => !item.frontmatter.home)
            .filter(x => x.path && x.path.startsWith('/docs/post'))
            .sort((x, y) => (x.frontmatter.date > y.frontmatter.date ? -1 : 1))
    }

    private get pageCount() {
        return Math.ceil(this.posts.length / this.pageSize)
    }

    private getPosts() {
        const data = this.posts.slice(
            (this.pageIndex - 1) * this.pageSize,
            this.pageSize * this.pageIndex
        )

        this.dataSource = [...this.dataSource, ...data]
    }

    private onNext() {
        if (this.pageIndex < this.pageCount) {
            this.pageIndex += 1
            this.getPosts()
        }
    }

    mounted() {
        this.getPosts()
    }
}
</script>

<style lang="less" scoped>
.post-list {
    padding: 20px 10px;
    .title {
        padding: 20px;
        font-size: 20px;
        color: #fff;
    }
    .post-item-wrapper {
        margin: 10px;
        background-color: #efefef;
        border-radius: 10px;
        overflow: hidden;
    }
    .action {
        text-align: center;
        margin-top: 20px;
        .more {
            padding: 5px 10px;
            width: 80px;
            border-radius: 5px;
            border-width: 0;
            cursor: pointer;
            background-color: rgba(255, 255, 255, 0.9);

            &:active {
                background-color: rgba(255, 255, 255, 0.5);
            }
        }
    }
}
</style>
