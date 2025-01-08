
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/cases/spine/SpineCtrl.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '91115OWZ9hJkIXaqCNRUsZC', 'SpineCtrl');
// cases/spine/SpineCtrl.js

"use strict";

cc.Class({
  "extends": cc.Component,
  editor: {
    requireComponent: sp.Skeleton
  },
  properties: {
    mixTime: 0.2
  },
  onLoad: function onLoad() {
    var _this = this;

    var spine = this.spine = this.getComponent('sp.Skeleton');

    this._setMix('walk', 'run');

    this._setMix('run', 'jump');

    this._setMix('walk', 'jump');

    spine.setStartListener(function (trackEntry) {
      var animationName = trackEntry.animation ? trackEntry.animation.name : "";
      cc.log("[track %s][animation %s] start.", trackEntry.trackIndex, animationName);
    });
    spine.setInterruptListener(function (trackEntry) {
      var animationName = trackEntry.animation ? trackEntry.animation.name : "";
      cc.log("[track %s][animation %s] interrupt.", trackEntry.trackIndex, animationName);
    });
    spine.setEndListener(function (trackEntry) {
      var animationName = trackEntry.animation ? trackEntry.animation.name : "";
      cc.log("[track %s][animation %s] end.", trackEntry.trackIndex, animationName);
    });
    spine.setDisposeListener(function (trackEntry) {
      var animationName = trackEntry.animation ? trackEntry.animation.name : "";
      cc.log("[track %s][animation %s] will be disposed.", trackEntry.trackIndex, animationName);
    });
    spine.setCompleteListener(function (trackEntry) {
      var animationName = trackEntry.animation ? trackEntry.animation.name : "";

      if (animationName === 'shoot') {
        _this.spine.clearTrack(1);
      }

      var loopCount = Math.floor(trackEntry.trackTime / trackEntry.animationEnd);
      cc.log("[track %s][animation %s] complete: %s", trackEntry.trackIndex, animationName, loopCount);
    });
    spine.setEventListener(function (trackEntry, event) {
      var animationName = trackEntry.animation ? trackEntry.animation.name : "";
      cc.log("[track %s][animation %s] event: %s, %s, %s, %s", trackEntry.trackIndex, animationName, event.data.name, event.intValue, event.floatValue, event.stringValue);
    });
    this._hasStop = false;
  },
  // OPTIONS
  toggleDebugSlots: function toggleDebugSlots() {
    this.spine.debugSlots = !this.spine.debugSlots;
  },
  toggleDebugBones: function toggleDebugBones() {
    this.spine.debugBones = !this.spine.debugBones;
  },
  toggleTimeScale: function toggleTimeScale() {
    if (this.spine.timeScale === 1.0) {
      this.spine.timeScale = 0.3;
    } else {
      this.spine.timeScale = 1.0;
    }
  },
  // ANIMATIONS
  stop: function stop() {
    this.spine.clearTrack(0);
    this._hasStop = true;
  },
  walk: function walk() {
    this.spine.setAnimation(0, 'walk', true);
    this._hasStop = false;
  },
  run: function run() {
    this.spine.setAnimation(0, 'run', true);
    this._hasStop = false;
  },
  jump: function jump() {
    var oldAnim = this.spine.animation;
    this.spine.setAnimation(0, 'jump', false);

    if (oldAnim && !this._hasStop) {
      this.spine.addAnimation(0, oldAnim === 'run' ? 'run' : 'walk', true, 0);
    }
  },
  shoot: function shoot() {
    this.spine.setAnimation(1, 'shoot', false);
  },
  //
  _setMix: function _setMix(anim1, anim2) {
    this.spine.setMix(anim1, anim2, this.mixTime);
    this.spine.setMix(anim2, anim1, this.mixTime);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9jYXNlcy9zcGluZS9TcGluZUN0cmwuanMiXSwibmFtZXMiOlsiY2MiLCJDbGFzcyIsIkNvbXBvbmVudCIsImVkaXRvciIsInJlcXVpcmVDb21wb25lbnQiLCJzcCIsIlNrZWxldG9uIiwicHJvcGVydGllcyIsIm1peFRpbWUiLCJvbkxvYWQiLCJzcGluZSIsImdldENvbXBvbmVudCIsIl9zZXRNaXgiLCJzZXRTdGFydExpc3RlbmVyIiwidHJhY2tFbnRyeSIsImFuaW1hdGlvbk5hbWUiLCJhbmltYXRpb24iLCJuYW1lIiwibG9nIiwidHJhY2tJbmRleCIsInNldEludGVycnVwdExpc3RlbmVyIiwic2V0RW5kTGlzdGVuZXIiLCJzZXREaXNwb3NlTGlzdGVuZXIiLCJzZXRDb21wbGV0ZUxpc3RlbmVyIiwiY2xlYXJUcmFjayIsImxvb3BDb3VudCIsIk1hdGgiLCJmbG9vciIsInRyYWNrVGltZSIsImFuaW1hdGlvbkVuZCIsInNldEV2ZW50TGlzdGVuZXIiLCJldmVudCIsImRhdGEiLCJpbnRWYWx1ZSIsImZsb2F0VmFsdWUiLCJzdHJpbmdWYWx1ZSIsIl9oYXNTdG9wIiwidG9nZ2xlRGVidWdTbG90cyIsImRlYnVnU2xvdHMiLCJ0b2dnbGVEZWJ1Z0JvbmVzIiwiZGVidWdCb25lcyIsInRvZ2dsZVRpbWVTY2FsZSIsInRpbWVTY2FsZSIsInN0b3AiLCJ3YWxrIiwic2V0QW5pbWF0aW9uIiwicnVuIiwianVtcCIsIm9sZEFuaW0iLCJhZGRBbmltYXRpb24iLCJzaG9vdCIsImFuaW0xIiwiYW5pbTIiLCJzZXRNaXgiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUFBLEVBQUUsQ0FBQ0MsS0FBSCxDQUFTO0VBQ0wsV0FBU0QsRUFBRSxDQUFDRSxTQURQO0VBRUxDLE1BQU0sRUFBRTtJQUNKQyxnQkFBZ0IsRUFBRUMsRUFBRSxDQUFDQztFQURqQixDQUZIO0VBTUxDLFVBQVUsRUFBRTtJQUNSQyxPQUFPLEVBQUU7RUFERCxDQU5QO0VB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QyxLQUFuQzs7SUFDQSxJQUFJRyxPQUFPLElBQUksQ0FBQyxLQUFLWixRQUFyQixFQUErQjtNQUMzQixLQUFLMUIsS0FBTCxDQUFXdUMsWUFBWCxDQUF3QixDQUF4QixFQUEyQkQsT0FBTyxLQUFLLEtBQVosR0FBb0IsS0FBcEIsR0FBNEIsTUFBdkQsRUFBK0QsSUFBL0QsRUFBcUUsQ0FBckU7SUFDSDtFQUNKLENBMUZJO0VBNEZMRSxLQTVGSyxtQkE0Rkk7SUFDTCxLQUFLeEMsS0FBTCxDQUFXbUMsWUFBWCxDQUF3QixDQUF4QixFQUEyQixPQUEzQixFQUFvQyxLQUFwQztFQUNILENBOUZJO0VBZ0dMO0VBRUFqQyxPQWxHSyxtQkFrR0l1QyxLQWxHSixFQWtHV0MsS0FsR1gsRUFrR2tCO0lBQ25CLEtBQUsxQyxLQUFMLENBQVcyQyxNQUFYLENBQWtCRixLQUFsQixFQUF5QkMsS0FBekIsRUFBZ0MsS0FBSzVDLE9BQXJDO0lBQ0EsS0FBS0UsS0FBTCxDQUFXMkMsTUFBWCxDQUFrQkQsS0FBbEIsRUFBeUJELEtBQXpCLEVBQWdDLEtBQUszQyxPQUFyQztFQUNIO0FBckdJLENBQVQiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImNjLkNsYXNzKHtcbiAgICBleHRlbmRzOiBjYy5Db21wb25lbnQsXG4gICAgZWRpdG9yOiB7XG4gICAgICAgIHJlcXVpcmVDb21wb25lbnQ6IHNwLlNrZWxldG9uXG4gICAgfSxcblxuICAgIHByb3BlcnRpZXM6IHtcbiAgICAgICAgbWl4VGltZTogMC4yXG4gICAgfSxcblxuICAgIG9uTG9hZCAoKSB7XG4gICAgICAgIHZhciBzcGluZSA9IHRoaXMuc3BpbmUgPSB0aGlzLmdldENvbXBvbmVudCgnc3AuU2tlbGV0b24nKTtcbiAgICAgICAgdGhpcy5fc2V0TWl4KCd3YWxrJywgJ3J1bicpO1xuICAgICAgICB0aGlzLl9zZXRNaXgoJ3J1bicsICdqdW1wJyk7XG4gICAgICAgIHRoaXMuX3NldE1peCgnd2FsaycsICdqdW1wJyk7XG4gICAgICAgIFxuICAgICAgICBzcGluZS5zZXRTdGFydExpc3RlbmVyKHRyYWNrRW50cnkgPT4ge1xuICAgICAgICAgICAgdmFyIGFuaW1hdGlvbk5hbWUgPSB0cmFja0VudHJ5LmFuaW1hdGlvbiA/IHRyYWNrRW50cnkuYW5pbWF0aW9uLm5hbWUgOiBcIlwiO1xuICAgICAgICAgICAgY2MubG9nKFwiW3RyYWNrICVzXVthbmltYXRpb24gJXNdIHN0YXJ0LlwiLCB0cmFja0VudHJ5LnRyYWNrSW5kZXgsIGFuaW1hdGlvbk5hbWUpO1xuICAgICAgICB9KTtcbiAgICAgICAgc3BpbmUuc2V0SW50ZXJydXB0TGlzdGVuZXIodHJhY2tFbnRyeSA9PiB7XG4gICAgICAgICAgICB2YXIgYW5pbWF0aW9uTmFtZSA9IHRyYWNrRW50cnkuYW5pbWF0aW9uID8gdHJhY2tFbnRyeS5hbmltYXRpb24ubmFtZSA6IFwiXCI7XG4gICAgICAgICAgICBjYy5sb2coXCJbdHJhY2sgJXNdW2FuaW1hdGlvbiAlc10gaW50ZXJydXB0LlwiLCB0cmFja0VudHJ5LnRyYWNrSW5kZXgsIGFuaW1hdGlvbk5hbWUpO1xuICAgICAgICB9KTtcbiAgICAgICAgc3BpbmUuc2V0RW5kTGlzdGVuZXIodHJhY2tFbnRyeSA9PiB7XG4gICAgICAgICAgICB2YXIgYW5pbWF0aW9uTmFtZSA9IHRyYWNrRW50cnkuYW5pbWF0aW9uID8gdHJhY2tFbnRyeS5hbmltYXRpb24ubmFtZSA6IFwiXCI7XG4gICAgICAgICAgICBjYy5sb2coXCJbdHJhY2sgJXNdW2FuaW1hdGlvbiAlc10gZW5kLlwiLCB0cmFja0VudHJ5LnRyYWNrSW5kZXgsIGFuaW1hdGlvbk5hbWUpO1xuICAgICAgICB9KTtcbiAgICAgICAgc3BpbmUuc2V0RGlzcG9zZUxpc3RlbmVyKHRyYWNrRW50cnkgPT4ge1xuICAgICAgICAgICAgdmFyIGFuaW1hdGlvbk5hbWUgPSB0cmFja0VudHJ5LmFuaW1hdGlvbiA/IHRyYWNrRW50cnkuYW5pbWF0aW9uLm5hbWUgOiBcIlwiO1xuICAgICAgICAgICAgY2MubG9nKFwiW3RyYWNrICVzXVthbmltYXRpb24gJXNdIHdpbGwgYmUgZGlzcG9zZWQuXCIsIHRyYWNrRW50cnkudHJhY2tJbmRleCwgYW5pbWF0aW9uTmFtZSk7XG4gICAgICAgIH0pO1xuICAgICAgICBzcGluZS5zZXRDb21wbGV0ZUxpc3RlbmVyKCh0cmFja0VudHJ5KSA9PiB7XG4gICAgICAgICAgICB2YXIgYW5pbWF0aW9uTmFtZSA9IHRyYWNrRW50cnkuYW5pbWF0aW9uID8gdHJhY2tFbnRyeS5hbmltYXRpb24ubmFtZSA6IFwiXCI7XG4gICAgICAgICAgICBpZiAoYW5pbWF0aW9uTmFtZSA9PT0gJ3Nob290Jykge1xuICAgICAgICAgICAgICAgIHRoaXMuc3BpbmUuY2xlYXJUcmFjaygxKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHZhciBsb29wQ291bnQgPSBNYXRoLmZsb29yKHRyYWNrRW50cnkudHJhY2tUaW1lIC8gdHJhY2tFbnRyeS5hbmltYXRpb25FbmQpOyBcbiAgICAgICAgICAgIGNjLmxvZyhcIlt0cmFjayAlc11bYW5pbWF0aW9uICVzXSBjb21wbGV0ZTogJXNcIiwgdHJhY2tFbnRyeS50cmFja0luZGV4LCBhbmltYXRpb25OYW1lLCBsb29wQ291bnQpO1xuICAgICAgICB9KTtcbiAgICAgICAgc3BpbmUuc2V0RXZlbnRMaXN0ZW5lcigodHJhY2tFbnRyeSwgZXZlbnQpID0+IHtcbiAgICAgICAgICAgIHZhciBhbmltYXRpb25OYW1lID0gdHJhY2tFbnRyeS5hbmltYXRpb24gPyB0cmFja0VudHJ5LmFuaW1hdGlvbi5uYW1lIDogXCJcIjtcbiAgICAgICAgICAgIGNjLmxvZyhcIlt0cmFjayAlc11bYW5pbWF0aW9uICVzXSBldmVudDogJXMsICVzLCAlcywgJXNcIiwgdHJhY2tFbnRyeS50cmFja0luZGV4LCBhbmltYXRpb25OYW1lLCBldmVudC5kYXRhLm5hbWUsIGV2ZW50LmludFZhbHVlLCBldmVudC5mbG9hdFZhbHVlLCBldmVudC5zdHJpbmdWYWx1ZSk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHRoaXMuX2hhc1N0b3AgPSBmYWxzZTtcbiAgICB9LFxuICAgIFxuICAgIC8vIE9QVElPTlNcbiAgICBcbiAgICB0b2dnbGVEZWJ1Z1Nsb3RzICgpIHtcbiAgICAgICAgdGhpcy5zcGluZS5kZWJ1Z1Nsb3RzID0gIXRoaXMuc3BpbmUuZGVidWdTbG90cztcbiAgICB9LFxuICAgIFxuICAgIHRvZ2dsZURlYnVnQm9uZXMgKCkge1xuICAgICAgICB0aGlzLnNwaW5lLmRlYnVnQm9uZXMgPSAhdGhpcy5zcGluZS5kZWJ1Z0JvbmVzO1xuICAgIH0sXG4gICAgXG4gICAgdG9nZ2xlVGltZVNjYWxlICgpIHtcbiAgICAgICAgaWYgKHRoaXMuc3BpbmUudGltZVNjYWxlID09PSAxLjApIHtcbiAgICAgICAgICAgIHRoaXMuc3BpbmUudGltZVNjYWxlID0gMC4zO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5zcGluZS50aW1lU2NhbGUgPSAxLjA7XG4gICAgICAgIH1cbiAgICB9LFxuICAgIFxuICAgIC8vIEFOSU1BVElPTlNcbiAgICBcbiAgICBzdG9wICgpIHtcbiAgICAgICAgdGhpcy5zcGluZS5jbGVhclRyYWNrKDApO1xuICAgICAgICB0aGlzLl9oYXNTdG9wID0gdHJ1ZTtcbiAgICB9LFxuXG4gICAgd2FsayAoKSB7XG4gICAgICAgIHRoaXMuc3BpbmUuc2V0QW5pbWF0aW9uKDAsICd3YWxrJywgdHJ1ZSk7XG4gICAgICAgIHRoaXMuX2hhc1N0b3AgPSBmYWxzZTtcbiAgICB9LFxuICAgIFxuICAgIHJ1biAoKSB7XG4gICAgICAgIHRoaXMuc3BpbmUuc2V0QW5pbWF0aW9uKDAsICdydW4nLCB0cnVlKTtcbiAgICAgICAgdGhpcy5faGFzU3RvcCA9IGZhbHNlO1xuICAgIH0sXG4gICAgXG4gICAganVtcCAoKSB7XG4gICAgICAgIHZhciBvbGRBbmltID0gdGhpcy5zcGluZS5hbmltYXRpb247XG4gICAgICAgIHRoaXMuc3BpbmUuc2V0QW5pbWF0aW9uKDAsICdqdW1wJywgZmFsc2UpO1xuICAgICAgICBpZiAob2xkQW5pbSAmJiAhdGhpcy5faGFzU3RvcCkge1xuICAgICAgICAgICAgdGhpcy5zcGluZS5hZGRBbmltYXRpb24oMCwgb2xkQW5pbSA9PT0gJ3J1bicgPyAncnVuJyA6ICd3YWxrJywgdHJ1ZSwgMCk7XG4gICAgICAgIH1cbiAgICB9LFxuICAgIFxuICAgIHNob290ICgpIHtcbiAgICAgICAgdGhpcy5zcGluZS5zZXRBbmltYXRpb24oMSwgJ3Nob290JywgZmFsc2UpO1xuICAgIH0sXG4gICAgXG4gICAgLy9cbiAgICBcbiAgICBfc2V0TWl4IChhbmltMSwgYW5pbTIpIHtcbiAgICAgICAgdGhpcy5zcGluZS5zZXRNaXgoYW5pbTEsIGFuaW0yLCB0aGlzLm1peFRpbWUpO1xuICAgICAgICB0aGlzLnNwaW5lLnNldE1peChhbmltMiwgYW5pbTEsIHRoaXMubWl4VGltZSk7XG4gICAgfVxufSk7XG4iXX0=