<template>
  <div class="col-12">
    <div class="layout-padding ">
      <q-field
        icon="account_circle"
        label="Name"
        error-label="We need a valid email"
      >
        <q-input v-model="data.user.name" />
      </q-field>
      <q-field
        icon="email"
        label="Email"
        error-label="We need a valid email"
      >
        <q-input v-model="data.user.email" />
      </q-field>
      <div>
        <q-btn @click="updateUser()" color="primary full-width update-btn">Update Account</q-btn>
      </div>
    </div>
  </div>
</template>

<script>

  import { Loading, QField, QInput, QBtn } from 'quasar'

  export default {

    components: {
      QField,
      QInput,
      QBtn
    },

    data () {
      return {
        context: '',
        data: {
          user: {
            name: this.$apiArchitect.getters['user/getUser'].name,
            email: this.$apiArchitect.getters['user/getUser'].email,
            uid: this.$apiArchitect.getters['user/getUser'].uid
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
