import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

import ping from './modules/apiArchitect/ping/store'
import auth from './modules/apiArchitect/auth/store'

const store = new Vuex.Store({
  modules: {
    ping,
    auth
  },
  strict: true
})

export default store
