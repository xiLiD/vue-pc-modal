(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-51ff4c38"],{c81b:function(e,t,a){"use strict";a.r(t);var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"notice-page"},[e._m(0),a("div",{staticClass:"form-search"},[a("el-form",{attrs:{inline:!0}},[a("el-form-item",{attrs:{label:"活动名称"}},[a("el-input",{attrs:{size:"mini",placeholder:"请输入名称"},model:{value:e.searchInline.name,callback:function(t){e.$set(e.searchInline,"name",t)},expression:"searchInline.name"}})],1),a("el-form-item",{attrs:{label:"申请人"}},[a("el-input",{attrs:{size:"mini",placeholder:"请输入名称"},model:{value:e.searchInline.user,callback:function(t){e.$set(e.searchInline,"user",t)},expression:"searchInline.user"}})],1),a("el-form-item",{attrs:{label:"状态"}},[a("el-select",{attrs:{size:"mini"},model:{value:e.searchInline.status,callback:function(t){e.$set(e.searchInline,"status",t)},expression:"searchInline.status"}},e._l(e.statusList,(function(e){return a("el-option",{key:e.value,attrs:{label:e.label,value:e.value}})})),1)],1),a("el-form-item",{attrs:{label:"申请时间"}},[a("el-date-picker",{attrs:{type:"date",placeholder:"选择日期",size:"mini"},model:{value:e.searchInline.time,callback:function(t){e.$set(e.searchInline,"time",t)},expression:"searchInline.time"}})],1),a("el-form-item",[a("el-button",{attrs:{size:"mini",type:"primary"}},[e._v("查询")]),a("el-button",{attrs:{size:"mini",type:"info",plain:""}},[e._v("清空")])],1)],1),a("el-table",{staticStyle:{width:"100%"},attrs:{data:e.tableData,"row-key":"codeKey",border:""}},[a("el-table-column",{attrs:{label:"活动编码",prop:"city",align:"center"}}),a("el-table-column",{attrs:{label:"活动名称",prop:"cnty",align:"center"}}),a("el-table-column",{attrs:{label:"当前审批人",prop:"grid",align:"center"}}),a("el-table-column",{attrs:{label:"申请人",prop:"order",align:"center"}}),a("el-table-column",{attrs:{label:"申请时间",prop:"population",align:"center"}}),a("el-table-column",{attrs:{label:"当前节点",prop:"popuNum1",align:"center"}})],1),a("el-pagination",{attrs:{"current-page":e.currentPage,"page-sizes":[10,20,50,100],"page-size":10,layout:"total, sizes, prev, pager, next, jumper",total:100},on:{"size-change":e.handleSizeChange,"current-change":e.handleCurrentChange}})],1)])},l=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"form-notice"},[a("div",{staticClass:"page-title"},[e._v("待审批活动列表")])])}],i={data:function(){return{searchInline:{name:"",user:"",status:"",time:""},statusList:[{label:"状态1",value:1},{label:"状态2",value:2}],tableData:[],currentPage:1}},mounted:function(){this.getTable()},methods:{toPages:function(){},getTable:function(){var e=[{city:"活动编码1",cnty:"活动名称1",grid:"李雷",order:"王XX",population:"2021/3/20",popuNum1:"集运审批"},{city:"活动编码1",cnty:"活动名称1",grid:"李雷",order:"王XX",population:"2021/3/20",popuNum1:"集运审批"},{city:"活动编码1",cnty:"活动名称1",grid:"李雷",order:"王XX",population:"2021/3/20",popuNum1:"集运审批"},{city:"活动编码1",cnty:"活动名称1",grid:"李雷",order:"王XX",population:"2021/3/20",popuNum1:"集运审批"},{city:"活动编码1",cnty:"活动名称1",grid:"李雷",order:"王XX",population:"2021/3/20",popuNum1:"集运审批"}];this.tableData=e,console.log(this.tableData)},handleSizeChange:function(e){console.log("每页 ".concat(e," 条"))},handleCurrentChange:function(e){console.log("当前页: ".concat(e))}}},r=i,s=(a("dd8e"),a("2877")),o=Object(s["a"])(r,n,l,!1,null,"851fa7a8",null);t["default"]=o.exports},dd8e:function(e,t,a){"use strict";var n=a("f5cb"),l=a.n(n);l.a},f5cb:function(e,t,a){}}]);
//# sourceMappingURL=chunk-51ff4c38.26e8170f.js.map