import { SET_CODE, SET_USERINFO, SET_REGINFO, SET_USERINFOLIST } from '../constants/session'

const INITIAL_STATE = {
  code: '',
  userInfo: {
    loading: true
  }, //-1表示getUserInfo返回错误，需要展示授权按钮
  regInfo: {
    loading: true
  },
  userInfoList: false,
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
    default:
       return state
  }
}