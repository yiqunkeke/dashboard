import request from '../utils/request'
import baseApi from './base'

// 今日工单各维度统计
export function workOrderStatistic () {
    return request({
      url: `${baseApi.COMPREHENSIVE_URL}/mochaitom/private/workorderstatistics`,
      method: 'post'
    })
}

// 报修设备占比
export function equipRatio () {
    return request({
      url: `${baseApi.COMPREHENSIVE_URL}/mochaitom/private/repairequipratio`,
      method: 'post'
    })
}

// 设备报警情况分析
export function equipAlarmAnalysis (requestModel) {
    return request({
      url: `${baseApi.COMPREHENSIVE_URL}/mochaitom/private/repairinfolist`,
      method: 'post',
      data: requestModel
    })
}

// 订单列表
export function operationList () {
    return request({
      url: `${baseApi.COMPREHENSIVE_URL}/mochaitom/private/listWorkorders`,
      method: 'post'
    })
}
  
// 运维态势分析
export function stateAnalysis () {
    return request({
      url: `${baseApi.COMPREHENSIVE_URL}/mochaitom/private/operationanalysis`,
      method: 'post'
    })
}

// 任务完成率
export function taskRatio () {
    return request({
      url: `${baseApi.COMPREHENSIVE_URL}/mochaitom/private/taskcompletionlist`,
      method: 'post'
    })
}

// 总数统计
export function totalStatistic () {
    return request({
      url: `${baseApi.COMPREHENSIVE_URL}/mochaitom/private/totalstatistics`,
      method: 'post'
    })
}
  
// 根据位置看工单
export function totalPosition() {
    return request({
      url: `${baseApi.COMPREHENSIVE_URL}/mochaitom/private/positionworkorder`,
      method: 'post'
    })
}
  