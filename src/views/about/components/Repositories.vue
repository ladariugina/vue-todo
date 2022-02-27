<template>
  <div class="section" v-if="isErrorRepo && isErrorUser">
    <p class="section__title">Репозитории на github.com</p>
    <div class="repositories" v-if="repoList.length > 0">
      <div class="repositories__item" v-for="repo in repoList" :key="repo.id">
        <a class="repositories__name" :href="repoLink">{{ repo.name }}</a>
        <div class="repositories__info">
          <span class="info__logo" :class="classLanguage(repo.language)">{{
            repo.language
          }}</span>
          <span class="info__star">{{ repo.stargazers_count }}</span>
          <span class="info__fork">{{ repo.forks }}</span>
        </div>
      </div>
    </div>
    <div class="error" v-else>
      <img src="/img/frame.svg" />
      <p>Репозитории отсутствуют</p>
      <p>
        Добавьте как минимум один репозиторий на
        <a href="https://github.com/">github.com</a>
      </p>
    </div>
  </div>

  <div class="error" v-else>
    <img src="/img/frame.svg" />
    <p>Что-то пошло не так...</p>
    <p>Попробуйте <a href="">загрузить</a> ещё раз</p>
  </div>
</template>

<script>
export default {
  name: "Repositories",
  computed: {
    repoList() {
      return this.$store.state.about.repoList;
    },
    isErrorRepo() {
      return !this.$store.state.about.isErrorRepo;
    },
    isErrorUser() {
      return !this.$store.state.about.isErrorUser;
    },
    repoLink() {
      return this.$store.state.about.userData.html_url;
    },
  },
  methods: {
    classLanguage(language) {
      return "info__logo--" + language.toLowerCase();
    },
  },
};
</script>
