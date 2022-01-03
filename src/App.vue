<!--
 * @Description:
 * @Autor: 杨自强
 * @Date: 2021-12-31 11:16:34
 * @LastEditors: 杨自强
 * @LastEditTime: 2021-12-31 14:07:15
-->
<template>
  <img alt="Vue logo" src="./assets/logo.png" />
  <HelloWorld @count="handleGetCount"/>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import HelloWorld from "./components/HelloWorld.vue";

@Options({
  components: {
    HelloWorld,
  },
})
export default class App extends Vue {
  handleGetCount(value: string) {
    console.log(value)
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
