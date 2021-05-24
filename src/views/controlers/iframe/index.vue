<template>
  <div>
    <div>
      <iframe
        v-if="$route.query.src"
        :src="$route.query.src"
        frameborder="0"
        width="900px"
        height="500px"
      ></iframe>
      <iframe
        v-else
        :src="urlPath"
        frameborder="0"
        width="900px"
        height="500px"
      ></iframe>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      urlPath: "",
    };
  },
  mounted() {
    this.getUrlPath();
  },
  methods: {
    getUrlPath: function () {
      //获取 iframe src 路径
      let url = window.location.href;
      url = url.replace("myiframe/", "");
      return url;
    },
  },
};
</script>