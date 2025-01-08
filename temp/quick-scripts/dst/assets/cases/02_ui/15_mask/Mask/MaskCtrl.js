
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/cases/02_ui/15_mask/Mask/MaskCtrl.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'c324aDRcOtM1oTGYSemsKTY', 'MaskCtrl');
// cases/02_ui/15_mask/Mask/MaskCtrl.js

"use strict";

cc.Class({
  "extends": cc.Component,
  properties: {
    mask: cc.Mask,
    slider: cc.Slider,
    label: cc.Label
  },
  // use this for initialization
  onLoad: function onLoad() {
    this.slider.progress = this.mask.alphaThreshold;
  },
  update: function update(dt) {
    if (cc.game.renderType !== cc.game.RENDER_TYPE_WEBGL && !CC_JSB) {
      return;
    }

    this.mask.alphaThreshold = this.slider.progress;
    this.label.string = this.slider.progress.toFixed(1);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9jYXNlcy8wMl91aS8xNV9tYXNrL01hc2svTWFza0N0cmwuanMiXSwibmFtZXMiOlsiY2MiLCJDbGFzcyIsIkNvbXBvbmVudCIsInByb3BlcnRpZXMiLCJtYXNrIiwiTWFzayIsInNsaWRlciIsIlNsaWRlciIsImxhYmVsIiwiTGFiZWwiLCJvbkxvYWQiLCJwcm9ncmVzcyIsImFscGhhVGhyZXNob2xkIiwidXBkYXRlIiwiZHQiLCJnYW1lIiwicmVuZGVyVHlwZSIsIlJFTkRFUl9UWVBFX1dFQkdMIiwiQ0NfSlNCIiwic3RyaW5nIiwidG9GaXhlZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQUEsRUFBRSxDQUFDQyxLQUFILENBQVM7RUFDTCxXQUFTRCxFQUFFLENBQUNFLFNBRFA7RUFHTEMsVUFBVSxFQUFFO0lBQ1JDLElBQUksRUFBRUosRUFBRSxDQUFDSyxJQUREO0lBRVJDLE1BQU0sRUFBRU4sRUFBRSxDQUFDTyxNQUZIO0lBR1JDLEtBQUssRUFBRVIsRUFBRSxDQUFDUztFQUhGLENBSFA7RUFTTDtFQUNBQyxNQUFNLEVBQUUsa0JBQVk7SUFDaEIsS0FBS0osTUFBTCxDQUFZSyxRQUFaLEdBQXVCLEtBQUtQLElBQUwsQ0FBVVEsY0FBakM7RUFDSCxDQVpJO0VBY0xDLE1BQU0sRUFBRSxnQkFBVUMsRUFBVixFQUFjO0lBQ2xCLElBQUlkLEVBQUUsQ0FBQ2UsSUFBSCxDQUFRQyxVQUFSLEtBQXVCaEIsRUFBRSxDQUFDZSxJQUFILENBQVFFLGlCQUEvQixJQUFvRCxDQUFDQyxNQUF6RCxFQUFpRTtNQUM3RDtJQUNIOztJQUNELEtBQUtkLElBQUwsQ0FBVVEsY0FBVixHQUEyQixLQUFLTixNQUFMLENBQVlLLFFBQXZDO0lBQ0EsS0FBS0gsS0FBTCxDQUFXVyxNQUFYLEdBQW9CLEtBQUtiLE1BQUwsQ0FBWUssUUFBWixDQUFxQlMsT0FBckIsQ0FBNkIsQ0FBN0IsQ0FBcEI7RUFDSDtBQXBCSSxDQUFUIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJjYy5DbGFzcyh7XG4gICAgZXh0ZW5kczogY2MuQ29tcG9uZW50LFxuXG4gICAgcHJvcGVydGllczoge1xuICAgICAgICBtYXNrOiBjYy5NYXNrLFxuICAgICAgICBzbGlkZXI6IGNjLlNsaWRlcixcbiAgICAgICAgbGFiZWw6IGNjLkxhYmVsXG4gICAgfSxcblxuICAgIC8vIHVzZSB0aGlzIGZvciBpbml0aWFsaXphdGlvblxuICAgIG9uTG9hZDogZnVuY3Rpb24gKCkge1xuICAgICAgICB0aGlzLnNsaWRlci5wcm9ncmVzcyA9IHRoaXMubWFzay5hbHBoYVRocmVzaG9sZDtcbiAgICB9LFxuXG4gICAgdXBkYXRlOiBmdW5jdGlvbiAoZHQpIHtcbiAgICAgICAgaWYgKGNjLmdhbWUucmVuZGVyVHlwZSAhPT0gY2MuZ2FtZS5SRU5ERVJfVFlQRV9XRUJHTCAmJiAhQ0NfSlNCKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5tYXNrLmFscGhhVGhyZXNob2xkID0gdGhpcy5zbGlkZXIucHJvZ3Jlc3M7XG4gICAgICAgIHRoaXMubGFiZWwuc3RyaW5nID0gdGhpcy5zbGlkZXIucHJvZ3Jlc3MudG9GaXhlZCgxKTtcbiAgICB9XG59KTtcbiJdfQ==