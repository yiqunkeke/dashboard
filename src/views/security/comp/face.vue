<template>
  <div class="box">
      <h1>
        人脸底库
      </h1>
      <!-- {{face}} -->
      <div ref="chart" :style="{width: '100%', height: '300px'}"></div>
  </div>
</template>

<script>
export default {
    props: {
        face: {
            type: Object,
            default: () => {
                return {}
            }
        }
    },
    data () {
        return {
            face_: this.face,
            xData: [],
            seriesData: [] // 柱状图数据
        }
    },
    watch: {
        face (val) {
            this.face_ = val
            this.drawLine()
        }
    },
    methods: {
        drawLine () {
        const chart = this.$refs.chart
        if (chart) {
            const myChart = this.$echarts.init(chart)
            const option = {
                dataset: {
                    source: [
                        ['amount', 'product'],
                        [ 214, '白名单'],
                        [ 2316, '黑名单'],
                    ]
                },
                grid: {containLabel: true},
                xAxis: {
                    show: false,
                    name: '数量',
                    splitLine: { // 网格线
                        lineStyle: {
                            type: 'dashed' // 设置网格线类型 dotted：虚线   solid:实线
                        },
                        show: false // 隐藏或显示
                    }
                },
                yAxis: {
                    // show: false,
                    type: 'category',
                },
                barWidth: 15,
                series: [
                    {
                        type: 'bar',
                        encode: {
                            // Map the "amount" column to X axis.
                            x: 'amount',
                            // Map the "product" column to Y axis
                            y: 'product'
                        },
                        itemStyle: {
                            normal: {
                                // 这里是重点
                                color: function (params) {
                                // 注意，如果颜色太少的话，后面颜色不会自动循环，最好多定义几个颜色
                                var colorList = ['#fbd438', '#4fcb74', '#409eff', '#f04864', '#9860e5', '#37cbcb', '#37a2da', '#e7bcf3', '#8378ea', '#96bfff', '#ff9f7f']
                                return colorList[params.dataIndex]
                                }
                            }
                            }
                    }
                ]
            };
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
  }
</style>