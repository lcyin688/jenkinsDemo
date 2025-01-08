
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/cases/collider/Shooter/Shooter.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '092a3wYF7pBULdP9SLwGUBQ', 'Shooter');
// cases/collider/Shooter/Shooter.js

"use strict";

cc.Class({
  "extends": cc.Component,
  properties: {
    bullet: {
      "default": null,
      type: cc.Node
    }
  },
  // use this for initialization
  onLoad: function onLoad() {
    cc.director.getCollisionManager().enabled = true;
    cc.director.getCollisionManager().enabledDebugDraw = true;
    var canvas = cc.find('Canvas');
    canvas.on(cc.Node.EventType.TOUCH_START, this.onTouchBegan, this);
  },
  onTouchBegan: function onTouchBegan(event) {
    var scene = cc.director.getScene();
    var touchLoc = event.touch.getLocation();
    var bullet = cc.instantiate(this.bullet);
    bullet.position = touchLoc;
    bullet.active = true;
    scene.addChild(bullet);
  },
  onDisable: function onDisable() {
    cc.director.getCollisionManager().enabled = false;
    cc.director.getCollisionManager().enabledDebugDraw = false;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9jYXNlcy9jb2xsaWRlci9TaG9vdGVyL1Nob290ZXIuanMiXSwibmFtZXMiOlsiY2MiLCJDbGFzcyIsIkNvbXBvbmVudCIsInByb3BlcnRpZXMiLCJidWxsZXQiLCJ0eXBlIiwiTm9kZSIsIm9uTG9hZCIsImRpcmVjdG9yIiwiZ2V0Q29sbGlzaW9uTWFuYWdlciIsImVuYWJsZWQiLCJlbmFibGVkRGVidWdEcmF3IiwiY2FudmFzIiwiZmluZCIsIm9uIiwiRXZlbnRUeXBlIiwiVE9VQ0hfU1RBUlQiLCJvblRvdWNoQmVnYW4iLCJldmVudCIsInNjZW5lIiwiZ2V0U2NlbmUiLCJ0b3VjaExvYyIsInRvdWNoIiwiZ2V0TG9jYXRpb24iLCJpbnN0YW50aWF0ZSIsInBvc2l0aW9uIiwiYWN0aXZlIiwiYWRkQ2hpbGQiLCJvbkRpc2FibGUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUFBLEVBQUUsQ0FBQ0MsS0FBSCxDQUFTO0VBQ0wsV0FBU0QsRUFBRSxDQUFDRSxTQURQO0VBR0xDLFVBQVUsRUFBRTtJQUNSQyxNQUFNLEVBQUU7TUFDSixXQUFTLElBREw7TUFFSkMsSUFBSSxFQUFFTCxFQUFFLENBQUNNO0lBRkw7RUFEQSxDQUhQO0VBVUw7RUFDQUMsTUFBTSxFQUFFLGtCQUFZO0lBQ2hCUCxFQUFFLENBQUNRLFFBQUgsQ0FBWUMsbUJBQVosR0FBa0NDLE9BQWxDLEdBQTRDLElBQTVDO0lBQ0FWLEVBQUUsQ0FBQ1EsUUFBSCxDQUFZQyxtQkFBWixHQUFrQ0UsZ0JBQWxDLEdBQXFELElBQXJEO0lBQ0EsSUFBSUMsTUFBTSxHQUFHWixFQUFFLENBQUNhLElBQUgsQ0FBUSxRQUFSLENBQWI7SUFDQUQsTUFBTSxDQUFDRSxFQUFQLENBQVVkLEVBQUUsQ0FBQ00sSUFBSCxDQUFRUyxTQUFSLENBQWtCQyxXQUE1QixFQUF5QyxLQUFLQyxZQUE5QyxFQUE0RCxJQUE1RDtFQUNILENBaEJJO0VBa0JMQSxZQUFZLEVBQUUsc0JBQVVDLEtBQVYsRUFBaUI7SUFDM0IsSUFBSUMsS0FBSyxHQUFHbkIsRUFBRSxDQUFDUSxRQUFILENBQVlZLFFBQVosRUFBWjtJQUNBLElBQUlDLFFBQVEsR0FBR0gsS0FBSyxDQUFDSSxLQUFOLENBQVlDLFdBQVosRUFBZjtJQUNBLElBQUluQixNQUFNLEdBQUdKLEVBQUUsQ0FBQ3dCLFdBQUgsQ0FBZSxLQUFLcEIsTUFBcEIsQ0FBYjtJQUNBQSxNQUFNLENBQUNxQixRQUFQLEdBQWtCSixRQUFsQjtJQUNBakIsTUFBTSxDQUFDc0IsTUFBUCxHQUFnQixJQUFoQjtJQUNBUCxLQUFLLENBQUNRLFFBQU4sQ0FBZXZCLE1BQWY7RUFDSCxDQXpCSTtFQTJCTHdCLFNBQVMsRUFBRSxxQkFBWTtJQUNuQjVCLEVBQUUsQ0FBQ1EsUUFBSCxDQUFZQyxtQkFBWixHQUFrQ0MsT0FBbEMsR0FBNEMsS0FBNUM7SUFDQVYsRUFBRSxDQUFDUSxRQUFILENBQVlDLG1CQUFaLEdBQWtDRSxnQkFBbEMsR0FBcUQsS0FBckQ7RUFDSDtBQTlCSSxDQUFUIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJjYy5DbGFzcyh7XG4gICAgZXh0ZW5kczogY2MuQ29tcG9uZW50LFxuXG4gICAgcHJvcGVydGllczoge1xuICAgICAgICBidWxsZXQ6IHtcbiAgICAgICAgICAgIGRlZmF1bHQ6IG51bGwsXG4gICAgICAgICAgICB0eXBlOiBjYy5Ob2RlXG4gICAgICAgIH1cbiAgICB9LFxuXG4gICAgLy8gdXNlIHRoaXMgZm9yIGluaXRpYWxpemF0aW9uXG4gICAgb25Mb2FkOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGNjLmRpcmVjdG9yLmdldENvbGxpc2lvbk1hbmFnZXIoKS5lbmFibGVkID0gdHJ1ZTtcbiAgICAgICAgY2MuZGlyZWN0b3IuZ2V0Q29sbGlzaW9uTWFuYWdlcigpLmVuYWJsZWREZWJ1Z0RyYXcgPSB0cnVlO1xuICAgICAgICB2YXIgY2FudmFzID0gY2MuZmluZCgnQ2FudmFzJyk7XG4gICAgICAgIGNhbnZhcy5vbihjYy5Ob2RlLkV2ZW50VHlwZS5UT1VDSF9TVEFSVCwgdGhpcy5vblRvdWNoQmVnYW4sIHRoaXMpO1xuICAgIH0sXG5cbiAgICBvblRvdWNoQmVnYW46IGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgICB2YXIgc2NlbmUgPSBjYy5kaXJlY3Rvci5nZXRTY2VuZSgpO1xuICAgICAgICB2YXIgdG91Y2hMb2MgPSBldmVudC50b3VjaC5nZXRMb2NhdGlvbigpO1xuICAgICAgICB2YXIgYnVsbGV0ID0gY2MuaW5zdGFudGlhdGUodGhpcy5idWxsZXQpO1xuICAgICAgICBidWxsZXQucG9zaXRpb24gPSB0b3VjaExvYztcbiAgICAgICAgYnVsbGV0LmFjdGl2ZSA9IHRydWU7XG4gICAgICAgIHNjZW5lLmFkZENoaWxkKGJ1bGxldCk7XG4gICAgfSxcbiAgICBcbiAgICBvbkRpc2FibGU6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgY2MuZGlyZWN0b3IuZ2V0Q29sbGlzaW9uTWFuYWdlcigpLmVuYWJsZWQgPSBmYWxzZTtcbiAgICAgICAgY2MuZGlyZWN0b3IuZ2V0Q29sbGlzaW9uTWFuYWdlcigpLmVuYWJsZWREZWJ1Z0RyYXcgPSBmYWxzZTtcbiAgICB9XG59KTtcbiJdfQ==