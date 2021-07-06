<template>
  <div class="iframe-home">
    <el-tabs
      v-model="tabs_value"
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
        <div>
          <iframe
            :src="item.redirect"
            ref="iframe"
            frameborder="0"
            :width="getWidth"
            :height="getHeight"
            v-for="item in iframes"
            :key="item.id"
            v-show="tabs == item.name"
          ></iframe>
        </div>
        <keep-alive>
          <router-view v-show="current > 0"></router-view
        ></keep-alive>
      </div>
    </div>
  </div>
</template>
<script>
import routesTarget from "./resource/json/routes.json";
import iframeTarget from "./iframe/index";
import { mapState } from "vuex";
export default {
  components: {
    iframeTarget,
  },
  data() {
    return {
      editableTabsValue: "",
      // editableTabs: [],
      tabIndex: 1,
      bindUrl: "",
      closeable: true,
    };
  },
  computed: {
    ...mapState({
      tabs(state) {
        return state.tabs;
      },
      iframes(state) {
        return state.workRoutes.filter((item) => item.route == "iframe");
      },
      current(state) {
        return state.workRoutes.filter(
          (item) => item.route != "iframe" && state.tabs == item.name
        ).length;
      },
      routes(state) {
        return state.workRoutes.filter((item) => item.name == state.tabs);
      },
    }),
    editableTabs: {
      get() {
        return this.$store.state.workRoutes;
      },
      set(v) {
        this.$store.commit("setRoutes", v);
      },
    },
    tabs_value: {
      get() {
        return this.$store.state.tabs;
      },
      set(v) {
        this.$store.commit("setTabs", v);
      },
    },
    getWidth() {
      return window.innerWidth - 20 - 20 + "px";
    },
    getHeight() {
      return window.innerHeight - 61 + "px";
    },
  },
  methods: {
    tabClick(e) {
      let eArr = this.editableTabs.filter((item) => item.name == e.name);
      this.$store.commit("setTabs", eArr[0].name);
      if (eArr[0].route != "iframe") {
        this.$router.push({
          name: eArr[0].route,
          params: {
            src: eArr[0].redirect,
          },
        });
      }
    },
    addTab(targetName) {
      let newTabName = ++this.tabIndex + "";
      this.editableTabs.push({
        title: "New Tab",
        name: newTabName,
        content: "New Tab content",
      });
      this.tabs_value = newTabName;
    },
    removeTab(targetName) {
      let tabs = this.editableTabs;
      let activeName = this.tabs_value || "1";
      let routeTarget = {};
      console.log(activeName, targetName);
      if (activeName === targetName) {
        tabs.forEach((tab, index) => {
          if (tab.name === targetName) {
            let nextTab = tabs[index - 1];
            routeTarget = nextTab;
            if (nextTab) {
              activeName = nextTab.name;
            }
            console.log(nextTab);
          }
        });
      }
      console.log(routeTarget);
      this.$store.commit("setTabs", activeName);
      this.editableTabs = tabs.filter((tab) => tab.name !== targetName);
      this.$store.commit("setRoutes", this.editableTabs);
      console.log(routeTarget);
      let target = {
        path: routeTarget.route || "workTable",
      };
      if (routeTarget.route == "iframe") {
        target.query = {
          src: routeTarget.redirect,
        };
      }
      this.$router.push(target);
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
    padding: 0px 10px;
    box-sizing: border-box;
    // box-shadow: 0 0 5px #999;
    border: 1px solid #ddd;
    background-color: #fff;
    width: 100%;
    border-radius: 5px;
    box-sizing: border-box;
    // height: calc(100vh - 61px);
    // overflow-y: scroll;
  }
  iframe {
    width: 100%;
    min-height: calc(100vh - 56px - 40px - 60px);
  }
}
</style>