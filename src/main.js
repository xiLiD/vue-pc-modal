// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from "vue";
import App from "./App";
import router from "./router";
import store from "./store/index";
import {
    timestampToTime3,
    timestampToTime,
    formatSeconds
} from "@/utils/index";
// import element from '@/UI/ElementUI/template.js' // element-ui UI组件按需引入
import * as filters from "./filters"; // global filters
import element from 'element-ui'
import { Loading } from 'element-ui'
import "element-ui/lib/theme-chalk/index.css";
import '@/utils/utils-webpack/console/rewriteConsole'
import '@/utils/utils-webpack/console/vConsole'
import "@/styles/common.css";
import "@/styles/index.css";
Vue.prototype.$httpLoading = {
    show: function () {
        Loading.service({
            lock: true,
            text: "加载中...",
            spinner: "el-icon-loading",
            background: "rgba(0, 0, 0, 0.7)"
        });
    },
    close: function () {
        let loadingInstance = Loading.service({
            lock: true,
            text: "加载中...",
            spinner: "el-icon-loading",
            background: "rgba(0, 0, 0, 0.7)"
        });
        loadingInstance.close();
    }
};
Vue.use(element); // global css
Vue.config.productionTip = false;
Object.keys(filters).forEach(key => {
    Vue.filter(key, filters[key]);
});

Vue.prototype.$formatSeconds = formatSeconds;
Vue.prototype.$timestampToTime3 = timestampToTime3;
Vue.prototype.$timestampToTime = timestampToTime;
// Vue.prototype.$pickerOptions2 = pickerOptions2
Vue.prototype.$copy = function (value) {
    return JSON.parse(JSON.stringify(value));
};
const vue = new Vue({
    router,
    store, // 在/store/index.js文件中暴露出的：new Vuex.Store出来的对象
    render: h => h(App)
}).$mount("#app");

export default vue;