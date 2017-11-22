import * as types from './action-types'
import {push} from 'react-router-redux'
import {fetchOffice, fetchDevhots} from '../common/api/home'
import {fetchCourse,fetchCourses,fetchReaded} from '../common/api/course'
import {fetchSignup, fetchSignin} from '../common/api/profile'
export default {
  //获取首页中官方推荐数据
  getOffice(){
    return (dispatch) => {
      dispatch({
        type: types.FETCH_OFFICE,
        payload: fetchOffice()
      })
    }
  },
  //获取首页中开发者头条数据
  getDevhots(){
    return (dispatch) => {
      fetchDevhots().then(payload => {
        dispatch({
          type: types.FETCH_DEVHOTS,
          payload
        })
      })
    }
  },
  //登录
  login(data){
    return dispatch=>{
      fetchSignin(data).then(payload=>{
        dispatch({
          type:types.SIGN_IN,
          payload
        })
        let {code} = payload
        if (code==1){
          dispatch(push('/home'))
        }
      })
    }
  },
  //注册
  register(data){
    return dispatch=>{
      fetchSignup(data).then(payload=>{
        dispatch({
          type:types.SIGN_UP,
          payload
        })
        let {code} = payload
        if (code==1){
          dispatch(push('/login'))
        }
      })
    }
  },
  
  //获取教程库列表中某一项的信息
  getCourse(){
    return (dispatch) => {
    
    }
  },
  //获取教程库中所有数据
  getCourses(){
    return dispatch=>{
      fetchCourses().then(payload=>{
        dispatch({
          type:types.FETCH_COURSES,
          payload
        })
      })
    }
  }
  //获取教程库中最近阅读信息

}