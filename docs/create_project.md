# Create project

After learning the previous chapter, we quickly created an X-BUILD project, but its functionality is far from enough. Now re-create a project that belongs to you!

## Create

Create a new project with the following instructions:

```sh
X-build create [name]
```

## Parameters
<font color=MediumSeaGreen>[ -q ]</font> Skip options to quickly initialize a default project.

<font color=MediumSeaGreen>[ -n ]</font> Ignore version detection, which may affect the normal startup of the project.

## option

X-BUILD provides several options, choose different configurations according to the needs of the project, then create your development directory according to your choice and install the corresponding dependencies.

The options provided ([Need more features?](https://github.com/codexu/x-build/issues)):

- Babel (default)
- ESLint (default)
- TypeScript
- CSS Pre-processors
  - Sass
  - Less
  - Stylus
- Pug (Jade)
- Rem layout

::: tip How to choose?
**Keyboard ⬆️⬇️** Switch options, **Keyboard space [space]** Select or cancel options, **Keyboard [a]** Select all, **Keyboard [i]** Inverse selection.
:::

## Directory Structure

```dir
  .
  ├── xbuild.config.js # project configuration file
  ├── package.json
  ├── node_modules/
  └── src/ # source directory
      ├── api/ # AJAX request directory
      ├── scripts/
      | └── index.[js/ts] # ​​JavaScript main entry file
      ├── styles/
      | └── index.[css/scss/less/styl] #style entry file
      └── index.[html/pug] # html文
```

#### Entry file:

**HTML**:src/index.[html/pug]

**JavaScript**:src/scripts/index.[js/ts]

**CSS**: src/styles/index.[css/scss/less/styl]

#### assets Static Resources Directory:

**Image**: Create the directory assets/images, support png|jpe?g|gif|svg|webp format.

**Font**: Create the directory assets/font, which supports the woff|eot|ttf|otf format.

**Video**: Create the directory assets/media/, which supports the mp4|webm|ogg|mp3|wav|flac|aac format.

## Development and production

Usually the instructions of most CLI tools are the same, X-BUILD is no exception.

Development:

```sh
Npm run serve
```

produce:

```sh
Npm run build
```

To find out what X-BUILD has done in both development and production environments, check out the next chapter [Concepts](/Concepts).