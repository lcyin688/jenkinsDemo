
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/cases/3d/rotate.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'b8182lpDXBKXKHB4KDgd7AY', 'rotate');
// cases/3d/rotate.js

"use strict";

cc.Class({
  "extends": cc.Component,
  update: function update() {
    this.node.eulerAngles = cc.v3(0, Date.now() / 10, 0);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9jYXNlcy8zZC9yb3RhdGUuanMiXSwibmFtZXMiOlsiY2MiLCJDbGFzcyIsIkNvbXBvbmVudCIsInVwZGF0ZSIsIm5vZGUiLCJldWxlckFuZ2xlcyIsInYzIiwiRGF0ZSIsIm5vdyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQUEsRUFBRSxDQUFDQyxLQUFILENBQVM7RUFDTCxXQUFTRCxFQUFFLENBQUNFLFNBRFA7RUFHTEMsTUFISyxvQkFHSztJQUNOLEtBQUtDLElBQUwsQ0FBVUMsV0FBVixHQUF3QkwsRUFBRSxDQUFDTSxFQUFILENBQU0sQ0FBTixFQUFTQyxJQUFJLENBQUNDLEdBQUwsS0FBYSxFQUF0QixFQUEwQixDQUExQixDQUF4QjtFQUNIO0FBTEksQ0FBVCIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiY2MuQ2xhc3Moe1xuICAgIGV4dGVuZHM6IGNjLkNvbXBvbmVudCxcblxuICAgIHVwZGF0ZSAoKSB7XG4gICAgICAgIHRoaXMubm9kZS5ldWxlckFuZ2xlcyA9IGNjLnYzKDAsIERhdGUubm93KCkgLyAxMCwgMCk7XG4gICAgfSxcbn0pO1xuIl19