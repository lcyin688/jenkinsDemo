
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/cases/05_scripting/04_scheduler/recursiveTask.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9jYXNlcy8wNV9zY3JpcHRpbmcvMDRfc2NoZWR1bGVyL3JlY3Vyc2l2ZVRhc2suanMiXSwibmFtZXMiOlsiY2MiLCJDbGFzcyIsIkNvbXBvbmVudCIsInByb3BlcnRpZXMiLCJsYWJlbCIsInJlcXVpcmUiLCJydW4iLCJzY2hlZHVsZSIsInRhc2sxIiwidW5zY2hlZHVsZSIsInRleHRLZXkiLCJ0YXNrMiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQUEsRUFBRSxDQUFDQyxLQUFILENBQVM7RUFDTCxXQUFTRCxFQUFFLENBQUNFLFNBRFA7RUFHTEMsVUFBVSxFQUFFO0lBQ1JDLEtBQUssRUFBRUMsT0FBTyxDQUFDLGdCQUFEO0VBRE4sQ0FIUDtFQU9MO0VBRUE7RUFFQUMsR0FYSyxpQkFXRTtJQUNILEtBQUtDLFFBQUwsQ0FBYyxLQUFLQyxLQUFuQixFQUEwQixDQUExQixFQUE2QixDQUE3QixFQUFnQyxDQUFoQztFQUNILENBYkk7RUFlTEEsS0FBSyxFQUFFLGlCQUFZO0lBQ2YsS0FBS0MsVUFBTCxDQUFnQixLQUFLRCxLQUFyQjtJQUNBLEtBQUtKLEtBQUwsQ0FBV00sT0FBWCxHQUFxQiwyREFBckI7SUFDQSxLQUFLSCxRQUFMLENBQWMsS0FBS0ksS0FBbkIsRUFBMEIsQ0FBMUIsRUFBNkIsQ0FBN0IsRUFBZ0MsQ0FBaEM7RUFDSCxDQW5CSTtFQXFCTEEsS0FBSyxFQUFFLGlCQUFZO0lBQ2YsS0FBS1AsS0FBTCxDQUFXTSxPQUFYLEdBQXFCLDJEQUFyQjtFQUNIO0FBdkJJLENBQVQiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImNjLkNsYXNzKHtcbiAgICBleHRlbmRzOiBjYy5Db21wb25lbnQsXG5cbiAgICBwcm9wZXJ0aWVzOiB7XG4gICAgICAgIGxhYmVsOiByZXF1aXJlKCdMYWJlbExvY2FsaXplZCcpXG4gICAgfSxcblxuICAgIC8vIExJRkUtQ1lDTEUgQ0FMTEJBQ0tTOlxuXG4gICAgLy8gb25Mb2FkICgpIHt9LFxuXG4gICAgcnVuICgpIHtcbiAgICAgICAgdGhpcy5zY2hlZHVsZSh0aGlzLnRhc2sxLCAxLCAwLCAxKTtcbiAgICB9LFxuXG4gICAgdGFzazE6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdGhpcy51bnNjaGVkdWxlKHRoaXMudGFzazEpO1xuICAgICAgICB0aGlzLmxhYmVsLnRleHRLZXkgPSAnY2FzZXMvMDVfc2NyaXB0aW5nLzA0X3NjaGVkdWxlci9yZWN1cnNpdmVTY2hlZHVsZXIuZmlyZS4xJztcbiAgICAgICAgdGhpcy5zY2hlZHVsZSh0aGlzLnRhc2syLCAxLCAwLCAxKTtcbiAgICB9LFxuXG4gICAgdGFzazI6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdGhpcy5sYWJlbC50ZXh0S2V5ID0gJ2Nhc2VzLzA1X3NjcmlwdGluZy8wNF9zY2hlZHVsZXIvcmVjdXJzaXZlU2NoZWR1bGVyLmZpcmUuMic7XG4gICAgfVxufSk7XG4iXX0=