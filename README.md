progress-bar-ractive
==========================

This repository contains ProgressBar Project

Includes the following tools, tasks, and workflows:

- Ractive js
- Precompiled Ractive templates with Ractivate
- Browserify (with browserify-shim)
- Watchify (caching version of browserify for super fast rebuilds)
- jQuery (from npm)
- LiveReload
- Static Server
- Image optimization
- Error Notifications in Notification Center

If you've never used Node or npm before, you'll need to install Node.

### Install Gulp Globally
Gulp must be installed globally in order to use the command line tools. *You may need to use `sudo`*
```
npm install -g gulp
```
### Install npm dependencies
```
npm install
```
This runs through all dependencies listed in `package.json` and downloads them
to a `node_modules` folder in your project directory.

### Run gulp http://localhost:3000/.
```
gulp
```

This will create and run the task defined in `gulpfile.js`.
