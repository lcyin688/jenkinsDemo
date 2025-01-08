
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/cases/05_scripting/01_properties/NodeGroupControl.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'bd4a2+britAlof0UdMCVB8c', 'NodeGroupControl');
// cases/05_scripting/01_properties/NodeGroupControl.js

"use strict";

cc.Class({
  "extends": cc.Component,
  properties: {
    nodeList: {
      "default": [],
      type: [cc.Node]
    }
  },
  // use this for initialization
  onLoad: function onLoad() {
    var self = this;
    this.inervalId = setInterval(function () {
      self.toggleNodesVisibility();
    }, 1000);
  },
  onDestroy: function onDestroy() {
    clearInterval(this.inervalId);
  },
  toggleNodesVisibility: function toggleNodesVisibility() {
    console.log('toggle visibility');

    for (var i = 0; i < this.nodeList.length; ++i) {
      this.nodeList[i].active = !this.nodeList[i].active;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9jYXNlcy8wNV9zY3JpcHRpbmcvMDFfcHJvcGVydGllcy9Ob2RlR3JvdXBDb250cm9sLmpzIl0sIm5hbWVzIjpbImNjIiwiQ2xhc3MiLCJDb21wb25lbnQiLCJwcm9wZXJ0aWVzIiwibm9kZUxpc3QiLCJ0eXBlIiwiTm9kZSIsIm9uTG9hZCIsInNlbGYiLCJpbmVydmFsSWQiLCJzZXRJbnRlcnZhbCIsInRvZ2dsZU5vZGVzVmlzaWJpbGl0eSIsIm9uRGVzdHJveSIsImNsZWFySW50ZXJ2YWwiLCJjb25zb2xlIiwibG9nIiwiaSIsImxlbmd0aCIsImFjdGl2ZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQUEsRUFBRSxDQUFDQyxLQUFILENBQVM7RUFDTCxXQUFTRCxFQUFFLENBQUNFLFNBRFA7RUFHTEMsVUFBVSxFQUFFO0lBQ1JDLFFBQVEsRUFBRTtNQUNOLFdBQVMsRUFESDtNQUVOQyxJQUFJLEVBQUUsQ0FBQ0wsRUFBRSxDQUFDTSxJQUFKO0lBRkE7RUFERixDQUhQO0VBVUw7RUFDQUMsTUFBTSxFQUFFLGtCQUFZO0lBQ2hCLElBQUlDLElBQUksR0FBRyxJQUFYO0lBQ0EsS0FBS0MsU0FBTCxHQUFpQkMsV0FBVyxDQUFDLFlBQVk7TUFDckNGLElBQUksQ0FBQ0cscUJBQUw7SUFDSCxDQUYyQixFQUV6QixJQUZ5QixDQUE1QjtFQUdILENBaEJJO0VBa0JMQyxTQUFTLEVBQUUscUJBQVk7SUFDbkJDLGFBQWEsQ0FBQyxLQUFLSixTQUFOLENBQWI7RUFDSCxDQXBCSTtFQXNCTEUscUJBQXFCLEVBQUUsaUNBQVc7SUFDOUJHLE9BQU8sQ0FBQ0MsR0FBUixDQUFZLG1CQUFaOztJQUNBLEtBQUssSUFBSUMsQ0FBQyxHQUFHLENBQWIsRUFBZ0JBLENBQUMsR0FBRyxLQUFLWixRQUFMLENBQWNhLE1BQWxDLEVBQTBDLEVBQUVELENBQTVDLEVBQStDO01BQzNDLEtBQUtaLFFBQUwsQ0FBY1ksQ0FBZCxFQUFpQkUsTUFBakIsR0FBMEIsQ0FBQyxLQUFLZCxRQUFMLENBQWNZLENBQWQsRUFBaUJFLE1BQTVDO0lBQ0g7RUFDSjtBQTNCSSxDQUFUIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJjYy5DbGFzcyh7XG4gICAgZXh0ZW5kczogY2MuQ29tcG9uZW50LFxuXG4gICAgcHJvcGVydGllczoge1xuICAgICAgICBub2RlTGlzdDoge1xuICAgICAgICAgICAgZGVmYXVsdDogW10sXG4gICAgICAgICAgICB0eXBlOiBbY2MuTm9kZV1cbiAgICAgICAgfVxuICAgIH0sXG5cbiAgICAvLyB1c2UgdGhpcyBmb3IgaW5pdGlhbGl6YXRpb25cbiAgICBvbkxvYWQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIHNlbGYgPSB0aGlzO1xuICAgICAgICB0aGlzLmluZXJ2YWxJZCA9IHNldEludGVydmFsKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHNlbGYudG9nZ2xlTm9kZXNWaXNpYmlsaXR5KCk7XG4gICAgICAgIH0sIDEwMDApO1xuICAgIH0sXG5cbiAgICBvbkRlc3Ryb3k6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgY2xlYXJJbnRlcnZhbCh0aGlzLmluZXJ2YWxJZCk7XG4gICAgfSxcblxuICAgIHRvZ2dsZU5vZGVzVmlzaWJpbGl0eTogZnVuY3Rpb24oKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKCd0b2dnbGUgdmlzaWJpbGl0eScpO1xuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMubm9kZUxpc3QubGVuZ3RoOyArK2kpIHtcbiAgICAgICAgICAgIHRoaXMubm9kZUxpc3RbaV0uYWN0aXZlID0gIXRoaXMubm9kZUxpc3RbaV0uYWN0aXZlO1xuICAgICAgICB9XG4gICAgfVxufSk7XG4iXX0=