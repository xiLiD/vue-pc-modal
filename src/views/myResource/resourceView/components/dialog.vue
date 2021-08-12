<template>
  <div class="modules-wrapper">
    <el-dialog
      title="资源预警清单"
      :visible.sync="zydialogFormVisible"
      class="export-dialog"
      width="50%"
    >
      <el-row>
        <el-select
          v-model="searchData.cityCode"
          size="mini"
          style="width: 100px"
        >
          <el-option
            v-for="item in cityOptions"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          >
          </el-option>
        </el-select>
        <el-select
          v-model="searchData.cityCode"
          size="mini"
          style="width: 100px; margin-left: 10px"
        >
          <el-option
            v-for="item in cityOptions"
            :key="item.value"
            :label="item.label"
            :value="item.value"
            width="80px"
          >
          </el-option>
        </el-select>
        <el-input
          v-model="searchData.cityName"
          placeholder="请输入小区名称/资源名称"
          size="mini"
          style="width: 200px; margin-left: 10px"
        ></el-input>
      </el-row>
      <el-table
        :data="tableList"
        height="435px"
        style="width: 100%; margin-top: 10px"
        :row-class-name="tabRowClassName"
      >
        <el-table-column prop="info" label="区域信息" min-width="100">
        </el-table-column>
        <el-table-column prop="info" label="小区名称" min-width="100">
        </el-table-column>
        <el-table-column prop="info" label="资源名称"> </el-table-column>
        <el-table-column prop="info" label="预警原因" min-width="100">
        </el-table-column>
        <el-table-column prop="info" label="当前状态" min-width="100">
        </el-table-column>
      </el-table>
      <el-pagination
        style="margin-top: 10px; text-align: center"
        size="mini"
        background
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page="queryData.current"
        :page-sizes="[10, 20, 50, 100]"
        :page-size="queryData.pageNo"
        layout="total, sizes, prev, pager, next, jumper"
        :total="queryData.total"
      >
      </el-pagination>
    </el-dialog>
    <el-dialog
      class="export-dialog dialog2"
      title="图层设置"
      :visible.sync="tcdialogFormVisible"
      width="50%"
    >
      <el-row>
        <el-col span="4">
          <el-menu default-active="4">
            <el-menu-item index="1">本网渠道</el-menu-item>
            <el-menu-item index="2">异网渠道</el-menu-item>
            <el-menu-item index="3">基站</el-menu-item>
            <el-menu-item index="4">小区</el-menu-item>
            <el-menu-item index="5">集团</el-menu-item>
            <el-menu-item index="6">待拓集团</el-menu-item>
            <el-menu-item index="7">聚类市场</el-menu-item>
            <el-menu-item index="8">行政村</el-menu-item>
            <el-menu-item index="9">建筑物</el-menu-item>
            <el-menu-item index="10">商业体</el-menu-item>
          </el-menu>
        </el-col>
        <el-col span="20">
          <div style="padding: 20px 30px">
            <el-radio-group v-model="radio" size="mini">
              <el-radio :label="1">
                <i class="el-icon-tableware ico-pre"></i>
                <span>宽带未覆盖小区</span>
              </el-radio>
              <el-radio :label="2">
                <i class="el-icon-tableware ico-pre"></i>
                <span>包保小区</span>
              </el-radio>
              <el-radio :label="3">
                <i class="el-icon-tableware ico-pre"></i>
                <span>集团重点小区</span>
              </el-radio>
              <el-radio :label="4">
                <i class="el-icon-tableware ico-pre"></i>
                <span>高价值低占小区</span>
              </el-radio>
            </el-radio-group>
          </div>
          <div style="padding: 20px 10px; font-weight: 550">
            <div>宽带覆盖小区</div>
            <el-radio-group
              v-model="radio"
              size="mini"
              style="margin: 20px 0 0 20px"
            >
              <el-radio :label="1">
                <i class="el-icon-tableware ico-pre"></i>
                <span>无边界宽带小区</span>
              </el-radio>
              <el-radio :label="2">
                <i class="el-icon-tableware ico-pre"></i>
                <span>宽带未覆盖小区</span>
              </el-radio>
            </el-radio-group>
          </div>
          <div style="padding: 20px 10px; font-weight: 550">
            <div>基站小区</div>
            <el-radio-group
              v-model="radio"
              size="mini"
              style="margin: 20px 0 0 20px"
            >
              <el-radio :label="1">
                <i class="el-icon-tableware ico-pre"></i>
                <span>2/3G基站小区</span>
              </el-radio>
              <el-radio :label="2"
                >4G基站小区
                <i class="el-icon-tableware ico-pre"></i>
                <span>4G基站小区</span>
              </el-radio>
            </el-radio-group>
          </div>
        </el-col>
      </el-row>
    </el-dialog>
  </div>
</template>

<script>
export default {
  data() {
    return {
      cityOptions: [
        {
          value: 999,
          label: "全省",
        },
        {
          value: 731,
          label: "长沙",
        },
      ],
      searchData: {
        cityCode: "",
        cityName: "",
      },
      tableList: [
        { info: "xxx" },
        { info: "xxx" },
        { info: "xxx" },
        { info: "xxx" },
        { info: "xxx" },
        { info: "xxx" },
        { info: "xxx" },
        { info: "xxx" },
        { info: "xxx" },
        { info: "xxx" },
        { info: "xxx" },
      ],
      radio: 1,
      queryData: {
        current: 0,
        total: 1,
        pageNo: 10,
      },
      zydialogFormVisible: false, //预警弹窗
      tcdialogFormVisible: false, //图层弹窗
    };
  },
  methods: {
    tabRowClassName({ row, rowIndex }) {
      let index = rowIndex + 1;
      if (index % 2 == 0) {
        return "warning-row";
      }
    },
    handleClick(key, keyPath) {
      console.log(11111111);
      console.log(key, keyPath);
    },
    checkShow(current) {
      this.zydialogFormVisible = current;
    },
    showLayer(current) {
      this.tcdialogFormVisible = current;
    },
    handleCurrentChange() {},
    handleSizeChange() {},
  },
};
</script>

<style lang="less" scoped>
/deep/ .export-dialog {
  .el-dialog {
    margin-top: 5vh !important;
  }
}
/deep/ .el-table .warning-row {
  background: #e7f3ff;
}
/deep/ .el-dialog__header {
  background: #00aaff;
  padding: 5px 10px 5px;
}
/deep/ .el-dialog__title {
  color: #fff;
  font-size: 14px;
}
/deep/ .el-dialog__headerbtn {
  top: 10px;
}
/deep/ .el-dialog__body {
  padding: 15px 20px;
}
/deep/ .dialog2 .el-dialog__body {
  padding: 0 0;
}
/deep/ .el-dialog__headerbtn .el-dialog__close {
  color: #fff;
}
/deep/ .el-menu {
  background: #f5f5f5;
}
/deep/ .el-menu-item {
  text-align: center;
  font-size: 12px;
  font-weight: 550;
}
/deep/ .el-menu-item.is-active {
  background: #fff;
}
/deep/ .el-menu-item,
/deep/ .el-submenu__title {
  height: 50px;
  line-height: 50px;
}
/deep/ .el-radio__label {
  font-size: 12px;
}
/deep/ .page-container .el-table .cell {
  line-height: 0.9 !important;
  font-size: 12px;
}
/deep/.el-table td,
.el-table th {
  padding: 8px 0;
}
/deep/ .el-table::before {
  bottom: 0px !important;
  /* background-color: #ddd; */
}
</style>>