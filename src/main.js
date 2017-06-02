import Vue from 'vue'
import App from './App'
import Vuex from 'vuex'
import VueBlu from 'vue-blu'
import router from './router'
import store from './vuex/store'
import VueResource from 'vue-resource'
import { sync } from 'vuex-router-sync'
import 'vue-blu/dist/css/vue-blu.min.css'
// import store from './store/auth.js'

console.log(store)

Vue.config.productionTip = false
Vue.config.env = process.env.NODE_ENV

Vue.use(Vuex)
Vue.use(VueBlu)
Vue.use(VueResource)

sync(store, router)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
