import Vue from 'vue'
import App from './App'
import Vuex from 'vuex'
import router from './router'
import storePlugin from './vuex/storePlugin'
import VueResource from 'vue-resource'
import { sync } from 'vuex-router-sync'
import axios from 'axios'
import EventBus from './bus/eventBus'

Vue.config.productionTip = false
Vue.config.env = process.env.NODE_ENV

Vue.use(Vuex)
Vue.use(VueResource)
Vue.use(storePlugin)

Vue.http.interceptors.push(function (request, next) {
  if (store.getters['auth/isAuthenticated'] === true) {
    axios.defaults.headers.common.Authorization = 'Bearer ' + localStorage.getItem('vue-authenticate.vueauth_token')
  }
  next()
})

sync(store, router)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  EventBus,
  template: '<App/>',
  components: { App }
})
