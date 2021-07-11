(function(t){function e(e){for(var n,o,s=e[0],c=e[1],l=e[2],d=0,p=[];d<s.length;d++)o=s[d],Object.prototype.hasOwnProperty.call(r,o)&&r[o]&&p.push(r[o][0]),r[o]=0;for(n in c)Object.prototype.hasOwnProperty.call(c,n)&&(t[n]=c[n]);u&&u(e);while(p.length)p.shift()();return i.push.apply(i,l||[]),a()}function a(){for(var t,e=0;e<i.length;e++){for(var a=i[e],n=!0,s=1;s<a.length;s++){var c=a[s];0!==r[c]&&(n=!1)}n&&(i.splice(e--,1),t=o(o.s=a[0]))}return t}var n={},r={app:0},i=[];function o(e){if(n[e])return n[e].exports;var a=n[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,o),a.l=!0,a.exports}o.m=t,o.c=n,o.d=function(t,e,a){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(o.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)o.d(a,n,function(e){return t[e]}.bind(null,n));return a},o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="/radar-map/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],c=s.push.bind(s);s.push=e,s=s.slice();for(var l=0;l<s.length;l++)e(s[l]);var u=c;i.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"034f":function(t,e,a){"use strict";a("64a9")},"282d":function(t,e,a){},"49ae":function(t,e,a){"use strict";a("282d")},"56d7":function(t,e,a){"use strict";a.r(e);a("cadf"),a("551c"),a("f751"),a("097d");var n=a("2b0e"),r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-app",{staticClass:"full-height"},[a("v-main",{staticClass:"full-height"},[a("Map",{staticClass:"full-height"})],1)],1)},i=[],o=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"map-container"}},[a("div",{attrs:{id:"mapbox"}}),a("v-btn",{staticClass:"front",attrs:{id:"setting-button",color:"blue-grey darken-2",elevation:"6",fab:""},on:{click:function(e){e.stopPropagation(),t.dialog=!t.dialog}}},[a("v-icon",{attrs:{color:"white"}},[t._v("mdi-cog")])],1),a("v-btn",{staticClass:"front",attrs:{id:"gps-button",loading:t.isGettingLocation,disabled:t.isGettingLocation,color:"grey lighten-5",small:"",elevation:"6",fab:""},on:{click:function(e){return e.stopPropagation(),t.findLocation.apply(null,arguments)}}},[a("v-icon",[t._v("mdi-crosshairs-gps")])],1),a("v-btn",{staticClass:"front",attrs:{id:"refresh-button",loading:t.isFetchingData,disabled:t.isFetchingData,color:"grey lighten-5",small:"",elevation:"6",fab:""},on:{click:function(e){return e.stopPropagation(),t.refreshTileData.apply(null,arguments)}}},[a("v-icon",[t._v("mdi-refresh")])],1),a("v-btn",{staticClass:"front",attrs:{id:"left-button",color:"grey lighten-5",small:"",elevation:"2",fab:""},on:{click:function(e){return e.stopPropagation(),t.onLeftClick.apply(null,arguments)}}},[a("v-icon",[t._v("mdi-arrow-left")])],1),a("v-btn",{staticClass:"front",attrs:{id:"right-button",color:"grey lighten-5",small:"",elevation:"2",fab:""},on:{click:function(e){return e.stopPropagation(),t.onRightClick.apply(null,arguments)}}},[a("v-icon",[t._v("mdi-arrow-right")])],1),a("div",{staticClass:"front",attrs:{id:"slider-container"}},[a("v-slider",{staticClass:"front",attrs:{step:"1",min:0,max:t.sliderValues.length-1,"thumb-label":"always","thumb-size":40,color:t.sliderIdx>t.currentIdx?"lime darken-1":"indigo darken-1","track-color":"gray",ticks:""},scopedSlots:t._u([{key:"thumb-label",fn:function(e){var a=e.value;return[t._v("\n        "+t._s(t.sliderValues.length>0?t.formatDate(t.sliderValues[a].validtime):"")+"\n      ")]}}]),model:{value:t.sliderIdx,callback:function(e){t.sliderIdx=e},expression:"sliderIdx"}})],1),a("v-dialog",{staticClass:"front2",attrs:{width:"500"},model:{value:t.dialog,callback:function(e){t.dialog=e},expression:"dialog"}},[a("v-list",{attrs:{dense:""}},[a("v-list-item",{attrs:{id:"basemap-select"}},[a("v-select",{attrs:{items:t.tileNames,label:"ベースマップ",outlined:""},model:{value:t.selectedTile,callback:function(e){t.selectedTile=e},expression:"selectedTile"}})],1)],1)],1)],1)},s=[],c=(a("ac6a"),a("5df3"),a("96cf"),a("3b8d")),l=(a("28a5"),a("7514"),a("7f7f"),a("e192")),u=a.n(l),d={accessToken:"pk.eyJ1Ijoic3cxMjI3IiwiYSI6ImNrbngyazRhcjBtY3Iyd3RnODhjbDhscWsifQ.6Uc-Lboqa0WhZbnnFJWFSA",container:"mapbox",style:"mapbox://styles/sw1227/ckqz6zeor3wqu17lu6ms6h7ny",localIdeographFontFamily:["sans-serif"],center:[139.7,35.7],zoom:8},p={past:"https://www.jma.go.jp/bosai/jmatile/data/nowc/targetTimes_N1.json",future:"https://www.jma.go.jp/bosai/jmatile/data/nowc/targetTimes_N2.json"},f=400,g=[{name:"陰影起伏図",url:"https://cyberjapandata.gsi.go.jp/xyz/hillshademap/{z}/{x}/{y}.png"},{name:"淡色地図",url:"https://cyberjapandata.gsi.go.jp/xyz/pale/{z}/{x}/{y}.png"},{name:"標準地図",url:"https://cyberjapandata.gsi.go.jp/xyz/std/{z}/{x}/{y}.png"},{name:"白地図",url:"https://cyberjapandata.gsi.go.jp/xyz/blank/{z}/{x}/{y}.png"},{name:"航空写真",url:"https://cyberjapandata.gsi.go.jp/xyz/seamlessphoto/{z}/{x}/{y}.jpg"},{name:"色別標高図",url:"https://cyberjapandata.gsi.go.jp/xyz/relief/{z}/{x}/{y}.png"},{name:"傾斜量図",url:"https://cyberjapandata.gsi.go.jp/xyz/slopemap/{z}/{x}/{y}.png"},{name:"アナグリフ",url:"https://cyberjapandata.gsi.go.jp/xyz/anaglyphmap_color/{z}/{x}/{y}.png"},{name:"[一部地域のみ] 数値地図25000（土地条件）",url:"https://cyberjapandata.gsi.go.jp/xyz/lcm25k_2012/{z}/{x}/{y}.png"},{name:"[一部地域のみ] 治水地形分類図 更新版（2007～2020年）",url:"https://cyberjapandata.gsi.go.jp/xyz/lcmfc2/{z}/{x}/{y}.png"},{name:"[一部地域のみ] 土地条件図（初期整備版）",url:"https://cyberjapandata.gsi.go.jp/xyz/lcm25k/{z}/{x}/{y}.png"}],m={name:"Map",data:function(){return{map:void 0,dialog:!1,sliderIdx:0,currentIdx:0,sliderValues:[],gpsMarker:null,location:{},isGettingLocation:!1,isFetchingData:!0,count:0,selectedTile:g[0].name}},computed:{tileNames:function(){return g.map((function(t){return t.name}))},selectedTileset:function(){var t=this;return g.find((function(e){return e.name===t.selectedTile}))}},watch:{sliderIdx:function(t){var e=this.sliderValues[t];if(e){var a="https://www.jma.go.jp/bosai/jmatile/data/nowc/".concat(e.basetime,"/none/").concat(e.validtime,"/surf/hrpns/{z}/{x}/{y}.png");this.count+=1,this.addRadarLayer(a,this.count),this.maybeDelayedRemoveRadarLayer(this.count-1)}},location:function(t){this.gpsMarker&&this.gpsMarker.remove(),this.gpsMarker=(new u.a.Marker).setLngLat([t.lng,t.lat]).addTo(this.map)},selectedTile:function(){this.map.getSource("base")&&(this.map.getSource("base").tiles=[this.selectedTileset.url]),this.map.getLayer("base-tiles")&&this.map.removeLayer("base-tiles"),this.map.addLayer({id:"base-tiles",type:"raster",source:"base"}),this.map.moveLayer("radar-tiles-".concat(this.count))}},methods:{formatDate:function(t){var e="".concat(t.slice(0,4),"-").concat(t.slice(4,6),"-").concat(t.slice(6,8)),a="".concat(t.slice(8,10),":").concat(t.slice(10,12),":").concat(t.slice(12,14));return new Date("".concat(e,"T").concat(a,"Z")).toLocaleTimeString().split(":").slice(0,2).join(":")},onLeftClick:function(){this.sliderIdx>0&&(this.sliderIdx-=1)},onRightClick:function(){this.sliderIdx<this.sliderValues.length&&(this.sliderIdx+=1)},findLocation:function(){var t=this;navigator.geolocation?(this.isGettingLocation=!0,navigator.geolocation.getCurrentPosition((function(e){t.isGettingLocation=!1,t.location={lat:e.coords.latitude,lng:e.coords.longitude}}),(function(e){t.isGettingLocation=!1,alert("現在地の取得に失敗しました。\n".concat(e))}),{timeout:1e4})):alert("お使いのブラウザでは現在地を取得できません")},fetchDataList:function(){var t=Object(c["a"])(regeneratorRuntime.mark((function t(){var e,a,n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,Promise.all([fetch(p.future).then((function(t){return t.json()})),fetch(p.past).then((function(t){return t.json()}))]);case 2:return e=t.sent,a=e[1].length-1,n=e.flat().reverse(),t.abrupt("return",{currentIndex:a,dataList:n});case 6:case"end":return t.stop()}}),t)})));function e(){return t.apply(this,arguments)}return e}(),maybeDelayedRemoveRadarLayer:function(t){var e=this;setTimeout((function(){"undefined"!==typeof e.map.getLayer("radar-tiles-".concat(t))&&e.map.removeLayer("radar-tiles-".concat(t)),"undefined"!==typeof e.map.getSource("radar-".concat(t))&&e.map.removeSource("radar-".concat(t))}),f)},addRadarLayer:function(t,e){this.map.addSource("radar-".concat(e),{type:"raster",tiles:[t],tileSize:256,minzoom:4,maxzoom:10,attribution:"Japan Meteorological Agency"}),this.map.addLayer({id:"radar-tiles-".concat(e),type:"raster",source:"radar-".concat(e),paint:{"raster-opacity":.6}})},setLayer:function(){this.map.addSource("mapbox-dem",{type:"raster-dem",url:"mapbox://mapbox.mapbox-terrain-dem-v1",tileSize:512,maxzoom:13}),this.map.setTerrain({source:"mapbox-dem",exaggeration:1.5}),this.map.addSource("base",{type:"raster",tiles:[this.selectedTileset.url],tileSize:256,minzoom:4,maxzoom:16,attribution:"地理院タイル(色別標高図の海域部は海上保安庁海洋情報部の資料を使用して作成)"}),this.map.addLayer({id:"base-tiles",type:"raster",source:"base"})},refreshTileData:function(){var t=Object(c["a"])(regeneratorRuntime.mark((function t(){var e,a,n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return this.isFetchingData=!0,t.next=3,this.fetchDataList();case 3:e=t.sent,a=e.currentIndex,n=e.dataList,this.sliderValues=n,this.sliderIdx=a,this.currentIdx=a,this.isFetchingData=!1;case 10:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}()},mounted:function(){var t=this;window.scrollTo(0,document.body.scrollHeight),this.map=new u.a.Map(d),this.map.on("load",(function(){t.map.resize(),t.setLayer(),t.refreshTileData()}))}},h=m,y=(a("49ae"),a("2877")),b=a("6544"),v=a.n(b),x=a("8336"),j=a("169a"),w=a("132d"),k=a("8860"),z=a("da13"),L=a("b974"),I=a("ba0d"),T=Object(y["a"])(h,o,s,!1,null,"0b6f4366",null),S=T.exports;v()(T,{VBtn:x["a"],VDialog:j["a"],VIcon:w["a"],VList:k["a"],VListItem:z["a"],VSelect:L["a"],VSlider:I["a"]});var _={name:"app",components:{Map:S}},D=_,C=(a("034f"),a("7496")),O=a("f6c4"),M=Object(y["a"])(D,r,i,!1,null,null,null),V=M.exports;v()(M,{VApp:C["a"],VMain:O["a"]});var P=a("9483");Object(P["a"])("".concat("/radar-map/","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(t){console.error("Error during service worker registration:",t)}});var R=a("f309");n["a"].use(R["a"]);var F=new R["a"]({});n["a"].config.productionTip=!1,new n["a"]({vuetify:F,render:function(t){return t(V)}}).$mount("#app")},"64a9":function(t,e,a){}});
//# sourceMappingURL=app.13ad0b58.js.map