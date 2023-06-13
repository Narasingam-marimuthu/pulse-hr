import Vuex from "vuex";
import MODULE_POST from "./modules/post.js";


const createStore = () => {
  return new Vuex.Store({
    state: {},
    namespaced: true,
    actions: {
     
    },
    modules: {
      MODULE_POST},
  });
};
export default createStore;
