/**
 * Created by zhaopei on 2017/11/21.
 */
import {get} from './index'
const _Url = '/course';

//获取教程库中某一项数据
export function fetchBook(id) {
  return get(`${_Url}/api/course?id=${id}`)
}

//获取教程库中所有数据
export function fetchCourses() {
  return get(`${_Url}/api/courses`)
}

