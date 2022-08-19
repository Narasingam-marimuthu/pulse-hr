<template>
  <div class="navbar yellow_bg">
    <div class="container">
      <b-navbar>
        <template #brand>
          <b-navbar-item tag="router-link" to="/">
            <img src="@/assets/logo.png"
              alt="Tech Community, Madurai, IT, Hackathon 2022, Volunteer Based Community, Hackathon, Demo Days, Startup Events, Job Fairs, Mentorship for startups, Networking, new technologies">
          </b-navbar-item>
        </template>
        <template #start>

        </template>

        <template #end>
          <b-navbar-item tag="router-link" to="/">
            Home
          </b-navbar-item>
          <b-navbar-dropdown label="Madurai Hackathon 2022">
            <b-navbar-item tag="router-link" to="/about-hackathon">
              About Hackathon 2022
            </b-navbar-item>
            <b-navbar-item tag="router-link" to="/problem-statement">
              Problem Statement
            </b-navbar-item>
            <b-navbar-item tag="router-link" to="/event-schedule">
              Event Schedule
            </b-navbar-item>
            <b-navbar-item tag="router-link" to="/our-speakers-2022">
              Our Speakers 2022
            </b-navbar-item>
            <b-navbar-item tag="router-link" to="/register">
              Register
            </b-navbar-item>
            <b-navbar-item tag="router-link" to="/winner-selection-criteria">
              Winner Selection Criteria
            </b-navbar-item>
            <b-navbar-item tag="router-link" to="/sponsor-hackathon-2022">
              Sponsor Hackathon 2022
            </b-navbar-item>
            <b-navbar-item tag="router-link" to="/our-sponsor-2022">
              Our Sponsors 2022
            </b-navbar-item>
            <b-navbar-item tag="router-link" to="/digital-poster">
              Digital Posters
            </b-navbar-item>
            <!-- <b-navbar-item tag="router-link" to="/faq">
              FAQ
            </b-navbar-item> -->
          </b-navbar-dropdown>
          <b-navbar-item tag="router-link" to="/sponsor-us">
            Sponsor Us
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
