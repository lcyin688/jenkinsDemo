
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/cases/05_scripting/01_properties/ValueTypeProperties.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'd9bf6bFb+tF779stLEmjzTV', 'ValueTypeProperties');
// cases/05_scripting/01_properties/ValueTypeProperties.js

"use strict";

cc.Class({
  "extends": cc.Component,
  properties: {
    // number
    myNumber: {
      "default": 0,
      type: cc.Integer
    },
    // string
    myString: {
      "default": 'default text'
    },
    myVec2: {
      "default": cc.Vec2.ZERO
    },
    myColor: {
      "default": cc.Color.WHITE
    },
    myOtherNumber: 0,
    myOtherString: 'no type definition',
    myOtherVec2: cc.Vec2.ONE,
    myOtherColor: cc.Color.BLACK
  },
  // use this for initialization
  onLoad: function onLoad() {},
  // called every frame
  update: function update(dt) {}
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9jYXNlcy8wNV9zY3JpcHRpbmcvMDFfcHJvcGVydGllcy9WYWx1ZVR5cGVQcm9wZXJ0aWVzLmpzIl0sIm5hbWVzIjpbImNjIiwiQ2xhc3MiLCJDb21wb25lbnQiLCJwcm9wZXJ0aWVzIiwibXlOdW1iZXIiLCJ0eXBlIiwiSW50ZWdlciIsIm15U3RyaW5nIiwibXlWZWMyIiwiVmVjMiIsIlpFUk8iLCJteUNvbG9yIiwiQ29sb3IiLCJXSElURSIsIm15T3RoZXJOdW1iZXIiLCJteU90aGVyU3RyaW5nIiwibXlPdGhlclZlYzIiLCJPTkUiLCJteU90aGVyQ29sb3IiLCJCTEFDSyIsIm9uTG9hZCIsInVwZGF0ZSIsImR0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBQSxFQUFFLENBQUNDLEtBQUgsQ0FBUztFQUNMLFdBQVNELEVBQUUsQ0FBQ0UsU0FEUDtFQUdMQyxVQUFVLEVBQUU7SUFDUjtJQUNBQyxRQUFRLEVBQUU7TUFDTixXQUFTLENBREg7TUFFTkMsSUFBSSxFQUFFTCxFQUFFLENBQUNNO0lBRkgsQ0FGRjtJQU1SO0lBQ0FDLFFBQVEsRUFBRTtNQUNOLFdBQVM7SUFESCxDQVBGO0lBVVJDLE1BQU0sRUFBRTtNQUNKLFdBQVNSLEVBQUUsQ0FBQ1MsSUFBSCxDQUFRQztJQURiLENBVkE7SUFhUkMsT0FBTyxFQUFFO01BQ0wsV0FBU1gsRUFBRSxDQUFDWSxLQUFILENBQVNDO0lBRGIsQ0FiRDtJQWdCUkMsYUFBYSxFQUFFLENBaEJQO0lBaUJSQyxhQUFhLEVBQUUsb0JBakJQO0lBa0JSQyxXQUFXLEVBQUVoQixFQUFFLENBQUNTLElBQUgsQ0FBUVEsR0FsQmI7SUFtQlJDLFlBQVksRUFBRWxCLEVBQUUsQ0FBQ1ksS0FBSCxDQUFTTztFQW5CZixDQUhQO0VBeUJMO0VBQ0FDLE1BQU0sRUFBRSxrQkFBWSxDQUVuQixDQTVCSTtFQThCTDtFQUNBQyxNQUFNLEVBQUUsZ0JBQVVDLEVBQVYsRUFBYyxDQUVyQjtBQWpDSSxDQUFUIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJjYy5DbGFzcyh7XG4gICAgZXh0ZW5kczogY2MuQ29tcG9uZW50LFxuXG4gICAgcHJvcGVydGllczoge1xuICAgICAgICAvLyBudW1iZXJcbiAgICAgICAgbXlOdW1iZXI6IHtcbiAgICAgICAgICAgIGRlZmF1bHQ6IDAsXG4gICAgICAgICAgICB0eXBlOiBjYy5JbnRlZ2VyXG4gICAgICAgIH0sXG4gICAgICAgIC8vIHN0cmluZ1xuICAgICAgICBteVN0cmluZzoge1xuICAgICAgICAgICAgZGVmYXVsdDogJ2RlZmF1bHQgdGV4dCcsXG4gICAgICAgIH0sXG4gICAgICAgIG15VmVjMjoge1xuICAgICAgICAgICAgZGVmYXVsdDogY2MuVmVjMi5aRVJPLFxuICAgICAgICB9LFxuICAgICAgICBteUNvbG9yOiB7XG4gICAgICAgICAgICBkZWZhdWx0OiBjYy5Db2xvci5XSElURSxcbiAgICAgICAgfSxcbiAgICAgICAgbXlPdGhlck51bWJlcjogMCxcbiAgICAgICAgbXlPdGhlclN0cmluZzogJ25vIHR5cGUgZGVmaW5pdGlvbicsXG4gICAgICAgIG15T3RoZXJWZWMyOiBjYy5WZWMyLk9ORSxcbiAgICAgICAgbXlPdGhlckNvbG9yOiBjYy5Db2xvci5CTEFDS1xuICAgIH0sXG5cbiAgICAvLyB1c2UgdGhpcyBmb3IgaW5pdGlhbGl6YXRpb25cbiAgICBvbkxvYWQ6IGZ1bmN0aW9uICgpIHtcblxuICAgIH0sXG5cbiAgICAvLyBjYWxsZWQgZXZlcnkgZnJhbWVcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIChkdCkge1xuXG4gICAgfSxcbn0pO1xuIl19