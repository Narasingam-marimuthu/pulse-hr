export default {
  namespaced: true,
  state: {
    isLoading: false,
    newLoading: false,
    uploadPercentage: 0,
  },
  mutations: {
    ACTION_LOADING(state, payload) {
      state.isLoading = payload; //false;
    },
  },
  actions: {
    async ACTION_LOADING(vuexContext, input) {
      try {
        vuexContext.commit("ACTION_LOADING", input);
        console.log("INPUT", input);
      } catch (error) {
        console.log(error);
      }
    },
  },
};
