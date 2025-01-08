
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/cases/collider/Shape/ShowCollider.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '5a6dfRzhTBMp5U3il8DJmBZ', 'ShowCollider');
// cases/collider/Shape/ShowCollider.js

"use strict";

cc.Class({
  "extends": cc.Component,
  // use this for initialization
  onLoad: function onLoad() {},
  onBtnClick: function onBtnClick(event) {
    var target = event.target;
    var shapeClassName = "cc." + target.name + "Collider";
    var nodePath = 'Canvas/root/' + target.parent.name;
    var collider = cc.find(nodePath).getComponent(shapeClassName);
    collider.enabled = !collider.enabled;
    var label = target.getChildByName('Label').getComponent(cc.Label);

    if (collider.enabled) {
      label.string = label.string.replace('Show', 'Hide');
    } else {
      label.string = label.string.replace('Hide', 'Show');
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9jYXNlcy9jb2xsaWRlci9TaGFwZS9TaG93Q29sbGlkZXIuanMiXSwibmFtZXMiOlsiY2MiLCJDbGFzcyIsIkNvbXBvbmVudCIsIm9uTG9hZCIsIm9uQnRuQ2xpY2siLCJldmVudCIsInRhcmdldCIsInNoYXBlQ2xhc3NOYW1lIiwibmFtZSIsIm5vZGVQYXRoIiwicGFyZW50IiwiY29sbGlkZXIiLCJmaW5kIiwiZ2V0Q29tcG9uZW50IiwiZW5hYmxlZCIsImxhYmVsIiwiZ2V0Q2hpbGRCeU5hbWUiLCJMYWJlbCIsInN0cmluZyIsInJlcGxhY2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUFBLEVBQUUsQ0FBQ0MsS0FBSCxDQUFTO0VBQ0wsV0FBU0QsRUFBRSxDQUFDRSxTQURQO0VBR0w7RUFDQUMsTUFBTSxFQUFFLGtCQUFZLENBRW5CLENBTkk7RUFRTEMsVUFBVSxFQUFFLG9CQUFVQyxLQUFWLEVBQWlCO0lBQ3pCLElBQUlDLE1BQU0sR0FBR0QsS0FBSyxDQUFDQyxNQUFuQjtJQUNBLElBQUlDLGNBQWMsV0FBU0QsTUFBTSxDQUFDRSxJQUFoQixhQUFsQjtJQUNBLElBQUlDLFFBQVEsR0FBRyxpQkFBaUJILE1BQU0sQ0FBQ0ksTUFBUCxDQUFjRixJQUE5QztJQUNBLElBQUlHLFFBQVEsR0FBR1gsRUFBRSxDQUFDWSxJQUFILENBQVFILFFBQVIsRUFBa0JJLFlBQWxCLENBQStCTixjQUEvQixDQUFmO0lBQ0FJLFFBQVEsQ0FBQ0csT0FBVCxHQUFtQixDQUFDSCxRQUFRLENBQUNHLE9BQTdCO0lBRUEsSUFBSUMsS0FBSyxHQUFHVCxNQUFNLENBQUNVLGNBQVAsQ0FBc0IsT0FBdEIsRUFBK0JILFlBQS9CLENBQTRDYixFQUFFLENBQUNpQixLQUEvQyxDQUFaOztJQUNBLElBQUlOLFFBQVEsQ0FBQ0csT0FBYixFQUFzQjtNQUNsQkMsS0FBSyxDQUFDRyxNQUFOLEdBQWVILEtBQUssQ0FBQ0csTUFBTixDQUFhQyxPQUFiLENBQXFCLE1BQXJCLEVBQTZCLE1BQTdCLENBQWY7SUFDSCxDQUZELE1BR0s7TUFDREosS0FBSyxDQUFDRyxNQUFOLEdBQWVILEtBQUssQ0FBQ0csTUFBTixDQUFhQyxPQUFiLENBQXFCLE1BQXJCLEVBQTZCLE1BQTdCLENBQWY7SUFDSDtFQUNKO0FBdEJJLENBQVQiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImNjLkNsYXNzKHtcbiAgICBleHRlbmRzOiBjYy5Db21wb25lbnQsXG5cbiAgICAvLyB1c2UgdGhpcyBmb3IgaW5pdGlhbGl6YXRpb25cbiAgICBvbkxvYWQ6IGZ1bmN0aW9uICgpIHtcblxuICAgIH0sXG4gICAgXG4gICAgb25CdG5DbGljazogZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICAgIHZhciB0YXJnZXQgPSBldmVudC50YXJnZXQ7XG4gICAgICAgIHZhciBzaGFwZUNsYXNzTmFtZSA9IGBjYy4ke3RhcmdldC5uYW1lfUNvbGxpZGVyYDtcbiAgICAgICAgdmFyIG5vZGVQYXRoID0gJ0NhbnZhcy9yb290LycgKyB0YXJnZXQucGFyZW50Lm5hbWU7XG4gICAgICAgIHZhciBjb2xsaWRlciA9IGNjLmZpbmQobm9kZVBhdGgpLmdldENvbXBvbmVudChzaGFwZUNsYXNzTmFtZSk7XG4gICAgICAgIGNvbGxpZGVyLmVuYWJsZWQgPSAhY29sbGlkZXIuZW5hYmxlZDtcbiAgICAgICAgXG4gICAgICAgIHZhciBsYWJlbCA9IHRhcmdldC5nZXRDaGlsZEJ5TmFtZSgnTGFiZWwnKS5nZXRDb21wb25lbnQoY2MuTGFiZWwpO1xuICAgICAgICBpZiAoY29sbGlkZXIuZW5hYmxlZCkge1xuICAgICAgICAgICAgbGFiZWwuc3RyaW5nID0gbGFiZWwuc3RyaW5nLnJlcGxhY2UoJ1Nob3cnLCAnSGlkZScpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgbGFiZWwuc3RyaW5nID0gbGFiZWwuc3RyaW5nLnJlcGxhY2UoJ0hpZGUnLCAnU2hvdycpOyAgIFxuICAgICAgICB9XG4gICAgfVxufSk7XG4iXX0=