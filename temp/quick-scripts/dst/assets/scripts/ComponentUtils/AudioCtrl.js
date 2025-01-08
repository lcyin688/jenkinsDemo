
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/ComponentUtils/AudioCtrl.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '5696eq9jEBM7KysA0oiKxfR', 'AudioCtrl');
// scripts/ComponentUtils/AudioCtrl.js

"use strict";

cc.Class({
  "extends": cc.Component,
  properties: {
    timeLabel: {
      "default": null,
      type: cc.Label
    },
    _audioTask: null,
    _audioID: null
  },
  setAudioTask: function setAudioTask(audio) {
    this._audioTask = audio;
  },
  playAudio: function playAudio() {
    // return current audio object
    this._audioID = cc.audioEngine.play(this._audioTask, false);
  },
  stopAudio: function stopAudio() {
    cc.audioEngine.stop(this._audioID);
  },
  pauseAudio: function pauseAudio() {
    cc.audioEngine.pause(this._audioID);
  },
  resumeAudio: function resumeAudio() {
    cc.audioEngine.resume(this._audioID);
  },
  stopAllAudio: function stopAllAudio() {
    cc.audioEngine.stopAll();
  },
  pauseAllAudio: function pauseAllAudio() {
    cc.audioEngine.pauseAll();
  },
  resumeAllAudio: function resumeAllAudio() {
    cc.audioEngine.resumeAll();
  },
  currentTime: function currentTime() {
    if (!this._audioTask || this._audioID === null) {
      return;
    }

    var currentTime = cc.audioEngine.getCurrentTime(this._audioID).toFixed(1);
    var durationTime = cc.audioEngine.getDuration(this._audioID).toFixed(1);
    this.timeLabel.string = currentTime + " s / " + durationTime + " s";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHRzL0NvbXBvbmVudFV0aWxzL0F1ZGlvQ3RybC5qcyJdLCJuYW1lcyI6WyJjYyIsIkNsYXNzIiwiQ29tcG9uZW50IiwicHJvcGVydGllcyIsInRpbWVMYWJlbCIsInR5cGUiLCJMYWJlbCIsIl9hdWRpb1Rhc2siLCJfYXVkaW9JRCIsInNldEF1ZGlvVGFzayIsImF1ZGlvIiwicGxheUF1ZGlvIiwiYXVkaW9FbmdpbmUiLCJwbGF5Iiwic3RvcEF1ZGlvIiwic3RvcCIsInBhdXNlQXVkaW8iLCJwYXVzZSIsInJlc3VtZUF1ZGlvIiwicmVzdW1lIiwic3RvcEFsbEF1ZGlvIiwic3RvcEFsbCIsInBhdXNlQWxsQXVkaW8iLCJwYXVzZUFsbCIsInJlc3VtZUFsbEF1ZGlvIiwicmVzdW1lQWxsIiwiY3VycmVudFRpbWUiLCJnZXRDdXJyZW50VGltZSIsInRvRml4ZWQiLCJkdXJhdGlvblRpbWUiLCJnZXREdXJhdGlvbiIsInN0cmluZyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQUEsRUFBRSxDQUFDQyxLQUFILENBQVM7RUFDTCxXQUFTRCxFQUFFLENBQUNFLFNBRFA7RUFHTEMsVUFBVSxFQUFFO0lBQ1JDLFNBQVMsRUFBRTtNQUNQLFdBQVMsSUFERjtNQUVQQyxJQUFJLEVBQUVMLEVBQUUsQ0FBQ007SUFGRixDQURIO0lBS1JDLFVBQVUsRUFBRSxJQUxKO0lBTVJDLFFBQVEsRUFBRTtFQU5GLENBSFA7RUFZTEMsWUFaSyx3QkFZU0MsS0FaVCxFQVlnQjtJQUNqQixLQUFLSCxVQUFMLEdBQWtCRyxLQUFsQjtFQUNILENBZEk7RUFnQkxDLFNBaEJLLHVCQWdCUTtJQUNUO0lBQ0EsS0FBS0gsUUFBTCxHQUFnQlIsRUFBRSxDQUFDWSxXQUFILENBQWVDLElBQWYsQ0FBb0IsS0FBS04sVUFBekIsRUFBcUMsS0FBckMsQ0FBaEI7RUFDSCxDQW5CSTtFQXFCTE8sU0FyQkssdUJBcUJRO0lBQ1RkLEVBQUUsQ0FBQ1ksV0FBSCxDQUFlRyxJQUFmLENBQW9CLEtBQUtQLFFBQXpCO0VBQ0gsQ0F2Qkk7RUF5QkxRLFVBekJLLHdCQXlCUztJQUNWaEIsRUFBRSxDQUFDWSxXQUFILENBQWVLLEtBQWYsQ0FBcUIsS0FBS1QsUUFBMUI7RUFDSCxDQTNCSTtFQTZCTFUsV0E3QksseUJBNkJVO0lBQ1hsQixFQUFFLENBQUNZLFdBQUgsQ0FBZU8sTUFBZixDQUFzQixLQUFLWCxRQUEzQjtFQUNILENBL0JJO0VBaUNMWSxZQWpDSywwQkFpQ1c7SUFDWnBCLEVBQUUsQ0FBQ1ksV0FBSCxDQUFlUyxPQUFmO0VBQ0gsQ0FuQ0k7RUFxQ0xDLGFBckNLLDJCQXFDWTtJQUNidEIsRUFBRSxDQUFDWSxXQUFILENBQWVXLFFBQWY7RUFDSCxDQXZDSTtFQXlDTEMsY0F6Q0ssNEJBeUNhO0lBQ2R4QixFQUFFLENBQUNZLFdBQUgsQ0FBZWEsU0FBZjtFQUNILENBM0NJO0VBNkNMQyxXQTdDSyx5QkE2Q1U7SUFDWCxJQUFJLENBQUMsS0FBS25CLFVBQU4sSUFBb0IsS0FBS0MsUUFBTCxLQUFrQixJQUExQyxFQUFnRDtNQUM1QztJQUNIOztJQUNELElBQUlrQixXQUFXLEdBQUcxQixFQUFFLENBQUNZLFdBQUgsQ0FBZWUsY0FBZixDQUE4QixLQUFLbkIsUUFBbkMsRUFBNkNvQixPQUE3QyxDQUFxRCxDQUFyRCxDQUFsQjtJQUNBLElBQUlDLFlBQVksR0FBRzdCLEVBQUUsQ0FBQ1ksV0FBSCxDQUFla0IsV0FBZixDQUEyQixLQUFLdEIsUUFBaEMsRUFBMENvQixPQUExQyxDQUFrRCxDQUFsRCxDQUFuQjtJQUNBLEtBQUt4QixTQUFMLENBQWUyQixNQUFmLEdBQTJCTCxXQUEzQixhQUE4Q0csWUFBOUM7RUFDSDtBQXBESSxDQUFUIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJjYy5DbGFzcyh7XG4gICAgZXh0ZW5kczogY2MuQ29tcG9uZW50LFxuXG4gICAgcHJvcGVydGllczoge1xuICAgICAgICB0aW1lTGFiZWw6IHtcbiAgICAgICAgICAgIGRlZmF1bHQ6IG51bGwsXG4gICAgICAgICAgICB0eXBlOiBjYy5MYWJlbFxuICAgICAgICB9LFxuICAgICAgICBfYXVkaW9UYXNrOiBudWxsLFxuICAgICAgICBfYXVkaW9JRDogbnVsbCxcbiAgICB9LFxuXG4gICAgc2V0QXVkaW9UYXNrIChhdWRpbykge1xuICAgICAgICB0aGlzLl9hdWRpb1Rhc2sgPSBhdWRpbztcbiAgICB9LFxuXG4gICAgcGxheUF1ZGlvICgpIHtcbiAgICAgICAgLy8gcmV0dXJuIGN1cnJlbnQgYXVkaW8gb2JqZWN0XG4gICAgICAgIHRoaXMuX2F1ZGlvSUQgPSBjYy5hdWRpb0VuZ2luZS5wbGF5KHRoaXMuX2F1ZGlvVGFzaywgZmFsc2UpO1xuICAgIH0sXG5cbiAgICBzdG9wQXVkaW8gKCkge1xuICAgICAgICBjYy5hdWRpb0VuZ2luZS5zdG9wKHRoaXMuX2F1ZGlvSUQpO1xuICAgIH0sXG5cbiAgICBwYXVzZUF1ZGlvICgpIHtcbiAgICAgICAgY2MuYXVkaW9FbmdpbmUucGF1c2UodGhpcy5fYXVkaW9JRCk7XG4gICAgfSxcblxuICAgIHJlc3VtZUF1ZGlvICgpIHtcbiAgICAgICAgY2MuYXVkaW9FbmdpbmUucmVzdW1lKHRoaXMuX2F1ZGlvSUQpO1xuICAgIH0sXG5cbiAgICBzdG9wQWxsQXVkaW8gKCkge1xuICAgICAgICBjYy5hdWRpb0VuZ2luZS5zdG9wQWxsKCk7XG4gICAgfSxcblxuICAgIHBhdXNlQWxsQXVkaW8gKCkge1xuICAgICAgICBjYy5hdWRpb0VuZ2luZS5wYXVzZUFsbCgpO1xuICAgIH0sXG5cbiAgICByZXN1bWVBbGxBdWRpbyAoKSB7XG4gICAgICAgIGNjLmF1ZGlvRW5naW5lLnJlc3VtZUFsbCgpO1xuICAgIH0sXG5cbiAgICBjdXJyZW50VGltZSAoKSB7XG4gICAgICAgIGlmICghdGhpcy5fYXVkaW9UYXNrIHx8IHRoaXMuX2F1ZGlvSUQgPT09IG51bGwpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBsZXQgY3VycmVudFRpbWUgPSBjYy5hdWRpb0VuZ2luZS5nZXRDdXJyZW50VGltZSh0aGlzLl9hdWRpb0lEKS50b0ZpeGVkKDEpO1xuICAgICAgICBsZXQgZHVyYXRpb25UaW1lID0gY2MuYXVkaW9FbmdpbmUuZ2V0RHVyYXRpb24odGhpcy5fYXVkaW9JRCkudG9GaXhlZCgxKTtcbiAgICAgICAgdGhpcy50aW1lTGFiZWwuc3RyaW5nID0gYCR7Y3VycmVudFRpbWV9IHMgLyAke2R1cmF0aW9uVGltZX0gc2A7XG4gICAgfSxcbn0pO1xuIl19