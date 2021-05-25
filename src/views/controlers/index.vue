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
        v-for="item in editableTabs"
        :label="item.title"
        :key="item.name"
        :closable="item.route != 'workTable'"
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
import routesTarget from "./resource/json/routes.json";
export default {
  data() {
    return {
      editableTabsValue: "1",
      // editableTabs: [],
      tabIndex: 1,
      bindUrl: "",
      closeable: true,
    };
  },
  computed: {
    editableTabs: {
      get() {
        return this.$store.state.workRoutes;
      },
      set(v) {
        this.$store.commit("setRoutes", v);
      },
    },
  },
  watch: {
    editableTabs: {
      immediate: true,
      handler(value) {
        console.log(value);
        let arr = window.location.href.split("/");
        let str = arr[arr.length - 1];
        let current = this.editableTabs.filter((item) => item.route == str);
        if (current.length > 0) {
          this.editableTabsValue = current[0].name;
        }
      },
    },
  },
  methods: {
    tabClick(e) {
      let eArr = this.editableTabs.filter((item) => item.name == e.name);
      this.$router.push({
        name: eArr[0].route,
        params: {
          src: eArr[0].redirect,
        },
      });
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
      let routeTarget = null;
      if (activeName === targetName) {
        tabs.forEach((tab, index) => {
          if (tab.name === targetName) {
            let nextTab = tabs[index + 1] || tabs[index - 1];
            if (nextTab) {
              activeName = nextTab.name;
              routeTarget = nextTab;
            }
          }
        });
      }
      console.log(routeTarget);
      this.editableTabsValue = activeName;
      this.editableTabs = tabs.filter((tab) => tab.name !== targetName);
      this.$store.commit("setRoutes", this.editableTabs);
      this.$router.push({
        name: routeTarget.route,
        params: {
          src: routeTarget.redirect,
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
.el-tabs__header {
  margin-bottom: 0;
}
.iframe-wrapper {
  box-sizing: border-box;
  width: 100%;
  padding: 10px;

  .iframe-container {
    // padding: 15px 10px;
    box-sizing: border-box;
    box-shadow: 0 0 5px #999;
    background-color: #fff;
    width: 100%;
    border-radius: 5px;
    box-sizing: border-box;
    height: calc(100vh - 61px);
    overflow-y: scroll;
  }
  iframe {
    width: 100%;
    min-height: calc(100vh - 56px - 40px - 60px);
  }
}
</style>