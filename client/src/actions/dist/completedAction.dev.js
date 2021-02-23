"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.pending = exports.completed = void 0;

var completed = function completed() {
  return function _callee(dispatch) {
    return regeneratorRuntime.async(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            try {
              dispatch({
                type: "SET_completed",
                payload: true
              });
            } catch (err) {
              dispatch({
                type: "Error in Completed"
              }); // console.error('Errror from Action');
            }

          case 1:
          case "end":
            return _context.stop();
        }
      }
    });
  };
};

exports.completed = completed;

var pending = function pending() {
  return function _callee2(dispatch) {
    return regeneratorRuntime.async(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            try {
              dispatch({
                type: "SET_pending",
                payload: false
              });
            } catch (err) {
              dispatch({
                type: "Error inm"
              });
            }

          case 1:
          case "end":
            return _context2.stop();
        }
      }
    });
  };
};

exports.pending = pending;