# X-MUSIC
![](https://img.shields.io/npm/v/x-music.svg)
![](https://img.shields.io/github/size/codexu/x-music/dist/x-music.min.js.svg)
![](https://img.shields.io/npm/dm/x-music.svg)
![](https://img.shields.io/github/license/codexu/x-music.svg)

Set background music and playback controls.

## Installation

- Install via <font color=DodgerBlue>npm</font> or <font color=DodgerBlue>yarn</font>:

```sh
Npm install x-music --save
```

## Getting off

- Reference using ES6:

``` javascript
Import XMusic from 'x-music';

/ / Use webpack please import to introduce static resources
Import src from '***';
Import playImg from '***';
Import pauseImg from '***';

Const xMusic = new XMusic({ src, playImg, pauseImg });
xMusic.init();
```

> This project is packaged in rollup using UMD format, supporting the introduction of AMD, CommonJS, and script tags. [Download Source] (https://github.com/codexu/x-music/tree/master/dist)

## Parameters

If you are packaging with webpack, use import to load the static resource:

### src*

`none` <font color=MediumSeaGreen>&lt;String&gt;</font>

Music path

### playImg*

`none` <font color=MediumSeaGreen>&lt;String&gt;</font>

Play button image path

### pauseImg*

`none` <font color=MediumSeaGreen>&lt;String&gt;</font>

Pause button image path

### width

`none` <font color=MediumSeaGreen>&lt;String&gt;</font>

Button image width (px)

### height

`none` <font color=MediumSeaGreen>&lt;String&gt;</font>

Button picture height (px)