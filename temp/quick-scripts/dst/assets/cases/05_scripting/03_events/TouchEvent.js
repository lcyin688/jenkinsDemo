
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/cases/05_scripting/03_events/TouchEvent.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'a14bfaD+gRJKrTVjKwitc53', 'TouchEvent');
// cases/05_scripting/03_events/TouchEvent.js

"use strict";

cc.Class({
  "extends": cc.Component,
  _callback: null,
  // use this for initialization
  onLoad: function onLoad() {
    this.node.opacity = 100;
    this.node.on(cc.Node.EventType.TOUCH_START, function () {
      this.node.opacity = 255;
    }, this);
    this.node.on(cc.Node.EventType.TOUCH_END, function () {
      this.node.opacity = 100;

      if (this._callback) {
        this._callback();
      }
    }, this);
    this.node.on(cc.Node.EventType.TOUCH_CANCEL, function () {
      this.node.opacity = 100;
    }, this);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9jYXNlcy8wNV9zY3JpcHRpbmcvMDNfZXZlbnRzL1RvdWNoRXZlbnQuanMiXSwibmFtZXMiOlsiY2MiLCJDbGFzcyIsIkNvbXBvbmVudCIsIl9jYWxsYmFjayIsIm9uTG9hZCIsIm5vZGUiLCJvcGFjaXR5Iiwib24iLCJOb2RlIiwiRXZlbnRUeXBlIiwiVE9VQ0hfU1RBUlQiLCJUT1VDSF9FTkQiLCJUT1VDSF9DQU5DRUwiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUFBLEVBQUUsQ0FBQ0MsS0FBSCxDQUFTO0VBQ0wsV0FBU0QsRUFBRSxDQUFDRSxTQURQO0VBR0xDLFNBQVMsRUFBRSxJQUhOO0VBS0w7RUFDQUMsTUFBTSxFQUFFLGtCQUFZO0lBQ2hCLEtBQUtDLElBQUwsQ0FBVUMsT0FBVixHQUFvQixHQUFwQjtJQUNBLEtBQUtELElBQUwsQ0FBVUUsRUFBVixDQUFhUCxFQUFFLENBQUNRLElBQUgsQ0FBUUMsU0FBUixDQUFrQkMsV0FBL0IsRUFBNEMsWUFBWTtNQUNwRCxLQUFLTCxJQUFMLENBQVVDLE9BQVYsR0FBb0IsR0FBcEI7SUFDSCxDQUZELEVBRUcsSUFGSDtJQUdBLEtBQUtELElBQUwsQ0FBVUUsRUFBVixDQUFhUCxFQUFFLENBQUNRLElBQUgsQ0FBUUMsU0FBUixDQUFrQkUsU0FBL0IsRUFBMEMsWUFBWTtNQUNsRCxLQUFLTixJQUFMLENBQVVDLE9BQVYsR0FBb0IsR0FBcEI7O01BQ0EsSUFBSSxLQUFLSCxTQUFULEVBQW9CO1FBQ2hCLEtBQUtBLFNBQUw7TUFDSDtJQUNKLENBTEQsRUFLRyxJQUxIO0lBTUEsS0FBS0UsSUFBTCxDQUFVRSxFQUFWLENBQWFQLEVBQUUsQ0FBQ1EsSUFBSCxDQUFRQyxTQUFSLENBQWtCRyxZQUEvQixFQUE2QyxZQUFZO01BQ3JELEtBQUtQLElBQUwsQ0FBVUMsT0FBVixHQUFvQixHQUFwQjtJQUNILENBRkQsRUFFRyxJQUZIO0VBR0g7QUFwQkksQ0FBVCIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiY2MuQ2xhc3Moe1xuICAgIGV4dGVuZHM6IGNjLkNvbXBvbmVudCxcblxuICAgIF9jYWxsYmFjazogbnVsbCxcblxuICAgIC8vIHVzZSB0aGlzIGZvciBpbml0aWFsaXphdGlvblxuICAgIG9uTG9hZDogZnVuY3Rpb24gKCkge1xuICAgICAgICB0aGlzLm5vZGUub3BhY2l0eSA9IDEwMDtcbiAgICAgICAgdGhpcy5ub2RlLm9uKGNjLk5vZGUuRXZlbnRUeXBlLlRPVUNIX1NUQVJULCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB0aGlzLm5vZGUub3BhY2l0eSA9IDI1NTtcbiAgICAgICAgfSwgdGhpcyk7XG4gICAgICAgIHRoaXMubm9kZS5vbihjYy5Ob2RlLkV2ZW50VHlwZS5UT1VDSF9FTkQsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHRoaXMubm9kZS5vcGFjaXR5ID0gMTAwO1xuICAgICAgICAgICAgaWYgKHRoaXMuX2NhbGxiYWNrKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5fY2FsbGJhY2soKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSwgdGhpcyk7XG4gICAgICAgIHRoaXMubm9kZS5vbihjYy5Ob2RlLkV2ZW50VHlwZS5UT1VDSF9DQU5DRUwsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHRoaXMubm9kZS5vcGFjaXR5ID0gMTAwO1xuICAgICAgICB9LCB0aGlzKTtcbiAgICB9LFxufSk7XG4iXX0=