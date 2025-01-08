
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/cases/3d/raycast.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '99487EWEA1JVpLMAPptRiG6', 'raycast');
// cases/3d/raycast.js

"use strict";

var WHITE = cc.Color.WHITE;
cc.Class({
  "extends": cc.Component,
  properties: {
    mesh: cc.Node
  },
  // LIFE-CYCLE CALLBACKS:
  // onLoad () {},
  start: function start() {
    var canvas = cc.find('Canvas');
    canvas.on(cc.Node.EventType.TOUCH_START, this.onTouchStart, this);
    canvas.on(cc.Node.EventType.TOUCH_MOVE, this.onTouchMove, this);
    canvas.on(cc.Node.EventType.TOUCH_END, this.onTouchEnd, this);
    this.touchPos = null;
    this.results = [];
  },
  onTouchStart: function onTouchStart(event) {
    this.touchPos = event.touch.getLocation();
  },
  onTouchMove: function onTouchMove(event) {
    this.touchPos = event.touch.getLocation();
  },
  onTouchEnd: function onTouchEnd(event) {
    this.touchPos = null;
  },
  raycast: function raycast(pos) {
    var ray = cc.Camera.main.getRay(pos);
    return cc.geomUtils.intersect.raycast(this.node, ray);
  },
  update: function update(dt) {
    for (var i = 0; i < this.results.length; i++) {
      this.results[i].node.opacity = 255;
    }

    this.results.length = 0;
    if (!this.touchPos) return;
    var ray = cc.Camera.main.getRay(this.touchPos);
    var results = cc.geomUtils.intersect.raycast(this.node, ray);

    if (results.length > 0) {
      // results[0].node.opacity = 100;
      var distance = results[0].distance;
      var d = cc.vmath.vec3.normalize(cc.v3(), ray.d);
      var p = cc.vmath.vec3.scaleAndAdd(cc.v3(), ray.o, d, distance);
      this.mesh.position = p;
    }

    this.results = results;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9jYXNlcy8zZC9yYXljYXN0LmpzIl0sIm5hbWVzIjpbIldISVRFIiwiY2MiLCJDb2xvciIsIkNsYXNzIiwiQ29tcG9uZW50IiwicHJvcGVydGllcyIsIm1lc2giLCJOb2RlIiwic3RhcnQiLCJjYW52YXMiLCJmaW5kIiwib24iLCJFdmVudFR5cGUiLCJUT1VDSF9TVEFSVCIsIm9uVG91Y2hTdGFydCIsIlRPVUNIX01PVkUiLCJvblRvdWNoTW92ZSIsIlRPVUNIX0VORCIsIm9uVG91Y2hFbmQiLCJ0b3VjaFBvcyIsInJlc3VsdHMiLCJldmVudCIsInRvdWNoIiwiZ2V0TG9jYXRpb24iLCJyYXljYXN0IiwicG9zIiwicmF5IiwiQ2FtZXJhIiwibWFpbiIsImdldFJheSIsImdlb21VdGlscyIsImludGVyc2VjdCIsIm5vZGUiLCJ1cGRhdGUiLCJkdCIsImkiLCJsZW5ndGgiLCJvcGFjaXR5IiwiZGlzdGFuY2UiLCJkIiwidm1hdGgiLCJ2ZWMzIiwibm9ybWFsaXplIiwidjMiLCJwIiwic2NhbGVBbmRBZGQiLCJvIiwicG9zaXRpb24iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsSUFBTUEsS0FBSyxHQUFHQyxFQUFFLENBQUNDLEtBQUgsQ0FBU0YsS0FBdkI7QUFFQUMsRUFBRSxDQUFDRSxLQUFILENBQVM7RUFDTCxXQUFTRixFQUFFLENBQUNHLFNBRFA7RUFHTEMsVUFBVSxFQUFFO0lBQ1JDLElBQUksRUFBRUwsRUFBRSxDQUFDTTtFQURELENBSFA7RUFPTDtFQUVBO0VBRUFDLEtBWEssbUJBV0k7SUFDTCxJQUFJQyxNQUFNLEdBQUdSLEVBQUUsQ0FBQ1MsSUFBSCxDQUFRLFFBQVIsQ0FBYjtJQUNBRCxNQUFNLENBQUNFLEVBQVAsQ0FBVVYsRUFBRSxDQUFDTSxJQUFILENBQVFLLFNBQVIsQ0FBa0JDLFdBQTVCLEVBQXlDLEtBQUtDLFlBQTlDLEVBQTRELElBQTVEO0lBQ0FMLE1BQU0sQ0FBQ0UsRUFBUCxDQUFVVixFQUFFLENBQUNNLElBQUgsQ0FBUUssU0FBUixDQUFrQkcsVUFBNUIsRUFBd0MsS0FBS0MsV0FBN0MsRUFBMEQsSUFBMUQ7SUFDQVAsTUFBTSxDQUFDRSxFQUFQLENBQVVWLEVBQUUsQ0FBQ00sSUFBSCxDQUFRSyxTQUFSLENBQWtCSyxTQUE1QixFQUF1QyxLQUFLQyxVQUE1QyxFQUF3RCxJQUF4RDtJQUVBLEtBQUtDLFFBQUwsR0FBZ0IsSUFBaEI7SUFDQSxLQUFLQyxPQUFMLEdBQWUsRUFBZjtFQUNILENBbkJJO0VBcUJMTixZQXJCSyx3QkFxQlNPLEtBckJULEVBcUJnQjtJQUNqQixLQUFLRixRQUFMLEdBQWdCRSxLQUFLLENBQUNDLEtBQU4sQ0FBWUMsV0FBWixFQUFoQjtFQUNILENBdkJJO0VBeUJMUCxXQXpCSyx1QkF5QlFLLEtBekJSLEVBeUJlO0lBQ2hCLEtBQUtGLFFBQUwsR0FBZ0JFLEtBQUssQ0FBQ0MsS0FBTixDQUFZQyxXQUFaLEVBQWhCO0VBQ0gsQ0EzQkk7RUE2QkxMLFVBN0JLLHNCQTZCT0csS0E3QlAsRUE2QmM7SUFDZixLQUFLRixRQUFMLEdBQWdCLElBQWhCO0VBQ0gsQ0EvQkk7RUFpQ0xLLE9BakNLLG1CQWlDSUMsR0FqQ0osRUFpQ1M7SUFDVixJQUFJQyxHQUFHLEdBQUd6QixFQUFFLENBQUMwQixNQUFILENBQVVDLElBQVYsQ0FBZUMsTUFBZixDQUFzQkosR0FBdEIsQ0FBVjtJQUNBLE9BQU94QixFQUFFLENBQUM2QixTQUFILENBQWFDLFNBQWIsQ0FBdUJQLE9BQXZCLENBQStCLEtBQUtRLElBQXBDLEVBQTBDTixHQUExQyxDQUFQO0VBQ0gsQ0FwQ0k7RUFzQ0xPLE1BdENLLGtCQXNDR0MsRUF0Q0gsRUFzQ087SUFDUixLQUFLLElBQUlDLENBQUMsR0FBRyxDQUFiLEVBQWdCQSxDQUFDLEdBQUcsS0FBS2YsT0FBTCxDQUFhZ0IsTUFBakMsRUFBeUNELENBQUMsRUFBMUMsRUFBOEM7TUFDMUMsS0FBS2YsT0FBTCxDQUFhZSxDQUFiLEVBQWdCSCxJQUFoQixDQUFxQkssT0FBckIsR0FBK0IsR0FBL0I7SUFDSDs7SUFDRCxLQUFLakIsT0FBTCxDQUFhZ0IsTUFBYixHQUFzQixDQUF0QjtJQUVBLElBQUksQ0FBQyxLQUFLakIsUUFBVixFQUFvQjtJQUVwQixJQUFJTyxHQUFHLEdBQUd6QixFQUFFLENBQUMwQixNQUFILENBQVVDLElBQVYsQ0FBZUMsTUFBZixDQUFzQixLQUFLVixRQUEzQixDQUFWO0lBQ0EsSUFBSUMsT0FBTyxHQUFHbkIsRUFBRSxDQUFDNkIsU0FBSCxDQUFhQyxTQUFiLENBQXVCUCxPQUF2QixDQUErQixLQUFLUSxJQUFwQyxFQUEwQ04sR0FBMUMsQ0FBZDs7SUFDQSxJQUFJTixPQUFPLENBQUNnQixNQUFSLEdBQWlCLENBQXJCLEVBQXdCO01BQ3BCO01BRUEsSUFBSUUsUUFBUSxHQUFHbEIsT0FBTyxDQUFDLENBQUQsQ0FBUCxDQUFXa0IsUUFBMUI7TUFFQSxJQUFJQyxDQUFDLEdBQUd0QyxFQUFFLENBQUN1QyxLQUFILENBQVNDLElBQVQsQ0FBY0MsU0FBZCxDQUF3QnpDLEVBQUUsQ0FBQzBDLEVBQUgsRUFBeEIsRUFBaUNqQixHQUFHLENBQUNhLENBQXJDLENBQVI7TUFDQSxJQUFJSyxDQUFDLEdBQUczQyxFQUFFLENBQUN1QyxLQUFILENBQVNDLElBQVQsQ0FBY0ksV0FBZCxDQUEwQjVDLEVBQUUsQ0FBQzBDLEVBQUgsRUFBMUIsRUFBbUNqQixHQUFHLENBQUNvQixDQUF2QyxFQUEwQ1AsQ0FBMUMsRUFBNkNELFFBQTdDLENBQVI7TUFDQSxLQUFLaEMsSUFBTCxDQUFVeUMsUUFBVixHQUFxQkgsQ0FBckI7SUFDSDs7SUFDRCxLQUFLeEIsT0FBTCxHQUFlQSxPQUFmO0VBQ0g7QUExREksQ0FBVCIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgV0hJVEUgPSBjYy5Db2xvci5XSElURTtcblxuY2MuQ2xhc3Moe1xuICAgIGV4dGVuZHM6IGNjLkNvbXBvbmVudCxcblxuICAgIHByb3BlcnRpZXM6IHtcbiAgICAgICAgbWVzaDogY2MuTm9kZVxuICAgIH0sXG5cbiAgICAvLyBMSUZFLUNZQ0xFIENBTExCQUNLUzpcblxuICAgIC8vIG9uTG9hZCAoKSB7fSxcblxuICAgIHN0YXJ0ICgpIHtcbiAgICAgICAgdmFyIGNhbnZhcyA9IGNjLmZpbmQoJ0NhbnZhcycpO1xuICAgICAgICBjYW52YXMub24oY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfU1RBUlQsIHRoaXMub25Ub3VjaFN0YXJ0LCB0aGlzKTtcbiAgICAgICAgY2FudmFzLm9uKGNjLk5vZGUuRXZlbnRUeXBlLlRPVUNIX01PVkUsIHRoaXMub25Ub3VjaE1vdmUsIHRoaXMpO1xuICAgICAgICBjYW52YXMub24oY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfRU5ELCB0aGlzLm9uVG91Y2hFbmQsIHRoaXMpO1xuXG4gICAgICAgIHRoaXMudG91Y2hQb3MgPSBudWxsO1xuICAgICAgICB0aGlzLnJlc3VsdHMgPSBbXTtcbiAgICB9LFxuXG4gICAgb25Ub3VjaFN0YXJ0IChldmVudCkge1xuICAgICAgICB0aGlzLnRvdWNoUG9zID0gZXZlbnQudG91Y2guZ2V0TG9jYXRpb24oKTtcbiAgICB9LFxuXG4gICAgb25Ub3VjaE1vdmUgKGV2ZW50KSB7XG4gICAgICAgIHRoaXMudG91Y2hQb3MgPSBldmVudC50b3VjaC5nZXRMb2NhdGlvbigpO1xuICAgIH0sXG5cbiAgICBvblRvdWNoRW5kIChldmVudCkge1xuICAgICAgICB0aGlzLnRvdWNoUG9zID0gbnVsbDtcbiAgICB9LFxuXG4gICAgcmF5Y2FzdCAocG9zKSB7XG4gICAgICAgIGxldCByYXkgPSBjYy5DYW1lcmEubWFpbi5nZXRSYXkocG9zKTtcbiAgICAgICAgcmV0dXJuIGNjLmdlb21VdGlscy5pbnRlcnNlY3QucmF5Y2FzdCh0aGlzLm5vZGUsIHJheSk7XG4gICAgfSxcblxuICAgIHVwZGF0ZSAoZHQpIHtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLnJlc3VsdHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIHRoaXMucmVzdWx0c1tpXS5ub2RlLm9wYWNpdHkgPSAyNTU7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5yZXN1bHRzLmxlbmd0aCA9IDA7XG5cbiAgICAgICAgaWYgKCF0aGlzLnRvdWNoUG9zKSByZXR1cm47XG5cbiAgICAgICAgbGV0IHJheSA9IGNjLkNhbWVyYS5tYWluLmdldFJheSh0aGlzLnRvdWNoUG9zKTtcbiAgICAgICAgbGV0IHJlc3VsdHMgPSBjYy5nZW9tVXRpbHMuaW50ZXJzZWN0LnJheWNhc3QodGhpcy5ub2RlLCByYXkpO1xuICAgICAgICBpZiAocmVzdWx0cy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICAvLyByZXN1bHRzWzBdLm5vZGUub3BhY2l0eSA9IDEwMDtcblxuICAgICAgICAgICAgbGV0IGRpc3RhbmNlID0gcmVzdWx0c1swXS5kaXN0YW5jZTtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgbGV0IGQgPSBjYy52bWF0aC52ZWMzLm5vcm1hbGl6ZShjYy52MygpLCByYXkuZCk7XG4gICAgICAgICAgICBsZXQgcCA9IGNjLnZtYXRoLnZlYzMuc2NhbGVBbmRBZGQoY2MudjMoKSwgcmF5Lm8sIGQsIGRpc3RhbmNlKTtcbiAgICAgICAgICAgIHRoaXMubWVzaC5wb3NpdGlvbiA9IHA7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5yZXN1bHRzID0gcmVzdWx0cztcbiAgICB9LFxufSk7XG4iXX0=