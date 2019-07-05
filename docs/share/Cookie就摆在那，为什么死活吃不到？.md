# Cookie就摆在那，为什么死活吃不到？

![](http://ww2.sinaimg.cn/large/006tNc79ly1g4elgmco0jj30b201eq2w.jpg)

浏览器里明明存在的cookie，居然获取不到???

```javascript
console.log(document.cookie);
// 没有???
```

![](http://ww3.sinaimg.cn/large/006tNc79ly1g4el31tek2j308c08it8t.jpg)

## 起因

近来闲来无事，打算了解一下后端，既然想一探究竟，就从基本的注册登录开始做起。

## 技术选型

作为一名前端开发人员，用 Node.js 去体验后端应该是最快上手的方式了。看了一下文档，好长...没那么多时间看，直接...

- 框架 koa2
- 数据库 Mysql，不会操作数据库找到了 Sequelize
- 请求 Axios

## 思路

- 账户密码，不做加密，直接明文。
- 登陆
  - 使用 jwt (jsonwebtoken) 生成 token 。
  - 使用 koa2 ctx.cookies.set 在后端设置 cookie ，保存 token 。
- 跨域请求 koa2-cors

## 问题来了

**问题一**：填好用户名密码，点击登录，浏览器中没有被设置 cookie

解决办法： 使用 Axios 请求时，增加属性 withCredentials: true，这样就请求就可以携带 cookie 了。

产生这种情况的原因是因为 koa2-cors，如果在前端使用代理跨域不会出现这种情况。

**问题二**：浏览器中虽然能看到 cookie 中已经存在 token，但是前端代码中获取不到

解决办法：koa2 设置 cookie 时，设置 httpOnly: false 即可。

## 查找原因

doucment.cookie 无法获取到 cookie 是因为 同源策略 和 HttpOnly 标记的原因。

**withCredentials**：表示跨域请求时是否需要使用凭证，默认是 false

> MDN
> XMLHttpRequest.withCredentials 属性是一个 Boolean 类型，它指示了是否该使用类似 cookies,authorization headers(头部授权)或者TLS客户端证书这一类资格证书来创建一个跨站点访问控制（cross-site Access-Control）请求。在同一个站点下使用 withCredentials 属性是无效的。
> 此外，这个指示也会被用做响应中 cookies 被忽视的标示。默认值是 false。
> 如果在发送来自其他域的 XMLHttpRequest 请求之前，未设置 withCredentials 为true，那么就不能为它自己的域设置 cookie 值。而通过设置 withCredentials 为true获得的第三方 cookies，将会依旧享受同源策略，因此不能被通过 document.cookie 或者从头部相应请求的脚本等访问。

**httpOnly**：服务器可访问 cookie, 默认是 true

> MDN
> 为避免跨域脚本 (XSS) 攻击，通过JavaScript的 Document.cookie API无法访问带有 HttpOnly 标记的Cookie，它们只应该发送给服务端。如果包含服务端 Session 信息的 Cookie 不想被客户端 JavaScript 脚本调用，那么就应该为其设置 HttpOnly 标记。

![](http://ww1.sinaimg.cn/large/006tNc79ly1g4enfdahomj308c07975h.jpg)

## 换种方式

MDN 上说 可能会 XSS 攻击，所以换种方式，存储到 localstorage 里吧。请求时，将 token 加在 header 中 Authorization。

## 总结

虽然绕了一圈，好像总结了两个没啥卵用的知识点，但是学习就是这样，遇到坑就积累一下。

希望有大佬能指点一下，如何做一个安全的登录。