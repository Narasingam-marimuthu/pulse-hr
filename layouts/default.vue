<template>
  <div>
    <Header />
    <section class="main-content">
        <nuxt />
    </section>
    <Footer />
  </div>
</template>

<script>
import Footer from '~/components/Footer.vue'
import Header from '~/components/Header.vue'
export default {
  data() {
    return {};
  },
  components: { Footer, Header }
}
</script>
