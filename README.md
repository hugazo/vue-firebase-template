# Vue 3 Template

## About this project

I just wanted to create my own opinionated Vue project template. So i started from scratch, all the history is on this very same repo, mistakes and all.

Works best with Visual Studio Code, it has some rules set up on the same project. Eventually i will add some recommended plugins.

## Setup

### `.env`

Go to your [Firebase Project](https://console.firebase.google.com) and get your config file, then create a `.env` file with the following structure:

```bash
# Firebase Config
VITE_API_KEY=""
VITE_AUTH_DOMAIN=""
VITE_PROJECT_ID=""
VITE_STORAGE_BUCKET=""
VITE_MESSAGING_SENDER_ID=""
VITE_APP_ID=""
```

### `.firebaserc`

```json
{
  "projects": {
    "default": "your-project-name"
  }
}
```

### Development

```sh
# To run the local environment
yarn dev
```

### Build

```sh
# Build your project for production
yarn build
```

Then just upload your `dist/` folder to your cloud provider.

## Deployment

This app can be deployed at any server, but this is already preconfigured to deploy with firebase.

```sh
# Add firebase tools as a global package
yarn add global firebase-tools

# Login into firebase
firebase login

# After login just deploy
firebase deploy
```

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

### Eslint Setup

We use the airbnb base guides for Js and TS.
For Vue files we use the vue-essential guide.

VueJS has an issue declared where it won't check for the usage of the variables defined in the script when using the setup syntax. As a workaround the check of unused variables has been disabled for Vue files inside the `/src` folder.

### Component Auto Import

Powered by `unplugin-vue-components`

Just use your components in your templates and they will be auto imported.

This plugin has been already setup with the [Naive UI](https://www.naiveui.com/) framework. So the components will be auto registered in the components.d.ts file and tree shaken automatically.

For documentation please visit: [NaiveUI Docs](https://www.naiveui.com/en-US/os-theme/docs/usage-sfc)

### Api Auto Import

Supports the following API's. For more information on the available auto imports refer click [here](https://github.com/antfu/unplugin-auto-import/blob/main/src/presets).

- [Vue](https://v3.vuejs.org/api/global-api.html)
- [Vue-Router](https://next.router.vuejs.org/api/)
- [Pinia](https://pinia.esm.dev/core-concepts/)
- [@vueuse](https://vueuse.org/functions.html)
- [@vueuse/head](https://github.com/vueuse/head#api)

### Route aliasing

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
- [ ] PWA support
- [x] Firebase
  - [x] Auth
  - [ ] Firestore Database
  - [x] Hosting
- [x] Component Auto Import
- [x] API Auto Import
  - [x] Better support for browser
  - [x] HTML Head Handling
- [x] CSS Framework
  - [x] Naive Ui
  - [x] Vfonts
  - [ ] Icons
- [x] Build Process
- [ ] CI Pipelines
- [ ] VSCode Recommended Plugins
- [ ] Component Testing

## Known Issues

- `.eslintrc.js`: Added a temp fix for auto-imported API lint error on unplugin-auto-import - [Github Issue](https://github.com/antfu/unplugin-auto-import/issues/69)
- `tsconfig.json` Added `"skipLibCheck": true` to avoid build error on pinia-persist-plugin - [Github Issue](https://github.com/Seb-L/pinia-plugin-persist/pull/19)
