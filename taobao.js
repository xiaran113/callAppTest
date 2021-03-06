!
function(a, b) {
    function c(a) {
        Object.defineProperty(this, "val", {
            value: a.toString(),
            enumerable: !0
        }),
        this.gt = function(a) {
            return c.compare(this, a) > 0
        },
        this.gte = function(a) {
            return c.compare(this, a) >= 0
        },
        this.lt = function(a) {
            return c.compare(this, a) < 0
        },
        this.lte = function(a) {
            return c.compare(this, a) <= 0
        },
        this.eq = function(a) {
            return 0 === c.compare(this, a)
        }
    }
    b.env = b.env || {},
    c.prototype.toString = function() {
        return this.val
    },
    c.prototype.valueOf = function() {
        for (var a = this.val.split("."), b = [], c = 0; c < a.length; c++) {
            var d = parseInt(a[c], 10);
            isNaN(d) && (d = 0);
            var e = d.toString();
            e.length < 5 && (e = Array(6 - e.length).join("0") + e),
            b.push(e),
            1 === b.length && b.push(".")
        }
        return parseFloat(b.join(""))
    },
    c.compare = function(a, b) {
        a = a.toString().split("."),
        b = b.toString().split(".");
        for (var c = 0; c < a.length || c < b.length; c++) {
            var d = parseInt(a[c], 10),
            e = parseInt(b[c], 10);
            if (window.isNaN(d) && (d = 0), window.isNaN(e) && (e = 0), e > d) return - 1;
            if (d > e) return 1
        }
        return 0
    },
    b.version = function(a) {
        return new c(a)
    }
} (window, window.lib || (window.lib = {})),
function(a, b) {
    b.env = b.env || {};
    var c = a.location.search.replace(/^\?/, "");
    if (b.env.params = {},
    c) for (var d = c.split("&"), e = 0; e < d.length; e++) {
        d[e] = d[e].split("=");
        try {
            b.env.params[d[e][0]] = decodeURIComponent(d[e][1])
        } catch(f) {
            b.env.params[d[e][0]] = d[e][1]
        }
    }
} (window, window.lib || (window.lib = {})),
function(a, b) {
    b.env = b.env || {};
    var c, d = a.navigator.userAgent;
    if (c = d.match(/Windows\sPhone\s(?:OS\s)?([\d\.]+)/)) b.env.os = {
        name: "Windows Phone",
        isWindowsPhone: !0,
        version: c[1]
    };
    else if (d.match(/Safari/) && (c = d.match(/Android[\s\/]([\d\.]+)/))) b.env.os = {
        version: c[1]
    },
    d.match(/Mobile\s+Safari/) ? (b.env.os.name = "Android", b.env.os.isAndroid = !0) : (b.env.os.name = "AndroidPad", b.env.os.isAndroidPad = !0);
    else if (c = d.match(/(iPhone|iPad|iPod)/)) {
        var e = c[1];
        c = d.match(/OS ([\d_\.]+) like Mac OS X/),
        b.env.os = {
            name: e,
            isIPhone: "iPhone" === e || "iPod" === e,
            isIPad: "iPad" === e,
            isIOS: !0,
            version: c[1].split("_").join(".")
        }
    } else b.env.os = {
        name: "unknown",
        version: "0.0.0"
    };
    b.version && (b.env.os.version = b.version(b.env.os.version))
} (window, window.lib || (window.lib = {})),
function(a, b) {
    b.env = b.env || {};
    var c, d = a.navigator.userAgent; (c = d.match(/(?:UCWEB|UCBrowser\/)([\d\.]+)/)) ? b.env.browser = {
        name: "UC",
        isUC: !0,
        version: c[1]
    }: (c = d.match(/MQQBrowser\/([\d\.]+)/)) ? b.env.browser = {
        name: "QQ",
        isQQ: !0,
        version: c[1]
    }: (c = d.match(/Firefox\/([\d\.]+)/)) ? b.env.browser = {
        name: "Firefox",
        isFirefox: !0,
        version: c[1]
    }: (c = d.match(/MSIE\s([\d\.]+)/)) || (c = d.match(/IEMobile\/([\d\.]+)/)) ? (b.env.browser = {
        version: c[1]
    },
    d.match(/IEMobile/) ? (b.env.browser.name = "IEMobile", b.env.browser.isIEMobile = !0) : (b.env.browser.name = "IE", b.env.browser.isIE = !0), d.match(/Android|iPhone/) && (b.env.browser.isIELikeWebkit = !0)) : (c = d.match(/(?:Chrome|CriOS)\/([\d\.]+)/)) ? (b.env.browser = {
        name: "Chrome",
        isChrome: !0,
        version: c[1]
    },
    d.match(/Version\/[\d+\.]+\s*Chrome/) && (b.env.browser.name = "Chrome Webview", b.env.browser.isWebview = !0)) : d.match(/Safari/) && (c = d.match(/Android[\s\/]([\d\.]+)/)) ? b.env.browser = {
        name: "Android",
        isAndroid: !0,
        version: c[1]
    }: d.match(/iPhone|iPad|iPod/) ? d.match(/Safari/) ? (c = d.match(/Version\/([\d\.]+)/), b.env.browser = {
        name: "Safari",
        isSafari: !0,
        version: c[1]
    }) : (c = d.match(/OS ([\d_\.]+) like Mac OS X/), b.env.browser = {
        name: "iOS Webview",
        isWebview: !0,
        version: c[1].replace(/\_/, ".")
    }) : b.env.browser = {
        name: "unknown",
        version: "0.0.0"
    },
    b.version && (b.env.browser.version = b.version(b.env.browser.version))
} (window, window.lib || (window.lib = {})),
function(a, b) {
    b.env = b.env || {};
    var c = a.navigator.userAgent;
    c.match(/Weibo/i) ? b.env.thirdapp = {
        appname: "Weibo",
        isWeibo: !0
    }: c.match(/MicroMessenger/i) ? b.env.thirdapp = {
        appname: "Weixin",
        isWeixin: !0
    }: b.env.thirdapp = !1
} (window, window.lib || (window.lib = {})),
function(a, b) {
    b.env = b.env || {};
    var c, d, e = a.navigator.userAgent; (d = e.match(/WindVane[\/\s]([\d\.\_]+)/)) && (c = d[1]);
    var f = !1,
    g = "",
    h = "",
    i = ""; (d = e.match(/AliApp\(([A-Z\-]+)\/([\d\.]+)\)/)) && (f = !0, g = d[1], i = d[2], h = g.indexOf("-PD") > 0 ? b.env.os.isIOS ? "iPad": b.env.os.isAndroid ? "AndroidPad": b.env.os.name: b.env.os.name),
    !g && e.indexOf("TBIOS") > 0 && (g = "TB"),
    f ? b.env.aliapp = {
        windvane: b.version(c || "0.0.0"),
        appname: g || "unkown",
        version: b.version(i || "0.0.0"),
        platform: h || b.env.os.name
    }: b.env.aliapp = !1,
    b.env.taobaoApp = b.env.aliapp
} (window, window.lib || (window.lib = {})); !
function(a, b) {
    function c(a) {
        var b = {};
        Object.defineProperty(this, "params", {
            set: function(a) {
                if ("object" == typeof a) {
                    for (var c in b) delete b[c];
                    for (var c in a) b[c] = a[c]
                }
            },
            get: function() {
                return b
            },
            enumerable: !0
        }),
        Object.defineProperty(this, "search", {
            set: function(a) {
                if ("string" == typeof a) {
                    0 === a.indexOf("?") && (a = a.substr(1));
                    var c = a.split("&");
                    for (var d in b) delete b[d];
                    for (var e = 0; e < c.length; e++) {
                        var f = c[e].split("=");
                        if (f[0]) try {
                            b[decodeURIComponent(f[0])] = decodeURIComponent(f[1] || "")
                        } catch(g) {
                            b[f[0]] = f[1] || ""
                        }
                    }
                }
            },
            get: function() {
                var a = [];
                for (var c in b) if (b[c]) try {
                    a.push(encodeURIComponent(c) + "=" + encodeURIComponent(b[c]))
                } catch(d) {
                    a.push(c + "=" + b[c])
                } else try {
                    a.push(encodeURIComponent(c))
                } catch(d) {
                    a.push(c)
                }
                return a.length ? "?" + a.join("&") : ""
            },
            enumerable: !0
        });
        var c;
        Object.defineProperty(this, "hash", {
            set: function(a) {
                a && a.indexOf("#") < 0 && (a = "#" + a),
                c = a || ""
            },
            get: function() {
                return c
            },
            enumerable: !0
        }),
        this.set = function(a) {
            a = a || "";
            var b;
            if (! (b = a.match(new RegExp("^([a-z0-9-]+:)?[/]{2}(?:([^@/:?]+)(?::([^@/:]+))?@)?([^:/?#]+)(?:[:]([0-9]+))?([/][^?#;]*)?(?:[?]([^?#]*))?(#[^#]*)?$", "i")))) throw new Error("Wrong uri scheme.");
            this.protocol = b[1] || location.protocol,
            this.username = b[2] || "",
            this.password = b[3] || "",
            this.hostname = this.host = b[4],
            this.port = b[5] || "",
            this.pathname = b[6] || "/",
            this.search = b[7] || "",
            this.hash = b[8] || "",
            this.origin = this.protocol + "//" + this.hostname
        },
        this.toString = function() {
            var a = this.protocol + "//";
            return this.username && (a += this.username, this.password && (a += ":" + this.password), a += "@"),
            a += this.host,
            this.port && "80" !== this.port && (a += ":" + this.port),
            this.pathname && (a += this.pathname),
            this.search && (a += this.search),
            this.hash && (a += this.hash),
            a
        },
        a && this.set(a.toString())
    }
    b.httpurl = function(a) {
        return new c(a)
    }
} (window, window.lib || (window.lib = {})); !
function(a, b) {
    function c(a, b) {
        var c = new j(location.href),
        d = h.getElementById("buried"),
        e = c.params.ttid,
        f = c.params.ad_id,
        g = c.params.source_type,
        i = c.params.refpid,
        k = c.params.actparam,
        l = c.params.actname,
        m = c.params.ali_trackid,
        n = c.params.pid,
        o = h.cookie.match(/(?:^|\s)cna=([^;]+)(?:;|$)/);
        c.search = "",
        c.hash = "";
        var p = {};
        if (d && (e = d.value), p.from = "h5", e && (p.ttid = e), i && (p.refpid = i), k && (p.actparam = k), l && (p.actname = l), p.url = c.toString(), n && (p.pid = n), f && (p.ad_id = f), g && (p.source_type = g), m && (p.ali_trackid = m), o && (p.h5_uid = o[1]), "object" == typeof b) for (var q in b) p[q] = b[q];
        return a.params.point = JSON.stringify(p),
        a
    }
    function d(a, b) {
        var c = new j(location.href),
        d = h.getElementById("buried");
        for (var e in c.params) a.params.hasOwnProperty(e) || (a.params[e] = c.params[e]);
        if (d && (a.params.ttid = d.value), "object" == typeof b) for (var e in b) a.params[e] = b[e];
        return a
    }
    function e(a) {
        o || (o = h.createElement("iframe"), o.id = "callapp_iframe_" + Date.now(), o.frameborder = "0", o.style.cssText = "display:none;border:0;width:0;height:0;", h.body.appendChild(o)),
        o.src = a
    }
    function f(a, b) {
        alert(a);
        b.replace === !1 || !l && b.replace !== !0 ? location.href = a: location.replace(a)
    }
    function g(a) {
        var b = document.createElement("a");
        b.setAttribute("href", a),
        b.style.display = "none",
        document.body.appendChild(b);
        var c = document.createEvent("HTMLEvents");
        c.initEvent("click", !1, !1),
        b.dispatchEvent(c)
    }
    var h = a.document,
    i = a.navigator.userAgent,
    j = b.httpurl,
    k = b.env.os,
    l = (b.env.params, b.env.aliapp),
    m = b.env.browser,
    n = {
        "taobao:": "com.taobao.taobao",
        "taobaowebview:": "com.taobao.taobao",
        "tmall:": "com.tmall.wireless"
    };
    b.callapp = b.callapp || {};
    var o;
    b.callapp.gotoPage = function(a, b) {
        b = b || {},
        "undefined" == typeof b.point && (b.point = !0),
        "undefined" == typeof b.params && (b.params = !0);
        var h = new j(a || location.href);
        if (a = new j(a), ("http:" === a.protocol || "https:" === a.protocol) && (k.isAndroid && l && "TB" === l.appname ? (a = new j("taobaowebview://m.taobao.com/"), a.params.weburl = h.toString()) : a.protocol = "taobao:"), "taobao:" === a.protocol) b.point && c(a, b.point),
        b.params && d(a, b.params);
        else if ("taobaowebview:" === a.protocol) {
            b.point && c(a, b.point);
            var o = new j(a.params.weburl);
            b.params && d(o, b.params),
            b.point && c(o, b.point),
            a.params.weburl = o.toString()
        } else "tmall:" !== a.protocol.toLowerCase() && "kddcpublic:" !== a.protocol.toLowerCase() && "mdatadwphone:" !== a.protocol.toLowerCase() && b.params && d(a, b.params);
        var p = k.isAndroid && m.isChrome && !m.isWebview,
        q = k.isAndroid && !!i.match(/samsung/i) && k.version.gte("4.3") && k.version.lt("4.5"),
        r = k.isIPhone && k.version.gte("9.0") && m.isSafari; (p || q || b.forceIntent) && (a.hash = "Intent;scheme=" + a.protocol.replace(":", "") + ";package=" + (b["package"] || n[a.protocol]) + ";end", a.protocol = "intent:"),
        r ? setTimeout(function() {
            g(a.toString(), b)
        },
        100) : l || "intent:" === a.protocol ? setTimeout(function() {
            f(a.toString(), b)
        },
        100) : e(a.toString())
    },
    b.callapp.download = function(a, b) {
        b = b || {},
        a || (a = k.isIPhone ? "http://itunes.apple.com/cn/app/id387682726?mt=8": k.isIPad ? "https://itunes.apple.com/app/id438865278": k.isAndroid ? "//download.alicdn.com/wireless/taobao4android/latest/taobao4android_703248.apk": ""),
        a = new j(a),
        k.isAndroid && a.pathname.match(/\.apk$/) ? (a.search = "", a.hash = "") : b.params && d(a, b.params),
        a = a.toString(),
        f(a, b)
    }
} (window, window.lib || (window.lib = {}));