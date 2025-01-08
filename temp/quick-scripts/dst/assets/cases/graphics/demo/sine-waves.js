
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/cases/graphics/demo/sine-waves.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '65147r484dHPoeDmtu3n5DT', 'sine-waves');
// cases/graphics/demo/sine-waves.js

"use strict";

// https://github.com/isuttell/sine-waves

/************************************************
 * @file  Constants
 * @author  Isaac Suttell
 ************************************************/

/**
 * For radian conversion
 *
 * @constant
 * @type    {Number}
 */
var PI180 = Math.PI / 180;
/**
 * Twice of PI
 *
 * @constant
 * @type {Number}
 */

var PI2 = Math.PI * 2;
/**
 * Half of PI
 *
 * @constant
 * @type {Number}
 */

var HALFPI = Math.PI / 2;
/************************************************
 * @file  Left to right easing functions
 * @author Isaac Suttell
 ************************************************/

/**
 * This holds all of the easing objects and can be added to by the user
 *
 * @type    {Object}
 */

var Ease = {};
/**
 * Do not apply any easing
 *
 * @param  {Number} percent   where in the line are we?
 * @param  {Number} amplitude the current strength
 *
 * @return {Number}           the new strength
 */

Ease.linear = function (percent, amplitude) {
  return amplitude;
};
/**
 * Easing function to control how string each wave is from
 * left to right
 *
 * @param  {Number} percent   where in the line are we?
 * @param  {Number} amplitude the current strength
 *
 * @return {Number}           the new strength
 */


Ease.sinein = function (percent, amplitude) {
  return amplitude * (Math.sin(percent * Math.PI - HALFPI) + 1) * 0.5;
};
/**
 * Easing function to control how string each wave is from
 * left to right
 *
 * @param  {Number} percent   where in the line are we?
 * @param  {Number} amplitude the current strength
 *
 * @return {Number}           the new strength
 */


Ease.sineout = function (percent, amplitude) {
  return amplitude * (Math.sin(percent * Math.PI + HALFPI) + 1) * 0.5;
};
/**
 * Easing function to control how string each wave is from
 * left to right
 *
 * @param  {Number} percent   where in the line are we?
 * @param  {Number} amplitude the current strength
 *
 * @return {Number}           the new strength
 */


Ease.sineinout = function (percent, amplitude) {
  return amplitude * (Math.sin(percent * PI2 - HALFPI) + 1) * 0.5;
};

var EaseEnumOptins = {};

for (var k in Ease) {
  EaseEnumOptins[k] = -1;
}

Ease.Enum = cc.Enum(EaseEnumOptins);
/************************************************
 * @file  Sine Wave functions
 * @author Isaac Suttell
 ************************************************/

/**
 * Holds the different types of waves
 *
 * @type    {Object}
 */

var Waves = {};
/**
 * Default Sine Waves
 *
 * @param    {Number}    x
 */

Waves.sine = function (x) {
  return Math.sin(x);
};
/**
 * Sign polyfill
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/sign
 *
 * @param     {Number}    x
 *
 * @return    {Number}
 */


Waves.sign = function (x) {
  x = +x; // convert to a number

  if (x === 0 || isNaN(x)) {
    return x;
  }

  return x > 0 ? 1 : -1;
};
/**
 * Square Waves
 *
 * @param    {Number}    x
 */


Waves.square = function (x) {
  return Waves.sign(Math.sin(x * PI2));
};
/**
 * Sawtooth Waves
 *
 * @param    {Number}    x
 */


Waves.sawtooth = function (x) {
  return (x - Math.floor(x + 0.5)) * 2;
};
/**
 * Triangle Waves
 *
 * @param    {Number}    x
 */


Waves.triangle = function (x) {
  return Math.abs(Waves.sawtooth(x));
};

var WavesEnumOptins = {};

for (var _k in Waves) {
  WavesEnumOptins[_k] = -1;
}

Waves.Enum = cc.Enum(WavesEnumOptins);
var Wave = cc.Class({
  name: 'Wave',
  properties: {
    timeModifier: 1,
    amplitude: 50,
    wavelength: 50,
    segmentLength: 10,
    lineWidth: 1,
    waveType: {
      "default": Waves.Enum.sine,
      type: Waves.Enum
    },
    easeType: {
      "default": Ease.Enum.sinein,
      type: Ease.Enum
    },
    strokeColor: cc.color(255, 255, 255, 100)
  }
});
var SineWaves = cc.Class({
  "extends": cc.Component,
  properties: {
    speed: 1,
    waves: {
      "default": function _default() {
        return [new Wave()];
      },
      type: [Wave]
    }
  },
  // use this for initialization
  onLoad: function onLoad() {
    this.time = 0;
    this.ctx = this.getComponent(cc.Graphics);
    this.ctx.lineCap = cc.Graphics.LineCap.BUTT;
    this.ctx.lineJoin = cc.Graphics.LineJoin.ROUND;
    var waves = this.waves;

    for (var i = 0, l = waves.length; i < l; i++) {
      waves[i].waveFn = Waves[Waves.Enum[waves[i].waveType]].bind(Waves);
      waves[i].easeFn = Ease[Ease.Enum[waves[i].easeType]].bind(Ease);
    }
  },
  // called every frame, uncomment this function to activate update callback
  update: function update(dt) {
    this.ctx.clear();
    this.yAxis = cc.visibleRect.height / 2;
    this.width = cc.visibleRect.width;
    this.waveWidth = this.width * 0.95;
    this.waveLeft = this.width * 0.25;
    this.time += dt; // Draw each line

    var waves = this.waves;

    for (var i = 0, l = waves.length; i < l; i++) {
      var timeModifier = this.waves[i].timeModifier || 1;
      this.drawWave(this.time * timeModifier, waves[i]);
    }
  },

  /**
   * Draws one line on the canvas
   *
   * @param  {Number} time    current internal clock time
   * @param  {Object} options wave options
   */
  drawWave: function drawWave(time, options) {
    // Styles
    this.ctx.lineWidth = options.lineWidth;
    this.ctx.strokeColor = options.strokeColor; // Starting Line

    this.ctx.moveTo(0, this.yAxis);
    this.ctx.lineTo(this.waveLeft, this.yAxis);

    for (var i = 0; i < this.waveWidth; i += options.segmentLength) {
      // Calculate where the next point is
      var point = this.getPoint(time, i, options); // Draw to it

      this.ctx.lineTo(point.x, point.y);
    } // Ending Line


    this.ctx.lineTo(this.width, this.yAxis); // Stroke it

    this.ctx.stroke();
  },

  /**
   * Calculate the x, y coordinates of a point in a sine wave
   *
   * @param  {Number} time     Internal time index
   * @param  {Number} position Pixels x poistion
   * @param  {Object} options  Wave options
   *
   * @return {Object}          {x, y}
   */
  getPoint: function getPoint(time, position, options) {
    var x = time * this.speed + (-this.yAxis + position) / options.wavelength;
    var y = options.waveFn(x); // Left and Right Sine Easing

    var amplitude = options.easeFn(position / this.waveWidth, options.amplitude);
    x = position + this.waveLeft;
    y = amplitude * y + this.yAxis;
    return {
      x: x,
      y: y
    };
  }
});
module.exports = SineWaves;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9jYXNlcy9ncmFwaGljcy9kZW1vL3NpbmUtd2F2ZXMuanMiXSwibmFtZXMiOlsiUEkxODAiLCJNYXRoIiwiUEkiLCJQSTIiLCJIQUxGUEkiLCJFYXNlIiwibGluZWFyIiwicGVyY2VudCIsImFtcGxpdHVkZSIsInNpbmVpbiIsInNpbiIsInNpbmVvdXQiLCJzaW5laW5vdXQiLCJFYXNlRW51bU9wdGlucyIsImsiLCJFbnVtIiwiY2MiLCJXYXZlcyIsInNpbmUiLCJ4Iiwic2lnbiIsImlzTmFOIiwic3F1YXJlIiwic2F3dG9vdGgiLCJmbG9vciIsInRyaWFuZ2xlIiwiYWJzIiwiV2F2ZXNFbnVtT3B0aW5zIiwiV2F2ZSIsIkNsYXNzIiwibmFtZSIsInByb3BlcnRpZXMiLCJ0aW1lTW9kaWZpZXIiLCJ3YXZlbGVuZ3RoIiwic2VnbWVudExlbmd0aCIsImxpbmVXaWR0aCIsIndhdmVUeXBlIiwidHlwZSIsImVhc2VUeXBlIiwic3Ryb2tlQ29sb3IiLCJjb2xvciIsIlNpbmVXYXZlcyIsIkNvbXBvbmVudCIsInNwZWVkIiwid2F2ZXMiLCJvbkxvYWQiLCJ0aW1lIiwiY3R4IiwiZ2V0Q29tcG9uZW50IiwiR3JhcGhpY3MiLCJsaW5lQ2FwIiwiTGluZUNhcCIsIkJVVFQiLCJsaW5lSm9pbiIsIkxpbmVKb2luIiwiUk9VTkQiLCJpIiwibCIsImxlbmd0aCIsIndhdmVGbiIsImJpbmQiLCJlYXNlRm4iLCJ1cGRhdGUiLCJkdCIsImNsZWFyIiwieUF4aXMiLCJ2aXNpYmxlUmVjdCIsImhlaWdodCIsIndpZHRoIiwid2F2ZVdpZHRoIiwid2F2ZUxlZnQiLCJkcmF3V2F2ZSIsIm9wdGlvbnMiLCJtb3ZlVG8iLCJsaW5lVG8iLCJwb2ludCIsImdldFBvaW50IiwieSIsInN0cm9rZSIsInBvc2l0aW9uIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FB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YixHQUFzQixDQUFDLENBQUMsS0FBS3NCLEtBQU4sR0FBY2MsUUFBZixJQUEyQlAsT0FBTyxDQUFDdkMsVUFBakU7SUFDQSxJQUFJNEMsQ0FBQyxHQUFHTCxPQUFPLENBQUNiLE1BQVIsQ0FBZXhDLENBQWYsQ0FBUixDQUZ3QyxDQUl4Qzs7SUFDQSxJQUFJWCxTQUFTLEdBQUdnRSxPQUFPLENBQUNYLE1BQVIsQ0FBZWtCLFFBQVEsR0FBRyxLQUFLVixTQUEvQixFQUEwQ0csT0FBTyxDQUFDaEUsU0FBbEQsQ0FBaEI7SUFFQVcsQ0FBQyxHQUFHNEQsUUFBUSxHQUFHLEtBQUtULFFBQXBCO0lBQ0FPLENBQUMsR0FBR3JFLFNBQVMsR0FBR3FFLENBQVosR0FBZ0IsS0FBS1osS0FBekI7SUFFQSxPQUFPO01BQ0g5QyxDQUFDLEVBQUVBLENBREE7TUFFSDBELENBQUMsRUFBRUE7SUFGQSxDQUFQO0VBSUg7QUF0R29CLENBQVQsQ0FBaEI7QUF5R0FHLE1BQU0sQ0FBQ0MsT0FBUCxHQUFpQnhDLFNBQWpCIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyIvLyBodHRwczovL2dpdGh1Yi5jb20vaXN1dHRlbGwvc2luZS13YXZlc1xuXG4vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXG4gKiBAZmlsZSAgQ29uc3RhbnRzXG4gKiBAYXV0aG9yICBJc2FhYyBTdXR0ZWxsXG4gKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuIFxuLyoqXG4gKiBGb3IgcmFkaWFuIGNvbnZlcnNpb25cbiAqXG4gKiBAY29uc3RhbnRcbiAqIEB0eXBlICAgIHtOdW1iZXJ9XG4gKi9cbnZhciBQSTE4MCA9IE1hdGguUEkgLyAxODA7XG5cbi8qKlxuICogVHdpY2Ugb2YgUElcbiAqXG4gKiBAY29uc3RhbnRcbiAqIEB0eXBlIHtOdW1iZXJ9XG4gKi9cbnZhciBQSTIgPSBNYXRoLlBJICogMjtcblxuLyoqXG4gKiBIYWxmIG9mIFBJXG4gKlxuICogQGNvbnN0YW50XG4gKiBAdHlwZSB7TnVtYmVyfVxuICovXG52YXIgSEFMRlBJID0gTWF0aC5QSSAvIDI7XG5cbi8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcbiAqIEBmaWxlICBMZWZ0IHRvIHJpZ2h0IGVhc2luZyBmdW5jdGlvbnNcbiAqIEBhdXRob3IgSXNhYWMgU3V0dGVsbFxuICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cblxuLyoqXG4gKiBUaGlzIGhvbGRzIGFsbCBvZiB0aGUgZWFzaW5nIG9iamVjdHMgYW5kIGNhbiBiZSBhZGRlZCB0byBieSB0aGUgdXNlclxuICpcbiAqIEB0eXBlICAgIHtPYmplY3R9XG4gKi9cbnZhciBFYXNlID0ge307XG5cbi8qKlxuICogRG8gbm90IGFwcGx5IGFueSBlYXNpbmdcbiAqXG4gKiBAcGFyYW0gIHtOdW1iZXJ9IHBlcmNlbnQgICB3aGVyZSBpbiB0aGUgbGluZSBhcmUgd2U/XG4gKiBAcGFyYW0gIHtOdW1iZXJ9IGFtcGxpdHVkZSB0aGUgY3VycmVudCBzdHJlbmd0aFxuICpcbiAqIEByZXR1cm4ge051bWJlcn0gICAgICAgICAgIHRoZSBuZXcgc3RyZW5ndGhcbiAqL1xuRWFzZS5saW5lYXIgPSBmdW5jdGlvbihwZXJjZW50LCBhbXBsaXR1ZGUpIHtcbiAgcmV0dXJuIGFtcGxpdHVkZTtcbn07XG5cbi8qKlxuICogRWFzaW5nIGZ1bmN0aW9uIHRvIGNvbnRyb2wgaG93IHN0cmluZyBlYWNoIHdhdmUgaXMgZnJvbVxuICogbGVmdCB0byByaWdodFxuICpcbiAqIEBwYXJhbSAge051bWJlcn0gcGVyY2VudCAgIHdoZXJlIGluIHRoZSBsaW5lIGFyZSB3ZT9cbiAqIEBwYXJhbSAge051bWJlcn0gYW1wbGl0dWRlIHRoZSBjdXJyZW50IHN0cmVuZ3RoXG4gKlxuICogQHJldHVybiB7TnVtYmVyfSAgICAgICAgICAgdGhlIG5ldyBzdHJlbmd0aFxuICovXG5FYXNlLnNpbmVpbiA9IGZ1bmN0aW9uKHBlcmNlbnQsIGFtcGxpdHVkZSkge1xuICByZXR1cm4gYW1wbGl0dWRlICogKE1hdGguc2luKHBlcmNlbnQgKiBNYXRoLlBJIC0gSEFMRlBJKSArIDEpICogMC41O1xufTtcblxuLyoqXG4gKiBFYXNpbmcgZnVuY3Rpb24gdG8gY29udHJvbCBob3cgc3RyaW5nIGVhY2ggd2F2ZSBpcyBmcm9tXG4gKiBsZWZ0IHRvIHJpZ2h0XG4gKlxuICogQHBhcmFtICB7TnVtYmVyfSBwZXJjZW50ICAgd2hlcmUgaW4gdGhlIGxpbmUgYXJlIHdlP1xuICogQHBhcmFtICB7TnVtYmVyfSBhbXBsaXR1ZGUgdGhlIGN1cnJlbnQgc3RyZW5ndGhcbiAqXG4gKiBAcmV0dXJuIHtOdW1iZXJ9ICAgICAgICAgICB0aGUgbmV3IHN0cmVuZ3RoXG4gKi9cbkVhc2Uuc2luZW91dCA9IGZ1bmN0aW9uKHBlcmNlbnQsIGFtcGxpdHVkZSkge1xuICByZXR1cm4gYW1wbGl0dWRlICogKE1hdGguc2luKHBlcmNlbnQgKiBNYXRoLlBJICsgSEFMRlBJKSArIDEpICogMC41O1xufTtcblxuLyoqXG4gKiBFYXNpbmcgZnVuY3Rpb24gdG8gY29udHJvbCBob3cgc3RyaW5nIGVhY2ggd2F2ZSBpcyBmcm9tXG4gKiBsZWZ0IHRvIHJpZ2h0XG4gKlxuICogQHBhcmFtICB7TnVtYmVyfSBwZXJjZW50ICAgd2hlcmUgaW4gdGhlIGxpbmUgYXJlIHdlP1xuICogQHBhcmFtICB7TnVtYmVyfSBhbXBsaXR1ZGUgdGhlIGN1cnJlbnQgc3RyZW5ndGhcbiAqXG4gKiBAcmV0dXJuIHtOdW1iZXJ9ICAgICAgICAgICB0aGUgbmV3IHN0cmVuZ3RoXG4gKi9cbkVhc2Uuc2luZWlub3V0ID0gZnVuY3Rpb24ocGVyY2VudCwgYW1wbGl0dWRlKSB7XG4gIHJldHVybiBhbXBsaXR1ZGUgKiAoTWF0aC5zaW4ocGVyY2VudCAqIFBJMiAtIEhBTEZQSSkgKyAxKSAqIDAuNTtcbn07XG5cbmxldCBFYXNlRW51bU9wdGlucyA9IHt9O1xuZm9yIChsZXQgayBpbiBFYXNlKSB7XG4gICAgRWFzZUVudW1PcHRpbnNba10gPSAtMTtcbn1cbkVhc2UuRW51bSA9IGNjLkVudW0oRWFzZUVudW1PcHRpbnMpO1xuXG4vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXG4gKiBAZmlsZSAgU2luZSBXYXZlIGZ1bmN0aW9uc1xuICogQGF1dGhvciBJc2FhYyBTdXR0ZWxsXG4gKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuXG4vKipcbiAqIEhvbGRzIHRoZSBkaWZmZXJlbnQgdHlwZXMgb2Ygd2F2ZXNcbiAqXG4gKiBAdHlwZSAgICB7T2JqZWN0fVxuICovXG52YXIgV2F2ZXMgPSB7fTtcblxuLyoqXG4gKiBEZWZhdWx0IFNpbmUgV2F2ZXNcbiAqXG4gKiBAcGFyYW0gICAge051bWJlcn0gICAgeFxuICovXG5XYXZlcy5zaW5lID0gZnVuY3Rpb24oeCkge1xuICByZXR1cm4gTWF0aC5zaW4oeCk7XG59O1xuXG5cbi8qKlxuICogU2lnbiBwb2x5ZmlsbFxuICogaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvSmF2YVNjcmlwdC9SZWZlcmVuY2UvR2xvYmFsX09iamVjdHMvTWF0aC9zaWduXG4gKlxuICogQHBhcmFtICAgICB7TnVtYmVyfSAgICB4XG4gKlxuICogQHJldHVybiAgICB7TnVtYmVyfVxuICovXG5XYXZlcy5zaWduID0gZnVuY3Rpb24oeCkge1xuICB4ID0gK3g7IC8vIGNvbnZlcnQgdG8gYSBudW1iZXJcbiAgaWYgKHggPT09IDAgfHwgaXNOYU4oeCkpIHtcbiAgICByZXR1cm4geDtcbiAgfVxuICByZXR1cm4geCA+IDAgPyAxIDogLTE7XG59O1xuXG4vKipcbiAqIFNxdWFyZSBXYXZlc1xuICpcbiAqIEBwYXJhbSAgICB7TnVtYmVyfSAgICB4XG4gKi9cbldhdmVzLnNxdWFyZSA9IGZ1bmN0aW9uKHgpIHtcbiAgcmV0dXJuIFdhdmVzLnNpZ24oTWF0aC5zaW4oeCAqIFBJMikpO1xufTtcblxuLyoqXG4gKiBTYXd0b290aCBXYXZlc1xuICpcbiAqIEBwYXJhbSAgICB7TnVtYmVyfSAgICB4XG4gKi9cbldhdmVzLnNhd3Rvb3RoID0gZnVuY3Rpb24oeCkge1xuICByZXR1cm4gKHggLSBNYXRoLmZsb29yKHggKyAwLjUpKSAqIDI7XG59O1xuXG4vKipcbiAqIFRyaWFuZ2xlIFdhdmVzXG4gKlxuICogQHBhcmFtICAgIHtOdW1iZXJ9ICAgIHhcbiAqL1xuV2F2ZXMudHJpYW5nbGUgPSBmdW5jdGlvbih4KSB7XG4gIHJldHVybiBNYXRoLmFicyhXYXZlcy5zYXd0b290aCh4KSk7XG59O1xuXG5sZXQgV2F2ZXNFbnVtT3B0aW5zID0ge307XG5mb3IgKGxldCBrIGluIFdhdmVzKSB7XG4gICAgV2F2ZXNFbnVtT3B0aW5zW2tdID0gLTE7XG59XG5XYXZlcy5FbnVtID0gY2MuRW51bShXYXZlc0VudW1PcHRpbnMpO1xuXG5cbmxldCBXYXZlID0gY2MuQ2xhc3Moe1xuICAgIG5hbWU6ICdXYXZlJyxcblxuICAgIHByb3BlcnRpZXM6IHtcbiAgICAgICAgdGltZU1vZGlmaWVyOiAxLFxuICAgICAgICBhbXBsaXR1ZGU6IDUwLFxuICAgICAgICB3YXZlbGVuZ3RoOiA1MCxcbiAgICAgICAgc2VnbWVudExlbmd0aDogMTAsXG4gICAgICAgIGxpbmVXaWR0aDogMSxcbiAgICAgICAgd2F2ZVR5cGU6IHtcbiAgICAgICAgICAgIGRlZmF1bHQ6IFdhdmVzLkVudW0uc2luZSxcbiAgICAgICAgICAgIHR5cGU6IFdhdmVzLkVudW1cbiAgICAgICAgfSxcbiAgICAgICAgZWFzZVR5cGU6IHtcbiAgICAgICAgICAgIGRlZmF1bHQ6IEVhc2UuRW51bS5zaW5laW4sXG4gICAgICAgICAgICB0eXBlOiBFYXNlLkVudW1cbiAgICAgICAgfSxcbiAgICAgICAgc3Ryb2tlQ29sb3I6IGNjLmNvbG9yKDI1NSwgMjU1LCAyNTUsIDEwMClcbiAgICB9XG59KTtcblxubGV0IFNpbmVXYXZlcyA9IGNjLkNsYXNzKHtcbiAgICBleHRlbmRzOiBjYy5Db21wb25lbnQsXG5cbiAgICBwcm9wZXJ0aWVzOiB7XG4gICAgICAgIHNwZWVkOiAxLFxuXG4gICAgICAgIHdhdmVzOiB7XG4gICAgICAgICAgICBkZWZhdWx0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIFtuZXcgV2F2ZSgpXTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB0eXBlOiBbV2F2ZV1cbiAgICAgICAgfVxuICAgIH0sXG5cbiAgICAvLyB1c2UgdGhpcyBmb3IgaW5pdGlhbGl6YXRpb25cbiAgICBvbkxvYWQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdGhpcy50aW1lID0gMDtcblxuICAgICAgICB0aGlzLmN0eCA9IHRoaXMuZ2V0Q29tcG9uZW50KGNjLkdyYXBoaWNzKTtcbiAgICAgICAgdGhpcy5jdHgubGluZUNhcCA9IGNjLkdyYXBoaWNzLkxpbmVDYXAuQlVUVDtcbiAgICAgICAgdGhpcy5jdHgubGluZUpvaW4gPSBjYy5HcmFwaGljcy5MaW5lSm9pbi5ST1VORDtcblxuICAgICAgICBsZXQgd2F2ZXMgPSB0aGlzLndhdmVzO1xuICAgICAgICBmb3IgKGxldCBpID0gMCwgbCA9IHdhdmVzLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuICAgICAgICAgICAgd2F2ZXNbaV0ud2F2ZUZuID0gV2F2ZXNbV2F2ZXMuRW51bVt3YXZlc1tpXS53YXZlVHlwZV1dLmJpbmQoV2F2ZXMpO1xuICAgICAgICAgICAgd2F2ZXNbaV0uZWFzZUZuID0gRWFzZVtFYXNlLkVudW1bd2F2ZXNbaV0uZWFzZVR5cGVdXS5iaW5kKEVhc2UpO1xuICAgICAgICB9XG4gICAgfSxcblxuICAgIC8vIGNhbGxlZCBldmVyeSBmcmFtZSwgdW5jb21tZW50IHRoaXMgZnVuY3Rpb24gdG8gYWN0aXZhdGUgdXBkYXRlIGNhbGxiYWNrXG4gICAgdXBkYXRlOiBmdW5jdGlvbiAoZHQpIHtcbiAgICAgICAgdGhpcy5jdHguY2xlYXIoKTtcblxuICAgICAgICB0aGlzLnlBeGlzID0gY2MudmlzaWJsZVJlY3QuaGVpZ2h0LzI7XG4gICAgICAgIHRoaXMud2lkdGggPSBjYy52aXNpYmxlUmVjdC53aWR0aDtcblxuICAgICAgICB0aGlzLndhdmVXaWR0aCA9IHRoaXMud2lkdGggKiAwLjk1O1xuICAgICAgICB0aGlzLndhdmVMZWZ0ID0gdGhpcy53aWR0aCAqIDAuMjU7XG5cbiAgICAgICAgdGhpcy50aW1lICs9IGR0O1xuXG4gICAgICAgIC8vIERyYXcgZWFjaCBsaW5lXG4gICAgICAgIGxldCB3YXZlcyA9IHRoaXMud2F2ZXM7XG4gICAgICAgIGZvciAobGV0IGkgPSAwLCBsID0gd2F2ZXMubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG4gICAgICAgICAgICB2YXIgdGltZU1vZGlmaWVyID0gdGhpcy53YXZlc1tpXS50aW1lTW9kaWZpZXIgfHwgMTtcbiAgICAgICAgICAgIHRoaXMuZHJhd1dhdmUodGhpcy50aW1lICogdGltZU1vZGlmaWVyLCB3YXZlc1tpXSk7XG4gICAgICAgIH1cbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogRHJhd3Mgb25lIGxpbmUgb24gdGhlIGNhbnZhc1xuICAgICAqXG4gICAgICogQHBhcmFtICB7TnVtYmVyfSB0aW1lICAgIGN1cnJlbnQgaW50ZXJuYWwgY2xvY2sgdGltZVxuICAgICAqIEBwYXJhbSAge09iamVjdH0gb3B0aW9ucyB3YXZlIG9wdGlvbnNcbiAgICAgKi9cbiAgICBkcmF3V2F2ZTogZnVuY3Rpb24gKHRpbWUsIG9wdGlvbnMpIHtcbiAgICAgICAgLy8gU3R5bGVzXG4gICAgICAgIHRoaXMuY3R4LmxpbmVXaWR0aCA9IG9wdGlvbnMubGluZVdpZHRoO1xuICAgICAgICB0aGlzLmN0eC5zdHJva2VDb2xvciA9IG9wdGlvbnMuc3Ryb2tlQ29sb3I7XG5cbiAgICAgICAgLy8gU3RhcnRpbmcgTGluZVxuICAgICAgICB0aGlzLmN0eC5tb3ZlVG8oMCwgdGhpcy55QXhpcyk7XG4gICAgICAgIHRoaXMuY3R4LmxpbmVUbyh0aGlzLndhdmVMZWZ0LCB0aGlzLnlBeGlzKTtcblxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMud2F2ZVdpZHRoOyBpICs9IG9wdGlvbnMuc2VnbWVudExlbmd0aCkge1xuICAgICAgICAgICAgLy8gQ2FsY3VsYXRlIHdoZXJlIHRoZSBuZXh0IHBvaW50IGlzXG4gICAgICAgICAgICBsZXQgcG9pbnQgPSB0aGlzLmdldFBvaW50KHRpbWUsIGksIG9wdGlvbnMpO1xuXG4gICAgICAgICAgICAvLyBEcmF3IHRvIGl0XG4gICAgICAgICAgICB0aGlzLmN0eC5saW5lVG8ocG9pbnQueCwgcG9pbnQueSk7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBFbmRpbmcgTGluZVxuICAgICAgICB0aGlzLmN0eC5saW5lVG8odGhpcy53aWR0aCwgdGhpcy55QXhpcyk7XG5cbiAgICAgICAgLy8gU3Ryb2tlIGl0XG4gICAgICAgIHRoaXMuY3R4LnN0cm9rZSgpO1xuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBDYWxjdWxhdGUgdGhlIHgsIHkgY29vcmRpbmF0ZXMgb2YgYSBwb2ludCBpbiBhIHNpbmUgd2F2ZVxuICAgICAqXG4gICAgICogQHBhcmFtICB7TnVtYmVyfSB0aW1lICAgICBJbnRlcm5hbCB0aW1lIGluZGV4XG4gICAgICogQHBhcmFtICB7TnVtYmVyfSBwb3NpdGlvbiBQaXhlbHMgeCBwb2lzdGlvblxuICAgICAqIEBwYXJhbSAge09iamVjdH0gb3B0aW9ucyAgV2F2ZSBvcHRpb25zXG4gICAgICpcbiAgICAgKiBAcmV0dXJuIHtPYmplY3R9ICAgICAgICAgIHt4LCB5fVxuICAgICAqL1xuICAgIGdldFBvaW50OiBmdW5jdGlvbih0aW1lLCBwb3NpdGlvbiwgb3B0aW9ucykge1xuICAgICAgICB2YXIgeCA9ICh0aW1lICogdGhpcy5zcGVlZCkgKyAoLXRoaXMueUF4aXMgKyBwb3NpdGlvbikgLyBvcHRpb25zLndhdmVsZW5ndGg7XG4gICAgICAgIHZhciB5ID0gb3B0aW9ucy53YXZlRm4oeCk7XG5cbiAgICAgICAgLy8gTGVmdCBhbmQgUmlnaHQgU2luZSBFYXNpbmdcbiAgICAgICAgdmFyIGFtcGxpdHVkZSA9IG9wdGlvbnMuZWFzZUZuKHBvc2l0aW9uIC8gdGhpcy53YXZlV2lkdGgsIG9wdGlvbnMuYW1wbGl0dWRlKTtcblxuICAgICAgICB4ID0gcG9zaXRpb24gKyB0aGlzLndhdmVMZWZ0O1xuICAgICAgICB5ID0gYW1wbGl0dWRlICogeSArIHRoaXMueUF4aXM7XG5cbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHg6IHgsXG4gICAgICAgICAgICB5OiB5XG4gICAgICAgIH07XG4gICAgfVxufSk7XG5cbm1vZHVsZS5leHBvcnRzID0gU2luZVdhdmVzO1xuIl19