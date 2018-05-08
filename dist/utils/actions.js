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
      var params = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      var query, mutation, page, pagesize, shuf, list;
      return _regenerator2.default.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              query = '?apikey=' + key;


              params.mutation = 'mutation' in params ? params.mutation : 'SET_ALL';
              params.page = 'page' in params ? params.page : 0;
              params.pagesize = 'pagesize' in params ? params.pagesize : 0;
              params.shuf = 'shuf' in params ? params.shuf : false;

              mutation = params.mutation, page = params.page, pagesize = params.pagesize, shuf = params.shuf;


              if (page !== 0 && pagesize !== 0) {
                query += '&page=' + page + '&pageSize=' + pagesize;
              }

              _context.next = 9;
              return http.get('/' + object + '/index' + query);

            case 9:
              list = _context.sent.data.result;

              if (!shuf) {
                _context.next = 12;
                break;
              }

              return _context.abrupt('return', commit(mutation, (0, _index.shuffle)(list)));

            case 12:

              commit(mutation, list);

            case 13:
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