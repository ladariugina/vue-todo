<template>
  <div>
    <div class='nav'>
      <router-link to='/todo' class="link" active-class="link--active">Todo</router-link>
      <router-link to='/about' class="link" active-class="link--active">About</router-link>
    </div>
    <router-view></router-view>
  </div>
</template>


<style lang="sass" scoped>
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&display=swap')

.nav
  display: flex
  justify-content: center

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
    background: #f50057
    color: white
</style>