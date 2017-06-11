const mutations = {
  setIsAuthenticated (state, payload) {
    state.isAuthenticated = payload.isAuthenticated
  },

  setIsNotAuthenticated (state, payload) {
    state.isAuthenticated = false
  },

  setRoles (state, payload) {
    state.roles.push(payload)
  }
}

export default mutations
