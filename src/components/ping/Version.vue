<template>
  <div class="col-12">
    <div class="layout-padding ">
      <div class="row">
        <q-list class="col-12">
          <q-list-header class="justify-center">Distance {{ distance }} Miles</q-list-header>
          <q-item>
            <q-item-main>
              <q-slider v-model="distance" :min="1" :max="30000" label />
            </q-item-main>
          </q-item>
        </q-list>
      </div>
      <div class="row justify-center">
        <div class="12">
          <p class="caption">App Version {{appVersion}}</p>
        </div>
      </div>
      <div class="row justify-center">
        <div class="12">
          <p class="caption">Incubated By The <a href="https://blacsands.network">BlackSands Network</a></p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

  import { QList, QItemSide, QItem, QItemMain, QChip, QRange, QSlider, QListHeader, QItemSeparator } from 'quasar'

  export default {

    components: {
      QList,
      QItemSide,
      QItem,
      QItemMain,
      QChip,
      QRange,
      QSlider,
      QListHeader,
      QItemSeparator
    },

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
