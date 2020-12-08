<template>
    <div class="post-item">
        <!-- TODO 封面 -->
        <!-- <div>
            <img src="" />
        </div> -->
        <div class="title padding-y" @click="onEnter">
            {{ source.title }}
        </div>
        <div class="update-time">
            {{ getDate(source.frontmatter.date) }}
        </div>

        <div class="description">
            {{ source.frontmatter.description || '' }}
        </div>
        <div class="action-container flex-row justify-content-between ">
            <div class="read-action" @click="onEnter">
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
import dayjs from 'dayjs'

@Component
export default class PostItem extends Vue {
    @Prop()
    private source!: any

    mounted() {}

    private onEnter() {
         location.href = this.source.path
        // this.$router.push(this.source.path)
    }

    private getDate(date) {
        return dayjs(date).format('YYYY年MM月DD日 HH:MM')
    }
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

    .title {
        font-size: 18px;
        font-weight: bold;
        cursor: pointer;
        height: 2rem;
        padding-bottom: 25px;
    }

    .action-container {
        padding: 20px 0 10px 0;
        .read-action {
            color: #e54d42;
            cursor: pointer;
        }
    }
}
</style>
