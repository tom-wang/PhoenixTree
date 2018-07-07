"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _dec, _class;

var _index = require("../../npm/@tarojs/taro-weapp/index.js");

var _index2 = _interopRequireDefault(_index);

var _index3 = require("../../npm/@tarojs/redux/index.js");

var _index4 = require("../../components/avatar/index.js");

var _index5 = _interopRequireDefault(_index4);

var _counter = require("../../actions/counter.js");

var _session = require("../../actions/session.js");

var _const = require("../../utils/const.js");

var Const = _interopRequireWildcard(_const);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Index = (_dec = (0, _index3.connect)(function (_ref) {
  var counter = _ref.counter,
      session = _ref.session;
  return {
    counter: counter,
    session: session
  };
}, function (dispatch) {
  return {
    add: function add() {
      dispatch((0, _counter.add)());
    },
    dec: function dec() {
      dispatch((0, _counter.minus)());
    },
    asyncAdd: function asyncAdd() {
      dispatch((0, _counter.asyncAdd)());
    },
    setUserInfo: function setUserInfo(userInfo) {
      dispatch((0, _session.setUserInfo)(userInfo));
    }
  };
}), _dec(_class = function (_Component) {
  _inherits(Index, _Component);

  function Index(props) {
    _classCallCheck(this, Index);

    var _this = _possibleConstructorReturn(this, (Index.__proto__ || Object.getPrototypeOf(Index)).call(this, props));

    _this.$usedState = ["isLoading", "isNotAuth", "$$Avatar"];
    _this.$components = {
      Avatar: _index5.default
    };
    _this.$dynamicComponents = {
      $b67cf65c: function $b67cf65c() {
        var nodes = [{
          name: "Avatar",
          path: _index5.default,
          subscript: "",

          args: function args() {
            return {
              src: (0, _index.internal_safe_get)(__item, "userInfo.avatarUrl"),
              $path: "$b67cf65c"
            };
          }
        }];
        return {
          stateName: "$$Avatar",
          loopComponents: (0, _index.internal_dynamic_recursive)(_this, nodes, (0, _index.internal_safe_get)(_this.state, "$$Avatar"), "$b67cf65c")
        };
      }
    };
    return _this;
  }

  _createClass(Index, [{
    key: "componentWillMount",
    value: function componentWillMount() {}
  }, {
    key: "fetchUserInfoList",
    value: function fetchUserInfoList() {
      var db = wx.cloud.database();
      var member_info = db.collection('member_info');
      return member_info.get().then(function (result) {
        console.log('======', result);
      });
    }
  }, {
    key: "onGetUserInfo",
    value: function onGetUserInfo(e) {
      console.log(e.detail.userInfo);
      this.props.setUserInfo(e.detail.userInfo);
    }
  }, {
    key: "__event_onClick",
    value: function __event_onClick() {
      //跳转页面，但是不能跳转到tabBar页面
      //跳转tabBar页面，使用switchTab
      console.log('lalalal');
      //Taro.navigateTo({url: '/pages/me/index'})
      _index2.default.switchTab({
        url: '/pages/me/index'
      });
    }
  }, {
    key: "_createData",
    value: function _createData() {
      this.__state = arguments[0] || this.state || {};
      this.__props = arguments[1] || this.props || {};
      {
        var _props$session = this.__props.session,
            userInfo = _props$session.userInfo,
            regInfo = _props$session.regInfo;
        // 如果授权通过了，则拉取成员列表

        if (Const.REG_STATUS_2 == regInfo.state) {
          this.fetchUserInfoList();
        }
        //isLoading必须是布尔值
        var isLoading = !!(userInfo.loading || regInfo.loading);
        if (isLoading) {
          wx.showLoading({
            title: '拼命加载中...'
          });
          wx.hideTabBar();
        } else {
          wx.hideLoading();
          wx.showTabBar();
        }
        var isNotAuth = -1 === userInfo;

        if (isLoading) {}

        /*
        return -1 === userInfo ? <View>
          <Button openType="getUserInfo" size="mini" onGetUserInfo={this.onGetUserInfo.bind(this)}>进入新世界</Button>
        </View> : <View>
          
          <Button size="mini" onClick={this.onClick.bind(this)}>打开新页面</Button>
        </View>;
        */
        /*return (
          <View className='todo'>
            <button open-type="getUserInfo">授权</button>
            <Avatar count="7" src="https://s11.mogucdn.com/p2/170413/upload_86dkh4e886991g9lji7a6g5c530ji_400x400.jpg" />
            <Avatar count="7" src="https://s11.mogucdn.com/p2/170413/upload_86dkh4e886991g9lji7a6g5c530ji_400x400.jpg" />
            <Avatar count="7" src="https://s11.mogucdn.com/p2/170413/upload_86dkh4e886991g9lji7a6g5c530ji_400x400.jpg" />
            <Avatar count="7" src="https://s11.mogucdn.com/p2/170413/upload_86dkh4e886991g9lji7a6g5c530ji_400x400.jpg" />
            <Avatar count="7" src="https://s11.mogucdn.com/p2/170413/upload_86dkh4e886991g9lji7a6g5c530ji_400x400.jpg" />
            <Avatar count="7" src="https://s11.mogucdn.com/p2/170413/upload_86dkh4e886991g9lji7a6g5c530ji_400x400.jpg" />
            <Avatar count="7" src="https://s11.mogucdn.com/p2/170413/upload_86dkh4e886991g9lji7a6g5c530ji_400x400.jpg" />
            <Avatar count="7" src="https://s11.mogucdn.com/p2/170413/upload_86dkh4e886991g9lji7a6g5c530ji_400x400.jpg" />
            <Avatar count="7" src="https://s11.mogucdn.com/p2/170413/upload_86dkh4e886991g9lji7a6g5c530ji_400x400.jpg" />
            <Avatar count="7" src="https://s11.mogucdn.com/p2/170413/upload_86dkh4e886991g9lji7a6g5c530ji_400x400.jpg" />
            <Button className='add_btn' onClick={this.props.add}>+</Button>
            <Button className='dec_btn' onClick={this.props.dec}>-</Button>
            <Button className='dec_btn' onClick={this.props.asyncAdd}>async</Button>
            <View>{this.props.counter.num}</View>
          </View>
        )
        */
        if (isNotAuth) {}

        Object.assign(this.__state, {
          isLoading: isLoading,
          isNotAuth: isNotAuth,
          $$Avatar: [{
            $path: "$b67cf65c_0",
            src: userInfo.avatarUrl
          }]
        });
        this.__state.__data = Object.assign({}, this.__state);
        return this.__state;
      }
      delete this.__props;
      var __state = this.__state;
      delete this.__state;
      return __state;
    }
  }]);

  return Index;
}(_index.Component)) || _class);
exports.default = Index;

Page(require('../../npm/@tarojs/taro-weapp/index.js').default.createPage(Index, {
  path: 'src/pages/index/index.js'
}));