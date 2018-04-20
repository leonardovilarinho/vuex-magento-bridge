'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _state = require('./state');

var _state2 = _interopRequireDefault(_state);

var _getters = require('./getters');

var _getters2 = _interopRequireDefault(_getters);

var _actions = require('./actions');

var _actions2 = _interopRequireDefault(_actions);

var _mutations = require('./mutations');

var _mutations2 = _interopRequireDefault(_mutations);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (url, key) {
  var timeout = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 3000;
  return {
    state: _state2.default,
    getters: _getters2.default,
    mutations: _mutations2.default,
    actions: (0, _actions2.default)(url, key, timeout)
  };
};