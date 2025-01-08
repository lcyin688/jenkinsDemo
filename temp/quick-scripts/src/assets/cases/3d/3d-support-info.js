"use strict";
cc._RF.push(module, 'aa6e94UfYREzbFN94D3Gupk', '3d-support-info');
// cases/3d/3d-support-info.js

"use strict";

cc.Class({
  "extends": cc.Component,
  properties: {
    displayNode: cc.Node
  },
  // LIFE-CYCLE CALLBACKS:
  // onLoad () {},
  start: function start() {
    if (cc.sys.browserType === cc.sys.BROWSER_TYPE_IE) {
      // currently ie render color is not right
      this.displayNode.active = false;
      this.node.active = true;
    } else {
      this.displayNode.active = true;
      this.node.active = false;
    }
  } // update (dt) {},

});

cc._RF.pop();