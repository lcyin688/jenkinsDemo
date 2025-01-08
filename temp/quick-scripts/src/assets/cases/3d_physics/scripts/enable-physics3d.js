"use strict";
cc._RF.push(module, 'c4021KQFRRMpq8Rl1Z07uGF', 'enable-physics3d');
// cases/3d_physics/scripts/enable-physics3d.ts

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
var EnablePhysics3D = /** @class */ (function (_super) {
    __extends(EnablePhysics3D, _super);
    function EnablePhysics3D() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.needPhysics = false;
        _this.needPhysicsWord = null;
        return _this;
    }
    EnablePhysics3D.prototype.onLoad = function () {
        cc.director.getPhysics3DManager().enabled = true;
        var showWarn = this.needPhysics && CC_PHYSICS_BUILTIN;
        if (this.needPhysicsWord) {
            this.needPhysicsWord.active = showWarn;
        }
    };
    __decorate([
        property
    ], EnablePhysics3D.prototype, "needPhysics", void 0);
    __decorate([
        property({ type: cc.Node })
    ], EnablePhysics3D.prototype, "needPhysicsWord", void 0);
    EnablePhysics3D = __decorate([
        ccclass
    ], EnablePhysics3D);
    return EnablePhysics3D;
}(cc.Component));
exports.default = EnablePhysics3D;

cc._RF.pop();