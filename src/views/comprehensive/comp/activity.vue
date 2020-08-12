<template>
  <div class="box">
      <h1>
        活动情况预测
      </h1>
      <div class="box-wrapper">
        <!-- {{activity}} -->
        <div ref="chart" :style="{width: '100%', height: '270px'}"></div>
      </div>
  </div>
</template>

<script>
export default {
  props: {
    activity: {
      type: Object,
      default: () => {
        return {}
      }
    }
  },
  data() {
    return {
      act: this.activity,
      realtime: [],
      xData: [],
      seriesData: []
    }
  },
  watch: {
    activity (val) {
      this.act = val
      this.realtime = this.act.realTime
      // 处理数据
      if(this.act && this.realtime) {
        this.realtime.forEach(item => {
          this.xData.push(item.time) // x轴数据
          this.seriesData.push(item.activityNum) // y轴数据
        })
        this.drawLine();
      }
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
              boundaryGap: false,
              data: this.xData
          },
          yAxis: {
              type: 'value'
          },
          series: [{
              data: this.seriesData,
              type: 'line',
              areaStyle: {}
          }]
      };
      myChart.setOption(option)
        window.addEventListener("resize", function() {
          myChart.resize()
        })
      }
      this.$on('hook:destroyed', () => {
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
    .box-wrapper {
      display: flex;
      justify-content: space-between;
      padding-left: 10px;
      padding-right: 10px;
      padding-bottom: 10px;
    }
  }
</style>