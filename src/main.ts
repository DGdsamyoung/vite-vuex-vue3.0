/*
 * @Description:
 * @Autor: 杨自强
 * @Date: 2021-12-31 11:51:52
 * @LastEditors: 杨自强
 * @LastEditTime: 2022-01-03 16:11:18
 */
import { createApp } from 'vue';
import App from './App.vue';
import axios from 'axios';
import VueAxios from 'vue-axios';
const app = createApp(App);
app.use(VueAxios,axios);
app.mount('#app');
