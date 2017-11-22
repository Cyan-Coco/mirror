/**
 * Created by zhaopei on 2017/11/20.
 */
import * as types from '../action-types'
let initState = {
  devhots:{
    slider:[],
    articles:[]
  },
  frontend:{
    articles:[]
  },
  mobdev:{
    articles:[]
  },
  office:{
    articles:[]
  }
}

export default function (state=initState, action) {
  switch (action.type) {
    //获取首页中官方推荐的数据
    case types.FETCH_OFFICE:
      return {
        ...state,
        office:{
          ...state.office,
          articles:action.payload
        }
      }
    //获取首页中开发者头条的数据
    case types.FETCH_DEVHOTS:
      return{
        ...state,
        devhots:{
          ...state.devhots,
          slider:action.payload.slider.list,
          articles:action.payload.articles.list
        }
      }
    default:
      return state
  }
}
