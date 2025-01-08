
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/cases/06_rendering/custom_material/custom_material.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'cf55fSDhJtE4YLQLmUchrgd', 'custom_material');
// cases/06_rendering/custom_material/custom_material.js

"use strict";

cc.Class({
  "extends": cc.Component,
  properties: {
    backgroud: cc.Sprite,
    content: cc.Sprite,
    customEffects: [cc.EffectAsset],
    contentTexture: {
      "default": null,
      type: cc.Texture2D
    },
    gold: {
      "default": null,
      type: cc.Texture2D
    },
    speed: 0.1,
    _effectIndex: 0
  },
  // LIFE-CYCLE CALLBACKS:
  // onLoad () {},
  onEnable: function onEnable() {
    this.originState = cc.dynamicAtlasManager.enabled;
    cc.dynamicAtlasManager.enabled = false;
  },
  onDisable: function onDisable() {
    cc.dynamicAtlasManager.enabled = this.originState;
  },
  start: function start() {
    this.time = 0;
    this.bgSpriteMaterial = this.backgroud.getMaterial(0);
    this.contentSpriteMaterial = this.content.getMaterial(0);
  },
  changeEffect: function changeEffect() {
    this.time = 0;

    if (this._effectIndex >= this.customEffects.length) {
      this._effectIndex = 0;
    }

    this.newMaterial = new cc.Material();
    var newEffect = this.customEffects[this._effectIndex];
    this._effectIndex++;
    this.newMaterial.effectAsset = newEffect;
    this.newMaterial.name = newEffect.name;

    if (newEffect.name === "custom_material") {
      this.newMaterial.setProperty("texture", this.contentTexture);
      this.newMaterial.setProperty("texture2", this.gold);
    }

    this.content.setMaterial(0, this.newMaterial);
  },
  update: function update(dt) {
    if (!this.bgSpriteMaterial || !this.contentSpriteMaterial) return;
    this.time += dt * this.speed;

    if (this.newMaterial) {
      this.newMaterial.setProperty('time', this.time);
    } else {
      this.contentSpriteMaterial.setProperty('time', this.time);
    }

    this.bgSpriteMaterial.setProperty('time', this.time * 10);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9jYXNlcy8wNl9yZW5kZXJpbmcvY3VzdG9tX21hdGVyaWFsL2N1c3RvbV9tYXRlcmlhbC5qcyJdLCJuYW1lcyI6WyJjYyIsIkNsYXNzIiwiQ29tcG9uZW50IiwicHJvcGVydGllcyIsImJhY2tncm91ZCIsIlNwcml0ZSIsImNvbnRlbnQiLCJjdXN0b21FZmZlY3RzIiwiRWZmZWN0QXNzZXQiLCJjb250ZW50VGV4dHVyZSIsInR5cGUiLCJUZXh0dXJlMkQiLCJnb2xkIiwic3BlZWQiLCJfZWZmZWN0SW5kZXgiLCJvbkVuYWJsZSIsIm9yaWdpblN0YXRlIiwiZHluYW1pY0F0bGFzTWFuYWdlciIsImVuYWJsZWQiLCJvbkRpc2FibGUiLCJzdGFydCIsInRpbWUiLCJiZ1Nwcml0ZU1hdGVyaWFsIiwiZ2V0TWF0ZXJpYWwiLCJjb250ZW50U3ByaXRlTWF0ZXJpYWwiLCJjaGFuZ2VFZmZlY3QiLCJsZW5ndGgiLCJuZXdNYXRlcmlhbCIsIk1hdGVyaWFsIiwibmV3RWZmZWN0IiwiZWZmZWN0QXNzZXQiLCJuYW1lIiwic2V0UHJvcGVydHkiLCJzZXRNYXRlcmlhbCIsInVwZGF0ZSIsImR0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBQSxFQUFFLENBQUNDLEtBQUgsQ0FBUztFQUNMLFdBQVNELEVBQUUsQ0FBQ0UsU0FEUDtFQUdMQyxVQUFVLEVBQUU7SUFDUkMsU0FBUyxFQUFFSixFQUFFLENBQUNLLE1BRE47SUFFUkMsT0FBTyxFQUFFTixFQUFFLENBQUNLLE1BRko7SUFHUkUsYUFBYSxFQUFFLENBQUNQLEVBQUUsQ0FBQ1EsV0FBSixDQUhQO0lBSVJDLGNBQWMsRUFBRTtNQUNaLFdBQVMsSUFERztNQUVaQyxJQUFJLEVBQUVWLEVBQUUsQ0FBQ1c7SUFGRyxDQUpSO0lBUVJDLElBQUksRUFBRTtNQUNGLFdBQVMsSUFEUDtNQUVGRixJQUFJLEVBQUVWLEVBQUUsQ0FBQ1c7SUFGUCxDQVJFO0lBWVJFLEtBQUssRUFBRSxHQVpDO0lBYVJDLFlBQVksRUFBRTtFQWJOLENBSFA7RUFtQkw7RUFFQTtFQUVBQyxRQXZCSyxzQkF1Qk87SUFDUixLQUFLQyxXQUFMLEdBQW1CaEIsRUFBRSxDQUFDaUIsbUJBQUgsQ0FBdUJDLE9BQTFDO0lBQ0FsQixFQUFFLENBQUNpQixtQkFBSCxDQUF1QkMsT0FBdkIsR0FBaUMsS0FBakM7RUFDSCxDQTFCSTtFQTRCTEMsU0E1QkssdUJBNEJRO0lBQ1RuQixFQUFFLENBQUNpQixtQkFBSCxDQUF1QkMsT0FBdkIsR0FBaUMsS0FBS0YsV0FBdEM7RUFDSCxDQTlCSTtFQWdDTEksS0FoQ0ssbUJBZ0NJO0lBQ0wsS0FBS0MsSUFBTCxHQUFZLENBQVo7SUFDQSxLQUFLQyxnQkFBTCxHQUF3QixLQUFLbEIsU0FBTCxDQUFlbUIsV0FBZixDQUEyQixDQUEzQixDQUF4QjtJQUNBLEtBQUtDLHFCQUFMLEdBQTZCLEtBQUtsQixPQUFMLENBQWFpQixXQUFiLENBQXlCLENBQXpCLENBQTdCO0VBQ0gsQ0FwQ0k7RUFzQ0xFLFlBdENLLDBCQXNDVztJQUNaLEtBQUtKLElBQUwsR0FBWSxDQUFaOztJQUNBLElBQUksS0FBS1AsWUFBTCxJQUFxQixLQUFLUCxhQUFMLENBQW1CbUIsTUFBNUMsRUFBb0Q7TUFDaEQsS0FBS1osWUFBTCxHQUFvQixDQUFwQjtJQUNIOztJQUNELEtBQUthLFdBQUwsR0FBbUIsSUFBSTNCLEVBQUUsQ0FBQzRCLFFBQVAsRUFBbkI7SUFDQSxJQUFJQyxTQUFTLEdBQUcsS0FBS3RCLGFBQUwsQ0FBbUIsS0FBS08sWUFBeEIsQ0FBaEI7SUFDQSxLQUFLQSxZQUFMO0lBQ0EsS0FBS2EsV0FBTCxDQUFpQkcsV0FBakIsR0FBK0JELFNBQS9CO0lBQ0EsS0FBS0YsV0FBTCxDQUFpQkksSUFBakIsR0FBd0JGLFNBQVMsQ0FBQ0UsSUFBbEM7O0lBQ0EsSUFBSUYsU0FBUyxDQUFDRSxJQUFWLEtBQW1CLGlCQUF2QixFQUEwQztNQUN0QyxLQUFLSixXQUFMLENBQWlCSyxXQUFqQixDQUE2QixTQUE3QixFQUF3QyxLQUFLdkIsY0FBN0M7TUFDQSxLQUFLa0IsV0FBTCxDQUFpQkssV0FBakIsQ0FBNkIsVUFBN0IsRUFBeUMsS0FBS3BCLElBQTlDO0lBQ0g7O0lBQ0QsS0FBS04sT0FBTCxDQUFhMkIsV0FBYixDQUF5QixDQUF6QixFQUE0QixLQUFLTixXQUFqQztFQUNILENBckRJO0VBdURMTyxNQXZESyxrQkF1REdDLEVBdkRILEVBdURPO0lBQ1IsSUFBSSxDQUFDLEtBQUtiLGdCQUFOLElBQTBCLENBQUMsS0FBS0UscUJBQXBDLEVBQTJEO0lBRTNELEtBQUtILElBQUwsSUFBYWMsRUFBRSxHQUFHLEtBQUt0QixLQUF2Qjs7SUFFQSxJQUFJLEtBQUtjLFdBQVQsRUFBc0I7TUFDbEIsS0FBS0EsV0FBTCxDQUFpQkssV0FBakIsQ0FBNkIsTUFBN0IsRUFBcUMsS0FBS1gsSUFBMUM7SUFDSCxDQUZELE1BR0s7TUFDRCxLQUFLRyxxQkFBTCxDQUEyQlEsV0FBM0IsQ0FBdUMsTUFBdkMsRUFBK0MsS0FBS1gsSUFBcEQ7SUFDSDs7SUFDRCxLQUFLQyxnQkFBTCxDQUFzQlUsV0FBdEIsQ0FBa0MsTUFBbEMsRUFBMEMsS0FBS1gsSUFBTCxHQUFZLEVBQXREO0VBQ0g7QUFuRUksQ0FBVCIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiY2MuQ2xhc3Moe1xuICAgIGV4dGVuZHM6IGNjLkNvbXBvbmVudCxcblxuICAgIHByb3BlcnRpZXM6IHtcbiAgICAgICAgYmFja2dyb3VkOiBjYy5TcHJpdGUsXG4gICAgICAgIGNvbnRlbnQ6IGNjLlNwcml0ZSxcbiAgICAgICAgY3VzdG9tRWZmZWN0czogW2NjLkVmZmVjdEFzc2V0XSxcbiAgICAgICAgY29udGVudFRleHR1cmU6IHtcbiAgICAgICAgICAgIGRlZmF1bHQ6IG51bGwsXG4gICAgICAgICAgICB0eXBlOiBjYy5UZXh0dXJlMkRcbiAgICAgICAgfSxcbiAgICAgICAgZ29sZDoge1xuICAgICAgICAgICAgZGVmYXVsdDogbnVsbCxcbiAgICAgICAgICAgIHR5cGU6IGNjLlRleHR1cmUyRFxuICAgICAgICB9LFxuICAgICAgICBzcGVlZDogMC4xLFxuICAgICAgICBfZWZmZWN0SW5kZXg6IDAsXG4gICAgfSxcblxuICAgIC8vIExJRkUtQ1lDTEUgQ0FMTEJBQ0tTOlxuXG4gICAgLy8gb25Mb2FkICgpIHt9LFxuXG4gICAgb25FbmFibGUgKCkge1xuICAgICAgICB0aGlzLm9yaWdpblN0YXRlID0gY2MuZHluYW1pY0F0bGFzTWFuYWdlci5lbmFibGVkO1xuICAgICAgICBjYy5keW5hbWljQXRsYXNNYW5hZ2VyLmVuYWJsZWQgPSBmYWxzZTtcbiAgICB9LFxuXG4gICAgb25EaXNhYmxlICgpIHtcbiAgICAgICAgY2MuZHluYW1pY0F0bGFzTWFuYWdlci5lbmFibGVkID0gdGhpcy5vcmlnaW5TdGF0ZTtcbiAgICB9LFxuXG4gICAgc3RhcnQgKCkge1xuICAgICAgICB0aGlzLnRpbWUgPSAwO1xuICAgICAgICB0aGlzLmJnU3ByaXRlTWF0ZXJpYWwgPSB0aGlzLmJhY2tncm91ZC5nZXRNYXRlcmlhbCgwKTtcbiAgICAgICAgdGhpcy5jb250ZW50U3ByaXRlTWF0ZXJpYWwgPSB0aGlzLmNvbnRlbnQuZ2V0TWF0ZXJpYWwoMCk7XG4gICAgfSxcblxuICAgIGNoYW5nZUVmZmVjdCAoKSB7XG4gICAgICAgIHRoaXMudGltZSA9IDA7XG4gICAgICAgIGlmICh0aGlzLl9lZmZlY3RJbmRleCA+PSB0aGlzLmN1c3RvbUVmZmVjdHMubGVuZ3RoKSB7XG4gICAgICAgICAgICB0aGlzLl9lZmZlY3RJbmRleCA9IDA7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5uZXdNYXRlcmlhbCA9IG5ldyBjYy5NYXRlcmlhbCgpO1xuICAgICAgICBsZXQgbmV3RWZmZWN0ID0gdGhpcy5jdXN0b21FZmZlY3RzW3RoaXMuX2VmZmVjdEluZGV4XTtcbiAgICAgICAgdGhpcy5fZWZmZWN0SW5kZXgrKztcbiAgICAgICAgdGhpcy5uZXdNYXRlcmlhbC5lZmZlY3RBc3NldCA9IG5ld0VmZmVjdDtcbiAgICAgICAgdGhpcy5uZXdNYXRlcmlhbC5uYW1lID0gbmV3RWZmZWN0Lm5hbWU7XG4gICAgICAgIGlmIChuZXdFZmZlY3QubmFtZSA9PT0gXCJjdXN0b21fbWF0ZXJpYWxcIikge1xuICAgICAgICAgICAgdGhpcy5uZXdNYXRlcmlhbC5zZXRQcm9wZXJ0eShcInRleHR1cmVcIiwgdGhpcy5jb250ZW50VGV4dHVyZSk7XG4gICAgICAgICAgICB0aGlzLm5ld01hdGVyaWFsLnNldFByb3BlcnR5KFwidGV4dHVyZTJcIiwgdGhpcy5nb2xkKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmNvbnRlbnQuc2V0TWF0ZXJpYWwoMCwgdGhpcy5uZXdNYXRlcmlhbCk7XG4gICAgfSxcblxuICAgIHVwZGF0ZSAoZHQpIHtcbiAgICAgICAgaWYgKCF0aGlzLmJnU3ByaXRlTWF0ZXJpYWwgfHwgIXRoaXMuY29udGVudFNwcml0ZU1hdGVyaWFsKSByZXR1cm47XG5cbiAgICAgICAgdGhpcy50aW1lICs9IGR0ICogdGhpcy5zcGVlZDtcblxuICAgICAgICBpZiAodGhpcy5uZXdNYXRlcmlhbCkge1xuICAgICAgICAgICAgdGhpcy5uZXdNYXRlcmlhbC5zZXRQcm9wZXJ0eSgndGltZScsIHRoaXMudGltZSlcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuY29udGVudFNwcml0ZU1hdGVyaWFsLnNldFByb3BlcnR5KCd0aW1lJywgdGhpcy50aW1lKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmJnU3ByaXRlTWF0ZXJpYWwuc2V0UHJvcGVydHkoJ3RpbWUnLCB0aGlzLnRpbWUgKiAxMCk7XG4gICAgfSxcbn0pO1xuIl19