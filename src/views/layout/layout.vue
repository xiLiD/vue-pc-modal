<template>
  <div>
    <navbar ref="navbar"
            @refreshPage="refreshPage" />
    <app-main ref="appMain"
              class='app-main' />
  </div>
</template>
<script>
import { Navbar, AppMain } from "./components";
export default {
  name: "Layout",
  components: {
    Navbar,
    AppMain
  },
  methods: {
    refreshPage () {
      this.$refs.appMain.refresh();
    }
  }
};
</script>
<style lang="less" scoped>
.app-main {
  // margin-top: 78px;
  padding-top: 3rem;
  display: flex;
  justify-content: center;
}
</style>
