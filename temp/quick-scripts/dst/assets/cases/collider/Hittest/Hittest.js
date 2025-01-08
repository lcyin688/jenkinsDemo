
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/cases/collider/Hittest/Hittest.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '49ade5wuu9ILKDuwPmdIALx', 'Hittest');
// cases/collider/Hittest/Hittest.js

"use strict";

cc.Class({
  "extends": cc.Component,
  properties: {
    collider: {
      "default": null,
      type: cc.PolygonCollider
    },
    title: {
      "default": null,
      type: cc.Label
    }
  },
  // use this for initialization
  onLoad: function onLoad() {
    cc.director.getCollisionManager().enabled = true;
    cc.director.getCollisionManager().enabledDebugDraw = true;
    this.title.string = 'normal';
    this.node.on(cc.Node.EventType.TOUCH_START, function (touch, event) {
      var touchLoc = touch.getLocation();

      if (cc.Intersection.pointInPolygon(touchLoc, this.collider.world.points)) {
        this.title.string = 'Hit';
      } else {
        this.title.string = 'Not hit';
      }
    }, this);
  },
  onDisable: function onDisable() {
    cc.director.getCollisionManager().enabled = false;
    cc.director.getCollisionManager().enabledDebugDraw = false;
    this.node.off(cc.Node.EventType.TOUCH_START);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9jYXNlcy9jb2xsaWRlci9IaXR0ZXN0L0hpdHRlc3QuanMiXSwibmFtZXMiOlsiY2MiLCJDbGFzcyIsIkNvbXBvbmVudCIsInByb3BlcnRpZXMiLCJjb2xsaWRlciIsInR5cGUiLCJQb2x5Z29uQ29sbGlkZXIiLCJ0aXRsZSIsIkxhYmVsIiwib25Mb2FkIiwiZGlyZWN0b3IiLCJnZXRDb2xsaXNpb25NYW5hZ2VyIiwiZW5hYmxlZCIsImVuYWJsZWREZWJ1Z0RyYXciLCJzdHJpbmciLCJub2RlIiwib24iLCJOb2RlIiwiRXZlbnRUeXBlIiwiVE9VQ0hfU1RBUlQiLCJ0b3VjaCIsImV2ZW50IiwidG91Y2hMb2MiLCJnZXRMb2NhdGlvbiIsIkludGVyc2VjdGlvbiIsInBvaW50SW5Qb2x5Z29uIiwid29ybGQiLCJwb2ludHMiLCJvbkRpc2FibGUiLCJvZmYiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUFBLEVBQUUsQ0FBQ0MsS0FBSCxDQUFTO0VBQ0wsV0FBU0QsRUFBRSxDQUFDRSxTQURQO0VBR0xDLFVBQVUsRUFBRTtJQUNSQyxRQUFRLEVBQUU7TUFDTixXQUFTLElBREg7TUFFTkMsSUFBSSxFQUFFTCxFQUFFLENBQUNNO0lBRkgsQ0FERjtJQU1SQyxLQUFLLEVBQUU7TUFDSCxXQUFTLElBRE47TUFFSEYsSUFBSSxFQUFFTCxFQUFFLENBQUNRO0lBRk47RUFOQyxDQUhQO0VBZUw7RUFDQUMsTUFBTSxFQUFFLGtCQUFZO0lBQ2hCVCxFQUFFLENBQUNVLFFBQUgsQ0FBWUMsbUJBQVosR0FBa0NDLE9BQWxDLEdBQTRDLElBQTVDO0lBQ0FaLEVBQUUsQ0FBQ1UsUUFBSCxDQUFZQyxtQkFBWixHQUFrQ0UsZ0JBQWxDLEdBQXFELElBQXJEO0lBRUEsS0FBS04sS0FBTCxDQUFXTyxNQUFYLEdBQW9CLFFBQXBCO0lBRUEsS0FBS0MsSUFBTCxDQUFVQyxFQUFWLENBQWFoQixFQUFFLENBQUNpQixJQUFILENBQVFDLFNBQVIsQ0FBa0JDLFdBQS9CLEVBQTRDLFVBQVVDLEtBQVYsRUFBaUJDLEtBQWpCLEVBQXdCO01BQ2hFLElBQUlDLFFBQVEsR0FBR0YsS0FBSyxDQUFDRyxXQUFOLEVBQWY7O01BRUEsSUFBSXZCLEVBQUUsQ0FBQ3dCLFlBQUgsQ0FBZ0JDLGNBQWhCLENBQStCSCxRQUEvQixFQUF5QyxLQUFLbEIsUUFBTCxDQUFjc0IsS0FBZCxDQUFvQkMsTUFBN0QsQ0FBSixFQUEwRTtRQUN0RSxLQUFLcEIsS0FBTCxDQUFXTyxNQUFYLEdBQW9CLEtBQXBCO01BQ0gsQ0FGRCxNQUdLO1FBQ0QsS0FBS1AsS0FBTCxDQUFXTyxNQUFYLEdBQW9CLFNBQXBCO01BQ0g7SUFDSixDQVRELEVBU0csSUFUSDtFQVVILENBaENJO0VBa0NMYyxTQUFTLEVBQUUscUJBQVk7SUFDbkI1QixFQUFFLENBQUNVLFFBQUgsQ0FBWUMsbUJBQVosR0FBa0NDLE9BQWxDLEdBQTRDLEtBQTVDO0lBQ0FaLEVBQUUsQ0FBQ1UsUUFBSCxDQUFZQyxtQkFBWixHQUFrQ0UsZ0JBQWxDLEdBQXFELEtBQXJEO0lBQ0EsS0FBS0UsSUFBTCxDQUFVYyxHQUFWLENBQWM3QixFQUFFLENBQUNpQixJQUFILENBQVFDLFNBQVIsQ0FBa0JDLFdBQWhDO0VBQ0gsQ0F0Q0ksQ0F3Q0w7RUFDQTtFQUVBOztBQTNDSyxDQUFUIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJjYy5DbGFzcyh7XG4gICAgZXh0ZW5kczogY2MuQ29tcG9uZW50LFxuXG4gICAgcHJvcGVydGllczoge1xuICAgICAgICBjb2xsaWRlcjoge1xuICAgICAgICAgICAgZGVmYXVsdDogbnVsbCxcbiAgICAgICAgICAgIHR5cGU6IGNjLlBvbHlnb25Db2xsaWRlclxuICAgICAgICB9LFxuXG4gICAgICAgIHRpdGxlOiB7XG4gICAgICAgICAgICBkZWZhdWx0OiBudWxsLFxuICAgICAgICAgICAgdHlwZTogY2MuTGFiZWxcbiAgICAgICAgfVxuICAgIH0sXG5cbiAgICAvLyB1c2UgdGhpcyBmb3IgaW5pdGlhbGl6YXRpb25cbiAgICBvbkxvYWQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgY2MuZGlyZWN0b3IuZ2V0Q29sbGlzaW9uTWFuYWdlcigpLmVuYWJsZWQgPSB0cnVlO1xuICAgICAgICBjYy5kaXJlY3Rvci5nZXRDb2xsaXNpb25NYW5hZ2VyKCkuZW5hYmxlZERlYnVnRHJhdyA9IHRydWU7XG5cbiAgICAgICAgdGhpcy50aXRsZS5zdHJpbmcgPSAnbm9ybWFsJztcblxuICAgICAgICB0aGlzLm5vZGUub24oY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfU1RBUlQsIGZ1bmN0aW9uICh0b3VjaCwgZXZlbnQpIHtcbiAgICAgICAgICAgIHZhciB0b3VjaExvYyA9IHRvdWNoLmdldExvY2F0aW9uKCk7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIGlmIChjYy5JbnRlcnNlY3Rpb24ucG9pbnRJblBvbHlnb24odG91Y2hMb2MsIHRoaXMuY29sbGlkZXIud29ybGQucG9pbnRzKSkge1xuICAgICAgICAgICAgICAgIHRoaXMudGl0bGUuc3RyaW5nID0gJ0hpdCc7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aGlzLnRpdGxlLnN0cmluZyA9ICdOb3QgaGl0JztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSwgdGhpcyk7XG4gICAgfSxcblxuICAgIG9uRGlzYWJsZTogZnVuY3Rpb24gKCkge1xuICAgICAgICBjYy5kaXJlY3Rvci5nZXRDb2xsaXNpb25NYW5hZ2VyKCkuZW5hYmxlZCA9IGZhbHNlO1xuICAgICAgICBjYy5kaXJlY3Rvci5nZXRDb2xsaXNpb25NYW5hZ2VyKCkuZW5hYmxlZERlYnVnRHJhdyA9IGZhbHNlO1xuICAgICAgICB0aGlzLm5vZGUub2ZmKGNjLk5vZGUuRXZlbnRUeXBlLlRPVUNIX1NUQVJUKTtcbiAgICB9XG5cbiAgICAvLyBjYWxsZWQgZXZlcnkgZnJhbWUsIHVuY29tbWVudCB0aGlzIGZ1bmN0aW9uIHRvIGFjdGl2YXRlIHVwZGF0ZSBjYWxsYmFja1xuICAgIC8vIHVwZGF0ZTogZnVuY3Rpb24gKGR0KSB7XG5cbiAgICAvLyB9LFxufSk7XG4iXX0=