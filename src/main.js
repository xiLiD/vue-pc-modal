// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from "vue";
import App from "./App";
// import './permission.js';
// import './permissionIop.js';
import router from "./router";
import store from "./store/index";
import "@/utils/index";
import element from '@/UI/ElementUI/template.js' // element-ui UI组件按需引入
import * as filters from "./filters"; // global filters
import "element-ui/lib/theme-chalk/index.css";
import '@/utils/utils-webpack/console/rewriteConsole'
import '@/utils/utils-webpack/console/vConsole'
import "@/styles/reset.css"
import "@/styles/common.css";
import "@/styles/index.css";
import VueLazyload from 'vue-lazyload'

Vue.use(VueLazyload);
Vue.use(element); // global css
Vue.config.productionTip = false;
Object.keys(filters).forEach(key => {
    Vue.filter(key, filters[key]);
});

// // wesocket  通信
// import * as socketApi from '@/utils/socket'
// Vue.prototype.socketApi = socketApi

import scroll from 'vue-seamless-scroll'

// 引入amfe-flexible
// 移动端适配方案  =>  结合vue.config.js 配置css项
import 'amfe-flexible/index';


import 'swiper/swiper.min.css'
Vue.use(scroll)
const vue = new Vue({
    router,
    store, // 在/store/index.js文件中暴露出的：new Vuex.Store出来的对象
    render: h => h(App)
}).$mount("#app");
export default vue;