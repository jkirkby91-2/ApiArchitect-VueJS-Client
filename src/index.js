import Vue from 'vue'
import Vuex from 'vuex'
import routes from './routes'
import store from './vuex/store'
import EventBus from './bus/eventBus'
import config from './config'
import ping from './vuex/modules/apiArchitect/ping/store'
import auth from './vuex/modules/apiArchitect/auth/store'
import user from './vuex/modules/apiArchitect/user/store'

Vue.use(Vuex)
Vue.use(EventBus)

const store = new Vuex.Store({
  modules: {
    ping,
    user,
    auth
  },
  strict: true
})

const ApiArchitect {
  
  install(Vue, options) {
    Vue.prototype.$apiArchitect = store,
    Vue.prototype.$apiArchitect.$config = config
    Vue.prototype.$apiArchitect.$routes = routes

  }
}
