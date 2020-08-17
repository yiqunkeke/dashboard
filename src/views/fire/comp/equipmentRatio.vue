/**
 * 设备占比
 * 创建时间：2020-08-13
 * 创建人：李静科 20017906
 */
<template>
  <div class="box">
      <h1>
        消防设备占比
      </h1>
      <!-- {{ratio}} -->
      <div ref="chart" :style="{width: '100%', height: '300px'}"></div>
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
          xAxis: {
            type: 'category',
            data: this.xData,
            axisLabel: {
              interval: 0
            }
          },
          yAxis: {
            type: 'value',
            splitLine: { // 网格线
              lineStyle: {
                type: 'dashed' // 设置网格线类型 dotted：虚线   solid:实线
              },
              show: true // 隐藏或显示
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
  .box {
    background: #fff;
    box-shadow: 0 0 10px 0 rgba(0,0,0,.1);
    border-radius: 3px;
    margin-bottom: 10px;
    h1 {
      color: #333;
      font-size: 14px;
      font-weight: normal;
      display: flex;
      align-items: center;
      padding: 15px 20px;
      margin: 0;
      border-bottom: 1px solid #eee;
    }
  }
</style>
