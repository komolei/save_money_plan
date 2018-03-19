"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _assign = require('../../vendor/babel-runtime/core-js/object/assign');

var _assign2 = _interopRequireDefault(_assign);

var _getPrototypeOf = require('../../vendor/babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('../../vendor/babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _possibleConstructorReturn2 = require('../../vendor/babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('../../vendor/babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _wcf = require('../../vendor/weichen-weapp-framework/wcf');

var _wcf2 = _interopRequireDefault(_wcf);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _new_plan = {
  _bind: {},
  _event: {},
  config: {
    navigationBarTitleText: "新建计划",
    backgroundTextStyle: "light",
    navigationBarBackgroundColor: "#000",
    navigationBarTextStyle: "#fff"
  },
  data: function data() {
    return {
      computedMoney: 444,
      imgUrl: "https://image.vdongchina.com/M00/0E/A4/ZSUkmVqrFhuEU1wRAAAAAABIWp4102.jpg" // 用来存放激励的图片
    };
  },

  methods: {
    toCard: function toCard(target) {
      wx.navigateTo({
        url: "../"
      });
    },
    showToast: function showToast(text) {
      wx.showToast({
        title: text
      });
    }
  },
  onLoad: function onLoad() {
    // this.showToast(this.word);
  }
};

var New_plan = function (_core$PageClass) {
  (0, _inherits3.default)(New_plan, _core$PageClass);

  function New_plan() {
    (0, _classCallCheck3.default)(this, New_plan);
    return (0, _possibleConstructorReturn3.default)(this, (New_plan.__proto__ || (0, _getPrototypeOf2.default)(New_plan)).apply(this, arguments));
  }

  return New_plan;
}(_wcf2.default.PageClass);

exports.default = New_plan;


_new_plan.constructor = New_plan;
(0, _assign2.default)(New_plan.prototype, _new_plan);

Page(_wcf2.default.createPage(New_plan));