import webpack from 'webpack';
const { createProxyMiddleware } = require('http-proxy-middleware');

export default {
  serverMiddleware: [
    function (req, res, next) {
      createProxyMiddleware('/upload', {
        target: 'https://yaash.tech',
        changeOrigin: true,
      })(req, res, next);
    },
  ],
  mode: 'universal',
  // Server config
  server: {
    port: process.env.PORT || 3000,
    host: '0.0.0.0',
    timing: false
  },
  // Environment variables
  env: {
   
  },
  /*
  ** Headers of the page
  */
  head: {
    title: 'Pulse HR',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '.' },
      { hid: 'keywords', name: 'keywords', content: '' },
    ],
    link: [
      {
        rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Work+Sans:wght@100;400;500;600;700;800;900&display=swap'
      },
      // { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico'  },
    ]
  },

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: false,
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#00FF00' },
  /*
  ** Global CSS
  */
  css: [
    '@/assets/css/style.css',
  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    "~plugins/axios",
    { src: "~/plugins/apexcharts", mode: "client" },

  ],
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://buefy.github.io/#/documentation
    'nuxt-buefy',
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    '@nuxtjs/proxy',
  ],

  proxy: {
    '/upload': {
      target: 'https://yaash.tech', // Replace with your upload's base URL
      pathRewrite: { '^/upload': '' },
      changeOrigin: true,
    },
  },

  /*
  ** Axios module configuration
  ** See https://axios.nuxtjs.org/options
  */
  axios: {
    // Configure the base URL of your API
    proxy: true,
    //  baseURL:"" // Replace with your API URL
  },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    plugins: [
      new webpack.ProvidePlugin({
        $: 'jquery',
      })
    ],
    extend(config, ctx) {
    }
  },
  auth: {
    redirect: {
      login: "/",
      home: false,
    },
    
  },
}
