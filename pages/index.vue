<template>
  <section>
    <section class="banner mt-2 mb-2">
      <div class="container">
        <b-carousel :arrow="false" :pause-info="false" :indicator-style="'is-dots'" :indicator-position="'is-bottom'"
          :indicator-background="false" :indicator-inside="false">
          <b-carousel-item v-for="(carousel, i) in carousels" :key="i">
            <nuxt-link to="/event-schedule" class="join_here" v-if="i == 0">
              <img :src="carousel.image" />
            </nuxt-link>
            <img :src="carousel.image" v-if="i != 0" />
          </b-carousel-item>
        </b-carousel>
      </div>
    </section>
    <section class="welcome_block mb-2">
      <div class="container">
        <div class="columns is-multiline is-mobile">
          <div class="column is-7-desktop is-12-mobile is-7-tablet has-text-centered">
            <div class="welcome_main_title">
              <h3 class="">
                <span> Madurai </span>
                <span> Tech </span>
                <span> community </span>
              </h3>
            </div>
            <div class="welcome1_left">
              <img src="@/assets/img/home/welcome_right.png" />
            </div>
            <p class="content">We will get back to you soon, with next event details.
            </p>
          </div>
          <div class="column is-5-desktop is-12-mobile is-5-tablet">
            <div class="welcome1_right">
              <img src="@/assets/img/home/welcome.png" class="" style="height: 300px;" />
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="sponsors mb-2">
      <div class="container">
        <div class="has-text-centered">
          <div class="h1_title underline has-text-centered">
            <h1 class="single_title_line">
              <span>Sponsor</span>
              <span>Us</span>
            </h1>
          </div>
          <div class="s_single_txt">
            <p>Sponsor us to make your brand known among the change makers!
            </p>
          </div>
          <div>
            <b-button class="button is-primary">
              <nuxt-link to="/sponsor-us">
                <span class="sponsr_btn"> Sponsor Us </span>
              </nuxt-link>
            </b-button>
          </div>
        </div>
      </div>
    </section>
    <section class="about_us mb-2">
      <div class="container">
        <div class="has-text-centered">
          <div class="h1_title underline has-text-centered">
            <h1 class="">
              <span>About</span>
              <span>Us</span>
            </h1>
          </div>
          <div class="s_single_txt mt-3">
            <p>We are a Volunteer Based Community, working for the benefit of the society around us. We
              leverage the strength of our community members
              technical, industry and business knowledge for the betterment of Indian cities. We, the
              volunteers, as well wishers of Madurai, are passionate about
              bringing change to Madurai by leveraging technology.
            </p>
          </div>
        </div>
        <div class="columns is-multiline is-mobile mt-2">
          <div class="column is-6-desktop is-12-mobile is-6-tablet">
            <h2 class="sub_title">As a Community, We
            </h2>
            <div class="card about_us_card">
              <div class="card-content">
                <div class="columns is-multiline is-mobile">
                  <div class="column is-10-desktop is-12-mobile is-6-tablet">
                    <ul class="about_us_list">
                      <li>
                        Conduct Knowledge sharing sessions
                      </li>
                      <li>
                        Enable discussions on new technologies
                      </li>
                      <li>
                        Conduct events like Hackathon, Demo Days, Startup
                        Events, Job Fairs, Mentorship for startups etc.
                      </li>
                    </ul>
                  </div>
                  <div class="column is-2-desktop is-12-mobile is-6-tablet">
                    <img src="@/assets/img/dots.png" style="height: 50px;" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="column is-6-desktop is-12-mobile is-6-tablet">
            <img src="@/assets/img/home/abt1.png" class="abt1" />
          </div>
        </div>
        <div class="columns is-multiline is-mobile">
          <div class="column is-6-desktop is-12-mobile is-6-tablet">
            <img src="@/assets/img/home/abt2.png" class="abt2" />
          </div>
          <div class="column is-6-desktop is-12-mobile is-6-tablet">
            <div class="card about_us_card_right">
              <div class="card-content">
                <div class="columns is-multiline is-mobile">
                  <div class="column is-10-desktop is-12-mobile is-6-tablet">
                    <ul class="about_us_list_right">
                      <li>
                        Provide Opportunities for businesses to connect with clients

                      </li>
                      <li>
                        Provide Opportunities for individuals looking to freelance or get into a job
                      </li>
                      <li>
                        Provide Networking opportunities for Technology Professionals,
                        Freelancers, Startups, Established Businesses,
                        Educational Institutions and Students

                      </li>
                    </ul>
                  </div>
                  <div class="column is-2-desktop is-12-mobile is-6-tablet">
                    <img src="@/assets/img/dots.png" class="about_right_img_dot" style="float:right; height: 50px;" />
                  </div>
                </div>
              </div>
            </div>
            <!-- 
              <ul>
                <li>
                  Provide Opportunities for businesses to connect with clients

                </li>
                <li>
                  Provide Opportunities for individuals looking to freelance or get into a job
                </li>
                <li>
                  Provide Networking opportunities for Technology Professionals,
                  Freelancers, Startups, Established Businesses,
                  Educational Institutions and Students

                </li>
              </ul> -->
          </div>
        </div>
      </div>
    </section>
  </section>
</template>

<script>
export default {
  data() {
    return {
      LINK_TELEGRAM_GROUP_URL: process.env.LINK_TELEGRAM_GROUP_URL,
      LINK_WHATSAPP_GROUP_URL: process.env.LINK_WHATSAPP_GROUP_URL,
      carousels: [{
        image: require("@/assets/img/banner1.png")
      },
      {
        image: require("@/assets/img/banner2.png")
      },

      ]
    }
  }
}

</script>
