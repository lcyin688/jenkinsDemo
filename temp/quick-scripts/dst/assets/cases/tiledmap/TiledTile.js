
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/cases/tiledmap/TiledTile.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'f47ccRZveFP2o2cCRmfZTTo', 'TiledTile');
// cases/tiledmap/TiledTile.js

"use strict";

cc.Class({
  "extends": cc.Component,
  start: function start() {
    var layer = this.getComponent(cc.TiledLayer);
    var tile = layer.getTiledTileAt(0, 22, true);
    var tileNode = tile.node;
    tileNode.runAction(cc.spawn(cc.scaleTo(2, 3, 3), cc.rotateTo(2, 90), cc.moveTo(2, 600, 300)));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9jYXNlcy90aWxlZG1hcC9UaWxlZFRpbGUuanMiXSwibmFtZXMiOlsiY2MiLCJDbGFzcyIsIkNvbXBvbmVudCIsInN0YXJ0IiwibGF5ZXIiLCJnZXRDb21wb25lbnQiLCJUaWxlZExheWVyIiwidGlsZSIsImdldFRpbGVkVGlsZUF0IiwidGlsZU5vZGUiLCJub2RlIiwicnVuQWN0aW9uIiwic3Bhd24iLCJzY2FsZVRvIiwicm90YXRlVG8iLCJtb3ZlVG8iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUFBLEVBQUUsQ0FBQ0MsS0FBSCxDQUFTO0VBQ0wsV0FBU0QsRUFBRSxDQUFDRSxTQURQO0VBR0xDLEtBSEssbUJBR0k7SUFDTCxJQUFJQyxLQUFLLEdBQUcsS0FBS0MsWUFBTCxDQUFrQkwsRUFBRSxDQUFDTSxVQUFyQixDQUFaO0lBQ0EsSUFBSUMsSUFBSSxHQUFHSCxLQUFLLENBQUNJLGNBQU4sQ0FBcUIsQ0FBckIsRUFBd0IsRUFBeEIsRUFBNEIsSUFBNUIsQ0FBWDtJQUNBLElBQUlDLFFBQVEsR0FBR0YsSUFBSSxDQUFDRyxJQUFwQjtJQUNBRCxRQUFRLENBQUNFLFNBQVQsQ0FBbUJYLEVBQUUsQ0FBQ1ksS0FBSCxDQUFTWixFQUFFLENBQUNhLE9BQUgsQ0FBVyxDQUFYLEVBQWMsQ0FBZCxFQUFpQixDQUFqQixDQUFULEVBQThCYixFQUFFLENBQUNjLFFBQUgsQ0FBWSxDQUFaLEVBQWUsRUFBZixDQUE5QixFQUFrRGQsRUFBRSxDQUFDZSxNQUFILENBQVUsQ0FBVixFQUFhLEdBQWIsRUFBa0IsR0FBbEIsQ0FBbEQsQ0FBbkI7RUFDSCxDQVJJLENBVUw7O0FBVkssQ0FBVCIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiY2MuQ2xhc3Moe1xuICAgIGV4dGVuZHM6IGNjLkNvbXBvbmVudCxcblxuICAgIHN0YXJ0ICgpIHtcbiAgICAgICAgdmFyIGxheWVyID0gdGhpcy5nZXRDb21wb25lbnQoY2MuVGlsZWRMYXllcik7XG4gICAgICAgIHZhciB0aWxlID0gbGF5ZXIuZ2V0VGlsZWRUaWxlQXQoMCwgMjIsIHRydWUpO1xuICAgICAgICB2YXIgdGlsZU5vZGUgPSB0aWxlLm5vZGU7XG4gICAgICAgIHRpbGVOb2RlLnJ1bkFjdGlvbihjYy5zcGF3bihjYy5zY2FsZVRvKDIsIDMsIDMpLCBjYy5yb3RhdGVUbygyLCA5MCksIGNjLm1vdmVUbygyLCA2MDAsIDMwMCkpKTtcbiAgICB9LFxuXG4gICAgLy8gdXBkYXRlIChkdCkge30sXG59KTtcbiJdfQ==