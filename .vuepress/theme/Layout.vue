<template>
    <div class="theme-container">
        <PageHeader></PageHeader>
        <div class="posts-container">
            <div class="posts-wrapper">
                <PostList></PostList>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import PageHeader from '../components/page-header.vue'
import PostList from '../components/post-list.vue'

@Component({
    components: {
        PageHeader,
        PostList
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
</style>
