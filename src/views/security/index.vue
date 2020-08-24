<template>
  <div>
    <el-row :gutter="20">
      <el-col :span="6">
        <!-- 人脸底库 -->
        <faceComp :face="face" :license="license"/>
        <!-- 人流量统计 -->
        <peoStatiComp :peoStatic="peoStatic"/>
        <!-- 车流量统计 -->
        <carStatiComp :carStatic="carStatic"/>
      </el-col>
      <el-col :span="12">
        <!-- 中间统计 -->
       <boardComp :people="people" :camera="camera"/>
       <!-- 动态 -->
       <dynamiComp :dynamic="dynamic"/>
      </el-col>
      <el-col :span="6">
        <!-- 视频监控 -->
        <videoComp :video="video"/>
        <!-- 行为统计 -->
        <behaveComp :behavior="behavior"/>
        <!-- 摄像头在线情况 -->
        <cameraComp :cameraOnline="cameraOnline"/>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import peoStatiComp from './comp/peoStatistic'
import carStatiComp from './comp/carStatistic'
import faceComp from './comp/face'
import boardComp from './comp/board'
import dynamiComp from './comp/dynamic'
import videoComp from './comp/video'
import behaveComp from './comp/behavior'
import cameraComp from './comp/cameraOnline'
import { peoStatistic, carStatistic, faceData, lisencePlate, peopleData, cameraData, dynamicData, behaviorData, cameraOnline } from '@/api/security'
import { videoData } from '@/api/fire'
export default {
  components: {
    peoStatiComp,
    carStatiComp,
    faceComp,
    boardComp,
    dynamiComp,
    videoComp,
    behaveComp,
    cameraComp
  },
  data () {
    return {
      peoStatic: {},
      carStatic: [],
      face: {},
      license: {},
      people: {},
      camera: {},
      dynamic: [],
      cameraOnline: {},
      behavior: {},
      video: []
    }
  },
  mounted () {
    this.getPeoStatistic()
    this.getCarStatistic()
    this.getFace()
    this.getLicense()
    this.getPeople()
    this.getCamera()
    this.getDynamic()
    this.getBehavior()
    this.getCameraOnline()
    this.getVideo()
  },
  methods: {
    // 人流量统计
    async getPeoStatistic () {
      this.peoStatic = await peoStatistic()
    },
    // 车流量统计
    async getCarStatistic () {
      this.carStatic = await carStatistic()
    },
    // 人脸底库
    async getFace () {
      this.face = await faceData()
    },
    // 车牌底库
    async getLicense () {
      this.license = await lisencePlate()
    },
    // 人流量
    async getPeople () {
      this.people = await peopleData()
    },
    // 位置摄像头信息
    async getCamera () {
      this.camera = await cameraData()
    },
    // 动态
    async getDynamic () {
      this.dynamic = await dynamicData()
    },
    // 行为统计
    async getBehavior () {
      this.behavior = await behaviorData()
    },
    // 位置摄像头信息
    async getCameraOnline () {
      this.cameraOnline = await cameraOnline()
    },
    // 视频监控
    async getVideo () {
      this.video = await videoData()
    }
  }
}
</script>

<style>

</style>
