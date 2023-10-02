;;;
var googletag = googletag || {};
googletag.cmd = googletag.cmd || [],
    function() {
        var n = document.createElement("script"),
            i, t;
        n.async = !0, n.type = "text/javascript", i = "https:" == document.location.protocol, n.src = (i ? "https:" : "http:") + "//www.googletagservices.com/tag/js/gpt.js", t = document.getElementsByTagName("script")[0], t.parentNode.insertBefore(n, t)
    }();;
(function(n, t) {
    function b(n, i) {
        var r = i.split(".");
        for (i = r.shift(); r.length > 0; n = n[i], i = r.shift())
            if (n[i] === t) return t;
        return n[i]
    }

    function y(n, i, r) {
        var u = i.split(".");
        for (i = u.shift(); u.length > 0; n = n[i], i = u.shift()) n[i] === t && (n[i] = {});
        n[i] = r
    }

    function w(n, t) {
        var i = f.createElement("link");
        i.href = n, i.rel = "stylesheet", i.type = "text/css", u.parentNode.insertBefore(i, u), t()
    }

    function p(n, t) {
        var i = f.createElement("script");
        i.type = "text/javascript", i.src = n, i.onload = i.onreadystatechange = function() {
            i.readyState && i.readyState != "loaded" && i.readyState != "complete" || (t(), i.onload = i.onreadystatechange = null)
        }, u.parentNode.insertBefore(i, u)
    }

    function g(n) {
        return n.split(".").pop().split("?").shift()
    }

    function l(n) {
        if (n.indexOf(".js") < 0) return n;
        if (n.indexOf(r.modulePath) >= 0) return n.split(r.modulePath + "/").pop().split(".").shift().replace("/", ".");
        for (var t in r.paths)
            if (r.paths[t] == n) return t;
        return n
    }

    function v(n) {
        return n.indexOf(".js") >= 0 || n.indexOf(".css") >= 0 ? n : r.paths[n] || r.baseUrl + r.modulePath + "/" + n.replace(".", "/") + ".js"
    }

    function c(n) {
        for (var r, u = [], i = 0; i < n.length; i++) r = b(Roblox, l(n[i])), r !== t && u.push(r);
        return u
    }

    function e(n) {
        var t = i[n];
        if (t.loaded && t.depsLoaded)
            while (t.listeners.length > 0) t.listeners.shift()()
    }

    function a(n, u) {
        var f, o, s;
        if (!d(n) || r.externalResources.toString().indexOf(n) >= 0) return u();
        f = l(n), i[f] === t ? (i[f] = {
            loaded: !1,
            depsLoaded: !0,
            listeners: []
        }, i[f].listeners.push(u), o = v(f), s = g(o) == "css" ? w : p, s(o, function() {
            i[f].loaded = !0, e(f)
        })) : (i[f].listeners.push(u), e(f))
    }

    function o(n, t) {
        var i = n.shift(),
            r = n.length == 0 ? t : function() {
                o(n, t)
            };
        a(i, r)
    }

    function h(n, t) {
        s(n) || (n = [n]);
        var i = function() {
            t.apply(null, c(n))
        };
        o(n.slice(0), i)
    }

    function nt(n, t, r) {
        k(t) ? (r = t, t = []) : s(t) || (t = [t]), i[n] = i[n] || {
            loaded: !0,
            listeners: []
        }, i[n].depsLoaded = !1, i[n].listeners.unshift(function() {
            y(Roblox, n, r.apply(null, c(t)))
        }), h(t, function() {
            i[n].depsLoaded = !0, e(n)
        })
    }
    var f = n.document,
        u = f.getElementsByTagName("script")[0],
        d = function(n) {
            return typeof n == "string"
        },
        s = function(n) {
            return Object.prototype.toString.call(n) == "[object Array]"
        },
        k = function(n) {
            return Object.prototype.toString.call(n) == "[object Function]"
        },
        i = {},
        r = {
            baseUrl: "",
            modulePath: "/js/modules",
            paths: {},
            externalResources: []
        };
    typeof Roblox == "undefined" && (Roblox = {}), Roblox.config = r, Roblox.require = h, Roblox.define = nt
})(window);;
var Roblox = Roblox || {};
Roblox.Constants = function() {
    return {
        http: {
            contentType: "application/json; charset=utf-8",
            dataType: "json",
            successStatus: "Success"
        },
        realTimeNotifications: {
            friendshipNotifications: {
                name: "FriendshipNotifications",
                types: {
                    friendshipCreated: "FriendshipCreated",
                    friendshipDestroyed: "FriendshipDestroyed",
                    friendshipDeclined: "FriendshipDeclined",
                    friendshipRequested: "FriendshipRequested"
                }
            },
            presenceBulkNotifications: {
                name: "PresenceBulkNotifications",
                types: {
                    presenceChanged: "PresenceChanged"
                }
            }
        },
        presenceTypes: {
            offline: 0,
            online: 1,
            inGame: 2,
            inStudio: 3
        },
        keyCodes: {
            enter: 13
        },
        events: {
            ClickShareGameToChat: {
                name: "ShareGameToChat",
                context: "ClickShareIcon"
            }
        }
    }
}();;
jQuery.cookie = function(n, t, i) {
    var f, r, e, o, u, s;
    if (typeof t != "undefined") {
        i = i || {}, t === null && (t = "", i.expires = -1), f = "", i.expires && (typeof i.expires == "number" || i.expires.toUTCString) && (typeof i.expires == "number" ? (r = new Date, r.setTime(r.getTime() + i.expires * 864e5)) : r = i.expires, f = "; expires=" + r.toUTCString());
        var h = i.path ? "; path=" + i.path : "",
            c = i.domain ? "; domain=" + i.domain : "",
            l = i.secure ? "; secure" : "";
        document.cookie = [n, "=", encodeURIComponent(t), f, h, c, l].join("")
    } else {
        if (e = null, document.cookie && document.cookie != "")
            for (o = document.cookie.split(";"), u = 0; u < o.length; u++)
                if (s = jQuery.trim(o[u]), s.substring(0, n.length + 1) == n + "=") {
                    e = decodeURIComponent(s.substring(n.length + 1));
                    break
                } return e
    }
};;
Roblox = Roblox || {}, Roblox.Performance = function() {
    function r() {
        return "performance" in window && "timing" in window.performance && "navigation" in window.performance && "measure" in window.performance
    }

    function nt() {
        if (u = $('meta[name="performance"]'), !u) return !1;
        var n = u.data("ui-performance-relative-value");
        return Math.random() < n && r()
    }

    function w() {
        var n = i.data("performance-relative-value");
        return Math.random() < n && r()
    }

    function p() {
        var n = i.data("send-event-percentage");
        return Roblox.EventStream && n && n != 0 && Math.random() < n && r()
    }

    function y() {
        typeof t == "undefined" && (t = i.data("internal-page-name"))
    }

    function v() {
        typeof n == "undefined" && (n = window.performance.timing)
    }

    function ot(n, t, i, r) {
        var u = [];
        return u.push(n), u.push(t), u.push(i), r = Math.floor(r), u.push(r), u
    }

    function k(n, t, i, r) {
        if (Roblox.GaEventSettings.gaPerformanceEventEnabled && typeof GoogleAnalyticsEvents != "undefined" && r > 0) {
            var u = ot(n, t, i, r);
            GoogleAnalyticsEvents.FireEvent(u)
        }
    }

    function a(n, t) {
        return typeof t == "undefined" && (t = rt), t + ":" + n
    }

    function c(n) {
        return n + "_measure"
    }

    function h(n, t) {
        if (window.performance && typeof window.performance.mark == "function") {
            var i = a(n, t);
            window.performance.mark(i)
        }
    }

    function s(n) {
        var t = n.split(":"),
            r = t[0],
            i = t[1];
        t.length > 2 && (i = t[2] + ":" + i), window.performance.measure(c(i), r, n)
    }

    function d() {
        var n, t, i;
        if (typeof window.performance.getEntriesByType == "function" && (n = window.performance.getEntriesByType("mark"), n && n.length > 0))
            for (t = 0; t < n.length; t++) i = n[t], s(i.name)
    }

    function g(n) {
        var f = [],
            t, i, u, r;
        if (typeof window.performance.getEntriesByName == "function" && (t = window.performance.getEntriesByName(n), t && t.length > 0))
            for (i = 0; i < t.length; i++) u = t[i], r = {}, r.name = u.name, r.duration = Math.floor(u.duration), f.push(r);
        return f
    }

    function o() {
        if (n && n.domComplete && n.navigationStart) {
            var t = Math.floor(n.domComplete - n.navigationStart);
            if (t > 0) return {
                name: "PageLoad",
                duration: t
            }
        }
        return null
    }

    function tt() {
        if (n && n.responseEnd && n.navigationStart) {
            var t = Math.floor(n.responseEnd - n.navigationStart);
            if (t > 0 && t.toString().length < 6) return {
                name: "FirstByte",
                duration: t
            }
        }
        return null
    }

    function it() {
        var t = [],
            e = o(),
            u, n, i, f, r;
        if (e && t.push(e), u = tt(), u && t.push(u), typeof window.performance.getEntriesByType == "function" && (n = window.performance.getEntriesByType("measure"), n && n.length > 0))
            for (i = 0; i < n.length; i++) f = n[i], r = {}, r.name = f.name, r.duration = Math.floor(f.duration), t.push(r);
        return t
    }

    function e(n) {
        var i, r;
        if (n && n.length > 0)
            for (i = 0; i < n.length; i++) r = n[i], k(ut, t, r.name, r.duration)
    }

    function f(n) {
        var r, i;
        if (n && n.length > 0) {
            for (r = {}, i = 0; i < n.length; i++) r[n[i].name] = n[i].duration;
            Roblox.EventStream.SendEventWithTarget("pagePerformance", t, r, Roblox.EventStream.TargetTypes.WWW)
        }
    }

    function ft() {
        var i, r, e;
        if (nt()) {
            var n = [],
                s = u.data("ui-performance-endpoint"),
                f = o();
            if (f && (n.push(f), n.length > 0))
                for (i = 0; i < n.length; i++) r = n[i], e = {
                    featureName: t,
                    measureName: r.name,
                    value: r.duration
                }, $.ajax({
                    type: "POST",
                    url: s,
                    data: e,
                    crossDomain: !0,
                    xhrFields: {
                        withCredentials: !0
                    }
                })
        }
    }

    function et(n) {
        var o, l, u;
        i && r() && typeof t != "undefined" && (h(n), o = a(n), s(o), l = c(n), u = g(l), w() && e(u), p() && f(u))
    }

    function l() {
        if (i && r() && typeof t != "undefined") {
            d();
            var n = it();
            w() && e(n), p() && f(n)
        }
    }

    function b() {
        i = $("#rbx-body")
    }
    var n, ut = "Performance",
        t, i, u, rt = "navigationStart";
    return $(window).load(function() {
        b(), v(), y(), l(), ft()
    }), {
        setPageElement: b,
        setTiming: v,
        setPageName: y,
        setPerformanceMark: h,
        logSinglePerformanceMark: et,
        logPerformance: l
    }
}();;
typeof Roblox == "undefined" && (Roblox = {}), typeof Roblox.Cookies == "undefined" && (Roblox.Cookies = {}), Roblox.Cookies.getBrowserTrackerId = function() {
    var t = $.cookie("RBXEventTrackerV2") || $.cookie("RBXEventTracker"),
        n;
    return t && (n = t.match(/browserid=([^&]*)/i), n) ? n[1] : !1
}, Roblox.Cookies.getSessionId = function() {
    var t = $.cookie("RBXSessionTracker"),
        n;
    if (t) return (n = t.match(/sessionid=([^&]*)/i), n) ? n[1] : !1
}, Roblox.Cookies.getGuestId = function() {
    var t = $.cookie("GuestData"),
        n;
    if (t) return (n = t.match(/userid=([^&]*)/i), n) ? n[1] : !1
};;
typeof Roblox == "undefined" && (Roblox = {}), typeof Roblox.EventStream == "undefined" && (Roblox.EventStream = function() {
    function h() {
        t = !0
    }

    function c(n) {
        e = n
    }

    function l(n, i) {
        var r, f, u, o, s;
        return r = t ? this.location.href : window.location.href, r && e && (f = r.indexOf("?"), f > -1 && (r = r.slice(0, f))), u = {
            evt: n,
            ctx: i,
            url: r,
            lt: (new Date).toISOString()
        }, t || (o = Roblox.Cookies.getGuestId(), o && (u.gid = o), s = Roblox.Cookies.getSessionId(), s && (u.sid = s)), u
    }

    function o(e, o, h, c) {
        var a = "",
            w, v, b;
        switch (c) {
            case n.DEFAULT:
                a = i;
                break;
            case n.WWW:
                a = r;
                break;
            case n.STUDIO:
                a = u;
                break;
            case n.DIAGNOSTIC:
                a = f
        }
        if (t && c !== n.DEFAULT) throw "TargetType '" + c + "' is not supported in Service Worker mode";
        e && o && a !== "" && (w = l(e, o), v = a, v += a.indexOf("?") === -1 ? "?" : "&", t ? (y(h, w), v += p(h), Roblox.Fetch.getWithNoCredentials(v)) : ($.extend(h, w), v += $.param(h), b = new Image, b.src = v), s.LocalEventLog.push({
            eventName: e,
            context: o,
            additionalProperties: h
        }))
    }

    function a(t, i, r) {
        return o(t, i, r, n.DEFAULT)
    }

    function v(n, t, e, o) {
        i = n, r = t, u = e, f = o
    }

    function y(n, t) {
        for (var i in t) t.hasOwnProperty(i) && (n[i] = t[i]);
        return n
    }

    function p(n) {
        var i = [],
            t;
        for (t in n) n.hasOwnProperty(t) && i.push(encodeURIComponent(t) + "=" + encodeURIComponent(n[t]));
        return i.join("&")
    }
    var n = {
            DEFAULT: 0,
            WWW: 1,
            STUDIO: 2,
            DIAGNOSTIC: 3
        },
        i, r, u, f, t = !1,
        e = !1,
        s = {
            Init: v,
            SendEvent: a,
            SendEventWithTarget: o,
            LocalEventLog: [],
            TargetTypes: n,
            SetServiceWorkerMode: h,
            SetExcludeQueryStringFromUrl: c
        };
    return s
}());;
typeof Roblox == "undefined" && (Roblox = {}), typeof Roblox.UserInteractionsEvent == "undefined" && (Roblox.UserInteractionsEvent = function() {
    var n = "mousemove touchstart",
        t = function(n) {
            
        },
        i = function(r) {
            r.type === "mousemove" ? t("mouse") : t("touch"), $.each(n.split(" "), function(n, t) {
                $(document).off(t, null, i)
            })
        },
        r = function() {
            $(document).on(n, i)
        };
    return {
        Init: r
    }
}(), Roblox.UserInteractionsEvent.Init());;
typeof Roblox == "undefined" && (Roblox = {}), typeof Roblox.PageHeartbeatEvent == "undefined" && (Roblox.PageHeartbeatEvent = function() {
    var n = function(n) {
            
        },
        t = function(t) {
            if (t) {
                var i = 0;

                function r() {
                    if (t.length && i < t.length) {
                        var u = t[i++];
                        setTimeout(function() {
                            n(i), r()
                        }, u * 1e3)
                    }
                }
                r()
            }
        },
        i = function(n) {
            t(n)
        };
    return {
        Init: i
    }
}());;
"use strict";
var Roblox = Roblox || {};
Roblox.CurrentUser = Roblox.CurrentUser || {}, Roblox.UserService = function() {
    function t() {
        Roblox.CurrentUser.isAuthenticated = !0, Roblox.CurrentUser.userId = n.dataset.userid, Roblox.CurrentUser.name = n.dataset.name, Roblox.CurrentUser.isUnder13 = n.dataset.isunder13 === "true", Roblox.CurrentUser.is13orOver = !Roblox.CurrentUser.isUnder13
    }

    function i() {
        n ? t() : Roblox.CurrentUser.isAuthenticated = !1
    }
    var n = document.querySelector('meta[name="user-data"]');
    i()
}();;
"use strict";
var Roblox = Roblox || {};
Roblox.MetaDataValues = function() {
    function t() {
        return n && n.dataset && n.dataset.internalPageName
    }
    var n = document.querySelector('meta[name="page-meta"]');
    return {
        getPageName: t
    }
}();;
var Roblox = Roblox || {};
Roblox.LocalStorage = function() {
    function n() {
        var n = "localstorage_validation_test";
        try {
            return localStorage.setItem(n, n), localStorage.removeItem(n), !0
        } catch (t) {
            return !1
        }
    }
    return {
        isAvailable: n
    }
}();;
typeof Roblox == "undefined" && (Roblox = {}), typeof Roblox.Utilities == "undefined" && (Roblox.Utilities = {}), Roblox.Utilities.ExponentialBackoff = function(n, t, i) {
    function s() {
        a();
        var n = v();
        return r++, n
    }

    function h() {
        r = 0, e = +new Date, f = !1
    }

    function c() {
        return r
    }

    function l() {
        return e
    }

    function a() {
        r === 0 && t && t(u) && (f = !0)
    }

    function v() {
        var t = y(),
            i, n;
        return r === 0 ? (n = t.FirstAttemptDelay(), n + o(n, t.FirstAttemptRandomnessFactor())) : (i = t.SubsequentDelayBase(), n = i * Math.pow(2, r - 1), n > t.MaximumDelayBase() && (n = t.MaximumDelayBase()), n + o(n, t.SubsequentDelayRandomnessFactor()))
    }

    function o(n, t) {
        return Math.floor(Math.random() * n * t)
    }

    function y() {
        return f && i ? i : n
    }
    var u = this,
        r = 0,
        f = !1,
        e = null;
    u.StartNewAttempt = s, u.Reset = h, u.GetAttemptCount = c, u.GetLastResetTime = l
};;
typeof Roblox == "undefined" && (Roblox = {}), typeof Roblox.Utilities == "undefined" && (Roblox.Utilities = {}), Roblox.Utilities.ExponentialBackoffSpecification = function(n) {
    n = n || {};
    var t = typeof n.firstAttemptDelay == "number" ? n.firstAttemptDelay : 5e3,
        i = typeof n.firstAttemptRandomnessFactor == "number" ? n.firstAttemptRandomnessFactor : .5,
        r = typeof n.subsequentDelayBase == "number" ? n.subsequentDelayBase : t * 2,
        u = typeof n.subsequentDelayRandomnessFactor == "number" ? n.subsequentDelayRandomnessFactor : i,
        f = typeof n.maximumDelayBase == "number" ? n.maximumDelayBase : 3e5;
    this.FirstAttemptDelay = function() {
        return t
    }, this.FirstAttemptRandomnessFactor = function() {
        return i
    }, this.SubsequentDelayBase = function() {
        return r
    }, this.SubsequentDelayRandomnessFactor = function() {
        return u
    }, this.MaximumDelayBase = function() {
        return f
    }
};;
Roblox && Roblox.BundleDetector && Roblox.BundleDetector.bundleDetected('headerinit');