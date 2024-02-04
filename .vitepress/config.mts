import { defineConfig } from 'vitepress'

export default defineConfig({
  title: "Codexu Blog",
  description: "A VitePress Site",
  themeConfig: {
    nav: [
      { text: "Home", link: "/" },
      { text: "Posts", link: "/posts/markdown-examples" },
    ],

    sidebar: [
      {
        text: "Posts",
        items: [
          {
            text: "下一代浏览器插件开发框架 WXT 入门指南",
            link: "/posts/下一代浏览器插件开发框架WXT入门指南.md",
          },
          { text: "Runtime API Examples", link: "/posts/api-examples" },
        ],
      },
    ],

    socialLinks: [
      { icon: "github", link: "https://github.com/vuejs/vitepress" },
    ],
  },
});
