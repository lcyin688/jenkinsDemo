
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/cases/camera/minimap-with-camera-rect.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '1cac6uuFWFDhbIanRytsZ2s', 'minimap-with-camera-rect');
// cases/camera/minimap-with-camera-rect.ts

"use strict";
// Learn TypeScript:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/typescript.html
//  - [English] http://www.cocos2d-x.org/docs/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/reference/attributes.html
//  - [English] http://www.cocos2d-x.org/docs/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/life-cycle-callbacks.html
//  - [English] http://www.cocos2d-x.org/docs/creator/manual/en/scripting/life-cycle-callbacks.html
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
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property, executeInEditMode = _a.executeInEditMode;
// camera z value should between camera nearClip and farClip
var MINI_CAMERA_Z = 100;
var NewClass = /** @class */ (function (_super) {
    __extends(NewClass, _super);
    function NewClass() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.target = null;
        _this.miniMapCamera = null;
        _this.cameraInfo = null;
        // LIFE-CYCLE CALLBACKS:
        // onLoad () {}
        _this.cameraPos = cc.v3(0, 0, MINI_CAMERA_Z);
        _this.cameraOrthoSize = 1;
        _this._tweens = [];
        return _this;
    }
    NewClass.prototype.start = function () {
        if (!CC_EDITOR) {
            var t = cc.tween(this.target)
                .by(6, { angle: 360 })
                .repeatForever()
                .start();
            this._tweens.push(t);
            t = cc.tween(this)
                .set({ cameraPos: cc.v3(0, 0, MINI_CAMERA_Z), cameraOrthoSize: cc.Canvas.instance.node.height / 2 })
                .to(6, { cameraOrthoSize: this.target.width / 2 })
                .delay(1)
                .to(3, { cameraPos: cc.v3(100, 0, MINI_CAMERA_Z) })
                .union()
                .repeatForever()
                .start();
            this._tweens.push(t);
        }
        else {
            this.cameraOrthoSize = cc.Canvas.instance.node.height / 2;
        }
    };
    NewClass.prototype.onDestroy = function () {
        this._tweens.forEach(function (t) {
            t.stop();
        });
    };
    NewClass.prototype.update = function (dt) {
        var _a = cc.Canvas.instance.node, canvasWidth = _a.width, canvasHeight = _a.height;
        var deviceWidth = canvasWidth, deviceHeight = canvasHeight;
        if (!CC_EDITOR) {
            deviceWidth = cc.game.canvas.width / cc.view._scaleX;
            deviceHeight = cc.game.canvas.height / cc.view._scaleY;
        }
        var orthoHeight = this.cameraOrthoSize;
        var orthoWidth = orthoHeight * (deviceWidth / deviceHeight);
        var rect = this.miniMapCamera.rect;
        this.cameraInfo.clear();
        // draw mini camera border
        this.cameraInfo.rect((rect.x - 0.5) * deviceWidth, (rect.y - 0.5) * deviceHeight, rect.width * deviceWidth, rect.height * deviceHeight);
        this.cameraInfo.strokeColor = cc.Color.YELLOW;
        this.cameraInfo.stroke();
        // draw mini camera ortho size
        this.cameraInfo.rect(this.cameraPos.x - orthoWidth, this.cameraPos.y - orthoHeight, orthoWidth * 2, orthoHeight * 2);
        this.cameraInfo.strokeColor = cc.Color.BLUE;
        this.cameraInfo.stroke();
        this.miniMapCamera.node.position = this.cameraPos;
        this.miniMapCamera.orthoSize = this.cameraOrthoSize;
    };
    __decorate([
        property(cc.Node)
    ], NewClass.prototype, "target", void 0);
    __decorate([
        property(cc.Camera)
    ], NewClass.prototype, "miniMapCamera", void 0);
    __decorate([
        property(cc.Graphics)
    ], NewClass.prototype, "cameraInfo", void 0);
    NewClass = __decorate([
        ccclass,
        executeInEditMode
    ], NewClass);
    return NewClass;
}(cc.Component));
exports.default = NewClass;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9jYXNlcy9jYW1lcmEvbWluaW1hcC13aXRoLWNhbWVyYS1yZWN0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxvQkFBb0I7QUFDcEIsa0ZBQWtGO0FBQ2xGLHlGQUF5RjtBQUN6RixtQkFBbUI7QUFDbkIsNEZBQTRGO0FBQzVGLG1HQUFtRztBQUNuRyw4QkFBOEI7QUFDOUIsNEZBQTRGO0FBQzVGLG1HQUFtRzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRTdGLElBQUEsS0FBeUMsRUFBRSxDQUFDLFVBQVUsRUFBckQsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFBLEVBQUUsaUJBQWlCLHVCQUFpQixDQUFDO0FBRTdELDREQUE0RDtBQUM1RCxJQUFNLGFBQWEsR0FBRyxHQUFHLENBQUM7QUFJMUI7SUFBc0MsNEJBQVk7SUFBbEQ7UUFBQSxxRUE4RUM7UUEzRUcsWUFBTSxHQUFZLElBQUksQ0FBQztRQUd2QixtQkFBYSxHQUFjLElBQUksQ0FBQztRQUdoQyxnQkFBVSxHQUFnQixJQUFJLENBQUM7UUFFL0Isd0JBQXdCO1FBRXhCLGVBQWU7UUFHZixlQUFTLEdBQUcsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLGFBQWEsQ0FBQyxDQUFDO1FBQ3ZDLHFCQUFlLEdBQUcsQ0FBQyxDQUFDO1FBRXBCLGFBQU8sR0FBZSxFQUFFLENBQUM7O0lBMkQ3QixDQUFDO0lBekRHLHdCQUFLLEdBQUw7UUFDSSxJQUFJLENBQUMsU0FBUyxFQUFFO1lBQ1osSUFBSSxDQUFDLEdBQUcsRUFBRSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDO2lCQUN4QixFQUFFLENBQUMsQ0FBQyxFQUFFLEVBQUMsS0FBSyxFQUFFLEdBQUcsRUFBQyxDQUFDO2lCQUNuQixhQUFhLEVBQUU7aUJBQ2YsS0FBSyxFQUFFLENBQUE7WUFDWixJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMs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LEdBQUcsQ0FBQyxDQUFDLENBQUM7UUFDckgsSUFBSSxDQUFDLFVBQVUsQ0FBQyxXQUFXLEdBQUcsRUFBRSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUM7UUFDNUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxNQUFNLEVBQUUsQ0FBQztRQUV6QixJQUFJLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQztRQUNsRCxJQUFJLENBQUMsYUFBYSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUMsZUFBZSxDQUFDO0lBQ3hELENBQUM7SUExRUQ7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQzs0Q0FDSztJQUd2QjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDO21EQUNZO0lBR2hDO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxRQUFRLENBQUM7Z0RBQ1M7SUFUZCxRQUFRO1FBRjVCLE9BQU87UUFDUCxpQkFBaUI7T0FDRyxRQUFRLENBOEU1QjtJQUFELGVBQUM7Q0E5RUQsQUE4RUMsQ0E5RXFDLEVBQUUsQ0FBQyxTQUFTLEdBOEVqRDtrQkE5RW9CLFFBQVEiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyIvLyBMZWFybiBUeXBlU2NyaXB0OlxuLy8gIC0gW0NoaW5lc2VdIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvemgvc2NyaXB0aW5nL3R5cGVzY3JpcHQuaHRtbFxuLy8gIC0gW0VuZ2xpc2hdIGh0dHA6Ly93d3cuY29jb3MyZC14Lm9yZy9kb2NzL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy90eXBlc2NyaXB0Lmh0bWxcbi8vIExlYXJuIEF0dHJpYnV0ZTpcbi8vICAtIFtDaGluZXNlXSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL3poL3NjcmlwdGluZy9yZWZlcmVuY2UvYXR0cmlidXRlcy5odG1sXG4vLyAgLSBbRW5nbGlzaF0gaHR0cDovL3d3dy5jb2NvczJkLXgub3JnL2RvY3MvY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL3JlZmVyZW5jZS9hdHRyaWJ1dGVzLmh0bWxcbi8vIExlYXJuIGxpZmUtY3ljbGUgY2FsbGJhY2tzOlxuLy8gIC0gW0NoaW5lc2VdIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvemgvc2NyaXB0aW5nL2xpZmUtY3ljbGUtY2FsbGJhY2tzLmh0bWxcbi8vICAtIFtFbmdsaXNoXSBodHRwOi8vd3d3LmNvY29zMmQteC5vcmcvZG9jcy9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvbGlmZS1jeWNsZS1jYWxsYmFja3MuaHRtbFxuXG5jb25zdCB7Y2NjbGFzcywgcHJvcGVydHksIGV4ZWN1dGVJbkVkaXRNb2RlfSA9IGNjLl9kZWNvcmF0b3I7XG5cbi8vIGNhbWVyYSB6IHZhbHVlIHNob3VsZCBiZXR3ZWVuIGNhbWVyYSBuZWFyQ2xpcCBhbmQgZmFyQ2xpcFxuY29uc3QgTUlOSV9DQU1FUkFfWiA9IDEwMDtcblxuQGNjY2xhc3NcbkBleGVjdXRlSW5FZGl0TW9kZVxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTmV3Q2xhc3MgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xuXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXG4gICAgdGFyZ2V0OiBjYy5Ob2RlID0gbnVsbDtcblxuICAgIEBwcm9wZXJ0eShjYy5DYW1lcmEpXG4gICAgbWluaU1hcENhbWVyYTogY2MuQ2FtZXJhID0gbnVsbDtcblxuICAgIEBwcm9wZXJ0eShjYy5HcmFwaGljcylcbiAgICBjYW1lcmFJbmZvOiBjYy5HcmFwaGljcyA9IG51bGw7XG5cbiAgICAvLyBMSUZFLUNZQ0xFIENBTExCQUNLUzpcblxuICAgIC8vIG9uTG9hZCAoKSB7fVxuXG5cbiAgICBjYW1lcmFQb3MgPSBjYy52MygwLCAwLCBNSU5JX0NBTUVSQV9aKTtcbiAgICBjYW1lcmFPcnRob1NpemUgPSAxO1xuXG4gICAgX3R3ZWVuczogY2MuVHdlZW5bXSA9IFtdO1xuXG4gICAgc3RhcnQgKCkge1xuICAgICAgICBpZiAoIUNDX0VESVRPUikge1xuICAgICAgICAgICAgbGV0IHQgPSBjYy50d2Vlbih0aGlzLnRhcmdldClcbiAgICAgICAgICAgICAgICAuYnkoNiwge2FuZ2xlOiAzNjB9KVxuICAgICAgICAgICAgICAgIC5yZXBlYXRGb3JldmVyKClcbiAgICAgICAgICAgICAgICAuc3RhcnQoKVxuICAgICAgICAgICAgdGhpcy5fdHdlZW5zLnB1c2godCk7XG5cbiAgICAgICAgICAgIHQgPSBjYy50d2Vlbih0aGlzKVxuICAgICAgICAgICAgICAgIC5zZXQoe2NhbWVyYVBvczogY2MudjMoMCwgMCwgTUlOSV9DQU1FUkFfWiksIGNhbWVyYU9ydGhvU2l6ZTogY2MuQ2FudmFzLmluc3RhbmNlLm5vZGUuaGVpZ2h0IC8gMn0pXG4gICAgICAgICAgICAgICAgLnRvKDYsIHtjYW1lcmFPcnRob1NpemU6IHRoaXMudGFyZ2V0LndpZHRoIC8gMn0pXG4gICAgICAgICAgICAgICAgLmRlbGF5KDEpXG4gICAgICAgICAgICAgICAgLnRvKDMsIHtjYW1lcmFQb3M6IGNjLnYzKDEwMCwgMCwgTUlOSV9DQU1FUkFfWil9KVxuICAgICAgICAgICAgICAgIC51bmlvbigpXG4gICAgICAgICAgICAgICAgLnJlcGVhdEZvcmV2ZXIoKVxuICAgICAgICAgICAgICAgIC5zdGFydCgpXG4gICAgICAgICAgICB0aGlzLl90d2VlbnMucHVzaCh0KTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuY2FtZXJhT3J0aG9TaXplID0gY2MuQ2FudmFzLmluc3RhbmNlLm5vZGUuaGVpZ2h0IC8gMjtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIG9uRGVzdHJveSAoKSB7XG4gICAgICAgIHRoaXMuX3R3ZWVucy5mb3JFYWNoKHQgPT4ge1xuICAgICAgICAgICAgdC5zdG9wKCk7XG4gICAgICAgIH0pXG4gICAgfVxuXG4gICAgdXBkYXRlIChkdCkge1xuICAgICAgICBsZXQgeyB3aWR0aDogY2FudmFzV2lkdGgsIGhlaWdodDogY2FudmFzSGVpZ2h0IH0gPSBjYy5DYW52YXMuaW5zdGFuY2Uubm9kZTtcbiAgICAgICAgXG4gICAgICAgIGxldCBkZXZpY2VXaWR0aCA9IGNhbnZhc1dpZHRoLCBkZXZpY2VIZWlnaHQgPSBjYW52YXNIZWlnaHQ7XG4gICAgICAgIGlmICghQ0NfRURJVE9SKSB7XG4gICAgICAgICAgICBkZXZpY2VXaWR0aCA9IGNjLmdhbWUuY2FudmFzLndpZHRoIC8gY2Mudmlldy5fc2NhbGVYO1xuICAgICAgICAgICAgZGV2aWNlSGVpZ2h0ID0gY2MuZ2FtZS5jYW52YXMuaGVpZ2h0IC8gY2Mudmlldy5fc2NhbGVZO1xuICAgICAgICB9XG5cbiAgICAgICAgbGV0IG9ydGhvSGVpZ2h0ID0gdGhpcy5jYW1lcmFPcnRob1NpemU7XG4gICAgICAgIGxldCBvcnRob1dpZHRoID0gb3J0aG9IZWlnaHQgKiAoZGV2aWNlV2lkdGggLyBkZXZpY2VIZWlnaHQpO1xuICAgICAgICBcbiAgICAgICAgbGV0IHJlY3QgPSB0aGlzLm1pbmlNYXBDYW1lcmEucmVjdDtcbiAgICAgICAgdGhpcy5jYW1lcmFJbmZvLmNsZWFyKCk7XG5cbiAgICAgICAgLy8gZHJhdyBtaW5pIGNhbWVyYSBib3JkZXJcbiAgICAgICAgdGhpcy5jYW1lcmFJbmZvLnJlY3QoKHJlY3QueCAtIDAuNSkgKiBkZXZpY2VXaWR0aCwgKHJlY3QueSAtIDAuNSkgKiBkZXZpY2VIZWlnaHQsIHJlY3Qud2lkdGggKiBkZXZpY2VXaWR0aCwgcmVjdC5oZWlnaHQgKiBkZXZpY2VIZWlnaHQpO1xuICAgICAgICB0aGlzLmNhbWVyYUluZm8uc3Ryb2tlQ29sb3IgPSBjYy5Db2xvci5ZRUxMT1c7XG4gICAgICAgIHRoaXMuY2FtZXJhSW5mby5zdHJva2UoKTtcblxuICAgICAgICAvLyBkcmF3IG1pbmkgY2FtZXJhIG9ydGhvIHNpemVcbiAgICAgICAgdGhpcy5jYW1lcmFJbmZvLnJlY3QodGhpcy5jYW1lcmFQb3MueCAtIG9ydGhvV2lkdGgsIHRoaXMuY2FtZXJhUG9zLnkgLSBvcnRob0hlaWdodCwgb3J0aG9XaWR0aCAqIDIsIG9ydGhvSGVpZ2h0ICogMik7XG4gICAgICAgIHRoaXMuY2FtZXJhSW5mby5zdHJva2VDb2xvciA9IGNjLkNvbG9yLkJMVUU7XG4gICAgICAgIHRoaXMuY2FtZXJhSW5mby5zdHJva2UoKTtcbiAgICAgICAgXG4gICAgICAgIHRoaXMubWluaU1hcENhbWVyYS5ub2RlLnBvc2l0aW9uID0gdGhpcy5jYW1lcmFQb3M7XG4gICAgICAgIHRoaXMubWluaU1hcENhbWVyYS5vcnRob1NpemUgPSB0aGlzLmNhbWVyYU9ydGhvU2l6ZTtcbiAgICB9XG59XG4iXX0=