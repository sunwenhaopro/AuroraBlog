
const {path} = require("@vuepress/utils");
const {navbar} = require("./navbar.js")
const {friendLinks} = require("./friendLinks")
const {socials} = require("./socials");
const {randomColor} = require("./randomColor");
const {siteInformation} = require("./siteInformation");
const {message} = require("./message");
const {donate} = require("./donate");
module.exports = {
    dest:"public",
    //base: '/REPO/',//如果你准备发布到 https://<USERNAME>.github.io/<REPO>/ ，也就是说你的仓库地址是 https://github.com/<USERNAME>/<REPO> ，则将 base 设置为 "/<REPO>/"。
    /*
    * 这里是配置Markdown语法增强的配置，如需配置，请查看官方介绍https://v2.vuepress.vuejs.org/zh/guide/markdown.html
    * 或者你也可以看过我的配置，使用该配置的文件路径Aurora-theme/lib/node/auroraTheme.js
    * */
    extendsMarkdown: (md) => {
    },
    // 打开下面注释，将使用webpack作为打包工具，如果注释将使用vite作为打包工具[目前主题不能使用vite打包，会报错]
    bundler: '@vuepress/bundler-webpack',
    bundlerConfig: {
    },
    /*
    * 在这里配置插件
    * 插件plugins是一个数组，官方介绍: https://v2.vuepress.vuejs.org/zh/guide/plugin.html
    * */
    plugins: [
        "@vuepress/plugin-search",
        {
            locales: {
                "/": {
                    placeholder: "Search",
                },
                "/zh/": {
                    placeholder: "搜索",
                },
            },
        },
        /*
        * 在主题中，使用path.resolve(__dirname,的地方，都是使用本地的插件或者主题，看位置
        * 这里是配置说说插件，使用https://aurora.xcye.xyz/plugin/coze/
        * */
        [

          
           "coze",
        //    path.resolve(__dirname, "../../Aurora-plugin/vuepress-plugin-coze/lib/node/index.js"),
            {
                appId: 'IQsvsaxcXIzi8A3Lh130n3hQ-9Nh9j0Va',//你需要在leancloud中创建自己的appId，请参照文档https://aurora.xcye.xyz/plugin/coze/

                appKey: 't8UvdIwF8Ja0hk7KC3ZTewR5',
                masterKey: 'TdgNVUUHTo6I2dEQRjKhxI3o',
                //下面这些是可选的
                avatarPath: '/avatar.jpg',//说说头像url
                registerPath: '/next-mood', //自定义插件默认提供的注册页面路由，请在前面加上/
                onlyAdministrator: true,//是否运行其他注册的用户发布说说，true表示只有管理员可以发布
            }
        ],
        /*
        * 该插件是配置时间轴，使用https://aurora.xcye.xyz/plugin/archive/
        * 请配置一下excludes，否则在时间轴那里，会出现非文件页面链接
        * */
        [
            "archive",
          // path.resolve(__dirname, "../../Aurora-plugin/vuepress-plugin-archive/lib/node/index.js"),
            {
                excludes: ['/footer.html','/404.html','/about/','/mood/','/link/','/tag/','/photo/'],
                noTitle: '暂时没有标题配置'
            }
        ],
        /*
        * 音乐插件，使用：https://aurora.xcye.xyz/plugin/player/
        * */
        [
           // path.resolve(__dirname, "../../Aurora-plugin/vuepress-plugin-player/lib/node/index.js"),
            "player",
            {           
                disableSpace: false,
                //网易云单个歌单id
                songIds: ['29723011','1887893189','1421069053'],
                //网易云歌单
                playlist: '7082462754',
                showPlaylist: true,
                //是否禁用网易云音乐，如果你选择禁用，那么就将使用本地的歌曲，请传入链接
                disabledNetEaseMusic: true,

                //请求接口的baseURL
                serverUrl: 'https://netease-cloud-music-api-teal-psi.vercel.app/',

                //本地歌曲
                localSongs: {
                    coverUrl: 'https://api.ctrlcver.com/images/index.php',
                    songs: [
                        {
                            path: 'https://vkceyugu.cdn.bspapp.com/VKCEYUGU-b96599d7-a53c-4774-935d-82adf58002ac/786520e3-d8a9-4758-8185-8e9d42f23031.mp3',
                            songName: 'All Time Low',
                            cover:'https://api.ctrlcver.icu/images/index.php',
                            


                        },
                        {
                            path: 'https://vkceyugu.cdn.bspapp.com/VKCEYUGU-b96599d7-a53c-4774-935d-82adf58002ac/a3e8516e-47b1-4ffc-829c-b7d06a88c561.mp3',
                            songName: 'Love is gone',
                            cover:'https://api.ctrlcver.icu/images/index.php',
                            


                        },
                        {
                            path: "https://vkceyugu.cdn.bspapp.com/VKCEYUGU-b96599d7-a53c-4774-935d-82adf58002ac/a25f0702-325f-4812-9838-b9b2074a7c1e.mp3",
                            songName: 'Remember Our Summer',

                            cover:'https://api.ctrlcver.icu/images/index.php',
                            
                        },
                        {
                            path: 'https://vkceyugu.cdn.bspapp.com/VKCEYUGU-b96599d7-a53c-4774-935d-82adf58002ac/d4b74ebc-7b80-4d62-b036-adacee61e843.mp3',
                            songName: 'Something Just Like This',

                            cover:'https://api.ctrlcver.icu/images/index.php',
                            


                        },                     
                        {
                            path: 'https://vkceyugu.cdn.bspapp.com/VKCEYUGU-b96599d7-a53c-4774-935d-82adf58002ac/4a7acd91-5dbe-475e-80ce-903f9698f1ff.mp3',
                            songName: 'Love Story',
                            cover:'https://api.ctrlcver.icu/images/index.php',
                            


                        },
                        {
                            path: 'https://vkceyugu.cdn.bspapp.com/VKCEYUGU-b96599d7-a53c-4774-935d-82adf58002ac/fdb5c293-cfee-4f06-b00e-3209957889e9.mp3',
                            songName: 'Everything Goes On',

                            cover:'https://api.ctrlcver.icu/images/index.php',
                            


                        },
                        {
                            path: 'https://vkceyugu.cdn.bspapp.com/VKCEYUGU-b96599d7-a53c-4774-935d-82adf58002ac/800812a8-9751-41f0-aada-ef0e31c75ca9.mp3',
                            songName: '起风了',

                            cover:'https://api.ctrlcver.icu/images/index.php',
                            


                        },
                        {
                            path: 'https://vkceyugu.cdn.bspapp.com/VKCEYUGU-b96599d7-a53c-4774-935d-82adf58002ac/7c31d1fc-c9c7-47d5-85f4-4e4b715ef308.mp3',
                            songName: '失眠播报',

                            cover:'https://api.ctrlcver.icu/images/index.php',
                            


                        },
                        {
                            path: 'https://vkceyugu.cdn.bspapp.com/VKCEYUGU-b96599d7-a53c-4774-935d-82adf58002ac/33b02e4d-e54a-43a7-91a0-214f96d70469.mp3',
                            songName: '世间美好与你环环相扣',
                            cover:'https://api.ctrlcver.icu/images/index.php',
                           
 

                        },
                       {
                            path: 'https://vkceyugu.cdn.bspapp.com/VKCEYUGU-b96599d7-a53c-4774-935d-82adf58002ac/efa6dd96-486f-43bc-ac60-fdeb615e226d.mp3',
                            songName: '执迷不悟',
                            cover:'https://api.swhcyx.icu/api/index.php',
                        },
                        {
                            path: 'https://vkceyugu.cdn.bspapp.com/VKCEYUGU-b96599d7-a53c-4774-935d-82adf58002ac/cf81364c-39b3-43fd-b706-b7e4bdf1c203.mp3',
                            songName: '你不明白',
                            cover:'https://api.ctrlcver.icu/images/index.php',
                        },
                     

                    ] 
                    } 
                
            }

        ],

        /*
        * 气泡插件，使用：https://aurora.xcye.xyz/plugin/bubble/
        * */
        [
            "bubble",
           //path.resolve(__dirname, "../../Aurora-plugin/vuepress-plugin-bubble/lib/node/index.js"),
            {
                //气泡数量 推荐0(不包括)到1之前的小数，
                bubbleNumber: 0.14,

                //气泡透明度 0到1之间的小数
                bubbleAlpha: 0.6,

                //透明度变化速度，越接近于0越好
                alphaChangeSpeed: 0.00001,

                //气泡大小，推荐0到1之间的值
                size: 0.4,

                //气泡大小变化速度 越小越好
                sizeChangeSpeed: 0.0002,

                //气泡上升速度
                riseSpeed: 0.4,

                //气泡颜色，白色rgb(255,255,255) 请传入255,255,255
                color: '255,255,0',

                zIndex: -2
            }
        ], 
    ],
    /*
    * 设置head 一定要加入<script src="https://at.alicdn.com/t/font_2849934_v6y652peian.js"></script>项配置，否则一些图标不能正常显示
    * 如果你需要额外引入css样式或者是js文件，请在head中引入，如何引入，可以参照下面的引入方式
    * */
    head: [
        
        [
            "script",
            {
              src:"https://unpkg.com/@waline/client@v2/dist/waline.js",
      
            },
        ],
        
      
        [
            "script",
            {
                src: "https://at.alicdn.com/t/font_2849934_v6y652peian.js",
            },
        ],
       [
            "script",
           {
                src: "/js/iconfont.js",
            },
        ],
        [
             "script",
             {
                src:"https://widget.qweather.net/simple/static/js/he-simple.js?v=1.4.0",
             },
        ],
       
       [
          "script",
          {
            src:"https://fastly.jsdelivr.net/gh/stevenjoezhang/live2d-widget@latest/autoload.js"
          }
       ],
        [
            "script",
            {
                src:"/看板娘1.js",
            }
        ],
       [
        "script",
        {
            src:"//code.tidio.co/eqyczch6vxk0mbllmn8u49icfbifwgmn.js"
        }
       ],
        [
            "script",
            {
                src:"/看板娘2.js",
            }
        ],
         [
           "script",
            {
                type:"module",
                src:"/js/hua.js",
            }
        ],
        [
           "script",
            {
           //     src:"/js/拖尾.js",               
            }
        ],  
        //设置站点icon
        [
            "link",
            {
                href: "/avatar.png",
                rel: "icon",
            },
        ],
        [
            "link",
            {
                rel:'stylesheet',
                type:"text/css",
                href:"https://widget.qweather.net/simple/static/css/he-simple.css?v=1.4.0",
            }
        ],
        [
            "link",
            {
                rel: 'stylesheet',
                type: 'text/css',
                href: '//at.alicdn.com/t/font_2932340_r7zitafg82.css'
            }
        ],
        [
            "link",
            {
                rel:'stylesheet',
                type:'text/css',
                href:'//at.alicdn.com/t/c/font_3740926_hwbt7bvwkp.css'
            }
        ],
       [
        "link",
        {
            rel:'stylesheet',
            type:'text/css',
            href:'//at.alicdn.com/t/c/font_3686452_lu1cn5pzdxb.css'
        }
       ],
        [
            "link",
            {
                rel: 'stylesheet',
                type: 'text/css',
                href: '//at.alicdn.com/t/font_2951154_btu3y5blqnn.css'
            }
        ],
        [
            "link",
            {
                rel: 'stylesheet',
                type: 'text/css',
                href: "https://unpkg.com/@waline/client@v2/dist/waline.css",

            }
        ],

        [
            "link",
            {
                rel: 'stylesheet',
                type: 'text/css',
                href: // '/看板娘.css',
                "https://fastly.jsdelivr.net/npm/@fortawesome/fontawesome-free@6/css/all.min.css"
           // "https://cdn.jsdelivr.net/npm/font-awesome/css/font-awesome.min.css",
            }
        ],
    ],
    //这里使用本地主题
  //  theme: path.resolve(__dirname, "../../Aurora-theme/lib/node/index.js"),
    theme: 'aurora',

    //站点title
    title: "CtrlCVer",

    //设置站点语言
    lang: 'zh-CN',

    //设置运行npm run dev的端口
    port: 8080,

    /*
    * themeConfig是和主题相关的配置项，主题的所有配置，都是在此处进行配置的
    * */
    themeConfig: {
        /*
        * 这里配置导航栏项，建议将navbar提取出，比如navbar.js
        * 使用：https://aurora.xcye.xyz/homeconfig.html#%E5%AF%BC%E8%88%AA%E6%A0%8F
        * 因为navbar会存在很多的配置，所以推荐在该目录下，创建一个navbar.js文件，此文件中，使用module.exports = {navbar: XXX}
        * 可以参照docs/.vuepress/navbar.js使用，然后在config.js的themeConfig处引入该文件
        * */
        navbar: navbar,

        //禁用黑夜模式，当前版本未提供
        darkMode: false,

        //项目地址，会在顶部导航栏和侧边栏显示GitHub的地址
        //repo: "https://github.com/qsyyke/vuepress-theme-aurora",

        //自定义GitHub的图标
       // repoIconClass: 'aurora-navbar-github',

        //md文件的仓库地址
       // docsRepo: 'https://github.com/qsyyke/aurora-docs',

        /*
        * 站点是否是使用github Actions自动部署，如果你使用github Actions完成自动部署，那么这里一定要为TRUE，为TRUE，假如你把此项目push
        * 到https://github.com/qsyyke/aurora-docs这个仓库中，那么你需要将docsRepo设置为https://github.com/qsyyke/aurora-docs，
        * 那么在文章页面，会根据根据你docsRepo和docsBranch设置正确的edit链接，也就是可以一键打开GitHub仓库中，此篇md文件的编辑
        * */
        githubActions: false,

        //md文件存放的仓库分支
        docsBranch: 'main',

        //顶部导航栏，你repo地址的超链接文本
        repoLabel: "Aurora-theme",

        //是否启用文章在线编辑，默认开启，会在每篇文章的底部，创建一个链接，指向该md在GitHub中的edit地址
        editLink: true,

        //在线编辑文字，点击编辑该文章的label
        editLinkText: "edit",

        //该md最后更新时间，使用github commit的提交时间
        lastUpdated: true,
        lastUpdatedText: "lastTime",

        //下面的都是主题自己的配置文件
        //logo旁文字颜色
        logoColor: "#FFD700",

        //样式控制面板字体占位符，如果是国内用户，请使用中文
        showFont: "哈",

        //首页中间hero图片地址
        heroImg: "/avatar.png",

        //logo图片地址
        logo: "/avatar.png",

        //文章懒加载图片 仅限文章，首页文章占位图片并不是这个
        lazyLoadingImg: "/swh.gif",

        //这是首页文章列表懒加载图片
        homePageLazyLoadingImg: '/swh.gif',

        //是否启用定制首页随机一言，默认未开启，使用随机一言 接口为https://international.v1.hitokoto.cn/?c=b&max_length=45
        customRandomSay: false,

        //定制首页随机一言文字
        customRandomValue: 'Vuepress-theme-Aurora',

        //社交信息，首页PC端至多显示19个，手机端至多显示7个，侧边栏不影响，推荐自己创建一个socials.js
        socials: socials,

        //logo旁文字 默认值为Aurora
        logoTitle: "CtrlCVer",

        //貌似没用的配置项┭┮﹏┭┮
        headTitle: "this is headTitle",

        //站点描述
        description: "Welcome to My World",

        //站点关键词，在后续版本中，还需优化 请使用英文状态下的逗号','隔开
        keyword: "vuepress主题,vuepress theme,生活琐事,,简约博客,博客主题,静态主题",

        //样式控制面板打开之后，休眠多长时间自动关闭面板，单位毫秒
        slideTime: 300000,

        //随机一言接口 没用配置
        randomSaw: "https://international.v1.hitokoto.cn/?c=b&max_length=45",
        /*
        * 关于页面 推荐单独创建一个about.js文件存放关于页面信息
        * 使用：https://aurora.xcye.xyz/homeconfig.html
        * */
        about: [
            {
                bar: false,
                title: "我?",
                describe: [
                    "目前是一名大一学生,计科专业,坐标江苏南京",
                    "喜欢安静,不喜社交",
                    "喜欢听音乐,什么类型都可",
                    "喜欢技术,coding",
                    "目前正在学习python",
                    '最喜欢电影是"星球大战",梦想以后也能有一把"lightsaber"——原力觉醒',
                    "有点懒",
                    "目前除了编程没有什么兴趣爱好",
                    "最喜欢b站up主阿斗归来了",
                    "最近在听remember our summer",
                ],
                tag: [
                    "游戏高手",
                    "社恐十级",
                    "空想家",
                    "电影",
                    "安静",
                    "音乐",
                    "宅",
                    "懒",
                ],
                showTag:true,
            },
            {
                bar: false,
                title: "大一下学期规划and暑假规划",
                describe: [
                    "做项目",
                    "背单词练听力考六级",
                    "每星期看一部电影",
                    "学习python核心编程",
                    "期末绩点3.5++++++++",
                    "lolM少玩一点",
                    "学会简单的剪辑，制作日常学习vlog",
                    "投稿原创视频"
                ],
                tag: ["大家加油呀`Σ(￣□￣||)` ..."],
                showTag: true,
            },
            {
                bar: false,
                title: "未来规划",
                describe: ["Java攻城狮", "赚很多很多money"],
                tag: ["踏路前行，自有前程"],
                showTag: true,
            },
            {
                bar: true,
                title: "技  能",
                describe: [
                    {
                        name: "c++",
                        score: 70,
                    },
                    {
                        name: "HTML5",
                        score: 87,
                    },
                    {
                        name: "javascript",
                        score: 82,
                    },
                    {
                        name: "css",
                        score: 73,
                    },
                    {
                        name: "python",
                        score: 50,
                    },
                    {
                        name: "redis",
                        score: 59,
                    },
                    {
                        name: "mysql",
                        score: 82,
                    },
                    {
                        name: "vue",
                        score: 60,
                    },
                    {
                        name: "spring",
                        score: 71,
                    },
                    {
                        name: "springMVC",
                        score: 77,
                    },
                    {
                        name: "springBoot",
                        score: 71,
                    },
                ],
                showTag: false,
            },

            {
                showTag: false,
                bar: true,
                title: "掌握框架",
                describe: [
                    {
                        name: "spring",
                        score: 79,
                    },
                    {
                        name: "springMVC",
                        score: 81,
                    },
                    {
                        name: "springBoot",
                        score: 82,
                    },
                    {
                        name: "mybatis",
                        score: 82,
                    },
                    {
                        name: "vue",
                        score: 60,
                    },
                    {
                        name: "dubbo",
                        score: 61,
                    },
                ],
            },
            {
                bar: true,
                showTag: false,
                title: "掌握技能",
                describe: [
                    {
                        name: "jetbrains",
                        score: 75,
                    },
                    {
                        name: "linux",
                        score: 68,
                    },
                    {
                        name: "git",
                        score: 78,
                    },
                    {
                        name: "Ctrl C V",
                        score: 100,
                    },
                ],
            },
            {
                title: "关于主题",
                describe: [
                    "前端菜鸟(･ω･)ﾉ",
                ],
            },
        ],

        //这是配置随机背景；颜色 可以不设置，有默认值 推荐单独创建一个random.js文件
        randomColor: randomColor,

        //样式控制面板至多显示多少个字体和字体颜色，推荐不超过8个
        maxFontColorArr: 8,

        //在样式控制面板中，显示的字体颜色集合
        fontColor: [
            "#FF7F00","#2c3e50", "#42a5f5", "#8093f1", "#FF6EC7",  "#8FBC8F", "#EAADEA",
            "#3299CC", "#CDCDCD", "#CC3299", "#FF7F00", "#2F4F4F",
        ],
        defaultcolor: "#FF6EC7",
        defaultfont:"华文楷体",
        /*
        * 友情链接数组 推荐单独创建一个friendLinks.js存放友情链接的配置，可以参照navbar项的配置
        * 使用：https://aurora.xcye.xyz/page/friendlink.html
        * */
        friendLinks: friendLinks,

        //自己的站点信息 我自己的站点描述 会显示在友情链接的底部，推荐单独创建一个文件存放
        siteInformation: siteInformation,

        //需要排除的标签，自动生成的标签中，不会有这个标签，这是一个数组
        //excludeTag: ["note"],

        //样式控制面板显示的字体，有默认值
        fontFamily: [
            "sst",  "-apple-system", "hlt", "tzt", "lf", "xsf", "lsf", "cgt",
        ],

        //页脚信息，支持HTML，这是一个数组
        footer: [
            "Copyright © by swh All Rights Reserved.",
            "<a target='_blank' href='http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=32011302321368' style='display:inline-block;text-decoration:none;height:20px;line-height:20px;'><img src='' style='float:left;'/><p style='float:left;height:20px;line-height:20px;margin: 0px 0px 0px 5px;'>豫ICP备32011302321368号</p></a>",
        ],

        //是否显示页脚，控制全局
        isShowFooter: true,

        //是否显示主题信息在页脚，为false关闭
        isShowThemeCopyright: true,

        //是否展示运行时间
        isShowRunTime: true,

        //网站开始时间，请按照以下格式进行
        startRunTime: "4/1/2022 22:22:00",

        //网站运行时间前缀
        prefixRuntime: "小破站已运行",

        //公告，是一个数组，支持图片，HTML
        message: message,

        //文章底部最大推荐文章数 默认值为30
        recommendPageLength: 30,

        //推荐列表标题为空时，就会使用这个进行代替，默认是`╮(￣▽￣)╭`
        recommendNoTitle: "`╮(￣▽￣)╭`",

        //tag页，没有标题时，代替文字 默认是下面这个
        tagNoTitle: "Hi~ o(*￣▽￣*)ブ",

        //首页中间框的话语
        mood: "如梦之梦",

        //默认打开网站时的毛玻璃状态，TRUE表示默认开启毛玻璃效果
        isFitter: true,

        //默认的圆角，传入数字
        defaultBorderRadius: 40,

        //默认的透明度，传入0到1之间的小数，0表示全透明
      // defaultOpacity: 0,
    
        //首页文章列表透明度是否跟随样式面板改变，true表示跟随，全白色,false表示不跟随
        isHomePageFollow: true,

        //默认模糊度
        defaultBlur: 0.3,

        //手机端，是否在页面的底部显示侧边栏列表，默认开启，如果需要开启，请将此值设置为FALSE
        //mobilePageSidebar: false,

        //tag页面，标签分割符 请不要传入一个空字符串，默认值就是' ' 一个空格
        split: "(●°u°●)​",

        //赞赏信息
        donate: donate,

        //评论配置 请自己查看文档配置 https://aurora.xcye.xyz/comment/
        comment: {
            //是否显示评论
            showComment: true,
            serverURL: "https://sun.swhcyx.com",
            emojis: [
              "//unpkg.com/@waline/emojis@1.1.0/bilibili",
              "//unpkg.com/@waline/emojis@1.1.0/weibo/",
              "//unpkg.com/@waline/emojis@1.1.0/bmoji",
              "//unpkg.com/@waline/emojis@1.1.0/qq",
            ],
            avatar: 'monsterid'
        },

        //海报分享配置
        poster: {
            //博客描述
            description: "I  do  what  I  love",

            //作者
            author: "孙文豪",

            //博客前缀
            preBlog: "SWH",

            //海报博客名称后缀
            suffixBlog: " theme",

            //头像，请放置在docs/public目录下，或者请保证此图片链接能够跨域访问，否则头像不能正常显示
            avatar: "/avatar.jpg",
        },

        //是否展示从网络上请求回来的说说 如果启用，请自己写后台服务，修改源码，目前暂未在主题中加入，期望在将来能够实现，组件位置docs/.vuepress/theme/lib/client/components/Mood.vue
        showOnlineMood: false,

        //是否开启在线添加说说功能，如果需要，请自己写后台，修改源码，目前在主题内部暂未加入 组件位置docs/.vuepress/theme/lib/client/components/child/AddMood.vue
        showMoodEdit: false,

        //此项仅限我自己的增加说说请求配置，暂未提供注册服务，目前仅限自己使用，可能在以后完善之后，你们只需要简单配置下，就能使用了，期待
        addMood: {
            siteName: "localhost:8080",
            appId: "q4LlYVTTk2r39sNrJr7BL9A6p",
            appKey: "VxezWTppppyX2LTx4TUK8w6e2",
        },
        //自定义顶部图片
        customTopImg: {
            //是否启用定制顶部图片，控制全局，如果关闭，那么将使用随机图片，随机图片接口可以自己设置
            custom: false,

            //文章顶部图片，数组，每次从数组中随机选择一张
            page: [
                "/bg/555260.png",
                '/bg/404901.png',
                '/bg/734386.png'
            ],
            //友情链接页面
            friend: [
                "/bg/1.png",
            ],
            //标签页面
            tag: [
                "/bg/763311.png"
            ],
            //心情页面
            mood: [
                "/bg/5849.png"
            ],
        },

        //首页背景图片数组，考虑到使用随机图片，打开网站速度变慢，所以移除随机图片，使用自己设置的图片链接
        homeWps: [
          // "https://vkceyugu.cdn.bspapp.com/VKCEYUGU-b96599d7-a53c-4774-935d-82adf58002ac/365673fc-2c5f-4055-9314-2b03872c4067.jpg",
         // "/bg/1.jpg"
          //  "https://vkceyugu.cdn.bspapp.com/VKCEYUGU-b96599d7-a53c-4774-935d-82adf58002ac/4823019a-cf0d-49ef-99e0-a57f44560797.png",
         // "https://nb.swhcyx.com/iMrWnqx5ks5BBJuNxz0mKie6O2G4QmOo/1.jpg",
        // "https://vkceyugu.cdn.bspapp.com/VKCEYUGU-b96599d7-a53c-4774-935d-82adf58002ac/6cd28b12-9cfe-4e1f-8aac-d91e7e0b8021.png"
"/bgphoto/12.png"        
    ],

        //手机端首页背景图片
        homeWpsMobile: [
            "/bgphoto/1(1)(1).png",
           
        ],

        //首页文章显示条数，默认为4，此值不推荐设置太大
        pageSize: 6,

        //侧边栏配置
        //github地址
         githubUrl: "https://github.com/sunwenhaopro/",

        //最新文章数量，默认为6
        latestPageSize: 6,

        //首页是否显示文章图片，默认关闭，如果显示的话，首页加载会非常慢 已弃用，从v1.3.2开始，直接移除首页文章内容图片
        showHomePageImg: true,

        //文章侧边栏自动获取的层次 默认为1，也就是http://localhost:8080/config/feature/donate.html,只会自动生成feature目录下的文件
        sidebarCatalogLevel: 3,

        //首页文章列表封面图api接口
        homePageImgApi://"https://api.yimian.xyz/img",
      //  "https://api.vvhan.com/api/lolskin",
     //"https://pximg2.rainchan.win/img",
     //https://rainchan.win/projects/pximg
     //"https://pximg.rainchan.win/img",
     //https://api.vvhan.com/,
     //"http://api.btstu.cn/sjbz/?lx=dongman",
    // "https://pximg.rainchan.win/rawimg",
    //"https://api.uomg.com/api/rand.img1?sort=动漫&format=images",
   // "https://api.btstu.cn/sjbz/api.php?lx=dongman&format=images",
   //"https://vdn.vzuu.com/SD/e1412cae-6d47-11ec-837f-4a6a5b983f8f.mp4?disable_local_cache=1&bu=078babd7&c=avc.0.0&f=mp4&expiration=1652448667&auth_key=1652448667-0-0-ee613947b2a65afe2d2cab806b9d9acf&v=ali&pu=078babd7",
  "https://api.ctrlcver.icu/images/index.php",
        //手机端侧边栏横线分割文字，默认为Aurora
        mobileCutText: "Aurora",

        //侧边栏标签处显示还是分类还是标签，只有两个值，默认为分类，如果为categories，那么就显示为类别，否则显示为标签
        sidebarTag: "categories",

        //额外的功能，也就是样式控制面板上面那个，默认是关闭的
        showAddMood: true,

        //生成海报的顶部图片api接口，请注意，该接口需要直接返回图片地址，不能有跨域问题，设置之前，可以先使用ajax看是否存在跨域
        postImgApi: "https://api.ctrlcver.icu/images/index.php",
      // "https://api.vvhan.com/api/lolskin",
      //"https://api.lyiqk.cn/lol" ,
      //  樱花特效
      
        /*
        * 以下为v1.5.4新增功能
        * */

        //文章h2标签的icon
        articleH2Icon: '🌸',

        //文章h3标签的icon
        articleH3Icon: '🐳',

        //文章h4标签及h4标签之后的标签的icon
        articleH4Icon: '⛄',

        //v1.6.4新增配置
        sidebarAvatar: '/avatar.jpg',

        //1.7.1增加配置
        sugCountPerMin: 300,

        //v1.8.0新增配置项
        //是否展示文章推荐 默认展示
        showRecommend: true,

        //文章页面是否显示上一页，下一页 默认展示
        articlePagination: true,

        //这个global暂时没用
        global: {
            sidebar: {
                showStatus: true,
                perData: false,
                social: false,
                friendLink: true,
                navbar: false,
                latestPage: true,
                message: false,
                tag: true,
                siteData: false
            },
            footer: false,
        },

        //excludeTag: ["note"], 此配置项，不再需要使用

        //在统计文章，标签，类别的时候，需要排除的路径，只针对于根目录下的路径，
        excludePath: ['/footer.html','/v1.3.0/','/plugin/',"/node.html","/style.html"],

        //类别项是否包含文件夹名，默认包含
        categoriesIncludeFolderName: false,
        //首页波浪效果设置
        wave: {
            showWave: true
        },

        //顶部图片的气泡控制
        bubble: {
            show: true,

            //气泡数量 推荐0(不包括)到1之前的小数，
            bubbleNumber: 0.14,

            //气泡透明度 0到1之间的小数
            bubbleAlpha: 0.5,

            //透明度变化速度，越接近于0越好
            alphaChangeSpeed: 0.00001,

            //气泡大小，推荐0到1之间的值
            size: 0.2,
            //气泡大小变化速度 越小越好
            sizeChangeSpeed: 0.0002,

            //气泡上升速度
            riseSpeed: 0.4,

            //气泡颜色，白色rgb(255,255,255) 请传入255,255,255
            color: '255,255,0',
        },

        /**
         * 这里是配置统计阅读量的leanCloud配置，从1.9.0开始，将不再需要依赖waline的阅读统计,这里配置的appId,appKey,masterKey可以
         * 和vuepress-plugin-coze插件使用同一个应用
         * */
        leanCloud: {
            appId: '2A2Dyd2AffrnldhwftlEddVn-MdYXbMMI',
            appKey: 'qHYTbb91iOPLelyC9lpbXxLH',
            masterKey: 'eUwfvS3luIPnPiHS5SpEhDYr',
        },


        //这是v1.9.0新增加的功能 是否在文章页底部显示最后更新时间，贡献者，点击编辑,默认显示
        showPageMeta: true,

        /*
        * 以下是1.11.0版本新增的配置项
        * */

        //随机一言接口，请注意，一定要保证该接口直接返回Text文本，一定要保证该接口直接返回Text文本，而不是返回json
        randomSayApi: {
            method: 'GET',
            urlApi: 'https://v1.hitokoto.cn/?encode=text&c=a'
        },
        /*
        * 一下是v1.11.1版本增加的配置
        * */
        //  1000  afDianUrl: 'https://afdian.net/@qsyyke',//你的爱发电个人页面地址

        /*
        * 下面这些是v1.12.0版本新增的配置项
        * */

        // 首页置顶文字
        homeTopText: 'TOP',

        //侧边栏一句话描述
        sidebarDesc: 'I  do  what  I  love',

        /*
        * 下面的是v1.13.0版本的配置
        * */

        /*
        * 如果你以前使用的是其他的主题或者工具，比如hexo的主题，reco主题等等，发现frontmatter中的标签并不是使用tag字段设置，而是使用比如tags进行设置的
        * 那么你可以像customTagName: 'tags'自定义标签的字段，此配置仅仅针对于md文件设置的标签并不是使用tag字段，请注意，谨慎使用
        * */
        customTagName: 'tags',

        /*
       * 如果你以前使用的是其他的主题，比如hexo，reco等等，发现frontmatter中的类别并不是使用categories字段，而是使用比如category进行设置的
       * 那么你可以像customCategoriesName: "category"这样自定义类别的字段，此配置仅仅针对于md文件设置的类别并不是使用categories字段，请注意，谨慎使用
       * */
        //customCategoriesName: "category",

        /*
        * 下面这个是v1.13版本新增的配置项
        * */

        //是否显示关于页面气泡效果 默认开启
        showAboutPageBubble: true,  
    }    
};
