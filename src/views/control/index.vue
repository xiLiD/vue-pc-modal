<template>
  <div class="page-content">
    <div class="page-wrapper">
      <el-col :span="4" class="el-col-left">
        <div class="control-left">
          <!-- <div class="control-left-header">
            <div class="header-title">操作说明</div>
            <div class="header-contain">
              <el-checkbox-group v-model="filterData.operate">
                <el-checkbox
                  icon="el-icon-date"
                  v-for="item in operateList"
                  :label="item.value"
                  :key="item.key"
                ></el-checkbox>
              </el-checkbox-group>
            </div>
          </div> -->
          <div class="control-left-center">
            <div class="center-title">
              <label for="">自动筛选维值</label>
              <!-- <el-checkbox
                :indeterminate="isIndeterminate"
                v-model="checkAll"
                size="mini"
                @change="handleCheckAllChange"
                >全选</el-checkbox
              > -->
            </div>
            <el-tree
              :data="menuList"
              class="main-tree"
              node-key="id"
              ref="tree"
              lazy
              show-checkbox
              :load="loadNode"
              highlight-current
              :props="defaultProps"
              @node-click="treeClick"
            >
            </el-tree>
            <!-- <div class="search-type">
              <el-form>
                <el-form-item>
                  <el-input
                    placeholder="请输入内容"
                    v-model="filterData.search"
                    class="input-with-select"
                    size="mini"
                    clearable
                  >
                    <el-button slot="append" icon="el-icon-search"></el-button>
                  </el-input>
                </el-form-item>
                <el-form-item>
                  <el-radio-group v-model="filterData.searchType">
                    <el-radio
                      :label="item"
                      v-for="item in searchTypeList"
                      :key="item"
                      >{{ item }}</el-radio
                    >
                  </el-radio-group>
                </el-form-item>
              </el-form>
            </div> -->
          </div>
        </div>
      </el-col>
      <el-col :span="20">
        <div class="control-right">
          <div class="control-search">
            <el-form
              :inline="true"
              :model="formInline"
              class="demo-form-inline"
              ref="addruleFormref"
            >
              <div class="menu-left">
                <el-form-item label="统计日期" label-width="80px">
                  <el-date-picker
                    v-model="formInline.date"
                    type="daterange"
                    range-separator="至"
                    start-placeholder="开始日期"
                    end-placeholder="结束日期"
                    format="yyyy-MM-DD"
                    value-format="yyyy-MM-DD"
                    size="mini"
                    :editable="false"
                  >
                  </el-date-picker>
                </el-form-item>
                <el-form-item label="投诉内容">
                  <el-input
                    placeholder="请输入内容"
                    v-model="formInline.content"
                    size="mini  "
                  >
                    <i slot="prefix" class="el-input__icon el-icon-search"></i>
                  </el-input>
                </el-form-item>

                <el-form-item label="" label-width="80px">
                  <el-button type="primary" @click="showSearch" size="mini"
                    >查询</el-button
                  >
                  <!-- <el-button type="warning" @click="showImport" size="mini"
                    >导入</el-button
                  >
                  <el-button type="success" @click="getExport" size="mini"
                    >导出</el-button
                  > -->
                </el-form-item>
              </div>
            </el-form>
          </div>
          <div class="control-table">
            <el-table
              :data="tableData"
              style="width: 100%"
              row-key="codeKey"
              height="500px"
              :row-class-name="tableRowClassName"
              border
            >
              <el-table-column
                :label="item.value"
                :prop="item.key"
                :min-width="getColumnWidth(item)"
                align="center"
                v-for="(item, index) in fields"
                :key="index"
              />
              <!-- <el-table-column slot-scope="scope" label="工单明显表">
                <template>
                  <a href="#">点击前往</a>
                </template>
              </el-table-column> -->
            </el-table>
            <el-pagination
              background
              :hide-on-single-page="queryData.total <= 10"
              :current-page.sync="queryData.pageNo"
              :page-size="queryData.pageSize"
              :total="queryData.total"
              @size-change="getChange"
              @current-change="currentSearch"
              style="margin-top: 20px; text-align: center"
              :page-sizes="[10, 20, 30, 50, 70, 100]"
              layout="total, sizes, prev, pager, next"
            />
          </div>
        </div>
      </el-col>
    </div>
    <search-unit ref="search-unit" @getSearch="getSearch"></search-unit>
    <search-tree ref="search-tree"></search-tree>
    <import-complete ref="import-complete"></import-complete>
  </div>
</template>
<script>
import fields from "./json/config.js";
import apiSend from "@/api/iop/control/httpRequest";
import SearchComplete from "./components/search-complete";
import SearchUnit from "./components/search-unit";
import SearchTree from "./components/search-tree";
import ImportComplete from "./components/import-complete";
export default {
  components: {
    SearchComplete,
    SearchUnit,
    SearchTree,
    ImportComplete,
  },
  data() {
    var data = [
      {
        label: "地域",
        keyPath: "findCntyVo",
        keyTarget: {
          id: "upChnlType",
          name: "upChnlTypeName",
        },
        params: {
          cityCode: "",
          cityName: "",
          cntyCode: "",
          cntyName: "",
          gridCode: "",
          gridName: "",
        },
        id: 1,
        children: [],
      },
      {
        label: "客户等级",
        keyPath: "findGsmLvlInfo",
        keyTarget: {
          id: "gsmLvlCode",
          name: "gsmLvlName",
        },
        params: {
          dataSrc: "",
          gsmLvlCode: "",
          gsmLvlName: "",
        },
        id: 2,
        children: [],
      },
      {
        label: "受理渠道类型",
        keyPath: "findSatisfatChnlInfo",
        keyTarget: {
          id: "upChnlType",
          name: "upChnlTypeName",
        },
        params: {
          chnlType: "",
          chnlTypeName: "",
          dataSrc: "",
          upChnlType: "",
          upChnlTypeName: "",
        },
        id: 3,
        children: [],
      },
      {
        label: "是否抱怨单",
        id: 4,
        children: [
          {
            id: 1001,
            label: "是",
            children: [],
            foreFather: "是否抱怨单",
          },
          {
            id: 1002,
            label: "否",
            children: [],
            foreFather: "是否抱怨单",
          },
        ],
      },
      {
        label: "三级业务类型",
        keyPath: "findServiceTypeInfo",
        keyTarget: {
          id: "l1BusiTypeCode",
          name: "l1BusiTypeName",
        },
        params: {
          busiTypeCode: "",
          busiTypeName: "",
          dataSrc: "",
          l1BusiTypeCode: "",
          l1BusiTypeName: "",
          l2BusiTypeCode: "",
          l2BusiTypeName: "",
        },
        id: 5,
        children: [],
      },
      {
        label: "七级目录树",
        keyPath: "findSevenCatalogInfo",
        keyTarget: {
          id: "upChnlType",
          name: "upChnlTypeName",
        },
        id: 6,
        children: [],
        params: {
          busiTypeCode: "",
          busiTypeName: "",
          parentId: "9999",
        },
      },
    ];
    data.forEach((item) => {
      item.foreFather = item.label;
    });
    var leftMenu = data.slice();
    return {
      menuList: leftMenu,
      areaList: data,
      defaultProps: {
        children: "children",
        label: "label",
        foreFather: "foreFather",
        isLeaf: (data, node) => {
          console.log(!node.data);
          if (!node.data.children) {
            return true;
          }
        },
      },
      tableData: [],
      menuClassId: "",
      productId: "",
      productData: [],
      expands: [],
      formInline: {
        date: "",
        content: "",
      },
      filterData: {
        operate: [],
        area: [],
        search: "",
        searchType: "",
      },
      searchTypeList: ["10086短信", "10086人工", "10086热线"],
      operateList: [
        {
          key: 10,
          value: "报表展示字段",
        },
        {
          key: 11,
          value: "筛选制定维值",
        },
      ],
      props: {
        children: "children",
        label: "label",
      },
      allCheck: [],
      isIndeterminate: false,
      checkAll: false,
      fields: [],
      queryData: {
        total: 1,
        pageSize: 10,
        pageNo: 1,
      },
      currentKeys: [],
    };
  },
  computed: {
    getHeight: {
      get() {
        return window.innerHeight - 40 - 50 - 15 - 12 + "px";
      },
      set(val) {
        return val;
      },
    },
  },
  mounted() {
    this.fields = this.setFields(fields);
  },
  methods: {
    getColumnWidth(row) {
      let width = 120;
      switch (row.value) {
        case "区县":
          width = 150;
          break;
        case "网格":
          width = 150;
          break;
      }
      return width + "px";
    },
    setFields(current) {
      let list = [];
      for (var i in current) {
        var a = i.split("_");
        var o = a[0];
        for (var j = 1; j < a.length; j++) {
          o = o + a[j].slice(0, 1).toUpperCase() + a[j].slice(1);
        }
        console.log(o);
        list.push({
          key: o,
          value: current[i],
        });
      }
      console.log(list);
      list = list.concat([
        {
          key: "countres",
          value: "工单量",
        },
        {
          key: "sumres",
          value: "平均处理时长",
        },
      ]);
      function titleCase(str) {
        //把字符串所有的字母变为小写，并根据空格转换成字符数组
        let arr = str.toLowerCase().split(" ");
        //遍历字符数组
        for (var i = 0; i < arr.length; i++) {
          //把第一个字符变为大写
          arr[i] = arr[i][0].toUpperCase() + arr[i].substring(1, arr[i].length);
        }
        //加上空格，返回原模式的字符串
        return arr.join(" ");
      }
      return list;
    },
    showImport() {
      this.$refs["import-complete"].setShow(true);
    },
    setChildren(arr, target, requestArr) {
      arr.forEach((item) => {
        if (item.label == target.label) {
          item.children = requestArr;
          item.foreFather = target.foreFather;
        } else {
          if (Object.prototype.hasOwnProperty.call(item, "children")) {
            this.setChildren(item.children, target, requestArr);
          }
        }
      });
      return arr;
    },

    // 将list中的数据填充到 children 中
    setList(arr) {
      for (var i in arr) {
        for (var prop in arr[i]) {
          if (arr[i][prop] != null) {
            let obj = {};
            obj[prop] = arr[i][prop];
            if (prop.indexOf("Name") != -1) {
              arr[i]["label"] = arr[i][prop];
            }
            if (prop.indexOf("Code") != -1) {
              arr[i]["currentId"] = arr[i][prop];
            }
          }
        }
        let newArr = [];
        if (Object.prototype.hasOwnProperty.call(arr[i], "list")) {
          if (
            Object.prototype.toString.call(arr[i].list) == "[object Object]"
          ) {
            newArr = arr[i].list.data || [];
          } else {
            newArr = arr[i].list || [];
          }
        }
        arr[i].children = newArr;
        this.setList(newArr);
      }
      return arr;
    },
    treeClick(target, node, current) {
      console.log(target);
      if (
        target.keyPath == "findCntyVo" ||
        target.keyPath == "findSevenCatalogInfo"
      ) {
        this.$refs["search-tree"].setShow(true);
        return;
      }

      if (target.label == "地域" || target.label == "是否抱怨单") {
        return;
      }
      if (!Object.prototype.hasOwnProperty.call(target, "children")) {
        return;
      }
      if (target.children.length > 0) {
        return;
      }
      if (target.label == "地域" && target.foreFather == "null") {
        return;
      }
      if (target.foreFather == "地域") {
        target.params["cityCode"] = target.value;
      }
      if (!target.keyPath) {
        return;
      }
      apiSend[target.keyPath]({ data: target.params, showLoading: false })
        .then((res) => {
          let arr = this.setList(res.data.data);
          let newArr = this.setChildren(this.areaList, target, arr);
          console.log(newArr);
        })
        .catch((err) => {});
    },
    showSearch() {
      this.$refs["search-unit"].setShow(true);
    },
    currentSearch(e) {
      this.getSearch(this.currentKeys);
    },
    getChange(e) {
      console.log(e);
      this.queryData.pageNo = 1;
      this.queryData.pageSize = e;
      this.getSearch(this.currentKeys);
    },
    getSearch(arr) {
      var tree = this.$refs["tree"].getCheckedNodes();
      var moreTree = this.$refs["search-tree"].getSearch();
      var allTree = tree.concat(moreTree);
      this.currentKeys = arr;
      let a = {};
      for (var i in arr) {
        a[arr[i]["key"]] = arr[i]["value"];
      }
      console.log(a);
      this.fields = this.setFields(a);
      let queryData = this.queryData;
      var params = {
        busiType1Code: [],
        busiType2Code: [],
        busiType3Code: [],
        busiType4Code: [],
        busiType6Code: [],
        busiTypeCode: [],
        busiType5Code: [],
        chnlType: [],
        cityCode: [],
        cntyCode: [],
        gridCode: [],
        gsmLvlCode: [],
        isCmplnsTicket: "",
        l1BusiTypeCode: [],
        l2BusiTypeCode: [],
        secondConfirmCode: [],
        startDate: this.formInline.date ? this.formInline.date[0] : "",
        endDate: this.formInline.date ? this.formInline.date[1] : "",
        statisMonth: "",
        upChnlType: [],
        fields: arr.map((item) => item.key),
        ...queryData,
      };
      console.log(allTree);
      var query = this.fillParams(params, allTree);
      console.log(query);
      apiSend["findIndexInfo"]({ data: query })
        .then((res) => {
          console.log(this.tableData);
          this.tableData = res.data.data.records;
          this.queryData.pageNo = res.data.data.current;
          this.queryData.total = res.data.data.total;
          this.queryData.size = res.data.data.size;
        })
        .catch((err) => {
          console.log(err);
        });
    },
    fillParams(params, arr) {
      let query = JSON.parse(JSON.stringify(params));
      arr.forEach((item) => {
        if (item.foreFather == "地域") {
          query["cityCode"].push(item.value);
        }
      });
      arr = this.sortArea(arr);
      arr.forEach((item) => {
        for (var i in query) {
          if (Object.prototype.hasOwnProperty.call(item, i)) {
            if (item[i]) {
              query[i].push(item[i]);
              query[i] = Array.from(new Set(query[i]));
            }
          }
        }
        if (item.label == "是" || item.label == "否") {
          query["isCmplnsTicket"] = item.label;
        }
      });
      return query;
    },
    setParents(key, value, arr) {
      arr.forEach((item) => {
        item[key] = value;
        for (var i in item) {
          if (item[i] && (i.indexOf("Code") != -1 || i.indexOf("Type") != -1)) {
            if (Object.prototype.hasOwnProperty.call(item, "children")) {
              item.children = this.setParents(
                "parentId",
                item[i],
                item.children
              );
            }
          }
        }
      });
      return arr;
    },
    sortArea(arr) {
      var newArr = arr;
      newArr.forEach((item) => {
        if (item.value) {
          item.children = this.setParents(
            "parentId",
            item.value,
            item.children
          );
        } else {
          for (var i in item) {
            if (
              item[i] &&
              (i.indexOf("Code") != -1 ||
                (i.indexOf("Type") != -1 && i.indexOf("Name") == -1))
            ) {
              if (Object.prototype.hasOwnProperty.call(item, "children")) {
                item.children = this.setParents(
                  "parentId",
                  item[i],
                  item.children
                );
              }
            }
          }
        }
      });
      newArr = this.removalData(newArr);
      return newArr;
    },
    removalData(arr) {
      var newArr = arr.filter(
        (item) =>
          (item.foreFather !== null && item.label !== "是否抱怨单") ||
          item.foreFather === "地域"
      );
      // 过滤第一层数据 取值  本地 地域 => value  保留父数据 去除多余子数据
      // 如果是包含 p
      // 筛选 是否抱怨单 存在 是 和 否 两个 则 过滤该筛选条件
      let filterArr = [];
      var parentsArr = [];
      newArr.forEach((item) => {
        if (item.value) {
          parentsArr.push(item.value);
        }
        if (item.parentId) {
          parentsArr.push(item.parentId);
        }
        if (item.foreFather == "是否抱怨单") {
          filterArr.push(item.label);
        }
      });

      parentsArr = Array.from(new Set(parentsArr));
      newArr.filter((item) => {
        for (var i in item) {
          if (
            item[i] &&
            (i.indexOf("Code") != -1 ||
              (i.indexOf("Type") != -1 && i.indexOf("Name") == -1))
          ) {
            return parentsArr.includes(item[i]);
          }
        }
      });

      newArr = newArr.filter((item) => {
        if (parentsArr.length == 0) {
          return true;
        } else {
          return !parentsArr.includes(item.parentId);
        }
      });
      console.log(newArr);
      newArr = newArr.filter((item) => {
        if (item.label == "是" || item.label == "否") {
          if (filterArr.includes("是") && filterArr.includes("否")) {
            return item.foreFather != "是否抱怨单";
          }
          return true;
        }
        return true;
      });
      console.log(newArr);
      return newArr;
    },
    setId(arr) {
      arr.forEach((item, index) => {
        if (Object.prototype.hasOwnProperty.call(item, "children")) {
          item.children.forEach((childItem, childIndex) => {
            childItem.id = Number(item.id + "" + index + "" + (childIndex + 1));
          });
          this.setId(item.children);
        }
      });
      return arr;
    },
    handleCheckAllChange(val) {
      let newArr = this.areaList.map((item) => {
        return item.id;
      });
      let arr = val ? newArr : [];
      this.$refs.tree.setCheckedKeys(arr);
      this.isIndeterminate = false;
    },
    loadNode(node, resolve) {
      if (node.level === 0) {
        return resolve(this.areaList);
      }
      setTimeout(() => {
        resolve(node.data.children);
      }, 500);
    },
    tableRowClassName({ row, rowIndex }) {
      if (rowIndex % 2 != 0) {
        return "warning-row";
      }
      return "";
    },
    getExport() {
      this.$message.warning("暂未开发！");
    },
    getChild(arr) {
      arr.forEach((item) => {
        if (Object.prototype.hasOwnProperty.call(item, "child")) {
          item.child = this.getChild(item.child);
        }
      });
      return arr.filter((item) => item.isShow);
    },
  },
};
</script>
<style lang="less" scoped>
.app-main {
  padding: 10vh 20px;
}
.page-content {
  width: 100%;
  padding: 20px 15px;
  box-sizing: border-box;
  font-size: 12px;
  .page-wrapper {
    display: flex;
    width: 100%;
    justify-content: space-between;
    box-shadow: 0 0 3px #ddd;
    background-color: #fff;
    box-sizing: border-box;
    height: calc(100vh - 40px);
    position: relative;
    z-index: 200;
  }
  .el-tree {
    margin-top: 10px;
  }
  /deep/ .control-left {
    width: 100%;
  }
  /deep/ .el-tree-node__label {
    font-size: 12px;
  }

  /deep/ .control-right {
    .el-range-editor--small .el-range-input {
      cursor: pointer;
    }
    .el-form-item__label {
      font-size: 12px;
      letter-spacing: 1px;
    }
    .control-search {
      padding: 15px 15px 0px;
      label {
        font-size: 12px;
      }
    }
    .el-button {
      letter-spacing: 1px;
    }
  }

  /deep/ .el-table {
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
      }
      tr:hover > td {
        background-color: rgb(140, 197, 255) !important;
      }
    }
  }

  /deep/ .el-col-left {
    //   box-shadow: 0 0 5px #ddd;
    //   margin-right: 1px;
    box-shadow: 0 0 5px #ddd;
    display: flex;
    font-size: 18px;
    .center-contain,
    .header-contain {
      padding: 10px 20px;
      box-sizing: border-box;
    }
    .header-title,
    .center-title {
      text-align: center;
      line-height: 36px;
      // background: #66b1ff;
      color: #999;
      letter-spacing: 3px;
      font-size: 12px;
      border-bottom: 1px solid #ddd;
      label {
        margin-right: 15px;
      }
    }
    .el-checkbox-group {
      display: flex;
      flex-direction: column;
      label {
        //   display: flex;
        //   flex-direction: column;
        margin: 5px 0;
        letter-spacing: 1px;
      }
    }
    .search-type {
      padding: 0 10px;
      box-sizing: border-box;

      .el-input__inner,
      .el-input-group__append {
        border-radius: 0;
      }
      .el-radio-group {
        display: flex;
        flex-direction: column;
        justify-content: center;

        label {
          color: #aaa;
          letter-spacing: 0.5px;
        }
        //   align-items: center;
        .el-radio {
          margin-top: 15px;
          margin-right: 0;
        }
      }
    }

    .el-checkbox__label {
      font-size: 12px;
      letter-spacing: 1px;
    }
    .el-radio__label {
      font-size: 12px;
      letter-spacing: 1px;
    }
    .el-input__inner {
      font-size: 12px;
    }
    .el-form-item {
      margin-bottom: 0;
    }
  }
}

/deep/ .el-tree > .el-tree-node > .el-tree-node__content .el-checkbox {
  display: none;
}
/deep/
  .main-tree
  > .el-tree-node:nth-child(1)
  > .el-tree-node__content
  .el-tree-node__expand-icon,
/deep/
  .main-tree
  > .el-tree-node:nth-child(6)
  > .el-tree-node__content
  .el-tree-node__expand-icon {
  opacity: 0;
}
</style> 