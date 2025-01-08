
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/cases/dragonbones/ReplaceSlotDisplay.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '972e5Ii4p5AYa4e91UP427+', 'ReplaceSlotDisplay');
// cases/dragonbones/ReplaceSlotDisplay.js

"use strict";

cc.Class({
  "extends": cc.Component,
  properties: {
    armatureDisplay: {
      type: dragonBones.ArmatureDisplay,
      "default": null
    },
    replaceArmatureDisplay: {
      type: dragonBones.ArmatureDisplay,
      "default": null
    }
  },
  start: function start() {
    this.replaceArmatureDisplay.node.active = false;
    this._leftWeaponIndex = 0;
    this._rightDisplayIndex = 0;
    this._rightDisplayNames = ["weapon_1004_r", "weapon_1004d_r"];
    this._rightDisplayOffset = [{
      x: 0,
      y: 0
    }, {
      x: -60,
      y: 100
    }];
  },
  left: function left() {
    var armature = this.armatureDisplay.armature();
    var slot = armature.getSlot("weapon_hand_l");
    slot.displayIndex = slot.displayIndex == 0 ? 4 : 0;
  },
  right: function right() {
    this._rightDisplayIndex++;
    this._rightDisplayIndex %= this._rightDisplayNames.length;
    var armature = this.armatureDisplay.armature();
    var slot = armature.getSlot("weapon_hand_r");
    var displayName = this._rightDisplayNames[this._rightDisplayIndex];
    var factory = dragonBones.CCFactory.getInstance();
    factory.replaceSlotDisplay(this.replaceArmatureDisplay.getArmatureKey(), "weapon", "weapon_r", displayName, slot);
    var offset = this._rightDisplayOffset[this._rightDisplayIndex];
    slot.parent.offset.x = offset.x;
    slot.parent.offset.y = offset.y;
    armature.invalidUpdate();
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9jYXNlcy9kcmFnb25ib25lcy9SZXBsYWNlU2xvdERpc3BsYXkuanMiXSwibmFtZXMiOlsiY2MiLCJDbGFzcyIsIkNvbXBvbmVudCIsInByb3BlcnRpZXMiLCJhcm1hdHVyZURpc3BsYXkiLCJ0eXBlIiwiZHJhZ29uQm9uZXMiLCJBcm1hdHVyZURpc3BsYXkiLCJyZXBsYWNlQXJtYXR1cmVEaXNwbGF5Iiwic3RhcnQiLCJub2RlIiwiYWN0aXZlIiwiX2xlZnRXZWFwb25JbmRleCIsIl9yaWdodERpc3BsYXlJbmRleCIsIl9yaWdodERpc3BsYXlOYW1lcyIsIl9yaWdodERpc3BsYXlPZmZzZXQiLCJ4IiwieSIsImxlZnQiLCJhcm1hdHVyZSIsInNsb3QiLCJnZXRTbG90IiwiZGlzcGxheUluZGV4IiwicmlnaHQiLCJsZW5ndGgiLCJkaXNwbGF5TmFtZSIsImZhY3RvcnkiLCJDQ0ZhY3RvcnkiLCJnZXRJbnN0YW5jZSIsInJlcGxhY2VTbG90RGlzcGxheSIsImdldEFybWF0dXJlS2V5Iiwib2Zmc2V0IiwicGFyZW50IiwiaW52YWxpZFVwZGF0ZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQUEsRUFBRSxDQUFDQyxLQUFILENBQVM7RUFDTCxXQUFTRCxFQUFFLENBQUNFLFNBRFA7RUFHTEMsVUFBVSxFQUFFO0lBQ1JDLGVBQWUsRUFBQztNQUNaQyxJQUFJLEVBQUNDLFdBQVcsQ0FBQ0MsZUFETDtNQUVaLFdBQVE7SUFGSSxDQURSO0lBS1JDLHNCQUFzQixFQUFDO01BQ25CSCxJQUFJLEVBQUNDLFdBQVcsQ0FBQ0MsZUFERTtNQUVuQixXQUFRO0lBRlc7RUFMZixDQUhQO0VBY0xFLEtBZEssbUJBY0k7SUFDTCxLQUFLRCxzQkFBTCxDQUE0QkUsSUFBNUIsQ0FBaUNDLE1BQWpDLEdBQTBDLEtBQTFDO0lBQ0EsS0FBS0MsZ0JBQUwsR0FBd0IsQ0FBeEI7SUFDQSxLQUFLQyxrQkFBTCxHQUEwQixDQUExQjtJQUNBLEtBQUtDLGtCQUFMLEdBQTBCLENBQUMsZUFBRCxFQUFrQixnQkFBbEIsQ0FBMUI7SUFDQSxLQUFLQyxtQkFBTCxHQUEyQixDQUFDO01BQUNDLENBQUMsRUFBQyxDQUFIO01BQUtDLENBQUMsRUFBQztJQUFQLENBQUQsRUFBWTtNQUFDRCxDQUFDLEVBQUMsQ0FBQyxFQUFKO01BQU9DLENBQUMsRUFBQztJQUFULENBQVosQ0FBM0I7RUFDSCxDQXBCSTtFQXNCTEMsSUF0Qkssa0JBc0JHO0lBQ0osSUFBSUMsUUFBUSxHQUFHLEtBQUtmLGVBQUwsQ0FBcUJlLFFBQXJCLEVBQWY7SUFDQSxJQUFJQyxJQUFJLEdBQUdELFFBQVEsQ0FBQ0UsT0FBVCxDQUFpQixlQUFqQixDQUFYO0lBQ0FELElBQUksQ0FBQ0UsWUFBTCxHQUFvQkYsSUFBSSxDQUFDRSxZQUFMLElBQXFCLENBQXJCLEdBQXlCLENBQXpCLEdBQTZCLENBQWpEO0VBQ0gsQ0ExQkk7RUE0QkxDLEtBNUJLLG1CQTRCSTtJQUNMLEtBQUtWLGtCQUFMO0lBQ0EsS0FBS0Esa0JBQUwsSUFBMkIsS0FBS0Msa0JBQUwsQ0FBd0JVLE1BQW5EO0lBQ0EsSUFBSUwsUUFBUSxHQUFHLEtBQUtmLGVBQUwsQ0FBcUJlLFFBQXJCLEVBQWY7SUFDQSxJQUFJQyxJQUFJLEdBQUdELFFBQVEsQ0FBQ0UsT0FBVCxDQUFpQixlQUFqQixDQUFYO0lBQ0EsSUFBTUksV0FBVyxHQUFHLEtBQUtYLGtCQUFMLENBQXdCLEtBQUtELGtCQUE3QixDQUFwQjtJQUNBLElBQUlhLE9BQU8sR0FBR3BCLFdBQVcsQ0FBQ3FCLFNBQVosQ0FBc0JDLFdBQXRCLEVBQWQ7SUFDQUYsT0FBTyxDQUFDRyxrQkFBUixDQUEyQixLQUFLckIsc0JBQUwsQ0FBNEJzQixjQUE1QixFQUEzQixFQUF5RSxRQUF6RSxFQUFtRixVQUFuRixFQUErRkwsV0FBL0YsRUFBNEdMLElBQTVHO0lBRUEsSUFBSVcsTUFBTSxHQUFHLEtBQUtoQixtQkFBTCxDQUF5QixLQUFLRixrQkFBOUIsQ0FBYjtJQUNBTyxJQUFJLENBQUNZLE1BQUwsQ0FBWUQsTUFBWixDQUFtQmYsQ0FBbkIsR0FBdUJlLE1BQU0sQ0FBQ2YsQ0FBOUI7SUFDQUksSUFBSSxDQUFDWSxNQUFMLENBQVlELE1BQVosQ0FBbUJkLENBQW5CLEdBQXVCYyxNQUFNLENBQUNkLENBQTlCO0lBQ0FFLFFBQVEsQ0FBQ2MsYUFBVDtFQUNIO0FBekNJLENBQVQiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImNjLkNsYXNzKHtcbiAgICBleHRlbmRzOiBjYy5Db21wb25lbnQsXG5cbiAgICBwcm9wZXJ0aWVzOiB7XG4gICAgICAgIGFybWF0dXJlRGlzcGxheTp7XG4gICAgICAgICAgICB0eXBlOmRyYWdvbkJvbmVzLkFybWF0dXJlRGlzcGxheSxcbiAgICAgICAgICAgIGRlZmF1bHQ6bnVsbCxcbiAgICAgICAgfSxcbiAgICAgICAgcmVwbGFjZUFybWF0dXJlRGlzcGxheTp7XG4gICAgICAgICAgICB0eXBlOmRyYWdvbkJvbmVzLkFybWF0dXJlRGlzcGxheSxcbiAgICAgICAgICAgIGRlZmF1bHQ6bnVsbCxcbiAgICAgICAgfVxuICAgIH0sXG5cbiAgICBzdGFydCAoKSB7XG4gICAgICAgIHRoaXMucmVwbGFjZUFybWF0dXJlRGlzcGxheS5ub2RlLmFjdGl2ZSA9IGZhbHNlO1xuICAgICAgICB0aGlzLl9sZWZ0V2VhcG9uSW5kZXggPSAwO1xuICAgICAgICB0aGlzLl9yaWdodERpc3BsYXlJbmRleCA9IDA7XG4gICAgICAgIHRoaXMuX3JpZ2h0RGlzcGxheU5hbWVzID0gW1wid2VhcG9uXzEwMDRfclwiLCBcIndlYXBvbl8xMDA0ZF9yXCJdO1xuICAgICAgICB0aGlzLl9yaWdodERpc3BsYXlPZmZzZXQgPSBbe3g6MCx5OjB9LCB7eDotNjAseToxMDB9XTtcbiAgICB9LFxuXG4gICAgbGVmdCAoKSB7XG4gICAgICAgIGxldCBhcm1hdHVyZSA9IHRoaXMuYXJtYXR1cmVEaXNwbGF5LmFybWF0dXJlKCk7XG4gICAgICAgIGxldCBzbG90ID0gYXJtYXR1cmUuZ2V0U2xvdChcIndlYXBvbl9oYW5kX2xcIik7XG4gICAgICAgIHNsb3QuZGlzcGxheUluZGV4ID0gc2xvdC5kaXNwbGF5SW5kZXggPT0gMCA/IDQgOiAwO1xuICAgIH0sXG5cbiAgICByaWdodCAoKSB7XG4gICAgICAgIHRoaXMuX3JpZ2h0RGlzcGxheUluZGV4Kys7XG4gICAgICAgIHRoaXMuX3JpZ2h0RGlzcGxheUluZGV4ICU9IHRoaXMuX3JpZ2h0RGlzcGxheU5hbWVzLmxlbmd0aDtcbiAgICAgICAgbGV0IGFybWF0dXJlID0gdGhpcy5hcm1hdHVyZURpc3BsYXkuYXJtYXR1cmUoKTtcbiAgICAgICAgbGV0IHNsb3QgPSBhcm1hdHVyZS5nZXRTbG90KFwid2VhcG9uX2hhbmRfclwiKTtcbiAgICAgICAgY29uc3QgZGlzcGxheU5hbWUgPSB0aGlzLl9yaWdodERpc3BsYXlOYW1lc1t0aGlzLl9yaWdodERpc3BsYXlJbmRleF07XG4gICAgICAgIGxldCBmYWN0b3J5ID0gZHJhZ29uQm9uZXMuQ0NGYWN0b3J5LmdldEluc3RhbmNlKCk7XG4gICAgICAgIGZhY3RvcnkucmVwbGFjZVNsb3REaXNwbGF5KHRoaXMucmVwbGFjZUFybWF0dXJlRGlzcGxheS5nZXRBcm1hdHVyZUtleSgpLCBcIndlYXBvblwiLCBcIndlYXBvbl9yXCIsIGRpc3BsYXlOYW1lLCBzbG90KTtcblxuICAgICAgICBsZXQgb2Zmc2V0ID0gdGhpcy5fcmlnaHREaXNwbGF5T2Zmc2V0W3RoaXMuX3JpZ2h0RGlzcGxheUluZGV4XTtcbiAgICAgICAgc2xvdC5wYXJlbnQub2Zmc2V0LnggPSBvZmZzZXQueDtcbiAgICAgICAgc2xvdC5wYXJlbnQub2Zmc2V0LnkgPSBvZmZzZXQueTtcbiAgICAgICAgYXJtYXR1cmUuaW52YWxpZFVwZGF0ZSgpO1xuICAgIH0sXG59KTtcbiJdfQ==