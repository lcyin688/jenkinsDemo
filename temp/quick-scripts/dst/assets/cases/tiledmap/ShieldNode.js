
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/cases/tiledmap/ShieldNode.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '11d749OX3BDRqOfPVpy+u7u', 'ShieldNode');
// cases/tiledmap/ShieldNode.js

"use strict";

cc.Class({
  "extends": cc.Component,
  properties: {
    tiledLayer: {
      type: cc.TiledLayer,
      "default": null
    }
  },
  onLoad: function onLoad() {
    cc.resources.load("tilemap/shieldNode", function (err, prefab) {
      if (err) {
        cc.error("tilemap/shieldNode resources load failed");
        return;
      }

      this.initScene(prefab);
    }.bind(this));
  },
  initScene: function initScene(prefab) {
    var _this = this;

    var posArr = [cc.v2(-249, 96), cc.v2(-150, 76), cc.v2(-60, 54), cc.v2(-248, -144), cc.v2(-89, -34)];

    var _loop = function _loop(i) {
      var shieldNode = cc.instantiate(prefab);
      shieldNode.x = posArr[i].x;
      shieldNode.y = posArr[i].y;

      _this.tiledLayer.addUserNode(shieldNode);

      shieldNode.on(cc.Node.EventType.TOUCH_MOVE, function (event) {
        var deltaMove = event.getLocation().sub(event.getPreviousLocation());
        shieldNode.x += deltaMove.x;
        shieldNode.y += deltaMove.y;
      });
    };

    for (var i = 0; i < posArr.length; i++) {
      _loop(i);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9jYXNlcy90aWxlZG1hcC9TaGllbGROb2RlLmpzIl0sIm5hbWVzIjpbImNjIiwiQ2xhc3MiLCJDb21wb25lbnQiLCJwcm9wZXJ0aWVzIiwidGlsZWRMYXllciIsInR5cGUiLCJUaWxlZExheWVyIiwib25Mb2FkIiwicmVzb3VyY2VzIiwibG9hZCIsImVyciIsInByZWZhYiIsImVycm9yIiwiaW5pdFNjZW5lIiwiYmluZCIsInBvc0FyciIsInYyIiwiaSIsInNoaWVsZE5vZGUiLCJpbnN0YW50aWF0ZSIsIngiLCJ5IiwiYWRkVXNlck5vZGUiLCJvbiIsIk5vZGUiLCJFdmVudFR5cGUiLCJUT1VDSF9NT1ZFIiwiZXZlbnQiLCJkZWx0YU1vdmUiLCJnZXRMb2NhdGlvbiIsInN1YiIsImdldFByZXZpb3VzTG9jYXRpb24iLCJsZW5ndGgiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUFBLEVBQUUsQ0FBQ0MsS0FBSCxDQUFTO0VBQ0wsV0FBU0QsRUFBRSxDQUFDRSxTQURQO0VBR0xDLFVBQVUsRUFBRTtJQUNSQyxVQUFVLEVBQUU7TUFDUkMsSUFBSSxFQUFFTCxFQUFFLENBQUNNLFVBREQ7TUFFUixXQUFTO0lBRkQ7RUFESixDQUhQO0VBVUxDLE1BVkssb0JBVUs7SUFDTlAsRUFBRSxDQUFDUSxTQUFILENBQWFDLElBQWIsQ0FBa0Isb0JBQWxCLEVBQXdDLFVBQVVDLEdBQVYsRUFBZUMsTUFBZixFQUF1QjtNQUMzRCxJQUFJRCxHQUFKLEVBQVM7UUFDTFYsRUFBRSxDQUFDWSxLQUFILENBQVMsMENBQVQ7UUFDQTtNQUNIOztNQUNELEtBQUtDLFNBQUwsQ0FBZUYsTUFBZjtJQUNILENBTnVDLENBTXRDRyxJQU5zQyxDQU1qQyxJQU5pQyxDQUF4QztFQU9ILENBbEJJO0VBb0JMRCxTQXBCSyxxQkFvQk1GLE1BcEJOLEVBb0JjO0lBQUE7O0lBQ2YsSUFBSUksTUFBTSxHQUFHLENBQUNmLEVBQUUsQ0FBQ2dCLEVBQUgsQ0FBTSxDQUFDLEdBQVAsRUFBWSxFQUFaLENBQUQsRUFBa0JoQixFQUFFLENBQUNnQixFQUFILENBQU0sQ0FBQyxHQUFQLEVBQVksRUFBWixDQUFsQixFQUFtQ2hCLEVBQUUsQ0FBQ2dCLEVBQUgsQ0FBTSxDQUFDLEVBQVAsRUFBVyxFQUFYLENBQW5DLEVBQW1EaEIsRUFBRSxDQUFDZ0IsRUFBSCxDQUFNLENBQUMsR0FBUCxFQUFZLENBQUMsR0FBYixDQUFuRCxFQUFzRWhCLEVBQUUsQ0FBQ2dCLEVBQUgsQ0FBTSxDQUFDLEVBQVAsRUFBVyxDQUFDLEVBQVosQ0FBdEUsQ0FBYjs7SUFEZSwyQkFFTkMsQ0FGTTtNQUdYLElBQUlDLFVBQVUsR0FBR2xCLEVBQUUsQ0FBQ21CLFdBQUgsQ0FBZVIsTUFBZixDQUFqQjtNQUNBTyxVQUFVLENBQUNFLENBQVgsR0FBZUwsTUFBTSxDQUFDRSxDQUFELENBQU4sQ0FBVUcsQ0FBekI7TUFDQUYsVUFBVSxDQUFDRyxDQUFYLEdBQWVOLE1BQU0sQ0FBQ0UsQ0FBRCxDQUFOLENBQVVJLENBQXpCOztNQUNBLEtBQUksQ0FBQ2pCLFVBQUwsQ0FBZ0JrQixXQUFoQixDQUE0QkosVUFBNUI7O01BQ0FBLFVBQVUsQ0FBQ0ssRUFBWCxDQUFjdkIsRUFBRSxDQUFDd0IsSUFBSCxDQUFRQyxTQUFSLENBQWtCQyxVQUFoQyxFQUE0QyxVQUFVQyxLQUFWLEVBQWlCO1FBQ3pELElBQUlDLFNBQVMsR0FBR0QsS0FBSyxDQUFDRSxXQUFOLEdBQW9CQyxHQUFwQixDQUF3QkgsS0FBSyxDQUFDSSxtQkFBTixFQUF4QixDQUFoQjtRQUNBYixVQUFVLENBQUNFLENBQVgsSUFBZ0JRLFNBQVMsQ0FBQ1IsQ0FBMUI7UUFDQUYsVUFBVSxDQUFDRyxDQUFYLElBQWdCTyxTQUFTLENBQUNQLENBQTFCO01BQ0gsQ0FKRDtJQVBXOztJQUVmLEtBQUssSUFBSUosQ0FBQyxHQUFHLENBQWIsRUFBZ0JBLENBQUMsR0FBR0YsTUFBTSxDQUFDaUIsTUFBM0IsRUFBbUNmLENBQUMsRUFBcEMsRUFBd0M7TUFBQSxNQUEvQkEsQ0FBK0I7SUFVdkM7RUFDSjtBQWpDSSxDQUFUIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJjYy5DbGFzcyh7XG4gICAgZXh0ZW5kczogY2MuQ29tcG9uZW50LFxuXG4gICAgcHJvcGVydGllczoge1xuICAgICAgICB0aWxlZExheWVyOiB7XG4gICAgICAgICAgICB0eXBlOiBjYy5UaWxlZExheWVyLFxuICAgICAgICAgICAgZGVmYXVsdDogbnVsbCxcbiAgICAgICAgfSxcbiAgICB9LFxuXG4gICAgb25Mb2FkICgpIHtcbiAgICAgICAgY2MucmVzb3VyY2VzLmxvYWQoXCJ0aWxlbWFwL3NoaWVsZE5vZGVcIiwgZnVuY3Rpb24gKGVyciwgcHJlZmFiKSB7XG4gICAgICAgICAgICBpZiAoZXJyKSB7XG4gICAgICAgICAgICAgICAgY2MuZXJyb3IoXCJ0aWxlbWFwL3NoaWVsZE5vZGUgcmVzb3VyY2VzIGxvYWQgZmFpbGVkXCIpO1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMuaW5pdFNjZW5lKHByZWZhYik7XG4gICAgICAgIH0uYmluZCh0aGlzKSk7XG4gICAgfSxcblxuICAgIGluaXRTY2VuZSAocHJlZmFiKSB7XG4gICAgICAgIGxldCBwb3NBcnIgPSBbY2MudjIoLTI0OSwgOTYpLCBjYy52MigtMTUwLCA3NiksIGNjLnYyKC02MCwgNTQpLCBjYy52MigtMjQ4LCAtMTQ0KSwgY2MudjIoLTg5LCAtMzQpXTtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBwb3NBcnIubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGxldCBzaGllbGROb2RlID0gY2MuaW5zdGFudGlhdGUocHJlZmFiKTtcbiAgICAgICAgICAgIHNoaWVsZE5vZGUueCA9IHBvc0FycltpXS54O1xuICAgICAgICAgICAgc2hpZWxkTm9kZS55ID0gcG9zQXJyW2ldLnk7XG4gICAgICAgICAgICB0aGlzLnRpbGVkTGF5ZXIuYWRkVXNlck5vZGUoc2hpZWxkTm9kZSk7XG4gICAgICAgICAgICBzaGllbGROb2RlLm9uKGNjLk5vZGUuRXZlbnRUeXBlLlRPVUNIX01PVkUsIGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgICAgICAgICAgIGxldCBkZWx0YU1vdmUgPSBldmVudC5nZXRMb2NhdGlvbigpLnN1YihldmVudC5nZXRQcmV2aW91c0xvY2F0aW9uKCkpO1xuICAgICAgICAgICAgICAgIHNoaWVsZE5vZGUueCArPSBkZWx0YU1vdmUueDtcbiAgICAgICAgICAgICAgICBzaGllbGROb2RlLnkgKz0gZGVsdGFNb3ZlLnk7XG4gICAgICAgICAgICB9KTsgICAgXG4gICAgICAgIH1cbiAgICB9LFxufSk7XG4iXX0=