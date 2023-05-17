import webpack from 'webpack';

export default {
  mode: 'universal',
  // Server config
  server: {
    port: process.env.PORT || 3010,
    host: '0.0.0.0',
    timing: false
  },
  // Environment variables
  env: {
    LINK_LINKEDIN_URL: "https://www.linkedin.com/company/madurai-tech-community",
    LINK_INSTAGRAM_URL: "https://www.instagram.com/techsavvy_madurai_team/?igshid=YmMyMTA2M2Y%3D",
    LINK_TWITTER_URL: "https://twitter.com/madurai_tech",
    LINK_FACEBOOK_GROUP_URL: "https://www.facebook.com/groups/378780057314906",
    LINK_TELEGRAM_GROUP_URL: "https://t.me/+F8BQWhkeo34wZDhl",
    LINK_WHATSAPP_GROUP_URL: "https://chat.whatsapp.com/DSj8Fu1S3m88gTulW60JwX"
  },
  /*
  ** Headers of the page
  */
  head: {
    title: 'Madurai Hackathon 2022',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Madurai Tech Community - Volunteer Based Community, working for the benefit of the society around us.' },
      { hid: 'keywords', name: 'keywords', content: 'Tech Community, Madurai, IT, Hackathon 2022, Volunteer Based Community, Hackathon, Demo Days, Startup Events, Job Fairs, Mentorship for startups, Networking, new technologies' },
    ],
    link: [
      {
        rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Work+Sans:wght@100;400;500;600;700;800;900&display=swap'
      },
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.png' },
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
