import axios from 'axios'
import vueConfig from '../../../../config/'

const actions = {
  getUser: ({ commit }) => {
    return new Promise((resolve, reject) => {
      axios.get(vueConfig.API_URL + '/user').then(response => {
        commit('UPDATE_USER', response.data)
        resolve(response)
      }).catch(err => {
        console.log(err)
      }, error => {
        reject(error)
      })
    })
  },

  updateUser: ({ commit }, payload) => {
    return new Promise((resolve, reject) => {
      axios.put(vueConfig.API_URL + '/user/' + payload.uid, payload).then(response => {
        commit('UPDATE_USER', response.data)
        resolve(response)
      }).catch(err => {
        console.log(err)
      }, error => {
        reject(error)
      })
    })
  },

  setUser: (context, payload) => {
    context.commit('UPDATE_USER', payload)
  }
}

export default actions
