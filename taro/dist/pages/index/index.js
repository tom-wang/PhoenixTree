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

var _index6 = require("../../components/list/index.js");

var _index7 = _interopRequireDefault(_index6);

var _index8 = require("../../components/loadmore/index.js");

var _index9 = _interopRequireDefault(_index8);

var _index10 = require("../../components/tipsComponent/index.js");

var _index11 = _interopRequireDefault(_index10);

var _counter = require("../../actions/counter.js");

var _session = require("../../actions/session.js");

var _const = require("../../utils/const.js");

var Const = _interopRequireWildcard(_const);

var _index12 = require("../../utils/index.js");

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
    },
    setUserInfoList: function setUserInfoList(list) {
      dispatch((0, _session.setUserInfoList)(list));
    }
  };
}), _dec(_class = function (_Component) {
  _inherits(Index, _Component);

  function Index(props) {
    _classCallCheck(this, Index);

    var _this = _possibleConstructorReturn(this, (Index.__proto__ || Object.getPrototypeOf(Index)).call(this, props));

    _this.$usedState = ["userInfo", "userInfoList", "isLoading", "isNotAuth", "$$TipsComponent", "$$List", "$$LoadMore"];
    _this.$props = {
      TipsComponent: function TipsComponent() {
        return {
          $name: "TipsComponent",
          userInfo: this.state.userInfo,
          msg: ["使用该小程序需要得到你的许可", '我们确保不会侵犯你的隐私']
        };
      },
      List: function List() {
        return {
          $name: "List",
          userInfoList: this.state.userInfoList
        };
      },
      LoadMore: function LoadMore() {
        return {
          $name: "LoadMore",
          isEnd: true
        };
      }
    };
    _this.$components = {
      TipsComponent: _index11.default,
      List: _index7.default,
      LoadMore: _index9.default
    };

    _this.state = _this._createData();
    return _this;
  }

  _createClass(Index, [{
    key: "componentWillMount",
    value: function componentWillMount() {}
  }, {
    key: "onPullDownRefresh",
    value: function onPullDownRefresh() {
      this.fetchUserInfoList().then(function () {
        wx.stopPullDownRefresh();
      });
    }
  }, {
    key: "onShareAppMessage",
    value: function onShareAppMessage() {
      return {
        title: '同学，有空来喝一杯！'
      };
    }
  }, {
    key: "fetchUserInfoList",
    value: function fetchUserInfoList() {
      var _this2 = this;

      var db = wx.cloud.database();
      var member_info = db.collection('member_info');
      //取状态是2的用户数据，即审核通过的
      return member_info.where({
        state: Const.REG_STATUS_2
      }).get().then(function (result) {
        console.log('======', result);
        _this2.props.setUserInfoList(result.data);
      });
    }
  }, {
    key: "__event_onGetUserInfo",
    value: function __event_onGetUserInfo(e) {
      console.log(e);
      if (e.detail.userInfo) {
        this.props.setUserInfo(e.detail.userInfo);
      } else {
        (0, _index12.error)('授权失败');
      }
    }
  }, {
    key: "_createData",
    value: function _createData() {
      this.__state = arguments[0] || this.state || {};
      this.__props = arguments[1] || this.props || {};
      {
        var _props$session = this.__props.session,
            userInfo = _props$session.userInfo,
            regInfo = _props$session.regInfo,
            userInfoList = _props$session.userInfoList,
            userInfoLoading = _props$session.userInfoLoading,
            regInfoLoading = _props$session.regInfoLoading;
        // 如果授权通过了并且没有拉取过成员列表，则拉取成员列表

        if (Const.REG_STATUS_2 == regInfo.state && !userInfoList) {
          this.fetchUserInfoList();
        }
        //isLoading必须是布尔值
        var isLoading = !!(userInfoLoading || regInfoLoading);
        if (isLoading) {
          wx.showLoading({
            title: '拼命加载中...'
          });
        } else {
          wx.hideLoading();
        }
        // userInfo值为-1表示用户没有授权使用个人信息
        var isNotAuth = -1 === userInfo;
        if (isNotAuth || isLoading) {
          wx.hideTabBar();
        } else {
          wx.showTabBar();
        }

        if (isLoading) {}

        if (isNotAuth) {}

        Object.assign(this.__state, {
          userInfo: userInfo,
          userInfoList: userInfoList,
          isLoading: isLoading,
          isNotAuth: isNotAuth
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