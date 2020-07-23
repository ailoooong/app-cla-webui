(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-29403dc6"],{"6eed":function(t,e,i){"use strict";i.r(e);var a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("div",{staticClass:"tableStyle"},[i("el-table",{staticStyle:{width:"100%"},attrs:{data:t.tableData,align:"center"}},[i("el-table-column",{attrs:{prop:"repository",label:"Repository",width:"180"},scopedSlots:t._u([{key:"default",fn:function(e){return[i("svg-icon",{attrs:{"icon-class":"repository"}}),i("span",{staticClass:"pointer hoverUnderline",staticStyle:{"margin-left":"10px"},on:{click:function(e){return t.newWindow()}}},[t._v(t._s(e.row.repository))])]}}])}),i("el-table-column",{attrs:{prop:"cla",label:"CLA",width:"180"},scopedSlots:t._u([{key:"default",fn:function(e){return[i("span",{staticClass:"pointer hoverUnderline",on:{click:function(e){return t.checkCla()}}},[t._v(t._s(e.row.cla))])]}}])}),i("el-table-column",{attrs:{prop:"gist",label:"Gist"},scopedSlots:t._u([{key:"default",fn:function(t){return[i("svg-icon",{staticStyle:{cursor:"pointer"},attrs:{"icon-class":"github"}})]}}])}),i("el-table-column",{attrs:{prop:"sharedGist",label:"Shared Gist"}}),i("el-table-column",{attrs:{prop:"contributors",label:"Contributors",align:"center"}}),i("el-table-column",{attrs:{prop:"status",align:"center",label:"Status"},scopedSlots:t._u([{key:"default",fn:function(t){return[i("svg-icon",{staticClass:"pointer",attrs:{"icon-class":"link_active"}})]}}])}),i("el-table-column",{attrs:{align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){return[i("el-tooltip",{staticClass:"item",attrs:{effect:"dark",content:"Edit",placement:"bottom"}},[i("svg-icon",{staticClass:"pointer",staticStyle:{display:"inline-block","margin-right":".5rem"},attrs:{"icon-class":"edit"},on:{click:function(i){return t.editHandleClick(e)}}})],1),i("el-popover",{attrs:{width:"80",placement:"right"}},[i("div",{staticClass:"menuBT"},[i("el-button",{attrs:{type:"primary",size:"medium"}},[t._v("Import")]),i("el-button",{attrs:{type:"primary",size:"medium"}},[t._v("ReCheck PRs")]),i("el-button",{attrs:{type:"primary",size:"medium"}},[t._v("Get Badge")]),i("el-button",{attrs:{type:"primary",size:"medium"},on:{click:function(e){t.unLinkDialogVisible=!0}}},[t._v("Unlink ")])],1),i("el-tooltip",{attrs:{slot:"reference",effect:"dark",content:"More..",placement:"bottom"},slot:"reference"},[i("svg-icon",{staticClass:"pointer",attrs:{"icon-class":"menu"}})],1)],1)]}}])})],1)],1),i("div",{staticClass:"paginationClass"},[i("el-pagination",{attrs:{background:"","page-size":5,"pager-count":5,"hide-on-single-page":!0,"current-page":t.currentPage,layout:"prev, pager, next",total:t.tableTotal},on:{"current-change":t.changePage}})],1),i("el-dialog",{attrs:{title:"",top:"5vh",visible:t.unLinkDialogVisible,width:"35%"},on:{"update:visible":function(e){t.unLinkDialogVisible=e}}},[i("div",[i("p",{staticClass:"dialogDesc"},[t._v("Are you sure you want to unlink?")]),i("div",[i("svg-icon",{staticStyle:{width:"30rem",height:"20rem",margin:"auto"},attrs:{"icon-class":"error"}})],1),i("div",{staticStyle:{padding:"0 6rem","text-align":"left","font-size":"1.3rem"}},[i("p",{staticStyle:{"text-align":"center"}},[t._v("Unlinking will...")]),i("ul",[i("li",[t._v("Remove the CLA assistant webhook in your repository/organization ")]),i("li",[t._v("Remove the link to your list of contributors")])])]),i("div",{staticClass:"right"},[i("el-button",{on:{click:function(e){t.unLinkDialogVisible=!1}}},[t._v("Keep it")]),i("el-button",{attrs:{type:"danger"},on:{click:function(e){return t.unLinkRepository()}}},[t._v("Unlink anyway")])],1)])]),i("el-dialog",{attrs:{title:"",top:"5vh",visible:t.editDialogVisible,width:"35%"},on:{"update:visible":function(e){t.editDialogVisible=e}}},[i("div",[i("p",{staticClass:"size_b"},[t._v("Edit ooo/Test")]),i("div",{staticClass:"left"},[i("div",[i("span",{staticClass:"size_m"},[t._v("Choose a CLA")])]),i("div",[i("span",[t._v("(please note that changing the CLA results in a new request to sign the CLA from the contributors!)")])]),i("p",{staticClass:"size_m",staticStyle:{"margin-bottom":".2rem"}},[t._v("Select from Gist")]),i("el-select",{staticStyle:{width:"100%"},attrs:{clearable:"",placeholder:"select",size:"medium",value:t.claValue},on:{change:t.changeCla},model:{value:t.claValue,callback:function(e){t.claValue=e},expression:"claValue"}},t._l(t.claOptions,(function(t){return i("el-option",{key:t.value,attrs:{label:t.label,value:t.value}})})),1),i("div",{staticClass:"dialogDec"},[t._v(" Email ")]),i("el-input",{attrs:{size:"medium",placeholder:"Input your email"},model:{value:t.email,callback:function(e){t.email=e},expression:"email"}}),i("div",{staticClass:"dialogDec"},[t._v(" - or - ")]),i("div",{staticClass:"dialogDec"},[t._v(" Paste a URL from a Gist ")]),i("div",[i("el-input",{attrs:{size:"medium",placeholder:"https://gist.github.com/<your cla gist id>"},model:{value:t.gistUrl,callback:function(e){t.gistUrl=e},expression:"gistUrl"}})],1),i("div",{staticClass:"dialogDec"},[i("el-checkbox",{model:{value:t.shareGistChecked,callback:function(e){t.shareGistChecked=e},expression:"shareGistChecked"}}),t._v(" Share the Gist "),i("span",{staticClass:"qusLink",on:{click:function(e){t.shareDialogVisible=!0}}},[t._v("(want to share?)")])],1),i("div",{staticClass:"dialogDec"},[t._v(" Minimum File Number Changes ")]),i("div",[i("el-input",{attrs:{type:"number",size:"medium",placeholder:"number"},model:{value:t.fileNumber,callback:function(e){t.fileNumber=e},expression:"fileNumber"}})],1),i("div",{staticClass:"dialogDec"},[t._v(" - or - ")]),i("div",{staticClass:"dialogDec"},[t._v(" Minimum Line Number Changes ")]),i("div",[i("el-input",{attrs:{type:"number",size:"medium",placeholder:"number"},model:{value:t.lineNumber,callback:function(e){t.lineNumber=e},expression:"lineNumber"}})],1),i("div",{staticClass:"dialogDec"},[t._v("Specify usernames to be whitelisted "),i("span",{staticClass:"qusLink"},[t._v("(how does this work?)")])]),i("span",[t._v("(you can also use wildcard *)")]),i("div",{staticClass:"dialogDec"},[i("el-input",{attrs:{size:"medium",placeholder:"user1,user2,*[bot]"},model:{value:t.gistUrl,callback:function(e){t.gistUrl=e},expression:"gistUrl"}})],1),i("div",{staticClass:"dialogDec"},[i("span",[t._v("Request the user's consent to the use of personal data in accordance with your privacy policy. Please, provide a link to your Privacy Policy here")])]),i("div",{staticClass:"dialogDec"},[i("el-input",{attrs:{size:"medium",placeholder:"https://..."},model:{value:t.gistUrl,callback:function(e){t.gistUrl=e},expression:"gistUrl"}})],1)],1),i("div",{staticClass:"right",staticStyle:{margin:"1rem 0"}},[i("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[i("el-button",{on:{click:function(e){t.editDialogVisible=!1}}},[t._v("Cancel")]),i("el-button",{attrs:{type:"primary"},on:{click:function(e){t.editDialogVisible=!1}}},[t._v("Save")])],1)])])])],1)},s=[],l=(i("99af"),{name:"linkedRepo",data:function(){return{editDialogVisible:!1,unLinkDialogVisible:!1,tableTotal:0,currentPage:1,tableData:[{repository:"ooo",cla:"test",sharedGist:"Yes",contributors:"0"},{repository:"ooo",cla:"test",sharedGist:"No",contributors:"0"}]}},methods:{editHandleClick:function(t){console.log(t),this.editDialogVisible=!0},checkCla:function(){console.log("checkCla"),this.$router.push("/checkCla")},newWindow:function(){window.open("https://github.com/ouchengle")},unLinkRepository:function(){var t=this;this.unLinkDialogVisible=!0;var e={repositoryValue:this.repositoryValue,claValue:this.claValue};this.$axios({url:url.unLinkRepository,methods:"post",data:e,headers:{"Access-Token":this.access_token,"Refresh-Token":this.refresh_token,User:"".concat(this.platform,"/").concat(this.user.userName)}}).then((function(e){console.log(e),200===e.data.code&&(t.repositoryOptions=e.data.data,t.$message.success("解绑成功"),t.unLinkDialogVisible=!1)})).catch((function(t){console.log(t)}))},changePage:function(t){console.log(t)}}}),o=l,n=(i("bd29"),i("2877")),r=Object(n["a"])(o,a,s,!1,null,"0cf5da6c",null);e["default"]=r.exports},8418:function(t,e,i){"use strict";var a=i("c04e"),s=i("9bf2"),l=i("5c6c");t.exports=function(t,e,i){var o=a(e);o in t?s.f(t,o,l(0,i)):t[o]=i}},"99af":function(t,e,i){"use strict";var a=i("23e7"),s=i("d039"),l=i("e8b5"),o=i("861d"),n=i("7b0b"),r=i("50c4"),c=i("8418"),u=i("65f0"),d=i("1dde"),p=i("b622"),g=i("2d00"),h=p("isConcatSpreadable"),m=9007199254740991,v="Maximum allowed index exceeded",b=g>=51||!s((function(){var t=[];return t[h]=!1,t.concat()[0]!==t})),f=d("concat"),k=function(t){if(!o(t))return!1;var e=t[h];return void 0!==e?!!e:l(t)},y=!b||!f;a({target:"Array",proto:!0,forced:y},{concat:function(t){var e,i,a,s,l,o=n(this),d=u(o,0),p=0;for(e=-1,a=arguments.length;e<a;e++)if(l=-1===e?o:arguments[e],k(l)){if(s=r(l.length),p+s>m)throw TypeError(v);for(i=0;i<s;i++,p++)i in l&&c(d,p,l[i])}else{if(p>=m)throw TypeError(v);c(d,p++,l)}return d.length=p,d}})},bd29:function(t,e,i){"use strict";var a=i("e825"),s=i.n(a);s.a},e825:function(t,e,i){}}]);
//# sourceMappingURL=chunk-29403dc6.149e1d9d.js.map