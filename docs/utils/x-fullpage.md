# X-FULLPAGE
![](https://img.shields.io/npm/v/x-fullpage.svg)
![](https://img.shields.io/github/size/codexu/x-fullpage/dist/x-fullpage.min.js.svg)
![](https://img.shields.io/npm/dm/x-fullpage.svg)
![](https://img.shields.io/github/license/codexu/x-fullpage.svg)

Full-screen scrolling plug-in for mobile, relying on X-TOUCH, it can help you quickly and easily create high-performance mobile full-screen scrolling effects.
X-FULLPAGE can only assist you in triggering animations, using css animation libraries (recommended animate.css) or custom animations to achieve page flip animation effects.

## Installation

- Install via <font color=DodgerBlue>npm</font> or <font color=DodgerBlue>yarn</font>:

```sh
npm install x-fullpage x-touch animate.css --save
```

> This tutorial uses animate.css as the animation library by default

## Quote

X-FULLPAGE depends on X-TOUCH, please make sure X-TOUCH takes precedence init:

```javascript
// javascript
import XFullpage from 'x-fullpage';
import XTouch from 'x-touch';
import 'animate.css';

const xTouch = new XTouch();
const xFullpage = new XFullpage();

xTouch.init();
xFullpage.init();
```

> This project is packaged in rollup using UMD format, and supports AMD, CommonJS, and script tags. [Download Source] (https://github.com/codexu/x-fullpage/tree/master/dist)

## Getting off

- Create a root node with an id of <font color=green>root</font>.
> Use the pug template engine when creating with x-build-cli, this node has been created in index.pug, ** skip this step**.

- Create multiple <font color=green>class</font> nodes under <font color=green>#root</font> for <font color=green>x-page</font> to represent each page. You can write the contents of the page inside.

```html
<!-- html -->
<div id="root">
  <div class="x-page"></div>
  <div class="x-page"></div>
  <div class="x-page"></div>
</div>
```

## Animation parameters

Animate the element in <font color=green>.x-page</font> :

```html
<!-- html -->
<div class="x-page">
  <div animate="animate-name"
      Delay=1000
      Duration=1000
  ></div>
</div>
```

### animate

`empty` <font color=MediumSeaGreen>&lt;String&gt;</font>

Animation name: Refer to animate.css, or customize the animation class name.

### delay

`1000(ms)` <font color=MediumSeaGreen>&lt;Number&gt;</font>

Delay: Start timing when the page scrolls.

### duration

`1000(ms)` <font color=MediumSeaGreen>&lt;Number&gt;</font>

Animation duration.

## Instance parameters

When instantiating XFullpage, pass in the object configuration parameter:

``` javascript
  new XFullpage({
    // ...
  });
```

### root

`'root'` <font color=MediumSeaGreen>&lt;String&gt;</font>

Change this when your root node id doesn't want to use '#root'.

### pageClassName

`'x-page'` <font color=MediumSeaGreen>&lt;String&gt;</font>

Change this when your page node doesn't want to use .x-page.

### loop

`false` <font color=MediumSeaGreen>&lt;boolean&gt;</font>

The page turning cycle, after opening, the last page continues to slide back to the first page, and vice versa.

### flex

`true` <font color=MediumSeaGreen>&lt;boolean&gt;</font>

Flex layout mode, the content will be in the middle of the screen.

### duration

`1000` <font color=MediumSeaGreen>&lt;Number&gt;</font>

The duration of the page turning.

### indicator

`true` <font color=MediumSeaGreen>&lt;boolean&gt;</font>

Indicator switch.

### indicatorWidth

`'20px'` <font color=MediumSeaGreen>&lt;String&gt;</font>

Indicator dot diameter.

### indicatorColor

`rbga(255, 255, 255, .3)` <font color=MediumSeaGreen>&lt;color&gt;</font>

The default color of the indicator.

### indicatorCurrentColor

`rbga(255, 255, 255, .3)` <font color=MediumSeaGreen>&lt;color&gt;</font>

Indicator focus color.

### beforeChange(index)

`none` <font color=MediumSeaGreen>&lt;Function&gt;</font>

Callback function, triggered when the page starts scrolling.

- `index` <font color=MediumSeaGreen>&lt;Number&gt;</font> page index ( 0 ~ n )

### afterChange(index)

`none` <font color=MediumSeaGreen>&lt;Function&gt;</font>

Callback function, triggered when the page scroll ends.

- `index` <font color=MediumSeaGreen>&lt;Number&gt;</font> page index ( 0 ~ n )


## API

### pageTo(index)

`index` <font color=MediumSeaGreen>&lt;Number&gt;</font> page index ( 0 ~ n )

By calling pageTo through an instance, you can jump to the specified page:

```javascript
// Jump to page 3 after two seconds
setTimeout(() => {
  xFullpage.pageTo(2);
}, 2000);
```