"use strict";
cc._RF.push(module, 'e5090+j3atD2ZM4RN9dA8qa', 'born');
// cases/3d_physics/scripts/born.ts

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
var Born = /** @class */ (function (_super) {
    __extends(Born, _super);
    function Born() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.ball = null;
        _this.checkNode = null;
        _this.box = null;
        return _this;
    }
    Born.prototype.start = function () {
        this.checkNode.on(cc.Node.EventType.TOUCH_START, this.onTouchStart, this);
        this.rotate();
    };
    Born.prototype.rotate = function () {
        this.box.runAction(cc.repeatForever(cc.sequence(cc.rotate3DTo(1, 1, 0, 20), cc.rotate3DTo(1, 1, 0, -20))));
    };
    Born.prototype.onTouchStart = function (event) {
        var newBall = cc.instantiate(this.ball);
        newBall.active = true;
        this.node.addChild(newBall);
    };
    __decorate([
        property({ type: cc.Node })
    ], Born.prototype, "ball", void 0);
    __decorate([
        property({ type: cc.Node })
    ], Born.prototype, "checkNode", void 0);
    __decorate([
        property({ type: cc.Node })
    ], Born.prototype, "box", void 0);
    Born = __decorate([
        ccclass
    ], Born);
    return Born;
}(cc.Component));
exports.default = Born;

cc._RF.pop();