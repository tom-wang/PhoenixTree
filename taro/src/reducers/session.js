import { SET_CODE, SET_USERINFO, SET_REGINFO, SET_USERINFOLIST, SET_HASREG, SET_USERINFOLOADING, SET_REGINFOLOADING } from '../constants/session'

const INITIAL_STATE = {
  code: '',
  userInfoLoading: true,
  userInfo: false, //-1表示getUserInfo返回错误，需要展示授权按钮
  regInfoLoading: true,
  regInfo: false,
  userInfoList: false,
  hasReg: false, //标识用户是否注册
}

export default function session (state = INITIAL_STATE, action) {
  switch (action.type) {
    case SET_CODE:
      return {
        ...state,
        code: action.payload
      }
    case SET_USERINFO:
      return {
        ...state,
        userInfo: action.payload
      }
    case SET_REGINFO:
      return {
        ...state,
        regInfo: action.payload
      }
    case SET_USERINFOLIST:
      return {
        ...state,
        userInfoList: action.payload || []
      }
    case SET_HASREG:
      return {
        ...state,
        hasReg: action.payload
      }
    case SET_REGINFOLOADING:
      return {
        ...state,
        regInfoLoading: action.payload
      }
    case SET_USERINFOLOADING:
      return {
        ...state,
        userInfoLoading: action.payload
      }
    default:
       return state
  }
}