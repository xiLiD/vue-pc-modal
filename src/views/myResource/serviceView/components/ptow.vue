<template>
  <div id="mainn" :style="{ width: girdWidth, height: '140px' }"></div>
</template>

<script>
import * as echarts from "echarts";
export default {
  data() {
    return {
      // data8: [
      //   { value: 1048, name: '搜索引擎' },
      //   { value: 735, name: '直接访问' },
      //   { value: 580, name: '邮件营销' },
      //   { value: 484, name: '联盟广告' },
      //   { value: 300, name: '视频广告' }
      // ]
    };
  },
  computed: {
    girdWidth() {
      return window.innerWidth * 0.19 + "px";
    },
  },
  methods: {
    find() {
      var myChart = echarts.init(document.getElementById("mainn"));
      //需要提前定义一个list放入圆环图中的数据，否则legend里面
      //的formatter函数是访问不到vue里面的data数据的
      // 指定图表的配置项和数据
      var option = {
        tooltip: {
          transitionDuration: 0,
          // trigger: 'item'
        },
        legend: {
          textStyle: {
            fontSize: 11,
            width: 9,
            height: 9,
          },
          itemWidth: 9,
          itemHeight: 7,
          icon: "circle",
          fontSize: "1",
          left: "50%",
          top: "0%",
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
            let p = ((tarValue / total) * 100).toFixed(2);
            console.log(p);
            return name + " " + " " + p + "%";
          },
          data: [
            "产品质量",
            "服务触点",
            "基础服务",
            "网络质量",
            "业务营销",
            "家宽报障",
            "互联网电视",
          ],
        },
        color: [
          "#18B3EC",
          "#EC4DBC",
          "#FB6C76",
          "#B090E9",
          "#F79281",
          "#EFDA7E",
          "#3DD5C2",
        ],
        series: [
          {
            name: "访问来源",
            type: "pie",
            radius: ["50%", "75%"],
            center: ["25%", "50%"], //圆形居中
            top: "10%",
            avoidLabelOverlap: false,
            label: {
              show: false,
              position: "center",
            },
            emphasis: {
              label: {
                show: true,
                fontSize: "10",
                fontWeight: "bold",
              },
            },
            // labelLine: {
            //   show: false
            // },
            data: [
              { value: 148, name: "产品质量" },
              { value: 75, name: "服务触点" },
              { value: 50, name: "基础服务" },
              { value: 44, name: "网络质量" },
              { value: 20, name: "业务营销" },
              { value: 11, name: "家宽报障" },
              { value: 20, name: "互联网电视" },
            ],
          },
        ],
      };
      // 使用刚指定的配置项和数据显示图表。
      myChart.setOption(option);
    },
  },
  mounted() {
    this.find();
  },
};
</script>
<style>
#mainn {
  /* border: 1px solid red; */
  box-sizing: border-box;
  /* top: 25px; */
  /* margin-top: 20px; */
  margin-top: 10px;
}
</style>