import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);
export default new Vuex.Store({
  state: {
    workRoutes: sessionStorage.getItem('worker') ? JSON.parse(sessionStorage.getItem('worker')) : [{
      "title": "我的工作台",
      "name": "1",
      "route": "workTable",
      "redirect": ""
    }]
  },
  mutations: {
    setRoutes(state, value) {
      // let routesArr = state.workRoutes;
      // debugger;
      // console.log(routesArr.some((item) => item.route == value.route))
      // if (routesArr.some((item) => item.route == value.route)) return;
      state.workRoutes = value;
      sessionStorage.setItem('worker', JSON.stringify(state.workRoutes))
    }
  },
  actions: {},
  modules: {}
});
