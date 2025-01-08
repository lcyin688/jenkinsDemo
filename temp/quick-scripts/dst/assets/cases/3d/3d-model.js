
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/cases/3d/3d-model.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '5f96dFONrhFoosfPR7q5e94', '3d-model');
// cases/3d/3d-model.js

"use strict";

cc.Class({
  "extends": cc.Component,
  properties: {
    playingIndex: 0
  },
  start: function start() {
    this.playNextAnimation();
  },
  playNextAnimation: function playNextAnimation() {
    var animation = this.getComponent(cc.Animation);
    var clips = animation.getClips();

    if (!clips[this.playingIndex]) {
      this.playingIndex = 0;
    }

    animation.play(clips[this.playingIndex].name);
    this.playingIndex++;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9jYXNlcy8zZC8zZC1tb2RlbC5qcyJdLCJuYW1lcyI6WyJjYyIsIkNsYXNzIiwiQ29tcG9uZW50IiwicHJvcGVydGllcyIsInBsYXlpbmdJbmRleCIsInN0YXJ0IiwicGxheU5leHRBbmltYXRpb24iLCJhbmltYXRpb24iLCJnZXRDb21wb25lbnQiLCJBbmltYXRpb24iLCJjbGlwcyIsImdldENsaXBzIiwicGxheSIsIm5hbWUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUFBLEVBQUUsQ0FBQ0MsS0FBSCxDQUFTO0VBQ0wsV0FBU0QsRUFBRSxDQUFDRSxTQURQO0VBR0xDLFVBQVUsRUFBRTtJQUNSQyxZQUFZLEVBQUU7RUFETixDQUhQO0VBT0xDLEtBUEssbUJBT0k7SUFDTCxLQUFLQyxpQkFBTDtFQUNILENBVEk7RUFXTEEsaUJBWEssK0JBV2dCO0lBQ2pCLElBQUlDLFNBQVMsR0FBRyxLQUFLQyxZQUFMLENBQWtCUixFQUFFLENBQUNTLFNBQXJCLENBQWhCO0lBQ0EsSUFBSUMsS0FBSyxHQUFHSCxTQUFTLENBQUNJLFFBQVYsRUFBWjs7SUFDQSxJQUFJLENBQUNELEtBQUssQ0FBQyxLQUFLTixZQUFOLENBQVYsRUFBK0I7TUFDM0IsS0FBS0EsWUFBTCxHQUFvQixDQUFwQjtJQUNIOztJQUVERyxTQUFTLENBQUNLLElBQVYsQ0FBZUYsS0FBSyxDQUFDLEtBQUtOLFlBQU4sQ0FBTCxDQUF5QlMsSUFBeEM7SUFDQSxLQUFLVCxZQUFMO0VBQ0g7QUFwQkksQ0FBVCIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiY2MuQ2xhc3Moe1xuICAgIGV4dGVuZHM6IGNjLkNvbXBvbmVudCxcblxuICAgIHByb3BlcnRpZXM6IHtcbiAgICAgICAgcGxheWluZ0luZGV4OiAwLFxuICAgIH0sXG5cbiAgICBzdGFydCAoKSB7XG4gICAgICAgIHRoaXMucGxheU5leHRBbmltYXRpb24oKTtcbiAgICB9LFxuXG4gICAgcGxheU5leHRBbmltYXRpb24gKCkge1xuICAgICAgICBsZXQgYW5pbWF0aW9uID0gdGhpcy5nZXRDb21wb25lbnQoY2MuQW5pbWF0aW9uKTtcbiAgICAgICAgbGV0IGNsaXBzID0gYW5pbWF0aW9uLmdldENsaXBzKCk7XG4gICAgICAgIGlmICghY2xpcHNbdGhpcy5wbGF5aW5nSW5kZXhdKSB7XG4gICAgICAgICAgICB0aGlzLnBsYXlpbmdJbmRleCA9IDA7XG4gICAgICAgIH1cblxuICAgICAgICBhbmltYXRpb24ucGxheShjbGlwc1t0aGlzLnBsYXlpbmdJbmRleF0ubmFtZSk7XG4gICAgICAgIHRoaXMucGxheWluZ0luZGV4Kys7XG4gICAgfVxuXG59KTtcbiJdfQ==