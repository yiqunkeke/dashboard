<template>
  <div class="box">
      <h1>
        运维态势分析
      </h1>
      <div class="box-wrapper">
          <!-- {{stateData}} -->
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
        state: this.stateData,
        seriesData: []
      }
    },
    watch: {
      stateData (val) {
        this.state = val
        // 数据处理
        this.state.forEach(item => {
          let arr = []
          item.listTypes.forEach(it => {
            if(it.name=='num') {
              arr.push(Number(it.value))
            } else {
              arr.push(Number(it.realRatio))
            }
          })
          this.seriesData.push(
            {
                value: arr,
                name: item.dimension
            }
          )
        })
        // console.log(222, this.seriesData)
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
            color:['#409eff','#4fcb74','#fbd438'],
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
                    { name: '工单数量', max: 100},
                    { name: '工单时效性', max: 100},
                    { name: '工单故障率', max: 100},
                    { name: '工单完成率', max: 100},
                    { name: '运维质量', max: 100}
                ]
            },
            series: [{
                name: '上周 vs 本周',
                type: 'radar',
                data: this.seriesData
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