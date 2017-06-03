<template>
    <a @click="emitOauthLogin('github')" class="btn btn-block btn-social btn-github">
      <span class="fa fa-github"></span> Sign in with GitHub
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

.btn-github {
    color: #fff;
    background-color: #444;
    border-color: rgba(0,0,0,0.2);
}

.btn-github:hover {
    color: #fff;
    background-color: #2b2b2b;
    border-color: rgba(0,0,0,0.2);
}

</style>
