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

// 报警统计
export function alarmStatistic () {
  return request({
    url: `${baseApi.COMPREHENSIVE_URL}/firefighting/private/alarmstatistics`,
    method: 'post'
  })
}

// 根据位置查看设备
export function positionEquip () {
  return request({
    url: `${baseApi.COMPREHENSIVE_URL}/firefighting/private/positionequipment`,
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

// 火源高发处视频监控
export function videoData () {
  return request({
    url: `${baseApi.COMPREHENSIVE_URL}/firefighting/private/firevideos`,
    method: 'post'
  })
}

// 设备报警情况分析
export function equipAlarmAnalysis (requestModel) {
  return request({
    url: `${baseApi.COMPREHENSIVE_URL}/firefighting/private/alarmanalysis`,
    method: 'post',
    data: requestModel
  })
}

// 区域火源报警比重
export function areaFireSource () {
  return request({
    url: `${baseApi.COMPREHENSIVE_URL}/firefighting/private/areafiresource`,
    method: 'post'
  })
}
