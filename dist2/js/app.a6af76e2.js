(function(t){function e(e){for(var r,a,c=e[0],u=e[1],s=e[2],l=0,f=[];l<c.length;l++)a=c[l],Object.prototype.hasOwnProperty.call(i,a)&&i[a]&&f.push(i[a][0]),i[a]=0;for(r in u)Object.prototype.hasOwnProperty.call(u,r)&&(t[r]=u[r]);p&&p(e);while(f.length)f.shift()();return o.push.apply(o,s||[]),n()}function n(){for(var t,e=0;e<o.length;e++){for(var n=o[e],r=!0,a=1;a<n.length;a++){var c=n[a];0!==i[c]&&(r=!1)}r&&(o.splice(e--,1),t=u(u.s=n[0]))}return t}var r={},a={app:0},i={app:0},o=[];function c(t){return u.p+"js/"+({}[t]||t)+"."+{"chunk-241af32c":"a59715fd","chunk-4299abac":"6888a531","chunk-54339c43":"ed1f00c5","chunk-2d20f91a":"5cf261ed","chunk-3a24ce42":"5aebd6c2"}[t]+".js"}function u(e){if(r[e])return r[e].exports;var n=r[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,u),n.l=!0,n.exports}u.e=function(t){var e=[],n={"chunk-4299abac":1,"chunk-54339c43":1,"chunk-3a24ce42":1};a[t]?e.push(a[t]):0!==a[t]&&n[t]&&e.push(a[t]=new Promise((function(e,n){for(var r="css/"+({}[t]||t)+"."+{"chunk-241af32c":"31d6cfe0","chunk-4299abac":"1ada51e7","chunk-54339c43":"306b1be8","chunk-2d20f91a":"31d6cfe0","chunk-3a24ce42":"1ada51e7"}[t]+".css",i=u.p+r,o=document.getElementsByTagName("link"),c=0;c<o.length;c++){var s=o[c],l=s.getAttribute("data-href")||s.getAttribute("href");if("stylesheet"===s.rel&&(l===r||l===i))return e()}var f=document.getElementsByTagName("style");for(c=0;c<f.length;c++){s=f[c],l=s.getAttribute("data-href");if(l===r||l===i)return e()}var p=document.createElement("link");p.rel="stylesheet",p.type="text/css",p.onload=e,p.onerror=function(e){var r=e&&e.target&&e.target.src||i,o=new Error("Loading CSS chunk "+t+" failed.\n("+r+")");o.code="CSS_CHUNK_LOAD_FAILED",o.request=r,delete a[t],p.parentNode.removeChild(p),n(o)},p.href=i;var h=document.getElementsByTagName("head")[0];h.appendChild(p)})).then((function(){a[t]=0})));var r=i[t];if(0!==r)if(r)e.push(r[2]);else{var o=new Promise((function(e,n){r=i[t]=[e,n]}));e.push(r[2]=o);var s,l=document.createElement("script");l.charset="utf-8",l.timeout=120,u.nc&&l.setAttribute("nonce",u.nc),l.src=c(t);var f=new Error;s=function(e){l.onerror=l.onload=null,clearTimeout(p);var n=i[t];if(0!==n){if(n){var r=e&&("load"===e.type?"missing":e.type),a=e&&e.target&&e.target.src;f.message="Loading chunk "+t+" failed.\n("+r+": "+a+")",f.name="ChunkLoadError",f.type=r,f.request=a,n[1](f)}i[t]=void 0}};var p=setTimeout((function(){s({type:"timeout",target:l})}),12e4);l.onerror=l.onload=s,document.head.appendChild(l)}return Promise.all(e)},u.m=t,u.c=r,u.d=function(t,e,n){u.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},u.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},u.t=function(t,e){if(1&e&&(t=u(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(u.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)u.d(n,r,function(e){return t[e]}.bind(null,r));return n},u.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return u.d(e,"a",e),e},u.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},u.p="/",u.oe=function(t){throw console.error(t),t};var s=window["webpackJsonp"]=window["webpackJsonp"]||[],l=s.push.bind(s);s.push=e,s=s.slice();for(var f=0;f<s.length;f++)e(s[f]);var p=l;o.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"2ffc":function(t,e,n){},"315b":function(t,e,n){},3224:function(t,e,n){"use strict";var r=n("315b"),a=n.n(r);a.a},"3c26":function(t,e,n){"use strict";var r=n("a0e9"),a=n.n(r);a.a},"4ee2":function(t,e,n){},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("main-tab-bar",{staticClass:"tab-bar"}),n("keep-alive",[n("router-view")],1)],1)},i=[],o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"index"},[n("tab-bar",[n("div",{staticClass:"nav-left"},[n("i",{staticClass:"login"})]),n("div",{staticClass:"nav-center"},[n("tab-bar-item",{attrs:{path:"/home",activeColor:"pink"}},[n("div",{attrs:{slot:"item-text"},slot:"item-text"},[t._v("我的")])]),n("tab-bar-item",{key:t.key,attrs:{path:"/find",activeColor:"black"},nativeOn:{click:function(e){return t.tip(e)}}},[n("div",{attrs:{slot:"item-text"},slot:"item-text"},[t._v("发现")])])],1),n("div",{staticClass:"nav-right"},[n("router-link",{attrs:{to:"/search"}},[t._v("搜索")])],1)]),n("top-tip",{ref:"tip"},[n("span",{staticClass:"tips"},[t._v(t._s(t.tips))])])],1)},c=[],u=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"tab-bar"}},[t._t("default")],2)},s=[],l={name:"TabBar",components:{},data:function(){return{}}},f=l,p=(n("3c26"),n("2877")),h=Object(p["a"])(f,u,s,!1,null,"2fb49a30",null),d=h.exports,v=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"tab-bar-item",on:{click:t.itemCilck}},[n("div",{class:{changeFont:t.isActive,font:t.isActive}},[t._t("item-text")],2),n("div",{staticClass:"cover",class:{active:t.isLeave,bgc:t.isTouch},on:{touchstart:t.touch,touchend:t.touchEnd}})])},m=[],b={props:{path:String,activeColor:{typr:String,default:"12px"}},data:function(){return{isTouch:!1,isLeave:!1}},computed:{isActive:function(){return this.$route.path==this.path},activeStyle:function(){return this.isActive?{fontSize:this.activeColor}:{}}},methods:{itemCilck:function(){this.$router.push(this.path)},touch:function(){this.isTouch=!0,this.isLeave=!1},touchEnd:function(){this.isLeave=!0,this.isTouch=!1}}},g=b,k=(n("3224"),Object(p["a"])(g,v,m,!1,null,"397cdc96",null)),y=k.exports,T=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("transition",{attrs:{name:"tip-show",mode:"out-in"}},[n("div",{directives:[{name:"show",rawName:"v-show",value:t.isTip,expression:"isTip"}],staticClass:"tip"},[t._t("default")],2)])},_=[],w=null,C={name:"",data:function(){return{isTip:!1}},methods:{showTip:function(){var t=this;this.isTip=!0,w&&clearTimeout(w),w=setTimeout((function(){t.hideTip()}),3e3)},hideTip:function(){this.isTip=!1}}},x=C,O=(n("da0a"),Object(p["a"])(x,T,_,!1,null,"7484cb46",null)),j=O.exports,E={data:function(){return{tips:"为你推荐更多有趣的内容",key:0}},components:{TabBar:d,TabBarItem:y,TopTip:j},mounted:function(){var t=this;setTimeout((function(){t.$refs.tip.showTip()}),500)},methods:{tip:function(){this.$refs.tip.showTip(),++this.key,console.log(this.key)}}},S=E,P=(n("8166"),Object(p["a"])(S,o,c,!1,null,"64ae49f0",null)),A=P.exports,$={components:{MainTabBar:A}},L=$,B=(n("6963"),Object(p["a"])(L,a,i,!1,null,"0178909e",null)),N=B.exports,M=(n("d3b7"),n("8c4f")),q=function(){return n.e("chunk-2d20f91a").then(n.bind(null,"b3d7"))},D=function(){return Promise.all([n.e("chunk-241af32c"),n.e("chunk-54339c43")]).then(n.bind(null,"d344"))},F=function(){return n.e("chunk-3a24ce42").then(n.bind(null,"aa65"))},I=function(){return Promise.all([n.e("chunk-241af32c"),n.e("chunk-4299abac")]).then(n.bind(null,"1273"))};r["a"].use(M["a"]);var J=[{path:"/",redirect:"/find"},{path:"/home",component:q},{path:"/find",component:D},{path:"/detail/:id",component:F},{path:"/song",name:"song",component:I}],z=new M["a"]({mode:"history",routes:J}),H=z,K=M["a"].prototype.push;M["a"].prototype.push=function(t){return K.call(this,t).catch((function(t){return t}))};var U=n("caf9");n("4ee2"),n("ed2c");r["a"].config.productionTip=!1,r["a"].use(U["a"],{loading:n("bc5e")}),new r["a"]({render:function(t){return t(N)},router:H}).$mount("#app")},"5d01":function(t,e,n){},6963:function(t,e,n){"use strict";var r=n("89f8"),a=n.n(r);a.a},8166:function(t,e,n){"use strict";var r=n("5d01"),a=n.n(r);a.a},"89f8":function(t,e,n){},a0e9:function(t,e,n){},bc5e:function(t,e,n){t.exports=n.p+"img/placeholder.d578f3ae.png"},da0a:function(t,e,n){"use strict";var r=n("2ffc"),a=n.n(r);a.a},ed2c:function(t,e,n){}});
//# sourceMappingURL=app.a6af76e2.js.map