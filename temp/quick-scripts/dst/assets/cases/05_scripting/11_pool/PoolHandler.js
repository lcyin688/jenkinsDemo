
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/cases/05_scripting/11_pool/PoolHandler.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'ea9ac+t92JFY6hOUuiIHUAT', 'PoolHandler');
// cases/05_scripting/11_pool/PoolHandler.js

"use strict";

var lastClick = 0;

function pauseresume() {
  var now = Date.now(); // Double click in 300 ms

  if (now - lastClick < 300) {
    this.stopAllActions();

    var pool = this.getComponent('PoolHandler')._pool;

    if (pool) {
      pool.put(this);
    } else {
      this.removeFromParent(true);
    }
  } // Click
  else {
    if (this.paused) {
      cc.director.getActionManager().resumeTarget(this);
    } else {
      cc.director.getActionManager().pauseTarget(this);
    }

    this.paused = !this.paused;
  }

  lastClick = now;
}

cc.Class({
  "extends": cc.Component,
  properties: {
    _pool: null
  },
  onLoad: function onLoad() {
    this.reuse();
  },
  unuse: function unuse() {
    this.node.off(cc.Node.EventType.TOUCH_END, pauseresume, this.node);
  },
  reuse: function reuse() {
    this.node.paused = false;
    this.node.on(cc.Node.EventType.TOUCH_END, pauseresume, this.node);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9jYXNlcy8wNV9zY3JpcHRpbmcvMTFfcG9vbC9Qb29sSGFuZGxlci5qcyJdLCJuYW1lcyI6WyJsYXN0Q2xpY2siLCJwYXVzZXJlc3VtZSIsIm5vdyIsIkRhdGUiLCJzdG9wQWxsQWN0aW9ucyIsInBvb2wiLCJnZXRDb21wb25lbnQiLCJfcG9vbCIsInB1dCIsInJlbW92ZUZyb21QYXJlbnQiLCJwYXVzZWQiLCJjYyIsImRpcmVjdG9yIiwiZ2V0QWN0aW9uTWFuYWdlciIsInJlc3VtZVRhcmdldCIsInBhdXNlVGFyZ2V0IiwiQ2xhc3MiLCJDb21wb25lbnQiLCJwcm9wZXJ0aWVzIiwib25Mb2FkIiwicmV1c2UiLCJ1bnVzZSIsIm5vZGUiLCJvZmYiLCJOb2RlIiwiRXZlbnRUeXBlIiwiVE9VQ0hfRU5EIiwib24iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsSUFBSUEsU0FBUyxHQUFHLENBQWhCOztBQUVBLFNBQVNDLFdBQVQsR0FBd0I7RUFDcEIsSUFBSUMsR0FBRyxHQUFHQyxJQUFJLENBQUNELEdBQUwsRUFBVixDQURvQixDQUVwQjs7RUFDQSxJQUFJQSxHQUFHLEdBQUdGLFNBQU4sR0FBa0IsR0FBdEIsRUFBMkI7SUFDdkIsS0FBS0ksY0FBTDs7SUFDQSxJQUFJQyxJQUFJLEdBQUcsS0FBS0MsWUFBTCxDQUFrQixhQUFsQixFQUFpQ0MsS0FBNUM7O0lBQ0EsSUFBSUYsSUFBSixFQUFVO01BQ05BLElBQUksQ0FBQ0csR0FBTCxDQUFTLElBQVQ7SUFDSCxDQUZELE1BR0s7TUFDRCxLQUFLQyxnQkFBTCxDQUFzQixJQUF0QjtJQUNIO0VBQ0osQ0FURCxDQVVBO0VBVkEsS0FXSztJQUNELElBQUksS0FBS0MsTUFBVCxFQUFpQjtNQUNiQyxFQUFFLENBQUNDLFFBQUgsQ0FBWUMsZ0JBQVosR0FBK0JDLFlBQS9CLENBQTRDLElBQTVDO0lBQ0gsQ0FGRCxNQUdLO01BQ0RILEVBQUUsQ0FBQ0MsUUFBSCxDQUFZQyxnQkFBWixHQUErQkUsV0FBL0IsQ0FBMkMsSUFBM0M7SUFDSDs7SUFDRCxLQUFLTCxNQUFMLEdBQWMsQ0FBQyxLQUFLQSxNQUFwQjtFQUNIOztFQUNEVixTQUFTLEdBQUdFLEdBQVo7QUFDSDs7QUFFRFMsRUFBRSxDQUFDSyxLQUFILENBQVM7RUFDTCxXQUFTTCxFQUFFLENBQUNNLFNBRFA7RUFHTEMsVUFBVSxFQUFFO0lBQ1JYLEtBQUssRUFBRTtFQURDLENBSFA7RUFPTFksTUFBTSxFQUFFLGtCQUFZO0lBQ2hCLEtBQUtDLEtBQUw7RUFDSCxDQVRJO0VBV0xDLEtBQUssRUFBRSxpQkFBWTtJQUNmLEtBQUtDLElBQUwsQ0FBVUMsR0FBVixDQUFjWixFQUFFLENBQUNhLElBQUgsQ0FBUUMsU0FBUixDQUFrQkMsU0FBaEMsRUFBMkN6QixXQUEzQyxFQUF3RCxLQUFLcUIsSUFBN0Q7RUFDSCxDQWJJO0VBZUxGLEtBQUssRUFBRSxpQkFBWTtJQUNmLEtBQUtFLElBQUwsQ0FBVVosTUFBVixHQUFtQixLQUFuQjtJQUNBLEtBQUtZLElBQUwsQ0FBVUssRUFBVixDQUFhaEIsRUFBRSxDQUFDYSxJQUFILENBQVFDLFNBQVIsQ0FBa0JDLFNBQS9CLEVBQTBDekIsV0FBMUMsRUFBdUQsS0FBS3FCLElBQTVEO0VBQ0g7QUFsQkksQ0FBVCIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsidmFyIGxhc3RDbGljayA9IDA7XG5cbmZ1bmN0aW9uIHBhdXNlcmVzdW1lICgpIHtcbiAgICB2YXIgbm93ID0gRGF0ZS5ub3coKTtcbiAgICAvLyBEb3VibGUgY2xpY2sgaW4gMzAwIG1zXG4gICAgaWYgKG5vdyAtIGxhc3RDbGljayA8IDMwMCkge1xuICAgICAgICB0aGlzLnN0b3BBbGxBY3Rpb25zKCk7XG4gICAgICAgIHZhciBwb29sID0gdGhpcy5nZXRDb21wb25lbnQoJ1Bvb2xIYW5kbGVyJykuX3Bvb2w7XG4gICAgICAgIGlmIChwb29sKSB7XG4gICAgICAgICAgICBwb29sLnB1dCh0aGlzKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMucmVtb3ZlRnJvbVBhcmVudCh0cnVlKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICAvLyBDbGlja1xuICAgIGVsc2Uge1xuICAgICAgICBpZiAodGhpcy5wYXVzZWQpIHtcbiAgICAgICAgICAgIGNjLmRpcmVjdG9yLmdldEFjdGlvbk1hbmFnZXIoKS5yZXN1bWVUYXJnZXQodGhpcyk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBjYy5kaXJlY3Rvci5nZXRBY3Rpb25NYW5hZ2VyKCkucGF1c2VUYXJnZXQodGhpcyk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5wYXVzZWQgPSAhdGhpcy5wYXVzZWQ7XG4gICAgfVxuICAgIGxhc3RDbGljayA9IG5vdztcbn1cblxuY2MuQ2xhc3Moe1xuICAgIGV4dGVuZHM6IGNjLkNvbXBvbmVudCxcblxuICAgIHByb3BlcnRpZXM6IHtcbiAgICAgICAgX3Bvb2w6IG51bGxcbiAgICB9LFxuICAgIFxuICAgIG9uTG9hZDogZnVuY3Rpb24gKCkge1xuICAgICAgICB0aGlzLnJldXNlKCk7XG4gICAgfSxcbiAgICBcbiAgICB1bnVzZTogZnVuY3Rpb24gKCkge1xuICAgICAgICB0aGlzLm5vZGUub2ZmKGNjLk5vZGUuRXZlbnRUeXBlLlRPVUNIX0VORCwgcGF1c2VyZXN1bWUsIHRoaXMubm9kZSk7XG4gICAgfSxcbiAgICBcbiAgICByZXVzZTogZnVuY3Rpb24gKCkge1xuICAgICAgICB0aGlzLm5vZGUucGF1c2VkID0gZmFsc2U7XG4gICAgICAgIHRoaXMubm9kZS5vbihjYy5Ob2RlLkV2ZW50VHlwZS5UT1VDSF9FTkQsIHBhdXNlcmVzdW1lLCB0aGlzLm5vZGUpO1xuICAgIH1cbn0pO1xuIl19