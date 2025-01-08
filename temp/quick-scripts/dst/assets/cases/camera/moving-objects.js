
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/cases/camera/moving-objects.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '6d056HwAmhA7ZTa6tqf8K23', 'moving-objects');
// cases/camera/moving-objects.js

"use strict";

cc.Class({
  "extends": cc.Component,
  properties: {
    tempPrefab: {
      "default": null,
      type: cc.Node
    },
    camera: {
      "default": null,
      type: cc.Node
    },
    root: {
      "default": null,
      type: cc.Node
    },
    moveSpeed: 100,
    nodeCount: 2000,
    _useCamera: true,
    useCamera: {
      get: function get() {
        return this._useCamera;
      },
      set: function set(v) {
        if (this._useCamera === v) return;
        this._useCamera = v;

        if (!CC_EDITOR && this.movingNode) {
          this.movingNode = v ? this.camera : this.root;
          this.camera.x = this.root.x = 0;
          this.moveSpeed = -this.moveSpeed;
        }
      }
    }
  },
  onEnable: function onEnable() {},
  onDisable: function onDisable() {},
  // use this for initialization
  onLoad: function onLoad() {
    console.time('move-objects : onLoad');

    for (var i = 0; i < this.nodeCount; i++) {
      var node = cc.instantiate(this.tempPrefab);
      node.x = (Math.random() - 0.5) * 960;
      node.y = (Math.random() - 0.5) * 640;
      node.parent = this.root;
    }

    this.movingNode = this._useCamera ? this.camera : this.root;
    console.timeEnd('move-objects : onLoad');
  },
  // called every frame, uncomment this function to activate update callback
  update: function update(dt) {
    this.movingNode.x += this.moveSpeed * dt;

    if (this.moveSpeed > 0 && this.movingNode.x > 900 || this.moveSpeed < 0 && this.movingNode.x < -900) {
      this.moveSpeed *= -1;
    }
  },
  useCameraChanged: function useCameraChanged(toggle) {
    this.useCamera = toggle.isChecked;
    this.root.group = this.useCamera ? 'Actor' : 'Default';
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9jYXNlcy9jYW1lcmEvbW92aW5nLW9iamVjdHMuanMiXSwibmFtZXMiOlsiY2MiLCJDbGFzcyIsIkNvbXBvbmVudCIsInByb3BlcnRpZXMiLCJ0ZW1wUHJlZmFiIiwidHlwZSIsIk5vZGUiLCJjYW1lcmEiLCJyb290IiwibW92ZVNwZWVkIiwibm9kZUNvdW50IiwiX3VzZUNhbWVyYSIsInVzZUNhbWVyYSIsImdldCIsInNldCIsInYiLCJDQ19FRElUT1IiLCJtb3ZpbmdOb2RlIiwieCIsIm9uRW5hYmxlIiwib25EaXNhYmxlIiwib25Mb2FkIiwiY29uc29sZSIsInRpbWUiLCJpIiwibm9kZSIsImluc3RhbnRpYXRlIiwiTWF0aCIsInJhbmRvbSIsInkiLCJwYXJlbnQiLCJ0aW1lRW5kIiwidXBkYXRlIiwiZHQiLCJ1c2VDYW1lcmFDaGFuZ2VkIiwidG9nZ2xlIiwiaXNDaGVja2VkIiwiZ3JvdXAiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUFBLEVBQUUsQ0FBQ0MsS0FBSCxDQUFTO0VBQ0wsV0FBU0QsRUFBRSxDQUFDRSxTQURQO0VBR0xDLFVBQVUsRUFBRTtJQUNSQyxVQUFVLEVBQUU7TUFDUixXQUFTLElBREQ7TUFFUkMsSUFBSSxFQUFFTCxFQUFFLENBQUNNO0lBRkQsQ0FESjtJQUtSQyxNQUFNLEVBQUU7TUFDSixXQUFTLElBREw7TUFFSkYsSUFBSSxFQUFFTCxFQUFFLENBQUNNO0lBRkwsQ0FMQTtJQVNSRSxJQUFJLEVBQUU7TUFDRixXQUFTLElBRFA7TUFFRkgsSUFBSSxFQUFFTCxFQUFFLENBQUNNO0lBRlAsQ0FURTtJQWNSRyxTQUFTLEVBQUUsR0FkSDtJQWVSQyxTQUFTLEVBQUUsSUFmSDtJQWlCUkMsVUFBVSxFQUFFLElBakJKO0lBa0JSQyxTQUFTLEVBQUU7TUFDUEMsR0FBRyxFQUFFLGVBQVk7UUFDYixPQUFPLEtBQUtGLFVBQVo7TUFDSCxDQUhNO01BSVBHLEdBQUcsRUFBRSxhQUFVQyxDQUFWLEVBQWE7UUFDZCxJQUFJLEtBQUtKLFVBQUwsS0FBb0JJLENBQXhCLEVBQTJCO1FBRTNCLEtBQUtKLFVBQUwsR0FBa0JJLENBQWxCOztRQUVBLElBQUksQ0FBQ0MsU0FBRCxJQUFjLEtBQUtDLFVBQXZCLEVBQW1DO1VBQy9CLEtBQUtBLFVBQUwsR0FBa0JGLENBQUMsR0FBRyxLQUFLUixNQUFSLEdBQWlCLEtBQUtDLElBQXpDO1VBQ0EsS0FBS0QsTUFBTCxDQUFZVyxDQUFaLEdBQWdCLEtBQUtWLElBQUwsQ0FBVVUsQ0FBVixHQUFjLENBQTlCO1VBQ0EsS0FBS1QsU0FBTCxHQUFpQixDQUFDLEtBQUtBLFNBQXZCO1FBQ0g7TUFDSjtJQWRNO0VBbEJILENBSFA7RUF1Q0xVLFFBQVEsRUFBRSxvQkFBWSxDQUNyQixDQXhDSTtFQTBDTEMsU0FBUyxFQUFFLHFCQUFZLENBQ3RCLENBM0NJO0VBNkNMO0VBQ0FDLE1BQU0sRUFBRSxrQkFBWTtJQUNoQkMsT0FBTyxDQUFDQyxJQUFSLENBQWEsdUJBQWI7O0lBRUEsS0FBSyxJQUFJQyxDQUFDLEdBQUcsQ0FBYixFQUFnQkEsQ0FBQyxHQUFHLEtBQUtkLFNBQXpCLEVBQW9DYyxDQUFDLEVBQXJDLEVBQXlDO01BQ3JDLElBQUlDLElBQUksR0FBR3pCLEVBQUUsQ0FBQzBCLFdBQUgsQ0FBZSxLQUFLdEIsVUFBcEIsQ0FBWDtNQUNBcUIsSUFBSSxDQUFDUCxDQUFMLEdBQVMsQ0FBQ1MsSUFBSSxDQUFDQyxNQUFMLEtBQWdCLEdBQWpCLElBQXdCLEdBQWpDO01BQ0FILElBQUksQ0FBQ0ksQ0FBTCxHQUFTLENBQUNGLElBQUksQ0FBQ0MsTUFBTCxLQUFnQixHQUFqQixJQUF3QixHQUFqQztNQUNBSCxJQUFJLENBQUNLLE1BQUwsR0FBYyxLQUFLdEIsSUFBbkI7SUFDSDs7SUFFRCxLQUFLUyxVQUFMLEdBQWtCLEtBQUtOLFVBQUwsR0FBa0IsS0FBS0osTUFBdkIsR0FBZ0MsS0FBS0MsSUFBdkQ7SUFFQWMsT0FBTyxDQUFDUyxPQUFSLENBQWdCLHVCQUFoQjtFQUNILENBM0RJO0VBNkRMO0VBQ0FDLE1BQU0sRUFBRSxnQkFBVUMsRUFBVixFQUFjO0lBQ2xCLEtBQUtoQixVQUFMLENBQWdCQyxDQUFoQixJQUFxQixLQUFLVCxTQUFMLEdBQWlCd0IsRUFBdEM7O0lBQ0EsSUFBSyxLQUFLeEIsU0FBTCxHQUFpQixDQUFqQixJQUFzQixLQUFLUSxVQUFMLENBQWdCQyxDQUFoQixHQUFvQixHQUEzQyxJQUNDLEtBQUtULFNBQUwsR0FBaUIsQ0FBakIsSUFBc0IsS0FBS1EsVUFBTCxDQUFnQkMsQ0FBaEIsR0FBb0IsQ0FBQyxHQURoRCxFQUNzRDtNQUNsRCxLQUFLVCxTQUFMLElBQWtCLENBQUMsQ0FBbkI7SUFDSDtFQUNKLENBcEVJO0VBc0VMeUIsZ0JBQWdCLEVBQUUsMEJBQVVDLE1BQVYsRUFBa0I7SUFDaEMsS0FBS3ZCLFNBQUwsR0FBaUJ1QixNQUFNLENBQUNDLFNBQXhCO0lBQ0EsS0FBSzVCLElBQUwsQ0FBVTZCLEtBQVYsR0FBa0IsS0FBS3pCLFNBQUwsR0FBaUIsT0FBakIsR0FBMkIsU0FBN0M7RUFDSDtBQXpFSSxDQUFUIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJjYy5DbGFzcyh7XG4gICAgZXh0ZW5kczogY2MuQ29tcG9uZW50LFxuXG4gICAgcHJvcGVydGllczoge1xuICAgICAgICB0ZW1wUHJlZmFiOiB7XG4gICAgICAgICAgICBkZWZhdWx0OiBudWxsLFxuICAgICAgICAgICAgdHlwZTogY2MuTm9kZVxuICAgICAgICB9LFxuICAgICAgICBjYW1lcmE6IHtcbiAgICAgICAgICAgIGRlZmF1bHQ6IG51bGwsXG4gICAgICAgICAgICB0eXBlOiBjYy5Ob2RlXG4gICAgICAgIH0sXG4gICAgICAgIHJvb3Q6IHtcbiAgICAgICAgICAgIGRlZmF1bHQ6IG51bGwsXG4gICAgICAgICAgICB0eXBlOiBjYy5Ob2RlXG4gICAgICAgIH0sXG5cbiAgICAgICAgbW92ZVNwZWVkOiAxMDAsXG4gICAgICAgIG5vZGVDb3VudDogMjAwMCxcblxuICAgICAgICBfdXNlQ2FtZXJhOiB0cnVlLFxuICAgICAgICB1c2VDYW1lcmE6IHtcbiAgICAgICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLl91c2VDYW1lcmE7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgc2V0OiBmdW5jdGlvbiAodikge1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLl91c2VDYW1lcmEgPT09IHYpIHJldHVybjtcblxuICAgICAgICAgICAgICAgIHRoaXMuX3VzZUNhbWVyYSA9IHY7XG5cbiAgICAgICAgICAgICAgICBpZiAoIUNDX0VESVRPUiAmJiB0aGlzLm1vdmluZ05vZGUpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5tb3ZpbmdOb2RlID0gdiA/IHRoaXMuY2FtZXJhIDogdGhpcy5yb290O1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmNhbWVyYS54ID0gdGhpcy5yb290LnggPSAwO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLm1vdmVTcGVlZCA9IC10aGlzLm1vdmVTcGVlZDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9LFxuXG4gICAgb25FbmFibGU6IGZ1bmN0aW9uICgpIHtcbiAgICB9LFxuXG4gICAgb25EaXNhYmxlOiBmdW5jdGlvbiAoKSB7XG4gICAgfSxcblxuICAgIC8vIHVzZSB0aGlzIGZvciBpbml0aWFsaXphdGlvblxuICAgIG9uTG9hZDogZnVuY3Rpb24gKCkge1xuICAgICAgICBjb25zb2xlLnRpbWUoJ21vdmUtb2JqZWN0cyA6IG9uTG9hZCcpXG5cbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLm5vZGVDb3VudDsgaSsrKSB7XG4gICAgICAgICAgICB2YXIgbm9kZSA9IGNjLmluc3RhbnRpYXRlKHRoaXMudGVtcFByZWZhYik7XG4gICAgICAgICAgICBub2RlLnggPSAoTWF0aC5yYW5kb20oKSAtIDAuNSkgKiA5NjA7XG4gICAgICAgICAgICBub2RlLnkgPSAoTWF0aC5yYW5kb20oKSAtIDAuNSkgKiA2NDA7XG4gICAgICAgICAgICBub2RlLnBhcmVudCA9IHRoaXMucm9vdDtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMubW92aW5nTm9kZSA9IHRoaXMuX3VzZUNhbWVyYSA/IHRoaXMuY2FtZXJhIDogdGhpcy5yb290O1xuICAgICAgICBcbiAgICAgICAgY29uc29sZS50aW1lRW5kKCdtb3ZlLW9iamVjdHMgOiBvbkxvYWQnKVxuICAgIH0sXG4gICAgXG4gICAgLy8gY2FsbGVkIGV2ZXJ5IGZyYW1lLCB1bmNvbW1lbnQgdGhpcyBmdW5jdGlvbiB0byBhY3RpdmF0ZSB1cGRhdGUgY2FsbGJhY2tcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIChkdCkge1xuICAgICAgICB0aGlzLm1vdmluZ05vZGUueCArPSB0aGlzLm1vdmVTcGVlZCAqIGR0O1xuICAgICAgICBpZiAoKHRoaXMubW92ZVNwZWVkID4gMCAmJiB0aGlzLm1vdmluZ05vZGUueCA+IDkwMCkgfHwgXG4gICAgICAgICAgICAodGhpcy5tb3ZlU3BlZWQgPCAwICYmIHRoaXMubW92aW5nTm9kZS54IDwgLTkwMCkpIHtcbiAgICAgICAgICAgIHRoaXMubW92ZVNwZWVkICo9IC0xO1xuICAgICAgICB9XG4gICAgfSxcblxuICAgIHVzZUNhbWVyYUNoYW5nZWQ6IGZ1bmN0aW9uICh0b2dnbGUpIHtcbiAgICAgICAgdGhpcy51c2VDYW1lcmEgPSB0b2dnbGUuaXNDaGVja2VkO1xuICAgICAgICB0aGlzLnJvb3QuZ3JvdXAgPSB0aGlzLnVzZUNhbWVyYSA/ICdBY3RvcicgOiAnRGVmYXVsdCc7XG4gICAgfSxcbn0pO1xuIl19