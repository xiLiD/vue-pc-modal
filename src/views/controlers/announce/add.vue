<template>
  <el-dialog :title="announceInfo.name" :visible.sync="announceInfo.showModal" width="60%">
    <div class="announce-form">
      <el-form class="form">
        <el-form-item label="公告名称" label-width="80px">
          <el-input v-model="announceInfo.noticeName" placeholder="请输入名称" size="mini"></el-input>
        </el-form-item>
        <el-form-item label="公告内容" label-width="80px">
          <el-input
            v-model="announceInfo.noticeContent"
            type="textarea"
            placeholder="请输入公告内容"
            size="mini"
            :rows="5"
          ></el-input>
        </el-form-item>
        <!-- <el-form-item label="申请人" label-width="80px">
          <el-input
            v-model="announceInfo.createUser"
            placeholder="请输入申请人"
            size="mini"
          ></el-input>
        </el-form-item>-->
        <!-- <el-form-item label="状态" label-width="80px" v-if="announceInfo.name == '新增公告'">
            <el-switch v-model="noticeType" active-color="#13ce66"></el-switch>
        </el-form-item> -->
        <!-- <el-form-item label="申请人">
          <el-input
            v-model="announceInfo.createUser"
            type="textarea"
            placeholder="请输入公告内容"
            size="mini"
            :rows="5"
          ></el-input>
        </el-form-item>-->
        <el-form-item label="开始时间" label-width="80px">
          <el-date-picker
            v-model="announceInfo.time"
            type="daterange"
            range-separator="至"
            start-placeholder="开始日期"
            end-placeholder="结束日期"
            size="mini"
            value-format="yyyyMMdd"
            format="yyyy-MM-dd"
          ></el-date-picker>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" size="mini" class="operate-box" @click="submitClick">提交</el-button>
        </el-form-item>
      </el-form>
    </div>
  </el-dialog>
</template>
<script>
import apiSend from "@/api/controls/httpRequest.js";
export default {
  data() {
    return {
      dialogVisible: false,
      announceInfo: {
        title: "",
        name: "",
        time: "",
        noticeName: "",
        noticeContent: "",
        noticeType : ''
      },
      noticeType : ''
    };
  },
  methods: {
    setVisible(modalInfo) {
      // this.dialogVisible = modalInfo.showModal;
      this.announceInfo = modalInfo;
      this.announceInfo.time = modalInfo.beginTime
        ? [modalInfo.beginTime, modalInfo.endTime]
        : "";
    },
    checkParams(){
      if(this.announceInfo.noticeName == ''){
        this.$message.warning('公告名称不能为空!')
        return false
      }
      if(this.announceInfo.noticeContent == ''){
        this.$message.warning('公告内容不能为空!')
        return false
      }
      if(this.announceInfo.time == ''){
        this.$message.warning('请选择时间!')
        return false
      }
      return true
    },
    submitClick() {
      if(!this.checkParams()){
        return
      }
      let params = {
        noticeName: this.announceInfo.noticeName,
        noticeContent: this.announceInfo.noticeContent,
        beginTime: this.announceInfo.time ? this.announceInfo.time[0] : "",
        endTime: this.announceInfo.time ? this.announceInfo.time[1] : ""
      };
      console.log(params);
      let keyName =
        this.announceInfo.name == "修改公告" ? "editData" : "addData";
      console.log(apiSend[keyName])
      apiSend[keyName]({
        data: params
      })
        .then(res => {
          if(res.data.data.code == 0){
            this.announceInfo.showModal = false;
            this.$message.success(res.data.data.msg);
            this.$emit('search');
          }else {
            this.$message.warning(res.data.data.msg)
          }
        })
        .catch(err => {
          this.$message.error(err.data.msg);
        });
    }
  }
};
</script>
<style lang="less" scoped>
.announce-form {
  width: 100%;
  box-sizing: border-box;
  // padding: 10px 15px;
  // background: #fff;
  .form {
    // padding: 10 15px;
    box-sizing: border-box;
    padding: 10px 15px;
    // box-shadow: 0 0 5px #aaa;
    /deep/ .el-form-item {
      display: flex;
      position: relative;
      .el-form-item__content {
        width: 280px;
        margin-left: 20px !important;
      }
    }
    .el-date-editor.el-input,
    .el-date-editor.el-input__inner {
      width: 280px;
    }
    // position: sticky;
    // top: 50%;
    // transform: translateY(-50%);
    .operate-box {
      // position: absolute;
      margin-left: 80px;
    }
  }
}
</style>