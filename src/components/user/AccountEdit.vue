<template>
  <div class="layout-padding">
    <div id="view-flexbox">
      <h4> Account Edit </h4>
      <input placeholder="Name" :value="this.data.user.name">
      <input placeholder="Email" :value="this.data.user.email">
    </div>
    <div>
      <button @click="updateUser()" class="primary full-width update-btn">update</button>
    </div>
  </div>
</template>

<script>

  import { Loading } from 'quasar'

  export default {

    data () {
      return {
        context: '',
        data: {
          user: {
            name: this.$store.state.user.name,
            email: this.$store.getters['user/getUser'].email
          }
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
      updateUser: function () {
        console.log(this.data.user)
        Loading.show()
        this.$store.dispatch('user/updateUser', this.data.user).then((success) => {
          Loading.hide()
        }).catch(() => {
          alert('something went wrong')
        })
      }
    },

    computed: {

    }

  }

</script>

<style scoped>

.update-btn {
  margin-top: 25px;
}

</style>
