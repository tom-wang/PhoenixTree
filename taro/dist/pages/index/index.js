"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var _dec,_class,_extends=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},_createClass=function(){function r(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(e,t,n){return t&&r(e.prototype,t),n&&r(e,n),e}}(),_index=require("../../npm/@tarojs/taro-weapp/index.js"),_index2=_interopRequireDefault(_index),_index3=require("../../npm/@tarojs/redux/index.js"),_index4=require("../../components/avatar/index.js"),_index5=_interopRequireDefault(_index4),_index6=require("../../components/list/index.js"),_index7=_interopRequireDefault(_index6),_index8=require("../../components/loadmore/index.js"),_index9=_interopRequireDefault(_index8),_counter=require("../../actions/counter.js"),_session=require("../../actions/session.js"),_const=require("../../utils/const.js"),Const=_interopRequireWildcard(_const);function _interopRequireWildcard(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t}function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _possibleConstructorReturn(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var Index=(_dec=(0,_index3.connect)(function(e){return{counter:e.counter,session:e.session}},function(t){return{add:function(){t((0,_counter.add)())},dec:function(){t((0,_counter.minus)())},asyncAdd:function(){t((0,_counter.asyncAdd)())},setUserInfo:function(e){t((0,_session.setUserInfo)(e))},setUserInfoList:function(e){t((0,_session.setUserInfoList)(e))}}}))(_class=function(e){function t(e){_classCallCheck(this,t);var n=_possibleConstructorReturn(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.$usedState=["userInfo","loopArray0","isLoading","isNotAuth","userInfoList","$$Avatar","$$LoadMore"],n.$props={Avatar:function(){return{$name:"Avatar",src:(0,_index.internal_safe_get)(this.state,"userInfo.avatarUrl")}},LoadMore:function(){return{$name:"LoadMore",isEnd:!0}}},n.$components={Avatar:_index5.default,LoadMore:_index9.default},n.$dynamicComponents={$component_0:function(){var e="loopArray0",t=[{name:"List",path:_index7.default,subscript:"",args:function(e,t){return{title:e.title,src:e.src}}}];return{stateName:e,loopComponents:(0,_index.internal_dynamic_recursive)(n,t,(0,_index.internal_safe_get)(n.state,e),e)}}},n.state=n._createData(),n}return _inherits(t,_index.Component),_createClass(t,[{key:"componentWillMount",value:function(){}},{key:"onShareAppMessage",value:function(){return{title:"同学，有空来喝一杯！"}}},{key:"fetchUserInfoList",value:function(){var t=this;return wx.cloud.database().collection("member_info").where({state:Const.REG_STATUS_2}).get().then(function(e){console.log("======",e),t.props.setUserInfoList(e.data)})}},{key:"__event_onGetUserInfo",value:function(e){console.log(e.detail.userInfo),this.props.setUserInfo(e.detail.userInfo)}},{key:"__event_onClick",value:function(){console.log("lalalal"),_index2.default.switchTab({url:"/pages/me/index"})}},{key:"_createData",value:function(){this.__state=arguments[0]||this.state||{},this.__props=arguments[1]||this.props||{};var e=this.__props.session,t=e.userInfo,n=e.regInfo,r=e.userInfoList;Const.REG_STATUS_2!=n.state||r||this.fetchUserInfoList();var o=!(!t.loading&&!n.loading);o?wx.showLoading({title:"拼命加载中..."}):(wx.hideLoading(),wx.showTabBar());var s=-1===t;s||o?wx.hideTabBar():wx.showTabBar();var i=(r||[]).map(function(e){return e.title=e.nickName,e.src=e.avatarUrl,_extends({},e)});return Object.assign(this.__state,{userInfo:t,loopArray0:i,isLoading:o,isNotAuth:s,userInfoList:r}),this.__state.__data=Object.assign({},this.__state),this.__state}}]),t}())||_class;exports.default=Index,Page(require("../../npm/@tarojs/taro-weapp/index.js").default.createPage(Index,{path:"src/pages/index/index.js"}));