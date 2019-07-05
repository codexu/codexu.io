## Install Node.js

The development environment for X-BUILD relies on Node.js.

::: warning Node version requirements
X-BUILD requires [Node.js](http://nodejs.cn/) **8.9 or higher** (recommended 8.11.0+), you can use [nvm](https://github.com/creationix/nvm) Manage multiple versions of Node on the same computer.
If it is Windows, please open the cmd input command to execute. If it is a Unix-like system, open any terminal and enter the command execution.
:::

#### macOS User

It is recommended that you use nvm to manage the installation of Node.js.

Open the terminal and execute the following command.

```sh
curl -o- https://raw.githubusercontent.com/creationix/nvm/v0.33.8/install.sh | bash
```

When finished, restart the terminal and execute `nvm install --lts` to install the latest LTS version of Node.js.

#### Windows User

Visit the official website of Node.js https://nodejs.org/ to download the installation package of the corresponding platform and marked as LTS version, and perform the installation. After the installation is successful, execute it on the terminal:

Verify the installed Node.js version

Execute the following command in the terminal (Git Bash or other terminal emulator under Windows)

```sh
node -v
```

If the terminal prints out the version of Node.js, the installation is successful.

LTS: refers to the long-term maintenance version of Node.js, where you can see the official continuous maintenance period for each version of Node.js at [https://github.com/nodejs/Release#release-schedule](https://github.com/nodejs/Release#release-schedule)

Nvm: Please refer to [https://github.com/creationix/nvm](https://github.com/creationix/nvm)

## Installation CLI

Installing X-BUILD via npm is similar to @vue/cli and provides x-build and x (shorthand) commands in the terminal.

Use the following command to globally install the npm package:

```sh
npm install -g x-build
```

Once installed, you can access the **x-build** command from the command line.