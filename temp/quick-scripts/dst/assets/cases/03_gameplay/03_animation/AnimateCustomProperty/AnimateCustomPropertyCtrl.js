
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/cases/03_gameplay/03_animation/AnimateCustomProperty/AnimateCustomPropertyCtrl.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'fb14cmn7KJJCo4qVcOy/GmS', 'AnimateCustomPropertyCtrl');
// cases/03_gameplay/03_animation/AnimateCustomProperty/AnimateCustomPropertyCtrl.js

"use strict";

cc.Class({
  "extends": cc.Component,
  properties: {
    hp: 0,
    emissionRote: 0,
    num: 0,
    hpBar: cc.ProgressBar,
    particle: cc.ParticleSystem,
    score: cc.Label
  },
  update: function update(dt) {
    this.hpBar.progress = this.hp;
    this.particle.emissionRate = this.emissionRote;
    this.score.string = Math.ceil(this.num);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9jYXNlcy8wM19nYW1lcGxheS8wM19hbmltYXRpb24vQW5pbWF0ZUN1c3RvbVByb3BlcnR5L0FuaW1hdGVDdXN0b21Qcm9wZXJ0eUN0cmwuanMiXSwibmFtZXMiOlsiY2MiLCJDbGFzcyIsIkNvbXBvbmVudCIsInByb3BlcnRpZXMiLCJocCIsImVtaXNzaW9uUm90ZSIsIm51bSIsImhwQmFyIiwiUHJvZ3Jlc3NCYXIiLCJwYXJ0aWNsZSIsIlBhcnRpY2xlU3lzdGVtIiwic2NvcmUiLCJMYWJlbCIsInVwZGF0ZSIsImR0IiwicHJvZ3Jlc3MiLCJlbWlzc2lvblJhdGUiLCJzdHJpbmciLCJNYXRoIiwiY2VpbCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQUEsRUFBRSxDQUFDQyxLQUFILENBQVM7RUFDTCxXQUFTRCxFQUFFLENBQUNFLFNBRFA7RUFHTEMsVUFBVSxFQUFFO0lBQ1JDLEVBQUUsRUFBRSxDQURJO0lBRVJDLFlBQVksRUFBRSxDQUZOO0lBR1JDLEdBQUcsRUFBRSxDQUhHO0lBSVJDLEtBQUssRUFBRVAsRUFBRSxDQUFDUSxXQUpGO0lBS1JDLFFBQVEsRUFBRVQsRUFBRSxDQUFDVSxjQUxMO0lBTVJDLEtBQUssRUFBRVgsRUFBRSxDQUFDWTtFQU5GLENBSFA7RUFZTEMsTUFBTSxFQUFFLGdCQUFVQyxFQUFWLEVBQWM7SUFDbEIsS0FBS1AsS0FBTCxDQUFXUSxRQUFYLEdBQXNCLEtBQUtYLEVBQTNCO0lBQ0EsS0FBS0ssUUFBTCxDQUFjTyxZQUFkLEdBQTZCLEtBQUtYLFlBQWxDO0lBQ0EsS0FBS00sS0FBTCxDQUFXTSxNQUFYLEdBQW9CQyxJQUFJLENBQUNDLElBQUwsQ0FBVSxLQUFLYixHQUFmLENBQXBCO0VBQ0g7QUFoQkksQ0FBVCIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiY2MuQ2xhc3Moe1xuICAgIGV4dGVuZHM6IGNjLkNvbXBvbmVudCxcblxuICAgIHByb3BlcnRpZXM6IHtcbiAgICAgICAgaHA6IDAsXG4gICAgICAgIGVtaXNzaW9uUm90ZTogMCxcbiAgICAgICAgbnVtOiAwLFxuICAgICAgICBocEJhcjogY2MuUHJvZ3Jlc3NCYXIsXG4gICAgICAgIHBhcnRpY2xlOiBjYy5QYXJ0aWNsZVN5c3RlbSxcbiAgICAgICAgc2NvcmU6IGNjLkxhYmVsXG4gICAgfSxcblxuICAgIHVwZGF0ZTogZnVuY3Rpb24gKGR0KSB7XG4gICAgICAgIHRoaXMuaHBCYXIucHJvZ3Jlc3MgPSB0aGlzLmhwO1xuICAgICAgICB0aGlzLnBhcnRpY2xlLmVtaXNzaW9uUmF0ZSA9IHRoaXMuZW1pc3Npb25Sb3RlO1xuICAgICAgICB0aGlzLnNjb3JlLnN0cmluZyA9IE1hdGguY2VpbCh0aGlzLm51bSk7XG4gICAgfVxufSk7XG4iXX0=