"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.setCode = setCode;
exports.setUserInfo = setUserInfo;
exports.setRegInfo = setRegInfo;
exports.setHasReg = setHasReg;
exports.setUserInfoList = setUserInfoList;
exports.setUserInfoLoading = setUserInfoLoading;
exports.setRegInfoLoading = setRegInfoLoading;

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

function setRegInfo(info) {
  return {
    type: _session.SET_REGINFO,
    payload: info
  };
}

function setHasReg(hasReg) {
  return {
    type: _session.SET_HASREG,
    payload: hasReg
  };
}

function setUserInfoList(list) {
  return {
    type: _session.SET_USERINFOLIST,
    payload: list
  };
}

function setUserInfoLoading(userInfoLoading) {
  return {
    type: _session.SET_USERINFOLOADING,
    payload: userInfoLoading
  };
}

function setRegInfoLoading(regInfoLoading) {
  return {
    type: _session.SET_REGINFOLOADING,
    payload: regInfoLoading
  };
}