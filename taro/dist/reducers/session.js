"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = session;

var _session = require("../constants/session.js");

var INITIAL_STATE = {
  code: '',
  userInfo: {
    loading: true
  }, //-1表示getUserInfo返回错误，需要展示授权按钮
  regInfo: {
    loading: true
  }
};

function session() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : INITIAL_STATE;
  var action = arguments[1];

  switch (action.type) {
    case _session.SET_CODE:
      return _extends({}, state, {
        code: action.payload
      });
    case _session.SET_USERINFO:
      return _extends({}, state, {
        userInfo: action.payload
      });
    case _session.SET_REGINFO:
      return _extends({}, state, {
        regInfo: action.payload
      });
    default:
      return state;
  }
}