import {request} from "./request";

export function getHomeRequest() {
  return request({
    url: '/home/multidata'
  })
}

export function getHomeGoodsList(type,page) {
  return request({
    url:'/home/data',
    params:{
      type,
      page
    }
  })
}

