
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/cases/05_scripting/10_network/downloader-web/downloader-audio.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '0c2cc2alblHzIYTnubkC9U7', 'downloader-audio');
// cases/05_scripting/10_network/downloader-web/downloader-audio.js

"use strict";

var i18n = require('i18n');

cc.Class({
  "extends": cc.Component,
  properties: {
    remindLabel: {
      "default": null,
      type: cc.Label
    },
    inputUrlBox: {
      "default": null,
      type: cc.EditBox
    },
    _audioPlayer: null,
    _audioUrl: 'http://tools.itharbors.com/christmas/res/sounds/ss.mp3'
  },
  onLoad: function onLoad() {
    this.remindLabel.textKey = '';
    this._audioPlayer = this.node.getComponent('AudioCtrl');
  },
  startLoad: function startLoad() {
    // set url
    this._audioUrl = this.inputUrlBox.string; // download audio

    if (this._audioUrl) {
      cc.assetManager.loadRemote(this._audioUrl, this.audioLoadComplete.bind(this));
      this.remindLabel.textKey = i18n.t('cases/05_scripting/11_network/download-web.fire.2');
    } else {
      this.remindLabel.textKey = i18n.t('cases/05_scripting/11_network/download-web.fire.10');
    }
  },
  audioLoadComplete: function audioLoadComplete(err, res) {
    if (err || !res) {
      console.log(err);
      this.remindLabel.textKey = i18n.t('cases/05_scripting/11_network/download-web.fire.5.1');
      return;
    }

    this.remindLabel.textKey = i18n.t('cases/05_scripting/11_network/download-web.fire.4.1'); // return back a AudioClip

    this._audioPlayer.setAudioTask(res);
  },
  update: function update() {
    this._audioPlayer.currentTime();
  },
  onDisable: function onDisable() {
    this._audioPlayer.stopAllAudio();
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9jYXNlcy8wNV9zY3JpcHRpbmcvMTBfbmV0d29yay9kb3dubG9hZGVyLXdlYi9kb3dubG9hZGVyLWF1ZGlvLmpzIl0sIm5hbWVzIjpbImkxOG4iLCJyZXF1aXJlIiwiY2MiLCJDbGFzcyIsIkNvbXBvbmVudCIsInByb3BlcnRpZXMiLCJyZW1pbmRMYWJlbCIsInR5cGUiLCJMYWJlbCIsImlucHV0VXJsQm94IiwiRWRpdEJveCIsIl9hdWRpb1BsYXllciIsIl9hdWRpb1VybCIsIm9uTG9hZCIsInRleHRLZXkiLCJub2RlIiwiZ2V0Q29tcG9uZW50Iiwic3RhcnRMb2FkIiwic3RyaW5nIiwiYXNzZXRNYW5hZ2VyIiwibG9hZFJlbW90ZSIsImF1ZGlvTG9hZENvbXBsZXRlIiwiYmluZCIsInQiLCJlcnIiLCJyZXMiLCJjb25zb2xlIiwibG9nIiwic2V0QXVkaW9UYXNrIiwidXBkYXRlIiwiY3VycmVudFRpbWUiLCJvbkRpc2FibGUiLCJzdG9wQWxsQXVkaW8iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsSUFBTUEsSUFBSSxHQUFHQyxPQUFPLENBQUMsTUFBRCxDQUFwQjs7QUFFQUMsRUFBRSxDQUFDQyxLQUFILENBQVM7RUFDTCxXQUFTRCxFQUFFLENBQUNFLFNBRFA7RUFHTEMsVUFBVSxFQUFFO0lBQ1JDLFdBQVcsRUFBRTtNQUNULFdBQVMsSUFEQTtNQUVUQyxJQUFJLEVBQUVMLEVBQUUsQ0FBQ007SUFGQSxDQURMO0lBS1JDLFdBQVcsRUFBRTtNQUNULFdBQVMsSUFEQTtNQUVURixJQUFJLEVBQUVMLEVBQUUsQ0FBQ1E7SUFGQSxDQUxMO0lBU1JDLFlBQVksRUFBRSxJQVROO0lBVVJDLFNBQVMsRUFBRTtFQVZILENBSFA7RUFnQkxDLE1BaEJLLG9CQWdCSztJQUNOLEtBQUtQLFdBQUwsQ0FBaUJRLE9BQWpCLEdBQTJCLEVBQTNCO0lBQ0EsS0FBS0gsWUFBTCxHQUFvQixLQUFLSSxJQUFMLENBQVVDLFlBQVYsQ0FBdUIsV0FBdkIsQ0FBcEI7RUFDSCxDQW5CSTtFQXFCTEMsU0FyQkssdUJBcUJRO0lBQ1Q7SUFDQSxLQUFLTCxTQUFMLEdBQWlCLEtBQUtILFdBQUwsQ0FBaUJTLE1BQWxDLENBRlMsQ0FHVDs7SUFDQSxJQUFJLEtBQUtOLFNBQVQsRUFBb0I7TUFDaEJWLEVBQUUsQ0FBQ2lCLFlBQUgsQ0FBZ0JDLFVBQWhCLENBQTJCLEtBQUtSLFNBQWhDLEVBQTJDLEtBQUtTLGlCQUFMLENBQXVCQyxJQUF2QixDQUE0QixJQUE1QixDQUEzQztNQUNBLEtBQUtoQixXQUFMLENBQWlCUSxPQUFqQixHQUEyQmQsSUFBSSxDQUFDdUIsQ0FBTCxDQUFPLG1EQUFQLENBQTNCO0lBQ0gsQ0FIRCxNQUlLO01BQ0QsS0FBS2pCLFdBQUwsQ0FBaUJRLE9BQWpCLEdBQTJCZCxJQUFJLENBQUN1QixDQUFMLENBQU8sb0RBQVAsQ0FBM0I7SUFDSDtFQUNKLENBaENJO0VBa0NMRixpQkFsQ0ssNkJBa0NjRyxHQWxDZCxFQWtDbUJDLEdBbENuQixFQWtDd0I7SUFDekIsSUFBSUQsR0FBRyxJQUFJLENBQUNDLEdBQVosRUFBaUI7TUFDYkMsT0FBTyxDQUFDQyxHQUFSLENBQVlILEdBQVo7TUFDQSxLQUFLbEIsV0FBTCxDQUFpQlEsT0FBakIsR0FBNEJkLElBQUksQ0FBQ3VCLENBQUwsQ0FBTyxxREFBUCxDQUE1QjtNQUNBO0lBQ0g7O0lBQ0QsS0FBS2pCLFdBQUwsQ0FBaUJRLE9BQWpCLEdBQTJCZCxJQUFJLENBQUN1QixDQUFMLENBQU8scURBQVAsQ0FBM0IsQ0FOeUIsQ0FPekI7O0lBQ0EsS0FBS1osWUFBTCxDQUFrQmlCLFlBQWxCLENBQStCSCxHQUEvQjtFQUNILENBM0NJO0VBNkNMSSxNQTdDSyxvQkE2Q0s7SUFDTixLQUFLbEIsWUFBTCxDQUFrQm1CLFdBQWxCO0VBQ0gsQ0EvQ0k7RUFpRExDLFNBakRLLHVCQWlETztJQUNSLEtBQUtwQixZQUFMLENBQWtCcUIsWUFBbEI7RUFDSDtBQW5ESSxDQUFUIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBpMThuID0gcmVxdWlyZSgnaTE4bicpO1xuXG5jYy5DbGFzcyh7XG4gICAgZXh0ZW5kczogY2MuQ29tcG9uZW50LFxuXG4gICAgcHJvcGVydGllczoge1xuICAgICAgICByZW1pbmRMYWJlbDoge1xuICAgICAgICAgICAgZGVmYXVsdDogbnVsbCxcbiAgICAgICAgICAgIHR5cGU6IGNjLkxhYmVsXG4gICAgICAgIH0sXG4gICAgICAgIGlucHV0VXJsQm94OiB7XG4gICAgICAgICAgICBkZWZhdWx0OiBudWxsLFxuICAgICAgICAgICAgdHlwZTogY2MuRWRpdEJveFxuICAgICAgICB9LFxuICAgICAgICBfYXVkaW9QbGF5ZXI6IG51bGwsXG4gICAgICAgIF9hdWRpb1VybDogJ2h0dHA6Ly90b29scy5pdGhhcmJvcnMuY29tL2NocmlzdG1hcy9yZXMvc291bmRzL3NzLm1wMycsXG4gICAgfSxcblxuICAgIG9uTG9hZCAoKSB7XG4gICAgICAgIHRoaXMucmVtaW5kTGFiZWwudGV4dEtleSA9ICcnO1xuICAgICAgICB0aGlzLl9hdWRpb1BsYXllciA9IHRoaXMubm9kZS5nZXRDb21wb25lbnQoJ0F1ZGlvQ3RybCcpO1xuICAgIH0sXG5cbiAgICBzdGFydExvYWQgKCkge1xuICAgICAgICAvLyBzZXQgdXJsXG4gICAgICAgIHRoaXMuX2F1ZGlvVXJsID0gdGhpcy5pbnB1dFVybEJveC5zdHJpbmc7XG4gICAgICAgIC8vIGRvd25sb2FkIGF1ZGlvXG4gICAgICAgIGlmICh0aGlzLl9hdWRpb1VybCkge1xuICAgICAgICAgICAgY2MuYXNzZXRNYW5hZ2VyLmxvYWRSZW1vdGUodGhpcy5fYXVkaW9VcmwsIHRoaXMuYXVkaW9Mb2FkQ29tcGxldGUuYmluZCh0aGlzKSk7XG4gICAgICAgICAgICB0aGlzLnJlbWluZExhYmVsLnRleHRLZXkgPSBpMThuLnQoJ2Nhc2VzLzA1X3NjcmlwdGluZy8xMV9uZXR3b3JrL2Rvd25sb2FkLXdlYi5maXJlLjInKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMucmVtaW5kTGFiZWwudGV4dEtleSA9IGkxOG4udCgnY2FzZXMvMDVfc2NyaXB0aW5nLzExX25ldHdvcmsvZG93bmxvYWQtd2ViLmZpcmUuMTAnKTtcbiAgICAgICAgfVxuICAgIH0sXG5cbiAgICBhdWRpb0xvYWRDb21wbGV0ZSAoZXJyLCByZXMpIHtcbiAgICAgICAgaWYgKGVyciB8fCAhcmVzKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhlcnIpO1xuICAgICAgICAgICAgdGhpcy5yZW1pbmRMYWJlbC50ZXh0S2V5ID0gIGkxOG4udCgnY2FzZXMvMDVfc2NyaXB0aW5nLzExX25ldHdvcmsvZG93bmxvYWQtd2ViLmZpcmUuNS4xJyk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5yZW1pbmRMYWJlbC50ZXh0S2V5ID0gaTE4bi50KCdjYXNlcy8wNV9zY3JpcHRpbmcvMTFfbmV0d29yay9kb3dubG9hZC13ZWIuZmlyZS40LjEnKTtcbiAgICAgICAgLy8gcmV0dXJuIGJhY2sgYSBBdWRpb0NsaXBcbiAgICAgICAgdGhpcy5fYXVkaW9QbGF5ZXIuc2V0QXVkaW9UYXNrKHJlcyk7XG4gICAgfSxcblxuICAgIHVwZGF0ZSAoKSB7XG4gICAgICAgIHRoaXMuX2F1ZGlvUGxheWVyLmN1cnJlbnRUaW1lKCk7XG4gICAgfSxcblxuICAgIG9uRGlzYWJsZSgpIHtcbiAgICAgICAgdGhpcy5fYXVkaW9QbGF5ZXIuc3RvcEFsbEF1ZGlvKCk7XG4gICAgfVxufSk7XG4iXX0=