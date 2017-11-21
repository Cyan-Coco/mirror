/**
 * Created by zhaopei on 2017/11/21.
 */
import * as types from '../action-types'

let initState = {
  courseList: [
    {
      beginnerCourse: {
        title: '',
        list: []
      }
    },
    {
      webDevCourse: {
        title: '',
        list: []
      }
    },
    {
      mobileDevCourse: {
        title: '',
        list: []
      }
    },
    {
      webBuildCourse: {
        title: '',
        list: []
      }
    }
  ]
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
        beginnerCourse: {
          ...state.beginnerCourse,
          title: action.payload.beginnerCourse.title,
          list: action.payload.beginnerCourse.list
        },
        webDevCourse: {
          ...state.webDevCourse,
          title: action.payload.webDevCourse.title,
          list: action.payload.webDevCourse.list
        },
        mobileDevCourse: {
          ...state.mobileDevCourse,
          title: action.payload.mobileDevCourse.title,
          list: action.payload.mobileDevCourse.list
        },
        webBuildCourse: {
          ...state.webBuildCourse,
          title: action.payload.webBuildCourse.title,
          list: action.payload.webBuildCourse.list
        }
      }
    case types.FETCH_COURSE:
      return {}
    default:
      return state
  }
}



module.exports = {
  list: [
    {
      cate: '编程',
      content: [
        {
          id: 1,
          img: 'http://www.fullstackjavascript.cn/images/vue.png',
          title: 'Vue.js从理论精讲到项目实战课程',
          des: '哈哈哈哈哈'
        },
        {
          id: 2,
          img: 'http://www.fullstackjavascript.cn/images/vue.png',
          title: 'Vue.js从理论精讲到项目实战课程',
          des: '哈哈哈哈哈'
        }
      ]
    },
    {
      cate: '编程',
      content: [
        {
          id: 1,
          img: 'http://www.fullstackjavascript.cn/images/vue.png',
          title: 'Vue.js从理论精讲到项目实战课程',
          des: '哈哈哈哈哈'
        },
        {
          id: 2,
          img: 'http://www.fullstackjavascript.cn/images/vue.png',
          title: 'Vue.js从理论精讲到项目实战课程',
          des: '哈哈哈哈哈'
        }
      ]
    }
  ]
};