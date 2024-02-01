<template>
  <div class="container">
    <NavBarVue />
    <router-view></router-view>
  </div>
</template>

<script>
import NavBarVue from './components/NavBar.vue'

export default {
  name: 'App',
  components: {
    NavBarVue,
  },
  data: function () {
    return {
      counter: 1,
    }
  },
}
</script>

<style>
</style>
