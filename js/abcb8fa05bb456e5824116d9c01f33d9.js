;;;
/*!
 * Bootstrap v3.3.5 (http://getbootstrap.com)
 * Copyright 2011-2015 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 */
/*!
 * Generated using the Bootstrap Customizer (http://getbootstrap.com/customize/?id=b8480475c6c7b955a207)
 * Config saved to config.json and https://gist.github.com/b8480475c6c7b955a207
 */
if ("undefined" == typeof jQuery)
	throw new Error("Bootstrap's JavaScript requires jQuery"); + function(t) {
	"use strict";
	var e = t.fn.jquery.split(" ")[0].split(".");
	if (e[0] < 2 && e[1] < 9 || 1 == e[0] && 9 == e[1] && e[2] < 1)
		throw new Error("Bootstrap's JavaScript requires jQuery version 1.9.1 or higher")
}(jQuery), + function(t) {
	"use strict";

	function e(e) {
		return this.each(function() {
			var i = t(this),
				n = i.data("bs.alert");
			n || i.data("bs.alert", n = new o(this)), "string" == typeof e && n[e].call(i)
		})
	}
	var i = '[data-dismiss="alert"]',
		o = function(e) {
			t(e).on("click", i, this.close)
		};
	o.VERSION = "3.3.5", o.TRANSITION_DURATION = 150, o.prototype.close = function(e) {
		function i() {
			a.detach().trigger("closed.bs.alert").remove()
		}
		var n = t(this),
			s = n.attr("data-target");
		s || (s = n.attr("href"), s = s && s.replace(/.*(?=#[^\s]*$)/, ""));
		var a = t(s);
		e && e.preventDefault(), a.length || (a = n.closest(".alert")), a.trigger(e = t.Event("close.bs.alert")), e.isDefaultPrevented() || (a.removeClass("in"), t.support.transition && a.hasClass("fade") ? a.one("bsTransitionEnd", i).emulateTransitionEnd(o.TRANSITION_DURATION) : i())
	};
	var n = t.fn.alert;
	t.fn.alert = e, t.fn.alert.Constructor = o, t.fn.alert.noConflict = function() {
		return t.fn.alert = n, this
	}, t(document).on("click.bs.alert.data-api", i, o.prototype.close)
}(jQuery), + function(t) {
	"use strict";

	function e(e) {
		return this.each(function() {
			var o = t(this),
				n = o.data("bs.button"),
				s = "object" == typeof e && e;
			n || o.data("bs.button", n = new i(this, s)), "toggle" == e ? n.toggle() : e && n.setState(e)
		})
	}
	var i = function(e, o) {
		this.$element = t(e), this.options = t.extend({}, i.DEFAULTS, o), this.isLoading = !1
	};
	i.VERSION = "3.3.5", i.DEFAULTS = {
		loadingText: "loading..."
	}, i.prototype.setState = function(e) {
		var i = "disabled",
			o = this.$element,
			n = o.is("input") ? "val" : "html",
			s = o.data();
		e += "Text", null == s.resetText && o.data("resetText", o[n]()), setTimeout(t.proxy(function() {
			o[n](null == s[e] ? this.options[e] : s[e]), "loadingText" == e ? (this.isLoading = !0, o.addClass(i).attr(i, i)) : this.isLoading && (this.isLoading = !1, o.removeClass(i).removeAttr(i))
		}, this), 0)
	}, i.prototype.toggle = function() {
		var t = !0,
			e = this.$element.closest('[data-toggle="buttons"]');
		if (e.length) {
			var i = this.$element.find("input");
			"radio" == i.prop("type") ? (i.prop("checked") && (t = !1), e.find(".active").removeClass("active"), this.$element.addClass("active")) : "checkbox" == i.prop("type") && (i.prop("checked") !== this.$element.hasClass("active") && (t = !1), this.$element.toggleClass("active")), i.prop("checked", this.$element.hasClass("active")), t && i.trigger("change")
		} else
			this.$element.attr("aria-pressed", !this.$element.hasClass("active")), this.$element.toggleClass("active")
	};
	var o = t.fn.button;
	t.fn.button = e, t.fn.button.Constructor = i, t.fn.button.noConflict = function() {
		return t.fn.button = o, this
	}, t(document).on("click.bs.button.data-api", '[data-toggle^="button"]', function(i) {
		var o = t(i.target);
		o.hasClass("btn") || (o = o.closest(".btn")), e.call(o, "toggle"), t(i.target).is('input[type="radio"]') || t(i.target).is('input[type="checkbox"]') || i.preventDefault()
	}).on("focus.bs.button.data-api blur.bs.button.data-api", '[data-toggle^="button"]', function(e) {
		t(e.target).closest(".btn").toggleClass("focus", /^focus(in)?$/.test(e.type))
	})
}(jQuery), + function(t) {
	"use strict";

	function e(e) {
		return this.each(function() {
			var o = t(this),
				n = o.data("bs.carousel"),
				s = t.extend({}, i.DEFAULTS, o.data(), "object" == typeof e && e),
				a = "string" == typeof e ? e : s.slide;
			n || o.data("bs.carousel", n = new i(this, s)), "number" == typeof e ? n.to(e) : a ? n[a]() : s.interval && n.pause().cycle()
		})
	}
	var i = function(e, i) {
		this.$element = t(e), this.$indicators = this.$element.find(".carousel-indicators"), this.options = i, this.paused = null, this.sliding = null, this.interval = null, this.$active = null, this.$items = null, this.options.keyboard && this.$element.on("keydown.bs.carousel", t.proxy(this.keydown, this)), "hover" == this.options.pause && !("ontouchstart" in document.documentElement) && this.$element.on("mouseenter.bs.carousel", t.proxy(this.pause, this)).on("mouseleave.bs.carousel", t.proxy(this.cycle, this))
	};
	i.VERSION = "3.3.5", i.TRANSITION_DURATION = 600, i.DEFAULTS = {
		interval: 5e3,
		pause: "hover",
		wrap: !0,
		keyboard: !0
	}, i.prototype.keydown = function(t) {
		if (!/input|textarea/i.test(t.target.tagName)) {
			switch (t.which) {
				case 37:
					this.prev();
					break;
				case 39:
					this.next();
					break;
				default:
					return
			}
			t.preventDefault()
		}
	}, i.prototype.cycle = function(e) {
		return e || (this.paused = !1), this.interval && clearInterval(this.interval), this.options.interval && !this.paused && (this.interval = setInterval(t.proxy(this.next, this), this.options.interval)), this
	}, i.prototype.getItemIndex = function(t) {
		return this.$items = t.parent().children(".item"), this.$items.index(t || this.$active)
	}, i.prototype.getItemForDirection = function(t, e) {
		var i = this.getItemIndex(e),
			o = "prev" == t && 0 === i || "next" == t && i == this.$items.length - 1;
		if (o && !this.options.wrap)
			return e;
		var n = "prev" == t ? -1 : 1,
			s = (i + n) % this.$items.length;
		return this.$items.eq(s)
	}, i.prototype.to = function(t) {
		var e = this,
			i = this.getItemIndex(this.$active = this.$element.find(".item.active"));
		return t > this.$items.length - 1 || 0 > t ? void 0 : this.sliding ? this.$element.one("slid.bs.carousel", function() {
			e.to(t)
		}) : i == t ? this.pause().cycle() : this.slide(t > i ? "next" : "prev", this.$items.eq(t))
	}, i.prototype.pause = function(e) {
		return e || (this.paused = !0), this.$element.find(".next, .prev").length && t.support.transition && (this.$element.trigger(t.support.transition.end), this.cycle(!0)), this.interval = clearInterval(this.interval), this
	}, i.prototype.next = function() {
		return this.sliding ? void 0 : this.slide("next")
	}, i.prototype.prev = function() {
		return this.sliding ? void 0 : this.slide("prev")
	}, i.prototype.slide = function(e, o) {
		var n = this.$element.find(".item.active"),
			s = o || this.getItemForDirection(e, n),
			a = this.interval,
			r = "next" == e ? "left" : "right",
			l = this;
		if (s.hasClass("active"))
			return this.sliding = !1;
		var h = s[0],
			d = t.Event("slide.bs.carousel", {
				relatedTarget: h,
				direction: r
			});
		if (this.$element.trigger(d), !d.isDefaultPrevented()) {
			if (this.sliding = !0, a && this.pause(), this.$indicators.length) {
				this.$indicators.find(".active").removeClass("active");
				var p = t(this.$indicators.children()[this.getItemIndex(s)]);
				p && p.addClass("active")
			}
			var c = t.Event("slid.bs.carousel", {
				relatedTarget: h,
				direction: r
			});
			return t.support.transition && this.$element.hasClass("slide") ? (s.addClass(e), s[0].offsetWidth, n.addClass(r), s.addClass(r), n.one("bsTransitionEnd", function() {
				s.removeClass([e, r].join(" ")).addClass("active"), n.removeClass(["active", r].join(" ")), l.sliding = !1, setTimeout(function() {
					l.$element.trigger(c)
				}, 0)
			}).emulateTransitionEnd(i.TRANSITION_DURATION)) : (n.removeClass("active"), s.addClass("active"), this.sliding = !1, this.$element.trigger(c)), a && this.cycle(), this
		}
	};
	var o = t.fn.carousel;
	t.fn.carousel = e, t.fn.carousel.Constructor = i, t.fn.carousel.noConflict = function() {
		return t.fn.carousel = o, this
	};
	var n = function(i) {
		var o, n = t(this),
			s = t(n.attr("data-target") || (o = n.attr("href")) && o.replace(/.*(?=#[^\s]+$)/, ""));
		if (s.hasClass("carousel")) {
			var a = t.extend({}, s.data(), n.data()),
				r = n.attr("data-slide-to");
			r && (a.interval = !1), e.call(s, a), r && s.data("bs.carousel").to(r), i.preventDefault()
		}
	};
	t(document).on("click.bs.carousel.data-api", "[data-slide]", n).on("click.bs.carousel.data-api", "[data-slide-to]", n), t(window).on("load", function() {
		t('[data-ride="carousel"]').each(function() {
			var i = t(this);
			e.call(i, i.data())
		})
	})
}(jQuery), + function(t) {
	"use strict";

	function e(e) {
		var i = e.attr("data-target");
		i || (i = e.attr("href"), i = i && /#[A-Za-z]/.test(i) && i.replace(/.*(?=#[^\s]*$)/, ""));
		var o = i && t(i);
		return o && o.length ? o : e.parent()
	}

	function i(i) {
		i && 3 === i.which || (t(n).remove(), t(s).each(function() {
			var o = t(this),
				n = e(o),
				s = {
					relatedTarget: this
				};
			n.hasClass("open") && (i && "click" == i.type && /input|textarea/i.test(i.target.tagName) && t.contains(n[0], i.target) || (n.trigger(i = t.Event("hide.bs.dropdown", s)), i.isDefaultPrevented() || (o.attr("aria-expanded", "false"), n.removeClass("open").trigger("hidden.bs.dropdown", s))))
		}))
	}

	function o(e) {
		return this.each(function() {
			var i = t(this),
				o = i.data("bs.dropdown");
			o || i.data("bs.dropdown", o = new a(this)), "string" == typeof e && o[e].call(i)
		})
	}
	var n = ".dropdown-backdrop",
		s = '[data-toggle="dropdown"]',
		a = function(e) {
			t(e).on("click.bs.dropdown", this.toggle)
		};
	a.VERSION = "3.3.5", a.prototype.toggle = function(o) {
		var n = t(this);
		if (!n.is(".disabled, :disabled")) {
			var s = e(n),
				a = s.hasClass("open");
			if (i(), !a) {
				"ontouchstart" in document.documentElement && !s.closest(".navbar-nav").length && t(document.createElement("div")).addClass("dropdown-backdrop").insertAfter(t(this)).on("click", i);
				var r = {
					relatedTarget: this
				};
				if (s.trigger(o = t.Event("show.bs.dropdown", r)), o.isDefaultPrevented())
					return;
				n.trigger("focus").attr("aria-expanded", "true"), s.toggleClass("open").trigger("shown.bs.dropdown", r)
			}
			return !1
		}
	}, a.prototype.keydown = function(i) {
		if (/(38|40|27|32)/.test(i.which) && !/input|textarea/i.test(i.target.tagName)) {
			var o = t(this);
			if (i.preventDefault(), i.stopPropagation(), !o.is(".disabled, :disabled")) {
				var n = e(o),
					a = n.hasClass("open");
				if (!a && 27 != i.which || a && 27 == i.which)
					return 27 == i.which && n.find(s).trigger("focus"), o.trigger("click");
				var r = " li:not(.disabled):visible a",
					l = n.find(".dropdown-menu" + r);
				if (l.length) {
					var h = l.index(i.target);
					38 == i.which && h > 0 && h--, 40 == i.which && h < l.length - 1 && h++, ~h || (h = 0), l.eq(h).trigger("focus")
				}
			}
		}
	};
	var r = t.fn.dropdown;
	t.fn.dropdown = o, t.fn.dropdown.Constructor = a, t.fn.dropdown.noConflict = function() {
		return t.fn.dropdown = r, this
	}, t(document).on("click.bs.dropdown.data-api", i).on("click.bs.dropdown.data-api", ".dropdown form", function(t) {
		t.stopPropagation()
	}).on("click.bs.dropdown.data-api", s, a.prototype.toggle).on("keydown.bs.dropdown.data-api", s, a.prototype.keydown).on("keydown.bs.dropdown.data-api", ".dropdown-menu", a.prototype.keydown)
}(jQuery), + function(t) {
	"use strict";

	function e(e, o) {
		return this.each(function() {
			var n = t(this),
				s = n.data("bs.modal"),
				a = t.extend({}, i.DEFAULTS, n.data(), "object" == typeof e && e);
			s || n.data("bs.modal", s = new i(this, a)), "string" == typeof e ? s[e](o) : a.show && s.show(o)
		})
	}
	var i = function(e, i) {
		this.options = i, this.$body = t(document.body), this.$element = t(e), this.$dialog = this.$element.find(".modal-dialog"), this.$backdrop = null, this.isShown = null, this.originalBodyPad = null, this.scrollbarWidth = 0, this.ignoreBackdropClick = !1, this.options.remote && this.$element.find(".modal-content").load(this.options.remote, t.proxy(function() {
			this.$element.trigger("loaded.bs.modal")
		}, this))
	};
	i.VERSION = "3.3.5", i.TRANSITION_DURATION = 300, i.BACKDROP_TRANSITION_DURATION = 150, i.DEFAULTS = {
		backdrop: !0,
		keyboard: !0,
		show: !0
	}, i.prototype.toggle = function(t) {
		return this.isShown ? this.hide() : this.show(t)
	}, i.prototype.show = function(e) {
		var o = this,
			n = t.Event("show.bs.modal", {
				relatedTarget: e
			});
		this.$element.trigger(n), this.isShown || n.isDefaultPrevented() || (this.isShown = !0, this.checkScrollbar(), this.setScrollbar(), this.$body.addClass("modal-open"), this.escape(), this.resize(), this.$element.on("click.dismiss.bs.modal", '[data-dismiss="modal"]', t.proxy(this.hide, this)), this.$dialog.on("mousedown.dismiss.bs.modal", function() {
			o.$element.one("mouseup.dismiss.bs.modal", function(e) {
				t(e.target).is(o.$element) && (o.ignoreBackdropClick = !0)
			})
		}), this.backdrop(function() {
			var n = t.support.transition && o.$element.hasClass("fade");
			o.$element.parent().length || o.$element.appendTo(o.$body), o.$element.show().scrollTop(0), o.adjustDialog(), n && o.$element[0].offsetWidth, o.$element.addClass("in"), o.enforceFocus();
			var s = t.Event("shown.bs.modal", {
				relatedTarget: e
			});
			n ? o.$dialog.one("bsTransitionEnd", function() {
				o.$element.trigger("focus").trigger(s)
			}).emulateTransitionEnd(i.TRANSITION_DURATION) : o.$element.trigger("focus").trigger(s)
		}))
	}, i.prototype.hide = function(e) {
		e && e.preventDefault(), e = t.Event("hide.bs.modal"), this.$element.trigger(e), this.isShown && !e.isDefaultPrevented() && (this.isShown = !1, this.escape(), this.resize(), t(document).off("focusin.bs.modal"), this.$element.removeClass("in").off("click.dismiss.bs.modal").off("mouseup.dismiss.bs.modal"), this.$dialog.off("mousedown.dismiss.bs.modal"), t.support.transition && this.$element.hasClass("fade") ? this.$element.one("bsTransitionEnd", t.proxy(this.hideModal, this)).emulateTransitionEnd(i.TRANSITION_DURATION) : this.hideModal())
	}, i.prototype.enforceFocus = function() {
		t(document).off("focusin.bs.modal").on("focusin.bs.modal", t.proxy(function(t) {
			this.$element[0] === t.target || this.$element.has(t.target).length || this.$element.trigger("focus")
		}, this))
	}, i.prototype.escape = function() {
		this.isShown && this.options.keyboard ? this.$element.on("keydown.dismiss.bs.modal", t.proxy(function(t) {
			27 == t.which && this.hide()
		}, this)) : this.isShown || this.$element.off("keydown.dismiss.bs.modal")
	}, i.prototype.resize = function() {
		this.isShown ? t(window).on("resize.bs.modal", t.proxy(this.handleUpdate, this)) : t(window).off("resize.bs.modal")
	}, i.prototype.hideModal = function() {
		var t = this;
		this.$element.hide(), this.backdrop(function() {
			t.$body.removeClass("modal-open"), t.resetAdjustments(), t.resetScrollbar(), t.$element.trigger("hidden.bs.modal")
		})
	}, i.prototype.removeBackdrop = function() {
		this.$backdrop && this.$backdrop.remove(), this.$backdrop = null
	}, i.prototype.backdrop = function(e) {
		var o = this,
			n = this.$element.hasClass("fade") ? "fade" : "";
		if (this.isShown && this.options.backdrop) {
			var s = t.support.transition && n;
			if (this.$backdrop = t(document.createElement("div")).addClass("modal-backdrop " + n).appendTo(this.$body), this.$element.on("click.dismiss.bs.modal", t.proxy(function(t) {
					return this.ignoreBackdropClick ? void(this.ignoreBackdropClick = !1) : void(t.target === t.currentTarget && ("static" == this.options.backdrop ? this.$element[0].focus() : this.hide()))
				}, this)), s && this.$backdrop[0].offsetWidth, this.$backdrop.addClass("in"), !e)
				return;
			s ? this.$backdrop.one("bsTransitionEnd", e).emulateTransitionEnd(i.BACKDROP_TRANSITION_DURATION) : e()
		} else if (!this.isShown && this.$backdrop) {
			this.$backdrop.removeClass("in");
			var a = function() {
				o.removeBackdrop(), e && e()
			};
			t.support.transition && this.$element.hasClass("fade") ? this.$backdrop.one("bsTransitionEnd", a).emulateTransitionEnd(i.BACKDROP_TRANSITION_DURATION) : a()
		} else
			e && e()
	}, i.prototype.handleUpdate = function() {
		this.adjustDialog()
	}, i.prototype.adjustDialog = function() {
		var t = this.$element[0].scrollHeight > document.documentElement.clientHeight;
		this.$element.css({
			paddingLeft: !this.bodyIsOverflowing && t ? this.scrollbarWidth : "",
			paddingRight: this.bodyIsOverflowing && !t ? this.scrollbarWidth : ""
		})
	}, i.prototype.resetAdjustments = function() {
		this.$element.css({
			paddingLeft: "",
			paddingRight: ""
		})
	}, i.prototype.checkScrollbar = function() {
		var t = window.innerWidth;
		if (!t) {
			var e = document.documentElement.getBoundingClientRect();
			t = e.right - Math.abs(e.left)
		}
		this.bodyIsOverflowing = document.body.clientWidth < t, this.scrollbarWidth = this.measureScrollbar()
	}, i.prototype.setScrollbar = function() {
		var t = parseInt(this.$body.css("padding-right") || 0, 10);
		this.originalBodyPad = document.body.style.paddingRight || "", this.bodyIsOverflowing && this.$body.css("padding-right", t + this.scrollbarWidth)
	}, i.prototype.resetScrollbar = function() {
		this.$body.css("padding-right", this.originalBodyPad)
	}, i.prototype.measureScrollbar = function() {
		var t = document.createElement("div");
		t.className = "modal-scrollbar-measure", this.$body.append(t);
		var e = t.offsetWidth - t.clientWidth;
		return this.$body[0].removeChild(t), e
	};
	var o = t.fn.modal;
	t.fn.modal = e, t.fn.modal.Constructor = i, t.fn.modal.noConflict = function() {
		return t.fn.modal = o, this
	}, t(document).on("click.bs.modal.data-api", '[data-toggle="modal"]', function(i) {
		var o = t(this),
			n = o.attr("href"),
			s = t(o.attr("data-target") || n && n.replace(/.*(?=#[^\s]+$)/, "")),
			a = s.data("bs.modal") ? "toggle" : t.extend({
				remote: !/#/.test(n) && n
			}, s.data(), o.data());
		o.is("a") && i.preventDefault(), s.one("show.bs.modal", function(t) {
			t.isDefaultPrevented() || s.one("hidden.bs.modal", function() {
				o.is(":visible") && o.trigger("focus")
			})
		}), e.call(s, a, this)
	})
}(jQuery), + function(t) {
	"use strict";

	function e(e) {
		return this.each(function() {
			var o = t(this),
				n = o.data("bs.tooltip"),
				s = "object" == typeof e && e;
			(n || !/destroy|hide/.test(e)) && (n || o.data("bs.tooltip", n = new i(this, s)), "string" == typeof e && n[e]())
		})
	}
	var i = function(t, e) {
		this.type = null, this.options = null, this.enabled = null, this.timeout = null, this.hoverState = null, this.$element = null, this.inState = null, this.init("tooltip", t, e)
	};
	i.VERSION = "3.3.5", i.TRANSITION_DURATION = 150, i.DEFAULTS = {
		animation: !0,
		placement: "top",
		selector: !1,
		template: '<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',
		trigger: "hover focus",
		title: "",
		delay: 0,
		html: !1,
		container: !1,
		viewport: {
			selector: "body",
			padding: 0
		}
	}, i.prototype.init = function(e, i, o) {
		if (this.enabled = !0, this.type = e, this.$element = t(i), this.options = this.getOptions(o), this.$viewport = this.options.viewport && t(t.isFunction(this.options.viewport) ? this.options.viewport.call(this, this.$element) : this.options.viewport.selector || this.options.viewport), this.inState = {
				click: !1,
				hover: !1,
				focus: !1
			}, this.$element[0] instanceof document.constructor && !this.options.selector)
			throw new Error("`selector` option must be specified when initializing " + this.type + " on the window.document object!");
		for (var n = this.options.trigger.split(" "), s = n.length; s--;) {
			var a = n[s];
			if ("click" == a)
				this.$element.on("click." + this.type, this.options.selector, t.proxy(this.toggle, this));
			else if ("manual" != a) {
				var r = "hover" == a ? "mouseenter" : "focusin",
					l = "hover" == a ? "mouseleave" : "focusout";
				this.$element.on(r + "." + this.type, this.options.selector, t.proxy(this.enter, this)), this.$element.on(l + "." + this.type, this.options.selector, t.proxy(this.leave, this))
			}
		}
		this.options.selector ? this._options = t.extend({}, this.options, {
			trigger: "manual",
			selector: ""
		}) : this.fixTitle()
	}, i.prototype.getDefaults = function() {
		return i.DEFAULTS
	}, i.prototype.getOptions = function(e) {
		return e = t.extend({}, this.getDefaults(), this.$element.data(), e), e.delay && "number" == typeof e.delay && (e.delay = {
			show: e.delay,
			hide: e.delay
		}), e
	}, i.prototype.getDelegateOptions = function() {
		var e = {},
			i = this.getDefaults();
		return this._options && t.each(this._options, function(t, o) {
			i[t] != o && (e[t] = o)
		}), e
	}, i.prototype.enter = function(e) {
		var i = e instanceof this.constructor ? e : t(e.currentTarget).data("bs." + this.type);
		return i || (i = new this.constructor(e.currentTarget, this.getDelegateOptions()), t(e.currentTarget).data("bs." + this.type, i)), e instanceof t.Event && (i.inState["focusin" == e.type ? "focus" : "hover"] = !0), i.tip().hasClass("in") || "in" == i.hoverState ? void(i.hoverState = "in") : (clearTimeout(i.timeout), i.hoverState = "in", i.options.delay && i.options.delay.show ? void(i.timeout = setTimeout(function() {
			"in" == i.hoverState && i.show()
		}, i.options.delay.show)) : i.show())
	}, i.prototype.isInStateTrue = function() {
		for (var t in this.inState)
			if (this.inState[t])
				return !0;
		return !1
	}, i.prototype.leave = function(e) {
		var i = e instanceof this.constructor ? e : t(e.currentTarget).data("bs." + this.type);
		return i || (i = new this.constructor(e.currentTarget, this.getDelegateOptions()), t(e.currentTarget).data("bs." + this.type, i)), e instanceof t.Event && (i.inState["focusout" == e.type ? "focus" : "hover"] = !1), i.isInStateTrue() ? void 0 : (clearTimeout(i.timeout), i.hoverState = "out", i.options.delay && i.options.delay.hide ? void(i.timeout = setTimeout(function() {
			"out" == i.hoverState && i.hide()
		}, i.options.delay.hide)) : i.hide())
	}, i.prototype.show = function() {
		var e = t.Event("show.bs." + this.type);
		if (this.hasContent() && this.enabled) {
			this.$element.trigger(e);
			var o = t.contains(this.$element[0].ownerDocument.documentElement, this.$element[0]);
			if (e.isDefaultPrevented() || !o)
				return;
			var n = this,
				s = this.tip(),
				a = this.getUID(this.type);
			this.setContent(), s.attr("id", a), this.$element.attr("aria-describedby", a), this.options.animation && s.addClass("fade");
			var r = "function" == typeof this.options.placement ? this.options.placement.call(this, s[0], this.$element[0]) : this.options.placement,
				l = /\s?auto?\s?/i,
				h = l.test(r);
			h && (r = r.replace(l, "") || "top"), s.detach().css({
				top: 0,
				left: 0,
				display: "block"
			}).addClass(r).data("bs." + this.type, this), this.options.container ? s.appendTo(this.options.container) : s.insertAfter(this.$element), this.$element.trigger("inserted.bs." + this.type);
			var d = this.getPosition(),
				p = s[0].offsetWidth,
				c = s[0].offsetHeight;
			if (h) {
				var f = r,
					u = this.getPosition(this.$viewport);
				r = "bottom" == r && d.bottom + c > u.bottom ? "top" : "top" == r && d.top - c < u.top ? "bottom" : "right" == r && d.right + p > u.width ? "left" : "left" == r && d.left - p < u.left ? "right" : r, s.removeClass(f).addClass(r)
			}
			var g = this.getCalculatedOffset(r, d, p, c);
			this.applyPlacement(g, r);
			var m = function() {
				var t = n.hoverState;
				n.$element.trigger("shown.bs." + n.type), n.hoverState = null, "out" == t && n.leave(n)
			};
			t.support.transition && this.$tip.hasClass("fade") ? s.one("bsTransitionEnd", m).emulateTransitionEnd(i.TRANSITION_DURATION) : m()
		}
	}, i.prototype.applyPlacement = function(e, i) {
		var o = this.tip(),
			n = o[0].offsetWidth,
			s = o[0].offsetHeight,
			a = parseInt(o.css("margin-top"), 10),
			r = parseInt(o.css("margin-left"), 10);
		isNaN(a) && (a = 0), isNaN(r) && (r = 0), e.top += a, e.left += r, t.offset.setOffset(o[0], t.extend({
			using: function(t) {
				o.css({
					top: Math.round(t.top),
					left: Math.round(t.left)
				})
			}
		}, e), 0), o.addClass("in");
		var l = o[0].offsetWidth,
			h = o[0].offsetHeight;
		"top" == i && h != s && (e.top = e.top + s - h);
		var d = this.getViewportAdjustedDelta(i, e, l, h);
		d.left ? e.left += d.left : e.top += d.top;
		var p = /top|bottom/.test(i),
			c = p ? 2 * d.left - n + l : 2 * d.top - s + h,
			f = p ? "offsetWidth" : "offsetHeight";
		o.offset(e), this.replaceArrow(c, o[0][f], p)
	}, i.prototype.replaceArrow = function(t, e, i) {
		this.arrow().css(i ? "left" : "top", 50 * (1 - t / e) + "%").css(i ? "top" : "left", "")
	}, i.prototype.setContent = function() {
		var t = this.tip(),
			e = this.getTitle();
		t.find(".tooltip-inner")[this.options.html ? "html" : "text"](e), t.removeClass("fade in top bottom left right")
	}, i.prototype.hide = function(e) {
		function o() {
			"in" != n.hoverState && s.detach(), n.$element.removeAttr("aria-describedby").trigger("hidden.bs." + n.type), e && e()
		}
		var n = this,
			s = t(this.$tip),
			a = t.Event("hide.bs." + this.type);
		return this.$element.trigger(a), a.isDefaultPrevented() ? void 0 : (s.removeClass("in"), t.support.transition && s.hasClass("fade") ? s.one("bsTransitionEnd", o).emulateTransitionEnd(i.TRANSITION_DURATION) : o(), this.hoverState = null, this)
	}, i.prototype.fixTitle = function() {
		var t = this.$element;
		(t.attr("title") || "string" != typeof t.attr("data-original-title")) && t.attr("data-original-title", t.attr("title") || "").attr("title", "")
	}, i.prototype.hasContent = function() {
		return this.getTitle()
	}, i.prototype.getPosition = function(e) {
		e = e || this.$element;
		var i = e[0],
			o = "BODY" == i.tagName,
			n = i.getBoundingClientRect();
		null == n.width && (n = t.extend({}, n, {
			width: n.right - n.left,
			height: n.bottom - n.top
		}));
		var s = o ? {
				top: 0,
				left: 0
			} : e.offset(),
			a = {
				scroll: o ? document.documentElement.scrollTop || document.body.scrollTop : e.scrollTop()
			},
			r = o ? {
				width: t(window).width(),
				height: t(window).height()
			} : null;
		return t.extend({}, n, a, r, s)
	}, i.prototype.getCalculatedOffset = function(t, e, i, o) {
		return "bottom" == t ? {
			top: e.top + e.height,
			left: e.left + e.width / 2 - i / 2
		} : "top" == t ? {
			top: e.top - o,
			left: e.left + e.width / 2 - i / 2
		} : "left" == t ? {
			top: e.top + e.height / 2 - o / 2,
			left: e.left - i
		} : {
			top: e.top + e.height / 2 - o / 2,
			left: e.left + e.width
		}
	}, i.prototype.getViewportAdjustedDelta = function(t, e, i, o) {
		var n = {
			top: 0,
			left: 0
		};
		if (!this.$viewport)
			return n;
		var s = this.options.viewport && this.options.viewport.padding || 0,
			a = this.getPosition(this.$viewport);
		if (/right|left/.test(t)) {
			var r = e.top - s - a.scroll,
				l = e.top + s - a.scroll + o;
			r < a.top ? n.top = a.top - r : l > a.top + a.height && (n.top = a.top + a.height - l)
		} else {
			var h = e.left - s,
				d = e.left + s + i;
			h < a.left ? n.left = a.left - h : d > a.right && (n.left = a.left + a.width - d)
		}
		return n
	}, i.prototype.getTitle = function() {
		var t, e = this.$element,
			i = this.options;
		return t = e.attr("data-original-title") || ("function" == typeof i.title ? i.title.call(e[0]) : i.title)
	}, i.prototype.getUID = function(t) {
		do
			t += ~~(1e6 * Math.random()); while (document.getElementById(t));
		return t
	}, i.prototype.tip = function() {
		if (!this.$tip && (this.$tip = t(this.options.template), 1 != this.$tip.length))
			throw new Error(this.type + " `template` option must consist of exactly 1 top-level element!");
		return this.$tip
	}, i.prototype.arrow = function() {
		return this.$arrow = this.$arrow || this.tip().find(".tooltip-arrow")
	}, i.prototype.enable = function() {
		this.enabled = !0
	}, i.prototype.disable = function() {
		this.enabled = !1
	}, i.prototype.toggleEnabled = function() {
		this.enabled = !this.enabled
	}, i.prototype.toggle = function(e) {
		var i = this;
		e && (i = t(e.currentTarget).data("bs." + this.type), i || (i = new this.constructor(e.currentTarget, this.getDelegateOptions()), t(e.currentTarget).data("bs." + this.type, i))), e ? (i.inState.click = !i.inState.click, i.isInStateTrue() ? i.enter(i) : i.leave(i)) : i.tip().hasClass("in") ? i.leave(i) : i.enter(i)
	}, i.prototype.destroy = function() {
		var t = this;
		clearTimeout(this.timeout), this.hide(function() {
			t.$element.off("." + t.type).removeData("bs." + t.type), t.$tip && t.$tip.detach(), t.$tip = null, t.$arrow = null, t.$viewport = null
		})
	};
	var o = t.fn.tooltip;
	t.fn.tooltip = e, t.fn.tooltip.Constructor = i, t.fn.tooltip.noConflict = function() {
		return t.fn.tooltip = o, this
	}
}(jQuery), + function(t) {
	"use strict";

	function e(e) {
		return this.each(function() {
			var o = t(this),
				n = o.data("bs.popover"),
				s = "object" == typeof e && e;
			(n || !/destroy|hide/.test(e)) && (n || o.data("bs.popover", n = new i(this, s)), "string" == typeof e && n[e]())
		})
	}
	var i = function(t, e) {
		this.init("popover", t, e)
	};
	if (!t.fn.tooltip)
		throw new Error("Popover requires tooltip.js");
	i.VERSION = "3.3.5", i.DEFAULTS = t.extend({}, t.fn.tooltip.Constructor.DEFAULTS, {
		placement: "right",
		trigger: "click",
		content: "",
		template: '<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-title"></h3><div class="popover-content"></div></div>'
	}), i.prototype = t.extend({}, t.fn.tooltip.Constructor.prototype), i.prototype.constructor = i, i.prototype.getDefaults = function() {
		return i.DEFAULTS
	}, i.prototype.setContent = function() {
		var t = this.tip(),
			e = this.getTitle(),
			i = this.getContent();
		t.find(".popover-title")[this.options.html ? "html" : "text"](e), t.find(".popover-content").children().detach().end()[this.options.html ? "string" == typeof i ? "html" : "append" : "text"](i), t.removeClass("fade top bottom left right in"), t.find(".popover-title").html() || t.find(".popover-title").hide()
	}, i.prototype.hasContent = function() {
		return this.getTitle() || this.getContent()
	}, i.prototype.getContent = function() {
		var t = this.$element,
			e = this.options;
		return t.attr("data-content") || ("function" == typeof e.content ? e.content.call(t[0]) : e.content)
	}, i.prototype.arrow = function() {
		return this.$arrow = this.$arrow || this.tip().find(".arrow")
	};
	var o = t.fn.popover;
	t.fn.popover = e, t.fn.popover.Constructor = i, t.fn.popover.noConflict = function() {
		return t.fn.popover = o, this
	}
}(jQuery), + function(t) {
	"use strict";

	function e(e) {
		return this.each(function() {
			var o = t(this),
				n = o.data("bs.tab");
			n || o.data("bs.tab", n = new i(this)), "string" == typeof e && n[e]()
		})
	}
	var i = function(e) {
		this.element = t(e)
	};
	i.VERSION = "3.3.5", i.TRANSITION_DURATION = 150, i.prototype.show = function() {
		var e = this.element,
			i = e.closest("ul:not(.dropdown-menu)"),
			o = e.data("target");
		if (o || (o = e.attr("href"), o = o && o.replace(/.*(?=#[^\s]*$)/, "")), !e.parent("li").hasClass("active")) {
			var n = i.find(".active:last a"),
				s = t.Event("hide.bs.tab", {
					relatedTarget: e[0]
				}),
				a = t.Event("show.bs.tab", {
					relatedTarget: n[0]
				});
			if (n.trigger(s), e.trigger(a), !a.isDefaultPrevented() && !s.isDefaultPrevented()) {
				var r = t(o);
				this.activate(e.closest("li"), i), this.activate(r, r.parent(), function() {
					n.trigger({
						type: "hidden.bs.tab",
						relatedTarget: e[0]
					}), e.trigger({
						type: "shown.bs.tab",
						relatedTarget: n[0]
					})
				})
			}
		}
	}, i.prototype.activate = function(e, o, n) {
		function s() {
			a.removeClass("active").find("> .dropdown-menu > .active").removeClass("active").end().find('[data-toggle="tab"]').attr("aria-expanded", !1), e.addClass("active").find('[data-toggle="tab"]').attr("aria-expanded", !0), r ? (e[0].offsetWidth, e.addClass("in")) : e.removeClass("fade"), e.parent(".dropdown-menu").length && e.closest("li.dropdown").addClass("active").end().find('[data-toggle="tab"]').attr("aria-expanded", !0), n && n()
		}
		var a = o.find("> .active"),
			r = n && t.support.transition && (a.length && a.hasClass("fade") || !!o.find("> .fade").length);
		a.length && r ? a.one("bsTransitionEnd", s).emulateTransitionEnd(i.TRANSITION_DURATION) : s(), a.removeClass("in")
	};
	var o = t.fn.tab;
	t.fn.tab = e, t.fn.tab.Constructor = i, t.fn.tab.noConflict = function() {
		return t.fn.tab = o, this
	};
	var n = function(i) {
		i.preventDefault(), e.call(t(this), "show")
	};
	t(document).on("click.bs.tab.data-api", '[data-toggle="tab"]', n).on("click.bs.tab.data-api", '[data-toggle="pill"]', n)
}(jQuery), + function(t) {
	"use strict";

	function e(e) {
		return this.each(function() {
			var o = t(this),
				n = o.data("bs.affix"),
				s = "object" == typeof e && e;
			n || o.data("bs.affix", n = new i(this, s)), "string" == typeof e && n[e]()
		})
	}
	var i = function(e, o) {
		this.options = t.extend({}, i.DEFAULTS, o), this.$target = t(this.options.target).on("scroll.bs.affix.data-api", t.proxy(this.checkPosition, this)).on("click.bs.affix.data-api", t.proxy(this.checkPositionWithEventLoop, this)), this.$element = t(e), this.affixed = null, this.unpin = null, this.pinnedOffset = null, this.checkPosition()
	};
	i.VERSION = "3.3.5", i.RESET = "affix affix-top affix-bottom", i.DEFAULTS = {
		offset: 0,
		target: window
	}, i.prototype.getState = function(t, e, i, o) {
		var n = this.$target.scrollTop(),
			s = this.$element.offset(),
			a = this.$target.height();
		if (null != i && "top" == this.affixed)
			return i > n ? "top" : !1;
		if ("bottom" == this.affixed)
			return null != i ? n + this.unpin <= s.top ? !1 : "bottom" : t - o >= n + a ? !1 : "bottom";
		var r = null == this.affixed,
			l = r ? n : s.top,
			h = r ? a : e;
		return null != i && i >= n ? "top" : null != o && l + h >= t - o ? "bottom" : !1
	}, i.prototype.getPinnedOffset = function() {
		if (this.pinnedOffset)
			return this.pinnedOffset;
		this.$element.removeClass(i.RESET).addClass("affix");
		var t = this.$target.scrollTop(),
			e = this.$element.offset();
		return this.pinnedOffset = e.top - t
	}, i.prototype.checkPositionWithEventLoop = function() {
		setTimeout(t.proxy(this.checkPosition, this), 1)
	}, i.prototype.checkPosition = function() {
		if (this.$element.is(":visible")) {
			var e = this.$element.height(),
				o = this.options.offset,
				n = o.top,
				s = o.bottom,
				a = Math.max(t(document).height(), t(document.body).height());
			"object" != typeof o && (s = n = o), "function" == typeof n && (n = o.top(this.$element)), "function" == typeof s && (s = o.bottom(this.$element));
			var r = this.getState(a, e, n, s);
			if (this.affixed != r) {
				null != this.unpin && this.$element.css("top", "");
				var l = "affix" + (r ? "-" + r : ""),
					h = t.Event(l + ".bs.affix");
				if (this.$element.trigger(h), h.isDefaultPrevented())
					return;
				this.affixed = r, this.unpin = "bottom" == r ? this.getPinnedOffset() : null, this.$element.removeClass(i.RESET).addClass(l).trigger(l.replace("affix", "affixed") + ".bs.affix")
			}
			"bottom" == r && this.$element.offset({
				top: a - e - s
			})
		}
	};
	var o = t.fn.affix;
	t.fn.affix = e, t.fn.affix.Constructor = i, t.fn.affix.noConflict = function() {
		return t.fn.affix = o, this
	}, t(window).on("load", function() {
		t('[data-spy="affix"]').each(function() {
			var i = t(this),
				o = i.data();
			o.offset = o.offset || {}, null != o.offsetBottom && (o.offset.bottom = o.offsetBottom), null != o.offsetTop && (o.offset.top = o.offsetTop), e.call(i, o)
		})
	})
}(jQuery), + function(t) {
	"use strict";

	function e(e) {
		var i, o = e.attr("data-target") || (i = e.attr("href")) && i.replace(/.*(?=#[^\s]+$)/, "");
		return t(o)
	}

	function i(e) {
		return this.each(function() {
			var i = t(this),
				n = i.data("bs.collapse"),
				s = t.extend({}, o.DEFAULTS, i.data(), "object" == typeof e && e);
			!n && s.toggle && /show|hide/.test(e) && (s.toggle = !1), n || i.data("bs.collapse", n = new o(this, s)), "string" == typeof e && n[e]()
		})
	}
	var o = function(e, i) {
		this.$element = t(e), this.options = t.extend({}, o.DEFAULTS, i), this.$trigger = t('[data-toggle="collapse"][href="#' + e.id + '"],[data-toggle="collapse"][data-target="#' + e.id + '"]'), this.transitioning = null, this.options.parent ? this.$parent = this.getParent() : this.addAriaAndCollapsedClass(this.$element, this.$trigger), this.options.toggle && this.toggle()
	};
	o.VERSION = "3.3.5", o.TRANSITION_DURATION = 350, o.DEFAULTS = {
		toggle: !0
	}, o.prototype.dimension = function() {
		var t = this.$element.hasClass("width");
		return t ? "width" : "height"
	}, o.prototype.show = function() {
		if (!this.transitioning && !this.$element.hasClass("in")) {
			var e, n = this.$parent && this.$parent.children(".panel").children(".in, .collapsing");
			if (!(n && n.length && (e = n.data("bs.collapse"), e && e.transitioning))) {
				var s = t.Event("show.bs.collapse");
				if (this.$element.trigger(s), !s.isDefaultPrevented()) {
					n && n.length && (i.call(n, "hide"), e || n.data("bs.collapse", null));
					var a = this.dimension();
					this.$element.removeClass("collapse").addClass("collapsing")[a](0).attr("aria-expanded", !0), this.$trigger.removeClass("collapsed").attr("aria-expanded", !0), this.transitioning = 1;
					var r = function() {
						this.$element.removeClass("collapsing").addClass("collapse in")[a](""), this.transitioning = 0, this.$element.trigger("shown.bs.collapse")
					};
					if (!t.support.transition)
						return r.call(this);
					var l = t.camelCase(["scroll", a].join("-"));
					this.$element.one("bsTransitionEnd", t.proxy(r, this)).emulateTransitionEnd(o.TRANSITION_DURATION)[a](this.$element[0][l]);
				}
			}
		}
	}, o.prototype.hide = function() {
		if (!this.transitioning && this.$element.hasClass("in")) {
			var e = t.Event("hide.bs.collapse");
			if (this.$element.trigger(e), !e.isDefaultPrevented()) {
				var i = this.dimension();
				this.$element[i](this.$element[i]())[0].offsetHeight, this.$element.addClass("collapsing").removeClass("collapse in").attr("aria-expanded", !1), this.$trigger.addClass("collapsed").attr("aria-expanded", !1), this.transitioning = 1;
				var n = function() {
					this.transitioning = 0, this.$element.removeClass("collapsing").addClass("collapse").trigger("hidden.bs.collapse")
				};
				return t.support.transition ? void this.$element[i](0).one("bsTransitionEnd", t.proxy(n, this)).emulateTransitionEnd(o.TRANSITION_DURATION) : n.call(this)
			}
		}
	}, o.prototype.toggle = function() {
		this[this.$element.hasClass("in") ? "hide" : "show"]()
	}, o.prototype.getParent = function() {
		return t(this.options.parent).find('[data-toggle="collapse"][data-parent="' + this.options.parent + '"]').each(t.proxy(function(i, o) {
			var n = t(o);
			this.addAriaAndCollapsedClass(e(n), n)
		}, this)).end()
	}, o.prototype.addAriaAndCollapsedClass = function(t, e) {
		var i = t.hasClass("in");
		t.attr("aria-expanded", i), e.toggleClass("collapsed", !i).attr("aria-expanded", i)
	};
	var n = t.fn.collapse;
	t.fn.collapse = i, t.fn.collapse.Constructor = o, t.fn.collapse.noConflict = function() {
		return t.fn.collapse = n, this
	}, t(document).on("click.bs.collapse.data-api", '[data-toggle="collapse"]', function(o) {
		var n = t(this);
		n.attr("data-target") || o.preventDefault();
		var s = e(n),
			a = s.data("bs.collapse"),
			r = a ? "toggle" : n.data();
		i.call(s, r)
	})
}(jQuery), + function(t) {
	"use strict";

	function e(i, o) {
		this.$body = t(document.body), this.$scrollElement = t(t(i).is(document.body) ? window : i), this.options = t.extend({}, e.DEFAULTS, o), this.selector = (this.options.target || "") + " .nav li > a", this.offsets = [], this.targets = [], this.activeTarget = null, this.scrollHeight = 0, this.$scrollElement.on("scroll.bs.scrollspy", t.proxy(this.process, this)), this.refresh(), this.process()
	}

	function i(i) {
		return this.each(function() {
			var o = t(this),
				n = o.data("bs.scrollspy"),
				s = "object" == typeof i && i;
			n || o.data("bs.scrollspy", n = new e(this, s)), "string" == typeof i && n[i]()
		})
	}
	e.VERSION = "3.3.5", e.DEFAULTS = {
		offset: 10
	}, e.prototype.getScrollHeight = function() {
		return this.$scrollElement[0].scrollHeight || Math.max(this.$body[0].scrollHeight, document.documentElement.scrollHeight)
	}, e.prototype.refresh = function() {
		var e = this,
			i = "offset",
			o = 0;
		this.offsets = [], this.targets = [], this.scrollHeight = this.getScrollHeight(), t.isWindow(this.$scrollElement[0]) || (i = "position", o = this.$scrollElement.scrollTop()), this.$body.find(this.selector).map(function() {
			var e = t(this),
				n = e.data("target") || e.attr("href"),
				s = /^#./.test(n) && t(n);
			return s && s.length && s.is(":visible") && [
				[s[i]().top + o, n]
			] || null
		}).sort(function(t, e) {
			return t[0] - e[0]
		}).each(function() {
			e.offsets.push(this[0]), e.targets.push(this[1])
		})
	}, e.prototype.process = function() {
		var t, e = this.$scrollElement.scrollTop() + this.options.offset,
			i = this.getScrollHeight(),
			o = this.options.offset + i - this.$scrollElement.height(),
			n = this.offsets,
			s = this.targets,
			a = this.activeTarget;
		if (this.scrollHeight != i && this.refresh(), e >= o)
			return a != (t = s[s.length - 1]) && this.activate(t);
		if (a && e < n[0])
			return this.activeTarget = null, this.clear();
		for (t = n.length; t--;)
			a != s[t] && e >= n[t] && (void 0 === n[t + 1] || e < n[t + 1]) && this.activate(s[t])
	}, e.prototype.activate = function(e) {
		this.activeTarget = e, this.clear();
		var i = this.selector + '[data-target="' + e + '"],' + this.selector + '[href="' + e + '"]',
			o = t(i).parents("li").addClass("active");
		o.parent(".dropdown-menu").length && (o = o.closest("li.dropdown").addClass("active")), o.trigger("activate.bs.scrollspy")
	}, e.prototype.clear = function() {
		t(this.selector).parentsUntil(this.options.target, ".active").removeClass("active")
	};
	var o = t.fn.scrollspy;
	t.fn.scrollspy = i, t.fn.scrollspy.Constructor = e, t.fn.scrollspy.noConflict = function() {
		return t.fn.scrollspy = o, this
	}, t(window).on("load.bs.scrollspy.data-api", function() {
		t('[data-spy="scroll"]').each(function() {
			var e = t(this);
			i.call(e, e.data())
		})
	})
}(jQuery), + function(t) {
	"use strict";

	function e() {
		var t = document.createElement("bootstrap"),
			e = {
				WebkitTransition: "webkitTransitionEnd",
				MozTransition: "transitionend",
				OTransition: "oTransitionEnd otransitionend",
				transition: "transitionend"
			};
		for (var i in e)
			if (void 0 !== t.style[i])
				return {
					end: e[i]
				};
		return !1
	}
	t.fn.emulateTransitionEnd = function(e) {
		var i = !1,
			o = this;
		t(this).one("bsTransitionEnd", function() {
			i = !0
		});
		var n = function() {
			i || t(o).trigger(t.support.transition.end)
		};
		return setTimeout(n, e), this
	}, t(function() {
		t.support.transition = e(), t.support.transition && (t.event.special.bsTransitionEnd = {
			bindType: t.support.transition.end,
			delegateType: t.support.transition.end,
			handle: function(e) {
				return t(e.target).is(this) ? e.handleObj.handler.apply(this, arguments) : void 0
			}
		})
	})
}(jQuery);;
$.fn.bootstrapModal = $.fn.modal;;

function makeGoogleAnalyticsLogObject(n) {
	var t = {};
	return t.event = n, t.timestamp = +new Date, t
}

function GoogleAnalyticsTimingTracker(n, t, i, r) {
	this.maxTime = 6e4, this.category = n, this.variable = t, this.label = i ? i : undefined, this.isDebug = r
}
var GoogleAnalyticsEvents = {
	LocalEventLog: [],
	SetCustomVar: function(n, t, i, r) {
		window._gaq && (window.GoogleAnalyticsDisableRoblox2 || _gaq.push(["_setCustomVar", n, t, i, r]), _gaq.push(["b._setCustomVar", n, t, i, r]))
	},
	FireEvent: function(n) {
		var t, i;
		window._gaq && (window.GoogleAnalyticsDisableRoblox2 || (t = ["_trackEvent"], t = t.concat(n), _gaq.push(t), GoogleAnalyticsEvents.LocalEventLog.push(makeGoogleAnalyticsLogObject(t))), i = ["b._trackEvent"], i = i.concat(n), _gaq.push(i), GoogleAnalyticsEvents.LocalEventLog.push(makeGoogleAnalyticsLogObject(i)))
	},
	ViewVirtual: function(n) {
		var t, i;
		window._gaq && (window.GoogleAnalyticsDisableRoblox2 || (t = ["_trackPageview", n], window._gaq.push(t), GoogleAnalyticsEvents.LocalEventLog.push(makeGoogleAnalyticsLogObject(t))), i = ["b._trackPageview", n], window._gaq.push(i), GoogleAnalyticsEvents.LocalEventLog.push(makeGoogleAnalyticsLogObject(i)))
	},
	TrackTransaction: function(n, t) {
		if (window._gaq) {
			var i = ["_addTrans", n, "Roblox", t, "0", "0", "San Mateo", "California", "USA"];
			window.GoogleAnalyticsDisableRoblox2 || (_gaq.push(i), GoogleAnalyticsEvents.LocalEventLog.push(makeGoogleAnalyticsLogObject(i))), i[0] = "b." + i[0], _gaq.push(i), GoogleAnalyticsEvents.LocalEventLog.push(makeGoogleAnalyticsLogObject(i))
		}
	},
	TrackTransactionItem: function(n, t, i, r, u) {
		if (window._gaq) {
			var f = ["_addItem", n, t, i, r, u, 1],
				e = ["_trackTrans"];
			window.GoogleAnalyticsDisableRoblox2 || (_gaq.push(f), GoogleAnalyticsEvents.LocalEventLog.push(makeGoogleAnalyticsLogObject(f)), _gaq.push(e), GoogleAnalyticsEvents.LocalEventLog.push(makeGoogleAnalyticsLogObject(e))), f[0] = "b." + f[0], e[0] = "b." + e[0], _gaq.push(f), GoogleAnalyticsEvents.LocalEventLog.push(makeGoogleAnalyticsLogObject(f)), _gaq.push(e), GoogleAnalyticsEvents.LocalEventLog.push(makeGoogleAnalyticsLogObject(e))
		}
	},
	Log: function(n) {
		GoogleAnalyticsEvents.LocalEventLog.push(makeGoogleAnalyticsLogObject(n))
	}
};
GoogleAnalyticsTimingTracker.prototype.getTimeStamp = function() {
	return window.performance && window.performance.now ? Math.round(window.performance.now()) : +new Date
}, GoogleAnalyticsTimingTracker.prototype.start = function() {
	this.startTime = this.getTimeStamp()
}, GoogleAnalyticsTimingTracker.prototype.stop = function() {
	this.elapsedTime = this.getTimeStamp() - this.startTime
}, GoogleAnalyticsTimingTracker.prototype.send = function() {
	if (0 < this.elapsedTime && this.elapsedTime < this.maxTime) {
		var n = ["b._trackTiming", this.category, this.variable, this.elapsedTime, this.label, 100];
		window._gaq.push(n)
	}
};;
typeof Roblox == "undefined" && (Roblox = {}), Roblox.JSErrorTracker = {
	showAlert: !1,
	defaultPixel: "GA",
	javascriptStackTraceEnabled: !1,
	suppressConsoleError: !1,
	data: {
		category: "JavascriptExceptions"
	},
	initialize: function(n) {
		$.extend(Roblox.JSErrorTracker, n), this.addOnErrorEventHandler(this.errorHandler)
	},
	errorHandler: function(n, t, i) {
		try {
			Roblox.JSErrorTracker.data.msg = n, Roblox.JSErrorTracker.data.url = t, Roblox.JSErrorTracker.data.line = i, Roblox.JSErrorTracker.data.ua = window.navigator.userAgent, Roblox.JSErrorTracker.logException(Roblox.JSErrorTracker.data)
		} catch (r) {}
		return Roblox.JSErrorTracker.suppressConsoleError
	},
	addOnErrorEventHandler: function(n) {
		var t = window.onerror;
		window.onerror = typeof window.onerror == "function" ? function(i, r, u) {
			t(i, r, u), n(i, r, u)
		} : n
	},
	processException: function(n, t) {
		if (typeof n != "undefined") {
			typeof n.category == "undefined" && (n.category = Roblox.JSErrorTracker.data.category);
			switch (t) {
				case "GA":
					var i = {
						category: "category",
						url: "action",
						msg: "opt_label",
						line: "opt_value"
					};
					Roblox.JSErrorTracker.fireGAPixel(Roblox.JSErrorTracker.distillGAData(n, i));
					break;
				default:
					console.log("Roblox JSErrorTracker received an unknown pixel to fire")
			}
			return !0
		}
	},
	logException: function(n) {
		Roblox.JSErrorTracker.processException(n, Roblox.JSErrorTracker.defaultPixel), Roblox.JSErrorTracker.showErrorMessage(n.msg)
	},
	distillData: function(n, t) {
		var r = {},
			i;
		for (i in t)
			typeof n[i] != "undefined" && (r[t[i]] = encodeURIComponent(n[i]));
		return r
	},
	distillGAData: function(n, t) {
		var i = Roblox.JSErrorTracker.distillData(n, t),
			r = [decodeURIComponent([i.category])];
		return typeof i.action != typeof undefined ? (r = r.concat(decodeURIComponent(i.action)), typeof i.opt_label != typeof undefined && (r = r.concat(decodeURIComponent(i.opt_label)), typeof i.opt_value != typeof undefined && (r = r.concat(parseInt(decodeURIComponent(i.opt_value)))))) : Roblox.JSErrorTracker.showAlert && alert("Missing a required parameter for GA"), r
	},
	createURL: function(n, t, i) {
		var r = n,
			f = Roblox.JSErrorTracker.distillData(t, i),
			u;
		if (r += "?", f != null)
			for (u in f)
				typeof u != typeof undefined && t.hasOwnProperty(u) && (r += u + "=" + f[u] + "&");
		return r = r.slice(0, r.length - 1)
	},
	fireGAPixel: function(n) {
		typeof _gaq != "undefined" && _gaq.push(["c._trackEvent"].concat(n))
	},
	showErrorMessage: function(n) {
		Roblox.JSErrorTracker.showAlert && (n !== null ? alert(n) : alert("An error occured"))
	}
};;

function RBXBaseEventListener() {
	if (!(this instanceof RBXBaseEventListener))
		return new RBXBaseEventListener;
	this.init = function() {
		for (eventKey in this.events)
			this.events.hasOwnProperty(eventKey) && $(document).bind(this.events[eventKey], $.proxy(this.localCopy, this))
	}, this.events = [], this.localCopy = function(n, t) {
		var i = $.extend(!0, {}, n),
			r = $.extend(!0, {}, t);
		this.handleEvent(i, r)
	}, this.distillData = function() {
		return console.log("RBXEventListener distillData - Please implement me"), !1
	}, this.handleEvent = function() {
		return console.log("EventListener handleEvent - Please implement me"), !1
	}, this.fireEvent = function() {
		return console.log("EventListener fireEvent - Please implement me"), !1
	}
}
RobloxEventManager = new function() {
	var n = [],
		t = {};
	this.enabled = !1, this.initialized = !1, this.eventQueue = [], this.initialize = function(n) {
		for (this.initialized = !0, this.enabled = n; this.eventQueue.length > 0;) {
			var t = this.eventQueue.pop();
			this.triggerEvent(t.eventName, t.args)
		}
	}, this.triggerEvent = function(n, t) {
		this.initialized ? this.enabled && (typeof t == "undefined" && (t = {}), t.guid = Roblox.Cookies.getBrowserTrackerId(), t.guid != -1 && $(document).trigger(n, [t])) : this.eventQueue.push({
			eventName: n,
			args: t
		})
	}, this.registerCookieStoreEvent = function(t) {
		n.push(t)
	}, this.insertDataStoreKeyValuePair = function(n, i) {
		t[n] = i
	}, this.monitorCookieStore = function() {
		var i, r, u, t, f;
		try {
			if (typeof Roblox == "undefined" || typeof Roblox.Client == "undefined" || window.location.protocol == "https:")
				return;
			if (i = Roblox.Client.CreateLauncher(!1), i == null)
				return;
			for (r = 0; r < n.length; r++)
				try {
					u = n[r], t = i.GetKeyValue(u), t != "" && t != "-1" && t != "RBX_NOT_VALID" && (f = eval("(" + t + ")"), f.userType = f.userId > 0 ? "user" : "guest", RobloxEventManager.triggerEvent(u, f), i.SetKeyValue(u, "RBX_NOT_VALID"))
				} catch (e) {}
		} catch (e) {}
	}, this.startMonitor = function() {
		function f() {
			i ? r() : e()
		}

		function r() {
			clearTimeout(t), t = setTimeout(f, RobloxEventManager._idleInterval), i = !1;
			$(document).one("mousemove", function() {
				i = !0
			})
		}

		function u() {
			clearInterval(n), n = setInterval(RobloxEventManager.monitorCookieStore, 5e3), r()
		}

		function e() {
			clearTimeout(t), clearInterval(n);
			var i = document.getElementById("robloxpluginobj");
			Roblox.Client.ReleaseLauncher(i, !1, !1);
			$(document).one("mousemove", u)
		}
		var n, t, i;
		$("#PlaceLauncherStatusPanel").data("is-protocol-handler-launch-enabled") != "True" && typeof Roblox != "undefined" && typeof Roblox.Client != "undefined" && window.location.protocol != "https:" && u()
	}
};;
GoogleListener = new RBXBaseEventListener, GoogleListener.handleEvent = function(n, t) {
	function r(n) {
		return n = n.toLowerCase(), n == "win32" ? n = "Windows" : n == "osx" && (n = "Mac"), n
	}
	var f, u, i;
	switch (n.type) {
		case "rbx_evt_initial_install_begin":
			t.os = r(t.os), t.category = "Bootstrapper Install Begin", i = {
				os: "action"
			};
			break;
		case "rbx_evt_ftp":
			t.os = r(t.os), t.category = "First Time Played", i = {
				os: "action"
			};
			break;
		case "rbx_evt_initial_install_success":
			t.os = r(t.os), t.category = "Bootstrapper Install Success", i = {
				os: "action"
			};
			break;
		case "rbx_evt_fmp":
			t.os = r(t.os), t.category = "Five Minute Play", i = {
				os: "action"
			};
			break;
		case "rbx_evt_abtest":
			i = {
				experiment: "category",
				variation: "action",
				version: "opt_label"
			};
			break;
		case "rbx_evt_card_redemption":
			t.category = "CardRedemption", i = {
				merchant: "action",
				cardValue: "opt_label"
			};
			break;
		default:
			return console.log("GoogleListener - Event registered without handling instructions: " + n.type), !1
	}
	return i.category = "category", u = this.distillData(t, i), this.fireEvent(u), !0
}, GoogleListener.distillData = function(n, t) {
	var i = {},
		r;
	for (dataKey in t)
		typeof n[dataKey] != typeof undefined && (i[t[dataKey]] = n[dataKey]);
	return r = [i.category, i.action], i.opt_label != null && (r = r.concat(i.opt_label)), i.opt_value != null && (r = r.concat(i.opt_value)), r
}, GoogleListener.fireEvent = function(n) {
	if (typeof _gaq != typeof undefined) {
		var t = ["_trackEvent"],
			i = ["b._trackEvent"];
		_gaq.push(t.concat(n)), _gaq.push(i.concat(n))
	}
}, GoogleListener.events = ["rbx_evt_initial_install_begin", "rbx_evt_ftp", "rbx_evt_initial_install_success", "rbx_evt_fmp", "rbx_evt_abtest", "rbx_evt_card_redemption"];;
typeof Roblox == "undefined" && (Roblox = {}), Roblox.SiteTouchEvent = function() {
	function i() {
		var t, i;
		return localStorage == null ? new Date(0) : (typeof localStorage != "undefined" && (t = localStorage.getItem(n)), (typeof t == "undefined" || t === null) && (t = $.cookie(n)), i = Date.parse(t), t && !isNaN(i) ? new Date(i) : new Date(0))
	}

	function r(i) {
		localStorage != null && (typeof i == "undefined" && (i = new Date), typeof localStorage != "undefined" && (t.useLocalStorage ? $.cookie(n, null) : localStorage.removeItem(n)), t.useLocalStorage && typeof localStorage != "undefined" ? localStorage.setItem(n, i) : $.cookie(n, i, {
			expires: 100
		}))
	}

	function u() {
		var n = i();
		Math.floor((new Date - n) / 36e5) >= t.dateDiffThresholdInHours && RobloxEventManager.triggerEvent("rbx_evt_sitetouch"), r()
	}
	var n = "LastActivity",
		t = {
			updateLastActivityAndFireEvent: u,
			getLastActivity: i,
			setLastActivity: r,
			dateDiffThresholdInHours: 3,
			useLocalStorage: !1
		};
	return t
}();;
Roblox = Roblox || {}, typeof Roblox.UpsellAdModal == "undefined" && (Roblox.UpsellAdModal = function() {
	var n = function() {
		var n = {
			titleText: Roblox.UpsellAdModal.Resources.title,
			bodyContent: Roblox.UpsellAdModal.Resources.body,
			footerText: "",
			overlayClose: !0,
			escClose: !0,
			acceptText: Roblox.UpsellAdModal.Resources.accept,
			declineText: Roblox.UpsellAdModal.Resources.decline,
			acceptColor: Roblox.GenericConfirmation.green,
			onAccept: function() {
				window.location.href = "/premium/membership"
			},
			imageUrl: "/images/BuildersClub-110x110_small.png"
		};
		Roblox.GenericConfirmation.open(n)
	};
	return {
		open: n
	}
}()), $(function() {
	$("a.UpsellAdButton").click(function() {
		return Roblox.UpsellAdModal.open(), !1
	})
});;
typeof Roblox == typeof undefined && (Roblox = {}), Roblox.Endpoints = Roblox.Endpoints || {
	addCrossDomainOptionsToAllRequests: !1
}, Roblox.Endpoints.isAbsolute = function(n) {
	var t = new RegExp("^([a-z]+://|//)");
	return t.test(n)
}, Roblox.Endpoints.splitAtQueryString = function(n) {
	var i = new RegExp("\\?(?!})"),
		t = i.exec(n);
	return t === null ? {
		url: n,
		query: ""
	} : {
		url: n.substring(0, t.index),
		query: n.substring(t.index)
	}
}, Roblox.Endpoints.ajaxPrefilter = function(n) {
	var r = Roblox.Endpoints.generateAbsoluteUrl(n.url, n.data, n.crossDomain);
	n.url = r, Roblox.Endpoints.addCrossDomainOptionsToAllRequests && n.url.indexOf("rbxcdn.com") < 0 && n.url.indexOf("s3.amazonaws.com") < 0 && (n.crossDomain = !0, n.xhrFields = n.xhrFields || {}, n.xhrFields.withCredentials = !0)
}, Roblox.Endpoints.generateAbsoluteUrl = function(n, t, i) {
	var f = Roblox.Endpoints.splitAtQueryString(n),
		u = f.url.toLowerCase(),
		r = u;
	return typeof Roblox.Endpoints.Urls != typeof undefined && i && typeof Roblox.Endpoints.Urls[u.toLowerCase()] != typeof undefined && (r = Roblox.Endpoints.getAbsoluteUrl(u)), r.indexOf("{") > -1 && $.each(t, function(n, t) {
		var i = new RegExp("{" + n.toLowerCase() + "(:.*?)?\\??}");
		r = r.replace(i, t)
	}), r + f.query
}, Roblox.Endpoints.getAbsoluteUrl = function(n) {
	var t, r, i, u;
	return typeof Roblox.Endpoints.Urls == typeof undefined ? n : n.length === 0 || Roblox.Endpoints.isAbsolute(n) ? n : (n.indexOf("/") !== 0 && (t = window.location.pathname, r = t.slice(0, t.lastIndexOf("/") + 1), n = r + n), i = Roblox.Endpoints.Urls[n.toLowerCase()], i === undefined) ? (u = window.location.protocol + "//" + window.location.hostname, u + n) : i
}, $.ajaxPrefilter(Roblox.Endpoints.ajaxPrefilter);;
Roblox = Roblox || {}, Roblox.DeviceFeatureDetection = function() {
	function i() {
		!t.hasClass("in-studio") && ("ontouchstart" in window || navigator.maxTouchPoints > 0 || navigator.msMaxTouchPoints > 0) && (n = !0, t.addClass("touch"))
	}
	var n = !1,
		t = $(".container-main");
	return i(), {
		isTouch: n
	}
}();;
"use strict";
Roblox = Roblox || {}, Roblox.LazyLoad = function() {
	function n(n) {
		if (n) {
			var t = n.attr("data-delaysrc");
			typeof t != "undefined" && n.attr("src", t).addClass("src-replaced")
		}
	}

	function u() {
		window.addEventListener("load", function() {
			$(t + ", " + i).each(function() {
				n($(this))
			})
		}, !1)
	}

	function f() {
		$(r).one("click touchstart", function() {
			var t = $("#iframe-login:not('.src-replaced')");
			n(t)
		})
	}

	function e() {
		u(), f()
	}
	var t = "img[data-delaysrc]",
		i = "iframe[data-delaysrc]:not('.src-replaced')",
		r = "#head-login, #header-login";
	$(document).ready(function() {
		e()
	})
}();;
typeof Roblox == "undefined" && (Roblox = {}), Roblox.XsrfToken = function() {
	function f(t) {
		n = t
	}

	function e() {
		return n
	}
	var r = ["POST", "PUT", "DELETE"],
		n = "",
		t = "X-CSRF-TOKEN",
		u = 403,
		i;
	return $(document).ajaxSend(function(t, i, u) {
		n !== "" && r.indexOf(u.type.toUpperCase()) >= 0 && i.setRequestHeader("X-CSRF-TOKEN", n)
	}), $.ajaxPrefilter(function(i) {
		if (i.dataType != "jsonp" && i.dataType != "script" && n !== "") {
			var e = i.error;
			i.error = function(r, f, o) {
				if (r.status == u && r.getResponseHeader(t) != null) {
					var s = r.getResponseHeader(t);
					if (s == null) {
						typeof e == "function" && e(r, f, o);
						throw new Error("Null token returned by Xsrf enabled handler");
					}
					n = s, $.ajax(i)
				} else
					typeof e == "function" && e(r, f, o)
			}
		}
	}), i = {
		setToken: f,
		getToken: e
	}
}();;
typeof Roblox == "undefined" && (Roblox = {}), typeof Roblox.DeveloperConsoleWarning == "undefined" && (Roblox.DeveloperConsoleWarning = function() {
	var n = "\n      _______      _________      _____       ______     _\n     / _____ \\    |____ ____|    / ___ \\     | ____ \\   | |\n    / /     \\_\\       | |       / /   \\ \\    | |   \\ \\  | |\n    | |               | |      / /     \\ \\   | |   | |  | |\n    \\ \\______         | |      | |     | |   | |___/ /  | |\n     \\______ \\        | |      | |     | |   |  ____/   | |\n            \\ \\       | |      | |     | |   | |        | |\n     _      | |       | |      \\ \\     / /   | |        |_|\n    \\ \\_____/ /       | |       \\ \\___/ /    | |         _\n     \\_______/        |_|        \\_____/     |_|        |_|\n\n     Keep your account safe! Do not paste any text here.\n\n     If someone is asking you to paste text here then you're \n     giving someone access to your account, your gear, and\n     your ROBUX.\n\n     To learn more about keeping your account safe you can go to\n\n     https://en.help.roblox.com/hc/en-us/articles/203313380-Account-Security-Theft-Keeping-your-Account-Safe-",
		t = function() {
			typeof console != "undefined" && typeof console.log != "undefined" && console.log(n)
		};
	return {
		showWarning: t
	}
}());; /*!http://mths.be/placeholder v2.0.8 by @mathias*/
(function(n, t, i) {
	function y(n) {
		var t = {},
			r = /^jQuery\d+$/;
		return i.each(n.attributes, function(n, i) {
			i.specified && !r.test(i.name) && (t[i.name] = i.value)
		}), t
	}

	function e(n, t) {
		var u = this,
			r = i(u);
		if (u.value == r.attr("placeholder") && r.hasClass("placeholder"))
			if (r.data("placeholder-password")) {
				if (r = r.hide().next().show().attr("id", r.removeAttr("id").data("placeholder-id")), n === !0)
					return r[0].value = t;
				r.focus()
			} else
				u.value = "", r.removeClass("placeholder"), u == v() && u.select()
	}

	function s() {
		var t, r = this,
			n = i(r),
			u = this.id;
		if (r.value == "") {
			if (r.type == "password") {
				if (!n.data("placeholder-textinput")) {
					try {
						t = n.clone().attr({
							type: "text"
						})
					} catch (f) {
						t = i("<input>").attr(i.extend(y(this), {
							type: "text"
						}))
					}
					t.removeAttr("name").data({
						"placeholder-password": n,
						"placeholder-id": u
					}).bind("focus.placeholder", e), n.data({
						"placeholder-textinput": t,
						"placeholder-id": u
					}).before(t)
				}
				n = n.removeAttr("id").hide().prev().attr("id", u).show()
			}
			n.addClass("placeholder"), n[0].value = n.attr("placeholder")
		} else
			n.removeClass("placeholder")
	}

	function v() {
		try {
			return t.activeElement
		} catch (n) {}
	}
	var h = Object.prototype.toString.call(n.operamini) == "[object OperaMini]",
		f = "placeholder" in t.createElement("input") && !h,
		o = "placeholder" in t.createElement("textarea") && !h,
		c = i.fn,
		l = i.valHooks,
		a = i.propHooks,
		u, r;
	f && o ? (r = c.placeholder = function() {
		return this
	}, r.input = r.textarea = !0) : (r = c.placeholder = function() {
		var n = this;
		return n.filter((f ? "textarea" : ":input") + "[placeholder]").not(".placeholder").bind({
			"focus.placeholder": e,
			"blur.placeholder": s
		}).data("placeholder-enabled", !0).trigger("blur.placeholder"), n
	}, r.input = f, r.textarea = o, u = {
		get: function(n) {
			var t = i(n),
				r = t.data("placeholder-password");
			return r ? r[0].value : t.data("placeholder-enabled") && t.hasClass("placeholder") ? "" : n.value
		},
		set: function(n, t) {
			var r = i(n),
				u = r.data("placeholder-password");
			return u ? u[0].value = t : r.data("placeholder-enabled") ? (t == "" ? (n.value = t, n != v() && s.call(n)) : r.hasClass("placeholder") ? e.call(n, !0, t) || (n.value = t) : n.value = t, r) : n.value = t
		}
	}, f || (l.input = u, a.value = u), o || (l.textarea = u, a.value = u), i(function() {
		i(t).delegate("form", "submit.placeholder", function() {
			var n = i(".placeholder", this).each(e);
			setTimeout(function() {
				n.each(s)
			}, 10)
		})
	}), i(n).bind("beforeunload.placeholder", function() {
		i(".placeholder").each(function() {
			this.value = ""
		})
	}))
})(this, document, jQuery);;
(function($) {
	var g, d, j = 1,
		a, b = this,
		f = !1,
		h = "postMessage",
		e = "addEventListener",
		c, i = b[h] && !$.browser.opera;
	$[h] = function(k, l, m) {
		if (!l) {
			return
		}
		k = typeof k === "string" ? k : $.param(k);
		m = m || parent;
		if (i) {
			m[h](k, l.replace(/([^:]+:\/\/[^\/]+).*/, "$1"))
		} else {
			if (l) {
				m.location = l.replace(/#.*$/, "") + "#" + (+new Date) + (j++) + "&" + k
			}
		}
	};
	$.receiveMessage = c = function(l, m, k) {
		if (i) {
			if (l) {
				a && c();
				a = function(n) {
					if ((typeof m === "string" && n.origin !== m) || ($.isFunction(m) && m(n.origin) === f)) {
						return f
					}
					l(n)
				}
			}
			if (b[e]) {
				b[l ? e : "removeEventListener"]("message", a, f)
			} else {
				b[l ? "attachEvent" : "detachEvent"]("onmessage", a)
			}
		} else {
			g && clearInterval(g);
			g = null;
			if (l) {
				k = typeof m === "number" ? m : typeof k === "number" ? k : 100;
				g = setInterval(function() {
					var o = document.location.hash,
						n = /^#?\d+&/;
					if (o !== d && n.test(o)) {
						d = o;
						l({
							data: o.replace(n, "")
						})
					}
				}, k)
			}
		}
	}
})(jQuery);;
! function(a) {
	"function" == typeof define && define.amd ? define(["jquery"], a) : "object" == typeof exports ? module.exports = a : a(jQuery)
}(function(a) {
	function b(b) {
		var g = b || window.event,
			h = i.call(arguments, 1),
			j = 0,
			l = 0,
			m = 0,
			n = 0,
			o = 0,
			p = 0;
		if (b = a.event.fix(g), b.type = "mousewheel", "detail" in g && (m = -1 * g.detail), "wheelDelta" in g && (m = g.wheelDelta), "wheelDeltaY" in g && (m = g.wheelDeltaY), "wheelDeltaX" in g && (l = -1 * g.wheelDeltaX), "axis" in g && g.axis === g.HORIZONTAL_AXIS && (l = -1 * m, m = 0), j = 0 === m ? l : m, "deltaY" in g && (m = -1 * g.deltaY, j = m), "deltaX" in g && (l = g.deltaX, 0 === m && (j = -1 * l)), 0 !== m || 0 !== l) {
			if (1 === g.deltaMode) {
				var q = a.data(this, "mousewheel-line-height");
				j *= q, m *= q, l *= q
			} else if (2 === g.deltaMode) {
				var r = a.data(this, "mousewheel-page-height");
				j *= r, m *= r, l *= r
			}
			if (n = Math.max(Math.abs(m), Math.abs(l)), (!f || f > n) && (f = n, d(g, n) && (f /= 40)), d(g, n) && (j /= 40, l /= 40, m /= 40), j = Math[j >= 1 ? "floor" : "ceil"](j / f), l = Math[l >= 1 ? "floor" : "ceil"](l / f), m = Math[m >= 1 ? "floor" : "ceil"](m / f), k.settings.normalizeOffset && this.getBoundingClientRect) {
				var s = this.getBoundingClientRect();
				o = b.clientX - s.left, p = b.clientY - s.top
			}
			return b.deltaX = l, b.deltaY = m, b.deltaFactor = f, b.offsetX = o, b.offsetY = p, b.deltaMode = 0, h.unshift(b, j, l, m), e && clearTimeout(e), e = setTimeout(c, 200), (a.event.dispatch || a.event.handle).apply(this, h)
		}
	}

	function c() {
		f = null
	}

	function d(a, b) {
		return k.settings.adjustOldDeltas && "mousewheel" === a.type && b % 120 === 0
	}
	var e, f, g = ["wheel", "mousewheel", "DOMMouseScroll", "MozMousePixelScroll"],
		h = "onwheel" in document || document.documentMode >= 9 ? ["wheel"] : ["mousewheel", "DomMouseScroll", "MozMousePixelScroll"],
		i = Array.prototype.slice;
	if (a.event.fixHooks)
		for (var j = g.length; j;)
			a.event.fixHooks[g[--j]] = a.event.mouseHooks;
	var k = a.event.special.mousewheel = {
		version: "3.1.12",
		setup: function() {
			if (this.addEventListener)
				for (var c = h.length; c;)
					this.addEventListener(h[--c], b, !1);
			else
				this.onmousewheel = b;
			a.data(this, "mousewheel-line-height", k.getLineHeight(this)), a.data(this, "mousewheel-page-height", k.getPageHeight(this))
		},
		teardown: function() {
			if (this.removeEventListener)
				for (var c = h.length; c;)
					this.removeEventListener(h[--c], b, !1);
			else
				this.onmousewheel = null;
			a.removeData(this, "mousewheel-line-height"), a.removeData(this, "mousewheel-page-height")
		},
		getLineHeight: function(b) {
			var c = a(b),
				d = c["offsetParent" in a.fn ? "offsetParent" : "parent"]();
			return d.length || (d = a("body")), parseInt(d.css("fontSize"), 10) || parseInt(c.css("fontSize"), 10) || 16
		},
		getPageHeight: function(b) {
			return a(b).height()
		},
		settings: {
			adjustOldDeltas: !0,
			normalizeOffset: !0
		}
	};
	a.fn.extend({
		mousewheel: function(a) {
			return a ? this.bind("mousewheel", a) : this.trigger("mousewheel")
		},
		unmousewheel: function(a) {
			return this.unbind("mousewheel", a)
		}
	})
});
! function(e) {
	"undefined" != typeof module && module.exports ? module.exports = e : e(jQuery, window, document)
}(function(e) {
	! function(t) {
		var o = "function" == typeof define && define.amd,
			a = "undefined" != typeof module && module.exports,
			n = "https:" == document.location.protocol ? "https:" : "http:",
			i = "cdnjs.cloudflare.com/ajax/libs/jquery-mousewheel/3.1.12/jquery.mousewheel.min.js";
		o || (a ? require("jquery-mousewheel")(e) : e.event.special.mousewheel || e("head").append(decodeURI("%3Cscript src=" + n + "//" + i + "%3E%3C/script%3E"))), t()
	}(function() {
		var t, o = "mCustomScrollbar",
			a = "mCS",
			n = ".mCustomScrollbar",
			i = {
				setTop: 0,
				setLeft: 0,
				axis: "y",
				scrollbarPosition: "inside",
				scrollInertia: 950,
				autoDraggerLength: !0,
				alwaysShowScrollbar: 0,
				snapOffset: 0,
				mouseWheel: {
					enable: !0,
					scrollAmount: "auto",
					axis: "y",
					deltaFactor: "auto",
					disableOver: ["select", "option", "keygen", "datalist", "textarea"]
				},
				scrollButtons: {
					scrollType: "stepless",
					scrollAmount: "auto"
				},
				keyboard: {
					enable: !0,
					scrollType: "stepless",
					scrollAmount: "auto"
				},
				contentTouchScroll: 25,
				advanced: {
					autoScrollOnFocus: "input,textarea,select,button,datalist,keygen,a[tabindex],area,object,[contenteditable='true']",
					updateOnContentResize: !0,
					updateOnImageLoad: "auto",
					autoUpdateTimeout: 60
				},
				theme: "light",
				callbacks: {
					onTotalScrollOffset: 0,
					onTotalScrollBackOffset: 0,
					alwaysTriggerOffsets: !0
				}
			},
			r = 0,
			l = {},
			s = window.attachEvent && !window.addEventListener ? 1 : 0,
			c = !1,
			d = ["mCSB_dragger_onDrag", "mCSB_scrollTools_onDrag", "mCS_img_loaded", "mCS_disabled", "mCS_destroyed", "mCS_no_scrollbar", "mCS-autoHide", "mCS-dir-rtl", "mCS_no_scrollbar_y", "mCS_no_scrollbar_x", "mCS_y_hidden", "mCS_x_hidden", "mCSB_draggerContainer", "mCSB_buttonUp", "mCSB_buttonDown", "mCSB_buttonLeft", "mCSB_buttonRight"],
			u = {
				init: function(t) {
					var t = e.extend(!0, {}, i, t),
						o = f.call(this);
					if (t.live) {
						var s = t.liveSelector || this.selector || n,
							c = e(s);
						if ("off" === t.live)
							return void m(s);
						l[s] = setTimeout(function() {
							c.mCustomScrollbar(t), "once" === t.live && c.length && m(s)
						}, 500)
					} else
						m(s);
					return t.setWidth = t.set_width ? t.set_width : t.setWidth, t.setHeight = t.set_height ? t.set_height : t.setHeight, t.axis = t.horizontalScroll ? "x" : p(t.axis), t.scrollInertia = t.scrollInertia > 0 && t.scrollInertia < 17 ? 17 : t.scrollInertia, "object" != typeof t.mouseWheel && 1 == t.mouseWheel && (t.mouseWheel = {
						enable: !0,
						scrollAmount: "auto",
						axis: "y",
						preventDefault: !1,
						deltaFactor: "auto",
						normalizeDelta: !1,
						invert: !1
					}), t.mouseWheel.scrollAmount = t.mouseWheelPixels ? t.mouseWheelPixels : t.mouseWheel.scrollAmount, t.mouseWheel.normalizeDelta = t.advanced.normalizeMouseWheelDelta ? t.advanced.normalizeMouseWheelDelta : t.mouseWheel.normalizeDelta, t.scrollButtons.scrollType = g(t.scrollButtons.scrollType), h(t), e(o).each(function() {
						var o = e(this);
						if (!o.data(a)) {
							o.data(a, {
								idx: ++r,
								opt: t,
								scrollRatio: {
									y: null,
									x: null
								},
								overflowed: null,
								contentReset: {
									y: null,
									x: null
								},
								bindEvents: !1,
								tweenRunning: !1,
								sequential: {},
								langDir: o.css("direction"),
								cbOffsets: null,
								trigger: null,
								poll: {
									size: {
										o: 0,
										n: 0
									},
									img: {
										o: 0,
										n: 0
									},
									change: {
										o: 0,
										n: 0
									}
								}
							});
							var n = o.data(a),
								i = n.opt,
								l = o.data("mcs-axis"),
								s = o.data("mcs-scrollbar-position"),
								c = o.data("mcs-theme");
							l && (i.axis = l), s && (i.scrollbarPosition = s), c && (i.theme = c, h(i)), v.call(this), n && i.callbacks.onCreate && "function" == typeof i.callbacks.onCreate && i.callbacks.onCreate.call(this), e("#mCSB_" + n.idx + "_container img:not(." + d[2] + ")").addClass(d[2]), u.update.call(null, o)
						}
					})
				},
				update: function(t, o) {
					var n = t || f.call(this);
					return e(n).each(function() {
						var t = e(this);
						if (t.data(a)) {
							var n = t.data(a),
								i = n.opt,
								r = e("#mCSB_" + n.idx + "_container"),
								l = e("#mCSB_" + n.idx),
								s = [e("#mCSB_" + n.idx + "_dragger_vertical"), e("#mCSB_" + n.idx + "_dragger_horizontal")];
							if (!r.length)
								return;
							n.tweenRunning && N(t), o && n && i.callbacks.onBeforeUpdate && "function" == typeof i.callbacks.onBeforeUpdate && i.callbacks.onBeforeUpdate.call(this), t.hasClass(d[3]) && t.removeClass(d[3]), t.hasClass(d[4]) && t.removeClass(d[4]), l.height() !== t.height() && l.css("max-height", t.height()), _.call(this), "y" === i.axis || i.advanced.autoExpandHorizontalScroll || r.css("width", x(r)), n.overflowed = y.call(this), M.call(this), i.autoDraggerLength && S.call(this), b.call(this), T.call(this);
							var c = [Math.abs(r[0].offsetTop), Math.abs(r[0].offsetLeft)];
							"x" !== i.axis && (n.overflowed[0] ? s[0].height() > s[0].parent().height() ? B.call(this) : (V(t, c[0].toString(), {
								dir: "y",
								dur: 0,
								overwrite: "none"
							}), n.contentReset.y = null) : (B.call(this), "y" === i.axis ? k.call(this) : "yx" === i.axis && n.overflowed[1] && V(t, c[1].toString(), {
								dir: "x",
								dur: 0,
								overwrite: "none"
							}))), "y" !== i.axis && (n.overflowed[1] ? s[1].width() > s[1].parent().width() ? B.call(this) : (V(t, c[1].toString(), {
								dir: "x",
								dur: 0,
								overwrite: "none"
							}), n.contentReset.x = null) : (B.call(this), "x" === i.axis ? k.call(this) : "yx" === i.axis && n.overflowed[0] && V(t, c[0].toString(), {
								dir: "y",
								dur: 0,
								overwrite: "none"
							}))), o && n && (2 === o && i.callbacks.onImageLoad && "function" == typeof i.callbacks.onImageLoad ? i.callbacks.onImageLoad.call(this) : 3 === o && i.callbacks.onSelectorChange && "function" == typeof i.callbacks.onSelectorChange ? i.callbacks.onSelectorChange.call(this) : i.callbacks.onUpdate && "function" == typeof i.callbacks.onUpdate && i.callbacks.onUpdate.call(this)), j.call(this)
						}
					})
				},
				scrollTo: function(t, o) {
					if ("undefined" != typeof t && null != t) {
						var n = f.call(this);
						return e(n).each(function() {
							var n = e(this);
							if (n.data(a)) {
								var i = n.data(a),
									r = i.opt,
									l = {
										trigger: "external",
										scrollInertia: r.scrollInertia,
										scrollEasing: "mcsEaseInOut",
										moveDragger: !1,
										timeout: 60,
										callbacks: !0,
										onStart: !0,
										onUpdate: !0,
										onComplete: !0
									},
									s = e.extend(!0, {}, l, o),
									c = q.call(this, t),
									d = s.scrollInertia > 0 && s.scrollInertia < 17 ? 17 : s.scrollInertia;
								c[0] = Y.call(this, c[0], "y"), c[1] = Y.call(this, c[1], "x"), s.moveDragger && (c[0] *= i.scrollRatio.y, c[1] *= i.scrollRatio.x), s.dur = d, setTimeout(function() {
									null !== c[0] && "undefined" != typeof c[0] && "x" !== r.axis && i.overflowed[0] && (s.dir = "y", s.overwrite = "all", V(n, c[0].toString(), s)), null !== c[1] && "undefined" != typeof c[1] && "y" !== r.axis && i.overflowed[1] && (s.dir = "x", s.overwrite = "none", V(n, c[1].toString(), s))
								}, s.timeout)
							}
						})
					}
				},
				stop: function() {
					var t = f.call(this);
					return e(t).each(function() {
						var t = e(this);
						t.data(a) && N(t)
					})
				},
				disable: function(t) {
					var o = f.call(this);
					return e(o).each(function() {
						var o = e(this);
						if (o.data(a)) {
							{
								o.data(a)
							}
							j.call(this, "remove"), k.call(this), t && B.call(this), M.call(this, !0), o.addClass(d[3])
						}
					})
				},
				destroy: function() {
					var t = f.call(this);
					return e(t).each(function() {
						var n = e(this);
						if (n.data(a)) {
							var i = n.data(a),
								r = i.opt,
								l = e("#mCSB_" + i.idx),
								s = e("#mCSB_" + i.idx + "_container"),
								c = e(".mCSB_" + i.idx + "_scrollbar");
							r.live && m(r.liveSelector || e(t).selector), j.call(this, "remove"), k.call(this), B.call(this), n.removeData(a), K(this, "mcs"), c.remove(), s.find("img." + d[2]).removeClass(d[2]), l.replaceWith(s.contents()), n.removeClass(o + " _" + a + "_" + i.idx + " " + d[6] + " " + d[7] + " " + d[5] + " " + d[3]).addClass(d[4])
						}
					})
				}
			},
			f = function() {
				return "object" != typeof e(this) || e(this).length < 1 ? n : this
			},
			h = function(t) {
				var o = ["rounded", "rounded-dark", "rounded-dots", "rounded-dots-dark"],
					a = ["rounded-dots", "rounded-dots-dark", "3d", "3d-dark", "3d-thick", "3d-thick-dark", "inset", "inset-dark", "inset-2", "inset-2-dark", "inset-3", "inset-3-dark"],
					n = ["minimal", "minimal-dark"],
					i = ["minimal", "minimal-dark"],
					r = ["minimal", "minimal-dark"];
				t.autoDraggerLength = e.inArray(t.theme, o) > -1 ? !1 : t.autoDraggerLength, t.autoExpandScrollbar = e.inArray(t.theme, a) > -1 ? !1 : t.autoExpandScrollbar, t.scrollButtons.enable = e.inArray(t.theme, n) > -1 ? !1 : t.scrollButtons.enable, t.autoHideScrollbar = e.inArray(t.theme, i) > -1 ? !0 : t.autoHideScrollbar, t.scrollbarPosition = e.inArray(t.theme, r) > -1 ? "outside" : t.scrollbarPosition
			},
			m = function(e) {
				l[e] && (clearTimeout(l[e]), K(l, e))
			},
			p = function(e) {
				return "yx" === e || "xy" === e || "auto" === e ? "yx" : "x" === e || "horizontal" === e ? "x" : "y"
			},
			g = function(e) {
				return "stepped" === e || "pixels" === e || "step" === e || "click" === e ? "stepped" : "stepless"
			},
			v = function() {
				var t = e(this),
					n = t.data(a),
					i = n.opt,
					r = i.autoExpandScrollbar ? " " + d[1] + "_expand" : "",
					l = ["<div id='mCSB_" + n.idx + "_scrollbar_vertical' class='mCSB_scrollTools mCSB_" + n.idx + "_scrollbar mCS-" + i.theme + " mCSB_scrollTools_vertical" + r + "'><div class='" + d[12] + "'><div id='mCSB_" + n.idx + "_dragger_vertical' class='mCSB_dragger' style='position:absolute;' oncontextmenu='return false;'><div class='mCSB_dragger_bar' /></div><div class='mCSB_draggerRail' /></div></div>", "<div id='mCSB_" + n.idx + "_scrollbar_horizontal' class='mCSB_scrollTools mCSB_" + n.idx + "_scrollbar mCS-" + i.theme + " mCSB_scrollTools_horizontal" + r + "'><div class='" + d[12] + "'><div id='mCSB_" + n.idx + "_dragger_horizontal' class='mCSB_dragger' style='position:absolute;' oncontextmenu='return false;'><div class='mCSB_dragger_bar' /></div><div class='mCSB_draggerRail' /></div></div>"],
					s = "yx" === i.axis ? "mCSB_vertical_horizontal" : "x" === i.axis ? "mCSB_horizontal" : "mCSB_vertical",
					c = "yx" === i.axis ? l[0] + l[1] : "x" === i.axis ? l[1] : l[0],
					u = "yx" === i.axis ? "<div id='mCSB_" + n.idx + "_container_wrapper' class='mCSB_container_wrapper' />" : "",
					f = i.autoHideScrollbar ? " " + d[6] : "",
					h = "x" !== i.axis && "rtl" === n.langDir ? " " + d[7] : "";
				i.setWidth && t.css("width", i.setWidth), i.setHeight && t.css("height", i.setHeight), i.setLeft = "y" !== i.axis && "rtl" === n.langDir ? "989999px" : i.setLeft, t.addClass(o + " _" + a + "_" + n.idx + f + h).wrapInner("<div id='mCSB_" + n.idx + "' class='mCustomScrollBox mCS-" + i.theme + " " + s + "'><div id='mCSB_" + n.idx + "_container' class='mCSB_container' style='position:relative; top:" + i.setTop + "; left:" + i.setLeft + ";' dir=" + n.langDir + " /></div>");
				var m = e("#mCSB_" + n.idx),
					p = e("#mCSB_" + n.idx + "_container");
				"y" === i.axis || i.advanced.autoExpandHorizontalScroll || p.css("width", x(p)), "outside" === i.scrollbarPosition ? ("static" === t.css("position") && t.css("position", "relative"), t.css("overflow", "visible"), m.addClass("mCSB_outside").after(c)) : (m.addClass("mCSB_inside").append(c), p.wrap(u)), w.call(this);
				var g = [e("#mCSB_" + n.idx + "_dragger_vertical"), e("#mCSB_" + n.idx + "_dragger_horizontal")];
				g[0].css("min-height", g[0].height()), g[1].css("min-width", g[1].width())
			},
			x = function(t) {
				var o = [t[0].scrollWidth, Math.max.apply(Math, t.children().map(function() {
						return e(this).outerWidth(!0)
					}).get())],
					a = t.parent().width();
				return o[0] > a ? o[0] : o[1] > a ? o[1] : "100%"
			},
			_ = function() {
				var t = e(this),
					o = t.data(a),
					n = o.opt,
					i = e("#mCSB_" + o.idx + "_container");
				if (n.advanced.autoExpandHorizontalScroll && "y" !== n.axis) {
					i.css({
						width: "auto",
						"min-width": 0,
						"overflow-x": "scroll"
					});
					var r = Math.ceil(i[0].scrollWidth);
					3 === n.advanced.autoExpandHorizontalScroll || 2 !== n.advanced.autoExpandHorizontalScroll && r > i.parent().width() ? i.css({
						width: r,
						"min-width": "100%",
						"overflow-x": "inherit"
					}) : i.css({
						"overflow-x": "inherit",
						position: "absolute"
					}).wrap("<div class='mCSB_h_wrapper' style='position:relative; left:0; width:999999px;' />").css({
						width: Math.ceil(i[0].getBoundingClientRect().right + .4) - Math.floor(i[0].getBoundingClientRect().left),
						"min-width": "100%",
						position: "relative"
					}).unwrap()
				}
			},
			w = function() {
				var t = e(this),
					o = t.data(a),
					n = o.opt,
					i = e(".mCSB_" + o.idx + "_scrollbar:first"),
					r = ee(n.scrollButtons.tabindex) ? "tabindex='" + n.scrollButtons.tabindex + "'" : "",
					l = ["<a href='#' class='" + d[13] + "' oncontextmenu='return false;' " + r + " />", "<a href='#' class='" + d[14] + "' oncontextmenu='return false;' " + r + " />", "<a href='#' class='" + d[15] + "' oncontextmenu='return false;' " + r + " />", "<a href='#' class='" + d[16] + "' oncontextmenu='return false;' " + r + " />"],
					s = ["x" === n.axis ? l[2] : l[0], "x" === n.axis ? l[3] : l[1], l[2], l[3]];
				n.scrollButtons.enable && i.prepend(s[0]).append(s[1]).next(".mCSB_scrollTools").prepend(s[2]).append(s[3])
			},
			S = function() {
				var t = e(this),
					o = t.data(a),
					n = e("#mCSB_" + o.idx),
					i = e("#mCSB_" + o.idx + "_container"),
					r = [e("#mCSB_" + o.idx + "_dragger_vertical"), e("#mCSB_" + o.idx + "_dragger_horizontal")],
					l = [n.height() / i.outerHeight(!1), n.width() / i.outerWidth(!1)],
					c = [parseInt(r[0].css("min-height")), Math.round(l[0] * r[0].parent().height()), parseInt(r[1].css("min-width")), Math.round(l[1] * r[1].parent().width())],
					d = s && c[1] < c[0] ? c[0] : c[1],
					u = s && c[3] < c[2] ? c[2] : c[3];
				r[0].css({
					height: d,
					"max-height": r[0].parent().height() - 10
				}).find(".mCSB_dragger_bar").css({
					"line-height": c[0] + "px"
				}), r[1].css({
					width: u,
					"max-width": r[1].parent().width() - 10
				})
			},
			b = function() {
				var t = e(this),
					o = t.data(a),
					n = e("#mCSB_" + o.idx),
					i = e("#mCSB_" + o.idx + "_container"),
					r = [e("#mCSB_" + o.idx + "_dragger_vertical"), e("#mCSB_" + o.idx + "_dragger_horizontal")],
					l = [i.outerHeight(!1) - n.height(), i.outerWidth(!1) - n.width()],
					s = [l[0] / (r[0].parent().height() - r[0].height()), l[1] / (r[1].parent().width() - r[1].width())];
				o.scrollRatio = {
					y: s[0],
					x: s[1]
				}
			},
			C = function(e, t, o) {
				var a = o ? d[0] + "_expanded" : "",
					n = e.closest(".mCSB_scrollTools");
				"active" === t ? (e.toggleClass(d[0] + " " + a), n.toggleClass(d[1]), e[0]._draggable = e[0]._draggable ? 0 : 1) : e[0]._draggable || ("hide" === t ? (e.removeClass(d[0]), n.removeClass(d[1])) : (e.addClass(d[0]), n.addClass(d[1])))
			},
			y = function() {
				var t = e(this),
					o = t.data(a),
					n = e("#mCSB_" + o.idx),
					i = e("#mCSB_" + o.idx + "_container"),
					r = null == o.overflowed ? i.height() : i.outerHeight(!1),
					l = null == o.overflowed ? i.width() : i.outerWidth(!1),
					s = i[0].scrollHeight,
					c = i[0].scrollWidth;
				return s > r && (r = s), c > l && (l = c), [r > n.height(), l > n.width()]
			},
			B = function() {
				var t = e(this),
					o = t.data(a),
					n = o.opt,
					i = e("#mCSB_" + o.idx),
					r = e("#mCSB_" + o.idx + "_container"),
					l = [e("#mCSB_" + o.idx + "_dragger_vertical"), e("#mCSB_" + o.idx + "_dragger_horizontal")];
				if (N(t), ("x" !== n.axis && !o.overflowed[0] || "y" === n.axis && o.overflowed[0]) && (l[0].add(r).css("top", 0), V(t, "_resetY")), "y" !== n.axis && !o.overflowed[1] || "x" === n.axis && o.overflowed[1]) {
					var s = dx = 0;
					"rtl" === o.langDir && (s = i.width() - r.outerWidth(!1), dx = Math.abs(s / o.scrollRatio.x)), r.css("left", s), l[1].css("left", dx), V(t, "_resetX")
				}
			},
			T = function() {
				function t() {
					r = setTimeout(function() {
						e.event.special.mousewheel ? (clearTimeout(r), E.call(o[0])) : t()
					}, 100)
				}
				var o = e(this),
					n = o.data(a),
					i = n.opt;
				if (!n.bindEvents) {
					if (I.call(this), i.contentTouchScroll && R.call(this), D.call(this), i.mouseWheel.enable) {
						var r;
						t()
					}
					z.call(this), P.call(this), i.advanced.autoScrollOnFocus && A.call(this), i.scrollButtons.enable && H.call(this), i.keyboard.enable && U.call(this), n.bindEvents = !0
				}
			},
			k = function() {
				var t = e(this),
					o = t.data(a),
					n = o.opt,
					i = a + "_" + o.idx,
					r = ".mCSB_" + o.idx + "_scrollbar",
					l = e("#mCSB_" + o.idx + ",#mCSB_" + o.idx + "_container,#mCSB_" + o.idx + "_container_wrapper," + r + " ." + d[12] + ",#mCSB_" + o.idx + "_dragger_vertical,#mCSB_" + o.idx + "_dragger_horizontal," + r + ">a"),
					s = e("#mCSB_" + o.idx + "_container");
				n.advanced.releaseDraggableSelectors && l.add(e(n.advanced.releaseDraggableSelectors)), o.bindEvents && (e(document).unbind("." + i), l.each(function() {
					e(this).unbind("." + i)
				}), clearTimeout(t[0]._focusTimeout), K(t[0], "_focusTimeout"), clearTimeout(o.sequential.step), K(o.sequential, "step"), clearTimeout(s[0].onCompleteTimeout), K(s[0], "onCompleteTimeout"), o.bindEvents = !1)
			},
			M = function(t) {
				var o = e(this),
					n = o.data(a),
					i = n.opt,
					r = e("#mCSB_" + n.idx + "_container_wrapper"),
					l = r.length ? r : e("#mCSB_" + n.idx + "_container"),
					s = [e("#mCSB_" + n.idx + "_scrollbar_vertical"), e("#mCSB_" + n.idx + "_scrollbar_horizontal")],
					c = [s[0].find(".mCSB_dragger"), s[1].find(".mCSB_dragger")];
				"x" !== i.axis && (n.overflowed[0] && !t ? (s[0].add(c[0]).add(s[0].children("a")).css("display", "block"), l.removeClass(d[8] + " " + d[10])) : (i.alwaysShowScrollbar ? (2 !== i.alwaysShowScrollbar && c[0].css("display", "none"), l.removeClass(d[10])) : (s[0].css("display", "none"), l.addClass(d[10])), l.addClass(d[8]))), "y" !== i.axis && (n.overflowed[1] && !t ? (s[1].add(c[1]).add(s[1].children("a")).css("display", "block"), l.removeClass(d[9] + " " + d[11])) : (i.alwaysShowScrollbar ? (2 !== i.alwaysShowScrollbar && c[1].css("display", "none"), l.removeClass(d[11])) : (s[1].css("display", "none"), l.addClass(d[11])), l.addClass(d[9]))), n.overflowed[0] || n.overflowed[1] ? o.removeClass(d[5]) : o.addClass(d[5])
			},
			O = function(e) {
				var t = e.type;
				switch (t) {
					case "pointerdown":
					case "MSPointerDown":
					case "pointermove":
					case "MSPointerMove":
					case "pointerup":
					case "MSPointerUp":
						return e.target.ownerDocument !== document ? [e.originalEvent.screenY, e.originalEvent.screenX, !1] : [e.originalEvent.pageY, e.originalEvent.pageX, !1];
					case "touchstart":
					case "touchmove":
					case "touchend":
						var o = e.originalEvent.touches[0] || e.originalEvent.changedTouches[0],
							a = e.originalEvent.touches.length || e.originalEvent.changedTouches.length;
						return e.target.ownerDocument !== document ? [o.screenY, o.screenX, a > 1] : [o.pageY, o.pageX, a > 1];
					default:
						return [e.pageY, e.pageX, !1]
				}
			},
			I = function() {
				function t(e) {
					var t = m.find("iframe");
					if (t.length) {
						var o = e ? "auto" : "none";
						t.css("pointer-events", o)
					}
				}

				function o(e, t, o, a) {
					if (m[0].idleTimer = u.scrollInertia < 233 ? 250 : 0, n.attr("id") === h[1])
						var i = "x",
							r = (n[0].offsetLeft - t + a) * d.scrollRatio.x;
					else
						var i = "y",
							r = (n[0].offsetTop - e + o) * d.scrollRatio.y;
					V(l, r.toString(), {
						dir: i,
						drag: !0
					})
				}
				var n, i, r, l = e(this),
					d = l.data(a),
					u = d.opt,
					f = a + "_" + d.idx,
					h = ["mCSB_" + d.idx + "_dragger_vertical", "mCSB_" + d.idx + "_dragger_horizontal"],
					m = e("#mCSB_" + d.idx + "_container"),
					p = e("#" + h[0] + ",#" + h[1]),
					g = u.advanced.releaseDraggableSelectors ? p.add(e(u.advanced.releaseDraggableSelectors)) : p;
				p.bind("mousedown." + f + " touchstart." + f + " pointerdown." + f + " MSPointerDown." + f, function(o) {
					if (o.stopImmediatePropagation(), o.preventDefault(), Z(o)) {
						c = !0, s && (document.onselectstart = function() {
							return !1
						}), t(!1), N(l), n = e(this);
						var a = n.offset(),
							d = O(o)[0] - a.top,
							f = O(o)[1] - a.left,
							h = n.height() + a.top,
							m = n.width() + a.left;
						h > d && d > 0 && m > f && f > 0 && (i = d, r = f), C(n, "active", u.autoExpandScrollbar)
					}
				}).bind("touchmove." + f, function(e) {
					e.stopImmediatePropagation(), e.preventDefault();
					var t = n.offset(),
						a = O(e)[0] - t.top,
						l = O(e)[1] - t.left;
					o(i, r, a, l)
				}), e(document).bind("mousemove." + f + " pointermove." + f + " MSPointerMove." + f, function(e) {
					if (n) {
						var t = n.offset(),
							a = O(e)[0] - t.top,
							l = O(e)[1] - t.left;
						if (i === a)
							return;
						o(i, r, a, l)
					}
				}).add(g).bind("mouseup." + f + " touchend." + f + " pointerup." + f + " MSPointerUp." + f, function(e) {
					n && (C(n, "active", u.autoExpandScrollbar), n = null), c = !1, s && (document.onselectstart = null), t(!0)
				})
			},
			R = function() {
				function o(e) {
					if (!$(e) || c || O(e)[2])
						return void(t = 0);
					t = 1, b = 0, C = 0, d = 1, y.removeClass("mCS_touch_action");
					var o = I.offset();
					u = O(e)[0] - o.top, f = O(e)[1] - o.left, A = [O(e)[0], O(e)[1]]
				}

				function n(e) {
					if ($(e) && !c && !O(e)[2] && (e.stopImmediatePropagation(), (!C || b) && d)) {
						g = G();
						var t = M.offset(),
							o = O(e)[0] - t.top,
							a = O(e)[1] - t.left,
							n = "mcsLinearOut";
						if (D.push(o), E.push(a), A[2] = Math.abs(O(e)[0] - A[0]), A[3] = Math.abs(O(e)[1] - A[1]), B.overflowed[0])
							var i = R[0].parent().height() - R[0].height(),
								r = u - o > 0 && o - u > -(i * B.scrollRatio.y) && (2 * A[3] < A[2] || "yx" === T.axis);
						if (B.overflowed[1])
							var l = R[1].parent().width() - R[1].width(),
								h = f - a > 0 && a - f > -(l * B.scrollRatio.x) && (2 * A[2] < A[3] || "yx" === T.axis);
						r || h ? (U || e.preventDefault(), b = 1) : (C = 1, y.addClass("mCS_touch_action")), U && e.preventDefault(), w = "yx" === T.axis ? [u - o, f - a] : "x" === T.axis ? [null, f - a] : [u - o, null], I[0].idleTimer = 250, B.overflowed[0] && s(w[0], L, n, "y", "all", !0), B.overflowed[1] && s(w[1], L, n, "x", z, !0)
					}
				}

				function i(e) {
					if (!$(e) || c || O(e)[2])
						return void(t = 0);
					t = 1, e.stopImmediatePropagation(), N(y), p = G();
					var o = M.offset();
					h = O(e)[0] - o.top, m = O(e)[1] - o.left, D = [], E = []
				}

				function r(e) {
					if ($(e) && !c && !O(e)[2]) {
						d = 0, e.stopImmediatePropagation(), b = 0, C = 0, v = G();
						var t = M.offset(),
							o = O(e)[0] - t.top,
							a = O(e)[1] - t.left;
						if (!(v - g > 30)) {
							_ = 1e3 / (v - p);
							var n = "mcsEaseOut",
								i = 2.5 > _,
								r = i ? [D[D.length - 2], E[E.length - 2]] : [0, 0];
							x = i ? [o - r[0], a - r[1]] : [o - h, a - m];
							var u = [Math.abs(x[0]), Math.abs(x[1])];
							_ = i ? [Math.abs(x[0] / 4), Math.abs(x[1] / 4)] : [_, _];
							var f = [Math.abs(I[0].offsetTop) - x[0] * l(u[0] / _[0], _[0]), Math.abs(I[0].offsetLeft) - x[1] * l(u[1] / _[1], _[1])];
							w = "yx" === T.axis ? [f[0], f[1]] : "x" === T.axis ? [null, f[1]] : [f[0], null], S = [4 * u[0] + T.scrollInertia, 4 * u[1] + T.scrollInertia];
							var y = parseInt(T.contentTouchScroll) || 0;
							w[0] = u[0] > y ? w[0] : 0, w[1] = u[1] > y ? w[1] : 0, B.overflowed[0] && s(w[0], S[0], n, "y", z, !1), B.overflowed[1] && s(w[1], S[1], n, "x", z, !1)
						}
					}
				}

				function l(e, t) {
					var o = [1.5 * t, 2 * t, t / 1.5, t / 2];
					return e > 90 ? t > 4 ? o[0] : o[3] : e > 60 ? t > 3 ? o[3] : o[2] : e > 30 ? t > 8 ? o[1] : t > 6 ? o[0] : t > 4 ? t : o[2] : t > 8 ? t : o[3]
				}

				function s(e, t, o, a, n, i) {
					e && V(y, e.toString(), {
						dur: t,
						scrollEasing: o,
						dir: a,
						overwrite: n,
						drag: i
					})
				}
				var d, u, f, h, m, p, g, v, x, _, w, S, b, C, y = e(this),
					B = y.data(a),
					T = B.opt,
					k = a + "_" + B.idx,
					M = e("#mCSB_" + B.idx),
					I = e("#mCSB_" + B.idx + "_container"),
					R = [e("#mCSB_" + B.idx + "_dragger_vertical"), e("#mCSB_" + B.idx + "_dragger_horizontal")],
					D = [],
					E = [],
					L = 0,
					z = "yx" === T.axis ? "none" : "all",
					A = [],
					P = I.find("iframe"),
					H = ["touchstart." + k + " pointerdown." + k + " MSPointerDown." + k, "touchmove." + k + " pointermove." + k + " MSPointerMove." + k, "touchend." + k + " pointerup." + k + " MSPointerUp." + k],
					U = void 0 !== document.body.style.touchAction;
				I.bind(H[0], function(e) {
					o(e)
				}).bind(H[1], function(e) {
					n(e)
				}), M.bind(H[0], function(e) {
					i(e)
				}).bind(H[2], function(e) {
					r(e)
				}), P.length && P.each(function() {
					e(this).load(function() {
						W(this) && e(this.contentDocument || this.contentWindow.document).bind(H[0], function(e) {
							o(e), i(e)
						}).bind(H[1], function(e) {
							n(e)
						}).bind(H[2], function(e) {
							r(e)
						})
					})
				})
			},
			D = function() {
				function o() {
					return window.getSelection ? window.getSelection().toString() : document.selection && "Control" != document.selection.type ? document.selection.createRange().text : 0
				}

				function n(e, t, o) {
					d.type = o && i ? "stepped" : "stepless", d.scrollAmount = 10, F(r, e, t, "mcsLinearOut", o ? 60 : null)
				}
				var i, r = e(this),
					l = r.data(a),
					s = l.opt,
					d = l.sequential,
					u = a + "_" + l.idx,
					f = e("#mCSB_" + l.idx + "_container"),
					h = f.parent();
				f.bind("mousedown." + u, function(e) {
					t || i || (i = 1, c = !0)
				}).add(document).bind("mousemove." + u, function(e) {
					if (!t && i && o()) {
						var a = f.offset(),
							r = O(e)[0] - a.top + f[0].offsetTop,
							c = O(e)[1] - a.left + f[0].offsetLeft;
						r > 0 && r < h.height() && c > 0 && c < h.width() ? d.step && n("off", null, "stepped") : ("x" !== s.axis && l.overflowed[0] && (0 > r ? n("on", 38) : r > h.height() && n("on", 40)), "y" !== s.axis && l.overflowed[1] && (0 > c ? n("on", 37) : c > h.width() && n("on", 39)))
					}
				}).bind("mouseup." + u + " dragend." + u, function(e) {
					t || (i && (i = 0, n("off", null)), c = !1)
				})
			},
			E = function() {
				function t(t, a) {
					if (N(o), !L(o, t.target)) {
						var r = "auto" !== i.mouseWheel.deltaFactor ? parseInt(i.mouseWheel.deltaFactor) : s && t.deltaFactor < 100 ? 100 : t.deltaFactor || 100;
						if ("x" === i.axis || "x" === i.mouseWheel.axis)
							var d = "x",
								u = [Math.round(r * n.scrollRatio.x), parseInt(i.mouseWheel.scrollAmount)],
								f = "auto" !== i.mouseWheel.scrollAmount ? u[1] : u[0] >= l.width() ? .9 * l.width() : u[0],
								h = Math.abs(e("#mCSB_" + n.idx + "_container")[0].offsetLeft),
								m = c[1][0].offsetLeft,
								p = c[1].parent().width() - c[1].width(),
								g = t.deltaX || t.deltaY || a;
						else
							var d = "y",
								u = [Math.round(r * n.scrollRatio.y), parseInt(i.mouseWheel.scrollAmount)],
								f = "auto" !== i.mouseWheel.scrollAmount ? u[1] : u[0] >= l.height() ? .9 * l.height() : u[0],
								h = Math.abs(e("#mCSB_" + n.idx + "_container")[0].offsetTop),
								m = c[0][0].offsetTop,
								p = c[0].parent().height() - c[0].height(),
								g = t.deltaY || a;
						"y" === d && !n.overflowed[0] || "x" === d && !n.overflowed[1] || ((i.mouseWheel.invert || t.webkitDirectionInvertedFromDevice) && (g = -g), i.mouseWheel.normalizeDelta && (g = 0 > g ? -1 : 1), (g > 0 && 0 !== m || 0 > g && m !== p || i.mouseWheel.preventDefault) && (t.stopImmediatePropagation(), t.preventDefault()), V(o, (h - g * f).toString(), {
							dir: d
						}))
					}
				}
				if (e(this).data(a)) {
					var o = e(this),
						n = o.data(a),
						i = n.opt,
						r = a + "_" + n.idx,
						l = e("#mCSB_" + n.idx),
						c = [e("#mCSB_" + n.idx + "_dragger_vertical"), e("#mCSB_" + n.idx + "_dragger_horizontal")],
						d = e("#mCSB_" + n.idx + "_container").find("iframe");
					d.length && d.each(function() {
						e(this).load(function() {
							W(this) && e(this.contentDocument || this.contentWindow.document).bind("mousewheel." + r, function(e, o) {
								t(e, o)
							})
						})
					}), l.bind("mousewheel." + r, function(e, o) {
						t(e, o)
					})
				}
			},
			W = function(e) {
				var t = null;
				try {
					var o = e.contentDocument || e.contentWindow.document;
					t = o.body.innerHTML
				} catch (a) {}
				return null !== t
			},
			L = function(t, o) {
				var n = o.nodeName.toLowerCase(),
					i = t.data(a).opt.mouseWheel.disableOver,
					r = ["select", "textarea"];
				return e.inArray(n, i) > -1 && !(e.inArray(n, r) > -1 && !e(o).is(":focus"))
			},
			z = function() {
				var t = e(this),
					o = t.data(a),
					n = a + "_" + o.idx,
					i = e("#mCSB_" + o.idx + "_container"),
					r = i.parent(),
					l = e(".mCSB_" + o.idx + "_scrollbar ." + d[12]);
				l.bind("touchstart." + n + " pointerdown." + n + " MSPointerDown." + n, function(e) {
					c = !0
				}).bind("touchend." + n + " pointerup." + n + " MSPointerUp." + n, function(e) {
					c = !1
				}).bind("click." + n, function(a) {
					if (e(a.target).hasClass(d[12]) || e(a.target).hasClass("mCSB_draggerRail")) {
						N(t);
						var n = e(this),
							l = n.find(".mCSB_dragger");
						if (n.parent(".mCSB_scrollTools_horizontal").length > 0) {
							if (!o.overflowed[1])
								return;
							var s = "x",
								c = a.pageX > l.offset().left ? -1 : 1,
								u = Math.abs(i[0].offsetLeft) - .9 * c * r.width()
						} else {
							if (!o.overflowed[0])
								return;
							var s = "y",
								c = a.pageY > l.offset().top ? -1 : 1,
								u = Math.abs(i[0].offsetTop) - .9 * c * r.height()
						}
						V(t, u.toString(), {
							dir: s,
							scrollEasing: "mcsEaseInOut"
						})
					}
				})
			},
			A = function() {
				var t = e(this),
					o = t.data(a),
					n = o.opt,
					i = a + "_" + o.idx,
					r = e("#mCSB_" + o.idx + "_container"),
					l = r.parent();
				r.bind("focusin." + i, function(o) {
					var a = e(document.activeElement),
						i = r.find(".mCustomScrollBox").length,
						s = 0;
					a.is(n.advanced.autoScrollOnFocus) && (N(t), clearTimeout(t[0]._focusTimeout), t[0]._focusTimer = i ? (s + 17) * i : 0, t[0]._focusTimeout = setTimeout(function() {
						var e = [te(a)[0], te(a)[1]],
							o = [r[0].offsetTop, r[0].offsetLeft],
							i = [o[0] + e[0] >= 0 && o[0] + e[0] < l.height() - a.outerHeight(!1), o[1] + e[1] >= 0 && o[0] + e[1] < l.width() - a.outerWidth(!1)],
							c = "yx" !== n.axis || i[0] || i[1] ? "all" : "none";
						"x" === n.axis || i[0] || V(t, e[0].toString(), {
							dir: "y",
							scrollEasing: "mcsEaseInOut",
							overwrite: c,
							dur: s
						}), "y" === n.axis || i[1] || V(t, e[1].toString(), {
							dir: "x",
							scrollEasing: "mcsEaseInOut",
							overwrite: c,
							dur: s
						})
					}, t[0]._focusTimer))
				})
			},
			P = function() {
				var t = e(this),
					o = t.data(a),
					n = a + "_" + o.idx,
					i = e("#mCSB_" + o.idx + "_container").parent();
				i.bind("scroll." + n, function(t) {
					(0 !== i.scrollTop() || 0 !== i.scrollLeft()) && e(".mCSB_" + o.idx + "_scrollbar").css("visibility", "hidden")
				})
			},
			H = function() {
				var t = e(this),
					o = t.data(a),
					n = o.opt,
					i = o.sequential,
					r = a + "_" + o.idx,
					l = ".mCSB_" + o.idx + "_scrollbar",
					s = e(l + ">a");
				s.bind("mousedown." + r + " touchstart." + r + " pointerdown." + r + " MSPointerDown." + r + " mouseup." + r + " touchend." + r + " pointerup." + r + " MSPointerUp." + r + " mouseout." + r + " pointerout." + r + " MSPointerOut." + r + " click." + r, function(a) {
					function r(e, o) {
						i.scrollAmount = n.snapAmount || n.scrollButtons.scrollAmount, F(t, e, o)
					}
					if (a.preventDefault(), Z(a)) {
						var l = e(this).attr("class");
						switch (i.type = n.scrollButtons.scrollType, a.type) {
							case "mousedown":
							case "touchstart":
							case "pointerdown":
							case "MSPointerDown":
								if ("stepped" === i.type)
									return;
								c = !0, o.tweenRunning = !1, r("on", l);
								break;
							case "mouseup":
							case "touchend":
							case "pointerup":
							case "MSPointerUp":
							case "mouseout":
							case "pointerout":
							case "MSPointerOut":
								if ("stepped" === i.type)
									return;
								c = !1, i.dir && r("off", l);
								break;
							case "click":
								if ("stepped" !== i.type || o.tweenRunning)
									return;
								r("on", l)
						}
					}
				})
			},
			U = function() {
				function t(t) {
					function a(e, t) {
						r.type = i.keyboard.scrollType, r.scrollAmount = i.snapAmount || i.keyboard.scrollAmount, "stepped" === r.type && n.tweenRunning || F(o, e, t)
					}
					switch (t.type) {
						case "blur":
							n.tweenRunning && r.dir && a("off", null);
							break;
						case "keydown":
						case "keyup":
							var l = t.keyCode ? t.keyCode : t.which,
								s = "on";
							if ("x" !== i.axis && (38 === l || 40 === l) || "y" !== i.axis && (37 === l || 39 === l)) {
								if ((38 === l || 40 === l) && !n.overflowed[0] || (37 === l || 39 === l) && !n.overflowed[1])
									return;
								"keyup" === t.type && (s = "off"), e(document.activeElement).is(u) || (t.preventDefault(), t.stopImmediatePropagation(), a(s, l))
							} else if (33 === l || 34 === l) {
								if ((n.overflowed[0] || n.overflowed[1]) && (t.preventDefault(), t.stopImmediatePropagation()), "keyup" === t.type) {
									N(o);
									var f = 34 === l ? -1 : 1;
									if ("x" === i.axis || "yx" === i.axis && n.overflowed[1] && !n.overflowed[0])
										var h = "x",
											m = Math.abs(c[0].offsetLeft) - .9 * f * d.width();
									else
										var h = "y",
											m = Math.abs(c[0].offsetTop) - .9 * f * d.height();
									V(o, m.toString(), {
										dir: h,
										scrollEasing: "mcsEaseInOut"
									})
								}
							} else if ((35 === l || 36 === l) && !e(document.activeElement).is(u) && ((n.overflowed[0] || n.overflowed[1]) && (t.preventDefault(), t.stopImmediatePropagation()), "keyup" === t.type)) {
								if ("x" === i.axis || "yx" === i.axis && n.overflowed[1] && !n.overflowed[0])
									var h = "x",
										m = 35 === l ? Math.abs(d.width() - c.outerWidth(!1)) : 0;
								else
									var h = "y",
										m = 35 === l ? Math.abs(d.height() - c.outerHeight(!1)) : 0;
								V(o, m.toString(), {
									dir: h,
									scrollEasing: "mcsEaseInOut"
								})
							}
					}
				}
				var o = e(this),
					n = o.data(a),
					i = n.opt,
					r = n.sequential,
					l = a + "_" + n.idx,
					s = e("#mCSB_" + n.idx),
					c = e("#mCSB_" + n.idx + "_container"),
					d = c.parent(),
					u = "input,textarea,select,datalist,keygen,[contenteditable='true']",
					f = c.find("iframe"),
					h = ["blur." + l + " keydown." + l + " keyup." + l];
				f.length && f.each(function() {
					e(this).load(function() {
						W(this) && e(this.contentDocument || this.contentWindow.document).bind(h[0], function(e) {
							t(e)
						})
					})
				}), s.attr("tabindex", "0").bind(h[0], function(e) {
					t(e)
				})
			},
			F = function(t, o, n, i, r) {
				function l(e) {
					var o = "stepped" !== f.type,
						a = r ? r : e ? o ? p / 1.5 : g : 1e3 / 60,
						n = e ? o ? 7.5 : 40 : 2.5,
						s = [Math.abs(h[0].offsetTop), Math.abs(h[0].offsetLeft)],
						d = [c.scrollRatio.y > 10 ? 10 : c.scrollRatio.y, c.scrollRatio.x > 10 ? 10 : c.scrollRatio.x],
						u = "x" === f.dir[0] ? s[1] + f.dir[1] * d[1] * n : s[0] + f.dir[1] * d[0] * n,
						m = "x" === f.dir[0] ? s[1] + f.dir[1] * parseInt(f.scrollAmount) : s[0] + f.dir[1] * parseInt(f.scrollAmount),
						v = "auto" !== f.scrollAmount ? m : u,
						x = i ? i : e ? o ? "mcsLinearOut" : "mcsEaseInOut" : "mcsLinear",
						_ = e ? !0 : !1;
					return e && 17 > a && (v = "x" === f.dir[0] ? s[1] : s[0]), V(t, v.toString(), {
						dir: f.dir[0],
						scrollEasing: x,
						dur: a,
						onComplete: _
					}), e ? void(f.dir = !1) : (clearTimeout(f.step), void(f.step = setTimeout(function() {
						l()
					}, a)))
				}

				function s() {
					clearTimeout(f.step), K(f, "step"), N(t)
				}
				var c = t.data(a),
					u = c.opt,
					f = c.sequential,
					h = e("#mCSB_" + c.idx + "_container"),
					m = "stepped" === f.type ? !0 : !1,
					p = u.scrollInertia < 26 ? 26 : u.scrollInertia,
					g = u.scrollInertia < 1 ? 17 : u.scrollInertia;
				switch (o) {
					case "on":
						if (f.dir = [n === d[16] || n === d[15] || 39 === n || 37 === n ? "x" : "y", n === d[13] || n === d[15] || 38 === n || 37 === n ? -1 : 1], N(t), ee(n) && "stepped" === f.type)
							return;
						l(m);
						break;
					case "off":
						s(), (m || c.tweenRunning && f.dir) && l(!0)
				}
			},
			q = function(t) {
				var o = e(this).data(a).opt,
					n = [];
				return "function" == typeof t && (t = t()), t instanceof Array ? n = t.length > 1 ? [t[0], t[1]] : "x" === o.axis ? [null, t[0]] : [t[0], null] : (n[0] = t.y ? t.y : t.x || "x" === o.axis ? null : t, n[1] = t.x ? t.x : t.y || "y" === o.axis ? null : t), "function" == typeof n[0] && (n[0] = n[0]()), "function" == typeof n[1] && (n[1] = n[1]()), n
			},
			Y = function(t, o) {
				if (null != t && "undefined" != typeof t) {
					var n = e(this),
						i = n.data(a),
						r = i.opt,
						l = e("#mCSB_" + i.idx + "_container"),
						s = l.parent(),
						c = typeof t;
					o || (o = "x" === r.axis ? "x" : "y");
					var d = "x" === o ? l.outerWidth(!1) : l.outerHeight(!1),
						f = "x" === o ? l[0].offsetLeft : l[0].offsetTop,
						h = "x" === o ? "left" : "top";
					switch (c) {
						case "function":
							return t();
						case "object":
							var m = t.jquery ? t : e(t);
							if (!m.length)
								return;
							return "x" === o ? te(m)[1] : te(m)[0];
						case "string":
						case "number":
							if (ee(t))
								return Math.abs(t);
							if (-1 !== t.indexOf("%"))
								return Math.abs(d * parseInt(t) / 100);
							if (-1 !== t.indexOf("-="))
								return Math.abs(f - parseInt(t.split("-=")[1]));
							if (-1 !== t.indexOf("+=")) {
								var p = f + parseInt(t.split("+=")[1]);
								return p >= 0 ? 0 : Math.abs(p)
							}
							if (-1 !== t.indexOf("px") && ee(t.split("px")[0]))
								return Math.abs(t.split("px")[0]);
							if ("top" === t || "left" === t)
								return 0;
							if ("bottom" === t)
								return Math.abs(s.height() - l.outerHeight(!1));
							if ("right" === t)
								return Math.abs(s.width() - l.outerWidth(!1));
							if ("first" === t || "last" === t) {
								var m = l.find(":" + t);
								return "x" === o ? te(m)[1] : te(m)[0]
							}
							return e(t).length ? "x" === o ? te(e(t))[1] : te(e(t))[0] : (l.css(h, t), void u.update.call(null, n[0]))
					}
				}
			},
			j = function(t) {
				function o() {
					return clearTimeout(f[0].autoUpdate), 0 === l.parents("html").length ? void(l = null) : void(f[0].autoUpdate = setTimeout(function() {
						return c.advanced.updateOnSelectorChange && (s.poll.change.n = i(), s.poll.change.n !== s.poll.change.o) ? (s.poll.change.o = s.poll.change.n, void r(3)) : c.advanced.updateOnContentResize && (s.poll.size.n = l[0].scrollHeight + l[0].scrollWidth + f[0].offsetHeight + l[0].offsetHeight, s.poll.size.n !== s.poll.size.o) ? (s.poll.size.o = s.poll.size.n, void r(1)) : !c.advanced.updateOnImageLoad || "auto" === c.advanced.updateOnImageLoad && "y" === c.axis || (s.poll.img.n = f.find("img").length, s.poll.img.n === s.poll.img.o) ? void((c.advanced.updateOnSelectorChange || c.advanced.updateOnContentResize || c.advanced.updateOnImageLoad) && o()) : (s.poll.img.o = s.poll.img.n, void f.find("img").each(function() {
							n(this)
						}))
					}, c.advanced.autoUpdateTimeout))
				}

				function n(t) {
					function o(e, t) {
						return function() {
							return t.apply(e, arguments)
						}
					}

					function a() {
						this.onload = null, e(t).addClass(d[2]), r(2)
					}
					if (e(t).hasClass(d[2]))
						return void r();
					var n = new Image;
					n.onload = o(n, a), n.src = t.src
				}

				function i() {
					c.advanced.updateOnSelectorChange === !0 && (c.advanced.updateOnSelectorChange = "*");
					var e = 0,
						t = f.find(c.advanced.updateOnSelectorChange);
					return c.advanced.updateOnSelectorChange && t.length > 0 && t.each(function() {
						e += this.offsetHeight + this.offsetWidth
					}), e
				}

				function r(e) {
					clearTimeout(f[0].autoUpdate), u.update.call(null, l[0], e)
				}
				var l = e(this),
					s = l.data(a),
					c = s.opt,
					f = e("#mCSB_" + s.idx + "_container");
				return t ? (clearTimeout(f[0].autoUpdate), void K(f[0], "autoUpdate")) : void o()
			},
			X = function(e, t, o) {
				return Math.round(e / t) * t - o
			},
			N = function(t) {
				var o = t.data(a),
					n = e("#mCSB_" + o.idx + "_container,#mCSB_" + o.idx + "_container_wrapper,#mCSB_" + o.idx + "_dragger_vertical,#mCSB_" + o.idx + "_dragger_horizontal");
				n.each(function() {
					J.call(this)
				})
			},
			V = function(t, o, n) {
				function i(e) {
					return s && c.callbacks[e] && "function" == typeof c.callbacks[e]
				}

				function r() {
					return [c.callbacks.alwaysTriggerOffsets || _ >= w[0] + b, c.callbacks.alwaysTriggerOffsets || -y >= _]
				}

				function l() {
					var e = [h[0].offsetTop, h[0].offsetLeft],
						o = [v[0].offsetTop, v[0].offsetLeft],
						a = [h.outerHeight(!1), h.outerWidth(!1)],
						i = [f.height(), f.width()];
					t[0].mcs = {
						content: h,
						top: e[0],
						left: e[1],
						draggerTop: o[0],
						draggerLeft: o[1],
						topPct: Math.round(100 * Math.abs(e[0]) / (Math.abs(a[0]) - i[0])),
						leftPct: Math.round(100 * Math.abs(e[1]) / (Math.abs(a[1]) - i[1])),
						direction: n.dir
					}
				}
				var s = t.data(a),
					c = s.opt,
					d = {
						trigger: "internal",
						dir: "y",
						scrollEasing: "mcsEaseOut",
						drag: !1,
						dur: c.scrollInertia,
						overwrite: "all",
						callbacks: !0,
						onStart: !0,
						onUpdate: !0,
						onComplete: !0
					},
					n = e.extend(d, n),
					u = [n.dur, n.drag ? 0 : n.dur],
					f = e("#mCSB_" + s.idx),
					h = e("#mCSB_" + s.idx + "_container"),
					m = h.parent(),
					p = c.callbacks.onTotalScrollOffset ? q.call(t, c.callbacks.onTotalScrollOffset) : [0, 0],
					g = c.callbacks.onTotalScrollBackOffset ? q.call(t, c.callbacks.onTotalScrollBackOffset) : [0, 0];
				if (s.trigger = n.trigger, (0 !== m.scrollTop() || 0 !== m.scrollLeft()) && (e(".mCSB_" + s.idx + "_scrollbar").css("visibility", "visible"), m.scrollTop(0).scrollLeft(0)), "_resetY" !== o || s.contentReset.y || (i("onOverflowYNone") && c.callbacks.onOverflowYNone.call(t[0]), s.contentReset.y = 1), "_resetX" !== o || s.contentReset.x || (i("onOverflowXNone") && c.callbacks.onOverflowXNone.call(t[0]), s.contentReset.x = 1), "_resetY" !== o && "_resetX" !== o) {
					switch (!s.contentReset.y && t[0].mcs || !s.overflowed[0] || (i("onOverflowY") && c.callbacks.onOverflowY.call(t[0]), s.contentReset.x = null), !s.contentReset.x && t[0].mcs || !s.overflowed[1] || (i("onOverflowX") && c.callbacks.onOverflowX.call(t[0]), s.contentReset.x = null), c.snapAmount && (o = X(o, c.snapAmount, c.snapOffset)), n.dir) {
						case "x":
							var v = e("#mCSB_" + s.idx + "_dragger_horizontal"),
								x = "left",
								_ = h[0].offsetLeft,
								w = [f.width() - h.outerWidth(!1), v.parent().width() - v.width()],
								S = [o, 0 === o ? 0 : o / s.scrollRatio.x],
								b = p[1],
								y = g[1],
								B = b > 0 ? b / s.scrollRatio.x : 0,
								T = y > 0 ? y / s.scrollRatio.x : 0;
							break;
						case "y":
							var v = e("#mCSB_" + s.idx + "_dragger_vertical"),
								x = "top",
								_ = h[0].offsetTop,
								w = [f.height() - h.outerHeight(!1), v.parent().height() - v.height()],
								S = [o, 0 === o ? 0 : o / s.scrollRatio.y],
								b = p[0],
								y = g[0],
								B = b > 0 ? b / s.scrollRatio.y : 0,
								T = y > 0 ? y / s.scrollRatio.y : 0
					}
					S[1] < 0 || 0 === S[0] && 0 === S[1] ? S = [0, 0] : S[1] >= w[1] ? S = [w[0], w[1]] : S[0] = -S[0], t[0].mcs || (l(), i("onInit") && c.callbacks.onInit.call(t[0])), clearTimeout(h[0].onCompleteTimeout), (s.tweenRunning || !(0 === _ && S[0] >= 0 || _ === w[0] && S[0] <= w[0])) && (Q(v[0], x, Math.round(S[1]), u[1], n.scrollEasing), Q(h[0], x, Math.round(S[0]), u[0], n.scrollEasing, n.overwrite, {
						onStart: function() {
							n.callbacks && n.onStart && !s.tweenRunning && (i("onScrollStart") && (l(), c.callbacks.onScrollStart.call(t[0])), s.tweenRunning = !0, C(v), s.cbOffsets = r())
						},
						onUpdate: function() {
							n.callbacks && n.onUpdate && i("whileScrolling") && (l(), c.callbacks.whileScrolling.call(t[0]))
						},
						onComplete: function() {
							if (n.callbacks && n.onComplete) {
								"yx" === c.axis && clearTimeout(h[0].onCompleteTimeout);
								var e = h[0].idleTimer || 0;
								h[0].onCompleteTimeout = setTimeout(function() {
									i("onScroll") && (l(), c.callbacks.onScroll.call(t[0])), i("onTotalScroll") && S[1] >= w[1] - B && s.cbOffsets[0] && (l(), c.callbacks.onTotalScroll.call(t[0])), i("onTotalScrollBack") && S[1] <= T && s.cbOffsets[1] && (l(), c.callbacks.onTotalScrollBack.call(t[0])), s.tweenRunning = !1, h[0].idleTimer = 0, C(v, "hide")
								}, e)
							}
						}
					}))
				}
			},
			Q = function(e, t, o, a, n, i, r) {
				function l() {
					S.stop || (x || m.call(), x = G() - v, s(), x >= S.time && (S.time = x > S.time ? x + f - (x - S.time) : x + f - 1, S.time < x + 1 && (S.time = x + 1)), S.time < a ? S.id = h(l) : g.call())
				}

				function s() {
					a > 0 ? (S.currVal = u(S.time, _, b, a, n), w[t] = Math.round(S.currVal) + "px") : w[t] = o + "px", p.call()
				}

				function c() {
					f = 1e3 / 60, S.time = x + f, h = window.requestAnimationFrame ? window.requestAnimationFrame : function(e) {
						return s(), setTimeout(e, .01)
					}, S.id = h(l)
				}

				function d() {
					null != S.id && (window.requestAnimationFrame ? window.cancelAnimationFrame(S.id) : clearTimeout(S.id), S.id = null)
				}

				function u(e, t, o, a, n) {
					switch (n) {
						case "linear":
						case "mcsLinear":
							return o * e / a + t;
						case "mcsLinearOut":
							return e /= a, e--, o * Math.sqrt(1 - e * e) + t;
						case "easeInOutSmooth":
							return e /= a / 2, 1 > e ? o / 2 * e * e + t : (e--, -o / 2 * (e * (e - 2) - 1) + t);
						case "easeInOutStrong":
							return e /= a / 2, 1 > e ? o / 2 * Math.pow(2, 10 * (e - 1)) + t : (e--, o / 2 * (-Math.pow(2, -10 * e) + 2) + t);
						case "easeInOut":
						case "mcsEaseInOut":
							return e /= a / 2, 1 > e ? o / 2 * e * e * e + t : (e -= 2, o / 2 * (e * e * e + 2) + t);
						case "easeOutSmooth":
							return e /= a, e--, -o * (e * e * e * e - 1) + t;
						case "easeOutStrong":
							return o * (-Math.pow(2, -10 * e / a) + 1) + t;
						case "easeOut":
						case "mcsEaseOut":
						default:
							var i = (e /= a) * e,
								r = i * e;
							return t + o * (.499999999999997 * r * i + -2.5 * i * i + 5.5 * r + -6.5 * i + 4 * e)
					}
				}
				e._mTween || (e._mTween = {
					top: {},
					left: {}
				});
				var f, h, r = r || {},
					m = r.onStart || function() {},
					p = r.onUpdate || function() {},
					g = r.onComplete || function() {},
					v = G(),
					x = 0,
					_ = e.offsetTop,
					w = e.style,
					S = e._mTween[t];
				"left" === t && (_ = e.offsetLeft);
				var b = o - _;
				S.stop = 0, "none" !== i && d(), c()
			},
			G = function() {
				return window.performance && window.performance.now ? window.performance.now() : window.performance && window.performance.webkitNow ? window.performance.webkitNow() : Date.now ? Date.now() : (new Date).getTime()
			},
			J = function() {
				var e = this;
				e._mTween || (e._mTween = {
					top: {},
					left: {}
				});
				for (var t = ["top", "left"], o = 0; o < t.length; o++) {
					var a = t[o];
					e._mTween[a].id && (window.requestAnimationFrame ? window.cancelAnimationFrame(e._mTween[a].id) : clearTimeout(e._mTween[a].id), e._mTween[a].id = null, e._mTween[a].stop = 1)
				}
			},
			K = function(e, t) {
				try {
					delete e[t]
				} catch (o) {
					e[t] = null
				}
			},
			Z = function(e) {
				return !(e.which && 1 !== e.which)
			},
			$ = function(e) {
				var t = e.originalEvent.pointerType;
				return !(t && "touch" !== t && 2 !== t)
			},
			ee = function(e) {
				return !isNaN(parseFloat(e)) && isFinite(e)
			},
			te = function(e) {
				var t = e.parents(".mCSB_container");
				return [e.offset().top - t.offset().top, e.offset().left - t.offset().left]
			};
		e.fn[o] = function(t) {
			return u[t] ? u[t].apply(this, Array.prototype.slice.call(arguments, 1)) : "object" != typeof t && t ? void e.error("Method " + t + " does not exist") : u.init.apply(this, arguments)
		}, e[o] = function(t) {
			return u[t] ? u[t].apply(this, Array.prototype.slice.call(arguments, 1)) : "object" != typeof t && t ? void e.error("Method " + t + " does not exist") : u.init.apply(this, arguments)
		}, e[o].defaults = i, window[o] = !0, e(window).load(function() {
			e(n)[o](), e.extend(e.expr[":"], {
				mcsInView: e.expr[":"].mcsInView || function(t) {
					var o, a, n = e(t),
						i = n.parents(".mCSB_container");
					if (i.length)
						return o = i.parent(), a = [i[0].offsetTop, i[0].offsetLeft], a[0] + te(n)[0] >= 0 && a[0] + te(n)[0] < o.height() - n.outerHeight(!1) && a[1] + te(n)[1] >= 0 && a[1] + te(n)[1] < o.width() - n.outerWidth(!1)
				},
				mcsOverflow: e.expr[":"].mcsOverflow || function(t) {
					var o = e(t).data(a);
					if (o)
						return o.overflowed[0] || o.overflowed[1]
				}
			})
		})
	})
});;
$(function() {
	"use strict";

	function k() {
		return $("#nav-friends") && $("#nav-friends").data() ? $("#nav-friends").data().count : 0
	}

	function p() {
		return $("#nav-message") && $("#nav-message").data() ? $("#nav-message").data().count : 0
	}

	function h(n, t) {
		if (n === 0)
			return "";
		if (n < t)
			return n.toString();
		switch (t) {
			case c:
				return "1k+";
			case o:
				return "99+";
			default:
				return ""
		}
	}

	function s() {
		var r = k(),
			u = p(),
			t = u + r,
			n = $(".rbx-nav-collapse .notification-red"),
			i;
		if (t == 0 && !n.hasClass("hide")) {
			n.addClass("hide");
			return
		}
		i = h(t, o), n.html(i), t > 0 && n.removeClass("hide"), n.attr("title", t)
	}

	function l() {
		var n = "/navigation/getCount";
		$.ajax({
			url: n,
			success: function(n) {
				var i = $("#nav-friends"),
					t = i.find(".notification-blue");
				i.attr("href", n.FriendNavigationUrl), i.data("count", n.TotalFriendRequests), t.html(n.DisplayCountFriendRequests), t.attr("title", n.TotalFriendRequests), n.TotalFriendRequests > 0 ? t.removeClass("hide") : t.addClass("hide"), s(n.TotalFriendRequests)
			}
		})
	}

	function v() {
		if (Roblox && Roblox.RealTime) {
			var n = Roblox.RealTime.Factory.GetClient();
			n.Subscribe("FriendshipNotifications", function(n) {
				switch (n.Type) {
					case "FriendshipCreated":
					case "FriendshipDestroyed":
					case "FriendshipDeclined":
					case "FriendshipRequested":
						l()
				}
			})
		}
	}

	function b(n) {
		var i = $('[data-behavior="univeral-search"] .rbx-navbar-search-option'),
			t = -1;
		$.each(i, function(n, i) {
			$(i).hasClass("selected") && ($(i).removeClass("selected"), t = n)
		}), t += n.which === 38 ? i.length - 1 : 1, t %= i.length, $(i[t]).addClass("selected")
	}
	var i, e;
	($(".rbx-left-col").length == 0 || $(".rbx-left-col").width() == 0) && ($("#header-login").length != 0 || $("#GamesListsContainer").length != 0) && ($("#navContent").css({
		"margin-left": "0px",
		width: "100%"
	}), $("#navContent").addClass("nav-no-left")), $(window).resize(function() {
		($(".rbx-left-col").length == 0 || $(".rbx-left-col").width() == 0) && ($("#header-login").length != 0 || $("#GamesListsContainer").length != 0) ? ($("#navContent").css({
			"margin-left": "0px",
			width: "100%"
		}), $("#navContent").addClass("nav-no-left")) : $("#navContent").css({
			"margin-left": "",
			width: ""
		})
	});
	var o = 99,
		c = 1e3,
		r = 1;
	$(document).on("Roblox.Messages.CountChanged", function() {
		var n = Roblox.websiteLinks.GetMyUnreadMessagesCountLink;
		$.ajax({
			url: n,
			success: function(n) {
				var r = $("#nav-message"),
					t = $("#nav-message span.notification-blue"),
					i;
				r.data("count", n.count), i = h(n.count, c), t.html(i), t.attr("title", n.count), n.count > 0 ? t.removeClass("hide") : t.addClass("hide"), s()
			}
		})
	});
	i = $("#header"), i && i.data("isfriendshiprealtimeupdateenabled") && v();
	$(document).on("Roblox.Friends.CountChanged", function() {
		l()
	});
	$('[data-behavior="nav-notification"]').click(function() {
		$('[data-behavior="left-col"]').toggleClass("nav-show", 100)
	});
	var t = $("#navbar-universal-search"),
		n = $("#navbar-universal-search #navbar-search-input"),
		u = $("#navbar-universal-search .rbx-navbar-search-option"),
		w = $("#navbar-universal-search #navbar-search-btn");
	n.on("keydown", function(n) {
		var t = $(this).val();
		(n.which === 9 || n.which === 38 || n.which === 40) && t.length > 0 && (n.stopPropagation(), n.preventDefault(), b(n))
	});
	n.on("keyup", function(n) {
		var i = $(this).val(),
			u, f;
		n.which === 13 ? (n.stopPropagation(), n.preventDefault(), u = t.find(".rbx-navbar-search-option.selected"), f = u.data("searchurl"), i.length >= r && (window.location = f + encodeURIComponent(i))) : i.length > 0 ? (t.toggleClass("rbx-navbar-search-open", !0), $('[data-toggle="dropdown-menu"] .rbx-navbar-search-string').text('"' + i + '"')) : t.toggleClass("rbx-navbar-search-open", !1)
	});
	w.click(function(t) {
		t.stopPropagation(), t.preventDefault();
		var i = n.val(),
			u = $("#navbar-universal-search .rbx-navbar-search-option.selected"),
			f = u.data("searchurl");
		i.length >= r && (window.location = f + encodeURIComponent(i))
	});
	u.on("click touchstart", function(t) {
		var i, u;
		t.stopPropagation(), i = n.val(), i.length >= r && (u = $(this).data("searchurl"), window.location = u + encodeURIComponent(i))
	});
	u.on("mouseover", function() {
		u.removeClass("selected"), $(this).addClass("selected")
	});
	n.on("focus", function() {
		var i = n.val();
		i.length > 0 && t.addClass("rbx-navbar-search-open")
	});
	$('[data-toggle="toggle-search"]').on("click touchstart", function(n) {
		return n.stopPropagation(), $('[data-behavior="univeral-search"]').toggleClass("show"), !1
	});
	$(".rbx-navbar-right").on("click touchstart", '[data-behavior="logout"]', function(n) {
		var i, t;
		n.stopPropagation(), n.preventDefault(), i = $(this), typeof angular == "undefined" || angular.isUndefined(angular.element("#chat-container").scope()) || (t = angular.element("#chat-container").scope(), t.$digest(t.$broadcast("Roblox.Chat.destroyChatCookie"))), $.post(i.attr("data-bind"), {
			redirectTohome: !1
		}, function() {
			var t = Roblox && Roblox.Endpoints ? Roblox.Endpoints.getAbsoluteUrl("/") : "/";
			window.location.href = t
		})
	});
	$("#nav-robux-icon").on("show.bs.popover", function() {
		$("body").scrollLeft(0)
	});
	e = function(n) {
		var t, i;
		n.indexOf("resize") != -1 && (t = n.split(","), $("#iframe-login").css({
			height: t[1]
		})), n.indexOf("fbRegister") != -1 && (t = n.split("^"), i = "&fbname=" + encodeURIComponent(t[1]) + "&fbem=" + encodeURIComponent(t[2]) + "&fbdt=" + encodeURIComponent(t[3]), window.location.href = "../Login/Default.aspx?iFrameFacebookSync=true" + i)
	}, $.receiveMessage(function(n) {
		e(n.data)
	});
	$("body").on("click touchstart", function(n) {
		$('[data-behavior="univeral-search"]').each(function() {
			$(this).is(n.target) || $(this).has(n.target).length !== 0 || $(this).removeClass("rbx-navbar-search-open"), $(this).has(n.target).length === 0 && $('[data-toggle="toggle-search"]').has(n.target).length === 0 && $('[data-behavior="univeral-search"]').css("display") === "block" && $('[data-behavior="univeral-search"]').removeClass("show")
		}), $(n.target).closest("#iFrameLogin").length || $(n.target).is("#iFrameLogin") || $(n.target).closest("#head-login").length || $(n.target).is("#head-login") || $("#iFrameLogin").hasClass("show") && $("#iFrameLogin").removeClass("show")
	});
	var f = function() {
			$("#header-login").click(function() {
				var t = {
					onSignupSuccess: function() {
						window.location.reload()
					},
					onLoginSuccess: function() {
						window.location.reload()
					},
					sectionType: Roblox.SignupOrLogin.SectionType.login
				};
				Roblox.SignupOrLoginModal.show(t)
			}), $("#header-signup").click(function() {
				var t = {
					onSignupSuccess: function() {
						window.location.reload()
					},
					onLoginSuccess: function() {
						window.location.reload()
					},
					sectionType: Roblox.SignupOrLogin.SectionType.signup
				};
				Roblox.SignupOrLoginModal.show(t)
			})
		},
		y = function() {
			$("#head-login").click(function() {
				if ($("#iFrameLogin").toggleClass("show"), $("#iFrameLogin").hasClass("show")) {
					var t = $("#head-login").offset().left - $("#iFrameLogin").offset().left - 250;
					t > 0 && $("#iFrameLogin").css("left", t)
				}
			})
		},
		a = $("#signupOrLoginIframe");
	a.length ? a.load(function() {
		f()
	}) : f(), y()
});;
var Roblox = Roblox || {};
Roblox.BootstrapWidgets = function() {
	function i() {
		$("#horizontal-tabs a").on("click", function(n) {
			n.preventDefault(), $(this).tab("show")
		});
		$("#horizontal-tabs a").on("touchstart", function(n) {
			n.preventDefault(), $(this).trigger("click")
		});
		$("#vertical-tabs a").click(function(n) {
			n.preventDefault(), $(this).tab("show")
		})
	}

	function b() {
		$('[data-toggle="dropdown-menu"] li').click(function(n) {
			var t = $(n.currentTarget);
			return t.closest(".input-group-btn").find('[data-bind="label"]').text(t.text()).end().toggleClass("open"), !1
		})
	}

	function w() {
		$('[data-toggle="collapsible-element"]').on("show.bs.collapse", function(n) {
			$(n.target).prev(".panel-heading").find(".icon-down-16x16").removeClass("icon-down-16x16").addClass("icon-up-16x16")
		});
		$('[data-toggle="collapsible-element"]').on("hide.bs.collapse", function(n) {
			$(n.target).prev(".panel-heading").find(".icon-up-16x16").removeClass("icon-up-16x16").addClass("icon-down-16x16")
		})
	}

	function p() {
		if ("ontouchstart" in window)
			$('[data-toggle-mobile="true"]').tooltip({
				placement: "bottom",
				trigger: "manual"
			}).unbind().on("touchstart", function() {
				$(this).tooltip("toggle")
			});
		else
			$('[data-toggle="tooltip"]').tooltip({
				placement: "bottom"
			})
	}

	function y(n, t) {
		$(n).attr("title", t).tooltip("fixTitle")
	}

	function v() {
		$("body").on("click touchstart", function(n) {
			$('[data-toggle="tooltip"]').each(function() {
				if (!$(this).is(n.target) && $(this).has(n.target).length === 0) {
					var t = n.type === "click" ? !0 : $(".tooltip").has(n.target).length === 0;
					t && $(this).tooltip("hide")
				}
			})
		})
	}

	function a(n, t) {
		n || (n = "bottom"), t || (t = {
			selector: "body",
			padding: 4
		});
		$("[data-toggle='popover']").popover({
			trigger: "manual",
			html: !0,
			placement: n,
			viewport: t,
			content: function() {
				var n = $(this).attr("data-bind");
				return $('[data-toggle="' + n + '"]').html()
			}
		}).unbind().on("click", function() {
			$(this).popover("toggle")
		})
	}

	function l() {
		$("body").on("click touchstart", function(n) {
			$('[data-toggle="popover"]').each(function() {
				if (!$(this).is(n.target) && $(this).has(n.target).length === 0) {
					var t = n.type === "click" ? !0 : $(".popover").has(n.target).length === 0;
					t && $(this).popover("hide")
				}
			})
		})
	}

	function c() {
		$('[data-toggle="scrollbar"]').mCustomScrollbar({
			autoHideScrollbar: !1,
			autoExpandScrollbar: !1,
			scrollInertia: 0,
			mouseWheel: {
				preventDefault: !0
			}
		})
	}

	function h() {
		var n = $('[data-toggle="pagination"]'),
			t = $('[data-toggle="pager"]');
		(n.twbsPagination || t.twbsPagination) && (n.twbsPagination({
			totalPages: 35,
			visiblePages: 7,
			first: 1,
			last: 35,
			prev: '<span class="icon-left"></span>',
			next: '<span class="icon-right"></span>'
		}), t.twbsPagination({
			isPager: !0,
			totalPages: 35,
			visiblePages: 7,
			first: '<span class="icon-first-page"></span>',
			last: '<span class="icon-last-page"></span>',
			prev: '<span class="icon-left"></span>',
			next: '<span class="icon-right"></span>'
		}))
	}

	function n(n, t, i, r) {
		if (typeof n != "undefined") {
			var u, f;
			r && (u = n.clone(), u.html(r), n.after(u), f = n.detach()), t = typeof t == "undefined" ? 200 : t, i = typeof i == "undefined" ? 3e3 : i, setTimeout(function() {
				u ? u.addClass("on") : n.addClass("on")
			}, t), setTimeout(function() {
				u ? u.removeClass("on") : n.removeClass("on"), u && f && (u.after(f), u.remove())
			}, i)
		}
	}

	function s() {
		$("#toggle-alert-loading").click(function() {
			n($(".sg-alert-section .alert-loading"), 100, 1e3)
		}), $("#toggle-alert-success").click(function() {
			n($(".sg-alert-section .alert-success"), 100, 1e3)
		}), $("#toggle-alert-warning").click(function() {
			var n = $(".sg-alert-section .alert-warning"),
				t;
			setTimeout(function() {
				n.addClass("on")
			}, 100), t = $(".alert-system-feedback #close"), t.click(function() {
				n.removeClass("on")
			})
		})
	}

	function o() {
		$("input[placeholder]").focus(function() {
			var n = $(this);
			n.val() == n.attr("placeholder") && (n.val(""), n.removeClass("rbx-placeholder"))
		}).blur(function() {
			var n = $(this);
			(n.val() == "" || n.val() == n.attr("placeholder")) && (n.addClass("rbx-placeholder"), n.val(n.attr("placeholder")))
		})
	}

	function f() {
		e.each(function() {
			var i = $(this),
				n = $(this).clone().hide().height("auto");
			n.width(i.width()), $("body").append(n), n.height() <= i.height() && (i.removeClass(t), $(this).find(".toggle-para").hide()), n.remove()
		})
	}

	function u(n, t) {
		var i = "para-overflow-toggle",
			r = $("." + i),
			u = "para-height",
			f = "para-overflow-page-loading";
		n = n ? n : 24, t = t ? t : 5, $(".toggle-para").show(), r.each(function() {
			var r = $(this),
				e = $(this).clone().hide().height("auto"),
				o;
			e.width(r.width()), $("body").append(e), o = n * t, (e.height() <= o || e.height() <= r.height()) && (r.removeClass(i).removeClass(u), r.find(".toggle-para").last().hide()), r.removeClass(f), e.remove()
		})
	}

	function r(n, t) {
		var i = "para-overflow-toggle-off",
			r = "para-height";
		n || (n = "Read More"), t || (t = "Show Less"), $(".toggle-para").bind("click touchstart", function() {
			var u = $(".para-overflow-toggle");
			$(this).text() === n ? (u.removeClass(r).addClass(i), $(this).text(t)) : (u.removeClass(i).addClass(r), $(this).text(n))
		})
	}

	function k(n) {
		n = n ? n : "#carousel", $(n).carousel({
			interval: 6e3,
			pause: "hover"
		})
	}

	function d() {
		$(".btn-toggle").bind("click", function() {
			if ($(this).hasClass("disabled"))
				return !1;
			$(this).toggleClass("on"), $(this).trigger("toggleBtnClick", {
				id: $(this).attr("id"),
				toggleOn: $(this).hasClass("on")
			})
		})
	}
	var t = "para-overflow",
		e = $("." + t);
	return {
		SetupTabs: i,
		SetupDropdown: b,
		SetupAccordion: w,
		SetupTooltip: p,
		UpdateTooltip: y,
		CloseTooltip: v,
		SetupPopover: a,
		ClosePopover: l,
		SetupScrollbar: c,
		SetupPagination: h,
		Placeholder: o,
		IsTruncated: f,
		TruncateParagraph: u,
		ToggleParagraph: r,
		SetupCarousel: k,
		SetupToggleButton: d,
		SetupSystemFeedback: s,
		ToggleSystemMessage: n
	}
}(), $(function() {
	Roblox.BootstrapWidgets.SetupTabs(), Roblox.BootstrapWidgets.SetupDropdown(), Roblox.BootstrapWidgets.SetupAccordion(), Roblox.BootstrapWidgets.SetupTooltip(), Roblox.BootstrapWidgets.CloseTooltip(), Roblox.BootstrapWidgets.SetupPopover(), Roblox.BootstrapWidgets.ClosePopover(), Roblox.BootstrapWidgets.SetupScrollbar(), Roblox.BootstrapWidgets.SetupPagination(), typeof Modernizr == "undefined" || Modernizr.input.placeholder || Roblox.BootstrapWidgets.Placeholder(), Roblox.BootstrapWidgets.IsTruncated(), Roblox.BootstrapWidgets.TruncateParagraph(), Roblox.BootstrapWidgets.ToggleParagraph(), Roblox.BootstrapWidgets.SetupCarousel(), Roblox.BootstrapWidgets.SetupToggleButton(), Roblox.BootstrapWidgets.SetupSystemFeedback(), Roblox.BootstrapWidgets.ToggleSystemMessage()
});;
typeof Roblox == "undefined" && (Roblox = {}), typeof Roblox.CookieUpgrader == "undefined" && (Roblox.CookieUpgrader = {}), Roblox.CookieUpgrader.domain = "", Roblox.CookieUpgrader.oneMonthInMs = 2592e6, Roblox.CookieUpgrader.upgrade = function(n, t) {
	function e(n) {
		var u = null,
			i, t, r;
		if (document.cookie && document.cookie !== "")
			for (i = document.cookie.split(";"), t = 0; t < i.length; t++)
				if (r = jQuery.trim(i[t]), r.substring(0, n.length + 1) === n + "=") {
					u = r.substring(n.length + 1);
					break
				}
		return u
	}
	var i, o, r, f, s, u, h;
	if (Roblox.CookieUpgrader.domain !== "" && (i = e(n), i != null))
		try {
			if (o = document.cookie.length, document.cookie = n + "=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/", document.cookie = n + "=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/; domain=" + window.location.host, document.cookie.length === o)
				return;
			if (r = n, typeof t.newCookieName != "undefined" && (r = t.newCookieName), f = e(n), f != null) {
				typeof GoogleAnalyticsEvents != "undefined" && GoogleAnalyticsEvents.FireEvent(["CookieUpgrader", "DeletedRedundantCookie", n]), s = {
					cookieName: n,
					cookieValue: f
				}, Roblox.EventStream && Roblox.EventStream.SendEventWithTarget("CookieUpgrader", "DeletedRedundantCookie", s, Roblox.EventStream.TargetTypes.DIAGNOSTIC);
				return
			}
			u = r + "=" + i + "; ", u += "expires=" + t.expires(i).toUTCString() + "; ", u += "path=/; domain=" + Roblox.CookieUpgrader.domain, document.cookie = u, typeof GoogleAnalyticsEvents != "undefined" && GoogleAnalyticsEvents.FireEvent(["CookieUpgrader", "ConvertedCookie", n]), h = {
				cookieName: n,
				cookieValue: i,
				newCookieName: r
			}, Roblox.EventStream && Roblox.EventStream.SendEventWithTarget("CookieUpgrader", "ConvertedCookie", h, Roblox.EventStream.TargetTypes.DIAGNOSTIC)
		} catch (c) {
			typeof GoogleAnalyticsEvents != "undefined" && GoogleAnalyticsEvents.FireEvent(["CookieUpgrader", "ExceptionDuringConvertOf" + n, c.message])
		}
}, Roblox.CookieUpgrader.getExpirationFromCookieValue = function(n, t) {
	var f = new RegExp(n + "=(\\d+)/(\\d+)/(\\d+)"),
		i = t.match(f),
		u = +new Date,
		r;
	return i != null && i.length != 0 && (r = new Date(i[3], i[1] - 1, i[2]), isNaN(r.getTime()) || (u = r.getTime())), new Date(u + Roblox.CookieUpgrader.oneMonthInMs)
}, Roblox.CookieUpgrader.thirtyDaysFromNow = function() {
	return new Date(+new Date + Roblox.CookieUpgrader.oneMonthInMs)
}, Roblox.CookieUpgrader.thirtyYearsFromNow = function() {
	return new Date(+new Date + 94608e7)
}, Roblox.CookieUpgrader.fourHoursFromNow = function() {
	return new Date(+new Date + 144e5)
};;
typeof Roblox == "undefined" && (Roblox = {}), typeof Roblox.GamePlayEvents == "undefined" && (Roblox.GamePlayEvents = function() {
	function i() {
		var n = window.location.pathname.toLowerCase(),
			t = "profile",
			i = n.lastIndexOf(t);
		return i !== -1 && n.length === i + t.length ? t : n.indexOf("/develop") != -1 ? "develop" : "gameDetail"
	}

	function r(n) {
		var t = $("#PlaceLauncherStatusPanel");
		return {
			lType: t && t.data("is-protocol-handler-launch-enabled") && t.data("is-protocol-handler-launch-enabled").toLowerCase() == "true" ? "protocol" : "plugin",
			pid: n,
			pg: i()
		}
	}

	function n(n, i, u) {
		Roblox.EventStream && (i != null && i != "" && i != "unknown" ? t.lastContext = i : i = t.lastContext, Roblox.EventStream.SendEvent(n, i, r(u)))
	}

	function u(t, i) {
		n("gamePlayIntent", t, i), $(document).trigger("playButton:gamePlayIntent")
	}

	function f(t, i) {
		n("developIntent", t, i)
	}

	function e(t, i) {
		n("installBegin", t, i)
	}

	function o(t, i) {
		n("installSuccess", t, i)
	}

	function s(t, i) {
		n("clientStartAttempt", t, i)
	}

	function h(t, i) {
		n("clientStartSuccessWeb", t, i)
	}
	var t = {
		SendGamePlayIntent: u,
		SendDevelopIntent: f,
		SendInstallBegin: e,
		SendInstallSuccess: o,
		SendClientStartAttempt: s,
		SendClientStartSuccessWeb: h,
		lastContext: "unknown"
	};
	return t
}()), $(function() {
	$("body").on("mousedown", ".VisitButtonPlay, .VisitButtonPlayGLI, .profile-join-game", function() {
		var n, t = $(this),
			i;
		t.hasClass("VisitButtonPlay") || t.hasClass("VisitButtonPlayGLI") ? n = "PlayButton" : t.hasClass("profile-join-game") && (n = "JoinUser"), n && (i = $(this).attr("placeid"), Roblox.GamePlayEvents.SendGamePlayIntent(n, i))
	});
	$("body").on("mousedown", ".VisitButtonEdit, .VisitButtonEditGLI", function() {
		var n = $(this).attr("placeid");
		Roblox.GamePlayEvents.SendDevelopIntent("Edit", n)
	});
	$("#rbx-running-games").on("mousedown", ".rbx-game-server-item .rbx-game-server-join", function() {
		var n = $(this).data("placeid");
		n && Roblox.GamePlayEvents.SendGamePlayIntent("JoinInstance", n)
	});
	$("#game-instances").on("mousedown", "#rbx-vip-servers .rbx-vip-server-item .rbx-vip-server-join", function() {
		var n = $(this).data("placeid");
		n && Roblox.GamePlayEvents.SendGamePlayIntent("PrivateServer", n)
	});
	$("#build-page").on("mousedown", ".roblox-edit-button", function() {
		var n = $(this).parents("table.item-table").data("item-id");
		n && Roblox.GamePlayEvents.SendDevelopIntent("Edit", n)
	})
});;
"modal" in $.fn && "noConflict" in $.fn.modal && ($.fn.bootstrapModal = $.fn.modal.noConflict()), $(function() {
	$(".ie8 input[type=password]").attr("placeholder", "Password"), $("input, textarea").placeholder()
});;
(function(n) {
	function t(n, t) {
		return typeof n == "function" ? n.call(t) : n
	}

	function r(n) {
		while (n = n.parentNode)
			if (n == document)
				return !0;
		return !1
	}

	function i(t, i) {
		this.$element = n(t), this.options = i, this.enabled = !0, this.fixTitle()
	}
	i.prototype = {
		show: function() {
			var s = this.getTitle(),
				r;
			if (s && this.enabled) {
				r = this.tip(), r.find(".tipsy-inner")[this.options.html ? "html" : "text"](s), r[0].className = "tipsy", r.remove().css({
					top: 0,
					left: 0,
					visibility: "hidden",
					display: "block"
				}).prependTo(document.body);
				var i = n.extend({}, this.$element.offset(), {
						width: this.$element[0].offsetWidth,
						height: this.$element[0].offsetHeight
					}),
					e = r[0].offsetWidth,
					o = r[0].offsetHeight,
					f = t(this.options.gravity, this.$element[0]),
					u;
				switch (f.charAt(0)) {
					case "n":
						u = {
							top: i.top + i.height + this.options.offset,
							left: i.left + i.width / 2 - e / 2
						};
						break;
					case "s":
						u = {
							top: i.top - o - this.options.offset,
							left: i.left + i.width / 2 - e / 2
						};
						break;
					case "e":
						u = {
							top: i.top + i.height / 2 - o / 2,
							left: i.left - e - this.options.offset
						};
						break;
					case "w":
						u = {
							top: i.top + i.height / 2 - o / 2,
							left: i.left + i.width + this.options.offset
						}
				}
				f.length == 2 && (u.left = f.charAt(1) == "w" ? i.left + i.width / 2 - 15 : i.left + i.width / 2 - e + 15), r.css(u).addClass("tipsy-" + f), r.find(".tipsy-arrow")[0].className = "tipsy-arrow tipsy-arrow-" + f.charAt(0), this.options.className && r.addClass(t(this.options.className, this.$element[0])), this.options.fade ? r.stop().css({
					opacity: 0,
					display: "block",
					visibility: "visible"
				}).animate({
					opacity: this.options.opacity
				}) : r.css({
					visibility: "visible",
					opacity: this.options.opacity
				})
			}
		},
		hide: function() {
			this.options.fade ? this.tip().stop().fadeOut(function() {
				n(this).remove()
			}) : this.tip().remove()
		},
		fixTitle: function() {
			var n = this.$element;
			(n.attr("title") || typeof n.attr("original-title") != "string") && n.attr("original-title", n.attr("title") || "").removeAttr("title")
		},
		getTitle: function() {
			var i = this.$element,
				n = this.options,
				t;
			return this.fixTitle(), n = this.options, typeof n.title == "string" ? t = i.attr(n.title == "title" ? "original-title" : n.title) : typeof n.title == "function" && (t = n.title.call(i[0])), t = ("" + t).replace(/(^\s*|\s*$)/, ""), t || n.fallback
		},
		tip: function() {
			return this.$tip || (this.$tip = n('<div class="tipsy"></div>').html('<div class="tipsy-arrow"></div><div class="tipsy-inner"></div>'), this.$tip.data("tipsy-pointee", this.$element[0])), this.$tip
		},
		validate: function() {
			this.$element[0].parentNode || (this.hide(), this.$element = null, this.options = null)
		},
		enable: function() {
			this.enabled = !0
		},
		disable: function() {
			this.enabled = !1
		},
		toggleEnabled: function() {
			this.enabled = !this.enabled
		}
	}, n.fn.tipsy = function(t) {
		function u(r) {
			var u = n.data(r, "tipsy");
			return u || (u = new i(r, n.fn.tipsy.elementOptions(r, t)), n.data(r, "tipsy", u)), u
		}

		function e() {
			var n = u(this);
			n.hoverState = "in", t.delayIn == 0 ? n.show() : (n.fixTitle(), setTimeout(function() {
				n.hoverState == "in" && n.show()
			}, t.delayIn))
		}

		function o() {
			var n = u(this);
			n.hoverState = "out", t.delayOut == 0 ? n.hide() : setTimeout(function() {
				n.hoverState == "out" && n.hide()
			}, t.delayOut)
		}
		var r;
		if (t === !0)
			return this.data("tipsy");
		if (typeof t == "string")
			return r = this.data("tipsy"), r && r[t](), this;
		if (t = n.extend({}, n.fn.tipsy.defaults, t), t.live || this.each(function() {
				u(this)
			}), t.trigger != "manual") {
			var f = t.live ? "live" : "bind",
				s = t.trigger == "hover" ? "mouseenter" : "focus",
				h = t.trigger == "hover" ? "mouseleave" : "blur";
			this[f](s, e)[f](h, o)
		}
		return this
	}, n.fn.tipsy.defaults = {
		className: null,
		delayIn: 0,
		delayOut: 0,
		fade: !1,
		fallback: "",
		gravity: "n",
		html: !1,
		live: !1,
		offset: 0,
		opacity: .8,
		title: "title",
		trigger: "hover"
	}, n.fn.tipsy.revalidate = function() {
		n(".tipsy").each(function() {
			var t = n.data(this, "tipsy-pointee");
			t && r(t) || n(this).remove()
		})
	}, n.fn.tipsy.elementOptions = function(t, i) {
		return n.metadata ? n.extend({}, i, n(t).metadata()) : i
	}, n.fn.tipsy.autoNS = function() {
		return n(this).offset().top > n(document).scrollTop() + n(window).height() / 2 ? "s" : "n"
	}, n.fn.tipsy.autoWE = function() {
		return n(this).offset().left > n(document).scrollLeft() + n(window).width() / 2 ? "e" : "w"
	}, n.fn.tipsy.autoBounds = function(t, i) {
		return function() {
			var r = {
					ns: i[0],
					ew: i.length > 1 ? i[1] : !1
				},
				f = n(document).scrollTop() + t,
				e = n(document).scrollLeft() + t,
				u = n(this);
			return u.offset().top < f && (r.ns = "n"), u.offset().left < e && (r.ew = "w"), n(window).width() + n(document).scrollLeft() - u.offset().left < t && (r.ew = "e"), n(window).height() + n(document).scrollTop() - u.offset().top < t && (r.ns = "s"), r.ns + (r.ew ? r.ew : "")
		}
	}
})(jQuery);;
$.extend(String.prototype, function() {
	function n() {
		return this.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#39;")
	}
	return {
		escapeHTML: n
	}
}());;

function InitStringTruncator() {
	isInitialized || (fitStringSpan = document.createElement("span"), fitStringSpan.style.display = "inline-block", fitStringSpan.style.visibility = "hidden", fitStringSpan.style.height = "0px", fitStringSpan.style.padding = "0px", document.body.appendChild(fitStringSpan), isInitialized = !0)
}

function fitStringToWidth(n, t, i) {
	function o(n) {
		return n.replace("<", "&lt;").replace(">", "&gt;")
	}
	var u, r, f, e, s;
	if (isInitialized || InitStringTruncator(), i && (fitStringSpan.className = i), u = o(n), fitStringSpan.innerHTML = u, fitStringSpan.offsetWidth > t) {
		for (r = 0, e = n.length; s = e - r >> 1;)
			f = r + s, fitStringSpan.innerHTML = o(n.substring(0, f)) + "&hellip;", fitStringSpan.offsetWidth > t ? e = f : r = f;
		u = n.substring(0, r) + "&hellip;"
	}
	return u
}

function fitStringToWidthSafe(n, t, i) {
	var r = fitStringToWidth(n, t, i),
		u;
	return r.indexOf("&hellip;") != -1 && (u = r.lastIndexOf(" "), u != -1 && u + 10 <= r.length && (r = r.substring(0, u + 2) + "&hellip;")), r
}

function fitStringToWidthSafeText(n, t, i) {
	return fitStringToWidthSafe(n, t, i).replace("&hellip;", "...")
}
var isInitialized = !1,
	fitStringSpan = null;;
var JSON;
if (!JSON) {
	JSON = {};
}
(function() {
	"use strict";

	function f(n) {
		return n < 10 ? '0' + n : n;
	}
	if (typeof Date.prototype.toJSON !== 'function') {
		Date.prototype.toJSON = function(key) {
			return isFinite(this.valueOf()) ? this.getUTCFullYear() + '-' + f(this.getUTCMonth() + 1) + '-' + f(this.getUTCDate()) + 'T' + f(this.getUTCHours()) + ':' + f(this.getUTCMinutes()) + ':' + f(this.getUTCSeconds()) + 'Z' : null;
		};
		String.prototype.toJSON = Number.prototype.toJSON = Boolean.prototype.toJSON = function(key) {
			return this.valueOf();
		};
	}
	var cx = /[\u0000\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,
		escapable = /[\\\"\x00-\x1f\x7f-\x9f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,
		gap, indent, meta = {
			'\b': '\\b',
			'\t': '\\t',
			'\n': '\\n',
			'\f': '\\f',
			'\r': '\\r',
			'"': '\\"',
			'\\': '\\\\'
		},
		rep;

	function quote(string) {
		escapable.lastIndex = 0;
		return escapable.test(string) ? '"' + string.replace(escapable, function(a) {
			var c = meta[a];
			return typeof c === 'string' ? c : '\\u' + ('0000' + a.charCodeAt(0).toString(16)).slice(-4);
		}) + '"' : '"' + string + '"';
	}

	function str(key, holder) {
		var i, k, v, length, mind = gap,
			partial, value = holder[key];
		if (value && typeof value === 'object' && typeof value.toJSON === 'function') {
			value = value.toJSON(key);
		}
		if (typeof rep === 'function') {
			value = rep.call(holder, key, value);
		}
		switch (typeof value) {
			case 'string':
				return quote(value);
			case 'number':
				return isFinite(value) ? String(value) : 'null';
			case 'boolean':
			case 'null':
				return String(value);
			case 'object':
				if (!value) {
					return 'null';
				}
				gap += indent;
				partial = [];
				if (Object.prototype.toString.apply(value) === '[object Array]') {
					length = value.length;
					for (i = 0; i < length; i += 1) {
						partial[i] = str(i, value) || 'null';
					}
					v = partial.length === 0 ? '[]' : gap ? '[\n' + gap + partial.join(',\n' + gap) + '\n' + mind + ']' : '[' + partial.join(',') + ']';
					gap = mind;
					return v;
				}
				if (rep && typeof rep === 'object') {
					length = rep.length;
					for (i = 0; i < length; i += 1) {
						k = rep[i];
						if (typeof k === 'string') {
							v = str(k, value);
							if (v) {
								partial.push(quote(k) + (gap ? ': ' : ':') + v);
							}
						}
					}
				} else {
					for (k in value) {
						if (Object.hasOwnProperty.call(value, k)) {
							v = str(k, value);
							if (v) {
								partial.push(quote(k) + (gap ? ': ' : ':') + v);
							}
						}
					}
				}
				v = partial.length === 0 ? '{}' : gap ? '{\n' + gap + partial.join(',\n' + gap) + '\n' + mind + '}' : '{' + partial.join(',') + '}';
				gap = mind;
				return v;
		}
	}
	if (typeof JSON.stringify !== 'function') {
		JSON.stringify = function(value, replacer, space) {
			var i;
			gap = '';
			indent = '';
			if (typeof space === 'number') {
				for (i = 0; i < space; i += 1) {
					indent += ' ';
				}
			} else if (typeof space === 'string') {
				indent = space;
			}
			rep = replacer;
			if (replacer && typeof replacer !== 'function' && (typeof replacer !== 'object' || typeof replacer.length !== 'number')) {
				throw new Error('JSON.stringify');
			}
			return str('', {
				'': value
			});
		};
	}
	if (typeof JSON.parse !== 'function') {
		JSON.parse = function(text, reviver) {
			var j;

			function walk(holder, key) {
				var k, v, value = holder[key];
				if (value && typeof value === 'object') {
					for (k in value) {
						if (Object.hasOwnProperty.call(value, k)) {
							v = walk(value, k);
							if (v !== undefined) {
								value[k] = v;
							} else {
								delete value[k];
							}
						}
					}
				}
				return reviver.call(holder, key, value);
			}
			text = String(text);
			cx.lastIndex = 0;
			if (cx.test(text)) {
				text = text.replace(cx, function(a) {
					return '\\u' + ('0000' + a.charCodeAt(0).toString(16)).slice(-4);
				});
			}
			if (/^[\],:{}\s]*$/.test(text.replace(/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g, '@').replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g, ']').replace(/(?:^|:|,)(?:\s*\[)+/g, ''))) {
				j = eval('(' + text + ')');
				return typeof reviver === 'function' ? walk({
					'': j
				}, '') : j;
			}
			throw new SyntaxError('JSON.parse');
		};
	}
}());;
$(function() {
	try {
		$(".tooltip").tipsy(), $(".tooltip-top").tipsy({
			gravity: "s"
		}), $(".tooltip-right").tipsy({
			gravity: "w"
		}), $(".tooltip-left").tipsy({
			gravity: "e"
		}), $(".tooltip-bottom").tipsy({
			gravity: "n"
		})
	} catch (n) {}
	$("a.btn-disabled-primary[disabled]").prop("disabled", !0)
}), typeof Roblox == "undefined" && (Roblox = {}), Roblox.FixedUI = function() {
	function t() {
		var n = 1024;
		return document.body && document.body.offsetWidth && (n = document.body.offsetWidth), window.innerWidth && window.innerHeight && (n = window.innerWidth), n
	}

	function i() {
		return !$(".nav-container").hasClass("no-gutter-ads")
	}

	function e() {
		return t() > u
	}
	var u = 700,
		n = navigator.userAgent.toLowerCase(),
		f = /mobile/i.test(n) || /ipad/i.test(n) || /iphone/i.test(n) || /android/i.test(n) || /playbook/i.test(n) || /blackberry/i.test(n),
		r;
	return $(function() {
		var n, t;
		i() && (n = $("#LeftGutterAdContainer iframe"), n.length > 0 && (t = $(".ad-annotations", n.contents()), t.addClass("left-gutter-ad")))
	}), r = {
		isMobile: f,
		gutterAdsEnabled: i,
		isHeaderFixed: e,
		getWindowWidth: t
	}
}();;
(typeof window.localStorage == "undefined" || typeof window.sessionStorage == "undefined") && function() {
	var n = function(n) {
		function f() {
			for (var i = u + "=", r = document.cookie.split(";"), n, t = 0; t < r.length; t++) {
				for (n = r[t]; n.charAt(0) === " ";)
					n = n.substring(1, n.length);
				if (n.indexOf(i) === 0)
					return n.substring(i.length, n.length)
			}
			return null
		}

		function i(t) {
			if (t = t.length ? JSON.stringify(t) : "", n == "session")
				window.name = t, r || (window.addEventListener ? window.addEventListener("unload", i, !1) : window.attachEvent && window.attachEvent("onunload", i), r = !0);
			else {
				var f = new Date;
				f.setTime(f.getTime() + 31536e6), document.cookie = u + "=" + t + "; expires=" + f.toGMTString() + "; path=/"
			}
		}
		var r = !1,
			u = "localStorage",
			t = n == "session" ? window.name : f();
		return t = t ? JSON.parse(t) : {}, {
			clear: function() {
				t = {}, i("")
			},
			getItem: function(n) {
				return t[n] === undefined ? null : t[n]
			},
			key: function(n) {
				var i = 0,
					r;
				for (r in t) {
					if (i == n)
						return r;
					i++
				}
				return null
			},
			removeItem: function(n) {
				delete t[n], i(t)
			},
			setItem: function(n, r) {
				t[n] = r + "", i(t)
			}
		}
	};
	typeof window.localStorage == "undefined" && (window.localStorage = new n("local")), typeof window.sessionStorage == "undefined" && (window.sessionStorage = new n("session"))
}();; /*!jPlayer 2.9.2 for jQuery ~ (c) 2009-2014 Happyworm Ltd ~ MIT License*/
! function(a, b) {
	"function" == typeof define && define.amd ? define(["jquery"], b) : b("object" == typeof exports ? require("jquery") : a.jQuery ? a.jQuery : a.Zepto)
}(this, function(a, b) {
	a.fn.jPlayer = function(c) {
		var d = "jPlayer",
			e = "string" == typeof c,
			f = Array.prototype.slice.call(arguments, 1),
			g = this;
		return c = !e && f.length ? a.extend.apply(null, [!0, c].concat(f)) : c, e && "_" === c.charAt(0) ? g : (this.each(e ? function() {
			var e = a(this).data(d),
				h = e && a.isFunction(e[c]) ? e[c].apply(e, f) : e;
			return h !== e && h !== b ? (g = h, !1) : void 0
		} : function() {
			var b = a(this).data(d);
			b ? b.option(c || {}) : a(this).data(d, new a.jPlayer(c, this))
		}), g)
	}, a.jPlayer = function(b, c) {
		if (arguments.length) {
			this.element = a(c), this.options = a.extend(!0, {}, this.options, b);
			var d = this;
			this.element.bind("remove.jPlayer", function() {
				d.destroy()
			}), this._init()
		}
	}, "function" != typeof a.fn.stop && (a.fn.stop = function() {}), a.jPlayer.emulateMethods = "load play pause", a.jPlayer.emulateStatus = "src readyState networkState currentTime duration paused ended playbackRate", a.jPlayer.emulateOptions = "muted volume", a.jPlayer.reservedEvent = "ready flashreset resize repeat error warning", a.jPlayer.event = {}, a.each(["ready", "setmedia", "flashreset", "resize", "repeat", "click", "error", "warning", "loadstart", "progress", "suspend", "abort", "emptied", "stalled", "play", "pause", "loadedmetadata", "loadeddata", "waiting", "playing", "canplay", "canplaythrough", "seeking", "seeked", "timeupdate", "ended", "ratechange", "durationchange", "volumechange"], function() {
		a.jPlayer.event[this] = "jPlayer_" + this
	}), a.jPlayer.htmlEvent = ["loadstart", "abort", "emptied", "stalled", "loadedmetadata", "canplay", "canplaythrough"], a.jPlayer.pause = function() {
		a.jPlayer.prototype.destroyRemoved(), a.each(a.jPlayer.prototype.instances, function(a, b) {
			b.data("jPlayer").status.srcSet && b.jPlayer("pause")
		})
	}, a.jPlayer.timeFormat = {
		showHour: !1,
		showMin: !0,
		showSec: !0,
		padHour: !1,
		padMin: !0,
		padSec: !0,
		sepHour: ":",
		sepMin: ":",
		sepSec: ""
	};
	var c = function() {
		this.init()
	};
	c.prototype = {
		init: function() {
			this.options = {
				timeFormat: a.jPlayer.timeFormat
			}
		},
		time: function(a) {
			a = a && "number" == typeof a ? a : 0;
			var b = new Date(1e3 * a),
				c = b.getUTCHours(),
				d = this.options.timeFormat.showHour ? b.getUTCMinutes() : b.getUTCMinutes() + 60 * c,
				e = this.options.timeFormat.showMin ? b.getUTCSeconds() : b.getUTCSeconds() + 60 * d,
				f = this.options.timeFormat.padHour && 10 > c ? "0" + c : c,
				g = this.options.timeFormat.padMin && 10 > d ? "0" + d : d,
				h = this.options.timeFormat.padSec && 10 > e ? "0" + e : e,
				i = "";
			return i += this.options.timeFormat.showHour ? f + this.options.timeFormat.sepHour : "", i += this.options.timeFormat.showMin ? g + this.options.timeFormat.sepMin : "", i += this.options.timeFormat.showSec ? h + this.options.timeFormat.sepSec : ""
		}
	};
	var d = new c;
	a.jPlayer.convertTime = function(a) {
		return d.time(a)
	}, a.jPlayer.uaBrowser = function(a) {
		var b = a.toLowerCase(),
			c = /(webkit)[ \/]([\w.]+)/,
			d = /(opera)(?:.*version)?[ \/]([\w.]+)/,
			e = /(msie) ([\w.]+)/,
			f = /(mozilla)(?:.*? rv:([\w.]+))?/,
			g = c.exec(b) || d.exec(b) || e.exec(b) || b.indexOf("compatible") < 0 && f.exec(b) || [];
		return {
			browser: g[1] || "",
			version: g[2] || "0"
		}
	}, a.jPlayer.uaPlatform = function(a) {
		var b = a.toLowerCase(),
			c = /(ipad|iphone|ipod|android|blackberry|playbook|windows ce|webos)/,
			d = /(ipad|playbook)/,
			e = /(android)/,
			f = /(mobile)/,
			g = c.exec(b) || [],
			h = d.exec(b) || !f.exec(b) && e.exec(b) || [];
		return g[1] && (g[1] = g[1].replace(/\s/g, "_")), {
			platform: g[1] || "",
			tablet: h[1] || ""
		}
	}, a.jPlayer.browser = {}, a.jPlayer.platform = {};
	var e = a.jPlayer.uaBrowser(navigator.userAgent);
	e.browser && (a.jPlayer.browser[e.browser] = !0, a.jPlayer.browser.version = e.version);
	var f = a.jPlayer.uaPlatform(navigator.userAgent);
	f.platform && (a.jPlayer.platform[f.platform] = !0, a.jPlayer.platform.mobile = !f.tablet, a.jPlayer.platform.tablet = !!f.tablet), a.jPlayer.getDocMode = function() {
		var b;
		return a.jPlayer.browser.msie && (document.documentMode ? b = document.documentMode : (b = 5, document.compatMode && "CSS1Compat" === document.compatMode && (b = 7))), b
	}, a.jPlayer.browser.documentMode = a.jPlayer.getDocMode(), a.jPlayer.nativeFeatures = {
		init: function() {
			var a, b, c, d = document,
				e = d.createElement("video"),
				f = {
					w3c: ["fullscreenEnabled", "fullscreenElement", "requestFullscreen", "exitFullscreen", "fullscreenchange", "fullscreenerror"],
					moz: ["mozFullScreenEnabled", "mozFullScreenElement", "mozRequestFullScreen", "mozCancelFullScreen", "mozfullscreenchange", "mozfullscreenerror"],
					webkit: ["", "webkitCurrentFullScreenElement", "webkitRequestFullScreen", "webkitCancelFullScreen", "webkitfullscreenchange", ""],
					webkitVideo: ["webkitSupportsFullscreen", "webkitDisplayingFullscreen", "webkitEnterFullscreen", "webkitExitFullscreen", "", ""],
					ms: ["", "msFullscreenElement", "msRequestFullscreen", "msExitFullscreen", "MSFullscreenChange", "MSFullscreenError"]
				},
				g = ["w3c", "moz", "webkit", "webkitVideo", "ms"];
			for (this.fullscreen = a = {
					support: {
						w3c: !!d[f.w3c[0]],
						moz: !!d[f.moz[0]],
						webkit: "function" == typeof d[f.webkit[3]],
						webkitVideo: "function" == typeof e[f.webkitVideo[2]],
						ms: "function" == typeof e[f.ms[2]]
					},
					used: {}
				}, b = 0, c = g.length; c > b; b++) {
				var h = g[b];
				if (a.support[h]) {
					a.spec = h, a.used[h] = !0;
					break
				}
			}
			if (a.spec) {
				var i = f[a.spec];
				a.api = {
					fullscreenEnabled: !0,
					fullscreenElement: function(a) {
						return a = a ? a : d, a[i[1]]
					},
					requestFullscreen: function(a) {
						return a[i[2]]()
					},
					exitFullscreen: function(a) {
						return a = a ? a : d, a[i[3]]()
					}
				}, a.event = {
					fullscreenchange: i[4],
					fullscreenerror: i[5]
				}
			} else
				a.api = {
					fullscreenEnabled: !1,
					fullscreenElement: function() {
						return null
					},
					requestFullscreen: function() {},
					exitFullscreen: function() {}
				}, a.event = {}
		}
	}, a.jPlayer.nativeFeatures.init(), a.jPlayer.focus = null, a.jPlayer.keyIgnoreElementNames = "A INPUT TEXTAREA SELECT BUTTON";
	var g = function(b) {
		var c, d = a.jPlayer.focus;
		d && (a.each(a.jPlayer.keyIgnoreElementNames.split(/\s+/g), function(a, d) {
			return b.target.nodeName.toUpperCase() === d.toUpperCase() ? (c = !0, !1) : void 0
		}), c || a.each(d.options.keyBindings, function(c, e) {
			return e && a.isFunction(e.fn) && ("number" == typeof e.key && b.which === e.key || "string" == typeof e.key && b.key === e.key) ? (b.preventDefault(), e.fn(d), !1) : void 0
		}))
	};
	a.jPlayer.keys = function(b) {
		var c = "keydown.jPlayer";
		a(document.documentElement).unbind(c), b && a(document.documentElement).bind(c, g)
	}, a.jPlayer.keys(!0), a.jPlayer.prototype = {
		count: 0,
		version: {
			script: "2.9.2",
			needFlash: "2.9.0",
			flash: "unknown"
		},
		options: {
			swfPath: "js",
			solution: "html, flash",
			supplied: "mp3",
			auroraFormats: "wav",
			preload: "metadata",
			volume: .8,
			muted: !1,
			remainingDuration: !1,
			toggleDuration: !1,
			captureDuration: !0,
			playbackRate: 1,
			defaultPlaybackRate: 1,
			minPlaybackRate: .5,
			maxPlaybackRate: 4,
			wmode: "opaque",
			backgroundColor: "#000000",
			cssSelectorAncestor: "#jp_container_1",
			cssSelector: {
				videoPlay: ".jp-video-play",
				play: ".jp-play",
				pause: ".jp-pause",
				stop: ".jp-stop",
				seekBar: ".jp-seek-bar",
				playBar: ".jp-play-bar",
				mute: ".jp-mute",
				unmute: ".jp-unmute",
				volumeBar: ".jp-volume-bar",
				volumeBarValue: ".jp-volume-bar-value",
				volumeMax: ".jp-volume-max",
				playbackRateBar: ".jp-playback-rate-bar",
				playbackRateBarValue: ".jp-playback-rate-bar-value",
				currentTime: ".jp-current-time",
				duration: ".jp-duration",
				title: ".jp-title",
				fullScreen: ".jp-full-screen",
				restoreScreen: ".jp-restore-screen",
				repeat: ".jp-repeat",
				repeatOff: ".jp-repeat-off",
				gui: ".jp-gui",
				noSolution: ".jp-no-solution"
			},
			stateClass: {
				playing: "jp-state-playing",
				seeking: "jp-state-seeking",
				muted: "jp-state-muted",
				looped: "jp-state-looped",
				fullScreen: "jp-state-full-screen",
				noVolume: "jp-state-no-volume"
			},
			useStateClassSkin: !1,
			autoBlur: !0,
			smoothPlayBar: !1,
			fullScreen: !1,
			fullWindow: !1,
			autohide: {
				restored: !1,
				full: !0,
				fadeIn: 200,
				fadeOut: 600,
				hold: 1e3
			},
			loop: !1,
			repeat: function(b) {
				b.jPlayer.options.loop ? a(this).unbind(".jPlayerRepeat").bind(a.jPlayer.event.ended + ".jPlayer.jPlayerRepeat", function() {
					a(this).jPlayer("play")
				}) : a(this).unbind(".jPlayerRepeat")
			},
			nativeVideoControls: {},
			noFullWindow: {
				msie: /msie [0-6]\./,
				ipad: /ipad.*?os [0-4]\./,
				iphone: /iphone/,
				ipod: /ipod/,
				android_pad: /android [0-3]\.(?!.*?mobile)/,
				android_phone: /(?=.*android)(?!.*chrome)(?=.*mobile)/,
				blackberry: /blackberry/,
				windows_ce: /windows ce/,
				iemobile: /iemobile/,
				webos: /webos/
			},
			noVolume: {
				ipad: /ipad/,
				iphone: /iphone/,
				ipod: /ipod/,
				android_pad: /android(?!.*?mobile)/,
				android_phone: /android.*?mobile/,
				blackberry: /blackberry/,
				windows_ce: /windows ce/,
				iemobile: /iemobile/,
				webos: /webos/,
				playbook: /playbook/
			},
			timeFormat: {},
			keyEnabled: !1,
			audioFullScreen: !1,
			keyBindings: {
				play: {
					key: 80,
					fn: function(a) {
						a.status.paused ? a.play() : a.pause()
					}
				},
				fullScreen: {
					key: 70,
					fn: function(a) {
						(a.status.video || a.options.audioFullScreen) && a._setOption("fullScreen", !a.options.fullScreen)
					}
				},
				muted: {
					key: 77,
					fn: function(a) {
						a._muted(!a.options.muted)
					}
				},
				volumeUp: {
					key: 190,
					fn: function(a) {
						a.volume(a.options.volume + .1)
					}
				},
				volumeDown: {
					key: 188,
					fn: function(a) {
						a.volume(a.options.volume - .1)
					}
				},
				loop: {
					key: 76,
					fn: function(a) {
						a._loop(!a.options.loop)
					}
				}
			},
			verticalVolume: !1,
			verticalPlaybackRate: !1,
			globalVolume: !1,
			idPrefix: "jp",
			noConflict: "jQuery",
			emulateHtml: !1,
			consoleAlerts: !0,
			errorAlerts: !1,
			warningAlerts: !1
		},
		optionsAudio: {
			size: {
				width: "0px",
				height: "0px",
				cssClass: ""
			},
			sizeFull: {
				width: "0px",
				height: "0px",
				cssClass: ""
			}
		},
		optionsVideo: {
			size: {
				width: "480px",
				height: "270px",
				cssClass: "jp-video-270p"
			},
			sizeFull: {
				width: "100%",
				height: "100%",
				cssClass: "jp-video-full"
			}
		},
		instances: {},
		status: {
			src: "",
			media: {},
			paused: !0,
			format: {},
			formatType: "",
			waitForPlay: !0,
			waitForLoad: !0,
			srcSet: !1,
			video: !1,
			seekPercent: 0,
			currentPercentRelative: 0,
			currentPercentAbsolute: 0,
			currentTime: 0,
			duration: 0,
			remaining: 0,
			videoWidth: 0,
			videoHeight: 0,
			readyState: 0,
			networkState: 0,
			playbackRate: 1,
			ended: 0
		},
		internal: {
			ready: !1
		},
		solution: {
			html: !0,
			aurora: !0,
			flash: !0
		},
		format: {
			mp3: {
				codec: "audio/mpeg",
				flashCanPlay: !0,
				media: "audio"
			},
			m4a: {
				codec: 'audio/mp4; codecs="mp4a.40.2"',
				flashCanPlay: !0,
				media: "audio"
			},
			m3u8a: {
				codec: 'application/vnd.apple.mpegurl; codecs="mp4a.40.2"',
				flashCanPlay: !1,
				media: "audio"
			},
			m3ua: {
				codec: "audio/mpegurl",
				flashCanPlay: !1,
				media: "audio"
			},
			oga: {
				codec: 'audio/ogg; codecs="vorbis, opus"',
				flashCanPlay: !1,
				media: "audio"
			},
			flac: {
				codec: "audio/x-flac",
				flashCanPlay: !1,
				media: "audio"
			},
			wav: {
				codec: 'audio/wav; codecs="1"',
				flashCanPlay: !1,
				media: "audio"
			},
			webma: {
				codec: 'audio/webm; codecs="vorbis"',
				flashCanPlay: !1,
				media: "audio"
			},
			fla: {
				codec: "audio/x-flv",
				flashCanPlay: !0,
				media: "audio"
			},
			rtmpa: {
				codec: 'audio/rtmp; codecs="rtmp"',
				flashCanPlay: !0,
				media: "audio"
			},
			m4v: {
				codec: 'video/mp4; codecs="avc1.42E01E, mp4a.40.2"',
				flashCanPlay: !0,
				media: "video"
			},
			m3u8v: {
				codec: 'application/vnd.apple.mpegurl; codecs="avc1.42E01E, mp4a.40.2"',
				flashCanPlay: !1,
				media: "video"
			},
			m3uv: {
				codec: "audio/mpegurl",
				flashCanPlay: !1,
				media: "video"
			},
			ogv: {
				codec: 'video/ogg; codecs="theora, vorbis"',
				flashCanPlay: !1,
				media: "video"
			},
			webmv: {
				codec: 'video/webm; codecs="vorbis, vp8"',
				flashCanPlay: !1,
				media: "video"
			},
			flv: {
				codec: "video/x-flv",
				flashCanPlay: !0,
				media: "video"
			},
			rtmpv: {
				codec: 'video/rtmp; codecs="rtmp"',
				flashCanPlay: !0,
				media: "video"
			}
		},
		_init: function() {
			var c = this;
			if (this.element.empty(), this.status = a.extend({}, this.status), this.internal = a.extend({}, this.internal), this.options.timeFormat = a.extend({}, a.jPlayer.timeFormat, this.options.timeFormat), this.internal.cmdsIgnored = a.jPlayer.platform.ipad || a.jPlayer.platform.iphone || a.jPlayer.platform.ipod, this.internal.domNode = this.element.get(0), this.options.keyEnabled && !a.jPlayer.focus && (a.jPlayer.focus = this), this.androidFix = {
					setMedia: !1,
					play: !1,
					pause: !1,
					time: 0 / 0
				}, a.jPlayer.platform.android && (this.options.preload = "auto" !== this.options.preload ? "metadata" : "auto"), this.formats = [], this.solutions = [], this.require = {}, this.htmlElement = {}, this.html = {}, this.html.audio = {}, this.html.video = {}, this.aurora = {}, this.aurora.formats = [], this.aurora.properties = [], this.flash = {}, this.css = {}, this.css.cs = {}, this.css.jq = {}, this.ancestorJq = [], this.options.volume = this._limitValue(this.options.volume, 0, 1), a.each(this.options.supplied.toLowerCase().split(","), function(b, d) {
					var e = d.replace(/^\s+|\s+$/g, "");
					if (c.format[e]) {
						var f = !1;
						a.each(c.formats, function(a, b) {
							return e === b ? (f = !0, !1) : void 0
						}), f || c.formats.push(e)
					}
				}), a.each(this.options.solution.toLowerCase().split(","), function(b, d) {
					var e = d.replace(/^\s+|\s+$/g, "");
					if (c.solution[e]) {
						var f = !1;
						a.each(c.solutions, function(a, b) {
							return e === b ? (f = !0, !1) : void 0
						}), f || c.solutions.push(e)
					}
				}), a.each(this.options.auroraFormats.toLowerCase().split(","), function(b, d) {
					var e = d.replace(/^\s+|\s+$/g, "");
					if (c.format[e]) {
						var f = !1;
						a.each(c.aurora.formats, function(a, b) {
							return e === b ? (f = !0, !1) : void 0
						}), f || c.aurora.formats.push(e)
					}
				}), this.internal.instance = "jp_" + this.count, this.instances[this.internal.instance] = this.element, this.element.attr("id") || this.element.attr("id", this.options.idPrefix + "_jplayer_" + this.count), this.internal.self = a.extend({}, {
					id: this.element.attr("id"),
					jq: this.element
				}), this.internal.audio = a.extend({}, {
					id: this.options.idPrefix + "_audio_" + this.count,
					jq: b
				}), this.internal.video = a.extend({}, {
					id: this.options.idPrefix + "_video_" + this.count,
					jq: b
				}), this.internal.flash = a.extend({}, {
					id: this.options.idPrefix + "_flash_" + this.count,
					jq: b,
					swf: this.options.swfPath + (".swf" !== this.options.swfPath.toLowerCase().slice(-4) ? (this.options.swfPath && "/" !== this.options.swfPath.slice(-1) ? "/" : "") + "jquery.jplayer.swf" : "")
				}), this.internal.poster = a.extend({}, {
					id: this.options.idPrefix + "_poster_" + this.count,
					jq: b
				}), a.each(a.jPlayer.event, function(a, d) {
					c.options[a] !== b && (c.element.bind(d + ".jPlayer", c.options[a]), c.options[a] = b)
				}), this.require.audio = !1, this.require.video = !1, a.each(this.formats, function(a, b) {
					c.require[c.format[b].media] = !0
				}), this.options = this.require.video ? a.extend(!0, {}, this.optionsVideo, this.options) : a.extend(!0, {}, this.optionsAudio, this.options), this._setSize(), this.status.nativeVideoControls = this._uaBlocklist(this.options.nativeVideoControls), this.status.noFullWindow = this._uaBlocklist(this.options.noFullWindow), this.status.noVolume = this._uaBlocklist(this.options.noVolume), a.jPlayer.nativeFeatures.fullscreen.api.fullscreenEnabled && this._fullscreenAddEventListeners(), this._restrictNativeVideoControls(), this.htmlElement.poster = document.createElement("img"), this.htmlElement.poster.id = this.internal.poster.id, this.htmlElement.poster.onload = function() {
					(!c.status.video || c.status.waitForPlay) && c.internal.poster.jq.show()
				}, this.element.append(this.htmlElement.poster), this.internal.poster.jq = a("#" + this.internal.poster.id), this.internal.poster.jq.css({
					width: this.status.width,
					height: this.status.height
				}), this.internal.poster.jq.hide(), this.internal.poster.jq.bind("click.jPlayer", function() {
					c._trigger(a.jPlayer.event.click)
				}), this.html.audio.available = !1, this.require.audio && (this.htmlElement.audio = document.createElement("audio"), this.htmlElement.audio.id = this.internal.audio.id, this.html.audio.available = !!this.htmlElement.audio.canPlayType && this._testCanPlayType(this.htmlElement.audio)), this.html.video.available = !1, this.require.video && (this.htmlElement.video = document.createElement("video"), this.htmlElement.video.id = this.internal.video.id, this.html.video.available = !!this.htmlElement.video.canPlayType && this._testCanPlayType(this.htmlElement.video)), this.flash.available = this._checkForFlash(10.1), this.html.canPlay = {}, this.aurora.canPlay = {}, this.flash.canPlay = {}, a.each(this.formats, function(b, d) {
					c.html.canPlay[d] = c.html[c.format[d].media].available && "" !== c.htmlElement[c.format[d].media].canPlayType(c.format[d].codec), c.aurora.canPlay[d] = a.inArray(d, c.aurora.formats) > -1, c.flash.canPlay[d] = c.format[d].flashCanPlay && c.flash.available
				}), this.html.desired = !1, this.aurora.desired = !1, this.flash.desired = !1, a.each(this.solutions, function(b, d) {
					if (0 === b)
						c[d].desired = !0;
					else {
						var e = !1,
							f = !1;
						a.each(c.formats, function(a, b) {
							c[c.solutions[0]].canPlay[b] && ("video" === c.format[b].media ? f = !0 : e = !0)
						}), c[d].desired = c.require.audio && !e || c.require.video && !f
					}
				}), this.html.support = {}, this.aurora.support = {}, this.flash.support = {}, a.each(this.formats, function(a, b) {
					c.html.support[b] = c.html.canPlay[b] && c.html.desired, c.aurora.support[b] = c.aurora.canPlay[b] && c.aurora.desired, c.flash.support[b] = c.flash.canPlay[b] && c.flash.desired
				}), this.html.used = !1, this.aurora.used = !1, this.flash.used = !1, a.each(this.solutions, function(b, d) {
					a.each(c.formats, function(a, b) {
						return c[d].support[b] ? (c[d].used = !0, !1) : void 0
					})
				}), this._resetActive(), this._resetGate(), this._cssSelectorAncestor(this.options.cssSelectorAncestor), this.html.used || this.aurora.used || this.flash.used ? this.css.jq.noSolution.length && this.css.jq.noSolution.hide() : (this._error({
					type: a.jPlayer.error.NO_SOLUTION,
					context: "{solution:'" + this.options.solution + "', supplied:'" + this.options.supplied + "'}",
					message: a.jPlayer.errorMsg.NO_SOLUTION,
					hint: a.jPlayer.errorHint.NO_SOLUTION
				}), this.css.jq.noSolution.length && this.css.jq.noSolution.show()), this.flash.used) {
				var d, e = "jQuery=" + encodeURI(this.options.noConflict) + "&id=" + encodeURI(this.internal.self.id) + "&vol=" + this.options.volume + "&muted=" + this.options.muted;
				if (a.jPlayer.browser.msie && (Number(a.jPlayer.browser.version) < 9 || a.jPlayer.browser.documentMode < 9)) {
					var f = '<object id="' + this.internal.flash.id + '" classid="clsid:d27cdb6e-ae6d-11cf-96b8-444553540000" width="0" height="0" tabindex="-1"></object>',
						g = ['<param name="movie" value="' + this.internal.flash.swf + '" />', '<param name="FlashVars" value="' + e + '" />', '<param name="allowScriptAccess" value="always" />', '<param name="bgcolor" value="' + this.options.backgroundColor + '" />', '<param name="wmode" value="' + this.options.wmode + '" />'];
					d = document.createElement(f);
					for (var h = 0; h < g.length; h++)
						d.appendChild(document.createElement(g[h]))
				} else {
					var i = function(a, b, c) {
						var d = document.createElement("param");
						d.setAttribute("name", b), d.setAttribute("value", c), a.appendChild(d)
					};
					d = document.createElement("object"), d.setAttribute("id", this.internal.flash.id), d.setAttribute("name", this.internal.flash.id), d.setAttribute("data", this.internal.flash.swf), d.setAttribute("type", "application/x-shockwave-flash"), d.setAttribute("width", "1"), d.setAttribute("height", "1"), d.setAttribute("tabindex", "-1"), i(d, "flashvars", e), i(d, "allowscriptaccess", "always"), i(d, "bgcolor", this.options.backgroundColor), i(d, "wmode", this.options.wmode)
				}
				this.element.append(d), this.internal.flash.jq = a(d)
			}
			this.status.playbackRateEnabled = this.html.used && !this.flash.used ? this._testPlaybackRate("audio") : !1, this._updatePlaybackRate(), this.html.used && (this.html.audio.available && (this._addHtmlEventListeners(this.htmlElement.audio, this.html.audio), this.element.append(this.htmlElement.audio), this.internal.audio.jq = a("#" + this.internal.audio.id)), this.html.video.available && (this._addHtmlEventListeners(this.htmlElement.video, this.html.video), this.element.append(this.htmlElement.video), this.internal.video.jq = a("#" + this.internal.video.id), this.internal.video.jq.css(this.status.nativeVideoControls ? {
				width: this.status.width,
				height: this.status.height
			} : {
				width: "0px",
				height: "0px"
			}), this.internal.video.jq.bind("click.jPlayer", function() {
				c._trigger(a.jPlayer.event.click)
			}))), this.aurora.used, this.options.emulateHtml && this._emulateHtmlBridge(), !this.html.used && !this.aurora.used || this.flash.used || setTimeout(function() {
				c.internal.ready = !0, c.version.flash = "n/a", c._trigger(a.jPlayer.event.repeat), c._trigger(a.jPlayer.event.ready)
			}, 100), this._updateNativeVideoControls(), this.css.jq.videoPlay.length && this.css.jq.videoPlay.hide(), a.jPlayer.prototype.count++
		},
		destroy: function() {
			this.clearMedia(), this._removeUiClass(), this.css.jq.currentTime.length && this.css.jq.currentTime.text(""), this.css.jq.duration.length && this.css.jq.duration.text(""), a.each(this.css.jq, function(a, b) {
				b.length && b.unbind(".jPlayer")
			}), this.internal.poster.jq.unbind(".jPlayer"), this.internal.video.jq && this.internal.video.jq.unbind(".jPlayer"), this._fullscreenRemoveEventListeners(), this === a.jPlayer.focus && (a.jPlayer.focus = null), this.options.emulateHtml && this._destroyHtmlBridge(), this.element.removeData("jPlayer"), this.element.unbind(".jPlayer"), this.element.empty(), delete this.instances[this.internal.instance]
		},
		destroyRemoved: function() {
			var b = this;
			a.each(this.instances, function(a, c) {
				b.element !== c && (c.data("jPlayer") || (c.jPlayer("destroy"), delete b.instances[a]))
			})
		},
		enable: function() {},
		disable: function() {},
		_testCanPlayType: function(a) {
			try {
				return a.canPlayType(this.format.mp3.codec), !0
			} catch (b) {
				return !1
			}
		},
		_testPlaybackRate: function(a) {
			var b, c = .5;
			a = "string" == typeof a ? a : "audio", b = document.createElement(a);
			try {
				return "playbackRate" in b ? (b.playbackRate = c, b.playbackRate === c) : !1
			} catch (d) {
				return !1
			}
		},
		_uaBlocklist: function(b) {
			var c = navigator.userAgent.toLowerCase(),
				d = !1;
			return a.each(b, function(a, b) {
				return b && b.test(c) ? (d = !0, !1) : void 0
			}), d
		},
		_restrictNativeVideoControls: function() {
			this.require.audio && this.status.nativeVideoControls && (this.status.nativeVideoControls = !1, this.status.noFullWindow = !0)
		},
		_updateNativeVideoControls: function() {
			this.html.video.available && this.html.used && (this.htmlElement.video.controls = this.status.nativeVideoControls, this._updateAutohide(), this.status.nativeVideoControls && this.require.video ? (this.internal.poster.jq.hide(), this.internal.video.jq.css({
				width: this.status.width,
				height: this.status.height
			})) : this.status.waitForPlay && this.status.video && (this.internal.poster.jq.show(), this.internal.video.jq.css({
				width: "0px",
				height: "0px"
			})))
		},
		_addHtmlEventListeners: function(b, c) {
			var d = this;
			b.preload = this.options.preload, b.muted = this.options.muted, b.volume = this.options.volume, this.status.playbackRateEnabled && (b.defaultPlaybackRate = this.options.defaultPlaybackRate, b.playbackRate = this.options.playbackRate), b.addEventListener("progress", function() {
				c.gate && (d.internal.cmdsIgnored && this.readyState > 0 && (d.internal.cmdsIgnored = !1), d._getHtmlStatus(b), d._updateInterface(), d._trigger(a.jPlayer.event.progress))
			}, !1), b.addEventListener("loadeddata", function() {
				c.gate && (d.androidFix.setMedia = !1, d.androidFix.play && (d.androidFix.play = !1, d.play(d.androidFix.time)), d.androidFix.pause && (d.androidFix.pause = !1, d.pause(d.androidFix.time)), d._trigger(a.jPlayer.event.loadeddata))
			}, !1), b.addEventListener("timeupdate", function() {
				c.gate && (d._getHtmlStatus(b), d._updateInterface(), d._trigger(a.jPlayer.event.timeupdate))
			}, !1), b.addEventListener("durationchange", function() {
				c.gate && (d._getHtmlStatus(b), d._updateInterface(), d._trigger(a.jPlayer.event.durationchange))
			}, !1), b.addEventListener("play", function() {
				c.gate && (d._updateButtons(!0), d._html_checkWaitForPlay(), d._trigger(a.jPlayer.event.play))
			}, !1), b.addEventListener("playing", function() {
				c.gate && (d._updateButtons(!0), d._seeked(), d._trigger(a.jPlayer.event.playing))
			}, !1), b.addEventListener("pause", function() {
				c.gate && (d._updateButtons(!1), d._trigger(a.jPlayer.event.pause))
			}, !1), b.addEventListener("waiting", function() {
				c.gate && (d._seeking(), d._trigger(a.jPlayer.event.waiting))
			}, !1), b.addEventListener("seeking", function() {
				c.gate && (d._seeking(), d._trigger(a.jPlayer.event.seeking))
			}, !1), b.addEventListener("seeked", function() {
				c.gate && (d._seeked(), d._trigger(a.jPlayer.event.seeked))
			}, !1), b.addEventListener("volumechange", function() {
				c.gate && (d.options.volume = b.volume, d.options.muted = b.muted, d._updateMute(), d._updateVolume(), d._trigger(a.jPlayer.event.volumechange))
			}, !1), b.addEventListener("ratechange", function() {
				c.gate && (d.options.defaultPlaybackRate = b.defaultPlaybackRate, d.options.playbackRate = b.playbackRate, d._updatePlaybackRate(), d._trigger(a.jPlayer.event.ratechange))
			}, !1), b.addEventListener("suspend", function() {
				c.gate && (d._seeked(), d._trigger(a.jPlayer.event.suspend))
			}, !1), b.addEventListener("ended", function() {
				c.gate && (a.jPlayer.browser.webkit || (d.htmlElement.media.currentTime = 0), d.htmlElement.media.pause(), d._updateButtons(!1), d._getHtmlStatus(b, !0), d._updateInterface(), d._trigger(a.jPlayer.event.ended))
			}, !1), b.addEventListener("error", function() {
				c.gate && (d._updateButtons(!1), d._seeked(), d.status.srcSet && (clearTimeout(d.internal.htmlDlyCmdId), d.status.waitForLoad = !0, d.status.waitForPlay = !0, d.status.video && !d.status.nativeVideoControls && d.internal.video.jq.css({
					width: "0px",
					height: "0px"
				}), d._validString(d.status.media.poster) && !d.status.nativeVideoControls && d.internal.poster.jq.show(), d.css.jq.videoPlay.length && d.css.jq.videoPlay.show(), d._error({
					type: a.jPlayer.error.URL,
					context: d.status.src,
					message: a.jPlayer.errorMsg.URL,
					hint: a.jPlayer.errorHint.URL
				})))
			}, !1), a.each(a.jPlayer.htmlEvent, function(e, f) {
				b.addEventListener(this, function() {
					c.gate && d._trigger(a.jPlayer.event[f])
				}, !1)
			})
		},
		_addAuroraEventListeners: function(b, c) {
			var d = this;
			b.volume = 100 * this.options.volume, b.on("progress", function() {
				c.gate && (d.internal.cmdsIgnored && this.readyState > 0 && (d.internal.cmdsIgnored = !1), d._getAuroraStatus(b), d._updateInterface(), d._trigger(a.jPlayer.event.progress), b.duration > 0 && d._trigger(a.jPlayer.event.timeupdate))
			}, !1), b.on("ready", function() {
				c.gate && d._trigger(a.jPlayer.event.loadeddata)
			}, !1), b.on("duration", function() {
				c.gate && (d._getAuroraStatus(b), d._updateInterface(), d._trigger(a.jPlayer.event.durationchange))
			}, !1), b.on("end", function() {
				c.gate && (d._updateButtons(!1), d._getAuroraStatus(b, !0), d._updateInterface(), d._trigger(a.jPlayer.event.ended))
			}, !1), b.on("error", function() {
				c.gate && (d._updateButtons(!1), d._seeked(), d.status.srcSet && (d.status.waitForLoad = !0, d.status.waitForPlay = !0, d.status.video && !d.status.nativeVideoControls && d.internal.video.jq.css({
					width: "0px",
					height: "0px"
				}), d._validString(d.status.media.poster) && !d.status.nativeVideoControls && d.internal.poster.jq.show(), d.css.jq.videoPlay.length && d.css.jq.videoPlay.show(), d._error({
					type: a.jPlayer.error.URL,
					context: d.status.src,
					message: a.jPlayer.errorMsg.URL,
					hint: a.jPlayer.errorHint.URL
				})))
			}, !1)
		},
		_getHtmlStatus: function(a, b) {
			var c = 0,
				d = 0,
				e = 0,
				f = 0;
			isFinite(a.duration) && (this.status.duration = a.duration), c = a.currentTime, d = this.status.duration > 0 ? 100 * c / this.status.duration : 0, "object" == typeof a.seekable && a.seekable.length > 0 ? (e = this.status.duration > 0 ? 100 * a.seekable.end(a.seekable.length - 1) / this.status.duration : 100, f = this.status.duration > 0 ? 100 * a.currentTime / a.seekable.end(a.seekable.length - 1) : 0) : (e = 100, f = d), b && (c = 0, f = 0, d = 0), this.status.seekPercent = e, this.status.currentPercentRelative = f, this.status.currentPercentAbsolute = d, this.status.currentTime = c, this.status.remaining = this.status.duration - this.status.currentTime, this.status.videoWidth = a.videoWidth, this.status.videoHeight = a.videoHeight, this.status.readyState = a.readyState, this.status.networkState = a.networkState, this.status.playbackRate = a.playbackRate, this.status.ended = a.ended
		},
		_getAuroraStatus: function(a, b) {
			var c = 0,
				d = 0,
				e = 0,
				f = 0;
			this.status.duration = a.duration / 1e3, c = a.currentTime / 1e3, d = this.status.duration > 0 ? 100 * c / this.status.duration : 0, a.buffered > 0 ? (e = this.status.duration > 0 ? a.buffered * this.status.duration / this.status.duration : 100, f = this.status.duration > 0 ? c / (a.buffered * this.status.duration) : 0) : (e = 100, f = d), b && (c = 0, f = 0, d = 0), this.status.seekPercent = e, this.status.currentPercentRelative = f, this.status.currentPercentAbsolute = d, this.status.currentTime = c, this.status.remaining = this.status.duration - this.status.currentTime, this.status.readyState = 4, this.status.networkState = 0, this.status.playbackRate = 1, this.status.ended = !1
		},
		_resetStatus: function() {
			this.status = a.extend({}, this.status, a.jPlayer.prototype.status)
		},
		_trigger: function(b, c, d) {
			var e = a.Event(b);
			e.jPlayer = {}, e.jPlayer.version = a.extend({}, this.version), e.jPlayer.options = a.extend(!0, {}, this.options), e.jPlayer.status = a.extend(!0, {}, this.status), e.jPlayer.html = a.extend(!0, {}, this.html), e.jPlayer.aurora = a.extend(!0, {}, this.aurora), e.jPlayer.flash = a.extend(!0, {}, this.flash), c && (e.jPlayer.error = a.extend({}, c)), d && (e.jPlayer.warning = a.extend({}, d)), this.element.trigger(e)
		},
		jPlayerFlashEvent: function(b, c) {
			if (b === a.jPlayer.event.ready)
				if (this.internal.ready) {
					if (this.flash.gate) {
						if (this.status.srcSet) {
							var d = this.status.currentTime,
								e = this.status.paused;
							this.setMedia(this.status.media), this.volumeWorker(this.options.volume), d > 0 && (e ? this.pause(d) : this.play(d))
						}
						this._trigger(a.jPlayer.event.flashreset)
					}
				} else
					this.internal.ready = !0, this.internal.flash.jq.css({
						width: "0px",
						height: "0px"
					}), this.version.flash = c.version, this.version.needFlash !== this.version.flash && this._error({
						type: a.jPlayer.error.VERSION,
						context: this.version.flash,
						message: a.jPlayer.errorMsg.VERSION + this.version.flash,
						hint: a.jPlayer.errorHint.VERSION
					}), this._trigger(a.jPlayer.event.repeat), this._trigger(b);
			if (this.flash.gate)
				switch (b) {
					case a.jPlayer.event.progress:
						this._getFlashStatus(c), this._updateInterface(), this._trigger(b);
						break;
					case a.jPlayer.event.timeupdate:
						this._getFlashStatus(c), this._updateInterface(), this._trigger(b);
						break;
					case a.jPlayer.event.play:
						this._seeked(), this._updateButtons(!0), this._trigger(b);
						break;
					case a.jPlayer.event.pause:
						this._updateButtons(!1), this._trigger(b);
						break;
					case a.jPlayer.event.ended:
						this._updateButtons(!1), this._trigger(b);
						break;
					case a.jPlayer.event.click:
						this._trigger(b);
						break;
					case a.jPlayer.event.error:
						this.status.waitForLoad = !0, this.status.waitForPlay = !0, this.status.video && this.internal.flash.jq.css({
							width: "0px",
							height: "0px"
						}), this._validString(this.status.media.poster) && this.internal.poster.jq.show(), this.css.jq.videoPlay.length && this.status.video && this.css.jq.videoPlay.show(), this.status.video ? this._flash_setVideo(this.status.media) : this._flash_setAudio(this.status.media), this._updateButtons(!1), this._error({
							type: a.jPlayer.error.URL,
							context: c.src,
							message: a.jPlayer.errorMsg.URL,
							hint: a.jPlayer.errorHint.URL
						});
						break;
					case a.jPlayer.event.seeking:
						this._seeking(), this._trigger(b);
						break;
					case a.jPlayer.event.seeked:
						this._seeked(), this._trigger(b);
						break;
					case a.jPlayer.event.ready:
						break;
					default:
						this._trigger(b)
				}
			return !1
		},
		_getFlashStatus: function(a) {
			this.status.seekPercent = a.seekPercent, this.status.currentPercentRelative = a.currentPercentRelative, this.status.currentPercentAbsolute = a.currentPercentAbsolute, this.status.currentTime = a.currentTime, this.status.duration = a.duration, this.status.remaining = a.duration - a.currentTime, this.status.videoWidth = a.videoWidth, this.status.videoHeight = a.videoHeight, this.status.readyState = 4, this.status.networkState = 0, this.status.playbackRate = 1, this.status.ended = !1
		},
		_updateButtons: function(a) {
			a === b ? a = !this.status.paused : this.status.paused = !a, a ? this.addStateClass("playing") : this.removeStateClass("playing"), !this.status.noFullWindow && this.options.fullWindow ? this.addStateClass("fullScreen") : this.removeStateClass("fullScreen"), this.options.loop ? this.addStateClass("looped") : this.removeStateClass("looped"), this.css.jq.play.length && this.css.jq.pause.length && (a ? (this.css.jq.play.hide(), this.css.jq.pause.show()) : (this.css.jq.play.show(), this.css.jq.pause.hide())), this.css.jq.restoreScreen.length && this.css.jq.fullScreen.length && (this.status.noFullWindow ? (this.css.jq.fullScreen.hide(), this.css.jq.restoreScreen.hide()) : this.options.fullWindow ? (this.css.jq.fullScreen.hide(), this.css.jq.restoreScreen.show()) : (this.css.jq.fullScreen.show(), this.css.jq.restoreScreen.hide())), this.css.jq.repeat.length && this.css.jq.repeatOff.length && (this.options.loop ? (this.css.jq.repeat.hide(), this.css.jq.repeatOff.show()) : (this.css.jq.repeat.show(), this.css.jq.repeatOff.hide()))
		},
		_updateInterface: function() {
			this.css.jq.seekBar.length && this.css.jq.seekBar.width(this.status.seekPercent + "%"), this.css.jq.playBar.length && (this.options.smoothPlayBar ? this.css.jq.playBar.stop().animate({
				width: this.status.currentPercentAbsolute + "%"
			}, 250, "linear") : this.css.jq.playBar.width(this.status.currentPercentRelative + "%"));
			var a = "";
			this.css.jq.currentTime.length && (a = this._convertTime(this.status.currentTime), a !== this.css.jq.currentTime.text() && this.css.jq.currentTime.text(this._convertTime(this.status.currentTime)));
			var b = "",
				c = this.status.duration,
				d = this.status.remaining;
			this.css.jq.duration.length && ("string" == typeof this.status.media.duration ? b = this.status.media.duration : ("number" == typeof this.status.media.duration && (c = this.status.media.duration, d = c - this.status.currentTime), b = this.options.remainingDuration ? (d > 0 ? "-" : "") + this._convertTime(d) : this._convertTime(c)), b !== this.css.jq.duration.text() && this.css.jq.duration.text(b))
		},
		_convertTime: c.prototype.time,
		_seeking: function() {
			this.css.jq.seekBar.length && this.css.jq.seekBar.addClass("jp-seeking-bg"), this.addStateClass("seeking")
		},
		_seeked: function() {
			this.css.jq.seekBar.length && this.css.jq.seekBar.removeClass("jp-seeking-bg"), this.removeStateClass("seeking")
		},
		_resetGate: function() {
			this.html.audio.gate = !1, this.html.video.gate = !1, this.aurora.gate = !1, this.flash.gate = !1
		},
		_resetActive: function() {
			this.html.active = !1, this.aurora.active = !1, this.flash.active = !1
		},
		_escapeHtml: function(a) {
			return a.split("&").join("&amp;").split("<").join("&lt;").split(">").join("&gt;").split('"').join("&quot;")
		},
		_qualifyURL: function(a) {
			var b = document.createElement("div");
			return b.innerHTML = '<a href="' + this._escapeHtml(a) + '">x</a>', b.firstChild.href
		},
		_absoluteMediaUrls: function(b) {
			var c = this;
			return a.each(b, function(a, d) {
				d && c.format[a] && "data:" !== d.substr(0, 5) && (b[a] = c._qualifyURL(d))
			}), b
		},
		addStateClass: function(a) {
			this.ancestorJq.length && this.ancestorJq.addClass(this.options.stateClass[a])
		},
		removeStateClass: function(a) {
			this.ancestorJq.length && this.ancestorJq.removeClass(this.options.stateClass[a])
		},
		setMedia: function(b) {
			var c = this,
				d = !1,
				e = this.status.media.poster !== b.poster;
			this._resetMedia(), this._resetGate(), this._resetActive(), this.androidFix.setMedia = !1, this.androidFix.play = !1, this.androidFix.pause = !1, b = this._absoluteMediaUrls(b), a.each(this.formats, function(e, f) {
				var g = "video" === c.format[f].media;
				return a.each(c.solutions, function(e, h) {
					if (c[h].support[f] && c._validString(b[f])) {
						var i = "html" === h,
							j = "aurora" === h;
						return g ? (i ? (c.html.video.gate = !0, c._html_setVideo(b), c.html.active = !0) : (c.flash.gate = !0, c._flash_setVideo(b), c.flash.active = !0), c.css.jq.videoPlay.length && c.css.jq.videoPlay.show(), c.status.video = !0) : (i ? (c.html.audio.gate = !0, c._html_setAudio(b), c.html.active = !0, a.jPlayer.platform.android && (c.androidFix.setMedia = !0)) : j ? (c.aurora.gate = !0, c._aurora_setAudio(b), c.aurora.active = !0) : (c.flash.gate = !0, c._flash_setAudio(b), c.flash.active = !0), c.css.jq.videoPlay.length && c.css.jq.videoPlay.hide(), c.status.video = !1), d = !0, !1
					}
				}), d ? !1 : void 0
			}), d ? (this.status.nativeVideoControls && this.html.video.gate || this._validString(b.poster) && (e ? this.htmlElement.poster.src = b.poster : this.internal.poster.jq.show()), "string" == typeof b.title && (this.css.jq.title.length && this.css.jq.title.html(b.title), this.htmlElement.audio && this.htmlElement.audio.setAttribute("title", b.title), this.htmlElement.video && this.htmlElement.video.setAttribute("title", b.title)), this.status.srcSet = !0, this.status.media = a.extend({}, b), this._updateButtons(!1), this._updateInterface(), this._trigger(a.jPlayer.event.setmedia)) : this._error({
				type: a.jPlayer.error.NO_SUPPORT,
				context: "{supplied:'" + this.options.supplied + "'}",
				message: a.jPlayer.errorMsg.NO_SUPPORT,
				hint: a.jPlayer.errorHint.NO_SUPPORT
			})
		},
		_resetMedia: function() {
			this._resetStatus(), this._updateButtons(!1), this._updateInterface(), this._seeked(), this.internal.poster.jq.hide(), clearTimeout(this.internal.htmlDlyCmdId), this.html.active ? this._html_resetMedia() : this.aurora.active ? this._aurora_resetMedia() : this.flash.active && this._flash_resetMedia()
		},
		clearMedia: function() {
			this._resetMedia(), this.html.active ? this._html_clearMedia() : this.aurora.active ? this._aurora_clearMedia() : this.flash.active && this._flash_clearMedia(), this._resetGate(), this._resetActive()
		},
		load: function() {
			this.status.srcSet ? this.html.active ? this._html_load() : this.aurora.active ? this._aurora_load() : this.flash.active && this._flash_load() : this._urlNotSetError("load")
		},
		focus: function() {
			this.options.keyEnabled && (a.jPlayer.focus = this)
		},
		play: function(a) {
			var b = "object" == typeof a;
			b && this.options.useStateClassSkin && !this.status.paused ? this.pause(a) : (a = "number" == typeof a ? a : 0 / 0, this.status.srcSet ? (this.focus(), this.html.active ? this._html_play(a) : this.aurora.active ? this._aurora_play(a) : this.flash.active && this._flash_play(a)) : this._urlNotSetError("play"))
		},
		videoPlay: function() {
			this.play()
		},
		pause: function(a) {
			a = "number" == typeof a ? a : 0 / 0, this.status.srcSet ? this.html.active ? this._html_pause(a) : this.aurora.active ? this._aurora_pause(a) : this.flash.active && this._flash_pause(a) : this._urlNotSetError("pause")
		},
		tellOthers: function(b, c) {
			var d = this,
				e = "function" == typeof c,
				f = Array.prototype.slice.call(arguments);
			"string" == typeof b && (e && f.splice(1, 1), a.jPlayer.prototype.destroyRemoved(), a.each(this.instances, function() {
				d.element !== this && (!e || c.call(this.data("jPlayer"), d)) && this.jPlayer.apply(this, f)
			}))
		},
		pauseOthers: function(a) {
			this.tellOthers("pause", function() {
				return this.status.srcSet
			}, a)
		},
		stop: function() {
			this.status.srcSet ? this.html.active ? this._html_pause(0) : this.aurora.active ? this._aurora_pause(0) : this.flash.active && this._flash_pause(0) : this._urlNotSetError("stop")
		},
		playHead: function(a) {
			a = this._limitValue(a, 0, 100), this.status.srcSet ? this.html.active ? this._html_playHead(a) : this.aurora.active ? this._aurora_playHead(a) : this.flash.active && this._flash_playHead(a) : this._urlNotSetError("playHead")
		},
		_muted: function(a) {
			this.mutedWorker(a), this.options.globalVolume && this.tellOthers("mutedWorker", function() {
				return this.options.globalVolume
			}, a)
		},
		mutedWorker: function(b) {
			this.options.muted = b, this.html.used && this._html_setProperty("muted", b), this.aurora.used && this._aurora_mute(b), this.flash.used && this._flash_mute(b), this.html.video.gate || this.html.audio.gate || (this._updateMute(b), this._updateVolume(this.options.volume), this._trigger(a.jPlayer.event.volumechange))
		},
		mute: function(a) {
			var c = "object" == typeof a;
			c && this.options.useStateClassSkin && this.options.muted ? this._muted(!1) : (a = a === b ? !0 : !!a, this._muted(a))
		},
		unmute: function(a) {
			a = a === b ? !0 : !!a, this._muted(!a)
		},
		_updateMute: function(a) {
			a === b && (a = this.options.muted), a ? this.addStateClass("muted") : this.removeStateClass("muted"), this.css.jq.mute.length && this.css.jq.unmute.length && (this.status.noVolume ? (this.css.jq.mute.hide(), this.css.jq.unmute.hide()) : a ? (this.css.jq.mute.hide(), this.css.jq.unmute.show()) : (this.css.jq.mute.show(), this.css.jq.unmute.hide()))
		},
		volume: function(a) {
			this.volumeWorker(a), this.options.globalVolume && this.tellOthers("volumeWorker", function() {
				return this.options.globalVolume
			}, a)
		},
		volumeWorker: function(b) {
			b = this._limitValue(b, 0, 1), this.options.volume = b, this.html.used && this._html_setProperty("volume", b), this.aurora.used && this._aurora_volume(b), this.flash.used && this._flash_volume(b), this.html.video.gate || this.html.audio.gate || (this._updateVolume(b), this._trigger(a.jPlayer.event.volumechange))
		},
		volumeBar: function(b) {
			if (this.css.jq.volumeBar.length) {
				var c = a(b.currentTarget),
					d = c.offset(),
					e = b.pageX - d.left,
					f = c.width(),
					g = c.height() - b.pageY + d.top,
					h = c.height();
				this.volume(this.options.verticalVolume ? g / h : e / f)
			}
			this.options.muted && this._muted(!1)
		},
		_updateVolume: function(a) {
			a === b && (a = this.options.volume), a = this.options.muted ? 0 : a, this.status.noVolume ? (this.addStateClass("noVolume"), this.css.jq.volumeBar.length && this.css.jq.volumeBar.hide(), this.css.jq.volumeBarValue.length && this.css.jq.volumeBarValue.hide(), this.css.jq.volumeMax.length && this.css.jq.volumeMax.hide()) : (this.removeStateClass("noVolume"), this.css.jq.volumeBar.length && this.css.jq.volumeBar.show(), this.css.jq.volumeBarValue.length && (this.css.jq.volumeBarValue.show(), this.css.jq.volumeBarValue[this.options.verticalVolume ? "height" : "width"](100 * a + "%")), this.css.jq.volumeMax.length && this.css.jq.volumeMax.show())
		},
		volumeMax: function() {
			this.volume(1), this.options.muted && this._muted(!1)
		},
		_cssSelectorAncestor: function(b) {
			var c = this;
			this.options.cssSelectorAncestor = b, this._removeUiClass(), this.ancestorJq = b ? a(b) : [], b && 1 !== this.ancestorJq.length && this._warning({
				type: a.jPlayer.warning.CSS_SELECTOR_COUNT,
				context: b,
				message: a.jPlayer.warningMsg.CSS_SELECTOR_COUNT + this.ancestorJq.length + " found for cssSelectorAncestor.",
				hint: a.jPlayer.warningHint.CSS_SELECTOR_COUNT
			}), this._addUiClass(), a.each(this.options.cssSelector, function(a, b) {
				c._cssSelector(a, b)
			}), this._updateInterface(), this._updateButtons(), this._updateAutohide(), this._updateVolume(), this._updateMute()
		},
		_cssSelector: function(b, c) {
			var d = this;
			if ("string" == typeof c)
				if (a.jPlayer.prototype.options.cssSelector[b]) {
					if (this.css.jq[b] && this.css.jq[b].length && this.css.jq[b].unbind(".jPlayer"), this.options.cssSelector[b] = c, this.css.cs[b] = this.options.cssSelectorAncestor + " " + c, this.css.jq[b] = c ? a(this.css.cs[b]) : [], this.css.jq[b].length && this[b]) {
						var e = function(c) {
							c.preventDefault(), d[b](c), d.options.autoBlur ? a(this).blur() : a(this).focus()
						};
						this.css.jq[b].bind("click.jPlayer", e)
					}
					c && 1 !== this.css.jq[b].length && this._warning({
						type: a.jPlayer.warning.CSS_SELECTOR_COUNT,
						context: this.css.cs[b],
						message: a.jPlayer.warningMsg.CSS_SELECTOR_COUNT + this.css.jq[b].length + " found for " + b + " method.",
						hint: a.jPlayer.warningHint.CSS_SELECTOR_COUNT
					})
				} else
					this._warning({
						type: a.jPlayer.warning.CSS_SELECTOR_METHOD,
						context: b,
						message: a.jPlayer.warningMsg.CSS_SELECTOR_METHOD,
						hint: a.jPlayer.warningHint.CSS_SELECTOR_METHOD
					});
			else
				this._warning({
					type: a.jPlayer.warning.CSS_SELECTOR_STRING,
					context: c,
					message: a.jPlayer.warningMsg.CSS_SELECTOR_STRING,
					hint: a.jPlayer.warningHint.CSS_SELECTOR_STRING
				})
		},
		duration: function(a) {
			this.options.toggleDuration && (this.options.captureDuration && a.stopPropagation(), this._setOption("remainingDuration", !this.options.remainingDuration))
		},
		seekBar: function(b) {
			if (this.css.jq.seekBar.length) {
				var c = a(b.currentTarget),
					d = c.offset(),
					e = b.pageX - d.left,
					f = c.width(),
					g = 100 * e / f;
				this.playHead(g)
			}
		},
		playbackRate: function(a) {
			this._setOption("playbackRate", a)
		},
		playbackRateBar: function(b) {
			if (this.css.jq.playbackRateBar.length) {
				var c, d, e = a(b.currentTarget),
					f = e.offset(),
					g = b.pageX - f.left,
					h = e.width(),
					i = e.height() - b.pageY + f.top,
					j = e.height();
				c = this.options.verticalPlaybackRate ? i / j : g / h, d = c * (this.options.maxPlaybackRate - this.options.minPlaybackRate) + this.options.minPlaybackRate, this.playbackRate(d)
			}
		},
		_updatePlaybackRate: function() {
			var a = this.options.playbackRate,
				b = (a - this.options.minPlaybackRate) / (this.options.maxPlaybackRate - this.options.minPlaybackRate);
			this.status.playbackRateEnabled ? (this.css.jq.playbackRateBar.length && this.css.jq.playbackRateBar.show(), this.css.jq.playbackRateBarValue.length && (this.css.jq.playbackRateBarValue.show(), this.css.jq.playbackRateBarValue[this.options.verticalPlaybackRate ? "height" : "width"](100 * b + "%"))) : (this.css.jq.playbackRateBar.length && this.css.jq.playbackRateBar.hide(), this.css.jq.playbackRateBarValue.length && this.css.jq.playbackRateBarValue.hide())
		},
		repeat: function(a) {
			var b = "object" == typeof a;
			this._loop(b && this.options.useStateClassSkin && this.options.loop ? !1 : !0)
		},
		repeatOff: function() {
			this._loop(!1)
		},
		_loop: function(b) {
			this.options.loop !== b && (this.options.loop = b, this._updateButtons(), this._trigger(a.jPlayer.event.repeat))
		},
		option: function(c, d) {
			var e = c;
			if (0 === arguments.length)
				return a.extend(!0, {}, this.options);
			if ("string" == typeof c) {
				var f = c.split(".");
				if (d === b) {
					for (var g = a.extend(!0, {}, this.options), h = 0; h < f.length; h++) {
						if (g[f[h]] === b)
							return this._warning({
								type: a.jPlayer.warning.OPTION_KEY,
								context: c,
								message: a.jPlayer.warningMsg.OPTION_KEY,
								hint: a.jPlayer.warningHint.OPTION_KEY
							}), b;
						g = g[f[h]]
					}
					return g
				}
				e = {};
				for (var i = e, j = 0; j < f.length; j++)
					j < f.length - 1 ? (i[f[j]] = {}, i = i[f[j]]) : i[f[j]] = d
			}
			return this._setOptions(e), this
		},
		_setOptions: function(b) {
			var c = this;
			return a.each(b, function(a, b) {
				c._setOption(a, b)
			}), this
		},
		_setOption: function(b, c) {
			var d = this;
			switch (b) {
				case "volume":
					this.volume(c);
					break;
				case "muted":
					this._muted(c);
					break;
				case "globalVolume":
					this.options[b] = c;
					break;
				case "cssSelectorAncestor":
					this._cssSelectorAncestor(c);
					break;
				case "cssSelector":
					a.each(c, function(a, b) {
						d._cssSelector(a, b)
					});
					break;
				case "playbackRate":
					this.options[b] = c = this._limitValue(c, this.options.minPlaybackRate, this.options.maxPlaybackRate), this.html.used && this._html_setProperty("playbackRate", c), this._updatePlaybackRate();
					break;
				case "defaultPlaybackRate":
					this.options[b] = c = this._limitValue(c, this.options.minPlaybackRate, this.options.maxPlaybackRate), this.html.used && this._html_setProperty("defaultPlaybackRate", c), this._updatePlaybackRate();
					break;
				case "minPlaybackRate":
					this.options[b] = c = this._limitValue(c, .1, this.options.maxPlaybackRate - .1), this._updatePlaybackRate();
					break;
				case "maxPlaybackRate":
					this.options[b] = c = this._limitValue(c, this.options.minPlaybackRate + .1, 16), this._updatePlaybackRate();
					break;
				case "fullScreen":
					if (this.options[b] !== c) {
						var e = a.jPlayer.nativeFeatures.fullscreen.used.webkitVideo;
						(!e || e && !this.status.waitForPlay) && (e || (this.options[b] = c), c ? this._requestFullscreen() : this._exitFullscreen(), e || this._setOption("fullWindow", c))
					}
					break;
				case "fullWindow":
					this.options[b] !== c && (this._removeUiClass(), this.options[b] = c, this._refreshSize());
					break;
				case "size":
					this.options.fullWindow || this.options[b].cssClass === c.cssClass || this._removeUiClass(), this.options[b] = a.extend({}, this.options[b], c), this._refreshSize();
					break;
				case "sizeFull":
					this.options.fullWindow && this.options[b].cssClass !== c.cssClass && this._removeUiClass(), this.options[b] = a.extend({}, this.options[b], c), this._refreshSize();
					break;
				case "autohide":
					this.options[b] = a.extend({}, this.options[b], c), this._updateAutohide();
					break;
				case "loop":
					this._loop(c);
					break;
				case "remainingDuration":
					this.options[b] = c, this._updateInterface();
					break;
				case "toggleDuration":
					this.options[b] = c;
					break;
				case "nativeVideoControls":
					this.options[b] = a.extend({}, this.options[b], c), this.status.nativeVideoControls = this._uaBlocklist(this.options.nativeVideoControls), this._restrictNativeVideoControls(), this._updateNativeVideoControls();
					break;
				case "noFullWindow":
					this.options[b] = a.extend({}, this.options[b], c), this.status.nativeVideoControls = this._uaBlocklist(this.options.nativeVideoControls), this.status.noFullWindow = this._uaBlocklist(this.options.noFullWindow), this._restrictNativeVideoControls(), this._updateButtons();
					break;
				case "noVolume":
					this.options[b] = a.extend({}, this.options[b], c), this.status.noVolume = this._uaBlocklist(this.options.noVolume), this._updateVolume(), this._updateMute();
					break;
				case "emulateHtml":
					this.options[b] !== c && (this.options[b] = c, c ? this._emulateHtmlBridge() : this._destroyHtmlBridge());
					break;
				case "timeFormat":
					this.options[b] = a.extend({}, this.options[b], c);
					break;
				case "keyEnabled":
					this.options[b] = c, c || this !== a.jPlayer.focus || (a.jPlayer.focus = null);
					break;
				case "keyBindings":
					this.options[b] = a.extend(!0, {}, this.options[b], c);
					break;
				case "audioFullScreen":
					this.options[b] = c;
					break;
				case "autoBlur":
					this.options[b] = c
			}
			return this
		},
		_refreshSize: function() {
			this._setSize(), this._addUiClass(), this._updateSize(), this._updateButtons(), this._updateAutohide(), this._trigger(a.jPlayer.event.resize)
		},
		_setSize: function() {
			this.options.fullWindow ? (this.status.width = this.options.sizeFull.width, this.status.height = this.options.sizeFull.height, this.status.cssClass = this.options.sizeFull.cssClass) : (this.status.width = this.options.size.width, this.status.height = this.options.size.height, this.status.cssClass = this.options.size.cssClass), this.element.css({
				width: this.status.width,
				height: this.status.height
			})
		},
		_addUiClass: function() {
			this.ancestorJq.length && this.ancestorJq.addClass(this.status.cssClass)
		},
		_removeUiClass: function() {
			this.ancestorJq.length && this.ancestorJq.removeClass(this.status.cssClass)
		},
		_updateSize: function() {
			this.internal.poster.jq.css({
				width: this.status.width,
				height: this.status.height
			}), !this.status.waitForPlay && this.html.active && this.status.video || this.html.video.available && this.html.used && this.status.nativeVideoControls ? this.internal.video.jq.css({
				width: this.status.width,
				height: this.status.height
			}) : !this.status.waitForPlay && this.flash.active && this.status.video && this.internal.flash.jq.css({
				width: this.status.width,
				height: this.status.height
			})
		},
		_updateAutohide: function() {
			var a = this,
				b = "mousemove.jPlayer",
				c = ".jPlayerAutohide",
				d = b + c,
				e = function(b) {
					var c, d, e = !1;
					"undefined" != typeof a.internal.mouse ? (c = a.internal.mouse.x - b.pageX, d = a.internal.mouse.y - b.pageY, e = Math.floor(c) > 0 || Math.floor(d) > 0) : e = !0, a.internal.mouse = {
						x: b.pageX,
						y: b.pageY
					}, e && a.css.jq.gui.fadeIn(a.options.autohide.fadeIn, function() {
						clearTimeout(a.internal.autohideId), a.internal.autohideId = setTimeout(function() {
							a.css.jq.gui.fadeOut(a.options.autohide.fadeOut)
						}, a.options.autohide.hold)
					})
				};
			this.css.jq.gui.length && (this.css.jq.gui.stop(!0, !0), clearTimeout(this.internal.autohideId), delete this.internal.mouse, this.element.unbind(c), this.css.jq.gui.unbind(c), this.status.nativeVideoControls ? this.css.jq.gui.hide() : this.options.fullWindow && this.options.autohide.full || !this.options.fullWindow && this.options.autohide.restored ? (this.element.bind(d, e), this.css.jq.gui.bind(d, e), this.css.jq.gui.hide()) : this.css.jq.gui.show())
		},
		fullScreen: function(a) {
			var b = "object" == typeof a;
			b && this.options.useStateClassSkin && this.options.fullScreen ? this._setOption("fullScreen", !1) : this._setOption("fullScreen", !0)
		},
		restoreScreen: function() {
			this._setOption("fullScreen", !1)
		},
		_fullscreenAddEventListeners: function() {
			var b = this,
				c = a.jPlayer.nativeFeatures.fullscreen;
			c.api.fullscreenEnabled && c.event.fullscreenchange && ("function" != typeof this.internal.fullscreenchangeHandler && (this.internal.fullscreenchangeHandler = function() {
				b._fullscreenchange()
			}), document.addEventListener(c.event.fullscreenchange, this.internal.fullscreenchangeHandler, !1))
		},
		_fullscreenRemoveEventListeners: function() {
			var b = a.jPlayer.nativeFeatures.fullscreen;
			this.internal.fullscreenchangeHandler && document.removeEventListener(b.event.fullscreenchange, this.internal.fullscreenchangeHandler, !1)
		},
		_fullscreenchange: function() {
			this.options.fullScreen && !a.jPlayer.nativeFeatures.fullscreen.api.fullscreenElement() && this._setOption("fullScreen", !1)
		},
		_requestFullscreen: function() {
			var b = this.ancestorJq.length ? this.ancestorJq[0] : this.element[0],
				c = a.jPlayer.nativeFeatures.fullscreen;
			c.used.webkitVideo && (b = this.htmlElement.video), c.api.fullscreenEnabled && c.api.requestFullscreen(b)
		},
		_exitFullscreen: function() {
			var b, c = a.jPlayer.nativeFeatures.fullscreen;
			c.used.webkitVideo && (b = this.htmlElement.video), c.api.fullscreenEnabled && c.api.exitFullscreen(b)
		},
		_html_initMedia: function(b) {
			var c = a(this.htmlElement.media).empty();
			a.each(b.track || [], function(a, b) {
				var d = document.createElement("track");
				d.setAttribute("kind", b.kind ? b.kind : ""), d.setAttribute("src", b.src ? b.src : ""), d.setAttribute("srclang", b.srclang ? b.srclang : ""), d.setAttribute("label", b.label ? b.label : ""), b.def && d.setAttribute("default", b.def), c.append(d)
			}), this.htmlElement.media.src = this.status.src, "none" !== this.options.preload && this._html_load(), this._trigger(a.jPlayer.event.timeupdate)
		},
		_html_setFormat: function(b) {
			var c = this;
			a.each(this.formats, function(a, d) {
				return c.html.support[d] && b[d] ? (c.status.src = b[d], c.status.format[d] = !0, c.status.formatType = d, !1) : void 0
			})
		},
		_html_setAudio: function(a) {
			this._html_setFormat(a), this.htmlElement.media = this.htmlElement.audio, this._html_initMedia(a)
		},
		_html_setVideo: function(a) {
			this._html_setFormat(a), this.status.nativeVideoControls && (this.htmlElement.video.poster = this._validString(a.poster) ? a.poster : ""), this.htmlElement.media = this.htmlElement.video, this._html_initMedia(a)
		},
		_html_resetMedia: function() {
			this.htmlElement.media && (this.htmlElement.media.id !== this.internal.video.id || this.status.nativeVideoControls || this.internal.video.jq.css({
				width: "0px",
				height: "0px"
			}), this.htmlElement.media.pause())
		},
		_html_clearMedia: function() {
			this.htmlElement.media && (this.htmlElement.media.src = "about:blank", this.htmlElement.media.load())
		},
		_html_load: function() {
			this.status.waitForLoad && (this.status.waitForLoad = !1, this.htmlElement.media.load()), clearTimeout(this.internal.htmlDlyCmdId)
		},
		_html_play: function(a) {
			var b = this,
				c = this.htmlElement.media;
			if (this.androidFix.pause = !1, this._html_load(), this.androidFix.setMedia)
				this.androidFix.play = !0, this.androidFix.time = a;
			else if (isNaN(a))
				c.play();
			else {
				this.internal.cmdsIgnored && c.play();
				try {
					if (c.seekable && !("object" == typeof c.seekable && c.seekable.length > 0))
						throw 1;
					c.currentTime = a, c.play()
				} catch (d) {
					return void(this.internal.htmlDlyCmdId = setTimeout(function() {
						b.play(a)
					}, 250))
				}
			}
			this._html_checkWaitForPlay()
		},
		_html_pause: function(a) {
			var b = this,
				c = this.htmlElement.media;
			if (this.androidFix.play = !1, a > 0 ? this._html_load() : clearTimeout(this.internal.htmlDlyCmdId), c.pause(), this.androidFix.setMedia)
				this.androidFix.pause = !0, this.androidFix.time = a;
			else if (!isNaN(a))
				try {
					if (c.seekable && !("object" == typeof c.seekable && c.seekable.length > 0))
						throw 1;
					c.currentTime = a
				} catch (d) {
					return void(this.internal.htmlDlyCmdId = setTimeout(function() {
						b.pause(a)
					}, 250))
				}
			a > 0 && this._html_checkWaitForPlay()
		},
		_html_playHead: function(a) {
			var b = this,
				c = this.htmlElement.media;
			this._html_load();
			try {
				if ("object" == typeof c.seekable && c.seekable.length > 0)
					c.currentTime = a * c.seekable.end(c.seekable.length - 1) / 100;
				else {
					if (!(c.duration > 0) || isNaN(c.duration))
						throw "e";
					c.currentTime = a * c.duration / 100
				}
			} catch (d) {
				return void(this.internal.htmlDlyCmdId = setTimeout(function() {
					b.playHead(a)
				}, 250))
			}
			this.status.waitForLoad || this._html_checkWaitForPlay()
		},
		_html_checkWaitForPlay: function() {
			this.status.waitForPlay && (this.status.waitForPlay = !1, this.css.jq.videoPlay.length && this.css.jq.videoPlay.hide(), this.status.video && (this.internal.poster.jq.hide(), this.internal.video.jq.css({
				width: this.status.width,
				height: this.status.height
			})))
		},
		_html_setProperty: function(a, b) {
			this.html.audio.available && (this.htmlElement.audio[a] = b), this.html.video.available && (this.htmlElement.video[a] = b)
		},
		_aurora_setAudio: function(b) {
			var c = this;
			a.each(this.formats, function(a, d) {
				return c.aurora.support[d] && b[d] ? (c.status.src = b[d], c.status.format[d] = !0, c.status.formatType = d, !1) : void 0
			}), this.aurora.player = new AV.Player.fromURL(this.status.src), this._addAuroraEventListeners(this.aurora.player, this.aurora), "auto" === this.options.preload && (this._aurora_load(), this.status.waitForLoad = !1)
		},
		_aurora_resetMedia: function() {
			this.aurora.player && this.aurora.player.stop()
		},
		_aurora_clearMedia: function() {},
		_aurora_load: function() {
			this.status.waitForLoad && (this.status.waitForLoad = !1, this.aurora.player.preload())
		},
		_aurora_play: function(b) {
			this.status.waitForLoad || isNaN(b) || this.aurora.player.seek(b), this.aurora.player.playing || this.aurora.player.play(), this.status.waitForLoad = !1, this._aurora_checkWaitForPlay(), this._updateButtons(!0), this._trigger(a.jPlayer.event.play)
		},
		_aurora_pause: function(b) {
			isNaN(b) || this.aurora.player.seek(1e3 * b), this.aurora.player.pause(), b > 0 && this._aurora_checkWaitForPlay(), this._updateButtons(!1), this._trigger(a.jPlayer.event.pause)
		},
		_aurora_playHead: function(a) {
			this.aurora.player.duration > 0 && this.aurora.player.seek(a * this.aurora.player.duration / 100), this.status.waitForLoad || this._aurora_checkWaitForPlay()
		},
		_aurora_checkWaitForPlay: function() {
			this.status.waitForPlay && (this.status.waitForPlay = !1)
		},
		_aurora_volume: function(a) {
			this.aurora.player.volume = 100 * a
		},
		_aurora_mute: function(a) {
			a ? (this.aurora.properties.lastvolume = this.aurora.player.volume, this.aurora.player.volume = 0) : this.aurora.player.volume = this.aurora.properties.lastvolume, this.aurora.properties.muted = a
		},
		_flash_setAudio: function(b) {
			var c = this;
			try {
				a.each(this.formats, function(a, d) {
					if (c.flash.support[d] && b[d]) {
						switch (d) {
							case "m4a":
							case "fla":
								c._getMovie().fl_setAudio_m4a(b[d]);
								break;
							case "mp3":
								c._getMovie().fl_setAudio_mp3(b[d]);
								break;
							case "rtmpa":
								c._getMovie().fl_setAudio_rtmp(b[d])
						}
						return c.status.src = b[d], c.status.format[d] = !0, c.status.formatType = d, !1
					}
				}), "auto" === this.options.preload && (this._flash_load(), this.status.waitForLoad = !1)
			} catch (d) {
				this._flashError(d)
			}
		},
		_flash_setVideo: function(b) {
			var c = this;
			try {
				a.each(this.formats, function(a, d) {
					if (c.flash.support[d] && b[d]) {
						switch (d) {
							case "m4v":
							case "flv":
								c._getMovie().fl_setVideo_m4v(b[d]);
								break;
							case "rtmpv":
								c._getMovie().fl_setVideo_rtmp(b[d])
						}
						return c.status.src = b[d], c.status.format[d] = !0, c.status.formatType = d, !1
					}
				}), "auto" === this.options.preload && (this._flash_load(), this.status.waitForLoad = !1)
			} catch (d) {
				this._flashError(d)
			}
		},
		_flash_resetMedia: function() {
			this.internal.flash.jq.css({
				width: "0px",
				height: "0px"
			}), this._flash_pause(0 / 0)
		},
		_flash_clearMedia: function() {
			try {
				this._getMovie().fl_clearMedia()
			} catch (a) {
				this._flashError(a)
			}
		},
		_flash_load: function() {
			try {
				this._getMovie().fl_load()
			} catch (a) {
				this._flashError(a)
			}
			this.status.waitForLoad = !1
		},
		_flash_play: function(a) {
			try {
				this._getMovie().fl_play(a)
			} catch (b) {
				this._flashError(b)
			}
			this.status.waitForLoad = !1, this._flash_checkWaitForPlay()
		},
		_flash_pause: function(a) {
			try {
				this._getMovie().fl_pause(a)
			} catch (b) {
				this._flashError(b)
			}
			a > 0 && (this.status.waitForLoad = !1, this._flash_checkWaitForPlay())
		},
		_flash_playHead: function(a) {
			try {
				this._getMovie().fl_play_head(a)
			} catch (b) {
				this._flashError(b)
			}
			this.status.waitForLoad || this._flash_checkWaitForPlay()
		},
		_flash_checkWaitForPlay: function() {
			this.status.waitForPlay && (this.status.waitForPlay = !1, this.css.jq.videoPlay.length && this.css.jq.videoPlay.hide(), this.status.video && (this.internal.poster.jq.hide(), this.internal.flash.jq.css({
				width: this.status.width,
				height: this.status.height
			})))
		},
		_flash_volume: function(a) {
			try {
				this._getMovie().fl_volume(a)
			} catch (b) {
				this._flashError(b)
			}
		},
		_flash_mute: function(a) {
			try {
				this._getMovie().fl_mute(a)
			} catch (b) {
				this._flashError(b)
			}
		},
		_getMovie: function() {
			return document[this.internal.flash.id]
		},
		_getFlashPluginVersion: function() {
			var a, b = 0;
			if (window.ActiveXObject)
				try {
					if (a = new ActiveXObject("ShockwaveFlash.ShockwaveFlash")) {
						var c = a.GetVariable("$version");
						c && (c = c.split(" ")[1].split(","), b = parseInt(c[0], 10) + "." + parseInt(c[1], 10))
					}
				} catch (d) {}
			else
				navigator.plugins && navigator.mimeTypes.length > 0 && (a = navigator.plugins["Shockwave Flash"], a && (b = navigator.plugins["Shockwave Flash"].description.replace(/.*\s(\d+\.\d+).*/, "$1")));
			return 1 * b
		},
		_checkForFlash: function(a) {
			var b = !1;
			return this._getFlashPluginVersion() >= a && (b = !0), b
		},
		_validString: function(a) {
			return a && "string" == typeof a
		},
		_limitValue: function(a, b, c) {
			return b > a ? b : a > c ? c : a
		},
		_urlNotSetError: function(b) {
			this._error({
				type: a.jPlayer.error.URL_NOT_SET,
				context: b,
				message: a.jPlayer.errorMsg.URL_NOT_SET,
				hint: a.jPlayer.errorHint.URL_NOT_SET
			})
		},
		_flashError: function(b) {
			var c;
			c = this.internal.ready ? "FLASH_DISABLED" : "FLASH", this._error({
				type: a.jPlayer.error[c],
				context: this.internal.flash.swf,
				message: a.jPlayer.errorMsg[c] + b.message,
				hint: a.jPlayer.errorHint[c]
			}), this.internal.flash.jq.css({
				width: "1px",
				height: "1px"
			})
		},
		_error: function(b) {
			this._trigger(a.jPlayer.event.error, b), this.options.errorAlerts && this._alert("Error!" + (b.message ? "\n" + b.message : "") + (b.hint ? "\n" + b.hint : "") + "\nContext: " + b.context)
		},
		_warning: function(c) {
			this._trigger(a.jPlayer.event.warning, b, c), this.options.warningAlerts && this._alert("Warning!" + (c.message ? "\n" + c.message : "") + (c.hint ? "\n" + c.hint : "") + "\nContext: " + c.context)
		},
		_alert: function(a) {
			var b = "jPlayer " + this.version.script + " : id='" + this.internal.self.id + "' : " + a;
			this.options.consoleAlerts ? window.console && window.console.log && window.console.log(b) : alert(b)
		},
		_emulateHtmlBridge: function() {
			var b = this;
			a.each(a.jPlayer.emulateMethods.split(/\s+/g), function(a, c) {
				b.internal.domNode[c] = function(a) {
					b[c](a)
				}
			}), a.each(a.jPlayer.event, function(c, d) {
				var e = !0;
				a.each(a.jPlayer.reservedEvent.split(/\s+/g), function(a, b) {
					return b === c ? (e = !1, !1) : void 0
				}), e && b.element.bind(d + ".jPlayer.jPlayerHtml", function() {
					b._emulateHtmlUpdate();
					var a = document.createEvent("Event");
					a.initEvent(c, !1, !0), b.internal.domNode.dispatchEvent(a)
				})
			})
		},
		_emulateHtmlUpdate: function() {
			var b = this;
			a.each(a.jPlayer.emulateStatus.split(/\s+/g), function(a, c) {
				b.internal.domNode[c] = b.status[c]
			}), a.each(a.jPlayer.emulateOptions.split(/\s+/g), function(a, c) {
				b.internal.domNode[c] = b.options[c]
			})
		},
		_destroyHtmlBridge: function() {
			var b = this;
			this.element.unbind(".jPlayerHtml");
			var c = a.jPlayer.emulateMethods + " " + a.jPlayer.emulateStatus + " " + a.jPlayer.emulateOptions;
			a.each(c.split(/\s+/g), function(a, c) {
				delete b.internal.domNode[c]
			})
		}
	}, a.jPlayer.error = {
		FLASH: "e_flash",
		FLASH_DISABLED: "e_flash_disabled",
		NO_SOLUTION: "e_no_solution",
		NO_SUPPORT: "e_no_support",
		URL: "e_url",
		URL_NOT_SET: "e_url_not_set",
		VERSION: "e_version"
	}, a.jPlayer.errorMsg = {
		FLASH: "jPlayer's Flash fallback is not configured correctly, or a command was issued before the jPlayer Ready event. Details: ",
		FLASH_DISABLED: "jPlayer's Flash fallback has been disabled by the browser due to the CSS rules you have used. Details: ",
		NO_SOLUTION: "No solution can be found by jPlayer in this browser. Neither HTML nor Flash can be used.",
		NO_SUPPORT: "It is not possible to play any media format provided in setMedia() on this browser using your current options.",
		URL: "Media URL could not be loaded.",
		URL_NOT_SET: "Attempt to issue media playback commands, while no media url is set.",
		VERSION: "jPlayer " + a.jPlayer.prototype.version.script + " needs Jplayer.swf version " + a.jPlayer.prototype.version.needFlash + " but found "
	}, a.jPlayer.errorHint = {
		FLASH: "Check your swfPath option and that Jplayer.swf is there.",
		FLASH_DISABLED: "Check that you have not display:none; the jPlayer entity or any ancestor.",
		NO_SOLUTION: "Review the jPlayer options: support and supplied.",
		NO_SUPPORT: "Video or audio formats defined in the supplied option are missing.",
		URL: "Check media URL is valid.",
		URL_NOT_SET: "Use setMedia() to set the media URL.",
		VERSION: "Update jPlayer files."
	}, a.jPlayer.warning = {
		CSS_SELECTOR_COUNT: "e_css_selector_count",
		CSS_SELECTOR_METHOD: "e_css_selector_method",
		CSS_SELECTOR_STRING: "e_css_selector_string",
		OPTION_KEY: "e_option_key"
	}, a.jPlayer.warningMsg = {
		CSS_SELECTOR_COUNT: "The number of css selectors found did not equal one: ",
		CSS_SELECTOR_METHOD: "The methodName given in jPlayer('cssSelector') is not a valid jPlayer method.",
		CSS_SELECTOR_STRING: "The methodCssSelector given in jPlayer('cssSelector') is not a String or is empty.",
		OPTION_KEY: "The option requested in jPlayer('option') is undefined."
	}, a.jPlayer.warningHint = {
		CSS_SELECTOR_COUNT: "Check your css selector and the ancestor.",
		CSS_SELECTOR_METHOD: "Check your method name.",
		CSS_SELECTOR_STRING: "Check your css selector is a string.",
		OPTION_KEY: "Check your option name."
	}
});;
(function(n) {
	typeof define == "function" && define.amd ? define(["jquery"], n) : n(jQuery)
})(function(n) {
	var r = [],
		e = n(document),
		u = navigator.userAgent.toLowerCase(),
		f = n(window),
		i = [],
		t = {
			ieQuirks: null,
			msie: /msie/.test(u) && !/opera/.test(u),
			opera: /opera/.test(u)
		};
	t.ie6 = t.msie && /msie 6./.test(u) && typeof window.XMLHttpRequest != "object", t.ie7 = t.msie && /msie 7.0/.test(u), t.boxModel = document.compatMode === "CSS1Compat", n.modal = function(t, i) {
		return n.modal.impl.init(t, i)
	}, n.modal.close = function() {
		n.modal.impl.close()
	}, n.modal.focus = function(t) {
		n.modal.impl.focus(t)
	}, n.modal.setContainerDimensions = function() {
		n.modal.impl.setContainerDimensions()
	}, n.modal.setPosition = function() {
		n.modal.impl.setPosition()
	}, n.modal.update = function(t, i) {
		n.modal.impl.update(t, i)
	}, n.fn.modal = function(t) {
		return n.modal.impl.init(this, t)
	}, n.modal.defaults = {
		appendTo: "body",
		focus: !0,
		opacity: 50,
		overlayId: "simplemodal-overlay",
		overlayCss: {},
		containerId: "simplemodal-container",
		containerCss: {},
		dataId: "simplemodal-data",
		dataCss: {},
		minHeight: null,
		minWidth: null,
		maxHeight: null,
		maxWidth: null,
		autoResize: !1,
		autoPosition: !0,
		zIndex: 1e3,
		close: !0,
		closeHTML: '<a class="modalCloseImg" title="Close"></a>',
		closeClass: "simplemodal-close",
		escClose: !0,
		overlayClose: !1,
		fixed: !0,
		position: null,
		persist: !1,
		modal: !0,
		onOpen: null,
		onShow: null,
		onClose: null
	}, n.modal.impl = {
		d: {},
		init: function(i, r) {
			var u = this;
			if (u.d.data)
				return !1;
			if (t.ieQuirks = t.msie && !(n.support.boxModel === undefined) && !n.support.boxModel, u.o = n.extend({}, n.modal.defaults, r), u.zIndex = u.o.zIndex, u.occb = !1, typeof i == "object")
				i = i instanceof n ? i : n(i), u.d.placeholder = !1, i.parent().parent().size() > 0 && (i.before(n("<span></span>").attr("id", "simplemodal-placeholder").css({
					display: "none"
				})), u.d.placeholder = !0, u.display = i.css("display"), u.o.persist || (u.d.orig = i.clone(!0)));
			else if (typeof i == "string" || typeof i == "number")
				i = n("<div></div>").html(i);
			else
				return alert("SimpleModal Error: Unsupported data type: " + typeof i), u;
			return u.create(i), i = null, u.open(), n.isFunction(u.o.onShow) && u.o.onShow.apply(u, [u.d]), u
		},
		create: function(u) {
			var f = this;
			f.getDimensions(), f.o.modal && t.ie6 && (f.d.iframe = n('<iframe src="javascript:false;"></iframe>').css(n.extend(f.o.iframeCss, {
				display: "none",
				opacity: 0,
				position: "fixed",
				height: i[0],
				width: i[1],
				zIndex: f.o.zIndex,
				top: 0,
				left: 0
			})).appendTo(f.o.appendTo)), f.d.overlay = n("<div></div>").attr("id", f.o.overlayId).addClass("simplemodal-overlay").css(n.extend(f.o.overlayCss, {
				display: "none",
				opacity: f.o.opacity / 100,
				height: f.o.modal ? r[0] : 0,
				width: f.o.modal ? r[1] : 0,
				position: "fixed",
				left: 0,
				top: 0,
				zIndex: f.o.zIndex + 1
			})).appendTo(f.o.appendTo), f.d.container = n("<div></div>").attr("id", f.o.containerId).addClass("simplemodal-container").css(n.extend({
				position: f.o.fixed ? "fixed" : "absolute"
			}, f.o.containerCss, {
				display: "none",
				zIndex: f.o.zIndex + 2
			})).append(f.o.close && f.o.closeHTML ? n(f.o.closeHTML).addClass(f.o.closeClass) : "").appendTo(f.o.appendTo), f.d.wrap = n("<div></div>").attr("tabIndex", -1).addClass("simplemodal-wrap").css({
				height: "100%",
				outline: 0,
				width: "100%"
			}).appendTo(f.d.container), f.d.data = u.attr("id", u.attr("id") || f.o.dataId).addClass("simplemodal-data").css(n.extend(f.o.dataCss, {
				display: "none"
			})).appendTo("body"), u = null, f.setContainerDimensions(), f.d.data.appendTo(f.d.wrap), (t.ie6 || t.ieQuirks) && f.fixIE()
		},
		bindEvents: function() {
			var u = this;
			n("." + u.o.closeClass).bind("click.simplemodal", function(n) {
				n.preventDefault(), u.close()
			}), u.o.modal && u.o.close && u.o.overlayClose && u.d.overlay.bind("click.simplemodal", function(n) {
				n.preventDefault(), u.close()
			}), e.bind("keydown.simplemodal", function(n) {
				u.o.modal && n.keyCode === 9 ? u.watchTab(n) : u.o.close && u.o.escClose && n.keyCode === 27 && (n.preventDefault(), u.close())
			}), f.bind("resize.simplemodal orientationchange.simplemodal", function() {
				u.getDimensions(), u.o.autoResize ? u.setContainerDimensions() : u.o.autoPosition && u.setPosition(), t.ie6 || t.ieQuirks ? u.fixIE() : u.o.modal && (u.d.iframe && u.d.iframe.css({
					height: i[0],
					width: i[1]
				}), u.d.overlay.css({
					height: r[0],
					width: r[1]
				}))
			})
		},
		unbindEvents: function() {
			n("." + this.o.closeClass).unbind("click.simplemodal"), e.unbind("keydown.simplemodal"), f.unbind(".simplemodal"), this.d.overlay.unbind("click.simplemodal")
		},
		fixIE: function() {
			var i = this,
				t = i.o.position;
			n.each([i.d.iframe || null, i.o.modal ? i.d.overlay : null, i.d.container.css("position") === "fixed" ? i.d.container : null], function(n, i) {
				var l, a, e, o;
				if (i) {
					var h = "document.body.clientHeight",
						s = "document.body.clientWidth",
						w = "document.body.scrollHeight",
						c = "document.body.scrollLeft",
						v = "document.body.scrollTop",
						y = "document.body.scrollWidth",
						b = "document.documentElement.clientHeight",
						p = "document.documentElement.clientWidth",
						f = "document.documentElement.scrollLeft",
						u = "document.documentElement.scrollTop",
						r = i[0].style;
					r.position = "absolute", n < 2 ? (r.removeExpression("height"), r.removeExpression("width"), r.setExpression("height", "" + w + " > " + h + " ? " + w + " : " + h + ' + "px"'), r.setExpression("width", "" + y + " > " + s + " ? " + y + " : " + s + ' + "px"')) : (t && t.constructor === Array ? (e = t[0] ? typeof t[0] == "number" ? t[0].toString() : t[0].replace(/px/, "") : i.css("top").replace(/px/, ""), l = e.indexOf("%") === -1 ? e + " + (t = " + u + " ? " + u + " : " + v + ') + "px"' : parseInt(e.replace(/%/, "")) + " * ((" + b + " || " + h + ") / 100) + (t = " + u + " ? " + u + " : " + v + ') + "px"', t[1] && (o = typeof t[1] == "number" ? t[1].toString() : t[1].replace(/px/, ""), a = o.indexOf("%") === -1 ? o + " + (t = " + f + " ? " + f + " : " + c + ') + "px"' : parseInt(o.replace(/%/, "")) + " * ((" + p + " || " + s + ") / 100) + (t = " + f + " ? " + f + " : " + c + ') + "px"')) : (l = "(" + b + " || " + h + ") / 2 - (this.offsetHeight / 2) + (t = " + u + " ? " + u + " : " + v + ') + "px"', a = "(" + p + " || " + s + ") / 2 - (this.offsetWidth / 2) + (t = " + f + " ? " + f + " : " + c + ') + "px"'), r.removeExpression("top"), r.removeExpression("left"), r.setExpression("top", l), r.setExpression("left", a))
				}
			})
		},
		focus: function(t) {
			var i = this,
				u = t && n.inArray(t, ["first", "last"]) !== -1 ? t : "first",
				r = n(":input:enabled:visible:" + u, i.d.wrap);
			setTimeout(function() {
				r.length > 0 ? r.focus() : i.d.wrap.focus()
			}, 10)
		},
		getDimensions: function() {
			var t = this,
				n = typeof window.innerHeight == "undefined" ? f.height() : window.innerHeight;
			r = [e.height(), e.width()], i = [n, f.width()]
		},
		getVal: function(n, t) {
			return n ? typeof n == "number" ? n : n === "auto" ? 0 : n.indexOf("%") > 0 ? parseInt(n.replace(/%/, "")) / 100 * (t === "h" ? i[0] : i[1]) : parseInt(n.replace(/px/, "")) : null
		},
		update: function(n, t) {
			var i = this;
			if (!i.d.data)
				return !1;
			i.d.origHeight = i.getVal(n, "h"), i.d.origWidth = i.getVal(t, "w"), i.d.data.hide(), n && i.d.container.css("height", n), t && i.d.container.css("width", t), i.setContainerDimensions(), i.d.data.show(), i.o.focus && i.focus(), i.unbindEvents(), i.bindEvents()
		},
		setContainerDimensions: function() {
			var n = this,
				v = t.ie6 || t.ie7,
				r = n.d.origHeight ? n.d.origHeight : t.opera ? n.d.container.height() : n.getVal(v ? n.d.container[0].currentStyle.height : n.d.container.css("height"), "h"),
				u = n.d.origWidth ? n.d.origWidth : t.opera ? n.d.container.width() : n.getVal(v ? n.d.container[0].currentStyle.width : n.d.container.css("width"), "w"),
				o = n.d.data.outerHeight(!0),
				s = n.d.data.outerWidth(!0),
				f;
			n.d.origHeight = n.d.origHeight || r, n.d.origWidth = n.d.origWidth || u;
			var l = n.o.maxHeight ? n.getVal(n.o.maxHeight, "h") : null,
				a = n.o.maxWidth ? n.getVal(n.o.maxWidth, "w") : null,
				h = l && l < i[0] ? l : i[0],
				c = a && a < i[1] ? a : i[1],
				e = n.o.minHeight ? n.getVal(n.o.minHeight, "h") : "auto";
			r = r ? n.o.autoResize && r > h ? h : r < e ? e : r : o ? o > h ? h : n.o.minHeight && e !== "auto" && o < e ? e : o : e, f = n.o.minWidth ? n.getVal(n.o.minWidth, "w") : "auto", u = u ? n.o.autoResize && u > c ? c : u < f ? f : u : s ? s > c ? c : n.o.minWidth && f !== "auto" && s < f ? f : s : f, n.d.container.css({
				height: r,
				width: u
			}), n.d.wrap.css({
				overflow: o > r || s > u ? "auto" : "visible"
			}), n.o.autoPosition && n.setPosition()
		},
		setPosition: function() {
			var n = this,
				t, r, u = i[0] / 2 - n.d.container.outerHeight(!0) / 2,
				e = i[1] / 2 - n.d.container.outerWidth(!0) / 2,
				o = n.d.container.css("position") !== "fixed" ? f.scrollTop() : 0;
			n.o.position && Object.prototype.toString.call(n.o.position) === "[object Array]" ? (t = o + (n.o.position[0] || u), r = n.o.position[1] || e) : (t = o + u, r = e), n.d.container.css({
				left: r,
				top: t
			})
		},
		watchTab: function(t) {
			var i = this,
				r;
			n(t.target).parents(".simplemodal-container").length > 0 ? (i.inputs = n(":input:enabled:visible:first, :input:enabled:visible:last", i.d.data[0]), (!t.shiftKey && t.target === i.inputs[i.inputs.length - 1] || t.shiftKey && t.target === i.inputs[0] || i.inputs.length === 0) && (t.preventDefault(), r = t.shiftKey ? "last" : "first", i.focus(r))) : (t.preventDefault(), i.focus())
		},
		open: function() {
			var t = this;
			t.d.iframe && t.d.iframe.show(), n.isFunction(t.o.onOpen) ? t.o.onOpen.apply(t, [t.d]) : (t.d.overlay.show(), t.d.container.show(), t.d.data.show()), t.o.focus && t.focus(), t.bindEvents()
		},
		close: function() {
			var t = this,
				i;
			if (!t.d.data)
				return !1;
			t.unbindEvents(), n.isFunction(t.o.onClose) && !t.occb ? (t.occb = !0, t.o.onClose.apply(t, [t.d])) : (t.d.placeholder ? (i = n("#simplemodal-placeholder"), t.o.persist ? i.replaceWith(t.d.data.removeClass("simplemodal-data").css("display", t.display)) : (t.d.data.hide().remove(), i.replaceWith(t.d.orig))) : t.d.data.hide().remove(), t.d.container.hide().remove(), t.d.overlay.hide(), t.d.iframe && t.d.iframe.hide().remove(), t.d.overlay.remove(), t.d = {})
		}
	}
});;
var RobloxThumbs = function() {
	function n(t, i, r) {
		$.get("/thumbs/rawavatar.ashx", {
			UserID: i,
			ThumbnailFormatID: r
		}, function(u) {
			u == "PENDING" ? window.setTimeout(function() {
				n(t, i, r)
			}, 3e3) : u.substring(5, 0) == "ERROR" || $("#" + t).attr("src", u)
		})
	}
	return {
		GenerateAvatarThumb: function(t, i, r) {
			$("#" + t).attr("src", "/images/spinners/waiting.gif"), n(t, i, r)
		}
	}
}();;
$(function() {
	var n = $("#image-retry-data"),
		t = n ? n.data("image-retry-timer") : 1500,
		i = n ? n.data("image-retry-max-times") : 10;
	$.fn.loadRobloxThumbnails = function() {
		function n(r) {
			var u = r.data("retry-url");
			u && $.ajax({
				url: u,
				dataType: "json",
				cache: !1,
				crossDomain: !0,
				xhrFields: {
					withCredentials: !0
				},
				success: function(u) {
					if (u.Final) {
						var f = r.find("img");
						f.length === 1 ? f.attr("src", u.Url) : r.find("img.original-image").attr("src", u.Url), r.removeAttr("data-retry-url")
					} else
						r.retryCount = r.retryCount ? r.retryCount + 1 : 1, r.retryCount < i && setTimeout(function() {
							n(r)
						}, t)
				}
			})
		}
		return this.each(function() {
			var i = $(this);
			setTimeout(function() {
				n(i)
			}, t)
		})
	}
});;
(function() {
	function s(t) {
		var i, r;
		for (i in n)
			if (n[i].container == t)
				return n[i].renderer;
		return r = {
			container: t,
			renderer: new THREE.WebGLRenderer({
				antialias: !0,
				alpha: !0
			})
		}, n.push(r), r.renderer
	}

	function o(n) {
		return $.ajax({
			dataType: "script",
			cache: !0,
			url: n
		})
	}

	function t(n, i) {
		var r = n.shift();
		r ? u[r] ? t(n, i) : o(r).done(function() {
			u[r] = !0, t(n, i)
		}) : i && i()
	}

	function e(n, i) {
		t((i || "").split(","), function() {
			n()
		})
	}

	function f(n) {
		var u = new THREE.AmbientLight(8882048),
			t, i, r;
		n.add(u), t = new THREE.DirectionalLight(11316396), t.position.set(-.671597898, .671597898, .312909544).normalize(), n.add(t), i = new THREE.DirectionalLight(4473924), r = (new THREE.Vector3).copy(t.position).negate().normalize(), i.position.set(r), n.add(i)
	}

	function r(n) {
		n.find(".thumbnail-spinner,canvas").remove()
	}

	function i(n) {
		return n.parent() ? typeof n.parent().data("moderation-mode") == "string" : !1
	}

	function k(n, t, r, u, e, o) {
		function l() {
			return r.parent().width()
		}

		function c() {
			return r.parent().height()
		}

		function k() {
			a.render(v, h)
		}

		function d() {
			b.enabled && b.update(), TWEEN.update(), k(), requestAnimationFrame(d)
		}

		function rt() {
			h.aspect = l() / c(), h.updateProjectionMatrix(), a.setSize(l(), c())
		}

		function ut() {
			a.setSize(l(), c());
			var n = a.domElement,
				t;
			$(window).resize(function() {
				clearTimeout(t), t = setTimeout(rt, 100)
			}).on("beforeunload", function() {
				$(n).hide()
			});
			return n
		}

		function ft() {
			var n = new THREE.OrbitControls(h, r.get(0), u);
			return et ? (n.autoRotate = !1, n.minDistance = .1, n.noPan = !1, n.noKeys = !1, n.noResetToInitialCameraPosition = !0) : (n.rotateSpeed = 1.5, n.zoomSpeed = 1.5, n.dynamicDampingFactor = .3), n.addEventListener("change", k), n
		}

		function tt(n) {
			f(v), v.add(n);
			var t = ut();
			b = ft(), k(), d(), e(t)
		}
		var a = s(r),
			it = "/thumbnail/resolve-hash/",
			et = i(r),
			g = new THREE.Vector3(u.aabb.max.x, u.aabb.max.y, u.aabb.max.z).length() * 4,
			nt = Math.max(g, y),
			h = new THREE.PerspectiveCamera(w, l() / c(), p, nt),
			v = new THREE.Scene,
			b, ot = new THREE.OBJMTLLoader;
		ot.load(it, n, t, tt, undefined, o)
	}
	var h = window.GoogleAnalyticsEvents && GoogleAnalyticsEvents.FireEvent || function() {},
		w = 70,
		p = .1,
		y = 1e3,
		v = 500,
		a = 10,
		l = 2e3,
		c = 20,
		b = 1e3,
		n = [],
		u = {};
	$.fn.load3DThumbnail = function(n, t) {
		function o() {
			u = !0
		}

		function f(n, i, r, u) {
			function e() {
				r-- > 0 && setTimeout(function() {
					f(n, i, r)
				}, u ? b : l)
			}
			$.ajax({
				url: n + "&_=" + $.now(),
				method: "GET",
				crossDomain: !0,
				xhrFields: {
					withCredentials: !0
				},
				cache: !1
			}).success(function(n) {
				n.Final ? $.getJSON(n.Url, function(n) {
					i(n)
				}).fail(function() {
					h(["3D Thumbnail Errors", n.Url]), t("3D Thumbnail failed to load")
				}) : e()
			}).fail(e)
		}
		var u = !1;
		return this.each(function() {
			var o = $(this),
				s;
			try {
				s = function() {
					function l() {
						s && (clearTimeout(s), s = undefined)
					}

					function y() {
						e.empty().show(), s = setTimeout(function() {
							e.addClass("text-center").html('<div class="loader" style="line-height:' + o.height() + 'px">Loading</div>')
						}, v)
					}

					function p() {
						l(), e.hide().empty().removeClass("text-center")
					}

					function w(i) {
						k(i.obj, i.mtl, o, i, function(t) {
							r(o), u || (p(), o.append(t), n(t))
						}, t)
					}
					var h = o.data("3d-url"),
						e, s;
					h && (r(o), e = $('<div class="thumbnail-spinner">'), e.appendTo(o), y(), f(h, w, i(o) ? c : a, i(o)))
				}, e(s, o.data("js-files"))
			} catch (h) {
				t(h)
			}
		}), {
			cancel: o
		}
	}
})();;
typeof Roblox == "undefined" && (Roblox = {}), Roblox.ThumbnailView = function() {
	function n() {
		if (n.hasOwnProperty("cache"))
			return n.cache;
		try {
			var t = document.createElement("canvas");
			return n.cache = !!window.WebGLRenderingContext && (t.getContext("webgl") || t.getContext("experimental-webgl"))
		} catch (i) {
			return n.cache = !1
		}
	}

	function f(n) {
		return !window.localStorage || !localStorage.setItem || !localStorage.getItem ? !1 : typeof n == "boolean" ? (localStorage.setItem(r, n.toString()), !0) : localStorage.getItem(r) == "true"
	}

	function s() {
		t.forEach(function(n) {
			n.showSpinner()
		})
	}

	function h() {
		t.forEach(function(n) {
			n.reload()
		})
	}

	function e(r) {
		function e() {
			return r.find(".thumbnail-span")
		}

		function h() {
			return e().find("img")
		}

		function l() {
			return r.find(".thumbnail-holder")
		}

		function b() {
			return r.find(u)
		}

		function w() {
			var n = r.find(".thumbnail-spinner,canvas");
			n.remove()
		}

		function v() {
			return typeof l().data("3d-thumbs-enabled") == "string"
		}

		function a() {
			return nt && typeof l().data("3d-thumbs-enabled") == "string"
		}

		function k() {
			return !a()
		}

		function p() {
			b().addClass("disabled")
		}

		function d() {
			a() ? (h().hide(), e().find(".thumbnail-spinner").length < 1 && (w(), e().append('<div class="thumbnail-spinner text-center"><div class="loader" style="line-height:' + r.height() + 'px">Loading</div></div>'))) : (w(), h().attr("src", o).show())
		}

		function c(t) {
			if (nt = t, f(t), s && s.cancel(), b().text(t ? "2D" : "3D").css("visibility", n() && v() ? "visible" : "hidden"), t && v())
				w(), h().hide(), s = e().load3DThumbnail(function(n) {
					s = undefined, i(["3D Thumbnail Loading", "Load succeeded"]), r.find("canvas").not(n).remove()
				}, function() {
					s = undefined, i(["3D Thumbnail Loading", "Load failed"]), p(), c(!1)
				});
			else {
				d();
				var u = e().data("retry-url");
				u ? e().loadRobloxThumbnails() : h().attr("src", g)
			}
		}

		function y() {
			n() && v() || p(), g = h().attr("src"), c(a())
		}

		function it() {
			var n = l().data("url");
			n ? r.load(n + "&_=" + $.now(), function() {
				y()
			}) : console.warn("Attempted to reload thumbnail without URL.")
		}
		var nt = n() && f(),
			s, g = "",
			tt = {
				container: r,
				holder: l,
				span: e,
				button: b,
				is3DEnabled: v,
				is3D: a,
				is2D: k,
				disabled3DButton: p,
				toggle3D: c,
				showSpinner: d,
				load: y,
				reload: it
			};
		r.on("click", u, function() {
			$(this).hasClass("disabled") || c(k())
		});
		return y(), t.push(tt), tt
	}
	var i = window.GoogleAnalyticsEvents && GoogleAnalyticsEvents.FireEvent || function() {},
		o = "/images/Spinners/ajax_loader_blue_300.gif",
		r = "RobloxUse3DThumbnailsV2",
		t = [],
		u = ".enable-three-dee";
	return $(function() {
		$(".thumbnail-holder").each(function() {
			e($(this).parent())
		})
	}), {
		thumbnailList: t,
		supports3D: n,
		setupThumbnailHolder: e,
		showSpinner: s,
		reloadThumbnail: h
	}
}();;
Roblox = Roblox || {}, Roblox.Linkify = function() {
	"use strict";

	function f() {
		var n = $("#roblox-linkify");
		if (n.length) {
			var r = n.data("regex"),
				u = n.data("regex-flags"),
				f = n.data("as-http-regex"),
				e = {
					enabled: n.data("enabled"),
					regex: new RegExp(r, u),
					doNotUpgradeToHttpsRegex: new RegExp(f)
				};
			i(e)
		}
		t = !0
	}

	function i(t) {
		$.extend(n, t)
	}

	function e(n) {
		return $("<div>" + n + "</div>").find("a[href]").length > 0
	}

	function r(t) {
		return t.match(n.doNotUpgradeToHttpsRegex)
	}

	function o(n) {
		return n.replace(/\&amp;/g, "&")
	}

	function s(n) {
		return n.replace(/\.+$/g, "")
	}

	function h(n) {
		return n.clone().wrap("<div>").parent().html()
	}

	function c(t) {
		return t.match(n.hasProtocolRegex) || (t = r(t) ? n.httpProtocol + t : n.defaultProtocol + t), t
	}

	function l(n) {
		return r(n) ? n.replace("https://", "http://") : n.replace("http://", "https://")
	}

	function a(t) {
		var f, r, i;
		return t = o(t), f = t, t = s(t), r = c(t), r = l(r), i = $("<a></a>"), i.addClass(n.cssClass), i.attr("href", r), i.text(f), u || i.attr("target", "_blank"), h(i)
	}

	function v(i) {
		return t || f(), n.enabled && !e(i) && (i = i.replace(n.regex, a)), i
	}
	var n = {
			enabled: !1,
			hasProtocolRegex: /(https?:\/\/)/,
			defaultProtocol: "https://",
			httpProtocol: "http://",
			cssClass: "text-link"
		},
		t = !1,
		u = Roblox.FixedUI && Roblox.FixedUI.isMobile;
	return {
		String: v,
		SetOptions: i
	}
}(), $.fn.linkify = function() {
	return this.each(function() {
		var t = $(this),
			n = t.html(),
			i;
		typeof n != "undefined" && n !== null && (i = Roblox.Linkify.String(n), t.html(i))
	})
}, $(function() {
	$(".linkify").linkify()
});;
typeof Roblox == "undefined" && (Roblox = {}), typeof Roblox.CookieUpgrader == "undefined" && (Roblox.CookieUpgrader = {}), Roblox.CookieUpgrader.domain = "", Roblox.CookieUpgrader.oneMonthInMs = 2592e6, Roblox.CookieUpgrader.upgrade = function(n, t) {
	function e(n) {
		var u = null,
			i, t, r;
		if (document.cookie && document.cookie !== "")
			for (i = document.cookie.split(";"), t = 0; t < i.length; t++)
				if (r = jQuery.trim(i[t]), r.substring(0, n.length + 1) === n + "=") {
					u = r.substring(n.length + 1);
					break
				}
		return u
	}
	var i, o, r, f, s, u, h;
	if (Roblox.CookieUpgrader.domain !== "" && (i = e(n), i != null))
		try {
			if (o = document.cookie.length, document.cookie = n + "=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/", document.cookie = n + "=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/; domain=" + window.location.host, document.cookie.length === o)
				return;
			if (r = n, typeof t.newCookieName != "undefined" && (r = t.newCookieName), f = e(n), f != null) {
				typeof GoogleAnalyticsEvents != "undefined" && GoogleAnalyticsEvents.FireEvent(["CookieUpgrader", "DeletedRedundantCookie", n]), s = {
					cookieName: n,
					cookieValue: f
				}, Roblox.EventStream && Roblox.EventStream.SendEventWithTarget("CookieUpgrader", "DeletedRedundantCookie", s, Roblox.EventStream.TargetTypes.DIAGNOSTIC);
				return
			}
			u = r + "=" + i + "; ", u += "expires=" + t.expires(i).toUTCString() + "; ", u += "path=/; domain=" + Roblox.CookieUpgrader.domain, document.cookie = u, typeof GoogleAnalyticsEvents != "undefined" && GoogleAnalyticsEvents.FireEvent(["CookieUpgrader", "ConvertedCookie", n]), h = {
				cookieName: n,
				cookieValue: i,
				newCookieName: r
			}, Roblox.EventStream && Roblox.EventStream.SendEventWithTarget("CookieUpgrader", "ConvertedCookie", h, Roblox.EventStream.TargetTypes.DIAGNOSTIC)
		} catch (c) {
			typeof GoogleAnalyticsEvents != "undefined" && GoogleAnalyticsEvents.FireEvent(["CookieUpgrader", "ExceptionDuringConvertOf" + n, c.message])
		}
}, Roblox.CookieUpgrader.getExpirationFromCookieValue = function(n, t) {
	var f = new RegExp(n + "=(\\d+)/(\\d+)/(\\d+)"),
		i = t.match(f),
		u = +new Date,
		r;
	return i != null && i.length != 0 && (r = new Date(i[3], i[1] - 1, i[2]), isNaN(r.getTime()) || (u = r.getTime())), new Date(u + Roblox.CookieUpgrader.oneMonthInMs)
}, Roblox.CookieUpgrader.thirtyDaysFromNow = function() {
	return new Date(+new Date + Roblox.CookieUpgrader.oneMonthInMs)
}, Roblox.CookieUpgrader.thirtyYearsFromNow = function() {
	return new Date(+new Date + 94608e7)
}, Roblox.CookieUpgrader.fourHoursFromNow = function() {
	return new Date(+new Date + 144e5)
};;
var Roblox = Roblox || {};
Roblox.StringFormat = function() {
	String.prototype.format = function() {
		var n = arguments;
		return this.replace(/\{(\d+)\}/g, function(t, i) {
			return n[i]
		})
	}
}();;
var Roblox = Roblox || {};
Roblox.SignupTrackingScript = function() {
	function n(n, t) {
		RobloxEventManager.triggerEvent("rbx_evt_signup", {
			age: n,
			gender: t
		})
	}
	return {
		trackingScript: n
	}
}();;
var Roblox = Roblox || {};
Roblox.AsyncGoogleOnScript = function() {
	function n(n, t) {
		GoogleAnalyticsEvents && GoogleAnalyticsEvents.FireEvent(["Signup", "Signup - Roblox", n, t])
	}
	return {
		googleGoalFire: n
	}
}();;

function openVideoPreroll2(n) {
	Roblox.VideoPreRoll.test(n)
}

function flashCheck(n) {
	var t = !1,
		i, r;
	if (navigator.plugins && navigator.mimeTypes.length > 0)
		i = navigator.plugins["Shockwave Flash"], i && (r = navigator.plugins["Shockwave Flash"].description.replace(/.*\s(\d+\.\d+).*/, "$1"), r >= n && (t = !0));
	else
		try {
			i = new ActiveXObject("ShockwaveFlash.ShockwaveFlash." + n), t = !0
		} catch (u) {}
	return t
}
typeof Roblox == "undefined" && (Roblox = {}), Roblox.VideoPreRoll = {
	newValue: "",
	showVideoPreRoll: !0,
	videoInitialized: !1,
	videoStarted: !1,
	videoCompleted: !1,
	videoSkipped: !1,
	videoCancelled: !1,
	videoErrored: !1,
	videoOptions: {
		key: "integration_test",
		companionId: "videoPrerollCompanionAd"
	},
	myvpaidad: null,
	loadingBarMaxTime: 7e3,
	loadingBarCurrentTime: 0,
	loadingBarIntervalID: 0,
	loadingBarID: "videoPrerollLoadingBar",
	loadingBarInnerID: "videoPrerollLoadingBarCompleted",
	loadingBarPercentageID: "videoPrerollLoadingPercent",
	videoLoadingTimeout: 7e3,
	videoPlayingTimeout: 7e3,
	videoLogNote: "",
	logsEnabled: !1,
	excludedPlaceIds: "",
	specificAdOnPlacePageEnabled: !1,
	specificAdOnPlacePageId: 0,
	specificAdOnPlacePageCategory: "",
	specificAdOnPlacePage2Enabled: !1,
	specificAdOnPlacePage2Id: 0,
	specificAdOnPlacePage2Category: "",
	adTime: 0,
	placeId: 0,
	isPrerollShownEveryXMinutesEnabled: !0,
	checkEligibility: function() {
		Roblox.VideoPreRoll.showVideoPreRoll && (flashCheck(8) ? typeof __adaptv__ == "undefined" ? (Roblox.VideoPreRoll.videoLogNote = "NoAdapTv", Roblox.VideoPreRoll.showVideoPreRoll = !1) : $("#PlaceLauncherStatusPanel").data("is-protocol-handler-launch-enabled") == "True" || Roblox.Client.IsRobloxInstalled() ? Roblox.Client.isIDE() ? (Roblox.VideoPreRoll.videoLogNote = "RobloxStudio", Roblox.VideoPreRoll.showVideoPreRoll = !1) : Roblox.Client.isRobloxBrowser() ? (Roblox.VideoPreRoll.videoLogNote = "RobloxPlayer", Roblox.VideoPreRoll.showVideoPreRoll = !1) : (window.chrome || window.safari) && window.location.hash == "#chromeInstall" && (Roblox.VideoPreRoll.showVideoPreRoll = !1) : Roblox.VideoPreRoll.showVideoPreRoll = !1 : (Roblox.VideoPreRoll.videoLogNote = "NoFlash", Roblox.VideoPreRoll.showVideoPreRoll = !1))
	},
	isExcluded: function(n) {
		var i, t;
		if (typeof n == "undefined" && typeof play_placeId != "undefined" && (n = play_placeId), Roblox.VideoPreRoll.showVideoPreRoll && Roblox.VideoPreRoll.excludedPlaceIds !== "" && (i = Roblox.VideoPreRoll.excludedPlaceIds.split(","), typeof n != "undefined"))
			for (t = 0; t < i.length; t++)
				if (n == i[t])
					return Roblox.VideoPreRoll.videoLogNote = "ExcludedPlace", !0;
		return !1
	},
	start: function() {
		var n, i, r, t;
		this.placeId === 0 && typeof play_placeId != "undefined" && (this.placeId = play_placeId), this.videoInitialized = !0, this.videoStarted = !1, this.videoCancelled = !1, this.videoCompleted = !1, this.videoSkipped = !1, this.loadingBarCurrentTime = 0, this.videoLogNote = "", Roblox.VideoPreRoll.specificAdOnPlacePageEnabled && this.placeId !== 0 && (n = "," + Roblox.VideoPreRoll.specificAdOnPlacePageCategory, this.placeId == Roblox.VideoPreRoll.specificAdOnPlacePageId && Roblox.VideoPreRoll.videoOptions.categories.indexOf(n) == -1 && (Roblox.VideoPreRoll.videoOptions.categories += n)), Roblox.VideoPreRoll.specificAdOnPlacePage2Enabled && this.placeId !== 0 && (n = "," + Roblox.VideoPreRoll.specificAdOnPlacePage2Category, this.placeId == Roblox.VideoPreRoll.specificAdOnPlacePage2Id && Roblox.VideoPreRoll.videoOptions.categories.indexOf(n) == -1 && (Roblox.VideoPreRoll.videoOptions.categories += n)), r = 1e3, LoadingBar.init(this.loadingBarID, this.loadingBarInnerID, this.loadingBarPercentageID), this.loadingBarIntervalID = setInterval(function() {
			Roblox.VideoPreRoll.loadingBarCurrentTime += r, LoadingBar.update(Roblox.VideoPreRoll.loadingBarID, Roblox.VideoPreRoll.loadingBarCurrentTime / Roblox.VideoPreRoll.loadingBarMaxTime)
		}, r), Roblox.VideoPreRoll._onVideoLoaded(n)
		Roblox.VideoPreRoll._onVideoStart(n)
		setTimeout(function() {
			Roblox.VideoPreRoll._onVideoComplete(n)
		}, 7500);
		try {} catch (u) {}
	},
	error: function() {
		clearInterval(loadingBarInterval)
	},
	cancel: function() {
		this.videoCancelled = !0, $.modal.close()
	},
	skip: function() {
		this.videoCompleted = !0, this.videoSkipped = !0, this.showVideoPreRoll = !1
	},
	close: function() {
		MadStatus.running && MadStatus.stop(""), RobloxLaunch.launcher && (RobloxLaunch.launcher._cancelled = !0), clearInterval(this.loadingBarIntervalID), LoadingBar.dispose(this.loadingBarID);
		try {} catch (n) {}
		this.isPlaying() && (this.videoCancelled = !0), $.modal.close(), this.logVideoPreRoll(), this.isPrerollShownEveryXMinutesEnabled && this.videoInitialized && this.videoCompleted && this.updatePrerollCount()
	},
	_onVideoError: function f() {
		this.videoCompleted = !0, this.videoErrored = !0, this.videoLogNote = "AdError"
	},
	_onVideoLoaded: function(n) {
		try {} catch (t) {}
	},
	_onVideoStart: function() {
		this.videoStarted = !0
	},
	_onVideoComplete: function() {
		this.videoStarted && this.videoCancelled == !1 && (this.videoCompleted = !0, this.showVideoPreRoll = !1, this.newValue != "" && $.cookie("RBXVPR", this.newValue, 180))
	},
	logVideoPreRoll: function() {
		if (Roblox.VideoPreRoll.logsEnabled) {
			var n = "";
			if (Roblox.VideoPreRoll.videoCompleted)
				n = "Complete", Roblox.VideoPreRoll.videoLogNote == "" && (Roblox.VideoPreRoll.videoLogNote = "NoTimeout"), Roblox.VideoPreRoll.logsEnabled = !1;
			else if (Roblox.VideoPreRoll.videoCancelled)
				n = "Cancelled", Roblox.VideoPreRoll.videoLogNote = RobloxLaunch.state;
			else if (Roblox.VideoPreRoll.videoInitialized == !1 && Roblox.VideoPreRoll.videoLogNote != "")
				n = "Failed", Roblox.VideoPreRoll.logsEnabled = !1;
			else
				return;
			GoogleAnalyticsEvents.FireEvent(["PreRoll", n, Roblox.VideoPreRoll.videoLogNote])
		}
	},
	updatePrerollCount: function() {
		$.get("/game/updateprerollcount")
	},
	isPlaying: function() {
		return Roblox.VideoPreRoll.videoInitialized ? (Roblox.VideoPreRoll.videoInitialized && !Roblox.VideoPreRoll.videoStarted && Roblox.VideoPreRoll.loadingBarCurrentTime > Roblox.VideoPreRoll.videoLoadingTimeout && (Roblox.VideoPreRoll.videoCompleted = !0, Roblox.VideoPreRoll.videoLogNote = "LoadingTimeout"), Roblox.VideoPreRoll.videoStarted && !Roblox.VideoPreRoll.videoCompleted && Roblox.VideoPreRoll.loadingBarCurrentTime > Roblox.VideoPreRoll.videoPlayingTimeout && (Roblox.VideoPreRoll.videoCompleted = !0, Roblox.VideoPreRoll.videoLogNote = "PlayingTimeout"), !Roblox.VideoPreRoll.videoCompleted) : !1
	},
	correctIEModalPosition: function(n) {
		if (n.container.innerHeight() <= 30) {
			var t = $("#videoPrerollPanel"),
				i = -Math.floor(t.innerHeight() / 2);
			t.css({
				position: "relative",
				top: i + "px"
			}), n.container.find(".VprCloseButton").css({
				top: i - 10 + "px",
				"z-index": "1003"
			})
		}
	},
	test: function() {
		_popupOptions = {
			escClose: !0,
			opacity: 80,
			overlayCss: {
				backgroundColor: "#000"
			},
			onShow: function(n) {
				Roblox.VideoPreRoll.correctIEModalPosition(n), Roblox.VideoPreRoll.start()
			},
			onClose: function() {
				Roblox.VideoPreRoll.close()
			},
			closeHTML: '<a href="#" class="ImageButton closeBtnCircle_35h ABCloseCircle VprCloseButton"></a>'
		}, $("#videoPrerollPanel").modal(_popupOptions), MadStatus.running || (MadStatus.init($("#videoPrerollPanel").find(".MadStatusField"), $("#videoPrerollPanel").find(".MadStatusBackBuffer"), 2e3, 800), MadStatus.start()), $("#videoPrerollPanel").find(".MadStatusStarting").css("display", "none"), $("#videoPrerollPanel").find(".MadStatusSpinner").css("visibility", status === 3 || status === 4 || status === 5 ? "hidden" : "visible")
	}
};
var LoadingBar = {
	bars: [],
	init: function(n, t, i, r) {
		var u = this.get(n);
		u == null && (u = {}), u.barID = n, u.innerBarID = t, u.percentageID = i, typeof r == "undefined" && (u.percentComplete = 0), this.bars.push(u), this.update(n, u.percentComplete)
	},
	get: function(n) {
		for (var t = 0; t < this.bars.length; t++)
			if (this.bars[t].barID == n)
				return this.bars[t];
		return null
	},
	dispose: function(n) {
		for (var t = 0; t < this.bars.length; t++)
			this.bars[t].barID == n && this.bars.splice(t, 1)
	},
	update: function(n, t) {
		var i = this.get(n),
			r, u;
		i && (t > 1 && (t = 1), r = $("#" + n).width(), u = Math.round(r * t), $("#" + i.innerBarID).animate({
			width: u
		}, 200, "swing"), i.percentageID && $("#" + i.percentageID).length > 0 && $("#" + i.percentageID).html(Math.round(t * 100) + "%"), i.percentComplete = t)
	}
};;
typeof Roblox == "undefined" && (Roblox = {}), Roblox.CharacterSelect = function() {
	function r() {
		return n.genderID = t.male, i(1, "Male", t.male), !1
	}

	function u() {
		return n.genderID = t.female, i(0, "Female", t.female), !1
	}

	function i(t, i, r) {
		$.modal.close(".GuestModePromptModal"), n.robloxLaunchFunction(r)
	}

	function f() {
		$("#GuestModePrompt_BoyGirl").modal({
			overlayClose: !0,
			escClose: !0,
			opacity: n.modalOpacity,
			overlayCss: {
				backgroundColor: "#000"
			},
			onShow: o,
			onClose: e
		})
	}

	function e() {
		$(this).trigger(n.closeEvent), $.modal.close()
	}

	function o(n) {
		if (n.container.innerHeight() == 15) {
			var t = -Math.floor($("#GuestModePrompt_BoyGirl").innerHeight() / 2);
			$("#GuestModePrompt_BoyGirl").css({
				position: "relative",
				top: t + "px"
			})
		}
	}

	function s() {
		$.modal.close(".GuestModePromptModal")
	}
	var t = {
			male: 2,
			female: 3
		},
		n;
	return $(function() {
		$(".VisitButtonGirlGuest").click(u), $(".VisitButtonBoyGuest").click(r)
	}), n = {
		robloxLaunchFunction: function(n) {
			$(document).trigger("CharacterSelectLaunch", [n])
		},
		genderID: null,
		show: f,
		hide: s,
		placeid: undefined,
		closeEvent: "close",
		modalOpacity: 80
	}
}();;
MadStatus = {
	running: !1,
	init: function(n, t, i, r) {
		(MadStatus.running || MadStatus.timeout || MadStatus.resumeTimeout) && MadStatus.stop(), MadStatus.updateInterval = i ? i : 2e3, MadStatus.fadeInterval = r ? r : 1e3, MadStatus.timeout = null, MadStatus.resumeTimeout = null, MadStatus.running = !0, MadStatus.field = n, MadStatus.backBuffer = t, MadStatus.field.show(), MadStatus.backBuffer.hide()
	},
	newLib: function() {
		return MadStatus.participle[Math.floor(Math.random() * MadStatus.participle.length)] + " " + MadStatus.modifier[Math.floor(Math.random() * MadStatus.modifier.length)] + " " + MadStatus.subject[Math.floor(Math.random() * MadStatus.subject.length)] + "..."
	},
	start: function() {
		MadStatus.timeout == null && (MadStatus.timeout = setInterval("MadStatus.update()", MadStatus.updateInterval), MadStatus.running = !0)
	},
	stop: function(n) {
		clearInterval(MadStatus.timeout), MadStatus.timeout = null, clearTimeout(MadStatus.resumeTimeout), MadStatus.resumeTimeout = null, MadStatus.field[0].innerHTML = typeof n != typeof undefined ? n : "", MadStatus.running = !1
	},
	manualUpdate: function(n, t, i) {
		(MadStatus.timeout || MadStatus.resumeTimeout) && MadStatus.stop(), this.update(n, i), t && (MadStatus.resumeTimeout = setTimeout("MadStatus.start()", 1e3))
	},
	update: function(n, t) {
		(MadStatus.backBuffer[0].innerHTML = typeof n != typeof undefined ? n : this.newLib(), typeof t == typeof undefined || t != !1) && (this.field.hide(), this.backBuffer.fadeIn(this.fadeInterval + 2, function() {
			MadStatus.field[0].innerHTML = MadStatus.backBuffer[0].innerHTML, MadStatus.field.show(), MadStatus.backBuffer.hide()
		}))
	},
	participle: ["Accelerating", "Aggregating", "Allocating", "Acquiring", "Automating", "Backtracing", "Bloxxing", "Bootstrapping", "Calibrating", "Correlating", "De-noobing", "De-ionizing", "Deriving", "Energizing", "Filtering", "Generating", "Indexing", "Loading", "Noobing", "Optimizing", "Oxidizing", "Queueing", "Parsing", "Processing", "Rasterizing", "Reading", "Registering", "Re-routing", "Resolving", "Sampling", "Updating", "Writing"],
	modifier: ["Blox", "Count Zero", "Cylon", "Data", "Ectoplasm", "Encryption", "Event", "Farnsworth", "Bebop", "Flux Capacitor", "Fusion", "Game", "Gibson", "Host", "Mainframe", "Metaverse", "Nerf Herder", "Neutron", "Noob", "Photon", "Profile", "Script", "Skynet", "TARDIS", "Virtual"],
	subject: ["Analogs", "Blocks", "Cannon", "Channels", "Core", "Database", "Dimensions", "Directives", "Engine", "Files", "Gear", "Index", "Layer", "Matrix", "Paradox", "Parameters", "Parsecs", "Pipeline", "Players", "Ports", "Protocols", "Reactors", "Sphere", "Stream", "Switches", "Table", "Targets", "Throttle", "Tokens", "Torpedoes", "Tubes"]
};;
var RBX = {},
	RobloxLaunchStates = {
		StartingServer: "StartingServer",
		StartingClient: "StartingClient",
		Upgrading: "Upgrading",
		None: "None"
	},
	RobloxLaunch = {
		launchGamePage: "/install/download.aspx",
		launcher: null,
		googleAnalyticsCallback: function() {
			RobloxLaunch._GoogleAnalyticsCallback && RobloxLaunch._GoogleAnalyticsCallback()
		},
		state: RobloxLaunchStates.None,
		protocolNameForClient: "",
		protocolNameForStudio: "",
		protocolUrlSeparator: ""
	},
	RobloxPlaceLauncherService = {
		LogJoinClick: function() {
			$.ajax({
				method: "GET",
				url: "/Game/PlaceLauncher.ashx",
				data: {
					request: "LogJoinClick"
				},
				crossDomain: !0,
				xhrFields: {
					withCredentials: !0
				}
			}).done()
		},
		RequestGame: function(n, t, i, r, u, f) {
			i = i !== null && i !== undefined ? i : "", $.ajax({
				method: "GET",
				url: "/Game/PlaceLauncher.ashx",
				data: {
					request: "RequestGame",
					placeId: n,
					isPartyLeader: t,
					gender: i
				},
				crossDomain: !0,
				xhrFields: {
					withCredentials: !0
				}
			}).done(function(n) {
				n.Error ? u(n.Error, f) : r(n, f)
			})
		},
		RequestPlayWithParty: function(n, t, i, r, u, f) {
			$.ajax({
				method: "GET",
				url: "/Game/PlaceLauncher.ashx",
				data: {
					request: "RequestPlayWithParty",
					placeId: n,
					partyGuid: t,
					gameId: i
				},
				crossDomain: !0,
				xhrFields: {
					withCredentials: !0
				}
			}).done(function(n) {
				n.Error ? u(n.Error, f) : r(n, f)
			})
		},
		RequestFollowUser: function(n, t, i, r) {
			$.ajax({
				method: "GET",
				url: "/Game/PlaceLauncher.ashx",
				data: {
					request: "RequestFollowUser",
					userId: n
				},
				crossDomain: !0,
				xhrFields: {
					withCredentials: !0
				}
			}).done(function(n) {
				n.Error ? i(n.Error, r) : t(n, r)
			})
		},
		RequestGameJob: function(n, t, i, r, u) {
			$.ajax({
				method: "GET",
				url: "/Game/PlaceLauncher.ashx",
				data: {
					request: "RequestGameJob",
					placeId: n,
					gameId: t
				},
				crossDomain: !0,
				xhrFields: {
					withCredentials: !0
				}
			}).done(function(n) {
				n.Error ? r(n.Error, u) : i(n, u)
			})
		},
		CheckGameJobStatus: function(n, t, i, r) {
			$.ajax({
				method: "GET",
				url: "/Game/PlaceLauncher.ashx",
				data: {
					request: "CheckGameJobStatus",
					jobId: n
				},
				crossDomain: !0,
				xhrFields: {
					withCredentials: !0
				}
			}).done(function(n) {
				n.Error ? i(n.Error, r) : t(n, r)
			})
		},
		RequestPrivateGame: function(n, t, i, r, u, f, e) {
			i = i !== null && i !== undefined ? i : "", $.ajax({
				method: "GET",
				url: "/Game/PlaceLauncher.ashx",
				data: {
					request: "RequestPrivateGame",
					placeId: n,
					accessCode: t,
					gender: i,
					linkCode: r
				},
				crossDomain: !0,
				xhrFields: {
					withCredentials: !0
				}
			}).done(function(n) {
				n.Error ? f(n.Error, e) : u(n, e)
			})
		}
	};
RobloxLaunch.RequestPlayWithParty = function(n, t, i, r) {
	EventTracker.start("Launch"), RobloxPlaceLauncherService.LogJoinClick(), RobloxLaunch.state = RobloxLaunchStates.None, checkRobloxInstall() && (RobloxLaunch.launcher === null && (RobloxLaunch.launcher = new RBX.PlaceLauncher(n)), RobloxLaunch.launcher.RequestPlayWithParty(t, i, r))
}, RobloxLaunch.RequestGame = function(n, t, i) {
	EventTracker.start("Launch"), RobloxPlaceLauncherService.LogJoinClick(), RobloxLaunch.state = RobloxLaunchStates.None, checkRobloxInstall() && (RobloxLaunch.launcher === null && (RobloxLaunch.launcher = new RBX.PlaceLauncher(n)), RobloxLaunch.launcher.RequestGame(t, i))
}, RobloxLaunch.RequestPrivateGame = function(n, t, i, r, u) {
	EventTracker.start("Launch"), RobloxPlaceLauncherService.LogJoinClick(), RobloxLaunch.state = RobloxLaunchStates.None, checkRobloxInstall() && (RobloxLaunch.launcher === null && (RobloxLaunch.launcher = new RBX.PlaceLauncher(n)), RobloxLaunch.launcher.RequestPrivateGame(t, i, r, u))
}, RobloxLaunch.RequestGameJob = function(n, t, i) {
	EventTracker.start("Launch"), RobloxPlaceLauncherService.LogJoinClick(), RobloxLaunch.state = RobloxLaunchStates.None, checkRobloxInstall() && (RobloxLaunch.launcher === null && (RobloxLaunch.launcher = new RBX.PlaceLauncher(n)), RobloxLaunch.launcher.RequestGameJob(t, i))
}, RobloxLaunch.RequestFollowUser = function(n, t) {
	EventTracker.start("Launch"), RobloxPlaceLauncherService.LogJoinClick(), RobloxLaunch.state = RobloxLaunchStates.None, checkRobloxInstall() && (RobloxLaunch.launcher === null && (RobloxLaunch.launcher = new RBX.PlaceLauncher(n)), RobloxLaunch.launcher.RequestFollowUser(t))
}, RobloxLaunch.StartGame = function(n, t, i, r, u) {
	var f = function(r) {
			RobloxLaunch.StartGameWork(n, t, i, r, u)
		},
		e;
	r == "FETCH" ? (e = Roblox.Endpoints.getAbsoluteUrl("/Game/GetAuthTicket"), $.ajax({
		method: "GET",
		url: e,
		crossDomain: !0,
		xhrFields: {
			withCredentials: !0
		}
	}).done(f)) : f(r)
}, RobloxLaunch.StartGameWork = function(n, t, i, r, u) {
	var o, f, s, e, h;
	i = i.replace("http://", "https://"), n.indexOf("http") >= 0 && (n = typeof RobloxLaunch.SeleniumTestMode == "undefined" ? n + "&testmode=false" : n + "&testmode=true"), GoogleAnalyticsEvents && GoogleAnalyticsEvents.ViewVirtual("Visit/Try/" + t), RobloxLaunch.state = RobloxLaunchStates.StartingClient, RobloxLaunch.googleAnalyticsCallback !== null && RobloxLaunch.googleAnalyticsCallback(), o = null;
	try {
		if (typeof window.external != "undefined" && window.external.IsRoblox2App && (n.indexOf("visit") != -1 || u))
			window.external.StartGame(r, i, n);
		else if (o = "RobloxProxy/", f = Roblox.Client.CreateLauncher(!0), f) {
			o = "RobloxProxy/StartGame/";
			try {
				try {
					Roblox.Client.IsIE() ? f.AuthenticationTicket = r : f.Put_AuthenticationTicket(r), u && f.SetEditMode()
				} catch (l) {}
				try {
					if (Roblox.Client._silentModeEnabled)
						f.SetSilentModeEnabled(!0), s = Roblox.VideoPreRollDFP ? Roblox.VideoPreRollDFP : Roblox.VideoPreRoll, s && s.videoInitialized && s.isPlaying() && Roblox.Client.SetStartInHiddenMode(!0), f.StartGame(i, n), RobloxLaunch.CheckGameStarted(f, t);
					else
						throw new Error("silent mode is disabled, fall back");
				} catch (l) {
					if (f.StartGame(i, n), Roblox.Client._bringAppToFrontEnabled)
						try {
							f.BringAppToFront()
						} catch (a) {}
					Roblox.Client.ReleaseLauncher(f, !0, !1), $.modal.close()
				}
			} catch (l) {
				Roblox.Client.ReleaseLauncher(f, !0, !1);
				throw l;
			}
		} else {
			try {
				parent.playFromUrl(n);
				return
			} catch (c) {}
			if (Roblox.Client.isRobloxBrowser())
				try {
					window.external.StartGame(r, i, n)
				} catch (c) {
					throw new Error("window.external fallback failed, Roblox must not be installed or IE cannot access ActiveX");
				}
			else
				throw new Error("launcher is null or undefined and external is missing");
			RobloxLaunch.state = RobloxLaunchStates.None, $.modal.close()
		}
	} catch (l) {
		if (GoogleAnalyticsEvents.ViewVirtual("Visit/CreateLauncher/" + Roblox.Client._whyIsRobloxLauncherNotCreated), e = l.message, e === "User cancelled")
			return GoogleAnalyticsEvents && GoogleAnalyticsEvents.ViewVirtual("Visit/UserCancelled/" + t), !1;
		try {
			h = new ActiveXObject("Microsoft.XMLHTTP")
		} catch (v) {
			e = "FailedXMLHTTP/" + e
		}
		return Roblox.Client.isRobloxBrowser() ? GoogleAnalyticsEvents && GoogleAnalyticsEvents.ViewVirtual("Visit/Fail/" + o + encodeURIComponent(e)) : (GoogleAnalyticsEvents && GoogleAnalyticsEvents.ViewVirtual("Visit/Redirect/" + o + encodeURIComponent(e)), window.location = RobloxLaunch.launchGamePage), !1
	}
	return GoogleAnalyticsEvents && GoogleAnalyticsEvents.ViewVirtual("Visit/Success/" + t), !0
}, RobloxLaunch.CheckGameStarted = function(n, t) {
	function u() {
		var e, o;
		try {
			if (r || (r = Roblox.Client.IsIE() ? n.IsGameStarted : n.Get_GameStarted()), r && !f && (EventTracker.endSuccess("StartClient"), EventTracker.endSuccess("Launch"), $("#PlaceLauncherStatusPanel").data("new-plugin-events-enabled") == "True" && (e = $("#PlaceLauncherStatusPanel").data("os-name"), e == "Windows" && (e = "Win32"), EventTracker.fireEvent("GameLaunchSuccessWeb_" + e), EventTracker.fireEvent("GameLaunchSuccessWeb_" + e + "_Plugin"), GoogleAnalyticsEvents && GoogleAnalyticsEvents.FireEvent(["Plugin", "Launch Success", t]), $("#PlaceLauncherStatusPanel").data("event-stream-for-plugin-enabled") == "True" && typeof Roblox.GamePlayEvents != "undefined" && Roblox.GamePlayEvents.SendClientStartSuccessWeb(null, play_placeId)), f = !0), o = Roblox.VideoPreRollDFP ? Roblox.VideoPreRollDFP : Roblox.VideoPreRoll, r && !o.isPlaying()) {
				if (MadStatus.stop("Connecting to Players..."), RobloxLaunch.state = RobloxLaunchStates.None, $.modal.close(), i._cancelled = !0, Roblox.Client._hiddenModeEnabled && Roblox.Client.UnhideApp(), Roblox.Client._bringAppToFrontEnabled)
					try {
						n.BringAppToFront()
					} catch (s) {}
				Roblox.Client.ReleaseLauncher(n, !0, !1), googletag.cmd.push(function() {
					googletag.pubads().refresh()
				})
			} else
				i._cancelled || setTimeout(u, 1e3)
		} catch (h) {
			i._cancelled || setTimeout(u, 1e3)
		}
	}
	var f = !1,
		i = RobloxLaunch.launcher,
		r;
	i === null && (i = new RBX.PlaceLauncher("PlaceLauncherStatusPanel"), i._showDialog(), i._updateStatus(0)), r = !1, u()
}, RobloxLaunch.CheckRobloxInstall = function(n) {
	if (Roblox.Client.IsRobloxInstalled())
		return Roblox.Client.Update(), !0;
	window.location = n
}, RBX.PlaceLauncher = function(n) {
	this._cancelled = !1, this._popupID = n, this._popup = $("#" + n)
}, RBX.PlaceLauncher.prototype = {
	_showDialog: function() {
		var n, t, i;
		this._cancelled = !1, _popupOptions = {
			escClose: !0,
			opacity: 80,
			overlayCss: {
				backgroundColor: "#000"
			},
			zIndex: 1031
		}, n = Roblox.VideoPreRollDFP ? Roblox.VideoPreRollDFP : Roblox.VideoPreRoll, this._popupID == "PlaceLauncherStatusPanel" && (n && n.showVideoPreRoll && !n.isExcluded() ? (this._popup = $("#videoPrerollPanel"), _popupOptions.onShow = function(t) {
			n.correctIEModalPosition(t), n.start(), $("#prerollClose").hide(), $("#prerollClose").delay(1e3 * n.adTime + n.videoLoadingTimeout).show(300)
		}, _popupOptions.onClose = function() {
			n.close()
		}, _popupOptions.closeHTML = '<a href="#" id = "prerollClose" class="ImageButton closeBtnCircle_35h ABCloseCircle VprCloseButton"></a>') : (this._popup = $("#" + this._popupID), _popupOptions.onClose = function() {
			n.logVideoPreRoll(), $.modal.close()
		})), t = this, setTimeout(function() {
			t._popup.modal(_popupOptions)
		}, 0), i = this, $(".CancelPlaceLauncherButton").click(function() {
			i.CancelLaunch()
		}), $(".CancelPlaceLauncherButton").show()
	},
	_onGameStatus: function(n) {
		if (this._cancelled) {
			EventTracker.endCancel("GetConnection"), EventTracker.endCancel("Launch");
			return
		}
		if (this._updateStatus(n.status), n.status === 2)
			EventTracker.endSuccess("GetConnection"), EventTracker.start("StartClient"), RobloxLaunch.StartGame(n.joinScriptUrl, "Join", n.authenticationUrl, n.authenticationTicket);
		else if (n.status < 2 || n.status === 6) {
			var t = function(n, t) {
					t._onGameStatus(n)
				},
				i = function(n, t) {
					t._onGameError(n)
				},
				r = this,
				u = function() {
					RobloxPlaceLauncherService.CheckGameJobStatus(n.jobId, t, i, r)
				};
			window.setTimeout(u, 2e3)
		} else
			n.status === 4 && (EventTracker.endFailure("GetConnection"), EventTracker.endFailure("Launch"))
	},
	_updateStatus: function(n) {
		MadStatus.running || (MadStatus.init($(this._popup).find(".MadStatusField"), $(this._popup).find(".MadStatusBackBuffer"), 2e3, 800), MadStatus.start());
		switch (n) {
			case 0:
				break;
			case 1:
				MadStatus.manualUpdate("A server is loading the game...", !0);
				break;
			case 2:
				MadStatus.manualUpdate("The server is ready. Joining the game...", !0, !1);
				break;
			case 3:
				MadStatus.manualUpdate("Joining games is temporarily disabled while we upgrade. Please try again soon.", !1);
				break;
			case 4:
				MadStatus.manualUpdate("An error occurred. Please try again later.", !1);
				break;
			case 5:
				MadStatus.manualUpdate("The game you requested has ended.", !1);
				break;
			case 6:
				MadStatus.manualUpdate("The game you requested is currently full. Waiting for an opening...", !0, !0);
				break;
			case 7:
				MadStatus.manualUpdate("Roblox is updating. Please wait...", !0);
				break;
			case 8:
				MadStatus.manualUpdate("Requesting a server", !0);
				break;
			case 10:
				MadStatus.manualUpdate("The user has left the game.", !1);
				break;
			case 11:
				MadStatus.manualUpdate("The game you requested is not available on your platform.", !1);
				break;
			case 12:
				MadStatus.manualUpdate("You are not authorized to join this game.", !1);
				break;
			default:
				MadStatus.stop("Connecting to Players...")
		}
		$(this._popup).find(".MadStatusStarting").css("display", "none"), $(this._popup).find(".MadStatusSpinner").css("visibility", n === 3 || n === 4 || n === 5 ? "hidden" : "visible")
	},
	_onGameError: function() {
		this._updateStatus(4)
	},
	_startUpdatePolling: function(n) {
		var t, i;
		try {
			if (RobloxLaunch.state = RobloxLaunchStates.Upgrading, t = Roblox.Client.CreateLauncher(!0), i = Roblox.Client.IsIE() ? t.IsUpToDate : t.Get_IsUpToDate(), i || i === undefined) {
				try {
					t.PreStartGame()
				} catch (e) {}
				Roblox.Client.ReleaseLauncher(t, !0, !1), RobloxLaunch.state = RobloxLaunchStates.StartingServer, EventTracker.endSuccess("UpdateClient"), n();
				return
			}
			var r = function(t, i, r) {
					r._onUpdateStatus(t, i, n)
				},
				u = function(n, t) {
					t._onUpdateError(n)
				},
				f = this;
			this.CheckUpdateStatus(r, u, t, n, f)
		} catch (e) {
			Roblox.Client.ReleaseLauncher(t, !0, !1), EventTracker.endSuccess("UpdateClient"), n()
		}
	},
	_onUpdateStatus: function(n, t, i) {
		if (!this._cancelled)
			if (this._updateStatus(n), n === 8)
				Roblox.Client.ReleaseLauncher(t, !0, !0), Roblox.Client.Refresh(), RobloxLaunch.state = RobloxLaunchStates.StartingServer, EventTracker.endSuccess("UpdateClient"), i();
			else if (n === 7) {
			var u = function(n, t, r) {
					r._onUpdateStatus(n, t, i)
				},
				f = function(n, t) {
					t._onUpdateError(n)
				},
				r = this,
				e = function() {
					r.CheckUpdateStatus(u, f, t, i, r)
				};
			window.setTimeout(e, 2e3)
		} else
			console && console.log && console.log("Unknown status from CheckUpdateStatus")
	},
	_onUpdateError: function() {
		this._updateStatus(2)
	},
	CheckUpdateStatus: function(n, t, i, r, u) {
		try {
			if (i.PreStartGame(), Roblox.Client.IsIE())
				var f = i.IsUpToDate;
			else
				f = i.Get_IsUpToDate();
			f || f === undefined ? n(8, i, u) : n(7, i, u)
		} catch (e) {
			n(8, i, u)
		}
	},
	RequestGame: function(n, t) {
		var r;
		this._showDialog();
		var u = function(n, t) {
				t._onGameStatus(n)
			},
			f = function(n, t) {
				t._onGameError(n)
			},
			e = this,
			i = !1;
		return typeof Party != "undefined" && typeof Party.AmILeader == "function" && (i = Party.AmILeader()), typeof angular == "undefined" || angular.isUndefined(angular.element("#chat-container").scope()) || (i = angular.element("#chat-container").scope().isPartyLeader()), r = function() {
			EventTracker.start("GetConnection"), RobloxPlaceLauncherService.RequestGame(n, i, t, u, f, e)
		}, this._startUpdatePolling(r), !1
	},
	RequestPrivateGame: function(n, t, i, r) {
		this._showDialog();
		var u = function(n, t) {
				t._onGameStatus(n)
			},
			f = function(n, t) {
				t._onGameError(n)
			},
			e = this,
			o = function() {
				EventTracker.start("GetConnection"), RobloxPlaceLauncherService.RequestPrivateGame(n, t, i, r, u, f, e)
			};
		return this._startUpdatePolling(o), !1
	},
	RequestPlayWithParty: function(n, t, i) {
		this._showDialog();
		var r = function(n, t) {
				t._onGameStatus(n)
			},
			u = function(n, t) {
				t._onGameError(n)
			},
			f = this,
			e = function() {
				EventTracker.start("GetConnection"), RobloxPlaceLauncherService.RequestPlayWithParty(n, t, i, r, u, f)
			};
		return this._startUpdatePolling(e), !1
	},
	RequestFollowUser: function(n) {
		this._showDialog();
		var t = function(n, t) {
				t._onGameStatus(n)
			},
			i = function(n, t) {
				t._onError(n)
			},
			r = this,
			u = function() {
				EventTracker.start("GetConnection"), RobloxPlaceLauncherService.RequestFollowUser(n, t, i, r)
			};
		return this._startUpdatePolling(u), !1
	},
	RequestGameJob: function(n, t) {
		this._showDialog();
		var i = function(n, t) {
				t._onGameStatus(n)
			},
			r = function(n, t) {
				t._onGameError(n)
			},
			u = this,
			f = function() {
				EventTracker.start("GetConnection"), RobloxPlaceLauncherService.RequestGameJob(n, t, i, r, u)
			};
		return this._startUpdatePolling(f), !1
	},
	CancelLaunch: function() {
		return this._cancelled = !0, $.modal.close(), !1
	},
	dispose: function() {
		RBX.PlaceLauncher.callBaseMethod(this, "dispose")
	}
};;
Roblox = window.Roblox || {}, Roblox.GameLauncher = function() {
	function t(t, i, r) {
		n.gameLaunchInterface.editGameInStudio(t, i, r)
	}

	function r() {
		n.gameLaunchInterface.openStudio()
	}

	function i(t, i) {
		var r, u;
		return typeof i == "undefined" && (i = !0), r = {
			placeId: t,
			isPartyLeader: !1
		}, r.isPartyLeader = n.partyInterface.isPartyLeader(), u = n.bcUpsellModalInterface.checkBcRequirement(r, i).then(n.genderFetcher.getCharacterGender).then(n.prerollPlayer.waitForPreroll).then(n.gameLaunchInterface.joinMultiplayerGame)
	}

	function u(t) {
		var i = {
			userId: t
		};
		return n.genderFetcher.getCharacterGender(i).then(n.prerollPlayer.waitForPreroll).then(n.gameLaunchInterface.followPlayerIntoGame)
	}

	function f(t, i, r) {
		var u = {
			placeId: t,
			partyGuid: i,
			gameId: r
		};
		return n.prerollPlayer.waitForPreroll(u).then(n.gameLaunchInterface.joinGameWithParty)
	}

	function e(t, i) {
		var u = {
			placeId: t,
			gameId: i
		};
		return n.genderFetcher.getCharacterGender(u).then(n.prerollPlayer.waitForPreroll).then(n.gameLaunchInterface.joinGameInstance)
	}

	function o(t, i, r) {
		var u = {
			placeId: t,
			accessCode: i,
			linkCode: r
		};
		return n.prerollPlayer.waitForPreroll(u).then(n.gameLaunchInterface.joinPrivateGame)
	}
	$(function() {
		n.gameLaunchLogger || typeof Roblox.GameLaunchLogger == "undefined" || (n.gameLaunchLogger = Roblox.GameLaunchLogger), n.genderFetcher || typeof Roblox.GenderFetcher == "undefined" || (n.genderFetcher = Roblox.GenderFetcher), n.prerollPlayer || typeof Roblox.PrerollPlayer == "undefined" || (n.prerollPlayer = Roblox.PrerollPlayer), n.partyInterface || typeof Roblox.PartyInterface == "undefined" || (n.partyInterface = Roblox.PartyInterface), n.bcUpsellModalInterface || typeof Roblox.BCUpsellModalInterface == "undefined" || (n.bcUpsellModalInterface = Roblox.BCUpsellModalInterface), $("body").bindGameLaunch()
	}), $.fn.bindGameLaunch = function() {
		return this.find(".VisitButtonPlayGLI").click(function() {
			var n = $(this),
				t = n.attr("placeid"),
				r = n.data("is-membership-level-ok");
			i(t, r)
		}), this.find(".VisitButtonEditGLI").click(function() {
			var n = $(this),
				i = n.attr("placeid"),
				r = n.data("universeid"),
				u = n.data("allowupload") ? !0 : !1;
			t(i, r, u)
		}), this
	};
	var n = {
		genderFetcher: null,
		prerollPlayer: null,
		gameLaunchLogger: null,
		gameLaunchInterface: null,
		partyInterface: null,
		bcUpsellModalInterface: null,
		joinMultiplayerGame: i,
		openStudio: r,
		editGameInStudio: t,
		followPlayerIntoGame: u,
		joinGameWithParty: f,
		joinGameInstance: e,
		joinPrivateGame: o,
		startClientAttemptedEvent: "startClientAttempted",
		startClientFailedEvent: "startClientFailed",
		startClientSucceededEvent: "startClientSucceeded",
		beginInstallEvent: "beginInstall",
		successfulInstallEvent: "successfulInstall"
	};
	return n
}(), Roblox.GenderFetcher = {
	getCharacterGender: function(n) {
		var t = new $.Deferred;
		return $("#PlaceLauncherStatusPanel").data("is-user-logged-in") == "True" ? t.resolve(n) : (Roblox.CharacterSelect.robloxLaunchFunction = function(i) {
			n.genderId = i, t.resolve(n)
		}, Roblox.CharacterSelect.modalOpacity = 80, Roblox.CharacterSelect.show()), t
	}
}, Roblox.PrerollPlayer = {
	waitForPreroll: function(n) {
		var r = new $.Deferred,
			t = Roblox.VideoPreRollDFP ? Roblox.VideoPreRollDFP : Roblox.VideoPreRoll,
			i, u;
		return t.placeId = typeof n.placeId != "undefined" ? n.placeId : 0, t && t.showVideoPreRoll && !t.isExcluded(n.placeId) ? (i = {
			escClose: !0,
			opacity: 80,
			overlayCss: {
				backgroundColor: "#000"
			},
			zIndex: 1031
		}, i.onShow = function(n) {
			t.correctIEModalPosition(n), t.start(), $("#prerollClose").hide(), $("#prerollClose").delay(1e3 * t.adTime).show(300)
		}, i.onClose = function() {
			t.close()
		}, i.closeHTML = '<a href="#" id="prerollClose" class="ImageButton closeBtnCircle_35h ABCloseCircle VprCloseButton"></a>', $("#videoPrerollPanel").modal(i), u = setInterval(function() {
			t.isPlaying() || ($.modal.close(), clearInterval(u), t.videoCancelled ? r.reject(n) : r.resolve(n))
		}, 200)) : (r.resolve(n), t.logVideoPreRoll()), r
	}
}, Roblox.PartyInterface = {
	isPartyLeader: function() {
		if (typeof Party != "undefined" && Party)
			try {
				return Party.AmILeader()
			} catch (n) {}
		return typeof angular != "undefined" && !angular.isUndefined(angular.element("#chat-container").scope()) ? angular.element("#chat-container").scope().isPartyLeader() : !1
	}
}, Roblox.BCUpsellModalInterface = {
	checkBcRequirement: function(n, t) {
		var i = new $.Deferred;
		return t ? i.resolve(n) : typeof Roblox.BCUpsellModal != "undefined" ? (Roblox.BCUpsellModal.open(), i.reject(n)) : typeof showBCOnlyModal != "undefined" ? (showBCOnlyModal(), i.reject(n)) : i.resolve(n), i
	}
};;
Roblox = window.Roblox || {}, Roblox.GameLaunchLogger = function() {
	function u(n) {
		r.logToConsoleEnabled && console && console.log && console.log(n)
	}

	function f(n, t) {
		if (r.logToEphemeralCountersEnabled) {
			var i = h();
			i == "Windows" && (i = "Win32"), n = n.replace("<os>", i), n = n.replace("<launchmethod>", t), EventTracker && EventTracker.fireEvent && EventTracker.fireEvent(n)
		}
	}

	function e(n, t, i, u) {
		r.logToGAEnabled && GoogleAnalyticsEvents && GoogleAnalyticsEvents.FireEvent && GoogleAnalyticsEvents.FireEvent([n, t, i, u])
	}

	function o(r, o) {
		u(r.type + ": " + JSON.stringify(o)), i[r.type] && $.each(i[r.type], function(n, t) {
			f(t, o.launchMethod)
		}), n[r.type] && e(o.launchMethod, n[r.type], s(o), 0), $("#PlaceLauncherStatusPanel").data("event-stream-for-protocol-enabled") == "True" && t[r.type] && t[r.type](null, o.params.placeId)
	}

	function s(n) {
		return n.params.launchMode
	}

	function h() {
		return $("#PlaceLauncherStatusPanel").data("os-name")
	}
	var i, n, t, r;
	return $(function() {
		var n = [Roblox.GameLauncher.startClientAttemptedEvent, Roblox.GameLauncher.startClientFailedEvent, Roblox.GameLauncher.startClientSucceededEvent, Roblox.GameLauncher.beginInstallEvent, Roblox.GameLauncher.successfulInstallEvent];
		$(Roblox.GameLauncher).on(n.join(" "), o)
	}), i = {}, i[Roblox.GameLauncher.startClientAttemptedEvent] = ["GameLaunchAttempt_<os>", "GameLaunchAttempt_<os>_<launchmethod>"], i[Roblox.GameLauncher.startClientSucceededEvent] = ["GameLaunchSuccessWeb_<os>", "GameLaunchSuccessWeb_<os>_<launchmethod>"], n = {}, n[Roblox.GameLauncher.startClientAttemptedEvent] = "Launch Attempt", n[Roblox.GameLauncher.startClientSucceededEvent] = "Launch Success", n[Roblox.GameLauncher.beginInstallEvent] = "Install Begin", n[Roblox.GameLauncher.successfulInstallEvent] = "Install Success", t = {}, typeof Roblox.GamePlayEvents != "undefined" && (t[Roblox.GameLauncher.startClientAttemptedEvent] = Roblox.GamePlayEvents.SendClientStartAttempt, t[Roblox.GameLauncher.startClientSucceededEvent] = Roblox.GamePlayEvents.SendClientStartSuccessWeb, t[Roblox.GameLauncher.beginInstallEvent] = Roblox.GamePlayEvents.SendInstallBegin, t[Roblox.GameLauncher.successfulInstallEvent] = Roblox.GamePlayEvents.SendInstallSuccess), r = {
		logToConsoleEnabled: !1,
		logToGAEnabled: !0,
		logToEphemeralCountersEnabled: !0,
		logToConsole: u,
		logToEphemeralCounters: f,
		logToGA: e
	}
}();;
Roblox = Roblox || {}, Roblox.ProtocolHandlerClientInterface = function() {
	function o(n, t) {
		var i = function() {
				clearTimeout(r), n()
			},
			r;
		k(i), r = setTimeout(function() {
			$.modal.close(), g(i, t)
		}, 5e3)
	}

	function k(n) {
		$("#ProtocolHandlerStartingDialog").modal({
			escClose: !0,
			opacity: 80,
			overlayCss: {
				backgroundColor: "#000"
			},
			onClose: function() {
				n(), $.modal.close()
			},
			zIndex: 1031
		})
	}

	function et() {
		$.modal.close(), Roblox.GenericModal.open("Error starting game", null, "An error occurred trying to launch the game.  Please try again later.")
	}

	function g(n, t) {
		$("#ProtocolHandlerAreYouInstalled").modal({
			escClose: !0,
			opacity: 80,
			overlayCss: {
				backgroundColor: "#000"
			},
			onClose: function() {
				n(), $("#ProtocolHandlerInstallButton").off("click"), $.modal.close()
			},
			zIndex: 1031
		}), $("#ProtocolHandlerInstallButton").click(function() {
			var r = $(this).data("updated-modal") != undefined,
				n, i;
			$.modal.close(), r ? Roblox.Dialog.open({
				titleText: $("#InstallationInstructions .ph-modal-header .title").text(),
				allowHtmlContentInBody: !0,
				bodyContent: $("#InstallationInstructions .modal-content-container").html(),
				allowHtmlContentInFooter: !0,
				footerText: $("#InstallationInstructions .xsmall").html(),
				acceptColor: Roblox.Dialog.none,
				declineColor: Roblox.Dialog.none,
				cssClass: "install-instructions-modal",
				xToCancel: !0
			}) : ($(".style2016").length > 0 ? (i = $(".ph-install-step").length, n = i * $(".ph-install-step").outerWidth()) : n = 960, $("#InstallationInstructions").modal({
				escClose: !0,
				onClose: function() {
					$("#ProtocolHandlerClickAlwaysAllowed").hide(), $.modal.close()
				},
				opacity: 80,
				overlayCss: {
					backgroundColor: "#000"
				},
				position: [50, ($(window).width() - n) / 2],
				zIndex: 1031
			})), setTimeout(function() {
				$(".VisitButtonContinueGLI a").removeClass("disabled").click(t, w)
			}, 5e3), s(t)
		})
	}

	function w(n) {
		var t = $(this);
		return t.hasClass("disabled") || (e(n.data), t.data("isedge") || $("#ProtocolHandlerClickAlwaysAllowed").show()), !1
	}

	function t(n) {
		return n.launchTime = +new Date, $(Roblox.GameLauncher).trigger(Roblox.GameLauncher.startClientAttemptedEvent, {
			launchMethod: "Protocol",
			params: n
		}), o(function() {}, n), $.when(nt(n), tt()).then(e, et).then(ut).then(rt, it)
	}

	function ut(n) {
		var t = new $.Deferred;
		return clearInterval(u), u = setInterval(function() {
			var i = Roblox.Endpoints.getAbsoluteUrl("/client-status");
			$.ajax(i, {
				success: function(i) {
					i != "Unknown" && (t.resolve(n), clearInterval(u))
				},
				cache: !1
			})
		}, 3e3), t
	}

	function rt(n) {
		$.modal.close();
		var t = {
			launchMethod: "Protocol",
			params: n
		};
		$(Roblox.GameLauncher).trigger(Roblox.GameLauncher.startClientSucceededEvent, t), r && ($(Roblox.GameLauncher).trigger(Roblox.GameLauncher.successfulInstallEvent, t), r = !1)
	}

	function it() {}

	function tt() {
		var n = Roblox.Endpoints.getAbsoluteUrl("/client-status/set?status=Unknown");
		return $.ajax({
			method: "POST",
			url: n
		})
	}

	function nt(n) {
		var t = Roblox.Endpoints.getAbsoluteUrl("/game-auth/getauthticket");
		return $.ajax({
			method: "GET",
			url: t
		}).then(function(t) {
			var i = new $.Deferred;
			return n.gameInfo = t, i.resolve(n), i
		})
	}

	function e(t) {
		var u = new $.Deferred,
			f = n.protocolUrlSeparator,
			i = [],
			r = t.protocolName + ":",
			e = "1";
		return i.push(e), i.push("launchmode:" + t.launchMode), i.push("gameinfo:" + encodeURIComponent(t.gameInfo)), n.protocolUrlIncludesLaunchTime && i.push("launchtime:" + t.launchTime), $.each(t.otherParams, function(n, t) {
			n == t ? i.push(n) : i.push(n + ":" + encodeURIComponent(t))
		}), r += i.join(f), Roblox.GameLauncher.gameLaunchLogger.logToConsole("launchProtocolUrl: " + JSON.stringify({
			url: r,
			params: t
		})), n.setLocationHref(r), u.resolve(t), u
	}

	function d(t) {
		if (n.protocolDetectionEnabled && typeof navigator.msLaunchUri != "undefined")
			navigator.msLaunchUri(t, function() {}, function() {});
		else {
			var i = $("iframe#gamelaunch");
			i.length > 0 && i.remove(), i = $("<iframe id='gamelaunch'></iframe>").attr("src", t), $("body").append(i)
		}
	}

	function i(n, t) {
		var i = " ",
			u, f, r;
		return typeof Roblox.Endpoints != typeof undefined && typeof Roblox.Endpoints.Urls != typeof undefined && (i = Roblox.Endpoints.getAbsoluteUrl("/Game/PlaceLauncher.ashx") + "?"), i[0] != "h" && (u = "http://" + window.location.host, f = "/Game/PlaceLauncher.ashx?", i = u + f), i = i.replace("placelauncher", "PlaceLauncher"), r = {
			request: n,
			browserTrackerId: Roblox.Cookies.getBrowserTrackerId()
		}, $.extend(r, t), i + $.param(r)
	}

	function ft(n, t, i) {
		return b("Edit.ashx", n, t, i)
	}

	function b(n, t, i, r) {
		var u = " ",
			f, e, o;
		return typeof Roblox.Endpoints != typeof undefined && typeof Roblox.Endpoints.Urls != typeof undefined && (u = Roblox.Endpoints.getAbsoluteUrl("/Game/" + n) + "?"), u[0] != "h" && (f = "http://" + window.location.host, e = "/Game/" + n + "?", u = f + e), o = {
			placeId: t,
			upload: r ? t : "",
			universeId: i,
			testMode: !1
		}, u + $.param(o)
	}

	function p() {
		return t({
			protocolName: n.protocolNameForStudio,
			launchMode: "edit",
			otherParams: {
				avatar: "avatar",
				browsertrackerid: Roblox.Cookies.getBrowserTrackerId()
			}
		})
	}

	function y(i, r, u) {
		var f = ft(i, r, u);
		t({
			protocolName: n.protocolNameForStudio,
			launchMode: "edit",
			otherParams: {
				script: f,
				avatar: "avatar",
				browsertrackerid: Roblox.Cookies.getBrowserTrackerId()
			},
			placeId: i
		})
	}

	function v(r) {
		var u = n.protocolNameForClient,
			f = "play",
			e = i("RequestGame", r),
			o = {
				placelauncherurl: e,
				browsertrackerid: Roblox.Cookies.getBrowserTrackerId()
			};
		return t({
			protocolName: u,
			launchMode: f,
			otherParams: o,
			placeId: r.placeId
		})
	}

	function a(r) {
		var u = n.protocolNameForClient,
			f = "play",
			e = i("RequestFollowUser", r),
			o = {
				placelauncherurl: e,
				browsertrackerid: Roblox.Cookies.getBrowserTrackerId()
			};
		return t({
			protocolName: u,
			launchMode: f,
			otherParams: o
		})
	}

	function l(r) {
		var u = n.protocolNameForClient,
			f = "play",
			e = i("RequestPlayWithParty", r),
			o = {
				placelauncherurl: e,
				browsertrackerid: Roblox.Cookies.getBrowserTrackerId()
			};
		return t({
			protocolName: u,
			launchMode: f,
			otherParams: o,
			placeId: r.placeId
		})
	}

	function c(r) {
		var u = n.protocolNameForClient,
			f = "play",
			e = i("RequestGameJob", r),
			o = {
				placelauncherurl: e,
				browsertrackerid: Roblox.Cookies.getBrowserTrackerId()
			};
		return t({
			protocolName: u,
			launchMode: f,
			otherParams: o,
			placeId: r.placeId
		})
	}

	function h(r) {
		var u = n.protocolNameForClient,
			f = "play",
			e = i("RequestPrivateGame", r),
			o = {
				placelauncherurl: e,
				browsertrackerid: Roblox.Cookies.getBrowserTrackerId()
			};
		return t({
			protocolName: u,
			launchMode: f,
			otherParams: o,
			placeId: r.placeId
		})
	}

	function s(n) {
		var t = n.gameInfo;
		n.gameInfo = undefined, $(Roblox.GameLauncher).trigger(Roblox.GameLauncher.beginInstallEvent, {
			launchMethod: "Protocol",
			params: n
		}), r = !0, n.url = window.location.href, n.gameInfo = t, f()
	}

	function f() {
		var n = document.getElementById("downloadInstallerIFrame");
		n.src = "/install/setup.ashx"
	}
	var r = !1,
		u = 0,
		n;
	return $(function() {
		Roblox.GameLauncher.gameLaunchInterface = Roblox.ProtocolHandlerClientInterface;
		var t = $("#PlaceLauncherStatusPanel");
		n.protocolNameForClient = t.data("protocol-name-for-client"), n.protocolNameForStudio = t.data("protocol-name-for-studio"), n.protocolUrlIncludesLaunchTime = t.data("protocol-url-includes-launchtime"), n.protocolDetectionEnabled = t.data("protocol-detection-enabled")
	}), n = {
		waitTimeBeforeFailure: 300,
		protocolNameForStudio: "roblox-studio",
		protocolNameForClient: "roblox-client",
		protocolUrlSeparator: "+",
		protocolUrlIncludesLaunchTime: !1,
		protocolDetectionEnabled: !1,
		joinMultiplayerGame: v,
		openStudio: p,
		editGameInStudio: y,
		followPlayerIntoGame: a,
		joinGameWithParty: l,
		joinGameInstance: c,
		joinPrivateGame: h,
		startDownload: f,
		setLocationHref: d
	}
}();;
$(function() {
	$(Roblox.GameLauncher).on(Roblox.GameLauncher.startClientSucceededEvent, function() {
		typeof googletag != "undefined" && googletag.cmd.push(function() {
			googletag.pubads().refresh()
		})
	})
});