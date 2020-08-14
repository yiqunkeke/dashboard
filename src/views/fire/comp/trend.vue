/**
 * 设备报警类型趋势
 * 创建时间：2020-08-13
 * 创建人：李静科 20017906
 */
<template>
  <div class="box">
      <h1>
        设备报警类型趋势
      </h1>
      <!-- {{onlineStatus}} -->
      <div ref="chart" :style="{width: '100%', height: '300px'}"></div>
  </div>
</template>

<script>
export default {
  props: {
    trend: {
      type: Array,
      default: () => {
        return []
      }
    }
  },
  data () {
    return {
      tre: this.trend,
      legendData: [],
      xAxisData: [],
      seriesData: []
    }
  },
  watch: {
    trend (val) {
      this.tre = val
      // 数据处理
      console.log(this.tre)
      this.tre[0].dataSet.forEach(item => {
        this.xAxisData.push(item.date)
      })
      let color = ['#409eff','#FFC82C']
      this.tre.forEach((item, index) => {
        this.legendData.push(item.name)
        let arr = []
        item.dataSet.forEach(it => {
          arr.push(Number(it.value))
        })
        this.seriesData.push({
          name: item.name,
          type: 'line',
          stack: '总量',
          data: arr,
          itemStyle : {
            normal : {
              color: color[index], //改变折线点的颜色
              lineStyle: {
                color: color[index] //改变折线颜色
              }
            }
          }
        })
      })
      this.drawLine()
    }
  },
  mounted () {
      this.drawLine()
  },
  methods: {
    drawLine() {
      const chart = this.$refs.chart
      if (chart) {
        const myChart = this.$echarts.init(chart)
        const option = {
            // title: {
            //     text: '折线图堆叠'
            // },
            tooltip: {
                trigger: 'axis'
            },
            legend: {
                data: this.legendData
            },
            grid: {
                left: '3%',
                right: '4%',
                bottom: '3%',
                containLabel: true
            },
            xAxis: {
                type: 'category',
                boundaryGap: false,
                data: this.xAxisData
            },
            yAxis: {
                type: 'value',
                splitLine: {  //网格线
                  lineStyle: {
                      type:'dashed'    //设置网格线类型 dotted：虚线   solid:实线
                  },
                  show:true //隐藏或显示
                }
            },
            series: this.seriesData
        }

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
  }
</style>
