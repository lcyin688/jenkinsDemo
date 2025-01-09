
(function () {
var scripts = [{"deps":{"./assets/i18n/data/zh":1,"./assets/cases/02_ui/05_listView/ListViewCtrl":2,"./assets/cases/dragonbones/loadDragonBones/loadDragonBonesCtrl":3,"./assets/cases/graphics/demo/draw-line":4,"./assets/cases/02_ui/03_button/SimpleButton/SimpleButtonCtrl":5,"./assets/cases/02_ui/06_layout/Script/LayoutResizeContainerCtrl":6,"./assets/cases/spine/LoadSpine/LoadSpine":7,"./assets/cases/07_capture_texture/capture_to_wechat":8,"./assets/cases/02_ui/12_slider/Slider/SliderCtrl":9,"./assets/cases/02_ui/08_editBox/EditBox/EditBoxEvent":10,"./assets/cases/02_ui/14_pageView/PageView/PageViewCtrl":11,"./assets/cases/02_ui/04_progressbar/ProgressBar/ProgressBarCtrl":12,"./assets/cases/asset_bundle/TestBundle/test-first":13,"./assets/cases/02_ui/15_mask/Mask/MaskCtrl":14,"./assets/cases/03_gameplay/02_actions/Rotation/RotationCtrl":15,"./assets/cases/03_gameplay/01_player_control/KeyboardInput/SimpleKeyboardMovement":16,"./assets/cases/03_gameplay/03_animation/MoveAnimation/MoveAnimationCtrl":17,"./assets/cases/05_scripting/01_properties/ValueTypeProperties":18,"./assets/cases/05_scripting/03_events/BasicEventTest/BasicEventCtrl":19,"./assets/cases/05_scripting/06_asset_loading/LoadRes/LoadRes_example":20,"./assets/cases/06_rendering/custom_material/custom_material":21,"./assets/cases/05_scripting/10_network/downloader-web/downloader-picture":22,"./assets/cases/3d_physics/scripts/enable-rigidbody":23,"./assets/cases/collider/Shape/ShowCollider":24,"./assets/cases/native_call/Native_Call/NativeCallCtrl":25,"./assets/i18n/LabelLocalized":26,"./assets/main menu/Menu":27,"./assets/scripts/ComponentUtils/AudioCtrl":28,"./assets/cases/3d-particle/ShowTips":29,"./assets/cases/motionStreak/MotionStreak/MotionStreakCtrl":30,"./assets/libs/chroma":31,"./assets/cases/3d/3d-support-info":32,"./assets/migration/use_reversed_rotateBy":33,"./assets/cases/04_audio/AudioEngineControl":34,"./assets/cases/graphics/example/ellipse":35,"./assets/cases/02_ui/02_label/LabelAttributes":36,"./assets/cases/02_ui/10_webview/WebviewCtrl":37,"./assets/cases/camera/moving-objects":38,"./assets/cases/02_ui/09_videoplayer/VideoPlayerCtrl":39,"./assets/cases/tiledmap/ShieldNode":40,"./assets/cases/02_ui/11_richtext/RichText":41,"./assets/cases/02_ui/13_toggle/checkbox":42,"./assets/cases/02_ui/03_button/ButtonTransition/ButtonTransition":43,"./assets/cases/03_gameplay/tween/tween-demo":44,"./assets/cases/03_gameplay/01_player_control/OnMultiTouch/OnMultiTouchCtrl":45,"./assets/cases/03_gameplay/01_player_control/OnTouchCtrl/OnTouchCtrl":46,"./assets/cases/03_gameplay/03_animation/AnimationCallback":47,"./assets/cases/03_gameplay/01_player_control/DeviceMotion/DeviceMotionCtrl":48,"./assets/cases/03_gameplay/03_animation/SpriteAnimation/SheepAnimationCtrl":49,"./assets/cases/03_gameplay/02_actions/RepeatAction/RepeatAction":50,"./assets/cases/03_gameplay/02_actions/MoveAction/MoveAction":51,"./assets/cases/03_gameplay/02_actions/SequenceAction/SequenceAction":52,"./assets/cases/05_scripting/02_prefab/PopulatePrefab":53,"./assets/cases/03_gameplay/03_animation/AnimateCustomProperty/AnimateCustomPropertyCtrl":54,"./assets/cases/03_gameplay/02_actions/SimpleAction/SimpleAction":55,"./assets/cases/05_scripting/04_scheduler/scheduleCallbacks":56,"./assets/cases/05_scripting/05_destroy_self/DestroySelf":57,"./assets/cases/05_scripting/07_module/LoadModuleCtrl":58,"./assets/cases/05_scripting/08_singleton/Singleton":59,"./assets/cases/05_scripting/09_loadingBar/LoadingBarCtrl":60,"./assets/cases/05_scripting/11_pool/PoolHandler":61,"./assets/cases/05_scripting/10_network/downloader-native/DownloaderCtrl":62,"./assets/cases/05_scripting/06_asset_loading/AssetLoading/AssetLoading":63,"./assets/cases/05_scripting/06_asset_loading/PreloadAssets/BackToPreloadAssets":64,"./assets/cases/05_scripting/06_asset_loading/DeferredLoading/DeferredLoading":65,"./assets/cases/05_scripting/06_asset_loading/LoadResDir/loadResDir_example":66,"./assets/cases/collider/Platform/HeroControl":67,"./assets/cases/collider/Shooter/Shooter":68,"./assets/cases/collider/Utils/SimpleMotion":69,"./assets/cases/collider/Hittest/Hittest":70,"./assets/cases/collider/Tag/TagColliderListener":71,"./assets/main menu/ShowSubMenu":72,"./assets/cases/07_capture_texture/capture_to_web":73,"./assets/scripts/Global/Helpers":74,"./assets/scripts/Tips/TipsManager":75,"./assets/cases/collider/Category/ColliderListener":76,"./assets/main menu/StorageUtil":77,"./assets/cases/3d-particle/TransformController":78,"./assets/i18n/polyglot":79,"./assets/cases/07_capture_texture/textureRenderUtils":80,"./assets/cases/3d/mesh":81,"./assets/cases/3d/mesh-texture":82,"./assets/cases/07_capture_texture/capture_to_native":83,"./assets/cases/3d/rotate":84,"./assets/cases/3d/screen-to-world-point":85,"./assets/cases/3d/raycast":86,"./assets/cases/asset_bundle/asset-bundle":87,"./assets/cases/3d/3d-model":88,"./assets/cases/3d-particle/CameraController":89,"./assets/cases/dragonbones/ReplaceSlotDisplay":90,"./assets/cases/dragonbones/DragonBonesMode":91,"./assets/cases/dragonbones/DragonBonesCtrl":92,"./assets/cases/camera/minimap-with-camera-rect":93,"./assets/cases/3d/dynamic-load-material":94,"./assets/cases/dragonbones/DragonBonesAttach":95,"./assets/cases/graphics/example/lineTo":96,"./assets/cases/graphics/demo/doodle":97,"./assets/cases/graphics/example/rect":98,"./assets/cases/graphics/demo/sine-waves":99,"./assets/cases/spine/SpineCtrl":100,"./assets/cases/graphics/example/arc":101,"./assets/cases/graphics/example/linejoin":102,"./assets/cases/spine/SpineMode":103,"./assets/cases/dragonbones/DragonBonesCollider":104,"./assets/cases/camera/minimap-with-rendertexture":105,"./assets/cases/spine/VertexEffect":106,"./assets/cases/spine/SpineAttach":107,"./assets/cases/spine/SpineSkin":108,"./assets/cases/tiledmap/TiledTile":109,"./assets/cases/graphics/RuntimeLabel":110,"./assets/cases/tiledmap/Puzzle":111,"./assets/cases/spine/SpineCollider":112,"./assets/cases/tiledmap/ObjectGroupImage":113,"./assets/cases/02_ui/02_label/LoadLongText":114,"./assets/cases/02_ui/05_listView/Item":115,"./assets/cases/tiledmap/dynamic-tiledmap":116,"./assets/cases/02_ui/08_editBox/EditBox/EditboxCtrl":117,"./assets/cases/05_scripting/01_properties/ReferenceTypeProperties":118,"./assets/cases/04_audio/AudioSourceControl":119,"./assets/cases/05_scripting/03_events/TouchDragger":120,"./assets/cases/05_scripting/03_events/MouseDragger":121,"./assets/cases/05_scripting/01_properties/MyCustomComponent":122,"./assets/cases/05_scripting/03_events/CustomEvent":123,"./assets/cases/05_scripting/03_events/MouseEvent":124,"./assets/cases/05_scripting/03_events/TouchEvent":125,"./assets/cases/05_scripting/03_events/ActionCallback":126,"./assets/cases/05_scripting/04_scheduler/recursiveTask":127,"./assets/cases/05_scripting/10_network/NetworkCtrl":128,"./assets/cases/05_scripting/02_prefab/MonsterPrefab":129,"./assets/cases/05_scripting/07_module/Monster":130,"./assets/cases/05_scripting/11_pool/NodeGenerator":131,"./assets/cases/05_scripting/10_network/downloader-web/downloader-audio":132,"./assets/cases/05_scripting/07_module/InitData":133,"./assets/cases/05_scripting/06_asset_loading/AssetLoading/ComeBackToAssetLoad":134,"./assets/cases/05_scripting/06_asset_loading/PreloadAssets/PreloadAssets":135,"./assets/cases/05_scripting/01_properties/NodeGroupControl":136,"./assets/cases/3d_physics/scripts/impulse":137,"./assets/cases/05_scripting/08_singleton/SingletonCtrl":138,"./assets/cases/3d_physics/scripts/trigger-testing":139,"./assets/cases/3d_physics/scripts/scale":140,"./assets/cases/3d_physics/scripts/rotatetest":141,"./assets/cases/3d_physics/scripts/enable-shape":142,"./assets/cases/3d_physics/scripts/born":143,"./assets/cases/3d_physics/scripts/enable-physics3d":144,"./assets/cases/3d_physics/scripts/move":145,"./assets/cases/05_scripting/03_events/OrderSwitcher":146,"./assets/cases/collider/Platform/follow":147,"./assets/cases/collider/Shooter/Bullet":148,"./assets/cases/3d_physics/scripts/raytest":149,"./assets/scripts/Global/Instruction":150,"./assets/cases/collider/Utils/PlatformMotion":151,"./assets/cases/collider/Utils/Wall":152,"./assets/scripts/Global/SceneList":153,"./assets/scripts/ComponentUtils/SearchBlock":154,"./assets/i18n/i18n":155,"./assets/scripts/Tips/TipsCtrl":156,"./assets/scripts/Global/AdaptiveSprite":157,"./assets/scripts/Global/ListItem":158,"./assets/cases/3d_physics/scripts/velocity":159,"./assets/cases/01_graphics/02_particle/ToggleParticle/ParticleControl":160,"./assets/cases/02_ui/09_videoplayer/StayOnBottom/stayOnBottomCtrl":161,"./assets/cases/03_gameplay/03_animation/CreateClip/CreateClipCtrl":162,"./assets/cases/03_gameplay/03_animation/AnimationEvent/AnimationEvent":163,"./assets/cases/03_gameplay/03_animation/CurveAnimation/CurveAnimation":164,"./assets/i18n/data/en":165},"path":"preview-scripts/__qc_index__.js"},{"deps":{},"path":"preview-scripts/assets/i18n/data/zh.js"},{"deps":{},"path":"preview-scripts/assets/cases/02_ui/05_listView/ListViewCtrl.js"},{"deps":{},"path":"preview-scripts/assets/cases/dragonbones/loadDragonBones/loadDragonBonesCtrl.js"},{"deps":{},"path":"preview-scripts/assets/cases/graphics/demo/draw-line.js"},{"deps":{"i18n":155},"path":"preview-scripts/assets/cases/02_ui/03_button/SimpleButton/SimpleButtonCtrl.js"},{"deps":{},"path":"preview-scripts/assets/cases/02_ui/06_layout/Script/LayoutResizeContainerCtrl.js"},{"deps":{"i18n":155},"path":"preview-scripts/assets/cases/spine/LoadSpine/LoadSpine.js"},{"deps":{"./textureRenderUtils":80},"path":"preview-scripts/assets/cases/07_capture_texture/capture_to_wechat.js"},{"deps":{},"path":"preview-scripts/assets/cases/02_ui/12_slider/Slider/SliderCtrl.js"},{"deps":{},"path":"preview-scripts/assets/cases/02_ui/08_editBox/EditBox/EditBoxEvent.js"},{"deps":{},"path":"preview-scripts/assets/cases/02_ui/14_pageView/PageView/PageViewCtrl.js"},{"deps":{},"path":"preview-scripts/assets/cases/02_ui/04_progressbar/ProgressBar/ProgressBarCtrl.js"},{"deps":{"LabelLocalized":26},"path":"preview-scripts/assets/cases/asset_bundle/TestBundle/test-first.js"},{"deps":{},"path":"preview-scripts/assets/cases/02_ui/15_mask/Mask/MaskCtrl.js"},{"deps":{},"path":"preview-scripts/assets/cases/03_gameplay/02_actions/Rotation/RotationCtrl.js"},{"deps":{},"path":"preview-scripts/assets/cases/03_gameplay/01_player_control/KeyboardInput/SimpleKeyboardMovement.js"},{"deps":{},"path":"preview-scripts/assets/cases/03_gameplay/03_animation/MoveAnimation/MoveAnimationCtrl.js"},{"deps":{},"path":"preview-scripts/assets/cases/05_scripting/01_properties/ValueTypeProperties.js"},{"deps":{"TipsManager":75},"path":"preview-scripts/assets/cases/05_scripting/03_events/BasicEventTest/BasicEventCtrl.js"},{"deps":{},"path":"preview-scripts/assets/cases/05_scripting/06_asset_loading/LoadRes/LoadRes_example.js"},{"deps":{},"path":"preview-scripts/assets/cases/06_rendering/custom_material/custom_material.js"},{"deps":{"i18n":155},"path":"preview-scripts/assets/cases/05_scripting/10_network/downloader-web/downloader-picture.js"},{"deps":{},"path":"preview-scripts/assets/cases/3d_physics/scripts/enable-rigidbody.js"},{"deps":{},"path":"preview-scripts/assets/cases/collider/Shape/ShowCollider.js"},{"deps":{},"path":"preview-scripts/assets/cases/native_call/Native_Call/NativeCallCtrl.js"},{"deps":{"i18n":155},"path":"preview-scripts/assets/i18n/LabelLocalized.js"},{"deps":{"i18n":155,"SceneList":153,"TipsManager":75},"path":"preview-scripts/assets/main menu/Menu.js"},{"deps":{},"path":"preview-scripts/assets/scripts/ComponentUtils/AudioCtrl.js"},{"deps":{},"path":"preview-scripts/assets/cases/3d-particle/ShowTips.js"},{"deps":{},"path":"preview-scripts/assets/cases/motionStreak/MotionStreak/MotionStreakCtrl.js"},{"deps":{},"path":"preview-scripts/assets/libs/chroma.js"},{"deps":{},"path":"preview-scripts/assets/cases/3d/3d-support-info.js"},{"deps":{},"path":"preview-scripts/assets/migration/use_reversed_rotateBy.js"},{"deps":{},"path":"preview-scripts/assets/cases/04_audio/AudioEngineControl.js"},{"deps":{},"path":"preview-scripts/assets/cases/graphics/example/ellipse.js"},{"deps":{},"path":"preview-scripts/assets/cases/02_ui/02_label/LabelAttributes.js"},{"deps":{},"path":"preview-scripts/assets/cases/02_ui/10_webview/WebviewCtrl.js"},{"deps":{},"path":"preview-scripts/assets/cases/camera/moving-objects.js"},{"deps":{"i18n":155,"TipsManager":75},"path":"preview-scripts/assets/cases/02_ui/09_videoplayer/VideoPlayerCtrl.js"},{"deps":{},"path":"preview-scripts/assets/cases/tiledmap/ShieldNode.js"},{"deps":{},"path":"preview-scripts/assets/cases/02_ui/11_richtext/RichText.js"},{"deps":{},"path":"preview-scripts/assets/cases/02_ui/13_toggle/checkbox.js"},{"deps":{},"path":"preview-scripts/assets/cases/02_ui/03_button/ButtonTransition/ButtonTransition.js"},{"deps":{},"path":"preview-scripts/assets/cases/03_gameplay/tween/tween-demo.js"},{"deps":{"../../../../scripts/Tips/TipsManager":75},"path":"preview-scripts/assets/cases/03_gameplay/01_player_control/OnMultiTouch/OnMultiTouchCtrl.js"},{"deps":{"i18n":155},"path":"preview-scripts/assets/cases/03_gameplay/01_player_control/OnTouchCtrl/OnTouchCtrl.js"},{"deps":{},"path":"preview-scripts/assets/cases/03_gameplay/03_animation/AnimationCallback.js"},{"deps":{"i18n":155},"path":"preview-scripts/assets/cases/03_gameplay/01_player_control/DeviceMotion/DeviceMotionCtrl.js"},{"deps":{},"path":"preview-scripts/assets/cases/03_gameplay/03_animation/SpriteAnimation/SheepAnimationCtrl.js"},{"deps":{},"path":"preview-scripts/assets/cases/03_gameplay/02_actions/RepeatAction/RepeatAction.js"},{"deps":{},"path":"preview-scripts/assets/cases/03_gameplay/02_actions/MoveAction/MoveAction.js"},{"deps":{},"path":"preview-scripts/assets/cases/03_gameplay/02_actions/SequenceAction/SequenceAction.js"},{"deps":{},"path":"preview-scripts/assets/cases/05_scripting/02_prefab/PopulatePrefab.js"},{"deps":{},"path":"preview-scripts/assets/cases/03_gameplay/03_animation/AnimateCustomProperty/AnimateCustomPropertyCtrl.js"},{"deps":{},"path":"preview-scripts/assets/cases/03_gameplay/02_actions/SimpleAction/SimpleAction.js"},{"deps":{},"path":"preview-scripts/assets/cases/05_scripting/04_scheduler/scheduleCallbacks.js"},{"deps":{},"path":"preview-scripts/assets/cases/05_scripting/05_destroy_self/DestroySelf.js"},{"deps":{"Monster":130,"InitData":133},"path":"preview-scripts/assets/cases/05_scripting/07_module/LoadModuleCtrl.js"},{"deps":{},"path":"preview-scripts/assets/cases/05_scripting/08_singleton/Singleton.js"},{"deps":{"i18n":155},"path":"preview-scripts/assets/cases/05_scripting/09_loadingBar/LoadingBarCtrl.js"},{"deps":{},"path":"preview-scripts/assets/cases/05_scripting/11_pool/PoolHandler.js"},{"deps":{},"path":"preview-scripts/assets/cases/05_scripting/10_network/downloader-native/DownloaderCtrl.js"},{"deps":{"i18n":155},"path":"preview-scripts/assets/cases/05_scripting/06_asset_loading/AssetLoading/AssetLoading.js"},{"deps":{},"path":"preview-scripts/assets/cases/05_scripting/06_asset_loading/PreloadAssets/BackToPreloadAssets.js"},{"deps":{},"path":"preview-scripts/assets/cases/05_scripting/06_asset_loading/DeferredLoading/DeferredLoading.js"},{"deps":{},"path":"preview-scripts/assets/cases/05_scripting/06_asset_loading/LoadResDir/loadResDir_example.js"},{"deps":{},"path":"preview-scripts/assets/cases/collider/Platform/HeroControl.js"},{"deps":{},"path":"preview-scripts/assets/cases/collider/Shooter/Shooter.js"},{"deps":{},"path":"preview-scripts/assets/cases/collider/Utils/SimpleMotion.js"},{"deps":{},"path":"preview-scripts/assets/cases/collider/Hittest/Hittest.js"},{"deps":{},"path":"preview-scripts/assets/cases/collider/Tag/TagColliderListener.js"},{"deps":{},"path":"preview-scripts/assets/main menu/ShowSubMenu.js"},{"deps":{"./textureRenderUtils":80},"path":"preview-scripts/assets/cases/07_capture_texture/capture_to_web.js"},{"deps":{},"path":"preview-scripts/assets/scripts/Global/Helpers.js"},{"deps":{},"path":"preview-scripts/assets/scripts/Tips/TipsManager.js"},{"deps":{},"path":"preview-scripts/assets/cases/collider/Category/ColliderListener.js"},{"deps":{},"path":"preview-scripts/assets/main menu/StorageUtil.js"},{"deps":{},"path":"preview-scripts/assets/cases/3d-particle/TransformController.js"},{"deps":{},"path":"preview-scripts/assets/i18n/polyglot.js"},{"deps":{},"path":"preview-scripts/assets/cases/07_capture_texture/textureRenderUtils.js"},{"deps":{"chroma":31},"path":"preview-scripts/assets/cases/3d/mesh.js"},{"deps":{},"path":"preview-scripts/assets/cases/3d/mesh-texture.js"},{"deps":{"./textureRenderUtils":80},"path":"preview-scripts/assets/cases/07_capture_texture/capture_to_native.js"},{"deps":{},"path":"preview-scripts/assets/cases/3d/rotate.js"},{"deps":{},"path":"preview-scripts/assets/cases/3d/screen-to-world-point.js"},{"deps":{},"path":"preview-scripts/assets/cases/3d/raycast.js"},{"deps":{"../../i18n/i18n":155},"path":"preview-scripts/assets/cases/asset_bundle/asset-bundle.js"},{"deps":{},"path":"preview-scripts/assets/cases/3d/3d-model.js"},{"deps":{},"path":"preview-scripts/assets/cases/3d-particle/CameraController.js"},{"deps":{},"path":"preview-scripts/assets/cases/dragonbones/ReplaceSlotDisplay.js"},{"deps":{},"path":"preview-scripts/assets/cases/dragonbones/DragonBonesMode.js"},{"deps":{},"path":"preview-scripts/assets/cases/dragonbones/DragonBonesCtrl.js"},{"deps":{},"path":"preview-scripts/assets/cases/camera/minimap-with-camera-rect.js"},{"deps":{},"path":"preview-scripts/assets/cases/3d/dynamic-load-material.js"},{"deps":{},"path":"preview-scripts/assets/cases/dragonbones/DragonBonesAttach.js"},{"deps":{},"path":"preview-scripts/assets/cases/graphics/example/lineTo.js"},{"deps":{},"path":"preview-scripts/assets/cases/graphics/demo/doodle.js"},{"deps":{},"path":"preview-scripts/assets/cases/graphics/example/rect.js"},{"deps":{},"path":"preview-scripts/assets/cases/graphics/demo/sine-waves.js"},{"deps":{},"path":"preview-scripts/assets/cases/spine/SpineCtrl.js"},{"deps":{},"path":"preview-scripts/assets/cases/graphics/example/arc.js"},{"deps":{},"path":"preview-scripts/assets/cases/graphics/example/linejoin.js"},{"deps":{},"path":"preview-scripts/assets/cases/spine/SpineMode.js"},{"deps":{},"path":"preview-scripts/assets/cases/dragonbones/DragonBonesCollider.js"},{"deps":{},"path":"preview-scripts/assets/cases/camera/minimap-with-rendertexture.js"},{"deps":{},"path":"preview-scripts/assets/cases/spine/VertexEffect.js"},{"deps":{},"path":"preview-scripts/assets/cases/spine/SpineAttach.js"},{"deps":{},"path":"preview-scripts/assets/cases/spine/SpineSkin.js"},{"deps":{},"path":"preview-scripts/assets/cases/tiledmap/TiledTile.js"},{"deps":{},"path":"preview-scripts/assets/cases/graphics/RuntimeLabel.js"},{"deps":{},"path":"preview-scripts/assets/cases/tiledmap/Puzzle.js"},{"deps":{},"path":"preview-scripts/assets/cases/spine/SpineCollider.js"},{"deps":{},"path":"preview-scripts/assets/cases/tiledmap/ObjectGroupImage.js"},{"deps":{},"path":"preview-scripts/assets/cases/02_ui/02_label/LoadLongText.js"},{"deps":{"i18n":155},"path":"preview-scripts/assets/cases/02_ui/05_listView/Item.js"},{"deps":{},"path":"preview-scripts/assets/cases/tiledmap/dynamic-tiledmap.js"},{"deps":{"i18n":155},"path":"preview-scripts/assets/cases/02_ui/08_editBox/EditBox/EditboxCtrl.js"},{"deps":{"MyCustomComponent":122},"path":"preview-scripts/assets/cases/05_scripting/01_properties/ReferenceTypeProperties.js"},{"deps":{},"path":"preview-scripts/assets/cases/04_audio/AudioSourceControl.js"},{"deps":{},"path":"preview-scripts/assets/cases/05_scripting/03_events/TouchDragger.js"},{"deps":{},"path":"preview-scripts/assets/cases/05_scripting/03_events/MouseDragger.js"},{"deps":{},"path":"preview-scripts/assets/cases/05_scripting/01_properties/MyCustomComponent.js"},{"deps":{},"path":"preview-scripts/assets/cases/05_scripting/03_events/CustomEvent.js"},{"deps":{},"path":"preview-scripts/assets/cases/05_scripting/03_events/MouseEvent.js"},{"deps":{},"path":"preview-scripts/assets/cases/05_scripting/03_events/TouchEvent.js"},{"deps":{},"path":"preview-scripts/assets/cases/05_scripting/03_events/ActionCallback.js"},{"deps":{"LabelLocalized":26},"path":"preview-scripts/assets/cases/05_scripting/04_scheduler/recursiveTask.js"},{"deps":{"i18n":155},"path":"preview-scripts/assets/cases/05_scripting/10_network/NetworkCtrl.js"},{"deps":{"Helpers":74},"path":"preview-scripts/assets/cases/05_scripting/02_prefab/MonsterPrefab.js"},{"deps":{},"path":"preview-scripts/assets/cases/05_scripting/07_module/Monster.js"},{"deps":{},"path":"preview-scripts/assets/cases/05_scripting/11_pool/NodeGenerator.js"},{"deps":{"i18n":155},"path":"preview-scripts/assets/cases/05_scripting/10_network/downloader-web/downloader-audio.js"},{"deps":{},"path":"preview-scripts/assets/cases/05_scripting/07_module/InitData.js"},{"deps":{},"path":"preview-scripts/assets/cases/05_scripting/06_asset_loading/AssetLoading/ComeBackToAssetLoad.js"},{"deps":{"../../../../i18n/i18n":155},"path":"preview-scripts/assets/cases/05_scripting/06_asset_loading/PreloadAssets/PreloadAssets.js"},{"deps":{},"path":"preview-scripts/assets/cases/05_scripting/01_properties/NodeGroupControl.js"},{"deps":{},"path":"preview-scripts/assets/cases/3d_physics/scripts/impulse.js"},{"deps":{"Singleton":59},"path":"preview-scripts/assets/cases/05_scripting/08_singleton/SingletonCtrl.js"},{"deps":{},"path":"preview-scripts/assets/cases/3d_physics/scripts/trigger-testing.js"},{"deps":{},"path":"preview-scripts/assets/cases/3d_physics/scripts/scale.js"},{"deps":{},"path":"preview-scripts/assets/cases/3d_physics/scripts/rotatetest.js"},{"deps":{},"path":"preview-scripts/assets/cases/3d_physics/scripts/enable-shape.js"},{"deps":{},"path":"preview-scripts/assets/cases/3d_physics/scripts/born.js"},{"deps":{},"path":"preview-scripts/assets/cases/3d_physics/scripts/enable-physics3d.js"},{"deps":{},"path":"preview-scripts/assets/cases/3d_physics/scripts/move.js"},{"deps":{},"path":"preview-scripts/assets/cases/05_scripting/03_events/OrderSwitcher.js"},{"deps":{},"path":"preview-scripts/assets/cases/collider/Platform/follow.js"},{"deps":{},"path":"preview-scripts/assets/cases/collider/Shooter/Bullet.js"},{"deps":{},"path":"preview-scripts/assets/cases/3d_physics/scripts/raytest.js"},{"deps":{},"path":"preview-scripts/assets/scripts/Global/Instruction.js"},{"deps":{},"path":"preview-scripts/assets/cases/collider/Utils/PlatformMotion.js"},{"deps":{},"path":"preview-scripts/assets/cases/collider/Utils/Wall.js"},{"deps":{"TipsManager":75},"path":"preview-scripts/assets/scripts/Global/SceneList.js"},{"deps":{"TipsManager":75},"path":"preview-scripts/assets/scripts/ComponentUtils/SearchBlock.js"},{"deps":{"polyglot":79,"zh":1,"en":165},"path":"preview-scripts/assets/i18n/i18n.js"},{"deps":{"LabelLocalized":26},"path":"preview-scripts/assets/scripts/Tips/TipsCtrl.js"},{"deps":{},"path":"preview-scripts/assets/scripts/Global/AdaptiveSprite.js"},{"deps":{"TipsManager":75},"path":"preview-scripts/assets/scripts/Global/ListItem.js"},{"deps":{},"path":"preview-scripts/assets/cases/3d_physics/scripts/velocity.js"},{"deps":{},"path":"preview-scripts/assets/cases/01_graphics/02_particle/ToggleParticle/ParticleControl.js"},{"deps":{},"path":"preview-scripts/assets/cases/02_ui/09_videoplayer/StayOnBottom/stayOnBottomCtrl.js"},{"deps":{},"path":"preview-scripts/assets/cases/03_gameplay/03_animation/CreateClip/CreateClipCtrl.js"},{"deps":{"i18n":155},"path":"preview-scripts/assets/cases/03_gameplay/03_animation/AnimationEvent/AnimationEvent.js"},{"deps":{},"path":"preview-scripts/assets/cases/03_gameplay/03_animation/CurveAnimation/CurveAnimation.js"},{"deps":{},"path":"preview-scripts/assets/i18n/data/en.js"}];
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
    