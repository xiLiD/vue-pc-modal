<template>
  <div class="custom-notice">
    <div class="title-des">
      <div class="notice-nav"></div>
      <div class="notice-title">
        <h2>客户重点数据通报</h2>
      </div>
    </div>
    <div class="target-watch">
      <h2>一、指标监控</h2>
      <div>
        <div>
          <p>
            <span>1、手机潜在不满意客户数:</span> <span>10000户</span>
            <span> 环比 :</span><span>3%</span>
          </p>
          <p class="details">
            5月份手机不满意客户数共计19.03万,占比手机客户数9.20%,其中,排名前三的是长沙(10.02%)、邵阳(9.02%)、郴州(9.00%)
          </p>
        </div>
        <div
          class="echarts-view echarts-unstatisfy"
          id="unstatisfy"
          style="width: 350px; height: 280px"
        ></div>
        <div>
          <p>
            <span>2、投诉量:</span> <span>20000次</span> <span> 万投率 :</span
            ><span>61.77%</span>
          </p>
          <p class="details">
            5月份投诉量共计26.04万次,万投率61.77%。其中,排行前三的是长沙(89.87%)、岳阳(66.37%)、衡阳(58.34%)
          </p>
        </div>
        <div
          class="echarts-view echarts-complain"
          id="complain"
          style="width: 350px; height: 280px"
        ></div>
      </div>
      <div class=""></div>
    </div>
    <swipper-table></swipper-table>
    <div class="table-watch"></div>
  </div>
</template>
<script>
import echarts from "echarts";
import options from "./option.js";
import swipperTable from "./components/table.vue";
export default {
  components: {
    swipperTable,
  },
  data() {
    return {};
  },
  methods: {
    initEcharts() {
      let unstatisfy = echarts.init(document.getElementById("unstatisfy"));
      let complain = echarts.init(document.getElementById("complain"));
      unstatisfy.setOption(options.unstatisfy);
      complain.setOption(options.complain);
    },
  },
  mounted() {
    this.initEcharts();
  },
};
</script>
<style lang="less">
.custom-notice {
  padding: 15px;
  box-sizing: border-box;
  width: 100%;
  .echarts-view {
    margin: 0 auto;
  }
  .target-watch {
    margin-top: 10px;
    .details {
      color: #aaa;
      font-size:12px;
      line-height:1.5;
    }
    div {
      p {
        font-size: 14px;
        &:nth-child(1) {
          margin: 10px 0;
        }
        &:nth-child(2) {
          margin-bottom: 10px;
        }
      }
    }
  }
}
</style>