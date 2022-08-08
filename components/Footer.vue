<template>
  <section class="footer yellow_bg">
    <div class="container">
      <div class="columns is-multiline is-mobile">
        <div class="column is-3-desktop is-12-mobile is-3-tablet">
          <div class="footer_block_one">
            <h4>Contact us</h4>
            <p><a href="tel:938466737"><img src="@/assets/img/Call.png" class="" /> 9384667376</a></p>
            <div class="is-flex footer_cont">
              <div class="footer_block_one mt-1">
                <img src="@/assets/img/Location.png" class="" />
              </div>
              <div><span>247, SLC2, Anna Nagar,<br />Madurai - 625020</span></div>
            </div>
          </div>
        </div>
        <div class="column is-3-desktop is-12-mobile is-3-tablet">
          <div class="footer_block_two">
            <h4>Email us</h4>
            <p>For General Enquiry</p>
            <p class="mb-4 brand_color font_weight_600">
              <a href="mailto:contact@madurai-tech.org" target="_blank">Contact@madurai-tech.org</a>
            </p>
            <p>For Sponsor Enquiry</p>
            <p class="brand_color font_weight_600">
              <a href="mailto:sponsor@madurai-tech.org" target="_blank">Sponsor@madurai-tech.org</a>
            </p>
          </div>
        </div>
        <div class="column is-2-desktop is-12-mobile is-3-tablet">
          <div class="footer_block_three">
            <h4>Useful Links</h4>
            <p>
              <nuxt-link to="/about-hackathon" class="">About </nuxt-link>
            </p>
            <p>
              <nuxt-link to="/sponsor-hackathon-2022" class="">Sponsors 2022</nuxt-link>
            </p>
            <p>
              <nuxt-link to="/problem-statement" class="">Problem statement</nuxt-link>
            </p>
            <p>
              <nuxt-link to="/register" class="">Register </nuxt-link>
            </p>
          </div>
        </div>
        <div class="column is-4-desktop is-12-mobile is-3-tablet">
          <div class="footer_block_four">
            <div class="is-flex">
              <img src="@/assets/logo.png" class="logo_img" />
              <div class="">
                <h3 class="">
                  <span> Madurai </span>
                  <span> Tech </span>
                  <span> community </span>
                </h3>
              </div>
            </div>
            <p class="mb-4 has-text-centered">Technology for Societal Good</p>
            <div class="is-flex footer_social_media">
              <p>Follow us on</p>
              <a :href="LINK_LINKEDIN_URL" target="_blank">
                <img src="@/assets/img/Linkedin.png" class="" />
              </a>
              <a :href="LINK_INSTAGRAM_URL" target="_blank">
                <img src="@/assets/img/Instagram.png" class="" />
              </a>
              <a :href="LINK_TWITTER_URL" target="_blank">
                <img src="@/assets/img/Twitter.png" class="" />
              </a>
              <a :href="LINK_FACEBOOK_GROUP_URL" target="_blank">
                <img src="@/assets/img/logos_facebook.png" class="" />
              </a>
              <a :href="LINK_TELEGRAM_GROUP_URL" target="_blank">
                <img src="@/assets/img/telegram.png" class="" />
              </a>
              <a :href="LINK_WHATSAPP_GROUP_URL" target="_blank">
                <img src="@/assets/img/Whatsapp.png" class="" />
              </a>
            </div>
          </div>
        </div>
      </div>
      <div class=" copy_rights">
        <div class="columns is-multiline is-mobile">
          <div class="column is-7-desktop is-12-mobile is-7-tablet has-text-right">
            <p class="">&#169; Madurai Tech Community
              <a @click="scrollToTop"><img src="@/assets/img/footer_top.png" /> </a>
            </p>
          </div>
          <div class="column is-5-desktop is-12-mobile is-5-tablet">
            <p class="has-text-right">Design and Developed by <a href="https://systimanx.com" target="_blank">
                <b> SystimaNX IT Solutions Pvt Ltd</b></a></p>
          </div>
        </div>

      </div>
    </div>
  </section>
</template>

<script>
  export default {
    data() {
      return {
        LINK_LINKEDIN_URL: process.env.LINK_LINKEDIN_URL,
        LINK_INSTAGRAM_URL: process.env.LINK_INSTAGRAM_URL,
        LINK_TWITTER_URL: process.env.LINK_TWITTER_URL,
        LINK_FACEBOOK_GROUP_URL: process.env.LINK_FACEBOOK_GROUP_URL,
        LINK_TELEGRAM_GROUP_URL: process.env.LINK_TELEGRAM_GROUP_URL,
        LINK_WHATSAPP_GROUP_URL: process.env.LINK_WHATSAPP_GROUP_URL,

      };
    },
    methods: {
      scrollToTop() {
        window.scrollTo({
          top: 0,
          behavior: 'smooth'
        })
        // document.body.scrollTop = document.documentElement.scrollTop = 0;
      }
    }
  }

</script>
