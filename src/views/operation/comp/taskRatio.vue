<template>
  <div class="box">
      <h1>
        任务完成率
      </h1>
      <div class="box-wrapper">
          <!-- {{taskData}} -->
          <div ref="chart" :style="{width: '100%', height: '250px'}"></div>
      </div>
  </div>
</template>

<script>
export default {
  props: {
    taskData: {
      type: Array,
      default: () => {
        return []
      }
    }
  },
  data () {
    return {
      ratio: this.taskData,
      xData: [],
      completeData: [], // 已完成
      notfinishedeData: [], // 未完成
      cancelData: [] // 已取消
    }
  },
  watch: {
    taskData (val) {
      this.ratio = val
      console.log(this.ratio)
      // 处理数据
      this.ratio.forEach(item => {
        this.xData.push(item.date)
        this.completeData.push(Number(item.completed))
        this.notfinishedeData.push(Number(item.notfinished))
        this.cancelData.push(Number(item.cancel))
      })
      this.drawLine()
    }
  },
  // mounted() {
  //   this.drawLine()
  // },
  methods: {
    drawLine () {
      const chart = this.$refs.chart
      if (chart) {
        const myChart = this.$echarts.init(chart)
        const option = {
          tooltip: {
            trigger: 'axis',
            axisPointer: { // 坐标轴指示器，坐标轴触发有效
              type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
            }
          },
          // legend: {
          //     data: [ '已完成', '未完成', '已取消']
          // },
          color: ['#234cff', '#009af3', '#00fcff'],
          grid: {
            left: '3%',
            right: '4%',
            bottom: '3%',
            containLabel: true
          },
          barWidth: 15,
          xAxis: [
            {
              type: 'category',
              data: this.xData,
              axisLine: {
                lineStyle: {
                  color: '#fff', // 颜色
                  width: 0 // 粗细
                }
              }
            }
          ],
          yAxis: [
            {
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
            }
          ],
          series: [
            {
              name: '已完成',
              type: 'bar',
              stack: '广告',
              data: this.completeData
            },
            {
              name: '未完成',
              type: 'bar',
              stack: '广告',
              data: this.notfinishedeData
            },
            {
              name: '已取消',
              type: 'bar',
              stack: '广告',
              data: this.cancelData
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
@import '~@/assets/styles/box.scss';
.box-wrapper {
  // padding-top: 20px;
}
</style>
