/*
 * @Description:
 * @Autor: 杨自强
 * @Date: 2022-04-27 09:30:44
 * @LastEditors: 杨自强
 */
// import Router, { RouteConfig } from 'vue-router';
import { createRouter, createWebHashHistory,RouteRecordRaw } from "vue-router";
import Layout from '@/layout/index.vue';

 const routes: RouteRecordRaw[] = [

  {
    path: '/index',
    name:'index',
    component: () =>
    import(/* webpackChunkName: "home" */ "@/views/home/index.vue"),
  },
  {
    path: '/',
    redirect: '/index',
  },
];

const router = createRouter({
	history: createWebHashHistory(),
	routes,
});

export default router;
