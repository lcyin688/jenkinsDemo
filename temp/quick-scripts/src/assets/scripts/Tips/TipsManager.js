"use strict";
cc._RF.push(module, '6c9bezFtu5AHZUcydh+6QJj', 'TipsManager');
// scripts/Tips/TipsManager.js

"use strict";

//
// Restricted the scenes platform permissions
//
// init platform info
var isAndroid = cc.sys.platform === cc.sys.ANDROID;
var isNative = cc.sys.isNative;
var isNativeWindows = isNative && cc.sys.os === cc.sys.OS_WINDOWS;
var isNativeMacOS = isNative && cc.sys.os === cc.sys.OS_OSX;
var isBrowser = cc.sys.isBrowser;
var isMobile = cc.sys.isMobile;
var isIphone = cc.sys.platform === cc.sys.IPHONE;
var isDesktopBrowser = cc.sys.platform === cc.sys.DESKTOP_BROWSER;
var isWechat = cc.sys.platform === cc.sys.WECHAT_GAME;
var isQQPlay = cc.sys.platform === cc.sys.QQ_PLAY;
var isBaidu = cc.sys.platform === cc.sys.BAIDU_GAME;
var isVivo = cc.sys.platform === cc.sys.VIVO_GAME;
var isOPPO = cc.sys.platform === cc.sys.OPPO_GAME;
var isXiaomi = cc.sys.platform === cc.sys.XIAOMI_GAME;
var isHuawei = cc.sys.platform === cc.sys.HUAWEI_GAME;
var isJkw = cc.sys.platform === cc.sys.JKW_GAME;
var isAlipay = cc.sys.platform === cc.sys.ALIPAY_GAME;
module.exports = {
  tispPrefab: null,
  SupportConfig: function SupportConfig(name) {
    console.log(name);

    switch (name) {
      case 'downloader-web':
        return !isNative;

      case 'EditBoxTabIndex':
        return !isNative && !isAlipay;

      case 'EditBox':
      case 'EditBoxEvent':
        return !isAlipay;

      case 'OnMultiTouchInput':
        return isMobile;

      case 'webp-test':
        return cc.sys.capabilities['webp'];

      case 'DeviceMotion':
        return isMobile && !isQQPlay && !isVivo;

      case 'Native_Call':
        return isMobile && (isAndroid || isIphone) && !CC_RUNTIME;

      case 'TTFFontLabel':
        return !isQQPlay;

      case 'MousePropagation':
        return isNative && !isMobile && !isWechat && !isQQPlay && !isXiaomi && !isHuawei && !isAlipay || isDesktopBrowser;

      case 'downloader-native':
        return isNative && !CC_RUNTIME;
      // Not support the VIVO_GAME and OPPO_GAME

      case 'capture_to_native':
        return isNative && !isVivo && !isOPPO;

      case 'SafeArea':
        return (isIphone || isAndroid) && isNative;

      case 'capture_to_wechat':
        return isWechat;

      case 'capture_to_web':
      case 'ShadowLabel':
      case 'videoPlayer-stayOnBottom':
        return isBrowser;
      // Only support the RENDER_TYPE_WEBGL

      case 'MotionStreak':
      case 'Mask_IMAGE_STENCIL':
      case 'Mask_NESTED':
        return cc.game.renderType === cc.game.RENDER_TYPE_WEBGL;
      // Not support isMobile

      case 'KeyboardInput':
      case 'platform':
        return !isMobile && !isBaidu && !isXiaomi && !isHuawei && !isAlipay;
      // Not support the Simulator, QQ_PLAY, WECHAT_GAME

      case 'videoPlayer':
        return !isNativeWindows && !isNativeMacOS && !CC_RUNTIME && !isQQPlay && !isBaidu && !isXiaomi && !isHuawei && !isAlipay;
      // Not support the VIVO_GAME, OPPO_GAME, WECHAT_GAME, QQ_PLAY, CC_RUNTIME

      case 'webview':
        return (isMobile || isBrowser) && !CC_RUNTIME && !isQQPlay && !isWechat && !isBaidu && !isXiaomi && !isHuawei && !isAlipay;

      case 'mesh':
        return !isVivo && !isOPPO;
    }
  },
  init: function init() {
    var _this = this;

    if (this.tipsPrefab) return;
    cc.resources.load('tips/Tips', function (err, prefab) {
      _this.tipsPrefab = prefab;
    });
  },
  createTips: function createTips(content) {
    var node = cc.instantiate(this.tipsPrefab);
    var tipsCtrl = node.getComponent('TipsCtrl');

    if (content) {
      tipsCtrl.setContent(content);
    }

    node.parent = cc.director.getScene();
  },
  hasSupport: function hasSupport(name, hideTip) {
    var support = this.SupportConfig(name);

    if (!support && support !== undefined) {
      if (!hideTip) {
        this.createTips();
      }

      return false;
    }

    return true;
  }
};

cc._RF.pop();