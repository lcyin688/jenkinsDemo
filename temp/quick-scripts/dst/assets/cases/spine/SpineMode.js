
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/cases/spine/SpineMode.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '7fa3163/tVA2oO0IuiaM79C', 'SpineMode');
// cases/spine/SpineMode.js

"use strict";

cc.Class({
  "extends": cc.Component,
  properties: {
    grayMaterial: cc.Material,
    normalMaterial: cc.Material,
    sp0: sp.Skeleton,
    sp1: sp.Skeleton,
    sp2: sp.Skeleton,
    batchLabel: cc.Label,
    cacheLabel: cc.Label,
    matLabel: cc.Label,
    tintLabel: cc.Label
  },
  onGray: function onGray() {
    this.isGray = !this.isGray;
    var label = "gray";
    if (this.isGray) label = "normal";
    this.matLabel.string = label;
    var material = this.grayMaterial;

    if (!this.isGray) {
      material = this.normalMaterial;
    }

    this.sp0.setMaterial(0, material);
    this.sp0.markForRender(true);
    this.sp1.setMaterial(0, material);
    this.sp1.markForRender(true);
    this.sp2.setMaterial(0, material);
    this.sp2.markForRender(true);
  },
  onBatch: function onBatch() {
    this.isBatch = !this.isBatch;
    var label = "batch";
    if (this.isBatch) label = "no batch";
    this.batchLabel.string = label;
    this.sp0.enableBatch = this.isBatch;
    this.sp1.enableBatch = this.isBatch;
    this.sp2.enableBatch = this.isBatch;
  },
  onCache: function onCache() {
    this.isCache = !this.isCache;
    var label = "cache";
    if (this.isCache) label = "no cache";
    this.cacheLabel.string = label;
    var mode = dragonBones.ArmatureDisplay.AnimationCacheMode.SHARED_CACHE;
    if (!this.isCache) mode = dragonBones.ArmatureDisplay.AnimationCacheMode.REALTIME;
    this.sp0.setAnimationCacheMode(mode);
    this.sp1.setAnimationCacheMode(mode);
    this.sp2.setAnimationCacheMode(mode);
  },
  onTint: function onTint() {
    this.isTint = !this.isTint;
    var label = "tint";
    if (this.isTint) label = "no tint";
    this.tintLabel.string = label;
    this.sp0.useTint = this.isTint;
    this.sp1.useTint = this.isTint;
    this.sp2.useTint = this.isTint;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9jYXNlcy9zcGluZS9TcGluZU1vZGUuanMiXSwibmFtZXMiOlsiY2MiLCJDbGFzcyIsIkNvbXBvbmVudCIsInByb3BlcnRpZXMiLCJncmF5TWF0ZXJpYWwiLCJNYXRlcmlhbCIsIm5vcm1hbE1hdGVyaWFsIiwic3AwIiwic3AiLCJTa2VsZXRvbiIsInNwMSIsInNwMiIsImJhdGNoTGFiZWwiLCJMYWJlbCIsImNhY2hlTGFiZWwiLCJtYXRMYWJlbCIsInRpbnRMYWJlbCIsIm9uR3JheSIsImlzR3JheSIsImxhYmVsIiwic3RyaW5nIiwibWF0ZXJpYWwiLCJzZXRNYXRlcmlhbCIsIm1hcmtGb3JSZW5kZXIiLCJvbkJhdGNoIiwiaXNCYXRjaCIsImVuYWJsZUJhdGNoIiwib25DYWNoZSIsImlzQ2FjaGUiLCJtb2RlIiwiZHJhZ29uQm9uZXMiLCJBcm1hdHVyZURpc3BsYXkiLCJBbmltYXRpb25DYWNoZU1vZGUiLCJTSEFSRURfQ0FDSEUiLCJSRUFMVElNRSIsInNldEFuaW1hdGlvbkNhY2hlTW9kZSIsIm9uVGludCIsImlzVGludCIsInVzZVRpbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUFBLEVBQUUsQ0FBQ0MsS0FBSCxDQUFTO0VBQ0wsV0FBU0QsRUFBRSxDQUFDRSxTQURQO0VBR0xDLFVBQVUsRUFBRTtJQUNSQyxZQUFZLEVBQUVKLEVBQUUsQ0FBQ0ssUUFEVDtJQUVSQyxjQUFjLEVBQUVOLEVBQUUsQ0FBQ0ssUUFGWDtJQUdSRSxHQUFHLEVBQUVDLEVBQUUsQ0FBQ0MsUUFIQTtJQUlSQyxHQUFHLEVBQUVGLEVBQUUsQ0FBQ0MsUUFKQTtJQUtSRSxHQUFHLEVBQUVILEVBQUUsQ0FBQ0MsUUFMQTtJQU1SRyxVQUFVLEVBQUVaLEVBQUUsQ0FBQ2EsS0FOUDtJQU9SQyxVQUFVLEVBQUVkLEVBQUUsQ0FBQ2EsS0FQUDtJQVFSRSxRQUFRLEVBQUVmLEVBQUUsQ0FBQ2EsS0FSTDtJQVNSRyxTQUFTLEVBQUVoQixFQUFFLENBQUNhO0VBVE4sQ0FIUDtFQWVMSSxNQWZLLG9CQWVLO0lBQ04sS0FBS0MsTUFBTCxHQUFjLENBQUMsS0FBS0EsTUFBcEI7SUFFQSxJQUFJQyxLQUFLLEdBQUcsTUFBWjtJQUNBLElBQUksS0FBS0QsTUFBVCxFQUFpQkMsS0FBSyxHQUFHLFFBQVI7SUFDakIsS0FBS0osUUFBTCxDQUFjSyxNQUFkLEdBQXVCRCxLQUF2QjtJQUVBLElBQUlFLFFBQVEsR0FBRyxLQUFLakIsWUFBcEI7O0lBQ0EsSUFBSSxDQUFDLEtBQUtjLE1BQVYsRUFBa0I7TUFDZEcsUUFBUSxHQUFHLEtBQUtmLGNBQWhCO0lBQ0g7O0lBQ0QsS0FBS0MsR0FBTCxDQUFTZSxXQUFULENBQXFCLENBQXJCLEVBQXdCRCxRQUF4QjtJQUNBLEtBQUtkLEdBQUwsQ0FBU2dCLGFBQVQsQ0FBdUIsSUFBdkI7SUFFQSxLQUFLYixHQUFMLENBQVNZLFdBQVQsQ0FBcUIsQ0FBckIsRUFBd0JELFFBQXhCO0lBQ0EsS0FBS1gsR0FBTCxDQUFTYSxhQUFULENBQXVCLElBQXZCO0lBRUEsS0FBS1osR0FBTCxDQUFTVyxXQUFULENBQXFCLENBQXJCLEVBQXdCRCxRQUF4QjtJQUNBLEtBQUtWLEdBQUwsQ0FBU1ksYUFBVCxDQUF1QixJQUF2QjtFQUNILENBbENJO0VBb0NMQyxPQXBDSyxxQkFvQ007SUFDUCxLQUFLQyxPQUFMLEdBQWUsQ0FBQyxLQUFLQSxPQUFyQjtJQUNBLElBQUlOLEtBQUssR0FBRyxPQUFaO0lBQ0EsSUFBSSxLQUFLTSxPQUFULEVBQWtCTixLQUFLLEdBQUcsVUFBUjtJQUNsQixLQUFLUCxVQUFMLENBQWdCUSxNQUFoQixHQUF5QkQsS0FBekI7SUFFQSxLQUFLWixHQUFMLENBQVNtQixXQUFULEdBQXVCLEtBQUtELE9BQTVCO0lBQ0EsS0FBS2YsR0FBTCxDQUFTZ0IsV0FBVCxHQUF1QixLQUFLRCxPQUE1QjtJQUNBLEtBQUtkLEdBQUwsQ0FBU2UsV0FBVCxHQUF1QixLQUFLRCxPQUE1QjtFQUNILENBN0NJO0VBK0NMRSxPQS9DSyxxQkErQ007SUFDUCxLQUFLQyxPQUFMLEdBQWUsQ0FBQyxLQUFLQSxPQUFyQjtJQUVBLElBQUlULEtBQUssR0FBRyxPQUFaO0lBQ0EsSUFBSSxLQUFLUyxPQUFULEVBQWtCVCxLQUFLLEdBQUcsVUFBUjtJQUNsQixLQUFLTCxVQUFMLENBQWdCTSxNQUFoQixHQUF5QkQsS0FBekI7SUFFQSxJQUFJVSxJQUFJLEdBQUdDLFdBQVcsQ0FBQ0MsZUFBWixDQUE0QkMsa0JBQTVCLENBQStDQyxZQUExRDtJQUNBLElBQUksQ0FBQyxLQUFLTCxPQUFWLEVBQW1CQyxJQUFJLEdBQUdDLFdBQVcsQ0FBQ0MsZUFBWixDQUE0QkMsa0JBQTVCLENBQStDRSxRQUF0RDtJQUNuQixLQUFLM0IsR0FBTCxDQUFTNEIscUJBQVQsQ0FBK0JOLElBQS9CO0lBQ0EsS0FBS25CLEdBQUwsQ0FBU3lCLHFCQUFULENBQStCTixJQUEvQjtJQUNBLEtBQUtsQixHQUFMLENBQVN3QixxQkFBVCxDQUErQk4sSUFBL0I7RUFDSCxDQTNESTtFQTZETE8sTUE3REssb0JBNkRLO0lBQ04sS0FBS0MsTUFBTCxHQUFjLENBQUMsS0FBS0EsTUFBcEI7SUFFQSxJQUFJbEIsS0FBSyxHQUFHLE1BQVo7SUFDQSxJQUFJLEtBQUtrQixNQUFULEVBQWlCbEIsS0FBSyxHQUFHLFNBQVI7SUFDakIsS0FBS0gsU0FBTCxDQUFlSSxNQUFmLEdBQXdCRCxLQUF4QjtJQUVBLEtBQUtaLEdBQUwsQ0FBUytCLE9BQVQsR0FBbUIsS0FBS0QsTUFBeEI7SUFDQSxLQUFLM0IsR0FBTCxDQUFTNEIsT0FBVCxHQUFtQixLQUFLRCxNQUF4QjtJQUNBLEtBQUsxQixHQUFMLENBQVMyQixPQUFULEdBQW1CLEtBQUtELE1BQXhCO0VBQ0g7QUF2RUksQ0FBVCIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiY2MuQ2xhc3Moe1xuICAgIGV4dGVuZHM6IGNjLkNvbXBvbmVudCxcblxuICAgIHByb3BlcnRpZXM6IHtcbiAgICAgICAgZ3JheU1hdGVyaWFsOiBjYy5NYXRlcmlhbCxcbiAgICAgICAgbm9ybWFsTWF0ZXJpYWw6IGNjLk1hdGVyaWFsLFxuICAgICAgICBzcDA6IHNwLlNrZWxldG9uLFxuICAgICAgICBzcDE6IHNwLlNrZWxldG9uLFxuICAgICAgICBzcDI6IHNwLlNrZWxldG9uLFxuICAgICAgICBiYXRjaExhYmVsOiBjYy5MYWJlbCxcbiAgICAgICAgY2FjaGVMYWJlbDogY2MuTGFiZWwsXG4gICAgICAgIG1hdExhYmVsOiBjYy5MYWJlbCxcbiAgICAgICAgdGludExhYmVsOiBjYy5MYWJlbCxcbiAgICB9LFxuXG4gICAgb25HcmF5ICgpIHtcbiAgICAgICAgdGhpcy5pc0dyYXkgPSAhdGhpcy5pc0dyYXk7XG5cbiAgICAgICAgbGV0IGxhYmVsID0gXCJncmF5XCI7XG4gICAgICAgIGlmICh0aGlzLmlzR3JheSkgbGFiZWwgPSBcIm5vcm1hbFwiO1xuICAgICAgICB0aGlzLm1hdExhYmVsLnN0cmluZyA9IGxhYmVsO1xuXG4gICAgICAgIGxldCBtYXRlcmlhbCA9IHRoaXMuZ3JheU1hdGVyaWFsO1xuICAgICAgICBpZiAoIXRoaXMuaXNHcmF5KSB7XG4gICAgICAgICAgICBtYXRlcmlhbCA9IHRoaXMubm9ybWFsTWF0ZXJpYWw7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5zcDAuc2V0TWF0ZXJpYWwoMCwgbWF0ZXJpYWwpO1xuICAgICAgICB0aGlzLnNwMC5tYXJrRm9yUmVuZGVyKHRydWUpO1xuXG4gICAgICAgIHRoaXMuc3AxLnNldE1hdGVyaWFsKDAsIG1hdGVyaWFsKTtcbiAgICAgICAgdGhpcy5zcDEubWFya0ZvclJlbmRlcih0cnVlKTtcblxuICAgICAgICB0aGlzLnNwMi5zZXRNYXRlcmlhbCgwLCBtYXRlcmlhbCk7XG4gICAgICAgIHRoaXMuc3AyLm1hcmtGb3JSZW5kZXIodHJ1ZSk7XG4gICAgfSxcblxuICAgIG9uQmF0Y2ggKCkge1xuICAgICAgICB0aGlzLmlzQmF0Y2ggPSAhdGhpcy5pc0JhdGNoO1xuICAgICAgICBsZXQgbGFiZWwgPSBcImJhdGNoXCI7XG4gICAgICAgIGlmICh0aGlzLmlzQmF0Y2gpIGxhYmVsID0gXCJubyBiYXRjaFwiO1xuICAgICAgICB0aGlzLmJhdGNoTGFiZWwuc3RyaW5nID0gbGFiZWw7XG5cbiAgICAgICAgdGhpcy5zcDAuZW5hYmxlQmF0Y2ggPSB0aGlzLmlzQmF0Y2g7XG4gICAgICAgIHRoaXMuc3AxLmVuYWJsZUJhdGNoID0gdGhpcy5pc0JhdGNoO1xuICAgICAgICB0aGlzLnNwMi5lbmFibGVCYXRjaCA9IHRoaXMuaXNCYXRjaDtcbiAgICB9LFxuXG4gICAgb25DYWNoZSAoKSB7XG4gICAgICAgIHRoaXMuaXNDYWNoZSA9ICF0aGlzLmlzQ2FjaGU7XG5cbiAgICAgICAgbGV0IGxhYmVsID0gXCJjYWNoZVwiO1xuICAgICAgICBpZiAodGhpcy5pc0NhY2hlKSBsYWJlbCA9IFwibm8gY2FjaGVcIjtcbiAgICAgICAgdGhpcy5jYWNoZUxhYmVsLnN0cmluZyA9IGxhYmVsO1xuXG4gICAgICAgIGxldCBtb2RlID0gZHJhZ29uQm9uZXMuQXJtYXR1cmVEaXNwbGF5LkFuaW1hdGlvbkNhY2hlTW9kZS5TSEFSRURfQ0FDSEU7XG4gICAgICAgIGlmICghdGhpcy5pc0NhY2hlKSBtb2RlID0gZHJhZ29uQm9uZXMuQXJtYXR1cmVEaXNwbGF5LkFuaW1hdGlvbkNhY2hlTW9kZS5SRUFMVElNRTtcbiAgICAgICAgdGhpcy5zcDAuc2V0QW5pbWF0aW9uQ2FjaGVNb2RlKG1vZGUpO1xuICAgICAgICB0aGlzLnNwMS5zZXRBbmltYXRpb25DYWNoZU1vZGUobW9kZSk7XG4gICAgICAgIHRoaXMuc3AyLnNldEFuaW1hdGlvbkNhY2hlTW9kZShtb2RlKTtcbiAgICB9LFxuXG4gICAgb25UaW50ICgpIHtcbiAgICAgICAgdGhpcy5pc1RpbnQgPSAhdGhpcy5pc1RpbnQ7XG5cbiAgICAgICAgbGV0IGxhYmVsID0gXCJ0aW50XCI7XG4gICAgICAgIGlmICh0aGlzLmlzVGludCkgbGFiZWwgPSBcIm5vIHRpbnRcIjtcbiAgICAgICAgdGhpcy50aW50TGFiZWwuc3RyaW5nID0gbGFiZWw7XG5cbiAgICAgICAgdGhpcy5zcDAudXNlVGludCA9IHRoaXMuaXNUaW50O1xuICAgICAgICB0aGlzLnNwMS51c2VUaW50ID0gdGhpcy5pc1RpbnQ7XG4gICAgICAgIHRoaXMuc3AyLnVzZVRpbnQgPSB0aGlzLmlzVGludDtcbiAgICB9XG59KTtcbiJdfQ==