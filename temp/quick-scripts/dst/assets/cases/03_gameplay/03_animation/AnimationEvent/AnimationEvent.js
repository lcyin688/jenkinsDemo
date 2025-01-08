
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/cases/03_gameplay/03_animation/AnimationEvent/AnimationEvent.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '1dc09SR4TdLU74RjGBArlm0', 'AnimationEvent');
// cases/03_gameplay/03_animation/AnimationEvent/AnimationEvent.js

"use strict";

var i18n = require('i18n');

cc.Class({
  "extends": cc.Component,
  properties: {},
  onLoad: function onLoad() {
    var node = cc.find('Canvas/Label');
    this._label = node.getComponent(cc.Label);
    this._animCtrl = this.node.getComponent(cc.Animation);
  },
  onNextAnimation: function onNextAnimation(step) {
    this._animCtrl.play("step_" + step);

    this._label.string = i18n.t("cases/03_gameplay/03_animation/AnimationEvent.js.1") + step + "个动画";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9jYXNlcy8wM19nYW1lcGxheS8wM19hbmltYXRpb24vQW5pbWF0aW9uRXZlbnQvQW5pbWF0aW9uRXZlbnQuanMiXSwibmFtZXMiOlsiaTE4biIsInJlcXVpcmUiLCJjYyIsIkNsYXNzIiwiQ29tcG9uZW50IiwicHJvcGVydGllcyIsIm9uTG9hZCIsIm5vZGUiLCJmaW5kIiwiX2xhYmVsIiwiZ2V0Q29tcG9uZW50IiwiTGFiZWwiLCJfYW5pbUN0cmwiLCJBbmltYXRpb24iLCJvbk5leHRBbmltYXRpb24iLCJzdGVwIiwicGxheSIsInN0cmluZyIsInQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsSUFBTUEsSUFBSSxHQUFHQyxPQUFPLENBQUMsTUFBRCxDQUFwQjs7QUFFQUMsRUFBRSxDQUFDQyxLQUFILENBQVM7RUFDTCxXQUFTRCxFQUFFLENBQUNFLFNBRFA7RUFHTEMsVUFBVSxFQUFFLEVBSFA7RUFPTEMsTUFBTSxFQUFFLGtCQUFZO0lBQ2hCLElBQUlDLElBQUksR0FBR0wsRUFBRSxDQUFDTSxJQUFILENBQVEsY0FBUixDQUFYO0lBQ0EsS0FBS0MsTUFBTCxHQUFjRixJQUFJLENBQUNHLFlBQUwsQ0FBa0JSLEVBQUUsQ0FBQ1MsS0FBckIsQ0FBZDtJQUNBLEtBQUtDLFNBQUwsR0FBaUIsS0FBS0wsSUFBTCxDQUFVRyxZQUFWLENBQXVCUixFQUFFLENBQUNXLFNBQTFCLENBQWpCO0VBQ0gsQ0FYSTtFQWFMQyxlQUFlLEVBQUUseUJBQVVDLElBQVYsRUFBZ0I7SUFDN0IsS0FBS0gsU0FBTCxDQUFlSSxJQUFmLENBQW9CLFVBQVNELElBQTdCOztJQUNBLEtBQUtOLE1BQUwsQ0FBWVEsTUFBWixHQUFxQmpCLElBQUksQ0FBQ2tCLENBQUwsQ0FBTyxvREFBUCxJQUE4REgsSUFBOUQsR0FBcUUsS0FBMUY7RUFDSDtBQWhCSSxDQUFUIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBpMThuID0gcmVxdWlyZSgnaTE4bicpO1xuXG5jYy5DbGFzcyh7XG4gICAgZXh0ZW5kczogY2MuQ29tcG9uZW50LFxuXG4gICAgcHJvcGVydGllczoge1xuXG4gICAgfSxcblxuICAgIG9uTG9hZDogZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgbm9kZSA9IGNjLmZpbmQoJ0NhbnZhcy9MYWJlbCcpO1xuICAgICAgICB0aGlzLl9sYWJlbCA9IG5vZGUuZ2V0Q29tcG9uZW50KGNjLkxhYmVsKTtcbiAgICAgICAgdGhpcy5fYW5pbUN0cmwgPSB0aGlzLm5vZGUuZ2V0Q29tcG9uZW50KGNjLkFuaW1hdGlvbik7XG4gICAgfSxcblxuICAgIG9uTmV4dEFuaW1hdGlvbjogZnVuY3Rpb24gKHN0ZXApIHtcbiAgICAgICAgdGhpcy5fYW5pbUN0cmwucGxheShcInN0ZXBfXCIrIHN0ZXApO1xuICAgICAgICB0aGlzLl9sYWJlbC5zdHJpbmcgPSBpMThuLnQoXCJjYXNlcy8wM19nYW1lcGxheS8wM19hbmltYXRpb24vQW5pbWF0aW9uRXZlbnQuanMuMVwiKSsgc3RlcCArIFwi5Liq5Yqo55S7XCI7XG4gICAgfVxufSk7XG4iXX0=