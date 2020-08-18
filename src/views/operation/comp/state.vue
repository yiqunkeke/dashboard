<template>
  <div class="box">
      <h1>
        运维态势分析
      </h1>
      <div class="box-wrapper">
          {{stateData}}
          <div ref="chart" :style="{width: '100%', height: '300px'}"></div>
      </div>
  </div>
</template>

<script>
export default {
    props: {
        stateData: {
            type: Array,
            default: () => {
                return []
            }
        }
    },
    data () {
      return {
        state: this.stateData
      }
    },
    watch: {
      stateData (val) {
        this.state = val
        // 数据处理

        this.draw()
      }
    },
    methods: {
      draw() {
        const chart = this.$refs.chart
      if (chart) {
        const myChart = this.$echarts.init(chart)
        const option = {
            tooltip: {},
            legend: {
                data: ['预算分配', '实际开销']
            },
            radar: {
                // shape: 'circle',
                name: {
                    textStyle: {
                        color: '#fff',
                        backgroundColor: '#999',
                        borderRadius: 3,
                        padding: [3, 5]
                    }
                },
                indicator: [
                    { name: '销售', max: 6500},
                    { name: '管理', max: 16000},
                    { name: '信息技术', max: 30000},
                    { name: '客服', max: 38000},
                    { name: '研发', max: 52000},
                    { name: '市场', max: 25000}
                ]
            },
            series: [{
                name: '预算 vs 开销',
                type: 'radar',
                data: [
                    {
                        value: [4300, 10000, 28000, 35000, 50000, 19000],
                        name: '预算分配'
                    },
                    {
                        value: [5000, 14000, 28000, 31000, 42000, 21000],
                        name: '实际开销'
                    }
                ]
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
        padding:10px;
        .el-pagination {
          margin-top: 10px;
        }
    }
  }
</style>