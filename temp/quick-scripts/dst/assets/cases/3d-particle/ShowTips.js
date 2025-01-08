
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/cases/3d-particle/ShowTips.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'b71d3yctLlH0bVfbZXKVJIY', 'ShowTips');
// cases/3d-particle/ShowTips.ts

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
var ShowTips = /** @class */ (function (_super) {
    __extends(ShowTips, _super);
    function ShowTips() {
        /* class member could be defined like this */
        // dummy = '';
        var _this = _super !== null && _super.apply(this, arguments) || this;
        /* use `property` decorator if your want the member to be serializable */
        // @property
        // serializableDummy = 0;
        _this.tips = null;
        _this.ifshow = false;
        return _this;
        // update (deltaTime: number) {
        //     // Your update function goes here.
        // }
    }
    ShowTips.prototype.showtip = function () {
        this.tips.active = !this.tips.active;
    };
    ShowTips.prototype.start = function () {
        // Your initialization goes here.
        this.tips = this.node.getChildByName('tips');
    };
    ShowTips = __decorate([
        ccclass
    ], ShowTips);
    return ShowTips;
}(cc.Component));
exports.default = ShowTips;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9jYXNlcy8zZC1wYXJ0aWNsZS9TaG93VGlwcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDTSxJQUFBLEtBQXdCLEVBQUUsQ0FBQyxVQUFVLEVBQW5DLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBa0IsQ0FBQztBQUc1QztJQUFzQyw0QkFBWTtJQUFsRDtRQUNJLDZDQUE2QztRQUM3QyxjQUFjO1FBRmxCLHFFQXNCQztRQWxCRyx5RUFBeUU7UUFDekUsWUFBWTtRQUNaLHlCQUF5QjtRQUNqQixVQUFJLEdBQVEsSUFBSSxDQUFDO1FBQ2pCLFlBQU0sR0FBWSxLQUFLLENBQUM7O1FBV2hDLCtCQUErQjtRQUMvQix5Q0FBeUM7UUFDekMsSUFBSTtJQUNSLENBQUM7SUFaRywwQkFBTyxHQUFQO1FBQ0ksSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLEdBQUcsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQztJQUN6QyxDQUFDO0lBRUQsd0JBQUssR0FBTDtRQUNJLGlDQUFpQztRQUNqQyxJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBQ2pELENBQUM7SUFqQmdCLFFBQVE7UUFENUIsT0FBTztPQUNhLFFBQVEsQ0FzQjVCO0lBQUQsZUFBQztDQXRCRCxBQXNCQyxDQXRCcUMsRUFBRSxDQUFDLFNBQVMsR0FzQmpEO2tCQXRCb0IsUUFBUSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIlxuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gY2MuX2RlY29yYXRvcjtcblxuQGNjY2xhc3NcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNob3dUaXBzIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcbiAgICAvKiBjbGFzcyBtZW1iZXIgY291bGQgYmUgZGVmaW5lZCBsaWtlIHRoaXMgKi9cbiAgICAvLyBkdW1teSA9ICcnO1xuXG4gICAgLyogdXNlIGBwcm9wZXJ0eWAgZGVjb3JhdG9yIGlmIHlvdXIgd2FudCB0aGUgbWVtYmVyIHRvIGJlIHNlcmlhbGl6YWJsZSAqL1xuICAgIC8vIEBwcm9wZXJ0eVxuICAgIC8vIHNlcmlhbGl6YWJsZUR1bW15ID0gMDtcbiAgICBwcml2YXRlIHRpcHM6IGFueSA9IG51bGw7XG4gICAgcHJpdmF0ZSBpZnNob3c6IGJvb2xlYW4gPSBmYWxzZTtcblxuICAgIHNob3d0aXAoKXtcbiAgICAgICAgdGhpcy50aXBzLmFjdGl2ZSA9ICF0aGlzLnRpcHMuYWN0aXZlO1xuICAgIH1cblxuICAgIHN0YXJ0ICgpIHtcbiAgICAgICAgLy8gWW91ciBpbml0aWFsaXphdGlvbiBnb2VzIGhlcmUuXG4gICAgICAgIHRoaXMudGlwcyA9IHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZSgndGlwcycpO1xuICAgIH1cblxuICAgIC8vIHVwZGF0ZSAoZGVsdGFUaW1lOiBudW1iZXIpIHtcbiAgICAvLyAgICAgLy8gWW91ciB1cGRhdGUgZnVuY3Rpb24gZ29lcyBoZXJlLlxuICAgIC8vIH1cbn1cbiJdfQ==