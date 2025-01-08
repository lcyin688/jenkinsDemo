
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/cases/collider/Utils/Wall.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '1a279oXNoxFFI516fswAbVo', 'Wall');
// cases/collider/Utils/Wall.js

"use strict";

var WallType = cc.Enum({
  Left: 0,
  Right: 1,
  Top: 2,
  Bottom: 3
});
cc.Class({
  "extends": cc.Component,
  properties: {
    type: {
      "default": WallType.Left,
      type: WallType
    },
    width: 5
  },
  // use this for initialization
  start: function start() {
    var collider = this.getComponent(cc.BoxCollider);

    if (!collider) {
      return;
    }

    var node = this.node;
    var type = this.type;
    var width = cc.winSize.width;
    var height = cc.winSize.height;
    var wallWidth = this.width;

    if (type === WallType.Left) {
      node.height = height;
      node.width = wallWidth;
      node.x = 0;
      node.y = height / 2;
    } else if (type === WallType.Right) {
      node.height = height;
      node.width = wallWidth;
      node.x = width;
      node.y = height / 2;
    } else if (type === WallType.Top) {
      node.width = width;
      node.height = wallWidth;
      node.x = width / 2;
      node.y = height;
    } else if (type === WallType.Bottom) {
      node.width = width;
      node.height = wallWidth;
      node.x = width / 2;
      node.y = 0;
    }

    collider.size = node.getContentSize();
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9jYXNlcy9jb2xsaWRlci9VdGlscy9XYWxsLmpzIl0sIm5hbWVzIjpbIldhbGxUeXBlIiwiY2MiLCJFbnVtIiwiTGVmdCIsIlJpZ2h0IiwiVG9wIiwiQm90dG9tIiwiQ2xhc3MiLCJDb21wb25lbnQiLCJwcm9wZXJ0aWVzIiwidHlwZSIsIndpZHRoIiwic3RhcnQiLCJjb2xsaWRlciIsImdldENvbXBvbmVudCIsIkJveENvbGxpZGVyIiwibm9kZSIsIndpblNpemUiLCJoZWlnaHQiLCJ3YWxsV2lkdGgiLCJ4IiwieSIsInNpemUiLCJnZXRDb250ZW50U2l6ZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxJQUFJQSxRQUFRLEdBQUdDLEVBQUUsQ0FBQ0MsSUFBSCxDQUFRO0VBQ3BCQyxJQUFJLEVBQUUsQ0FEYztFQUVwQkMsS0FBSyxFQUFFLENBRmE7RUFHcEJDLEdBQUcsRUFBRSxDQUhlO0VBSXBCQyxNQUFNLEVBQUU7QUFKWSxDQUFSLENBQWY7QUFPQUwsRUFBRSxDQUFDTSxLQUFILENBQVM7RUFDTCxXQUFTTixFQUFFLENBQUNPLFNBRFA7RUFHTEMsVUFBVSxFQUFFO0lBQ1JDLElBQUksRUFBRTtNQUNGLFdBQVNWLFFBQVEsQ0FBQ0csSUFEaEI7TUFFRk8sSUFBSSxFQUFFVjtJQUZKLENBREU7SUFNUlcsS0FBSyxFQUFFO0VBTkMsQ0FIUDtFQVlMO0VBQ0FDLEtBQUssRUFBRSxpQkFBWTtJQUNmLElBQUlDLFFBQVEsR0FBRyxLQUFLQyxZQUFMLENBQWtCYixFQUFFLENBQUNjLFdBQXJCLENBQWY7O0lBQ0EsSUFBSSxDQUFDRixRQUFMLEVBQWU7TUFDWDtJQUNIOztJQUVELElBQUlHLElBQUksR0FBRyxLQUFLQSxJQUFoQjtJQUNBLElBQUlOLElBQUksR0FBRyxLQUFLQSxJQUFoQjtJQUVBLElBQUlDLEtBQUssR0FBR1YsRUFBRSxDQUFDZ0IsT0FBSCxDQUFXTixLQUF2QjtJQUNBLElBQUlPLE1BQU0sR0FBR2pCLEVBQUUsQ0FBQ2dCLE9BQUgsQ0FBV0MsTUFBeEI7SUFFQSxJQUFJQyxTQUFTLEdBQUcsS0FBS1IsS0FBckI7O0lBRUEsSUFBSUQsSUFBSSxLQUFLVixRQUFRLENBQUNHLElBQXRCLEVBQTRCO01BQ3hCYSxJQUFJLENBQUNFLE1BQUwsR0FBY0EsTUFBZDtNQUNBRixJQUFJLENBQUNMLEtBQUwsR0FBYVEsU0FBYjtNQUNBSCxJQUFJLENBQUNJLENBQUwsR0FBUyxDQUFUO01BQ0FKLElBQUksQ0FBQ0ssQ0FBTCxHQUFTSCxNQUFNLEdBQUMsQ0FBaEI7SUFDSCxDQUxELE1BTUssSUFBSVIsSUFBSSxLQUFLVixRQUFRLENBQUNJLEtBQXRCLEVBQTZCO01BQzlCWSxJQUFJLENBQUNFLE1BQUwsR0FBY0EsTUFBZDtNQUNBRixJQUFJLENBQUNMLEtBQUwsR0FBYVEsU0FBYjtNQUNBSCxJQUFJLENBQUNJLENBQUwsR0FBU1QsS0FBVDtNQUNBSyxJQUFJLENBQUNLLENBQUwsR0FBU0gsTUFBTSxHQUFDLENBQWhCO0lBQ0gsQ0FMSSxNQU1BLElBQUlSLElBQUksS0FBS1YsUUFBUSxDQUFDSyxHQUF0QixFQUEyQjtNQUM1QlcsSUFBSSxDQUFDTCxLQUFMLEdBQWFBLEtBQWI7TUFDQUssSUFBSSxDQUFDRSxNQUFMLEdBQWNDLFNBQWQ7TUFDQUgsSUFBSSxDQUFDSSxDQUFMLEdBQVNULEtBQUssR0FBQyxDQUFmO01BQ0FLLElBQUksQ0FBQ0ssQ0FBTCxHQUFTSCxNQUFUO0lBQ0gsQ0FMSSxNQU1BLElBQUlSLElBQUksS0FBS1YsUUFBUSxDQUFDTSxNQUF0QixFQUE4QjtNQUMvQlUsSUFBSSxDQUFDTCxLQUFMLEdBQWFBLEtBQWI7TUFDQUssSUFBSSxDQUFDRSxNQUFMLEdBQWNDLFNBQWQ7TUFDQUgsSUFBSSxDQUFDSSxDQUFMLEdBQVNULEtBQUssR0FBQyxDQUFmO01BQ0FLLElBQUksQ0FBQ0ssQ0FBTCxHQUFTLENBQVQ7SUFDSDs7SUFFRFIsUUFBUSxDQUFDUyxJQUFULEdBQWdCTixJQUFJLENBQUNPLGNBQUwsRUFBaEI7RUFDSDtBQXJESSxDQUFUIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgV2FsbFR5cGUgPSBjYy5FbnVtKHtcbiAgIExlZnQ6IDAsXG4gICBSaWdodDogMSxcbiAgIFRvcDogMixcbiAgIEJvdHRvbTogM1xufSk7XG5cbmNjLkNsYXNzKHtcbiAgICBleHRlbmRzOiBjYy5Db21wb25lbnQsXG5cbiAgICBwcm9wZXJ0aWVzOiB7XG4gICAgICAgIHR5cGU6IHtcbiAgICAgICAgICAgIGRlZmF1bHQ6IFdhbGxUeXBlLkxlZnQsXG4gICAgICAgICAgICB0eXBlOiBXYWxsVHlwZVxuICAgICAgICB9LFxuICAgICAgICBcbiAgICAgICAgd2lkdGg6IDVcbiAgICB9LFxuXG4gICAgLy8gdXNlIHRoaXMgZm9yIGluaXRpYWxpemF0aW9uXG4gICAgc3RhcnQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIGNvbGxpZGVyID0gdGhpcy5nZXRDb21wb25lbnQoY2MuQm94Q29sbGlkZXIpO1xuICAgICAgICBpZiAoIWNvbGxpZGVyKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIHZhciBub2RlID0gdGhpcy5ub2RlO1xuICAgICAgICB2YXIgdHlwZSA9IHRoaXMudHlwZTtcbiAgICAgICAgXG4gICAgICAgIHZhciB3aWR0aCA9IGNjLndpblNpemUud2lkdGg7XG4gICAgICAgIHZhciBoZWlnaHQgPSBjYy53aW5TaXplLmhlaWdodDtcbiAgICAgICAgXG4gICAgICAgIHZhciB3YWxsV2lkdGggPSB0aGlzLndpZHRoO1xuICAgICAgICBcbiAgICAgICAgaWYgKHR5cGUgPT09IFdhbGxUeXBlLkxlZnQpIHtcbiAgICAgICAgICAgIG5vZGUuaGVpZ2h0ID0gaGVpZ2h0O1xuICAgICAgICAgICAgbm9kZS53aWR0aCA9IHdhbGxXaWR0aDtcbiAgICAgICAgICAgIG5vZGUueCA9IDA7XG4gICAgICAgICAgICBub2RlLnkgPSBoZWlnaHQvMjtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmICh0eXBlID09PSBXYWxsVHlwZS5SaWdodCkge1xuICAgICAgICAgICAgbm9kZS5oZWlnaHQgPSBoZWlnaHQ7XG4gICAgICAgICAgICBub2RlLndpZHRoID0gd2FsbFdpZHRoO1xuICAgICAgICAgICAgbm9kZS54ID0gd2lkdGg7XG4gICAgICAgICAgICBub2RlLnkgPSBoZWlnaHQvMjtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmICh0eXBlID09PSBXYWxsVHlwZS5Ub3ApIHtcbiAgICAgICAgICAgIG5vZGUud2lkdGggPSB3aWR0aDtcbiAgICAgICAgICAgIG5vZGUuaGVpZ2h0ID0gd2FsbFdpZHRoO1xuICAgICAgICAgICAgbm9kZS54ID0gd2lkdGgvMjtcbiAgICAgICAgICAgIG5vZGUueSA9IGhlaWdodDtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmICh0eXBlID09PSBXYWxsVHlwZS5Cb3R0b20pIHtcbiAgICAgICAgICAgIG5vZGUud2lkdGggPSB3aWR0aDtcbiAgICAgICAgICAgIG5vZGUuaGVpZ2h0ID0gd2FsbFdpZHRoO1xuICAgICAgICAgICAgbm9kZS54ID0gd2lkdGgvMjtcbiAgICAgICAgICAgIG5vZGUueSA9IDA7XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIGNvbGxpZGVyLnNpemUgPSBub2RlLmdldENvbnRlbnRTaXplKCk7XG4gICAgfVxufSk7XG4iXX0=