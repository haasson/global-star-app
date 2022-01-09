import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './plugins/firebase'


import ellipsis from "./directives/ellipsis.js";

import './assets/styles/main.scss';

createApp(App)
   .directive('ellipsis', ellipsis)
   .use(router)
   .mount('#app')
