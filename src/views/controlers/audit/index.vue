<template>
  <div class="notice-page">
    <div class="form-notice">
      <div class="page-title">待审批活动列表</div>
    </div>
    <div class="form-search">
      <el-form :inline="true">
        <el-form-item label="活动名称">
          <el-input
            v-model="searchInline.pgName"
            size="mini"
            placeholder="请输入名称"
          ></el-input>
        </el-form-item>
        <el-form-item label="审批人">
          <el-input
            v-model="searchInline.creator"
            size="mini"
            placeholder="请输入名称"
          ></el-input>
        </el-form-item>
        <el-form-item label="状态">
          <el-select v-model="searchInline.state" size="mini">
            <el-option
              v-for="item in statusList"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            >
            </el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="申请时间">
          <el-date-picker
            v-model="searchInline.createDate"
            type="date"
            placeholder="选择日期"
            size="mini"
            value-format="yyyyMMdd"
            format="yyyy-MM-dd"
          >
          </el-date-picker>
        </el-form-item>
        <el-form-item>
          <el-button size="mini" type="primary" @click="getTable">查询</el-button>
          <el-button size="mini" type="info" plain @click="setEmpty">清空</el-button>
        </el-form-item>
      </el-form>
      <!-- <el-button type="danger" size="mini">批量删除</el-button> -->
      <el-table :data="tableData" style="width: 100%" row-key="codeKey" border>
        <!-- <el-table-column type="selection" width="55"> </el-table-column> -->
      <el-table-column label="活动编码" prop="pdId" align="center" />
      <el-table-column label="活动名称" prop="pgName" align="center" />
      <el-table-column label="当前审批人" prop="creator" align="center" />
      <el-table-column label="申请时间" prop="createDate" align="center" />
      <el-table-column label="状态" align="center">
        <template slot-scope="scope" >
          <span :style="{color : statusColor(scope.row.state)}">{{getStatus(scope.row.state)}}</span>
        </template>
      </el-table-column>
      <el-table-column label="当前节点" prop="value" align="center" />
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
  </div>
</template>
<script>
import apiSend from "@/api/controls/httpRequest.js";
export default {
  data() {
    return {
      searchInline: {
        pgName: "",
        creator: "",
        state: "",
        createDate: "",
      },
      statusList: [
        {
          label: "发布失败",
          value: 'publishFailed',
          color : '#F56C6C'
        },
        {
          label: "待审批",
          value: 'waitApproval',
          color : '#E6A23C'
        },
        {
          label: "拒绝",
          value: 'reject',
          color : '#C0C4CC'
        },
        {
          label: "停止",
          value: 'stop',
          value : '#E6A23C'
        },
        {
          label: "暂停",
          value: 'suspend',
          value : '#E6A23C'
        },
        {
          label: "已发布",
          value: 'published',
          value : '#67C23A'
        },
        {
          label: "草稿",
          value: 'draft',
          value : '#909399'
        },
      ],
      queryData: {
        total: 0,
        pageSize: 10,
        pageNo: 1
      },
      tableData: [],
      currentPage: 1,
    };
  },
  mounted() {
    this.getTable();
  },
  methods: {
    setEmpty(){
        this.searchInline = {
        pgName: "",
        creator: "",
        state: "",
        createDate: "",
      };
    },
    toPages() {},
    getStatus(value){
      let current = this.statusList.find((item)=> item.value == value)
      return current ? current.label : ''
    },
    statusColor(value){
      let current = this.statusList.find((item)=> item.value == value)
      return current ? current.color : ''
    },
    getTable() {
      let params = {
        pagemap: {
          ...this.queryData
        },
        siftmap: {
          pgName : this.searchInline.pgName,
          creator : this.searchInline.creator,
          state : this.searchInline.state,
          createDate : this.searchInline.createDate,
          staffId : this.$store.state.worker.userInfo.staffId
        },
      };
      console.log(params)
      apiSend.NotApproval({ data: params }).then(res => {
        this.tableData = res.data.data.page.list;
        this.queryData.total = res.data.data.page.totalCount;
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
  },
};
</script>
<style lang="less" scoped>
@import "../resource/style/common.less";
.notice-page {
  width: 100%;
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