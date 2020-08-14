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
        <!-- 中间统计 -->
        <boardComp :statistic="statistic" :posEquip="posEquip"/>
        <!-- 设备报警类型趋势 -->
        <trendComp :trend="trend"/>
      </el-col>
      <el-col :span="6">
        <!-- 火源高发处视频监控 -->
        <videoComp/>
        <!-- 设备报警情况分析 -->
        <analysisComp :analysis="analysis" @currentChange="handleCurrentChange"/>
        <!-- 区域火源报警比重 -->
        <areaFireComp :areaFire="areaFire"/>
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
import videoComp from './comp/video'
import analysisComp from './comp/analysis'
import areaFireComp from './comp/areaFireSource'
import { realtimeAlarm, equipmentOnline, equipmentRatio, alarmStatistic, positionEquip, trendData, equipAlarmAnalysis, areaFireSource } from '@/api/fire'
export default {
  components: {
    realAlarm,
    onlineComp,
    equipmentRatioComp,
    boardComp,
    trendComp,
    videoComp,
    analysisComp,
    areaFireComp
  },
  data () {
    return {
      realAlarm: [],
      onlineStatus: {},
      equipRatio: {},
      statistic: {},
      posEquip: {},
      trend: [],
      analysis: {},
      areaFire: {}
    }
  },
  mounted () {
    this.getRealAlarm()
    this.getEquipmentOnline()
    this.getEquipmentRatio()
    this.getAlarmStatistic()
    this.getPositionEquip()
    this.getTrend()
    this.getAnalysis('1')
    this.getAreaFire()
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
    // 报警统计
    async getAlarmStatistic () {
      this.statistic = await alarmStatistic()
      // console.log(this.statistic)
    },
    // 根据位置查看设备
    async getPositionEquip () {
      this.posEquip = await positionEquip()
      // console.log(this.posEquip)
    },
    // 设备报警类型趋势
    async getTrend () {
      this.trend = await trendData()
      // console.log(this.trend)
    },
    // 消防设备报警情况分析
    async getAnalysis (pageNum) {
      this.analysis = await equipAlarmAnalysis({pageNum})
      // console.log(this.analysis)
    },
    handleCurrentChange(pageNum) {
      this.getAnalysis(pageNum)
    },
    // 区域火源报警比重
    async getAreaFire () {
      this.areaFire = await areaFireSource()
    }
  }
}
</script>

<style>

</style>
