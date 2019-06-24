# Configuration

By default, after using the `create` directive, the configuration file `xbuild.config.js` will be automatically generated according to the options in the directory. Changing this file will allow more personality configuration for the project.

## port

<font color=MediumSeaGreen>&lt;Number&gt;</font> <font color=DarkGray>8080</font>

**port**

Change the devServer port number. The default is 8080 port.

## open

<font color=MediumSeaGreen>&lt;boolean&gt;</font> <font color=DarkGray>false</font>

**Browser**

Automatically run the project using the default browser

## entry

<font color=MediumSeaGreen>&lt;Array&gt;</font>

**Entry file**

The entry files for index.js and index.[css/scss/less/styl] are set by default.

```javascript
// example:
Entry: [
  './src/scripts/index.js',
  './src/styles/index.[css/scss/less/styl]'
]
```

## eslint

<font color=MediumSeaGreen>&lt;boolean&gt;</font> <font color=DarkGray>Custom</font>

**Code Detection**

If true is selected during initialization, code detection is turned on and can be set to false to close ESLint.

## babel

<font color=MediumSeaGreen>&lt;boolean&gt;</font> <font color=DarkGray>Custom</font>

**translater**

It allows you to write new versions of JavaScript code that will still work in older browsers.

## mobileLayout

<font color=MediumSeaGreen>&lt;boolean&gt;</font> <font color=DarkGray>Custom</font>

**Adaptive layout**

Whether to use adaptive layout.

## designWidth

<font color=MediumSeaGreen>&lt;Number&gt;</font> <font color=DarkGray>750</font>

**Design draft size**

Usually refers to the width of the design, in pixels (px).

## base64

<font color=MediumSeaGreen>&lt;Number&gt;</font> <font color=DarkGray>8 * 1024</font>

**Static resources**

Set the size of the static resource packaged with base64. The default is 8kb.

## proxy

<font color=MediumSeaGreen>&lt;Object&gt;</font>

**cross-domain**

When you encounter cross-domain problems during development, you can use this configuration, the configuration method reference [webpack-proxy] (https://webpack.docschina.org/configuration/dev-server/#devserver-proxy).

```javascript
// example:
Proxy: {
  '/api': {
    Target: '#',
    pathRewrite: {
      '^/api': ''
    },
    changeOrigin: true,
    Secure: false
  }
}
```
