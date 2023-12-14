
 module.exports = {
    //这里是将config.js中的顶部导航栏配置单独提取出来，方便配置
    navbar: [
        {
            text:'时间轴',
            link:'/aurora-archive',
            iconClass:'aurora-navbar-si-glyph-egg'
        },
        {
        text: 'Me',
        link: "/about",
        iconClass: 'aurora-navbar-a-ziyuan107',
        },
        {
            text: '说说',
            link: '/next-mood',
            iconClass: 'aurora-navbar-weather',
        },
        {
            text: 'photo',
            link: 'https://photowall.ctrlcver.icu',
            iconClass: 'aurora-navbar-si-glyph-load'
        },
        {
            text: 'NotesBlog',
            link: 'https://notes.ctrlcver.icu',
            iconClass: 'aurora-navbar-si-glyph-load'
        },
        {
        text: '友情链接',
        link: '/link',
        iconClass: 'aurora-navbar-guide'
        },


    ]
}