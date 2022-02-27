<template>
  <div class="header" v-if="isErrorUser">
    <img :src="userData.avatar_url" class="header__img" />
    <div>
      <p class="header__title">{{ userData.name }}</p>
      <p class="header__subtitle">{{ userData.bio }}</p>
      <div class="header__contacts">
        <img src="/img/arroba.svg" />
        <p class="header__contacts--data">Ladu3112@gmail.com</p>
      </div>
      <div class="header__phone">
        <img src="/img/telegram.svg" />
        <p class="header__contacts--data">+7-963-731-43-20</p>
      </div>
    </div>
    <div class="header__links">
      <a :href="userData.html_url" class="header__link-github"></a>
      <a href="https://linkedin.com" class="header__link-linkedin"></a>
      <a href="https://www.facebook.com" class="header__link-facebook"></a>
      <a href="https://vk.com/id_lada_ber" class="header__link-vk"></a>
    </div>
  </div>
</template>

<script>
export default {
  name: "Header",
  computed: {
    userData() {
      return this.$store.state.about.userData;
    },
    isErrorUser() {
      return !this.$store.state.about.isErrorUser;
    },
  },
};
</script>
