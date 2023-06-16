// import baseUrl from "~/config/base.config";
export default {
    namespaced: true,
    state: {
        data: []
    },
    mutations: {
        SET_DATA(state, payload) { 
            
            state.data = payload; },
        CLEAR_DATA(state) { state.data = {}; }
    },
    actions: {
        async ACTION_POST(vuexContext, inputData) {
            try {
                let values={};
                const response = await this.$axios.$post('/upload', inputData.inputDatas)
                values = Object.values(response.Month);

                vuexContext.commit("SET_DATA", values)
                console.log("Store menu response", values);

                return Promise.resolve(JSON.parse(JSON.stringify(values)))
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