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
      <div>
        {{income}}
      </div>
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
  data() {
    return {
      inc: this.income,
      xData: [],
      seriesData: []
    }
  },
  watch: {
    income (val) {
      this.inc = val
      // 处理数据
      // console.log(this.inc)
      for(let key in this.inc) {
        this.xData.push(key)
        this.seriesData.push(this.inc[key])
      }
      this.drawLine();
      this.drawCircle();
    }
  },
  methods: {
    drawLine() {
      const chart = this.$refs.chart
      if (chart) {
        const myChart = this.$echarts.init(chart)
        const option = {
          xAxis: {
              type: 'category',
              data: this.xData
          },
          yAxis: {
              type: 'value'
          },
          barWidth:25,
          series: [{
              data: this.seriesData,
              type: 'bar',
              showBackground: false,
              backgroundStyle: {
                  color: 'rgba(220, 220, 220, 0.8)'
              }
          }]
        };
        myChart.setOption(option)
        window.addEventListener("resize", function() {
          myChart.resize()
        })
      }
       this.$on('hook:destroyed',()=>{
         window.removeEventListener("resize", function() {
          myChart.resize();
        });
        })
    },
    drawCircle() {
      const chart = this.$refs.chart2
      if (chart) {
        const myChart = this.$echarts.init(chart)
        const option = {
            title: {
                text: '营地当月营收',
                // subtext: '纯属虚构',
                left: 'center'
            },
            tooltip: {
                trigger: 'item',
                formatter: '{a} <br/>{b} : {c} ({d}%)'
            },
            legend: {
                orient: 'vertical',
                left: 'right',
                data: ['客房', '餐饮', '零售', 'KTV', '泳池', '其他']
            },
            series: [
                {
                    name: '访问来源',
                    type: 'pie',
                    radius: ['50%', '70%'],
                    // center: ['50%', '60%'],
                    data: [
                      {value: 335, name: '客房'},
                      {value: 310, name: '餐饮'},
                      {value: 234, name: '零售'},
                      {value: 135, name: 'KTV'},
                      {value: 1548, name: '泳池'},
                      {value: 80, name: '其他'}
                    ],
                    emphasis: {
                        itemStyle: {
                            shadowBlur: 10,
                            shadowOffsetX: 0,
                            shadowColor: 'rgba(0, 0, 0, 0.5)'
                        }
                    }
                }
            ]
        };
        myChart.setOption(option)
        window.addEventListener("resize", function() {
          myChart.resize()
        })
      }
       this.$on('hook:destroyed',()=>{
         window.removeEventListener("resize", function() {
          myChart.resize();
        });
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
