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

export function loadRegInfo() {
    return (dispatch) => {
        //调用云函数
        return wx.cloud.callFunction({
            // 需调用的云函数名
            name: 'add',
            // 传给云函数的参数
            data: {
            a: 12,
            b: 19,
            }
        }).then(result => {
            console.log(result);
            //调用云DB
            const { openId } = result.result;
            const db = wx.cloud.database()
            const member_info = db.collection('member_info')
            return member_info.where({
                _openid: openId
            }).get().then(result => {
                console.log(result);
                dispatch(setHasReg(!!result.data.length))
                dispatch(setRegInfoLoading(false))
                dispatch(setRegInfo({
                    ...result.data[0],
                }))
            }).catch(() => {
                dispatch(setRegInfoLoading(false))
            })
        });
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