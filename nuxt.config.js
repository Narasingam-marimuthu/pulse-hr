import webpack from 'webpack';

export default {
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
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico'  },
    ]
  },

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: false,
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },
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
  ],
  /*
  ** Axios module configuration
  ** See https://axios.nuxtjs.org/options
  */
  axios: {
    // Configure the base URL of your API
     baseURL:"https://yaash.tech/upload" // Replace with your API URL
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
  }
}
