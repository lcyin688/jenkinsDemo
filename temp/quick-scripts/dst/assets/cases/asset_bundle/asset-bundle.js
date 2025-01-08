
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/cases/asset_bundle/asset-bundle.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'a1593ZAlz9Fk4nHnFYUp3O+', 'asset-bundle');
// cases/asset_bundle/asset-bundle.ts

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
var i18n = require("../../i18n/i18n");
var AssetBundle = /** @class */ (function (_super) {
    __extends(AssetBundle, _super);
    function AssetBundle() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.loadTips = null;
        _this.showWindow = null;
        _this.labels = [];
        _this._audioSource = null;
        _this._isLoading = false;
        return _this;
        // update (dt) {}
    }
    // LIFE-CYCLE CALLBACKS:
    AssetBundle.prototype.onLoad = function () {
        var testBundle = cc.assetManager.getBundle('TestBundle');
        if (testBundle) {
            this.labels[0].textKey = i18n.t("cases/AssetBundle.12");
        }
    };
    AssetBundle.prototype.onClickBundle = function () {
        var _this = this;
        var testBundle = cc.assetManager.getBundle('TestBundle');
        if (testBundle || this._isLoading) {
            return;
        }
        this._onClear();
        this._isLoading = true;
        this.loadTips.textKey = "Bundle Loading....";
        cc.assetManager.loadBundle('TestBundle', function (err) {
            if (err) {
                cc.log('Error url [' + err + ']');
                return;
            }
            _this._isLoading = false;
            _this.loadTips.textKey = "Bundle loaded Successfully!";
            _this.labels[0].textKey = i18n.t("cases/AssetBundle.12");
        });
    };
    AssetBundle.prototype.onClickTexture = function () {
        var _this = this;
        if (this._isLoading)
            return;
        var testBundle = cc.assetManager.getBundle('TestBundle');
        if (!testBundle) {
            this.loadTips.textKey = "cases/AssetBundle.9";
            return;
        }
        this._onClear();
        this._isLoading = true;
        this.loadTips.textKey = "Texture Loading....";
        testBundle.load("gold", function (err, asset) {
            if (err) {
                cc.log('Error url [' + err + ']');
                return;
            }
            _this._isLoading = false;
            _this.loadTips.textKey = "";
            var node = new cc.Node("New Node");
            node.setPosition(0, 0);
            var component = node.addComponent(cc.Sprite);
            component.spriteFrame = new cc.SpriteFrame(asset);
            _this.labels[1].textKey = i18n.t("cases/AssetBundle.12");
            _this.showWindow.addChild(node);
        });
    };
    AssetBundle.prototype.onClickAudio = function () {
        var _this = this;
        if (this._isLoading)
            return;
        var testBundle = cc.assetManager.getBundle('TestBundle');
        if (!testBundle) {
            this.loadTips.textKey = "cases/AssetBundle.9";
            return;
        }
        this._onClear();
        this._isLoading = true;
        this.loadTips.textKey = "Audio Loading....";
        testBundle.load("ss", function (err, asset) {
            if (err) {
                cc.log('Error url [' + err + ']');
                return;
            }
            _this._isLoading = false;
            _this.loadTips.textKey = "";
            var node = new cc.Node("New Node");
            node.setPosition(0, 0);
            var component = node.addComponent(cc.AudioSource);
            component.clip = asset;
            component.play();
            _this._audioSource = component;
            _this.loadTips.textKey = "cases/AssetBundle.15";
            _this.labels[2].textKey = i18n.t("cases/AssetBundle.12");
            _this.showWindow.addChild(node);
        });
    };
    AssetBundle.prototype.onClickScene = function () {
        var _this = this;
        if (this._isLoading)
            return;
        var testBundle = cc.assetManager.getBundle('TestBundle');
        if (!testBundle) {
            this.loadTips.textKey = "cases/AssetBundle.9";
            return;
        }
        this._onClear();
        this._isLoading = true;
        this.loadTips.textKey = "Scene Loading....";
        testBundle.loadScene("sub-scene", function (err, asset) {
            if (err) {
                cc.log('Error url [' + err + ']');
                return;
            }
            _this._isLoading = false;
            _this.loadTips.textKey = "";
            cc.director.runScene(asset);
        });
    };
    AssetBundle.prototype.onClickDestroy = function () {
        if (this._isLoading)
            return;
        var testBundle = cc.assetManager.getBundle('TestBundle');
        if (!testBundle) {
            this.loadTips.textKey = "cases/AssetBundle.9";
            return;
        }
        this._onClear();
        cc.assetManager.removeBundle(testBundle);
        this.loadTips.textKey = "cases/AssetBundle.17";
        this.labels[0].textKey = "cases/AssetBundle.2";
        this.labels[1].textKey = "cases/AssetBundle.4";
        this.labels[2].textKey = "cases/AssetBundle.3";
        this.labels[3].textKey = "cases/AssetBundle.5";
    };
    AssetBundle.prototype.onClickRelease = function () {
        if (this._isLoading)
            return;
        var testBundle = cc.assetManager.getBundle('TestBundle');
        if (!testBundle) {
            this.loadTips.textKey = "cases/AssetBundle.9";
            return;
        }
        this._onClear();
        testBundle.releaseAll();
        this.loadTips.textKey = "cases/AssetBundle.16";
        this.labels[1].textKey = "cases/AssetBundle.4";
        this.labels[2].textKey = "cases/AssetBundle.3";
        this.labels[3].textKey = "cases/AssetBundle.5";
    };
    AssetBundle.prototype._onClear = function () {
        this.showWindow.removeAllChildren(true);
        if (this._audioSource && this._audioSource instanceof cc.AudioSource) {
            this._audioSource.stop();
        }
    };
    __decorate([
        property(cc.Label)
    ], AssetBundle.prototype, "loadTips", void 0);
    __decorate([
        property(cc.Node)
    ], AssetBundle.prototype, "showWindow", void 0);
    __decorate([
        property({ type: [cc.Label] })
    ], AssetBundle.prototype, "labels", void 0);
    AssetBundle = __decorate([
        ccclass
    ], AssetBundle);
    return AssetBundle;
}(cc.Component));
exports.default = AssetBundle;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9jYXNlcy9hc3NldF9idW5kbGUvYXNzZXQtYnVuZGxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFNLElBQUEsS0FBc0IsRUFBRSxDQUFDLFVBQVUsRUFBbEMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFpQixDQUFDO0FBQzFDLHNDQUF3QztBQUd4QztJQUF5QywrQkFBWTtJQUFyRDtRQUFBLHFFQThKQztRQTNKVSxjQUFRLEdBQVEsSUFBSSxDQUFDO1FBR3JCLGdCQUFVLEdBQVksSUFBSSxDQUFDO1FBRzNCLFlBQU0sR0FBb0IsRUFBRSxDQUFDO1FBRTVCLGtCQUFZLEdBQW1CLElBQUksQ0FBQztRQUVwQyxnQkFBVSxHQUFZLEtBQUssQ0FBQzs7UUFnSnBDLGlCQUFpQjtJQUNyQixDQUFDO0lBL0lHLHdCQUF3QjtJQUV4Qiw0QkFBTSxHQUFOO1FBQ0ksSUFBSSxVQUFVLEdBQUcsRUFBRSxDQUFDLFlBQVksQ0FBQyxTQUFTLENBQUMsWUFBWSxDQUFDLENBQUM7UUFDekQsSUFBSSxVQUFVLEVBQUU7WUFDWixJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUMsQ0FBQyxDQUFDLHNCQUFzQixDQUFDLENBQUM7U0FDM0Q7SUFDTCxDQUFDO0lBRUQsbUNBQWEsR0FBYjtRQUFBLGlCQWlCQztRQWhCRyxJQUFJLFVBQVUsR0FBRyxFQUFFLENBQUMsWUFBWSxDQUFDLFNBQVMsQ0FBQyxZQUFZLENBQUMsQ0FBQztRQUN6RCxJQUFJLFVBQVUsSUFBSSxJQUFJLENBQUMsVUFBVSxFQUFFO1lBQy9CLE9BQU87U0FDVjtRQUNELElBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQTtRQUNmLElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDO1FBQ3ZCLElBQUksQ0FBQyxRQUFRLENBQUMsT0FBTyxHQUFHLG9CQUFvQixDQUFDO1FBQzdDLEVBQUUs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QUMsS0FBSyxDQUFDLEVBQUMsQ0FBQzsrQ0FDTztJQVRuQixXQUFXO1FBRC9CLE9BQU87T0FDYSxXQUFXLENBOEovQjtJQUFELGtCQUFDO0NBOUpELEFBOEpDLENBOUp3QyxFQUFFLENBQUMsU0FBUyxHQThKcEQ7a0JBOUpvQixXQUFXIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiY29uc3Qge2NjY2xhc3MsIHByb3BlcnR5fSA9IGNjLl9kZWNvcmF0b3I7XG5pbXBvcnQgKiBhcyBpMThuIGZyb20gJy4uLy4uL2kxOG4vaTE4bic7XG5cbkBjY2NsYXNzXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBBc3NldEJ1bmRsZSBleHRlbmRzIGNjLkNvbXBvbmVudCB7XG5cbiAgICBAcHJvcGVydHkoY2MuTGFiZWwpXG4gICAgcHVibGljIGxvYWRUaXBzOiBhbnkgPSBudWxsO1xuXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXG4gICAgcHVibGljIHNob3dXaW5kb3c6IGNjLk5vZGUgPSBudWxsO1xuXG4gICAgQHByb3BlcnR5KHt0eXBlOiBbY2MuTGFiZWxdfSlcbiAgICBwdWJsaWMgbGFiZWxzOiBBcnJheTxjYy5MYWJlbD4gPSBbXTtcblxuICAgIHByaXZhdGUgX2F1ZGlvU291cmNlOiBjYy5BdWRpb1NvdXJjZSA9IG51bGw7XG5cbiAgICBwcml2YXRlIF9pc0xvYWRpbmc6IEJvb2xlYW4gPSBmYWxzZTtcblxuICAgIC8vIExJRkUtQ1lDTEUgQ0FMTEJBQ0tTOlxuXG4gICAgb25Mb2FkICgpIHtcbiAgICAgICAgdmFyIHRlc3RCdW5kbGUgPSBjYy5hc3NldE1hbmFnZXIuZ2V0QnVuZGxlKCdUZXN0QnVuZGxlJyk7XG4gICAgICAgIGlmICh0ZXN0QnVuZGxlKSB7XG4gICAgICAgICAgICB0aGlzLmxhYmVsc1swXS50ZXh0S2V5ID0gaTE4bi50KFwiY2FzZXMvQXNzZXRCdW5kbGUuMTJcIik7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBvbkNsaWNrQnVuZGxlICgpIHtcbiAgICAgICAgdmFyIHRlc3RCdW5kbGUgPSBjYy5hc3NldE1hbmFnZXIuZ2V0QnVuZGxlKCdUZXN0QnVuZGxlJyk7XG4gICAgICAgIGlmICh0ZXN0QnVuZGxlIHx8IHRoaXMuX2lzTG9hZGluZykge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuX29uQ2xlYXIoKVxuICAgICAgICB0aGlzLl9pc0xvYWRpbmcgPSB0cnVlO1xuICAgICAgICB0aGlzLmxvYWRUaXBzLnRleHRLZXkgPSBcIkJ1bmRsZSBMb2FkaW5nLi4uLlwiO1xuICAgICAgICBjYy5hc3NldE1hbmFnZXIubG9hZEJ1bmRsZSgnVGVzdEJ1bmRsZScsIChlcnIpID0+IHtcbiAgICAgICAgICAgIGlmIChlcnIpIHtcbiAgICAgICAgICAgICAgICBjYy5sb2coJ0Vycm9yIHVybCBbJyArIGVyciArICddJyk7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5faXNMb2FkaW5nID0gZmFsc2U7XG4gICAgICAgICAgICB0aGlzLmxvYWRUaXBzLnRleHRLZXkgPSBcIkJ1bmRsZSBsb2FkZWQgU3VjY2Vzc2Z1bGx5IVwiO1xuICAgICAgICAgICAgdGhpcy5sYWJlbHNbMF0udGV4dEtleSA9IGkxOG4udChcImNhc2VzL0Fzc2V0QnVuZGxlLjEyXCIpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBvbkNsaWNrVGV4dHVyZSAoKSB7XG4gICAgICAgIGlmICh0aGlzLl9pc0xvYWRpbmcpIHJldHVybjtcbiAgICAgICAgdmFyIHRlc3RCdW5kbGUgPSBjYy5hc3NldE1hbmFnZXIuZ2V0QnVuZGxlKCdUZXN0QnVuZGxlJyk7XG4gICAgICAgIGlmICghdGVzdEJ1bmRsZSkge1xuICAgICAgICAgICAgdGhpcy5sb2FkVGlwcy50ZXh0S2V5ID0gXCJjYXNlcy9Bc3NldEJ1bmRsZS45XCI7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5fb25DbGVhcigpXG4gICAgICAgIHRoaXMuX2lzTG9hZGluZyA9IHRydWU7XG4gICAgICAgIHRoaXMubG9hZFRpcHMudGV4dEtleSA9IFwiVGV4dHVyZSBMb2FkaW5nLi4uLlwiO1xuICAgICAgICB0ZXN0QnVuZGxlLmxvYWQoXCJnb2xkXCIsIChlcnI6IEVycm9yLCBhc3NldDogY2MuVGV4dHVyZTJEKSA9PiB7XG4gICAgICAgICAgICBpZiAoZXJyKSB7XG4gICAgICAgICAgICAgICAgY2MubG9nKCdFcnJvciB1cmwgWycgKyBlcnIgKyAnXScpO1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMuX2lzTG9hZGluZyA9IGZhbHNlO1xuICAgICAgICAgICAgdGhpcy5sb2FkVGlwcy50ZXh0S2V5ID0gXCJcIjtcbiAgICAgICAgICAgIHZhciBub2RlID0gbmV3IGNjLk5vZGUoXCJOZXcgTm9kZVwiKTtcbiAgICAgICAgICAgIG5vZGUuc2V0UG9zaXRpb24oMCwgMCk7XG4gICAgICAgICAgICBsZXQgY29tcG9uZW50ID0gbm9kZS5hZGRDb21wb25lbnQoY2MuU3ByaXRlKTtcbiAgICAgICAgICAgIGNvbXBvbmVudC5zcHJpdGVGcmFtZSA9IG5ldyBjYy5TcHJpdGVGcmFtZShhc3NldCk7XG4gICAgICAgICAgICB0aGlzLmxhYmVsc1sxXS50ZXh0S2V5ID0gaTE4bi50KFwiY2FzZXMvQXNzZXRCdW5kbGUuMTJcIik7XG4gICAgICAgICAgICB0aGlzLnNob3dXaW5kb3cuYWRkQ2hpbGQobm9kZSk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIG9uQ2xpY2tBdWRpbyAoKSB7XG4gICAgICAgIGlmICh0aGlzLl9pc0xvYWRpbmcpIHJldHVybjtcbiAgICAgICAgdmFyIHRlc3RCdW5kbGUgPSBjYy5hc3NldE1hbmFnZXIuZ2V0QnVuZGxlKCdUZXN0QnVuZGxlJyk7XG4gICAgICAgIGlmICghdGVzdEJ1bmRsZSkge1xuICAgICAgICAgICAgdGhpcy5sb2FkVGlwcy50ZXh0S2V5ID0gXCJjYXNlcy9Bc3NldEJ1bmRsZS45XCI7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5fb25DbGVhcigpXG4gICAgICAgIHRoaXMuX2lzTG9hZGluZyA9IHRydWU7XG4gICAgICAgIHRoaXMubG9hZFRpcHMudGV4dEtleSA9IFwiQXVkaW8gTG9hZGluZy4uLi5cIjtcbiAgICAgICAgdGVzdEJ1bmRsZS5sb2FkKFwic3NcIiwgKGVycjogRXJyb3IsIGFzc2V0OiBjYy5BdWRpb0NsaXApID0+IHtcbiAgICAgICAgICAgIGlmIChlcnIpIHtcbiAgICAgICAgICAgICAgICBjYy5sb2coJ0Vycm9yIHVybCBbJyArIGVyciArICddJyk7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5faXNMb2FkaW5nID0gZmFsc2U7XG4gICAgICAgICAgICB0aGlzLmxvYWRUaXBzLnRleHRLZXkgPSBcIlwiO1xuICAgICAgICAgICAgdmFyIG5vZGUgPSBuZXcgY2MuTm9kZShcIk5ldyBOb2RlXCIpO1xuICAgICAgICAgICAgbm9kZS5zZXRQb3NpdGlvbigwLCAwKTtcbiAgICAgICAgICAgIGxldCBjb21wb25lbnQgPSBub2RlLmFkZENvbXBvbmVudChjYy5BdWRpb1NvdXJjZSk7XG4gICAgICAgICAgICBjb21wb25lbnQuY2xpcCA9IGFzc2V0O1xuICAgICAgICAgICAgY29tcG9uZW50LnBsYXkoKTtcbiAgICAgICAgICAgIHRoaXMuX2F1ZGlvU291cmNlID0gY29tcG9uZW50O1xuICAgICAgICAgICAgdGhpcy5sb2FkVGlwcy50ZXh0S2V5ID0gXCJjYXNlcy9Bc3NldEJ1bmRsZS4xNVwiO1xuICAgICAgICAgICAgdGhpcy5sYWJlbHNbMl0udGV4dEtleSA9IGkxOG4udChcImNhc2VzL0Fzc2V0QnVuZGxlLjEyXCIpO1xuICAgICAgICAgICAgdGhpcy5zaG93V2luZG93LmFkZENoaWxkKG5vZGUpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBvbkNsaWNrU2NlbmUgKCkge1xuICAgICAgICBpZiAodGhpcy5faXNMb2FkaW5nKSByZXR1cm47XG4gICAgICAgIHZhciB0ZXN0QnVuZGxlID0gY2MuYXNzZXRNYW5hZ2VyLmdldEJ1bmRsZSgnVGVzdEJ1bmRsZScpO1xuICAgICAgICBpZiAoIXRlc3RCdW5kbGUpIHtcbiAgICAgICAgICAgIHRoaXMubG9hZFRpcHMudGV4dEtleSA9IFwiY2FzZXMvQXNzZXRCdW5kbGUuOVwiO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuX29uQ2xlYXIoKVxuICAgICAgICB0aGlzLl9pc0xvYWRpbmcgPSB0cnVlO1xuICAgICAgICB0aGlzLmxvYWRUaXBzLnRleHRLZXkgPSBcIlNjZW5lIExvYWRpbmcuLi4uXCI7XG4gICAgICAgIHRlc3RCdW5kbGUubG9hZFNjZW5lKFwic3ViLXNjZW5lXCIsIChlcnI6IEVycm9yLCBhc3NldDogY2MuU2NlbmVBc3NldCkgPT4ge1xuICAgICAgICAgICAgaWYgKGVycikge1xuICAgICAgICAgICAgICAgIGNjLmxvZygnRXJyb3IgdXJsIFsnICsgZXJyICsgJ10nKTtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLl9pc0xvYWRpbmcgPSBmYWxzZTtcbiAgICAgICAgICAgIHRoaXMubG9hZFRpcHMudGV4dEtleSA9IFwiXCI7XG4gICAgICAgICAgICBjYy5kaXJlY3Rvci5ydW5TY2VuZShhc3NldCk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIG9uQ2xpY2tEZXN0cm95ICgpIHtcbiAgICAgICAgaWYgKHRoaXMuX2lzTG9hZGluZykgcmV0dXJuO1xuICAgICAgICB2YXIgdGVzdEJ1bmRsZSA9IGNjLmFzc2V0TWFuYWdlci5nZXRCdW5kbGUoJ1Rlc3RCdW5kbGUnKTtcbiAgICAgICAgaWYgKCF0ZXN0QnVuZGxlKSB7XG4gICAgICAgICAgICB0aGlzLmxvYWRUaXBzLnRleHRLZXkgPSBcImNhc2VzL0Fzc2V0QnVuZGxlLjlcIjtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLl9vbkNsZWFyKCk7XG4gICAgICAgIGNjLmFzc2V0TWFuYWdlci5yZW1vdmVCdW5kbGUodGVzdEJ1bmRsZSk7XG4gICAgICAgIHRoaXMubG9hZFRpcHMudGV4dEtleSA9IFwiY2FzZXMvQXNzZXRCdW5kbGUuMTdcIjtcbiAgICAgICAgdGhpcy5sYWJlbHNbMF0udGV4dEtleSA9IFwiY2FzZXMvQXNzZXRCdW5kbGUuMlwiO1xuICAgICAgICB0aGlzLmxhYmVsc1sxXS50ZXh0S2V5ID0gXCJjYXNlcy9Bc3NldEJ1bmRsZS40XCI7XG4gICAgICAgIHRoaXMubGFiZWxzWzJdLnRleHRLZXkgPSBcImNhc2VzL0Fzc2V0QnVuZGxlLjNcIjtcbiAgICAgICAgdGhpcy5sYWJlbHNbM10udGV4dEtleSA9IFwiY2FzZXMvQXNzZXRCdW5kbGUuNVwiO1xuICAgIH1cblxuICAgIG9uQ2xpY2tSZWxlYXNlICgpIHtcbiAgICAgICAgaWYgKHRoaXMuX2lzTG9hZGluZykgcmV0dXJuO1xuICAgICAgICB2YXIgdGVzdEJ1bmRsZSA9IGNjLmFzc2V0TWFuYWdlci5nZXRCdW5kbGUoJ1Rlc3RCdW5kbGUnKTtcbiAgICAgICAgaWYgKCF0ZXN0QnVuZGxlKSB7XG4gICAgICAgICAgICB0aGlzLmxvYWRUaXBzLnRleHRLZXkgPSBcImNhc2VzL0Fzc2V0QnVuZGxlLjlcIjtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLl9vbkNsZWFyKCk7XG4gICAgICAgIHRlc3RCdW5kbGUucmVsZWFzZUFsbCgpO1xuICAgICAgICB0aGlzLmxvYWRUaXBzLnRleHRLZXkgPSBcImNhc2VzL0Fzc2V0QnVuZGxlLjE2XCI7XG4gICAgICAgIHRoaXMubGFiZWxzWzFdLnRleHRLZXkgPSBcImNhc2VzL0Fzc2V0QnVuZGxlLjRcIjtcbiAgICAgICAgdGhpcy5sYWJlbHNbMl0udGV4dEtleSA9IFwiY2FzZXMvQXNzZXRCdW5kbGUuM1wiO1xuICAgICAgICB0aGlzLmxhYmVsc1szXS50ZXh0S2V5ID0gXCJjYXNlcy9Bc3NldEJ1bmRsZS41XCI7XG4gICAgfVxuXG4gICAgX29uQ2xlYXIgKCkge1xuICAgICAgICB0aGlzLnNob3dXaW5kb3cucmVtb3ZlQWxsQ2hpbGRyZW4odHJ1ZSk7XG4gICAgICAgIGlmICh0aGlzLl9hdWRpb1NvdXJjZSAmJiB0aGlzLl9hdWRpb1NvdXJjZSBpbnN0YW5jZW9mIGNjLkF1ZGlvU291cmNlKSB7XG4gICAgICAgICAgICB0aGlzLl9hdWRpb1NvdXJjZS5zdG9wKCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvLyB1cGRhdGUgKGR0KSB7fVxufSJdfQ==