import { SET_CODE } from '../constants/session'

const INITIAL_STATE = {
  code: ''
}

export default function session (state = INITIAL_STATE, action) {
  switch (action.type) {
    case SET_CODE:
      return {
        ...state,
        code: action.payload
      }
     default:
       return state
  }
}