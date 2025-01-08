
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/i18n/polyglot.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}(function (global){
"use strict";
cc._RF.push(module, '69decSgpRlE1rzEKp0RzG3V', 'polyglot');
// i18n/polyglot.js

"use strict";

//     (c) 2012-2016 Airbnb, Inc.
//
//     polyglot.js may be freely distributed under the terms of the BSD
//     license. For all licensing information, details, and documention:
//     http://airbnb.github.com/polyglot.js
//
//
// Polyglot.js is an I18n helper library written in JavaScript, made to
// work both in the browser and in Node. It provides a simple solution for
// interpolation and pluralization, based off of Airbnb's
// experience adding I18n functionality to its Backbone.js and Node apps.
//
// Polylglot is agnostic to your translation backend. It doesn't perform any
// translation; it simply gives you a way to manage translated phrases from
// your client- or server-side JavaScript application.
//
(function (root, factory) {
  if (typeof define === 'function' && define.amd) {
    define([], function () {
      return factory(root);
    });
  } else if (typeof exports === 'object') {
    module.exports = factory(root);
  } else {
    root.Polyglot = factory(root);
  }
})(typeof global !== 'undefined' ? global : void 0, function (root) {
  'use strict';

  var replace = String.prototype.replace; // ### Polyglot class constructor

  function Polyglot(options) {
    options = options || {};
    this.phrases = {};
    this.extend(options.phrases || {});
    this.currentLocale = options.locale || 'en';
    this.allowMissing = !!options.allowMissing;
    this.warn = options.warn || warn;
  } // ### Version


  Polyglot.VERSION = '1.0.0'; // ### polyglot.locale([locale])
  //
  // Get or set locale. Internally, Polyglot only uses locale for pluralization.

  Polyglot.prototype.locale = function (newLocale) {
    if (newLocale) this.currentLocale = newLocale;
    return this.currentLocale;
  }; // ### polyglot.extend(phrases)
  //
  // Use `extend` to tell Polyglot how to translate a given key.
  //
  //     polyglot.extend({
  //       "hello": "Hello",
  //       "hello_name": "Hello, %{name}"
  //     });
  //
  // The key can be any string.  Feel free to call `extend` multiple times;
  // it will override any phrases with the same key, but leave existing phrases
  // untouched.
  //
  // It is also possible to pass nested phrase objects, which get flattened
  // into an object with the nested keys concatenated using dot notation.
  //
  //     polyglot.extend({
  //       "nav": {
  //         "hello": "Hello",
  //         "hello_name": "Hello, %{name}",
  //         "sidebar": {
  //           "welcome": "Welcome"
  //         }
  //       }
  //     });
  //
  //     console.log(polyglot.phrases);
  //     // {
  //     //   'nav.hello': 'Hello',
  //     //   'nav.hello_name': 'Hello, %{name}',
  //     //   'nav.sidebar.welcome': 'Welcome'
  //     // }
  //
  // `extend` accepts an optional second argument, `prefix`, which can be used
  // to prefix every key in the phrases object with some string, using dot
  // notation.
  //
  //     polyglot.extend({
  //       "hello": "Hello",
  //       "hello_name": "Hello, %{name}"
  //     }, "nav");
  //
  //     console.log(polyglot.phrases);
  //     // {
  //     //   'nav.hello': 'Hello',
  //     //   'nav.hello_name': 'Hello, %{name}'
  //     // }
  //
  // This feature is used internally to support nested phrase objects.


  Polyglot.prototype.extend = function (morePhrases, prefix) {
    var phrase;

    for (var key in morePhrases) {
      if (morePhrases.hasOwnProperty(key)) {
        phrase = morePhrases[key];
        if (prefix) key = prefix + '.' + key;

        if (typeof phrase === 'object') {
          this.extend(phrase, key);
        } else {
          this.phrases[key] = phrase;
        }
      }
    }
  }; // ### polyglot.unset(phrases)
  // Use `unset` to selectively remove keys from a polyglot instance.
  //
  //     polyglot.unset("some_key");
  //     polyglot.unset({
  //       "hello": "Hello",
  //       "hello_name": "Hello, %{name}"
  //     });
  //
  // The unset method can take either a string (for the key), or an object hash with
  // the keys that you would like to unset.


  Polyglot.prototype.unset = function (morePhrases, prefix) {
    var phrase;

    if (typeof morePhrases === 'string') {
      delete this.phrases[morePhrases];
    } else {
      for (var key in morePhrases) {
        if (morePhrases.hasOwnProperty(key)) {
          phrase = morePhrases[key];
          if (prefix) key = prefix + '.' + key;

          if (typeof phrase === 'object') {
            this.unset(phrase, key);
          } else {
            delete this.phrases[key];
          }
        }
      }
    }
  }; // ### polyglot.clear()
  //
  // Clears all phrases. Useful for special cases, such as freeing
  // up memory if you have lots of phrases but no longer need to
  // perform any translation. Also used internally by `replace`.


  Polyglot.prototype.clear = function () {
    this.phrases = {};
  }; // ### polyglot.replace(phrases)
  //
  // Completely replace the existing phrases with a new set of phrases.
  // Normally, just use `extend` to add more phrases, but under certain
  // circumstances, you may want to make sure no old phrases are lying around.


  Polyglot.prototype.replace = function (newPhrases) {
    this.clear();
    this.extend(newPhrases);
  }; // ### polyglot.t(key, options)
  //
  // The most-used method. Provide a key, and `t` will return the
  // phrase.
  //
  //     polyglot.t("hello");
  //     => "Hello"
  //
  // The phrase value is provided first by a call to `polyglot.extend()` or
  // `polyglot.replace()`.
  //
  // Pass in an object as the second argument to perform interpolation.
  //
  //     polyglot.t("hello_name", {name: "Spike"});
  //     => "Hello, Spike"
  //
  // If you like, you can provide a default value in case the phrase is missing.
  // Use the special option key "_" to specify a default.
  //
  //     polyglot.t("i_like_to_write_in_language", {
  //       _: "I like to write in %{language}.",
  //       language: "JavaScript"
  //     });
  //     => "I like to write in JavaScript."
  //


  Polyglot.prototype.t = function (key, options) {
    var phrase, result;
    options = options == null ? {} : options; // allow number as a pluralization shortcut

    if (typeof options === 'number') {
      options = {
        smart_count: options
      };
    }

    if (typeof this.phrases[key] === 'string') {
      phrase = this.phrases[key];
    } else if (typeof options._ === 'string') {
      phrase = options._;
    } else if (this.allowMissing) {
      phrase = key;
    } else {
      this.warn('Missing translation for key: "' + key + '"');
      result = key;
    }

    if (typeof phrase === 'string') {
      options = clone(options);
      result = choosePluralForm(phrase, this.currentLocale, options.smart_count);
      result = interpolate(result, options);
    }

    return result;
  }; // ### polyglot.has(key)
  //
  // Check if polyglot has a translation for given key


  Polyglot.prototype.has = function (key) {
    return key in this.phrases;
  }; // #### Pluralization methods
  // The string that separates the different phrase possibilities.


  var delimeter = '||||'; // Mapping from pluralization group plural logic.

  var pluralTypes = {
    chinese: function chinese(n) {
      return 0;
    },
    german: function german(n) {
      return n !== 1 ? 1 : 0;
    },
    french: function french(n) {
      return n > 1 ? 1 : 0;
    },
    russian: function russian(n) {
      return n % 10 === 1 && n % 100 !== 11 ? 0 : n % 10 >= 2 && n % 10 <= 4 && (n % 100 < 10 || n % 100 >= 20) ? 1 : 2;
    },
    czech: function czech(n) {
      return n === 1 ? 0 : n >= 2 && n <= 4 ? 1 : 2;
    },
    polish: function polish(n) {
      return n === 1 ? 0 : n % 10 >= 2 && n % 10 <= 4 && (n % 100 < 10 || n % 100 >= 20) ? 1 : 2;
    },
    icelandic: function icelandic(n) {
      return n % 10 !== 1 || n % 100 === 11 ? 1 : 0;
    }
  }; // Mapping from pluralization group to individual locales.

  var pluralTypeToLanguages = {
    chinese: ['fa', 'id', 'ja', 'ko', 'lo', 'ms', 'th', 'tr', 'zh'],
    german: ['da', 'de', 'en', 'es', 'fi', 'el', 'he', 'hu', 'it', 'nl', 'no', 'pt', 'sv'],
    french: ['fr', 'tl', 'pt-br'],
    russian: ['hr', 'ru'],
    czech: ['cs', 'sk'],
    polish: ['pl'],
    icelandic: ['is']
  };

  function langToTypeMap(mapping) {
    var type,
        langs,
        l,
        ret = {};

    for (type in mapping) {
      if (mapping.hasOwnProperty(type)) {
        langs = mapping[type];

        for (l in langs) {
          ret[langs[l]] = type;
        }
      }
    }

    return ret;
  } // Trim a string.


  var trimRe = /^\s+|\s+$/g;

  function trim(str) {
    return replace.call(str, trimRe, '');
  } // Based on a phrase text that contains `n` plural forms separated
  // by `delimeter`, a `locale`, and a `count`, choose the correct
  // plural form, or none if `count` is `null`.


  function choosePluralForm(text, locale, count) {
    var ret, texts, chosenText;

    if (count != null && text) {
      texts = text.split(delimeter);
      chosenText = texts[pluralTypeIndex(locale, count)] || texts[0];
      ret = trim(chosenText);
    } else {
      ret = text;
    }

    return ret;
  }

  function pluralTypeName(locale) {
    var langToPluralType = langToTypeMap(pluralTypeToLanguages);
    return langToPluralType[locale] || langToPluralType.en;
  }

  function pluralTypeIndex(locale, count) {
    return pluralTypes[pluralTypeName(locale)](count);
  } // ### interpolate
  //
  // Does the dirty work. Creates a `RegExp` object for each
  // interpolation placeholder.


  var dollarRegex = /\$/g;
  var dollarBillsYall = '$$$$';

  function interpolate(phrase, options) {
    for (var arg in options) {
      if (arg !== '_' && options.hasOwnProperty(arg)) {
        // Ensure replacement value is escaped to prevent special $-prefixed
        // regex replace tokens. the "$$$$" is needed because each "$" needs to
        // be escaped with "$" itself, and we need two in the resulting output.
        var replacement = options[arg];

        if (typeof replacement === 'string') {
          replacement = replace.call(options[arg], dollarRegex, dollarBillsYall);
        } // We create a new `RegExp` each time instead of using a more-efficient
        // string replace so that the same argument can be replaced multiple times
        // in the same phrase.


        phrase = replace.call(phrase, new RegExp('%\\{' + arg + '\\}', 'g'), replacement);
      }
    }

    return phrase;
  } // ### warn
  //
  // Provides a warning in the console if a phrase key is missing.


  function warn(message) {
    root.console && root.console.warn && root.console.warn('WARNING: ' + message);
  } // ### clone
  //
  // Clone an object.


  function clone(source) {
    var ret = {};

    for (var prop in source) {
      ret[prop] = source[prop];
    }

    return ret;
  }

  return Polyglot;
});

cc._RF.pop();

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LElBQWIsQ0FBa0IsY0FBYyxPQUFoQyxDQUFyQztFQUNELENBNVM2RCxDQThTOUQ7RUFDQTtFQUNBOzs7RUFDQSxTQUFTLEtBQVQsQ0FBZSxNQUFmLEVBQXVCO0lBQ3JCLElBQUksR0FBRyxHQUFHLEVBQVY7O0lBQ0EsS0FBSyxJQUFJLElBQVQsSUFBaUIsTUFBakIsRUFBeUI7TUFDdkIsR0FBRyxDQUFDLElBQUQsQ0FBSCxHQUFZLE1BQU0sQ0FBQyxJQUFELENBQWxCO0lBQ0Q7O0lBQ0QsT0FBTyxHQUFQO0VBQ0Q7O0VBRUQsT0FBTyxRQUFQO0FBQ0QsQ0FwVUEsQ0FBRCIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiLy8gICAgIChjKSAyMDEyLTIwMTYgQWlyYm5iLCBJbmMuXG4vL1xuLy8gICAgIHBvbHlnbG90LmpzIG1heSBiZSBmcmVlbHkgZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIHRlcm1zIG9mIHRoZSBCU0Rcbi8vICAgICBsaWNlbnNlLiBGb3IgYWxsIGxpY2Vuc2luZyBpbmZvcm1hdGlvbiwgZGV0YWlscywgYW5kIGRvY3VtZW50aW9uOlxuLy8gICAgIGh0dHA6Ly9haXJibmIuZ2l0aHViLmNvbS9wb2x5Z2xvdC5qc1xuLy9cbi8vXG4vLyBQb2x5Z2xvdC5qcyBpcyBhbiBJMThuIGhlbHBlciBsaWJyYXJ5IHdyaXR0ZW4gaW4gSmF2YVNjcmlwdCwgbWFkZSB0b1xuLy8gd29yayBib3RoIGluIHRoZSBicm93c2VyIGFuZCBpbiBOb2RlLiBJdCBwcm92aWRlcyBhIHNpbXBsZSBzb2x1dGlvbiBmb3Jcbi8vIGludGVycG9sYXRpb24gYW5kIHBsdXJhbGl6YXRpb24sIGJhc2VkIG9mZiBvZiBBaXJibmInc1xuLy8gZXhwZXJpZW5jZSBhZGRpbmcgSTE4biBmdW5jdGlvbmFsaXR5IHRvIGl0cyBCYWNrYm9uZS5qcyBhbmQgTm9kZSBhcHBzLlxuLy9cbi8vIFBvbHlsZ2xvdCBpcyBhZ25vc3RpYyB0byB5b3VyIHRyYW5zbGF0aW9uIGJhY2tlbmQuIEl0IGRvZXNuJ3QgcGVyZm9ybSBhbnlcbi8vIHRyYW5zbGF0aW9uOyBpdCBzaW1wbHkgZ2l2ZXMgeW91IGEgd2F5IHRvIG1hbmFnZSB0cmFuc2xhdGVkIHBocmFzZXMgZnJvbVxuLy8geW91ciBjbGllbnQtIG9yIHNlcnZlci1zaWRlIEphdmFTY3JpcHQgYXBwbGljYXRpb24uXG4vL1xuXG5cbihmdW5jdGlvbihyb290LCBmYWN0b3J5KSB7XG4gIGlmICh0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQpIHtcbiAgICBkZWZpbmUoW10sIGZ1bmN0aW9uKCkge1xuICAgICAgcmV0dXJuIGZhY3Rvcnkocm9vdCk7XG4gICAgfSk7XG4gIH0gZWxzZSBpZiAodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnKSB7XG4gICAgbW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KHJvb3QpO1xuICB9IGVsc2Uge1xuICAgIHJvb3QuUG9seWdsb3QgPSBmYWN0b3J5KHJvb3QpO1xuICB9XG59KHR5cGVvZiBnbG9iYWwgIT09ICd1bmRlZmluZWQnID8gZ2xvYmFsIDogdGhpcywgZnVuY3Rpb24ocm9vdCkge1xuICAndXNlIHN0cmljdCc7XG5cbiAgdmFyIHJlcGxhY2UgPSBTdHJpbmcucHJvdG90eXBlLnJlcGxhY2U7XG5cbiAgLy8gIyMjIFBvbHlnbG90IGNsYXNzIGNvbnN0cnVjdG9yXG4gIGZ1bmN0aW9uIFBvbHlnbG90KG9wdGlvbnMpIHtcbiAgICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgICB0aGlzLnBocmFzZXMgPSB7fTtcbiAgICB0aGlzLmV4dGVuZChvcHRpb25zLnBocmFzZXMgfHwge30pO1xuICAgIHRoaXMuY3VycmVudExvY2FsZSA9IG9wdGlvbnMubG9jYWxlIHx8ICdlbic7XG4gICAgdGhpcy5hbGxvd01pc3NpbmcgPSAhIW9wdGlvbnMuYWxsb3dNaXNzaW5nO1xuICAgIHRoaXMud2FybiA9IG9wdGlvbnMud2FybiB8fCB3YXJuO1xuICB9XG5cbiAgLy8gIyMjIFZlcnNpb25cbiAgUG9seWdsb3QuVkVSU0lPTiA9ICcxLjAuMCc7XG5cbiAgLy8gIyMjIHBvbHlnbG90LmxvY2FsZShbbG9jYWxlXSlcbiAgLy9cbiAgLy8gR2V0IG9yIHNldCBsb2NhbGUuIEludGVybmFsbHksIFBvbHlnbG90IG9ubHkgdXNlcyBsb2NhbGUgZm9yIHBsdXJhbGl6YXRpb24uXG4gIFBvbHlnbG90LnByb3RvdHlwZS5sb2NhbGUgPSBmdW5jdGlvbihuZXdMb2NhbGUpIHtcbiAgICBpZiAobmV3TG9jYWxlKSB0aGlzLmN1cnJlbnRMb2NhbGUgPSBuZXdMb2NhbGU7XG4gICAgcmV0dXJuIHRoaXMuY3VycmVudExvY2FsZTtcbiAgfTtcblxuICAvLyAjIyMgcG9seWdsb3QuZXh0ZW5kKHBocmFzZXMpXG4gIC8vXG4gIC8vIFVzZSBgZXh0ZW5kYCB0byB0ZWxsIFBvbHlnbG90IGhvdyB0byB0cmFuc2xhdGUgYSBnaXZlbiBrZXkuXG4gIC8vXG4gIC8vICAgICBwb2x5Z2xvdC5leHRlbmQoe1xuICAvLyAgICAgICBcImhlbGxvXCI6IFwiSGVsbG9cIixcbiAgLy8gICAgICAgXCJoZWxsb19uYW1lXCI6IFwiSGVsbG8sICV7bmFtZX1cIlxuICAvLyAgICAgfSk7XG4gIC8vXG4gIC8vIFRoZSBrZXkgY2FuIGJlIGFueSBzdHJpbmcuICBGZWVsIGZyZWUgdG8gY2FsbCBgZXh0ZW5kYCBtdWx0aXBsZSB0aW1lcztcbiAgLy8gaXQgd2lsbCBvdmVycmlkZSBhbnkgcGhyYXNlcyB3aXRoIHRoZSBzYW1lIGtleSwgYnV0IGxlYXZlIGV4aXN0aW5nIHBocmFzZXNcbiAgLy8gdW50b3VjaGVkLlxuICAvL1xuICAvLyBJdCBpcyBhbHNvIHBvc3NpYmxlIHRvIHBhc3MgbmVzdGVkIHBocmFzZSBvYmplY3RzLCB3aGljaCBnZXQgZmxhdHRlbmVkXG4gIC8vIGludG8gYW4gb2JqZWN0IHdpdGggdGhlIG5lc3RlZCBrZXlzIGNvbmNhdGVuYXRlZCB1c2luZyBkb3Qgbm90YXRpb24uXG4gIC8vXG4gIC8vICAgICBwb2x5Z2xvdC5leHRlbmQoe1xuICAvLyAgICAgICBcIm5hdlwiOiB7XG4gIC8vICAgICAgICAgXCJoZWxsb1wiOiBcIkhlbGxvXCIsXG4gIC8vICAgICAgICAgXCJoZWxsb19uYW1lXCI6IFwiSGVsbG8sICV7bmFtZX1cIixcbiAgLy8gICAgICAgICBcInNpZGViYXJcIjoge1xuICAvLyAgICAgICAgICAgXCJ3ZWxjb21lXCI6IFwiV2VsY29tZVwiXG4gIC8vICAgICAgICAgfVxuICAvLyAgICAgICB9XG4gIC8vICAgICB9KTtcbiAgLy9cbiAgLy8gICAgIGNvbnNvbGUubG9nKHBvbHlnbG90LnBocmFzZXMpO1xuICAvLyAgICAgLy8ge1xuICAvLyAgICAgLy8gICAnbmF2LmhlbGxvJzogJ0hlbGxvJyxcbiAgLy8gICAgIC8vICAgJ25hdi5oZWxsb19uYW1lJzogJ0hlbGxvLCAle25hbWV9JyxcbiAgLy8gICAgIC8vICAgJ25hdi5zaWRlYmFyLndlbGNvbWUnOiAnV2VsY29tZSdcbiAgLy8gICAgIC8vIH1cbiAgLy9cbiAgLy8gYGV4dGVuZGAgYWNjZXB0cyBhbiBvcHRpb25hbCBzZWNvbmQgYXJndW1lbnQsIGBwcmVmaXhgLCB3aGljaCBjYW4gYmUgdXNlZFxuICAvLyB0byBwcmVmaXggZXZlcnkga2V5IGluIHRoZSBwaHJhc2VzIG9iamVjdCB3aXRoIHNvbWUgc3RyaW5nLCB1c2luZyBkb3RcbiAgLy8gbm90YXRpb24uXG4gIC8vXG4gIC8vICAgICBwb2x5Z2xvdC5leHRlbmQoe1xuICAvLyAgICAgICBcImhlbGxvXCI6IFwiSGVsbG9cIixcbiAgLy8gICAgICAgXCJoZWxsb19uYW1lXCI6IFwiSGVsbG8sICV7bmFtZX1cIlxuICAvLyAgICAgfSwgXCJuYXZcIik7XG4gIC8vXG4gIC8vICAgICBjb25zb2xlLmxvZyhwb2x5Z2xvdC5waHJhc2VzKTtcbiAgLy8gICAgIC8vIHtcbiAgLy8gICAgIC8vICAgJ25hdi5oZWxsbyc6ICdIZWxsbycsXG4gIC8vICAgICAvLyAgICduYXYuaGVsbG9fbmFtZSc6ICdIZWxsbywgJXtuYW1lfSdcbiAgLy8gICAgIC8vIH1cbiAgLy9cbiAgLy8gVGhpcyBmZWF0dXJlIGlzIHVzZWQgaW50ZXJuYWxseSB0byBzdXBwb3J0IG5lc3RlZCBwaHJhc2Ugb2JqZWN0cy5cbiAgUG9seWdsb3QucHJvdG90eXBlLmV4dGVuZCA9IGZ1bmN0aW9uKG1vcmVQaHJhc2VzLCBwcmVmaXgpIHtcbiAgICB2YXIgcGhyYXNlO1xuXG4gICAgZm9yICh2YXIga2V5IGluIG1vcmVQaHJhc2VzKSB7XG4gICAgICBpZiAobW9yZVBocmFzZXMuaGFzT3duUHJvcGVydHkoa2V5KSkge1xuICAgICAgICBwaHJhc2UgPSBtb3JlUGhyYXNlc1trZXldO1xuICAgICAgICBpZiAocHJlZml4KSBrZXkgPSBwcmVmaXggKyAnLicgKyBrZXk7XG4gICAgICAgIGlmICh0eXBlb2YgcGhyYXNlID09PSAnb2JqZWN0Jykge1xuICAgICAgICAgIHRoaXMuZXh0ZW5kKHBocmFzZSwga2V5KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB0aGlzLnBocmFzZXNba2V5XSA9IHBocmFzZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfTtcblxuICAvLyAjIyMgcG9seWdsb3QudW5zZXQocGhyYXNlcylcbiAgLy8gVXNlIGB1bnNldGAgdG8gc2VsZWN0aXZlbHkgcmVtb3ZlIGtleXMgZnJvbSBhIHBvbHlnbG90IGluc3RhbmNlLlxuICAvL1xuICAvLyAgICAgcG9seWdsb3QudW5zZXQoXCJzb21lX2tleVwiKTtcbiAgLy8gICAgIHBvbHlnbG90LnVuc2V0KHtcbiAgLy8gICAgICAgXCJoZWxsb1wiOiBcIkhlbGxvXCIsXG4gIC8vICAgICAgIFwiaGVsbG9fbmFtZVwiOiBcIkhlbGxvLCAle25hbWV9XCJcbiAgLy8gICAgIH0pO1xuICAvL1xuICAvLyBUaGUgdW5zZXQgbWV0aG9kIGNhbiB0YWtlIGVpdGhlciBhIHN0cmluZyAoZm9yIHRoZSBrZXkpLCBvciBhbiBvYmplY3QgaGFzaCB3aXRoXG4gIC8vIHRoZSBrZXlzIHRoYXQgeW91IHdvdWxkIGxpa2UgdG8gdW5zZXQuXG4gIFBvbHlnbG90LnByb3RvdHlwZS51bnNldCA9IGZ1bmN0aW9uKG1vcmVQaHJhc2VzLCBwcmVmaXgpIHtcbiAgICB2YXIgcGhyYXNlO1xuXG4gICAgaWYgKHR5cGVvZiBtb3JlUGhyYXNlcyA9PT0gJ3N0cmluZycpIHtcbiAgICAgIGRlbGV0ZSB0aGlzLnBocmFzZXNbbW9yZVBocmFzZXNdO1xuICAgIH0gZWxzZSB7XG4gICAgICBmb3IgKHZhciBrZXkgaW4gbW9yZVBocmFzZXMpIHtcbiAgICAgICAgaWYgKG1vcmVQaHJhc2VzLmhhc093blByb3BlcnR5KGtleSkpIHtcbiAgICAgICAgICBwaHJhc2UgPSBtb3JlUGhyYXNlc1trZXldO1xuICAgICAgICAgIGlmIChwcmVmaXgpIGtleSA9IHByZWZpeCArICcuJyArIGtleTtcbiAgICAgICAgICBpZiAodHlwZW9mIHBocmFzZSA9PT0gJ29iamVjdCcpIHtcbiAgICAgICAgICAgIHRoaXMudW5zZXQocGhyYXNlLCBrZXkpO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBkZWxldGUgdGhpcy5waHJhc2VzW2tleV07XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9O1xuXG4gIC8vICMjIyBwb2x5Z2xvdC5jbGVhcigpXG4gIC8vXG4gIC8vIENsZWFycyBhbGwgcGhyYXNlcy4gVXNlZnVsIGZvciBzcGVjaWFsIGNhc2VzLCBzdWNoIGFzIGZyZWVpbmdcbiAgLy8gdXAgbWVtb3J5IGlmIHlvdSBoYXZlIGxvdHMgb2YgcGhyYXNlcyBidXQgbm8gbG9uZ2VyIG5lZWQgdG9cbiAgLy8gcGVyZm9ybSBhbnkgdHJhbnNsYXRpb24uIEFsc28gdXNlZCBpbnRlcm5hbGx5IGJ5IGByZXBsYWNlYC5cbiAgUG9seWdsb3QucHJvdG90eXBlLmNsZWFyID0gZnVuY3Rpb24oKSB7XG4gICAgdGhpcy5waHJhc2VzID0ge307XG4gIH07XG5cbiAgLy8gIyMjIHBvbHlnbG90LnJlcGxhY2UocGhyYXNlcylcbiAgLy9cbiAgLy8gQ29tcGxldGVseSByZXBsYWNlIHRoZSBleGlzdGluZyBwaHJhc2VzIHdpdGggYSBuZXcgc2V0IG9mIHBocmFzZXMuXG4gIC8vIE5vcm1hbGx5LCBqdXN0IHVzZSBgZXh0ZW5kYCB0byBhZGQgbW9yZSBwaHJhc2VzLCBidXQgdW5kZXIgY2VydGFpblxuICAvLyBjaXJjdW1zdGFuY2VzLCB5b3UgbWF5IHdhbnQgdG8gbWFrZSBzdXJlIG5vIG9sZCBwaHJhc2VzIGFyZSBseWluZyBhcm91bmQuXG4gIFBvbHlnbG90LnByb3RvdHlwZS5yZXBsYWNlID0gZnVuY3Rpb24obmV3UGhyYXNlcykge1xuICAgIHRoaXMuY2xlYXIoKTtcbiAgICB0aGlzLmV4dGVuZChuZXdQaHJhc2VzKTtcbiAgfTtcblxuXG4gIC8vICMjIyBwb2x5Z2xvdC50KGtleSwgb3B0aW9ucylcbiAgLy9cbiAgLy8gVGhlIG1vc3QtdXNlZCBtZXRob2QuIFByb3ZpZGUgYSBrZXksIGFuZCBgdGAgd2lsbCByZXR1cm4gdGhlXG4gIC8vIHBocmFzZS5cbiAgLy9cbiAgLy8gICAgIHBvbHlnbG90LnQoXCJoZWxsb1wiKTtcbiAgLy8gICAgID0+IFwiSGVsbG9cIlxuICAvL1xuICAvLyBUaGUgcGhyYXNlIHZhbHVlIGlzIHByb3ZpZGVkIGZpcnN0IGJ5IGEgY2FsbCB0byBgcG9seWdsb3QuZXh0ZW5kKClgIG9yXG4gIC8vIGBwb2x5Z2xvdC5yZXBsYWNlKClgLlxuICAvL1xuICAvLyBQYXNzIGluIGFuIG9iamVjdCBhcyB0aGUgc2Vjb25kIGFyZ3VtZW50IHRvIHBlcmZvcm0gaW50ZXJwb2xhdGlvbi5cbiAgLy9cbiAgLy8gICAgIHBvbHlnbG90LnQoXCJoZWxsb19uYW1lXCIsIHtuYW1lOiBcIlNwaWtlXCJ9KTtcbiAgLy8gICAgID0+IFwiSGVsbG8sIFNwaWtlXCJcbiAgLy9cbiAgLy8gSWYgeW91IGxpa2UsIHlvdSBjYW4gcHJvdmlkZSBhIGRlZmF1bHQgdmFsdWUgaW4gY2FzZSB0aGUgcGhyYXNlIGlzIG1pc3NpbmcuXG4gIC8vIFVzZSB0aGUgc3BlY2lhbCBvcHRpb24ga2V5IFwiX1wiIHRvIHNwZWNpZnkgYSBkZWZhdWx0LlxuICAvL1xuICAvLyAgICAgcG9seWdsb3QudChcImlfbGlrZV90b193cml0ZV9pbl9sYW5ndWFnZVwiLCB7XG4gIC8vICAgICAgIF86IFwiSSBsaWtlIHRvIHdyaXRlIGluICV7bGFuZ3VhZ2V9LlwiLFxuICAvLyAgICAgICBsYW5ndWFnZTogXCJKYXZhU2NyaXB0XCJcbiAgLy8gICAgIH0pO1xuICAvLyAgICAgPT4gXCJJIGxpa2UgdG8gd3JpdGUgaW4gSmF2YVNjcmlwdC5cIlxuICAvL1xuICBQb2x5Z2xvdC5wcm90b3R5cGUudCA9IGZ1bmN0aW9uKGtleSwgb3B0aW9ucykge1xuICAgIHZhciBwaHJhc2UsIHJlc3VsdDtcbiAgICBvcHRpb25zID0gb3B0aW9ucyA9PSBudWxsID8ge30gOiBvcHRpb25zO1xuICAgIC8vIGFsbG93IG51bWJlciBhcyBhIHBsdXJhbGl6YXRpb24gc2hvcnRjdXRcbiAgICBpZiAodHlwZW9mIG9wdGlvbnMgPT09ICdudW1iZXInKSB7XG4gICAgICBvcHRpb25zID0ge3NtYXJ0X2NvdW50OiBvcHRpb25zfTtcbiAgICB9XG4gICAgaWYgKHR5cGVvZiB0aGlzLnBocmFzZXNba2V5XSA9PT0gJ3N0cmluZycpIHtcbiAgICAgIHBocmFzZSA9IHRoaXMucGhyYXNlc1trZXldO1xuICAgIH0gZWxzZSBpZiAodHlwZW9mIG9wdGlvbnMuXyA9PT0gJ3N0cmluZycpIHtcbiAgICAgIHBocmFzZSA9IG9wdGlvbnMuXztcbiAgICB9IGVsc2UgaWYgKHRoaXMuYWxsb3dNaXNzaW5nKSB7XG4gICAgICBwaHJhc2UgPSBrZXk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMud2FybignTWlzc2luZyB0cmFuc2xhdGlvbiBmb3Iga2V5OiBcIicra2V5KydcIicpO1xuICAgICAgcmVzdWx0ID0ga2V5O1xuICAgIH1cbiAgICBpZiAodHlwZW9mIHBocmFzZSA9PT0gJ3N0cmluZycpIHtcbiAgICAgIG9wdGlvbnMgPSBjbG9uZShvcHRpb25zKTtcbiAgICAgIHJlc3VsdCA9IGNob29zZVBsdXJhbEZvcm0ocGhyYXNlLCB0aGlzLmN1cnJlbnRMb2NhbGUsIG9wdGlvbnMuc21hcnRfY291bnQpO1xuICAgICAgcmVzdWx0ID0gaW50ZXJwb2xhdGUocmVzdWx0LCBvcHRpb25zKTtcbiAgICB9XG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfTtcblxuXG4gIC8vICMjIyBwb2x5Z2xvdC5oYXMoa2V5KVxuICAvL1xuICAvLyBDaGVjayBpZiBwb2x5Z2xvdCBoYXMgYSB0cmFuc2xhdGlvbiBmb3IgZ2l2ZW4ga2V5XG4gIFBvbHlnbG90LnByb3RvdHlwZS5oYXMgPSBmdW5jdGlvbihrZXkpIHtcbiAgICByZXR1cm4ga2V5IGluIHRoaXMucGhyYXNlcztcbiAgfTtcblxuXG4gIC8vICMjIyMgUGx1cmFsaXphdGlvbiBtZXRob2RzXG4gIC8vIFRoZSBzdHJpbmcgdGhhdCBzZXBhcmF0ZXMgdGhlIGRpZmZlcmVudCBwaHJhc2UgcG9zc2liaWxpdGllcy5cbiAgdmFyIGRlbGltZXRlciA9ICd8fHx8JztcblxuICAvLyBNYXBwaW5nIGZyb20gcGx1cmFsaXphdGlvbiBncm91cCBwbHVyYWwgbG9naWMuXG4gIHZhciBwbHVyYWxUeXBlcyA9IHtcbiAgICBjaGluZXNlOiAgIGZ1bmN0aW9uKG4pIHsgcmV0dXJuIDA7IH0sXG4gICAgZ2VybWFuOiAgICBmdW5jdGlvbihuKSB7IHJldHVybiBuICE9PSAxID8gMSA6IDA7IH0sXG4gICAgZnJlbmNoOiAgICBmdW5jdGlvbihuKSB7IHJldHVybiBuID4gMSA/IDEgOiAwOyB9LFxuICAgIHJ1c3NpYW46ICAgZnVuY3Rpb24obikgeyByZXR1cm4gbiAlIDEwID09PSAxICYmIG4gJSAxMDAgIT09IDExID8gMCA6IG4gJSAxMCA+PSAyICYmIG4gJSAxMCA8PSA0ICYmIChuICUgMTAwIDwgMTAgfHwgbiAlIDEwMCA+PSAyMCkgPyAxIDogMjsgfSxcbiAgICBjemVjaDogICAgIGZ1bmN0aW9uKG4pIHsgcmV0dXJuIChuID09PSAxKSA/IDAgOiAobiA+PSAyICYmIG4gPD0gNCkgPyAxIDogMjsgfSxcbiAgICBwb2xpc2g6ICAgIGZ1bmN0aW9uKG4pIHsgcmV0dXJuIChuID09PSAxID8gMCA6IG4gJSAxMCA+PSAyICYmIG4gJSAxMCA8PSA0ICYmIChuICUgMTAwIDwgMTAgfHwgbiAlIDEwMCA+PSAyMCkgPyAxIDogMik7IH0sXG4gICAgaWNlbGFuZGljOiBmdW5jdGlvbihuKSB7IHJldHVybiAobiAlIDEwICE9PSAxIHx8IG4gJSAxMDAgPT09IDExKSA/IDEgOiAwOyB9XG4gIH07XG5cbiAgLy8gTWFwcGluZyBmcm9tIHBsdXJhbGl6YXRpb24gZ3JvdXAgdG8gaW5kaXZpZHVhbCBsb2NhbGVzLlxuICB2YXIgcGx1cmFsVHlwZVRvTGFuZ3VhZ2VzID0ge1xuICAgIGNoaW5lc2U6ICAgWydmYScsICdpZCcsICdqYScsICdrbycsICdsbycsICdtcycsICd0aCcsICd0cicsICd6aCddLFxuICAgIGdlcm1hbjogICAgWydkYScsICdkZScsICdlbicsICdlcycsICdmaScsICdlbCcsICdoZScsICdodScsICdpdCcsICdubCcsICdubycsICdwdCcsICdzdiddLFxuICAgIGZyZW5jaDogICAgWydmcicsICd0bCcsICdwdC1iciddLFxuICAgIHJ1c3NpYW46ICAgWydocicsICdydSddLFxuICAgIGN6ZWNoOiAgICAgWydjcycsICdzayddLFxuICAgIHBvbGlzaDogICAgWydwbCddLFxuICAgIGljZWxhbmRpYzogWydpcyddXG4gIH07XG5cbiAgZnVuY3Rpb24gbGFuZ1RvVHlwZU1hcChtYXBwaW5nKSB7XG4gICAgdmFyIHR5cGUsIGxhbmdzLCBsLCByZXQgPSB7fTtcbiAgICBmb3IgKHR5cGUgaW4gbWFwcGluZykge1xuICAgICAgaWYgKG1hcHBpbmcuaGFzT3duUHJvcGVydHkodHlwZSkpIHtcbiAgICAgICAgbGFuZ3MgPSBtYXBwaW5nW3R5cGVdO1xuICAgICAgICBmb3IgKGwgaW4gbGFuZ3MpIHtcbiAgICAgICAgICByZXRbbGFuZ3NbbF1dID0gdHlwZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gcmV0O1xuICB9XG5cbiAgLy8gVHJpbSBhIHN0cmluZy5cbiAgdmFyIHRyaW1SZSA9IC9eXFxzK3xcXHMrJC9nO1xuICBmdW5jdGlvbiB0cmltKHN0cil7XG4gICAgcmV0dXJuIHJlcGxhY2UuY2FsbChzdHIsIHRyaW1SZSwgJycpO1xuICB9XG5cbiAgLy8gQmFzZWQgb24gYSBwaHJhc2UgdGV4dCB0aGF0IGNvbnRhaW5zIGBuYCBwbHVyYWwgZm9ybXMgc2VwYXJhdGVkXG4gIC8vIGJ5IGBkZWxpbWV0ZXJgLCBhIGBsb2NhbGVgLCBhbmQgYSBgY291bnRgLCBjaG9vc2UgdGhlIGNvcnJlY3RcbiAgLy8gcGx1cmFsIGZvcm0sIG9yIG5vbmUgaWYgYGNvdW50YCBpcyBgbnVsbGAuXG4gIGZ1bmN0aW9uIGNob29zZVBsdXJhbEZvcm0odGV4dCwgbG9jYWxlLCBjb3VudCl7XG4gICAgdmFyIHJldCwgdGV4dHMsIGNob3NlblRleHQ7XG4gICAgaWYgKGNvdW50ICE9IG51bGwgJiYgdGV4dCkge1xuICAgICAgdGV4dHMgPSB0ZXh0LnNwbGl0KGRlbGltZXRlcik7XG4gICAgICBjaG9zZW5UZXh0ID0gdGV4dHNbcGx1cmFsVHlwZUluZGV4KGxvY2FsZSwgY291bnQpXSB8fCB0ZXh0c1swXTtcbiAgICAgIHJldCA9IHRyaW0oY2hvc2VuVGV4dCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldCA9IHRleHQ7XG4gICAgfVxuICAgIHJldHVybiByZXQ7XG4gIH1cblxuICBmdW5jdGlvbiBwbHVyYWxUeXBlTmFtZShsb2NhbGUpIHtcbiAgICB2YXIgbGFuZ1RvUGx1cmFsVHlwZSA9IGxhbmdUb1R5cGVNYXAocGx1cmFsVHlwZVRvTGFuZ3VhZ2VzKTtcbiAgICByZXR1cm4gbGFuZ1RvUGx1cmFsVHlwZVtsb2NhbGVdIHx8IGxhbmdUb1BsdXJhbFR5cGUuZW47XG4gIH1cblxuICBmdW5jdGlvbiBwbHVyYWxUeXBlSW5kZXgobG9jYWxlLCBjb3VudCkge1xuICAgIHJldHVybiBwbHVyYWxUeXBlc1twbHVyYWxUeXBlTmFtZShsb2NhbGUpXShjb3VudCk7XG4gIH1cblxuICAvLyAjIyMgaW50ZXJwb2xhdGVcbiAgLy9cbiAgLy8gRG9lcyB0aGUgZGlydHkgd29yay4gQ3JlYXRlcyBhIGBSZWdFeHBgIG9iamVjdCBmb3IgZWFjaFxuICAvLyBpbnRlcnBvbGF0aW9uIHBsYWNlaG9sZGVyLlxuICB2YXIgZG9sbGFyUmVnZXggPSAvXFwkL2c7XG4gIHZhciBkb2xsYXJCaWxsc1lhbGwgPSAnJCQkJCc7XG4gIGZ1bmN0aW9uIGludGVycG9sYXRlKHBocmFzZSwgb3B0aW9ucykge1xuICAgIGZvciAodmFyIGFyZyBpbiBvcHRpb25zKSB7XG4gICAgICBpZiAoYXJnICE9PSAnXycgJiYgb3B0aW9ucy5oYXNPd25Qcm9wZXJ0eShhcmcpKSB7XG4gICAgICAgIC8vIEVuc3VyZSByZXBsYWNlbWVudCB2YWx1ZSBpcyBlc2NhcGVkIHRvIHByZXZlbnQgc3BlY2lhbCAkLXByZWZpeGVkXG4gICAgICAgIC8vIHJlZ2V4IHJlcGxhY2UgdG9rZW5zLiB0aGUgXCIkJCQkXCIgaXMgbmVlZGVkIGJlY2F1c2UgZWFjaCBcIiRcIiBuZWVkcyB0b1xuICAgICAgICAvLyBiZSBlc2NhcGVkIHdpdGggXCIkXCIgaXRzZWxmLCBhbmQgd2UgbmVlZCB0d28gaW4gdGhlIHJlc3VsdGluZyBvdXRwdXQuXG4gICAgICAgIHZhciByZXBsYWNlbWVudCA9IG9wdGlvbnNbYXJnXTtcbiAgICAgICAgaWYgKHR5cGVvZiByZXBsYWNlbWVudCA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICByZXBsYWNlbWVudCA9IHJlcGxhY2UuY2FsbChvcHRpb25zW2FyZ10sIGRvbGxhclJlZ2V4LCBkb2xsYXJCaWxsc1lhbGwpO1xuICAgICAgICB9XG4gICAgICAgIC8vIFdlIGNyZWF0ZSBhIG5ldyBgUmVnRXhwYCBlYWNoIHRpbWUgaW5zdGVhZCBvZiB1c2luZyBhIG1vcmUtZWZmaWNpZW50XG4gICAgICAgIC8vIHN0cmluZyByZXBsYWNlIHNvIHRoYXQgdGhlIHNhbWUgYXJndW1lbnQgY2FuIGJlIHJlcGxhY2VkIG11bHRpcGxlIHRpbWVzXG4gICAgICAgIC8vIGluIHRoZSBzYW1lIHBocmFzZS5cbiAgICAgICAgcGhyYXNlID0gcmVwbGFjZS5jYWxsKHBocmFzZSwgbmV3IFJlZ0V4cCgnJVxcXFx7JythcmcrJ1xcXFx9JywgJ2cnKSwgcmVwbGFjZW1lbnQpO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gcGhyYXNlO1xuICB9XG5cbiAgLy8gIyMjIHdhcm5cbiAgLy9cbiAgLy8gUHJvdmlkZXMgYSB3YXJuaW5nIGluIHRoZSBjb25zb2xlIGlmIGEgcGhyYXNlIGtleSBpcyBtaXNzaW5nLlxuICBmdW5jdGlvbiB3YXJuKG1lc3NhZ2UpIHtcbiAgICByb290LmNvbnNvbGUgJiYgcm9vdC5jb25zb2xlLndhcm4gJiYgcm9vdC5jb25zb2xlLndhcm4oJ1dBUk5JTkc6ICcgKyBtZXNzYWdlKTtcbiAgfVxuXG4gIC8vICMjIyBjbG9uZVxuICAvL1xuICAvLyBDbG9uZSBhbiBvYmplY3QuXG4gIGZ1bmN0aW9uIGNsb25lKHNvdXJjZSkge1xuICAgIHZhciByZXQgPSB7fTtcbiAgICBmb3IgKHZhciBwcm9wIGluIHNvdXJjZSkge1xuICAgICAgcmV0W3Byb3BdID0gc291cmNlW3Byb3BdO1xuICAgIH1cbiAgICByZXR1cm4gcmV0O1xuICB9XG5cbiAgcmV0dXJuIFBvbHlnbG90O1xufSkpO1xuIl19