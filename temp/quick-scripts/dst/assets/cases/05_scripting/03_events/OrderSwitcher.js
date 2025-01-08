
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/cases/05_scripting/03_events/OrderSwitcher.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '385fbE9eghB1IwH34WHGHmk', 'OrderSwitcher');
// cases/05_scripting/03_events/OrderSwitcher.js

"use strict";

cc.Class({
  "extends": cc.Component,
  properties: {
    container: cc.Node
  },
  // use this for initialization
  "switch": function _switch() {
    var children = this.container.children;
    var length = children.length;

    if (length > 1) {
      var src = Math.floor(Math.random() * length);
      var node = children[src];
      var dst = src === length - 1 ? 0 : src + 1;
      node.setSiblingIndex(dst);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9jYXNlcy8wNV9zY3JpcHRpbmcvMDNfZXZlbnRzL09yZGVyU3dpdGNoZXIuanMiXSwibmFtZXMiOlsiY2MiLCJDbGFzcyIsIkNvbXBvbmVudCIsInByb3BlcnRpZXMiLCJjb250YWluZXIiLCJOb2RlIiwiY2hpbGRyZW4iLCJsZW5ndGgiLCJzcmMiLCJNYXRoIiwiZmxvb3IiLCJyYW5kb20iLCJub2RlIiwiZHN0Iiwic2V0U2libGluZ0luZGV4Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBQSxFQUFFLENBQUNDLEtBQUgsQ0FBUztFQUNMLFdBQVNELEVBQUUsQ0FBQ0UsU0FEUDtFQUdMQyxVQUFVLEVBQUU7SUFDUkMsU0FBUyxFQUFFSixFQUFFLENBQUNLO0VBRE4sQ0FIUDtFQU9MO0VBQ0EsVUFBUSxtQkFBWTtJQUNoQixJQUFJQyxRQUFRLEdBQUcsS0FBS0YsU0FBTCxDQUFlRSxRQUE5QjtJQUNBLElBQUlDLE1BQU0sR0FBR0QsUUFBUSxDQUFDQyxNQUF0Qjs7SUFDQSxJQUFJQSxNQUFNLEdBQUcsQ0FBYixFQUFnQjtNQUNaLElBQUlDLEdBQUcsR0FBR0MsSUFBSSxDQUFDQyxLQUFMLENBQVlELElBQUksQ0FBQ0UsTUFBTCxLQUFnQkosTUFBNUIsQ0FBVjtNQUNBLElBQUlLLElBQUksR0FBR04sUUFBUSxDQUFDRSxHQUFELENBQW5CO01BQ0EsSUFBSUssR0FBRyxHQUFHTCxHQUFHLEtBQUtELE1BQU0sR0FBQyxDQUFmLEdBQW1CLENBQW5CLEdBQXVCQyxHQUFHLEdBQUMsQ0FBckM7TUFDQUksSUFBSSxDQUFDRSxlQUFMLENBQXFCRCxHQUFyQjtJQUNIO0VBQ0o7QUFqQkksQ0FBVCIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiY2MuQ2xhc3Moe1xuICAgIGV4dGVuZHM6IGNjLkNvbXBvbmVudCxcblxuICAgIHByb3BlcnRpZXM6IHtcbiAgICAgICAgY29udGFpbmVyOiBjYy5Ob2RlXG4gICAgfSxcblxuICAgIC8vIHVzZSB0aGlzIGZvciBpbml0aWFsaXphdGlvblxuICAgIHN3aXRjaDogZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgY2hpbGRyZW4gPSB0aGlzLmNvbnRhaW5lci5jaGlsZHJlbjtcbiAgICAgICAgdmFyIGxlbmd0aCA9IGNoaWxkcmVuLmxlbmd0aDtcbiAgICAgICAgaWYgKGxlbmd0aCA+IDEpIHtcbiAgICAgICAgICAgIHZhciBzcmMgPSBNYXRoLmZsb29yKCBNYXRoLnJhbmRvbSgpICogbGVuZ3RoICk7XG4gICAgICAgICAgICB2YXIgbm9kZSA9IGNoaWxkcmVuW3NyY107XG4gICAgICAgICAgICB2YXIgZHN0ID0gc3JjID09PSBsZW5ndGgtMSA/IDAgOiBzcmMrMTtcbiAgICAgICAgICAgIG5vZGUuc2V0U2libGluZ0luZGV4KGRzdCk7XG4gICAgICAgIH1cbiAgICB9LFxufSk7XG4iXX0=