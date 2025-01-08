"use strict";
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