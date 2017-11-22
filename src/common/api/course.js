/**
 * Created by zhaopei on 2017/11/21.
 */
import {get} from './index'
const _Url = '/course';

//获取列表中某一项的信息
export function fetchBook(id) {
  return get(`${_Url}/api/course?id=${id}`)
}
//获取教程库中所有数据
export function fetchCourses() {
  return get(`${_Url}/api/courses`)
}
//获取最近阅读信息
export function fetchReaded() {
  return get(`${_Url}/api/recentread`)
}
