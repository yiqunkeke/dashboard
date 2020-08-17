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
        <div ref="chart" :style="{width: '100%', height: '300px'}"></div>
        <div ref="chart2" :style="{width: '100%', height: '300px'}"></div>
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
      seriesDataCircle: [], // 饼图数据
      xDataCircle: []
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
      // 处理饼图数据
      // console.log(this.inc.month.detailList)

      this.inc.month.detailList.forEach(item => {
        this.xDataCircle.push(item.desc)
        this.seriesDataCircle.push({
          value: Number(item.value),
          name: item.desc
        })
      })

      this.drawLine()
      this.drawCircle()
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
          barWidth: 15,
          series: [{
            data: this.seriesData,
            type: 'bar',
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
    },
    drawCircle () {
      const chart = this.$refs.chart2
      // console.log(this.xDataCircle)
      // console.log(this.seriesDataCircle)
      if (chart) {
        const myChart = this.$echarts.init(chart)
        const option = {
          // title: {
          //     text: '当月营收',
          //     subtext: `当月总收入${this.inc.month.incomeTotal}`,
          //     left: 'left'
          // },
          tooltip: {
            trigger: 'item',
            formatter: '{a} <br/>{b} : {c} ({d}%)'
          },
          // legend: {
          //     orient: 'vertical',
          //     left: 'right',
          //     data: this.xDataCircle
          // },
          series: [
            {
              name: '当月营收',
              type: 'pie',
              radius: ['50%', '65%'],
              // center: ['50%', '60%'],
              data: this.seriesDataCircle,
              emphasis: {
                itemStyle: {
                  shadowBlur: 10,
                  shadowOffsetX: 0,
                  shadowColor: 'rgba(0, 0, 0, 0.5)'
                }
              },
              itemStyle: {
                normal: {
                  // 这里是重点
                  color: function (params) {
                    // 注意，如果颜色太少的话，后面颜色不会自动循环，最好多定义几个颜色
                    var colorList = ['#409eff', '#4fcb74', '#fbd438', '#f04864', '#9860e5', '#37cbcb', '#37a2da', '#e7bcf3', '#8378ea', '#96bfff', '#ff9f7f']
                    return colorList[params.dataIndex]
                  }
                }
              },
              label: {
                formatter: '{a|{a}}{abg|}\n{hr|}\n  {b|{b}：}{c}  {per|{d}%}  ',
                backgroundColor: '#eee',
                borderColor: '#aaa',
                borderWidth: 1,
                borderRadius: 4,
                // shadowBlur:3,
                // shadowOffsetX: 2,
                // shadowOffsetY: 2,
                // shadowColor: '#999',
                // padding: [0, 7],
                rich: {
                  a: {
                    color: '#999',
                    lineHeight: 22,
                    align: 'center'
                  },
                  // abg: {
                  //     backgroundColor: '#333',
                  //     width: '100%',
                  //     align: 'right',
                  //     height: 22,
                  //     borderRadius: [4, 4, 0, 0]
                  // },
                  hr: {
                    borderColor: '#aaa',
                    width: '100%',
                    borderWidth: 0.5,
                    height: 0
                  },
                  b: {
                    fontSize: 16,
                    lineHeight: 33
                  },
                  per: {
                    color: '#eee',
                    backgroundColor: '#334455',
                    padding: [2, 4],
                    borderRadius: 2
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
    .chart {
      display: flex;
    }
  }
</style>
