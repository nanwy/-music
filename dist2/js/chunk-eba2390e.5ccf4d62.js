(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-eba2390e"],{1273:function(t,n,a){"use strict";a.r(n);var e=function(){var t=this,n=t.$createElement,a=t._self._c||n;return a("div",[a("find-song-detail",{attrs:{songDetailId:t.songDetailId,imgUrl:t.songDetail.coverImgUrl,title:t.title,name:t.songDetail.name,background:t.background,description:t.songDetail.description,touImg:t.songDetail.creator?t.songDetail.creator.avatarUrl:t.songDetail.album?t.songDetail.album.artist.picUrl:"",nickname:t.songDetail.creator?t.songDetail.creator.nickname:t.songDetail.album?t.songDetail.album.artist.name:""}})],1)},i=[],o=a("aa65"),r=a("2b9f"),s=a("aaf6"),c=a.n(s),l={data:function(){return{songDetailId:0,songDetail:[],title:"",background:"",img:a("cf05")}},activated:function(){var t=this,n=this.$route.params.songDetailId;this.songDetailId=n,console.log(this.songDetailId),n&&(this.title="歌单",Object(r["d"])(this.songDetailId).then((function(n){var a=n.data;if(console.log(n),200===a.code){t.songDetail=a.playlist,console.log(t.songDetail),console.log(t.songDetail.creator.avatarUrl);var e=c()(t.songDetail.coverImgUrl,{ignore:["rgb(255,255,255)","rgb(0,0,0)"]});e.then((function(n){t.background=n[0].color}))}})))},mounted:function(){},components:{FindSongDetail:o["default"]}},u=l,g=(a("ca21"),a("2877")),d=Object(g["a"])(u,e,i,!1,null,"4b7042ed",null);n["default"]=d.exports},"21bf":function(t,n,a){"use strict";var e=a("756e"),i=a.n(e);i.a},5912:function(t,n,a){},"756e":function(t,n,a){},"86ab":function(t,n,a){"use strict";var e=a("5912"),i=a.n(e);i.a},aa65:function(t,n,a){"use strict";a.r(n);var e=function(){var t=this,n=t.$createElement,a=t._self._c||n;return a("div",[a("div",{staticClass:"content",style:{background:t.background}},[a("div",{staticClass:"item"},[a("div",{staticClass:"title"},[a("gbnav",[a("div",{staticClass:"left"},[a("span",[t._v(t._s(t.title))]),a("span",{staticClass:"description"},[t._v("编辑推荐:"+t._s(t.description))])]),a("div",{staticClass:"right"},[a("span",[a("i",{staticClass:"iconserch iconfont"})]),a("span",[a("i",{staticClass:"iconcaidan1 iconfont"})])])])],1),a("div",{staticClass:"title-content"},[a("img",{directives:[{name:"lazy",rawName:"v-lazy",value:t.imgUrl,expression:"imgUrl"}],attrs:{alt:""}}),a("div",{staticClass:"name"},[t._v(t._s(t.name)+" "),t.touImg?a("div",{staticClass:"tou"},[a("img",{directives:[{name:"lazy",rawName:"v-lazy",value:t.touImg,expression:"touImg"}],attrs:{alt:""}}),t.nickname?a("span",[t._v(t._s(t.nickname)+">")]):t._e(),a("div",{staticClass:"description description1"},[t._v(" "+t._s(t.description)+" ")])]):t._e()])])])])])},i=[],o=(a("a9e3"),function(){var t=this,n=t.$createElement,a=t._self._c||n;return a("div",{staticClass:"nav"},[a("i",{staticClass:"iconback iconfont",on:{click:t.backClick}}),t._t("default")],2)}),r=[],s={methods:{backClick:function(){this.$router.back()}}},c=s,l=(a("86ab"),a("2877")),u=Object(l["a"])(c,o,r,!1,null,null,null),g=u.exports,d={props:{songDetailId:{type:Number},imgUrl:{type:String},title:{type:String},name:{type:String},background:{type:String},description:{type:String},touImg:{type:String},nickname:{type:String,default:function(){return"网易云"}}},components:{Gbnav:g}},f=d,v=(a("21bf"),Object(l["a"])(f,e,i,!1,null,"54152cfc",null));n["default"]=v.exports},aaf6:function(t,n,a){!function(n,a){t.exports=a()}(0,(function(){var t=function(t,n){void 0===n&&(n=1);var a=new Image;return t.startsWith("data")||(a.crossOrigin="Anonymous"),new Promise((function(e,i){a.onload=function(){var t=a.width*n,i=a.height*n,o=function(t,n){var a=document.createElement("canvas");return a.setAttribute("width",t),a.setAttribute("height",n),a.getContext("2d")}(t,i);o.drawImage(a,0,0,t,i);var r=o.getImageData(0,0,t,i);e(r.data)};var o=function(){return i(new Error("An error occurred attempting to load image"))};a.onerror=o,a.onabort=o,a.src=t}))},n={ignore:[],scale:1};return function(a,e){void 0===e&&(e=n);try{var i=(e=Object.assign({},n,e)).ignore,o=e.scale;return(o>1||o<=0)&&console.warn("You set scale to "+o+", which isn't between 0-1. This is either pointless (> 1) or a no-op (≤ 0)"),Promise.resolve(t(a,o)).then((function(t){return function(t,n){for(var a={},e=0;e<t.length;e+=4){var i=t[e+3];if(0!==i){var o=Array.from(t.subarray(e,e+3));if(-1===o.indexOf(void 0)){var r=i&&255!==i?"rgba("+o.concat([i]).join(",")+")":"rgb("+o.join(",")+")";-1===n.indexOf(r)&&(a[r]?a[r].count++:a[r]={color:r,count:1})}}}return Object.values(a).sort((function(t,n){return n.count-t.count}))}(t,i)}))}catch(t){return Promise.reject(t)}}}))},c06c:function(t,n,a){},ca21:function(t,n,a){"use strict";var e=a("c06c"),i=a.n(e);i.a},cf05:function(t,n,a){t.exports=a.p+"img/logo.82b9c7a5.png"}}]);
//# sourceMappingURL=chunk-eba2390e.5ccf4d62.js.map