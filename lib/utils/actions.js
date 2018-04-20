'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.searchAll = undefined;

var _index = require('./index');

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

var searchAll = exports.searchAll = function searchAll(http, object, key) {
  return function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(_ref2) {
      var commit = _ref2.commit;
      var mutation = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'SET_ALL';
      var page = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
      var size = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 0;
      var shuf = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : false;
      var query, list;
      return regeneratorRuntime.wrap(function _callee$(_context) {
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