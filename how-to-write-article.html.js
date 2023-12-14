export const data = {
  "key": "v-245bbacd",
  "path": "/how-to-write-article.html",
  "title": "这是一篇demo文章",
  "lang": "zh-CN",
  "frontmatter": {
    "date": "2021/11/26 20:08",
    "coverUrl": "https://h2.ioliu.cn/bing/BrassBandTrumpet_ZH-CN8703910231_640x480.jpg?imageslim",
    "sticky": true,
    "keyword": "设置keyword,设置keyword,设置keyword,设置keyword",
    "description": "这是此篇文章的描述",
    "title": "这是一篇demo文章",
    "tag": [
      "Aurora",
      "demo"
    ],
    "categories": [
      "类别",
      "demo类别"
    ]
  },
  "excerpt": "",
  "headers": [],
  "git": {}
}

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updatePageData) {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ data }) => {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  })
}
