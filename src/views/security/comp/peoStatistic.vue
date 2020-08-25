
<template>
  <div class="box">
      <h1>
          人流量统计
      </h1>
      <div class="total">
        <span>总人流量: {{peo.allPeople}} </span>
        <em>日访问量: {{peo.todayPeople}}</em>
      </div>
      <div ref="chart" :style="{width: '100%', height: '220px'}"></div>
  </div>
</template>

<script>
export default {
  props: {
    peoStatic: {
      type: Object,
      default: () => {
        return {}
      }
    }
  },
  data () {
    return {
      peo: this.peoStatic,
      listPeople: [],
      xData: [],
      seriesData: []
    }
  },
  watch: {
    peoStatic (val) {
      this.peo = val
      // 处理数据
      this.listPeople = this.peo.listPeople
      if (this.peo && this.listPeople) {
        this.listPeople.forEach(item => {
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
                type: 'solid' // 设置网格线类型 dotted：虚线   solid:实线
                // color: '#0f1b42'
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
            //         color: '#00fcf9' // 改变区域颜色
            //     }
            // },
            itemStyle: {
              normal: {
                color: '#00fcf9', // 改变折线点的颜色
                lineStyle: {
                  color: '#00fcf9', // 改变折线颜色
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
.total {
    display: flex;
    font-size: 14px;
    padding: 24px 34px 0;
    justify-content: space-between;
    span {
        color: $white;
    }
    em {
        color: #00fcf9;
    }
}
</style>
