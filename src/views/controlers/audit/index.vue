<template>
  <div class="notice-page">
    <div class="form-notice">
      <el-button type="primary" icon="el-icon-plus" size="mini" plain
        >新增公告</el-button
      >
    </div>
    <div class="form-search">
      <el-form :inline="true">
        <el-form-item label="活动名称">
          <el-input
            v-model="searchInline.name"
            size="mini"
            placeholder="请输入名称"
          ></el-input>
        </el-form-item>
        <el-form-item label="申请人">
          <el-input
            v-model="searchInline.user"
            size="mini"
            placeholder="请输入名称"
          ></el-input>
        </el-form-item>
        <el-form-item label="状态">
          <el-select v-model="searchInline.status" size="mini">
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
            v-model="searchInline.time"
            type="date"
            placeholder="选择日期"
            size="mini"
          >
          </el-date-picker>
        </el-form-item>
        <el-form-item>
          <el-button size="mini" type="primary">查询</el-button>
          <el-button size="mini" type="info" plain>清空</el-button>
        </el-form-item>
      </el-form>
      <el-button type="danger" size="mini">批量删除</el-button>
      <el-table
        :data="tableData"
        style="width: 100%"
        row-key="codeKey"
        :height="getHeight"
        border
      >
        <el-table-column type="selection" width="55"> </el-table-column>
        <el-table-column label="公告名称" prop="city" align="center" />
        <el-table-column label="公告内容" prop="cnty" align="center" />
        <el-table-column label="生效时间" prop="grid" align="center" />
        <el-table-column label="失效时间" prop="order" align="center" />
        <el-table-column label="创建用户" prop="population" align="center" />
        <el-table-column label="状态" prop="popuNum1" align="center" />
        <el-table-column label="操作" align="center">
          <template slot-scope="scope">
            <el-button type="primary" size="mini">修改</el-button>
            <el-button type="danger" size="mini">删除</el-button>
          </template>
        </el-table-column>
      </el-table>

      <el-pagination
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page="currentPage"
        :page-sizes="[10, 20, 50, 100]"
        :page-size="10"
        layout="total, sizes, prev, pager, next, jumper"
        :total="100"
      >
      </el-pagination>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      searchInline: {
        name: "",
        user: "",
        status: "",
        time: "",
      },
      statusList: [
        {
          label: "状态1",
          value: 1,
        },
        {
          label: "状态2",
          value: 2,
        },
      ],
      tableData: [],
      currentPage: 1,
    };
  },
  mounted() {
    this.getTable();
  },
  methods: {
    getTable() {
      let data = [
        {
          city: "活动编码1",
          cnty: "活动名称1",
          grid: "李雷",
          order: "王XX",
          population: "2021/3/20",
          popuNum1: "集运审批",
        },
        {
          city: "活动编码1",
          cnty: "活动名称1",
          grid: "李雷",
          order: "王XX",
          population: "2021/3/20",
          popuNum1: "集运审批",
        },
        {
          city: "活动编码1",
          cnty: "活动名称1",
          grid: "李雷",
          order: "王XX",
          population: "2021/3/20",
          popuNum1: "集运审批",
        },
        {
          city: "活动编码1",
          cnty: "活动名称1",
          grid: "李雷",
          order: "王XX",
          population: "2021/3/20",
          popuNum1: "集运审批",
        },
        {
          city: "活动编码1",
          cnty: "活动名称1",
          grid: "李雷",
          order: "王XX",
          population: "2021/3/20",
          popuNum1: "集运审批",
        },
      ];

      this.tableData = data;
      console.log(this.tableData);
    },
    handleSizeChange(val) {
      console.log(`每页 ${val} 条`);
    },
    handleCurrentChange(val) {
      console.log(`当前页: ${val}`);
    },
  },
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