
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/cases/03_gameplay/02_actions/RepeatAction/RepeatAction.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '66d74aG3cdDq4lLyUUjOCk/', 'RepeatAction');
// cases/03_gameplay/02_actions/RepeatAction/RepeatAction.js

"use strict";

var MAX_VALUE = 5;
var TIPS_STR = 'repeat count: ' + MAX_VALUE + ' / value';
cc.Class({
  "extends": cc.Component,
  properties: {
    tips: cc.Label
  },
  // use this for initialization
  onLoad: function onLoad() {
    var _this = this;

    this.setTips(0);
    var count = 0;
    var action1 = cc.delayTime(1);
    var action2 = cc.callFunc(function () {
      count++;

      _this.setTips(count);
    }, this);
    this.node.runAction(cc.repeat(cc.sequence(action1, action2), 5));
  },
  setTips: function setTips(count) {
    this.tips.string = TIPS_STR.replace(/value/, count);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9jYXNlcy8wM19nYW1lcGxheS8wMl9hY3Rpb25zL1JlcGVhdEFjdGlvbi9SZXBlYXRBY3Rpb24uanMiXSwibmFtZXMiOlsiTUFYX1ZBTFVFIiwiVElQU19TVFIiLCJjYyIsIkNsYXNzIiwiQ29tcG9uZW50IiwicHJvcGVydGllcyIsInRpcHMiLCJMYWJlbCIsIm9uTG9hZCIsInNldFRpcHMiLCJjb3VudCIsImFjdGlvbjEiLCJkZWxheVRpbWUiLCJhY3Rpb24yIiwiY2FsbEZ1bmMiLCJub2RlIiwicnVuQWN0aW9uIiwicmVwZWF0Iiwic2VxdWVuY2UiLCJzdHJpbmciLCJyZXBsYWNlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLElBQU1BLFNBQVMsR0FBRyxDQUFsQjtBQUNBLElBQU1DLFFBQVEsR0FBRyxtQkFBa0JELFNBQWxCLEdBQTZCLFVBQTlDO0FBRUFFLEVBQUUsQ0FBQ0MsS0FBSCxDQUFTO0VBQ0wsV0FBU0QsRUFBRSxDQUFDRSxTQURQO0VBR0xDLFVBQVUsRUFBRTtJQUNSQyxJQUFJLEVBQUVKLEVBQUUsQ0FBQ0s7RUFERCxDQUhQO0VBT0w7RUFDQUMsTUFSSyxvQkFRSztJQUFBOztJQUNOLEtBQUtDLE9BQUwsQ0FBYSxDQUFiO0lBQ0EsSUFBSUMsS0FBSyxHQUFHLENBQVo7SUFDQSxJQUFJQyxPQUFPLEdBQUdULEVBQUUsQ0FBQ1UsU0FBSCxDQUFhLENBQWIsQ0FBZDtJQUNBLElBQUlDLE9BQU8sR0FBR1gsRUFBRSxDQUFDWSxRQUFILENBQVksWUFBTTtNQUM1QkosS0FBSzs7TUFDTCxLQUFJLENBQUNELE9BQUwsQ0FBYUMsS0FBYjtJQUNILENBSGEsRUFHWCxJQUhXLENBQWQ7SUFJQSxLQUFLSyxJQUFMLENBQVVDLFNBQVYsQ0FBb0JkLEVBQUUsQ0FBQ2UsTUFBSCxDQUFVZixFQUFFLENBQUNnQixRQUFILENBQVlQLE9BQVosRUFBcUJFLE9BQXJCLENBQVYsRUFBeUMsQ0FBekMsQ0FBcEI7RUFDSCxDQWpCSTtFQW1CTEosT0FuQkssbUJBbUJJQyxLQW5CSixFQW1CVztJQUNaLEtBQUtKLElBQUwsQ0FBVWEsTUFBVixHQUFtQmxCLFFBQVEsQ0FBQ21CLE9BQVQsQ0FBaUIsT0FBakIsRUFBMEJWLEtBQTFCLENBQW5CO0VBQ0g7QUFyQkksQ0FBVCIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgTUFYX1ZBTFVFID0gNTtcbmNvbnN0IFRJUFNfU1RSID0gJ3JlcGVhdCBjb3VudDogJysgTUFYX1ZBTFVFICsnIC8gdmFsdWUnO1xuXG5jYy5DbGFzcyh7XG4gICAgZXh0ZW5kczogY2MuQ29tcG9uZW50LFxuXG4gICAgcHJvcGVydGllczoge1xuICAgICAgICB0aXBzOiBjYy5MYWJlbFxuICAgIH0sXG5cbiAgICAvLyB1c2UgdGhpcyBmb3IgaW5pdGlhbGl6YXRpb25cbiAgICBvbkxvYWQgKCkge1xuICAgICAgICB0aGlzLnNldFRpcHMoMCk7XG4gICAgICAgIGxldCBjb3VudCA9IDA7XG4gICAgICAgIGxldCBhY3Rpb24xID0gY2MuZGVsYXlUaW1lKDEpO1xuICAgICAgICBsZXQgYWN0aW9uMiA9IGNjLmNhbGxGdW5jKCgpID0+IHtcbiAgICAgICAgICAgIGNvdW50Kys7XG4gICAgICAgICAgICB0aGlzLnNldFRpcHMoY291bnQpO1xuICAgICAgICB9LCB0aGlzKTtcbiAgICAgICAgdGhpcy5ub2RlLnJ1bkFjdGlvbihjYy5yZXBlYXQoY2Muc2VxdWVuY2UoYWN0aW9uMSwgYWN0aW9uMiksIDUpKTtcbiAgICB9LFxuXG4gICAgc2V0VGlwcyAoY291bnQpIHtcbiAgICAgICAgdGhpcy50aXBzLnN0cmluZyA9IFRJUFNfU1RSLnJlcGxhY2UoL3ZhbHVlLywgY291bnQpO1xuICAgIH1cblxufSk7XG4iXX0=