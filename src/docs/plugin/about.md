## 概述

**插件**是 x-build 的支柱功能，致力于协助开发者减少业务逻辑开发、加快项目开发，根据不同的项目需求，搭配不同的插件，事半功倍。所有的插件并非依赖于 x-build，并且完全可以独立使用在任何项目中。

## 核心插件

| Plugins | Status | Description |
| :------ | :------ | :------ |
| [X-FULLPAGE](x-fullpage.md) | <img src="https://img.shields.io/badge/npm-v1.2.2-blue.svg"> | 适用于移动端的整屏滚动插件，支持动画触发。 |
| [X-LOAD](x-load.md) | <img src="https://img.shields.io/badge/npm-v1.3.4-blue.svg"> | 创建Loading效果、控制图片加载方式。 |
| [X-ANIMATE](x-animate.md) | <img src="https://img.shields.io/badge/npm-v1.0.2-blue.svg"> | 屏幕滚动执行相应动画，支持动画组和生命周期回调。 |
| [X-TOUCH](x-touch.md) | <img src="https://img.shields.io/badge/npm-v1.2.1-blue.svg"> | 使原生DOM支持轻触、长按和滑动事件。 |
| [X-MUSIC](x-music.md) | <img src="https://img.shields.io/badge/npm-v1.0.2-blue.svg"> | 设置背景音乐与按钮控制。 |


## 安装

1. 使用 NPM 进行安装，通过 import 引入插件。

2. 使用 `<script>` 标签引入 **(不推荐)**。

## 多个插件调用

每个插件都会有**生命周期函数**，在不同的时间去调用钩子函数，然后初始化其他的插件是正确的开发方式，例如：

x-load 是处理图片加载的，在加载过程中会创建 loading 效果遮挡页面（此时用户处于等待过程），x-fullpage 和 x-animate 都是带执行动画的插件，所以动画的执行需要在 loading 结束时 init。

```javascript
  // 例：x-load & x-animate
  import XLoad from 'x-load';
  import XAnimate from 'x-animate'

  const xAnimate = new XAnimate();

  new XLoad({
    afterLoading: function() {
      xAnimate.init();
    }
  });
```