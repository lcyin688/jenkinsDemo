
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/cases/05_scripting/02_prefab/MonsterPrefab.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '8cb4dm2QEpJ7pnaS/cjrvgF', 'MonsterPrefab');
// cases/05_scripting/02_prefab/MonsterPrefab.js

"use strict";

var Helpers = require('Helpers');

cc.Class({
  "extends": cc.Component,
  properties: {
    spriteList: {
      "default": [],
      type: [cc.SpriteFrame]
    }
  },
  // use this for initialization
  onLoad: function onLoad() {
    var randomIdx = Helpers.getRandomInt(0, this.spriteList.length);
    var sprite = this.getComponent(cc.Sprite);
    sprite.spriteFrame = this.spriteList[randomIdx];
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9jYXNlcy8wNV9zY3JpcHRpbmcvMDJfcHJlZmFiL01vbnN0ZXJQcmVmYWIuanMiXSwibmFtZXMiOlsiSGVscGVycyIsInJlcXVpcmUiLCJjYyIsIkNsYXNzIiwiQ29tcG9uZW50IiwicHJvcGVydGllcyIsInNwcml0ZUxpc3QiLCJ0eXBlIiwiU3ByaXRlRnJhbWUiLCJvbkxvYWQiLCJyYW5kb21JZHgiLCJnZXRSYW5kb21JbnQiLCJsZW5ndGgiLCJzcHJpdGUiLCJnZXRDb21wb25lbnQiLCJTcHJpdGUiLCJzcHJpdGVGcmFtZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxJQUFJQSxPQUFPLEdBQUdDLE9BQU8sQ0FBQyxTQUFELENBQXJCOztBQUVBQyxFQUFFLENBQUNDLEtBQUgsQ0FBUztFQUNMLFdBQVNELEVBQUUsQ0FBQ0UsU0FEUDtFQUdMQyxVQUFVLEVBQUU7SUFDUkMsVUFBVSxFQUFFO01BQ1IsV0FBUyxFQUREO01BRVJDLElBQUksRUFBRSxDQUFDTCxFQUFFLENBQUNNLFdBQUo7SUFGRTtFQURKLENBSFA7RUFVTDtFQUNBQyxNQUFNLEVBQUUsa0JBQVk7SUFDaEIsSUFBSUMsU0FBUyxHQUFHVixPQUFPLENBQUNXLFlBQVIsQ0FBcUIsQ0FBckIsRUFBd0IsS0FBS0wsVUFBTCxDQUFnQk0sTUFBeEMsQ0FBaEI7SUFDQSxJQUFJQyxNQUFNLEdBQUcsS0FBS0MsWUFBTCxDQUFrQlosRUFBRSxDQUFDYSxNQUFyQixDQUFiO0lBQ0FGLE1BQU0sQ0FBQ0csV0FBUCxHQUFxQixLQUFLVixVQUFMLENBQWdCSSxTQUFoQixDQUFyQjtFQUNIO0FBZkksQ0FBVCIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsidmFyIEhlbHBlcnMgPSByZXF1aXJlKCdIZWxwZXJzJyk7XG5cbmNjLkNsYXNzKHtcbiAgICBleHRlbmRzOiBjYy5Db21wb25lbnQsXG5cbiAgICBwcm9wZXJ0aWVzOiB7XG4gICAgICAgIHNwcml0ZUxpc3Q6IHtcbiAgICAgICAgICAgIGRlZmF1bHQ6IFtdLFxuICAgICAgICAgICAgdHlwZTogW2NjLlNwcml0ZUZyYW1lXVxuICAgICAgICB9XG4gICAgfSxcblxuICAgIC8vIHVzZSB0aGlzIGZvciBpbml0aWFsaXphdGlvblxuICAgIG9uTG9hZDogZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgcmFuZG9tSWR4ID0gSGVscGVycy5nZXRSYW5kb21JbnQoMCwgdGhpcy5zcHJpdGVMaXN0Lmxlbmd0aCk7XG4gICAgICAgIHZhciBzcHJpdGUgPSB0aGlzLmdldENvbXBvbmVudChjYy5TcHJpdGUpO1xuICAgICAgICBzcHJpdGUuc3ByaXRlRnJhbWUgPSB0aGlzLnNwcml0ZUxpc3RbcmFuZG9tSWR4XTtcbiAgICB9XG5cbn0pO1xuIl19