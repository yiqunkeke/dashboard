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
        <!-- 券核销率 -->
        <couponComp :coupon="coupon"/>
      </el-col>
      <el-col :span="18">
        <!-- 总能耗 -->
        <totalPowerComp :total="totalPower"/>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import weatherComp from './weather'
import electricComp from './electric'
import waterComp from './water'
import couponComp from './coupon'
import totalPowerComp from './totalPower'
import { weatherData, electricData, waterData, couponData, totalPowerData } from '@/api/comprehensive'
export default {
  components: {
    weatherComp,
    electricComp,
    waterComp,
    couponComp,
    totalPowerComp
  },
  data() {
    return {
      weather: {},
      electric: {},
      water: {},
      coupon: {},
      totalPower: {}
    }
  },
  mounted() {
    this.getWeather()
    this.getElectric()
    this.getWater()
    this.getCoupon()
    this.getTotalPower()
  },
  methods: {
    // 获取天气
    async getWeather() {
      this.weather = await weatherData()
    },
    // 全国电力监控
    async getElectric() {
      this.electric = await electricData()
    },
    // 全国水力监控
    async getWater() {
      this.water = await waterData()
    },
    // 券核销率
    async getCoupon() {
      this.coupon = await couponData()
    },
    // 总能耗
    async getTotalPower() {
      this.totalPower = await totalPowerData()
    }
  }
}
</script>

<style>

</style>
