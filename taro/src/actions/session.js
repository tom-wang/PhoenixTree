import { SET_CODE, SET_USERINFO, SET_REGINFO } from '../constants/session'

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