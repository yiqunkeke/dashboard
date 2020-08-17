import request from '../utils/request'
import baseApi from './base'

// 园区人流量
export function peopleData () {
  return request({
    url: `${baseApi.COMPREHENSIVE_URL}/security/private/parkpeople`,
    method: 'post'
  })
}

// 位置摄像头信息
export function cameraData () {
  return request({
    url: `${baseApi.COMPREHENSIVE_URL}/security/private/positioncamera`,
    method: 'post'
  })
}

// 摄像头在线情况
export function cameraOnline () {
  return request({
    url: `${baseApi.COMPREHENSIVE_URL}/security/private/cameraonline`,
    method: 'post'
  })
}
