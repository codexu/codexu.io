# Concept

If you don't have much knowledge of [webpack](https://webpack.docschina.org/concepts/), this chapter will take you through the basic workings of X-BUILD, allowing you to save a lot of time and quickly enjoy the webpack. Convenient.

::: warning
All the content in this chapter does not require you to configure, just need to know.
:::

## Entry file

When X-BUILD initializes the project, the association of the entry files is pre-made, so you don't need to care about how the html/js/css files are related:

### HTML

The [HtmlWebpackPlugin](https://webpack.docschina.org/plugins/html-webpack-plugin) is configured with the HTML entry template file (src/index.[html/pug]), which was selected when you initialized the project. After the Pug(Jade)** option, the pug-loader is automatically installed to support the pug or jade files. It is also recommended to use pug as the template engine for HTML.

[What is the pug template engine? ](https://pug.bootcss.com/api/getting-started.html)

### CSS

If you select the **CSS Pre-processors** option when initializing the project, you will be asked again which CSS preprocessor to choose as the development tool (single choice), then install the corresponding loader, recommend at least one CSS pre-control processor.

[PostCSS](https://postcss.org/) Plugin [Autoprefixer](https://github.com/postcss/autoprefixer) Automatically completes the browser private prefix. If you use more plugins, please install them yourself and configure them in postcss.config.js in the directory.

[Failed to install Sass? ](https://segmentfault.com/a/1190000010984731)

### JavaScript

- [Babel](https://www.babeljs.cn/) : It allows you to write new versions of JavaScript code that will still work in older browsers.

- [ESLint](https://cn.eslint.org/) : A grammar rule and code style checking tool whose goal is to ensure code consistency and avoid errors.

- [TypeScript](https://www.tslang.cn/index.html) : TypeScript is not a completely new language, it is a superset of JavaScript, adds a type mechanism to the JavaScript ecosystem, and finally compiles the code. For pure JavaScript code.

Quickly created projects don't include these two features, but they are still selected by default in the create command, and they can help you develop more advanced and standardized code.

## Static Resources

Webpack will dynamically package all dependencies, because each module can now explicitly state its own dependencies, avoiding packaging unused modules.

### Create a directory <font color=red>*</font>

There are no **static resources** directories in the initialized project, but this does not mean that you can place your resource files arbitrarily:

Create a assets/ directory under the src/ directory:

**Image**: Create the directory assets/images, support png|jpe?g|gif|svg|webp format.

**Font**: Create the directory assets/font, which supports the woff|eot|ttf|otf format.

**Video**: Create the directory assets/media/, which supports the mp4|webm|ogg|mp3|wav|flac|aac format.

Webpack treats all resources as modules. You can import these files with `require('')`. X-BUILD has already installed the loader for reading these files, so you can use it with confidence.

[Why can static resource files be introduced as modules? ](https://webpack.docschina.org/loaders/file-loader)

### ~~Loading data (late implementation)~~

Useful resources that can be loaded are also data such as JSON files, CSV, TSV, and XML. Similar to NodeJS, JSON support is actually built-in, which means that import Data from './data.json' will run normally by default. To import CSV, TSV, and XML, you can use csv-loader and xml-loader. Let's handle loading these three types of files:

```
npm install --save-dev csv-loader xml-loader
```

Add the following code to loaders in xbuild.config.js :

```javascript
loaders: [
  {
    Test: /\.(csv|tsv)$/,
    Use: [
      'csv-loader'
    ]
  },
  {
    Test: /\.xml$/,
    Use: [
      'xml-loader'
    ]
  }
]
```

## Development Environment

### HMR

Hot module replacement (HMR) is one of the most useful features provided by webpack, which allows all types of modules to be updated at runtime without a full refresh.

### Source Map

This item maps the compiled code back to the original source code, and when your code reports an error in the browser, it can help you quickly locate the source code.

### wacth

When the dependent file changes, it triggers a recompilation, so you don't have to manually run the entire build.

## Production Environment

### Module separation

This feature separates the code into different bundles and can then load them on demand or in parallel. Code separation can be used to get smaller bundles and control resource loading priorities.

### CSS separation

By default, CSS is packaged in a JavaScript file, and X-BUILD uses [ExtractTextWebpackPlugin](https://webpack.docschina.org/plugins/extract-text-webpack-plugin) to extract text (CSS) from the bundle to Separate file.

### Clean up the /dist folder

When `npm run build` is executed, X-BUILD will output the compiled file in the dist directory of the directory, and will clean up the dist directory when compiling or using the development environment again.

## Environment Variable

NODE_ENV is a system environment variable exposed by Node.js to the execution script. Process and development environments can be distinguished by process.env.NODE_ENV:

Production environment: <font color=MediumSeaGreen>[ production ]</font>

Development environment: <font color=MediumSeaGreen>[ development ]</font>

```
// example
if (process.env.NODE_ENV !== 'production') {
  Console.log('Looks like we are in development mode!');
}
```

## Adaptive Solutions

X-BUILD uses the adaptive solution of px2rem-loader + hotcss, which can be enabled by selecting **Mobile layout** during initialization.

### usage

First, communicate with the designer to determine the width of the design draft, such as 750px. Of course, this is not the optimal setting. You can set **designWidth** in xbuild.config.js with type Number.

Then in the code, the size of the elements in the design is how many pixels, and the same size can be written in css. In the browser, you can see that px has been converted to rem. After replacing the device, the display is completely consistent.

> [REM Adaptive Solutions] (https://juejin.im/post/5ad9a694f265da0b7a203f9b)

## request interface

When there are a large number of interfaces, using the autoload api module provided by X-BUILD will save a lot of operations:

### API Directory

Src/api/index.js is the api main entry file, using the [require.context] (https://webpack.docschina.org/guides/dependency-management/#require-context) method provided by webpack, inside the api/ All files (including subpaths) are automatically loaded and an object is exported via ES6.

### How to use

Assuming you create a GET request, create getUser.js under the api/ directory, here we use axios for example:

```JavaScript
// getUser.js
import axios from 'axios';

export default function () {
  return axios.get('...')
}
```

The exported file will be retrieved by index.js and will be exported with the file name as the key in the object.

### Using the interface

Suppose you use an interface in src/srcipts/index.js:

```JavaScript
import Api from '../api'
Api.getUser()
```