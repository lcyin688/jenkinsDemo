
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/cases/02_ui/03_button/SimpleButton/SimpleButtonCtrl.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '68675KwfElAdaumPl1byNh7', 'SimpleButtonCtrl');
// cases/02_ui/03_button/SimpleButton/SimpleButtonCtrl.js

"use strict";

var i18n = require('i18n');

cc.Class({
  "extends": cc.Component,
  properties: {
    buttonLeft: cc.Button,
    buttonRight: cc.Button,
    display: cc.Label
  },
  onBtnLeftClicked: function onBtnLeftClicked() {
    console.log('Left button clicked!');
    this.display.textKey = i18n.t("cases/02_ui/03_button/SimpleButton.js.1");
  },
  onBtnRightClicked: function onBtnRightClicked() {
    console.log('Right button clicked!');
    this.display.textKey = i18n.t("cases/02_ui/03_button/SimpleButton.js.2");
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9jYXNlcy8wMl91aS8wM19idXR0b24vU2ltcGxlQnV0dG9uL1NpbXBsZUJ1dHRvbkN0cmwuanMiXSwibmFtZXMiOlsiaTE4biIsInJlcXVpcmUiLCJjYyIsIkNsYXNzIiwiQ29tcG9uZW50IiwicHJvcGVydGllcyIsImJ1dHRvbkxlZnQiLCJCdXR0b24iLCJidXR0b25SaWdodCIsImRpc3BsYXkiLCJMYWJlbCIsIm9uQnRuTGVmdENsaWNrZWQiLCJjb25zb2xlIiwibG9nIiwidGV4dEtleSIsInQiLCJvbkJ0blJpZ2h0Q2xpY2tlZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxJQUFNQSxJQUFJLEdBQUdDLE9BQU8sQ0FBQyxNQUFELENBQXBCOztBQUVBQyxFQUFFLENBQUNDLEtBQUgsQ0FBUztFQUNMLFdBQVNELEVBQUUsQ0FBQ0UsU0FEUDtFQUdMQyxVQUFVLEVBQUU7SUFDUkMsVUFBVSxFQUFFSixFQUFFLENBQUNLLE1BRFA7SUFFUkMsV0FBVyxFQUFFTixFQUFFLENBQUNLLE1BRlI7SUFHUkUsT0FBTyxFQUFFUCxFQUFFLENBQUNRO0VBSEosQ0FIUDtFQVNMQyxnQkFBZ0IsRUFBRSw0QkFBVztJQUN6QkMsT0FBTyxDQUFDQyxHQUFSLENBQVksc0JBQVo7SUFDQSxLQUFLSixPQUFMLENBQWFLLE9BQWIsR0FBdUJkLElBQUksQ0FBQ2UsQ0FBTCxDQUFPLHlDQUFQLENBQXZCO0VBQ0gsQ0FaSTtFQWNMQyxpQkFBaUIsRUFBRSw2QkFBVztJQUMxQkosT0FBTyxDQUFDQyxHQUFSLENBQVksdUJBQVo7SUFDQSxLQUFLSixPQUFMLENBQWFLLE9BQWIsR0FBdUJkLElBQUksQ0FBQ2UsQ0FBTCxDQUFPLHlDQUFQLENBQXZCO0VBQ0g7QUFqQkksQ0FBVCIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgaTE4biA9IHJlcXVpcmUoJ2kxOG4nKTtcblxuY2MuQ2xhc3Moe1xuICAgIGV4dGVuZHM6IGNjLkNvbXBvbmVudCxcblxuICAgIHByb3BlcnRpZXM6IHtcbiAgICAgICAgYnV0dG9uTGVmdDogY2MuQnV0dG9uLFxuICAgICAgICBidXR0b25SaWdodDogY2MuQnV0dG9uLFxuICAgICAgICBkaXNwbGF5OiBjYy5MYWJlbFxuICAgIH0sXG5cbiAgICBvbkJ0bkxlZnRDbGlja2VkOiBmdW5jdGlvbigpIHtcbiAgICAgICAgY29uc29sZS5sb2coJ0xlZnQgYnV0dG9uIGNsaWNrZWQhJyk7XG4gICAgICAgIHRoaXMuZGlzcGxheS50ZXh0S2V5ID0gaTE4bi50KFwiY2FzZXMvMDJfdWkvMDNfYnV0dG9uL1NpbXBsZUJ1dHRvbi5qcy4xXCIpO1xuICAgIH0sXG5cbiAgICBvbkJ0blJpZ2h0Q2xpY2tlZDogZnVuY3Rpb24oKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKCdSaWdodCBidXR0b24gY2xpY2tlZCEnKTtcbiAgICAgICAgdGhpcy5kaXNwbGF5LnRleHRLZXkgPSBpMThuLnQoXCJjYXNlcy8wMl91aS8wM19idXR0b24vU2ltcGxlQnV0dG9uLmpzLjJcIik7XG4gICAgfVxufSk7XG4iXX0=