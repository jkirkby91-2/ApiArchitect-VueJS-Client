import Vue from 'vue'
import mutations from './mutations'
import { VueAuthenticate } from 'vue-authenticate'
// import axios from 'axios'
import config from '../config'
import VueResource from 'vue-resource'

Vue.use(VueResource)

const apiArchitectAuth = new VueAuthenticate(Vue.http, {
  baseUrl: config.API_URL,
  providers: {
    facebook: {
      url: config.FACEBOOK_URL,
      clientId: config.FACDBOOK_CLIENT_ID,
      redirectUri: config.FACEBOOK_REDIRECT_URI
    },
    google: {
      url: config.GOOGLE_URL,
      clientId: config.GOOGLE_CLIENT_ID,
      redirectUri: config.GOOGLE_REDIRECT_URI
    },
    linkedin: {
      url: config.LINKEDIN_URL,
      clientId: config.LINKEDIN_CLIENT_ID,
      redirectUri: config.LINKEDIN_REDIRECT_URI,
      oauthType: '2.0',
      authorizationEndpoint: 'https://www.linkedin.com/oauth/v2/authorization'
    },
    github: {
      url: config.GITHUB_URL,
      clientId: config.GITHUB_CLIENT_ID,
      redirectUri: config.GITHUB_REDIRECT_URI
    },
    bitbucket: {
      url: config.BITBUCKET_URL,
      clientId: config.BITBUCKET_CLIENT_ID,
      redirectUri: config.BITBUCKET_REDIRECT_URI
    }
  }
})

const state = {
  'isAuthenticated': false
}

const getters = {
  isAuthenticated: state => {
    return apiArchitectAuth.isAuthenticated()
  }
}

const actions = {
  login (context, payload) {
    return new Promise((resolve, reject) => {
      apiArchitectAuth.login(payload.user, payload.requestOptions).then((response) => {
        context.commit('isAuthenticated', {
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
        context.commit('isAuthenticated', {
          isAuthenticated: apiArchitectAuth.isAuthenticated()
        })
        resolve(response)
      }, error => {
        reject(error)
      })
    })
  },

  logout (context, payload) {
    apiArchitectAuth.logout()
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

const module = {
  namespaced: true,
  mutations,
  actions,
  state,
  getters
}

export default module
