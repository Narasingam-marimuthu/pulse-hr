export default function ({ $axios, store, redirect }) {
    // var apiURL = 'http://127.0.0.1:5001';
    // if (process.env.API_SERVER == 'laravel') {
    //     apiURL = process.env.PRODUCTION_TYPE == 'dev' ? process.env.LARAVEL_URL_DEV :
    //         process.env.PRODUCTION_TYPE == 'stg' ? process.env.LARAVEL_URL_STG :
    //             process.env.PRODUCTION_TYPE == 'loc' ? process.env.LARAVEL_URL_LOC :
    //                 process.env.LARAVEL_URL_LIVE;

    // } else {
    //     apiURL = process.env.PRODUCTION_TYPE == 'dev' ? process.env.NODE_URL_DEV :
    //         process.env.PRODUCTION_TYPE == 'stg' ? process.env.NODE_URL_STG :
    //             process.env.PRODUCTION_TYPE == 'loc' ? process.env.NODE_URL_LOC :
    //                 process.env.NODE_URL_LIVE;
    // }
    // $axios.defaults.baseURL = apiURL;

    $axios.onResponse(response => {
        console.log("Plugin", response && typeof (response.data));
        if (response && typeof (response.data) == 'object') {
            response.data.headers = response && response.headers || {};
        }
    })
    $axios.onRequest(config => {
        config.headers = {
            ...config.headers,
            'Access-Control-Allow-Origin': '*'
        }
    })
}