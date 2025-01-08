
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/ComponentUtils/SearchBlock.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '5fac7sHbOhNlpzkn8js40Bz', 'SearchBlock');
// scripts/ComponentUtils/SearchBlock.js

"use strict";

var TipsManager = require('TipsManager');

cc.Class({
  "extends": cc.Component,
  properties: {
    editBox: cc.EditBox,
    _itemList: [],
    _isShow: false
  },
  init: function init(menu) {
    this.menu = menu;
  },
  setItemList: function setItemList(list) {
    this._itemList = list;
  },
  // searchBlock enter the special scene
  loadExample: function loadExample() {
    var sceneName = this.editBox.string;
    var url = this.findItemUrl(sceneName);

    if (!url) {
      TipsManager.createTips('Doesn\'t find that scene.');
      return;
    }

    if (TipsManager.hasSupport(sceneName)) {
      this.showSearchBlock();
      this.editBox.string = '';
      this.menu.loadScene(url);
    }
  },
  findItemUrl: function findItemUrl(sceneName) {
    for (var i = 0; i < this._itemList.length; i++) {
      var item = this._itemList[i];

      if (item.name === sceneName) {
        return item.url;
      }
    }
  },
  showSearchBlock: function showSearchBlock() {
    this._isShow = !this._isShow;
    var action = null;

    if (this._isShow) {
      action = cc.moveBy(0.5, cc.v2(0, -48));
    } else {
      action = cc.moveBy(0.5, cc.v2(0, 48));
    }

    this.node.runAction(action);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHRzL0NvbXBvbmVudFV0aWxzL1NlYXJjaEJsb2NrLmpzIl0sIm5hbWVzIjpbIlRpcHNNYW5hZ2VyIiwicmVxdWlyZSIsImNjIiwiQ2xhc3MiLCJDb21wb25lbnQiLCJwcm9wZXJ0aWVzIiwiZWRpdEJveCIsIkVkaXRCb3giLCJfaXRlbUxpc3QiLCJfaXNTaG93IiwiaW5pdCIsIm1lbnUiLCJzZXRJdGVtTGlzdCIsImxpc3QiLCJsb2FkRXhhbXBsZSIsInNjZW5lTmFtZSIsInN0cmluZyIsInVybCIsImZpbmRJdGVtVXJsIiwiY3JlYXRlVGlwcyIsImhhc1N1cHBvcnQiLCJzaG93U2VhcmNoQmxvY2siLCJsb2FkU2NlbmUiLCJpIiwibGVuZ3RoIiwiaXRlbSIsIm5hbWUiLCJhY3Rpb24iLCJtb3ZlQnkiLCJ2MiIsIm5vZGUiLCJydW5BY3Rpb24iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsSUFBTUEsV0FBVyxHQUFHQyxPQUFPLENBQUMsYUFBRCxDQUEzQjs7QUFFQUMsRUFBRSxDQUFDQyxLQUFILENBQVM7RUFDTCxXQUFTRCxFQUFFLENBQUNFLFNBRFA7RUFHTEMsVUFBVSxFQUFFO0lBQ1JDLE9BQU8sRUFBQ0osRUFBRSxDQUFDSyxPQURIO0lBRVJDLFNBQVMsRUFBRSxFQUZIO0lBR1JDLE9BQU8sRUFBRTtFQUhELENBSFA7RUFTTEMsSUFUSyxnQkFTQ0MsSUFURCxFQVNPO0lBQ1IsS0FBS0EsSUFBTCxHQUFZQSxJQUFaO0VBQ0gsQ0FYSTtFQWFMQyxXQWJLLHVCQWFRQyxJQWJSLEVBYWM7SUFDZixLQUFLTCxTQUFMLEdBQWlCSyxJQUFqQjtFQUNILENBZkk7RUFnQkw7RUFDQUMsV0FqQksseUJBaUJVO0lBQ1gsSUFBSUMsU0FBUyxHQUFHLEtBQUtULE9BQUwsQ0FBYVUsTUFBN0I7SUFDQSxJQUFJQyxHQUFHLEdBQUcsS0FBS0MsV0FBTCxDQUFpQkgsU0FBakIsQ0FBVjs7SUFDQSxJQUFJLENBQUNFLEdBQUwsRUFBVTtNQUNOakIsV0FBVyxDQUFDbUIsVUFBWixDQUF1QiwyQkFBdkI7TUFDQTtJQUNIOztJQUVELElBQUluQixXQUFXLENBQUNvQixVQUFaLENBQXVCTCxTQUF2QixDQUFKLEVBQXVDO01BQ25DLEtBQUtNLGVBQUw7TUFDQSxLQUFLZixPQUFMLENBQWFVLE1BQWIsR0FBc0IsRUFBdEI7TUFDQSxLQUFLTCxJQUFMLENBQVVXLFNBQVYsQ0FBb0JMLEdBQXBCO0lBQ0g7RUFDSixDQTlCSTtFQWdDTEMsV0FoQ0ssdUJBZ0NRSCxTQWhDUixFQWdDbUI7SUFDcEIsS0FBSyxJQUFJUSxDQUFDLEdBQUcsQ0FBYixFQUFnQkEsQ0FBQyxHQUFHLEtBQUtmLFNBQUwsQ0FBZWdCLE1BQW5DLEVBQTJDRCxDQUFDLEVBQTVDLEVBQWdEO01BQzVDLElBQUlFLElBQUksR0FBRyxLQUFLakIsU0FBTCxDQUFlZSxDQUFmLENBQVg7O01BQ0EsSUFBSUUsSUFBSSxDQUFDQyxJQUFMLEtBQWNYLFNBQWxCLEVBQTZCO1FBQ3pCLE9BQU9VLElBQUksQ0FBQ1IsR0FBWjtNQUNIO0lBQ0o7RUFDSixDQXZDSTtFQXlDTEksZUF6Q0ssNkJBeUNjO0lBQ2YsS0FBS1osT0FBTCxHQUFlLENBQUMsS0FBS0EsT0FBckI7SUFDQSxJQUFJa0IsTUFBTSxHQUFHLElBQWI7O0lBQ0EsSUFBSSxLQUFLbEIsT0FBVCxFQUFrQjtNQUNka0IsTUFBTSxHQUFHekIsRUFBRSxDQUFDMEIsTUFBSCxDQUFVLEdBQVYsRUFBZTFCLEVBQUUsQ0FBQzJCLEVBQUgsQ0FBTSxDQUFOLEVBQVMsQ0FBQyxFQUFWLENBQWYsQ0FBVDtJQUNILENBRkQsTUFHSztNQUNERixNQUFNLEdBQUd6QixFQUFFLENBQUMwQixNQUFILENBQVUsR0FBVixFQUFlMUIsRUFBRSxDQUFDMkIsRUFBSCxDQUFNLENBQU4sRUFBUyxFQUFULENBQWYsQ0FBVDtJQUNIOztJQUNELEtBQUtDLElBQUwsQ0FBVUMsU0FBVixDQUFvQkosTUFBcEI7RUFDSDtBQW5ESSxDQUFUIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBUaXBzTWFuYWdlciA9IHJlcXVpcmUoJ1RpcHNNYW5hZ2VyJyk7XG5cbmNjLkNsYXNzKHtcbiAgICBleHRlbmRzOiBjYy5Db21wb25lbnQsXG5cbiAgICBwcm9wZXJ0aWVzOiB7XG4gICAgICAgIGVkaXRCb3g6Y2MuRWRpdEJveCxcbiAgICAgICAgX2l0ZW1MaXN0OiBbXSxcbiAgICAgICAgX2lzU2hvdzogZmFsc2VcbiAgICB9LFxuXG4gICAgaW5pdCAobWVudSkge1xuICAgICAgICB0aGlzLm1lbnUgPSBtZW51O1xuICAgIH0sXG5cbiAgICBzZXRJdGVtTGlzdCAobGlzdCkge1xuICAgICAgICB0aGlzLl9pdGVtTGlzdCA9IGxpc3Q7XG4gICAgfSxcbiAgICAvLyBzZWFyY2hCbG9jayBlbnRlciB0aGUgc3BlY2lhbCBzY2VuZVxuICAgIGxvYWRFeGFtcGxlICgpIHtcbiAgICAgICAgbGV0IHNjZW5lTmFtZSA9IHRoaXMuZWRpdEJveC5zdHJpbmc7XG4gICAgICAgIGxldCB1cmwgPSB0aGlzLmZpbmRJdGVtVXJsKHNjZW5lTmFtZSk7XG4gICAgICAgIGlmICghdXJsKSB7XG4gICAgICAgICAgICBUaXBzTWFuYWdlci5jcmVhdGVUaXBzKCdEb2VzblxcJ3QgZmluZCB0aGF0IHNjZW5lLicpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKFRpcHNNYW5hZ2VyLmhhc1N1cHBvcnQoc2NlbmVOYW1lKSkge1xuICAgICAgICAgICAgdGhpcy5zaG93U2VhcmNoQmxvY2sgKCk7XG4gICAgICAgICAgICB0aGlzLmVkaXRCb3guc3RyaW5nID0gJyc7XG4gICAgICAgICAgICB0aGlzLm1lbnUubG9hZFNjZW5lKHVybCk7XG4gICAgICAgIH1cbiAgICB9LFxuXG4gICAgZmluZEl0ZW1VcmwgKHNjZW5lTmFtZSkge1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuX2l0ZW1MaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBsZXQgaXRlbSA9IHRoaXMuX2l0ZW1MaXN0W2ldO1xuICAgICAgICAgICAgaWYgKGl0ZW0ubmFtZSA9PT0gc2NlbmVOYW1lKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGl0ZW0udXJsO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfSxcblxuICAgIHNob3dTZWFyY2hCbG9jayAoKSB7XG4gICAgICAgIHRoaXMuX2lzU2hvdyA9ICF0aGlzLl9pc1Nob3c7XG4gICAgICAgIGxldCBhY3Rpb24gPSBudWxsO1xuICAgICAgICBpZiAodGhpcy5faXNTaG93KSB7XG4gICAgICAgICAgICBhY3Rpb24gPSBjYy5tb3ZlQnkoMC41LCBjYy52MigwLCAtNDgpKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGFjdGlvbiA9IGNjLm1vdmVCeSgwLjUsIGNjLnYyKDAsIDQ4KSk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5ub2RlLnJ1bkFjdGlvbihhY3Rpb24pO1xuICAgIH1cbn0pO1xuIl19