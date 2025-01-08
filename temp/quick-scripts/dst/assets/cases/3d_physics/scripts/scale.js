
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/cases/3d_physics/scripts/scale.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'a8f60b0mmhIS4jYmUffQjsT', 'scale');
// cases/3d_physics/scripts/scale.ts

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
var Scale = /** @class */ (function (_super) {
    __extends(Scale, _super);
    function Scale() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.mx = true;
        _this.my = true;
        _this.mz = true;
        _this.speed = 0.001;
        _this.originScale = new cc.Vec3(1, 1, 1);
        _this.tempScale = new cc.Vec3(1, 1, 1);
        return _this;
    }
    Scale.prototype.start = function () {
        this.originScale.x = this.node.scaleX;
        this.originScale.y = this.node.scaleY;
        this.originScale.z = this.node.scaleZ;
        cc.Vec3.copy(this.tempScale, this.originScale);
    };
    Scale.prototype.update = function (dt) {
        var scale = this.tempScale;
        if (this.mx) {
            scale.x += this.speed;
        }
        if (this.my) {
            scale.y += this.speed;
        }
        if (this.mz) {
            scale.z += this.speed;
        }
        if (scale.x - this.originScale.x > 200 ||
            scale.x - this.originScale.x < 0 ||
            scale.y - this.originScale.y > 200 ||
            scale.y - this.originScale.y < 0 ||
            scale.z - this.originScale.z > 200 ||
            scale.z - this.originScale.z < 0) {
            this.speed *= -1;
        }
        this.node.scaleX = scale.x;
        this.node.scaleY = scale.y;
        this.node.scaleZ = scale.z;
    };
    __decorate([
        property
    ], Scale.prototype, "mx", void 0);
    __decorate([
        property
    ], Scale.prototype, "my", void 0);
    __decorate([
        property
    ], Scale.prototype, "mz", void 0);
    __decorate([
        property
    ], Scale.prototype, "speed", void 0);
    Scale = __decorate([
        ccclass
    ], Scale);
    return Scale;
}(cc.Component));
exports.default = Scale;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9jYXNlcy8zZF9waHlzaWNzL3NjcmlwdHMvc2NhbGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQU0sSUFBQSxLQUFzQixFQUFFLENBQUMsVUFBVSxFQUFsQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWlCLENBQUM7QUFHMUM7SUFBbUMseUJBQVk7SUFBL0M7UUFBQSxxRUFtREM7UUFoREcsUUFBRSxHQUFXLElBQUksQ0FBQztRQUdsQixRQUFFLEdBQVcsSUFBSSxDQUFDO1FBR2xCLFFBQUUsR0FBVyxJQUFJLENBQUM7UUFHbEIsV0FBSyxHQUFVLEtBQUssQ0FBQztRQUViLGlCQUFXLEdBQVcsSUFBSSxFQUFFLENBQUMsSUFBSSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7UUFDM0MsZUFBUyxHQUFXLElBQUksRUFBRSxDQUFDLElBQUksQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDOztJQW9DckQsQ0FBQztJQWxDRyxxQkFBSyxHQUFMO1FBQ0ksSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUM7UUFDdEMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUM7UUFDdEMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUM7UUFDdEMsRUFBRSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsRUFBRSxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUM7SUFDbkQsQ0FBQztJQUVELHNCQUFNLEdBQU4sVUFBUSxFQUFFO1FBQ04sSUFBSSxLQUFLLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQztRQUMzQixJQUFJLElBQUksQ0FBQyxFQUFFLEVBQUU7WUFDVCxLQUFLLENBQUMsQ0FBQyxJQUFJLElBQUksQ0FBQyxLQUFLLENBQUM7U0FDekI7UUFFRCxJQUFJLElBQUksQ0FBQyxFQUFFLEVBQUU7WUFDVCxLQUFLLENBQUMsQ0FBQyxJQUFJLElBQUksQ0FBQyxLQUFLLENBQUM7U0FDekI7UUFFRCxJQUFJLElBQUksQ0FBQyxFQUFFLEVBQUU7WUFDVCxLQUFLLENBQUMsQ0FBQyxJQUFJLElBQUksQ0FBQyxLQUFLLENBQUM7U0FDekI7UUFFRCxJQUFJLEtBQUssQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDLEdBQUcsR0FBRztZQUNsQyxLQUFLLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQyxHQUFHLENBQUM7WUFDaEMsS0FBSyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUMsR0FBRyxHQUFHO1lBQ2xDLEtBQUssQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDLEdBQUcsQ0FBQztZQUNoQyxLQUFLLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQyxHQUFHLEdBQUc7WUFDbEMsS0FBSyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUMsR0FBRyxDQUFDLEVBQUc7WUFDbkMsSUFBSSxDQUFDLEtBQUssSUFBSSxDQUFDLENBQUMsQ0FBQztTQUNwQjtRQUVELElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQyxDQUFDLENBQUM7UUFDM0IsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDLENBQUMsQ0FBQztRQUMzQixJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUMsQ0FBQyxDQUFDO0lBQy9CLENBQUM7SUEvQ0Q7UUFEQyxRQUFRO3FDQUNTO0lBR2xCO1FBREMsUUFBUTtxQ0FDUztJQUdsQjtRQURDLFFBQVE7cUNBQ1M7SUFHbEI7UUFEQyxRQUFRO3dDQUNZO0lBWkosS0FBSztRQUR6QixPQUFPO09BQ2EsS0FBSyxDQW1EekI7SUFBRCxZQUFDO0NBbkRELEFBbURDLENBbkRrQyxFQUFFLENBQUMsU0FBUyxHQW1EOUM7a0JBbkRvQixLQUFLIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiY29uc3Qge2NjY2xhc3MsIHByb3BlcnR5fSA9IGNjLl9kZWNvcmF0b3I7XG5cbkBjY2NsYXNzXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTY2FsZSBleHRlbmRzIGNjLkNvbXBvbmVudCB7XG5cbiAgICBAcHJvcGVydHlcbiAgICBteDpib29sZWFuID0gdHJ1ZTtcblxuICAgIEBwcm9wZXJ0eVxuICAgIG15OmJvb2xlYW4gPSB0cnVlO1xuXG4gICAgQHByb3BlcnR5XG4gICAgbXo6Ym9vbGVhbiA9IHRydWU7XG5cbiAgICBAcHJvcGVydHlcbiAgICBzcGVlZDpudW1iZXIgPSAwLjAwMTtcblxuICAgIHByaXZhdGUgb3JpZ2luU2NhbGU6Y2MuVmVjMyA9IG5ldyBjYy5WZWMzKDEsIDEsIDEpO1xuICAgIHByaXZhdGUgdGVtcFNjYWxlOmNjLlZlYzMgPSBuZXcgY2MuVmVjMygxLCAxLCAxKTtcblxuICAgIHN0YXJ0ICgpIHtcbiAgICAgICAgdGhpcy5vcmlnaW5TY2FsZS54ID0gdGhpcy5ub2RlLnNjYWxlWDtcbiAgICAgICAgdGhpcy5vcmlnaW5TY2FsZS55ID0gdGhpcy5ub2RlLnNjYWxlWTtcbiAgICAgICAgdGhpcy5vcmlnaW5TY2FsZS56ID0gdGhpcy5ub2RlLnNjYWxlWjtcbiAgICAgICAgY2MuVmVjMy5jb3B5KHRoaXMudGVtcFNjYWxlLCB0aGlzLm9yaWdpblNjYWxlKTtcbiAgICB9XG5cbiAgICB1cGRhdGUgKGR0KSB7XG4gICAgICAgIGxldCBzY2FsZSA9IHRoaXMudGVtcFNjYWxlO1xuICAgICAgICBpZiAodGhpcy5teCkge1xuICAgICAgICAgICAgc2NhbGUueCArPSB0aGlzLnNwZWVkO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHRoaXMubXkpIHtcbiAgICAgICAgICAgIHNjYWxlLnkgKz0gdGhpcy5zcGVlZDtcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgaWYgKHRoaXMubXopIHtcbiAgICAgICAgICAgIHNjYWxlLnogKz0gdGhpcy5zcGVlZDtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChzY2FsZS54IC0gdGhpcy5vcmlnaW5TY2FsZS54ID4gMjAwIHx8IFxuICAgICAgICAgICAgc2NhbGUueCAtIHRoaXMub3JpZ2luU2NhbGUueCA8IDAgfHxcbiAgICAgICAgICAgIHNjYWxlLnkgLSB0aGlzLm9yaWdpblNjYWxlLnkgPiAyMDAgfHxcbiAgICAgICAgICAgIHNjYWxlLnkgLSB0aGlzLm9yaWdpblNjYWxlLnkgPCAwIHx8XG4gICAgICAgICAgICBzY2FsZS56IC0gdGhpcy5vcmlnaW5TY2FsZS56ID4gMjAwIHx8XG4gICAgICAgICAgICBzY2FsZS56IC0gdGhpcy5vcmlnaW5TY2FsZS56IDwgMCApIHtcbiAgICAgICAgICAgIHRoaXMuc3BlZWQgKj0gLTE7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLm5vZGUuc2NhbGVYID0gc2NhbGUueDtcbiAgICAgICAgdGhpcy5ub2RlLnNjYWxlWSA9IHNjYWxlLnk7XG4gICAgICAgIHRoaXMubm9kZS5zY2FsZVogPSBzY2FsZS56O1xuICAgIH1cbn1cbiJdfQ==