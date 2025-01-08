
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/cases/03_gameplay/03_animation/MoveAnimation/MoveAnimationCtrl.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '1dc95dq3mVI658br0l2Zbi0', 'MoveAnimationCtrl');
// cases/03_gameplay/03_animation/MoveAnimation/MoveAnimationCtrl.js

"use strict";

cc.Class({
  "extends": cc.Component,
  properties: {
    target: {
      "default": null,
      type: cc.Animation
    },
    nodes: {
      "default": [],
      type: cc.Node
    }
  },
  onLoad: function onLoad() {
    this.onRegisteredEvent();
  },
  onRegisteredEvent: function onRegisteredEvent() {
    for (var i = 0; i < this.nodes.length; ++i) {
      this.nodes[i].on(cc.Node.EventType.TOUCH_END, this.onPlayAnimation.bind(this));
    }
  },
  onPlayAnimation: function onPlayAnimation(event) {
    this.target.stop();

    switch (event.target._name) {
      case "Linear":
        this.target.play("linear");
        break;

      case "CaseIn_Expo":
        this.target.play("caseIn-expo");
        break;

      case "CaseOut_Expo":
        this.target.play("caseOut-expo");
        break;

      case "CaseInOut_Expo":
        this.target.play("caseInOut-expo");
        break;

      case "Back_Forward":
        this.target.play("back-forward");
        break;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9jYXNlcy8wM19nYW1lcGxheS8wM19hbmltYXRpb24vTW92ZUFuaW1hdGlvbi9Nb3ZlQW5pbWF0aW9uQ3RybC5qcyJdLCJuYW1lcyI6WyJjYyIsIkNsYXNzIiwiQ29tcG9uZW50IiwicHJvcGVydGllcyIsInRhcmdldCIsInR5cGUiLCJBbmltYXRpb24iLCJub2RlcyIsIk5vZGUiLCJvbkxvYWQiLCJvblJlZ2lzdGVyZWRFdmVudCIsImkiLCJsZW5ndGgiLCJvbiIsIkV2ZW50VHlwZSIsIlRPVUNIX0VORCIsIm9uUGxheUFuaW1hdGlvbiIsImJpbmQiLCJldmVudCIsInN0b3AiLCJfbmFtZSIsInBsYXkiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUFBLEVBQUUsQ0FBQ0MsS0FBSCxDQUFTO0VBQ0wsV0FBU0QsRUFBRSxDQUFDRSxTQURQO0VBR0xDLFVBQVUsRUFBRTtJQUNSQyxNQUFNLEVBQUU7TUFDSixXQUFTLElBREw7TUFFSkMsSUFBSSxFQUFFTCxFQUFFLENBQUNNO0lBRkwsQ0FEQTtJQU1SQyxLQUFLLEVBQUU7TUFDSCxXQUFTLEVBRE47TUFFSEYsSUFBSSxFQUFFTCxFQUFFLENBQUNRO0lBRk47RUFOQyxDQUhQO0VBZUxDLE1BQU0sRUFBRSxrQkFBWTtJQUNoQixLQUFLQyxpQkFBTDtFQUNILENBakJJO0VBbUJMQSxpQkFBaUIsRUFBRSw2QkFBWTtJQUMzQixLQUFLLElBQUlDLENBQUMsR0FBRyxDQUFiLEVBQWdCQSxDQUFDLEdBQUcsS0FBS0osS0FBTCxDQUFXSyxNQUEvQixFQUF1QyxFQUFFRCxDQUF6QyxFQUE0QztNQUN4QyxLQUFLSixLQUFMLENBQVdJLENBQVgsRUFBY0UsRUFBZCxDQUFpQmIsRUFBRSxDQUFDUSxJQUFILENBQVFNLFNBQVIsQ0FBa0JDLFNBQW5DLEVBQThDLEtBQUtDLGVBQUwsQ0FBcUJDLElBQXJCLENBQTBCLElBQTFCLENBQTlDO0lBQ0g7RUFDSixDQXZCSTtFQXlCTEQsZUFBZSxFQUFFLHlCQUFVRSxLQUFWLEVBQWlCO0lBQzlCLEtBQUtkLE1BQUwsQ0FBWWUsSUFBWjs7SUFDQSxRQUFRRCxLQUFLLENBQUNkLE1BQU4sQ0FBYWdCLEtBQXJCO01BQ0ksS0FBSyxRQUFMO1FBQ0ksS0FBS2hCLE1BQUwsQ0FBWWlCLElBQVosQ0FBaUIsUUFBakI7UUFDQTs7TUFDSixLQUFLLGFBQUw7UUFDSSxLQUFLakIsTUFBTCxDQUFZaUIsSUFBWixDQUFpQixhQUFqQjtRQUNBOztNQUNKLEtBQUssY0FBTDtRQUNJLEtBQUtqQixNQUFMLENBQVlpQixJQUFaLENBQWlCLGNBQWpCO1FBQ0E7O01BQ0osS0FBSyxnQkFBTDtRQUNJLEtBQUtqQixNQUFMLENBQVlpQixJQUFaLENBQWlCLGdCQUFqQjtRQUNBOztNQUNKLEtBQUssY0FBTDtRQUNJLEtBQUtqQixNQUFMLENBQVlpQixJQUFaLENBQWlCLGNBQWpCO1FBQ0E7SUFmUjtFQWlCSDtBQTVDSSxDQUFUIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJjYy5DbGFzcyh7XG4gICAgZXh0ZW5kczogY2MuQ29tcG9uZW50LFxuXG4gICAgcHJvcGVydGllczoge1xuICAgICAgICB0YXJnZXQ6IHtcbiAgICAgICAgICAgIGRlZmF1bHQ6IG51bGwsXG4gICAgICAgICAgICB0eXBlOiBjYy5BbmltYXRpb25cbiAgICAgICAgfSxcblxuICAgICAgICBub2Rlczoge1xuICAgICAgICAgICAgZGVmYXVsdDogW10sXG4gICAgICAgICAgICB0eXBlOiBjYy5Ob2RlXG4gICAgICAgIH1cbiAgICB9LFxuXG4gICAgb25Mb2FkOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHRoaXMub25SZWdpc3RlcmVkRXZlbnQoKTtcbiAgICB9LFxuXG4gICAgb25SZWdpc3RlcmVkRXZlbnQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLm5vZGVzLmxlbmd0aDsgKytpKSB7XG4gICAgICAgICAgICB0aGlzLm5vZGVzW2ldLm9uKGNjLk5vZGUuRXZlbnRUeXBlLlRPVUNIX0VORCwgdGhpcy5vblBsYXlBbmltYXRpb24uYmluZCh0aGlzKSk7XG4gICAgICAgIH1cbiAgICB9LFxuXG4gICAgb25QbGF5QW5pbWF0aW9uOiBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgICAgdGhpcy50YXJnZXQuc3RvcCgpO1xuICAgICAgICBzd2l0Y2ggKGV2ZW50LnRhcmdldC5fbmFtZSkge1xuICAgICAgICAgICAgY2FzZSBcIkxpbmVhclwiOlxuICAgICAgICAgICAgICAgIHRoaXMudGFyZ2V0LnBsYXkoXCJsaW5lYXJcIik7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIFwiQ2FzZUluX0V4cG9cIjpcbiAgICAgICAgICAgICAgICB0aGlzLnRhcmdldC5wbGF5KFwiY2FzZUluLWV4cG9cIik7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIFwiQ2FzZU91dF9FeHBvXCI6XG4gICAgICAgICAgICAgICAgdGhpcy50YXJnZXQucGxheShcImNhc2VPdXQtZXhwb1wiKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgXCJDYXNlSW5PdXRfRXhwb1wiOlxuICAgICAgICAgICAgICAgIHRoaXMudGFyZ2V0LnBsYXkoXCJjYXNlSW5PdXQtZXhwb1wiKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgXCJCYWNrX0ZvcndhcmRcIjpcbiAgICAgICAgICAgICAgICB0aGlzLnRhcmdldC5wbGF5KFwiYmFjay1mb3J3YXJkXCIpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgfVxuXG59KTtcbiJdfQ==