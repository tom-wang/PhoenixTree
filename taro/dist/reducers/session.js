"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = session;

var _session = require("../constants/session.js");

var INITIAL_STATE = {
  code: '',
  userInfoLoading: true,
  userInfo: false, //-1表示getUserInfo返回错误，需要展示授权按钮
  regInfoLoading: true,
  regInfo: false,
  userInfoList: false,
  hasReg: false //标识用户是否注册
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
    case _session.SET_USERINFOLIST:
      return _extends({}, state, {
        userInfoList: action.payload || []
      });
    case _session.SET_HASREG:
      return _extends({}, state, {
        hasReg: action.payload
      });
    case _session.SET_REGINFOLOADING:
      return _extends({}, state, {
        regInfoLoading: action.payload
      });
    case _session.SET_USERINFOLOADING:
      return _extends({}, state, {
        userInfoLoading: action.payload
      });
    default:
      return state;
  }
}