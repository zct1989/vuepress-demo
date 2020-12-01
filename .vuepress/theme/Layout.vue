<template>
    <div class="theme-container flex-row">
        <div class="sider-container">
            <Slider></Slider>
        </div>
        <div class="post-container flex-auto">
            <PostList></PostList>
        </div>
        <div class="daily-container">
            <DailyList></DailyList>
        </div>
    </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import DailyList from '../components/daily-list.vue'
import PostList from '../components/post-list.vue'
import Slider from '../components/slider.vue'

@Component({
    components: {
        DailyList,
        PostList,
        Slider
    }
})
export default class extends Vue {}
</script>

<style lang="stylus">
@import "../styles/theme"
@import "../styles/default"
</style>

<style lang="less">
@import '../styles/common.less';
@import '../styles/layout.less';
</style>

<style lang="less" scoped>
.posts-container {
    display: flex;
    justify-content: center;

    .posts-wrapper {
        width: 1200px;
    }
}
.daily-container {
    flex-basis: 300px;
}
</style>
