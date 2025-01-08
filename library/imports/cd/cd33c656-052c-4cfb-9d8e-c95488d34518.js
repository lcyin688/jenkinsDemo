"use strict";
cc._RF.push(module, 'cd33cZWBSxM+52OyVSI00UY', 'TransformController');
// cases/3d-particle/TransformController.ts

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
var Node = cc.Node;
var Vec3 = cc.Vec3;
var _temp_num = 0;
var TransformController = /** @class */ (function (_super) {
    __extends(TransformController, _super);
    function TransformController() {
        /* class member could be defined like this */
        // dummy = '';
        var _this = _super !== null && _super.apply(this, arguments) || this;
        /* use `property` decorator if your want the member to be serializable */
        // @property
        // serializableDummy = 0;
        _this.particle1 = null;
        _this.particle2 = null;
        _this.particle3 = null;
        _this.particle4 = null;
        _this.check1 = null;
        _this.check2 = null;
        _this.check3 = null;
        _this.check4 = null;
        _this._translate = new Vec3();
        _this._rotate = new Vec3();
        return _this;
    }
    TransformController.prototype.start = function () {
        // Your initialization goes here.
    };
    // update (deltaTime: number) {
    //     // Your update function goes here.
    // }
    TransformController.prototype.onTranslateChanged = function (slider, data) {
        this._translate.set(cc.v3(0, 0, slider.progress * 10 - _temp_num));
        _temp_num = slider.progress * 10;
        if (this.check1.isChecked) {
            this.particle1.x += this._translate.x;
            this.particle1.y += this._translate.y;
            this.particle1.z += this._translate.z;
        }
        if (this.check2.isChecked) {
            this.particle2.x += this._translate.x;
            this.particle2.y += this._translate.y;
            this.particle2.z += this._translate.z;
        }
        if (this.check3.isChecked) {
            this.particle3.x += this._translate.x;
            this.particle4.y += this._translate.y;
            this.particle3.z += this._translate.z;
        }
        if (this.check4.isChecked) {
            this.particle4.x += this._translate.x;
            this.particle4.y += this._translate.y;
            this.particle4.z += this._translate.z;
        }
    };
    TransformController.prototype.onRotateChanged = function (slider, data) {
        this._rotate.set(cc.v3(slider.progress * 90, 0, 0));
        if (this.check1.isChecked) {
            this.particle1.eulerAngles = cc.v3(0, this._rotate.x, 0);
        }
        if (this.check2.isChecked) {
            this.particle2.eulerAngles = cc.v3(0, this._rotate.x, 0);
        }
        if (this.check3.isChecked) {
            this.particle3.eulerAngles = cc.v3(0, this._rotate.x, 0);
        }
        if (this.check4.isChecked) {
            this.particle4.eulerAngles = cc.v3(0, this._rotate.x, 0);
        }
    };
    __decorate([
        property({
            type: Node,
        })
    ], TransformController.prototype, "particle1", void 0);
    __decorate([
        property({
            type: Node,
        })
    ], TransformController.prototype, "particle2", void 0);
    __decorate([
        property({
            type: Node,
        })
    ], TransformController.prototype, "particle3", void 0);
    __decorate([
        property({
            type: Node,
        })
    ], TransformController.prototype, "particle4", void 0);
    __decorate([
        property({
            type: cc.Toggle,
        })
    ], TransformController.prototype, "check1", void 0);
    __decorate([
        property({
            type: cc.Toggle,
        })
    ], TransformController.prototype, "check2", void 0);
    __decorate([
        property({
            type: cc.Toggle,
        })
    ], TransformController.prototype, "check3", void 0);
    __decorate([
        property({
            type: cc.Toggle,
        })
    ], TransformController.prototype, "check4", void 0);
    TransformController = __decorate([
        ccclass
    ], TransformController);
    return TransformController;
}(cc.Component));
exports.default = TransformController;

cc._RF.pop();