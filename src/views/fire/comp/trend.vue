/**
 * 设备报警类型趋势
 * 创建时间：2020-08-13
 * 创建人：李静科 20017906
 */
<template>
  <div class="box">
      <h1>
        设备报警类型趋势
      </h1>
      <!-- {{onlineStatus}} -->
      <div class="chart">
        <div ref="chart" :style="{width: '100%', height: '100%'}"></div>
      </div>
  </div>
</template>

<script>
export default {
  props: {
    trend: {
      type: Array,
      default: () => {
        return []
      }
    }
  },
  data () {
    return {
      tre: this.trend,
      legendData: [],
      xAxisData: [],
      seriesData: []
    }
  },
  watch: {
    trend (val) {
      this.tre = val
      // 数据处理
      console.log('trend',this.tre)
      this.tre[0].dataSet.forEach(item => {
        this.xAxisData.push(item.date)
      })
      const color = ['#409eff', '#FFC82C']
      this.tre.forEach((item, index) => {
        this.legendData.push(item.name)
        const arr = []
        item.dataSet.forEach(it => {
          arr.push(Number(it.value))
        })
        this.seriesData.push({
          name: item.name,
          type: 'line',
          // stack: '总量',
          data: arr
        })
      })
      console.log('seriesData', this.seriesData)
      this.drawLine()
    }
  },
  mounted () {
    this.drawLine()
  },
  methods: {
    drawLine () {
      const chart = this.$refs.chart
      if (chart) {
        const myChart = this.$echarts.init(chart)
        const option = {
          // title: {
          //     text: '折线图堆叠'
          // },
          tooltip: {
            trigger: 'axis',
            transitionDuration:0,//echart防止tooltip的抖动
          },
          color: ['#409eff', '#FFC82C'],
          legend: {
            data: this.legendData,
            textStyle: {
              color: '#ffffff'
            },
            right: 10,
            top: 15
          },
          grid: {
            left: '3%',
            right: '4%',
            bottom: '3%',
            containLabel: true
          },
          xAxis: {
            type: 'category',
            boundaryGap: false,
            data: this.xAxisData,
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
          series: this.seriesData
        }

//        const option = {
//     legend: {
//         // data: ['邮件营销', '联盟广告', '视频广告', '直接访问', '搜索引擎']
//         data: this.legendData
//     },
//     tooltip: {
//       trigger: 'axis',
//       transitionDuration:0,//echart防止tooltip的抖动
//     },
//     grid: {
//         left: '3%',
//         right: '4%',
//         bottom: '3%',
//         containLabel: true
//     },
//     toolbox: {
//         feature: {
//             saveAsImage: {}
//         }
//     },
//     xAxis: {
//         type: 'category',
//         boundaryGap: false,
//         data: ['10月', '11月', '12月', '1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月']
//     },
//     yAxis: {
//         type: 'value'
//     },
//     series: [
//         {
//             name: '传感器异常',
//             type: 'line',
//             stack: '总量',
//             data: [2, 1, 1, 0, 0, 1, 0, 1, 1, 0, 0, 0]
//         },
//         {
//             name: '链接异常',
//             type: 'line',
//             stack: '总量',
//             data: [7, 1, 1, 0, 1, 2, 0,]
//         }
//     ]
// };

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
.chart {
  height: 100%;
}
</style>
