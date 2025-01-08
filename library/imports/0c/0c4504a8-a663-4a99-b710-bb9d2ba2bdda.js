"use strict";
cc._RF.push(module, '0c450SopmNKmbcQu50ror3a', 'CreateClipCtrl');
// cases/03_gameplay/03_animation/CreateClip/CreateClipCtrl.js

"use strict";

cc.Class({
  "extends": cc.Component,
  properties: {
    atlas: null
  },
  // use this for initialization
  onLoad: function onLoad() {
    var _this = this;

    var animation = this.getComponent(cc.Animation);
    cc.resources.load("test_assets/atlas", cc.SpriteAtlas, function (err, atlas) {
      _this.atlas = atlas.addRef();
      var spriteFrames = atlas.getSpriteFrames();
      var clip = cc.AnimationClip.createWithSpriteFrames(spriteFrames, 10);
      clip.name = 'run';
      clip.wrapMode = cc.WrapMode.Loop;
      animation.addClip(clip);
      animation.play('run');
    });
  },
  // called every frame, uncomment this function to activate update callback
  // update: function (dt) {
  // },
  onDestroy: function onDestroy() {
    this.atlas.decRef();
    this.atlas = null;
  }
});

cc._RF.pop();