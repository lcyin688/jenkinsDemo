
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/cases/05_scripting/10_network/downloader-web/downloader-picture.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '3d00dQT3HNGKavyQVCwTT1h', 'downloader-picture');
// cases/05_scripting/10_network/downloader-web/downloader-picture.js

"use strict";

var i18n = require('i18n');

cc.Class({
  "extends": cc.Component,
  properties: {
    remindLabel: {
      "default": null,
      type: cc.Label
    },
    inputUrlBox: {
      "default": null,
      type: cc.EditBox
    },
    picNode: {
      "default": null,
      type: cc.Sprite
    },
    _picUrl: 'http://tools.itharbors.com/christmas/res/tree.png'
  },
  onLoad: function onLoad() {
    this.remindLabel.textKey = '';
  },
  startLoad: function startLoad() {
    // set url
    this._picUrl = this.inputUrlBox.string; // download pic

    if (this._picUrl) {
      cc.assetManager.loadRemote(this._picUrl, this.picLoadComplete.bind(this));
      this.remindLabel.textKey = i18n.t('cases/05_scripting/11_network/download-web.fire.2');
    } else {
      this.remindLabel.textKey = i18n.t('cases/05_scripting/11_network/download-web.fire.10');
    }
  },
  picLoadComplete: function picLoadComplete(err, res) {
    if (err || !res) {
      console.log(err);
      this.remindLabel.textKey = i18n.t('cases/05_scripting/11_network/download-web.fire.5.2');
      return;
    }

    this.remindLabel.textKey = i18n.t('cases/05_scripting/11_network/download-web.fire.4.2');
    var spriteFrame = new cc.SpriteFrame(res);
    this.picNode.spriteFrame = spriteFrame;
    this.picNode.node.active = true;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9jYXNlcy8wNV9zY3JpcHRpbmcvMTBfbmV0d29yay9kb3dubG9hZGVyLXdlYi9kb3dubG9hZGVyLXBpY3R1cmUuanMiXSwibmFtZXMiOlsiaTE4biIsInJlcXVpcmUiLCJjYyIsIkNsYXNzIiwiQ29tcG9uZW50IiwicHJvcGVydGllcyIsInJlbWluZExhYmVsIiwidHlwZSIsIkxhYmVsIiwiaW5wdXRVcmxCb3giLCJFZGl0Qm94IiwicGljTm9kZSIsIlNwcml0ZSIsIl9waWNVcmwiLCJvbkxvYWQiLCJ0ZXh0S2V5Iiwic3RhcnRMb2FkIiwic3RyaW5nIiwiYXNzZXRNYW5hZ2VyIiwibG9hZFJlbW90ZSIsInBpY0xvYWRDb21wbGV0ZSIsImJpbmQiLCJ0IiwiZXJyIiwicmVzIiwiY29uc29sZSIsImxvZyIsInNwcml0ZUZyYW1lIiwiU3ByaXRlRnJhbWUiLCJub2RlIiwiYWN0aXZlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLElBQU1BLElBQUksR0FBR0MsT0FBTyxDQUFDLE1BQUQsQ0FBcEI7O0FBRUFDLEVBQUUsQ0FBQ0MsS0FBSCxDQUFTO0VBQ0wsV0FBU0QsRUFBRSxDQUFDRSxTQURQO0VBR0xDLFVBQVUsRUFBRTtJQUNSQyxXQUFXLEVBQUU7TUFDVCxXQUFTLElBREE7TUFFVEMsSUFBSSxFQUFFTCxFQUFFLENBQUNNO0lBRkEsQ0FETDtJQUtSQyxXQUFXLEVBQUU7TUFDVCxXQUFTLElBREE7TUFFVEYsSUFBSSxFQUFFTCxFQUFFLENBQUNRO0lBRkEsQ0FMTDtJQVNSQyxPQUFPLEVBQUU7TUFDTCxXQUFTLElBREo7TUFFTEosSUFBSSxFQUFFTCxFQUFFLENBQUNVO0lBRkosQ0FURDtJQWFSQyxPQUFPLEVBQUU7RUFiRCxDQUhQO0VBbUJMQyxNQW5CSyxvQkFtQks7SUFDTixLQUFLUixXQUFMLENBQWlCUyxPQUFqQixHQUEyQixFQUEzQjtFQUNILENBckJJO0VBdUJMQyxTQXZCSyx1QkF1QlE7SUFDVDtJQUNBLEtBQUtILE9BQUwsR0FBZSxLQUFLSixXQUFMLENBQWlCUSxNQUFoQyxDQUZTLENBR1Q7O0lBQ0EsSUFBSSxLQUFLSixPQUFULEVBQWtCO01BQ2RYLEVBQUUsQ0FBQ2dCLFlBQUgsQ0FBZ0JDLFVBQWhCLENBQTJCLEtBQUtOLE9BQWhDLEVBQXlDLEtBQUtPLGVBQUwsQ0FBcUJDLElBQXJCLENBQTBCLElBQTFCLENBQXpDO01BQ0EsS0FBS2YsV0FBTCxDQUFpQlMsT0FBakIsR0FBMkJmLElBQUksQ0FBQ3NCLENBQUwsQ0FBTyxtREFBUCxDQUEzQjtJQUNILENBSEQsTUFJSztNQUNELEtBQUtoQixXQUFMLENBQWlCUyxPQUFqQixHQUEyQmYsSUFBSSxDQUFDc0IsQ0FBTCxDQUFPLG9EQUFQLENBQTNCO0lBQ0g7RUFDSixDQWxDSTtFQW9DTEYsZUFwQ0ssMkJBb0NZRyxHQXBDWixFQW9DaUJDLEdBcENqQixFQW9Dc0I7SUFDdkIsSUFBSUQsR0FBRyxJQUFJLENBQUNDLEdBQVosRUFBaUI7TUFDYkMsT0FBTyxDQUFDQyxHQUFSLENBQVlILEdBQVo7TUFDQSxLQUFLakIsV0FBTCxDQUFpQlMsT0FBakIsR0FBNEJmLElBQUksQ0FBQ3NCLENBQUwsQ0FBTyxxREFBUCxDQUE1QjtNQUNBO0lBQ0g7O0lBRUQsS0FBS2hCLFdBQUwsQ0FBaUJTLE9BQWpCLEdBQTJCZixJQUFJLENBQUNzQixDQUFMLENBQU8scURBQVAsQ0FBM0I7SUFFQSxJQUFJSyxXQUFXLEdBQUcsSUFBSXpCLEVBQUUsQ0FBQzBCLFdBQVAsQ0FBbUJKLEdBQW5CLENBQWxCO0lBQ0EsS0FBS2IsT0FBTCxDQUFhZ0IsV0FBYixHQUEyQkEsV0FBM0I7SUFDQSxLQUFLaEIsT0FBTCxDQUFha0IsSUFBYixDQUFrQkMsTUFBbEIsR0FBMkIsSUFBM0I7RUFDSDtBQWhESSxDQUFUIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBpMThuID0gcmVxdWlyZSgnaTE4bicpO1xuXG5jYy5DbGFzcyh7XG4gICAgZXh0ZW5kczogY2MuQ29tcG9uZW50LFxuXG4gICAgcHJvcGVydGllczoge1xuICAgICAgICByZW1pbmRMYWJlbDoge1xuICAgICAgICAgICAgZGVmYXVsdDogbnVsbCxcbiAgICAgICAgICAgIHR5cGU6IGNjLkxhYmVsXG4gICAgICAgIH0sXG4gICAgICAgIGlucHV0VXJsQm94OiB7XG4gICAgICAgICAgICBkZWZhdWx0OiBudWxsLFxuICAgICAgICAgICAgdHlwZTogY2MuRWRpdEJveFxuICAgICAgICB9LFxuICAgICAgICBwaWNOb2RlOiB7XG4gICAgICAgICAgICBkZWZhdWx0OiBudWxsLFxuICAgICAgICAgICAgdHlwZTogY2MuU3ByaXRlXG4gICAgICAgIH0sXG4gICAgICAgIF9waWNVcmw6ICdodHRwOi8vdG9vbHMuaXRoYXJib3JzLmNvbS9jaHJpc3RtYXMvcmVzL3RyZWUucG5nJ1xuICAgIH0sXG5cbiAgICBvbkxvYWQgKCkge1xuICAgICAgICB0aGlzLnJlbWluZExhYmVsLnRleHRLZXkgPSAnJztcbiAgICB9LFxuXG4gICAgc3RhcnRMb2FkICgpIHtcbiAgICAgICAgLy8gc2V0IHVybFxuICAgICAgICB0aGlzLl9waWNVcmwgPSB0aGlzLmlucHV0VXJsQm94LnN0cmluZztcbiAgICAgICAgLy8gZG93bmxvYWQgcGljXG4gICAgICAgIGlmICh0aGlzLl9waWNVcmwpIHtcbiAgICAgICAgICAgIGNjLmFzc2V0TWFuYWdlci5sb2FkUmVtb3RlKHRoaXMuX3BpY1VybCwgdGhpcy5waWNMb2FkQ29tcGxldGUuYmluZCh0aGlzKSk7XG4gICAgICAgICAgICB0aGlzLnJlbWluZExhYmVsLnRleHRLZXkgPSBpMThuLnQoJ2Nhc2VzLzA1X3NjcmlwdGluZy8xMV9uZXR3b3JrL2Rvd25sb2FkLXdlYi5maXJlLjInKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMucmVtaW5kTGFiZWwudGV4dEtleSA9IGkxOG4udCgnY2FzZXMvMDVfc2NyaXB0aW5nLzExX25ldHdvcmsvZG93bmxvYWQtd2ViLmZpcmUuMTAnKTtcbiAgICAgICAgfVxuICAgIH0sXG5cbiAgICBwaWNMb2FkQ29tcGxldGUgKGVyciwgcmVzKSB7XG4gICAgICAgIGlmIChlcnIgfHwgIXJlcykge1xuICAgICAgICAgICAgY29uc29sZS5sb2coZXJyKTtcbiAgICAgICAgICAgIHRoaXMucmVtaW5kTGFiZWwudGV4dEtleSA9ICBpMThuLnQoJ2Nhc2VzLzA1X3NjcmlwdGluZy8xMV9uZXR3b3JrL2Rvd25sb2FkLXdlYi5maXJlLjUuMicpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5yZW1pbmRMYWJlbC50ZXh0S2V5ID0gaTE4bi50KCdjYXNlcy8wNV9zY3JpcHRpbmcvMTFfbmV0d29yay9kb3dubG9hZC13ZWIuZmlyZS40LjInKTtcblxuICAgICAgICBsZXQgc3ByaXRlRnJhbWUgPSBuZXcgY2MuU3ByaXRlRnJhbWUocmVzKTtcbiAgICAgICAgdGhpcy5waWNOb2RlLnNwcml0ZUZyYW1lID0gc3ByaXRlRnJhbWU7XG4gICAgICAgIHRoaXMucGljTm9kZS5ub2RlLmFjdGl2ZSA9IHRydWU7XG4gICAgfVxuXG59KTtcbiJdfQ==