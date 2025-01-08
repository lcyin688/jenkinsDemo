
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/cases/07_capture_texture/textureRenderUtils.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'a886773x+pEaJGtwGtEiE9q', 'textureRenderUtils');
// cases/07_capture_texture/textureRenderUtils.js

"use strict";

cc.Class({
  "extends": cc.Component,
  properties: {
    camera: cc.Camera,
    label: cc.Label,
    _canvas: null
  },
  init: function init() {
    this.label.string = '';
    var texture = new cc.RenderTexture();
    texture.initWithSize(cc.visibleRect.width, cc.visibleRect.height, cc.gfx.RB_FMT_S8);
    this.camera.targetTexture = texture;
    this.texture = texture;
  },
  // create the img element
  createImg: function createImg() {
    // return the type and dataUrl
    var dataURL = this._canvas.toDataURL("image/png");

    var img = document.createElement("img");
    img.src = dataURL;
    return img;
  },
  // create the canvas and context, filpY the image Data
  createCanvas: function createCanvas() {
    var width = this.texture.width;
    var height = this.texture.height;

    if (!this._canvas) {
      this._canvas = document.createElement('canvas');
      this._canvas.width = width;
      this._canvas.height = height;
    } else {
      this.clearCanvas();
    }

    var ctx = this._canvas.getContext('2d');

    this.camera.render();
    var data = this.texture.readPixels(); // write the render data

    var rowBytes = width * 4;

    for (var row = 0; row < height; row++) {
      var srow = height - 1 - row;
      var imageData = ctx.createImageData(width, 1);
      var start = srow * width * 4;

      for (var i = 0; i < rowBytes; i++) {
        imageData.data[i] = data[start + i];
      }

      ctx.putImageData(imageData, 0, row);
    }

    return this._canvas;
  },
  // show on the canvas
  showImage: function showImage(img) {
    var _this = this;

    var texture = new cc.Texture2D();
    texture.initWithElement(img);
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
      _this.label.string = '';
      node.destroy();
    });
    this.captureAction(node, width, height);
  },
  // sprite action
  captureAction: function captureAction(capture, width, height) {
    var scaleAction = cc.scaleTo(1, 0.3);
    var targetPos = cc.v2(width - width / 6, height / 4);
    var moveAction = cc.moveTo(1, targetPos);
    var spawn = cc.spawn(scaleAction, moveAction);
    capture.runAction(spawn);
    var blinkAction = cc.blink(0.1, 1); // scene action

    this.node.runAction(blinkAction);
  },
  clearCanvas: function clearCanvas() {
    var ctx = this._canvas.getContext('2d');

    ctx.clearRect(0, 0, this._canvas.width, this._canvas.height);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9jYXNlcy8wN19jYXB0dXJlX3RleHR1cmUvdGV4dHVyZVJlbmRlclV0aWxzLmpzIl0sIm5hbWVzIjpbImNjIiwiQ2xhc3MiLCJDb21wb25lbnQiLCJwcm9wZXJ0aWVzIiwiY2FtZXJhIiwiQ2FtZXJhIiwibGFiZWwiLCJMYWJlbCIsIl9jYW52YXMiLCJpbml0Iiwic3RyaW5nIiwidGV4dHVyZSIsIlJlbmRlclRleHR1cmUiLCJpbml0V2l0aFNpemUiLCJ2aXNpYmxlUmVjdCIsIndpZHRoIiwiaGVpZ2h0IiwiZ2Z4IiwiUkJfRk1UX1M4IiwidGFyZ2V0VGV4dHVyZSIsImNyZWF0ZUltZyIsImRhdGFVUkwiLCJ0b0RhdGFVUkwiLCJpbWciLCJkb2N1bWVudCIsImNyZWF0ZUVsZW1lbnQiLCJzcmMiLCJjcmVhdGVDYW52YXMiLCJjbGVhckNhbnZhcyIsImN0eCIsImdldENvbnRleHQiLCJyZW5kZXIiLCJkYXRhIiwicmVhZFBpeGVscyIsInJvd0J5dGVzIiwicm93Iiwic3JvdyIsImltYWdlRGF0YSIsImNyZWF0ZUltYWdlRGF0YSIsInN0YXJ0IiwiaSIsInB1dEltYWdlRGF0YSIsInNob3dJbWFnZSIsIlRleHR1cmUyRCIsImluaXRXaXRoRWxlbWVudCIsInNwcml0ZUZyYW1lIiwiU3ByaXRlRnJhbWUiLCJzZXRUZXh0dXJlIiwibm9kZSIsIk5vZGUiLCJzcHJpdGUiLCJhZGRDb21wb25lbnQiLCJTcHJpdGUiLCJ6SW5kZXgiLCJtYWNybyIsIk1BWF9aSU5ERVgiLCJwYXJlbnQiLCJkaXJlY3RvciIsImdldFNjZW5lIiwid2luU2l6ZSIsIngiLCJ5Iiwib24iLCJFdmVudFR5cGUiLCJUT1VDSF9TVEFSVCIsImRlc3Ryb3kiLCJjYXB0dXJlQWN0aW9uIiwiY2FwdHVyZSIsInNjYWxlQWN0aW9uIiwic2NhbGVUbyIsInRhcmdldFBvcyIsInYyIiwibW92ZUFjdGlvbiIsIm1vdmVUbyIsInNwYXduIiwicnVuQWN0aW9uIiwiYmxpbmtBY3Rpb24iLCJi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QWdDQyxNQUFoQztFQUNILENBakZJO0VBa0ZMO0VBQ0FrRCxhQW5GSyx5QkFtRlVDLE9BbkZWLEVBbUZtQnBELEtBbkZuQixFQW1GMEJDLE1BbkYxQixFQW1Ga0M7SUFDbkMsSUFBSW9ELFdBQVcsR0FBR3BFLEVBQUUsQ0FBQ3FFLE9BQUgsQ0FBVyxDQUFYLEVBQWEsR0FBYixDQUFsQjtJQUNBLElBQUlDLFNBQVMsR0FBR3RFLEVBQUUsQ0FBQ3VFLEVBQUgsQ0FBTXhELEtBQUssR0FBR0EsS0FBSyxHQUFHLENBQXRCLEVBQTBCQyxNQUFNLEdBQUcsQ0FBbkMsQ0FBaEI7SUFDQSxJQUFJd0QsVUFBVSxHQUFHeEUsRUFBRSxDQUFDeUUsTUFBSCxDQUFVLENBQVYsRUFBYUgsU0FBYixDQUFqQjtJQUNBLElBQUlJLEtBQUssR0FBRzFFLEVBQUUsQ0FBQzBFLEtBQUgsQ0FBU04sV0FBVCxFQUFzQkksVUFBdEIsQ0FBWjtJQUNBTCxPQUFPLENBQUNRLFNBQVIsQ0FBa0JELEtBQWxCO0lBQ0EsSUFBSUUsV0FBVyxHQUFHNUUsRUFBRSxDQUFDNkUsS0FBSCxDQUFTLEdBQVQsRUFBYyxDQUFkLENBQWxCLENBTm1DLENBT25DOztJQUNBLEtBQUs3QixJQUFMLENBQVUyQixTQUFWLENBQW9CQyxXQUFwQjtFQUNILENBNUZJO0VBOEZMaEQsV0E5RksseUJBOEZVO0lBQ1gsSUFBSUMsR0FBRyxHQUFHLEtBQUtyQixPQUFMLENBQWFzQixVQUFiLENBQXdCLElBQXhCLENBQVY7O0lBQ0FELEdBQUcsQ0FBQ2lELFNBQUosQ0FBYyxDQUFkLEVBQWlCLENBQWpCLEVBQW9CLEtBQUt0RSxPQUFMLENBQWFPLEtBQWpDLEVBQXdDLEtBQUtQLE9BQUwsQ0FBYVEsTUFBckQ7RUFDSDtBQWpHSSxDQUFUIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJjYy5DbGFzcyh7XG4gICAgZXh0ZW5kczogY2MuQ29tcG9uZW50LFxuXG4gICAgcHJvcGVydGllczoge1xuICAgICAgICBjYW1lcmE6IGNjLkNhbWVyYSxcbiAgICAgICAgbGFiZWw6IGNjLkxhYmVsLFxuICAgICAgICBfY2FudmFzOiBudWxsXG4gICAgfSxcblxuICAgIGluaXQgKCkge1xuICAgICAgICB0aGlzLmxhYmVsLnN0cmluZyA9ICcnO1xuICAgICAgICBsZXQgdGV4dHVyZSA9IG5ldyBjYy5SZW5kZXJUZXh0dXJlKCk7XG4gICAgICAgIHRleHR1cmUuaW5pdFdpdGhTaXplKGNjLnZpc2libGVSZWN0LndpZHRoLCBjYy52aXNpYmxlUmVjdC5oZWlnaHQsIGNjLmdmeC5SQl9GTVRfUzgpO1xuICAgICAgICB0aGlzLmNhbWVyYS50YXJnZXRUZXh0dXJlID0gdGV4dHVyZTtcbiAgICAgICAgdGhpcy50ZXh0dXJlID0gdGV4dHVyZTtcbiAgICB9LFxuICAgIC8vIGNyZWF0ZSB0aGUgaW1nIGVsZW1lbnRcbiAgICBjcmVhdGVJbWcgKCkge1xuICAgICAgICAvLyByZXR1cm4gdGhlIHR5cGUgYW5kIGRhdGFVcmxcbiAgICAgICAgdmFyIGRhdGFVUkwgPSB0aGlzLl9jYW52YXMudG9EYXRhVVJMKFwiaW1hZ2UvcG5nXCIpO1xuICAgICAgICB2YXIgaW1nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKTtcbiAgICAgICAgaW1nLnNyYyA9IGRhdGFVUkw7XG4gICAgICAgIHJldHVybiBpbWc7XG4gICAgfSxcbiAgICAvLyBjcmVhdGUgdGhlIGNhbnZhcyBhbmQgY29udGV4dCwgZmlscFkgdGhlIGltYWdlIERhdGFcbiAgICBjcmVhdGVDYW52YXMgKCkge1xuICAgICAgICBsZXQgd2lkdGggPSB0aGlzLnRleHR1cmUud2lkdGg7XG4gICAgICAgIGxldCBoZWlnaHQgPSB0aGlzLnRleHR1cmUuaGVpZ2h0O1xuICAgICAgICBpZiAoIXRoaXMuX2NhbnZhcykge1xuICAgICAgICAgICAgdGhpcy5fY2FudmFzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnY2FudmFzJyk7XG5cbiAgICAgICAgICAgIHRoaXMuX2NhbnZhcy53aWR0aCA9IHdpZHRoO1xuICAgICAgICAgICAgdGhpcy5fY2FudmFzLmhlaWdodCA9IGhlaWdodDtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuY2xlYXJDYW52YXMoKTtcbiAgICAgICAgfVxuICAgICAgICBsZXQgY3R4ID0gdGhpcy5fY2FudmFzLmdldENvbnRleHQoJzJkJyk7XG4gICAgICAgIHRoaXMuY2FtZXJhLnJlbmRlcigpO1xuICAgICAgICBsZXQgZGF0YSA9IHRoaXMudGV4dHVyZS5yZWFkUGl4ZWxzKCk7XG4gICAgICAgIC8vIHdyaXRlIHRoZSByZW5kZXIgZGF0YVxuICAgICAgICBsZXQgcm93Qnl0ZXMgPSB3aWR0aCAqIDQ7IFxuICAgICAgICBmb3IgKGxldCByb3cgPSAwOyByb3cgPCBoZWlnaHQ7IHJvdysrKSB7XG4gICAgICAgICAgICBsZXQgc3JvdyA9IGhlaWdodCAtIDEgLSByb3c7XG4gICAgICAgICAgICBsZXQgaW1hZ2VEYXRhID0gY3R4LmNyZWF0ZUltYWdlRGF0YSh3aWR0aCwgMSk7XG4gICAgICAgICAgICBsZXQgc3RhcnQgPSBzcm93ICogd2lkdGggKiA0O1xuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCByb3dCeXRlczsgaSsrKSB7XG4gICAgICAgICAgICAgICAgaW1hZ2VEYXRhLmRhdGFbaV0gPSBkYXRhW3N0YXJ0ICsgaV07XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGN0eC5wdXRJbWFnZURhdGEoaW1hZ2VEYXRhLCAwLCByb3cpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzLl9jYW52YXM7XG4gICAgfSxcbiAgICBcbiAgICAvLyBzaG93IG9uIHRoZSBjYW52YXNcbiAgICBzaG93SW1hZ2UgKGltZykge1xuICAgICAgICBsZXQgdGV4dHVyZSA9IG5ldyBjYy5UZXh0dXJlMkQoKTtcbiAgICAgICAgdGV4dHVyZS5pbml0V2l0aEVsZW1lbnQoaW1nKTtcblxuICAgICAgICBsZXQgc3ByaXRlRnJhbWUgPSBuZXcgY2MuU3ByaXRlRnJhbWUoKTtcbiAgICAgICAgc3ByaXRlRnJhbWUuc2V0VGV4dHVyZSh0ZXh0dXJlKTtcblxuICAgICAgICBsZXQgbm9kZSA9IG5ldyBjYy5Ob2RlKCk7XG4gICAgICAgIGxldCBzcHJpdGUgPSBub2RlLmFkZENvbXBvbmVudChjYy5TcHJpdGUpO1xuICAgICAgICBzcHJpdGUuc3ByaXRlRnJhbWUgPSBzcHJpdGVGcmFtZTtcblxuICAgICAgICBub2RlLnpJbmRleCA9IGNjLm1hY3JvLk1BWF9aSU5ERVg7XG4gICAgICAgIG5vZGUucGFyZW50ID0gY2MuZGlyZWN0b3IuZ2V0U2NlbmUoKTtcbiAgICAgICAgLy8gc2V0IHBvc2l0aW9uXG4gICAgICAgIGxldCB3aWR0aCA9IGNjLndpblNpemUud2lkdGg7XG4gICAgICAgIGxldCBoZWlnaHQgPSBjYy53aW5TaXplLmhlaWdodDtcbiAgICAgICAgbm9kZS54ID0gd2lkdGggLyAyO1xuICAgICAgICBub2RlLnkgPSBoZWlnaHQgLyAyO1xuICAgICAgICBub2RlLm9uKGNjLk5vZGUuRXZlbnRUeXBlLlRPVUNIX1NUQVJULCAoKSA9PiB7XG4gICAgICAgICAgICBub2RlLnBhcmVudCA9IG51bGw7XG4gICAgICAgICAgICB0aGlzLmxhYmVsLnN0cmluZyA9ICcnO1xuICAgICAgICAgICAgbm9kZS5kZXN0cm95KCk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHRoaXMuY2FwdHVyZUFjdGlvbihub2RlLCB3aWR0aCwgaGVpZ2h0KTtcbiAgICB9LFxuICAgIC8vIHNwcml0ZSBhY3Rpb25cbiAgICBjYXB0dXJlQWN0aW9uIChjYXB0dXJlLCB3aWR0aCwgaGVpZ2h0KSB7XG4gICAgICAgIGxldCBzY2FsZUFjdGlvbiA9IGNjLnNjYWxlVG8oMSwwLjMpO1xuICAgICAgICBsZXQgdGFyZ2V0UG9zID0gY2MudjIod2lkdGggLSB3aWR0aCAvIDYsICBoZWlnaHQgLyA0KTtcbiAgICAgICAgbGV0IG1vdmVBY3Rpb24gPSBjYy5tb3ZlVG8oMSwgdGFyZ2V0UG9zKTsgXG4gICAgICAgIGxldCBzcGF3biA9IGNjLnNwYXduKHNjYWxlQWN0aW9uLCBtb3ZlQWN0aW9uKTtcbiAgICAgICAgY2FwdHVyZS5ydW5BY3Rpb24oc3Bhd24pO1xuICAgICAgICBsZXQgYmxpbmtBY3Rpb24gPSBjYy5ibGluaygwLjEsIDEpO1xuICAgICAgICAvLyBzY2VuZSBhY3Rpb25cbiAgICAgICAgdGhpcy5ub2RlLnJ1bkFjdGlvbihibGlua0FjdGlvbik7XG4gICAgfSxcblxuICAgIGNsZWFyQ2FudmFzICgpIHtcbiAgICAgICAgbGV0IGN0eCA9IHRoaXMuX2NhbnZhcy5nZXRDb250ZXh0KCcyZCcpO1xuICAgICAgICBjdHguY2xlYXJSZWN0KDAsIDAsIHRoaXMuX2NhbnZhcy53aWR0aCwgdGhpcy5fY2FudmFzLmhlaWdodCk7XG4gICAgfVxufSk7XG4iXX0=