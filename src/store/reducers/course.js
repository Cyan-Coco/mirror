/**
 * Created by zhaopei on 2017/11/21.
 */
import * as types from '../action-types'

let initState = {
  courses:[]
}
export default function (state = initState, action) {
  switch (action.type) {
    case types.FETCH_COURSE:
      return {
        ...state,
        list: action.payload.list
      }
    case types.FETCH_COURSES:
      return {
        ...state,
        courses:action.payload.courseList
      }
    case types.FETCH_COURSE:
      return {}
    default:
      return state
  }
}
