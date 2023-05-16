<template>
  <div class="navbar yellow_bg">
    <div class="container">
      <b-navbar>
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
          <b-navbar-item tag="router-link" to="/"> Home </b-navbar-item>
          <b-navbar-dropdown label="Events">
            <b-navbar-dropdown collapsible="true" label="Past Events">
              <b-navbar-item tag="router-link" to="/events/hactoberfest">
                Hacktoberfest
              </b-navbar-item>
              <!-- <b-navbar-item
                tag="router-link"
                to="/events/hackathon-2022/digital-poster"
              >
                Participation at Hacktoberfest 2022
              </b-navbar-item>
              <b-navbar-item
                tag="router-link"
                to="/events/hackathon-2022/digital-poster"
              >
                Madurai Hackathon 2022.
              </b-navbar-item> -->
              <b-navbar-dropdown
                collapsible="true"
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
                <!-- <b-navbar-item tag="router-link" to="/faq">
                FAQ
              </b-navbar-item> -->
              </b-navbar-dropdown>
            </b-navbar-dropdown>
            <b-navbar-dropdown collapsible="true" label="Current Events">
              <b-navbar-item tag="router-link" to="/events/network-meet">
                Network Meeting
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
          </b-navbar-item>
          <!-- <b-navbar-item tag="router-link" to="/contactus">
          Contact Us
        </b-navbar-item> -->
        </template>
      </b-navbar>
    </div>
  </div>
</template>

<style>
.navbar-item.has-dropdown.inner_dropdown a {
  padding-left: 0;
}
.navbar-item.has-dropdown.is-active.inner_dropdown .navbar-dropdown {
  padding: 0.375rem 1rem;
}
</style>
