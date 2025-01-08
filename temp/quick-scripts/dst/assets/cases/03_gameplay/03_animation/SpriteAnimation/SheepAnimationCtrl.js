
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/cases/03_gameplay/03_animation/SpriteAnimation/SheepAnimationCtrl.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'ae6fcR8cuFGRYHW525VJD/k', 'SheepAnimationCtrl');
// cases/03_gameplay/03_animation/SpriteAnimation/SheepAnimationCtrl.js

"use strict";

cc.Class({
  "extends": cc.Component,
  properties: {
    sheepAnim: {
      "default": null,
      type: cc.Animation
    }
  },
  // use this for initialization
  onLoad: function onLoad() {
    var anim = this.sheepAnim;

    this._playAnimCallback = function () {
      anim.play('sheep_jump');
    };

    this.scheduleOnce(this._playAnimCallback, 2);
  },
  // called every frame
  update: function update(dt) {}
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9jYXNlcy8wM19nYW1lcGxheS8wM19hbmltYXRpb24vU3ByaXRlQW5pbWF0aW9uL1NoZWVwQW5pbWF0aW9uQ3RybC5qcyJdLCJuYW1lcyI6WyJjYyIsIkNsYXNzIiwiQ29tcG9uZW50IiwicHJvcGVydGllcyIsInNoZWVwQW5pbSIsInR5cGUiLCJBbmltYXRpb24iLCJvbkxvYWQiLCJhbmltIiwiX3BsYXlBbmltQ2FsbGJhY2siLCJwbGF5Iiwic2NoZWR1bGVPbmNlIiwidXBkYXRlIiwiZHQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUFBLEVBQUUsQ0FBQ0MsS0FBSCxDQUFTO0VBQ0wsV0FBU0QsRUFBRSxDQUFDRSxTQURQO0VBR0xDLFVBQVUsRUFBRTtJQUNSQyxTQUFTLEVBQUU7TUFDUCxXQUFTLElBREY7TUFFUEMsSUFBSSxFQUFFTCxFQUFFLENBQUNNO0lBRkY7RUFESCxDQUhQO0VBVUw7RUFDQUMsTUFBTSxFQUFFLGtCQUFZO0lBQ2hCLElBQUlDLElBQUksR0FBRyxLQUFLSixTQUFoQjs7SUFDQSxLQUFLSyxpQkFBTCxHQUF5QixZQUFXO01BQ2hDRCxJQUFJLENBQUNFLElBQUwsQ0FBVSxZQUFWO0lBQ0gsQ0FGRDs7SUFHQSxLQUFLQyxZQUFMLENBQWtCLEtBQUtGLGlCQUF2QixFQUEwQyxDQUExQztFQUNILENBakJJO0VBbUJMO0VBQ0FHLE1BQU0sRUFBRSxnQkFBVUMsRUFBVixFQUFjLENBRXJCO0FBdEJJLENBQVQiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImNjLkNsYXNzKHtcbiAgICBleHRlbmRzOiBjYy5Db21wb25lbnQsXG5cbiAgICBwcm9wZXJ0aWVzOiB7XG4gICAgICAgIHNoZWVwQW5pbToge1xuICAgICAgICAgICAgZGVmYXVsdDogbnVsbCxcbiAgICAgICAgICAgIHR5cGU6IGNjLkFuaW1hdGlvblxuICAgICAgICB9XG4gICAgfSxcblxuICAgIC8vIHVzZSB0aGlzIGZvciBpbml0aWFsaXphdGlvblxuICAgIG9uTG9hZDogZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgYW5pbSA9IHRoaXMuc2hlZXBBbmltO1xuICAgICAgICB0aGlzLl9wbGF5QW5pbUNhbGxiYWNrID0gZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICBhbmltLnBsYXkoJ3NoZWVwX2p1bXAnKTtcbiAgICAgICAgfTtcbiAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UodGhpcy5fcGxheUFuaW1DYWxsYmFjaywgMik7XG4gICAgfSxcblxuICAgIC8vIGNhbGxlZCBldmVyeSBmcmFtZVxuICAgIHVwZGF0ZTogZnVuY3Rpb24gKGR0KSB7XG5cbiAgICB9LFxufSk7XG4iXX0=