"use strict";
cc._RF.push(module, '938eaQ89X9EKrhzOMm1ufOB', 'raytest');
// cases/3d_physics/scripts/raytest.ts

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
var ERaycastType;
(function (ERaycastType) {
    ERaycastType[ERaycastType["ALL"] = 0] = "ALL";
    ERaycastType[ERaycastType["CLOSEST"] = 1] = "CLOSEST";
})(ERaycastType || (ERaycastType = {}));
var RayTest = /** @class */ (function (_super) {
    __extends(RayTest, _super);
    function RayTest() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.defaultMaterial = null;
        _this.rayMaterial = null;
        _this.rayState = null;
        _this._raycastType = ERaycastType.ALL;
        _this._maxDistance = 100000;
        _this._rayTool = null;
        return _this;
    }
    RayTest.prototype.start = function () {
        this._rayTool = cc.director.getPhysics3DManager();
        var canvas = cc.find('Canvas');
        canvas.on(cc.Node.EventType.TOUCH_START, this.onTouchStart, this);
    };
    RayTest.prototype.switchRay = function () {
        if (this._raycastType == ERaycastType.ALL) {
            this._raycastType = ERaycastType.CLOSEST;
            this.rayState.string = "ray close";
        }
        else {
            this._raycastType = ERaycastType.ALL;
            this.rayState.string = "ray all";
        }
    };
    RayTest.prototype.onTouchStart = function (event) {
        this.resetAll();
        var touchLoc = event.touch.getLocation();
        var ray = cc.Camera.main.getRay(touchLoc);
        switch (this._raycastType) {
            case ERaycastType.ALL:
                var results = this._rayTool.raycast(ray, "Ball", this._maxDistance);
                if (results) {
                    for (var i = 0; i < results.length; i++) {
                        var item = results[i];
                        var modelCom = item.collider.node.getComponent(cc.MeshRenderer);
                        modelCom.setMaterial(0, this.rayMaterial);
                        modelCom.markForRender(true);
                    }
                }
                break;
            case ERaycastType.CLOSEST:
                var result = this._rayTool.raycastClosest(ray, "Ball", this._maxDistance);
                if (result) {
                    var modelCom = result.collider.node.getComponent(cc.MeshRenderer);
                    modelCom.setMaterial(0, this.rayMaterial);
                    modelCom.markForRender(true);
                }
                break;
        }
    };
    RayTest.prototype.resetAll = function () {
        for (var i = 0; i < this.node.children.length; i++) {
            if (this.node.children[i].name == 'Sphere2')
                continue;
            var mesh = this.node.children[i].getComponent(cc.MeshRenderer);
            mesh.setMaterial(0, this.defaultMaterial);
            mesh.markForRender(true);
        }
    };
    __decorate([
        property({ type: cc.Material })
    ], RayTest.prototype, "defaultMaterial", void 0);
    __decorate([
        property({ type: cc.Material })
    ], RayTest.prototype, "rayMaterial", void 0);
    __decorate([
        property({ type: cc.Label })
    ], RayTest.prototype, "rayState", void 0);
    RayTest = __decorate([
        ccclass
    ], RayTest);
    return RayTest;
}(cc.Component));
exports.default = RayTest;

cc._RF.pop();