'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _utils = require('../utils');

var _actions = require('../utils/actions');

exports.default = function (url, key, timeout) {
  var http = (0, _utils.makeHttp)(url, timeout);

  return {
    searchAll: (0, _actions.searchAll)(http, 'categories', key)
  };
};