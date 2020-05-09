import Vue from "vue";
import Vuex from "vuex";
import getters from "./getters";
import mutations from "./mutations";
import actions from "./actions";
import { Card } from "./type";

Vue.use(Vuex);

// TODO: separate into modules
export interface RootState {
  row: number;
  column: number;
  noOfEachCards: number;
  win: boolean;
  board: Card[];
}

export default new Vuex.Store<RootState>({
  state: {
    row: 4,
    column: 6,
    noOfEachCards: 6,
    win: false,
    board: []
  },
  getters,
  mutations,
  actions,
  modules: {}
});
