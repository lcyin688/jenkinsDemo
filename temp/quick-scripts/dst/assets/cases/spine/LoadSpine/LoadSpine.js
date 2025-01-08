
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/cases/spine/LoadSpine/LoadSpine.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '282b2tQFyZNyISOFPjrcQoM', 'LoadSpine');
// cases/spine/LoadSpine/LoadSpine.js

"use strict";

var i18n = require('i18n');

cc.Class({
  "extends": cc.Component,
  editor: {
    requireComponent: sp.Skeleton
  },
  properties: {
    label: {
      "default": null,
      type: cc.Label
    }
  },
  start: function start() {
    cc.resources.load('loadSpine/alien-ess', sp.SkeletonData, this.onProcess.bind(this), this.onComplete.bind(this));
  },
  onProcess: function onProcess(completeCount, totalCount, item) {},
  onComplete: function onComplete(err, res) {
    if (err) {
      this.label.textKey = i18n.t('sprite_loadRes_asset_failed');
      cc.error(err);
    }

    var spine = this.getComponent('sp.Skeleton');
    spine.skeletonData = res;
    var animate = spine.setAnimation(0, 'run', true);
    this.label.textKey = i18n.t('sprite_loadRes_asset_success');
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9jYXNlcy9zcGluZS9Mb2FkU3BpbmUvTG9hZFNwaW5lLmpzIl0sIm5hbWVzIjpbImkxOG4iLCJyZXF1aXJlIiwiY2MiLCJDbGFzcyIsIkNvbXBvbmVudCIsImVkaXRvciIsInJlcXVpcmVDb21wb25lbnQiLCJzcCIsIlNrZWxldG9uIiwicHJvcGVydGllcyIsImxhYmVsIiwidHlwZSIsIkxhYmVsIiwic3RhcnQiLCJyZXNvdXJjZXMiLCJsb2FkIiwiU2tlbGV0b25EYXRhIiwib25Qcm9jZXNzIiwiYmluZCIsIm9uQ29tcGxldGUiLCJjb21wbGV0ZUNvdW50IiwidG90YWxDb3VudCIsIml0ZW0iLCJlcnIiLCJyZXMiLCJ0ZXh0S2V5IiwidCIsImVycm9yIiwic3BpbmUiLCJnZXRDb21wb25lbnQiLCJza2VsZXRvbkRhdGEiLCJhbmltYXRlIiwic2V0QW5pbWF0aW9uIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLElBQU1BLElBQUksR0FBR0MsT0FBTyxDQUFDLE1BQUQsQ0FBcEI7O0FBRUFDLEVBQUUsQ0FBQ0MsS0FBSCxDQUFTO0VBQ0wsV0FBU0QsRUFBRSxDQUFDRSxTQURQO0VBRUxDLE1BQU0sRUFBRTtJQUNKQyxnQkFBZ0IsRUFBRUMsRUFBRSxDQUFDQztFQURqQixDQUZIO0VBTUxDLFVBQVUsRUFBRTtJQUNSQyxLQUFLLEVBQUU7TUFDSCxXQUFTLElBRE47TUFFSEMsSUFBSSxFQUFFVCxFQUFFLENBQUNVO0lBRk47RUFEQyxDQU5QO0VBYUxDLEtBYkssbUJBYUk7SUFDTFgsRUFBRSxDQUFDWSxTQUFILENBQWFDLElBQWIsQ0FBa0IscUJBQWxCLEVBQXlDUixFQUFFLENBQUNTLFlBQTVDLEVBQTBELEtBQUtDLFNBQUwsQ0FBZUMsSUFBZixDQUFvQixJQUFwQixDQUExRCxFQUFxRixLQUFLQyxVQUFMLENBQWdCRCxJQUFoQixDQUFxQixJQUFyQixDQUFyRjtFQUNILENBZkk7RUFpQkxELFNBakJLLHFCQWlCTUcsYUFqQk4sRUFpQnFCQyxVQWpCckIsRUFpQmlDQyxJQWpCakMsRUFpQnVDLENBQUUsQ0FqQnpDO0VBbUJMSCxVQW5CSyxzQkFtQk9JLEdBbkJQLEVBbUJZQyxHQW5CWixFQW1CaUI7SUFDbEIsSUFBSUQsR0FBSixFQUFTO01BQ0wsS0FBS2IsS0FBTCxDQUFXZSxPQUFYLEdBQXFCekIsSUFBSSxDQUFDMEIsQ0FBTCxDQUFPLDZCQUFQLENBQXJCO01BQ0F4QixFQUFFLENBQUN5QixLQUFILENBQVNKLEdBQVQ7SUFDSDs7SUFFRCxJQUFJSyxLQUFLLEdBQUcsS0FBS0MsWUFBTCxDQUFrQixhQUFsQixDQUFaO0lBQ0FELEtBQUssQ0FBQ0UsWUFBTixHQUFxQk4sR0FBckI7SUFDQSxJQUFJTyxPQUFPLEdBQUdILEtBQUssQ0FBQ0ksWUFBTixDQUFtQixDQUFuQixFQUFzQixLQUF0QixFQUE2QixJQUE3QixDQUFkO0lBQ0EsS0FBS3RCLEtBQUwsQ0FBV2UsT0FBWCxHQUFxQnpCLElBQUksQ0FBQzBCLENBQUwsQ0FBTyw4QkFBUCxDQUFyQjtFQUNIO0FBN0JJLENBQVQiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IGkxOG4gPSByZXF1aXJlKCdpMThuJyk7XG5cbmNjLkNsYXNzKHtcbiAgICBleHRlbmRzOiBjYy5Db21wb25lbnQsXG4gICAgZWRpdG9yOiB7XG4gICAgICAgIHJlcXVpcmVDb21wb25lbnQ6IHNwLlNrZWxldG9uXG4gICAgfSxcblxuICAgIHByb3BlcnRpZXM6IHtcbiAgICAgICAgbGFiZWw6IHtcbiAgICAgICAgICAgIGRlZmF1bHQ6IG51bGwsXG4gICAgICAgICAgICB0eXBlOiBjYy5MYWJlbFxuICAgICAgICB9XG4gICAgfSxcblxuICAgIHN0YXJ0ICgpIHtcbiAgICAgICAgY2MucmVzb3VyY2VzLmxvYWQoJ2xvYWRTcGluZS9hbGllbi1lc3MnLCBzcC5Ta2VsZXRvbkRhdGEsIHRoaXMub25Qcm9jZXNzLmJpbmQodGhpcyksIHRoaXMub25Db21wbGV0ZS5iaW5kKHRoaXMpKTtcbiAgICB9LFxuXG4gICAgb25Qcm9jZXNzIChjb21wbGV0ZUNvdW50LCB0b3RhbENvdW50LCBpdGVtKSB7fSxcblxuICAgIG9uQ29tcGxldGUgKGVyciwgcmVzKSB7XG4gICAgICAgIGlmIChlcnIpIHtcbiAgICAgICAgICAgIHRoaXMubGFiZWwudGV4dEtleSA9IGkxOG4udCgnc3ByaXRlX2xvYWRSZXNfYXNzZXRfZmFpbGVkJyk7XG4gICAgICAgICAgICBjYy5lcnJvcihlcnIpO1xuICAgICAgICB9XG5cbiAgICAgICAgbGV0IHNwaW5lID0gdGhpcy5nZXRDb21wb25lbnQoJ3NwLlNrZWxldG9uJyk7XG4gICAgICAgIHNwaW5lLnNrZWxldG9uRGF0YSA9IHJlcztcbiAgICAgICAgbGV0IGFuaW1hdGUgPSBzcGluZS5zZXRBbmltYXRpb24oMCwgJ3J1bicsIHRydWUpOyAgICBcbiAgICAgICAgdGhpcy5sYWJlbC50ZXh0S2V5ID0gaTE4bi50KCdzcHJpdGVfbG9hZFJlc19hc3NldF9zdWNjZXNzJyk7XG4gICAgfVxuXG59KTtcbiJdfQ==