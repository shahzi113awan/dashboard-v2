"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _redux = require("redux");

var _remoteReduxDevtools = require("remote-redux-devtools");

var _reduxThunk = _interopRequireDefault(require("redux-thunk"));

var _index = _interopRequireDefault(require("./reducers/index"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var initialState = {};
var middleware = [_reduxThunk["default"]];
var store = (0, _redux.createStore)(_index["default"], initialState, (0, _remoteReduxDevtools.composeWithDevTools)(_redux.applyMiddleware.apply(void 0, middleware)));
var _default = store;
exports["default"] = _default;