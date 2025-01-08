"use strict";
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