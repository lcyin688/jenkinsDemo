"use strict";
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