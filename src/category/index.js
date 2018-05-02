import state from './state'
import getters from './getters'
import actions from './actions'
import mutations from './mutations'

/**
 * Generate new vuex module for bridge
 * @param {string} url link from magento bridge
 * @param {string} key bridge magento api key
 * @param {number} timeout await milis
 * @return module with state, getters, actions and mutations
 */
export const categorymodule = (url, key, timeout = 3000) => ({
  namespaced: true,
  state,
  getters,
  mutations,
  actions: actions(url, key, timeout)
})
