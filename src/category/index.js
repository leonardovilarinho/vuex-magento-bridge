import state from './state'
import getters from './getters'
import actions from './actions'
import mutations from './mutations'

export default (url, key, timeout = 3000) => ({
  namespaced: true,
  state,
  getters,
  mutations,
  actions: actions(url, key, timeout)
})
