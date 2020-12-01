<template>
    <div class="slider flex-column justify-content-center align-items-center">
        <div class="avatar">
            <img :src="$site.themeConfig.avatar" />
        </div>
        <div class="title">
            {{ $site.title }}
        </div>
    </div>
</template>

<script lang="ts">
import { Component } from 'vue-property-decorator'
import Vue from 'vue'

@Component
export default class PageHeader extends Vue {
    private src = ''

    mounted() {
        console.log(this.$site)
    }
}
</script>

<style lang="less">
.slider {
    padding: 50px;
    .avatar {
        img {
            width: 100px;
            height: 100px;
            border-radius: 100%;
        }
    }

    .title {
        padding: 10px;
        color: #c9cacc;
        font-weight: bold;
    }
}
</style>
