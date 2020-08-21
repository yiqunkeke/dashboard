/**
 * 拖挂房车客房统计
 * 创建时间：2020-08-12
 * 创建人：李静科 20017906
 */
<template>
  <div class="box">
      <h1>
        拖挂房车客房统计
      </h1>
      <div class="box-wrapper">
        <div ref="chart" :style="{width: '50%', height: '112px'}"></div>
        <div class="text">
          <div class="inner">
            <span>总房车数：</span>
            <p>{{car.roomTotal}}</p>
          </div>
          <div class="inner">
            <span>已入住数：</span>
            <p>{{car.checkedIn}}</p>
          </div>
          <!-- <div class="inner">
            <span>入住占比</span>
            <p>{{touringcar.ratio}}</p>
          </div> -->
        </div>
      </div>
  </div>
</template>

<script>
export default {
  props: {
    touringcar: {
      type: Object,
      default: () => {
        return {}
      }
    }
  },
  data () {
    return {
      car: this.touringcar,
      seriesDataCircle: [], // 饼图数据
      xDataCircle: ['已入住', '未入住']
    }
  },
  watch: {
    touringcar (val) {
      this.car = val
      // 数据处理
      // console.log(this.sea)
      this.seriesDataCircle = [
        {
          value: Number(this.car.checkedIn),
          name: '已入住'
        },
        {
          value: Number(this.car.roomTotal - this.car.checkedIn),
          name: '未入住'
        }
      ]
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
          //     // text: '当月营收',
          //     subtext: `${this.sea.roomTotal}`,
          //     left: 'left'
          // },
          tooltip: {
            trigger: 'item',
            formatter: '{a} <br/>{b} : {c} ({d}%)',
            position: 'inside'
          },
          color: ['#00e9db', '#222c4f'],
          // legend: {
          //     orient: 'vertical',
          //     left: 'right',
          //     data: this.xDataCircle
          // },
          series: [
            {
              name: '拖挂房车客房统计',
              type: 'pie',
              radius: ['50%', '75%'],
              // center: ['50%', '60%'],
              avoidLabelOverlap: false,
              label: {
                  show: false,
                  position: 'center'
              },
              data: this.seriesDataCircle,
              emphasis: {
                itemStyle: {
                  shadowBlur: 10,
                  shadowOffsetX: 0,
                  shadowColor: 'rgba(0, 0, 0, 0.5)'
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
.box-wrapper {
      display: flex;
      justify-content: flex-start;
      align-items: center;
      .text {
        color: $white;
        display: flex;
        flex-direction: column;
        .inner {
          display: flex;
          align-items: center;
          p {
            font-size: 20px;
            margin: 0;
            font-family: Arial, Helvetica, sans-serif;
          }
          span {
            font-size: 12px;
            margin-bottom: 8px;
            margin-top: 8px;
            display: block;
          }
        }
      }
    }
</style>
