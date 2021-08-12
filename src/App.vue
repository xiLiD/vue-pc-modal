<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
export default {
  name: "App",
};
</script>

<style lang="less">
@import "./assets/common.less";
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #333333;
  background-color: rgb(244, 245, 248);
  font-size: 16px;
}
.demo-form-inline {
  display: flex;
  justify-content: space-between;
}
.el-dialog {
  width: 35%;
}
.export-dialog .el-dialog__body {
  padding-top: 0;
}
.el-message .el-message-box__wrapper {
  z-index: 99999;
}
.page-container {
  /* overflow-y: scroll; */
  box-sizing: border-box;
  width: 100%;
  padding: 20px;
  box-shadow: 0 0 5px #999;
  border-radius: 5px;
  background-color: #fff;
}
.app-main {
  /* margin-top: 30px; */
  /* padding-top: 3rem; */
  display: flex;
  justify-content: center;
  /* padding: 30px 20px; */
  box-sizing: border-box;
  width: 100%;
  min-height: 100vh;
  position: relative;
}
.line {
  position: relative;
  padding-top: 30px !important;
}
.line::before {
  content: "";
  width: 100%;
  height: 1px;
  background-color: rgba(0, 0, 0, 0.2);
  position: absolute;
  top: 10px;
  left: 0px;
}
.el-table--border,
.el-table--group {
  border: 1px solid #ebeef5 !important;
}

.el-table th.gutter {
  display: table-cell !important;
}

.el-table colgroup.gutter {
  display: table-cell !important;
}

/deep/ .el-form--inline .el-form-item {
  margin-bottom: 0px !important;
}

/deep/ .el-table {
  margin-top: 10px;
  width: 100%;
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
      background-color: rgb(217, 236, 255) !important;
    }
  }
}

.page-title {
  padding: 10px 10px 10px 0;
  margin-bottom: 10px;
  color: #409eff;
  font-size: 18px;
  color: #409eff;
  letter-spacing: 1px;
  font-family: "Microsoft YaHei";
  position: relative;
}
.page-title::after {
  content: "";
  width: 100%;
  height: 1px;
  background-color: #ddd;
  // padding:0;
  position: absolute;
  bottom: 0;
  left: 0;
  // padding-bottom: 10px;
}
</style>
