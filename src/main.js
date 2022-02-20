import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './plugins/firebase'

import ellipsis from "./directives/ellipsis.js";

import 'vue-next-select/dist/index.min.css'
import './assets/styles/main.scss';

import Maska from 'maska'


const app = createApp(App)
   .directive('ellipsis', ellipsis)
   .use(Maska)
   .use(router)
   .mount('#app')
