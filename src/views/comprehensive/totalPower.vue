<template>
  <div class="box">
      <h1>
        <i></i>
        <span>总能耗</span>
      </h1>
      <div>
        {{total}}
      </div>
      <div ref="chart" :style="{width: '100%', height: '300px'}"></div>
  </div>
</template>

<script>
export default {
  props: {
    total: {
      type: Object,
      default: () => {
        return {}
      }
    }
  },
  mounted () {
    this.drawLine();
  },
  methods: {
    drawLine() {
      const chart = this.$refs.chart
      if (chart) {
        const myChart = this.$echarts.init(chart)
        const option = {
          xAxis: {
              type: 'category',
              data: ['01月', '02月', '03月', '04月', '05月', '06月', '07月', '08月', '09月', '10月', '11月', '12月']
          },
          yAxis: {
              type: 'value'
          },
          barWidth:25,
          series: [{
              data: [120, 200, 150, 80, 70, 110, 130, 120, 200, 150, 80, 70],
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
    }
  }
}
</script>

<style lang="scss" scoped>
  .box {
    background: #fff;
    box-shadow: 0 0 10px 0 rgba(0,0,0,.1);
    padding: 5px;
    border-radius: 3px;
    margin-bottom: 10px;
    h1 {
      color: #333;
      font-size: 14px;
      font-weight: normal;
      display: flex;
      align-items: center;
      padding-left: 10px;
      padding-right: 10px;
      i {
        display: block;
        width: 3px;
        height: 16px;
        background: #ccc;
        border-radius: 1px;
        margin-right: 8px;
      }
    }
  }
</style>
