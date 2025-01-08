
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/cases/03_gameplay/02_actions/MoveAction/MoveAction.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'ddd4eaLxVZFlZbzaPaqdL9D', 'MoveAction');
// cases/03_gameplay/02_actions/MoveAction/MoveAction.js

"use strict";

cc.Class({
  "extends": cc.Component,
  properties: {
    moveTo: cc.Node,
    moveBy: cc.Node
  },
  // use this for initialization
  onLoad: function onLoad() {
    var moveTo = cc.moveTo(0.5, cc.v2(0, 0));
    var moveBy = cc.moveBy(0.5, cc.v2(100, 100));
    this.moveTo.runAction(moveTo);
    this.moveBy.runAction(moveBy);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9jYXNlcy8wM19nYW1lcGxheS8wMl9hY3Rpb25zL01vdmVBY3Rpb24vTW92ZUFjdGlvbi5qcyJdLCJuYW1lcyI6WyJjYyIsIkNsYXNzIiwiQ29tcG9uZW50IiwicHJvcGVydGllcyIsIm1vdmVUbyIsIk5vZGUiLCJtb3ZlQnkiLCJvbkxvYWQiLCJ2MiIsInJ1bkFjdGlvbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQUEsRUFBRSxDQUFDQyxLQUFILENBQVM7RUFDTCxXQUFTRCxFQUFFLENBQUNFLFNBRFA7RUFHTEMsVUFBVSxFQUFFO0lBQ1JDLE1BQU0sRUFBRUosRUFBRSxDQUFDSyxJQURIO0lBRVJDLE1BQU0sRUFBRU4sRUFBRSxDQUFDSztFQUZILENBSFA7RUFRTDtFQUNBRSxNQUFNLEVBQUUsa0JBQVk7SUFDaEIsSUFBSUgsTUFBTSxHQUFHSixFQUFFLENBQUNJLE1BQUgsQ0FBVSxHQUFWLEVBQWVKLEVBQUUsQ0FBQ1EsRUFBSCxDQUFNLENBQU4sRUFBUyxDQUFULENBQWYsQ0FBYjtJQUNBLElBQUlGLE1BQU0sR0FBR04sRUFBRSxDQUFDTSxNQUFILENBQVUsR0FBVixFQUFlTixFQUFFLENBQUNRLEVBQUgsQ0FBTSxHQUFOLEVBQVcsR0FBWCxDQUFmLENBQWI7SUFDQSxLQUFLSixNQUFMLENBQVlLLFNBQVosQ0FBc0JMLE1BQXRCO0lBQ0EsS0FBS0UsTUFBTCxDQUFZRyxTQUFaLENBQXNCSCxNQUF0QjtFQUNIO0FBZEksQ0FBVCIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiY2MuQ2xhc3Moe1xuICAgIGV4dGVuZHM6IGNjLkNvbXBvbmVudCxcblxuICAgIHByb3BlcnRpZXM6IHtcbiAgICAgICAgbW92ZVRvOiBjYy5Ob2RlLFxuICAgICAgICBtb3ZlQnk6IGNjLk5vZGVcbiAgICB9LFxuXG4gICAgLy8gdXNlIHRoaXMgZm9yIGluaXRpYWxpemF0aW9uXG4gICAgb25Mb2FkOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBtb3ZlVG8gPSBjYy5tb3ZlVG8oMC41LCBjYy52MigwLCAwKSk7XG4gICAgICAgIHZhciBtb3ZlQnkgPSBjYy5tb3ZlQnkoMC41LCBjYy52MigxMDAsIDEwMCkpO1xuICAgICAgICB0aGlzLm1vdmVUby5ydW5BY3Rpb24obW92ZVRvKTtcbiAgICAgICAgdGhpcy5tb3ZlQnkucnVuQWN0aW9uKG1vdmVCeSk7XG4gICAgfVxufSk7XG4iXX0=