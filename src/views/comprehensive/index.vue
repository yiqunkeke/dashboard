<template>
  <div>
    <el-row :gutter="20">
      <el-col :span="6">
        <!-- 天气 -->
        <weatherComp :weather="weather"/>
        <!-- 电力监控 -->
        <electricComp :electric="electric"/>
        <!-- 水力 -->
        <waterComp :water="water"/>
        <!-- 海草屋客房统计 -->
        <seaweedComp :seawead="seawead"/>
        <!-- 拖挂房车客房统计 -->
        <touringcarComp :touringcar="touringcar"/>
      </el-col>
      <el-col :span="18">
        <!-- 上 -->
        <el-row :gutter="20">
          <el-col :span="15">
            <boardComp :power="power"/>
          </el-col>
          <el-col :span="9">
            <peopleComp :people="people" :equipment="equipment"/>
            <activityComp :activity="activity"/>
          </el-col>
        </el-row>
        <!-- 下 -->
        <el-row :gutter="20">
          <!-- 营地营收 -->
          <incomeComp :income="income"/>
        </el-row>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import weatherComp from './comp/weather'
import electricComp from './comp/electric'
import waterComp from './comp/water'
import seaweedComp from './comp/seawead'
import touringcarComp from './comp/touringcar'
import boardComp from './comp/board'
import peopleComp from './comp/people'
import activityComp from './comp/activity'
import incomeComp from './comp/income'
import { weatherData, electricData, waterData, roomData, powerTotal, peopleData, equipmentData, activityData, incomeData } from '@/api/comprehensive'
export default {
  components: {
    weatherComp,
    electricComp,
    waterComp,
    seaweedComp,
    touringcarComp,
    boardComp,
    peopleComp,
    activityComp,
    incomeComp
  },
  data () {
    return {
      weather: {},
      electric: {},
      water: {},
      seawead: {},
      touringcar: {},
      power: {},
      people: {},
      equipment: {},
      activity: {},
      income: {}
    }
  },
  mounted () {
    this.getWeather()
    this.getElectric()
    this.getWater()
    this.getRoom('1')
    this.getRoom('2')
    this.getPowerTotal()
    this.getPeople()
    this.getEquipment()
    this.getActivity()
    this.getIncomeData()
  },
  methods: {
    // 获取天气
    async getWeather () {
      this.weather = await weatherData()
    },
    // 全国电力监控
    async getElectric () {
      this.electric = await electricData()
    },
    // 全国水力监控
    async getWater () {
      this.water = await waterData()
    },
    // 海草屋客房
    async getRoom (flag) {
      if (flag === '1') {
        this.seawead = await roomData({ flag })
      }
      if (flag === '2') {
        this.touringcar = await roomData({ flag })
      }
    },
    // 总能耗统计
    async getPowerTotal () {
      this.power = await powerTotal()
    },
    // 人员统计
    async getPeople () {
      this.people = await peopleData()
    },
    // 设备统计
    async getEquipment () {
      this.equipment = await equipmentData()
    },
    // 活动情况预测
    async getActivity () {
      this.activity = await activityData()
    },
    // 营地营收
    async getIncomeData () {
      this.income = await incomeData()
    }
  }
}
</script>

<style>

</style>
