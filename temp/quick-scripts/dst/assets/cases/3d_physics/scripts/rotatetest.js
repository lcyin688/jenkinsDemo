
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/cases/3d_physics/scripts/rotatetest.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '1483bYge1xKMZsPxGtmoqbR', 'rotatetest');
// cases/3d_physics/scripts/rotatetest.ts

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
var Rotate = /** @class */ (function (_super) {
    __extends(Rotate, _super);
    function Rotate() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.mx = true;
        _this.my = true;
        _this.mz = true;
        _this.speed = 1;
        _this.tempAngle = new cc.Vec3();
        return _this;
    }
    Rotate.prototype.start = function () {
        if (Math.random() > 0.5) {
            this.speed *= -1;
        }
        cc.Vec3.copy(this.tempAngle, this.node.eulerAngles);
    };
    Rotate.prototype.update = function (dt) {
        var euler = this.tempAngle;
        if (this.mx) {
            euler.x += this.speed;
        }
        if (this.my) {
            euler.y += this.speed;
        }
        if (this.mz) {
            euler.z += this.speed;
        }
        if (Math.abs(euler.x - 90) < 0.001) {
            euler.x = 0;
        }
        if (Math.abs(euler.y - 90) < 0.001) {
            euler.y = 0;
        }
        if (Math.abs(euler.z - 90) < 0.001) {
            euler.z = 0;
        }
        this.node.eulerAngles = euler;
    };
    __decorate([
        property
    ], Rotate.prototype, "mx", void 0);
    __decorate([
        property
    ], Rotate.prototype, "my", void 0);
    __decorate([
        property
    ], Rotate.prototype, "mz", void 0);
    __decorate([
        property
    ], Rotate.prototype, "speed", void 0);
    Rotate = __decorate([
        ccclass
    ], Rotate);
    return Rotate;
}(cc.Component));
exports.default = Rotate;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9jYXNlcy8zZF9waHlzaWNzL3NjcmlwdHMvcm90YXRldGVzdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBTSxJQUFBLEtBQXNCLEVBQUUsQ0FBQyxVQUFVLEVBQWxDLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBaUIsQ0FBQztBQUcxQztJQUFvQywwQkFBWTtJQUFoRDtRQUFBLHFFQW1EQztRQWhERyxRQUFFLEdBQVcsSUFBSSxDQUFDO1FBR2xCLFFBQUUsR0FBVyxJQUFJLENBQUM7UUFHbEIsUUFBRSxHQUFXLElBQUksQ0FBQztRQUdsQixXQUFLLEdBQVUsQ0FBQyxDQUFDO1FBRVQsZUFBUyxHQUFXLElBQUksRUFBRSxDQUFDLElBQUksRUFBRSxDQUFDOztJQXFDOUMsQ0FBQztJQW5DRyxzQkFBSyxHQUFMO1FBQ0ksSUFBSSxJQUFJLENBQUMsTUFBTSxFQUFFLEdBQUcsR0FBRyxFQUFFO1lBQ3JCLElBQUksQ0FBQyxLQUFLLElBQUksQ0FBQyxDQUFDLENBQUM7U0FDcEI7UUFDRCxFQUFFLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxFQUFFLElBQUksQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUM7SUFDeEQsQ0FBQztJQUVELHVCQUFNLEdBQU4sVUFBUSxFQUFFO1FBQ04sSUFBSSxLQUFLLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQztRQUMzQixJQUFJLElBQUksQ0FBQyxFQUFFLEVBQUU7WUFDVCxLQUFLLENBQUMsQ0FBQyxJQUFJLElBQUksQ0FBQyxLQUFLLENBQUM7U0FDekI7UUFFRCxJQUFJLElBQUksQ0FBQyxFQUFFLEVBQUU7WUFDVCxLQUFLLENBQUMsQ0FBQyxJQUFJLElBQUksQ0FBQyxLQUFLLENBQUM7U0FDekI7UUFFRCxJQUFJLElBQUksQ0FBQyxFQUFFLEVBQUU7WUFDVCxLQUFLLENBQUMsQ0FBQyxJQUFJLElBQUksQ0FBQyxLQUFLLENBQUM7U0FDekI7UUFFRCxJQUFJLElBQUksQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUMsR0FBRyxFQUFFLENBQUMsR0FBRyxLQUFLLEVBQUU7WUFDaEMsS0FBSyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUM7U0FDZjtRQUVELElBQUksSUFBSSxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxHQUFHLEtBQUssRUFBRTtZQUNoQyxLQUFLLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQztTQUNmO1FBRUQsSUFBSSxJQUFJLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDLEdBQUcsRUFBRSxDQUFDLEdBQUcsS0FBSyxFQUFFO1lBQ2hDLEtBQUssQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1NBQ2Y7UUFFRCxJQUFJLENBQUMsSUFBSSxDQUFDLFdBQVcsR0FBRyxLQUFLLENBQUM7SUFDbEMsQ0FBQztJQS9DRDtRQURDLFFBQVE7c0NBQ1M7SUFHbEI7UUFEQyxRQUFRO3NDQUNTO0lBR2xCO1FBREMsUUFBUTtzQ0FDUztJQUdsQjtRQURDLFFBQVE7eUNBQ1E7SUFaQSxNQUFNO1FBRDFCLE9BQU87T0FDYSxNQUFNLENBbUQxQjtJQUFELGFBQUM7Q0FuREQsQUFtREMsQ0FuRG1DLEVBQUUsQ0FBQyxTQUFTLEdBbUQvQztrQkFuRG9CLE1BQU0iLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCB7Y2NjbGFzcywgcHJvcGVydHl9ID0gY2MuX2RlY29yYXRvcjtcblxuQGNjY2xhc3NcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFJvdGF0ZSBleHRlbmRzIGNjLkNvbXBvbmVudCB7XG5cbiAgICBAcHJvcGVydHlcbiAgICBteDpib29sZWFuID0gdHJ1ZTtcblxuICAgIEBwcm9wZXJ0eVxuICAgIG15OmJvb2xlYW4gPSB0cnVlO1xuXG4gICAgQHByb3BlcnR5XG4gICAgbXo6Ym9vbGVhbiA9IHRydWU7XG5cbiAgICBAcHJvcGVydHlcbiAgICBzcGVlZDpudW1iZXIgPSAxO1xuXG4gICAgcHJpdmF0ZSB0ZW1wQW5nbGU6Y2MuVmVjMyA9IG5ldyBjYy5WZWMzKCk7XG5cbiAgICBzdGFydCAoKSB7XG4gICAgICAgIGlmIChNYXRoLnJhbmRvbSgpID4gMC41KSB7XG4gICAgICAgICAgICB0aGlzLnNwZWVkICo9IC0xO1xuICAgICAgICB9XG4gICAgICAgIGNjLlZlYzMuY29weSh0aGlzLnRlbXBBbmdsZSwgdGhpcy5ub2RlLmV1bGVyQW5nbGVzKTtcbiAgICB9XG5cbiAgICB1cGRhdGUgKGR0KSB7XG4gICAgICAgIGxldCBldWxlciA9IHRoaXMudGVtcEFuZ2xlO1xuICAgICAgICBpZiAodGhpcy5teCkge1xuICAgICAgICAgICAgZXVsZXIueCArPSB0aGlzLnNwZWVkO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHRoaXMubXkpIHtcbiAgICAgICAgICAgIGV1bGVyLnkgKz0gdGhpcy5zcGVlZDtcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgaWYgKHRoaXMubXopIHtcbiAgICAgICAgICAgIGV1bGVyLnogKz0gdGhpcy5zcGVlZDtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChNYXRoLmFicyhldWxlci54IC0gOTApIDwgMC4wMDEpIHtcbiAgICAgICAgICAgIGV1bGVyLnggPSAwO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKE1hdGguYWJzKGV1bGVyLnkgLSA5MCkgPCAwLjAwMSkge1xuICAgICAgICAgICAgZXVsZXIueSA9IDA7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoTWF0aC5hYnMoZXVsZXIueiAtIDkwKSA8IDAuMDAxKSB7XG4gICAgICAgICAgICBldWxlci56ID0gMDtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMubm9kZS5ldWxlckFuZ2xlcyA9IGV1bGVyO1xuICAgIH1cbn1cbiJdfQ==