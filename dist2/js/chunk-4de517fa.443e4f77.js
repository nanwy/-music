(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-4de517fa"],{1273:function(t,a,e){"use strict";e.r(a);var n=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("transition",{attrs:{name:"slide"}},[e("div",{attrs:{id:"song"}},[e("page-loading",{directives:[{name:"show",rawName:"v-show",value:t.loading,expression:"loading"}],staticStyle:{height:"5rem"}}),e("div",{directives:[{name:"show",rawName:"v-show",value:!t.loading,expression:"!loading"}],staticClass:"title",style:{background:t.background}},[e("gbnav",[e("div",{staticClass:"left"},[e("span",{staticClass:"left-title"},[t._v(t._s(t.title))]),e("span",{staticClass:"description"},[t._v("编辑推荐:"+t._s(t._f("description1")(t.songDetail.description)))])]),e("div",{staticClass:"right"},[e("span",[e("i",{staticClass:"iconserch iconfont"})]),e("span",[e("i",{staticClass:"iconcaidan1 iconfont"})])])])],1),e("song-tab-bar",{directives:[{name:"show",rawName:"v-show",value:t.isTabFixed,expression:"isTabFixed"}],staticClass:"song-tab-bar1",attrs:{many:t.songDetail.trackCount?t.songDetail.trackCount:t.songDetail.album?t.songDetail.album.size:0,subscribedCount:t.songDetail.subscribedCount}}),e("scroll",{ref:"scroll",staticClass:"content",attrs:{"probe-type":3},on:{scroll:t.contentscroll}},[e("find-song-detail",{directives:[{name:"show",rawName:"v-show",value:!t.loading,expression:"!loading"}],attrs:{songDetailId:t.songDetailId,imgUrl:t.songDetail.coverImgUrl,title:t.title,name:t.songDetail.name,background:t.background,description:t.songDetail.description,touImg:t.songDetail.creator?t.songDetail.creator.avatarUrl:t.songDetail.album?t.songDetail.album.artist.picUrl:"",nickname:t.songDetail.creator?t.songDetail.creator.nickname:t.songDetail.album?t.songDetail.album.artist.name:"",comment:t.songDetail.commentCount,share:t.songDetail.shareCount}}),e("song-tab-bar",{directives:[{name:"show",rawName:"v-show",value:!t.loading,expression:"!loading"}],ref:"findsongdetail",class:{songtabbar:t.isTabFixed},attrs:{many:t.songDetail.trackCount?t.songDetail.trackCount:t.songDetail.album?t.songDetail.album.size:0,subscribedCount:t.songDetail.subscribedCount}}),e("div",{staticClass:"music-list"},t._l(t.songDetail.tracks,(function(a,n){return e("music-list",{directives:[{name:"show",rawName:"v-show",value:!t.loading,expression:"!loading"}],key:n,attrs:{maxbr:t.isSq[n],num:n+1,songName:a.name,arName:a.ar,alName:a.al.name,alia:a.alia[0],songId:a.id}})})),1)],1)],1)])},i=[],s=(e("a4d3"),e("e01a"),e("d81d"),e("b0c0"),e("d28b"),e("e260"),e("d3b7"),e("3ca3"),e("ddb0"),e("06c5"));function o(t){if("undefined"===typeof Symbol||null==t[Symbol.iterator]){if(Array.isArray(t)||(t=Object(s["a"])(t))){var a=0,e=function(){};return{s:e,n:function(){return a>=t.length?{done:!0}:{done:!1,value:t[a++]}},e:function(t){throw t},f:e}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var n,i,o=!0,r=!1;return{s:function(){n=t[Symbol.iterator]()},n:function(){var t=n.next();return o=t.done,t},e:function(t){r=!0,i=t},f:function(){try{o||null==n["return"]||n["return"]()}finally{if(r)throw i}}}}var r,l=e("aa65"),c=e("1bac"),u=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"music-content"},[e("div",{staticClass:"list-item"},[e("span",{staticClass:"num"},[t._v(t._s(t.num))]),e("div",{staticClass:"song-detail"},[e("div",{staticClass:"song-name"},[t._v(t._s(t.songName)+" "),e("span",{directives:[{name:"show",rawName:"v-show",value:t.alia,expression:"alia"}]},[t._v("("+t._s(t.alia)+")")])]),t._l(t.arName,(function(a){return e("div",{staticClass:"creator"},[t.maxbr?e("span",{staticClass:"maxbr"},[t._v("SQ")]):t._e(),t._v(t._s(a.name)+" - "+t._s(t.alName))])}))],2),t._m(0)])])},d=[function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"more"},[e("i",{staticClass:"iconcaidan1 iconfont"})])}],g=(e("a9e3"),{props:{num:{type:Number},songName:{type:String},arName:{type:Array},alName:{type:String},maxbr:{type:Boolean},songID:{type:Number},alia:{type:String}},created:function(){},methods:{}}),m=g,v=(e("46c3"),e("2877")),f=Object(v["a"])(m,u,d,!1,null,"2f4e76b4",null),b=f.exports,p=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"play-list"},[e("div",{staticClass:"play-title"},[e("i",[t._v("播放")]),e("span",[t._v("播放全部")]),t.many?e("span",{staticClass:"total"},[t._v("(共"+t._s(t.many)+"首)")]):t._e(),t.subscribedCount?e("span",{staticClass:"star"},[t._v("+收藏("+t._s(t.subscribedCount)+")")]):t._e()])])},h=[],_={props:{many:{type:Number},subscribedCount:{type:Number}}},y=_,C=(e("642d"),Object(v["a"])(y,p,h,!1,null,"2766957a",null)),D=C.exports,w=(e("2f62"),e("aaf6")),S=e.n(w),k=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"nav"},[e("i",{staticClass:"iconback iconfont",on:{click:t.backClick}}),t._t("default")],2)},x=[],I={methods:{backClick:function(){this.$router.back()}}},N=I,O=(e("86ab"),Object(v["a"])(N,k,x,!1,null,null,null)),T=O.exports,$=e("5d17"),j=e("1ae0"),A={data:function(){return{songDetailId:0,songDetail:[],songPeivileges:[],title:"",background:"",img:e("cf05"),isSq:{},i:[],loading:!0,isTabFixed:!1,tabOffsetTop:0,isNone:0,newSongDeatilId:0}},beforeCreate:function(){r=this},filters:{description1:function(t){return t?r.songDetail.description:"猜你喜欢"}},activated:function(){var t=this,a=this.$route.params.songDetailId,e=this.$route.params.newSongDeatilId;this.songDetailId=a,this.newSongDeatilId=e,a&&(this.title="歌单",j["a"].getSongDetail(this.songDetailId).then((function(a){var e=a.data;if(console.log(a),200===e.code){t.songDetail=e.playlist,t.songPeivileges=e.privileges,t._isSQ(),t.loading=!1;var n=S()(t.songDetail.coverImgUrl,{exclude:["rgb(255,255,255)","rgb(0,0,0)"]});n.then((function(a){t.background=a[0].color,t.loading=!1}))}})).catch((function(t){console.log(t)}))),e&&(this.title="歌单",j["a"].getSongDetail(this.newSongDeatilId).then((function(a){var e=a.data;if(console.log(a),200===e.code){t.songDetail=e.playlist,t.songPeivileges=e.privileges,t._isSQ(),t.loading=!1;var n=S()(t.songDetail.coverImgUrl,{ignore:["rgb(255,255,255)","rgb(0,0,0)"]});n.then((function(a){t.background=a[0].color,t.loading=!1}))}})).catch((function(t){console.log(t)})))},components:{FindSongDetail:l["default"],MusicList:b,PageLoading:c["a"],Scroll:$["a"],Gbnav:T,SongTabBar:D},methods:{contentscroll:function(t){this.tabOffsetTop=this.$refs.findsongdetail.$el.offsetTop,console.log(this.$refs.findsongdetail.$el.offsetTop),-t.y>100?(this.title=this.songDetail.name,this.isTabFixed=-t.y>this.tabOffsetTop):this.title="歌单"},_isSQ:function(){var t,a=[],e=o(this.songPeivileges);try{for(e.s();!(t=e.n()).done;){var n=t.value;a.push(n.maxbr)}}catch(i){e.e(i)}finally{e.f()}this.isSq=a.map((function(t){return t>5e5||""}))}}},E=A,U=(e("a1d6"),Object(v["a"])(E,n,i,!1,null,"943e392c",null));a["default"]=U.exports},2020:function(t,a,e){},"35a8":function(t,a,e){},"46c3":function(t,a,e){"use strict";var n=e("a3dc"),i=e.n(n);i.a},5912:function(t,a,e){},"642d":function(t,a,e){"use strict";var n=e("35a8"),i=e.n(n);i.a},"86ab":function(t,a,e){"use strict";var n=e("5912"),i=e.n(n);i.a},a1d6:function(t,a,e){"use strict";var n=e("b1c5"),i=e.n(n);i.a},a3dc:function(t,a,e){},aa65:function(t,a,e){"use strict";e.r(a);var n=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",[e("div",{staticClass:"content",style:{background:t.background}},[e("div",{staticClass:"item"},[e("div",{staticClass:"title-content"},[e("img",{directives:[{name:"lazy",rawName:"v-lazy",value:t.imgUrl,expression:"imgUrl"}],attrs:{alt:""}}),e("div",{staticClass:"name"},[t._v(t._s(t.name)+" "),t.touImg?e("div",{staticClass:"tou"},[e("img",{directives:[{name:"lazy",rawName:"v-lazy",value:t.touImg,expression:"touImg"}],attrs:{alt:""}}),t.nickname?e("span",[t._v(t._s(t.nickname)+">")]):t._e(),e("div",{staticClass:"description description1"},[t._v(" "+t._s(t.description)+" ")])]):t._e()])]),e("div",{staticClass:"downlond"},[e("div",{staticClass:"comments"},[t._v("评论 "),e("span",[t._v(t._s(t.comment))])]),e("div",{staticClass:"comments"},[t._v("分享 "),e("span",[t._v(t._s(t.share))])]),e("div",{staticClass:"comments"},[t._v("下载")]),e("div",{staticClass:"comments"},[t._v("多选")])])])])])},i=[],s=(e("a9e3"),{name:"FindSongDetail",props:{songDetailId:{type:Number},imgUrl:{type:String},title:{type:String},name:{type:String},background:{type:String},description:{type:String},touImg:{type:String},nickname:{type:String,default:function(){return"网易云"}},comment:{type:Number},share:{type:Number}},components:{}}),o=s,r=(e("baab"),e("2877")),l=Object(r["a"])(o,n,i,!1,null,"33d08a46",null);a["default"]=l.exports},aaf6:function(t,a,e){!function(a,e){t.exports=e()}(0,(function(){var t=function(t,a){void 0===a&&(a=1);var e=new Image;return t.startsWith("data")||(e.crossOrigin="Anonymous"),new Promise((function(n,i){e.onload=function(){var t=e.width*a,i=e.height*a,s=function(t,a){var e=document.createElement("canvas");return e.setAttribute("width",t),e.setAttribute("height",a),e.getContext("2d")}(t,i);s.drawImage(e,0,0,t,i);var o=s.getImageData(0,0,t,i);n(o.data)};var s=function(){return i(new Error("An error occurred attempting to load image"))};e.onerror=s,e.onabort=s,e.src=t}))},a={ignore:[],scale:1};return function(e,n){void 0===n&&(n=a);try{var i=(n=Object.assign({},a,n)).ignore,s=n.scale;return(s>1||s<=0)&&console.warn("You set scale to "+s+", which isn't between 0-1. This is either pointless (> 1) or a no-op (≤ 0)"),Promise.resolve(t(e,s)).then((function(t){return function(t,a){for(var e={},n=0;n<t.length;n+=4){var i=t[n+3];if(0!==i){var s=Array.from(t.subarray(n,n+3));if(-1===s.indexOf(void 0)){var o=i&&255!==i?"rgba("+s.concat([i]).join(",")+")":"rgb("+s.join(",")+")";-1===a.indexOf(o)&&(e[o]?e[o].count++:e[o]={color:o,count:1})}}}return Object.values(e).sort((function(t,a){return a.count-t.count}))}(t,i)}))}catch(t){return Promise.reject(t)}}}))},b1c5:function(t,a,e){},baab:function(t,a,e){"use strict";var n=e("2020"),i=e.n(n);i.a},cf05:function(t,a,e){t.exports=e.p+"img/logo.82b9c7a5.png"},d81d:function(t,a,e){"use strict";var n=e("23e7"),i=e("b727").map,s=e("1dde"),o=e("ae40"),r=s("map"),l=o("map");n({target:"Array",proto:!0,forced:!r||!l},{map:function(t){return i(this,t,arguments.length>1?arguments[1]:void 0)}})}}]);
//# sourceMappingURL=chunk-4de517fa.443e4f77.js.map