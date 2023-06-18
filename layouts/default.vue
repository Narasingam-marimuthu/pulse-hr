<template>
  <div>
    <section>
      <Header />
      <client-only>
        <span v-show="loading == true">
          <b-loading :is-full-page="true" v-model="loading" :can-cancel="false">
            <b-image :src="require('@/assets/1amw.gif')"></b-image>
          </b-loading>
        </span>
      </client-only>
      <nuxt />
    </section>
    <Footer />
  </div>
</template>

<script>
import Footer from "~/components/Footer.vue";
import Header from "~/components/Header.vue";
import { mapState, mapActions, mapGetters } from "vuex";

export default {
  data() {
    return {};
  },
  components: { Footer, Header },
  computed: {
    ...mapState({
      loading: (state) => state.MODULE_LOADING.isLoading,
    }),
  },
  methods: {
    ...mapActions({
      ACTION_POST: "MODULE_POST/ACTION_POST",
      ACTION_LOADING: "MODULE_LOADING/ACTION_LOADING",
    }),
  },
};
</script>
