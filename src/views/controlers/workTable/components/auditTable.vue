<template>
  <div class="table-content">
    <el-table :data="tableData" style="width: 100%;" height="214px" row-key="codeKey" :row-class-name="tableRowClassName" border>
      <el-table-column label="活动编码" prop="pgId" align="center" />
      <el-table-column label="活动名称" prop="pgName" align="center" />
      <el-table-column label="当前申请人" prop="creator" align="center" />
      <el-table-column label="当前审批人" prop="value" align="center" />
      <el-table-column label="申请时间" prop="createDate" align="center" />
      <!-- <el-table-column label="状态" prop="state" align="center" /> -->
      <el-table-column label="当前节点" prop="state" align="center" />
    </el-table>

    <!-- <el-pagination
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :current-page="queryData.pageNo"
      :page-sizes="[10, 20, 50, 100]"
      :page-size="queryData.pageSize"
      layout="total, sizes, prev, pager, next, jumper"
      :total="queryData.total"
    ></el-pagination> -->
  </div>
</template>
<script>
import apiSend from "@/api/controls/httpRequest";
export default {
  data() {
    return {
      tableData: [],
      queryData: {
        pageNo: 0,
        pageSize: 10,
        total: 0
      }
    };
  },
  methods: {
    // 我的活动
    findTable() {
      let params = {
        pagemap: {
          pageNo: this.queryData.pageNo,
          pageSize: this.queryData.pageSize
        },
        siftmap: {
          staffId : this.$store.state.worker.userInfo.staffId
        }
      };
      apiSend
        .NotApproval({
          data: params
        })
        .then(res => {
          this.tableData = res.data.data.page.list;
          // this.queryData.pageNo = res.data.data.page.currPage;
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
        return "warning-line";
      }
      return "";
    },
  },
  mounted() {
    this.findTable();
  }
};
</script>