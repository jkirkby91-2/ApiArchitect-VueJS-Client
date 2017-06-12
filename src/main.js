import Vue from 'vue'
import Vuex from 'vuex'
import App from './App'
import router from './router'
import store from './vuex/store'
import EventBus from './bus/eventBus'

Vue.config.productionTip = false
Vue.config.env = process.env.NODE_ENV

Vue.use(Vuex)
Vue.use(store)

// sync(storePlugin, router)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  EventBus,
  template: '<App/>',
  components: { App }
})
