<template>
  <div class="wrap" v-if="isPreloader">
    <div class="preloader">
      <img src="/img/preloader.svg" />
    </div>
  </div>
  <div class="wrap" v-else>
    <User />
    <Repositories />
  </div>
</template>

<script>
import User from "./components/User.vue";
import Repositories from "./components/Repositories.vue";
import store from "@/store";

export default {
  name: "About",
  components: {
    User,
    Repositories,
  },
  computed: {
    isPreloader() {
      return this.$store.state.about.isPreloader;
    },
  },
  beforeRouteEnter(to, from, next) {
    if (!store.state.about.isLoadedData) {
      store.dispatch("ABOUT_FETCH_USER").then(() => {
        store.dispatch("ABOUT_FETCH_REPO").then(() => {
          next();
        });
      });
    } else next();
  },
};
</script>
