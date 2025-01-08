
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/cases/02_ui/04_progressbar/ProgressBar/ProgressBarCtrl.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '84a43yb9OxBX6HMQxPzHQyz', 'ProgressBarCtrl');
// cases/02_ui/04_progressbar/ProgressBar/ProgressBarCtrl.js

"use strict";

cc.Class({
  "extends": cc.Component,
  properties: {
    speed: 10,
    horizontalBar: {
      type: cc.ProgressBar,
      "default": null
    },
    horizontalBarReverse: {
      type: cc.ProgressBar,
      "default": null
    },
    verticalBar: {
      type: cc.ProgressBar,
      "default": null
    },
    verticalBarReverse: {
      type: cc.ProgressBar,
      "default": null
    }
  },
  onLoad: function onLoad() {
    this._pingpong = true;
    this.verticalBar.progress = 0;
    this.horizontalBar.progress = 0;
    this.verticalBarReverse.progress = 0;
    this.horizontalBarReverse.progress = 0;
  },
  update: function update(dt) {
    this._updateProgressBar(this.verticalBar, dt);

    this._updateProgressBar(this.horizontalBar, dt);

    this._updateProgressBar(this.verticalBarReverse, dt);

    this._updateProgressBar(this.horizontalBarReverse, dt);
  },
  _updateProgressBar: function _updateProgressBar(progressBar, dt) {
    var progress = progressBar.progress;

    if (progress < 1.0 && this._pingpong) {
      progress += dt * this.speed;
    } else {
      progress -= dt * this.speed;
      this._pingpong = progress <= 0;
    }

    progressBar.progress = progress;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9jYXNlcy8wMl91aS8wNF9wcm9ncmVzc2Jhci9Qcm9ncmVzc0Jhci9Qcm9ncmVzc0JhckN0cmwuanMiXSwibmFtZXMiOlsiY2MiLCJDbGFzcyIsIkNvbXBvbmVudCIsInByb3BlcnRpZXMiLCJzcGVlZCIsImhvcml6b250YWxCYXIiLCJ0eXBlIiwiUHJvZ3Jlc3NCYXIiLCJob3Jpem9udGFsQmFyUmV2ZXJzZSIsInZlcnRpY2FsQmFyIiwidmVydGljYWxCYXJSZXZlcnNlIiwib25Mb2FkIiwiX3Bpbmdwb25nIiwicHJvZ3Jlc3MiLCJ1cGRhdGUiLCJkdCIsIl91cGRhdGVQcm9ncmVzc0JhciIsInByb2dyZXNzQmFyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBQSxFQUFFLENBQUNDLEtBQUgsQ0FBUztFQUNMLFdBQVNELEVBQUUsQ0FBQ0UsU0FEUDtFQUdMQyxVQUFVLEVBQUU7SUFDUkMsS0FBSyxFQUFFLEVBREM7SUFFUkMsYUFBYSxFQUFFO01BQ1hDLElBQUksRUFBRU4sRUFBRSxDQUFDTyxXQURFO01BRVgsV0FBUztJQUZFLENBRlA7SUFNUkMsb0JBQW9CLEVBQUU7TUFDbEJGLElBQUksRUFBRU4sRUFBRSxDQUFDTyxXQURTO01BRWxCLFdBQVM7SUFGUyxDQU5kO0lBVVJFLFdBQVcsRUFBRTtNQUNUSCxJQUFJLEVBQUVOLEVBQUUsQ0FBQ08sV0FEQTtNQUVULFdBQVM7SUFGQSxDQVZMO0lBY1JHLGtCQUFrQixFQUFFO01BQ2hCSixJQUFJLEVBQUVOLEVBQUUsQ0FBQ08sV0FETztNQUVoQixXQUFTO0lBRk87RUFkWixDQUhQO0VBdUJMSSxNQUFNLEVBQUUsa0JBQVk7SUFDaEIsS0FBS0MsU0FBTCxHQUFpQixJQUFqQjtJQUNBLEtBQUtILFdBQUwsQ0FBaUJJLFFBQWpCLEdBQTRCLENBQTVCO0lBQ0EsS0FBS1IsYUFBTCxDQUFtQlEsUUFBbkIsR0FBOEIsQ0FBOUI7SUFDQSxLQUFLSCxrQkFBTCxDQUF3QkcsUUFBeEIsR0FBbUMsQ0FBbkM7SUFDQSxLQUFLTCxvQkFBTCxDQUEwQkssUUFBMUIsR0FBcUMsQ0FBckM7RUFDSCxDQTdCSTtFQStCTEMsTUFBTSxFQUFFLGdCQUFVQyxFQUFWLEVBQWM7SUFDbEIsS0FBS0Msa0JBQUwsQ0FBd0IsS0FBS1AsV0FBN0IsRUFBMENNLEVBQTFDOztJQUNBLEtBQUtDLGtCQUFMLENBQXdCLEtBQUtYLGFBQTdCLEVBQTRDVSxFQUE1Qzs7SUFDQSxLQUFLQyxrQkFBTCxDQUF3QixLQUFLTixrQkFBN0IsRUFBaURLLEVBQWpEOztJQUNBLEtBQUtDLGtCQUFMLENBQXdCLEtBQUtSLG9CQUE3QixFQUFtRE8sRUFBbkQ7RUFDSCxDQXBDSTtFQXNDTEMsa0JBQWtCLEVBQUUsNEJBQVNDLFdBQVQsRUFBc0JGLEVBQXRCLEVBQXlCO0lBQ3pDLElBQUlGLFFBQVEsR0FBR0ksV0FBVyxDQUFDSixRQUEzQjs7SUFDQSxJQUFHQSxRQUFRLEdBQUcsR0FBWCxJQUFrQixLQUFLRCxTQUExQixFQUFvQztNQUNoQ0MsUUFBUSxJQUFJRSxFQUFFLEdBQUcsS0FBS1gsS0FBdEI7SUFDSCxDQUZELE1BR0s7TUFDRFMsUUFBUSxJQUFJRSxFQUFFLEdBQUcsS0FBS1gsS0FBdEI7TUFDQSxLQUFLUSxTQUFMLEdBQWlCQyxRQUFRLElBQUksQ0FBN0I7SUFDSDs7SUFDREksV0FBVyxDQUFDSixRQUFaLEdBQXVCQSxRQUF2QjtFQUNIO0FBaERJLENBQVQiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImNjLkNsYXNzKHtcbiAgICBleHRlbmRzOiBjYy5Db21wb25lbnQsXG5cbiAgICBwcm9wZXJ0aWVzOiB7XG4gICAgICAgIHNwZWVkOiAxMCxcbiAgICAgICAgaG9yaXpvbnRhbEJhcjoge1xuICAgICAgICAgICAgdHlwZTogY2MuUHJvZ3Jlc3NCYXIsXG4gICAgICAgICAgICBkZWZhdWx0OiBudWxsXG4gICAgICAgIH0sXG4gICAgICAgIGhvcml6b250YWxCYXJSZXZlcnNlOiB7XG4gICAgICAgICAgICB0eXBlOiBjYy5Qcm9ncmVzc0JhcixcbiAgICAgICAgICAgIGRlZmF1bHQ6IG51bGxcbiAgICAgICAgfSxcbiAgICAgICAgdmVydGljYWxCYXI6IHtcbiAgICAgICAgICAgIHR5cGU6IGNjLlByb2dyZXNzQmFyLFxuICAgICAgICAgICAgZGVmYXVsdDogbnVsbFxuICAgICAgICB9LFxuICAgICAgICB2ZXJ0aWNhbEJhclJldmVyc2U6IHtcbiAgICAgICAgICAgIHR5cGU6IGNjLlByb2dyZXNzQmFyLFxuICAgICAgICAgICAgZGVmYXVsdDogbnVsbFxuICAgICAgICB9XG4gICAgfSxcblxuICAgIG9uTG9hZDogZnVuY3Rpb24gKCkge1xuICAgICAgICB0aGlzLl9waW5ncG9uZyA9IHRydWU7XG4gICAgICAgIHRoaXMudmVydGljYWxCYXIucHJvZ3Jlc3MgPSAwO1xuICAgICAgICB0aGlzLmhvcml6b250YWxCYXIucHJvZ3Jlc3MgPSAwO1xuICAgICAgICB0aGlzLnZlcnRpY2FsQmFyUmV2ZXJzZS5wcm9ncmVzcyA9IDA7XG4gICAgICAgIHRoaXMuaG9yaXpvbnRhbEJhclJldmVyc2UucHJvZ3Jlc3MgPSAwO1xuICAgIH0sXG5cbiAgICB1cGRhdGU6IGZ1bmN0aW9uIChkdCkge1xuICAgICAgICB0aGlzLl91cGRhdGVQcm9ncmVzc0Jhcih0aGlzLnZlcnRpY2FsQmFyLCBkdCk7XG4gICAgICAgIHRoaXMuX3VwZGF0ZVByb2dyZXNzQmFyKHRoaXMuaG9yaXpvbnRhbEJhciwgZHQpO1xuICAgICAgICB0aGlzLl91cGRhdGVQcm9ncmVzc0Jhcih0aGlzLnZlcnRpY2FsQmFyUmV2ZXJzZSwgZHQpO1xuICAgICAgICB0aGlzLl91cGRhdGVQcm9ncmVzc0Jhcih0aGlzLmhvcml6b250YWxCYXJSZXZlcnNlLCBkdCk7XG4gICAgfSxcbiAgICBcbiAgICBfdXBkYXRlUHJvZ3Jlc3NCYXI6IGZ1bmN0aW9uKHByb2dyZXNzQmFyLCBkdCl7XG4gICAgICAgIHZhciBwcm9ncmVzcyA9IHByb2dyZXNzQmFyLnByb2dyZXNzO1xuICAgICAgICBpZihwcm9ncmVzcyA8IDEuMCAmJiB0aGlzLl9waW5ncG9uZyl7XG4gICAgICAgICAgICBwcm9ncmVzcyArPSBkdCAqIHRoaXMuc3BlZWQ7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBwcm9ncmVzcyAtPSBkdCAqIHRoaXMuc3BlZWQ7XG4gICAgICAgICAgICB0aGlzLl9waW5ncG9uZyA9IHByb2dyZXNzIDw9IDA7XG4gICAgICAgIH1cbiAgICAgICAgcHJvZ3Jlc3NCYXIucHJvZ3Jlc3MgPSBwcm9ncmVzcztcbiAgICB9XG59KTtcbiJdfQ==