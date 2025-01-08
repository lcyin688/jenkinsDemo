
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/cases/spine/SpineAttach.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9jYXNlcy9zcGluZS9TcGluZUF0dGFjaC5qcyJdLCJuYW1lcyI6WyJjYyIsIkNsYXNzIiwiQ29tcG9uZW50IiwicHJvcGVydGllcyIsInNrZWxldG9uIiwidHlwZSIsInNwIiwiU2tlbGV0b24iLCJ0YXJnZXRQcmVmYWIiLCJQcmVmYWIiLCJtb2RlTGFiZWwiLCJMYWJlbCIsInJlZEJvbmVOYW1lIiwiZ3JlZW5Cb25lTmFtZSIsImJsdWVCb25lTmFtZSIsImdlbmVyYXRlQWxsTm9kZXMiLCJhdHRhY2hVdGlsIiwiZ2VuZXJhdGVBbGxBdHRhY2hlZE5vZGVzIiwiYm9uZU5vZGVzIiwiZ2V0QXR0YWNoZWROb2RlcyIsImJvbmVOb2RlIiwidGFyZ2V0Tm9kZSIsImluc3RhbnRpYXRlIiwiY29sb3IiLCJhZGRDaGlsZCIsImRlc3Ryb3lBbGxOb2RlcyIsImRlc3Ryb3lBbGxBdHRhY2hlZE5vZGVzIiwiZGVzdHJveVVudXN1YWwiLCJkZXN0cm95IiwiZ2VuZXJhdGVTb21lTm9kZXMiLCJnZW5lcmF0ZUF0dGFjaGVkTm9kZXMiLCJkZXN0cm95U29tZU5vZGVzIiwiZGVzdHJveUF0dGFjaGVkTm9kZXMiLCJjaGFuZ2VNb2RlIiwiaXNDYWNoZWQiLCJpc0FuaW1hdGlvbkNhY2hlZCIsInNldEFuaW1hdGlvbkNhY2hlTW9kZSIsIkFuaW1hdGlvbkNhY2hlTW9kZSIsIlJFQUxUSU1FIiwic3RyaW5nIiwiU0hBUkVEX0NBQ0hFIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBQSxFQUFFLENBQUNDLEtBQUgsQ0FBUztFQUNMLFdBQVNELEVBQUUsQ0FBQ0UsU0FEUDtFQUdMQyxVQUFVLEVBQUU7SUFDUkMsUUFBUSxFQUFHO01BQ1BDLElBQUksRUFBRUMsRUFBRSxDQUFDQyxRQURGO01BRVAsV0FBUztJQUZGLENBREg7SUFLUkMsWUFBWSxFQUFHO01BQ1hILElBQUksRUFBRUwsRUFBRSxDQUFDUyxNQURFO01BRVgsV0FBUztJQUZFLENBTFA7SUFT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Q1YsSUFBSUMsUUFBUSxHQUFHLEtBQUs5QixRQUFMLENBQWMrQixpQkFBZCxFQUFmOztJQUNBLElBQUlELFFBQUosRUFBYztNQUNWLEtBQUs5QixRQUFMLENBQWNnQyxxQkFBZCxDQUFvQzlCLEVBQUUsQ0FBQ0MsUUFBSCxDQUFZOEIsa0JBQVosQ0FBK0JDLFFBQW5FO01BQ0EsS0FBSzVCLFNBQUwsQ0FBZTZCLE1BQWYsR0FBd0IsT0FBeEI7SUFDSCxDQUhELE1BR087TUFDSCxLQUFLbkMsUUFBTCxDQUFjZ0MscUJBQWQsQ0FBb0M5QixFQUFFLENBQUNDLFFBQUgsQ0FBWThCLGtCQUFaLENBQStCRyxZQUFuRTtNQUNBLEtBQUs5QixTQUFMLENBQWU2QixNQUFmLEdBQXdCLFVBQXhCO0lBQ0g7RUFDSjtBQXpGSSxDQUFUIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJjYy5DbGFzcyh7XG4gICAgZXh0ZW5kczogY2MuQ29tcG9uZW50LFxuXG4gICAgcHJvcGVydGllczoge1xuICAgICAgICBza2VsZXRvbiA6IHtcbiAgICAgICAgICAgIHR5cGU6IHNwLlNrZWxldG9uLFxuICAgICAgICAgICAgZGVmYXVsdDogbnVsbCxcbiAgICAgICAgfSxcbiAgICAgICAgdGFyZ2V0UHJlZmFiIDoge1xuICAgICAgICAgICAgdHlwZTogY2MuUHJlZmFiLFxuICAgICAgICAgICAgZGVmYXVsdDogbnVsbCxcbiAgICAgICAgfSxcbiAgICAgICAgbW9kZUxhYmVsIDoge1xuICAgICAgICAgICAgdHlwZTogY2MuTGFiZWwsXG4gICAgICAgICAgICBkZWZhdWx0OiBudWxsLFxuICAgICAgICB9LFxuICAgICAgICByZWRCb25lTmFtZTogXCJcIixcbiAgICAgICAgZ3JlZW5Cb25lTmFtZTogXCJcIixcbiAgICAgICAgYmx1ZUJvbmVOYW1lOiBcIlwiLFxuICAgIH0sXG5cbiAgICBnZW5lcmF0ZUFsbE5vZGVzICgpIHtcbiAgICAgICAgbGV0IGF0dGFjaFV0aWwgPSB0aGlzLnNrZWxldG9uLmF0dGFjaFV0aWw7XG4gICAgICAgIGF0dGFjaFV0aWwuZ2VuZXJhdGVBbGxBdHRhY2hlZE5vZGVzKCk7XG4gICAgICAgIGxldCBib25lTm9kZXMgPSBhdHRhY2hVdGlsLmdldEF0dGFjaGVkTm9kZXModGhpcy5yZWRCb25lTmFtZSk7XG4gICAgICAgIGxldCBib25lTm9kZSA9IGJvbmVOb2Rlc1swXTtcbiAgICAgICAgaWYgKGJvbmVOb2RlKSB7XG4gICAgICAgICAgICBsZXQgdGFyZ2V0Tm9kZSA9IGNjLmluc3RhbnRpYXRlKHRoaXMudGFyZ2V0UHJlZmFiKTtcbiAgICAgICAgICAgIHRhcmdldE5vZGUuY29sb3IgPSBjYy5jb2xvcigyNTUsIDAsIDApO1xuICAgICAgICAgICAgYm9uZU5vZGUuYWRkQ2hpbGQodGFyZ2V0Tm9kZSk7XG4gICAgICAgIH1cbiAgICAgICAgYm9uZU5vZGVzID0gYXR0YWNoVXRpbC5nZXRBdHRhY2hlZE5vZGVzKHRoaXMuYmx1ZUJvbmVOYW1lKTtcbiAgICAgICAgYm9uZU5vZGUgPSBib25lTm9kZXNbMF07XG4gICAgICAgIGlmIChib25lTm9kZSkge1xuICAgICAgICAgICAgbGV0IHRhcmdldE5vZGUgPSBjYy5pbnN0YW50aWF0ZSh0aGlzLnRhcmdldFByZWZhYik7XG4gICAgICAgICAgICB0YXJnZXROb2RlLmNvbG9yID0gY2MuY29sb3IoMCwgMCwgMjU1KTtcbiAgICAgICAgICAgIGJvbmVOb2RlLmFkZENoaWxkKHRhcmdldE5vZGUpO1xuICAgICAgICB9XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKGF0dGFjaFV0aWwuX2F0dGFjaGVkTm9kZUFycmF5KTtcbiAgICAgICAgLy8gY29uc29sZS5sb2coYXR0YWNoVXRpbC5fYm9uZUluZGV4VG9Ob2RlKTtcbiAgICB9LFxuXG4gICAgZGVzdHJveUFsbE5vZGVzICgpIHtcbiAgICAgICAgbGV0IGF0dGFjaFV0aWwgPSB0aGlzLnNrZWxldG9uLmF0dGFjaFV0aWw7XG4gICAgICAgIGF0dGFjaFV0aWwuZGVzdHJveUFsbEF0dGFjaGVkTm9kZXMoKTtcbiAgICAgICAgLy8gY29uc29sZS5sb2coYXR0YWNoVXRpbC5fYXR0YWNoZWROb2RlQXJyYXkpO1xuICAgICAgICAvLyBjb25zb2xlLmxvZyhhdHRhY2hVdGlsLl9ib25lSW5kZXhUb05vZGUpO1xuICAgIH0sXG5cbiAgICBkZXN0cm95VW51c3VhbCAoKSB7XG4gICAgICAgIGxldCBhdHRhY2hVdGlsID0gdGhpcy5za2VsZXRvbi5hdHRhY2hVdGlsO1xuICAgICAgICBsZXQgYm9uZU5vZGVzID0gYXR0YWNoVXRpbC5nZXRBdHRhY2hlZE5vZGVzKFwicm9vdFwiKTtcbiAgICAgICAgbGV0IGJvbmVOb2RlID0gYm9uZU5vZGVzWzBdO1xuICAgICAgICBpZiAoYm9uZU5vZGUpIHtcbiAgICAgICAgICAgIGJvbmVOb2RlLmRlc3Ryb3koKTtcbiAgICAgICAgfVxuICAgICAgICAvLyBjb25zb2xlLmxvZyhhdHRhY2hVdGlsLl9hdHRhY2hlZE5vZGVBcnJheSk7XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKGF0dGFjaFV0aWwuX2JvbmVJbmRleFRvTm9kZSk7XG4gICAgfSxcblxuICAgIGdlbmVyYXRlU29tZU5vZGVzICgpIHtcbiAgICAgICAgbGV0IGF0dGFjaFV0aWwgPSB0aGlzLnNrZWxldG9uLmF0dGFjaFV0aWw7XG4gICAgICAgIGxldCBib25lTm9kZXMgPSBhdHRhY2hVdGlsLmdlbmVyYXRlQXR0YWNoZWROb2Rlcyh0aGlzLmdyZWVuQm9uZU5hbWUpO1xuICAgICAgICBsZXQgYm9uZU5vZGUgPSBib25lTm9kZXNbMF07XG4gICAgICAgIGlmIChib25lTm9kZSkge1xuICAgICAgICAgICAgbGV0IHRhcmdldE5vZGUgPSBjYy5pbnN0YW50aWF0ZSh0aGlzLnRhcmdldFByZWZhYik7XG4gICAgICAgICAgICB0YXJnZXROb2RlLmNvbG9yID0gY2MuY29sb3IoMCwgMjU1LCAwKTtcbiAgICAgICAgICAgIGJvbmVOb2RlLmFkZENoaWxkKHRhcmdldE5vZGUpO1xuICAgICAgICB9XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKGF0dGFjaFV0aWwuX2F0dGFjaGVkTm9kZUFycmF5KTtcbiAgICAgICAgLy8gY29uc29sZS5sb2coYXR0YWNoVXRpbC5fYm9uZUluZGV4VG9Ob2RlKTtcbiAgICB9LFxuXG4gICAgZGVzdHJveVNvbWVOb2RlcyAoKSB7XG4gICAgICAgIGxldCBhdHRhY2hVdGlsID0gdGhpcy5za2VsZXRvbi5hdHRhY2hVdGlsO1xuICAgICAgICBhdHRhY2hVdGlsLmRlc3Ryb3lBdHRhY2hlZE5vZGVzKHRoaXMuZ3JlZW5Cb25lTmFtZSk7XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKGF0dGFjaFV0aWwuX2F0dGFjaGVkTm9kZUFycmF5KTtcbiAgICAgICAgLy8gY29uc29sZS5sb2coYXR0YWNoVXRpbC5fYm9uZUluZGV4VG9Ob2RlKTtcbiAgICB9LFxuXG4gICAgY2hhbmdlTW9kZSAoKSB7XG4gICAgICAgIGxldCBpc0NhY2hlZCA9IHRoaXMuc2tlbGV0b24uaXNBbmltYXRpb25DYWNoZWQoKTtcbiAgICAgICAgaWYgKGlzQ2FjaGVkKSB7XG4gICAgICAgICAgICB0aGlzLnNrZWxldG9uLnNldEFuaW1hdGlvbkNhY2hlTW9kZShzcC5Ta2VsZXRvbi5BbmltYXRpb25DYWNoZU1vZGUuUkVBTFRJTUUpO1xuICAgICAgICAgICAgdGhpcy5tb2RlTGFiZWwuc3RyaW5nID0gXCJjYWNoZVwiO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5za2VsZXRvbi5zZXRBbmltYXRpb25DYWNoZU1vZGUoc3AuU2tlbGV0b24uQW5pbWF0aW9uQ2FjaGVNb2RlLlNIQVJFRF9DQUNIRSk7XG4gICAgICAgICAgICB0aGlzLm1vZGVMYWJlbC5zdHJpbmcgPSBcInJlYWx0aW1lXCI7XG4gICAgICAgIH1cbiAgICB9LFxufSk7Il19