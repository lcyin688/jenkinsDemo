
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/cases/07_capture_texture/capture_to_web.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '5ac74J4RCNKq6XeV8GboJXx', 'capture_to_web');
// cases/07_capture_texture/capture_to_web.js

"use strict";

cc.Class({
  "extends": require('./textureRenderUtils'),
  start: function start() {
    var _this = this;

    this.init(); // create capture

    this.createCanvas();
    var img = this.createImg();
    this.scheduleOnce(function () {
      _this.showImage(img); // download the pic as the file to your local


      _this.label.string = 'Showing the capture';
    }, 1);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9jYXNlcy8wN19jYXB0dXJlX3RleHR1cmUvY2FwdHVyZV90b193ZWIuanMiXSwibmFtZXMiOlsiY2MiLCJDbGFzcyIsInJlcXVpcmUiLCJzdGFydCIsImluaXQiLCJjcmVhdGVDYW52YXMiLCJpbWciLCJjcmVhdGVJbWciLCJzY2hlZHVsZU9uY2UiLCJzaG93SW1hZ2UiLCJsYWJlbCIsInN0cmluZyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQUEsRUFBRSxDQUFDQyxLQUFILENBQVM7RUFDTCxXQUFTQyxPQUFPLENBQUMsc0JBQUQsQ0FEWDtFQUdMQyxLQUhLLG1CQUdJO0lBQUE7O0lBQ0wsS0FBS0MsSUFBTCxHQURLLENBRUw7O0lBQ0EsS0FBS0MsWUFBTDtJQUNBLElBQUlDLEdBQUcsR0FBRyxLQUFLQyxTQUFMLEVBQVY7SUFDQSxLQUFLQyxZQUFMLENBQWtCLFlBQU07TUFDcEIsS0FBSSxDQUFDQyxTQUFMLENBQWVILEdBQWYsRUFEb0IsQ0FFcEI7OztNQUNBLEtBQUksQ0FBQ0ksS0FBTCxDQUFXQyxNQUFYLEdBQW9CLHFCQUFwQjtJQUNILENBSkQsRUFJRyxDQUpIO0VBS0g7QUFiSSxDQUFUIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJjYy5DbGFzcyh7XG4gICAgZXh0ZW5kczogcmVxdWlyZSgnLi90ZXh0dXJlUmVuZGVyVXRpbHMnKSxcblxuICAgIHN0YXJ0ICgpIHtcbiAgICAgICAgdGhpcy5pbml0KCk7XG4gICAgICAgIC8vIGNyZWF0ZSBjYXB0dXJlXG4gICAgICAgIHRoaXMuY3JlYXRlQ2FudmFzKCk7XG4gICAgICAgIHZhciBpbWcgPSB0aGlzLmNyZWF0ZUltZygpO1xuICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLnNob3dJbWFnZShpbWcpO1xuICAgICAgICAgICAgLy8gZG93bmxvYWQgdGhlIHBpYyBhcyB0aGUgZmlsZSB0byB5b3VyIGxvY2FsXG4gICAgICAgICAgICB0aGlzLmxhYmVsLnN0cmluZyA9ICdTaG93aW5nIHRoZSBjYXB0dXJlJ1xuICAgICAgICB9LCAxKTtcbiAgICB9XG59KTtcbiJdfQ==