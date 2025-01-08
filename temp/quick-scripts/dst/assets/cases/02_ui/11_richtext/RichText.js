
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/cases/02_ui/11_richtext/RichText.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'ce4b5HKaNtMU4kQr7fbr5VH', 'RichText');
// cases/02_ui/11_richtext/RichText.js

"use strict";

cc.Class({
  "extends": cc.Component,
  properties: {
    positionMessage: cc.Label
  },
  clickme: function clickme(event) {
    var clickPosition = event.touch.getLocation();
    this.positionMessage.string = 'Clicked at: x = ' + parseInt(parseFloat(clickPosition.x)) + ', y = ' + parseInt(parseFloat(clickPosition.y));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9jYXNlcy8wMl91aS8xMV9yaWNodGV4dC9SaWNoVGV4dC5qcyJdLCJuYW1lcyI6WyJjYyIsIkNsYXNzIiwiQ29tcG9uZW50IiwicHJvcGVydGllcyIsInBvc2l0aW9uTWVzc2FnZSIsIkxhYmVsIiwiY2xpY2ttZSIsImV2ZW50IiwiY2xpY2tQb3NpdGlvbiIsInRvdWNoIiwiZ2V0TG9jYXRpb24iLCJzdHJpbmciLCJwYXJzZUludCIsInBhcnNlRmxvYXQiLCJ4IiwieSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQUEsRUFBRSxDQUFDQyxLQUFILENBQVM7RUFDTCxXQUFTRCxFQUFFLENBQUNFLFNBRFA7RUFHTEMsVUFBVSxFQUFFO0lBQ1JDLGVBQWUsRUFBRUosRUFBRSxDQUFDSztFQURaLENBSFA7RUFPTEMsT0FQSyxtQkFPSUMsS0FQSixFQU9XO0lBQ1osSUFBSUMsYUFBYSxHQUFHRCxLQUFLLENBQUNFLEtBQU4sQ0FBWUMsV0FBWixFQUFwQjtJQUNBLEtBQUtOLGVBQUwsQ0FBcUJPLE1BQXJCLEdBQThCLHFCQUFxQkMsUUFBUSxDQUFDQyxVQUFVLENBQUNMLGFBQWEsQ0FBQ00sQ0FBZixDQUFYLENBQTdCLEdBQTZELFFBQTdELEdBQXdFRixRQUFRLENBQUNDLFVBQVUsQ0FBQ0wsYUFBYSxDQUFDTyxDQUFmLENBQVgsQ0FBOUc7RUFDSDtBQVZJLENBQVQiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImNjLkNsYXNzKHtcbiAgICBleHRlbmRzOiBjYy5Db21wb25lbnQsXG5cbiAgICBwcm9wZXJ0aWVzOiB7XG4gICAgICAgIHBvc2l0aW9uTWVzc2FnZTogY2MuTGFiZWwsXG4gICAgfSxcblxuICAgIGNsaWNrbWUgKGV2ZW50KSB7XG4gICAgICAgIHZhciBjbGlja1Bvc2l0aW9uID0gZXZlbnQudG91Y2guZ2V0TG9jYXRpb24oKTtcbiAgICAgICAgdGhpcy5wb3NpdGlvbk1lc3NhZ2Uuc3RyaW5nID0gJ0NsaWNrZWQgYXQ6IHggPSAnICsgcGFyc2VJbnQocGFyc2VGbG9hdChjbGlja1Bvc2l0aW9uLngpKSArICcsIHkgPSAnICsgcGFyc2VJbnQocGFyc2VGbG9hdChjbGlja1Bvc2l0aW9uLnkpKTtcbiAgICB9XG59KTtcbiJdfQ==