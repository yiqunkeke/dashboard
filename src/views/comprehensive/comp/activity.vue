<template>
  <div class="box">
      <h1>
        活动情况预测
      </h1>
      <div class="box-wrapper">
        <!-- {{activity}} -->
        <div ref="chart" :style="{width: '100%', height: '220px'}"></div>
      </div>
  </div>
</template>

<script>
export default {
  props: {
    activity: {
      type: Object,
      default: () => {
        return {}
      }
    }
  },
  data () {
    return {
      act: this.activity,
      realtime: [],
      xData: [],
      seriesData: []
    }
  },
  watch: {
    activity (val) {
      this.act = val
      this.realtime = this.act.realTime
      // 处理数据
      if (this.act && this.realtime) {
        this.realtime.forEach(item => {
          this.xData.push(item.time) // x轴数据
          this.seriesData.push(item.activityNum) // y轴数据
        })
        this.drawLine()
      }
    }
  },
  methods: {
    drawLine () {
      const chart = this.$refs.chart

      if (chart) {
        const myChart = this.$echarts.init(chart)
        const option = {
          xAxis: {
            type: 'category',
            boundaryGap: false,
            data: this.xData,
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
              },
              show: false // 隐藏或显示
            },
            axisLine: {
              lineStyle: {
                  color: '#fff', // 颜色
                  width: 0 // 粗细
              }
            }
          },
          grid: { // 解决y轴数值太大，展示不全
            left: 55
          },
          tooltip: {
            trigger: 'axis',
            axisPointer: {
              type: 'cross',
              label: {
                backgroundColor: '#6a7985'
              }
            }
          },
          series: [{
            data: this.seriesData,
            type: 'line',
            smooth: true,
            // areaStyle: {
            //   normal: {
            //     color: '#fe7699' // 改变区域颜色
            //   }
            // },
            itemStyle: {
              normal: {
                color: '#fe7699', // 改变折线点的颜色
                lineStyle: {
                  color: '#fe7699' // 改变折线颜色
                }
              }
            }
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
    }
  }
}
</script>

<style lang="scss" scoped>
  @import '~@/assets/styles/box.scss';
  .box-wrapper {
      display: flex;
      justify-content: space-between;
      padding-left: 10px;
      padding-right: 10px;
      padding-bottom: 10px;
    }
</style>
