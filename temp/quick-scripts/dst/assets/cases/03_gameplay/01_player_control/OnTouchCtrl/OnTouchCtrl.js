
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/cases/03_gameplay/01_player_control/OnTouchCtrl/OnTouchCtrl.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'f9b352jbGtMIqjEuud60Wpx', 'OnTouchCtrl');
// cases/03_gameplay/01_player_control/OnTouchCtrl/OnTouchCtrl.js

"use strict";

var i18n = require('i18n');

cc.Class({
  "extends": cc.Component,
  properties: {
    canvas: cc.Node,
    touchLocationDisplay: {
      "default": null,
      type: cc.Label
    },
    follower: {
      "default": null,
      type: cc.Node
    },
    followSpeed: 200
  },
  // use this for initialization
  onLoad: function onLoad() {
    var self = this;
    self.moveToPos = cc.v2(0, 0);
    self.isMoving = false;
    self.canvas.on(cc.Node.EventType.TOUCH_START, function (event) {
      var touches = event.getTouches();
      var touchLoc = touches[0].getLocation();
      self.isMoving = true;
      self.moveToPos = self.follower.parent.convertToNodeSpaceAR(touchLoc);
      self.touchLocationDisplay.textKey = i18n.t("cases/03_gameplay/01_player_control/On/OnTouchCtrl.js.1") + Math.floor(touchLoc.x) + ', ' + Math.floor(touchLoc.y) + ')';
    }, self.node);
    self.canvas.on(cc.Node.EventType.TOUCH_MOVE, function (event) {
      var touches = event.getTouches();
      var touchLoc = touches[0].getLocation();
      self.moveToPos = self.follower.parent.convertToNodeSpaceAR(touchLoc);
      self.touchLocationDisplay.textKey = i18n.t("cases/03_gameplay/01_player_control/On/OnTouchCtrl.js.1") + Math.floor(touchLoc.x) + ', ' + Math.floor(touchLoc.y) + ')';
    }, self.node);
    self.canvas.on(cc.Node.EventType.TOUCH_END, function (event) {
      self.isMoving = false; // when touch ended, stop moving
    }, self.node);
  },
  // called every frame
  update: function update(dt) {
    if (!this.isMoving) return;
    var oldPos = this.follower.position; // get move direction

    var direction = this.moveToPos.sub(oldPos).normalize(); // multiply direction with distance to get new position

    var newPos = oldPos.add(direction.mul(this.followSpeed * dt)); // set new position

    this.follower.setPosition(newPos);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9jYXNlcy8wM19nYW1lcGxheS8wMV9wbGF5ZXJfY29udHJvbC9PblRvdWNoQ3RybC9PblRvdWNoQ3RybC5qcyJdLCJuYW1lcyI6WyJpMThuIiwicmVxdWlyZSIsImNjIiwiQ2xhc3MiLCJDb21wb25lbnQiLCJwcm9wZXJ0aWVzIiwiY2FudmFzIiwiTm9kZSIsInRvdWNoTG9jYXRpb25EaXNwbGF5IiwidHlwZSIsIkxhYmVsIiwiZm9sbG93ZXIiLCJmb2xsb3dTcGVlZCIsIm9uTG9hZCIsInNlbGYiLCJtb3ZlVG9Qb3MiLCJ2MiIsImlzTW92aW5nIiwib24iLCJFdmVudFR5cGUiLCJUT1VDSF9TVEFSVCIsImV2ZW50IiwidG91Y2hlcyIsImdldFRvdWNoZXMiLCJ0b3VjaExvYyIsImdldExvY2F0aW9uIiwicGFyZW50IiwiY29udmVydFRvTm9kZVNwYWNlQVIiLCJ0ZXh0S2V5IiwidCIsIk1hdGgiLCJmbG9vciIsIngiLCJ5Iiwibm9kZSIsIlRPVUNIX01PVkUiLCJUT1VDSF9FTkQiLCJ1cGRhdGUiLCJkdCIsIm9sZFBvcyIsInBvc2l0aW9uIiwiZGlyZWN0aW9uIiwic3ViIiwibm9ybWFsaXplIiwibmV3UG9zIiwiYWRkIiwibXVsIiwic2V0UG9zaXRpb24iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsSUFBTUEsSUFBSSxHQUFHQyxPQUFPLENBQUMsTUFBRCxDQUFwQjs7QUFFQUMsRUFBRSxDQUFDQyxLQUFILENBQVM7RUFDTCxXQUFTRCxFQUFFLENBQUNFLFNBRFA7RUFHTEMsVUFBVSxFQUFFO0lBQ1JDLE1BQU0sRUFBRUosRUFBRSxDQUFDSyxJQURIO0lBRVJDLG9CQUFvQixFQUFFO01BQ2xCLFdBQVMsSUFEUztNQUVsQkMsSUFBSSxFQUFFUCxFQUFFLENBQUNRO0lBRlMsQ0FGZDtJQU1SQyxRQUFRLEVBQUU7TUFDTixXQUFTLElBREg7TUFFTkYsSUFBSSxFQUFFUCxFQUFFLENBQUNLO0lBRkgsQ0FORjtJQVVSSyxXQUFXLEVBQUU7RUFWTCxDQUhQO0VBZ0JMO0VBQ0FDLE1BQU0sRUFBRSxrQkFBWTtJQUNoQixJQUFJQyxJQUFJLEdBQUcsSUFBWDtJQUNBQSxJQUFJLENBQUNDLFNBQUwsR0FBaUJiLEVBQUUsQ0FBQ2MsRUFBSCxDQUFNLENBQU4sRUFBUyxDQUFULENBQWpCO0lBQ0FGLElBQUksQ0FBQ0csUUFBTCxHQUFnQixLQUFoQjtJQUNBSCxJQUFJLENBQUNSLE1BQUwsQ0FBWVksRUFBWixDQUFlaEIsRUFBRSxDQUFDSyxJQUFILENBQVFZLFNBQVIsQ0FBa0JDLFdBQWpDLEVBQThDLFVBQVVDLEtBQVYsRUFBaUI7TUFDM0QsSUFBSUMsT0FBTyxHQUFHRCxLQUFLLENBQUNFLFVBQU4sRUFBZDtNQUNBLElBQUlDLFFBQVEsR0FBR0YsT0FBTyxDQUFDLENBQUQsQ0FBUCxDQUFXRyxXQUFYLEVBQWY7TUFDQVgsSUFBSSxDQUFDRyxRQUFMLEdBQWdCLElBQWhCO01BQ0FILElBQUksQ0FBQ0MsU0FBTCxHQUFpQkQsSUFBSSxDQUFDSCxRQUFMLENBQWNlLE1BQWQsQ0FBcUJDLG9CQUFyQixDQUEwQ0gsUUFBMUMsQ0FBakI7TUFDQVYsSUFBSSxDQUFDTixvQkFBTCxDQUEwQm9CLE9BQTFCLEdBQW9DNUIsSUFBSSxDQUFDNkIsQ0FBTCxDQUFPLHlEQUFQLElBQW9FQyxJQUFJLENBQUNDLEtBQUwsQ0FBV1AsUUFBUSxDQUFDUSxDQUFwQixDQUFwRSxHQUE2RixJQUE3RixHQUFvR0YsSUFBSSxDQUFDQyxLQUFMLENBQVdQLFFBQVEsQ0FBQ1MsQ0FBcEIsQ0FBcEcsR0FBNkgsR0FBaks7SUFDSCxDQU5ELEVBTUduQixJQUFJLENBQUNvQixJQU5SO0lBT0FwQixJQUFJLENBQUNSLE1BQUwsQ0FBWVksRUFBWixDQUFlaEIsRUFBRSxDQUFDSyxJQUFILENBQVFZLFNBQVIsQ0FBa0JnQixVQUFqQyxFQUE2QyxVQUFVZCxLQUFWLEVBQWlCO01BQzFELElBQUlDLE9BQU8sR0FBR0QsS0FBSyxDQUFDRSxVQUFOLEVBQWQ7TUFDQSxJQUFJQyxRQUFRLEdBQUdGLE9BQU8sQ0FBQyxDQUFELENBQVAsQ0FBV0csV0FBWCxFQUFmO01BQ0FYLElBQUksQ0FBQ0MsU0FBTCxHQUFpQkQsSUFBSSxDQUFDSCxRQUFMLENBQWNlLE1BQWQsQ0FBcUJDLG9CQUFyQixDQUEwQ0gsUUFBMUMsQ0FBakI7TUFDQVYsSUFBSSxDQUFDTixvQkFBTCxDQUEwQm9CLE9BQTFCLEdBQW9DNUIsSUFBSSxDQUFDNkIsQ0FBTCxDQUFPLHlEQUFQLElBQW9FQyxJQUFJLENBQUNDLEtBQUwsQ0FBV1AsUUFBUSxDQUFDUSxDQUFwQixDQUFwRSxHQUE2RixJQUE3RixHQUFvR0YsSUFBSSxDQUFDQyxLQUFMLENBQVdQLFFBQVEsQ0FBQ1MsQ0FBcEIsQ0FBcEcsR0FBNkgsR0FBaks7SUFDSCxDQUxELEVBS0duQixJQUFJLENBQUNvQixJQUxSO0lBTUFwQixJQUFJLENBQUNSLE1BQUwsQ0FBWVksRUFBWixDQUFlaEIsRUFBRSxDQUFDSyxJQUFILENBQVFZLFNBQVIsQ0FBa0JpQixTQUFqQyxFQUE0QyxVQUFVZixLQUFWLEVBQWlCO01BQ3pEUCxJQUFJLENBQUNHLFFBQUwsR0FBZ0IsS0FBaEIsQ0FEeUQsQ0FDbEM7SUFDMUIsQ0FGRCxFQUVHSCxJQUFJLENBQUNvQixJQUZSO0VBR0gsQ0FyQ0k7RUF1Q0w7RUFDQUcsTUFBTSxFQUFFLGdCQUFVQyxFQUFWLEVBQWM7SUFDbEIsSUFBSSxDQUFDLEtBQUtyQixRQUFWLEVBQW9CO0lBQ3BCLElBQUlzQixNQUFNLEdBQUcsS0FBSzVCLFFBQUwsQ0FBYzZCLFFBQTNCLENBRmtCLENBR2xCOztJQUNBLElBQUlDLFNBQVMsR0FBRyxLQUFLMUIsU0FBTCxDQUFlMkIsR0FBZixDQUFtQkgsTUFBbkIsRUFBMkJJLFNBQTNCLEVBQWhCLENBSmtCLENBS2xCOztJQUNBLElBQUlDLE1BQU0sR0FBR0wsTUFBTSxDQUFDTSxHQUFQLENBQVdKLFNBQVMsQ0FBQ0ssR0FBVixDQUFjLEtBQUtsQyxXQUFMLEdBQW1CMEIsRUFBakMsQ0FBWCxDQUFiLENBTmtCLENBT2xCOztJQUNBLEtBQUszQixRQUFMLENBQWNvQyxXQUFkLENBQTBCSCxNQUExQjtFQUNIO0FBakRJLENBQVQiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IGkxOG4gPSByZXF1aXJlKCdpMThuJyk7XG5cbmNjLkNsYXNzKHtcbiAgICBleHRlbmRzOiBjYy5Db21wb25lbnQsXG5cbiAgICBwcm9wZXJ0aWVzOiB7XG4gICAgICAgIGNhbnZhczogY2MuTm9kZSxcbiAgICAgICAgdG91Y2hMb2NhdGlvbkRpc3BsYXk6IHtcbiAgICAgICAgICAgIGRlZmF1bHQ6IG51bGwsXG4gICAgICAgICAgICB0eXBlOiBjYy5MYWJlbFxuICAgICAgICB9LFxuICAgICAgICBmb2xsb3dlcjoge1xuICAgICAgICAgICAgZGVmYXVsdDogbnVsbCxcbiAgICAgICAgICAgIHR5cGU6IGNjLk5vZGVcbiAgICAgICAgfSxcbiAgICAgICAgZm9sbG93U3BlZWQ6IDIwMFxuICAgIH0sXG5cbiAgICAvLyB1c2UgdGhpcyBmb3IgaW5pdGlhbGl6YXRpb25cbiAgICBvbkxvYWQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIHNlbGYgPSB0aGlzO1xuICAgICAgICBzZWxmLm1vdmVUb1BvcyA9IGNjLnYyKDAsIDApO1xuICAgICAgICBzZWxmLmlzTW92aW5nID0gZmFsc2U7XG4gICAgICAgIHNlbGYuY2FudmFzLm9uKGNjLk5vZGUuRXZlbnRUeXBlLlRPVUNIX1NUQVJULCBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgICAgICAgIHZhciB0b3VjaGVzID0gZXZlbnQuZ2V0VG91Y2hlcygpO1xuICAgICAgICAgICAgdmFyIHRvdWNoTG9jID0gdG91Y2hlc1swXS5nZXRMb2NhdGlvbigpO1xuICAgICAgICAgICAgc2VsZi5pc01vdmluZyA9IHRydWU7XG4gICAgICAgICAgICBzZWxmLm1vdmVUb1BvcyA9IHNlbGYuZm9sbG93ZXIucGFyZW50LmNvbnZlcnRUb05vZGVTcGFjZUFSKHRvdWNoTG9jKTtcbiAgICAgICAgICAgIHNlbGYudG91Y2hMb2NhdGlvbkRpc3BsYXkudGV4dEtleSA9IGkxOG4udChcImNhc2VzLzAzX2dhbWVwbGF5LzAxX3BsYXllcl9jb250cm9sL09uL09uVG91Y2hDdHJsLmpzLjFcIikgKyBNYXRoLmZsb29yKHRvdWNoTG9jLngpICsgJywgJyArIE1hdGguZmxvb3IodG91Y2hMb2MueSkgKyAnKSc7XG4gICAgICAgIH0sIHNlbGYubm9kZSk7XG4gICAgICAgIHNlbGYuY2FudmFzLm9uKGNjLk5vZGUuRXZlbnRUeXBlLlRPVUNIX01PVkUsIGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgICAgICAgdmFyIHRvdWNoZXMgPSBldmVudC5nZXRUb3VjaGVzKCk7XG4gICAgICAgICAgICB2YXIgdG91Y2hMb2MgPSB0b3VjaGVzWzBdLmdldExvY2F0aW9uKCk7XG4gICAgICAgICAgICBzZWxmLm1vdmVUb1BvcyA9IHNlbGYuZm9sbG93ZXIucGFyZW50LmNvbnZlcnRUb05vZGVTcGFjZUFSKHRvdWNoTG9jKTtcbiAgICAgICAgICAgIHNlbGYudG91Y2hMb2NhdGlvbkRpc3BsYXkudGV4dEtleSA9IGkxOG4udChcImNhc2VzLzAzX2dhbWVwbGF5LzAxX3BsYXllcl9jb250cm9sL09uL09uVG91Y2hDdHJsLmpzLjFcIikgKyBNYXRoLmZsb29yKHRvdWNoTG9jLngpICsgJywgJyArIE1hdGguZmxvb3IodG91Y2hMb2MueSkgKyAnKSc7XG4gICAgICAgIH0sIHNlbGYubm9kZSk7XG4gICAgICAgIHNlbGYuY2FudmFzLm9uKGNjLk5vZGUuRXZlbnRUeXBlLlRPVUNIX0VORCwgZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICAgICAgICBzZWxmLmlzTW92aW5nID0gZmFsc2U7IC8vIHdoZW4gdG91Y2ggZW5kZWQsIHN0b3AgbW92aW5nXG4gICAgICAgIH0sIHNlbGYubm9kZSk7XG4gICAgfSxcblxuICAgIC8vIGNhbGxlZCBldmVyeSBmcmFtZVxuICAgIHVwZGF0ZTogZnVuY3Rpb24gKGR0KSB7XG4gICAgICAgIGlmICghdGhpcy5pc01vdmluZykgcmV0dXJuO1xuICAgICAgICB2YXIgb2xkUG9zID0gdGhpcy5mb2xsb3dlci5wb3NpdGlvbjtcbiAgICAgICAgLy8gZ2V0IG1vdmUgZGlyZWN0aW9uXG4gICAgICAgIHZhciBkaXJlY3Rpb24gPSB0aGlzLm1vdmVUb1Bvcy5zdWIob2xkUG9zKS5ub3JtYWxpemUoKTtcbiAgICAgICAgLy8gbXVsdGlwbHkgZGlyZWN0aW9uIHdpdGggZGlzdGFuY2UgdG8gZ2V0IG5ldyBwb3NpdGlvblxuICAgICAgICB2YXIgbmV3UG9zID0gb2xkUG9zLmFkZChkaXJlY3Rpb24ubXVsKHRoaXMuZm9sbG93U3BlZWQgKiBkdCkpO1xuICAgICAgICAvLyBzZXQgbmV3IHBvc2l0aW9uXG4gICAgICAgIHRoaXMuZm9sbG93ZXIuc2V0UG9zaXRpb24obmV3UG9zKTtcbiAgICB9XG59KTtcbiJdfQ==