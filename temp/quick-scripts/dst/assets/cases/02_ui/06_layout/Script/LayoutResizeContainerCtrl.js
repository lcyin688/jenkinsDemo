
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/cases/02_ui/06_layout/Script/LayoutResizeContainerCtrl.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '2bbedtV3blCVJbmf2E9h/0V', 'LayoutResizeContainerCtrl');
// cases/02_ui/06_layout/Script/LayoutResizeContainerCtrl.js

"use strict";

var info = cc.Class({
  name: 'info',
  properties: {
    target: cc.Node,
    num: 0
  }
}); //5 3 10 12

cc.Class({
  "extends": cc.Component,
  properties: {
    itemTemp: {
      "default": null,
      type: cc.Prefab
    },
    targetAry: {
      "default": [],
      type: [info]
    }
  },
  onLoad: function onLoad() {
    this._curTime = 0;
    this._curIndex = 0;
  },
  _createItem: function _createItem(parentNode, idx) {
    var item = cc.instantiate(this.itemTemp);
    var label = item.getComponentInChildren(cc.Label);
    label.string = idx;
    item.parent = parentNode;
  },
  update: function update(dt) {
    this._curTime += dt;

    if (this._curTime >= 1) {
      this._curTime = 0;

      for (var i = 0; i < this.targetAry.length; ++i) {
        var num = this.targetAry[i].num;
        var target = this.targetAry[i].target;

        if (target && this._curIndex < num) {
          this._createItem(target, this._curIndex);
        }
      }

      this._curIndex++;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9jYXNlcy8wMl91aS8wNl9sYXlvdXQvU2NyaXB0L0xheW91dFJlc2l6ZUNvbnRhaW5lckN0cmwuanMiXSwibmFtZXMiOlsiaW5mbyIsImNjIiwiQ2xhc3MiLCJuYW1lIiwicHJvcGVydGllcyIsInRhcmdldCIsIk5vZGUiLCJudW0iLCJDb21wb25lbnQiLCJpdGVtVGVtcCIsInR5cGUiLCJQcmVmYWIiLCJ0YXJnZXRBcnkiLCJvbkxvYWQiLCJfY3VyVGltZSIsIl9jdXJJbmRleCIsIl9jcmVhdGVJdGVtIiwicGFyZW50Tm9kZSIsImlkeCIsIml0ZW0iLCJpbnN0YW50aWF0ZSIsImxhYmVsIiwiZ2V0Q29tcG9uZW50SW5DaGlsZHJlbiIsIkxhYmVsIiwic3RyaW5nIiwicGFyZW50IiwidXBkYXRlIiwiZHQiLCJpIiwibGVuZ3RoIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLElBQUlBLElBQUksR0FBR0MsRUFBRSxDQUFDQyxLQUFILENBQVM7RUFDaEJDLElBQUksRUFBRSxNQURVO0VBRWhCQyxVQUFVLEVBQUU7SUFDUkMsTUFBTSxFQUFFSixFQUFFLENBQUNLLElBREg7SUFFUkMsR0FBRyxFQUFFO0VBRkc7QUFGSSxDQUFULENBQVgsRUFPQTs7QUFDQU4sRUFBRSxDQUFDQyxLQUFILENBQVM7RUFDTCxXQUFTRCxFQUFFLENBQUNPLFNBRFA7RUFHTEosVUFBVSxFQUFFO0lBQ1JLLFFBQVEsRUFBRTtNQUNOLFdBQVMsSUFESDtNQUVOQyxJQUFJLEVBQUVULEVBQUUsQ0FBQ1U7SUFGSCxDQURGO0lBS1JDLFNBQVMsRUFBRTtNQUNQLFdBQVMsRUFERjtNQUVQRixJQUFJLEVBQUUsQ0FBQ1YsSUFBRDtJQUZDO0VBTEgsQ0FIUDtFQWNMYSxNQUFNLEVBQUUsa0JBQVk7SUFDaEIsS0FBS0MsUUFBTCxHQUFnQixDQUFoQjtJQUNBLEtBQUtDLFNBQUwsR0FBaUIsQ0FBakI7RUFDSCxDQWpCSTtFQW1CTEMsV0FBVyxFQUFFLHFCQUFVQyxVQUFWLEVBQXNCQyxHQUF0QixFQUEyQjtJQUNwQyxJQUFJQyxJQUFJLEdBQUdsQixFQUFFLENBQUNtQixXQUFILENBQWUsS0FBS1gsUUFBcEIsQ0FBWDtJQUNBLElBQUlZLEtBQUssR0FBR0YsSUFBSSxDQUFDRyxzQkFBTCxDQUE0QnJCLEVBQUUsQ0FBQ3NCLEtBQS9CLENBQVo7SUFDQUYsS0FBSyxDQUFDRyxNQUFOLEdBQWVOLEdBQWY7SUFDQUMsSUFBSSxDQUFDTSxNQUFMLEdBQWNSLFVBQWQ7RUFDSCxDQXhCSTtFQTBCTFMsTUFBTSxFQUFFLGdCQUFVQyxFQUFWLEVBQWM7SUFDbEIsS0FBS2IsUUFBTCxJQUFpQmEsRUFBakI7O0lBQ0EsSUFBSSxLQUFLYixRQUFMLElBQWlCLENBQXJCLEVBQXdCO01BQ3BCLEtBQUtBLFFBQUwsR0FBZ0IsQ0FBaEI7O01BQ0EsS0FBSyxJQUFJYyxDQUFDLEdBQUcsQ0FBYixFQUFnQkEsQ0FBQyxHQUFHLEtBQUtoQixTQUFMLENBQWVpQixNQUFuQyxFQUEyQyxFQUFFRCxDQUE3QyxFQUFnRDtRQUM1QyxJQUFJckIsR0FBRyxHQUFHLEtBQUtLLFNBQUwsQ0FBZWdCLENBQWYsRUFBa0JyQixHQUE1QjtRQUNBLElBQUlGLE1BQU0sR0FBRyxLQUFLTyxTQUFMLENBQWVnQixDQUFmLEVBQWtCdkIsTUFBL0I7O1FBQ0EsSUFBSUEsTUFBTSxJQUFJLEtBQUtVLFNBQUwsR0FBaUJSLEdBQS9CLEVBQW9DO1VBQ2hDLEtBQUtTLFdBQUwsQ0FBaUJYLE1BQWpCLEVBQXlCLEtBQUtVLFNBQTlCO1FBQ0g7TUFDSjs7TUFDRCxLQUFLQSxTQUFMO0lBQ0g7RUFDSjtBQXZDSSxDQUFUIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgaW5mbyA9IGNjLkNsYXNzKHtcbiAgICBuYW1lOiAnaW5mbycsXG4gICAgcHJvcGVydGllczoge1xuICAgICAgICB0YXJnZXQ6IGNjLk5vZGUsXG4gICAgICAgIG51bTogMFxuICAgIH1cbn0pO1xuLy81IDMgMTAgMTJcbmNjLkNsYXNzKHtcbiAgICBleHRlbmRzOiBjYy5Db21wb25lbnQsXG5cbiAgICBwcm9wZXJ0aWVzOiB7XG4gICAgICAgIGl0ZW1UZW1wOiB7XG4gICAgICAgICAgICBkZWZhdWx0OiBudWxsLFxuICAgICAgICAgICAgdHlwZTogY2MuUHJlZmFiXG4gICAgICAgIH0sXG4gICAgICAgIHRhcmdldEFyeToge1xuICAgICAgICAgICAgZGVmYXVsdDogW10sXG4gICAgICAgICAgICB0eXBlOiBbaW5mb11cbiAgICAgICAgfVxuICAgIH0sXG5cbiAgICBvbkxvYWQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdGhpcy5fY3VyVGltZSA9IDA7XG4gICAgICAgIHRoaXMuX2N1ckluZGV4ID0gMDtcbiAgICB9LFxuXG4gICAgX2NyZWF0ZUl0ZW06IGZ1bmN0aW9uIChwYXJlbnROb2RlLCBpZHgpIHtcbiAgICAgICAgdmFyIGl0ZW0gPSBjYy5pbnN0YW50aWF0ZSh0aGlzLml0ZW1UZW1wKTtcbiAgICAgICAgdmFyIGxhYmVsID0gaXRlbS5nZXRDb21wb25lbnRJbkNoaWxkcmVuKGNjLkxhYmVsKTtcbiAgICAgICAgbGFiZWwuc3RyaW5nID0gaWR4O1xuICAgICAgICBpdGVtLnBhcmVudCA9IHBhcmVudE5vZGU7XG4gICAgfSxcblxuICAgIHVwZGF0ZTogZnVuY3Rpb24gKGR0KSB7XG4gICAgICAgIHRoaXMuX2N1clRpbWUgKz0gZHQ7XG4gICAgICAgIGlmICh0aGlzLl9jdXJUaW1lID49IDEpIHtcbiAgICAgICAgICAgIHRoaXMuX2N1clRpbWUgPSAwO1xuICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLnRhcmdldEFyeS5sZW5ndGg7ICsraSkge1xuICAgICAgICAgICAgICAgIHZhciBudW0gPSB0aGlzLnRhcmdldEFyeVtpXS5udW07XG4gICAgICAgICAgICAgICAgdmFyIHRhcmdldCA9IHRoaXMudGFyZ2V0QXJ5W2ldLnRhcmdldDtcbiAgICAgICAgICAgICAgICBpZiAodGFyZ2V0ICYmIHRoaXMuX2N1ckluZGV4IDwgbnVtKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX2NyZWF0ZUl0ZW0odGFyZ2V0LCB0aGlzLl9jdXJJbmRleCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5fY3VySW5kZXgrKztcbiAgICAgICAgfVxuICAgIH1cblxufSk7XG4iXX0=