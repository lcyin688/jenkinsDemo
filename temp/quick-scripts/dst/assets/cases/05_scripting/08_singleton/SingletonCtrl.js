
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/cases/05_scripting/08_singleton/SingletonCtrl.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'fcfefvjPgdGEKnfOwuoIVJD', 'SingletonCtrl');
// cases/05_scripting/08_singleton/SingletonCtrl.js

"use strict";

var Singleton = require("Singleton");

cc.Class({
  "extends": cc.Component,
  properties: {},
  start: function start() {
    var node = new cc.Node("Monster");
    var sprite = node.addComponent(cc.Sprite);
    sprite.spriteFrame = Singleton.instance.monsterIcon;
    node.parent = this.node;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9jYXNlcy8wNV9zY3JpcHRpbmcvMDhfc2luZ2xldG9uL1NpbmdsZXRvbkN0cmwuanMiXSwibmFtZXMiOlsiU2luZ2xldG9uIiwicmVxdWlyZSIsImNjIiwiQ2xhc3MiLCJDb21wb25lbnQiLCJwcm9wZXJ0aWVzIiwic3RhcnQiLCJub2RlIiwiTm9kZSIsInNwcml0ZSIsImFkZENvbXBvbmVudCIsIlNwcml0ZSIsInNwcml0ZUZyYW1lIiwiaW5zdGFuY2UiLCJtb25zdGVySWNvbiIsInBhcmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxJQUFJQSxTQUFTLEdBQUdDLE9BQU8sQ0FBQyxXQUFELENBQXZCOztBQUVBQyxFQUFFLENBQUNDLEtBQUgsQ0FBUztFQUNMLFdBQVNELEVBQUUsQ0FBQ0UsU0FEUDtFQUdMQyxVQUFVLEVBQUUsRUFIUDtFQU9MQyxLQUFLLEVBQUUsaUJBQVk7SUFDZixJQUFJQyxJQUFJLEdBQUcsSUFBSUwsRUFBRSxDQUFDTSxJQUFQLENBQVksU0FBWixDQUFYO0lBQ0EsSUFBSUMsTUFBTSxHQUFHRixJQUFJLENBQUNHLFlBQUwsQ0FBa0JSLEVBQUUsQ0FBQ1MsTUFBckIsQ0FBYjtJQUNBRixNQUFNLENBQUNHLFdBQVAsR0FBcUJaLFNBQVMsQ0FBQ2EsUUFBVixDQUFtQkMsV0FBeEM7SUFDQVAsSUFBSSxDQUFDUSxNQUFMLEdBQWMsS0FBS1IsSUFBbkI7RUFDSDtBQVpJLENBQVQiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbInZhciBTaW5nbGV0b24gPSByZXF1aXJlKFwiU2luZ2xldG9uXCIpO1xuXG5jYy5DbGFzcyh7XG4gICAgZXh0ZW5kczogY2MuQ29tcG9uZW50LFxuXG4gICAgcHJvcGVydGllczoge1xuXG4gICAgfSxcblxuICAgIHN0YXJ0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBub2RlID0gbmV3IGNjLk5vZGUoXCJNb25zdGVyXCIpO1xuICAgICAgICB2YXIgc3ByaXRlID0gbm9kZS5hZGRDb21wb25lbnQoY2MuU3ByaXRlKTtcbiAgICAgICAgc3ByaXRlLnNwcml0ZUZyYW1lID0gU2luZ2xldG9uLmluc3RhbmNlLm1vbnN0ZXJJY29uO1xuICAgICAgICBub2RlLnBhcmVudCA9IHRoaXMubm9kZTtcbiAgICB9XG59KTtcbiJdfQ==