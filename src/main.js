import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './plugins/firebase'

import './assets/styles/vars.scss';

createApp(App)
   .use(router)
   .mount('#app')
