# Pug

Pug是一种用于编写HTML的干净、空格敏感的语法，通过缩进的方式进行书写，[参考文档](https://pugjs.org/zh-cn/api/getting-started.html)

#### 在pug模板引擎下引用静态文件：

```pug
  img(src=require('@/assets/images/logo.png'))
```

- 使用require()的语法引用，是为了使webpack正确解析静态资源路径，并在输出的文件时使用hash命名方式，例如`logo.png`，在输出时命名为`bg4dbd9d76.png`。

- 使用`@` or `src` 代表`src/`目录为查找的根目录。

#### src/app.pug

- 根目录下的` index.pug `是` html `的入口文件，通过` include src/app `引入了` app.pug `文件。

- `app.pug `在一个` id `为` root `的` div `内。

- 通过` index.pug `改变title等属性。

#### Pug常用语法

- **属性**：使用括号增加HTML属性，class 与 id 可以跟在标签后或单独使用，多个属性之间使用使用逗号或空格分隔。

```pug
  a.button#btn(href='https://codexu.github.io')
```

- **代码**：Pug 为你在模板中嵌入 JavaScript 提供了可能。

```pug
  //- for循环
  - for (var x = 0; x < 3; x++)
    li item

  //- each
  - var list = ["Uno", "Dos", "Tres", "Cuatro", "Cinco", "Seis"]
  each item in list
    li= item

  //- case
  - var friends = 10
  case friends
    when 0
      p 您没有朋友
    when 1
      p 您有一个朋友
    default
      p 您有 #{friends} 个朋友

  //- if else
  - var user = { description: 'hello, codexu!' }
  #user
    if user.description
      p.description= user.description
    else
      p.description 用户没有描述
```

- **包含**：包含（include）功能允许您把另外的文件内容插入进来。

```pug
  include includes/head.pug
```

---

# Stylus

Stylus的风格与Pug类似，所以在这里采用了这个css预处理器，[参考文档](https://www.zhangxinxu.com/jq/stylus/)

#### 强制使用px单位

当启用rem布局时，所有的px单位会自动转化成rem，如果想强制使用px请参考：

``` stylus
  # stylus
  font-size 12px; /*px*/
```

⚠️ 在stylus下，别忘记结尾添加分号！

#### REM布局

X-BUILD 采用 `px2rem` + `hotcss` 的布局方案，css数值可以完全与设计稿保持一直。

如果在使用CLI创建项目时，开启了REM布局，则可以参考以下修改你的配置：

默认为`750px`设计稿开发，如果设计稿为其他尺寸，修改 ./build/lib/isRem.js 文件内的 remUnit 参数。

➡️ 设计稿640px : remUnit（40）

➡️ 设计稿750px : remUnit（46.875）

➡️ 设计稿818px : remUnit（51.75）

以750px宽度（默认）设计稿为例，当一个文字大小为24像素时（无需考虑是如何被转换成rem）：

```stylus
  font-size 24px
```

不论是在测试服务器，或打包后的css，都会把` px `转换成` rem `。