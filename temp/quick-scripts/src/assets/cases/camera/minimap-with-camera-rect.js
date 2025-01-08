"use strict";
cc._RF.push(module, '1cac6uuFWFDhbIanRytsZ2s', 'minimap-with-camera-rect');
// cases/camera/minimap-with-camera-rect.ts

"use strict";
// Learn TypeScript:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/typescript.html
//  - [English] http://www.cocos2d-x.org/docs/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/reference/attributes.html
//  - [English] http://www.cocos2d-x.org/docs/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/life-cycle-callbacks.html
//  - [English] http://www.cocos2d-x.org/docs/creator/manual/en/scripting/life-cycle-callbacks.html
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
        // LIFE-CYCLE CALLBACKS:
        // onLoad () {}
        _this.cameraPos = cc.v3(0, 0, MINI_CAMERA_Z);
        _this.cameraOrthoSize = 1;
        _this._tweens = [];
        return _this;
    }
    NewClass.prototype.start = function () {
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
        var _a = cc.Canvas.instance.node, canvasWidth = _a.width, canvasHeight = _a.height;
        var deviceWidth = canvasWidth, deviceHeight = canvasHeight;
        if (!CC_EDITOR) {
            deviceWidth = cc.game.canvas.width / cc.view._scaleX;
            deviceHeight = cc.game.canvas.height / cc.view._scaleY;
        }
        var orthoHeight = this.cameraOrthoSize;
        var orthoWidth = orthoHeight * (deviceWidth / deviceHeight);
        var rect = this.miniMapCamera.rect;
        this.cameraInfo.clear();
        // draw mini camera border
        this.cameraInfo.rect((rect.x - 0.5) * deviceWidth, (rect.y - 0.5) * deviceHeight, rect.width * deviceWidth, rect.height * deviceHeight);
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
    NewClass = __decorate([
        ccclass,
        executeInEditMode
    ], NewClass);
    return NewClass;
}(cc.Component));
exports.default = NewClass;

cc._RF.pop();