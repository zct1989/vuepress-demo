<template>
    <div class="post-list">
        <!-- <div class="title">
            文章列表
        </div> -->
        <div class="flex-row flex-wrap justify-content-start">
            <div class="flex-basis-6" v-for="post of posts">
                <div class="post-item-wrapper">
                    <PostItem :source="post"></PostItem>
                </div>
            </div>
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
}
</style>
