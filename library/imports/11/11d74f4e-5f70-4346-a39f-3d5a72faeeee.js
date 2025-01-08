"use strict";
cc._RF.push(module, '11d749OX3BDRqOfPVpy+u7u', 'ShieldNode');
// cases/tiledmap/ShieldNode.js

"use strict";

cc.Class({
  "extends": cc.Component,
  properties: {
    tiledLayer: {
      type: cc.TiledLayer,
      "default": null
    }
  },
  onLoad: function onLoad() {
    cc.resources.load("tilemap/shieldNode", function (err, prefab) {
      if (err) {
        cc.error("tilemap/shieldNode resources load failed");
        return;
      }

      this.initScene(prefab);
    }.bind(this));
  },
  initScene: function initScene(prefab) {
    var _this = this;

    var posArr = [cc.v2(-249, 96), cc.v2(-150, 76), cc.v2(-60, 54), cc.v2(-248, -144), cc.v2(-89, -34)];

    var _loop = function _loop(i) {
      var shieldNode = cc.instantiate(prefab);
      shieldNode.x = posArr[i].x;
      shieldNode.y = posArr[i].y;

      _this.tiledLayer.addUserNode(shieldNode);

      shieldNode.on(cc.Node.EventType.TOUCH_MOVE, function (event) {
        var deltaMove = event.getLocation().sub(event.getPreviousLocation());
        shieldNode.x += deltaMove.x;
        shieldNode.y += deltaMove.y;
      });
    };

    for (var i = 0; i < posArr.length; i++) {
      _loop(i);
    }
  }
});

cc._RF.pop();