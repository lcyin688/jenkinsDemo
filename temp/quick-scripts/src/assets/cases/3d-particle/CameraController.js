"use strict";
cc._RF.push(module, 'fa80dEAmgNHnLqhex15JFoQ', 'CameraController');
// cases/3d-particle/CameraController.ts

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
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var Vec3 = cc.Vec3;
var Quat = cc.Quat;
var CameraController = /** @class */ (function (_super) {
    __extends(CameraController, _super);
    function CameraController() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.translateDelta = 1;
        _this.rotateDelta = 5;
        _this._rotateDelta = 0;
        _this._temp_vec3 = new Vec3();
        _this._temp_quat = new Quat();
        _this._quat = new Quat();
        return _this;
    }
    /* class member could be defined like this */
    // dummy = '';
    /* use `property` decorator if your want the member to be serializable */
    // @property
    // serializableDummy = 0;
    CameraController.prototype.start = function () {
        // Your initialization goes here.
        this._rotateDelta = cc.math.toRadian(this.rotateDelta);
    };
    // update (deltaTime: number) {
    //     // Your update function goes here.
    // }
    CameraController.prototype.translate = function (leftRight, backForth, dt) {
        Vec3.set(this._temp_vec3, leftRight * this.translateDelta * dt, 0, backForth * this.translateDelta * dt);
        this.node.x += this._temp_vec3.x;
        this.node.y += this._temp_vec3.y;
        this.node.z += this._temp_vec3.z;
    };
    CameraController.prototype.rotate = function (longitudinal, perpendicular, dt) {
        Quat.fromEuler(this._temp_quat, perpendicular * this.rotateDelta * dt, longitudinal * this.rotateDelta * dt, 0);
        Quat.normalize(this._temp_quat, this._temp_quat);
        this.node.getRotation(this._quat);
        this._quat.multiply(this._temp_quat);
        this.node.setRotation(this._quat);
    };
    CameraController.prototype.onPushJoystick = function (event, customEventData) {
        var dt = 0.2;
        switch (customEventData) {
            case 'F':
                this.translate(0, -1, dt);
                break;
            case 'B':
                this.translate(0, 1, dt);
                break;
            case 'L':
                this.translate(-1, 0, dt);
                break;
            case 'R':
                this.translate(1, 0, dt);
                break;
            case 'U':
                this.rotate(0, 1, dt);
                break;
            case 'D':
                this.rotate(0, -1, dt);
                break;
            case 'RL':
                this.rotate(1, 0, dt);
                break;
            case 'RR':
                this.rotate(-1, 0, dt);
                break;
        }
    };
    __decorate([
        property
    ], CameraController.prototype, "translateDelta", void 0);
    __decorate([
        property
    ], CameraController.prototype, "rotateDelta", void 0);
    CameraController = __decorate([
        ccclass
    ], CameraController);
    return CameraController;
}(cc.Component));
exports.default = CameraController;

cc._RF.pop();