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

// 券核销率
export function couponData () {
  return request({
    url: `${baseApi.COMPREHENSIVE_URL}/situation/private/coupon`,
    method: 'post'
  })
}

// 总能耗
export function totalPowerData () {
  return request({
    url: `${baseApi.COMPREHENSIVE_URL}/situation/private/powertotal`,
    method: 'post'
  })
}
