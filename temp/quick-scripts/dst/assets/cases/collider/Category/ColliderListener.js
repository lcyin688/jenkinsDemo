
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/cases/collider/Category/ColliderListener.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '9d60fXxtXFNeI79PM6EXYuZ', 'ColliderListener');
// cases/collider/Category/ColliderListener.js

"use strict";

cc.Class({
  "extends": cc.Component,
  // use this for initialization
  onLoad: function onLoad() {
    cc.director.getCollisionManager().enabled = true;
    cc.director.getCollisionManager().enabledDebugDraw = true; // cc.director.getCollisionManager().enabledDrawBoundingBox = true;

    this.touchingNumber = 0;
  },
  onCollisionEnter: function onCollisionEnter(other) {
    this.node.color = cc.Color.RED;
    this.touchingNumber++;
  },
  onCollisionStay: function onCollisionStay(other) {// console.log('on collision stay');
  },
  onCollisionExit: function onCollisionExit() {
    this.touchingNumber--;

    if (this.touchingNumber === 0) {
      this.node.color = cc.Color.WHITE;
    }
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9jYXNlcy9jb2xsaWRlci9DYXRlZ29yeS9Db2xsaWRlckxpc3RlbmVyLmpzIl0sIm5hbWVzIjpbImNjIiwiQ2xhc3MiLCJDb21wb25lbnQiLCJvbkxvYWQiLCJkaXJlY3RvciIsImdldENvbGxpc2lvbk1hbmFnZXIiLCJlbmFibGVkIiwiZW5hYmxlZERlYnVnRHJhdyIsInRvdWNoaW5nTnVtYmVyIiwib25Db2xsaXNpb25FbnRlciIsIm90aGVyIiwibm9kZSIsImNvbG9yIiwiQ29sb3IiLCJSRUQiLCJvbkNvbGxpc2lvblN0YXkiLCJvbkNvbGxpc2lvbkV4aXQiLCJXSElURSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQUEsRUFBRSxDQUFDQyxLQUFILENBQVM7RUFDTCxXQUFTRCxFQUFFLENBQUNFLFNBRFA7RUFHTDtFQUNBQyxNQUFNLEVBQUUsa0JBQVk7SUFDaEJILEVBQUUsQ0FBQ0ksUUFBSCxDQUFZQyxtQkFBWixHQUFrQ0MsT0FBbEMsR0FBNEMsSUFBNUM7SUFDQU4sRUFBRSxDQUFDSSxRQUFILENBQVlDLG1CQUFaLEdBQWtDRSxnQkFBbEMsR0FBcUQsSUFBckQsQ0FGZ0IsQ0FHaEI7O0lBRUEsS0FBS0MsY0FBTCxHQUFzQixDQUF0QjtFQUNILENBVkk7RUFZTEMsZ0JBQWdCLEVBQUUsMEJBQVVDLEtBQVYsRUFBaUI7SUFDL0IsS0FBS0MsSUFBTCxDQUFVQyxLQUFWLEdBQWtCWixFQUFFLENBQUNhLEtBQUgsQ0FBU0MsR0FBM0I7SUFDQSxLQUFLTixjQUFMO0VBQ0gsQ0FmSTtFQWlCTE8sZUFBZSxFQUFFLHlCQUFVTCxLQUFWLEVBQWlCLENBQzlCO0VBQ0gsQ0FuQkk7RUFxQkxNLGVBQWUsRUFBRSwyQkFBWTtJQUN6QixLQUFLUixjQUFMOztJQUNBLElBQUksS0FBS0EsY0FBTCxLQUF3QixDQUE1QixFQUErQjtNQUMzQixLQUFLRyxJQUFMLENBQVVDLEtBQVYsR0FBa0JaLEVBQUUsQ0FBQ2EsS0FBSCxDQUFTSSxLQUEzQjtJQUNIO0VBQ0osQ0ExQkksQ0E0Qkw7RUFDQTtFQUVBOztBQS9CSyxDQUFUIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJjYy5DbGFzcyh7XG4gICAgZXh0ZW5kczogY2MuQ29tcG9uZW50LFxuXG4gICAgLy8gdXNlIHRoaXMgZm9yIGluaXRpYWxpemF0aW9uXG4gICAgb25Mb2FkOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGNjLmRpcmVjdG9yLmdldENvbGxpc2lvbk1hbmFnZXIoKS5lbmFibGVkID0gdHJ1ZTtcbiAgICAgICAgY2MuZGlyZWN0b3IuZ2V0Q29sbGlzaW9uTWFuYWdlcigpLmVuYWJsZWREZWJ1Z0RyYXcgPSB0cnVlO1xuICAgICAgICAvLyBjYy5kaXJlY3Rvci5nZXRDb2xsaXNpb25NYW5hZ2VyKCkuZW5hYmxlZERyYXdCb3VuZGluZ0JveCA9IHRydWU7XG4gICAgICAgIFxuICAgICAgICB0aGlzLnRvdWNoaW5nTnVtYmVyID0gMDtcbiAgICB9LFxuICAgIFxuICAgIG9uQ29sbGlzaW9uRW50ZXI6IGZ1bmN0aW9uIChvdGhlcikge1xuICAgICAgICB0aGlzLm5vZGUuY29sb3IgPSBjYy5Db2xvci5SRUQ7XG4gICAgICAgIHRoaXMudG91Y2hpbmdOdW1iZXIgKys7XG4gICAgfSxcbiAgICBcbiAgICBvbkNvbGxpc2lvblN0YXk6IGZ1bmN0aW9uIChvdGhlcikge1xuICAgICAgICAvLyBjb25zb2xlLmxvZygnb24gY29sbGlzaW9uIHN0YXknKTtcbiAgICB9LFxuICAgIFxuICAgIG9uQ29sbGlzaW9uRXhpdDogZnVuY3Rpb24gKCkge1xuICAgICAgICB0aGlzLnRvdWNoaW5nTnVtYmVyIC0tO1xuICAgICAgICBpZiAodGhpcy50b3VjaGluZ051bWJlciA9PT0gMCkge1xuICAgICAgICAgICAgdGhpcy5ub2RlLmNvbG9yID0gY2MuQ29sb3IuV0hJVEU7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBjYWxsZWQgZXZlcnkgZnJhbWUsIHVuY29tbWVudCB0aGlzIGZ1bmN0aW9uIHRvIGFjdGl2YXRlIHVwZGF0ZSBjYWxsYmFja1xuICAgIC8vIHVwZGF0ZTogZnVuY3Rpb24gKGR0KSB7XG5cbiAgICAvLyB9LFxufSk7XG4iXX0=