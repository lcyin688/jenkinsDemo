
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/cases/3d_physics/scripts/velocity.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'aba27g6ntRDMpLd693yFPdQ', 'velocity');
// cases/3d_physics/scripts/velocity.ts

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
var tempVec3 = new cc.Vec3();
var Velocity = /** @class */ (function (_super) {
    __extends(Velocity, _super);
    function Velocity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Velocity.prototype.start = function () {
    };
    Velocity.prototype.rotate = function () {
        var rigidBody = this.node.getComponent(cc.RigidBody3D);
        if (rigidBody) {
            if (rigidBody.isSleeping) {
                rigidBody.wakeUp();
            }
            tempVec3.x = 0;
            tempVec3.y = 10;
            tempVec3.z = 0;
            rigidBody.setAngularVelocity(tempVec3);
        }
    };
    Velocity.prototype.jump = function () {
        var rigidBody = this.node.getComponent(cc.RigidBody3D);
        if (rigidBody) {
            if (rigidBody.isSleeping) {
                rigidBody.wakeUp();
            }
            tempVec3.x = 0;
            tempVec3.y = 10;
            tempVec3.z = 0;
            rigidBody.setLinearVelocity(tempVec3);
        }
    };
    Velocity = __decorate([
        ccclass
    ], Velocity);
    return Velocity;
}(cc.Component));
exports.default = Velocity;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9jYXNlcy8zZF9waHlzaWNzL3NjcmlwdHMvdmVsb2NpdHkudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQU0sSUFBQSxLQUFzQixFQUFFLENBQUMsVUFBVSxFQUFsQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWlCLENBQUM7QUFFMUMsSUFBSSxRQUFRLEdBQUcsSUFBSSxFQUFFLENBQUMsSUFBSSxFQUFFLENBQUM7QUFHN0I7SUFBc0MsNEJBQVk7SUFBbEQ7O0lBOEJBLENBQUM7SUE3Qkcsd0JBQUssR0FBTDtJQUVBLENBQUM7SUFFRCx5QkFBTSxHQUFOO1FBQ0ksSUFBSSxTQUFTLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLFdBQVcsQ0FBQyxDQUFDO1FBQ3ZELElBQUksU0FBUyxFQUFFO1lBQ1gsSUFBSSxTQUFTLENBQUMsVUFBVSxFQUFFO2dCQUN0QixTQUFTLENBQUMsTUFBTSxFQUFFLENBQUM7YUFDdEI7WUFDRCxRQUFRLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQztZQUNmLFFBQVEsQ0FBQyxDQUFDLEdBQUcsRUFBRSxDQUFDO1lBQ2hCLFFBQVEsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1lBQ2YsU0FBUyxDQUFDLGtCQUFrQixDQUFDLFFBQVEsQ0FBQyxDQUFDO1NBQzFDO0lBQ0wsQ0FBQztJQUVELHVCQUFJLEdBQUo7UUFDSSxJQUFJLFNBQVMsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsV0FBVyxDQUFDLENBQUM7UUFDdkQsSUFBSSxTQUFTLEVBQUU7WUFDWCxJQUFJLFNBQVMsQ0FBQyxVQUFVLEVBQUU7Z0JBQ3RCLFNBQVMsQ0FBQyxNQUFNLEVBQUUsQ0FBQzthQUN0QjtZQUNELFFBQVEsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1lBQ2YsUUFBUSxDQUFDLENBQUMsR0FBRyxFQUFFLENBQUM7WUFDaEIsUUFBUSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUM7WUFDZixTQUFTLENBQUMsaUJBQWlCLENBQUMsUUFBUSxDQUFDLENBQUM7U0FDekM7SUFDTCxDQUFDO0lBN0JnQixRQUFRO1FBRDVCLE9BQU87T0FDYSxRQUFRLENBOEI1QjtJQUFELGVBQUM7Q0E5QkQsQUE4QkMsQ0E5QnFDLEVBQUUsQ0FBQyxTQUFTLEdBOEJqRDtrQkE5Qm9CLFFBQVEiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCB7Y2NjbGFzcywgcHJvcGVydHl9ID0gY2MuX2RlY29yYXRvcjtcblxubGV0IHRlbXBWZWMzID0gbmV3IGNjLlZlYzMoKTtcblxuQGNjY2xhc3NcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFZlbG9jaXR5IGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcbiAgICBzdGFydCAoKSB7XG5cbiAgICB9XG5cbiAgICByb3RhdGUgKCkge1xuICAgICAgICBsZXQgcmlnaWRCb2R5ID0gdGhpcy5ub2RlLmdldENvbXBvbmVudChjYy5SaWdpZEJvZHkzRCk7XG4gICAgICAgIGlmIChyaWdpZEJvZHkpIHtcbiAgICAgICAgICAgIGlmIChyaWdpZEJvZHkuaXNTbGVlcGluZykge1xuICAgICAgICAgICAgICAgIHJpZ2lkQm9keS53YWtlVXAoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRlbXBWZWMzLnggPSAwO1xuICAgICAgICAgICAgdGVtcFZlYzMueSA9IDEwO1xuICAgICAgICAgICAgdGVtcFZlYzMueiA9IDA7XG4gICAgICAgICAgICByaWdpZEJvZHkuc2V0QW5ndWxhclZlbG9jaXR5KHRlbXBWZWMzKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGp1bXAgKCkge1xuICAgICAgICBsZXQgcmlnaWRCb2R5ID0gdGhpcy5ub2RlLmdldENvbXBvbmVudChjYy5SaWdpZEJvZHkzRCk7XG4gICAgICAgIGlmIChyaWdpZEJvZHkpIHtcbiAgICAgICAgICAgIGlmIChyaWdpZEJvZHkuaXNTbGVlcGluZykge1xuICAgICAgICAgICAgICAgIHJpZ2lkQm9keS53YWtlVXAoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRlbXBWZWMzLnggPSAwO1xuICAgICAgICAgICAgdGVtcFZlYzMueSA9IDEwO1xuICAgICAgICAgICAgdGVtcFZlYzMueiA9IDA7XG4gICAgICAgICAgICByaWdpZEJvZHkuc2V0TGluZWFyVmVsb2NpdHkodGVtcFZlYzMpO1xuICAgICAgICB9XG4gICAgfVxufVxuIl19