
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/cases/02_ui/03_button/ButtonTransition/ButtonTransition.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'd6525ck4GdCHbg0bUMMfDYY', 'ButtonTransition');
// cases/02_ui/03_button/ButtonTransition/ButtonTransition.js

"use strict";

cc.Class({
  "extends": cc.Component,
  properties: {
    btn: cc.Button
  },
  onInteractable: function onInteractable(event) {
    this.btn.interactable = event.isChecked;
  },
  onColorTransition: function onColorTransition(event) {
    this.btn.transition = cc.Button.Transition.COLOR;
  },
  onSpriteTransition: function onSpriteTransition(event) {
    this.btn.transition = cc.Button.Transition.SPRITE;
  },
  onScaleTransition: function onScaleTransition(event) {
    this.btn.transition = cc.Button.Transition.SCALE;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9jYXNlcy8wMl91aS8wM19idXR0b24vQnV0dG9uVHJhbnNpdGlvbi9CdXR0b25UcmFuc2l0aW9uLmpzIl0sIm5hbWVzIjpbImNjIiwiQ2xhc3MiLCJDb21wb25lbnQiLCJwcm9wZXJ0aWVzIiwiYnRuIiwiQnV0dG9uIiwib25JbnRlcmFjdGFibGUiLCJldmVudCIsImludGVyYWN0YWJsZSIsImlzQ2hlY2tlZCIsIm9uQ29sb3JUcmFuc2l0aW9uIiwidHJhbnNpdGlvbiIsIlRyYW5zaXRpb24iLCJDT0xPUiIsIm9uU3ByaXRlVHJhbnNpdGlvbiIsIlNQUklURSIsIm9uU2NhbGVUcmFuc2l0aW9uIiwiU0NBTEUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUFBLEVBQUUsQ0FBQ0MsS0FBSCxDQUFTO0VBQ0wsV0FBU0QsRUFBRSxDQUFDRSxTQURQO0VBR0xDLFVBQVUsRUFBRTtJQUNSQyxHQUFHLEVBQUVKLEVBQUUsQ0FBQ0s7RUFEQSxDQUhQO0VBT0xDLGNBUEssMEJBT1dDLEtBUFgsRUFPa0I7SUFDbkIsS0FBS0gsR0FBTCxDQUFTSSxZQUFULEdBQXdCRCxLQUFLLENBQUNFLFNBQTlCO0VBQ0gsQ0FUSTtFQVdMQyxpQkFYSyw2QkFXY0gsS0FYZCxFQVdxQjtJQUN0QixLQUFLSCxHQUFMLENBQVNPLFVBQVQsR0FBc0JYLEVBQUUsQ0FBQ0ssTUFBSCxDQUFVTyxVQUFWLENBQXFCQyxLQUEzQztFQUNILENBYkk7RUFlTEMsa0JBZkssOEJBZWVQLEtBZmYsRUFlc0I7SUFDdkIsS0FBS0gsR0FBTCxDQUFTTyxVQUFULEdBQXNCWCxFQUFFLENBQUNLLE1BQUgsQ0FBVU8sVUFBVixDQUFxQkcsTUFBM0M7RUFDSCxDQWpCSTtFQW1CTEMsaUJBbkJLLDZCQW1CY1QsS0FuQmQsRUFtQnFCO0lBQ3RCLEtBQUtILEdBQUwsQ0FBU08sVUFBVCxHQUFzQlgsRUFBRSxDQUFDSyxNQUFILENBQVVPLFVBQVYsQ0FBcUJLLEtBQTNDO0VBQ0g7QUFyQkksQ0FBVCIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiY2MuQ2xhc3Moe1xuICAgIGV4dGVuZHM6IGNjLkNvbXBvbmVudCxcblxuICAgIHByb3BlcnRpZXM6IHtcbiAgICAgICAgYnRuOiBjYy5CdXR0b24sXG4gICAgfSxcbiAgICBcbiAgICBvbkludGVyYWN0YWJsZSAoZXZlbnQpIHtcbiAgICAgICAgdGhpcy5idG4uaW50ZXJhY3RhYmxlID0gZXZlbnQuaXNDaGVja2VkO1xuICAgIH0sXG5cbiAgICBvbkNvbG9yVHJhbnNpdGlvbiAoZXZlbnQpIHtcbiAgICAgICAgdGhpcy5idG4udHJhbnNpdGlvbiA9IGNjLkJ1dHRvbi5UcmFuc2l0aW9uLkNPTE9SO1xuICAgIH0sXG5cbiAgICBvblNwcml0ZVRyYW5zaXRpb24gKGV2ZW50KSB7XG4gICAgICAgIHRoaXMuYnRuLnRyYW5zaXRpb24gPSBjYy5CdXR0b24uVHJhbnNpdGlvbi5TUFJJVEU7XG4gICAgfSxcblxuICAgIG9uU2NhbGVUcmFuc2l0aW9uIChldmVudCkge1xuICAgICAgICB0aGlzLmJ0bi50cmFuc2l0aW9uID0gY2MuQnV0dG9uLlRyYW5zaXRpb24uU0NBTEU7XG4gICAgfSxcbn0pO1xuIl19