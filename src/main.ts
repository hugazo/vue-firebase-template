// Base import
import { createApp } from 'vue';

// Router Imports
import { createRouter, createWebHistory } from 'vue-router';
import routes from 'virtual:generated-pages';

// State Management
import { createPinia } from 'pinia';

// Base Component
import App from './App.vue';

const app = createApp(App);

const router = createRouter({
  history: createWebHistory(),
  routes,
});

app.use(router);
app.use(createPinia());

app.mount('#app');
