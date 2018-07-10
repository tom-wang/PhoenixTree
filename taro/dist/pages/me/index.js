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

var _index6 = require("../../components/inputComponent/index.js");

var _index7 = _interopRequireDefault(_index6);

var _counter = require("../../actions/counter.js");

var _session = require("../../actions/session.js");

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

    _this.$usedState = ["userInfo", "chineseName", "gender", "city", "tel", "$$Avatar", "$$InputComponent", "$$InputComponent_1", "$$InputComponent_2", "$$InputComponent_3"];
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
          value: this.state.chineseName
        };
      },
      InputComponent_1: function InputComponent_1() {
        return {
          $name: "InputComponent_1",
          type: "text",
          title: "\u6027\u522B",
          placeholder: "\u6027\u522B",
          value: this.state.gender
        };
      },
      InputComponent_2: function InputComponent_2() {
        return {
          $name: "InputComponent_2",
          type: "text",
          title: "\u57CE\u5E02",
          placeholder: "\u5E38\u4F4F\u5730\u57CE\u5E02",
          value: this.state.city
        };
      },
      InputComponent_3: function InputComponent_3() {
        return {
          $name: "InputComponent_3",
          type: "number",
          title: "\u624B\u673A",
          placeholder: "\u8BF7\u8F93\u5165\u624B\u673A\u53F7",
          value: this.state.tel,
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

    _this.state = _this._createData();
    return _this;
  }

  _createClass(Index, [{
    key: "onGetUserInfo",
    value: function onGetUserInfo(e) {
      console.log(e.detail.userInfo);
      this.props.setUserInfo(e.detail.userInfo);
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

        var genderConst = ['未知', '男', '女'];
        var chineseName = regInfo.chineseName || '';
        var gender = genderConst[regInfo.gender || userInfo.gender];
        var city = regInfo.city || userInfo.city || '未知';

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
        var tel = regInfo.tel || '';
        Object.assign(this.__state, {
          userInfo: userInfo,
          chineseName: chineseName,
          gender: gender,
          city: city,
          tel: tel
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