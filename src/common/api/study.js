/**
 * Created by zhaopei on 2017/11/22.
 */
import {get} from './index'
const _Url = '/study';
//获取学习页中所有数据
export function fetchLessons() {
  return get(`${_Url}/api/studydata`)
}