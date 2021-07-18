module.exports = {
  lang: "zh-CN",
  title: "11ze's Site",
  description: "基于 vuepress 打造的个人网站，如有问题请尝试强制刷新。",

  themeConfig: {
    author: "11ze <wangzecn@qq.com>",
    navbar: [
      { text: "首页", link: "/" },
      { text: "关于", link: "about" }
    ],
    sidebar: "auto",
    lastUpdatedText: "上次编辑于",
    contributors: false
  },

  plugins: [
    [
      "@vuepress/plugin-google-analytics",
      {
        id: "G-SZZLS6FREP"
      }
    ]
  ]
};
