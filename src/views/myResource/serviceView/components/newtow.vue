<template>
  <div
    id="maintow"
    :style="{'width': girdWidth,'height':'180px'}"
  ></div>
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
      return 860 - 600 + 'px'
    }
  },
  methods: {
    find () {
      // var i = 0;
      // var colors = ['#393939', '#f5b031'];
      var myChart = echarts.init(document.getElementById('maintow'));

      // 指定图表的配置项和数据
      var option = {
        tooltip: {
          transitionDuration: 0,
          // trigger: 'item'
        },
        legend: {
          textStyle: {
            fontSize: 10,
            width: 10,
            height: 10
          },
          icon: 'circle',

          itemWidth: 8,
          itemHeight: 7,
          fontSize: '6',
          left: '45%',
          top: '30%',
          formatter: function (name) {
            // 获取legend显示内容
            let data = option.series[0].data;
            let total = 0;
            let tarValue = 0;
            for (let i = 0, l = data.length; i < l; i++) {
              total += data[i].value;

              // console.log(name)
              if (data[i].name == name) {
                tarValue = data[i].value;
                // console.log(tarValue)
              }
            }
            let p = (tarValue / total * 100).toFixed(2);
            console.log(p)
            return name + ' ' + ' ' + p + '%';
          },
          data: ['本月号卡数', '网卡号卡数']
        },
        color: ['#00ACFF', '#7CE1A6',],
        series: [
          {
            name: '访问来源',
            type: 'pie',
            radius: ['40%', '60%'],
            center: ['23%', '40%'],//圆形居中
            top: '10%',
            avoidLabelOverlap: false,
            label: {
              show: false,
              position: 'center'
            },
            itemStyle: {
              normal: {
                lineStyle: {
                  // color: function () {
                  //   return colors[i++];
                  // },
                  color: 'red',
                  label: {
                    show: false
                  },
                  labelLine: {
                    show: false
                  }
                }
              }
            },
            emphasis: {
              label: {
                show: true,
                fontSize: '10',
                fontWeight: 'bold'
              }
            },
            // labelLine: {
            //   show: false
            // },
            data: [
              { value: 900, name: '本月号卡数' },
              { value: 300, name: '网卡号卡数' },
            ],

          }
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
#maintow {
  /* box-sizing: border-box; */
  /* top: 15px; */
}
</style>