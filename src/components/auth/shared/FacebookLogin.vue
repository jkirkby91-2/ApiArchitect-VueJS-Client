<template>
    <a @click="authenticate('facebook')" class="btn btn-block btn-social btn-facebook">
      <span class="fa fa-facebook"></span> Sign in with Facebook
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

    }

  }

</script>

<style @scoped>

.btn-facebook {
    color: #fff;
    background-color: #3b5998;
    border-color: rgba(0,0,0,0.2);
}

.btn-facebook:hover {
    color: #fff;
    background-color: #2d4373;
    border-color: rgba(0,0,0,0.2);
}

</style>
