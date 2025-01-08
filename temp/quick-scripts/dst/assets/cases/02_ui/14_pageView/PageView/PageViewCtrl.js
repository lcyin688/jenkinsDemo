
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/cases/02_ui/14_pageView/PageView/PageViewCtrl.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'becf9ZpBi5KG43ard9opUPT', 'PageViewCtrl');
// cases/02_ui/14_pageView/PageView/PageViewCtrl.js

"use strict";

cc.Class({
  "extends": cc.Component,
  properties: {
    curNum: 3,
    curTotal: 10,
    pageTeample: cc.Prefab,
    target: cc.PageView,
    label: cc.Label
  },
  _createPage: function _createPage() {
    var page = cc.instantiate(this.pageTeample);
    page.position = new cc.v2(0, 0);
    var color = new cc.Color();
    color.r = Math.floor(Math.random() * 255);
    color.g = Math.floor(Math.random() * 255);
    color.b = Math.floor(Math.random() * 255);
    page.color = color;
    return page;
  },
  onLoad: function onLoad() {
    // 设置的当前页面为 1
    this.target.setCurrentPageIndex(0);
  },
  update: function update() {
    // 当前页面索引
    this.label.string = "第" + (this.target.getCurrentPageIndex() + 1) + "页";
  },
  // 返回首页
  onJumpHome: function onJumpHome() {
    // 第二个参数为滚动所需时间，默认值为 0.3 秒
    this.target.scrollToPage(0);
  },
  // 添加页面
  plusPage: function plusPage(callback) {
    if (this.curNum > this.curTotal) {
      return;
    }

    this.curNum++;

    if (callback) {
      callback();
    }
  },
  // 减少页面
  lessPageNum: function lessPageNum(callback) {
    if (this.curNum <= 0) {
      return;
    }

    this.curNum--;

    if (callback) {
      callback();
    }
  },
  // 添加页面
  onAddPage: function onAddPage() {
    var _this = this;

    this.plusPage(function () {
      _this.target.addPage(_this._createPage());
    });
  },
  // 插入当前页面
  onInsertPage: function onInsertPage() {
    var _this2 = this;

    this.plusPage(function () {
      _this2.target.insertPage(_this2._createPage(), _this2.target.getCurrentPageIndex());
    });
  },
  // 移除最后一个页面
  onRemovePage: function onRemovePage() {
    var _this3 = this;

    this.lessPageNum(function () {
      var pages = _this3.target.getPages();

      _this3.target.removePage(pages[pages.length - 1]);
    });
  },
  // 移除当前页面
  onRemovePageAtIndex: function onRemovePageAtIndex() {
    var _this4 = this;

    this.lessPageNum(function () {
      _this4.target.removePageAtIndex(_this4.target.getCurrentPageIndex());
    });
  },
  // 移除所有页面
  onRemoveAllPage: function onRemoveAllPage() {
    this.target.removeAllPages();
    this.curNum = 0;
  },
  // 监听事件
  onPageEvent: function onPageEvent(sender, eventType) {
    // 翻页事件
    if (eventType !== cc.PageView.EventType.PAGE_TURNING) {
      return;
    }

    console.log("当前所在的页面索引:" + sender.getCurrentPageIndex());
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9jYXNlcy8wMl91aS8xNF9wYWdlVmlldy9QYWdlVmlldy9QYWdlVmlld0N0cmwuanMiXSwibmFtZXMiOlsiY2MiLCJDbGFzcyIsIkNvbXBvbmVudCIsInByb3BlcnRpZXMiLCJjdXJOdW0iLCJjdXJUb3RhbCIsInBhZ2VUZWFtcGxlIiwiUHJlZmFiIiwidGFyZ2V0IiwiUGFnZVZpZXciLCJsYWJlbCIsIkxhYmVsIiwiX2NyZWF0ZVBhZ2UiLCJwYWdlIiwiaW5zdGFudGlhdGUiLCJwb3NpdGlvbiIsInYyIiwiY29sb3IiLCJDb2xvciIsInIiLCJNYXRoIiwiZmxvb3IiLCJyYW5kb20iLCJnIiwiYiIsIm9uTG9hZCIsInNldEN1cnJlbnRQYWdlSW5kZXgiLCJ1cGRhdGUiLCJzdHJpbmciLCJnZXRDdXJyZW50UGFnZUluZGV4Iiwib25KdW1wSG9tZSIsInNjcm9sbFRvUGFnZSIsInBsdXNQYWdlIiwiY2FsbGJhY2siLCJsZXNzUGFnZU51bSIsIm9uQWRkUGFnZSIsImFkZFBhZ2UiLCJvbkluc2VydFBhZ2UiLCJpbnNlcnRQYWdlIiwib25SZW1vdmVQYWdlIiwicGFnZXMiLCJnZXRQYWdlcyIsInJlbW92ZVBhZ2UiLCJsZW5ndGgiLCJvblJlbW92ZVBhZ2VBdEluZGV4IiwicmVtb3ZlUGFnZUF0SW5kZXgiLCJvblJlbW92ZUFsbFBhZ2UiLCJyZW1vdmVBbGxQYWdlcyIsIm9uUGFnZUV2ZW50Iiwic2VuZGVyIiwiZXZlbnRUeXBlIiwiRXZlbnRUeXBlIiwiUEFHRV9UVVJOSU5HIiwiY29uc29sZSIsImxvZyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQUEsRUFBRSxDQUFDQyxLQUFILENBQVM7RUFDTCxXQUFTRCxFQUFFLENBQUNFLFNBRFA7RUFHTEMsVUFBVSxFQUFFO0lBQ1JDLE1BQU0sRUFBRSxDQURBO0lBRVJDLFFBQVEsRUFBRSxFQUZGO0lBR1JDLFdBQVcsRUFBRU4sRUFBRSxDQUFDTyxNQUhSO0lBSVJDLE1BQU0sRUFBRVIs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TCxDQUFZcUMsaUJBQVosQ0FBOEIsTUFBSSxDQUFDckMsTUFBTCxDQUFZcUIsbUJBQVosRUFBOUI7SUFDSCxDQUZEO0VBR0gsQ0F2Rkk7RUF5Rkw7RUFDQWlCLGVBMUZLLDZCQTBGYztJQUNmLEtBQUt0QyxNQUFMLENBQVl1QyxjQUFaO0lBQ0EsS0FBSzNDLE1BQUwsR0FBYyxDQUFkO0VBQ0gsQ0E3Rkk7RUErRkw7RUFDQTRDLFdBaEdLLHVCQWdHUUMsTUFoR1IsRUFnR2dCQyxTQWhHaEIsRUFnRzJCO0lBQzVCO0lBQ0EsSUFBSUEsU0FBUyxLQUFLbEQsRUFBRSxDQUFDUyxRQUFILENBQVkwQyxTQUFaLENBQXNCQyxZQUF4QyxFQUFzRDtNQUNsRDtJQUNIOztJQUNEQyxPQUFPLENBQUNDLEdBQVIsQ0FBWSxlQUFlTCxNQUFNLENBQUNwQixtQkFBUCxFQUEzQjtFQUNIO0FBdEdJLENBQVQiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImNjLkNsYXNzKHtcbiAgICBleHRlbmRzOiBjYy5Db21wb25lbnQsXG5cbiAgICBwcm9wZXJ0aWVzOiB7XG4gICAgICAgIGN1ck51bTogMyxcbiAgICAgICAgY3VyVG90YWw6IDEwLFxuICAgICAgICBwYWdlVGVhbXBsZTogY2MuUHJlZmFiLFxuICAgICAgICB0YXJnZXQ6IGNjLlBhZ2VWaWV3LFxuICAgICAgICBsYWJlbDogY2MuTGFiZWxcbiAgICB9LFxuXG4gICAgX2NyZWF0ZVBhZ2UgKCkge1xuICAgICAgICB2YXIgcGFnZSA9IGNjLmluc3RhbnRpYXRlKHRoaXMucGFnZVRlYW1wbGUpO1xuICAgICAgICBwYWdlLnBvc2l0aW9uID0gbmV3IGNjLnYyKDAsIDApO1xuICAgICAgICB2YXIgY29sb3IgPSBuZXcgY2MuQ29sb3IoKTtcbiAgICAgICAgY29sb3IuciA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDI1NSk7XG4gICAgICAgIGNvbG9yLmcgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAyNTUpO1xuICAgICAgICBjb2xvci5iID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMjU1KTtcbiAgICAgICAgcGFnZS5jb2xvciA9IGNvbG9yO1xuICAgICAgICByZXR1cm4gcGFnZTtcbiAgICB9LFxuXG4gICAgb25Mb2FkICgpIHtcbiAgICAgICAgLy8g6K6+572u55qE5b2T5YmN6aG16Z2i5Li6IDFcbiAgICAgICAgdGhpcy50YXJnZXQuc2V0Q3VycmVudFBhZ2VJbmRleCgwKTtcbiAgICB9LFxuXG4gICAgdXBkYXRlICgpIHtcbiAgICAgICAgLy8g5b2T5YmN6aG16Z2i57Si5byVXG4gICAgICAgIHRoaXMubGFiZWwuc3RyaW5nID0gXCLnrKxcIiArICh0aGlzLnRhcmdldC5nZXRDdXJyZW50UGFnZUluZGV4KCkgKyAxKSArIFwi6aG1XCI7XG4gICAgfSxcblxuICAgIC8vIOi/lOWbnummlumhtVxuICAgIG9uSnVtcEhvbWUgKCkge1xuICAgICAgICAvLyDnrKzkuozkuKrlj4LmlbDkuLrmu5rliqjmiYDpnIDml7bpl7TvvIzpu5jorqTlgLzkuLogMC4zIOenklxuICAgICAgICB0aGlzLnRhcmdldC5zY3JvbGxUb1BhZ2UoMCk7XG4gICAgfSxcblxuICAgIC8vIOa3u+WKoOmhtemdolxuICAgIHBsdXNQYWdlIChjYWxsYmFjaykge1xuICAgICAgICBpZiAodGhpcy5jdXJOdW0gPiB0aGlzLmN1clRvdGFsKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5jdXJOdW0rKztcbiAgICAgICAgaWYgKGNhbGxiYWNrKSB7XG4gICAgICAgICAgICBjYWxsYmFjaygpO1xuICAgICAgICB9XG4gICAgfSxcblxuICAgIC8vIOWHj+WwkemhtemdolxuICAgIGxlc3NQYWdlTnVtIChjYWxsYmFjaykge1xuICAgICAgICBpZiAodGhpcy5jdXJOdW0gPD0gMCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuY3VyTnVtLS07XG4gICAgICAgIGlmIChjYWxsYmFjaykge1xuICAgICAgICAgICAgY2FsbGJhY2soKTtcbiAgICAgICAgfVxuICAgIH0sXG5cbiAgICAvLyDmt7vliqDpobXpnaJcbiAgICBvbkFkZFBhZ2UgKCkge1xuICAgICAgICB0aGlzLnBsdXNQYWdlKCgpID0+IHtcbiAgICAgICAgICAgIHRoaXMudGFyZ2V0LmFkZFBhZ2UodGhpcy5fY3JlYXRlUGFnZSgpKTtcbiAgICAgICAgfSk7XG4gICAgfSxcblxuICAgIC8vIOaPkuWFpeW9k+WJjemhtemdolxuICAgIG9uSW5zZXJ0UGFnZSAoKSB7XG4gICAgICAgIHRoaXMucGx1c1BhZ2UoKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy50YXJnZXQuaW5zZXJ0UGFnZSh0aGlzLl9jcmVhdGVQYWdlKCksIHRoaXMudGFyZ2V0LmdldEN1cnJlbnRQYWdlSW5kZXgoKSk7XG4gICAgICAgIH0pO1xuICAgIH0sXG5cbiAgICAvLyDnp7vpmaTmnIDlkI7kuIDkuKrpobXpnaJcbiAgICBvblJlbW92ZVBhZ2UgKCkge1xuICAgICAgICB0aGlzLmxlc3NQYWdlTnVtKCgpID0+IHtcbiAgICAgICAgICAgIHZhciBwYWdlcyA9IHRoaXMudGFyZ2V0LmdldFBhZ2VzKCk7XG4gICAgICAgICAgICB0aGlzLnRhcmdldC5yZW1vdmVQYWdlKHBhZ2VzW3BhZ2VzLmxlbmd0aCAtIDFdKTtcbiAgICAgICAgfSk7XG4gICAgfSxcblxuICAgIC8vIOenu+mZpOW9k+WJjemhtemdolxuICAgIG9uUmVtb3ZlUGFnZUF0SW5kZXggKCkge1xuICAgICAgICB0aGlzLmxlc3NQYWdlTnVtKCgpID0+IHtcbiAgICAgICAgICAgIHRoaXMudGFyZ2V0LnJlbW92ZVBhZ2VBdEluZGV4KHRoaXMudGFyZ2V0LmdldEN1cnJlbnRQYWdlSW5kZXgoKSk7XG4gICAgICAgIH0pO1xuICAgIH0sXG5cbiAgICAvLyDnp7vpmaTmiYDmnInpobXpnaJcbiAgICBvblJlbW92ZUFsbFBhZ2UgKCkge1xuICAgICAgICB0aGlzLnRhcmdldC5yZW1vdmVBbGxQYWdlcygpO1xuICAgICAgICB0aGlzLmN1ck51bSA9IDA7XG4gICAgfSxcblxuICAgIC8vIOebkeWQrOS6i+S7tlxuICAgIG9uUGFnZUV2ZW50IChzZW5kZXIsIGV2ZW50VHlwZSkge1xuICAgICAgICAvLyDnv7vpobXkuovku7ZcbiAgICAgICAgaWYgKGV2ZW50VHlwZSAhPT0gY2MuUGFnZVZpZXcuRXZlbnRUeXBlLlBBR0VfVFVSTklORykge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGNvbnNvbGUubG9nKFwi5b2T5YmN5omA5Zyo55qE6aG16Z2i57Si5byVOlwiICsgc2VuZGVyLmdldEN1cnJlbnRQYWdlSW5kZXgoKSk7XG4gICAgfVxufSk7XG4iXX0=