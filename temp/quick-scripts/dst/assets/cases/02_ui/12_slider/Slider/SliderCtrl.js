
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/cases/02_ui/12_slider/Slider/SliderCtrl.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '051d5Epx65ARZ9itjsuO9NL', 'SliderCtrl');
// cases/02_ui/12_slider/Slider/SliderCtrl.js

"use strict";

cc.Class({
  "extends": cc.Component,
  properties: {
    image: cc.Node,
    music: cc.AudioSource,
    slider_h: cc.Slider,
    slider_v: cc.Slider
  },
  onLoad: function onLoad() {
    this.slider_v.progress = 0.5;
    this.slider_h.progress = 0.5;

    this._updateImageOpacity(this.slider_v.progress);

    this._updateMusicVolume(this.slider_h.progress);
  },
  _updateImageOpacity: function _updateImageOpacity(progress) {
    this.image.opacity = progress * 255;
  },
  _updateMusicVolume: function _updateMusicVolume(progress) {
    this.music.volume = progress;
  },
  onSliderVEvent: function onSliderVEvent(sender, eventType) {
    this._updateImageOpacity(sender.progress);
  },
  onSliderHEvent: function onSliderHEvent(sender, eventType) {
    this._updateMusicVolume(sender.progress);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9jYXNlcy8wMl91aS8xMl9zbGlkZXIvU2xpZGVyL1NsaWRlckN0cmwuanMiXSwibmFtZXMiOlsiY2MiLCJDbGFzcyIsIkNvbXBvbmVudCIsInByb3BlcnRpZXMiLCJpbWFnZSIsIk5vZGUiLCJtdXNpYyIsIkF1ZGlvU291cmNlIiwic2xpZGVyX2giLCJTbGlkZXIiLCJzbGlkZXJfdiIsIm9uTG9hZCIsInByb2dyZXNzIiwiX3VwZGF0ZUltYWdlT3BhY2l0eSIsIl91cGRhdGVNdXNpY1ZvbHVtZSIsIm9wYWNpdHkiLCJ2b2x1bWUiLCJvblNsaWRlclZFdmVudCIsInNlbmRlciIsImV2ZW50VHlwZSIsIm9uU2xpZGVySEV2ZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBQSxFQUFFLENBQUNDLEtBQUgsQ0FBUztFQUNMLFdBQVNELEVBQUUsQ0FBQ0UsU0FEUDtFQUdMQyxVQUFVLEVBQUU7SUFDUkMsS0FBSyxFQUFFSixFQUFFLENBQUNLLElBREY7SUFFUkMsS0FBSyxFQUFFTixFQUFFLENBQUNPLFdBRkY7SUFHUkMsUUFBUSxFQUFFUixFQUFFLENBQUNTLE1BSEw7SUFJUkMsUUFBUSxFQUFFVixFQUFFLENBQUNTO0VBSkwsQ0FIUDtFQVVMRSxNQVZLLG9CQVVLO0lBQ04sS0FBS0QsUUFBTCxDQUFjRSxRQUFkLEdBQXlCLEdBQXpCO0lBQ0EsS0FBS0osUUFBTCxDQUFjSSxRQUFkLEdBQXlCLEdBQXpCOztJQUNBLEtBQUtDLG1CQUFMLENBQXlCLEtBQUtILFFBQUwsQ0FBY0UsUUFBdkM7O0lBQ0EsS0FBS0Usa0JBQUwsQ0FBd0IsS0FBS04sUUFBTCxDQUFjSSxRQUF0QztFQUNILENBZkk7RUFpQkxDLG1CQWpCSywrQkFpQmdCRCxRQWpCaEIsRUFpQjBCO0lBQzNCLEtBQUtSLEtBQUwsQ0FBV1csT0FBWCxHQUFxQkgsUUFBUSxHQUFHLEdBQWhDO0VBQ0gsQ0FuQkk7RUFxQkxFLGtCQXJCSyw4QkFxQmVGLFFBckJmLEVBcUJ5QjtJQUMxQixLQUFLTixLQUFMLENBQVdVLE1BQVgsR0FBb0JKLFFBQXBCO0VBQ0gsQ0F2Qkk7RUF5QkxLLGNBekJLLDBCQXlCV0MsTUF6QlgsRUF5Qm1CQyxTQXpCbkIsRUF5QjhCO0lBQy9CLEtBQUtOLG1CQUFMLENBQXlCSyxNQUFNLENBQUNOLFFBQWhDO0VBQ0gsQ0EzQkk7RUE2QkxRLGNBN0JLLDBCQTZCV0YsTUE3QlgsRUE2Qm1CQyxTQTdCbkIsRUE2QjhCO0lBQy9CLEtBQUtMLGtCQUFMLENBQXdCSSxNQUFNLENBQUNOLFFBQS9CO0VBQ0g7QUEvQkksQ0FBVCIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiY2MuQ2xhc3Moe1xuICAgIGV4dGVuZHM6IGNjLkNvbXBvbmVudCxcblxuICAgIHByb3BlcnRpZXM6IHtcbiAgICAgICAgaW1hZ2U6IGNjLk5vZGUsXG4gICAgICAgIG11c2ljOiBjYy5BdWRpb1NvdXJjZSxcbiAgICAgICAgc2xpZGVyX2g6IGNjLlNsaWRlcixcbiAgICAgICAgc2xpZGVyX3Y6IGNjLlNsaWRlclxuICAgIH0sXG5cbiAgICBvbkxvYWQgKCkge1xuICAgICAgICB0aGlzLnNsaWRlcl92LnByb2dyZXNzID0gMC41O1xuICAgICAgICB0aGlzLnNsaWRlcl9oLnByb2dyZXNzID0gMC41O1xuICAgICAgICB0aGlzLl91cGRhdGVJbWFnZU9wYWNpdHkodGhpcy5zbGlkZXJfdi5wcm9ncmVzcyk7XG4gICAgICAgIHRoaXMuX3VwZGF0ZU11c2ljVm9sdW1lKHRoaXMuc2xpZGVyX2gucHJvZ3Jlc3MpO1xuICAgIH0sXG5cbiAgICBfdXBkYXRlSW1hZ2VPcGFjaXR5IChwcm9ncmVzcykge1xuICAgICAgICB0aGlzLmltYWdlLm9wYWNpdHkgPSBwcm9ncmVzcyAqIDI1NTtcbiAgICB9LFxuXG4gICAgX3VwZGF0ZU11c2ljVm9sdW1lIChwcm9ncmVzcykge1xuICAgICAgICB0aGlzLm11c2ljLnZvbHVtZSA9IHByb2dyZXNzO1xuICAgIH0sXG5cbiAgICBvblNsaWRlclZFdmVudCAoc2VuZGVyLCBldmVudFR5cGUpIHtcbiAgICAgICAgdGhpcy5fdXBkYXRlSW1hZ2VPcGFjaXR5KHNlbmRlci5wcm9ncmVzcyk7XG4gICAgfSxcblxuICAgIG9uU2xpZGVySEV2ZW50IChzZW5kZXIsIGV2ZW50VHlwZSkge1xuICAgICAgICB0aGlzLl91cGRhdGVNdXNpY1ZvbHVtZShzZW5kZXIucHJvZ3Jlc3MpO1xuICAgIH1cbn0pO1xuIl19