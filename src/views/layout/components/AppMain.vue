<template>
  <div class="app-main">
    <transition name="fade-transform"
                mode="out-in">
      <!-- <keep-alive :include="cachedViews"> -->
      <router-view ref="currentView" />
      <!-- </keep-alive> -->
    </transition>
  </div>
</template>
<script>
export default {
  name: 'AppMain',
  methods: {
    refresh () {
      this.$refs.currentView.refresh()
    }
  }
}
</script>
<style scoped>
.app-main {
  /*84 = navbar + tags-view = 50 +34 */
  height: calc(100vh - 58px);
  position: relative;
  overflow: hidden;
  margin-top: 58px;
}
</style>
