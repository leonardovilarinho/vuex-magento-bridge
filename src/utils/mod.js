import _getters from '../getters'
import _actions from '../actions'

export default {
  getters: (name) => _getters[name] || [],
  actions: (name) => _actions[name] || []
}
