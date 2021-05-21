<template>
  <div class="control-wrapper">
    <div class="wrapper-left">
      <div class="wrapper-left-tp shadow-bk">
        <div class="wrapper-title">指挥中心/工作台</div>
        <div class="wrapper-user">
          <div class="user-desc">
            <el-avatar
              shape="circle"
              size="medium"
              fit="cover"
              :src="circleUrl"
            ></el-avatar>
            <label>早安，李雷！</label>
          </div>
          <div class="notice-desc">
            <div class="notice-title">
              <label class="label-title">公告栏</label>
              <label class="label-num">(3)</label>
            </div>
            <div class="dynamic-desc">
              <el-tag type="warning"
                ><p>即时滚动的公告通知，即时滚动的公告通知</p></el-tag
              >
            </div>
          </div>
          <div class="line-tag">
            <p>待办<label>(3)</label></p>
            <p>预警<label>(10)</label></p>
          </div>
        </div>
      </div>
      <div class="wrapper-left-ct shadow-bk">
        <div class="ct-tab">
          <ul>
            <li
              v-for="(item, index) in topMenu"
              :key="index"
              :class="topIndex == index ? 'active-line' : ''"
            >
              {{ item }}
            </li>
          </ul>
        </div>
        <div class="ct-table">
          <div class="table-title">待审批活动 <label>(3)</label></div>
          <div class="table-content">
            <el-table
              :data="tableData"
              style="width: 100%"
              row-key="codeKey"
              :height="getHeight"
              border
            >
              <el-table-column label="活动编码" prop="city" align="center" />
              <el-table-column label="活动名称" prop="cnty" align="center" />
              <el-table-column label="当前审批人" prop="grid" align="center" />
              <el-table-column label="申请人" prop="order" align="center" />
              <el-table-column
                label="申请时间"
                prop="population"
                align="center"
              />
              <el-table-column
                label="当前节点"
                prop="popuNum1"
                align="center"
              />
            </el-table>
          </div>
        </div>
      </div>
      <div class="wrapper-left-ct shadow-bk left-bt">
        <div class="ct-tab">
          <ul>
            <li
              v-for="(item, index) in bottomMenu"
              :key="index"
              :class="bottomIndex == index ? 'active-line' : ''"
            >
              {{ item }}
            </li>
          </ul>
        </div>
        <div class="ct-table">
          <div class="table-title">
            <ul>
              <li
                v-for="(item, index) in bottomList"
                :key="index"
                :class="bottomActive == index ? 'active-line' : ''"
              >
                {{ item["value"] }} <label>{{ item["num"] }}</label>
              </li>
            </ul>
          </div>
          <div class="table-content">
            <el-table
              :data="tableData"
              style="width: 100%"
              row-key="codeKey"
              :height="getHeight"
              border
            >
              <el-table-column label="活动编码" prop="city" align="center" />
              <el-table-column label="活动名称" prop="cnty" align="center" />
              <el-table-column label="当前审批人" prop="grid" align="center" />
              <el-table-column label="申请人" prop="order" align="center" />
              <el-table-column
                label="申请时间"
                prop="population"
                align="center"
              />
              <el-table-column
                label="当前节点"
                prop="popuNum1"
                align="center"
              />
            </el-table>
          </div>
        </div>
      </div>
    </div>
    <div class="wrapper-right">
      <div class="speedy-nav shadow-bk">
        <div class="nav-top">
          <div class="nav-title">快捷功能导航</div>
          <div class="nav-settle">设置</div>
        </div>
        <div class="nav-desc">
          <ul>
            <li v-for="(item, index) in navMenu" :key="index">
              <label>{{ item["value"] }}</label>
            </li>
          </ul>
        </div>
      </div>
      <div class="wrapper-right-ct shadow-bk">
        <div class="helper">
          <div class="nav-top">
            <div class="nav-title">帮助中心</div>
            <div class="nav-settle">进入</div>
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
            <div class="nav-title">帮助中心</div>
            <div class="nav-settle">评论中心</div>
          </div>
          <div class="writer-desc">
            <el-input
              type="textarea"
              :rows="3"
              placeholder="请输入内容"
              v-model="suggestion"
            >
            </el-input>
            <el-button type="primary" size="mini">提交</el-button>
          </div>
        </div>
      </div>

      <div class="tag-rank shadow-bk">
        <div class="nav-top">
          <div class="nav-title">标签使用排行TOP10</div>
        </div>
        <div class="tag-rank-desc">
          <el-table
            :data="rankList"
            style="width: 100%"
            row-key="codeKey"
            :height="getRankHeight"
            border
          >
            <el-table-column label="标签名称" prop="label" align="center" />
            <el-table-column label="引用次数" prop="count" align="center" />
            <el-table-column
              label="创建时间"
              prop="creat_time"
              align="center"
            />
          </el-table>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      circleUrl:
        "https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png",
      topMenu: ["我的待办", "我的申请", "我的预警"],
      bottomMenu: ["我的活动", "我的客群", "我的画像"],
      topIndex: 0,
      bottomIndex: 0,
      bottomList: [
        {
          key: "all",
          value: "活动总数",
          num: 20,
        },
        {
          key: "excute",
          value: "执行中",
          num: 20,
        },
        {
          key: "stop",
          value: "暂停",
          num: 20,
        },
        {
          key: "finish",
          value: "完成",
          num: 20,
        },
      ],
      bottomActive: 0,
      navMenu: [
        {
          key: 1,
          value: "创建活动",
        },
        {
          key: 2,
          value: "创建客群",
        },
        {
          key: 3,
          value: "创建画像",
        },
        {
          key: 4,
          value: "创建场景",
        },
        {
          key: 5,
          value: "创建标签",
        },
        {
          key: 6,
          value: "投诉用户导入",
        },
      ],
      helperList: [
        "网格自上而下（IOP+网格）场景解说",
        "批量短信场景解说",
        "标签创建客户群场景解说",
        "交互式查询导入客户群场景解说",
        "一级手厅文字类触点活动配置手册",
        "IOP平台操作手册",
      ],
      suggestion: "",
      rankList: [],
      tableData: [],
    };
  },
  computed: {
    getHeight() {
      return (
        (window.innerHeight - 115 - 30 - 30 - 10 - 33 - 30 - 30 - 20 - 5) / 2 +
        "px"
      );
    },
    getRankHeight() {
      return window.innerHeight - 137 - 306 - 30 - 20 - 10 - 12 + "px";
    },
  },
  mounted() {
    this.getTable();
    this.getRank();
  },
  methods: {
    getRank() {
      let data = [
        {
          label: "主套餐档次",
          count: "300",
          creat_time: "2021/3/20",
        },
        {
          label: "主套餐档次",
          count: "300",
          creat_time: "2021/3/20",
        },
        {
          label: "主套餐档次",
          count: "300",
          creat_time: "2021/3/20",
        },
        {
          label: "主套餐档次",
          count: "300",
          creat_time: "2021/3/20",
        },
        {
          label: "主套餐档次",
          count: "300",
          creat_time: "2021/3/20",
        },
      ];

      this.rankList = data;
      console.log(this.tableData);
    },
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
  },
};
</script>
<style lang="less" scoped>
.control-wrapper {
  background-color: rgb(242, 242, 242);
  width: 100%;
  display: flex;
  justify-content: space-between;
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
          margin-left: 30px;
          letter-spacing: 1px;
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
          font-size: 14px;
        }
      }
    }
    .line-tag {
      font-size: 14px;
      p {
        &:nth-child(2) {
          margin-top: 10px;
        }
        label {
          margin-left: 5px;
        }
      }
    }
    .wrapper-left-ct {
      margin-top: 5px;
      font-size: 14px;
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
        padding: 10px 0;
        border-top: 1px solid #ddd;
        margin-top: 10px;
        ul {
          display: flex;
          flex-wrap: wrap;
          li {
            margin-left: 20px;
            padding: 5px 10px;
            border: 1px solid #ddd;
            font-size: 12px;
            border-radius: 3px;
            max-width: 100px;
            margin-top: 10px;
            &:nth-child(1),
            &:nth-child(2),
            &:nth-child(3),
            &:nth-child(4) {
              margin-top: 0;
            }
            &:nth-child(1) {
              margin-left: 0;
            }
            &:nth-child(4n + 1) {
              margin-left: 0;
            }
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
    padding: 10px;
  }

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
      tr:hover > td {
        background-color: rgb(140, 197, 255) !important;
      }
    }
  }
}
</style>