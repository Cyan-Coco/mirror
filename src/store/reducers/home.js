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
    case types.FETCH_OFFICE:
      return {
        ...state,
        office:{
          ...state.office,
          articles:action.payload
        }
      }
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
