<template>
  <div class="account-login">
    <section class="hero is-fullheight">
      <div class="hero-body">
        <div class="container">
          <div class="columns">
            <div class="column is-4 is-offset-4">
              <h1 class="title">Login</h1>            
              <form class="">
                <p class="control has-icon">
                  <input v-model="data.login.email" class="input" type="text" placeholder="Email">
                  <span class="icon is-small">
                    <i class="fa fa-envelope"></i>
                  </span>
                </p>
                <p class="control has-addons has-icon">
                  <input v-model="data.login.password" class="input is-expanded" type="password" placeholder="Password">
                  <span class="icon is-small">
                    <i class="fa fa-lock"></i>
                  </span>
                  <a class="button">
                    <router-link :to="{ name: 'PasswordReset' }">
                      Forgot?
                    </router-link>
                  </a>
                </p>
                <hr />
                <a @click.prevent="login()" class="btn btn-block btn-social button is-primary">
                  <span class="fa fa-sign-in"></span> Sign In
                </a>                 
                <bitbucket-login></bitbucket-login>
                <facebook-login></facebook-login>
                <github-login></github-login>
                <google-login></google-login>
                <linkedin-login></linkedin-login>
              </form>
              <div class="has-text-centered">
                <router-link :to="{ name: 'Register' }" class="is-inverted is-fullwidth">
                  Register an account
                </router-link>
              </div>
            </div>
          </div>
        </div>
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
      let _this = this
      this.$store.watch((state) => (state.auth.isAuthenticated), function (state) {
        _this.handleOnAuthSucces(state)
      })
    },

    beforeMount () {

    },

    mounted () {
      // Loading.hide()
      let _this = this
      this.$root.$options.EventBus.$on('OAUTH_LOGIN', function (payLoad) {
        _this.oAuthLogin(payLoad)
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
        return this.$store.getters['auth/getIsAuthenticated']
      }
    },

    methods: {
      login () {
        this.$store.dispatch('auth/login', { user: this.data.login })
      },

      oAuthLogin (payLoad) {
        Loading.show()
        this.$store.dispatch('auth/oauthLogin', payLoad).then(function (response) {
          Loading.hide()
        }).catch(function (error) {
          console.log(error)
        })
      },

      handleOnAuthSucces ($state) {
        let _this = this

        axios.defaults.headers.common.Authorization = 'Bearer ' + localStorage.getItem('vue-authenticate.vueauth_token')
        this.$store.dispatch('user/getUser').then(function (response) {
          _this.$router.push({name: 'Home'})
        }).catch(function (error) {
          console.log(error)
        })
      }
    }
  }

</script>

<style scoped>
  input {
    width: 100%;
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
