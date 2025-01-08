"use strict";
cc._RF.push(module, 'ca9ec5p7O9EHYbE772Zf4dj', 'screen-to-world-point');
// cases/3d/screen-to-world-point.js

"use strict";

var WHITE = cc.Color.WHITE;
cc.Class({
  "extends": cc.Component,
  properties: {
    box: cc.Node,
    distanceLabel: cc.Label
  },
  // LIFE-CYCLE CALLBACKS:
  // onLoad () {},
  start: function start() {
    var canvas = cc.find('Canvas');
    canvas.on(cc.Node.EventType.TOUCH_START, this.onTouchStart, this);
    canvas.on(cc.Node.EventType.TOUCH_MOVE, this.onTouchMove, this);
    this.distance = 0.5;
  },
  onTouchStart: function onTouchStart(event) {
    this.moveBox(event.touch.getLocation());
  },
  onTouchMove: function onTouchMove(event) {
    this.moveBox(event.touch.getLocation());
  },
  moveBox: function moveBox(touchPos) {
    var camera = cc.Camera.findCamera(this.box);
    var pos = camera.getScreenToWorldPoint(cc.v3(touchPos.x, touchPos.y, this.distance));
    this.box.position = this.box.parent.convertToNodeSpaceAR(pos);
  },
  distanceChanged: function distanceChanged(slider) {
    this.distance = parseFloat(slider.progress.toFixed(2));
    this.distanceLabel.string = 'distance : ' + this.distance;
  }
});

cc._RF.pop();