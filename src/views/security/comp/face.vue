<template>
  <div class="box">
      <h1>
        人脸/车牌底库
      </h1>
      <!-- {{face}}
      {{license}} -->
      <div class="box-wrapper">
        <div ref="chart" :style="{width: '50%', height: '160px'}"></div>
        <div ref="chart2" :style="{width: '50%', height: '160px'}"></div>
      </div>
  </div>
</template>

<script>
export default {
  props: {
    face: {
      type: Object,
      default: () => {
        return {}
      }
    },
    license: {
      type: Object,
      default: () => {
        return {}
      }
    }
  },
  data () {
    return {
      face_: this.face,
      licen: this.license,
      xData: ['黑名单', '白名单'],
      seriesData: [],
      seriesData2: []
    }
  },
  watch: {
    face (val) {
      this.face_ = val
      this.seriesDataCircle = [
        {
          value: Number(this.face_[0]),
          name: '黑名单'
        },
        {
          value: Number(this.face_[1]),
          name: '白名单'
        }
      ]
      this.drawCircle()
    },
    license (val) {
      this.licen = val
      this.seriesDataCircle2 = [
        {
          value: Number(this.licen[0]),
          name: '黑名单'
        },
        {
          value: Number(this.licen[1]),
          name: '白名单'
        }
      ]
      this.drawCircle2()
    }
  },
  methods: {
    drawCircle () {
      const chart = this.$refs.chart
      if (chart) {
        const myChart = this.$echarts.init(chart)
        const option = {
          tooltip: {
            trigger: 'item',
            formatter: '{a} <br/>{b} : {c} ({d}%)',
            position: 'inside',
            transitionDuration:0,//echart防止tooltip的抖动
          },
          legend: {
            orient: 'vertical',
            right: 60,
            top: 60,
            data: this.xData,
            textStyle: {
              color: '#ffffff'
            },
            icon: 'circle',
            itemWidth: 10,
            itemHeight: 10
          },
          color: ['#f28413', '#0282ff'],
          series: [
            {
              name: '人脸底库',
              type: 'pie',
              radius: ['50%', '75%'],
              // center: ['50%', '60%'],
              avoidLabelOverlap: false,
              label: {
                show: false,
                position: 'center'
              },
              data: this.seriesDataCircle,
              emphasis: {
                itemStyle: {
                  shadowBlur: 10,
                  shadowOffsetX: 0,
                  shadowColor: 'rgba(0, 0, 0, 0.5)'
                }
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
            position: 'inside'
          },
          color: ['#f28413', '#0282ff'],
          legend: {
            orient: 'vertical',
            right: 60,
            top: 60,
            data: this.xData,
            textStyle: {
              color: '#ffffff'
            },
            icon: 'circle',
            itemWidth: 10,
            itemHeight: 10
          },
          series: [
            {
              name: '车牌底库',
              type: 'pie',
              radius: ['50%', '75%'],
              // center: ['50%', '60%'],
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
}
</style>
