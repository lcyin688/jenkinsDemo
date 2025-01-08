
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/cases/graphics/example/rect.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '2a7cahCMIJCaZpdzIZPkHsp', 'rect');
// cases/graphics/example/rect.js

"use strict";

cc.Class({
  "extends": cc.Component,
  // use this for initialization
  onLoad: function onLoad() {
    var g = this.getComponent(cc.Graphics);
    g.lineWidth = 10;
    g.fillColor.fromHEX('#ff0000'); // rect

    g.rect(-250, 0, 200, 100); // round rect

    g.roundRect(50, 0, 200, 100, 20);
    g.stroke();
    g.fill();
  } // called every frame, uncomment this function to activate update callback
  // update: function (dt) {
  // },

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9jYXNlcy9ncmFwaGljcy9leGFtcGxlL3JlY3QuanMiXSwibmFtZXMiOlsiY2MiLCJDbGFzcyIsIkNvbXBvbmVudCIsIm9uTG9hZCIsImciLCJnZXRDb21wb25lbnQiLCJHcmFwaGljcyIsImxpbmVXaWR0aCIsImZpbGxDb2xvciIsImZyb21IRVgiLCJyZWN0Iiwicm91bmRSZWN0Iiwic3Ryb2tlIiwiZmlsbCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQUEsRUFBRSxDQUFDQyxLQUFILENBQVM7RUFDTCxXQUFTRCxFQUFFLENBQUNFLFNBRFA7RUFJTDtFQUNBQyxNQUFNLEVBQUUsa0JBQVk7SUFDaEIsSUFBSUMsQ0FBQyxHQUFHLEtBQUtDLFlBQUwsQ0FBa0JMLEVBQUUsQ0FBQ00sUUFBckIsQ0FBUjtJQUVBRixDQUFDLENBQUNHLFNBQUYsR0FBYyxFQUFkO0lBQ0FILENBQUMsQ0FBQ0ksU0FBRixDQUFZQyxPQUFaLENBQW9CLFNBQXBCLEVBSmdCLENBTWhCOztJQUNBTCxDQUFDLENBQUNNLElBQUYsQ0FBTyxDQUFDLEdBQVIsRUFBWSxDQUFaLEVBQWUsR0FBZixFQUFtQixHQUFuQixFQVBnQixDQVNoQjs7SUFDQU4sQ0FBQyxDQUFDTyxTQUFGLENBQVksRUFBWixFQUFlLENBQWYsRUFBa0IsR0FBbEIsRUFBc0IsR0FBdEIsRUFBMkIsRUFBM0I7SUFFQVAsQ0FBQyxDQUFDUSxNQUFGO0lBQ0FSLENBQUMsQ0FBQ1MsSUFBRjtFQUNILENBbkJJLENBb0JMO0VBQ0E7RUFFQTs7QUF2QkssQ0FBVCIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiY2MuQ2xhc3Moe1xuICAgIGV4dGVuZHM6IGNjLkNvbXBvbmVudCxcblxuXG4gICAgLy8gdXNlIHRoaXMgZm9yIGluaXRpYWxpemF0aW9uXG4gICAgb25Mb2FkOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBnID0gdGhpcy5nZXRDb21wb25lbnQoY2MuR3JhcGhpY3MpO1xuXG4gICAgICAgIGcubGluZVdpZHRoID0gMTA7XG4gICAgICAgIGcuZmlsbENvbG9yLmZyb21IRVgoJyNmZjAwMDAnKTtcbiAgICAgICAgXG4gICAgICAgIC8vIHJlY3RcbiAgICAgICAgZy5yZWN0KC0yNTAsMCwgMjAwLDEwMCk7XG5cbiAgICAgICAgLy8gcm91bmQgcmVjdFxuICAgICAgICBnLnJvdW5kUmVjdCg1MCwwLCAyMDAsMTAwLCAyMCk7XG5cbiAgICAgICAgZy5zdHJva2UoKTtcbiAgICAgICAgZy5maWxsKCk7XG4gICAgfSxcbiAgICAvLyBjYWxsZWQgZXZlcnkgZnJhbWUsIHVuY29tbWVudCB0aGlzIGZ1bmN0aW9uIHRvIGFjdGl2YXRlIHVwZGF0ZSBjYWxsYmFja1xuICAgIC8vIHVwZGF0ZTogZnVuY3Rpb24gKGR0KSB7XG5cbiAgICAvLyB9LFxufSk7XG4iXX0=