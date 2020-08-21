/**
 * 营地营收
 * 创建时间：2020-08-12
 * 创建人：李静科 20017906
 */
<template>
  <div class="box">
      <h1>
        营地营收
      </h1>
      <!-- <div>
        {{income}}
      </div> -->
      <div class="chart">
        <div ref="chart" :style="{width: '100%', height: '282px'}"></div>
      </div>
  </div>
</template>

<script>
export default {
  props: {
    income: {
      type: Object,
      default: () => {
        return {}
      }
    }
  },
  data () {
    return {
      inc: this.income,
      xData: [],
      seriesData: [], // 柱状图数据
    }
  },
  watch: {
    income (val) {
      this.inc = val
      // 处理柱状图数据
      for (const key in this.inc) {
        if (key !== 'month') {
          this.xData.push(`${key}月`)
          this.seriesData.push(this.inc[key])
        }
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
          xAxis: {
            type: 'category',
            data: this.xData,
            axisLabel: {
              interval: 0
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
          tooltip: {},
          color: ['#409eff'],
          barWidth: 15,
          series: [{
            data: this.seriesData,
            type: 'bar',
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
    }
  }
}
</script>

<style lang="scss" scoped>
@import '~@/assets/styles/box.scss';
</style>
