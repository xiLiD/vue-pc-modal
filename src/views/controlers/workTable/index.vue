<template>
  <div class="control-wrapper">
    <div class="wrapper-left">
      <div class="wrapper-left-tp shadow-bk">
        <div class="wrapper-title">产品工作台</div>
        <div class="wrapper-user">
          <div class="user-desc">
            <el-avatar shape="circle" size="medium" fit="cover" :src="circleUrl"></el-avatar>
            <label>早安，{{username}}！</label>
          </div>
          <div class="notice-desc">
            <div class="notice-title">
              <label class="label-title" @click="toPage" data-route="announceList">公告栏</label>
              <label class="label-num">({{noticeList.length}})</label>
            </div>
            <div class="dynamic-desc">
              <!-- <el-carousel height="20px" direction="horizontal" :autoplay="true">  
                <el-carousel-item v-for="(item, index) in noticeList" :key="index">
                  <p>{{ item }}</p>
                </el-carousel-item>
              </el-carousel>-->
              <marquee :lists="noticeList" ref="notice" v-if="noticeList.length > 0"></marquee>
            </div>
          </div>
          <div class="line-tag" style="opacity:0">
            <p>
              <label @click="topMore(0)">待办</label>
              <label>(3)</label>
            </p>
            <p>
              <label @click="topMore(1)">我的申请</label>
              <label>(10)</label>
            </p>
          </div>
        </div>
      </div>
      <div class="wrapper-left-ct shadow-bk">
        <el-tabs v-model="activetopName">
          <el-tab-pane label="我的待办" name="first">
            <auditTable></auditTable>
          </el-tab-pane>
          <el-tab-pane label="我的申请" name="second">
            <appTable></appTable>
          </el-tab-pane>
          <!-- <el-tab-pane label="我的预警" name="third">
            <warnTable></warnTable>
          </el-tab-pane>-->
        </el-tabs>
        <div class="to-more" @click="getTopMore">更多</div>
      </div>
      <div class="wrapper-left-ct shadow-bk left-bt">
        <el-tabs v-model="activeBottomName">
          <el-tab-pane label="我的活动" name="first">
            <activity></activity>
          </el-tab-pane>
          <el-tab-pane label="我的客群" name="second">
            <segment></segment>
          </el-tab-pane>
          <el-tab-pane label="我的画像" name="third">
            <profileconfig></profileconfig>
          </el-tab-pane>
        </el-tabs>
        <div class="to-more" @click="getBottomMore">更多</div>
      </div>
    </div>
    <div class="wrapper-right">
      <div class="speedy-nav shadow-bk">
        <div class="nav-top">
          <div class="nav-title">快捷功能导航</div>
          <div class="nav-settle" @click="toPage" data-route="navagation">设置</div>
        </div>
        <div class="nav-desc">
          <ul>
            <li
              v-for="(item, index) in navMenu"
              :key="index"
              @click="toFrame(item.shortcutIconBlob,item.url)"
            >
              {{ item["shortcutIconBlob"] }}
              <!-- <el-button type="primary" size="mini" plain></el-button> -->
            </li>
          </ul>
        </div>
      </div>
      <div class="wrapper-right-ct shadow-bk">
        <div class="helper">
          <div class="nav-top">
            <div class="nav-title">帮助中心</div>
            <div
              class="nav-settle"
              @click="toFrame('帮助中心','/iop2/monitoring/interaction/interaction.html#/?type=1')"
            >进入</div>
          </div>
          <div class="help-desc">
            <ul>
              <li v-for="(item, index) in helperList" :key="index">
                <label>{{ index + 1 }}、{{ item }}</label>
              </li>
            </ul>
          </div>
        </div>
        <div class="writer-area">
          <div class="nav-top">
            <div class="nav-title">我要留言</div>
            <div
              class="nav-settle"
              @click="toFrame('帮助中心','/iop2/monitoring/interaction/interaction.html#/?type=2')"
            >评论中心</div>
          </div>
          <div class="writer-desc">
            <el-input type="textarea" :rows="3" placeholder="请输入内容" v-model="suggestion"></el-input>
            <el-button type="primary" size="mini" @click="suggestionClick">提交</el-button>
          </div>
        </div>
      </div>

      <div class="tag-rank shadow-bk">
        <div class="nav-top">
          <div class="nav-title">标签使用排行TOP10</div>
        </div>
        <div class="tag-rank-desc">
          <el-table :data="rankList" style="width: 100%;" :row-class-name="tableRowClassName" height="231px" row-key="codeKey" border>
            <el-table-column label="标签名称" prop="attributeName" width="200" align="center" />
            <el-table-column label="引用次数" prop="quoteCount" align="center" />
            <el-table-column label="创建时间" prop="createTime" width="200" align="center" />
          </el-table>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import routesTarget from "../resource/json/routes.json";
import { createNamespacedHelpers } from "vuex";
const { mapState,mapMutations } = createNamespacedHelpers("worker");
const { setRoutes, setTabs } = mapMutations(["setRoutes", "setTabs"]);
import apiSend from "@/api/controls/httpRequest";

import activity from "./components/activity";
import profileconfig from "./components/profileconfig";
import segment from "./components/segment";

import appTable from "./components/appTable";
import auditTable from "./components/auditTable";
import warnTable from "./components/warnTable";
import marquee from "./components/marquee";
import baseURL from "@/api/baseUrl";
console.log(setRoutes);
export default {
  components: {
    activity,
    profileconfig,
    segment,
    appTable,
    auditTable,
    warnTable,
    marquee
  },
  data() {
    return {
      username: "",
      circleUrl:
        "https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png",
      topMenu: [
        {
          title: "我的待办",
          name: "auditList",
          desc: "待审批活动列表",
          num: 10
        },
        {
          title: "我的申请",
          name: "activity",
          desc: "我的活动申请列表",
          num: 12
        }
        // {
        //   title: "我的预警",
        //   name: "warnList",
        //   desc: "我的监控指标预警列表",
        //   num: 13
        // }
      ],
      bottomMenu: [
        {
          title: "我的活动",
          link: "/pcm/manage/index.html#/activitys/main-layout",
          // link: "https://www.baidu.com/",
          num: 15,
          menu: [
            {
              key: "all",
              value: "活动总数",
              num: 300
            },
            {
              key: "excute",
              value: "执行中",
              num: 150
            },
            {
              key: "stop",
              value: "暂停",
              num: 50
            },
            {
              key: "finish",
              value: "完成",
              num: 100
            }
          ]
        },
        {
          title: "我的客群",
          link: "/ckm/ckm-index.html#/myspace",
          menu: [
            {
              key: "all",
              value: "活动总数",
              num: 120
            },
            {
              key: "excute",
              value: "执行中",
              num: 30
            },
            {
              key: "stop",
              value: "暂停",
              num: 0
            },
            {
              key: "finish",
              value: "完成",
              num: 90
            }
          ]
        },
        {
          title: "我的画像",
          link: "/ckm/frontend/index.html#/protray/home/main-layout",
          menu: [
            {
              key: "all",
              value: "活动总数",
              num: 200
            },
            {
              key: "excute",
              value: "执行中",
              num: 15
            },
            {
              key: "stop",
              value: "暂停",
              num: 10
            },
            {
              key: "finish",
              value: "完成",
              num: 175
            }
          ]
        }
      ],
      topIndex: 0,
      bottomIndex: 0,
      bottomList: [
        {
          key: "all",
          value: "活动总数",
          num: 20
        },
        {
          key: "excute",
          value: "执行中",
          num: 20
        },
        {
          key: "stop",
          value: "暂停",
          num: 20
        },
        {
          key: "finish",
          value: "完成",
          num: 20
        }
      ],
      bottomActive: 0,
      navMenu: [],
      helperList: [],
      suggestion: "",
      rankList: [],
      tableData: [],
      noticeList: [],
      queryData: {
        pageNo: 0,
        pageSize: 10,
        total: 0
      },
      activetopName: "first",
      activeBottomName: "first"
    };
  },
  computed: {
    ...mapState(['userInfo']),
    editableTabs() {
      return this.$store.state.worker.workRoutes;
    },
    tabs_value() {
      return this.$store.state.worker.tabs;
    }
  },
  created() {
    apiSend.getUserinfo().then(res => {
      // console.log(res)
      this.username = res.data.data.username;
      window.sessionStorage.setItem("username", res.data.data.username);
    });
  },
  mounted() {
    this.getNotice();
    this.getHelper();
    this.getLabel();
    this.getQuickList();
  },
  methods: {
    // 留言请求
    suggestionClick() {
      if (this.suggestion == "") {
        this.$message.warning("请输入留言内容!");
        return;
      }
      let params = {
        dataname: "",
        datadesc: this.suggestion,
        dataaouth: "",
        url: "",
        datatype: ""
      };
      apiSend
        .questionAdd({
          data: params
        })
        .then(res => {
          if (res.data.data.code == 0) {
            this.suggestion = "";
            this.$message.success(res.data.data.msg);
          } else {
            this.$message.error(res.data.data.msg);
          }
        });
    },
    // 公告栏 走马灯
    getNotice() {
      let that = this;
      apiSend.effectiveData().then(res => {
        // console.log("noticeList", res.data.data.list);
        that.noticeList = res.data.data.list || [];
        if (that.noticeList.length > 0) {
          that.$nextTick(()=>{
            that.$refs["notice"].updateNotice(that.noticeList);
          });
        }
      });
    },
    // 帮助中心
    getHelper() {
      apiSend.getIndexinfo().then(res => {
        this.helperList = res.data.data.list;
      });
    },
    // 标签使用Top10
    getLabel() {
      apiSend.labelGetTop().then(res => {
        console.log(res);
        this.rankList = res.data.data.list;
      });
    },
    // 快捷栏列表
    getQuickList() {
      let params = {
        shortcutKeyName: "",
        quickType: "1"
      };
      apiSend.quickList({ data: params }).then(res => {
        this.navMenu = res.data.data.list;
      });
    },
    topMore(index) {
      let route = this.topMenu[index].name;
      this.updateRoutes(route, {
        t: "strict"
      });
    },
    getBottomMore() {
      // let route;
      // route = this.bottomMenu[this.bottomIndex].name;
      let redirectUrl = "",
        redirectName = "",
        currentIndex;
        console.log(this.activeBottomName)
      if (this.activeBottomName == "first") {
        currentIndex = 0;
      }else if (this.activeBottomName == "second") {
        currentIndex = 1;
      } else {
        currentIndex = 2;
      }
      redirectName = this.bottomMenu[currentIndex].title;
      redirectUrl = this.bottomMenu[currentIndex].link;
      console.log(redirectName,redirectUrl)
      this.toFrame(redirectName, baseURL.production + redirectUrl);
    },
    getTopMore() {
      let route;
      route = this.topMenu[this.topIndex].title;
      // if (this.activetopName == "second") {
        
      // } else {
      //   this.updateRoutes(route);
      // }

        this.toFrame(
          route,
          baseURL.production + "/ckm/ckm-index.html#/myspace"
        );
    },
    toFrame(title, frame) {
      // let frame = e.target.getAttribute("data-url");
      // let title = e.target.getAttribute("data-title");
      if (
        !(frame.indexOf("http") != -1 || frame.indexOf("http") != -1) ||
        frame.indexOf("www") != -1
      ) {
        frame =
          window.location.host.indexOf("localhost") != -1
            ? baseURL.production + frame
            : frame;
      }

      console.log(frame);
      if (this.editableTabs.some(item => item.title == title)) {
        let tabs = this.editableTabs.filter(item => item.title == title)[0]
          .name;
        setTabs.call(this, tabs);
        // this.$store.commit("worker/setTabs", tabs);
        // this.$router.push({
        //   path: "/moreMenu/iframe",
        //   query: {
        //     src: frame,
        //   },
        // });
        return;
      }
      let oldRoutes = this.editableTabs;
      let max = oldRoutes[0].name;
      oldRoutes.forEach(
        item => (max = item.name > Number(max) ? item.name : max)
      );
      max = max < 30 ? "99" : max;
      max++; // max++;
      let newRoutes = oldRoutes.concat([
        {
          title: title,
          name: max.toString(),
          route: "iframe",
          redirect: frame
        }
      ]);
      setRoutes.call(this, newRoutes);
      setTabs.call(this, max.toString());
      // this.$store.commit("worker/setRoutes", newRoutes);
      // this.$store.commit("worker/setTabs", max.toString());
      // this.$router.push({
      //   path: "/moreMenu/iframe",
      //   query: {
      //     src: frame,
      //   },
      // });
    },
    toPage(e) {
      let route = e.currentTarget.getAttribute("data-route");
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
    },
    tableRowClassName({ row, rowIndex }) {
      if (rowIndex % 2 != 0) {
        return "warning-line";
      }
      return "";
    },
  }
};
</script>
<style lang="less" scoped>
@import "../resource/style/common.less";
div::-webkit-scrollbar {
  width: 4px;
  height:4px;
}
.control-wrapper {
  background-color: rgb(242, 242, 242);
  width: 100%;
  display: flex;
  justify-content: space-between;
  overflow: scroll;
  .wrapper-left {
    width: 65%;
    .wrapper-title {
      font-size: 18px;
      //   font-weight: bold;
      color: #409eff;
      letter-spacing: 1px;
      font-family: "Microsoft YaHei";
    }
    .wrapper-user {
      margin-top: 10px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      .user-desc {
        display: flex;
        align-items: center;
        font-size: 18px;
        label {
          margin-left: 45px;
          letter-spacing: 2px;
        }
      }
      .notice-desc {
        .notice-title {
          font-size: 14px;

          .label-title {
            // text-decoration: underline;
            padding-bottom: 1px;
            cursor: pointer;
            border-bottom: 1px solid #333;
          }
          .label-num {
            padding-left: 5px;
          }
        }
        .dynamic-desc {
          margin-top: 10px;
          font-size: 12px;
          width: 200px;
          padding: 5px 10px;
          border-radius: 2px;
          background-color: rgb(250, 236, 216);
          line-height: 20px;
          letter-spacing: 0.5px;
        }
      }
    }
    .line-tag {
      font-size: 14px;
      p {
        &:nth-child(2) {
          margin-top: 10px;
        }
        label:nth-child(1) {
          text-decoration: underline;
          cursor: pointer;
        }
        label:nth-child(2) {
          margin-left: 5px;
        }
      }
    }
    .wrapper-left-ct {
      margin-top: 5px;
      font-size: 14px;
      position: relative;
      .to-more {
        position: absolute;
        right: 30px;
        top: 20px;
        color: #409eff;
        cursor: pointer;
      }
      .ct-tab {
        ul {
          display: flex;
          //   font-size: 14px;

          li {
            margin-left: 10px;
            color: #aaa;
            letter-spacing: 0.5px;
            cursor: pointer;
            &:nth-child(1) {
              margin-left: 0;
            }
          }
          li.active-line {
            font-weight: bold;
            color: #409eff;
          }
        }
      }
      .ct-table {
        margin-top: 10px;
        border-top: 1px solid #ddd;

        .table-title {
          padding: 0 10px;
          margin-top: 10px;
          display: flex;
          justify-content: space-between;
          align-items: center;
          .more {
            font-size: 12px;
            cursor: pointer;
          }
        }
      }
    }
    .left-bt {
      .table-title {
        font-size: 12px;
        ul {
          display: flex;
          //   font-size: 14px;

          li {
            margin-left: 10px;
            color: #333;
            letter-spacing: 0.5px;
            cursor: pointer;
            &:nth-child(1) {
              margin-left: 0;
            }
          }
          li.active-line {
            font-weight: bold;
            color: #409eff;
          }
        }
      }
    }
  }
  .wrapper-right {
    width: 34%;
    margin-left: 1%;
    > div {
      padding-left: 10px;
      padding-right: 10px;
    }
    .nav-top {
      display: flex;
      justify-content: space-between;
      align-items: center;
      .nav-title {
        font-size: 15px;
        font-weight: bold;
        letter-spacing: 0.5px;
        color: #409eff;
      }
      .nav-settle {
        font-size: 12px;
        cursor: pointer;
      }
    }
    .speedy-nav {
      .nav-desc {
        padding-top: 10px;
        border-top: 1px solid #ddd;
        margin-top: 10px;
        ul {
          display: flex;
          flex-wrap: wrap;
          li {
            margin-left: 20px;
            padding: 5px 10px;
            border: 1px solid #b3d8ff;
            font-size: 12px;
            border-radius: 3px;
            max-width: 100px;
            // border: 1px solid #ddd;
            border-radius: 5px;
            cursor: pointer;
            color: #409eff;
            background: #ecf5ff;
            // margin-top: 10px;
            // &:nth-child(1),
            // &:nth-child(2),
            // &:nth-child(3) {
            //   margin-top: 0;
            // }
            &:nth-child(5n + 1) {
              margin-left: 0;
            }
            &:nth-child(n + 6) {
              margin-top: 10px;
            }
          }
          li:hover {
            color: #fff;
            background-color: #409eff;
            border-color: #409eff;
          }
        }
      }
    }
    .wrapper-right-ct {
      margin-top: 5px;
      .helper {
        .help-desc {
          margin-top: 15px;
          ul {
            display: flex;
            flex-direction: column;
            li {
              line-height: 1.5;
              font-size: 12px;
            }
          }
        }
      }
      .writer-area {
        border-top: 1px solid #ddd;
        margin-top: 15px;
        padding: 10px 0;

        .writer-desc {
          display: flex;
          align-items: flex-end;
          justify-content: space-between;
          margin-top: 15px;
          /deep/ .el-textarea {
            width: 80%;
          }
          .el-button {
            margin-left: 20px;
          }
        }
      }
    }
    .tag-rank {
      margin-top: 5px;
    }
  }
  .shadow-bk {
    background-color: #fff;
    border-radius: 3px;
    padding: 10px 0;
  }
  // .wrapper-left-tp {
  //   padding-top: 0;
  // }
}
</style>