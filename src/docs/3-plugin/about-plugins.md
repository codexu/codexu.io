### 概述

X系列插件都是针对 H5 项目开发的，使用 Rollup 打包，无其他框架或库依赖，可以直接使用。

### 安装

- 使用 NPM 进行安装，通过 import 引入插件。

- 使用 `<script>` 标签引入，源码在 github dist 目录下。

- 使用 UMD 格式打包，支持 amd，cjs 和 iife。

### 通过CLI安装插件

x-build create 时会选择要使用的插件，这些插件会被直接打包在 bundle.js 中：

- 安装 x-animate 和 x-fullpage 会自动将 animate.css 下载并打包，无需使用 import 'animate.css'。

- x-fullpage 依赖 x-touch，务必一起安装。

### 多个插件调用

每个插件都会有钩子函数，在不同的时间去调用钩子，然后初始化其他的插件是正确的开发方式，例如：

x-load 是处理图片加载的，在加载过程中会创建 loading 效果遮挡页面（此时用户处于等待过程），x-fullpage 和 x-animate 都是带执行动画的插件，所以动画的执行需要在 loading 结束时 init。

```javascript
  // 以 x-load 与 x-animate 为例
  import XLoad from 'x-load';
  import XAnimate from 'x-animate'

  let xAnimate = new XAnimate();

  new XLoad({
    afterLoading: function() {
      xAnimate.init();
    }
  });
```