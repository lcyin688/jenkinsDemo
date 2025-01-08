
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/cases/03_gameplay/03_animation/AnimationCallback.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '3d311umYuNAM61hHscTxwkq', 'AnimationCallback');
// cases/03_gameplay/03_animation/AnimationCallback.js

"use strict";

cc.Class({
  "extends": cc.Component,
  properties: {
    playLabel: {
      "default": null,
      type: cc.Label
    },
    pauseLabel: {
      "default": null,
      type: cc.Label
    },
    stateLabel: {
      "default": null,
      type: cc.Label
    },
    animation: {
      "default": null,
      type: cc.Animation
    }
  },
  onEnable: function onEnable() {
    var animation = this.animation;
    animation.on('play', this.onPlay, this);
    animation.on('stop', this.onStop, this);
    animation.on('lastframe', this.onLastFrame, this);
    animation.on('finished', this.onFinished, this);
    animation.on('pause', this.onPause, this);
    animation.on('resume', this.onResume, this);
  },
  onDisable: function onDisable() {
    var animation = this.animation;
    animation.off('play', this.onPlay, this);
    animation.off('stop', this.onStop, this);
    animation.off('lastframe', this.onLastFrame, this);
    animation.off('finished', this.onFinished, this);
    animation.off('pause', this.onPause, this);
    animation.off('resume', this.onResume, this);
  },
  onPlayButtonClicked: function onPlayButtonClicked() {
    if (this.playLabel.string === 'play') {
      this.playLabel.string = 'stop';
      this.animation.play('linear');
    } else {
      this.playLabel.string = 'play';
      this.animation.stop('linear');
    }
  },
  onPauseButtonClicked: function onPauseButtonClicked() {
    if (this.pauseLabel.string === 'pause') {
      this.pauseLabel.string = 'resume';
      this.animation.pause('linear');
    } else {
      this.pauseLabel.string = 'pause';
      this.animation.resume('linear');
    }
  },
  onPlay: function onPlay() {
    cc.log('onPlay');
    this.stateLabel.string = 'onPlay';
  },
  onStop: function onStop() {
    cc.log('onStop');
    this.stateLabel.string = 'onStop';
    this.playLabel.string = 'play';
  },
  onLastFrame: function onLastFrame() {
    cc.log('onLastFrame');
    this.stateLabel.string = 'onLastFrame';
  },
  onFinished: function onFinished() {
    cc.log('onFinished');
    this.stateLabel.string = 'onFinished';
  },
  onPause: function onPause() {
    cc.log('onPause');
    this.stateLabel.string = 'onPause';
  },
  onResume: function onResume() {
    cc.log('onResume');
    this.stateLabel.string = 'onResume';
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9jYXNlcy8wM19nYW1lcGxheS8wM19hbmltYXRpb24vQW5pbWF0aW9uQ2FsbGJhY2suanMiXSwibmFtZXMiOlsiY2MiLCJDbGFzcyIsIkNvbXBvbmVudCIsInByb3BlcnRpZXMiLCJwbGF5TGFiZWwiLCJ0eXBlIiwiTGFiZWwiLCJwYXVzZUxhYmVsIiwic3RhdGVMYWJlbCIsImFuaW1hdGlvbiIsIkFuaW1hdGlvbiIsIm9uRW5hYmxlIiwib24iLCJvblBsYXkiLCJvblN0b3AiLCJvbkxhc3RGcmFtZSIsIm9uRmluaXNoZWQiLCJvblBhdXNlIiwib25SZXN1bWUiLCJvbkRpc2FibGUiLCJvZmYiLCJvblBsYXlCdXR0b25DbGlja2VkIiwic3RyaW5nIiwicGxheSIsInN0b3AiLCJvblBhdXNlQnV0dG9uQ2xpY2tlZCIsInBhdXNlIiwicmVzdW1lIiwibG9nIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBQSxFQUFFLENBQUNDLEtBQUgsQ0FBUztFQUNMLFdBQVNELEVBQUUsQ0FBQ0UsU0FEUDtFQUdMQyxVQUFVLEVBQUU7SUFDUkMsU0FBUyxFQUFFO01BQ1AsV0FBUyxJQURGO01BRVBDLElBQUksRUFBRUwsRUFBRSxDQUFDTTtJQUZGLENBREg7SUFNUkMsVUFBVSxFQUFFO01BQ1IsV0FBUyxJQUREO01BRVJGLElBQUksRUFBRUwsRUFBRSxDQUFDTTtJQUZELENBTko7SUFXUkUsVUFBVSxFQUFFO01BQ1IsV0FBUyxJQUREO01BRVJILElBQUksRUFBRUwsRUFBRSxDQUFDTTtJQUZELENBWEo7SUFnQlJHLFNBQVMsRUFBRTtNQUNQLFdBQVMsSUFERjtNQUVQSixJQUFJLEVBQUVMLEVBQUUsQ0FBQ1U7SUFGRjtFQWhCSCxDQUhQO0VBeUJMQyxRQUFRLEVBQUUsb0JBQVk7SUFDbEIsSUFBSUYsU0FBUyxHQUFHLEtBQUtBLFNBQXJCO0lBRUFBLFNBQVMsQ0FBQ0csRUFBVixDQUFhLE1BQWIsRUFBMEIsS0FBS0MsTUFBL0IsRUFBOEMsSUFB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TyxFQUFFLG1CQUFZO0lBQ2pCakIsRUFBRSxDQUFDNEIsR0FBSCxDQUFPLFNBQVA7SUFDQSxLQUFLcEIsVUFBTCxDQUFnQmMsTUFBaEIsR0FBeUIsU0FBekI7RUFDSCxDQTdGSTtFQStGTEosUUFBUSxFQUFFLG9CQUFZO0lBQ2xCbEIsRUFBRSxDQUFDNEIsR0FBSCxDQUFPLFVBQVA7SUFDQSxLQUFLcEIsVUFBTCxDQUFnQmMsTUFBaEIsR0FBeUIsVUFBekI7RUFDSDtBQWxHSSxDQUFUIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJjYy5DbGFzcyh7XG4gICAgZXh0ZW5kczogY2MuQ29tcG9uZW50LFxuXG4gICAgcHJvcGVydGllczoge1xuICAgICAgICBwbGF5TGFiZWw6IHtcbiAgICAgICAgICAgIGRlZmF1bHQ6IG51bGwsXG4gICAgICAgICAgICB0eXBlOiBjYy5MYWJlbFxuICAgICAgICB9LFxuXG4gICAgICAgIHBhdXNlTGFiZWw6IHtcbiAgICAgICAgICAgIGRlZmF1bHQ6IG51bGwsXG4gICAgICAgICAgICB0eXBlOiBjYy5MYWJlbFxuICAgICAgICB9LFxuXG4gICAgICAgIHN0YXRlTGFiZWw6IHtcbiAgICAgICAgICAgIGRlZmF1bHQ6IG51bGwsXG4gICAgICAgICAgICB0eXBlOiBjYy5MYWJlbFxuICAgICAgICB9LFxuXG4gICAgICAgIGFuaW1hdGlvbjoge1xuICAgICAgICAgICAgZGVmYXVsdDogbnVsbCxcbiAgICAgICAgICAgIHR5cGU6IGNjLkFuaW1hdGlvblxuICAgICAgICB9XG4gICAgfSxcblxuICAgIG9uRW5hYmxlOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBhbmltYXRpb24gPSB0aGlzLmFuaW1hdGlvbjtcblxuICAgICAgICBhbmltYXRpb24ub24oJ3BsYXknLCAgICAgIHRoaXMub25QbGF5LCAgICAgICAgdGhpcyk7XG4gICAgICAgIGFuaW1hdGlvbi5vbignc3RvcCcsICAgICAgdGhpcy5vblN0b3AsICAgICAgICB0aGlzKTtcbiAgICAgICAgYW5pbWF0aW9uLm9uKCdsYXN0ZnJhbWUnLCB0aGlzLm9uTGFzdEZyYW1lLCAgIHRoaXMpO1xuICAgICAgICBhbmltYXRpb24ub24oJ2ZpbmlzaGVkJywgIHRoaXMub25GaW5pc2hlZCwgICAgdGhpcyk7XG4gICAgICAgIGFuaW1hdGlvbi5vbigncGF1c2UnLCAgICAgdGhpcy5vblBhdXNlLCAgICAgICB0aGlzKTtcbiAgICAgICAgYW5pbWF0aW9uLm9uKCdyZXN1bWUnLCAgICB0aGlzLm9uUmVzdW1lLCAgICAgIHRoaXMpO1xuICAgIH0sXG5cbiAgICBvbkRpc2FibGU6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIGFuaW1hdGlvbiA9IHRoaXMuYW5pbWF0aW9uO1xuXG4gICAgICAgIGFuaW1hdGlvbi5vZmYoJ3BsYXknLCAgICAgIHRoaXMub25QbGF5LCAgICAgICAgdGhpcyk7XG4gICAgICAgIGFuaW1hdGlvbi5vZmYoJ3N0b3AnLCAgICAgIHRoaXMub25TdG9wLCAgICAgICAgdGhpcyk7XG4gICAgICAgIGFuaW1hdGlvbi5vZmYoJ2xhc3RmcmFtZScsIHRoaXMub25MYXN0RnJhbWUsICAgdGhpcyk7XG4gICAgICAgIGFuaW1hdGlvbi5vZmYoJ2ZpbmlzaGVkJywgIHRoaXMub25GaW5pc2hlZCwgICAgdGhpcyk7XG4gICAgICAgIGFuaW1hdGlvbi5vZmYoJ3BhdXNlJywgICAgIHRoaXMub25QYXVzZSwgICAgICAgdGhpcyk7XG4gICAgICAgIGFuaW1hdGlvbi5vZmYoJ3Jlc3VtZScsICAgIHRoaXMub25SZXN1bWUsICAgICAgdGhpcyk7XG4gICAgfSxcblxuICAgIG9uUGxheUJ1dHRvbkNsaWNrZWQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaWYgKHRoaXMucGxheUxhYmVsLnN0cmluZyA9PT0gJ3BsYXknKSB7XG4gICAgICAgICAgICB0aGlzLnBsYXlMYWJlbC5zdHJpbmcgPSAnc3RvcCc7XG4gICAgICAgICAgICB0aGlzLmFuaW1hdGlvbi5wbGF5KCdsaW5lYXInKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMucGxheUxhYmVsLnN0cmluZyA9ICdwbGF5JztcbiAgICAgICAgICAgIHRoaXMuYW5pbWF0aW9uLnN0b3AoJ2xpbmVhcicpO1xuICAgICAgICB9XG4gICAgfSxcblxuICAgIG9uUGF1c2VCdXR0b25DbGlja2VkOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGlmICh0aGlzLnBhdXNlTGFiZWwuc3RyaW5nID09PSAncGF1c2UnKSB7XG4gICAgICAgICAgICB0aGlzLnBhdXNlTGFiZWwuc3RyaW5nID0gJ3Jlc3VtZSc7XG4gICAgICAgICAgICB0aGlzLmFuaW1hdGlvbi5wYXVzZSgnbGluZWFyJyk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB0aGlzLnBhdXNlTGFiZWwuc3RyaW5nID0gJ3BhdXNlJztcbiAgICAgICAgICAgIHRoaXMuYW5pbWF0aW9uLnJlc3VtZSgnbGluZWFyJyk7XG4gICAgICAgIH1cbiAgICB9LFxuXG4gICAgb25QbGF5OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGNjLmxvZygnb25QbGF5Jyk7XG4gICAgICAgIHRoaXMuc3RhdGVMYWJlbC5zdHJpbmcgPSAnb25QbGF5JztcbiAgICB9LFxuXG4gICAgb25TdG9wOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGNjLmxvZygnb25TdG9wJyk7XG4gICAgICAgIHRoaXMuc3RhdGVMYWJlbC5zdHJpbmcgPSAnb25TdG9wJztcbiAgICAgICAgdGhpcy5wbGF5TGFiZWwuc3RyaW5nID0gJ3BsYXknO1xuICAgIH0sXG5cbiAgICBvbkxhc3RGcmFtZTogZnVuY3Rpb24gKCkge1xuICAgICAgICBjYy5sb2coJ29uTGFzdEZyYW1lJyk7XG4gICAgICAgIHRoaXMuc3RhdGVMYWJlbC5zdHJpbmcgPSAnb25MYXN0RnJhbWUnO1xuICAgIH0sXG5cbiAgICBvbkZpbmlzaGVkOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGNjLmxvZygnb25GaW5pc2hlZCcpO1xuICAgICAgICB0aGlzLnN0YXRlTGFiZWwuc3RyaW5nID0gJ29uRmluaXNoZWQnO1xuICAgIH0sXG5cbiAgICBvblBhdXNlOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGNjLmxvZygnb25QYXVzZScpO1xuICAgICAgICB0aGlzLnN0YXRlTGFiZWwuc3RyaW5nID0gJ29uUGF1c2UnO1xuICAgIH0sXG5cbiAgICBvblJlc3VtZTogZnVuY3Rpb24gKCkge1xuICAgICAgICBjYy5sb2coJ29uUmVzdW1lJyk7XG4gICAgICAgIHRoaXMuc3RhdGVMYWJlbC5zdHJpbmcgPSAnb25SZXN1bWUnO1xuICAgIH1cbn0pO1xuIl19