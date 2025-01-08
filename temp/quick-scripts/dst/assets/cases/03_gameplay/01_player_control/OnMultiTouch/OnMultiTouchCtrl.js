
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/cases/03_gameplay/01_player_control/OnMultiTouch/OnMultiTouchCtrl.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '53fc1wMwRRPOYCB8ko36drD', 'OnMultiTouchCtrl');
// cases/03_gameplay/01_player_control/OnMultiTouch/OnMultiTouchCtrl.js

"use strict";

var TipManager = require("../../../../scripts/Tips/TipsManager");

cc.Class({
  "extends": cc.Component,
  properties: {
    canvas: cc.Node,
    target: cc.Node
  },
  onLoad: function onLoad() {
    TipManager.init();
    var self = this,
        parent = this.node.parent;
    self.canvas.on(cc.Node.EventType.TOUCH_MOVE, function (event) {
      var touches = event.getTouches();

      if (touches.length >= 2) {
        var touch1 = touches[0],
            touch2 = touches[1];
        var delta1 = touch1.getDelta(),
            delta2 = touch2.getDelta();
        var touchPoint1 = parent.convertToNodeSpaceAR(touch1.getLocation());
        var touchPoint2 = parent.convertToNodeSpaceAR(touch2.getLocation()); //缩放

        var distance = touchPoint1.sub(touchPoint2);
        var delta = delta1.sub(delta2);
        var scale = 1;

        if (Math.abs(distance.x) > Math.abs(distance.y)) {
          scale = (distance.x + delta.x) / distance.x * self.target.scale;
        } else {
          scale = (distance.y + delta.y) / distance.y * self.target.scale;
        }

        self.target.scale = scale < 0.1 ? 0.1 : scale;
      }
    }, self.node);
  },
  onEnable: function onEnable() {
    if (cc.sys.browserType === cc.sys.BROWSER_TYPE_UC && cc.screen.fullScreen()) {
      TipManager.createTips("Can't support UC mobile browser, please touch screen go back");
    }
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9jYXNlcy8wM19nYW1lcGxheS8wMV9wbGF5ZXJfY29udHJvbC9Pbk11bHRpVG91Y2gvT25NdWx0aVRvdWNoQ3RybC5qcyJdLCJuYW1lcyI6WyJUaXBNYW5hZ2VyIiwicmVxdWlyZSIsImNjIiwiQ2xhc3MiLCJDb21wb25lbnQiLCJwcm9wZXJ0aWVzIiwiY2FudmFzIiwiTm9kZSIsInRhcmdldCIsIm9uTG9hZCIsImluaXQiLCJzZWxmIiwicGFyZW50Iiwibm9kZSIsIm9uIiwiRXZlbnRUeXBlIiwiVE9VQ0hfTU9WRSIsImV2ZW50IiwidG91Y2hlcyIsImdldFRvdWNoZXMiLCJsZW5ndGgiLCJ0b3VjaDEiLCJ0b3VjaDIiLCJkZWx0YTEiLCJnZXREZWx0YSIsImRlbHRhMiIsInRvdWNoUG9pbnQxIiwiY29udmVydFRvTm9kZVNwYWNlQVIiLCJnZXRMb2NhdGlvbiIsInRvdWNoUG9pbnQyIiwiZGlzdGFuY2UiLCJzdWIiLCJkZWx0YSIsInNjYWxlIiwiTWF0aCIsImFicyIsIngiLCJ5Iiwib25FbmFibGUiLCJzeXMiLCJicm93c2VyVHlwZSIsIkJST1dTRVJfVFlQRV9VQyIsInNjcmVlbiIsImZ1bGxTY3JlZW4iLCJjcmVhdGVUaXBzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLElBQU1BLFVBQVUsR0FBR0MsT0FBTyxDQUFDLHNDQUFELENBQTFCOztBQUVBQyxFQUFFLENBQUNDLEtBQUgsQ0FBUztFQUNMLFdBQVNELEVBQUUsQ0FBQ0UsU0FEUDtFQUdMQyxVQUFVLEVBQUU7SUFDUkMsTUFBTSxFQUFFSixFQUFFLENBQUNLLElBREg7SUFFUkMsTUFBTSxFQUFFTixFQUFFLENBQUNLO0VBRkgsQ0FIUDtFQVFMRSxNQUFNLEVBQUUsa0JBQVk7SUFDaEJULFVBQVUsQ0FBQ1UsSUFBWDtJQUNBLElBQUlDLElBQUksR0FBRyxJQUFYO0lBQUEsSUFBaUJDLE1BQU0sR0FBRyxLQUFLQyxJQUFMLENBQVVELE1BQXBDO0lBQ0FELElBQUksQ0FBQ0wsTUFBTCxDQUFZUSxFQUFaLENBQWVaLEVBQUUsQ0FBQ0ssSUFBSCxDQUFRUSxTQUFSLENBQWtCQyxVQUFqQyxFQUE2QyxVQUFVQyxLQUFWLEVBQWlCO01BQzFELElBQUlDLE9BQU8sR0FBR0QsS0FBSyxDQUFDRSxVQUFOLEVBQWQ7O01BQ0EsSUFBSUQsT0FBTyxDQUFDRSxNQUFSLElBQWtCLENBQXRCLEVBQXlCO1FBQ3JCLElBQUlDLE1BQU0sR0FBR0gsT0FBTyxDQUFDLENBQUQsQ0FBcEI7UUFBQSxJQUF5QkksTUFBTSxHQUFHSixPQUFPLENBQUMsQ0FBRCxDQUF6QztRQUNBLElBQUlLLE1BQU0sR0FBR0YsTUFBTSxDQUFDRyxRQUFQLEVBQWI7UUFBQSxJQUFnQ0MsTUFBTSxHQUFHSCxNQUFNLENBQUNFLFFBQVAsRUFBekM7UUFDQSxJQUFJRSxXQUFXLEdBQUdkLE1BQU0sQ0FBQ2Usb0JBQVAsQ0FBNEJOLE1BQU0sQ0FBQ08sV0FBUCxFQUE1QixDQUFsQjtRQUNBLElBQUlDLFdBQVcsR0FBR2pCLE1BQU0sQ0FBQ2Usb0JBQVAsQ0FBNEJMLE1BQU0sQ0FBQ00sV0FBUCxFQUE1QixDQUFsQixDQUpxQixDQUtyQjs7UUFDQSxJQUFJRSxRQUFRLEdBQUdKLFdBQVcsQ0FBQ0ssR0FBWixDQUFnQkYsV0FBaEIsQ0FBZjtRQUNBLElBQUlHLEtBQUssR0FBR1QsTUFBTSxDQUFDUSxHQUFQLENBQVdOLE1BQVgsQ0FBWjtRQUNBLElBQUlRLEtBQUssR0FBRyxDQUFaOztRQUNBLElBQUlDLElBQUksQ0FBQ0MsR0FBTCxDQUFTTCxRQUFRLENBQUNNLENBQWxCLElBQXVCRixJQUFJLENBQUNDLEdBQUwsQ0FBU0wsUUFBUSxDQUFDTyxDQUFsQixDQUEzQixFQUFpRDtVQUM3Q0osS0FBSyxHQUFHLENBQUNILFFBQVEsQ0FBQ00sQ0FBVCxHQUFhSixLQUFLLENBQUNJLENBQXBCLElBQXlCTixRQUFRLENBQUNNLENBQWxDLEdBQXNDekIsSUFBSSxDQUFDSCxNQUFMLENBQVl5QixLQUExRDtRQUNILENBRkQsTUFHSztVQUNEQSxLQUFLLEdBQUcsQ0FBQ0gsUUFBUSxDQUFDTyxDQUFULEdBQWFMLEtBQUssQ0FBQ0ssQ0FBcEIsSUFBeUJQLFFBQVEsQ0FBQ08sQ0FBbEMsR0FBc0MxQixJQUFJLENBQUNILE1BQUwsQ0FBWXlCLEtBQTFEO1FBQ0g7O1FBQ0R0QixJQUFJLENBQUNILE1BQUwsQ0FBWXlCLEtBQVosR0FBb0JBLEtBQUssR0FBRyxHQUFSLEdBQWMsR0FBZCxHQUFvQkEsS0FBeEM7TUFDSDtJQUNKLENBbkJELEVBbUJHdEIsSUFBSSxDQUFDRSxJQW5CUjtFQW9CSCxDQS9CSTtFQWlDTHlCLFFBakNLLHNCQWlDTztJQUNSLElBQUlwQyxFQUFFLENBQUNxQyxHQUFILENBQU9DLFdBQVAsS0FBdUJ0QyxFQUFFLENBQUNxQyxHQUFILENBQU9FLGVBQTlCLElBQWlEdkMsRUFBRSxDQUFDd0MsTUFBSCxDQUFVQyxVQUFWLEVBQXJELEVBQTZFO01BQ3pFM0MsVUFBVSxDQUFDNEMsVUFBWCxDQUFzQiw4REFBdEI7SUFDSDtFQUNKO0FBckNJLENBQVQiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IFRpcE1hbmFnZXIgPSByZXF1aXJlKFwiLi4vLi4vLi4vLi4vc2NyaXB0cy9UaXBzL1RpcHNNYW5hZ2VyXCIpO1xuXG5jYy5DbGFzcyh7XG4gICAgZXh0ZW5kczogY2MuQ29tcG9uZW50LFxuXG4gICAgcHJvcGVydGllczoge1xuICAgICAgICBjYW52YXM6IGNjLk5vZGUsXG4gICAgICAgIHRhcmdldDogY2MuTm9kZVxuICAgIH0sXG5cbiAgICBvbkxvYWQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgVGlwTWFuYWdlci5pbml0KCk7XG4gICAgICAgIHZhciBzZWxmID0gdGhpcywgcGFyZW50ID0gdGhpcy5ub2RlLnBhcmVudDtcbiAgICAgICAgc2VsZi5jYW52YXMub24oY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfTU9WRSwgZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICAgICAgICB2YXIgdG91Y2hlcyA9IGV2ZW50LmdldFRvdWNoZXMoKTtcbiAgICAgICAgICAgIGlmICh0b3VjaGVzLmxlbmd0aCA+PSAyKSB7XG4gICAgICAgICAgICAgICAgdmFyIHRvdWNoMSA9IHRvdWNoZXNbMF0sIHRvdWNoMiA9IHRvdWNoZXNbMV07XG4gICAgICAgICAgICAgICAgdmFyIGRlbHRhMSA9IHRvdWNoMS5nZXREZWx0YSgpLCBkZWx0YTIgPSB0b3VjaDIuZ2V0RGVsdGEoKTtcbiAgICAgICAgICAgICAgICB2YXIgdG91Y2hQb2ludDEgPSBwYXJlbnQuY29udmVydFRvTm9kZVNwYWNlQVIodG91Y2gxLmdldExvY2F0aW9uKCkpO1xuICAgICAgICAgICAgICAgIHZhciB0b3VjaFBvaW50MiA9IHBhcmVudC5jb252ZXJ0VG9Ob2RlU3BhY2VBUih0b3VjaDIuZ2V0TG9jYXRpb24oKSk7XG4gICAgICAgICAgICAgICAgLy/nvKnmlL5cbiAgICAgICAgICAgICAgICB2YXIgZGlzdGFuY2UgPSB0b3VjaFBvaW50MS5zdWIodG91Y2hQb2ludDIpO1xuICAgICAgICAgICAgICAgIHZhciBkZWx0YSA9IGRlbHRhMS5zdWIoZGVsdGEyKTtcbiAgICAgICAgICAgICAgICB2YXIgc2NhbGUgPSAxO1xuICAgICAgICAgICAgICAgIGlmIChNYXRoLmFicyhkaXN0YW5jZS54KSA+IE1hdGguYWJzKGRpc3RhbmNlLnkpKSB7XG4gICAgICAgICAgICAgICAgICAgIHNjYWxlID0gKGRpc3RhbmNlLnggKyBkZWx0YS54KSAvIGRpc3RhbmNlLnggKiBzZWxmLnRhcmdldC5zY2FsZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHNjYWxlID0gKGRpc3RhbmNlLnkgKyBkZWx0YS55KSAvIGRpc3RhbmNlLnkgKiBzZWxmLnRhcmdldC5zY2FsZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgc2VsZi50YXJnZXQuc2NhbGUgPSBzY2FsZSA8IDAuMSA/IDAuMSA6IHNjYWxlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LCBzZWxmLm5vZGUpO1xuICAgIH0sXG5cbiAgICBvbkVuYWJsZSAoKSB7XG4gICAgICAgIGlmIChjYy5zeXMuYnJvd3NlclR5cGUgPT09IGNjLnN5cy5CUk9XU0VSX1RZUEVfVUMgJiYgY2Muc2NyZWVuLmZ1bGxTY3JlZW4oKSkge1xuICAgICAgICAgICAgVGlwTWFuYWdlci5jcmVhdGVUaXBzKFwiQ2FuJ3Qgc3VwcG9ydCBVQyBtb2JpbGUgYnJvd3NlciwgcGxlYXNlIHRvdWNoIHNjcmVlbiBnbyBiYWNrXCIpO1xuICAgICAgICB9XG4gICAgfVxufSk7XG4iXX0=