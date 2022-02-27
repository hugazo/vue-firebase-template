# Vue 3 Template

## Contents

- [About This Project](#about-this-project)
- [Stack](#stack)
- [Setup](#setup)
- [Development](#development)
- [Build](#build)
- [Deployment](#deployment)
- [Nice Things to Have](#nice-things-to-have)
- [Features](#features)
- [To-do](#to-do)
- [Known Issues](#known-issues)

## About this project

I just wanted to create my own opinionated Vue project template. So i started from scratch, all the history is on this very same repo, mistakes and all.

Works best with Visual Studio Code, it has some rules set up on the same project. Eventually i will add some recommended plugins.

## Stack

- Made with TypeScript.
- Vite For development and build.
- Vue 3 as FrontEnd Library.
- Vue Router for routing.
- Pinia for State Management.

## Setup

### Needed Files

#### `.env`

Go to your [Firebase Project](https://console.firebase.google.com) and get your config file, then create a `.env` file with the following structure:

```bash
# Firebase Emulator Base URL
FIREBASE_EMULATOR_URL="http://localhost"
# Firebase Config
VITE_API_KEY=""
VITE_AUTH_DOMAIN=""
VITE_PROJECT_ID=""
VITE_STORAGE_BUCKET=""
VITE_MESSAGING_SENDER_ID=""
VITE_APP_ID=""
```

#### `.firebaserc`

```json
{
  "projects": {
    "default": "your-project-name"
  }
}
```

### Local Setup

For local development, you need to have installed `firebase-tools` as a global package and be logged on firebase tools.

```sh
npm install -g firebase-tools
```

```sh
firebase login
```

### Container

This project has a Docker container preconfigured for development. To use it you will need:

- [Docker](https://www.docker.com/get-started)
- [Visual Studio Code](https://code.visualstudio.com/)
  - [Remote Development extension](https://marketplace.visualstudio.com/items?itemName=ms-vscode-remote.vscode-remote-extensionpack)

After this, open the project in VsCode and run the **Remote-Containers: Reomen in Container** command. Then the Developer container will be created, this can take some time in the first run.

For ease of use, it is suggestted to running the tasks from the `package.json` file directly from Visual Studio Code.

## Development

This is the swiss knife, runs:

- Vite local Server: With hot reload and HMR support.
- Firebase Emulators: With local environment autosave.
- Firebase Functions Compiler: With hot reload and emulator auto restart.

```sh
yarn dev
```

Builds the project for development. Seves all the firebase emulators including hosting.

```sh
yarn dev:local
```

## Build

Builds the project in development mode. Useful for debuging and testing.

```sh
yarn build:dev
```

Builds the project in production mode. Ready for deployment.

```sh
yarn build:prod
```

## Deployment

This examples are integrated with firebase. But the build can be uploaded to any static server or cloud provider.

[IMPORTANT]: You must be logged in your firebase project and completed the [setup of the project](#setup).

### Full Deployment

A single command can deploy the whole project. This includes Firebase Hosting, Firebase Functions, Firestore Rules and Firebase Storage Rules.

```sh
yarn deploy
```

### Per-service Deployment

If needed, you can deploy per-service:

```sh
# Deploys Hosting
yarn deploy:hosting

# Deploys Functions
yarn deploy:functions

# Deploys Firestore
yarn deploy:firestore
```

Further commands can be examined in the `package.json` file.

## Nice Things to Have

- Built with Vite and for fast performance on development.
- Node version lock via nvm.
- Built in Typescript with Javascript support for components and scripts, just use whatever you like.
- Use the latest Vue3 features, script setup and composition api are fully supported.
- Supports Pug as Template Lang, no more ugly html.
- Eslint with a comprehensible set of rules from the VueJS Team and Airbnb.
- Pre-commit lint checking with Husky.
- Route and alias auto generation.
- Support for 404 handler out of the box.
- Named route support for components with the SFC `<route>` tag.
- Layouts support.
- State Management via Pinia 🍍
- Component Auto Import
- Naive UI as UI Framework
- Auto Import & Automatic Tree Shaking - No more `import ref from 'vue'`!!!!
- @vueuse installed and auto imported by default.

## Also With VsCode

- Convert HTML templates into Pug with one click.

## Features

### File Based Router

Provided by the `vite-plugin-pages` package.

The `.vue` files under the `src/pages` are mapped as a route.

#### Authentication

If you need to protect your route you can pass the `meta.requiresAuth` value in the `<route>` block. This will check if the user is logged in in the Auth Store.

```html
<route lang="yaml">
meta:
  requiresAuth: true
</route>
```

#### Navbar Route Menu

If you want to add your route to the Navbar, you can pass the `navbarDisplay` (boolean) `navbarName` (string) in the `<route>` meta block. This will add a link in your authenticated navbar layout.

```html
<route lang="yaml">
meta:
  navbarDisplay: true
  navbarName: 'Example'
</route>
```

### Eslint Setup

We use the airbnb base guides for Js and TS.
For Vue files we use the vue-essential guide.

VueJS has an issue declared where it won't check for the usage of the variables defined in the script when using the setup syntax. As a workaround the check of unused variables has been disabled for Vue files inside the `/src` folder.

### Component Auto Import

Powered by `unplugin-vue-components`

Just use your components in your templates and they will be auto imported.

This plugin has been already setup with the [Naive UI](https://www.naiveui.com/) framework. So the components will be auto registered in the components.d.ts file and tree shaken automatically.

For documentation please visit: [NaiveUI Docs](https://www.naiveui.com/en-US/os-theme/docs/usage-sfc)

#### Icon Auto Import

By default [Tabler Icons](https://tabler-icons.io/) from Iconify are installed and auto imported as needed.

Check the icons at [@iconify/tabler](https://icon-sets.iconify.design/tabler)

```vue
<template lang="pug">
tabler-arrow-bar-right
</template>
```

### Api Auto Import

Supports the following API's. For more information on the available auto imports refer click [here](https://github.com/antfu/unplugin-auto-import/blob/main/src/presets).

- [Vue](https://v3.vuejs.org/api/global-api.html)
- [Vue-Router](https://next.router.vuejs.org/api/)
- [Pinia](https://pinia.esm.dev/core-concepts/)
- [@vueuse](https://vueuse.org/functions.html)
- [@vueuse/head](https://github.com/vueuse/head#api)

### Import aliasing

Provided by: `vite-aliases` npm package.

All folders under the `src` folder will be mapped as alias. The current structure of the folders will create the following aliases:

```javascript
{
  @: './src',
  @assets: './src/assets',
  @components: './src/components',
  @layouts: './src/layouts',
  @pages: './src/pages',
  @store: './src/store'
}
```

As the project grows, more folders will be added and the tsconfig.json file will be updated with the new aliases.

### Layouts

This template supports layouts via [`vite-plugin-vue-templates`](https://github.com/JohnCampionJr/vite-plugin-vue-layouts)

If not defined, the route will use the `default.vue` layout.

To define a template for the route, you need to provide the template in the `<route>` block. In this case, the component will look for `templates/custom.vue` for it's layout. You can also name the route for named links.

```html
<route lang="yaml">
meta:
  name: 'named-route'
  layout: custom
</route>
```

### State management

Achieved using [`pinia`](https://pinia.esm.dev/)

The `src/store/demo.ts` file has a fully working demo store. And the `App.vue` file uses this store.

### Persisted state

For persisted state, you need to declare the value of the persisted state in your store. Refer to the `src/store/demo.ts` file for a working example.

### Pwa Support

The app is configured as a PWA out-of-the box. If you need more personalization, you can follow the guides on [vite-plugin-pwa](https://vite-plugin-pwa.netlify.app/)

## TO-DO

- [x] Base Project
- [x] File Based Router
- [x] 404 Route Handler
- [x] Eslint Support
- [x] Husky Pre-Commit
- [x] Import Aliases
- [x] Layouts Support
- [x] State Management
  - [x] Persisted State
- [x] PWA support
- [x] Firebase
  - [x] Emulators
    - [x] Local Dev Env
    - [x] Local Preview Env
    - [x] 1-line deploy
  - [x] Auth
  - [x] Firestore Database
  - [x] Hosting
  - [x] Storage
- [x] Component Auto Import
  - [x] Icons auto Import
- [x] API Auto Import
  - [x] Better support for browser
  - [x] HTML Head Handling
- [x] CSS Framework
  - [x] Naive Ui
  - [x] Vfonts
  - [x] Icons
- [x] Build Process
- [ ] CI Pipelines
- [x] IDE Integration
  - [x] Visual Studio Code
  - [x] Docker Dev Container
  - [x] Recommended Plugins
- [ ] Component Testing

## Known Issues

- `tsconfig.json` Added `"skipLibCheck": true` to avoid build error on pinia-persist-plugin - [Github Issue](https://github.com/Seb-L/pinia-plugin-persist/pull/19)
