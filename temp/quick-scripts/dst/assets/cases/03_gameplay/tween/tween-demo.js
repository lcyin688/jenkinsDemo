
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/cases/03_gameplay/tween/tween-demo.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '1ad8dW61zxGsrp51I5maibs', 'tween-demo');
// cases/03_gameplay/tween/tween-demo.js

"use strict";

var t = cc.tween;
cc.Class({
  "extends": cc.Component,
  properties: {
    nodes: [cc.Node]
  },
  start: function start() {
    var nodes = this.nodes;

    for (var i = 0; i < nodes.length; i++) {
      var node = nodes[i];
      t(node) // The defference delay should only eval once
      .delay(0.5 + i * 0.2) // repeat 1000 times
      .repeat(1000, t() // first reset node properties
      .set({
        opacity: 0,
        scale: 10,
        x: 0,
        rotation: 0
      }) // parallel exec tween
      .parallel(t().to(1, {
        opacity: 255,
        scale: 1
      }, {
        easing: 'quintInOut'
      }), t().to(2.5, {
        x: node.x
      }, {
        easing: 'backOut'
      })).delay(0.5).to(0.8, {
        rotation: 360
      }, {
        easing: 'cubicInOut'
      }).delay(1).to(0.3, {
        opacity: 0,
        scale: 3
      }, {
        easing: "quintIn"
      }).delay(1)).start();
    }
  } // update (dt) {},

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9jYXNlcy8wM19nYW1lcGxheS90d2Vlbi90d2Vlbi1kZW1vLmpzIl0sIm5hbWVzIjpbInQiLCJjYyIsInR3ZWVuIiwiQ2xhc3MiLCJDb21wb25lbnQiLCJwcm9wZXJ0aWVzIiwibm9kZXMiLCJOb2RlIiwic3RhcnQiLCJpIiwibGVuZ3RoIiwibm9kZSIsImRlbGF5IiwicmVwZWF0Iiwic2V0Iiwib3BhY2l0eSIsInNjYWxlIiwieCIsInJvdGF0aW9uIiwicGFyYWxsZWwiLCJ0byIsImVhc2luZyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxJQUFNQSxDQUFDLEdBQUdDLEVBQUUsQ0FBQ0MsS0FBYjtBQUVBRCxFQUFFLENBQUNFLEtBQUgsQ0FBUztFQUNQLFdBQVNGLEVBQUUsQ0FBQ0csU0FETDtFQUdQQyxVQUFVLEVBQUU7SUFDVkMsS0FBSyxFQUFFLENBQUNMLEVBQUUsQ0FBQ00sSUFBSjtFQURHLENBSEw7RUFPUEMsS0FQTyxtQkFPRTtJQUNQLElBQUlGLEtBQUssR0FBRyxLQUFLQSxLQUFqQjs7SUFDQSxLQUFLLElBQUlHLENBQUMsR0FBRyxDQUFiLEVBQWdCQSxDQUFDLEdBQUdILEtBQUssQ0FBQ0ksTUFBMUIsRUFBa0NELENBQUMsRUFBbkMsRUFBdUM7TUFDckMsSUFBSUUsSUFBSSxHQUFHTCxLQUFLLENBQUNHLENBQUQsQ0FBaEI7TUFDQVQsQ0FBQyxDQUFDVyxJQUFELENBQUQsQ0FDRTtNQURGLENBRUdDLEtBRkgsQ0FFUyxNQUFNSCxDQUFDLEdBQUcsR0FGbkIsRUFHRTtNQUhGLENBSUdJLE1BSkgsQ0FJVSxJQUpWLEVBS0liLENBQUMsR0FDQztNQURELENBRUVjLEdBRkgsQ0FFTztRQUFFQyxPQUFPLEVBQUUsQ0FBWDtRQUFjQyxLQUFLLEVBQUUsRUFBckI7UUFBeUJDLENBQUMsRUFBRSxDQUE1QjtRQUErQkMsUUFBUSxFQUFFO01BQXpDLENBRlAsRUFHRTtNQUhGLENBSUdDLFFBSkgsQ0FLSW5CLENBQUMsR0FBR29CLEVBQUosQ0FBTyxDQUFQLEVBQVU7UUFBRUwsT0FBTyxFQUFFLEdBQVg7UUFBZ0JDLEtBQUssRUFBRTtNQUF2QixDQUFWLEVBQXNDO1FBQUVLLE1BQU0sRUFBRTtNQUFWLENBQXRDLENBTEosRUFNSXJCLENBQUMsR0FBR29CLEVBQUosQ0FBTyxHQUFQLEVBQVk7UUFBRUgsQ0FBQyxFQUFFTixJQUFJLENBQUNNO01BQVYsQ0FBWixFQUEyQjtRQUFFSSxNQUFNLEVBQUU7TUFBVixDQUEzQixDQU5KLEVBUUdULEtBUkgsQ0FRUyxHQVJULEVBU0dRLEVBVEgsQ0FTTSxHQVROLEVBU1c7UUFBRUYsUUFBUSxFQUFFO01BQVosQ0FUWCxFQVM4QjtRQUFFRyxNQUFNLEVBQUU7TUFBVixDQVQ5QixFQVVHVCxLQVZILENBVVMsQ0FWVCxFQVdHUSxFQVhILENBV00sR0FYTixFQVdXO1FBQUVMLE9BQU8sRUFBRSxDQUFYO1FBQWNDLEtBQUssRUFBRTtNQUFyQixDQVhYLEVBV3FDO1FBQUVLLE1BQU0sRUFBRTtNQUFWLENBWHJDLEVBWUdULEtBWkgsQ0FZUyxDQVpULENBTEosRUFtQkdKLEtBbkJIO0lBb0JEO0VBQ0YsQ0FoQ00sQ0FrQ1A7O0FBbENPLENBQVQiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IHQgPSBjYy50d2VlbjtcblxuY2MuQ2xhc3Moe1xuICBleHRlbmRzOiBjYy5Db21wb25lbnQsXG5cbiAgcHJvcGVydGllczoge1xuICAgIG5vZGVzOiBbY2MuTm9kZV1cbiAgfSxcblxuICBzdGFydCAoKSB7XG4gICAgbGV0IG5vZGVzID0gdGhpcy5ub2RlcztcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IG5vZGVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICBsZXQgbm9kZSA9IG5vZGVzW2ldO1xuICAgICAgdChub2RlKVxuICAgICAgICAvLyBUaGUgZGVmZmVyZW5jZSBkZWxheSBzaG91bGQgb25seSBldmFsIG9uY2VcbiAgICAgICAgLmRlbGF5KDAuNSArIGkgKiAwLjIpXG4gICAgICAgIC8vIHJlcGVhdCAxMDAwIHRpbWVzXG4gICAgICAgIC5yZXBlYXQoMTAwMCxcbiAgICAgICAgICB0KClcbiAgICAgICAgICAgIC8vIGZpcnN0IHJlc2V0IG5vZGUgcHJvcGVydGllc1xuICAgICAgICAgICAgLnNldCh7IG9wYWNpdHk6IDAsIHNjYWxlOiAxMCwgeDogMCwgcm90YXRpb246IDAgfSlcbiAgICAgICAgICAgIC8vIHBhcmFsbGVsIGV4ZWMgdHdlZW5cbiAgICAgICAgICAgIC5wYXJhbGxlbChcbiAgICAgICAgICAgICAgdCgpLnRvKDEsIHsgb3BhY2l0eTogMjU1LCBzY2FsZTogMSB9LCB7IGVhc2luZzogJ3F1aW50SW5PdXQnIH0pLFxuICAgICAgICAgICAgICB0KCkudG8oMi41LCB7IHg6IG5vZGUueCB9LCB7IGVhc2luZzogJ2JhY2tPdXQnIH0pXG4gICAgICAgICAgICApXG4gICAgICAgICAgICAuZGVsYXkoMC41KVxuICAgICAgICAgICAgLnRvKDAuOCwgeyByb3RhdGlvbjogMzYwIH0sIHsgZWFzaW5nOiAnY3ViaWNJbk91dCcgfSlcbiAgICAgICAgICAgIC5kZWxheSgxKVxuICAgICAgICAgICAgLnRvKDAuMywgeyBvcGFjaXR5OiAwLCBzY2FsZTogMyB9LCB7IGVhc2luZzogXCJxdWludEluXCIgfSlcbiAgICAgICAgICAgIC5kZWxheSgxKVxuICAgICAgICApXG4gICAgICAgIC5zdGFydCgpXG4gICAgfVxuICB9LFxuXG4gIC8vIHVwZGF0ZSAoZHQpIHt9LFxufSk7XG4iXX0=