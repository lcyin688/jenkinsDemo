
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/Global/AdaptiveSprite.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '4edf1JTF/BHIKZVY3FaAqsT', 'AdaptiveSprite');
// scripts/Global/AdaptiveSprite.js

"use strict";

cc.Class({
  "extends": cc.Component,
  properties: {
    padding: 20,
    label: {
      "default": null,
      type: cc.Node
    },
    backgroup: {
      "default": null,
      type: cc.Node
    }
  },
  update: function update() {
    if (this.backgroup.width !== this.label.width) {
      this.backgroup.width = this.label.width + this.padding;
    }

    if (this.backgroup.height !== this.label.height) {
      this.backgroup.height = this.label.height + this.padding;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHRzL0dsb2JhbC9BZGFwdGl2ZVNwcml0ZS5qcyJdLCJuYW1lcyI6WyJjYyIsIkNsYXNzIiwiQ29tcG9uZW50IiwicHJvcGVydGllcyIsInBhZGRpbmciLCJsYWJlbCIsInR5cGUiLCJOb2RlIiwiYmFja2dyb3VwIiwidXBkYXRlIiwid2lkdGgiLCJoZWlnaHQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUFBLEVBQUUsQ0FBQ0MsS0FBSCxDQUFTO0VBQ0wsV0FBU0QsRUFBRSxDQUFDRSxTQURQO0VBR0xDLFVBQVUsRUFBRTtJQUVSQyxPQUFPLEVBQUUsRUFGRDtJQUlSQyxLQUFLLEVBQUU7TUFDSCxXQUFTLElBRE47TUFFSEMsSUFBSSxFQUFFTixFQUFFLENBQUNPO0lBRk4sQ0FKQztJQVNSQyxTQUFTLEVBQUU7TUFDUCxXQUFTLElBREY7TUFFUEYsSUFBSSxFQUFFTixFQUFFLENBQUNPO0lBRkY7RUFUSCxDQUhQO0VBbUJMRSxNQUFNLEVBQUUsa0JBQVk7SUFDaEIsSUFBSSxLQUFLRCxTQUFMLENBQWVFLEtBQWYsS0FBeUIsS0FBS0wsS0FBTCxDQUFXSyxLQUF4QyxFQUErQztNQUMzQyxLQUFLRixTQUFMLENBQWVFLEtBQWYsR0FBdUIsS0FBS0wsS0FBTCxDQUFXSyxLQUFYLEdBQW1CLEtBQUtOLE9BQS9DO0lBQ0g7O0lBQ0QsSUFBSSxLQUFLSSxTQUFMLENBQWVHLE1BQWYsS0FBMEIsS0FBS04sS0FBTCxDQUFXTSxNQUF6QyxFQUFpRDtNQUM3QyxLQUFLSCxTQUFMLENBQWVHLE1BQWYsR0FBd0IsS0FBS04sS0FBTCxDQUFXTSxNQUFYLEdBQW9CLEtBQUtQLE9BQWpEO0lBQ0g7RUFDSjtBQTFCSSxDQUFUIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJjYy5DbGFzcyh7XG4gICAgZXh0ZW5kczogY2MuQ29tcG9uZW50LFxuXG4gICAgcHJvcGVydGllczoge1xuXG4gICAgICAgIHBhZGRpbmc6IDIwLFxuXG4gICAgICAgIGxhYmVsOiB7XG4gICAgICAgICAgICBkZWZhdWx0OiBudWxsLFxuICAgICAgICAgICAgdHlwZTogY2MuTm9kZVxuICAgICAgICB9LFxuXG4gICAgICAgIGJhY2tncm91cDoge1xuICAgICAgICAgICAgZGVmYXVsdDogbnVsbCxcbiAgICAgICAgICAgIHR5cGU6IGNjLk5vZGVcbiAgICAgICAgfVxuXG4gICAgfSxcblxuICAgIHVwZGF0ZTogZnVuY3Rpb24gKCkge1xuICAgICAgICBpZiAodGhpcy5iYWNrZ3JvdXAud2lkdGggIT09IHRoaXMubGFiZWwud2lkdGgpIHtcbiAgICAgICAgICAgIHRoaXMuYmFja2dyb3VwLndpZHRoID0gdGhpcy5sYWJlbC53aWR0aCArIHRoaXMucGFkZGluZztcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5iYWNrZ3JvdXAuaGVpZ2h0ICE9PSB0aGlzLmxhYmVsLmhlaWdodCkge1xuICAgICAgICAgICAgdGhpcy5iYWNrZ3JvdXAuaGVpZ2h0ID0gdGhpcy5sYWJlbC5oZWlnaHQgKyB0aGlzLnBhZGRpbmc7XG4gICAgICAgIH1cbiAgICB9XG5cbn0pO1xuIl19