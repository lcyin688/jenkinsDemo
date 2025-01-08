
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/cases/03_gameplay/02_actions/SimpleAction/SimpleAction.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'b6067a1+J5FW4G30nmVLU/d', 'SimpleAction');
// cases/03_gameplay/02_actions/SimpleAction/SimpleAction.js

"use strict";

cc.Class({
  "extends": cc.Component,
  properties: {
    jumper: {
      "default": null,
      type: cc.Node
    },
    colorNode: {
      "default": null,
      type: cc.Node
    }
  },
  // use this for initialization
  onLoad: function onLoad() {
    this.squashAction = cc.scaleTo(0.2, 1, 0.6);
    this.stretchAction = cc.scaleTo(0.2, 1, 1.2);
    this.scaleBackAction = cc.scaleTo(0.1, 1, 1);
    this.moveUpAction = cc.moveBy(1, cc.v2(0, 200)).easing(cc.easeCubicActionOut());
    this.moveDownAction = cc.moveBy(1, cc.v2(0, -200)).easing(cc.easeCubicActionIn());
    var seq = cc.sequence(this.squashAction, this.stretchAction, this.moveUpAction, this.scaleBackAction, this.moveDownAction, this.squashAction, this.scaleBackAction, cc.callFunc(this.callback.bind(this))); // this is a temp api which will be combined to cc.Node

    this.jumper.runAction(seq);
    this.colorNode.runAction(cc.sequence(cc.tintTo(2, 255, 0, 0), cc.delayTime(0.5), cc.fadeOut(1), cc.delayTime(0.5), cc.fadeIn(1), cc.delayTime(0.5), cc.tintTo(2, 255, 255, 255)).repeat(2));
  },
  callback: function callback() {
    this.node.removeFromParent();
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9jYXNlcy8wM19nYW1lcGxheS8wMl9hY3Rpb25zL1NpbXBsZUFjdGlvbi9TaW1wbGVBY3Rpb24uanMiXSwibmFtZXMiOlsiY2MiLCJDbGFzcyIsIkNvbXBvbmVudCIsInByb3BlcnRpZXMiLCJqdW1wZXIiLCJ0eXBlIiwiTm9kZSIsImNvbG9yTm9kZSIsIm9uTG9hZCIsInNxdWFzaEFjdGlvbiIsInNjYWxlVG8iLCJzdHJldGNoQWN0aW9uIiwic2NhbGVCYWNrQWN0aW9uIiwibW92ZVVwQWN0aW9uIiwibW92ZUJ5IiwidjIiLCJlYXNpbmciLCJlYXNlQ3ViaWNBY3Rpb25PdXQiLCJtb3ZlRG93bkFjdGlvbiIsImVhc2VDdWJpY0FjdGlvbkluIiwic2VxIiwic2VxdWVuY2UiLCJjYWxsRnVuYyIsImNhbGxiYWNrIiwiYmluZCIsInJ1bkFjdGlvbiIsInRpbnRUbyIsImRlbGF5VGltZSIsImZhZGVPdXQiLCJmYWRlSW4iLCJyZXBlYXQiLCJub2RlIiwicmVtb3ZlRnJvbVBhcmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQUEsRUFBRSxDQUFDQyxLQUFILENBQVM7RUFDTCxXQUFTRCxFQUFFLENBQUNFLFNBRFA7RUFHTEMsVUFBVSxFQUFFO0lBQ1JDLE1BQU0sRUFBRTtNQUNKLFdBQVMsSUFETDtNQUVKQyxJQUFJLEVBQUVMLEVBQUUsQ0FBQ007SUFGTCxDQURBO0lBS1JDLFNBQVMsRUFBRTtNQUNQLFdBQVMsSUFERjtNQUVQRixJQUFJLEVBQUVMLEVBQUUsQ0FBQ007SUFGRjtFQUxILENBSFA7RUFjTDtFQUNBRSxNQUFNLEVBQUUsa0JBQVk7SUFDaEIsS0FBS0MsWUFBTCxHQUFvQlQsRUFBRSxDQUFDVSxPQUFILENBQVcsR0FBWCxFQUFnQixDQUFoQixFQUFtQixHQUFuQixDQUFwQjtJQUNBLEtBQUtDLGFBQUwsR0FBcUJYLEVBQUUsQ0FBQ1UsT0FBSCxDQUFXLEdBQVgsRUFBZ0IsQ0FBaEIsRUFBbUIsR0FBbkIsQ0FBckI7SUFDQSxLQUFLRSxlQUFMLEdBQXVCWixFQUFFLENBQUNVLE9BQUgsQ0FBVyxHQUFYLEVBQWdCLENBQWhCLEVBQW1CLENBQW5CLENBQXZCO0lBQ0EsS0FBS0csWUFBTCxHQUFvQmIsRUFBRSxDQUFDYyxNQUFILENBQVUsQ0FBVixFQUFhZCxFQUFFLENBQUNlLEVBQUgsQ0FBTSxDQUFOLEVBQVMsR0FBVCxDQUFiLEVBQTRCQyxNQUE1QixDQUFtQ2hCLEVBQUUsQ0FBQ2lCLGtCQUFILEVBQW5DLENBQXBCO0lBQ0EsS0FBS0MsY0FBTCxHQUFzQmxCLEVBQUUsQ0FBQ2MsTUFBSCxDQUFVLENBQVYsRUFBYWQsRUFBRSxDQUFDZSxFQUFILENBQU0sQ0FBTixFQUFTLENBQUMsR0FBVixDQUFiLEVBQTZCQyxNQUE3QixDQUFvQ2hCLEVBQUUsQ0FBQ21CLGlCQUFILEVBQXBDLENBQXRCO0lBQ0EsSUFBSUMsR0FBRyxHQUFHcEIsRUFBRSxDQUFDcUIsUUFBSCxDQUFZLEtBQUtaLFlBQWpCLEVBQStCLEtBQUtFLGFBQXBDLEVBQ04sS0FBS0UsWUFEQyxFQUNhLEtBQUtELGVBRGxCLEVBQ21DLEtBQUtNLGNBRHhDLEVBQ3dELEtBQUtULFlBRDdELEVBQzJFLEtBQUtHLGVBRGhGLEVBRU5aLEVBQUUsQ0FBQ3NCLFFBQUgsQ0FBWSxLQUFLQyxRQUFMLENBQWNDLElBQWQsQ0FBbUIsSUFBbkIsQ0FBWixDQUZNLENBQVYsQ0FOZ0IsQ0FTaEI7O0lBQ0EsS0FBS3BCLE1BQUwsQ0FBWXFCLFNBQVosQ0FBc0JMLEdBQXRCO0lBRUEsS0FBS2IsU0FBTCxDQUFla0IsU0FBZixDQUF5QnpCLEVBQUUsQ0FBQ3FCLFFBQUgsQ0FDckJyQixFQUFFLENBQUMwQixNQUFILENBQVUsQ0FBVixFQUFhLEdBQWIsRUFBa0IsQ0FBbEIsRUFBcUIsQ0FBckIsQ0FEcUIsRUFFckIxQixFQUFFLENBQUMyQixTQUFILENBQWEsR0FBYixDQUZxQixFQUdyQjNCLEVBQUUsQ0FBQzRCLE9BQUgsQ0FBVyxDQUFYLENBSHFCLEVBSXJCNUIsRUFBRSxDQUFDMkIsU0FBSCxDQUFhLEdBQWIsQ0FKcUIsRUFLckIzQixFQUFFLENBQUM2QixNQUFILENBQVUsQ0FBVixDQUxxQixFQU1yQjdCLEVBQUUsQ0FBQzJCLFNBQUgsQ0FBYSxHQUFiLENBTnFCLEVBT3JCM0IsRUFBRSxDQUFDMEIsTUFBSCxDQUFVLENBQVYsRUFBYSxHQUFiLEVBQWtCLEdBQWxCLEVBQXVCLEdBQXZCLENBUHFCLEVBUXZCSSxNQVJ1QixDQVFoQixDQVJnQixDQUF6QjtFQVNILENBcENJO0VBc0NMUCxRQUFRLEVBQUUsb0JBQVk7SUFDbEIsS0FBS1EsSUFBTCxDQUFVQyxnQkFBVjtFQUNIO0FBeENJLENBQVQiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImNjLkNsYXNzKHtcbiAgICBleHRlbmRzOiBjYy5Db21wb25lbnQsXG5cbiAgICBwcm9wZXJ0aWVzOiB7XG4gICAgICAgIGp1bXBlcjoge1xuICAgICAgICAgICAgZGVmYXVsdDogbnVsbCxcbiAgICAgICAgICAgIHR5cGU6IGNjLk5vZGVcbiAgICAgICAgfSxcbiAgICAgICAgY29sb3JOb2RlOiB7XG4gICAgICAgICAgICBkZWZhdWx0OiBudWxsLFxuICAgICAgICAgICAgdHlwZTogY2MuTm9kZVxuICAgICAgICB9XG4gICAgfSxcblxuICAgIC8vIHVzZSB0aGlzIGZvciBpbml0aWFsaXphdGlvblxuICAgIG9uTG9hZDogZnVuY3Rpb24gKCkge1xuICAgICAgICB0aGlzLnNxdWFzaEFjdGlvbiA9IGNjLnNjYWxlVG8oMC4yLCAxLCAwLjYpO1xuICAgICAgICB0aGlzLnN0cmV0Y2hBY3Rpb24gPSBjYy5zY2FsZVRvKDAuMiwgMSwgMS4yKTtcbiAgICAgICAgdGhpcy5zY2FsZUJhY2tBY3Rpb24gPSBjYy5zY2FsZVRvKDAuMSwgMSwgMSk7XG4gICAgICAgIHRoaXMubW92ZVVwQWN0aW9uID0gY2MubW92ZUJ5KDEsIGNjLnYyKDAsIDIwMCkpLmVhc2luZyhjYy5lYXNlQ3ViaWNBY3Rpb25PdXQoKSk7XG4gICAgICAgIHRoaXMubW92ZURvd25BY3Rpb24gPSBjYy5tb3ZlQnkoMSwgY2MudjIoMCwgLTIwMCkpLmVhc2luZyhjYy5lYXNlQ3ViaWNBY3Rpb25JbigpKTtcbiAgICAgICAgdmFyIHNlcSA9IGNjLnNlcXVlbmNlKHRoaXMuc3F1YXNoQWN0aW9uLCB0aGlzLnN0cmV0Y2hBY3Rpb24sIFxuICAgICAgICAgICAgdGhpcy5tb3ZlVXBBY3Rpb24sIHRoaXMuc2NhbGVCYWNrQWN0aW9uLCB0aGlzLm1vdmVEb3duQWN0aW9uLCB0aGlzLnNxdWFzaEFjdGlvbiwgdGhpcy5zY2FsZUJhY2tBY3Rpb24sXG4gICAgICAgICAgICBjYy5jYWxsRnVuYyh0aGlzLmNhbGxiYWNrLmJpbmQodGhpcykpKTtcbiAgICAgICAgLy8gdGhpcyBpcyBhIHRlbXAgYXBpIHdoaWNoIHdpbGwgYmUgY29tYmluZWQgdG8gY2MuTm9kZVxuICAgICAgICB0aGlzLmp1bXBlci5ydW5BY3Rpb24oc2VxKTtcbiAgICAgICAgXG4gICAgICAgIHRoaXMuY29sb3JOb2RlLnJ1bkFjdGlvbihjYy5zZXF1ZW5jZShcbiAgICAgICAgICAgIGNjLnRpbnRUbygyLCAyNTUsIDAsIDApLFxuICAgICAgICAgICAgY2MuZGVsYXlUaW1lKDAuNSksXG4gICAgICAgICAgICBjYy5mYWRlT3V0KDEpLFxuICAgICAgICAgICAgY2MuZGVsYXlUaW1lKDAuNSksXG4gICAgICAgICAgICBjYy5mYWRlSW4oMSksXG4gICAgICAgICAgICBjYy5kZWxheVRpbWUoMC41KSxcbiAgICAgICAgICAgIGNjLnRpbnRUbygyLCAyNTUsIDI1NSwgMjU1KVxuICAgICAgICApLnJlcGVhdCgyKSk7XG4gICAgfSxcbiAgICBcbiAgICBjYWxsYmFjazogZnVuY3Rpb24gKCkge1xuICAgICAgICB0aGlzLm5vZGUucmVtb3ZlRnJvbVBhcmVudCgpO1xuICAgIH1cbn0pO1xuIl19