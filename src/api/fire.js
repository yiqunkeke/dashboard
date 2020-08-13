import request from '../utils/request'
import baseApi from './base'

// 实时报警
export function realtimeAlarm () {
  return request({
    url: `${baseApi.COMPREHENSIVE_URL}/firefighting/private/realtimealarm`,
    method: 'post'
  })
}

// 设备在线情况
export function equipmentOnline () {
    return request({
      url: `${baseApi.COMPREHENSIVE_URL}/firefighting/private/fireequiponline`,
      method: 'post'
    })
}

// 设备占比
export function equipmentRatio () {
    return request({
      url: `${baseApi.COMPREHENSIVE_URL}/firefighting/private/equipmentratio`,
      method: 'post'
    })
}

// 设备报警类型趋势图
export function trendData () {
    return request({
      url: `${baseApi.COMPREHENSIVE_URL}/firefighting/private/exceptionstatistics`,
      method: 'post'
    })
}