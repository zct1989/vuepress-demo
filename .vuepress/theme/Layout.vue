<template>
    <div class="theme-container">
        <PageHeader></PageHeader>
        <PostList></PostList>
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
@import '../styles/layout.less';
</style>
