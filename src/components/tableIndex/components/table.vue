
<template>
  <div>
    <h2 class="top_header">二、报表监控</h2>
    <div class="header_tit">1、不满意客户统计报表</div>
    <el-table
    :data="unstatisfyList"
    size="mini"
    style="width: 100%"
    border
    :header-cell-style="{'background-color':lineColor,'color':'#fff'}"
    :row-class-name="tableRowClassName">
        <el-table-column
        fixed
          prop="city"
          label="地域"
          width="120"
           align="center">
        </el-table-column>
    <el-table-column
      prop="date"
      label="日期"
      width="110"
       align="center">
    </el-table-column>
      </el-table-column>

        <el-table-column
          prop="address"
          label="地址"
          width="300"
           align="center">
        </el-table-column>
        <el-table-column
          prop="zip"
          label="邮编"
          width="120"
           align="center">
        </el-table-column>
  </el-table>
    <!-- <div class="topNav_all">
      <div class="topNav_left">
        <div class="topNav_title">
          <span class="fix-active tb-header">地市</span>
        </div>
        <div class="topNav_title" v-for="item,index in tableData" :key="index">
          <span class="fix-active">{{item.city}}</span>
        </div>
      </div>
      <ul id="topNav" class="swiper-container">
        <li class="swiper-wrapper">
          <div class="swiper-slide tb-header" v-for="item,index in keys"><span>{{item}}</span></div>
        </li>
        <li class="swiper-wrapper" v-for="item,index in tableData" :key="index">
          <div class="swiper-slide1" v-for="slideItem,slideIndex in getColumn"><span>{{item[slideItem]}}</span></div>
        </li>
      </ul>
    </div> -->
    <div class="header_tit">2、投诉统计报表</div>
    <el-table
    :data="unstatisfyList"
    size="mini"
    style="width: 100%"
    border
    align="center"
        :header-cell-style="{'background-color':lineColor,'color':'#fff'}"
    :row-class-name="tableRowClassName">
    <el-table-column
      prop="city"
      label="地域"
      fixed
      width="120"
       align="center">
    </el-table-column>
    <el-table-column label="地址"  align="center">
        <el-table-column
          prop="address"
          label="地址"
          width="200"
           align="center">
        </el-table-column>
        <el-table-column
          prop="zip"
          label="邮编"
          width="120"
          align="center">
        </el-table-column>
      </el-table-column>
  </el-table>
  </div>
</template>
<script>
import Swiper from "swiper";
export default {
  data() {
    return {
      tableData: [
        {
          city: "长沙",
          key1: 1102,
          key2: "iifs",
          key3: "jhun",
          key4: "无",
          key5: "类型2",
        },
        {
          city: "长沙",
          key1: 1102,
          key2: "iifs",
          key3: "jhun",
          key4: "无",
          key5: "类型2",
        },
        {
          city: "长沙",
          key1: 1102,
          key2: "iifs",
          key3: "jhun",
          key4: "无",
          key5: "类型2",
        },
        {
          city: "长沙",
          key1: 1102,
          key2: "iifs",
          key3: "jhun",
          key4: "无",
          key5: "类型2",
        },
        {
          city: "长沙",
          key1: 1102,
          key2: "iifs",
          key3: "jhun",
          key4: "无",
          key5: "类型2",
        },
        {
          city: "长沙",
          key1: 1102,
          key2: "iifs",
          key3: "jhun",
          key4: "无",
          key5: "类型2",
        },
        {
          city: "长沙",
          key1: 1102,
          key2: "iifs",
          key3: "jhun",
          key4: "无",
          key5: "类型2",
        },
      ],
      unstatisfyList: [
        {
          date: "2016-05-03",
          name: "王小虎",
          province: "上海",
          city: "长沙",
          address: "上海市普陀区金沙江路 1518 弄",
          zip: 200333,
        },
        {
          date: "2016-05-02",
          name: "王小虎",
          province: "上海",
          city: "湘潭",
          address: "上海市普陀区金沙江路 1518 弄",
          zip: 200333,
        },
        {
          date: "2016-05-04",
          name: "王小虎",
          province: "上海",
          city: "株洲",
          address: "上海市普陀区金沙江路 1518 弄",
          zip: 200333,
        },
        {
          date: "2016-05-01",
          name: "王小虎",
          province: "上海",
          city: "岳阳",
          address: "上海市普陀区金沙江路 1518 弄",
          zip: 200333,
        },
        {
          date: "2016-05-08",
          name: "王小虎",
          province: "上海",
          city: "益阳",
          address: "上海市普陀区金沙江路 1518 弄",
          zip: 200333,
        },
        {
          date: "2016-05-06",
          name: "王小虎",
          province: "上海",
          city: "怀化",
          address: "上海市普陀区金沙江路 1518 弄",
          zip: 200333,
        },
        {
          date: "2016-05-07",
          name: "王小虎",
          province: "上海",
          city: "郴州",
          address: "上海市普陀区金沙江路 1518 弄",
          zip: 200333,
        },
      ],
      keys: ["类型ID", "名称", "字段1", "字段2", "字段3"],
      lineColor: "#B9D3EE",
    };
  },
  computed: {
    getColumn() {
      let tableData = this.tableData;
      tableData = tableData.map((item) => {
        let { city, ...result } = item;
        return result;
      });
      return Object.keys(tableData[0]);
    },
    getCity() {
      return this.tableData.filter((item) => item);
    },
  },
  created: function () {
    this.$nextTick(() => {
      this.initTable();
    });
  },
  methods: {
    tableRowClassName({ row, rowIndex }) {
      return rowIndex % 2 == 0 ? "" : "line-row";
    },
    initTable() {
      if (this.swiper_ins) {
        this.swiper_ins.destroy();
      }
      this.swiper_ins = new Swiper("#topNav", {
        freeMode: true,
        slidesPerView: "auto",
        resistanceRatio: 0,
      });
    },
  },
};
</script>
<style lang="less" scoped>
// @import '/@/assets/common.less';
.tb-header {
  background-color: #b0e0e6 !important;
}
.top_header {
  margin: 10px 0;
  width: 100%;
  color: #333;
}
/deep/ .el-table .line-row {
  background: #e8f2fb !important;
}
.header_tit {
  margin: 10px 0;
  font-size: 14px;
}
.flex {
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
}
.flex-center-h {
  .flex;
  -webkit-box-align: center;
  -webkit-align-items: center;
  -ms-flex-align: center;
  align-items: center;
}
.flex-center-all {
  .flex;
  justify-content: center;
  -webkit-box-align: center;
  -webkit-align-items: center;
  -ms-flex-align: center;
  align-items: center;
}
@nav_height: 90px;
.topNav_all {
  .flex;
  justify-content: flex-start;
  align-items: flex-start;
  flex-direction: row;
  font-size: 12px;
  // color:#2c3e50;
  color: black;
  .topNav_left {
    background: white;
    width: 114px;
    .flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    .topNav_title {
      .flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
    }
    .fix-active {
      width: 113px;
      height: 35px;
      line-height: 35px;
      border-right: 1px solid #ccc;
      background: white;
      display: flex;
      justify-content: center;
      align-items: center;
    }
    .fix-active:nth-of-type(1) {
      border-top: 1px solid #ccc;
      border-right: 1px solid #ccc;
    }
    .topNav_title:last-child {
      border-bottom: 1px solid #ccc;
    }
  }
  #topNav {
    width: 100%;
    .swiper-wrapper {
      .swiper-slide {
        padding: 0 5px;
        /*letter-spacing:2px;*/
        width: @nav_height;
        height: 35px;
        line-height: 35px;
        text-align: center;
        border-top: 1px solid #ccc;
        border-bottom: 1px solid #ccc;
        border-right: 1px solid #ccc;
        background: white;
        span {
          transition: width 0.3s ease;
          display: block;
        }
      }
      .swiper-slide1 {
        padding: 0 5px;
        /*letter-spacing:2px;*/
        width: @nav_height;
        text-align: center;
        height: 35px;
        line-height: 35px;
        border-bottom: 1px solid #ccc;
        border-right: 1px solid #ccc;
        flex-shrink: 0;
        span {
          transition: width 0.3s ease;
          display: block;
        }
      }
    }
  }
}

/*#topNav .swiper-slide:nth-of-type(1){
  z-index: 10;
}
#topNav .swiper-slide1{
  z-index: 1;
}
#topNav .swiper-slide1:nth-of-type(1){
  z-index: 10;
}*/
</style>
