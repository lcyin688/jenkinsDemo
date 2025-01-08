
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/cases/01_graphics/02_particle/ToggleParticle/ParticleControl.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '79ae3hiP+JAhIKehaWyiKuh', 'ParticleControl');
// cases/01_graphics/02_particle/ToggleParticle/ParticleControl.js

"use strict";

cc.Class({
  "extends": cc.Component,
  properties: {
    particle: cc.ParticleSystem
  },
  toggleParticlePlay: function toggleParticlePlay() {
    var myParticle = this.particle;

    if (myParticle.particleCount > 0) {
      // check if particle has fully plaed
      myParticle.stopSystem(); // stop particle system
    } else {
      myParticle.resetSystem(); // restart particle system
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9jYXNlcy8wMV9ncmFwaGljcy8wMl9wYXJ0aWNsZS9Ub2dnbGVQYXJ0aWNsZS9QYXJ0aWNsZUNvbnRyb2wuanMiXSwibmFtZXMiOlsiY2MiLCJDbGFzcyIsIkNvbXBvbmVudCIsInByb3BlcnRpZXMiLCJwYXJ0aWNsZSIsIlBhcnRpY2xlU3lzdGVtIiwidG9nZ2xlUGFydGljbGVQbGF5IiwibXlQYXJ0aWNsZSIsInBhcnRpY2xlQ291bnQiLCJzdG9wU3lzdGVtIiwicmVzZXRTeXN0ZW0iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUFBLEVBQUUsQ0FBQ0MsS0FBSCxDQUFTO0VBQ0wsV0FBU0QsRUFBRSxDQUFDRSxTQURQO0VBR0xDLFVBQVUsRUFBRTtJQUNSQyxRQUFRLEVBQUVKLEVBQUUsQ0FBQ0s7RUFETCxDQUhQO0VBT0xDLGtCQUFrQixFQUFFLDhCQUFXO0lBQzNCLElBQUlDLFVBQVUsR0FBRyxLQUFLSCxRQUF0Qjs7SUFDQSxJQUFJRyxVQUFVLENBQUNDLGFBQVgsR0FBMkIsQ0FBL0IsRUFBa0M7TUFBRTtNQUNoQ0QsVUFBVSxDQUFDRSxVQUFYLEdBRDhCLENBQ0w7SUFDNUIsQ0FGRCxNQUVPO01BQ0hGLFVBQVUsQ0FBQ0csV0FBWCxHQURHLENBQ3VCO0lBQzdCO0VBQ0o7QUFkSSxDQUFUIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJjYy5DbGFzcyh7XG4gICAgZXh0ZW5kczogY2MuQ29tcG9uZW50LFxuXG4gICAgcHJvcGVydGllczoge1xuICAgICAgICBwYXJ0aWNsZTogY2MuUGFydGljbGVTeXN0ZW0sXG4gICAgfSxcblxuICAgIHRvZ2dsZVBhcnRpY2xlUGxheTogZnVuY3Rpb24oKSB7XG4gICAgICAgIHZhciBteVBhcnRpY2xlID0gdGhpcy5wYXJ0aWNsZTtcbiAgICAgICAgaWYgKG15UGFydGljbGUucGFydGljbGVDb3VudCA+IDApIHsgLy8gY2hlY2sgaWYgcGFydGljbGUgaGFzIGZ1bGx5IHBsYWVkXG4gICAgICAgICAgICBteVBhcnRpY2xlLnN0b3BTeXN0ZW0oKTsgLy8gc3RvcCBwYXJ0aWNsZSBzeXN0ZW1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIG15UGFydGljbGUucmVzZXRTeXN0ZW0oKTsgLy8gcmVzdGFydCBwYXJ0aWNsZSBzeXN0ZW1cbiAgICAgICAgfVxuICAgIH1cbn0pO1xuIl19