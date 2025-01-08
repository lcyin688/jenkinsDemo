"use strict";
cc._RF.push(module, 'd2104r6tvhC7qEefqkgfYyg', 'SpineAttach');
// cases/spine/SpineAttach.js

"use strict";

cc.Class({
  "extends": cc.Component,
  properties: {
    skeleton: {
      type: sp.Skeleton,
      "default": null
    },
    targetPrefab: {
      type: cc.Prefab,
      "default": null
    },
    modeLabel: {
      type: cc.Label,
      "default": null
    },
    redBoneName: "",
    greenBoneName: "",
    blueBoneName: ""
  },
  generateAllNodes: function generateAllNodes() {
    var attachUtil = this.skeleton.attachUtil;
    attachUtil.generateAllAttachedNodes();
    var boneNodes = attachUtil.getAttachedNodes(this.redBoneName);
    var boneNode = boneNodes[0];

    if (boneNode) {
      var targetNode = cc.instantiate(this.targetPrefab);
      targetNode.color = cc.color(255, 0, 0);
      boneNode.addChild(targetNode);
    }

    boneNodes = attachUtil.getAttachedNodes(this.blueBoneName);
    boneNode = boneNodes[0];

    if (boneNode) {
      var _targetNode = cc.instantiate(this.targetPrefab);

      _targetNode.color = cc.color(0, 0, 255);
      boneNode.addChild(_targetNode);
    } // console.log(attachUtil._attachedNodeArray);
    // console.log(attachUtil._boneIndexToNode);

  },
  destroyAllNodes: function destroyAllNodes() {
    var attachUtil = this.skeleton.attachUtil;
    attachUtil.destroyAllAttachedNodes(); // console.log(attachUtil._attachedNodeArray);
    // console.log(attachUtil._boneIndexToNode);
  },
  destroyUnusual: function destroyUnusual() {
    var attachUtil = this.skeleton.attachUtil;
    var boneNodes = attachUtil.getAttachedNodes("root");
    var boneNode = boneNodes[0];

    if (boneNode) {
      boneNode.destroy();
    } // console.log(attachUtil._attachedNodeArray);
    // console.log(attachUtil._boneIndexToNode);

  },
  generateSomeNodes: function generateSomeNodes() {
    var attachUtil = this.skeleton.attachUtil;
    var boneNodes = attachUtil.generateAttachedNodes(this.greenBoneName);
    var boneNode = boneNodes[0];

    if (boneNode) {
      var targetNode = cc.instantiate(this.targetPrefab);
      targetNode.color = cc.color(0, 255, 0);
      boneNode.addChild(targetNode);
    } // console.log(attachUtil._attachedNodeArray);
    // console.log(attachUtil._boneIndexToNode);

  },
  destroySomeNodes: function destroySomeNodes() {
    var attachUtil = this.skeleton.attachUtil;
    attachUtil.destroyAttachedNodes(this.greenBoneName); // console.log(attachUtil._attachedNodeArray);
    // console.log(attachUtil._boneIndexToNode);
  },
  changeMode: function changeMode() {
    var isCached = this.skeleton.isAnimationCached();

    if (isCached) {
      this.skeleton.setAnimationCacheMode(sp.Skeleton.AnimationCacheMode.REALTIME);
      this.modeLabel.string = "cache";
    } else {
      this.skeleton.setAnimationCacheMode(sp.Skeleton.AnimationCacheMode.SHARED_CACHE);
      this.modeLabel.string = "realtime";
    }
  }
});

cc._RF.pop();