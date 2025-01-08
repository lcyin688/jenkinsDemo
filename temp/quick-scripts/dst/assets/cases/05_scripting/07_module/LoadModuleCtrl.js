
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/cases/05_scripting/07_module/LoadModuleCtrl.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '9e702GubHpK+4vAb3yu2OW5', 'LoadModuleCtrl');
// cases/05_scripting/07_module/LoadModuleCtrl.js

"use strict";

cc.Class({
  "extends": cc.Component,
  properties: {
    monsterTemp: {
      "default": null,
      type: cc.Prefab
    },
    btn_createMonster: {
      "default": null,
      type: cc.Node
    }
  },
  // use this for initialization
  onLoad: function onLoad() {
    this.btn_createMonster.on(cc.Node.EventType.TOUCH_END, this.createMoster.bind(this));
  },
  createMoster: function createMoster() {
    var monster = cc.instantiate(this.monsterTemp);

    var Monster = require("Monster");

    var monsterComp = monster.getComponent(Monster);

    var InitData = require("InitData");

    monsterComp.initInfo(InitData.monsterInfo);
    monster.parent = this.node;
    monster.setPosition(cc.v2(0, 0));
    this.btn_createMonster.active = false;
  } // called every frame, uncomment this function to activate update callback
  // update: function (dt) {
  // },

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9jYXNlcy8wNV9zY3JpcHRpbmcvMDdfbW9kdWxlL0xvYWRNb2R1bGVDdHJsLmpzIl0sIm5hbWVzIjpbImNjIiwiQ2xhc3MiLCJDb21wb25lbnQiLCJwcm9wZXJ0aWVzIiwibW9uc3RlclRlbXAiLCJ0eXBlIiwiUHJlZmFiIiwiYnRuX2NyZWF0ZU1vbnN0ZXIiLCJOb2RlIiwib25Mb2FkIiwib24iLCJFdmVudFR5cGUiLCJUT1VDSF9FTkQiLCJjcmVhdGVNb3N0ZXIiLCJiaW5kIiwibW9uc3RlciIsImluc3RhbnRpYXRlIiwiTW9uc3RlciIsInJlcXVpcmUiLCJtb25zdGVyQ29tcCIsImdldENvbXBvbmVudCIsIkluaXREYXRhIiwiaW5pdEluZm8iLCJtb25zdGVySW5mbyIsInBhcmVudCIsIm5vZGUiLCJzZXRQb3NpdGlvbiIsInYyIiwiYWN0aXZlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBQSxFQUFFLENBQUNDLEtBQUgsQ0FBUztFQUNMLFdBQVNELEVBQUUsQ0FBQ0UsU0FEUDtFQUdMQyxVQUFVLEVBQUU7SUFDUkMsV0FBVyxFQUFFO01BQ1QsV0FBUyxJQURBO01BRVRDLElBQUksRUFBRUwsRUFBRSxDQUFDTTtJQUZBLENBREw7SUFLUkMsaUJBQWlCLEVBQUU7TUFDZixXQUFTLElBRE07TUFFZkYsSUFBSSxFQUFFTCxFQUFFLENBQUNRO0lBRk07RUFMWCxDQUhQO0VBY0w7RUFDQUMsTUFBTSxFQUFFLGtCQUFZO0lBQ2hCLEtBQUtGLGlCQUFMLENBQXVCRyxFQUF2QixDQUEwQlYsRUFBRSxDQUFDUSxJQUFILENBQVFHLFNBQVIsQ0FBa0JDLFNBQTVDLEVBQXVELEtBQUtDLFlBQUwsQ0FBa0JDLElBQWxCLENBQXVCLElBQXZCLENBQXZEO0VBQ0gsQ0FqQkk7RUFtQkxELFlBQVksRUFBRSx3QkFBWTtJQUN0QixJQUFJRSxPQUFPLEdBQUdmLEVBQUUsQ0FBQ2dCLFdBQUgsQ0FBZSxLQUFLWixXQUFwQixDQUFkOztJQUNBLElBQUlhLE9BQU8sR0FBR0MsT0FBTyxDQUFDLFNBQUQsQ0FBckI7O0lBQ0EsSUFBSUMsV0FBVyxHQUFHSixPQUFPLENBQUNLLFlBQVIsQ0FBcUJILE9BQXJCLENBQWxCOztJQUNBLElBQUlJLFFBQVEsR0FBR0gsT0FBTyxDQUFDLFVBQUQsQ0FBdEI7O0lBQ0FDLFdBQVcsQ0FBQ0csUUFBWixDQUFxQkQsUUFBUSxDQUFDRSxXQUE5QjtJQUNBUixPQUFPLENBQUNTLE1BQVIsR0FBaUIsS0FBS0MsSUFBdEI7SUFDQVYsT0FBTyxDQUFDVyxXQUFSLENBQW9CMUIsRUFBRSxDQUFDMkIsRUFBSCxDQUFNLENBQU4sRUFBUyxDQUFULENBQXBCO0lBQ0EsS0FBS3BCLGlCQUFMLENBQXVCcUIsTUFBdkIsR0FBZ0MsS0FBaEM7RUFDSCxDQTVCSSxDQThCTDtFQUNBO0VBRUE7O0FBakNLLENBQVQiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImNjLkNsYXNzKHtcbiAgICBleHRlbmRzOiBjYy5Db21wb25lbnQsXG5cbiAgICBwcm9wZXJ0aWVzOiB7XG4gICAgICAgIG1vbnN0ZXJUZW1wOiB7XG4gICAgICAgICAgICBkZWZhdWx0OiBudWxsLFxuICAgICAgICAgICAgdHlwZTogY2MuUHJlZmFiXG4gICAgICAgIH0sXG4gICAgICAgIGJ0bl9jcmVhdGVNb25zdGVyOiB7XG4gICAgICAgICAgICBkZWZhdWx0OiBudWxsLFxuICAgICAgICAgICAgdHlwZTogY2MuTm9kZVxuICAgICAgICB9XG4gICAgfSxcblxuICAgIC8vIHVzZSB0aGlzIGZvciBpbml0aWFsaXphdGlvblxuICAgIG9uTG9hZDogZnVuY3Rpb24gKCkge1xuICAgICAgICB0aGlzLmJ0bl9jcmVhdGVNb25zdGVyLm9uKGNjLk5vZGUuRXZlbnRUeXBlLlRPVUNIX0VORCwgdGhpcy5jcmVhdGVNb3N0ZXIuYmluZCh0aGlzKSk7XG4gICAgfSxcblxuICAgIGNyZWF0ZU1vc3RlcjogZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgbW9uc3RlciA9IGNjLmluc3RhbnRpYXRlKHRoaXMubW9uc3RlclRlbXApO1xuICAgICAgICB2YXIgTW9uc3RlciA9IHJlcXVpcmUoXCJNb25zdGVyXCIpO1xuICAgICAgICB2YXIgbW9uc3RlckNvbXAgPSBtb25zdGVyLmdldENvbXBvbmVudChNb25zdGVyKTtcbiAgICAgICAgdmFyIEluaXREYXRhID0gcmVxdWlyZShcIkluaXREYXRhXCIpO1xuICAgICAgICBtb25zdGVyQ29tcC5pbml0SW5mbyhJbml0RGF0YS5tb25zdGVySW5mbyk7XG4gICAgICAgIG1vbnN0ZXIucGFyZW50ID0gdGhpcy5ub2RlO1xuICAgICAgICBtb25zdGVyLnNldFBvc2l0aW9uKGNjLnYyKDAsIDApKTtcbiAgICAgICAgdGhpcy5idG5fY3JlYXRlTW9uc3Rlci5hY3RpdmUgPSBmYWxzZTtcbiAgICB9XG5cbiAgICAvLyBjYWxsZWQgZXZlcnkgZnJhbWUsIHVuY29tbWVudCB0aGlzIGZ1bmN0aW9uIHRvIGFjdGl2YXRlIHVwZGF0ZSBjYWxsYmFja1xuICAgIC8vIHVwZGF0ZTogZnVuY3Rpb24gKGR0KSB7XG5cbiAgICAvLyB9LFxufSk7XG4iXX0=