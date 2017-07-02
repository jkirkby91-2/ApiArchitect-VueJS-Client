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
        context: '',
        distance: this.$store.state.dnsettings.distance
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

    watch: {
      distance: function (val) {
        this.$store.dispatch('dnsettings/setDistance', this.distance)
      }
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
