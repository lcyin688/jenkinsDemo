
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/cases/3d_physics/scripts/raytest.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '938eaQ89X9EKrhzOMm1ufOB', 'raytest');
// cases/3d_physics/scripts/raytest.ts

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
var ERaycastType;
(function (ERaycastType) {
    ERaycastType[ERaycastType["ALL"] = 0] = "ALL";
    ERaycastType[ERaycastType["CLOSEST"] = 1] = "CLOSEST";
})(ERaycastType || (ERaycastType = {}));
var RayTest = /** @class */ (function (_super) {
    __extends(RayTest, _super);
    function RayTest() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.defaultMaterial = null;
        _this.rayMaterial = null;
        _this.rayState = null;
        _this._raycastType = ERaycastType.ALL;
        _this._maxDistance = 100000;
        _this._rayTool = null;
        return _this;
    }
    RayTest.prototype.start = function () {
        this._rayTool = cc.director.getPhysics3DManager();
        var canvas = cc.find('Canvas');
        canvas.on(cc.Node.EventType.TOUCH_START, this.onTouchStart, this);
    };
    RayTest.prototype.switchRay = function () {
        if (this._raycastType == ERaycastType.ALL) {
            this._raycastType = ERaycastType.CLOSEST;
            this.rayState.string = "ray close";
        }
        else {
            this._raycastType = ERaycastType.ALL;
            this.rayState.string = "ray all";
        }
    };
    RayTest.prototype.onTouchStart = function (event) {
        this.resetAll();
        var touchLoc = event.touch.getLocation();
        var ray = cc.Camera.main.getRay(touchLoc);
        switch (this._raycastType) {
            case ERaycastType.ALL:
                var results = this._rayTool.raycast(ray, "Ball", this._maxDistance);
                if (results) {
                    for (var i = 0; i < results.length; i++) {
                        var item = results[i];
                        var modelCom = item.collider.node.getComponent(cc.MeshRenderer);
                        modelCom.setMaterial(0, this.rayMaterial);
                        modelCom.markForRender(true);
                    }
                }
                break;
            case ERaycastType.CLOSEST:
                var result = this._rayTool.raycastClosest(ray, "Ball", this._maxDistance);
                if (result) {
                    var modelCom = result.collider.node.getComponent(cc.MeshRenderer);
                    modelCom.setMaterial(0, this.rayMaterial);
                    modelCom.markForRender(true);
                }
                break;
        }
    };
    RayTest.prototype.resetAll = function () {
        for (var i = 0; i < this.node.children.length; i++) {
            if (this.node.children[i].name == 'Sphere2')
                continue;
            var mesh = this.node.children[i].getComponent(cc.MeshRenderer);
            mesh.setMaterial(0, this.defaultMaterial);
            mesh.markForRender(true);
        }
    };
    __decorate([
        property({ type: cc.Material })
    ], RayTest.prototype, "defaultMaterial", void 0);
    __decorate([
        property({ type: cc.Material })
    ], RayTest.prototype, "rayMaterial", void 0);
    __decorate([
        property({ type: cc.Label })
    ], RayTest.prototype, "rayState", void 0);
    RayTest = __decorate([
        ccclass
    ], RayTest);
    return RayTest;
}(cc.Component));
exports.default = RayTest;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9jYXNlcy8zZF9waHlzaWNzL3NjcmlwdHMvcmF5dGVzdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBTSxJQUFBLEtBQXNCLEVBQUUsQ0FBQyxVQUFVLEVBQWxDLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBaUIsQ0FBQztBQUUxQyxJQUFLLFlBR0o7QUFIRCxXQUFLLFlBQVk7SUFDYiw2Q0FBRyxDQUFBO0lBQ0gscURBQU8sQ0FBQTtBQUNYLENBQUMsRUFISSxZQUFZLEtBQVosWUFBWSxRQUdoQjtBQUdEO0lBQXFDLDJCQUFZO0lBQWpEO1FBQUEscUVBa0VDO1FBL0RHLHFCQUFlLEdBQWdCLElBQUksQ0FBQztRQUdwQyxpQkFBVyxHQUFnQixJQUFJLENBQUM7UUFHaEMsY0FBUSxHQUFZLElBQUksQ0FBQztRQUVqQixrQkFBWSxHQUFpQixZQUFZLENBQUMsR0FBRyxDQUFDO1FBQzlDLGtCQUFZLEdBQVcsTUFBTSxDQUFDO1FBQzlCLGNBQVEsR0FBUSxJQUFJLENBQUM7O0lBcURqQyxDQUFDO0lBbkRHLHVCQUFLLEdBQUw7UUFDSSxJQUFJLENBQUMsUUFBUSxHQUFHLEVBQUUsQ0FBQyxRQUFRLENBQUMsbUJBQW1CLEVBQUUsQ0FBQztRQUNsRCxJQUFJLE1BQU0sR0FBRyxFQUFFLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBQy9CLE1BQU0sQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsV0FBVyxFQUFFLElBQUksQ0FBQyxZQUFZLEVBQUUsSUFBSSxDQUFDLENBQUM7SUFDdEUsQ0FBQztJQUVELDJCQUFTLEdBQVQ7UUFDSSxJQUFJLElBQUksQ0FBQyxZQUFZLElBQUksWUFBWSxDQUFDLEdBQUcsRUFBRTtZQUN2QyxJQUFJLENBQUMsWUFBWSxHQUFHLFlBQVksQ0FBQyxPQUFPLENBQUM7WUFDekMsSUFBSSxDQUFDLFFBQVEsQ0FB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LEVBQUUsQ0FBQyxLQUFLLEVBQUMsQ0FBQzs2Q0FDRDtJQVRSLE9BQU87UUFEM0IsT0FBTztPQUNhLE9BQU8sQ0FrRTNCO0lBQUQsY0FBQztDQWxFRCxBQWtFQyxDQWxFb0MsRUFBRSxDQUFDLFNBQVMsR0FrRWhEO2tCQWxFb0IsT0FBTyIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IHtjY2NsYXNzLCBwcm9wZXJ0eX0gPSBjYy5fZGVjb3JhdG9yO1xuXG5lbnVtIEVSYXljYXN0VHlwZSB7XG4gICAgQUxMLFxuICAgIENMT1NFU1Rcbn1cblxuQGNjY2xhc3NcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFJheVRlc3QgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xuXG4gICAgQHByb3BlcnR5KHsgdHlwZTogY2MuTWF0ZXJpYWwgfSlcbiAgICBkZWZhdWx0TWF0ZXJpYWw6IGNjLk1hdGVyaWFsID0gbnVsbDtcblxuICAgIEBwcm9wZXJ0eSh7IHR5cGU6IGNjLk1hdGVyaWFsIH0pXG4gICAgcmF5TWF0ZXJpYWw6IGNjLk1hdGVyaWFsID0gbnVsbDtcblxuICAgIEBwcm9wZXJ0eSh7dHlwZTpjYy5MYWJlbH0pXG4gICAgcmF5U3RhdGU6Y2MuTGFiZWwgPSBudWxsO1xuXG4gICAgcHJpdmF0ZSBfcmF5Y2FzdFR5cGU6IEVSYXljYXN0VHlwZSA9IEVSYXljYXN0VHlwZS5BTEw7XG4gICAgcHJpdmF0ZSBfbWF4RGlzdGFuY2U6IG51bWJlciA9IDEwMDAwMDtcbiAgICBwcml2YXRlIF9yYXlUb29sOiBhbnkgPSBudWxsO1xuXG4gICAgc3RhcnQgKCkge1xuICAgICAgICB0aGlzLl9yYXlUb29sID0gY2MuZGlyZWN0b3IuZ2V0UGh5c2ljczNETWFuYWdlcigpO1xuICAgICAgICBsZXQgY2FudmFzID0gY2MuZmluZCgnQ2FudmFzJyk7XG4gICAgICAgIGNhbnZhcy5vbihjYy5Ob2RlLkV2ZW50VHlwZS5UT1VDSF9TVEFSVCwgdGhpcy5vblRvdWNoU3RhcnQsIHRoaXMpO1xuICAgIH1cblxuICAgIHN3aXRjaFJheSAoKSB7XG4gICAgICAgIGlmICh0aGlzLl9yYXljYXN0VHlwZSA9PSBFUmF5Y2FzdFR5cGUuQUxMKSB7XG4gICAgICAgICAgICB0aGlzLl9yYXljYXN0VHlwZSA9IEVSYXljYXN0VHlwZS5DTE9TRVNUO1xuICAgICAgICAgICAgdGhpcy5yYXlTdGF0ZS5zdHJpbmcgPSBcInJheSBjbG9zZVwiO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5fcmF5Y2FzdFR5cGUgPSBFUmF5Y2FzdFR5cGUuQUxMO1xuICAgICAgICAgICAgdGhpcy5yYXlTdGF0ZS5zdHJpbmcgPSBcInJheSBhbGxcIjtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIG9uVG91Y2hTdGFydCAoZXZlbnQpIHtcbiAgICAgICAgdGhpcy5yZXNldEFsbCgpO1xuICAgICAgICBsZXQgdG91Y2hMb2MgPSBldmVudC50b3VjaC5nZXRMb2NhdGlvbigpO1xuICAgICAgICBsZXQgcmF5ID0gY2MuQ2FtZXJhLm1haW4uZ2V0UmF5KHRvdWNoTG9jKTtcbiAgICAgICAgc3dpdGNoICh0aGlzLl9yYXljYXN0VHlwZSkge1xuICAgICAgICAgICAgY2FzZSBFUmF5Y2FzdFR5cGUuQUxMOlxuICAgICAgICAgICAgICAgIGNvbnN0IHJlc3VsdHMgPSB0aGlzLl9yYXlUb29sLnJheWNhc3QocmF5LCBcIkJhbGxcIiwgdGhpcy5fbWF4RGlzdGFuY2UpO1xuICAgICAgICAgICAgICAgIGlmIChyZXN1bHRzKSB7XG4gICAgICAgICAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcmVzdWx0cy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgaXRlbSA9IHJlc3VsdHNbaV07XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBtb2RlbENvbSA9IGl0ZW0uY29sbGlkZXIubm9kZS5nZXRDb21wb25lbnQoY2MuTWVzaFJlbmRlcmVyKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIG1vZGVsQ29tLnNldE1hdGVyaWFsKDAsIHRoaXMucmF5TWF0ZXJpYWwpO1xuICAgICAgICAgICAgICAgICAgICAgICAgbW9kZWxDb20ubWFya0ZvclJlbmRlcih0cnVlKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgRVJheWNhc3RUeXBlLkNMT1NFU1Q6XG4gICAgICAgICAgICAgICAgY29uc3QgcmVzdWx0ID0gdGhpcy5fcmF5VG9vbC5yYXljYXN0Q2xvc2VzdChyYXksIFwiQmFsbFwiLCB0aGlzLl9tYXhEaXN0YW5jZSk7XG4gICAgICAgICAgICAgICAgaWYgKHJlc3VsdCkge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBtb2RlbENvbSA9IHJlc3VsdC5jb2xsaWRlci5ub2RlLmdldENvbXBvbmVudChjYy5NZXNoUmVuZGVyZXIpO1xuICAgICAgICAgICAgICAgICAgICBtb2RlbENvbS5zZXRNYXRlcmlhbCgwLCB0aGlzLnJheU1hdGVyaWFsKTtcbiAgICAgICAgICAgICAgICAgICAgbW9kZWxDb20ubWFya0ZvclJlbmRlcih0cnVlKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByZXNldEFsbCAoKSB7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5ub2RlLmNoaWxkcmVuLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5ub2RlLmNoaWxkcmVuW2ldLm5hbWUgPT0gJ1NwaGVyZTInKSBjb250aW51ZTtcbiAgICAgICAgICAgIGxldCBtZXNoID0gdGhpcy5ub2RlLmNoaWxkcmVuW2ldLmdldENvbXBvbmVudChjYy5NZXNoUmVuZGVyZXIpO1xuICAgICAgICAgICAgbWVzaC5zZXRNYXRlcmlhbCgwLCB0aGlzLmRlZmF1bHRNYXRlcmlhbCk7XG4gICAgICAgICAgICBtZXNoLm1hcmtGb3JSZW5kZXIodHJ1ZSk7XG4gICAgICAgIH1cbiAgICB9XG59XG4iXX0=