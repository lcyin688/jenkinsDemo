window.boot = function () {
    var settings = window._CCSettings;
    window._CCSettings = undefined;
    var onProgress = null;

    var RESOURCES = cc.AssetManager.BuiltinBundleName.RESOURCES;
    var INTERNAL = cc.AssetManager.BuiltinBundleName.INTERNAL;
    var MAIN = cc.AssetManager.BuiltinBundleName.MAIN;
    function setLoadingDisplay() {
        // Loading splash scene
        var splash = document.getElementById('splash');
        onProgress = function (finish, total) {
            var percent = finish / total;
            setSplashProgress(0.8 + 0.05 * percent * Math.random());
        };
        splash.style.display = 'block';

        var onLaunch = function (scene) {
            if (scene.name != 'Main') {
                splash.style.display = 'none';
                cc.director.off(cc.Director.EVENT_AFTER_SCENE_LAUNCH, onLaunch);
            }
        }
        cc.director.on(cc.Director.EVENT_AFTER_SCENE_LAUNCH, onLaunch);

        var onLoadProgress = function (msg) {
            if (!(msg && typeof msg.percent == 'number' && !isNaN(msg.percent) && msg.bundleName == 'launcher')) {
                return;
            }
            setSplashProgress(0.9 + 0.1 * msg.percent);
            if (msg.percent == 1) {
                setSplashProgress(1);
                cc.director.off(we.core.EventName.LOAD_PROGRESS, onLoadProgress);
            }
        };
        cc.director.on(we.core.EventName.LOAD_PROGRESS, onLoadProgress);
    }

    var onStart = function () {
        cc.view.enableRetina(true);
        cc.view.resizeWithBrowserSize(true);

        if (cc.sys.isBrowser) {
            setLoadingDisplay();
        }

        if (cc.sys.isMobile) {
            if (settings.orientation === 'landscape') {
                cc.view.setOrientation(cc.macro.ORIENTATION_LANDSCAPE);
            } else if (settings.orientation === 'portrait') {
                cc.view.setOrientation(cc.macro.ORIENTATION_PORTRAIT);
            }

            var nofull = window.location.search.substring(1).match(/(^|&)nofull=([^&]*)(&|$)/);
            nofull = nofull ? decodeURIComponent(nofull[2]) : '';
            cc.view.enableAutoFullScreen(nofull === '1' ? false : true);
        }

        var launchScene = settings.launchScene;
        var bundle = cc.assetManager.bundles.find(function (b) {
            return b.getSceneInfo(launchScene);
        });

        bundle.loadScene(launchScene, null, onProgress, function (err, scene) {
            if (!err) {
                cc.director.runSceneImmediate(scene);
                if (cc.sys.isBrowser) {
                    // show canvas
                    var canvas = document.getElementById('GameCanvas');
                    canvas.style.visibility = '';
                    var div = document.getElementById('GameDiv');
                    if (div) {
                        div.style.backgroundImage = '';
                    }
                }
            }
        });
    };

    var option = {
        id: 'GameCanvas',
        debugMode: settings.debug ? cc.debug.DebugMode.INFO : cc.debug.DebugMode.ERROR,
        showFPS: settings.debug,
        frameRate: 60,
        groupList: settings.groupList,
        collisionMatrix: settings.collisionMatrix,
    };

    cc.assetManager.init({
        bundleVers: settings.bundleVers,
        remoteBundles: settings.remoteBundles,
        server: settings.server
    });

    var bundleRoot = [INTERNAL];
    settings.hasResourcesBundle && bundleRoot.push(RESOURCES);
    bundleRoot.push(MAIN);

    var count = 0;
    function cb(err) {
        if (err) return console.error(err.message, err.stack);
        count++;
        if (count === bundleRoot.length + 1) {
            cc.game.run(option, onStart);
        }
        var percent = count / (bundleRoot.length + 1);
        setSplashProgress(0.8 + 0.05 * percent * Math.random());
    }

    cc.assetManager.loadScript(settings.jsList.map(function (x) { return 'src/' + x; }), cb);

    for (var i = 0; i < bundleRoot.length; i++) {
        cc.assetManager.loadBundle(bundleRoot[i], cb);
    }
};
