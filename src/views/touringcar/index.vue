<template>
  <el-row :gutter="20">
        <el-col :span="12">
          <!-- <el-select v-model="value" placeholder="请选择" size="small" class="select">
            <el-option
              v-for="item in options"
              :key="item.value"
              :label="item.label"
              :value="item.value">
            </el-option>
          </el-select> -->
          <!-- <div class="myEchart">
                <div ref="chart" :style="{width: '100%', height: '100%'}"></div>
              </div> -->
          <div class="box">
            <h1>
              房车设备使用情况
            </h1>
            <el-table :data="equipments" stripe class="myTable" height="100%">
                    <el-table-column
                        prop="roomName"
                        label="房间"
                        width="80">
                    </el-table-column>
                    <el-table-column
                        prop="equipmentName"
                        label="设备"
                        width="100">
                    </el-table-column>
                    <el-table-column
                        label="来源">
                        <template slot-scope="scope">
                          客户端：{{scope.row.sourceOperation}}，
                          房车网关：{{scope.row.sourceGateway}}，
                          实体按键：{{scope.row.sourceUseKey}}
                        </template>
                    </el-table-column>
                    <el-table-column
                        prop="useTotalTime"
                        label="当日使用总时长"
                        width="80">
                    </el-table-column>
                    <el-table-column
                        prop="avgTime"
                        label="当日每次平均时长"
                        width="80">
                    </el-table-column>
                    <el-table-column
                        prop="useTotalFrequency"
                        label="当日使用次数"
                        width="80">
                    </el-table-column>
            </el-table>
          </div>
        </el-col>
        <el-col :span="12">
          <div class="box">
            <h1>
              房车模式使用情况
            </h1>
            <el-table :data="modes" stripe>
                  <el-table-column
                      prop="roomName"
                      label="房间"
                      width="80">
                  </el-table-column>
                  <el-table-column
                      prop="modelName"
                      label="模式"
                      width="100">
                  </el-table-column>
                  <el-table-column
                      label="来源">
                      <template slot-scope="scope">
                        客户端：{{scope.row.sourceOperation}}，
                        房车网关：{{scope.row.sourceGateway}}，
                        实体按键：{{scope.row.sourceUseKey}}
                      </template>
                  </el-table-column>
                  <el-table-column
                      prop="useTotalTime"
                      label="使用时长"
                      width="80">
                  </el-table-column>
                  <el-table-column
                      prop="avgTime"
                      label="当日每次平均时长"
                      width="80">
                  </el-table-column>
                  <el-table-column
                      prop="useTotalFrequency"
                      label="当日使用次数"
                      width="80">
                  </el-table-column>
            </el-table>
          </div>

          <div class="box">
            <h1>
              图表统计
            </h1>
            <div class="myEchart">
                <div class="chartInner">
                  <div ref="chart" :style="{width: '100%', height: '90%'}"></div>
                  <p>房车设备使用次数</p>
                </div>
                <div class="chartInner">
                  <div ref="chart2" :style="{width: '100%', height: '90%'}"></div>
                  <p>房车模式使用次数</p>
                </div>
            </div>
          </div>
        </el-col>

        <!-- <el-col :span="24">
          <div class="box">
            <h1>
              图表
            </h1>
            <div class="myEchart">
                <div ref="chart" :style="{width: '100%', height: '100%'}"></div>
            </div>
          </div>
        </el-col> -->
    </el-row>
</template>

<script>
import { tcarEquipment, tcarMode } from '@/api/touringcar'
export default {
	data() {
		return {
      options: [{
          value: 'C0847DB6F000',
          label: '帝盛房车A'
        }],
        value: 'C0847DB6F000',
        equipments: [],
        modes: [],
        timer: null,
        timer2: null,
        // xData: [],
        // seriesData: [], // 柱状图数据

        xDataCircle:[], // 饼图
        seriesDataCircle: [],
        xDataCircle2:[], // 饼图
        seriesDataCircle2: []
		}
  },
  watch: {
    equipments(val) {
      console.log('equipments',val)
      this.equipments = val
      // 处理柱状图数据
      // this.xData = []
      // this.seriesData = []
      this.xDataCircle = []
      this.seriesDataCircle = []
      for (let item of this.equipments) {
        // this.xData.push(item.equipmentName)
        // this.seriesData.push(item.useTotalFrequency)
      
        this.xDataCircle.push(item.equipmentName)
        this.seriesDataCircle.push({
          value: Number(item.useTotalFrequency),
          name: item.equipmentName
        })
      }
      // this.drawLine()
      this.drawCircle()
    },
    modes(val) {
      console.log('modes',val)
      this.modes = val
      this.xDataCircle2 = []
      this.seriesDataCircle2 = []
      for (let item of this.modes) {
        // this.xData.push(item.equipmentName)
        // this.seriesData.push(item.useTotalFrequency)
      
        this.xDataCircle2.push(item.modelName)
        this.seriesDataCircle2.push({
          value: Number(item.useTotalFrequency),
          name: item.modelName
        })
      }
      // this.drawLine()
      this.drawCircle2()
    }
  },
  mounted() {
    this.getEquipment()
    this.getMode()
  },
  destroyed() {
    // console.log('destroy')
    window.clearInterval(this.timer)
    window.clearInterval(this.timer2)
  },
 	methods: {
     //根据房车-房间获取设备
     async getEquipment() {
       this.equipments = await tcarEquipment({
            carNum: 'C0847DB6F000'
          })
       this.timer = setInterval(async () => { 
          this.equipments = await tcarEquipment({
            carNum: 'C0847DB6F000'
          })
        }, 2000)
     },
    //  获取模式
     async getMode() {
       this.modes = await tcarMode({
            carNum: 'C0847DB6F000'
       })
       this.timer2 = setInterval(async () => { 
          this.modes = await tcarMode({
            carNum: 'C0847DB6F000'
          })
          console.log('modes', this.modes)
        }, 2000)
     },
     //  设备图表
     drawLine () {
      const chart = this.$refs.chart
      if (chart) {
        const myChart = this.$echarts.init(chart)
        const option = {
          xAxis: {
            type: 'category',
            data: this.xData,
            axisLabel: {
              interval: 0,
              rotate: 30
            },
            axisLine: {
              lineStyle: {
                color: '#fff', // 颜色
                width: 0 // 粗细
              }
            }
          },
          yAxis: {
            type: 'value',
            splitLine: { // 网格线
              lineStyle: {
                type: 'dashed', // 设置网格线类型 dotted：虚线   solid:实线
                color: ['#071b6d'],
                width: 1
              },
              show: true // 隐藏或显示
            },
            axisLine: {
              lineStyle: {
                color: '#fff', // 颜色
                width: 0 // 粗细
              }
            }
          },
          tooltip: {
            transitionDuration:0,//echart防止tooltip的抖动
          },
          color: ['#409eff'],
          barWidth: 15,
          series: [{
            data: this.seriesData,
            type: 'bar'
            // showBackground: true
          }]
        }
        myChart.setOption(option)
        window.addEventListener('resize', function () {
          myChart.resize()
        })
      }
      this.$on('hook:destroyed', () => {
        window.removeEventListener('resize', function () {
          myChart.resize()
        })
      })
    },
    drawCircle () {
      const chart = this.$refs.chart
      // console.log(this.xDataCircle)
      // console.log(this.seriesDataCircle)
      if (chart) {
        const myChart = this.$echarts.init(chart)
        const option = {
          tooltip: {
            trigger: 'item',
            formatter: '{a} <br/>{b} : {c} ({d}%)',
            transitionDuration:0,//echart防止tooltip的抖动
          },
          // color: ['#409eff', '#4fcb74', '#fbd438', '#f04864', '#9860e5', '#37cbcb', '#37a2da', '#e7bcf3', '#8378ea', '#96bfff', '#ff9f7f'],
          color: ['#ffd074', '#00deff', '#0080f8', '#1b51ff', '#00e9db', '#518ddf'],
          // legend: {
          //   orient: 'vertical',
          //   right: 30,
          //   top: 20,
          //   data: this.xDataCircle,
          //   textStyle: {
          //     color: '#ffffff'
          //   },
          //   icon: 'circle',
          //   itemWidth: 10,
          //   itemHeight: 10
          // },
          series: [
            {
              name: '房车设备使用次数',
              type: 'pie',
              radius: ['50%', '75%'],
              center: ['50%', '50%'],
              data: this.seriesDataCircle,
              emphasis: {
                itemStyle: {
                  shadowBlur: 10,
                  shadowOffsetX: 0,
                  shadowColor: 'rgba(0, 0, 0, 0.5)'
                }
              },
              label: {
                show: false,
                position: 'center'
              }
            }
          ]
        }
        myChart.setOption(option)
        window.addEventListener('resize', function () {
          myChart.resize()
        })
      }
      this.$on('hook:destroyed', () => {
        window.removeEventListener('resize', function () {
          myChart.resize()
        })
      })
    },
    drawCircle2 () {
      const chart = this.$refs.chart2
      // console.log(this.xDataCircle)
      // console.log(this.seriesDataCircle)
      if (chart) {
        const myChart = this.$echarts.init(chart)
        const option = {
          tooltip: {
            trigger: 'item',
            formatter: '{a} <br/>{b} : {c} ({d}%)',
            transitionDuration:0,//echart防止tooltip的抖动
          },
          // color: ['#409eff', '#4fcb74', '#fbd438', '#f04864', '#9860e5', '#37cbcb', '#37a2da', '#e7bcf3', '#8378ea', '#96bfff', '#ff9f7f'],
          color: ['#ffd074', '#00deff', '#0080f8', '#1b51ff', '#00e9db', '#518ddf'],
          legend: {
            orient: 'vertical',
            right: 30,
            top: 20,
            data: this.xDataCircle2,
            textStyle: {
              color: '#ffffff'
            },
            icon: 'circle',
            itemWidth: 10,
            itemHeight: 10
          },
          series: [
            {
              name: '房车模式使用次数',
              type: 'pie',
              radius: ['50%', '75%'],
              center: ['50%', '50%'],
              data: this.seriesDataCircle2,
              emphasis: {
                itemStyle: {
                  shadowBlur: 10,
                  shadowOffsetX: 0,
                  shadowColor: 'rgba(0, 0, 0, 0.5)'
                }
              },
              label: {
                show: false,
                position: 'center'
              }
            }
          ]
        }
        myChart.setOption(option)
        window.addEventListener('resize', function () {
          myChart.resize()
        })
      }
      this.$on('hook:destroyed', () => {
        window.removeEventListener('resize', function () {
          myChart.resize()
        })
      })
    }
	  }
}
</script>

<style lang="scss" scoped>
.el-row {
  display: flex;
  width: 100%;
  .el-col{
    display: flex;
    flex-direction: column;
  }
}
.select {
  width: 3rem;
  margin-bottom: .15rem;
  // flex: 1;
}

.myEchart {
  display: flex;
  height: 100%;
  .chartInner {
    flex: 1;
    display: flex;
    text-align: center;
    justify-content: center;
    flex-direction: column;
    p {
      color: #fff;
      font-size: .18rem;
      margin-bottom: .2rem;
    }
  }
}

</style>

<style lang="scss" scoped>
@import '~@/assets/styles/box.scss';
::v-deep .el-table--striped .el-table__body tr.el-table__row--striped td {
  background: rgba($color: #0184ff, $alpha: 0.1);
}
::v-deep .el-table--enable-row-hover .el-table__body tr:hover>td {
  background: rgba($color: #0184ff, $alpha: 0.2);
}
.el-table::before {
  height: 0;
}
::v-deep .el-table {
      background-color: transparent;
      color: #fff;
      thead {
        color: $white;
      }
      th, tr {
        background-color: transparent;
      }
      td, th.is-leaf {
        border-bottom: none;
      }
      td, th {
        padding-top: .05rem;
        padding-bottom: .05rem;
        font-size: 0.14rem;
      }
    } 
</style>
