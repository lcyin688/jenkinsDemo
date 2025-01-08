
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/cases/graphics/example/arc.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'a556aaUmwpNjJWPRek7CPtI', 'arc');
// cases/graphics/example/arc.js

"use strict";

cc.Class({
  "extends": cc.Component,
  // use this for initialization
  onLoad: function onLoad() {
    var g = this.getComponent(cc.Graphics);
    g.lineWidth = 5;
    g.fillColor.fromHEX('#ff0000');
    g.arc(0, 0, 100, Math.PI / 2, Math.PI, false);
    g.lineTo(0, 0);
    g.close();
    g.stroke();
    g.fill();
    g.fillColor.fromHEX('#00ff00');
    g.arc(-10, 10, 100, Math.PI / 2, Math.PI, true);
    g.lineTo(-10, 10);
    g.close();
    g.stroke();
    g.fill();
  } // called every frame, uncomment this function to activate update callback
  // update: function (dt) {
  // },

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9jYXNlcy9ncmFwaGljcy9leGFtcGxlL2FyYy5qcyJdLCJuYW1lcyI6WyJjYyIsIkNsYXNzIiwiQ29tcG9uZW50Iiwib25Mb2FkIiwiZyIsImdldENvbXBvbmVudCIsIkdyYXBoaWNzIiwibGluZVdpZHRoIiwiZmlsbENvbG9yIiwiZnJvbUhFWCIsImFyYyIsIk1hdGgiLCJQSSIsImxpbmVUbyIsImNsb3NlIiwic3Ryb2tlIiwiZmlsbCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQUEsRUFBRSxDQUFDQyxLQUFILENBQVM7RUFDTCxXQUFTRCxFQUFFLENBQUNFLFNBRFA7RUFHTDtFQUNBQyxNQUFNLEVBQUUsa0JBQVk7SUFDaEIsSUFBSUMsQ0FBQyxHQUFHLEtBQUtDLFlBQUwsQ0FBa0JMLEVBQUUsQ0FBQ00sUUFBckIsQ0FBUjtJQUVBRixDQUFDLENBQUNHLFNBQUYsR0FBYyxDQUFkO0lBQ0FILENBQUMsQ0FBQ0ksU0FBRixDQUFZQyxPQUFaLENBQW9CLFNBQXBCO0lBRUFMLENBQUMsQ0FBQ00sR0FBRixDQUFNLENBQU4sRUFBUyxDQUFULEVBQVksR0FBWixFQUFpQkMsSUFBSSxDQUFDQyxFQUFMLEdBQVEsQ0FBekIsRUFBNEJELElBQUksQ0FBQ0MsRUFBakMsRUFBcUMsS0FBckM7SUFDQVIsQ0FBQyxDQUFDUyxNQUFGLENBQVMsQ0FBVCxFQUFZLENBQVo7SUFDQVQsQ0FBQyxDQUFDVSxLQUFGO0lBRUFWLENBQUMsQ0FBQ1csTUFBRjtJQUNBWCxDQUFDLENBQUNZLElBQUY7SUFFQVosQ0FBQyxDQUFDSSxTQUFGLENBQVlDLE9BQVosQ0FBb0IsU0FBcEI7SUFFQUwsQ0FBQyxDQUFDTSxHQUFGLENBQU0sQ0FBQyxFQUFQLEVBQVcsRUFBWCxFQUFlLEdBQWYsRUFBb0JDLElBQUksQ0FBQ0MsRUFBTCxHQUFRLENBQTVCLEVBQStCRCxJQUFJLENBQUNDLEVBQXBDLEVBQXdDLElBQXhDO0lBQ0FSLENBQUMsQ0FBQ1MsTUFBRixDQUFTLENBQUMsRUFBVixFQUFjLEVBQWQ7SUFDQVQsQ0FBQyxDQUFDVSxLQUFGO0lBRUFWLENBQUMsQ0FBQ1csTUFBRjtJQUNBWCxDQUFDLENBQUNZLElBQUY7RUFDSCxDQXpCSSxDQTJCTDtFQUNBO0VBRUE7O0FBOUJLLENBQVQiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImNjLkNsYXNzKHtcbiAgICBleHRlbmRzOiBjYy5Db21wb25lbnQsXG5cbiAgICAvLyB1c2UgdGhpcyBmb3IgaW5pdGlhbGl6YXRpb25cbiAgICBvbkxvYWQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIGcgPSB0aGlzLmdldENvbXBvbmVudChjYy5HcmFwaGljcyk7XG5cbiAgICAgICAgZy5saW5lV2lkdGggPSA1O1xuICAgICAgICBnLmZpbGxDb2xvci5mcm9tSEVYKCcjZmYwMDAwJyk7XG4gICAgICAgIFxuICAgICAgICBnLmFyYygwLCAwLCAxMDAsIE1hdGguUEkvMiwgTWF0aC5QSSwgZmFsc2UpO1xuICAgICAgICBnLmxpbmVUbygwLCAwKTtcbiAgICAgICAgZy5jbG9zZSgpO1xuXG4gICAgICAgIGcuc3Ryb2tlKCk7XG4gICAgICAgIGcuZmlsbCgpO1xuXG4gICAgICAgIGcuZmlsbENvbG9yLmZyb21IRVgoJyMwMGZmMDAnKTtcblxuICAgICAgICBnLmFyYygtMTAsIDEwLCAxMDAsIE1hdGguUEkvMiwgTWF0aC5QSSwgdHJ1ZSk7XG4gICAgICAgIGcubGluZVRvKC0xMCwgMTApO1xuICAgICAgICBnLmNsb3NlKCk7XG5cbiAgICAgICAgZy5zdHJva2UoKTtcbiAgICAgICAgZy5maWxsKCk7XG4gICAgfSxcbiAgICBcbiAgICAvLyBjYWxsZWQgZXZlcnkgZnJhbWUsIHVuY29tbWVudCB0aGlzIGZ1bmN0aW9uIHRvIGFjdGl2YXRlIHVwZGF0ZSBjYWxsYmFja1xuICAgIC8vIHVwZGF0ZTogZnVuY3Rpb24gKGR0KSB7XG5cbiAgICAvLyB9LFxufSk7XG4iXX0=