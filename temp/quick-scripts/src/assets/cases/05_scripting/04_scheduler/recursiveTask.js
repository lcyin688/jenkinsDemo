"use strict";
cc._RF.push(module, '1bdf4Sc2zlNZI/eLikUgkJ3', 'recursiveTask');
// cases/05_scripting/04_scheduler/recursiveTask.js

"use strict";

cc.Class({
  "extends": cc.Component,
  properties: {
    label: require('LabelLocalized')
  },
  // LIFE-CYCLE CALLBACKS:
  // onLoad () {},
  run: function run() {
    this.schedule(this.task1, 1, 0, 1);
  },
  task1: function task1() {
    this.unschedule(this.task1);
    this.label.textKey = 'cases/05_scripting/04_scheduler/recursiveScheduler.fire.1';
    this.schedule(this.task2, 1, 0, 1);
  },
  task2: function task2() {
    this.label.textKey = 'cases/05_scripting/04_scheduler/recursiveScheduler.fire.2';
  }
});

cc._RF.pop();