(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-4c1a1314"],{1276:function(e,t,i){"use strict";var r=i("d784"),n=i("44e7"),o=i("825a"),a=i("1d80"),s=i("4840"),c=i("8aa5"),l=i("50c4"),u=i("14c3"),d=i("9263"),f=i("d039"),g=[].push,p=Math.min,m=4294967295,h=!f((function(){return!RegExp(m,"y")}));r("split",2,(function(e,t,i){var r;return r="c"=="abbc".split(/(b)*/)[1]||4!="test".split(/(?:)/,-1).length||2!="ab".split(/(?:ab)*/).length||4!=".".split(/(.?)(.?)/).length||".".split(/()()/).length>1||"".split(/.?/).length?function(e,i){var r=String(a(this)),o=void 0===i?m:i>>>0;if(0===o)return[];if(void 0===e)return[r];if(!n(e))return t.call(r,e,o);var s,c,l,u=[],f=(e.ignoreCase?"i":"")+(e.multiline?"m":"")+(e.unicode?"u":"")+(e.sticky?"y":""),p=0,h=new RegExp(e.source,f+"g");while(s=d.call(h,r)){if(c=h.lastIndex,c>p&&(u.push(r.slice(p,s.index)),s.length>1&&s.index<r.length&&g.apply(u,s.slice(1)),l=s[0].length,p=c,u.length>=o))break;h.lastIndex===s.index&&h.lastIndex++}return p===r.length?!l&&h.test("")||u.push(""):u.push(r.slice(p)),u.length>o?u.slice(0,o):u}:"0".split(void 0,0).length?function(e,i){return void 0===e&&0===i?[]:t.call(this,e,i)}:t,[function(t,i){var n=a(this),o=void 0==t?void 0:t[e];return void 0!==o?o.call(t,n,i):r.call(String(n),t,i)},function(e,n){var a=i(r,e,this,n,r!==t);if(a.done)return a.value;var d=o(e),f=String(this),g=s(d,RegExp),v=d.unicode,b=(d.ignoreCase?"i":"")+(d.multiline?"m":"")+(d.unicode?"u":"")+(h?"y":"g"),y=new g(h?d:"^(?:"+d.source+")",b),_=void 0===n?m:n>>>0;if(0===_)return[];if(0===f.length)return null===u(y,f)?[f]:[];var k=0,F=0,$=[];while(F<f.length){y.lastIndex=h?F:0;var x,C=u(y,h?f:f.slice(F));if(null===C||(x=p(l(y.lastIndex+(h?0:F)),f.length))===k)F=c(f,F,v);else{if($.push(f.slice(k,F)),$.length===_)return $;for(var O=1;O<=C.length-1;O++)if($.push(C[O]),$.length===_)return $;F=k=x}}return $.push(f.slice(k)),$}]}),!h)},"25f0":function(e,t,i){"use strict";var r=i("6eeb"),n=i("825a"),o=i("d039"),a=i("ad6d"),s="toString",c=RegExp.prototype,l=c[s],u=o((function(){return"/a/b"!=l.call({source:"a",flags:"b"})})),d=l.name!=s;(u||d)&&r(RegExp.prototype,s,(function(){var e=n(this),t=String(e.source),i=e.flags,r=String(void 0===i&&e instanceof RegExp&&!("flags"in c)?a.call(e):i);return"/"+t+"/"+r}),{unsafe:!0})},"3ca3":function(e,t,i){"use strict";var r=i("6547").charAt,n=i("69f3"),o=i("7dd0"),a="String Iterator",s=n.set,c=n.getterFor(a);o(String,"String",(function(e){s(this,{type:a,string:String(e),index:0})}),(function(){var e,t=c(this),i=t.string,n=t.index;return n>=i.length?{value:void 0,done:!0}:(e=r(i,n),t.index+=e.length,{value:e,done:!1})}))},"44e7":function(e,t,i){var r=i("861d"),n=i("c6b6"),o=i("b622"),a=o("match");e.exports=function(e){var t;return r(e)&&(void 0!==(t=e[a])?!!t:"RegExp"==n(e))}},"498a":function(e,t,i){"use strict";var r=i("23e7"),n=i("58a8").trim,o=i("c8d2");r({target:"String",proto:!0,forced:o("trim")},{trim:function(){return n(this)}})},"4d63":function(e,t,i){var r=i("83ab"),n=i("da84"),o=i("94ca"),a=i("7156"),s=i("9bf2").f,c=i("241c").f,l=i("44e7"),u=i("ad6d"),d=i("9f7f"),f=i("6eeb"),g=i("d039"),p=i("69f3").set,m=i("2626"),h=i("b622"),v=h("match"),b=n.RegExp,y=b.prototype,_=/a/g,k=/a/g,F=new b(_)!==_,$=d.UNSUPPORTED_Y,x=r&&o("RegExp",!F||$||g((function(){return k[v]=!1,b(_)!=_||b(k)==k||"/a/i"!=b(_,"i")})));if(x){var C=function(e,t){var i,r=this instanceof C,n=l(e),o=void 0===t;if(!r&&n&&e.constructor===C&&o)return e;F?n&&!o&&(e=e.source):e instanceof C&&(o&&(t=u.call(e)),e=e.source),$&&(i=!!t&&t.indexOf("y")>-1,i&&(t=t.replace(/y/g,"")));var s=a(F?new b(e,t):b(e,t),r?this:y,C);return $&&i&&p(s,{sticky:i}),s},O=function(e){e in C||s(C,e,{configurable:!0,get:function(){return b[e]},set:function(t){b[e]=t}})},I=c(b),w=0;while(I.length>w)O(I[w++]);y.constructor=C,C.prototype=y,f(n,"RegExp",C)}m("RegExp")},"4df4":function(e,t,i){"use strict";var r=i("0366"),n=i("7b0b"),o=i("9bdd"),a=i("e95a"),s=i("50c4"),c=i("8418"),l=i("35a1");e.exports=function(e){var t,i,u,d,f,g,p=n(e),m="function"==typeof this?this:Array,h=arguments.length,v=h>1?arguments[1]:void 0,b=void 0!==v,y=l(p),_=0;if(b&&(v=r(v,h>2?arguments[2]:void 0,2)),void 0==y||m==Array&&a(y))for(t=s(p.length),i=new m(t);t>_;_++)g=b?v(p[_],_):p[_],c(i,_,g);else for(d=y.call(p),f=d.next,i=new m;!(u=f.call(d)).done;_++)g=b?o(d,v,[u.value,_],!0):u.value,c(i,_,g);return i.length=_,i}},5899:function(e,t){e.exports="\t\n\v\f\r                　\u2028\u2029\ufeff"},"58a8":function(e,t,i){var r=i("1d80"),n=i("5899"),o="["+n+"]",a=RegExp("^"+o+o+"*"),s=RegExp(o+o+"*$"),c=function(e){return function(t){var i=String(r(t));return 1&e&&(i=i.replace(a,"")),2&e&&(i=i.replace(s,"")),i}};e.exports={start:c(1),end:c(2),trim:c(3)}},7156:function(e,t,i){var r=i("861d"),n=i("d2bb");e.exports=function(e,t,i){var o,a;return n&&"function"==typeof(o=t.constructor)&&o!==i&&r(a=o.prototype)&&a!==i.prototype&&n(e,a),e}},a3cc:function(e,t,i){"use strict";var r=i("f428"),n=i.n(r);n.a},a630:function(e,t,i){var r=i("23e7"),n=i("4df4"),o=i("1c7e"),a=!o((function(e){Array.from(e)}));r({target:"Array",stat:!0,forced:a},{from:n})},a9e3:function(e,t,i){"use strict";var r=i("83ab"),n=i("da84"),o=i("94ca"),a=i("6eeb"),s=i("5135"),c=i("c6b6"),l=i("7156"),u=i("c04e"),d=i("d039"),f=i("7c73"),g=i("241c").f,p=i("06cf").f,m=i("9bf2").f,h=i("58a8").trim,v="Number",b=n[v],y=b.prototype,_=c(f(y))==v,k=function(e){var t,i,r,n,o,a,s,c,l=u(e,!1);if("string"==typeof l&&l.length>2)if(l=h(l),t=l.charCodeAt(0),43===t||45===t){if(i=l.charCodeAt(2),88===i||120===i)return NaN}else if(48===t){switch(l.charCodeAt(1)){case 66:case 98:r=2,n=49;break;case 79:case 111:r=8,n=55;break;default:return+l}for(o=l.slice(2),a=o.length,s=0;s<a;s++)if(c=o.charCodeAt(s),c<48||c>n)return NaN;return parseInt(o,r)}return+l};if(o(v,!b(" 0o1")||!b("0b1")||b("+0x1"))){for(var F,$=function(e){var t=arguments.length<1?0:e,i=this;return i instanceof $&&(_?d((function(){y.valueOf.call(i)})):c(i)!=v)?l(new b(k(t)),i,$):k(t)},x=r?g(b):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","),C=0;x.length>C;C++)s(b,F=x[C])&&!s($,F)&&m($,F,p(b,F));$.prototype=y,y.constructor=$,a(n,v,$)}},abc5:function(e,t,i){"use strict";var r=i("d650"),n=i.n(r);n.a},c8d2:function(e,t,i){var r=i("d039"),n=i("5899"),o="​᠎";e.exports=function(e){return r((function(){return!!n[e]()||o[e]()!=o||n[e].name!==e}))}},d28b:function(e,t,i){var r=i("746f");r("iterator")},d650:function(e,t,i){},e01a:function(e,t,i){"use strict";var r=i("23e7"),n=i("83ab"),o=i("da84"),a=i("5135"),s=i("861d"),c=i("9bf2").f,l=i("e893"),u=o.Symbol;if(n&&"function"==typeof u&&(!("description"in u.prototype)||void 0!==u().description)){var d={},f=function(){var e=arguments.length<1||void 0===arguments[0]?void 0:String(arguments[0]),t=this instanceof f?new u(e):void 0===e?u():u(e);return""===e&&(d[t]=!0),t};l(f,u);var g=f.prototype=u.prototype;g.constructor=f;var p=g.toString,m="Symbol(test)"==String(u("test")),h=/^Symbol\((.*)\)[^)]+$/;c(g,"description",{configurable:!0,get:function(){var e=s(this)?this.valueOf():this,t=p.call(e);if(a(d,e))return"";var i=m?t.slice(7,-1):t.replace(h,"$1");return""===i?void 0:i}}),r({global:!0,forced:!0},{Symbol:f})}},ea3a:function(e,t,i){"use strict";i.r(t);var r=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("el-row",{style:e.checkCLAClass,attrs:{id:"checkCLA"}},[i("Header"),i("el-row",{attrs:{id:"section"}},[e.isSendCode?e._e():i("el-row",{staticClass:"content"},[i("el-col",{attrs:{offset:4,span:16}},[i("p",{staticClass:"contentTitle"},[e._v('"'),i("span",[e._v(e._s(e.org))]),e.repo?i("span",[e._v("/"+e._s(e.repo))]):e._e(),i("span",[e._v('" '+e._s(e.apply_to)+" ")]),e._v("Contributor License Agreement")]),i("el-row",{staticClass:"marginTop3rem",attrs:{id:"claBox"}}),i("el-row",{staticClass:"marginTop3rem form"},[i("el-col",[i("el-form",{ref:"ruleForm",staticClass:"demo-ruleForm",attrs:{model:e.ruleForm,rules:e.rules,"label-position":"left","label-width":"25%"}},[e._l(e.fields,(function(t,r){return i("el-form-item",{attrs:{label:t.title,required:t.required,prop:t.id}},["email"===t.type?i("el-input",{attrs:{readonly:"corporation"!==e.loginType,size:"small"},on:{blur:function(i){return e.setMyForm(t.type,e.ruleForm[t.id])}},model:{value:e.ruleForm[t.id],callback:function(i){e.$set(e.ruleForm,t.id,i)},expression:"ruleForm[item.id]"}}):"date"===t.type?i("el-input",{attrs:{readonly:"",size:"small"},on:{blur:function(i){return e.setMyForm(t.type,e.ruleForm[t.id])}},model:{value:e.ruleForm[t.id],callback:function(i){e.$set(e.ruleForm,t.id,i)},expression:"ruleForm[item.id]"}}):i("el-input",{attrs:{size:"small"},on:{blur:function(i){return e.setMyForm(t.type,e.ruleForm[t.id])}},model:{value:e.ruleForm[t.id],callback:function(i){e.$set(e.ruleForm,t.id,i)},expression:"ruleForm[item.id]"}})],1)})),"corporation"===e.loginType&&e.rules.code?i("el-form-item",{attrs:{label:"Verify Code",required:e.rules.code[0].required,prop:"code"}},[i("el-input",{attrs:{size:"small"},model:{value:e.ruleForm.code,callback:function(t){e.$set(e.ruleForm,"code",t)},expression:"ruleForm.code"}},[i("el-button",{attrs:{slot:"append",disabled:"send code"!==e.sendBtText},on:{click:function(t){return e.sendCode()}},slot:"append"},[e._v(e._s(e.sendBtText)+" ")])],1)],1):e._e(),i("div",{staticClass:"borderClass fontSize12"},[i("span",{staticStyle:{color:"#F56C6C"}},[e._v("*")]),e._v(e._s(e.desc.metadataDesc)+" ")]),i("div",{staticClass:"marginTop1rem fontSize12"},[i("el-checkbox",{model:{value:e.isRead,callback:function(t){e.isRead=t},expression:"isRead"}},[i("span",[e._v("I have read the "),i("span",{staticClass:"privacy",on:{click:e.viewPrivacy}},[e._v("Privacy Policy")]),e._v(' and hereby consent to the processing of my data by "'+e._s(e.repo)+'"')])])],1),i("el-form-item",{staticClass:"marginTop1rem signBtBox",attrs:{"label-width":"0"}},[i("button",{staticClass:"button",attrs:{type:"button"},on:{click:function(t){return e.submitForm("ruleForm")}}},[e._v(" "+e._s(e.desc.sign)+" ")])])],2)],1)],1)],1)],1)],1),i("Footer"),i("el-dialog",{attrs:{title:e.tipsTitle,top:"5vh","close-on-press-escape":!1,"show-close":!1,"close-on-click-modal":!1,visible:e.tipsDialogVisible,width:"30%"},on:{"update:visible":function(t){e.tipsDialogVisible=t}}},[i("el-row",[i("el-col",{attrs:{align:"center"}},[i("p",[e._v(e._s(e.tipsMessage))]),i("button",{staticClass:"dialogBt",on:{click:function(t){return e.clickOk()}}},[e._v("OK")])])],1)],1),i("ReLoginDialog",{attrs:{dialogVisible:e.reLoginDialogVisible,message:e.reLoginMsg,title:e.reLoginDialogTitle}})],1)},n=[],o=(i("99af"),i("4160"),i("b0c0"),i("a9e3"),i("b64b"),i("d3b7"),i("4d63"),i("ac1f"),i("25f0"),i("1276"),i("498a"),i("159b"),i("ade3"));i("a4d3"),i("e01a"),i("d28b"),i("e260"),i("3ca3"),i("ddb0"),i("a630"),i("fb6a");function a(e,t){(null==t||t>e.length)&&(t=e.length);for(var i=0,r=new Array(t);i<t;i++)r[i]=e[i];return r}function s(e,t){if(e){if("string"===typeof e)return a(e,t);var i=Object.prototype.toString.call(e).slice(8,-1);return"Object"===i&&e.constructor&&(i=e.constructor.name),"Map"===i||"Set"===i?Array.from(e):"Arguments"===i||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i)?a(e,t):void 0}}function c(e,t){var i;if("undefined"===typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(i=s(e))||t&&e&&"number"===typeof e.length){i&&(e=i);var r=0,n=function(){};return{s:n,n:function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}},e:function(e){throw e},f:n}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var o,a=!0,c=!1;return{s:function(){i=e[Symbol.iterator]()},n:function(){var e=i.next();return a=e.done,e},e:function(e){c=!0,o=e},f:function(){try{a||null==i["return"]||i["return"]()}finally{if(c)throw o}}}}i("96cf");var l=i("1da1"),u=i("5530"),d=i("6543"),f=i("84ef"),g=i("615a"),p=i("221d"),m=i("2f62"),h=i("bc3a"),v=i.n(h),b=(i("a18c"),v.a.create({timeout:1e4,baseURL:"/api"}));b.interceptors.request.use((function(e){var t=sessionStorage.getItem("token");return t&&(e.headers["Token"]="".concat(t)),e}),(function(e){return Promise.reject(e)})),b.interceptors.response.use((function(e){return e.headers.token&&sessionStorage.setItem("token",e.headers.token),e}),(function(e){var t=e.response,i=JSON.parse(sessionStorage.getItem("repoInfo"));i.repo_id?"/sign/".concat(i.platform,"/").concat(i.org_id,"/").concat(i.repo_id):"/sign/".concat(i.platform,"/").concat(i.org_id);switch(t.status){case 401:case 403:sessionStorage.clear()}return Promise.reject(e.response)}));var y=b,_=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("el-row",[i("el-dialog",{attrs:{title:e.title,visible:e.dialogVisible,"close-on-press-escape":!1,"show-close":!1,"close-on-click-modal":!1,width:"30%"},on:{"update:visible":function(t){e.dialogVisible=t}}},[i("el-row",[i("el-col",{attrs:{align:"center"}},[i("p",[e._v(e._s(e.message))]),i("button",{staticClass:"dialogBt",on:{click:function(t){return e.clickGoHome()}}},[e._v("Go Home")])])],1)],1)],1)},k=[],F=(i("5319"),{name:"ReLoginDialog",props:["dialogVisible","message","title"],methods:{clickGoHome:function(){var e=new Date,t="cla.osinfra.cn";e.setTime(e.getTime()-1e4),document.cookie="_mark=; expire=".concat(e.toUTCString(),"; Domain=").concat(t,"; path=/");var i=this.$store.state.repoInfo,r=i.repo_id?"/sign/".concat(i.platform,"/").concat(i.org_id,"/").concat(i.repo_id):"/sign/".concat(i.platform,"/").concat(i.org_id);this.$router.replace(r)}}}),$=F,x=(i("a3cc"),i("2877")),C=Object(x["a"])($,_,k,!1,null,"71b70fb2",null),O=C.exports,I={name:"CheckCLA",computed:{loginType:function(){return this.$store.state.loginType},platform_token:function(){return this.$store.state.platform_token},access_token:function(){return this.$store.state.access_token},refresh_token:function(){return this.$store.state.refresh_token},apply_to:function(){return"individual"===this.$store.state.loginType||"employee"===this.$store.state.loginType?"individual":"corporation"===this.$store.state.loginType?"corporation":void 0}},components:{Header:d["a"],Footer:f["a"],ReLoginDialog:O},data:function(){return{reLoginDialogTitle:"",reLoginDialogVisible:!1,reLoginMsg:"",tipsTitle:"",tipsMessage:"Signed successfully.We have sent a notification email to your email address. Please check it",tipsDialogVisible:!1,signPageData:"",cla_org_id:"",sendBtText:"send code",claOrgIdArr:[],fields:[],claIdArr:[],desc:"",enDesc:{personalContributor:"Individual Contributor",comContributor:"Legal Entity Contributor",metadataDesc:" require field. ",sign:"SIGN",reset:"RESET"},cnDesc:{personalContributor:"个人贡献者",comContributor:"企业贡献者",metadataDesc:"为必填项",sign:"签署",reset:"重置"},isVerify:!1,isSendCode:!1,verifyCode:"",platform:this.$store.state.platform,dialogVisible:!1,repositoryOptions:[],role:"0",org:this.$store.state.repoInfo.org_id,repo:this.$store.state.repoInfo.repo_id,ruleForm:{},myForm:{},rules:{},isRead:!1,value:0,languageOptions:[{value:0,label:"english"},{value:1,label:"chinese"}],metadataArr:[],checkCLAClass:{height:""}}},methods:Object(u["a"])(Object(u["a"])({},Object(m["b"])(["setTokenAct","setRepoInfoAct","viewPrivacy"])),{},{clickOk:function(){var e="/sign/".concat(this.$store.state.repoInfo.platform,"/").concat(this.$store.state.repoInfo.org_id,"/").concat(this.$store.state.repoInfo.repo_id);this.$router.push(e),this.tipsDialogVisible=!1},verifyTel:function(e,t,i){return Object(l["a"])(regeneratorRuntime.mark((function e(){var r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:t?(r=/^1[3456789]\d{9}$/,r.test(t)?i():i(new Error("telephone format error")),i()):i();case 1:case"end":return e.stop()}}),e)})))()},verifyAddr:function(e,t,i){return Object(l["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:t||i(new Error("please input address")),i();case 2:case"end":return e.stop()}}),e)})))()},verifyFormEmail:function(e,t,i){return Object(l["a"])(regeneratorRuntime.mark((function e(){var r,n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:r=t,n=/^([a-zA-Z]|[0-9])(\w|\-)+@[a-zA-Z0-9]+\.([a-zA-Z]{2,4})$/,n.test(r)?i():i(new Error("Email format error"));case 3:case"end":return e.stop()}}),e)})))()},setMyForm:function(e,t){this.myForm[e]=t},sendCode:function(){var e=this,t=new RegExp("^[a-z0-9]+([._\\-]*[a-z0-9])*@([a-z0-9]+[-a-z0-9]*[a-z0-9]+.){1,63}[a-z0-9]+$"),i=this.myForm.adminEmail;for(var r in this.myForm)if("email"===r){i=this.myForm.email;break}i.trim()&&t.test(i)&&"gmail.com"===i.split("@")[1]?this.$axios({url:"/api"+p["sendVerifyCode"],method:"post",data:{cla_org_id:this.cla_org_id,email:this.myForm.adminEmail}}).then((function(t){e.$message.closeAll(),e.$message.success("Please fill in the verification code in the email to continue signing");var i=60,r=setInterval((function(){0!==i?(i--,e.sendBtText=i+"s"):(e.sendBtText="send code",clearInterval(r))}),1e3)})).catch((function(t){e.$message.closeAll(),e.$message.error(t.response.data)})):(this.$message.closeAll(),this.$message.error("Please fill in Google email in the e-mail column"))},getNowDate:function(){var e,t,i,r=new Date;e=r.getFullYear(),t=r.getMonth()<9?"0".concat(r.getMonth()+1):r.getMonth()+1,i=r.getDate()<10?"0".concat(r.getDate()):r.getDate();var n,a=c(this.fields);try{for(a.s();!(n=a.n()).done;){var s=n.value;if("date"===s.type){this.myForm.date=e+"-"+t+"-"+i,Object.assign(this.ruleForm,Object(o["a"])({},s.id,e+"-"+t+"-"+i));break}}}catch(l){a.e(l)}finally{a.f()}"corporation"!==this.loginType&&(this.getEmail(this.platform_token,this.refresh_token),this.getUserInfo(this.platform_token))},getEmail:function(e,t){var i=this;this.$axios({url:p["getEmail"],params:{access_token:e}}).then((function(e){var t,r=c(e.data);try{for(r.s();!(t=r.n()).done;){var n=t.value;if(n.scope&&"primary"===n.scope[0]){i.myForm.email=n.email;break}}}catch(u){r.e(u)}finally{r.f()}var a,s=c(i.fields);try{for(s.s();!(a=s.n()).done;){var l=a.value;if("email"===l.type){Object.assign(i.ruleForm,Object(o["a"])({},l.id,i.myForm.email));break}}}catch(u){s.e(u)}finally{s.f()}})).catch((function(e){i.$message.closeAll(),i.$message.error(e.response.data)}))},getCookieData:function(){if(""!==document.cookie){var e,t,i,r=document.cookie.split("; "),n="";if(r.forEach((function(r,o){var a=r.split("=");"access_token"===a[0]?e=a[1]:"refresh_token"===a[0]?t=a[1]:i="platform_token"===a[0]?a[1]:"","_mark"===a[0]&&(n=a[1])})),!n){var o={access_token:e,refresh_token:t,platform_token:i},a=new Date,s="cla.osinfra.cn";a.setTime(a.getTime()-1e4),document.cookie="_mark=1; expire=".concat(a.toUTCString(),"; Domain=").concat(s,"; path=/"),this.setTokenAct(o)}}},getSignPage:function(e){var t=this;this.changeDesc("english");var i="";i="individual"===this.$store.state.loginType||"employee"===this.$store.state.loginType?"individual":"corporation",y({url:"".concat(p["getSignPage"],"/").concat(this.$store.state.repoInfo.platform,"/").concat(this.$store.state.repoInfo.org_id,"/").concat(i),params:{repo_id:this.$store.state.repoInfo.repo_id}}).then((function(i){var r=i.data.data;if(t.signPageData=r,Object.keys(r).length)for(var n in t.languageOptions=[],r)"english"===r[n].language&&(t.value=n,t.cla_org_id=n,t.setClaText(n),e("complete")),t.languageOptions.push({value:n,label:r[n].language})})).catch((function(e){t.responseCode(e.status)}))},responseCode:function(e){switch(e){case 401:case 403:this.reLoginMsg="token expired, please login again",this.reLoginDialogTitle=this.$store.state.repoInfo.repo_id?"".concat(this.$store.state.repoInfo.org_id,"/").concat(this.$store.state.repoInfo.repo_id," prompt you"):"".concat(this.$store.state.repoInfo.org_id," prompt you"),this.reLoginDialogVisible=!0}},changeLanguage:function(e){this.changeDesc(this.languageOptions[e].label),this.setClaText(e),this.cla_org_id=e},changeDesc:function(e){"english"===e?this.desc=this.enDesc:"chinese"===e&&(this.desc=this.cnDesc)},getUserInfo:function(e){var t=this,i={access_token:e};this.$axios({url:p["getUserInfo"],params:i}).then((function(e){t.myForm.name=e.data.login;var i,r=c(t.fields);try{for(r.s();!(i=r.n()).done;){var n=i.value;if("name"===n.type){Object.assign(t.ruleForm,Object(o["a"])({},n.id,t.myForm.name));break}}}catch(a){r.e(a)}finally{r.f()}})).catch((function(e){}))},setClaText:function(e){var t=this,i={},r={};document.getElementById("claBox").innerHTML=this.signPageData[e].text;for(var n=0;n<this.signPageData[e].fields.length;n++)for(var a=n+1;a<this.signPageData[e].fields.length;a++)if(Number(this.signPageData[e].fields[n].id)>Number(this.signPageData[e].fields[a].id)){var s=this.signPageData[e].fields[n];this.signPageData[e].fields[n]=this.signPageData[e].fields[a],this.signPageData[e].fields[a]=s}this.fields=this.signPageData[e].fields,this.fields.forEach((function(e){Object.assign(i,Object(o["a"])({},e.id,"")),"name"===e.type?(Object.assign(t.myForm,{name:""}),Object.assign(r,Object(o["a"])({},e.id,[{required:!0,message:"please input name",trigger:["blur","change"]}]))):"corporationName"===e.type?(Object.assign(t.myForm,{corporationName:""}),Object.assign(r,Object(o["a"])({},e.id,[{required:!0,message:"please input corporationName",trigger:["blur","change"]}]))):"adminEmail"===e.type?(Object.assign(t.myForm,{adminEmail:""}),Object.assign(r,Object(o["a"])({},e.id,[{required:!0,message:"please input adminEmail",trigger:["blur","change"]}]))):"date"===e.type?(Object.assign(t.myForm,{date:""}),Object.assign(r,Object(o["a"])({},e.id,[{required:!0,message:"please input date",trigger:["blur","change"]}]))):"email"===e.type?(Object.assign(t.myForm,{email:""}),Object.assign(r,Object(o["a"])({},e.id,[{required:!0,validator:t.verifyFormEmail,trigger:"blur"}]))):"telephone"===e.type?(Object.assign(t.myForm,{telephone:""}),Object.assign(r,Object(o["a"])({},e.id,[{required:!0,validator:t.verifyTel,trigger:"blur"}]))):"address"===e.type&&(Object.assign(t.myForm,{address:""}),Object.assign(r,Object(o["a"])({},e.id,[{required:!0,validator:t.verifyAddr(),trigger:"blur"}])))})),Object.assign(i,{code:""}),Object.assign(this.myForm,{code:""}),Object.assign(r,{code:[{required:!0,message:"Please enter the verification code",trigger:["blur","change"]}]}),this.ruleForm=i,this.rules=r},toHome:function(){this.$router.push("/home")},signCla:function(){var e={},t="",i={};for(var r in this.ruleForm)""!==this.ruleForm[r]&&Object.assign(e,Object(o["a"])({},r,this.ruleForm[r]+""));"individual"===this.$store.state.loginType?(t="".concat(p["individual_signing"],"/").concat(this.cla_org_id),i={name:this.myForm.name,email:this.myForm.email,info:e}):"corporation"===this.$store.state.loginType?(t=p["corporation_signing"],i={cla_org_id:this.cla_org_id,corporation_name:this.myForm.corporationName,admin_name:this.myForm.name,admin_email:this.myForm.adminEmail,enabled:!0,info:e,verifi_code:this.ruleForm.code}):"employee"===this.$store.state.loginType&&(t="".concat(p["employee_signing"],"/").concat(this.cla_org_id),i={name:this.myForm.name,email:this.myForm.email,info:e}),this.sign(t,i)},sign:function(e,t){var i=this;y({url:"/api"+e,method:"post",data:t}).then((function(e){i.tipsTitle=i.$store.state.repoInfo.repo_id?"".concat(i.$store.state.repoInfo.org_id,"/").concat(i.$store.state.repoInfo.repo_id," prompt you"):"".concat(i.$store.state.repoInfo.org_id," prompt you"),"corporation"===i.$store.state.loginType?i.tipsMessage="We have sent a notification email to your email address. Please check it.And please complete the signature according to the prompt in the email":"employee"===i.$store.state.loginType&&(i.tipsMessage="We have sent a notification email to your email address. Please check it,And email the administrator of your company to audit"),i.tipsDialogVisible=!0})).catch((function(e){i.responseCode(e.status)}))},clearForm:function(){if("employee"===this.$store.state.loginType||"individual"===this.$store.state.loginType)for(var e in this.ruleForm)"1"!==e&&"2"!==e&&(this.ruleForm[e]="");else for(var t in this.ruleForm)"3"!==t&&(this.ruleForm[t]="")},submitForm:function(e){var t=this;this.$refs[e].validate((function(e){if(!e)return!1;t.isRead?t.signCla():(t.$message.closeAll(),t.$message.error("Please read the privacy statement"))}))},getRepositoriesOfOrg:function(e,t){var i=this,r={access_token:this.$store.state.access_token,org:e,page:1,per_page:10};this.$axios({url:"https://gitee.com/api/v5/orgs/".concat(e,"/repos"),params:r}).then((function(r){i.repositoryOptions=[],r.data.forEach((function(r,n){i.repositoryOptions.push({value:n,org:e,org_id:t,repoName:r.name,label:"".concat(e,"/").concat(r.name),id:r.id})}))})).catch((function(e){i.$message.closeAll(),i.$message.error(e.response.data)}))},resetForm:function(e){this.$refs[e].resetFields()},setClientHeight:function(){var e=this;this.$nextTick((function(){g["a"]()>document.getElementById("checkCLA").offsetHeight?e.checkCLAClass.height=g["a"]()+"px":e.checkCLAClass.height=document.getElementById("checkCLA").offsetHeight}))}}),created:function(){var e=this;this.getCookieData(),new Promise((function(t){e.getSignPage(t)}),(function(e){})).then((function(t){e.getNowDate()}),(function(e){}))},mounted:function(){this.setClientHeight()}};window.onresize=function(){g["a"]()>document.getElementById("checkCLA").offsetHeight&&(document.getElementById("checkCLA").style.height=g["a"]()+"px")};var w=I,T=(i("abc5"),Object(x["a"])(w,r,n,!1,null,null,null));t["default"]=T.exports},f428:function(e,t,i){},fb6a:function(e,t,i){"use strict";var r=i("23e7"),n=i("861d"),o=i("e8b5"),a=i("23cb"),s=i("50c4"),c=i("fc6a"),l=i("8418"),u=i("b622"),d=i("1dde"),f=i("ae40"),g=d("slice"),p=f("slice",{ACCESSORS:!0,0:0,1:2}),m=u("species"),h=[].slice,v=Math.max;r({target:"Array",proto:!0,forced:!g||!p},{slice:function(e,t){var i,r,u,d=c(this),f=s(d.length),g=a(e,f),p=a(void 0===t?f:t,f);if(o(d)&&(i=d.constructor,"function"!=typeof i||i!==Array&&!o(i.prototype)?n(i)&&(i=i[m],null===i&&(i=void 0)):i=void 0,i===Array||void 0===i))return h.call(d,g,p);for(r=new(void 0===i?Array:i)(v(p-g,0)),u=0;g<p;g++,u++)g in d&&l(r,u,d[g]);return r.length=u,r}})}}]);
//# sourceMappingURL=chunk-4c1a1314.c8ffa85b.js.map