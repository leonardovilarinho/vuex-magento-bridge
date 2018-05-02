'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.categorymodule = undefined;

var _state = require('./state');

var _state2 = _interopRequireDefault(_state);

var _getters = require('./getters');

var _getters2 = _interopRequireDefault(_getters);

var _actions = require('./actions');

var _actions2 = _interopRequireDefault(_actions);

var _mutations = require('./mutations');

var _mutations2 = _interopRequireDefault(_mutations);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Generate new vuex module for bridge
 * @param {string} url link from magento bridge
 * @param {string} key bridge magento api key
 * @param {number} timeout await milis
 * @return module with state, getters, actions and mutations
 */
var categorymodule = exports.categorymodule = function categorymodule(url, key) {
  var timeout = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 3000;
  return {
    namespaced: true,
    state: _state2.default,
    getters: _getters2.default,
    mutations: _mutations2.default,
    actions: (0, _actions2.default)(url, key, timeout)
  };
};