<p align="center"><img width="160" src="https://ws2.sinaimg.cn/large/006tNbRwly1fx67hwnhw1j308w06xdig.jpg" alt="x-animate"></p>

<p align="center">
  <img src="https://img.shields.io/jenkins/s/https/jenkins.qa.ubuntu.com/view/Precise/view/All%20Precise/job/precise-desktop-amd64_default.svg">
  <img src="https://img.shields.io/badge/npm-v1.3.4-blue.svg">
  <img src="https://img.shields.io/github/license/mashape/apistatus.svg">
</p>

<p align="center">
  <a href="https://github.com/codexu/x-load">X-LOAD</a>是控制图片加载方式的插件，主要功能为：提前加载、延迟加载、控制加载顺序和进度控制。
</p>

### 安装

- 通过`npm` or `yarn`安装：

```
  $ npm install x-load --save
  # OR
  $ yarn add x-load
```

- 通过script加载[x-load.min.js](https://raw.githubusercontent.com/codexu/x-load/master/dist/x-load.min.js)

### 引用

- 通过包管理器安装：

```javascript
  import XLoad from 'x-load';
  new XLoad();
```

- 通过`<script>`（此方式会污染全局变量）：

```javascript
  new XLoad();
```

### 起步

ℹ️ 正文包裹层增加 `id="root"` ，将你的所有正文内容写在这个 div 下。

⚠️ X-BUILD 项目已经在 index.pug 中定义好 `div#root` ，所有的内容写在 app.pug 内即可。

ℹ️ `<img>` 标签使用 `data-src` 传入图片链接，不要设置 `src` 属性。

ℹ️ 至少给一个 `<img>` 标签增加属性 `prior` ，表示此图片需要优先加载。

```html
<!-- html -->
<div id="root">
  <img data-src="./abc.jpg" prior>
</div>
```

### 参数表

实例化xLoad()，可以传入一个`[object]`自定义配置。

---

**wrapper** *`<HTMLelement>`*

- 默认值`#root`

- 传入正文包裹层DOM。

---

**loader** *`<HTMLelement>`*

- 默认值`null`

- 如果需要自定义loading效果，请将自定义DOM传入。

---

**attr** *`<String>`*

- 默认值`'data-src'`

- `<img data-src="url">`当命名冲突时改变此项。

---

**prior** *`<String>`*

- 默认值`'prior'`

- `<img prior>`当命名冲突时改变此项。

---

**sync** *`<Boolean>`*

- 默认值`true`：同步加载（按顺序加载）

- 控制`<img prior>`图片加载完成后剩余图片加载方式。

- 设置为`false`：异步加载(同时加载所有图片)

---

**loadImg** *`<String>`*

- 默认值`null`

- 图片路径，用于未加载完成图片的背景图。

- **注意**：使用webpack，请使用require()。

---

**beforeLoading()** *`<Function>`*

- 参数`object`：指向实例

- 当实例化完成后触发。

---

**nextTickLoading()** *`<Function>`*

- 参数`percent`：当前图片加载进度，值为`0-1`的小数

- 每一个`<img prior>`加载后时触发（不论成功或失败）。

---

**afterLoading()** *`<Function>`*

- 参数`object`：指向实例

- 所有`<img prior>`加载完成后执行。
