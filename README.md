# Vue 3 Template

## Features

### File Based Router

Provided by the `vite-plugin-pages` package.

The `.vue` files under the `src/pages` are mapped as a route.

### Eslint Setup

We use the airbnb base guides for Js and TS.
For Vue files we use the vue-essential guide.

VueJS has an issue declared where it won't check for the usage of the variables defined in the script when using the setup syntax. As a workaround the check of unused variables has been disabled for Vue files inside the `/src` folder.

## TO-DO:

- [x] Base Project
- [x] File Based Router
- [x] 404 Route Handler
- [x] Eslint Support
- [x] Husky Pre-Commit
- [ ] Import Aliases
- [ ] Layouts Support
- [ ] VueX Store
- [ ] Firebase Integrations
  - [ ] Auth
  - [ ] Firestore Database
  - [ ] Hosting
- [ ] CSS Framework
- [ ] Build Process
- [ ] Deploy Process
