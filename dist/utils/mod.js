'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _getters2 = require('../getters');

var _getters3 = _interopRequireDefault(_getters2);

var _actions2 = require('../actions');

var _actions3 = _interopRequireDefault(_actions2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  getters: function getters(name) {
    return _getters3.default[name] || [];
  },
  actions: function actions(name) {
    return _actions3.default[name] || [];
  }
};