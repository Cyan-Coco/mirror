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
                sliders:'',
                title:action.payload.articles.title,
                list: action.payload.articles.list
            }
        //获取首页中开发者头条的数据
        case types.FETCH_DEVHOTS:
            return {
                ...state,
                title:action.payload.articles.title,
                sliders:action.payload.slider.list,
                list: action.payload.articles.list
            }
        //获取首页中前端开发的数据
        case types.FRONT_WEB:
          return{
              ...state,
              sliders:'',
              title:action.payload.title,
              list: action.payload.list
          }
        //获取首页中移动开发的数据
        case types.MOVE_DEV:
          return{
              ...state,
              sliders:'',
              title:action.payload.title,
              list: action.payload.list
          }
        default:
            return state
    }
}
