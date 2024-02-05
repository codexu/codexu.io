---
title: 下一代浏览器插件开发框架 WXT 入门指南
juejin: https://juejin.cn/post/7329724409429917705
csdn: https://blog.csdn.net/github_35432979/article/details/135948292
---

# 下一代浏览器插件开发框架 WXT 入门指南

## 前言

如果你没有开发过浏览器插件，那么我建议你直接选择一款框架去开发，因为我们在开发一款 Chrome 插件时，是采用 HTML、CSS 和 JavaScript 的传统方式开发，无法直接使用 vue、react 等常用框架去编写 UI，编译环境也需要自己手动去搭建，往往一些简单的插件，光是环境搭建比业务开发时间还要长。

今天介绍的 [WXT](https://wxt.dev/) 是一个免费的开源浏览器插件开发框架，它致力于为开发者带来最好的开发体验和最快的开发速度，学习它可以为你的插件搭建一个坚实的基础，并为你节省大量的基础建设时间。

## 特性

- 支持所有浏览器，包括 Chrome、Firefox、Edge、Safari 和一切基于 Chromium 的浏览器。
- 一套代码支持 Manifest V2 和 V3 的插件。
- 支持 HMR，更新内容不再需要重新加载整个插件。
- 入口点，manifest.json 是根据入口点的文件生成。
- 默认使用 typescript。
- 自动导入，与 Nuxt 一样的自动导入功能，默认的接口无需导入即可使用。
- 自动下载远程代码，Google Manifest V3 要求拓展程序不依赖远程代码。
- 轻松使用任何带有 vite 插件的前端框架。
- 内置包分析工具，方便优化，最小化扩展应用。

> 官方提供了多个快速入门模板，方便生成你习惯的技术方案。
> 未来还会推出自动压缩、上传、发布。

## 对比

有经验的开发者，一定了解过另一款框架，[Plasmo](https://docs.plasmo.com/)，截止文章编写日期，它已经有 7.7k star，对比 WXT 不足 500 star 可谓是遥遥领先。那么本章节来说明一下为什么我们要选择 WXT?

### Plasmo 不足之处

Plasmo 支持很多 WXT 的特性

- 仅 React、Vue 和 Svelte，如果有其他框架使用者局限性就比较大了。
- 不支持自动打开浏览器并安装，这步操作比较繁琐，极大的拉低了开发体验。
- HMR 目前仅支持 React，那么像我们使用其他框架的开发者，同样拉低了开发体验，并且更新内容时还会重新加载整个插件。

### WXT 不足之处

- 未支持自动化发布。
- 未支持消息传递。

当然这些官方正在努力更新中，这两条对于开发体验影响不大，相信不久的将来就会把这些特性添加上去。

## 前置知识

如果你没有浏览器插件开发经验，这里提供了几个需要了解的名词含义，如果你已经了解，可以直接跳过本章节。

### Manifest

Manifest(manifest.json) 是一个配置文件，包含插件的基础信息和功能。如果你不使用框架去开发，你需要了解一下。

> ⚠️ 使用 WXT 开发，可以忽略这一步，因为他会在构建时自动生成，Manifest V2 和 V3 是指 Chrome 扩展的清单文件的不同版本。

#### Manifest V2

V2 是旧版本清单文件格式。它是基于JSON格式的配置文件，用于描述扩展的名称、版本、权限、图标、页面注入等信息。Manifest V2提供了一些基本的功能和API，如页面操作、消息传递和存储管理等。它是较早版本的Chrome扩展清单文件格式，目前仍然被广泛使用。

#### Manifest V3

V3 是新版本清单文件格式。它在 V2 的基础上进行了一些重大的改进和更新，引入了一些新的概念和API，如声明式的事件页、强制性的权限声明、更严格的内容脚本规则等。提高了扩展的性能、安全性和可维护性。

### 入口文件

在开发 Chrome 插件时，有4个入口文件，他们分别是：

- background.js
- content.js
- injected.js
- popup.html

#### service_worker

浏览器插件是基于事件的程序，事件是浏览器触发器，例如导航到新网页、移除书签或关闭标签页。我们可以在 service_worker 文件中监听这些后台的事件，然后做出响应。

#### content_scripts

content.js 的意思是内容脚本，运行于网页环境，使用标准文档对象模型 (DOM)，通过它我们就可以获取或修改网页上的内容，这与平时开发网页的方式一致，在此基础上，还可以访问一些其他的 API，主要是与插件的其他部分通讯的接口，它并不支持全部的 API。

#### injected.js

可以注入 JavaScript 脚本到网页环境，注意这个是注入到整个网页中，content_scripts 只是特定的页面。

#### popup.html

弹窗，是一个非常常见的场景，当用户点击某个扩展程序的操作时，该扩展程序会显示一个弹出式窗口，用 popup.html 来写这个弹窗的 UI。

![](https://codexu-images.oss-cn-beijing.aliyuncs.com/20240205091447.png)

## 安装

看的多不如实际操作一下，所以我们从创建一个模板开始学习。

执行命令：

```sh
npx wxt@latest init <project-name>
```

或者你安装了 pnpm：

```sh
pnpx wxt@latest init <project-name>
```

> ⚠️ 这里建议使用 node(v18+)。

脚本下载后会出现选择起始模板的选项，根据你喜欢的框架选择即可。

![](https://codexu-images.oss-cn-beijing.aliyuncs.com/20240205091534.png)

进入项目路径，安装依赖，虽然运行 `npm run dev` 即可自动打开浏览器并看到插件已经安装可用了。

![](https://codexu-images.oss-cn-beijing.aliyuncs.com/20240205091557.png)

这里我使用的 vue 模板。

## 目录结构

看一下目录结构：

![](https://codexu-images.oss-cn-beijing.aliyuncs.com/20240205091623.png)

- `.output/` 构建的结果目录。
- `.vscode/` 和 .wxt 目录都是一些配置和类型，无需了解。
- `assets/` 可以存放资源，存储构建过程中将被 vite 处理。
- `public/` 同样的资源目录，会被原样复制到输出目录。
- `components/` 是存放 vue 通用组件的目录，这个大家都很熟悉了。
- `entrypoints/` 是最核心的路径，所有业务源码都在这里编写。
- `package.json` 如果未配置 manifest，那么插件 name 和 version 将会在这里取。
- `wxt.config.ts` 最重要的配置文件，任何行为都需要在这里配置。

## 配置

首先打开 `wxt.config.ts` 发现里面有 vite 的配置，这代表着，不论你使用什么框架，都构建于 vite，这也是为什么带有 vite 插件的框架就可以在 WXT 中使用的原因。

WXT 提供了 defineConfig 方法，携带完全的 ts 类型说明，可以更加方便的去配置。这里我们讲几个比较重要的配置项：

### 目录配置

> ⚠️ 本节建议直接跳过。

如果官方提供的目录结构不是你喜欢的，你可以自行修改，但我不建议你这么做。

- `root` 项目的根目录，默认值：`process.cwd()`。
- `srcDir` 所有源代码的位置，默认值：`rootDir`。
- `entrypointsDir` 包含所有入口点的文件夹，默认值 `<srcDir>/entrypoints`。
- `publicDir` 公共资源的文件夹，默认值： `<srcDir>/public`。

### vite

模板已经生成了 vue 的配置，如果你想改为 react，或者移植过来的项目，可以这样配置：

```ts
import { defineConfig } from 'wxt';
import react from '@vitejs/plugin-react';

export default defineConfig({
  vite: () => ({
    plugins: [react()],
  }),
});
```

当然 vite 的其他配置也在这里。

### manifest

虽然 manifest 是根据源码自动生成，但是也可以自定义配置，直接在 wxt.config.ts 中的 manifest 字段中配置即可。

> ⚠️ permissions 配置是很重要的，不配置是没有权限使用的。

### manifestVersion

可以明确规定 manifest 的版本，他的值为 2 或者 3，命令行 --mv2 或 --mv3 可以覆盖此选项。

> ⚠️ manifest v2 版本已经无法上架谷歌商店，这点值得注意。

### browser

明确要构建的浏览器，他的值是任意字符串，默认是 chrome，常用的还有 firefox、edge、safari。

---

其他的配置项请参考[配置文档](https://wxt.dev/api/wxt/interfaces/InlineConfig.html)。

## 入口点

在 WXT 中，入口点是通过将文件添加到 entrypoints/ 目录来定义的，也就是约定优于配置。通常一个目录下应该有这几个文件：

```
<rootDir>
└─ entrypoints/
   ├─ background.ts
   ├─ content.ts
   ├─ injected.ts
   └─ popup.html
```

manifest.json 也会根据这个目录生成相应的配置：

```json
{
  "manifest_version": 3,
  "action": {
    "default_popup": "popup.html"
  },
  "background": {
    "service_worker": "background.js"
  },
  "content_scripts": [
    {
      "js": ["content-scripts/content.js"]
    }
  ]
}
```

background、content、popup 是 WXT 自动识别的特殊名称，他们才会自动被加入到 manifest 中，其他的文件也会被构建到插件中，但不会在 manifest 中定义，例如 injected.ts 会被输出到 .output/**/injected.js，这类文件一般都通过 `browser.runtime.getURL("/injected.js")` 的方式访问。

自动被识别的文件比较多，这里可以参考[Entrypoints文档](https://wxt.dev/entrypoints/background.html)。

## 扩展接口

WXT 构建在 [webextension-polyfill](https://github.com/mozilla/webextension-polyfill)(Mozilla 出品) 之上，它使用标准 browser 全局变量，做过 chrome 插件的同学应该知道，全局变量是 chrome，直接理解将 chrome 替换为 browser 即可，因为 WXT 不止是为了 Chrome 做插件。另外一定是该死的回调终于可以使用 async/await 代替了。

由于支持自动导入，所以我们无需 `import { browser } from 'wxt/browser'`，这里我们利用一个小 demo 了解一下他的用法，通过 onInstall 监听到插件被安装的事件，这时我们通过本地存储将事件保存下来：

```ts
// background.ts
export default defineBackground(() => {
  browser.runtime.onInstall.addEventListener(({ reason }) => {
    if (reason === 'install') {
      browser.storage.local.setItem({ installDate: Date.now() });
    }
  });
});
```

> ⚠️ 注意 storage 需要添加到 manifest.permissions 中。

## 存储

上面的例子提到了将安装事件保存到本地存储，WXT 还提供了更精简的 API 用于存储：

```ts
import { storage } from 'wxt/storage'; // 无需引用

await storage.getItem('local:installDate');
```

所有存储键都必须以其存储区域为前缀，支持 `local:`、`session:`、`sync:`、`managed:`。

### 监听存储变化

如果要对某个键单独设置监听，可以通过使用 `storage.watch`:

```ts
const unwatch = storage.watch<number>('local:counter', (newCount, oldCount) => {
  // ...
});

unwatch(); // 取消监听
```

### 对象存储

同样也支持键值对的存储方式，使用 `storage.setMeta` 和 `storage.getMeta`:

```ts
await storage.setMeta('local:preference', { v: 2 });
await storage.getMeta('local:preference');
```

删除可以通过 `storage.removeMeta`:

```ts
await storage.removeMeta('local:preference');
await storage.removeMeta('local:preference', 'lastModified');
await storage.removeMeta('local:preference', ['lastModified', 'v']);
```

> 注意他们都是异步的。

## Content Script UI 

上文提到 Content Script 可以操作页面 DOM，这意味着我们可以随意修改某个页面的 UI。这里举个例子，我个人安装了 V2EX 的某个插件，看一下使用插件后的前后对比：

使用前：

![](https://codexu-images.oss-cn-beijing.aliyuncs.com/20240205091649.png)

使用后：

![](https://codexu-images.oss-cn-beijing.aliyuncs.com/20240205091704.png)

可见界面已经天差地别，并且评论区的功能也变了，回复的评论改在了相应评论的后面，这就是插件带来的便利。

### 三种实现方式

与 popup 不同，Content Script UI 的实现方式比较复杂，所以 WXT 提供了三种模式去创建内容脚本 UI，极大的降低了开发成本：

| 方法        | 样式隔离 | 事件隔离   | HMR | 使用页面上下文 |
| ----------- | -------- | ---------- | --- | -------------- |
| Integrated  | ❌ 合并   | ❌          | ❌   | ✅              |
| Shadow Root | ✅        | ✅ 默认关闭 | ❌   | ✅              |
| IFrame      | ✅        | ✅          | ✅   | ❌              |

他们都拥有各自的特性，需要按使用场景来使用。

### Integrated

这种方式是将脚本和样式一块注入，这意味着页面上的内容和脚本 UI 内容互相是产生影响的。

> 建议期望内容脚本 UI 与页面风格一致时使用。

vue 示例：

```ts
import { createApp } from 'vue';
import App from './App.vue';

export default defineContentScript({
  matches: ['<all_urls>'],
  main(ctx) {
    const ui = createIntegratedUi(ctx, {
      position: 'inline',
      anchor: '#anchor',
      onMount: (container) => {
        const app = createApp(App);
        app.mount(container);
        return app;
      },
      onRemove: (app) => {
        app.unmount();
      },
    });
    ui.mount();
  },
});
```

示例中使用了 createIntegratedUi 方法创建 UI，这里说明一下几个参数的含义：

- `matches` 匹配对应的 URL 去注入（不论哪种方式都需要填这个参数）。
- `anchor` 是一个 CSS 选择器或函数，也就是将 UI 插入到页面的哪个位置。
- 其他的就是一些事件了，创建和销毁，更多请参考文档。
- `position` 表示注入方式，可选值有 inline、overlay、modal。

![](https://codexu-images.oss-cn-beijing.aliyuncs.com/20240205091727.png)

### Shadow Root

如果你不想 CSS 互相影响，那么你可以选择这种模式。

```ts
import './style.css'; // 注意要引入 CSS
import { createApp } from 'vue';
import App from './App.vue';

export default defineContentScript({
  matches: ['<all_urls>'],
  cssInjectionMode: 'ui', // 注入模式
  async main(ctx) {
    const ui = await createShadowRootUi(ctx, {
      // 与上一个例子一致
    });
    ui.mount();
  },
});
```

参数 `cssInjectionMode` 是 CSS 注入模式的配置，它有3个可选参数：

- `ui` 从 manifest 排除 CSS，在调用 createShadowRootUi 时将 CSS 添加到 UI。
- `manifest` 使用 manifest CSS 下的样式。
- `manual` 从 manifest 排除 CSS，使用 `browser.runtime.getURL` 获取 CSS。

### IFrame

大家对它都很熟悉了，很多微前端框架都支持这种形式，因为它天生就对 CSS 和脚本隔离。

WXT 提供了一个辅助函数 createIframeUi，用来加载一个 HTML 页面：

```ts
export default defineContentScript({
  matches: ['<all_urls>'],
  async main(ctx) {
    const ui = await createIframeUi(ctx, {
      page: '/example-iframe.html',
      // 其他配置一致
    });
    ui.mount();
  },
});
```

我个人不太喜欢这种模式，他唯一的优点是支持 HMR。

## 远程代码

Google 对 Manifest V3 要求不能依赖远程代码，我们在使用谷歌分析这类工具时，可以采用这样的方式：

```ts
import 'url:https://www.googletagmanager.com/gtag/js?id=G-XXXXXX';
```

`import + url:` 的形式，WXT 会自动下载远程代码到本地。

## 构建

运行 `npm run build` 即可，默认构建了 Chrome 插件。

如果运行 `npm run build:firefox`，则会构建 Firefox 插件，可以看到打包使用的 manifest v2：

![](https://codexu-images.oss-cn-beijing.aliyuncs.com/20240205091803.png)

这时默认打包的浏览器对应 Manifest 版本：

| 浏览器         | 默认 Manifest 版本 |
| -------------- | ------------------ |
| chrome         | 3                  |
| firefox        | 2                  |
| safari         | 2                  |
| edge           | 3                  |
| 其他任何浏览器 | 3                  |

如果你想打包 Firefox 时使用 v3 版本，可以在命令后增加 `--mv3` 参数即可。

### 构建 zip

如果你是第一次向商店发布插件，需要先了解一下上传步骤，每个商店都需要上传 `.zip` 文件。

庆幸的是 WXT 也提供了指令去做：

```sh
wxt zip
wxt zip -b firefox
```

执行后 `.zip` 文件会出现在 `.output`。

## 我爱掘金插件实战

接下来通过一个简单的例子：我爱掘金插件实战，来将 popup、background、content 三个东西串起来实践一下。有兴趣可以参考[代码仓库](https://github.com/codexu/wxt-love-juejin)。

实现效果，每隔1秒钟爱掘金一次，将页面上所有 .title 元素都替换成`我爱掘金*次`，弹窗也同样展示，数据存储在 storage，刷新页面也不会让爱消失。

效果展示：

![](https://codexu-images.oss-cn-beijing.aliyuncs.com/20240205091827.png)

### 配置

首先先配置一下 `package.json` 的 `name` 和 `description`，这步不重要。

然后 `wxt.config.ts` 配置一下 manifest.permissions:

```ts
export default defineConfig({
  manifest: {
    permissions: ["storage"],
  },
});
```

因为我们要存储爱了掘金多少次，所以要在这里获得存储权限。

### 定时加爱

每秒增加一次爱的话，我们可以在 background.ts 中去做。为什么不是在 content.ts 中呢？因为我们要替换页面上的元素时，如果存在多个的话，那么我们每秒就会爱掘金 N 次了。当然在 popup 里去写也没什么问题，但是我建议 popup 仅写 UI，不要涉及业务逻辑。

```ts
// background.ts
export default defineBackground(() => {
  const count = storage.defineItem<number>("local:count", {
    defaultValue: 0,
  });

  setInterval(async () => {
    const _count = await count.getValue();
    console.log(_count);
    storage.setItem("local:count", _count + 1);
  }, 1000);
});
```

### 弹窗展示

模板已经生成了 popup/App.vue，我们直接修改这个文件即可：

```vue
<!-- popup/App.vue -->
<template>
  <div>
    我爱掘金{{ count }}次
  </div>
</template>

<script lang="ts" setup>
import { onMounted, ref } from 'vue';

const count = ref(0);

onMounted(() => {
  setInterval(async () => {
    count.value = await storage.getItem<number>('local:count') || 0;
  }, 1000);
});
</script>
```

### 让页面充满爱掘金

Content Script 前面讲了不少，大家应该是轻车熟路。

```ts
import { createApp } from "vue";
import LoveJuejin from "@/components/LoveJuejin.vue";

export default defineContentScript({
  matches: ["<all_urls>"],
  main(ctx) {
    const ui = createIntegratedUi(ctx, {
      position: "inline",
      anchor: "#juejin",
      onMount: (container) => {
        const app = createApp(LoveJuejin);
        app.mount(container);
        return app;
      },
      onRemove: (app) => {
        if (app) {
          app.unmount();
        }
      },
    });
    ui.mount();
  },
});
```

至此结束，运行一下体验吧。

## 参考

- [Chrome 插件开发文档](https://developer.chrome.com/docs/extensions?hl=zh-cn)
- [WXT 文档](https://wxt.dev/)
- [WXT 配置文档](https://wxt.dev/api/wxt/interfaces/InlineConfig.html)。
- [WXT Entrypoints 文档](https://wxt.dev/entrypoints/background.html)。