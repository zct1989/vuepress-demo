<template>
    <div class="post-container">
        <div class="title-container">
            <div class="title">{{ $page.title }}</div>
            <div class="date">{{ date() }}</div>
        </div>

        <div class="content-container">
            <Content></Content>
        </div>
    </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import DailyList from '../components/daily-list.vue'
import PostList from '../components/post-list.vue'
import Slider from '../components/slider.vue'
import dayjs from 'dayjs'

@Component({
    components: {
        DailyList,
        PostList,
        Slider
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
    padding: 30px;
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
