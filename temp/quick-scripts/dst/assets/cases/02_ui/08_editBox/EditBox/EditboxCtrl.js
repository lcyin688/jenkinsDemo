
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/cases/02_ui/08_editBox/EditBox/EditboxCtrl.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'dd654DFPoRNVKRWOuQdLiEE', 'EditboxCtrl');
// cases/02_ui/08_editBox/EditBox/EditboxCtrl.js

"use strict";

var i18n = require('i18n');

cc.Class({
  "extends": cc.Component,
  properties: {
    // foo: {
    //    default: null,
    //    url: cc.Texture2D,  // optional, default is typeof default
    //    serializable: true, // optional, default is true
    //    visible: true,      // optional, default is true
    //    displayName: 'Foo', // optional
    //    readonly: false,    // optional, default is false
    // },
    // ...
    singleLineText: {
      "default": null,
      type: cc.EditBox
    },
    singleLinePassword: {
      "default": null,
      type: cc.EditBox
    },
    multiLineText: {
      "default": null,
      type: cc.EditBox
    },
    showEditorBoxLabel: {
      "default": null,
      type: cc.Label
    }
  },
  // use this for initialization
  onLoad: function onLoad() {},
  singleLineEditBoxDidBeginEditing: function singleLineEditBoxDidBeginEditing(sender) {
    cc.log(sender.node.name + " single line editBoxDidBeginEditing");
  },
  singleLineEditBoxDidChanged: function singleLineEditBoxDidChanged(text, sender) {
    cc.log(sender.node.name + " single line editBoxDidChanged: " + text);
  },
  singleLineEditBoxDidEndEditing: function singleLineEditBoxDidEndEditing(sender) {
    cc.log(sender.node.name + " single line editBoxDidEndEditing: " + this.singleLineText.string);
  },
  singleLinePasswordEditBoxDidBeginEditing: function singleLinePasswordEditBoxDidBeginEditing(sender) {
    cc.log(sender.node.name + " single line password editBoxDidBeginEditing");
  },
  singleLinePasswordEditBoxDidChanged: function singleLinePasswordEditBoxDidChanged(text, sender) {
    cc.log(sender.node.name + " single line password editBoxDidChanged: " + text);
  },
  singleLinePasswordEditBoxDidEndEditing: function singleLinePasswordEditBoxDidEndEditing(sender) {
    cc.log(sender.node.name + " single line password editBoxDidEndEditing: " + this.singleLinePassword.string);
  },
  multiLinePasswordEditBoxDidBeginEditing: function multiLinePasswordEditBoxDidBeginEditing(sender) {
    cc.log(sender.node.name + " multi line editBoxDidBeginEditing");
  },
  multiLinePasswordEditBoxDidChanged: function multiLinePasswordEditBoxDidChanged(text, sender) {
    cc.log(sender.node.name + " multi line editBoxDidChanged: " + text);
  },
  multiLinePasswordEditBoxDidEndEditing: function multiLinePasswordEditBoxDidEndEditing(sender) {
    cc.log(sender.node.name + " multi line editBoxDidEndEditing: " + this.multiLineText.string);
  },
  buttonClicked: function buttonClicked() {
    cc.log("button Clicked!");

    if (this.singleLineText.string !== "") {
      this.showEditorBoxLabel.string = i18n.t("cases/02_ui/07_editBox/editbox.js.1") + this.singleLineText.string;
    } else {
      this.showEditorBoxLabel.string = "";
    }
  } // called every frame, uncomment this function to activate update callback
  // update: function (dt) {
  // },

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9jYXNlcy8wMl91aS8wOF9lZGl0Qm94L0VkaXRCb3gvRWRpdGJveEN0cmwuanMiXSwibmFtZXMiOlsiaTE4biIsInJlcXVpcmUiLCJjYyIsIkNsYXNzIiwiQ29tcG9uZW50IiwicHJvcGVydGllcyIsInNpbmdsZUxpbmVUZXh0IiwidHlwZSIsIkVkaXRCb3giLCJzaW5nbGVMaW5lUGFzc3dvcmQiLCJtdWx0aUxpbmVUZXh0Iiwic2hvd0VkaXRvckJveExhYmVsIiwiTGFiZWwiLCJvbkxvYWQiLCJzaW5nbGVMaW5lRWRpdEJveERpZEJlZ2luRWRpdGluZyIsInNlbmRlciIsImxvZyIsIm5vZGUiLCJuYW1lIiwic2luZ2xlTGluZUVkaXRCb3hEaWRDaGFuZ2VkIiwidGV4dCIsInNpbmdsZUxpbmVFZGl0Qm94RGlkRW5kRWRpdGluZyIsInN0cmluZyIsInNpbmdsZUxpbmVQYXNzd29yZEVkaXRCb3hEaWRCZWdpbkVkaXRpbmciLCJzaW5nbGVMaW5lUGFzc3dvcmRFZGl0Qm94RGlkQ2hhbmdlZCIsInNpbmdsZUxpbmVQYXNzd29yZEVkaXRCb3hEaWRFbmRFZGl0aW5nIiwibXVsdGlMaW5lUGFzc3dvcmRFZGl0Qm94RGlkQmVnaW5FZGl0aW5nIiwibXVsdGlMaW5lUGFzc3dvcmRFZGl0Qm94RGlkQ2hhbmdlZCIsIm11bHRpTGluZVBhc3N3b3JkRWRpdEJveERpZEVuZEVkaXRpbmciLCJidXR0b25DbGlja2VkIiwidCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxJQUFNQSxJQUFJLEdBQUdDLE9BQU8sQ0FBQyxNQUFELENBQXBCOztBQUVBQyxFQUFFLENBQUNDLEtBQUgsQ0FBUztFQUNMLFdBQVNELEVBQUUsQ0FBQ0UsU0FEUDtFQUdMQyxVQUFVLEVBQUU7SUFDUjtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQUMsY0FBYyxFQUFFO01BQ1osV0FBUyxJQURHO01BRVpDLElBQUksRUFBRUwsRUFBRSxD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RkssQ0FBVCIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgaTE4biA9IHJlcXVpcmUoJ2kxOG4nKTtcblxuY2MuQ2xhc3Moe1xuICAgIGV4dGVuZHM6IGNjLkNvbXBvbmVudCxcblxuICAgIHByb3BlcnRpZXM6IHtcbiAgICAgICAgLy8gZm9vOiB7XG4gICAgICAgIC8vICAgIGRlZmF1bHQ6IG51bGwsXG4gICAgICAgIC8vICAgIHVybDogY2MuVGV4dHVyZTJELCAgLy8gb3B0aW9uYWwsIGRlZmF1bHQgaXMgdHlwZW9mIGRlZmF1bHRcbiAgICAgICAgLy8gICAgc2VyaWFsaXphYmxlOiB0cnVlLCAvLyBvcHRpb25hbCwgZGVmYXVsdCBpcyB0cnVlXG4gICAgICAgIC8vICAgIHZpc2libGU6IHRydWUsICAgICAgLy8gb3B0aW9uYWwsIGRlZmF1bHQgaXMgdHJ1ZVxuICAgICAgICAvLyAgICBkaXNwbGF5TmFtZTogJ0ZvbycsIC8vIG9wdGlvbmFsXG4gICAgICAgIC8vICAgIHJlYWRvbmx5OiBmYWxzZSwgICAgLy8gb3B0aW9uYWwsIGRlZmF1bHQgaXMgZmFsc2VcbiAgICAgICAgLy8gfSxcbiAgICAgICAgLy8gLi4uXG4gICAgICAgIHNpbmdsZUxpbmVUZXh0OiB7XG4gICAgICAgICAgICBkZWZhdWx0OiBudWxsLFxuICAgICAgICAgICAgdHlwZTogY2MuRWRpdEJveCxcbiAgICAgICAgfSxcblxuICAgICAgICBzaW5nbGVMaW5lUGFzc3dvcmQ6IHtcbiAgICAgICAgICAgIGRlZmF1bHQ6IG51bGwsXG4gICAgICAgICAgICB0eXBlOiBjYy5FZGl0Qm94LFxuICAgICAgICB9LFxuXG4gICAgICAgIG11bHRpTGluZVRleHQ6IHtcbiAgICAgICAgICAgIGRlZmF1bHQ6IG51bGwsXG4gICAgICAgICAgICB0eXBlOiBjYy5FZGl0Qm94XG4gICAgICAgIH0sXG5cbiAgICAgICAgc2hvd0VkaXRvckJveExhYmVsOiB7XG4gICAgICAgICAgICBkZWZhdWx0OiBudWxsLFxuICAgICAgICAgICAgdHlwZTogY2MuTGFiZWxcbiAgICAgICAgfVxuXG4gICAgfSxcblxuICAgIC8vIHVzZSB0aGlzIGZvciBpbml0aWFsaXphdGlvblxuICAgIG9uTG9hZDogZnVuY3Rpb24gKCkge1xuXG4gICAgfSxcblxuICAgIHNpbmdsZUxpbmVFZGl0Qm94RGlkQmVnaW5FZGl0aW5nOiBmdW5jdGlvbihzZW5kZXIpIHtcbiAgICAgICAgY2MubG9nKHNlbmRlci5ub2RlLm5hbWUgKyBcIiBzaW5nbGUgbGluZSBlZGl0Qm94RGlkQmVnaW5FZGl0aW5nXCIpO1xuICAgIH0sXG5cbiAgICBzaW5nbGVMaW5lRWRpdEJveERpZENoYW5nZWQ6IGZ1bmN0aW9uKHRleHQsIHNlbmRlcikge1xuICAgICAgICBjYy5sb2coc2VuZGVyLm5vZGUubmFtZSArIFwiIHNpbmdsZSBsaW5lIGVkaXRCb3hEaWRDaGFuZ2VkOiBcIiArIHRleHQpO1xuICAgIH0sXG5cbiAgICBzaW5nbGVMaW5lRWRpdEJveERpZEVuZEVkaXRpbmc6IGZ1bmN0aW9uKHNlbmRlcikge1xuICAgICAgICBjYy5sb2coc2VuZGVyLm5vZGUubmFtZSArIFwiIHNpbmdsZSBsaW5lIGVkaXRCb3hEaWRFbmRFZGl0aW5nOiBcIiArIHRoaXMuc2luZ2xlTGluZVRleHQuc3RyaW5nKTtcbiAgICB9LFxuXG4gICAgc2luZ2xlTGluZVBhc3N3b3JkRWRpdEJveERpZEJlZ2luRWRpdGluZzogZnVuY3Rpb24oc2VuZGVyKSB7XG4gICAgICAgIGNjLmxvZyhzZW5kZXIubm9kZS5uYW1lICsgXCIgc2luZ2xlIGxpbmUgcGFzc3dvcmQgZWRpdEJveERpZEJlZ2luRWRpdGluZ1wiKTtcbiAgICB9LFxuXG4gICAgc2luZ2xlTGluZVBhc3N3b3JkRWRpdEJveERpZENoYW5nZWQ6IGZ1bmN0aW9uKHRleHQsIHNlbmRlcikge1xuICAgICAgICBjYy5sb2coc2VuZGVyLm5vZGUubmFtZSArIFwiIHNpbmdsZSBsaW5lIHBhc3N3b3JkIGVkaXRCb3hEaWRDaGFuZ2VkOiBcIiArIHRleHQpO1xuICAgIH0sXG5cbiAgICBzaW5nbGVMaW5lUGFzc3dvcmRFZGl0Qm94RGlkRW5kRWRpdGluZzogZnVuY3Rpb24oc2VuZGVyKSB7XG4gICAgICAgIGNjLmxvZyhzZW5kZXIubm9kZS5uYW1lICsgXCIgc2luZ2xlIGxpbmUgcGFzc3dvcmQgZWRpdEJveERpZEVuZEVkaXRpbmc6IFwiICsgdGhpcy5zaW5nbGVMaW5lUGFzc3dvcmQuc3RyaW5nKTtcbiAgICB9LFxuXG4gICAgbXVsdGlMaW5lUGFzc3dvcmRFZGl0Qm94RGlkQmVnaW5FZGl0aW5nOiBmdW5jdGlvbihzZW5kZXIpIHtcbiAgICAgICAgY2MubG9nKHNlbmRlci5ub2RlLm5hbWUgKyBcIiBtdWx0aSBsaW5lIGVkaXRCb3hEaWRCZWdpbkVkaXRpbmdcIik7XG4gICAgfSxcblxuICAgIG11bHRpTGluZVBhc3N3b3JkRWRpdEJveERpZENoYW5nZWQ6IGZ1bmN0aW9uKHRleHQsIHNlbmRlcikge1xuICAgICAgICBjYy5sb2coc2VuZGVyLm5vZGUubmFtZSArIFwiIG11bHRpIGxpbmUgZWRpdEJveERpZENoYW5nZWQ6IFwiICsgdGV4dCk7XG4gICAgfSxcblxuICAgIG11bHRpTGluZVBhc3N3b3JkRWRpdEJveERpZEVuZEVkaXRpbmc6IGZ1bmN0aW9uKHNlbmRlcikge1xuICAgICAgICBjYy5sb2coc2VuZGVyLm5vZGUubmFtZSArIFwiIG11bHRpIGxpbmUgZWRpdEJveERpZEVuZEVkaXRpbmc6IFwiICsgdGhpcy5tdWx0aUxpbmVUZXh0LnN0cmluZyk7XG4gICAgfSxcbiAgICBidXR0b25DbGlja2VkOiBmdW5jdGlvbigpIHtcbiAgICAgICAgY2MubG9nKFwiYnV0dG9uIENsaWNrZWQhXCIpO1xuICAgICAgICBpZiAodGhpcy5zaW5nbGVMaW5lVGV4dC5zdHJpbmcgIT09IFwiXCIpIHtcbiAgICAgICAgICAgIHRoaXMuc2hvd0VkaXRvckJveExhYmVsLnN0cmluZyA9IGkxOG4udChcImNhc2VzLzAyX3VpLzA3X2VkaXRCb3gvZWRpdGJveC5qcy4xXCIpICsgdGhpcy5zaW5nbGVMaW5lVGV4dC5zdHJpbmc7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB0aGlzLnNob3dFZGl0b3JCb3hMYWJlbC5zdHJpbmcgPSBcIlwiO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLy8gY2FsbGVkIGV2ZXJ5IGZyYW1lLCB1bmNvbW1lbnQgdGhpcyBmdW5jdGlvbiB0byBhY3RpdmF0ZSB1cGRhdGUgY2FsbGJhY2tcbiAgICAvLyB1cGRhdGU6IGZ1bmN0aW9uIChkdCkge1xuXG4gICAgLy8gfSxcbn0pO1xuIl19