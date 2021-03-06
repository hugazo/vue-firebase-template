// Base import
import { createApp } from 'vue';

// Head
import { createHead } from '@vueuse/head';

// State Management
import { createPinia } from 'pinia';
import piniaPersist from 'pinia-plugin-persist';

// Router Imports
import router from '@services/router';

// Quasar setup
import {
  Quasar,
  Notify,
} from 'quasar';
import '@quasar/extras/roboto-font-latin-ext/roboto-font-latin-ext.css';
import 'quasar/src/css/index.sass';

// Base Component
import App from './App.vue';

// App setup
const app = createApp(App);

app.use(Quasar, {
  plugins: {
    Notify,
  },
});

// Add the state management to app
const pinia = createPinia();
pinia.use(piniaPersist);
app.use(pinia);

// Add the router to app
app.use(router);

const head = createHead();
app.use(head);

// Finally mount our app
app.mount('#app');
