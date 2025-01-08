
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/Global/Helpers.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'c8640M3ozRErrV/Go3uTknt', 'Helpers');
// scripts/Global/Helpers.js

"use strict";

if (CC_JSB && cc.runtime) {
  // fix cocos-creator/fireball#3578
  cc.LoaderLayer.setUseDefaultSource(false);
  cc.Dialog.setUseDefaultSource(false);
} // Returns a random integer between min (included) and max (excluded)


function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

module.exports = {
  getRandomInt: getRandomInt
};

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHRzL0dsb2JhbC9IZWxwZXJzLmpzIl0sIm5hbWVzIjpbIkNDX0pTQiIsImNjIiwicnVudGltZSIsIkxvYWRlckxheWVyIiwic2V0VXNlRGVmYXVsdFNvdXJjZSIsIkRpYWxvZyIsImdldFJhbmRvbUludCIsIm1pbiIsIm1heCIsIk1hdGgiLCJmbG9vciIsInJhbmRvbSIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsSUFBSUEsTUFBTSxJQUFJQyxFQUFFLENBQUNDLE9BQWpCLEVBQTBCO0VBQ3RCO0VBQ0FELEVBQUUsQ0FBQ0UsV0FBSCxDQUFlQyxtQkFBZixDQUFtQyxLQUFuQztFQUNBSCxFQUFFLENBQUNJLE1BQUgsQ0FBVUQsbUJBQVYsQ0FBOEIsS0FBOUI7QUFDSCxFQUVEOzs7QUFDQSxTQUFTRSxZQUFULENBQXNCQyxHQUF0QixFQUEyQkMsR0FBM0IsRUFBZ0M7RUFDNUIsT0FBT0MsSUFBSSxDQUFDQyxLQUFMLENBQVdELElBQUksQ0FBQ0UsTUFBTCxNQUFpQkgsR0FBRyxHQUFHRCxHQUF2QixDQUFYLElBQTBDQSxHQUFqRDtBQUNIOztBQUVESyxNQUFNLENBQUNDLE9BQVAsR0FBaUI7RUFDaEJQLFlBQVksRUFBRUE7QUFERSxDQUFqQiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaWYgKENDX0pTQiAmJiBjYy5ydW50aW1lKSB7XG4gICAgLy8gZml4IGNvY29zLWNyZWF0b3IvZmlyZWJhbGwjMzU3OFxuICAgIGNjLkxvYWRlckxheWVyLnNldFVzZURlZmF1bHRTb3VyY2UoZmFsc2UpO1xuICAgIGNjLkRpYWxvZy5zZXRVc2VEZWZhdWx0U291cmNlKGZhbHNlKTtcbn1cblxuLy8gUmV0dXJucyBhIHJhbmRvbSBpbnRlZ2VyIGJldHdlZW4gbWluIChpbmNsdWRlZCkgYW5kIG1heCAoZXhjbHVkZWQpXG5mdW5jdGlvbiBnZXRSYW5kb21JbnQobWluLCBtYXgpIHtcbiAgICByZXR1cm4gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogKG1heCAtIG1pbikpICsgbWluO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHtcblx0Z2V0UmFuZG9tSW50OiBnZXRSYW5kb21JbnRcbn07XG4iXX0=