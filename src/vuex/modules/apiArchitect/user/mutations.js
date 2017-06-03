const mutations = {
  UPDATE_USER: (state, value) => {
    console.log(value.data)
    if (value && typeof value === 'object') {
      let keys = Object.keys(value.data)

      for (let index = keys.length - 1; index > -1; index--) {
        let key = keys[index]
        state[key] = value.data[key]
      }
    }
  }
}

export default mutations
