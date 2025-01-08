
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/cases/spine/VertexEffect.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'b1897ILwdBEsoce3TaJvAgZ', 'VertexEffect');
// cases/spine/VertexEffect.js

"use strict";

cc.Class({
  "extends": cc.Component,
  properties: {
    skeleton: {
      type: sp.Skeleton,
      "default": null
    }
  },
  start: function start() {
    this._swirlTime = 0;
    this._maxEffect = 3;
    this._index = 0;
    this._bound = cc.size(this.skeleton.node.width, this.skeleton.node.height);
    this._swirlEffect = new sp.VertexEffectDelegate();

    this._swirlEffect.initSwirlWithPowOut(0, 2);

    this._jitterEffect = new sp.VertexEffectDelegate();

    this._jitterEffect.initJitter(20, 20);
  },
  switchEffect: function switchEffect() {
    this._index++;

    if (this._index >= this._maxEffect) {
      this._index = 0;
    }

    switch (this._index) {
      case 0:
        this.skeleton.setVertexEffectDelegate(null);
        break;

      case 1:
        this.skeleton.setVertexEffectDelegate(this._jitterEffect);
        break;

      case 2:
        this.skeleton.setVertexEffectDelegate(this._swirlEffect);
        break;
    }
  },
  update: function update(dt) {
    if (this._index == 2) {
      this._swirlTime += dt;
      var percent = this._swirlTime % 2;
      if (percent > 1) percent = 1 - (percent - 1);
      var bound = this._bound;

      var swirlEffect = this._swirlEffect.getSwirlVertexEffect();

      swirlEffect.angle = 360 * percent;
      swirlEffect.centerX = bound.width * 0.5;
      swirlEffect.centerY = bound.height * 0.5;
      swirlEffect.radius = percent * Math.sqrt(bound.width * bound.width + bound.height * bound.height);
    }
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9jYXNlcy9zcGluZS9WZXJ0ZXhFZmZlY3QuanMiXSwibmFtZXMiOlsiY2MiLCJDbGFzcyIsIkNvbXBvbmVudCIsInByb3BlcnRpZXMiLCJza2VsZXRvbiIsInR5cGUiLCJzcCIsIlNrZWxldG9uIiwic3RhcnQiLCJfc3dpcmxUaW1lIiwiX21heEVmZmVjdCIsIl9pbmRleCIsIl9ib3VuZCIsInNpemUiLCJub2RlIiwid2lkdGgiLCJoZWlnaHQiLCJfc3dpcmxFZmZlY3QiLCJWZXJ0ZXhFZmZlY3REZWxlZ2F0ZSIsImluaXRTd2lybFdpdGhQb3dPdXQiLCJfaml0dGVyRWZmZWN0IiwiaW5pdEppdHRlciIsInN3aXRjaEVmZmVjdCIsInNldFZlcnRleEVmZmVjdERlbGVnYXRlIiwidXBkYXRlIiwiZHQiLCJwZXJjZW50IiwiYm91bmQiLCJzd2lybEVmZmVjdCIsImdldFN3aXJsVmVydGV4RWZmZWN0IiwiYW5nbGUiLCJjZW50ZXJYIiwiY2VudGVyWSIsInJhZGl1cyIsIk1hdGgiLCJzcXJ0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBQSxFQUFFLENBQUNDLEtBQUgsQ0FBUztFQUNMLFdBQVNELEVBQUUsQ0FBQ0UsU0FEUDtFQUdMQyxVQUFVLEVBQUU7SUFDUkMsUUFBUSxFQUFHO01BQ1BDLElBQUksRUFBRUMsRUFBRSxDQUFDQyxRQURGO01BRVAsV0FBUztJQUZGO0VBREgsQ0FIUDtFQVVMQyxLQVZLLG1CQVVJO0lBQ0wsS0FBS0MsVUFBTCxHQUFrQixDQUFsQjtJQUNBLEtBQUtDLFVBQUwsR0FBa0IsQ0FBbEI7SUFDQSxLQUFLQyxNQUFMLEdBQWMsQ0FBZDtJQUNBLEtBQUtDLE1BQUwsR0FBY1osRUFBRSxDQUFDYSxJQUFILENBQVEsS0FBS1QsUUFBTCxDQUFjVSxJQUFkLENBQW1CQyxLQUEzQixFQUFrQyxLQUFLWCxRQUFMLENBQWNVLElBQWQsQ0FBbUJFLE1BQXJELENBQWQ7SUFFQSxLQUFLQyxZQUFMLEdBQW9CLElBQUlYLEVBQUUsQ0FBQ1ksb0JBQVAsRUFBcEI7O0lBQ0EsS0FBS0QsWUFBTCxDQUFrQkUsbUJBQWxCLENBQXNDLENBQXRDLEVBQXlDLENBQXpDOztJQUVBLEtBQUtDLGFBQUwsR0FBcUIsSUFBSWQsRUFBRSxDQUFDWSxvQkFBUCxFQUFyQjs7SUFDQSxLQUFLRSxhQUFMLENBQW1CQyxVQUFuQixDQUE4QixFQUE5QixFQUFrQyxFQUFsQztFQUNILENBckJJO0VBdUJMQyxZQXZCSywwQkF1Qlc7SUFDWixLQUFLWCxNQUFMOztJQUNBLElBQUksS0FBS0EsTUFBTCxJQUFlLEtBQUtELFVBQXhCLEVBQW9DO01BQ2hDLEtBQUtDLE1BQUwsR0FBYyxDQUFkO0lBQ0g7O0lBRUQsUUFBUSxLQUFLQSxNQUFiO01BQ0ksS0FBSyxDQUFMO1FBQ0ksS0FBS1AsUUFBTCxDQUFjbUIsdUJBQWQsQ0FBc0MsSUFBdEM7UUFDQTs7TUFDSixLQUFLLENBQUw7UUFDSSxLQUFLbkIsUUFBTCxDQUFjbUIsdUJBQWQsQ0FBc0MsS0FBS0gsYUFBM0M7UUFDQTs7TUFDSixLQUFLLENBQUw7UUFDSSxLQUFLaEIsUUFBTCxDQUFjbUIsdUJBQWQsQ0FBc0MsS0FBS04sWUFBM0M7UUFDQTtJQVRSO0VBV0gsQ0F4Q0k7RUEwQ0xPLE1BMUNLLGtCQTBDR0MsRUExQ0gsRUEwQ087SUFDUixJQUFJLEtBQUtkLE1BQUwsSUFBZSxDQUFuQixFQUFzQjtNQUNsQixLQUFLRixVQUFMLElBQW1CZ0IsRUFBbkI7TUFDQSxJQUFJQyxPQUFPLEdBQUcsS0FBS2pCLFVBQUwsR0FBa0IsQ0FBaEM7TUFDQSxJQUFJaUIsT0FBTyxHQUFHLENBQWQsRUFBaUJBLE9BQU8sR0FBRyxLQUFLQSxPQUFPLEdBQUUsQ0FBZCxDQUFWO01BRWpCLElBQUlDLEtBQUssR0FBRyxLQUFLZixNQUFqQjs7TUFDQSxJQUFJZ0IsV0FBVyxHQUFHLEtBQUtYLFlBQUwsQ0FBa0JZLG9CQUFsQixFQUFsQjs7TUFDQUQsV0FBVyxDQUFDRSxLQUFaLEdBQW9CLE1BQU1KLE9BQTFCO01BQ0FFLFdBQVcsQ0FBQ0csT0FBWixHQUFzQkosS0FBSyxDQUFDWixLQUFOLEdBQWMsR0FBcEM7TUFDQWEsV0FBVyxDQUFDSSxPQUFaLEdBQXNCTCxLQUFLLENBQUNYLE1BQU4sR0FBZSxHQUFyQztNQUVBWSxXQUFXLENBQUNLLE1BQVosR0FBcUJQLE9BQU8sR0FBR1EsSUFBSSxDQUFDQyxJQUFMLENBQVVSLEtBQUssQ0FBQ1osS0FBTixHQUFjWSxLQUFLLENBQUNaLEtBQXBCLEdBQTRCWSxLQUFLLENBQUNYLE1BQU4sR0FBZVcsS0FBSyxDQUFDWCxNQUEzRCxDQUEvQjtJQUNIO0VBQ0o7QUF4REksQ0FBVCIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiY2MuQ2xhc3Moe1xuICAgIGV4dGVuZHM6IGNjLkNvbXBvbmVudCxcblxuICAgIHByb3BlcnRpZXM6IHtcbiAgICAgICAgc2tlbGV0b24gOiB7XG4gICAgICAgICAgICB0eXBlOiBzcC5Ta2VsZXRvbixcbiAgICAgICAgICAgIGRlZmF1bHQ6IG51bGwsXG4gICAgICAgIH1cbiAgICB9LFxuXG4gICAgc3RhcnQgKCkge1xuICAgICAgICB0aGlzLl9zd2lybFRpbWUgPSAwO1xuICAgICAgICB0aGlzLl9tYXhFZmZlY3QgPSAzO1xuICAgICAgICB0aGlzLl9pbmRleCA9IDA7XG4gICAgICAgIHRoaXMuX2JvdW5kID0gY2Muc2l6ZSh0aGlzLnNrZWxldG9uLm5vZGUud2lkdGgsIHRoaXMuc2tlbGV0b24ubm9kZS5oZWlnaHQpO1xuXG4gICAgICAgIHRoaXMuX3N3aXJsRWZmZWN0ID0gbmV3IHNwLlZlcnRleEVmZmVjdERlbGVnYXRlKCk7XG4gICAgICAgIHRoaXMuX3N3aXJsRWZmZWN0LmluaXRTd2lybFdpdGhQb3dPdXQoMCwgMik7XG5cbiAgICAgICAgdGhpcy5faml0dGVyRWZmZWN0ID0gbmV3IHNwLlZlcnRleEVmZmVjdERlbGVnYXRlKCk7XG4gICAgICAgIHRoaXMuX2ppdHRlckVmZmVjdC5pbml0Sml0dGVyKDIwLCAyMCk7XG4gICAgfSxcblxuICAgIHN3aXRjaEVmZmVjdCAoKSB7XG4gICAgICAgIHRoaXMuX2luZGV4Kys7XG4gICAgICAgIGlmICh0aGlzLl9pbmRleCA+PSB0aGlzLl9tYXhFZmZlY3QpIHtcbiAgICAgICAgICAgIHRoaXMuX2luZGV4ID0gMDtcbiAgICAgICAgfVxuXG4gICAgICAgIHN3aXRjaCAodGhpcy5faW5kZXgpIHtcbiAgICAgICAgICAgIGNhc2UgMDpcbiAgICAgICAgICAgICAgICB0aGlzLnNrZWxldG9uLnNldFZlcnRleEVmZmVjdERlbGVnYXRlKG51bGwpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAxOlxuICAgICAgICAgICAgICAgIHRoaXMuc2tlbGV0b24uc2V0VmVydGV4RWZmZWN0RGVsZWdhdGUodGhpcy5faml0dGVyRWZmZWN0KTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgMjpcbiAgICAgICAgICAgICAgICB0aGlzLnNrZWxldG9uLnNldFZlcnRleEVmZmVjdERlbGVnYXRlKHRoaXMuX3N3aXJsRWZmZWN0KTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgIH0sXG5cbiAgICB1cGRhdGUgKGR0KSB7XG4gICAgICAgIGlmICh0aGlzLl9pbmRleCA9PSAyKSB7XG4gICAgICAgICAgICB0aGlzLl9zd2lybFRpbWUgKz0gZHQ7XG4gICAgICAgICAgICBsZXQgcGVyY2VudCA9IHRoaXMuX3N3aXJsVGltZSAlIDI7XG4gICAgICAgICAgICBpZiAocGVyY2VudCA+IDEpIHBlcmNlbnQgPSAxIC0gKHBlcmNlbnQgLTEgKTtcblxuICAgICAgICAgICAgbGV0IGJvdW5kID0gdGhpcy5fYm91bmQ7XG4gICAgICAgICAgICBsZXQgc3dpcmxFZmZlY3QgPSB0aGlzLl9zd2lybEVmZmVjdC5nZXRTd2lybFZlcnRleEVmZmVjdCgpO1xuICAgICAgICAgICAgc3dpcmxFZmZlY3QuYW5nbGUgPSAzNjAgKiBwZXJjZW50O1xuICAgICAgICAgICAgc3dpcmxFZmZlY3QuY2VudGVyWCA9IGJvdW5kLndpZHRoICogMC41O1xuICAgICAgICAgICAgc3dpcmxFZmZlY3QuY2VudGVyWSA9IGJvdW5kLmhlaWdodCAqIDAuNTtcblxuICAgICAgICAgICAgc3dpcmxFZmZlY3QucmFkaXVzID0gcGVyY2VudCAqIE1hdGguc3FydChib3VuZC53aWR0aCAqIGJvdW5kLndpZHRoICsgYm91bmQuaGVpZ2h0ICogYm91bmQuaGVpZ2h0KTtcbiAgICAgICAgfSAgICBcbiAgICB9IFxufSk7XG4iXX0=