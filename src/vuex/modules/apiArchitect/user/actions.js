import axios from 'axios'
import config from '../config'

const actions = {
  getUser: ({ commit }) => {
    return new Promise((resolve, reject) => {
      axios.get(config.API_URL + '/user').then(response => {
        commit('UPDATE_USER', response.data)
        resolve(response)
      }).catch(err => {
        console.log(err)
      }, error => {
        reject(error)
      })
    })
  }
}

export default actions
