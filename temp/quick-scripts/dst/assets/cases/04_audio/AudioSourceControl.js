
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/cases/04_audio/AudioSourceControl.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '21d1aBwz85GW7Z3zNuBJcwB', 'AudioSourceControl');
// cases/04_audio/AudioSourceControl.js

"use strict";

cc.Class({
  "extends": cc.Component,
  properties: {
    audioSource: {
      type: cc.AudioSource,
      "default": null
    },
    label: {
      type: cc.Label,
      "default": null
    }
  },
  // use this for initialization
  onLoad: function onLoad() {// cc.audioEngine.setMaxWebAudioSize(1024*10);
  },
  update: function update() {
    if (!this.label) {
      return;
    }

    var audio = this.audioSource;
    this.label.string = audio.getCurrentTime().toFixed(1) + ' s / ' + audio.getDuration().toFixed(1) + ' s';
  },
  play: function play() {
    this.audioSource.play();
  },
  pause: function pause() {
    this.audioSource.pause();
  },
  stop: function stop() {
    this.audioSource.stop();
  },
  resume: function resume() {
    this.audioSource.resume();
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9jYXNlcy8wNF9hdWRpby9BdWRpb1NvdXJjZUNvbnRyb2wuanMiXSwibmFtZXMiOlsiY2MiLCJDbGFzcyIsIkNvbXBvbmVudCIsInByb3BlcnRpZXMiLCJhdWRpb1NvdXJjZSIsInR5cGUiLCJBdWRpb1NvdXJjZSIsImxhYmVsIiwiTGFiZWwiLCJvbkxvYWQiLCJ1cGRhdGUiLCJhdWRpbyIsInN0cmluZyIsImdldEN1cnJlbnRUaW1lIiwidG9GaXhlZCIsImdldER1cmF0aW9uIiwicGxheSIsInBhdXNlIiwic3RvcCIsInJlc3VtZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQUEsRUFBRSxDQUFDQyxLQUFILENBQVM7RUFDTCxXQUFTRCxFQUFFLENBQUNFLFNBRFA7RUFHTEMsVUFBVSxFQUFFO0lBQ1JDLFdBQVcsRUFBRTtNQUNUQyxJQUFJLEVBQUVMLEVBQUUsQ0FBQ00sV0FEQTtNQUVULFdBQVM7SUFGQSxDQURMO0lBTVJDLEtBQUssRUFBRTtNQUNIRixJQUFJLEVBQUVMLEVBQUUsQ0FBQ1EsS0FETjtNQUVILFdBQVM7SUFGTjtFQU5DLENBSFA7RUFlTDtFQUNBQyxNQUFNLEVBQUUsa0JBQVksQ0FDaEI7RUFDSCxDQWxCSTtFQW9CTEMsTUFBTSxFQUFFLGtCQUFZO0lBQ2hCLElBQUksQ0FBQyxLQUFLSCxLQUFWLEVBQWlCO01BQ2I7SUFDSDs7SUFDRCxJQUFJSSxLQUFLLEdBQUcsS0FBS1AsV0FBakI7SUFDQSxLQUFLRyxLQUFMLENBQVdLLE1BQVgsR0FBb0JELEtBQUssQ0FBQ0UsY0FBTixHQUF1QkMsT0FBdkIsQ0FBK0IsQ0FBL0IsSUFBb0MsT0FBcEMsR0FBOENILEtBQUssQ0FBQ0ksV0FBTixHQUFvQkQsT0FBcEIsQ0FBNEIsQ0FBNUIsQ0FBOUMsR0FBK0UsSUFBbkc7RUFDSCxDQTFCSTtFQTRCTEUsSUFBSSxFQUFFLGdCQUFZO0lBQ2QsS0FBS1osV0FBTCxDQUFpQlksSUFBakI7RUFDSCxDQTlCSTtFQWdDTEMsS0FBSyxFQUFFLGlCQUFZO0lBQ2YsS0FBS2IsV0FBTCxDQUFpQmEsS0FBakI7RUFDSCxDQWxDSTtFQW9DTEMsSUFBSSxFQUFFLGdCQUFZO0lBQ2QsS0FBS2QsV0FBTCxDQUFpQmMsSUFBakI7RUFDSCxDQXRDSTtFQXdDTEMsTUFBTSxFQUFFLGtCQUFZO0lBQ2hCLEtBQUtmLFdBQUwsQ0FBaUJlLE1BQWpCO0VBQ0g7QUExQ0ksQ0FBVCIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiY2MuQ2xhc3Moe1xuICAgIGV4dGVuZHM6IGNjLkNvbXBvbmVudCxcblxuICAgIHByb3BlcnRpZXM6IHtcbiAgICAgICAgYXVkaW9Tb3VyY2U6IHtcbiAgICAgICAgICAgIHR5cGU6IGNjLkF1ZGlvU291cmNlLFxuICAgICAgICAgICAgZGVmYXVsdDogbnVsbFxuICAgICAgICB9LFxuICAgICAgICBcbiAgICAgICAgbGFiZWw6IHtcbiAgICAgICAgICAgIHR5cGU6IGNjLkxhYmVsLFxuICAgICAgICAgICAgZGVmYXVsdDogbnVsbFxuICAgICAgICB9XG4gICAgfSxcblxuICAgIC8vIHVzZSB0aGlzIGZvciBpbml0aWFsaXphdGlvblxuICAgIG9uTG9hZDogZnVuY3Rpb24gKCkge1xuICAgICAgICAvLyBjYy5hdWRpb0VuZ2luZS5zZXRNYXhXZWJBdWRpb1NpemUoMTAyNCoxMCk7XG4gICAgfSxcbiAgICBcbiAgICB1cGRhdGU6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaWYgKCF0aGlzLmxhYmVsKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgdmFyIGF1ZGlvID0gdGhpcy5hdWRpb1NvdXJjZTtcbiAgICAgICAgdGhpcy5sYWJlbC5zdHJpbmcgPSBhdWRpby5nZXRDdXJyZW50VGltZSgpLnRvRml4ZWQoMSkgKyAnIHMgLyAnICsgYXVkaW8uZ2V0RHVyYXRpb24oKS50b0ZpeGVkKDEpICsgJyBzJztcbiAgICB9LFxuICAgIFxuICAgIHBsYXk6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdGhpcy5hdWRpb1NvdXJjZS5wbGF5KCk7XG4gICAgfSxcbiAgICBcbiAgICBwYXVzZTogZnVuY3Rpb24gKCkge1xuICAgICAgICB0aGlzLmF1ZGlvU291cmNlLnBhdXNlKCk7XG4gICAgfSxcbiAgICBcbiAgICBzdG9wOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHRoaXMuYXVkaW9Tb3VyY2Uuc3RvcCgpO1xuICAgIH0sXG4gICAgXG4gICAgcmVzdW1lOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHRoaXMuYXVkaW9Tb3VyY2UucmVzdW1lKCk7XG4gICAgfVxufSk7XG4iXX0=