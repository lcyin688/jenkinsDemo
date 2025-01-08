"use strict";
cc._RF.push(module, '20246VSYL1F6qh0RGAPZpcH', 'CurveAnimation');
// cases/03_gameplay/03_animation/CurveAnimation/CurveAnimation.js

"use strict";

cc.Class({
  "extends": cc.Component,
  properties: {
    size: {
      "default": null,
      type: cc.CurveRange,
      serializable: true
    },
    sheep: {
      "default": null,
      type: cc.Sprite,
      serializable: true
    }
  },
  start: function start() {},
  onEnable: function onEnable() {
    this.duration = 10;
    this._time = 0;
  },
  update: function update(dt) {
    this._time += dt;

    if (this._time >= this.duration) {
      this._time = 0;
    }

    var scale = this.size.evaluate(this._time / this.duration);
    this.sheep.node.setScale(scale, scale);
  }
});

cc._RF.pop();