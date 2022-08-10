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
          <div class="column is-7-desktop is-12-mobile is-7-tablet">
            <div class="welcome_main_title">
              <h3 class="">
                <span> Madurai </span>
                <span> Tech </span>
                <span> community </span>
              </h3>
            </div>
            <h1>Welcomes you to <img src="@/assets/img/home/title.png" class="welcome_block_img" /></h1>
            <p class="content">It is an event to build innovative solutions that position Madurai as
              a smarter, resilient, and sustainable city for living, studying, accessing public services
              and conducting business.
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
                      <p>12<sup>th</sup> Aug 4 PM to 14<sup>th</sup> Aug 6:30 PM</p>
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
                      <p><a target="_blank" href="https://shorturl.at/BRZ14">Solamalai college of engineering,
                          Madurai.</a></p>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
            <!-- <div class="">
              <button class="button is-primary" @click="$router.push('/register')">
                Register to participate
              </button>
            </div> -->
            <div class="register_welcome yellow_bg">
              <div class="columns is-multiline is-mobile">
                <div class="column is-8-desktop is-12-mobile is-6-tablet welcome_for_query">
                  <h4>Registration closed. No on-the-spot Registration.</h4>
                  <div class="is-flex">
                    <p>For Queries:</p>
                    <a :href="LINK_WHATSAPP_GROUP_URL" target="_blank">
                      <img src="@/assets/img/Whatsapp.png" />
                    </a>
                    <a :href="LINK_TELEGRAM_GROUP_URL" target="_blank">
                      <img src="@/assets/img/telegram.png" />
                    </a>
                  </div>
                </div>
                <div class="column is-4-desktop is-12-mobile is-6-tablet ">
                  <img src="@/assets/img/close_sign.png" />
                </div>
              </div>
            </div>
          </div>
          <div class="column is-5-desktop is-12-mobile is-5-tablet">
            <div class="welcome1_right">
              <img src="@/assets/img/home/welcome.png" class="" style="height:90%" />
              <img src="@/assets/img/home/welcome_right.png" />
            </div>
          </div>
        </div>
      </div>

    </section>
    <!-- speaker start -->
    <section class="speaker mb-2">
      <div class="container">
        <div class="has-text-centered">
          <h1 class="single_title_line">Speakers</h1>
          <div class="columns is-multiline is-mobile mt-3">
            <div class="column is-3-desktop is-12-mobile is-3-tablet">
              <div class="speaker_block">
                <div class="round_circle">
                  <img src="@/assets/img/home/kumarvembu.png" class="" />
                </div>
                <p class="speaker_txt_small">Inaugration Ceremony Keynote Speaker</p>
                <p class="speaker_txt_small">12<sup>th</sup> August, 2022 - Friday</p>
                <p class="speaker_txt_big">Mr. Kumar Vembu</p>
                <p class="speaker_txt_small">CEO & Founder- Gofrugal</p>
              </div>
            </div>
            <div class="column is-3-desktop is-12-mobile is-3-tablet">
              <div class="speaker_block">
                <div class="round_circle">
                  <img src="@/assets/img/home/kumararajan.png" class="" />
                </div>
                <p class="speaker_txt_small">Inaugration Ceremony Keynote Speaker</p>
                <p class="speaker_txt_small">12<sup>th</sup> August, 2022 - Friday</p>
                <p class="speaker_txt_big">Mr. Kumarajan</p>
                <p class="speaker_txt_small">Independent Director - Madurai Smart City</p>
              </div>
            </div>
            <div class="column is-3-desktop is-12-mobile is-3-tablet">
              <div class="speaker_block">
                <div class="round_circle">
                  <img src="@/assets/img/home/saba.png" class="" />
                </div>
                <p class="speaker_txt_small">Tech Session Speaker</p>
                <p class="speaker_txt_small">13<sup>th</sup> August, 2022 - Saturday</p>
                <p class="speaker_txt_big">Mr. Sabapathy Narayanan</p>
                <p class="speaker_txt_small">Marketing Head - Payhuddle</p>
              </div>
            </div>
            <div class="column is-3-desktop is-12-mobile is-3-tablet">
              <div class="speaker_block">
                <div class="round_circle">
                  <img src="@/assets/img/home/nanu.png" class="" />
                </div>
                <p class="speaker_txt_small">Tech Session Speaker</p>
                <p class="speaker_txt_small">13<sup>th</sup> August, 2022 - Saturday</p>
                <p class="speaker_txt_big">Mr. Nanu Swamy</p>
                <p class="speaker_txt_small">Founder - Maxelerator Foundation</p>
              </div>
            </div>
            <div class="column is-3-desktop is-12-mobile is-3-tablet">
              <div class="speaker_block">
                <div class="round_circle">
                  <img src="@/assets/img/home/thiru.png" class="" />
                </div>
                <p class="speaker_txt_small">Awarding Ceremony Keynote speaker from Industry</p>
                <p class="speaker_txt_small">14<sup>th</sup> August, 2022 - Sunday</p>
                <p class="speaker_txt_big">Mr. Thirumurugan subburaj</p>
                <p class="speaker_txt_small">Operations Director - HCL Technologies</p>
              </div>
            </div>
            <div class="column is-3-desktop is-12-mobile is-3-tablet">
              <div class="speaker_block">
                <div class="round_circle">
                  <img src="@/assets/img/home/murali.png" class="" />
                </div>
                <p class="speaker_txt_small">Awarding Ceremony Keynote speaker from Academia</p>
                <p class="speaker_txt_small">14<sup>th</sup> August, 2022 - Sunday</p>
                <p class="speaker_txt_big">Prof. Dr. Murali Sambasivan</p>
                <p class="speaker_txt_small">Director - Thiagarajar School of Mangagement</p>
              </div>
            </div>    
          </div>
        </div>
      </div>
    </section>
    <!-- speaker end -->
    <section class="problem_statement yellow_bg mb-2">
      <div class="container">
        <div class="h1_title underline has-text-centered">
          <h1 class="">
            <span>Problem</span>
            <span>Statements</span>
          </h1>
        </div>
        <ul class="prb_stmt">
          <li>
            <div class="round_circle">
              <img src="@/assets/img/mortarboard-fill.png" />
            </div>
            <p>Education</p>
          </li>
          <li>
            <div class="round_circle">
              <img src="@/assets/img/Save_Environment.png" />
            </div>
            <p>Environment</p>
          </li>
          <li>
            <div class="round_circle">
              <img src="@/assets/img/Stethoscope.png" />
            </div>
            <p>Health</p>
          </li>
          <li>
            <div class="round_circle">
              <img src="@/assets/img/Technology.png" />
            </div>
            <p>Technology</p>
          </li>
          <li>
            <div class="round_circle">
              <img src="@/assets/img/stoplights-fill.png" />
            </div>
            <p>Traffic</p>
          </li>
          <li>
            <p>
              <nuxt-link to="/problem-statement" class="click_here">Click here</nuxt-link> to see more details
            </p>
          </li>
        </ul>
      </div>
    </section>
    <section class="partners mb-2">
      <div class="container">
        <div class="has-text-centered">
          <h1 class="single_title_line">Partners</h1>
          <div class="columns is-multiline is-mobile mt-3">
            <div class="column is-4-desktop is-12-mobile is-6-tablet">
              <p class="sub_title">Our Institutional Partner</p>
              <img src="@/assets/img/home/partner1.png" class="partner1_img" />
            </div>
            <div class="column is-3-desktop is-12-mobile is-3-tablet">
              <p class="sub_title">Eco System Partner</p>
              <img src="@/assets/img/home/partner3.png" class="partner3_img" />
            </div>
            <div class="column is-3-desktop is-12-mobile is-3-tablet">
              <p class="sub_title">Promotional Partner</p>
              <img src="@/assets/img/home/partner2.png" class="partner2_img" />
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
            <p>Sponsor this event to make your brand known among the change makers!
            </p>
          </div>
          <div>
            <b-button>
              <nuxt-link to="/sponsor-hackathon-2022">
                <span class="check_out">Check Our</span>
                <span class="sponsr_btn"> Sponsorship packages </span>
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
