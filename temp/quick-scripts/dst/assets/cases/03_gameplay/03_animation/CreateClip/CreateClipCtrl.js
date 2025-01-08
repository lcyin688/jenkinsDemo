
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/cases/03_gameplay/03_animation/CreateClip/CreateClipCtrl.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '0c450SopmNKmbcQu50ror3a', 'CreateClipCtrl');
// cases/03_gameplay/03_animation/CreateClip/CreateClipCtrl.js

"use strict";

cc.Class({
  "extends": cc.Component,
  properties: {
    atlas: null
  },
  // use this for initialization
  onLoad: function onLoad() {
    var _this = this;

    var animation = this.getComponent(cc.Animation);
    cc.resources.load("test_assets/atlas", cc.SpriteAtlas, function (err, atlas) {
      _this.atlas = atlas.addRef();
      var spriteFrames = atlas.getSpriteFrames();
      var clip = cc.AnimationClip.createWithSpriteFrames(spriteFrames, 10);
      clip.name = 'run';
      clip.wrapMode = cc.WrapMode.Loop;
      animation.addClip(clip);
      animation.play('run');
    });
  },
  // called every frame, uncomment this function to activate update callback
  // update: function (dt) {
  // },
  onDestroy: function onDestroy() {
    this.atlas.decRef();
    this.atlas = null;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9jYXNlcy8wM19nYW1lcGxheS8wM19hbmltYXRpb24vQ3JlYXRlQ2xpcC9DcmVhdGVDbGlwQ3RybC5qcyJdLCJuYW1lcyI6WyJjYyIsIkNsYXNzIiwiQ29tcG9uZW50IiwicHJvcGVydGllcyIsImF0bGFzIiwib25Mb2FkIiwiYW5pbWF0aW9uIiwiZ2V0Q29tcG9uZW50IiwiQW5pbWF0aW9uIiwicmVzb3VyY2VzIiwibG9hZCIsIlNwcml0ZUF0bGFzIiwiZXJyIiwiYWRkUmVmIiwic3ByaXRlRnJhbWVzIiwiZ2V0U3ByaXRlRnJhbWVzIiwiY2xpcCIsIkFuaW1hdGlvbkNsaXAiLCJjcmVhdGVXaXRoU3ByaXRlRnJhbWVzIiwibmFtZSIsIndyYXBNb2RlIiwiV3JhcE1vZGUiLCJMb29wIiwiYWRkQ2xpcCIsInBsYXkiLCJvbkRlc3Ryb3kiLCJkZWNSZWYiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUFBLEVBQUUsQ0FBQ0MsS0FBSCxDQUFTO0VBQ0wsV0FBU0QsRUFBRSxDQUFDRSxTQURQO0VBR0xDLFVBQVUsRUFBRTtJQUNSQyxLQUFLLEVBQUU7RUFEQyxDQUhQO0VBT0w7RUFDQUMsTUFBTSxFQUFFLGtCQUFZO0lBQUE7O0lBQ2hCLElBQUlDLFNBQVMsR0FBRyxLQUFLQyxZQUFMLENBQWtCUCxFQUFFLENBQUNRLFNBQXJCLENBQWhCO0lBRUFSLEVBQUUsQ0FBQ1MsU0FBSCxDQUFhQyxJQUFiLENBQWtCLG1CQUFsQixFQUF1Q1YsRUFBRSxDQUFDVyxXQUExQyxFQUF1RCxVQUFDQyxHQUFELEVBQU1SLEtBQU4sRUFBZ0I7TUFDbkUsS0FBSSxDQUFDQSxLQUFMLEdBQWFBLEtBQUssQ0FBQ1MsTUFBTixFQUFiO01BQ0EsSUFBSUMsWUFBWSxHQUFHVixLQUFLLENBQUNXLGVBQU4sRUFBbkI7TUFFQSxJQUFJQyxJQUFJLEdBQUdoQixFQUFFLENBQUNpQixhQUFILENBQWlCQyxzQkFBakIsQ0FBd0NKLFlBQXhDLEVBQXNELEVBQXRELENBQVg7TUFDQUUsSUFBSSxDQUFDRyxJQUFMLEdBQVksS0FBWjtNQUNBSCxJQUFJLENBQUNJLFFBQUwsR0FBZ0JwQixFQUFFLENBQUNxQixRQUFILENBQVlDLElBQTVCO01BRUFoQixTQUFTLENBQUNpQixPQUFWLENBQWtCUCxJQUFsQjtNQUNBVixTQUFTLENBQUNrQixJQUFWLENBQWUsS0FBZjtJQUNILENBVkQ7RUFXSCxDQXRCSTtFQXdCTDtFQUNBO0VBRUE7RUFFQUMsU0FBUyxFQUFFLHFCQUFZO0lBQ25CLEtBQUtyQixLQUFMLENBQVdzQixNQUFYO0lBQ0EsS0FBS3RCLEtBQUwsR0FBYSxJQUFiO0VBQ0g7QUFoQ0ksQ0FBVCIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiY2MuQ2xhc3Moe1xuICAgIGV4dGVuZHM6IGNjLkNvbXBvbmVudCxcblxuICAgIHByb3BlcnRpZXM6IHtcbiAgICAgICAgYXRsYXM6IG51bGwsXG4gICAgfSxcblxuICAgIC8vIHVzZSB0aGlzIGZvciBpbml0aWFsaXphdGlvblxuICAgIG9uTG9hZDogZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgYW5pbWF0aW9uID0gdGhpcy5nZXRDb21wb25lbnQoY2MuQW5pbWF0aW9uKTtcbiAgICAgICAgXG4gICAgICAgIGNjLnJlc291cmNlcy5sb2FkKFwidGVzdF9hc3NldHMvYXRsYXNcIiwgY2MuU3ByaXRlQXRsYXMsIChlcnIsIGF0bGFzKSA9PiB7XG4gICAgICAgICAgICB0aGlzLmF0bGFzID0gYXRsYXMuYWRkUmVmKCk7XG4gICAgICAgICAgICB2YXIgc3ByaXRlRnJhbWVzID0gYXRsYXMuZ2V0U3ByaXRlRnJhbWVzKCk7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIHZhciBjbGlwID0gY2MuQW5pbWF0aW9uQ2xpcC5jcmVhdGVXaXRoU3ByaXRlRnJhbWVzKHNwcml0ZUZyYW1lcywgMTApO1xuICAgICAgICAgICAgY2xpcC5uYW1lID0gJ3J1bic7XG4gICAgICAgICAgICBjbGlwLndyYXBNb2RlID0gY2MuV3JhcE1vZGUuTG9vcDtcblxuICAgICAgICAgICAgYW5pbWF0aW9uLmFkZENsaXAoY2xpcCk7XG4gICAgICAgICAgICBhbmltYXRpb24ucGxheSgncnVuJyk7XG4gICAgICAgIH0pO1xuICAgIH0sXG5cbiAgICAvLyBjYWxsZWQgZXZlcnkgZnJhbWUsIHVuY29tbWVudCB0aGlzIGZ1bmN0aW9uIHRvIGFjdGl2YXRlIHVwZGF0ZSBjYWxsYmFja1xuICAgIC8vIHVwZGF0ZTogZnVuY3Rpb24gKGR0KSB7XG5cbiAgICAvLyB9LFxuXG4gICAgb25EZXN0cm95OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHRoaXMuYXRsYXMuZGVjUmVmKCk7XG4gICAgICAgIHRoaXMuYXRsYXMgPSBudWxsO1xuICAgIH1cbn0pO1xuIl19