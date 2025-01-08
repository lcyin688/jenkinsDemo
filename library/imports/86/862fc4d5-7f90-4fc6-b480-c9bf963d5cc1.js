"use strict";
cc._RF.push(module, '862fcTVf5BPxrSAyb+WPVzB', 'move');
// cases/3d_physics/scripts/move.ts

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
var Move = /** @class */ (function (_super) {
    __extends(Move, _super);
    function Move() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.mx = true;
        _this.my = true;
        _this.mz = true;
        _this.originPos = new cc.Vec3();
        _this.nowPos = new cc.Vec3();
        _this.speed = 1;
        _this.dis = 30;
        return _this;
    }
    Move.prototype.start = function () {
        this.nowPos.x = this.originPos.x = this.node.x;
        this.nowPos.y = this.originPos.y = this.node.y;
        this.nowPos.z = this.originPos.z = this.node.z;
        if (Math.random() > 0.5) {
            this.speed *= -1;
        }
    };
    Move.prototype.update = function (dt) {
        var dis = cc.Vec3.distance(this.originPos, this.nowPos);
        if (dis > this.dis) {
            this.speed *= -1;
        }
        if (this.mx) {
            this.nowPos.x += this.speed;
            this.node.x = this.nowPos.x;
        }
        if (this.my) {
            this.nowPos.y += this.speed;
            this.node.y = this.nowPos.y;
        }
        if (this.mz) {
            this.nowPos.z += this.speed;
            this.node.z = this.nowPos.z;
        }
    };
    __decorate([
        property
    ], Move.prototype, "mx", void 0);
    __decorate([
        property
    ], Move.prototype, "my", void 0);
    __decorate([
        property
    ], Move.prototype, "mz", void 0);
    __decorate([
        property
    ], Move.prototype, "speed", void 0);
    __decorate([
        property
    ], Move.prototype, "dis", void 0);
    Move = __decorate([
        ccclass
    ], Move);
    return Move;
}(cc.Component));
exports.default = Move;

cc._RF.pop();