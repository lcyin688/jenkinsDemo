
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/cases/graphics/example/lineTo.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '3ed7bVI5mxF+I75PHb0k24q', 'lineTo');
// cases/graphics/example/lineTo.js

"use strict";

cc.Class({
  "extends": cc.Component,
  // use this for initialization
  onLoad: function onLoad() {
    var g = this.getComponent(cc.Graphics);
    g.lineWidth = 10;
    g.fillColor.fromHEX('#ff0000');
    g.moveTo(-20, 0);
    g.lineTo(0, -100);
    g.lineTo(20, 0);
    g.lineTo(0, 100);
    g.close();
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9jYXNlcy9ncmFwaGljcy9leGFtcGxlL2xpbmVUby5qcyJdLCJuYW1lcyI6WyJjYyIsIkNsYXNzIiwiQ29tcG9uZW50Iiwib25Mb2FkIiwiZyIsImdldENvbXBvbmVudCIsIkdyYXBoaWNzIiwibGluZVdpZHRoIiwiZmlsbENvbG9yIiwiZnJvbUhFWCIsIm1vdmVUbyIsImxpbmVUbyIsImNsb3NlIiwic3Ryb2tlIiwiZmlsbCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQUEsRUFBRSxDQUFDQyxLQUFILENBQVM7RUFDTCxXQUFTRCxFQUFFLENBQUNFLFNBRFA7RUFHTDtFQUNBQyxNQUFNLEVBQUUsa0JBQVk7SUFDaEIsSUFBSUMsQ0FBQyxHQUFHLEtBQUtDLFlBQUwsQ0FBa0JMLEVBQUUsQ0FBQ00sUUFBckIsQ0FBUjtJQUVBRixDQUFDLENBQUNHLFNBQUYsR0FBYyxFQUFkO0lBQ0FILENBQUMsQ0FBQ0ksU0FBRixDQUFZQyxPQUFaLENBQW9CLFNBQXBCO0lBRUFMLENBQUMsQ0FBQ00sTUFBRixDQUFTLENBQUMsRUFBVixFQUFjLENBQWQ7SUFDQU4sQ0FBQyxDQUFDTyxNQUFGLENBQVMsQ0FBVCxFQUFZLENBQUMsR0FBYjtJQUNBUCxDQUFDLENBQUNPLE1BQUYsQ0FBUyxFQUFULEVBQWEsQ0FBYjtJQUNBUCxDQUFDLENBQUNPLE1BQUYsQ0FBUyxDQUFULEVBQVksR0FBWjtJQUNBUCxDQUFDLENBQUNRLEtBQUY7SUFFQVIsQ0FBQyxDQUFDUyxNQUFGO0lBQ0FULENBQUMsQ0FBQ1UsSUFBRjtFQUNILENBbEJJLENBbUJMO0VBQ0E7RUFFQTs7QUF0QkssQ0FBVCIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiY2MuQ2xhc3Moe1xuICAgIGV4dGVuZHM6IGNjLkNvbXBvbmVudCxcblxuICAgIC8vIHVzZSB0aGlzIGZvciBpbml0aWFsaXphdGlvblxuICAgIG9uTG9hZDogZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgZyA9IHRoaXMuZ2V0Q29tcG9uZW50KGNjLkdyYXBoaWNzKTtcblxuICAgICAgICBnLmxpbmVXaWR0aCA9IDEwO1xuICAgICAgICBnLmZpbGxDb2xvci5mcm9tSEVYKCcjZmYwMDAwJyk7XG4gICAgICAgIFxuICAgICAgICBnLm1vdmVUbygtMjAsIDApO1xuICAgICAgICBnLmxpbmVUbygwLCAtMTAwKTtcbiAgICAgICAgZy5saW5lVG8oMjAsIDApO1xuICAgICAgICBnLmxpbmVUbygwLCAxMDApO1xuICAgICAgICBnLmNsb3NlKCk7XG5cbiAgICAgICAgZy5zdHJva2UoKTtcbiAgICAgICAgZy5maWxsKCk7XG4gICAgfSxcbiAgICAvLyBjYWxsZWQgZXZlcnkgZnJhbWUsIHVuY29tbWVudCB0aGlzIGZ1bmN0aW9uIHRvIGFjdGl2YXRlIHVwZGF0ZSBjYWxsYmFja1xuICAgIC8vIHVwZGF0ZTogZnVuY3Rpb24gKGR0KSB7XG5cbiAgICAvLyB9LFxufSk7XG4iXX0=