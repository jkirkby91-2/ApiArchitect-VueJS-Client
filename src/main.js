// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VueResource from 'vue-resource'
import VueAuthenticate from 'vue-authenticate'
import App from './App'
import router from './router'

Vue.config.productionTip = false

Vue.use(VueResource)
Vue.use(VueAuthenticate, {
  baseUrl: 'https://api.agentfree.dev', // Your API domain

  providers: {
    facebook: {
      url: '/auth/oauth/facebook/callback',
      clientId: '1854795878106508',
      redirectUri: 'http://localhost:8080/auth/oauth/facebook/callback'
    },
    google: {
      url: '/auth/oauth/google/callback',
      clientId: '95652841389-sdh9gaqhn6f8s6cb60h68c83e3jn6oa5.apps.googleusercontent.com',
      redirectUri: 'http://localhost:8080/auth/oauth/google/callback'
    },
    linkedin: {
      url: '/auth/oauth/linkedin/callback',
      clientId: '81kolqt4g9j4sf',
      oauthType: '2.0',
      authorizationEndpoint: 'https://www.linkedin.com/oauth/v2/authorization',
      redirectUri: 'http://localhost:8080/auth/oauth/linkedin/callback'
    },
    github: {
      url: '/auth/oauth/github/callback',
      clientId: 'ef7e88a5fe38ea3d83be',
      redirectUri: 'http://localhost:8080/auth/oauth/github/callback'
    },
    bitbucket: {
      url: '/auth/oauth/bitbucket/callback',
      clientId: 'S4QHYEuLL78G4fHRWq',
      redirectUri: 'http://localhost:8080/auth/oauth/bitbucket/callback'
    }
  }
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
