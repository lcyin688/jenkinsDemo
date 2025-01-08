"use strict";
cc._RF.push(module, '9277fnpG9BFd6uvLH0LCrFA', 'ObjectGroupImage');
// cases/tiledmap/ObjectGroupImage.js

"use strict";

cc.Class({
  "extends": cc.Component,
  properties: {},
  start: function start() {
    cc.director.getCollisionManager().enabled = true;
    this._speed = 1000;
    var useless = cc.find("Canvas/tiledmap/game/img58");
    useless.active = false;
    var theParent = cc.find("Canvas/tiledmap");
    this.node.parent = theParent;
  },
  update: function update(dt) {
    this.node.x += dt * this._speed;
  },
  onCollisionEnter: function onCollisionEnter(other) {
    var otherName = other.node.name;

    switch (otherName) {
      case "to-right":
        this._speed = 1000;
        this.node.scaleX = 1.3;
        break;

      case "to-index-1":
        this.node.setSiblingIndex(1);
        break;

      case "to-left":
        this._speed = -1000;
        this.node.scaleX = -1.3;
        break;

      case "to-index-4":
        this.node.setSiblingIndex(6);
        break;
    }
  }
});

cc._RF.pop();