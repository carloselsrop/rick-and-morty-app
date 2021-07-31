import { createApp } from 'vue';
import VueCookies from 'vue3-cookies';
import App from './App.vue';
import router from './router';
import store from './store';
import './assets/css/tailwind.css';

createApp(App)
  .use(VueCookies)
  .use(store)
  .use(router)
  .mount('#app');
