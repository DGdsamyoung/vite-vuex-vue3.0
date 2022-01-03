<!--
 * @Description:
 * @Autor: 杨自强
 * @Date: 2021-12-31 11:51:52
 * @LastEditors: 杨自强
 * @LastEditTime: 2022-01-03 14:54:17
-->

<template>
  <img alt="Vue logo" src="./assets/logo.png" />
  <div>
    count:{{demoMoule.count}}
  </div>
  <HelloWorld @count="handleGetCount" />
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import HelloWorld from './components/HelloWorld.vue';
import { DemoModule } from '@/store/modules/demo';

@Options({
  components: {
    HelloWorld,
  },
})
export default class App extends Vue {
  get demoMoule() {
    return DemoModule;
  }

  handleGetCount(value: string) {
    console.log(value);
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
