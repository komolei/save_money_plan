"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _assign = require('./vendor/babel-runtime/core-js/object/assign');

var _assign2 = _interopRequireDefault(_assign);

var _classCallCheck2 = require('./vendor/babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _regenerator = require('./vendor/babel-runtime/regenerator/index.js');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require('./vendor/babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _keys = require('./vendor/babel-runtime/core-js/object/keys');

var _keys2 = _interopRequireDefault(_keys);

var _promise = require('./vendor/babel-runtime/core-js/promise');

var _promise2 = _interopRequireDefault(_promise);

var _wcf = require('./vendor/weichen-weapp-framework/wcf');

var _wcf2 = _interopRequireDefault(_wcf);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _app = {
  config: {
    pages: [
    // "pages/save_money_plan/save_money_plan",
    "pages/new_plan/new_plan", "pages/index/index", "pages/logs/logs"],
    window: {
      backgroundTextStyle: "light",
      navigationBarBackgroundColor: "#fff",
      navigationBarTitleText: "WeChat",
      navigationBarTextStyle: "black"
    }
  },
  data: function data() {
    return {
      globalData: {
        userInfo: null,
        datas: []
      }
    };
  },

  methods: {
    judge: function judge() {
      var that = this;
      return new _promise2.default(function (resolve, rej) {
        wx.getSetting({
          success: function success(res) {
            console.log("wx.getSetting", res);
            if (!(0, _keys2.default)(res.authSetting).length || !res.authSetting["scope.writePhotosAlbum"]) {
              // 直接默认用户的授权
              wx.authorize({
                scope: "scope.writePhotosAlbum",
                success: function success() {
                  // resolve("授权成功");
                  resolve(1);
                },
                fail: function fail() {
                  wx.showModal({
                    title: "警告",
                    content: "您点击了拒绝授权，将无法将名片保存到相册中。点击取消,可以开启保存功能",
                    success: function success(res) {
                      if (res.confirm) {
                        // rej("确认授权失败");
                        rej(0);
                        // resolve(0);
                      } else if (res.cancel) {
                        // 引导用户进行授权
                        wx.openSetting({
                          success: function success(res) {
                            res.authSetting = {
                              "scope.writePhotosAlbum": true
                            };
                            // 直接保存
                            // that.saveCard();
                            // resolve("再一次请求授权成功");
                            resolve(1);
                          },
                          fail: function fail() {
                            // rej("再一次请求授权失败");
                            rej(0);
                          }
                        });
                      }
                    }
                  });
                  // rej("授权失败");
                  rej(0);
                }
              });
            } else {
              // resolve("之前授权过");
              resolve(1);
            }
          },
          fail: function fail(res) {
            wx.showModal({
              title: "提示",
              content: "查询用户设置失败"
            });
          }
        });
      });
    },
    getUserInfo: function getUserInfo() {}
  },
  onLaunch: function onLaunch() {
    var _this = this;

    return (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee() {
      var logs;
      return _regenerator2.default.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              // await this.judge();
              //调用API从本地缓存中获取数据
              logs = wx.getStorageSync("logs") || [];

              logs.unshift(Date.now());
              wx.setStorageSync("logs", logs);

            case 3:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, _this);
    }))();
  }
};

var AppClass = function AppClass() {
  (0, _classCallCheck3.default)(this, AppClass);
};

exports.default = AppClass;


_app.constructor = AppClass;
(0, _assign2.default)(AppClass.prototype, _app);

App(_wcf2.default.createApp(AppClass));