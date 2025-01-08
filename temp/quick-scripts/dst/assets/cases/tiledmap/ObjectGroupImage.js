
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/cases/tiledmap/ObjectGroupImage.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '9277fnpG9BFd6uvLH0LCrFA', 'ObjectGroupImage');
// cases/tiledmap/ObjectGroupImage.js

"use strict";

cc.Class({
  "extends": cc.Component,
  properties: {},
  start: function start() {
    cc.director.getCollisionManager().enabled = true;
    this._speed = 1000;
    var useless = cc.find("Canvas/tiledmap/game/img58");
    useless.active = false;
    var theParent = cc.find("Canvas/tiledmap");
    this.node.parent = theParent;
  },
  update: function update(dt) {
    this.node.x += dt * this._speed;
  },
  onCollisionEnter: function onCollisionEnter(other) {
    var otherName = other.node.name;

    switch (otherName) {
      case "to-right":
        this._speed = 1000;
        this.node.scaleX = 1.3;
        break;

      case "to-index-1":
        this.node.setSiblingIndex(1);
        break;

      case "to-left":
        this._speed = -1000;
        this.node.scaleX = -1.3;
        break;

      case "to-index-4":
        this.node.setSiblingIndex(6);
        break;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9jYXNlcy90aWxlZG1hcC9PYmplY3RHcm91cEltYWdlLmpzIl0sIm5hbWVzIjpbImNjIiwiQ2xhc3MiLCJDb21wb25lbnQiLCJwcm9wZXJ0aWVzIiwic3RhcnQiLCJkaXJlY3RvciIsImdldENvbGxpc2lvbk1hbmFnZXIiLCJlbmFibGVkIiwiX3NwZWVkIiwidXNlbGVzcyIsImZpbmQiLCJhY3RpdmUiLCJ0aGVQYXJlbnQiLCJub2RlIiwicGFyZW50IiwidXBkYXRlIiwiZHQiLCJ4Iiwib25Db2xsaXNpb25FbnRlciIsIm90aGVyIiwib3RoZXJOYW1lIiwibmFtZSIsInNjYWxlWCIsInNldFNpYmxpbmdJbmRleCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQUEsRUFBRSxDQUFDQyxLQUFILENBQVM7RUFDTCxXQUFTRCxFQUFFLENBQUNFLFNBRFA7RUFHTEMsVUFBVSxFQUFFLEVBSFA7RUFPTEMsS0FQSyxtQkFPSTtJQUNMSixFQUFFLENBQUNLLFFBQUgsQ0FBWUMsbUJBQVosR0FBa0NDLE9BQWxDLEdBQTRDLElBQTVDO0lBRUEsS0FBS0MsTUFBTCxHQUFjLElBQWQ7SUFFQSxJQUFJQyxPQUFPLEdBQUdULEVBQUUsQ0FBQ1UsSUFBSCxDQUFRLDRCQUFSLENBQWQ7SUFDQUQsT0FBTyxDQUFDRSxNQUFSLEdBQWlCLEtBQWpCO0lBRUEsSUFBSUMsU0FBUyxHQUFHWixFQUFFLENBQUNVLElBQUgsQ0FBUSxpQkFBUixDQUFoQjtJQUNBLEtBQUtHLElBQUwsQ0FBVUMsTUFBVixHQUFtQkYsU0FBbkI7RUFDSCxDQWpCSTtFQW1CTEcsTUFuQkssa0JBbUJHQyxFQW5CSCxFQW1CTztJQUNSLEtBQUtILElBQUwsQ0FBVUksQ0FBVixJQUFlRCxFQUFFLEdBQUcsS0FBS1IsTUFBekI7RUFDSCxDQXJCSTtFQXVCTFUsZ0JBdkJLLDRCQXVCYUMsS0F2QmIsRUF1Qm9CO0lBQ3JCLElBQUlDLFNBQVMsR0FBR0QsS0FBSyxDQUFDTixJQUFOLENBQVdRLElBQTNCOztJQUNBLFFBQVFELFNBQVI7TUFDSSxLQUFLLFVBQUw7UUFDSSxLQUFLWixNQUFMLEdBQWMsSUFBZDtRQUNBLEtBQUtLLElBQUwsQ0FBVVMsTUFBVixHQUFtQixHQUFuQjtRQUNBOztNQUNKLEtBQUssWUFBTDtRQUNJLEtBQUtULElBQUwsQ0FBVVUsZUFBVixDQUEwQixDQUExQjtRQUNBOztNQUNKLEtBQUssU0FBTDtRQUNJLEtBQUtmLE1BQUwsR0FBYyxDQUFDLElBQWY7UUFDQSxLQUFLSyxJQUFMLENBQVVTLE1BQVYsR0FBbUIsQ0FBQyxHQUFwQjtRQUNBOztNQUNKLEtBQUssWUFBTDtRQUNJLEtBQUtULElBQUwsQ0FBVVUsZUFBVixDQUEwQixDQUExQjtRQUNBO0lBZFI7RUFnQkg7QUF6Q0ksQ0FBVCIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiY2MuQ2xhc3Moe1xuICAgIGV4dGVuZHM6IGNjLkNvbXBvbmVudCxcblxuICAgIHByb3BlcnRpZXM6IHtcbiAgICAgICAgXG4gICAgfSxcblxuICAgIHN0YXJ0ICgpIHtcbiAgICAgICAgY2MuZGlyZWN0b3IuZ2V0Q29sbGlzaW9uTWFuYWdlcigpLmVuYWJsZWQgPSB0cnVlO1xuXG4gICAgICAgIHRoaXMuX3NwZWVkID0gMTAwMDtcblxuICAgICAgICBsZXQgdXNlbGVzcyA9IGNjLmZpbmQoXCJDYW52YXMvdGlsZWRtYXAvZ2FtZS9pbWc1OFwiKTtcbiAgICAgICAgdXNlbGVzcy5hY3RpdmUgPSBmYWxzZTtcblxuICAgICAgICBsZXQgdGhlUGFyZW50ID0gY2MuZmluZChcIkNhbnZhcy90aWxlZG1hcFwiKTtcbiAgICAgICAgdGhpcy5ub2RlLnBhcmVudCA9IHRoZVBhcmVudDtcbiAgICB9LFxuXG4gICAgdXBkYXRlIChkdCkge1xuICAgICAgICB0aGlzLm5vZGUueCArPSBkdCAqIHRoaXMuX3NwZWVkO1xuICAgIH0sXG5cbiAgICBvbkNvbGxpc2lvbkVudGVyIChvdGhlcikge1xuICAgICAgICBsZXQgb3RoZXJOYW1lID0gb3RoZXIubm9kZS5uYW1lO1xuICAgICAgICBzd2l0Y2ggKG90aGVyTmFtZSkge1xuICAgICAgICAgICAgY2FzZSBcInRvLXJpZ2h0XCI6XG4gICAgICAgICAgICAgICAgdGhpcy5fc3BlZWQgPSAxMDAwO1xuICAgICAgICAgICAgICAgIHRoaXMubm9kZS5zY2FsZVggPSAxLjM7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIFwidG8taW5kZXgtMVwiOlxuICAgICAgICAgICAgICAgIHRoaXMubm9kZS5zZXRTaWJsaW5nSW5kZXgoMSk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIFwidG8tbGVmdFwiOlxuICAgICAgICAgICAgICAgIHRoaXMuX3NwZWVkID0gLTEwMDA7XG4gICAgICAgICAgICAgICAgdGhpcy5ub2RlLnNjYWxlWCA9IC0xLjM7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIFwidG8taW5kZXgtNFwiOlxuICAgICAgICAgICAgICAgIHRoaXMubm9kZS5zZXRTaWJsaW5nSW5kZXgoNik7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH0gXG4gICAgfVxufSk7XG4iXX0=