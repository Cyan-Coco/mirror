/**
 * Created by zhaopei on 2017/11/24.
 */
import {get,post} from './index'
let _Url = '/profile';
//注册
export function fetchSignup(data) {
  return post(`${_Url}/api/signup`,data)
}
//登录
export function fetchSignin(data) {
  return post(`${_Url}/api/login`,data)
}
//签到
export function fetchSign(name) {
  return get(`${_Url}/api/sign?userName=${name||''}`)
}
