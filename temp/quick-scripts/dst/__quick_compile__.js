
(function () {
var scripts = [{"deps":{"./assets/i18n/LabelLocalized":1,"./assets/cases/07_capture_texture/capture_to_web":2,"./assets/cases/asset_bundle/TestBundle/test-first":3,"./assets/cases/dragonbones/loadDragonBones/loadDragonBonesCtrl":4,"./assets/cases/spine/LoadSpine/LoadSpine":5,"./assets/cases/02_ui/04_progressbar/ProgressBar/ProgressBarCtrl":6,"./assets/cases/02_ui/09_videoplayer/StayOnBottom/stayOnBottomCtrl":7,"./assets/cases/02_ui/02_label/LabelAttributes":8,"./assets/cases/02_ui/06_layout/Script/LayoutResizeContainerCtrl":9,"./assets/cases/graphics/demo/draw-line":10,"./assets/cases/02_ui/08_editBox/EditBox/EditBoxEvent":11,"./assets/cases/02_ui/12_slider/Slider/SliderCtrl":12,"./assets/cases/02_ui/14_pageView/PageView/PageViewCtrl":13,"./assets/cases/02_ui/03_button/SimpleButton/SimpleButtonCtrl":14,"./assets/cases/02_ui/15_mask/Mask/MaskCtrl":15,"./assets/cases/03_gameplay/01_player_control/OnTouchCtrl/OnTouchCtrl":16,"./assets/cases/03_gameplay/02_actions/RepeatAction/RepeatAction":17,"./assets/cases/03_gameplay/03_animation/AnimateCustomProperty/AnimateCustomPropertyCtrl":18,"./assets/cases/05_scripting/01_properties/ReferenceTypeProperties":19,"./assets/cases/05_scripting/03_events/BasicEventTest/BasicEventCtrl":20,"./assets/cases/05_scripting/10_network/downloader-native/DownloaderCtrl":21,"./assets/cases/3d_physics/scripts/enable-shape":22,"./assets/cases/06_rendering/custom_material/custom_material":23,"./assets/cases/05_scripting/06_asset_loading/AssetLoading/AssetLoading":24,"./assets/cases/collider/Platform/follow":25,"./assets/cases/motionStreak/MotionStreak/MotionStreakCtrl":26,"./assets/scripts/ComponentUtils/AudioCtrl":27,"./assets/cases/native_call/Native_Call/NativeCallCtrl":28,"./assets/main menu/StorageUtil":29,"./assets/migration/use_reversed_rotateBy":30,"./assets/libs/chroma":31,"./assets/cases/04_audio/AudioEngineControl":32,"./assets/cases/3d-particle/ShowTips":33,"./assets/cases/3d/3d-support-info":34,"./assets/cases/camera/minimap-with-rendertexture":35,"./assets/cases/graphics/example/ellipse":36,"./assets/cases/tiledmap/Puzzle":37,"./assets/cases/02_ui/05_listView/Item":38,"./assets/cases/02_ui/10_webview/WebviewCtrl":39,"./assets/cases/02_ui/11_richtext/RichText":40,"./assets/cases/02_ui/13_toggle/checkbox":41,"./assets/cases/02_ui/03_button/ButtonTransition/ButtonTransition":42,"./assets/cases/03_gameplay/03_animation/AnimationCallback":43,"./assets/cases/03_gameplay/tween/tween-demo":44,"./assets/cases/03_gameplay/02_actions/MoveAction/MoveAction":45,"./assets/cases/03_gameplay/01_player_control/OnMultiTouch/OnMultiTouchCtrl":46,"./assets/cases/03_gameplay/01_player_control/DeviceMotion/DeviceMotionCtrl":47,"./assets/cases/03_gameplay/02_actions/SimpleAction/SimpleAction":48,"./assets/cases/03_gameplay/02_actions/Rotation/RotationCtrl":49,"./assets/cases/03_gameplay/02_actions/SequenceAction/SequenceAction":50,"./assets/cases/03_gameplay/01_player_control/KeyboardInput/SimpleKeyboardMovement":51,"./assets/cases/05_scripting/02_prefab/PopulatePrefab":52,"./assets/cases/05_scripting/04_scheduler/scheduleCallbacks":53,"./assets/cases/05_scripting/07_module/LoadModuleCtrl":54,"./assets/cases/05_scripting/05_destroy_self/DestroySelf":55,"./assets/cases/05_scripting/08_singleton/Singleton":56,"./assets/cases/05_scripting/11_pool/PoolHandler":57,"./assets/cases/05_scripting/09_loadingBar/LoadingBarCtrl":58,"./assets/cases/05_scripting/10_network/downloader-web/downloader-audio":59,"./assets/cases/05_scripting/06_asset_loading/LoadRes/LoadRes_example":60,"./assets/cases/05_scripting/06_asset_loading/PreloadAssets/PreloadAssets":61,"./assets/cases/05_scripting/06_asset_loading/LoadResDir/loadResDir_example":62,"./assets/cases/05_scripting/06_asset_loading/DeferredLoading/DeferredLoading":63,"./assets/cases/collider/Tag/TagColliderListener":64,"./assets/cases/collider/Shape/ShowCollider":65,"./assets/cases/collider/Shooter/Bullet":66,"./assets/cases/collider/Hittest/Hittest":67,"./assets/cases/collider/Utils/SimpleMotion":68,"./assets/cases/collider/Category/ColliderListener":69,"./assets/scripts/Global/Helpers":70,"./assets/cases/07_capture_texture/capture_to_wechat":71,"./assets/scripts/Tips/TipsManager":72,"./assets/main menu/ShowSubMenu":73,"./assets/i18n/polyglot":74,"./assets/cases/07_capture_texture/textureRenderUtils":75,"./assets/cases/3d-particle/CameraController":76,"./assets/cases/3d/rotate":77,"./assets/main menu/Menu":78,"./assets/cases/3d/mesh-texture":79,"./assets/cases/3d/mesh":80,"./assets/cases/3d/raycast":81,"./assets/cases/3d/screen-to-world-point":82,"./assets/cases/asset_bundle/asset-bundle":83,"./assets/cases/3d/3d-model":84,"./assets/cases/dragonbones/DragonBonesCollider":85,"./assets/cases/dragonbones/ReplaceSlotDisplay":86,"./assets/cases/camera/minimap-with-camera-rect":87,"./assets/cases/camera/moving-objects":88,"./assets/cases/dragonbones/DragonBonesAttach":89,"./assets/cases/graphics/RuntimeLabel":90,"./assets/cases/dragonbones/DragonBonesCtrl":91,"./assets/cases/dragonbones/DragonBonesMode":92,"./assets/cases/graphics/demo/sine-waves":93,"./assets/cases/graphics/example/linejoin":94,"./assets/cases/graphics/demo/doodle":95,"./assets/cases/3d/dynamic-load-material":96,"./assets/cases/spine/SpineCtrl":97,"./assets/cases/graphics/example/lineTo":98,"./assets/cases/graphics/example/rect":99,"./assets/cases/spine/SpineMode":100,"./assets/cases/spine/SpineAttach":101,"./assets/cases/spine/VertexEffect":102,"./assets/cases/tiledmap/TiledTile":103,"./assets/cases/spine/SpineSkin":104,"./assets/cases/spine/SpineCollider":105,"./assets/cases/tiledmap/dynamic-tiledmap":106,"./assets/cases/tiledmap/ShieldNode":107,"./assets/cases/tiledmap/ObjectGroupImage":108,"./assets/cases/02_ui/09_videoplayer/VideoPlayerCtrl":109,"./assets/cases/07_capture_texture/capture_to_native":110,"./assets/cases/3d-particle/TransformController":111,"./assets/cases/02_ui/02_label/LoadLongText":112,"./assets/cases/02_ui/05_listView/ListViewCtrl":113,"./assets/cases/graphics/example/arc":114,"./assets/cases/02_ui/08_editBox/EditBox/EditboxCtrl":115,"./assets/cases/04_audio/AudioSourceControl":116,"./assets/cases/05_scripting/01_properties/ValueTypeProperties":117,"./assets/cases/05_scripting/01_properties/MyCustomComponent":118,"./assets/cases/05_scripting/03_events/MouseEvent":119,"./assets/cases/05_scripting/03_events/TouchDragger":120,"./assets/cases/05_scripting/03_events/TouchEvent":121,"./assets/cases/05_scripting/02_prefab/MonsterPrefab":122,"./assets/cases/05_scripting/03_events/MouseDragger":123,"./assets/cases/05_scripting/07_module/Monster":124,"./assets/cases/05_scripting/03_events/CustomEvent":125,"./assets/cases/05_scripting/04_scheduler/recursiveTask":126,"./assets/cases/05_scripting/08_singleton/SingletonCtrl":127,"./assets/cases/05_scripting/03_events/OrderSwitcher":128,"./assets/cases/05_scripting/07_module/InitData":129,"./assets/cases/05_scripting/10_network/NetworkCtrl":130,"./assets/cases/05_scripting/03_events/ActionCallback":131,"./assets/cases/05_scripting/10_network/downloader-web/downloader-picture":132,"./assets/cases/05_scripting/06_asset_loading/AssetLoading/ComeBackToAssetLoad":133,"./assets/cases/05_scripting/01_properties/NodeGroupControl":134,"./assets/cases/3d_physics/scripts/move":135,"./assets/cases/3d_physics/scripts/raytest":136,"./assets/cases/3d_physics/scripts/scale":137,"./assets/cases/3d_physics/scripts/enable-rigidbody":138,"./assets/cases/05_scripting/11_pool/NodeGenerator":139,"./assets/cases/3d_physics/scripts/trigger-testing":140,"./assets/cases/3d_physics/scripts/rotatetest":141,"./assets/cases/3d_physics/scripts/impulse":142,"./assets/cases/05_scripting/06_asset_loading/PreloadAssets/BackToPreloadAssets":143,"./assets/cases/collider/Shooter/Shooter":144,"./assets/cases/collider/Platform/HeroControl":145,"./assets/cases/3d_physics/scripts/born":146,"./assets/i18n/i18n":147,"./assets/cases/collider/Utils/Wall":148,"./assets/cases/3d_physics/scripts/enable-physics3d":149,"./assets/scripts/Global/SceneList":150,"./assets/scripts/Global/Instruction":151,"./assets/scripts/ComponentUtils/SearchBlock":152,"./assets/scripts/Global/AdaptiveSprite":153,"./assets/scripts/Global/ListItem":154,"./assets/cases/collider/Utils/PlatformMotion":155,"./assets/scripts/Tips/TipsCtrl":156,"./assets/cases/01_graphics/02_particle/ToggleParticle/ParticleControl":157,"./assets/cases/3d_physics/scripts/velocity":158,"./assets/i18n/data/zh":159,"./assets/cases/03_gameplay/03_animation/AnimationEvent/AnimationEvent":160,"./assets/cases/03_gameplay/03_animation/SpriteAnimation/SheepAnimationCtrl":161,"./assets/cases/03_gameplay/03_animation/CreateClip/CreateClipCtrl":162,"./assets/cases/03_gameplay/03_animation/MoveAnimation/MoveAnimationCtrl":163,"./assets/i18n/data/en":164,"./assets/cases/03_gameplay/03_animation/CurveAnimation/CurveAnimation":165},"path":"preview-scripts/__qc_index__.js"},{"deps":{"i18n":147},"path":"preview-scripts/assets/i18n/LabelLocalized.js"},{"deps":{"./textureRenderUtils":75},"path":"preview-scripts/assets/cases/07_capture_texture/capture_to_web.js"},{"deps":{"LabelLocalized":1},"path":"preview-scripts/assets/cases/asset_bundle/TestBundle/test-first.js"},{"deps":{},"path":"preview-scripts/assets/cases/dragonbones/loadDragonBones/loadDragonBonesCtrl.js"},{"deps":{"i18n":147},"path":"preview-scripts/assets/cases/spine/LoadSpine/LoadSpine.js"},{"deps":{},"path":"preview-scripts/assets/cases/02_ui/04_progressbar/ProgressBar/ProgressBarCtrl.js"},{"deps":{},"path":"preview-scripts/assets/cases/02_ui/09_videoplayer/StayOnBottom/stayOnBottomCtrl.js"},{"deps":{},"path":"preview-scripts/assets/cases/02_ui/02_label/LabelAttributes.js"},{"deps":{},"path":"preview-scripts/assets/cases/02_ui/06_layout/Script/LayoutResizeContainerCtrl.js"},{"deps":{},"path":"preview-scripts/assets/cases/graphics/demo/draw-line.js"},{"deps":{},"path":"preview-scripts/assets/cases/02_ui/08_editBox/EditBox/EditBoxEvent.js"},{"deps":{},"path":"preview-scripts/assets/cases/02_ui/12_slider/Slider/SliderCtrl.js"},{"deps":{},"path":"preview-scripts/assets/cases/02_ui/14_pageView/PageView/PageViewCtrl.js"},{"deps":{"i18n":147},"path":"preview-scripts/assets/cases/02_ui/03_button/SimpleButton/SimpleButtonCtrl.js"},{"deps":{},"path":"preview-scripts/assets/cases/02_ui/15_mask/Mask/MaskCtrl.js"},{"deps":{"i18n":147},"path":"preview-scripts/assets/cases/03_gameplay/01_player_control/OnTouchCtrl/OnTouchCtrl.js"},{"deps":{},"path":"preview-scripts/assets/cases/03_gameplay/02_actions/RepeatAction/RepeatAction.js"},{"deps":{},"path":"preview-scripts/assets/cases/03_gameplay/03_animation/AnimateCustomProperty/AnimateCustomPropertyCtrl.js"},{"deps":{"MyCustomComponent":118},"path":"preview-scripts/assets/cases/05_scripting/01_properties/ReferenceTypeProperties.js"},{"deps":{"TipsManager":72},"path":"preview-scripts/assets/cases/05_scripting/03_events/BasicEventTest/BasicEventCtrl.js"},{"deps":{},"path":"preview-scripts/assets/cases/05_scripting/10_network/downloader-native/DownloaderCtrl.js"},{"deps":{},"path":"preview-scripts/assets/cases/3d_physics/scripts/enable-shape.js"},{"deps":{},"path":"preview-scripts/assets/cases/06_rendering/custom_material/custom_material.js"},{"deps":{"i18n":147},"path":"preview-scripts/assets/cases/05_scripting/06_asset_loading/AssetLoading/AssetLoading.js"},{"deps":{},"path":"preview-scripts/assets/cases/collider/Platform/follow.js"},{"deps":{},"path":"preview-scripts/assets/cases/motionStreak/MotionStreak/MotionStreakCtrl.js"},{"deps":{},"path":"preview-scripts/assets/scripts/ComponentUtils/AudioCtrl.js"},{"deps":{},"path":"preview-scripts/assets/cases/native_call/Native_Call/NativeCallCtrl.js"},{"deps":{},"path":"preview-scripts/assets/main menu/StorageUtil.js"},{"deps":{},"path":"preview-scripts/assets/migration/use_reversed_rotateBy.js"},{"deps":{},"path":"preview-scripts/assets/libs/chroma.js"},{"deps":{},"path":"preview-scripts/assets/cases/04_audio/AudioEngineControl.js"},{"deps":{},"path":"preview-scripts/assets/cases/3d-particle/ShowTips.js"},{"deps":{},"path":"preview-scripts/assets/cases/3d/3d-support-info.js"},{"deps":{},"path":"preview-scripts/assets/cases/camera/minimap-with-rendertexture.js"},{"deps":{},"path":"preview-scripts/assets/cases/graphics/example/ellipse.js"},{"deps":{},"path":"preview-scripts/assets/cases/tiledmap/Puzzle.js"},{"deps":{"i18n":147},"path":"preview-scripts/assets/cases/02_ui/05_listView/Item.js"},{"deps":{},"path":"preview-scripts/assets/cases/02_ui/10_webview/WebviewCtrl.js"},{"deps":{},"path":"preview-scripts/assets/cases/02_ui/11_richtext/RichText.js"},{"deps":{},"path":"preview-scripts/assets/cases/02_ui/13_toggle/checkbox.js"},{"deps":{},"path":"preview-scripts/assets/cases/02_ui/03_button/ButtonTransition/ButtonTransition.js"},{"deps":{},"path":"preview-scripts/assets/cases/03_gameplay/03_animation/AnimationCallback.js"},{"deps":{},"path":"preview-scripts/assets/cases/03_gameplay/tween/tween-demo.js"},{"deps":{},"path":"preview-scripts/assets/cases/03_gameplay/02_actions/MoveAction/MoveAction.js"},{"deps":{"../../../../scripts/Tips/TipsManager":72},"path":"preview-scripts/assets/cases/03_gameplay/01_player_control/OnMultiTouch/OnMultiTouchCtrl.js"},{"deps":{"i18n":147},"path":"preview-scripts/assets/cases/03_gameplay/01_player_control/DeviceMotion/DeviceMotionCtrl.js"},{"deps":{},"path":"preview-scripts/assets/cases/03_gameplay/02_actions/SimpleAction/SimpleAction.js"},{"deps":{},"path":"preview-scripts/assets/cases/03_gameplay/02_actions/Rotation/RotationCtrl.js"},{"deps":{},"path":"preview-scripts/assets/cases/03_gameplay/02_actions/SequenceAction/SequenceAction.js"},{"deps":{},"path":"preview-scripts/assets/cases/03_gameplay/01_player_control/KeyboardInput/SimpleKeyboardMovement.js"},{"deps":{},"path":"preview-scripts/assets/cases/05_scripting/02_prefab/PopulatePrefab.js"},{"deps":{},"path":"preview-scripts/assets/cases/05_scripting/04_scheduler/scheduleCallbacks.js"},{"deps":{"Monster":124,"InitData":129},"path":"preview-scripts/assets/cases/05_scripting/07_module/LoadModuleCtrl.js"},{"deps":{},"path":"preview-scripts/assets/cases/05_scripting/05_destroy_self/DestroySelf.js"},{"deps":{},"path":"preview-scripts/assets/cases/05_scripting/08_singleton/Singleton.js"},{"deps":{},"path":"preview-scripts/assets/cases/05_scripting/11_pool/PoolHandler.js"},{"deps":{"i18n":147},"path":"preview-scripts/assets/cases/05_scripting/09_loadingBar/LoadingBarCtrl.js"},{"deps":{"i18n":147},"path":"preview-scripts/assets/cases/05_scripting/10_network/downloader-web/downloader-audio.js"},{"deps":{},"path":"preview-scripts/assets/cases/05_scripting/06_asset_loading/LoadRes/LoadRes_example.js"},{"deps":{"../../../../i18n/i18n":147},"path":"preview-scripts/assets/cases/05_scripting/06_asset_loading/PreloadAssets/PreloadAssets.js"},{"deps":{},"path":"preview-scripts/assets/cases/05_scripting/06_asset_loading/LoadResDir/loadResDir_example.js"},{"deps":{},"path":"preview-scripts/assets/cases/05_scripting/06_asset_loading/DeferredLoading/DeferredLoading.js"},{"deps":{},"path":"preview-scripts/assets/cases/collider/Tag/TagColliderListener.js"},{"deps":{},"path":"preview-scripts/assets/cases/collider/Shape/ShowCollider.js"},{"deps":{},"path":"preview-scripts/assets/cases/collider/Shooter/Bullet.js"},{"deps":{},"path":"preview-scripts/assets/cases/collider/Hittest/Hittest.js"},{"deps":{},"path":"preview-scripts/assets/cases/collider/Utils/SimpleMotion.js"},{"deps":{},"path":"preview-scripts/assets/cases/collider/Category/ColliderListener.js"},{"deps":{},"path":"preview-scripts/assets/scripts/Global/Helpers.js"},{"deps":{"./textureRenderUtils":75},"path":"preview-scripts/assets/cases/07_capture_texture/capture_to_wechat.js"},{"deps":{},"path":"preview-scripts/assets/scripts/Tips/TipsManager.js"},{"deps":{},"path":"preview-scripts/assets/main menu/ShowSubMenu.js"},{"deps":{},"path":"preview-scripts/assets/i18n/polyglot.js"},{"deps":{},"path":"preview-scripts/assets/cases/07_capture_texture/textureRenderUtils.js"},{"deps":{},"path":"preview-scripts/assets/cases/3d-particle/CameraController.js"},{"deps":{},"path":"preview-scripts/assets/cases/3d/rotate.js"},{"deps":{"i18n":147,"SceneList":150,"TipsManager":72},"path":"preview-scripts/assets/main menu/Menu.js"},{"deps":{},"path":"preview-scripts/assets/cases/3d/mesh-texture.js"},{"deps":{"chroma":31},"path":"preview-scripts/assets/cases/3d/mesh.js"},{"deps":{},"path":"preview-scripts/assets/cases/3d/raycast.js"},{"deps":{},"path":"preview-scripts/assets/cases/3d/screen-to-world-point.js"},{"deps":{"../../i18n/i18n":147},"path":"preview-scripts/assets/cases/asset_bundle/asset-bundle.js"},{"deps":{},"path":"preview-scripts/assets/cases/3d/3d-model.js"},{"deps":{},"path":"preview-scripts/assets/cases/dragonbones/DragonBonesCollider.js"},{"deps":{},"path":"preview-scripts/assets/cases/dragonbones/ReplaceSlotDisplay.js"},{"deps":{},"path":"preview-scripts/assets/cases/camera/minimap-with-camera-rect.js"},{"deps":{},"path":"preview-scripts/assets/cases/camera/moving-objects.js"},{"deps":{},"path":"preview-scripts/assets/cases/dragonbones/DragonBonesAttach.js"},{"deps":{},"path":"preview-scripts/assets/cases/graphics/RuntimeLabel.js"},{"deps":{},"path":"preview-scripts/assets/cases/dragonbones/DragonBonesCtrl.js"},{"deps":{},"path":"preview-scripts/assets/cases/dragonbones/DragonBonesMode.js"},{"deps":{},"path":"preview-scripts/assets/cases/graphics/demo/sine-waves.js"},{"deps":{},"path":"preview-scripts/assets/cases/graphics/example/linejoin.js"},{"deps":{},"path":"preview-scripts/assets/cases/graphics/demo/doodle.js"},{"deps":{},"path":"preview-scripts/assets/cases/3d/dynamic-load-material.js"},{"deps":{},"path":"preview-scripts/assets/cases/spine/SpineCtrl.js"},{"deps":{},"path":"preview-scripts/assets/cases/graphics/example/lineTo.js"},{"deps":{},"path":"preview-scripts/assets/cases/graphics/example/rect.js"},{"deps":{},"path":"preview-scripts/assets/cases/spine/SpineMode.js"},{"deps":{},"path":"preview-scripts/assets/cases/spine/SpineAttach.js"},{"deps":{},"path":"preview-scripts/assets/cases/spine/VertexEffect.js"},{"deps":{},"path":"preview-scripts/assets/cases/tiledmap/TiledTile.js"},{"deps":{},"path":"preview-scripts/assets/cases/spine/SpineSkin.js"},{"deps":{},"path":"preview-scripts/assets/cases/spine/SpineCollider.js"},{"deps":{},"path":"preview-scripts/assets/cases/tiledmap/dynamic-tiledmap.js"},{"deps":{},"path":"preview-scripts/assets/cases/tiledmap/ShieldNode.js"},{"deps":{},"path":"preview-scripts/assets/cases/tiledmap/ObjectGroupImage.js"},{"deps":{"i18n":147,"TipsManager":72},"path":"preview-scripts/assets/cases/02_ui/09_videoplayer/VideoPlayerCtrl.js"},{"deps":{"./textureRenderUtils":75},"path":"preview-scripts/assets/cases/07_capture_texture/capture_to_native.js"},{"deps":{},"path":"preview-scripts/assets/cases/3d-particle/TransformController.js"},{"deps":{},"path":"preview-scripts/assets/cases/02_ui/02_label/LoadLongText.js"},{"deps":{},"path":"preview-scripts/assets/cases/02_ui/05_listView/ListViewCtrl.js"},{"deps":{},"path":"preview-scripts/assets/cases/graphics/example/arc.js"},{"deps":{"i18n":147},"path":"preview-scripts/assets/cases/02_ui/08_editBox/EditBox/EditboxCtrl.js"},{"deps":{},"path":"preview-scripts/assets/cases/04_audio/AudioSourceControl.js"},{"deps":{},"path":"preview-scripts/assets/cases/05_scripting/01_properties/ValueTypeProperties.js"},{"deps":{},"path":"preview-scripts/assets/cases/05_scripting/01_properties/MyCustomComponent.js"},{"deps":{},"path":"preview-scripts/assets/cases/05_scripting/03_events/MouseEvent.js"},{"deps":{},"path":"preview-scripts/assets/cases/05_scripting/03_events/TouchDragger.js"},{"deps":{},"path":"preview-scripts/assets/cases/05_scripting/03_events/TouchEvent.js"},{"deps":{"Helpers":70},"path":"preview-scripts/assets/cases/05_scripting/02_prefab/MonsterPrefab.js"},{"deps":{},"path":"preview-scripts/assets/cases/05_scripting/03_events/MouseDragger.js"},{"deps":{},"path":"preview-scripts/assets/cases/05_scripting/07_module/Monster.js"},{"deps":{},"path":"preview-scripts/assets/cases/05_scripting/03_events/CustomEvent.js"},{"deps":{"LabelLocalized":1},"path":"preview-scripts/assets/cases/05_scripting/04_scheduler/recursiveTask.js"},{"deps":{"Singleton":56},"path":"preview-scripts/assets/cases/05_scripting/08_singleton/SingletonCtrl.js"},{"deps":{},"path":"preview-scripts/assets/cases/05_scripting/03_events/OrderSwitcher.js"},{"deps":{},"path":"preview-scripts/assets/cases/05_scripting/07_module/InitData.js"},{"deps":{"i18n":147},"path":"preview-scripts/assets/cases/05_scripting/10_network/NetworkCtrl.js"},{"deps":{},"path":"preview-scripts/assets/cases/05_scripting/03_events/ActionCallback.js"},{"deps":{"i18n":147},"path":"preview-scripts/assets/cases/05_scripting/10_network/downloader-web/downloader-picture.js"},{"deps":{},"path":"preview-scripts/assets/cases/05_scripting/06_asset_loading/AssetLoading/ComeBackToAssetLoad.js"},{"deps":{},"path":"preview-scripts/assets/cases/05_scripting/01_properties/NodeGroupControl.js"},{"deps":{},"path":"preview-scripts/assets/cases/3d_physics/scripts/move.js"},{"deps":{},"path":"preview-scripts/assets/cases/3d_physics/scripts/raytest.js"},{"deps":{},"path":"preview-scripts/assets/cases/3d_physics/scripts/scale.js"},{"deps":{},"path":"preview-scripts/assets/cases/3d_physics/scripts/enable-rigidbody.js"},{"deps":{},"path":"preview-scripts/assets/cases/05_scripting/11_pool/NodeGenerator.js"},{"deps":{},"path":"preview-scripts/assets/cases/3d_physics/scripts/trigger-testing.js"},{"deps":{},"path":"preview-scripts/assets/cases/3d_physics/scripts/rotatetest.js"},{"deps":{},"path":"preview-scripts/assets/cases/3d_physics/scripts/impulse.js"},{"deps":{},"path":"preview-scripts/assets/cases/05_scripting/06_asset_loading/PreloadAssets/BackToPreloadAssets.js"},{"deps":{},"path":"preview-scripts/assets/cases/collider/Shooter/Shooter.js"},{"deps":{},"path":"preview-scripts/assets/cases/collider/Platform/HeroControl.js"},{"deps":{},"path":"preview-scripts/assets/cases/3d_physics/scripts/born.js"},{"deps":{"polyglot":74,"zh":159,"en":164},"path":"preview-scripts/assets/i18n/i18n.js"},{"deps":{},"path":"preview-scripts/assets/cases/collider/Utils/Wall.js"},{"deps":{},"path":"preview-scripts/assets/cases/3d_physics/scripts/enable-physics3d.js"},{"deps":{"TipsManager":72},"path":"preview-scripts/assets/scripts/Global/SceneList.js"},{"deps":{},"path":"preview-scripts/assets/scripts/Global/Instruction.js"},{"deps":{"TipsManager":72},"path":"preview-scripts/assets/scripts/ComponentUtils/SearchBlock.js"},{"deps":{},"path":"preview-scripts/assets/scripts/Global/AdaptiveSprite.js"},{"deps":{"TipsManager":72},"path":"preview-scripts/assets/scripts/Global/ListItem.js"},{"deps":{},"path":"preview-scripts/assets/cases/collider/Utils/PlatformMotion.js"},{"deps":{"LabelLocalized":1},"path":"preview-scripts/assets/scripts/Tips/TipsCtrl.js"},{"deps":{},"path":"preview-scripts/assets/cases/01_graphics/02_particle/ToggleParticle/ParticleControl.js"},{"deps":{},"path":"preview-scripts/assets/cases/3d_physics/scripts/velocity.js"},{"deps":{},"path":"preview-scripts/assets/i18n/data/zh.js"},{"deps":{"i18n":147},"path":"preview-scripts/assets/cases/03_gameplay/03_animation/AnimationEvent/AnimationEvent.js"},{"deps":{},"path":"preview-scripts/assets/cases/03_gameplay/03_animation/SpriteAnimation/SheepAnimationCtrl.js"},{"deps":{},"path":"preview-scripts/assets/cases/03_gameplay/03_animation/CreateClip/CreateClipCtrl.js"},{"deps":{},"path":"preview-scripts/assets/cases/03_gameplay/03_animation/MoveAnimation/MoveAnimationCtrl.js"},{"deps":{},"path":"preview-scripts/assets/i18n/data/en.js"},{"deps":{},"path":"preview-scripts/assets/cases/03_gameplay/03_animation/CurveAnimation/CurveAnimation.js"}];
var entries = ["preview-scripts/__qc_index__.js"];
var bundleScript = 'preview-scripts/__qc_bundle__.js';

/**
 * Notice: This file can not use ES6 (for IE 11)
 */
var modules = {};
var name2path = {};

// Will generated by module.js plugin
// var scripts = ${scripts};
// var entries = ${entries};
// var bundleScript = ${bundleScript};

if (typeof global === 'undefined') {
    window.global = window;
}

var isJSB = typeof jsb !== 'undefined';

function getXMLHttpRequest () {
    return window.XMLHttpRequest ? new window.XMLHttpRequest() : new ActiveXObject('MSXML2.XMLHTTP');
}

function downloadText(url, callback) {
    if (isJSB) {
        var result = jsb.fileUtils.getStringFromFile(url);
        callback(null, result);
        return;
    }

    var xhr = getXMLHttpRequest(),
        errInfo = 'Load text file failed: ' + url;
    xhr.open('GET', url, true);
    if (xhr.overrideMimeType) xhr.overrideMimeType('text\/plain; charset=utf-8');
    xhr.onload = function () {
        if (xhr.readyState === 4) {
            if (xhr.status === 200 || xhr.status === 0) {
                callback(null, xhr.responseText);
            }
            else {
                callback({status:xhr.status, errorMessage:errInfo + ', status: ' + xhr.status});
            }
        }
        else {
            callback({status:xhr.status, errorMessage:errInfo + '(wrong readyState)'});
        }
    };
    xhr.onerror = function(){
        callback({status:xhr.status, errorMessage:errInfo + '(error)'});
    };
    xhr.ontimeout = function(){
        callback({status:xhr.status, errorMessage:errInfo + '(time out)'});
    };
    xhr.send(null);
};

function loadScript (src, cb) {
    if (typeof require !== 'undefined') {
        require(src);
        return cb();
    }

    // var timer = 'load ' + src;
    // console.time(timer);

    var scriptElement = document.createElement('script');

    function done() {
        // console.timeEnd(timer);
        // deallocation immediate whatever
        scriptElement.remove();
    }

    scriptElement.onload = function () {
        done();
        cb();
    };
    scriptElement.onerror = function () {
        done();
        var error = 'Failed to load ' + src;
        console.error(error);
        cb(new Error(error));
    };
    scriptElement.setAttribute('type','text/javascript');
    scriptElement.setAttribute('charset', 'utf-8');
    scriptElement.setAttribute('src', src);

    document.head.appendChild(scriptElement);
}

function loadScripts (srcs, cb) {
    var n = srcs.length;

    srcs.forEach(function (src) {
        loadScript(src, function () {
            n--;
            if (n === 0) {
                cb();
            }
        });
    })
}

function formatPath (path) {
    let destPath = window.__quick_compile_project__.destPath;
    if (destPath) {
        let prefix = 'preview-scripts';
        if (destPath[destPath.length - 1] === '/') {
            prefix += '/';
        }
        path = path.replace(prefix, destPath);
    }
    return path;
}

window.__quick_compile_project__ = {
    destPath: '',

    registerModule: function (path, module) {
        path = formatPath(path);
        modules[path].module = module;
    },

    registerModuleFunc: function (path, func) {
        path = formatPath(path);
        modules[path].func = func;

        var sections = path.split('/');
        var name = sections[sections.length - 1];
        name = name.replace(/\.(?:js|ts|json)$/i, '');
        name2path[name] = path;
    },

    require: function (request, path) {
        var m, requestScript;

        path = formatPath(path);
        if (path) {
            m = modules[path];
            if (!m) {
                console.warn('Can not find module for path : ' + path);
                return null;
            }
        }

        if (m) {
            let depIndex = m.deps[request];
            // dependence script was excluded
            if (depIndex === -1) {
                return null;
            }
            else {
                requestScript = scripts[ m.deps[request] ];
            }
        }
        
        let requestPath = '';
        if (!requestScript) {
            // search from name2path when request is a dynamic module name
            if (/^[\w- .]*$/.test(request)) {
                requestPath = name2path[request];
            }

            if (!requestPath) {
                if (CC_JSB) {
                    return require(request);
                }
                else {
                    console.warn('Can not find deps [' + request + '] for path : ' + path);
                    return null;
                }
            }
        }
        else {
            requestPath = formatPath(requestScript.path);
        }

        let requestModule = modules[requestPath];
        if (!requestModule) {
            console.warn('Can not find request module for path : ' + requestPath);
            return null;
        }

        if (!requestModule.module && requestModule.func) {
            requestModule.func();
        }

        if (!requestModule.module) {
            console.warn('Can not find requestModule.module for path : ' + path);
            return null;
        }

        return requestModule.module.exports;
    },

    run: function () {
        entries.forEach(function (entry) {
            entry = formatPath(entry);
            var module = modules[entry];
            if (!module.module) {
                module.func();
            }
        });
    },

    load: function (cb) {
        var self = this;

        var srcs = scripts.map(function (script) {
            var path = formatPath(script.path);
            modules[path] = script;

            if (script.mtime) {
                path += ("?mtime=" + script.mtime);
            }
            return path;
        });

        console.time && console.time('load __quick_compile_project__');
        // jsb can not analysis sourcemap, so keep separate files.
        if (bundleScript && !isJSB) {
            downloadText(formatPath(bundleScript), function (err, bundleSource) {
                console.timeEnd && console.timeEnd('load __quick_compile_project__');
                if (err) {
                    console.error(err);
                    return;
                }

                let evalTime = 'eval __quick_compile_project__ : ' + srcs.length + ' files';
                console.time && console.time(evalTime);
                var sources = bundleSource.split('\n//------QC-SOURCE-SPLIT------\n');
                for (var i = 0; i < sources.length; i++) {
                    if (sources[i]) {
                        window.eval(sources[i]);
                        // not sure why new Function cannot set breakpoints precisely
                        // new Function(sources[i])()
                    }
                }
                self.run();
                console.timeEnd && console.timeEnd(evalTime);
                cb();
            })
        }
        else {
            loadScripts(srcs, function () {
                self.run();
                console.timeEnd && console.timeEnd('load __quick_compile_project__');
                cb();
            });
        }
    }
};

// Polyfill for IE 11
if (!('remove' in Element.prototype)) {
    Element.prototype.remove = function () {
        if (this.parentNode) {
            this.parentNode.removeChild(this);
        }
    };
}
})();
    