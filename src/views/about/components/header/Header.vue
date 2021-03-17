<template>
    <div class="header" v-if="isErrorUser">
        <img :src="userData.avatar_url" class="header__img"/>
        <div>
            <p class="header__title">{{ userData.name }}</p>
            <p class="header__subtitle">{{ userData.bio }}</p>
            <div class="header__contacts">
                <img src=""/>
                <p class="header__contacts--data">Ladu3112@gmail.com</p>
            </div>
            <div class="header__phone">
                <img src=""/>
                <p class="header__contacts--data">+7-963-731-43-20</p>
            </div>
        </div>
        <div class="header__link">
            <a :href="userData.html_url" class="header__link--github"></a>
            <a href="https://linkedin.com" class="header__link--linkedin"></a>
            <a href="https://www.facebook.com" class="header__link--facebook"></a>
            <a href="https://vk.com/id_lada_ber" class="header__link--vk"></a>
        </div>
    </div>

    <div class="error" v-else>
        <p>Что-то пошло не так...</p>
        <p>Попробуйте <a href=''>загрузить</a> ещё раз</p>
    </div>

</template>

<script>
export default {
  name: 'Header',
  computed: {
      userData() {
        return this.$store.state.about.userData
      },
      isErrorUser() {
        return !this.$store.state.about.isErrorUser
      }
  },
  mounted() {
    this.$store.dispatch('ABOUT_FETCH_USER')
  },

}
</script>


<style lang="sass" scoped>
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&display=swap')

.header
    display: grid
    grid-template-columns: max-content auto
    grid-template-rows: repeat(3, max-content) auto
    grid-column-gap: 40px
    box-sizing: border-box
    padding: 10px 12px
    margin-bottom: 14px
    border-radius: 9px
    box-shadow: 0px 3px 1px -2px rgba(0,0,0,0.2), 0px 2px 2px 0px rgba(0,0,0,0.14), 0px 1px 5px 0px rgba(0,0,0,0.12)

    &__img
        grid-row: 1 / 5
        width: 170px
        height: 170px
        box-shadow: 0px 3px 1px -2px rgba(0,0,0,0.2), 0px 2px 2px 0px rgba(0,0,0,0.14), 0px 1px 5px 0px rgba(0,0,0,0.12)
        border-radius: 10px

    &__title
        font: 700 28px Roboto, arial, helvetica, sans-serif
        margin: 0 0 12px

    &__subtitle 
        font: 400 12px/14px Roboto, arial, helvetica, sans-serif
        color: #999999
        margin: 0 0 14px


    &__contacts
        display: flex
        margin-bottom: 9px

        &--data
            font: 400 12px/14px Roboto, arial, helvetica, sans-serif
            color: #999999
            margin: 0 0 0 4px   

    
    &__phone
        display: flex
        margin-bottom: 45px


    &__link
        display: flex
        justify-content: flex-end
        align-items: flex-end

        &--github,
        &--facebook,
        &--linkedin,
        &--vk
            display: block
            width: 24px
            height: 24px
            margin-right: 8px

            
        &--github
            background: url(../../../../../public/img/github.svg)

        &--facebook
           background: url(../../../../../public/img/facebook.svg)

        &--linkedin
            background: url(../../../../../public/img/linkedin.svg)

        &--vk
            background: url(../../../../../public/img/vk.svg)


.error
    font: 500 14px/16px Roboto, arial, helvetica, sans-serif
    text-align: center

</style>