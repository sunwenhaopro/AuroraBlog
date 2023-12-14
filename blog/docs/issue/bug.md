# Aurora主题bug记录和优化

::: tip 

这里记录的是每一个版本所遇到的bug，如果还存在其他的未知bug，可以在此页面进行评论或者到github中提交issue

:::



## v1.6.2

### Bug Fixes

- 修复首页文章列表一级标题，二级标题，三级标题等，出现#符号问题
- 修复友情链接页面图片和描述不匹配问题
- 修复关于页面，社交图片中，需要展示二维码等图片，部分被隐藏的问题

### Features

- 主题不再提供/photo路由，改由coze插件提供，该/photo使用说说的图片数据
- 主题所有的文本配置，比如公告，友情链接的message，都支持html，高度自定义
- 主题支持自定义导航图标，详细看文档aurora.xcye.xyz





## v1.6.1

### Bug Fixes

- 修复coze插件默认注册界面，输入框不对齐情况
- 修复leanCloud中有Talk类，但是没有数据情况下，不能编写说说问题
- 修复快速点赞，数据加减错误问题
- 修复侧边栏目录，不能获取到标题url问题
- 修复文章链接在在新标签中打开，图片失效问题

### Build System

- 把主题文件夹移到docs同级，原来的docs/.vuepress/theme还存在，但是代码不在改变

### Features

- 使用coze插件可以自定义注册，登录，登出等，除了默认提供的插件，额外提供的一个全局组件
- 其他用户也可以在你博客发布说说，但需要允许，默认关闭
- 说说功能使用插件实现

### BREAKING CHANGES

主题的目录被改变，如果你是以前克隆仓库的，需要克隆最新版，并且主题github仓库移到vuepress-aurora组织下



## v1.5.4-期望版本

- Feature
- [ ] 支持在线编写说说功能





## v1.5.3

### 未解决bug

- [x] 文章目录，如果有四级标题，滚动的时候，样式会失效
- [x] 文章目录，点击某个二级标题，三级标题，会出现不会跳转到该标题附近
- [ ] 全局组件`AuroraGlobal.vue`存在滚动动画问题

### 需优化

- [x] 顶部导航栏文字字体颜色不对

### 解决的bug

- [x] 修复全局组件`AuroraGlobal.vue`组件样式
- [x] 修复`safari`浏览器侧边栏模糊
- [x] 修复`/link`友情链接页面，logo与url不对应问题
- [x] 修复标签分页



## v1.3.3

该版本为部分bug解决和功能增加

详细请查看<a href="https://github.com/qsyyke/vuepress-theme-aurora/releases/tag/v1.3.3">V1.3.3</a>

从该版本开始，主题commit message将完全按照`angular`规范进行提交

## v1.3.2

该版本目前已知的bug有

- 1.运行`npm run build`命令，当build成功之后，并不会自动退出，需要手动`ctrl c`才能退出build过程，如果你会配置`webpack`，应该可以解决这个问题

- 2.站点在`ipad`上，或者一些平板上，会出现logo和文字被挤在一起的情况，像下图这样

  ::: details 查看

  ![image-20211013103447635](https://ooszy.cco.vin/img/blog-note/image-20211013103447635.png?x-oss-process=style/pictureProcess1)

  :::

- 3.在`ipad`或者某些电脑上，文章等顶部图片会显得特别大(`顶部图片高度使用vh，所以会出现这个问题`)，这个问题主要存在于部分iPad和电脑

  ::: details view

  ​	![image-20211013104423679](https://ooszy.cco.vin/img/blog-note/image-20211013104423679.png?x-oss-process=style/pictureProcess1)

  ![image-20211013104450699](https://ooszy.cco.vin/img/blog-note/image-20211013104450699.png?x-oss-process=style/pictureProcess1)

  :::

- 4.在某些ipad或者电脑上，首页文章图片会显得很小，影响美观，像下图一样

  ::: details view

  ![image-20211013104220662](https://ooszy.cco.vin/img/blog-note/image-20211013104220662.png?x-oss-process=style/pictureProcess1)

  :::



- 5.友情链接，标签等页面，刷新会出现404，对于相册页面，如果进入该页面，在刷新，会出现404问题(`这些页面使用动态路由，所以就出现这种情况`)

  ::: details view

  ​	![image-20211013104857123](https://ooszy.cco.vin/img/blog-note/image-20211013104857123.png?x-oss-process=style/pictureProcess1)

  :::

​		



- 6.在火狐浏览器上访问站点，首页侧边栏，和文章列表，会出现滚动条



## 提交bug

> 如果你在使用此主题的过程中，还遇到其他的bug，那么欢迎在此页面留言或者到github提交issue



<a target="_blank" href="https://github.com/qsyyke/vuepress-theme-aurora/issues">Github Issue</a>