<template>
    <a @click="emitOauthLogin('google')"  class="btn btn-block btn-social btn-google">
      <span class="fa fa-google"></span> Sign in with Google
    </a>
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

    methods: {

      emitOauthLogin (provider) {
        this.$root.$options.EventBus.$emit('OAUTH_LOGIN', provider)
      },

      oauthLogin (provider) {
        this.$store.dispatch('auth/oauthLogin', provider).catch(function (error) {
          console.log(error)
        })
      }
    }

  }

</script>

<style @scoped>

.btn-google {
    color: #fff;
    background-color: #dd4b39;
    border-color: rgba(0,0,0,0.2);
}

.btn-google:hover {
    color: #fff;
    background-color: #c23321;
    border-color: rgba(0,0,0,0.2);
}

</style>
