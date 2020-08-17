<template>
  <div>
      <boardComp :people="people" :camera="camera"/>
      <cameraComp :cameraOnline="cameraOnline"/>
  </div>
</template>

<script>
import boardComp from './comp/board'
import cameraComp from './comp/cameraOnline'
import { peopleData, cameraData, cameraOnline } from '@/api/security'
export default {
  components: {
    boardComp,
    cameraComp
  },
  data () {
    return {
      people: {},
      camera: {},
      cameraOnline: {}
    }
  },
  mounted () {
    this.getPeople()
    this.getCamera()
    this.getCameraOnline()
  },
  methods: {
    // 人流量
    async getPeople () {
      this.people = await peopleData()
    },
    // 位置摄像头信息
    async getCamera () {
      this.camera = await cameraData()
    },
    // 位置摄像头信息
    async getCameraOnline () {
      this.cameraOnline = await cameraOnline()
    }
  }
}
</script>

<style>

</style>
