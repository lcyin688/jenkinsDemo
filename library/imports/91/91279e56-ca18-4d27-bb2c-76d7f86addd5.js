"use strict";
cc._RF.push(module, '912795WyhhNJ7ssdtf4at3V', 'test-first');
// cases/asset_bundle/TestBundle/test-first.js

"use strict";

cc.Class({
  "extends": cc.Component,
  properties: {
    tips: require('LabelLocalized')
  },
  start: function start() {
    this.tips.textKey = 'cases/AssetBundle.8';
  },
  goLoadSubpackage: function goLoadSubpackage() {
    cc.director.loadScene('AssetBundle');
  }
});

cc._RF.pop();