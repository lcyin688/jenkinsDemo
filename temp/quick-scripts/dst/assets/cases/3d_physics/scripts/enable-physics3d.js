
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/cases/3d_physics/scripts/enable-physics3d.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'c4021KQFRRMpq8Rl1Z07uGF', 'enable-physics3d');
// cases/3d_physics/scripts/enable-physics3d.ts

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
var EnablePhysics3D = /** @class */ (function (_super) {
    __extends(EnablePhysics3D, _super);
    function EnablePhysics3D() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.needPhysics = false;
        _this.needPhysicsWord = null;
        return _this;
    }
    EnablePhysics3D.prototype.onLoad = function () {
        cc.director.getPhysics3DManager().enabled = true;
        var showWarn = this.needPhysics && CC_PHYSICS_BUILTIN;
        if (this.needPhysicsWord) {
            this.needPhysicsWord.active = showWarn;
        }
    };
    __decorate([
        property
    ], EnablePhysics3D.prototype, "needPhysics", void 0);
    __decorate([
        property({ type: cc.Node })
    ], EnablePhysics3D.prototype, "needPhysicsWord", void 0);
    EnablePhysics3D = __decorate([
        ccclass
    ], EnablePhysics3D);
    return EnablePhysics3D;
}(cc.Component));
exports.default = EnablePhysics3D;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9jYXNlcy8zZF9waHlzaWNzL3NjcmlwdHMvZW5hYmxlLXBoeXNpY3MzZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBTSxJQUFBLEtBQXNCLEVBQUUsQ0FBQyxVQUFVLEVBQWxDLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBaUIsQ0FBQztBQUcxQztJQUE2QyxtQ0FBWTtJQUF6RDtRQUFBLHFFQWVDO1FBWkcsaUJBQVcsR0FBYSxLQUFLLENBQUM7UUFHOUIscUJBQWUsR0FBVyxJQUFJLENBQUM7O0lBU25DLENBQUM7SUFQRyxnQ0FBTSxHQUFOO1FBQ0ksRUFBRSxDQUFDLFFBQVEsQ0FBQyxtQkFBbUIsRUFBRSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUM7UUFDakQsSUFBSSxRQUFRLEdBQUcsSUFBSSxDQUFDLFdBQVcsSUFBSSxrQkFBa0IsQ0FBQztRQUN0RCxJQUFJLElBQUksQ0FBQyxlQUFlLEVBQUU7WUFDdEIsSUFBSSxDQUFDLGVBQWUsQ0FBQyxNQUFNLEdBQUcsUUFBUSxDQUFDO1NBQzFDO0lBQ0wsQ0FBQztJQVhEO1FBREMsUUFBUTt3REFDcUI7SUFHOUI7UUFEQyxRQUFRLENBQUMsRUFBQyxJQUFJLEVBQUMsRUFBRSxDQUFDLElBQUksRUFBQyxDQUFDOzREQUNNO0lBTmQsZUFBZTtRQURuQyxPQUFPO09BQ2EsZUFBZSxDQWVuQztJQUFELHNCQUFDO0NBZkQsQUFlQyxDQWY0QyxFQUFFLENBQUMsU0FBUyxHQWV4RDtrQkFmb0IsZUFBZSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IHtjY2NsYXNzLCBwcm9wZXJ0eX0gPSBjYy5fZGVjb3JhdG9yO1xuXG5AY2NjbGFzc1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRW5hYmxlUGh5c2ljczNEIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcblxuICAgIEBwcm9wZXJ0eVxuICAgIG5lZWRQaHlzaWNzIDogYm9vbGVhbiA9IGZhbHNlO1xuXG4gICAgQHByb3BlcnR5KHt0eXBlOmNjLk5vZGV9KVxuICAgIG5lZWRQaHlzaWNzV29yZDpjYy5Ob2RlID0gbnVsbDtcblxuICAgIG9uTG9hZCAoKSB7XG4gICAgICAgIGNjLmRpcmVjdG9yLmdldFBoeXNpY3MzRE1hbmFnZXIoKS5lbmFibGVkID0gdHJ1ZTtcbiAgICAgICAgbGV0IHNob3dXYXJuID0gdGhpcy5uZWVkUGh5c2ljcyAmJiBDQ19QSFlTSUNTX0JVSUxUSU47XG4gICAgICAgIGlmICh0aGlzLm5lZWRQaHlzaWNzV29yZCkge1xuICAgICAgICAgICAgdGhpcy5uZWVkUGh5c2ljc1dvcmQuYWN0aXZlID0gc2hvd1dhcm47XG4gICAgICAgIH1cbiAgICB9XG59XG4iXX0=