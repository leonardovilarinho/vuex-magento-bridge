'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.mixin = exports.category = exports.product = undefined;

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _vuex = require('vuex');

var _mod = require('./utils/mod');

var _mod2 = _interopRequireDefault(_mod);

var _category2 = require('./category');

var _category3 = _interopRequireDefault(_category2);

var _product2 = require('./product');

var _product3 = _interopRequireDefault(_product2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var product = exports.product = _product3.default;
var category = exports.category = _category3.default;

var mixin = exports.mixin = function mixin(moduleName) {
  var _createNamespacedHelp = (0, _vuex.createNamespacedHelpers)(moduleName),
      mapActions = _createNamespacedHelp.mapActions,
      mapGetters = _createNamespacedHelp.mapGetters;

  var name = moduleName.toLowerCase();

  return {
    computed: (0, _extends3.default)({}, mapGetters(_mod2.default.getters(name))),
    methods: (0, _extends3.default)({}, mapActions(_mod2.default.actions(name)))
  };
};