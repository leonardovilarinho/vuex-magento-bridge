"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var SET_ALL = exports.SET_ALL = function SET_ALL(state, list) {
  return state.all = list;
};

var SET_ACTUAL = exports.SET_ACTUAL = function SET_ACTUAL(state, list) {
  return state.actual = list;
};