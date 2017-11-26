/**
 * Created by zhaopei on 2017/11/21.
 */
import {get,post} from './index'
const _Url = '/course';

//获取教程库中某一项数据
export function fetchBook(id) {
  return get(`${_Url}/api/course?id=${id}`)
}

//获取教程库中所有数据
export function fetchCourses(search) {
  return get(`${_Url}/api/courses?search=${search||""}`)
}
//收藏书  大家不要删这个，这个是新增的
export function addCollect(book) {
    return post('/profile/api/account',book)
}


