import Vue from 'vue'
import router from './router'
import store from './vuex/store'
import EventBus from './bus/eventBus'
import config from './config'

Vue.use(router)
Vue.use(EventBus)

ApiArchitect.install = function (Vue, options) {

  Vue.prototype.$apiArchitect = store,
  Vue.prototype.$apiArchitect.$config = config

}