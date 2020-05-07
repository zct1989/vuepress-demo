<template>
    <div class="page-header flex-row justify-content-around align-items-center">
        <div class="title">{{ this.$site.title }}</div>
    </div>
</template>

<script lang="ts">
import { Component } from 'vue-property-decorator'
import Vue from 'vue'

@Component
export default class PageHeader extends Vue {
    private src = ''
}
</script>

<style lang="less">
.page-header {
    background-color: #fff;
    height: 60px;
    color: #000;

    .title {
        font-size: 18px;
        font-weight: 500;
    }
}
</style>
