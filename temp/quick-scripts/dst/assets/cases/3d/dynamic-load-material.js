
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/cases/3d/dynamic-load-material.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '93268zvFsZAKpSHQw+2ixa3', 'dynamic-load-material');
// cases/3d/dynamic-load-material.js

"use strict";

cc.Class({
  "extends": cc.Component,
  properties: {
    meshRenderer: cc.MeshRenderer,
    _material: cc.Material
  },
  // LIFE-CYCLE CALLBACKS:
  // onLoad () {},
  start: function start() {
    var _this = this;

    this.scheduleOnce(function () {
      cc.resources.load('materials/dynamic-load-material', cc.Material, function (err, material) {
        if (err) {
          cc.error(err);
          return;
        }

        _this._material = material.addRef();

        _this.meshRenderer.setMaterial(0, material);
      });
    }, 1);
  },
  onDestroy: function onDestroy() {
    this._material && this._material.decRef();
    this._material = null;
  } // update (dt) {},

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9jYXNlcy8zZC9keW5hbWljLWxvYWQtbWF0ZXJpYWwuanMiXSwibmFtZXMiOlsiY2MiLCJDbGFzcyIsIkNvbXBvbmVudCIsInByb3BlcnRpZXMiLCJtZXNoUmVuZGVyZXIiLCJNZXNoUmVuZGVyZXIiLCJfbWF0ZXJpYWwiLCJNYXRlcmlhbCIsInN0YXJ0Iiwic2NoZWR1bGVPbmNlIiwicmVzb3VyY2VzIiwibG9hZCIsImVyciIsIm1hdGVyaWFsIiwiZXJyb3IiLCJhZGRSZWYiLCJzZXRNYXRlcmlhbCIsIm9uRGVzdHJveSIsImRlY1JlZiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQUEsRUFBRSxDQUFDQyxLQUFILENBQVM7RUFDTCxXQUFTRCxFQUFFLENBQUNFLFNBRFA7RUFHTEMsVUFBVSxFQUFFO0lBQ1JDLFlBQVksRUFBRUosRUFBRSxDQUFDSyxZQURUO0lBRVJDLFNBQVMsRUFBRU4sRUFBRSxDQUFDTztFQUZOLENBSFA7RUFRTDtFQUVBO0VBRUFDLEtBWkssbUJBWUk7SUFBQTs7SUFDTCxLQUFLQyxZQUFMLENBQWtCLFlBQU07TUFDcEJULEVBQUUsQ0FBQ1UsU0FBSCxDQUFhQyxJQUFiLENBQWtCLGlDQUFsQixFQUFxRFgsRUFBRSxDQUFDTyxRQUF4RCxFQUFrRSxVQUFDSyxHQUFELEVBQU1DLFFBQU4sRUFBbUI7UUFDakYsSUFBSUQsR0FBSixFQUFTO1VBQ0xaLEVBQUUsQ0FBQ2MsS0FBSCxDQUFTRixHQUFUO1VBQ0E7UUFDSDs7UUFDRCxLQUFJLENBQUNOLFNBQUwsR0FBaUJPLFFBQVEsQ0FBQ0UsTUFBVCxFQUFqQjs7UUFDQSxLQUFJLENBQUNYLFlBQUwsQ0FBa0JZLFdBQWxCLENBQThCLENBQTlCLEVBQWlDSCxRQUFqQztNQUNILENBUEQ7SUFRSCxDQVRELEVBU0csQ0FUSDtFQVVILENBdkJJO0VBeUJMSSxTQXpCSyx1QkF5QlE7SUFDVCxLQUFLWCxTQUFMLElBQWtCLEtBQUtBLFNBQUwsQ0FBZVksTUFBZixFQUFsQjtJQUNBLEtBQUtaLFNBQUwsR0FBaUIsSUFBakI7RUFDSCxDQTVCSSxDQTZCTDs7QUE3QkssQ0FBVCIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiY2MuQ2xhc3Moe1xuICAgIGV4dGVuZHM6IGNjLkNvbXBvbmVudCxcblxuICAgIHByb3BlcnRpZXM6IHtcbiAgICAgICAgbWVzaFJlbmRlcmVyOiBjYy5NZXNoUmVuZGVyZXIsXG4gICAgICAgIF9tYXRlcmlhbDogY2MuTWF0ZXJpYWwsXG4gICAgfSxcblxuICAgIC8vIExJRkUtQ1lDTEUgQ0FMTEJBQ0tTOlxuXG4gICAgLy8gb25Mb2FkICgpIHt9LFxuXG4gICAgc3RhcnQgKCkge1xuICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XG4gICAgICAgICAgICBjYy5yZXNvdXJjZXMubG9hZCgnbWF0ZXJpYWxzL2R5bmFtaWMtbG9hZC1tYXRlcmlhbCcsIGNjLk1hdGVyaWFsLCAoZXJyLCBtYXRlcmlhbCkgPT4ge1xuICAgICAgICAgICAgICAgIGlmIChlcnIpIHtcbiAgICAgICAgICAgICAgICAgICAgY2MuZXJyb3IoZXJyKTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB0aGlzLl9tYXRlcmlhbCA9IG1hdGVyaWFsLmFkZFJlZigpO1xuICAgICAgICAgICAgICAgIHRoaXMubWVzaFJlbmRlcmVyLnNldE1hdGVyaWFsKDAsIG1hdGVyaWFsKTtcbiAgICAgICAgICAgIH0pXG4gICAgICAgIH0sIDEpO1xuICAgIH0sXG5cbiAgICBvbkRlc3Ryb3kgKCkge1xuICAgICAgICB0aGlzLl9tYXRlcmlhbCAmJiB0aGlzLl9tYXRlcmlhbC5kZWNSZWYoKTtcbiAgICAgICAgdGhpcy5fbWF0ZXJpYWwgPSBudWxsO1xuICAgIH1cbiAgICAvLyB1cGRhdGUgKGR0KSB7fSxcbn0pO1xuIl19