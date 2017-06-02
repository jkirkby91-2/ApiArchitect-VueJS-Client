import axios from 'axios'
import config from '../config'

const actions = {
  ping: ({ commit }) => {
    axios.get(config.API_URL + '/ping').then(response => {
      commit('UPDATE_VERSION', response.data.version)
    }).catch(err => {
      console.log(err)
    })
  }
}

export default actions
