
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/cases/05_scripting/05_destroy_self/DestroySelf.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'c07302m/oFJeIq2igPCJbWE', 'DestroySelf');
// cases/05_scripting/05_destroy_self/DestroySelf.js

"use strict";

cc.Class({
  "extends": cc.Component,
  // use this for initialization
  onLoad: function onLoad() {
    console.log("Pos: " + this.node.getPosition().x + ", " + this.node.getPosition().y);
    this.node.runAction(cc.sequence(cc.moveBy(2, 200, 0), cc.callFunc(function () {
      console.log("Pos: " + this.node.x + ", " + this.node.y);
      this.node.destroy();
    }, this)));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9jYXNlcy8wNV9zY3JpcHRpbmcvMDVfZGVzdHJveV9zZWxmL0Rlc3Ryb3lTZWxmLmpzIl0sIm5hbWVzIjpbImNjIiwiQ2xhc3MiLCJDb21wb25lbnQiLCJvbkxvYWQiLCJjb25zb2xlIiwibG9nIiwibm9kZSIsImdldFBvc2l0aW9uIiwieCIsInkiLCJydW5BY3Rpb24iLCJzZXF1ZW5jZSIsIm1vdmVCeSIsImNhbGxGdW5jIiwiZGVzdHJveSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQUEsRUFBRSxDQUFDQyxLQUFILENBQVM7RUFDTCxXQUFTRCxFQUFFLENBQUNFLFNBRFA7RUFHTDtFQUNBQyxNQUFNLEVBQUUsa0JBQVk7SUFDaEJDLE9BQU8sQ0FBQ0MsR0FBUixDQUFZLFVBQVUsS0FBS0MsSUFBTCxDQUFVQyxXQUFWLEdBQXdCQyxDQUFsQyxHQUFzQyxJQUF0QyxHQUE2QyxLQUFLRixJQUFMLENBQVVDLFdBQVYsR0FBd0JFLENBQWpGO0lBQ0EsS0FBS0gsSUFBTCxDQUFVSSxTQUFWLENBQW9CVixFQUFFLENBQUNXLFFBQUgsQ0FBWVgsRUFBRSxDQUFDWSxNQUFILENBQVUsQ0FBVixFQUFhLEdBQWIsRUFBa0IsQ0FBbEIsQ0FBWixFQUFrQ1osRUFBRSxDQUFDYSxRQUFILENBQVksWUFBWTtNQUMxRVQsT0FBTyxDQUFDQyxHQUFSLENBQVksVUFBVSxLQUFLQyxJQUFMLENBQVVFLENBQXBCLEdBQXdCLElBQXhCLEdBQStCLEtBQUtGLElBQUwsQ0FBVUcsQ0FBckQ7TUFDQSxLQUFLSCxJQUFMLENBQVVRLE9BQVY7SUFDSCxDQUhxRCxFQUduRCxJQUhtRCxDQUFsQyxDQUFwQjtFQUlIO0FBVkksQ0FBVCIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiY2MuQ2xhc3Moe1xuICAgIGV4dGVuZHM6IGNjLkNvbXBvbmVudCxcblxuICAgIC8vIHVzZSB0aGlzIGZvciBpbml0aWFsaXphdGlvblxuICAgIG9uTG9hZDogZnVuY3Rpb24gKCkge1xuICAgICAgICBjb25zb2xlLmxvZyhcIlBvczogXCIgKyB0aGlzLm5vZGUuZ2V0UG9zaXRpb24oKS54ICsgXCIsIFwiICsgdGhpcy5ub2RlLmdldFBvc2l0aW9uKCkueSk7XG4gICAgICAgIHRoaXMubm9kZS5ydW5BY3Rpb24oY2Muc2VxdWVuY2UoY2MubW92ZUJ5KDIsIDIwMCwgMCksIGNjLmNhbGxGdW5jKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiUG9zOiBcIiArIHRoaXMubm9kZS54ICsgXCIsIFwiICsgdGhpcy5ub2RlLnkpO1xuICAgICAgICAgICAgdGhpcy5ub2RlLmRlc3Ryb3koKTtcbiAgICAgICAgfSwgdGhpcykpKTtcbiAgICB9LFxufSk7XG4iXX0=