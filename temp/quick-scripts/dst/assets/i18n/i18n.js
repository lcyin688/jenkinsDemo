
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/i18n/i18n.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '93789C/shtIL6entYsZPjee', 'i18n');
// i18n/i18n.js

"use strict";

var Polyglot = require('polyglot');

var data = cc.sys.language === 'zh' ? require('zh') : require('en'); // let polyglot = null;

var polyglot = new Polyglot({
  phrases: data,
  allowMissing: true
});
module.exports = {
  /**
   * This method allow you to switch language during runtime, language argument should be the same as your data file name
   * such as when language is 'zh', it will load your 'zh.js' data source.
   * @method init
   * @param language - the language specific data file name, such as 'zh' to load 'zh.js'
   */
  init: function init(language) {
    lang = language;
    data = language === 'zh' ? require('zh') : require('en');
    polyglot.replace(data);
  },

  /**
   * this method takes a text key as input, and return the localized string
   * Please read https://github.com/airbnb/polyglot.js for details
   * @method t
   * @return {String} localized string
   * @example
   *
   * var myText = i18n.t('MY_TEXT_KEY');
   *
   * // if your data source is defined as
   * // {"hello_name": "Hello, %{name}"}
   * // you can use the following to interpolate the text
   * var greetingText = i18n.t('hello_name', {name: 'nantas'}); // Hello, nantas
   */
  t: function t(key, opt) {
    return polyglot.t(key, opt);
  }
};

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9pMThuL2kxOG4uanMiXSwibmFtZXMiOlsiUG9seWdsb3QiLCJyZXF1aXJlIiwiZGF0YSIsImNjIiwic3lzIiwibGFuZ3VhZ2UiLCJwb2x5Z2xvdCIsInBocmFzZXMiLCJhbGxvd01pc3NpbmciLCJtb2R1bGUiLCJleHBvcnRzIiwiaW5pdCIsImxhbmciLCJyZXBsYWNlIiwidCIsImtleSIsIm9wdCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxJQUFNQSxRQUFRLEdBQUdDLE9BQU8sQ0FBQyxVQUFELENBQXhCOztBQUVBLElBQUlDLElBQUksR0FBR0MsRUFBRSxDQUFDQyxHQUFILENBQU9DLFFBQVAsS0FBb0IsSUFBcEIsR0FBMkJKLE9BQU8sQ0FBQyxJQUFELENBQWxDLEdBQTJDQSxPQUFPLENBQUMsSUFBRCxDQUE3RCxFQUNBOztBQUNBLElBQUlLLFFBQVEsR0FBRyxJQUFJTixRQUFKLENBQWE7RUFBQ08sT0FBTyxFQUFFTCxJQUFWO0VBQWdCTSxZQUFZLEVBQUU7QUFBOUIsQ0FBYixDQUFmO0FBR0FDLE1BQU0sQ0FBQ0MsT0FBUCxHQUFpQjtFQUNiO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtFQUNJQyxJQVBhLGdCQU9QTixRQVBPLEVBT0c7SUFDWk8sSUFBSSxHQUFHUCxRQUFQO0lBQ0FILElBQUksR0FBR0csUUFBUSxLQUFLLElBQWIsR0FBb0JKLE9BQU8sQ0FBQyxJQUFELENBQTNCLEdBQW9DQSxPQUFPLENBQUMsSUFBRCxDQUFsRDtJQUNBSyxRQUFRLENBQUNPLE9BQVQsQ0FBaUJYLElBQWpCO0VBQ0gsQ0FYWTs7RUFZYjtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0VBQ0lZLENBMUJhLGFBMEJWQyxHQTFCVSxFQTBCTEMsR0ExQkssRUEwQkE7SUFDVCxPQUFPVixRQUFRLENBQUNRLENBQVQsQ0FBV0MsR0FBWCxFQUFnQkMsR0FBaEIsQ0FBUDtFQUNIO0FBNUJZLENBQWpCIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBQb2x5Z2xvdCA9IHJlcXVpcmUoJ3BvbHlnbG90Jyk7XG5cbmxldCBkYXRhID0gY2Muc3lzLmxhbmd1YWdlID09PSAnemgnID8gcmVxdWlyZSgnemgnKSA6IHJlcXVpcmUoJ2VuJyk7XG4vLyBsZXQgcG9seWdsb3QgPSBudWxsO1xubGV0IHBvbHlnbG90ID0gbmV3IFBvbHlnbG90KHtwaHJhc2VzOiBkYXRhLCBhbGxvd01pc3Npbmc6IHRydWV9KTtcblxuXG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgICAvKipcbiAgICAgKiBUaGlzIG1ldGhvZCBhbGxvdyB5b3UgdG8gc3dpdGNoIGxhbmd1YWdlIGR1cmluZyBydW50aW1lLCBsYW5ndWFnZSBhcmd1bWVudCBzaG91bGQgYmUgdGhlIHNhbWUgYXMgeW91ciBkYXRhIGZpbGUgbmFtZVxuICAgICAqIHN1Y2ggYXMgd2hlbiBsYW5ndWFnZSBpcyAnemgnLCBpdCB3aWxsIGxvYWQgeW91ciAnemguanMnIGRhdGEgc291cmNlLlxuICAgICAqIEBtZXRob2QgaW5pdFxuICAgICAqIEBwYXJhbSBsYW5ndWFnZSAtIHRoZSBsYW5ndWFnZSBzcGVjaWZpYyBkYXRhIGZpbGUgbmFtZSwgc3VjaCBhcyAnemgnIHRvIGxvYWQgJ3poLmpzJ1xuICAgICAqL1xuICAgIGluaXQgKGxhbmd1YWdlKSB7XG4gICAgICAgIGxhbmcgPSBsYW5ndWFnZTtcbiAgICAgICAgZGF0YSA9IGxhbmd1YWdlID09PSAnemgnID8gcmVxdWlyZSgnemgnKSA6IHJlcXVpcmUoJ2VuJyk7XG4gICAgICAgIHBvbHlnbG90LnJlcGxhY2UoZGF0YSk7XG4gICAgfSxcbiAgICAvKipcbiAgICAgKiB0aGlzIG1ldGhvZCB0YWtlcyBhIHRleHQga2V5IGFzIGlucHV0LCBhbmQgcmV0dXJuIHRoZSBsb2NhbGl6ZWQgc3RyaW5nXG4gICAgICogUGxlYXNlIHJlYWQgaHR0cHM6Ly9naXRodWIuY29tL2FpcmJuYi9wb2x5Z2xvdC5qcyBmb3IgZGV0YWlsc1xuICAgICAqIEBtZXRob2QgdFxuICAgICAqIEByZXR1cm4ge1N0cmluZ30gbG9jYWxpemVkIHN0cmluZ1xuICAgICAqIEBleGFtcGxlXG4gICAgICpcbiAgICAgKiB2YXIgbXlUZXh0ID0gaTE4bi50KCdNWV9URVhUX0tFWScpO1xuICAgICAqXG4gICAgICogLy8gaWYgeW91ciBkYXRhIHNvdXJjZSBpcyBkZWZpbmVkIGFzXG4gICAgICogLy8ge1wiaGVsbG9fbmFtZVwiOiBcIkhlbGxvLCAle25hbWV9XCJ9XG4gICAgICogLy8geW91IGNhbiB1c2UgdGhlIGZvbGxvd2luZyB0byBpbnRlcnBvbGF0ZSB0aGUgdGV4dFxuICAgICAqIHZhciBncmVldGluZ1RleHQgPSBpMThuLnQoJ2hlbGxvX25hbWUnLCB7bmFtZTogJ25hbnRhcyd9KTsgLy8gSGVsbG8sIG5hbnRhc1xuICAgICAqL1xuICAgIHQgKGtleSwgb3B0KSB7XG4gICAgICAgIHJldHVybiBwb2x5Z2xvdC50KGtleSwgb3B0KTtcbiAgICB9XG59OyJdfQ==