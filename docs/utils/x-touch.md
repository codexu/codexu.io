# X-TOUCH
![](https://img.shields.io/npm/v/x-touch.svg)
![](https://img.shields.io/github/size/codexu/x-touch/dist/x-touch.min.js.svg)
![](https://img.shields.io/npm/dm/x-touch.svg)
![](https://img.shields.io/github/license/codexu/x-touch.svg)

Implement mobile click, long press, and direction sliding events for native DOM.

## Installation

- Install via <font color=DodgerBlue>npm</font> or <font color=DodgerBlue>yarn</font>:

```sh
npm install x-touch --save
```

## Getting off

- Reference using ES6:

``` javascript
import XTouch from 'x-touch';

const xTouch = new XTouch();
xTouch.init();
```

> This project is packaged in rollup using UMD format, supports AMD, CommonJS, and script tags, [download source] (https://github.com/codexu/x-touch/tree/master/dist)

- Bind the touch event for the DOM:

``` javascript
const root = document.getElementById('root');

root.xtouch('tap', function(status){
  // do someting!
})

```
### Event Name

- `'tap'` <font color=MediumSeaGreen>&lt;String&gt;</font> Click

- `'longTap'` <font color=MediumSeaGreen>&lt;String&gt;</font> long press

- `'swipUp'` <font color=MediumSeaGreen>&lt;String&gt;</font> swipe up

- `'swipDown'` <font color=MediumSeaGreen>&lt;String&gt;</font> Swipe down

- `'swipLeft'` <font color=MediumSeaGreen>&lt;String&gt;</font> swipe left

- `'swipRight'` <font color=MediumSeaGreen>&lt;String&gt;</font> swipe right

### Callback

- `this` <font color=MediumSeaGreen>&lt;Object&gt;</font> ` this points to the bound DOM.

- `status` <font color=MediumSeaGreen>&lt;Object&gt;</font> ` The parameters for this event.

## Configuration

Pass parameters when initializing XTouch:

``` javascript
const config = {
  slideMin: 50,
  tapMin: 10,
  longTapTime: 300
}

const xTouch = new XTouch(config);
```

### slideMin

`50` <font color=MediumSeaGreen>&lt;Number&gt;</font>

The minimum distance of the sliding event.

### tapMin

`10` <font color=MediumSeaGreen>&lt;Number&gt;</font>

Click on the maximum distance.

### longTapTime

`300` <font color=MediumSeaGreen>&lt;Number&gt;</font>

Long press the shortest time.