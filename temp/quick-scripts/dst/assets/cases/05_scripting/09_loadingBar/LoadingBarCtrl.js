
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/cases/05_scripting/09_loadingBar/LoadingBarCtrl.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '102a9wU40RJd4SnQqQQzQT9', 'LoadingBarCtrl');
// cases/05_scripting/09_loadingBar/LoadingBarCtrl.js

"use strict";

var i18n = require('i18n'); //
// 本教程主要还是体现如何使用Loader的进度条。
//


cc.Class({
  "extends": cc.Component,
  properties: {
    progressBar: {
      "default": null,
      type: cc.ProgressBar
    },
    progressTips: {
      "default": null,
      type: cc.Label
    },
    laodBg: {
      "default": null,
      type: cc.Node
    }
  },
  // use this for initialization
  onLoad: function onLoad() {
    this._urls = ['audio/ding', 'audio/cheering', 'audio/music_logo', 'test_assets/audio', 'loadingBar/font', 'loadingBar/mikado_outline_shadow', 'loadingBar/enligsh-chinese'];
    this.resource = null;
    this.progressBar.progress = 0;

    this._clearAll();

    this.progressTips.textKey = i18n.t("cases/05_scripting/10_loadingBar/LoadingBarCtrl.js.3");
    this.node.on(cc.Node.EventType.TOUCH_START, function () {
      if (this.resource) {
        return;
      }

      cc.resources.load(this._urls, this._progressCallback.bind(this), this._completeCallback.bind(this));
    }, this);
  },
  _clearAll: function _clearAll() {
    for (var i = 0; i < this._urls.length; ++i) {
      var url = this._urls[i];
      cc.resources.release(url);
    }
  },
  _progressCallback: function _progressCallback(completedCount, totalCount, res) {
    this.progress = completedCount / totalCount;
    this.resource = res;
    this.completedCount = completedCount;
    this.totalCount = totalCount;
  },
  _completeCallback: function _completeCallback(error, res) {},
  // called every frame, uncomment this function to activate update callback
  update: function update(dt) {
    if (!this.resource) {
      return;
    }

    var progress = this.progressBar.progress;

    if (progress >= 1) {
      this.progressTips.textKey = i18n.t("cases/05_scripting/10_loadingBar/LoadingBarCtrl.js.1");
      this.laodBg.active = false;
      this.progressBar.node.active = false;
      this.enabled = false;
      return;
    }

    if (progress < this.progress) {
      progress += dt;
    }

    this.progressBar.progress = progress;
    this.progressTips.textKey = i18n.t("cases/05_scripting/10_loadingBar/LoadingBarCtrl.js.2") + this.resource.id + " (" + this.completedCount + "/" + this.totalCount + ")";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9jYXNlcy8wNV9zY3JpcHRpbmcvMDlfbG9hZGluZ0Jhci9Mb2FkaW5nQmFyQ3RybC5qcyJdLCJuYW1lcyI6WyJpMThuIiwicmVxdWlyZSIsImNjIiwiQ2xhc3MiLCJDb21wb25lbnQiLCJwcm9wZXJ0aWVzIiwicHJvZ3Jlc3NCYXIiLCJ0eXBlIiwiUHJvZ3Jlc3NCYXIiLCJwcm9ncmVzc1RpcHMiLCJMYWJlbCIsImxhb2RCZyIsIk5vZGUiLCJvbkxvYWQiLCJfdXJscyIsInJlc291cmNlIiwicHJvZ3Jlc3MiLCJfY2xlYXJBbGwiLCJ0ZXh0S2V5IiwidCIsIm5vZGUiLCJvbiIsIkV2ZW50VHlwZSIsIlRPVUNIX1NUQVJUIiwicmVzb3VyY2VzIiwibG9hZCIsIl9wcm9ncmVzc0NhbGxiYWNrIiwiYmluZCIsIl9jb21wbGV0ZUNhbGxiYWNrIiwiaSIsImxlbmd0aCIsInVybCIsInJlbGVhc2UiLCJjb21wbGV0ZWRDb3VudCIsInRvdGFsQ291bnQiLCJyZXMiLCJlcnJvciIsInVwZGF0ZSIsImR0IiwiYWN0aXZlIiwiZW5hYmxlZCIsImlkIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLElBQU1BLElBQUksR0FBR0MsT0FBTyxDQUFDLE1BQUQsQ0FBcEIsRUFFQTtBQUNBO0FBQ0E7OztBQUVBQyxFQUFFLENBQUNDLEtBQUgsQ0FBUztFQUNMLFdBQVNELEVBQUUsQ0FBQ0UsU0FEUDtFQUdMQyxVQUFVLEVBQUU7SUFDUkMsV0FBVyxFQUFFO01BQ1QsV0FBUyxJQURBO01BRVRDLElBQUksRUFBRUwsRUFBRSxDQUFDTTtJQUZBLENBREw7SUFNUkMsWUFBWSxFQUFFO01BQ1YsV0FBUyxJQURDO01BRVZGLElBQUksRUFBRUwsRUFBRSxDQUFDUTtJQUZDLENBTk47SUFXUkMsTUFBTSxFQUFFO01BQ0osV0FBUyxJQURMO01BRUpKLElBQUksRUFBRUwsRUFBRSxDQUFDVTtJQUZMO0VBWEEsQ0FIUDtFQW9CTDtFQUNBQyxNQUFNLEVBQUUsa0JB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KTtcblxuLy9cbi8vIOacrOaVmeeoi+S4u+imgei/mOaYr+S9k+eOsOWmguS9leS9v+eUqExvYWRlcueahOi/m+W6puadoeOAglxuLy9cblxuY2MuQ2xhc3Moe1xuICAgIGV4dGVuZHM6IGNjLkNvbXBvbmVudCxcblxuICAgIHByb3BlcnRpZXM6IHtcbiAgICAgICAgcHJvZ3Jlc3NCYXI6IHtcbiAgICAgICAgICAgIGRlZmF1bHQ6IG51bGwsXG4gICAgICAgICAgICB0eXBlOiBjYy5Qcm9ncmVzc0JhclxuICAgICAgICB9LFxuXG4gICAgICAgIHByb2dyZXNzVGlwczoge1xuICAgICAgICAgICAgZGVmYXVsdDogbnVsbCxcbiAgICAgICAgICAgIHR5cGU6IGNjLkxhYmVsXG4gICAgICAgIH0sXG5cbiAgICAgICAgbGFvZEJnOiB7XG4gICAgICAgICAgICBkZWZhdWx0OiBudWxsLFxuICAgICAgICAgICAgdHlwZTogY2MuTm9kZVxuICAgICAgICB9XG4gICAgfSxcblxuICAgIC8vIHVzZSB0aGlzIGZvciBpbml0aWFsaXphdGlvblxuICAgIG9uTG9hZDogZnVuY3Rpb24gKCkge1xuICAgICAgICB0aGlzLl91cmxzID0gW1xuICAgICAgICAgICAgJ2F1ZGlvL2RpbmcnLFxuICAgICAgICAgICAgJ2F1ZGlvL2NoZWVyaW5nJyxcbiAgICAgICAgICAgICdhdWRpby9tdXNpY19sb2dvJyxcbiAgICAgICAgICAgICd0ZXN0X2Fzc2V0cy9hdWRpbycsXG4gICAgICAgICAgICAnbG9hZGluZ0Jhci9mb250JyxcbiAgICAgICAgICAgICdsb2FkaW5nQmFyL21pa2Fkb19vdXRsaW5lX3NoYWRvdycsXG4gICAgICAgICAgICAnbG9hZGluZ0Jhci9lbmxpZ3NoLWNoaW5lc2UnXG4gICAgICAgIF07XG4gICAgICAgIHRoaXMucmVzb3VyY2UgPSBudWxsO1xuICAgICAgICB0aGlzLnByb2dyZXNzQmFyLnByb2dyZXNzID0gMDtcbiAgICAgICAgdGhpcy5fY2xlYXJBbGwoKTtcbiAgICAgICAgdGhpcy5wcm9ncmVzc1RpcHMudGV4dEtleSA9IGkxOG4udChcImNhc2VzLzA1X3NjcmlwdGluZy8xMF9sb2FkaW5nQmFyL0xvYWRpbmdCYXJDdHJsLmpzLjNcIik7XG4gICAgICAgIHRoaXMubm9kZS5vbihjYy5Ob2RlLkV2ZW50VHlwZS5UT1VDSF9TVEFSVCwgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgaWYgKHRoaXMucmVzb3VyY2UpIHsgcmV0dXJuOyB9XG4gICAgICAgICAgICBjYy5yZXNvdXJjZXMubG9hZCh0aGlzLl91cmxzLCB0aGlzLl9wcm9ncmVzc0NhbGxiYWNrLmJpbmQodGhpcyksIHRoaXMuX2NvbXBsZXRlQ2FsbGJhY2suYmluZCh0aGlzKSk7XG4gICAgICAgIH0sIHRoaXMpO1xuICAgIH0sXG5cbiAgICBfY2xlYXJBbGw6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLl91cmxzLmxlbmd0aDsgKytpKSB7XG4gICAgICAgICAgICB2YXIgdXJsID0gdGhpcy5fdXJsc1tpXTtcbiAgICAgICAgICAgIGNjLnJlc291cmNlcy5yZWxlYXNlKHVybCk7XG4gICAgICAgIH1cbiAgICB9LFxuXG4gICAgX3Byb2dyZXNzQ2FsbGJhY2s6IGZ1bmN0aW9uIChjb21wbGV0ZWRDb3VudCwgdG90YWxDb3VudCwgcmVzKSB7XG4gICAgICAgIHRoaXMucHJvZ3Jlc3MgPSBjb21wbGV0ZWRDb3VudCAvIHRvdGFsQ291bnQ7XG4gICAgICAgIHRoaXMucmVzb3VyY2UgPSByZXM7XG4gICAgICAgIHRoaXMuY29tcGxldGVkQ291bnQgPSBjb21wbGV0ZWRDb3VudDtcbiAgICAgICAgdGhpcy50b3RhbENvdW50ID0gdG90YWxDb3VudDtcbiAgICB9LFxuXG4gICAgX2NvbXBsZXRlQ2FsbGJhY2s6IGZ1bmN0aW9uIChlcnJvciwgcmVzKSB7XG5cbiAgICB9LFxuXG4gICAgLy8gY2FsbGVkIGV2ZXJ5IGZyYW1lLCB1bmNvbW1lbnQgdGhpcyBmdW5jdGlvbiB0byBhY3RpdmF0ZSB1cGRhdGUgY2FsbGJhY2tcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIChkdCkge1xuICAgICAgICBpZiAoIXRoaXMucmVzb3VyY2UpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICB2YXIgcHJvZ3Jlc3MgPSB0aGlzLnByb2dyZXNzQmFyLnByb2dyZXNzO1xuICAgICAgICBpZiAocHJvZ3Jlc3MgPj0gMSkge1xuICAgICAgICAgICAgdGhpcy5wcm9ncmVzc1RpcHMudGV4dEtleSA9IGkxOG4udChcImNhc2VzLzA1X3NjcmlwdGluZy8xMF9sb2FkaW5nQmFyL0xvYWRpbmdCYXJDdHJsLmpzLjFcIik7XG4gICAgICAgICAgICB0aGlzLmxhb2RCZy5hY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgICAgIHRoaXMucHJvZ3Jlc3NCYXIubm9kZS5hY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgICAgIHRoaXMuZW5hYmxlZCA9IGZhbHNlO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGlmIChwcm9ncmVzcyA8IHRoaXMucHJvZ3Jlc3MpIHtcbiAgICAgICAgICAgIHByb2dyZXNzICs9IGR0O1xuICAgICAgICB9XG4gICAgICAgIHRoaXMucHJvZ3Jlc3NCYXIucHJvZ3Jlc3MgPSBwcm9ncmVzcztcbiAgICAgICAgdGhpcy5wcm9ncmVzc1RpcHMudGV4dEtleSA9IGkxOG4udChcImNhc2VzLzA1X3NjcmlwdGluZy8xMF9sb2FkaW5nQmFyL0xvYWRpbmdCYXJDdHJsLmpzLjJcIikrIHRoaXMucmVzb3VyY2UuaWQgKyBcIiAoXCIgKyB0aGlzLmNvbXBsZXRlZENvdW50ICsgXCIvXCIgKyB0aGlzLnRvdGFsQ291bnQgKyBcIilcIjtcbiAgICB9XG59KTtcbiJdfQ==