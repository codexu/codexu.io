module.exports = {
  locales: {
    '/': {
      lang: 'en-US',
      title: 'X-BUILD',
      description: ''
    },
    '/zh/': {
      lang: 'zh-CN',
      title: 'X-BUILD',
      description: ''
    },
  },
  themeConfig: {
    docsRepo: 'codexu/codexu.github.io',
    docsDir: 'docs',
    docsBranch: 'docs',
    editLinks: true,
    repo: 'codexu/x-build',
    locales: {
      '/': {
        selectText: 'Languages',
        label: 'English',
        repoLabel: 'View source',
        editLinkText: 'Edit this page on GitHub',
        nav: [
          { text: 'Get started', link: '/' },
          { text: 'Guide', link: '/concept' },
          { text: 'Tools', link: '/utils/get_started_quickly' },
          { text: 'Cases', link: '/case/' },
        ],
        sidebar: [
          {
            title: 'Get started',
            collapsable: false,
            children: [
              ['/', 'Overview'],
              ['/cli', 'CLI'],
              ['/quick_start', 'Quick start'],
              ['/create_project', 'Create project'],
            ]
          },
          {
            title: 'Guide',
            collapsable: false,
            children: [
              ['/concept', 'Concept'],
              ['/configuration', 'Configuration'],
              ['/specification', 'Specification'],
            ]
          },
          {
            title: 'Tools',
            collapsable: false,
            children: [
              ['/utils/get_started_quickly', 'Get started quickly'],
              ['/utils/x-fullpage', 'Fullpage'],
              ['/utils/x-load', 'Load'],
              ['/utils/x-animate', 'Animate'],
              ['/utils/x-touch', 'Touch'],
              ['/utils/x-music', 'Music'],
            ]
          },
        ],
      },
      '/zh/': {
        selectText: '选择语言',
        label: '简体中文',
        repoLabel: '查看源码',
        editLinkText: '在 GitHub 上编辑此页',
        nav: [
          { text: '快速上手', link: '/zh/' },
          { text: '指南', link: '/zh/概念' },
          { text: '工具', link: '/zh/utils/快速上手' },
          { text: '案例', link: '/case/' },
        ],
        sidebar: [
          {
            title: '快速上手',
            collapsable: false,
            children: [
              ['/zh/', '概述'],
              ['/zh/命令行工具', '命令行工具 (CLI)'],
              ['/zh/快速开始', '快速开始'],
              ['/zh/创建项目', '创建项目'],
            ]
          },
          {
            title: '指南',
            collapsable: false,
            children: [
              ['/zh/概念', '概念'],
              ['/zh/配置', '配置'],
              ['/zh/规范', '规范'],
            ]
          },
          {
            title: '工具',
            collapsable: false,
            children: [
              ['/zh/utils/快速上手', '快速上手'],
              ['/zh/utils/x-fullpage', 'X-FULLPAGE'],
              ['/zh/utils/x-load', 'X-LOAD'],
              ['/zh/utils/x-animate', 'X-ANIMATE'],
              ['/zh/utils/x-touch', 'X-TOUCH'],
              ['/zh/utils/x-music', 'X-MUSIC'],
            ]
          },
        ],
      },
    },
  },
}