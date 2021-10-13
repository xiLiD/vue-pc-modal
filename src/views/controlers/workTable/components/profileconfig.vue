<template>
  <div class="table-content">
    <el-table :data="tableData" style="width: 100%;" height="214px" row-key="codeKey" :row-class-name="tableRowClassName" border>
      <el-table-column label="画像编码" prop="tagId" align="center" />
      <el-table-column label="画像名称" prop="tagName" align="center" />
      <el-table-column label="创建客群数" prop="tagidcount" align="center" />
      <el-table-column label="最佳活动接触数" prop="downCnt" align="center" />
      <el-table-column label="最佳活动接触率" align="center">
        <template slot-scope="scope">
          <span>{{scope.row.downRate}}%</span>
        </template>
      </el-table-column>>
      <el-table-column label="最佳活动办理数" prop="acceptCnt" align="center" />
      <!-- <el-table-column label="最佳活动办理率" prop="acceptRate" align="center" /> -->
      <el-table-column label="最佳活动接触率" align="center">
        <template slot-scope="scope">
          <span>{{scope.row.acceptRate}}%</span>
        </template>
      </el-table-column>>
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
          staffId : this.$store.state.worker.userInfo.staffId
        }
      };
      apiSend
        .systemPage({
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