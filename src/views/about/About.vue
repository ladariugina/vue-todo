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

<style lang="sass" scoped>
.wrap
    margin: 0 auto
    width: 500px
    padding: 20px
    border-radius: 9px
    box-shadow: 0px 3px 1px -2px rgba(0,0,0,0.2), 0px 2px 2px 0px rgba(0,0,0,0.14), 0px 1px 5px 0px rgba(0,0,0,0.12)
    background: #FFFFFF

.preloader
    display: flex
    justify-content: center
    align-items: center
</style>
