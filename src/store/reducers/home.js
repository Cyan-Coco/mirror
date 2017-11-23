/**
 * Created by zhaopei on 2017/11/20.
 */
import * as types from '../action-types'
let initState = {
  article:{}
}

export default function (state=initState, action) {
  switch (action.type) {
    //获取首页中官方推荐的数据
    case types.FETCH_OFFICE:
      return {
        ...state,
        article:action.payload.articles
        }
    //获取首页中开发者头条的数据
    case types.FETCH_DEVHOTS:
      return{
        ...state,
        article:action.payload
      }
    default:
      return state
  }
}
