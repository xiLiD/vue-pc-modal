<template>
  <div id="water-fall">
    <water-fall :waterfallData="waterfallData"></water-fall>
  </div>
</template>

<script>
import WaterFall from "@/components/waterfall/index";
export default {
  name: "App",
  components: {
    WaterFall,
  },
  data() {
    return {
      waterfallData: [
        {
          e_img: require("@/components/waterfall/resource/01.jpg"),
          // 图片
          e_intro: "描述信息",
          u_img: require("@/components/waterfall/resource/01.jpg"),
          // 标记图
          u_name: "开发者",
        },
        {
          e_img: require("@/components/waterfall/resource/02.jpg"),
          e_intro: "描述信息",
          u_img: require("@/components/waterfall/resource/02.jpg"),
          u_name: "开发者",
        },
        {
          e_img: require("@/components/waterfall/resource/03.jpg"),
          e_intro: "描述信息",
          u_img: require("@/components/waterfall/resource/03.jpg"),
          u_name: "开发者",
        },
        {
          e_img: require("@/components/waterfall/resource/04.jpg"),
          e_intro: "描述信息",
          u_img: require("@/components/waterfall/resource/04.jpg"),
          u_name: "开发者",
        },
        {
          e_img: require("@/components/waterfall/resource/05.jpg"),
          e_intro: "描述信息",
          u_img: require("@/components/waterfall/resource/05.jpg"),
          u_name: "开发者",
        },
        {
          e_img: require("@/components/waterfall/resource/06.jpg"),
          e_intro: "描述信息",
          u_img: require("@/components/waterfall/resource/06.jpg"),
          u_name: "开发者",
        },
      ],
    };
  },
};
</script>
<style lang="less">
@import "./css/iconfont.css";
</style>