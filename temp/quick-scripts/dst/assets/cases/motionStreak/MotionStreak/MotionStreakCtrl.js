
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/cases/motionStreak/MotionStreak/MotionStreakCtrl.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'f7722zlKP5HoKMY5VvWPCON', 'MotionStreakCtrl');
// cases/motionStreak/MotionStreak/MotionStreakCtrl.js

"use strict";

cc.Class({
  "extends": cc.Component,
  properties: {
    motionStreak: cc.MotionStreak,
    newTexture: {
      "default": null,
      type: cc.Texture2D
    }
  },
  onLoad: function onLoad() {
    this._changed = true;
    this.oldTexture = this.motionStreak.texture;
    this.animationCom = this.motionStreak.node.getComponent(cc.Animation);
  },
  onClick: function onClick() {
    if (this._changed) {
      this.setMotionStreak(2, 3, 20, this.newTexture);
    } else {
      this.setMotionStreak(0.5, 1, 30, this.oldTexture);
    }

    this._changed = !this._changed;
  },
  setMotionStreak: function setMotionStreak(fadeTime, minSeg, stroke, texture) {
    this.motionStreak.fadeTime = fadeTime;
    this.motionStreak.minSeg = minSeg;
    this.motionStreak.stroke = stroke;
    this.motionStreak.texture = texture;
  },
  lateUpdate: function lateUpdate() {
    if (!this.animationCom.getAnimationState("move_around").isPlaying) {
      this.animationCom.play();
    }
  },
  onDisable: function onDisable() {
    this.motionStreak.node.getComponent(cc.Animation).stop();
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9jYXNlcy9tb3Rpb25TdHJlYWsvTW90aW9uU3RyZWFrL01vdGlvblN0cmVha0N0cmwuanMiXSwibmFtZXMiOlsiY2MiLCJDbGFzcyIsIkNvbXBvbmVudCIsInByb3BlcnRpZXMiLCJtb3Rpb25TdHJlYWsiLCJNb3Rpb25TdHJlYWsiLCJuZXdUZXh0dXJlIiwidHlwZSIsIlRleHR1cmUyRCIsIm9uTG9hZCIsIl9jaGFuZ2VkIiwib2xkVGV4dHVyZSIsInRleHR1cmUiLCJhbmltYXRpb25Db20iLCJub2RlIiwiZ2V0Q29tcG9uZW50IiwiQW5pbWF0aW9uIiwib25DbGljayIsInNldE1vdGlvblN0cmVhayIsImZhZGVUaW1lIiwibWluU2VnIiwic3Ryb2tlIiwibGF0ZVVwZGF0ZSIsImdldEFuaW1hdGlvblN0YXRlIiwiaXNQbGF5aW5nIiwicGxheSIsIm9uRGlzYWJsZSIsInN0b3AiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUFBLEVBQUUsQ0FBQ0MsS0FBSCxDQUFTO0VBQ0wsV0FBU0QsRUFBRSxDQUFDRSxTQURQO0VBR0xDLFVBQVUsRUFBRTtJQUNSQyxZQUFZLEVBQUVKLEVBQUUsQ0FBQ0ssWUFEVDtJQUVSQyxVQUFVLEVBQUU7TUFDUixXQUFTLElBREQ7TUFFUkMsSUFBSSxFQUFFUCxFQUFFLENBQUNRO0lBRkQ7RUFGSixDQUhQO0VBV0xDLE1BQU0sRUFBRSxrQkFBWTtJQUNoQixLQUFLQyxRQUFMLEdBQWdCLElBQWhCO0lBQ0EsS0FBS0MsVUFBTCxHQUFrQixLQUFLUCxZQUFMLENBQWtCUSxPQUFwQztJQUNBLEtBQUtDLFlBQUwsR0FBb0IsS0FBS1QsWUFBTCxDQUFrQlUsSUFBbEIsQ0FBdUJDLFlBQXZCLENBQW9DZixFQUFFLENBQUNnQixTQUF2QyxDQUFwQjtFQUNILENBZkk7RUFpQkxDLE9BQU8sRUFBRSxtQkFBWTtJQUNqQixJQUFJLEtBQUtQLFFBQVQsRUFBbUI7TUFDZixLQUFLUSxlQUFMLENBQXFCLENBQXJCLEVBQXdCLENBQXhCLEVBQTJCLEVBQTNCLEVBQStCLEtBQUtaLFVBQXBDO0lBQ0gsQ0FGRCxNQUdLO01BQ0QsS0FBS1ksZUFBTCxDQUFxQixHQUFyQixFQUEwQixDQUExQixFQUE2QixFQUE3QixFQUFpQyxLQUFLUCxVQUF0QztJQUNIOztJQUNELEtBQUtELFFBQUwsR0FBZ0IsQ0FBQyxLQUFLQSxRQUF0QjtFQUNILENBekJJO0VBMkJMUSxlQUFlLEVBQUUseUJBQVVDLFFBQVYsRUFBb0JDLE1BQXBCLEVBQTRCQyxNQUE1QixFQUFvQ1QsT0FBcEMsRUFBNkM7SUFDMUQsS0FBS1IsWUFBTCxDQUFrQmUsUUFBbEIsR0FBNkJBLFFBQTdCO0lBQ0EsS0FBS2YsWUFBTCxDQUFrQmdCLE1BQWxCLEdBQTJCQSxNQUEzQjtJQUNBLEtBQUtoQixZQUFMLENBQWtCaUIsTUFBbEIsR0FBMkJBLE1BQTNCO0lBQ0EsS0FBS2pCLFlBQUwsQ0FBa0JRLE9BQWxCLEdBQTRCQSxPQUE1QjtFQUNILENBaENJO0VBa0NMVSxVQWxDSyx3QkFrQ1M7SUFDVixJQUFJLENBQUMsS0FBS1QsWUFBTCxDQUFrQlUsaUJBQWxCLENBQW9DLGFBQXBDLEVBQW1EQyxTQUF4RCxFQUFtRTtNQUMvRCxLQUFLWCxZQUFMLENBQWtCWSxJQUFsQjtJQUNIO0VBQ0osQ0F0Q0k7RUF3Q0xDLFNBeENLLHVCQXdDUTtJQUNULEtBQUt0QixZQUFMLENBQWtCVSxJQUFsQixDQUF1QkMsWUFBdkIsQ0FBb0NmLEVBQUUsQ0FBQ2dCLFNBQXZDLEVBQWtEVyxJQUFsRDtFQUNIO0FBMUNJLENBQVQiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImNjLkNsYXNzKHtcbiAgICBleHRlbmRzOiBjYy5Db21wb25lbnQsXG5cbiAgICBwcm9wZXJ0aWVzOiB7XG4gICAgICAgIG1vdGlvblN0cmVhazogY2MuTW90aW9uU3RyZWFrLFxuICAgICAgICBuZXdUZXh0dXJlOiB7XG4gICAgICAgICAgICBkZWZhdWx0OiBudWxsLFxuICAgICAgICAgICAgdHlwZTogY2MuVGV4dHVyZTJEXG4gICAgICAgIH1cbiAgICB9LFxuXG4gICAgb25Mb2FkOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHRoaXMuX2NoYW5nZWQgPSB0cnVlO1xuICAgICAgICB0aGlzLm9sZFRleHR1cmUgPSB0aGlzLm1vdGlvblN0cmVhay50ZXh0dXJlO1xuICAgICAgICB0aGlzLmFuaW1hdGlvbkNvbSA9IHRoaXMubW90aW9uU3RyZWFrLm5vZGUuZ2V0Q29tcG9uZW50KGNjLkFuaW1hdGlvbik7XG4gICAgfSxcblxuICAgIG9uQ2xpY2s6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaWYgKHRoaXMuX2NoYW5nZWQpIHtcbiAgICAgICAgICAgIHRoaXMuc2V0TW90aW9uU3RyZWFrKDIsIDMsIDIwLCB0aGlzLm5ld1RleHR1cmUpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5zZXRNb3Rpb25TdHJlYWsoMC41LCAxLCAzMCwgdGhpcy5vbGRUZXh0dXJlKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLl9jaGFuZ2VkID0gIXRoaXMuX2NoYW5nZWQ7XG4gICAgfSxcblxuICAgIHNldE1vdGlvblN0cmVhazogZnVuY3Rpb24gKGZhZGVUaW1lLCBtaW5TZWcsIHN0cm9rZSwgdGV4dHVyZSkge1xuICAgICAgICB0aGlzLm1vdGlvblN0cmVhay5mYWRlVGltZSA9IGZhZGVUaW1lO1xuICAgICAgICB0aGlzLm1vdGlvblN0cmVhay5taW5TZWcgPSBtaW5TZWc7XG4gICAgICAgIHRoaXMubW90aW9uU3RyZWFrLnN0cm9rZSA9IHN0cm9rZTtcbiAgICAgICAgdGhpcy5tb3Rpb25TdHJlYWsudGV4dHVyZSA9IHRleHR1cmU7XG4gICAgfSxcblxuICAgIGxhdGVVcGRhdGUgKCkge1xuICAgICAgICBpZiAoIXRoaXMuYW5pbWF0aW9uQ29tLmdldEFuaW1hdGlvblN0YXRlKFwibW92ZV9hcm91bmRcIikuaXNQbGF5aW5nKSB7XG4gICAgICAgICAgICB0aGlzLmFuaW1hdGlvbkNvbS5wbGF5KCk7XG4gICAgICAgIH1cbiAgICB9LFxuXG4gICAgb25EaXNhYmxlICgpIHtcbiAgICAgICAgdGhpcy5tb3Rpb25TdHJlYWsubm9kZS5nZXRDb21wb25lbnQoY2MuQW5pbWF0aW9uKS5zdG9wKCk7XG4gICAgfVxufSk7XG4iXX0=