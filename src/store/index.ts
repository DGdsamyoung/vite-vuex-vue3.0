
/*
 * @Description:
 * @Autor: 杨自强
 * @Date: 2021-11-15 14:05:51
 * @LastEditors: 杨自强
 * @LastEditTime: 2022-01-03 10:16:44
 */
import Vuex from 'vuex';
import {IDemoState} from './modules/demo'

export interface IRootState {
  error: IDemoState;
}

export default new Vuex.Store<IRootState>({});
