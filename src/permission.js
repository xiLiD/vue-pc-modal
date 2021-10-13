// import Vue from 'vue'
import router from './router'
import Cookies from 'js-cookie'
import Axios from 'axios'
import store from './store/index'
import base from "@/api/baseUrl";
const webpackInfo = require('@/utils/webpack')

import {
  Message,
  Loading
} from "element-ui";
router.beforeEach((to, from, next) => {
  document.title = webpackInfo.title // 页面标题
  let baseUrl = process.env.NODE_ENV === "development" ? base.development : base.production;
  // LOGIN_KEY  0 => 关闭单点登录 1 => 开启单点登录 
  // let resData = {
  //   staffId : 1,
  //   staffName : '胡彪',
  //   staffNo : 'OGhubiao'
  // }
  // let isAdmin = false
  // let cur = {
  //   ...resData,
  //   isAdmin
  // }
  // store.dispatch('worker/changeUserInfo', cur);
  // next();
  // return;


  if (webpackInfo.LOGIN_KEY == '1') {
    // 单点登录
    let data = {}
    let hasTicket = null
    if (getUrlParms('METASOFT_SSO_TICKET') || Cookies.get('METASOFT_SSO_C_TICKET')) {
      hasTicket = getUrlParms('METASO FT_SSO_TICKET') || Cookies.get('METASOFT_SSO_C_TICKET')
      data = {
        ssoTicket: getUrlParms('METASOFT_SSO_TICKET') || Cookies.get('METASOFT_SSO_C_TICKET')
      }
    } else {
      data = {
        ssoTicket: null
      }
    }
    let loading = Loading.service({
      lock: true,
      text: "加载中...",
      spinner: "el-icon-loading",
      background: "rgba(0, 0, 0, 0.7)"
    });

    
    Axios.post(baseUrl + '/iop/myworkbench/system/findUserInfo', data).then(res => {
      Cookies.set('METASOFT_SSO_C_TICKET', hasTicket)
      if (res.data.data.redirectUrl) {
        window.location.href = res.data.data.redirectUrl
        // store.commit('iopStore/setToken','');
        store.dispatch('worker/changeUserInfo', {});
      } else if (res.data.data) {
        let isAdmin = res.data.isAdmin;
        let target = {
          ...res.data.data,
          isAdmin
        };
        loading.close();
        store.dispatch('worker/changeUserInfo', target);
        next();
      }
    }).catch((err)=>{
      loading.close();
    })

    function getUrlParms(variable) {
      var query = window.location.search.substring(1)
      var vars = query.split('&')
      for (var i = 0; i < vars.length; i++) {
        var pair = vars[i].split('=')
        if (pair[0] === variable) {
          return pair[1]
        }
      }
      return (false)
    }
  } else {
    next()
  }

})