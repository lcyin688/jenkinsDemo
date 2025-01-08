
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/cases/graphics/example/ellipse.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'c7e65GQDltH+6fpuWTVubaZ', 'ellipse');
// cases/graphics/example/ellipse.js

"use strict";

cc.Class({
  "extends": cc.Component,
  // use this for initialization
  onLoad: function onLoad() {
    var g = this.getComponent(cc.Graphics);
    g.lineWidth = 10;
    g.fillColor.fromHEX('#ff0000');
    g.circle(150, 0, 100);
    g.ellipse(-150, 0, 100, 70);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9jYXNlcy9ncmFwaGljcy9leGFtcGxlL2VsbGlwc2UuanMiXSwibmFtZXMiOlsiY2MiLCJDbGFzcyIsIkNvbXBvbmVudCIsIm9uTG9hZCIsImciLCJnZXRDb21wb25lbnQiLCJHcmFwaGljcyIsImxpbmVXaWR0aCIsImZpbGxDb2xvciIsImZyb21IRVgiLCJjaXJjbGUiLCJlbGxpcHNlIiwic3Ryb2tlIiwiZmlsbCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQUEsRUFBRSxDQUFDQyxLQUFILENBQVM7RUFDTCxXQUFTRCxFQUFFLENBQUNFLFNBRFA7RUFHTDtFQUNBQyxNQUFNLEVBQUUsa0JBQVk7SUFDaEIsSUFBSUMsQ0FBQyxHQUFHLEtBQUtDLFlBQUwsQ0FBa0JMLEVBQUUsQ0FBQ00sUUFBckIsQ0FBUjtJQUVBRixDQUFDLENBQUNHLFNBQUYsR0FBYyxFQUFkO0lBQ0FILENBQUMsQ0FBQ0ksU0FBRixDQUFZQyxPQUFaLENBQW9CLFNBQXBCO0lBRUFMLENBQUMsQ0FBQ00sTUFBRixDQUFTLEdBQVQsRUFBYSxDQUFiLEVBQWdCLEdBQWhCO0lBRUFOLENBQUMsQ0FBQ08sT0FBRixDQUFVLENBQUMsR0FBWCxFQUFlLENBQWYsRUFBa0IsR0FBbEIsRUFBc0IsRUFBdEI7SUFFQVAsQ0FBQyxDQUFDUSxNQUFGO0lBQ0FSLENBQUMsQ0FBQ1MsSUFBRjtFQUNILENBaEJJLENBaUJMO0VBQ0E7RUFFQTs7QUFwQkssQ0FBVCIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiY2MuQ2xhc3Moe1xuICAgIGV4dGVuZHM6IGNjLkNvbXBvbmVudCxcblxuICAgIC8vIHVzZSB0aGlzIGZvciBpbml0aWFsaXphdGlvblxuICAgIG9uTG9hZDogZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgZyA9IHRoaXMuZ2V0Q29tcG9uZW50KGNjLkdyYXBoaWNzKTtcblxuICAgICAgICBnLmxpbmVXaWR0aCA9IDEwO1xuICAgICAgICBnLmZpbGxDb2xvci5mcm9tSEVYKCcjZmYwMDAwJyk7XG5cbiAgICAgICAgZy5jaXJjbGUoMTUwLDAsIDEwMCk7XG4gICAgICAgIFxuICAgICAgICBnLmVsbGlwc2UoLTE1MCwwLCAxMDAsNzApO1xuXG4gICAgICAgIGcuc3Ryb2tlKCk7XG4gICAgICAgIGcuZmlsbCgpO1xuICAgIH0sXG4gICAgLy8gY2FsbGVkIGV2ZXJ5IGZyYW1lLCB1bmNvbW1lbnQgdGhpcyBmdW5jdGlvbiB0byBhY3RpdmF0ZSB1cGRhdGUgY2FsbGJhY2tcbiAgICAvLyB1cGRhdGU6IGZ1bmN0aW9uIChkdCkge1xuXG4gICAgLy8gfSxcbn0pO1xuIl19