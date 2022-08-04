<template>
    <section>
        <b-carousel :arrow="false" :pause-info="false" :indicator-style="'is-dots'" :indicator-position="'is-bottom'"
            :indicator-background="false" :indicator-inside="false">
            <b-carousel-item v-for="(carousel, i) in carousels" :key="i">
                <section :class="`hero is-medium is-${carousel.color}`">
                    <div class="hero-body has-text-centered">
                        <h1 class="title">{{ carousel.text }}</h1>
                    </div>
                </section>
            </b-carousel-item>
        </b-carousel>
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
                            asmarter, resilient, and
                            sustainable city for living, studying, accessing public services and conducting business.
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
                            <button class="button is-primary ">
                                Register to participate
                            </button>
                        </div>
                        <div class="welcome_for_query is-flex">
                            <p>For Queries:</p>
                            <img src="@/assets/img/telegram.png" />
                            <img src="@/assets/img/Whatsapp.png" />
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
            <div class="h1_title has-text-centered">
                <h1 class="">
                    <span>Problem</span>
                    <span>Statement</span>
                </h1>
            </div>
        </section>
    </section>
</template>

<script>
    export default {
        data() {
            return {
                carousels: [
                    { text: 'Slide 1', color: 'primary' },
                    { text: 'Slide 2', color: 'info' },
                    { text: 'Slide 3', color: 'success' },
                    { text: 'Slide 4', color: 'warning' },
                    { text: 'Slide 5', color: 'danger' }
                ]
            }
        }
    }
</script>