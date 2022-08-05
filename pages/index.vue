<template>
  <section>
    <section class="banner">
      <div class="container">
        <b-carousel :arrow="false" :pause-info="false" :indicator-style="'is-dots'" :indicator-position="'is-bottom'"
          :indicator-background="false" :indicator-inside="false">
          <b-carousel-item v-for="(carousel, i) in carousels" :key="i">
            <!-- <b-image :src="carousel.image" /> -->
            <img :src="carousel.image">
          </b-carousel-item>
          <!-- <img :src="carousels.image"> -->
          <!-- <b-image :src="carousels.image" /> -->
          <!-- <b-image class="image" :src="getImgUrl(i)"></b-image> -->
          <!-- <section :class="`hero is-medium is-${carousel.color}`">
              <div class="hero-body has-text-centered">
                <h1 class="title">{{ carousel.text }}</h1>
              </div>
            </section> -->

        </b-carousel>
      </div>
    </section>
    <section class="welcome_block">
      <div class="container">
        <div class="columns is-multiline is-mobile">
          <div class="column is-6-desktop is-12-mobile is-6-tablet">
            <div class="welcome_main_title">
              <h3 class="">
                <span> Madurai </span>
                <span> Tech </span>
                <span> community </span>
              </h3>
            </div>
            <h1>Welcomes you to <img src="@/assets/img/home/title.png" class="welcome_block_img" /></h1>
            <p class="content">It is an event to build innovate soluctions that position Madurai as
              a smarter, resilient, and sustainable city for living, studying, accessing public services
              and conducting business.
            </p>
            <p class="content">
              For institutions doing bulk registration, we are making the registration fees as Rs. 99.
              Students, please contact your institution SPOC to register through institution. You can also
              register using this site. If any excess amount paid, we'll refund at the event.
              For professionals, the registration fees is Rs. 300, and professionals need to use this
              website to register.
            </p>
            <div class="venu_detail">
              <ul class="">
                <li>
                  <div class="venu_content_space pl-0 ">
                    <div class="is-flex">
                      <img src="@/assets/img/home/w_icon1.png" />
                      <p>Theme</p>
                    </div>
                    <div class="venu_content">
                      <p>Smart City</p>
                    </div>
                  </div>
                </li>
                <li>
                  <div class="venu_content_space">
                    <div class="is-flex">
                      <img src="@/assets/img/home/w_icon2.png" />
                      <p>Team Size</p>
                    </div>
                    <div class="venu_content">
                      <p>Maximum 5</p>
                    </div>
                  </div>
                </li>
                <li>
                  <div class="venu_content_space">
                    <div class="is-flex">
                      <img src="@/assets/img/home/w_icon3.png" />
                      <p>Event Date</p>
                    </div>
                    <div class="venu_content">
                      <p>12th Aug 4 PM to 14th Aug 6 PM</p>
                    </div>
                  </div>
                </li>
                <li class="mt-3">
                  <div class="venu_content_space pl-0">
                    <div class="is-flex">
                      <img src="@/assets/img/home/w_icon4.png" />
                      <p>Venue</p>
                    </div>
                    <div class="venu_content">
                      <p>Solaimalai college of engineering,Madurai.</p>
                    </div>
                  </div>
                </li>
              </ul>
            </div>

            <div class="">
              <button class="button is-primary" @click="$router.push('/register')">
                Register to participate
              </button>
            </div>
            <div class="welcome_for_query is-flex">
              <p>For Queries:</p>
              <a :href="LINK_TELEGRAM_GROUP_URL" target="_blank">
                <img src="@/assets/img/telegram.png" />
              </a>
              <a :href="LINK_WHATSAPP_GROUP_URL" target="_blank">
                <img src="@/assets/img/Whatsapp.png" />
              </a>
            </div>
          </div>
          <div class="column is-6-desktop is-12-mobile is-6-tablet">
            <div class="welcome1_right">
              <img src="@/assets/img/home/welcome.png" class="" />
              <img src="@/assets/img/home/welcome_right.png" />
            </div>
          </div>
        </div>
      </div>

    </section>
    <section class="problem_statement">
      <div class="container">
        <div class="h1_title has-text-centered">
          <h1 class="">
            <span>Problem</span>
            <span>Statement</span>
          </h1>
        </div>
        <ul class="prb_stmt">
          <li>
            <div class="round_circle">
              <img src="@/assets/img/Save_Environment.png" />
            </div>
            <p>Environment</p>
          </li>
          <li>
            <div class="round_circle">
              <img src="@/assets/img/stoplights-fill.png" />
            </div>
            <p>Traffic</p>
          </li>
          <li>
            <div class="round_circle">
              <img src="@/assets/img/mortarboard-fill.png" />
            </div>
            <p>Education</p>
          </li>
          <li>
            <div class="round_circle">
              <img src="@/assets/img/Technology.png" />
            </div>
            <p>Technology</p>
          </li>
          <li>
            <p>
              <nuxt-link to="/" class="click_here">Click here </nuxt-link>to see more details
            </p>
          </li>
        </ul>
      </div>
    </section>
    <section class="partners">
      <div class="container">
        <div class="has-text-centered">
          <h1 class="single_title_line ">Partners</h1>
          <div class="columns is-multiline is-mobile mt-3">
            <div class="column is-4-desktop is-12-mobile is-6-tablet">
              <p>Our Institutional Partner</p>
              <img src="@/assets/img/home/partner1.png" class="partner1_img" />
            </div>
            <div class="column is-4-desktop is-12-mobile is-6-tablet">
              <p>Promotional Partner</p>
              <img src="@/assets/img/home/partner2.png" class="partner2_img" />
            </div>
            <div class="column is-4-desktop is-12-mobile is-6-tablet">
              <p>Eco System Partner</p>
              <img src="@/assets/img/home/partner3.png" class="partner3_img" />
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="sponsors">
      <div class="container">
        <div class="has-text-centered">
          <div class="h1_title has-text-centered">
            <h1 class="">
              <span>Sponsors</span>
              <span>Us</span>
            </h1>
          </div>
          <div class="s_single_txt">
            <p>Sponsor this event to make your brand known among the change makers!
            </p>
          </div>
          <div>
            <b-button>
              <nuxt-link to="about"><span class="check_out">Check Our</span> </nuxt-link>
              <span class="sponsr_btn"> Sponsorship packages </span>
            </b-button>
          </div>
        </div>
      </div>
    </section>
    <section class="sponsors">
      <div class="container">
        <div class="about_us">
          <div class="has-text-centered">
            <div class="h1_title has-text-centered">
              <h1 class="">
                <span>About</span>
                <span>Us</span>
              </h1>
            </div>
            <div class="s_single_txt">
              <p>We are a Volunteer Based Community, working for the benefit of the society around us. We
                leverage the strength of our community members
                technical, industry and business knowledge for the betterment of Indian cities. We, the
                volunteers, as well wishers of Madurai, are passionate about
                bringing change to Madurai by leveraging technology.
              </p>
            </div>
          </div>
          <div class="columns is-multiline is-mobile">
            <div class="column is-6-desktop is-12-mobile is-6-tablet">
              <h2 class="about_h2">As a Community, We
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
                      <img src="@/assets/img/dots.png" />
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
                      <img src="@/assets/img/dots.png" class="about_right_img_dot" />
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
            image: require("@/assets/img/Bannerimage.png")
          },
          {
            image: require("@/assets/img/banner2.png")
          },

        ]
      }
    }
  }

</script>
