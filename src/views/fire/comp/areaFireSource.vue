/**
 * 区域火源报警比重
 * 创建时间：2020-08-14
 * 创建人：李静科 20017906
 */
<template>
  <div class="box">
      <h1>
        区域火源报警比重
      </h1>
      <!-- {{areaFire}} -->
      <div class="chart">
        <div ref="chart" :style="{width: '100%', height: '100%'}"></div>
      </div>
  </div>
</template>

<script>
export default {
  props: {
    areaFire: {
      type: Object,
      default: () => {
        return {}
      }
    }
  },
  data () {
    return {
      area: this.areaFire,
      seriesDataCircle: [], // 饼图数据
      xDataCircle: []
    }
  },
  watch: {
    areaFire (val) {
      this.area = val
      // 数据处理
      console.log(this.area)
      this.area.areaFireList.forEach(item => {
        this.xDataCircle.push(item.desc)
        this.seriesDataCircle.push({
          value: Number(item.value),
          name: item.desc
        })
      })
      this.drawCircle()
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
          //   subtext: `消防报警总数${this.area.fireSourceTotal}`,
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
            right: 10,
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
              name: '区域火源报警比重',
              type: 'pie',
              radius: ['50%', '75%'],
              // center: ['50%', '60%'],
              data: this.seriesDataCircle,
              emphasis: {
                itemStyle: {
                  shadowBlur: 10,
                  shadowOffsetX: 0,
                  shadowColor: 'rgba(0, 0, 0, 0.5)'
                }
              },
              // itemStyle: {
              //   normal: {
              //     // 这里是重点
              //     color: function (params) {
              //       // 注意，如果颜色太少的话，后面颜色不会自动循环，最好多定义几个颜色
              //       var colorList = ['#409eff', '#4fcb74', '#fbd438', '#f04864', '#9860e5', '#37cbcb', '#37a2da', '#e7bcf3', '#8378ea', '#96bfff', '#ff9f7f']
              //       return colorList[params.dataIndex]
              //     }
              //   }
              // },
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
.chart {
  height: 100%;
}
</style>
