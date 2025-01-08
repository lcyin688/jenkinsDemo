
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/cases/3d_physics/scripts/enable-rigidbody.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
                    }
                    if (nodeEnv) {
                        __define(__module.exports, __require, __module);
                    }
                    else {
                        __quick_compile_project__.registerModuleFunc(__filename, function () {
                            __define(__module.exports, __require, __module);
                        });
                    }
                })();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9jYXNlcy8zZF9waHlzaWNzL3NjcmlwdHMvZW5hYmxlLXJpZ2lkYm9keS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBTSxJQUFBLEtBQXNCLEVBQUUsQ0FBQyxVQUFVLEVBQWxDLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBaUIsQ0FBQztBQUcxQztJQUE2QyxtQ0FBWTtJQUF6RDtRQUFBLHFFQTBCQztRQXZCRyxhQUFPLEdBQWEsSUFBSSxDQUFDO1FBR3pCLGVBQVMsR0FBbUIsSUFBSSxDQUFDOztJQW9CckMsQ0FBQztJQWxCRyxxQ0FBVyxHQUFYO1FBQ0ksSUFBSSxVQUFVLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUM7UUFDckMsSUFBSSxVQUFVLElBQUksU0FBUyxFQUFFO1lBQ3pCLElBQUksQ0FBQyxnQkFBZ0IsRUFBRSxDQUFDO1lBQ3hCLElBQUksQ0FBQyxPQUFPLENBQUMsTUFBTSxHQUFHLFFBQVEsQ0FBQztTQUNsQzthQUFNO1lBQ0gsSUFBSSxDQUFDLGVBQWUsRUFBRSxDQUFDO1lBQ3ZCLElBQUksQ0FBQyxPQUFPLENBQUMsTUFBTSxHQUFHLFNBQVMsQ0FBQztTQUNuQztJQUNMLENBQUM7SUFFRCx5Q0FBZSxHQUFmO1FBQ0ksSUFBSSxDQUFDLFNBQVMsQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDO0lBQ2xDLENBQUM7SUFFRCwwQ0FBZ0IsR0FBaEI7UUFDSSxJQUFJLENBQUMsU0FBUyxDQUFDLE9BQU8sR0FBRyxLQUFLLENBQUM7SUFDbkMsQ0FBQztJQXRCRDtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDO29EQUNNO0lBR3pCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxXQUFXLENBQUM7c0RBQ1E7SUFOaEIsZUFBZTtRQURuQyxPQUFPO09BQ2EsZUFBZSxDQTBCbkM7SUFBRCxzQkFBQztDQTFCRCxBQTBCQyxDQTFCNEMsRUFBRSxDQUFDLFNBQVMsR0EwQnhEO2tCQTFCb0IsZUFBZSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IHtjY2NsYXNzLCBwcm9wZXJ0eX0gPSBjYy5fZGVjb3JhdG9yO1xuXG5AY2NjbGFzc1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRW5hYmxlUmlnaWRCb2R5IGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcblxuICAgIEBwcm9wZXJ0eShjYy5MYWJlbClcbiAgICB0b1N0YXRlOiBjYy5MYWJlbCA9IG51bGw7XG5cbiAgICBAcHJvcGVydHkoY2MuUmlnaWRCb2R5M0QpXG4gICAgcmlnaWRCb2R5OiBjYy5SaWdpZEJvZHkzRCA9IG51bGw7XG5cbiAgICBzd2l0Y2hTdGF0ZSAoKSB7XG4gICAgICAgIGxldCB0b1N0YXRlU3RyID0gdGhpcy50b1N0YXRlLnN0cmluZztcbiAgICAgICAgaWYgKHRvU3RhdGVTdHIgPT0gXCJkaXNhYmxlXCIpIHtcbiAgICAgICAgICAgIHRoaXMuZGlzYWJsZVJpZ2lkQm9keSgpO1xuICAgICAgICAgICAgdGhpcy50b1N0YXRlLnN0cmluZyA9IFwiZW5hYmxlXCI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLmVuYWJsZVJpZ2lkQm9keSgpO1xuICAgICAgICAgICAgdGhpcy50b1N0YXRlLnN0cmluZyA9IFwiZGlzYWJsZVwiO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZW5hYmxlUmlnaWRCb2R5ICgpIHtcbiAgICAgICAgdGhpcy5yaWdpZEJvZHkuZW5hYmxlZCA9IHRydWU7XG4gICAgfVxuXG4gICAgZGlzYWJsZVJpZ2lkQm9keSAoKSB7XG4gICAgICAgIHRoaXMucmlnaWRCb2R5LmVuYWJsZWQgPSBmYWxzZTtcbiAgICB9XG59XG4iXX0=