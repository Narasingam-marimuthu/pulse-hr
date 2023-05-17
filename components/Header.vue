<template>
  <div class="navbar yellow_bg">
    <div class="container">
      <b-navbar :close-on-click="true">
        <template #brand>
          <b-navbar-item tag="router-link" to="/">
            <img
              src="@/assets/logo.png"
              alt="Tech Community, Madurai, IT, Hackathon 2022, Volunteer Based Community, Hackathon, Demo Days, Startup Events, Job Fairs, Mentorship for startups, Networking, new technologies"
            />
          </b-navbar-item>
        </template>
        <template #start> </template>

        <template #end>
          <template v-for="(menu, menuIndex) in menus">
            <b-navbar-item
              :active="menu.active"
              v-if="menu.type"
              tag="router-link"
              @click.native="clickLink"
              :to="menu.to"
              :key="menuIndex"
            >
              {{ menu.label }}
            </b-navbar-item>
            <b-navbar-dropdown
              v-else
              :active="menu.active"
              :class="menu.class"
              :collapsible="menu.collapsible"
              :label="menu.label"
              :key="menuIndex"
            >
              <template v-for="(menu1, menu1Index) in menu.menus">
                <b-navbar-item
                  v-if="menu1.type"
                  :active="menu1.active"
                  tag="router-link"
                  @click.native="clickLink"
                  :to="menu1.to"
                  :key="menu1Index"
                >
                  {{ menu1.label }}
                </b-navbar-item>
                <b-navbar-dropdown
                  v-else
                  :active="menu1.active"
                  :collapsible="menu1.collapsible"
                  :class="menu1.class"
                  :label="menu1.label"
                  :key="menu1Index"
                >
                  <template v-for="(menu2, menu2Index) in menu1.menus">
                    <b-navbar-item
                      v-if="menu2.type"
                      :active="menu2.active"
                      tag="router-link"
                      @click.native="clickLink"
                      :to="menu2.to"
                      :key="menu2Index"
                    >
                      {{ menu2.label }}
                    </b-navbar-item>
                    <b-navbar-dropdown
                      v-else
                      :active="menu2.active"
                      :class="menu2.class"
                      :collapsible="menu2.collapsible"
                      :label="menu2.label"
                      :key="menu2Index"
                    >
                      <template v-for="(menu3, menu3Index) in menu2.menus">
                        <b-navbar-item
                          v-if="menu3.type"
                          :active="menu3.active"
                          tag="router-link"
                          @click.native="clickLink"
                          :to="menu3.to"
                          :key="menu3Index"
                        >
                          {{ menu3.label }}
                        </b-navbar-item>
                        <b-navbar-dropdown
                          v-else
                          :active="menu3.active"
                          :class="menu3.class"
                          :collapsible="menu3.collapsible"
                          :label="menu3.label"
                          :key="menu3Index"
                        >
                        </b-navbar-dropdown>
                      </template>
                    </b-navbar-dropdown>
                  </template>
                </b-navbar-dropdown>
              </template>
            </b-navbar-dropdown>
          </template>
          <!-- <b-navbar-dropdown label="Events">
            <b-navbar-dropdown :collapsible="true" label="Past Events">
              <b-navbar-item tag="router-link" to="/events/hactoberfest">
                Hacktoberfest
              </b-navbar-item>

              <b-navbar-dropdown
                :collapsible="true"
                label="Madurai Hackathon 2022"
                class="inner_dropdown"
              >
                <b-navbar-item
                  tag="router-link"
                  to="/events/hackathon-2022/about-hackathon"
                >
                  About Hackathon 2022
                </b-navbar-item>
                <b-navbar-item
                  tag="router-link"
                  to="/events/hackathon-2022/problem-statement"
                >
                  Problem Statement
                </b-navbar-item>
                <b-navbar-item
                  tag="router-link"
                  to="/events/hackathon-2022/event-schedule"
                >
                  Event Schedule
                </b-navbar-item>
                <b-navbar-item
                  tag="router-link"
                  to="/events/hackathon-2022/our-speakers"
                >
                  Our Speakers 2022
                </b-navbar-item>
                <b-navbar-item
                  tag="router-link"
                  to="/events/hackathon-2022/register"
                >
                  Register
                </b-navbar-item>
                <b-navbar-item
                  tag="router-link"
                  to="/events/hackathon-2022/winner-selection-criteria"
                >
                  Winner Selection Criteria
                </b-navbar-item>
                <b-navbar-item
                  tag="router-link"
                  to="/events/hackathon-2022/sponsor-hackathon"
                >
                  Sponsor Hackathon 2022
                </b-navbar-item>
                <b-navbar-item
                  tag="router-link"
                  to="/events/hackathon-2022/our-sponsor"
                >
                  Our Sponsors 2022
                </b-navbar-item>
                <b-navbar-item
                  tag="router-link"
                  to="/events/hackathon-2022/digital-poster"
                >
                  Digital Posters
                </b-navbar-item>
              </b-navbar-dropdown>
            </b-navbar-dropdown>
            <b-navbar-dropdown :collapsible="true" label="Current Events">
              <b-navbar-item tag="router-link" to="/events/network-meet">
                Network Meet
              </b-navbar-item>
            </b-navbar-dropdown>
          </b-navbar-dropdown>
          <b-navbar-dropdown label="Activities">
            <b-navbar-item tag="router-link" to="/activities/mentoring">
              Mentoring
            </b-navbar-item>
            <b-navbar-item
              tag="router-link"
              to="/activities/internship-posting"
            >
              Internship Posting
            </b-navbar-item>
          </b-navbar-dropdown>
          <b-navbar-item tag="router-link" to="/sponsor-us">
            Sponsor Us
          </b-navbar-item>
          <b-navbar-item tag="router-link" to="/subscribe">
            Subscribe
          </b-navbar-item>
          <b-navbar-item tag="router-link" to="/volunteers">
            Volunteers
          </b-navbar-item> -->
        </template>
      </b-navbar>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      menus: [
        {
          label: "Home",
          active: false,
          to: "/",
          type: 1, // 1->link, 0->dropdown
          collapsible: false,
          class: "",
          menus: [],
        },
        {
          label: "Events",
          active: false,
          to: "",
          type: 0, // 1->link, 0->dropdown
          collapsible: false,
          class: "kill-dropdown",
          menus: [
            {
              label: "Past Events",
              active: false,
              to: "",
              type: 0, // 1->link, 0->dropdown
              collapsible: true,
              class: "kill-dropdown",
              menus: [
                {
                  label: "Hacktoberfest",
                  active: false,
                  to: "/events/hactoberfest",
                  type: 1, // 1->link, 0->dropdown
                  collapsible: false,
                  class: "",
                  menus: [],
                },
                {
                  label: "Madurai Hackathon 2022",
                  active: false,
                  to: "",
                  type: 0, // 1->link, 0->dropdown
                  collapsible: true,
                  class: "inner_dropdown kill-dropdown",
                  menus: [
                    {
                      label: "About Hackathon 2022",
                      active: false,
                      to: "/events/hackathon-2022/about-hackathon",
                      type: 1, // 1->link, 0->dropdown
                      collapsible: false,
                      class: "",
                      menus: [],
                    },
                    {
                      label: "Problem Statement",
                      active: false,
                      to: "/events/hackathon-2022/problem-statement",
                      type: 1, // 1->link, 0->dropdown
                      collapsible: false,
                      class: "",
                      menus: [],
                    },
                    {
                      label: "Event Schedule",
                      active: false,
                      to: "/events/hackathon-2022/event-schedule",
                      type: 1, // 1->link, 0->dropdown
                      collapsible: false,
                      class: "",
                      menus: [],
                    },
                    {
                      label: " Our Speakers 2022",
                      active: false,
                      to: "/events/hackathon-2022/our-speakers",
                      type: 1, // 1->link, 0->dropdown
                      collapsible: false,
                      class: "",
                      menus: [],
                    },
                    {
                      label: "Register",
                      active: false,
                      to: "/events/hackathon-2022/register",
                      type: 1, // 1->link, 0->dropdown
                      collapsible: false,
                      class: "",
                      menus: [],
                    },
                    {
                      label: "Winner Selection Criteria",
                      active: false,
                      to: "/events/hackathon-2022/winner-selection-criteria",
                      type: 1, // 1->link, 0->dropdown
                      collapsible: false,
                      class: "",
                      menus: [],
                    },
                    {
                      label: "Sponsor Hackathon 2022",
                      active: false,
                      to: "/events/hackathon-2022/sponsor-hackathon",
                      type: 1, // 1->link, 0->dropdown
                      collapsible: false,
                      class: "",
                      menus: [],
                    },
                    {
                      label: "Our Sponsors 2022",
                      active: false,
                      to: "/events/hackathon-2022/our-sponsor",
                      type: 1, // 1->link, 0->dropdown
                      collapsible: false,
                      class: "",
                      menus: [],
                    },
                    {
                      label: "Digital Posters",
                      active: false,
                      to: "/events/hackathon-2022/digital-poster",
                      type: 1, // 1->link, 0->dropdown
                      collapsible: false,
                      class: "",
                      menus: [],
                    },
                  ],
                },
              ],
            },
            {
              label: "Current Events",
              active: false,
              to: "",
              type: 0, // 1->link, 0->dropdown
              collapsible: true,
              class: "kill-dropdown",
              menus: [
                {
                  label: "Network Meet",
                  active: false,
                  to: "/events/network-meet",
                  type: 1, // 1->link, 0->dropdown
                  collapsible: false,
                  class: "",
                  menus: [],
                },
              ],
            },
          ],
        },
        {
          label: "Activities",
          active: false,
          to: "",
          type: 0, // 1->link, 0->dropdown
          collapsible: false,
          class: "kill-dropdown",
          menus: [
            {
              label: "Mentoring",
              active: false,
              to: "/activities/mentoring",
              type: 1, // 1->link, 0->dropdown
              collapsible: false,
              class: "",
              menus: [],
            },
            {
              label: "Internship Posting",
              active: false,
              to: "/activities/internship-posting",
              type: 1, // 1->link, 0->dropdown
              collapsible: false,
              class: "",
              menus: [],
            },
          ],
        },
        {
          label: "Sponsor Us",
          active: false,
          to: "/sponsor-us",
          type: 1, // 1->link, 0->dropdown
          collapsible: false,
          class: "",
          menus: [],
        },
        {
          label: "Subscribe",
          active: false,
          to: "/subscribe",
          type: 1, // 1->link, 0->dropdown
          collapsible: false,
          class: "",
          menus: [],
        },
        {
          label: "Volunteers",
          active: false,
          to: "/volunteers",
          type: 1, // 1->link, 0->dropdown
          collapsible: false,
          class: "",
          menus: [],
        },
      ],
    };
  },
  methods: {
    clickLink() {
      $(".kill-dropdown").removeClass("is-active");
    },
  },
};
</script>
<style>
.navbar-item.has-dropdown.inner_dropdown a {
  padding-left: 0;
}
.navbar-item.has-dropdown.is-active.inner_dropdown .navbar-dropdown {
  padding: 0.375rem 1rem;
}
.navbar-dropdown .navbar-dropdown {
  left: 50px;
  top: 50px;
}
@media screen and (max-width: 767px) {
  .navbar-dropdown .navbar-dropdown {
    left: 0;
    top: 45px;
  }
  .navbar-dropdown .navbar-dropdown a {
    padding-left: 3.5rem;
  }
  .navbar-dropdown .navbar-dropdown .inner_dropdown {
    padding-left: 3.5rem;
  }
  .navbar-item.has-dropdown.is-active.inner_dropdown .navbar-dropdown a {
    padding: 0.375rem 0 0.375rem 3.5rem;
  }
}
</style>
