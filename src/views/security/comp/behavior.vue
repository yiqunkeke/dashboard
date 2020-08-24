/**
 * 行为统计
 * 创建时间：2020-08-17
 * 创建人：李静科 20017906
 */
<template>
  <div class="box">
      <h1>
        行为统计
      </h1>
      <!-- {{behavior}} -->
      <div ref="chart" :style="{width: '100%', height: '200px'}"></div>
  </div>
</template>

<script>
export default {
  props: {
    behavior: {
      type: Object,
      default: () => {
        return {}
      }
    }
  },
  data () {
    return {
      behave: this.behavior,
      seriesDataCircle: [], // 饼图数据
      xDataCircle: []
    }
  },
  watch: {
    behavior (val) {
      this.behave = val
      // 数据处理
      // console.log(this.behave)
      this.behave.list.forEach(item => {
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
          //   subtext: `总数${this.behave.total}`,
          //   left: 'center'
          // },
          color: ['#fbb55e', '#00bbf9', '#00f8f7'],
          tooltip: {
            trigger: 'item',
            formatter: '{a} <br/>{b} : {c} ({d}%)'
          },
          legend: {
            orient: 'vertical',
            right: 10,
            top: 70,
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
              name: '行为统计',
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
</style>
