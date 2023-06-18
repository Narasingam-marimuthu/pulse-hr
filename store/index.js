import Vuex from "vuex";
import MODULE_POST from "./modules/post.js";
import MODULE_LOADING from "./modules/loading.js";

const createStore = () => {
  return new Vuex.Store({
    state: {},
    namespaced: true,
    actions: {},
    modules: {
      MODULE_POST,
      MODULE_LOADING,
    },
  });
};
export default createStore;
