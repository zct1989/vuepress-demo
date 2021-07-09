<template>
    <div class="theme-container ">
        <div class="flex-row flex-nowrap">
            <div class="sider-container">
                <Slider></Slider>
            </div>
            <component :is="layout" class="flex-auto"></component>
        </div>
        <div class="text-center footer">
            <a href="http://beian.miit.gov.cn">陕ICP备17002993号-1</a>
        </div>
    </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import Home from '../layouts/Home.vue'
import Post from '../layouts/Post.vue'
import Daily from '../layouts/Daily.vue'
import Slider from '../components/slider.vue'

@Component({
    components: {
        Slider,
        Home,
        Post,
        Daily
    }
})
export default class extends Vue {
    private readonly paths = [
        {
            type: 'daily',
            path: '/docs/diaries'
        },
        {
            type: 'post',
            path: '/docs/posts'
        },
        {
            type: 'home',
            path: '/'
        }
    ]

    get layout() {
        const target = this.paths.find(x => this.$page.path.startsWith(x.path))

        return target?.type || 'home'
    }
}
</script>

<style lang="stylus">
@import "../styles/theme"
@import "../styles/default"
</style>

<style lang="less">
@import '~prismjs/themes/prism-tomorrow.css';
@import '../styles/common.less';
@import '../styles/layout.less';
</style>

<style lang="less" scoped>
.footer {
    padding-bottom: 20px;

    a {
        color: rgba(255, 255, 255, 0.75);
        font-weight: 300;
    }
}
</style>
