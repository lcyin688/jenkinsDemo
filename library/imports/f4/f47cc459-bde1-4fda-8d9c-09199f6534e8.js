"use strict";
cc._RF.push(module, 'f47ccRZveFP2o2cCRmfZTTo', 'TiledTile');
// cases/tiledmap/TiledTile.js

"use strict";

cc.Class({
  "extends": cc.Component,
  start: function start() {
    var layer = this.getComponent(cc.TiledLayer);
    var tile = layer.getTiledTileAt(0, 22, true);
    var tileNode = tile.node;
    tileNode.runAction(cc.spawn(cc.scaleTo(2, 3, 3), cc.rotateTo(2, 90), cc.moveTo(2, 600, 300)));
  } // update (dt) {},

});

cc._RF.pop();