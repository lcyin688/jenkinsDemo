
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/Tips/TipsCtrl.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '8ae30fCf3BOT5yZGmirBXJi', 'TipsCtrl');
// scripts/Tips/TipsCtrl.js

"use strict";

cc.Class({
  "extends": cc.Component,
  properties: {
    content: require('LabelLocalized')
  },
  // onLoad () {},
  onDestroySelf: function onDestroySelf() {
    this.node.destroy();
  },
  setContent: function setContent(str) {
    if (str) {
      this.content.textKey = str;
    }
  }
});

cc._RF.pop();
                    }
                    if (nodeEnv) {
                        __define(__module.exports, __require, __module);
                    }
                    else {
                        __quick_compile_project__.registerModuleFunc(__filename, function () {
                            __define(__module.exports, __require, __module);
                        });
                    }
                })();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHRzL1RpcHMvVGlwc0N0cmwuanMiXSwibmFtZXMiOlsiY2MiLCJDbGFzcyIsIkNvbXBvbmVudCIsInByb3BlcnRpZXMiLCJjb250ZW50IiwicmVxdWlyZSIsIm9uRGVzdHJveVNlbGYiLCJub2RlIiwiZGVzdHJveSIsInNldENvbnRlbnQiLCJzdHIiLCJ0ZXh0S2V5Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBQSxFQUFFLENBQUNDLEtBQUgsQ0FBUztFQUNMLFdBQVNELEVBQUUsQ0FBQ0UsU0FEUDtFQUdMQyxVQUFVLEVBQUU7SUFDUkMsT0FBTyxFQUFFQyxPQUFPLENBQUMsZ0JBQUQ7RUFEUixDQUhQO0VBT0w7RUFDQUMsYUFSSywyQkFRWTtJQUNiLEtBQUtDLElBQUwsQ0FBVUMsT0FBVjtFQUNILENBVkk7RUFZTEMsVUFaSyxzQkFZT0MsR0FaUCxFQVlZO0lBQ2IsSUFBSUEsR0FBSixFQUFTO01BQ0wsS0FBS04sT0FBTCxDQUFhTyxPQUFiLEdBQXVCRCxHQUF2QjtJQUNIO0VBQ0o7QUFoQkksQ0FBVCIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiY2MuQ2xhc3Moe1xuICAgIGV4dGVuZHM6IGNjLkNvbXBvbmVudCxcblxuICAgIHByb3BlcnRpZXM6IHtcbiAgICAgICAgY29udGVudDogcmVxdWlyZSgnTGFiZWxMb2NhbGl6ZWQnKVxuICAgIH0sXG5cbiAgICAvLyBvbkxvYWQgKCkge30sXG4gICAgb25EZXN0cm95U2VsZiAoKSB7XG4gICAgICAgIHRoaXMubm9kZS5kZXN0cm95KCk7XG4gICAgfSxcblxuICAgIHNldENvbnRlbnQgKHN0cikge1xuICAgICAgICBpZiAoc3RyKSB7XG4gICAgICAgICAgICB0aGlzLmNvbnRlbnQudGV4dEtleSA9IHN0cjtcbiAgICAgICAgfVxuICAgIH1cbn0pO1xuIl19