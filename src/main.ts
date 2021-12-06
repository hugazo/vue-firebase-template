// Base import
import { createApp } from 'vue';

// Router Imports
import { createRouter, createWebHistory } from 'vue-router';
import { setupLayouts } from 'virtual:generated-layouts';
import generatedRoutes from 'virtual:generated-pages';

// State Management
import { createPinia } from 'pinia';
import piniaPersist from 'pinia-plugin-persist';

// Head
import { createHead } from '@vueuse/head';

// Firebase Base Import
import { initializeApp } from 'firebase/app';

// Base Component
import App from './App.vue';

// Firebase Initialization
const {
  FIREBASE_API_KEY,
  FIREBASE_AUTH_DOMAIN,
  FIREBASE_PROJECT_ID,
  FIREBASE_STORAGE_BUCKET,
  FIREBASE_MESSAGING_SENDER_ID,
  FIREBASE_APP_ID,
} = import.meta.env;

const firebaseConfig = {
  apiKey: FIREBASE_API_KEY?.toString(),
  authDomain: FIREBASE_AUTH_DOMAIN?.toString(),
  projectId: FIREBASE_PROJECT_ID?.toString(),
  storageBucket: FIREBASE_STORAGE_BUCKET?.toString(),
  messagingSenderId: FIREBASE_MESSAGING_SENDER_ID?.toString(),
  appId: FIREBASE_APP_ID?.toString(),
};

initializeApp(firebaseConfig);

// App setup
const app = createApp(App);

// Route & layouts setup
const routes = setupLayouts(generatedRoutes);

const router = createRouter({
  history: createWebHistory(),
  routes,
});

// Add the router to app
app.use(router);

// Add the state management to app
const pinia = createPinia();
pinia.use(piniaPersist);
app.use(pinia);

const head = createHead();
app.use(head);

// Finally mount our app
app.mount('#app');
