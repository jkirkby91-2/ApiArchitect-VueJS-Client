<template>
  <div class="hero window-height col-12 row justify-center" v-if="isAuthenticated === false">
    <section class="col-10">
      <div class="social-btn-container">
        <facebook-login></facebook-login>
        <bitbucket-login></bitbucket-login>
        <github-login></github-login>
        <google-login></google-login>
        <linkedin-login></linkedin-login>
      </div>
    </section>
  </div>
</template>

<script>

  import BitbucketLogin from './shared/BitbucketLogin.vue'
  import FacebookLogin from './shared/FacebookLogin.vue'
  import GithubLogin from './shared/GithubLogin.vue'
  import GoogleLogin from './shared/GoogleLogin.vue'
  import LinkedinLogin from './shared/LinkedinLogin.vue'
  import { Loading } from 'quasar'
  import axios from 'axios'

  export default {

    components: {
      BitbucketLogin,
      FacebookLogin,
      GithubLogin,
      GoogleLogin,
      LinkedinLogin
    },

    data () {
      return {
        context: '',
        data: {
          login: {
            email: '',
            password: ''
          }
        }
      }
    },

    beforeCreate () {

    },

    created () {
      this.$apiArchitect.watch((state) => (state.auth.isAuthenticated), (state) => {
        this.handleOnAuthSucces(state)
      })
    },

    beforeMount () {

    },

    mounted () {
      // Loading.hide()
      this.$root.$options.EventBus.$on('OAUTH_LOGIN', (payLoad) => {
        this.oAuthLogin(payLoad)
      })
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
      isAuthenticated: function () {
        console.log(this)
        return this.$apiArchitect.getters['auth/getIsAuthenticated']
      }
    },

    methods: {
      login () {
        this.$apiArchitect.dispatch('auth/login', { user: this.data.login })
      },

      oAuthLogin (payLoad) {
        Loading.show()
        this.$apiArchitect.dispatch('auth/oauthLogin', payLoad).then(function (response) {
          Loading.hide()
        }).catch(function (error) {
          console.log(error)
        })
      },

      handleOnAuthSucces ($state) {
        let _this = this

        axios.defaults.headers.common.Authorization = 'Bearer ' + localStorage.getItem('vue-authenticate.vueauth_token')
        this.$apiArchitect.dispatch('user/getUser').then(function (response) {
          _this.$router.push({name: 'Home'})
        }).catch(function (error) {
          console.log(error)
        })
      }
    }
  }

</script>

<style scoped>

  .title {
    color: white;
    text-align: center;
  }

  input {
    width: 100%;
  }

  h3.title {
    margin-top: 125px;
  }

  .social-btn-container {
    margin-top: 50px;
  }

  .box.is-light {
    color: #363636;
  }

  .btn-block + .btn-block {
    margin-top: 5px;
  }

  .btn-social {
    position: relative;
    padding-left: 44px;
    text-align: left;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  .btn-block {
    display: block;
    width: 100%;
  }

  .btn {
    display: inline-block;
    padding: 6px 12px;
    margin-bottom: 0;
    font-size: 14px;
    font-weight: normal;
    line-height: 1.42857143;
    text-align: center;
    white-space: nowrap;
    vertical-align: middle;
    -ms-touch-action: manipulation;
    touch-action: manipulation;
    cursor: pointer;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    background-image: none;
    border: 1px solid transparent;
    border-radius: 4px;
  }

  .btn-social>:first-child {
    position: absolute;
    left: 0;
    top: 0;
    bottom: 0;
    width: 32px;
    line-height: 34px;
    font-size: 1.6em;
    text-align: center;
    border-right: 1px solid rgba(0,0,0,0.2);
  }

</style>
