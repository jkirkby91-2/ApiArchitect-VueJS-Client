<template>
    <a @click="oauthLogin('linkedin')" class="btn btn-block btn-social btn-linkedin">
      <span class="fa fa-linkedin"></span> Sign in with Linkedin
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
      oauthLogin (provider) {
        this.$store.dispatch('auth/oauthLogin', provider)
      }
    }

  }

</script>

<style @scoped>

.btn-linkedin {
    color: #fff;
    background-color: #007bb6;
    border-color: rgba(0,0,0,0.2);
}

.btn-linkedin:hover {
    color: #fff;
    background-color: #005983;
    border-color: rgba(0,0,0,0.2);
}

</style>
