
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/cases/3d_physics/scripts/enable-shape.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'c372auEmopBg5i6QilLDSVd', 'enable-shape');
// cases/3d_physics/scripts/enable-shape.ts

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
var EnableAllShapde = /** @class */ (function (_super) {
    __extends(EnableAllShapde, _super);
    function EnableAllShapde() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.toState = null;
        return _this;
    }
    EnableAllShapde.prototype.start = function () {
    };
    EnableAllShapde.prototype.switchState = function () {
        var toStateStr = this.toState.string;
        if (toStateStr == "disable") {
            this.disableAllShape();
            this.toState.string = "enable";
        }
        else {
            this.enableAllShape();
            this.toState.string = "disable";
        }
    };
    EnableAllShapde.prototype.enableAllShape = function () {
        var children = this.node.children;
        for (var i = 0; i < children.length; i++) {
            var child = children[i];
            var collider = child.getComponent(cc.Collider3D);
            collider.enabled = true;
        }
    };
    EnableAllShapde.prototype.disableAllShape = function () {
        var children = this.node.children;
        for (var i = 0; i < children.length; i++) {
            var child = children[i];
            var collider = child.getComponent(cc.Collider3D);
            collider.enabled = false;
        }
    };
    __decorate([
        property({ type: cc.Label })
    ], EnableAllShapde.prototype, "toState", void 0);
    EnableAllShapde = __decorate([
        ccclass
    ], EnableAllShapde);
    return EnableAllShapde;
}(cc.Component));
exports.default = EnableAllShapde;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9jYXNlcy8zZF9waHlzaWNzL3NjcmlwdHMvZW5hYmxlLXNoYXBlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFNLElBQUEsS0FBc0IsRUFBRSxDQUFDLFVBQVUsRUFBbEMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFpQixDQUFDO0FBRzFDO0lBQTZDLG1DQUFZO0lBQXpEO1FBQUEscUVBcUNDO1FBbENHLGFBQU8sR0FBWSxJQUFJLENBQUM7O0lBa0M1QixDQUFDO0lBaENHLCtCQUFLLEdBQUw7SUFFQSxDQUFDO0lBRUQscUNBQVcsR0FBWDtRQUNJLElBQUksVUFBVSxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDO1FBQ3JDLElBQUksVUFBVSxJQUFJLFNBQVMsRUFBRTtZQUN6QixJQUFJLENBQUMsZUFBZSxFQUFFLENBQUM7WUFDdkIsSUFBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLEdBQUcsUUFBUSxDQUFDO1NBQ2xDO2FBQU07WUFDSCxJQUFJLENBQUMsY0FBYyxFQUFFLENBQUM7WUFDdEIsSUFBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLEdBQUcsU0FBUyxDQUFDO1NBQ25DO0lBQ0wsQ0FBQztJQUVELHdDQUFjLEdBQWQ7UUFDSSxJQUFJLFFBQVEsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQztRQUNsQyxLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsUUFBUSxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFBRTtZQUN0QyxJQUFJLEtBQUssR0FBRyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDeEIsSUFBSSxRQUFRLEdBQUcsS0FBSyxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsVUFBVSxDQUFDLENBQUM7WUFDakQsUUFBUSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUM7U0FDM0I7SUFDTCxDQUFDO0lBRUQseUNBQWUsR0FBZjtRQUNJLElBQUksUUFBUSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDO1FBQ2xDLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxRQUFRLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBRSxFQUFFO1lBQ3RDLElBQUksS0FBSyxHQUFHLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUN4QixJQUFJLFFBQVEsR0FBRyxLQUFLLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxVQUFVLENBQUMsQ0FBQztZQUNqRCxRQUFRLENBQUMsT0FBTyxHQUFHLEtBQUssQ0FBQztTQUM1QjtJQUNMLENBQUM7SUFqQ0Q7UUFEQyxRQUFRLENBQUMsRUFBQyxJQUFJLEVBQUMsRUFBRSxDQUFDLEtBQUssRUFBQyxDQUFDO29EQUNGO0lBSFAsZUFBZTtRQURuQyxPQUFPO09BQ2EsZUFBZSxDQXFDbkM7SUFBRCxzQkFBQztDQXJDRCxBQXFDQyxDQXJDNEMsRUFBRSxDQUFDLFNBQVMsR0FxQ3hEO2tCQXJDb0IsZUFBZSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IHtjY2NsYXNzLCBwcm9wZXJ0eX0gPSBjYy5fZGVjb3JhdG9yO1xuXG5AY2NjbGFzc1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRW5hYmxlQWxsU2hhcGRlIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcblxuICAgIEBwcm9wZXJ0eSh7dHlwZTpjYy5MYWJlbH0pXG4gICAgdG9TdGF0ZTpjYy5MYWJlbCA9IG51bGw7XG5cbiAgICBzdGFydCAoKSB7XG5cbiAgICB9XG5cbiAgICBzd2l0Y2hTdGF0ZSAoKSB7XG4gICAgICAgIGxldCB0b1N0YXRlU3RyID0gdGhpcy50b1N0YXRlLnN0cmluZztcbiAgICAgICAgaWYgKHRvU3RhdGVTdHIgPT0gXCJkaXNhYmxlXCIpIHtcbiAgICAgICAgICAgIHRoaXMuZGlzYWJsZUFsbFNoYXBlKCk7XG4gICAgICAgICAgICB0aGlzLnRvU3RhdGUuc3RyaW5nID0gXCJlbmFibGVcIjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuZW5hYmxlQWxsU2hhcGUoKTtcbiAgICAgICAgICAgIHRoaXMudG9TdGF0ZS5zdHJpbmcgPSBcImRpc2FibGVcIjtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGVuYWJsZUFsbFNoYXBlICgpIHtcbiAgICAgICAgbGV0IGNoaWxkcmVuID0gdGhpcy5ub2RlLmNoaWxkcmVuO1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGNoaWxkcmVuLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBsZXQgY2hpbGQgPSBjaGlsZHJlbltpXTtcbiAgICAgICAgICAgIGxldCBjb2xsaWRlciA9IGNoaWxkLmdldENvbXBvbmVudChjYy5Db2xsaWRlcjNEKTtcbiAgICAgICAgICAgIGNvbGxpZGVyLmVuYWJsZWQgPSB0cnVlO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZGlzYWJsZUFsbFNoYXBlICgpIHtcbiAgICAgICAgbGV0IGNoaWxkcmVuID0gdGhpcy5ub2RlLmNoaWxkcmVuO1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGNoaWxkcmVuLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBsZXQgY2hpbGQgPSBjaGlsZHJlbltpXTtcbiAgICAgICAgICAgIGxldCBjb2xsaWRlciA9IGNoaWxkLmdldENvbXBvbmVudChjYy5Db2xsaWRlcjNEKTtcbiAgICAgICAgICAgIGNvbGxpZGVyLmVuYWJsZWQgPSBmYWxzZTsgICAgICAgIFxuICAgICAgICB9XG4gICAgfVxufVxuIl19