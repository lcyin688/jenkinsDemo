
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/cases/spine/SpineSkin.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '9dc947ZsNtBXYqCPSgN0fAB', 'SpineSkin');
// cases/spine/SpineSkin.js

"use strict";

cc.Class({
  "extends": cc.Component,
  properties: {
    goblin: {
      type: sp.Skeleton,
      "default": null
    },
    goblingirl: {
      type: sp.Skeleton,
      "default": null
    }
  },
  start: function start() {
    this._skinIdx = 0;
    this.parts = ["left-arm", "left-hand", "left-shoulder"];
  },
  change: function change() {
    if (this._skinIdx == 0) {
      this._skinIdx = 1;

      for (var i = 0; i < this.parts.length; i++) {
        var goblin = this.goblin.findSlot(this.parts[i]);
        var goblingirl = this.goblingirl.findSlot(this.parts[i]);
        var attachment = goblingirl.getAttachment();
        goblin.setAttachment(attachment);
      }
    } else if (this._skinIdx == 1) {
      this._skinIdx = 0;
      this.goblin.setSkin('goblin');
      this.goblin.setSlotsToSetupPose();
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9jYXNlcy9zcGluZS9TcGluZVNraW4uanMiXSwibmFtZXMiOlsiY2MiLCJDbGFzcyIsIkNvbXBvbmVudCIsInByb3BlcnRpZXMiLCJnb2JsaW4iLCJ0eXBlIiwic3AiLCJTa2VsZXRvbiIsImdvYmxpbmdpcmwiLCJzdGFydCIsIl9za2luSWR4IiwicGFydHMiLCJjaGFuZ2UiLCJpIiwibGVuZ3RoIiwiZmluZFNsb3QiLCJhdHRhY2htZW50IiwiZ2V0QXR0YWNobWVudCIsInNldEF0dGFjaG1lbnQiLCJzZXRTa2luIiwic2V0U2xvdHNUb1NldHVwUG9zZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQUEsRUFBRSxDQUFDQyxLQUFILENBQVM7RUFDTCxXQUFTRCxFQUFFLENBQUNFLFNBRFA7RUFHTEMsVUFBVSxFQUFFO0lBQ1JDLE1BQU0sRUFBQztNQUNIQyxJQUFJLEVBQUNDLEVBQUUsQ0FBQ0MsUUFETDtNQUVILFdBQVE7SUFGTCxDQURDO0lBS1JDLFVBQVUsRUFBQztNQUNQSCxJQUFJLEVBQUNDLEVBQUUsQ0FBQ0MsUUFERDtNQUVQLFdBQVE7SUFGRDtFQUxILENBSFA7RUFjTEUsS0FkSyxtQkFjSTtJQUNMLEtBQUtDLFFBQUwsR0FBZ0IsQ0FBaEI7SUFDQSxLQUFLQyxLQUFMLEdBQWEsQ0FBQyxVQUFELEVBQWEsV0FBYixFQUEwQixlQUExQixDQUFiO0VBQ0gsQ0FqQkk7RUFtQkxDLE1BbkJLLG9CQW1CSztJQUNOLElBQUksS0FBS0YsUUFBTCxJQUFpQixDQUFyQixFQUF3QjtNQUNwQixLQUFLQSxRQUFMLEdBQWdCLENBQWhCOztNQUNBLEtBQUssSUFBSUcsQ0FBQyxHQUFHLENBQWIsRUFBZ0JBLENBQUMsR0FBRyxLQUFLRixLQUFMLENBQVdHLE1BQS9CLEVBQXVDRCxDQUFDLEVBQXhDLEVBQTRDO1FBQ3hDLElBQUlULE1BQU0sR0FBRyxLQUFLQSxNQUFMLENBQVlXLFFBQVosQ0FBcUIsS0FBS0osS0FBTCxDQUFXRSxDQUFYLENBQXJCLENBQWI7UUFDQSxJQUFJTCxVQUFVLEdBQUcsS0FBS0EsVUFBTCxDQUFnQk8sUUFBaEIsQ0FBeUIsS0FBS0osS0FBTCxDQUFXRSxDQUFYLENBQXpCLENBQWpCO1FBQ0EsSUFBSUcsVUFBVSxHQUFHUixVQUFVLENBQUNTLGFBQVgsRUFBakI7UUFDQWIsTUFBTSxDQUFDYyxhQUFQLENBQXFCRixVQUFyQjtNQUNIO0lBQ0osQ0FSRCxNQVFPLElBQUksS0FBS04sUUFBTCxJQUFpQixDQUFyQixFQUF3QjtNQUMzQixLQUFLQSxRQUFMLEdBQWdCLENBQWhCO01BQ0EsS0FBS04sTUFBTCxDQUFZZSxPQUFaLENBQW9CLFFBQXBCO01BQ0EsS0FBS2YsTUFBTCxDQUFZZ0IsbUJBQVo7SUFDSDtFQUNKO0FBakNJLENBQVQiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImNjLkNsYXNzKHtcbiAgICBleHRlbmRzOiBjYy5Db21wb25lbnQsXG5cbiAgICBwcm9wZXJ0aWVzOiB7XG4gICAgICAgIGdvYmxpbjp7XG4gICAgICAgICAgICB0eXBlOnNwLlNrZWxldG9uLFxuICAgICAgICAgICAgZGVmYXVsdDpudWxsLFxuICAgICAgICB9LFxuICAgICAgICBnb2JsaW5naXJsOntcbiAgICAgICAgICAgIHR5cGU6c3AuU2tlbGV0b24sXG4gICAgICAgICAgICBkZWZhdWx0Om51bGwsXG4gICAgICAgIH1cbiAgICB9LFxuXG4gICAgc3RhcnQgKCkge1xuICAgICAgICB0aGlzLl9za2luSWR4ID0gMDtcbiAgICAgICAgdGhpcy5wYXJ0cyA9IFtcImxlZnQtYXJtXCIsIFwibGVmdC1oYW5kXCIsIFwibGVmdC1zaG91bGRlclwiXTtcbiAgICB9LFxuXG4gICAgY2hhbmdlICgpIHtcbiAgICAgICAgaWYgKHRoaXMuX3NraW5JZHggPT0gMCkge1xuICAgICAgICAgICAgdGhpcy5fc2tpbklkeCA9IDE7XG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMucGFydHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICBsZXQgZ29ibGluID0gdGhpcy5nb2JsaW4uZmluZFNsb3QodGhpcy5wYXJ0c1tpXSk7XG4gICAgICAgICAgICAgICAgbGV0IGdvYmxpbmdpcmwgPSB0aGlzLmdvYmxpbmdpcmwuZmluZFNsb3QodGhpcy5wYXJ0c1tpXSk7XG4gICAgICAgICAgICAgICAgbGV0IGF0dGFjaG1lbnQgPSBnb2JsaW5naXJsLmdldEF0dGFjaG1lbnQoKTtcbiAgICAgICAgICAgICAgICBnb2JsaW4uc2V0QXR0YWNobWVudChhdHRhY2htZW50KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIGlmICh0aGlzLl9za2luSWR4ID09IDEpIHtcbiAgICAgICAgICAgIHRoaXMuX3NraW5JZHggPSAwO1xuICAgICAgICAgICAgdGhpcy5nb2JsaW4uc2V0U2tpbignZ29ibGluJyk7XG4gICAgICAgICAgICB0aGlzLmdvYmxpbi5zZXRTbG90c1RvU2V0dXBQb3NlKCk7XG4gICAgICAgIH1cbiAgICB9XG59KTtcbiJdfQ==