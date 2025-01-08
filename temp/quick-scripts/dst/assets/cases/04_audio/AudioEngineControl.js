
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/cases/04_audio/AudioEngineControl.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '251cfXAScNHQqBfLlu2ffSn', 'AudioEngineControl');
// cases/04_audio/AudioEngineControl.js

"use strict";

cc.Class({
  "extends": cc.Component,
  properties: {
    audio: {
      type: cc.AudioClip,
      "default": null
    },
    label: {
      type: cc.Label,
      "default": null
    }
  },
  _updateLabel: function _updateLabel() {
    this.label.string = 'Instance: ' + this.audioPool.length + ' / ' + this.maxNum;
  },
  onLoad: function onLoad() {
    this.maxNum = cc.audioEngine.getMaxAudioInstance();
    this.audioPool = [];

    this._updateLabel(); // check deprecated


    ['playMusic', 'playEffect'].forEach(function (name) {
      if (!cc.audioEngine[name]) {
        cc.warn('.' + name + ' is not found!');
      }
    });
  },
  onDestroy: function onDestroy() {
    cc.audioEngine.stopAll();
  },
  removeAudio: function removeAudio(id) {
    var idx = this.audioPool.indexOf(id);

    if (idx > -1) {
      this.audioPool.splice(idx, 1);
    }

    this._updateLabel();
  },
  play: function play() {
    if (!this.audio || this.audioPool.length === this.maxNum) return;
    var id = cc.audioEngine.play(this.audio, false, 1);
    this.audioPool.push(id);

    this._updateLabel(); // set finish callback


    cc.audioEngine.setFinishCallback(id, this.removeAudio.bind(this, id));
  },
  stopAll: function stopAll() {
    cc.audioEngine.stopAll();
    this.audioPool = [];

    this._updateLabel();
  },
  pauseAll: function pauseAll() {
    cc.audioEngine.pauseAll();
  },
  resumeAll: function resumeAll() {
    cc.audioEngine.resumeAll();
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9jYXNlcy8wNF9hdWRpby9BdWRpb0VuZ2luZUNvbnRyb2wuanMiXSwibmFtZXMiOlsiY2MiLCJDbGFzcyIsIkNvbXBvbmVudCIsInByb3BlcnRpZXMiLCJhdWRpbyIsInR5cGUiLCJBdWRpb0NsaXAiLCJsYWJlbCIsIkxhYmVsIiwiX3VwZGF0ZUxhYmVsIiwic3RyaW5nIiwiYXVkaW9Qb29sIiwibGVuZ3RoIiwibWF4TnVtIiwib25Mb2FkIiwiYXVkaW9FbmdpbmUiLCJnZXRNYXhBdWRpb0luc3RhbmNlIiwiZm9yRWFjaCIsIm5hbWUiLCJ3YXJuIiwib25EZXN0cm95Iiwic3RvcEFsbCIsInJlbW92ZUF1ZGlvIiwiaWQiLCJpZHgiLCJpbmRleE9mIiwic3BsaWNlIiwicGxheSIsInB1c2giLCJzZXRGaW5pc2hDYWxsYmFjayIsImJpbmQiLCJwYXVzZUFsbCIsInJlc3VtZUFsbCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQUEsRUFBRSxDQUFDQyxLQUFILENBQVM7RUFDTCxXQUFTRCxFQUFFLENBQUNFLFNBRFA7RUFHTEMsVUFBVSxFQUFFO0lBQ1JDLEtBQUssRUFBRTtNQUNIQyxJQUFJLEVBQUVMLEVBQUUsQ0FBQ00sU0FETjtNQUVILFdBQVM7SUFGTixDQURDO0lBTVJDLEtBQUssRUFBRTtNQUNIRixJQUFJLEVBQUVMLEVBQUUsQ0FBQ1EsS0FETjtNQUVILFdBQVM7SUFGTjtFQU5DLENBSFA7RUFlTEMsWUFmSywwQkFlVztJQUNaLEtBQUtGLEtBQUwsQ0FBV0csTUFBWCxHQUFvQixlQUFlLEtBQUtDLFNBQUwsQ0FBZUMsTUFBOUIsR0FBdUMsS0FBdkMsR0FBK0MsS0FBS0MsTUFBeEU7RUFDSCxDQWpCSTtFQW1CTEMsTUFuQkssb0JBbUJLO0lBQ04sS0FBS0QsTUFBTCxHQUFjYixFQUFFLENBQUNlLFdBQUgsQ0FBZUMsbUJBQWYsRUFBZDtJQUNBLEtBQUtMLFNBQUwsR0FBaUIsRUFBakI7O0lBQ0EsS0FBS0YsWUFBTCxHQUhNLENBS047OztJQUNBLENBQUMsV0FBRCxFQUFjLFlBQWQsRUFBNEJRLE9BQTVCLENBQW9DLFVBQVVDLElBQVYsRUFBZ0I7TUFDaEQsSUFBSSxDQUFDbEIsRUFBRSxDQUFDZSxXQUFILENBQWVHLElBQWYsQ0FBTCxFQUEyQjtRQUN2QmxCLEVBQUUsQ0FBQ21CLElBQUgsQ0FBUSxNQUFNRCxJQUFOLEdBQWEsZ0JBQXJCO01BQ0g7SUFDSixDQUpEO0VBS0gsQ0E5Qkk7RUFnQ0xFLFNBaENLLHVCQWdDUTtJQUNUcEIsRUFBRSxDQUFDZSxXQUFILENBQWVNLE9BQWY7RUFDSCxDQWxDSTtFQW9DTEMsV0FwQ0ssdUJBb0NRQyxFQXBDUixFQW9DWTtJQUNiLElBQUlDLEdBQUcsR0FBRyxLQUFLYixTQUFMLENBQWVjLE9BQWYsQ0FBdUJGLEVBQXZCLENBQVY7O0lBQ0EsSUFBSUMsR0FBRyxHQUFHLENBQUMsQ0FBWCxFQUFjO01BQ1YsS0FBS2IsU0FBTCxDQUFlZSxNQUFmLENBQXNCRixHQUF0QixFQUEyQixDQUEzQjtJQUNIOztJQUNELEtBQUtmLFlBQUw7RUFDSCxDQTFDSTtFQTRDTGtCLElBNUNLLGtCQTRDRztJQUNKLElBQUksQ0FBQyxLQUFLdkIsS0FBTixJQUFlLEtBQUtPLFNBQUwsQ0FBZUMsTUFBZixLQUEwQixLQUFLQyxNQUFsRCxFQUEwRDtJQUMxRCxJQUFJVSxFQUFFLEdBQUd2QixFQUFFLENBQUNlLFdBQUgsQ0FBZVksSUFBZixDQUFvQixLQUFLdkIsS0FBekIsRUFBZ0MsS0FBaEMsRUFBdUMsQ0FBdkMsQ0FBVDtJQUNBLEtBQUtPLFNBQUwsQ0FBZWlCLElBQWYsQ0FBb0JMLEVBQXBCOztJQUNBLEtBQUtkLFlBQUwsR0FKSSxDQU1KOzs7SUFDQVQsRUFBRSxDQUFDZSxXQUFILENBQWVjLGlCQUFmLENBQWlDTixFQUFqQyxFQUFxQyxLQUFLRCxXQUFMLENBQWlCUSxJQUFqQixDQUFzQixJQUF0QixFQUE0QlAsRUFBNUIsQ0FBckM7RUFDSCxDQXBESTtFQXNETEYsT0F0REsscUJBc0RNO0lBQ1ByQixFQUFFLENBQUNlLFdBQUgsQ0FBZU0sT0FBZjtJQUNBLEtBQUtWLFNBQUwsR0FBaUIsRUFBakI7O0lBQ0EsS0FBS0YsWUFBTDtFQUNILENBMURJO0VBNERMc0IsUUE1REssc0JBNERPO0lBQ1IvQixFQUFFLENBQUNlLFdBQUgsQ0FBZWdCLFFBQWY7RUFDSCxDQTlESTtFQWdFTEMsU0FoRUssdUJBZ0VRO0lBQ1RoQyxFQUFFLENBQUNlLFdBQUgsQ0FBZWlCLFNBQWY7RUFDSDtBQWxFSSxDQUFUIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJjYy5DbGFzcyh7XG4gICAgZXh0ZW5kczogY2MuQ29tcG9uZW50LFxuXG4gICAgcHJvcGVydGllczoge1xuICAgICAgICBhdWRpbzoge1xuICAgICAgICAgICAgdHlwZTogY2MuQXVkaW9DbGlwLFxuICAgICAgICAgICAgZGVmYXVsdDogbnVsbFxuICAgICAgICB9LFxuXG4gICAgICAgIGxhYmVsOiB7XG4gICAgICAgICAgICB0eXBlOiBjYy5MYWJlbCxcbiAgICAgICAgICAgIGRlZmF1bHQ6IG51bGxcbiAgICAgICAgfVxuICAgIH0sXG5cbiAgICBfdXBkYXRlTGFiZWwgKCkge1xuICAgICAgICB0aGlzLmxhYmVsLnN0cmluZyA9ICdJbnN0YW5jZTogJyArIHRoaXMuYXVkaW9Qb29sLmxlbmd0aCArICcgLyAnICsgdGhpcy5tYXhOdW07XG4gICAgfSxcblxuICAgIG9uTG9hZCAoKSB7XG4gICAgICAgIHRoaXMubWF4TnVtID0gY2MuYXVkaW9FbmdpbmUuZ2V0TWF4QXVkaW9JbnN0YW5jZSgpO1xuICAgICAgICB0aGlzLmF1ZGlvUG9vbCA9IFtdO1xuICAgICAgICB0aGlzLl91cGRhdGVMYWJlbCgpO1xuXG4gICAgICAgIC8vIGNoZWNrIGRlcHJlY2F0ZWRcbiAgICAgICAgWydwbGF5TXVzaWMnLCAncGxheUVmZmVjdCddLmZvckVhY2goZnVuY3Rpb24gKG5hbWUpIHtcbiAgICAgICAgICAgIGlmICghY2MuYXVkaW9FbmdpbmVbbmFtZV0pIHtcbiAgICAgICAgICAgICAgICBjYy53YXJuKCcuJyArIG5hbWUgKyAnIGlzIG5vdCBmb3VuZCEnKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfSxcblxuICAgIG9uRGVzdHJveSAoKSB7XG4gICAgICAgIGNjLmF1ZGlvRW5naW5lLnN0b3BBbGwoKTtcbiAgICB9LFxuXG4gICAgcmVtb3ZlQXVkaW8gKGlkKSB7XG4gICAgICAgIHZhciBpZHggPSB0aGlzLmF1ZGlvUG9vbC5pbmRleE9mKGlkKTtcbiAgICAgICAgaWYgKGlkeCA+IC0xKSB7XG4gICAgICAgICAgICB0aGlzLmF1ZGlvUG9vbC5zcGxpY2UoaWR4LCAxKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLl91cGRhdGVMYWJlbCgpO1xuICAgIH0sXG5cbiAgICBwbGF5ICgpIHtcbiAgICAgICAgaWYgKCF0aGlzLmF1ZGlvIHx8IHRoaXMuYXVkaW9Qb29sLmxlbmd0aCA9PT0gdGhpcy5tYXhOdW0pIHJldHVybjtcbiAgICAgICAgdmFyIGlkID0gY2MuYXVkaW9FbmdpbmUucGxheSh0aGlzLmF1ZGlvLCBmYWxzZSwgMSk7XG4gICAgICAgIHRoaXMuYXVkaW9Qb29sLnB1c2goaWQpO1xuICAgICAgICB0aGlzLl91cGRhdGVMYWJlbCgpO1xuXG4gICAgICAgIC8vIHNldCBmaW5pc2ggY2FsbGJhY2tcbiAgICAgICAgY2MuYXVkaW9FbmdpbmUuc2V0RmluaXNoQ2FsbGJhY2soaWQsIHRoaXMucmVtb3ZlQXVkaW8uYmluZCh0aGlzLCBpZCkpO1xuICAgIH0sXG5cbiAgICBzdG9wQWxsICgpIHtcbiAgICAgICAgY2MuYXVkaW9FbmdpbmUuc3RvcEFsbCgpO1xuICAgICAgICB0aGlzLmF1ZGlvUG9vbCA9IFtdO1xuICAgICAgICB0aGlzLl91cGRhdGVMYWJlbCgpO1xuICAgIH0sXG5cbiAgICBwYXVzZUFsbCAoKSB7XG4gICAgICAgIGNjLmF1ZGlvRW5naW5lLnBhdXNlQWxsKCk7XG4gICAgfSxcblxuICAgIHJlc3VtZUFsbCAoKSB7XG4gICAgICAgIGNjLmF1ZGlvRW5naW5lLnJlc3VtZUFsbCgpO1xuICAgIH0sXG59KTtcbiJdfQ==