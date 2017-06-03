import mutations from './mutations'
import actions from './actions'

const state = {
  uid: '',
  username: '',
  name: '',
  email: '',
  avatar: '',
  roles: []
}

const getters = {
  getUser: state => {
    return state.user
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
