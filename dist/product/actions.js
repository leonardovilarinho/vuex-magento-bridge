'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _utils = require('../utils');

var _actions = require('../utils/actions');

exports.default = function (url, key, timeout) {
  var http = (0, _utils.makeHttp)(url, timeout);

  return {
    searchAll: (0, _actions.searchAll)(http, 'products', key),
    searchOne: (0, _actions.searchOne)(http, 'product', key),
    setOne: function setOne(_ref, params) {
      var commit = _ref.commit;

      if (!params.hasOwnProperty('mutation')) {
        params.mutation = 'SET_ACTUAL';
      }
      commit(mutation, params.value);
    }
  };
};