
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/cases/collider/Utils/PlatformMotion.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '0f761EZmKhNLKJpUXTrb4fF', 'PlatformMotion');
// cases/collider/Utils/PlatformMotion.js

"use strict";

cc.Class({
  "extends": cc.Component,
  properties: {
    speed: 10,
    distance: 200
  },
  // use this for initialization
  onLoad: function onLoad() {
    this._movedDistance = this.distance / 2;
    this._direction = 1;
    this._movedDiff = 0;
  },
  update: function update(dt) {
    var d = this.speed * this._direction * dt;
    this._movedDistance += Math.abs(d);

    if (this._movedDistance > this.distance) {
      d = this.distance - this._movedDistance;
      this._movedDistance = 0;
      this._direction *= -1;
    }

    this.node.x += d;
    this._movedDiff = d;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9jYXNlcy9jb2xsaWRlci9VdGlscy9QbGF0Zm9ybU1vdGlvbi5qcyJdLCJuYW1lcyI6WyJjYyIsIkNsYXNzIiwiQ29tcG9uZW50IiwicHJvcGVydGllcyIsInNwZWVkIiwiZGlzdGFuY2UiLCJvbkxvYWQiLCJfbW92ZWREaXN0YW5jZSIsIl9kaXJlY3Rpb24iLCJfbW92ZWREaWZmIiwidXBkYXRlIiwiZHQiLCJkIiwiTWF0aCIsImFicyIsIm5vZGUiLCJ4Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBQSxFQUFFLENBQUNDLEtBQUgsQ0FBUztFQUNMLFdBQVNELEVBQUUsQ0FBQ0UsU0FEUDtFQUdMQyxVQUFVLEVBQUU7SUFDUkMsS0FBSyxFQUFFLEVBREM7SUFFUkMsUUFBUSxFQUFFO0VBRkYsQ0FIUDtFQVFMO0VBQ0FDLE1BQU0sRUFBRSxrQkFBWTtJQUNoQixLQUFLQyxjQUFMLEdBQXNCLEtBQUtGLFFBQUwsR0FBZ0IsQ0FBdEM7SUFDQSxLQUFLRyxVQUFMLEdBQWtCLENBQWxCO0lBQ0EsS0FBS0MsVUFBTCxHQUFrQixDQUFsQjtFQUNILENBYkk7RUFlTEMsTUFBTSxFQUFFLGdCQUFVQyxFQUFWLEVBQWM7SUFDbEIsSUFBSUMsQ0FBQyxHQUFHLEtBQUtSLEtBQUwsR0FBYSxLQUFLSSxVQUFsQixHQUErQkcsRUFBdkM7SUFFQSxLQUFLSixjQUFMLElBQXVCTSxJQUFJLENBQUNDLEdBQUwsQ0FBU0YsQ0FBVCxDQUF2Qjs7SUFDQSxJQUFJLEtBQUtMLGNBQUwsR0FBc0IsS0FBS0YsUUFBL0IsRUFBeUM7TUFDckNPLENBQUMsR0FBRyxLQUFLUCxRQUFMLEdBQWdCLEtBQUtFLGNBQXpCO01BQ0EsS0FBS0EsY0FBTCxHQUFzQixDQUF0QjtNQUNBLEtBQUtDLFVBQUwsSUFBbUIsQ0FBQyxDQUFwQjtJQUNIOztJQUVELEtBQUtPLElBQUwsQ0FBVUMsQ0FBVixJQUFlSixDQUFmO0lBQ0EsS0FBS0gsVUFBTCxHQUFrQkcsQ0FBbEI7RUFDSDtBQTNCSSxDQUFUIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJjYy5DbGFzcyh7XG4gICAgZXh0ZW5kczogY2MuQ29tcG9uZW50LFxuXG4gICAgcHJvcGVydGllczoge1xuICAgICAgICBzcGVlZDogMTAsXG4gICAgICAgIGRpc3RhbmNlOiAyMDBcbiAgICB9LFxuXG4gICAgLy8gdXNlIHRoaXMgZm9yIGluaXRpYWxpemF0aW9uXG4gICAgb25Mb2FkOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHRoaXMuX21vdmVkRGlzdGFuY2UgPSB0aGlzLmRpc3RhbmNlIC8gMjtcbiAgICAgICAgdGhpcy5fZGlyZWN0aW9uID0gMTtcbiAgICAgICAgdGhpcy5fbW92ZWREaWZmID0gMDtcbiAgICB9LFxuXG4gICAgdXBkYXRlOiBmdW5jdGlvbiAoZHQpIHtcbiAgICAgICAgdmFyIGQgPSB0aGlzLnNwZWVkICogdGhpcy5fZGlyZWN0aW9uICogZHQ7XG5cbiAgICAgICAgdGhpcy5fbW92ZWREaXN0YW5jZSArPSBNYXRoLmFicyhkKTtcbiAgICAgICAgaWYgKHRoaXMuX21vdmVkRGlzdGFuY2UgPiB0aGlzLmRpc3RhbmNlKSB7XG4gICAgICAgICAgICBkID0gdGhpcy5kaXN0YW5jZSAtIHRoaXMuX21vdmVkRGlzdGFuY2U7XG4gICAgICAgICAgICB0aGlzLl9tb3ZlZERpc3RhbmNlID0gMDtcbiAgICAgICAgICAgIHRoaXMuX2RpcmVjdGlvbiAqPSAtMTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMubm9kZS54ICs9IGQ7XG4gICAgICAgIHRoaXMuX21vdmVkRGlmZiA9IGQ7XG4gICAgfSxcbn0pO1xuIl19