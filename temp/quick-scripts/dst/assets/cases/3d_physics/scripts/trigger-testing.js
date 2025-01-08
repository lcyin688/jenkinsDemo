
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/cases/3d_physics/scripts/trigger-testing.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9jYXNlcy8zZF9waHlzaWNzL3NjcmlwdHMvdHJpZ2dlci10ZXN0aW5nLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBTSxJQUFBLEtBQXdCLEVBQUUsQ0FBQyxVQUFVLEVBQW5DLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBa0IsQ0FBQztBQUc1QztJQUFvQyxrQ0FBWTtJQXNCNUM7UUFBQSxZQUNJLGlCQUFPLFNBRVY7UUFwQk8sV0FBSyxHQUFjLEVBQUUsQ0FBQztRQUc5QixzQkFBZ0IsR0FBZ0IsSUFBSSxDQUFDO1FBR3JDLHdCQUFrQixHQUFnQixJQUFJLENBQUM7UUFFL0Isb0JBQWMsR0FBVSxDQUFDLENBQUM7UUFFMUIsZ0JBQVUsR0FBRyxpQkFBaUIsQ0FBQztRQUMvQixlQUFTLEdBQUcsZ0JBQWdCLENBQUM7UUFDN0IsZUFBUyxHQUFHLGdCQUFnQixDQUFDO1FBR3JDLGVBQVMsR0FBVyxLQUFLLENBQUM7UUFJdEIsS0FBSSxDQUFDLEVBQUUsR0FBRyxnQkFBYyxDQUFDLFVBQVUsRUFBRSxDQUFDOztJQUMxQyxDQUFDO3VCQXpCUSxjQUFjO0lBMkJ2Qiw4QkFBSyxHQUFMO1FBQ0ksSUFBSSxJQUFJLENBQUMsU0FBUyxJQUFJLGtCQUFrQixFQUFFO1lBQ3RDLElBQUksQ0FBQyxVQUFVLEdBQUcsZUFBZSxDQUFDO1lBQ2xDLElBQUksQ0FBQyxTQUFTLEdBQUcsY0FBYyxDQUFDO1lBQ2hDLElBQUksQ0FBQyxTQUFTLEdBQUcsY0FBYyxDQUFDO1NBQ25DO1FBRUQsSUFBSSxPQUFPLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsVUFBVSxDQUFDLENBQUM7UUFDL0MsSUFBSSxPQUFPLEVBQUU7WUFDVCxPQUFPLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxVQUFVLEVBQUUsSUFBSSxDQUFDLFNBQVMsRUFBRSxJQUFJLENBQUMsQ0FBQztZQUNsRCxPQUFPLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxTQUFTLEVBQUUsSUFBSSxDQUFDLFNBQVMsRUFBRSxJQUFJLENBQUMsQ0FBQztZQUNqRCxPQUFPLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxTQUFTLEVBQUUsSUFBSSxDQUFDLFNBQVMsRUFBRSxJQUFJLENBQUMsQ0FBQztTQUNwRDtJQUNMLENBQUM7SUFFRCxrQ0FBUyxHQUFULFVBQVcsS0FBSztRQUNaLElBQUksS0FBSyxDQUFDLElBQUksSUFBSSxJQUFJLENBQUMsVUFBVSxFQUFFO1lBQy9CLElBQUksQ0FBQyxjQUFjLEVBQUUsQ0FBQztTQUN6QjthQUNJLElBQUksS0FBSyxDQUFDLElBQUksSUFBSSxJQUFJLENBQUMsU0FBUyxFQUFFO1lBQ25DLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxhQUFhLENBQUMsR0FBRyxDQUFDLEVBQUU7Z0JBQ3RDLElBQUksQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLGFBQWEsQ0FBQyxHQUFHLENBQUMsR0FBRyxJQUFJLENBQUM7YUFDOUM7aUJBQU07Z0JBQ0gsT0FBTzthQUNWO1NBQ0o7YUFBTSxJQUFJLEtBQUssQ0FBQyxJQUFJLElBQUksSUFBSSxDQUFDLFNBQVMsRUFBRTtZQUNyQyxJQUFJLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxhQUFhLENBQUMsR0FBRyxDQUFDLEdBQUcsS0FBSyxDQUFDO1lBQzVDLElBQUksQ0FBQyxjQUFjLEVBQUUsQ0FBQztTQUN6QjtRQUVELElBQU0sUUFBUSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxZQUFZLENBQUMsQ0FBQztRQUN6RCxJQUFJLElBQUksQ0FBQyxjQUFjLEdBQUcsQ0FBQyxFQUFFO1lBQ3pCLFFBQVEsQ0FBQyxXQUFXLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDO1lBQy9DLFFBQVEsQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLENBQUM7U0FDaEM7YUFBTTtZQUNILFFBQVEsQ0FBQyxXQUFXLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDO1lBQ2pELFFBQVEsQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLENBQUM7U0FDaEM7UUFFRCwrR0FBK0c7UUFDL0csd0JBQXdCO0lBQzVCLENBQUM7O0lBbEVjLHlCQUFVLEdBQUcsQ0FBQyxDQUFDO0lBTTlCO1FBREMsUUFBUSxDQUFDLEVBQUUsSUFBSSxFQUFFLEVBQUUsQ0FBQyxRQUFRLEVBQUUsQ0FBQzs0REFDSztJQUdyQztRQURDLFFBQVEsQ0FBQyxFQUFFLElBQUksRUFBRSxFQUFFLENBQUMsUUFBUSxFQUFFLENBQUM7OERBQ087SUFTdkM7UUFEQyxRQUFRO3FEQUNpQjtJQXBCakIsY0FBYztRQUQxQixPQUFPO09BQ0ssY0FBYyxDQXFFMUI7SUFBRCxxQkFBQztDQXJFRCxBQXFFQyxDQXJFbUMsRUFBRSxDQUFDLFNBQVMsR0FxRS9DO0FBckVZLHdDQUFjIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gY2MuX2RlY29yYXRvcjtcblxuQGNjY2xhc3NcbmV4cG9ydCBjbGFzcyB0cmlnZ2VydGVzdGluZyBleHRlbmRzIGNjLkNvbXBvbmVudCB7XG5cbiAgICBwcml2YXRlIHN0YXRpYyBfaWRDb3VudGVyID0gMDtcbiAgICBwdWJsaWMgcmVhZG9ubHkgaWQ6IG51bWJlcjtcblxuICAgIHByaXZhdGUgX3ByZXY6IEJvb2xlYW5bXSA9IFtdO1xuICAgIFxuICAgIEBwcm9wZXJ0eSh7IHR5cGU6IGNjLk1hdGVyaWFsIH0pXG4gICAgY29sbGlkZXJNYXRlcmlhbDogY2MuTWF0ZXJpYWwgPSBudWxsO1xuXG4gICAgQHByb3BlcnR5KHsgdHlwZTogY2MuTWF0ZXJpYWwgfSlcbiAgICB1bkNvbGxpZGVyTWF0ZXJpYWw6IGNjLk1hdGVyaWFsID0gbnVsbDtcblxuICAgIHByaXZhdGUgX2NvbGxpZGVyQ291bnQ6bnVtYmVyID0gMDtcblxuICAgIHByaXZhdGUgX2VudGVyVHlwZSA9ICdjb2xsaXNpb24tZW50ZXInO1xuICAgIHByaXZhdGUgX3N0YXlUeXBlID0gJ2NvbGxpc2lvbi1zdGF5JztcbiAgICBwcml2YXRlIF9leGl0VHlwZSA9ICdjb2xsaXNpb24tZXhpdCc7XG5cbiAgICBAcHJvcGVydHlcbiAgICBpc1RyaWdnZXI6Ym9vbGVhbiA9IGZhbHNlO1xuXG4gICAgY29uc3RydWN0b3IgKCkge1xuICAgICAgICBzdXBlcigpO1xuICAgICAgICB0aGlzLmlkID0gdHJpZ2dlcnRlc3RpbmcuX2lkQ291bnRlcisrO1xuICAgIH1cblxuICAgIHN0YXJ0ICgpIHtcbiAgICAgICAgaWYgKHRoaXMuaXNUcmlnZ2VyIHx8IENDX1BIWVNJQ1NfQlVJTFRJTikge1xuICAgICAgICAgICAgdGhpcy5fZW50ZXJUeXBlID0gJ3RyaWdnZXItZW50ZXInO1xuICAgICAgICAgICAgdGhpcy5fc3RheVR5cGUgPSAndHJpZ2dlci1zdGF5JztcbiAgICAgICAgICAgIHRoaXMuX2V4aXRUeXBlID0gJ3RyaWdnZXItZXhpdCc7XG4gICAgICAgIH1cblxuICAgICAgICBsZXQgdHJpZ2dlciA9IHRoaXMuZ2V0Q29tcG9uZW50KGNjLkNvbGxpZGVyM0QpO1xuICAgICAgICBpZiAodHJpZ2dlcikge1xuICAgICAgICAgICAgdHJpZ2dlci5vbih0aGlzLl9lbnRlclR5cGUsIHRoaXMub25UcmlnZ2VyLCB0aGlzKTtcbiAgICAgICAgICAgIHRyaWdnZXIub24odGhpcy5fc3RheVR5cGUsIHRoaXMub25UcmlnZ2VyLCB0aGlzKTtcbiAgICAgICAgICAgIHRyaWdnZXIub24odGhpcy5fZXhpdFR5cGUsIHRoaXMub25UcmlnZ2VyLCB0aGlzKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIG9uVHJpZ2dlciAoZXZlbnQpIHtcbiAgICAgICAgaWYgKGV2ZW50LnR5cGUgPT0gdGhpcy5fZW50ZXJUeXBlKSB7XG4gICAgICAgICAgICB0aGlzLl9jb2xsaWRlckNvdW50Kys7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoZXZlbnQudHlwZSA9PSB0aGlzLl9zdGF5VHlwZSkge1xuICAgICAgICAgICAgaWYgKCF0aGlzLl9wcmV2W2V2ZW50Lm90aGVyQ29sbGlkZXIuX2lkXSkge1xuICAgICAgICAgICAgICAgIHRoaXMuX3ByZXZbZXZlbnQub3RoZXJDb2xsaWRlci5faWRdID0gdHJ1ZTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2UgaWYgKGV2ZW50LnR5cGUgPT0gdGhpcy5fZXhpdFR5cGUpIHtcbiAgICAgICAgICAgIHRoaXMuX3ByZXZbZXZlbnQub3RoZXJDb2xsaWRlci5faWRdID0gZmFsc2U7XG4gICAgICAgICAgICB0aGlzLl9jb2xsaWRlckNvdW50LS07XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBtb2RlbENvbSA9IHRoaXMubm9kZS5nZXRDb21wb25lbnQoY2MuTWVzaFJlbmRlcmVyKTtcbiAgICAgICAgaWYgKHRoaXMuX2NvbGxpZGVyQ291bnQgPiAwKSB7XG4gICAgICAgICAgICBtb2RlbENvbS5zZXRNYXRlcmlhbCgwLCB0aGlzLmNvbGxpZGVyTWF0ZXJpYWwpO1xuICAgICAgICAgICAgbW9kZWxDb20ubWFya0ZvclJlbmRlcih0cnVlKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIG1vZGVsQ29tLnNldE1hdGVyaWFsKDAsIHRoaXMudW5Db2xsaWRlck1hdGVyaWFsKTtcbiAgICAgICAgICAgIG1vZGVsQ29tLm1hcmtGb3JSZW5kZXIodHJ1ZSk7XG4gICAgICAgIH0gXG5cbiAgICAgICAgLy8gbGV0IGluZm9TdHIgPSBldmVudC5zZWxmQ29sbGlkZXIubm9kZS5uYW1lICsgJ19fJyArIGV2ZW50LnR5cGUgKyAnX18nICsgZXZlbnQub3RoZXJDb2xsaWRlci5ub2RlLm5hbWUgKyAnICc7XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKGluZm9TdHIpO1xuICAgIH1cbn1cbiJdfQ==