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
    stats: [],
    banana: [],
    petrol: [],
    table: [],
    td: [],
    EmployeeIds: [],
    Ages: [],
    YearsUnderCurrentManager1: [],
    JobSatisfaction: [],
    Departments: [],
    PerformanceRating: [],
    UpskillingOpportunities: [],
    apiresponse: [],
  },
  mutations: {
    SET1(state, payload) {
      state.EmployeeIds = payload;
    },
    SET2(state, payload) {
      state.Ages = payload;
    },
    SET4(state, payload) {
      state.YearsUnderCurrentManager1 = payload;
    },
    JobSatisfaction(state, payload) {
      state.JobSatisfaction = payload;
    },
    SET3(state, payload) {
      state.Departments = payload;
    },
    PerformanceRating(state, payload) {
      state.PerformanceRating = payload;
    },
    UpskillingOpportunities(state, payload) {
      state.UpskillingOpportunities = payload;
    },
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
      state.stats = payload;
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
    SET_DATA9(state, payload) {
      state.apiresponse = payload;
    },
  },
  actions: {
    async ACTION_POST(vuexContext, inputData) {
      try {
        const response = await this.$axios.$post(
          "/upload",
          inputData.inputDatas
        );

        let yearsUnderManager = Object.values(
          response["Years Under Current Manager"]
        );
        let jobSatisfaction = Object.values(response["Job Satisfaction"]);
        let year = Object.values(response["Year"]);
        let relationship = Object.values(response["Relationship with Manager"]);
        let department = Object.values(response["Department"]);
        let performanceRating = Object.values(response["Performance Rating"]);
        let upskillingOpportunites = Object.values(
          response["Upskilling Opportunities"]
        );
        let table = response["td"];
        let opEmployeeIds = Object.values(table["Employee_id"]);
        let opAges = Object.values(table["Age"]);
        let opDepartments = Object.values(table["Total years of service"]);
        let opYearsUnderCurrentManager = Object.values(
          table["Relationship with Manager"]
        );
        console.log(opYearsUnderCurrentManager, "opYearsUnderCurrentManager");
        let opUpskillingOpportunities = Object.values(
          table["Upskilling Opportunities"]
        );
        let opJobSatisfaction = Object.values(table["Job Satisfaction"]);
        let opPerformanceRating = Object.values(table["Performance Rating"]);
        function marray(array) {
          let marray = [0, 0, 0, 0, 0];

          for (var i = 0; i < array.length; i++) {
            let value = array[i] - 1;
            marray[value] = marray[value] + 1;
          }
          return marray;
        }
        function uarray(array) {
          let uarray = [
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
          ];

          for (var i = 0; i < array.length; i++) {
            let value = array[i] - 1;
            uarray[value] = uarray[value] + 1;
          }
          return uarray;
        }

        let maxCount = 25;
        vuexContext.commit("SET1", opEmployeeIds);
        vuexContext.commit("SET2", opAges);
        vuexContext.commit("SET3", opDepartments);
        vuexContext.commit("SET4", opYearsUnderCurrentManager);

        //  vuexContext.commit(
        //           "opYearsUnderManager",
        //           opYearsUnderManager
        //         );

        vuexContext.commit(
          "UpskillingOpportunities",
          opUpskillingOpportunities
        );
        vuexContext.commit("JobSatisfaction", opJobSatisfaction);
        vuexContext.commit("PerformanceRating", opPerformanceRating);

        vuexContext.commit("SET_DATA", [1, 2, 3, 4, 5]);
        vuexContext.commit("SET_DATA1", marray(relationship));
        vuexContext.commit("SET_DATA2", marray(jobSatisfaction));
        vuexContext.commit("SET_DATA3", year.slice(0, maxCount));
        // vuexContext.commit("SET_DATA4", marray(relationship));
        vuexContext.commit("SET_DATA5", department.slice(0, maxCount));
        vuexContext.commit("SET_DATA6", marray(performanceRating));
        vuexContext.commit("SET_DATA7", uarray(upskillingOpportunites));
        vuexContext.commit("SET_DATA8", table);
        vuexContext.commit("SET_DATA9", response);

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
