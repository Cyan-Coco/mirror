/**
 * Created by zhaopei on 2017/11/22.
 */
import * as types from '../action-types'
let initState = {
  sliders:[],
  lessons:[]
};
export default function (state = initState, action) {
  switch (action.type) {
    case types.FETCH_LESSONS:
      return {
        ...state,
        sliders:action.payload.slider.list,
        lessons:action.payload.studyList
      };
    default:
      return state
  }
}

