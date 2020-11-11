<template>
  <div class="W100 H100" >
    <div class="box-start filterDiv W100">
        <div>时间：</div>
        <el-date-picker
          v-model="value1"
          type="daterange"
          class="Mr-30"
          size="small"
          range-separator="至"
          start-placeholder="开始日期"
          end-placeholder="结束日期">
        </el-date-picker>
        <div>区域：</div>
        <el-select v-model="value" size="small" class="Mr-30" placeholder="请选择">
          <el-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value">
          </el-option>
        </el-select>
        <el-button type="primary" size="small" icon="el-icon-search">搜索</el-button>
      </div>
      <div class="tableContent" >
        <el-table
          :data="tableData"
          style="width: 100%;margin-bottom: 20px;"
          row-key="id"
          class="orgTable"
          stripe>
          <el-table-column
            prop="date"
            label="地市"
            width="50"
            >
          </el-table-column>
          <el-table-column
            prop="date"
            label="日期"
            width="50"
            >
          </el-table-column>
          <el-table-column
            prop="date"
            label="当天携入用户数"
            >
          </el-table-column>
          <el-table-column
            prop="name"
            width="50"
            label="环比"
            >
          </el-table-column>
          <el-table-column
            prop="address"
            width="50"
            label="同比"
            >
          </el-table-column>
          <el-table-column
            prop="date"
            label="当天携入用户数-联通"
            >
          </el-table-column>
          <el-table-column
            prop="name"
            width="50"
            label="环比"
            >
          </el-table-column>
          <el-table-column
            prop="address"
            width="50"
            label="同比"
            >
          </el-table-column>
          <el-table-column
            prop="date"
            label="当天携入用户数-电信"
            >
          </el-table-column>
          <el-table-column
            prop="name"
            width="50"
            label="环比"
            >
          </el-table-column>
          <el-table-column
            prop="address"
            width="50"
            label="同比"
            >
            </el-table-column>
            <el-table-column
            prop="date"
            label="期末携入用户数"
            >
          </el-table-column>
          <el-table-column
            prop="name"
            width="50"
            label="环比"
            >
          </el-table-column>
          <el-table-column
            prop="address"
            width="50"
            label="同比"
            >
          </el-table-column>
          <el-table-column
            prop="date"
            label="期末携入用户数-联通"
            >
          </el-table-column>
          <el-table-column
            prop="name"
            width="50"
            label="环比"
            >
          </el-table-column>
          <el-table-column
            prop="address"
            width="50"
            label="同比"
            >
          </el-table-column>
          <el-table-column
            prop="date"
            label="期末携入用户数-电信"
            >
          </el-table-column>
          <el-table-column
            prop="name"
            width="50"
            label="环比"
            >
          </el-table-column>
          <el-table-column
            prop="address"
            width="50"
            label="同比"
            >
          </el-table-column>
        </el-table>
        <el-pagination
          v-if="dataQuery.total >= dataQuery.pageSize"
          :current-page="dataQuery.currentPage"
          :page-size="dataQuery.pageSize"
          :total="dataQuery.total"
          style="margin-top: 20px; text-align: center;"
          layout="total, prev, pager, next, sizes, jumper"/>
      </div>
  </div>
</template>

<script>
export default {
  name: 'table3',
  data () {
    return {
      value1: null,
      options: [{
        value: '长沙市',
        label: '长沙市'
      }, {
        value: '株洲市',
        label: '株洲市'
      }, {
        value: '湘潭市',
        label: '湘潭市'
      }, {
        value: '郴州市',
        label: '郴州市'
      }, {
        value: '湘西',
        label: '湘西'
      }],
      value: '',
      dataQuery: {
        total: 30,
        pageSize: 10,
        currentPage: 1
      },
      tableData: [{
        date: '100',
        name: '205',
        address: '133'
      }, {
        date: '100',
        name: '600',
        address: '455'
      }, {
        date: '322',
        name: '100',
        address: '333'
      }, {
        date: '777',
        name: '888',
        address: '222'
      }]
    }
  }
}
</script>

<style scoped >
.filterDiv{
  height: 60px;
  padding-left: 20px;
  padding-top: 20px;
}
.tableContent{
  padding: 10px 20px;
  width: 100%;
  box-sizing: border-box;
  overflow-x: auto;
}
</style>
