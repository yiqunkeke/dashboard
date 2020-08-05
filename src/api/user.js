import request from '../utils/request'
import baseApi from './base'

// 获取营地列表
export function campList () {
  return request({
    url: `${baseApi.API_URL}/public/listSystems`,
    method: 'post'
  })
}

// 用户登录
export function login (data) {
  return request({
    url: `${baseApi.API_URL}/user/public/login`,
    method: 'post',
    data
  })
}

// 获取用户信息
export function getInfo (userId, userToken, systemCode) {
  return request({
    url: `${baseApi.API_URL}/user/private/userInfo`,
    method: 'post',
    headers: {
      userId,
      userToken,
      systemCode
    }
  })
}

// 用户登出
export function logout () {
  return request({
    url: `${baseApi.API_URL}/user/logout`,
    method: 'post'
  })
}
