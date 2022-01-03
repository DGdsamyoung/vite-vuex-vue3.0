<!--
 * @Description:
 * @Autor: 杨自强
 * @Date: 2021-12-31 11:51:52
 * @LastEditors: 杨自强
 * @LastEditTime: 2022-01-03 16:16:07
-->
<template>
  <div class="hello" type="aa">
    <h1>{{ msg }}</h1>
    {{ demoMoule.count }}

    <button @click="handleCount">count++</button>
    <button @click="handleClear">clear</button>
        <button @click="handleApi">api</button>
  </div>
</template>
<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import { DemoModule } from '../store/modules/demo';

@Options({
  props: {
    msg: {
      type: String,
      default: '134',
    },
  },
})
export default class HelloWorld extends Vue {
  msg!: string;

  get demoMoule() {
    return DemoModule;
  }

  mounted() {
    console.log(DemoModule);
  }

  handleCount() {
    this.demoMoule.setCount(this.demoMoule.count + 1);
  }

  handleClear() {
    this.demoMoule.clear();
  }

  handleApi() {
    this.axios.get('/cpq/api/packagemanage/queryusername');
  }
}
</script>

