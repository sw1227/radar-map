(function(t){function e(e){for(var a,i,s=e[0],c=e[1],l=e[2],d=0,p=[];d<s.length;d++)i=s[d],Object.prototype.hasOwnProperty.call(r,i)&&r[i]&&p.push(r[i][0]),r[i]=0;for(a in c)Object.prototype.hasOwnProperty.call(c,a)&&(t[a]=c[a]);u&&u(e);while(p.length)p.shift()();return o.push.apply(o,l||[]),n()}function n(){for(var t,e=0;e<o.length;e++){for(var n=o[e],a=!0,s=1;s<n.length;s++){var c=n[s];0!==r[c]&&(a=!1)}a&&(o.splice(e--,1),t=i(i.s=n[0]))}return t}var a={},r={app:0},o=[];function i(e){if(a[e])return a[e].exports;var n=a[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.m=t,i.c=a,i.d=function(t,e,n){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)i.d(n,a,function(e){return t[e]}.bind(null,a));return n},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="/radar-map/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],c=s.push.bind(s);s.push=e,s=s.slice();for(var l=0;l<s.length;l++)e(s[l]);var u=c;o.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"034f":function(t,e,n){"use strict";n("64a9")},4887:function(t,e,n){},"56d7":function(t,e,n){"use strict";n.r(e);n("cadf"),n("551c"),n("f751"),n("097d");var a=n("2b0e"),r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-app",{staticClass:"full-height"},[n("v-main",{staticClass:"full-height"},[n("Map",{staticClass:"full-height"})],1)],1)},o=[],i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"map-container"}},[n("div",{attrs:{id:"mapbox"}}),n("v-btn",{staticClass:"front",attrs:{id:"setting-button",color:"blue-grey darken-2",elevation:"6",fab:""},on:{click:function(e){e.stopPropagation(),t.drawer=!t.drawer}}},[n("v-icon",{attrs:{color:"white"}},[t._v("mdi-cog")])],1),n("v-btn",{staticClass:"front",attrs:{id:"gps-button",loading:t.isGettingLocation,disabled:t.isGettingLocation,color:"grey lighten-5",small:"",elevation:"6",fab:""},on:{click:function(e){return e.stopPropagation(),t.findLocation.apply(null,arguments)}}},[n("v-icon",[t._v("mdi-crosshairs-gps")])],1),n("v-btn",{staticClass:"front",attrs:{id:"left-button",color:"grey lighten-5",small:"",elevation:"2",fab:""},on:{click:function(e){return e.stopPropagation(),t.onLeftClick.apply(null,arguments)}}},[n("v-icon",[t._v("mdi-arrow-left")])],1),n("v-btn",{staticClass:"front",attrs:{id:"right-button",color:"grey lighten-5",small:"",elevation:"2",fab:""},on:{click:function(e){return e.stopPropagation(),t.onRightClick.apply(null,arguments)}}},[n("v-icon",[t._v("mdi-arrow-right")])],1),n("div",{staticClass:"front",attrs:{id:"slider-container"}},[n("v-slider",{staticClass:"front",attrs:{step:"1",min:0,max:t.sliderValues.length-1,"thumb-label":"always","thumb-size":40,color:t.sliderIdx>t.currentIdx?"lime darken-1":"indigo darken-1","track-color":"gray",ticks:""},scopedSlots:t._u([{key:"thumb-label",fn:function(e){var n=e.value;return[t._v("\n        "+t._s(t.sliderValues.length>0?t.formatDate(t.sliderValues[n].validtime):"")+"\n      ")]}}]),model:{value:t.sliderIdx,callback:function(e){t.sliderIdx=e},expression:"sliderIdx"}})],1),n("v-navigation-drawer",{staticClass:"front",attrs:{absolute:"",temporary:""},model:{value:t.drawer,callback:function(e){t.drawer=e},expression:"drawer"}},[n("v-list",{attrs:{dense:""}},[n("v-list-item",[t._v("\n        TODO\n      ")])],1)],1)],1)},s=[],c=(n("ac6a"),n("5df3"),n("96cf"),n("3b8d")),l=(n("28a5"),n("e192")),u=n.n(l),d={accessToken:"pk.eyJ1Ijoic3cxMjI3IiwiYSI6ImNrbngyazRhcjBtY3Iyd3RnODhjbDhscWsifQ.6Uc-Lboqa0WhZbnnFJWFSA",container:"mapbox",style:"mapbox://styles/mapbox/light-v10",center:[139.7,35.7],zoom:8},p={past:"https://www.jma.go.jp/bosai/jmatile/data/nowc/targetTimes_N1.json",future:"https://www.jma.go.jp/bosai/jmatile/data/nowc/targetTimes_N2.json"},f=400,m={name:"Map",data:function(){return{map:void 0,drawer:null,sliderIdx:0,currentIdx:0,sliderValues:[],gpsMarker:null,location:{},isGettingLocation:!1,count:0}},watch:{sliderIdx:function(t){var e=this.sliderValues[t];if(e){var n="https://www.jma.go.jp/bosai/jmatile/data/nowc/".concat(e.basetime,"/none/").concat(e.validtime,"/surf/hrpns/{z}/{x}/{y}.png");this.count+=1,this.addRadarLayer(n,this.count),this.maybeDelayedRemoveRadarLayer(this.count-1)}},location:function(t){this.gpsMarker&&this.gpsMarker.remove(),this.gpsMarker=(new u.a.Marker).setLngLat([t.lng,t.lat]).addTo(this.map)}},methods:{formatDate:function(t){var e="".concat(t.slice(0,4),"-").concat(t.slice(4,6),"-").concat(t.slice(6,8)),n="".concat(t.slice(8,10),":").concat(t.slice(10,12),":").concat(t.slice(12,14));return new Date("".concat(e,"T").concat(n,"Z")).toLocaleTimeString().split(":").slice(0,2).join(":")},onLeftClick:function(){this.sliderIdx>0&&(this.sliderIdx-=1)},onRightClick:function(){this.sliderIdx<this.sliderValues.length&&(this.sliderIdx+=1)},findLocation:function(){var t=this;navigator.geolocation?(this.isGettingLocation=!0,navigator.geolocation.getCurrentPosition((function(e){t.isGettingLocation=!1,t.location={lat:e.coords.latitude,lng:e.coords.longitude}}),(function(e){t.isGettingLocation=!1,alert("現在地の取得に失敗しました。\n".concat(e))}),{timeout:1e4})):alert("お使いのブラウザでは現在地を取得できません")},fetchDataList:function(){var t=Object(c["a"])(regeneratorRuntime.mark((function t(){var e,n,a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,Promise.all([fetch(p.future).then((function(t){return t.json()})),fetch(p.past).then((function(t){return t.json()}))]);case 2:return e=t.sent,n=e[1].length-1,a=e.flat().reverse(),t.abrupt("return",{currentIndex:n,dataList:a});case 6:case"end":return t.stop()}}),t)})));function e(){return t.apply(this,arguments)}return e}(),maybeDelayedRemoveRadarLayer:function(t){var e=this;setTimeout((function(){"undefined"!==typeof e.map.getLayer("radar-tiles-".concat(t))&&e.map.removeLayer("radar-tiles-".concat(t)),"undefined"!==typeof e.map.getSource("radar-".concat(t))&&e.map.removeSource("radar-".concat(t))}),f)},addRadarLayer:function(t,e){this.map.addSource("radar-".concat(e),{type:"raster",tiles:[t],tileSize:256,minzoom:4,maxzoom:10,attribution:"Japan Meteorological Agency"}),this.map.addLayer({id:"radar-tiles-".concat(e),type:"raster",source:"radar-".concat(e),paint:{"raster-opacity":.6}})},render:function(){var t=Object(c["a"])(regeneratorRuntime.mark((function t(e){var n,a,r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return e.addSource("mapbox-dem",{type:"raster-dem",url:"mapbox://mapbox.mapbox-terrain-dem-v1",tileSize:512,maxzoom:13}),e.setTerrain({source:"mapbox-dem",exaggeration:1.5}),e.addSource("base",{type:"raster",tiles:["https://cyberjapandata.gsi.go.jp/xyz/hillshademap/{z}/{x}/{y}.png"],tileSize:256,minzoom:4,maxzoom:16,attribution:"地理院タイル"}),e.addLayer({id:"base-tiles",type:"raster",source:"base"}),t.next=6,this.fetchDataList();case 6:n=t.sent,a=n.currentIndex,r=n.dataList,this.sliderValues=r,this.sliderIdx=a,this.currentIdx=a;case 12:case"end":return t.stop()}}),t,this)})));function e(e){return t.apply(this,arguments)}return e}()},mounted:function(){var t=this;window.scrollTo(0,document.body.scrollHeight);var e=new u.a.Map(d);e.on("load",(function(){e.resize(),t.render(e)})),this.map=e}},h=m,g=(n("586e"),n("2877")),v=n("6544"),b=n.n(v),y=n("8336"),w=n("132d"),x=n("8860"),j=n("da13"),k=n("f774"),L=n("ba0d"),I=Object(g["a"])(h,i,s,!1,null,"fe8bcfda",null),_=I.exports;b()(I,{VBtn:y["a"],VIcon:w["a"],VList:x["a"],VListItem:j["a"],VNavigationDrawer:k["a"],VSlider:L["a"]});var O={name:"app",components:{Map:_}},S=O,C=(n("034f"),n("7496")),M=n("f6c4"),z=Object(g["a"])(S,r,o,!1,null,null,null),V=z.exports;b()(z,{VApp:C["a"],VMain:M["a"]});var R=n("9483");Object(R["a"])("".concat("/radar-map/","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(t){console.error("Error during service worker registration:",t)}});var P=n("f309");a["a"].use(P["a"]);var T=new P["a"]({});a["a"].config.productionTip=!1,new a["a"]({vuetify:T,render:function(t){return t(V)}}).$mount("#app")},"586e":function(t,e,n){"use strict";n("4887")},"64a9":function(t,e,n){}});
//# sourceMappingURL=app.96c00cb0.js.map