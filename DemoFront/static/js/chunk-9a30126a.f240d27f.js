(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-9a30126a"],{"35ae":function(e,t,a){},b910:function(e,t,a){"use strict";var n=a("35ae"),l=a.n(n);l.a},bf9c:function(e,t,a){"use strict";a.r(t);var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"notice-page"},[e._m(0),a("div",{staticClass:"form-search"},[a("el-form",{attrs:{inline:!0}},[a("el-form-item",{attrs:{label:"预警名称"}},[a("el-input",{attrs:{size:"mini",placeholder:"请输入名称"},model:{value:e.searchInline.name,callback:function(t){e.$set(e.searchInline,"name",t)},expression:"searchInline.name"}})],1),a("el-form-item",{attrs:{label:"监控指标"}},[a("el-input",{attrs:{size:"mini",placeholder:"请输入指标"},model:{value:e.searchInline.user,callback:function(t){e.$set(e.searchInline,"user",t)},expression:"searchInline.user"}})],1),a("el-form-item",{attrs:{label:"预警等级"}},[a("el-select",{attrs:{size:"mini"},model:{value:e.searchInline.status,callback:function(t){e.$set(e.searchInline,"status",t)},expression:"searchInline.status"}},e._l(e.statusList,(function(e){return a("el-option",{key:e.value,attrs:{label:e.label,value:e.value}})})),1)],1),a("el-form-item",{attrs:{label:"预警周期"}},[a("el-date-picker",{attrs:{type:"date",placeholder:"选择日期",size:"mini"},model:{value:e.searchInline.time,callback:function(t){e.$set(e.searchInline,"time",t)},expression:"searchInline.time"}})],1),a("el-form-item",[a("el-button",{attrs:{size:"mini",type:"primary"}},[e._v("查询")]),a("el-button",{attrs:{size:"mini",type:"info",plain:""}},[e._v("清空")])],1)],1),a("el-table",{staticStyle:{width:"100%"},attrs:{data:e.tableData,"row-key":"codeKey",border:""}},[a("el-table-column",{attrs:{label:"活动编码",prop:"city",align:"center"}}),a("el-table-column",{attrs:{label:"活动名称",prop:"cnty",align:"center"}}),a("el-table-column",{attrs:{label:"当前审批人",prop:"grid",align:"center"}}),a("el-table-column",{attrs:{label:"申请人",prop:"order",align:"center"}}),a("el-table-column",{attrs:{label:"申请时间",prop:"population",align:"center"}}),a("el-table-column",{attrs:{label:"当前节点",prop:"popuNum1",align:"center"}})],1),a("el-pagination",{attrs:{"current-page":e.currentPage,"page-sizes":[10,20,50,100],"page-size":10,layout:"total, sizes, prev, pager, next, jumper",total:100},on:{"size-change":e.handleSizeChange,"current-change":e.handleCurrentChange}})],1)])},l=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"form-notice"},[a("div",{staticClass:"page-title"},[e._v("我的监控指标预警列表")])])}],i={data:function(){return{searchInline:{name:"",user:"",status:"",time:""},statusList:[{label:"状态1",value:1},{label:"状态2",value:2}],tableData:[],currentPage:1}},mounted:function(){this.getTable()},methods:{toPages:function(){},getTable:function(){var e=[{city:"活动编码1",cnty:"活动名称1",grid:"李雷",order:"王XX",population:"2021/3/20",popuNum1:"集运审批"},{city:"活动编码1",cnty:"活动名称1",grid:"李雷",order:"王XX",population:"2021/3/20",popuNum1:"集运审批"},{city:"活动编码1",cnty:"活动名称1",grid:"李雷",order:"王XX",population:"2021/3/20",popuNum1:"集运审批"},{city:"活动编码1",cnty:"活动名称1",grid:"李雷",order:"王XX",population:"2021/3/20",popuNum1:"集运审批"},{city:"活动编码1",cnty:"活动名称1",grid:"李雷",order:"王XX",population:"2021/3/20",popuNum1:"集运审批"}];this.tableData=e,console.log(this.tableData)},handleSizeChange:function(e){console.log("每页 ".concat(e," 条"))},handleCurrentChange:function(e){console.log("当前页: ".concat(e))}}},r=i,s=(a("b910"),a("2877")),o=Object(s["a"])(r,n,l,!1,null,"41f7c49a",null);t["default"]=o.exports}}]);
//# sourceMappingURL=chunk-9a30126a.f240d27f.js.map