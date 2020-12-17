<template>
    <div class="post-container">
        <div class="post-wrapper">
            <div class="title-container">
                <div class="title">{{ $page.title }}</div>
                <div class="date">{{ date() }}</div>
            </div>

            <div class="content-container">
                <Content></Content>
            </div>

            <page-footer></page-footer>
        </div>
    </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import DailyList from '../components/daily-list.vue'
import PostList from '../components/post-list.vue'
import PageFooter from '../components/page-footer.vue'
import dayjs from 'dayjs'

@Component({
    components: {
        DailyList,
        PostList,
        PageFooter
    }
})
export default class extends Vue {
    private date() {
        return dayjs(this.$page.frontmatter.date).format('YYYY年MM月DD日 HH:MM')
    }
}
</script>

<style lang="less" scoped>
.post-container {
    background-color: #efefef;
    overflow: auto;
}

.post-wrapper {
    margin: 30px;
}

.title-container {
    .title {
        font-size: 24px;
        font-weight: bold;
        padding-bottom: 20px;
        color: rgba(0, 0, 0, 0.8);
    }
    .date {
        color: rgba(0, 0, 0, 0.6);
    }
    margin-bottom: 50px;
}
</style>
