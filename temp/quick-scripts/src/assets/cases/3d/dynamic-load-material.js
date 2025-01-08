"use strict";
cc._RF.push(module, '93268zvFsZAKpSHQw+2ixa3', 'dynamic-load-material');
// cases/3d/dynamic-load-material.js

"use strict";

cc.Class({
  "extends": cc.Component,
  properties: {
    meshRenderer: cc.MeshRenderer,
    _material: cc.Material
  },
  // LIFE-CYCLE CALLBACKS:
  // onLoad () {},
  start: function start() {
    var _this = this;

    this.scheduleOnce(function () {
      cc.resources.load('materials/dynamic-load-material', cc.Material, function (err, material) {
        if (err) {
          cc.error(err);
          return;
        }

        _this._material = material.addRef();

        _this.meshRenderer.setMaterial(0, material);
      });
    }, 1);
  },
  onDestroy: function onDestroy() {
    this._material && this._material.decRef();
    this._material = null;
  } // update (dt) {},

});

cc._RF.pop();