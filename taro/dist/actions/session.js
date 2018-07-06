"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.setCode = setCode;
exports.setUserInfo = setUserInfo;

var _session = require("../constants/session.js");

function setCode(code) {
  return {
    type: _session.SET_CODE,
    payload: code
  };
}

function setUserInfo(userInfo) {
  return {
    type: _session.SET_USERINFO,
    payload: userInfo
  };
}