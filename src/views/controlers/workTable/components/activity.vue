<template>
  <div class="table-content">
    <el-table :data="tableData" style="width: 100%;" height="214px" row-key="codeKey" :row-class-name="tableRowClassName" border>
      <el-table-column label="活动编码" prop="activeId" align="center" />
      <el-table-column label="活动名称" prop="activeName" align="center" />
      <el-table-column label="活动状态" align="center" >
        <template slot-scope="scope">
          {{getStatusName(scope.row.activeStat)}}
        </template>
      </el-table-column>
      <el-table-column label="活动状态名称" prop="activeStatName" align="center" />
      <!-- <el-table-column label="用户编码" prop="userId" align="center" /> -->
      <el-table-column label="目标客户数" prop="userCnt" align="center" />
      <el-table-column label="接触数" prop="downCnt" align="center" />
      <el-table-column label="接触率" prop="downRate" align="center" />
      <el-table-column label="办理数" prop="acceptCnt" align="center" />
      <!-- <el-table-column label="办理率" prop="acceptRate" align="center" /> -->
      <el-table-column label="办理率" align="center">
        <template slot-scope="scope">
          <span>{{scope.row.acceptRate}}%</span>
        </template>
      </el-table-column>
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
      status : [{
        value : 1,
        name : '执行'
      },{
        value : 2,
        name : '完成'
      },{
        value : 3,
        name : '暂停'
      },{
        value : 4,
        name : '草稿'
      }],
      tableData: [],
      queryData: {
        pageNo: 0,
        pageSize: 10,
        total: 0
      }
    };
  },
  
  methods: {
    getStatusName(val){
      let current = this.status.find((item)=>item.value == val)
      return current['name'];
    },
    // 我的活动
    findTable() {
      // console.log(this.$store.state.worker.userInfo.staffId)
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
        .activityPage({
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