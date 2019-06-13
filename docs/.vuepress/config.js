module.exports = {
  title: 'X-BUILD 中文文档',
  description: 'X-BUILD是面向小型项目的脚手架工具，通过终端命令最快在几秒钟初始化项目目录，解决开发中的自动化、性能、模块化、规范、自适应布局等问题，辅助你生成更优质的代码。',
  themeConfig: {
    repo: 'codexu/x-build',
    repoLabel: '查看源码',
    docsRepo: 'codexu/codexu.github.io',
    docsDir: 'docs',
    docsBranch: 'docs',
    editLinks: true,
    editLinkText: '帮助我改善此页面！',
    nav: [
      { text: '快速上手', link: '/' },
      { text: '指南', link: '/概念' },
      { text: '工具', link: '/utils/快速上手' },
    ],
    sidebar: [
      {
        title: '快速上手',
        collapsable: false,
        children: [
          ['/', '概述'],
          ['/命令行工具', '命令行工具 (CLI)'],
          ['/快速开始', '快速开始'],
          ['/创建项目', '创建项目'],
        ]
      },
      {
        title: '指南',
        collapsable: false,
        children: [
          ['/概念', '概念'],
          ['/配置', '配置'],
          ['/规范', '规范'],
        ]
      },
      {
        title: '工具',
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
    ],
  },
}