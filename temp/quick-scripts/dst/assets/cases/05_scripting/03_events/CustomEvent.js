
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/cases/05_scripting/03_events/CustomEvent.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '5cc23aoYcxIKazRFwKWGEI7', 'CustomEvent');
// cases/05_scripting/03_events/CustomEvent.js

"use strict";

cc.Class({
  "extends": cc.Component,
  // use this for initialization
  onLoad: function onLoad() {
    var touchEvent = this.getComponent('TouchEvent'); // Emit CUSTOM_EVENT to its listeners while touch end

    touchEvent._callback = function () {
      this.node.emit('CUSTOM_EVENT');
    }.bind(this);

    var addButton = cc.find('Canvas/add');
    var cancelButton = cc.find('Canvas/cancel');

    function onCustomEvent(event) {
      this.runAction(cc.sequence(cc.scaleTo(0.5, 2, 1), cc.scaleTo(0.25, 1, 1)));
    }

    this.node.on('CUSTOM_EVENT', onCustomEvent, addButton);
    this.node.on('CUSTOM_EVENT', onCustomEvent, cancelButton);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9jYXNlcy8wNV9zY3JpcHRpbmcvMDNfZXZlbnRzL0N1c3RvbUV2ZW50LmpzIl0sIm5hbWVzIjpbImNjIiwiQ2xhc3MiLCJDb21wb25lbnQiLCJvbkxvYWQiLCJ0b3VjaEV2ZW50IiwiZ2V0Q29tcG9uZW50IiwiX2NhbGxiYWNrIiwibm9kZSIsImVtaXQiLCJiaW5kIiwiYWRkQnV0dG9uIiwiZmluZCIsImNhbmNlbEJ1dHRvbiIsIm9uQ3VzdG9tRXZlbnQiLCJldmVudCIsInJ1bkFjdGlvbiIsInNlcXVlbmNlIiwic2NhbGVUbyIsIm9uIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBQSxFQUFFLENBQUNDLEtBQUgsQ0FBUztFQUNMLFdBQVNELEVBQUUsQ0FBQ0UsU0FEUDtFQUdMO0VBQ0FDLE1BQU0sRUFBRSxrQkFBWTtJQUNoQixJQUFJQyxVQUFVLEdBQUcsS0FBS0MsWUFBTCxDQUFrQixZQUFsQixDQUFqQixDQURnQixDQUdoQjs7SUFDQUQsVUFBVSxDQUFDRSxTQUFYLEdBQXdCLFlBQVk7TUFDaEMsS0FBS0MsSUFBTCxDQUFVQyxJQUFWLENBQWUsY0FBZjtJQUNILENBRnNCLENBRXBCQyxJQUZvQixDQUVmLElBRmUsQ0FBdkI7O0lBSUEsSUFBSUMsU0FBUyxHQUFHVixFQUFFLENBQUNXLElBQUgsQ0FBUSxZQUFSLENBQWhCO0lBQ0EsSUFBSUMsWUFBWSxHQUFHWixFQUFFLENBQUNXLElBQUgsQ0FBUSxlQUFSLENBQW5COztJQUVBLFNBQVNFLGFBQVQsQ0FBd0JDLEtBQXhCLEVBQStCO01BQzNCLEtBQUtDLFNBQUwsQ0FBZWYsRUFBRSxDQUFDZ0IsUUFBSCxDQUNYaEIsRUFBRSxDQUFDaUIsT0FBSCxDQUFXLEdBQVgsRUFBZ0IsQ0FBaEIsRUFBbUIsQ0FBbkIsQ0FEVyxFQUVYakIsRUFBRSxDQUFDaUIsT0FBSCxDQUFXLElBQVgsRUFBaUIsQ0FBakIsRUFBb0IsQ0FBcEIsQ0FGVyxDQUFmO0lBSUg7O0lBRUQsS0FBS1YsSUFBTCxDQUFVVyxFQUFWLENBQWEsY0FBYixFQUE2QkwsYUFBN0IsRUFBNENILFNBQTVDO0lBQ0EsS0FBS0gsSUFBTCxDQUFVVyxFQUFWLENBQWEsY0FBYixFQUE2QkwsYUFBN0IsRUFBNENELFlBQTVDO0VBQ0g7QUF4QkksQ0FBVCIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiY2MuQ2xhc3Moe1xuICAgIGV4dGVuZHM6IGNjLkNvbXBvbmVudCxcblxuICAgIC8vIHVzZSB0aGlzIGZvciBpbml0aWFsaXphdGlvblxuICAgIG9uTG9hZDogZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgdG91Y2hFdmVudCA9IHRoaXMuZ2V0Q29tcG9uZW50KCdUb3VjaEV2ZW50Jyk7XG4gICAgICAgIFxuICAgICAgICAvLyBFbWl0IENVU1RPTV9FVkVOVCB0byBpdHMgbGlzdGVuZXJzIHdoaWxlIHRvdWNoIGVuZFxuICAgICAgICB0b3VjaEV2ZW50Ll9jYWxsYmFjayA9IChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB0aGlzLm5vZGUuZW1pdCgnQ1VTVE9NX0VWRU5UJyk7XG4gICAgICAgIH0pLmJpbmQodGhpcyk7XG4gICAgICAgIFxuICAgICAgICB2YXIgYWRkQnV0dG9uID0gY2MuZmluZCgnQ2FudmFzL2FkZCcpO1xuICAgICAgICB2YXIgY2FuY2VsQnV0dG9uID0gY2MuZmluZCgnQ2FudmFzL2NhbmNlbCcpO1xuICAgICAgICBcbiAgICAgICAgZnVuY3Rpb24gb25DdXN0b21FdmVudCAoZXZlbnQpIHtcbiAgICAgICAgICAgIHRoaXMucnVuQWN0aW9uKGNjLnNlcXVlbmNlKFxuICAgICAgICAgICAgICAgIGNjLnNjYWxlVG8oMC41LCAyLCAxKSxcbiAgICAgICAgICAgICAgICBjYy5zY2FsZVRvKDAuMjUsIDEsIDEpXG4gICAgICAgICAgICApKTtcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgdGhpcy5ub2RlLm9uKCdDVVNUT01fRVZFTlQnLCBvbkN1c3RvbUV2ZW50LCBhZGRCdXR0b24pO1xuICAgICAgICB0aGlzLm5vZGUub24oJ0NVU1RPTV9FVkVOVCcsIG9uQ3VzdG9tRXZlbnQsIGNhbmNlbEJ1dHRvbik7XG4gICAgfSxcbn0pO1xuIl19