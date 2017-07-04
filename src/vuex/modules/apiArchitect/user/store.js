import actions from './actions'
import mutations from './mutations'
import initialState from './initialState'
import getters from './getters'

const state = initialState

const userModule = {
  namespaced: true,
  initialState,
  state,
  mutations,
  getters,
  actions
}

export default userModule
