<template>
    <div class="post-list flex-column justify-content-center">
        <div class="post-item-wrapper" v-for="post of posts">
            <PostItem :source="post"></PostItem>
        </div>
    </div>
</template>

<script lang="ts">
import { Component, Prop } from 'vue-property-decorator'
import Vue from 'vue'
import PostItem from './post-item.vue'

@Component({
    components: {
        PostItem
    }
})
export default class PostList extends Vue {
    @Prop()
    private tag

    private get posts() {
        console.log(this.$site.pages)
        return this.$site.pages.filter(item => !item.frontmatter.home)
    }
}
</script>

<style lang="less" scoped>
.post-list {
    .post-item-wrapper {
        margin: 20px;
        border-radius: 10px;
        overflow: hidden;
        background-color: #fff;
    }
}
</style>
