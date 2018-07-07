import { SET_CODE, SET_USERINFO, SET_REGINFO, SET_USERINFOLIST } from '../constants/session'

export function setCode(code) {
    return {
        type: SET_CODE,
        payload: code
    }
}

export function setUserInfo(userInfo) {
    return {
        type: SET_USERINFO,
        payload: userInfo
    }
}

export function setRegInfo(info) {
    return {
        type: SET_REGINFO,
        payload: info
    }
}

export function setUserInfoList(list) {
    return {
        type: SET_USERINFOLIST,
        payload: list
    }
}