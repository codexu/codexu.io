# X-LOAD
![](https://img.shields.io/npm/v/x-load.svg)
![](https://img.shields.io/github/size/codexu/x-load/dist/x-load.min.js.svg)
![](https://img.shields.io/npm/dm/x-load.svg)
![](https://img.shields.io/github/license/codexu/x-load.svg)

The preloading, lazy loading, and sequential loading control image downloading methods are mainly implemented for the loading loading progress of the H5 page.

## Installation

- Install via <font color=DodgerBlue>npm</font> or <font color=DodgerBlue>yarn</font>:

```sh
Npm install x-load --save
```

## Quote

- Install through the package manager:

```javascript
Import XLoad from 'x-load';
```

> This project is packaged in rollup using UMD format, supports AMD, CommonJS, and script tags, [download source] (https://github.com/codexu/x-load/tree/master/dist)

## Getting off

1. Add <font color=Green>id="root"</font> to the body wrapper and write all your body content under this <font color=Green>div</font>.

2. The X-BUILD project has been defined in index.pug <font color=Crimson>div#root</font> , and all the content is written in app.pug.

3. <font color=Crimson>&lt;img&gt;</font> tags use <font color=Green>data-src</font> to pass in image links, do not set <font color=Green>src</font> attribute .

4. Add at least one <font color=Crimson>&lt;img&gt;</font> tag to the attribute <font color=Green>prior</font> to indicate that this image needs to be loaded first.

```html
<!-- html -->
<div id="root">
  <img data-src="./abc.jpg" prior>
</div>
```

## Parameters

When instantiating XLoad, pass in the object configuration parameter:

```javascript
New XLoad({
  // ...
});
```

### wrapper

`#root` <font color=MediumSeaGreen>&lt;HTMLelement&gt;</font>

Incoming the body wrap layer DOM.

### loader

`null` <font color=MediumSeaGreen>&lt;HTMLelement&gt;</font>

If you need a custom loading effect, pass in a custom DOM.

### attr

`'data-src'` <font color=MediumSeaGreen>&lt;String&gt;</font>

Change this when the <font color=Crimson>&lt;img data-src="url"&gt;</font> naming conflicts.

### prior

`'prior'` <font color=MediumSeaGreen>&lt;String&gt;</font>

Change this when the <font color=Crimson>&lt;img prior&gt;</font> naming conflicts.

### sync

`true` <font color=MediumSeaGreen>&lt;Boolean&gt;</font>

Default sync loading (loaded in order), control <font color=Crimson>&lt;img prior&gt;</font> The remaining image loading mode after the image is loaded, set to false: asynchronous loading (load all images at the same time).

### loadImg

`null` <font color=MediumSeaGreen>&lt;String&gt;</font>

Image path, used to unload the background image of the completed image, note: use webpack, please use require().

### beforeLoading(object)

`none` <font color=MediumSeaGreen>&lt;Function&gt;</font>

Fires when instantiation is complete.

- `object` <font color=MediumSeaGreen>&lt;Object&gt;</font> points to the instance

### nextTickLoading(percent)

`none` <font color=MediumSeaGreen>&lt;Function&gt;</font>

Each <font color=Crimson>&lt;img prior&gt;</font> is fired after loading (whether successful or failed).

- `percent` <font color=MediumSeaGreen>&lt;Number&gt;</font> The current image loading progress is a decimal value of `0-1`.

### afterLoading()

`none` <font color=MediumSeaGreen>&lt;Function&gt;</font>

All <font color=Crimson>&lt;img prior&gt;</font> is executed after loading is complete.

- `object` <font color=MediumSeaGreen>&lt;Object&gt;</font> points to the instance