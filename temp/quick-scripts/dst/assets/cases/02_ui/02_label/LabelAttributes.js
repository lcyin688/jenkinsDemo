
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/cases/02_ui/02_label/LabelAttributes.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9jYXNlcy8wMl91aS8wMl9sYWJlbC9MYWJlbEF0dHJpYnV0ZXMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLG9CQUFvQjtBQUNwQix3RUFBd0U7QUFDeEUsbUJBQW1CO0FBQ25CLGtGQUFrRjtBQUNsRiw4QkFBOEI7QUFDOUIsa0ZBQWtGOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFNUUsSUFBQSxLQUF3QixFQUFFLENBQUMsVUFBVSxFQUFuQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWtCLENBQUM7QUFpQzVDO0lBQXNDLDRCQUFZO0lBQWxEO1FBQUEscUVBNlZDO1FBMVZHLGdCQUFVLEdBQWEsSUFBSSxDQUFDO1FBRzVCLGlCQUFXLEdBQWEsSUFBSSxDQUFDO1FBRzdCLGlCQUFXLEdBQWEsSUFBSSxDQUFDO1FBRzdCLHNCQUFnQixHQUFhLElBQUksQ0FBQztRQUdsQyxtQkFBYSxHQUFhLElBQUksQ0FBQztRQUcvQixvQkFBYyxHQUFhLElBQUksQ0FBQztRQUdoQyxVQUFJLEdBQVcsT0FBTyxDQUFDOztRQXVVdkIsaUJBQWlCO0lBQ3JCLENBQUM7SUF0VUcsd0JBQXdCO0lBRXhCLGVBQWU7SUFJZixzQ0FBbUIsR0FBbkIsVUFBdUIsS0FBZSxFQUFFLEdBQTBCLEVBQUUsR0FBWTtRQUFoRixpQkFrR0M7UUFoR0csSUFBSSxPQUFPLEdBQUcsS0FBSyxXQUFXLEVBQUU7WUFDNUIsR0FBRyxHQUFHLENBQUMsQ0FBQztTQUNYO1FBRUQsSUFBSSxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFO1lBQ2xCLE9BQU87U0FDVjtRQUVELElBQUksR0FBRyxHQUFHLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDeEIsSUFBSSxNQUFNLElBQUksR0FBRyxFQUFFO1lBQ2YsSUFBSSxLQUFLLEdBQUcsRUFBRSxDQUFDO29DQUNOLENBQUM7Z0JBQ04sSUFBSSxL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LGVBQUM7Q0E3VkQsQUE2VkMsQ0E3VnFDLEVBQUUsQ0FBQyxTQUFTLEdBNlZqRDtrQkE3Vm9CLFFBQVEiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyIvLyBMZWFybiBUeXBlU2NyaXB0OlxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvdHlwZXNjcmlwdC5odG1sXG4vLyBMZWFybiBBdHRyaWJ1dGU6XG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9yZWZlcmVuY2UvYXR0cmlidXRlcy5odG1sXG4vLyBMZWFybiBsaWZlLWN5Y2xlIGNhbGxiYWNrczpcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL2xpZmUtY3ljbGUtY2FsbGJhY2tzLmh0bWxcblxuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gY2MuX2RlY29yYXRvcjtcblxuaW50ZXJmYWNlIEFuaUJhc2Uge1xuICAgIGF0dHI/OnN0cmluZztcbiAgICBzdGF5Om51bWJlcjtcbiAgICBkdXJhdGlvbjogbnVtYmVyO1xufVxuXG5pbnRlcmZhY2UgQW5pUmFuZ2UgZXh0ZW5kcyBBbmlCYXNle1xuICAgIGZyb206IG51bWJlcjtcbiAgICB0bzogbnVtYmVyO1xuICAgIHN0ZXA6IG51bWJlcjtcbn1cbmludGVyZmFjZSBBbmlFbnVtIGV4dGVuZHMgQW5pQmFzZXtcbiAgICB2YWx1ZXM6IGFueVtdO1xuICAgIGNhbGxiYWNrPzoodik9PnZvaWR8YW55O1xufVxuaW50ZXJmYWNlIEFuaUNhbGxiYWNrIGV4dGVuZHMgQW5pQmFzZXtcbiAgICB1cGRhdGU6IChwOiBudW1iZXIsIGYsIHQpID0+IGFueXx2b2lkO1xuICAgIGJlZm9yZT86IChmLCB0KSA9PiBhbnl8dm9pZDtcbiAgICBhZnRlcj86IChmLCB0KSA9PiBhbnl8dm9pZDtcbiAgICBmcm9tOmFueTtcbiAgICB0bzogYW55O1xuICAgIGludGVydmFsOiBudW1iZXI7XG4gICAgX3RpbWU/Om51bWJlcjtcbn1cblxuaW50ZXJmYWNlIExhYmVsQXR0ckFuaW1hdGlvbjxUPiB7XG4gICAgbG9vcDogYm9vbGVhbjtcbiAgICBsaXN0OiAoQW5pUmFuZ2UgfCBBbmlFbnVtIHwgQW5pQ2FsbGJhY2spW107XG59XG5cbkBjY2NsYXNzXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBOZXdDbGFzcyBleHRlbmRzIGNjLkNvbXBvbmVudCB7XG5cbiAgICBAcHJvcGVydHkoY2MuTGFiZWwpXG4gICAgbGFiZWxfc2l6ZTogY2MuTGFiZWwgPSBudWxsO1xuXG4gICAgQHByb3BlcnR5KGNjLkxhYmVsKVxuICAgIGxhYmVsX2NvbG9yOiBjYy5MYWJlbCA9IG51bGw7XG5cbiAgICBAcHJvcGVydHkoY2MuTGFiZWwpXG4gICAgbGFiZWxfYWxpZ246IGNjLkxhYmVsID0gbnVsbDtcblxuICAgIEBwcm9wZXJ0eShjYy5MYWJlbClcbiAgICBsYWJlbF9saW5laGVpZ2h0OiBjYy5MYWJlbCA9IG51bGw7XG5cbiAgICBAcHJvcGVydHkoY2MuTGFiZWwpXG4gICAgbGFiZWxfZWZmZWN0czogY2MuTGFiZWwgPSBudWxsO1xuXG4gICAgQHByb3BlcnR5KGNjLkxhYmVsKVxuICAgIGxhYmVsX292ZXJmbG93OiBjYy5MYWJlbCA9IG51bGw7XG5cbiAgICBAcHJvcGVydHlcbiAgICB0ZXh0OiBzdHJpbmcgPSAnaGVsbG8nO1xuXG4gICAgLy8gTElGRS1DWUNMRSBDQUxMQkFDS1M6XG5cbiAgICAvLyBvbkxvYWQgKCkge31cblxuXG5cbiAgICBzY2hlZHVsZV9hdHRyaWJ1dGVzPFQ+KGxhYmVsOiBjYy5MYWJlbCwgYW5pOiBMYWJlbEF0dHJBbmltYXRpb248VD4sIGlkeD86IG51bWJlcikge1xuXG4gICAgICAgIGlmICh0eXBlb2YgaWR4ID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgICBpZHggPSAwO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKCEhIWFuaS5saXN0W2lkeF0pIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGxldCBjZmcgPSBhbmkubGlzdFtpZHhdO1xuICAgICAgICBpZiAoXCJzdGVwXCIgaW4gY2ZnKSB7XG4gICAgICAgICAgICBsZXQgYXJyYXkgPSBbXTtcbiAgICAgICAgICAgIGZvciAobGV0IHYgPSBjZmcuZnJvbTsgdiA8IGNmZy50bzsgdiArPSBjZmcuc3RlcCkge1xuICAgICAgICAgICAgICAgIGxldCBkZWxheSA9IGNmZy5kdXJhdGlvbiAqICh2IC0gY2ZnLmZyb20pIC8gKGNmZy50byAtIGNmZy5mcm9tKTtcbiAgICAgICAgICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGlmKGNmZy5hdHRyKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBsYWJlbFtjZmcuYXR0cl0gPSB2O1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSwgZGVsYXkpXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBsZXQgbGFzdFZhbHVlID0gY2ZnLnRvO1xuICAgICAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xuICAgICAgICAgICAgICAgIGlmKGNmZy5hdHRyKSB7XG4gICAgICAgICAgICAgICAgICAgIGxhYmVsW2NmZy5hdHRyXSA9IGxhc3RWYWx1ZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LCBjZmcuZHVyYXRpb24pO1xuXG4gICAgICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKGFuaS5sb29wKSB7XG4gICAgICAgICAgICAgICAgICAgIGlkeCA9IChpZHggKyAxKSAlIGFuaS5saXN0Lmxlbmd0aDtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBpZHggKz0gMTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdGhpcy5zY2hlZHVsZV9hdHRyaWJ1dGVzKGxhYmVsLCBhbmksIGlkeCk7XG4gICAgICAgICAgICB9LCBjZmcuZHVyYXRpb24gKyBjZmcuc3RlcClcbiAgICAgICAgfSBlbHNlIGlmIChcInZhbHVlc1wiIGluIGNmZykge1xuICAgICAgICAgICAgbGV0IHN0ZXAgPSBjZmcuZHVyYXRpb24gLyBjZmcudmFsdWVzLmxlbmd0aDtcbiAgICAgICAgICAgIGxldCB2cyA9IGNmZy52YWx1ZXM7XG4gICAgICAgICAgICBsZXQgY2IgPSBjZmcuY2FsbGJhY2s7XG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGNmZy52YWx1ZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGlmKGNmZy5hdHRyKXtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsW2NmZy5hdHRyXSA9IHZzW2ldO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGlmKGNiKSBjYih2c1tpXSk7XG4gICAgICAgICAgICAgICAgfSwgaSAqIHN0ZXApO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xuICAgICAgICAgICAgICAgIGlmKGNmZy5hdHRyKVxuICAgICAgICAgICAgICAgICAgICBsYWJlbFtjZmcuYXR0cl0gPSB2c1t2cy5sZW5ndGggLSAxXTtcbiAgICAgICAgICAgICAgICBpZihjYilcbiAgICAgICAgICAgICAgICAgICAgY2IodnNbdnMubGVuZ3RoIC0xXSk7XG4gICAgICAgICAgICB9LCBjZmcuZHVyYXRpb24pO1xuXG4gICAgICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKGFuaS5sb29wKSB7XG4gICAgICAgICAgICAgICAgICAgIGlkeCA9IChpZHggKyAxKSAlIGFuaS5saXN0Lmxlbmd0aDtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBpZHggKz0gMTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdGhpcy5zY2hlZHVsZV9hdHRyaWJ1dGVzKGxhYmVsLCBhbmksIGlkeCk7XG4gICAgICAgICAgICB9LCBjZmcuZHVyYXRpb24gKyBjZmcuc3RheSk7XG4gICAgICAgIH0gZWxzZSBpZiAoXCJ1cGRhdGVcIiBpbiBjZmcpIHtcblxuICAgICAgICAgICAgaWYoY2ZnLl90aW1lID09IHVuZGVmaW5lZCAmJiBjZmcuYmVmb3JlKSB7XG4gICAgICAgICAgICAgICAgbGV0IHJldCA9IGNmZy5iZWZvcmUoY2ZnLmZyb20sIGNmZy50byk7XG4gICAgICAgICAgICAgICAgaWYocmV0IT11bmRlZmluZWQgJiYgY2ZnLmF0dHIpIHtcbiAgICAgICAgICAgICAgICAgICAgbGFiZWxbY2ZnLmF0dHJdID0gcmV0O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBjZmcuX3RpbWUgPSAxO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBsZXQgdGltZXMgPSBNYXRoLmZsb29yKGNmZy5kdXJhdGlvbiAvIGNmZy5pbnRlcnZhbCk7XG4gICAgICAgICAgICBsZXQgaSA9IDA7XG4gICAgICAgICAgICBsZXQgdXBkYXRlY2IgPSBjZmcudXBkYXRlO1xuICAgICAgICAgICAgbGV0IGZyb20gPSBjZmcuZnJvbTtcbiAgICAgICAgICAgIGxldCB0byA9IGNmZy50bztcbiAgICAgICAgICAgIGxldCBhZnRlciA9IGNmZy5hZnRlcjtcbiAgICAgICAgICAgIHRoaXMuc2NoZWR1bGUoKCkgPT4ge1xuICAgICAgICAgICAgICAgIGxldCByZXQgPSB1cGRhdGVjYihpIC8gdGltZXMsIGZyb20sIHRvKTtcbiAgICAgICAgICAgICAgICBpZihyZXQgIT0gdW5kZWZpbmVkICYmIGNmZy5hdHRyKVxuICAgICAgICAgICAgICAgICAgICBsYWJlbFtjZmcuYXR0cl0gPSByZXQ7XG4gICAgICAgICAgICAgICAgaSs9MTtcbiAgICAgICAgICAgICAgICBpZihpID49IHRpbWVzKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmKGFmdGVyKSBhZnRlcihmcm9tLCB0byk7XG4gICAgICAgICAgICAgICAgICAgIGRlbGV0ZSAoY2ZnIGFzIGFueSkuX3RpbWU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSwgY2ZnLmludGVydmFsLCB0aW1lcyAsIDApO1xuICAgICAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xuICAgICAgICAgICAgICAgIGlmIChhbmkubG9vcCkge1xuICAgICAgICAgICAgICAgICAgICBpZHggPSAoaWR4ICsgMSkgJSBhbmkubGlzdC5sZW5ndGg7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgaWR4ICs9IDE7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHRoaXMuc2NoZWR1bGVfYXR0cmlidXRlcyhsYWJlbCwgYW5pLCBpZHgpO1xuICAgICAgICAgICAgfSwgY2ZnLmR1cmF0aW9uICsgY2ZnLnN0YXkpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgc3RhcnQoKSB7XG4gICAgICAgIHRoaXMuc2V0dXBfZm9udHNpemUoKTtcbiAgICAgICAgdGhpcy5zZXR1cF9mb250X2NvbG9yKCk7XG4gICAgICAgIHRoaXMuc2V0dXBfbGFiZWxfYWxpZ24oKTtcbiAgICAgICAgdGhpcy5zZXR1cF9saW5lX2hlaWdodCgpO1xuICAgICAgICB0aGlzLnNldHVwX2xhYmVsX2RlY29yYXRpb24oKTtcbiAgICAgICAgdGhpcy5zZXR1cF9sYWJlbF9vdmVyZmxvdygpO1xuICAgIH1cblxuICAgIHNldHVwX2ZvbnRzaXplKCkge1xuICAgICAgICBsZXQgbGFiZWwgPSBcIlVwZGF0ZSBGb250U2l6ZS9BbmNob3JcIjtcbiAgICAgICAgdGhpcy5sYWJlbF9zaXplLnN0cmluZyA9IGxhYmVsO1xuICAgICAgICBsZXQgbGFiZWxfc2l6ZSA9IHRoaXMubGFiZWxfc2l6ZTtcbiAgICAgICAgdGhpcy5zY2hlZHVsZV9hdHRyaWJ1dGVzKHRoaXMubGFiZWxfc2l6ZSwge1xuICAgICAgICAgICAgbG9vcDogdHJ1ZSxcbiAgICAgICAgICAgIGxpc3Q6IFtcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBhdHRyOiBcImZvbnRTaXplXCIsXG4gICAgICAgICAgICAgICAgdmFsdWVzOiBbMjUsIDEwLCAzMCwgMjJdLFxuICAgICAgICAgICAgICAgIGR1cmF0aW9uOiAzLFxuICAgICAgICAgICAgICAgIHN0YXk6IDFcbiAgICAgICAgICAgIH0sIFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGZyb206IG5ldyBjYy5WZWMyKDAsIDApLFxuICAgICAgICAgICAgICAgIHRvOiBuZXcgY2MuVmVjMigxLCAxKSxcbiAgICAgICAgICAgICAgICB1cGRhdGU6IChwLCBmLCB0KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGxldCB4ID0gZi54ICogKDEgLSBwKSArIHAgKiB0Lnk7XG4gICAgICAgICAgICAgICAgICAgIGxldCB5ID0gZi55ICogKDEgLSBwKSArIHAgKiB0Lnk7XG4gICAgICAgICAgICAgICAgICAgIGxhYmVsX3NpemUubm9kZS5zZXRBbmNob3JQb2ludCh4LCB5KTtcbiAgICAgICAgICAgICAgICAgICAgbGFiZWxfc2l6ZS5zdHJpbmcgPSBcIlVwZGF0ZSBOb2RlIEFuY2hvcjogXCIgK3gudG9GaXhlZCgyKSArXCIsIFwiK3kudG9GaXhlZCgyKTtcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIGR1cmF0aW9uOiAzLFxuICAgICAgICAgICAgICAgIHN0YXk6IDEsXG4gICAgICAgICAgICAgICAgaW50ZXJ2YWw6IDAuMixcbiAgICAgICAgICAgICAgICBiZWZvcmUgOihmLCB0KT0+IHtcbiAgICAgICAgICAgICAgICAgICAgbGFiZWxfc2l6ZS5zdHJpbmcgPSBcIlVwZGF0ZSBOb2RlIEFuY2hvclwiO1xuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgYWZ0ZXI6IChmLCB0KT0+e1xuICAgICAgICAgICAgICAgICAgICBsYWJlbF9zaXplLnN0cmluZyA9IGxhYmVsO1xuICAgICAgICAgICAgICAgICAgICBsYWJlbF9zaXplLm5vZGUuc2V0QW5jaG9yUG9pbnQoMC41LCAwLjUpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1dXG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIHNldHVwX2ZvbnRfY29sb3IoKSB7XG4gICAgICAgIGxldCBsYWJlbCA9IFwiVXBkYXRlIEZvbnQgQ29sb3JcIjtcbiAgICAgICAgdGhpcy5sYWJlbF9jb2xvci5zdHJpbmcgPSBsYWJlbDtcbiAgICAgICAgbGV0IGxhYmVsX2NvbG9yID0gdGhpcy5sYWJlbF9jb2xvcjtcbiAgICAgICAgbGV0IG9sZF9jb2xvciA9IGxhYmVsX2NvbG9yLm5vZGUuY29sb3I7XG4gICAgICAgIHRoaXMuc2NoZWR1bGVfYXR0cmlidXRlcyh0aGlzLmxhYmVsX2NvbG9yLCB7XG4gICAgICAgICAgICBsb29wOiB0cnVlLFxuICAgICAgICAgICAgbGlzdDogW3tcbiAgICAgICAgICAgICAgICBmcm9tOiBuZXcgY2MuQ29sb3IoMjU1LCAwLCAwKSxcbiAgICAgICAgICAgICAgICB0bzogbmV3IGNjLkNvbG9yKDI1NSwgMjU1LCAwKSxcbiAgICAgICAgICAgICAgICB1cGRhdGU6IChwLCBmLCB0KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGxldCByID0gZi5nZXRSKCkgKiAoMSAtIHApICsgcCAqIHQuZ2V0UigpO1xuICAgICAgICAgICAgICAgICAgICBsZXQgZyA9IGYuZ2V0RygpICogKDEgLSBwKSArIHAgKiB0LmdldEcoKTtcbiAgICAgICAgICAgICAgICAgICAgbGV0IGIgPSBmLmdldEIoKSAqICgxIC0gcCkgKyBwICogdC5nZXRCKCk7XG4gICAgICAgICAgICAgICAgICAgIGxldCBjPSBuZXcgY2MuQ29sb3IociwgZywgYik7XG4gICAgICAgICAgICAgICAgICAgIGxhYmVsX2NvbG9yLm5vZGUuY29sb3IgPSBjO1xuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgZHVyYXRpb246IDMsXG4gICAgICAgICAgICAgICAgc3RheTogMSxcbiAgICAgICAgICAgICAgICBpbnRlcnZhbDogMC4xLFxuICAgICAgICAgICAgICAgIGJlZm9yZSA6KGYsIHQpPT4ge1xuICAgICAgICAgICAgICAgICAgICBsYWJlbF9jb2xvci5zdHJpbmcgPSBcIlVwZGF0ZSBOb2RlIENvbG9yXCI7XG4gICAgICAgICAgICAgICAgICAgIGxhYmVsX2NvbG9yLm5vZGUuY29sb3IgPSBvbGRfY29sb3I7XG4gICAgICAgICAgICAgICAgICAgIGxhYmVsX2NvbG9yLm5vZGUub3BhY2l0eSA9IDI1NTtcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIGFmdGVyOiAoZiwgdCk9PntcbiAgICAgICAgICAgICAgICAgICAgbGFiZWxfY29sb3Iubm9kZS5jb2xvcj0gb2xkX2NvbG9yO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sIHtcbiAgICAgICAgICAgICAgICBmcm9tOiAwLFxuICAgICAgICAgICAgICAgIHRvOiAyNTUsXG4gICAgICAgICAgICAgICAgdXBkYXRlOiAocCwgZiwgdCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBsYWJlbF9jb2xvci5ub2RlLm9wYWNpdHkgPSAoMS1wKSAqIGYgKyB0ICogcDtcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIGR1cmF0aW9uOiAzLFxuICAgICAgICAgICAgICAgIHN0YXk6IDEsXG4gICAgICAgICAgICAgICAgaW50ZXJ2YWw6IDAuMSxcbiAgICAgICAgICAgICAgICBiZWZvcmUgOihmLCB0KT0+IHtcbiAgICAgICAgICAgICAgICAgICAgbGFiZWxfY29sb3Iuc3RyaW5nID0gXCJVcGRhdGUgTm9kZSBBbHBoYVwiO1xuICAgICAgICAgICAgICAgICAgICBsYWJlbF9jb2xvci5ub2RlLm9wYWNpdHkgPSAyNTU7XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBhZnRlcjogKGYsIHQpPT57XG4gICAgICAgICAgICAgICAgICAgIGxhYmVsX2NvbG9yLm5vZGUub3BhY2l0eSA9IDI1NTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IFxuXG4gICAgICAgIF1cbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgc2V0dXBfbGFiZWxfYWxpZ24oKSB7XG5cbiAgICAgICAgbGV0IGxhYmVsID0gXCJVcGRhdGUgTGFiZWwgXFxuUGFyYW1hdGVyc1xcbkxpbmVzXCI7XG4gICAgICAgIHRoaXMubGFiZWxfYWxpZ24uc3RyaW5nID0gbGFiZWw7XG4gICAgICAgIGxldCBsYWJlbF9hbGlnbiA9IHRoaXMubGFiZWxfYWxpZ247XG5cbiAgICAgICAgdGhpcy5zY2hlZHVsZV9hdHRyaWJ1dGVzKGxhYmVsX2FsaWduLCB7XG4gICAgICAgICAgICBsb29wOnRydWUsIFxuICAgICAgICAgICAgbGlzdDogW1xuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgYXR0cjogXCJob3Jpem9udGFsQWxpZ25cIixcbiAgICAgICAgICAgICAgICAgICAgdmFsdWVzOlswLDEsMl0sXG4gICAgICAgICAgICAgICAgICAgIGR1cmF0aW9uOiAzLFxuICAgICAgICAgICAgICAgICAgICBzdGF5OiAxXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIGF0dHI6IFwidmVydGljYWxBbGlnblwiLFxuICAgICAgICAgICAgICAgICAgICB2YWx1ZXM6IFswLDEsMl0sXG4gICAgICAgICAgICAgICAgICAgIGR1cmF0aW9uOiAzLFxuICAgICAgICAgICAgICAgICAgICBzdGF5OiAxXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgXVxuICAgICAgICB9KVxuICAgIH1cblxuICAgIHNldHVwX2xpbmVfaGVpZ2h0KCkge1xuXG4gICAgICAgIGxldCBsYWJlbCA9IFwiVXBkYXRlIExhYmVsIFxcTGluZSBIZWlnaHRcXG5TcGFjZWluZyB4XCI7XG4gICAgICAgIHRoaXMubGFiZWxfbGluZWhlaWdodC5zdHJpbmcgPSBsYWJlbDtcbiAgICAgICAgbGV0IGxhYmVsX2xpbmVoZWlnaHQgPSB0aGlzLmxhYmVsX2xpbmVoZWlnaHQ7XG5cbiAgICAgICAgdGhpcy5zY2hlZHVsZV9hdHRyaWJ1dGVzKGxhYmVsX2xpbmVoZWlnaHQsIHtcbiAgICAgICAgICAgIGxvb3A6dHJ1ZSwgXG4gICAgICAgICAgICBsaXN0OiBbXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBhdHRyOiBcImxpbmVIZWlnaHRcIixcbiAgICAgICAgICAgICAgICAgICAgdmFsdWVzOlsxMCwyMCwzMF0sXG4gICAgICAgICAgICAgICAgICAgIGR1cmF0aW9uOiAzLFxuICAgICAgICAgICAgICAgICAgICBzdGF5OiAxXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIGF0dHI6IFwic3BhY2luZ1hcIixcbiAgICAgICAgICAgICAgICAgICAgZnJvbTogMCxcbiAgICAgICAgICAgICAgICAgICAgdG86IDEwLCBcbiAgICAgICAgICAgICAgICAgICAgdXBkYXRlOiAocCwgZiwgdCkgPT57XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gKDEgLSBwKSAqIGYgKyBwICogdDtcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgZHVyYXRpb246IDMsXG4gICAgICAgICAgICAgICAgICAgIHN0YXk6IDEsXG4gICAgICAgICAgICAgICAgICAgIGludGVydmFsOiAwLjEsXG4gICAgICAgICAgICAgICAgICAgIGFmdGVyOiBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsX2xpbmVoZWlnaHQuc3BhY2luZ1ggPSAwO1xuICAgICAgICAgICAgICAgICAgICB9IFxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIF1cbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgc2V0dXBfbGFiZWxfZGVjb3JhdGlvbigpIHtcbiAgICAgICAgbGV0IGxhYmVsID0gXCJVcGRhdGUgTGFiZWwgXFxMRGVjb3JhdGlvblwiO1xuICAgICAgICB0aGlzLmxhYmVsX2VmZmVjdHMuc3RyaW5nID0gbGFiZWw7XG4gICAgICAgIGxldCBsYWJlbF9lZmZlY3RzID0gdGhpcy5sYWJlbF9lZmZlY3RzO1xuICAgICAgICBsYWJlbF9lZmZlY3RzLmZvbnRTaXplID0gMjA7XG4gICAgICAgIGxhYmVsX2VmZmVjdHMuaG9yaXpvbnRhbEFsaWduID0gY2MuTGFiZWwuSG9yaXpvbnRhbEFsaWduLkxFRlQ7XG4gICAgICAgIGxldCB2YWx1ZXMgPVtdO1xuICAgICAgICBmb3IobGV0IGkgPSAwOyBpPD0gKDEgPDwgMik7IGkrKykge1xuICAgICAgICAgICAgdmFsdWVzLnB1c2goXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBlbmFibGVJdGFsaWMgOiAoKGk+PjApICYgMHgxKSA9PSAxLFxuICAgICAgICAgICAgICAgICAgICBlbmFibGVVbmRlcmxpbmUgOiAoKGk+PjEpICYgMHgxKSA9PSAxLFxuICAgICAgICAgICAgICAgICAgIC8vIGVuYWJsZUJvbGQgOiAoKGkgPj4gMikgJiAweDEpID09IDEsXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgKVxuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5zY2hlZHVsZV9hdHRyaWJ1dGVzKGxhYmVsX2VmZmVjdHMsIHtcbiAgICAgICAgICAgIGxvb3A6dHJ1ZSwgXG4gICAgICAgICAgICBsaXN0OiBbXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICB2YWx1ZXM6dmFsdWVzLFxuICAgICAgICAgICAgICAgICAgICBkdXJhdGlvbjogOCxcbiAgICAgICAgICAgICAgICAgICAgc3RheTogMSxcbiAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2s6ICh2YWx1ZSkgPT57XG4gICAgICAgICAgICAgICAgICAgICAgIC8vIGxhYmVsX2VmZmVjdHMuZW5hYmxlSXRhbGljID0gdmFsdWUuZW5hYmxlQm9sZDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsX2VmZmVjdHMuZW5hYmxlQm9sZCA9IHZhbHVlLmVuYWJsZUJvbGQ7XG4gICAgICAgICAgICAgICAgICAgICAgICBsYWJlbF9lZmZlY3RzLmVuYWJsZVVuZGVybGluZSA9IHZhbHVlLmVuYWJsZVVuZGVybGluZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCB0ZXggPSBbXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvcihsZXQgayBpbiB2YWx1ZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRleC5wdXNoKGAke2t9OiAke3ZhbHVlW2tdfWApO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWxfZWZmZWN0cy5zdHJpbmcgPSB0ZXguam9pbihcIlxcblwiKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBdXG4gICAgICAgIH0pO1xuICAgIH1cblxuXG4gICAgc2V0dXBfbGFiZWxfb3ZlcmZsb3coKSB7XG4gICAgICAgIGxldCBsYWJlbCA9IFwiVXBkYXRlIExhYmVsIFxcbk92ZXJGbG93XFxuTG9uZyBMaW5lIFRleHRcXG5cIjtcbiAgICAgICAgdGhpcy5sYWJlbF9vdmVyZmxvdy5zdHJpbmcgPSBsYWJlbDtcbiAgICAgICAgbGV0IGxhYmVsX292ZXJmbG93ID0gdGhpcy5sYWJlbF9vdmVyZmxvdztcbiAgICAgICAgbGFiZWxfb3ZlcmZsb3cuZm9udFNpemUgPSA0MDtcbiAgICAgICAgbGV0IHZhbHVlcyA9IFtcbiAgICAgICAgICAgIGNjLkxhYmVsLk92ZXJmbG93Lk5PTkUsXG4gICAgICAgICAgICBjYy5MYWJlbC5PdmVyZmxvdy5DTEFNUCxcbiAgICAgICAgICAgIGNjLkxhYmVsLk92ZXJmbG93LlJFU0laRV9IRUlHSFQsXG4gICAgICAgICAgICBjYy5MYWJlbC5PdmVyZmxvdy5TSFJJTktcbiAgICAgICAgXVxuICAgICAgICB0aGlzLnNjaGVkdWxlX2F0dHJpYnV0ZXMobGFiZWxfb3ZlcmZsb3csIHtcbiAgICAgICAgICAgIGxvb3A6dHJ1ZSwgXG4gICAgICAgICAgICBsaXN0OiBbXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBhdHRyOlwib3ZlcmZsb3dcIixcbiAgICAgICAgICAgICAgICAgICAgdmFsdWVzOnZhbHVlcyxcbiAgICAgICAgICAgICAgICAgICAgZHVyYXRpb246IDQsXG4gICAgICAgICAgICAgICAgICAgIHN0YXk6IDEsXG4gICAgICAgICAgICAgICAgICAgIGNhbGxiYWNrOiAodikgPT57XG4gICAgICAgICAgICAgICAgICAgICAgICBsYWJlbF9vdmVyZmxvdy5zdHJpbmcgPSBsYWJlbCArIHY7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgXVxuICAgICAgICB9KTtcbiAgICB9XG4gICAgLy8gdXBkYXRlIChkdCkge31cbn1cbiJdfQ==