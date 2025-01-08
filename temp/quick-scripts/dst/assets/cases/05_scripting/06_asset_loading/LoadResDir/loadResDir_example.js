
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/cases/05_scripting/06_asset_loading/LoadResDir/loadResDir_example.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'fee3dcLoaZCvrJ9FZrBngbb', 'loadResDir_example');
// cases/05_scripting/06_asset_loading/LoadResDir/loadResDir_example.js

"use strict";

cc.Class({
  "extends": cc.Component,
  properties: {
    btnClearAll: cc.Node,
    label: cc.Prefab,
    scrollView: cc.ScrollView
  },
  _init: function _init() {
    this._assets = [];
    this._hasLoading = false;
    this.scrollView.content.height = 0;
    this.btnClearAll.active = false;
  },
  onLoad: function onLoad() {
    this._init();
  },
  _createLabel: function _createLabel(text) {
    var node = cc.instantiate(this.label);
    var label = node.getComponent(cc.Label);
    label.textKey = text;
    this.scrollView.content.addChild(node);
  },
  _clear: function _clear() {
    this.scrollView.content.removeAllChildren(true);

    for (var i = 0; i < this._assets.length; ++i) {
      var asset = this._assets[i];
      cc.assetManager.releaseAsset(asset);
    }
  },
  onClearAll: function onClearAll() {
    this.scrollView.content.height = 0;
    this.btnClearAll.active = false;

    this._clear();
  },
  onLoadAll: function onLoadAll() {
    var _this = this;

    if (this._hasLoading) {
      return;
    }

    this._hasLoading = true;

    this._clear();

    this._createLabel("Load All Assets");

    this.scrollView.scrollToTop();
    this.btnClearAll.active = false; // 防止加载的过程中清除资源

    cc.resources.loadDir("test_assets", function (err, assets) {
      if (!_this.isValid) {
        return;
      }

      _this._assets = assets;

      for (var i = 0; i < assets.length; ++i) {
        var asset = assets[i];
        var info = asset.toString();

        if (!info) {
          if (asset instanceof cc.JsonAsset) {
            info = JSON.stringify(asset.json, null, 4);
          } else {
            info = info || asset.name || cc.js.getClassName(asset);
          }
        }

        _this._createLabel(info);
      }

      _this._hasLoading = false;
      _this.btnClearAll.active = true;
    });
  },
  onLoadSpriteFrameAll: function onLoadSpriteFrameAll() {
    var _this2 = this;

    if (this._hasLoading) {
      return;
    }

    this._hasLoading = true;

    this._clear();

    this._createLabel("Load All Sprite Frame");

    this.scrollView.scrollToTop();
    this.btnClearAll.active = false; // 防止加载的过程中清除资源

    cc.resources.loadDir("test_assets", cc.SpriteFrame, function (err, assets) {
      if (!_this2.isValid) {
        return;
      }

      _this2._assets = assets;

      for (var i = 0; i < assets.length; ++i) {
        var asset = assets[i];

        _this2._createLabel(asset.name);
      }

      _this2._hasLoading = false;
      _this2.btnClearAll.active = true;
    });
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9jYXNlcy8wNV9zY3JpcHRpbmcvMDZfYXNzZXRfbG9hZGluZy9Mb2FkUmVzRGlyL2xvYWRSZXNEaXJfZXhhbXBsZS5qcyJdLCJuYW1lcyI6WyJjYyIsIkNsYXNzIiwiQ29tcG9uZW50IiwicHJvcGVydGllcyIsImJ0bkNsZWFyQWxsIiwiTm9kZSIsImxhYmVsIiwiUHJlZmFiIiwic2Nyb2xsVmlldyIsIlNjcm9sbFZpZXciLCJfaW5pdCIsIl9hc3NldHMiLCJfaGFzTG9hZGluZyIsImNvbnRlbnQiLCJoZWlnaHQiLCJhY3RpdmUiLCJvbkxvYWQiLCJfY3JlYXRlTGFiZWwiLCJ0ZXh0Iiwibm9kZSIsImluc3RhbnRpYXRlIiwiZ2V0Q29tcG9uZW50IiwiTGFiZWwiLCJ0ZXh0S2V5IiwiYWRkQ2hpbGQiLCJfY2xlYXIiLCJyZW1vdmVBbGxDaGlsZHJlbiIsImkiLCJsZW5ndGgiLCJhc3NldCIsImFzc2V0TWFuYWdlciIsInJlbGVhc2VBc3NldCIsIm9uQ2xlYXJBbGwiLCJvbkxvYWRBbGwiLCJzY3JvbGxUb1RvcCIsInJlc291cmNlcyIsImxvYWREaXIiLCJlcnIiLCJhc3NldHMiLCJpc1ZhbGlkIiwiaW5mbyIsInRvU3RyaW5nIiwiSnNvbkFzc2V0IiwiSlNPTiIsInN0cmluZ2lmeSIsImpzb24iLCJuYW1lIiwianMiLCJnZXRDbGFzc05hbWUiLCJvbkxvYWRTcHJpdGVGcmFtZUFsbCIsIlNwcml0ZUZyYW1lIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBQSxFQUFFLENBQUNDLEtBQUgsQ0FBUztFQUNMLFdBQVNELEVBQUUsQ0FBQ0UsU0FEUDtFQUdMQyxVQUFVLEVBQUU7SUFDUkMsV0FBVyxFQUFFSixFQUFFLENBQUNLLElBRFI7SUFFUkMsS0FBSyxFQUFFTixFQUFFLENBQUNPLE1BRkY7SUFHUkMsVUFBVSxFQUFFUixFQUFFLENBQUNTO0VBSFAsQ0FIUDtFQVNMQyxLQUFLLEVBQUUsaUJBQVk7SUFDZixLQUFLQyxPQUFMLEdB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O01BQ0g7O01BQ0QsS0FBSSxDQUFDNUIsV0FBTCxHQUFtQixLQUFuQjtNQUNBLEtBQUksQ0FBQ1IsV0FBTCxDQUFpQlcsTUFBakIsR0FBMEIsSUFBMUI7SUFDSCxDQXJCRDtFQXNCSCxDQXhFSTtFQTBFTGtDLG9CQUFvQixFQUFFLGdDQUFZO0lBQUE7O0lBQzlCLElBQUksS0FBS3JDLFdBQVQsRUFBc0I7TUFBRTtJQUFTOztJQUNqQyxLQUFLQSxXQUFMLEdBQW1CLElBQW5COztJQUVBLEtBQUthLE1BQUw7O0lBQ0EsS0FBS1IsWUFBTCxDQUFrQix1QkFBbEI7O0lBQ0EsS0FBS1QsVUFBTCxDQUFnQjBCLFdBQWhCO0lBQ0EsS0FBSzlCLFdBQUwsQ0FBaUJXLE1BQWpCLEdBQTBCLEtBQTFCLENBUDhCLENBT0k7O0lBRWxDZixFQUFFLENBQUNtQyxTQUFILENBQWFDLE9BQWIsQ0FBcUIsYUFBckIsRUFBb0NwQyxFQUFFLENBQUNrRCxXQUF2QyxFQUFvRCxVQUFDYixHQUFELEVBQU1DLE1BQU4sRUFBaUI7TUFDakUsSUFBSSxDQUFDLE1BQUksQ0FBQ0MsT0FBVixFQUFtQjtRQUNmO01BQ0g7O01BQ0QsTUFBSSxDQUFDNUIsT0FBTCxHQUFlMkIsTUFBZjs7TUFDQSxLQUFLLElBQUlYLENBQUMsR0FBRyxDQUFiLEVBQWdCQSxDQUFDLEdBQUdXLE1BQU0sQ0FBQ1YsTUFBM0IsRUFBbUMsRUFBRUQsQ0FBckMsRUFBd0M7UUFDcEMsSUFBSUUsS0FBSyxHQUFHUyxNQUFNLENBQUNYLENBQUQsQ0FBbEI7O1FBQ0EsTUFBSSxDQUFDVixZQUFMLENBQWtCWSxLQUFLLENBQUNpQixJQUF4QjtNQUNIOztNQUNELE1BQUksQ0FBQ2xDLFdBQUwsR0FBbUIsS0FBbkI7TUFDQSxNQUFJLENBQUNSLFdBQUwsQ0FBaUJXLE1BQWpCLEdBQTBCLElBQTFCO0lBQ0gsQ0FYRDtFQVlIO0FBL0ZJLENBQVQiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImNjLkNsYXNzKHtcbiAgICBleHRlbmRzOiBjYy5Db21wb25lbnQsXG5cbiAgICBwcm9wZXJ0aWVzOiB7XG4gICAgICAgIGJ0bkNsZWFyQWxsOiBjYy5Ob2RlLFxuICAgICAgICBsYWJlbDogY2MuUHJlZmFiLFxuICAgICAgICBzY3JvbGxWaWV3OiBjYy5TY3JvbGxWaWV3XG4gICAgfSxcblxuICAgIF9pbml0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHRoaXMuX2Fzc2V0cyA9IFtdO1xuICAgICAgICB0aGlzLl9oYXNMb2FkaW5nID0gZmFsc2U7XG4gICAgICAgIHRoaXMuc2Nyb2xsVmlldy5jb250ZW50LmhlaWdodCA9IDA7XG4gICAgICAgIHRoaXMuYnRuQ2xlYXJBbGwuYWN0aXZlID0gZmFsc2U7XG4gICAgfSxcblxuICAgIG9uTG9hZDogZnVuY3Rpb24gKCkge1xuICAgICAgICB0aGlzLl9pbml0KCk7XG4gICAgfSxcblxuICAgIF9jcmVhdGVMYWJlbDogZnVuY3Rpb24gKHRleHQpIHtcbiAgICAgICAgdmFyIG5vZGUgPSBjYy5pbnN0YW50aWF0ZSh0aGlzLmxhYmVsKTtcbiAgICAgICAgdmFyIGxhYmVsID0gbm9kZS5nZXRDb21wb25lbnQoY2MuTGFiZWwpO1xuICAgICAgICBsYWJlbC50ZXh0S2V5ID0gdGV4dDtcbiAgICAgICAgdGhpcy5zY3JvbGxWaWV3LmNvbnRlbnQuYWRkQ2hpbGQobm9kZSk7XG4gICAgfSxcblxuICAgIF9jbGVhcjogZnVuY3Rpb24gKCkge1xuICAgICAgICB0aGlzLnNjcm9sbFZpZXcuY29udGVudC5yZW1vdmVBbGxDaGlsZHJlbih0cnVlKTtcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLl9hc3NldHMubGVuZ3RoOyArK2kpIHtcbiAgICAgICAgICAgIHZhciBhc3NldCA9IHRoaXMuX2Fzc2V0c1tpXTtcbiAgICAgICAgICAgIGNjLmFzc2V0TWFuYWdlci5yZWxlYXNlQXNzZXQoYXNzZXQpO1xuICAgICAgICB9XG4gICAgfSxcblxuICAgIG9uQ2xlYXJBbGw6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdGhpcy5zY3JvbGxWaWV3LmNvbnRlbnQuaGVpZ2h0ID0gMDtcbiAgICAgICAgdGhpcy5idG5DbGVhckFsbC5hY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5fY2xlYXIoKTtcbiAgICB9LFxuXG4gICAgb25Mb2FkQWxsOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGlmICh0aGlzLl9oYXNMb2FkaW5nKSB7IHJldHVybjsgfVxuICAgICAgICB0aGlzLl9oYXNMb2FkaW5nID0gdHJ1ZTtcblxuICAgICAgICB0aGlzLl9jbGVhcigpO1xuICAgICAgICB0aGlzLl9jcmVhdGVMYWJlbChcIkxvYWQgQWxsIEFzc2V0c1wiKTtcbiAgICAgICAgdGhpcy5zY3JvbGxWaWV3LnNjcm9sbFRvVG9wKCk7XG4gICAgICAgIHRoaXMuYnRuQ2xlYXJBbGwuYWN0aXZlID0gZmFsc2U7ICAvLyDpmLLmraLliqDovb3nmoTov4fnqIvkuK3muIXpmaTotYTmupBcblxuICAgICAgICBjYy5yZXNvdXJjZXMubG9hZERpcihcInRlc3RfYXNzZXRzXCIsIChlcnIsIGFzc2V0cykgPT4ge1xuICAgICAgICAgICAgaWYgKCF0aGlzLmlzVmFsaWQpIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHRoaXMuX2Fzc2V0cyA9IGFzc2V0cztcbiAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgYXNzZXRzLmxlbmd0aDsgKytpKSB7XG4gICAgICAgICAgICAgICAgdmFyIGFzc2V0ID0gYXNzZXRzW2ldO1xuICAgICAgICAgICAgICAgIHZhciBpbmZvID0gYXNzZXQudG9TdHJpbmcoKTtcbiAgICAgICAgICAgICAgICBpZiAoIWluZm8pIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGFzc2V0IGluc3RhbmNlb2YgY2MuSnNvbkFzc2V0KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpbmZvID0gSlNPTi5zdHJpbmdpZnkoYXNzZXQuanNvbiwgbnVsbCwgNCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpbmZvID0gaW5mbyB8fCBhc3NldC5uYW1lIHx8IGNjLmpzLmdldENsYXNzTmFtZShhc3NldCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdGhpcy5fY3JlYXRlTGFiZWwoaW5mbyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLl9oYXNMb2FkaW5nID0gZmFsc2U7XG4gICAgICAgICAgICB0aGlzLmJ0bkNsZWFyQWxsLmFjdGl2ZSA9IHRydWU7XG4gICAgICAgIH0pO1xuICAgIH0sXG5cbiAgICBvbkxvYWRTcHJpdGVGcmFtZUFsbDogZnVuY3Rpb24gKCkge1xuICAgICAgICBpZiAodGhpcy5faGFzTG9hZGluZykgeyByZXR1cm47IH1cbiAgICAgICAgdGhpcy5faGFzTG9hZGluZyA9IHRydWU7XG5cbiAgICAgICAgdGhpcy5fY2xlYXIoKTtcbiAgICAgICAgdGhpcy5fY3JlYXRlTGFiZWwoXCJMb2FkIEFsbCBTcHJpdGUgRnJhbWVcIik7XG4gICAgICAgIHRoaXMuc2Nyb2xsVmlldy5zY3JvbGxUb1RvcCgpO1xuICAgICAgICB0aGlzLmJ0bkNsZWFyQWxsLmFjdGl2ZSA9IGZhbHNlOyAgLy8g6Ziy5q2i5Yqg6L2955qE6L+H56iL5Lit5riF6Zmk6LWE5rqQXG5cbiAgICAgICAgY2MucmVzb3VyY2VzLmxvYWREaXIoXCJ0ZXN0X2Fzc2V0c1wiLCBjYy5TcHJpdGVGcmFtZSwgKGVyciwgYXNzZXRzKSA9PiB7XG4gICAgICAgICAgICBpZiAoIXRoaXMuaXNWYWxpZCkge1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMuX2Fzc2V0cyA9IGFzc2V0cztcbiAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgYXNzZXRzLmxlbmd0aDsgKytpKSB7XG4gICAgICAgICAgICAgICAgdmFyIGFzc2V0ID0gYXNzZXRzW2ldO1xuICAgICAgICAgICAgICAgIHRoaXMuX2NyZWF0ZUxhYmVsKGFzc2V0Lm5hbWUpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5faGFzTG9hZGluZyA9IGZhbHNlO1xuICAgICAgICAgICAgdGhpcy5idG5DbGVhckFsbC5hY3RpdmUgPSB0cnVlO1xuICAgICAgICB9KTtcbiAgICB9XG59KTtcbiJdfQ==