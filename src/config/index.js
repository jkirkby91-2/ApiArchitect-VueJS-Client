import Vue from 'vue'
import configs from './config'
import vueConfig from 'vue-config'

Vue.use(vueConfig, configs)

const globalConfigStore = new Vue()

export default globalConfigStore.$config
