import mutations from './mutations'
import actions from './actions'

const state = {
  'version': null
}

const getters = {
  version: state => {
    return state.version
  }
}

const module = {
  namespaced: true,
  mutations,
  actions,
  state,
  getters
}

export default module
