
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/cases/3d-particle/CameraController.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'fa80dEAmgNHnLqhex15JFoQ', 'CameraController');
// cases/3d-particle/CameraController.ts

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
var Vec3 = cc.Vec3;
var Quat = cc.Quat;
var CameraController = /** @class */ (function (_super) {
    __extends(CameraController, _super);
    function CameraController() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.translateDelta = 1;
        _this.rotateDelta = 5;
        _this._rotateDelta = 0;
        _this._temp_vec3 = new Vec3();
        _this._temp_quat = new Quat();
        _this._quat = new Quat();
        return _this;
    }
    /* class member could be defined like this */
    // dummy = '';
    /* use `property` decorator if your want the member to be serializable */
    // @property
    // serializableDummy = 0;
    CameraController.prototype.start = function () {
        // Your initialization goes here.
        this._rotateDelta = cc.math.toRadian(this.rotateDelta);
    };
    // update (deltaTime: number) {
    //     // Your update function goes here.
    // }
    CameraController.prototype.translate = function (leftRight, backForth, dt) {
        Vec3.set(this._temp_vec3, leftRight * this.translateDelta * dt, 0, backForth * this.translateDelta * dt);
        this.node.x += this._temp_vec3.x;
        this.node.y += this._temp_vec3.y;
        this.node.z += this._temp_vec3.z;
    };
    CameraController.prototype.rotate = function (longitudinal, perpendicular, dt) {
        Quat.fromEuler(this._temp_quat, perpendicular * this.rotateDelta * dt, longitudinal * this.rotateDelta * dt, 0);
        Quat.normalize(this._temp_quat, this._temp_quat);
        this.node.getRotation(this._quat);
        this._quat.multiply(this._temp_quat);
        this.node.setRotation(this._quat);
    };
    CameraController.prototype.onPushJoystick = function (event, customEventData) {
        var dt = 0.2;
        switch (customEventData) {
            case 'F':
                this.translate(0, -1, dt);
                break;
            case 'B':
                this.translate(0, 1, dt);
                break;
            case 'L':
                this.translate(-1, 0, dt);
                break;
            case 'R':
                this.translate(1, 0, dt);
                break;
            case 'U':
                this.rotate(0, 1, dt);
                break;
            case 'D':
                this.rotate(0, -1, dt);
                break;
            case 'RL':
                this.rotate(1, 0, dt);
                break;
            case 'RR':
                this.rotate(-1, 0, dt);
                break;
        }
    };
    __decorate([
        property
    ], CameraController.prototype, "translateDelta", void 0);
    __decorate([
        property
    ], CameraController.prototype, "rotateDelta", void 0);
    CameraController = __decorate([
        ccclass
    ], CameraController);
    return CameraController;
}(cc.Component));
exports.default = CameraController;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9jYXNlcy8zZC1wYXJ0aWNsZS9DYW1lcmFDb250cm9sbGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFNLElBQUEsS0FBc0IsRUFBRSxDQUFDLFVBQVUsRUFBbEMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFpQixDQUFDO0FBRTFDLElBQU0sSUFBSSxHQUFHLEVBQUUsQ0FBQyxJQUFJLENBQUM7QUFDckIsSUFBTSxJQUFJLEdBQUcsRUFBRSxDQUFDLElBQUksQ0FBQztBQUdyQjtJQUE4QyxvQ0FBWTtJQUExRDtRQUFBLHFFQTBFQztRQXZFVSxvQkFBYyxHQUFHLENBQUMsQ0FBQztRQUduQixpQkFBVyxHQUFHLENBQUMsQ0FBQztRQUVmLGtCQUFZLEdBQUcsQ0FBQyxDQUFDO1FBRWpCLGdCQUFVLEdBQVEsSUFBSSxJQUFJLEVBQUUsQ0FBQztRQUM3QixnQkFBVSxHQUFRLElBQUksSUFBSSxFQUFFLENBQUM7UUFFN0IsV0FBSyxHQUFRLElBQUksSUFBSSxFQUFFLENBQUM7O0lBNkRwQyxDQUFDO0lBNURHLDZDQUE2QztJQUM3QyxjQUFjO0lBRWQseUVBQXlFO0lBQ3pFLFlBQVk7SUFDWix5QkFBeUI7SUFFekIsZ0NBQUssR0FBTDtRQUNJLGlDQUFpQztRQUNqQyxJQUFJLENBQUMsWUFBWSxHQUFHLEVBQUUsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQztJQUMzRCxDQUFDO0lBRUQsK0JBQStCO0lBQy9CLHlDQUF5QztJQUN6QyxJQUFJO0lBRUosb0NBQVMsR0FBVCxVQUFXLFNBQVMsRUFBRSxTQUFTLEVBQUUsRUFBRTtRQUMvQixJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxVQUFVLEVBQUUsU0FBUyxHQUFHLElBQUksQ0FBQyxjQUFjLEdBQUcsRUFBRSxFQUFFLENBQUMsRUFBRSxTQUFTLEdBQUcsSUFBSSxDQUFDLGNBQWMsR0FBRyxFQUFFLENBQUMsQ0FBQztRQUN6RyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsSUFBSSxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQztRQUNqQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsSUFBSSxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQztRQUNqQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsSUFBSSxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQztJQUNyQyxDQUFDO0lBRUQsaUNBQU0sR0FBTixVQUFRLFlBQVksRUFBRSxhQUFhLEVBQUUsRUFBRTtRQUNuQyxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxVQUFVLEVBQUUsYUFBYSxHQUFHLElBQUksQ0FBQyxXQUFXLEdBQUcsRUFBRSxFQUFFLFlBQVksR0FBRyxJQUFJLENBQUMsV0FBVyxHQUFHLEVBQUUsRUFBRSxDQUFDLENBQUMsQ0FBQztRQUNoSCxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxVQUFVLEVBQUUsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDO1FBQ2pELElBQUksQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUNsQyxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUM7UUFDckMsSUFBSSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQ3RDLENBQUM7SUFFRCx5Q0FBYyxHQUFkLFVBQWdCLEtBQVUsRUFBRSxlQUF1QjtRQUMvQyxJQUFJLEVBQUUsR0FBRyxHQUFHLENBQUM7UUFDYixRQUFRLGVBQWUsRUFBRTtZQUNyQixLQUFLLEdBQUc7Z0JBQ0osSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUM7Z0JBQzFCLE1BQU07WUFDVixLQUFLLEdBQUc7Z0JBQ0osSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDO2dCQUN6QixNQUFNO1lBQ1YsS0FBSyxHQUFHO2dCQUNKLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDO2dCQUMxQixNQUFNO1lBQ1YsS0FBSyxHQUFHO2dCQUNKLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQztnQkFDekIsTUFBTTtZQUNWLEtBQUssR0FBRztnQkFDSixJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUM7Z0JBQ3RCLE1BQU07WUFDVixLQUFLLEdBQUc7Z0JBQ0osSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUM7Z0JBQ3ZCLE1BQU07WUFDVixLQUFLLElBQUk7Z0JBQ0wsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDO2dCQUN0QixNQUFNO1lBQ1YsS0FBSyxJQUFJO2dCQUNMLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDO2dCQUN2QixNQUFNO1NBQ2I7SUFDTCxDQUFDO0lBdEVEO1FBREMsUUFBUTs0REFDaUI7SUFHMUI7UUFEQyxRQUFRO3lEQUNjO0lBTk4sZ0JBQWdCO1FBRHBDLE9BQU87T0FDYSxnQkFBZ0IsQ0EwRXBDO0lBQUQsdUJBQUM7Q0ExRUQsQUEwRUMsQ0ExRTZDLEVBQUUsQ0FBQyxTQUFTLEdBMEV6RDtrQkExRW9CLGdCQUFnQiIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IHtjY2NsYXNzLCBwcm9wZXJ0eX0gPSBjYy5fZGVjb3JhdG9yO1xuXG5jb25zdCBWZWMzID0gY2MuVmVjMztcbmNvbnN0IFF1YXQgPSBjYy5RdWF0O1xuXG5AY2NjbGFzc1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ2FtZXJhQ29udHJvbGxlciBleHRlbmRzIGNjLkNvbXBvbmVudCB7XG5cbiAgICBAcHJvcGVydHlcbiAgICBwdWJsaWMgdHJhbnNsYXRlRGVsdGEgPSAxO1xuXG4gICAgQHByb3BlcnR5XG4gICAgcHVibGljIHJvdGF0ZURlbHRhID0gNTtcblxuICAgIHByaXZhdGUgX3JvdGF0ZURlbHRhID0gMDtcblxuICAgIHByaXZhdGUgX3RlbXBfdmVjMzpWZWMzID0gbmV3IFZlYzMoKTtcbiAgICBwcml2YXRlIF90ZW1wX3F1YXQ6UXVhdCA9IG5ldyBRdWF0KCk7XG5cbiAgICBwcml2YXRlIF9xdWF0OlF1YXQgPSBuZXcgUXVhdCgpO1xuICAgIC8qIGNsYXNzIG1lbWJlciBjb3VsZCBiZSBkZWZpbmVkIGxpa2UgdGhpcyAqL1xuICAgIC8vIGR1bW15ID0gJyc7XG5cbiAgICAvKiB1c2UgYHByb3BlcnR5YCBkZWNvcmF0b3IgaWYgeW91ciB3YW50IHRoZSBtZW1iZXIgdG8gYmUgc2VyaWFsaXphYmxlICovXG4gICAgLy8gQHByb3BlcnR5XG4gICAgLy8gc2VyaWFsaXphYmxlRHVtbXkgPSAwO1xuXG4gICAgc3RhcnQgKCkge1xuICAgICAgICAvLyBZb3VyIGluaXRpYWxpemF0aW9uIGdvZXMgaGVyZS5cbiAgICAgICAgdGhpcy5fcm90YXRlRGVsdGEgPSBjYy5tYXRoLnRvUmFkaWFuKHRoaXMucm90YXRlRGVsdGEpO1xuICAgIH1cblxuICAgIC8vIHVwZGF0ZSAoZGVsdGFUaW1lOiBudW1iZXIpIHtcbiAgICAvLyAgICAgLy8gWW91ciB1cGRhdGUgZnVuY3Rpb24gZ29lcyBoZXJlLlxuICAgIC8vIH1cblxuICAgIHRyYW5zbGF0ZSAobGVmdFJpZ2h0LCBiYWNrRm9ydGgsIGR0KSB7XG4gICAgICAgIFZlYzMuc2V0KHRoaXMuX3RlbXBfdmVjMywgbGVmdFJpZ2h0ICogdGhpcy50cmFuc2xhdGVEZWx0YSAqIGR0LCAwLCBiYWNrRm9ydGggKiB0aGlzLnRyYW5zbGF0ZURlbHRhICogZHQpO1xuICAgICAgICB0aGlzLm5vZGUueCArPSB0aGlzLl90ZW1wX3ZlYzMueDtcbiAgICAgICAgdGhpcy5ub2RlLnkgKz0gdGhpcy5fdGVtcF92ZWMzLnk7XG4gICAgICAgIHRoaXMubm9kZS56ICs9IHRoaXMuX3RlbXBfdmVjMy56O1xuICAgIH1cblxuICAgIHJvdGF0ZSAobG9uZ2l0dWRpbmFsLCBwZXJwZW5kaWN1bGFyLCBkdCkge1xuICAgICAgICBRdWF0LmZyb21FdWxlcih0aGlzLl90ZW1wX3F1YXQsIHBlcnBlbmRpY3VsYXIgKiB0aGlzLnJvdGF0ZURlbHRhICogZHQsIGxvbmdpdHVkaW5hbCAqIHRoaXMucm90YXRlRGVsdGEgKiBkdCwgMCk7XG4gICAgICAgIFF1YXQubm9ybWFsaXplKHRoaXMuX3RlbXBfcXVhdCwgdGhpcy5fdGVtcF9xdWF0KTtcbiAgICAgICAgdGhpcy5ub2RlLmdldFJvdGF0aW9uKHRoaXMuX3F1YXQpO1xuICAgICAgICB0aGlzLl9xdWF0Lm11bHRpcGx5KHRoaXMuX3RlbXBfcXVhdCk7XG4gICAgICAgIHRoaXMubm9kZS5zZXRSb3RhdGlvbih0aGlzLl9xdWF0KTtcbiAgICB9XG5cbiAgICBvblB1c2hKb3lzdGljayAoZXZlbnQ6IGFueSwgY3VzdG9tRXZlbnREYXRhOiBzdHJpbmcpIHtcbiAgICAgICAgbGV0IGR0ID0gMC4yO1xuICAgICAgICBzd2l0Y2ggKGN1c3RvbUV2ZW50RGF0YSkge1xuICAgICAgICAgICAgY2FzZSAnRic6XG4gICAgICAgICAgICAgICAgdGhpcy50cmFuc2xhdGUoMCwgLTEsIGR0KTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgJ0InOlxuICAgICAgICAgICAgICAgIHRoaXMudHJhbnNsYXRlKDAsIDEsIGR0KTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgJ0wnOlxuICAgICAgICAgICAgICAgIHRoaXMudHJhbnNsYXRlKC0xLCAwLCBkdCk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlICdSJzpcbiAgICAgICAgICAgICAgICB0aGlzLnRyYW5zbGF0ZSgxLCAwLCBkdCk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlICdVJzpcbiAgICAgICAgICAgICAgICB0aGlzLnJvdGF0ZSgwLCAxLCBkdCk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlICdEJzpcbiAgICAgICAgICAgICAgICB0aGlzLnJvdGF0ZSgwLCAtMSwgZHQpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAnUkwnOlxuICAgICAgICAgICAgICAgIHRoaXMucm90YXRlKDEsIDAsIGR0KTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgJ1JSJzpcbiAgICAgICAgICAgICAgICB0aGlzLnJvdGF0ZSgtMSwgMCwgZHQpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgfVxufVxuIl19