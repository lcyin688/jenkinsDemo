
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/cases/05_scripting/01_properties/ReferenceTypeProperties.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '9341f3fDdBMjJLKh4D+kJJK', 'ReferenceTypeProperties');
// cases/05_scripting/01_properties/ReferenceTypeProperties.js

"use strict";

var MyCustomComponent = require('MyCustomComponent');

cc.Class({
  "extends": cc.Component,
  properties: {
    myNode: {
      "default": null,
      type: cc.Node
    },
    mySprite: {
      "default": null,
      type: cc.Sprite
    },
    myLabel: {
      "default": null,
      type: cc.Label
    },
    myComponent: {
      "default": null,
      type: MyCustomComponent
    },
    mySpriteFrame: {
      "default": null,
      type: cc.SpriteFrame
    },
    myAtlas: {
      "default": null,
      type: cc.SpriteAtlas
    },
    myPrefab: {
      "default": null,
      type: cc.Prefab
    },
    myAudioClip: {
      "default": null,
      type: cc.AudioClip
    }
  },
  // use this for initialization
  onLoad: function onLoad() {
    this.myLabel.string = this.myComponent.getPower().toString();
  },
  // called every frame
  update: function update(dt) {}
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9jYXNlcy8wNV9zY3JpcHRpbmcvMDFfcHJvcGVydGllcy9SZWZlcmVuY2VUeXBlUHJvcGVydGllcy5qcyJdLCJuYW1lcyI6WyJNeUN1c3RvbUNvbXBvbmVudCIsInJlcXVpcmUiLCJjYyIsIkNsYXNzIiwiQ29tcG9uZW50IiwicHJvcGVydGllcyIsIm15Tm9kZSIsInR5cGUiLCJOb2RlIiwibXlTcHJpdGUiLCJTcHJpdGUiLCJteUxhYmVsIiwiTGFiZWwiLCJteUNvbXBvbmVudCIsIm15U3ByaXRlRnJhbWUiLCJTcHJpdGVGcmFtZSIsIm15QXRsYXMiLCJTcHJpdGVBdGxhcyIsIm15UHJlZmFiIiwiUHJlZmFiIiwibXlBdWRpb0NsaXAiLCJBdWRpb0NsaXAiLCJvbkxvYWQiLCJzdHJpbmciLCJnZXRQb3dlciIsInRvU3RyaW5nIiwidXBkYXRlIiwiZHQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsSUFBTUEsaUJBQWlCLEdBQUdDLE9BQU8sQ0FBQyxtQkFBRCxDQUFqQzs7QUFFQUMsRUFBRSxDQUFDQyxLQUFILENBQVM7RUFDTCxXQUFTRCxFQUFFLENBQUNFLFNBRFA7RUFHTEMsVUFBVSxFQUFFO0lBQ1JDLE1BQU0sRUFBRTtNQUNKLFdBQVMsSUFETDtNQUVKQyxJQUFJLEVBQUVMLEVBQUUsQ0FBQ007SUFGTCxDQURBO0lBS1JDLFFBQVEsRUFBRTtNQUNOLFdBQVMsSUFESDtNQUVORixJQUFJLEVBQUVMLEVBQUUsQ0FBQ1E7SUFGSCxDQUxGO0lBU1JDLE9BQU8sRUFBRTtNQUNMLFdBQVMsSUFESjtNQUVMSixJQUFJLEVBQUVMLEVBQUUsQ0FBQ1U7SUFGSixDQVREO0lBYVJDLFdBQVcsRUFBRTtNQUNULFdBQVMsSUFEQTtNQUVUTixJQUFJLEVBQUVQO0lBRkcsQ0FiTDtJQWlCUmMsYUFBYSxFQUFFO01BQ1gsV0FBUyxJQURFO01BRVhQLElBQUksRUFBRUwsRUFBRSxDQUFDYTtJQUZFLENBakJQO0lBcUJSQyxPQUFPLEVBQUU7TUFDTCxXQUFTLElBREo7TUFFTFQsSUFBSSxFQUFFTCxFQUFFLENBQUNlO0lBRkosQ0FyQkQ7SUF5QlJDLFFBQVEsRUFBRTtNQUNOLFdBQVMsSUFESDtNQUVOWCxJQUFJLEVBQUVMLEVBQUUsQ0FBQ2lCO0lBRkgsQ0F6QkY7SUE2QlJDLFdBQVcsRUFBRTtNQUNULFdBQVMsSUFEQTtNQUVUYixJQUFJLEVBQUVMLEVBQUUsQ0FBQ21CO0lBRkE7RUE3QkwsQ0FIUDtFQXNDTDtFQUNBQyxNQUFNLEVBQUUsa0JBQVk7SUFDaEIsS0FBS1gsT0FBTCxDQUFhWSxNQUFiLEdBQXNCLEtBQUtWLFdBQUwsQ0FBaUJXLFFBQWpCLEdBQTRCQyxRQUE1QixFQUF0QjtFQUNILENBekNJO0VBMkNMO0VBQ0FDLE1BQU0sRUFBRSxnQkFBVUMsRUFBVixFQUFjLENBRXJCO0FBOUNJLENBQVQiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IE15Q3VzdG9tQ29tcG9uZW50ID0gcmVxdWlyZSgnTXlDdXN0b21Db21wb25lbnQnKTtcblxuY2MuQ2xhc3Moe1xuICAgIGV4dGVuZHM6IGNjLkNvbXBvbmVudCxcblxuICAgIHByb3BlcnRpZXM6IHtcbiAgICAgICAgbXlOb2RlOiB7XG4gICAgICAgICAgICBkZWZhdWx0OiBudWxsLFxuICAgICAgICAgICAgdHlwZTogY2MuTm9kZVxuICAgICAgICB9LFxuICAgICAgICBteVNwcml0ZToge1xuICAgICAgICAgICAgZGVmYXVsdDogbnVsbCxcbiAgICAgICAgICAgIHR5cGU6IGNjLlNwcml0ZVxuICAgICAgICB9LFxuICAgICAgICBteUxhYmVsOiB7XG4gICAgICAgICAgICBkZWZhdWx0OiBudWxsLFxuICAgICAgICAgICAgdHlwZTogY2MuTGFiZWxcbiAgICAgICAgfSxcbiAgICAgICAgbXlDb21wb25lbnQ6IHtcbiAgICAgICAgICAgIGRlZmF1bHQ6IG51bGwsXG4gICAgICAgICAgICB0eXBlOiBNeUN1c3RvbUNvbXBvbmVudFxuICAgICAgICB9LFxuICAgICAgICBteVNwcml0ZUZyYW1lOiB7XG4gICAgICAgICAgICBkZWZhdWx0OiBudWxsLFxuICAgICAgICAgICAgdHlwZTogY2MuU3ByaXRlRnJhbWVcbiAgICAgICAgfSxcbiAgICAgICAgbXlBdGxhczoge1xuICAgICAgICAgICAgZGVmYXVsdDogbnVsbCxcbiAgICAgICAgICAgIHR5cGU6IGNjLlNwcml0ZUF0bGFzXG4gICAgICAgIH0sXG4gICAgICAgIG15UHJlZmFiOiB7XG4gICAgICAgICAgICBkZWZhdWx0OiBudWxsLFxuICAgICAgICAgICAgdHlwZTogY2MuUHJlZmFiXG4gICAgICAgIH0sXG4gICAgICAgIG15QXVkaW9DbGlwOiB7XG4gICAgICAgICAgICBkZWZhdWx0OiBudWxsLFxuICAgICAgICAgICAgdHlwZTogY2MuQXVkaW9DbGlwXG4gICAgICAgIH1cbiAgICB9LFxuXG4gICAgLy8gdXNlIHRoaXMgZm9yIGluaXRpYWxpemF0aW9uXG4gICAgb25Mb2FkOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHRoaXMubXlMYWJlbC5zdHJpbmcgPSB0aGlzLm15Q29tcG9uZW50LmdldFBvd2VyKCkudG9TdHJpbmcoKTtcbiAgICB9LFxuXG4gICAgLy8gY2FsbGVkIGV2ZXJ5IGZyYW1lXG4gICAgdXBkYXRlOiBmdW5jdGlvbiAoZHQpIHtcblxuICAgIH0sXG59KTtcbiJdfQ==