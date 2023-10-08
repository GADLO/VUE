

import { createApp } from 'vue';
import { createPinia } from 'pinia';
import VueAxios from 'vue-axios';
import axios from 'axios';
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

import App from './App.vue';
import router from './router';

const app = createApp(App);

app.use(createPinia());
app.use(router);

app.use(VueAxios, axios);
app.use(ElementPlus);
app.mount('#app');
