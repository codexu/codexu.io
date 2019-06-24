# X-ANIMATE
![](https://img.shields.io/npm/v/x-animate.svg)
![](https://img.shields.io/github/size/codexu/x-animate/dist/x-animate.min.js.svg)
![](https://img.shields.io/npm/dm/x-animate.svg)
![](https://img.shields.io/github/license/codexu/x-animate.svg)

Perform animations through screen scrolling, support for time-lapse animation, control animation execution time, execution offsets, lifecycle callbacks, animation groups, and support Animate.css perfectly.

## Installation

- Install via <font color=DodgerBlue>npm</font> or <font color=DodgerBlue>yarn</font>:

```sh
Npm install animate.css x-animate --save
```

## Quote

- Install through the package manager:

```javascript
// javascript
Import 'animate.css'
Import XAnimate from 'x-animate'
Const xAnimate = new XAnimate();
xAnimate.init();
```

> This project is packaged in rollup using UMD format, and supports AMD, CommonJS, and script tags. [Download Source] (https://github.com/codexu/x-animate/tree/master/dist)

## Getting off

Add a <font color=Green>animate</font> attribute to at least one DOM and assign an animated name, for example:

```html
<!-- html -->
<div animate="bounceInLeft"></div>
```

## single element animation

An animation that only works on a single element will be executed when scrolled to its corresponding position:

```html
<!-- html -->
<div animate="[animate-name]"
     Delay="1000"
     Duration="1000"
     Offset="100"
     animateEnter="animateEnterFn"
     animateLeave="animateLeaveFn"
></div>
```

### animate*

`none` <font color=MediumSeaGreen>&lt;String&gt;</font>

Refer to the animate.css animation name, or refer to the custom animation.

### delay

`0(ms)` <font color=MediumSeaGreen>&lt;Number&gt;</font>

Delay: When the screen scrolls to the corresponding position, the delay ends the execution of the animation.

### duration

`1000(ms)` <font color=MediumSeaGreen>&lt;Number&gt;</font>

Duration: The duration of the animation execution. The larger the value, the slower the animation.

### offset

`0(px)` <font color=MediumSeaGreen>&lt;Number&gt;</font>

Offset: The animation is performed when the bottom of the screen is the axis and the default scrolls to when an element has displayed half the height. If the offset is positive, you need to scroll the corresponding distance. If the offset is negative, the animation will be executed in advance.

### animateEnter(item)

`none` <font color=MediumSeaGreen>&lt;Function&gt;</font>

Lifecycle function: The function is executed when an element animation begins.

### animateLeave(item)

`none` <font color=MediumSeaGreen>&lt;Function&gt;</font>

Lifecycle function: Executes a function when an element's animation ends.

## Animation Group

When scrolling to an area requires sub-elements in it to make continuous animations (for example, continuous animation for map points):

```html
<!-- html -->
<div animate-group>
  <div animateItem="[animate-name]"></div>
</div>
```

### animate-group*

Add this property to the parent element of an animation group.

### animateItem*

The name of the animation, and the child elements support all the attributes of the single element.

## Binding life cycle function

Add the attribute <font color=Green>animate-enter</font> (before the animation) or <font color=Green>animate-leave</font> (after the animation) to the element that needs to be triggered. The value is defined in the methods. The name of the function.

```html
<!-- html -->
<div animate-enter="animateEnter" animate-leave="animateLeave"></div>
```

Define the functions that need to be executed in methods:

```javascript
// javascript
Let xAnimate = new XAnimate({
  Methods: {
    animateEnterFn(item) {
      Console.log('animateEnter', item);
    },
    animateLeaveFn(item) {
      Console.log('animateLeave', item);
    }
  }
});
```

## Custom animation

Use custom animations, such as new definition newAnimate animations:

```css
/* css */
@keyframes newAnimate {
  From {
    Opacity: 0;
  }
  To {
    Opacity: 1;
  }
}

.newAnimate {
  Animation-name: newAnimate;
}
```

```html
<!-- html -->
<div animate="newAnimate"></div>
```

## Other configuration

```javascript
// javascript
Const xAnimate = new XAnimate({
  // The default value 'animate', corresponding to <div animate=""></div>, prevents naming conflicts with other plugins
  Name: 'animate',
  // The default value is 'delay', corresponding to <div delay=""></div> to prevent naming conflicts with other plugins
  Delay: 'delay',
  // The default value is 'duration', corresponding to <div duration=""></div> to prevent naming conflicts with other plugins
  Duration: 'duration'
});
```