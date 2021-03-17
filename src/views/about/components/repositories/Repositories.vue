<template>
    <div class="section">
        <p class="section__title">Репозитории на github.com</p>
        <div class="repositories">
            <a href="" class="repositories__name">
                repo.name
                <div class="repositories__info">
                    <span class=""></span>
                    <span class="info__star"></span>
                    <span class="info__fork"></span>
                    <span></span>
                </div>
            </a>
        </div>
    </div>
</template>

<script>


export default {
  name: 'Repositories',
//   mounted() {
//     this.$store.dispatch('ABOUT_FETCH_REPO')
//   },

}
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
    overflow: auto
    height: 300px
    padding: 0 5px 0 0


    &__info
        display: flex
        font: 400 12px/14px Roboto, arial, helvetica, sans-serif
        color: #999999
        margin-top: 4px


    &__name
        display: block
        font: 500 14px/16px Roboto, arial, helvetica, sans-serif
        text-decoration: none
        color: black
        padding: 6px 12px
        border: solid 1px #ccc
        border-radius: 10px

.language
    position: relative
    padding-left: 22px
    margin: 0 16px 0 0


.info__logo

    &--html::before
        background: #e00000

    &--css::before
        background: #0094ff

    &--js::before
        background: #ffc700

    &--html,
    &--css,
    &--js

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
            //background: url(img/star.svg)
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
            //background: url(img/fork.svg)
            height: 15px
            width: 11px
            position: absolute
            left: 0
            bottom: 0


</style>