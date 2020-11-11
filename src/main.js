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

import ElementUI from "element-ui";
import * as filters from "./filters"; // global filters

import "element-ui/lib/theme-chalk/index.css";
import "@/styles/common.css";
import "@/styles/index.css";

Vue.use(ElementUI); // global css
Vue.config.productionTip = false;

// register global utility filters.
Object.keys(filters).forEach(key => {
    Vue.filter(key, filters[key]);
});

import { Loading } from "element-ui";
Vue.prototype.$httpLoading = {
    show: function() {
        Loading.service({
            lock: true,
            text: "加载中...",
            spinner: "el-icon-loading",
            background: "rgba(0, 0, 0, 0.7)"
        });
    },
    close: function() {
        let loadingInstance = Loading.service({
            lock: true,
            text: "加载中...",
            spinner: "el-icon-loading",
            background: "rgba(0, 0, 0, 0.7)"
        });
        // Vue.$nextTick(() => {
        //   // 以服务的方式调用的 Loading 需要异步关闭
        // });
        loadingInstance.close();
    }
};

Vue.prototype.$formatSeconds = formatSeconds;
Vue.prototype.$timestampToTime3 = timestampToTime3;
Vue.prototype.$timestampToTime = timestampToTime;
Vue.prototype.$copy = function(value) {
    return JSON.parse(JSON.stringify(value));
};
Vue.prototype.$isNull = function(value) {
    if (
        value === "" ||
        value === null ||
        value === undefined ||
        value.length === 0
    ) {
        return true;
    } else {
        return false;
    }
};
const vue = new Vue({
    router,
    store, // 在/store/index.js文件中暴露出的：new Vuex.Store出来的对象
    render: h => h(App)
}).$mount("#app");
export default vue;