
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/cases/native_call/Native_Call/NativeCallCtrl.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '5245dIEBoFFB4RdXwoJQM2G', 'NativeCallCtrl');
// cases/native_call/Native_Call/NativeCallCtrl.js

"use strict";

var tips = null;

cc.TestNativeCallJS = function () {
  tips.string = 'The test was successful...';
};

cc.Class({
  "extends": cc.Component,
  properties: {
    button: cc.Node
  },
  start: function start() {
    var tipNode = cc.find("Canvas/New Label");
    tips = tipNode.getComponent(cc.Label);
    tips.string = 'Native Call Test';
  },
  onClick: function onClick() {
    if (cc.sys.os === cc.sys.OS_ANDROID) {
      var className = "org/cocos2dx/javascript/AppActivity";
      var methodName = "showAlertDialog";
      var methodSignature = "(Ljava/lang/String;Ljava/lang/String;)V";
      jsb.reflection.callStaticMethod(className, methodName, methodSignature, "Title", "Native Call Test");
    } else if (cc.sys.os === cc.sys.OS_IOS || cc.sys.os === cc.sys.OS_OSX) {
      jsb.reflection.callStaticMethod('AppController', 'showAlertDialog:withMessage:', "Title", "Native Call Test");
    }
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9jYXNlcy9uYXRpdmVfY2FsbC9OYXRpdmVfQ2FsbC9OYXRpdmVDYWxsQ3RybC5qcyJdLCJuYW1lcyI6WyJ0aXBzIiwiY2MiLCJUZXN0TmF0aXZlQ2FsbEpTIiwic3RyaW5nIiwiQ2xhc3MiLCJDb21wb25lbnQiLCJwcm9wZXJ0aWVzIiwiYnV0dG9uIiwiTm9kZSIsInN0YXJ0IiwidGlwTm9kZSIsImZpbmQiLCJnZXRDb21wb25lbnQiLCJMYWJlbCIsIm9uQ2xpY2siLCJzeXMiLCJvcyIsIk9TX0FORFJPSUQiLCJjbGFzc05hbWUiLCJtZXRob2ROYW1lIiwibWV0aG9kU2lnbmF0dXJlIiwianNiIiwicmVmbGVjdGlvbiIsImNhbGxTdGF0aWNNZXRob2QiLCJPU19JT1MiLCJPU19PU1giXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsSUFBSUEsSUFBSSxHQUFHLElBQVg7O0FBQ0FDLEVBQUUsQ0FBQ0MsZ0JBQUgsR0FBc0IsWUFBWTtFQUM5QkYsSUFBSSxDQUFDRyxNQUFMLEdBQWMsNEJBQWQ7QUFDSCxDQUZEOztBQUlBRixFQUFFLENBQUNHLEtBQUgsQ0FBUztFQUNMLFdBQVNILEVBQUUsQ0FBQ0ksU0FEUDtFQUdMQyxVQUFVLEVBQUU7SUFDUkMsTUFBTSxFQUFFTixFQUFFLENBQUNPO0VBREgsQ0FIUDtFQU9MQyxLQVBLLG1CQU9JO0lBQ0wsSUFBSUMsT0FBTyxHQUFHVCxFQUFFLENBQUNVLElBQUgsQ0FBUSxrQkFBUixDQUFkO0lBQ0FYLElBQUksR0FBR1UsT0FBTyxDQUFDRSxZQUFSLENBQXFCWCxFQUFFLENBQUNZLEtBQXhCLENBQVA7SUFDQWIsSUFBSSxDQUFDRyxNQUFMLEdBQWMsa0JBQWQ7RUFDSCxDQVhJO0VBYUxXLE9BYksscUJBYU07SUFDUCxJQUFJYixFQUFFLENBQUNjLEdBQUgsQ0FBT0MsRUFBUCxLQUFjZixFQUFFLENBQUNjLEdBQUgsQ0FBT0UsVUFBekIsRUFBcUM7TUFDakMsSUFBSUMsU0FBUyxHQUFHLHFDQUFoQjtNQUNBLElBQUlDLFVBQVUsR0FBRyxpQkFBakI7TUFDQSxJQUFJQyxlQUFlLEdBQUcseUNBQXRCO01BQ0FDLEdBQUcsQ0FBQ0MsVUFBSixDQUFlQyxnQkFBZixDQUFnQ0wsU0FBaEMsRUFBMkNDLFVBQTNDLEVBQXVEQyxlQUF2RCxFQUF3RSxPQUF4RSxFQUFpRixrQkFBakY7SUFDSCxDQUxELE1BTUssSUFBSW5CLEVBQUUsQ0FBQ2MsR0FBSCxDQUFPQyxFQUFQLEtBQWNmLEVBQUUsQ0FBQ2MsR0FBSCxDQUFPUyxNQUFyQixJQUErQnZCLEVBQUUsQ0FBQ2MsR0FBSCxDQUFPQyxFQUFQLEtBQWNmLEVBQUUsQ0FBQ2MsR0FBSCxDQUFPVSxNQUF4RCxFQUFnRTtNQUNqRUosR0FBRyxDQUFDQyxVQUFKLENBQWVDLGdCQUFmLENBQWdDLGVBQWhDLEVBQWlELDhCQUFqRCxFQUFpRixPQUFqRixFQUEwRixrQkFBMUY7SUFDSDtFQUNKO0FBdkJJLENBQVQiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImxldCB0aXBzID0gbnVsbDtcbmNjLlRlc3ROYXRpdmVDYWxsSlMgPSBmdW5jdGlvbiAoKSB7XG4gICAgdGlwcy5zdHJpbmcgPSAnVGhlIHRlc3Qgd2FzIHN1Y2Nlc3NmdWwuLi4nO1xufTtcblxuY2MuQ2xhc3Moe1xuICAgIGV4dGVuZHM6IGNjLkNvbXBvbmVudCxcblxuICAgIHByb3BlcnRpZXM6IHtcbiAgICAgICAgYnV0dG9uOiBjYy5Ob2RlXG4gICAgfSxcblxuICAgIHN0YXJ0ICgpIHtcbiAgICAgICAgdmFyIHRpcE5vZGUgPSBjYy5maW5kKFwiQ2FudmFzL05ldyBMYWJlbFwiKTtcbiAgICAgICAgdGlwcyA9IHRpcE5vZGUuZ2V0Q29tcG9uZW50KGNjLkxhYmVsKTtcbiAgICAgICAgdGlwcy5zdHJpbmcgPSAnTmF0aXZlIENhbGwgVGVzdCc7XG4gICAgfSxcblxuICAgIG9uQ2xpY2sgKCkge1xuICAgICAgICBpZiAoY2Muc3lzLm9zID09PSBjYy5zeXMuT1NfQU5EUk9JRCkge1xuICAgICAgICAgICAgbGV0IGNsYXNzTmFtZSA9IFwib3JnL2NvY29zMmR4L2phdmFzY3JpcHQvQXBwQWN0aXZpdHlcIjtcbiAgICAgICAgICAgIGxldCBtZXRob2ROYW1lID0gXCJzaG93QWxlcnREaWFsb2dcIjtcbiAgICAgICAgICAgIGxldCBtZXRob2RTaWduYXR1cmUgPSBcIihMamF2YS9sYW5nL1N0cmluZztMamF2YS9sYW5nL1N0cmluZzspVlwiO1xuICAgICAgICAgICAganNiLnJlZmxlY3Rpb24uY2FsbFN0YXRpY01ldGhvZChjbGFzc05hbWUsIG1ldGhvZE5hbWUsIG1ldGhvZFNpZ25hdHVyZSwgXCJUaXRsZVwiLCBcIk5hdGl2ZSBDYWxsIFRlc3RcIik7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoY2Muc3lzLm9zID09PSBjYy5zeXMuT1NfSU9TIHx8IGNjLnN5cy5vcyA9PT0gY2Muc3lzLk9TX09TWCkge1xuICAgICAgICAgICAganNiLnJlZmxlY3Rpb24uY2FsbFN0YXRpY01ldGhvZCgnQXBwQ29udHJvbGxlcicsICdzaG93QWxlcnREaWFsb2c6d2l0aE1lc3NhZ2U6JywgXCJUaXRsZVwiLCBcIk5hdGl2ZSBDYWxsIFRlc3RcIik7XG4gICAgICAgIH1cbiAgICB9XG59KTtcbiJdfQ==