
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/cases/collider/Utils/SimpleMotion.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'fde33rWt81MvZWO7QQ3jv3j', 'SimpleMotion');
// cases/collider/Utils/SimpleMotion.js

"use strict";

cc.Class({
  "extends": cc.Component,
  properties: {
    moveSpeed: 100,
    rotationSpeed: 90
  },
  // use this for initialization
  onLoad: function onLoad() {},
  // called every frame, uncomment this function to activate update callback
  update: function update(dt) {
    this.node.x += dt * this.moveSpeed;
    this.node.angle += dt * this.rotationSpeed;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9jYXNlcy9jb2xsaWRlci9VdGlscy9TaW1wbGVNb3Rpb24uanMiXSwibmFtZXMiOlsiY2MiLCJDbGFzcyIsIkNvbXBvbmVudCIsInByb3BlcnRpZXMiLCJtb3ZlU3BlZWQiLCJyb3RhdGlvblNwZWVkIiwib25Mb2FkIiwidXBkYXRlIiwiZHQiLCJub2RlIiwieCIsImFuZ2xlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBQSxFQUFFLENBQUNDLEtBQUgsQ0FBUztFQUNMLFdBQVNELEVBQUUsQ0FBQ0UsU0FEUDtFQUdMQyxVQUFVLEVBQUU7SUFDUkMsU0FBUyxFQUFFLEdBREg7SUFFUkMsYUFBYSxFQUFFO0VBRlAsQ0FIUDtFQVFMO0VBQ0FDLE1BQU0sRUFBRSxrQkFBWSxDQUVuQixDQVhJO0VBYUw7RUFDQUMsTUFBTSxFQUFFLGdCQUFVQyxFQUFWLEVBQWM7SUFDbEIsS0FBS0MsSUFBTCxDQUFVQyxDQUFWLElBQWVGLEVBQUUsR0FBRyxLQUFLSixTQUF6QjtJQUNBLEtBQUtLLElBQUwsQ0FBVUUsS0FBVixJQUFtQkgsRUFBRSxHQUFHLEtBQUtILGFBQTdCO0VBQ0g7QUFqQkksQ0FBVCIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiY2MuQ2xhc3Moe1xuICAgIGV4dGVuZHM6IGNjLkNvbXBvbmVudCxcblxuICAgIHByb3BlcnRpZXM6IHtcbiAgICAgICAgbW92ZVNwZWVkOiAxMDAsXG4gICAgICAgIHJvdGF0aW9uU3BlZWQ6IDkwXG4gICAgfSxcblxuICAgIC8vIHVzZSB0aGlzIGZvciBpbml0aWFsaXphdGlvblxuICAgIG9uTG9hZDogZnVuY3Rpb24gKCkge1xuXG4gICAgfSxcblxuICAgIC8vIGNhbGxlZCBldmVyeSBmcmFtZSwgdW5jb21tZW50IHRoaXMgZnVuY3Rpb24gdG8gYWN0aXZhdGUgdXBkYXRlIGNhbGxiYWNrXG4gICAgdXBkYXRlOiBmdW5jdGlvbiAoZHQpIHtcbiAgICAgICAgdGhpcy5ub2RlLnggKz0gZHQgKiB0aGlzLm1vdmVTcGVlZDtcbiAgICAgICAgdGhpcy5ub2RlLmFuZ2xlICs9IGR0ICogdGhpcy5yb3RhdGlvblNwZWVkO1xuICAgIH0sXG59KTtcbiJdfQ==