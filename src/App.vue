<template>
  <div class="wrapper">
    <div class='nav'>
      <router-link to='/todo' class="link" active-class="link--active">Todo</router-link>
      <router-link to='/' class="link" active-class="link--active">About</router-link>
    </div>
    <router-view></router-view>
  </div>
</template>


<style lang="sass" scoped>
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&display=swap')

.nav
  display: flex
  justify-content: center
  margin-top: 25px

.link
  display: flex
  justify-content: center
  align-items: center
  font: 700 16px/18px Roboto, arial, helvetica, sans-serif
  text-decoration: none
  color: black
  width: 100px
  height: 44px
  margin: 0 30px 22px 0
  border-radius: 37px
  transition: 0.3s

  &:hover
    opacity: 0.7

  &--active
    background: #356EFF
    color: white

.wrapper
  display: flex
  flex-direction: column
  min-height: 100vh
  background: #F1EFEF
</style>