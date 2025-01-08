
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/cases/3d-particle/TransformController.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9jYXNlcy8zZC1wYXJ0aWNsZS9UcmFuc2Zvcm1Db250cm9sbGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUNNLElBQUEsS0FBd0IsRUFBRSxDQUFDLFVBQVUsRUFBbkMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFrQixDQUFDO0FBRTVDLElBQU0sSUFBSSxHQUFHLEVBQUUsQ0FBQyxJQUFJLENBQUM7QUFDckIsSUFBTSxJQUFJLEdBQUcsRUFBRSxDQUFDLElBQUksQ0FBQztBQUVyQixJQUFJLFNBQVMsR0FBVyxDQUFDLENBQUM7QUFHMUI7SUFBaUQsdUNBQVk7SUFBN0Q7UUFDSSw2Q0FBNkM7UUFDN0MsY0FBYztRQUZsQixxRUE2RkM7UUF6RkcseUVBQXlFO1FBQ3pFLFlBQVk7UUFDWix5QkFBeUI7UUFLbEIsZUFBUyxHQUFTLElBQUksQ0FBQztRQUl2QixlQUFTLEdBQVMsSUFBSSxDQUFDO1FBSXZCLGVBQVMsR0FBUyxJQUFJLENBQUM7UUFJdkIsZUFBUyxHQUFTLElBQUksQ0FBQztRQUt2QixZQUFNLEdBQWMsSUFBSSxDQUFDO1FBSXpCLFlBQU0sR0FBYyxJQUFJLENBQUM7UUFJekIsWUFBTSxHQUFjLElBQUksQ0FBQztRQUl6QixZQUFNLEdBQWMsSUFBSSxDQUFDO1FBRXhCLGdCQUFVLEdBQVMsSUFBSSxJQUFJLEVBQUUsQ0FBQztRQUM5QixhQUFPLEdBQVMsSUFBSSxJQUFJLEVBQUUsQ0FBQzs7SUFrRHZDLENBQUM7SUFoREcsbUNBQUssR0FBTDtRQUNJLGlDQUFpQztJQUNyQyxDQUFDO0lBRUQsK0JBQStCO0lBQy9CLHlDQUF5QztJQUN6QyxJQUFJO0lBRUosZ0RBQWtCLEdBQWxCLFVBQW9CLE1BQWlCLEVBQUUsSUFBWTtRQUMvQyxJQUFJLENBQUMsVUFBVSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsTUFBTSxDQUFDLFFBQVEsR0FBRyxFQUFFLEdBQUcsU0FBUyxDQUFDLENBQUMsQ0FBQztRQUNuRSxTQUFTLEdBQUcsTUFBTSxDQUFDLFFBQVEsR0FBRyxFQUFFLENBQUM7UUFDakMsSUFBSSxJQUFJLENBQUMsTUFBTSxDQUFDLFNBQVMsRUFBRTtZQUN2QixJQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsSUFBSSxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQztZQUN0QyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsSUFBSSxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQztZQUN0QyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsSUFBSSxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQztTQUN6QztRQUNELElBQUksSUFBSSxDQUFDLE1BQU0sQ0FBQyxTQUFTLEVBQUU7WUFDdkIsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLElBQUksSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUM7WUFDdEMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLElBQUksSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUM7WUFDdEMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLElBQUksSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUM7U0FDekM7UUFDRCxJQUFJLElBQUksQ0FBQyxNQUFNLENBQUMsU0FBUyxFQUFFO1lBQ3ZCLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxJQUFJLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDO1lBQ3RDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxJQUFJLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDO1lBQ3RDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxJQUFJLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDO1NBQ3pDO1FBQ0QsSUFBSSxJQUFJLENBQUMsTUFBTSxDQUFDLFNBQVMsRUFBRTtZQUN2QixJQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsSUFBSSxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQztZQUN0QyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsSUFBSSxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQztZQUN0QyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsSUFBSSxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQztTQUN6QztJQUNMLENBQUM7SUFFRCw2Q0FBZSxHQUFmLFVBQWlCLE1BQWlCLEVBQUUsSUFBWTtRQUM1QyxJQUFJLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQyxRQUFRLEdBQUcsRUFBRSxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ3BELElBQUksSUFBSSxDQUFDLE1BQU0sQ0FBQyxTQUFTLEVBQUU7WUFDdkIsSUFBSSxDQUFDLFNBQVMsQ0FBQyxXQUFXLEdBQUcsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUE7U0FDM0Q7UUFDRCxJQUFJLElBQUksQ0FBQyxNQUFNLENBQUMsU0FBUyxFQUFFO1lBQ3ZCLElBQUksQ0FBQyxTQUFTLENBQUMsV0FBVyxHQUFHLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFBO1NBQzNEO1FBQ0QsSUFBSSxJQUFJLENBQUMsTUFBTSxDQUFDLFNBQVMsRUFBRTtZQUN2QixJQUFJLENBQUMsU0FBUyxDQUFDLFdBQVcsR0FBRyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQTtTQUMzRDtRQUNELElBQUksSUFBSSxDQUFDLE1BQU0sQ0FBQyxTQUFTLEVBQUU7WUFDdkIsSUFBSSxDQUFDLFNBQVMsQ0FBQyxXQUFXLEdBQUcsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUE7U0FDM0Q7SUFDTCxDQUFDO0lBakZEO1FBSEMsUUFBUSxDQUFDO1lBQ04sSUFBSSxFQUFDLElBQUk7U0FDWixDQUFDOzBEQUM0QjtJQUk5QjtRQUhDLFFBQVEsQ0FBQztZQUNOLElBQUksRUFBQyxJQUFJO1NBQ1osQ0FBQzswREFDNEI7SUFJOUI7UUFIQyxRQUFRLENBQUM7WUFDTixJQUFJLEVBQUMsSUFBSTtTQUNaLENBQUM7MERBQzRCO0lBSTlCO1FBSEMsUUFBUSxDQUFDO1lBQ04sSUFBSSxFQUFDLElBQUk7U0FDWixDQUFDOzBEQUM0QjtJQUs5QjtRQUhDLFFBQVEsQ0FBQztZQUNOLElBQUksRUFBQyxFQUFFLENBQUMsTUFBTTtTQUNqQixDQUFDO3VEQUM4QjtJQUloQztRQUhDLFFBQVEsQ0FBQztZQUNOLElBQUksRUFBQyxFQUFFLENBQUMsTUFBTTtTQUNqQixDQUFDO3VEQUM4QjtJQUloQztRQUhDLFFBQVEsQ0FBQztZQUNOLElBQUksRUFBQyxFQUFFLENBQUMsTUFBTTtTQUNqQixDQUFDO3VEQUM4QjtJQUloQztRQUhDLFFBQVEsQ0FBQztZQUNOLElBQUksRUFBQyxFQUFFLENBQUMsTUFBTTtTQUNqQixDQUFDO3VEQUM4QjtJQXhDZixtQkFBbUI7UUFEdkMsT0FBTztPQUNhLG1CQUFtQixDQTZGdkM7SUFBRCwwQkFBQztDQTdGRCxBQTZGQyxDQTdGZ0QsRUFBRSxDQUFDLFNBQVMsR0E2RjVEO2tCQTdGb0IsbUJBQW1CIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiXG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xuXG5jb25zdCBOb2RlID0gY2MuTm9kZTtcbmNvbnN0IFZlYzMgPSBjYy5WZWMzO1xuXG5sZXQgX3RlbXBfbnVtOiBudW1iZXIgPSAwO1xuXG5AY2NjbGFzc1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVHJhbnNmb3JtQ29udHJvbGxlciBleHRlbmRzIGNjLkNvbXBvbmVudCB7XG4gICAgLyogY2xhc3MgbWVtYmVyIGNvdWxkIGJlIGRlZmluZWQgbGlrZSB0aGlzICovXG4gICAgLy8gZHVtbXkgPSAnJztcblxuICAgIC8qIHVzZSBgcHJvcGVydHlgIGRlY29yYXRvciBpZiB5b3VyIHdhbnQgdGhlIG1lbWJlciB0byBiZSBzZXJpYWxpemFibGUgKi9cbiAgICAvLyBAcHJvcGVydHlcbiAgICAvLyBzZXJpYWxpemFibGVEdW1teSA9IDA7XG5cbiAgICBAcHJvcGVydHkoe1xuICAgICAgICB0eXBlOk5vZGUsXG4gICAgfSlcbiAgICBwdWJsaWMgcGFydGljbGUxOiBOb2RlID0gbnVsbDtcbiAgICBAcHJvcGVydHkoe1xuICAgICAgICB0eXBlOk5vZGUsXG4gICAgfSlcbiAgICBwdWJsaWMgcGFydGljbGUyOiBOb2RlID0gbnVsbDtcbiAgICBAcHJvcGVydHkoe1xuICAgICAgICB0eXBlOk5vZGUsXG4gICAgfSlcbiAgICBwdWJsaWMgcGFydGljbGUzOiBOb2RlID0gbnVsbDtcbiAgICBAcHJvcGVydHkoe1xuICAgICAgICB0eXBlOk5vZGUsXG4gICAgfSlcbiAgICBwdWJsaWMgcGFydGljbGU0OiBOb2RlID0gbnVsbDtcblxuICAgIEBwcm9wZXJ0eSh7XG4gICAgICAgIHR5cGU6Y2MuVG9nZ2xlLFxuICAgIH0pXG4gICAgcHVibGljIGNoZWNrMTogY2MuVG9nZ2xlID0gbnVsbDtcbiAgICBAcHJvcGVydHkoe1xuICAgICAgICB0eXBlOmNjLlRvZ2dsZSxcbiAgICB9KVxuICAgIHB1YmxpYyBjaGVjazI6IGNjLlRvZ2dsZSA9IG51bGw7XG4gICAgQHByb3BlcnR5KHtcbiAgICAgICAgdHlwZTpjYy5Ub2dnbGUsXG4gICAgfSlcbiAgICBwdWJsaWMgY2hlY2szOiBjYy5Ub2dnbGUgPSBudWxsO1xuICAgIEBwcm9wZXJ0eSh7XG4gICAgICAgIHR5cGU6Y2MuVG9nZ2xlLFxuICAgIH0pXG4gICAgcHVibGljIGNoZWNrNDogY2MuVG9nZ2xlID0gbnVsbDtcblxuICAgIHByaXZhdGUgX3RyYW5zbGF0ZTogVmVjMyA9IG5ldyBWZWMzKCk7XG4gICAgcHJpdmF0ZSBfcm90YXRlOiBWZWMzID0gbmV3IFZlYzMoKTtcblxuICAgIHN0YXJ0ICgpIHtcbiAgICAgICAgLy8gWW91ciBpbml0aWFsaXphdGlvbiBnb2VzIGhlcmUuXG4gICAgfVxuXG4gICAgLy8gdXBkYXRlIChkZWx0YVRpbWU6IG51bWJlcikge1xuICAgIC8vICAgICAvLyBZb3VyIHVwZGF0ZSBmdW5jdGlvbiBnb2VzIGhlcmUuXG4gICAgLy8gfVxuXG4gICAgb25UcmFuc2xhdGVDaGFuZ2VkIChzbGlkZXI6IGNjLlNsaWRlciwgZGF0YTogc3RyaW5nKSB7XG4gICAgICAgIHRoaXMuX3RyYW5zbGF0ZS5zZXQoY2MudjMoMCwgMCwgc2xpZGVyLnByb2dyZXNzICogMTAgLSBfdGVtcF9udW0pKTtcbiAgICAgICAgX3RlbXBfbnVtID0gc2xpZGVyLnByb2dyZXNzICogMTA7XG4gICAgICAgIGlmICh0aGlzLmNoZWNrMS5pc0NoZWNrZWQpIHtcbiAgICAgICAgICAgIHRoaXMucGFydGljbGUxLnggKz0gdGhpcy5fdHJhbnNsYXRlLng7XG4gICAgICAgICAgICB0aGlzLnBhcnRpY2xlMS55ICs9IHRoaXMuX3RyYW5zbGF0ZS55O1xuICAgICAgICAgICAgdGhpcy5wYXJ0aWNsZTEueiArPSB0aGlzLl90cmFuc2xhdGUuejtcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5jaGVjazIuaXNDaGVja2VkKSB7XG4gICAgICAgICAgICB0aGlzLnBhcnRpY2xlMi54ICs9IHRoaXMuX3RyYW5zbGF0ZS54O1xuICAgICAgICAgICAgdGhpcy5wYXJ0aWNsZTIueSArPSB0aGlzLl90cmFuc2xhdGUueTtcbiAgICAgICAgICAgIHRoaXMucGFydGljbGUyLnogKz0gdGhpcy5fdHJhbnNsYXRlLno7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMuY2hlY2szLmlzQ2hlY2tlZCkge1xuICAgICAgICAgICAgdGhpcy5wYXJ0aWNsZTMueCArPSB0aGlzLl90cmFuc2xhdGUueDtcbiAgICAgICAgICAgIHRoaXMucGFydGljbGU0LnkgKz0gdGhpcy5fdHJhbnNsYXRlLnk7XG4gICAgICAgICAgICB0aGlzLnBhcnRpY2xlMy56ICs9IHRoaXMuX3RyYW5zbGF0ZS56O1xuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLmNoZWNrNC5pc0NoZWNrZWQpIHtcbiAgICAgICAgICAgIHRoaXMucGFydGljbGU0LnggKz0gdGhpcy5fdHJhbnNsYXRlLng7XG4gICAgICAgICAgICB0aGlzLnBhcnRpY2xlNC55ICs9IHRoaXMuX3RyYW5zbGF0ZS55O1xuICAgICAgICAgICAgdGhpcy5wYXJ0aWNsZTQueiArPSB0aGlzLl90cmFuc2xhdGUuejtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIG9uUm90YXRlQ2hhbmdlZCAoc2xpZGVyOiBjYy5TbGlkZXIsIGRhdGE6IHN0cmluZykge1xuICAgICAgICB0aGlzLl9yb3RhdGUuc2V0KGNjLnYzKHNsaWRlci5wcm9ncmVzcyAqIDkwLCAwLCAwKSk7XG4gICAgICAgIGlmICh0aGlzLmNoZWNrMS5pc0NoZWNrZWQpIHtcbiAgICAgICAgICAgIHRoaXMucGFydGljbGUxLmV1bGVyQW5nbGVzID0gY2MudjMoMCwgdGhpcy5fcm90YXRlLngsIDApXG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMuY2hlY2syLmlzQ2hlY2tlZCkge1xuICAgICAgICAgICAgdGhpcy5wYXJ0aWNsZTIuZXVsZXJBbmdsZXMgPSBjYy52MygwLCB0aGlzLl9yb3RhdGUueCwgMClcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5jaGVjazMuaXNDaGVja2VkKSB7XG4gICAgICAgICAgICB0aGlzLnBhcnRpY2xlMy5ldWxlckFuZ2xlcyA9IGNjLnYzKDAsIHRoaXMuX3JvdGF0ZS54LCAwKVxuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLmNoZWNrNC5pc0NoZWNrZWQpIHtcbiAgICAgICAgICAgIHRoaXMucGFydGljbGU0LmV1bGVyQW5nbGVzID0gY2MudjMoMCwgdGhpcy5fcm90YXRlLngsIDApXG4gICAgICAgIH1cbiAgICB9XG59XG4iXX0=