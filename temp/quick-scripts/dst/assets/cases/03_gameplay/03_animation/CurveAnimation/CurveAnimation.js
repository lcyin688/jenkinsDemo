
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/cases/03_gameplay/03_animation/CurveAnimation/CurveAnimation.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '20246VSYL1F6qh0RGAPZpcH', 'CurveAnimation');
// cases/03_gameplay/03_animation/CurveAnimation/CurveAnimation.js

"use strict";

cc.Class({
  "extends": cc.Component,
  properties: {
    size: {
      "default": null,
      type: cc.CurveRange,
      serializable: true
    },
    sheep: {
      "default": null,
      type: cc.Sprite,
      serializable: true
    }
  },
  start: function start() {},
  onEnable: function onEnable() {
    this.duration = 10;
    this._time = 0;
  },
  update: function update(dt) {
    this._time += dt;

    if (this._time >= this.duration) {
      this._time = 0;
    }

    var scale = this.size.evaluate(this._time / this.duration);
    this.sheep.node.setScale(scale, scale);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9jYXNlcy8wM19nYW1lcGxheS8wM19hbmltYXRpb24vQ3VydmVBbmltYXRpb24vQ3VydmVBbmltYXRpb24uanMiXSwibmFtZXMiOlsiY2MiLCJDbGFzcyIsIkNvbXBvbmVudCIsInByb3BlcnRpZXMiLCJzaXplIiwidHlwZSIsIkN1cnZlUmFuZ2UiLCJzZXJpYWxpemFibGUiLCJzaGVlcCIsIlNwcml0ZSIsInN0YXJ0Iiwib25FbmFibGUiLCJkdXJhdGlvbiIsIl90aW1lIiwidXBkYXRlIiwiZHQiLCJzY2FsZSIsImV2YWx1YXRlIiwibm9kZSIsInNldFNjYWxlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBQSxFQUFFLENBQUNDLEtBQUgsQ0FBUztFQUNMLFdBQVNELEVBQUUsQ0FBQ0UsU0FEUDtFQUdMQyxVQUFVLEVBQUU7SUFDUkMsSUFBSSxFQUFFO01BQ0YsV0FBUyxJQURQO01BRUZDLElBQUksRUFBRUwsRUFBRSxDQUFDTSxVQUZQO01BR0ZDLFlBQVksRUFBRTtJQUhaLENBREU7SUFPUkMsS0FBSyxFQUFFO01BQ0gsV0FBUyxJQUROO01BRUhILElBQUksRUFBRUwsRUFBRSxDQUFDUyxNQUZOO01BR0hGLFlBQVksRUFBRTtJQUhYO0VBUEMsQ0FIUDtFQWdCTEcsS0FoQkssbUJBZ0JJLENBRVIsQ0FsQkk7RUFvQkxDLFFBcEJLLHNCQW9CTztJQUNSLEtBQUtDLFFBQUwsR0FBZ0IsRUFBaEI7SUFDQSxLQUFLQyxLQUFMLEdBQWEsQ0FBYjtFQUNILENBdkJJO0VBeUJMQyxNQXpCSyxrQkF5QkdDLEVBekJILEVBeUJPO0lBQ1IsS0FBS0YsS0FBTCxJQUFjRSxFQUFkOztJQUNBLElBQUksS0FBS0YsS0FBTCxJQUFjLEtBQUtELFFBQXZCLEVBQWlDO01BQzdCLEtBQUtDLEtBQUwsR0FBYSxDQUFiO0lBQ0g7O0lBRUQsSUFBSUcsS0FBSyxHQUFHLEtBQUtaLElBQUwsQ0FBVWEsUUFBVixDQUFtQixLQUFLSixLQUFMLEdBQWEsS0FBS0QsUUFBckMsQ0FBWjtJQUNBLEtBQUtKLEtBQUwsQ0FBV1UsSUFBWCxDQUFnQkMsUUFBaEIsQ0FBeUJILEtBQXpCLEVBQWdDQSxLQUFoQztFQUNIO0FBakNJLENBQVQiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImNjLkNsYXNzKHtcbiAgICBleHRlbmRzOiBjYy5Db21wb25lbnQsXG5cbiAgICBwcm9wZXJ0aWVzOiB7XG4gICAgICAgIHNpemU6IHtcbiAgICAgICAgICAgIGRlZmF1bHQ6IG51bGwsICAgICAgICBcbiAgICAgICAgICAgIHR5cGU6IGNjLkN1cnZlUmFuZ2UsIFxuICAgICAgICAgICAgc2VyaWFsaXphYmxlOiB0cnVlLCBcbiAgICAgICAgfSxcblxuICAgICAgICBzaGVlcDoge1xuICAgICAgICAgICAgZGVmYXVsdDogbnVsbCwgICAgICAgIFxuICAgICAgICAgICAgdHlwZTogY2MuU3ByaXRlLCBcbiAgICAgICAgICAgIHNlcmlhbGl6YWJsZTogdHJ1ZSwgXG4gICAgICAgIH1cbiAgICB9LFxuICAgIHN0YXJ0ICgpIHtcbiAgICAgICAgXG4gICAgfSxcblxuICAgIG9uRW5hYmxlICgpIHtcbiAgICAgICAgdGhpcy5kdXJhdGlvbiA9IDEwO1xuICAgICAgICB0aGlzLl90aW1lID0gMDtcbiAgICB9LFxuXG4gICAgdXBkYXRlIChkdCkge1xuICAgICAgICB0aGlzLl90aW1lICs9IGR0O1xuICAgICAgICBpZiAodGhpcy5fdGltZSA+PSB0aGlzLmR1cmF0aW9uKSB7XG4gICAgICAgICAgICB0aGlzLl90aW1lID0gMDtcbiAgICAgICAgfVxuXG4gICAgICAgIGxldCBzY2FsZSA9IHRoaXMuc2l6ZS5ldmFsdWF0ZSh0aGlzLl90aW1lIC8gdGhpcy5kdXJhdGlvbik7XG4gICAgICAgIHRoaXMuc2hlZXAubm9kZS5zZXRTY2FsZShzY2FsZSwgc2NhbGUpO1xuICAgIH1cbn0pO1xuIl19