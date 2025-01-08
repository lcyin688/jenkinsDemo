
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/cases/graphics/example/linejoin.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '23e05St68tC7aM880aEaUaS', 'linejoin');
// cases/graphics/example/linejoin.js

"use strict";

var LineJoin = cc.Graphics.LineJoin;
var LineCap = cc.Graphics.LineCap;
cc.Class({
  "extends": cc.Component,
  // use this for initialization
  onLoad: function onLoad() {
    this.graphics = this.getComponent(cc.Graphics);
    this.graphics.lineWidth = 20;
    this.time = 0;
    this.radius = 100;
    this.draw();
  },
  // called every frame, uncomment this function to activate update callback
  update: function update(dt) {
    this.time += dt * 0.5;
    this.draw();
  },
  draw: function draw() {
    var graphics = this.graphics;
    graphics.clear();
    var rx = this.radius * Math.sin(this.time);
    var ry = -this.radius * Math.cos(this.time); // line join

    graphics.lineCap = LineCap.BUTT;
    graphics.lineJoin = LineJoin.BEVEL;
    this.drawLine(-200, 0, rx, ry);
    graphics.lineJoin = LineJoin.MITER;
    this.drawLine(0, 0, rx, ry);
    graphics.lineJoin = LineJoin.ROUND;
    this.drawLine(200, 0, rx, ry); // line cap

    graphics.lineJoin = LineJoin.MITER;
    graphics.lineCap = LineCap.BUTT;
    this.drawLine(0, -125, rx, ry);
    graphics.lineCap = LineCap.SQUARE;
    this.drawLine(-200, -125, rx, ry);
    graphics.lineCap = LineCap.ROUND;
    this.drawLine(200, -125, rx, ry);
  },
  drawLine: function drawLine(x, y, rx, ry) {
    var graphics = this.graphics;
    graphics.moveTo(x + rx, y + ry);
    graphics.lineTo(x, y);
    graphics.lineTo(x - rx, y + ry);
    graphics.stroke();
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9jYXNlcy9ncmFwaGljcy9leGFtcGxlL2xpbmVqb2luLmpzIl0sIm5hbWVzIjpbIkxpbmVKb2luIiwiY2MiLCJHcmFwaGljcyIsIkxpbmVDYXAiLCJDbGFzcyIsIkNvbXBvbmVudCIsIm9uTG9hZCIsImdyYXBoaWNzIiwiZ2V0Q29tcG9uZW50IiwibGluZVdpZHRoIiwidGltZSIsInJhZGl1cyIsImRyYXciLCJ1cGRhdGUiLCJkdCIsImNsZWFyIiwicngiLCJNYXRoIiwic2luIiwicnkiLCJjb3MiLCJsaW5lQ2FwIiwiQlVUVCIsImxpbmVKb2luIiwiQkVWRUwiLCJkcmF3TGluZSIsIk1JVEVSIiwiUk9VTkQiLCJTUVVBUkUiLCJ4IiwieSIsIm1vdmVUbyIsImxpbmVUbyIsInN0cm9rZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxJQUFJQSxRQUFRLEdBQUdDLEVBQUUsQ0FBQ0MsUUFBSCxDQUFZRixRQUEzQjtBQUNBLElBQUlHLE9BQU8sR0FBR0YsRUFBRSxDQUFDQyxRQUFILENBQVlDLE9BQTFCO0FBRUFGLEVBQUUsQ0FBQ0csS0FBSCxDQUFTO0VBQ0wsV0FBU0gsRUFBRSxDQUFDSSxTQURQO0VBR0w7RUFDQUMsTUFBTSxFQUFFLGtCQUFZO0lBQ2hCLEtBQUtDLFFBQUwsR0FBZ0IsS0FBS0MsWUFBTCxDQUFrQlAsRUFBRSxDQUFDQyxRQUFyQixDQUFoQjtJQUNBLEtBQUtLLFFBQUwsQ0FBY0UsU0FBZCxHQUEwQixFQUExQjtJQUVBLEtBQUtDLElBQUwsR0FBWSxDQUFaO0lBQ0EsS0FBS0MsTUFBTCxHQUFjLEdBQWQ7SUFFQSxLQUFLQyxJQUFMO0VBQ0gsQ0FaSTtFQWNMO0VBQ0FDLE1BQU0sRUFBRSxnQkFBVUMsRUFBVixFQUFjO0lBQ2xCLEtBQUtKLElBQUwsSUFBYUksRUFBRSxHQUFHLEdBQWxCO0lBQ0EsS0FBS0YsSUFBTDtFQUNILENBbEJJO0VBb0JMQSxJQUFJLEVBQUUsZ0JBQVk7SUFDZCxJQUFJTCxRQUFRLEdBQUcsS0FBS0EsUUFBcEI7SUFDQUEsUUFBUSxDQUFDUSxLQUFUO0lBRUEsSUFBSUMsRUFBRSxHQUFHLEtBQUtMLE1BQUwsR0FBY00sSUFBSSxDQUFDQyxHQUFMLENBQVMsS0FBS1IsSUFBZCxDQUF2QjtJQUNBLElBQUlTLEVBQUUsR0FBRyxDQUFDLEtBQUtSLE1BQU4sR0FBZU0sSUFBSSxDQUFDRyxHQUFMLENBQVMsS0FBS1YsSUFBZCxDQUF4QixDQUxjLENBT2Q7O0lBQ0FILFFBQVEsQ0FBQ2MsT0FBVCxHQUFtQmxCLE9BQU8sQ0FBQ21CLElBQTNCO0lBRUFmLFFBQVEsQ0FBQ2dCLFFBQVQsR0FBb0J2QixRQUFRLENBQUN3QixLQUE3QjtJQUNBLEtBQUtDLFFBQUwsQ0FBYyxDQUFDLEdBQWYsRUFBb0IsQ0FBcEIsRUFBdUJULEVBQXZCLEVBQTJCRyxFQUEzQjtJQUVBWixRQUFRLENBQUNnQixRQUFULEdBQW9CdkIsUUFBUSxDQUFDMEIsS0FBN0I7SUFDQSxLQUFLRCxRQUFMLENBQWMsQ0FBZCxFQUFpQixDQUFqQixFQUFvQlQsRUFBcEIsRUFBd0JHLEVBQXhCO0lBRUFaLFFBQVEsQ0FBQ2dCLFFBQVQsR0FBb0J2QixRQUFRLENBQUMyQixLQUE3QjtJQUNBLEtBQUtGLFFBQUwsQ0FBYyxHQUFkLEVBQW1CLENBQW5CLEVBQXNCVCxFQUF0QixFQUEwQkcsRUFBMUIsRUFqQmMsQ0FtQmQ7O0lBQ0FaLFFBQVEsQ0FBQ2dCLFFBQVQsR0FBb0J2QixRQUFRLENBQUMwQixLQUE3QjtJQUVBbkIsUUFBUSxDQUFDYyxPQUFULEdBQW1CbEIsT0FBTyxDQUFDbUIsSUFBM0I7SUFDQSxLQUFLRyxRQUFMLENBQWMsQ0FBZCxFQUFpQixDQUFDLEdBQWxCLEVBQXVCVCxFQUF2QixFQUEyQkcsRUFBM0I7SUFFQVosUUFBUSxDQUFDYyxPQUFULEdBQW1CbEIsT0FBTyxDQUFDeUIsTUFBM0I7SUFDQSxLQUFLSCxRQUFMLENBQWMsQ0FBQyxHQUFmLEVBQW9CLENBQUMsR0FBckIsRUFBMEJULEVBQTFCLEVBQThCRyxFQUE5QjtJQUVBWixRQUFRLENBQUNjLE9BQVQsR0FBbUJsQixPQUFPLENBQUN3QixLQUEzQjtJQUNBLEtBQUtGLFFBQUwsQ0FBYyxHQUFkLEVBQW1CLENBQUMsR0FBcEIsRUFBeUJULEVBQXpCLEVBQTZCRyxFQUE3QjtFQUNILENBbERJO0VBb0RMTSxRQUFRLEVBQUUsa0JBQVVJLENBQVYsRUFBYUMsQ0FBYixFQUFnQmQsRUFBaEIsRUFBb0JHLEVBQXBCLEVBQXdCO0lBQzlCLElBQUlaLFFBQVEsR0FBRyxLQUFLQSxRQUFwQjtJQUVBQSxRQUFRLENBQUN3QixNQUFULENBQWdCRixDQUFDLEdBQUdiLEVBQXBCLEVBQXdCYyxDQUFDLEdBQUdYLEVBQTVCO0lBQ0FaLFFBQVEsQ0FBQ3lCLE1BQVQsQ0FBZ0JILENBQWhCLEVBQW1CQyxDQUFuQjtJQUNBdkIsUUFBUSxDQUFDeUIsTUFBVCxDQUFnQkgsQ0FBQyxHQUFHYixFQUFwQixFQUF3QmMsQ0FBQyxHQUFHWCxFQUE1QjtJQUNBWixRQUFRLENBQUMwQixNQUFUO0VBQ0g7QUEzREksQ0FBVCIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsibGV0IExpbmVKb2luID0gY2MuR3JhcGhpY3MuTGluZUpvaW47XG5sZXQgTGluZUNhcCA9IGNjLkdyYXBoaWNzLkxpbmVDYXA7XG5cbmNjLkNsYXNzKHtcbiAgICBleHRlbmRzOiBjYy5Db21wb25lbnQsXG5cbiAgICAvLyB1c2UgdGhpcyBmb3IgaW5pdGlhbGl6YXRpb25cbiAgICBvbkxvYWQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdGhpcy5ncmFwaGljcyA9IHRoaXMuZ2V0Q29tcG9uZW50KGNjLkdyYXBoaWNzKTtcbiAgICAgICAgdGhpcy5ncmFwaGljcy5saW5lV2lkdGggPSAyMDtcbiAgICAgICAgXG4gICAgICAgIHRoaXMudGltZSA9IDA7XG4gICAgICAgIHRoaXMucmFkaXVzID0gMTAwO1xuXG4gICAgICAgIHRoaXMuZHJhdygpO1xuICAgIH0sXG4gICAgXG4gICAgLy8gY2FsbGVkIGV2ZXJ5IGZyYW1lLCB1bmNvbW1lbnQgdGhpcyBmdW5jdGlvbiB0byBhY3RpdmF0ZSB1cGRhdGUgY2FsbGJhY2tcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIChkdCkge1xuICAgICAgICB0aGlzLnRpbWUgKz0gZHQgKiAwLjU7XG4gICAgICAgIHRoaXMuZHJhdygpO1xuICAgIH0sXG5cbiAgICBkcmF3OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGxldCBncmFwaGljcyA9IHRoaXMuZ3JhcGhpY3M7XG4gICAgICAgIGdyYXBoaWNzLmNsZWFyKCk7XG5cbiAgICAgICAgbGV0IHJ4ID0gdGhpcy5yYWRpdXMgKiBNYXRoLnNpbih0aGlzLnRpbWUpO1xuICAgICAgICBsZXQgcnkgPSAtdGhpcy5yYWRpdXMgKiBNYXRoLmNvcyh0aGlzLnRpbWUpO1xuXG4gICAgICAgIC8vIGxpbmUgam9pblxuICAgICAgICBncmFwaGljcy5saW5lQ2FwID0gTGluZUNhcC5CVVRUO1xuXG4gICAgICAgIGdyYXBoaWNzLmxpbmVKb2luID0gTGluZUpvaW4uQkVWRUw7XG4gICAgICAgIHRoaXMuZHJhd0xpbmUoLTIwMCwgMCwgcngsIHJ5KTtcblxuICAgICAgICBncmFwaGljcy5saW5lSm9pbiA9IExpbmVKb2luLk1JVEVSO1xuICAgICAgICB0aGlzLmRyYXdMaW5lKDAsIDAsIHJ4LCByeSk7XG5cbiAgICAgICAgZ3JhcGhpY3MubGluZUpvaW4gPSBMaW5lSm9pbi5ST1VORDtcbiAgICAgICAgdGhpcy5kcmF3TGluZSgyMDAsIDAsIHJ4LCByeSk7XG5cbiAgICAgICAgLy8gbGluZSBjYXBcbiAgICAgICAgZ3JhcGhpY3MubGluZUpvaW4gPSBMaW5lSm9pbi5NSVRFUjtcblxuICAgICAgICBncmFwaGljcy5saW5lQ2FwID0gTGluZUNhcC5CVVRUO1xuICAgICAgICB0aGlzLmRyYXdMaW5lKDAsIC0xMjUsIHJ4LCByeSk7XG5cbiAgICAgICAgZ3JhcGhpY3MubGluZUNhcCA9IExpbmVDYXAuU1FVQVJFO1xuICAgICAgICB0aGlzLmRyYXdMaW5lKC0yMDAsIC0xMjUsIHJ4LCByeSk7XG5cbiAgICAgICAgZ3JhcGhpY3MubGluZUNhcCA9IExpbmVDYXAuUk9VTkQ7XG4gICAgICAgIHRoaXMuZHJhd0xpbmUoMjAwLCAtMTI1LCByeCwgcnkpO1xuICAgIH0sXG5cbiAgICBkcmF3TGluZTogZnVuY3Rpb24gKHgsIHksIHJ4LCByeSkge1xuICAgICAgICBsZXQgZ3JhcGhpY3MgPSB0aGlzLmdyYXBoaWNzO1xuXG4gICAgICAgIGdyYXBoaWNzLm1vdmVUbyh4ICsgcngsIHkgKyByeSk7XG4gICAgICAgIGdyYXBoaWNzLmxpbmVUbyh4LCB5KTtcbiAgICAgICAgZ3JhcGhpY3MubGluZVRvKHggLSByeCwgeSArIHJ5KTtcbiAgICAgICAgZ3JhcGhpY3Muc3Ryb2tlKCk7XG4gICAgfVxufSk7XG4iXX0=