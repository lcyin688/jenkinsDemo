
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/cases/02_ui/08_editBox/EditBox/EditBoxEvent.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '5984fyb0ONArqT4eV/OjCgP', 'EditBoxEvent');
// cases/02_ui/08_editBox/EditBox/EditBoxEvent.js

"use strict";

cc.Class({
  "extends": cc.Component,
  properties: {
    editBox: cc.EditBox,
    eventDisplay: cc.Label,
    _isEditingReturn: false
  },
  editingDidBegan: function editingDidBegan(event) {
    this.eventDisplay.string = 'editing did began';
  },
  textChanged: function textChanged(event) {
    this.eventDisplay.string = 'text changed: ' + event;
  },
  editingDidEnded: function editingDidEnded(event) {
    if (this._isEditingReturn) {
      this.eventDisplay.string = 'editing returned and ended';
      this._isEditingReturn = false;
    } else {
      this.eventDisplay.string = 'editing did ended';
    }
  },
  editingReturn: function editingReturn(event) {
    this._isEditingReturn = true;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9jYXNlcy8wMl91aS8wOF9lZGl0Qm94L0VkaXRCb3gvRWRpdEJveEV2ZW50LmpzIl0sIm5hbWVzIjpbImNjIiwiQ2xhc3MiLCJDb21wb25lbnQiLCJwcm9wZXJ0aWVzIiwiZWRpdEJveCIsIkVkaXRCb3giLCJldmVudERpc3BsYXkiLCJMYWJlbCIsIl9pc0VkaXRpbmdSZXR1cm4iLCJlZGl0aW5nRGlkQmVnYW4iLCJldmVudCIsInN0cmluZyIsInRleHRDaGFuZ2VkIiwiZWRpdGluZ0RpZEVuZGVkIiwiZWRpdGluZ1JldHVybiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQUEsRUFBRSxDQUFDQyxLQUFILENBQVM7RUFDTCxXQUFTRCxFQUFFLENBQUNFLFNBRFA7RUFHTEMsVUFBVSxFQUFFO0lBQ1JDLE9BQU8sRUFBRUosRUFBRSxDQUFDSyxPQURKO0lBRVJDLFlBQVksRUFBRU4sRUFBRSxDQUFDTyxLQUZUO0lBSVJDLGdCQUFnQixFQUFFO0VBSlYsQ0FIUDtFQVVMQyxlQVZLLDJCQVVZQyxLQVZaLEVBVW1CO0lBQ3BCLEtBQUtKLFlBQUwsQ0FBa0JLLE1BQWxCLEdBQTJCLG1CQUEzQjtFQUNILENBWkk7RUFjTEMsV0FkSyx1QkFjUUYsS0FkUixFQWNlO0lBQ2hCLEtBQUtKLFlBQUwsQ0FBa0JLLE1BQWxCLEdBQTJCLG1CQUFtQkQsS0FBOUM7RUFDSCxDQWhCSTtFQWtCTEcsZUFsQkssMkJBa0JZSCxLQWxCWixFQWtCbUI7SUFDcEIsSUFBSSxLQUFLRixnQkFBVCxFQUEyQjtNQUN2QixLQUFLRixZQUFMLENBQWtCSyxNQUFsQixHQUEyQiw0QkFBM0I7TUFDQSxLQUFLSCxnQkFBTCxHQUF3QixLQUF4QjtJQUNILENBSEQsTUFJSztNQUNELEtBQUtGLFlBQUwsQ0FBa0JLLE1BQWxCLEdBQTJCLG1CQUEzQjtJQUNIO0VBQ0osQ0ExQkk7RUE0QkxHLGFBNUJLLHlCQTRCVUosS0E1QlYsRUE0QmlCO0lBQ2xCLEtBQUtGLGdCQUFMLEdBQXdCLElBQXhCO0VBQ0g7QUE5QkksQ0FBVCIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiY2MuQ2xhc3Moe1xuICAgIGV4dGVuZHM6IGNjLkNvbXBvbmVudCxcblxuICAgIHByb3BlcnRpZXM6IHtcbiAgICAgICAgZWRpdEJveDogY2MuRWRpdEJveCxcbiAgICAgICAgZXZlbnREaXNwbGF5OiBjYy5MYWJlbCxcblxuICAgICAgICBfaXNFZGl0aW5nUmV0dXJuOiBmYWxzZSxcbiAgICB9LFxuICAgIFxuICAgIGVkaXRpbmdEaWRCZWdhbiAoZXZlbnQpIHtcbiAgICAgICAgdGhpcy5ldmVudERpc3BsYXkuc3RyaW5nID0gJ2VkaXRpbmcgZGlkIGJlZ2FuJztcbiAgICB9LFxuXG4gICAgdGV4dENoYW5nZWQgKGV2ZW50KSB7XG4gICAgICAgIHRoaXMuZXZlbnREaXNwbGF5LnN0cmluZyA9ICd0ZXh0IGNoYW5nZWQ6ICcgKyBldmVudDtcbiAgICB9LFxuXG4gICAgZWRpdGluZ0RpZEVuZGVkIChldmVudCkge1xuICAgICAgICBpZiAodGhpcy5faXNFZGl0aW5nUmV0dXJuKSB7XG4gICAgICAgICAgICB0aGlzLmV2ZW50RGlzcGxheS5zdHJpbmcgPSAnZWRpdGluZyByZXR1cm5lZCBhbmQgZW5kZWQnO1xuICAgICAgICAgICAgdGhpcy5faXNFZGl0aW5nUmV0dXJuID0gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB0aGlzLmV2ZW50RGlzcGxheS5zdHJpbmcgPSAnZWRpdGluZyBkaWQgZW5kZWQnO1xuICAgICAgICB9XG4gICAgfSxcblxuICAgIGVkaXRpbmdSZXR1cm4gKGV2ZW50KSB7XG4gICAgICAgIHRoaXMuX2lzRWRpdGluZ1JldHVybiA9IHRydWU7XG4gICAgfSxcbn0pO1xuIl19