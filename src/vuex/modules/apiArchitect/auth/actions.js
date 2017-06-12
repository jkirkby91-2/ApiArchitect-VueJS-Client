import Vue from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
import vueConfig from '../../../../config'
import { VueAuthenticate } from 'vue-authenticate'

Vue.use(VueAxios, axios)

const apiArchitectAuth = new VueAuthenticate(Vue.axios, {
  baseUrl: vueConfig.API_URL,
  bindRequestInterceptor: function () {
    this.$http.interceptors.request.use((config) => {
      if (this.isAuthenticated()) {
        config.headers['Authorization'] = [
          this.options.tokenType, this.getToken()
        ].join(' ')
      } else {
        delete config.headers['Authorization']
      }
      return config
    })
  },

  bindResponseInterceptor: function () {
    this.$http.interceptors.response.use((response) => {
      apiArchitectAuth.setToken(response.data)
      return response
    })
  },
  providers: {
    facebook: {
      display: 'popup',
      url: vueConfig.FACEBOOK_URL,
      clientId: vueConfig.FACDBOOK_CLIENT_ID,
      redirectUri: vueConfig.FACEBOOK_REDIRECT_URI
    },
    google: {
      display: 'popup',
      url: vueConfig.GOOGLE_URL,
      clientId: vueConfig.GOOGLE_CLIENT_ID,
      redirectUri: vueConfig.GOOGLE_REDIRECT_URI
    },
    linkedin: {
      display: 'popup',
      url: vueConfig.LINKEDIN_URL,
      clientId: vueConfig.LINKEDIN_CLIENT_ID,
      redirectUri: vueConfig.LINKEDIN_REDIRECT_URI,
      oauthType: '2.0',
      authorizationEndpoint: 'https://www.linkedin.com/oauth/v2/authorization'
    },
    github: {
      display: 'popup',
      url: vueConfig.GITHUB_URL,
      clientId: vueConfig.GITHUB_CLIENT_ID,
      redirectUri: vueConfig.GITHUB_REDIRECT_URI
    },
    bitbucket: {
      display: 'popup',
      url: vueConfig.BITBUCKET_URL,
      clientId: vueConfig.BITBUCKET_CLIENT_ID,
      redirectUri: vueConfig.BITBUCKET_REDIRECT_URI
    }
  }
})

const actions = {
  login (context, payload) {
    return new Promise((resolve, reject) => {
      apiArchitectAuth.login(payload.user, payload.requestOptions).then((response) => {
        context.commit('setIsAuthenticated', {
          isAuthenticated: apiArchitectAuth.isAuthenticated()
        })
        resolve(response)
      }, error => {
        reject(error)
      })
    })
  },

  oauthLogin (context, payload) {
    return new Promise((resolve, reject) => {
      apiArchitectAuth.authenticate(payload).then(response => {
        console.log(response)
        apiArchitectAuth.setToken(response)
        context.commit('setIsAuthenticated', {
          isAuthenticated: apiArchitectAuth.isAuthenticated()
        })
        resolve(response)
      }, error => {
        reject(error)
      })
    })
  },

  logout (context, payload) {
    return new Promise((resolve, reject) => {
      apiArchitectAuth.logout().then((response) => {
        context.commit('setIsAuthenticated', {
          isAuthenticated: false
        })
        resolve(response)
      }, error => {
        reject(error)
      })
    })
  },

  register (context, payload) {
    return new Promise((resolve, reject) => {
      apiArchitectAuth.register(payload.register, payload.requestOptions).then(response => {
        if (response.body.meta.confirm === false) {
          context.dispatch('login', {user: {email: payload.register.email, password: payload.register.password}})
        }
        resolve(response)
      }, error => {
        reject(error)
      })
    })
  }
}

export default actions
