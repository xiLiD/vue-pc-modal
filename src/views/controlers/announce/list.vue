<template>
  <div class="notice-page">
    <div class="form-notice">
      <el-button type="primary" icon="el-icon-plus" size="mini" plain @click="showAdd" v-if="userInfo.isAdmin">新增公告</el-button>
    </div>
    <div class="form-search">
      <el-form :inline="true">
        <el-form-item label="活动名称">
          <el-input v-model="searchInline.name" size="mini" placeholder="请输入名称"></el-input>
        </el-form-item>
        <!-- <el-form-item label="申请人">
          <el-input v-model="searchInline.user" size="mini" placeholder="请输入名称"></el-input>
        </el-form-item> -->
        <el-form-item label="状态">
          <el-select v-model="searchInline.status" size="mini">
            <el-option v-for="item in statusList" :key="item" :label="getName(item)" :value="item"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="申请时间">
          <el-date-picker
            v-model="searchInline.time"
            type="daterange"
            range-separator="至"
            start-placeholder="开始日期"
            end-placeholder="结束日期"
            size="mini"
            format="yyyy-MM-dd"
            value-format="yyyyMMdd"
          ></el-date-picker>
        </el-form-item>
        <el-form-item>
          <el-button size="mini" type="primary" @click="getTable">查询</el-button>
          <el-button size="mini" type="info" plain @click="setEmpty">清空</el-button>
        </el-form-item>
      </el-form>
      <el-button type="danger" size="mini" @click="deleteMore" v-if="userInfo.isAdmin">批量删除</el-button>
      <el-table
        :data="tableData"
        style="width: 100%"
        row-key="codeKey"
        border
        @selection-change="handleSelectionChange"
        :row-class-name="tableRowClassName"
      >
        <el-table-column type="selection" width="55" v-if="userInfo.isAdmin"></el-table-column>
        <el-table-column label="公告编码" prop="noticeId" align="center" />
        <el-table-column label="公告名称" prop="noticeName" align="center" />
        <el-table-column label="公告内容" prop="noticeContent" align="center" />
        <el-table-column label="申请人" prop="createUser" align="center" />
        <el-table-column label="申请时间" prop="createTime" align="center" />
        <el-table-column label="公告状态" align="center">
          <template slot-scope="scope">
            <!-- {{ scope.row.quickType == 'true' ? '可用' : '不可用 ' }} -->
            <el-switch
              :disabled="!userInfo.isAdmin"
              @change="setUse(scope.row,$event)"
              v-model="scope.row.noticeType"
              active-color="#13ce66"
            ></el-switch>
          </template>
        </el-table-column>
        <el-table-column label="操作" align="center" v-if="userInfo.isAdmin">
          <template slot-scope="scope">
            <el-button type="primary" size="mini" @click="updateClick(scope.row)">修改</el-button>
            <el-button type="danger" size="mini" @click="deleteClick(scope.row)">删除</el-button>
          </template>
        </el-table-column>
      </el-table>

      <el-pagination
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page="queryData.pageNo"
        :page-sizes="[10, 20, 50, 100]"
        :page-size="queryData.pageSize"
        layout="total, sizes, prev, pager, next, jumper"
        :total="queryData.total"
      ></el-pagination>
    </div>
    <announce-add ref="announce-add" :modalInfo="addModal" @search="getSearch"></announce-add>
  </div>
</template>
<script>
import announceAdd from "./add.vue";
import apiSend from "@/api/controls/httpRequest.js";
import { createNamespacedHelpers } from "vuex";
const { mapState } = createNamespacedHelpers("worker");
export default {
  components: {
    announceAdd
  },
  data() {
    return {
      searchInline: {
        name: "",
        user: "",
        status: "",
        time: ""
      },
      statusList: [],
      tableData: [],
      currentPage: 1,
      queryData: {
        total: 0,
        pageSize: 10,
        pageNo: 1
      },
      modalInfo: {},
      Selection: ""
    };
  },
  computed:{
    ...mapState(['userInfo']),
  },
  mounted() {
    this.getStatus();
    this.getTable();
  },
  methods: {
    getName(item) {
      console.log(item)
      return item == 1 ? '激活' : '未激活'
    },
    setUse(row, e) {
      console.log(e, row);
      // return;
      row.noticeType = row.noticeType ? "1" : "0";
      this.modalInfo = {
        title: "修改快捷键导航",
        showModal: false,
        ...row
      };
      // let params = {
      //   functionalDescription: row.functionalDescription,
      //   quickType: row.quickType,
      //   shortcutIconBlob: row.shortcutIconBlob,
      //   shortcutId: row.shortcutId,
      //   shortcutKeyName: row.shortcutKeyName,
      //   url: row.url
      // };

      let params = {
        noticeName: row.noticeName,
        noticeContent: row.noticeContent,
        beginTime: row.beginTime,
        endTime: row.endTime,
        noticeType: row.noticeType,
        noticeId: row.noticeId
      };

      // console.log(params);
      apiSend["editData"]({
        data: params
      }).then(res => {
        if (res.data.data.code == 0) {
          // this.modalInfo.showModal = false;
          // this.$message.success(res.data.data.msg);
          this.getTable();
        }
      });
    },
    showAdd() {
      this.$refs["announce-add"].setVisible({
        showModal: true,
        name: "新增公告",
        noticeName: "",
        time: "",
        noticeList: "",
        noticeContent: "",
        createUser: ""
      });
    },
    updateClick(row) {
      console.log(row);
      this.$refs["announce-add"].setVisible({
        showModal: true,
        name: "修改公告",
        noticeList: this.statusList,
        ...row
      });
    },
    getStatus() {
      apiSend.getNoticeType().then(res => {
        this.statusList = res.data.data.list;
      });
    },
    setEmpty() {
      this.searchInline = {
        name: "",
        user: "",
        status: "",
        time: ""
      };
    },
    getSearch() {
      console.log("查询");
      this.getTable();
    },
    getTable() {
      let params = {
        pagemap: {
          ...this.queryData
        },
        siftmap: {
          noticeName: this.searchInline.name,
          // createUser: this.searchInline.user,
          noticeType: this.searchInline.status
        },
        startTime: this.searchInline.time ? this.searchInline.time[0] : "",
        endTime: this.searchInline.time ? this.searchInline.time[1] : ""
      };
      apiSend.noticePage({ data: params }).then(res => {
        res.data.data.page.list.forEach(item => {
          item.noticeType = item.noticeType == "1" ? true : false;
        });
        this.tableData = res.data.data.page.list;
        this.queryData.total = res.data.data.page.totalCount;
      });
    },
    deleteMore() {
      if (this.Selection == "") {
        this.$message.warning("请选择要删除的项!");
      }
      let arr = this.Selection.map(item => item.noticeId);
      console.log(arr);
      this.deleteQuest(arr);
    },
    deleteClick(row) {
      this.deleteQuest([row.noticeId]);
    },
    deleteQuest(arr) {
      this.$confirm("进行删除操作, 是否继续?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning"
      }).then(res => {
        let params = {
          ids: arr
        };
        apiSend.deleteData({ data: params }).then(res => {
          // this.tableData = res.data.data.page.list;
          // this.queryData.total = res.data.data.page.totalCount;
          if (res.data.data.code == 0) {
            // this.announceInfo.showModal = false;
            this.$message.success(res.data.data.msg);
            // this.$emit('search');
            this.getTable();
          } else {
            this.$message.warning(res.data.data.msg);
          }
        });
      });
    },
    handleSizeChange(val) {
      this.queryData.pageNo = 1;
      this.queryData.pageSize = val;
      this.getTable();
    },
    handleCurrentChange(val) {
      this.queryData.pageNo = val;
      this.getTable();
    },
    handleSelectionChange(val) {
      this.Selection = val;
    },
        tableRowClassName({ row, rowIndex }) {
      if (rowIndex % 2 != 0) {
        return "warning-line";
      }
      return "";
    },
  }
};
</script>
<style lang="less" scoped>
.notice-page {
  width: 100%;
  padding: 15px 10px;

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
      }
      // tr:hover > td {
      //   background-color: rgb(140, 197, 255) !important;
      // }
    }
  }
  /deep/ .el-pagination {
    text-align: center;
    margin-top: 10px;
  }
}
</style>