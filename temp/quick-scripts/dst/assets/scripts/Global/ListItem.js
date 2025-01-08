
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/Global/ListItem.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'aa63bWNE8hBf4P4Sp0X2uT0', 'ListItem');
// scripts/Global/ListItem.js

"use strict";

var TipsManager = require('TipsManager');

cc.Class({
  "extends": cc.Component,
  properties: {
    label: {
      "default": null,
      type: cc.Label
    },
    url: '',
    bg: cc.Sprite,
    btn: cc.Button
  },
  init: function init(menu) {
    this.index = -1;
    this.__name = '';
    this.menu = menu;
  },
  loadExample: function loadExample() {
    if (this.url && TipsManager.hasSupport(this.__name)) {
      this.menu.loadScene(this.url);
    }
  },
  updateItem: function updateItem(idx, y, name, url) {
    var isDir = !url;
    this.index = idx;
    this.node.y = y;
    this.node.x = isDir ? 50 : 100;
    this.label.string = this.__name = name;
    this.url = url;
    this.bg.enabled = !isDir;
    this.btn.interactable = !isDir;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHRzL0dsb2JhbC9MaXN0SXRlbS5qcyJdLCJuYW1lcyI6WyJUaXBzTWFuYWdlciIsInJlcXVpcmUiLCJjYyIsIkNsYXNzIiwiQ29tcG9uZW50IiwicHJvcGVydGllcyIsImxhYmVsIiwidHlwZSIsIkxhYmVsIiwidXJsIiwiYmciLCJTcHJpdGUiLCJidG4iLCJCdXR0b24iLCJpbml0IiwibWVudSIsImluZGV4IiwiX19uYW1lIiwibG9hZEV4YW1wbGUiLCJoYXNTdXBwb3J0IiwibG9hZFNjZW5lIiwidXBkYXRlSXRlbSIsImlkeCIsInkiLCJuYW1lIiwiaXNEaXIiLCJub2RlIiwieCIsInN0cmluZyIsImVuYWJsZWQiLCJpbnRlcmFjdGFibGUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ0EsSUFBTUEsV0FBVyxHQUFHQyxPQUFPLENBQUMsYUFBRCxDQUEzQjs7QUFFQUMsRUFBRSxDQUFDQyxLQUFILENBQVM7RUFDTCxXQUFTRCxFQUFFLENBQUNFLFNBRFA7RUFHTEMsVUFBVSxFQUFFO0lBQ1JDLEtBQUssRUFBRTtNQUNILFdBQVMsSUFETjtNQUVIQyxJQUFJLEVBQUVMLEVBQUUsQ0FBQ007SUFGTixDQURDO0lBS1JDLEdBQUcsRUFBRSxFQUxHO0lBTVJDLEVBQUUsRUFBRVIsRUFBRSxDQUFDUyxNQU5DO0lBT1JDLEdBQUcsRUFBRVYsRUFBRSxDQUFDVztFQVBBLENBSFA7RUFhTEMsSUFiSyxnQkFhQ0MsSUFiRCxFQWFPO0lBQ1IsS0FBS0MsS0FBTCxHQUFhLENBQUMsQ0FBZDtJQUNBLEtBQUtDLE1BQUwsR0FBYyxFQUFkO0lBQ0EsS0FBS0YsSUFBTCxHQUFZQSxJQUFaO0VBQ0gsQ0FqQkk7RUFtQkxHLFdBbkJLLHlCQW1CVTtJQUNYLElBQUksS0FBS1QsR0FBTCxJQUFZVCxXQUFXLENBQUNtQixVQUFaLENBQXVCLEtBQUtGLE1BQTVCLENBQWhCLEVBQXFEO01BQ2pELEtBQUtGLElBQUwsQ0FBVUssU0FBVixDQUFvQixLQUFLWCxHQUF6QjtJQUNIO0VBQ0osQ0F2Qkk7RUF5QkxZLFVBekJLLHNCQXlCT0MsR0F6QlAsRUF5QllDLENBekJaLEVBeUJlQyxJQXpCZixFQXlCcUJmLEdBekJyQixFQXlCMEI7SUFDM0IsSUFBSWdCLEtBQUssR0FBRyxDQUFDaEIsR0FBYjtJQUNBLEtBQUtPLEtBQUwsR0FBYU0sR0FBYjtJQUNBLEtBQUtJLElBQUwsQ0FBVUgsQ0FBVixHQUFjQSxDQUFkO0lBQ0EsS0FBS0csSUFBTCxDQUFVQyxDQUFWLEdBQWNGLEtBQUssR0FBRyxFQUFILEdBQVEsR0FBM0I7SUFDQSxLQUFLbkIsS0FBTCxDQUFXc0IsTUFBWCxHQUFvQixLQUFLWCxNQUFMLEdBQWNPLElBQWxDO0lBQ0EsS0FBS2YsR0FBTCxHQUFXQSxHQUFYO0lBQ0EsS0FBS0MsRUFBTCxDQUFRbUIsT0FBUixHQUFrQixDQUFDSixLQUFuQjtJQUNBLEtBQUtiLEdBQUwsQ0FBU2tCLFlBQVQsR0FBd0IsQ0FBQ0wsS0FBekI7RUFDSDtBQWxDSSxDQUFUIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJcbmNvbnN0IFRpcHNNYW5hZ2VyID0gcmVxdWlyZSgnVGlwc01hbmFnZXInKTtcblxuY2MuQ2xhc3Moe1xuICAgIGV4dGVuZHM6IGNjLkNvbXBvbmVudCxcblxuICAgIHByb3BlcnRpZXM6IHtcbiAgICAgICAgbGFiZWw6IHtcbiAgICAgICAgICAgIGRlZmF1bHQ6IG51bGwsXG4gICAgICAgICAgICB0eXBlOiBjYy5MYWJlbFxuICAgICAgICB9LFxuICAgICAgICB1cmw6ICcnLFxuICAgICAgICBiZzogY2MuU3ByaXRlLFxuICAgICAgICBidG46IGNjLkJ1dHRvblxuICAgIH0sXG5cbiAgICBpbml0IChtZW51KSB7XG4gICAgICAgIHRoaXMuaW5kZXggPSAtMTtcbiAgICAgICAgdGhpcy5fX25hbWUgPSAnJztcbiAgICAgICAgdGhpcy5tZW51ID0gbWVudTtcbiAgICB9LFxuXG4gICAgbG9hZEV4YW1wbGUgKCkge1xuICAgICAgICBpZiAodGhpcy51cmwgJiYgVGlwc01hbmFnZXIuaGFzU3VwcG9ydCh0aGlzLl9fbmFtZSkpIHtcbiAgICAgICAgICAgIHRoaXMubWVudS5sb2FkU2NlbmUodGhpcy51cmwpO1xuICAgICAgICB9XG4gICAgfSxcblxuICAgIHVwZGF0ZUl0ZW0gKGlkeCwgeSwgbmFtZSwgdXJsKSB7XG4gICAgICAgIGxldCBpc0RpciA9ICF1cmw7XG4gICAgICAgIHRoaXMuaW5kZXggPSBpZHg7XG4gICAgICAgIHRoaXMubm9kZS55ID0geTtcbiAgICAgICAgdGhpcy5ub2RlLnggPSBpc0RpciA/IDUwIDogMTAwO1xuICAgICAgICB0aGlzLmxhYmVsLnN0cmluZyA9IHRoaXMuX19uYW1lID0gbmFtZTtcbiAgICAgICAgdGhpcy51cmwgPSB1cmw7XG4gICAgICAgIHRoaXMuYmcuZW5hYmxlZCA9ICFpc0RpcjtcbiAgICAgICAgdGhpcy5idG4uaW50ZXJhY3RhYmxlID0gIWlzRGlyO1xuICAgIH1cbn0pO1xuIl19