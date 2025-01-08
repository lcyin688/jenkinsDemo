"use strict";
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