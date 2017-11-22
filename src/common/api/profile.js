/**
 * Created by zhaopei on 2017/11/21.
 */
import {post} from './index'
let _Url = '/profile';
//注册
export function fetchSignup(data) {
  return post('/api/signup',data)
}
//登录
export function fetchSignin(data) {
  return post('/api/login',data)
}
