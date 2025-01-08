
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/cases/3d_physics/scripts/move.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9jYXNlcy8zZF9waHlzaWNzL3NjcmlwdHMvbW92ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBTSxJQUFBLEtBQXNCLEVBQUUsQ0FBQyxVQUFVLEVBQWxDLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBaUIsQ0FBQztBQUcxQztJQUFrQyx3QkFBWTtJQUE5QztRQUFBLHFFQWtEQztRQS9DRyxRQUFFLEdBQVcsSUFBSSxDQUFDO1FBR2xCLFFBQUUsR0FBVyxJQUFJLENBQUM7UUFHbEIsUUFBRSxHQUFXLElBQUksQ0FBQztRQUVWLGVBQVMsR0FBVyxJQUFJLEVBQUUsQ0FBQyxJQUFJLEVBQUUsQ0FBQztRQUNsQyxZQUFNLEdBQVcsSUFBSSxFQUFFLENBQUMsSUFBSSxFQUFFLENBQUM7UUFHdkMsV0FBSyxHQUFVLENBQUMsQ0FBQztRQUdqQixTQUFHLEdBQVUsRUFBRSxDQUFDOztJQWdDcEIsQ0FBQztJQTlCRyxvQkFBSyxHQUFMO1FBQ0ksSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7UUFDL0MsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7UUFDL0MsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7UUFDL0MsSUFBSSxJQUFJLENBQUMsTUFBTSxFQUFFLEdBQUcsR0FBRyxFQUFFO1lBQ3JCLElBQUksQ0FBQyxLQUFLLElBQUksQ0FBQyxDQUFDLENBQUM7U0FDcEI7SUFDTCxDQUFDO0lBRUQscUJBQU0sR0FBTixVQUFRLEVBQUU7UUFDTixJQUFJLEdBQUcsR0FBRyxFQUFFLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsU0FBUyxFQUFFLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUN4RCxJQUFJLEdBQUcsR0FBRyxJQUFJLENBQUMsR0FBRyxFQUFFO1lBQ2hCLElBQUksQ0FBQyxLQUFLLElBQUksQ0FBQyxDQUFDLENBQUM7U0FDcEI7UUFFRCxJQUFJLElBQUksQ0FBQyxFQUFFLEVBQUU7WUFDVCxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsSUFBSSxJQUFJLENBQUMsS0FBSyxDQUFDO1lBQzVCLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDO1NBQy9CO1FBRUQsSUFBSSxJQUFJLENBQUMsRUFBRSxFQUFFO1lBQ1QsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLElBQUksSUFBSSxDQUFDLEtBQUssQ0FBQztZQUM1QixJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQztTQUMvQjtRQUVELElBQUksSUFBSSxDQUFDLEVBQUUsRUFBRTtZQUNULElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxJQUFJLElBQUksQ0FBQyxLQUFLLENBQUM7WUFDNUIsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUM7U0FDL0I7SUFDTCxDQUFDO0lBOUNEO1FBREMsUUFBUTtvQ0FDUztJQUdsQjtRQURDLFFBQVE7b0NBQ1M7SUFHbEI7UUFEQyxRQUFRO29DQUNTO0lBTWxCO1FBREMsUUFBUTt1Q0FDUTtJQUdqQjtRQURDLFFBQVE7cUNBQ087SUFsQkMsSUFBSTtRQUR4QixPQUFPO09BQ2EsSUFBSSxDQWtEeEI7SUFBRCxXQUFDO0NBbERELEFBa0RDLENBbERpQyxFQUFFLENBQUMsU0FBUyxHQWtEN0M7a0JBbERvQixJQUFJIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiY29uc3Qge2NjY2xhc3MsIHByb3BlcnR5fSA9IGNjLl9kZWNvcmF0b3I7XG5cbkBjY2NsYXNzXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBNb3ZlIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcblxuICAgIEBwcm9wZXJ0eVxuICAgIG14OmJvb2xlYW4gPSB0cnVlO1xuXG4gICAgQHByb3BlcnR5XG4gICAgbXk6Ym9vbGVhbiA9IHRydWU7XG5cbiAgICBAcHJvcGVydHlcbiAgICBtejpib29sZWFuID0gdHJ1ZTtcblxuICAgIHByaXZhdGUgb3JpZ2luUG9zOmNjLlZlYzMgPSBuZXcgY2MuVmVjMygpO1xuICAgIHByaXZhdGUgbm93UG9zOmNjLlZlYzMgPSBuZXcgY2MuVmVjMygpO1xuXG4gICAgQHByb3BlcnR5XG4gICAgc3BlZWQ6bnVtYmVyID0gMTtcblxuICAgIEBwcm9wZXJ0eVxuICAgIGRpczpudW1iZXIgPSAzMDtcblxuICAgIHN0YXJ0ICgpIHtcbiAgICAgICAgdGhpcy5ub3dQb3MueCA9IHRoaXMub3JpZ2luUG9zLnggPSB0aGlzLm5vZGUueDtcbiAgICAgICAgdGhpcy5ub3dQb3MueSA9IHRoaXMub3JpZ2luUG9zLnkgPSB0aGlzLm5vZGUueTtcbiAgICAgICAgdGhpcy5ub3dQb3MueiA9IHRoaXMub3JpZ2luUG9zLnogPSB0aGlzLm5vZGUuejtcbiAgICAgICAgaWYgKE1hdGgucmFuZG9tKCkgPiAwLjUpIHtcbiAgICAgICAgICAgIHRoaXMuc3BlZWQgKj0gLTE7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICB1cGRhdGUgKGR0KSB7XG4gICAgICAgIGxldCBkaXMgPSBjYy5WZWMzLmRpc3RhbmNlKHRoaXMub3JpZ2luUG9zLCB0aGlzLm5vd1Bvcyk7XG4gICAgICAgIGlmIChkaXMgPiB0aGlzLmRpcykge1xuICAgICAgICAgICAgdGhpcy5zcGVlZCAqPSAtMTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0aGlzLm14KSB7XG4gICAgICAgICAgICB0aGlzLm5vd1Bvcy54ICs9IHRoaXMuc3BlZWQ7XG4gICAgICAgICAgICB0aGlzLm5vZGUueCA9IHRoaXMubm93UG9zLng7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodGhpcy5teSkge1xuICAgICAgICAgICAgdGhpcy5ub3dQb3MueSArPSB0aGlzLnNwZWVkO1xuICAgICAgICAgICAgdGhpcy5ub2RlLnkgPSB0aGlzLm5vd1Bvcy55O1xuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICBpZiAodGhpcy5teikge1xuICAgICAgICAgICAgdGhpcy5ub3dQb3MueiArPSB0aGlzLnNwZWVkO1xuICAgICAgICAgICAgdGhpcy5ub2RlLnogPSB0aGlzLm5vd1Bvcy56O1xuICAgICAgICB9XG4gICAgfVxufVxuIl19