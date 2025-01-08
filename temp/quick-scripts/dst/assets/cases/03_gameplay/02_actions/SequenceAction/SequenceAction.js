
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/cases/03_gameplay/02_actions/SequenceAction/SequenceAction.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '9f1d440juJBgqdwVALTCD4k', 'SequenceAction');
// cases/03_gameplay/02_actions/SequenceAction/SequenceAction.js

"use strict";

cc.Class({
  "extends": cc.Component,
  properties: {
    label: {
      "default": null,
      type: cc.Label
    }
  },
  start: function start() {
    var _this = this;

    var startTime = 0;
    var eachTime = 0.5;
    var sequence1 = cc.sequence(cc.moveBy(eachTime, cc.v2(0, -300)), cc.moveBy(eachTime / 2, cc.v2(0, 300))).repeat(2);
    var sequence2 = cc.sequence(cc.moveBy(eachTime, cc.v2(0, -200)), cc.moveBy(eachTime, cc.v2(0, 200))).repeat(2);
    this.node.runAction(cc.sequence(cc.callFunc(function () {
      startTime = Date.now();
    }), sequence1, sequence2, cc.callFunc(function () {
      var difference = Math.abs(Date.now() - startTime) / 1000;

      if (difference - eachTime * 7 >= 0.05) {
        _this.label.string = "Failed - ElapseTime: " + difference.toFixed(1);
        _this.label.node.color = cc.color(255, 0, 0);
      } else {
        _this.label.string = "Succeed - ElapseTime: " + difference.toFixed(1);
        _this.label.node.color = cc.color(0, 255, 0);
      }
    })));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9jYXNlcy8wM19nYW1lcGxheS8wMl9hY3Rpb25zL1NlcXVlbmNlQWN0aW9uL1NlcXVlbmNlQWN0aW9uLmpzIl0sIm5hbWVzIjpbImNjIiwiQ2xhc3MiLCJDb21wb25lbnQiLCJwcm9wZXJ0aWVzIiwibGFiZWwiLCJ0eXBlIiwiTGFiZWwiLCJzdGFydCIsInN0YXJ0VGltZSIsImVhY2hUaW1lIiwic2VxdWVuY2UxIiwic2VxdWVuY2UiLCJtb3ZlQnkiLCJ2MiIsInJlcGVhdCIsInNlcXVlbmNlMiIsIm5vZGUiLCJydW5BY3Rpb24iLCJjYWxsRnVuYyIsIkRhdGUiLCJub3ciLCJkaWZmZXJlbmNlIiwiTWF0aCIsImFicyIsInN0cmluZyIsInRvRml4ZWQiLCJjb2xvciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQUEsRUFBRSxDQUFDQyxLQUFILENBQVM7RUFDTCxXQUFTRCxFQUFFLENBQUNFLFNBRFA7RUFHTEMsVUFBVSxFQUFFO0lBQ1RDLEtBQUssRUFBRTtNQUNILFdBQVMsSUFETjtNQUVIQyxJQUFJLEVBQUVMLEVBQUUsQ0FBQ007SUFGTjtFQURFLENBSFA7RUFVTEMsS0FWSyxtQkFVSTtJQUFBOztJQUNMLElBQUlDLFNBQVMsR0FBRyxDQUFoQjtJQUNBLElBQU1DLFFBQVEsR0FBRyxHQUFqQjtJQUVBLElBQUlDLFNBQVMsR0FBR1YsRUFBRSxDQUFDVyxRQUFILENBQ1pYLEVBQUUsQ0FBQ1ksTUFBSCxDQUFVSCxRQUFWLEVBQW9CVCxFQUFFLENBQUNhLEVBQUgsQ0FBTSxDQUFOLEVBQVMsQ0FBQyxHQUFWLENBQXBCLENBRFksRUFFWmIsRUFBRSxDQUFDWSxNQUFILENBQVVILFFBQVEsR0FBRyxDQUFyQixFQUF3QlQsRUFBRSxDQUFDYSxFQUFILENBQU0sQ0FBTixFQUFTLEdBQVQsQ0FBeEIsQ0FGWSxFQUdkQyxNQUhjLENBR1AsQ0FITyxDQUFoQjtJQUtBLElBQUlDLFNBQVMsR0FBR2YsRUFBRSxDQUFDVyxRQUFILENBQ1pYLEVBQUUsQ0FBQ1ksTUFBSCxDQUFVSCxRQUFWLEVBQW9CVCxFQUFFLENBQUNhLEVBQUgsQ0FBTSxDQUFOLEVBQVMsQ0FBQyxHQUFWLENBQXBCLENBRFksRUFFWmIsRUFBRSxDQUFDWSxNQUFILENBQVVILFFBQVYsRUFBb0JULEVBQUUsQ0FBQ2EsRUFBSCxDQUFNLENBQU4sRUFBUyxHQUFULENBQXBCLENBRlksRUFHZEMsTUFIYyxDQUdQLENBSE8sQ0FBaEI7SUFLQSxLQUFLRSxJQUFMLENBQVVDLFNBQVYsQ0FDSWpCLEVBQUUsQ0FBQ1csUUFBSCxDQUNJWCxFQUFFLENBQUNrQixRQUFILENBQVksWUFBTTtNQUNkVixTQUFTLEdBQUdXLElBQUksQ0FBQ0MsR0FBTCxFQUFaO0lBQ0gsQ0FGRCxDQURKLEVBSUlWLFNBSkosRUFLSUssU0FMSixFQU1JZixFQUFFLENBQUNrQixRQUFILENBQVksWUFBTTtNQUNkLElBQUlHLFVBQVUsR0FBR0MsSUFBSSxDQUFDQyxHQUFMLENBQVNKLElBQUksQ0FBQ0MsR0FBTCxLQUFhWixTQUF0QixJQUFtQyxJQUFwRDs7TUFDQSxJQUFJYSxVQUFVLEdBQUdaLFFBQVEsR0FBRyxDQUF4QixJQUE2QixJQUFqQyxFQUF1QztRQUNuQyxLQUFJLENBQUNMLEtBQUwsQ0FBV29CLE1BQVgsR0FBb0IsMEJBQTBCSCxVQUFVLENBQUNJLE9BQVgsQ0FBbUIsQ0FBbkIsQ0FBOUM7UUFDQSxLQUFJLENBQUNyQixLQUFMLENBQVdZLElBQVgsQ0FBZ0JVLEtBQWhCLEdBQXdCMUIsRUFBRSxDQUFDMEIsS0FBSCxDQUFTLEdBQVQsRUFBYSxDQUFiLEVBQWUsQ0FBZixDQUF4QjtNQUNILENBSEQsTUFJSztRQUNELEtBQUksQ0FBQ3RCLEtBQUwsQ0FBV29CLE1BQVgsR0FBb0IsMkJBQTJCSCxVQUFVLENBQUNJLE9BQVgsQ0FBbUIsQ0FBbkIsQ0FBL0M7UUFDQSxLQUFJLENBQUNyQixLQUFMLENBQVdZLElBQVgsQ0FBZ0JVLEtBQWhCLEdBQXdCMUIsRUFBRSxDQUFDMEIsS0FBSCxDQUFTLENBQVQsRUFBVyxHQUFYLEVBQWUsQ0FBZixDQUF4QjtNQUNIO0lBQ0osQ0FWRCxDQU5KLENBREo7RUFvQkg7QUE1Q0ksQ0FBVCIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiY2MuQ2xhc3Moe1xuICAgIGV4dGVuZHM6IGNjLkNvbXBvbmVudCxcblxuICAgIHByb3BlcnRpZXM6IHtcbiAgICAgICBsYWJlbDoge1xuICAgICAgICAgICBkZWZhdWx0OiBudWxsLFxuICAgICAgICAgICB0eXBlOiBjYy5MYWJlbFxuICAgICAgIH0sXG4gICAgfSxcblxuICAgIHN0YXJ0ICgpIHtcbiAgICAgICAgdmFyIHN0YXJ0VGltZSA9IDA7IFxuICAgICAgICBjb25zdCBlYWNoVGltZSA9IDAuNTtcblxuICAgICAgICBsZXQgc2VxdWVuY2UxID0gY2Muc2VxdWVuY2UoXG4gICAgICAgICAgICBjYy5tb3ZlQnkoZWFjaFRpbWUsIGNjLnYyKDAsIC0zMDApKSxcbiAgICAgICAgICAgIGNjLm1vdmVCeShlYWNoVGltZSAvIDIsIGNjLnYyKDAsIDMwMCkpLFxuICAgICAgICApLnJlcGVhdCgyKTtcblxuICAgICAgICBsZXQgc2VxdWVuY2UyID0gY2Muc2VxdWVuY2UoXG4gICAgICAgICAgICBjYy5tb3ZlQnkoZWFjaFRpbWUsIGNjLnYyKDAsIC0yMDApKSxcbiAgICAgICAgICAgIGNjLm1vdmVCeShlYWNoVGltZSwgY2MudjIoMCwgMjAwKSksXG4gICAgICAgICkucmVwZWF0KDIpO1xuXG4gICAgICAgIHRoaXMubm9kZS5ydW5BY3Rpb24oXG4gICAgICAgICAgICBjYy5zZXF1ZW5jZShcbiAgICAgICAgICAgICAgICBjYy5jYWxsRnVuYygoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHN0YXJ0VGltZSA9IERhdGUubm93KCk7XG4gICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgc2VxdWVuY2UxLFxuICAgICAgICAgICAgICAgIHNlcXVlbmNlMixcbiAgICAgICAgICAgICAgICBjYy5jYWxsRnVuYygoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBkaWZmZXJlbmNlID0gTWF0aC5hYnMoRGF0ZS5ub3coKSAtIHN0YXJ0VGltZSkgLyAxMDAwO1xuICAgICAgICAgICAgICAgICAgICBpZiAoZGlmZmVyZW5jZSAtIGVhY2hUaW1lICogNyA+PSAwLjA1KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmxhYmVsLnN0cmluZyA9IFwiRmFpbGVkIC0gRWxhcHNlVGltZTogXCIgKyBkaWZmZXJlbmNlLnRvRml4ZWQoMSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmxhYmVsLm5vZGUuY29sb3IgPSBjYy5jb2xvcigyNTUsMCwwKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubGFiZWwuc3RyaW5nID0gXCJTdWNjZWVkIC0gRWxhcHNlVGltZTogXCIgKyBkaWZmZXJlbmNlLnRvRml4ZWQoMSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmxhYmVsLm5vZGUuY29sb3IgPSBjYy5jb2xvcigwLDI1NSwwKTtcbiAgICAgICAgICAgICAgICAgICAgfSBcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgKVxuICAgICAgICApO1xuICAgIH1cbn0pO1xuIl19