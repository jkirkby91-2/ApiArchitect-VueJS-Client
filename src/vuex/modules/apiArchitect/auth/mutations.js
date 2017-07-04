const mutations = {
  setIsAuthenticated (state, payload) {
    state.isAuthenticated = payload.isAuthenticated
  },

  setIsNotAuthenticated (state, payload) {
    state.isAuthenticated = payload.isAuthenticated
  },

  setRoles (state, payload) {
    state.roles.push(payload)
  }
}

export default mutations
