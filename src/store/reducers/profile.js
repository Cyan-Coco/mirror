/**
 * Created by zhaopei on 2017/11/21.
 */
import * as types from '../action-types'
let initState = {
  user: null,
  success: null,
  error: null
}
export default function (state = initState, action) {
  switch (action.type) {
    case types.SIGN_IN:
      let {user, success, error} = action.payload
      return {
        ...state,
        user,
        success,
        error
      }
    case types.SIGN_UP:
      let {success, error} = action.payload
      return{
        ...state,
        success,
        error
      }
    default:
      return state
  }
}

