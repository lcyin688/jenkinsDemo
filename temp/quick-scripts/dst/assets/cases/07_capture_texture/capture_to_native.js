
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/cases/07_capture_texture/capture_to_native.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'c1a65pebNpA27eOgsyL77g/', 'capture_to_native');
// cases/07_capture_texture/capture_to_native.js

"use strict";

cc.Class({
  "extends": require('./textureRenderUtils'),
  properties: {
    _width: 0,
    _height: 0
  },
  start: function start() {
    var _this = this;

    this.init(); // create the capture

    this.camera.enabled = true;
    this.schedule(function () {
      var picData = _this.initImage();

      _this.createCanvas(picData);

      _this.label.string = 'Showing the capture';

      _this.saveFile(picData);

      _this.camera.enabled = false;
    }, 1, 0);
  },
  // override
  initImage: function initImage() {
    var data = this.texture.readPixels();
    this._width = this.texture.width;
    this._height = this.texture.height;
    var picData = this.filpYImage(data, this._width, this._height);
    return picData;
  },
  // override init with Data
  createCanvas: function createCanvas(picData) {
    var _this2 = this;

    var texture = new cc.Texture2D();
    texture.initWithData(picData, 32, this._width, this._height);
    var spriteFrame = new cc.SpriteFrame();
    spriteFrame.setTexture(texture);
    var node = new cc.Node();
    var sprite = node.addComponent(cc.Sprite);
    sprite.spriteFrame = spriteFrame;
    node.zIndex = cc.macro.MAX_ZINDEX;
    node.parent = cc.director.getScene(); // set position

    var width = cc.winSize.width;
    var height = cc.winSize.height;
    node.x = width / 2;
    node.y = height / 2;
    node.on(cc.Node.EventType.TOUCH_START, function () {
      node.parent = null;
      _this2.label.string = '';
      node.destroy();
    });
    this.captureAction(node, width, height);
  },
  saveFile: function saveFile(picData) {
    if (CC_JSB) {
      var filePath = jsb.fileUtils.getWritablePath() + 'render_to_sprite_image.png';
      var success = jsb.saveImageData(picData, this._width, this._height, filePath);

      if (success) {
        cc.log("save image data success, file: " + filePath);
      } else {
        cc.error("save image data failed!");
      }
    }
  },
  // This is a temporary solution
  filpYImage: function filpYImage(data, width, height) {
    // create the data array
    var picData = new Uint8Array(width * height * 4);
    var rowBytes = width * 4;

    for (var row = 0; row < height; row++) {
      var srow = height - 1 - row;
      var start = srow * width * 4;
      var reStart = row * width * 4; // save the piexls data

      for (var i = 0; i < rowBytes; i++) {
        picData[reStart + i] = data[start + i];
      }
    }

    return picData;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9jYXNlcy8wN19jYXB0dXJlX3RleHR1cmUvY2FwdHVyZV90b19uYXRpdmUuanMiXSwibmFtZXMiOlsiY2MiLCJDbGFzcyIsInJlcXVpcmUiLCJwcm9wZXJ0aWVzIiwiX3dpZHRoIiwiX2hlaWdodCIsInN0YXJ0IiwiaW5pdCIsImNhbWVyYSIsImVuYWJsZWQiLCJzY2hlZHVsZSIsInBpY0RhdGEiLCJpbml0SW1hZ2UiLCJjcmVhdGVDYW52YXMiLCJsYWJlbCIsInN0cmluZyIsInNhdmVGaWxlIiwiZGF0YSIsInRleHR1cmUiLCJyZWFkUGl4ZWxzIiwid2lkdGgiLCJoZWlnaHQiLCJmaWxwWUltYWdlIiwiVGV4dHVyZTJEIiwiaW5pdFdpdGhEYXRhIiwic3ByaXRlRnJhbWUiLCJTcHJpdGVGcmFtZSIsInNldFRleHR1cmUiLCJub2RlIiwiTm9kZSIsInNwcml0ZSIsImFkZENvbXBvbmVudCIsIlNwcml0ZSIsInpJbmRleCIsIm1hY3JvIiwiTUFYX1pJTkRFWCIsInBhcmVudCIsImRpcmVjdG9yIiwiZ2V0U2NlbmUiLCJ3aW5TaXplIiwieCIsInkiLCJvbiIsIkV2ZW50VHlwZSIsIlRPVUNIX1NUQVJUIiwiZGVzdHJveSIsImNhcHR1cmVBY3Rpb24iLCJDQ19KU0IiLCJmaWxlUGF0aCIsImpzYiIsImZpbGVVdGlscyIsImdldFdyaXRhYmxlUGF0aCIsInN1Y2Nlc3MiLCJzYXZlSW1hZ2VEYXRhIiwibG9nIiwiZXJyb3IiLCJVaW50OEFycmF5Iiwicm93Qnl0ZXMiLCJyb3ciLCJzcm93IiwicmVTdGFydCIsImkiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUFBLEVBQUUsQ0FBQ0MsS0FBSCxDQUFTO0VBQ0wsV0FBU0MsT0FBTyxDQUFDLHNCQUFELENBRFg7RUFHTEMsVUFBVSxFQUFFO0lBQ1JDLE1BQU0sRUFBRSxDQURBO0lBRVJDLE9BQU8sRUFBRTtFQUZELENBSFA7RUFRTEMsS0FSSyxtQkFRSTtJQUFBOztJQUNMLEtBQUtDLElB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QUFLQyxPQUE3QyxFQUFzRDJDLFFBQXRELENBQWQ7O01BQ0EsSUFBSUksT0FBSixFQUFhO1FBQ1RwRCxFQUFFLENBQUNzRCxHQUFILENBQU8sb0NBQW9DTixRQUEzQztNQUNILENBRkQsTUFHSztRQUNEaEQsRUFBRSxDQUFDdUQsS0FBSCxDQUFTLHlCQUFUO01BQ0g7SUFDSjtFQUNKLENBdEVJO0VBd0VMO0VBQ0FqQyxVQXpFSyxzQkF5RU9MLElBekVQLEVBeUVhRyxLQXpFYixFQXlFb0JDLE1BekVwQixFQXlFNEI7SUFDN0I7SUFDQSxJQUFJVixPQUFPLEdBQUcsSUFBSTZDLFVBQUosQ0FBZXBDLEtBQUssR0FBR0MsTUFBUixHQUFpQixDQUFoQyxDQUFkO0lBQ0EsSUFBSW9DLFFBQVEsR0FBR3JDLEtBQUssR0FBRyxDQUF2Qjs7SUFDQSxLQUFLLElBQUlzQyxHQUFHLEdBQUcsQ0FBZixFQUFrQkEsR0FBRyxHQUFHckMsTUFBeEIsRUFBZ0NxQyxHQUFHLEVBQW5DLEVBQXVDO01BQ25DLElBQUlDLElBQUksR0FBR3RDLE1BQU0sR0FBRyxDQUFULEdBQWFxQyxHQUF4QjtNQUNBLElBQUlwRCxLQUFLLEdBQUdxRCxJQUFJLEdBQUd2QyxLQUFQLEdBQWUsQ0FBM0I7TUFDQSxJQUFJd0MsT0FBTyxHQUFHRixHQUFHLEdBQUd0QyxLQUFOLEdBQWMsQ0FBNUIsQ0FIbUMsQ0FJbkM7O01BQ0EsS0FBSyxJQUFJeUMsQ0FBQyxHQUFHLENBQWIsRUFBZ0JBLENBQUMsR0FBR0osUUFBcEIsRUFBOEJJLENBQUMsRUFBL0IsRUFBbUM7UUFDL0JsRCxPQUFPLENBQUNpRCxPQUFPLEdBQUdDLENBQVgsQ0FBUCxHQUF1QjVDLElBQUksQ0FBQ1gsS0FBSyxHQUFHdUQsQ0FBVCxDQUEzQjtNQUNIO0lBQ0o7O0lBQ0QsT0FBT2xELE9BQVA7RUFDSDtBQXZGSSxDQUFUIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJjYy5DbGFzcyh7XG4gICAgZXh0ZW5kczogcmVxdWlyZSgnLi90ZXh0dXJlUmVuZGVyVXRpbHMnKSxcblxuICAgIHByb3BlcnRpZXM6IHtcbiAgICAgICAgX3dpZHRoOiAwLFxuICAgICAgICBfaGVpZ2h0OiAwXG4gICAgfSxcblxuICAgIHN0YXJ0ICgpIHtcbiAgICAgICAgdGhpcy5pbml0KCk7XG4gICAgICAgIC8vIGNyZWF0ZSB0aGUgY2FwdHVyZVxuICAgICAgICB0aGlzLmNhbWVyYS5lbmFibGVkID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5zY2hlZHVsZSgoKSA9PiB7XG4gICAgICAgICAgICBsZXQgcGljRGF0YSA9IHRoaXMuaW5pdEltYWdlKCk7XG4gICAgICAgICAgICB0aGlzLmNyZWF0ZUNhbnZhcyhwaWNEYXRhKTtcbiAgICAgICAgICAgIHRoaXMubGFiZWwuc3RyaW5nID0gJ1Nob3dpbmcgdGhlIGNhcHR1cmUnXG4gICAgICAgICAgICB0aGlzLnNhdmVGaWxlKHBpY0RhdGEpO1xuICAgICAgICAgICAgdGhpcy5jYW1lcmEuZW5hYmxlZCA9IGZhbHNlO1xuICAgICAgICB9LCAxLCAwKTtcbiAgICB9LFxuICAgIFxuICAgIC8vIG92ZXJyaWRlXG4gICAgaW5pdEltYWdlICgpIHtcbiAgICAgICAgbGV0IGRhdGEgPSB0aGlzLnRleHR1cmUucmVhZFBpeGVscygpO1xuICAgICAgICB0aGlzLl93aWR0aCA9IHRoaXMudGV4dHVyZS53aWR0aDtcbiAgICAgICAgdGhpcy5faGVpZ2h0ID0gdGhpcy50ZXh0dXJlLmhlaWdodDtcbiAgICAgICAgbGV0IHBpY0RhdGEgPSB0aGlzLmZpbHBZSW1hZ2UoZGF0YSwgdGhpcy5fd2lkdGgsIHRoaXMuX2hlaWdodCk7XG4gICAgICAgIHJldHVybiBwaWNEYXRhO1xuICAgIH0sXG5cbiAgICAvLyBvdmVycmlkZSBpbml0IHdpdGggRGF0YVxuICAgIGNyZWF0ZUNhbnZhcyAocGljRGF0YSkge1xuICAgICAgICBsZXQgdGV4dHVyZSA9IG5ldyBjYy5UZXh0dXJlMkQoKTtcbiAgICAgICAgdGV4dHVyZS5pbml0V2l0aERhdGEocGljRGF0YSwgMzIsIHRoaXMuX3dpZHRoLCB0aGlzLl9oZWlnaHQpO1xuXG4gICAgICAgIGxldCBzcHJpdGVGcmFtZSA9IG5ldyBjYy5TcHJpdGVGcmFtZSgpO1xuICAgICAgICBzcHJpdGVGcmFtZS5zZXRUZXh0dXJlKHRleHR1cmUpO1xuXG4gICAgICAgIGxldCBub2RlID0gbmV3IGNjLk5vZGUoKTtcbiAgICAgICAgbGV0IHNwcml0ZSA9IG5vZGUuYWRkQ29tcG9uZW50KGNjLlNwcml0ZSk7XG4gICAgICAgIHNwcml0ZS5zcHJpdGVGcmFtZSA9IHNwcml0ZUZyYW1lO1xuXG4gICAgICAgIG5vZGUuekluZGV4ID0gY2MubWFjcm8uTUFYX1pJTkRFWDtcbiAgICAgICAgbm9kZS5wYXJlbnQgPSBjYy5kaXJlY3Rvci5nZXRTY2VuZSgpO1xuICAgICAgICAvLyBzZXQgcG9zaXRpb25cbiAgICAgICAgbGV0IHdpZHRoID0gY2Mud2luU2l6ZS53aWR0aDtcbiAgICAgICAgbGV0IGhlaWdodCA9IGNjLndpblNpemUuaGVpZ2h0O1xuICAgICAgICBub2RlLnggPSB3aWR0aCAvIDI7XG4gICAgICAgIG5vZGUueSA9IGhlaWdodCAvIDI7XG4gICAgICAgIG5vZGUub24oY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfU1RBUlQsICgpID0+IHtcbiAgICAgICAgICAgIG5vZGUucGFyZW50ID0gbnVsbDtcbiAgICAgICAgICAgIHRoaXMubGFiZWwuc3RyaW5nID0gJyc7XG4gICAgICAgICAgICBub2RlLmRlc3Ryb3koKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgdGhpcy5jYXB0dXJlQWN0aW9uKG5vZGUsIHdpZHRoLCBoZWlnaHQpO1xuICAgIH0sXG5cbiAgICBzYXZlRmlsZSAocGljRGF0YSkge1xuICAgICAgICBpZiAoQ0NfSlNCKSB7XG4gICAgICAgICAgICBsZXQgZmlsZVBhdGggPSBqc2IuZmlsZVV0aWxzLmdldFdyaXRhYmxlUGF0aCgpICsgJ3JlbmRlcl90b19zcHJpdGVfaW1hZ2UucG5nJztcblxuICAgICAgICAgICAgbGV0IHN1Y2Nlc3MgPSBqc2Iuc2F2ZUltYWdlRGF0YShwaWNEYXRhLCB0aGlzLl93aWR0aCwgdGhpcy5faGVpZ2h0LCBmaWxlUGF0aClcbiAgICAgICAgICAgIGlmIChzdWNjZXNzKSB7XG4gICAgICAgICAgICAgICAgY2MubG9nKFwic2F2ZSBpbWFnZSBkYXRhIHN1Y2Nlc3MsIGZpbGU6IFwiICsgZmlsZVBhdGgpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgY2MuZXJyb3IoXCJzYXZlIGltYWdlIGRhdGEgZmFpbGVkIVwiKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH0sXG5cbiAgICAvLyBUaGlzIGlzIGEgdGVtcG9yYXJ5IHNvbHV0aW9uXG4gICAgZmlscFlJbWFnZSAoZGF0YSwgd2lkdGgsIGhlaWdodCkge1xuICAgICAgICAvLyBjcmVhdGUgdGhlIGRhdGEgYXJyYXlcbiAgICAgICAgbGV0IHBpY0RhdGEgPSBuZXcgVWludDhBcnJheSh3aWR0aCAqIGhlaWdodCAqIDQpO1xuICAgICAgICBsZXQgcm93Qnl0ZXMgPSB3aWR0aCAqIDQ7XG4gICAgICAgIGZvciAobGV0IHJvdyA9IDA7IHJvdyA8IGhlaWdodDsgcm93KyspIHtcbiAgICAgICAgICAgIGxldCBzcm93ID0gaGVpZ2h0IC0gMSAtIHJvdztcbiAgICAgICAgICAgIGxldCBzdGFydCA9IHNyb3cgKiB3aWR0aCAqIDQ7XG4gICAgICAgICAgICBsZXQgcmVTdGFydCA9IHJvdyAqIHdpZHRoICogNDtcbiAgICAgICAgICAgIC8vIHNhdmUgdGhlIHBpZXhscyBkYXRhXG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHJvd0J5dGVzOyBpKyspIHtcbiAgICAgICAgICAgICAgICBwaWNEYXRhW3JlU3RhcnQgKyBpXSA9IGRhdGFbc3RhcnQgKyBpXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcGljRGF0YTtcbiAgICB9XG59KTsgXG4iXX0=