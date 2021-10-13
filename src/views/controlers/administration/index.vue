<template id="administration">
  <div class="administration-wrapper">
    <el-form :inline="true">
      <el-form-item label="快捷键名称">
        <el-input v-model="formInline.name" placeholder="请输入名称" size="mini"></el-input>
      </el-form-item>
      <el-form-item label="状态">
        <el-select v-model="formInline.type" placeholder="请选择" size="mini">
          <el-option label="可用" :value="1" size="mini"></el-option>
          <el-option label="不可用" :value="0" size="mini"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item>
        <el-button class="buttons" type="primary" @click="setAdd" size="mini" v-if="userInfo.isAdmin">添加快捷键</el-button>
        <el-button class="buttons" type="primary" @click="getTable" size="mini">查询</el-button>
      </el-form-item>
    </el-form>
    <!-- 表格 -->
    <el-table border class="tablestyle" :data="tableData" style="width: 100%" size="mini" :row-class-name="tableRowClassName">
      <el-table-column label="快捷图标" width="150" align="center">
        <template slot-scope="scope">
          <div ref="button">
            <el-button size="mini" type="primary" plain>
              <!-- @click.native 组件中点击事件用@click.native -->
              {{ scope.row.shortcutIconBlob }}
            </el-button>
          </div>
        </template>
      </el-table-column>
      <el-table-column prop="shortcutKeyName" label="快捷键名称" width="150" align="center"></el-table-column>
      <el-table-column prop="functionalDescription" label="功能描述" width="300" align="center"></el-table-column>
      <el-table-column prop="createTime" label="创建时间" width="120" align="center"></el-table-column>
      <el-table-column prop="updateTime" label="修改时间" width="180" align="center"></el-table-column>
      <el-table-column label="状态" width="120" align="center">
        <template slot-scope="scope">
          <!-- {{ scope.row.quickType == 'true' ? '可用' : '不可用 ' }} -->
          <el-switch @change="setUse(scope.row,$event)" v-model="scope.row.quickType" active-color="#13ce66"></el-switch>
        </template>
      </el-table-column>
      <el-table-column label="操作" width="220" align="center" v-if="userInfo.isAdmin">
        <template slot-scope="scope">
          <el-button type="primary" size="mini" @click="setUpdate(scope.row)">修改</el-button>
          <el-button type="danger" size="mini" @click="deleteClick(scope.row)">删除</el-button>
        </template>
        <!-- <a href="#">修改</a> <a href="#">删除</a> -->
      </el-table-column>
    </el-table>
    <!-- 底部表单信息 -->
    <!-- <el-divider direction="vertical"></el-divider> -->

    <!-- <el-divider content-position="right"></el-divider> -->

    <el-dialog :title="modalInfo.title" :visible.sync="modalInfo.showModal" width="40%">
      <div class="formbottom">
        <!-- <div class="spanfont">新建/修改快捷键导航</div> -->
        <el-form
          :inline="true"
          :model="formInline"
          class="form-inline-search formbottom"
          size="mini"
        >
          <!-- <el-divider></el-divider> -->
          <el-form-item label="快捷键图标名称" label-width="110px">
            <el-input v-model="modalInfo.shortcutIconBlob" placeholder="请输入快捷键图标名称"></el-input>
          </el-form-item>
          <el-form-item label="快捷键名称" label-width="110px">
            <el-input v-model="modalInfo.shortcutKeyName" placeholder="请输入名称"></el-input>
          </el-form-item>
          <el-form-item label="功能描述" label-width="110px">
            <el-input
              class="description"
              v-model="modalInfo.functionalDescription"
              placeholder="请输入描述内容"
              type="textarea"
              rows="3"
            ></el-input>
          </el-form-item>
          <el-form-item label="跳转地址" label-width="110px">
            <el-input v-model="modalInfo.url" placeholder="请输入跳转地址"></el-input>
          </el-form-item>
          <!-- <el-form-item label="快捷键名称" label-width="100px">
            <el-input v-model="modalInfo.name" placeholder="请输入名称"></el-input>
          </el-form-item>-->
          <!-- <el-form-item label="状态" label-width="110px">
            <el-switch @change="setUse" v-model="modalInfo.quickType" active-color="#13ce66"></el-switch>
          </el-form-item>-->
          <el-form-item>
            <el-button class="buttonb" type="primary" @click="submitClick">确认</el-button>
          </el-form-item>
        </el-form>
      </div>
    </el-dialog>
  </div>
</template>

<script>
import apiSend from "@/api/controls/httpRequest.js";
export default {
  data() {
    return {
      modalInfo: {
        title: "修改快捷键导航",
        showModal: false,
        user: "",
        region: "",
        content: ""
      },
      formInline: {
        name: "",
        type: ""
      },
      tableData: [
        // {
        //   date: "创建活动",
        //   name: "创建活动",
        //   address: "快速创建活动，跳转到营销活动创建界面",
        //   time: "20210301",
        //   timeout: "",
        //   state: "可用",
        //   operation: ""
        // },
        // {
        //   date: "创建客群",
        //   name: "创建客群",
        //   address: "快捷键创建客群，跳转到营销客群创建界面",
        //   time: "20210301",
        //   timeout: "",
        //   state: "可用",
        //   operation: ""
        // },
        // {
        //   date: "创建画像",
        //   name: "创建画像",
        //   address: "快速创建画像，跳转到营销画像创建界面",
        //   time: "20210301",
        //   timeout: "20210401",
        //   state: "可用",
        //   operation: ""
        // },
        // {
        //   date: "创建标签",
        //   name: "创建标签",
        //   address: "快速创建标签，跳转到营销标签创建界面",
        //   time: "20210301",
        //   timeout: "",
        //   state: "可用",
        //   operation: ""
        // },
        // {
        //   date: "创建场景",
        //   name: "创建场景",
        //   address: "快速创建场景，跳转到营销场景创建界面",
        //   time: "20210301",
        //   timeout: "",
        //   state: "可用",
        //   operation: ""
        // },
        // {
        //   date: "添加素材",
        //   name: "添加素材",
        //   address: "快速添加素材，跳转到添加素材界面",
        //   time: "20210301",
        //   timeout: "20210401",
        //   state: "可用",
        //   operation: ""
        // }
      ]
    };
  },
  computed:{
    ...mapState(['userInfo']),
  },
  mounted() {
    this.getTable();
  },
  methods: {
    onSubmit() {
      console.log("submit!");
    },
    tableRowClassName({ row, rowIndex }) {
      console.log(rowIndex % 2 == 0);
      if (rowIndex % 2 != 0) {
        return "warning-row";
      }
      return "";
    },
    setUpdate(row) {
      console.log(row);
      row.quickType = row.quickType ? '1' : '0';
      this.modalInfo = {
        title: "修改快捷键导航",
        showModal: true,
        ...row
      };
      // this.modalInfo.showModal = true;
    },
    setAdd() {
      this.modalInfo = {
        title: "添加快捷键导航",
        showModal: true,
        shortcutKeyName: "",
        functionalDescription: "",
        url: "",
        quickType: '0'
      };
    },
    submitClick() {
      let keyNames =
        this.modalInfo.title == "添加快捷键导航" ? "quickAdd" : "quickUpdate";
      let params = {
        functionalDescription: this.modalInfo.functionalDescription,
        quickType: this.modalInfo.quickType,
        shortcutIconBlob: this.modalInfo.shortcutIconBlob,
        shortcutId: this.modalInfo.shortcutId,
        shortcutKeyName: this.modalInfo.shortcutKeyName,
        url: this.modalInfo.url
      };
      console.log(params);
      apiSend[keyNames]({
        data: params
      }).then(res => {
        if (res.data.data.code == 0) {
          this.modalInfo.showModal = false;
          this.$message.success(res.data.data.msg);

          this.getTable();
        } else {
          this.$message.warning(res.data.data.msg);
        }
      });
    },
    getTable() {
      let params = {
        shortcutKeyName: this.formInline.name,
        quickType: this.formInline.type
      };
      apiSend.quickList({ data: params }).then(res => {
        // console.log(res)
        res.data.data.list;
        if (res.data.data.list.length != 0) {
          res.data.data.list.forEach(item => {
            item.quickType = item.quickType
              ? item.quickType == "1"
                ? true
                : false
              : false;
          });
        }
        this.tableData = res.data.data.list;
      });
    },
    setUse(row,e) {
      // console.log(e,row);
      // return;
      row.quickType = row.quickType ? '1' : '0';
      this.modalInfo = {
        title: "修改快捷键导航",
        showModal: false,
        ...row
      };
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
    deleteClick(row) {
      this.$confirm("进行删除操作, 是否继续?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning"
      }).then(res => {
        let params = {
          ids: row.shortcutId
        };
        apiSend.quickDelete({ data: params }).then(res => {
          if (res.data.data.code == 0) {
            this.$message.success(res.data.data.msg);
            this.getTable();
          } else {
            this.$message.warning(res.data.data.msg);
          }
        });
      });
    }
  }
};
</script>
<style lang="less" scoped>
@import "../resource/style/common.less";
// /deep/.el-input__inner {
//   width: 140px;
//   &::placeholder {
//     // color: red;
//     // font-size: 16px;
//     // display: flex;
//     text-align: right;
//     margin-right: 5px;
//   }
//   &::label {
//     margin-right: 50px;
//   }
// }
.administration-wrapper {
  //   .el-divider--horizontal {
  //     margin: 5px auto;
  //   }
  .spanfont {
    color: #4d4c4c;
    font-size: 14px;
    padding: 10px 15px;
    position: relative;
  }
  .spanfont::after {
    content: "";
    width: 100%;
    height: 1px;
    background: #ddd;
    display: inline-block;
    position: absolute;
    bottom: 0;
    left: 0;
  }
  .form-inline-search {
    // margin-top: 10px;
    padding: 10px 15px;
  }
  /deep/ .el-table {
    thead {
      th {
        color: #333;
        background-color: rgb(242, 245, 252);
        text-align: center;
        width: 1px;
      }
    }
  }
  .el-form-item__label {
    margin: 10px;
  }
  .form-inline-item {
    display: flex;
    flex-wrap: wrap;
    .buttons {
      border: 1px solid darkturquoise;
    }

    /deep/ .el-form-item {
      margin-right: 60px;
      display: flex;
      flex-wrap: wrap;
      .el-form-item__label {
        margin-right: 10px;
      }
    }
  }
  .el-form {
    .buttonb {
      // border: 1px solid darkturquoise;
      // margin-left: 20px;
      margin-left: 100px;
    }
  }
  /deep/ .cell a {
    margin-left: 6px;
    color: #333;
  }
  ////////问题
  .formbottom {
    display: flex;
    flex-direction: column;
    /deep/ .el-form-item__content {
      min-width: 280px;
    }
    /deep/ .description {
      background: red;
    }
    background: rgb(242, 245, 252);
    /deep/ .state {
      margin-left: 40px;
      display: block;
    }
  }
}
</style>