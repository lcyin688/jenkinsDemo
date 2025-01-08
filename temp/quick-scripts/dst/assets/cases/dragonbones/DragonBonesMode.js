
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/cases/dragonbones/DragonBonesMode.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'e8dc46nxuNKebKNWx98iFc4', 'DragonBonesMode');
// cases/dragonbones/DragonBonesMode.js

"use strict";

cc.Class({
  "extends": cc.Component,
  properties: {
    grayMaterial: cc.Material,
    normalMaterial: cc.Material,
    db0: dragonBones.ArmatureDisplay,
    db1: dragonBones.ArmatureDisplay,
    db2: dragonBones.ArmatureDisplay,
    batchLabel: cc.Label,
    cacheLabel: cc.Label,
    matLabel: cc.Label
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

    this.db0.setMaterial(0, material);
    this.db0.markForRender(true);
    this.db1.setMaterial(0, material);
    this.db1.markForRender(true);
    this.db2.setMaterial(0, material);
    this.db2.markForRender(true);
  },
  onBatch: function onBatch() {
    this.isBatch = !this.isBatch;
    var label = "batch";
    if (this.isBatch) label = "no batch";
    this.batchLabel.string = label;
    this.db0.enableBatch = this.isBatch;
    this.db1.enableBatch = this.isBatch;
    this.db2.enableBatch = this.isBatch;
  },
  onCache: function onCache() {
    this.isCache = !this.isCache;
    var label = "cache";
    if (this.isCache) label = "no cache";
    this.cacheLabel.string = label;
    var mode = dragonBones.ArmatureDisplay.AnimationCacheMode.SHARED_CACHE;
    if (!this.isCache) mode = dragonBones.ArmatureDisplay.AnimationCacheMode.REALTIME;
    this.db0.setAnimationCacheMode(mode);
    this.db1.setAnimationCacheMode(mode);
    this.db2.setAnimationCacheMode(mode);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9jYXNlcy9kcmFnb25ib25lcy9EcmFnb25Cb25lc01vZGUuanMiXSwibmFtZXMiOlsiY2MiLCJDbGFzcyIsIkNvbXBvbmVudCIsInByb3BlcnRpZXMiLCJncmF5TWF0ZXJpYWwiLCJNYXRlcmlhbCIsIm5vcm1hbE1hdGVyaWFsIiwiZGIwIiwiZHJhZ29uQm9uZXMiLCJBcm1hdHVyZURpc3BsYXkiLCJkYjEiLCJkYjIiLCJiYXRjaExhYmVsIiwiTGFiZWwiLCJjYWNoZUxhYmVsIiwibWF0TGFiZWwiLCJvbkdyYXkiLCJpc0dyYXkiLCJsYWJlbCIsInN0cmluZyIsIm1hdGVyaWFsIiwic2V0TWF0ZXJpYWwiLCJtYXJrRm9yUmVuZGVyIiwib25CYXRjaCIsImlzQmF0Y2giLCJlbmFibGVCYXRjaCIsIm9uQ2FjaGUiLCJpc0NhY2hlIiwibW9kZSIsIkFuaW1hdGlvbkNhY2hlTW9kZSIsIlNIQVJFRF9DQUNIRSIsIlJFQUxUSU1FIiwic2V0QW5pbWF0aW9uQ2FjaGVNb2RlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBQSxFQUFFLENBQUNDLEtBQUgsQ0FBUztFQUNMLFdBQVNELEVBQUUsQ0FBQ0UsU0FEUDtFQUdMQyxVQUFVLEVBQUU7SUFDUkMsWUFBWSxFQUFFSixFQUFFLENBQUNLLFFBRFQ7SUFFUkMsY0FBYyxFQUFFTixFQUFFLENBQUNLLFFBRlg7SUFHUkUsR0FBRyxFQUFFQyxXQUFXLENBQUNDLGVBSFQ7SUFJUkMsR0FBRyxFQUFFRixXQUFXLENBQUNDLGVBSlQ7SUFLUkUsR0FBRyxFQUFFSCxXQUFXLENBQUNDLGVBTFQ7SUFNUkcsVUFBVSxFQUFFWixFQUFFLENBQUNhLEtBTlA7SUFPUkMsVUFBVSxFQUFFZCxFQUFFLENBQUNhLEtBUFA7SUFRUkUsUUFBUSxFQUFFZixFQUFFLENBQUNhO0VBUkwsQ0FIUDtFQWNMRyxNQWRLLG9CQWNLO0lBQ04sS0FBS0MsTUFBTCxHQUFjLENBQUMsS0FBS0EsTUFBcEI7SUFFQSxJQUFJQyxLQUFLLEdBQUcsTUFBWjtJQUNBLElBQUksS0FBS0QsTUFBVCxFQUFpQkMsS0FBSyxHQUFHLFFBQVI7SUFDakIsS0FBS0gsUUFBTCxDQUFjSSxNQUFkLEdBQXVCRCxLQUF2QjtJQUVBLElBQUlFLFFBQVEsR0FBRyxLQUFLaEIsWUFBcEI7O0lBQ0EsSUFBSSxDQUFDLEtBQUthLE1BQVYsRUFBa0I7TUFDZEcsUUFBUSxHQUFHLEtBQUtkLGNBQWhCO0lBQ0g7O0lBQ0QsS0FBS0MsR0FBTCxDQUFTYyxXQUFULENBQXFCLENBQXJCLEVBQXdCRCxRQUF4QjtJQUNBLEtBQUtiLEdBQUwsQ0FBU2UsYUFBVCxDQUF1QixJQUF2QjtJQUVBLEtBQUtaLEdBQUwsQ0FBU1csV0FBVCxDQUFxQixDQUFyQixFQUF3QkQsUUFBeEI7SUFDQSxLQUFLVixHQUFMLENBQVNZLGFBQVQsQ0FBdUIsSUFBdkI7SUFFQSxLQUFLWCxHQUFMLENBQVNVLFdBQVQsQ0FBcUIsQ0FBckIsRUFBd0JELFFBQXhCO0lBQ0EsS0FBS1QsR0FBTCxDQUFTVyxhQUFULENBQXVCLElBQXZCO0VBQ0gsQ0FqQ0k7RUFtQ0xDLE9BbkNLLHFCQW1DTTtJQUNQLEtBQUtDLE9BQUwsR0FBZSxDQUFDLEtBQUtBLE9BQXJCO0lBQ0EsSUFBSU4sS0FBSyxHQUFHLE9BQVo7SUFDQSxJQUFJLEtBQUtNLE9BQVQsRUFBa0JOLEtBQUssR0FBRyxVQUFSO0lBQ2xCLEtBQUtOLFVBQUwsQ0FBZ0JPLE1BQWhCLEdBQXlCRCxLQUF6QjtJQUVBLEtBQUtYLEdBQUwsQ0FBU2tCLFdBQVQsR0FBdUIsS0FBS0QsT0FBNUI7SUFDQSxLQUFLZCxHQUFMLENBQVNlLFdBQVQsR0FBdUIsS0FBS0QsT0FBNUI7SUFDQSxLQUFLYixHQUFMLENBQVNjLFdBQVQsR0FBdUIsS0FBS0QsT0FBNUI7RUFDSCxDQTVDSTtFQThDTEUsT0E5Q0sscUJBOENNO0lBQ1AsS0FBS0MsT0FBTCxHQUFlLENBQUMsS0FBS0EsT0FBckI7SUFFQSxJQUFJVCxLQUFLLEdBQUcsT0FBWjtJQUNBLElBQUksS0FBS1MsT0FBVCxFQUFrQlQsS0FBSyxHQUFHLFVBQVI7SUFDbEIsS0FBS0osVUFBTCxDQUFnQkssTUFBaEIsR0FBeUJELEtBQXpCO0lBRUEsSUFBSVUsSUFBSSxHQUFHcEIsV0FBVyxDQUFDQyxlQUFaLENBQTRCb0Isa0JBQTVCLENBQStDQyxZQUExRDtJQUNBLElBQUksQ0FBQyxLQUFLSCxPQUFWLEVBQW1CQyxJQUFJLEdBQUdwQixXQUFXLENBQUNDLGVBQVosQ0FBNEJvQixrQkFBNUIsQ0FBK0NFLFFBQXREO0lBQ25CLEtBQUt4QixHQUFMLENBQVN5QixxQkFBVCxDQUErQkosSUFBL0I7SUFDQSxLQUFLbEIsR0FBTCxDQUFTc0IscUJBQVQsQ0FBK0JKLElBQS9CO0lBQ0EsS0FBS2pCLEdBQUwsQ0FBU3FCLHFCQUFULENBQStCSixJQUEvQjtFQUNIO0FBMURJLENBQVQiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImNjLkNsYXNzKHtcbiAgICBleHRlbmRzOiBjYy5Db21wb25lbnQsXG5cbiAgICBwcm9wZXJ0aWVzOiB7XG4gICAgICAgIGdyYXlNYXRlcmlhbDogY2MuTWF0ZXJpYWwsXG4gICAgICAgIG5vcm1hbE1hdGVyaWFsOiBjYy5NYXRlcmlhbCxcbiAgICAgICAgZGIwOiBkcmFnb25Cb25lcy5Bcm1hdHVyZURpc3BsYXksXG4gICAgICAgIGRiMTogZHJhZ29uQm9uZXMuQXJtYXR1cmVEaXNwbGF5LFxuICAgICAgICBkYjI6IGRyYWdvbkJvbmVzLkFybWF0dXJlRGlzcGxheSxcbiAgICAgICAgYmF0Y2hMYWJlbDogY2MuTGFiZWwsXG4gICAgICAgIGNhY2hlTGFiZWw6IGNjLkxhYmVsLFxuICAgICAgICBtYXRMYWJlbDogY2MuTGFiZWwsXG4gICAgfSxcblxuICAgIG9uR3JheSAoKSB7XG4gICAgICAgIHRoaXMuaXNHcmF5ID0gIXRoaXMuaXNHcmF5O1xuXG4gICAgICAgIGxldCBsYWJlbCA9IFwiZ3JheVwiO1xuICAgICAgICBpZiAodGhpcy5pc0dyYXkpIGxhYmVsID0gXCJub3JtYWxcIjtcbiAgICAgICAgdGhpcy5tYXRMYWJlbC5zdHJpbmcgPSBsYWJlbDtcblxuICAgICAgICBsZXQgbWF0ZXJpYWwgPSB0aGlzLmdyYXlNYXRlcmlhbDtcbiAgICAgICAgaWYgKCF0aGlzLmlzR3JheSkge1xuICAgICAgICAgICAgbWF0ZXJpYWwgPSB0aGlzLm5vcm1hbE1hdGVyaWFsO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuZGIwLnNldE1hdGVyaWFsKDAsIG1hdGVyaWFsKTtcbiAgICAgICAgdGhpcy5kYjAubWFya0ZvclJlbmRlcih0cnVlKTtcblxuICAgICAgICB0aGlzLmRiMS5zZXRNYXRlcmlhbCgwLCBtYXRlcmlhbCk7XG4gICAgICAgIHRoaXMuZGIxLm1hcmtGb3JSZW5kZXIodHJ1ZSk7XG5cbiAgICAgICAgdGhpcy5kYjIuc2V0TWF0ZXJpYWwoMCwgbWF0ZXJpYWwpO1xuICAgICAgICB0aGlzLmRiMi5tYXJrRm9yUmVuZGVyKHRydWUpO1xuICAgIH0sXG5cbiAgICBvbkJhdGNoICgpIHtcbiAgICAgICAgdGhpcy5pc0JhdGNoID0gIXRoaXMuaXNCYXRjaDtcbiAgICAgICAgbGV0IGxhYmVsID0gXCJiYXRjaFwiO1xuICAgICAgICBpZiAodGhpcy5pc0JhdGNoKSBsYWJlbCA9IFwibm8gYmF0Y2hcIjtcbiAgICAgICAgdGhpcy5iYXRjaExhYmVsLnN0cmluZyA9IGxhYmVsO1xuXG4gICAgICAgIHRoaXMuZGIwLmVuYWJsZUJhdGNoID0gdGhpcy5pc0JhdGNoO1xuICAgICAgICB0aGlzLmRiMS5lbmFibGVCYXRjaCA9IHRoaXMuaXNCYXRjaDtcbiAgICAgICAgdGhpcy5kYjIuZW5hYmxlQmF0Y2ggPSB0aGlzLmlzQmF0Y2g7XG4gICAgfSxcblxuICAgIG9uQ2FjaGUgKCkge1xuICAgICAgICB0aGlzLmlzQ2FjaGUgPSAhdGhpcy5pc0NhY2hlO1xuXG4gICAgICAgIGxldCBsYWJlbCA9IFwiY2FjaGVcIjtcbiAgICAgICAgaWYgKHRoaXMuaXNDYWNoZSkgbGFiZWwgPSBcIm5vIGNhY2hlXCI7XG4gICAgICAgIHRoaXMuY2FjaGVMYWJlbC5zdHJpbmcgPSBsYWJlbDtcblxuICAgICAgICBsZXQgbW9kZSA9IGRyYWdvbkJvbmVzLkFybWF0dXJlRGlzcGxheS5BbmltYXRpb25DYWNoZU1vZGUuU0hBUkVEX0NBQ0hFO1xuICAgICAgICBpZiAoIXRoaXMuaXNDYWNoZSkgbW9kZSA9IGRyYWdvbkJvbmVzLkFybWF0dXJlRGlzcGxheS5BbmltYXRpb25DYWNoZU1vZGUuUkVBTFRJTUU7XG4gICAgICAgIHRoaXMuZGIwLnNldEFuaW1hdGlvbkNhY2hlTW9kZShtb2RlKTtcbiAgICAgICAgdGhpcy5kYjEuc2V0QW5pbWF0aW9uQ2FjaGVNb2RlKG1vZGUpO1xuICAgICAgICB0aGlzLmRiMi5zZXRBbmltYXRpb25DYWNoZU1vZGUobW9kZSk7XG4gICAgfSxcbn0pO1xuIl19