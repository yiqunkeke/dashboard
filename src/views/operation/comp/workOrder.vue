<template>
  <div class="box">
      <h1>
        今日工单各维度统计
      </h1>
      <!-- {{work}} -->
      <!-- <div class="box-wrapper">
        <div ref="chart" :style="{width: '100%', height: '100%'}"></div>
      </div> -->
      <div class="box-wrapper">
        <div class="inner">
          <div ref="chart" :style="{width: '100%', height: '80%'}"></div>
          <p>工程类工单</p>
        </div>
        <div class="inner">
          <div ref="chart2" :style="{width: '100%', height: '80%'}"></div>
          <p>服务类工单</p>
        </div>
      </div>
  </div>
</template>

<script>
export default {
  props: {
    workOrder: {
      type: Object,
      default: () => {
        return {}
      }
    },
    serveOrder: {
      type: Object,
      default: () => {
        return {}
      }
    }
  },
  data () {
    return {
      work: this.workOrder,
      serve: this.serveOrder,
      seriesDataCircle: [], // 饼图数据
      seriesDataCircle2: [],
      xDataCircle: []
    }
  },
  watch: {
    workOrder (val) {
      this.work = val
      // 数据处理
      console.log(this.work)
      this.work.listDimensions.forEach(item => {
        this.xDataCircle.push(item.desc)
        this.seriesDataCircle.push({
          value: Number(item.value),
          name: item.desc
        })
      })
      this.drawCircle()
    },
    serveOrder (val) {
      this.serve = val
      // 数据处理
      console.log('serveOrder',this.serve)
      this.serve.listDimensions.forEach(item => {
        this.xDataCircle.push(item.desc)
        this.seriesDataCircle2.push({
          value: Number(item.value),
          name: item.desc
        })
      })
      this.drawCircle2()
    }
  },
  methods: {
    drawCircle () {
      const chart = this.$refs.chart
      // console.log(this.xDataCircle)
      // console.log(this.seriesDataCircle)
      if (chart) {
        const myChart = this.$echarts.init(chart)
        const option = {
          // title: {
          //   // text: '当月营收',
          //   subtext: `总数${this.work.workOrderTotal}`,
          //   left: 'center'
          // },
          tooltip: {
            trigger: 'item',
            formatter: '{a} <br/>{b} : {c} ({d}%)',
            confine: true,
            transitionDuration:0,//echart防止tooltip的抖动
          },
          color: ['#ffd074', '#00deff', '#0080f8', '#1b51ff', '#2a00ff', '#518ddf'],
          legend: {
            orient: 'vertical',
            right: 0,
            top: 10,
            data: this.xDataCircle,
            textStyle: {
              color: '#ffffff'
            },
            icon: 'circle',
            itemWidth: 10,
            itemHeight: 10
          },
          series: [
            {
              name: '工程类工单',
              type: 'pie',
              radius: ['50%', '75%'],
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
      if (chart) {
        const myChart = this.$echarts.init(chart)
        const option = {
          tooltip: {
            trigger: 'item',
            formatter: '{a} <br/>{b} : {c} ({d}%)',
            position: 'inside',
            confine: true
          },
          color: ['#ffd074', '#00deff', '#0080f8', '#1b51ff', '#2a00ff', '#518ddf'],
          legend: {
            orient: 'vertical',
            right: 0,
            top: 10,
            data: this.xDataCircle,
            textStyle: {
              color: '#ffffff'
            },
            icon: 'circle',
            itemWidth: 10,
            itemHeight: 10
          },
          series: [
            {
              name: '服务类工单',
              type: 'pie',
              radius: ['50%', '75%'],
              center: ['50%', '50%'],
              avoidLabelOverlap: false,
              label: {
                show: false,
                position: 'center'
              },
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
@import '~@/assets/styles/box.scss';
.box-wrapper {
    display: flex;
    height: 100%;
    .inner {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      flex: 1;
      p {
        color: #fff;
        font-size: .18rem;
      }
    }
}
</style>
