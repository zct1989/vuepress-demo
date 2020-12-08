<template>
    <div class="daily-list flex-row flex-nowrap">
        <div class="flex-auto date-list flex-row flex-wrap" v-if="currentMonth">
            <div
                class="date-item flex-row justify-content-center align-items-center"
                @click="onEnter(item)"
                v-for="item of currentMonth.diaries"
            >
                {{ item.date.format('DD') }}
            </div>
        </div>
        <div class="month-list">
            <div v-for="group in groups">
                <div
                    @click="activeYear(group.year)"
                    class="year"
                    :class="{ active: group.year === currentYear }"
                    v-if="group.showYear"
                >
                    {{ group.year }}年
                </div>
                <div
                    @click="activeMonth(group)"
                    class="month"
                    :class="{ active: group === currentMonth }"
                    v-if="currentYear === group.year"
                >
                    {{ group.month }}月
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { Component } from 'vue-property-decorator'
import Vue from 'vue'
import dayjs from 'dayjs'

@Component
export default class DailyList extends Vue {
    private groups: any[] = []
    private currentYear: string = ''
    private currentMonth: any = ''

    mounted() {
        this.generateDataSource()

        const [current] = this.groups
        this.currentYear = current.year
        this.currentMonth = current
    }

    /**
     * 生成数据源
     */
    private generateDataSource() {
        const dataSource = this.$site.pages
            .filter(x => x.path.startsWith('/docs/diaries'))
            .map(this.generateDailyItem)
            .sort((x, y) => (x.date > y.date ? -1 : 1))

        this.groups = this.groupDataSource(dataSource).sort((x, y) =>
            x.month > y.month ? -1 : 1
        )
    }

    /**
     * 生成日报数据项
     */
    private generateDailyItem({ path }) {
        var reg = new RegExp(/(?<=^\/docs\/diaries\/)(.*?)(?=\.html)/, 'ig')
        const [date] = reg.exec(path) as string[]

        return {
            date: dayjs(date),
            title: date,
            path
        }
    }

    /**
     * 对数据源进行分组
     */
    private groupDataSource(dataSource: any[]): any[] {
        let latestYear = ''

        const action = (result, item) => {
            const month = item.date.format('YYYY-MM')
            const year = item.date.format('YYYY')
            let target = result.find(x => x.key === month)

            if (!target) {
                target = {
                    showYear: latestYear === '' || latestYear !== year,
                    key: month,
                    year,
                    month: item.date.format('MM'),
                    diaries: []
                }
                result.push(target)
            }

            target.diaries.push(item)

            latestYear = year
            return result
        }

        return dataSource.reduce(action, [])
    }

    private activeYear(year) {
        this.currentYear = year
    }

    private activeMonth(group) {
        this.currentMonth = group
    }

    private onEnter({ path }) {
        location.href = path
        // this.$router.push(path)
    }
}
</script>

<style lang="less">
.daily-list {
    padding: 20px 10px;
    .date-list {
        align-content: flex-start;
        .date-item {
            margin: 10px;
            color: #fff;
            background-color: #fc5531;
            border-radius: 100%;

            width: 50px;
            height: 50px;
            cursor: pointer;
        }
    }
    .month-list {
        font-size: 18px;
        font-weight: bold;
        .month {
            text-align: center;
            color: #fff;
            padding: 5px;
            &.active {
                color: #3eaf7c;
            }
        }
        .year {
            margin-top: 10px;
            text-align: center;
            color: #fff;
            &.active {
                color: #3eaf7c;
            }
        }
    }
}
</style>
