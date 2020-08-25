
<template>
  <div class="box">
      <h1>
          车流量统计
      </h1>
      <!-- {{car}} -->
      <div ref="chart" :style="{width: '100%', height: '180px'}"></div>
  </div>
</template>

<script>
export default {
  props: {
    carStatic: {
      type: Array,
      default: () => {
        return []
      }
    }
  },
  data () {
    return {
      car: this.carStatic,
      xData: [],
      seriesData: []
    }
  },
  watch: {
    carStatic (val) {
      this.car = val
      // 处理数据
      if (this.car) {
        this.car.forEach(item => {
          this.xData.push(item.date) // x轴数据
          this.seriesData.push(item.value) // y轴数据
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
            axisLabel: {
              interval: 0,
              rotate: 30
            },
            axisLine: {
              lineStyle: {
                color: '#657ca8', // 颜色
                width: 1 // 粗细
              }
            }
          },
          yAxis: {
            type: 'value',
            splitLine: { // 网格线
              lineStyle: {
                type: 'dashed' // 设置网格线类型 dotted：虚线   solid:实线
              },
              show: false // 隐藏或显示
            },
            axisLine: {
              lineStyle: {
                color: '#657ca8', // 颜色
                width: 0 // 粗细
              }
            }
          },
          grid: { // 解决y轴数值太大，展示不全
            left: 55
          },
          tooltip: {
            trigger: 'axis',
            transitionDuration:0,//echart防止tooltip的抖动
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
            //     normal: {
            //         color: '#f45e23' // 改变区域颜色
            //     }
            // },
            itemStyle: {
              normal: {
                color: '#f45e23', // 改变折线点的颜色
                lineStyle: {
                  color: '#f45e23', // 改变折线颜色
                  width: 5
                }
              }
            },
            markPoint: {
              symbol: 'pin',
              data: [
                { type: 'max', name: '最大值' },
                { type: 'min', name: '最小值' }
              ]
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
</style>
