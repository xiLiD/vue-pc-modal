(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-169c8680"],{"35eb":function(t,e,a){},ded6:function(t,e,a){"use strict";var n=a("35eb"),s=a.n(n);s.a},e923:function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"page-wrapper"},[a("el-row",[a("el-button",{staticClass:"buttona",attrs:{type:"primary",size:"mini"}},[t._v("快捷键管理")])],1),a("el-table",{staticClass:"tablestyle",staticStyle:{width:"100%"},attrs:{"header-cell-style":t.headClass,border:"",data:t.tableData,"row-class-name":t.tableRowClassName}},[a("el-table-column",{attrs:{prop:"date",label:"快捷图标",width:"180",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("div",{ref:"button",on:{click:function(a){return a.preventDefault(),t.getDate(e.row)}}},[a("el-button",{attrs:{size:"mini",type:"primary",plain:""}},[t._v(" "+t._s(e.row.date)+" ")])],1)]}}])}),a("el-table-column",{attrs:{prop:"name",label:"快捷键名称",width:"180",align:"center"}}),a("el-table-column",{attrs:{prop:"address",label:"功能描述",width:"300",align:"center"}}),a("el-table-column",{attrs:{prop:"ok",label:"可用",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("el-switch",{attrs:{"active-color":"#13ce66"},on:{change:function(a){return t.anniu(e.row)}},model:{value:e.row.switch,callback:function(a){t.$set(e.row,"switch",a)},expression:"scope.row.switch"}})]}}])})],1)],1)},s=[],l=(a("4160"),a("159b"),{methods:{headClass:function(){return"text-align:center"},anniu:function(t){console.log(t.switch),console.log(this.tableData)},tableRowClassName:function(t){var e=t.rowIndex;return 1===e?"warning-row":3===e?"success-row":""},getDate:function(t){},initData:function(){this.tableData.forEach((function(t,e){t.id=e+1}))}},mounted:function(){this.initData()},data:function(){return{tableData:[{date:"创建活动",name:"创建活动",address:"快捷键创建活动，跳转到营销活动创建界面",switch:!0},{date:"创建客群",name:"创建客群",address:"快捷键创建客群，跳转到营销客群创建界面",switch:!0},{date:"创建画像",name:"创建画像",address:"快捷键创建画像，跳转到营销画像创建界面",switch:!0},{date:"创建标签",name:"创建标签",address:"快捷键创建标签，跳转到营销标签创建界面",switch:!0},{date:"创建场景",name:"创建场景",address:"快捷键创建场景，跳转到营销场景创建界面",switch:!0}]}}}),r=l,i=(a("ded6"),a("2877")),o=Object(i["a"])(r,n,s,!1,null,"ed565038",null);e["default"]=o.exports}}]);
//# sourceMappingURL=chunk-169c8680.709b263d.js.map