/**
 * 报修设备占比
 * 创建时间：2020-08-18
 * 创建人：李静科 20017906
 */
<template>
  <div class="box">
      <h1>
        报修设备占比
      </h1>
      <!-- {{ratio}} -->
      <div class="box-wrapper">
        <div ref="chart" :style="{width: '100%', height: '100%'}"></div>
      </div>
  </div>
</template>

<script>
export default {
  props: {
    equipRatio: {
      type: Object,
      default: () => {
        return {}
      }
    }
  },
  data () {
    return {
      ratio: this.equipRatio,
      xData: [],
      seriesData: [] // 柱状图数据
    }
  },
  watch: {
    equipRatio (val) {
      this.ratio = val
      // console.log(this.ratio)
      // 处理数据
      for (const [key, value] of Object.entries(this.ratio)) {
        this.xData.push(key)
        this.seriesData.push(Number(value))
      }
      this.drawLine()
    }
  },
  methods: {
    drawLine () {
      const chart = this.$refs.chart
      if (chart) {
        const myChart = this.$echarts.init(chart)
        const option = {
          tooltip: {
            transitionDuration:0,//echart防止tooltip的抖动
          },
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
          grid: { // 解决y轴数值太大，展示不全
            left: 55
          },
          barWidth: 15,
          series: [{
            data: this.seriesData,
            type: 'bar',
            showBackground: false,
            backgroundStyle: {
              color: 'rgba(220, 220, 220, 0.8)'
            },
            itemStyle: {
              normal: {
                // 这里是重点
                color: function (params) {
                  // 注意，如果颜色太少的话，后面颜色不会自动循环，最好多定义几个颜色
                  var colorList = ['#409eff', '#409eff', '#409eff', '#409eff', '#409eff', '#409eff', '#409eff', '#409eff', '#409eff', '#409eff', '#409eff', '#409eff']
                  return colorList[params.dataIndex]
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
  height: 100%;
}
</style>
