webpackJsonp([7],{"2Li3":function(t,e){},"2OHE":function(t,e){},"7DOq":function(t,e){},MWAP:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=i("4YfN"),l=i.n(o),n=i("ZeN4"),r=i("BGi1"),a=i("YaEn"),s=i("fUgm"),c={props:["info"],computed:l()({},Object(s.c)({list:"menu/list"})),data:function(){return{indexRouter:a.b,width:"100px",form:{pid:"",title:"",icon:"",type:1,url:"",status:1},rules:{pid:[{required:!0,message:"请选择上级菜单",trigger:"blur"}],title:[{required:!0,message:"请输入菜单名称",trigger:"blur"}],icon:[{required:!0,message:"请选择菜单图标",trigger:"blur"}],url:[{required:!0,message:"请选择菜单地址",trigger:"blur"}]}}},components:{},methods:l()({},Object(s.b)({reqList:"menu/reqListAction"}),{cancel:function(){this.$emit("hide")},changePid:function(){this.form.type=0==this.form.pid?1:2},close:function(){this.info.isAdd||this.empty()},add:function(){var t=this;this.form.title?1!=this.form.type||""!=this.form.icon?2!=this.form.type||""!=this.form.url?""!=this.form.pid?Object(n.a)(this.form).then(function(e){200===e.data.code?(Object(r.a)(e.data.msg),t.$emit("hide"),t.empty(),t.reqList()):Object(r.b)(e.data.msg)}):Object(r.b)("请选择上级菜单"):Object(r.b)("请选择菜单地址"):Object(r.b)("请选择菜单图标"):Object(r.b)("请填写菜单名称")},empty:function(){this.form={pid:0,title:"",icon:"",type:1,url:"",status:1}},look:function(t){var e=this;Object(n.i)({id:t}).then(function(i){e.form=i.data.list,e.form.id=t})},update:function(){var t=this;Object(n.k)(this.form).then(function(e){200==e.data.code?(Object(r.a)("更新成功"),t.$emit("hide"),t.empty(),t.reqList()):Object(r.b)(e.data.msg)})}}),mounted:function(){},beforeDestroy:function(){}},u={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("el-dialog",{attrs:{title:t.info.title,visible:t.info.isShow},on:{"update:visible":function(e){return t.$set(t.info,"isShow",e)},closed:t.close}},[i("el-form",{attrs:{model:t.form,rules:t.rules}},[i("el-form-item",{attrs:{label:"菜单名称","label-width":t.width,prop:"title"}},[i("el-input",{attrs:{autocomplete:"off"},model:{value:t.form.title,callback:function(e){t.$set(t.form,"title",e)},expression:"form.title"}})],1),t._v(" "),i("el-form-item",{attrs:{label:"上级菜单","label-width":t.width,prop:"pid"}},[i("el-select",{attrs:{placeholder:"请选择菜单类型"},on:{change:t.changePid},model:{value:t.form.pid,callback:function(e){t.$set(t.form,"pid",e)},expression:"form.pid"}},[i("el-option",{attrs:{label:"顶级菜单",value:0}}),t._v(" "),t._l(t.list,function(t){return i("el-option",{key:t.id,attrs:{label:t.title,value:t.id}})})],2)],1),t._v(" "),i("el-form-item",{attrs:{label:"菜单类型","label-width":t.width}},[i("el-radio",{attrs:{label:1,disabled:""},model:{value:t.form.type,callback:function(e){t.$set(t.form,"type",e)},expression:"form.type"}},[t._v("目录")]),t._v(" "),i("el-radio",{attrs:{label:2,disabled:""},model:{value:t.form.type,callback:function(e){t.$set(t.form,"type",e)},expression:"form.type"}},[t._v("菜单")])],1),t._v(" "),1==t.form.type?i("el-form-item",{attrs:{label:"菜单图标","label-width":t.width,prop:"icon"}},[i("el-select",{attrs:{placeholder:"请选择目录图标"},model:{value:t.form.icon,callback:function(e){t.$set(t.form,"icon",e)},expression:"form.icon"}},[i("el-option",{attrs:{value:"el-icon-setting"}},[i("i",{staticClass:"el-icon-setting"})]),t._v(" "),i("el-option",{attrs:{value:"el-icon-goods"}},[i("i",{staticClass:"el-icon-goods"})]),t._v(" "),i("el-option",{attrs:{value:"el-icon-user"}},[i("i",{staticClass:"el-icon-user"})]),t._v(" "),i("el-option",{attrs:{value:"el-icon-camera"}},[i("i",{staticClass:"el-icon-camera"})])],1)],1):i("el-form-item",{attrs:{label:"菜单地址","label-width":t.width,prop:"url"}},[i("el-select",{model:{value:t.form.url,callback:function(e){t.$set(t.form,"url",e)},expression:"form.url"}},[i("el-option",{attrs:{value:"",label:"--请选择--",disabled:""}}),t._v(" "),t._l(t.indexRouter,function(t){return i("el-option",{key:t.path,attrs:{label:t.name,value:"/"+t.path}})})],2)],1),t._v(" "),i("el-form-item",{attrs:{label:"状态","label-width":t.width}},[i("el-switch",{attrs:{"active-value":1,"inactive-value":2},model:{value:t.form.status,callback:function(e){t.$set(t.form,"status",e)},expression:"form.status"}})],1)],1),t._v(" "),i("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[i("el-button",{directives:[{name:"preventReClick",rawName:"v-preventReClick"}],on:{click:t.cancel}},[t._v("取 消")]),t._v(" "),t.info.isAdd?i("el-button",{directives:[{name:"preventReClick",rawName:"v-preventReClick"}],attrs:{type:"primary"},on:{click:t.add}},[t._v("添 加")]):i("el-button",{directives:[{name:"preventReClick",rawName:"v-preventReClick"}],attrs:{type:"primary"},on:{click:t.update}},[t._v("修 改")])],1)],1)],1)},staticRenderFns:[]};var d=i("C7Lr")(c,u,!1,function(t){i("2OHE")},null,null).exports,f={computed:l()({},Object(s.c)({list:"menu/list"})),data:function(){return{}},components:{},methods:l()({},Object(s.b)({reqList:"menu/reqListAction"}),{edit:function(t){this.$emit("emit",t)},del:function(t){var e=this;this.$confirm("你确定要删除吗?","提示",{confirmButtonText:"删除",cancelButtonText:"取消",type:"warning"}).then(function(){Object(n.h)({id:t}).then(function(t){200==t.data.code?(Object(r.a)("删除成功"),e.reqList()):Object(r.b)(t.data.msg)})}).catch(function(){e.$message({type:"info",message:"已取消删除"})})}}),mounted:function(){this.reqList()},beforeDestroy:function(){}},m={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("el-table",{staticStyle:{width:"90%",margin:"10px auto","margin-bottom":"20px"},attrs:{data:t.list,"row-key":"id",border:"","default-expand-all":"","tree-props":{children:"children",hasChildren:"hasChildren"}}},[i("el-table-column",{attrs:{prop:"id",label:"菜单编号",sortable:"",width:"180"}}),t._v(" "),i("el-table-column",{attrs:{prop:"title",label:"菜单名称",sortable:"",width:"180"}}),t._v(" "),i("el-table-column",{attrs:{prop:"",label:"菜单图标"},scopedSlots:t._u([{key:"default",fn:function(t){return[i("i",{class:t.row.icon})]}}])}),t._v(" "),i("el-table-column",{attrs:{prop:"url",label:"地址"}}),t._v(" "),i("el-table-column",{attrs:{label:"状态"},scopedSlots:t._u([{key:"default",fn:function(e){return[1==e.row.status?i("el-button",{attrs:{type:"primary"}},[t._v("启用")]):i("el-button",{attrs:{type:"info"}},[t._v("禁用")])]}}])}),t._v(" "),i("el-table-column",{attrs:{label:"操作"},scopedSlots:t._u([{key:"default",fn:function(e){return[i("el-button",{attrs:{type:"primary"},on:{click:function(i){return t.edit(e.row.id)}}},[t._v("编辑")]),t._v(" "),i("el-button",{attrs:{type:"danger"},on:{click:function(i){return t.del(e.row.id)}}},[t._v("删除")])]}}])})],1)],1)},staticRenderFns:[]};var p={data:function(){return{info:{isShow:!1,title:"添加菜单",isAdd:!0}}},components:{vAdd:d,vList:i("C7Lr")(f,m,!1,function(t){i("7DOq")},null,null).exports},methods:{hide:function(){this.info.isShow=!1},wallAdd:function(){this.info={isShow:!0,title:"添加菜单",isAdd:!0}},emit:function(t){this.info={isShow:!0,title:"修改菜单",isAdd:!1},this.$refs.add.look(t)}},mounted:function(){},beforeDestroy:function(){}},b={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("el-button",{directives:[{name:"preventReClick",rawName:"v-preventReClick"}],attrs:{type:"primary"},on:{click:t.wallAdd}},[t._v("添加")]),t._v(" "),i("v-add",{ref:"add",attrs:{info:t.info},on:{hide:t.hide}}),t._v(" "),i("v-list",{on:{emit:function(e){return t.emit(e)}}})],1)},staticRenderFns:[]};var v=i("C7Lr")(p,b,!1,function(t){i("2Li3")},null,null);e.default=v.exports}});
//# sourceMappingURL=7.3938bf085c079fdb3891.js.map