"use strict";
cc._RF.push(module, '8aafeSxy+BNZ54pjtkdkRxp', 'LabelAttributes');
// cases/02_ui/02_label/LabelAttributes.ts

"use strict";
// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var NewClass = /** @class */ (function (_super) {
    __extends(NewClass, _super);
    function NewClass() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.label_size = null;
        _this.label_color = null;
        _this.label_align = null;
        _this.label_lineheight = null;
        _this.label_effects = null;
        _this.label_overflow = null;
        _this.text = 'hello';
        return _this;
        // update (dt) {}
    }
    // LIFE-CYCLE CALLBACKS:
    // onLoad () {}
    NewClass.prototype.schedule_attributes = function (label, ani, idx) {
        var _this = this;
        if (typeof idx === "undefined") {
            idx = 0;
        }
        if (!!!ani.list[idx]) {
            return;
        }
        var cfg = ani.list[idx];
        if ("step" in cfg) {
            var array = [];
            var _loop_1 = function (v) {
                var delay = cfg.duration * (v - cfg.from) / (cfg.to - cfg.from);
                this_1.scheduleOnce(function () {
                    if (cfg.attr) {
                        label[cfg.attr] = v;
                    }
                }, delay);
            };
            var this_1 = this;
            for (var v = cfg.from; v < cfg.to; v += cfg.step) {
                _loop_1(v);
            }
            var lastValue_1 = cfg.to;
            this.scheduleOnce(function () {
                if (cfg.attr) {
                    label[cfg.attr] = lastValue_1;
                }
            }, cfg.duration);
            this.scheduleOnce(function () {
                if (ani.loop) {
                    idx = (idx + 1) % ani.list.length;
                }
                else {
                    idx += 1;
                }
                _this.schedule_attributes(label, ani, idx);
            }, cfg.duration + cfg.step);
        }
        else if ("values" in cfg) {
            var step = cfg.duration / cfg.values.length;
            var vs_1 = cfg.values;
            var cb_1 = cfg.callback;
            var _loop_2 = function (i) {
                this_2.scheduleOnce(function () {
                    if (cfg.attr) {
                        label[cfg.attr] = vs_1[i];
                    }
                    if (cb_1)
                        cb_1(vs_1[i]);
                }, i * step);
            };
            var this_2 = this;
            for (var i = 0; i < cfg.values.length; i++) {
                _loop_2(i);
            }
            this.scheduleOnce(function () {
                if (cfg.attr)
                    label[cfg.attr] = vs_1[vs_1.length - 1];
                if (cb_1)
                    cb_1(vs_1[vs_1.length - 1]);
            }, cfg.duration);
            this.scheduleOnce(function () {
                if (ani.loop) {
                    idx = (idx + 1) % ani.list.length;
                }
                else {
                    idx += 1;
                }
                _this.schedule_attributes(label, ani, idx);
            }, cfg.duration + cfg.stay);
        }
        else if ("update" in cfg) {
            if (cfg._time == undefined && cfg.before) {
                var ret = cfg.before(cfg.from, cfg.to);
                if (ret != undefined && cfg.attr) {
                    label[cfg.attr] = ret;
                }
                cfg._time = 1;
            }
            var times_1 = Math.floor(cfg.duration / cfg.interval);
            var i_1 = 0;
            var updatecb_1 = cfg.update;
            var from_1 = cfg.from;
            var to_1 = cfg.to;
            var after_1 = cfg.after;
            this.schedule(function () {
                var ret = updatecb_1(i_1 / times_1, from_1, to_1);
                if (ret != undefined && cfg.attr)
                    label[cfg.attr] = ret;
                i_1 += 1;
                if (i_1 >= times_1) {
                    if (after_1)
                        after_1(from_1, to_1);
                    delete cfg._time;
                }
            }, cfg.interval, times_1, 0);
            this.scheduleOnce(function () {
                if (ani.loop) {
                    idx = (idx + 1) % ani.list.length;
                }
                else {
                    idx += 1;
                }
                _this.schedule_attributes(label, ani, idx);
            }, cfg.duration + cfg.stay);
        }
    };
    NewClass.prototype.start = function () {
        this.setup_fontsize();
        this.setup_font_color();
        this.setup_label_align();
        this.setup_line_height();
        this.setup_label_decoration();
        this.setup_label_overflow();
    };
    NewClass.prototype.setup_fontsize = function () {
        var label = "Update FontSize/Anchor";
        this.label_size.string = label;
        var label_size = this.label_size;
        this.schedule_attributes(this.label_size, {
            loop: true,
            list: [
                {
                    attr: "fontSize",
                    values: [25, 10, 30, 22],
                    duration: 3,
                    stay: 1
                },
                {
                    from: new cc.Vec2(0, 0),
                    to: new cc.Vec2(1, 1),
                    update: function (p, f, t) {
                        var x = f.x * (1 - p) + p * t.y;
                        var y = f.y * (1 - p) + p * t.y;
                        label_size.node.setAnchorPoint(x, y);
                        label_size.string = "Update Node Anchor: " + x.toFixed(2) + ", " + y.toFixed(2);
                    },
                    duration: 3,
                    stay: 1,
                    interval: 0.2,
                    before: function (f, t) {
                        label_size.string = "Update Node Anchor";
                    },
                    after: function (f, t) {
                        label_size.string = label;
                        label_size.node.setAnchorPoint(0.5, 0.5);
                    }
                }
            ]
        });
    };
    NewClass.prototype.setup_font_color = function () {
        var label = "Update Font Color";
        this.label_color.string = label;
        var label_color = this.label_color;
        var old_color = label_color.node.color;
        this.schedule_attributes(this.label_color, {
            loop: true,
            list: [{
                    from: new cc.Color(255, 0, 0),
                    to: new cc.Color(255, 255, 0),
                    update: function (p, f, t) {
                        var r = f.getR() * (1 - p) + p * t.getR();
                        var g = f.getG() * (1 - p) + p * t.getG();
                        var b = f.getB() * (1 - p) + p * t.getB();
                        var c = new cc.Color(r, g, b);
                        label_color.node.color = c;
                    },
                    duration: 3,
                    stay: 1,
                    interval: 0.1,
                    before: function (f, t) {
                        label_color.string = "Update Node Color";
                        label_color.node.color = old_color;
                        label_color.node.opacity = 255;
                    },
                    after: function (f, t) {
                        label_color.node.color = old_color;
                    }
                }, {
                    from: 0,
                    to: 255,
                    update: function (p, f, t) {
                        label_color.node.opacity = (1 - p) * f + t * p;
                    },
                    duration: 3,
                    stay: 1,
                    interval: 0.1,
                    before: function (f, t) {
                        label_color.string = "Update Node Alpha";
                        label_color.node.opacity = 255;
                    },
                    after: function (f, t) {
                        label_color.node.opacity = 255;
                    }
                }
            ]
        });
    };
    NewClass.prototype.setup_label_align = function () {
        var label = "Update Label \nParamaters\nLines";
        this.label_align.string = label;
        var label_align = this.label_align;
        this.schedule_attributes(label_align, {
            loop: true,
            list: [
                {
                    attr: "horizontalAlign",
                    values: [0, 1, 2],
                    duration: 3,
                    stay: 1
                },
                {
                    attr: "verticalAlign",
                    values: [0, 1, 2],
                    duration: 3,
                    stay: 1
                }
            ]
        });
    };
    NewClass.prototype.setup_line_height = function () {
        var label = "Update Label \Line Height\nSpaceing x";
        this.label_lineheight.string = label;
        var label_lineheight = this.label_lineheight;
        this.schedule_attributes(label_lineheight, {
            loop: true,
            list: [
                {
                    attr: "lineHeight",
                    values: [10, 20, 30],
                    duration: 3,
                    stay: 1
                },
                {
                    attr: "spacingX",
                    from: 0,
                    to: 10,
                    update: function (p, f, t) {
                        return (1 - p) * f + p * t;
                    },
                    duration: 3,
                    stay: 1,
                    interval: 0.1,
                    after: function () {
                        label_lineheight.spacingX = 0;
                    }
                }
            ]
        });
    };
    NewClass.prototype.setup_label_decoration = function () {
        var label = "Update Label \LDecoration";
        this.label_effects.string = label;
        var label_effects = this.label_effects;
        label_effects.fontSize = 20;
        label_effects.horizontalAlign = cc.Label.HorizontalAlign.LEFT;
        var values = [];
        for (var i = 0; i <= (1 << 2); i++) {
            values.push({
                enableItalic: ((i >> 0) & 0x1) == 1,
                enableUnderline: ((i >> 1) & 0x1) == 1,
            });
        }
        this.schedule_attributes(label_effects, {
            loop: true,
            list: [
                {
                    values: values,
                    duration: 8,
                    stay: 1,
                    callback: function (value) {
                        // label_effects.enableItalic = value.enableBold;
                        label_effects.enableBold = value.enableBold;
                        label_effects.enableUnderline = value.enableUnderline;
                        var tex = [];
                        for (var k in value) {
                            tex.push(k + ": " + value[k]);
                        }
                        label_effects.string = tex.join("\n");
                    }
                },
            ]
        });
    };
    NewClass.prototype.setup_label_overflow = function () {
        var label = "Update Label \nOverFlow\nLong Line Text\n";
        this.label_overflow.string = label;
        var label_overflow = this.label_overflow;
        label_overflow.fontSize = 40;
        var values = [
            cc.Label.Overflow.NONE,
            cc.Label.Overflow.CLAMP,
            cc.Label.Overflow.RESIZE_HEIGHT,
            cc.Label.Overflow.SHRINK
        ];
        this.schedule_attributes(label_overflow, {
            loop: true,
            list: [
                {
                    attr: "overflow",
                    values: values,
                    duration: 4,
                    stay: 1,
                    callback: function (v) {
                        label_overflow.string = label + v;
                    }
                },
            ]
        });
    };
    __decorate([
        property(cc.Label)
    ], NewClass.prototype, "label_size", void 0);
    __decorate([
        property(cc.Label)
    ], NewClass.prototype, "label_color", void 0);
    __decorate([
        property(cc.Label)
    ], NewClass.prototype, "label_align", void 0);
    __decorate([
        property(cc.Label)
    ], NewClass.prototype, "label_lineheight", void 0);
    __decorate([
        property(cc.Label)
    ], NewClass.prototype, "label_effects", void 0);
    __decorate([
        property(cc.Label)
    ], NewClass.prototype, "label_overflow", void 0);
    __decorate([
        property
    ], NewClass.prototype, "text", void 0);
    NewClass = __decorate([
        ccclass
    ], NewClass);
    return NewClass;
}(cc.Component));
exports.default = NewClass;

cc._RF.pop();