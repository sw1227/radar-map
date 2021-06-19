(function(e){function t(t){for(var a,i,s=t[0],c=t[1],l=t[2],d=0,p=[];d<s.length;d++)i=s[d],Object.prototype.hasOwnProperty.call(n,i)&&n[i]&&p.push(n[i][0]),n[i]=0;for(a in c)Object.prototype.hasOwnProperty.call(c,a)&&(e[a]=c[a]);u&&u(t);while(p.length)p.shift()();return o.push.apply(o,l||[]),r()}function r(){for(var e,t=0;t<o.length;t++){for(var r=o[t],a=!0,s=1;s<r.length;s++){var c=r[s];0!==n[c]&&(a=!1)}a&&(o.splice(t--,1),e=i(i.s=r[0]))}return e}var a={},n={app:0},o=[];function i(t){if(a[t])return a[t].exports;var r=a[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,i),r.l=!0,r.exports}i.m=e,i.c=a,i.d=function(e,t,r){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(i.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)i.d(r,a,function(t){return e[t]}.bind(null,a));return r},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/radar-map/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],c=s.push.bind(s);s.push=t,s=s.slice();for(var l=0;l<s.length;l++)t(s[l]);var u=c;o.push([0,"chunk-vendors"]),r()})({0:function(e,t,r){e.exports=r("56d7")},"034f":function(e,t,r){"use strict";r("64a9")},"4e41":function(e,t,r){},"56d7":function(e,t,r){"use strict";r.r(t);r("cadf"),r("551c"),r("f751"),r("097d");var a=r("2b0e"),n=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("v-app",{staticClass:"full-height"},[r("v-main",{staticClass:"full-height"},[r("Map",{staticClass:"full-height"})],1)],1)},o=[],i=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{attrs:{id:"map-container"}},[r("div",{attrs:{id:"mapbox"}}),r("v-btn",{staticClass:"front",attrs:{id:"setting-button",color:"blue-grey darken-2",elevation:"6",fab:""},on:{click:function(t){t.stopPropagation(),e.drawer=!e.drawer}}},[r("v-icon",{attrs:{color:"white"}},[e._v("mdi-cog")])],1),r("div",{staticClass:"front",attrs:{id:"slider-container"}},[r("v-slider",{staticClass:"front",attrs:{step:"1",min:0,max:e.sliderValues.length-1,"thumb-label":"always","thumb-size":40,ticks:""},scopedSlots:e._u([{key:"thumb-label",fn:function(t){var r=t.value;return[e._v("\n        "+e._s(e.sliderValues.length>0?e.formatDate(e.sliderValues[r].validtime):"")+"\n      ")]}}]),model:{value:e.sliderIdx,callback:function(t){e.sliderIdx=t},expression:"sliderIdx"}})],1),r("v-navigation-drawer",{staticClass:"front",attrs:{absolute:"",temporary:""},model:{value:e.drawer,callback:function(t){e.drawer=t},expression:"drawer"}},[r("v-list",{attrs:{dense:""}},[r("v-list-item",[e._v("\n        TODO\n      ")])],1)],1)],1)},s=[],c=(r("ac6a"),r("5df3"),r("96cf"),r("3b8d")),l=(r("28a5"),r("e192")),u=r.n(l),d={accessToken:"pk.eyJ1Ijoic3cxMjI3IiwiYSI6ImNrbngyazRhcjBtY3Iyd3RnODhjbDhscWsifQ.6Uc-Lboqa0WhZbnnFJWFSA",container:"mapbox",style:"mapbox://styles/mapbox/light-v10",center:[139.7,35.7],zoom:8},p={past:"https://www.jma.go.jp/bosai/jmatile/data/nowc/targetTimes_N1.json",future:"https://www.jma.go.jp/bosai/jmatile/data/nowc/targetTimes_N2.json"},f={name:"Map",data:function(){return{map:void 0,drawer:null,sliderIdx:0,sliderValues:[]}},watch:{sliderIdx:function(e){var t=this.sliderValues[e];if(t){var r="https://www.jma.go.jp/bosai/jmatile/data/nowc/".concat(t.basetime,"/none/").concat(t.validtime,"/surf/hrpns/{z}/{x}/{y}.png");"undefined"!==typeof this.map.getLayer("radar-tiles")&&this.map.removeLayer("radar-tiles"),"undefined"!==typeof this.map.getSource("radar")&&this.map.removeSource("radar"),this.addRadarLayer(r)}}},methods:{formatDate:function(e){var t="".concat(e.slice(0,4),"-").concat(e.slice(4,6),"-").concat(e.slice(6,8)),r="".concat(e.slice(8,10),":").concat(e.slice(10,12),":").concat(e.slice(12,14));return new Date("".concat(t,"T").concat(r,"Z")).toLocaleTimeString().split(":").slice(0,2).join(":")},fetchDataList:function(){var e=Object(c["a"])(regeneratorRuntime.mark((function e(){var t,r,a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,Promise.all([fetch(p.future).then((function(e){return e.json()})),fetch(p.past).then((function(e){return e.json()}))]);case 2:return t=e.sent,r=t[1].length-1,a=t.flat().reverse(),e.abrupt("return",{currentIndex:r,dataList:a});case 6:case"end":return e.stop()}}),e)})));function t(){return e.apply(this,arguments)}return t}(),addRadarLayer:function(e){this.map.addSource("radar",{type:"raster",tiles:[e],tileSize:256,minzoom:4,maxzoom:10,attribution:"Japan Meteorological Agency"}),this.map.addLayer({id:"radar-tiles",type:"raster",source:"radar",paint:{"raster-opacity":.6}})},render:function(){var e=Object(c["a"])(regeneratorRuntime.mark((function e(t){var r,a,n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t.addSource("mapbox-dem",{type:"raster-dem",url:"mapbox://mapbox.mapbox-terrain-dem-v1",tileSize:512,maxzoom:13}),t.setTerrain({source:"mapbox-dem",exaggeration:1.5}),t.addSource("base",{type:"raster",tiles:["https://cyberjapandata.gsi.go.jp/xyz/hillshademap/{z}/{x}/{y}.png"],tileSize:256,minzoom:4,maxzoom:16,attribution:"地理院タイル"}),t.addLayer({id:"base-tiles",type:"raster",source:"base"}),e.next=6,this.fetchDataList();case 6:r=e.sent,a=r.currentIndex,n=r.dataList,this.sliderValues=n,this.sliderIdx=a;case 11:case"end":return e.stop()}}),e,this)})));function t(t){return e.apply(this,arguments)}return t}()},mounted:function(){var e=this,t=new u.a.Map(d);t.on("load",(function(){t.resize(),e.render(t)})),this.map=t}},m=f,h=(r("ae59"),r("2877")),v=r("6544"),b=r.n(v),g=r("8336"),w=r("132d"),y=r("8860"),x=r("da13"),j=r("f774"),O=r("ba0d"),S=Object(h["a"])(m,i,s,!1,null,"579381fe",null),k=S.exports;b()(S,{VBtn:g["a"],VIcon:w["a"],VList:y["a"],VListItem:x["a"],VNavigationDrawer:j["a"],VSlider:O["a"]});var _={name:"app",components:{Map:k}},I=_,z=(r("034f"),r("7496")),L=r("f6c4"),V=Object(h["a"])(I,n,o,!1,null,null,null),M=V.exports;b()(V,{VApp:z["a"],VMain:L["a"]});var T=r("9483");Object(T["a"])("".concat("/radar-map/","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(e){console.error("Error during service worker registration:",e)}});var D=r("f309");a["a"].use(D["a"]);var P=new D["a"]({});a["a"].config.productionTip=!1,new a["a"]({vuetify:P,render:function(e){return e(M)}}).$mount("#app")},"64a9":function(e,t,r){},ae59:function(e,t,r){"use strict";r("4e41")}});
//# sourceMappingURL=app.a18f052f.js.map