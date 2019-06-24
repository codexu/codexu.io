# Quick start

Quickly create a new project with the following instructions:

![](http://ww2.sinaimg.cn/large/006tNc79ly1g3yg6q07lij31ae0u0aiy.jpg)

```sh
X-build create [name] -q
```

::: tip Tips
- name: The name of the project directory you want to create.
- Parameters -q: Create a project quickly.
- x-build alias x, shorter instructions.
:::

This process will copy the template to the `/[name]` of the current directory, and then automatically install the dependency (this process is more time-consuming to install the yarn):

![](http://ww1.sinaimg.cn/large/006tNc79ly1g3yg6t66kdj31ae0u0wob.jpg)

After the installation is complete, there will be a next prompt, enter the created directory:

![](http://ww1.sinaimg.cn/large/006tNc79ly1g3yg6ukdy0j31ae0u047w.jpg)

Go to the created directory and start webpack devServer via npm or yarn:

```sh
Cd [name]
Npm run serve
```

![](http://ww3.sinaimg.cn/large/006tNc79ly1g3yg86s170j31ae0u0dpi.jpg)

Open [http://localhost:8080](http://localhost:8080) at this point. If you see the x-build and version number, your project is up and running.

::: warning
Quickly created projects only provide the basic functionality provided by [webpack](https://webpack.docschina.org/concepts/mode/). To experience more features, please continue to the [next chapter](/create_project).
:::