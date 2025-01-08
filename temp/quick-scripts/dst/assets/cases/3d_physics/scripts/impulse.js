
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/cases/3d_physics/scripts/impulse.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'c86d9dH8xxCO5ledaP2gIZs', 'impulse');
// cases/3d_physics/scripts/impulse.ts

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
var Impulse = /** @class */ (function (_super) {
    __extends(Impulse, _super);
    function Impulse() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.impulse = new cc.Vec3;
        _this.worldPoint = new cc.Vec3;
        _this.localPoint = new cc.Vec3;
        return _this;
    }
    Impulse.prototype.start = function () {
    };
    Impulse.prototype.onWorldImpulse = function () {
        var rigidbody = this.getComponent(cc.RigidBody3D);
        if (rigidbody) {
            rigidbody.applyImpulse(this.impulse, this.worldPoint);
        }
    };
    Impulse.prototype.onLocalImpulse = function () {
        var rigidbody = this.getComponent(cc.RigidBody3D);
        if (rigidbody) {
            rigidbody.applyLocalImpulse(this.impulse, this.localPoint);
        }
    };
    __decorate([
        property
    ], Impulse.prototype, "impulse", void 0);
    __decorate([
        property
    ], Impulse.prototype, "worldPoint", void 0);
    __decorate([
        property
    ], Impulse.prototype, "localPoint", void 0);
    Impulse = __decorate([
        ccclass
    ], Impulse);
    return Impulse;
}(cc.Component));
exports.default = Impulse;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9jYXNlcy8zZF9waHlzaWNzL3NjcmlwdHMvaW1wdWxzZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBTSxJQUFBLEtBQXNCLEVBQUUsQ0FBQyxVQUFVLEVBQWxDLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBaUIsQ0FBQztBQUcxQztJQUFxQywyQkFBWTtJQUFqRDtRQUFBLHFFQTRCQztRQXpCVSxhQUFPLEdBQVksSUFBSSxFQUFFLENBQUMsSUFBSSxDQUFDO1FBRy9CLGdCQUFVLEdBQVksSUFBSSxFQUFFLENBQUMsSUFBSSxDQUFDO1FBR2xDLGdCQUFVLEdBQVksSUFBSSxFQUFFLENBQUMsSUFBSSxDQUFDOztJQW1CN0MsQ0FBQztJQWpCRyx1QkFBSyxHQUFMO0lBRUEsQ0FBQztJQUVELGdDQUFjLEdBQWQ7UUFDSSxJQUFJLFNBQVMsR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxXQUFXLENBQUMsQ0FBQztRQUNsRCxJQUFJLFNBQVMsRUFBRTtZQUNYLFNBQVMsQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRSxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUM7U0FDekQ7SUFDTCxDQUFDO0lBRUQsZ0NBQWMsR0FBZDtRQUNJLElBQUksU0FBUyxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLFdBQVcsQ0FBQyxDQUFDO1FBQ2xELElBQUksU0FBUyxFQUFFO1lBQ1gsU0FBUyxDQUFDLGlCQUFpQixDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUUsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDO1NBQzlEO0lBQ0wsQ0FBQztJQXhCRDtRQURDLFFBQVE7NENBQzZCO0lBR3RDO1FBREMsUUFBUTsrQ0FDZ0M7SUFHekM7UUFEQyxRQUFROytDQUNnQztJQVR4QixPQUFPO1FBRDNCLE9BQU87T0FDYSxPQUFPLENBNEIzQjtJQUFELGNBQUM7Q0E1QkQsQUE0QkMsQ0E1Qm9DLEVBQUUsQ0FBQyxTQUFTLEdBNEJoRDtrQkE1Qm9CLE9BQU8iLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCB7Y2NjbGFzcywgcHJvcGVydHl9ID0gY2MuX2RlY29yYXRvcjtcblxuQGNjY2xhc3NcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEltcHVsc2UgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xuXG4gICAgQHByb3BlcnR5XG4gICAgcHVibGljIGltcHVsc2U6IGNjLlZlYzMgPSBuZXcgY2MuVmVjMztcblxuICAgIEBwcm9wZXJ0eVxuICAgIHB1YmxpYyB3b3JsZFBvaW50OiBjYy5WZWMzID0gbmV3IGNjLlZlYzM7XG5cbiAgICBAcHJvcGVydHlcbiAgICBwdWJsaWMgbG9jYWxQb2ludDogY2MuVmVjMyA9IG5ldyBjYy5WZWMzO1xuXG4gICAgc3RhcnQgKCkge1xuXG4gICAgfVxuXG4gICAgb25Xb3JsZEltcHVsc2UgKCkge1xuICAgICAgICBsZXQgcmlnaWRib2R5ID0gdGhpcy5nZXRDb21wb25lbnQoY2MuUmlnaWRCb2R5M0QpO1xuICAgICAgICBpZiAocmlnaWRib2R5KSB7XG4gICAgICAgICAgICByaWdpZGJvZHkuYXBwbHlJbXB1bHNlKHRoaXMuaW1wdWxzZSwgdGhpcy53b3JsZFBvaW50KTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIG9uTG9jYWxJbXB1bHNlICgpIHtcbiAgICAgICAgbGV0IHJpZ2lkYm9keSA9IHRoaXMuZ2V0Q29tcG9uZW50KGNjLlJpZ2lkQm9keTNEKTtcbiAgICAgICAgaWYgKHJpZ2lkYm9keSkge1xuICAgICAgICAgICAgcmlnaWRib2R5LmFwcGx5TG9jYWxJbXB1bHNlKHRoaXMuaW1wdWxzZSwgdGhpcy5sb2NhbFBvaW50KTtcbiAgICAgICAgfVxuICAgIH1cbn1cbiJdfQ==