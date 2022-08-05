<template>
  <div>
    <section class="top_space">
      <div class="container">
        <div class="columns is-multiline is-mobile">
          <div class="column is-3-desktop is-12-mobile is-3-tablet">
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
                adding
                on top of code in platforms like Github. You are expected to do your value addition when you reuse
                solutions.
                Avoid taking solutions from the market and just demonstrating the same.
              </li>
              <li>
                Your solutions are to be at the best level possible by you. You may present a solution just with design,
                or a
                prototype or in complete form

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
    <section class="problem_statement_tab">
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
    </section>
    <section>
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
                  Community based collaborative waste management Solution needed to go towards zero waste. The platform
                  should allow
                  multiple teams to collaborate and achieve waste management.
                </li>
                <li>
                  Different personal to be allowed in the platform - Mentor, Requestor, Producer etc.
                </li>
                <li>
                  One Community member can post the process to create Organic Manure from daily biodegradable waste
                  created in Homes.
                </li>
                <li>
                  Another community member who has a garden can post his need for manure on periodic basis.
                </li>
                <li>
                  One more person who may not have a garden can produce that manure from his/her kitchen waste and sell
                  it to the
                  requester.
                </li>
                <li>
                  Another person raising few cows can ask for specific waste (cabbage peels, soggy bananas) to be given
                  to them on a
                  daily basis.
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
    </section>
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
