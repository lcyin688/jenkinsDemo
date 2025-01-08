
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/cases/graphics/demo/doodle.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '136e6rUnNlCbZ7UezYhQDoQ', 'doodle');
// cases/graphics/demo/doodle.js

"use strict";

// http://codepen.io/Francext/pen/ojwdJ
cc.Class({
  "extends": cc.Component,
  properties: {
    reactivity: 0.5,
    debug: false
  },
  // use this for initialization
  onEnable: function onEnable() {
    this.graphics = this.getComponent(cc.Graphics);
    this.nodes = [];
    this.ripples = [];
    this.mouse = {
      x: 0,
      y: 0
    };
    this.color = {
      r: 0,
      g: 0,
      b: 0,
      a: 255
    };
    this.cycle = 90;
    this.createBezierNodes();
    var canvas = cc.find('Canvas');
    canvas.on(cc.Node.EventType.TOUCH_START, function (touch, event) {
      this.mouse = touch.getLocation();
      this.addRipple();
    }, this);
    canvas.on(cc.Node.EventType.TOUCH_END, function () {
      this.input = false;
    }, this);
  },
  createBezierNodes: function createBezierNodes() {
    this.updateColorCycle();

    for (var quantity = 0, len = 6; quantity < len; quantity++) {
      var theta = Math.PI * 2 * quantity / len;
      var x = cc.winSize.width * 0.5 + 0 * Math.cos(theta);
      var y = cc.winSize.height * 0.5 + 0 * Math.sin(theta);
      this.nodes.push({
        x: x,
        y: y,
        vx: 0,
        vy: 0,
        lastX: x,
        lastY: y,
        min: 150,
        max: 250,
        disturb: 150,
        orbit: 20,
        angle: Math.random() * Math.PI * 2,
        speed: 0.05 + Math.random() * 0.05,
        theta: theta
      });
    }
  },
  addRipple: function addRipple() {
    this.input = true;

    if (this.ripples.length === 0) {
      this.updateColorCycle();
      this.ripples.push({
        x: this.mouse.x,
        y: this.mouse.y,
        reactivity: 0,
        fade: 1.0
      });
    }
  },
  updateColorCycle: function updateColorCycle() {
    this.cycle = Math.min(this.cycle + this.reactivity + 0.3, 100) !== 100 ? this.cycle += this.reactivity + 0.3 : 0;
    var color = this.color;
    color.r = ~~(Math.sin(0.3 * this.cycle + 0) * 127 + 128);
    color.g = ~~(Math.sin(0.3 * this.cycle + 2) * 127 + 128);
    color.b = ~~(Math.sin(0.3 * this.cycle + 4) * 127 + 128);
  },
  // called every frame, uncomment this function to activate update callback
  update: function update(dt) {
    var _this = this;

    var nodes = this.nodes;
    var ripples = this.ripples;
    var ease = 0.01,
        friction = 0.98;

    for (var index = 0; index < ripples.length; index++) {
      var ripple = ripples[index];
      ripple.reactivity += 5;
      ripple.fade -= 0.05;
      if (ripple.fade <= 0.0) ripples.splice(index, 1);
    }

    [].forEach.call(nodes, function (node, index) {
      node.lastX += (cc.winSize.width * 0.5 + node.disturb * Math.cos(node.theta) - node.lastX) * 0.08;
      node.lastY += (cc.winSize.height * 0.5 + node.disturb * Math.sin(node.theta) - node.lastY) * 0.08; // Motion

      node.x += (node.lastX + Math.cos(node.angle) * node.orbit - node.x) * 0.08;
      node.y += (node.lastY + Math.sin(node.angle) * node.orbit - node.y) * 0.08; // Ease

      node.vx += (node.min - node.disturb) * ease; // Friction

      node.vx *= friction;
      node.disturb += node.vx;
      if (_this.input) node.disturb += (node.max - node.disturb) * _this.reactivity;
      node.angle += node.speed;
    });
    this.render();
  },
  render: function render() {
    var _this2 = this;

    var nodes = this.nodes;
    var ripples = this.ripples;
    var graphics = this.graphics;
    var color = this.color;
    var currentIndex, nextIndex, xc, yc;
    color.a = this.debug ? 255 : 255 / 2;
    graphics.clear();
    [].forEach.call(nodes, function (node, index) {
      currentIndex = nodes[nodes.length - 1];
      nextIndex = nodes[0];
      xc = currentIndex.x + (nextIndex.x - currentIndex.x) * 0.5;
      yc = currentIndex.y + (nextIndex.y - currentIndex.y) * 0.5;
      var strokeColor = cc.color().fromHEX(_this2.debug ? '#a9a9a9' : '#e5e5e5');
      strokeColor.a = _this2.debug ? 255 : 255 / 2;
      graphics.strokeColor = strokeColor;
      graphics.fillColor = color;
      graphics.lineWidth = _this2.debug ? 1 : 5;
      graphics.moveTo(xc, yc); // Draw through N points

      for (var N = 0; N < nodes.length; N++) {
        currentIndex = nodes[N];
        nextIndex = N + 1 > nodes.length - 1 ? nodes[N - nodes.length + 1] : nodes[N + 1];
        xc = currentIndex.x + (nextIndex.x - currentIndex.x) * 0.5;
        yc = currentIndex.y + (nextIndex.y - currentIndex.y) * 0.5;
        graphics.quadraticCurveTo(currentIndex.x, currentIndex.y, xc, yc);
      }

      _this2.debug ? null : graphics.fill();
      graphics.stroke();
      graphics.lineWidth = 1;
      graphics.lineCap = cc.Graphics.LineCap.ROUND;
      graphics.lineJoin = cc.Graphics.LineJoin.ROUND;
      graphics.strokeColor.fromHEX('#a9a9a9');
      graphics.fillColor.fromHEX('#a9a9a9'); // Draw through N points

      for (var N = 0; N < nodes.length; N++) {
        // First anchor
        currentIndex = nodes[N];
        nextIndex = N + 1 > nodes.length - 1 ? nodes[N - nodes.length + 1] : nodes[N + 1];
        xc = currentIndex.x + (nextIndex.x - currentIndex.x) * 0.8;
        yc = currentIndex.y + (nextIndex.y - currentIndex.y) * 0.8;
        graphics.moveTo(xc, yc); // Second anchor

        currentIndex = nextIndex;
        nextIndex = N + 2 > nodes.length - 1 ? nodes[N - nodes.length + 2] : nodes[N + 2];
        xc = currentIndex.x + (nextIndex.x - currentIndex.x) * 0.2;
        yc = currentIndex.y + (nextIndex.y - currentIndex.y) * 0.2;
        graphics.lineTo(xc, yc);
        graphics.stroke(); // First anchor

        currentIndex = nodes[N];
        nextIndex = N + 1 > nodes.length - 1 ? nodes[N - nodes.length + 1] : nodes[N + 1];
        xc = currentIndex.x + (nextIndex.x - currentIndex.x) * 0.8;
        yc = currentIndex.y + (nextIndex.y - currentIndex.y) * 0.8;
        graphics.circle(xc, yc, 2);
        graphics.fill(); // Second anchor

        currentIndex = nextIndex;
        nextIndex = N + 2 > nodes.length - 1 ? nodes[N - nodes.length + 2] : nodes[N + 2];
        xc = currentIndex.x + (nextIndex.x - currentIndex.x) * 0.2;
        yc = currentIndex.y + (nextIndex.y - currentIndex.y) * 0.2;
        graphics.circle(xc, yc, 2);
        graphics.fill();
      }
    });

    for (var index = 0; index < ripples.length; index++) {
      var ripple = ripples[index];
      var fillColor = cc.color().fromHEX('#ffffff');
      fillColor.a = ripple.fade * 255;
      graphics.fillColor = fillColor;
      graphics.circle(ripple.x, ripple.y, ripple.reactivity);
      graphics.fill();
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9jYXNlcy9ncmFwaGljcy9kZW1vL2Rvb2RsZS5qcyJdLCJuYW1lcyI6WyJjYyIsIkNsYXNzIiwiQ29tcG9uZW50IiwicHJvcGVydGllcyIsInJlYWN0aXZpdHkiLCJkZWJ1ZyIsIm9uRW5hYmxlIiwiZ3JhcGhpY3MiLCJnZXRDb21wb25lbnQiLCJHcmFwaGljcyIsIm5vZGVzIiwicmlwcGxlcyIsIm1vdXNlIiwieCIsInkiLCJjb2xvciIsInIiLCJnIiwiYiIsImEiLCJjeWNsZSIsImNyZWF0ZUJlemllck5vZGVzIiwiY2FudmFzIiwiZmluZCIsIm9uIiwiTm9kZSIsIkV2ZW50VHlwZSIsIlRPVUNIX1NUQVJUIiwidG91Y2giLCJldmVudCIsImdldExvY2F0aW9uIiwiYWRkUmlwcGxlIiwiVE9VQ0hfRU5EIiwiaW5wdXQiLCJ1cGRhdGVDb2xvckN5Y2xlIiwicXVhbnRpdHkiLCJsZW4iLCJ0aGV0YSIsIk1hdGgiLCJQSSIsIndpblNpemUiLCJ3aWR0aCIsImNvcyIsImhlaWdodCIsInNpbiIsInB1c2giLCJ2eCIsInZ5IiwibGFzdFgiLCJsYXN0WSIsIm1pbiIsIm1heCIsImRpc3R1cmIiLCJvcmJpdCIsImFuZ2xlIiwicmFuZG9tIiwic3BlZWQiLCJsZW5ndGgiLCJmYWRlIiwidXBkYXRlIiwiZHQiLCJlYXNlIiwiZnJpY3Rpb24iLCJpbmRleCIsInJpcHBsZSIsInNwbGljZSIsImZvckVhY2giLCJjYWxsIiwibm9kZSIsInJlbmRlciIsImN1cnJlbnRJbmRleCIsIm5leHRJbmRleCIsInhjIiwieWMiLCJjbGVhciIsInN0cm9rZUNvbG9yIiwiZnJvbUhFWCIsImZpbGxDb2xvciIsImxpbmVXaWR0aCIsIm1vdmVUbyIsIk4iLCJxdWFkcmF0aWNDdXJ2ZVRvIiwiZmlsbCIsInN0cm9rZSIsImxpbmVDYXAiLCJMaW5lQ2FwIiwiUk9VTkQiLCJsaW5lSm9pbiIsIkxpbmVKb2luIiwibGluZVRvIiwiY2lyY2xlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBRUFBLEVBQUUsQ0FBQ0MsS0FBSCxDQUFTO0VBQ0wsV0FBU0QsRUFBRSxDQUFDRSxTQURQO0VBR0xDLFVBQVUsRUFBRTtJQUNSQyxVQUFVLEVBQUUsR0FESjtJQUVSQyxLQUFLLEVBQUU7RUFGQyxDQUhQO0VBUUw7RUFDQUMsUUFBUSxFQUFFLG9CQUFZO0lBQ2xCLEtBQUtDLFFBQUwsR0FBZ0IsS0FBS0MsWUFBTCxDQUFrQlIsRUFBRSxDQUFDUyxRQUFyQixDQUFoQjtJQUVBLEtBQUtDLEtBQUwsR0FBYSxFQUFiO0lBQ0EsS0FBS0MsT0FBTCxHQUFlLEVBQWY7SUFDQSxLQUFLQyxLQUFMLEdBQWE7TUFBRUMsQ0FBQyxFQUFFLENBQUw7TUFBUUMsQ0FBQyxFQUFFO0lBQVgsQ0FBYjtJQUNBLEtBQUtDLEtBQUwsR0FBYTtNQUFFQyxDQUFDLEVBQUUsQ0FBTDtNQUFRQyxDQUFDLEVBQUUsQ0FBWDtNQUFjQyxDQUFDLEVBQUUsQ0FBakI7TUFBb0JDLENBQUMsRUFBRTtJQUF2QixDQUFiO0lBQ0EsS0FBS0MsS0FBTCxHQUFhLEVBQWI7SUFFQSxLQUFLQyxpQkFBTDtJQUVBLElBQUlDLE1BQU0sR0FBR3RCLEVBQUUsQ0FBQ3VCLElBQUgsQ0FBUSxRQUFSLENBQWI7SUFDQUQsTUFBTSxDQUFDRSxFQUFQLENBQVV4QixFQUFFLENBQUN5QixJQUFILENBQVFDLFNBQVIsQ0FBa0JDLFdBQTVCLEVBQXlDLFVBQVVDLEtBQVYsRUFBaUJDLEtBQWpCLEVBQXdCO01BQzdELEtBQUtqQixLQUFMLEdBQWFnQixLQUFLLENBQUNFLFdBQU4sRUFBYjtNQUNBLEtBQUtDLFNBQUw7SUFDSCxDQUhELEVBR0csSUFISDtJQUlBVCxNQUFNLENBQUNFLEVBQVAsQ0FBVXhCLEVBQUUsQ0FBQ3lCLElBQUgsQ0FBUUMsU0FBUixDQUFrQk0sU0FBNUIsRUFBdUMsWUFBWTtNQUMvQyxLQUFLQyxLQUFMLEdBQWEsS0FBYjtJQUNILENBRkQsRUFFRyxJQUZIO0VBR0gsQ0E1Qkk7RUE4QkxaLGlCQUFpQixFQUFFLDZCQUFZO0lBRTNCLEtBQUthLGdCQUFMOztJQUVBLEtBQUksSUFBSUMsUUFBUSxHQUFHLENBQWYsRUFBa0JDLEdBQUcsR0FBRyxDQUE1QixFQUErQkQsUUFBUSxHQUFHQyxHQUExQyxFQUErQ0QsUUFBUSxFQUF2RCxFQUEyRDtNQUV2RCxJQUFJRSxLQUFLLEdBQUdDLElBQUksQ0FBQ0MsRUFBTCxHQUFVLENBQVYsR0FBY0osUUFBZCxHQUF5QkMsR0FBckM7TUFFQSxJQUFJdkIsQ0FBQyxHQUFHYixFQUFFLENBQUN3QyxPQUFILENBQVdDLEtBQVgsR0FBbUIsR0FBbkIsR0FBeUIsSUFBSUgsSUFBSSxDQUFDSSxHQUFMLENBQVNMLEtBQVQsQ0FBckM7TUFDQSxJQUFJdkIsQ0FBQyxHQUFHZCxFQUFFLENBQUN3QyxPQUFILENBQVdHLE1BQVgsR0FBb0IsR0FBcEIsR0FBMEIsSUFBSUwsSUFBSSxDQUFDTSxHQUFMLENBQVNQLEtBQVQsQ0FBdEM7TUFFQSxLQUFLM0IsS0FBTCxDQUFXbUMsSUFBWCxDQUFnQjtRQUVaaEMsQ0FBQyxFQUFFQSxDQUZTO1FBR1pDLENBQUMsRUFBRUEsQ0FIUztRQUlaZ0MsRUFBRSxFQUFFLENBSlE7UUFLWkMsRUFBRSxFQUFFLENBTFE7UUFPWkMsS0FBSyxFQUFFbkMsQ0FQSztRQVFab0MsS0FBSyxFQUFFbkMsQ0FSSztRQVVab0MsR0FBRyxFQUFFLEdBVk87UUFXWkMsR0FBRyxFQUFFLEdBWE87UUFZWkMsT0FBTyxFQUFFLEdBWkc7UUFjWkMsS0FBSyxFQUFFLEVBZEs7UUFlWkMsS0FBSyxFQUFFaEIsSUFBSSxDQUFDaUIsTUFBTCxLQUFnQmpCLElBQUksQ0FBQ0MsRUFBckIsR0FBMEIsQ0FmckI7UUFnQlppQixLQUFLLEVBQUUsT0FBT2xCLElBQUksQ0FBQ2lCLE1BQUwsS0FBZ0IsSUFoQmxCO1FBa0JabEIsS0FBSyxFQUFFQTtNQWxCSyxDQUFoQjtJQXNCSDtFQUNKLENBaEVJO0VBa0VMTixTQUFTLEVBQUUscUJBQVc7SUFFbEIsS0FBS0UsS0FBTCxHQUFhLElBQWI7O0lBRUEsSUFBRyxLQUFLdEIsT0FBTCxDQUFhOEMsTUFBYixLQUF3QixDQUEzQixFQUE4QjtNQUUxQixLQUFLdkIsZ0JBQUw7TUFFQSxLQUFLdkIsT0FBTCxDQUFha0MsSUFBYixDQUFrQjtRQUVkaEMsQ0FBQyxFQUFFLEtBQUtELEtBQUwsQ0FBV0MsQ0FGQTtRQUdkQyxDQUFDLEVBQUUsS0FBS0YsS0FBTCxDQUFXRSxDQUhBO1FBS2RWLFVBQVUsRUFBRSxDQUxFO1FBTWRzRCxJQUFJLEVBQUU7TUFOUSxDQUFsQjtJQVVIO0VBRUosQ0F0Rkk7RUF3Rkx4QixnQkFBZ0IsRUFBRSw0QkFBWTtJQUUxQixLQUFLZCxLQUFMLEdBQWFrQixJQUFJLENBQUNZLEdBQUwsQ0FBUyxLQUFLOUIsS0FBTCxHQUFhLEtBQUtoQixVQUFsQixHQUErQixHQUF4QyxFQUE2QyxHQUE3QyxNQUFzRCxHQUF0RCxHQUE0RCxLQUFLZ0IsS0FBTCxJQUFjLEtBQUtoQixVQUFMLEdBQWtCLEdBQTVGLEdBQWtHLENBQS9HO0lBRUEsSUFBSVcsS0FBSyxHQUFHLEtBQUtBLEtBQWpCO0lBQ0FBLEtBQUssQ0FBQ0MsQ0FBTixHQUFVLENBQUMsRUFBRXNCLElBQUksQ0FBQ00sR0FBTCxDQUFTLE1BQU0sS0FBS3hCLEtBQVgsR0FBbUIsQ0FBNUIsSUFBaUMsR0FBakMsR0FBdUMsR0FBekMsQ0FBWDtJQUNBTCxLQUFLLENBQUNFLENBQU4sR0FBVSxDQUFDLEVBQUVxQixJQUFJLENBQUNNLEdBQUwsQ0FBUyxNQUFNLEtBQUt4QixLQUFYLEdBQW1CLENBQTVCLElBQWlDLEdBQWpDLEdBQXVDLEdBQXpDLENBQVg7SUFDQUwsS0FBSyxDQUFDRyxDQUFOLEdBQVUsQ0FBQyxFQUFHb0IsSUFBSSxDQUFDTSxHQUFMLENBQVMsTUFBTSxLQUFLeEIsS0FBWCxHQUFtQixDQUE1QixJQUFpQyxHQUFqQyxHQUF1QyxHQUExQyxDQUFYO0VBRUgsQ0FqR0k7RUFtR0w7RUFDQXVDLE1BQU0sRUFBRSxnQkFBVUMsRUFBVixFQUFjO0lBQUE7O0lBQ2xCLElBQUlsRCxLQUFLLEdBQUcsS0FBS0EsS0FBakI7SUFDQSxJQUFJQyxPQUFPLEdBQUcsS0FBS0EsT0FBbkI7SUFFQSxJQUFJa0QsSUFBSSxHQUFHLElBQVg7SUFBQSxJQUFpQkMsUUFBUSxHQUFHLElBQTVCOztJQUVBLEtBQUksSUFBSUMsS0FBSyxHQUFHLENBQWhCLEVBQW1CQSxLQUFLLEdBQUdwRCxPQUFPLENBQUM4QyxNQUFuQyxFQUEyQ00sS0FBSyxFQUFoRCxFQUFvRDtNQUVoRCxJQUFJQyxNQUFNLEdBQUdyRCxPQUFPLENBQUNvRCxLQUFELENBQXBCO01BRUFDLE1BQU0sQ0FBQzVELFVBQVAsSUFBcUIsQ0FBckI7TUFDQTRELE1BQU0sQ0FBQ04sSUFBUCxJQUFlLElBQWY7TUFFQSxJQUFHTSxNQUFNLENBQUNOLElBQVAsSUFBZSxHQUFsQixFQUVJL0MsT0FBTyxDQUFDc0QsTUFBUixDQUFlRixLQUFmLEVBQXNCLENBQXRCO0lBRVA7O0lBRUQsR0FBR0csT0FBSCxDQUFXQyxJQUFYLENBQWdCekQsS0FBaEIsRUFBdUIsVUFBQzBELElBQUQsRUFBT0wsS0FBUCxFQUFpQjtNQUVwQ0ssSUFBSSxDQUFDcEIsS0FBTCxJQUFjLENBQUNoRCxFQUFFLENBQUN3QyxPQUFILENBQVdDLEtBQVgsR0FBbUIsR0FBbkIsR0FBeUIyQixJQUFJLENBQUNoQixPQUFMLEdBQWVkLElBQUksQ0FBQ0ksR0FBTCxDQUFTMEIsSUFBSSxDQUFDL0IsS0FBZCxDQUF4QyxHQUErRCtCLElBQUksQ0FBQ3BCLEtBQXJFLElBQThFLElBQTVGO01BQ0FvQixJQUFJLENBQUNuQixLQUFMLElBQWMsQ0FBQ2pELEVBQUUsQ0FBQ3dDLE9BQUgsQ0FBV0csTUFBWCxHQUFvQixHQUFwQixHQUEwQnlCLElBQUksQ0FBQ2hCLE9BQUwsR0FBZWQsSUFBSSxDQUFDTSxHQUFMLENBQVN3QixJQUFJLENBQUMvQixLQUFkLENBQXpDLEdBQWdFK0IsSUFBSSxDQUFDbkIsS0FBdEUsSUFBK0UsSUFBN0YsQ0FIb0MsQ0FLcEM7O01BQ0FtQixJQUFJLENBQUN2RCxDQUFMLElBQVUsQ0FBRXVELElBQUksQ0FBQ3BCLEtBQUwsR0FBYVYsSUFBSSxDQUFDSSxHQUFMLENBQVMwQixJQUFJLENBQUNkLEtBQWQsSUFBdUJjLElBQUksQ0FBQ2YsS0FBMUMsR0FBbURlLElBQUksQ0FBQ3ZELENBQXpELElBQThELElBQXhFO01BQ0F1RCxJQUFJLENBQUN0RCxDQUFMLElBQVUsQ0FBRXNELElBQUksQ0FBQ25CLEtBQUwsR0FBYVgsSUFBSSxDQUFDTSxHQUFMLENBQVN3QixJQUFJLENBQUNkLEtBQWQsSUFBdUJjLElBQUksQ0FBQ2YsS0FBMUMsR0FBbURlLElBQUksQ0FBQ3RELENBQXpELElBQThELElBQXhFLENBUG9DLENBU3BDOztNQUNBc0QsSUFBSSxDQUFDdEIsRUFBTCxJQUFXLENBQUNzQixJQUFJLENBQUNsQixHQUFMLEdBQVdrQixJQUFJLENBQUNoQixPQUFqQixJQUE0QlMsSUFBdkMsQ0FWb0MsQ0FZcEM7O01BQ0FPLElBQUksQ0FBQ3RCLEVBQUwsSUFBV2dCLFFBQVg7TUFFQU0sSUFBSSxDQUFDaEIsT0FBTCxJQUFnQmdCLElBQUksQ0FBQ3RCLEVBQXJCO01BRUEsSUFBRyxLQUFJLENBQUNiLEtBQVIsRUFFSW1DLElBQUksQ0FBQ2hCLE9BQUwsSUFBZ0IsQ0FBQ2dCLElBQUksQ0FBQ2pCLEdBQUwsR0FBV2lCLElBQUksQ0FBQ2hCLE9BQWpCLElBQTRCLEtBQUksQ0FBQ2hELFVBQWpEO01BRUpnRSxJQUFJLENBQUNkLEtBQUwsSUFBY2MsSUFBSSxDQUFDWixLQUFuQjtJQUVILENBdkJEO0lBeUJBLEtBQUthLE1BQUw7RUFDSCxDQWpKSTtFQW1KTEEsTUFBTSxFQUFFLGtCQUFZO0lBQUE7O0lBQ2hCLElBQUkzRCxLQUFLLEdBQUcsS0FBS0EsS0FBakI7SUFDQSxJQUFJQyxPQUFPLEdBQUcsS0FBS0EsT0FBbkI7SUFDQSxJQUFJSixRQUFRLEdBQUcsS0FBS0EsUUFBcEI7SUFDQSxJQUFJUSxLQUFLLEdBQUcsS0FBS0EsS0FBakI7SUFFQSxJQUFJdUQsWUFBSixFQUFrQkMsU0FBbEIsRUFBNkJDLEVBQTdCLEVBQWlDQyxFQUFqQztJQUVBMUQsS0FBSyxDQUFDSSxDQUFOLEdBQVUsS0FBS2QsS0FBTCxHQUFhLEdBQWIsR0FBbUIsTUFBSSxDQUFqQztJQUVBRSxRQUFRLENBQUNtRSxLQUFUO0lBRUEsR0FBR1IsT0FBSCxDQUFXQyxJQUFYLENBQWdCekQsS0FBaEIsRUFBdUIsVUFBQzBELElBQUQsRUFBT0wsS0FBUCxFQUFpQjtNQUVwQ08sWUFBWSxHQUFHNUQsS0FBSyxDQUFDQSxLQUFLLENBQUMrQyxNQUFOLEdBQWUsQ0FBaEIsQ0FBcEI7TUFDQWMsU0FBUyxHQUFHN0QsS0FBSyxDQUFDLENBQUQsQ0FBakI7TUFFQThELEVBQUUsR0FBR0YsWUFBWSxDQUFDekQsQ0FBYixHQUFpQixDQUFDMEQsU0FBUyxDQUFDMUQsQ0FBVixHQUFjeUQsWUFBWSxDQUFDekQsQ0FBNUIsSUFBaUMsR0FBdkQ7TUFDQTRELEVBQUUsR0FBR0gsWUFBWSxDQUFDeEQsQ0FBYixHQUFpQixDQUFDeUQsU0FBUyxDQUFDekQsQ0FBVixHQUFjd0QsWUFBWSxDQUFDeEQsQ0FBNUIsSUFBaUMsR0FBdkQ7TUFFQSxJQUFJNkQsV0FBVyxHQUFHM0UsRUFBRSxDQUFDZSxLQUFILEdBQVc2RCxPQUFYLENBQW1CLE1BQUksQ0FBQ3ZFLEtBQUwsR0FBYSxTQUFiLEdBQXlCLFNBQTVDLENBQWxCO01BQ0FzRSxXQUFXLENBQUN4RCxDQUFaLEdBQWdCLE1BQUksQ0FBQ2QsS0FBTCxHQUFhLEdBQWIsR0FBbUIsTUFBSSxDQUF2QztNQUNBRSxRQUFRLENBQUNvRSxXQUFULEdBQXVCQSxXQUF2QjtNQUVBcEUsUUFBUSxDQUFDc0UsU0FBVCxHQUFxQjlELEtBQXJCO01BQ0FSLFFBQVEsQ0FBQ3VFLFNBQVQsR0FBcUIsTUFBSSxDQUFDekUsS0FBTCxHQUFhLENBQWIsR0FBaUIsQ0FBdEM7TUFFQUUsUUFBUSxDQUFDd0UsTUFBVCxDQUFnQlAsRUFBaEIsRUFBb0JDLEVBQXBCLEVBZm9DLENBaUJwQzs7TUFDQSxLQUFJLElBQUlPLENBQUMsR0FBRyxDQUFaLEVBQWVBLENBQUMsR0FBR3RFLEtBQUssQ0FBQytDLE1BQXpCLEVBQWlDdUIsQ0FBQyxFQUFsQyxFQUFzQztRQUVsQ1YsWUFBWSxHQUFHNUQsS0FBSyxDQUFDc0UsQ0FBRCxDQUFwQjtRQUNBVCxTQUFTLEdBQUdTLENBQUMsR0FBRyxDQUFKLEdBQVF0RSxLQUFLLENBQUMrQyxNQUFOLEdBQWUsQ0FBdkIsR0FBMkIvQyxLQUFLLENBQUNzRSxDQUFDLEdBQUd0RSxLQUFLLENBQUMrQyxNQUFWLEdBQW1CLENBQXBCLENBQWhDLEdBQXlEL0MsS0FBSyxDQUFDc0UsQ0FBQyxHQUFHLENBQUwsQ0FBMUU7UUFFQVIsRUFBRSxHQUFHRixZQUFZLENBQUN6RCxDQUFiLEdBQWlCLENBQUMwRCxTQUFTLENBQUMxRCxDQUFWLEdBQWN5RCxZQUFZLENBQUN6RCxDQUE1QixJQUFpQyxHQUF2RDtRQUNBNEQsRUFBRSxHQUFHSCxZQUFZLENBQUN4RCxDQUFiLEdBQWlCLENBQUN5RCxTQUFTLENBQUN6RCxDQUFWLEdBQWN3RCxZQUFZLENBQUN4RCxDQUE1QixJQUFpQyxHQUF2RDtRQUVBUCxRQUFRLENBQUMwRSxnQkFBVCxDQUEwQlgsWUFBWSxDQUFDekQsQ0FBdkMsRUFBMEN5RCxZQUFZLENBQUN4RCxDQUF2RCxFQUEwRDBELEVBQTFELEVBQThEQyxFQUE5RDtNQUVIOztNQUVELE1BQUksQ0FBQ3BFLEtBQUwsR0FBYSxJQUFiLEdBQW9CRSxRQUFRLENBQUMyRSxJQUFULEVBQXBCO01BQ0EzRSxRQUFRLENBQUM0RSxNQUFUO01BRUE1RSxRQUFRLENBQUN1RSxTQUFULEdBQXFCLENBQXJCO01BQ0F2RSxRQUFRLENBQUM2RSxPQUFULEdBQW1CcEYsRUFBRSxDQUFDUyxRQUFILENBQVk0RSxPQUFaLENBQW9CQyxLQUF2QztNQUNBL0UsUUFBUSxDQUFDZ0YsUUFBVCxHQUFvQnZGLEVBQUUsQ0FBQ1MsUUFBSCxDQUFZK0UsUUFBWixDQUFxQkYsS0FBekM7TUFDQS9FLFFBQVEsQ0FBQ29FLFdBQVQsQ0FBcUJDLE9BQXJCLENBQTZCLFNBQTdCO01BQ0FyRSxRQUFRLENBQUNzRSxTQUFULENBQW1CRCxPQUFuQixDQUEyQixTQUEzQixFQXJDb0MsQ0F1Q3BDOztNQUNBLEtBQUksSUFBSUksQ0FBQyxHQUFHLENBQVosRUFBZUEsQ0FBQyxHQUFHdEUsS0FBSyxDQUFDK0MsTUFBekIsRUFBaUN1QixDQUFDLEVBQWxDLEVBQXNDO1FBRWxDO1FBQ0FWLFlBQVksR0FBRzVELEtBQUssQ0FBQ3NFLENBQUQsQ0FBcEI7UUFDQVQsU0FBUyxHQUFHUyxDQUFDLEdBQUcsQ0FBSixHQUFRdEUsS0FBSyxDQUFDK0MsTUFBTixHQUFlLENBQXZCLEdBQTJCL0MsS0FBSyxDQUFDc0UsQ0FBQyxHQUFHdEUsS0FBSyxDQUFDK0MsTUFBVixHQUFtQixDQUFwQixDQUFoQyxHQUF5RC9DLEtBQUssQ0FBQ3NFLENBQUMsR0FBRyxDQUFMLENBQTFFO1FBRUFSLEVBQUUsR0FBR0YsWUFBWSxDQUFDekQsQ0FBYixHQUFpQixDQUFDMEQsU0FBUyxDQUFDMUQsQ0FBVixHQUFjeUQsWUFBWSxDQUFDekQsQ0FBNUIsSUFBaUMsR0FBdkQ7UUFDQTRELEVBQUUsR0FBR0gsWUFBWSxDQUFDeEQsQ0FBYixHQUFpQixDQUFDeUQsU0FBUyxDQUFDekQsQ0FBVixHQUFjd0QsWUFBWSxDQUFDeEQsQ0FBNUIsSUFBaUMsR0FBdkQ7UUFFQVAsUUFBUSxDQUFDd0UsTUFBVCxDQUFnQlAsRUFBaEIsRUFBb0JDLEVBQXBCLEVBVGtDLENBV2xDOztRQUNBSCxZQUFZLEdBQUdDLFNBQWY7UUFDQUEsU0FBUyxHQUFHUyxDQUFDLEdBQUcsQ0FBSixHQUFRdEUsS0FBSyxDQUFDK0MsTUFBTixHQUFlLENBQXZCLEdBQTJCL0MsS0FBSyxDQUFDc0UsQ0FBQyxHQUFHdEUsS0FBSyxDQUFDK0MsTUFBVixHQUFtQixDQUFwQixDQUFoQyxHQUF5RC9DLEtBQUssQ0FBQ3NFLENBQUMsR0FBRyxDQUFMLENBQTFFO1FBRUFSLEVBQUUsR0FBR0YsWUFBWSxDQUFDekQsQ0FBYixHQUFpQixDQUFDMEQsU0FBUyxDQUFDMUQsQ0FBVixHQUFjeUQsWUFBWSxDQUFDekQsQ0FBNUIsSUFBaUMsR0FBdkQ7UUFDQTRELEVBQUUsR0FBR0gsWUFBWSxDQUFDeEQsQ0FBYixHQUFpQixDQUFDeUQsU0FBUyxDQUFDekQsQ0FBVixHQUFjd0QsWUFBWSxDQUFDeEQsQ0FBNUIsSUFBaUMsR0FBdkQ7UUFFQVAsUUFBUSxDQUFDa0YsTUFBVCxDQUFnQmpCLEVBQWhCLEVBQW9CQyxFQUFwQjtRQUNBbEUsUUFBUSxDQUFDNEUsTUFBVCxHQW5Ca0MsQ0FxQmxDOztRQUNBYixZQUFZLEdBQUc1RCxLQUFLLENBQUNzRSxDQUFELENBQXBCO1FBQ0FULFNBQVMsR0FBR1MsQ0FBQyxHQUFHLENBQUosR0FBUXRFLEtBQUssQ0FBQytDLE1BQU4sR0FBZSxDQUF2QixHQUEyQi9DLEtBQUssQ0FBQ3NFLENBQUMsR0FBR3RFLEtBQUssQ0FBQytDLE1BQVYsR0FBbUIsQ0FBcEIsQ0FBaEMsR0FBeUQvQyxLQUFLLENBQUNzRSxDQUFDLEdBQUcsQ0FBTCxDQUExRTtRQUVBUixFQUFFLEdBQUdGLFlBQVksQ0FBQ3pELENBQWIsR0FBaUIsQ0FBQzBELFNBQVMsQ0FBQzFELENBQVYsR0FBY3lELFlBQVksQ0FBQ3pELENBQTVCLElBQWlDLEdBQXZEO1FBQ0E0RCxFQUFFLEdBQUdILFlBQVksQ0FBQ3hELENBQWIsR0FBaUIsQ0FBQ3lELFNBQVMsQ0FBQ3pELENBQVYsR0FBY3dELFlBQVksQ0FBQ3hELENBQTVCLElBQWlDLEdBQXZEO1FBRUFQLFFBQVEsQ0FBQ21GLE1BQVQsQ0FBZ0JsQixFQUFoQixFQUFvQkMsRUFBcEIsRUFBd0IsQ0FBeEI7UUFDQWxFLFFBQVEsQ0FBQzJFLElBQVQsR0E3QmtDLENBK0JsQzs7UUFDQVosWUFBWSxHQUFHQyxTQUFmO1FBQ0FBLFNBQVMsR0FBR1MsQ0FBQyxHQUFHLENBQUosR0FBUXRFLEtBQUssQ0FBQytDLE1BQU4sR0FBZSxDQUF2QixHQUEyQi9DLEtBQUssQ0FBQ3NFLENBQUMsR0FBR3RFLEtBQUssQ0FBQytDLE1BQVYsR0FBbUIsQ0FBcEIsQ0FBaEMsR0FBeUQvQyxLQUFLLENBQUNzRSxDQUFDLEdBQUcsQ0FBTCxDQUExRTtRQUVBUixFQUFFLEdBQUdGLFlBQVksQ0FBQ3pELENBQWIsR0FBaUIsQ0FBQzBELFNBQVMsQ0FBQzFELENBQVYsR0FBY3lELFlBQVksQ0FBQ3pELENBQTVCLElBQWlDLEdBQXZEO1FBQ0E0RCxFQUFFLEdBQUdILFlBQVksQ0FBQ3hELENBQWIsR0FBaUIsQ0FBQ3lELFNBQVMsQ0FBQ3pELENBQVYsR0FBY3dELFlBQVksQ0FBQ3hELENBQTVCLElBQWlDLEdBQXZEO1FBRUFQLFFBQVEsQ0FBQ21GLE1BQVQsQ0FBZ0JsQixFQUFoQixFQUFvQkMsRUFBcEIsRUFBd0IsQ0FBeEI7UUFDQWxFLFFBQVEsQ0FBQzJFLElBQVQ7TUFFSDtJQUVKLENBbkZEOztJQXFGQSxLQUFJLElBQUluQixLQUFLLEdBQUcsQ0FBaEIsRUFBbUJBLEtBQUssR0FBR3BELE9BQU8sQ0FBQzhDLE1BQW5DLEVBQTJDTSxLQUFLLEVBQWhELEVBQW9EO01BRWhELElBQUlDLE1BQU0sR0FBR3JELE9BQU8sQ0FBQ29ELEtBQUQsQ0FBcEI7TUFFQSxJQUFJYyxTQUFTLEdBQUc3RSxFQUFFLENBQUNlLEtBQUgsR0FBVzZELE9BQVgsQ0FBbUIsU0FBbkIsQ0FBaEI7TUFDQUMsU0FBUyxDQUFDMUQsQ0FBVixHQUFjNkMsTUFBTSxDQUFDTixJQUFQLEdBQWMsR0FBNUI7TUFDQW5ELFFBQVEsQ0FBQ3NFLFNBQVQsR0FBcUJBLFNBQXJCO01BRUF0RSxRQUFRLENBQUNtRixNQUFULENBQWdCMUIsTUFBTSxDQUFDbkQsQ0FBdkIsRUFBMEJtRCxNQUFNLENBQUNsRCxDQUFqQyxFQUFvQ2tELE1BQU0sQ0FBQzVELFVBQTNDO01BRUFHLFFBQVEsQ0FBQzJFLElBQVQ7SUFDSDtFQUVKO0FBalFJLENBQVQiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIi8vIGh0dHA6Ly9jb2RlcGVuLmlvL0ZyYW5jZXh0L3Blbi9vandkSlxuXG5jYy5DbGFzcyh7XG4gICAgZXh0ZW5kczogY2MuQ29tcG9uZW50LFxuXG4gICAgcHJvcGVydGllczoge1xuICAgICAgICByZWFjdGl2aXR5OiAwLjUsXG4gICAgICAgIGRlYnVnOiBmYWxzZVxuICAgIH0sXG5cbiAgICAvLyB1c2UgdGhpcyBmb3IgaW5pdGlhbGl6YXRpb25cbiAgICBvbkVuYWJsZTogZnVuY3Rpb24gKCkge1xuICAgICAgICB0aGlzLmdyYXBoaWNzID0gdGhpcy5nZXRDb21wb25lbnQoY2MuR3JhcGhpY3MpO1xuXG4gICAgICAgIHRoaXMubm9kZXMgPSBbXTtcbiAgICAgICAgdGhpcy5yaXBwbGVzID0gW107XG4gICAgICAgIHRoaXMubW91c2UgPSB7IHg6IDAsIHk6IDAgfTtcbiAgICAgICAgdGhpcy5jb2xvciA9IHsgcjogMCwgZzogMCwgYjogMCwgYTogMjU1IH07XG4gICAgICAgIHRoaXMuY3ljbGUgPSA5MDtcblxuICAgICAgICB0aGlzLmNyZWF0ZUJlemllck5vZGVzKCk7XG5cbiAgICAgICAgbGV0IGNhbnZhcyA9IGNjLmZpbmQoJ0NhbnZhcycpO1xuICAgICAgICBjYW52YXMub24oY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfU1RBUlQsIGZ1bmN0aW9uICh0b3VjaCwgZXZlbnQpIHtcbiAgICAgICAgICAgIHRoaXMubW91c2UgPSB0b3VjaC5nZXRMb2NhdGlvbigpO1xuICAgICAgICAgICAgdGhpcy5hZGRSaXBwbGUoKTtcbiAgICAgICAgfSwgdGhpcyk7XG4gICAgICAgIGNhbnZhcy5vbihjYy5Ob2RlLkV2ZW50VHlwZS5UT1VDSF9FTkQsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHRoaXMuaW5wdXQgPSBmYWxzZTtcbiAgICAgICAgfSwgdGhpcyk7XG4gICAgfSxcbiAgICBcbiAgICBjcmVhdGVCZXppZXJOb2RlczogZnVuY3Rpb24gKCkge1xuICAgIFxuICAgICAgICB0aGlzLnVwZGF0ZUNvbG9yQ3ljbGUoKTtcbiAgICBcbiAgICAgICAgZm9yKHZhciBxdWFudGl0eSA9IDAsIGxlbiA9IDY7IHF1YW50aXR5IDwgbGVuOyBxdWFudGl0eSsrKSB7XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICB2YXIgdGhldGEgPSBNYXRoLlBJICogMiAqIHF1YW50aXR5IC8gbGVuO1xuICAgICAgICAgICAgXG4gICAgICAgICAgICB2YXIgeCA9IGNjLndpblNpemUud2lkdGggKiAwLjUgKyAwICogTWF0aC5jb3ModGhldGEpO1xuICAgICAgICAgICAgdmFyIHkgPSBjYy53aW5TaXplLmhlaWdodCAqIDAuNSArIDAgKiBNYXRoLnNpbih0aGV0YSk7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIHRoaXMubm9kZXMucHVzaCh7XG4gICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIHg6IHgsXG4gICAgICAgICAgICAgICAgeTogeSxcbiAgICAgICAgICAgICAgICB2eDogMCxcbiAgICAgICAgICAgICAgICB2eTogMCxcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICBsYXN0WDogeCxcbiAgICAgICAgICAgICAgICBsYXN0WTogeSxcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICBtaW46IDE1MCxcbiAgICAgICAgICAgICAgICBtYXg6IDI1MCxcbiAgICAgICAgICAgICAgICBkaXN0dXJiOiAxNTAsXG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgb3JiaXQ6IDIwLFxuICAgICAgICAgICAgICAgIGFuZ2xlOiBNYXRoLnJhbmRvbSgpICogTWF0aC5QSSAqIDIsXG4gICAgICAgICAgICAgICAgc3BlZWQ6IDAuMDUgKyBNYXRoLnJhbmRvbSgpICogMC4wNSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIHRoZXRhOiB0aGV0YVxuICAgICAgICAgICAgXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgIH1cbiAgICB9LFxuXG4gICAgYWRkUmlwcGxlOiBmdW5jdGlvbigpIHtcblxuICAgICAgICB0aGlzLmlucHV0ID0gdHJ1ZTtcbiAgICAgICAgXG4gICAgICAgIGlmKHRoaXMucmlwcGxlcy5sZW5ndGggPT09IDApIHtcbiAgICBcbiAgICAgICAgICAgIHRoaXMudXBkYXRlQ29sb3JDeWNsZSgpO1xuICAgIFxuICAgICAgICAgICAgdGhpcy5yaXBwbGVzLnB1c2goe1xuICAgICAgICBcbiAgICAgICAgICAgICAgICB4OiB0aGlzLm1vdXNlLngsXG4gICAgICAgICAgICAgICAgeTogdGhpcy5tb3VzZS55LFxuICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgcmVhY3Rpdml0eTogMCxcbiAgICAgICAgICAgICAgICBmYWRlOiAxLjBcbiAgICAgICAgXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIFxuICAgICAgICB9XG4gICAgXG4gICAgfSxcbiAgICBcbiAgICB1cGRhdGVDb2xvckN5Y2xlOiBmdW5jdGlvbiAoKSB7XG4gICAgXG4gICAgICAgIHRoaXMuY3ljbGUgPSBNYXRoLm1pbih0aGlzLmN5Y2xlICsgdGhpcy5yZWFjdGl2aXR5ICsgMC4zLCAxMDApICE9PSAxMDAgPyB0aGlzLmN5Y2xlICs9IHRoaXMucmVhY3Rpdml0eSArIDAuMyA6IDA7XG4gICAgICAgIFxuICAgICAgICBsZXQgY29sb3IgPSB0aGlzLmNvbG9yO1xuICAgICAgICBjb2xvci5yID0gfn4oTWF0aC5zaW4oMC4zICogdGhpcy5jeWNsZSArIDApICogMTI3ICsgMTI4KTtcbiAgICAgICAgY29sb3IuZyA9IH5+KE1hdGguc2luKDAuMyAqIHRoaXMuY3ljbGUgKyAyKSAqIDEyNyArIDEyOCk7XG4gICAgICAgIGNvbG9yLmIgPSB+figgTWF0aC5zaW4oMC4zICogdGhpcy5jeWNsZSArIDQpICogMTI3ICsgMTI4KTtcbiAgICBcbiAgICB9LFxuXG4gICAgLy8gY2FsbGVkIGV2ZXJ5IGZyYW1lLCB1bmNvbW1lbnQgdGhpcyBmdW5jdGlvbiB0byBhY3RpdmF0ZSB1cGRhdGUgY2FsbGJhY2tcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIChkdCkge1xuICAgICAgICBsZXQgbm9kZXMgPSB0aGlzLm5vZGVzO1xuICAgICAgICBsZXQgcmlwcGxlcyA9IHRoaXMucmlwcGxlcztcblxuICAgICAgICB2YXIgZWFzZSA9IDAuMDEsIGZyaWN0aW9uID0gMC45ODtcbiAgICAgICAgXG4gICAgICAgIGZvcih2YXIgaW5kZXggPSAwOyBpbmRleCA8IHJpcHBsZXMubGVuZ3RoOyBpbmRleCsrKSB7XG4gICAgICAgIFxuICAgICAgICAgICAgdmFyIHJpcHBsZSA9IHJpcHBsZXNbaW5kZXhdO1xuICAgICAgICBcbiAgICAgICAgICAgIHJpcHBsZS5yZWFjdGl2aXR5ICs9IDU7XG4gICAgICAgICAgICByaXBwbGUuZmFkZSAtPSAwLjA1O1xuICAgICAgICAgICAgXG4gICAgICAgICAgICBpZihyaXBwbGUuZmFkZSA8PSAwLjApXG4gICAgICAgICAgICBcbiAgICAgICAgICAgICAgICByaXBwbGVzLnNwbGljZShpbmRleCwgMSk7XG4gICAgICAgICAgICAgICAgXG4gICAgICAgIH1cbiAgICBcbiAgICAgICAgW10uZm9yRWFjaC5jYWxsKG5vZGVzLCAobm9kZSwgaW5kZXgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgbm9kZS5sYXN0WCArPSAoY2Mud2luU2l6ZS53aWR0aCAqIDAuNSArIG5vZGUuZGlzdHVyYiAqIE1hdGguY29zKG5vZGUudGhldGEpIC0gbm9kZS5sYXN0WCkgKiAwLjA4O1xuICAgICAgICAgICAgbm9kZS5sYXN0WSArPSAoY2Mud2luU2l6ZS5oZWlnaHQgKiAwLjUgKyBub2RlLmRpc3R1cmIgKiBNYXRoLnNpbihub2RlLnRoZXRhKSAtIG5vZGUubGFzdFkpICogMC4wODtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgLy8gTW90aW9uXG4gICAgICAgICAgICBub2RlLnggKz0gKChub2RlLmxhc3RYICsgTWF0aC5jb3Mobm9kZS5hbmdsZSkgKiBub2RlLm9yYml0KSAtIG5vZGUueCkgKiAwLjA4O1xuICAgICAgICAgICAgbm9kZS55ICs9ICgobm9kZS5sYXN0WSArIE1hdGguc2luKG5vZGUuYW5nbGUpICogbm9kZS5vcmJpdCkgLSBub2RlLnkpICogMC4wODtcbiAgICAgICAgXG4gICAgICAgICAgICAvLyBFYXNlXG4gICAgICAgICAgICBub2RlLnZ4ICs9IChub2RlLm1pbiAtIG5vZGUuZGlzdHVyYikgKiBlYXNlO1xuICAgICAgICBcbiAgICAgICAgICAgIC8vIEZyaWN0aW9uXG4gICAgICAgICAgICBub2RlLnZ4ICo9IGZyaWN0aW9uO1xuICAgICAgICAgICAgXG4gICAgICAgICAgICBub2RlLmRpc3R1cmIgKz0gbm9kZS52eDtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgaWYodGhpcy5pbnB1dClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgbm9kZS5kaXN0dXJiICs9IChub2RlLm1heCAtIG5vZGUuZGlzdHVyYikgKiB0aGlzLnJlYWN0aXZpdHk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgIG5vZGUuYW5nbGUgKz0gbm9kZS5zcGVlZDtcbiAgICAgICAgICAgIFxuICAgICAgICB9KTtcblxuICAgICAgICB0aGlzLnJlbmRlcigpO1xuICAgIH0sXG5cbiAgICByZW5kZXI6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgbGV0IG5vZGVzID0gdGhpcy5ub2RlcztcbiAgICAgICAgbGV0IHJpcHBsZXMgPSB0aGlzLnJpcHBsZXM7XG4gICAgICAgIGxldCBncmFwaGljcyA9IHRoaXMuZ3JhcGhpY3M7XG4gICAgICAgIGxldCBjb2xvciA9IHRoaXMuY29sb3I7XG4gICAgXG4gICAgICAgIHZhciBjdXJyZW50SW5kZXgsIG5leHRJbmRleCwgeGMsIHljO1xuXG4gICAgICAgIGNvbG9yLmEgPSB0aGlzLmRlYnVnID8gMjU1IDogMjU1LzI7XG5cbiAgICAgICAgZ3JhcGhpY3MuY2xlYXIoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICBbXS5mb3JFYWNoLmNhbGwobm9kZXMsIChub2RlLCBpbmRleCkgPT4ge1xuICAgIFxuICAgICAgICAgICAgY3VycmVudEluZGV4ID0gbm9kZXNbbm9kZXMubGVuZ3RoIC0gMV07XG4gICAgICAgICAgICBuZXh0SW5kZXggPSBub2Rlc1swXTtcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgIHhjID0gY3VycmVudEluZGV4LnggKyAobmV4dEluZGV4LnggLSBjdXJyZW50SW5kZXgueCkgKiAwLjU7XG4gICAgICAgICAgICB5YyA9IGN1cnJlbnRJbmRleC55ICsgKG5leHRJbmRleC55IC0gY3VycmVudEluZGV4LnkpICogMC41O1xuICAgICAgICBcbiAgICAgICAgICAgIGxldCBzdHJva2VDb2xvciA9IGNjLmNvbG9yKCkuZnJvbUhFWCh0aGlzLmRlYnVnID8gJyNhOWE5YTknIDogJyNlNWU1ZTUnKTtcbiAgICAgICAgICAgIHN0cm9rZUNvbG9yLmEgPSB0aGlzLmRlYnVnID8gMjU1IDogMjU1LzI7XG4gICAgICAgICAgICBncmFwaGljcy5zdHJva2VDb2xvciA9IHN0cm9rZUNvbG9yO1xuXG4gICAgICAgICAgICBncmFwaGljcy5maWxsQ29sb3IgPSBjb2xvcjtcbiAgICAgICAgICAgIGdyYXBoaWNzLmxpbmVXaWR0aCA9IHRoaXMuZGVidWcgPyAxIDogNTtcblxuICAgICAgICAgICAgZ3JhcGhpY3MubW92ZVRvKHhjLCB5Yyk7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIC8vIERyYXcgdGhyb3VnaCBOIHBvaW50c1xuICAgICAgICAgICAgZm9yKHZhciBOID0gMDsgTiA8IG5vZGVzLmxlbmd0aDsgTisrKSB7XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgY3VycmVudEluZGV4ID0gbm9kZXNbTl07XG4gICAgICAgICAgICAgICAgbmV4dEluZGV4ID0gTiArIDEgPiBub2Rlcy5sZW5ndGggLSAxID8gbm9kZXNbTiAtIG5vZGVzLmxlbmd0aCArIDFdIDogbm9kZXNbTiArIDFdO1xuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIHhjID0gY3VycmVudEluZGV4LnggKyAobmV4dEluZGV4LnggLSBjdXJyZW50SW5kZXgueCkgKiAwLjU7XG4gICAgICAgICAgICAgICAgeWMgPSBjdXJyZW50SW5kZXgueSArIChuZXh0SW5kZXgueSAtIGN1cnJlbnRJbmRleC55KSAqIDAuNTtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIGdyYXBoaWNzLnF1YWRyYXRpY0N1cnZlVG8oY3VycmVudEluZGV4LngsIGN1cnJlbnRJbmRleC55LCB4YywgeWMpO1xuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB0aGlzLmRlYnVnID8gbnVsbCA6IGdyYXBoaWNzLmZpbGwoKTtcbiAgICAgICAgICAgIGdyYXBoaWNzLnN0cm9rZSgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICBncmFwaGljcy5saW5lV2lkdGggPSAxO1xuICAgICAgICAgICAgZ3JhcGhpY3MubGluZUNhcCA9IGNjLkdyYXBoaWNzLkxpbmVDYXAuUk9VTkQ7XG4gICAgICAgICAgICBncmFwaGljcy5saW5lSm9pbiA9IGNjLkdyYXBoaWNzLkxpbmVKb2luLlJPVU5EO1xuICAgICAgICAgICAgZ3JhcGhpY3Muc3Ryb2tlQ29sb3IuZnJvbUhFWCgnI2E5YTlhOScpO1xuICAgICAgICAgICAgZ3JhcGhpY3MuZmlsbENvbG9yLmZyb21IRVgoJyNhOWE5YTknKTtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgLy8gRHJhdyB0aHJvdWdoIE4gcG9pbnRzXG4gICAgICAgICAgICBmb3IodmFyIE4gPSAwOyBOIDwgbm9kZXMubGVuZ3RoOyBOKyspIHtcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAvLyBGaXJzdCBhbmNob3JcbiAgICAgICAgICAgICAgICBjdXJyZW50SW5kZXggPSBub2Rlc1tOXTtcbiAgICAgICAgICAgICAgICBuZXh0SW5kZXggPSBOICsgMSA+IG5vZGVzLmxlbmd0aCAtIDEgPyBub2Rlc1tOIC0gbm9kZXMubGVuZ3RoICsgMV0gOiBub2Rlc1tOICsgMV07XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgeGMgPSBjdXJyZW50SW5kZXgueCArIChuZXh0SW5kZXgueCAtIGN1cnJlbnRJbmRleC54KSAqIDAuODtcbiAgICAgICAgICAgICAgICB5YyA9IGN1cnJlbnRJbmRleC55ICsgKG5leHRJbmRleC55IC0gY3VycmVudEluZGV4LnkpICogMC44O1xuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIGdyYXBoaWNzLm1vdmVUbyh4YywgeWMpO1xuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIC8vIFNlY29uZCBhbmNob3JcbiAgICAgICAgICAgICAgICBjdXJyZW50SW5kZXggPSBuZXh0SW5kZXg7XG4gICAgICAgICAgICAgICAgbmV4dEluZGV4ID0gTiArIDIgPiBub2Rlcy5sZW5ndGggLSAxID8gbm9kZXNbTiAtIG5vZGVzLmxlbmd0aCArIDJdIDogbm9kZXNbTiArIDJdOyBcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICB4YyA9IGN1cnJlbnRJbmRleC54ICsgKG5leHRJbmRleC54IC0gY3VycmVudEluZGV4LngpICogMC4yO1xuICAgICAgICAgICAgICAgIHljID0gY3VycmVudEluZGV4LnkgKyAobmV4dEluZGV4LnkgLSBjdXJyZW50SW5kZXgueSkgKiAwLjI7XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgZ3JhcGhpY3MubGluZVRvKHhjLCB5Yyk7XG4gICAgICAgICAgICAgICAgZ3JhcGhpY3Muc3Ryb2tlKCk7XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgLy8gRmlyc3QgYW5jaG9yXG4gICAgICAgICAgICAgICAgY3VycmVudEluZGV4ID0gbm9kZXNbTl07XG4gICAgICAgICAgICAgICAgbmV4dEluZGV4ID0gTiArIDEgPiBub2Rlcy5sZW5ndGggLSAxID8gbm9kZXNbTiAtIG5vZGVzLmxlbmd0aCArIDFdIDogbm9kZXNbTiArIDFdO1xuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIHhjID0gY3VycmVudEluZGV4LnggKyAobmV4dEluZGV4LnggLSBjdXJyZW50SW5kZXgueCkgKiAwLjg7XG4gICAgICAgICAgICAgICAgeWMgPSBjdXJyZW50SW5kZXgueSArIChuZXh0SW5kZXgueSAtIGN1cnJlbnRJbmRleC55KSAqIDAuODtcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICBncmFwaGljcy5jaXJjbGUoeGMsIHljLCAyKTtcbiAgICAgICAgICAgICAgICBncmFwaGljcy5maWxsKCk7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAvLyBTZWNvbmQgYW5jaG9yXG4gICAgICAgICAgICAgICAgY3VycmVudEluZGV4ID0gbmV4dEluZGV4O1xuICAgICAgICAgICAgICAgIG5leHRJbmRleCA9IE4gKyAyID4gbm9kZXMubGVuZ3RoIC0gMSA/IG5vZGVzW04gLSBub2Rlcy5sZW5ndGggKyAyXSA6IG5vZGVzW04gKyAyXTsgXG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgeGMgPSBjdXJyZW50SW5kZXgueCArIChuZXh0SW5kZXgueCAtIGN1cnJlbnRJbmRleC54KSAqIDAuMjtcbiAgICAgICAgICAgICAgICB5YyA9IGN1cnJlbnRJbmRleC55ICsgKG5leHRJbmRleC55IC0gY3VycmVudEluZGV4LnkpICogMC4yO1xuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIGdyYXBoaWNzLmNpcmNsZSh4YywgeWMsIDIpO1xuICAgICAgICAgICAgICAgIGdyYXBoaWNzLmZpbGwoKTtcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgIH1cblxuICAgICAgICB9KTtcbiAgICAgICAgXG4gICAgICAgIGZvcih2YXIgaW5kZXggPSAwOyBpbmRleCA8IHJpcHBsZXMubGVuZ3RoOyBpbmRleCsrKSB7XG4gICAgICAgIFxuICAgICAgICAgICAgdmFyIHJpcHBsZSA9IHJpcHBsZXNbaW5kZXhdO1xuICAgICAgICAgICAgXG4gICAgICAgICAgICBsZXQgZmlsbENvbG9yID0gY2MuY29sb3IoKS5mcm9tSEVYKCcjZmZmZmZmJyk7XG4gICAgICAgICAgICBmaWxsQ29sb3IuYSA9IHJpcHBsZS5mYWRlICogMjU1O1xuICAgICAgICAgICAgZ3JhcGhpY3MuZmlsbENvbG9yID0gZmlsbENvbG9yO1xuICAgICAgICAgICAgXG4gICAgICAgICAgICBncmFwaGljcy5jaXJjbGUocmlwcGxlLngsIHJpcHBsZS55LCByaXBwbGUucmVhY3Rpdml0eSk7XG5cbiAgICAgICAgICAgIGdyYXBoaWNzLmZpbGwoKTtcbiAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBcbiAgICB9XG59KTtcbiJdfQ==