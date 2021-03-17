<template>
    <div class="wrap">
        <Header />
        <Repositories />
    </div>
</template>

<script>
import Header from './header/Header'
import Repositories from './repositories/Repositories'

export default {
  name: 'About',
    components: {
        Header,
        Repositories
  }
}
</script>

<style lang="sass" scoped>
.wrap
    margin: auto
    max-width: 500px
    padding: 20px
    border-radius: 9px
    box-shadow: 0px 3px 1px -2px rgba(0,0,0,0.2), 0px 2px 2px 0px rgba(0,0,0,0.14), 0px 1px 5px 0px rgba(0,0,0,0.12)
</style>