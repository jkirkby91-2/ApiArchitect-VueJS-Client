import Vue from 'vue'
import config from '../config/'

Vue.use(Vuex)

import ping from './modules/apiArchitect/ping/store'
import auth from './modules/apiArchitect/auth/store'
import user from './modules/apiArchitect/user/store'

const store = new Vuex.Store({
  modules: {
    ping,
    user,
    auth
  },
  strict: true
})

export default store
