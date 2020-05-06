<template>
    <div class="post-item">
        <div></div>
    </div>
</template>

<script lang="ts">
import { Component, Prop } from 'vue-property-decorator'
import Vue from 'vue'

@Component
export default class PostItem extends Vue {
    @Prop()
    private source!: any

    mounted() {
        console.log(this.source)
    }
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
