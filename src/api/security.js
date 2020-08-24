import request from '../utils/request'
import baseApi from './base'

// 人流量统计
export function peoStatistic () {
  return request({
    url: `${baseApi.COMPREHENSIVE_URL}/security/private/peopleweekstatistics`,
    method: 'post'
  })
}

// 车流量统计
export function carStatistic () {
  return request({
    url: `${baseApi.COMPREHENSIVE_URL}/security/private/vehicleweekstatistics`,
    method: 'post'
  })
}

// 人脸底库
export function faceData () {
  return request({
    url: `${baseApi.COMPREHENSIVE_URL}/security/private/facestatistics`,
    method: 'post'
  })
}

// 车牌底库
export function lisencePlate () {
  return request({
    url: `${baseApi.COMPREHENSIVE_URL}/security/private/carnostatistics`,
    method: 'post'
  })
}

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

// 动态
export function dynamicData () {
  return request({
    url: `${baseApi.COMPREHENSIVE_URL}/security/private/dynamicinfo`,
    method: 'post'
  })
}

// 行为统计
export function behaviorData () {
  return request({
    url: `${baseApi.COMPREHENSIVE_URL}/security/private/behavior`,
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
