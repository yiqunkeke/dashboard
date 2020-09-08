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
        <div ref="chart" :style="{width: '50%', height: '100%'}"></div>
        <div ref="chart2" :style="{width: '50%', height: '100%'}"></div>
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
                // formatter: '{a|{a}}{abg|}\n{hr|}\n  {b|{b}：}{c}  {per|{d}%}  ',
                // formatter: '{per|{d}%}',
                formatter: '{c}',
                // backgroundColor: '#09153f',
                // borderColor: '#00fcf9',
                // borderWidth: 1,
                // borderRadius: 4,
                // shadowBlur:3,
                // shadowOffsetX: 2,
                // shadowOffsetY: 2,
                // shadowColor: '#999',
                // padding: [0, 7],
                rich: {
                //   a: {
                //     color: '#999',
                //     lineHeight: 22,
                //     align: 'center'
                //   },
                  // abg: {
                  //     backgroundColor: '#333',
                  //     width: '100%',
                  //     align: 'right',
                  //     height: 22,
                  //     borderRadius: [4, 4, 0, 0]
                  // },
                //   hr: {
                //     borderColor: '#aaa',
                //     width: '100%',
                //     borderWidth: 0.5,
                //     height: 0
                //   },
                //   b: {
                //     fontSize: 12,
                //     lineHeight: 33
                //   },
                  per: {
                    color: '#00fcf9'
                    // backgroundColor: '#09153f',
                    // padding: [2, 4],
                    // borderRadius: 2
                  }
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
                // formatter: '{a|{a}}{abg|}\n{hr|}\n  {b|{b}：}{c}  {per|{d}%}  ',
                // formatter: '{per|{d}%}',
                formatter: '{c}',
                // backgroundColor: '#09153f',
                // borderColor: '#00fcf9',
                // borderWidth: 1,
                // borderRadius: 4,
                // shadowBlur:3,
                // shadowOffsetX: 2,
                // shadowOffsetY: 2,
                // shadowColor: '#999',
                // padding: [0, 7],
                rich: {
                //   a: {
                //     color: '#999',
                //     lineHeight: 22,
                //     align: 'center'
                //   },
                  // abg: {
                  //     backgroundColor: '#333',
                  //     width: '100%',
                  //     align: 'right',
                  //     height: 22,
                  //     borderRadius: [4, 4, 0, 0]
                  // },
                //   hr: {
                //     borderColor: '#aaa',
                //     width: '100%',
                //     borderWidth: 0.5,
                //     height: 0
                //   },
                //   b: {
                //     fontSize: 12,
                //     lineHeight: 33
                //   },
                  per: {
                    color: '#00fcf9'
                    // backgroundColor: '#09153f',
                    // padding: [2, 4],
                    // borderRadius: 2
                  }
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
    height: 100%;
}
</style>
