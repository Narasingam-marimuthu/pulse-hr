import { map } from "jquery";

// import baseUrl from "~/config/base.config";
export default {
    namespaced: true,
    state: {
        map: Map
    },
    mutations: {
        SET_DATA(state, payload) { 
            state.map = payload;
        },
        CLEAR_DATA(state) { state.data = {}; }
    },
    actions: {
        async ACTION_POST(vuexContext, inputData) {
            try {
                const response = await this.$axios.$post('/upload', inputData.inputDatas)
                let months = Object.values(response.Month);
                let flours = Object.values(response['White, self raising flour per 2 kg']);
                let breads = Object.values(response['Bread, white sliced pan, large (800g)']);

                let map = Map();
                map.SET_DATA("x", months);
                map.SET_DATA("y", flours);
                map.SET_DATA("y1", bread);
                vuexContext.commit("SET_DATA", map)
                // console.log("Store menu response", flours);

                return Promise.resolve(JSON.parse(JSON.stringify(map)))
            } catch (error) {
                console.log("Store menu error", error);
                if (error.response) {
                    let message = error.response.data && error.response.data.error && error.response.data.error.message || "Internal Error"
                    return Promise.reject({ success: 0, message: message, error: error.response });
                } else {
                    let message = error.message || "Internal Error"
                    return Promise.reject({ success: 0, message: message, error: error });
                }
            }
        },
    }
}