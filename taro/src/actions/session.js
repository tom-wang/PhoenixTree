import { SET_CODE } from '../constants/session'

export function setCode(code) {
    return {
        type: SET_CODE,
        payload: code
    }
}