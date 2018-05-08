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
  return (
    // {page = 0, size = 0, mutation = 'SET_ALL', shuf = false}
    function () {
      var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(_ref2, _ref3) {
        var commit = _ref2.commit;
        var _ref3$page = _ref3.page,
            page = _ref3$page === undefined ? 0 : _ref3$page,
            _ref3$size = _ref3.size,
            size = _ref3$size === undefined ? 0 : _ref3$size,
            _ref3$mutation = _ref3.mutation,
            mutation = _ref3$mutation === undefined ? 'SET_ALL' : _ref3$mutation,
            _ref3$shuf = _ref3.shuf,
            shuf = _ref3$shuf === undefined ? false : _ref3$shuf;
        var query, list;
        return _regenerator2.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                query = '?apikey=' + key;

                page = page == undefined ? 0 : page;
                size = size == undefined ? 0 : size;
                mutation = mutation == undefined ? 'SET_ALL' : mutation;
                shuf = shuf == undefined ? false : shuf;

                if (page !== 0 && size !== 0) {
                  query += '&page=' + page + '&pageSize=' + size;
                }

                _context.next = 8;
                return http.get('/' + object + '/index' + query);

              case 8:
                list = _context.sent.data.result;

                if (!('shuf' in obj)) {
                  _context.next = 11;
                  break;
                }

                return _context.abrupt('return', commit(mutation, (0, _index.shuffle)(list)));

              case 11:

                commit(mutation, list);

              case 12:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, undefined);
      }));

      return function (_x, _x2) {
        return _ref.apply(this, arguments);
      };
    }()
  );
};