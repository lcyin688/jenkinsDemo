
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/cases/05_scripting/02_prefab/PopulatePrefab.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '75518I0ImJHXqWNNGRIOmJg', 'PopulatePrefab');
// cases/05_scripting/02_prefab/PopulatePrefab.js

"use strict";

cc.Class({
  "extends": cc.Component,
  properties: {
    root: {
      "default": null,
      type: cc.Node
    },
    prefab: {
      "default": null,
      type: cc.Prefab
    },
    canvas: {
      "default": null,
      type: cc.Canvas
    },
    numberToSpawn: 0,
    spawnInterval: 0
  },
  addSpawn: function addSpawn() {
    if (this.spawnCount >= this.numberToSpawn) {
      this.clearRepeater();
      return;
    }

    var monster = cc.instantiate(this.prefab);
    monster.parent = this.root; //this.canvas.node.addChild(monster);

    monster.position = this.getRandomPosition();
    this.spawnCount++;
  },
  // use this for initialization
  onLoad: function onLoad() {
    var self = this;
    self.randomRange = cc.v2(300, 200);
    self.spawnCount = 0;
    self.schedule(self.addSpawn, self.spawnInterval);
  },
  getRandomPosition: function getRandomPosition() {
    return cc.v2((Math.random() - 0.5) * 2 * this.randomRange.x, (Math.random() - 0.5) * 2 * this.randomRange.y);
  },
  clearRepeater: function clearRepeater() {
    this.unschedule(this.addSpawn);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9jYXNlcy8wNV9zY3JpcHRpbmcvMDJfcHJlZmFiL1BvcHVsYXRlUHJlZmFiLmpzIl0sIm5hbWVzIjpbImNjIiwiQ2xhc3MiLCJDb21wb25lbnQiLCJwcm9wZXJ0aWVzIiwicm9vdCIsInR5cGUiLCJOb2RlIiwicHJlZmFiIiwiUHJlZmFiIiwiY2FudmFzIiwiQ2FudmFzIiwibnVtYmVyVG9TcGF3biIsInNwYXduSW50ZXJ2YWwiLCJhZGRTcGF3biIsInNwYXduQ291bnQiLCJjbGVhclJlcGVhdGVyIiwibW9uc3RlciIsImluc3RhbnRpYXRlIiwicGFyZW50IiwicG9zaXRpb24iLCJnZXRSYW5kb21Qb3NpdGlvbiIsIm9uTG9hZCIsInNlbGYiLCJyYW5kb21SYW5nZSIsInYyIiwic2NoZWR1bGUiLCJNYXRoIiwicmFuZG9tIiwieCIsInkiLCJ1bnNjaGVkdWxlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBQSxFQUFFLENBQUNDLEtBQUgsQ0FBUztFQUNMLFdBQVNELEVBQUUsQ0FBQ0UsU0FEUDtFQUdMQyxVQUFVLEVBQUU7SUFDUkMsSUFBSSxFQUFFO01BQ0YsV0FBUyxJQURQO01BRUZDLElBQUksRUFBRUwsRUFBRSxDQUFDTTtJQUZQLENBREU7SUFLUkMsTUFBTSxFQUFFO01BQ0osV0FBUyxJQURMO01BRUpGLElBQUksRUFBRUwsRUFBRSxDQUFDUTtJQUZMLENBTEE7SUFTUkMsTUFBTSxFQUFFO01BQ0osV0FBUyxJQURMO01BRUpKLElBQUksRUFBRUwsRUFBRSxDQUFDVTtJQUZMLENBVEE7SUFhUkMsYUFBYSxFQUFFLENBYlA7SUFjUkMsYUFBYSxFQUFFO0VBZFAsQ0FIUDtFQW9CTEMsUUFBUSxFQUFFLG9CQUFZO0lBQ2xCLElBQUksS0FBS0MsVUFBTCxJQUFtQixLQUFLSCxhQUE1QixFQUEyQztNQUN2QyxLQUFLSSxhQUFMO01BQ0E7SUFDSDs7SUFDRCxJQUFJQyxPQUFPLEdBQUdoQixFQUFFLENBQUNpQixXQUFILENBQWUsS0FBS1YsTUFBcEIsQ0FBZDtJQUNBUyxPQUFPLENBQUNFLE1BQVIsR0FBaUIsS0FBS2QsSUFBdEIsQ0FOa0IsQ0FPbEI7O0lBQ0FZLE9BQU8sQ0FBQ0csUUFBUixHQUFtQixLQUFLQyxpQkFBTCxFQUFuQjtJQUNBLEtBQUtOLFVBQUw7RUFDSCxDQTlCSTtFQWdDTDtFQUNBTyxNQUFNLEVBQUUsa0JBQVk7SUFDaEIsSUFBSUMsSUFBSSxHQUFHLElBQVg7SUFDQUEsSUFBSSxDQUFDQyxXQUFMLEdBQW1CdkIsRUFBRSxDQUFDd0IsRUFBSCxDQUFNLEdBQU4sRUFBVyxHQUFYLENBQW5CO0lBQ0FGLElBQUksQ0FBQ1IsVUFBTCxHQUFrQixDQUFsQjtJQUNBUSxJQUFJLENBQUNHLFFBQUwsQ0FBY0gsSUFBSSxDQUFDVCxRQUFuQixFQUE2QlMsSUFBSSxDQUFDVixhQUFsQztFQUNILENBdENJO0VBd0NMUSxpQkFBaUIsRUFBRSw2QkFBVztJQUMxQixPQUFPcEIsRUFBRSxDQUFDd0IsRUFBSCxDQUFNLENBQUNFLElBQUksQ0FBQ0MsTUFBTCxLQUFnQixHQUFqQixJQUF3QixDQUF4QixHQUE0QixLQUFLSixXQUFMLENBQWlCSyxDQUFuRCxFQUFzRCxDQUFDRixJQUFJLENBQUNDLE1BQUwsS0FBZ0IsR0FBakIsSUFBd0IsQ0FBeEIsR0FBNEIsS0FBS0osV0FBTCxDQUFpQk0sQ0FBbkcsQ0FBUDtFQUNILENBMUNJO0VBNENMZCxhQUFhLEVBQUUseUJBQVc7SUFDdEIsS0FBS2UsVUFBTCxDQUFnQixLQUFLakIsUUFBckI7RUFDSDtBQTlDSSxDQUFUIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJjYy5DbGFzcyh7XG4gICAgZXh0ZW5kczogY2MuQ29tcG9uZW50LFxuXG4gICAgcHJvcGVydGllczoge1xuICAgICAgICByb290OiB7XG4gICAgICAgICAgICBkZWZhdWx0OiBudWxsLFxuICAgICAgICAgICAgdHlwZTogY2MuTm9kZVxuICAgICAgICB9LFxuICAgICAgICBwcmVmYWI6IHtcbiAgICAgICAgICAgIGRlZmF1bHQ6IG51bGwsXG4gICAgICAgICAgICB0eXBlOiBjYy5QcmVmYWJcbiAgICAgICAgfSxcbiAgICAgICAgY2FudmFzOiB7XG4gICAgICAgICAgICBkZWZhdWx0OiBudWxsLFxuICAgICAgICAgICAgdHlwZTogY2MuQ2FudmFzXG4gICAgICAgIH0sXG4gICAgICAgIG51bWJlclRvU3Bhd246IDAsXG4gICAgICAgIHNwYXduSW50ZXJ2YWw6IDBcbiAgICB9LFxuICAgIFxuICAgIGFkZFNwYXduOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGlmICh0aGlzLnNwYXduQ291bnQgPj0gdGhpcy5udW1iZXJUb1NwYXduKSB7XG4gICAgICAgICAgICB0aGlzLmNsZWFyUmVwZWF0ZXIoKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICB2YXIgbW9uc3RlciA9IGNjLmluc3RhbnRpYXRlKHRoaXMucHJlZmFiKTtcbiAgICAgICAgbW9uc3Rlci5wYXJlbnQgPSB0aGlzLnJvb3Q7XG4gICAgICAgIC8vdGhpcy5jYW52YXMubm9kZS5hZGRDaGlsZChtb25zdGVyKTtcbiAgICAgICAgbW9uc3Rlci5wb3NpdGlvbiA9IHRoaXMuZ2V0UmFuZG9tUG9zaXRpb24oKTtcbiAgICAgICAgdGhpcy5zcGF3bkNvdW50Kys7XG4gICAgfSxcblxuICAgIC8vIHVzZSB0aGlzIGZvciBpbml0aWFsaXphdGlvblxuICAgIG9uTG9hZDogZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgc2VsZiA9IHRoaXM7XG4gICAgICAgIHNlbGYucmFuZG9tUmFuZ2UgPSBjYy52MigzMDAsIDIwMCk7XG4gICAgICAgIHNlbGYuc3Bhd25Db3VudCA9IDA7XG4gICAgICAgIHNlbGYuc2NoZWR1bGUoc2VsZi5hZGRTcGF3biwgc2VsZi5zcGF3bkludGVydmFsKTtcbiAgICB9LFxuXG4gICAgZ2V0UmFuZG9tUG9zaXRpb246IGZ1bmN0aW9uKCkge1xuICAgICAgICByZXR1cm4gY2MudjIoKE1hdGgucmFuZG9tKCkgLSAwLjUpICogMiAqIHRoaXMucmFuZG9tUmFuZ2UueCwgKE1hdGgucmFuZG9tKCkgLSAwLjUpICogMiAqIHRoaXMucmFuZG9tUmFuZ2UueSk7XG4gICAgfSxcblxuICAgIGNsZWFyUmVwZWF0ZXI6IGZ1bmN0aW9uKCkge1xuICAgICAgICB0aGlzLnVuc2NoZWR1bGUodGhpcy5hZGRTcGF3bik7XG4gICAgfSxcbn0pO1xuIl19