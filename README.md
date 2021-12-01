# Vue 3 Template

## About this project

I just wanted to create my own Vue project template.

It works best with Visual Studio Code

## Features

### File Based Router

Provided by the `vite-plugin-pages` package.

The `.vue` files under the `src/pages` are mapped as a route.

### Eslint Setup

We use the airbnb base guides for Js and TS.
For Vue files we use the vue-essential guide.

VueJS has an issue declared where it won't check for the usage of the variables defined in the script when using the setup syntax. As a workaround the check of unused variables has been disabled for Vue files inside the `/src` folder.

### Route aliasing

Provided by: `vite-aliases` npm package.

All folders under the `src` folder will be mapped as alias. The current structure of the folders will create the following aliases:


```javascript
routes = {
  @: './src',
  @assets: './src/assets',
  @components: './src/components',
  @layouts: './src/layouts',
  @pages: './src/pages',
  @store: './src/store',
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

The `store/demo.ts` file has a fully working demo store. And the `App.vue` file uses this store.

## TO-DO:

- [x] Base Project
- [x] File Based Router
- [x] 404 Route Handler
- [x] Eslint Support
- [x] Husky Pre-Commit
- [x] Import Aliases
- [x] Layouts Support
- [x] State Management
- [ ] Firebase Integrations
  - [ ] Firebase File Auto Import
  - [ ] Auth
  - [ ] Firestore Database
  - [ ] Hosting
- [ ] CSS Framework
- [ ] Build Process
- [ ] Deploy Process
