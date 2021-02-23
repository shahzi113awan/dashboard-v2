"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _redux = require("redux");

var _completedReducer = require("./completedReducer");

var _default = (0, _redux.combineReducers)({
  completedReducer: _completedReducer.completedReducer
});

exports["default"] = _default;