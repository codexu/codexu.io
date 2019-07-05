# Get started quickly

**Plugins** is the pillar function of x-build. It is dedicated to helping developers reduce business logic development and speed up project development. With different project requirements and different plug-ins, it can do more with less. All plugins are not dependent on x-build and can be used independently in any project.

## Core Plugin

Plugins | Status | Description |
| :------ | :------ | :------ |
[FULLPAGE](x-fullpage.md) | <img src="https://img.shields.io/badge/npm-v1.2.2-blue.svg"> | Full-screen scrolling for mobile Plugin that supports animation triggering. |
[LOAD](x-load.md) | <img src="https://img.shields.io/badge/npm-v1.3.4-blue.svg"> | Create Loading Effects, Control Image Loading the way. |
[ANIMATE](x-animate.md) | <img src="https://img.shields.io/badge/npm-v1.0.2-blue.svg"> | Screen scrolling to perform animations, support Animation group and lifecycle callbacks. |
[TOUCH](x-touch.md) | <img src="https://img.shields.io/badge/npm-v1.2.1-blue.svg"> | Make the native DOM support touch, Long press and slide events. |
[MUSIC](x-music.md) | <img src="https://img.shields.io/badge/npm-v1.0.2-blue.svg"> | Set background music and button controls. |


## Installation

1. Install with NPM and introduce plugins via import.

2. Use the `<script>` tag to introduce ** (not recommended)**.

## Multiple plugin calls

Each plugin will have a **lifecycle function**, calling the hook function at different times, and then initializing other plugins is the correct way to develop, for example:

X-load handles image loading. During the loading process, the loading effect occlusion page is created (the user is waiting for the process). x-fullpage and x-animate are plug-ins for executing animations, so the execution of the animation needs to be loading. At the end of the init.

```javascript
  // Example: x-load & x-animate
  import XLoad from 'x-load';
  import XAnimate from 'x-animate'

  const xAnimate = new XAnimate();

  new XLoad({
    afterLoading: function() {
      xAnimate.init();
    }
  });
```