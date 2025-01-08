
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/cases/05_scripting/07_module/Monster.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'e31b0+PoDRJXIDHFxy60vEs', 'Monster');
// cases/05_scripting/07_module/Monster.js

"use strict";

cc.Class({
  "extends": cc.Component,
  properties: {
    nickname: {
      "default": null,
      type: cc.Label
    },
    lv: {
      "default": null,
      type: cc.Label
    },
    hp: {
      "default": null,
      type: cc.Label
    },
    atk: {
      "default": null,
      type: cc.Label
    },
    defense: {
      "default": null,
      type: cc.Label
    },
    image: {
      "default": null,
      type: cc.Sprite
    }
  },
  initInfo: function initInfo(info) {
    this.nickname.string = info.name;
    this.lv.string = info.lv;
    this.hp.string = info.hp;
    this.atk.string = info.atk;
    this.defense.string = info.defense;
    var image = this.image;
    cc.resources.load(info.imageUrl, cc.SpriteFrame, function (error, spriteFrame) {
      if (!error) {
        image.spriteFrame = spriteFrame.addRef();
      }
    });
  },
  onDestroy: function onDestroy() {
    this.image.spriteFrame.decRef();
    this.image.spriteFrame = null;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9jYXNlcy8wNV9zY3JpcHRpbmcvMDdfbW9kdWxlL01vbnN0ZXIuanMiXSwibmFtZXMiOlsiY2MiLCJDbGFzcyIsIkNvbXBvbmVudCIsInByb3BlcnRpZXMiLCJuaWNrbmFtZSIsInR5cGUiLCJMYWJlbCIsImx2IiwiaHAiLCJhdGsiLCJkZWZlbnNlIiwiaW1hZ2UiLCJTcHJpdGUiLCJpbml0SW5mbyIsImluZm8iLCJzdHJpbmciLCJuYW1lIiwicmVzb3VyY2VzIiwibG9hZCIsImltYWdlVXJsIiwiU3ByaXRlRnJhbWUiLCJlcnJvciIsInNwcml0ZUZyYW1lIiwiYWRkUmVmIiwib25EZXN0cm95IiwiZGVjUmVmIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBQSxFQUFFLENBQUNDLEtBQUgsQ0FBUztFQUNMLFdBQVNELEVBQUUsQ0FBQ0UsU0FEUDtFQUdMQyxVQUFVLEVBQUU7SUFDUkMsUUFBUSxFQUFFO01BQ04sV0FBUyxJQURIO01BRU5DLElBQUksRUFBRUwsRUFBRSxDQUFDTTtJQUZILENBREY7SUFLUkMsRUFBRSxFQUFFO01BQ0EsV0FBUyxJQURUO01BRUFGLElBQUksRUFBRUwsRUFBRSxDQUFDTTtJQUZULENBTEk7SUFTUkUsRUFBRSxFQUFFO01BQ0EsV0FBUyxJQURUO01BRUFILElBQUksRUFBRUwsRUFBRSxDQUFDTTtJQUZULENBVEk7SUFhUkcsR0FBRyxFQUFFO01BQ0QsV0FBUyxJQURSO01BRURKLElBQUksRUFBRUwsRUFBRSxDQUFDTTtJQUZSLENBYkc7SUFpQlJJLE9BQU8sRUFBRTtNQUNMLFdBQVMsSUFESjtNQUVMTCxJQUFJLEVBQUVMLEVBQUUsQ0FBQ007SUFGSixDQWpCRDtJQXFCUkssS0FBSyxFQUFFO01BQ0gsV0FBUyxJQUROO01BRUhOLElBQUksRUFBRUwsRUFBRSxDQUFDWTtJQUZOO0VBckJDLENBSFA7RUE4QkxDLFFBQVEsRUFBRSxrQkFBVUMsSUFBVixFQUFnQjtJQUN0QixLQUFLVixRQUFMLENBQWNXLE1BQWQsR0FBdUJELElBQUksQ0FBQ0UsSUFBNUI7SUFDQSxLQUFLVCxFQUFMLENBQVFRLE1BQVIsR0FBaUJELElBQUksQ0FBQ1AsRUFBdEI7SUFDQSxLQUFLQyxFQUFMLENBQVFPLE1BQVIsR0FBaUJELElBQUksQ0FBQ04sRUFBdEI7SUFDQSxLQUFLQyxHQUFMLENBQVNNLE1BQVQsR0FBa0JELElBQUksQ0FBQ0wsR0FBdkI7SUFDQSxLQUFLQyxPQUFMLENBQWFLLE1BQWIsR0FBc0JELElBQUksQ0FBQ0osT0FBM0I7SUFFQSxJQUFJQyxLQUFLLEdBQUcsS0FBS0EsS0FBakI7SUFDQVgsRUFBRSxDQUFDaUIsU0FBSCxDQUFhQyxJQUFiLENBQWtCSixJQUFJLENBQUNLLFFBQXZCLEVBQWlDbkIsRUFBRSxDQUFDb0IsV0FBcEMsRUFBaUQsVUFBVUMsS0FBVixFQUFpQkMsV0FBakIsRUFBOEI7TUFDM0UsSUFBSSxDQUFDRCxLQUFMLEVBQVk7UUFDUlYsS0FBSyxDQUFDVyxXQUFOLEdBQW9CQSxXQUFXLENBQUNDLE1BQVosRUFBcEI7TUFDSDtJQUNKLENBSkQ7RUFLSCxDQTNDSTtFQTZDTEMsU0E3Q0ssdUJBNkNRO0lBQ1QsS0FBS2IsS0FBTCxDQUFXVyxXQUFYLENBQXVCRyxNQUF2QjtJQUNBLEtBQUtkLEtBQUwsQ0FBV1csV0FBWCxHQUF5QixJQUF6QjtFQUNILENBaERJLENBaURMO0VBQ0E7RUFFQTs7QUFwREssQ0FBVCIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiY2MuQ2xhc3Moe1xuICAgIGV4dGVuZHM6IGNjLkNvbXBvbmVudCxcblxuICAgIHByb3BlcnRpZXM6IHtcbiAgICAgICAgbmlja25hbWU6IHtcbiAgICAgICAgICAgIGRlZmF1bHQ6IG51bGwsXG4gICAgICAgICAgICB0eXBlOiBjYy5MYWJlbFxuICAgICAgICB9LFxuICAgICAgICBsdjoge1xuICAgICAgICAgICAgZGVmYXVsdDogbnVsbCxcbiAgICAgICAgICAgIHR5cGU6IGNjLkxhYmVsXG4gICAgICAgIH0sXG4gICAgICAgIGhwOiB7XG4gICAgICAgICAgICBkZWZhdWx0OiBudWxsLFxuICAgICAgICAgICAgdHlwZTogY2MuTGFiZWxcbiAgICAgICAgfSxcbiAgICAgICAgYXRrOiB7XG4gICAgICAgICAgICBkZWZhdWx0OiBudWxsLFxuICAgICAgICAgICAgdHlwZTogY2MuTGFiZWxcbiAgICAgICAgfSxcbiAgICAgICAgZGVmZW5zZToge1xuICAgICAgICAgICAgZGVmYXVsdDogbnVsbCxcbiAgICAgICAgICAgIHR5cGU6IGNjLkxhYmVsXG4gICAgICAgIH0sXG4gICAgICAgIGltYWdlOiB7XG4gICAgICAgICAgICBkZWZhdWx0OiBudWxsLFxuICAgICAgICAgICAgdHlwZTogY2MuU3ByaXRlXG4gICAgICAgIH1cbiAgICB9LFxuXG4gICAgaW5pdEluZm86IGZ1bmN0aW9uIChpbmZvKSB7XG4gICAgICAgIHRoaXMubmlja25hbWUuc3RyaW5nID0gaW5mby5uYW1lO1xuICAgICAgICB0aGlzLmx2LnN0cmluZyA9IGluZm8ubHY7XG4gICAgICAgIHRoaXMuaHAuc3RyaW5nID0gaW5mby5ocDtcbiAgICAgICAgdGhpcy5hdGsuc3RyaW5nID0gaW5mby5hdGs7XG4gICAgICAgIHRoaXMuZGVmZW5zZS5zdHJpbmcgPSBpbmZvLmRlZmVuc2U7XG5cbiAgICAgICAgdmFyIGltYWdlID0gdGhpcy5pbWFnZTtcbiAgICAgICAgY2MucmVzb3VyY2VzLmxvYWQoaW5mby5pbWFnZVVybCwgY2MuU3ByaXRlRnJhbWUsIGZ1bmN0aW9uIChlcnJvciwgc3ByaXRlRnJhbWUpIHtcbiAgICAgICAgICAgIGlmICghZXJyb3IpIHtcbiAgICAgICAgICAgICAgICBpbWFnZS5zcHJpdGVGcmFtZSA9IHNwcml0ZUZyYW1lLmFkZFJlZigpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9LFxuXG4gICAgb25EZXN0cm95ICgpIHtcbiAgICAgICAgdGhpcy5pbWFnZS5zcHJpdGVGcmFtZS5kZWNSZWYoKTtcbiAgICAgICAgdGhpcy5pbWFnZS5zcHJpdGVGcmFtZSA9IG51bGw7XG4gICAgfVxuICAgIC8vIGNhbGxlZCBldmVyeSBmcmFtZSwgdW5jb21tZW50IHRoaXMgZnVuY3Rpb24gdG8gYWN0aXZhdGUgdXBkYXRlIGNhbGxiYWNrXG4gICAgLy8gdXBkYXRlOiBmdW5jdGlvbiAoZHQpIHtcblxuICAgIC8vIH0sXG59KTtcbiJdfQ==