import { map } from "jquery";

// import baseUrl from "~/config/base.config";
export default {
  namespaced: true,
  state: {
    // map: Map
    months: [],
    flours: [],
    breads: [],
    year: [],
    year_month: [],
    STATISTIC: [],
    banana: [],
    petrol: [],
    table: [],
  },
  mutations: {
    SET_DATA(state, payload) {
      state.months = payload;
    },
    SET_DATA1(state, payload) {
      state.flours = payload;
    },
    SET_DATA2(state, payload) {
      state.breads = payload;
    },
    SET_DATA3(state, payload) {
      state.year = payload;
    },
    SET_DATA4(state, payload) {
      state.year_month = payload;
    },
    SET_DATA5(state, payload) {
      state.STATISTIC = payload;
    },
    SET_DATA6(state, payload) {
      state.banana = payload;
    },
    SET_DATA7(state, payload) {
      state.petrol = payload;
    },
    SET_DATA8(state, payload) {
      state.table = payload;
    },
    CLEAR_DATA(state) {
      state.data = {};
    },
  },
  actions: {
    async ACTION_POST(vuexContext, inputData) {
      try {
        const response = await this.$axios.$post(
          "/upload",
          inputData.inputDatas
        );

        let months = Object.values(response.Month);
        let flours = Object.values(
          response["White, self raising flour per 2 kg"]
        );
        let breads = Object.values(
          response["Bread, white sliced pan, large (800g)"]
        );
        let year = Object.values(response["year"]);
        let year_month = Object.values(response["year_month"]);
        let STATISTIC = Object.values(response["STATISTIC"]);
        let banana = Object.values(response["Bananas per kg"]);
        let petrol = Object.values(response["Petrol - unleaded per litre"]);

        // let table = Object.values(response);

        // let map = Map();
        // map.SET_DATA("x", months);
        // map.SET_DATA("y", flours);
        // map.SET_DATA("y1", bread);

        let maxCount = 25
        vuexContext.commit("SET_DATA", months.slice(0, maxCount));
        vuexContext.commit("SET_DATA1", flours.slice(0, maxCount));
        vuexContext.commit("SET_DATA2", breads.slice(0, maxCount));
        vuexContext.commit("SET_DATA3", year.slice(0, maxCount));
        vuexContext.commit("SET_DATA4", year_month.slice(0, maxCount));
        vuexContext.commit("SET_DATA5", STATISTIC.slice(0, maxCount));
        vuexContext.commit("SET_DATA6", banana.slice(0, maxCount));
        vuexContext.commit("SET_DATA7", petrol.slice(0, maxCount));
        // vuexContext.commit("SET_DATA8", table.slice(0, 10));

        console.log("Store menu response", response);

        return Promise.resolve(JSON.parse(JSON.stringify(response)));
      } catch (error) {
        console.log("Store menu error", error);
        if (error.response) {
          let message =
            (error.response.data &&
              error.response.data.error &&
              error.response.data.error.message) ||
            "Internal Error";
          return Promise.reject({
            success: 0,
            message: message,
            error: error.response,
          });
        } else {
          let message = error.message || "Internal Error";
          return Promise.reject({ success: 0, message: message, error: error });
        }
      }
    },
  },
};
