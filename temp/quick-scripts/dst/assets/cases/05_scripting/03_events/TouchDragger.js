
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/cases/05_scripting/03_events/TouchDragger.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '95021X5KjxP369OONe316sH', 'TouchDragger');
// cases/05_scripting/03_events/TouchDragger.js

"use strict";

var TouchDragger = cc.Class({
  "extends": cc.Component,
  properties: {
    propagate: {
      "default": false
    } // ...

  },
  // use this for initialization
  onLoad: function onLoad() {
    this.node.opacity = 160;
    this.node.on(cc.Node.EventType.TOUCH_START, function () {
      cc.log('Drag stated ...');
      this.opacity = 255;
    }, this.node);
    this.node.on(cc.Node.EventType.TOUCH_MOVE, function (event) {
      this.opacity = 255;
      var delta = event.touch.getDelta();
      this.x += delta.x;
      this.y += delta.y;
      if (this.getComponent(TouchDragger).propagate) event.stopPropagation();
    }, this.node);
    this.node.on(cc.Node.EventType.TOUCH_END, function () {
      this.opacity = 160;
    }, this.node);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9jYXNlcy8wNV9zY3JpcHRpbmcvMDNfZXZlbnRzL1RvdWNoRHJhZ2dlci5qcyJdLCJuYW1lcyI6WyJUb3VjaERyYWdnZXIiLCJjYyIsIkNsYXNzIiwiQ29tcG9uZW50IiwicHJvcGVydGllcyIsInByb3BhZ2F0ZSIsIm9uTG9hZCIsIm5vZGUiLCJvcGFjaXR5Iiwib24iLCJOb2RlIiwiRXZlbnRUeXBlIiwiVE9VQ0hfU1RBUlQiLCJsb2ciLCJUT1VDSF9NT1ZFIiwiZXZlbnQiLCJkZWx0YSIsInRvdWNoIiwiZ2V0RGVsdGEiLCJ4IiwieSIsImdldENvbXBvbmVudCIsInN0b3BQcm9wYWdhdGlvbiIsIlRPVUNIX0VORCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxJQUFJQSxZQUFZLEdBQUdDLEVBQUUsQ0FBQ0MsS0FBSCxDQUFTO0VBQ3hCLFdBQVNELEVBQUUsQ0FBQ0UsU0FEWTtFQUd4QkMsVUFBVSxFQUFFO0lBQ1JDLFNBQVMsRUFBRTtNQUNQLFdBQVM7SUFERixDQURILENBSVI7O0VBSlEsQ0FIWTtFQVV4QjtFQUNBQyxNQUFNLEVBQUUsa0JBQVk7SUFDaEIsS0FBS0MsSUFBTCxDQUFVQyxPQUFWLEdBQW9CLEdBQXBCO0lBQ0EsS0FBS0QsSUFBTCxDQUFVRSxFQUFWLENBQWFSLEVBQUUsQ0FBQ1MsSUFBSCxDQUFRQyxTQUFSLENBQWtCQyxXQUEvQixFQUE0QyxZQUFZO01BQ3BEWCxFQUFFLENBQUNZLEdBQUgsQ0FBTyxpQkFBUDtNQUNBLEtBQUtMLE9BQUwsR0FBZSxHQUFmO0lBQ0gsQ0FIRCxFQUdHLEtBQUtELElBSFI7SUFJQSxLQUFLQSxJQUFMLENBQVVFLEVBQVYsQ0FBYVIsRUFBRSxDQUFDUyxJQUFILENBQVFDLFNBQVIsQ0FBa0JHLFVBQS9CLEVBQTJDLFVBQVVDLEtBQVYsRUFBaUI7TUFDeEQsS0FBS1AsT0FBTCxHQUFlLEdBQWY7TUFDQSxJQUFJUSxLQUFLLEdBQUdELEtBQUssQ0FBQ0UsS0FBTixDQUFZQyxRQUFaLEVBQVo7TUFDQSxLQUFLQyxDQUFMLElBQVVILEtBQUssQ0FBQ0csQ0FBaEI7TUFDQSxLQUFLQyxDQUFMLElBQVVKLEtBQUssQ0FBQ0ksQ0FBaEI7TUFDQSxJQUFJLEtBQUtDLFlBQUwsQ0FBa0JyQixZQUFsQixFQUFnQ0ssU0FBcEMsRUFDSVUsS0FBSyxDQUFDTyxlQUFOO0lBQ1AsQ0FQRCxFQU9HLEtBQUtmLElBUFI7SUFRQSxLQUFLQSxJQUFMLENBQVVFLEVBQVYsQ0FBYVIsRUFBRSxDQUFDUyxJQUFILENBQVFDLFNBQVIsQ0FBa0JZLFNBQS9CLEVBQTBDLFlBQVk7TUFDbEQsS0FBS2YsT0FBTCxHQUFlLEdBQWY7SUFDSCxDQUZELEVBRUcsS0FBS0QsSUFGUjtFQUdIO0FBNUJ1QixDQUFULENBQW5CIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgVG91Y2hEcmFnZ2VyID0gY2MuQ2xhc3Moe1xuICAgIGV4dGVuZHM6IGNjLkNvbXBvbmVudCxcblxuICAgIHByb3BlcnRpZXM6IHtcbiAgICAgICAgcHJvcGFnYXRlOiB7XG4gICAgICAgICAgICBkZWZhdWx0OiBmYWxzZVxuICAgICAgICB9LFxuICAgICAgICAvLyAuLi5cbiAgICB9LFxuXG4gICAgLy8gdXNlIHRoaXMgZm9yIGluaXRpYWxpemF0aW9uXG4gICAgb25Mb2FkOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHRoaXMubm9kZS5vcGFjaXR5ID0gMTYwO1xuICAgICAgICB0aGlzLm5vZGUub24oY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfU1RBUlQsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIGNjLmxvZygnRHJhZyBzdGF0ZWQgLi4uJyk7XG4gICAgICAgICAgICB0aGlzLm9wYWNpdHkgPSAyNTU7XG4gICAgICAgIH0sIHRoaXMubm9kZSk7XG4gICAgICAgIHRoaXMubm9kZS5vbihjYy5Ob2RlLkV2ZW50VHlwZS5UT1VDSF9NT1ZFLCBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgICAgICAgIHRoaXMub3BhY2l0eSA9IDI1NTtcbiAgICAgICAgICAgIHZhciBkZWx0YSA9IGV2ZW50LnRvdWNoLmdldERlbHRhKCk7XG4gICAgICAgICAgICB0aGlzLnggKz0gZGVsdGEueDtcbiAgICAgICAgICAgIHRoaXMueSArPSBkZWx0YS55O1xuICAgICAgICAgICAgaWYgKHRoaXMuZ2V0Q29tcG9uZW50KFRvdWNoRHJhZ2dlcikucHJvcGFnYXRlKVxuICAgICAgICAgICAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgICB9LCB0aGlzLm5vZGUpO1xuICAgICAgICB0aGlzLm5vZGUub24oY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfRU5ELCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB0aGlzLm9wYWNpdHkgPSAxNjA7XG4gICAgICAgIH0sIHRoaXMubm9kZSk7XG4gICAgfSxcbn0pOyJdfQ==