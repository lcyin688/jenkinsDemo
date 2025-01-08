
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/cases/03_gameplay/02_actions/Rotation/RotationCtrl.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '325ba8DYO5K6Yfgi5UmP4+L', 'RotationCtrl');
// cases/03_gameplay/02_actions/Rotation/RotationCtrl.js

"use strict";

cc.Class({
  "extends": cc.Component,
  properties: {
    rotationToNode: cc.Node,
    rotateByNode: cc.Node
  },
  onToClick: function onToClick() {
    var rotationTo = cc.rotateTo(1, 90);
    this.rotationToNode.runAction(rotationTo);
  },
  onReverseToClick: function onReverseToClick() {
    var rotationTo = cc.rotateTo(1, 180);
    this.rotationToNode.runAction(rotationTo);
  },
  onToRecoverClick: function onToRecoverClick() {
    this.rotationToNode.angle = 0;
  },
  onByClick: function onByClick() {
    var rotateBy = cc.rotateBy(1, 90);
    this.rotateByNode.runAction(rotateBy);
  },
  onReverseByClick: function onReverseByClick() {
    var rotateBy = cc.rotateBy(1, 180);
    this.rotateByNode.runAction(rotateBy);
  },
  onByRecoverClick: function onByRecoverClick() {
    this.rotateByNode.angle = 0;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9jYXNlcy8wM19nYW1lcGxheS8wMl9hY3Rpb25zL1JvdGF0aW9uL1JvdGF0aW9uQ3RybC5qcyJdLCJuYW1lcyI6WyJjYyIsIkNsYXNzIiwiQ29tcG9uZW50IiwicHJvcGVydGllcyIsInJvdGF0aW9uVG9Ob2RlIiwiTm9kZSIsInJvdGF0ZUJ5Tm9kZSIsIm9uVG9DbGljayIsInJvdGF0aW9uVG8iLCJyb3RhdGVUbyIsInJ1bkFjdGlvbiIsIm9uUmV2ZXJzZVRvQ2xpY2siLCJvblRvUmVjb3ZlckNsaWNrIiwiYW5nbGUiLCJvbkJ5Q2xpY2siLCJyb3RhdGVCeSIsIm9uUmV2ZXJzZUJ5Q2xpY2siLCJvbkJ5UmVjb3ZlckNsaWNrIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBQSxFQUFFLENBQUNDLEtBQUgsQ0FBUztFQUNMLFdBQVNELEVBQUUsQ0FBQ0UsU0FEUDtFQUdMQyxVQUFVLEVBQUU7SUFDUkMsY0FBYyxFQUFFSixFQUFFLENBQUNLLElBRFg7SUFFUkMsWUFBWSxFQUFFTixFQUFFLENBQUNLO0VBRlQsQ0FIUDtFQVFMRSxTQUFTLEVBQUUscUJBQVk7SUFDbkIsSUFBSUMsVUFBVSxHQUFHUixFQUFFLENBQUNTLFFBQUgsQ0FBWSxDQUFaLEVBQWUsRUFBZixDQUFqQjtJQUNBLEtBQUtMLGNBQUwsQ0FBb0JNLFNBQXBCLENBQThCRixVQUE5QjtFQUNILENBWEk7RUFhTEcsZ0JBQWdCLEVBQUUsNEJBQVk7SUFDMUIsSUFBSUgsVUFBVSxHQUFHUixFQUFFLENBQUNTLFFBQUgsQ0FBWSxDQUFaLEVBQWUsR0FBZixDQUFqQjtJQUNBLEtBQUtMLGNBQUwsQ0FBb0JNLFNBQXBCLENBQThCRixVQUE5QjtFQUNILENBaEJJO0VBa0JMSSxnQkFBZ0IsRUFBRSw0QkFBWTtJQUMxQixLQUFLUixjQUFMLENBQW9CUyxLQUFwQixHQUE0QixDQUE1QjtFQUNILENBcEJJO0VBc0JMQyxTQUFTLEVBQUUscUJBQVk7SUFDbkIsSUFBSUMsUUFBUSxHQUFHZixFQUFFLENBQUNlLFFBQUgsQ0FBWSxDQUFaLEVBQWUsRUFBZixDQUFmO0lBQ0EsS0FBS1QsWUFBTCxDQUFrQkksU0FBbEIsQ0FBNEJLLFFBQTVCO0VBQ0gsQ0F6Qkk7RUEyQkxDLGdCQUFnQixFQUFFLDRCQUFZO0lBQzFCLElBQUlELFFBQVEsR0FBR2YsRUFBRSxDQUFDZSxRQUFILENBQVksQ0FBWixFQUFlLEdBQWYsQ0FBZjtJQUNBLEtBQUtULFlBQUwsQ0FBa0JJLFNBQWxCLENBQTRCSyxRQUE1QjtFQUNILENBOUJJO0VBZ0NMRSxnQkFBZ0IsRUFBRSw0QkFBWTtJQUMxQixLQUFLWCxZQUFMLENBQWtCTyxLQUFsQixHQUEwQixDQUExQjtFQUNIO0FBbENJLENBQVQiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImNjLkNsYXNzKHtcbiAgICBleHRlbmRzOiBjYy5Db21wb25lbnQsXG5cbiAgICBwcm9wZXJ0aWVzOiB7XG4gICAgICAgIHJvdGF0aW9uVG9Ob2RlOiBjYy5Ob2RlLFxuICAgICAgICByb3RhdGVCeU5vZGU6IGNjLk5vZGVcbiAgICB9LFxuXG4gICAgb25Ub0NsaWNrOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciByb3RhdGlvblRvID0gY2Mucm90YXRlVG8oMSwgOTApO1xuICAgICAgICB0aGlzLnJvdGF0aW9uVG9Ob2RlLnJ1bkFjdGlvbihyb3RhdGlvblRvKTtcbiAgICB9LFxuXG4gICAgb25SZXZlcnNlVG9DbGljazogZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgcm90YXRpb25UbyA9IGNjLnJvdGF0ZVRvKDEsIDE4MCk7XG4gICAgICAgIHRoaXMucm90YXRpb25Ub05vZGUucnVuQWN0aW9uKHJvdGF0aW9uVG8pO1xuICAgIH0sXG5cbiAgICBvblRvUmVjb3ZlckNsaWNrOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHRoaXMucm90YXRpb25Ub05vZGUuYW5nbGUgPSAwO1xuICAgIH0sXG5cbiAgICBvbkJ5Q2xpY2s6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIHJvdGF0ZUJ5ID0gY2Mucm90YXRlQnkoMSwgOTApO1xuICAgICAgICB0aGlzLnJvdGF0ZUJ5Tm9kZS5ydW5BY3Rpb24ocm90YXRlQnkpO1xuICAgIH0sXG5cbiAgICBvblJldmVyc2VCeUNsaWNrOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciByb3RhdGVCeSA9IGNjLnJvdGF0ZUJ5KDEsIDE4MCk7XG4gICAgICAgIHRoaXMucm90YXRlQnlOb2RlLnJ1bkFjdGlvbihyb3RhdGVCeSk7XG4gICAgfSxcblxuICAgIG9uQnlSZWNvdmVyQ2xpY2s6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdGhpcy5yb3RhdGVCeU5vZGUuYW5nbGUgPSAwO1xuICAgIH1cblxufSk7XG4iXX0=