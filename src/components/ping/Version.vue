<template>
  <div class="col-12">
    <div class="layout-padding ">
      <div class="row justify-center">
        <div class="12">
          <p class="caption">App Version {{appVersion}}</p>
        </div>
      </div>
      <div class="row justify-center">
        <div class="12">
          <p class="caption">Incubated By The <a href="https://blacksands.network">BlackSands Network</a></p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

  export default {

    data () {
      return {
        context: ''
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

    },
    computed: {
      appVersion: function () {
        return this.$store.getters['ping/version']
      }
    }
  }

</script>

<style @scoped>

</style>
