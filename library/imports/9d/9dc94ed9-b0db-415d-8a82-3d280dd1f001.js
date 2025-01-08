"use strict";
cc._RF.push(module, '9dc947ZsNtBXYqCPSgN0fAB', 'SpineSkin');
// cases/spine/SpineSkin.js

"use strict";

cc.Class({
  "extends": cc.Component,
  properties: {
    goblin: {
      type: sp.Skeleton,
      "default": null
    },
    goblingirl: {
      type: sp.Skeleton,
      "default": null
    }
  },
  start: function start() {
    this._skinIdx = 0;
    this.parts = ["left-arm", "left-hand", "left-shoulder"];
  },
  change: function change() {
    if (this._skinIdx == 0) {
      this._skinIdx = 1;

      for (var i = 0; i < this.parts.length; i++) {
        var goblin = this.goblin.findSlot(this.parts[i]);
        var goblingirl = this.goblingirl.findSlot(this.parts[i]);
        var attachment = goblingirl.getAttachment();
        goblin.setAttachment(attachment);
      }
    } else if (this._skinIdx == 1) {
      this._skinIdx = 0;
      this.goblin.setSkin('goblin');
      this.goblin.setSlotsToSetupPose();
    }
  }
});

cc._RF.pop();