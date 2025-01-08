
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/cases/camera/minimap-with-rendertexture.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '98c5bSgS09EEplaizshzGVD', 'minimap-with-rendertexture');
// cases/camera/minimap-with-rendertexture.ts

"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/typescript.html
//  - [English] http://www.cocos2d-x.org/docs/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/reference/attributes.html
//  - [English] http://www.cocos2d-x.org/docs/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/life-cycle-callbacks.html
//  - [English] http://www.cocos2d-x.org/docs/creator/manual/en/scripting/life-cycle-callbacks.html
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property, executeInEditMode = _a.executeInEditMode;
// camera z value should between camera nearClip and farClip
var MINI_CAMERA_Z = 100;
var NewClass = /** @class */ (function (_super) {
    __extends(NewClass, _super);
    function NewClass() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.target = null;
        _this.miniMapCamera = null;
        _this.cameraInfo = null;
        _this.renderTextureSprite = null;
        // LIFE-CYCLE CALLBACKS:
        // onLoad () {}
        _this.cameraPos = cc.v3(0, 0, MINI_CAMERA_Z);
        _this.cameraOrthoSize = 1;
        _this._renderTexture = new cc.RenderTexture();
        _this._tweens = [];
        return _this;
    }
    NewClass.prototype.onEnable = function () {
        cc.view.on('design-resolution-changed', this._delayInitRenderTexture, this);
    };
    NewClass.prototype.onDisable = function () {
        cc.view.off('design-resolution-changed', this._delayInitRenderTexture, this);
    };
    NewClass.prototype._delayInitRenderTexture = function () {
        // should calculate size after canvas updated
        this.scheduleOnce(this._initRenderTexture.bind(this), 0.1);
    };
    NewClass.prototype._initRenderTexture = function () {
        var _a = cc.Canvas.instance.node, canvasWidth = _a.width, canvasHeight = _a.height;
        var width = canvasWidth * 0.2;
        var height = canvasHeight * 0.2;
        this._renderTexture.initWithSize(width, height);
        this.miniMapCamera.targetTexture = this._renderTexture;
        var spriteFrame = new cc.SpriteFrame();
        spriteFrame.setTexture(this._renderTexture);
        this.renderTextureSprite.spriteFrame = spriteFrame;
        var deviceWidth = canvasWidth, deviceHeight = canvasHeight;
        if (!CC_EDITOR) {
            deviceWidth = cc.game.canvas.width / cc.view._scaleX;
            deviceHeight = cc.game.canvas.height / cc.view._scaleY;
        }
        var node = this.renderTextureSprite.node;
        node.x = deviceWidth / 2 - width / 2;
        node.y = deviceHeight / 2 - height / 2;
        node.width = width;
        node.height = height;
    };
    NewClass.prototype.start = function () {
        this._initRenderTexture();
        if (!CC_EDITOR) {
            var t = cc.tween(this.target)
                .by(6, { angle: 360 })
                .repeatForever()
                .start();
            this._tweens.push(t);
            t = cc.tween(this)
                .set({ cameraPos: cc.v3(0, 0, MINI_CAMERA_Z), cameraOrthoSize: cc.Canvas.instance.node.height / 2 })
                .to(6, { cameraOrthoSize: this.target.width / 2 })
                .delay(1)
                .to(3, { cameraPos: cc.v3(100, 0, MINI_CAMERA_Z) })
                .union()
                .repeatForever()
                .start();
            this._tweens.push(t);
        }
        else {
            this.cameraOrthoSize = cc.Canvas.instance.node.height / 2;
        }
    };
    NewClass.prototype.onDestroy = function () {
        this._tweens.forEach(function (t) {
            t.stop();
        });
    };
    NewClass.prototype.update = function (dt) {
        var orthoHeight = this.cameraOrthoSize;
        var orthoWidth = orthoHeight * (this._renderTexture.width / this._renderTexture.height);
        this.cameraInfo.clear();
        // draw mini camera border
        var renderTextureNode = this.renderTextureSprite.node;
        this.cameraInfo.rect(renderTextureNode.x - renderTextureNode.width / 2, renderTextureNode.y - renderTextureNode.height / 2, renderTextureNode.width, renderTextureNode.height);
        this.cameraInfo.strokeColor = cc.Color.YELLOW;
        this.cameraInfo.stroke();
        // draw mini camera ortho size
        this.cameraInfo.rect(this.cameraPos.x - orthoWidth, this.cameraPos.y - orthoHeight, orthoWidth * 2, orthoHeight * 2);
        this.cameraInfo.strokeColor = cc.Color.BLUE;
        this.cameraInfo.stroke();
        this.miniMapCamera.node.position = this.cameraPos;
        this.miniMapCamera.orthoSize = this.cameraOrthoSize;
    };
    __decorate([
        property(cc.Node)
    ], NewClass.prototype, "target", void 0);
    __decorate([
        property(cc.Camera)
    ], NewClass.prototype, "miniMapCamera", void 0);
    __decorate([
        property(cc.Graphics)
    ], NewClass.prototype, "cameraInfo", void 0);
    __decorate([
        property(cc.Sprite)
    ], NewClass.prototype, "renderTextureSprite", void 0);
    NewClass = __decorate([
        ccclass,
        executeInEditMode
    ], NewClass);
    return NewClass;
}(cc.Component));
exports.default = NewClass;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9jYXNlcy9jYW1lcmEvbWluaW1hcC13aXRoLXJlbmRlcnRleHR1cmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRUEsa0ZBQWtGO0FBQ2xGLHlGQUF5RjtBQUN6RixtQkFBbUI7QUFDbkIsNEZBQTRGO0FBQzVGLG1HQUFtRztBQUNuRyw4QkFBOEI7QUFDOUIsNEZBQTRGO0FBQzVGLG1HQUFtRztBQUU3RixJQUFBLEtBQXlDLEVBQUUsQ0FBQyxVQUFVLEVBQXJELE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBQSxFQUFFLGlCQUFpQix1QkFBaUIsQ0FBQztBQUU3RCw0REFBNEQ7QUFDNUQsSUFBTSxhQUFhLEdBQUcsR0FBRyxDQUFDO0FBSTFCO0lBQXNDLDRCQUFZO0lBQWxEO1FBQUEscUVBbUhDO1FBaEhHLFlBQU0sR0FBWSxJQUFJLENBQUM7UUFHdkIsbUJBQWEsR0FBYyxJQUFJLENBQUM7UUFHaEMsZ0JBQVUsR0FBZ0IsSUFBSSxDQUFDO1FBRy9CLHlCQUFtQixHQUFjLElBQUksQ0FBQztRQUV0Qyx3QkFBd0I7UUFFeEIsZUFBZTtRQUdmLGVBQVMsR0FBRyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsYUFBYSxDQUFDLENBQUM7UUFDdkMscUJBQWUsR0FBRyxDQUFDLENBQUM7UUFFcEIsb0JBQWMsR0FBcUIsSUFBSSxFQUFFLENBQUMsYUFBYSxFQUFFLENBQUM7UUF3QzFELGFBQU8sR0FBZSxFQUFFLENBQUM7O0lBcUQ3QixDQUFDO0lBM0ZHLDJCQUFRLEdBQVI7UUFDSSxFQUFFLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQywyQkFBMkIsRUFBRSxJQUFJLENBQUMsdUJBQXVCLEVBQUUsSUFBSSxDQUFDLENBQUM7SUFDaEYsQ0FBQztJQUVELDRCQUFTLEdBQVQ7UUFDSSxFQUFFLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQywyQkFBMkIsRUFBRSxJ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LENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQztRQUM5QyxJQUFJLENBQUMsVUFBVSxDQUFDLE1BQU0sRUFBRSxDQUFDO1FBRXpCLDhCQUE4QjtRQUM5QixJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsR0FBRyxVQUFVLEVBQUUsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLEdBQUcsV0FBVyxFQUFFLFVBQVUsR0FBRyxDQUFDLEVBQUUsV0FBVyxHQUFHLENBQUMsQ0FBQyxDQUFDO1FBQ3JILElBQUksQ0FBQyxVQUFVLENBQUMsV0FBVyxHQUFHLEVBQUUsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDO1FBQzVDLElBQUksQ0FBQyxVQUFVLENBQUMsTUFBTSxFQUFFLENBQUM7UUFFekIsSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUM7UUFDbEQsSUFBSSxDQUFDLGFBQWEsQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDLGVBQWUsQ0FBQztJQUN4RCxDQUFDO0lBL0dEO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7NENBQ0s7SUFHdkI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQzttREFDWTtJQUdoQztRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsUUFBUSxDQUFDO2dEQUNTO0lBRy9CO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUM7eURBQ2tCO0lBWnJCLFFBQVE7UUFGNUIsT0FBTztRQUNQLGlCQUFpQjtPQUNHLFFBQVEsQ0FtSDVCO0lBQUQsZUFBQztDQW5IRCxBQW1IQyxDQW5IcUMsRUFBRSxDQUFDLFNBQVMsR0FtSGpEO2tCQW5Ib0IsUUFBUSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIi8vIExlYXJuIFR5cGVTY3JpcHQ6XG5pbXBvcnQgeyBTcHJpdGVGcmFtZSB9IGZyb20gJy4uLy4uLy4uL2NyZWF0b3IuZCc7XG4vLyAgLSBbQ2hpbmVzZV0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC96aC9zY3JpcHRpbmcvdHlwZXNjcmlwdC5odG1sXG4vLyAgLSBbRW5nbGlzaF0gaHR0cDovL3d3dy5jb2NvczJkLXgub3JnL2RvY3MvY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL3R5cGVzY3JpcHQuaHRtbFxuLy8gTGVhcm4gQXR0cmlidXRlOlxuLy8gIC0gW0NoaW5lc2VdIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvemgvc2NyaXB0aW5nL3JlZmVyZW5jZS9hdHRyaWJ1dGVzLmh0bWxcbi8vICAtIFtFbmdsaXNoXSBodHRwOi8vd3d3LmNvY29zMmQteC5vcmcvZG9jcy9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvcmVmZXJlbmNlL2F0dHJpYnV0ZXMuaHRtbFxuLy8gTGVhcm4gbGlmZS1jeWNsZSBjYWxsYmFja3M6XG4vLyAgLSBbQ2hpbmVzZV0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC96aC9zY3JpcHRpbmcvbGlmZS1jeWNsZS1jYWxsYmFja3MuaHRtbFxuLy8gIC0gW0VuZ2xpc2hdIGh0dHA6Ly93d3cuY29jb3MyZC14Lm9yZy9kb2NzL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9saWZlLWN5Y2xlLWNhbGxiYWNrcy5odG1sXG5cbmNvbnN0IHtjY2NsYXNzLCBwcm9wZXJ0eSwgZXhlY3V0ZUluRWRpdE1vZGV9ID0gY2MuX2RlY29yYXRvcjtcblxuLy8gY2FtZXJhIHogdmFsdWUgc2hvdWxkIGJldHdlZW4gY2FtZXJhIG5lYXJDbGlwIGFuZCBmYXJDbGlwXG5jb25zdCBNSU5JX0NBTUVSQV9aID0gMTAwO1xuXG5AY2NjbGFzc1xuQGV4ZWN1dGVJbkVkaXRNb2RlXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBOZXdDbGFzcyBleHRlbmRzIGNjLkNvbXBvbmVudCB7XG5cbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcbiAgICB0YXJnZXQ6IGNjLk5vZGUgPSBudWxsO1xuXG4gICAgQHByb3BlcnR5KGNjLkNhbWVyYSlcbiAgICBtaW5pTWFwQ2FtZXJhOiBjYy5DYW1lcmEgPSBudWxsO1xuXG4gICAgQHByb3BlcnR5KGNjLkdyYXBoaWNzKVxuICAgIGNhbWVyYUluZm86IGNjLkdyYXBoaWNzID0gbnVsbDtcblxuICAgIEBwcm9wZXJ0eShjYy5TcHJpdGUpXG4gICAgcmVuZGVyVGV4dHVyZVNwcml0ZTogY2MuU3ByaXRlID0gbnVsbDtcblxuICAgIC8vIExJRkUtQ1lDTEUgQ0FMTEJBQ0tTOlxuXG4gICAgLy8gb25Mb2FkICgpIHt9XG5cblxuICAgIGNhbWVyYVBvcyA9IGNjLnYzKDAsIDAsIE1JTklfQ0FNRVJBX1opO1xuICAgIGNhbWVyYU9ydGhvU2l6ZSA9IDE7XG5cbiAgICBfcmVuZGVyVGV4dHVyZTogY2MuUmVuZGVyVGV4dHVyZSA9IG5ldyBjYy5SZW5kZXJUZXh0dXJlKCk7XG5cbiAgICBvbkVuYWJsZSAoKSB7XG4gICAgICAgIGNjLnZpZXcub24oJ2Rlc2lnbi1yZXNvbHV0aW9uLWNoYW5nZWQnLCB0aGlzLl9kZWxheUluaXRSZW5kZXJUZXh0dXJlLCB0aGlzKTtcbiAgICB9XG5cbiAgICBvbkRpc2FibGUgKCkge1xuICAgICAgICBjYy52aWV3Lm9mZignZGVzaWduLXJlc29sdXRpb24tY2hhbmdlZCcsIHRoaXMuX2RlbGF5SW5pdFJlbmRlclRleHR1cmUsIHRoaXMpO1xuICAgIH1cblxuICAgIF9kZWxheUluaXRSZW5kZXJUZXh0dXJlICgpIHtcbiAgICAgICAgLy8gc2hvdWxkIGNhbGN1bGF0ZSBzaXplIGFmdGVyIGNhbnZhcyB1cGRhdGVkXG4gICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKHRoaXMuX2luaXRSZW5kZXJUZXh0dXJlLmJpbmQodGhpcyksIDAuMSk7XG4gICAgfVxuXG4gICAgX2luaXRSZW5kZXJUZXh0dXJlICgpIHtcbiAgICAgICAgbGV0IHsgd2lkdGg6IGNhbnZhc1dpZHRoLCBoZWlnaHQ6IGNhbnZhc0hlaWdodCB9ID0gY2MuQ2FudmFzLmluc3RhbmNlLm5vZGU7XG4gICAgICAgIGxldCB3aWR0aCA9IGNhbnZhc1dpZHRoICogMC4yO1xuICAgICAgICBsZXQgaGVpZ2h0ID0gY2FudmFzSGVpZ2h0ICogMC4yO1xuXG4gICAgICAgIHRoaXMuX3JlbmRlclRleHR1cmUuaW5pdFdpdGhTaXplKHdpZHRoLCBoZWlnaHQpO1xuICAgICAgICB0aGlzLm1pbmlNYXBDYW1lcmEudGFyZ2V0VGV4dHVyZSA9IHRoaXMuX3JlbmRlclRleHR1cmU7XG5cbiAgICAgICAgbGV0IHNwcml0ZUZyYW1lID0gbmV3IGNjLlNwcml0ZUZyYW1lKCk7XG4gICAgICAgIHNwcml0ZUZyYW1lLnNldFRleHR1cmUodGhpcy5fcmVuZGVyVGV4dHVyZSk7XG4gICAgICAgIHRoaXMucmVuZGVyVGV4dHVyZVNwcml0ZS5zcHJpdGVGcmFtZSA9IHNwcml0ZUZyYW1lO1xuXG4gICAgICAgIGxldCBkZXZpY2VXaWR0aCA9IGNhbnZhc1dpZHRoLCBkZXZpY2VIZWlnaHQgPSBjYW52YXNIZWlnaHQ7XG4gICAgICAgIGlmICghQ0NfRURJVE9SKSB7XG4gICAgICAgICAgICBkZXZpY2VXaWR0aCA9IGNjLmdhbWUuY2FudmFzLndpZHRoIC8gY2Mudmlldy5fc2NhbGVYO1xuICAgICAgICAgICAgZGV2aWNlSGVpZ2h0ID0gY2MuZ2FtZS5jYW52YXMuaGVpZ2h0IC8gY2Mudmlldy5fc2NhbGVZO1xuICAgICAgICB9XG5cbiAgICAgICAgbGV0IG5vZGUgPSB0aGlzLnJlbmRlclRleHR1cmVTcHJpdGUubm9kZTtcbiAgICAgICAgbm9kZS54ID0gZGV2aWNlV2lkdGggLyAyIC0gd2lkdGggLyAyO1xuICAgICAgICBub2RlLnkgPSBkZXZpY2VIZWlnaHQgLyAyIC0gaGVpZ2h0IC8gMjtcbiAgICAgICAgbm9kZS53aWR0aCA9IHdpZHRoO1xuICAgICAgICBub2RlLmhlaWdodCA9IGhlaWdodDtcbiAgICB9XG5cbiAgICBfdHdlZW5zOiBjYy5Ud2VlbltdID0gW107XG5cbiAgICBzdGFydCAoKSB7XG4gICAgICAgIHRoaXMuX2luaXRSZW5kZXJUZXh0dXJlKCk7XG4gICAgICAgIFxuICAgICAgICBpZiAoIUNDX0VESVRPUikge1xuICAgICAgICAgICAgbGV0IHQgPSBjYy50d2Vlbih0aGlzLnRhcmdldClcbiAgICAgICAgICAgICAgICAuYnkoNiwge2FuZ2xlOiAzNjB9KVxuICAgICAgICAgICAgICAgIC5yZXBlYXRGb3JldmVyKClcbiAgICAgICAgICAgICAgICAuc3RhcnQoKVxuICAgICAgICAgICAgdGhpcy5fdHdlZW5zLnB1c2godCk7XG5cbiAgICAgICAgICAgIHQgPSBjYy50d2Vlbih0aGlzKVxuICAgICAgICAgICAgICAgIC5zZXQoe2NhbWVyYVBvczogY2MudjMoMCwgMCwgTUlOSV9DQU1FUkFfWiksIGNhbWVyYU9ydGhvU2l6ZTogY2MuQ2FudmFzLmluc3RhbmNlLm5vZGUuaGVpZ2h0IC8gMn0pXG4gICAgICAgICAgICAgICAgLnRvKDYsIHtjYW1lcmFPcnRob1NpemU6IHRoaXMudGFyZ2V0LndpZHRoIC8gMn0pXG4gICAgICAgICAgICAgICAgLmRlbGF5KDEpXG4gICAgICAgICAgICAgICAgLnRvKDMsIHtjYW1lcmFQb3M6IGNjLnYzKDEwMCwgMCwgTUlOSV9DQU1FUkFfWil9KVxuICAgICAgICAgICAgICAgIC51bmlvbigpXG4gICAgICAgICAgICAgICAgLnJlcGVhdEZvcmV2ZXIoKVxuICAgICAgICAgICAgICAgIC5zdGFydCgpXG4gICAgICAgICAgICB0aGlzLl90d2VlbnMucHVzaCh0KTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuY2FtZXJhT3J0aG9TaXplID0gY2MuQ2FudmFzLmluc3RhbmNlLm5vZGUuaGVpZ2h0IC8gMjtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIG9uRGVzdHJveSAoKSB7XG4gICAgICAgIHRoaXMuX3R3ZWVucy5mb3JFYWNoKHQgPT4ge1xuICAgICAgICAgICAgdC5zdG9wKCk7XG4gICAgICAgIH0pXG4gICAgfVxuXG4gICAgdXBkYXRlIChkdCkge1xuICAgICAgICBsZXQgb3J0aG9IZWlnaHQgPSB0aGlzLmNhbWVyYU9ydGhvU2l6ZTtcbiAgICAgICAgbGV0IG9ydGhvV2lkdGggPSBvcnRob0hlaWdodCAqICh0aGlzLl9yZW5kZXJUZXh0dXJlLndpZHRoIC8gdGhpcy5fcmVuZGVyVGV4dHVyZS5oZWlnaHQpO1xuICAgICAgICBcbiAgICAgICAgdGhpcy5jYW1lcmFJbmZvLmNsZWFyKCk7XG5cbiAgICAgICAgLy8gZHJhdyBtaW5pIGNhbWVyYSBib3JkZXJcbiAgICAgICAgbGV0IHJlbmRlclRleHR1cmVOb2RlID0gdGhpcy5yZW5kZXJUZXh0dXJlU3ByaXRlLm5vZGU7XG4gICAgICAgIHRoaXMuY2FtZXJhSW5mby5yZWN0KHJlbmRlclRleHR1cmVOb2RlLnggLSByZW5kZXJUZXh0dXJlTm9kZS53aWR0aC8yLCByZW5kZXJUZXh0dXJlTm9kZS55IC0gcmVuZGVyVGV4dHVyZU5vZGUuaGVpZ2h0LzIsIHJlbmRlclRleHR1cmVOb2RlLndpZHRoLCByZW5kZXJUZXh0dXJlTm9kZS5oZWlnaHQpO1xuICAgICAgICB0aGlzLmNhbWVyYUluZm8uc3Ryb2tlQ29sb3IgPSBjYy5Db2xvci5ZRUxMT1c7XG4gICAgICAgIHRoaXMuY2FtZXJhSW5mby5zdHJva2UoKTtcblxuICAgICAgICAvLyBkcmF3IG1pbmkgY2FtZXJhIG9ydGhvIHNpemVcbiAgICAgICAgdGhpcy5jYW1lcmFJbmZvLnJlY3QodGhpcy5jYW1lcmFQb3MueCAtIG9ydGhvV2lkdGgsIHRoaXMuY2FtZXJhUG9zLnkgLSBvcnRob0hlaWdodCwgb3J0aG9XaWR0aCAqIDIsIG9ydGhvSGVpZ2h0ICogMik7XG4gICAgICAgIHRoaXMuY2FtZXJhSW5mby5zdHJva2VDb2xvciA9IGNjLkNvbG9yLkJMVUU7XG4gICAgICAgIHRoaXMuY2FtZXJhSW5mby5zdHJva2UoKTtcbiAgICAgICAgXG4gICAgICAgIHRoaXMubWluaU1hcENhbWVyYS5ub2RlLnBvc2l0aW9uID0gdGhpcy5jYW1lcmFQb3M7XG4gICAgICAgIHRoaXMubWluaU1hcENhbWVyYS5vcnRob1NpemUgPSB0aGlzLmNhbWVyYU9ydGhvU2l6ZTtcbiAgICB9XG59XG4iXX0=