/*
 * @Description:
 * @Autor: 杨自强
 * @Date: 2021-12-31 11:51:52
 * @LastEditors: 杨自强
 * @LastEditTime: 2022-01-03 16:07:48
 */
const path = require('path');
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    // 配置路径别名
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  server:{
    proxy:{
      '/cpq': {
        target: 'http://192.168.166.27:8025/', // 测试环境
        ws: true,
        secure: true,
        changeOrigin: true,
      },
    },
  },
});
