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
export function login (systemCode, userName, password) {
  return request({
    url: `${baseApi.API_URL}/user/public/login`,
    method: 'post',
    data: {
      systemCode,
      userName,
      password
    }
  })
}

// 获取用户信息
export function getInfo () {
  return request({
    url: `${baseApi.API_URL}/user/private/userInfo`,
    method: 'post'
  })
}

// 修改密码
export function updataPwd (oldPwd, newPwd) {
  return request({
    url: `${baseApi.API_URL}/user/private/updatePwd`,
    method: 'post',
    data: {
      oldPwd,
      newPwd
    }
  })
}
