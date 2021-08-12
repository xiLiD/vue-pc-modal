import { requestGet, requestPost, requestFile, requestExcel, urlGetRequest } from "@/api/request";
import url from "./url";
import base from "@/api/baseUrl";
function getParams(params, name) {
    let baseUrl = process.env.NODE_ENV === "development" ? base.development : base.production;
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


const getKindSearch = (params = {}, current) => {
    params.url = current + '/getpage';
    return requestPost(getParams(params,'/media'));
}
const getKindUpdate = (params = {}, current) => {
    params.url = current + '/update';
    return requestPost(getParams(params,'/media'));
}



export default {
    getKindSearch,
    getKindUpdate
};
