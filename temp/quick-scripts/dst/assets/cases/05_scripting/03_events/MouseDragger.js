
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/cases/05_scripting/03_events/MouseDragger.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '2412ev9NSRMeI28JHH2OS8r', 'MouseDragger');
// cases/05_scripting/03_events/MouseDragger.js

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
    this._down = false;
    this.node.opacity = 160;
    this.node.on(cc.Node.EventType.MOUSE_DOWN, function (event) {
      cc.log('Drag stated ...');
      this.node.opacity = 255;
      this._down = true;
      if (!this.propagate) event.stopPropagation();
    }, this);
    this.node.on(cc.Node.EventType.MOUSE_MOVE, function (event) {
      if (!this._down) {
        event.stopPropagation();
        return;
      }

      this.node.opacity = 255;
      var delta = event.getDelta();
      this.node.x += delta.x;
      this.node.y += delta.y;
      if (!this.propagate) event.stopPropagation();
    }, this);
    this.node.on(cc.Node.EventType.MOUSE_LEAVE, function (event) {
      if (!this._down) {
        event.stopPropagation();
        return;
      }

      this.node.opacity = 160;
      cc.log('Drag leave ...');
      this._down = false;
    }, this);
    this.node.on(cc.Node.EventType.MOUSE_UP, function (event) {
      if (!this._down) {
        event.stopPropagation();
        return;
      }

      cc.log('Drag done ...');
      this.node.opacity = 160;
      this._down = false;
    }, this);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9jYXNlcy8wNV9zY3JpcHRpbmcvMDNfZXZlbnRzL01vdXNlRHJhZ2dlci5qcyJdLCJuYW1lcyI6WyJUb3VjaERyYWdnZXIiLCJjYyIsIkNsYXNzIiwiQ29tcG9uZW50IiwicHJvcGVydGllcyIsInByb3BhZ2F0ZSIsIm9uTG9hZCIsIl9kb3duIiwibm9kZSIsIm9wYWNpdHkiLCJvbiIsIk5vZGUiLCJFdmVudFR5cGUiLCJNT1VTRV9ET1dOIiwiZXZlbnQiLCJsb2ciLCJzdG9wUHJvcGFnYXRpb24iLCJNT1VTRV9NT1ZFIiwiZGVsdGEiLCJnZXREZWx0YSIsIngiLCJ5IiwiTU9VU0VfTEVBVkUiLCJNT1VTRV9VUCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxJQUFJQSxZQUFZLEdBQUdDLEVBQUUsQ0FBQ0MsS0FBSCxDQUFTO0VBQ3hCLFdBQVNELEVBQUUsQ0FBQ0UsU0FEWTtFQUd4QkMsVUFBVSxFQUFFO0lBQ1JDLFNBQVMsRUFBRTtNQUNQLFdBQVM7SUFERixDQURILENBSVI7O0VBSlEsQ0FIWTtFQVV4QjtFQUNBQyxNQUFNLEVBQUUsa0JBQVk7SUFDaEIsS0FBS0MsS0FBTCxHQUFhLEtBQWI7SUFDQSxLQUFLQyxJQUFMLENBQVVDLE9BQVYsR0FBb0IsR0FBcEI7SUFDQSxLQUFLRCxJQUFMLENBQVVFLEVBQVYsQ0FBYVQsRUFBRSxDQUFDVSxJQUFILENBQVFDLFNBQVIsQ0FBa0JDLFVBQS9CLEVBQTJDLFVBQVVDLEtBQVYsRUFBaUI7TUFDeERiLEVBQUUsQ0FBQ2MsR0FBSCxDQUFPLGlCQUFQO01BQ0EsS0FBS1AsSUFBTCxDQUFVQyxPQUFWLEdBQW9CLEdBQXBCO01BQ0EsS0FBS0YsS0FBTCxHQUFhLElBQWI7TUFDQSxJQUFJLENBQUMsS0FBS0YsU0FBVixFQUNJUyxLQUFLLENBQUNFLGVBQU47SUFDUCxDQU5ELEVBTUcsSUFOSDtJQU9BLEtBQUtSLElBQUwsQ0FBVUUsRUFBVixDQUFhVCxFQUFFLENBQUNVLElBQUgsQ0FBUUMsU0FBUixDQUFrQkssVUFBL0IsRUFBMkMsVUFBVUgsS0FBVixFQUFpQjtNQUN4RCxJQUFJLENBQUMsS0FBS1AsS0FBVixFQUFpQjtRQUNiTyxLQUFLLENBQUNFLGVBQU47UUFDQTtNQUNIOztNQUNELEtBQUtSLElBQUwsQ0FBVUMsT0FBVixHQUFvQixHQUFwQjtNQUNBLElBQUlTLEtBQUssR0FBR0osS0FBSyxDQUFDSyxRQUFOLEVBQVo7TUFDQSxLQUFLWCxJQUFMLENBQVVZLENBQVYsSUFBZUYsS0FBSyxDQUFDRSxDQUFyQjtNQUNBLEtBQUtaLElBQUwsQ0FBVWEsQ0FBVixJQUFlSCxLQUFLLENBQUNHLENBQXJCO01BQ0EsSUFBSSxDQUFDLEtBQUtoQixTQUFWLEVBQ0lTLEtBQUssQ0FBQ0UsZUFBTjtJQUNQLENBWEQsRUFXRyxJQVhIO0lBWUEsS0FBS1IsSUFBTCxDQUFVRSxFQUFWLENBQWFULEVBQUUsQ0FBQ1UsSUFBSCxDQUFRQyxTQUFSLENBQWtCVSxXQUEvQixFQUE0QyxVQUFVUixLQUFWLEVBQWlCO01BQ3pELElBQUksQ0FBQyxLQUFLUCxLQUFWLEVBQWlCO1FBQ2JPLEtBQUssQ0FBQ0UsZUFBTjtRQUNBO01BQ0g7O01BQ0QsS0FBS1IsSUFBTCxDQUFVQyxPQUFWLEdBQW9CLEdBQXBCO01BQ0FSLEVBQUUsQ0FBQ2MsR0FBSCxDQUFPLGdCQUFQO01BQ0EsS0FBS1IsS0FBTCxHQUFhLEtBQWI7SUFDSCxDQVJELEVBUUcsSUFSSDtJQVNBLEtBQUtDLElBQUwsQ0FBVUUsRUFBVixDQUFhVCxFQUFFLENBQUNVLElBQUgsQ0FBUUMsU0FBUixDQUFrQlcsUUFBL0IsRUFBeUMsVUFBVVQsS0FBVixFQUFpQjtNQUN0RCxJQUFJLENBQUMsS0FBS1AsS0FBVixFQUFpQjtRQUNiTyxLQUFLLENBQUNFLGVBQU47UUFDQTtNQUNIOztNQUNEZixFQUFFLENBQUNjLEdBQUgsQ0FBTyxlQUFQO01BQ0EsS0FBS1AsSUFBTCxDQUFVQyxPQUFWLEdBQW9CLEdBQXBCO01BQ0EsS0FBS0YsS0FBTCxHQUFhLEtBQWI7SUFDSCxDQVJELEVBUUcsSUFSSDtFQVNIO0FBbkR1QixDQUFULENBQW5CIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgVG91Y2hEcmFnZ2VyID0gY2MuQ2xhc3Moe1xuICAgIGV4dGVuZHM6IGNjLkNvbXBvbmVudCxcblxuICAgIHByb3BlcnRpZXM6IHtcbiAgICAgICAgcHJvcGFnYXRlOiB7XG4gICAgICAgICAgICBkZWZhdWx0OiBmYWxzZVxuICAgICAgICB9LFxuICAgICAgICAvLyAuLi5cbiAgICB9LFxuXG4gICAgLy8gdXNlIHRoaXMgZm9yIGluaXRpYWxpemF0aW9uXG4gICAgb25Mb2FkOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHRoaXMuX2Rvd24gPSBmYWxzZTtcbiAgICAgICAgdGhpcy5ub2RlLm9wYWNpdHkgPSAxNjA7XG4gICAgICAgIHRoaXMubm9kZS5vbihjYy5Ob2RlLkV2ZW50VHlwZS5NT1VTRV9ET1dOLCBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgICAgICAgIGNjLmxvZygnRHJhZyBzdGF0ZWQgLi4uJyk7XG4gICAgICAgICAgICB0aGlzLm5vZGUub3BhY2l0eSA9IDI1NTtcbiAgICAgICAgICAgIHRoaXMuX2Rvd24gPSB0cnVlO1xuICAgICAgICAgICAgaWYgKCF0aGlzLnByb3BhZ2F0ZSlcbiAgICAgICAgICAgICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgICAgfSwgdGhpcyk7XG4gICAgICAgIHRoaXMubm9kZS5vbihjYy5Ob2RlLkV2ZW50VHlwZS5NT1VTRV9NT1ZFLCBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgICAgICAgIGlmICghdGhpcy5fZG93bikge1xuICAgICAgICAgICAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgICAgICAgICAgIHJldHVyblxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5ub2RlLm9wYWNpdHkgPSAyNTU7XG4gICAgICAgICAgICB2YXIgZGVsdGEgPSBldmVudC5nZXREZWx0YSgpO1xuICAgICAgICAgICAgdGhpcy5ub2RlLnggKz0gZGVsdGEueDtcbiAgICAgICAgICAgIHRoaXMubm9kZS55ICs9IGRlbHRhLnk7XG4gICAgICAgICAgICBpZiAoIXRoaXMucHJvcGFnYXRlKVxuICAgICAgICAgICAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgICB9LCB0aGlzKTtcbiAgICAgICAgdGhpcy5ub2RlLm9uKGNjLk5vZGUuRXZlbnRUeXBlLk1PVVNFX0xFQVZFLCBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgICAgICAgIGlmICghdGhpcy5fZG93bikge1xuICAgICAgICAgICAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgICAgICAgICAgIHJldHVyblxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5ub2RlLm9wYWNpdHkgPSAxNjA7XG4gICAgICAgICAgICBjYy5sb2coJ0RyYWcgbGVhdmUgLi4uJyk7XG4gICAgICAgICAgICB0aGlzLl9kb3duID0gZmFsc2U7XG4gICAgICAgIH0sIHRoaXMpO1xuICAgICAgICB0aGlzLm5vZGUub24oY2MuTm9kZS5FdmVudFR5cGUuTU9VU0VfVVAsIGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgICAgICAgaWYgKCF0aGlzLl9kb3duKSB7XG4gICAgICAgICAgICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICAgICAgICAgICAgcmV0dXJuXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjYy5sb2coJ0RyYWcgZG9uZSAuLi4nKTtcbiAgICAgICAgICAgIHRoaXMubm9kZS5vcGFjaXR5ID0gMTYwO1xuICAgICAgICAgICAgdGhpcy5fZG93biA9IGZhbHNlO1xuICAgICAgICB9LCB0aGlzKTtcbiAgICB9LFxufSk7Il19