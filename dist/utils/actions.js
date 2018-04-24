'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.searchAll = undefined;

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _index = require('./index');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var searchAll = exports.searchAll = function searchAll(http, object, key) {
  return function () {
    var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(_ref2) {
      var commit = _ref2.commit;
      var mutation = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'SET_ALL';
      var page = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
      var size = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 0;
      var shuf = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : false;
      var query, list;
      return _regenerator2.default.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              query = '?apikey=' + key;

              if (page !== 0 && size !== 0) {
                query += '&page=' + page + '&pageSize=' + size;
              }

              _context.next = 4;
              return http.get('/' + object + '/index' + query);

            case 4:
              list = _context.sent.data.result;

              if (!shuf) {
                _context.next = 7;
                break;
              }

              return _context.abrupt('return', commit(mutation, (0, _index.shuffle)(list)));

            case 7:

              commit(mutation, list);

            case 8:
            case 'end':
              return _context.stop();
          }
        }
      }, _callee, undefined);
    }));

    return function (_x) {
      return _ref.apply(this, arguments);
    };
  }();
};