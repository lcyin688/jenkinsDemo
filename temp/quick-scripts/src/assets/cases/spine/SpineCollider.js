"use strict";
cc._RF.push(module, '318b3Y0citJN6RZS4dOnAn0', 'SpineCollider');
// cases/spine/SpineCollider.js

"use strict";

cc.Class({
  "extends": cc.Component,
  properties: {},
  start: function start() {
    this.collisionManager = cc.director.getCollisionManager();
    this.collisionManager.enabled = true;
    this.collisionManager.enabledDebugDraw = false;
    cc.director.once(cc.Director.EVENT_AFTER_DRAW, function () {
      this.collisionManager.enabledDebugDraw = true;
    }.bind(this));
    this.stayCount = 0;
  },
  onDestroy: function onDestroy() {
    this.collisionManager.enabledDebugDraw = false;
  },
  onCollisionEnter: function onCollisionEnter(other, self) {
    // console.log('on collision enter',other.node.name, self.node.name);
    this.stayCount++;
  },
  onCollisionExit: function onCollisionExit(other, self) {
    // console.log('on collision exit', other.node.name, self.node.name);
    this.stayCount--;
  },
  update: function update() {
    if (this.stayCount > 0) {
      this.node.color = cc.color(0, 200, 200);
    } else {
      this.node.color = cc.color(255, 255, 255);
    }
  }
});

cc._RF.pop();