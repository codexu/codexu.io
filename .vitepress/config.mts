import { defineConfig } from 'vitepress'

export default defineConfig({
  title: "Codexu Blog",
  description: "A VitePress Site",
  themeConfig: {
    nav: [
      { text: "Home", link: "/" },
      { text: "Posts", link: "/posts/下一代浏览器插件开发框架WXT入门指南.md" },
    ],
    socialLinks: [
      { icon: "github", link: "https://github.com/vuejs/vitepress" },
    ],
  },
});
