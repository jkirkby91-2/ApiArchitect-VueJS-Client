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
      redirectUri: 'http://localhost:8080/auth/oauth/facebook/callback' // Your client app URL
    },
    google: {
      url: '/auth/oauth/facebook/callback',
      clientId: '1854795878106508',
      redirectUri: 'http://localhost:8080/auth/oauth/google/callback' // Your client app URL      
    },
    linkedin: {
      url: '/auth/oauth/linkedin/callback',
      clientId: '1854795878106508',
      redirectUri: 'http://localhost:8080/auth/oauth/linkedin/callback' // Your client app URL      
    }, 
    github: {
      url: '/auth/oauth/github/callback',
      clientId: '1854795878106508',
      redirectUri: 'http://localhost:8080/auth/oauth/github/callback' // Your client app URL      
    },  
    bitbucket: {
      url: '/auth/oauth/bitbucket/callback',
      clientId: '1854795878106508',
      redirectUri: 'http://localhost:8080/auth/oauth/bitbucket/callback' // Your client app URL      
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
