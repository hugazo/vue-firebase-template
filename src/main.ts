// Base import
import { createApp } from 'vue';

// Head
import { createHead } from '@vueuse/head';

// State Management
import { createPinia } from 'pinia';
import piniaPersist from 'pinia-plugin-persist';

// Router Imports
import { createRouter, createWebHistory } from 'vue-router';
import { setupLayouts } from 'virtual:generated-layouts';
import generatedRoutes from 'virtual:generated-pages';
import authGuard from './guards';

// Base Component
import App from './App.vue';

// App setup
const app = createApp(App);

const routes = setupLayouts(generatedRoutes);

const router = createRouter({
  history: createWebHistory(),
  routes,
});

// Add the state management to app
const pinia = createPinia();
pinia.use(piniaPersist);
app.use(pinia);

// Route & layouts setup

router.beforeEach(authGuard);

// Add the router to app
app.use(router);

const head = createHead();
app.use(head);

// Finally mount our app
app.mount('#app');
