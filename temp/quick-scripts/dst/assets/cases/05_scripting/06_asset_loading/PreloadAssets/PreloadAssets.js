
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/cases/05_scripting/06_asset_loading/PreloadAssets/PreloadAssets.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9jYXNlcy8wNV9zY3JpcHRpbmcvMDZfYXNzZXRfbG9hZGluZy9QcmVsb2FkQXNzZXRzL1ByZWxvYWRBc3NldHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLG9CQUFvQjtBQUNwQix3RUFBd0U7QUFDeEUsbUJBQW1CO0FBQ25CLGtGQUFrRjtBQUNsRiw4QkFBOEI7QUFDOUIsa0ZBQWtGOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFNUUsSUFBQSxLQUFzQixFQUFFLENBQUMsVUFBVSxFQUFsQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWlCLENBQUM7QUFDMUMsNENBQThDO0FBRzlDO0lBQTJDLGlDQUFZO0lBQXZEO1FBQUEscUVBNFFDO1FBelFVLGNBQVEsR0FBUSxJQUFJLENBQUM7UUFHckIsZ0JBQVUsR0FBWSxJQUFJLENBQUM7UUFHM0Isd0JBQWtCLEdBQWMsSUFBSSxDQUFDO1FBR3JDLGNBQVEsR0FBbUIsRUFBRSxDQUFDO1FBRTdCLGNBQVEsR0FBVyxFQUFFLENBQUM7UUFFdEIsZUFBUyxHQUFXLEVBQUUsQ0FBQztRQUV2QixlQUFTLEdBQVEsSUFBSSxDQUFDO1FBRXRCLGtCQUFZLEdBQW1CLElBQUksQ0FBQztRQUVwQyxnQkFBVSxHQUFZLEtBQUssQ0FBQztRQUU1QixXQUFLLEdBQTJCLElBQUksQ0FBQztRQUVyQyxhQUFPLEdBQW9CLEVBQUUsQ0FBQzs7UUFpUHRDLGlCQUFpQjtJQUNyQixDQUFDO0lBaFBHLHdCQUF3QjtJQUV4Qiw4QkFBTSxHQUFOO1FBQ0ksbUJBQW1CO1FBQ25CLElBQUksQ0FBQyxLQUFLLEdBQUc7WUFDVCxLQUFLLEVBQUUsbUJBQW1CO1lBQzFCLEdBQUcsRUFBRSxrQkFBa0I7WUFDdkIsT0FBTyxFQUFFLDJCQUEyQjtZQUNwQyxJQUFJLEVBQUUsa0JBQWtCO1lBQ3hCLEtBQUssRUFBRSxrQkFBa0I7WUFDekIsV0FBVyxFQUFFLG1CQUFtQjtZQUNoQyxNQUFNLEVBQUUsb0JB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QyxNQUFNLEVBQUUsRUFBVixDQUFVLENBQUMsQ0FBQztRQUN0QyxJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQztJQUN4QixDQUFDO0lBdFFEO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUM7bURBQ1M7SUFHNUI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQztxREFDZ0I7SUFHbEM7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQzs2REFDd0I7SUFHNUM7UUFEQyxRQUFRLENBQUMsRUFBQyxJQUFJLEVBQUUsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLEVBQUMsQ0FBQzttREFDUztJQVpwQixhQUFhO1FBRGpDLE9BQU87T0FDYSxhQUFhLENBNFFqQztJQUFELG9CQUFDO0NBNVFELEFBNFFDLENBNVEwQyxFQUFFLENBQUMsU0FBUyxHQTRRdEQ7a0JBNVFvQixhQUFhIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiLy8gTGVhcm4gVHlwZVNjcmlwdDpcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL3R5cGVzY3JpcHQuaHRtbFxuLy8gTGVhcm4gQXR0cmlidXRlOlxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvcmVmZXJlbmNlL2F0dHJpYnV0ZXMuaHRtbFxuLy8gTGVhcm4gbGlmZS1jeWNsZSBjYWxsYmFja3M6XG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9saWZlLWN5Y2xlLWNhbGxiYWNrcy5odG1sXG5cbmNvbnN0IHtjY2NsYXNzLCBwcm9wZXJ0eX0gPSBjYy5fZGVjb3JhdG9yO1xuaW1wb3J0ICogYXMgaTE4biBmcm9tICcuLi8uLi8uLi8uLi9pMThuL2kxOG4nO1xuXG5AY2NjbGFzc1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUHJlbG9hZEFzc2V0cyBleHRlbmRzIGNjLkNvbXBvbmVudCB7XG5cbiAgICBAcHJvcGVydHkoY2MuTGFiZWwpXG4gICAgcHVibGljIGxvYWRUaXBzOiBhbnkgPSBudWxsO1xuXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXG4gICAgcHVibGljIHNob3dXaW5kb3c6IGNjLk5vZGUgPSBudWxsO1xuXG4gICAgQHByb3BlcnR5KGNjLlByZWZhYilcbiAgICBwdWJsaWMgbG9hZEFuaW1UZXN0UHJlZmFiOiBjYy5QcmVmYWIgPSBudWxsO1xuXG4gICAgQHByb3BlcnR5KHt0eXBlOiBbY2MuTm9kZV19KVxuICAgIHB1YmxpYyBsb2FkTGlzdDogQXJyYXk8Y2MuTm9kZT4gPSBbXTtcblxuICAgIHByaXZhdGUgX2N1clR5cGU6IHN0cmluZyA9ICcnO1xuXG4gICAgcHJpdmF0ZSBfbGFzdFR5cGU6IHN0cmluZyA9ICcnO1xuXG4gICAgcHJpdmF0ZSBfYnRuTGFiZWw6IGFueSA9IG51bGw7XG5cbiAgICBwcml2YXRlIF9hdWRpb1NvdXJjZTogY2MuQXVkaW9Tb3VyY2UgPSBudWxsO1xuXG4gICAgcHJpdmF0ZSBfaXNMb2FkaW5nOiBCb29sZWFuID0gZmFsc2U7XG5cbiAgICBwcml2YXRlIF91cmxzOiBSZWNvcmQ8c3RyaW5nLCBzdHJpbmc+ID0gbnVsbDtcblxuICAgIHByaXZhdGUgX2Fzc2V0czogQXJyYXk8Y2MuQXNzZXQ+ID0gW107XG5cbiAgICAvLyBMSUZFLUNZQ0xFIENBTExCQUNLUzpcblxuICAgIG9uTG9hZCAoKSB7XG4gICAgICAgIC8vIGFkZCBsb2FkIHJlcyB1cmxcbiAgICAgICAgdGhpcy5fdXJscyA9IHtcbiAgICAgICAgICAgIEF1ZGlvOiBcInRlc3RfYXNzZXRzL2F1ZGlvXCIsXG4gICAgICAgICAgICBUeHQ6IFwidGVzdF9hc3NldHMvdGV4dFwiLFxuICAgICAgICAgICAgVGV4dHVyZTogXCJ0ZXN0X2Fzc2V0cy9QdXJwbGVNb25zdGVyXCIsXG4gICAgICAgICAgICBGb250OiBcInRlc3RfYXNzZXRzL2ZvbnRcIixcbiAgICAgICAgICAgIFBsaXN0OiBcInRlc3RfYXNzZXRzL2F0b21cIixcbiAgICAgICAgICAgIFNwcml0ZUZyYW1lOiBcInRlc3RfYXNzZXRzL2ltYWdlXCIsXG4gICAgICAgICAgICBQcmVmYWI6IFwidGVzdF9hc3NldHMvcHJlZmFiXCIsXG4gICAgICAgICAgICBBbmltYXRpb246IFwidGVzdF9hc3NldHMvc3ByaXRlLWFuaW1cIixcbiAgICAgICAgICAgIFNjZW5lOiBcInRlc3RfYXNzZXRzL3ByZWxvYWRzY2VuZVwiLFxuICAgICAgICAgICAgU3BpbmU6IFwic3BpbmVib3kvc3BpbmVib3lcIixcbiAgICAgICAgICAgIERpcjogXCJhdWRpb1wiLFxuICAgICAgICB9O1xuICAgICAgICAvLyByZWdpc3RlcmVkIGV2ZW50XG4gICAgICAgIHRoaXMuX29uUmVnaXN0ZXJlZEV2ZW50KCk7XG4gICAgfVxuXG4gICAgX29uUmVnaXN0ZXJlZEV2ZW50ICgpIHtcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLmxvYWRMaXN0Lmxlbmd0aDsgKytpKSB7XG4gICAgICAgICAgICB0aGlzLmxvYWRMaXN0W2ldLm9uKGNjLk5vZGUuRXZlbnRUeXBlLlRPVUNIX0VORCwgdGhpcy5fb25DbGljay5iaW5kKHRoaXMpKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIF9vbkNsaWNrIChldmVudCkge1xuICAgICAgICBpZiAodGhpcy5faXNMb2FkaW5nKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLl9vbkNsZWFyKCk7XG5cbiAgICAgICAgdGhpcy5fY3VyVHlwZSA9IGV2ZW50LnRhcmdldC5uYW1lLnNwbGl0KCdfJylbMV07XG4gICAgICAgIGlmICh0aGlzLl9sYXN0VHlwZSAhPT0gXCJcIiAmJiB0aGlzLl9jdXJUeXBlID09PSB0aGlzLl9sYXN0VHlwZSkge1xuICAgICAgICAgICAgdGhpcy5fb25TaG93UmVzQ2xpY2soZXZlbnQpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHRoaXMuX2J0bkxhYmVsKSB7XG4gICAgICAgICAgICB0aGlzLl9idG5MYWJlbC50ZXh0S2V5ID0gaTE4bi50KFwiY2FzZXMvMDVfc2NyaXB0aW5nLzA3X2Fzc2V0X2xvYWRpbmcvUHJlbG9hZEFzc2V0cy5qcy4xXCIpICsgdGhpcy5fbGFzdFR5cGU7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLl9sYXN0VHlwZSA9IHRoaXMuX2N1clR5cGU7XG5cbiAgICAgICAgdGhpcy5fYnRuTGFiZWwgPSBldmVudC50YXJnZXQuZ2V0Q2hpbGRCeU5hbWUoXCJMYWJlbFwiKS5nZXRDb21wb25lbnQoXCJjYy5MYWJlbFwiKTtcblxuICAgICAgICB0aGlzLmxvYWRUaXBzLnRleHRLZXkgPSB0aGlzLl9jdXJUeXBlICsgXCIgTG9hZGluZy4uLi5cIjtcbiAgICAgICAgdGhpcy5faXNMb2FkaW5nID0gdHJ1ZTtcblxuICAgICAgICB0aGlzLl9sb2FkKCk7XG4gICAgfVxuXG4gICAgX2xvYWQgKCkge1xuICAgICAgICB2YXIgdXJsID0gdGhpcy5fdXJsc1t0aGlzLl9jdXJUeXBlXTtcbiAgICAgICAgdmFyIGxvYWRDYWxsQmFjayA9IHRoaXMuX2xvYWRDYWxsQmFjay5iaW5kKHRoaXMpO1xuICAgICAgICBzd2l0Y2ggKHRoaXMuX2N1clR5cGUpIHtcbiAgICAgICAgICAgIGNhc2UgJ1Nwcml0ZUZyYW1lJzpcbiAgICAgICAgICAgICAgICAvLyBzcGVjaWZ5IHRoZSB0eXBlIHRvIGxvYWQgc3ViIGFzc2V0IGZyb20gdGV4dHVyZSdzIHVybFxuICAgICAgICAgICAgICAgIGNjLnJlc291cmNlcy5wcmVsb2FkKHVybCwgY2MuU3ByaXRlRnJhbWUsIGxvYWRDYWxsQmFjayk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlICdTcGluZSc6XG4gICAgICAgICAgICAgICAgLy8gc3BlY2lmeSB0aGUgdHlwZSB0byBhdm9pZCB0aGUgZHVwbGljYXRlZCBuYW1lIGZyb20gc3BpbmUgYXRsYXNcbiAgICAgICAgICAgICAgICBjYy5yZXNvdXJjZXMucHJlbG9hZCh1cmwsIHNwLlNrZWxldG9uRGF0YSwgbG9hZENhbGxCYWNrKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgJ0ZvbnQnOlxuICAgICAgICAgICAgICAgIGNjLnJlc291cmNlcy5wcmVsb2FkKHVybCwgY2MuRm9udCwgbG9hZENhbGxCYWNrKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgJ1BsaXN0JzpcbiAgICAgICAgICAgICAgICBjYy5yZXNvdXJjZXMucHJlbG9hZCh1cmwsIGNjLlBhcnRpY2xlQXNzZXQsIGxvYWRDYWxsQmFjayk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlICdBbmltYXRpb24nOlxuICAgICAgICAgICAgY2FzZSAnUHJlZmFiJzpcbiAgICAgICAgICAgIGNhc2UgJ1RleHR1cmUnOlxuICAgICAgICAgICAgY2FzZSAnVHh0JzpcbiAgICAgICAgICAgIGNhc2UgJ0F1ZGlvJzpcbiAgICAgICAgICAgICAgICBjYy5yZXNvdXJjZXMucHJlbG9hZCh1cmwsIGxvYWRDYWxsQmFjayk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlICdTY2VuZSc6XG4gICAgICAgICAgICAgICAgY2MucmVzb3VyY2VzLnByZWxvYWRTY2VuZSh1cmwsIGxvYWRDYWxsQmFjayk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlICdEaXInOiBcbiAgICAgICAgICAgICAgICBjYy5yZXNvdXJjZXMucHJlbG9hZERpcih1cmwsIGxvYWRDYWxsQmFjayk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgX2xvYWRDYWxsQmFjayAoZXJyLCByZXMpIHtcbiAgICAgICAgdGhpcy5faXNMb2FkaW5nID0gZmFsc2U7XG4gICAgICAgIGlmIChlcnIpIHtcbiAgICAgICAgICAgIGNjLmxvZygnRXJyb3IgdXJsIFsnICsgZXJyICsgJ10nKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5fY3VyVHlwZSA9PT0gXCJBdWRpb1wiKSB7XG4gICAgICAgICAgICB0aGlzLl9idG5MYWJlbC50ZXh0S2V5ID0gaTE4bi50KFwiY2FzZXMvMDVfc2NyaXB0aW5nLzA3X2Fzc2V0X2xvYWRpbmcvUHJlbG9hZEFzc2V0cy5qcy4yXCIpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5fYnRuTGFiZWwudGV4dEtleSA9IGkxOG4udChcImNhc2VzLzA1X3NjcmlwdGluZy8wN19hc3NldF9sb2FkaW5nL1ByZWxvYWRBc3NldHMuanMuM1wiKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLl9idG5MYWJlbC50ZXh0S2V5ICs9IHRoaXMuX2N1clR5cGU7XG4gICAgICAgIHRoaXMubG9hZFRpcHMudGV4dEtleSA9IHRoaXMuX2N1clR5cGUgKyBcIiBwcmVsb2FkZWQgU3VjY2Vzc2Z1bGx5IVwiO1xuICAgIH1cblxuICAgIF9vbkNsZWFyICgpIHtcbiAgICAgICAgdGhpcy5zaG93V2luZG93LnJlbW92ZUFsbENoaWxkcmVuKHRydWUpO1xuICAgICAgICBpZiAodGhpcy5fYXVkaW9Tb3VyY2UgJiYgdGhpcy5fYXVkaW9Tb3VyY2UgaW5zdGFuY2VvZiBjYy5BdWRpb1NvdXJjZSkge1xuICAgICAgICAgICAgdGhpcy5fYXVkaW9Tb3VyY2Uuc3RvcCgpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgX29uU2hvd1Jlc0NsaWNrIChldmVudCkge1xuICAgICAgICBsZXQgdXJsID0gdGhpcy5fdXJsc1t0aGlzLl9jdXJUeXBlXTtcbiAgICAgICAgc3dpdGNoICh0aGlzLl9jdXJUeXBlKSB7XG4gICAgICAgICAgICBjYXNlICdTcHJpdGVGcmFtZSc6XG4gICAgICAgICAgICAgICAgLy8gc3BlY2lmeSB0aGUgdHlwZSB0byBsb2FkIHN1YiBhc3NldCBmcm9tIHRleHR1cmUncyB1cmxcbiAgICAgICAgICAgICAgICBjYy5yZXNvdXJjZXMubG9hZCh1cmwsIGNjLlNwcml0ZUZyYW1lLCAoZXJyOiBFcnJvciwgcmVzOiBjYy5Bc3NldCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLl9hc3NldHMucHVzaChyZXMuYWRkUmVmKCkpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLl9jcmVhdGVOb2RlKHRoaXMuX2N1clR5cGUsIHJlcyk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlICdTcGluZSc6XG4gICAgICAgICAgICAgICAgLy8gc3BlY2lmeSB0aGUgdHlwZSB0byBhdm9pZCB0aGUgZHVwbGljYXRlZCBuYW1lIGZyb20gc3BpbmUgYXRsYXNcbiAgICAgICAgICAgICAgICBjYy5yZXNvdXJjZXMubG9hZCh1cmwsIHNwLlNrZWxldG9uRGF0YSwgKGVycjogRXJyb3IsIHJlczogY2MuQXNzZXQpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fYXNzZXRzLnB1c2gocmVzLmFkZFJlZigpKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fY3JlYXRlTm9kZSh0aGlzLl9jdXJUeXBlLCByZXMpO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAnRm9udCc6XG4gICAgICAgICAgICAgICAgY2MucmVzb3VyY2VzLmxvYWQodXJsLCBjYy5Gb250LCAoZXJyOiBFcnJvciwgcmVzOiBjYy5Bc3NldCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLl9hc3NldHMucHVzaChyZXMuYWRkUmVmKCkpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLl9jcmVhdGVOb2RlKHRoaXMuX2N1clR5cGUsIHJlcyk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlICdQbGlzdCc6XG4gICAgICAgICAgICAgICAgY2MucmVzb3VyY2VzLmxvYWQodXJsLCBjYy5QYXJ0aWNsZUFzc2V0LCAoZXJyOiBFcnJvciwgcmVzOiBjYy5Bc3NldCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLl9hc3NldHMucHVzaChyZXMuYWRkUmVmKCkpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLl9jcmVhdGVOb2RlKHRoaXMuX2N1clR5cGUsIHJlcyk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlICdBbmltYXRpb24nOlxuICAgICAgICAgICAgY2FzZSAnUHJlZmFiJzpcbiAgICAgICAgICAgIGNhc2UgJ1RleHR1cmUnOlxuICAgICAgICAgICAgY2FzZSAnVHh0JzpcbiAgICAgICAgICAgIGNhc2UgJ0F1ZGlvJzpcbiAgICAgICAgICAgICAgICBjYy5yZXNvdXJjZXMubG9hZCh1cmwsIChlcnI6IEVycm9yLCByZXM6IGNjLkFzc2V0KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX2Fzc2V0cy5wdXNoKHJlcy5hZGRSZWYoKSk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX2NyZWF0ZU5vZGUodGhpcy5fY3VyVHlwZSwgcmVzKTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgJ1NjZW5lJzpcbiAgICAgICAgICAgICAgICBjYy5yZXNvdXJjZXMubG9hZFNjZW5lKHVybCwgKGVycjogRXJyb3IsIHJlczogY2MuU2NlbmVBc3NldCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBjYy5kaXJlY3Rvci5ydW5TY2VuZShyZXMpO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAnRGlyJzogXG4gICAgICAgICAgICAgICAgY2MucmVzb3VyY2VzLmxvYWREaXIodXJsLCAoZXJyOiBFcnJvciwgcmVzOiBjYy5Bc3NldFtdKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMubG9hZFRpcHMudGV4dEtleSA9IFwiVGhlIGFzc2V0IGxvYWRlZDogXCI7XG4gICAgICAgICAgICAgICAgICAgIHJlcy5mb3JFYWNoKChyKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLl9hc3NldHMucHVzaChyLmFkZFJlZigpKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubG9hZFRpcHMudGV4dEtleSArPSBgJHtyLm5hbWV9O2A7XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBfY3JlYXRlTm9kZSAodHlwZSwgcmVzKSB7XG4gICAgICAgIHRoaXMubG9hZFRpcHMudGV4dEtleSA9IFwiXCI7XG4gICAgICAgIHZhciBub2RlID0gbmV3IGNjLk5vZGUoXCJOZXcgXCIgKyB0eXBlKTtcbiAgICAgICAgbm9kZS5zZXRQb3NpdGlvbigwLCAwKTtcbiAgICAgICAgdmFyIGNvbXBvbmVudCA9IG51bGw7XG4gICAgICAgIHN3aXRjaCAodGhpcy5fY3VyVHlwZSkge1xuICAgICAgICAgICAgY2FzZSBcIlNwcml0ZUZyYW1lXCI6XG4gICAgICAgICAgICAgICAgY29tcG9uZW50ID0gbm9kZS5hZGRDb21wb25lbnQoY2MuU3ByaXRlKTtcbiAgICAgICAgICAgICAgICBjb21wb25lbnQuc3ByaXRlRnJhbWUgPSByZXM7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIFwiVGV4dHVyZVwiOlxuICAgICAgICAgICAgY2FzZSBcIkNPUlNcIjpcbiAgICAgICAgICAgICAgICBjb21wb25lbnQgPSBub2RlLmFkZENvbXBvbmVudChjYy5TcHJpdGUpO1xuICAgICAgICAgICAgICAgIGNvbXBvbmVudC5zcHJpdGVGcmFtZSA9IG5ldyBjYy5TcHJpdGVGcmFtZShyZXMpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBcIkF1ZGlvXCI6XG4gICAgICAgICAgICAgICAgY29tcG9uZW50ID0gbm9kZS5hZGRDb21wb25lbnQoY2MuQXVkaW9Tb3VyY2UpO1xuICAgICAgICAgICAgICAgIGNvbXBvbmVudC5jbGlwID0gcmVzO1xuICAgICAgICAgICAgICAgIGNvbXBvbmVudC5wbGF5KCk7XG4gICAgICAgICAgICAgICAgdGhpcy5fYXVkaW9Tb3VyY2UgPSBjb21wb25lbnQ7XG4gICAgICAgICAgICAgICAgdGhpcy5sb2FkVGlwcy50ZXh0S2V5ID0gaTE4bi50KFwiY2FzZXMvMDVfc2NyaXB0aW5nLzA3X2Fzc2V0X2xvYWRpbmcvUHJlbG9hZEFzc2V0cy5qcy40XCIpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBcIlR4dFwiOlxuICAgICAgICAgICAgICAgIGNvbXBvbmVudCA9IG5vZGUuYWRkQ29tcG9uZW50KGNjLkxhYmVsKTtcbiAgICAgICAgICAgICAgICBjb21wb25lbnQubGluZUhlaWdodCA9IDQwO1xuICAgICAgICAgICAgICAgIGNvbXBvbmVudC5zdHJpbmcgPSByZXM7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIFwiRm9udFwiOlxuICAgICAgICAgICAgICAgIGNvbXBvbmVudCA9IG5vZGUuYWRkQ29tcG9uZW50KGNjLkxhYmVsKTtcbiAgICAgICAgICAgICAgICBjb21wb25lbnQuZm9udCA9IHJlcztcbiAgICAgICAgICAgICAgICBjb21wb25lbnQubGluZUhlaWdodCA9IDQwO1xuICAgICAgICAgICAgICAgIGNvbXBvbmVudC5zdHJpbmcgPSBcIlRoaXMgaXMgQml0bWFwRm9udCFcIjtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgXCJQbGlzdFwiOlxuICAgICAgICAgICAgICAgIGNvbXBvbmVudCA9IG5vZGUuYWRkQ29tcG9uZW50KGNjLlBhcnRpY2xlU3lzdGVtKTtcbiAgICAgICAgICAgICAgICBjb21wb25lbnQuZmlsZSA9IHJlcztcbiAgICAgICAgICAgICAgICBjb21wb25lbnQucmVzZXRTeXN0ZW0oKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgXCJQcmVmYWJcIjpcbiAgICAgICAgICAgICAgICB2YXIgcHJlZmFiID0gY2MuaW5zdGFudGlhdGUocmVzKTtcbiAgICAgICAgICAgICAgICBwcmVmYWIucGFyZW50ID0gbm9kZTtcbiAgICAgICAgICAgICAgICBwcmVmYWIuc2V0UG9zaXRpb24oMCwgMCk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIFwiQW5pbWF0aW9uXCI6XG4gICAgICAgICAgICAgICAgdmFyIGxvYWRBbmltID0gY2MuaW5zdGFudGlhdGUodGhpcy5sb2FkQW5pbVRlc3RQcmVmYWIpO1xuICAgICAgICAgICAgICAgIGxvYWRBbmltLnBhcmVudCA9IG5vZGU7XG4gICAgICAgICAgICAgICAgbG9hZEFuaW0uc2V0UG9zaXRpb24oMCwgMCk7XG4gICAgICAgICAgICAgICAgdmFyIEFhbmltQ3RybCA9IGxvYWRBbmltLmdldENvbXBvbmVudChjYy5BbmltYXRpb24pO1xuICAgICAgICAgICAgICAgIEFhbmltQ3RybC5hZGRDbGlwKHJlcyk7XG4gICAgICAgICAgICAgICAgQWFuaW1DdHJsLnBsYXkocmVzLm5hbWUpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBcIlNwaW5lXCI6XG4gICAgICAgICAgICAgICAgY29tcG9uZW50ID0gbm9kZS5hZGRDb21wb25lbnQoc3AuU2tlbGV0b24pO1xuICAgICAgICAgICAgICAgIGNvbXBvbmVudC5za2VsZXRvbkRhdGEgPSByZXM7XG4gICAgICAgICAgICAgICAgY29tcG9uZW50LmFuaW1hdGlvbiA9IFwid2Fsa1wiO1xuICAgICAgICAgICAgICAgIG5vZGUueSA9IC0yNDg7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLnNob3dXaW5kb3cuYWRkQ2hpbGQobm9kZSk7XG4gICAgfVxuXG4gICAgb25EZXN0cm95ICgpIHtcbiAgICAgICAgdGhpcy5fYXNzZXRzLmZvckVhY2goeCA9PiB4LmRlY1JlZigpKTtcbiAgICAgICAgdGhpcy5fYXNzZXRzID0gbnVsbDtcbiAgICB9XG5cbiAgICAvLyB1cGRhdGUgKGR0KSB7fVxufVxuIl19