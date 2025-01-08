
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/cases/02_ui/05_listView/Item.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '920c8a5MahAhbCTSvmQvaB+', 'Item');
// cases/02_ui/05_listView/Item.js

"use strict";

var i18n = require('i18n');

cc.Class({
  "extends": cc.Component,
  properties: {
    label: {
      "default": null,
      type: cc.Label
    },
    tmplID: 0,
    itemID: 0
  },
  onLoad: function onLoad() {
    this.node.on('touchend', function () {
      console.log("Item " + this.itemID + ' clicked');
    }, this);
  },
  initItem: function initItem(tmplID, itemID) {
    this.tmplID = tmplID;
    this.itemID = itemID;
    this.label.textKey = i18n.t("cases/02_ui/05_scrollView/Item.js.1") + this.tmplID + ' Item#' + this.itemID;
  },
  updateItem: function updateItem(itemID) {
    this.itemID = itemID;
    this.label.textKey = i18n.t("cases/02_ui/05_scrollView/Item.js.1") + this.tmplID + ' Item#' + this.itemID;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9jYXNlcy8wMl91aS8wNV9saXN0Vmlldy9JdGVtLmpzIl0sIm5hbWVzIjpbImkxOG4iLCJyZXF1aXJlIiwiY2MiLCJDbGFzcyIsIkNvbXBvbmVudCIsInByb3BlcnRpZXMiLCJsYWJlbCIsInR5cGUiLCJMYWJlbCIsInRtcGxJRCIsIml0ZW1JRCIsIm9uTG9hZCIsIm5vZGUiLCJvbiIsImNvbnNvbGUiLCJsb2ciLCJpbml0SXRlbSIsInRleHRLZXkiLCJ0IiwidXBkYXRlSXRlbSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxJQUFNQSxJQUFJLEdBQUdDLE9BQU8sQ0FBQyxNQUFELENBQXBCOztBQUVBQyxFQUFFLENBQUNDLEtBQUgsQ0FBUztFQUNMLFdBQVNELEVBQUUsQ0FBQ0UsU0FEUDtFQUdMQyxVQUFVLEVBQUU7SUFDUkMsS0FBSyxFQUFFO01BQ0gsV0FBUyxJQUROO01BRUhDLElBQUksRUFBRUwsRUFBRSxDQUFDTTtJQUZOLENBREM7SUFLUkMsTUFBTSxFQUFFLENBTEE7SUFNUkMsTUFBTSxFQUFFO0VBTkEsQ0FIUDtFQVlMQyxNQUFNLEVBQUUsa0JBQVk7SUFDaEIsS0FBS0MsSUFBTCxDQUFVQyxFQUFWLENBQWEsVUFBYixFQUF5QixZQUFZO01BQ2pDQyxPQUFPLENBQUNDLEdBQVIsQ0FBWSxVQUFVLEtBQUtMLE1BQWYsR0FBd0IsVUFBcEM7SUFDSCxDQUZELEVBRUcsSUFGSDtFQUdILENBaEJJO0VBa0JMTSxRQUFRLEVBQUUsa0JBQVVQLE1BQVYsRUFBa0JDLE1BQWxCLEVBQTBCO0lBQ2hDLEtBQUtELE1BQUwsR0FBY0EsTUFBZDtJQUNBLEtBQUtDLE1BQUwsR0FBY0EsTUFBZDtJQUNBLEtBQUtKLEtBQUwsQ0FBV1csT0FBWCxHQUFxQmpCLElBQUksQ0FBQ2tCLENBQUwsQ0FBTyxxQ0FBUCxJQUFnRCxLQUFLVCxNQUFyRCxHQUE4RCxRQUE5RCxHQUF5RSxLQUFLQyxNQUFuRztFQUNILENBdEJJO0VBd0JMUyxVQUFVLEVBQUUsb0JBQVNULE1BQVQsRUFBaUI7SUFDekIsS0FBS0EsTUFBTCxHQUFjQSxNQUFkO0lBQ0EsS0FBS0osS0FBTCxDQUFXVyxPQUFYLEdBQXFCakIsSUFBSSxDQUFDa0IsQ0FBTCxDQUFPLHFDQUFQLElBQWdELEtBQUtULE1BQXJELEdBQThELFFBQTlELEdBQXlFLEtBQUtDLE1BQW5HO0VBQ0g7QUEzQkksQ0FBVCIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgaTE4biA9IHJlcXVpcmUoJ2kxOG4nKTtcblxuY2MuQ2xhc3Moe1xuICAgIGV4dGVuZHM6IGNjLkNvbXBvbmVudCxcblxuICAgIHByb3BlcnRpZXM6IHtcbiAgICAgICAgbGFiZWw6IHtcbiAgICAgICAgICAgIGRlZmF1bHQ6IG51bGwsXG4gICAgICAgICAgICB0eXBlOiBjYy5MYWJlbFxuICAgICAgICB9LFxuICAgICAgICB0bXBsSUQ6IDAsXG4gICAgICAgIGl0ZW1JRDogMCxcbiAgICB9LFxuICAgIFxuICAgIG9uTG9hZDogZnVuY3Rpb24gKCkge1xuICAgICAgICB0aGlzLm5vZGUub24oJ3RvdWNoZW5kJywgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgY29uc29sZS5sb2coXCJJdGVtIFwiICsgdGhpcy5pdGVtSUQgKyAnIGNsaWNrZWQnKTtcbiAgICAgICAgfSwgdGhpcyk7XG4gICAgfSxcblxuICAgIGluaXRJdGVtOiBmdW5jdGlvbiAodG1wbElELCBpdGVtSUQpIHtcbiAgICAgICAgdGhpcy50bXBsSUQgPSB0bXBsSUQ7XG4gICAgICAgIHRoaXMuaXRlbUlEID0gaXRlbUlEO1xuICAgICAgICB0aGlzLmxhYmVsLnRleHRLZXkgPSBpMThuLnQoXCJjYXNlcy8wMl91aS8wNV9zY3JvbGxWaWV3L0l0ZW0uanMuMVwiKSArIHRoaXMudG1wbElEICsgJyBJdGVtIycgKyB0aGlzLml0ZW1JRDtcbiAgICB9LFxuXG4gICAgdXBkYXRlSXRlbTogZnVuY3Rpb24oaXRlbUlEKSB7XG4gICAgICAgIHRoaXMuaXRlbUlEID0gaXRlbUlEO1xuICAgICAgICB0aGlzLmxhYmVsLnRleHRLZXkgPSBpMThuLnQoXCJjYXNlcy8wMl91aS8wNV9zY3JvbGxWaWV3L0l0ZW0uanMuMVwiKSArIHRoaXMudG1wbElEICsgJyBJdGVtIycgKyB0aGlzLml0ZW1JRDtcbiAgICB9LFxufSk7XG4iXX0=