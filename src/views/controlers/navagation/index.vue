<template>
  <div class="administration-wrapper">
    <el-row>
      <el-button
        class="buttona"
        type="primary"
        size="mini"
        @click="toPage"
        data-route="administration"
        v-if="userInfo.isAdmin"
      >快捷键管理</el-button>
    </el-row>
    <el-table
      :header-cell-style="headClass"
      border
      class="tablestyle"
      :data="tableData"
      style="width: 100%"
      :row-class-name="tableRowClassName"
    >
      <el-table-column label="快捷图标" width="180" align="center">
        <template slot-scope="scope">
          <div ref="button">
            <el-button size="mini" type="primary" plain>
              <!-- @click.native 组件中点击事件用@click.native -->
              {{ scope.row.shortcutIconBlob }}
            </el-button>
          </div>
        </template>
      </el-table-column>
      <el-table-column prop="shortcutKeyName" label="快捷键名称" width="180" align="center"></el-table-column>
      <el-table-column prop="functionalDescription" label="功能描述" width="300" align="center"></el-table-column>
      <el-table-column prop="createTime" label="创建时间" width="180" align="center"></el-table-column>
      <el-table-column prop="updateTime" label="修改时间" width="180" align="center"></el-table-column>
      <el-table-column label="状态" width="120" align="center">

                <!-- <el-form-item label="状态" label-width="80px" v-if="announceInfo.name == '新增公告'">
            <el-switch v-model="noticeType" active-color="#13ce66"></el-switch>
        </el-form-item> -->
        <template slot-scope="scope">
          <!-- {{ scope.row.quickType == 'true' ? '可用' : '不可用 ' }} -->

           <el-switch @change="setUse(scope.row,$event)" v-model="scope.row.quickType" active-color="#13ce66"></el-switch>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
import routesTarget from "../resource/json/routes.json";
import apiSend from "@/api/controls/httpRequest.js";
import {createNamespacedHelpers } from "vuex";
const { mapState,mapMutations} = createNamespacedHelpers("worker");
const {setRoutes,setTabs} = mapMutations(["setRoutes","setTabs"]);
export default {
  methods: {
    setUse(row,e) {
      // console.log(e,row);
      // return;
      row.quickType = row.quickType ? '1' : '0';
      let params = {
        functionalDescription: row.functionalDescription,
        quickType: row.quickType,
        shortcutIconBlob: row.shortcutIconBlob,
        shortcutId: row.shortcutId,
        shortcutKeyName: row.shortcutKeyName,
        url: row.url
      };
      // console.log(params);
      apiSend['quickUpdate']({
        data: params
      }).then(res => {
        if (res.data.data.code == 0) {
          // this.modalInfo.showModal = false;
          // this.$message.success(res.data.data.msg);
          this.getTable();
        }
      });
    },
    headClass() {
      //表头居中显示
      return "text-align:center";
    },
    tableRowClassName({ row, rowIndex }) {
      if (rowIndex % 2 != 0) {
        return "warning-line";
      }
      return "";
    },
    // getDate(row) {},
    getTable() {
     let params = {
        shortcutKeyName: "",
        quickType: ''
      };
      apiSend.quickList({
        data : params
      }).then(res => {
        // console.log(res)
        res.data.data.list.forEach((item)=>{
          item.quickType = item.quickType == '1';
        })
        this.tableData = res.data.data.list;
      });
      // this.tableData.forEach((item, index) => {
      //   item.id = index + 1;
      // });
    },
    toPage(e) {
      let route = e.currentTarget.getAttribute("data-route");
      console.log(route);
      this.updateRoutes(route);
    },
    updateRoutes(route, params = {}) {
      let currentRoute = routesTarget.routes.filter(
        item => item.route == route
      );
      let repObj = {
        path: "/moreMenu/" + route
      };
      if (params.t) {
        repObj["query"] = {
          t: params.t
        };
      }
      console.log(this.editableTabs);
      if (this.editableTabs.some(item => item.route == route)) {
        setTabs.call(this, currentRoute[0].name);
         this.$router.replace(repObj);
        return;
      }
      let arr = this.editableTabs.concat(currentRoute);
      let newRoutes = Array.from(new Set(arr));
      setTabs.call(this, currentRoute[0].name);
      setRoutes.call(this, newRoutes);
      this.$router.replace(repObj);
    }
  },
  mounted() {
    this.getTable();
  },
  computed: {
    editableTabs() {
      console.log(this.$store.state.worker.workRoutes)
      return this.$store.state.worker.workRoutes;
    },
    ...mapState(['userInfo'])
  },
  data() {
    return {
      tableData: [
        {
          date: "创建活动",
          name: "创建活动",
          address: "快捷键创建活动，跳转到营销活动创建界面",
          switch: true
        },
        {
          date: "创建客群",
          name: "创建客群",
          address: "快捷键创建客群，跳转到营销客群创建界面",
          switch: true
        },
        {
          date: "创建画像",
          name: "创建画像",
          address: "快捷键创建画像，跳转到营销画像创建界面",
          switch: true
        },
        {
          date: "创建标签",
          name: "创建标签",
          address: "快捷键创建标签，跳转到营销标签创建界面",
          switch: true
        },
        {
          date: "创建场景",
          name: "创建场景",
          address: "快捷键创建场景，跳转到营销场景创建界面",
          switch: true
        }
      ]
    };
  }
};
</script>
<style lang="less" scoped>
@import "../resource/style/common.less";
body {
  .buttona {
    display: flex;
    justify-content: center;
    align-items: center;
    // border: 1px solid darkturquoise;
    // width: 150px;
    // height: 10px;
    // background: rgb(229, 250, 253);
    // color: black;
    // font-size: 300;
    // font-weight: 600;
    margin-top: 15px;
    margin-bottom: 35px;
  }
}
.administration-wrapper {
  /deep/.el-table {
    thead {
      th {
        color: #333;
        background-color: rgb(242, 245, 252);
        text-align: center;
        // line-height: 10px;
        // padding-bottom: 10px;
        // font-weight: 500;
      }
    }
  }
  /deep/ .el-table__body-wrapper {
    th {
      text-align: center;
    }
  }
}
/deep/ .el-table__body-wrapper {
  tr {
    th {
      color: red;
    }
  }
}
.el-table {
  background: oldlace;
}
.el-table .success-row {
  background: oldlace;
}
.tablestyle {
  //   border-collapse: separate;
}
</style>