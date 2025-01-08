
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/cases/05_scripting/11_pool/NodeGenerator.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'c2149G/5j1JIKd2GGzQfS72', 'NodeGenerator');
// cases/05_scripting/11_pool/NodeGenerator.js

"use strict";

cc.Class({
  "extends": cc.Component,
  properties: {
    prefab: cc.Prefab,
    hint: cc.Label,
    regionOrigin: cc.Vec2,
    regionSize: cc.Size
  },
  // use this for initialization
  onLoad: function onLoad() {
    this.schedule(this.generateNode, 2);
    this._pool = new cc.NodePool('PoolHandler');
    this._count = 0;
  },
  generateNode: function generateNode() {
    var monster = this._pool.get();

    if (!monster) {
      monster = cc.instantiate(this.prefab);
      this._count++;
      this.hint.string = 'Node Created: ' + this._count; // Add pool handler component which will control the touch event

      monster.addComponent('PoolHandler');
    }

    monster.x = this.regionOrigin.x + Math.floor(Math.random() * this.regionSize.width);
    monster.y = this.regionOrigin.y + Math.floor(Math.random() * this.regionSize.height);
    var angle = Math.random() * Math.PI * 2;
    var dx = 500 * Math.cos(angle);
    var dy = 500 * Math.sin(angle);
    monster.runAction(cc.sequence(cc.moveBy(5, dx, dy), cc.callFunc(this.removeNode, this, monster)));
    this.node.addChild(monster);
  },
  removeNode: function removeNode(sender, monster) {
    this._pool.put(monster);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9jYXNlcy8wNV9zY3JpcHRpbmcvMTFfcG9vbC9Ob2RlR2VuZXJhdG9yLmpzIl0sIm5hbWVzIjpbImNjIiwiQ2xhc3MiLCJDb21wb25lbnQiLCJwcm9wZXJ0aWVzIiwicHJlZmFiIiwiUHJlZmFiIiwiaGludCIsIkxhYmVsIiwicmVnaW9uT3JpZ2luIiwiVmVjMiIsInJlZ2lvblNpemUiLCJTaXplIiwib25Mb2FkIiwic2NoZWR1bGUiLCJnZW5lcmF0ZU5vZGUiLCJfcG9vbCIsIk5vZGVQb29sIiwiX2NvdW50IiwibW9uc3RlciIsImdldCIsImluc3RhbnRpYXRlIiwic3RyaW5nIiwiYWRkQ29tcG9uZW50IiwieCIsIk1hdGgiLCJmbG9vciIsInJhbmRvbSIsIndpZHRoIiwieSIsImhlaWdodCIsImFuZ2xlIiwiUEkiLCJkeCIsImNvcyIsImR5Iiwic2luIiwicnVuQWN0aW9uIiwic2VxdWVuY2UiLCJtb3ZlQnkiLCJjYWxsRnVuYyIsInJlbW92ZU5vZGUiLCJub2RlIiwiYWRkQ2hpbGQiLCJzZW5kZXIiLCJwdXQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUFBLEVBQUUsQ0FBQ0MsS0FBSCxDQUFTO0VBQ0wsV0FBU0QsRUFBRSxDQUFDRSxTQURQO0VBR0xDLFVBQVUsRUFBRTtJQUNSQyxNQUFNLEVBQUVKLEVBQUUsQ0FBQ0ssTUFESDtJQUVSQyxJQUFJLEVBQUVOLEVBQUUsQ0FBQ08sS0FGRDtJQUdSQyxZQUFZLEVBQUVSLEVBQUUsQ0FBQ1MsSUFIVDtJQUlSQyxVQUFVLEVBQUVWLEVBQUUsQ0FBQ1c7RUFKUCxDQUhQO0VBVUw7RUFDQUMsTUFBTSxFQUFFLGtCQUFZO0lBQ2hCLEtBQUtDLFFBQUwsQ0FBYyxLQUFLQyxZQUFuQixFQUFpQyxDQUFqQztJQUNBLEtBQUtDLEtBQUwsR0FBYSxJQUFJZixFQUFFLENBQUNnQixRQUFQLENBQWdCLGFBQWhCLENBQWI7SUFDQSxLQUFLQyxNQUFMLEdBQWMsQ0FBZDtFQUNILENBZkk7RUFpQkxILFlBQVksRUFBRSx3QkFBWTtJQUN0QixJQUFJSSxPQUFPLEdBQUcsS0FBS0gsS0FBTCxDQUFXSSxHQUFYLEVBQWQ7O0lBQ0EsSUFBSSxDQUFDRCxPQUFMLEVBQWM7TUFDVkEsT0FBTyxHQUFHbEIsRUFBRSxDQUFDb0IsV0FBSCxDQUFlLEtBQUtoQixNQUFwQixDQUFWO01BQ0EsS0FBS2EsTUFBTDtNQUNBLEtBQUtYLElBQUwsQ0FBVWUsTUFBVixHQUFtQixtQkFBbUIsS0FBS0osTUFBM0MsQ0FIVSxDQUtWOztNQUNBQyxPQUFPLENBQUNJLFlBQVIsQ0FBcUIsYUFBckI7SUFDSDs7SUFDREosT0FBTyxDQUFDSyxDQUFSLEdBQVksS0FBS2YsWUFBTCxDQUFrQmUsQ0FBbEIsR0FBc0JDLElBQUksQ0FBQ0MsS0FBTCxDQUFXRCxJQUFJLENBQUNFLE1BQUwsS0FBZ0IsS0FBS2hCLFVBQUwsQ0FBZ0JpQixLQUEzQyxDQUFsQztJQUNBVCxPQUFPLENBQUNVLENBQVIsR0FBWSxLQUFLcEIsWUFBTCxDQUFrQm9CLENBQWxCLEdBQXNCSixJQUFJLENBQUNDLEtBQUwsQ0FBV0QsSUFBSSxDQUFDRSxNQUFMLEtBQWdCLEtBQUtoQixVQUFMLENBQWdCbUIsTUFBM0MsQ0FBbEM7SUFFQSxJQUFJQyxLQUFLLEdBQUdOLElBQUksQ0FBQ0UsTUFBTCxLQUFnQkYsSUFBSSxDQUFDTyxFQUFyQixHQUEwQixDQUF0QztJQUNBLElBQUlDLEVBQUUsR0FBRyxNQUFNUixJQUFJLENBQUNTLEdBQUwsQ0FBU0gsS0FBVCxDQUFmO0lBQ0EsSUFBSUksRUFBRSxHQUFHLE1BQU1WLElBQUksQ0FBQ1csR0FBTCxDQUFTTCxLQUFULENBQWY7SUFFQVosT0FBTyxDQUFDa0IsU0FBUixDQUFrQnBDLEVBQUUsQ0FBQ3FDLFFBQUgsQ0FDZHJDLEVBQUUsQ0FBQ3NDLE1BQUgsQ0FBVSxDQUFWLEVBQWFOLEVBQWIsRUFBaUJFLEVBQWpCLENBRGMsRUFFZGxDLEVBQUUsQ0FBQ3VDLFFBQUgsQ0FBWSxLQUFLQyxVQUFqQixFQUE2QixJQUE3QixFQUFtQ3RCLE9BQW5DLENBRmMsQ0FBbEI7SUFLQSxLQUFLdUIsSUFBTCxDQUFVQyxRQUFWLENBQW1CeEIsT0FBbkI7RUFDSCxDQXhDSTtFQTBDTHNCLFVBQVUsRUFBRSxvQkFBVUcsTUFBVixFQUFrQnpCLE9BQWxCLEVBQTJCO0lBQ25DLEtBQUtILEtBQUwsQ0FBVzZCLEdBQVgsQ0FBZTFCLE9BQWY7RUFDSDtBQTVDSSxDQUFUIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJjYy5DbGFzcyh7XG4gICAgZXh0ZW5kczogY2MuQ29tcG9uZW50LFxuXG4gICAgcHJvcGVydGllczoge1xuICAgICAgICBwcmVmYWI6IGNjLlByZWZhYixcbiAgICAgICAgaGludDogY2MuTGFiZWwsXG4gICAgICAgIHJlZ2lvbk9yaWdpbjogY2MuVmVjMixcbiAgICAgICAgcmVnaW9uU2l6ZTogY2MuU2l6ZVxuICAgIH0sXG5cbiAgICAvLyB1c2UgdGhpcyBmb3IgaW5pdGlhbGl6YXRpb25cbiAgICBvbkxvYWQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdGhpcy5zY2hlZHVsZSh0aGlzLmdlbmVyYXRlTm9kZSwgMik7XG4gICAgICAgIHRoaXMuX3Bvb2wgPSBuZXcgY2MuTm9kZVBvb2woJ1Bvb2xIYW5kbGVyJyk7XG4gICAgICAgIHRoaXMuX2NvdW50ID0gMDtcbiAgICB9LFxuICAgIFxuICAgIGdlbmVyYXRlTm9kZTogZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgbW9uc3RlciA9IHRoaXMuX3Bvb2wuZ2V0KCk7XG4gICAgICAgIGlmICghbW9uc3Rlcikge1xuICAgICAgICAgICAgbW9uc3RlciA9IGNjLmluc3RhbnRpYXRlKHRoaXMucHJlZmFiKTtcbiAgICAgICAgICAgIHRoaXMuX2NvdW50Kys7XG4gICAgICAgICAgICB0aGlzLmhpbnQuc3RyaW5nID0gJ05vZGUgQ3JlYXRlZDogJyArIHRoaXMuX2NvdW50O1xuICAgICAgICBcbiAgICAgICAgICAgIC8vIEFkZCBwb29sIGhhbmRsZXIgY29tcG9uZW50IHdoaWNoIHdpbGwgY29udHJvbCB0aGUgdG91Y2ggZXZlbnRcbiAgICAgICAgICAgIG1vbnN0ZXIuYWRkQ29tcG9uZW50KCdQb29sSGFuZGxlcicpO1xuICAgICAgICB9XG4gICAgICAgIG1vbnN0ZXIueCA9IHRoaXMucmVnaW9uT3JpZ2luLnggKyBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiB0aGlzLnJlZ2lvblNpemUud2lkdGgpO1xuICAgICAgICBtb25zdGVyLnkgPSB0aGlzLnJlZ2lvbk9yaWdpbi55ICsgTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogdGhpcy5yZWdpb25TaXplLmhlaWdodCk7XG4gICAgICAgIFxuICAgICAgICB2YXIgYW5nbGUgPSBNYXRoLnJhbmRvbSgpICogTWF0aC5QSSAqIDI7XG4gICAgICAgIHZhciBkeCA9IDUwMCAqIE1hdGguY29zKGFuZ2xlKTtcbiAgICAgICAgdmFyIGR5ID0gNTAwICogTWF0aC5zaW4oYW5nbGUpO1xuICAgICAgICBcbiAgICAgICAgbW9uc3Rlci5ydW5BY3Rpb24oY2Muc2VxdWVuY2UoXG4gICAgICAgICAgICBjYy5tb3ZlQnkoNSwgZHgsIGR5KSxcbiAgICAgICAgICAgIGNjLmNhbGxGdW5jKHRoaXMucmVtb3ZlTm9kZSwgdGhpcywgbW9uc3RlcilcbiAgICAgICAgKSk7XG4gICAgICAgIFxuICAgICAgICB0aGlzLm5vZGUuYWRkQ2hpbGQobW9uc3Rlcik7XG4gICAgfSxcbiAgICBcbiAgICByZW1vdmVOb2RlOiBmdW5jdGlvbiAoc2VuZGVyLCBtb25zdGVyKSB7XG4gICAgICAgIHRoaXMuX3Bvb2wucHV0KG1vbnN0ZXIpO1xuICAgIH1cbn0pO1xuIl19