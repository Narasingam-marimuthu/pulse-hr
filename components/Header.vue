<template>
    <b-navbar>
        <template #brand>
            <b-navbar-item tag="router-link" :to="{ path: '/' }">
                <img src="@/assets/logo.png"
                    alt="Tech Community, Madurai, IT, Hackathon 2022, Volunteer Based Community, Hackathon, Demo Days, Startup Events, Job Fairs, Mentorship for startups, Networking, new technologies">
            </b-navbar-item>
        </template>
        <template #start>

        </template>

        <template #end>
            <b-navbar-item href="#">
                Home
            </b-navbar-item>
            <b-navbar-item href="#">
                Documentation
            </b-navbar-item>
            <b-navbar-dropdown label="Info">
                <b-navbar-item href="#">
                    About
                </b-navbar-item>
                <b-navbar-item href="#">
                    Contact
                </b-navbar-item>
            </b-navbar-dropdown>
        </template>
    </b-navbar>
</template>