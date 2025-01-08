
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/cases/3d/3d-support-info.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'aa6e94UfYREzbFN94D3Gupk', '3d-support-info');
// cases/3d/3d-support-info.js

"use strict";

cc.Class({
  "extends": cc.Component,
  properties: {
    displayNode: cc.Node
  },
  // LIFE-CYCLE CALLBACKS:
  // onLoad () {},
  start: function start() {
    if (cc.sys.browserType === cc.sys.BROWSER_TYPE_IE) {
      // currently ie render color is not right
      this.displayNode.active = false;
      this.node.active = true;
    } else {
      this.displayNode.active = true;
      this.node.active = false;
    }
  } // update (dt) {},

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9jYXNlcy8zZC8zZC1zdXBwb3J0LWluZm8uanMiXSwibmFtZXMiOlsiY2MiLCJDbGFzcyIsIkNvbXBvbmVudCIsInByb3BlcnRpZXMiLCJkaXNwbGF5Tm9kZSIsIk5vZGUiLCJzdGFydCIsInN5cyIsImJyb3dzZXJUeXBlIiwiQlJPV1NFUl9UWVBFX0lFIiwiYWN0aXZlIiwibm9kZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQUEsRUFBRSxDQUFDQyxLQUFILENBQVM7RUFDTCxXQUFTRCxFQUFFLENBQUNFLFNBRFA7RUFHTEMsVUFBVSxFQUFFO0lBQ1JDLFdBQVcsRUFBRUosRUFBRSxDQUFDSztFQURSLENBSFA7RUFPTDtFQUVBO0VBRUFDLEtBWEssbUJBV0k7SUFDTCxJQUFJTixFQUFFLENBQUNPLEdBQUgsQ0FBT0MsV0FBUCxLQUF1QlIsRUFBRSxDQUFDTyxHQUFILENBQU9FLGVBQWxDLEVBQW1EO01BQy9DO01BQ0EsS0FBS0wsV0FBTCxDQUFpQk0sTUFBakIsR0FBMEIsS0FBMUI7TUFDQSxLQUFLQyxJQUFMLENBQVVELE1BQVYsR0FBbUIsSUFBbkI7SUFDSCxDQUpELE1BS0s7TUFDRCxLQUFLTixXQUFMLENBQWlCTSxNQUFqQixHQUEwQixJQUExQjtNQUNBLEtBQUtDLElBQUwsQ0FBVUQsTUFBVixHQUFtQixLQUFuQjtJQUNIO0VBQ0osQ0FyQkksQ0F1Qkw7O0FBdkJLLENBQVQiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImNjLkNsYXNzKHtcbiAgICBleHRlbmRzOiBjYy5Db21wb25lbnQsXG5cbiAgICBwcm9wZXJ0aWVzOiB7XG4gICAgICAgIGRpc3BsYXlOb2RlOiBjYy5Ob2RlXG4gICAgfSxcblxuICAgIC8vIExJRkUtQ1lDTEUgQ0FMTEJBQ0tTOlxuXG4gICAgLy8gb25Mb2FkICgpIHt9LFxuXG4gICAgc3RhcnQgKCkge1xuICAgICAgICBpZiAoY2Muc3lzLmJyb3dzZXJUeXBlID09PSBjYy5zeXMuQlJPV1NFUl9UWVBFX0lFKSB7XG4gICAgICAgICAgICAvLyBjdXJyZW50bHkgaWUgcmVuZGVyIGNvbG9yIGlzIG5vdCByaWdodFxuICAgICAgICAgICAgdGhpcy5kaXNwbGF5Tm9kZS5hY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgICAgIHRoaXMubm9kZS5hY3RpdmUgPSB0cnVlO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5kaXNwbGF5Tm9kZS5hY3RpdmUgPSB0cnVlO1xuICAgICAgICAgICAgdGhpcy5ub2RlLmFjdGl2ZSA9IGZhbHNlO1xuICAgICAgICB9XG4gICAgfSxcblxuICAgIC8vIHVwZGF0ZSAoZHQpIHt9LFxufSk7XG4iXX0=