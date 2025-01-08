
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/cases/05_scripting/06_asset_loading/LoadRes/LoadRes_example.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
                    }
                    if (nodeEnv) {
                        __define(__module.exports, __require, __module);
                    }
                    else {
                        __quick_compile_project__.registerModuleFunc(__filename, function () {
                            __define(__module.exports, __require, __module);
                        });
                    }
                })();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9jYXNlcy8wNV9zY3JpcHRpbmcvMDZfYXNzZXRfbG9hZGluZy9Mb2FkUmVzL0xvYWRSZXNfZXhhbXBsZS5qcyJdLCJuYW1lcyI6WyJjYyIsIkNsYXNzIiwiQ29tcG9uZW50IiwicHJvcGVydGllcyIsImNvbnRlbnQiLCJOb2RlIiwiX3VybCIsIl9hc3NldHMiLCJvbkxvYWQiLCJsb2FkU3ByaXRlRnJhbWUiLCJ1cmwiLCJfcmVtb3ZlQWxsQ2hpbGRyZW4iLCJyZXNvdXJjZXMiLCJsb2FkIiwiU3ByaXRlQXRsYXMiLCJlcnIiLCJhdGxhcyIsInB1c2giLCJhZGRSZWYiLCJub2RlIiwiYWRkQ2hpbGQiLCJwb3NpdGlvbiIsInYyIiwic3ByaXRlIiwiYWRkQ29tcG9uZW50IiwiU3ByaXRlIiwic3ByaXRlRnJhbWUiLCJnZXRTcHJpdGVGcmFtZSIsImxvYWRQcmVmYWIiLCJQcmVmYWIiLCJwcmVmYWIiLCJpbnN0YW50aWF0ZSIsIm9uRGlzYWJsZSIsImZvckVhY2giLCJ4IiwiZGVjUmVmIiwicmVtb3ZlQWxsQ2hpbGRyZW4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUFBLEVBQUUsQ0FBQ0MsS0FBSCxDQUFTO0VBQ0wsV0FBU0QsRUFBRSxDQUFDRSxTQURQO0VBR0xDLFVBQVUsRUFBRTtJQUNSQyxPQUFPLEVBQUVKLEVBQUUsQ0FBQ0ssSUFESjtJQUVSQyxJQUFJLEVBQUMsRUFGRztJQUdSQyxPQUFPLEVBQUU7RUFIRCxDQUhQO0VBU0xDLE1BQU0sRUFBRSxrQkFBWTtJQUNoQixLQUFLRixJQUFMLEdBQVksQ0FBQyxtQkFBRCxFQUFzQixvQkFBdEIsQ0FBWjtFQUNILENBWEk7RUFhTEcsZUFBZSxFQUFFLDJCQUFZO0lBQUE7O0lBQ3pCLElBQUlDLEdBQUcsR0FBRyxLQUFLSixJQUFMLENBQVUsQ0FBVixDQUFWOztJQUNBLEtBQUtLLGtCQUFMOztJQUNBWCxFQUFFLENBQUNZLFNBQUgsQ0FBYUMsSUFBYixDQUFrQkgsR0FBbEIsRUFBdUJWLEVBQUUsQ0FBQ2MsV0FBMUIsRUFBdUMsVUFBQ0MsR0FBRCxFQUFNQyxLQUFOLEVBQWdCO01BQ25ELEtBQUksQ0FBQ1QsT0FBTCxDQUFhVSxJQUFiLENBQWtCRCxLQUFLLENBQUNFLE1BQU4sRUFBbEI7O01BQ0EsS0FBSSxDQUFDUCxrQkFBTDs7TUFDQSxJQUFJUSxJQUFJLEdBQUcsSUFBSW5CLEVBQUUsQ0FBQ0ssSUFBUCxFQUFYOztNQUNBLEtBQUksQ0FBQ0QsT0FBTCxDQUFhZ0IsUUFBYixDQUFzQkQsSUFBdEI7O01BQ0FBLElBQUksQ0FBQ0UsUUFBTCxHQUFnQnJCLEVBQUUsQ0FBQ3NCLEVBQUgsQ0FBTSxDQUFOLEVBQVMsQ0FBVCxDQUFoQjtNQUNBLElBQUlDLE1BQU0sR0FBR0osSUFBSSxDQUFDSyxZQUFMLENBQWtCeEIsRUFBRSxDQUFDeUIsTUFBckIsQ0FBYjtNQUNBRixNQUFNLENBQUNHLFdBQVAsR0FBcUJWLEtBQUssQ0FBQ1csY0FBTixDQUFxQixhQUFyQixDQUFyQjtJQUNILENBUkQ7RUFTSCxDQXpCSTtFQTJCTEMsVUFBVSxFQUFFLHNCQUFZO0lBQUE7O0lBQ3BCLElBQUlsQixHQUFHLEdBQUcsS0FBS0osSUFBTCxDQUFVLENBQVYsQ0FBVjs7SUFDQSxLQUFLSyxrQkFBTDs7SUFDQVgsRUFBRSxDQUFDWSxTQUFILENBQWFDLElBQWIsQ0FBa0JILEdBQWxCLEVBQXVCVixFQUFFLENBQUM2QixNQUExQixFQUFrQyxVQUFDZCxHQUFELEVBQU1lLE1BQU4sRUFBaUI7TUFDL0MsTUFBSSxDQUFDdkIsT0FBTCxDQUFhVSxJQUFiLENBQWtCYSxNQUFNLENBQUNaLE1BQVAsRUFBbEI7O01BQ0EsTUFBSSxDQUFDUCxrQkFBTDs7TUFDQSxJQUFJUSxJQUFJLEdBQUduQixFQUFFLENBQUMrQixXQUFILENBQWVELE1BQWYsQ0FBWDs7TUFDQSxNQUFJLENBQUMxQixPQUFMLENBQWFnQixRQUFiLENBQXNCRCxJQUF0Qjs7TUFDQUEsSUFBSSxDQUFDRSxRQUFMLEdBQWdCckIsRUFBRSxDQUFDc0IsRUFBSCxDQUFNLENBQU4sRUFBUyxDQUFULENBQWhCO0lBQ0gsQ0FORDtFQU9ILENBckNJO0VBdUNMVSxTQXZDSyx1QkF1Q1E7SUFDVCxLQUFLekIsT0FBTCxDQUFhMEIsT0FBYixDQUFxQixVQUFBQyxDQUFDO01BQUEsT0FBSUEsQ0FBQyxDQUFDQyxNQUFGLEVBQUo7SUFBQSxDQUF0Qjs7SUFDQSxLQUFLNUIsT0FBTCxHQUFlLElBQWY7RUFDSCxDQTFDSTtFQTRDTEksa0JBQWtCLEVBQUUsOEJBQVk7SUFDNUIsS0FBS1AsT0FBTCxDQUFhZ0MsaUJBQWIsQ0FBK0IsSUFBL0I7RUFDSDtBQTlDSSxDQUFUIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJjYy5DbGFzcyh7XG4gICAgZXh0ZW5kczogY2MuQ29tcG9uZW50LFxuXG4gICAgcHJvcGVydGllczoge1xuICAgICAgICBjb250ZW50OiBjYy5Ob2RlLFxuICAgICAgICBfdXJsOltdLFxuICAgICAgICBfYXNzZXRzOiBbXSxcbiAgICB9LFxuXG4gICAgb25Mb2FkOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHRoaXMuX3VybCA9IFtcInRlc3RfYXNzZXRzL2F0bGFzXCIsIFwidGVzdF9hc3NldHMvcHJlZmFiXCJdO1xuICAgIH0sXG5cbiAgICBsb2FkU3ByaXRlRnJhbWU6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIHVybCA9IHRoaXMuX3VybFswXTtcbiAgICAgICAgdGhpcy5fcmVtb3ZlQWxsQ2hpbGRyZW4oKTtcbiAgICAgICAgY2MucmVzb3VyY2VzLmxvYWQodXJsLCBjYy5TcHJpdGVBdGxhcywgKGVyciwgYXRsYXMpID0+IHtcbiAgICAgICAgICAgIHRoaXMuX2Fzc2V0cy5wdXNoKGF0bGFzLmFkZFJlZigpKTtcbiAgICAgICAgICAgIHRoaXMuX3JlbW92ZUFsbENoaWxkcmVuKCk7XG4gICAgICAgICAgICB2YXIgbm9kZSA9IG5ldyBjYy5Ob2RlKCk7XG4gICAgICAgICAgICB0aGlzLmNvbnRlbnQuYWRkQ2hpbGQobm9kZSk7XG4gICAgICAgICAgICBub2RlLnBvc2l0aW9uID0gY2MudjIoMCwgMCk7XG4gICAgICAgICAgICB2YXIgc3ByaXRlID0gbm9kZS5hZGRDb21wb25lbnQoY2MuU3ByaXRlKTtcbiAgICAgICAgICAgIHNwcml0ZS5zcHJpdGVGcmFtZSA9IGF0bGFzLmdldFNwcml0ZUZyYW1lKCdzaGVlcF9ydW5fMCcpO1xuICAgICAgICB9KTtcbiAgICB9LFxuXG4gICAgbG9hZFByZWZhYjogZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgdXJsID0gdGhpcy5fdXJsWzFdO1xuICAgICAgICB0aGlzLl9yZW1vdmVBbGxDaGlsZHJlbigpO1xuICAgICAgICBjYy5yZXNvdXJjZXMubG9hZCh1cmwsIGNjLlByZWZhYiwgKGVyciwgcHJlZmFiKSA9PiB7XG4gICAgICAgICAgICB0aGlzLl9hc3NldHMucHVzaChwcmVmYWIuYWRkUmVmKCkpO1xuICAgICAgICAgICAgdGhpcy5fcmVtb3ZlQWxsQ2hpbGRyZW4oKTtcbiAgICAgICAgICAgIHZhciBub2RlID0gY2MuaW5zdGFudGlhdGUocHJlZmFiKTtcbiAgICAgICAgICAgIHRoaXMuY29udGVudC5hZGRDaGlsZChub2RlKTtcbiAgICAgICAgICAgIG5vZGUucG9zaXRpb24gPSBjYy52MigwLCAwKTtcbiAgICAgICAgfSk7XG4gICAgfSxcblxuICAgIG9uRGlzYWJsZSAoKSB7XG4gICAgICAgIHRoaXMuX2Fzc2V0cy5mb3JFYWNoKHggPT4geC5kZWNSZWYoKSk7XG4gICAgICAgIHRoaXMuX2Fzc2V0cyA9IG51bGw7XG4gICAgfSxcblxuICAgIF9yZW1vdmVBbGxDaGlsZHJlbjogZnVuY3Rpb24gKCkge1xuICAgICAgICB0aGlzLmNvbnRlbnQucmVtb3ZlQWxsQ2hpbGRyZW4odHJ1ZSk7XG4gICAgfVxufSk7XG4iXX0=