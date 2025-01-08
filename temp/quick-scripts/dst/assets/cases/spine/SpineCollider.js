
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/cases/spine/SpineCollider.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '318b3Y0citJN6RZS4dOnAn0', 'SpineCollider');
// cases/spine/SpineCollider.js

"use strict";

cc.Class({
  "extends": cc.Component,
  properties: {},
  start: function start() {
    this.collisionManager = cc.director.getCollisionManager();
    this.collisionManager.enabled = true;
    this.collisionManager.enabledDebugDraw = false;
    cc.director.once(cc.Director.EVENT_AFTER_DRAW, function () {
      this.collisionManager.enabledDebugDraw = true;
    }.bind(this));
    this.stayCount = 0;
  },
  onDestroy: function onDestroy() {
    this.collisionManager.enabledDebugDraw = false;
  },
  onCollisionEnter: function onCollisionEnter(other, self) {
    // console.log('on collision enter',other.node.name, self.node.name);
    this.stayCount++;
  },
  onCollisionExit: function onCollisionExit(other, self) {
    // console.log('on collision exit', other.node.name, self.node.name);
    this.stayCount--;
  },
  update: function update() {
    if (this.stayCount > 0) {
      this.node.color = cc.color(0, 200, 200);
    } else {
      this.node.color = cc.color(255, 255, 255);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9jYXNlcy9zcGluZS9TcGluZUNvbGxpZGVyLmpzIl0sIm5hbWVzIjpbImNjIiwiQ2xhc3MiLCJDb21wb25lbnQiLCJwcm9wZXJ0aWVzIiwic3RhcnQiLCJjb2xsaXNpb25NYW5hZ2VyIiwiZGlyZWN0b3IiLCJnZXRDb2xsaXNpb25NYW5hZ2VyIiwiZW5hYmxlZCIsImVuYWJsZWREZWJ1Z0RyYXciLCJvbmNlIiwiRGlyZWN0b3IiLCJFVkVOVF9BRlRFUl9EUkFXIiwiYmluZCIsInN0YXlDb3VudCIsIm9uRGVzdHJveSIsIm9uQ29sbGlzaW9uRW50ZXIiLCJvdGhlciIsInNlbGYiLCJvbkNvbGxpc2lvbkV4aXQiLCJ1cGRhdGUiLCJub2RlIiwiY29sb3IiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUFBLEVBQUUsQ0FBQ0MsS0FBSCxDQUFTO0VBQ0wsV0FBU0QsRUFBRSxDQUFDRSxTQURQO0VBR0xDLFVBQVUsRUFBRSxFQUhQO0VBT0xDLEtBUEssbUJBT0k7SUFDTCxLQUFLQyxnQkFBTCxHQUF3QkwsRUFBRSxDQUFDTSxRQUFILENBQVlDLG1CQUFaLEVBQXhCO0lBQ0EsS0FBS0YsZ0JBQUwsQ0FBc0JHLE9BQXRCLEdBQWdDLElBQWhDO0lBQ0EsS0FBS0gsZ0JBQUwsQ0FBc0JJLGdCQUF0QixHQUF5QyxLQUF6QztJQUNBVCxFQUFFLENBQUNNLFFBQUgsQ0FBWUksSUFBWixDQUFpQlYsRUFBRSxDQUFDVyxRQUFILENBQVlDLGdCQUE3QixFQUErQyxZQUFZO01BQ3ZELEtBQUtQLGdCQUFMLENBQXNCSSxnQkFBdEIsR0FBeUMsSUFBekM7SUFDSCxDQUY4QyxDQUU3Q0ksSUFGNkMsQ0FFeEMsSUFGd0MsQ0FBL0M7SUFHQSxLQUFLQyxTQUFMLEdBQWlCLENBQWpCO0VBQ0gsQ0FmSTtFQWlCTEMsU0FqQkssdUJBaUJRO0lBQ1QsS0FBS1YsZ0JBQUwsQ0FBc0JJLGdCQUF0QixHQUF5QyxLQUF6QztFQUNILENBbkJJO0VBcUJMTyxnQkFyQkssNEJBcUJhQyxLQXJCYixFQXFCb0JDLElBckJwQixFQXFCMEI7SUFDM0I7SUFDQSxLQUFLSixTQUFMO0VBQ0gsQ0F4Qkk7RUEwQkxLLGVBMUJLLDJCQTBCWUYsS0ExQlosRUEwQm1CQyxJQTFCbkIsRUEwQnlCO0lBQzFCO0lBQ0EsS0FBS0osU0FBTDtFQUNILENBN0JJO0VBK0JMTSxNQS9CSyxvQkErQks7SUFDTixJQUFJLEtBQUtOLFNBQUwsR0FBaUIsQ0FBckIsRUFBd0I7TUFDcEIsS0FBS08sSUFBTCxDQUFVQyxLQUFWLEdBQWtCdEIsRUFBRSxDQUFDc0IsS0FBSCxDQUFTLENBQVQsRUFBWSxHQUFaLEVBQWlCLEdBQWpCLENBQWxCO0lBQ0gsQ0FGRCxNQUVPO01BQ0gsS0FBS0QsSUFBTCxDQUFVQyxLQUFWLEdBQWtCdEIsRUFBRSxDQUFDc0IsS0FBSCxDQUFTLEdBQVQsRUFBYyxHQUFkLEVBQW1CLEdBQW5CLENBQWxCO0lBQ0g7RUFDSjtBQXJDSSxDQUFUIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJjYy5DbGFzcyh7XG4gICAgZXh0ZW5kczogY2MuQ29tcG9uZW50LFxuXG4gICAgcHJvcGVydGllczoge1xuICAgICAgICBcbiAgICB9LFxuXG4gICAgc3RhcnQgKCkge1xuICAgICAgICB0aGlzLmNvbGxpc2lvbk1hbmFnZXIgPSBjYy5kaXJlY3Rvci5nZXRDb2xsaXNpb25NYW5hZ2VyKCk7XG4gICAgICAgIHRoaXMuY29sbGlzaW9uTWFuYWdlci5lbmFibGVkID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5jb2xsaXNpb25NYW5hZ2VyLmVuYWJsZWREZWJ1Z0RyYXcgPSBmYWxzZTtcbiAgICAgICAgY2MuZGlyZWN0b3Iub25jZShjYy5EaXJlY3Rvci5FVkVOVF9BRlRFUl9EUkFXLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB0aGlzLmNvbGxpc2lvbk1hbmFnZXIuZW5hYmxlZERlYnVnRHJhdyA9IHRydWU7XG4gICAgICAgIH0uYmluZCh0aGlzKSk7XG4gICAgICAgIHRoaXMuc3RheUNvdW50ID0gMDtcbiAgICB9LFxuXG4gICAgb25EZXN0cm95ICgpIHtcbiAgICAgICAgdGhpcy5jb2xsaXNpb25NYW5hZ2VyLmVuYWJsZWREZWJ1Z0RyYXcgPSBmYWxzZTtcbiAgICB9LFxuXG4gICAgb25Db2xsaXNpb25FbnRlciAob3RoZXIsIHNlbGYpIHtcbiAgICAgICAgLy8gY29uc29sZS5sb2coJ29uIGNvbGxpc2lvbiBlbnRlcicsb3RoZXIubm9kZS5uYW1lLCBzZWxmLm5vZGUubmFtZSk7XG4gICAgICAgIHRoaXMuc3RheUNvdW50Kys7XG4gICAgfSxcblxuICAgIG9uQ29sbGlzaW9uRXhpdCAob3RoZXIsIHNlbGYpIHtcbiAgICAgICAgLy8gY29uc29sZS5sb2coJ29uIGNvbGxpc2lvbiBleGl0Jywgb3RoZXIubm9kZS5uYW1lLCBzZWxmLm5vZGUubmFtZSk7XG4gICAgICAgIHRoaXMuc3RheUNvdW50LS07XG4gICAgfSxcblxuICAgIHVwZGF0ZSAoKSB7XG4gICAgICAgIGlmICh0aGlzLnN0YXlDb3VudCA+IDApIHtcbiAgICAgICAgICAgIHRoaXMubm9kZS5jb2xvciA9IGNjLmNvbG9yKDAsIDIwMCwgMjAwKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMubm9kZS5jb2xvciA9IGNjLmNvbG9yKDI1NSwgMjU1LCAyNTUpO1xuICAgICAgICB9XG4gICAgfVxufSk7XG4iXX0=