<template>
  <div>
    <el-row :gutter="20">
      <el-col :span="6">
        <!-- 实时报警 -->
        <realAlarm :realAlarm="realAlarm"/>
        <!-- 设备在线情况 -->
        <onlineComp :onlineStatus="onlineStatus"/>
        <!-- 设备占比 -->
        <equipmentRatioComp :equipRatio="equipRatio"/>
      </el-col>
      <el-col :span="12">
        <!-- 中间图片展示 -->
        <boardComp/>
        <!-- 设备报警类型趋势 -->
        <trendComp :trend="trend"/>
      </el-col>
      <el-col :span="6">
        
      </el-col>
    </el-row>
  </div>
</template>

<script>
import realAlarm from './comp/realAlarm'
import onlineComp from './comp/online'
import equipmentRatioComp from './comp/equipmentRatio'
import boardComp from './comp/board'
import trendComp from './comp/trend'
import { realtimeAlarm, equipmentOnline, equipmentRatio, trendData } from '@/api/fire'
export default {
  components: {
    realAlarm,
    onlineComp,
    equipmentRatioComp,
    boardComp,
    trendComp
  },
  data () {
    return {
      realAlarm: [],
      onlineStatus: {},
      equipRatio: {},
      trend: []
    }
  },
  mounted () {
    this.getRealAlarm()
    this.getEquipmentOnline()
    this.getEquipmentRatio()
    this.getTrend()
  },
  methods: {
    // 获取实时警报
    async getRealAlarm () {
      this.realAlarm = await realtimeAlarm()
      // console.log(this.realAlarm)
    },
    // 消防设备在线情况
    async getEquipmentOnline () {
      this.onlineStatus = await equipmentOnline()
      // console.log(this.onlineStatus)
    },
    // 获取设备占比
    async getEquipmentRatio () {
      this.equipRatio = await equipmentRatio()
      // console.log(this.equipRatio)
    },
    // 设备报警类型趋势
    async getTrend () {
      this.trend = await trendData()
      // console.log(this.trend)
    }
  }
}
</script>

<style>

</style>
