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
      if (this.$store.getters['auth/isAuthenticated'] === true) {
        this.$store.dispatch('auth/logout')
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
      isAuthenticated: function () {
        return this.$store.getters['auth/isAuthenticated']
      }
    },

    methods: {

    }

  }

</script>

<style @scoped>

</style>
