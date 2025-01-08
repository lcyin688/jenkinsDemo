
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/cases/05_scripting/03_events/MouseEvent.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '6df0ft1jy5Jg4cQ039jt8jC', 'MouseEvent');
// cases/05_scripting/03_events/MouseEvent.js

"use strict";

cc.Class({
  "extends": cc.Component,
  move: function move(event) {
    this.node.x += event.getDeltaX();
    this.node.y += event.getDeltaY();
  },
  // use this for initialization
  onLoad: function onLoad() {
    this.scroll = 0;
    this.node.opacity = 50;
    this.node.on(cc.Node.EventType.MOUSE_DOWN, function () {
      this.node.opacity = 255;
      this.node.on(cc.Node.EventType.MOUSE_MOVE, this.move, this);
    }, this);
    this.node.on(cc.Node.EventType.MOUSE_ENTER, function () {
      this.node.opacity = 160;
    }, this);
    this.node.on(cc.Node.EventType.MOUSE_LEAVE, function () {
      this.node.opacity = 50;
      this.node.off(cc.Node.EventType.MOUSE_MOVE, this.move, this);
    }, this);
    this.node.on(cc.Node.EventType.MOUSE_UP, function () {
      this.node.opacity = 50;
      this.node.off(cc.Node.EventType.MOUSE_MOVE, this.move, this);

      if (this._callback) {
        this._callback();
      }
    }, this);
    this.node.on(cc.Node.EventType.MOUSE_WHEEL, function (event) {
      this.scroll += event.getScrollY();
      var h = this.node.height;
      this.scroll = cc.misc.clampf(this.scroll, -2 * h, 0.7 * h);
      this.node.scale = 1 - this.scroll / h;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9jYXNlcy8wNV9zY3JpcHRpbmcvMDNfZXZlbnRzL01vdXNlRXZlbnQuanMiXSwibmFtZXMiOlsiY2MiLCJDbGFzcyIsIkNvbXBvbmVudCIsIm1vdmUiLCJldmVudCIsIm5vZGUiLCJ4IiwiZ2V0RGVsdGFYIiwieSIsImdldERlbHRhWSIsIm9uTG9hZCIsInNjcm9sbCIsIm9wYWNpdHkiLCJvbiIsIk5vZGUiLCJFdmVudFR5cGUiLCJNT1VTRV9ET1dOIiwiTU9VU0VfTU9WRSIsIk1PVVNFX0VOVEVSIiwiTU9VU0VfTEVBVkUiLCJvZmYiLCJNT1VTRV9VUCIsIl9jYWxsYmFjayIsIk1PVVNFX1dIRUVMIiwiZ2V0U2Nyb2xsWSIsImgiLCJoZWlnaHQiLCJtaXNjIiwiY2xhbXBmIiwic2NhbGUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUFBLEVBQUUsQ0FBQ0MsS0FBSCxDQUFTO0VBQ0wsV0FBU0QsRUFBRSxDQUFDRSxTQURQO0VBR0xDLElBQUksRUFBRSxjQUFVQyxLQUFWLEVBQWlCO0lBQ25CLEtBQUtDLElBQUwsQ0FBVUMsQ0FBVixJQUFlRixLQUFLLENBQUNHLFNBQU4sRUFBZjtJQUNBLEtBQUtGLElBQUwsQ0FBVUcsQ0FBVixJQUFlSixLQUFLLENBQUNLLFNBQU4sRUFBZjtFQUNILENBTkk7RUFRTDtFQUNBQyxNQUFNLEVBQUUsa0JBQVk7SUFDaEIsS0FBS0MsTUFBTCxHQUFjLENBQWQ7SUFDQSxLQUFLTixJQUFMLENBQVVPLE9BQVYsR0FBb0IsRUFBcEI7SUFDQSxLQUFLUCxJQUFMLENBQVVRLEVBQVYsQ0FBYWIsRUFBRSxDQUFDYyxJQUFILENBQVFDLFNBQVIsQ0FBa0JDLFVBQS9CLEVBQTJDLFlBQVk7TUFDbkQsS0FBS1gsSUFBTCxDQUFVTyxPQUFWLEdBQW9CLEdBQXBCO01BQ0EsS0FBS1AsSUFBTCxDQUFVUSxFQUFWLENBQWFiLEVBQUUsQ0FBQ2MsSUFBSCxDQUFRQyxTQUFSLENBQWtCRSxVQUEvQixFQUEyQyxLQUFLZCxJQUFoRCxFQUFzRCxJQUF0RDtJQUNILENBSEQsRUFHRyxJQUhIO0lBSUEsS0FBS0UsSUFBTCxDQUFVUSxFQUFWLENBQWFiLEVBQUUsQ0FBQ2MsSUFBSCxDQUFRQyxTQUFSLENBQWtCRyxXQUEvQixFQUE0QyxZQUFZO01BQ3BELEtBQUtiLElBQUwsQ0FBVU8sT0FBVixHQUFvQixHQUFwQjtJQUNILENBRkQsRUFFRyxJQUZIO0lBR0EsS0FBS1AsSUFBTCxDQUFVUSxFQUFWLENBQWFiLEVBQUUsQ0FBQ2MsSUFBSCxDQUFRQyxTQUFSLENBQWtCSSxXQUEvQixFQUE0QyxZQUFZO01BQ3BELEtBQUtkLElBQUwsQ0FBVU8sT0FBVixHQUFvQixFQUFwQjtNQUNBLEtBQUtQLElBQUwsQ0FBVWUsR0FBVixDQUFjcEIsRUFBRSxDQUFDYyxJQUFILENBQVFDLFNBQVIsQ0FBa0JFLFVBQWhDLEVBQTRDLEtBQUtkLElBQWpELEVBQXVELElBQXZEO0lBQ0gsQ0FIRCxFQUdHLElBSEg7SUFJQSxLQUFLRSxJQUFMLENBQVVRLEVBQVYsQ0FBYWIsRUFBRSxDQUFDYyxJQUFILENBQVFDLFNBQVIsQ0FBa0JNLFFBQS9CLEVBQXlDLFlBQVk7TUFDakQsS0FBS2hCLElBQUwsQ0FBVU8sT0FBVixHQUFvQixFQUFwQjtNQUNBLEtBQUtQLElBQUwsQ0FBVWUsR0FBVixDQUFjcEIsRUFBRSxDQUFDYyxJQUFILENBQVFDLFNBQVIsQ0FBa0JFLFVBQWhDLEVBQTRDLEtBQUtkLElBQWpELEVBQXVELElBQXZEOztNQUNBLElBQUksS0FBS21CLFNBQVQsRUFBb0I7UUFDaEIsS0FBS0EsU0FBTDtNQUNIO0lBQ0osQ0FORCxFQU1HLElBTkg7SUFPQSxLQUFLakIsSUFBTCxDQUFVUSxFQUFWLENBQWFiLEVBQUUsQ0FBQ2MsSUFBSCxDQUFRQyxTQUFSLENBQWtCUSxXQUEvQixFQUE0QyxVQUFVbkIsS0FBVixFQUFpQjtNQUN6RCxLQUFLTyxNQUFMLElBQWVQLEtBQUssQ0FBQ29CLFVBQU4sRUFBZjtNQUNBLElBQUlDLENBQUMsR0FBRyxLQUFLcEIsSUFBTCxDQUFVcUIsTUFBbEI7TUFDQSxLQUFLZixNQUFMLEdBQWNYLEVBQUUsQ0FBQzJCLElBQUgsQ0FBUUMsTUFBUixDQUFlLEtBQUtqQixNQUFwQixFQUE0QixDQUFDLENBQUQsR0FBS2MsQ0FBakMsRUFBb0MsTUFBTUEsQ0FBMUMsQ0FBZDtNQUNBLEtBQUtwQixJQUFMLENBQVV3QixLQUFWLEdBQWtCLElBQUksS0FBS2xCLE1BQUwsR0FBWWMsQ0FBbEM7SUFDSCxDQUxELEVBS0csSUFMSDtFQU1IO0FBcENJLENBQVQiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImNjLkNsYXNzKHtcbiAgICBleHRlbmRzOiBjYy5Db21wb25lbnQsXG5cbiAgICBtb3ZlOiBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgICAgdGhpcy5ub2RlLnggKz0gZXZlbnQuZ2V0RGVsdGFYKCk7XG4gICAgICAgIHRoaXMubm9kZS55ICs9IGV2ZW50LmdldERlbHRhWSgpO1xuICAgIH0sXG5cbiAgICAvLyB1c2UgdGhpcyBmb3IgaW5pdGlhbGl6YXRpb25cbiAgICBvbkxvYWQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdGhpcy5zY3JvbGwgPSAwO1xuICAgICAgICB0aGlzLm5vZGUub3BhY2l0eSA9IDUwO1xuICAgICAgICB0aGlzLm5vZGUub24oY2MuTm9kZS5FdmVudFR5cGUuTU9VU0VfRE9XTiwgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdGhpcy5ub2RlLm9wYWNpdHkgPSAyNTU7XG4gICAgICAgICAgICB0aGlzLm5vZGUub24oY2MuTm9kZS5FdmVudFR5cGUuTU9VU0VfTU9WRSwgdGhpcy5tb3ZlLCB0aGlzKTtcbiAgICAgICAgfSwgdGhpcyk7XG4gICAgICAgIHRoaXMubm9kZS5vbihjYy5Ob2RlLkV2ZW50VHlwZS5NT1VTRV9FTlRFUiwgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdGhpcy5ub2RlLm9wYWNpdHkgPSAxNjA7XG4gICAgICAgIH0sIHRoaXMpO1xuICAgICAgICB0aGlzLm5vZGUub24oY2MuTm9kZS5FdmVudFR5cGUuTU9VU0VfTEVBVkUsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHRoaXMubm9kZS5vcGFjaXR5ID0gNTA7XG4gICAgICAgICAgICB0aGlzLm5vZGUub2ZmKGNjLk5vZGUuRXZlbnRUeXBlLk1PVVNFX01PVkUsIHRoaXMubW92ZSwgdGhpcyk7XG4gICAgICAgIH0sIHRoaXMpO1xuICAgICAgICB0aGlzLm5vZGUub24oY2MuTm9kZS5FdmVudFR5cGUuTU9VU0VfVVAsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHRoaXMubm9kZS5vcGFjaXR5ID0gNTA7XG4gICAgICAgICAgICB0aGlzLm5vZGUub2ZmKGNjLk5vZGUuRXZlbnRUeXBlLk1PVVNFX01PVkUsIHRoaXMubW92ZSwgdGhpcyk7XG4gICAgICAgICAgICBpZiAodGhpcy5fY2FsbGJhY2spIHtcbiAgICAgICAgICAgICAgICB0aGlzLl9jYWxsYmFjaygpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LCB0aGlzKTtcbiAgICAgICAgdGhpcy5ub2RlLm9uKGNjLk5vZGUuRXZlbnRUeXBlLk1PVVNFX1dIRUVMLCBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgICAgICAgIHRoaXMuc2Nyb2xsICs9IGV2ZW50LmdldFNjcm9sbFkoKTtcbiAgICAgICAgICAgIHZhciBoID0gdGhpcy5ub2RlLmhlaWdodDtcbiAgICAgICAgICAgIHRoaXMuc2Nyb2xsID0gY2MubWlzYy5jbGFtcGYodGhpcy5zY3JvbGwsIC0yICogaCwgMC43ICogaCk7XG4gICAgICAgICAgICB0aGlzLm5vZGUuc2NhbGUgPSAxIC0gdGhpcy5zY3JvbGwvaDtcbiAgICAgICAgfSwgdGhpcyk7XG4gICAgfSxcbn0pO1xuIl19