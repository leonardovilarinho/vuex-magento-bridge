'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.shuffle = exports.makeHttp = undefined;

var _axios = require('axios');

var _axios2 = _interopRequireDefault(_axios);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var makeHttp = exports.makeHttp = function makeHttp(url, timeout) {
  return _axios2.default.create({
    baseURL: url.substr(-1) !== '/' ? url : url.substr(0, -1),
    timeout: timeout,
    headers: { 'Content-Type': 'application/json' }
  });
};

var shuffle = exports.shuffle = function shuffle(arr) {
  return arr.map(function (a) {
    return [Math.random(), a];
  }).sort(function (a, b) {
    return a[0] - b[0];
  }).map(function (a) {
    return a[1];
  });
};