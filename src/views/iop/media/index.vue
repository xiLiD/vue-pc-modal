<template>
  <div class="page-container common-css">
    <div class="page-main">
      <div class="page-menu">
        <el-form
          :inline="true"
          :model="formInline"
          class="demo-form-inline"
          size="mini"
        >
          <div class="menu-left">
            <el-form-item>
              <el-date-picker
                v-model="formInline.currentTime"
                type="daterange"
                range-separator="至"
                start-placeholder="开始日期"
                end-placeholder="结束日期"
                size="mini"
                format="yyyy-MM-dd"
                value-format="yyyy-MM-dd"
              >
              </el-date-picker>
            </el-form-item>
            <el-form-item>
              <el-button
                type="primary"
                icon="el-icon-s-tools"
                @click="setSearchShow"
                size="mini"
                >筛选条件
              </el-button>
              <el-button
                type="primary"
                icon="el-icon-search"
                @click="findTable"
                size="mini"
                >查询</el-button
              >
            </el-form-item>
          </div>
        </el-form>
        <div class="menu-tabs">
          <ul>
            <li
              :class="[
                'tab-item',
                item.value == formInline.region ? 'tabs-alive' : '',
              ]"
              v-for="(item, index) in menuOptions"
              :key="index"
              :data-value="item.value"
              @click="setMenus"
            >
              {{ item.name }}
            </li>
          </ul>
        </div>
      </div>
      <el-table
        :data="tableData"
        height="500px"
        border
        :header-cell-style="{ background: 'rgb(160,207,255)', color: '#fff' }"
        style="width: 100%; margin-top: 20px"
        :row-class-name="tableRowClassName"
      >
        <el-table-column
          v-for="(item, index) in currentMenus"
          :prop="item.key"
          :label="item.value"
          :key="formInline.region + index"
          min-width="150px"
        ></el-table-column>
        <el-table-column label="操作" min-width="100px">
          <template slot-scope="scope">
            <el-button
              size="mini"
              type="primary"
              @click="handleEdit(scope.$index, scope.row)"
              >编辑</el-button
            >
          </template>
        </el-table-column>
      </el-table>
      <el-pagination
        :current-page.sync="queryData.pageNo"
        :page-size="queryData.pageSize"
        :total="queryData.total"
        style="margin-top: 20px; text-align: center"
        :page-sizes="[10, 20, 30, 50, 70, 100]"
        layout="total, sizes, prev, pager, next, jumper"
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
      />
    </div>
    <el-dialog
      :title="modalInfo.searchTitle"
      :visible.sync="modalInfo.searchShow"
      class="export-dialog"
      width="50%"
    >
      <el-form
        :model="ruleForm"
        label-width="120px"
        size="mini"
        ref="ruleForm"
        class="demo-ruleForm"
        :inline="true"
      >
        <el-form-item
          class="menu-btn"
          :label="item.value"
          v-for="(item, index) in currentParams"
          :key="index"
        >
          <el-input v-model="item.current" :placeholder="item.value"></el-input>
        </el-form-item>
      </el-form>
      <div class="btn-group">
        <el-button
          type="primary"
          size="mini"
          @click="modalInfo.searchShow = false"
          >确定</el-button
        >
      </div>
    </el-dialog>

    <el-dialog
      :title="modalInfo.updateTitle"
      :visible.sync="modalInfo.updateShow"
      class="export-dialog"
      width="50%"
    >
      <el-form
        :model="ruleForm"
        label-width="120px"
        size="mini"
        ref="ruleForm"
        class="demo-ruleForm"
        :inline="true"
      >
        <el-form-item
          class="menu-btn"
          :label="item.value"
          v-for="(item, index) in updateQuery"
          :key="index"
        >
          <el-input v-model="item.current" :placeholder="item.value"></el-input>
        </el-form-item>
      </el-form>
      <div class="btn-group">
        <el-button type="primary" size="mini" @click="submitUpdate"
          >确定</el-button
        >
        <el-button
          type="primary"
          size="mini"
          @click="modalInfo.updateShow = false"
          >取消</el-button
        >
      </div>
    </el-dialog>
  </div>
</template>

<script>
import apiSend from "@/api/iop/media/httpRequest.js";
import base from "@/api/baseUrl";
import currentMedia from "./validate.js";
export default {
  data() {
    return {
      baseUrl:
        process.env.NODE_ENV === "development"
          ? base.development
          : base.production,
      modalInfo: {
        searchTitle: "筛选条件",
        updateTitle: "修改信息",
        searchShow: false,
        updateShow: false,
      },
      ruleForm: {
        prodcode: "",
        prodname: "",
        prodbidcode: "",
        prodbidname: "",
        prodsmallcode: "",
        prodsmallname: "",
        note: "",
      },
      queryData: {
        total: 0,
        pageSize: 10,
        pageNo: 1,
      },
      dialogTableVisible: false,
      notice: [], // 提示信息
      formInline: {
        search: "",
        region: "/readdimension",
        currentTime: "",
      },
      menuOptions: [
        { name: "视频媒资", value: "/videodimension" },
        { name: "阅读媒资", value: "/readdimension" },
        { name: "短视频媒资", value: "/shortvideodimension" },
      ],
      tableData: [],
      fileData: "", //导入文件
      checkPass: false, // 监测上传是否成功
      multipleSelection: [],
      currentParams: {},
      updateQuery: {},
      currentMenus: [],
    };
  },
  created() {
    this.getCurrentMenus();
    this.updateParams();
  },
  mounted() {},
  methods: {
    setSearchShow() {
      // this.updateParams();
      this.modalInfo.searchShow = true;
    },
    setUpperCase(params) {
      const setUpper = (str) => {
        var re = /_(\w)/g;
        return str.replace(re, function ($0, $1) {
          return $1.toUpperCase();
        });
      };
      let o = {};
      for (var i in params) {
        o[setUpper(i)] = params[i];
      }
      return o;
    },
    getCurrentMenus() {
      let curName = this.menuOptions.filter(
        (item) => item.value == this.formInline.region
      )[0].name;
      let current = JSON.parse(JSON.stringify(currentMedia));
      let currentTarget = current.filter((item) => item.name == curName)[0]
        .query;
      let newArr = [];
      for (let i in currentTarget) {
        let o = Object.assign({
          key: i,
          value: currentTarget[i],
        });
        newArr.push(o);
        o = null;
      }
      curName = null;
      currentTarget = null;
      this.currentMenus = newArr;
    },
    updateParams() {
      let curName = this.menuOptions.filter(
        (item) => item.value == this.formInline.region
      )[0].name;
      let currentTarget = currentMedia.filter((item) => item.name == curName)[0]
        .query;
      let newArr = [];
      for (let i in currentTarget) {
        let o = Object.assign({
          key: i,
          value: currentTarget[i],
          current: "",
        });
        newArr.push(o);
        o = null;
      }
      curName = null;
      currentTarget = null;
      this.currentParams = newArr;
    },
    setMenus(e) {
      let current = e.target.getAttribute("data-value");
      this.formInline.region = current;
      this.updateParams();
      // this.getCurrentMenus();
      // this.findTable();
    },
    findTable() {
      this.getCurrentMenus();
      // this.updateParams();
      let params = {};
      this.currentParams.forEach((item) => {
        params[item.key] = item.current || "";
      });
      let queryParams = {
        pagemap: {
          page: this.queryData.pageNo,
          limit: this.queryData.pageSize,
        },
        siftmap: params,
        startTime: this.formInline.currentTime[0] || "",
        endTime: this.formInline.currentTime[1] || "",
      };
      console.log(queryParams);
      apiSend
        .getKindSearch({ data: queryParams }, this.formInline.region)
        .then((res) => {
          this.tableData = res.data.data.page.list;
          this.queryData.pageNo = res.data.data.page.currPage;
          this.queryData.pageSize = res.data.data.pageSize;
          this.queryData.total = res.data.data.page.totalCount;
          console.log(res);
        });
    },
    handleCurrentChange(val) {
      this.queryData.pageNo = val;
      this.findTable();
    },
    handleSizeChange(val) {
      this.queryData.pageSize = val;
      this.findTable();
    },
    tableRowClassName({ row, rowIndex }) {
      if (rowIndex % 2 != 0) {
        return "warning-row";
      }
      return "";
    },
    submitUpdate() {
      let params = {};
      this.updateQuery.forEach((item) => {
        params[this.setUpper(item.key)] = item.current || "";
      });
      console.log("params", params);
      // return;
      apiSend
        .getKindUpdate({ data: params }, this.formInline.region)
        .then((res) => {
          // this.tableData = res.data.data.page.list;
          // console.log(res);
          let msg = res.data.data.msg;
          let type = res.data.data.code == 0 ? "success" : "error";

          this.$message[type](msg);
          if (res.data.data.code == 0) {
            this.findTable();
          }
          this.modalInfo.updateShow = false;
        });
    },
    getUpperLower(str) {
      let arr = ["UPDATE_TIME"];
      if (arr.includes(str)) {
        return str;
      }
      return str.replace(/([A-Z])/g, "_$1").toLowerCase();
    },
    handleEdit(index, row) {
      console.log(row);
      let updateQuery = JSON.parse(JSON.stringify(this.currentParams));
      // for (var i in updateQuery) {
      //   updateQuery[i].query = this.setUpperCase(updateQuery[i].query);
      // }
      console.log(updateQuery);
      updateQuery.forEach((item) => {
        if (
          Object.prototype.hasOwnProperty.call(row, this.setUpper(item["key"]))
        ) {
          item["current"] = row[this.setUpper(item["key"])];
        }
      });
      this.updateQuery = updateQuery;
      console.log(updateQuery);
      this.modalInfo.updateShow = true;
    },
    setUpper(str) {
      // let arr = ["UPDATE_TIME"];
      // if (arr.includes(str)) {
      //   return str;
      // }
      var re = /_(\w)/g;
      return str.replace(re, function ($0, $1) {
        return $1.toUpperCase();
      });
    },
  },
};
</script>
<style lang="less" scoped>
/deep/ .menu-left .el-form-item__label {
  font-size: 13px;
}
.menu-right .menu-btn {
  display: flex !important;
}
/deep/ .menu-btn .el-form-item__label {
  font-size: 13px;
}
.el-table {
  width: 99.9% !important;
}
.page-container {
  box-sizing: border-box;
  width: 100%;
  padding: 30px 20px;
  box-shadow: 0 0 5px #999;
  border-radius: 5px;
  background-color: #fff;
  .menu-right .upload-demo {
    display: inline-block;
    margin: 10px;
  }
}

.menu-tabs {
  ul {
    display: flex;
    position: relative;
    li {
      margin-left: 20px;
      padding-bottom: 20px;
      cursor: pointer;
      position: relative;
      font-size: 14px;
      &:nth-child(1) {
        margin-left: 0;
      }
    }
    li.tabs-alive {
      color: #409eff;
    }
    li::after {
      content: "";
      position: absolute;
      left: 0;
      bottom: 0;
      width: 0;
      height: 3px;
      background: #409eff;
    }
    .tabs-alive::after {
      content: "";
      width: 100%;
      transition: 0.25s linear;
      z-index: 99;
    }
  }
  ul::after {
    content: "";
    position: absolute;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 3px;
    background: #ddd;
  }
}

/deep/ .export-dialog {
  overflow: hidden;
  .el-dialog {
    margin-top: 5vh !important;
  }
  .demo-ruleForm {
    height: 60vh;
    overflow: auto;
    margin-top: 10px;
  }
  .dialog-top {
    display: flex;
    justify-content: space-between;
    .dialog-left {
      display: flex;
      .upload-demo {
        margin-right: 10px;
        position: relative;
        .el-upload-list {
          position: absolute;
          top: 30px;
          left: 0;
        }
      }
    }
  }
  .dialog-info {
    margin-top: 50px;
    min-height: 300px;
    border: 1px solid #ddd;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    font-size: 18px;
    line-height: 1.5;
  }
  .btn-group {
    text-align: right;
    margin-top: 20px;
  }
}

/deep/ .el-table {
  margin-top: 10px;
  .warning-row {
    background-color: rgb(242, 245, 252);
  }
  thead {
    th {
      background-color: rgb(242, 245, 252);
      color: #999;
      font-weight: 500;
      padding: 5px 0;
      font-size: 12px;
      // letter-spacing: 1px;
    }
  }
  tbody {
    td {
      font-size: 12px;
      padding: 5px 0;
      border-bottom: 1px solid #ebeef5;
    }
    // tr:hover > td {
    //   background-color: rgb(140, 197, 255) !important;
    // }
  }
}
</style>