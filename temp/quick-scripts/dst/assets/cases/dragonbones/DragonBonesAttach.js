
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/cases/dragonbones/DragonBonesAttach.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'dd42bvM/xJDHKcFipNcxQZJ', 'DragonBonesAttach');
// cases/dragonbones/DragonBonesAttach.js

"use strict";

cc.Class({
  "extends": cc.Component,
  properties: {
    skeleton: {
      type: dragonBones.ArmatureDisplay,
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
  destroyUnusual: function destroyUnusual() {
    var attachUtil = this.skeleton.attachUtil;
    var boneNodes = attachUtil.getAttachedNodes("root");
    var boneNode = boneNodes[0];

    if (boneNode) {
      boneNode.destroy();
    } // console.log(attachUtil._attachedNodeArray);
    // console.log(attachUtil._boneIndexToNode);

  },
  destroyAllNodes: function destroyAllNodes() {
    var attachUtil = this.skeleton.attachUtil;
    attachUtil.destroyAllAttachedNodes(); // console.log(attachUtil._attachedNodeArray);
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
      this.skeleton.setAnimationCacheMode(dragonBones.ArmatureDisplay.AnimationCacheMode.REALTIME);
      this.modeLabel.string = "cache";
    } else {
      this.skeleton.setAnimationCacheMode(dragonBones.ArmatureDisplay.AnimationCacheMode.SHARED_CACHE);
      this.modeLabel.string = "realtime";
    }
  }
});

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9jYXNlcy9kcmFnb25ib25lcy9EcmFnb25Cb25lc0F0dGFjaC5qcyJdLCJuYW1lcyI6WyJjYyIsIkNsYXNzIiwiQ29tcG9uZW50IiwicHJvcGVydGllcyIsInNrZWxldG9uIiwidHlwZSIsImRyYWdvbkJvbmVzIiwiQXJtYXR1cmVEaXNwbGF5IiwidGFyZ2V0UHJlZmFiIiwiUHJlZmFiIiwibW9kZUxhYmVsIiwiTGFiZWwiLCJyZWRCb25lTmFtZSIsImdyZWVuQm9uZU5hbWUiLCJibHVlQm9uZU5hbWUiLCJnZW5lcmF0ZUFsbE5vZGVzIiwiYXR0YWNoVXRpbCIsImdlbmVyYXRlQWxsQXR0YWNoZWROb2RlcyIsImJvbmVOb2RlcyIsImdldEF0dGFjaGVkTm9kZXMiLCJib25lTm9kZSIsInRhcmdldE5vZGUiLCJpbnN0YW50aWF0ZSIsImNvbG9yIiwiYWRkQ2hpbGQiLCJkZXN0cm95VW51c3VhbCIsImRlc3Ryb3kiLCJkZXN0cm95QWxsTm9kZXMiLCJkZXN0cm95QWxsQXR0YWNoZWROb2RlcyIsImdlbmVyYXRlU29tZU5vZGVzIiwiZ2VuZXJhdGVBdHRhY2hlZE5vZGVzIiwiZGVzdHJveVNvbWVOb2RlcyIsImRlc3Ryb3lBdHRhY2hlZE5vZGVzIiwiY2hhbmdlTW9kZSIsImlzQ2FjaGVkIiwiaXNBbmltYXRpb25DYWNoZWQiLCJzZXRBbmltYXRpb25DYWNoZU1vZGUiLCJBbmltYXRpb25DYWNoZU1vZGUiLCJSRUFMVElNRSIsInN0cmluZyIsIlNIQVJFRF9DQUNIRSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQUEsRUFBRSxDQUFDQyxLQUFILENBQVM7RUFDTCxXQUFTRCxFQUFFLENBQUNFLFNBRFA7RUFHTEMsVUFBVSxFQUFFO0lBQ1JDLFFBQVEsRUFBRztNQUNQQyxJQUFJLEVBQUVDLFdBQVcsQ0FBQ0MsZUFEWDtNQUVQLFdBQVM7SUFGRixDQURIO0lBS1JDLFlBQVksRUFBRztNQUNYSCxJQUFJLEVBQUVMLEVBQUUsQ0FBQ1Ms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QTlFSTtFQWdGTG9CLFVBaEZLLHdCQWdGUztJQUNWLElBQUlDLFFBQVEsR0FBRyxLQUFLOUIsUUFBTCxDQUFjK0IsaUJBQWQsRUFBZjs7SUFDQSxJQUFJRCxRQUFKLEVBQWM7TUFDVixLQUFLOUIsUUFBTCxDQUFjZ0MscUJBQWQsQ0FBb0M5QixXQUFXLENBQUNDLGVBQVosQ0FBNEI4QixrQkFBNUIsQ0FBK0NDLFFBQW5GO01BQ0EsS0FBSzVCLFNBQUwsQ0FBZTZCLE1BQWYsR0FBd0IsT0FBeEI7SUFDSCxDQUhELE1BR087TUFDSCxLQUFLbkMsUUFBTCxDQUFjZ0MscUJBQWQsQ0FBb0M5QixXQUFXLENBQUNDLGVBQVosQ0FBNEI4QixrQkFBNUIsQ0FBK0NHLFlBQW5GO01BQ0EsS0FBSzlCLFNBQUwsQ0FBZTZCLE1BQWYsR0FBd0IsVUFBeEI7SUFDSDtFQUNKO0FBekZJLENBQVQiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImNjLkNsYXNzKHtcbiAgICBleHRlbmRzOiBjYy5Db21wb25lbnQsXG5cbiAgICBwcm9wZXJ0aWVzOiB7XG4gICAgICAgIHNrZWxldG9uIDoge1xuICAgICAgICAgICAgdHlwZTogZHJhZ29uQm9uZXMuQXJtYXR1cmVEaXNwbGF5LFxuICAgICAgICAgICAgZGVmYXVsdDogbnVsbCxcbiAgICAgICAgfSxcbiAgICAgICAgdGFyZ2V0UHJlZmFiIDoge1xuICAgICAgICAgICAgdHlwZTogY2MuUHJlZmFiLFxuICAgICAgICAgICAgZGVmYXVsdDogbnVsbCxcbiAgICAgICAgfSxcbiAgICAgICAgbW9kZUxhYmVsIDoge1xuICAgICAgICAgICAgdHlwZTogY2MuTGFiZWwsXG4gICAgICAgICAgICBkZWZhdWx0OiBudWxsLFxuICAgICAgICB9LFxuICAgICAgICByZWRCb25lTmFtZTogXCJcIixcbiAgICAgICAgZ3JlZW5Cb25lTmFtZTogXCJcIixcbiAgICAgICAgYmx1ZUJvbmVOYW1lOiBcIlwiLFxuICAgIH0sXG5cbiAgICBnZW5lcmF0ZUFsbE5vZGVzICgpIHtcbiAgICAgICAgbGV0IGF0dGFjaFV0aWwgPSB0aGlzLnNrZWxldG9uLmF0dGFjaFV0aWw7XG4gICAgICAgIGF0dGFjaFV0aWwuZ2VuZXJhdGVBbGxBdHRhY2hlZE5vZGVzKCk7XG4gICAgICAgIGxldCBib25lTm9kZXMgPSBhdHRhY2hVdGlsLmdldEF0dGFjaGVkTm9kZXModGhpcy5yZWRCb25lTmFtZSk7XG4gICAgICAgIGxldCBib25lTm9kZSA9IGJvbmVOb2Rlc1swXTtcbiAgICAgICAgaWYgKGJvbmVOb2RlKSB7XG4gICAgICAgICAgICBsZXQgdGFyZ2V0Tm9kZSA9IGNjLmluc3RhbnRpYXRlKHRoaXMudGFyZ2V0UHJlZmFiKTtcbiAgICAgICAgICAgIHRhcmdldE5vZGUuY29sb3IgPSBjYy5jb2xvcigyNTUsIDAsIDApO1xuICAgICAgICAgICAgYm9uZU5vZGUuYWRkQ2hpbGQodGFyZ2V0Tm9kZSk7XG4gICAgICAgIH1cbiAgICAgICAgYm9uZU5vZGVzID0gYXR0YWNoVXRpbC5nZXRBdHRhY2hlZE5vZGVzKHRoaXMuYmx1ZUJvbmVOYW1lKTtcbiAgICAgICAgYm9uZU5vZGUgPSBib25lTm9kZXNbMF07XG4gICAgICAgIGlmIChib25lTm9kZSkge1xuICAgICAgICAgICAgbGV0IHRhcmdldE5vZGUgPSBjYy5pbnN0YW50aWF0ZSh0aGlzLnRhcmdldFByZWZhYik7XG4gICAgICAgICAgICB0YXJnZXROb2RlLmNvbG9yID0gY2MuY29sb3IoMCwgMCwgMjU1KTtcbiAgICAgICAgICAgIGJvbmVOb2RlLmFkZENoaWxkKHRhcmdldE5vZGUpO1xuICAgICAgICB9XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKGF0dGFjaFV0aWwuX2F0dGFjaGVkTm9kZUFycmF5KTtcbiAgICAgICAgLy8gY29uc29sZS5sb2coYXR0YWNoVXRpbC5fYm9uZUluZGV4VG9Ob2RlKTtcbiAgICB9LFxuXG4gICAgZGVzdHJveVVudXN1YWwgKCkge1xuICAgICAgICBsZXQgYXR0YWNoVXRpbCA9IHRoaXMuc2tlbGV0b24uYXR0YWNoVXRpbDtcbiAgICAgICAgbGV0IGJvbmVOb2RlcyA9IGF0dGFjaFV0aWwuZ2V0QXR0YWNoZWROb2RlcyhcInJvb3RcIik7XG4gICAgICAgIGxldCBib25lTm9kZSA9IGJvbmVOb2Rlc1swXTtcbiAgICAgICAgaWYgKGJvbmVOb2RlKSB7XG4gICAgICAgICAgICBib25lTm9kZS5kZXN0cm95KCk7XG4gICAgICAgIH1cbiAgICAgICAgLy8gY29uc29sZS5sb2coYXR0YWNoVXRpbC5fYXR0YWNoZWROb2RlQXJyYXkpO1xuICAgICAgICAvLyBjb25zb2xlLmxvZyhhdHRhY2hVdGlsLl9ib25lSW5kZXhUb05vZGUpO1xuICAgIH0sXG5cbiAgICBkZXN0cm95QWxsTm9kZXMgKCkge1xuICAgICAgICBsZXQgYXR0YWNoVXRpbCA9IHRoaXMuc2tlbGV0b24uYXR0YWNoVXRpbDtcbiAgICAgICAgYXR0YWNoVXRpbC5kZXN0cm95QWxsQXR0YWNoZWROb2RlcygpO1xuICAgICAgICAvLyBjb25zb2xlLmxvZyhhdHRhY2hVdGlsLl9hdHRhY2hlZE5vZGVBcnJheSk7XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKGF0dGFjaFV0aWwuX2JvbmVJbmRleFRvTm9kZSk7XG4gICAgfSxcblxuICAgIGdlbmVyYXRlU29tZU5vZGVzICgpIHtcbiAgICAgICAgbGV0IGF0dGFjaFV0aWwgPSB0aGlzLnNrZWxldG9uLmF0dGFjaFV0aWw7XG4gICAgICAgIGxldCBib25lTm9kZXMgPSBhdHRhY2hVdGlsLmdlbmVyYXRlQXR0YWNoZWROb2Rlcyh0aGlzLmdyZWVuQm9uZU5hbWUpO1xuICAgICAgICBsZXQgYm9uZU5vZGUgPSBib25lTm9kZXNbMF07XG4gICAgICAgIGlmIChib25lTm9kZSkge1xuICAgICAgICAgICAgbGV0IHRhcmdldE5vZGUgPSBjYy5pbnN0YW50aWF0ZSh0aGlzLnRhcmdldFByZWZhYik7XG4gICAgICAgICAgICB0YXJnZXROb2RlLmNvbG9yID0gY2MuY29sb3IoMCwgMjU1LCAwKTtcbiAgICAgICAgICAgIGJvbmVOb2RlLmFkZENoaWxkKHRhcmdldE5vZGUpO1xuICAgICAgICB9XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKGF0dGFjaFV0aWwuX2F0dGFjaGVkTm9kZUFycmF5KTtcbiAgICAgICAgLy8gY29uc29sZS5sb2coYXR0YWNoVXRpbC5fYm9uZUluZGV4VG9Ob2RlKTtcbiAgICB9LFxuXG4gICAgZGVzdHJveVNvbWVOb2RlcyAoKSB7XG4gICAgICAgIGxldCBhdHRhY2hVdGlsID0gdGhpcy5za2VsZXRvbi5hdHRhY2hVdGlsO1xuICAgICAgICBhdHRhY2hVdGlsLmRlc3Ryb3lBdHRhY2hlZE5vZGVzKHRoaXMuZ3JlZW5Cb25lTmFtZSk7XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKGF0dGFjaFV0aWwuX2F0dGFjaGVkTm9kZUFycmF5KTtcbiAgICAgICAgLy8gY29uc29sZS5sb2coYXR0YWNoVXRpbC5fYm9uZUluZGV4VG9Ob2RlKTtcbiAgICB9LFxuXG4gICAgY2hhbmdlTW9kZSAoKSB7XG4gICAgICAgIGxldCBpc0NhY2hlZCA9IHRoaXMuc2tlbGV0b24uaXNBbmltYXRpb25DYWNoZWQoKTtcbiAgICAgICAgaWYgKGlzQ2FjaGVkKSB7XG4gICAgICAgICAgICB0aGlzLnNrZWxldG9uLnNldEFuaW1hdGlvbkNhY2hlTW9kZShkcmFnb25Cb25lcy5Bcm1hdHVyZURpc3BsYXkuQW5pbWF0aW9uQ2FjaGVNb2RlLlJFQUxUSU1FKTtcbiAgICAgICAgICAgIHRoaXMubW9kZUxhYmVsLnN0cmluZyA9IFwiY2FjaGVcIjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuc2tlbGV0b24uc2V0QW5pbWF0aW9uQ2FjaGVNb2RlKGRyYWdvbkJvbmVzLkFybWF0dXJlRGlzcGxheS5BbmltYXRpb25DYWNoZU1vZGUuU0hBUkVEX0NBQ0hFKTtcbiAgICAgICAgICAgIHRoaXMubW9kZUxhYmVsLnN0cmluZyA9IFwicmVhbHRpbWVcIjtcbiAgICAgICAgfVxuICAgIH0sXG59KTsiXX0=