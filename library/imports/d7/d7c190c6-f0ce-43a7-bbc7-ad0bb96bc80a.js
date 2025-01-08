"use strict";
cc._RF.push(module, 'd7c19DG8M5Dp7vHrQu5a8gK', 'LoadRes_example');
// cases/05_scripting/06_asset_loading/LoadRes/LoadRes_example.js

"use strict";

cc.Class({
  "extends": cc.Component,
  properties: {
    content: cc.Node,
    _url: [],
    _assets: []
  },
  onLoad: function onLoad() {
    this._url = ["test_assets/atlas", "test_assets/prefab"];
  },
  loadSpriteFrame: function loadSpriteFrame() {
    var _this = this;

    var url = this._url[0];

    this._removeAllChildren();

    cc.resources.load(url, cc.SpriteAtlas, function (err, atlas) {
      _this._assets.push(atlas.addRef());

      _this._removeAllChildren();

      var node = new cc.Node();

      _this.content.addChild(node);

      node.position = cc.v2(0, 0);
      var sprite = node.addComponent(cc.Sprite);
      sprite.spriteFrame = atlas.getSpriteFrame('sheep_run_0');
    });
  },
  loadPrefab: function loadPrefab() {
    var _this2 = this;

    var url = this._url[1];

    this._removeAllChildren();

    cc.resources.load(url, cc.Prefab, function (err, prefab) {
      _this2._assets.push(prefab.addRef());

      _this2._removeAllChildren();

      var node = cc.instantiate(prefab);

      _this2.content.addChild(node);

      node.position = cc.v2(0, 0);
    });
  },
  onDisable: function onDisable() {
    this._assets.forEach(function (x) {
      return x.decRef();
    });

    this._assets = null;
  },
  _removeAllChildren: function _removeAllChildren() {
    this.content.removeAllChildren(true);
  }
});

cc._RF.pop();