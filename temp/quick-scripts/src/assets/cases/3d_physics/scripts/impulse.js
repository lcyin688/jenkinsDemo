"use strict";
cc._RF.push(module, 'c86d9dH8xxCO5ledaP2gIZs', 'impulse');
// cases/3d_physics/scripts/impulse.ts

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
var Impulse = /** @class */ (function (_super) {
    __extends(Impulse, _super);
    function Impulse() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.impulse = new cc.Vec3;
        _this.worldPoint = new cc.Vec3;
        _this.localPoint = new cc.Vec3;
        return _this;
    }
    Impulse.prototype.start = function () {
    };
    Impulse.prototype.onWorldImpulse = function () {
        var rigidbody = this.getComponent(cc.RigidBody3D);
        if (rigidbody) {
            rigidbody.applyImpulse(this.impulse, this.worldPoint);
        }
    };
    Impulse.prototype.onLocalImpulse = function () {
        var rigidbody = this.getComponent(cc.RigidBody3D);
        if (rigidbody) {
            rigidbody.applyLocalImpulse(this.impulse, this.localPoint);
        }
    };
    __decorate([
        property
    ], Impulse.prototype, "impulse", void 0);
    __decorate([
        property
    ], Impulse.prototype, "worldPoint", void 0);
    __decorate([
        property
    ], Impulse.prototype, "localPoint", void 0);
    Impulse = __decorate([
        ccclass
    ], Impulse);
    return Impulse;
}(cc.Component));
exports.default = Impulse;

cc._RF.pop();