/**
 * Created by zhaopei on 2017/11/19.
 */
import {get} from './index'

//获取开发者头条
export function fetchDevhots() {
  return get('/api/devhots')
}

//获取官方推荐
export function fetchOffice() {
  return get('/api/office')
}

//获取开发者头条
export function getFrontWeb() {
    return get('/api/webdev')
}

//获取官方推荐
export function getMoveDev() {
    return get('/api/mobiledev')
}
