<template>
  <div class="section" v-if="isErrorRepo && isErrorUser">
    <p class="section__title">Репозитории на github.com</p>
    <div class="repositories" v-if="repoList.length > 0">
      <div class="repositories__item" v-for="repo in repoList" :key="repo.id">
        <a class="repositories__name" :htef="html_url">{{ repo.name }}</a>
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
  },
  methods: {
    classLanguage(language) {
      return "info__logo--" + language.toLowerCase();
    },
  },
};
</script>

<style lang="sass" scoped>
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&display=swap')

.section
    &__title
        font: 700 16px Roboto, arial, helvetica, sans-serif

.reposNone
    display: flex
    flex-direction: column
    align-items: center

.reposNoneAdd
    display: flex


.text
    margin: 25px 0 8px


.text__help
    margin: 0


.repositories
    list-style-type: none
    height: 200px
    overflow: auto
    padding: 0 5px 0 0

    &__name

        &:hover
            opacity: .8

    &__info
        display: flex
        font: 400 12px/14px Roboto, arial, helvetica, sans-serif
        color: #999999
        margin-top: 6px
        position: relative
        padding-left: 25px


    &__item
        display: block
        font: 500 14px/16px Roboto, arial, helvetica, sans-serif
        text-decoration: none
        color: black
        padding: 6px 12px
        border: solid 1px #ccc
        border-radius: 10px
        margin-bottom: 10px
        cursor: pointer

.language
    position: relative
    padding-left: 22px
    margin: 0 16px 0 0


.info__logo
    margin: 0 16px 0 0

    &--html::before
        background: #e00000

    &--css::before
        background: #0094ff

    &--js::before
        background: #ffc700

    &--vue::before
        background: #2c3e50

    &--html,
    &--css,
    &--js,
    &--vue

        &::before
            content: ''
            border-radius: 50%
            height: 16px
            width: 16px
            position: absolute
            left: 0
            bottom: 0


.info

    &__star
        position: relative
        padding-left: 20px
        margin: 0 16px 0 0

        &::before
            content: ''
            background: url(/img/star.svg)
            height: 16px
            width: 16px
            position: absolute
            left: 0
            bottom: 0

    &__fork
        position: relative
        padding-left: 17px
        margin: 0 16px 0 0


        &::before
            content: ''
            background: url(/img/fork.svg)
            height: 15px
            width: 11px
            position: absolute
            left: 0
            bottom: 0

.error
    font: 500 14px/16px Roboto, arial, helvetica, sans-serif
    text-align: center

.preloader
    display: flex
    justify-content: center
    align-items: center
</style>
