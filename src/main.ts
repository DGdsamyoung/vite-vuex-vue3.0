/*
 * @Description:
 * @Autor: 杨自强
 * @Date: 2021-12-31 11:51:52
 * @LastEditors: 杨自强
 * @LastEditTime: 2022-04-27 11:09:51
 */
import { createApp } from 'vue';
import App from './App.vue';
import axios from 'axios';
import VueAxios from 'vue-axios';
import router from './router';
import "@/style/global.scss";

const app = createApp(App);
app.use(router);
app.use(VueAxios,axios);
app.mount('#app');
