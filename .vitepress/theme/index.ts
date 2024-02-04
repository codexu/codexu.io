import type { Theme } from "vitepress";
import DefaultTheme from "vitepress/theme";
import PostInfo from '../../components/PostInfo.vue'
import PostLayout from "../../components/PostLayout.vue";

export default {
  extends: DefaultTheme,
  enhanceApp({ app }) {
    // 注册自定义全局组件
    app.component("PostInfo", PostInfo);
  },
  Layout: PostLayout,
} satisfies Theme;
