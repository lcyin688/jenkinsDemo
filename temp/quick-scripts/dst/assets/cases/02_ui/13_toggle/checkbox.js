
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/cases/02_ui/13_toggle/checkbox.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'ca244RHY8xLbprnCDD9dH+B', 'checkbox');
// cases/02_ui/13_toggle/checkbox.js

"use strict";

cc.Class({
  "extends": cc.Component,
  properties: {
    checkbox: {
      "default": null,
      type: cc.Toggle
    },
    checkBoxEventString: {
      "default": null,
      type: cc.Label
    },
    radioButtonEventString: {
      "default": null,
      type: cc.Label
    },
    radioButton: {
      "default": [],
      type: cc.Toggle
    }
  },
  // use this for initialization
  onLoad: function onLoad() {
    if (this.checkbox) {
      this._updateToggleEventString("CheckBox", this.checkBoxEventString, this.checkbox);
    }
  },
  _updateToggleEventString: function _updateToggleEventString(title, label, toggle) {
    if (toggle.isChecked) {
      label.string = title + " is checked.";
    } else {
      label.string = title + " is unchecked.";
    }
  },
  radioButtonClicked: function radioButtonClicked(toggle) {
    var index = this.radioButton.indexOf(toggle);
    var title = "RadioButton";

    switch (index) {
      case 0:
        title += "1";
        break;

      case 1:
        title += "2";
        break;

      case 2:
        title += "3";
        break;

      default:
        break;
    }

    this._updateToggleEventString(title, this.radioButtonEventString, toggle);
  },
  checkBoxClicked: function checkBoxClicked(toggle) {
    this._updateToggleEventString("CheckBox", this.checkBoxEventString, toggle);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9jYXNlcy8wMl91aS8xM190b2dnbGUvY2hlY2tib3guanMiXSwibmFtZXMiOlsiY2MiLCJDbGFzcyIsIkNvbXBvbmVudCIsInByb3BlcnRpZXMiLCJjaGVja2JveCIsInR5cGUiLCJUb2dnbGUiLCJjaGVja0JveEV2ZW50U3RyaW5nIiwiTGFiZWwiLCJyYWRpb0J1dHRvbkV2ZW50U3RyaW5nIiwicmFkaW9CdXR0b24iLCJvbkxvYWQiLCJfdXBkYXRlVG9nZ2xlRXZlbnRTdHJpbmciLCJ0aXRsZSIsImxhYmVsIiwidG9nZ2xlIiwiaXNDaGVja2VkIiwic3RyaW5nIiwicmFkaW9CdXR0b25DbGlja2VkIiwiaW5kZXgiLCJpbmRleE9mIiwiY2hlY2tCb3hDbGlja2VkIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBQSxFQUFFLENBQUNDLEtBQUgsQ0FBUztFQUNMLFdBQVNELEVBQUUsQ0FBQ0UsU0FEUDtFQUdMQyxVQUFVLEVBQUU7SUFDUkMsUUFBUSxFQUFFO01BQ04sV0FBUyxJQURIO01BRU5DLElBQUksRUFBRUwsRUFBRSxDQUFDTTtJQUZILENBREY7SUFNUkMsbUJBQW1CLEVBQUU7TUFDakIsV0FBUyxJQURRO01BRWpCRixJQUFJLEVBQUVMLEVBQUUsQ0FBQ1E7SUFGUSxDQU5iO0lBV1JDLHNCQUFzQixFQUFFO01BQ3BCLFdBQVMsSUFEVztNQUVwQkosSUFBSSxFQUFFTCxFQUFFLENBQUNRO0lBRlcsQ0FYaEI7SUFnQlJFLFdBQVcsRUFBRTtNQUNULFdBQVMsRUFEQTtNQUVUTCxJQUFJLEVBQUVMLEVBQUUsQ0FBQ007SUFGQTtFQWhCTCxDQUhQO0VBeUJMO0VBQ0FLLE1BQU0sRUFBRSxrQkFBWTtJQUNoQixJQUFHLEtBQUtQLFFBQVIsRUFBa0I7TUFDZCxLQUFLUSx3QkFBTCxDQUE4QixVQUE5QixFQUEwQyxLQUFLTCxtQkFBL0MsRUFBb0UsS0FBS0gsUUFBekU7SUFDSDtFQUNKLENBOUJJO0VBZ0NMUSx3QkFBd0IsRUFBRSxrQ0FBU0MsS0FBVCxFQUFnQkMsS0FBaEIsRUFBdUJDLE1BQXZCLEVBQStCO0lBQ3JELElBQUdBLE1BQU0sQ0FBQ0MsU0FBVixFQUFxQjtNQUNqQkYsS0FBSyxDQUFDRyxNQUFOLEdBQWVKLEtBQUssR0FBRyxjQUF2QjtJQUNILENBRkQsTUFFTztNQUNIQyxLQUFLLENBQUNHLE1BQU4sR0FBZUosS0FBSyxHQUFHLGdCQUF2QjtJQUNIO0VBQ0osQ0F0Q0k7RUF3Q0xLLGtCQUFrQixFQUFFLDRCQUFTSCxNQUFULEVBQWlCO0lBQ2pDLElBQUlJLEtBQUssR0FBRyxLQUFLVCxXQUFMLENBQWlCVSxPQUFqQixDQUF5QkwsTUFBekIsQ0FBWjtJQUNBLElBQUlGLEtBQUssR0FBRyxhQUFaOztJQUNBLFFBQU9NLEtBQVA7TUFDRSxLQUFLLENBQUw7UUFDSU4sS0FBSyxJQUFJLEdBQVQ7UUFDQTs7TUFDSixLQUFLLENBQUw7UUFDSUEsS0FBSyxJQUFJLEdBQVQ7UUFDQTs7TUFDSixLQUFLLENBQUw7UUFDSUEsS0FBSyxJQUFJLEdBQVQ7UUFDQTs7TUFDSjtRQUNJO0lBWE47O0lBYUEsS0FBS0Qsd0JBQUwsQ0FBOEJDLEtBQTlCLEVBQXFDLEtBQUtKLHNCQUExQyxFQUFrRU0sTUFBbEU7RUFDSCxDQXpESTtFQTJETE0sZUFBZSxFQUFFLHlCQUFVTixNQUFWLEVBQWtCO0lBQy9CLEtBQUtILHdCQUFMLENBQThCLFVBQTlCLEVBQTBDLEtBQUtMLG1CQUEvQyxFQUFvRVEsTUFBcEU7RUFDSDtBQTdESSxDQUFUIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJjYy5DbGFzcyh7XG4gICAgZXh0ZW5kczogY2MuQ29tcG9uZW50LFxuXG4gICAgcHJvcGVydGllczoge1xuICAgICAgICBjaGVja2JveDoge1xuICAgICAgICAgICAgZGVmYXVsdDogbnVsbCxcbiAgICAgICAgICAgIHR5cGU6IGNjLlRvZ2dsZVxuICAgICAgICB9LFxuXG4gICAgICAgIGNoZWNrQm94RXZlbnRTdHJpbmc6IHtcbiAgICAgICAgICAgIGRlZmF1bHQ6IG51bGwsXG4gICAgICAgICAgICB0eXBlOiBjYy5MYWJlbFxuICAgICAgICB9LFxuXG4gICAgICAgIHJhZGlvQnV0dG9uRXZlbnRTdHJpbmc6IHtcbiAgICAgICAgICAgIGRlZmF1bHQ6IG51bGwsXG4gICAgICAgICAgICB0eXBlOiBjYy5MYWJlbFxuICAgICAgICB9LFxuXG4gICAgICAgIHJhZGlvQnV0dG9uOiB7XG4gICAgICAgICAgICBkZWZhdWx0OiBbXSxcbiAgICAgICAgICAgIHR5cGU6IGNjLlRvZ2dsZVxuICAgICAgICB9XG4gICAgfSxcblxuICAgIC8vIHVzZSB0aGlzIGZvciBpbml0aWFsaXphdGlvblxuICAgIG9uTG9hZDogZnVuY3Rpb24gKCkge1xuICAgICAgICBpZih0aGlzLmNoZWNrYm94KSB7XG4gICAgICAgICAgICB0aGlzLl91cGRhdGVUb2dnbGVFdmVudFN0cmluZyhcIkNoZWNrQm94XCIsIHRoaXMuY2hlY2tCb3hFdmVudFN0cmluZywgdGhpcy5jaGVja2JveCk7XG4gICAgICAgIH1cbiAgICB9LFxuXG4gICAgX3VwZGF0ZVRvZ2dsZUV2ZW50U3RyaW5nOiBmdW5jdGlvbih0aXRsZSwgbGFiZWwsIHRvZ2dsZSkge1xuICAgICAgICBpZih0b2dnbGUuaXNDaGVja2VkKSB7XG4gICAgICAgICAgICBsYWJlbC5zdHJpbmcgPSB0aXRsZSArIFwiIGlzIGNoZWNrZWQuXCI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBsYWJlbC5zdHJpbmcgPSB0aXRsZSArIFwiIGlzIHVuY2hlY2tlZC5cIjtcbiAgICAgICAgfVxuICAgIH0sXG5cbiAgICByYWRpb0J1dHRvbkNsaWNrZWQ6IGZ1bmN0aW9uKHRvZ2dsZSkge1xuICAgICAgICB2YXIgaW5kZXggPSB0aGlzLnJhZGlvQnV0dG9uLmluZGV4T2YodG9nZ2xlKTtcbiAgICAgICAgdmFyIHRpdGxlID0gXCJSYWRpb0J1dHRvblwiO1xuICAgICAgICBzd2l0Y2goaW5kZXgpIHtcbiAgICAgICAgICBjYXNlIDA6XG4gICAgICAgICAgICAgIHRpdGxlICs9IFwiMVwiO1xuICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgICAgIHRpdGxlICs9IFwiMlwiO1xuICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICBjYXNlIDI6XG4gICAgICAgICAgICAgIHRpdGxlICs9IFwiM1wiO1xuICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgICB0aGlzLl91cGRhdGVUb2dnbGVFdmVudFN0cmluZyh0aXRsZSwgdGhpcy5yYWRpb0J1dHRvbkV2ZW50U3RyaW5nLCB0b2dnbGUpO1xuICAgIH0sXG5cbiAgICBjaGVja0JveENsaWNrZWQ6IGZ1bmN0aW9uICh0b2dnbGUpIHtcbiAgICAgICAgdGhpcy5fdXBkYXRlVG9nZ2xlRXZlbnRTdHJpbmcoXCJDaGVja0JveFwiLCB0aGlzLmNoZWNrQm94RXZlbnRTdHJpbmcsIHRvZ2dsZSk7XG4gICAgfVxufSk7XG4iXX0=