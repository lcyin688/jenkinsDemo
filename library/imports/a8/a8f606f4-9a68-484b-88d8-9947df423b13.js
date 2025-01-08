"use strict";
cc._RF.push(module, 'a8f60b0mmhIS4jYmUffQjsT', 'scale');
// cases/3d_physics/scripts/scale.ts

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
var Scale = /** @class */ (function (_super) {
    __extends(Scale, _super);
    function Scale() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.mx = true;
        _this.my = true;
        _this.mz = true;
        _this.speed = 0.001;
        _this.originScale = new cc.Vec3(1, 1, 1);
        _this.tempScale = new cc.Vec3(1, 1, 1);
        return _this;
    }
    Scale.prototype.start = function () {
        this.originScale.x = this.node.scaleX;
        this.originScale.y = this.node.scaleY;
        this.originScale.z = this.node.scaleZ;
        cc.Vec3.copy(this.tempScale, this.originScale);
    };
    Scale.prototype.update = function (dt) {
        var scale = this.tempScale;
        if (this.mx) {
            scale.x += this.speed;
        }
        if (this.my) {
            scale.y += this.speed;
        }
        if (this.mz) {
            scale.z += this.speed;
        }
        if (scale.x - this.originScale.x > 200 ||
            scale.x - this.originScale.x < 0 ||
            scale.y - this.originScale.y > 200 ||
            scale.y - this.originScale.y < 0 ||
            scale.z - this.originScale.z > 200 ||
            scale.z - this.originScale.z < 0) {
            this.speed *= -1;
        }
        this.node.scaleX = scale.x;
        this.node.scaleY = scale.y;
        this.node.scaleZ = scale.z;
    };
    __decorate([
        property
    ], Scale.prototype, "mx", void 0);
    __decorate([
        property
    ], Scale.prototype, "my", void 0);
    __decorate([
        property
    ], Scale.prototype, "mz", void 0);
    __decorate([
        property
    ], Scale.prototype, "speed", void 0);
    Scale = __decorate([
        ccclass
    ], Scale);
    return Scale;
}(cc.Component));
exports.default = Scale;

cc._RF.pop();