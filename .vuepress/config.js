// .vuepress/config.js
module.exports = {
    title: '紫菜苔de前端小馆',
    themeConfig: {
        repo: 'https://githjub.com/vuejs/vuepress',
        smoothScroll: true,
        logo: '/assets/img/logo.png',
        avatar: '/avatar.jpg',
        search: true,
        lastUpdated: true,
        nav: [
            { text: 'Home', link: '/' },
            {
                text: 'Guide',
                items: [
                    { text: 'Chinese', link: '/language/chinese/' },
                    { text: 'Japanese', link: '/language/japanese/' }
                ]
            },
            {
                text: 'External',
                link: 'https://google.com',
                target: '_blank'
            }
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
                tsLoaderOptions: {}
            }
        ],
        ['vuepress-plugin-reading-time']
    ]
}
