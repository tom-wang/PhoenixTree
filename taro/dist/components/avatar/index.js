"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _index = require("../../npm/@tarojs/taro-weapp/index.js");

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Avatar = function (_Component) {
  _inherits(Avatar, _Component);

  function Avatar(props) {
    _classCallCheck(this, Avatar);

    var _this = _possibleConstructorReturn(this, (Avatar.__proto__ || Object.getPrototypeOf(Avatar)).call(this, props));

    _this.$usedState = ["anonymousState__temp", "anonymousState__temp2", "isValidSrc"];
    _this.$props = {};
    _this.$components = {};

    _this.state = _this._createData();
    return _this;
  }

  _createClass(Avatar, [{
    key: "__event_Avatar__onClick",
    value: function __event_Avatar__onClick(event) {
      console.log(event);
      //var detail = event.detail;
      //var option = {};
      //this.triggerEvent('click', detail, option);
    }
  }, {
    key: "_createData",
    value: function _createData() {
      this.__state = arguments[0] || this.state || {};
      this.__props = arguments[1] || this.props || {};
      {
        var _props = this.__props,
            src = _props.src,
            mold = _props.mold;

        var isValidSrc = !!src;
        var anonymousState__temp = "avatar__pic avatar__mold--" + mold;
        var anonymousState__temp2 = "background-image: url(" + src + "); background-repeat: no-repeat; background-position: center center; background-size: cover";
        Object.assign(this.__state, {
          anonymousState__temp: anonymousState__temp,
          anonymousState__temp2: anonymousState__temp2,
          isValidSrc: isValidSrc
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

  return Avatar;
}(_index.Component);

Avatar.defaultProps = {
  src: '',
  mold: 'circle'
};
exports.default = Avatar;