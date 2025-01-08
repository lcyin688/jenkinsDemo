
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/cases/05_scripting/03_events/ActionCallback.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '2881e6K1edLBbgvc+6/YN7o', 'ActionCallback');
// cases/05_scripting/03_events/ActionCallback.js

"use strict";

cc.Class({
  "extends": cc.Component,
  // use this for initialization
  onLoad: function onLoad() {
    var touchEvent = this.getComponent('TouchEvent');
    var mouseEvent = this.getComponent('MouseEvent');
    var event = touchEvent || mouseEvent;

    event._callback = function () {
      this.node.runAction(cc.sequence(cc.scaleTo(0.5, 2, 1), cc.scaleTo(0.25, 1, 1)));
    };
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9jYXNlcy8wNV9zY3JpcHRpbmcvMDNfZXZlbnRzL0FjdGlvbkNhbGxiYWNrLmpzIl0sIm5hbWVzIjpbImNjIiwiQ2xhc3MiLCJDb21wb25lbnQiLCJvbkxvYWQiLCJ0b3VjaEV2ZW50IiwiZ2V0Q29tcG9uZW50IiwibW91c2VFdmVudCIsImV2ZW50IiwiX2NhbGxiYWNrIiwibm9kZSIsInJ1bkFjdGlvbiIsInNlcXVlbmNlIiwic2NhbGVUbyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQUEsRUFBRSxDQUFDQyxLQUFILENBQVM7RUFDTCxXQUFTRCxFQUFFLENBQUNFLFNBRFA7RUFHTDtFQUNBQyxNQUFNLEVBQUUsa0JBQVk7SUFDaEIsSUFBSUMsVUFBVSxHQUFHLEtBQUtDLFlBQUwsQ0FBa0IsWUFBbEIsQ0FBakI7SUFDQSxJQUFJQyxVQUFVLEdBQUcsS0FBS0QsWUFBTCxDQUFrQixZQUFsQixDQUFqQjtJQUNBLElBQUlFLEtBQUssR0FBR0gsVUFBVSxJQUFJRSxVQUExQjs7SUFDQUMsS0FBSyxDQUFDQyxTQUFOLEdBQWtCLFlBQVk7TUFDMUIsS0FBS0MsSUFBTCxDQUFVQyxTQUFWLENBQW9CVixFQUFFLENBQUNXLFFBQUgsQ0FDaEJYLEVBQUUsQ0FBQ1ksT0FBSCxDQUFXLEdBQVgsRUFBZ0IsQ0FBaEIsRUFBbUIsQ0FBbkIsQ0FEZ0IsRUFFaEJaLEVBQUUsQ0FBQ1ksT0FBSCxDQUFXLElBQVgsRUFBaUIsQ0FBakIsRUFBb0IsQ0FBcEIsQ0FGZ0IsQ0FBcEI7SUFJSCxDQUxEO0VBTUg7QUFkSSxDQUFUIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJjYy5DbGFzcyh7XG4gICAgZXh0ZW5kczogY2MuQ29tcG9uZW50LFxuXG4gICAgLy8gdXNlIHRoaXMgZm9yIGluaXRpYWxpemF0aW9uXG4gICAgb25Mb2FkOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciB0b3VjaEV2ZW50ID0gdGhpcy5nZXRDb21wb25lbnQoJ1RvdWNoRXZlbnQnKTtcbiAgICAgICAgdmFyIG1vdXNlRXZlbnQgPSB0aGlzLmdldENvbXBvbmVudCgnTW91c2VFdmVudCcpO1xuICAgICAgICB2YXIgZXZlbnQgPSB0b3VjaEV2ZW50IHx8IG1vdXNlRXZlbnQ7XG4gICAgICAgIGV2ZW50Ll9jYWxsYmFjayA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHRoaXMubm9kZS5ydW5BY3Rpb24oY2Muc2VxdWVuY2UoXG4gICAgICAgICAgICAgICAgY2Muc2NhbGVUbygwLjUsIDIsIDEpLFxuICAgICAgICAgICAgICAgIGNjLnNjYWxlVG8oMC4yNSwgMSwgMSlcbiAgICAgICAgICAgICkpO1xuICAgICAgICB9XG4gICAgfSxcbn0pOyJdfQ==