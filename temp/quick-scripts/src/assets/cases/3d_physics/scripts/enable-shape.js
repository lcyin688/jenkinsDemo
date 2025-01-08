"use strict";
cc._RF.push(module, 'c372auEmopBg5i6QilLDSVd', 'enable-shape');
// cases/3d_physics/scripts/enable-shape.ts

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
var EnableAllShapde = /** @class */ (function (_super) {
    __extends(EnableAllShapde, _super);
    function EnableAllShapde() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.toState = null;
        return _this;
    }
    EnableAllShapde.prototype.start = function () {
    };
    EnableAllShapde.prototype.switchState = function () {
        var toStateStr = this.toState.string;
        if (toStateStr == "disable") {
            this.disableAllShape();
            this.toState.string = "enable";
        }
        else {
            this.enableAllShape();
            this.toState.string = "disable";
        }
    };
    EnableAllShapde.prototype.enableAllShape = function () {
        var children = this.node.children;
        for (var i = 0; i < children.length; i++) {
            var child = children[i];
            var collider = child.getComponent(cc.Collider3D);
            collider.enabled = true;
        }
    };
    EnableAllShapde.prototype.disableAllShape = function () {
        var children = this.node.children;
        for (var i = 0; i < children.length; i++) {
            var child = children[i];
            var collider = child.getComponent(cc.Collider3D);
            collider.enabled = false;
        }
    };
    __decorate([
        property({ type: cc.Label })
    ], EnableAllShapde.prototype, "toState", void 0);
    EnableAllShapde = __decorate([
        ccclass
    ], EnableAllShapde);
    return EnableAllShapde;
}(cc.Component));
exports.default = EnableAllShapde;

cc._RF.pop();