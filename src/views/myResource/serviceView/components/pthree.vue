<template>

  <!-- <span class="">近半年业务发展走势</span> -->
  <div
    id="main"
    :style="{'width': girdWidth,'height':'170px'}"
  ></div>
  <!-- <div>近半年业务发展走势</div> -->

</template>
<script>
import * as echarts from 'echarts';
export default {
  data () {
    return {

    }
  },
  computed: {
    girdWidth () {
      return window.innerWidth * 0.35 - 5 + 'px'
    }
  },
  methods: {
    find () {
      var myChart = echarts.init(document.getElementById('main'));

      // 指定图表的配置项和数据
      var option = {
        // title: {
        //   text: '近半年业务发展走势'
        // },
        tooltip: {
          transitionDuration: 0,
          trigger: 'axis',
          axisPointer: {
            type: 'shadow'
          }
        },
        axisPointer: {
          type: 'cross',
          crossStyle: {
            color: '#999'
          }
        },
        color: ['#A772E9', '#F79281', '#EFDA7E', '#3DD5C2', '#18B3EC', '#ef5b9c', '#00CCCC'],
        barWidth: 7,
        legend: {
          textStyle: {
            fontSize: 10,
            width: 10,
            height: 10
          },
          lineStyle: {
            // width: 10,
            // height: 10
          },
          right: '2px',
          top: '10px',
          // orient: 'vertical',
          // width: '500px',
          // height: '100px',
          icon: 'rect',
          itemWidth: 10,
          itemHeight: 10,
          // data: ['', '走势'],
          // itemGap: 10,
          // y: 'top',
          // color: ['#8552a1', '#8552a1', '#8552a1', '#8552a1', '#8552a1'],
          data: ['移动宽带', '魔百盒', '智能组网', '语音遥控', '家庭安防', '全部', '走势']
        },

        grid: {
          x: 38,
          y: 150,
          x2: 43,
          y2: 130,
          borderWidth: 5
        },
        toolbox: {
          show: true,
          orient: 'vertical',
          left: 'right',
          top: 'center',
          feature: {
            // dataView: { show: true, readOnly: false },
            // magicType: { show: true, type: ['line', 'bar'] },
            // restore: { show: true },
            // saveAsImage: { show: true }
            // mark: { show: true },
            // dataView: { show: true, readOnly: false },
            // magicType: { show: true, type: ['line', 'bar', 'stack', 'tiled'] },
            // restore: { show: true },
            // saveAsImage: { show: true }
          }
        },
        xAxis: [
          {
            type: 'category',
            // axisTick: { show: false },
            data: ['1月', '2月', '3月', '4月', '5月'],
            axisTick: {
              show: false,
            },
            splitLine: {     //网格线
              show: false
            }
          }
        ],
        yAxis: [
          {
            name: '(万人)',
            type: 'value',
            right: '0px',
            axisTick: {
              show: false,
            },
            splitLine: {
              show: true,
              lineStyle: {
                type: 'dashed'
              }
            },
          },
          // {
          //   name: "调用成功次数",
          //   type: "bar",
          //   data: [1, 2, 3, 4, 2, 3, 3],
          //   barWidth: 10,
          //   yAxisIndex: 0,
          //   //显示颜色
          //   itemStyle: {
          //     normal: { color: "blue" }
          //   }
          // },
          {
            type: 'value',
            // name: '温度',
            min: 0,
            max: 100,
            position: 'right',
            interval: 20,
            splitLine: {
              show: true,
              lineStyle: {
                type: 'dashed'
              }
            },
            //     "axisLine":{       //y轴
            //   "show":false

            // },
            axisLine: {
              // color: '#FFFFFF',
              show: false,
              lineStyle: {
                // show: false,
                type: 'value'
              },
            },
            axisLabel: {
              formatter: '{value} %'
            }
          }
        ],
        series: [
          {
            name: '移动宽带',
            type: 'bar',
            // barGap: 0,
            barGap: '20%',
            barCategoryGap: '0%',
            stack: 'sum',
            itemStyle: {
              normal: {
                color: function (params) {
                  //设置柱状图的显示颜色
                  var colorList = [
                    '#A772E9', '#A772E9', '#A772E9', '#A772E9', '#A772E9',
                  ]
                  return colorList[params.dataIndex]
                },
              }
            },

            // ---------------
            emphasis: {
              focus: 'series'
            },
            data: [420, 332, 301, 334, 390]
          },
          {
            name: '魔百盒',
            type: 'bar',
            itemStyle: {
              normal: {
                color: function (params) {
                  //自定义颜色
                  var colorList = [
                    '#F79281', '#F79281', '#F79281', '#F79281', '#F79281'
                  ];
                  return colorList[params.dataIndex]
                }
              }
            },
            emphasis: {
              focus: 'series'
            },
            data: [220, 482, 191, 234, 290]
          },
          {
            name: '智能组网',
            type: 'bar',
            itemStyle: {
              normal: {
                color: function (params) {
                  //自定义颜色
                  var colorList = [
                    '#EFDA7E', '#EFDA7E', '#EFDA7E', '#EFDA7E', '#EFDA7E'
                  ];
                  return colorList[params.dataIndex]
                }
              }
            },
            emphasis: {
              focus: 'series'
            },
            data: [150, 232, 401, 154, 190]
          },
          {
            name: '语音遥控',
            type: 'bar',
            itemStyle: {
              normal: {
                color: function (params) {
                  //自定义颜色
                  var colorList = [
                    '#3DD5C2', '#3DD5C2', '#3DD5C2', '#3DD5C2', '#3DD5C2'
                  ];
                  return colorList[params.dataIndex]
                }
              }
            },
            emphasis: {
              focus: 'series'
            },

            data: [195, 127, 151, 469, 130]
          },
          {
            name: '家庭安防',
            type: 'bar',
            itemStyle: {
              normal: {
                color: function (params) {
                  //自定义颜色
                  var colorList = [
                    '#18B3EC', '#18B3EC', '#18B3EC', '#18B3EC', '#18B3EC'
                  ];
                  return colorList[params.dataIndex]
                }
              }
            },
            emphasis: {
              focus: 'series'
            },
            data: [230, 221, 281, 269, 470]
          },
          {
            name: '全部',
            type: 'bar',
            itemStyle: {
              normal: {
                color: function (params) {
                  //自定义颜色
                  var colorList = [
                    '#ef5b9c', '#ef5b9c', '#ef5b9c', '#ef5b9c', '#ef5b9c'
                  ];
                  return colorList[params.dataIndex]
                }
              }
            },
            emphasis: {
              focus: 'series'
            },
            data: [258, 107, 151, 120, 260]
          },

          {
            name: '走势',
            type: 'line',
            yAxisIndex: 0,
            data: ['233', '145', '245', '133', '445',],

            label: {
              // show: true,
              // formatter: '{c}'
            }
          }
          // ----------
        ]
      };

      // 使用刚指定的配置项和数据显示图表。
      myChart.setOption(option);
    }
  },
  mounted () {
    this.find()
  }
}
</script>

<style>
#main {
  /* border: 1px solid red; */
  box-sizing: border-box;
  /* padding: 15px; */
  /* margin-top: 15px; */
  /* display: flex;
  justify-content: center;
  align-items: center; */
}
.a {
  font-size: 12px;
  /* box-sizing: border-box; */
  /* display: inline-block; */
  /* border: 1px solid red; */
}
</style>