
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/cases/02_ui/10_webview/WebviewCtrl.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'f8de1gmPM1CLoiv+P/T9HnJ', 'WebviewCtrl');
// cases/02_ui/10_webview/WebviewCtrl.js

"use strict";

cc.Class({
  "extends": cc.Component,
  properties: {
    labelStatus: cc.Label,
    webview: cc.WebView,
    url: cc.EditBox
  },
  onWebFinishLoad: function onWebFinishLoad(sender, event) {
    var loadStatus = "";

    if (event === cc.WebView.EventType.LOADED) {
      loadStatus = " is loaded!";
    } else if (event === cc.WebView.EventType.LOADING) {
      loadStatus = " is loading!";
    } else if (event === cc.WebView.EventType.ERROR) {
      loadStatus = ' load error!';
    }

    this.labelStatus.string = this.webview.url + loadStatus;
  },
  visitURL: function visitURL() {
    this.webview.url = this.url.string;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9jYXNlcy8wMl91aS8xMF93ZWJ2aWV3L1dlYnZpZXdDdHJsLmpzIl0sIm5hbWVzIjpbImNjIiwiQ2xhc3MiLCJDb21wb25lbnQiLCJwcm9wZXJ0aWVzIiwibGFiZWxTdGF0dXMiLCJMYWJlbCIsIndlYnZpZXciLCJXZWJWaWV3IiwidXJsIiwiRWRpdEJveCIsIm9uV2ViRmluaXNoTG9hZCIsInNlbmRlciIsImV2ZW50IiwibG9hZFN0YXR1cyIsIkV2ZW50VHlwZSIsIkxPQURFRCIsIkxPQURJTkciLCJFUlJPUiIsInN0cmluZyIsInZpc2l0VVJMIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBQSxFQUFFLENBQUNDLEtBQUgsQ0FBUztFQUNMLFdBQVNELEVBQUUsQ0FBQ0UsU0FEUDtFQUdMQyxVQUFVLEVBQUU7SUFDUkMsV0FBVyxFQUFFSixFQUFFLENBQUNLLEtBRFI7SUFFUkMsT0FBTyxFQUFFTixFQUFFLENBQUNPLE9BRko7SUFHUkMsR0FBRyxFQUFFUixFQUFFLENBQUNTO0VBSEEsQ0FIUDtFQVNMQyxlQUFlLEVBQUUseUJBQVVDLE1BQVYsRUFBa0JDLEtBQWxCLEVBQXlCO0lBQ3RDLElBQUlDLFVBQVUsR0FBRyxFQUFqQjs7SUFDQSxJQUFJRCxLQUFLLEtBQUtaLEVBQUUsQ0FBQ08sT0FBSCxDQUFXTyxTQUFYLENBQXFCQyxNQUFuQyxFQUEyQztNQUN2Q0YsVUFBVSxHQUFHLGFBQWI7SUFDSCxDQUZELE1BRU8sSUFBSUQsS0FBSyxLQUFLWixFQUFFLENBQUNPLE9BQUgsQ0FBV08sU0FBWCxDQUFxQkUsT0FBbkMsRUFBNEM7TUFDL0NILFVBQVUsR0FBRyxjQUFiO0lBQ0gsQ0FGTSxNQUVBLElBQUlELEtBQUssS0FBS1osRUFBRSxDQUFDTyxPQUFILENBQVdPLFNBQVgsQ0FBcUJHLEtBQW5DLEVBQTBDO01BQzdDSixVQUFVLEdBQUcsY0FBYjtJQUNIOztJQUNELEtBQUtULFdBQUwsQ0FBaUJjLE1BQWpCLEdBQTBCLEtBQUtaLE9BQUwsQ0FBYUUsR0FBYixHQUFtQkssVUFBN0M7RUFDSCxDQW5CSTtFQXFCTE0sUUFBUSxFQUFFLG9CQUFZO0lBQ2xCLEtBQUtiLE9BQUwsQ0FBYUUsR0FBYixHQUFtQixLQUFLQSxHQUFMLENBQVNVLE1BQTVCO0VBQ0g7QUF2QkksQ0FBVCIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiY2MuQ2xhc3Moe1xuICAgIGV4dGVuZHM6IGNjLkNvbXBvbmVudCxcblxuICAgIHByb3BlcnRpZXM6IHtcbiAgICAgICAgbGFiZWxTdGF0dXM6IGNjLkxhYmVsLFxuICAgICAgICB3ZWJ2aWV3OiBjYy5XZWJWaWV3LFxuICAgICAgICB1cmw6IGNjLkVkaXRCb3hcbiAgICB9LFxuXG4gICAgb25XZWJGaW5pc2hMb2FkOiBmdW5jdGlvbiAoc2VuZGVyLCBldmVudCkge1xuICAgICAgICB2YXIgbG9hZFN0YXR1cyA9IFwiXCI7XG4gICAgICAgIGlmIChldmVudCA9PT0gY2MuV2ViVmlldy5FdmVudFR5cGUuTE9BREVEKSB7XG4gICAgICAgICAgICBsb2FkU3RhdHVzID0gXCIgaXMgbG9hZGVkIVwiO1xuICAgICAgICB9IGVsc2UgaWYgKGV2ZW50ID09PSBjYy5XZWJWaWV3LkV2ZW50VHlwZS5MT0FESU5HKSB7XG4gICAgICAgICAgICBsb2FkU3RhdHVzID0gXCIgaXMgbG9hZGluZyFcIjtcbiAgICAgICAgfSBlbHNlIGlmIChldmVudCA9PT0gY2MuV2ViVmlldy5FdmVudFR5cGUuRVJST1IpIHtcbiAgICAgICAgICAgIGxvYWRTdGF0dXMgPSAnIGxvYWQgZXJyb3IhJztcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmxhYmVsU3RhdHVzLnN0cmluZyA9IHRoaXMud2Vidmlldy51cmwgKyBsb2FkU3RhdHVzO1xuICAgIH0sXG5cbiAgICB2aXNpdFVSTDogZnVuY3Rpb24gKCkge1xuICAgICAgICB0aGlzLndlYnZpZXcudXJsID0gdGhpcy51cmwuc3RyaW5nO1xuICAgIH1cbn0pO1xuIl19