<p align="center"><img width="160" src="https://ws2.sinaimg.cn/large/006tNbRwly1fx67hwnhw1j308w06xdig.jpg" alt="x-animate"></p>

<p align="center">
  <img src="https://img.shields.io/jenkins/s/https/jenkins.qa.ubuntu.com/view/Precise/view/All%20Precise/job/precise-desktop-amd64_default.svg">
  <img src="https://img.shields.io/badge/npm-v1.2.2-blue.svg">
  <img src="https://img.shields.io/github/license/mashape/apistatus.svg">
</p>

# x-load

x-load是用于控制图片加载的ES6插件，主要功能为：提前加载、延迟加载、控制加载顺序和进度控制。

#### 特性

- loading持续时，同时加载需要的图片，每张图片加载结束会更新加载进度。
- 当加载进度100%时，结束并隐藏loading效果。
- loading结束时，开始加载剩余的图片，分为按序加载（默认）或同步加载。
- 剩余图片加载时可以配置图片加载的loading效果，此效果会在相应的图片加载完成之后隐藏。

#### 起步

- 通过npm安装

```
yarn add x-load
```

- 通过import引入x-load，通过`new`操作符创建一个新的xLoad对象。

```javascript
// javascript
import xLoad from 'x-load'
new xLoad()
```

- 创建一个`id="xl-load"`制作loading效果，为正文的包裹层增加`id="xl-wrapper"`(可配置:其他HTMLElement)。

`<img>`标签摒弃传统src属性，使用`data-src`传入图片链接。

具有`prior`属性的图片会在loading效果关闭前加载完成，不具有`prior`属性的会在loading效果结束后，默认按顺序加载(可配置:同时加载)。

```html
<!-- html -->
<div id="xl-load"></div>
<div id="xl-wrapper">
  <img data-src="./abc.jpg" prior>
</div>
```

#### 参数配置

- 一份完整的配置，你也可以什么都不配置，直接new XLoad()。

```javascript
import XLoad from '../utils/x-load.js'

let xload = new XLoad({
  // 传入loading DOM
  loader: document.getElementById('xl-load'),

  // 传入包裹层 DOM
  wrapper: document.getElementById('xl-wrapper'),

  // 属性名，data-src，图片链接，为防止与其他插件命名冲突
  attr: 'data-src',

  // prior属性存在时，图片会优先加载，为防止与其他插件命名冲突
  prior: 'prior',

  // 加载方式，默认为同步加载(按从上到下的顺序加载)，配置false为异步加载(同时加载)
  sync: true,

  // [剩余图片]在未加载事使用loading效果图片代替，此值传入图片url
  loadImg: require('../assets/images/oval.svg'),

  // 钩子函数 => 加载图片之前执行
  beforeLoading: (that) => {
    console.log('XLoad init之后执行，此时可以获取所有所有属性');
  },

  // 钩子函数 => 加载完所有‘prior’图片后执行
  nextTickLoading: (percent) => {
    console.log(`每一张[prior图片]加载完执行, 参数: ${percent}`);
  },
  
  // 钩子函数 => 每加载完一张‘prior’图片后执行
  afterLoading: (that) => {
    console.log('[prior图片]全部加载后执行');
  }
})
```

- 参数表

| 参数 | 类型 | 默认值 | 说明 |
| - | - | - | - | 
| wrapper | HTMLElement | `#xl-wrapper` | 控制正文的包裹层增，使其在文档加载时隐藏，在具有prior属性的图片加载完成后自动显示。 |
| loader | HTMLElement | `#xl-load` | 控制loading元素，使其在文档加载时显示，在具有prior属性的图片加载完成后自动隐藏，同时触发.beforeLoading() |
| attr | string | 'data-src' | `<img data-src>`代替src，如果与其他插件参数冲突可以修改此项。 |
| prior | string | 'prior' | `<img prior>`在loding效果时要加载的图片，如果与其他插件参数冲突可以修改此项。 |
| async | boolean | 'true' | 控制loading结束后图片加载的方式，默认为按序加载，false可以设置为同时加载。 |
| loadImg | string | null | 此项填图片路径，用于未加载的图片背景图片，如果用webpack打包注意，请使用require()导入图片，否则使用base64可能会导致图片不会打包。 |

- 钩子函数

`beforeLoading(that)`

在XLoad.init后触发，参数that指向XLoad。

`nextTickLoading(percent)`

每一张具有`prior`属性的图片加载完成时触发，函数传递一个参数`percent`获取当前图片加载的进度，此值为`0-1`的小数。

`afterLoading(that)`

所有[prior图片]加载完成后执行，参数that指向XLoad。
