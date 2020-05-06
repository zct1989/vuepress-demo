// .vuepress/config.js
module.exports = {
    title: '前端研习室',
    themeConfig: {
        repo: 'https://githjub.com/vuejs/vuepress',
        smoothScroll: true,
        logo: '/assets/img/logo.png',
        search: true,
        lastUpdated: true,
        nav: [
            { text: 'Home', link: '/' },
            {
                text: 'Guide', items: [
                    { text: 'Chinese', link: '/language/chinese/' },
                    { text: 'Japanese', link: '/language/japanese/' }
                ]
            },
            {
                text: 'External', link: 'https://google.com', target: '_blank'
            },
        ],
        sidebar: 'auto',
        displayAllHeaders: true,
        activeHeaderLinks: true
    },
    // configureWebpack: {
    //     resolve: {
    //         alias: {
    //             '~': '/'
    //         }
    //     }
    // },
    plugins: [
        [
            'vuepress-plugin-typescript',
            {
                tsLoaderOptions: {
                    // ts-loader 的所有配置项
                },
            },
        ],
        ['vuepress-plugin-reading-time'],
        ['@vuepress/last-updated', {
            dateOptions: {
                hours12: false
            }
        }]
    ]
}