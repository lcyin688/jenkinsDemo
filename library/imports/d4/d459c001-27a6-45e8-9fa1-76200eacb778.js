"use strict";
cc._RF.push(module, 'd459cABJ6ZF6J+hdiAOrLd4', 'enable-rigidbody');
// cases/3d_physics/scripts/enable-rigidbody.ts

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
var EnableRigidBody = /** @class */ (function (_super) {
    __extends(EnableRigidBody, _super);
    function EnableRigidBody() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.toState = null;
        _this.rigidBody = null;
        return _this;
    }
    EnableRigidBody.prototype.switchState = function () {
        var toStateStr = this.toState.string;
        if (toStateStr == "disable") {
            this.disableRigidBody();
            this.toState.string = "enable";
        }
        else {
            this.enableRigidBody();
            this.toState.string = "disable";
        }
    };
    EnableRigidBody.prototype.enableRigidBody = function () {
        this.rigidBody.enabled = true;
    };
    EnableRigidBody.prototype.disableRigidBody = function () {
        this.rigidBody.enabled = false;
    };
    __decorate([
        property(cc.Label)
    ], EnableRigidBody.prototype, "toState", void 0);
    __decorate([
        property(cc.RigidBody3D)
    ], EnableRigidBody.prototype, "rigidBody", void 0);
    EnableRigidBody = __decorate([
        ccclass
    ], EnableRigidBody);
    return EnableRigidBody;
}(cc.Component));
exports.default = EnableRigidBody;

cc._RF.pop();