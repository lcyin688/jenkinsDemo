"use strict";
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