"use strict";
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