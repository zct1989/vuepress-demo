<template>
    <div class="home-container flex-row">
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

@Component({
    components: {
        DailyList,
        PostList
    }
})
export default class extends Vue {}
</script>

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
