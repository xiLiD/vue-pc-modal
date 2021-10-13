// import Vue from 'vue'
import router from './router'
import Axios from 'axios'
import iopStore from '@/store/module/iopStore.js';
import base from "@/api/baseUrl"

router.beforeEach((to, from, next) => {
  Axios.post((process.env.NODE_ENV === "development" ? base.development : base.production) + '/Common/findUserInfo', {
  }).then(res => {
  // Axios.post(process.env.BASE_API + 'Common/findUserInfo', {}).then(res => {
    if(res.data.code === '0'){
      iopStore.dispatch('changeToken', res.data.data.userId)
      next()
    }
  })
  // let data = {}
  // let hasTicket = null
  // if (getUrlParms('METASOFT_SSO_TICKET') || Cookies.get('METASOFT_SSO_C_TICKET')) {
  //   hasTicket = getUrlParms('METASO FT_SSO_TICKET') || Cookies.get('METASOFT_SSO_C_TICKET')
  //   data = { ssoTicket: getUrlParms('METASOFT_SSO_TICKET') || Cookies.get('METASOFT_SSO_C_TICKET') }
  // } else {
  //   data = { ssoTicket: null }
  // }
  // // Axios.post(process.env.BASE_API + 'loginSso', data).then(res => {
  // //   if (res.data.data.userId) {
  // //     Cookies.set('METASOFT_SSO_C_TICKET', hasTicket)
  // //     store.dispatch('changeToken', res.data.data.userId)
  // //     next()
  // //   }
  // //   if (res.data.data.url) {
  // //     store.commit('setToken', '')
  // //     window.location.href = res.data.data.url
  // //     next()
  // //   }
  // // })
  // Axios.post(window.baseApi + '/loginSso', data).then(res => {
  //   Cookies.set('METASOFT_SSO_C_TICKET', hasTicket)
  //   if (res.data.data.redirectUrl) {
  //     window.location.href = res.data.data.redirectUrl
  //     store.commit('setToken', '')
  //   } else if (res.data.data.loginName || store.state.token !== '') {
  //     if (res.data.data.loginName) {
  //       store.dispatch('changeToken', res.data.data.loginName)
  //     }
  //     next()
  //   }
  // })

  // function getUrlParms (variable) {
  //   var query = window.location.search.substring(1)
  //   var vars = query.split('&')
  //   for (var i = 0; i < vars.length; i++) {
  //     var pair = vars[i].split('=')
  //     if (pair[0] === variable) { return pair[1] }
  //   }
  //   return (false)
  // }
})
