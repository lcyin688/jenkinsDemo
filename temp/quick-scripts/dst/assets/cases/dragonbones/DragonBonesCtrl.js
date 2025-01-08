
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/cases/dragonbones/DragonBonesCtrl.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '51a99xQI4JAXqBjenKXSIjl', 'DragonBonesCtrl');
// cases/dragonbones/DragonBonesCtrl.js

"use strict";

if (!cc.runtime) {
  // runtime not support dragonbones.
  var NORMAL_ANIMATION_GROUP = "normal";
  var AIM_ANIMATION_GROUP = "aim";
  var ATTACK_ANIMATION_GROUP = "attack";
  var JUMP_SPEED = -20;
  var NORMALIZE_MOVE_SPEED = 3.6;
  var MAX_MOVE_SPEED_FRONT = NORMALIZE_MOVE_SPEED * 1.4;
  var MAX_MOVE_SPEED_BACK = NORMALIZE_MOVE_SPEED * 1.0;
  var WEAPON_R_LIST = ["weapon_1502b_r", "weapon_1005", "weapon_1005b", "weapon_1005c", "weapon_1005d", "weapon_1005e"];
  var WEAPON_L_LIST = ["weapon_1502b_l", "weapon_1005", "weapon_1005b", "weapon_1005c", "weapon_1005d"];
  var SKINS = ["mecha_1502b", "skin_a", "skin_b", "skin_c"];
  var GROUND = -200;
  var G = -0.6;
  cc.Class({
    "extends": cc.Component,
    editor: {
      requireComponent: dragonBones.ArmatureDisplay
    },
    properties: {
      touchHandler: {
        "default": null,
        type: cc.Node
      },
      upButton: {
        "default": null,
        type: cc.Node
      },
      downButton: {
        "default": null,
        type: cc.Node
      },
      leftButton: {
        "default": null,
        type: cc.Node
      },
      rightButton: {
        "default": null,
        type: cc.Node
      },
      weaponArmature: {
        "default": null,
        type: dragonBones.ArmatureDisplay
      },
      skinArmature: {
        "default": null,
        type: dragonBones.ArmatureDisplay
      },
      _bullets: [],
      _left: false,
      _right: false,
      _isJumpingA: false,
      _isJumpingB: false,
      _isSquating: false,
      _isAttackingA: false,
      _isAttackingB: false,
      _weaponRIndex: 0,
      _weaponLIndex: 0,
      _skinIndex: 0,
      _faceDir: 1,
      _aimDir: 0,
      _moveDir: 0,
      _aimRadian: 0,
      _speedX: 0,
      _speedY: 0,
      _armature: null,
      _armatureDisplay: null,
      _weaponR: null,
      _weaponL: null,
      _aimState: null,
      _walkState: null,
      _attackState: null,
      _target: cc.v2(0, 0)
    },
    // use this for initialization
    onLoad: function onLoad() {
      var _this = this;

      this._armatureDisplay = this.getComponent(dragonBones.ArmatureDisplay);
      this._armature = this._armatureDisplay.armature();

      this._armatureDisplay.addEventListener(dragonBones.EventObject.FADE_IN_COMPLETE, this._animationEventHandler, this);

      this._armatureDisplay.addEventListener(dragonBones.EventObject.FADE_OUT_COMPLETE, this._animationEventHandler, this);

      this._armatureDisplay.addEventListener(dragonBones.EventObject.COMPLETE, this._animationEventHandler, this);

      this._weaponR = this._armature.getSlot('weapon_r').childArmature;
      this._weaponL = this._armature.getSlot('weapon_l').childArmature;

      this._weaponR.addEventListener(dragonBones.EventObject.FRAME_EVENT, this._frameEventHandler, this);

      this._weaponL.addEventListener(dragonBones.EventObject.FRAME_EVENT, this._frameEventHandler, this); // load all skin data


      for (var i = 1; i < SKINS.length; i++) {
        this.skinArmature.armatureName = SKINS[i];
      }

      for (var _i = 1; _i < WEAPON_R_LIST.length; _i++) {
        this.weaponArmature.armatureName = WEAPON_R_LIST[_i];
      }

      this._updateAnimation();

      if (this.touchHandler) {
        // touch events
        this.touchHandler.on(cc.Node.EventType.TOUCH_START, function (event) {
          _this._mouseDown_ = true;
          var touches = event.getTouches();
          var touchLoc = touches[0].getLocation();

          _this.aim(touchLoc.x, touchLoc.y);

          _this.attack(true);
        }, this);
        this.touchHandler.on(cc.Node.EventType.TOUCH_END, function (event) {
          _this._mouseDown_ = false;

          _this.attack(false);
        }, this);
        this.touchHandler.on(cc.Node.EventType.TOUCH_MOVE, function (event) {
          var touches = event.getTouches();
          var touchLoc = touches[0].getLocation();

          _this.aim(touchLoc.x, touchLoc.y);
        }, this);
      }

      if (this.upButton) {
        this.upButton.on(cc.Node.EventType.TOUCH_START, function (event) {
          _this.jump();
        }, this);
      }

      if (this.downButton) {
        this.downButton.on(cc.Node.EventType.TOUCH_START, function (event) {
          _this.squat(true);
        }, this);
        this.downButton.on(cc.Node.EventType.TOUCH_END, function (event) {
          _this.squat(false);
        }, this);
        this.downButton.on(cc.Node.EventType.TOUCH_CANCEL, function (event) {
          _this.squat(false);
        }, this);
      }

      if (this.leftButton) {
        this.leftButton.on(cc.Node.EventType.TOUCH_START, function (event) {
          _this._left = true;

          _this._updateMove(-1);
        }, this);
        this.leftButton.on(cc.Node.EventType.TOUCH_END, function (event) {
          _this._left = false;

          _this._updateMove(-1);
        }, this);
        this.leftButton.on(cc.Node.EventType.TOUCH_CANCEL, function (event) {
          _this._left = false;

          _this._updateMove(-1);
        }, this);
      }

      if (this.rightButton) {
        this.rightButton.on(cc.Node.EventType.TOUCH_START, function (event) {
          _this._right = true;

          _this._updateMove(1);
        }, this);
        this.rightButton.on(cc.Node.EventType.TOUCH_END, function (event) {
          _this._right = false;

          _this._updateMove(1);
        }, this);
        this.rightButton.on(cc.Node.EventType.TOUCH_CANCEL, function (event) {
          _this._right = false;

          _this._updateMove(1);
        }, this);
      } // keyboard events


      cc.systemEvent.on(cc.SystemEvent.EventType.KEY_DOWN, function (event) {
        this._keyHandler(event.keyCode, true);
      }, this);
      cc.systemEvent.on(cc.SystemEvent.EventType.KEY_UP, function (event) {
        this._keyHandler(event.keyCode, false);
      }, this);
    },
    _keyHandler: function _keyHandler(keyCode, isDown) {
      switch (keyCode) {
        case cc.macro.KEY.a:
        case cc.macro.KEY.left:
          this._left = isDown;

          this._updateMove(-1);

          break;

        case cc.macro.KEY.d:
        case cc.macro.KEY.right:
          this._right = isDown;

          this._updateMove(1);

          break;

        case cc.macro.KEY.w:
        case cc.macro.KEY.up:
          if (isDown) {
            this.jump();
          }

          break;

        case cc.macro.KEY.s:
        case cc.macro.KEY.down:
          this.squat(isDown);
          break;

        case cc.macro.KEY.q:
          if (isDown) {
            this.switchWeaponR();
          }

          break;

        case cc.macro.KEY.e:
          if (isDown) {
            this.switchWeaponL();
          }

          break;

        case cc.macro.KEY.space:
          if (isDown) {
            this.switchWeaponR();
            this.switchWeaponL();
          }

          break;

        default:
          return;
      }
    },
    _updateMove: function _updateMove(dir) {
      if (this._left && this._right) {
        this.move(dir);
      } else if (this._left) {
        this.move(-1);
      } else if (this._right) {
        this.move(1);
      } else {
        this.move(0);
      }
    },
    move: function move(dir) {
      if (this._moveDir === dir) {
        return;
      }

      this._moveDir = dir;

      this._updateAnimation();
    },
    jump: function jump() {
      if (this._isJumpingA) {
        return;
      }

      this._isJumpingA = true;

      this._armature.animation.fadeIn("jump_1", -1, -1, 0, NORMAL_ANIMATION_GROUP);

      this._walkState = null;
    },
    squat: function squat(isSquating) {
      if (this._isSquating === isSquating) {
        return;
      }

      this._isSquating = isSquating;

      this._updateAnimation();
    },
    attack: function attack(isAttacking) {
      if (this._isAttackingA == isAttacking) {
        return;
      }

      this._isAttackingA = isAttacking;
    },
    switchWeaponL: function switchWeaponL() {
      this._weaponL.removeEventListener(dragonBones.EventObject.FRAME_EVENT, this._frameEventHandler, this);

      this._weaponLIndex++;

      if (this._weaponLIndex >= WEAPON_L_LIST.length) {
        this._weaponLIndex = 0;
      }

      var newWeaponName = WEAPON_L_LIST[this._weaponLIndex];
      var factory = dragonBones.CCFactory.getInstance();
      this._weaponL = factory.buildArmature(newWeaponName);
      this._armature.getSlot('weapon_l').childArmature = this._weaponL;

      this._weaponL.addEventListener(dragonBones.EventObject.FRAME_EVENT, this._frameEventHandler, this);
    },
    switchWeaponR: function switchWeaponR() {
      this._weaponR.removeEventListener(dragonBones.EventObject.FRAME_EVENT, this._frameEventHandler, this);

      this._weaponRIndex++;

      if (this._weaponRIndex >= WEAPON_R_LIST.length) {
        this._weaponRIndex = 0;
      }

      var newWeaponName = WEAPON_R_LIST[this._weaponRIndex];
      var factory = dragonBones.CCFactory.getInstance();
      this._weaponR = factory.buildArmature(newWeaponName);
      this._armature.getSlot('weapon_r').childArmature = this._weaponR;

      this._weaponR.addEventListener(dragonBones.EventObject.FRAME_EVENT, this._frameEventHandler, this);
    },
    switchSkin: function switchSkin() {
      this._skinIndex++;

      if (this._skinIndex >= SKINS.length) {
        this._skinIndex = 0;
      }

      var skinName = SKINS[this._skinIndex];
      var factory = dragonBones.CCFactory.getInstance();
      var skinData = factory.getArmatureData(skinName).defaultSkin;
      factory.replaceSkin(this._armatureDisplay.armature(), skinData, false, ["weapon_l", "weapon_r"]);
    },
    aim: function aim(x, y) {
      if (this._aimDir === 0) {
        this._aimDir = 10;
      }

      this._target = this.node.parent.convertToNodeSpaceAR(cc.v2(x, y));
    },
    update: function update(dt) {
      this._updatePosition();

      this._updateAim();

      this._updateAttack();

      this._enterFrameHandler(dt);
    },
    onDisable: function onDisable() {
      // clean the bullets
      for (var i = this._bullets.length - 1; i >= 0; i--) {
        var bullet = this._bullets[i];
        bullet.enabled = false;
      }

      this._bullets = [];
    },
    addBullet: function addBullet(bullet) {
      this._bullets.push(bullet);
    },
    _enterFrameHandler: function _enterFrameHandler(dt) {
      for (var i = this._bullets.length - 1; i >= 0; i--) {
        var bullet = this._bullets[i];

        if (bullet.update()) {
          this._bullets.splice(i, 1);
        }
      }
    },
    _animationEventHandler: function _animationEventHandler(event) {
      if (event.type === dragonBones.EventObject.FADE_IN_COMPLETE) {
        if (event.animationState.name === "jump_1") {
          this._isJumpingB = true;
          this._speedY = -JUMP_SPEED;

          if (this._moveDir != 0) {
            if (this._moveDir * this._faceDir > 0) {
              this._speedX = MAX_MOVE_SPEED_FRONT * this._faceDir;
            } else {
              this._speedX = -MAX_MOVE_SPEED_BACK * this._faceDir;
            }
          }

          this._armature.animation.fadeIn("jump_2", -1, -1, 0, NORMAL_ANIMATION_GROUP).resetToPose = false;
        } else if (event.animationState.name === "jump_4") {
          this._updateAnimation();
        }
      } else if (event.type === dragonBones.EventObject.FADE_OUT_COMPLETE) {
        if (event.animationState.name === "attack_01") {
          this._isAttackingB = false;
          this._attackState = null;
        }
      } else if (event.type === dragonBones.EventObject.COMPLETE) {
        if (event.animationState.name === "jump_4") {
          this._isJumpingA = false;
          this._isJumpingB = false;

          this._updateAnimation();
        }
      }
    },
    _frameEventHandler: function _frameEventHandler(event) {
      if (event.name === "fire") {
        // var firePointBone = event.armature.getBone("firePoint");
        var localPoint = cc.v2(event.bone.global.x, event.bone.global.y);
        var display = event.armature.display;
        var globalPoint = display.node.convertToWorldSpace(localPoint);

        this._fire(globalPoint);
      }
    },
    _fire: function _fire(firePoint) {
      firePoint.x += Math.random() * 2 - 1;
      firePoint.y += Math.random() * 2 - 1;

      var armature = this._armatureDisplay.buildArmature("bullet_01");

      var effect = this._armatureDisplay.buildArmature("fire_effect_01");

      var radian = this._faceDir < 0 ? Math.PI - this._aimRadian : this._aimRadian;
      var bullet = new DragonBullet();
      bullet.init(this.node.parent, armature, effect, radian + Math.random() * 0.02 - 0.01, 40, firePoint);
      this.addBullet(bullet);
    },
    _updateAnimation: function _updateAnimation() {
      if (this._isJumpingA) {
        return;
      }

      if (this._isSquating) {
        this._speedX = 0;
        this._armature.animation.fadeIn("squat", -1, -1, 0, NORMAL_ANIMATION_GROUP).resetToPose = false;
        this._walkState = null;
        return;
      }

      if (this._moveDir === 0) {
        this._speedX = 0;
        this._armature.animation.fadeIn("idle", -1, -1, 0, NORMAL_ANIMATION_GROUP).resetToPose = false;
        this._walkState = null;
      } else {
        if (!this._walkState) {
          this._walkState = this._armature.animation.fadeIn("walk", -1, -1, 0, NORMAL_ANIMATION_GROUP);
          this._walkState.resetToPose = false;
        }

        if (this._moveDir * this._faceDir > 0) {
          this._walkState.timeScale = MAX_MOVE_SPEED_FRONT / NORMALIZE_MOVE_SPEED;
        } else {
          this._walkState.timeScale = -MAX_MOVE_SPEED_BACK / NORMALIZE_MOVE_SPEED;
        }

        if (this._moveDir * this._faceDir > 0) {
          this._speedX = MAX_MOVE_SPEED_FRONT * this._faceDir;
        } else {
          this._speedX = -MAX_MOVE_SPEED_BACK * this._faceDir;
        }
      }
    },
    _updatePosition: function _updatePosition() {
      if (this._speedX !== 0) {
        this.node.x += this._speedX;
        var minX = -cc.visibleRect.width / 2;
        var maxX = cc.visibleRect.width / 2;

        if (this.node.x < minX) {
          this.node.x = minX;
        } else if (this.node.x > maxX) {
          this.node.x = maxX;
        }
      }

      if (this._speedY != 0) {
        if (this._speedY > 5 && this._speedY + G <= 5) {
          this._armature.animation.fadeIn("jump_3", -1, -1, 0, NORMAL_ANIMATION_GROUP).resetToPose = false;
        }

        this._speedY += G;
        this.node.y += this._speedY;

        if (this.node.y < GROUND) {
          this.node.y = GROUND;
          this._speedY = 0;
          this._armature.animation.fadeIn("jump_4", -1, -1, 0, NORMAL_ANIMATION_GROUP).resetToPose = false;
        }
      }
    },
    _updateAim: function _updateAim() {
      if (!this._mouseDown_) return;

      if (this._aimDir === 0) {
        return;
      }

      this._faceDir = this._target.x > this.node.x ? 1 : -1;

      if (this.node.scaleX * this._faceDir < 0) {
        this.node.scaleX *= -1;

        if (this._moveDir) {
          this._updateAnimation();
        }
      }

      var aimOffsetY = this._armature.getBone("chest").global.y * this.node.scaleY;

      if (this._faceDir > 0) {
        this._aimRadian = Math.atan2(this._target.y - this.node.y - aimOffsetY, this._target.x - this.node.x);
      } else {
        this._aimRadian = Math.PI - Math.atan2(this._target.y - this.node.y - aimOffsetY, this._target.x - this.node.x);

        if (this._aimRadian > Math.PI) {
          this._aimRadian -= Math.PI * 2;
        }
      }

      var aimDir = 0;

      if (this._aimRadian > 0) {
        aimDir = 1;
      } else {
        aimDir = -1;
      }

      if (this._aimDir != aimDir) {
        this._aimDir = aimDir; // Animation mixing.

        if (this._aimDir >= 0) {
          this._aimState = this._armature.animation.fadeIn("aim_up", -1.0, -1, 0, AIM_ANIMATION_GROUP);
        } else {
          this._aimState = this._armature.animation.fadeIn("aim_down", -1.0, -1, 0, AIM_ANIMATION_GROUP);
        }

        this._aimState.resetToPose = false;
      }

      this._aimState.weight = Math.abs(this._aimRadian / Math.PI * 2); //_armature.invalidUpdate("pelvis"); // Only update bone mask.

      this._armature.invalidUpdate();
    },
    _updateAttack: function _updateAttack() {
      if (!this._isAttackingA || this._isAttackingB) {
        return;
      }

      this._isAttackingB = true; // Animation mixing.

      this._attackState = this._armature.animation.fadeIn("attack_01", -1.0, -1, 0, ATTACK_ANIMATION_GROUP, dragonBones.AnimationFadeOutMode.SameGroup);
      this._attackState.resetToPose = false;
      this._attackState.autoFadeOutTime = this._attackState.fadeTotalTime;
    }
  });
  var DragonBullet = cc.Class({
    name: 'DragonBullet',
    _speedX: 0,
    _speedY: 0,
    _armature: null,
    _armatureDisplay: null,
    _effect: null,
    init: function init(parentNode, armature, effect, radian, speed, position) {
      this._speedX = Math.cos(radian) * speed;
      this._speedY = Math.sin(radian) * speed;
      var thePos = parentNode.convertToNodeSpaceAR(position);
      armature.playAnimation("idle");
      var armatureNode = armature.node;
      armatureNode.setPosition(thePos);
      armatureNode.angle = radian * cc.macro.DEG;
      this._armature = armature;

      if (effect) {
        this._effect = effect;
        var effectDisplay = this._effect.node;
        effectDisplay.angle = radian * cc.macro.DEG;
        effectDisplay.setPosition(thePos);
        effectDisplay.scaleX = 1 + Math.random() * 1;
        effectDisplay.scaleY = 1 + Math.random() * 0.5;

        if (Math.random() < 0.5) {
          effectDisplay.scaleY *= -1;
        }

        this._effect.playAnimation("idle");

        parentNode.addChild(effectDisplay);
      }

      parentNode.addChild(armatureNode);
    },
    update: function update() {
      var armatureNode = this._armature.node;
      armatureNode.x += this._speedX;
      armatureNode.y += this._speedY;
      var worldPos = armatureNode.parent.convertToWorldSpaceAR(armatureNode.getPosition());

      if (worldPos.x < -100 || worldPos.x >= cc.visibleRect.width + 100 || worldPos.y < -100 || worldPos.y >= cc.visibleRect.height + 100) {
        this.doClean();
        return true;
      }

      return false;
    },
    onDisable: function onDisable() {
      this.doClean();
    },
    doClean: function doClean() {
      this._armature.node.removeFromParent();

      if (this._effect) {
        this._effect.node.removeFromParent();
      }
    }
  });
} // end of !cc.runtime

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9jYXNlcy9kcmFnb25ib25lcy9EcmFnb25Cb25lc0N0cmwuanMiXSwibmFtZXMiOlsiY2MiLCJydW50aW1lIiwiTk9STUFMX0FOSU1BVElPTl9HUk9VUCIsIkFJTV9BTklNQVRJT05fR1JPVVAiLCJBVFRBQ0tfQU5JTUFUSU9OX0dST1VQIiwiSlVNUF9TUEVFRCIsIk5PUk1BTElaRV9NT1ZFX1NQRUVEIiwiTUFYX01PVkVfU1BFRURfRlJPTlQiLCJNQVhfTU9WRV9TUEVFRF9CQUNLIiwiV0VBUE9OX1JfTElTVCIsIldFQVBPTl9MX0xJU1QiLCJTS0lOUyIsIkdST1VORCIsIkciLCJDbGFzcyIsIkNvbXBvbmVudCIsImVkaXRvciIsInJlcXVpcmVDb21wb25lbnQiLCJkcmFnb25Cb25lcyIsIkFybWF0dXJlRGlzcGxheSIsInByb3BlcnRpZXMiLCJ0b3VjaEhhbmRsZXIiLCJ0eXBlIiwiTm9kZSIsInVwQnV0dG9uIiwiZG93bkJ1dHRvbiIsImxlZnRCdXR0b24iLCJyaWdodEJ1dHRvbiIsIndlYXBvbkFybWF0dXJlIiwic2tpbkFybWF0dXJlIiwiX2J1bGxldHMiLCJfbGVmdCIsIl9yaWdodCIsIl9pc0p1bXBpbmdBIiwiX2lzSnVtcGluZ0IiLCJfaXNTcXVhdGluZyIsIl9pc0F0dGFja2luZ0EiLCJfaXNBdHRhY2tpbmdCIiwiX3dlYXBvblJJbmRleCIsIl93ZWFwb25MSW5kZXgiLCJfc2tpbkluZGV4IiwiX2ZhY2VEaXIiLCJfYWltRGlyIiwiX21vdmVEaXIiLCJfYWltUmFkaWFuIiwiX3NwZWVkWCIsIl9zcGVlZFkiLCJfYXJtYXR1cmUiLCJfYXJtYXR1cmVEaXNwbGF5IiwiX3dlYXBvblIiLCJfd2VhcG9uTCIsIl9haW1TdGF0ZSIsIl93YWxrU3RhdGUiLCJfYXR0YWNrU3RhdGUiLCJfdGFyZ2V0IiwidjIiLCJvbkxvYWQiLCJnZXRDb21wb25lbnQiLCJhcm1hdHVyZSIsImFkZEV2ZW50TGlzdGVuZXIiLCJFdmVudE9iamVjdCIsIkZBREVfSU5fQ09NUExFVEUiLCJfYW5pbWF0aW9uRXZlbnRIYW5kbGVyIiwiRkFERV9PVVRfQ09NUExFVEUiLCJDT01QTEVURSIsImdldFNsb3QiLCJjaGlsZEFybWF0dXJlIiwiRlJBTUVfRVZFTlQiLCJfZnJhbWVFdmVudEhhbmRsZXIiLCJpIiwibGVuZ3RoIiwiYXJtYXR1cmVOYW1lIiwiX3VwZGF0ZUFuaW1hdGlvbiIsIm9uIiwiRXZlbnRUeXBlIiwiVE9VQ0hfU1RBUlQiLCJldmVudCIsIl9tb3VzZURvd25fIiwidG91Y2hlcyIsImdldFRvdWNoZXMiLCJ0b3VjaExvYyIsImdldExvY2F0aW9uIiwiYWltIiwieCIsInkiLCJhdHRhY2siLCJUT1VDSF9FTkQiLCJUT1VDSF9NT1ZFIiwianVtcCIsInNxdWF0IiwiVE9VQ0hfQ0FOQ0VMIiwiX3VwZGF0ZU1vdmUiLCJzeXN0ZW1FdmVudCIsIlN5c3RlbUV2ZW50IiwiS0VZX0RPV04iLCJfa2V5SGFuZGxlciIsImtleUNvZGUiLCJLRVlfVVAiLCJpc0Rvd24iLCJtYWNybyIsIktFWSIsImEiLCJsZWZ0IiwiZCIsInJpZ2h0IiwidyIsInVwIiwicyIsImRvd24iLCJxIiwic3dpdGNoV2VhcG9uUiIsImUiLCJzd2l0Y2hXZWFwb25MIiwic3BhY2UiLCJkaXIiLCJtb3ZlIiwiYW5pbWF0aW9uIiwiZmFkZUluIiwiaXNTcXVhdGluZyIsImlzQXR0YWNraW5nIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsIm5ld1dlYXBvbk5hbWUiLCJmYWN0b3J5IiwiQ0NGYWN0b3J5IiwiZ2V0SW5zdGFuY2UiLCJidWlsZEFybWF0dXJlIiwic3dpdGNoU2tpbiIsInNraW5OYW1lIiwic2tpbkRhdGEiLCJnZXRBcm1hdHVyZURhdGEiLCJkZWZhdWx0U2tpbiIsInJlcGxhY2VTa2luIiwibm9kZSIsInBhcmVudCIsImNvbnZlcnRUb05vZGVTcGFjZUFSIiwidXBkYXRlIiwiZHQiLCJfdXBkYXRlUG9zaXRpb24iLCJfdXBkYXRlQWltIiwiX3VwZGF0ZUF0dGFjayIsIl9lbnRlckZyYW1lSGFuZGxlciIsIm9uRGlzYWJsZSIsImJ1bGxldCIsImVuYWJsZWQiLCJhZGRCdWxsZXQiLCJwdXNoIiwic3BsaWNlIiwiYW5pbWF0aW9uU3RhdGUiLCJuYW1lIiwicmVzZXRUb1Bvc2UiLCJsb2NhbFBvaW50IiwiYm9uZSIsImdsb2JhbCIsImRpc3BsYXkiLCJnbG9iYWxQb2ludCIsImNvbnZlcnRUb1dvcmxkU3BhY2UiLCJfZmlyZSIsImZpcmVQb2ludCIsIk1hdGgiLCJyYW5kb20iLCJlZmZlY3QiLCJyYWRpYW4iLCJQSSIsIkRyYWdvbkJ1bGxldCIsImluaXQiLCJ0aW1lU2NhbGUiLCJtaW5YIiwidmlzaWJsZVJlY3QiLCJ3aWR0aCIsIm1heFgiLCJzY2FsZVgiLCJhaW1PZmZzZXRZIiwiZ2V0Qm9uZSIsInNjYWxlWSIsImF0YW4yIiwiYWltRGlyIiwid2VpZ2h0IiwiYWJzIiwiaW52YWxpZFVwZGF0ZSIsIkFuaW1hdGlvbkZhZGVPdXRNb2RlIiwiU2FtZUdyb3VwIiwiYXV0b0ZhZGVPdXRUaW1lIiwiZmFkZVRvdGFsVGltZSIsIl9lZmZlY3QiLCJwYXJlbnROb2RlIiwic3BlZWQiLCJwb3NpdGlvbiIsImNvcyIsInNpbiIsInRoZVBvcyIsInBsYXlBbmltYXRpb24iLCJhcm1hdHVyZU5vZGUiLCJzZXRQb3NpdGlvbiIsImFuZ2xlIiwiREVHIiwiZWZmZWN0RGlzcGxheSIsImFkZENoaWxkIiwid29ybGRQb3MiLCJjb252ZXJ0VG9Xb3JsZFNwYWNlQVIiLCJnZXRQb3NpdGlvbiIsImhlaWdodCIsImRvQ2xlYW4iLCJyZW1vdmVGcm9tUGFyZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLElBQUksQ0FBQ0EsRUFBRSxDQUFDQyxPQUFSLEVBQWlCO0VBQ2pCO0VBRUEsSUFBSUMsc0JBQXNCLEdBQUcsUUFBN0I7RUFDQSxJQUFJQyxtQkFBbUIsR0FBRyxLQUExQjtFQUNBLElBQUlDLHNCQUFzQixHQUFHLFFBQTdCO0VBQ0EsSUFBSUMsVUFBVSxHQUFHLENBQUMsRUFBbEI7RUFDQSxJQUFJQyxvQkFBb0IsR0FBRyxHQUEzQjtFQUNBLElBQUlDLG9CQUFvQixHQUFHRCxvQkFBb0IsR0FBRyxHQUFsRDtFQUNBLElBQUlFLG1CQUFtQixHQUFHRixvQkFBb0IsR0FBRyxHQUFqRDtFQUNBLElBQUlHLGFBQWEsR0FBRyxDQUFDLGdCQUFELEVBQW1CLGFBQW5CLEVBQWtDLGNBQWxDLEVBQWtELGNBQWxELEVBQWtFLGNBQWxFLEVBQWtGLGNBQWxGLENBQXBCO0VBQ0EsSUFBSUMsYUFBYSxHQUFHLENBQUMsZ0JBQUQsRUFBbUIsYUFBbkIsRUFBa0MsY0FBbEMsRUFBa0QsY0FBbEQsRUFBa0UsY0FBbEUsQ0FBcEI7RUFDQSxJQUFJQyxLQUFLLEdBQUcsQ0FBQyxhQUFELEVBQWdCLFFBQWhCLEVBQTBCLFFBQTFCLEVBQW9DLFFBQXBDLENBQVo7RUFDQSxJQUFJQyxNQUFNLEdBQUcsQ0FBQyxHQUFkO0VBQ0EsSUFBSUMsQ0FBQyxHQUFHLENBQUMsR0FBVDtFQUVBYixFQUFFLENBQUNjLEtBQUgsQ0FBUztJQUNMLFdBQVNkLEVBQUUsQ0FBQ2UsU0FEUDtJQUVMQyxNQUFNLEVBQUU7TUFDSkMsZ0JBQWdCLEVBQUVDLFdBQVcsQ0FBQ0M7SUFEMUIsQ0FGSDtJQU1MQyxVQUFVLEVBQUU7TUFDUkMsWUFBWSxFQUFHO1FBQ1gsV0FBUyxJQURFO1FBRVhDLElBQUksRUFBRXRCLEVBQUUsQ0FBQ3VCO01BRkUsQ0FEUDtNQU1SQyxRQUFRLEVBQUU7UUFDTixXQUFTLElBREg7UUFFTkYsSUFBSSxFQUFFdEIsRUFBRSxDQUFDdUI7TUFGSCxDQU5GO01BV1JFLFVBQVUsRUFBRTtRQUNSLFdBQVMsSUFERDtRQUVSSCxJQUFJLEVBQUV0QixFQUFFLENBQUN1QjtNQUZELENBWEo7TUFnQlJHLFVBQVUsRUFBRTtRQUNSLFdBQVMsSUFERDtRQUVSSixJQUFJLEVBQUV0QixFQUFFLENBQUN1QjtNQUZELENBaEJKO01BcUJSSSxXQUFXLEVBQUU7UUFDVCxXQUFTLElBREE7UUFFVEwsSUFBSSxFQUFFdEIsRUFBRSxDQUFDdUI7TUFGQSxDQXJCTDtNQTBCUkssY0FBYyxFQUFFO1FBQ1osV0FBUyxJQURHO1FBRVpOLElBQUksRUFBRUosV0FBVyxDQUFDQztNQUZOLENBMUJSO01BK0JSVSxZQUFZLEVBQUU7UUFDVixXQUFTLElBREM7UUFFVlAsSUFBSSxFQUFFSixXQUFXLENBQUNDO01BRlIsQ0EvQk47TUFvQ1JXLFFBQVEsRUFBRyxFQXBDSDtNQXFDUkMsS0FBSyxFQUFHLEtBckNBO01Bc0NSQyxNQUFNLEVBQUcsS0F0Q0Q7TUF1Q1JDLFdBQVcsRUFBRyxLQXZDTjtNQXdDUkMsV0FBVyxFQUFHLEtBeENOO01BeUNSQyxXQUFXLEVBQUcsS0F6Q047TUEwQ1JDLGFBQWEsRUFBRyxLQTFDUjtNQTJDUkMsYUFBYSxFQUFHLEtBM0NSO01BNENSQyxhQUFhLEVBQUcsQ0E1Q1I7TUE2Q1JDLGFBQWEsRUFBRyxDQTdDUjtNQThDUkMsVUFBVSxFQUFFLENBOUNKO01BK0NSQyxRQUFRLEVBQUcsQ0EvQ0g7TUFnRFJDLE9BQU8sRUFBRyxDQWhERjtNQWlEUkMsUUFBUSxFQUFHLENBakRIO01Ba0RSQyxVQUFVLEVBQUcsQ0FsREw7TUFtRFJDLE9BQU8sRUFBRyxDQW5ERjtNQW9EUkMsT0FBTyxFQUFHLENBcERGO01BcURSQyxTQUFTLEVBQUcsSUFyREo7TUFzRFJDLGdCQUFnQixFQUFHLElBdERYO01BdURSQyxRQUFRLEVBQUcsSUF2REg7TUF3RFJDLFFBQVEsRUFBRyxJQXhESDtNQXlEUkMsU0FBUyxFQUFHLElBekRKO01BMERSQyxVQUFVLEVBQUcsSUExREw7TUEyRFJDLFlBQVksRUFBRyxJQTNEUDtNQTREUkMsT0FBTyxFQUFHdEQsRUFBRSxDQUFDdUQsRUFBSCxDQUFNLENBQU4sRUFBUyxDQUFUO0lBNURGLENBTlA7SUFxRUw7SUFDQUMsTUFBTSxFQUFFLGtCQUFZO01BQUE7O01BQ2hCLEtBQUtSLGdCQUFMLEdBQXdCLEtBQUtTLFlBQUwsQ0FBa0J2QyxXQUFXLENBQUNDLGVBQTlCLENBQXhCO01BQ0EsS0FBSzRCLFNBQUwsR0FBaUIsS0FBS0MsZ0JBQUwsQ0FBc0JVLFFBQXRCLEVBQWpCOztNQUVBLEtBQUtWLGdCQUFMLENBQXNCVyxnQkFBdEIsQ0FBdUN6QyxXQUFXLENBQUMwQyxXQUFaLENBQXdCQyxnQkFBL0QsRUFBaUYsS0FBS0Msc0JBQXRGLEVBQThHLElBQTlHOztNQUNBLEtBQUtkLGdCQUFMLENBQXNCVyxnQkFBdEIsQ0FBdUN6QyxXQUFXLENBQUMwQyxXQUFaLENBQXdCRyxpQkFBL0QsRUFBa0YsS0FBS0Qsc0JBQXZGLEVBQStHLElBQS9HOztNQUNBLEtBQUtkLGdCQUFMLENBQXNCVyxnQkFBdEIsQ0FBdUN6QyxXQUFXLENBQUMwQyxXQUFaLENBQXdCSSxRQUEvRCxFQUF5RSxLQUFLRixzQkFBOUUsRUFBc0csSUFBdEc7O01BRUEsS0FBS2IsUUFBTCxHQUFnQixLQUFLRixTQUFMLENBQWVrQixPQUFmLENBQXVCLFVBQXZCLEVBQW1DQyxhQUFuRDtNQUNBLEtBQUtoQixRQUFMLEdBQWdCLEtBQUtILFNBQUwsQ0FBZWtCLE9BQWYsQ0FBdUIsVUFBdkIsRUFBbUNDLGFBQW5EOztNQUNBLEtBQUtqQixRQUFMLENBQWNVLGdCQUFkLENBQStCekMsV0FBVyxDQUFDMEMsV0FBWixDQUF3Qk8sV0FBdkQsRUFBb0UsS0FBS0Msa0JBQXpFLEVBQTZGLElBQTdGOztNQUNBLEtBQUtsQixRQUFMLENBQWNTLGdCQUFkLENBQStCekMsV0FBVyxDQUFDMEMsV0FBWixDQUF3Qk8sV0FBdkQsRUFBb0UsS0FBS0Msa0JBQXpFLEVBQTZGLElBQTdGLEVBWGdCLENBYWhCOzs7TUFDQSxLQUFLLElBQUlDLENBQUMsR0FBRyxDQUFiLEVBQWdCQSxDQUFDLEdBQUcxRCxLQUFLLENBQUMyRCxNQUExQixFQUFrQ0QsQ0FBQyxFQUFuQyxFQUF1QztRQUNuQyxLQUFLeEMsWUFBTCxDQUFrQjBDLFlBQWxCLEdBQWlDNUQsS0FBSyxDQUFDMEQsQ0FBRCxDQUF0QztNQUNIOztNQUVELEtBQUssSUFBSUEsRUFBQyxHQUFHLENBQWIsRUFBZ0JBLEVBQUMsR0FBRzVELGFBQWEsQ0FBQzZELE1BQWxDLEVBQTBDRCxFQUFDLEVBQTNDLEVBQStDO1FBQzNDLEtBQUt6QyxjQUFMLENBQW9CMkMsWUFBcEIsR0FBbUM5RCxhQUFhLENBQUM0RCxFQUFELENBQWhEO01BQ0g7O01BRUQsS0FBS0csZ0JBQUw7O01BRUEsSUFBSSxLQUFLbkQsWUFBVCxFQUF1QjtRQUNuQjtRQUNBLEtBQUtBLFlBQUwsQ0FBa0JvRCxFQUFsQixDQUFxQnpFLEVBQUUsQ0FBQ3VCLElBQUgsQ0FBUW1ELFNBQVIsQ0FBa0JDLFdBQXZDLEVBQW9ELFVBQUFDLEtBQUssRUFBSTtVQUN6RCxLQUFJLENBQUNDLFdBQUwsR0FBbUIsSUFBbkI7VUFDQSxJQUFJQyxPQUFPLEdBQUdGLEtBQUssQ0FBQ0csVUFBTixFQUFkO1VBQ0EsSUFBSUMsUUFBUSxHQUFHRixPQUFPLENBQUMsQ0FBRCxDQUFQLENBQVdHLFdBQVgsRUFBZjs7VUFDQSxLQUFJLENBQUNDLEdBQUwsQ0FBU0YsUUFBUSxDQUFDRyxDQUFsQixFQUFxQkgsUUFBUSxDQUFDSSxDQUE5Qjs7VUFDQSxLQUFJLENBQUNDLE1BQUwsQ0FBWSxJQUFaO1FBQ0gsQ0FORCxFQU1HLElBTkg7UUFPQSxLQUFLaEUsWUFBTCxDQUFrQm9ELEVBQWxCLENBQXFCekUsRUFBRSxDQUFDdUIsSUFBSCxDQUFRbUQsU0FBUixDQUFrQlksU0FBdkMsRUFBa0QsVUFBQVYsS0FBSyxFQUFJO1VBQ3ZELEtBQUksQ0FBQ0MsV0FBTCxHQUFtQixLQUFuQjs7VUFDQSxLQUFJLENBQUNRLE1BQUwsQ0FBWSxLQUFaO1FBQ0gsQ0FIRCxFQUdHLElBSEg7UUFJQSxLQUFLaEUsWUFBTCxDQUFrQm9ELEVBQWxCLENBQXFCekUsRUFBRSxDQUFDdUIsSUFBSCxDQUFRbUQsU0FBUixDQUFrQmEsVUFBdkMsRUFBbUQsVUFBQVgsS0FBSyxFQUFJO1VBQ3hELElBQUlFLE9BQU8sR0FBR0YsS0FBSyxDQUFDRyxVQUFOLEVBQWQ7VUFDQSxJQUFJQyxRQUFRLEdBQUdGLE9BQU8sQ0FBQyxDQUFELENBQVAsQ0FBV0csV0FBWCxFQUFmOztVQUNBLEtBQUksQ0FBQ0MsR0FBTCxDQUFTRixRQUFRLENBQUNHLENBQWxCLEVBQXFCSCxRQUFRLENBQUNJLENBQTlCO1FBQ0gsQ0FKRCxFQUlHLElBSkg7TUFLSDs7TUFFRCxJQUFJLEtBQUs1RCxRQUFULEVBQW1CO1FBQ2YsS0FBS0EsUUFBTCxDQUFjaUQsRUFBZCxDQUFpQnpFLEVBQUUsQ0FBQ3VCLElBQUgsQ0FBUW1ELFNBQVIsQ0FBa0JDLFdBQW5DLEVBQWdELFVBQUFDLEtBQUssRUFBSTtVQUNyRCxLQUFJLENBQUNZLElBQUw7UUFDSCxDQUZELEVBRUcsSUFGSDtNQUdIOztNQUVELElBQUksS0FBSy9ELFVBQVQsRUFBcUI7UUFDakIsS0FBS0EsVUFBTCxDQUFnQmdELEVBQWhCLENBQW1CekUsRUFBRSxDQUFDdUIsSUFBSCxDQUFRbUQsU0FBUixDQUFrQkMsV0FBckMsRUFBa0QsVUFBQUMsS0FBSyxFQUFJO1VBQ3ZELEtBQUksQ0FBQ2EsS0FBTCxDQUFXLElBQVg7UUFDSCxDQUZELEVBRUcsSUFGSDtRQUdBLEtBQUtoRSxVQUFMLENBQWdCZ0QsRUFBaEIsQ0FBbUJ6RSxFQUFFLENBQUN1QixJQUFILENBQVFtRCxTQUFSLENBQWtCWSxTQUFyQyxFQUFnRCxVQUFBVixLQUFLLEVBQUk7VUFDckQsS0FBSSxDQUFDYSxLQUFMLENBQVcsS0FBWDtRQUNILENBRkQsRUFFRyxJQUZIO1FBR0EsS0FBS2hFLFVBQUwsQ0FBZ0JnRCxFQUFoQixDQUFtQnpFLEVBQUUsQ0FBQ3VCLElBQUgsQ0FBUW1ELFNBQVIsQ0FBa0JnQixZQUFyQyxFQUFtRCxVQUFBZCxLQUFLLEVBQUk7VUFDeEQsS0FBSSxDQUFDYSxLQUFMLENBQVcsS0FBWDtRQUNILENBRkQsRUFFRyxJQUZIO01BR0g7O01BRUQsSUFBSSxLQUFLL0QsVUFBVCxFQUFxQjtRQUNqQixLQUFLQSxVQUFMLENBQWdCK0MsRUFBaEIsQ0FBbUJ6RSxFQUFFLENBQUN1QixJQUFILENBQVFtRCxTQUFSLENBQWtCQyxXQUFyQyxFQUFrRCxVQUFBQyxLQUFLLEVBQUk7VUFDdkQsS0FBSSxDQUFDN0MsS0FBTCxHQUFhLElBQWI7O1VBQ0EsS0FBSSxDQUFDNEQsV0FBTCxDQUFpQixDQUFDLENBQWxCO1FBQ0gsQ0FIRCxFQUdHLElBSEg7UUFJQSxLQUFLakUsVUFBTCxDQUFnQitDLEVBQWhCLENBQW1CekUsRUFBRSxDQUFDdUIsSUFBSCxDQUFRbUQsU0FBUixDQUFrQlksU0FBckMsRUFBZ0QsVUFBQVYsS0FBSyxFQUFJO1VBQ3JELEtBQUksQ0FBQzdDLEtBQUwsR0FBYSxLQUFiOztVQUNBLEtBQUksQ0FBQzRELFdBQUwsQ0FBaUIsQ0FBQyxDQUFsQjtRQUNILENBSEQsRUFHRyxJQUhIO1FBSUEsS0FBS2pFLFVBQUwsQ0FBZ0IrQyxFQUFoQixDQUFtQnpFLEVBQUUsQ0FBQ3VCLElBQUgsQ0FBUW1ELFNBQVIsQ0FBa0JnQixZQUFyQyxFQUFtRCxVQUFBZCxLQUFLLEVBQUk7VUFDeEQsS0FBSSxDQUFDN0MsS0FBTCxHQUFhLEtBQWI7O1VBQ0EsS0FBSSxDQUFDNEQsV0FBTCxDQUFpQixDQUFDLENBQWxCO1FBQ0gsQ0FIRCxFQUdHLElBSEg7TUFJSDs7TUFFRCxJQUFJLEtBQUtoRSxXQUFULEVBQXNCO1FBQ2xCLEtBQUtBLFdBQUwsQ0FBaUI4QyxFQUFqQixDQUFvQnpFLEVBQUUsQ0FBQ3VCLElBQUgsQ0FBUW1ELFNBQVIsQ0FBa0JDLFdBQXRDLEVBQW1ELFVBQUFDLEtBQUssRUFBSTtVQUN4RCxLQUFJLENBQUM1QyxNQUFMLEdBQWMsSUFBZDs7VUFDQSxLQUFJLENBQUMyRCxXQUFMLENBQWlCLENBQWpCO1FBQ0gsQ0FIRCxFQUdHLElBSEg7UUFJQSxLQUFLaEUsV0FBTCxDQUFpQjhDLEVBQWpCLENBQW9CekUsRUFBRSxDQUFDdUIsSUFBSCxDQUFRbUQsU0FBUixDQUFrQlksU0FBdEMsRUFBaUQsVUFBQVYsS0FBSyxFQUFJO1VBQ3RELEtBQUksQ0FBQzVDLE1BQUwsR0FBYyxLQUFkOztVQUNBLEtBQUksQ0FBQzJELFdBQUwsQ0FBaUIsQ0FBakI7UUFDSCxDQUhELEVBR0csSUFISDtRQUlBLEtBQUtoRSxXQUFMLENBQWlCOEMsRUFBakIsQ0FBb0J6RSxFQUFFLENBQUN1QixJQUFILENBQVFtRCxTQUFSLENBQWtCZ0IsWUFBdEMsRUFBb0QsVUFBQWQsS0FBSyxFQUFJO1VBQ3pELEtBQUksQ0FBQzVDLE1BQUwsR0FBYyxLQUFkOztVQUNBLEtBQUksQ0FBQzJELFdBQUwsQ0FBaUIsQ0FBakI7UUFDSCxDQUhELEVBR0csSUFISDtNQUlILENBMUZlLENBNEZoQjs7O01BQ0EzRixFQUFFLENBQUM0RixXQUFILENBQWVuQixFQUFmLENBQWtCekUsRUFBRSxDQUFDNkYsV0FBSCxDQUFlbkIsU0FBZixDQUF5Qm9CLFFBQTNDLEVBQXFELFVBQVVsQixLQUFWLEVBQWlCO1FBQ2xFLEtBQUttQixXQUFMLENBQWlCbkIsS0FBSyxDQUFDb0IsT0FBdkIsRUFBZ0MsSUFBaEM7TUFDSCxDQUZELEVBRUcsSUFGSDtNQUdBaEcsRUFBRSxDQUFDNEYsV0FBSCxDQUFlbkIsRUFBZixDQUFrQnpFLEVBQUUsQ0FBQzZGLFdBQUgsQ0FBZW5CLFNBQWYsQ0FBeUJ1QixNQUEzQyxFQUFtRCxVQUFVckIsS0FBVixFQUFpQjtRQUNoRSxLQUFLbUIsV0FBTCxDQUFpQm5CLEtBQUssQ0FBQ29CLE9BQXZCLEVBQWdDLEtBQWhDO01BQ0gsQ0FGRCxFQUVHLElBRkg7SUFHSCxDQXpLSTtJQTJLTEQsV0FBVyxFQUFFLHFCQUFTQyxPQUFULEVBQWtCRSxNQUFsQixFQUEwQjtNQUNuQyxRQUFPRixPQUFQO1FBQ0ksS0FBS2hHLEVBQUUsQ0FBQ21HLEtBQUgsQ0FBU0MsR0FBVCxDQUFhQyxDQUFsQjtRQUNBLEtBQUtyRyxFQUFFLENBQUNtRyxLQUFILENBQVNDLEdBQVQsQ0FBYUUsSUFBbEI7VUFDSSxLQUFLdkUsS0FBTCxHQUFhbUUsTUFBYjs7VUFDQSxLQUFLUCxXQUFMLENBQWlCLENBQUMsQ0FBbEI7O1VBQ0E7O1FBQ0osS0FBSzNGLEVBQUUsQ0FBQ21HLEtBQUgsQ0FBU0MsR0FBVCxDQUFhRyxDQUFsQjtRQUNBLEtBQUt2RyxFQUFFLENBQUNtRyxLQUFILENBQVNDLEdBQVQsQ0FBYUksS0FBbEI7VUFDSSxLQUFLeEUsTUFBTCxHQUFja0UsTUFBZDs7VUFDQSxLQUFLUCxXQUFMLENBQWlCLENBQWpCOztVQUNBOztRQUNKLEtBQUszRixFQUFFLENBQUNtRyxLQUFILENBQVNDLEdBQVQsQ0FBYUssQ0FBbEI7UUFDQSxLQUFLekcsRUFBRSxDQUFDbUcsS0FBSCxDQUFTQyxHQUFULENBQWFNLEVBQWxCO1VBQ0ksSUFBSVIsTUFBSixFQUFZO1lBQ1IsS0FBS1YsSUFBTDtVQUNIOztVQUNEOztRQUNKLEtBQUt4RixFQUFFLENBQUNtRyxLQUFILENBQVNDLEdBQVQsQ0FBYU8sQ0FBbEI7UUFDQSxLQUFLM0csRUFBRSxDQUFDbUcsS0FBSCxDQUFTQyxHQUFULENBQWFRLElBQWxCO1VBQ0ksS0FBS25CLEtBQUwsQ0FBV1MsTUFBWDtVQUNBOztRQUNKLEtBQUtsRyxFQUFFLENBQUNtRyxLQUFILENBQVNDLEdBQVQsQ0FBYVMsQ0FBbEI7VUFDSSxJQUFJWCxNQUFKLEVBQVk7WUFDUixLQUFLWSxhQUFMO1VBQ0g7O1VBQ0Q7O1FBQ0osS0FBSzlHLEVBQUUsQ0FBQ21HLEtBQUgsQ0FBU0MsR0FBVCxDQUFhVyxDQUFsQjtVQUNJLElBQUliLE1BQUosRUFBWTtZQUNSLEtBQUtjLGFBQUw7VUFDSDs7VUFDRDs7UUFDSixLQUFLaEgsRUFBRSxDQUFDbUcsS0FBSCxDQUFTQyxHQUFULENBQWFhLEtBQWxCO1VBQ0ksSUFBSWYsTUFBSixFQUFZO1lBQ1IsS0FBS1ksYUFBTDtZQUNBLEtBQUtFLGFBQUw7VUFDSDs7VUFDRDs7UUFDSjtVQUNJO01BdENSO0lBd0NILENBcE5JO0lBc05MckIsV0FBVyxFQUFHLHFCQUFVdUIsR0FBVixFQUFlO01BQ3pCLElBQUksS0FBS25GLEtBQUwsSUFBYyxLQUFLQyxNQUF2QixFQUErQjtRQUMzQixLQUFLbUYsSUFBTCxDQUFVRCxHQUFWO01BQ0gsQ0FGRCxNQUVPLElBQUksS0FBS25GLEtBQVQsRUFBZ0I7UUFDbkIsS0FBS29GLElBQUwsQ0FBVSxDQUFDLENBQVg7TUFDSCxDQUZNLE1BRUEsSUFBSSxLQUFLbkYsTUFBVCxFQUFpQjtRQUNwQixLQUFLbUYsSUFBTCxDQUFVLENBQVY7TUFDSCxDQUZNLE1BRUE7UUFDSCxLQUFLQSxJQUFMLENBQVUsQ0FBVjtNQUNIO0lBQ0osQ0FoT0k7SUFrT0xBLElBQUksRUFBRyxjQUFTRCxHQUFULEVBQWM7TUFDakIsSUFBSSxLQUFLdkUsUUFBTCxLQUFrQnVFLEdBQXRCLEVBQTJCO1FBQ3ZCO01BQ0g7O01BRUQsS0FBS3ZFLFFBQUwsR0FBZ0J1RSxHQUFoQjs7TUFDQSxLQUFLMUMsZ0JBQUw7SUFDSCxDQXpPSTtJQTJPTGdCLElBQUksRUFBRyxnQkFBWTtNQUNmLElBQUksS0FBS3ZELFdBQVQsRUFBc0I7UUFDbEI7TUFDSDs7TUFFRCxLQUFLQSxXQUFMLEdBQW1CLElBQW5COztNQUNBLEtBQUtjLFNBQUwsQ0FBZXFFLFNBQWYsQ0FBeUJDLE1BQXpCLENBQWdDLFFBQWhDLEVBQTBDLENBQUMsQ0FBM0MsRUFBOEMsQ0FBQyxDQUEvQyxFQUFrRCxDQUFsRCxFQUFxRG5ILHNCQUFyRDs7TUFDQSxLQUFLa0QsVUFBTCxHQUFrQixJQUFsQjtJQUNILENBblBJO0lBcVBMcUMsS0FBSyxFQUFHLGVBQVM2QixVQUFULEVBQXFCO01BQ3pCLElBQUksS0FBS25GLFdBQUwsS0FBcUJtRixVQUF6QixFQUFxQztRQUNqQztNQUNIOztNQUVELEtBQUtuRixXQUFMLEdBQW1CbUYsVUFBbkI7O01BQ0EsS0FBSzlDLGdCQUFMO0lBQ0gsQ0E1UEk7SUE4UExhLE1BQU0sRUFBRyxnQkFBVWtDLFdBQVYsRUFBdUI7TUFDNUIsSUFBSSxLQUFLbkYsYUFBTCxJQUFzQm1GLFdBQTFCLEVBQXVDO1FBQ25DO01BQ0g7O01BRUQsS0FBS25GLGFBQUwsR0FBcUJtRixXQUFyQjtJQUNILENBcFFJO0lBc1FMUCxhQUFhLEVBQUcseUJBQVc7TUFDdkIsS0FBSzlELFFBQUwsQ0FBY3NFLG1CQUFkLENBQWtDdEcsV0FBVyxDQUFDMEMsV0FBWixDQUF3Qk8sV0FBMUQsRUFBdUUsS0FBS0Msa0JBQTVFLEVBQWdHLElBQWhHOztNQUVBLEtBQUs3QixhQUFMOztNQUNBLElBQUksS0FBS0EsYUFBTCxJQUFzQjdCLGFBQWEsQ0FBQzRELE1BQXhDLEVBQWdEO1FBQzVDLEtBQUsvQixhQUFMLEdBQXFCLENBQXJCO01BQ0g7O01BRUQsSUFBSWtGLGFBQWEsR0FBRy9HLGFBQWEsQ0FBQyxLQUFLNkIsYUFBTixDQUFqQztNQUNBLElBQUltRixPQUFPLEdBQUd4RyxXQUFXLENBQUN5RyxTQUFaLENBQXNCQyxXQUF0QixFQUFkO01BQ0EsS0FBSzFFLFFBQUwsR0FBZ0J3RSxPQUFPLENBQUNHLGFBQVIsQ0FBc0JKLGFBQXRCLENBQWhCO01BQ0EsS0FBSzFFLFNBQUwsQ0FBZWtCLE9BQWYsQ0FBdUIsVUFBdkIsRUFBbUNDLGFBQW5DLEdBQW1ELEtBQUtoQixRQUF4RDs7TUFFQSxLQUFLQSxRQUFMLENBQWNTLGdCQUFkLENBQStCekMsV0FBVyxDQUFDMEMsV0FBWixDQUF3Qk8sV0FBdkQsRUFBb0UsS0FBS0Msa0JBQXpFLEVBQTZGLElBQTdGO0lBQ0gsQ0FwUkk7SUFzUkwwQyxhQUFhLEVBQUcseUJBQVc7TUFDdkIsS0FBSzdELFFBQUwsQ0FBY3VFLG1CQUFkLENBQWtDdEcsV0FBVyxDQUFDMEMsV0FBWixDQUF3Qk8sV0FBMUQsRUFBdUUsS0FBS0Msa0JBQTVFLEVBQWdHLElBQWhHOztNQUVBLEtBQUs5QixhQUFMOztNQUNBLElBQUksS0FBS0EsYUFBTCxJQUFzQjdCLGFBQWEsQ0FBQzZELE1BQXhDLEVBQWdEO1FBQzVDLEtBQUtoQyxhQUFMLEdBQXFCLENBQXJCO01BQ0g7O01BRUQsSUFBSW1GLGFBQWEsR0FBR2hILGFBQWEsQ0FBQyxLQUFLNkIsYUFBTixDQUFqQztNQUNBLElBQUlvRixPQUFPLEdBQUd4RyxXQUFXLENBQUN5RyxTQUFaLENBQXNCQyxXQUF0QixFQUFkO01BQ0EsS0FBSzNFLFFBQUwsR0FBZ0J5RSxPQUFPLENBQUNHLGFBQVIsQ0FBc0JKLGFBQXRCLENBQWhCO01BQ0EsS0FBSzFFLFNBQUwsQ0FBZWtCLE9BQWYsQ0FBdUIsVUFBdkIsRUFBbUNDLGFBQW5DLEdBQW1ELEtBQUtqQixRQUF4RDs7TUFFQSxLQUFLQSxRQUFMLENBQWNVLGdCQUFkLENBQStCekMsV0FBVyxDQUFDMEMsV0FBWixDQUF3Qk8sV0FBdkQsRUFBb0UsS0FBS0Msa0JBQXpFLEVBQTZGLElBQTdGO0lBQ0gsQ0FwU0k7SUFzU0wwRCxVQUFVLEVBQUcsc0JBQVk7TUFDckIsS0FBS3RGLFVBQUw7O01BQ0EsSUFBSSxLQUFLQSxVQUFMLElBQW1CN0IsS0FBSyxDQUFDMkQsTUFBN0IsRUFDQTtRQUNJLEtBQUs5QixVQUFMLEdBQWtCLENBQWxCO01BQ0g7O01BQ0QsSUFBSXVGLFFBQVEsR0FBR3BILEtBQUssQ0FBQyxLQUFLNkIsVUFBTixDQUFwQjtNQUNBLElBQUlrRixPQUFPLEdBQUd4RyxXQUFXLENBQUN5RyxTQUFaLENBQXNCQyxXQUF0QixFQUFkO01BQ0EsSUFBSUksUUFBUSxHQUFHTixPQUFPLENBQUNPLGVBQVIsQ0FBd0JGLFFBQXhCLEVBQWtDRyxXQUFqRDtNQUNBUixPQUFPLENBQUNTLFdBQVIsQ0FBb0IsS0FBS25GLGdCQUFMLENBQXNCVSxRQUF0QixFQUFwQixFQUFzRHNFLFFBQXRELEVBQWdFLEtBQWhFLEVBQXVFLENBQUMsVUFBRCxFQUFhLFVBQWIsQ0FBdkU7SUFDSCxDQWhUSTtJQWtUTDlDLEdBQUcsRUFBRyxhQUFTQyxDQUFULEVBQVlDLENBQVosRUFBZTtNQUNqQixJQUFJLEtBQUsxQyxPQUFMLEtBQWlCLENBQXJCLEVBQXdCO1FBQ3BCLEtBQUtBLE9BQUwsR0FBZSxFQUFmO01BQ0g7O01BRUQsS0FBS1ksT0FBTCxHQUFlLEtBQUs4RSxJQUFMLENBQVVDLE1BQVYsQ0FBaUJDLG9CQUFqQixDQUFzQ3RJLEVBQUUsQ0FBQ3VELEVBQUgsQ0FBTTRCLENBQU4sRUFBU0MsQ0FBVCxDQUF0QyxDQUFmO0lBQ0gsQ0F4VEk7SUEwVExtRCxNQUFNLEVBQUcsZ0JBQVVDLEVBQVYsRUFBYztNQUNuQixLQUFLQyxlQUFMOztNQUNBLEtBQUtDLFVBQUw7O01BQ0EsS0FBS0MsYUFBTDs7TUFDQSxLQUFLQyxrQkFBTCxDQUF3QkosRUFBeEI7SUFDSCxDQS9USTtJQWlVTEssU0FBUyxFQUFHLHFCQUFXO01BQ25CO01BQ0EsS0FBSyxJQUFJeEUsQ0FBQyxHQUFHLEtBQUt2QyxRQUFMLENBQWN3QyxNQUFkLEdBQXVCLENBQXBDLEVBQXVDRCxDQUFDLElBQUksQ0FBNUMsRUFBK0NBLENBQUMsRUFBaEQsRUFDQTtRQUNJLElBQUl5RSxNQUFNLEdBQUcsS0FBS2hILFFBQUwsQ0FBY3VDLENBQWQsQ0FBYjtRQUNBeUUsTUFBTSxDQUFDQyxPQUFQLEdBQWlCLEtBQWpCO01BQ0g7O01BQ0QsS0FBS2pILFFBQUwsR0FBZ0IsRUFBaEI7SUFDSCxDQXpVSTtJQTJVTGtILFNBQVMsRUFBRyxtQkFBU0YsTUFBVCxFQUFpQjtNQUN6QixLQUFLaEgsUUFBTCxDQUFjbUgsSUFBZCxDQUFtQkgsTUFBbkI7SUFDSCxDQTdVSTtJQStVTEYsa0JBQWtCLEVBQUcsNEJBQVVKLEVBQVYsRUFBYztNQUMvQixLQUFLLElBQUluRSxDQUFDLEdBQUcsS0FBS3ZDLFFBQUwsQ0FBY3dDLE1BQWQsR0FBdUIsQ0FBcEMsRUFBdUNELENBQUMsSUFBSSxDQUE1QyxFQUErQ0EsQ0FBQyxFQUFoRCxFQUNBO1FBQ0ksSUFBSXlFLE1BQU0sR0FBRyxLQUFLaEgsUUFBTCxDQUFjdUMsQ0FBZCxDQUFiOztRQUNBLElBQUl5RSxNQUFNLENBQUNQLE1BQVAsRUFBSixFQUNBO1VBQ0ksS0FBS3pHLFFBQUwsQ0FBY29ILE1BQWQsQ0FBcUI3RSxDQUFyQixFQUF3QixDQUF4QjtRQUNIO01BQ0o7SUFDSixDQXhWSTtJQTBWTFAsc0JBQXNCLEVBQUUsZ0NBQVVjLEtBQVYsRUFBaUI7TUFDckMsSUFBSUEsS0FBSyxDQUFDdEQsSUFBTixLQUFlSixXQUFXLENBQUMwQyxXQUFaLENBQXdCQyxnQkFBM0MsRUFBNkQ7UUFDekQsSUFBSWUsS0FBSyxDQUFDdUUsY0FBTixDQUFxQkMsSUFBckIsS0FBOEIsUUFBbEMsRUFBNEM7VUFDeEMsS0FBS2xILFdBQUwsR0FBbUIsSUFBbkI7VUFDQSxLQUFLWSxPQUFMLEdBQWUsQ0FBQ3pDLFVBQWhCOztVQUVBLElBQUksS0FBS3NDLFFBQUwsSUFBaUIsQ0FBckIsRUFDQTtZQUNJLElBQUksS0FBS0EsUUFBTCxHQUFnQixLQUFLRixRQUFyQixHQUFnQyxDQUFwQyxFQUNBO2NBQ0ksS0FBS0ksT0FBTCxHQUFldEMsb0JBQW9CLEdBQUcsS0FBS2tDLFFBQTNDO1lBQ0gsQ0FIRCxNQUtBO2NBQ0ksS0FBS0ksT0FBTCxHQUFlLENBQUNyQyxtQkFBRCxHQUF1QixLQUFLaUMsUUFBM0M7WUFDSDtVQUNKOztVQUVELEtBQUtNLFNBQUwsQ0FBZXFFLFNBQWYsQ0FBeUJDLE1BQXpCLENBQWdDLFFBQWhDLEVBQTBDLENBQUMsQ0FBM0MsRUFBOEMsQ0FBQyxDQUEvQyxFQUFrRCxDQUFsRCxFQUFxRG5ILHNCQUFyRCxFQUE2RW1KLFdBQTdFLEdBQTJGLEtBQTNGO1FBQ0gsQ0FqQkQsTUFpQk8sSUFBSXpFLEtBQUssQ0FBQ3VFLGNBQU4sQ0FBcUJDLElBQXJCLEtBQThCLFFBQWxDLEVBQTRDO1VBQy9DLEtBQUs1RSxnQkFBTDtRQUNIO01BQ0osQ0FyQkQsTUFzQkssSUFBSUksS0FBSyxDQUFDdEQsSUFBTixLQUFlSixXQUFXLENBQUMwQyxXQUFaLENBQXdCRyxpQkFBM0MsRUFBOEQ7UUFDL0QsSUFBSWEsS0FBSyxDQUFDdUUsY0FBTixDQUFxQkMsSUFBckIsS0FBOEIsV0FBbEMsRUFBK0M7VUFDM0MsS0FBSy9HLGFBQUwsR0FBcUIsS0FBckI7VUFDQSxLQUFLZ0IsWUFBTCxHQUFvQixJQUFwQjtRQUNIO01BQ0osQ0FMSSxNQU1BLElBQUl1QixLQUFLLENBQUN0RCxJQUFOLEtBQWVKLFdBQVcsQ0FBQzBDLFdBQVosQ0FBd0JJLFFBQTNDLEVBQXFEO1FBQ3RELElBQUlZLEtBQUssQ0FBQ3VFLGNBQU4sQ0FBcUJDLElBQXJCLEtBQThCLFFBQWxDLEVBQTRDO1VBQ3hDLEtBQUtuSCxXQUFMLEdBQW1CLEtBQW5CO1VBQ0EsS0FBS0MsV0FBTCxHQUFtQixLQUFuQjs7VUFDQSxLQUFLc0MsZ0JBQUw7UUFDSDtNQUNKO0lBQ0osQ0E5WEk7SUFnWUxKLGtCQUFrQixFQUFHLDRCQUFVUSxLQUFWLEVBQWlCO01BQ2xDLElBQUlBLEtBQUssQ0FBQ3dFLElBQU4sS0FBZSxNQUFuQixFQUEyQjtRQUN2QjtRQUNBLElBQUlFLFVBQVUsR0FBR3RKLEVBQUUsQ0FBQ3VELEVBQUgsQ0FBTXFCLEtBQUssQ0FBQzJFLElBQU4sQ0FBV0MsTUFBWCxDQUFrQnJFLENBQXhCLEVBQTJCUCxLQUFLLENBQUMyRSxJQUFOLENBQVdDLE1BQVgsQ0FBa0JwRSxDQUE3QyxDQUFqQjtRQUVBLElBQUlxRSxPQUFPLEdBQUc3RSxLQUFLLENBQUNsQixRQUFOLENBQWUrRixPQUE3QjtRQUNBLElBQUlDLFdBQVcsR0FBR0QsT0FBTyxDQUFDckIsSUFBUixDQUFhdUIsbUJBQWIsQ0FBaUNMLFVBQWpDLENBQWxCOztRQUVBLEtBQUtNLEtBQUwsQ0FBV0YsV0FBWDtNQUNIO0lBQ0osQ0ExWUk7SUE0WUxFLEtBQUssRUFBRyxlQUFVQyxTQUFWLEVBQXFCO01BQ3pCQSxTQUFTLENBQUMxRSxDQUFWLElBQWUyRSxJQUFJLENBQUNDLE1BQUwsS0FBZ0IsQ0FBaEIsR0FBb0IsQ0FBbkM7TUFDQUYsU0FBUyxDQUFDekUsQ0FBVixJQUFlMEUsSUFBSSxDQUFDQyxNQUFMLEtBQWdCLENBQWhCLEdBQW9CLENBQW5DOztNQUVBLElBQUlyRyxRQUFRLEdBQUcsS0FBS1YsZ0JBQUwsQ0FBc0I2RSxhQUF0QixDQUFvQyxXQUFwQyxDQUFmOztNQUNBLElBQUltQyxNQUFNLEdBQUcsS0FBS2hILGdCQUFMLENBQXNCNkUsYUFBdEIsQ0FBb0MsZ0JBQXBDLENBQWI7O01BQ0EsSUFBSW9DLE1BQU0sR0FBRyxLQUFLeEgsUUFBTCxHQUFnQixDQUFoQixHQUFvQnFILElBQUksQ0FBQ0ksRUFBTCxHQUFVLEtBQUt0SCxVQUFuQyxHQUFnRCxLQUFLQSxVQUFsRTtNQUNBLElBQUlrRyxNQUFNLEdBQUcsSUFBSXFCLFlBQUosRUFBYjtNQUNBckIsTUFBTSxDQUFDc0IsSUFBUCxDQUFZLEtBQUtoQyxJQUFMLENBQVVDLE1BQXRCLEVBQThCM0UsUUFBOUIsRUFBd0NzRyxNQUF4QyxFQUFnREMsTUFBTSxHQUFHSCxJQUFJLENBQUNDLE1BQUwsS0FBZ0IsSUFBekIsR0FBZ0MsSUFBaEYsRUFBc0YsRUFBdEYsRUFBMEZGLFNBQTFGO01BQ0EsS0FBS2IsU0FBTCxDQUFlRixNQUFmO0lBQ0gsQ0F0Wkk7SUF3Wkx0RSxnQkFBZ0IsRUFBRyw0QkFBVztNQUMxQixJQUFJLEtBQUt2QyxXQUFULEVBQXNCO1FBQ2xCO01BQ0g7O01BRUQsSUFBSSxLQUFLRSxXQUFULEVBQXNCO1FBQ2xCLEtBQUtVLE9BQUwsR0FBZSxDQUFmO1FBQ0EsS0FBS0UsU0FBTCxDQUFlcUUsU0FBZixDQUF5QkMsTUFBekIsQ0FBZ0MsT0FBaEMsRUFBeUMsQ0FBQyxDQUExQyxFQUE2QyxDQUFDLENBQTlDLEVBQWlELENBQWpELEVBQW9Ebkgsc0JBQXBELEVBQTRFbUosV0FBNUUsR0FBMEYsS0FBMUY7UUFDQSxLQUFLakcsVUFBTCxHQUFrQixJQUFsQjtRQUNBO01BQ0g7O01BRUQsSUFBSSxLQUFLVCxRQUFMLEtBQWtCLENBQXRCLEVBQXlCO1FBQ3JCLEtBQUtFLE9BQUwsR0FBZSxDQUFmO1FBQ0EsS0FBS0UsU0FBTCxDQUFlcUUsU0FBZixDQUF5QkMsTUFBekIsQ0FBZ0MsTUFBaEMsRUFBd0MsQ0FBQyxDQUF6QyxFQUE0QyxDQUFDLENBQTdDLEVBQWdELENBQWhELEVBQW1Ebkgsc0JBQW5ELEVBQTJFbUosV0FBM0UsR0FBeUYsS0FBekY7UUFDQSxLQUFLakcsVUFBTCxHQUFrQixJQUFsQjtNQUNILENBSkQsTUFJTztRQUNILElBQUksQ0FBQyxLQUFLQSxVQUFWLEVBQXNCO1VBQ2xCLEtBQUtBLFVBQUwsR0FBa0IsS0FBS0wsU0FBTCxDQUFlcUUsU0FBZixDQUF5QkMsTUFBekIsQ0FBZ0MsTUFBaEMsRUFBd0MsQ0FBQyxDQUF6QyxFQUE0QyxDQUFDLENBQTdDLEVBQWdELENBQWhELEVBQW1Ebkgsc0JBQW5ELENBQWxCO1VBQ0EsS0FBS2tELFVBQUwsQ0FBZ0JpRyxXQUFoQixHQUE4QixLQUE5QjtRQUNIOztRQUVELElBQUksS0FBSzFHLFFBQUwsR0FBZ0IsS0FBS0YsUUFBckIsR0FBZ0MsQ0FBcEMsRUFBdUM7VUFDbkMsS0FBS1csVUFBTCxDQUFnQmlILFNBQWhCLEdBQTRCOUosb0JBQW9CLEdBQUdELG9CQUFuRDtRQUNILENBRkQsTUFFTztVQUNILEtBQUs4QyxVQUFMLENBQWdCaUgsU0FBaEIsR0FBNEIsQ0FBQzdKLG1CQUFELEdBQXVCRixvQkFBbkQ7UUFDSDs7UUFFRCxJQUFJLEtBQUtxQyxRQUFMLEdBQWdCLEtBQUtGLFFBQXJCLEdBQWdDLENBQXBDLEVBQXVDO1VBQ25DLEtBQUtJLE9BQUwsR0FBZXRDLG9CQUFvQixHQUFHLEtBQUtrQyxRQUEzQztRQUNILENBRkQsTUFFTztVQUNILEtBQUtJLE9BQUwsR0FBZSxDQUFDckMsbUJBQUQsR0FBdUIsS0FBS2lDLFFBQTNDO1FBQ0g7TUFDSjtJQUNKLENBMWJJO0lBNGJMZ0csZUFBZSxFQUFHLDJCQUFXO01BQ3pCLElBQUksS0FBSzVGLE9BQUwsS0FBaUIsQ0FBckIsRUFBd0I7UUFDcEIsS0FBS3VGLElBQUwsQ0FBVWpELENBQVYsSUFBZSxLQUFLdEMsT0FBcEI7UUFDQSxJQUFJeUgsSUFBSSxHQUFHLENBQUN0SyxFQUFFLENBQUN1SyxXQUFILENBQWVDLEtBQWhCLEdBQXdCLENBQW5DO1FBQ0EsSUFBSUMsSUFBSSxHQUFHekssRUFBRSxDQUFDdUssV0FBSCxDQUFlQyxLQUFmLEdBQXVCLENBQWxDOztRQUNBLElBQUksS0FBS3BDLElBQUwsQ0FBVWpELENBQVYsR0FBY21GLElBQWxCLEVBQXdCO1VBQ3BCLEtBQUtsQyxJQUFMLENBQVVqRCxDQUFWLEdBQWNtRixJQUFkO1FBQ0gsQ0FGRCxNQUVPLElBQUksS0FBS2xDLElBQUwsQ0FBVWpELENBQVYsR0FBY3NGLElBQWxCLEVBQXdCO1VBQzNCLEtBQUtyQyxJQUFMLENBQVVqRCxDQUFWLEdBQWNzRixJQUFkO1FBQ0g7TUFDSjs7TUFFRCxJQUFJLEtBQUszSCxPQUFMLElBQWdCLENBQXBCLEVBQXVCO1FBQ25CLElBQUksS0FBS0EsT0FBTCxHQUFlLENBQWYsSUFBb0IsS0FBS0EsT0FBTCxHQUFlakMsQ0FBZixJQUFvQixDQUE1QyxFQUErQztVQUMzQyxLQUFLa0MsU0FBTCxDQUFlcUUsU0FBZixDQUF5QkMsTUFBekIsQ0FBZ0MsUUFBaEMsRUFBMEMsQ0FBQyxDQUEzQyxFQUE4QyxDQUFDLENBQS9DLEVBQWtELENBQWxELEVBQXFEbkgsc0JBQXJELEVBQTZFbUosV0FBN0UsR0FBMkYsS0FBM0Y7UUFDSDs7UUFFRCxLQUFLdkcsT0FBTCxJQUFnQmpDLENBQWhCO1FBQ0EsS0FBS3VILElBQUwsQ0FBVWhELENBQVYsSUFBZSxLQUFLdEMsT0FBcEI7O1FBQ0EsSUFBSSxLQUFLc0YsSUFBTCxDQUFVaEQsQ0FBVixHQUFjeEUsTUFBbEIsRUFBMEI7VUFDdEIsS0FBS3dILElBQUwsQ0FBVWhELENBQVYsR0FBY3hFLE1BQWQ7VUFDQSxLQUFLa0MsT0FBTCxHQUFlLENBQWY7VUFDQSxLQUFLQyxTQUFMLENBQWVxRSxTQUFmLENBQXlCQyxNQUF6QixDQUFnQyxRQUFoQyxFQUEwQyxDQUFDLENBQTNDLEVBQThDLENBQUMsQ0FBL0MsRUFBa0QsQ0FBbEQsRUFBcURuSCxzQkFBckQsRUFBNkVtSixXQUE3RSxHQUEyRixLQUEzRjtRQUNIO01BQ0o7SUFDSixDQXJkSTtJQXVkTFgsVUFBVSxFQUFHLHNCQUFZO01BQ3JCLElBQUksQ0FBQyxLQUFLN0QsV0FBVixFQUF1Qjs7TUFFdkIsSUFBSSxLQUFLbkMsT0FBTCxLQUFpQixDQUFyQixFQUF3QjtRQUNwQjtNQUNIOztNQUVELEtBQUtELFFBQUwsR0FBZ0IsS0FBS2EsT0FBTCxDQUFhNkIsQ0FBYixHQUFpQixLQUFLaUQsSUFBTCxDQUFVakQsQ0FBM0IsR0FBK0IsQ0FBL0IsR0FBbUMsQ0FBQyxDQUFwRDs7TUFDQSxJQUFJLEtBQUtpRCxJQUFMLENBQVVzQyxNQUFWLEdBQW1CLEtBQUtqSSxRQUF4QixHQUFtQyxDQUF2QyxFQUEwQztRQUN0QyxLQUFLMkYsSUFBTCxDQUFVc0MsTUFBVixJQUFvQixDQUFDLENBQXJCOztRQUNBLElBQUksS0FBSy9ILFFBQVQsRUFBbUI7VUFDZixLQUFLNkIsZ0JBQUw7UUFDSDtNQUNKOztNQUVELElBQUltRyxVQUFVLEdBQUcsS0FBSzVILFNBQUwsQ0FBZTZILE9BQWYsQ0FBdUIsT0FBdkIsRUFBZ0NwQixNQUFoQyxDQUF1Q3BFLENBQXZDLEdBQTJDLEtBQUtnRCxJQUFMLENBQVV5QyxNQUF0RTs7TUFFQSxJQUFJLEtBQUtwSSxRQUFMLEdBQWdCLENBQXBCLEVBQXVCO1FBQ25CLEtBQUtHLFVBQUwsR0FBa0JrSCxJQUFJLENBQUNnQixLQUFMLENBQVcsS0FBS3hILE9BQUwsQ0FBYThCLENBQWIsR0FBaUIsS0FBS2dELElBQUwsQ0FBVWhELENBQTNCLEdBQStCdUYsVUFBMUMsRUFBc0QsS0FBS3JILE9BQUwsQ0FBYTZCLENBQWIsR0FBaUIsS0FBS2lELElBQUwsQ0FBVWpELENBQWpGLENBQWxCO01BQ0gsQ0FGRCxNQUVPO1FBQ0gsS0FBS3ZDLFVBQUwsR0FBa0JrSCxJQUFJLENBQUNJLEVBQUwsR0FBVUosSUFBSSxDQUFDZ0IsS0FBTCxDQUFXLEtBQUt4SCxPQUFMLENBQWE4QixDQUFiLEdBQWlCLEtBQUtnRCxJQUFMLENBQVVoRCxDQUEzQixHQUErQnVGLFVBQTFDLEVBQXNELEtBQUtySCxPQUFMLENBQWE2QixDQUFiLEdBQWlCLEtBQUtpRCxJQUFMLENBQVVqRCxDQUFqRixDQUE1Qjs7UUFDQSxJQUFJLEtBQUt2QyxVQUFMLEdBQWtCa0gsSUFBSSxDQUFDSSxFQUEzQixFQUErQjtVQUMzQixLQUFLdEgsVUFBTCxJQUFtQmtILElBQUksQ0FBQ0ksRUFBTCxHQUFVLENBQTdCO1FBQ0g7TUFDSjs7TUFFRCxJQUFJYSxNQUFNLEdBQUcsQ0FBYjs7TUFDQSxJQUFJLEtBQUtuSSxVQUFMLEdBQWtCLENBQXRCLEVBQXlCO1FBQ3JCbUksTUFBTSxHQUFHLENBQVQ7TUFDSCxDQUZELE1BRU87UUFDSEEsTUFBTSxHQUFHLENBQUMsQ0FBVjtNQUNIOztNQUVELElBQUksS0FBS3JJLE9BQUwsSUFBZ0JxSSxNQUFwQixFQUE0QjtRQUN4QixLQUFLckksT0FBTCxHQUFlcUksTUFBZixDQUR3QixDQUd4Qjs7UUFDQSxJQUFJLEtBQUtySSxPQUFMLElBQWdCLENBQXBCLEVBQXVCO1VBQ25CLEtBQUtTLFNBQUwsR0FBaUIsS0FBS0osU0FBTCxDQUFlcUUsU0FBZixDQUF5QkMsTUFBekIsQ0FDYixRQURhLEVBQ0gsQ0FBQyxHQURFLEVBQ0csQ0FBQyxDQURKLEVBRWIsQ0FGYSxFQUVWbEgsbUJBRlUsQ0FBakI7UUFHSCxDQUpELE1BSU87VUFDSCxLQUFLZ0QsU0FBTCxHQUFpQixLQUFLSixTQUFMLENBQWVxRSxTQUFmLENBQXlCQyxNQUF6QixDQUNiLFVBRGEsRUFDRCxDQUFDLEdBREEsRUFDSyxDQUFDLENBRE4sRUFFYixDQUZhLEVBRVZsSCxtQkFGVSxDQUFqQjtRQUdIOztRQUVELEtBQUtnRCxTQUFMLENBQWVrRyxXQUFmLEdBQTZCLEtBQTdCO01BQ0g7O01BRUQsS0FBS2xHLFNBQUwsQ0FBZTZILE1BQWYsR0FBd0JsQixJQUFJLENBQUNtQixHQUFMLENBQVMsS0FBS3JJLFVBQUwsR0FBa0JrSCxJQUFJLENBQUNJLEVBQXZCLEdBQTRCLENBQXJDLENBQXhCLENBbERxQixDQW9EckI7O01BQ0EsS0FBS25ILFNBQUwsQ0FBZW1JLGFBQWY7SUFDSCxDQTdnQkk7SUErZ0JMdkMsYUFBYSxFQUFHLHlCQUFXO01BQ3ZCLElBQUksQ0FBQyxLQUFLdkcsYUFBTixJQUF1QixLQUFLQyxhQUFoQyxFQUErQztRQUMzQztNQUNIOztNQUVELEtBQUtBLGFBQUwsR0FBcUIsSUFBckIsQ0FMdUIsQ0FPdkI7O01BQ0EsS0FBS2dCLFlBQUwsR0FBb0IsS0FBS04sU0FBTCxDQUFlcUUsU0FBZixDQUF5QkMsTUFBekIsQ0FDaEIsV0FEZ0IsRUFDSCxDQUFDLEdBREUsRUFDRyxDQUFDLENBREosRUFFaEIsQ0FGZ0IsRUFFYmpILHNCQUZhLEVBRVdjLFdBQVcsQ0FBQ2lLLG9CQUFaLENBQWlDQyxTQUY1QyxDQUFwQjtNQUtBLEtBQUsvSCxZQUFMLENBQWtCZ0csV0FBbEIsR0FBZ0MsS0FBaEM7TUFDQSxLQUFLaEcsWUFBTCxDQUFrQmdJLGVBQWxCLEdBQW9DLEtBQUtoSSxZQUFMLENBQWtCaUksYUFBdEQ7SUFDSDtFQTloQkksQ0FBVDtFQWtpQkEsSUFBSW5CLFlBQVksR0FBR25LLEVBQUUsQ0FBQ2MsS0FBSCxDQUFTO0lBQ3hCc0ksSUFBSSxFQUFFLGNBRGtCO0lBRXhCdkcsT0FBTyxFQUFHLENBRmM7SUFHeEJDLE9BQU8sRUFBRyxDQUhjO0lBS3hCQyxTQUFTLEVBQUcsSUFMWTtJQU14QkMsZ0JBQWdCLEVBQUcsSUFOSztJQU94QnVJLE9BQU8sRUFBRyxJQVBjO0lBU3hCbkIsSUFBSSxFQUFHLGNBQVVvQixVQUFWLEVBQXNCOUgsUUFBdEIsRUFBZ0NzRyxNQUFoQyxFQUF3Q0MsTUFBeEMsRUFBZ0R3QixLQUFoRCxFQUF1REMsUUFBdkQsRUFBaUU7TUFDcEUsS0FBSzdJLE9BQUwsR0FBZWlILElBQUksQ0FBQzZCLEdBQUwsQ0FBUzFCLE1BQVQsSUFBbUJ3QixLQUFsQztNQUNBLEtBQUszSSxPQUFMLEdBQWVnSCxJQUFJLENBQUM4QixHQUFMLENBQVMzQixNQUFULElBQW1Cd0IsS0FBbEM7TUFDQSxJQUFJSSxNQUFNLEdBQUdMLFVBQVUsQ0FBQ2xELG9CQUFYLENBQWdDb0QsUUFBaEMsQ0FBYjtNQUVBaEksUUFBUSxDQUFDb0ksYUFBVCxDQUF1QixNQUF2QjtNQUVBLElBQUlDLFlBQVksR0FBR3JJLFFBQVEsQ0FBQzBFLElBQTVCO01BQ0EyRCxZQUFZLENBQUNDLFdBQWIsQ0FBeUJILE1BQXpCO01BQ0FFLFlBQVksQ0FBQ0UsS0FBYixHQUFxQmhDLE1BQU0sR0FBR2pLLEVBQUUsQ0FBQ21HLEtBQUgsQ0FBUytGLEdBQXZDO01BRUEsS0FBS25KLFNBQUwsR0FBaUJXLFFBQWpCOztNQUVBLElBQUlzRyxNQUFKLEVBQVk7UUFDUixLQUFLdUIsT0FBTCxHQUFldkIsTUFBZjtRQUNBLElBQUltQyxhQUFhLEdBQUcsS0FBS1osT0FBTCxDQUFhbkQsSUFBakM7UUFDQStELGFBQWEsQ0FBQ0YsS0FBZCxHQUFzQmhDLE1BQU0sR0FBR2pLLEVBQUUsQ0FBQ21HLEtBQUgsQ0FBUytGLEdBQXhDO1FBQ0FDLGFBQWEsQ0FBQ0gsV0FBZCxDQUEwQkgsTUFBMUI7UUFDQU0sYUFBYSxDQUFDekIsTUFBZCxHQUF1QixJQUFJWixJQUFJLENBQUNDLE1BQUwsS0FBZ0IsQ0FBM0M7UUFDQW9DLGFBQWEsQ0FBQ3RCLE1BQWQsR0FBdUIsSUFBSWYsSUFBSSxDQUFDQyxNQUFMLEtBQWdCLEdBQTNDOztRQUNBLElBQUlELElBQUksQ0FBQ0MsTUFBTCxLQUFnQixHQUFwQixFQUF5QjtVQUNyQm9DLGFBQWEsQ0FBQ3RCLE1BQWQsSUFBd0IsQ0FBQyxDQUF6QjtRQUNIOztRQUVELEtBQUtVLE9BQUwsQ0FBYU8sYUFBYixDQUEyQixNQUEzQjs7UUFFQU4sVUFBVSxDQUFDWSxRQUFYLENBQW9CRCxhQUFwQjtNQUNIOztNQUVEWCxVQUFVLENBQUNZLFFBQVgsQ0FBb0JMLFlBQXBCO0lBQ0gsQ0F2Q3VCO0lBeUN4QnhELE1BQU0sRUFBRyxrQkFBVztNQUNoQixJQUFJd0QsWUFBWSxHQUFHLEtBQUtoSixTQUFMLENBQWVxRixJQUFsQztNQUVBMkQsWUFBWSxDQUFDNUcsQ0FBYixJQUFrQixLQUFLdEMsT0FBdkI7TUFDQWtKLFlBQVksQ0FBQzNHLENBQWIsSUFBa0IsS0FBS3RDLE9BQXZCO01BRUEsSUFBSXVKLFFBQVEsR0FBR04sWUFBWSxDQUFDMUQsTUFBYixDQUFvQmlFLHFCQUFwQixDQUEwQ1AsWUFBWSxDQUFDUSxXQUFiLEVBQTFDLENBQWY7O01BQ0EsSUFDSUYsUUFBUSxDQUFDbEgsQ0FBVCxHQUFhLENBQUMsR0FBZCxJQUFxQmtILFFBQVEsQ0FBQ2xILENBQVQsSUFBY25GLEVBQUUsQ0FBQ3VLLFdBQUgsQ0FBZUMsS0FBZixHQUF1QixHQUExRCxJQUNBNkIsUUFBUSxDQUFDakgsQ0FBVCxHQUFhLENBQUMsR0FEZCxJQUNxQmlILFFBQVEsQ0FBQ2pILENBQVQsSUFBY3BGLEVBQUUsQ0FBQ3VLLFdBQUgsQ0FBZWlDLE1BQWYsR0FBd0IsR0FGL0QsRUFHRTtRQUNFLEtBQUtDLE9BQUw7UUFDQSxPQUFPLElBQVA7TUFDSDs7TUFFRCxPQUFPLEtBQVA7SUFDSCxDQXpEdUI7SUEyRHhCNUQsU0FBUyxFQUFHLHFCQUFZO01BQ3BCLEtBQUs0RCxPQUFMO0lBQ0gsQ0E3RHVCO0lBK0R4QkEsT0FBTyxFQUFHLG1CQUFXO01BQ2pCLEtBQUsxSixTQUFMLENBQWVxRixJQUFmLENBQW9Cc0UsZ0JBQXBCOztNQUVBLElBQUksS0FBS25CLE9BQVQsRUFBa0I7UUFDZCxLQUFLQSxPQUFMLENBQWFuRCxJQUFiLENBQWtCc0UsZ0JBQWxCO01BQ0g7SUFDSjtFQXJFdUIsQ0FBVCxDQUFuQjtBQXVFQyxFQUFDIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpZiAoIWNjLnJ1bnRpbWUpIHtcbi8vIHJ1bnRpbWUgbm90IHN1cHBvcnQgZHJhZ29uYm9uZXMuXG5cbnZhciBOT1JNQUxfQU5JTUFUSU9OX0dST1VQID0gXCJub3JtYWxcIjtcbnZhciBBSU1fQU5JTUFUSU9OX0dST1VQID0gXCJhaW1cIjtcbnZhciBBVFRBQ0tfQU5JTUFUSU9OX0dST1VQID0gXCJhdHRhY2tcIjtcbnZhciBKVU1QX1NQRUVEID0gLTIwO1xudmFyIE5PUk1BTElaRV9NT1ZFX1NQRUVEID0gMy42O1xudmFyIE1BWF9NT1ZFX1NQRUVEX0ZST05UID0gTk9STUFMSVpFX01PVkVfU1BFRUQgKiAxLjQ7XG52YXIgTUFYX01PVkVfU1BFRURfQkFDSyA9IE5PUk1BTElaRV9NT1ZFX1NQRUVEICogMS4wO1xudmFyIFdFQVBPTl9SX0xJU1QgPSBbXCJ3ZWFwb25fMTUwMmJfclwiLCBcIndlYXBvbl8xMDA1XCIsIFwid2VhcG9uXzEwMDViXCIsIFwid2VhcG9uXzEwMDVjXCIsIFwid2VhcG9uXzEwMDVkXCIsIFwid2VhcG9uXzEwMDVlXCJdO1xudmFyIFdFQVBPTl9MX0xJU1QgPSBbXCJ3ZWFwb25fMTUwMmJfbFwiLCBcIndlYXBvbl8xMDA1XCIsIFwid2VhcG9uXzEwMDViXCIsIFwid2VhcG9uXzEwMDVjXCIsIFwid2VhcG9uXzEwMDVkXCJdO1xudmFyIFNLSU5TID0gW1wibWVjaGFfMTUwMmJcIiwgXCJza2luX2FcIiwgXCJza2luX2JcIiwgXCJza2luX2NcIl07XG52YXIgR1JPVU5EID0gLTIwMDtcbnZhciBHID0gLTAuNjtcblxuY2MuQ2xhc3Moe1xuICAgIGV4dGVuZHM6IGNjLkNvbXBvbmVudCxcbiAgICBlZGl0b3I6IHtcbiAgICAgICAgcmVxdWlyZUNvbXBvbmVudDogZHJhZ29uQm9uZXMuQXJtYXR1cmVEaXNwbGF5XG4gICAgfSxcblxuICAgIHByb3BlcnRpZXM6IHtcbiAgICAgICAgdG91Y2hIYW5kbGVyIDoge1xuICAgICAgICAgICAgZGVmYXVsdDogbnVsbCxcbiAgICAgICAgICAgIHR5cGU6IGNjLk5vZGVcbiAgICAgICAgfSxcblxuICAgICAgICB1cEJ1dHRvbjoge1xuICAgICAgICAgICAgZGVmYXVsdDogbnVsbCxcbiAgICAgICAgICAgIHR5cGU6IGNjLk5vZGVcbiAgICAgICAgfSxcblxuICAgICAgICBkb3duQnV0dG9uOiB7XG4gICAgICAgICAgICBkZWZhdWx0OiBudWxsLFxuICAgICAgICAgICAgdHlwZTogY2MuTm9kZVxuICAgICAgICB9LFxuXG4gICAgICAgIGxlZnRCdXR0b246IHtcbiAgICAgICAgICAgIGRlZmF1bHQ6IG51bGwsXG4gICAgICAgICAgICB0eXBlOiBjYy5Ob2RlXG4gICAgICAgIH0sXG5cbiAgICAgICAgcmlnaHRCdXR0b246IHtcbiAgICAgICAgICAgIGRlZmF1bHQ6IG51bGwsXG4gICAgICAgICAgICB0eXBlOiBjYy5Ob2RlXG4gICAgICAgIH0sXG5cbiAgICAgICAgd2VhcG9uQXJtYXR1cmU6IHtcbiAgICAgICAgICAgIGRlZmF1bHQ6IG51bGwsXG4gICAgICAgICAgICB0eXBlOiBkcmFnb25Cb25lcy5Bcm1hdHVyZURpc3BsYXlcbiAgICAgICAgfSxcblxuICAgICAgICBza2luQXJtYXR1cmU6IHtcbiAgICAgICAgICAgIGRlZmF1bHQ6IG51bGwsXG4gICAgICAgICAgICB0eXBlOiBkcmFnb25Cb25lcy5Bcm1hdHVyZURpc3BsYXlcbiAgICAgICAgfSxcblxuICAgICAgICBfYnVsbGV0cyA6IFtdLFxuICAgICAgICBfbGVmdCA6IGZhbHNlLFxuICAgICAgICBfcmlnaHQgOiBmYWxzZSxcbiAgICAgICAgX2lzSnVtcGluZ0EgOiBmYWxzZSxcbiAgICAgICAgX2lzSnVtcGluZ0IgOiBmYWxzZSxcbiAgICAgICAgX2lzU3F1YXRpbmcgOiBmYWxzZSxcbiAgICAgICAgX2lzQXR0YWNraW5nQSA6IGZhbHNlLFxuICAgICAgICBfaXNBdHRhY2tpbmdCIDogZmFsc2UsXG4gICAgICAgIF93ZWFwb25SSW5kZXggOiAwLFxuICAgICAgICBfd2VhcG9uTEluZGV4IDogMCxcbiAgICAgICAgX3NraW5JbmRleDogMCxcbiAgICAgICAgX2ZhY2VEaXIgOiAxLFxuICAgICAgICBfYWltRGlyIDogMCxcbiAgICAgICAgX21vdmVEaXIgOiAwLFxuICAgICAgICBfYWltUmFkaWFuIDogMCxcbiAgICAgICAgX3NwZWVkWCA6IDAsXG4gICAgICAgIF9zcGVlZFkgOiAwLFxuICAgICAgICBfYXJtYXR1cmUgOiBudWxsLFxuICAgICAgICBfYXJtYXR1cmVEaXNwbGF5IDogbnVsbCxcbiAgICAgICAgX3dlYXBvblIgOiBudWxsLFxuICAgICAgICBfd2VhcG9uTCA6IG51bGwsXG4gICAgICAgIF9haW1TdGF0ZSA6IG51bGwsXG4gICAgICAgIF93YWxrU3RhdGUgOiBudWxsLFxuICAgICAgICBfYXR0YWNrU3RhdGUgOiBudWxsLFxuICAgICAgICBfdGFyZ2V0IDogY2MudjIoMCwgMCksXG4gICAgfSxcblxuICAgIC8vIHVzZSB0aGlzIGZvciBpbml0aWFsaXphdGlvblxuICAgIG9uTG9hZDogZnVuY3Rpb24gKCkge1xuICAgICAgICB0aGlzLl9hcm1hdHVyZURpc3BsYXkgPSB0aGlzLmdldENvbXBvbmVudChkcmFnb25Cb25lcy5Bcm1hdHVyZURpc3BsYXkpO1xuICAgICAgICB0aGlzLl9hcm1hdHVyZSA9IHRoaXMuX2FybWF0dXJlRGlzcGxheS5hcm1hdHVyZSgpO1xuXG4gICAgICAgIHRoaXMuX2FybWF0dXJlRGlzcGxheS5hZGRFdmVudExpc3RlbmVyKGRyYWdvbkJvbmVzLkV2ZW50T2JqZWN0LkZBREVfSU5fQ09NUExFVEUsIHRoaXMuX2FuaW1hdGlvbkV2ZW50SGFuZGxlciwgdGhpcyk7XG4gICAgICAgIHRoaXMuX2FybWF0dXJlRGlzcGxheS5hZGRFdmVudExpc3RlbmVyKGRyYWdvbkJvbmVzLkV2ZW50T2JqZWN0LkZBREVfT1VUX0NPTVBMRVRFLCB0aGlzLl9hbmltYXRpb25FdmVudEhhbmRsZXIsIHRoaXMpO1xuICAgICAgICB0aGlzLl9hcm1hdHVyZURpc3BsYXkuYWRkRXZlbnRMaXN0ZW5lcihkcmFnb25Cb25lcy5FdmVudE9iamVjdC5DT01QTEVURSwgdGhpcy5fYW5pbWF0aW9uRXZlbnRIYW5kbGVyLCB0aGlzKTtcblxuICAgICAgICB0aGlzLl93ZWFwb25SID0gdGhpcy5fYXJtYXR1cmUuZ2V0U2xvdCgnd2VhcG9uX3InKS5jaGlsZEFybWF0dXJlO1xuICAgICAgICB0aGlzLl93ZWFwb25MID0gdGhpcy5fYXJtYXR1cmUuZ2V0U2xvdCgnd2VhcG9uX2wnKS5jaGlsZEFybWF0dXJlO1xuICAgICAgICB0aGlzLl93ZWFwb25SLmFkZEV2ZW50TGlzdGVuZXIoZHJhZ29uQm9uZXMuRXZlbnRPYmplY3QuRlJBTUVfRVZFTlQsIHRoaXMuX2ZyYW1lRXZlbnRIYW5kbGVyLCB0aGlzKTtcbiAgICAgICAgdGhpcy5fd2VhcG9uTC5hZGRFdmVudExpc3RlbmVyKGRyYWdvbkJvbmVzLkV2ZW50T2JqZWN0LkZSQU1FX0VWRU5ULCB0aGlzLl9mcmFtZUV2ZW50SGFuZGxlciwgdGhpcyk7XG5cbiAgICAgICAgLy8gbG9hZCBhbGwgc2tpbiBkYXRhXG4gICAgICAgIGZvciAobGV0IGkgPSAxOyBpIDwgU0tJTlMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIHRoaXMuc2tpbkFybWF0dXJlLmFybWF0dXJlTmFtZSA9IFNLSU5TW2ldO1xuICAgICAgICB9XG5cbiAgICAgICAgZm9yIChsZXQgaSA9IDE7IGkgPCBXRUFQT05fUl9MSVNULmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICB0aGlzLndlYXBvbkFybWF0dXJlLmFybWF0dXJlTmFtZSA9IFdFQVBPTl9SX0xJU1RbaV07XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLl91cGRhdGVBbmltYXRpb24oKTtcblxuICAgICAgICBpZiAodGhpcy50b3VjaEhhbmRsZXIpIHtcbiAgICAgICAgICAgIC8vIHRvdWNoIGV2ZW50c1xuICAgICAgICAgICAgdGhpcy50b3VjaEhhbmRsZXIub24oY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfU1RBUlQsIGV2ZW50ID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLl9tb3VzZURvd25fID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICB2YXIgdG91Y2hlcyA9IGV2ZW50LmdldFRvdWNoZXMoKTtcbiAgICAgICAgICAgICAgICB2YXIgdG91Y2hMb2MgPSB0b3VjaGVzWzBdLmdldExvY2F0aW9uKCk7XG4gICAgICAgICAgICAgICAgdGhpcy5haW0odG91Y2hMb2MueCwgdG91Y2hMb2MueSk7XG4gICAgICAgICAgICAgICAgdGhpcy5hdHRhY2sodHJ1ZSk7XG4gICAgICAgICAgICB9LCB0aGlzKTtcbiAgICAgICAgICAgIHRoaXMudG91Y2hIYW5kbGVyLm9uKGNjLk5vZGUuRXZlbnRUeXBlLlRPVUNIX0VORCwgZXZlbnQgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMuX21vdXNlRG93bl8gPSBmYWxzZTtcbiAgICAgICAgICAgICAgICB0aGlzLmF0dGFjayhmYWxzZSk7XG4gICAgICAgICAgICB9LCB0aGlzKTtcbiAgICAgICAgICAgIHRoaXMudG91Y2hIYW5kbGVyLm9uKGNjLk5vZGUuRXZlbnRUeXBlLlRPVUNIX01PVkUsIGV2ZW50ID0+IHtcbiAgICAgICAgICAgICAgICB2YXIgdG91Y2hlcyA9IGV2ZW50LmdldFRvdWNoZXMoKTtcbiAgICAgICAgICAgICAgICB2YXIgdG91Y2hMb2MgPSB0b3VjaGVzWzBdLmdldExvY2F0aW9uKCk7XG4gICAgICAgICAgICAgICAgdGhpcy5haW0odG91Y2hMb2MueCwgdG91Y2hMb2MueSk7XG4gICAgICAgICAgICB9LCB0aGlzKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0aGlzLnVwQnV0dG9uKSB7XG4gICAgICAgICAgICB0aGlzLnVwQnV0dG9uLm9uKGNjLk5vZGUuRXZlbnRUeXBlLlRPVUNIX1NUQVJULCBldmVudCA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5qdW1wKCk7XG4gICAgICAgICAgICB9LCB0aGlzKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0aGlzLmRvd25CdXR0b24pIHtcbiAgICAgICAgICAgIHRoaXMuZG93bkJ1dHRvbi5vbihjYy5Ob2RlLkV2ZW50VHlwZS5UT1VDSF9TVEFSVCwgZXZlbnQgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMuc3F1YXQodHJ1ZSk7XG4gICAgICAgICAgICB9LCB0aGlzKTtcbiAgICAgICAgICAgIHRoaXMuZG93bkJ1dHRvbi5vbihjYy5Ob2RlLkV2ZW50VHlwZS5UT1VDSF9FTkQsIGV2ZW50ID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLnNxdWF0KGZhbHNlKTtcbiAgICAgICAgICAgIH0sIHRoaXMpO1xuICAgICAgICAgICAgdGhpcy5kb3duQnV0dG9uLm9uKGNjLk5vZGUuRXZlbnRUeXBlLlRPVUNIX0NBTkNFTCwgZXZlbnQgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMuc3F1YXQoZmFsc2UpO1xuICAgICAgICAgICAgfSwgdGhpcyk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodGhpcy5sZWZ0QnV0dG9uKSB7XG4gICAgICAgICAgICB0aGlzLmxlZnRCdXR0b24ub24oY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfU1RBUlQsIGV2ZW50ID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLl9sZWZ0ID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICB0aGlzLl91cGRhdGVNb3ZlKC0xKTtcbiAgICAgICAgICAgIH0sIHRoaXMpO1xuICAgICAgICAgICAgdGhpcy5sZWZ0QnV0dG9uLm9uKGNjLk5vZGUuRXZlbnRUeXBlLlRPVUNIX0VORCwgZXZlbnQgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMuX2xlZnQgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICB0aGlzLl91cGRhdGVNb3ZlKC0xKTtcbiAgICAgICAgICAgIH0sIHRoaXMpO1xuICAgICAgICAgICAgdGhpcy5sZWZ0QnV0dG9uLm9uKGNjLk5vZGUuRXZlbnRUeXBlLlRPVUNIX0NBTkNFTCwgZXZlbnQgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMuX2xlZnQgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICB0aGlzLl91cGRhdGVNb3ZlKC0xKTtcbiAgICAgICAgICAgIH0sIHRoaXMpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHRoaXMucmlnaHRCdXR0b24pIHtcbiAgICAgICAgICAgIHRoaXMucmlnaHRCdXR0b24ub24oY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfU1RBUlQsIGV2ZW50ID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLl9yaWdodCA9IHRydWU7XG4gICAgICAgICAgICAgICAgdGhpcy5fdXBkYXRlTW92ZSgxKTtcbiAgICAgICAgICAgIH0sIHRoaXMpO1xuICAgICAgICAgICAgdGhpcy5yaWdodEJ1dHRvbi5vbihjYy5Ob2RlLkV2ZW50VHlwZS5UT1VDSF9FTkQsIGV2ZW50ID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLl9yaWdodCA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIHRoaXMuX3VwZGF0ZU1vdmUoMSk7XG4gICAgICAgICAgICB9LCB0aGlzKTtcbiAgICAgICAgICAgIHRoaXMucmlnaHRCdXR0b24ub24oY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfQ0FOQ0VMLCBldmVudCA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5fcmlnaHQgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICB0aGlzLl91cGRhdGVNb3ZlKDEpO1xuICAgICAgICAgICAgfSwgdGhpcyk7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBrZXlib2FyZCBldmVudHNcbiAgICAgICAgY2Muc3lzdGVtRXZlbnQub24oY2MuU3lzdGVtRXZlbnQuRXZlbnRUeXBlLktFWV9ET1dOLCBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgICAgICAgIHRoaXMuX2tleUhhbmRsZXIoZXZlbnQua2V5Q29kZSwgdHJ1ZSk7XG4gICAgICAgIH0sIHRoaXMpO1xuICAgICAgICBjYy5zeXN0ZW1FdmVudC5vbihjYy5TeXN0ZW1FdmVudC5FdmVudFR5cGUuS0VZX1VQLCBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgICAgICAgIHRoaXMuX2tleUhhbmRsZXIoZXZlbnQua2V5Q29kZSwgZmFsc2UpO1xuICAgICAgICB9LCB0aGlzKTtcbiAgICB9LFxuXG4gICAgX2tleUhhbmRsZXI6IGZ1bmN0aW9uKGtleUNvZGUsIGlzRG93bikge1xuICAgICAgICBzd2l0Y2goa2V5Q29kZSkge1xuICAgICAgICAgICAgY2FzZSBjYy5tYWNyby5LRVkuYTpcbiAgICAgICAgICAgIGNhc2UgY2MubWFjcm8uS0VZLmxlZnQ6XG4gICAgICAgICAgICAgICAgdGhpcy5fbGVmdCA9IGlzRG93bjtcbiAgICAgICAgICAgICAgICB0aGlzLl91cGRhdGVNb3ZlKC0xKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgY2MubWFjcm8uS0VZLmQ6XG4gICAgICAgICAgICBjYXNlIGNjLm1hY3JvLktFWS5yaWdodDpcbiAgICAgICAgICAgICAgICB0aGlzLl9yaWdodCA9IGlzRG93bjtcbiAgICAgICAgICAgICAgICB0aGlzLl91cGRhdGVNb3ZlKDEpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBjYy5tYWNyby5LRVkudzpcbiAgICAgICAgICAgIGNhc2UgY2MubWFjcm8uS0VZLnVwOlxuICAgICAgICAgICAgICAgIGlmIChpc0Rvd24pIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5qdW1wKCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBjYy5tYWNyby5LRVkuczpcbiAgICAgICAgICAgIGNhc2UgY2MubWFjcm8uS0VZLmRvd246XG4gICAgICAgICAgICAgICAgdGhpcy5zcXVhdChpc0Rvd24pO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBjYy5tYWNyby5LRVkucTpcbiAgICAgICAgICAgICAgICBpZiAoaXNEb3duKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc3dpdGNoV2VhcG9uUigpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgY2MubWFjcm8uS0VZLmU6XG4gICAgICAgICAgICAgICAgaWYgKGlzRG93bikge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnN3aXRjaFdlYXBvbkwoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIGNjLm1hY3JvLktFWS5zcGFjZTpcbiAgICAgICAgICAgICAgICBpZiAoaXNEb3duKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc3dpdGNoV2VhcG9uUigpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnN3aXRjaFdlYXBvbkwoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgIH0sXG5cbiAgICBfdXBkYXRlTW92ZSA6IGZ1bmN0aW9uIChkaXIpIHtcbiAgICAgICAgaWYgKHRoaXMuX2xlZnQgJiYgdGhpcy5fcmlnaHQpIHtcbiAgICAgICAgICAgIHRoaXMubW92ZShkaXIpO1xuICAgICAgICB9IGVsc2UgaWYgKHRoaXMuX2xlZnQpIHtcbiAgICAgICAgICAgIHRoaXMubW92ZSgtMSk7XG4gICAgICAgIH0gZWxzZSBpZiAodGhpcy5fcmlnaHQpIHtcbiAgICAgICAgICAgIHRoaXMubW92ZSgxKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMubW92ZSgwKTtcbiAgICAgICAgfVxuICAgIH0sXG5cbiAgICBtb3ZlIDogZnVuY3Rpb24oZGlyKSB7XG4gICAgICAgIGlmICh0aGlzLl9tb3ZlRGlyID09PSBkaXIpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuX21vdmVEaXIgPSBkaXI7XG4gICAgICAgIHRoaXMuX3VwZGF0ZUFuaW1hdGlvbigpO1xuICAgIH0sXG5cbiAgICBqdW1wIDogZnVuY3Rpb24gKCkge1xuICAgICAgICBpZiAodGhpcy5faXNKdW1waW5nQSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5faXNKdW1waW5nQSA9IHRydWU7XG4gICAgICAgIHRoaXMuX2FybWF0dXJlLmFuaW1hdGlvbi5mYWRlSW4oXCJqdW1wXzFcIiwgLTEsIC0xLCAwLCBOT1JNQUxfQU5JTUFUSU9OX0dST1VQKTtcbiAgICAgICAgdGhpcy5fd2Fsa1N0YXRlID0gbnVsbDtcbiAgICB9LFxuXG4gICAgc3F1YXQgOiBmdW5jdGlvbihpc1NxdWF0aW5nKSB7XG4gICAgICAgIGlmICh0aGlzLl9pc1NxdWF0aW5nID09PSBpc1NxdWF0aW5nKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLl9pc1NxdWF0aW5nID0gaXNTcXVhdGluZztcbiAgICAgICAgdGhpcy5fdXBkYXRlQW5pbWF0aW9uKCk7XG4gICAgfSxcblxuICAgIGF0dGFjayA6IGZ1bmN0aW9uIChpc0F0dGFja2luZykge1xuICAgICAgICBpZiAodGhpcy5faXNBdHRhY2tpbmdBID09IGlzQXR0YWNraW5nKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLl9pc0F0dGFja2luZ0EgPSBpc0F0dGFja2luZztcbiAgICB9LFxuXG4gICAgc3dpdGNoV2VhcG9uTCA6IGZ1bmN0aW9uKCkge1xuICAgICAgICB0aGlzLl93ZWFwb25MLnJlbW92ZUV2ZW50TGlzdGVuZXIoZHJhZ29uQm9uZXMuRXZlbnRPYmplY3QuRlJBTUVfRVZFTlQsIHRoaXMuX2ZyYW1lRXZlbnRIYW5kbGVyLCB0aGlzKTtcblxuICAgICAgICB0aGlzLl93ZWFwb25MSW5kZXgrKztcbiAgICAgICAgaWYgKHRoaXMuX3dlYXBvbkxJbmRleCA+PSBXRUFQT05fTF9MSVNULmxlbmd0aCkge1xuICAgICAgICAgICAgdGhpcy5fd2VhcG9uTEluZGV4ID0gMDtcbiAgICAgICAgfVxuXG4gICAgICAgIHZhciBuZXdXZWFwb25OYW1lID0gV0VBUE9OX0xfTElTVFt0aGlzLl93ZWFwb25MSW5kZXhdO1xuICAgICAgICBsZXQgZmFjdG9yeSA9IGRyYWdvbkJvbmVzLkNDRmFjdG9yeS5nZXRJbnN0YW5jZSgpO1xuICAgICAgICB0aGlzLl93ZWFwb25MID0gZmFjdG9yeS5idWlsZEFybWF0dXJlKG5ld1dlYXBvbk5hbWUpO1xuICAgICAgICB0aGlzLl9hcm1hdHVyZS5nZXRTbG90KCd3ZWFwb25fbCcpLmNoaWxkQXJtYXR1cmUgPSB0aGlzLl93ZWFwb25MO1xuXG4gICAgICAgIHRoaXMuX3dlYXBvbkwuYWRkRXZlbnRMaXN0ZW5lcihkcmFnb25Cb25lcy5FdmVudE9iamVjdC5GUkFNRV9FVkVOVCwgdGhpcy5fZnJhbWVFdmVudEhhbmRsZXIsIHRoaXMpO1xuICAgIH0sXG5cbiAgICBzd2l0Y2hXZWFwb25SIDogZnVuY3Rpb24oKSB7XG4gICAgICAgIHRoaXMuX3dlYXBvblIucmVtb3ZlRXZlbnRMaXN0ZW5lcihkcmFnb25Cb25lcy5FdmVudE9iamVjdC5GUkFNRV9FVkVOVCwgdGhpcy5fZnJhbWVFdmVudEhhbmRsZXIsIHRoaXMpO1xuXG4gICAgICAgIHRoaXMuX3dlYXBvblJJbmRleCsrO1xuICAgICAgICBpZiAodGhpcy5fd2VhcG9uUkluZGV4ID49IFdFQVBPTl9SX0xJU1QubGVuZ3RoKSB7XG4gICAgICAgICAgICB0aGlzLl93ZWFwb25SSW5kZXggPSAwO1xuICAgICAgICB9XG5cbiAgICAgICAgdmFyIG5ld1dlYXBvbk5hbWUgPSBXRUFQT05fUl9MSVNUW3RoaXMuX3dlYXBvblJJbmRleF07XG4gICAgICAgIGxldCBmYWN0b3J5ID0gZHJhZ29uQm9uZXMuQ0NGYWN0b3J5LmdldEluc3RhbmNlKCk7XG4gICAgICAgIHRoaXMuX3dlYXBvblIgPSBmYWN0b3J5LmJ1aWxkQXJtYXR1cmUobmV3V2VhcG9uTmFtZSk7XG4gICAgICAgIHRoaXMuX2FybWF0dXJlLmdldFNsb3QoJ3dlYXBvbl9yJykuY2hpbGRBcm1hdHVyZSA9IHRoaXMuX3dlYXBvblI7XG5cbiAgICAgICAgdGhpcy5fd2VhcG9uUi5hZGRFdmVudExpc3RlbmVyKGRyYWdvbkJvbmVzLkV2ZW50T2JqZWN0LkZSQU1FX0VWRU5ULCB0aGlzLl9mcmFtZUV2ZW50SGFuZGxlciwgdGhpcyk7XG4gICAgfSxcblxuICAgIHN3aXRjaFNraW4gOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHRoaXMuX3NraW5JbmRleCsrO1xuICAgICAgICBpZiAodGhpcy5fc2tpbkluZGV4ID49IFNLSU5TLmxlbmd0aClcbiAgICAgICAge1xuICAgICAgICAgICAgdGhpcy5fc2tpbkluZGV4ID0gMDtcbiAgICAgICAgfVxuICAgICAgICBsZXQgc2tpbk5hbWUgPSBTS0lOU1t0aGlzLl9za2luSW5kZXhdO1xuICAgICAgICBsZXQgZmFjdG9yeSA9IGRyYWdvbkJvbmVzLkNDRmFjdG9yeS5nZXRJbnN0YW5jZSgpO1xuICAgICAgICBsZXQgc2tpbkRhdGEgPSBmYWN0b3J5LmdldEFybWF0dXJlRGF0YShza2luTmFtZSkuZGVmYXVsdFNraW47XG4gICAgICAgIGZhY3RvcnkucmVwbGFjZVNraW4odGhpcy5fYXJtYXR1cmVEaXNwbGF5LmFybWF0dXJlKCksIHNraW5EYXRhLCBmYWxzZSwgW1wid2VhcG9uX2xcIiwgXCJ3ZWFwb25fclwiXSk7XG4gICAgfSxcblxuICAgIGFpbSA6IGZ1bmN0aW9uKHgsIHkpIHtcbiAgICAgICAgaWYgKHRoaXMuX2FpbURpciA9PT0gMCkge1xuICAgICAgICAgICAgdGhpcy5fYWltRGlyID0gMTA7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLl90YXJnZXQgPSB0aGlzLm5vZGUucGFyZW50LmNvbnZlcnRUb05vZGVTcGFjZUFSKGNjLnYyKHgsIHkpKTtcbiAgICB9LFxuXG4gICAgdXBkYXRlIDogZnVuY3Rpb24gKGR0KSB7XG4gICAgICAgIHRoaXMuX3VwZGF0ZVBvc2l0aW9uKCk7XG4gICAgICAgIHRoaXMuX3VwZGF0ZUFpbSgpO1xuICAgICAgICB0aGlzLl91cGRhdGVBdHRhY2soKTtcbiAgICAgICAgdGhpcy5fZW50ZXJGcmFtZUhhbmRsZXIoZHQpO1xuICAgIH0sXG5cbiAgICBvbkRpc2FibGUgOiBmdW5jdGlvbigpIHtcbiAgICAgICAgLy8gY2xlYW4gdGhlIGJ1bGxldHNcbiAgICAgICAgZm9yICh2YXIgaSA9IHRoaXMuX2J1bGxldHMubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pXG4gICAgICAgIHtcbiAgICAgICAgICAgIHZhciBidWxsZXQgPSB0aGlzLl9idWxsZXRzW2ldO1xuICAgICAgICAgICAgYnVsbGV0LmVuYWJsZWQgPSBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLl9idWxsZXRzID0gW107XG4gICAgfSxcblxuICAgIGFkZEJ1bGxldCA6IGZ1bmN0aW9uKGJ1bGxldCkge1xuICAgICAgICB0aGlzLl9idWxsZXRzLnB1c2goYnVsbGV0KTtcbiAgICB9LFxuXG4gICAgX2VudGVyRnJhbWVIYW5kbGVyIDogZnVuY3Rpb24gKGR0KSB7XG4gICAgICAgIGZvciAodmFyIGkgPSB0aGlzLl9idWxsZXRzLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKVxuICAgICAgICB7XG4gICAgICAgICAgICB2YXIgYnVsbGV0ID0gdGhpcy5fYnVsbGV0c1tpXTtcbiAgICAgICAgICAgIGlmIChidWxsZXQudXBkYXRlKCkpXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgdGhpcy5fYnVsbGV0cy5zcGxpY2UoaSwgMSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9LFxuXG4gICAgX2FuaW1hdGlvbkV2ZW50SGFuZGxlcjogZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICAgIGlmIChldmVudC50eXBlID09PSBkcmFnb25Cb25lcy5FdmVudE9iamVjdC5GQURFX0lOX0NPTVBMRVRFKSB7XG4gICAgICAgICAgICBpZiAoZXZlbnQuYW5pbWF0aW9uU3RhdGUubmFtZSA9PT0gXCJqdW1wXzFcIikge1xuICAgICAgICAgICAgICAgIHRoaXMuX2lzSnVtcGluZ0IgPSB0cnVlO1xuICAgICAgICAgICAgICAgIHRoaXMuX3NwZWVkWSA9IC1KVU1QX1NQRUVEO1xuXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuX21vdmVEaXIgIT0gMClcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLl9tb3ZlRGlyICogdGhpcy5fZmFjZURpciA+IDApIFxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLl9zcGVlZFggPSBNQVhfTU9WRV9TUEVFRF9GUk9OVCAqIHRoaXMuX2ZhY2VEaXI7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgZWxzZSBcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5fc3BlZWRYID0gLU1BWF9NT1ZFX1NQRUVEX0JBQ0sgKiB0aGlzLl9mYWNlRGlyO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgdGhpcy5fYXJtYXR1cmUuYW5pbWF0aW9uLmZhZGVJbihcImp1bXBfMlwiLCAtMSwgLTEsIDAsIE5PUk1BTF9BTklNQVRJT05fR1JPVVApLnJlc2V0VG9Qb3NlID0gZmFsc2U7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKGV2ZW50LmFuaW1hdGlvblN0YXRlLm5hbWUgPT09IFwianVtcF80XCIpIHtcbiAgICAgICAgICAgICAgICB0aGlzLl91cGRhdGVBbmltYXRpb24oKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChldmVudC50eXBlID09PSBkcmFnb25Cb25lcy5FdmVudE9iamVjdC5GQURFX09VVF9DT01QTEVURSkge1xuICAgICAgICAgICAgaWYgKGV2ZW50LmFuaW1hdGlvblN0YXRlLm5hbWUgPT09IFwiYXR0YWNrXzAxXCIpIHtcbiAgICAgICAgICAgICAgICB0aGlzLl9pc0F0dGFja2luZ0IgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICB0aGlzLl9hdHRhY2tTdGF0ZSA9IG51bGw7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoZXZlbnQudHlwZSA9PT0gZHJhZ29uQm9uZXMuRXZlbnRPYmplY3QuQ09NUExFVEUpIHtcbiAgICAgICAgICAgIGlmIChldmVudC5hbmltYXRpb25TdGF0ZS5uYW1lID09PSBcImp1bXBfNFwiKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5faXNKdW1waW5nQSA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIHRoaXMuX2lzSnVtcGluZ0IgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICB0aGlzLl91cGRhdGVBbmltYXRpb24oKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH0sXG5cbiAgICBfZnJhbWVFdmVudEhhbmRsZXIgOiBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgICAgaWYgKGV2ZW50Lm5hbWUgPT09IFwiZmlyZVwiKSB7XG4gICAgICAgICAgICAvLyB2YXIgZmlyZVBvaW50Qm9uZSA9IGV2ZW50LmFybWF0dXJlLmdldEJvbmUoXCJmaXJlUG9pbnRcIik7XG4gICAgICAgICAgICB2YXIgbG9jYWxQb2ludCA9IGNjLnYyKGV2ZW50LmJvbmUuZ2xvYmFsLngsIGV2ZW50LmJvbmUuZ2xvYmFsLnkpO1xuXG4gICAgICAgICAgICB2YXIgZGlzcGxheSA9IGV2ZW50LmFybWF0dXJlLmRpc3BsYXk7XG4gICAgICAgICAgICB2YXIgZ2xvYmFsUG9pbnQgPSBkaXNwbGF5Lm5vZGUuY29udmVydFRvV29ybGRTcGFjZShsb2NhbFBvaW50KTtcblxuICAgICAgICAgICAgdGhpcy5fZmlyZShnbG9iYWxQb2ludCk7XG4gICAgICAgIH1cbiAgICB9LFxuXG4gICAgX2ZpcmUgOiBmdW5jdGlvbiAoZmlyZVBvaW50KSB7XG4gICAgICAgIGZpcmVQb2ludC54ICs9IE1hdGgucmFuZG9tKCkgKiAyIC0gMTtcbiAgICAgICAgZmlyZVBvaW50LnkgKz0gTWF0aC5yYW5kb20oKSAqIDIgLSAxO1xuXG4gICAgICAgIHZhciBhcm1hdHVyZSA9IHRoaXMuX2FybWF0dXJlRGlzcGxheS5idWlsZEFybWF0dXJlKFwiYnVsbGV0XzAxXCIpO1xuICAgICAgICB2YXIgZWZmZWN0ID0gdGhpcy5fYXJtYXR1cmVEaXNwbGF5LmJ1aWxkQXJtYXR1cmUoXCJmaXJlX2VmZmVjdF8wMVwiKTtcbiAgICAgICAgdmFyIHJhZGlhbiA9IHRoaXMuX2ZhY2VEaXIgPCAwID8gTWF0aC5QSSAtIHRoaXMuX2FpbVJhZGlhbiA6IHRoaXMuX2FpbVJhZGlhbjtcbiAgICAgICAgdmFyIGJ1bGxldCA9IG5ldyBEcmFnb25CdWxsZXQoKTtcbiAgICAgICAgYnVsbGV0LmluaXQodGhpcy5ub2RlLnBhcmVudCwgYXJtYXR1cmUsIGVmZmVjdCwgcmFkaWFuICsgTWF0aC5yYW5kb20oKSAqIDAuMDIgLSAwLjAxLCA0MCwgZmlyZVBvaW50KTtcbiAgICAgICAgdGhpcy5hZGRCdWxsZXQoYnVsbGV0KTtcbiAgICB9LFxuXG4gICAgX3VwZGF0ZUFuaW1hdGlvbiA6IGZ1bmN0aW9uKCkge1xuICAgICAgICBpZiAodGhpcy5faXNKdW1waW5nQSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHRoaXMuX2lzU3F1YXRpbmcpIHtcbiAgICAgICAgICAgIHRoaXMuX3NwZWVkWCA9IDA7XG4gICAgICAgICAgICB0aGlzLl9hcm1hdHVyZS5hbmltYXRpb24uZmFkZUluKFwic3F1YXRcIiwgLTEsIC0xLCAwLCBOT1JNQUxfQU5JTUFUSU9OX0dST1VQKS5yZXNldFRvUG9zZSA9IGZhbHNlO1xuICAgICAgICAgICAgdGhpcy5fd2Fsa1N0YXRlID0gbnVsbDtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0aGlzLl9tb3ZlRGlyID09PSAwKSB7XG4gICAgICAgICAgICB0aGlzLl9zcGVlZFggPSAwO1xuICAgICAgICAgICAgdGhpcy5fYXJtYXR1cmUuYW5pbWF0aW9uLmZhZGVJbihcImlkbGVcIiwgLTEsIC0xLCAwLCBOT1JNQUxfQU5JTUFUSU9OX0dST1VQKS5yZXNldFRvUG9zZSA9IGZhbHNlO1xuICAgICAgICAgICAgdGhpcy5fd2Fsa1N0YXRlID0gbnVsbDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGlmICghdGhpcy5fd2Fsa1N0YXRlKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5fd2Fsa1N0YXRlID0gdGhpcy5fYXJtYXR1cmUuYW5pbWF0aW9uLmZhZGVJbihcIndhbGtcIiwgLTEsIC0xLCAwLCBOT1JNQUxfQU5JTUFUSU9OX0dST1VQKTtcbiAgICAgICAgICAgICAgICB0aGlzLl93YWxrU3RhdGUucmVzZXRUb1Bvc2UgPSBmYWxzZTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKHRoaXMuX21vdmVEaXIgKiB0aGlzLl9mYWNlRGlyID4gMCkge1xuICAgICAgICAgICAgICAgIHRoaXMuX3dhbGtTdGF0ZS50aW1lU2NhbGUgPSBNQVhfTU9WRV9TUEVFRF9GUk9OVCAvIE5PUk1BTElaRV9NT1ZFX1NQRUVEO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aGlzLl93YWxrU3RhdGUudGltZVNjYWxlID0gLU1BWF9NT1ZFX1NQRUVEX0JBQ0sgLyBOT1JNQUxJWkVfTU9WRV9TUEVFRDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKHRoaXMuX21vdmVEaXIgKiB0aGlzLl9mYWNlRGlyID4gMCkge1xuICAgICAgICAgICAgICAgIHRoaXMuX3NwZWVkWCA9IE1BWF9NT1ZFX1NQRUVEX0ZST05UICogdGhpcy5fZmFjZURpcjtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgdGhpcy5fc3BlZWRYID0gLU1BWF9NT1ZFX1NQRUVEX0JBQ0sgKiB0aGlzLl9mYWNlRGlyO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfSxcblxuICAgIF91cGRhdGVQb3NpdGlvbiA6IGZ1bmN0aW9uKCkge1xuICAgICAgICBpZiAodGhpcy5fc3BlZWRYICE9PSAwKSB7XG4gICAgICAgICAgICB0aGlzLm5vZGUueCArPSB0aGlzLl9zcGVlZFg7XG4gICAgICAgICAgICB2YXIgbWluWCA9IC1jYy52aXNpYmxlUmVjdC53aWR0aCAvIDI7XG4gICAgICAgICAgICB2YXIgbWF4WCA9IGNjLnZpc2libGVSZWN0LndpZHRoIC8gMjtcbiAgICAgICAgICAgIGlmICh0aGlzLm5vZGUueCA8IG1pblgpIHtcbiAgICAgICAgICAgICAgICB0aGlzLm5vZGUueCA9IG1pblg7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKHRoaXMubm9kZS54ID4gbWF4WCkge1xuICAgICAgICAgICAgICAgIHRoaXMubm9kZS54ID0gbWF4WDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0aGlzLl9zcGVlZFkgIT0gMCkge1xuICAgICAgICAgICAgaWYgKHRoaXMuX3NwZWVkWSA+IDUgJiYgdGhpcy5fc3BlZWRZICsgRyA8PSA1KSB7XG4gICAgICAgICAgICAgICAgdGhpcy5fYXJtYXR1cmUuYW5pbWF0aW9uLmZhZGVJbihcImp1bXBfM1wiLCAtMSwgLTEsIDAsIE5PUk1BTF9BTklNQVRJT05fR1JPVVApLnJlc2V0VG9Qb3NlID0gZmFsc2U7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHRoaXMuX3NwZWVkWSArPSBHO1xuICAgICAgICAgICAgdGhpcy5ub2RlLnkgKz0gdGhpcy5fc3BlZWRZO1xuICAgICAgICAgICAgaWYgKHRoaXMubm9kZS55IDwgR1JPVU5EKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5ub2RlLnkgPSBHUk9VTkQ7XG4gICAgICAgICAgICAgICAgdGhpcy5fc3BlZWRZID0gMDtcbiAgICAgICAgICAgICAgICB0aGlzLl9hcm1hdHVyZS5hbmltYXRpb24uZmFkZUluKFwianVtcF80XCIsIC0xLCAtMSwgMCwgTk9STUFMX0FOSU1BVElPTl9HUk9VUCkucmVzZXRUb1Bvc2UgPSBmYWxzZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH0sXG5cbiAgICBfdXBkYXRlQWltIDogZnVuY3Rpb24gKCkge1xuICAgICAgICBpZiAoIXRoaXMuX21vdXNlRG93bl8pIHJldHVybjtcblxuICAgICAgICBpZiAodGhpcy5fYWltRGlyID09PSAwKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLl9mYWNlRGlyID0gdGhpcy5fdGFyZ2V0LnggPiB0aGlzLm5vZGUueCA/IDEgOiAtMTtcbiAgICAgICAgaWYgKHRoaXMubm9kZS5zY2FsZVggKiB0aGlzLl9mYWNlRGlyIDwgMCkge1xuICAgICAgICAgICAgdGhpcy5ub2RlLnNjYWxlWCAqPSAtMTtcbiAgICAgICAgICAgIGlmICh0aGlzLl9tb3ZlRGlyKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5fdXBkYXRlQW5pbWF0aW9uKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICB2YXIgYWltT2Zmc2V0WSA9IHRoaXMuX2FybWF0dXJlLmdldEJvbmUoXCJjaGVzdFwiKS5nbG9iYWwueSAqIHRoaXMubm9kZS5zY2FsZVk7XG5cbiAgICAgICAgaWYgKHRoaXMuX2ZhY2VEaXIgPiAwKSB7XG4gICAgICAgICAgICB0aGlzLl9haW1SYWRpYW4gPSBNYXRoLmF0YW4yKHRoaXMuX3RhcmdldC55IC0gdGhpcy5ub2RlLnkgLSBhaW1PZmZzZXRZLCB0aGlzLl90YXJnZXQueCAtIHRoaXMubm9kZS54KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuX2FpbVJhZGlhbiA9IE1hdGguUEkgLSBNYXRoLmF0YW4yKHRoaXMuX3RhcmdldC55IC0gdGhpcy5ub2RlLnkgLSBhaW1PZmZzZXRZLCB0aGlzLl90YXJnZXQueCAtIHRoaXMubm9kZS54KTtcbiAgICAgICAgICAgIGlmICh0aGlzLl9haW1SYWRpYW4gPiBNYXRoLlBJKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5fYWltUmFkaWFuIC09IE1hdGguUEkgKiAyO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgbGV0IGFpbURpciA9IDA7XG4gICAgICAgIGlmICh0aGlzLl9haW1SYWRpYW4gPiAwKSB7XG4gICAgICAgICAgICBhaW1EaXIgPSAxO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgYWltRGlyID0gLTE7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodGhpcy5fYWltRGlyICE9IGFpbURpcikge1xuICAgICAgICAgICAgdGhpcy5fYWltRGlyID0gYWltRGlyO1xuXG4gICAgICAgICAgICAvLyBBbmltYXRpb24gbWl4aW5nLlxuICAgICAgICAgICAgaWYgKHRoaXMuX2FpbURpciA+PSAwKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5fYWltU3RhdGUgPSB0aGlzLl9hcm1hdHVyZS5hbmltYXRpb24uZmFkZUluKFxuICAgICAgICAgICAgICAgICAgICBcImFpbV91cFwiLCAtMS4wLCAtMSxcbiAgICAgICAgICAgICAgICAgICAgMCwgQUlNX0FOSU1BVElPTl9HUk9VUCk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHRoaXMuX2FpbVN0YXRlID0gdGhpcy5fYXJtYXR1cmUuYW5pbWF0aW9uLmZhZGVJbihcbiAgICAgICAgICAgICAgICAgICAgXCJhaW1fZG93blwiLCAtMS4wLCAtMSxcbiAgICAgICAgICAgICAgICAgICAgMCwgQUlNX0FOSU1BVElPTl9HUk9VUCk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHRoaXMuX2FpbVN0YXRlLnJlc2V0VG9Qb3NlID0gZmFsc2U7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLl9haW1TdGF0ZS53ZWlnaHQgPSBNYXRoLmFicyh0aGlzLl9haW1SYWRpYW4gLyBNYXRoLlBJICogMik7XG5cbiAgICAgICAgLy9fYXJtYXR1cmUuaW52YWxpZFVwZGF0ZShcInBlbHZpc1wiKTsgLy8gT25seSB1cGRhdGUgYm9uZSBtYXNrLlxuICAgICAgICB0aGlzLl9hcm1hdHVyZS5pbnZhbGlkVXBkYXRlKCk7XG4gICAgfSxcblxuICAgIF91cGRhdGVBdHRhY2sgOiBmdW5jdGlvbigpIHtcbiAgICAgICAgaWYgKCF0aGlzLl9pc0F0dGFja2luZ0EgfHwgdGhpcy5faXNBdHRhY2tpbmdCKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLl9pc0F0dGFja2luZ0IgPSB0cnVlO1xuXG4gICAgICAgIC8vIEFuaW1hdGlvbiBtaXhpbmcuXG4gICAgICAgIHRoaXMuX2F0dGFja1N0YXRlID0gdGhpcy5fYXJtYXR1cmUuYW5pbWF0aW9uLmZhZGVJbihcbiAgICAgICAgICAgIFwiYXR0YWNrXzAxXCIsIC0xLjAsIC0xLFxuICAgICAgICAgICAgMCwgQVRUQUNLX0FOSU1BVElPTl9HUk9VUCwgZHJhZ29uQm9uZXMuQW5pbWF0aW9uRmFkZU91dE1vZGUuU2FtZUdyb3VwXG4gICAgICAgICk7XG5cbiAgICAgICAgdGhpcy5fYXR0YWNrU3RhdGUucmVzZXRUb1Bvc2UgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5fYXR0YWNrU3RhdGUuYXV0b0ZhZGVPdXRUaW1lID0gdGhpcy5fYXR0YWNrU3RhdGUuZmFkZVRvdGFsVGltZTtcbiAgICB9XG59KTtcblxuXG52YXIgRHJhZ29uQnVsbGV0ID0gY2MuQ2xhc3Moe1xuICAgIG5hbWU6ICdEcmFnb25CdWxsZXQnLFxuICAgIF9zcGVlZFggOiAwLFxuICAgIF9zcGVlZFkgOiAwLFxuXG4gICAgX2FybWF0dXJlIDogbnVsbCxcbiAgICBfYXJtYXR1cmVEaXNwbGF5IDogbnVsbCxcbiAgICBfZWZmZWN0IDogbnVsbCxcblxuICAgIGluaXQgOiBmdW5jdGlvbiAocGFyZW50Tm9kZSwgYXJtYXR1cmUsIGVmZmVjdCwgcmFkaWFuLCBzcGVlZCwgcG9zaXRpb24pIHtcbiAgICAgICAgdGhpcy5fc3BlZWRYID0gTWF0aC5jb3MocmFkaWFuKSAqIHNwZWVkO1xuICAgICAgICB0aGlzLl9zcGVlZFkgPSBNYXRoLnNpbihyYWRpYW4pICogc3BlZWQ7XG4gICAgICAgIHZhciB0aGVQb3MgPSBwYXJlbnROb2RlLmNvbnZlcnRUb05vZGVTcGFjZUFSKHBvc2l0aW9uKTtcblxuICAgICAgICBhcm1hdHVyZS5wbGF5QW5pbWF0aW9uKFwiaWRsZVwiKTtcbiAgICAgICAgXG4gICAgICAgIGxldCBhcm1hdHVyZU5vZGUgPSBhcm1hdHVyZS5ub2RlO1xuICAgICAgICBhcm1hdHVyZU5vZGUuc2V0UG9zaXRpb24odGhlUG9zKTtcbiAgICAgICAgYXJtYXR1cmVOb2RlLmFuZ2xlID0gcmFkaWFuICogY2MubWFjcm8uREVHO1xuXG4gICAgICAgIHRoaXMuX2FybWF0dXJlID0gYXJtYXR1cmU7XG4gICAgICAgIFxuICAgICAgICBpZiAoZWZmZWN0KSB7XG4gICAgICAgICAgICB0aGlzLl9lZmZlY3QgPSBlZmZlY3Q7XG4gICAgICAgICAgICB2YXIgZWZmZWN0RGlzcGxheSA9IHRoaXMuX2VmZmVjdC5ub2RlO1xuICAgICAgICAgICAgZWZmZWN0RGlzcGxheS5hbmdsZSA9IHJhZGlhbiAqIGNjLm1hY3JvLkRFRztcbiAgICAgICAgICAgIGVmZmVjdERpc3BsYXkuc2V0UG9zaXRpb24odGhlUG9zKTtcbiAgICAgICAgICAgIGVmZmVjdERpc3BsYXkuc2NhbGVYID0gMSArIE1hdGgucmFuZG9tKCkgKiAxO1xuICAgICAgICAgICAgZWZmZWN0RGlzcGxheS5zY2FsZVkgPSAxICsgTWF0aC5yYW5kb20oKSAqIDAuNTtcbiAgICAgICAgICAgIGlmIChNYXRoLnJhbmRvbSgpIDwgMC41KSB7XG4gICAgICAgICAgICAgICAgZWZmZWN0RGlzcGxheS5zY2FsZVkgKj0gLTE7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHRoaXMuX2VmZmVjdC5wbGF5QW5pbWF0aW9uKFwiaWRsZVwiKTtcblxuICAgICAgICAgICAgcGFyZW50Tm9kZS5hZGRDaGlsZChlZmZlY3REaXNwbGF5KTtcbiAgICAgICAgfVxuXG4gICAgICAgIHBhcmVudE5vZGUuYWRkQ2hpbGQoYXJtYXR1cmVOb2RlKTtcbiAgICB9LFxuXG4gICAgdXBkYXRlIDogZnVuY3Rpb24oKSB7XG4gICAgICAgIGxldCBhcm1hdHVyZU5vZGUgPSB0aGlzLl9hcm1hdHVyZS5ub2RlO1xuXG4gICAgICAgIGFybWF0dXJlTm9kZS54ICs9IHRoaXMuX3NwZWVkWDtcbiAgICAgICAgYXJtYXR1cmVOb2RlLnkgKz0gdGhpcy5fc3BlZWRZO1xuXG4gICAgICAgIHZhciB3b3JsZFBvcyA9IGFybWF0dXJlTm9kZS5wYXJlbnQuY29udmVydFRvV29ybGRTcGFjZUFSKGFybWF0dXJlTm9kZS5nZXRQb3NpdGlvbigpKTtcbiAgICAgICAgaWYgKFxuICAgICAgICAgICAgd29ybGRQb3MueCA8IC0xMDAgfHwgd29ybGRQb3MueCA+PSBjYy52aXNpYmxlUmVjdC53aWR0aCArIDEwMCB8fFxuICAgICAgICAgICAgd29ybGRQb3MueSA8IC0xMDAgfHwgd29ybGRQb3MueSA+PSBjYy52aXNpYmxlUmVjdC5oZWlnaHQgKyAxMDBcbiAgICAgICAgKSB7XG4gICAgICAgICAgICB0aGlzLmRvQ2xlYW4oKTtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH0sXG5cbiAgICBvbkRpc2FibGUgOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHRoaXMuZG9DbGVhbigpO1xuICAgIH0sXG5cbiAgICBkb0NsZWFuIDogZnVuY3Rpb24oKSB7XG4gICAgICAgIHRoaXMuX2FybWF0dXJlLm5vZGUucmVtb3ZlRnJvbVBhcmVudCgpO1xuXG4gICAgICAgIGlmICh0aGlzLl9lZmZlY3QpIHtcbiAgICAgICAgICAgIHRoaXMuX2VmZmVjdC5ub2RlLnJlbW92ZUZyb21QYXJlbnQoKTtcbiAgICAgICAgfVxuICAgIH1cbn0pO1xufSAvLyBlbmQgb2YgIWNjLnJ1bnRpbWVcbiJdfQ==