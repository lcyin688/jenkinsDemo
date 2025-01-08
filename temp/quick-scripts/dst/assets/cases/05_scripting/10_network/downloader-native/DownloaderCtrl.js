
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/cases/05_scripting/10_network/downloader-native/DownloaderCtrl.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '354a9KeL3pPRKzLyRBzHqyl', 'DownloaderCtrl');
// cases/05_scripting/10_network/downloader-native/DownloaderCtrl.js

"use strict";

cc.Class({
  "extends": cc.Component,
  properties: {
    label: cc.Label,
    sprite: cc.Sprite,
    imgUrl: "https://download.cocos.com/test-case/logo.png",
    txtUrl: "https://download.cocos.com/test-case/LICENSE.md",
    tempImgUrl: "https://www.cocos.com/wp-content/uploads/2018/03/%E9%BB%98%E8%AE%A4%E6%A0%87%E9%A2%98_%E5%85%AC%E4%BC%97%E5%8F%B7%E5%BA%95%E9%83%A8%E4%BA%8C%E7%BB%B4%E7%A0%81_2018.03.08.png",
    audioUrl: "https://download.cocos.com/test-case/ss.mp3",
    _downloader: null,
    _imgTask: null,
    _txtTask: null,
    _audioTask: null,
    _storagePath: "",
    _inited: false,
    _downloading: false
  },
  // use this for initialization
  onLoad: function onLoad() {
    if (!CC_JSB) {
      this.label.string = 'Downloader is a NATIVE ONLY feature.';
      return;
    }

    this._downloader = new jsb.Downloader();

    this._downloader.setOnFileTaskSuccess(this.onSucceed.bind(this));

    this._downloader.setOnTaskProgress(this.onProgress.bind(this));

    this._downloader.setOnTaskError(this.onError.bind(this));

    this._storagePath = jsb.fileUtils.getWritablePath() + '/example-cases/downloader/';
    this._inited = jsb.fileUtils.createDirectory(this._storagePath);

    if (!this._inited) {
      this.label.string = 'Failed to create storage path, downloader won\'t work correctly';
    }

    this._audioID = -1;
  },
  onSucceed: function onSucceed(task) {
    var _this = this;

    if (this._audioID !== -1) {
      cc.audioEngine.stop(this._audioID);
    }

    switch (task.requestURL) {
      case this.imgUrl:
        cc.assetManager.loadRemote(task.storagePath, function (err, tex) {
          _this.sprite.spriteFrame = new cc.SpriteFrame(tex);
          _this.sprite.node.active = true;
          _this.label.node.active = false;
        });
        break;

      case this.txtUrl:
        var content = jsb.fileUtils.getStringFromFile(task.storagePath);
        this.sprite.node.active = false;
        this.label.node.active = true;
        this.label.string = content.substr(0, 350);
        break;

      case this.audioUrl:
        this.sprite.node.active = false;
        this.label.node.active = true;
        this.label.string = 'Audio Download Complete.';
        cc.assetManager.loadRemote(task.storagePath, function (err, clip) {
          _this._audioID = cc.audioEngine.play(clip);
        });
    } // download success


    this._downloading = false;
  },
  onProgress: function onProgress(task, bytesReceived, totalBytesReceived, totalBytesExpected) {},
  onError: function onError(task, errorCode, errorCodeInternal, errorStr) {
    this._downloading = false;
    this.sprite.node.active = false;
    this.label.node.active = true;
    this.label.string = 'Failed to download file (' + task.requestURL + '): ' + errorStr + '(' + errorCode + ')';
  },
  downloadImg: function downloadImg() {
    if (!this.imgUrl || !this._inited || this._downloading) {
      return;
    }

    this.sprite.node.active = false;
    this.label.node.active = true;
    this.label.string = 'Downloading image';
    this._imgTask = this._downloader.createDownloadFileTask(this.imgUrl, this._storagePath + 'download1.png');
    this._downloading = true;
  },
  loadImg: function loadImg() {
    var _this2 = this;

    if (!this.tempImgUrl || !this._inited || this._downloading) {
      return;
    }

    this._downloading = true;
    this.label.string = 'Downloading image (mem)';
    cc.assetManager.loadRemote(this.tempImgUrl, function (error, tex) {
      _this2._downloading = false;

      if (error) {
        console.log("Load remote image failed: " + error);
      } else {
        _this2.sprite.spriteFrame = new cc.SpriteFrame(tex);
        _this2.sprite.node.active = true;
        _this2.label.node.active = false;
        cc.audioEngine.stop(_this2._audioID);
      }
    });
  },
  downloadTxt: function downloadTxt() {
    if (!this.txtUrl || !this._inited || this._downloading) {
      return;
    }

    this.label.node.active = true;
    this.sprite.node.active = false;
    this.label.string = 'Downloading Text';
    this._downloading = true;
    this._txtTask = this._downloader.createDownloadFileTask(this.txtUrl, this._storagePath + 'imagine.txt');
  },
  downloadAudio: function downloadAudio() {
    if (!this.audioUrl || !this._inited || this._downloading) {
      return;
    }

    this.sprite.node.active = false;
    this.label.node.active = true;
    this.label.string = 'Downloading Audio';

    if (this._audioID !== -1) {
      cc.audioEngine.stop(this._audioID);
    }

    this._downloading = true;
    this._audioTask = this._downloader.createDownloadFileTask(this.audioUrl, this._storagePath + 'audioTest.mp3');
  },
  onDisable: function onDisable() {
    cc.audioEngine.stop(this._audioID);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9jYXNlcy8wNV9zY3JpcHRpbmcvMTBfbmV0d29yay9kb3dubG9hZGVyLW5hdGl2ZS9Eb3dubG9hZGVyQ3RybC5qcyJdLCJuYW1lcyI6WyJjYyIsIkNsYXNzIiwiQ29tcG9uZW50IiwicHJvcGVydGllcyIsImxhYmVsIiwiTGFiZWwiLCJzcHJpdGUiLCJTcHJpdGUiLCJpbWdVcmwiLCJ0eHRVcmwiLCJ0ZW1wSW1nVXJsIiwiYXVkaW9VcmwiLCJfZG93bmxvYWRlciIsIl9pbWdUYXNrIiwiX3R4dFRhc2siLCJfYXVkaW9UYXNrIiwiX3N0b3JhZ2VQYXRoIiwiX2luaXRlZCIsIl9kb3dubG9hZGluZyIsIm9uTG9hZCIsIkNDX0pTQiIsInN0cmluZyIsImpzYiIsIkRvd25sb2FkZXIiLCJzZXRPbkZpbGVUYXNrU3VjY2VzcyIsIm9uU3VjY2VlZCIsImJpbmQiLCJzZXRPblRhc2tQcm9ncmVzcyIsIm9uUHJvZ3Jlc3MiLCJzZXRPblRhc2tFcnJvciIsIm9uRXJyb3IiLCJmaWxlVXRpbHMiLCJnZXRXcml0YWJsZVBhdGgiLCJjcmVhdGVEaXJlY3RvcnkiLCJfYXVkaW9JRCIsInRhc2siLCJhdWRpb0VuZ2luZSIsInN0b3AiLCJyZXF1ZXN0VVJMIiwiYXNzZXRNYW5hZ2VyIiwibG9hZFJlbW90ZSIsInN0b3JhZ2VQYXRoIiwiZXJyIiwidGV4Iiwic3ByaXRlRnJhbWUiLCJTcHJpdGVGcmFtZSIsIm5vZGUiLCJhY3RpdmUiLCJjb250ZW50IiwiZ2V0U3RyaW5nRnJvbUZpbGUiLCJzdWJzdHIiLCJjbGlwIiwicGxheSIsImJ5dGVzUmVjZWl2ZWQiLCJ0b3RhbEJ5dGVzUmVjZWl2ZWQiLCJ0b3RhbEJ5dGVzRXhwZWN0ZWQiLCJlcnJvckNvZGUiLCJlcnJvckNvZGVJbnRlcm5hbCIsImVycm9yU3RyIiwiZG93bmxvYWRJbWciLCJjcmVhdGVEb3dubG9hZEZpbGVUYXNrIiwibG9hZEltZyIsImVycm9yIiwiY29uc29sZSIsImxvZyIsImRvd25sb2FkVHh0Iiwi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RUFBMEI7TUFDdEJsQyxFQUFFLENBQUNvQyxXQUFILENBQWVDLElBQWYsQ0FBb0IsS0FBS0gsUUFBekI7SUFDSDs7SUFDRCxLQUFLaEIsWUFBTCxHQUFvQixJQUFwQjtJQUNBLEtBQUtILFVBQUwsR0FBa0IsS0FBS0gsV0FBTCxDQUFpQmdELHNCQUFqQixDQUF3QyxLQUFLakQsUUFBN0MsRUFBdUQsS0FBS0ssWUFBTCxHQUFvQixlQUEzRSxDQUFsQjtFQUNILENBdklJO0VBeUlMbUQsU0F6SUssdUJBeUlRO0lBQ1RuRSxFQUFFLENBQUNvQyxXQUFILENBQWVDLElBQWYsQ0FBb0IsS0FBS0gsUUFBekI7RUFDSDtBQTNJSSxDQUFUIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJjYy5DbGFzcyh7XG4gICAgZXh0ZW5kczogY2MuQ29tcG9uZW50LFxuXG4gICAgcHJvcGVydGllczoge1xuICAgICAgICBsYWJlbDogY2MuTGFiZWwsXG4gICAgICAgIHNwcml0ZTogY2MuU3ByaXRlLFxuICAgICAgICBpbWdVcmw6IFwiaHR0cHM6Ly9kb3dubG9hZC5jb2Nvcy5jb20vdGVzdC1jYXNlL2xvZ28ucG5nXCIsXG4gICAgICAgIHR4dFVybDogXCJodHRwczovL2Rvd25sb2FkLmNvY29zLmNvbS90ZXN0LWNhc2UvTElDRU5TRS5tZFwiLFxuICAgICAgICB0ZW1wSW1nVXJsOiBcImh0dHBzOi8vd3d3LmNvY29zLmNvbS93cC1jb250ZW50L3VwbG9hZHMvMjAxOC8wMy8lRTklQkIlOTglRTglQUUlQTQlRTYlQTAlODclRTklQTIlOThfJUU1JTg1JUFDJUU0JUJDJTk3JUU1JThGJUI3JUU1JUJBJTk1JUU5JTgzJUE4JUU0JUJBJThDJUU3JUJCJUI0JUU3JUEwJTgxXzIwMTguMDMuMDgucG5nXCIsXG4gICAgICAgIGF1ZGlvVXJsOiBcImh0dHBzOi8vZG93bmxvYWQuY29jb3MuY29tL3Rlc3QtY2FzZS9zcy5tcDNcIixcbiAgICAgICAgX2Rvd25sb2FkZXI6IG51bGwsXG4gICAgICAgIF9pbWdUYXNrOiBudWxsLFxuICAgICAgICBfdHh0VGFzazogbnVsbCxcbiAgICAgICAgX2F1ZGlvVGFzazogbnVsbCxcbiAgICAgICAgX3N0b3JhZ2VQYXRoOiBcIlwiLFxuICAgICAgICBfaW5pdGVkOiBmYWxzZSxcbiAgICAgICAgX2Rvd25sb2FkaW5nOiBmYWxzZVxuICAgIH0sXG5cblxuICAgIC8vIHVzZSB0aGlzIGZvciBpbml0aWFsaXphdGlvblxuICAgIG9uTG9hZCAoKSB7XG4gICAgICAgIGlmICghQ0NfSlNCKSB7XG4gICAgICAgICAgICB0aGlzLmxhYmVsLnN0cmluZyA9ICdEb3dubG9hZGVyIGlzIGEgTkFUSVZFIE9OTFkgZmVhdHVyZS4nO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5fZG93bmxvYWRlciA9IG5ldyBqc2IuRG93bmxvYWRlcigpO1xuICAgICAgICB0aGlzLl9kb3dubG9hZGVyLnNldE9uRmlsZVRhc2tTdWNjZXNzKHRoaXMub25TdWNjZWVkLmJpbmQodGhpcykpO1xuICAgICAgICB0aGlzLl9kb3dubG9hZGVyLnNldE9uVGFza1Byb2dyZXNzKHRoaXMub25Qcm9ncmVzcy5iaW5kKHRoaXMpKTtcbiAgICAgICAgdGhpcy5fZG93bmxvYWRlci5zZXRPblRhc2tFcnJvcih0aGlzLm9uRXJyb3IuYmluZCh0aGlzKSk7XG4gICAgICAgIHRoaXMuX3N0b3JhZ2VQYXRoID0ganNiLmZpbGVVdGlscy5nZXRXcml0YWJsZVBhdGgoKSArICcvZXhhbXBsZS1jYXNlcy9kb3dubG9hZGVyLyc7XG4gICAgICAgIHRoaXMuX2luaXRlZCA9IGpzYi5maWxlVXRpbHMuY3JlYXRlRGlyZWN0b3J5KHRoaXMuX3N0b3JhZ2VQYXRoKTtcbiAgICAgICAgaWYgKCF0aGlzLl9pbml0ZWQpIHtcbiAgICAgICAgICAgIHRoaXMubGFiZWwuc3RyaW5nID0gJ0ZhaWxlZCB0byBjcmVhdGUgc3RvcmFnZSBwYXRoLCBkb3dubG9hZGVyIHdvblxcJ3Qgd29yayBjb3JyZWN0bHknO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuX2F1ZGlvSUQgPSAtMTtcbiAgICB9LFxuXG4gICAgb25TdWNjZWVkICh0YXNrKSB7XG4gICAgICAgIGlmICh0aGlzLl9hdWRpb0lEICE9PSAtMSkge1xuICAgICAgICAgICAgY2MuYXVkaW9FbmdpbmUuc3RvcCh0aGlzLl9hdWRpb0lEKTtcbiAgICAgICAgfVxuICAgICAgICBzd2l0Y2ggKHRhc2sucmVxdWVzdFVSTCkge1xuICAgICAgICBjYXNlIHRoaXMuaW1nVXJsOlxuICAgICAgICAgICAgY2MuYXNzZXRNYW5hZ2VyLmxvYWRSZW1vdGUodGFzay5zdG9yYWdlUGF0aCwgKGVyciwgdGV4KSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5zcHJpdGUuc3ByaXRlRnJhbWUgPSBuZXcgY2MuU3ByaXRlRnJhbWUodGV4KTtcbiAgICAgICAgICAgICAgICB0aGlzLnNwcml0ZS5ub2RlLmFjdGl2ZSA9IHRydWU7XG4gICAgICAgICAgICAgICAgdGhpcy5sYWJlbC5ub2RlLmFjdGl2ZSA9IGZhbHNlO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSB0aGlzLnR4dFVybDpcbiAgICAgICAgICAgIGxldCBjb250ZW50ID0ganNiLmZpbGVVdGlscy5nZXRTdHJpbmdGcm9tRmlsZSh0YXNrLnN0b3JhZ2VQYXRoKTtcbiAgICAgICAgICAgIHRoaXMuc3ByaXRlLm5vZGUuYWN0aXZlID0gZmFsc2U7XG4gICAgICAgICAgICB0aGlzLmxhYmVsLm5vZGUuYWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgICAgIHRoaXMubGFiZWwuc3RyaW5nID0gY29udGVudC5zdWJzdHIoMCwgMzUwKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIHRoaXMuYXVkaW9Vcmw6XG4gICAgICAgICAgICB0aGlzLnNwcml0ZS5ub2RlLmFjdGl2ZSA9IGZhbHNlO1xuICAgICAgICAgICAgdGhpcy5sYWJlbC5ub2RlLmFjdGl2ZSA9IHRydWU7XG4gICAgICAgICAgICB0aGlzLmxhYmVsLnN0cmluZyA9ICdBdWRpbyBEb3dubG9hZCBDb21wbGV0ZS4nO1xuICAgICAgICAgICAgY2MuYXNzZXRNYW5hZ2VyLmxvYWRSZW1vdGUodGFzay5zdG9yYWdlUGF0aCwgKGVyciwgY2xpcCkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMuX2F1ZGlvSUQgPSBjYy5hdWRpb0VuZ2luZS5wbGF5KGNsaXApO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgLy8gZG93bmxvYWQgc3VjY2Vzc1xuICAgICAgICB0aGlzLl9kb3dubG9hZGluZyA9IGZhbHNlO1xuICAgIH0sXG5cbiAgICBvblByb2dyZXNzICh0YXNrLCBieXRlc1JlY2VpdmVkLCB0b3RhbEJ5dGVzUmVjZWl2ZWQsIHRvdGFsQnl0ZXNFeHBlY3RlZCkge1xuXG4gICAgfSxcblxuICAgIG9uRXJyb3IgKHRhc2ssIGVycm9yQ29kZSwgZXJyb3JDb2RlSW50ZXJuYWwsIGVycm9yU3RyKSB7XG4gICAgICAgIHRoaXMuX2Rvd25sb2FkaW5nID0gZmFsc2U7XG4gICAgICAgIHRoaXMuc3ByaXRlLm5vZGUuYWN0aXZlID0gZmFsc2U7XG4gICAgICAgIHRoaXMubGFiZWwubm9kZS5hY3RpdmUgPSB0cnVlO1xuICAgICAgICB0aGlzLmxhYmVsLnN0cmluZyA9ICdGYWlsZWQgdG8gZG93bmxvYWQgZmlsZSAoJyArIHRhc2sucmVxdWVzdFVSTCArICcpOiAnICsgZXJyb3JTdHIgKyAnKCcgKyBlcnJvckNvZGUgKyAnKSc7XG4gICAgfSxcblxuICAgIGRvd25sb2FkSW1nICgpIHtcbiAgICAgICAgaWYgKCF0aGlzLmltZ1VybCB8fCAhdGhpcy5faW5pdGVkIHx8IHRoaXMuX2Rvd25sb2FkaW5nKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5zcHJpdGUubm9kZS5hY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5sYWJlbC5ub2RlLmFjdGl2ZSA9IHRydWU7XG4gICAgICAgIHRoaXMubGFiZWwuc3RyaW5nID0gJ0Rvd25sb2FkaW5nIGltYWdlJztcbiAgICAgICAgdGhpcy5faW1nVGFzayA9IHRoaXMuX2Rvd25sb2FkZXIuY3JlYXRlRG93bmxvYWRGaWxlVGFzayh0aGlzLmltZ1VybCwgdGhpcy5fc3RvcmFnZVBhdGggKyAnZG93bmxvYWQxLnBuZycpO1xuICAgICAgICB0aGlzLl9kb3dubG9hZGluZyA9IHRydWU7XG4gICAgfSxcblxuICAgIGxvYWRJbWcgKCkge1xuICAgICAgICBpZiAoIXRoaXMudGVtcEltZ1VybCB8fCAhdGhpcy5faW5pdGVkIHx8IHRoaXMuX2Rvd25sb2FkaW5nKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLl9kb3dubG9hZGluZyA9IHRydWU7XG4gICAgICAgIHRoaXMubGFiZWwuc3RyaW5nID0gJ0Rvd25sb2FkaW5nIGltYWdlIChtZW0pJztcbiAgICAgICAgY2MuYXNzZXRNYW5hZ2VyLmxvYWRSZW1vdGUodGhpcy50ZW1wSW1nVXJsLCAoZXJyb3IsIHRleCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5fZG93bmxvYWRpbmcgPSBmYWxzZTtcbiAgICAgICAgICAgIGlmIChlcnJvcikge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiTG9hZCByZW1vdGUgaW1hZ2UgZmFpbGVkOiBcIiArIGVycm9yKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIHRoaXMuc3ByaXRlLnNwcml0ZUZyYW1lID0gbmV3IGNjLlNwcml0ZUZyYW1lKHRleCk7XG4gICAgICAgICAgICAgICAgdGhpcy5zcHJpdGUubm9kZS5hY3RpdmUgPSB0cnVlO1xuICAgICAgICAgICAgICAgIHRoaXMubGFiZWwubm9kZS5hY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICBjYy5hdWRpb0VuZ2luZS5zdG9wKHRoaXMuX2F1ZGlvSUQpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9LFxuXG4gICAgZG93bmxvYWRUeHQgKCkge1xuICAgICAgICBpZiAoIXRoaXMudHh0VXJsIHx8ICF0aGlzLl9pbml0ZWQgfHwgdGhpcy5fZG93bmxvYWRpbmcpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmxhYmVsLm5vZGUuYWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5zcHJpdGUubm9kZS5hY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5sYWJlbC5zdHJpbmcgPSAnRG93bmxvYWRpbmcgVGV4dCc7XG4gICAgICAgIHRoaXMuX2Rvd25sb2FkaW5nID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5fdHh0VGFzayA9IHRoaXMuX2Rvd25sb2FkZXIuY3JlYXRlRG93bmxvYWRGaWxlVGFzayh0aGlzLnR4dFVybCwgdGhpcy5fc3RvcmFnZVBhdGggKyAnaW1hZ2luZS50eHQnKTtcbiAgICB9LFxuXG4gICAgZG93bmxvYWRBdWRpbyAoKSB7XG4gICAgICAgIGlmICghdGhpcy5hdWRpb1VybCB8fCAhdGhpcy5faW5pdGVkIHx8IHRoaXMuX2Rvd25sb2FkaW5nKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5zcHJpdGUubm9kZS5hY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5sYWJlbC5ub2RlLmFjdGl2ZSA9IHRydWU7XG4gICAgICAgIHRoaXMubGFiZWwuc3RyaW5nID0gJ0Rvd25sb2FkaW5nIEF1ZGlvJztcbiAgICAgICAgaWYgKHRoaXMuX2F1ZGlvSUQgIT09IC0xKSB7XG4gICAgICAgICAgICBjYy5hdWRpb0VuZ2luZS5zdG9wKHRoaXMuX2F1ZGlvSUQpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuX2Rvd25sb2FkaW5nID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5fYXVkaW9UYXNrID0gdGhpcy5fZG93bmxvYWRlci5jcmVhdGVEb3dubG9hZEZpbGVUYXNrKHRoaXMuYXVkaW9VcmwsIHRoaXMuX3N0b3JhZ2VQYXRoICsgJ2F1ZGlvVGVzdC5tcDMnKTtcbiAgICB9LFxuXG4gICAgb25EaXNhYmxlICgpIHtcbiAgICAgICAgY2MuYXVkaW9FbmdpbmUuc3RvcCh0aGlzLl9hdWRpb0lEKTtcbiAgICB9XG5cbn0pO1xuIl19