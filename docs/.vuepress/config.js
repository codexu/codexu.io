module.exports = {
  title: 'X-BUILD 中文文档',
  description: 'X-BUILD 是面向小型项目的脚手架工具，通过终端命令最快在几秒钟初始化项目目录，解决开发中的自动化、性能、模块化、规范、自适应布局等问题，辅助你生成更优质的代码。',
  themeConfig: {
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Github', link: 'https://github.com/codexu/x-build' },
    ],
    sidebar: [
      {
        title: '快速上手',
        collapsable: false,
        children: [
          ['/', '概述'],
          ['/安装命令行工具', '安装命令行工具 (CLI)'],
          ['/快速开始', '快速开始'],
        ]
      },
      {
        title: '更多功能',
        collapsable: false,
        children: [
          ['/创建项目', '创建项目'],
          ['/概念', '概念'],
          ['/配置', '配置'],
          ['/规范', '规范'],
        ]
      },
      {
        title: '其他工具',
        collapsable: false,
        children: [
          ['/utils/快速上手', '快速上手'],
          ['/utils/x-fullpage', 'X-FULLPAGE'],
          ['/utils/x-load', 'X-LOAD'],
          ['/utils/x-animate', 'X-ANIMATE'],
          ['/utils/x-touch', 'X-TOUCH'],
          ['/utils/x-music', 'X-MUSIC'],
        ]
      },
    ]
  }
}