<template>
  <div>
    <section class="top_space">
      <div class="container">
        <div class="columns is-multiline is-mobile">
          <div class="column is-3-desktop is-12-mobile is-3-tablet has-text-centered">
            <img src="@/assets/img/pb_st.png" class="" />
          </div>
          <div class="column is-9-desktop is-12-mobile is-9-tablet">
            <h3 class="pbl_main_heading">Instructions to Participants:</h3>
            <ul class="pbm_main_list">
              <li>
                Solutions can be fully software based, or fully hardware based or a mix of it.
              </li>
              <li>
                Solutions can be developed from scratch or based on some products/solutions that exist in the market or
                adding on top of code in platforms like Github. You are expected to do your value addition when you
                reuse solutions.
                Avoid taking solutions from the market and just demonstrating the same.
              </li>
              <li>
                Your solutions are to be at the best level possible by you. You may present a solution just with design,
                or a prototype or in complete form
              </li>
              <li>
                Start working on the solution immediately after registration and during the offline event, the
                solution can be refined
              </li>
              <li>
                You will have opportunities for team formation during the discussion on problem statements in discord
                channel and also on August 12th during networking</li>
            </ul>
          </div>
        </div>
        <div class="prbm_single">
          <p>
            Problem Discussions channels open now <nuxt-link to="/" class="join_here"> join here </nuxt-link>
          </p>
        </div>
      </div>
    </section>
    <!-- tab -->
    <section class="problem_statement_tab">
      <div class="h1_title underline has-text-centered">
        <h1 class="">
          <span>Problem</span>
          <span>Statements</span>
        </h1>
      </div>
      <div class="container">
        <b-tabs type="">
          <b-tab-item>
            <template #header>
              <div class="round_circle">
                <img src="@/assets/img/Save_Environment.png" />
              </div>
              <p>Environment</p>
            </template>
            <div>
              <div class="container">
                <div class="has-text-centered">
                  <img src="@/assets/img/Save_Environment.png" />
                  <h2 class="prbl_main_title">Environment</h2>
                </div>
                <div class="columns is-multiline is-mobile prbm_stmt_pg">
                  <div class="column is-6-desktop is-12-mobile is-6-tablet">
                    <div class="content">
                      <h3 class="prbm_main_title_pg has-text-centered">Community Based Solidwaste-Management</h3>
                      <ul class="about_us_list">
                        <li>
                          Community based collaborative waste management Solution needed to go towards zero waste. The
                          platform should allow multiple teams to collaborate and achieve waste management.
                        </li>
                        <li>
                          Different personal to be allowed in the platform - Mentor, Requestor, Producer etc.
                        </li>
                        <li>
                          One Community member can post the process to create Organic Manure from daily biodegradable
                          waste created in Homes.
                        </li>
                        <li>
                          Another community member who has a garden can post his need for manure on periodic basis.
                        </li>
                        <li>
                          One more person who may not have a garden can produce that manure from his/her kitchen waste
                          and sell it to the requester.
                        </li>
                        <li>
                          Another person raising few cows can ask for specific waste (cabbage peels, soggy bananas) to
                          be given to them on a daily basis.
                        </li>
                        <li>Yet another e.g., a person having bio-gas at home can ask for kitchen waste.</li>
                      </ul>
                    </div>
                  </div>
                  <div class="column is-6-desktop is-12-mobile is-6-tablet">
                    <div class="content">
                      <h3 class="prbm_main_title_pg has-text-centered">Vaigai Protection</h3>
                      <ul class="about_us_list">
                        <li>
                          Monitor vaigai river bed for encroachments and pollution by solid waste dumping.
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </b-tab-item>
          <b-tab-item>
            <template #header>
              <div class="round_circle">
                <img src="@/assets/img/stoplights-fill.png" />
              </div>
              <p>Traffic</p>
            </template>
            <div>
              <div class="container">
                <div class="has-text-centered">
                  <img src="@/assets/img/stoplights-fill.png" />
                  <h2 class="prbl_main_title">Traffic</h2>
                </div>
                <div class="columns is-multiline is-mobile prbm_stmt_pg">
                  <div class="column is-6-desktop is-12-mobile is-6-tablet">
                    <div class="content">
                      <h3 class="prbm_main_title_pg has-text-centered">Parking</h3>
                      <ul class="about_us_list">
                        <li>
                          Identify few locations in Madurai where the parking problem is severe and
                          provide a technology based solution for that.
                        </li>
                        <li>
                          Common man should have a means to know about Parking information within the
                          city such as the list of Parking locations, Vehicle types that can be parked, Parking fees and
                          live availability status of parking slots.
                        </li>
                        <li>
                          It can be a collaborative Platform where the citizens can add and update details on the
                          parking.
                        </li>
                        <li>
                          Capture of information with the help of geo mapping facilities should be possible.
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div class="column is-6-desktop is-12-mobile is-6-tablet">
                    <div class="content">
                      <h3 class="prbm_main_title_pg has-text-centered">Violations tracing</h3>
                      <ul class="about_us_list">
                        <li>
                          Identify Provide solution to automatically send tickets to the offenders for traffic
                          violations - Jumping red signals, rash/negligent driving crossing speed limits and
                          overboarding two-wheelers are the initial set of violations to be captured.ew locations in
                          Madurai where the parking problem is severe and provide a technology based solution for that.
                        </li>
                        <li>
                          Solution should contain features to capture the violations, raise tickets that can be sent
                          as text messages to the phone numbers of the violaters and provide a dashboard.
                        </li>
                        <li>
                          Phone numbers of the violators should be got from RTO where the vehicles are registered or
                          Insurance companies where the vehicles are insured - Such interfaces should be possible.
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div class="columns is-mobile is-centered prbm_stmt_pg">
                  <div class="column is-half-desktop is-12-mobile">
                    <div class="content">
                      <h3 class="prbm_main_title_pg has-text-centered">Accidents Control </h3>
                      <ul class="about_us_list">
                        <li>
                          Identify the 3 road locations in Madurai which are most accident prone and look
                          for solutions to reduce accidents in those locations.
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </b-tab-item>
          <b-tab-item>
            <template #header>
              <div class="round_circle">
                <img src="@/assets/img/mortarboard-fill.png" />
              </div>
              <p>Education</p>
            </template>
            <div>
              <div class="container">
                <div class="has-text-centered">
                  <img src="@/assets/img/mortarboard-fill.png" />
                  <h2 class="prbl_main_title">Education</h2>
                </div>
                <div class="columns is-multiline is-mobile prbm_stmt_pg">
                  <div class="column is-6-desktop is-12-mobile is-6-tablet">
                    <div class="content">
                      <h3 class="prbm_main_title_pg has-text-centered">Career Counseling and Scholarships</h3>
                      <ul class="about_us_list">
                        <li>
                          A collaborative platform for connecting career counselors, teachers, students and parents.
                        </li>
                        <li>
                          This platform should have information on Colleges and Courses.
                        </li>
                        <li>
                          It should also allow information collection and display of scholarships at state, national and
                          international level for higher studies. Also scholarships that are available from private
                          trusts should be available.
                        </li>
                        <li>
                          This forum should allow needy people to post their request for scholarship and be able to
                          connect with people who can advice them on education.
                        </li>
                        <li>
                          It should also allow students to write reviews on colleges and courses.
                        </li>
                        <li>
                          The platform should display the contents in regional languages along with English.
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div class="column is-6-desktop is-12-mobile is-6-tablet">
                    <div class="content pos_rela">
                      <h3 class="prbm_main_title_pg has-text-centered">Home Schooling </h3>
                      <ul class="about_us_list">
                        <li>
                          Home schooling support for parents and children.
                        </li>
                        <li>
                          A collaborative platform to connect the home tutors, parents and students.
                        </li>
                        <li>
                          The platform should provide information about NIOS
                        </li>
                      </ul>
                      <div class="spons_abs">
                        <div class="spons">
                          <img src="@/assets/img/Investment.png" />
                          <p>sponsored</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </b-tab-item>
          <b-tab-item>
            <template #header>
              <div class="round_circle">
                <img src="@/assets/img/Stethoscope.png" />
              </div>
              <p>Health</p>
            </template>
            <div>
              <div class="container">
                <div class="has-text-centered">
                  <img src="@/assets/img/Stethoscope.png" />
                  <h2 class="prbl_main_title">Health</h2>
                </div>
                <div class="columns is-multiline is-mobile prbm_stmt_pg">
                  <div class="column is-6-desktop is-12-mobile is-6-tablet">
                    <div class="content">
                      <h3 class="prbm_main_title_pg has-text-centered">Dashboard for Health Drives</h3>
                      <ul class="about_us_list">
                        <li>
                          NGOs and Government entities run health drives such as Polio vaccination. Health
                          workers go to different locations and give the vaccine. There is no live dashboarding
                          available to know information like:
                          <p> 1. Are the health workers able to set their camp and start their work on time? </p>
                          <p> 2. Is the camp getting the expected crowd? </p>
                          <p> 3. Is the camp having more crowd than anticipated? </p>
                          <p> 4. Are there any hindrances - rain, power problems, local people not cooperating, etc.
                          </p>
                          <p> 5. Live monitoring of the health drive progress </p>
                          <p> 6. Capture of the beneficiary data in secured manner </p>
                        </li>
                        <li>
                          Note that health workers are not tech savvy and always have more to do. Heavy keying of inputs
                          and waiting for app to respond back will not help.
                        </li>
                        <li>
                          IT solutions connecting the Field workers and control room with dashboard is needed for such
                          scenarios.Creative solutions such as taking voice inputs and digitizing from handwriting will
                          help
                        </li>
                        <li>
                          IT solutions devised for these scenarios can be used for any health drive and not limited for
                          vaccination.
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div class="column is-6-desktop is-12-mobile is-6-tablet">
                    <div class="content pos_rela">
                      <h3 class="prbm_main_title_pg has-text-centered">Child Nutrition </h3>
                      <ul class="about_us_list">
                        <li>
                          Find ways to improve child nutrition, as early child nutrition is strongly correlated to IQ.
                        </li>
                        <li>
                          Identify the locations that need screening.
                        </li>
                        <li>
                          Identify children afflicted by malnutrition and gather details.
                        </li>
                        <li>
                          Educate and support the communities to improve nutrition.
                        </li>
                        <li>
                          Follow-up and measure the improvements.
                        </li>
                      </ul>
                    </div>
                    <div class="content pos_rela">
                      <h3 class="prbm_main_title_pg has-text-centered">Water Quality </h3>
                      <ul class="about_us_list">
                        <li>
                          Measure water quality at homes and offices - both the quality of corporation
                          water and underground water.
                        </li>
                        <li>
                          Derive intelligence to categorize whether water is of good quality or bad quality.
                        </li>
                        <li>
                          Provide geo mapping of City and surrounding areas with water quality data.
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </b-tab-item>
          <b-tab-item>
            <template #header>
              <div class="round_circle">
                <img src="@/assets/img/Technology.png" />
              </div>
              <p>Technology</p>
            </template>
            <div>
              <div class="container">
                <div class="has-text-centered">
                  <img src="@/assets/img/Technology.png" />
                  <h2 class="prbl_main_title">Technology</h2>
                </div>
                <div class="columns is-multiline is-mobile is-centered prbm_stmt_pg">
                  <div class="column is-half-desktop is-12-mobile">
                    <div class="content pos_rela">
                      <h3 class="prbm_main_title_pg has-text-centered">Smart city </h3>
                      <ul class="about_us_list">
                        <li style="margin-top: 6%;">
                          LoRAWAN wireless applications for agriculture, real estate, industrial,
                          smart city applications and others.
                        </li>
                      </ul>
                      <div class="spons_abs">
                        <div class="spons">
                          <img src="@/assets/img/Investment.png" />
                          <p>sponsored</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </b-tab-item>
          <b-tab-item>
            <template #header>
              <div class="round_circle" style="padding: 41px 25px;">
                <img src="@/assets/img/three_dots.png" />
              </div>
              <p>Others</p>
            </template>
            <div>
              <div class="container">
                <div class="has-text-centered">
                  <img src="@/assets/img/three_dots.png" />
                  <h2 class="prbl_main_title">Others</h2>
                </div>
                <div class="columns is-multiline is-mobile prbm_stmt_pg">
                  <div class="column is-6-desktop is-12-mobile is-6-tablet">
                    <div class="content">
                      <h3 class="prbm_main_title_pg has-text-centered">E-commerce Platform for Local Producers</h3>
                      <ul class="about_us_list">
                        <li>
                          A collaborative platform connecting producers, sellers and buyers of local produce such as
                          Jasmine, Sungidi textiles etc.,
                        </li>
                        <li>
                          The platform should allow marketing, order, payment, receipt generation and inventory
                          management,
                        </li>
                        <li>
                          Logistics status also should be tracked.
                        </li>
                        <li>
                          Though the functionality is similar to popular E-Commerce platforms, the USP is in making the
                          Inventory selective to rural India needs, voice support for regional languages, leveraging
                          post
                          offices for logistics and contain secure payment options.
                        </li>
                      </ul>

                    </div>
                  </div>
                  <div class="column is-6-desktop is-12-mobile is-6-tablet">
                    <div class="content">
                      <h3 class="prbm_main_title_pg has-text-centered">Open Problem </h3>
                      <ul class="about_us_list">
                        <li>
                          Take up any city problem that you can solve and provide a technology centric solution.
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </b-tab-item>
        </b-tabs>
      </div>
    </section>
    <!-- <section class="problem_statement_tab">
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
            <div class="dots_round_circle">
              <img src="@/assets/img/three_dots.png" />
            </div>
            <p>Others</p>
          </li>
        </ul>
      </div>
    </section> -->



  </div>
</template>

<script>
  export default {
    data() {
      return {}
    },
    methods: {

    }
  }

</script>

<style>
</style>
