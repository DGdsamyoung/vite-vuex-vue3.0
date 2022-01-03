/*
 * @Description:
 * @Autor: 杨自强
 * @Date: 2022-01-03 09:35:07
 * @LastEditors: 杨自强
 * @LastEditTime: 2022-01-03 10:07:17
 */
import { VuexModule, Module, Mutation, Action, getModule } from 'vuex-module-decorators';
import store from '../index';


export interface IDemoState {
  count: number
}

@Module({ dynamic: true, store, name: 'demo',namespaced: true })
class Demo extends VuexModule implements IDemoState {
  public count = 0

  @Mutation
  private SET_COUNT(value: number) {
    this.count = value
  }

  @Mutation
  private CLEAR() {
    this.count = 0
  }

  @Action
  public setCount(value: number) {
    this.SET_COUNT(value);
  }

  @Action
  public clear() {
    this.CLEAR();
  }

}

export const DemoModule = getModule(Demo);
