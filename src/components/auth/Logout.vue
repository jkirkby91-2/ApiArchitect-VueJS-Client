<template>

</template>

<script>

  export default {

    data () {
      return {
        context: '',
        data: {

        }
      }
    },

    beforeCreate () {

    },

    created () {

    },

    beforeMount () {
      if (this.$apiArchitect.getters['auth/isAuthenticated'] === true) {
        this.$apiArchitect.dispatch('auth/logout', {})
      }
      this.$router.push({ name: 'Login' })
    },

    mounted () {
    },

    beforeUpdate () {

    },

    updated () {

    },

    beforeDestroy () {

    },

    destroyed () {

    },

    computed: {

    },

    methods: {

    }

  }

</script>

<style scoped>

</style>
