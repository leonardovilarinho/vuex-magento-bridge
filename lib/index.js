'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.mixin = exports.category = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _vuex = require('vuex');

var _mod = require('./utils/mod');

var _mod2 = _interopRequireDefault(_mod);

var _category2 = require('./category');

var _category3 = _interopRequireDefault(_category2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var category = exports.category = _category3.default;

var mixin = exports.mixin = function mixin(moduleName) {
  var _createNamespacedHelp = (0, _vuex.createNamespacedHelpers)(moduleName),
      mapActions = _createNamespacedHelp.mapActions,
      mapGetters = _createNamespacedHelp.mapGetters;

  var name = moduleName.toLowerCase();

  return {
    computed: _extends({}, mapGetters(_mod2.default.getters(name))),
    methods: _extends({}, mapActions(_mod2.default.actions(name)))
  };
};