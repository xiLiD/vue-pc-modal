<template>
  <div class="unit-wrapper">
    <div class="unit-container">
      <div class="contain-left">
        <div class="common-shadow" :style="{ height: getHeight('source-l') }">
          <div class="modules-no-grid" v-show="!checkGrid">
            <div class="modules-title">
              <div class="tit">网络资源情况</div>
              <!-- <div class="modules-more">更多</div> -->
            </div>
            <ul class="contain_list right_list source_list">
              <li>
                <p><span>23213214</span></p>
                <p>宽带小区</p>
              </li>
              <li>
                <p><span>23213214</span></p>
                <p>移动宽带覆盖小区</p>
              </li>
              <li>
                <p><span>23213214</span></p>
                <p>千兆宽带覆盖小区</p>
              </li>
              <li>
                <p><span>23213214</span></p>
                <p>基站小区</p>
              </li>
              <li>
                <p><span>23213214</span></p>
                <p>2G基站小区</p>
              </li>
              <li>
                <p><span>23213214</span></p>
                <p>4G基站小区</p>
              </li>
              <li>
                <p><span>23213214</span></p>
                <p>5G基站小区</p>
              </li>
              <li>
                <p><span>23213214</span></p>
                <p>总用户数</p>
              </li>
              <li>
                <p><span>23213214</span></p>
                <p>分光器总数</p>
              </li>
              <li>
                <p><span>23213214</span></p>
                <p>ONU总数</p>
              </li>
              <li>
                <p><span>23213214</span></p>
                <p>光交箱总数</p>
              </li>
              <li>
                <p><span>23213214</span></p>
                <p>总端口数</p>
              </li>
            </ul>
          </div>
          <div class="modules-grid" v-show="checkGrid">
            <div class="modules-title">
              <div class="tit">网络资源情况</div>
              <!-- <div class="modules-more">更多</div> -->
            </div>
            <ul class="contain_list right_list source_list">
              <li>
                <p><span>是</span></p>
                <p>移动宽带覆盖小区</p>
              </li>
              <li>
                <p><span>否</span></p>
                <p>千兆宽带覆盖小区</p>
              </li>
              <li>
                <p><span>23213214</span></p>
                <p>总用户数</p>
              </li>

              <li>
                <p><span>23213214</span></p>
                <p>分光器总数</p>
              </li>
              <li>
                <p><span>23213214</span></p>
                <p>ONU总数</p>
              </li>
              <li>
                <p><span>23213214</span></p>
                <p>光交箱总数</p>
              </li>
              <li>
                <p><span>23213214</span></p>
                <p>总端口数</p>
              </li>
              <li>
                <p><span>23213214</span></p>
                <p>使用端口数</p>
              </li>
              <li>
                <p><span>23213214</span></p>
                <p>剩余端口数</p>
              </li>
            </ul>
          </div>
        </div>
        <div
          class="common-shadow top-10"
          :style="{ height: getHeight('source-l') }"
        >
          <div class="modules-title">
            <div class="tit">端口使用情况</div>
          </div>
          <div
            class="echarts-type"
            id="port-use"
            style="width: 270px; height: 300px"
          ></div>
        </div>
      </div>
      <div class="contain-center left-10">
        <div
          class="common-shadow center-top"
          :style="{ height: getHeight('center') }"
        >
          <el-button type="primary" size="mini" @click="checkGridMethod('city')"
            >切换至地市</el-button
          >
          <el-button type="success" size="mini" @click="checkGridMethod('grid')"
            >切换至网格</el-button
          >

          <el-button type="primary" size="mini" @click="showLayer"
            >图层显示</el-button
          >
        </div>
        <div
          class="center-bottom top-10 source-center-bottom"
          :style="{ height: getHeight('bottom') }"
        >
          <div
            class="common-shadow bt-left"
            :style="{ height: getHeight('bottom') }"
          >
            <div class="modules-title">
              <div class="tit">近半年渠道商业务办理量</div>
              <div class="modules-more">更多</div>
            </div>
            <div
              class="deal-count top-10"
              id="deal-count"
              :style="{ width: '100%', height: getHeight('deal') }"
            ></div>
          </div>
          <div
            class="common-shadow bt-right left-10"
            :style="{ height: getHeight('bottom') }"
          >
            <div class="modules-title">
              <div class="tit">渠道资源情况</div>
              <div class="modules-more">更多</div>
            </div>
            <div class="contain_list other_list">
              <ul>
                <li>
                  <p><span>19990</span></p>
                  <p>渠道</p>
                </li>
                <li>
                  <p><span>14790</span></p>
                  <p>本网渠道</p>
                </li>
                <li>
                  <p><span>20%</span></p>
                  <p>异网渠道</p>
                </li>
              </ul>
              <ul style="margin-top: 10px">
                <li>
                  <p><span>17390</span></p>
                  <p>营业厅数</p>
                </li>
                <li>
                  <p><span>24990</span></p>
                  <p>自营厅店数</p>
                </li>
                <li>
                  <p><span>24990</span></p>
                  <p>加盟厅店数</p>
                </li>
              </ul>
              <ul style="margin-top: 10px">
                <li>
                  <p><span>17390</span></p>
                  <p>社会渠道数</p>
                </li>
                <li>
                  <p><span>24990</span></p>
                  <p>活跃泛渠道数</p>
                </li>
                <li>
                  <p><span>24990</span></p>
                  <p>直销人数</p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div class="contain-right left-10">
        <div class="modules-no-grid" v-show="!checkGrid">
          <div class="common-shadow" :style="{ height: getHeight('top') }">
            <div class="modules-title">
              <div class="tit">人力资源情况</div>
              <div class="modules-more">更多</div>
            </div>
            <div class="contain_list other_list">
              <ul>
                <li>
                  <p><span>19990</span></p>
                  <p>厅店人数</p>
                </li>
                <li>
                  <p><span>14790</span></p>
                  <p>自营厅店人数</p>
                </li>
                <li>
                  <p><span>20%</span></p>
                  <p>网格内人员</p>
                </li>
              </ul>
              <ul style="margin-top: 10px">
                <li>
                  <p><span>17390</span></p>
                  <p>网格总监</p>
                </li>
                <li>
                  <p><span>24990</span></p>
                  <p>社区经理</p>
                </li>
                <li>
                  <p><span>24990</span></p>
                  <p>渠道经理</p>
                </li>
              </ul>
              <ul style="margin-top: 10px">
                <li>
                  <p><span>17390</span></p>
                  <p>装维人员</p>
                </li>
                <li>
                  <p><span>24990</span></p>
                  <p>客户经理</p>
                </li>
                <li>
                  <p><span>24990</span></p>
                  <p>网格人数</p>
                </li>
              </ul>
            </div>
          </div>
          <div
            class="common-shadow top-10"
            :style="{ height: getHeight('top') }"
          >
            <div class="modules-title">
              <div class="tit">网格内人员分布</div>
              <!-- <div class="modules-more">更多</div> -->
            </div>
            <div
              class="echarts-type"
              id="grid-spread"
              style="width: 270px; height: 200px"
            ></div>
          </div>
          <div
            class="common-shadow top-10"
            :style="{ height: getHeight('bottom') }"
          >
            <div class="modules-title">
              <div class="tit">资源预警分布</div>
              <div class="modules-more">
                <el-button type="primary" size="mini" @click="showTable"
                  >预警清单</el-button
                >
                <span>更多</span>
              </div>
            </div>
            <div
              class="echarts-type"
              id="warn-spread"
              style="width: 270px; height: 200px"
            ></div>
          </div>
        </div>
        <div class="modules-grid" v-show="checkGrid">
          <div class="common-shadow" :style="{ height: getHeight('source-l') }">
            <div class="modules-title">
              <div class="tit">通信画像</div>
              <!-- <div class="modules-more">更多</div> -->
            </div>
            <ul class="contain_list right_list source_list">
              <li>
                <p><span>23213214</span></p>
                <p>移动宽带到达数</p>
              </li>
              <li>
                <p><span>23213214</span></p>
                <p>移动宽带累计新增</p>
              </li>
              <li>
                <p><span>23213214</span></p>
                <p>融合加宽到达数</p>
              </li>
              <li>
                <p><span>23213214</span></p>
                <p>融合家宽年累计新增</p>
              </li>
              <li>
                <p><span>23213214</span></p>
                <p>融合家宽占比</p>
              </li>
              <li>
                <p><span>23213214</span></p>
                <p>家宽渗透率（%）</p>
              </li>
              <li>
                <p><span>23213214</span></p>
                <p>加宽客户活跃数</p>
              </li>
              <li>
                <p><span>23213214</span></p>
                <p>加宽客户活跃率（%）</p>
              </li>
              <li>
                <p><span>23213214</span></p>
                <p>魔百和活跃数（日）</p>
              </li>
              <li>
                <p><span>23213214</span></p>
                <p>当月宽带缴费数</p>
              </li>
              <li>
                <p><span>23213214</span></p>
                <p>当月宽带续费率（日）</p>
              </li>
              <li>
                <p><span>23213214</span></p>
                <p>当月宽带上网总时长</p>
              </li>
            </ul>
          </div>
          <div
            class="common-shadow top-10"
            :style="{ height: getHeight('source-l') }"
          >
            <div class="modules-title">
              <div class="tit">通信画像-用户</div>
              <!-- <div class="modules-more">更多</div> -->
            </div>
            <ul class="contain_list right_list source_list">
              <li>
                <p><span>23213214</span></p>
                <p>手机用户数</p>
              </li>
              <li>
                <p><span>23213214</span></p>
                <p>小区内手机客户渗透率</p>
              </li>
              <li>
                <p><span>23213214</span></p>
                <p>本月手机流量</p>
              </li>
              <li>
                <p><span>23213214</span></p>
                <p>本月用户ARPU值</p>
              </li>
              <li>
                <p><span>23213214</span></p>
                <p>本月用户平均ARPU值</p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <table-dialog ref="table-dialog"></table-dialog>
  </div>
</template>
<script>
import echarts from "echarts";
import Options from "./options.js";
import TableDialog from "./components/dialog";
export default {
  components: {
    TableDialog,
  },
  computed: {
    getTableHeight() {
      return parseInt((window.innerHeight - 20 - 20) * 0.4 - 120) + "px";
    },
  },
  data() {
    return {
      queryData: {
        total: 1,
        pageSize: 10,
        pageNo: 1,
      },
      rankList: [
        {
          title: "标签1",
          count: 1000,
          percentage: 90,
        },
        {
          title: "标签2",
          count: 800,
          percentage: 70,
        },
        {
          title: "标签3",
          count: 750,
          percentage: 50,
        },
        {
          title: "标签4",
          count: 700,
          percentage: 35,
        },
        {
          title: "标签5",
          count: 500,
          percentage: 30,
        },
      ],
      checkTarget: {
        search: "",
        belong: "1",
      },
      tableData: [
        {
          phone: "13129316222",
          currentName: "全球通5G智享版199元档",
          gird: "芙蓉区大汉海派网格",
          area: "芙蓉区",
          areaName: "大汉海派",
          monthMove: "2048",
          countryMove: "1024",
        },
        {
          phone: "13129316222",
          currentName: "全球通5G智享版199元档",
          gird: "芙蓉区大汉海派网格",
          area: "芙蓉区",
          areaName: "大汉海派",
          monthMove: "2048",
          countryMove: "1024",
        },
        {
          phone: "13129316222",
          currentName: "全球通5G智享版199元档",
          gird: "芙蓉区大汉海派网格",
          area: "芙蓉区",
          areaName: "大汉海派",
          monthMove: "2048",
          countryMove: "1024",
        },
        {
          phone: "13129316222",
          currentName: "全球通5G智享版199元档",
          gird: "芙蓉区大汉海派网格",
          area: "芙蓉区",
          areaName: "大汉海派",
          monthMove: "2048",
          countryMove: "1024",
        },
        {
          phone: "13129316222",
          currentName: "全球通5G智享版199元档",
          gird: "芙蓉区大汉海派网格",
          area: "芙蓉区",
          areaName: "大汉海派",
          monthMove: "2048",
          countryMove: "1024",
        },
      ],
      marketList: [
        {
          name: "活动名称1",
          lable: "xx标签",
          rate: 32,
        },
        {
          name: "活动名称1",
          lable: "xx标签",
          rate: 32,
        },
        {
          name: "活动名称1",
          lable: "xx标签",
          rate: 32,
        },
        {
          name: "活动名称1",
          lable: "xx标签",
          rate: 32,
        },
      ],
      checkGrid: false, // 地图切换至 网格
      marketTypes: [
        {
          type: "地摊",
          support: 1,
          launch: 0,
        },
        {
          type: "电梯",
          support: 0,
          launch: 0,
        },
        {
          type: "信箱",
          support: 0,
          launch: 0,
        },
        {
          type: "广告栏",
          support: 1,
          launch: 0,
        },
      ],
      customEcharts: "",
      typeEcharts: "",
    };
  },
  mounted() {
    // this.initEcharts();
    // this.initCustom();
    let types = this.checkGrid ? "grid" : "city";
    this.checkGridMethod(types);
  },
  methods: {
    showLayer() {
      this.$refs["table-dialog"].showLayer(true);
    },
    showTable() {
      this.$refs["table-dialog"].checkShow(true);
    },
    checkGridMethod(types) {
      this.checkGrid = types == "grid";
      if (this.typeEcharts == "") {
        this.initEcharts();
      }
    },
    initEcharts() {
      let typeEcharts = echarts.init(document.getElementById("warn-spread"));
      let portEcharts = echarts.init(document.getElementById("port-use"));
      let customEcharts = echarts.init(document.getElementById("grid-spread"));
      let dealEcharts = echarts.init(document.getElementById("deal-count"));
      this.typeEcharts = typeEcharts;
      typeEcharts.setOption(Options.warn);
      portEcharts.setOption(Options.port);
      customEcharts.setOption(Options.grid);
      dealEcharts.setOption(Options.deal);
    },
    currentSearch(e) {
      this.getSearch();
    },
    getChange(e) {
      this.queryData.pageNo = 1;
      this.queryData.pageSize = e;
      this.getSearch();
    },
    getSearch() {
      let queryData = this.queryData;
      var params = {
        ...queryData,
      };
      console.log(params);
    },
    tableRowClassName({ row, rowIndex }) {
      return rowIndex % 2 == 0 ? "" : "line-row";
    },
    getHeight(current) {
      let heightValue = "";
      switch (current) {
        case "top":
          // 左上
          heightValue = (window.innerHeight - 20 - 20) * 0.33;
          break;
        case "bottom":
          // 左下
          heightValue = (window.innerHeight - 20 - 20) * 0.34;
          break;
        case "center":
          // 中上
          heightValue = (window.innerHeight - 20 - 20) * 0.66 + 10;
          break;
        case "source-l":
          // 中上
          heightValue = (window.innerHeight - 20 - 10) * 0.5 - 0.5;
          break;
        case "deal":
          // 中上
          heightValue = (window.innerHeight - 20 - 20) * 0.34 - 40 - 10;
          break;
      }
      return parseInt(heightValue) + "px";
    },
    getColor(index) {
      let color = "#409EFF";
      switch (Number(index)) {
        case 0:
          color = "#F56C6C";
          break;
        case 1:
          color = "#E6A23C";
          break;
        case 2:
          color = "#67C23A";
          break;
      }
      return color;
    },
  },
};
</script>
<style lang="less">
@import "../../../assets/common.less";
.common-shadow {
  background-color: #fff;
  border-radius: 5px;
  padding: 10px;
  box-sizing: border-box;
}
/deep/ .el-table .line-row {
  background: #e8f2fb !important;
}

.unit-wrapper {
  width: 100%;
  padding: 10px;
  box-sizing: border-box;
  /deep/ .el-form-item__content {
    line-height: 2;
  }
  // .el-pagination {
  //   margin-top: 5px !important;
  // }
  .unit-container {
    display: flex;
    .contain-left,
    .contain-right {
      width: 20%;
    }
    .contain-left-b {
      margin-top: 10px;
      .modules_tab {
        display: flex;
        margin-top: 5px;
        // padding-bottom: 10px;
        border-bottom: 1px solid #ebebeb;
        li {
          cursor: pointer;
          margin-left: 15px;
          font-size: 12px;
          color: rgb(211, 222, 231);
          padding-bottom: 10px;
          &:nth-child(1) {
            margin-left: 0;
          }
        }
        li.tab_active {
          color: rgb(15, 174, 254);
          position: relative;
        }
        li.tab_active::after {
          content: "";
          position: absolute;
          bottom: -1px;
          left: 0;
          width: 100%;
          height: 2px;
          background-color: rgb(15, 174, 254);
        }
      }
      .rank-list {
        zoom: 0.75;
        padding: 0 10px;
        .rank-item {
          display: flex;
          justify-content: space-between;
          align-items: center;
          font-size: 14px;
          margin-top: 3px;
          .rank-logo {
            display: flex;
            align-items: center;
            justify-content: center;
          }
          .rank-right {
            width: 85%;
            .rank-right-t {
              display: flex;
              justify-content: space-between;
              align-items: flex-end;
              margin-bottom: 5px;
              .tag-row {
                font-size: 14px;
                color: rgb(105, 105, 105);
              }
              .tag-count {
                font-size: 12px;
                color: rgb(152, 152, 152);
              }
            }
          }
        }
      }
    }
    .modules-title {
      display: flex;
      justify-content: space-between;
      align-items: center;
      .tit {
        font-size: 14px !important;
        letter-spacing: 1px;
        font-weight: 600;
      }
      .modules-more {
        font-size: 12px;
        color: rgb(15, 174, 254);
        opacity: 0.8;
        cursor: pointer;
        span {
          margin-left: 10px;
        }
      }
    }
    .other_list {
      ul {
        display: flex;
        width: 100%;
        padding: 0 10px;
        box-sizing: border-box;
        background-color: #f2fbff;
      }
      li {
        width: 33.3% !important;
        white-space: nowrap;
        padding: 10px 0 !important;
        // text-align: center;
        &:nth-child(3n + 2) {
          margin: 30px 0 0 !important;
        }
        &:nth-child(2) {
          margin: 0 0 0 !important;
        }
      }
    }

    .contain_list {
      font-size: 12px;
      display: flex;
      // justify-content: space-between;
      flex-wrap: wrap;
      // margin: 5px 0;
      margin-top: 5px;
      // padding: 10px;
      box-sizing: border-box;
      li {
        width: 30%;
        box-sizing: border-box;
        padding: 15px 10px;
        background-color: #f2fbff;
        // text-align: center;
        white-space: nowrap;
        &:nth-child(3n + 2) {
          margin: 15px 5% 0;
        }
        margin-top: 15px;
        &:nth-child(1),
        &:nth-child(2),
        &:nth-child(3) {
          margin-top: 0;
        }
        p {
          &:nth-child(1) {
            font-size: 14px;
            white-space: nowrap;
            span {
              &:nth-child(1) {
                font-size: 14px;
                font-weight: bold;
                color: rgb(15, 174, 254);
              }
              // &:nth-child(2) {
              // }
            }
            label {
              color: #aaa;
              margin-left: 2px;
              font-size: 12px;
            }
          }
          &:nth-child(2) {
            font-size: 12px;
            font-weight: 600;
            margin-top: 2px;
          }
        }
      }
    }
    .common-shadow {
      .right_list {
        li {
          width: 45%;

          padding: 6px;
          // margin: initial;
          // margin-top: 5px !important;
          // margin-left: 5px;
          margin: 5px 0 0 10px;
          &:nth-child(1),
          &:nth-child(2) {
            margin-top: 0 !important;
          }
          &:nth-child(2n + 1) {
            margin-left: 0;
          }
          p {
            &:nth-child(2) {
              margin-top: 0 !important;
            }
          }
        }
      }
    }

    .market-list {
      margin-top: 10px;
      // padding: 5px;

      table {
        width: 100%;
        background-color: #f2fbff;
        // font-size: 12px;
        color: #989898;
        td {
          padding: 10px;
        }
        tbody {
          td {
            font-size: 12px;
          }
        }
        thead {
          td {
            font-size: 13px;
            padding: 10px;
          }
        }
      }
    }
    .contain-center {
      width: 60%;
      .tit {
        // font-size: 16px;
        color: #222;
      }
      .unit-search-btn {
        .el-button {
          margin-left: 20px;
          margin-left: 10px;
          &:nth-child(1) {
            margin-left: 0;
          }
        }
      }
    }
    .top-10 {
      margin-top: 10px;
    }
    .left-10 {
      margin-left: 10px;
    }
  }
}

.source-center-bottom {
  display: flex;
  justify-content: space-between;
  .bt-left {
    width: 70%;
  }
  .bt-right {
    width: 30%;
  }
}
.check-list-search {
  .search-form {
    .el-form-item__content {
      line-height: 2;
    }
    .el-form--inline .el-form-item {
      margin-bottom: 0;
    }
  }
  .el-table {
    margin-top: 5px;
  }
  // div::-webkit-scrollbar {
  //   width: 5px;
  //   height: 5px;
  //   /**/
  // }
  .el-pagination {
    // zoom: 0.85;
    margin-top: 0px !important;
  }
}
</style>