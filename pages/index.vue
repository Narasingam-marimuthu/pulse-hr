<template>
    <section>
        <section class="menu">
            <nav class="navbar" role="navigation" aria-label="main navigation">
                <div class="navbar-brand">
                  <a class="navbar-item" href="https://bulma.io">
                    <img src="https://bulma.io/images/bulma-logo.png" width="112" height="28">
                  </a>
              
                  <a role="button" class="navbar-burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                  </a>
                </div>
              
                <div id="navbarBasicExample" class="navbar-menu">
                  <div class="navbar-end">                    
                    <nuxt-link to="/" class="navbar-item">Home </nuxt-link>
                    <nuxt-link to="/about" class="navbar-item">About </nuxt-link>
                    
                    <div class="navbar-item has-dropdown is-hoverable">
                        <a class="navbar-link">
                          Madurai Hackathon 2022
                        </a>
                
                        <div class="navbar-dropdown">
                            <nuxt-link to="/about" class="navbar-item">
                            About Hackathon 2022
                        </nuxt-link>
                        <nuxt-link to="/problem_statement" class="navbar-item">
                            Problem statement
                        </nuxt-link>
                        <nuxt-link to="/event_schedule" class="navbar-item">
                            Event Schedule
                        </nuxt-link>
                        <nuxt-link to="/register" class="navbar-item">
                            Register
                        </nuxt-link>
                        <nuxt-link to="/winner" class="navbar-item">
                            Winner Selection criteria
                        </nuxt-link>
                        <nuxt-link to="/sponsor" class="navbar-item">
                            Sponsor Hackathon 2022
                        </nuxt-link>
                        <nuxt-link to="/digita_posters" class="navbar-item">
                           Digital Posters
                        </nuxt-link>
                        <nuxt-link to="/faq" class="navbar-item">
                           FAQ
                         </nuxt-link>
                        </div>
                      </div>
                    <!-- <nuxt-link to="/m_hackathon" class="navbar-item">Madurai Hackathon 2022 </nuxt-link> -->
                    <nuxt-link to="/m_hackathon" class="navbar-item">sponsors 2022 </nuxt-link>
                    <nuxt-link to="/m_hackathon" class="navbar-item">Volunteers </nuxt-link>                   
              
                  </div>
                </div>
              </nav>
        </section>
    <b-carousel>
        <b-carousel-item v-for="(carousel, i) in carousels" :key="i">
            <section :class="`hero is-medium is-${carousel.color}`">
                <div class="hero-body has-text-centered">
                    <h1 class="title">{{carousel.text}}</h1>
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
                 <span>  Madurai  </span> 
                 <span>    Tech  </span> 
                    <span>   community  </span> </h3>
                </div>
                <h1>Welcomes you to <img src="@/assets/img/home/title.png" class="welcome_block_img"/></h1>
                <p class="content">It is an event to build innovate soluctions that position Madurai as asmarter, resilient, and
                    sustainable city for living, studying, accessing public services and conducting business.</p>
                <p class="content">
                    For institutions doing bulk registration, we are making the registration fees as Rs. 99. Students, please contact your institution SPOC to register through institution. You can also register using this site. If any excess amount paid, we'll refund at the event.
For professionals, the registration fees is Rs. 300, and professionals need to use this website to register.
                </p>
                    <div class="venu_detail">
                        <ul class="">
                            <li>
                                <div class="venu_content_space pl-0 ">
                                <div class="is-flex">
                                    <img src="@/assets/img/home/w_icon1.png"/>
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
                                    <img src="@/assets/img/home/w_icon2.png"/>
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
                                    <img src="@/assets/img/home/w_icon3.png"/>
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
                                    <img src="@/assets/img/home/w_icon4.png"/>
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
                    <div class="h1_title has-text-centered">
                        <h1 class="">
                            <span>Problem</span>
                            <span>statement</span>
                        </h1>
                    </div>
</div>
<div class="column is-6-desktop is-12-mobile is-6-tablet">
    <img src="@/assets/img/home/welcome.png"/>
    <img src="@/assets/img/home/welcome_right.png"/>
</div>
</div>
</div>
        
    </section>
    <section class="footer">
        <div class="container">
            <div class="columns is-multiline is-mobile">
                <div class="column is-3-desktop is-12-mobile is-6-tablet">
                    <div class="footer_block_one">
                    <h4>Contact us</h4>
                    <p>938466737</p>
                    <p>247, SLC2, Anna Nagar, 
                        Madurai - 625020
                        </p>
                    </div>

</div>
<div class="column is-3-desktop is-12-mobile is-6-tablet">
    <h4>Email us</h4>
    <p>For General Enquiry</p>
    <p class="mb-4"><b>Contact@madurai-tech.org</b></p>
    <p>For Sponsor Enquiry
        </p>
        <p><b>Sponsor@madurai-tech.org</b></p>

</div>
<div class="column is-3-desktop is-12-mobile is-6-tablet">
    <div class="footer_block_three">
    <h4>Useful Links</h4>
    <p><nuxt-link to="about" class="">About </nuxt-link></p>
   <p><nuxt-link to="sponsors" class="">Sponsors 2022</nuxt-link></p>
   <p><nuxt-link to="problem_statement" class="">Problem statement</nuxt-link></p>
   <p><nuxt-link to="register" class="">Register </nuxt-link></p>
</div>
</div>
<div class="column is-3-desktop is-12-mobile is-6-tablet">
    <div class="footer_block_four">
   <p class="mb-4">A high-quality solution through collaboration between experts</p>
   <div class="is-flex">
       <p>Follow us on</p>
    
   </div>
</div>
</div>
</div>           
<div class="has-text-centered copy_rights">
    <p>&#169; Madurai Tech Community</p>
</div>

        </div>
    </section>
</section>
</template>

<script>
    export default {
        data(){
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
  