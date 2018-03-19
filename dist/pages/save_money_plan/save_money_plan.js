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

var _save_money_plan = {
  _bind: {},
  _event: {},
  config: {
    navigationBarTitleText: "存钱计划",
    backgroundTextStyle: "light",
    navigationBarBackgroundColor: "#000",
    navigationBarTextStyle: "#fff"
  },
  data: function data() {
    return {
      word: "hello~",
      toast: "\u6240\u6709\u7684\u4F1F\u5927\u6765\u81EA\u6700\u521D\u7684\u4E00\u70B9\u70B9\u7684\u51B2\u52A8\u548C\u65E5\u76CA\u52A0\u6CB9\u7684\u79EF\u7D2F",
      animationData: {},
      user: {
        unfinishedPlans: [
        // 未完成的计划
        //   plan: 计划
        {
          img: "https://image.vdongchina.com/M00/0E/A4/ZSUkmVqrFhuEU1wRAAAAAABIWp4102.jpg", // 用来存放激励的图片
          target_money: 60000000, // 目标金额
          plan_time: "2018-4-15", // 计划时间
          target: "\u4E70\u8F66\u8C01\u8C01\u8C01\u8C01\u8C01\u8C01\u8C01\u8C01\u8C01\u6C34\u6C34\u6C34\u6C34\u6C34\u6C34\u6C34\u6C34\u6C34\u6C34\u6C34\u6C34\u6C34\u6C34\u6C34\u6C34\u6C34\u6C34\u6C34\u6C34\u6C34\u6C34\u6C34\u6C34\u6C34\u6C34\u6C34\u6C34\u6C34\u6C34\u6C34\u6C34\u6C34\u6C34\u6C34\u6C34\u6C34\u6C34\u6C34\u6C34\u6C34\u6C34\u6C34\u6C34\u6C34\u6C34\u6C34\u6C34\u6C34\u6C34\u6C34\u6C34", // 计划
          num: 20, // 完成进度
          saved_money: 0, // 已经存放的金额
          process: [
          // 进程
          {
            single: 4000, // 每次存放的金额
            time: "2018-4-1" // 每次存放的金额时间
          }]
          // }
        }],
        finishedPlans: [{
          img: "https://image.vdongchina.com/M00/0E/A4/ZSUkmVqrFhuEU1wRAAAAAABIWp4102.jpg", // 用来存放激励的图片
          target_money: 60000000, // 目标金额
          plan_time: "2018-4-15", // 计划时间
          target: "\u4E70\u8F66\u8C01\u8C01\u8C01\u8C01\u8C01\u8C01\u8C01\u8C01\u8C01\u6C34\u6C34\u6C34\u6C34\u6C34\u6C34\u6C34\u6C34\u6C34\u6C34\u6C34\u6C34\u6C34\u6C34\u6C34\u6C34\u6C34\u6C34\u6C34\u6C34\u6C34\u6C34\u6C34\u6C34\u6C34\u6C34\u6C34\u6C34\u6C34\u6C34\u6C34\u6C34\u6C34\u6C34\u6C34\u6C34\u6C34\u6C34\u6C34\u6C34\u6C34\u6C34\u6C34\u6C34\u6C34\u6C34\u6C34\u6C34\u6C34\u6C34\u6C34\u6C34", // 计划
          num: 100, // 完成进度
          saved_money: 0,
          process: [
          // 进程
          {
            single: 4000, // 每次存放的金额
            time: "2018-4-1" // 每次存放的金额时间
          }]
        }]
      }
    };
  },

  methods: {
    toCard: function toCard(target) {
      wx.navigateTo({
        url: "../" + target + "/" + target
      });
    },
    showToast: function showToast(text) {
      wx.showToast({
        title: text
      });
    },
    move: function move() {
      var animation = wx.createAnimation({
        duration: 3000,
        timingFunction: "ease",
        delay: 0
      });
      animation.scale(2, 2).rotate(45).step();
      this.animation = animation;
      this.animationData = animation.export();
    }
  },
  onLoad: function onLoad() {
    this.showToast(this.word);
  }
};

var Save_money_plan = function (_core$PageClass) {
  (0, _inherits3.default)(Save_money_plan, _core$PageClass);

  function Save_money_plan() {
    (0, _classCallCheck3.default)(this, Save_money_plan);
    return (0, _possibleConstructorReturn3.default)(this, (Save_money_plan.__proto__ || (0, _getPrototypeOf2.default)(Save_money_plan)).apply(this, arguments));
  }

  return Save_money_plan;
}(_wcf2.default.PageClass);

exports.default = Save_money_plan;


_save_money_plan.constructor = Save_money_plan;
(0, _assign2.default)(Save_money_plan.prototype, _save_money_plan);

Page(_wcf2.default.createPage(Save_money_plan));