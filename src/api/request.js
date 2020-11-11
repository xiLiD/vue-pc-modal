import Vue from '@/main';
import axios from 'axios';
import store from '../store';
import { Message } from 'element-ui';
// import commonConfig from '../config.js';
var loadingTime = 500;
axios.defaults.timeout = 8000;
axios.interceptors.request.use(
  (config) => {
    // console.log('请求拦截器成功!',config)
    if (store.state.userId) {
      config.headers.Authorization = store.state.userId;
    }
    return config;
  },
  function(error) {
    // console.log('请求拦截器失败!',error)
    return Promise.reject(error);
  }
);
//
axios.interceptors.response.use(
  (res) => {
    // 状态码 200
    // debugger
    Vue.$httpLoading.close();
    // console.log('响应拦截器成功!',res)
    if (res.status == 200 && res.data.result == 0) {
      return Promise.resolve(res);
    } else {
      return Promise.reject(res);
    }
  },
  (error) => {
    Vue.$httpLoading.close();
    console.log('拦截器响应失败!', error);
    console.log(error.response);
    if (error && error.response) {
      switch (error.response.status) {
        case 400:
          error.msg = '请求错误(400)';
          break;
        case 401:
          error.msg = '未授权，请重新登录(401)';
          break;
        case 403:
          error.msg = '拒绝访问(403)';
          break;
        case 404:
          error.msg = '请求出错(404)';
          break;
        case 408:
          error.msg = '请求超时(408)';
          break;
        case 500:
          error.msg = '服务器错误(500)';
          break;
        case 501:
          error.msg = '服务未实现(501)';
          break;
        case 502:
          error.msg = '网络错误(502)';
          break;
        case 503:
          error.msg = '服务不可用(503)';
          break;
        case 504:
          error.msg = '网络超时(504)';
          break;
        case 505:
          error.msg = 'HTTP版本不受支持(505)';
          break;
        default:
          error.msg = `连接出错(${error.response.status})!`;
      }
    } else {
      error.msg = '连接服务器失败!';
    }
    Message.error(error.msg);
    return;
    // return Promise.reject(error)
  }
);

export function requestGet(XMLObject) {
  // config => 配置对象;其中包含 url=> 链接地址 , params=> 参数对象 isLoading => 是否需要增加loading , loadingTime => loading时间
  return new Promise((resolve, reject) => {
    let showLoading =
      XMLObject.showLoading || XMLObject.showLoading === undefined
        ? true
        : XMLObject.showLoading;
    if (showLoading) {
      let time = XMLObject.loadingTime || loadingTime;
      console.dir(Vue.$httpLoading);
      Vue.$httpLoading.show();
      setTimeout(() => {
        resolve(XMLObject);
      }, time);
    } else {
      Vue.$httpLoading.close();
      resolve(XMLObject);
    }
  }).then((res) => {
    return axios.get(res.url, { params: res.data });
  });
}
export function requestPost(XMLObject) {
  // debugger
  let showLoading =
    XMLObject.showLoading || XMLObject.showLoading === undefined
      ? true
      : XMLObject.showLoading;
  let formData = new URLSearchParams();
  Object.keys(XMLObject.data).forEach((key) => {
    formData.append(key, XMLObject.data[key]);
  });
  return new Promise((resolve, reject) => {
    if (showLoading) {
      let time = XMLObject.loadingTime || loadingTime;
      Vue.$httpLoading.show();
      setTimeout(() => {
        resolve(XMLObject);
      }, time);
    } else {
      Vue.$httpLoading.close();
      resolve(XMLObject);
    }
  }).then((res) => {
    return axios.post(res.url, formData);
  });
}
