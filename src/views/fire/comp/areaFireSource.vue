/**
 * 区域火源报警比重
 * 创建时间：2020-08-14
 * 创建人：李静科 20017906
 */
<template>
  <div class="box">
      <h1>
        区域火源报警比重
      </h1>
      <!-- {{areaFire}} -->
      <div ref="chart" :style="{width: '100%', height: '300px'}"></div>
  </div>
</template>

<script>
export default {
  props: {
    areaFire: {
      type: Object,
      default: () => {
        return {}
      }
    }
  },
  data () {
    return {
      area: this.areaFire,
      seriesDataCircle: [], // 饼图数据
      xDataCircle: []
    }
  },
  watch: {
    areaFire (val) {
      this.area = val
      // 数据处理
      console.log(this.area)
      this.area.areaFireList.forEach(item => {
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
    drawCircle() {
      const chart = this.$refs.chart
      // console.log(this.xDataCircle)
      // console.log(this.seriesDataCircle)
      if (chart) {
        const myChart = this.$echarts.init(chart)
        const option = {
            title: {
                // text: '当月营收',
                subtext: `消防报警总数${this.area.fireSourceTotal}`,
                left: 'center'
            },
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
                    name: '区域火源报警比重',
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
          　　　　　　　　//这里是重点
                          color: function(params) {
                            //注意，如果颜色太少的话，后面颜色不会自动循环，最好多定义几个颜色
                              var colorList = ['#409eff', '#4fcb74', '#fbd438','#f04864', '#9860e5', '#37cbcb', '#37a2da', '#e7bcf3', '#8378ea', '#96bfff', '#ff9f7f'];
                              return colorList[params.dataIndex]
                          }
                      }
                  },
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
  }
</style>
