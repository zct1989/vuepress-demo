<template>
    <div class="post-item">
        <div>
            <img src="" />
        </div>
        <div class="title padding-y">
            {{ source.title }}
        </div>
        <div class="update-time">
            {{ source.lastUpdated }}
        </div>
        <div class="description">
            <div v-if="source.frontmatter.description">
                {{ source.frontmatter.description }}
            </div>
            <div v-else v-html="source.excerpt"></div>
        </div>
        <div class="action-container flex-row justify-content-between ">
            <div class="read-action">
                <span>开始阅读</span>
            </div>
            <div class="read-info">
                <span>{{ source.readingTime.words }} words</span>
                <span class="padding-x">{{ source.readingTime.text }}</span>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { Component, Prop } from 'vue-property-decorator'
import Vue from 'vue'
import { UnsplashService } from '../shared/unsplash.service'

@Component
export default class PostItem extends Vue {
    private unsplashService = new UnsplashService()

    @Prop()
    private source!: any

    mounted() {}
}
</script>

<style lang="less">
.post-item {
    padding: 20px;

    .update-time {
        color: #4f4f4f;
    }

    .description {
        padding: 20px 0;
    }

    .action-container {
        padding: 20px 0 10px 0;
        .read-action {
            color: #e54d42;
        }
    }
}
</style>
