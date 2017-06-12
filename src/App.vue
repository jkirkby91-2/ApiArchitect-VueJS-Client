<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
// eslint-disable-next-line

  export default {
    name: 'app',
    mounted () {
      console.log(this)
      this.$apiArchitect.dispatch('ping/ping')
    }
  }
</script>

<style lang="scss">
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #2c3e50;
  }
</style>
