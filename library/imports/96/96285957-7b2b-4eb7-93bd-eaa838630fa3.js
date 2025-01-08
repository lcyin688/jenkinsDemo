"use strict";
cc._RF.push(module, '96285lXeytOt5O96qg4Yw+j', 'PreloadAssets');
// cases/05_scripting/06_asset_loading/PreloadAssets/PreloadAssets.ts

"use strict";
// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html
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
var i18n = require("../../../../i18n/i18n");
var PreloadAssets = /** @class */ (function (_super) {
    __extends(PreloadAssets, _super);
    function PreloadAssets() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.loadTips = null;
        _this.showWindow = null;
        _this.loadAnimTestPrefab = null;
        _this.loadList = [];
        _this._curType = '';
        _this._lastType = '';
        _this._btnLabel = null;
        _this._audioSource = null;
        _this._isLoading = false;
        _this._urls = null;
        _this._assets = [];
        return _this;
        // update (dt) {}
    }
    // LIFE-CYCLE CALLBACKS:
    PreloadAssets.prototype.onLoad = function () {
        // add load res url
        this._urls = {
            Audio: "test_assets/audio",
            Txt: "test_assets/text",
            Texture: "test_assets/PurpleMonster",
            Font: "test_assets/font",
            Plist: "test_assets/atom",
            SpriteFrame: "test_assets/image",
            Prefab: "test_assets/prefab",
            Animation: "test_assets/sprite-anim",
            Scene: "test_assets/preloadscene",
            Spine: "spineboy/spineboy",
            Dir: "audio",
        };
        // registered event
        this._onRegisteredEvent();
    };
    PreloadAssets.prototype._onRegisteredEvent = function () {
        for (var i = 0; i < this.loadList.length; ++i) {
            this.loadList[i].on(cc.Node.EventType.TOUCH_END, this._onClick.bind(this));
        }
    };
    PreloadAssets.prototype._onClick = function (event) {
        if (this._isLoading) {
            return;
        }
        this._onClear();
        this._curType = event.target.name.split('_')[1];
        if (this._lastType !== "" && this._curType === this._lastType) {
            this._onShowResClick(event);
            return;
        }
        if (this._btnLabel) {
            this._btnLabel.textKey = i18n.t("cases/05_scripting/07_asset_loading/PreloadAssets.js.1") + this._lastType;
        }
        this._lastType = this._curType;
        this._btnLabel = event.target.getChildByName("Label").getComponent("cc.Label");
        this.loadTips.textKey = this._curType + " Loading....";
        this._isLoading = true;
        this._load();
    };
    PreloadAssets.prototype._load = function () {
        var url = this._urls[this._curType];
        var loadCallBack = this._loadCallBack.bind(this);
        switch (this._curType) {
            case 'SpriteFrame':
                // specify the type to load sub asset from texture's url
                cc.resources.preload(url, cc.SpriteFrame, loadCallBack);
                break;
            case 'Spine':
                // specify the type to avoid the duplicated name from spine atlas
                cc.resources.preload(url, sp.SkeletonData, loadCallBack);
                break;
            case 'Font':
                cc.resources.preload(url, cc.Font, loadCallBack);
                break;
            case 'Plist':
                cc.resources.preload(url, cc.ParticleAsset, loadCallBack);
                break;
            case 'Animation':
            case 'Prefab':
            case 'Texture':
            case 'Txt':
            case 'Audio':
                cc.resources.preload(url, loadCallBack);
                break;
            case 'Scene':
                cc.resources.preloadScene(url, loadCallBack);
                break;
            case 'Dir':
                cc.resources.preloadDir(url, loadCallBack);
                break;
            default:
                break;
        }
    };
    PreloadAssets.prototype._loadCallBack = function (err, res) {
        this._isLoading = false;
        if (err) {
            cc.log('Error url [' + err + ']');
            return;
        }
        if (this._curType === "Audio") {
            this._btnLabel.textKey = i18n.t("cases/05_scripting/07_asset_loading/PreloadAssets.js.2");
        }
        else {
            this._btnLabel.textKey = i18n.t("cases/05_scripting/07_asset_loading/PreloadAssets.js.3");
        }
        this._btnLabel.textKey += this._curType;
        this.loadTips.textKey = this._curType + " preloaded Successfully!";
    };
    PreloadAssets.prototype._onClear = function () {
        this.showWindow.removeAllChildren(true);
        if (this._audioSource && this._audioSource instanceof cc.AudioSource) {
            this._audioSource.stop();
        }
    };
    PreloadAssets.prototype._onShowResClick = function (event) {
        var _this = this;
        var url = this._urls[this._curType];
        switch (this._curType) {
            case 'SpriteFrame':
                // specify the type to load sub asset from texture's url
                cc.resources.load(url, cc.SpriteFrame, function (err, res) {
                    _this._assets.push(res.addRef());
                    _this._createNode(_this._curType, res);
                });
                break;
            case 'Spine':
                // specify the type to avoid the duplicated name from spine atlas
                cc.resources.load(url, sp.SkeletonData, function (err, res) {
                    _this._assets.push(res.addRef());
                    _this._createNode(_this._curType, res);
                });
                break;
            case 'Font':
                cc.resources.load(url, cc.Font, function (err, res) {
                    _this._assets.push(res.addRef());
                    _this._createNode(_this._curType, res);
                });
                break;
            case 'Plist':
                cc.resources.load(url, cc.ParticleAsset, function (err, res) {
                    _this._assets.push(res.addRef());
                    _this._createNode(_this._curType, res);
                });
                break;
            case 'Animation':
            case 'Prefab':
            case 'Texture':
            case 'Txt':
            case 'Audio':
                cc.resources.load(url, function (err, res) {
                    _this._assets.push(res.addRef());
                    _this._createNode(_this._curType, res);
                });
                break;
            case 'Scene':
                cc.resources.loadScene(url, function (err, res) {
                    cc.director.runScene(res);
                });
                break;
            case 'Dir':
                cc.resources.loadDir(url, function (err, res) {
                    _this.loadTips.textKey = "The asset loaded: ";
                    res.forEach(function (r) {
                        _this._assets.push(r.addRef());
                        _this.loadTips.textKey += r.name + ";";
                    });
                });
                break;
            default:
                break;
        }
    };
    PreloadAssets.prototype._createNode = function (type, res) {
        this.loadTips.textKey = "";
        var node = new cc.Node("New " + type);
        node.setPosition(0, 0);
        var component = null;
        switch (this._curType) {
            case "SpriteFrame":
                component = node.addComponent(cc.Sprite);
                component.spriteFrame = res;
                break;
            case "Texture":
            case "CORS":
                component = node.addComponent(cc.Sprite);
                component.spriteFrame = new cc.SpriteFrame(res);
                break;
            case "Audio":
                component = node.addComponent(cc.AudioSource);
                component.clip = res;
                component.play();
                this._audioSource = component;
                this.loadTips.textKey = i18n.t("cases/05_scripting/07_asset_loading/PreloadAssets.js.4");
                break;
            case "Txt":
                component = node.addComponent(cc.Label);
                component.lineHeight = 40;
                component.string = res;
                break;
            case "Font":
                component = node.addComponent(cc.Label);
                component.font = res;
                component.lineHeight = 40;
                component.string = "This is BitmapFont!";
                break;
            case "Plist":
                component = node.addComponent(cc.ParticleSystem);
                component.file = res;
                component.resetSystem();
                break;
            case "Prefab":
                var prefab = cc.instantiate(res);
                prefab.parent = node;
                prefab.setPosition(0, 0);
                break;
            case "Animation":
                var loadAnim = cc.instantiate(this.loadAnimTestPrefab);
                loadAnim.parent = node;
                loadAnim.setPosition(0, 0);
                var AanimCtrl = loadAnim.getComponent(cc.Animation);
                AanimCtrl.addClip(res);
                AanimCtrl.play(res.name);
                break;
            case "Spine":
                component = node.addComponent(sp.Skeleton);
                component.skeletonData = res;
                component.animation = "walk";
                node.y = -248;
                break;
        }
        this.showWindow.addChild(node);
    };
    PreloadAssets.prototype.onDestroy = function () {
        this._assets.forEach(function (x) { return x.decRef(); });
        this._assets = null;
    };
    __decorate([
        property(cc.Label)
    ], PreloadAssets.prototype, "loadTips", void 0);
    __decorate([
        property(cc.Node)
    ], PreloadAssets.prototype, "showWindow", void 0);
    __decorate([
        property(cc.Prefab)
    ], PreloadAssets.prototype, "loadAnimTestPrefab", void 0);
    __decorate([
        property({ type: [cc.Node] })
    ], PreloadAssets.prototype, "loadList", void 0);
    PreloadAssets = __decorate([
        ccclass
    ], PreloadAssets);
    return PreloadAssets;
}(cc.Component));
exports.default = PreloadAssets;

cc._RF.pop();