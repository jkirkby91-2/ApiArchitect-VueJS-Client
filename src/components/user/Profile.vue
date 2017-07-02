<template>
  <div>
    <avatar :size="200" :src="$store.getters['user/getUser'].avatar" :username="$store.getters['user/getUser'].name"></avatar>
    <div><h3>{{$store.getters['user/getUser'].name}}</h3></div>
    <div><h6>Email: {{$store.getters['user/getUser'].email}}</h6></div>
  </div>
</template>

<script>

  import Avatar from 'vue-avatar/dist/Avatar'

  export default {

    components: {
      Avatar
    },

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

    computed: {

    },

    methods: {

    }

  }

</script>

<style @scoped>

</style>
