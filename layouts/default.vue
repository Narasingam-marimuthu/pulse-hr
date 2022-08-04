<template>
  <div>
    <Header />
    <section class="main-content columns">
      <div class="container column is-12">
        <nuxt />
      </div>
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
