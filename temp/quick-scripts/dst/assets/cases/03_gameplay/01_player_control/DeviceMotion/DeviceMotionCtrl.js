
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/cases/03_gameplay/01_player_control/DeviceMotion/DeviceMotionCtrl.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '189c1ckoZZHULnR52/pnCkv', 'DeviceMotionCtrl');
// cases/03_gameplay/01_player_control/DeviceMotion/DeviceMotionCtrl.js

"use strict";

var i18n = require('i18n');

cc.Class({
  "extends": cc.Component,
  properties: {
    speed: 200,
    target: cc.Node,
    btn_label: cc.Label,
    _time: 0,
    _range: cc.v2(0, 0),
    _acc: cc.v2(0, 0)
  },
  onLoad: function onLoad() {
    this._enabled = false;
    var screenSize = cc.view.getVisibleSize();
    this._range.x = screenSize.width / 2 - this.target.width / 2;
    this._range.y = screenSize.height / 2 - this.target.height / 2;
    cc.systemEvent.on(cc.SystemEvent.EventType.DEVICEMOTION, this.onDeviceMotionEvent, this);
  },
  onOpenAccelerometer: function onOpenAccelerometer() {
    this._enabled = !this._enabled;

    if (this._enabled) {
      this.btn_label.textKey = i18n.t('cases/03_gameplay/01_player_control/On/DeviceMotion.fire.2');
    } else {
      this.btn_label.textKey = i18n.t('cases/03_gameplay/01_player_control/On/DeviceMotion.fire.1');
    }

    if (!this._enabled) {
      this._acc.x = 0;
      this._acc.y = 0;
      this._time = 0;
    }

    cc.systemEvent.setAccelerometerEnabled(this._enabled);
  },
  onDestroy: function onDestroy() {
    cc.systemEvent.setAccelerometerEnabled(false);
    cc.systemEvent.off(cc.SystemEvent.EventType.DEVICEMOTION, this.onDeviceMotionEvent, this);
  },
  onDeviceMotionEvent: function onDeviceMotionEvent(event) {
    this._acc.x = event.acc.x;
    this._acc.y = event.acc.y;
  },
  update: function update(dt) {
    var target = this.target,
        range = this._range;
    this._time += 5;
    target.x += this._acc.x * dt * (this.speed + this._time);
    target.x = cc.misc.clampf(target.x, -range.x, range.x);
    target.y += this._acc.y * dt * (this.speed + this._time);
    target.y = cc.misc.clampf(target.y, -range.y, range.y);

    if (target.x <= -range.x || target.x >= range.x || target.y <= -range.y || target.y >= range.y) {
      this._time = 0;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9jYXNlcy8wM19nYW1lcGxheS8wMV9wbGF5ZXJfY29udHJvbC9EZXZpY2VNb3Rpb24vRGV2aWNlTW90aW9uQ3RybC5qcyJdLCJuYW1lcyI6WyJpMThuIiwicmVxdWlyZSIsImNjIiwiQ2xhc3MiLCJDb21wb25lbnQiLCJwcm9wZXJ0aWVzIiwic3BlZWQiLCJ0YXJnZXQiLCJOb2RlIiwiYnRuX2xhYmVsIiwiTGFiZWwiLCJfdGltZSIsIl9yYW5nZSIsInYyIiwiX2FjYyIsIm9uTG9hZCIsIl9lbmFibGVkIiwic2NyZWVuU2l6ZSIsInZpZXciLCJnZXRWaXNpYmxlU2l6ZSIsIngiLCJ3aWR0aCIsInkiLCJoZWlnaHQiLCJzeXN0ZW1FdmVudCIsIm9uIiwiU3lzdGVtRXZlbnQiLCJFdmVudFR5cGUiLCJERVZJQ0VNT1RJT04iLCJvbkRldmljZU1vdGlvbkV2ZW50Iiwib25PcGVuQWNjZWxlcm9tZXRlciIsInRleHRLZXkiLCJ0Iiwic2V0QWNjZWxlcm9tZXRlckVuYWJsZWQiLCJvbkRlc3Ryb3kiLCJvZmYiLCJldmVudCIsImFjYyIsInVwZGF0ZSIsImR0IiwicmFuZ2UiLCJtaXNjIiwiY2xhbXBmIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLElBQU1BLElBQUksR0FBR0MsT0FBTyxDQUFDLE1BQUQsQ0FBcEI7O0FBRUFDLEVBQUUsQ0FBQ0MsS0FBSCxDQUFTO0VBQ0wsV0FBU0QsRUFBRSxDQUFDRSxTQURQO0VBR0xDLFVBQVUsRUFBRTtJQUNSQyxLQUFLLEVBQUUsR0FEQztJQUVSQyxNQUFNLEVBQUVMLEVBQUUsQ0FBQ00sSUFGSDtJQUdSQyxTQUFTLEVBQUVQLEVBQUUsQ0FBQ1EsS0FITjtJQUlSQyxLQUFLLEVBQUUsQ0FKQztJQUtSQyxNQUFNLEVBQUVWLEVBQUUsQ0FBQ1csRUFBSCxDQUFNLENBQU4sRUFBUyxDQUFULENBTEE7SUFNUkMsSUFBSSxFQUFFWixFQUFFLENBQUNXLEVBQUgsQ0FBTSxDQUFOLEVBQVMsQ0FBVDtFQU5FLENBSFA7RUFZTEUsTUFaSyxvQkFZSztJQUNOLEtBQUtDLFFBQUwsR0FBZ0IsS0FBaEI7SUFDQSxJQUFJQyxVQUFVLEdBQUdmLEVBQUUsQ0FBQ2dCLElBQUgsQ0FBUUMsY0FBUixFQUFqQjtJQUNBLEtBQUtQLE1BQUwsQ0FBWVEsQ0FBWixHQUFnQkgsVUFBVSxDQUFDSSxLQUFYLEdBQW1CLENBQW5CLEdBQXVCLEtBQUtkLE1BQUwsQ0FBWWMsS0FBWixHQUFvQixDQUEzRDtJQUNBLEtBQUtULE1BQUwsQ0FBWVUsQ0FBWixHQUFnQkwsVUFBVSxDQUFDTSxNQUFYLEdBQW9CLENBQXBCLEdBQXdCLEtBQUtoQixNQUFMLENBQVlnQixNQUFaLEdBQXFCLENBQTdEO0lBQ0FyQixFQUFFLENBQUNzQixXQUFILENBQWVDLEVBQWYsQ0FBa0J2QixFQUFFLENBQUN3QixXQUFILENBQWVDLFNBQWYsQ0FBeUJDLFlBQTNDLEVBQXlELEtBQUtDLG1CQUE5RCxFQUFtRixJQUFuRjtFQUNILENBbEJJO0VBb0JMQyxtQkFwQkssaUNBb0JrQjtJQUNuQixLQUFLZCxRQUFMLEdBQWdCLENBQUMsS0FBS0EsUUFBdEI7O0lBQ0EsSUFBSSxLQUFLQSxRQUFULEVBQW1CO01BQ2YsS0FBS1AsU0FBTCxDQUFlc0IsT0FBZixHQUF5Qi9CLElBQUksQ0FBQ2dDLENBQUwsQ0FBTyw0REFBUCxDQUF6QjtJQUNILENBRkQsTUFHSztNQUNELEtBQUt2QixTQUFMLENBQWVzQixPQUFmLEdBQXlCL0IsSUFBSSxDQUFDZ0MsQ0FBTCxDQUFPLDREQUFQLENBQXpCO0lBQ0g7O0lBQ0QsSUFBSSxDQUFDLEtBQUtoQixRQUFWLEVBQW9CO01BQ2hCLEtBQUtGLElBQUwsQ0FBVU0sQ0FBVixHQUFlLENBQWY7TUFDQSxLQUFLTixJQUFMLENBQVVRLENBQVYsR0FBZSxDQUFmO01BQ0EsS0FBS1gsS0FBTCxHQUFhLENBQWI7SUFDSDs7SUFDRFQsRUFBRSxDQUFDc0IsV0FBSCxDQUFlUyx1QkFBZixDQUF1QyxLQUFLakIsUUFBNUM7RUFDSCxDQWxDSTtFQW9DTGtCLFNBcENLLHVCQW9DUTtJQUNUaEMsRUFBRSxDQUFDc0IsV0FBSCxDQUFlUyx1QkFBZixDQUF1QyxLQUF2QztJQUNBL0IsRUFBRSxDQUFDc0IsV0FBSCxDQUFlVyxHQUFmLENBQW1CakMsRUFBRSxDQUFDd0IsV0FBSCxDQUFlQyxTQUFmLENBQXlCQyxZQUE1QyxFQUEwRCxLQUFLQyxtQkFBL0QsRUFBb0YsSUFBcEY7RUFDSCxDQXZDSTtFQXlDTEEsbUJBekNLLCtCQXlDZ0JPLEtBekNoQixFQXlDdUI7SUFDeEIsS0FBS3RCLElBQUwsQ0FBVU0sQ0FBVixHQUFlZ0IsS0FBSyxDQUFDQyxHQUFOLENBQVVqQixDQUF6QjtJQUNBLEtBQUtOLElBQUwsQ0FBVVEsQ0FBVixHQUFlYyxLQUFLLENBQUNDLEdBQU4sQ0FBVWYsQ0FBekI7RUFDSCxDQTVDSTtFQThDTGdCLE1BOUNLLGtCQThDR0MsRUE5Q0gsRUE4Q087SUFDUixJQUFJaEMsTUFBTSxHQUFHLEtBQUtBLE1BQWxCO0lBQUEsSUFBMEJpQyxLQUFLLEdBQUcsS0FBSzVCLE1BQXZDO0lBQ0EsS0FBS0QsS0FBTCxJQUFjLENBQWQ7SUFDQUosTUFBTSxDQUFDYSxDQUFQLElBQVksS0FBS04sSUFBTCxDQUFVTSxDQUFWLEdBQWNtQixFQUFkLElBQW9CLEtBQUtqQyxLQUFMLEdBQWEsS0FBS0ssS0FBdEMsQ0FBWjtJQUNBSixNQUFNLENBQUNhLENBQVAsR0FBV2xCLEVBQUUsQ0FBQ3VDLElBQUgsQ0FBUUMsTUFBUixDQUFlbkMsTUFBTSxDQUFDYSxDQUF0QixFQUF5QixDQUFDb0IsS0FBSyxDQUFDcEIsQ0FBaEMsRUFBbUNvQixLQUFLLENBQUNwQixDQUF6QyxDQUFYO0lBQ0FiLE1BQU0sQ0FBQ2UsQ0FBUCxJQUFZLEtBQUtSLElBQUwsQ0FBVVEsQ0FBVixHQUFjaUIsRUFBZCxJQUFvQixLQUFLakMsS0FBTCxHQUFhLEtBQUtLLEtBQXRDLENBQVo7SUFDQUosTUFBTSxDQUFDZSxDQUFQLEdBQVdwQixFQUFFLENBQUN1QyxJQUFILENBQVFDLE1BQVIsQ0FBZW5DLE1BQU0sQ0FBQ2UsQ0FBdEIsRUFBeUIsQ0FBQ2tCLEtBQUssQ0FBQ2xCLENBQWhDLEVBQW1Da0IsS0FBSyxDQUFDbEIsQ0FBekMsQ0FBWDs7SUFFQSxJQUFJZixNQUFNLENBQUNhLENBQVAsSUFBWSxDQUFDb0IsS0FBSyxDQUFDcEIsQ0FBbkIsSUFBd0JiLE1BQU0sQ0FBQ2EsQ0FBUCxJQUFZb0IsS0FBSyxDQUFDcEIsQ0FBMUMsSUFDQWIsTUFBTSxDQUFDZSxDQUFQLElBQVksQ0FBQ2tCLEtBQUssQ0FBQ2xCLENBRG5CLElBQ3dCZixNQUFNLENBQUNlLENBQVAsSUFBWWtCLEtBQUssQ0FBQ2xCLENBRDlDLEVBQ2lEO01BQzdDLEtBQUtYLEtBQUwsR0FBYSxDQUFiO0lBQ0g7RUFDSjtBQTFESSxDQUFUIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBpMThuID0gcmVxdWlyZSgnaTE4bicpO1xuXG5jYy5DbGFzcyh7XG4gICAgZXh0ZW5kczogY2MuQ29tcG9uZW50LFxuXG4gICAgcHJvcGVydGllczoge1xuICAgICAgICBzcGVlZDogMjAwLFxuICAgICAgICB0YXJnZXQ6IGNjLk5vZGUsXG4gICAgICAgIGJ0bl9sYWJlbDogY2MuTGFiZWwsXG4gICAgICAgIF90aW1lOiAwLFxuICAgICAgICBfcmFuZ2U6IGNjLnYyKDAsIDApLFxuICAgICAgICBfYWNjOiBjYy52MigwLCAwKVxuICAgIH0sXG5cbiAgICBvbkxvYWQgKCkge1xuICAgICAgICB0aGlzLl9lbmFibGVkID0gZmFsc2U7XG4gICAgICAgIHZhciBzY3JlZW5TaXplID0gY2Mudmlldy5nZXRWaXNpYmxlU2l6ZSgpO1xuICAgICAgICB0aGlzLl9yYW5nZS54ID0gc2NyZWVuU2l6ZS53aWR0aCAvIDIgLSB0aGlzLnRhcmdldC53aWR0aCAvIDI7XG4gICAgICAgIHRoaXMuX3JhbmdlLnkgPSBzY3JlZW5TaXplLmhlaWdodCAvIDIgLSB0aGlzLnRhcmdldC5oZWlnaHQgLyAyO1xuICAgICAgICBjYy5zeXN0ZW1FdmVudC5vbihjYy5TeXN0ZW1FdmVudC5FdmVudFR5cGUuREVWSUNFTU9USU9OLCB0aGlzLm9uRGV2aWNlTW90aW9uRXZlbnQsIHRoaXMpO1xuICAgIH0sXG5cbiAgICBvbk9wZW5BY2NlbGVyb21ldGVyICgpIHtcbiAgICAgICAgdGhpcy5fZW5hYmxlZCA9ICF0aGlzLl9lbmFibGVkO1xuICAgICAgICBpZiAodGhpcy5fZW5hYmxlZCkge1xuICAgICAgICAgICAgdGhpcy5idG5fbGFiZWwudGV4dEtleSA9IGkxOG4udCgnY2FzZXMvMDNfZ2FtZXBsYXkvMDFfcGxheWVyX2NvbnRyb2wvT24vRGV2aWNlTW90aW9uLmZpcmUuMicpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5idG5fbGFiZWwudGV4dEtleSA9IGkxOG4udCgnY2FzZXMvMDNfZ2FtZXBsYXkvMDFfcGxheWVyX2NvbnRyb2wvT24vRGV2aWNlTW90aW9uLmZpcmUuMScpO1xuICAgICAgICB9XG4gICAgICAgIGlmICghdGhpcy5fZW5hYmxlZCkge1xuICAgICAgICAgICAgdGhpcy5fYWNjLnggPSAgMDtcbiAgICAgICAgICAgIHRoaXMuX2FjYy55ID0gIDA7XG4gICAgICAgICAgICB0aGlzLl90aW1lID0gMDtcbiAgICAgICAgfVxuICAgICAgICBjYy5zeXN0ZW1FdmVudC5zZXRBY2NlbGVyb21ldGVyRW5hYmxlZCh0aGlzLl9lbmFibGVkKTtcbiAgICB9LFxuXG4gICAgb25EZXN0cm95ICgpIHtcbiAgICAgICAgY2Muc3lzdGVtRXZlbnQuc2V0QWNjZWxlcm9tZXRlckVuYWJsZWQoZmFsc2UpO1xuICAgICAgICBjYy5zeXN0ZW1FdmVudC5vZmYoY2MuU3lzdGVtRXZlbnQuRXZlbnRUeXBlLkRFVklDRU1PVElPTiwgdGhpcy5vbkRldmljZU1vdGlvbkV2ZW50LCB0aGlzKTtcbiAgICB9LFxuXG4gICAgb25EZXZpY2VNb3Rpb25FdmVudCAoZXZlbnQpIHtcbiAgICAgICAgdGhpcy5fYWNjLnggPSAgZXZlbnQuYWNjLng7XG4gICAgICAgIHRoaXMuX2FjYy55ID0gIGV2ZW50LmFjYy55O1xuICAgIH0sXG5cbiAgICB1cGRhdGUgKGR0KSB7XG4gICAgICAgIHZhciB0YXJnZXQgPSB0aGlzLnRhcmdldCwgcmFuZ2UgPSB0aGlzLl9yYW5nZTtcbiAgICAgICAgdGhpcy5fdGltZSArPSA1O1xuICAgICAgICB0YXJnZXQueCArPSB0aGlzLl9hY2MueCAqIGR0ICogKHRoaXMuc3BlZWQgKyB0aGlzLl90aW1lKTtcbiAgICAgICAgdGFyZ2V0LnggPSBjYy5taXNjLmNsYW1wZih0YXJnZXQueCwgLXJhbmdlLngsIHJhbmdlLngpO1xuICAgICAgICB0YXJnZXQueSArPSB0aGlzLl9hY2MueSAqIGR0ICogKHRoaXMuc3BlZWQgKyB0aGlzLl90aW1lKTtcbiAgICAgICAgdGFyZ2V0LnkgPSBjYy5taXNjLmNsYW1wZih0YXJnZXQueSwgLXJhbmdlLnksIHJhbmdlLnkpO1xuXG4gICAgICAgIGlmICh0YXJnZXQueCA8PSAtcmFuZ2UueCB8fCB0YXJnZXQueCA+PSByYW5nZS54IHx8XG4gICAgICAgICAgICB0YXJnZXQueSA8PSAtcmFuZ2UueSB8fCB0YXJnZXQueSA+PSByYW5nZS55KSB7XG4gICAgICAgICAgICB0aGlzLl90aW1lID0gMDtcbiAgICAgICAgfVxuICAgIH1cblxufSk7XG4iXX0=