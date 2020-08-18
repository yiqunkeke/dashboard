<template>
  <div>
    <el-row :gutter="20">
      <el-col :span="6">
        <!-- 今日工单各维度统计 -->
        <workOrderComp :workOrder="workOrder"/>
        <!-- 报修设备占比 -->
        <equipRatioComp :equipRatio="equipRatioData"/>
        <!-- 设备报警情况分析 -->
        <analysisComp :analysis="analysis"/>
      </el-col>
      <el-col :span="18">
        <!-- 上 -->
        <el-row :gutter="20">
          <el-col :span="15">
            <!-- 中间 -->
            <boardComp :total="total" :totalPos="totalPos"/>
          </el-col>
          <el-col :span="9">
            <!-- 运维态势分析 -->
            <stateComp :stateData="stateData"/>
            <!-- 任务完成率 -->
            <taskRatioComp :taskData="taskData"/>
          </el-col>
        </el-row>

        <!-- 下 -->
        <el-row :gutter="20">
          <!-- 订单列表 -->
          <listComp :listData="list"/>
        </el-row>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import workOrderComp from './comp/workOrder'
import equipRatioComp from './comp/equipmentRatio'
import analysisComp from './comp/analysis'
import listComp from './comp/list'
import stateComp from './comp/state'
import taskRatioComp from './comp/taskRatio'
import boardComp from './comp/board'
import { workOrderStatistic, equipRatio, equipAlarmAnalysis, operationList, stateAnalysis, taskRatio, totalStatistic, totalPosition } from '@/api/operation'
export default {
  components: {
    workOrderComp,
    equipRatioComp,
    analysisComp,
    stateComp,
    listComp,
    taskRatioComp,
    boardComp
  },
  data () {
    return {
      workOrder: {},
      equipRatioData: {},
      analysis: [],
      list: [],
      stateData: [],
      taskData: [],
      total: [],
      totalPos: {}
    }
  },
  mounted () {
    this.getWorkOrder()
    this.getEquipmentRatio()
    this.getAnalysis()
    this.getList()
    this.getState()
    this.getTaskRatio()
    this.getTotal()
    this.getTotalPosition()
  },
  methods: {
    // 今日工单各维度统计
    async getWorkOrder () {
      this.workOrder = await workOrderStatistic()
    },
    // 报修设备占比
    async getEquipmentRatio () {
      this.equipRatioData = await equipRatio()
    },
    // 设备报警情况分析
    async getAnalysis () {
      this.analysis = await equipAlarmAnalysis()
    },
    // 订单列表
    async getList () {
      this.list = await operationList()
    },
    // 运维态势分析
    async getState () {
      this.stateData = await stateAnalysis()
    },
    // 任务完成率
    async getTaskRatio () {
      this.taskData = await taskRatio()
    },
    // 总数
    async getTotal () {
      this.total = await totalStatistic()
    },
    // 总数
    async getTotalPosition () {
      this.totalPos = await totalPosition()
    },
  }
}
</script>

<style>

</style>
