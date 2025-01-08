
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/cases/03_gameplay/01_player_control/KeyboardInput/SimpleKeyboardMovement.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'c3f971iyCdIh6xdaO49XP0F', 'SimpleKeyboardMovement');
// cases/03_gameplay/01_player_control/KeyboardInput/SimpleKeyboardMovement.js

"use strict";

cc.Class({
  "extends": cc.Component,
  properties: {
    sheep: {
      "default": null,
      type: cc.Node
    }
  },
  // use this for initialization
  onLoad: function onLoad() {
    // set initial move direction
    this.turnRight(); //add keyboard input listener to call turnLeft and turnRight

    cc.systemEvent.on(cc.SystemEvent.EventType.KEY_DOWN, this.onKeyDown, this);
  },
  onDestroy: function onDestroy() {
    cc.systemEvent.off(cc.SystemEvent.EventType.KEY_DOWN, this.onKeyDown, this);
  },
  onKeyDown: function onKeyDown(event) {
    var macro = cc.macro;

    switch (event.keyCode) {
      case macro.KEY.a:
      case macro.KEY.left:
        console.log('turn left');
        this.turnLeft();
        break;

      case macro.KEY.d:
      case macro.KEY.right:
        console.log('turn right');
        this.turnRight();
        break;
    }
  },
  // called every frame
  update: function update(dt) {
    this.sheep.x += this.speed * dt;
  },
  turnLeft: function turnLeft() {
    this.speed = -100;
    this.sheep.scaleX = 1;
  },
  turnRight: function turnRight() {
    this.speed = 100;
    this.sheep.scaleX = -1;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9jYXNlcy8wM19nYW1lcGxheS8wMV9wbGF5ZXJfY29udHJvbC9LZXlib2FyZElucHV0L1NpbXBsZUtleWJvYXJkTW92ZW1lbnQuanMiXSwibmFtZXMiOlsiY2MiLCJDbGFzcyIsIkNvbXBvbmVudCIsInByb3BlcnRpZXMiLCJzaGVlcCIsInR5cGUiLCJOb2RlIiwib25Mb2FkIiwidHVyblJpZ2h0Iiwic3lzdGVtRXZlbnQiLCJvbiIsIlN5c3RlbUV2ZW50IiwiRXZlbnRUeXBlIiwiS0VZX0RPV04iLCJvbktleURvd24iLCJvbkRlc3Ryb3kiLCJvZmYiLCJldmVudCIsIm1hY3JvIiwia2V5Q29kZSIsIktFWSIsImEiLCJsZWZ0IiwiY29uc29sZSIsImxvZyIsInR1cm5MZWZ0IiwiZCIsInJpZ2h0IiwidXBkYXRlIiwiZHQiLCJ4Iiwic3BlZWQiLCJzY2FsZVgiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUFBLEVBQUUsQ0FBQ0MsS0FBSCxDQUFTO0VBQ0wsV0FBU0QsRUFBRSxDQUFDRSxTQURQO0VBR0xDLFVBQVUsRUFBRTtJQUNSQyxLQUFLLEVBQUU7TUFDSCxXQUFTLElBRE47TUFFSEMsSUFBSSxFQUFFTCxFQUFFLENBQUNNO0lBRk47RUFEQyxDQUhQO0VBVUw7RUFDQUMsTUFYSyxvQkFXSztJQUNOO0lBQ0EsS0FBS0MsU0FBTCxHQUZNLENBSU47O0lBQ0FSLEVBQUUsQ0FBQ1MsV0FBSCxDQUFlQyxFQUFmLENBQWtCVixFQUFFLENBQUNXLFdBQUgsQ0FBZUMsU0FBZixDQUF5QkMsUUFBM0MsRUFBcUQsS0FBS0MsU0FBMUQsRUFBcUUsSUFBckU7RUFDSCxDQWpCSTtFQW1CTEMsU0FuQkssdUJBbUJRO0lBQ1RmLEVBQUUsQ0FBQ1MsV0FBSCxDQUFlTyxHQUFmLENBQW1CaEIsRUFBRSxDQUFDVyxXQUFILENBQWVDLFNBQWYsQ0FBeUJDLFFBQTVDLEVBQXNELEtBQUtDLFNBQTNELEVBQXNFLElBQXRFO0VBQ0gsQ0FyQkk7RUF1QkxBLFNBdkJLLHFCQXVCTUcsS0F2Qk4sRUF1QmE7SUFDZCxJQUFJQyxLQUFLLEdBQUdsQixFQUFFLENBQUNrQixLQUFmOztJQUNBLFFBQU9ELEtBQUssQ0FBQ0UsT0FBYjtNQUNJLEtBQUtELEtBQUssQ0FBQ0UsR0FBTixDQUFVQyxDQUFmO01BQ0EsS0FBS0gsS0FBSyxDQUFDRSxHQUFOLENBQVVFLElBQWY7UUFDSUMsT0FBTyxDQUFDQyxHQUFSLENBQVksV0FBWjtRQUNBLEtBQUtDLFFBQUw7UUFDQTs7TUFDSixLQUFLUCxLQUFLLENBQUNFLEdBQU4sQ0FBVU0sQ0FBZjtNQUNBLEtBQUtSLEtBQUssQ0FBQ0UsR0FBTixDQUFVTyxLQUFmO1FBQ0lKLE9BQU8sQ0FBQ0MsR0FBUixDQUFZLFlBQVo7UUFDQSxLQUFLaEIsU0FBTDtRQUNBO0lBVlI7RUFZSCxDQXJDSTtFQXVDTDtFQUNBb0IsTUF4Q0ssa0JBd0NHQyxFQXhDSCxFQXdDTztJQUNSLEtBQUt6QixLQUFMLENBQVcwQixDQUFYLElBQWdCLEtBQUtDLEtBQUwsR0FBYUYsRUFBN0I7RUFDSCxDQTFDSTtFQTRDTEosUUE1Q0ssc0JBNENPO0lBQ1IsS0FBS00sS0FBTCxHQUFhLENBQUMsR0FBZDtJQUNBLEtBQUszQixLQUFMLENBQVc0QixNQUFYLEdBQW9CLENBQXBCO0VBQ0gsQ0EvQ0k7RUFpREx4QixTQWpESyx1QkFpRFE7SUFDVCxLQUFLdUIsS0FBTCxHQUFhLEdBQWI7SUFDQSxLQUFLM0IsS0FBTCxDQUFXNEIsTUFBWCxHQUFvQixDQUFDLENBQXJCO0VBQ0g7QUFwREksQ0FBVCIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiY2MuQ2xhc3Moe1xuICAgIGV4dGVuZHM6IGNjLkNvbXBvbmVudCxcblxuICAgIHByb3BlcnRpZXM6IHtcbiAgICAgICAgc2hlZXA6IHtcbiAgICAgICAgICAgIGRlZmF1bHQ6IG51bGwsXG4gICAgICAgICAgICB0eXBlOiBjYy5Ob2RlXG4gICAgICAgIH1cbiAgICB9LFxuXG4gICAgLy8gdXNlIHRoaXMgZm9yIGluaXRpYWxpemF0aW9uXG4gICAgb25Mb2FkICgpIHtcbiAgICAgICAgLy8gc2V0IGluaXRpYWwgbW92ZSBkaXJlY3Rpb25cbiAgICAgICAgdGhpcy50dXJuUmlnaHQoKTtcblxuICAgICAgICAvL2FkZCBrZXlib2FyZCBpbnB1dCBsaXN0ZW5lciB0byBjYWxsIHR1cm5MZWZ0IGFuZCB0dXJuUmlnaHRcbiAgICAgICAgY2Muc3lzdGVtRXZlbnQub24oY2MuU3lzdGVtRXZlbnQuRXZlbnRUeXBlLktFWV9ET1dOLCB0aGlzLm9uS2V5RG93biwgdGhpcyk7XG4gICAgfSxcblxuICAgIG9uRGVzdHJveSAoKSB7XG4gICAgICAgIGNjLnN5c3RlbUV2ZW50Lm9mZihjYy5TeXN0ZW1FdmVudC5FdmVudFR5cGUuS0VZX0RPV04sIHRoaXMub25LZXlEb3duLCB0aGlzKTtcbiAgICB9LFxuXG4gICAgb25LZXlEb3duIChldmVudCkge1xuICAgICAgICB2YXIgbWFjcm8gPSBjYy5tYWNybztcbiAgICAgICAgc3dpdGNoKGV2ZW50LmtleUNvZGUpIHtcbiAgICAgICAgICAgIGNhc2UgbWFjcm8uS0VZLmE6XG4gICAgICAgICAgICBjYXNlIG1hY3JvLktFWS5sZWZ0OlxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCd0dXJuIGxlZnQnKTtcbiAgICAgICAgICAgICAgICB0aGlzLnR1cm5MZWZ0KCk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIG1hY3JvLktFWS5kOlxuICAgICAgICAgICAgY2FzZSBtYWNyby5LRVkucmlnaHQ6XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ3R1cm4gcmlnaHQnKTtcbiAgICAgICAgICAgICAgICB0aGlzLnR1cm5SaWdodCgpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgfSxcblxuICAgIC8vIGNhbGxlZCBldmVyeSBmcmFtZVxuICAgIHVwZGF0ZSAoZHQpIHtcbiAgICAgICAgdGhpcy5zaGVlcC54ICs9IHRoaXMuc3BlZWQgKiBkdDtcbiAgICB9LFxuXG4gICAgdHVybkxlZnQgKCkge1xuICAgICAgICB0aGlzLnNwZWVkID0gLTEwMDtcbiAgICAgICAgdGhpcy5zaGVlcC5zY2FsZVggPSAxO1xuICAgIH0sXG5cbiAgICB0dXJuUmlnaHQgKCkge1xuICAgICAgICB0aGlzLnNwZWVkID0gMTAwO1xuICAgICAgICB0aGlzLnNoZWVwLnNjYWxlWCA9IC0xO1xuICAgIH1cbn0pO1xuIl19