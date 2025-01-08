
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/cases/3d/screen-to-world-point.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'ca9ec5p7O9EHYbE772Zf4dj', 'screen-to-world-point');
// cases/3d/screen-to-world-point.js

"use strict";

var WHITE = cc.Color.WHITE;
cc.Class({
  "extends": cc.Component,
  properties: {
    box: cc.Node,
    distanceLabel: cc.Label
  },
  // LIFE-CYCLE CALLBACKS:
  // onLoad () {},
  start: function start() {
    var canvas = cc.find('Canvas');
    canvas.on(cc.Node.EventType.TOUCH_START, this.onTouchStart, this);
    canvas.on(cc.Node.EventType.TOUCH_MOVE, this.onTouchMove, this);
    this.distance = 0.5;
  },
  onTouchStart: function onTouchStart(event) {
    this.moveBox(event.touch.getLocation());
  },
  onTouchMove: function onTouchMove(event) {
    this.moveBox(event.touch.getLocation());
  },
  moveBox: function moveBox(touchPos) {
    var camera = cc.Camera.findCamera(this.box);
    var pos = camera.getScreenToWorldPoint(cc.v3(touchPos.x, touchPos.y, this.distance));
    this.box.position = this.box.parent.convertToNodeSpaceAR(pos);
  },
  distanceChanged: function distanceChanged(slider) {
    this.distance = parseFloat(slider.progress.toFixed(2));
    this.distanceLabel.string = 'distance : ' + this.distance;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9jYXNlcy8zZC9zY3JlZW4tdG8td29ybGQtcG9pbnQuanMiXSwibmFtZXMiOlsiV0hJVEUiLCJjYyIsIkNvbG9yIiwiQ2xhc3MiLCJDb21wb25lbnQiLCJwcm9wZXJ0aWVzIiwiYm94IiwiTm9kZSIsImRpc3RhbmNlTGFiZWwiLCJMYWJlbCIsInN0YXJ0IiwiY2FudmFzIiwiZmluZCIsIm9uIiwiRXZlbnRUeXBlIiwiVE9VQ0hfU1RBUlQiLCJvblRvdWNoU3RhcnQiLCJUT1VDSF9NT1ZFIiwib25Ub3VjaE1vdmUiLCJkaXN0YW5jZSIsImV2ZW50IiwibW92ZUJveCIsInRvdWNoIiwiZ2V0TG9jYXRpb24iLCJ0b3VjaFBvcyIsImNhbWVyYSIsIkNhbWVyYSIsImZpbmRDYW1lcmEiLCJwb3MiLCJnZXRTY3JlZW5Ub1dvcmxkUG9pbnQiLCJ2MyIsIngiLCJ5IiwicG9zaXRpb24iLCJwYXJlbnQiLCJjb252ZXJ0VG9Ob2RlU3BhY2VBUiIsImRpc3RhbmNlQ2hhbmdlZCIsInNsaWRlciIsInBhcnNlRmxvYXQiLCJwcm9ncmVzcyIsInRvRml4ZWQiLCJzdHJpbmciXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsSUFBTUEsS0FBSyxHQUFHQyxFQUFFLENBQUNDLEtBQUgsQ0FBU0YsS0FBdkI7QUFFQUMsRUFBRSxDQUFDRSxLQUFILENBQVM7RUFDTCxXQUFTRixFQUFFLENBQUNHLFNBRFA7RUFHTEMsVUFBVSxFQUFFO0lBQ1JDLEdBQUcsRUFBRUwsRUFBRSxDQUFDTSxJQURBO0lBRVJDLGFBQWEsRUFBRVAsRUFBRSxDQUFDUTtFQUZWLENBSFA7RUFRTDtFQUVBO0VBRUFDLEtBWkssbUJBWUk7SUFDTCxJQUFJQyxNQUFNLEdBQUdWLEVBQUUsQ0FBQ1csSUFBSCxDQUFRLFFBQVIsQ0FBYjtJQUNBRCxNQUFNLENBQUNFLEVBQVAsQ0FBVVosRUFBRSxDQUFDTSxJQUFILENBQVFPLFNBQVIsQ0FBa0JDLFdBQTVCLEVBQXlDLEtBQUtDLFlBQTlDLEVBQTRELElBQTVEO0lBQ0FMLE1BQU0sQ0FBQ0UsRUFBUCxDQUFVWixFQUFFLENBQUNNLElBQUgsQ0FBUU8sU0FBUixDQUFrQkcsVUFBNUIsRUFBd0MsS0FBS0MsV0FBN0MsRUFBMEQsSUFBMUQ7SUFFQSxLQUFLQyxRQUFMLEdBQWdCLEdBQWhCO0VBQ0gsQ0FsQkk7RUFvQkxILFlBcEJLLHdCQW9CU0ksS0FwQlQsRUFvQmdCO0lBQ2pCLEtBQUtDLE9BQUwsQ0FBYUQsS0FBSyxDQUFDRSxLQUFOLENBQVlDLFdBQVosRUFBYjtFQUNILENBdEJJO0VBd0JMTCxXQXhCSyx1QkF3QlFFLEtBeEJSLEVBd0JlO0lBQ2hCLEtBQUtDLE9BQUwsQ0FBYUQsS0FBSyxDQUFDRSxLQUFOLENBQVlDLFdBQVosRUFBYjtFQUNILENBMUJJO0VBNEJMRixPQTVCSyxtQkE0QklHLFFBNUJKLEVBNEJjO0lBQ2YsSUFBSUMsTUFBTSxHQUFHeEIsRUFBRSxDQUFDeUIsTUFBSCxDQUFVQyxVQUFWLENBQXFCLEtBQUtyQixHQUExQixDQUFiO0lBQ0EsSUFBSXNCLEdBQUcsR0FBR0gsTUFBTSxDQUFDSSxxQkFBUCxDQUE2QjVCLEVBQUUsQ0FBQzZCLEVBQUgsQ0FBTU4sUUFBUSxDQUFDTyxDQUFmLEVBQWtCUCxRQUFRLENBQUNRLENBQTNCLEVBQThCLEtBQUtiLFFBQW5DLENBQTdCLENBQVY7SUFDQSxLQUFLYixHQUFMLENBQVMyQixRQUFULEdBQW9CLEtBQUszQixHQUFMLENBQVM0QixNQUFULENBQWdCQyxvQkFBaEIsQ0FBcUNQLEdBQXJDLENBQXBCO0VBQ0gsQ0FoQ0k7RUFrQ0xRLGVBbENLLDJCQWtDWUMsTUFsQ1osRUFrQ29CO0lBQ3JCLEtBQUtsQixRQUFMLEdBQWdCbUIsVUFBVSxDQUFDRCxNQUFNLENBQUNFLFFBQVAsQ0FBZ0JDLE9BQWhCLENBQXdCLENBQXhCLENBQUQsQ0FBMUI7SUFDQSxLQUFLaEMsYUFBTCxDQUFtQmlDLE1BQW5CLEdBQTRCLGdCQUFnQixLQUFLdEIsUUFBakQ7RUFDSDtBQXJDSSxDQUFUIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBXSElURSA9IGNjLkNvbG9yLldISVRFO1xuXG5jYy5DbGFzcyh7XG4gICAgZXh0ZW5kczogY2MuQ29tcG9uZW50LFxuXG4gICAgcHJvcGVydGllczoge1xuICAgICAgICBib3g6IGNjLk5vZGUsXG4gICAgICAgIGRpc3RhbmNlTGFiZWw6IGNjLkxhYmVsXG4gICAgfSxcblxuICAgIC8vIExJRkUtQ1lDTEUgQ0FMTEJBQ0tTOlxuXG4gICAgLy8gb25Mb2FkICgpIHt9LFxuXG4gICAgc3RhcnQgKCkge1xuICAgICAgICB2YXIgY2FudmFzID0gY2MuZmluZCgnQ2FudmFzJyk7XG4gICAgICAgIGNhbnZhcy5vbihjYy5Ob2RlLkV2ZW50VHlwZS5UT1VDSF9TVEFSVCwgdGhpcy5vblRvdWNoU3RhcnQsIHRoaXMpO1xuICAgICAgICBjYW52YXMub24oY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfTU9WRSwgdGhpcy5vblRvdWNoTW92ZSwgdGhpcyk7XG4gICAgICAgIFxuICAgICAgICB0aGlzLmRpc3RhbmNlID0gMC41O1xuICAgIH0sXG5cbiAgICBvblRvdWNoU3RhcnQgKGV2ZW50KSB7XG4gICAgICAgIHRoaXMubW92ZUJveChldmVudC50b3VjaC5nZXRMb2NhdGlvbigpKTtcbiAgICB9LFxuXG4gICAgb25Ub3VjaE1vdmUgKGV2ZW50KSB7XG4gICAgICAgIHRoaXMubW92ZUJveChldmVudC50b3VjaC5nZXRMb2NhdGlvbigpKTtcbiAgICB9LFxuXG4gICAgbW92ZUJveCAodG91Y2hQb3MpIHtcbiAgICAgICAgbGV0IGNhbWVyYSA9IGNjLkNhbWVyYS5maW5kQ2FtZXJhKHRoaXMuYm94KTtcbiAgICAgICAgbGV0IHBvcyA9IGNhbWVyYS5nZXRTY3JlZW5Ub1dvcmxkUG9pbnQoY2MudjModG91Y2hQb3MueCwgdG91Y2hQb3MueSwgdGhpcy5kaXN0YW5jZSkpO1xuICAgICAgICB0aGlzLmJveC5wb3NpdGlvbiA9IHRoaXMuYm94LnBhcmVudC5jb252ZXJ0VG9Ob2RlU3BhY2VBUihwb3MpO1xuICAgIH0sXG5cbiAgICBkaXN0YW5jZUNoYW5nZWQgKHNsaWRlcikge1xuICAgICAgICB0aGlzLmRpc3RhbmNlID0gcGFyc2VGbG9hdChzbGlkZXIucHJvZ3Jlc3MudG9GaXhlZCgyKSk7XG4gICAgICAgIHRoaXMuZGlzdGFuY2VMYWJlbC5zdHJpbmcgPSAnZGlzdGFuY2UgOiAnICsgdGhpcy5kaXN0YW5jZTtcbiAgICB9XG59KTtcbiJdfQ==