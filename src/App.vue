<template>
  <div class="wrapper">
    <div class='nav'>
      <router-link to='/todo' class="link" active-class="link--active">Todo</router-link>
      <router-link to='/' class="link" active-class="link--active">About</router-link>
    </div>
    <router-view></router-view>
  </div>
</template>
