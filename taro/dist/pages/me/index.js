"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _dec, _class;

var _index = require("../../npm/@tarojs/taro-weapp/index.js");

var _index2 = _interopRequireDefault(_index);

var _index3 = require("../../npm/@tarojs/redux/index.js");

var _index4 = require("../../components/avatar/index.js");

var _index5 = _interopRequireDefault(_index4);

var _index6 = require("../../components/inputComponent/index.js");

var _index7 = _interopRequireDefault(_index6);

var _counter = require("../../actions/counter.js");

var _session = require("../../actions/session.js");

var _index8 = require("../../utils/index.js");

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
    //页面constructor执行是比较早的，不能依赖这里的props来设置state


    _this.$usedState = ["userInfo", "chineseName", "gender", "city", "tel", "authorized", "$$Avatar", "$$InputComponent", "$$InputComponent_1", "$$InputComponent_2", "$$InputComponent_3"];
    _this.$props = {
      Avatar: function Avatar() {
        return {
          $name: "Avatar",
          src: (0, _index.internal_safe_get)(this.state, "userInfo.avatarUrl")
        };
      },
      InputComponent: function InputComponent() {
        return {
          $name: "InputComponent",
          type: "text",
          title: "\u59D3\u540D",
          placeholder: "\u4E2D\u6587\u5168\u540D",
          value: this.state.chineseName,
          onInput: this.onInput.bind(this, 'chineseName')
        };
      },
      InputComponent_1: function InputComponent_1() {
        return {
          $name: "InputComponent_1",
          type: "text",
          title: "\u6027\u522B",
          placeholder: "\u6027\u522B",
          value: this.state.gender,
          onInput: this.onInput.bind(this, 'gender')
        };
      },
      InputComponent_2: function InputComponent_2() {
        return {
          $name: "InputComponent_2",
          type: "text",
          title: "\u57CE\u5E02",
          placeholder: "\u5E38\u4F4F\u5730\u57CE\u5E02",
          value: this.state.city,
          onInput: this.onInput.bind(this, 'city')
        };
      },
      InputComponent_3: function InputComponent_3() {
        return {
          $name: "InputComponent_3",
          type: "number",
          title: "\u624B\u673A",
          placeholder: "\u8BF7\u8F93\u5165\u624B\u673A\u53F7",
          value: this.state.tel,
          onInput: this.onInput.bind(this, 'tel'),
          src: "https://s10.mogucdn.com/mlcdn/c45406/171025_7abllhkc011ka5kici7532af6202g_28x40.png",
          maxlength: "11"
        };
      }
    };
    _this.$components = {
      Avatar: _index5.default,
      InputComponent: _index7.default,
      InputComponent_1: _index7.default,
      InputComponent_2: _index7.default,
      InputComponent_3: _index7.default
    };

    _this.state = {
      chineseName: '',
      gender: '',
      city: '',
      tel: '',
      authorized: 1
    };
    _this.state = _this._createData();
    return _this;
  }

  _createClass(Index, [{
    key: "componentWillMount",
    value: function componentWillMount() {
      var _props$session = this.props.session,
          userInfo = _props$session.userInfo,
          regInfo = _props$session.regInfo;

      var genderConst = ['', '男', '女'];
      var chineseName = regInfo.chineseName || '';
      var gender = genderConst[regInfo.gender || userInfo.gender];
      var city = regInfo.city || userInfo.city || '';
      var tel = regInfo.tel || '';
      var authorized = regInfo.authorized || 1;
      this.setState({
        chineseName: chineseName,
        gender: gender,
        city: city,
        tel: tel,
        authorized: authorized
      });
    }
  }, {
    key: "__event_onSubmit",
    value: function __event_onSubmit() {
      var hasReg = this.props.session.hasReg;

      if (!this.checkInfo()) return;
      if (hasReg) {
        this.updateInfo();
      } else {
        this.addInfo();
      }
    }
  }, {
    key: "checkInfo",
    value: function checkInfo() {
      var _state = this.state,
          chineseName = _state.chineseName,
          gender = _state.gender,
          city = _state.city,
          tel = _state.tel,
          authorized = _state.authorized;

      if (!chineseName) {
        (0, _index8.error)('缺少姓名');
        return false;
      }
      if (-1 == ['男', '女'].indexOf(gender)) {
        (0, _index8.error)('错误的性别');
        return false;
      }
      if (!city) {
        (0, _index8.error)('缺少城市');
        return false;
      }
      if (!/^1(3|4|5|7|8)\d{9}$/.test(tel)) {
        (0, _index8.error)('错误的手机号');
        return false;
      }
      return true;
    }
  }, {
    key: "addInfo",
    value: function addInfo() {
      var _state2 = this.state,
          chineseName = _state2.chineseName,
          gender = _state2.gender,
          city = _state2.city,
          tel = _state2.tel,
          authorized = _state2.authorized;
      var _props$session2 = this.props.session,
          regInfo = _props$session2.regInfo,
          userInfo = _props$session2.userInfo;

      var data = _extends({}, userInfo, {
        chineseName: chineseName,
        gender: gender,
        city: city,
        tel: tel,
        authorized: authorized,
        insertTime: Date.now(),
        updateTime: Date.now()
      });
      this.insertOrUpdateDB(data);
    }
  }, {
    key: "insertOrUpdateDB",
    value: function insertOrUpdateDB() {
      var db = wx.cloud.database();
      var member_info = db.collection('member_info');
      return member_info.where({
        _openid: openId
      }).get().then(function (result) {
        console.log(result);
        store.dispatch(setHasReg(!!result.data.length));
        store.dispatch(setRegInfo(_extends({}, result.data[0], {
          openId: openId
        })));
      });
    }
  }, {
    key: "updateInfo",
    value: function updateInfo() {
      var _state3 = this.state,
          chineseName = _state3.chineseName,
          gender = _state3.gender,
          city = _state3.city,
          tel = _state3.tel,
          authorized = _state3.authorized;
      var _props$session3 = this.props.session,
          regInfo = _props$session3.regInfo,
          userInfo = _props$session3.userInfo;

      var data = _extends({}, regInfo, userInfo, {
        chineseName: chineseName,
        gender: gender,
        city: city,
        tel: tel,
        authorized: authorized,
        updateTime: Date.now()
      });
      this.insertOrUpdateDB(data);
    }
  }, {
    key: "__event_onChange",
    value: function __event_onChange(event) {
      console.log(event);
      this.state.authorized = event.detail.value ? 1 : 0;
    }
  }, {
    key: "onInput",
    value: function onInput(dataType, event) {
      console.log(dataType, event);
      this.state[dataType] = event.detail.value;
      /*
      this.setState({
        [dataType]: event.detail.value
      });
      */
    }
  }, {
    key: "_createData",
    value: function _createData() {
      this.__state = arguments[0] || this.state || {};
      this.__props = arguments[1] || this.props || {};
      {
        var userInfo = this.__props.session.userInfo;
        var _state4 = this.__state,
            chineseName = _state4.chineseName,
            gender = _state4.gender,
            city = _state4.city,
            tel = _state4.tel,
            authorized = _state4.authorized;

        Object.assign(this.__state, {
          userInfo: userInfo
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
  path: 'src/pages/me/index.js'
}));