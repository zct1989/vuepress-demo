<template>
    <div class="daily-container">
        <div class="title-container">
            <span>{{ date() }} </span>
        </div>
        <div class="content-container">
            <Content></Content>
        </div>
    </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import DailyList from '../components/daily-list.vue'
import PostList from '../components/post-list.vue'
import Slider from '../components/slider.vue'
import dayjs from 'dayjs'

@Component({
    components: {
        DailyList,
        PostList,
        Slider
    }
})
export default class extends Vue {
    private date() {
        const path = this.$page.path
        var reg = new RegExp(/(?<=^\/docs\/diaries\/)(.*?)(?=\.html)/, 'ig')
        const [date] = reg.exec(path) as string[]
        return dayjs(date).format('YYYY年MM月DD日')
    }
}
</script>

<style lang="less" scoped>
.daily-container {
    background-color: #efefef;
    padding: 30px;
}

.title-container {
    font-size: 24px;
    font-weight: bold;
    padding-bottom: 20px;
    color: rgba(0, 0, 0, 0.8);
}
</style>
