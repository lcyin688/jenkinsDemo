"use strict";
cc._RF.push(module, 'c094fuCuPBLNLvV8sYgZ74l', 'trigger-testing');
// cases/3d_physics/scripts/trigger-testing.ts

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
exports.triggertesting = void 0;
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var triggertesting = /** @class */ (function (_super) {
    __extends(triggertesting, _super);
    function triggertesting() {
        var _this = _super.call(this) || this;
        _this._prev = [];
        _this.colliderMaterial = null;
        _this.unColliderMaterial = null;
        _this._colliderCount = 0;
        _this._enterType = 'collision-enter';
        _this._stayType = 'collision-stay';
        _this._exitType = 'collision-exit';
        _this.isTrigger = false;
        _this.id = triggertesting_1._idCounter++;
        return _this;
    }
    triggertesting_1 = triggertesting;
    triggertesting.prototype.start = function () {
        if (this.isTrigger || CC_PHYSICS_BUILTIN) {
            this._enterType = 'trigger-enter';
            this._stayType = 'trigger-stay';
            this._exitType = 'trigger-exit';
        }
        var trigger = this.getComponent(cc.Collider3D);
        if (trigger) {
            trigger.on(this._enterType, this.onTrigger, this);
            trigger.on(this._stayType, this.onTrigger, this);
            trigger.on(this._exitType, this.onTrigger, this);
        }
    };
    triggertesting.prototype.onTrigger = function (event) {
        if (event.type == this._enterType) {
            this._colliderCount++;
        }
        else if (event.type == this._stayType) {
            if (!this._prev[event.otherCollider._id]) {
                this._prev[event.otherCollider._id] = true;
            }
            else {
                return;
            }
        }
        else if (event.type == this._exitType) {
            this._prev[event.otherCollider._id] = false;
            this._colliderCount--;
        }
        var modelCom = this.node.getComponent(cc.MeshRenderer);
        if (this._colliderCount > 0) {
            modelCom.setMaterial(0, this.colliderMaterial);
            modelCom.markForRender(true);
        }
        else {
            modelCom.setMaterial(0, this.unColliderMaterial);
            modelCom.markForRender(true);
        }
        // let infoStr = event.selfCollider.node.name + '__' + event.type + '__' + event.otherCollider.node.name + ' ';
        // console.log(infoStr);
    };
    var triggertesting_1;
    triggertesting._idCounter = 0;
    __decorate([
        property({ type: cc.Material })
    ], triggertesting.prototype, "colliderMaterial", void 0);
    __decorate([
        property({ type: cc.Material })
    ], triggertesting.prototype, "unColliderMaterial", void 0);
    __decorate([
        property
    ], triggertesting.prototype, "isTrigger", void 0);
    triggertesting = triggertesting_1 = __decorate([
        ccclass
    ], triggertesting);
    return triggertesting;
}(cc.Component));
exports.triggertesting = triggertesting;

cc._RF.pop();