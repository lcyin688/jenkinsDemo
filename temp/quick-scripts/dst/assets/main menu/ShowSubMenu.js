
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/main menu/ShowSubMenu.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '19224TiKDhPbZ8/hTkQA7ey', 'ShowSubMenu');
// main menu/ShowSubMenu.js

"use strict";

cc.Class({
  "extends": cc.Component,
  toggle: function toggle() {
    var shown = this.node.y < 0;
    var animation = this.getComponent(cc.Animation);
    animation.play(shown ? 'hide menu' : 'show menu');
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9tYWluIG1lbnUvU2hvd1N1Yk1lbnUuanMiXSwibmFtZXMiOlsiY2MiLCJDbGFzcyIsIkNvbXBvbmVudCIsInRvZ2dsZSIsInNob3duIiwibm9kZSIsInkiLCJhbmltYXRpb24iLCJnZXRDb21wb25lbnQiLCJBbmltYXRpb24iLCJwbGF5Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBQSxFQUFFLENBQUNDLEtBQUgsQ0FBUztFQUNMLFdBQVNELEVBQUUsQ0FBQ0UsU0FEUDtFQUdMQyxNQUhLLG9CQUdLO0lBQ04sSUFBSUMsS0FBSyxHQUFHLEtBQUtDLElBQUwsQ0FBVUMsQ0FBVixHQUFjLENBQTFCO0lBQ0EsSUFBSUMsU0FBUyxHQUFHLEtBQUtDLFlBQUwsQ0FBa0JSLEVBQUUsQ0FBQ1MsU0FBckIsQ0FBaEI7SUFDQUYsU0FBUyxDQUFDRyxJQUFWLENBQWVOLEtBQUssR0FBRyxXQUFILEdBQWlCLFdBQXJDO0VBQ0g7QUFQSSxDQUFUIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJjYy5DbGFzcyh7XG4gICAgZXh0ZW5kczogY2MuQ29tcG9uZW50LFxuXG4gICAgdG9nZ2xlICgpIHtcbiAgICAgICAgbGV0IHNob3duID0gdGhpcy5ub2RlLnkgPCAwO1xuICAgICAgICBsZXQgYW5pbWF0aW9uID0gdGhpcy5nZXRDb21wb25lbnQoY2MuQW5pbWF0aW9uKTtcbiAgICAgICAgYW5pbWF0aW9uLnBsYXkoc2hvd24gPyAnaGlkZSBtZW51JyA6ICdzaG93IG1lbnUnKTtcbiAgICB9XG59KTtcbiJdfQ==