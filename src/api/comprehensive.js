import request from '../utils/request'
import baseApi from './base'

// 获取天气
export function weatherData () {
  return request({
    url: `${baseApi.COMPREHENSIVE_URL}/situation/private/weather`,
    method: 'post'
  })
}

// 全国电力监控
export function electricData () {
  return request({
    url: `${baseApi.COMPREHENSIVE_URL}/situation/private/powermonitor`,
    method: 'post'
  })
}

// 全国水力监控
export function waterData () {
  return request({
    url: `${baseApi.COMPREHENSIVE_URL}/situation/private/watermonitor`,
    method: 'post'
  })
}

/** 客房统计
 * 
 * @param {*} requestModel 
 * flag
 */
export function roomData (requestModel) {
  return request({
    url: `${baseApi.COMPREHENSIVE_URL}/situation/private/roomstatistics`,
    method: 'post',
    data: requestModel
  })
}

// 人员统计
export function peopleData () {
  return request({
    url: `${baseApi.COMPREHENSIVE_URL}/situation/private/peoplestatistics`,
    method: 'post'
  })
}

// 设备统计
export function equipmentData () {
  return request({
    url: `${baseApi.COMPREHENSIVE_URL}/situation/private/equipmentstatistics`,
    method: 'post'
  })
}

// 活动情况预测
export function activityData () {
  return request({
    url: `${baseApi.COMPREHENSIVE_URL}/situation/private/activity`,
    method: 'post'
  })
}

// 营地营收
export function incomeData () {
  return request({
    url: `${baseApi.COMPREHENSIVE_URL}/situation/private/income`,
    method: 'post'
  })
}
