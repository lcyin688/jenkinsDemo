
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/cases/05_scripting/04_scheduler/scheduleCallbacks.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '930deImxoZIkp6ugjMU5ULW', 'scheduleCallbacks');
// cases/05_scripting/04_scheduler/scheduleCallbacks.js

"use strict";

cc.Class({
  "extends": cc.Component,
  properties: {
    time: {
      "default": 5
    },
    counter: cc.Label
  },
  _callback: function _callback() {
    this.node.stopAllActions();
    this.node.runAction(this.seq);

    if (this.repeat) {
      this.counting = true;
    } else {
      this.counting = false;
    }

    this.time = 5;
    this.counter.string = this.time.toFixed(2) + ' s';
  },
  // use this for initialization
  onLoad: function onLoad() {
    var squashAction = cc.scaleTo(0.2, 1, 0.6);
    var stretchAction = cc.scaleTo(0.2, 1, 1.2);
    var scaleBackAction = cc.scaleTo(0.1, 1, 1);
    var moveUpAction = cc.moveBy(1, cc.v2(0, 100)).easing(cc.easeCubicActionOut());
    var moveDownAction = cc.moveBy(1, cc.v2(0, -100)).easing(cc.easeCubicActionIn());
    this.seq = cc.sequence(squashAction, stretchAction, moveUpAction, scaleBackAction, moveDownAction, squashAction, scaleBackAction);
    this.counter.string = this.time.toFixed(2) + ' s';
    this.counting = false;
    this.repeat = false;
  },
  // called every frame
  update: function update(dt) {
    if (this.counting) {
      this.time -= dt;
      this.counter.string = this.time.toFixed(2) + ' s';
    }
  },
  stopCounting: function stopCounting() {
    this.unscheduleAllCallbacks();
    this.counting = false;
    this.time = 5;
    this.counter.string = this.time.toFixed(2) + ' s';
  },
  repeatSchedule: function repeatSchedule() {
    this.stopCounting();
    this.schedule(this._callback, 5);
    this.repeat = true;
    this.counting = true;
  },
  oneSchedule: function oneSchedule() {
    this.stopCounting();
    this.scheduleOnce(this._callback, 5);
    this.repeat = false;
    this.counting = true;
  },
  cancelSchedules: function cancelSchedules() {
    this.repeat = false;
    this.stopCounting();
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9jYXNlcy8wNV9zY3JpcHRpbmcvMDRfc2NoZWR1bGVyL3NjaGVkdWxlQ2FsbGJhY2tzLmpzIl0sIm5hbWVzIjpbImNjIiwiQ2xhc3MiLCJDb21wb25lbnQiLCJwcm9wZXJ0aWVzIiwidGltZSIsImNvdW50ZXIiLCJMYWJlbCIsIl9jYWxsYmFjayIsIm5vZGUiLCJzdG9wQWxsQWN0aW9ucyIsInJ1bkFjdGlvbiIsInNlcSIsInJlcGVhdCIsImNvdW50aW5nIiwic3RyaW5nIiwidG9GaXhlZCIsIm9uTG9hZCIsInNxdWFzaEFjdGlvbiIsInNjYWxlVG8iLCJzdHJldGNoQWN0aW9uIiwic2NhbGVCYWNrQWN0aW9uIiwibW92ZVVwQWN0aW9uIiwibW92ZUJ5IiwidjIiLCJlYXNpbmciLCJlYXNlQ3ViaWNBY3Rpb25PdXQiLCJtb3ZlRG93bkFjdGlvbiIsImVhc2VDdWJpY0FjdGlvbkluIiwic2VxdWVuY2UiLCJ1cGRhdGUiLCJkdCIsInN0b3BDb3VudGluZyIsInVuc2NoZWR1bGVBbGxDYWxsYmFja3MiLCJyZXBlYXRTY2hlZHVsZSIsInNjaGVkdWxlIiwib25lU2NoZWR1bGUiLCJzY2hlZHVsZU9uY2UiLCJjYW5jZWxTY2hlZHVsZXMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUFBLEVBQUUsQ0FBQ0MsS0FBSCxDQUFTO0VBQ0wsV0FBU0QsRUFBRSxDQUFDRSxTQURQO0VBR0xDLFVBQVUsRUFBRTtJQUNSQyxJQUFJLEVBQUU7TUFDRixXQUFTO0lBRFAsQ0FERTtJQUtSQyxPQUFPLEVBQUVMLEVBQUUsQ0FBQ007RUFMSixDQUhQO0VBV0xDLFNBQVMsRUFBRSxxQkFBWTtJQUNuQixLQUFLQyxJQUFMLENBQVVDLGNBQVY7SUFDQSxLQUFLRCxJQUFMLENBQVVFLFNBQVYsQ0FBb0IsS0FBS0MsR0FBekI7O0lBQ0EsSUFBSSxLQUFLQyxNQUFULEVBQWlCO01BQ2IsS0FBS0MsUUFBTCxHQUFnQixJQUFoQjtJQUNILENBRkQsTUFHSztNQUNE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cyh7XG4gICAgZXh0ZW5kczogY2MuQ29tcG9uZW50LFxuICAgIFxuICAgIHByb3BlcnRpZXM6IHtcbiAgICAgICAgdGltZToge1xuICAgICAgICAgICAgZGVmYXVsdDogNVxuICAgICAgICB9LFxuXG4gICAgICAgIGNvdW50ZXI6IGNjLkxhYmVsXG4gICAgfSxcbiAgICBcbiAgICBfY2FsbGJhY2s6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdGhpcy5ub2RlLnN0b3BBbGxBY3Rpb25zKCk7XG4gICAgICAgIHRoaXMubm9kZS5ydW5BY3Rpb24odGhpcy5zZXEpO1xuICAgICAgICBpZiAodGhpcy5yZXBlYXQpIHtcbiAgICAgICAgICAgIHRoaXMuY291bnRpbmcgPSB0cnVlO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5jb3VudGluZyA9IGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMudGltZSA9IDU7XG4gICAgICAgIHRoaXMuY291bnRlci5zdHJpbmcgPSB0aGlzLnRpbWUudG9GaXhlZCgyKSArICcgcyc7XG4gICAgfSxcblxuICAgIC8vIHVzZSB0aGlzIGZvciBpbml0aWFsaXphdGlvblxuICAgIG9uTG9hZDogZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgc3F1YXNoQWN0aW9uID0gY2Muc2NhbGVUbygwLjIsIDEsIDAuNik7XG4gICAgICAgIHZhciBzdHJldGNoQWN0aW9uID0gY2Muc2NhbGVUbygwLjIsIDEsIDEuMik7XG4gICAgICAgIHZhciBzY2FsZUJhY2tBY3Rpb24gPSBjYy5zY2FsZVRvKDAuMSwgMSwgMSk7XG4gICAgICAgIHZhciBtb3ZlVXBBY3Rpb24gPSBjYy5tb3ZlQnkoMSwgY2MudjIoMCwgMTAwKSkuZWFzaW5nKGNjLmVhc2VDdWJpY0FjdGlvbk91dCgpKTtcbiAgICAgICAgdmFyIG1vdmVEb3duQWN0aW9uID0gY2MubW92ZUJ5KDEsIGNjLnYyKDAsIC0xMDApKS5lYXNpbmcoY2MuZWFzZUN1YmljQWN0aW9uSW4oKSk7XG4gICAgICAgIHRoaXMuc2VxID0gY2Muc2VxdWVuY2Uoc3F1YXNoQWN0aW9uLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0cmV0Y2hBY3Rpb24sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbW92ZVVwQWN0aW9uLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNjYWxlQmFja0FjdGlvbixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtb3ZlRG93bkFjdGlvbixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzcXVhc2hBY3Rpb24sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2NhbGVCYWNrQWN0aW9uKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgdGhpcy5jb3VudGVyLnN0cmluZyA9IHRoaXMudGltZS50b0ZpeGVkKDIpICsgJyBzJztcbiAgICAgICAgdGhpcy5jb3VudGluZyA9IGZhbHNlO1xuICAgICAgICB0aGlzLnJlcGVhdCA9IGZhbHNlO1xuICAgIH0sXG5cbiAgICAvLyBjYWxsZWQgZXZlcnkgZnJhbWVcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIChkdCkge1xuICAgICAgICBpZiAodGhpcy5jb3VudGluZykge1xuICAgICAgICAgICAgdGhpcy50aW1lIC09IGR0O1xuICAgICAgICAgICAgdGhpcy5jb3VudGVyLnN0cmluZyA9IHRoaXMudGltZS50b0ZpeGVkKDIpICsgJyBzJztcbiAgICAgICAgfVxuICAgIH0sXG4gICAgXG4gICAgc3RvcENvdW50aW5nOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHRoaXMudW5zY2hlZHVsZUFsbENhbGxiYWNrcygpO1xuICAgICAgICB0aGlzLmNvdW50aW5nID0gZmFsc2U7XG4gICAgICAgIHRoaXMudGltZSA9IDU7XG4gICAgICAgIHRoaXMuY291bnRlci5zdHJpbmcgPSB0aGlzLnRpbWUudG9GaXhlZCgyKSArICcgcyc7XG4gICAgfSxcbiAgICBcbiAgICByZXBlYXRTY2hlZHVsZTogZnVuY3Rpb24gKCkge1xuICAgICAgICB0aGlzLnN0b3BDb3VudGluZygpO1xuICAgICAgICB0aGlzLnNjaGVkdWxlKHRoaXMuX2NhbGxiYWNrLCA1KTtcbiAgICAgICAgdGhpcy5yZXBlYXQgPSB0cnVlO1xuICAgICAgICB0aGlzLmNvdW50aW5nID0gdHJ1ZTtcbiAgICB9LFxuICAgIFxuICAgIG9uZVNjaGVkdWxlOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHRoaXMuc3RvcENvdW50aW5nKCk7XG4gICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKHRoaXMuX2NhbGxiYWNrLCA1KTtcbiAgICAgICAgdGhpcy5yZXBlYXQgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5jb3VudGluZyA9IHRydWU7XG4gICAgfSxcbiAgICBcbiAgICBjYW5jZWxTY2hlZHVsZXM6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdGhpcy5yZXBlYXQgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5zdG9wQ291bnRpbmcoKTtcbiAgICB9XG59KTtcbiJdfQ==