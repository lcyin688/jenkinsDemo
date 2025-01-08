
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/main menu/StorageUtil.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '9bf9cWgTmNAapAWiQT08YdJ', 'StorageUtil');
// main menu/StorageUtil.js

"use strict";

cc.Class({
  "extends": cc.Component,
  // record example-case state
  setCurrentScene: function setCurrentScene(sceneName) {
    if (!CC_PREVIEW) {
      return;
    }

    cc.sys.localStorage.setItem('current-scene', sceneName);
  },
  getCurrentScene: function getCurrentScene() {
    if (!CC_PREVIEW) {
      return;
    }

    var scene = cc.sys.localStorage.getItem('current-scene');

    if (scene) {
      return scene;
    }

    return null;
  },
  // if you want to init the example-case state
  clearStorage: function clearStorage() {
    cc.sys.localStorage.clear();
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9tYWluIG1lbnUvU3RvcmFnZVV0aWwuanMiXSwibmFtZXMiOlsiY2MiLCJDbGFzcyIsIkNvbXBvbmVudCIsInNldEN1cnJlbnRTY2VuZSIsInNjZW5lTmFtZSIsIkNDX1BSRVZJRVciLCJzeXMiLCJsb2NhbFN0b3JhZ2UiLCJzZXRJdGVtIiwiZ2V0Q3VycmVudFNjZW5lIiwic2NlbmUiLCJnZXRJdGVtIiwiY2xlYXJTdG9yYWdlIiwiY2xlYXIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUFBLEVBQUUsQ0FBQ0MsS0FBSCxDQUFTO0VBQ0wsV0FBU0QsRUFBRSxDQUFDRSxTQURQO0VBR0w7RUFDQUMsZUFKSywyQkFJWUMsU0FKWixFQUl1QjtJQUN4QixJQUFJLENBQUNDLFVBQUwsRUFBaUI7TUFDYjtJQUNIOztJQUNETCxFQUFFLENBQUNNLEdBQUgsQ0FBT0MsWUFBUCxDQUFvQkMsT0FBcEIsQ0FBNEIsZUFBNUIsRUFBNkNKLFNBQTdDO0VBQ0gsQ0FUSTtFQVdMSyxlQVhLLDZCQVdjO0lBQ2YsSUFBSSxDQUFDSixVQUFMLEVBQWlCO01BQ2I7SUFDSDs7SUFDRCxJQUFJSyxLQUFLLEdBQUdWLEVBQUUsQ0FBQ00sR0FBSCxDQUFPQyxZQUFQLENBQW9CSSxPQUFwQixDQUE0QixlQUE1QixDQUFaOztJQUNBLElBQUlELEtBQUosRUFBVztNQUNQLE9BQU9BLEtBQVA7SUFDSDs7SUFDRCxPQUFPLElBQVA7RUFDSCxDQXBCSTtFQXFCTDtFQUNBRSxZQXRCSywwQkFzQlc7SUFDWlosRUFBRSxDQUFDTSxHQUFILENBQU9DLFlBQVAsQ0FBb0JNLEtBQXBCO0VBQ0g7QUF4QkksQ0FBVCIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiY2MuQ2xhc3Moe1xuICAgIGV4dGVuZHM6IGNjLkNvbXBvbmVudCxcblxuICAgIC8vIHJlY29yZCBleGFtcGxlLWNhc2Ugc3RhdGVcbiAgICBzZXRDdXJyZW50U2NlbmUgKHNjZW5lTmFtZSkge1xuICAgICAgICBpZiAoIUNDX1BSRVZJRVcpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBjYy5zeXMubG9jYWxTdG9yYWdlLnNldEl0ZW0oJ2N1cnJlbnQtc2NlbmUnLCBzY2VuZU5hbWUpO1xuICAgIH0sXG5cbiAgICBnZXRDdXJyZW50U2NlbmUgKCkge1xuICAgICAgICBpZiAoIUNDX1BSRVZJRVcpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBsZXQgc2NlbmUgPSBjYy5zeXMubG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2N1cnJlbnQtc2NlbmUnKTtcbiAgICAgICAgaWYgKHNjZW5lKSB7XG4gICAgICAgICAgICByZXR1cm4gc2NlbmU7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgfSxcbiAgICAvLyBpZiB5b3Ugd2FudCB0byBpbml0IHRoZSBleGFtcGxlLWNhc2Ugc3RhdGVcbiAgICBjbGVhclN0b3JhZ2UgKCkge1xuICAgICAgICBjYy5zeXMubG9jYWxTdG9yYWdlLmNsZWFyKCk7XG4gICAgfVxufSk7Il19