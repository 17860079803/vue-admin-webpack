webpackJsonp([5],{"2Bvk":function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=i("4YfN"),a=i.n(n),r=i("ZeN4"),l=i("BGi1"),o=i("fUgm"),s={props:["info"],computed:a()({},Object(o.c)({list:"cate/list"})),data:function(){return{imgUrl:"",width:"100px",form:{pid:0,catename:"",img:null,status:1},rules:{catename:[{required:!0,message:"请输入标题",trigger:"blur"}],img:[{required:!0,message:"请上传图片",trigger:"blur"}],pid:[{required:!0,message:"请选择一级分类",trigger:"blur"}]}}},components:{},methods:a()({},Object(o.b)({reqList:"cate/reqListAction"}),{selectImg:function(t){var e=t.target.files[0];if(e.size>2097152)Object(l.b)("文件格式不能超过2M");else{var i=e.name.slice(e.name.lastIndexOf("."));[".jpg",".jpeg",".png",".gif","WEBP"].includes(i)?(this.imgUrl=URL.createObjectURL(e),this.form.img=e):Object(l.b)("请上传正确的图片格式")}},cancel:function(){this.$emit("hide")},close:function(){this.info.isAdd||this.empty()},add:function(){var t=this;this.form.catename||this.form.img?Object(r.d)(this.form).then(function(e){200===e.data.code?(Object(l.a)(e.data.msg),t.$emit("hide"),t.empty(),t.reqList()):Object(l.b)(e.data.msg)}):Object(l.b)("请输入分类名字,和上传图片")},empty:function(){this.form={pid:0,catename:"",img:null,status:1},this.imgUrl=""},look:function(t){var e=this;Object(r.A)({id:t}).then(function(i){e.form=i.data.list,e.form.id=t,e.imgUrl=e.$preImg+i.data.list.img})},update:function(){var t=this;console.log(111),Object(r.C)(this.form).then(function(e){200==e.data.code?(Object(l.a)("更新成功"),t.$emit("hide"),t.empty(),t.reqList()):Object(l.b)(e.data.msg)})}}),mounted:function(){},beforeDestroy:function(){}},c={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("el-dialog",{attrs:{title:t.info.title,visible:t.info.isShow},on:{"update:visible":function(e){return t.$set(t.info,"isShow",e)},closed:t.close}},[i("el-form",{attrs:{model:t.form,rules:t.rules}},[i("el-form-item",{attrs:{label:"上级分类","label-width":t.width,prop:"pid"}},[i("el-select",{attrs:{placeholder:"请选择活动区域"},model:{value:t.form.pid,callback:function(e){t.$set(t.form,"pid",e)},expression:"form.pid"}},[i("el-option",{attrs:{label:"顶级分类",value:0}}),t._v(" "),t._l(t.list,function(t){return i("el-option",{key:t.id,attrs:{label:t.catename,value:t.id}})})],2)],1),t._v(" "),i("el-form-item",{attrs:{label:"分类名称","label-width":t.width,prop:"catename"}},[i("el-input",{attrs:{autocomplete:"off"},model:{value:t.form.catename,callback:function(e){t.$set(t.form,"catename",e)},expression:"form.catename"}})],1),t._v(" "),0!=t.form.pid?i("el-form-item",{attrs:{label:"图片","label-width":t.width,prop:"img"}},[i("div",{staticClass:"upload-box"},[i("h3",{staticClass:"upload-add"},[t._v("+")]),t._v(" "),t.imgUrl?i("img",{staticClass:"upload-img",attrs:{src:t.imgUrl,alt:""}}):t._e(),t._v(" "),i("input",{ref:"file",staticClass:"upload-file",attrs:{type:"file"},on:{change:t.selectImg}})])]):t._e(),t._v(" "),i("el-form-item",{attrs:{label:"状态","label-width":t.width}},[i("el-switch",{attrs:{"active-value":1,"inactive-value":2},model:{value:t.form.status,callback:function(e){t.$set(t.form,"status",e)},expression:"form.status"}})],1)],1),t._v(" "),i("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[i("el-button",{directives:[{name:"preventReClick",rawName:"v-preventReClick"}],on:{click:t.cancel}},[t._v("取 消")]),t._v(" "),t.info.isAdd?i("el-button",{directives:[{name:"preventReClick",rawName:"v-preventReClick"}],attrs:{type:"primary"},on:{click:t.add}},[t._v("添 加")]):i("el-button",{directives:[{name:"preventReClick",rawName:"v-preventReClick"}],attrs:{type:"primary"},on:{click:t.update}},[t._v("修 改")])],1)],1)],1)},staticRenderFns:[]};var d=i("C7Lr")(s,c,!1,function(t){i("Fyjq")},"data-v-6bbfc3c2",null).exports,u={computed:a()({},Object(o.c)({list:"cate/list"})),data:function(){return{}},components:{},methods:a()({},Object(o.b)({reqList:"cate/reqListAction"}),{edit:function(t){this.$emit("emit",t)},del:function(t){var e=this;Object(r.z)({id:t}).then(function(t){200==t.data.code?(Object(l.a)("删除成功"),e.reqList()):Object(l.b)(t.data.msg)})}}),mounted:function(){this.reqList()},beforeDestroy:function(){}},m={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("el-table",{staticStyle:{width:"90%",margin:"10px auto","margin-bottom":"20px"},attrs:{data:t.list,"row-key":"id",border:"","default-expand-all":"","tree-props":{children:"children",hasChildren:"hasChildren"}}},[i("el-table-column",{attrs:{prop:"id",label:"分类编号",sortable:"",width:"180"}}),t._v(" "),i("el-table-column",{attrs:{prop:"catename",label:"分类名称",sortable:"",width:"180"}}),t._v(" "),i("el-table-column",{attrs:{label:"分类图片"},scopedSlots:t._u([{key:"default",fn:function(e){return["null"!=e.row.img?i("img",{attrs:{src:t.$preImg+e.row.img,alt:""}}):t._e()]}}])}),t._v(" "),i("el-table-column",{attrs:{label:"状态"},scopedSlots:t._u([{key:"default",fn:function(e){return[1==e.row.status?i("el-button",{attrs:{type:"primary"}},[t._v("启用")]):i("el-button",{attrs:{type:"info"}},[t._v("禁用")])]}}])}),t._v(" "),i("el-table-column",{attrs:{label:"操作"},scopedSlots:t._u([{key:"default",fn:function(e){return[i("el-button",{attrs:{type:"primary"},on:{click:function(i){return t.edit(e.row.id)}}},[t._v("编辑")]),t._v(" "),i("v-del",{on:{confirm:function(i){return t.del(e.row.id)}}})]}}])})],1)],1)},staticRenderFns:[]};var f={data:function(){return{info:{isShow:!1,title:"添加分类",isAdd:!0}}},components:{vAdd:d,vList:i("C7Lr")(u,m,!1,function(t){i("hChh")},null,null).exports},methods:{hide:function(){this.info.isShow=!1},wallAdd:function(){this.info={isShow:!0,title:"添加分类",isAdd:!0}},emit:function(t){this.info={isShow:!0,title:"修改分类",isAdd:!1},this.$refs.add.look(t)}},mounted:function(){},beforeDestroy:function(){}},p={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("el-button",{directives:[{name:"preventReClick",rawName:"v-preventReClick"}],attrs:{type:"primary"},on:{click:t.wallAdd}},[t._v("添加")]),t._v(" "),i("v-add",{ref:"add",attrs:{info:t.info},on:{hide:t.hide}}),t._v(" "),i("v-list",{on:{emit:function(e){return t.emit(e)}}})],1)},staticRenderFns:[]};var v=i("C7Lr")(f,p,!1,function(t){i("zcCf")},null,null);e.default=v.exports},Fyjq:function(t,e){},hChh:function(t,e){},zcCf:function(t,e){}});
//# sourceMappingURL=5.b8187bdf4d1d1b81ceb3.js.map