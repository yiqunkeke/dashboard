import request from '../utils/request'
import baseApi from './base'

// 房车设备使用情况
export function tcarEquipment (requestModel) {
    return request({
      url: `${baseApi.COMPREHENSIVE_URL}/touringcar/private/touringcarequipment`,
      method: 'post',
      data: requestModel
    })
  }

// 房车模式使用情况
export function tcarMode (requestModel) {
    return request({
      url: `${baseApi.COMPREHENSIVE_URL}/touringcar/private/touringcarmodel`,
      method: 'post',
      data: requestModel
    })
  }