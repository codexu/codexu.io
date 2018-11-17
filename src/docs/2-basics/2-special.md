## 特殊语法

### pug

Pug是一种用于编写HTML的干净、空格敏感的语法，通过缩进的方式进行书写，[参考文档](https://pug.bootcss.com/api/getting-started.html)

在pug模板引擎下引用静态文件：

```pug
  img(src=require('@/assets/images/logo.png'))
```

ℹ️ 使用require()的语法引用，是为了使webpack正确解析静态资源路径，并在输出的文件时使用hash命名方式，例如`logo.png`，在输出时命名为`bg4dbd9d76.png`。

ℹ️ 使用`@`代表`src/`目录为查找的根目录。

### Stylus

Stylus的风格与Pug类似，所以在这里采用了这个css预处理器，[参考文档](https://www.zhangxinxu.com/jq/stylus/)

在stylus中引用文件：

```stylus
  @import "~@/utils/reset.styl"
```

⚠️ 使用`~@`代表`src/`目录为查找的根目录。**（注：这里使用与pug引用静态资源方式不同）**

ℹ️ 在引用文件和图片时，请使用`~@`的方式，避免路径原因导致程序解析错误。

### 插件

当 x-load 和 x-animate 一起使用时：

```javascript
import xLoad from 'x-load';
import Animate from 'x-animate';
/* eslint-disable */
new xLoad({
  afterLoading: (percent) => {
    new Animate()
  }
})
/* eslint-enable */
```
ℹ️ 请使用`x-load`的钩子函数`nextTickLoading`实例化`x-animate`，这么做是为了在网速慢时可以正确加载动画。

⚠️ 使用 `/* eslint-disable */ ... /* eslint-enable */` 避免es-lint报错。