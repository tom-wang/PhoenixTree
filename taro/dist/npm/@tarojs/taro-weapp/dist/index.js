"use strict";function _typeof(e){return(_typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _defineProperties(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function _createClass(e,t,n){return t&&_defineProperties(e.prototype,t),n&&_defineProperties(e,n),e}function _defineProperty(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function _objectSpread(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{},o=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(o=o.concat(Object.getOwnPropertySymbols(n).filter(function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),o.forEach(function(e){_defineProperty(t,e,n[e])})}return t}function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}function _assertThisInitialized(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function _possibleConstructorReturn(e,t){return!t||"object"!=typeof t&&"function"!=typeof t?_assertThisInitialized(e):t}function _toConsumableArray(e){return _arrayWithoutHoles(e)||_iterableToArray(e)||_nonIterableSpread()}function _arrayWithoutHoles(e){if(Array.isArray(e)){for(var t=0,n=new Array(e.length);t<e.length;t++)n[t]=e[t];return n}}function _iterableToArray(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}function _nonIterableSpread(){throw new TypeError("Invalid attempt to spread non-iterable instance")}Object.defineProperty(exports,"__esModule",{value:!0});var FUNC_ERROR_TEXT="Expected a function",HASH_UNDEFINED="__lodash_hash_undefined__",INFINITY=1/0,funcTag="[object Function]",genTag="[object GeneratorFunction]",symbolTag="[object Symbol]",reIsDeepProp=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,reIsPlainProp=/^\w*$/,reLeadingDot=/^\./,rePropName=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,reRegExpChar=/[\\^$.*+?()[\]{}|]/g,reEscapeChar=/\\(\\)?/g,reIsHostCtor=/^\[object .+?Constructor\]$/,freeGlobal="object"===("undefined"==typeof global?"undefined":_typeof(global))&&global&&global.Object===Object&&global,freeSelf="object"===("undefined"==typeof self?"undefined":_typeof(self))&&self&&self.Object===Object&&self,root=freeGlobal||freeSelf||Function("return this")(),MAX_SAFE_INTEGER=9007199254740991,reIsUint=/^(?:0|[1-9]\d*)$/;function getValue(e,t){return null==e?void 0:e[t]}function isHostObject(e){var t=!1;if(null!=e&&"function"!=typeof e.toString)try{t=!!(e+"")}catch(e){}return t}var arrayProto=Array.prototype,funcProto=Function.prototype,objectProto=Object.prototype,coreJsData=root["__core-js_shared__"],maskSrcKey=function(){var e=/[^.]+$/.exec(coreJsData&&coreJsData.keys&&coreJsData.keys.IE_PROTO||"");return e?"Symbol(src)_1."+e:""}(),funcToString=funcProto.toString,hasOwnProperty=objectProto.hasOwnProperty,objectToString=objectProto.toString,reIsNative=RegExp("^"+funcToString.call(hasOwnProperty).replace(reRegExpChar,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$"),_Symbol=root.Symbol,splice=arrayProto.splice,Map$1=getNative(root,"Map"),nativeCreate=getNative(Object,"create"),symbolProto=_Symbol?_Symbol.prototype:void 0,symbolToString=symbolProto?symbolProto.toString:void 0;function Hash(e){var t=-1,n=e?e.length:0;for(this.clear();++t<n;){var o=e[t];this.set(o[0],o[1])}}function hashClear(){this.__data__=nativeCreate?nativeCreate(null):{}}function hashDelete(e){return this.has(e)&&delete this.__data__[e]}function hashGet(e){var t=this.__data__;if(nativeCreate){var n=t[e];return n===HASH_UNDEFINED?void 0:n}return hasOwnProperty.call(t,e)?t[e]:void 0}function hashHas(e){var t=this.__data__;return nativeCreate?void 0!==t[e]:hasOwnProperty.call(t,e)}function hashSet(e,t){return this.__data__[e]=nativeCreate&&void 0===t?HASH_UNDEFINED:t,this}function ListCache(e){var t=-1,n=e?e.length:0;for(this.clear();++t<n;){var o=e[t];this.set(o[0],o[1])}}function listCacheClear(){this.__data__=[]}function listCacheDelete(e){var t=this.__data__,n=assocIndexOf(t,e);return!(n<0)&&(n==t.length-1?t.pop():splice.call(t,n,1),!0)}function listCacheGet(e){var t=this.__data__,n=assocIndexOf(t,e);return n<0?void 0:t[n][1]}function listCacheHas(e){return-1<assocIndexOf(this.__data__,e)}function listCacheSet(e,t){var n=this.__data__,o=assocIndexOf(n,e);return o<0?n.push([e,t]):n[o][1]=t,this}function MapCache(e){var t=-1,n=e?e.length:0;for(this.clear();++t<n;){var o=e[t];this.set(o[0],o[1])}}function mapCacheClear(){this.__data__={hash:new Hash,map:new(Map$1||ListCache),string:new Hash}}function mapCacheDelete(e){return getMapData(this,e).delete(e)}function mapCacheGet(e){return getMapData(this,e).get(e)}function mapCacheHas(e){return getMapData(this,e).has(e)}function mapCacheSet(e,t){return getMapData(this,e).set(e,t),this}function assocIndexOf(e,t){for(var n=e.length;n--;)if(eq(e[n][0],t))return n;return-1}function baseGet(e,t){for(var n=0,o=(t=isKey(t,e)?[t]:castPath(t)).length;null!=e&&n<o;)e=e[toKey(t[n++])];return n&&n==o?e:void 0}function baseIsNative(e){return!(!isObject(e)||isMasked(e))&&(isFunction(e)||isHostObject(e)?reIsNative:reIsHostCtor).test(toSource(e))}function baseToString(e){if("string"==typeof e)return e;if(isSymbol(e))return symbolToString?symbolToString.call(e):"";var t=e+"";return"0"==t&&1/e==-INFINITY?"-0":t}function castPath(e){return isArray(e)?e:stringToPath(e)}function getMapData(e,t){var n=e.__data__;return isKeyable(t)?n["string"==typeof t?"string":"hash"]:n.map}function getNative(e,t){var n=getValue(e,t);return baseIsNative(n)?n:void 0}function isKey(e,t){if(isArray(e))return!1;var n=_typeof(e);return!("number"!=n&&"symbol"!=n&&"boolean"!=n&&null!=e&&!isSymbol(e))||(reIsPlainProp.test(e)||!reIsDeepProp.test(e)||null!=t&&e in Object(t))}function isKeyable(e){var t=_typeof(e);return"string"==t||"number"==t||"symbol"==t||"boolean"==t?"__proto__"!==e:null===e}function isMasked(e){return!!maskSrcKey&&maskSrcKey in e}Hash.prototype.clear=hashClear,Hash.prototype.delete=hashDelete,Hash.prototype.get=hashGet,Hash.prototype.has=hashHas,Hash.prototype.set=hashSet,ListCache.prototype.clear=listCacheClear,ListCache.prototype.delete=listCacheDelete,ListCache.prototype.get=listCacheGet,ListCache.prototype.has=listCacheHas,ListCache.prototype.set=listCacheSet,MapCache.prototype.clear=mapCacheClear,MapCache.prototype.delete=mapCacheDelete,MapCache.prototype.get=mapCacheGet,MapCache.prototype.has=mapCacheHas,MapCache.prototype.set=mapCacheSet;var stringToPath=memoize(function(e){e=toString(e);var r=[];return reLeadingDot.test(e)&&r.push(""),e.replace(rePropName,function(e,t,n,o){r.push(n?o.replace(reEscapeChar,"$1"):t||e)}),r});function toKey(e){if("string"==typeof e||isSymbol(e))return e;var t=e+"";return"0"==t&&1/e==-INFINITY?"-0":t}function toSource(e){if(null!=e){try{return funcToString.call(e)}catch(e){}try{return e+""}catch(e){}}return""}function memoize(a,i){if("function"!=typeof a||i&&"function"!=typeof i)throw new TypeError(FUNC_ERROR_TEXT);var e=function e(){var t=arguments,n=i?i.apply(this,t):t[0],o=e.cache;if(o.has(n))return o.get(n);var r=a.apply(this,t);return e.cache=o.set(n,r),r};return e.cache=new(memoize.Cache||MapCache),e}function eq(e,t){return e===t||e!=e&&t!=t}memoize.Cache=MapCache;var isArray=Array.isArray;function isFunction(e){var t=isObject(e)?objectToString.call(e):"";return t==funcTag||t==genTag}function isObject(e){var t=_typeof(e);return!!e&&("object"==t||"function"==t)}function isObjectLike(e){return!!e&&"object"===_typeof(e)}function isSymbol(e){return"symbol"===_typeof(e)||isObjectLike(e)&&objectToString.call(e)==symbolTag}function toString(e){return null==e?"":baseToString(e)}function isIndex(e,t){var n=_typeof(e);return!!(t=null==t?MAX_SAFE_INTEGER:t)&&("number"==n||"symbol"!=n&&reIsUint.test(e))&&-1<e&&e%1==0&&e<t}function baseAssignValue(e,t,n){"__proto__"==t?Object.defineProperty(e,t,{configurable:!0,enumerable:!0,value:n,writable:!0}):e[t]=n}hasOwnProperty=Object.prototype.hasOwnProperty;function assignValue(e,t,n){var o=e[t];hasOwnProperty.call(e,t)&&eq(o,n)&&(void 0!==n||t in e)||baseAssignValue(e,t,n)}function baseSet(e,t,n,o){if(!isObject(e))return e;for(var r=(t=castPath(t,e)).length,a=r-1,i=-1,c=e;null!=c&&++i<r;){var s=toKey(t[i]),p=n;if(i!=a){var u=c[s];void 0===(p=o?o(u,s,c):void 0)&&(p=isObject(u)?u:isIndex(t[i+1])?[]:{})}assignValue(c,s,p),c=c[s]}return e}function get(e,t,n){var o=null==e?void 0:baseGet(e,t);return void 0===o?n:o}function set(e,t,n){return null==e?e:baseSet(e,t,n)}function dynamicRecursive(i,e,n,c){return n=n||[],e.map(function(r,a){var e=r.subscript?n[r.subscript]||[]:n,t={name:r.name||"",path:r.path||"",subscript:r.subscript,components:[]};return t.name?t.components=e.map(function(e,t){var n,o={fn:"dy_".concat(c,"_").concat(r.subscript,"_").concat(r.name).concat(t,"_").concat(a),body:(n=e,Object.assign({$name:"dy_".concat(c,"_").concat(r.subscript,"_").concat(r.name).concat(t)},r.args&&r.args.call(i,n,t)))};return r.children&&r.children.length&&(o.children=dynamicRecursive(i,r.children,e,c)),o}):r.children&&r.children.length&&(t.children=e.map(function(e,t){return dynamicRecursive(i,r.children,e,c)})),t})}var ENV_TYPE={WEAPP:"WEAPP",WEB:"WEB",RN:"RN"};function getEnv(){return"undefined"!=typeof wx&&wx.getSystemInfo?ENV_TYPE.WEAPP:"undefined"!=typeof window?ENV_TYPE.WEB:"undefined"!=typeof global&&global.ErrorUtils?ENV_TYPE.RN:"Unknown environment"}var Events=function(){function p(e){_classCallCheck(this,p),void 0!==e&&e.callbacks?this.callbacks=e.callbacks:this.callbacks={}}return _createClass(p,[{key:"on",value:function(e,t,n){var o,r,a,i,c;if(!t)return this;for(e=e.split(p.eventSplitter),o=this.callbacks;r=e.shift();)(a=(c=o[r])?c.tail:{}).next=i={},a.context=n,a.callback=t,o[r]={tail:i,next:c?c.next:a};return this}},{key:"off",value:function(e,t,n){var o,r,a,i,c,s;if(!(r=this.callbacks))return this;if(!(e||t||n))return delete this.callbacks,this;for(e=e?e.split(p.eventSplitter):Object.keys(r);o=e.shift();)if(a=r[o],delete r[o],a&&(t||n))for(i=a.tail;(a=a.next)!==i;)c=a.callback,s=a.context,(t&&c!==t||n&&s!==n)&&this.on(o,c,s);return this}},{key:"trigger",value:function(e){var t,n,o,r,a;if(!(o=this.callbacks))return this;for(e=e.split(p.eventSplitter),a=[].slice.call(arguments,1);t=e.shift();)if(n=o[t])for(r=n.tail;(n=n.next)!==r;)n.callback.apply(n.context||this,a);return this}}]),p}();function render(){}Events.eventSplitter=/\s+/;var onAndSyncApis={onSocketOpen:!0,onSocketError:!0,onSocketMessage:!0,onSocketClose:!0,onBackgroundAudioPlay:!0,onBackgroundAudioPause:!0,onBackgroundAudioStop:!0,onNetworkStatusChange:!0,onAccelerometerChange:!0,onCompassChange:!0,onBluetoothAdapterStateChange:!0,onBluetoothDeviceFound:!0,onBLEConnectionStateChange:!0,onBLECharacteristicValueChange:!0,onBeaconUpdate:!0,onBeaconServiceChange:!0,onUserCaptureScreen:!0,onHCEMessage:!0,onGetWifiList:!0,onWifiConnected:!0,setStorageSync:!0,getStorageSync:!0,getStorageInfoSync:!0,removeStorageSync:!0,clearStorageSync:!0,getSystemInfoSync:!0,getExtConfigSync:!0,getLogManager:!0},noPromiseApis={stopRecord:!0,getRecorderManager:!0,pauseVoice:!0,stopVoice:!0,pauseBackgroundAudio:!0,stopBackgroundAudio:!0,getBackgroundAudioManager:!0,createAudioContext:!0,createInnerAudioContext:!0,createVideoContext:!0,createCameraContext:!0,navigateBack:!0,createMapContext:!0,canIUse:!0,startAccelerometer:!0,stopAccelerometer:!0,startCompass:!0,stopCompass:!0,hideToast:!0,hideLoading:!0,showNavigationBarLoading:!0,hideNavigationBarLoading:!0,createAnimation:!0,pageScrollTo:!0,createSelectorQuery:!0,createCanvasContext:!0,createContext:!0,drawCanvas:!0,hideKeyboard:!0,stopPullDownRefresh:!0,arrayBufferToBase64:!0,base64ToArrayBuffer:!0,getUpdateManager:!0,createWorker:!0},otherApis={uploadFile:!0,downloadFile:!0,connectSocket:!0,sendSocketMessage:!0,closeSocket:!0,chooseImage:!0,previewImage:!0,getImageInfo:!0,saveImageToPhotosAlbum:!0,startRecord:!0,playVoice:!0,getBackgroundAudioPlayerState:!0,playBackgroundAudio:!0,seekBackgroundAudio:!0,chooseVideo:!0,saveVideoToPhotosAlbum:!0,loadFontFace:!0,saveFile:!0,getFileInfo:!0,getSavedFileList:!0,getSavedFileInfo:!0,removeSavedFile:!0,openDocument:!0,setStorage:!0,getStorage:!0,getStorageInfo:!0,removeStorage:!0,clearStorage:!0,navigateTo:!0,redirectTo:!0,switchTab:!0,reLaunch:!0,getLocation:!0,chooseLocation:!0,openLocation:!0,getSystemInfo:!0,getNetworkType:!0,makePhoneCall:!0,scanCode:!0,setClipboardData:!0,getClipboardData:!0,openBluetoothAdapter:!0,closeBluetoothAdapter:!0,getBluetoothAdapterState:!0,startBluetoothDevicesDiscovery:!0,stopBluetoothDevicesDiscovery:!0,getBluetoothDevices:!0,getConnectedBluetoothDevices:!0,createBLEConnection:!0,closeBLEConnection:!0,getBLEDeviceServices:!0,getBLEDeviceCharacteristics:!0,readBLECharacteristicValue:!0,writeBLECharacteristicValue:!0,notifyBLECharacteristicValueChange:!0,startBeaconDiscovery:!0,stopBeaconDiscovery:!0,getBeacons:!0,setScreenBrightness:!0,getScreenBrightness:!0,setKeepScreenOn:!0,vibrateLong:!0,vibrateShort:!0,addPhoneContact:!0,getHCEState:!0,startHCE:!0,stopHCE:!0,sendHCEMessage:!0,startWifi:!0,stopWifi:!0,connectWifi:!0,getWifiList:!0,setWifiList:!0,getConnectedWifi:!0,showToast:!0,showLoading:!0,showModal:!0,showActionSheet:!0,setNavigationBarTitle:!0,setNavigationBarColor:!0,setTabBarBadge:!0,removeTabBarBadge:!0,showTabBarRedDot:!0,hideTabBarRedDot:!0,setTabBarStyle:!0,setTabBarItem:!0,showTabBar:!0,hideTabBar:!0,setTopBarText:!0,startPullDownRefresh:!0,canvasToTempFilePath:!0,canvasGetImageData:!0,canvasPutImageData:!0,getExtConfig:!0,login:!0,authorize:!0,getUserInfo:!0,requestPayment:!0,showShareMenu:!0,hideShareMenu:!0,updateShareMenu:!0,getShareInfo:!0,chooseAddress:!0,addCard:!0,openCard:!0,openSetting:!0,getSetting:!0,getWeRunData:!0,navigateToMiniProgram:!0,navigateBackMiniProgram:!0,chooseInvoiceTitle:!0,checkIsSupportSoterAuthentication:!0,startSoterAuthentication:!0,checkIsSoterEnrolledInDevice:!0},eventCenter=new Events;function isEmptyObject(e){if(!e)return!1;for(var t in e)if(e.hasOwnProperty(t)&&e[t])return!1;return!0}function getPrototype(e){return Object.getPrototypeOf?Object.getPrototypeOf(e):e.__proto__?e.__proto__:e.constructor.prototype}function getPrototypeChain(e){for(var t=[];e=getPrototype(e);)t.push(e);return t}var nextTick=function(e){for(var t,n=arguments.length,o=new Array(1<n?n-1:0),r=1;r<n;r++)o[r-1]=arguments[r];e="function"==typeof e?(t=e).bind.apply(t,[null].concat(o)):e,setTimeout(e)};function createCommonjsModule(e,t){return e(t={exports:{}},t.exports),t.exports}var getOwnPropertySymbols=Object.getOwnPropertySymbols,hasOwnProperty$1=Object.prototype.hasOwnProperty,propIsEnumerable=Object.prototype.propertyIsEnumerable;function toObject(e){if(null==e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}function shouldUseNative(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var t={},n=0;n<10;n++)t["_"+String.fromCharCode(n)]=n;if("0123456789"!==Object.getOwnPropertyNames(t).map(function(e){return t[e]}).join(""))return!1;var o={};return"abcdefghijklmnopqrst".split("").forEach(function(e){o[e]=e}),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},o)).join("")}catch(e){return!1}}var ReactPropTypesSecret$1,loggedTypeFailures,objectAssign=shouldUseNative()?Object.assign:function(e,t){for(var n,o,r=toObject(e),a=1;a<arguments.length;a++){for(var i in n=Object(arguments[a]))hasOwnProperty$1.call(n,i)&&(r[i]=n[i]);if(getOwnPropertySymbols){o=getOwnPropertySymbols(n);for(var c=0;c<o.length;c++)propIsEnumerable.call(n,o[c])&&(r[o[c]]=n[o[c]])}}return r},ReactPropTypesSecret="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",ReactPropTypesSecret_1=ReactPropTypesSecret,printWarning=function(){};function checkPropTypes(e,t,n,o,r){}var checkPropTypes_1=checkPropTypes,printWarning$1=function(){};function emptyFunctionThatReturnsNull(){return null}var factoryWithTypeCheckers=function(c,p){var a="function"==typeof Symbol&&Symbol.iterator,i="@@iterator";var u="<<anonymous>>",e={array:t("array"),bool:t("boolean"),func:t("function"),number:t("number"),object:t("object"),string:t("string"),symbol:t("symbol"),any:n(emptyFunctionThatReturnsNull),arrayOf:function(p){return n(function(e,t,n,o,r){if("function"!=typeof p)return new f("Property `"+r+"` of component `"+n+"` has invalid PropType notation inside arrayOf.");var a=e[t];if(!Array.isArray(a)){var i=h(a);return new f("Invalid "+o+" `"+r+"` of type `"+i+"` supplied to `"+n+"`, expected an array.")}for(var c=0;c<a.length;c++){var s=p(a,c,n,o,r+"["+c+"]",ReactPropTypesSecret_1);if(s instanceof Error)return s}return null})},element:n(function(e,t,n,o,r){var a=e[t];if(!c(a)){var i=h(a);return new f("Invalid "+o+" `"+r+"` of type `"+i+"` supplied to `"+n+"`, expected a single ReactElement.")}return null}),instanceOf:function(c){return n(function(e,t,n,o,r){if(!(e[t]instanceof c)){var a=c.name||u,i=function(e){if(!e.constructor||!e.constructor.name)return u;return e.constructor.name}(e[t]);return new f("Invalid "+o+" `"+r+"` of type `"+i+"` supplied to `"+n+"`, expected instance of `"+a+"`.")}return null})},node:n(function(e,t,n,o,r){return s(e[t])?null:new f("Invalid "+o+" `"+r+"` supplied to `"+n+"`, expected a ReactNode.")}),objectOf:function(p){return n(function(e,t,n,o,r){if("function"!=typeof p)return new f("Property `"+r+"` of component `"+n+"` has invalid PropType notation inside objectOf.");var a=e[t],i=h(a);if("object"!==i)return new f("Invalid "+o+" `"+r+"` of type `"+i+"` supplied to `"+n+"`, expected an object.");for(var c in a)if(a.hasOwnProperty(c)){var s=p(a,c,n,o,r+"."+c,ReactPropTypesSecret_1);if(s instanceof Error)return s}return null})},oneOf:function(s){if(!Array.isArray(s))return emptyFunctionThatReturnsNull;return n(function(e,t,n,o,r){for(var a=e[t],i=0;i<s.length;i++)if(l(a,s[i]))return null;var c=JSON.stringify(s);return new f("Invalid "+o+" `"+r+"` of value `"+a+"` supplied to `"+n+"`, expected one of "+c+".")})},oneOfType:function(c){if(!Array.isArray(c))return emptyFunctionThatReturnsNull;for(var e=0;e<c.length;e++){var t=c[e];if("function"!=typeof t)return printWarning$1("Invalid argument supplied to oneOfType. Expected an array of check functions, but received "+o(t)+" at index "+e+"."),emptyFunctionThatReturnsNull}return n(function(e,t,n,o,r){for(var a=0;a<c.length;a++){var i=c[a];if(null==i(e,t,n,o,r,ReactPropTypesSecret_1))return null}return new f("Invalid "+o+" `"+r+"` supplied to `"+n+"`.")})},shape:function(u){return n(function(e,t,n,o,r){var a=e[t],i=h(a);if("object"!==i)return new f("Invalid "+o+" `"+r+"` of type `"+i+"` supplied to `"+n+"`, expected `object`.");for(var c in u){var s=u[c];if(s){var p=s(a,c,n,o,r+"."+c,ReactPropTypesSecret_1);if(p)return p}}return null})},exact:function(l){return n(function(e,t,n,o,r){var a=e[t],i=h(a);if("object"!==i)return new f("Invalid "+o+" `"+r+"` of type `"+i+"` supplied to `"+n+"`, expected `object`.");var c=objectAssign({},e[t],l);for(var s in c){var p=l[s];if(!p)return new f("Invalid "+o+" `"+r+"` key `"+s+"` supplied to `"+n+"`.\nBad object: "+JSON.stringify(e[t],null,"  ")+"\nValid keys: "+JSON.stringify(Object.keys(l),null,"  "));var u=p(a,s,n,o,r+"."+s,ReactPropTypesSecret_1);if(u)return u}return null})}};function l(e,t){return e===t?0!==e||1/e==1/t:e!=e&&t!=t}function f(e){this.message=e,this.stack=""}function n(s){function e(e,t,n,o,r,a,i){if((o=o||u,a=a||n,i!==ReactPropTypesSecret_1)&&p){var c=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use `PropTypes.checkPropTypes()` to call them. Read more at http://fb.me/use-check-prop-types");throw c.name="Invariant Violation",c}return null==t[n]?e?null===t[n]?new f("The "+r+" `"+a+"` is marked as required in `"+o+"`, but its value is `null`."):new f("The "+r+" `"+a+"` is marked as required in `"+o+"`, but its value is `undefined`."):null:s(t,n,o,r,a)}var t=e.bind(null,!1);return t.isRequired=e.bind(null,!0),t}function t(c){return n(function(e,t,n,o,r,a){var i=e[t];return h(i)!==c?new f("Invalid "+o+" `"+r+"` of type `"+d(i)+"` supplied to `"+n+"`, expected `"+c+"`."):null})}function s(e){switch(_typeof(e)){case"number":case"string":case"undefined":return!0;case"boolean":return!e;case"object":if(Array.isArray(e))return e.every(s);if(null===e||c(e))return!0;var t=function(e){var t=e&&(a&&e[a]||e[i]);if("function"==typeof t)return t}(e);if(!t)return!1;var n,o=t.call(e);if(t!==e.entries){for(;!(n=o.next()).done;)if(!s(n.value))return!1}else for(;!(n=o.next()).done;){var r=n.value;if(r&&!s(r[1]))return!1}return!0;default:return!1}}function h(e){var t,n=_typeof(e);return Array.isArray(e)?"array":e instanceof RegExp?"object":(t=e,"symbol"===n||"Symbol"===t["@@toStringTag"]||"function"==typeof Symbol&&t instanceof Symbol?"symbol":n)}function d(e){if(null==e)return""+e;var t=h(e);if("object"===t){if(e instanceof Date)return"date";if(e instanceof RegExp)return"regexp"}return t}function o(e){var t=d(e);switch(t){case"array":case"object":return"an "+t;case"boolean":case"date":case"regexp":return"a "+t;default:return t}}return f.prototype=Error.prototype,e.checkPropTypes=checkPropTypes_1,e.PropTypes=e};function emptyFunction(){}var factoryWithThrowingShims=function(){function e(e,t,n,o,r,a){if(a!==ReactPropTypesSecret_1){var i=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw i.name="Invariant Violation",i}}function t(){return e}var n={array:e.isRequired=e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t};return n.checkPropTypes=emptyFunction,n.PropTypes=n},propTypes=createCommonjsModule(function(e){e.exports=factoryWithThrowingShims()}),eventPreffix="__event_",rootScopeKey="__root_",componentPath="componentPath",scopeMap={},pageExtraFns=["onPullDownRefresh","onReachBottom","onShareAppMessage","onPageScroll","onTabItemTap"],events=new Events;function processEvent(s,p,e){var u=p.replace(eventPreffix,"");e[u]||(e[u]=function(e){e&&(e.preventDefault=function(){},e.stopPropagation=function(){},Object.assign(e.target,e.detail),Object.assign(e.currentTarget,e.detail));var o=e.currentTarget.dataset,t=scopeMap[s][o[componentPath]||rootScopeKey],n=t,r={},a=o.componentClass,i=u.toLocaleLowerCase();if(Object.keys(o).forEach(function(e){var t=e.toLocaleLowerCase();if(0===t.indexOf("event")&&(t=t.replace("event",""),0<=(t=(t=a?"".concat(a,"__").concat(t):t).toLocaleLowerCase()).indexOf(i))){var n=t.replace(i,"");r[n]=o[e]}}),isEmptyObject(r))o[componentPath]&&(n=scopeMap[s][o[componentPath]||rootScopeKey]),t[p].call(n,e);else{"this"!==r.scope&&(n=r.scope),delete r.scope;var c=Object.keys(r).sort().map(function(e){return r[e]});c.push(e);t[p].apply(n,c)}})}function initPage(e,n,t){var o=t.path;return scopeMap[o]=scopeMap[o]||{},function i(c,s,e){for(var t in s.$path=e||"",s.props.$path=s.$path,e?scopeMap[o][e]=s:scopeMap[o][rootScopeKey]=s,isEmptyObject(s.$components)||Object.getOwnPropertyNames(s.$components).forEach(function(e){var t=s.$components[e],n="".concat(s.$path,"$$").concat(e),o=(s.$props||{})[e]||{},r="function"==typeof o?o.call(s):o,a=new t(r=transformPropsForComponent(r,t.defaultProps,t.propTypes));s.$$components[e]=a,i(c,a,n)}),s)0<=t.indexOf(eventPreffix)&&(n[t.replace(eventPreffix,"")]=s[t],processEvent(o,t,c));return getPrototypeChain(s).forEach(function(e){Object.getOwnPropertyNames(e).forEach(function(e){0<=e.indexOf(eventPreffix)&&(n[e.replace(eventPreffix,"")]=s[e],processEvent(o,e,c))})}),c}(e,n)}function processDynamicComponents(e,h){var d=e.path;scopeMap[d]=scopeMap[d]||{},function l(f){f.$dynamicComponents&&!isEmptyObject(f.$dynamicComponents)&&(f.$$dynamicComponents=f.$$dynamicComponents||{},Object.getOwnPropertyNames(f.$dynamicComponents).forEach(function(e){var t=(0,f.$dynamicComponents[e])(),n=t.stateName,o=t.loopComponents,r=Object.assign({},get(f.state,n));f._dyState=f._dyState||{},set(f._dyState,n,r),function s(e,p,u){e.forEach(function(e,t){if(Array.isArray(e))s(e,p[t],t);else{var c=e.path,n=e.components,o=e.children,r=e.subscript;(p=r?get(p,r):p)&&(n&&n.length&&n.forEach(function(e,t){var n,o="".concat(f.$path,"$$").concat(e.fn,"_").concat(u);Object.getOwnPropertyNames(f.$$dynamicComponents).forEach(function(e){e===o&&(n=f.$$dynamicComponents[e])});var r=transformPropsForComponent(e.body,c.defaultProps);if(n?(n.$path=o,n.props.$path=o,n.prevProps=n.props,n.props=r,n._unsafeCallUpdate=!0,updateComponent(n,!1),n._unsafeCallUpdate=!1,n._init(f.$scope),n._initData(f.$root||f,f)):((n=new c(r)).$path=o,n.props.$path=o,n._init(f.$scope),n._initData(f.$root||f,f),componentTrigger(n,"componentWillMount"),events.on("page:onReady",function(){componentTrigger(n,"componentDidMount")})),l(n),p&&(p[t]=Object.assign({},n.props,_objectSpread({},p[t]),n.state)),f.$$dynamicComponents[o]=n,scopeMap[d][o]=n,h){for(var a in n)0<=a.indexOf(eventPreffix)&&processEvent(d,a,h);var i=getPrototypeChain(n);i.forEach(function(e){Object.getOwnPropertyNames(e).forEach(function(e){0<=e.indexOf(eventPreffix)&&processEvent(d,e,h)})})}e.children&&e.children.length&&s(e.children,p[t],"".concat(t,"_").concat(u)),l(e)}),o&&o.length&&s(o,p,u))}})}(o,r,-1)}))}(e)}function componentTrigger(t,n){"componentWillUnmount"===n&&(t._dirty=!0,t._disable=!0),Object.getOwnPropertyNames(t.$$components||{}).forEach(function(e){componentTrigger(t.$$components[e],n)}),t[n]&&"function"==typeof t[n]&&t[n](),"componentWillMount"===n&&(t.$isComponent&&(t.$router.params=t.$root.$router.params),t._dirty=!1,t._disable=!1,t.state=t.getState(),t.$isComponent||updateComponent(t,!0,!0))}function transformPropsForComponent(e,t,n){var o={};for(var r in e){var a=e[r];o[r]=a}if(t)for(var i in t)void 0===o[i]&&(o[i]=t[i]);if(n)for(var c in n)void 0===o[c]&&(o[c]=n[c]);return o}function createPage(e,t){var n=new e(transformPropsForComponent({},e.defaultProps,e.propTypes));n.$isComponent=!1,n.path=t.path;var o={onLoad:function(e){n._init(this),n.$router.params=e,componentTrigger(n,"componentWillMount")},onReady:function(){events.trigger("page:onReady"),componentTrigger(n,"componentDidMount")},onShow:function(){componentTrigger(n,"componentDidShow")},onHide:function(){componentTrigger(n,"componentDidHide")},onUnload:function(){events.off("page:onReady"),componentTrigger(n,"componentWillUnmount")},_setData:function(e,t,n){if(n){var o={};for(var r in e)void 0!==e[r]&&(o[r]=e[r]);this.setData(o,function(){t&&t()})}}},r=initPage(o,n,t);processDynamicComponents(n,o),n._initData(),pageExtraFns.forEach(function(e){"function"==typeof n[e]&&(o[e]=n[e].bind(n))});var a={};return n.$usedState&&n.$usedState.length&&n.$usedState.forEach(function(e){var t=get(n.$data,e);set(a,e,t)}),Object.assign(r,{data:a})}var DEV="undefined"==typeof process||!process.env||!1;function updateComponent(t,e,n){var o=t.props,r=t.propTypes,a=t.type;DEV&&r&&(void 0)(r,o,"prop",a.name||a.toString().match(/^function\s*([^\s(]+)/)[1]);var i=t.prevProps||o;t.props=i,!0===t._unsafeCallUpdate&&t.componentWillReceiveProps&&(t._disable=!0,t.componentWillReceiveProps(o),t._disable=!1);var c=t.getState();t._createData&&(c=t._createData(c,o)),c.__data&&(c.__data.$path=t.$path);var s=t.prevState||c,p=!1;if(n||("function"==typeof t.shouldComponentUpdate&&!1===t.shouldComponentUpdate(o,c)?p=!0:"function"==typeof t.componentWillUpdate&&t.componentWillUpdate(o,c)),t.props=o,t.state=c,t._dirty=!1,!p){for(var u in t.$props){var l=t.$props[u].call(t),f=t.$$components[u],h=Object.assign({},f.props,l);f._disable=!0,f.componentWillReceiveProps&&!n&&f.componentWillReceiveProps(h),f._disable=!1,f.props=h,updateComponent(f,!1,n)}var d={};Object.keys(t.props).forEach(function(e){"function"!=typeof t.props[e]&&(d[e]=t.props[e])}),Object.assign(t.$data,t.state,d),t.componentDidUpdate&&!n&&t.componentDidUpdate(i,s),doUpdate(t,e)}t.prevProps=t.props,t.prevState=t.state}function doUpdate(n,e){var t=n.$root?n.$root.$data:n.$data;if(e&&(processDynamicComponents(n.$root||n),Object.assign(n.$data,n.state,n._dyState||{})),!n.$isComponent&&n.$usedState&&n.$usedState.length){var o={};n.$usedState.forEach(function(e){var t=get(n.$data,e);set(o,e,t)}),t=o}n.$scope._setData(_objectSpread({},t),function(){if(n._pendingCallbacks)for(;n._pendingCallbacks.length;)n._pendingCallbacks.pop().call(n)},e)}var items=[];function enqueueRender(e){!e._dirty&&(e._dirty=!0)&&1===items.push(e)&&nextTick(rerender)}function rerender(){var e,t=items;for(items=[];e=t.pop();)e._dirty&&updateComponent(e,!0)}var Component$1=function(){function t(e){_classCallCheck(this,t),Object.defineProperty(this,"$components",{configurable:!0,enumerable:!0,writable:!0,value:{}}),Object.defineProperty(this,"$$components",{configurable:!0,enumerable:!0,writable:!0,value:{}}),Object.defineProperty(this,"$router",{configurable:!0,enumerable:!0,writable:!0,value:{params:{}}}),Object.defineProperty(this,"$path",{configurable:!0,enumerable:!0,writable:!0,value:""}),Object.defineProperty(this,"$name",{configurable:!0,enumerable:!0,writable:!0,value:""}),Object.defineProperty(this,"$isComponent",{configurable:!0,enumerable:!0,writable:!0,value:!0}),Object.defineProperty(this,"$props",{configurable:!0,enumerable:!0,writable:!0,value:{}}),Object.defineProperty(this,"nextProps",{configurable:!0,enumerable:!0,writable:!0,value:{}}),Object.defineProperty(this,"_dirty",{configurable:!0,enumerable:!0,writable:!0,value:!0}),Object.defineProperty(this,"_disable",{configurable:!0,enumerable:!0,writable:!0,value:!0}),Object.defineProperty(this,"_pendingStates",{configurable:!0,enumerable:!0,writable:!0,value:[]}),Object.defineProperty(this,"_pendingCallbacks",{configurable:!0,enumerable:!0,writable:!0,value:[]}),this.state={},this.props=e||{}}return _createClass(t,[{key:"_initData",value:function(e,t){var n=this;this.$app=getApp(),this.$root=e||null,this.$parent=t||null,this.defaultData={},this.$data=t&&t.$data||{};var o=this.$path.split("$$").pop();this.$data["$$".concat(o)]=this.$data["$$".concat(o)]||{},this.$data=this.$data["$$".concat(o)];var r=this.state;for(var a in this._dyState&&(r=Object.assign({},this.state,this._dyState)),r)this.$data[a]=r[a];if(this.props)for(var i in this.props)"function"!=typeof this.props[i]&&(this.$data[i]=this.props[i]);this.$$components&&!isEmptyObject(this.$$components)&&Object.getOwnPropertyNames(this.$$components).forEach(function(e){n.$$components[e]._initData(n.$root||n,n)}),this.$$dynamicComponents&&!isEmptyObject(this.$$dynamicComponents)&&Object.getOwnPropertyNames(this.$$dynamicComponents).forEach(function(e){n.$$dynamicComponents[e]._initData(n.$root||n,n)})}},{key:"_init",value:function(e){var t=this;this.$scope=e,this.$app=getApp(),this.$$components&&!isEmptyObject(this.$$components)&&Object.getOwnPropertyNames(this.$$components).forEach(function(e){t.$$components[e]._init(t.$scope)}),this.$$dynamicComponents&&!isEmptyObject(this.$$dynamicComponents)&&Object.getOwnPropertyNames(this.$$dynamicComponents).forEach(function(e){t.$$dynamicComponents[e]._init(t.$scope)})}},{key:"_createData",value:function(){return this.state}},{key:"setState",value:function(e,t){e&&(this._pendingStates=this._pendingStates||[]).push(e),"function"==typeof t&&(this._pendingCallbacks=this._pendingCallbacks||[]).push(t),this._disable||enqueueRender(this)}},{key:"getState",value:function(){var t=this,e=this._pendingStates,n=this.state,o=this.props,r=Object.assign({},n);if(delete r.__data,!e.length)return r;var a=e.concat();return this._pendingStates.length=0,a.forEach(function(e){"function"==typeof e&&(e=e.call(t,r,o)),Object.assign(r,e)}),r}},{key:"forceUpdate",value:function(e){"function"==typeof e&&(this._pendingCallbacks=this._pendingCallbacks||[]).push(e),updateComponent(this,!0)}}]),t}();function shallowEqual(e,t){if(null===e||null===t)return!1;if(Object.is(e,t))return!0;var n=e?Object.keys(e):[],o=t?Object.keys(t):[];if(n.length!==o.length)return!1;for(var r=0;r<n.length;r++){var a=n[r];if(!t.hasOwnProperty(a)||!Object.is(e[a],t[a]))return!1}return!0}Object.defineProperty(Component$1,"defaultProps",{configurable:!0,enumerable:!0,writable:!0,value:{}}),Object.is=Object.is||function(e,t){return e===t?0!==e||1/e==1/t:e!=e&&t!=t};var PureComponent=function(e){function i(){var e,t,n;_classCallCheck(this,i);for(var o=arguments.length,r=new Array(o),a=0;a<o;a++)r[a]=arguments[a];return _possibleConstructorReturn(n,(t=n=_possibleConstructorReturn(this,(e=i.__proto__||Object.getPrototypeOf(i)).call.apply(e,[this].concat(r))),Object.defineProperty(_assertThisInitialized(n),"isPureComponent",{configurable:!0,enumerable:!0,writable:!0,value:!0}),t))}return _inherits(i,Component$1),_createClass(i,[{key:"shouldComponentUpdate",value:function(e,t){return!shallowEqual(this.props,e)||!shallowEqual(this.state,t)}}]),i}(),RequestQueue={MAX_REQUEST:5,queue:[],request:function(e){this.push(e),this.run()},push:function(e){this.queue.push(e)},run:function(){var e=this,t=arguments;if(this.queue.length&&this.queue.length<=this.MAX_REQUEST){var n=this.queue.shift(),o=n.complete;n.complete=function(){o&&o.apply(n,_toConsumableArray(t)),e.run()},wx.request(n)}}};function request(e){"string"==typeof(e=e||{})&&(e={url:e});var o=e.success,r=e.fail,a=e.complete;return new Promise(function(t,n){e.success=function(e){o&&o(e),t(e)},e.fail=function(e){r&&r(e),n(e)},e.complete=function(e){a&&a(e)},RequestQueue.request(e)})}function processApis(e){var t=Object.assign({},onAndSyncApis,noPromiseApis,otherApis);Object.keys(t).forEach(function(i){onAndSyncApis[i]||noPromiseApis[i]?e[i]=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return wx[i].apply(wx,t)}:e[i]=function(r){r=r||{};var a=null,e=Object.assign({},r);if("string"==typeof r)return wx[i](r);var t=new Promise(function(n,o){["fail","success","complete"].forEach(function(t){e[t]=function(e){r[t]&&r[t](e),"success"===t?n("connectSocket"===i?a:e):"fail"===t&&o(e)}}),a=wx[i](e)});return"uploadFile"!==i&&"downloadFile"!==i||(t.progress=function(e){return a.onProgressUpdate(e),t},t.abort=function(e){return e&&e(),a.abort(),t}),t}})}function initNativeApi(e){processApis(e),e.request=request,e.getCurrentPages=getCurrentPages,e.getApp=getApp}function createApp(e){initNativeApi(this);var t=new e,n={onLaunch:function(e){t.$app=this,t.$router={params:e},t.componentWillMount&&t.componentWillMount(),t.componentDidMount&&t.componentDidMount()},onShow:function(e){Object.assign(t.$router.params,e),t.componentDidShow&&t.componentDidShow()},onHide:function(){t.componentDidHide&&t.componentDidHide()}};return Object.assign(n,t)}var index$1={Component:Component$1,createApp:createApp,createPage:createPage,initNativeApi:initNativeApi,Events:Events,eventCenter:eventCenter,getEnv:getEnv,render:render,ENV_TYPE:ENV_TYPE,internal_safe_get:get,internal_safe_set:set,internal_dynamic_recursive:dynamicRecursive};exports.Component=Component$1,exports.PureComponent=PureComponent,exports.createApp=createApp,exports.createPage=createPage,exports.initNativeApi=initNativeApi,exports.Events=Events,exports.eventCenter=eventCenter,exports.getEnv=getEnv,exports.render=render,exports.ENV_TYPE=ENV_TYPE,exports.internal_safe_get=get,exports.internal_safe_set=set,exports.internal_dynamic_recursive=dynamicRecursive,exports.default=index$1;