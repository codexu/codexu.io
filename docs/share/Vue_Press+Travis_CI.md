# 拯救懒癌文档君 - VuePress + Travis CI + Github Pages 自动线上生成文档

## 只有一位观众的舞台

上周发了一片[《究竟什么是前端脚手架？》](https://juejin.im/post/5d0337df6fb9a07ed2246a3c)，我在后面留言：

![](http://ww2.sinaimg.cn/large/006tNc79ly1g43yp0x2aoj30xm0cwdi4.jpg)

作为懒癌晚期患者，我克服重重阻力，还是决定分享一下懒到极致后连打包都不愿意操作的办法。

## 整体思路

1.Github 创建项目，本地创建切换到 docs 分支，通过 VuePress 构建文档项目（写一些文档），上传至 Github。

2.Travis CI 自动 clone 后安装依赖、编译、上传至 Github master 分支。

3.通过 GitHub Pages 功能将 master 分支上的内容展示在 web 上。

相关资料：

- 我的文档看下效果：[https://codexu.github.io/](https://codexu.github.io/)

- 我的文档远吗：[https://github.com/codexu/codexu.github.io](https://github.com/codexu/codexu.github.io)

- VuePress中文文档(1.x)：[https://v1.vuepress.vuejs.org/zh/](https://v1.vuepress.vuejs.org/zh/)

- Travis CI：[https://travis-ci.org](https://travis-ci.org)

## 创建项目

1.使用 VuePress 初始化项目，只说几点，[文档](https://v1.vuepress.vuejs.org/zh/guide/getting-started.html#%E5%85%A8%E5%B1%80%E5%AE%89%E8%A3%85)写的十分详细。

  - 依赖安装在 devDependencies。
  - package.json script 写运行和打包脚本，"serve": "vuepress dev docs"，"build": "vuepress build docs"。（这里按照自己习惯，后面做持续集成要用）
  - 创建 docs 文件夹，把所有 markdown 文档存放在这里。
  - docs/.vuepress/config.js 可以做大量配置。

2.使用 Github 创建项目 [name].github.io，例如我的文档是 codexu.github.io，关联到本地。

  > 为什么用 [name].github.io ？<br>
  因为在这个项目下，可以直接使用 https://[name].github.io/ 域名，短小精悍～

3.通过 `git checkout -b docs` 切换到 docs 分支，docs 分支存放文档源码，master 分支存放打包好的 HTML 等文件。

  > 为什么使用 master 分支存放打包后的文件？<br>
  因为在 [name].github.io 项目下没得选，你也可以换个其他仓库，就可以避免这个问题。

4.写一些文档，做一下简单的配置，先别急着提交到 Github。

## 通过 Travis CI 做自动化打包及部署

1.在根目录下创建 `.travis.yml` 文件，并写入一些内容：

  ```yml
  language: node_js
  node_js:
      - 10
  cache: yarn
  install:
      - yarn
  script:
      - yarn build
  after_success:
      - cd docs/.vuepress/dist
      - git init
      - git config --global user.name "${U_NAME}"
      - git config --global user.email "${U_EMAIL}"
      - git add -A
      - git commit -m 'deploy'
      - git push --quiet --force "https://${GH_TOKEN}@${GH_REF}" master:${P_BRANCH}
  ```

  - language: 语言选择 node_js，我们前端还有的选吗？
  - node_js: node版本，这块也许是越高越快？
  - cache: yarn 缓存，能使你构建速度更快...吧。
  - install: 安装依赖的包管理工具，使用 yarn 比 npm 快的多。
  - script: 一切就绪之后通过 yarn install 安装依赖。
  - after_success: 安装结束后，我们做一些打包和 push 到 Github 的指令。
  - 环境变量 `"${***}"` 这块后面会提到。

2.这时候可以 push 到 Github 了，因为没有 `.travis.yml` Travis CI 是不会理你的项目的，同时将默认分支改为 docs。

  ![](http://ww4.sinaimg.cn/large/006tNc79ly1g440x8gxunj31kc0dujua.jpg)

3.Github 增加一个 Personal access tokens，位置在 [Settings / Developer settings](https://github.com/settings/tokens)。

  ![](http://ww2.sinaimg.cn/large/006tNc79ly1g440wmo4u3j31fv0u0n4a.jpg)

  - Note 随意填，填 travis-ci 就行。
  - 除了 delete_repo 权限都打勾就行。

4.进入 [Travis CI](https://travis-ci.org)，使用 Github 登陆， 进入 [dashboard](https://travis-ci.org/dashboard)，此时应该可以看到你刚创建的项目。

  ![](http://ww3.sinaimg.cn/large/006tNc79ly1g440zv8m41j31ma09kgn0.jpg)

5.启动进入这个项目，右上角 More options 点击 setting，配置环境变量。

  ![](http://ww4.sinaimg.cn/large/006tNc79ly1g4411rip1mj32300rawid.jpg)

  - GH_REF: 项目地址（github.com/[name]/[name].github.io.git）注意去掉 `https://`。
  - GH_TOKEN: tocken 是通过上面第三部拿到的。
  - P_BRANCH: 要上传的分支，这里我们要传到 master。
  - U_EMAIL: 你的 Github 邮箱。
  - U_NAME: 你的 Github 用户名。

## 开启 GitHub Pages

![](http://ww2.sinaimg.cn/large/006tNc79ly1g4416ynbfkj310h0u0n39.jpg)