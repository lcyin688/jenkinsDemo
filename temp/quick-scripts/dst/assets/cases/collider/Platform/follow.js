
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/cases/collider/Platform/follow.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'd96400vNFFPIpzg48kPuXVc', 'follow');
// cases/collider/Platform/follow.js

"use strict";

cc.Class({
  "extends": cc.Component,
  properties: {
    target: {
      "default": null,
      type: cc.Node
    }
  },
  // use this for initialization
  onLoad: function onLoad() {
    // 由于需要键盘操作所以只能在 PC 才可用
    this.node.active = !cc.sys.isMobile;

    if (!this.target) {
      return;
    }

    var follow = cc.follow(this.target, cc.rect(0, 0, 2000, 2000));
    this.node.runAction(follow);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9jYXNlcy9jb2xsaWRlci9QbGF0Zm9ybS9mb2xsb3cuanMiXSwibmFtZXMiOlsiY2MiLCJDbGFzcyIsIkNvbXBvbmVudCIsInByb3BlcnRpZXMiLCJ0YXJnZXQiLCJ0eXBlIiwiTm9kZSIsIm9uTG9hZCIsIm5vZGUiLCJhY3RpdmUiLCJzeXMiLCJpc01vYmlsZSIsImZvbGxvdyIsInJlY3QiLCJydW5BY3Rpb24iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUFBLEVBQUUsQ0FBQ0MsS0FBSCxDQUFTO0VBQ0wsV0FBU0QsRUFBRSxDQUFDRSxTQURQO0VBR0xDLFVBQVUsRUFBRTtJQUNSQyxNQUFNLEVBQUU7TUFDSixXQUFTLElBREw7TUFFSkMsSUFBSSxFQUFFTCxFQUFFLENBQUNNO0lBRkw7RUFEQSxDQUhQO0VBVUw7RUFDQUMsTUFBTSxFQUFFLGtCQUFZO0lBQ2hCO0lBQ0EsS0FBS0MsSUFBTCxDQUFVQyxNQUFWLEdBQW1CLENBQUNULEVBQUUsQ0FBQ1UsR0FBSCxDQUFPQyxRQUEzQjs7SUFFQSxJQUFJLENBQUMsS0FBS1AsTUFBVixFQUFrQjtNQUNkO0lBQ0g7O0lBQ0QsSUFBSVEsTUFBTSxHQUFHWixFQUFFLENBQUNZLE1BQUgsQ0FBVSxLQUFLUixNQUFmLEVBQXVCSixFQUFFLENBQUNhLElBQUgsQ0FBUSxDQUFSLEVBQVUsQ0FBVixFQUFhLElBQWIsRUFBa0IsSUFBbEIsQ0FBdkIsQ0FBYjtJQUNBLEtBQUtMLElBQUwsQ0FBVU0sU0FBVixDQUFvQkYsTUFBcEI7RUFDSDtBQXBCSSxDQUFUIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJjYy5DbGFzcyh7XG4gICAgZXh0ZW5kczogY2MuQ29tcG9uZW50LFxuXG4gICAgcHJvcGVydGllczoge1xuICAgICAgICB0YXJnZXQ6IHtcbiAgICAgICAgICAgIGRlZmF1bHQ6IG51bGwsXG4gICAgICAgICAgICB0eXBlOiBjYy5Ob2RlXG4gICAgICAgIH1cbiAgICB9LFxuXG4gICAgLy8gdXNlIHRoaXMgZm9yIGluaXRpYWxpemF0aW9uXG4gICAgb25Mb2FkOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIC8vIOeUseS6jumcgOimgemUruebmOaTjeS9nOaJgOS7peWPquiDveWcqCBQQyDmiY3lj6/nlKhcbiAgICAgICAgdGhpcy5ub2RlLmFjdGl2ZSA9ICFjYy5zeXMuaXNNb2JpbGU7XG5cbiAgICAgICAgaWYgKCF0aGlzLnRhcmdldCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHZhciBmb2xsb3cgPSBjYy5mb2xsb3codGhpcy50YXJnZXQsIGNjLnJlY3QoMCwwLCAyMDAwLDIwMDApKTtcbiAgICAgICAgdGhpcy5ub2RlLnJ1bkFjdGlvbihmb2xsb3cpO1xuICAgIH1cbn0pO1xuIl19