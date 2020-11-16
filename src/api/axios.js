import { requestGet, requestPost, requestFile, requestExcel } from "./request";
import url from "./url";
import base from "@/api/baseUrl";

function getParams(params) {
  let baseUrl = process.env.NODE_ENV === "development" ? base.development : base.production;
  return Object.assign(
    {},
    {
      url: baseUrl + "/iopWeb" + params.url,
      data: params.data,
      showLoading: params.showLoading
    }
  );
}
const getToken = function (params) {
  params.url = url.getToken;
  return requestPost(getParams(params));
};
export default {
  getToken
};
