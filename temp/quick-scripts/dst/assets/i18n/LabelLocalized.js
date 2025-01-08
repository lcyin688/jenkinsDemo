
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/i18n/LabelLocalized.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'e4f88adp3hERoJ48DZ2PSAl', 'LabelLocalized');
// i18n/LabelLocalized.js

"use strict";

var i18n = require('i18n');

cc.Class({
  "extends": cc.Label,
  properties: {
    textKey: {
      "default": 'TEXT_KEY',
      multiline: true,
      tooltip: 'Enter i18n key here',
      notify: function notify() {
        this.string = this.localizedString;
      }
    },
    localizedString: {
      override: true,
      tooltip: 'Here shows the localized string of Text Key',
      get: function get() {
        return i18n.t(this.textKey);
      },
      set: function set(value) {
        this.textKey = value;

        if (CC_EDITOR) {
          cc.warn('Please set label text key in Text Key property.');
        }
      }
    }
  },
  onLoad: function onLoad() {
    this._super();

    if (this.localizedString) {
      this.string = this.localizedString;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9pMThuL0xhYmVsTG9jYWxpemVkLmpzIl0sIm5hbWVzIjpbImkxOG4iLCJyZXF1aXJlIiwiY2MiLCJDbGFzcyIsIkxhYmVsIiwicHJvcGVydGllcyIsInRleHRLZXkiLCJtdWx0aWxpbmUiLCJ0b29sdGlwIiwibm90aWZ5Iiwic3RyaW5nIiwibG9jYWxpemVkU3RyaW5nIiwib3ZlcnJpZGUiLCJnZXQiLCJ0Iiwic2V0IiwidmFsdWUiLCJDQ19FRElUT1IiLCJ3YXJuIiwib25Mb2FkIiwiX3N1cGVyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLElBQU1BLElBQUksR0FBR0MsT0FBTyxDQUFDLE1BQUQsQ0FBcEI7O0FBQ0FDLEVBQUUsQ0FBQ0MsS0FBSCxDQUFTO0VBQ0wsV0FBU0QsRUFBRSxDQUFDRSxLQURQO0VBR0xDLFVBQVUsRUFBRTtJQUNSQyxPQUFPLEVBQUU7TUFDTCxXQUFTLFVBREo7TUFFTEMsU0FBUyxFQUFFLElBRk47TUFHTEMsT0FBTyxFQUFFLHFCQUhKO01BSUxDLE1BQU0sRUFBRSxrQkFBWTtRQUNoQixLQUFLQyxNQUFMLEdBQWMsS0FBS0MsZUFBbkI7TUFDSDtJQU5JLENBREQ7SUFTUkEsZUFBZSxFQUFFO01BQ2JDLFFBQVEsRUFBRSxJQURHO01BRWJKLE9BQU8sRUFBRSw2Q0FGSTtNQUdiSyxHQUFHLEVBQUUsZUFBWTtRQUNiLE9BQU9iLElBQUksQ0FBQ2MsQ0FBTCxDQUFPLEtBQUtSLE9BQVosQ0FBUDtNQUNILENBTFk7TUFNYlMsR0FBRyxFQUFFLGFBQVVDLEtBQVYsRUFBaUI7UUFDbEIsS0FBS1YsT0FBTCxHQUFlVSxLQUFmOztRQUNBLElBQUlDLFNBQUosRUFBZTtVQUNYZixFQUFFLENBQUNnQixJQUFILENBQVEsaURBQVI7UUFDSDtNQUNKO0lBWFk7RUFUVCxDQUhQO0VBMkJMQyxNQTNCSyxvQkEyQks7SUFDTixLQUFLQyxNQUFMOztJQUNBLElBQUksS0FBS1QsZUFBVCxFQUEwQjtNQUN0QixLQUFLRCxNQUFMLEdBQWMsS0FBS0MsZUFBbkI7SUFDSDtFQUNKO0FBaENJLENBQVQiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IGkxOG4gPSByZXF1aXJlKCdpMThuJyk7XG5jYy5DbGFzcyh7XG4gICAgZXh0ZW5kczogY2MuTGFiZWwsXG5cbiAgICBwcm9wZXJ0aWVzOiB7XG4gICAgICAgIHRleHRLZXk6IHtcbiAgICAgICAgICAgIGRlZmF1bHQ6ICdURVhUX0tFWScsXG4gICAgICAgICAgICBtdWx0aWxpbmU6IHRydWUsXG4gICAgICAgICAgICB0b29sdGlwOiAnRW50ZXIgaTE4biBrZXkgaGVyZScsXG4gICAgICAgICAgICBub3RpZnk6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnN0cmluZyA9IHRoaXMubG9jYWxpemVkU3RyaW5nO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBsb2NhbGl6ZWRTdHJpbmc6IHtcbiAgICAgICAgICAgIG92ZXJyaWRlOiB0cnVlLFxuICAgICAgICAgICAgdG9vbHRpcDogJ0hlcmUgc2hvd3MgdGhlIGxvY2FsaXplZCBzdHJpbmcgb2YgVGV4dCBLZXknLFxuICAgICAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGkxOG4udCh0aGlzLnRleHRLZXkpO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHNldDogZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICAgICAgICAgICAgdGhpcy50ZXh0S2V5ID0gdmFsdWU7XG4gICAgICAgICAgICAgICAgaWYgKENDX0VESVRPUikge1xuICAgICAgICAgICAgICAgICAgICBjYy53YXJuKCdQbGVhc2Ugc2V0IGxhYmVsIHRleHQga2V5IGluIFRleHQgS2V5IHByb3BlcnR5LicpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICB9LFxuXG4gICAgb25Mb2FkICgpIHtcbiAgICAgICAgdGhpcy5fc3VwZXIoKTtcbiAgICAgICAgaWYgKHRoaXMubG9jYWxpemVkU3RyaW5nKSB7XG4gICAgICAgICAgICB0aGlzLnN0cmluZyA9IHRoaXMubG9jYWxpemVkU3RyaW5nO1xuICAgICAgICB9XG4gICAgfVxufSk7XG4iXX0=