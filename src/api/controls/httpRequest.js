import { requestGet, requestPost, requestFile, requestExcel, urlGetRequest } from "@/api/request";
import url from "./url";
import base from "@/api/baseUrl";
function getParams(params, name) {
    let baseUrl = process.env.NODE_ENV === "development" ? base.development : base.production + '/iop/myworkbench';
    name = name ? name : "";
    return Object.assign(
        {},
        {
            url: baseUrl + name + params.url,
            data: params.data,
            showLoading: params.showLoading,
            timeOut: params.timeOut,
            loadingTime: params.loadingTime,
            isLoading: params.isLoading
        }
    );
}


const addData = function (params = {}) {
    params.url = url.addData;
    
    return requestPost(getParams(params));
};

const editData = function (params = {}) {
    params.url = url.editData;
    
    return requestPost(getParams(params));
};

const getNoticeType = function (params = {}) {
    params.url = url.getNoticeType;
    
    return requestPost(getParams(params));
};


const deleteData = function (params = {}) {
    params.url = url.deleteData;
    
    return requestPost(getParams(params));
};
const findSatisfatChnlInfo = function (params = {}) {
    params.url = url.findSatisfatChnlInfo;
    
    return requestPost(getParams(params));
};
const effectiveData = function (params = {}) {
    params.url = url.effectiveData;
    
    return requestPost(getParams(params));
};
const noticePage = function (params = {}) {
    params.url = url.noticePage;
    
    return requestPost(getParams(params));
};
const helpImport = function (params = {}) {
    params.url = url.helpImport;
    
    return requestPost(getParams(params));
};
const getIndexinfo = function (params = {}) {
    params.url = url.getIndexinfo;
    
    return requestPost(getParams(params));
};
const helpPage = function (params = {}) {
    params.url = url.helpPage;
    
    return requestPost(getParams(params));
};


const quickDelete = function (params = {}) {
    params.url = url.quickDelete;
    
    return requestPost(getParams(params));
};

const quickAdd = function (params = {}) {
    params.url = url.quickAdd;
    
    return requestPost(getParams(params));
};
const quickList = function (params = {}) {
    params.url = url.quickList;
    
    return requestPost(getParams(params));
};
const quickUpdate = function (params = {}) {
    params.url = url.quickUpdate;
    
    return requestPost(getParams(params));
};
const guestsPage = function (params = {}) {
    params.url = url.guestsPage;
    
    return requestPost(getParams(params));
};
const labelGetTop = function (params = {}) {
    params.url = url.labelGetTop;
    
    return requestPost(getParams(params));
};
const activityPage = function (params = {}) {
    params.url = url.activityPage;
    
    return requestPost(getParams(params));
};
const getUserinfo = function (params = {}) {
    params.url = url.getUserinfo;
    
    return requestPost(getParams(params));
};
const systemPage = function (params = {}) {
    params.url = url.systemPage;
    
    return requestPost(getParams(params));
};
const applicationMy = function (params = {}) {
    params.url = url.applicationMy;
    
    return requestPost(getParams(params));
};

const NotApproval = function (params = {}) {
    params.url = url.NotApproval;
    
    return requestPost(getParams(params));
};
const questionAdd = function (params = {}) {
    params.url = url.questionAdd;
    
    return requestPost(getParams(params));
};
const questionPage = function (params = {}) {
    params.url = url.questionPage;
    
    return requestPost(getParams(params));
};









export default {
    getNoticeType,
    addData,
    editData,
    deleteData,
    findSatisfatChnlInfo,
    effectiveData,
    noticePage,
    // 帮助中心相关接口
    helpImport,
    getIndexinfo,
    helpPage,
    //快捷导航接口
    quickDelete,
    quickAdd,
    quickList,
    quickUpdate,
    // 我的客群接口
    guestsPage,
    // 标签相关接口
    labelGetTop,
    activityPage,
    // 活动接口
    activityPage,
    // 用户信息接口
    getUserinfo,
    // 用户画像接口
    systemPage,



    // 申请相关接口
    applicationMy,
    NotApproval,
    // 评论和留言相关接口
    questionAdd,
    questionPage
};
