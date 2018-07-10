"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _index = require("./npm/@tarojs/taro-weapp/index.js");

var _index2 = _interopRequireDefault(_index);

var _index3 = require("./npm/@tarojs/redux/index.js");

var _index4 = require("./store/index.js");

var _index5 = _interopRequireDefault(_index4);

var _session = require("./actions/session.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var store = (0, _index5.default)();

(0, _index3.setStore)(store);

var _App = function (_Component) {
  _inherits(_App, _Component);

  function _App() {
    _classCallCheck(this, _App);

    return _possibleConstructorReturn(this, (_App.__proto__ || Object.getPrototypeOf(_App)).apply(this, arguments));
  }

  _createClass(_App, [{
    key: "componentWillMount",


    //会编译成onLaunch
    value: function componentWillMount() {
      var _this2 = this,
          _arguments = arguments;

      this.login().then(function () {
        wx.cloud.init();
        _this2.getCurrentUserInfo();
        _this2.getUserRegInfo();
      }).catch(function () {
        console.log(_arguments);
        console.log('catch');
      });
    }

    // getUserInfo需要授权

  }, {
    key: "getCurrentUserInfo",
    value: function getCurrentUserInfo() {
      wx.getUserInfo({
        lang: 'zh_CN',
        withCredentials: true,
        success: function success(res) {
          store.dispatch((0, _session.setUserInfo)(res.userInfo));
          console.log(res);
        },
        fail: function fail(res) {
          store.dispatch((0, _session.setUserInfo)(-1));
          console.log(res);
        }
      });
    }

    // 只有登录后才能调用云函数和getUserInfo接口

  }, {
    key: "login",
    value: function login() {
      //1.判断登录态是否已经过期
      //2.获取code，每次进入小程序code都是不一样的
      //3.将code传给小程序后台，后台调用微信接口获取openid、session_key
      //4.后台根据openid、session_key生成自身的登录态，返回给前端
      //5.前端使用store将自身登录态设置后，方面后续的页面使用
      //store.dispatch(setCode('xxxyyy'));
      return new Promise(function (resolve, reject) {
        wx.checkSession({
          success: function success() {
            //没有过期
            console.log('success');
            resolve();
          },
          fail: function fail() {
            //过期了
            console.log('fail');
            wx.login({
              success: function success(res) {
                console.log(res);
                resolve(res);
                if (res.code) {} else {}
              },
              fail: function fail() {
                console.log(arguments);
                reject();
              }
            });
          }
        });
      });
    }
  }, {
    key: "getUserRegInfo",
    value: function getUserRegInfo() {
      //调用云函数
      return wx.cloud.callFunction({
        // 需调用的云函数名
        name: 'add',
        // 传给云函数的参数
        data: {
          a: 12,
          b: 19
        }
      }).then(function (result) {
        console.log(result);
        //调用云DB
        var openId = result.result.openId;

        var db = wx.cloud.database();
        var member_info = db.collection('member_info');
        return member_info.where({
          _openid: openId
        }).get().then(function (result) {
          console.log(result);
          store.dispatch((0, _session.setRegInfo)(_extends({}, result.data[0], {
            openId: openId
          })));
        });
      });
      //调用云DB

      /*
      添加
      member_info.add({
        data: {
          tel: '15811800344',
          insert_time: Date.now(),
          update_time: Date.now(),
        }
      }).then(res => {
        // 可以通过 res._id 获取创建的记录的 id
        console.log(res)
      })
      */
    }
  }, {
    key: "componentDidShow",
    value: function componentDidShow() {}
  }, {
    key: "componentDidHide",
    value: function componentDidHide() {}
  }, {
    key: "componentCatchError",
    value: function componentCatchError() {}
  }]);

  return _App;
}(_index.Component);

exports.default = _App;

App(require('./npm/@tarojs/taro-weapp/index.js').default.createApp(_App));