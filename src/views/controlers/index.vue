<template>
  <div class="iframe-home">
    <el-tabs
      v-model="editableTabsValue"
      type="card"
      @tab-remove="removeTab"
      @tab-click="tabClick"
      class="tabs"
    >
      <el-tab-pane
        v-for="(item, index) in editableTabs"
        :label="item.title"
        :key="item.name"
        :closable="item.route != 'administration'"
        :name="item.name"
      >
      </el-tab-pane>
    </el-tabs>
    <div class="iframe-wrapper">
      <div class="iframe-container">
        <keep-alive>
          <router-view />
        </keep-alive>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      editableTabsValue: "1",
      editableTabs: [
        {
          title: "我的工作台",
          name: "1",
          route: "workTable",
          redirect: "http://www.baidu.com",
        },
        {
          title: "帮助",
          name: "2",
          route: "help",
          redirect: "",
        },
        {
          title: "百度",
          name: "3",
          route: "iframe",
          redirect: "http://www.baidu.com",
        },
      ],
      tabIndex: 1,
      bindUrl: "",
      closeable: true,
      routerList: [
        {
          title: "我的工作台",
          name: "1",
          route: "workTable",
          redirect: "",
        },
        {
          title: "更多公告",
          name: "2",
          route: "annountcement",
          redirect: "",
        },
        {
          title: "新增公告",
          name: "3",
          route: "workTable",
          redirect: "",
        },
        {
          title: "更多待办",
          name: "4",
          route: "workTable",
          redirect: "",
        },
        {
          title: "更多待办",
          name: "5",
          route: "workTable",
          redirect: "",
        },
        {
          title: "更多申请",
          name: "6",
          route: "workTable",
          redirect: "",
        },
        {
          title: "更多预警",
          name: "7",
          route: "workTable",
          redirect: "",
        },
        {
          title: "更多快捷功能导航",
          name: "8",
          route: "workTable",
          redirect: "",
        },
        {
          title: "快捷键管理",
          name: "9",
          route: "workTable",
          redirect: "",
        },
        {
          title: "帮助中心",
          name: "10",
          route: "workTable",
          redirect: "",
        },
        {
          title: "评论中心",
          name: "11",
          route: "workTable",
          redirect: "",
        },
      ],
    };
  },
  watch: {
    $route(to, from) {
      console.log(to);
      console.log(this.tabIndex);
      if (to.name == "iframe") {
        this.$router.push({
          path: to.path,
          query: {
            src: to.params.src,
          },
        });
      }
    },
  },
  methods: {
    tabClick(e) {
      console.log(e);
      let eArr = this.editableTabs.filter((item) => item.name == e.name);
      this.$router.push({
        name: eArr[0].route,
        params: {
          src: eArr[0].redirect,
        },
      });
      console.log(eArr[0].redirect);
    },
    addTab(targetName) {
      let newTabName = ++this.tabIndex + "";
      this.editableTabs.push({
        title: "New Tab",
        name: newTabName,
        content: "New Tab content",
      });
      this.editableTabsValue = newTabName;
    },
    removeTab(targetName) {
      let tabs = this.editableTabs;
      let activeName = this.editableTabsValue;
      if (activeName === targetName) {
        tabs.forEach((tab, index) => {
          if (tab.name === targetName) {
            let nextTab = tabs[index + 1] || tabs[index - 1];
            if (nextTab) {
              activeName = nextTab.name;
            }
          }
        });
      }
      console.log(tabs);
      this.editableTabsValue = activeName;
      this.editableTabs = tabs.filter((tab) => tab.name !== targetName);
      let eArr = tabs.filter((tab) => tab.name == targetName);
      this.$router.push({
        name: eArr[0].route,
        params: {
          src: eArr[0].redirect,
        },
      });
    },
  },
};
</script>
<style lang="less">
.iframe-home {
  width: 100%;
  .tabs {
    position: sticky;
    top: 0;
    left: 0;
    background: #fff;
    z-index: 99999;
    /deep/ .el-tabs__header {
      margin-bottom: 5px;
    }
  }
}
.iframe-wrapper {
  box-sizing: border-box;
  width: 100%;
  padding: 10px;

  .iframe-container {
    padding: 20px 30px;
    box-shadow: 0 0 5px #999;
    background-color: #fff;
    width: 100%;
    border-radius: 5px;
    box-sizing: border-box;
  }
  iframe {
    width: 100%;
    min-height: calc(100vh - 56px - 40px - 60px);
  }
}
</style>