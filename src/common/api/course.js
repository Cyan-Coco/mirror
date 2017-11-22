/**
 * Created by zhaopei on 2017/11/21.
 */
import {get} from './index'
const _Url = '/course';

//获取教程库中所有数据
export function fetchCourses() {
  return get(`${_Url}/api/courses`)
}

