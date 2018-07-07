import { SET_CODE, SET_USERINFO } from '../constants/session'

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