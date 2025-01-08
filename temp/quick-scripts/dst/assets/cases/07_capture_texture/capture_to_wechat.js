
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/cases/07_capture_texture/capture_to_wechat.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '0ed55wVxhhB5p1/Ob9bQHCL', 'capture_to_wechat');
// cases/07_capture_texture/capture_to_wechat.js

"use strict";

cc.Class({
  "extends": require('./textureRenderUtils'),
  start: function start() {
    var _this = this;

    this.init(); // create the capture

    this.scheduleOnce(function () {
      var canvas = _this.createCanvas();

      _this.createImg();

      _this.saveFile(canvas);
    }, 1);
  },
  saveFile: function saveFile(tempCanvas) {
    // This is one of the ways that could save the img to your local.
    if (cc.sys.platform === cc.sys.WECHAT_GAME) {
      var self = this;
      var data = {
        x: 0,
        y: 0,
        width: canvas.width,
        height: canvas.height,
        // destination file sizes
        destWidth: canvas.width,
        destHeight: canvas.height,
        fileType: 'png',
        quality: 1
      }; // https://developers.weixin.qq.com/minigame/dev/api/render/canvas/Canvas.toTempFilePathSync.html

      var _tempFilePath = tempCanvas.toTempFilePathSync(data);

      cc.log("Capture file success!" + _tempFilePath);
      self.label.string = '图片加载完成，等待本地预览'; // https://developers.weixin.qq.com/minigame/dev/api/media/image/wx.previewImage.html

      wx.previewImage({
        urls: [_tempFilePath],
        success: function success(res) {
          cc.log('Preview image success.');
          self.label.string = '';
        }
      });
    } else {
      var _self = this;

      _self.label.string = '该样例只支持微信小游戏平台';
      cc.log('该样例只支持微信小游戏平台');
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9jYXNlcy8wN19jYXB0dXJlX3RleHR1cmUvY2FwdHVyZV90b193ZWNoYXQuanMiXSwibmFtZXMiOlsiY2MiLCJDbGFzcyIsInJlcXVpcmUiLCJzdGFydCIsImluaXQiLCJzY2hlZHVsZU9uY2UiLCJjYW52YXMiLCJjcmVhdGVDYW52YXMiLCJjcmVhdGVJbWciLCJzYXZlRmlsZSIsInRlbXBDYW52YXMiLCJzeXMiLCJwbGF0Zm9ybSIsIldFQ0hBVF9HQU1FIiwic2VsZiIsImRhdGEiLCJ4IiwieSIsIndpZHRoIiwiaGVpZ2h0IiwiZGVzdFdpZHRoIiwiZGVzdEhlaWdodCIsImZpbGVUeXBlIiwicXVhbGl0eSIsIl90ZW1wRmlsZVBhdGgiLCJ0b1RlbXBGaWxlUGF0aFN5bmMiLCJsb2ciLCJsYWJlbCIsInN0cmluZyIsInd4IiwicHJldmlld0ltYWdlIiwidXJscyIsInN1Y2Nlc3MiLCJyZXMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUFBLEVBQUUsQ0FBQ0MsS0FBSCxDQUFTO0VBQ0wsV0FBU0MsT0FBTyxDQUFDLHNCQUFELENBRFg7RUFHTEMsS0FISyxtQkFHSTtJQUFBOztJQUNMLEtBQUtDLElBQUwsR0FESyxDQUVMOztJQUNBLEtBQUtDLFlBQUwsQ0FBa0IsWUFBTTtNQUNwQixJQUFJQyxNQUFNLEdBQUcsS0FBSSxDQUFDQyxZQUFMLEVBQWI7O01BQ0EsS0FBSSxDQUFDQyxTQUFMOztNQUNBLEtBQUksQ0FBQ0MsUUFBTCxDQUFjSCxNQUFkO0lBQ0gsQ0FKRCxFQUlHLENBSkg7RUFLSCxDQVhJO0VBYUxHLFFBYkssb0JBYUtDLFVBYkwsRUFhaUI7SUFDbEI7SUFDQSxJQUFJVixFQUFFLENBQUNXLEdBQUgsQ0FBT0MsUUFBUCxLQUFvQlosRUFBRSxDQUFDVyxHQUFILENBQU9FLFdBQS9CLEVBQTRDO01BQ3hDLElBQUlDLElBQUksR0FBRyxJQUFYO01BQ0EsSUFBSUMsSUFBSSxHQUFHO1FBQ1BDLENBQUMsRUFBRSxDQURJO1FBRVBDLENBQUMsRUFBRSxDQUZJO1FBR1BDLEtBQUssRUFBRVosTUFBTSxDQUFDWSxLQUhQO1FBSVBDLE1BQU0sRUFBRWIsTUFBTSxDQUFDYSxNQUpSO1FBS1A7UUFDQUMsU0FBUyxFQUFFZCxNQUFNLENBQUNZLEtBTlg7UUFPUEcsVUFBVSxFQUFFZixNQUFNLENBQUNhLE1BUFo7UUFRUEcsUUFBUSxFQUFFLEtBUkg7UUFTUEMsT0FBTyxFQUFFO01BVEYsQ0FBWCxDQUZ3QyxDQWF4Qzs7TUFDQSxJQUFJQyxhQUFhLEdBQUdkLFVBQVUsQ0FBQ2Usa0JBQVgsQ0FBOEJWLElBQTlCLENBQXBCOztNQUNBZixFQUFFLENBQUMwQixHQUFILDJCQUErQkYsYUFBL0I7TUFDQVYsSUFBSSxDQUFDYSxLQUFMLENBQVdDLE1BQVgsR0FBb0IsZUFBcEIsQ0FoQndDLENBaUJ4Qzs7TUFDQUMsRUFBRSxDQUFDQyxZQUFILENBQWdCO1FBQ1pDLElBQUksRUFBRSxDQUFDUCxhQUFELENBRE07UUFFWlEsT0FBTyxFQUFFLGlCQUFDQyxHQUFELEVBQVM7VUFDZGpDLEVBQUUsQ0FBQzBCLEdBQUgsQ0FBTyx3QkFBUDtVQUNBWixJQUFJLENBQUNhLEtBQUwsQ0FBV0MsTUFBWCxHQUFvQixFQUFwQjtRQUNIO01BTFcsQ0FBaEI7SUFPSCxDQXpCRCxNQTBCSztNQUNELElBQUlkLEtBQUksR0FBRyxJQUFYOztNQUNBQSxLQUFJLENBQUNhLEtBQUwsQ0FBV0MsTUFBWCxHQUFvQixlQUFwQjtNQUNBNUIsRUFBRSxDQUFDMEIsR0FBSCxDQUFPLGVBQVA7SUFDSDtFQUNKO0FBOUNJLENBQVQiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImNjLkNsYXNzKHtcbiAgICBleHRlbmRzOiByZXF1aXJlKCcuL3RleHR1cmVSZW5kZXJVdGlscycpLFxuXG4gICAgc3RhcnQgKCkge1xuICAgICAgICB0aGlzLmluaXQoKTtcbiAgICAgICAgLy8gY3JlYXRlIHRoZSBjYXB0dXJlXG4gICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcbiAgICAgICAgICAgIGxldCBjYW52YXMgPSB0aGlzLmNyZWF0ZUNhbnZhcygpO1xuICAgICAgICAgICAgdGhpcy5jcmVhdGVJbWcoKTtcbiAgICAgICAgICAgIHRoaXMuc2F2ZUZpbGUoY2FudmFzKTtcbiAgICAgICAgfSwgMSk7XG4gICAgfSxcblxuICAgIHNhdmVGaWxlICh0ZW1wQ2FudmFzKSB7XG4gICAgICAgIC8vIFRoaXMgaXMgb25lIG9mIHRoZSB3YXlzIHRoYXQgY291bGQgc2F2ZSB0aGUgaW1nIHRvIHlvdXIgbG9jYWwuXG4gICAgICAgIGlmIChjYy5zeXMucGxhdGZvcm0gPT09IGNjLnN5cy5XRUNIQVRfR0FNRSkge1xuICAgICAgICAgICAgbGV0IHNlbGYgPSB0aGlzO1xuICAgICAgICAgICAgbGV0IGRhdGEgPSB7XG4gICAgICAgICAgICAgICAgeDogMCxcbiAgICAgICAgICAgICAgICB5OiAwLFxuICAgICAgICAgICAgICAgIHdpZHRoOiBjYW52YXMud2lkdGgsXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiBjYW52YXMuaGVpZ2h0LFxuICAgICAgICAgICAgICAgIC8vIGRlc3RpbmF0aW9uIGZpbGUgc2l6ZXNcbiAgICAgICAgICAgICAgICBkZXN0V2lkdGg6IGNhbnZhcy53aWR0aCxcbiAgICAgICAgICAgICAgICBkZXN0SGVpZ2h0OiBjYW52YXMuaGVpZ2h0LFxuICAgICAgICAgICAgICAgIGZpbGVUeXBlOiAncG5nJyxcbiAgICAgICAgICAgICAgICBxdWFsaXR5OiAxXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyBodHRwczovL2RldmVsb3BlcnMud2VpeGluLnFxLmNvbS9taW5pZ2FtZS9kZXYvYXBpL3JlbmRlci9jYW52YXMvQ2FudmFzLnRvVGVtcEZpbGVQYXRoU3luYy5odG1sXG4gICAgICAgICAgICBsZXQgX3RlbXBGaWxlUGF0aCA9IHRlbXBDYW52YXMudG9UZW1wRmlsZVBhdGhTeW5jKGRhdGEpO1xuICAgICAgICAgICAgY2MubG9nKGBDYXB0dXJlIGZpbGUgc3VjY2VzcyEke190ZW1wRmlsZVBhdGh9YCk7XG4gICAgICAgICAgICBzZWxmLmxhYmVsLnN0cmluZyA9ICflm77niYfliqDovb3lrozmiJDvvIznrYnlvoXmnKzlnLDpooTop4gnO1xuICAgICAgICAgICAgLy8gaHR0cHM6Ly9kZXZlbG9wZXJzLndlaXhpbi5xcS5jb20vbWluaWdhbWUvZGV2L2FwaS9tZWRpYS9pbWFnZS93eC5wcmV2aWV3SW1hZ2UuaHRtbFxuICAgICAgICAgICAgd3gucHJldmlld0ltYWdlKHtcbiAgICAgICAgICAgICAgICB1cmxzOiBbX3RlbXBGaWxlUGF0aF0sXG4gICAgICAgICAgICAgICAgc3VjY2VzczogKHJlcykgPT4ge1xuICAgICAgICAgICAgICAgICAgICBjYy5sb2coJ1ByZXZpZXcgaW1hZ2Ugc3VjY2Vzcy4nKTtcbiAgICAgICAgICAgICAgICAgICAgc2VsZi5sYWJlbC5zdHJpbmcgPSAnJztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGxldCBzZWxmID0gdGhpcztcbiAgICAgICAgICAgIHNlbGYubGFiZWwuc3RyaW5nID0gJ+ivpeagt+S+i+WPquaUr+aMgeW+ruS/oeWwj+a4uOaIj+W5s+WPsCc7XG4gICAgICAgICAgICBjYy5sb2coJ+ivpeagt+S+i+WPquaUr+aMgeW+ruS/oeWwj+a4uOaIj+W5s+WPsCcpO1xuICAgICAgICB9XG4gICAgfVxufSk7XG4iXX0=