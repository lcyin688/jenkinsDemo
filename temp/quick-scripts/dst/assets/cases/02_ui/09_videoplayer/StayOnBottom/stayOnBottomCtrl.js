
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/cases/02_ui/09_videoplayer/StayOnBottom/stayOnBottomCtrl.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'fd033SfPFpNVpqiToS/UUHg', 'stayOnBottomCtrl');
// cases/02_ui/09_videoplayer/StayOnBottom/stayOnBottomCtrl.js

"use strict";

// 开启 Canvas 背景支持 alpha 通道
cc.macro.ENABLE_TRANSPARENT_CANVAS = true;

function randomNum(min, max) {
  return Math.random() * (max - min + 1) + min;
}

var TIPS = ['这个是一个范例，该范例是让用户知道如何把 UI 渲染到 VideoPlayer 上', 'UI 渲染到 VideoPlayer 上只需三个步骤：1。创建代码开启 cc.macro.ENABLE_TRANSPARENT_CANVAS 2。设置摄像机的背景颜色的透明度为零 3。勾选 VideoPlayer 组件上的 stayOnBottom 属性 -- 就 OK 了', 'UI 居然可以显示在 VidePlayer 上面了，👍👍👍👍👍', '哇，可以做弹幕功能了... 💐💐💐💐💐', '哇，可以做约会游戏了... 💐💐💐💐💐', '注意：该功能只支持 web 平台', '注意：该功能的效果在各个浏览器的限制下不能保持效果一致', '我是打酱油的...', 'Cococs Creator 是最棒的，不接收反驳...', '前面的说的对...', '其实我也不知道要说什么，反正只是为了充数用而已'];
cc.Class({
  "extends": cc.Component,
  properties: {
    tempBarrage: cc.Prefab,
    videoPlayer: cc.VideoPlayer,
    barrageRoot: cc.Node,
    tips: cc.Node
  },
  start: function start() {
    this.__id = 0;
    this._animList = [];
    var node = cc.find('Canvas/Play');
    this.btnPlay = node.getComponent(cc.Button);
    this.btnPlay.interactable = true;
    node = cc.find('Canvas/Pause');
    this.btnPause = node.getComponent(cc.Button);
    this.btnPause.interactable = false;
    node = cc.find('Canvas/Stop');
    this.btnStop = node.getComponent(cc.Button);
    this.btnStop.interactable = false;
  },
  // 创建弹幕
  onCreateBarrage: function onCreateBarrage() {
    var _this = this;

    var node = cc.instantiate(this.tempBarrage);
    ++this.__id;
    node.___id = this.__id;
    node.y = randomNum(300, -120);
    node.parent = this.node;
    var r = randomNum(0, 255);
    var g = randomNum(0, 255);
    var b = randomNum(0, 255);
    node.color = cc.color(r, g, b);
    var label = node.getComponent(cc.Label);
    var idx = Math.floor(randomNum(0, TIPS.length - 1));
    label.string = TIPS[idx];
    var animComp = node.getComponent(cc.Animation);
    animComp.on('stop', function () {
      delete _this._animList[node.___id];
      node.destroy();
    });
    this._animList[this.__id] = animComp;
  },
  // 清空弹幕
  onClearBarrages: function onClearBarrages() {
    this._intervalID && clearInterval(this._intervalID);
    var keys = Object.keys(this._animList);

    for (var i = 0, len = keys.length; i < len; ++i) {
      var key = keys[i];
      var anim = this._animList[key];
      anim.node.destroy();
    }

    this._animList.length = 0;
  },
  // 开启弹幕
  onOpenBarrages: function onOpenBarrages() {
    var _this2 = this;

    this._intervalID = setInterval(function () {
      _this2.onCreateBarrage();
    }, 1000);
    this.onPlayAnim();
  },
  // 关闭弹幕
  onCloseBarrages: function onCloseBarrages() {
    this._intervalID && clearInterval(this._intervalID);
    this.onPauseAnim();
  },
  // 播放弹幕动画
  onPlayAnim: function onPlayAnim() {
    var keys = Object.keys(this._animList);

    for (var i = 0, len = keys.length; i < len; ++i) {
      var key = keys[i];
      var anim = this._animList[key];

      if (anim.getAnimationState('barrage-animClip').isPaused) {
        anim.resume();
      } else {
        anim.play();
      }
    }
  },
  // 暂停弹幕动画
  onPauseAnim: function onPauseAnim() {
    for (var key in this._animList) {
      var anim = this._animList[key];
      anim.pause();
    }
  },
  // 播放视频
  play: function play() {
    this.tips.active = false;
    this.btnPlay.interactable = false;
    this.btnPause.interactable = true;
    this.btnStop.interactable = true;
    this.videoPlayer.play();
    this.onOpenBarrages();
  },
  // 暂停视频
  pause: function pause() {
    this.btnPlay.interactable = true;
    this.btnPause.interactable = false;
    this.btnStop.interactable = true;
    this.videoPlayer.pause();
    this.onCloseBarrages();
  },
  // 停止视频
  stop: function stop() {
    this.tips.active = true;
    this.btnPlay.interactable = true;
    this.btnPause.interactable = false;
    this.btnStop.interactable = false;
    this.videoPlayer.stop();
    this.onClearBarrages();
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9jYXNlcy8wMl91aS8wOV92aWRlb3BsYXllci9TdGF5T25Cb3R0b20vc3RheU9uQm90dG9tQ3RybC5qcyJdLCJuYW1lcyI6WyJjYyIsIm1hY3JvIiwiRU5BQkxFX1RSQU5TUEFSRU5UX0NBTlZBUyIsInJhbmRvbU51bSIsIm1pbiIsIm1heCIsIk1hdGgiLCJyYW5kb20iLCJUSVBTIiwiQ2xhc3MiLCJDb21wb25lbnQiLCJwcm9wZXJ0aWVzIiwidGVtcEJhcnJhZ2UiLCJQcmVmYWIiLCJ2aWRlb1BsYXllciIsIlZpZGVvUGxheWVyIiwiYmFycmFnZVJvb3QiLCJOb2RlIiwidGlwcyIsInN0YXJ0IiwiX19pZCIsIl9hbmltTGlzdCIsIm5vZGUiLCJmaW5kIiwiYnRuUGxheSIsImdldENvbXBvbmVudCIsIkJ1dHRvbiIsImludGVyYWN0YWJsZSIsImJ0blBhdXNlIiwiYnRuU3RvcCIsIm9uQ3JlYXRlQmFycmFnZSIsImluc3RhbnRpYXRlIiwiX19faWQiLCJ5IiwicGFyZW50IiwiciIsImciLCJiIiwiY29sb3IiLCJsYWJlbCIsIkxhYmVsIiwiaWR4IiwiZmxvb3IiLCJsZW5ndGgiLCJzdHJpbmciLCJhbmltQ29tcCIsIkFuaW1hdGlvbiIsIm9uIiwiZGVzdHJveSIsIm9uQ2xlYXJCYXJyYWdlcyIsIl9pbnRlcnZhbElEIiwiY2xlYXJJbnRlcnZhbCIsImtleXMiLCJPYmplY3QiLCJpIiwibGVuIiwia2V5IiwiYW5pbSIsIm9uT3BlbkJhcnJhZ2VzIiwic2V0SW50ZXJ2YWwiLCJvblBsYXlBbmltIiwib25DbG9zZUJhcnJhZ2VzIiwib25QYXVzZUFuaW0iLCJnZXRBbmltYXRpb25TdGF0ZSIsImlzUGF1c2VkIiwicmVzdW1lIiwicGxheSIsInBhdXNlIiwiYWN0aXZlIiwic3RvcCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBQSxFQUFFLENBQUNDLEtBQUgsQ0FBU0MseUJBQVQsR0FBcUMsSUFBckM7O0FBRUEsU0FBU0Ms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LE9BQUwsQ0FBYUcsWUFBYixHQUE0QixJQUE1QjtJQUNBLEtBQUtDLFFBQUwsQ0FBY0QsWUFBZCxHQUE2QixLQUE3QjtJQUNBLEtBQUtFLE9BQUwsQ0FBYUYsWUFBYixHQUE0QixJQUE1QjtJQUNBLEtBQUtiLFdBQUwsQ0FBaUJxRCxLQUFqQjtJQUNBLEtBQUtOLGVBQUw7RUFDSCxDQW5ISTtFQXFITDtFQUNBUSxJQXRISyxrQkFzSEc7SUFDSixLQUFLbkQsSUFBTCxDQUFVa0QsTUFBVixHQUFtQixJQUFuQjtJQUNBLEtBQUs1QyxPQUFMLENBQWFHLFlBQWIsR0FBNEIsSUFBNUI7SUFDQSxLQUFLQyxRQUFMLENBQWNELFlBQWQsR0FBNkIsS0FBN0I7SUFDQSxLQUFLRSxPQUFMLENBQWFGLFlBQWIsR0FBNEIsS0FBNUI7SUFDQSxLQUFLYixXQUFMLENBQWlCdUQsSUFBakI7SUFDQSxLQUFLcEIsZUFBTDtFQUNIO0FBN0hJLENBQVQiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIi8vIOW8gOWQryBDYW52YXMg6IOM5pmv5pSv5oyBIGFscGhhIOmAmumBk1xuY2MubWFjcm8uRU5BQkxFX1RSQU5TUEFSRU5UX0NBTlZBUyA9IHRydWU7XG5cbmZ1bmN0aW9uIHJhbmRvbU51bSAobWluLCBtYXgpe1xuICAgIHJldHVybiBNYXRoLnJhbmRvbSgpICogKG1heCAtIG1pbiArIDEpICsgbWluO1xufVxuXG5jb25zdCBUSVBTID0gW1xuICAgICfov5nkuKrmmK/kuIDkuKrojIPkvovvvIzor6XojIPkvovmmK/orqnnlKjmiLfnn6XpgZPlpoLkvZXmioogVUkg5riy5p+T5YiwIFZpZGVvUGxheWVyIOS4iicsXG4gICAgJ1VJIOa4suafk+WIsCBWaWRlb1BsYXllciDkuIrlj6rpnIDkuInkuKrmraXpqqTvvJox44CC5Yib5bu65Luj56CB5byA5ZCvIGNjLm1hY3JvLkVOQUJMRV9UUkFOU1BBUkVOVF9DQU5WQVMgMuOAguiuvue9ruaRhOWDj+acuueahOiDjOaZr+minOiJsueahOmAj+aYjuW6puS4uumbtiAz44CC5Yu+6YCJIFZpZGVvUGxheWVyIOe7hOS7tuS4iueahCBzdGF5T25Cb3R0b20g5bGe5oCnIC0tIOWwsSBPSyDkuoYnLFxuICAgICdVSSDlsYXnhLblj6/ku6XmmL7npLrlnKggVmlkZVBsYXllciDkuIrpnaLkuobvvIzwn5GN8J+RjfCfkY3wn5GN8J+RjScsXG4gICAgJ+WTh++8jOWPr+S7peWBmuW8ueW5leWKn+iDveS6hi4uLiDwn5KQ8J+SkPCfkpDwn5KQ8J+SkCcsXG4gICAgJ+WTh++8jOWPr+S7peWBmue6puS8mua4uOaIj+S6hi4uLiDwn5KQ8J+SkPCfkpDwn5KQ8J+SkCcsXG4gICAgJ+azqOaEj++8muivpeWKn+iDveWPquaUr+aMgSB3ZWIg5bmz5Y+wJyxcbiAgICAn5rOo5oSP77ya6K+l5Yqf6IO955qE5pWI5p6c5Zyo5ZCE5Liq5rWP6KeI5Zmo55qE6ZmQ5Yi25LiL5LiN6IO95L+d5oyB5pWI5p6c5LiA6Ie0JyxcbiAgICAn5oiR5piv5omT6YWx5rK555qELi4uJyxcbiAgICAnQ29jb2NzIENyZWF0b3Ig5piv5pyA5qOS55qE77yM5LiN5o6l5pS25Y+N6amzLi4uJyxcbiAgICAn5YmN6Z2i55qE6K+055qE5a+5Li4uJyxcbiAgICAn5YW25a6e5oiR5Lmf5LiN55+l6YGT6KaB6K+05LuA5LmI77yM5Y+N5q2j5Y+q5piv5Li65LqG5YWF5pWw55So6ICM5beyJ1xuXTtcblxuY2MuQ2xhc3Moe1xuICAgIGV4dGVuZHM6IGNjLkNvbXBvbmVudCxcblxuICAgIHByb3BlcnRpZXM6IHtcbiAgICAgICAgdGVtcEJhcnJhZ2U6IGNjLlByZWZhYixcbiAgICAgICAgdmlkZW9QbGF5ZXI6IGNjLlZpZGVvUGxheWVyLFxuICAgICAgICBiYXJyYWdlUm9vdDogY2MuTm9kZSxcbiAgICAgICAgdGlwczogY2MuTm9kZSxcbiAgICB9LFxuXG4gICAgc3RhcnQgKCkge1xuICAgICAgICB0aGlzLl9faWQgPSAwO1xuICAgICAgICB0aGlzLl9hbmltTGlzdCA9IFtdO1xuXG4gICAgICAgIGxldCBub2RlID0gY2MuZmluZCgnQ2FudmFzL1BsYXknKTtcbiAgICAgICAgdGhpcy5idG5QbGF5ID0gbm9kZS5nZXRDb21wb25lbnQoY2MuQnV0dG9uKTtcbiAgICAgICAgdGhpcy5idG5QbGF5LmludGVyYWN0YWJsZSA9IHRydWU7XG5cbiAgICAgICAgbm9kZSA9IGNjLmZpbmQoJ0NhbnZhcy9QYXVzZScpO1xuICAgICAgICB0aGlzLmJ0blBhdXNlID0gbm9kZS5nZXRDb21wb25lbnQoY2MuQnV0dG9uKTtcbiAgICAgICAgdGhpcy5idG5QYXVzZS5pbnRlcmFjdGFibGUgPSBmYWxzZTtcblxuICAgICAgICBub2RlID0gY2MuZmluZCgnQ2FudmFzL1N0b3AnKTtcbiAgICAgICAgdGhpcy5idG5TdG9wID0gbm9kZS5nZXRDb21wb25lbnQoY2MuQnV0dG9uKTtcbiAgICAgICAgdGhpcy5idG5TdG9wLmludGVyYWN0YWJsZSA9IGZhbHNlO1xuICAgIH0sXG5cbiAgICAvLyDliJvlu7rlvLnluZVcbiAgICBvbkNyZWF0ZUJhcnJhZ2UgKCkge1xuICAgICAgICBsZXQgbm9kZSA9IGNjLmluc3RhbnRpYXRlKHRoaXMudGVtcEJhcnJhZ2UpO1xuICAgICAgICArK3RoaXMuX19pZDtcbiAgICAgICAgbm9kZS5fX19pZCA9IHRoaXMuX19pZDtcbiAgICAgICAgbm9kZS55ID0gcmFuZG9tTnVtKDMwMCwgLTEyMCk7XG4gICAgICAgIG5vZGUucGFyZW50ID0gdGhpcy5ub2RlO1xuICAgICAgICBsZXQgciA9IHJhbmRvbU51bSgwLCAyNTUpO1xuICAgICAgICBsZXQgZyA9IHJhbmRvbU51bSgwLCAyNTUpO1xuICAgICAgICBsZXQgYiA9IHJhbmRvbU51bSgwLCAyNTUpO1xuICAgICAgICBub2RlLmNvbG9yID0gY2MuY29sb3IociwgZywgYik7XG4gICAgICAgIGxldCBsYWJlbCA9IG5vZGUuZ2V0Q29tcG9uZW50KGNjLkxhYmVsKTtcbiAgICAgICAgbGV0IGlkeCA9IE1hdGguZmxvb3IocmFuZG9tTnVtKDAsIFRJUFMubGVuZ3RoIC0gMSkpO1xuICAgICAgICBsYWJlbC5zdHJpbmcgPSBUSVBTW2lkeF07XG4gICAgICAgIGxldCBhbmltQ29tcCA9IG5vZGUuZ2V0Q29tcG9uZW50KGNjLkFuaW1hdGlvbik7XG4gICAgICAgIGFuaW1Db21wLm9uKCdzdG9wJywgKCkgPT4ge1xuICAgICAgICAgICAgZGVsZXRlIHRoaXMuX2FuaW1MaXN0W25vZGUuX19faWRdO1xuICAgICAgICAgICAgbm9kZS5kZXN0cm95KCk7XG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLl9hbmltTGlzdFt0aGlzLl9faWRdID0gYW5pbUNvbXA7XG4gICAgfSxcblxuICAgIC8vIOa4heepuuW8ueW5lVxuICAgIG9uQ2xlYXJCYXJyYWdlcyAoKSB7XG4gICAgICAgIHRoaXMuX2ludGVydmFsSUQgJiYgY2xlYXJJbnRlcnZhbCh0aGlzLl9pbnRlcnZhbElEKTtcbiAgICAgICAgbGV0IGtleXMgPSBPYmplY3Qua2V5cyh0aGlzLl9hbmltTGlzdCk7XG4gICAgICAgIGZvciAobGV0IGkgPSAwLCBsZW4gPSBrZXlzLmxlbmd0aDsgaSA8IGxlbjsgKytpKSB7XG4gICAgICAgICAgICBsZXQga2V5ID0ga2V5c1tpXTtcbiAgICAgICAgICAgIGxldCBhbmltID0gdGhpcy5fYW5pbUxpc3Rba2V5XTtcbiAgICAgICAgICAgIGFuaW0ubm9kZS5kZXN0cm95KCk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5fYW5pbUxpc3QubGVuZ3RoID0gMDtcbiAgICB9LFxuXG4gICAgLy8g5byA5ZCv5by55bmVXG4gICAgb25PcGVuQmFycmFnZXMgKCkge1xuICAgICAgICB0aGlzLl9pbnRlcnZhbElEID0gc2V0SW50ZXJ2YWwoKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5vbkNyZWF0ZUJhcnJhZ2UoKTtcbiAgICAgICAgfSwgMTAwMCk7XG4gICAgICAgIHRoaXMub25QbGF5QW5pbSgpO1xuICAgIH0sXG5cbiAgICAvLyDlhbPpl63lvLnluZVcbiAgICBvbkNsb3NlQmFycmFnZXMgKCkge1xuICAgICAgICB0aGlzLl9pbnRlcnZhbElEICYmIGNsZWFySW50ZXJ2YWwodGhpcy5faW50ZXJ2YWxJRCk7XG4gICAgICAgIHRoaXMub25QYXVzZUFuaW0oKTtcbiAgICB9LFxuXG4gICAgLy8g5pKt5pS+5by55bmV5Yqo55S7XG4gICAgb25QbGF5QW5pbSAoKSB7XG4gICAgICAgIGxldCBrZXlzID0gT2JqZWN0LmtleXModGhpcy5fYW5pbUxpc3QpO1xuICAgICAgICBmb3IgKGxldCBpID0gMCwgbGVuID0ga2V5cy5sZW5ndGg7IGkgPCBsZW47ICsraSkge1xuICAgICAgICAgICAgbGV0IGtleSA9IGtleXNbaV07XG4gICAgICAgICAgICBsZXQgYW5pbSA9IHRoaXMuX2FuaW1MaXN0W2tleV07XG4gICAgICAgICAgICBpZiAoYW5pbS5nZXRBbmltYXRpb25TdGF0ZSgnYmFycmFnZS1hbmltQ2xpcCcpLmlzUGF1c2VkKSB7XG4gICAgICAgICAgICAgICAgYW5pbS5yZXN1bWUoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIGFuaW0ucGxheSgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfSxcblxuICAgIC8vIOaaguWBnOW8ueW5leWKqOeUu1xuICAgIG9uUGF1c2VBbmltICgpIHtcbiAgICAgICAgZm9yIChsZXQga2V5IGluIHRoaXMuX2FuaW1MaXN0KSB7XG4gICAgICAgICAgICBsZXQgYW5pbSA9IHRoaXMuX2FuaW1MaXN0W2tleV07XG4gICAgICAgICAgICBhbmltLnBhdXNlKCk7XG4gICAgICAgIH1cbiAgICB9LFxuXG4gICAgLy8g5pKt5pS+6KeG6aKRXG4gICAgcGxheSAoKSB7XG4gICAgICAgIHRoaXMudGlwcy5hY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5idG5QbGF5LmludGVyYWN0YWJsZSA9IGZhbHNlO1xuICAgICAgICB0aGlzLmJ0blBhdXNlLmludGVyYWN0YWJsZSA9IHRydWU7XG4gICAgICAgIHRoaXMuYnRuU3RvcC5pbnRlcmFjdGFibGUgPSB0cnVlO1xuICAgICAgICB0aGlzLnZpZGVvUGxheWVyLnBsYXkoKTtcbiAgICAgICAgdGhpcy5vbk9wZW5CYXJyYWdlcygpO1xuICAgIH0sXG5cbiAgICAvLyDmmoLlgZzop4bpopFcbiAgICBwYXVzZSAoKSB7XG4gICAgICAgIHRoaXMuYnRuUGxheS5pbnRlcmFjdGFibGUgPSB0cnVlO1xuICAgICAgICB0aGlzLmJ0blBhdXNlLmludGVyYWN0YWJsZSA9IGZhbHNlO1xuICAgICAgICB0aGlzLmJ0blN0b3AuaW50ZXJhY3RhYmxlID0gdHJ1ZTtcbiAgICAgICAgdGhpcy52aWRlb1BsYXllci5wYXVzZSgpO1xuICAgICAgICB0aGlzLm9uQ2xvc2VCYXJyYWdlcygpO1xuICAgIH0sXG5cbiAgICAvLyDlgZzmraLop4bpopFcbiAgICBzdG9wICgpIHtcbiAgICAgICAgdGhpcy50aXBzLmFjdGl2ZSA9IHRydWU7XG4gICAgICAgIHRoaXMuYnRuUGxheS5pbnRlcmFjdGFibGUgPSB0cnVlO1xuICAgICAgICB0aGlzLmJ0blBhdXNlLmludGVyYWN0YWJsZSA9IGZhbHNlO1xuICAgICAgICB0aGlzLmJ0blN0b3AuaW50ZXJhY3RhYmxlID0gZmFsc2U7XG4gICAgICAgIHRoaXMudmlkZW9QbGF5ZXIuc3RvcCgpO1xuICAgICAgICB0aGlzLm9uQ2xlYXJCYXJyYWdlcygpO1xuICAgIH0sXG59KTtcbiJdfQ==