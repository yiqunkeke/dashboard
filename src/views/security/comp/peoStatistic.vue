
<template>
  <div class="box">
      <h1>
          人流量统计
      </h1>
      总人流量: {{peo.allPeople}} 日访问量: {{peo.todayPeople}}
      <div class="box-wrapper">
          <!-- {{peoStatic}} -->
        <div ref="chart" :style="{width: '100%', height: '270px'}"></div>
      </div>
  </div>
</template>

<script>
export default {
    props: {
        peoStatic: {
            type: Object,
            default: () => {
                return {}
            }
        }
    },
    data () {
        return {
            peo: this.peoStatic,
            listPeople:[],
            xData: [],
            seriesData: []
        }
    },
    watch: {
        peoStatic (val) {
            this.peo = val
            // 处理数据
            this.listPeople = this.peo.listPeople
            if (this.peo && this.listPeople) {
                this.listPeople.forEach(item => {
                    this.xData.push(item.date) // x轴数据
                    this.seriesData.push(item.value) // y轴数据
                })
                this.drawLine()
            }
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
                boundaryGap: false,
                data: this.xData,
                axisLabel: {
                    interval: 0,
                    rotate: 30
                },
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
            tooltip: {
                trigger: 'axis',
                axisPointer: {
                type: 'cross',
                label: {
                    backgroundColor: '#6a7985'
                }
                }
            },
            series: [{
                data: this.seriesData,
                type: 'line',
                areaStyle: {
                normal: {
                    color: '#409eff' // 改变区域颜色
                }
                },
                itemStyle: {
                normal: {
                    color: '#409eff', // 改变折线点的颜色
                    lineStyle: {
                    color: '#409eff' // 改变折线颜色
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
    .box-wrapper {
      display: flex;
      justify-content: space-between;
      padding-left: 10px;
      padding-right: 10px;
      padding-bottom: 10px;
    }
  }
</style>