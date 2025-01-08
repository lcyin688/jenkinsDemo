
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/cases/tiledmap/dynamic-tiledmap.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'cad2cnE69BPqr+Aejz96TlC', 'dynamic-tiledmap');
// cases/tiledmap/dynamic-tiledmap.js

"use strict";

cc.Class({
  "extends": cc.Component,
  properties: {
    map_root: cc.Node
  },
  onLoadTileMap: function onLoadTileMap(url) {
    var _this = this;

    cc.resources.load(url, cc.TiledMapAsset, function (err, tmxAsset) {
      if (err) {
        cc.error(err);
        return;
      }

      _this.onCreateTileMap(tmxAsset);
    });
  },
  onCreateTileMap: function onCreateTileMap(tmxAsset) {
    this.map_root.destroyAllChildren();
    var node = new cc.Node();
    this.map_root.addChild(node);
    var tileMap = node.addComponent(cc.TiledMap);
    tileMap.tmxAsset = tmxAsset;
  },
  onBtnCreateTileMap: function onBtnCreateTileMap() {
    var url = 'tilemap/tile_iso_offset';
    this.onLoadTileMap(url);
  },
  onBtnCreateTileMapWithTsx: function onBtnCreateTileMapWithTsx() {
    var url = 'tilemap/tile_iso_offset_with_tsx';
    this.onLoadTileMap(url);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9jYXNlcy90aWxlZG1hcC9keW5hbWljLXRpbGVkbWFwLmpzIl0sIm5hbWVzIjpbImNjIiwiQ2xhc3MiLCJDb21wb25lbnQiLCJwcm9wZXJ0aWVzIiwibWFwX3Jvb3QiLCJOb2RlIiwib25Mb2FkVGlsZU1hcCIsInVybCIsInJlc291cmNlcyIsImxvYWQiLCJUaWxlZE1hcEFzc2V0IiwiZXJyIiwidG14QXNzZXQiLCJlcnJvciIsIm9uQ3JlYXRlVGlsZU1hcCIsImRlc3Ryb3lBbGxDaGlsZHJlbiIsIm5vZGUiLCJhZGRDaGlsZCIsInRpbGVNYXAiLCJhZGRDb21wb25lbnQiLCJUaWxlZE1hcCIsIm9uQnRuQ3JlYXRlVGlsZU1hcCIsIm9uQnRuQ3JlYXRlVGlsZU1hcFdpdGhUc3giXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUFBLEVBQUUsQ0FBQ0MsS0FBSCxDQUFTO0VBQ0wsV0FBU0QsRUFBRSxDQUFDRSxTQURQO0VBR0xDLFVBQVUsRUFBRTtJQUNSQyxRQUFRLEVBQUVKLEVBQUUsQ0FBQ0s7RUFETCxDQUhQO0VBT0xDLGFBUEsseUJBT1VDLEdBUFYsRUFPZTtJQUFBOztJQUNoQlAsRUFBRSxDQUFDUSxTQUFILENBQWFDLElBQWIsQ0FBa0JGLEdBQWxCLEVBQXVCUCxFQUFFLENBQUNVLGFBQTFCLEVBQXlDLFVBQUNDLEdBQUQsRUFBTUMsUUFBTixFQUFtQjtNQUN4RCxJQUFJRCxHQUFKLEVBQVM7UUFDTFgsRUFBRSxDQUFDYSxLQUFILENBQVNGLEdBQVQ7UUFDQTtNQUNIOztNQUNELEtBQUksQ0FBQ0csZUFBTCxDQUFxQkYsUUFBckI7SUFDSCxDQU5EO0VBT0gsQ0FmSTtFQWlCTEUsZUFqQkssMkJBaUJZRixRQWpCWixFQWlCc0I7SUFDdkIsS0FBS1IsUUFBTCxDQUFjVyxrQkFBZDtJQUNBLElBQUlDLElBQUksR0FBRyxJQUFJaEIsRUFBRSxDQUFDSyxJQUFQLEVBQVg7SUFDQSxLQUFLRCxRQUFMLENBQWNhLFFBQWQsQ0FBdUJELElBQXZCO0lBQ0EsSUFBSUUsT0FBTyxHQUFHRixJQUFJLENBQUNHLFlBQUwsQ0FBa0JuQixFQUFFLENBQUNvQixRQUFyQixDQUFkO0lBQ0FGLE9BQU8sQ0FBQ04sUUFBUixHQUFtQkEsUUFBbkI7RUFDSCxDQXZCSTtFQXlCTFMsa0JBekJLLGdDQXlCaUI7SUFDbEIsSUFBSWQsR0FBRyxHQUFHLHlCQUFWO0lBQ0EsS0FBS0QsYUFBTCxDQUFtQkMsR0FBbkI7RUFDSCxDQTVCSTtFQThCTGUseUJBOUJLLHVDQThCd0I7SUFDekIsSUFBSWYsR0FBRyxHQUFHLGtDQUFWO0lBQ0EsS0FBS0QsYUFBTCxDQUFtQkMsR0FBbkI7RUFDSDtBQWpDSSxDQUFUIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJjYy5DbGFzcyh7XG4gICAgZXh0ZW5kczogY2MuQ29tcG9uZW50LFxuXG4gICAgcHJvcGVydGllczoge1xuICAgICAgICBtYXBfcm9vdDogY2MuTm9kZVxuICAgIH0sXG5cbiAgICBvbkxvYWRUaWxlTWFwICh1cmwpIHtcbiAgICAgICAgY2MucmVzb3VyY2VzLmxvYWQodXJsLCBjYy5UaWxlZE1hcEFzc2V0LCAoZXJyLCB0bXhBc3NldCkgPT4ge1xuICAgICAgICAgICAgaWYgKGVycikge1xuICAgICAgICAgICAgICAgIGNjLmVycm9yKGVycik7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5vbkNyZWF0ZVRpbGVNYXAodG14QXNzZXQpO1xuICAgICAgICB9KTtcbiAgICB9LFxuXG4gICAgb25DcmVhdGVUaWxlTWFwICh0bXhBc3NldCkge1xuICAgICAgICB0aGlzLm1hcF9yb290LmRlc3Ryb3lBbGxDaGlsZHJlbigpO1xuICAgICAgICB2YXIgbm9kZSA9IG5ldyBjYy5Ob2RlKCk7XG4gICAgICAgIHRoaXMubWFwX3Jvb3QuYWRkQ2hpbGQobm9kZSk7XG4gICAgICAgIHZhciB0aWxlTWFwID0gbm9kZS5hZGRDb21wb25lbnQoY2MuVGlsZWRNYXApO1xuICAgICAgICB0aWxlTWFwLnRteEFzc2V0ID0gdG14QXNzZXQ7XG4gICAgfSxcblxuICAgIG9uQnRuQ3JlYXRlVGlsZU1hcCAoKSB7XG4gICAgICAgIHZhciB1cmwgPSAndGlsZW1hcC90aWxlX2lzb19vZmZzZXQnO1xuICAgICAgICB0aGlzLm9uTG9hZFRpbGVNYXAodXJsKTtcbiAgICB9LFxuXG4gICAgb25CdG5DcmVhdGVUaWxlTWFwV2l0aFRzeCAoKSB7XG4gICAgICAgIHZhciB1cmwgPSAndGlsZW1hcC90aWxlX2lzb19vZmZzZXRfd2l0aF90c3gnO1xuICAgICAgICB0aGlzLm9uTG9hZFRpbGVNYXAodXJsKTtcbiAgICB9LFxufSk7XG4iXX0=