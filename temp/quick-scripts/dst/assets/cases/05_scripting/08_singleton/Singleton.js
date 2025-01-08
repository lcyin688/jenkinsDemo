
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/cases/05_scripting/08_singleton/Singleton.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '379d2K4GUtCv7pB9+wuz4Lb', 'Singleton');
// cases/05_scripting/08_singleton/Singleton.js

"use strict";

var Singleton = cc.Class({
  "extends": cc.Component,
  properties: {
    monsterIcon: {
      "default": null,
      type: cc.SpriteFrame
    }
  },
  statics: {
    instance: null
  },
  onLoad: function onLoad() {
    Singleton.instance = this;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9jYXNlcy8wNV9zY3JpcHRpbmcvMDhfc2luZ2xldG9uL1NpbmdsZXRvbi5qcyJdLCJuYW1lcyI6WyJTaW5nbGV0b24iLCJjYyIsIkNsYXNzIiwiQ29tcG9uZW50IiwicHJvcGVydGllcyIsIm1vbnN0ZXJJY29uIiwidHlwZSIsIlNwcml0ZUZyYW1lIiwic3RhdGljcyIsImluc3RhbmNlIiwib25Mb2FkIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLElBQUlBLFNBQVMsR0FBR0MsRUFBRSxDQUFDQyxLQUFILENBQVM7RUFDckIsV0FBU0QsRUFBRSxDQUFDRSxTQURTO0VBR3JCQyxVQUFVLEVBQUU7SUFDUkMsV0FBVyxFQUFFO01BQ1QsV0FBUyxJQURBO01BRVRDLElBQUksRUFBRUwsRUFBRSxDQUFDTTtJQUZBO0VBREwsQ0FIUztFQVVyQkMsT0FBTyxFQUFFO0lBQ0xDLFFBQVEsRUFBRTtFQURMLENBVlk7RUFjckJDLE1BQU0sRUFBRSxrQkFBWTtJQUNoQlYsU0FBUyxDQUFDUyxRQUFWLEdBQXFCLElBQXJCO0VBQ0g7QUFoQm9CLENBQVQsQ0FBaEIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbInZhciBTaW5nbGV0b24gPSBjYy5DbGFzcyh7XG4gICAgZXh0ZW5kczogY2MuQ29tcG9uZW50LFxuXG4gICAgcHJvcGVydGllczoge1xuICAgICAgICBtb25zdGVySWNvbjoge1xuICAgICAgICAgICAgZGVmYXVsdDogbnVsbCxcbiAgICAgICAgICAgIHR5cGU6IGNjLlNwcml0ZUZyYW1lXG4gICAgICAgIH1cbiAgICB9LFxuXG4gICAgc3RhdGljczoge1xuICAgICAgICBpbnN0YW5jZTogbnVsbFxuICAgIH0sXG5cbiAgICBvbkxvYWQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgU2luZ2xldG9uLmluc3RhbmNlID0gdGhpcztcbiAgICB9XG59KTtcbiJdfQ==