import { SET_CODE, SET_USERINFO, SET_REGINFO, SET_USERINFOLIST, SET_HASREG, SET_REGINFOLOADING, SET_USERINFOLOADING } from '../constants/session'

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

export function setHasReg(hasReg) {
    return {
        type: SET_HASREG,
        payload: hasReg
    }
}

export function setUserInfoList(list) {
    return {
        type: SET_USERINFOLIST,
        payload: list
    }
}

export function setUserInfoLoading(userInfoLoading) {
    return {
        type: SET_USERINFOLOADING,
        payload: userInfoLoading
    }
}

export function setRegInfoLoading(regInfoLoading) {
    return {
        type: SET_REGINFOLOADING,
        payload: regInfoLoading
    }
}