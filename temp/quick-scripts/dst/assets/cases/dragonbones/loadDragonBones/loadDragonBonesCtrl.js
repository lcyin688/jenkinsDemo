
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/cases/dragonbones/loadDragonBones/loadDragonBonesCtrl.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'a9c63c/3U5Gv7w0rm3g5wvj', 'loadDragonBonesCtrl');
// cases/dragonbones/loadDragonBones/loadDragonBonesCtrl.js

"use strict";

cc.Class({
  "extends": cc.Component,
  properties: {
    dragonBone: {
      "default": null,
      type: dragonBones.ArmatureDisplay
    }
  },
  dynamicCreate: function dynamicCreate() {
    var _this = this;

    if (this.dragonBone.dragonAtlasAsset) {
      return;
    }

    cc.resources.load('dragonBones/NewDragonTest', dragonBones.DragonBonesAsset, function (err, res) {
      if (err) cc.error(err);
      _this.dragonBone.dragonAsset = res;
      cc.resources.load('dragonBones/texture', dragonBones.DragonBonesAtlasAsset, _this.onComplete.bind(_this));
    });
  },
  onComplete: function onComplete(err, res) {
    if (err) cc.error(err);
    this.dragonBone.dragonAtlasAsset = res;
    this.dragonBone.armatureName = 'armatureName';
    this.dragonBone.playAnimation('stand', 0);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9jYXNlcy9kcmFnb25ib25lcy9sb2FkRHJhZ29uQm9uZXMvbG9hZERyYWdvbkJvbmVzQ3RybC5qcyJdLCJuYW1lcyI6WyJjYyIsIkNsYXNzIiwiQ29tcG9uZW50IiwicHJvcGVydGllcyIsImRyYWdvbkJvbmUiLCJ0eXBlIiwiZHJhZ29uQm9uZXMiLCJBcm1hdHVyZURpc3BsYXkiLCJkeW5hbWljQ3JlYXRlIiwiZHJhZ29uQXRsYXNBc3NldCIsInJlc291cmNlcyIsImxvYWQiLCJEcmFnb25Cb25lc0Fzc2V0IiwiZXJyIiwicmVzIiwiZXJyb3IiLCJkcmFnb25Bc3NldCIsIkRyYWdvbkJvbmVzQXRsYXNBc3NldCIsIm9uQ29tcGxldGUiLCJiaW5kIiwiYXJtYXR1cmVOYW1lIiwicGxheUFuaW1hdGlvbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQUEsRUFBRSxDQUFDQyxLQUFILENBQVM7RUFDTCxXQUFTRCxFQUFFLENBQUNFLFNBRFA7RUFHTEMsVUFBVSxFQUFFO0lBQ1JDLFVBQVUsRUFBRTtNQUNSLFdBQVMsSUFERDtNQUVSQyxJQUFJLEVBQUVDLFdBQVcsQ0FBQ0M7SUFGVjtFQURKLENBSFA7RUFVTEMsYUFWSywyQkFVWTtJQUFBOztJQUNiLElBQUksS0FBS0osVUFBTCxDQUFnQkssZ0JBQXBCLEVBQXNDO01BQ2xDO0lBQ0g7O0lBQ0RULEVBQUUsQ0FBQ1UsU0FBSCxDQUFhQyxJQUFiLENBQWtCLDJCQUFsQixFQUErQ0wsV0FBVyxDQUFDTSxnQkFBM0QsRUFBNkUsVUFBQ0MsR0FBRCxFQUFNQyxHQUFOLEVBQWM7TUFDdkYsSUFBSUQsR0FBSixFQUFTYixFQUFFLENBQUNlLEtBQUgsQ0FBU0YsR0FBVDtNQUNULEtBQUksQ0FBQ1QsVUFBTCxDQUFnQlksV0FBaEIsR0FBOEJGLEdBQTlCO01BQ0FkLEVBQUUsQ0FBQ1UsU0FBSCxDQUFhQyxJQUFiLENBQWtCLHFCQUFsQixFQUF5Q0wsV0FBVyxDQUFDVyxxQkFBckQsRUFBNEUsS0FBSSxDQUFDQyxVQUFMLENBQWdCQyxJQUFoQixDQUFxQixLQUFyQixDQUE1RTtJQUNILENBSkQ7RUFLSCxDQW5CSTtFQXFCTEQsVUFyQkssc0JBcUJPTCxHQXJCUCxFQXFCWUMsR0FyQlosRUFxQmlCO0lBQ2xCLElBQUlELEdBQUosRUFBU2IsRUFBRSxDQUFDZSxLQUFILENBQVNGLEdBQVQ7SUFDVCxLQUFLVCxVQUFMLENBQWdCSyxnQkFBaEIsR0FBbUNLLEdBQW5DO0lBQ0EsS0FBS1YsVUFBTCxDQUFnQmdCLFlBQWhCLEdBQStCLGNBQS9CO0lBQ0EsS0FBS2hCLFVBQUwsQ0FBZ0JpQixhQUFoQixDQUE4QixPQUE5QixFQUF1QyxDQUF2QztFQUNIO0FBMUJJLENBQVQiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImNjLkNsYXNzKHtcbiAgICBleHRlbmRzOiBjYy5Db21wb25lbnQsXG5cbiAgICBwcm9wZXJ0aWVzOiB7XG4gICAgICAgIGRyYWdvbkJvbmU6IHtcbiAgICAgICAgICAgIGRlZmF1bHQ6IG51bGwsXG4gICAgICAgICAgICB0eXBlOiBkcmFnb25Cb25lcy5Bcm1hdHVyZURpc3BsYXlcbiAgICAgICAgfVxuICAgIH0sXG5cbiAgICBkeW5hbWljQ3JlYXRlICgpIHtcbiAgICAgICAgaWYgKHRoaXMuZHJhZ29uQm9uZS5kcmFnb25BdGxhc0Fzc2V0KSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgY2MucmVzb3VyY2VzLmxvYWQoJ2RyYWdvbkJvbmVzL05ld0RyYWdvblRlc3QnLCBkcmFnb25Cb25lcy5EcmFnb25Cb25lc0Fzc2V0LCAoZXJyLCByZXMpID0+IHtcbiAgICAgICAgICAgIGlmIChlcnIpIGNjLmVycm9yKGVycik7XG4gICAgICAgICAgICB0aGlzLmRyYWdvbkJvbmUuZHJhZ29uQXNzZXQgPSByZXM7XG4gICAgICAgICAgICBjYy5yZXNvdXJjZXMubG9hZCgnZHJhZ29uQm9uZXMvdGV4dHVyZScsIGRyYWdvbkJvbmVzLkRyYWdvbkJvbmVzQXRsYXNBc3NldCwgdGhpcy5vbkNvbXBsZXRlLmJpbmQodGhpcykpO1xuICAgICAgICB9KTtcbiAgICB9LFxuXG4gICAgb25Db21wbGV0ZSAoZXJyLCByZXMpIHtcbiAgICAgICAgaWYgKGVycikgY2MuZXJyb3IoZXJyKTtcbiAgICAgICAgdGhpcy5kcmFnb25Cb25lLmRyYWdvbkF0bGFzQXNzZXQgPSByZXM7XG4gICAgICAgIHRoaXMuZHJhZ29uQm9uZS5hcm1hdHVyZU5hbWUgPSAnYXJtYXR1cmVOYW1lJztcbiAgICAgICAgdGhpcy5kcmFnb25Cb25lLnBsYXlBbmltYXRpb24oJ3N0YW5kJywgMCk7XG4gICAgfVxufSk7XG4iXX0=