"use strict";
cc._RF.push(module, '1483bYge1xKMZsPxGtmoqbR', 'rotatetest');
// cases/3d_physics/scripts/rotatetest.ts

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
var Rotate = /** @class */ (function (_super) {
    __extends(Rotate, _super);
    function Rotate() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.mx = true;
        _this.my = true;
        _this.mz = true;
        _this.speed = 1;
        _this.tempAngle = new cc.Vec3();
        return _this;
    }
    Rotate.prototype.start = function () {
        if (Math.random() > 0.5) {
            this.speed *= -1;
        }
        cc.Vec3.copy(this.tempAngle, this.node.eulerAngles);
    };
    Rotate.prototype.update = function (dt) {
        var euler = this.tempAngle;
        if (this.mx) {
            euler.x += this.speed;
        }
        if (this.my) {
            euler.y += this.speed;
        }
        if (this.mz) {
            euler.z += this.speed;
        }
        if (Math.abs(euler.x - 90) < 0.001) {
            euler.x = 0;
        }
        if (Math.abs(euler.y - 90) < 0.001) {
            euler.y = 0;
        }
        if (Math.abs(euler.z - 90) < 0.001) {
            euler.z = 0;
        }
        this.node.eulerAngles = euler;
    };
    __decorate([
        property
    ], Rotate.prototype, "mx", void 0);
    __decorate([
        property
    ], Rotate.prototype, "my", void 0);
    __decorate([
        property
    ], Rotate.prototype, "mz", void 0);
    __decorate([
        property
    ], Rotate.prototype, "speed", void 0);
    Rotate = __decorate([
        ccclass
    ], Rotate);
    return Rotate;
}(cc.Component));
exports.default = Rotate;

cc._RF.pop();