/**
 * Created by zhaopei on 2017/11/20.
 */
import * as types from '../action-types'
let initState = {
  sliders:[],
  list: []
}

export default function (state = initState, action) {
  switch (action.type) {
    //获取首页中官方推荐的数据
    case types.FETCH_OFFICE:
      return {
        ...state,
        list: action.payload.articles.list
      }
    //获取首页中开发者头条的数据
    case types.FETCH_DEVHOTS:
      return {
        ...state,
        sliders:action.payload.slider.list,
        list: action.payload.articles.list
      }
    default:
      return state
  }
}
