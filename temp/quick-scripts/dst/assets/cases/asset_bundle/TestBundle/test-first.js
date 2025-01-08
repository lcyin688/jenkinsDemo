
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/cases/asset_bundle/TestBundle/test-first.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '912795WyhhNJ7ssdtf4at3V', 'test-first');
// cases/asset_bundle/TestBundle/test-first.js

"use strict";

cc.Class({
  "extends": cc.Component,
  properties: {
    tips: require('LabelLocalized')
  },
  start: function start() {
    this.tips.textKey = 'cases/AssetBundle.8';
  },
  goLoadSubpackage: function goLoadSubpackage() {
    cc.director.loadScene('AssetBundle');
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9jYXNlcy9hc3NldF9idW5kbGUvVGVzdEJ1bmRsZS90ZXN0LWZpcnN0LmpzIl0sIm5hbWVzIjpbImNjIiwiQ2xhc3MiLCJDb21wb25lbnQiLCJwcm9wZXJ0aWVzIiwidGlwcyIsInJlcXVpcmUiLCJzdGFydCIsInRleHRLZXkiLCJnb0xvYWRTdWJwYWNrYWdlIiwiZGlyZWN0b3IiLCJsb2FkU2NlbmUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUFBLEVBQUUsQ0FBQ0MsS0FBSCxDQUFTO0VBQ0wsV0FBU0QsRUFBRSxDQUFDRSxTQURQO0VBR0xDLFVBQVUsRUFBRTtJQUNSQyxJQUFJLEVBQUVDLE9BQU8sQ0FBQyxnQkFBRDtFQURMLENBSFA7RUFPTEMsS0FQSyxtQkFPSTtJQUNMLEtBQUtGLElBQUwsQ0FBVUcsT0FBVixHQUFvQixxQkFBcEI7RUFDSCxDQVRJO0VBV0xDLGdCQVhLLDhCQVdlO0lBQ2hCUixFQUFFLENBQUNTLFFBQUgsQ0FBWUMsU0FBWixDQUFzQixhQUF0QjtFQUNIO0FBYkksQ0FBVCIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiY2MuQ2xhc3Moe1xuICAgIGV4dGVuZHM6IGNjLkNvbXBvbmVudCxcblxuICAgIHByb3BlcnRpZXM6IHtcbiAgICAgICAgdGlwczogcmVxdWlyZSgnTGFiZWxMb2NhbGl6ZWQnKVxuICAgIH0sXG5cbiAgICBzdGFydCAoKSB7XG4gICAgICAgIHRoaXMudGlwcy50ZXh0S2V5ID0gJ2Nhc2VzL0Fzc2V0QnVuZGxlLjgnO1xuICAgIH0sXG5cbiAgICBnb0xvYWRTdWJwYWNrYWdlICgpIHtcbiAgICAgICAgY2MuZGlyZWN0b3IubG9hZFNjZW5lKCdBc3NldEJ1bmRsZScpO1xuICAgIH0sXG5cbn0pO1xuIl19