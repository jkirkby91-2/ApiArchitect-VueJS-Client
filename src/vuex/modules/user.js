import {
  USER_OBJECT,
  IS_AUTHENTICATED
} from '../mutation-types'

const mutations = {
  [USER_OBJECT] (state, data) {
    if (data && typeof data === 'object') {
      state.user = data
    }
  },
  [IS_AUTHENTICATED] (state, data) {
    if (data && typeof data === 'object') {
      state.isAuthenticated = data
    }
  }
}

const state = {
  user: {
    uid: '',
    userName: '',
    name: '',
    email: '',
    avatar: '',
    profile: {
      contactNumber: ''
    },
    roles: []
  },
  isAuthenticated: false
}

export default {
  state,
  mutations
}
