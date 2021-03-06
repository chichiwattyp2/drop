!(function(e, t) {
  "object" == typeof exports && "object" == typeof module
    ? (module.exports = t())
    : "function" == typeof define && define.amd
    ? define([], t)
    : "object" == typeof exports
    ? (exports.ARjsStudioBackend = t())
    : (e.ARjsStudioBackend = t());
})(window, function() {
  return (function(e) {
    var t = {};
    function r(n) {
      if (t[n]) return t[n].exports;
      var i = (t[n] = { i: n, l: !1, exports: {} });
      return e[n].call(i.exports, i, i.exports, r), (i.l = !0), i.exports;
    }
    return (
      (r.m = e),
      (r.c = t),
      (r.d = function(e, t, n) {
        r.o(e, t) || Object.defineProperty(e, t, { enumerable: !0, get: n });
      }),
      (r.r = function(e) {
        "undefined" != typeof Symbol &&
          Symbol.toStringTag &&
          Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }),
          Object.defineProperty(e, "__esModule", { value: !0 });
      }),
      (r.t = function(e, t) {
        if ((1 & t && (e = r(e)), 8 & t)) return e;
        if (4 & t && "object" == typeof e && e && e.__esModule) return e;
        var n = Object.create(null);
        if (
          (r.r(n),
          Object.defineProperty(n, "default", { enumerable: !0, value: e }),
          2 & t && "string" != typeof e)
        )
          for (var i in e)
            r.d(
              n,
              i,
              function(t) {
                return e[t];
              }.bind(null, i)
            );
        return n;
      }),
      (r.n = function(e) {
        var t =
          e && e.__esModule
            ? function() {
                return e.default;
              }
            : function() {
                return e;
              };
        return r.d(t, "a", t), t;
      }),
      (r.o = function(e, t) {
        return Object.prototype.hasOwnProperty.call(e, t);
      }),
      (r.p = ""),
      r((r.s = 102))
    );
  })([
    function(e, t, r) {
      e.exports = r(20);
    },
    function(e, t) {
      e.exports = function(e, t) {
        if (!(e instanceof t))
          throw new TypeError("Cannot call a class as a function");
      };
    },
    function(e, t) {
      function r(e, t) {
        for (var r = 0; r < t.length; r++) {
          var n = t[r];
          (n.enumerable = n.enumerable || !1),
            (n.configurable = !0),
            "value" in n && (n.writable = !0),
            Object.defineProperty(e, n.key, n);
        }
      }
      e.exports = function(e, t, n) {
        return t && r(e.prototype, t), n && r(e, n), e;
      };
    },
    function(e, t) {
      function r(e, t, r, n, i, s, o) {
        try {
          var a = e[s](o),
            p = a.value;
        } catch (e) {
          return void r(e);
        }
        a.done ? t(p) : Promise.resolve(p).then(n, i);
      }
      e.exports = function(e) {
        return function() {
          var t = this,
            n = arguments;
          return new Promise(function(i, s) {
            var o = e.apply(t, n);
            function a(e) {
              r(o, i, s, a, p, "next", e);
            }
            function p(e) {
              r(o, i, s, a, p, "throw", e);
            }
            a(void 0);
          });
        };
      };
    },
    function(e, t, r) {
      "use strict";
      r.r(t),
        r.d(t, "Deprecation", function() {
          return n;
        });
      class n extends Error {
        constructor(e) {
          super(e),
            Error.captureStackTrace &&
              Error.captureStackTrace(this, this.constructor),
            (this.name = "Deprecation");
        }
      }
    },
    function(e, t, r) {
      "use strict";
      (t.__esModule = !0),
        (t.extend = a),
        (t.indexOf = function(e, t) {
          for (var r = 0, n = e.length; r < n; r++) if (e[r] === t) return r;
          return -1;
        }),
        (t.escapeExpression = function(e) {
          if ("string" != typeof e) {
            if (e && e.toHTML) return e.toHTML();
            if (null == e) return "";
            if (!e) return e + "";
            e = "" + e;
          }
          if (!s.test(e)) return e;
          return e.replace(i, o);
        }),
        (t.isEmpty = function(e) {
          return (!e && 0 !== e) || !(!c(e) || 0 !== e.length);
        }),
        (t.createFrame = function(e) {
          var t = a({}, e);
          return (t._parent = e), t;
        }),
        (t.blockParams = function(e, t) {
          return (e.path = t), e;
        }),
        (t.appendContextPath = function(e, t) {
          return (e ? e + "." : "") + t;
        });
      var n = {
          "&": "&amp;",
          "<": "&lt;",
          ">": "&gt;",
          '"': "&quot;",
          "'": "&#x27;",
          "`": "&#x60;",
          "=": "&#x3D;"
        },
        i = /[&<>"'`=]/g,
        s = /[&<>"'`=]/;
      function o(e) {
        return n[e];
      }
      function a(e) {
        for (var t = 1; t < arguments.length; t++)
          for (var r in arguments[t])
            Object.prototype.hasOwnProperty.call(arguments[t], r) &&
              (e[r] = arguments[t][r]);
        return e;
      }
      var p = Object.prototype.toString;
      t.toString = p;
      var u = function(e) {
        return "function" == typeof e;
      };
      u(/x/) &&
        (t.isFunction = u = function(e) {
          return "function" == typeof e && "[object Function]" === p.call(e);
        }),
        (t.isFunction = u);
      var c =
        Array.isArray ||
        function(e) {
          return (
            !(!e || "object" != typeof e) && "[object Array]" === p.call(e)
          );
        };
      t.isArray = c;
    },
    function(e, t) {
      var r;
      r = (function() {
        return this;
      })();
      try {
        r = r || new Function("return this")();
      } catch (e) {
        "object" == typeof window && (r = window);
      }
      e.exports = r;
    },
    function(e, t) {
      function r(t) {
        return (
          (e.exports = r = Object.setPrototypeOf
            ? Object.getPrototypeOf
            : function(e) {
                return e.__proto__ || Object.getPrototypeOf(e);
              }),
          r(t)
        );
      }
      e.exports = r;
    },
    function(e, t, r) {
      var n = r(59);
      function i(e) {
        var t = function() {
          return t.called
            ? t.value
            : ((t.called = !0), (t.value = e.apply(this, arguments)));
        };
        return (t.called = !1), t;
      }
      function s(e) {
        var t = function() {
            if (t.called) throw new Error(t.onceError);
            return (t.called = !0), (t.value = e.apply(this, arguments));
          },
          r = e.name || "Function wrapped with `once`";
        return (
          (t.onceError = r + " shouldn't be called more than once"),
          (t.called = !1),
          t
        );
      }
      (e.exports = n(i)),
        (e.exports.strict = n(s)),
        (i.proto = i(function() {
          Object.defineProperty(Function.prototype, "once", {
            value: function() {
              return i(this);
            },
            configurable: !0
          }),
            Object.defineProperty(Function.prototype, "onceStrict", {
              value: function() {
                return s(this);
              },
              configurable: !0
            });
        }));
    },
    function(e, t, r) {
      "use strict";
      t.__esModule = !0;
      var n = [
        "description",
        "fileName",
        "lineNumber",
        "endLineNumber",
        "message",
        "name",
        "number",
        "stack"
      ];
      function i(e, t) {
        var r = t && t.loc,
          s = void 0,
          o = void 0,
          a = void 0,
          p = void 0;
        r &&
          ((s = r.start.line),
          (o = r.end.line),
          (a = r.start.column),
          (p = r.end.column),
          (e += " - " + s + ":" + a));
        for (
          var u = Error.prototype.constructor.call(this, e), c = 0;
          c < n.length;
          c++
        )
          this[n[c]] = u[n[c]];
        Error.captureStackTrace && Error.captureStackTrace(this, i);
        try {
          r &&
            ((this.lineNumber = s),
            (this.endLineNumber = o),
            Object.defineProperty
              ? (Object.defineProperty(this, "column", {
                  value: a,
                  enumerable: !0
                }),
                Object.defineProperty(this, "endColumn", {
                  value: p,
                  enumerable: !0
                }))
              : ((this.column = a), (this.endColumn = p)));
        } catch (e) {}
      }
      (i.prototype = new Error()), (t.default = i), (e.exports = t.default);
    },
    function(e, t) {
      e.exports = function(e, t, r) {
        return (
          t in e
            ? Object.defineProperty(e, t, {
                value: r,
                enumerable: !0,
                configurable: !0,
                writable: !0
              })
            : (e[t] = r),
          e
        );
      };
    },
    function(e, t, r) {
      e.exports = r(36).default;
    },
    function(e, t) {
      e.exports = function(e) {
        if (r[e]) return;
        console.warn("DEPRECATED (@octokit/rest): " + e), (r[e] = 1);
      };
      const r = {};
    },
    function(e, t) {
      e.exports = function(e) {
        e = e.link || e.headers.link || "";
        const t = {};
        return (
          e.replace(/<([^>]*)>;\s*rel="([\w]*)"/g, (e, r, n) => {
            t[n] = r;
          }),
          t
        );
      };
    },
    function(e, t, r) {
      e.exports = function(e, t, r, a) {
        n(
          `octokit.get${r.charAt(0).toUpperCase() +
            r.slice(
              1
            )}Page() – You can use octokit.paginate or async iterators instead: https://github.com/octokit/rest.js#pagination.`
        );
        const p = i(t)[r];
        if (!p) {
          const e = new s(`No ${r} page found`, 404);
          return Promise.reject(e);
        }
        const u = { url: p, headers: o(t, a) };
        return e.request(u);
      };
      const n = r(12),
        i = r(13),
        s = r(87);
      function o(e, t) {
        const r = e.headers && e.headers["x-github-media-type"];
        return (
          !r ||
            (t && t.accept) ||
            ((t = t || {}).accept =
              "application/vnd." +
              r.replace("; param=", ".").replace("; format=", "+")),
          t
        );
      }
    },
    function(e, t, r) {
      var n = r(51);
      function i(t, r, s) {
        return (
          "undefined" != typeof Reflect && Reflect.get
            ? (e.exports = i = Reflect.get)
            : (e.exports = i = function(e, t, r) {
                var i = n(e, t);
                if (i) {
                  var s = Object.getOwnPropertyDescriptor(i, t);
                  return s.get ? s.get.call(r) : s.value;
                }
              }),
          i(t, r, s || t)
        );
      }
      e.exports = i;
    },
    function(e, t, r) {
      var n = r(52);
      e.exports = function(e, t) {
        if ("function" != typeof t && null !== t)
          throw new TypeError(
            "Super expression must either be null or a function"
          );
        (e.prototype = Object.create(t && t.prototype, {
          constructor: { value: e, writable: !0, configurable: !0 }
        })),
          t && n(e, t);
      };
    },
    function(e, t, r) {
      var n = r(53),
        i = r(54);
      e.exports = function(e, t) {
        return !t || ("object" !== n(t) && "function" != typeof t) ? i(e) : t;
      };
    },
    function(e, t, r) {
      "use strict";
      r.r(t),
        r.d(t, "RequestError", function() {
          return o;
        });
      var n = r(4),
        i = r(8);
      const s = r.n(i)()(e => console.warn(e));
      class o extends Error {
        constructor(e, t, r) {
          super(e),
            Error.captureStackTrace &&
              Error.captureStackTrace(this, this.constructor),
            (this.name = "HttpError"),
            (this.status = t),
            Object.defineProperty(this, "code", {
              get: () => (
                s(
                  new n.Deprecation(
                    "[@octokit/request-error] `error.code` is deprecated, use `error.status`."
                  )
                ),
                t
              )
            }),
            (this.headers = r.headers || {});
          const i = Object.assign({}, r.request);
          r.request.headers.authorization &&
            (i.headers = Object.assign({}, r.request.headers, {
              authorization: r.request.headers.authorization.replace(
                / .*$/,
                " [REDACTED]"
              )
            })),
            (i.url = i.url
              .replace(/\bclient_secret=\w+/g, "client_secret=[REDACTED]")
              .replace(/\baccess_token=\w+/g, "access_token=[REDACTED]")),
            (this.request = i);
        }
      }
    },
    function(e, t, r) {
      (function(t, r, n) {
        e.exports = (function e(t, r, n) {
          function i(o, a) {
            if (!r[o]) {
              if (!t[o]) {
                if (s) return s(o, !0);
                var p = new Error("Cannot find module '" + o + "'");
                throw ((p.code = "MODULE_NOT_FOUND"), p);
              }
              var u = (r[o] = { exports: {} });
              t[o][0].call(
                u.exports,
                function(e) {
                  return i(t[o][1][e] || e);
                },
                u,
                u.exports,
                e,
                t,
                r,
                n
              );
            }
            return r[o].exports;
          }
          for (var s = !1, o = 0; o < n.length; o++) i(n[o]);
          return i;
        })(
          {
            1: [
              function(e, t, r) {
                "use strict";
                var n = e("./utils"),
                  i = e("./support"),
                  s =
                    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
                (r.encode = function(e) {
                  for (
                    var t,
                      r,
                      i,
                      o,
                      a,
                      p,
                      u,
                      c = [],
                      d = 0,
                      l = e.length,
                      h = l,
                      m = "string" !== n.getTypeOf(e);
                    d < e.length;

                  )
                    (h = l - d),
                      (i = m
                        ? ((t = e[d++]),
                          (r = d < l ? e[d++] : 0),
                          d < l ? e[d++] : 0)
                        : ((t = e.charCodeAt(d++)),
                          (r = d < l ? e.charCodeAt(d++) : 0),
                          d < l ? e.charCodeAt(d++) : 0)),
                      (o = t >> 2),
                      (a = ((3 & t) << 4) | (r >> 4)),
                      (p = 1 < h ? ((15 & r) << 2) | (i >> 6) : 64),
                      (u = 2 < h ? 63 & i : 64),
                      c.push(
                        s.charAt(o) + s.charAt(a) + s.charAt(p) + s.charAt(u)
                      );
                  return c.join("");
                }),
                  (r.decode = function(e) {
                    var t,
                      r,
                      n,
                      o,
                      a,
                      p,
                      u = 0,
                      c = 0,
                      d = "data:";
                    if (e.substr(0, d.length) === d)
                      throw new Error(
                        "Invalid base64 input, it looks like a data url."
                      );
                    var l,
                      h =
                        (3 *
                          (e = e.replace(/[^A-Za-z0-9\+\/\=]/g, "")).length) /
                        4;
                    if (
                      (e.charAt(e.length - 1) === s.charAt(64) && h--,
                      e.charAt(e.length - 2) === s.charAt(64) && h--,
                      h % 1 != 0)
                    )
                      throw new Error(
                        "Invalid base64 input, bad content length."
                      );
                    for (
                      l = i.uint8array
                        ? new Uint8Array(0 | h)
                        : new Array(0 | h);
                      u < e.length;

                    )
                      (t =
                        (s.indexOf(e.charAt(u++)) << 2) |
                        ((o = s.indexOf(e.charAt(u++))) >> 4)),
                        (r =
                          ((15 & o) << 4) |
                          ((a = s.indexOf(e.charAt(u++))) >> 2)),
                        (n = ((3 & a) << 6) | (p = s.indexOf(e.charAt(u++)))),
                        (l[c++] = t),
                        64 !== a && (l[c++] = r),
                        64 !== p && (l[c++] = n);
                    return l;
                  });
              },
              { "./support": 30, "./utils": 32 }
            ],
            2: [
              function(e, t, r) {
                "use strict";
                var n = e("./external"),
                  i = e("./stream/DataWorker"),
                  s = e("./stream/DataLengthProbe"),
                  o = e("./stream/Crc32Probe");
                function a(e, t, r, n, i) {
                  (this.compressedSize = e),
                    (this.uncompressedSize = t),
                    (this.crc32 = r),
                    (this.compression = n),
                    (this.compressedContent = i);
                }
                (s = e("./stream/DataLengthProbe")),
                  (a.prototype = {
                    getContentWorker: function() {
                      var e = new i(n.Promise.resolve(this.compressedContent))
                          .pipe(this.compression.uncompressWorker())
                          .pipe(new s("data_length")),
                        t = this;
                      return (
                        e.on("end", function() {
                          if (
                            this.streamInfo.data_length !== t.uncompressedSize
                          )
                            throw new Error(
                              "Bug : uncompressed data size mismatch"
                            );
                        }),
                        e
                      );
                    },
                    getCompressedWorker: function() {
                      return new i(n.Promise.resolve(this.compressedContent))
                        .withStreamInfo("compressedSize", this.compressedSize)
                        .withStreamInfo(
                          "uncompressedSize",
                          this.uncompressedSize
                        )
                        .withStreamInfo("crc32", this.crc32)
                        .withStreamInfo("compression", this.compression);
                    }
                  }),
                  (a.createWorkerFrom = function(e, t, r) {
                    return e
                      .pipe(new o())
                      .pipe(new s("uncompressedSize"))
                      .pipe(t.compressWorker(r))
                      .pipe(new s("compressedSize"))
                      .withStreamInfo("compression", t);
                  }),
                  (t.exports = a);
              },
              {
                "./external": 6,
                "./stream/Crc32Probe": 25,
                "./stream/DataLengthProbe": 26,
                "./stream/DataWorker": 27
              }
            ],
            3: [
              function(e, t, r) {
                "use strict";
                var n = e("./stream/GenericWorker");
                (r.STORE = {
                  magic: "\0\0",
                  compressWorker: function(e) {
                    return new n("STORE compression");
                  },
                  uncompressWorker: function() {
                    return new n("STORE decompression");
                  }
                }),
                  (r.DEFLATE = e("./flate"));
              },
              { "./flate": 7, "./stream/GenericWorker": 28 }
            ],
            4: [
              function(e, t, r) {
                "use strict";
                var n = e("./utils"),
                  i = (function() {
                    for (var e, t = [], r = 0; r < 256; r++) {
                      e = r;
                      for (var n = 0; n < 8; n++)
                        e = 1 & e ? 3988292384 ^ (e >>> 1) : e >>> 1;
                      t[r] = e;
                    }
                    return t;
                  })();
                t.exports = function(e, t) {
                  return void 0 !== e && e.length
                    ? "string" !== n.getTypeOf(e)
                      ? (function(e, t, r, n) {
                          var s = i,
                            o = 0 + r;
                          e ^= -1;
                          for (var a = 0; a < o; a++)
                            e = (e >>> 8) ^ s[255 & (e ^ t[a])];
                          return -1 ^ e;
                        })(0 | t, e, e.length)
                      : (function(e, t, r, n) {
                          var s = i,
                            o = 0 + r;
                          e ^= -1;
                          for (var a = 0; a < o; a++)
                            e = (e >>> 8) ^ s[255 & (e ^ t.charCodeAt(a))];
                          return -1 ^ e;
                        })(0 | t, e, e.length)
                    : 0;
                };
              },
              { "./utils": 32 }
            ],
            5: [
              function(e, t, r) {
                "use strict";
                (r.base64 = !1),
                  (r.binary = !1),
                  (r.dir = !1),
                  (r.createFolders = !0),
                  (r.date = null),
                  (r.compression = null),
                  (r.compressionOptions = null),
                  (r.comment = null),
                  (r.unixPermissions = null),
                  (r.dosPermissions = null);
              },
              {}
            ],
            6: [
              function(e, t, r) {
                "use strict";
                var n;
                (n = "undefined" != typeof Promise ? Promise : e("lie")),
                  (t.exports = { Promise: n });
              },
              { lie: 37 }
            ],
            7: [
              function(e, t, r) {
                "use strict";
                var n =
                    "undefined" != typeof Uint8Array &&
                    "undefined" != typeof Uint16Array &&
                    "undefined" != typeof Uint32Array,
                  i = e("pako"),
                  s = e("./utils"),
                  o = e("./stream/GenericWorker"),
                  a = n ? "uint8array" : "array";
                function p(e, t) {
                  o.call(this, "FlateWorker/" + e),
                    (this._pako = null),
                    (this._pakoAction = e),
                    (this._pakoOptions = t),
                    (this.meta = {});
                }
                (r.magic = "\b\0"),
                  s.inherits(p, o),
                  (p.prototype.processChunk = function(e) {
                    (this.meta = e.meta),
                      null === this._pako && this._createPako(),
                      this._pako.push(s.transformTo(a, e.data), !1);
                  }),
                  (p.prototype.flush = function() {
                    o.prototype.flush.call(this),
                      null === this._pako && this._createPako(),
                      this._pako.push([], !0);
                  }),
                  (p.prototype.cleanUp = function() {
                    o.prototype.cleanUp.call(this), (this._pako = null);
                  }),
                  (p.prototype._createPako = function() {
                    this._pako = new i[this._pakoAction]({
                      raw: !0,
                      level: this._pakoOptions.level || -1
                    });
                    var e = this;
                    this._pako.onData = function(t) {
                      e.push({ data: t, meta: e.meta });
                    };
                  }),
                  (r.compressWorker = function(e) {
                    return new p("Deflate", e);
                  }),
                  (r.uncompressWorker = function() {
                    return new p("Inflate", {});
                  });
              },
              { "./stream/GenericWorker": 28, "./utils": 32, pako: 38 }
            ],
            8: [
              function(e, t, r) {
                "use strict";
                function n(e, t) {
                  var r,
                    n = "";
                  for (r = 0; r < t; r++)
                    (n += String.fromCharCode(255 & e)), (e >>>= 8);
                  return n;
                }
                function i(e, t, r, i, o, c) {
                  var d,
                    l,
                    h = e.file,
                    m = e.compression,
                    g = c !== a.utf8encode,
                    y = s.transformTo("string", c(h.name)),
                    f = s.transformTo("string", a.utf8encode(h.name)),
                    _ = h.comment,
                    b = s.transformTo("string", c(_)),
                    w = s.transformTo("string", a.utf8encode(_)),
                    v = f.length !== h.name.length,
                    q = w.length !== _.length,
                    k = "",
                    E = "",
                    T = "",
                    P = h.dir,
                    x = h.date,
                    A = { crc32: 0, compressedSize: 0, uncompressedSize: 0 };
                  (t && !r) ||
                    ((A.crc32 = e.crc32),
                    (A.compressedSize = e.compressedSize),
                    (A.uncompressedSize = e.uncompressedSize));
                  var j = 0;
                  t && (j |= 8), g || (!v && !q) || (j |= 2048);
                  var O = 0,
                    S = 0;
                  P && (O |= 16),
                    "UNIX" === o
                      ? ((S = 798),
                        (O |= (function(e, t) {
                          var r = e;
                          return (
                            e || (r = t ? 16893 : 33204), (65535 & r) << 16
                          );
                        })(h.unixPermissions, P)))
                      : ((S = 20),
                        (O |= (function(e) {
                          return 63 & (e || 0);
                        })(h.dosPermissions))),
                    (d = x.getUTCHours()),
                    (d <<= 6),
                    (d |= x.getUTCMinutes()),
                    (d <<= 5),
                    (d |= x.getUTCSeconds() / 2),
                    (l = x.getUTCFullYear() - 1980),
                    (l <<= 4),
                    (l |= x.getUTCMonth() + 1),
                    (l <<= 5),
                    (l |= x.getUTCDate()),
                    v &&
                      ((E = n(1, 1) + n(p(y), 4) + f),
                      (k += "up" + n(E.length, 2) + E)),
                    q &&
                      ((T = n(1, 1) + n(p(b), 4) + w),
                      (k += "uc" + n(T.length, 2) + T));
                  var C = "";
                  return (
                    (C += "\n\0"),
                    (C += n(j, 2)),
                    (C += m.magic),
                    (C += n(d, 2)),
                    (C += n(l, 2)),
                    (C += n(A.crc32, 4)),
                    (C += n(A.compressedSize, 4)),
                    (C += n(A.uncompressedSize, 4)),
                    (C += n(y.length, 2)),
                    (C += n(k.length, 2)),
                    {
                      fileRecord: u.LOCAL_FILE_HEADER + C + y + k,
                      dirRecord:
                        u.CENTRAL_FILE_HEADER +
                        n(S, 2) +
                        C +
                        n(b.length, 2) +
                        "\0\0\0\0" +
                        n(O, 4) +
                        n(i, 4) +
                        y +
                        k +
                        b
                    }
                  );
                }
                var s = e("../utils"),
                  o = e("../stream/GenericWorker"),
                  a = e("../utf8"),
                  p = e("../crc32"),
                  u = e("../signature");
                function c(e, t, r, n) {
                  o.call(this, "ZipFileWorker"),
                    (this.bytesWritten = 0),
                    (this.zipComment = t),
                    (this.zipPlatform = r),
                    (this.encodeFileName = n),
                    (this.streamFiles = e),
                    (this.accumulate = !1),
                    (this.contentBuffer = []),
                    (this.dirRecords = []),
                    (this.currentSourceOffset = 0),
                    (this.entriesCount = 0),
                    (this.currentFile = null),
                    (this._sources = []);
                }
                s.inherits(c, o),
                  (c.prototype.push = function(e) {
                    var t = e.meta.percent || 0,
                      r = this.entriesCount,
                      n = this._sources.length;
                    this.accumulate
                      ? this.contentBuffer.push(e)
                      : ((this.bytesWritten += e.data.length),
                        o.prototype.push.call(this, {
                          data: e.data,
                          meta: {
                            currentFile: this.currentFile,
                            percent: r ? (t + 100 * (r - n - 1)) / r : 100
                          }
                        }));
                  }),
                  (c.prototype.openedSource = function(e) {
                    (this.currentSourceOffset = this.bytesWritten),
                      (this.currentFile = e.file.name);
                    var t = this.streamFiles && !e.file.dir;
                    if (t) {
                      var r = i(
                        e,
                        t,
                        !1,
                        this.currentSourceOffset,
                        this.zipPlatform,
                        this.encodeFileName
                      );
                      this.push({ data: r.fileRecord, meta: { percent: 0 } });
                    } else this.accumulate = !0;
                  }),
                  (c.prototype.closedSource = function(e) {
                    this.accumulate = !1;
                    var t = this.streamFiles && !e.file.dir,
                      r = i(
                        e,
                        t,
                        !0,
                        this.currentSourceOffset,
                        this.zipPlatform,
                        this.encodeFileName
                      );
                    if ((this.dirRecords.push(r.dirRecord), t))
                      this.push({
                        data: (function(e) {
                          return (
                            u.DATA_DESCRIPTOR +
                            n(e.crc32, 4) +
                            n(e.compressedSize, 4) +
                            n(e.uncompressedSize, 4)
                          );
                        })(e),
                        meta: { percent: 100 }
                      });
                    else
                      for (
                        this.push({ data: r.fileRecord, meta: { percent: 0 } });
                        this.contentBuffer.length;

                      )
                        this.push(this.contentBuffer.shift());
                    this.currentFile = null;
                  }),
                  (c.prototype.flush = function() {
                    for (
                      var e = this.bytesWritten, t = 0;
                      t < this.dirRecords.length;
                      t++
                    )
                      this.push({
                        data: this.dirRecords[t],
                        meta: { percent: 100 }
                      });
                    var r = this.bytesWritten - e,
                      i = (function(e, t, r, i, o) {
                        var a = s.transformTo("string", o(i));
                        return (
                          u.CENTRAL_DIRECTORY_END +
                          "\0\0\0\0" +
                          n(e, 2) +
                          n(e, 2) +
                          n(t, 4) +
                          n(r, 4) +
                          n(a.length, 2) +
                          a
                        );
                      })(
                        this.dirRecords.length,
                        r,
                        e,
                        this.zipComment,
                        this.encodeFileName
                      );
                    this.push({ data: i, meta: { percent: 100 } });
                  }),
                  (c.prototype.prepareNextSource = function() {
                    (this.previous = this._sources.shift()),
                      this.openedSource(this.previous.streamInfo),
                      this.isPaused
                        ? this.previous.pause()
                        : this.previous.resume();
                  }),
                  (c.prototype.registerPrevious = function(e) {
                    this._sources.push(e);
                    var t = this;
                    return (
                      e.on("data", function(e) {
                        t.processChunk(e);
                      }),
                      e.on("end", function() {
                        t.closedSource(t.previous.streamInfo),
                          t._sources.length ? t.prepareNextSource() : t.end();
                      }),
                      e.on("error", function(e) {
                        t.error(e);
                      }),
                      this
                    );
                  }),
                  (c.prototype.resume = function() {
                    return (
                      !!o.prototype.resume.call(this) &&
                      (!this.previous && this._sources.length
                        ? (this.prepareNextSource(), !0)
                        : this.previous ||
                          this._sources.length ||
                          this.generatedError
                        ? void 0
                        : (this.end(), !0))
                    );
                  }),
                  (c.prototype.error = function(e) {
                    var t = this._sources;
                    if (!o.prototype.error.call(this, e)) return !1;
                    for (var r = 0; r < t.length; r++)
                      try {
                        t[r].error(e);
                      } catch (e) {}
                    return !0;
                  }),
                  (c.prototype.lock = function() {
                    o.prototype.lock.call(this);
                    for (var e = this._sources, t = 0; t < e.length; t++)
                      e[t].lock();
                  }),
                  (t.exports = c);
              },
              {
                "../crc32": 4,
                "../signature": 23,
                "../stream/GenericWorker": 28,
                "../utf8": 31,
                "../utils": 32
              }
            ],
            9: [
              function(e, t, r) {
                "use strict";
                var n = e("../compressions"),
                  i = e("./ZipFileWorker");
                r.generateWorker = function(e, t, r) {
                  var s = new i(t.streamFiles, r, t.platform, t.encodeFileName),
                    o = 0;
                  try {
                    e.forEach(function(e, r) {
                      o++;
                      var i = (function(e, t) {
                          var r = e || t,
                            i = n[r];
                          if (!i)
                            throw new Error(
                              r + " is not a valid compression method !"
                            );
                          return i;
                        })(r.options.compression, t.compression),
                        a =
                          r.options.compressionOptions ||
                          t.compressionOptions ||
                          {},
                        p = r.dir,
                        u = r.date;
                      r._compressWorker(i, a)
                        .withStreamInfo("file", {
                          name: e,
                          dir: p,
                          date: u,
                          comment: r.comment || "",
                          unixPermissions: r.unixPermissions,
                          dosPermissions: r.dosPermissions
                        })
                        .pipe(s);
                    }),
                      (s.entriesCount = o);
                  } catch (e) {
                    s.error(e);
                  }
                  return s;
                };
              },
              { "../compressions": 3, "./ZipFileWorker": 8 }
            ],
            10: [
              function(e, t, r) {
                "use strict";
                function n() {
                  if (!(this instanceof n)) return new n();
                  if (arguments.length)
                    throw new Error(
                      "The constructor with parameters has been removed in JSZip 3.0, please check the upgrade guide."
                    );
                  (this.files = {}),
                    (this.comment = null),
                    (this.root = ""),
                    (this.clone = function() {
                      var e = new n();
                      for (var t in this)
                        "function" != typeof this[t] && (e[t] = this[t]);
                      return e;
                    });
                }
                ((n.prototype = e("./object")).loadAsync = e("./load")),
                  (n.support = e("./support")),
                  (n.defaults = e("./defaults")),
                  (n.version = "3.2.0"),
                  (n.loadAsync = function(e, t) {
                    return new n().loadAsync(e, t);
                  }),
                  (n.external = e("./external")),
                  (t.exports = n);
              },
              {
                "./defaults": 5,
                "./external": 6,
                "./load": 11,
                "./object": 15,
                "./support": 30
              }
            ],
            11: [
              function(e, t, r) {
                "use strict";
                var n = e("./utils"),
                  i = e("./external"),
                  s = e("./utf8"),
                  o = ((n = e("./utils")), e("./zipEntries")),
                  a = e("./stream/Crc32Probe"),
                  p = e("./nodejsUtils");
                function u(e) {
                  return new i.Promise(function(t, r) {
                    var n = e.decompressed.getContentWorker().pipe(new a());
                    n.on("error", function(e) {
                      r(e);
                    })
                      .on("end", function() {
                        n.streamInfo.crc32 !== e.decompressed.crc32
                          ? r(new Error("Corrupted zip : CRC32 mismatch"))
                          : t();
                      })
                      .resume();
                  });
                }
                t.exports = function(e, t) {
                  var r = this;
                  return (
                    (t = n.extend(t || {}, {
                      base64: !1,
                      checkCRC32: !1,
                      optimizedBinaryString: !1,
                      createFolders: !1,
                      decodeFileName: s.utf8decode
                    })),
                    p.isNode && p.isStream(e)
                      ? i.Promise.reject(
                          new Error(
                            "JSZip can't accept a stream when loading a zip file."
                          )
                        )
                      : n
                          .prepareContent(
                            "the loaded zip file",
                            e,
                            !0,
                            t.optimizedBinaryString,
                            t.base64
                          )
                          .then(function(e) {
                            var r = new o(t);
                            return r.load(e), r;
                          })
                          .then(function(e) {
                            var r = [i.Promise.resolve(e)],
                              n = e.files;
                            if (t.checkCRC32)
                              for (var s = 0; s < n.length; s++)
                                r.push(u(n[s]));
                            return i.Promise.all(r);
                          })
                          .then(function(e) {
                            for (
                              var n = e.shift(), i = n.files, s = 0;
                              s < i.length;
                              s++
                            ) {
                              var o = i[s];
                              r.file(o.fileNameStr, o.decompressed, {
                                binary: !0,
                                optimizedBinaryString: !0,
                                date: o.date,
                                dir: o.dir,
                                comment: o.fileCommentStr.length
                                  ? o.fileCommentStr
                                  : null,
                                unixPermissions: o.unixPermissions,
                                dosPermissions: o.dosPermissions,
                                createFolders: t.createFolders
                              });
                            }
                            return (
                              n.zipComment.length && (r.comment = n.zipComment),
                              r
                            );
                          })
                  );
                };
              },
              {
                "./external": 6,
                "./nodejsUtils": 14,
                "./stream/Crc32Probe": 25,
                "./utf8": 31,
                "./utils": 32,
                "./zipEntries": 33
              }
            ],
            12: [
              function(e, t, r) {
                "use strict";
                var n = e("../utils"),
                  i = e("../stream/GenericWorker");
                function s(e, t) {
                  i.call(this, "Nodejs stream input adapter for " + e),
                    (this._upstreamEnded = !1),
                    this._bindStream(t);
                }
                n.inherits(s, i),
                  (s.prototype._bindStream = function(e) {
                    var t = this;
                    (this._stream = e).pause(),
                      e
                        .on("data", function(e) {
                          t.push({ data: e, meta: { percent: 0 } });
                        })
                        .on("error", function(e) {
                          t.isPaused ? (this.generatedError = e) : t.error(e);
                        })
                        .on("end", function() {
                          t.isPaused ? (t._upstreamEnded = !0) : t.end();
                        });
                  }),
                  (s.prototype.pause = function() {
                    return (
                      !!i.prototype.pause.call(this) &&
                      (this._stream.pause(), !0)
                    );
                  }),
                  (s.prototype.resume = function() {
                    return (
                      !!i.prototype.resume.call(this) &&
                      (this._upstreamEnded ? this.end() : this._stream.resume(),
                      !0)
                    );
                  }),
                  (t.exports = s);
              },
              { "../stream/GenericWorker": 28, "../utils": 32 }
            ],
            13: [
              function(e, t, r) {
                "use strict";
                var n = e("readable-stream").Readable;
                function i(e, t, r) {
                  n.call(this, t), (this._helper = e);
                  var i = this;
                  e.on("data", function(e, t) {
                    i.push(e) || i._helper.pause(), r && r(t);
                  })
                    .on("error", function(e) {
                      i.emit("error", e);
                    })
                    .on("end", function() {
                      i.push(null);
                    });
                }
                e("../utils").inherits(i, n),
                  (i.prototype._read = function() {
                    this._helper.resume();
                  }),
                  (t.exports = i);
              },
              { "../utils": 32, "readable-stream": 16 }
            ],
            14: [
              function(e, r, n) {
                "use strict";
                r.exports = {
                  isNode: void 0 !== t,
                  newBufferFrom: function(e, r) {
                    if (t.from && t.from !== Uint8Array.from)
                      return t.from(e, r);
                    if ("number" == typeof e)
                      throw new Error(
                        'The "data" argument must not be a number'
                      );
                    return new t(e, r);
                  },
                  allocBuffer: function(e) {
                    if (t.alloc) return t.alloc(e);
                    var r = new t(e);
                    return r.fill(0), r;
                  },
                  isBuffer: function(e) {
                    return t.isBuffer(e);
                  },
                  isStream: function(e) {
                    return (
                      e &&
                      "function" == typeof e.on &&
                      "function" == typeof e.pause &&
                      "function" == typeof e.resume
                    );
                  }
                };
              },
              {}
            ],
            15: [
              function(e, t, r) {
                "use strict";
                function n(e, t, r) {
                  var n,
                    i = s.getTypeOf(t),
                    a = s.extend(r || {}, p);
                  (a.date = a.date || new Date()),
                    null !== a.compression &&
                      (a.compression = a.compression.toUpperCase()),
                    "string" == typeof a.unixPermissions &&
                      (a.unixPermissions = parseInt(a.unixPermissions, 8)),
                    a.unixPermissions &&
                      16384 & a.unixPermissions &&
                      (a.dir = !0),
                    a.dosPermissions && 16 & a.dosPermissions && (a.dir = !0),
                    a.dir && (e = g(e)),
                    a.createFolders && (n = m(e)) && y.call(this, n, !0);
                  var d,
                    f = "string" === i && !1 === a.binary && !1 === a.base64;
                  (r && void 0 !== r.binary) || (a.binary = !f),
                    ((t instanceof u && 0 === t.uncompressedSize) ||
                      a.dir ||
                      !t ||
                      0 === t.length) &&
                      ((a.base64 = !1),
                      (a.binary = !0),
                      (t = ""),
                      (a.compression = "STORE"),
                      (i = "string")),
                    (d =
                      t instanceof u || t instanceof o
                        ? t
                        : l.isNode && l.isStream(t)
                        ? new h(e, t)
                        : s.prepareContent(
                            e,
                            t,
                            a.binary,
                            a.optimizedBinaryString,
                            a.base64
                          ));
                  var _ = new c(e, d, a);
                  this.files[e] = _;
                }
                var i = e("./utf8"),
                  s = e("./utils"),
                  o = e("./stream/GenericWorker"),
                  a = e("./stream/StreamHelper"),
                  p = e("./defaults"),
                  u = e("./compressedObject"),
                  c = e("./zipObject"),
                  d = e("./generate"),
                  l = e("./nodejsUtils"),
                  h = e("./nodejs/NodejsStreamInputAdapter"),
                  m = function(e) {
                    "/" === e.slice(-1) && (e = e.substring(0, e.length - 1));
                    var t = e.lastIndexOf("/");
                    return 0 < t ? e.substring(0, t) : "";
                  },
                  g = function(e) {
                    return "/" !== e.slice(-1) && (e += "/"), e;
                  },
                  y = function(e, t) {
                    return (
                      (t = void 0 !== t ? t : p.createFolders),
                      (e = g(e)),
                      this.files[e] ||
                        n.call(this, e, null, { dir: !0, createFolders: t }),
                      this.files[e]
                    );
                  };
                function f(e) {
                  return (
                    "[object RegExp]" === Object.prototype.toString.call(e)
                  );
                }
                var _ = {
                  load: function() {
                    throw new Error(
                      "This method has been removed in JSZip 3.0, please check the upgrade guide."
                    );
                  },
                  forEach: function(e) {
                    var t, r, n;
                    for (t in this.files)
                      this.files.hasOwnProperty(t) &&
                        ((n = this.files[t]),
                        (r = t.slice(this.root.length, t.length)) &&
                          t.slice(0, this.root.length) === this.root &&
                          e(r, n));
                  },
                  filter: function(e) {
                    var t = [];
                    return (
                      this.forEach(function(r, n) {
                        e(r, n) && t.push(n);
                      }),
                      t
                    );
                  },
                  file: function(e, t, r) {
                    if (1 !== arguments.length)
                      return (e = this.root + e), n.call(this, e, t, r), this;
                    if (f(e)) {
                      var i = e;
                      return this.filter(function(e, t) {
                        return !t.dir && i.test(e);
                      });
                    }
                    var s = this.files[this.root + e];
                    return s && !s.dir ? s : null;
                  },
                  folder: function(e) {
                    if (!e) return this;
                    if (f(e))
                      return this.filter(function(t, r) {
                        return r.dir && e.test(t);
                      });
                    var t = this.root + e,
                      r = y.call(this, t),
                      n = this.clone();
                    return (n.root = r.name), n;
                  },
                  remove: function(e) {
                    e = this.root + e;
                    var t = this.files[e];
                    if (
                      (t ||
                        ("/" !== e.slice(-1) && (e += "/"),
                        (t = this.files[e])),
                      t && !t.dir)
                    )
                      delete this.files[e];
                    else
                      for (
                        var r = this.filter(function(t, r) {
                            return r.name.slice(0, e.length) === e;
                          }),
                          n = 0;
                        n < r.length;
                        n++
                      )
                        delete this.files[r[n].name];
                    return this;
                  },
                  generate: function(e) {
                    throw new Error(
                      "This method has been removed in JSZip 3.0, please check the upgrade guide."
                    );
                  },
                  generateInternalStream: function(e) {
                    var t,
                      r = {};
                    try {
                      if (
                        (((r = s.extend(e || {}, {
                          streamFiles: !1,
                          compression: "STORE",
                          compressionOptions: null,
                          type: "",
                          platform: "DOS",
                          comment: null,
                          mimeType: "application/zip",
                          encodeFileName: i.utf8encode
                        })).type = r.type.toLowerCase()),
                        (r.compression = r.compression.toUpperCase()),
                        "binarystring" === r.type && (r.type = "string"),
                        !r.type)
                      )
                        throw new Error("No output type specified.");
                      s.checkSupport(r.type),
                        ("darwin" !== r.platform &&
                          "freebsd" !== r.platform &&
                          "linux" !== r.platform &&
                          "sunos" !== r.platform) ||
                          (r.platform = "UNIX"),
                        "win32" === r.platform && (r.platform = "DOS");
                      var n = r.comment || this.comment || "";
                      t = d.generateWorker(this, r, n);
                    } catch (e) {
                      (t = new o("error")).error(e);
                    }
                    return new a(t, r.type || "string", r.mimeType);
                  },
                  generateAsync: function(e, t) {
                    return this.generateInternalStream(e).accumulate(t);
                  },
                  generateNodeStream: function(e, t) {
                    return (
                      (e = e || {}).type || (e.type = "nodebuffer"),
                      this.generateInternalStream(e).toNodejsStream(t)
                    );
                  }
                };
                t.exports = _;
              },
              {
                "./compressedObject": 2,
                "./defaults": 5,
                "./generate": 9,
                "./nodejs/NodejsStreamInputAdapter": 12,
                "./nodejsUtils": 14,
                "./stream/GenericWorker": 28,
                "./stream/StreamHelper": 29,
                "./utf8": 31,
                "./utils": 32,
                "./zipObject": 35
              }
            ],
            16: [
              function(e, t, r) {
                t.exports = e("stream");
              },
              { stream: void 0 }
            ],
            17: [
              function(e, t, r) {
                "use strict";
                var n = e("./DataReader");
                function i(e) {
                  n.call(this, e);
                  for (var t = 0; t < this.data.length; t++) e[t] = 255 & e[t];
                }
                e("../utils").inherits(i, n),
                  (i.prototype.byteAt = function(e) {
                    return this.data[this.zero + e];
                  }),
                  (i.prototype.lastIndexOfSignature = function(e) {
                    for (
                      var t = e.charCodeAt(0),
                        r = e.charCodeAt(1),
                        n = e.charCodeAt(2),
                        i = e.charCodeAt(3),
                        s = this.length - 4;
                      0 <= s;
                      --s
                    )
                      if (
                        this.data[s] === t &&
                        this.data[s + 1] === r &&
                        this.data[s + 2] === n &&
                        this.data[s + 3] === i
                      )
                        return s - this.zero;
                    return -1;
                  }),
                  (i.prototype.readAndCheckSignature = function(e) {
                    var t = e.charCodeAt(0),
                      r = e.charCodeAt(1),
                      n = e.charCodeAt(2),
                      i = e.charCodeAt(3),
                      s = this.readData(4);
                    return t === s[0] && r === s[1] && n === s[2] && i === s[3];
                  }),
                  (i.prototype.readData = function(e) {
                    if ((this.checkOffset(e), 0 === e)) return [];
                    var t = this.data.slice(
                      this.zero + this.index,
                      this.zero + this.index + e
                    );
                    return (this.index += e), t;
                  }),
                  (t.exports = i);
              },
              { "../utils": 32, "./DataReader": 18 }
            ],
            18: [
              function(e, t, r) {
                "use strict";
                var n = e("../utils");
                function i(e) {
                  (this.data = e),
                    (this.length = e.length),
                    (this.index = 0),
                    (this.zero = 0);
                }
                (i.prototype = {
                  checkOffset: function(e) {
                    this.checkIndex(this.index + e);
                  },
                  checkIndex: function(e) {
                    if (this.length < this.zero + e || e < 0)
                      throw new Error(
                        "End of data reached (data length = " +
                          this.length +
                          ", asked index = " +
                          e +
                          "). Corrupted zip ?"
                      );
                  },
                  setIndex: function(e) {
                    this.checkIndex(e), (this.index = e);
                  },
                  skip: function(e) {
                    this.setIndex(this.index + e);
                  },
                  byteAt: function(e) {},
                  readInt: function(e) {
                    var t,
                      r = 0;
                    for (
                      this.checkOffset(e), t = this.index + e - 1;
                      t >= this.index;
                      t--
                    )
                      r = (r << 8) + this.byteAt(t);
                    return (this.index += e), r;
                  },
                  readString: function(e) {
                    return n.transformTo("string", this.readData(e));
                  },
                  readData: function(e) {},
                  lastIndexOfSignature: function(e) {},
                  readAndCheckSignature: function(e) {},
                  readDate: function() {
                    var e = this.readInt(4);
                    return new Date(
                      Date.UTC(
                        1980 + ((e >> 25) & 127),
                        ((e >> 21) & 15) - 1,
                        (e >> 16) & 31,
                        (e >> 11) & 31,
                        (e >> 5) & 63,
                        (31 & e) << 1
                      )
                    );
                  }
                }),
                  (t.exports = i);
              },
              { "../utils": 32 }
            ],
            19: [
              function(e, t, r) {
                "use strict";
                var n = e("./Uint8ArrayReader");
                function i(e) {
                  n.call(this, e);
                }
                e("../utils").inherits(i, n),
                  (i.prototype.readData = function(e) {
                    this.checkOffset(e);
                    var t = this.data.slice(
                      this.zero + this.index,
                      this.zero + this.index + e
                    );
                    return (this.index += e), t;
                  }),
                  (t.exports = i);
              },
              { "../utils": 32, "./Uint8ArrayReader": 21 }
            ],
            20: [
              function(e, t, r) {
                "use strict";
                var n = e("./DataReader");
                function i(e) {
                  n.call(this, e);
                }
                e("../utils").inherits(i, n),
                  (i.prototype.byteAt = function(e) {
                    return this.data.charCodeAt(this.zero + e);
                  }),
                  (i.prototype.lastIndexOfSignature = function(e) {
                    return this.data.lastIndexOf(e) - this.zero;
                  }),
                  (i.prototype.readAndCheckSignature = function(e) {
                    return e === this.readData(4);
                  }),
                  (i.prototype.readData = function(e) {
                    this.checkOffset(e);
                    var t = this.data.slice(
                      this.zero + this.index,
                      this.zero + this.index + e
                    );
                    return (this.index += e), t;
                  }),
                  (t.exports = i);
              },
              { "../utils": 32, "./DataReader": 18 }
            ],
            21: [
              function(e, t, r) {
                "use strict";
                var n = e("./ArrayReader");
                function i(e) {
                  n.call(this, e);
                }
                e("../utils").inherits(i, n),
                  (i.prototype.readData = function(e) {
                    if ((this.checkOffset(e), 0 === e))
                      return new Uint8Array(0);
                    var t = this.data.subarray(
                      this.zero + this.index,
                      this.zero + this.index + e
                    );
                    return (this.index += e), t;
                  }),
                  (t.exports = i);
              },
              { "../utils": 32, "./ArrayReader": 17 }
            ],
            22: [
              function(e, t, r) {
                "use strict";
                var n = e("../utils"),
                  i = e("../support"),
                  s = e("./ArrayReader"),
                  o = e("./StringReader"),
                  a = e("./NodeBufferReader"),
                  p = e("./Uint8ArrayReader");
                t.exports = function(e) {
                  var t = n.getTypeOf(e);
                  return (
                    n.checkSupport(t),
                    "string" !== t || i.uint8array
                      ? "nodebuffer" === t
                        ? new a(e)
                        : i.uint8array
                        ? new p(n.transformTo("uint8array", e))
                        : new s(n.transformTo("array", e))
                      : new o(e)
                  );
                };
              },
              {
                "../support": 30,
                "../utils": 32,
                "./ArrayReader": 17,
                "./NodeBufferReader": 19,
                "./StringReader": 20,
                "./Uint8ArrayReader": 21
              }
            ],
            23: [
              function(e, t, r) {
                "use strict";
                (r.LOCAL_FILE_HEADER = "PK"),
                  (r.CENTRAL_FILE_HEADER = "PK"),
                  (r.CENTRAL_DIRECTORY_END = "PK"),
                  (r.ZIP64_CENTRAL_DIRECTORY_LOCATOR = "PK"),
                  (r.ZIP64_CENTRAL_DIRECTORY_END = "PK"),
                  (r.DATA_DESCRIPTOR = "PK\b");
              },
              {}
            ],
            24: [
              function(e, t, r) {
                "use strict";
                var n = e("./GenericWorker"),
                  i = e("../utils");
                function s(e) {
                  n.call(this, "ConvertWorker to " + e), (this.destType = e);
                }
                i.inherits(s, n),
                  (s.prototype.processChunk = function(e) {
                    this.push({
                      data: i.transformTo(this.destType, e.data),
                      meta: e.meta
                    });
                  }),
                  (t.exports = s);
              },
              { "../utils": 32, "./GenericWorker": 28 }
            ],
            25: [
              function(e, t, r) {
                "use strict";
                var n = e("./GenericWorker"),
                  i = e("../crc32");
                function s() {
                  n.call(this, "Crc32Probe"), this.withStreamInfo("crc32", 0);
                }
                e("../utils").inherits(s, n),
                  (s.prototype.processChunk = function(e) {
                    (this.streamInfo.crc32 = i(
                      e.data,
                      this.streamInfo.crc32 || 0
                    )),
                      this.push(e);
                  }),
                  (t.exports = s);
              },
              { "../crc32": 4, "../utils": 32, "./GenericWorker": 28 }
            ],
            26: [
              function(e, t, r) {
                "use strict";
                var n = e("../utils"),
                  i = e("./GenericWorker");
                function s(e) {
                  i.call(this, "DataLengthProbe for " + e),
                    (this.propName = e),
                    this.withStreamInfo(e, 0);
                }
                n.inherits(s, i),
                  (s.prototype.processChunk = function(e) {
                    if (e) {
                      var t = this.streamInfo[this.propName] || 0;
                      this.streamInfo[this.propName] = t + e.data.length;
                    }
                    i.prototype.processChunk.call(this, e);
                  }),
                  (t.exports = s);
              },
              { "../utils": 32, "./GenericWorker": 28 }
            ],
            27: [
              function(e, t, r) {
                "use strict";
                var n = e("../utils"),
                  i = e("./GenericWorker");
                function s(e) {
                  i.call(this, "DataWorker");
                  var t = this;
                  (this.dataIsReady = !1),
                    (this.index = 0),
                    (this.max = 0),
                    (this.data = null),
                    (this.type = ""),
                    (this._tickScheduled = !1),
                    e.then(
                      function(e) {
                        (t.dataIsReady = !0),
                          (t.data = e),
                          (t.max = (e && e.length) || 0),
                          (t.type = n.getTypeOf(e)),
                          t.isPaused || t._tickAndRepeat();
                      },
                      function(e) {
                        t.error(e);
                      }
                    );
                }
                n.inherits(s, i),
                  (s.prototype.cleanUp = function() {
                    i.prototype.cleanUp.call(this), (this.data = null);
                  }),
                  (s.prototype.resume = function() {
                    return (
                      !!i.prototype.resume.call(this) &&
                      (!this._tickScheduled &&
                        this.dataIsReady &&
                        ((this._tickScheduled = !0),
                        n.delay(this._tickAndRepeat, [], this)),
                      !0)
                    );
                  }),
                  (s.prototype._tickAndRepeat = function() {
                    (this._tickScheduled = !1),
                      this.isPaused ||
                        this.isFinished ||
                        (this._tick(),
                        this.isFinished ||
                          (n.delay(this._tickAndRepeat, [], this),
                          (this._tickScheduled = !0)));
                  }),
                  (s.prototype._tick = function() {
                    if (this.isPaused || this.isFinished) return !1;
                    var e = null,
                      t = Math.min(this.max, this.index + 16384);
                    if (this.index >= this.max) return this.end();
                    switch (this.type) {
                      case "string":
                        e = this.data.substring(this.index, t);
                        break;
                      case "uint8array":
                        e = this.data.subarray(this.index, t);
                        break;
                      case "array":
                      case "nodebuffer":
                        e = this.data.slice(this.index, t);
                    }
                    return (
                      (this.index = t),
                      this.push({
                        data: e,
                        meta: {
                          percent: this.max ? (this.index / this.max) * 100 : 0
                        }
                      })
                    );
                  }),
                  (t.exports = s);
              },
              { "../utils": 32, "./GenericWorker": 28 }
            ],
            28: [
              function(e, t, r) {
                "use strict";
                function n(e) {
                  (this.name = e || "default"),
                    (this.streamInfo = {}),
                    (this.generatedError = null),
                    (this.extraStreamInfo = {}),
                    (this.isPaused = !0),
                    (this.isFinished = !1),
                    (this.isLocked = !1),
                    (this._listeners = { data: [], end: [], error: [] }),
                    (this.previous = null);
                }
                (n.prototype = {
                  push: function(e) {
                    this.emit("data", e);
                  },
                  end: function() {
                    if (this.isFinished) return !1;
                    this.flush();
                    try {
                      this.emit("end"), this.cleanUp(), (this.isFinished = !0);
                    } catch (e) {
                      this.emit("error", e);
                    }
                    return !0;
                  },
                  error: function(e) {
                    return (
                      !this.isFinished &&
                      (this.isPaused
                        ? (this.generatedError = e)
                        : ((this.isFinished = !0),
                          this.emit("error", e),
                          this.previous && this.previous.error(e),
                          this.cleanUp()),
                      !0)
                    );
                  },
                  on: function(e, t) {
                    return this._listeners[e].push(t), this;
                  },
                  cleanUp: function() {
                    (this.streamInfo = this.generatedError = this.extraStreamInfo = null),
                      (this._listeners = []);
                  },
                  emit: function(e, t) {
                    if (this._listeners[e])
                      for (var r = 0; r < this._listeners[e].length; r++)
                        this._listeners[e][r].call(this, t);
                  },
                  pipe: function(e) {
                    return e.registerPrevious(this);
                  },
                  registerPrevious: function(e) {
                    if (this.isLocked)
                      throw new Error(
                        "The stream '" + this + "' has already been used."
                      );
                    (this.streamInfo = e.streamInfo),
                      this.mergeStreamInfo(),
                      (this.previous = e);
                    var t = this;
                    return (
                      e.on("data", function(e) {
                        t.processChunk(e);
                      }),
                      e.on("end", function() {
                        t.end();
                      }),
                      e.on("error", function(e) {
                        t.error(e);
                      }),
                      this
                    );
                  },
                  pause: function() {
                    return (
                      !this.isPaused &&
                      !this.isFinished &&
                      ((this.isPaused = !0),
                      this.previous && this.previous.pause(),
                      !0)
                    );
                  },
                  resume: function() {
                    if (!this.isPaused || this.isFinished) return !1;
                    var e = (this.isPaused = !1);
                    return (
                      this.generatedError &&
                        (this.error(this.generatedError), (e = !0)),
                      this.previous && this.previous.resume(),
                      !e
                    );
                  },
                  flush: function() {},
                  processChunk: function(e) {
                    this.push(e);
                  },
                  withStreamInfo: function(e, t) {
                    return (
                      (this.extraStreamInfo[e] = t),
                      this.mergeStreamInfo(),
                      this
                    );
                  },
                  mergeStreamInfo: function() {
                    for (var e in this.extraStreamInfo)
                      this.extraStreamInfo.hasOwnProperty(e) &&
                        (this.streamInfo[e] = this.extraStreamInfo[e]);
                  },
                  lock: function() {
                    if (this.isLocked)
                      throw new Error(
                        "The stream '" + this + "' has already been used."
                      );
                    (this.isLocked = !0), this.previous && this.previous.lock();
                  },
                  toString: function() {
                    var e = "Worker " + this.name;
                    return this.previous ? this.previous + " -> " + e : e;
                  }
                }),
                  (t.exports = n);
              },
              {}
            ],
            29: [
              function(e, r, n) {
                "use strict";
                var i = e("../utils"),
                  s = e("./ConvertWorker"),
                  o = e("./GenericWorker"),
                  a = e("../base64"),
                  p = e("../support"),
                  u = e("../external"),
                  c = null;
                if (p.nodestream)
                  try {
                    c = e("../nodejs/NodejsStreamOutputAdapter");
                  } catch (e) {}
                function d(e, t, r) {
                  var n = t;
                  switch (t) {
                    case "blob":
                    case "arraybuffer":
                      n = "uint8array";
                      break;
                    case "base64":
                      n = "string";
                  }
                  try {
                    (this._internalType = n),
                      (this._outputType = t),
                      (this._mimeType = r),
                      i.checkSupport(n),
                      (this._worker = e.pipe(new s(n))),
                      e.lock();
                  } catch (e) {
                    (this._worker = new o("error")), this._worker.error(e);
                  }
                }
                (d.prototype = {
                  accumulate: function(e) {
                    return (function(e, r) {
                      return new u.Promise(function(n, s) {
                        var o = [],
                          p = e._internalType,
                          u = e._outputType,
                          c = e._mimeType;
                        e.on("data", function(e, t) {
                          o.push(e), r && r(t);
                        })
                          .on("error", function(e) {
                            (o = []), s(e);
                          })
                          .on("end", function() {
                            try {
                              var e = (function(e, t, r) {
                                switch (e) {
                                  case "blob":
                                    return i.newBlob(
                                      i.transformTo("arraybuffer", t),
                                      r
                                    );
                                  case "base64":
                                    return a.encode(t);
                                  default:
                                    return i.transformTo(e, t);
                                }
                              })(
                                u,
                                (function(e, r) {
                                  var n,
                                    i = 0,
                                    s = null,
                                    o = 0;
                                  for (n = 0; n < r.length; n++)
                                    o += r[n].length;
                                  switch (e) {
                                    case "string":
                                      return r.join("");
                                    case "array":
                                      return Array.prototype.concat.apply(
                                        [],
                                        r
                                      );
                                    case "uint8array":
                                      for (
                                        s = new Uint8Array(o), n = 0;
                                        n < r.length;
                                        n++
                                      )
                                        s.set(r[n], i), (i += r[n].length);
                                      return s;
                                    case "nodebuffer":
                                      return t.concat(r);
                                    default:
                                      throw new Error(
                                        "concat : unsupported type '" + e + "'"
                                      );
                                  }
                                })(p, o),
                                c
                              );
                              n(e);
                            } catch (e) {
                              s(e);
                            }
                            o = [];
                          })
                          .resume();
                      });
                    })(this, e);
                  },
                  on: function(e, t) {
                    var r = this;
                    return (
                      "data" === e
                        ? this._worker.on(e, function(e) {
                            t.call(r, e.data, e.meta);
                          })
                        : this._worker.on(e, function() {
                            i.delay(t, arguments, r);
                          }),
                      this
                    );
                  },
                  resume: function() {
                    return i.delay(this._worker.resume, [], this._worker), this;
                  },
                  pause: function() {
                    return this._worker.pause(), this;
                  },
                  toNodejsStream: function(e) {
                    if (
                      (i.checkSupport("nodestream"),
                      "nodebuffer" !== this._outputType)
                    )
                      throw new Error(
                        this._outputType + " is not supported by this method"
                      );
                    return new c(
                      this,
                      { objectMode: "nodebuffer" !== this._outputType },
                      e
                    );
                  }
                }),
                  (r.exports = d);
              },
              {
                "../base64": 1,
                "../external": 6,
                "../nodejs/NodejsStreamOutputAdapter": 13,
                "../support": 30,
                "../utils": 32,
                "./ConvertWorker": 24,
                "./GenericWorker": 28
              }
            ],
            30: [
              function(e, r, n) {
                "use strict";
                if (
                  ((n.base64 = !0),
                  (n.array = !0),
                  (n.string = !0),
                  (n.arraybuffer =
                    "undefined" != typeof ArrayBuffer &&
                    "undefined" != typeof Uint8Array),
                  (n.nodebuffer = void 0 !== t),
                  (n.uint8array = "undefined" != typeof Uint8Array),
                  "undefined" == typeof ArrayBuffer)
                )
                  n.blob = !1;
                else {
                  var i = new ArrayBuffer(0);
                  try {
                    n.blob =
                      0 === new Blob([i], { type: "application/zip" }).size;
                  } catch (e) {
                    try {
                      var s = new (self.BlobBuilder ||
                        self.WebKitBlobBuilder ||
                        self.MozBlobBuilder ||
                        self.MSBlobBuilder)();
                      s.append(i),
                        (n.blob = 0 === s.getBlob("application/zip").size);
                    } catch (e) {
                      n.blob = !1;
                    }
                  }
                }
                try {
                  n.nodestream = !!e("readable-stream").Readable;
                } catch (e) {
                  n.nodestream = !1;
                }
              },
              { "readable-stream": 16 }
            ],
            31: [
              function(e, t, r) {
                "use strict";
                for (
                  var n = e("./utils"),
                    i = e("./support"),
                    s = e("./nodejsUtils"),
                    o = e("./stream/GenericWorker"),
                    a = new Array(256),
                    p = 0;
                  p < 256;
                  p++
                )
                  a[p] =
                    252 <= p
                      ? 6
                      : 248 <= p
                      ? 5
                      : 240 <= p
                      ? 4
                      : 224 <= p
                      ? 3
                      : 192 <= p
                      ? 2
                      : 1;
                function u() {
                  o.call(this, "utf-8 decode"), (this.leftOver = null);
                }
                function c() {
                  o.call(this, "utf-8 encode");
                }
                (a[254] = a[254] = 1),
                  (r.utf8encode = function(e) {
                    return i.nodebuffer
                      ? s.newBufferFrom(e, "utf-8")
                      : (function(e) {
                          var t,
                            r,
                            n,
                            s,
                            o,
                            a = e.length,
                            p = 0;
                          for (s = 0; s < a; s++)
                            55296 == (64512 & (r = e.charCodeAt(s))) &&
                              s + 1 < a &&
                              56320 == (64512 & (n = e.charCodeAt(s + 1))) &&
                              ((r = 65536 + ((r - 55296) << 10) + (n - 56320)),
                              s++),
                              (p +=
                                r < 128 ? 1 : r < 2048 ? 2 : r < 65536 ? 3 : 4);
                          for (
                            t = i.uint8array ? new Uint8Array(p) : new Array(p),
                              s = o = 0;
                            o < p;
                            s++
                          )
                            55296 == (64512 & (r = e.charCodeAt(s))) &&
                              s + 1 < a &&
                              56320 == (64512 & (n = e.charCodeAt(s + 1))) &&
                              ((r = 65536 + ((r - 55296) << 10) + (n - 56320)),
                              s++),
                              r < 128
                                ? (t[o++] = r)
                                : (r < 2048
                                    ? (t[o++] = 192 | (r >>> 6))
                                    : (r < 65536
                                        ? (t[o++] = 224 | (r >>> 12))
                                        : ((t[o++] = 240 | (r >>> 18)),
                                          (t[o++] = 128 | ((r >>> 12) & 63))),
                                      (t[o++] = 128 | ((r >>> 6) & 63))),
                                  (t[o++] = 128 | (63 & r)));
                          return t;
                        })(e);
                  }),
                  (r.utf8decode = function(e) {
                    return i.nodebuffer
                      ? n.transformTo("nodebuffer", e).toString("utf-8")
                      : (function(e) {
                          var t,
                            r,
                            i,
                            s,
                            o = e.length,
                            p = new Array(2 * o);
                          for (t = r = 0; t < o; )
                            if ((i = e[t++]) < 128) p[r++] = i;
                            else if (4 < (s = a[i]))
                              (p[r++] = 65533), (t += s - 1);
                            else {
                              for (
                                i &= 2 === s ? 31 : 3 === s ? 15 : 7;
                                1 < s && t < o;

                              )
                                (i = (i << 6) | (63 & e[t++])), s--;
                              1 < s
                                ? (p[r++] = 65533)
                                : i < 65536
                                ? (p[r++] = i)
                                : ((i -= 65536),
                                  (p[r++] = 55296 | ((i >> 10) & 1023)),
                                  (p[r++] = 56320 | (1023 & i)));
                            }
                          return (
                            p.length !== r &&
                              (p.subarray
                                ? (p = p.subarray(0, r))
                                : (p.length = r)),
                            n.applyFromCharCode(p)
                          );
                        })(
                          (e = n.transformTo(
                            i.uint8array ? "uint8array" : "array",
                            e
                          ))
                        );
                  }),
                  n.inherits(u, o),
                  (u.prototype.processChunk = function(e) {
                    var t = n.transformTo(
                      i.uint8array ? "uint8array" : "array",
                      e.data
                    );
                    if (this.leftOver && this.leftOver.length) {
                      if (i.uint8array) {
                        var s = t;
                        (t = new Uint8Array(
                          s.length + this.leftOver.length
                        )).set(this.leftOver, 0),
                          t.set(s, this.leftOver.length);
                      } else t = this.leftOver.concat(t);
                      this.leftOver = null;
                    }
                    var o = (function(e, t) {
                        var r;
                        for (
                          (t = t || e.length) > e.length && (t = e.length),
                            r = t - 1;
                          0 <= r && 128 == (192 & e[r]);

                        )
                          r--;
                        return r < 0 || 0 === r ? t : r + a[e[r]] > t ? r : t;
                      })(t),
                      p = t;
                    o !== t.length &&
                      (i.uint8array
                        ? ((p = t.subarray(0, o)),
                          (this.leftOver = t.subarray(o, t.length)))
                        : ((p = t.slice(0, o)),
                          (this.leftOver = t.slice(o, t.length)))),
                      this.push({ data: r.utf8decode(p), meta: e.meta });
                  }),
                  (u.prototype.flush = function() {
                    this.leftOver &&
                      this.leftOver.length &&
                      (this.push({
                        data: r.utf8decode(this.leftOver),
                        meta: {}
                      }),
                      (this.leftOver = null));
                  }),
                  (r.Utf8DecodeWorker = u),
                  n.inherits(c, o),
                  (c.prototype.processChunk = function(e) {
                    this.push({ data: r.utf8encode(e.data), meta: e.meta });
                  }),
                  (r.Utf8EncodeWorker = c);
              },
              {
                "./nodejsUtils": 14,
                "./stream/GenericWorker": 28,
                "./support": 30,
                "./utils": 32
              }
            ],
            32: [
              function(e, t, r) {
                "use strict";
                var n = e("./support"),
                  i = e("./base64"),
                  s = e("./nodejsUtils"),
                  o = e("set-immediate-shim"),
                  a = e("./external");
                function p(e) {
                  return e;
                }
                function u(e, t) {
                  for (var r = 0; r < e.length; ++r)
                    t[r] = 255 & e.charCodeAt(r);
                  return t;
                }
                r.newBlob = function(e, t) {
                  r.checkSupport("blob");
                  try {
                    return new Blob([e], { type: t });
                  } catch (r) {
                    try {
                      var n = new (self.BlobBuilder ||
                        self.WebKitBlobBuilder ||
                        self.MozBlobBuilder ||
                        self.MSBlobBuilder)();
                      return n.append(e), n.getBlob(t);
                    } catch (e) {
                      throw new Error("Bug : can't construct the Blob.");
                    }
                  }
                };
                var c = {
                  stringifyByChunk: function(e, t, r) {
                    var n = [],
                      i = 0,
                      s = e.length;
                    if (s <= r) return String.fromCharCode.apply(null, e);
                    for (; i < s; )
                      "array" === t || "nodebuffer" === t
                        ? n.push(
                            String.fromCharCode.apply(
                              null,
                              e.slice(i, Math.min(i + r, s))
                            )
                          )
                        : n.push(
                            String.fromCharCode.apply(
                              null,
                              e.subarray(i, Math.min(i + r, s))
                            )
                          ),
                        (i += r);
                    return n.join("");
                  },
                  stringifyByChar: function(e) {
                    for (var t = "", r = 0; r < e.length; r++)
                      t += String.fromCharCode(e[r]);
                    return t;
                  },
                  applyCanBeUsed: {
                    uint8array: (function() {
                      try {
                        return (
                          n.uint8array &&
                          1 ===
                            String.fromCharCode.apply(null, new Uint8Array(1))
                              .length
                        );
                      } catch (e) {
                        return !1;
                      }
                    })(),
                    nodebuffer: (function() {
                      try {
                        return (
                          n.nodebuffer &&
                          1 ===
                            String.fromCharCode.apply(null, s.allocBuffer(1))
                              .length
                        );
                      } catch (e) {
                        return !1;
                      }
                    })()
                  }
                };
                function d(e) {
                  var t = 65536,
                    n = r.getTypeOf(e),
                    i = !0;
                  if (
                    ("uint8array" === n
                      ? (i = c.applyCanBeUsed.uint8array)
                      : "nodebuffer" === n && (i = c.applyCanBeUsed.nodebuffer),
                    i)
                  )
                    for (; 1 < t; )
                      try {
                        return c.stringifyByChunk(e, n, t);
                      } catch (e) {
                        t = Math.floor(t / 2);
                      }
                  return c.stringifyByChar(e);
                }
                function l(e, t) {
                  for (var r = 0; r < e.length; r++) t[r] = e[r];
                  return t;
                }
                r.applyFromCharCode = d;
                var h = {};
                (h.string = {
                  string: p,
                  array: function(e) {
                    return u(e, new Array(e.length));
                  },
                  arraybuffer: function(e) {
                    return h.string.uint8array(e).buffer;
                  },
                  uint8array: function(e) {
                    return u(e, new Uint8Array(e.length));
                  },
                  nodebuffer: function(e) {
                    return u(e, s.allocBuffer(e.length));
                  }
                }),
                  (h.array = {
                    string: d,
                    array: p,
                    arraybuffer: function(e) {
                      return new Uint8Array(e).buffer;
                    },
                    uint8array: function(e) {
                      return new Uint8Array(e);
                    },
                    nodebuffer: function(e) {
                      return s.newBufferFrom(e);
                    }
                  }),
                  (h.arraybuffer = {
                    string: function(e) {
                      return d(new Uint8Array(e));
                    },
                    array: function(e) {
                      return l(new Uint8Array(e), new Array(e.byteLength));
                    },
                    arraybuffer: p,
                    uint8array: function(e) {
                      return new Uint8Array(e);
                    },
                    nodebuffer: function(e) {
                      return s.newBufferFrom(new Uint8Array(e));
                    }
                  }),
                  (h.uint8array = {
                    string: d,
                    array: function(e) {
                      return l(e, new Array(e.length));
                    },
                    arraybuffer: function(e) {
                      return e.buffer;
                    },
                    uint8array: p,
                    nodebuffer: function(e) {
                      return s.newBufferFrom(e);
                    }
                  }),
                  (h.nodebuffer = {
                    string: d,
                    array: function(e) {
                      return l(e, new Array(e.length));
                    },
                    arraybuffer: function(e) {
                      return h.nodebuffer.uint8array(e).buffer;
                    },
                    uint8array: function(e) {
                      return l(e, new Uint8Array(e.length));
                    },
                    nodebuffer: p
                  }),
                  (r.transformTo = function(e, t) {
                    if (((t = t || ""), !e)) return t;
                    r.checkSupport(e);
                    var n = r.getTypeOf(t);
                    return h[n][e](t);
                  }),
                  (r.getTypeOf = function(e) {
                    return "string" == typeof e
                      ? "string"
                      : "[object Array]" === Object.prototype.toString.call(e)
                      ? "array"
                      : n.nodebuffer && s.isBuffer(e)
                      ? "nodebuffer"
                      : n.uint8array && e instanceof Uint8Array
                      ? "uint8array"
                      : n.arraybuffer && e instanceof ArrayBuffer
                      ? "arraybuffer"
                      : void 0;
                  }),
                  (r.checkSupport = function(e) {
                    if (!n[e.toLowerCase()])
                      throw new Error(e + " is not supported by this platform");
                  }),
                  (r.MAX_VALUE_16BITS = 65535),
                  (r.MAX_VALUE_32BITS = -1),
                  (r.pretty = function(e) {
                    var t,
                      r,
                      n = "";
                    for (r = 0; r < (e || "").length; r++)
                      n +=
                        "\\x" +
                        ((t = e.charCodeAt(r)) < 16 ? "0" : "") +
                        t.toString(16).toUpperCase();
                    return n;
                  }),
                  (r.delay = function(e, t, r) {
                    o(function() {
                      e.apply(r || null, t || []);
                    });
                  }),
                  (r.inherits = function(e, t) {
                    function r() {}
                    (r.prototype = t.prototype), (e.prototype = new r());
                  }),
                  (r.extend = function() {
                    var e,
                      t,
                      r = {};
                    for (e = 0; e < arguments.length; e++)
                      for (t in arguments[e])
                        arguments[e].hasOwnProperty(t) &&
                          void 0 === r[t] &&
                          (r[t] = arguments[e][t]);
                    return r;
                  }),
                  (r.prepareContent = function(e, t, s, o, p) {
                    return a.Promise.resolve(t)
                      .then(function(e) {
                        return n.blob &&
                          (e instanceof Blob ||
                            -1 !==
                              ["[object File]", "[object Blob]"].indexOf(
                                Object.prototype.toString.call(e)
                              )) &&
                          "undefined" != typeof FileReader
                          ? new a.Promise(function(t, r) {
                              var n = new FileReader();
                              (n.onload = function(e) {
                                t(e.target.result);
                              }),
                                (n.onerror = function(e) {
                                  r(e.target.error);
                                }),
                                n.readAsArrayBuffer(e);
                            })
                          : e;
                      })
                      .then(function(t) {
                        var c = r.getTypeOf(t);
                        return c
                          ? ("arraybuffer" === c
                              ? (t = r.transformTo("uint8array", t))
                              : "string" === c &&
                                (p
                                  ? (t = i.decode(t))
                                  : s &&
                                    !0 !== o &&
                                    (t = (function(e) {
                                      return u(
                                        e,
                                        n.uint8array
                                          ? new Uint8Array(e.length)
                                          : new Array(e.length)
                                      );
                                    })(t))),
                            t)
                          : a.Promise.reject(
                              new Error(
                                "Can't read the data of '" +
                                  e +
                                  "'. Is it in a supported JavaScript type (String, Blob, ArrayBuffer, etc) ?"
                              )
                            );
                      });
                  });
              },
              {
                "./base64": 1,
                "./external": 6,
                "./nodejsUtils": 14,
                "./support": 30,
                "set-immediate-shim": 54
              }
            ],
            33: [
              function(e, t, r) {
                "use strict";
                var n = e("./reader/readerFor"),
                  i = e("./utils"),
                  s = e("./signature"),
                  o = e("./zipEntry"),
                  a = (e("./utf8"), e("./support"));
                function p(e) {
                  (this.files = []), (this.loadOptions = e);
                }
                (p.prototype = {
                  checkSignature: function(e) {
                    if (!this.reader.readAndCheckSignature(e)) {
                      this.reader.index -= 4;
                      var t = this.reader.readString(4);
                      throw new Error(
                        "Corrupted zip or bug: unexpected signature (" +
                          i.pretty(t) +
                          ", expected " +
                          i.pretty(e) +
                          ")"
                      );
                    }
                  },
                  isSignature: function(e, t) {
                    var r = this.reader.index;
                    this.reader.setIndex(e);
                    var n = this.reader.readString(4) === t;
                    return this.reader.setIndex(r), n;
                  },
                  readBlockEndOfCentral: function() {
                    (this.diskNumber = this.reader.readInt(2)),
                      (this.diskWithCentralDirStart = this.reader.readInt(2)),
                      (this.centralDirRecordsOnThisDisk = this.reader.readInt(
                        2
                      )),
                      (this.centralDirRecords = this.reader.readInt(2)),
                      (this.centralDirSize = this.reader.readInt(4)),
                      (this.centralDirOffset = this.reader.readInt(4)),
                      (this.zipCommentLength = this.reader.readInt(2));
                    var e = this.reader.readData(this.zipCommentLength),
                      t = a.uint8array ? "uint8array" : "array",
                      r = i.transformTo(t, e);
                    this.zipComment = this.loadOptions.decodeFileName(r);
                  },
                  readBlockZip64EndOfCentral: function() {
                    (this.zip64EndOfCentralSize = this.reader.readInt(8)),
                      this.reader.skip(4),
                      (this.diskNumber = this.reader.readInt(4)),
                      (this.diskWithCentralDirStart = this.reader.readInt(4)),
                      (this.centralDirRecordsOnThisDisk = this.reader.readInt(
                        8
                      )),
                      (this.centralDirRecords = this.reader.readInt(8)),
                      (this.centralDirSize = this.reader.readInt(8)),
                      (this.centralDirOffset = this.reader.readInt(8)),
                      (this.zip64ExtensibleData = {});
                    for (
                      var e, t, r, n = this.zip64EndOfCentralSize - 44;
                      0 < n;

                    )
                      (e = this.reader.readInt(2)),
                        (t = this.reader.readInt(4)),
                        (r = this.reader.readData(t)),
                        (this.zip64ExtensibleData[e] = {
                          id: e,
                          length: t,
                          value: r
                        });
                  },
                  readBlockZip64EndOfCentralLocator: function() {
                    if (
                      ((this.diskWithZip64CentralDirStart = this.reader.readInt(
                        4
                      )),
                      (this.relativeOffsetEndOfZip64CentralDir = this.reader.readInt(
                        8
                      )),
                      (this.disksCount = this.reader.readInt(4)),
                      1 < this.disksCount)
                    )
                      throw new Error("Multi-volumes zip are not supported");
                  },
                  readLocalFiles: function() {
                    var e, t;
                    for (e = 0; e < this.files.length; e++)
                      (t = this.files[e]),
                        this.reader.setIndex(t.localHeaderOffset),
                        this.checkSignature(s.LOCAL_FILE_HEADER),
                        t.readLocalPart(this.reader),
                        t.handleUTF8(),
                        t.processAttributes();
                  },
                  readCentralDir: function() {
                    var e;
                    for (
                      this.reader.setIndex(this.centralDirOffset);
                      this.reader.readAndCheckSignature(s.CENTRAL_FILE_HEADER);

                    )
                      (e = new o(
                        { zip64: this.zip64 },
                        this.loadOptions
                      )).readCentralPart(this.reader),
                        this.files.push(e);
                    if (
                      this.centralDirRecords !== this.files.length &&
                      0 !== this.centralDirRecords &&
                      0 === this.files.length
                    )
                      throw new Error(
                        "Corrupted zip or bug: expected " +
                          this.centralDirRecords +
                          " records in central dir, got " +
                          this.files.length
                      );
                  },
                  readEndOfCentral: function() {
                    var e = this.reader.lastIndexOfSignature(
                      s.CENTRAL_DIRECTORY_END
                    );
                    if (e < 0)
                      throw this.isSignature(0, s.LOCAL_FILE_HEADER)
                        ? new Error(
                            "Corrupted zip: can't find end of central directory"
                          )
                        : new Error(
                            "Can't find end of central directory : is this a zip file ? If it is, see https://stuk.github.io/jszip/documentation/howto/read_zip.html"
                          );
                    this.reader.setIndex(e);
                    var t = e;
                    if (
                      (this.checkSignature(s.CENTRAL_DIRECTORY_END),
                      this.readBlockEndOfCentral(),
                      this.diskNumber === i.MAX_VALUE_16BITS ||
                        this.diskWithCentralDirStart === i.MAX_VALUE_16BITS ||
                        this.centralDirRecordsOnThisDisk ===
                          i.MAX_VALUE_16BITS ||
                        this.centralDirRecords === i.MAX_VALUE_16BITS ||
                        this.centralDirSize === i.MAX_VALUE_32BITS ||
                        this.centralDirOffset === i.MAX_VALUE_32BITS)
                    ) {
                      if (
                        ((this.zip64 = !0),
                        (e = this.reader.lastIndexOfSignature(
                          s.ZIP64_CENTRAL_DIRECTORY_LOCATOR
                        )) < 0)
                      )
                        throw new Error(
                          "Corrupted zip: can't find the ZIP64 end of central directory locator"
                        );
                      if (
                        (this.reader.setIndex(e),
                        this.checkSignature(s.ZIP64_CENTRAL_DIRECTORY_LOCATOR),
                        this.readBlockZip64EndOfCentralLocator(),
                        !this.isSignature(
                          this.relativeOffsetEndOfZip64CentralDir,
                          s.ZIP64_CENTRAL_DIRECTORY_END
                        ) &&
                          ((this.relativeOffsetEndOfZip64CentralDir = this.reader.lastIndexOfSignature(
                            s.ZIP64_CENTRAL_DIRECTORY_END
                          )),
                          this.relativeOffsetEndOfZip64CentralDir < 0))
                      )
                        throw new Error(
                          "Corrupted zip: can't find the ZIP64 end of central directory"
                        );
                      this.reader.setIndex(
                        this.relativeOffsetEndOfZip64CentralDir
                      ),
                        this.checkSignature(s.ZIP64_CENTRAL_DIRECTORY_END),
                        this.readBlockZip64EndOfCentral();
                    }
                    var r = this.centralDirOffset + this.centralDirSize;
                    this.zip64 &&
                      ((r += 20), (r += 12 + this.zip64EndOfCentralSize));
                    var n = t - r;
                    if (0 < n)
                      this.isSignature(t, s.CENTRAL_FILE_HEADER) ||
                        (this.reader.zero = n);
                    else if (n < 0)
                      throw new Error(
                        "Corrupted zip: missing " + Math.abs(n) + " bytes."
                      );
                  },
                  prepareReader: function(e) {
                    this.reader = n(e);
                  },
                  load: function(e) {
                    this.prepareReader(e),
                      this.readEndOfCentral(),
                      this.readCentralDir(),
                      this.readLocalFiles();
                  }
                }),
                  (t.exports = p);
              },
              {
                "./reader/readerFor": 22,
                "./signature": 23,
                "./support": 30,
                "./utf8": 31,
                "./utils": 32,
                "./zipEntry": 34
              }
            ],
            34: [
              function(e, t, r) {
                "use strict";
                var n = e("./reader/readerFor"),
                  i = e("./utils"),
                  s = e("./compressedObject"),
                  o = e("./crc32"),
                  a = e("./utf8"),
                  p = e("./compressions"),
                  u = e("./support");
                function c(e, t) {
                  (this.options = e), (this.loadOptions = t);
                }
                (c.prototype = {
                  isEncrypted: function() {
                    return 1 == (1 & this.bitFlag);
                  },
                  useUTF8: function() {
                    return 2048 == (2048 & this.bitFlag);
                  },
                  readLocalPart: function(e) {
                    var t, r;
                    if (
                      (e.skip(22),
                      (this.fileNameLength = e.readInt(2)),
                      (r = e.readInt(2)),
                      (this.fileName = e.readData(this.fileNameLength)),
                      e.skip(r),
                      -1 === this.compressedSize ||
                        -1 === this.uncompressedSize)
                    )
                      throw new Error(
                        "Bug or corrupted zip : didn't get enough information from the central directory (compressedSize === -1 || uncompressedSize === -1)"
                      );
                    if (
                      null ===
                      (t = (function(e) {
                        for (var t in p)
                          if (p.hasOwnProperty(t) && p[t].magic === e)
                            return p[t];
                        return null;
                      })(this.compressionMethod))
                    )
                      throw new Error(
                        "Corrupted zip : compression " +
                          i.pretty(this.compressionMethod) +
                          " unknown (inner file : " +
                          i.transformTo("string", this.fileName) +
                          ")"
                      );
                    this.decompressed = new s(
                      this.compressedSize,
                      this.uncompressedSize,
                      this.crc32,
                      t,
                      e.readData(this.compressedSize)
                    );
                  },
                  readCentralPart: function(e) {
                    (this.versionMadeBy = e.readInt(2)),
                      e.skip(2),
                      (this.bitFlag = e.readInt(2)),
                      (this.compressionMethod = e.readString(2)),
                      (this.date = e.readDate()),
                      (this.crc32 = e.readInt(4)),
                      (this.compressedSize = e.readInt(4)),
                      (this.uncompressedSize = e.readInt(4));
                    var t = e.readInt(2);
                    if (
                      ((this.extraFieldsLength = e.readInt(2)),
                      (this.fileCommentLength = e.readInt(2)),
                      (this.diskNumberStart = e.readInt(2)),
                      (this.internalFileAttributes = e.readInt(2)),
                      (this.externalFileAttributes = e.readInt(4)),
                      (this.localHeaderOffset = e.readInt(4)),
                      this.isEncrypted())
                    )
                      throw new Error("Encrypted zip are not supported");
                    e.skip(t),
                      this.readExtraFields(e),
                      this.parseZIP64ExtraField(e),
                      (this.fileComment = e.readData(this.fileCommentLength));
                  },
                  processAttributes: function() {
                    (this.unixPermissions = null), (this.dosPermissions = null);
                    var e = this.versionMadeBy >> 8;
                    (this.dir = !!(16 & this.externalFileAttributes)),
                      0 == e &&
                        (this.dosPermissions =
                          63 & this.externalFileAttributes),
                      3 == e &&
                        (this.unixPermissions =
                          (this.externalFileAttributes >> 16) & 65535),
                      this.dir ||
                        "/" !== this.fileNameStr.slice(-1) ||
                        (this.dir = !0);
                  },
                  parseZIP64ExtraField: function(e) {
                    if (this.extraFields[1]) {
                      var t = n(this.extraFields[1].value);
                      this.uncompressedSize === i.MAX_VALUE_32BITS &&
                        (this.uncompressedSize = t.readInt(8)),
                        this.compressedSize === i.MAX_VALUE_32BITS &&
                          (this.compressedSize = t.readInt(8)),
                        this.localHeaderOffset === i.MAX_VALUE_32BITS &&
                          (this.localHeaderOffset = t.readInt(8)),
                        this.diskNumberStart === i.MAX_VALUE_32BITS &&
                          (this.diskNumberStart = t.readInt(4));
                    }
                  },
                  readExtraFields: function(e) {
                    var t,
                      r,
                      n,
                      i = e.index + this.extraFieldsLength;
                    for (
                      this.extraFields || (this.extraFields = {});
                      e.index < i;

                    )
                      (t = e.readInt(2)),
                        (r = e.readInt(2)),
                        (n = e.readData(r)),
                        (this.extraFields[t] = { id: t, length: r, value: n });
                  },
                  handleUTF8: function() {
                    var e = u.uint8array ? "uint8array" : "array";
                    if (this.useUTF8())
                      (this.fileNameStr = a.utf8decode(this.fileName)),
                        (this.fileCommentStr = a.utf8decode(this.fileComment));
                    else {
                      var t = this.findExtraFieldUnicodePath();
                      if (null !== t) this.fileNameStr = t;
                      else {
                        var r = i.transformTo(e, this.fileName);
                        this.fileNameStr = this.loadOptions.decodeFileName(r);
                      }
                      var n = this.findExtraFieldUnicodeComment();
                      if (null !== n) this.fileCommentStr = n;
                      else {
                        var s = i.transformTo(e, this.fileComment);
                        this.fileCommentStr = this.loadOptions.decodeFileName(
                          s
                        );
                      }
                    }
                  },
                  findExtraFieldUnicodePath: function() {
                    var e = this.extraFields[28789];
                    if (e) {
                      var t = n(e.value);
                      return 1 !== t.readInt(1) ||
                        o(this.fileName) !== t.readInt(4)
                        ? null
                        : a.utf8decode(t.readData(e.length - 5));
                    }
                    return null;
                  },
                  findExtraFieldUnicodeComment: function() {
                    var e = this.extraFields[25461];
                    if (e) {
                      var t = n(e.value);
                      return 1 !== t.readInt(1) ||
                        o(this.fileComment) !== t.readInt(4)
                        ? null
                        : a.utf8decode(t.readData(e.length - 5));
                    }
                    return null;
                  }
                }),
                  (t.exports = c);
              },
              {
                "./compressedObject": 2,
                "./compressions": 3,
                "./crc32": 4,
                "./reader/readerFor": 22,
                "./support": 30,
                "./utf8": 31,
                "./utils": 32
              }
            ],
            35: [
              function(e, t, r) {
                "use strict";
                function n(e, t, r) {
                  (this.name = e),
                    (this.dir = r.dir),
                    (this.date = r.date),
                    (this.comment = r.comment),
                    (this.unixPermissions = r.unixPermissions),
                    (this.dosPermissions = r.dosPermissions),
                    (this._data = t),
                    (this._dataBinary = r.binary),
                    (this.options = {
                      compression: r.compression,
                      compressionOptions: r.compressionOptions
                    });
                }
                var i = e("./stream/StreamHelper"),
                  s = e("./stream/DataWorker"),
                  o = e("./utf8"),
                  a = e("./compressedObject"),
                  p = e("./stream/GenericWorker");
                n.prototype = {
                  internalStream: function(e) {
                    var t = null,
                      r = "string";
                    try {
                      if (!e) throw new Error("No output type specified.");
                      var n =
                        "string" === (r = e.toLowerCase()) || "text" === r;
                      ("binarystring" !== r && "text" !== r) || (r = "string"),
                        (t = this._decompressWorker());
                      var s = !this._dataBinary;
                      s && !n && (t = t.pipe(new o.Utf8EncodeWorker())),
                        !s && n && (t = t.pipe(new o.Utf8DecodeWorker()));
                    } catch (e) {
                      (t = new p("error")).error(e);
                    }
                    return new i(t, r, "");
                  },
                  async: function(e, t) {
                    return this.internalStream(e).accumulate(t);
                  },
                  nodeStream: function(e, t) {
                    return this.internalStream(
                      e || "nodebuffer"
                    ).toNodejsStream(t);
                  },
                  _compressWorker: function(e, t) {
                    if (
                      this._data instanceof a &&
                      this._data.compression.magic === e.magic
                    )
                      return this._data.getCompressedWorker();
                    var r = this._decompressWorker();
                    return (
                      this._dataBinary ||
                        (r = r.pipe(new o.Utf8EncodeWorker())),
                      a.createWorkerFrom(r, e, t)
                    );
                  },
                  _decompressWorker: function() {
                    return this._data instanceof a
                      ? this._data.getContentWorker()
                      : this._data instanceof p
                      ? this._data
                      : new s(this._data);
                  }
                };
                for (
                  var u = [
                      "asText",
                      "asBinary",
                      "asNodeBuffer",
                      "asUint8Array",
                      "asArrayBuffer"
                    ],
                    c = function() {
                      throw new Error(
                        "This method has been removed in JSZip 3.0, please check the upgrade guide."
                      );
                    },
                    d = 0;
                  d < u.length;
                  d++
                )
                  n.prototype[u[d]] = c;
                t.exports = n;
              },
              {
                "./compressedObject": 2,
                "./stream/DataWorker": 27,
                "./stream/GenericWorker": 28,
                "./stream/StreamHelper": 29,
                "./utf8": 31
              }
            ],
            36: [
              function(e, t, n) {
                (function(e) {
                  "use strict";
                  var r,
                    n,
                    i = e.MutationObserver || e.WebKitMutationObserver;
                  if (i) {
                    var s = 0,
                      o = new i(c),
                      a = e.document.createTextNode("");
                    o.observe(a, { characterData: !0 }),
                      (r = function() {
                        a.data = s = ++s % 2;
                      });
                  } else if (e.setImmediate || void 0 === e.MessageChannel)
                    r =
                      "document" in e &&
                      "onreadystatechange" in e.document.createElement("script")
                        ? function() {
                            var t = e.document.createElement("script");
                            (t.onreadystatechange = function() {
                              c(),
                                (t.onreadystatechange = null),
                                t.parentNode.removeChild(t),
                                (t = null);
                            }),
                              e.document.documentElement.appendChild(t);
                          }
                        : function() {
                            setTimeout(c, 0);
                          };
                  else {
                    var p = new e.MessageChannel();
                    (p.port1.onmessage = c),
                      (r = function() {
                        p.port2.postMessage(0);
                      });
                  }
                  var u = [];
                  function c() {
                    var e, t;
                    n = !0;
                    for (var r = u.length; r; ) {
                      for (t = u, u = [], e = -1; ++e < r; ) t[e]();
                      r = u.length;
                    }
                    n = !1;
                  }
                  t.exports = function(e) {
                    1 !== u.push(e) || n || r();
                  };
                }.call(
                  this,
                  void 0 !== r
                    ? r
                    : "undefined" != typeof self
                    ? self
                    : "undefined" != typeof window
                    ? window
                    : {}
                ));
              },
              {}
            ],
            37: [
              function(e, t, r) {
                "use strict";
                var n = e("immediate");
                function i() {}
                var s = {},
                  o = ["REJECTED"],
                  a = ["FULFILLED"],
                  p = ["PENDING"];
                function u(e) {
                  if ("function" != typeof e)
                    throw new TypeError("resolver must be a function");
                  (this.state = p),
                    (this.queue = []),
                    (this.outcome = void 0),
                    e !== i && h(this, e);
                }
                function c(e, t, r) {
                  (this.promise = e),
                    "function" == typeof t &&
                      ((this.onFulfilled = t),
                      (this.callFulfilled = this.otherCallFulfilled)),
                    "function" == typeof r &&
                      ((this.onRejected = r),
                      (this.callRejected = this.otherCallRejected));
                }
                function d(e, t, r) {
                  n(function() {
                    var n;
                    try {
                      n = t(r);
                    } catch (n) {
                      return s.reject(e, n);
                    }
                    n === e
                      ? s.reject(
                          e,
                          new TypeError("Cannot resolve promise with itself")
                        )
                      : s.resolve(e, n);
                  });
                }
                function l(e) {
                  var t = e && e.then;
                  if (
                    e &&
                    ("object" == typeof e || "function" == typeof e) &&
                    "function" == typeof t
                  )
                    return function() {
                      t.apply(e, arguments);
                    };
                }
                function h(e, t) {
                  var r = !1;
                  function n(t) {
                    r || ((r = !0), s.reject(e, t));
                  }
                  function i(t) {
                    r || ((r = !0), s.resolve(e, t));
                  }
                  var o = m(function() {
                    t(i, n);
                  });
                  "error" === o.status && n(o.value);
                }
                function m(e, t) {
                  var r = {};
                  try {
                    (r.value = e(t)), (r.status = "success");
                  } catch (e) {
                    (r.status = "error"), (r.value = e);
                  }
                  return r;
                }
                ((t.exports = u).prototype.finally = function(e) {
                  if ("function" != typeof e) return this;
                  var t = this.constructor;
                  return this.then(
                    function(r) {
                      return t.resolve(e()).then(function() {
                        return r;
                      });
                    },
                    function(r) {
                      return t.resolve(e()).then(function() {
                        throw r;
                      });
                    }
                  );
                }),
                  (u.prototype.catch = function(e) {
                    return this.then(null, e);
                  }),
                  (u.prototype.then = function(e, t) {
                    if (
                      ("function" != typeof e && this.state === a) ||
                      ("function" != typeof t && this.state === o)
                    )
                      return this;
                    var r = new this.constructor(i);
                    return (
                      this.state !== p
                        ? d(r, this.state === a ? e : t, this.outcome)
                        : this.queue.push(new c(r, e, t)),
                      r
                    );
                  }),
                  (c.prototype.callFulfilled = function(e) {
                    s.resolve(this.promise, e);
                  }),
                  (c.prototype.otherCallFulfilled = function(e) {
                    d(this.promise, this.onFulfilled, e);
                  }),
                  (c.prototype.callRejected = function(e) {
                    s.reject(this.promise, e);
                  }),
                  (c.prototype.otherCallRejected = function(e) {
                    d(this.promise, this.onRejected, e);
                  }),
                  (s.resolve = function(e, t) {
                    var r = m(l, t);
                    if ("error" === r.status) return s.reject(e, r.value);
                    var n = r.value;
                    if (n) h(e, n);
                    else {
                      (e.state = a), (e.outcome = t);
                      for (var i = -1, o = e.queue.length; ++i < o; )
                        e.queue[i].callFulfilled(t);
                    }
                    return e;
                  }),
                  (s.reject = function(e, t) {
                    (e.state = o), (e.outcome = t);
                    for (var r = -1, n = e.queue.length; ++r < n; )
                      e.queue[r].callRejected(t);
                    return e;
                  }),
                  (u.resolve = function(e) {
                    return e instanceof this ? e : s.resolve(new this(i), e);
                  }),
                  (u.reject = function(e) {
                    var t = new this(i);
                    return s.reject(t, e);
                  }),
                  (u.all = function(e) {
                    var t = this;
                    if ("[object Array]" !== Object.prototype.toString.call(e))
                      return this.reject(new TypeError("must be an array"));
                    var r = e.length,
                      n = !1;
                    if (!r) return this.resolve([]);
                    for (
                      var o = new Array(r), a = 0, p = -1, u = new this(i);
                      ++p < r;

                    )
                      c(e[p], p);
                    return u;
                    function c(e, i) {
                      t.resolve(e).then(
                        function(e) {
                          (o[i] = e),
                            ++a !== r || n || ((n = !0), s.resolve(u, o));
                        },
                        function(e) {
                          n || ((n = !0), s.reject(u, e));
                        }
                      );
                    }
                  }),
                  (u.race = function(e) {
                    if ("[object Array]" !== Object.prototype.toString.call(e))
                      return this.reject(new TypeError("must be an array"));
                    var t = e.length,
                      r = !1;
                    if (!t) return this.resolve([]);
                    for (var n, o = -1, a = new this(i); ++o < t; )
                      (n = e[o]),
                        this.resolve(n).then(
                          function(e) {
                            r || ((r = !0), s.resolve(a, e));
                          },
                          function(e) {
                            r || ((r = !0), s.reject(a, e));
                          }
                        );
                    return a;
                  });
              },
              { immediate: 36 }
            ],
            38: [
              function(e, t, r) {
                "use strict";
                var n = {};
                (0, e("./lib/utils/common").assign)(
                  n,
                  e("./lib/deflate"),
                  e("./lib/inflate"),
                  e("./lib/zlib/constants")
                ),
                  (t.exports = n);
              },
              {
                "./lib/deflate": 39,
                "./lib/inflate": 40,
                "./lib/utils/common": 41,
                "./lib/zlib/constants": 44
              }
            ],
            39: [
              function(e, t, r) {
                "use strict";
                var n = e("./zlib/deflate"),
                  i = e("./utils/common"),
                  s = e("./utils/strings"),
                  o = e("./zlib/messages"),
                  a = e("./zlib/zstream"),
                  p = Object.prototype.toString;
                function u(e) {
                  if (!(this instanceof u)) return new u(e);
                  this.options = i.assign(
                    {
                      level: -1,
                      method: 8,
                      chunkSize: 16384,
                      windowBits: 15,
                      memLevel: 8,
                      strategy: 0,
                      to: ""
                    },
                    e || {}
                  );
                  var t = this.options;
                  t.raw && 0 < t.windowBits
                    ? (t.windowBits = -t.windowBits)
                    : t.gzip &&
                      0 < t.windowBits &&
                      t.windowBits < 16 &&
                      (t.windowBits += 16),
                    (this.err = 0),
                    (this.msg = ""),
                    (this.ended = !1),
                    (this.chunks = []),
                    (this.strm = new a()),
                    (this.strm.avail_out = 0);
                  var r = n.deflateInit2(
                    this.strm,
                    t.level,
                    t.method,
                    t.windowBits,
                    t.memLevel,
                    t.strategy
                  );
                  if (0 !== r) throw new Error(o[r]);
                  if (
                    (t.header && n.deflateSetHeader(this.strm, t.header),
                    t.dictionary)
                  ) {
                    var c;
                    if (
                      ((c =
                        "string" == typeof t.dictionary
                          ? s.string2buf(t.dictionary)
                          : "[object ArrayBuffer]" === p.call(t.dictionary)
                          ? new Uint8Array(t.dictionary)
                          : t.dictionary),
                      0 !== (r = n.deflateSetDictionary(this.strm, c)))
                    )
                      throw new Error(o[r]);
                    this._dict_set = !0;
                  }
                }
                function c(e, t) {
                  var r = new u(t);
                  if ((r.push(e, !0), r.err)) throw r.msg || o[r.err];
                  return r.result;
                }
                (u.prototype.push = function(e, t) {
                  var r,
                    o,
                    a = this.strm,
                    u = this.options.chunkSize;
                  if (this.ended) return !1;
                  (o = t === ~~t ? t : !0 === t ? 4 : 0),
                    "string" == typeof e
                      ? (a.input = s.string2buf(e))
                      : "[object ArrayBuffer]" === p.call(e)
                      ? (a.input = new Uint8Array(e))
                      : (a.input = e),
                    (a.next_in = 0),
                    (a.avail_in = a.input.length);
                  do {
                    if (
                      (0 === a.avail_out &&
                        ((a.output = new i.Buf8(u)),
                        (a.next_out = 0),
                        (a.avail_out = u)),
                      1 !== (r = n.deflate(a, o)) && 0 !== r)
                    )
                      return this.onEnd(r), !(this.ended = !0);
                    (0 !== a.avail_out &&
                      (0 !== a.avail_in || (4 !== o && 2 !== o))) ||
                      ("string" === this.options.to
                        ? this.onData(
                            s.buf2binstring(i.shrinkBuf(a.output, a.next_out))
                          )
                        : this.onData(i.shrinkBuf(a.output, a.next_out)));
                  } while ((0 < a.avail_in || 0 === a.avail_out) && 1 !== r);
                  return 4 === o
                    ? ((r = n.deflateEnd(this.strm)),
                      this.onEnd(r),
                      (this.ended = !0),
                      0 === r)
                    : 2 !== o || (this.onEnd(0), !(a.avail_out = 0));
                }),
                  (u.prototype.onData = function(e) {
                    this.chunks.push(e);
                  }),
                  (u.prototype.onEnd = function(e) {
                    0 === e &&
                      ("string" === this.options.to
                        ? (this.result = this.chunks.join(""))
                        : (this.result = i.flattenChunks(this.chunks))),
                      (this.chunks = []),
                      (this.err = e),
                      (this.msg = this.strm.msg);
                  }),
                  (r.Deflate = u),
                  (r.deflate = c),
                  (r.deflateRaw = function(e, t) {
                    return ((t = t || {}).raw = !0), c(e, t);
                  }),
                  (r.gzip = function(e, t) {
                    return ((t = t || {}).gzip = !0), c(e, t);
                  });
              },
              {
                "./utils/common": 41,
                "./utils/strings": 42,
                "./zlib/deflate": 46,
                "./zlib/messages": 51,
                "./zlib/zstream": 53
              }
            ],
            40: [
              function(e, t, r) {
                "use strict";
                var n = e("./zlib/inflate"),
                  i = e("./utils/common"),
                  s = e("./utils/strings"),
                  o = e("./zlib/constants"),
                  a = e("./zlib/messages"),
                  p = e("./zlib/zstream"),
                  u = e("./zlib/gzheader"),
                  c = Object.prototype.toString;
                function d(e) {
                  if (!(this instanceof d)) return new d(e);
                  this.options = i.assign(
                    { chunkSize: 16384, windowBits: 0, to: "" },
                    e || {}
                  );
                  var t = this.options;
                  t.raw &&
                    0 <= t.windowBits &&
                    t.windowBits < 16 &&
                    ((t.windowBits = -t.windowBits),
                    0 === t.windowBits && (t.windowBits = -15)),
                    !(0 <= t.windowBits && t.windowBits < 16) ||
                      (e && e.windowBits) ||
                      (t.windowBits += 32),
                    15 < t.windowBits &&
                      t.windowBits < 48 &&
                      0 == (15 & t.windowBits) &&
                      (t.windowBits |= 15),
                    (this.err = 0),
                    (this.msg = ""),
                    (this.ended = !1),
                    (this.chunks = []),
                    (this.strm = new p()),
                    (this.strm.avail_out = 0);
                  var r = n.inflateInit2(this.strm, t.windowBits);
                  if (r !== o.Z_OK) throw new Error(a[r]);
                  (this.header = new u()),
                    n.inflateGetHeader(this.strm, this.header);
                }
                function l(e, t) {
                  var r = new d(t);
                  if ((r.push(e, !0), r.err)) throw r.msg || a[r.err];
                  return r.result;
                }
                (d.prototype.push = function(e, t) {
                  var r,
                    a,
                    p,
                    u,
                    d,
                    l,
                    h = this.strm,
                    m = this.options.chunkSize,
                    g = this.options.dictionary,
                    y = !1;
                  if (this.ended) return !1;
                  (a = t === ~~t ? t : !0 === t ? o.Z_FINISH : o.Z_NO_FLUSH),
                    "string" == typeof e
                      ? (h.input = s.binstring2buf(e))
                      : "[object ArrayBuffer]" === c.call(e)
                      ? (h.input = new Uint8Array(e))
                      : (h.input = e),
                    (h.next_in = 0),
                    (h.avail_in = h.input.length);
                  do {
                    if (
                      (0 === h.avail_out &&
                        ((h.output = new i.Buf8(m)),
                        (h.next_out = 0),
                        (h.avail_out = m)),
                      (r = n.inflate(h, o.Z_NO_FLUSH)) === o.Z_NEED_DICT &&
                        g &&
                        ((l =
                          "string" == typeof g
                            ? s.string2buf(g)
                            : "[object ArrayBuffer]" === c.call(g)
                            ? new Uint8Array(g)
                            : g),
                        (r = n.inflateSetDictionary(this.strm, l))),
                      r === o.Z_BUF_ERROR &&
                        !0 === y &&
                        ((r = o.Z_OK), (y = !1)),
                      r !== o.Z_STREAM_END && r !== o.Z_OK)
                    )
                      return this.onEnd(r), !(this.ended = !0);
                    h.next_out &&
                      ((0 !== h.avail_out &&
                        r !== o.Z_STREAM_END &&
                        (0 !== h.avail_in ||
                          (a !== o.Z_FINISH && a !== o.Z_SYNC_FLUSH))) ||
                        ("string" === this.options.to
                          ? ((p = s.utf8border(h.output, h.next_out)),
                            (u = h.next_out - p),
                            (d = s.buf2string(h.output, p)),
                            (h.next_out = u),
                            (h.avail_out = m - u),
                            u && i.arraySet(h.output, h.output, p, u, 0),
                            this.onData(d))
                          : this.onData(i.shrinkBuf(h.output, h.next_out)))),
                      0 === h.avail_in && 0 === h.avail_out && (y = !0);
                  } while (
                    (0 < h.avail_in || 0 === h.avail_out) &&
                    r !== o.Z_STREAM_END
                  );
                  return (
                    r === o.Z_STREAM_END && (a = o.Z_FINISH),
                    a === o.Z_FINISH
                      ? ((r = n.inflateEnd(this.strm)),
                        this.onEnd(r),
                        (this.ended = !0),
                        r === o.Z_OK)
                      : a !== o.Z_SYNC_FLUSH ||
                        (this.onEnd(o.Z_OK), !(h.avail_out = 0))
                  );
                }),
                  (d.prototype.onData = function(e) {
                    this.chunks.push(e);
                  }),
                  (d.prototype.onEnd = function(e) {
                    e === o.Z_OK &&
                      ("string" === this.options.to
                        ? (this.result = this.chunks.join(""))
                        : (this.result = i.flattenChunks(this.chunks))),
                      (this.chunks = []),
                      (this.err = e),
                      (this.msg = this.strm.msg);
                  }),
                  (r.Inflate = d),
                  (r.inflate = l),
                  (r.inflateRaw = function(e, t) {
                    return ((t = t || {}).raw = !0), l(e, t);
                  }),
                  (r.ungzip = l);
              },
              {
                "./utils/common": 41,
                "./utils/strings": 42,
                "./zlib/constants": 44,
                "./zlib/gzheader": 47,
                "./zlib/inflate": 49,
                "./zlib/messages": 51,
                "./zlib/zstream": 53
              }
            ],
            41: [
              function(e, t, r) {
                "use strict";
                var n =
                  "undefined" != typeof Uint8Array &&
                  "undefined" != typeof Uint16Array &&
                  "undefined" != typeof Int32Array;
                (r.assign = function(e) {
                  for (
                    var t = Array.prototype.slice.call(arguments, 1);
                    t.length;

                  ) {
                    var r = t.shift();
                    if (r) {
                      if ("object" != typeof r)
                        throw new TypeError(r + "must be non-object");
                      for (var n in r) r.hasOwnProperty(n) && (e[n] = r[n]);
                    }
                  }
                  return e;
                }),
                  (r.shrinkBuf = function(e, t) {
                    return e.length === t
                      ? e
                      : e.subarray
                      ? e.subarray(0, t)
                      : ((e.length = t), e);
                  });
                var i = {
                    arraySet: function(e, t, r, n, i) {
                      if (t.subarray && e.subarray)
                        e.set(t.subarray(r, r + n), i);
                      else for (var s = 0; s < n; s++) e[i + s] = t[r + s];
                    },
                    flattenChunks: function(e) {
                      var t, r, n, i, s, o;
                      for (t = n = 0, r = e.length; t < r; t++)
                        n += e[t].length;
                      for (
                        o = new Uint8Array(n), t = i = 0, r = e.length;
                        t < r;
                        t++
                      )
                        (s = e[t]), o.set(s, i), (i += s.length);
                      return o;
                    }
                  },
                  s = {
                    arraySet: function(e, t, r, n, i) {
                      for (var s = 0; s < n; s++) e[i + s] = t[r + s];
                    },
                    flattenChunks: function(e) {
                      return [].concat.apply([], e);
                    }
                  };
                (r.setTyped = function(e) {
                  e
                    ? ((r.Buf8 = Uint8Array),
                      (r.Buf16 = Uint16Array),
                      (r.Buf32 = Int32Array),
                      r.assign(r, i))
                    : ((r.Buf8 = Array),
                      (r.Buf16 = Array),
                      (r.Buf32 = Array),
                      r.assign(r, s));
                }),
                  r.setTyped(n);
              },
              {}
            ],
            42: [
              function(e, t, r) {
                "use strict";
                var n = e("./common"),
                  i = !0,
                  s = !0;
                try {
                  String.fromCharCode.apply(null, [0]);
                } catch (e) {
                  i = !1;
                }
                try {
                  String.fromCharCode.apply(null, new Uint8Array(1));
                } catch (e) {
                  s = !1;
                }
                for (var o = new n.Buf8(256), a = 0; a < 256; a++)
                  o[a] =
                    252 <= a
                      ? 6
                      : 248 <= a
                      ? 5
                      : 240 <= a
                      ? 4
                      : 224 <= a
                      ? 3
                      : 192 <= a
                      ? 2
                      : 1;
                function p(e, t) {
                  if (t < 65537 && ((e.subarray && s) || (!e.subarray && i)))
                    return String.fromCharCode.apply(null, n.shrinkBuf(e, t));
                  for (var r = "", o = 0; o < t; o++)
                    r += String.fromCharCode(e[o]);
                  return r;
                }
                (o[254] = o[254] = 1),
                  (r.string2buf = function(e) {
                    var t,
                      r,
                      i,
                      s,
                      o,
                      a = e.length,
                      p = 0;
                    for (s = 0; s < a; s++)
                      55296 == (64512 & (r = e.charCodeAt(s))) &&
                        s + 1 < a &&
                        56320 == (64512 & (i = e.charCodeAt(s + 1))) &&
                        ((r = 65536 + ((r - 55296) << 10) + (i - 56320)), s++),
                        (p += r < 128 ? 1 : r < 2048 ? 2 : r < 65536 ? 3 : 4);
                    for (t = new n.Buf8(p), s = o = 0; o < p; s++)
                      55296 == (64512 & (r = e.charCodeAt(s))) &&
                        s + 1 < a &&
                        56320 == (64512 & (i = e.charCodeAt(s + 1))) &&
                        ((r = 65536 + ((r - 55296) << 10) + (i - 56320)), s++),
                        r < 128
                          ? (t[o++] = r)
                          : (r < 2048
                              ? (t[o++] = 192 | (r >>> 6))
                              : (r < 65536
                                  ? (t[o++] = 224 | (r >>> 12))
                                  : ((t[o++] = 240 | (r >>> 18)),
                                    (t[o++] = 128 | ((r >>> 12) & 63))),
                                (t[o++] = 128 | ((r >>> 6) & 63))),
                            (t[o++] = 128 | (63 & r)));
                    return t;
                  }),
                  (r.buf2binstring = function(e) {
                    return p(e, e.length);
                  }),
                  (r.binstring2buf = function(e) {
                    for (
                      var t = new n.Buf8(e.length), r = 0, i = t.length;
                      r < i;
                      r++
                    )
                      t[r] = e.charCodeAt(r);
                    return t;
                  }),
                  (r.buf2string = function(e, t) {
                    var r,
                      n,
                      i,
                      s,
                      a = t || e.length,
                      u = new Array(2 * a);
                    for (r = n = 0; r < a; )
                      if ((i = e[r++]) < 128) u[n++] = i;
                      else if (4 < (s = o[i])) (u[n++] = 65533), (r += s - 1);
                      else {
                        for (
                          i &= 2 === s ? 31 : 3 === s ? 15 : 7;
                          1 < s && r < a;

                        )
                          (i = (i << 6) | (63 & e[r++])), s--;
                        1 < s
                          ? (u[n++] = 65533)
                          : i < 65536
                          ? (u[n++] = i)
                          : ((i -= 65536),
                            (u[n++] = 55296 | ((i >> 10) & 1023)),
                            (u[n++] = 56320 | (1023 & i)));
                      }
                    return p(u, n);
                  }),
                  (r.utf8border = function(e, t) {
                    var r;
                    for (
                      (t = t || e.length) > e.length && (t = e.length),
                        r = t - 1;
                      0 <= r && 128 == (192 & e[r]);

                    )
                      r--;
                    return r < 0 || 0 === r ? t : r + o[e[r]] > t ? r : t;
                  });
              },
              { "./common": 41 }
            ],
            43: [
              function(e, t, r) {
                "use strict";
                t.exports = function(e, t, r, n) {
                  for (
                    var i = (65535 & e) | 0,
                      s = ((e >>> 16) & 65535) | 0,
                      o = 0;
                    0 !== r;

                  ) {
                    for (
                      r -= o = 2e3 < r ? 2e3 : r;
                      (s = (s + (i = (i + t[n++]) | 0)) | 0), --o;

                    );
                    (i %= 65521), (s %= 65521);
                  }
                  return i | (s << 16) | 0;
                };
              },
              {}
            ],
            44: [
              function(e, t, r) {
                "use strict";
                t.exports = {
                  Z_NO_FLUSH: 0,
                  Z_PARTIAL_FLUSH: 1,
                  Z_SYNC_FLUSH: 2,
                  Z_FULL_FLUSH: 3,
                  Z_FINISH: 4,
                  Z_BLOCK: 5,
                  Z_TREES: 6,
                  Z_OK: 0,
                  Z_STREAM_END: 1,
                  Z_NEED_DICT: 2,
                  Z_ERRNO: -1,
                  Z_STREAM_ERROR: -2,
                  Z_DATA_ERROR: -3,
                  Z_BUF_ERROR: -5,
                  Z_NO_COMPRESSION: 0,
                  Z_BEST_SPEED: 1,
                  Z_BEST_COMPRESSION: 9,
                  Z_DEFAULT_COMPRESSION: -1,
                  Z_FILTERED: 1,
                  Z_HUFFMAN_ONLY: 2,
                  Z_RLE: 3,
                  Z_FIXED: 4,
                  Z_DEFAULT_STRATEGY: 0,
                  Z_BINARY: 0,
                  Z_TEXT: 1,
                  Z_UNKNOWN: 2,
                  Z_DEFLATED: 8
                };
              },
              {}
            ],
            45: [
              function(e, t, r) {
                "use strict";
                var n = (function() {
                  for (var e, t = [], r = 0; r < 256; r++) {
                    e = r;
                    for (var n = 0; n < 8; n++)
                      e = 1 & e ? 3988292384 ^ (e >>> 1) : e >>> 1;
                    t[r] = e;
                  }
                  return t;
                })();
                t.exports = function(e, t, r, i) {
                  var s = n,
                    o = i + r;
                  e ^= -1;
                  for (var a = i; a < o; a++)
                    e = (e >>> 8) ^ s[255 & (e ^ t[a])];
                  return -1 ^ e;
                };
              },
              {}
            ],
            46: [
              function(e, t, r) {
                "use strict";
                var n,
                  i = e("../utils/common"),
                  s = e("./trees"),
                  o = e("./adler32"),
                  a = e("./crc32"),
                  p = e("./messages"),
                  u = -2,
                  c = 258,
                  d = 262,
                  l = 113;
                function h(e, t) {
                  return (e.msg = p[t]), t;
                }
                function m(e) {
                  return (e << 1) - (4 < e ? 9 : 0);
                }
                function g(e) {
                  for (var t = e.length; 0 <= --t; ) e[t] = 0;
                }
                function y(e) {
                  var t = e.state,
                    r = t.pending;
                  r > e.avail_out && (r = e.avail_out),
                    0 !== r &&
                      (i.arraySet(
                        e.output,
                        t.pending_buf,
                        t.pending_out,
                        r,
                        e.next_out
                      ),
                      (e.next_out += r),
                      (t.pending_out += r),
                      (e.total_out += r),
                      (e.avail_out -= r),
                      (t.pending -= r),
                      0 === t.pending && (t.pending_out = 0));
                }
                function f(e, t) {
                  s._tr_flush_block(
                    e,
                    0 <= e.block_start ? e.block_start : -1,
                    e.strstart - e.block_start,
                    t
                  ),
                    (e.block_start = e.strstart),
                    y(e.strm);
                }
                function _(e, t) {
                  e.pending_buf[e.pending++] = t;
                }
                function b(e, t) {
                  (e.pending_buf[e.pending++] = (t >>> 8) & 255),
                    (e.pending_buf[e.pending++] = 255 & t);
                }
                function w(e, t) {
                  var r,
                    n,
                    i = e.max_chain_length,
                    s = e.strstart,
                    o = e.prev_length,
                    a = e.nice_match,
                    p =
                      e.strstart > e.w_size - d
                        ? e.strstart - (e.w_size - d)
                        : 0,
                    u = e.window,
                    l = e.w_mask,
                    h = e.prev,
                    m = e.strstart + c,
                    g = u[s + o - 1],
                    y = u[s + o];
                  e.prev_length >= e.good_match && (i >>= 2),
                    a > e.lookahead && (a = e.lookahead);
                  do {
                    if (
                      u[(r = t) + o] === y &&
                      u[r + o - 1] === g &&
                      u[r] === u[s] &&
                      u[++r] === u[s + 1]
                    ) {
                      (s += 2), r++;
                      do {} while (
                        u[++s] === u[++r] &&
                        u[++s] === u[++r] &&
                        u[++s] === u[++r] &&
                        u[++s] === u[++r] &&
                        u[++s] === u[++r] &&
                        u[++s] === u[++r] &&
                        u[++s] === u[++r] &&
                        u[++s] === u[++r] &&
                        s < m
                      );
                      if (((n = c - (m - s)), (s = m - c), o < n)) {
                        if (((e.match_start = t), a <= (o = n))) break;
                        (g = u[s + o - 1]), (y = u[s + o]);
                      }
                    }
                  } while ((t = h[t & l]) > p && 0 != --i);
                  return o <= e.lookahead ? o : e.lookahead;
                }
                function v(e) {
                  var t,
                    r,
                    n,
                    s,
                    p,
                    u,
                    c,
                    l,
                    h,
                    m,
                    g = e.w_size;
                  do {
                    if (
                      ((s = e.window_size - e.lookahead - e.strstart),
                      e.strstart >= g + (g - d))
                    ) {
                      for (
                        i.arraySet(e.window, e.window, g, g, 0),
                          e.match_start -= g,
                          e.strstart -= g,
                          e.block_start -= g,
                          t = r = e.hash_size;
                        (n = e.head[--t]),
                          (e.head[t] = g <= n ? n - g : 0),
                          --r;

                      );
                      for (
                        t = r = g;
                        (n = e.prev[--t]),
                          (e.prev[t] = g <= n ? n - g : 0),
                          --r;

                      );
                      s += g;
                    }
                    if (0 === e.strm.avail_in) break;
                    if (
                      ((u = e.strm),
                      (c = e.window),
                      (l = e.strstart + e.lookahead),
                      (m = void 0),
                      (h = s) < (m = u.avail_in) && (m = h),
                      (r =
                        0 === m
                          ? 0
                          : ((u.avail_in -= m),
                            i.arraySet(c, u.input, u.next_in, m, l),
                            1 === u.state.wrap
                              ? (u.adler = o(u.adler, c, m, l))
                              : 2 === u.state.wrap &&
                                (u.adler = a(u.adler, c, m, l)),
                            (u.next_in += m),
                            (u.total_in += m),
                            m)),
                      (e.lookahead += r),
                      e.lookahead + e.insert >= 3)
                    )
                      for (
                        p = e.strstart - e.insert,
                          e.ins_h = e.window[p],
                          e.ins_h =
                            ((e.ins_h << e.hash_shift) ^ e.window[p + 1]) &
                            e.hash_mask;
                        e.insert &&
                        ((e.ins_h =
                          ((e.ins_h << e.hash_shift) ^ e.window[p + 3 - 1]) &
                          e.hash_mask),
                        (e.prev[p & e.w_mask] = e.head[e.ins_h]),
                        (e.head[e.ins_h] = p),
                        p++,
                        e.insert--,
                        !(e.lookahead + e.insert < 3));

                      );
                  } while (e.lookahead < d && 0 !== e.strm.avail_in);
                }
                function q(e, t) {
                  for (var r, n; ; ) {
                    if (e.lookahead < d) {
                      if ((v(e), e.lookahead < d && 0 === t)) return 1;
                      if (0 === e.lookahead) break;
                    }
                    if (
                      ((r = 0),
                      e.lookahead >= 3 &&
                        ((e.ins_h =
                          ((e.ins_h << e.hash_shift) ^
                            e.window[e.strstart + 3 - 1]) &
                          e.hash_mask),
                        (r = e.prev[e.strstart & e.w_mask] = e.head[e.ins_h]),
                        (e.head[e.ins_h] = e.strstart)),
                      0 !== r &&
                        e.strstart - r <= e.w_size - d &&
                        (e.match_length = w(e, r)),
                      e.match_length >= 3)
                    )
                      if (
                        ((n = s._tr_tally(
                          e,
                          e.strstart - e.match_start,
                          e.match_length - 3
                        )),
                        (e.lookahead -= e.match_length),
                        e.match_length <= e.max_lazy_match && e.lookahead >= 3)
                      ) {
                        for (
                          e.match_length--;
                          e.strstart++,
                            (e.ins_h =
                              ((e.ins_h << e.hash_shift) ^
                                e.window[e.strstart + 3 - 1]) &
                              e.hash_mask),
                            (r = e.prev[e.strstart & e.w_mask] =
                              e.head[e.ins_h]),
                            (e.head[e.ins_h] = e.strstart),
                            0 != --e.match_length;

                        );
                        e.strstart++;
                      } else
                        (e.strstart += e.match_length),
                          (e.match_length = 0),
                          (e.ins_h = e.window[e.strstart]),
                          (e.ins_h =
                            ((e.ins_h << e.hash_shift) ^
                              e.window[e.strstart + 1]) &
                            e.hash_mask);
                    else
                      (n = s._tr_tally(e, 0, e.window[e.strstart])),
                        e.lookahead--,
                        e.strstart++;
                    if (n && (f(e, !1), 0 === e.strm.avail_out)) return 1;
                  }
                  return (
                    (e.insert = e.strstart < 2 ? e.strstart : 2),
                    4 === t
                      ? (f(e, !0), 0 === e.strm.avail_out ? 3 : 4)
                      : e.last_lit && (f(e, !1), 0 === e.strm.avail_out)
                      ? 1
                      : 2
                  );
                }
                function k(e, t) {
                  for (var r, n, i; ; ) {
                    if (e.lookahead < d) {
                      if ((v(e), e.lookahead < d && 0 === t)) return 1;
                      if (0 === e.lookahead) break;
                    }
                    if (
                      ((r = 0),
                      e.lookahead >= 3 &&
                        ((e.ins_h =
                          ((e.ins_h << e.hash_shift) ^
                            e.window[e.strstart + 3 - 1]) &
                          e.hash_mask),
                        (r = e.prev[e.strstart & e.w_mask] = e.head[e.ins_h]),
                        (e.head[e.ins_h] = e.strstart)),
                      (e.prev_length = e.match_length),
                      (e.prev_match = e.match_start),
                      (e.match_length = 2),
                      0 !== r &&
                        e.prev_length < e.max_lazy_match &&
                        e.strstart - r <= e.w_size - d &&
                        ((e.match_length = w(e, r)),
                        e.match_length <= 5 &&
                          (1 === e.strategy ||
                            (3 === e.match_length &&
                              4096 < e.strstart - e.match_start)) &&
                          (e.match_length = 2)),
                      e.prev_length >= 3 && e.match_length <= e.prev_length)
                    ) {
                      for (
                        i = e.strstart + e.lookahead - 3,
                          n = s._tr_tally(
                            e,
                            e.strstart - 1 - e.prev_match,
                            e.prev_length - 3
                          ),
                          e.lookahead -= e.prev_length - 1,
                          e.prev_length -= 2;
                        ++e.strstart <= i &&
                          ((e.ins_h =
                            ((e.ins_h << e.hash_shift) ^
                              e.window[e.strstart + 3 - 1]) &
                            e.hash_mask),
                          (r = e.prev[e.strstart & e.w_mask] = e.head[e.ins_h]),
                          (e.head[e.ins_h] = e.strstart)),
                          0 != --e.prev_length;

                      );
                      if (
                        ((e.match_available = 0),
                        (e.match_length = 2),
                        e.strstart++,
                        n && (f(e, !1), 0 === e.strm.avail_out))
                      )
                        return 1;
                    } else if (e.match_available) {
                      if (
                        ((n = s._tr_tally(e, 0, e.window[e.strstart - 1])) &&
                          f(e, !1),
                        e.strstart++,
                        e.lookahead--,
                        0 === e.strm.avail_out)
                      )
                        return 1;
                    } else (e.match_available = 1), e.strstart++, e.lookahead--;
                  }
                  return (
                    e.match_available &&
                      ((n = s._tr_tally(e, 0, e.window[e.strstart - 1])),
                      (e.match_available = 0)),
                    (e.insert = e.strstart < 2 ? e.strstart : 2),
                    4 === t
                      ? (f(e, !0), 0 === e.strm.avail_out ? 3 : 4)
                      : e.last_lit && (f(e, !1), 0 === e.strm.avail_out)
                      ? 1
                      : 2
                  );
                }
                function E(e, t, r, n, i) {
                  (this.good_length = e),
                    (this.max_lazy = t),
                    (this.nice_length = r),
                    (this.max_chain = n),
                    (this.func = i);
                }
                function T() {
                  (this.strm = null),
                    (this.status = 0),
                    (this.pending_buf = null),
                    (this.pending_buf_size = 0),
                    (this.pending_out = 0),
                    (this.pending = 0),
                    (this.wrap = 0),
                    (this.gzhead = null),
                    (this.gzindex = 0),
                    (this.method = 8),
                    (this.last_flush = -1),
                    (this.w_size = 0),
                    (this.w_bits = 0),
                    (this.w_mask = 0),
                    (this.window = null),
                    (this.window_size = 0),
                    (this.prev = null),
                    (this.head = null),
                    (this.ins_h = 0),
                    (this.hash_size = 0),
                    (this.hash_bits = 0),
                    (this.hash_mask = 0),
                    (this.hash_shift = 0),
                    (this.block_start = 0),
                    (this.match_length = 0),
                    (this.prev_match = 0),
                    (this.match_available = 0),
                    (this.strstart = 0),
                    (this.match_start = 0),
                    (this.lookahead = 0),
                    (this.prev_length = 0),
                    (this.max_chain_length = 0),
                    (this.max_lazy_match = 0),
                    (this.level = 0),
                    (this.strategy = 0),
                    (this.good_match = 0),
                    (this.nice_match = 0),
                    (this.dyn_ltree = new i.Buf16(1146)),
                    (this.dyn_dtree = new i.Buf16(122)),
                    (this.bl_tree = new i.Buf16(78)),
                    g(this.dyn_ltree),
                    g(this.dyn_dtree),
                    g(this.bl_tree),
                    (this.l_desc = null),
                    (this.d_desc = null),
                    (this.bl_desc = null),
                    (this.bl_count = new i.Buf16(16)),
                    (this.heap = new i.Buf16(573)),
                    g(this.heap),
                    (this.heap_len = 0),
                    (this.heap_max = 0),
                    (this.depth = new i.Buf16(573)),
                    g(this.depth),
                    (this.l_buf = 0),
                    (this.lit_bufsize = 0),
                    (this.last_lit = 0),
                    (this.d_buf = 0),
                    (this.opt_len = 0),
                    (this.static_len = 0),
                    (this.matches = 0),
                    (this.insert = 0),
                    (this.bi_buf = 0),
                    (this.bi_valid = 0);
                }
                function P(e) {
                  var t;
                  return e && e.state
                    ? ((e.total_in = e.total_out = 0),
                      (e.data_type = 2),
                      ((t = e.state).pending = 0),
                      (t.pending_out = 0),
                      t.wrap < 0 && (t.wrap = -t.wrap),
                      (t.status = t.wrap ? 42 : l),
                      (e.adler = 2 === t.wrap ? 0 : 1),
                      (t.last_flush = 0),
                      s._tr_init(t),
                      0)
                    : h(e, u);
                }
                function x(e) {
                  var t = P(e);
                  return (
                    0 === t &&
                      (function(e) {
                        (e.window_size = 2 * e.w_size),
                          g(e.head),
                          (e.max_lazy_match = n[e.level].max_lazy),
                          (e.good_match = n[e.level].good_length),
                          (e.nice_match = n[e.level].nice_length),
                          (e.max_chain_length = n[e.level].max_chain),
                          (e.strstart = 0),
                          (e.block_start = 0),
                          (e.lookahead = 0),
                          (e.insert = 0),
                          (e.match_length = e.prev_length = 2),
                          (e.match_available = 0),
                          (e.ins_h = 0);
                      })(e.state),
                    t
                  );
                }
                function A(e, t, r, n, s, o) {
                  if (!e) return u;
                  var a = 1;
                  if (
                    (-1 === t && (t = 6),
                    n < 0
                      ? ((a = 0), (n = -n))
                      : 15 < n && ((a = 2), (n -= 16)),
                    s < 1 ||
                      9 < s ||
                      8 !== r ||
                      n < 8 ||
                      15 < n ||
                      t < 0 ||
                      9 < t ||
                      o < 0 ||
                      4 < o)
                  )
                    return h(e, u);
                  8 === n && (n = 9);
                  var p = new T();
                  return (
                    ((e.state = p).strm = e),
                    (p.wrap = a),
                    (p.gzhead = null),
                    (p.w_bits = n),
                    (p.w_size = 1 << p.w_bits),
                    (p.w_mask = p.w_size - 1),
                    (p.hash_bits = s + 7),
                    (p.hash_size = 1 << p.hash_bits),
                    (p.hash_mask = p.hash_size - 1),
                    (p.hash_shift = ~~((p.hash_bits + 3 - 1) / 3)),
                    (p.window = new i.Buf8(2 * p.w_size)),
                    (p.head = new i.Buf16(p.hash_size)),
                    (p.prev = new i.Buf16(p.w_size)),
                    (p.lit_bufsize = 1 << (s + 6)),
                    (p.pending_buf_size = 4 * p.lit_bufsize),
                    (p.pending_buf = new i.Buf8(p.pending_buf_size)),
                    (p.d_buf = 1 * p.lit_bufsize),
                    (p.l_buf = 3 * p.lit_bufsize),
                    (p.level = t),
                    (p.strategy = o),
                    (p.method = r),
                    x(e)
                  );
                }
                (n = [
                  new E(0, 0, 0, 0, function(e, t) {
                    var r = 65535;
                    for (
                      r > e.pending_buf_size - 5 &&
                      (r = e.pending_buf_size - 5);
                      ;

                    ) {
                      if (e.lookahead <= 1) {
                        if ((v(e), 0 === e.lookahead && 0 === t)) return 1;
                        if (0 === e.lookahead) break;
                      }
                      (e.strstart += e.lookahead), (e.lookahead = 0);
                      var n = e.block_start + r;
                      if (
                        (0 === e.strstart || e.strstart >= n) &&
                        ((e.lookahead = e.strstart - n),
                        (e.strstart = n),
                        f(e, !1),
                        0 === e.strm.avail_out)
                      )
                        return 1;
                      if (
                        e.strstart - e.block_start >= e.w_size - d &&
                        (f(e, !1), 0 === e.strm.avail_out)
                      )
                        return 1;
                    }
                    return (
                      (e.insert = 0),
                      4 === t
                        ? (f(e, !0), 0 === e.strm.avail_out ? 3 : 4)
                        : (e.strstart > e.block_start &&
                            (f(e, !1), e.strm.avail_out),
                          1)
                    );
                  }),
                  new E(4, 4, 8, 4, q),
                  new E(4, 5, 16, 8, q),
                  new E(4, 6, 32, 32, q),
                  new E(4, 4, 16, 16, k),
                  new E(8, 16, 32, 32, k),
                  new E(8, 16, 128, 128, k),
                  new E(8, 32, 128, 256, k),
                  new E(32, 128, 258, 1024, k),
                  new E(32, 258, 258, 4096, k)
                ]),
                  (r.deflateInit = function(e, t) {
                    return A(e, t, 8, 15, 8, 0);
                  }),
                  (r.deflateInit2 = A),
                  (r.deflateReset = x),
                  (r.deflateResetKeep = P),
                  (r.deflateSetHeader = function(e, t) {
                    return e && e.state
                      ? 2 !== e.state.wrap
                        ? u
                        : ((e.state.gzhead = t), 0)
                      : u;
                  }),
                  (r.deflate = function(e, t) {
                    var r, i, o, p;
                    if (!e || !e.state || 5 < t || t < 0)
                      return e ? h(e, u) : u;
                    if (
                      ((i = e.state),
                      !e.output ||
                        (!e.input && 0 !== e.avail_in) ||
                        (666 === i.status && 4 !== t))
                    )
                      return h(e, 0 === e.avail_out ? -5 : u);
                    if (
                      ((i.strm = e),
                      (r = i.last_flush),
                      (i.last_flush = t),
                      42 === i.status)
                    )
                      if (2 === i.wrap)
                        (e.adler = 0),
                          _(i, 31),
                          _(i, 139),
                          _(i, 8),
                          i.gzhead
                            ? (_(
                                i,
                                (i.gzhead.text ? 1 : 0) +
                                  (i.gzhead.hcrc ? 2 : 0) +
                                  (i.gzhead.extra ? 4 : 0) +
                                  (i.gzhead.name ? 8 : 0) +
                                  (i.gzhead.comment ? 16 : 0)
                              ),
                              _(i, 255 & i.gzhead.time),
                              _(i, (i.gzhead.time >> 8) & 255),
                              _(i, (i.gzhead.time >> 16) & 255),
                              _(i, (i.gzhead.time >> 24) & 255),
                              _(
                                i,
                                9 === i.level
                                  ? 2
                                  : 2 <= i.strategy || i.level < 2
                                  ? 4
                                  : 0
                              ),
                              _(i, 255 & i.gzhead.os),
                              i.gzhead.extra &&
                                i.gzhead.extra.length &&
                                (_(i, 255 & i.gzhead.extra.length),
                                _(i, (i.gzhead.extra.length >> 8) & 255)),
                              i.gzhead.hcrc &&
                                (e.adler = a(
                                  e.adler,
                                  i.pending_buf,
                                  i.pending,
                                  0
                                )),
                              (i.gzindex = 0),
                              (i.status = 69))
                            : (_(i, 0),
                              _(i, 0),
                              _(i, 0),
                              _(i, 0),
                              _(i, 0),
                              _(
                                i,
                                9 === i.level
                                  ? 2
                                  : 2 <= i.strategy || i.level < 2
                                  ? 4
                                  : 0
                              ),
                              _(i, 3),
                              (i.status = l));
                      else {
                        var d = (8 + ((i.w_bits - 8) << 4)) << 8;
                        (d |=
                          (2 <= i.strategy || i.level < 2
                            ? 0
                            : i.level < 6
                            ? 1
                            : 6 === i.level
                            ? 2
                            : 3) << 6),
                          0 !== i.strstart && (d |= 32),
                          (d += 31 - (d % 31)),
                          (i.status = l),
                          b(i, d),
                          0 !== i.strstart &&
                            (b(i, e.adler >>> 16), b(i, 65535 & e.adler)),
                          (e.adler = 1);
                      }
                    if (69 === i.status)
                      if (i.gzhead.extra) {
                        for (
                          o = i.pending;
                          i.gzindex < (65535 & i.gzhead.extra.length) &&
                          (i.pending !== i.pending_buf_size ||
                            (i.gzhead.hcrc &&
                              i.pending > o &&
                              (e.adler = a(
                                e.adler,
                                i.pending_buf,
                                i.pending - o,
                                o
                              )),
                            y(e),
                            (o = i.pending),
                            i.pending !== i.pending_buf_size));

                        )
                          _(i, 255 & i.gzhead.extra[i.gzindex]), i.gzindex++;
                        i.gzhead.hcrc &&
                          i.pending > o &&
                          (e.adler = a(
                            e.adler,
                            i.pending_buf,
                            i.pending - o,
                            o
                          )),
                          i.gzindex === i.gzhead.extra.length &&
                            ((i.gzindex = 0), (i.status = 73));
                      } else i.status = 73;
                    if (73 === i.status)
                      if (i.gzhead.name) {
                        o = i.pending;
                        do {
                          if (
                            i.pending === i.pending_buf_size &&
                            (i.gzhead.hcrc &&
                              i.pending > o &&
                              (e.adler = a(
                                e.adler,
                                i.pending_buf,
                                i.pending - o,
                                o
                              )),
                            y(e),
                            (o = i.pending),
                            i.pending === i.pending_buf_size)
                          ) {
                            p = 1;
                            break;
                          }
                          (p =
                            i.gzindex < i.gzhead.name.length
                              ? 255 & i.gzhead.name.charCodeAt(i.gzindex++)
                              : 0),
                            _(i, p);
                        } while (0 !== p);
                        i.gzhead.hcrc &&
                          i.pending > o &&
                          (e.adler = a(
                            e.adler,
                            i.pending_buf,
                            i.pending - o,
                            o
                          )),
                          0 === p && ((i.gzindex = 0), (i.status = 91));
                      } else i.status = 91;
                    if (91 === i.status)
                      if (i.gzhead.comment) {
                        o = i.pending;
                        do {
                          if (
                            i.pending === i.pending_buf_size &&
                            (i.gzhead.hcrc &&
                              i.pending > o &&
                              (e.adler = a(
                                e.adler,
                                i.pending_buf,
                                i.pending - o,
                                o
                              )),
                            y(e),
                            (o = i.pending),
                            i.pending === i.pending_buf_size)
                          ) {
                            p = 1;
                            break;
                          }
                          (p =
                            i.gzindex < i.gzhead.comment.length
                              ? 255 & i.gzhead.comment.charCodeAt(i.gzindex++)
                              : 0),
                            _(i, p);
                        } while (0 !== p);
                        i.gzhead.hcrc &&
                          i.pending > o &&
                          (e.adler = a(
                            e.adler,
                            i.pending_buf,
                            i.pending - o,
                            o
                          )),
                          0 === p && (i.status = 103);
                      } else i.status = 103;
                    if (
                      (103 === i.status &&
                        (i.gzhead.hcrc
                          ? (i.pending + 2 > i.pending_buf_size && y(e),
                            i.pending + 2 <= i.pending_buf_size &&
                              (_(i, 255 & e.adler),
                              _(i, (e.adler >> 8) & 255),
                              (e.adler = 0),
                              (i.status = l)))
                          : (i.status = l)),
                      0 !== i.pending)
                    ) {
                      if ((y(e), 0 === e.avail_out))
                        return (i.last_flush = -1), 0;
                    } else if (0 === e.avail_in && m(t) <= m(r) && 4 !== t)
                      return h(e, -5);
                    if (666 === i.status && 0 !== e.avail_in) return h(e, -5);
                    if (
                      0 !== e.avail_in ||
                      0 !== i.lookahead ||
                      (0 !== t && 666 !== i.status)
                    ) {
                      var w =
                        2 === i.strategy
                          ? (function(e, t) {
                              for (var r; ; ) {
                                if (
                                  0 === e.lookahead &&
                                  (v(e), 0 === e.lookahead)
                                ) {
                                  if (0 === t) return 1;
                                  break;
                                }
                                if (
                                  ((e.match_length = 0),
                                  (r = s._tr_tally(e, 0, e.window[e.strstart])),
                                  e.lookahead--,
                                  e.strstart++,
                                  r && (f(e, !1), 0 === e.strm.avail_out))
                                )
                                  return 1;
                              }
                              return (
                                (e.insert = 0),
                                4 === t
                                  ? (f(e, !0), 0 === e.strm.avail_out ? 3 : 4)
                                  : e.last_lit &&
                                    (f(e, !1), 0 === e.strm.avail_out)
                                  ? 1
                                  : 2
                              );
                            })(i, t)
                          : 3 === i.strategy
                          ? (function(e, t) {
                              for (var r, n, i, o, a = e.window; ; ) {
                                if (e.lookahead <= c) {
                                  if ((v(e), e.lookahead <= c && 0 === t))
                                    return 1;
                                  if (0 === e.lookahead) break;
                                }
                                if (
                                  ((e.match_length = 0),
                                  e.lookahead >= 3 &&
                                    0 < e.strstart &&
                                    (n = a[(i = e.strstart - 1)]) === a[++i] &&
                                    n === a[++i] &&
                                    n === a[++i])
                                ) {
                                  o = e.strstart + c;
                                  do {} while (
                                    n === a[++i] &&
                                    n === a[++i] &&
                                    n === a[++i] &&
                                    n === a[++i] &&
                                    n === a[++i] &&
                                    n === a[++i] &&
                                    n === a[++i] &&
                                    n === a[++i] &&
                                    i < o
                                  );
                                  (e.match_length = c - (o - i)),
                                    e.match_length > e.lookahead &&
                                      (e.match_length = e.lookahead);
                                }
                                if (
                                  (e.match_length >= 3
                                    ? ((r = s._tr_tally(
                                        e,
                                        1,
                                        e.match_length - 3
                                      )),
                                      (e.lookahead -= e.match_length),
                                      (e.strstart += e.match_length),
                                      (e.match_length = 0))
                                    : ((r = s._tr_tally(
                                        e,
                                        0,
                                        e.window[e.strstart]
                                      )),
                                      e.lookahead--,
                                      e.strstart++),
                                  r && (f(e, !1), 0 === e.strm.avail_out))
                                )
                                  return 1;
                              }
                              return (
                                (e.insert = 0),
                                4 === t
                                  ? (f(e, !0), 0 === e.strm.avail_out ? 3 : 4)
                                  : e.last_lit &&
                                    (f(e, !1), 0 === e.strm.avail_out)
                                  ? 1
                                  : 2
                              );
                            })(i, t)
                          : n[i.level].func(i, t);
                      if (
                        ((3 !== w && 4 !== w) || (i.status = 666),
                        1 === w || 3 === w)
                      )
                        return 0 === e.avail_out && (i.last_flush = -1), 0;
                      if (
                        2 === w &&
                        (1 === t
                          ? s._tr_align(i)
                          : 5 !== t &&
                            (s._tr_stored_block(i, 0, 0, !1),
                            3 === t &&
                              (g(i.head),
                              0 === i.lookahead &&
                                ((i.strstart = 0),
                                (i.block_start = 0),
                                (i.insert = 0)))),
                        y(e),
                        0 === e.avail_out)
                      )
                        return (i.last_flush = -1), 0;
                    }
                    return 4 !== t
                      ? 0
                      : i.wrap <= 0
                      ? 1
                      : (2 === i.wrap
                          ? (_(i, 255 & e.adler),
                            _(i, (e.adler >> 8) & 255),
                            _(i, (e.adler >> 16) & 255),
                            _(i, (e.adler >> 24) & 255),
                            _(i, 255 & e.total_in),
                            _(i, (e.total_in >> 8) & 255),
                            _(i, (e.total_in >> 16) & 255),
                            _(i, (e.total_in >> 24) & 255))
                          : (b(i, e.adler >>> 16), b(i, 65535 & e.adler)),
                        y(e),
                        0 < i.wrap && (i.wrap = -i.wrap),
                        0 !== i.pending ? 0 : 1);
                  }),
                  (r.deflateEnd = function(e) {
                    var t;
                    return e && e.state
                      ? 42 !== (t = e.state.status) &&
                        69 !== t &&
                        73 !== t &&
                        91 !== t &&
                        103 !== t &&
                        t !== l &&
                        666 !== t
                        ? h(e, u)
                        : ((e.state = null), t === l ? h(e, -3) : 0)
                      : u;
                  }),
                  (r.deflateSetDictionary = function(e, t) {
                    var r,
                      n,
                      s,
                      a,
                      p,
                      c,
                      d,
                      l,
                      h = t.length;
                    if (!e || !e.state) return u;
                    if (
                      2 === (a = (r = e.state).wrap) ||
                      (1 === a && 42 !== r.status) ||
                      r.lookahead
                    )
                      return u;
                    for (
                      1 === a && (e.adler = o(e.adler, t, h, 0)),
                        r.wrap = 0,
                        h >= r.w_size &&
                          (0 === a &&
                            (g(r.head),
                            (r.strstart = 0),
                            (r.block_start = 0),
                            (r.insert = 0)),
                          (l = new i.Buf8(r.w_size)),
                          i.arraySet(l, t, h - r.w_size, r.w_size, 0),
                          (t = l),
                          (h = r.w_size)),
                        p = e.avail_in,
                        c = e.next_in,
                        d = e.input,
                        e.avail_in = h,
                        e.next_in = 0,
                        e.input = t,
                        v(r);
                      r.lookahead >= 3;

                    ) {
                      for (
                        n = r.strstart, s = r.lookahead - 2;
                        (r.ins_h =
                          ((r.ins_h << r.hash_shift) ^ r.window[n + 3 - 1]) &
                          r.hash_mask),
                          (r.prev[n & r.w_mask] = r.head[r.ins_h]),
                          (r.head[r.ins_h] = n),
                          n++,
                          --s;

                      );
                      (r.strstart = n), (r.lookahead = 2), v(r);
                    }
                    return (
                      (r.strstart += r.lookahead),
                      (r.block_start = r.strstart),
                      (r.insert = r.lookahead),
                      (r.lookahead = 0),
                      (r.match_length = r.prev_length = 2),
                      (r.match_available = 0),
                      (e.next_in = c),
                      (e.input = d),
                      (e.avail_in = p),
                      (r.wrap = a),
                      0
                    );
                  }),
                  (r.deflateInfo = "pako deflate (from Nodeca project)");
              },
              {
                "../utils/common": 41,
                "./adler32": 43,
                "./crc32": 45,
                "./messages": 51,
                "./trees": 52
              }
            ],
            47: [
              function(e, t, r) {
                "use strict";
                t.exports = function() {
                  (this.text = 0),
                    (this.time = 0),
                    (this.xflags = 0),
                    (this.os = 0),
                    (this.extra = null),
                    (this.extra_len = 0),
                    (this.name = ""),
                    (this.comment = ""),
                    (this.hcrc = 0),
                    (this.done = !1);
                };
              },
              {}
            ],
            48: [
              function(e, t, r) {
                "use strict";
                t.exports = function(e, t) {
                  var r,
                    n,
                    i,
                    s,
                    o,
                    a,
                    p,
                    u,
                    c,
                    d,
                    l,
                    h,
                    m,
                    g,
                    y,
                    f,
                    _,
                    b,
                    w,
                    v,
                    q,
                    k,
                    E,
                    T,
                    P;
                  (r = e.state),
                    (n = e.next_in),
                    (T = e.input),
                    (i = n + (e.avail_in - 5)),
                    (s = e.next_out),
                    (P = e.output),
                    (o = s - (t - e.avail_out)),
                    (a = s + (e.avail_out - 257)),
                    (p = r.dmax),
                    (u = r.wsize),
                    (c = r.whave),
                    (d = r.wnext),
                    (l = r.window),
                    (h = r.hold),
                    (m = r.bits),
                    (g = r.lencode),
                    (y = r.distcode),
                    (f = (1 << r.lenbits) - 1),
                    (_ = (1 << r.distbits) - 1);
                  e: do {
                    m < 15 &&
                      ((h += T[n++] << m),
                      (m += 8),
                      (h += T[n++] << m),
                      (m += 8)),
                      (b = g[h & f]);
                    t: for (;;) {
                      if (
                        ((h >>>= w = b >>> 24),
                        (m -= w),
                        0 == (w = (b >>> 16) & 255))
                      )
                        P[s++] = 65535 & b;
                      else {
                        if (!(16 & w)) {
                          if (0 == (64 & w)) {
                            b = g[(65535 & b) + (h & ((1 << w) - 1))];
                            continue t;
                          }
                          if (32 & w) {
                            r.mode = 12;
                            break e;
                          }
                          (e.msg = "invalid literal/length code"),
                            (r.mode = 30);
                          break e;
                        }
                        (v = 65535 & b),
                          (w &= 15) &&
                            (m < w && ((h += T[n++] << m), (m += 8)),
                            (v += h & ((1 << w) - 1)),
                            (h >>>= w),
                            (m -= w)),
                          m < 15 &&
                            ((h += T[n++] << m),
                            (m += 8),
                            (h += T[n++] << m),
                            (m += 8)),
                          (b = y[h & _]);
                        r: for (;;) {
                          if (
                            ((h >>>= w = b >>> 24),
                            (m -= w),
                            !(16 & (w = (b >>> 16) & 255)))
                          ) {
                            if (0 == (64 & w)) {
                              b = y[(65535 & b) + (h & ((1 << w) - 1))];
                              continue r;
                            }
                            (e.msg = "invalid distance code"), (r.mode = 30);
                            break e;
                          }
                          if (
                            ((q = 65535 & b),
                            m < (w &= 15) &&
                              ((h += T[n++] << m),
                              (m += 8) < w && ((h += T[n++] << m), (m += 8))),
                            p < (q += h & ((1 << w) - 1)))
                          ) {
                            (e.msg = "invalid distance too far back"),
                              (r.mode = 30);
                            break e;
                          }
                          if (((h >>>= w), (m -= w), (w = s - o) < q)) {
                            if (c < (w = q - w) && r.sane) {
                              (e.msg = "invalid distance too far back"),
                                (r.mode = 30);
                              break e;
                            }
                            if (((E = l), (k = 0) === d)) {
                              if (((k += u - w), w < v)) {
                                for (v -= w; (P[s++] = l[k++]), --w; );
                                (k = s - q), (E = P);
                              }
                            } else if (d < w) {
                              if (((k += u + d - w), (w -= d) < v)) {
                                for (v -= w; (P[s++] = l[k++]), --w; );
                                if (((k = 0), d < v)) {
                                  for (v -= w = d; (P[s++] = l[k++]), --w; );
                                  (k = s - q), (E = P);
                                }
                              }
                            } else if (((k += d - w), w < v)) {
                              for (v -= w; (P[s++] = l[k++]), --w; );
                              (k = s - q), (E = P);
                            }
                            for (; 2 < v; )
                              (P[s++] = E[k++]),
                                (P[s++] = E[k++]),
                                (P[s++] = E[k++]),
                                (v -= 3);
                            v &&
                              ((P[s++] = E[k++]), 1 < v && (P[s++] = E[k++]));
                          } else {
                            for (
                              k = s - q;
                              (P[s++] = P[k++]),
                                (P[s++] = P[k++]),
                                (P[s++] = P[k++]),
                                2 < (v -= 3);

                            );
                            v &&
                              ((P[s++] = P[k++]), 1 < v && (P[s++] = P[k++]));
                          }
                          break;
                        }
                      }
                      break;
                    }
                  } while (n < i && s < a);
                  (n -= v = m >> 3),
                    (h &= (1 << (m -= v << 3)) - 1),
                    (e.next_in = n),
                    (e.next_out = s),
                    (e.avail_in = n < i ? i - n + 5 : 5 - (n - i)),
                    (e.avail_out = s < a ? a - s + 257 : 257 - (s - a)),
                    (r.hold = h),
                    (r.bits = m);
                };
              },
              {}
            ],
            49: [
              function(e, t, r) {
                "use strict";
                var n = e("../utils/common"),
                  i = e("./adler32"),
                  s = e("./crc32"),
                  o = e("./inffast"),
                  a = e("./inftrees"),
                  p = -2;
                function u(e) {
                  return (
                    ((e >>> 24) & 255) +
                    ((e >>> 8) & 65280) +
                    ((65280 & e) << 8) +
                    ((255 & e) << 24)
                  );
                }
                function c() {
                  (this.mode = 0),
                    (this.last = !1),
                    (this.wrap = 0),
                    (this.havedict = !1),
                    (this.flags = 0),
                    (this.dmax = 0),
                    (this.check = 0),
                    (this.total = 0),
                    (this.head = null),
                    (this.wbits = 0),
                    (this.wsize = 0),
                    (this.whave = 0),
                    (this.wnext = 0),
                    (this.window = null),
                    (this.hold = 0),
                    (this.bits = 0),
                    (this.length = 0),
                    (this.offset = 0),
                    (this.extra = 0),
                    (this.lencode = null),
                    (this.distcode = null),
                    (this.lenbits = 0),
                    (this.distbits = 0),
                    (this.ncode = 0),
                    (this.nlen = 0),
                    (this.ndist = 0),
                    (this.have = 0),
                    (this.next = null),
                    (this.lens = new n.Buf16(320)),
                    (this.work = new n.Buf16(288)),
                    (this.lendyn = null),
                    (this.distdyn = null),
                    (this.sane = 0),
                    (this.back = 0),
                    (this.was = 0);
                }
                function d(e) {
                  var t;
                  return e && e.state
                    ? ((t = e.state),
                      (e.total_in = e.total_out = t.total = 0),
                      (e.msg = ""),
                      t.wrap && (e.adler = 1 & t.wrap),
                      (t.mode = 1),
                      (t.last = 0),
                      (t.havedict = 0),
                      (t.dmax = 32768),
                      (t.head = null),
                      (t.hold = 0),
                      (t.bits = 0),
                      (t.lencode = t.lendyn = new n.Buf32(852)),
                      (t.distcode = t.distdyn = new n.Buf32(592)),
                      (t.sane = 1),
                      (t.back = -1),
                      0)
                    : p;
                }
                function l(e) {
                  var t;
                  return e && e.state
                    ? (((t = e.state).wsize = 0),
                      (t.whave = 0),
                      (t.wnext = 0),
                      d(e))
                    : p;
                }
                function h(e, t) {
                  var r, n;
                  return e && e.state
                    ? ((n = e.state),
                      t < 0
                        ? ((r = 0), (t = -t))
                        : ((r = 1 + (t >> 4)), t < 48 && (t &= 15)),
                      t && (t < 8 || 15 < t)
                        ? p
                        : (null !== n.window &&
                            n.wbits !== t &&
                            (n.window = null),
                          (n.wrap = r),
                          (n.wbits = t),
                          l(e)))
                    : p;
                }
                function m(e, t) {
                  var r, n;
                  return e
                    ? ((n = new c()),
                      ((e.state = n).window = null),
                      0 !== (r = h(e, t)) && (e.state = null),
                      r)
                    : p;
                }
                var g,
                  y,
                  f = !0;
                function _(e) {
                  if (f) {
                    var t;
                    for (
                      g = new n.Buf32(512), y = new n.Buf32(32), t = 0;
                      t < 144;

                    )
                      e.lens[t++] = 8;
                    for (; t < 256; ) e.lens[t++] = 9;
                    for (; t < 280; ) e.lens[t++] = 7;
                    for (; t < 288; ) e.lens[t++] = 8;
                    for (
                      a(1, e.lens, 0, 288, g, 0, e.work, { bits: 9 }), t = 0;
                      t < 32;

                    )
                      e.lens[t++] = 5;
                    a(2, e.lens, 0, 32, y, 0, e.work, { bits: 5 }), (f = !1);
                  }
                  (e.lencode = g),
                    (e.lenbits = 9),
                    (e.distcode = y),
                    (e.distbits = 5);
                }
                function b(e, t, r, i) {
                  var s,
                    o = e.state;
                  return (
                    null === o.window &&
                      ((o.wsize = 1 << o.wbits),
                      (o.wnext = 0),
                      (o.whave = 0),
                      (o.window = new n.Buf8(o.wsize))),
                    i >= o.wsize
                      ? (n.arraySet(o.window, t, r - o.wsize, o.wsize, 0),
                        (o.wnext = 0),
                        (o.whave = o.wsize))
                      : (i < (s = o.wsize - o.wnext) && (s = i),
                        n.arraySet(o.window, t, r - i, s, o.wnext),
                        (i -= s)
                          ? (n.arraySet(o.window, t, r - i, i, 0),
                            (o.wnext = i),
                            (o.whave = o.wsize))
                          : ((o.wnext += s),
                            o.wnext === o.wsize && (o.wnext = 0),
                            o.whave < o.wsize && (o.whave += s))),
                    0
                  );
                }
                (r.inflateReset = l),
                  (r.inflateReset2 = h),
                  (r.inflateResetKeep = d),
                  (r.inflateInit = function(e) {
                    return m(e, 15);
                  }),
                  (r.inflateInit2 = m),
                  (r.inflate = function(e, t) {
                    var r,
                      c,
                      d,
                      l,
                      h,
                      m,
                      g,
                      y,
                      f,
                      w,
                      v,
                      q,
                      k,
                      E,
                      T,
                      P,
                      x,
                      A,
                      j,
                      O,
                      S,
                      C,
                      R,
                      I,
                      D = 0,
                      L = new n.Buf8(4),
                      G = [
                        16,
                        17,
                        18,
                        0,
                        8,
                        7,
                        9,
                        6,
                        10,
                        5,
                        11,
                        4,
                        12,
                        3,
                        13,
                        2,
                        14,
                        1,
                        15
                      ];
                    if (
                      !e ||
                      !e.state ||
                      !e.output ||
                      (!e.input && 0 !== e.avail_in)
                    )
                      return p;
                    12 === (r = e.state).mode && (r.mode = 13),
                      (h = e.next_out),
                      (d = e.output),
                      (g = e.avail_out),
                      (l = e.next_in),
                      (c = e.input),
                      (m = e.avail_in),
                      (y = r.hold),
                      (f = r.bits),
                      (w = m),
                      (v = g),
                      (C = 0);
                    e: for (;;)
                      switch (r.mode) {
                        case 1:
                          if (0 === r.wrap) {
                            r.mode = 13;
                            break;
                          }
                          for (; f < 16; ) {
                            if (0 === m) break e;
                            m--, (y += c[l++] << f), (f += 8);
                          }
                          if (2 & r.wrap && 35615 === y) {
                            (L[(r.check = 0)] = 255 & y),
                              (L[1] = (y >>> 8) & 255),
                              (r.check = s(r.check, L, 2, 0)),
                              (f = y = 0),
                              (r.mode = 2);
                            break;
                          }
                          if (
                            ((r.flags = 0),
                            r.head && (r.head.done = !1),
                            !(1 & r.wrap) || (((255 & y) << 8) + (y >> 8)) % 31)
                          ) {
                            (e.msg = "incorrect header check"), (r.mode = 30);
                            break;
                          }
                          if (8 != (15 & y)) {
                            (e.msg = "unknown compression method"),
                              (r.mode = 30);
                            break;
                          }
                          if (
                            ((f -= 4),
                            (S = 8 + (15 & (y >>>= 4))),
                            0 === r.wbits)
                          )
                            r.wbits = S;
                          else if (S > r.wbits) {
                            (e.msg = "invalid window size"), (r.mode = 30);
                            break;
                          }
                          (r.dmax = 1 << S),
                            (e.adler = r.check = 1),
                            (r.mode = 512 & y ? 10 : 12),
                            (f = y = 0);
                          break;
                        case 2:
                          for (; f < 16; ) {
                            if (0 === m) break e;
                            m--, (y += c[l++] << f), (f += 8);
                          }
                          if (((r.flags = y), 8 != (255 & r.flags))) {
                            (e.msg = "unknown compression method"),
                              (r.mode = 30);
                            break;
                          }
                          if (57344 & r.flags) {
                            (e.msg = "unknown header flags set"), (r.mode = 30);
                            break;
                          }
                          r.head && (r.head.text = (y >> 8) & 1),
                            512 & r.flags &&
                              ((L[0] = 255 & y),
                              (L[1] = (y >>> 8) & 255),
                              (r.check = s(r.check, L, 2, 0))),
                            (f = y = 0),
                            (r.mode = 3);
                        case 3:
                          for (; f < 32; ) {
                            if (0 === m) break e;
                            m--, (y += c[l++] << f), (f += 8);
                          }
                          r.head && (r.head.time = y),
                            512 & r.flags &&
                              ((L[0] = 255 & y),
                              (L[1] = (y >>> 8) & 255),
                              (L[2] = (y >>> 16) & 255),
                              (L[3] = (y >>> 24) & 255),
                              (r.check = s(r.check, L, 4, 0))),
                            (f = y = 0),
                            (r.mode = 4);
                        case 4:
                          for (; f < 16; ) {
                            if (0 === m) break e;
                            m--, (y += c[l++] << f), (f += 8);
                          }
                          r.head &&
                            ((r.head.xflags = 255 & y), (r.head.os = y >> 8)),
                            512 & r.flags &&
                              ((L[0] = 255 & y),
                              (L[1] = (y >>> 8) & 255),
                              (r.check = s(r.check, L, 2, 0))),
                            (f = y = 0),
                            (r.mode = 5);
                        case 5:
                          if (1024 & r.flags) {
                            for (; f < 16; ) {
                              if (0 === m) break e;
                              m--, (y += c[l++] << f), (f += 8);
                            }
                            (r.length = y),
                              r.head && (r.head.extra_len = y),
                              512 & r.flags &&
                                ((L[0] = 255 & y),
                                (L[1] = (y >>> 8) & 255),
                                (r.check = s(r.check, L, 2, 0))),
                              (f = y = 0);
                          } else r.head && (r.head.extra = null);
                          r.mode = 6;
                        case 6:
                          if (
                            1024 & r.flags &&
                            (m < (q = r.length) && (q = m),
                            q &&
                              (r.head &&
                                ((S = r.head.extra_len - r.length),
                                r.head.extra ||
                                  (r.head.extra = new Array(r.head.extra_len)),
                                n.arraySet(r.head.extra, c, l, q, S)),
                              512 & r.flags && (r.check = s(r.check, c, q, l)),
                              (m -= q),
                              (l += q),
                              (r.length -= q)),
                            r.length)
                          )
                            break e;
                          (r.length = 0), (r.mode = 7);
                        case 7:
                          if (2048 & r.flags) {
                            if (0 === m) break e;
                            for (
                              q = 0;
                              (S = c[l + q++]),
                                r.head &&
                                  S &&
                                  r.length < 65536 &&
                                  (r.head.name += String.fromCharCode(S)),
                                S && q < m;

                            );
                            if (
                              (512 & r.flags && (r.check = s(r.check, c, q, l)),
                              (m -= q),
                              (l += q),
                              S)
                            )
                              break e;
                          } else r.head && (r.head.name = null);
                          (r.length = 0), (r.mode = 8);
                        case 8:
                          if (4096 & r.flags) {
                            if (0 === m) break e;
                            for (
                              q = 0;
                              (S = c[l + q++]),
                                r.head &&
                                  S &&
                                  r.length < 65536 &&
                                  (r.head.comment += String.fromCharCode(S)),
                                S && q < m;

                            );
                            if (
                              (512 & r.flags && (r.check = s(r.check, c, q, l)),
                              (m -= q),
                              (l += q),
                              S)
                            )
                              break e;
                          } else r.head && (r.head.comment = null);
                          r.mode = 9;
                        case 9:
                          if (512 & r.flags) {
                            for (; f < 16; ) {
                              if (0 === m) break e;
                              m--, (y += c[l++] << f), (f += 8);
                            }
                            if (y !== (65535 & r.check)) {
                              (e.msg = "header crc mismatch"), (r.mode = 30);
                              break;
                            }
                            f = y = 0;
                          }
                          r.head &&
                            ((r.head.hcrc = (r.flags >> 9) & 1),
                            (r.head.done = !0)),
                            (e.adler = r.check = 0),
                            (r.mode = 12);
                          break;
                        case 10:
                          for (; f < 32; ) {
                            if (0 === m) break e;
                            m--, (y += c[l++] << f), (f += 8);
                          }
                          (e.adler = r.check = u(y)),
                            (f = y = 0),
                            (r.mode = 11);
                        case 11:
                          if (0 === r.havedict)
                            return (
                              (e.next_out = h),
                              (e.avail_out = g),
                              (e.next_in = l),
                              (e.avail_in = m),
                              (r.hold = y),
                              (r.bits = f),
                              2
                            );
                          (e.adler = r.check = 1), (r.mode = 12);
                        case 12:
                          if (5 === t || 6 === t) break e;
                        case 13:
                          if (r.last) {
                            (y >>>= 7 & f), (f -= 7 & f), (r.mode = 27);
                            break;
                          }
                          for (; f < 3; ) {
                            if (0 === m) break e;
                            m--, (y += c[l++] << f), (f += 8);
                          }
                          switch (
                            ((r.last = 1 & y), (f -= 1), 3 & (y >>>= 1))
                          ) {
                            case 0:
                              r.mode = 14;
                              break;
                            case 1:
                              if ((_(r), (r.mode = 20), 6 !== t)) break;
                              (y >>>= 2), (f -= 2);
                              break e;
                            case 2:
                              r.mode = 17;
                              break;
                            case 3:
                              (e.msg = "invalid block type"), (r.mode = 30);
                          }
                          (y >>>= 2), (f -= 2);
                          break;
                        case 14:
                          for (y >>>= 7 & f, f -= 7 & f; f < 32; ) {
                            if (0 === m) break e;
                            m--, (y += c[l++] << f), (f += 8);
                          }
                          if ((65535 & y) != ((y >>> 16) ^ 65535)) {
                            (e.msg = "invalid stored block lengths"),
                              (r.mode = 30);
                            break;
                          }
                          if (
                            ((r.length = 65535 & y),
                            (f = y = 0),
                            (r.mode = 15),
                            6 === t)
                          )
                            break e;
                        case 15:
                          r.mode = 16;
                        case 16:
                          if ((q = r.length)) {
                            if ((m < q && (q = m), g < q && (q = g), 0 === q))
                              break e;
                            n.arraySet(d, c, l, q, h),
                              (m -= q),
                              (l += q),
                              (g -= q),
                              (h += q),
                              (r.length -= q);
                            break;
                          }
                          r.mode = 12;
                          break;
                        case 17:
                          for (; f < 14; ) {
                            if (0 === m) break e;
                            m--, (y += c[l++] << f), (f += 8);
                          }
                          if (
                            ((r.nlen = 257 + (31 & y)),
                            (y >>>= 5),
                            (f -= 5),
                            (r.ndist = 1 + (31 & y)),
                            (y >>>= 5),
                            (f -= 5),
                            (r.ncode = 4 + (15 & y)),
                            (y >>>= 4),
                            (f -= 4),
                            286 < r.nlen || 30 < r.ndist)
                          ) {
                            (e.msg = "too many length or distance symbols"),
                              (r.mode = 30);
                            break;
                          }
                          (r.have = 0), (r.mode = 18);
                        case 18:
                          for (; r.have < r.ncode; ) {
                            for (; f < 3; ) {
                              if (0 === m) break e;
                              m--, (y += c[l++] << f), (f += 8);
                            }
                            (r.lens[G[r.have++]] = 7 & y), (y >>>= 3), (f -= 3);
                          }
                          for (; r.have < 19; ) r.lens[G[r.have++]] = 0;
                          if (
                            ((r.lencode = r.lendyn),
                            (r.lenbits = 7),
                            (R = { bits: r.lenbits }),
                            (C = a(0, r.lens, 0, 19, r.lencode, 0, r.work, R)),
                            (r.lenbits = R.bits),
                            C)
                          ) {
                            (e.msg = "invalid code lengths set"), (r.mode = 30);
                            break;
                          }
                          (r.have = 0), (r.mode = 19);
                        case 19:
                          for (; r.have < r.nlen + r.ndist; ) {
                            for (
                              ;
                              (P =
                                ((D = r.lencode[y & ((1 << r.lenbits) - 1)]) >>>
                                  16) &
                                255),
                                (x = 65535 & D),
                                !((T = D >>> 24) <= f);

                            ) {
                              if (0 === m) break e;
                              m--, (y += c[l++] << f), (f += 8);
                            }
                            if (x < 16)
                              (y >>>= T), (f -= T), (r.lens[r.have++] = x);
                            else {
                              if (16 === x) {
                                for (I = T + 2; f < I; ) {
                                  if (0 === m) break e;
                                  m--, (y += c[l++] << f), (f += 8);
                                }
                                if (((y >>>= T), (f -= T), 0 === r.have)) {
                                  (e.msg = "invalid bit length repeat"),
                                    (r.mode = 30);
                                  break;
                                }
                                (S = r.lens[r.have - 1]),
                                  (q = 3 + (3 & y)),
                                  (y >>>= 2),
                                  (f -= 2);
                              } else if (17 === x) {
                                for (I = T + 3; f < I; ) {
                                  if (0 === m) break e;
                                  m--, (y += c[l++] << f), (f += 8);
                                }
                                (f -= T),
                                  (S = 0),
                                  (q = 3 + (7 & (y >>>= T))),
                                  (y >>>= 3),
                                  (f -= 3);
                              } else {
                                for (I = T + 7; f < I; ) {
                                  if (0 === m) break e;
                                  m--, (y += c[l++] << f), (f += 8);
                                }
                                (f -= T),
                                  (S = 0),
                                  (q = 11 + (127 & (y >>>= T))),
                                  (y >>>= 7),
                                  (f -= 7);
                              }
                              if (r.have + q > r.nlen + r.ndist) {
                                (e.msg = "invalid bit length repeat"),
                                  (r.mode = 30);
                                break;
                              }
                              for (; q--; ) r.lens[r.have++] = S;
                            }
                          }
                          if (30 === r.mode) break;
                          if (0 === r.lens[256]) {
                            (e.msg = "invalid code -- missing end-of-block"),
                              (r.mode = 30);
                            break;
                          }
                          if (
                            ((r.lenbits = 9),
                            (R = { bits: r.lenbits }),
                            (C = a(
                              1,
                              r.lens,
                              0,
                              r.nlen,
                              r.lencode,
                              0,
                              r.work,
                              R
                            )),
                            (r.lenbits = R.bits),
                            C)
                          ) {
                            (e.msg = "invalid literal/lengths set"),
                              (r.mode = 30);
                            break;
                          }
                          if (
                            ((r.distbits = 6),
                            (r.distcode = r.distdyn),
                            (R = { bits: r.distbits }),
                            (C = a(
                              2,
                              r.lens,
                              r.nlen,
                              r.ndist,
                              r.distcode,
                              0,
                              r.work,
                              R
                            )),
                            (r.distbits = R.bits),
                            C)
                          ) {
                            (e.msg = "invalid distances set"), (r.mode = 30);
                            break;
                          }
                          if (((r.mode = 20), 6 === t)) break e;
                        case 20:
                          r.mode = 21;
                        case 21:
                          if (6 <= m && 258 <= g) {
                            (e.next_out = h),
                              (e.avail_out = g),
                              (e.next_in = l),
                              (e.avail_in = m),
                              (r.hold = y),
                              (r.bits = f),
                              o(e, v),
                              (h = e.next_out),
                              (d = e.output),
                              (g = e.avail_out),
                              (l = e.next_in),
                              (c = e.input),
                              (m = e.avail_in),
                              (y = r.hold),
                              (f = r.bits),
                              12 === r.mode && (r.back = -1);
                            break;
                          }
                          for (
                            r.back = 0;
                            (P =
                              ((D = r.lencode[y & ((1 << r.lenbits) - 1)]) >>>
                                16) &
                              255),
                              (x = 65535 & D),
                              !((T = D >>> 24) <= f);

                          ) {
                            if (0 === m) break e;
                            m--, (y += c[l++] << f), (f += 8);
                          }
                          if (P && 0 == (240 & P)) {
                            for (
                              A = T, j = P, O = x;
                              (P =
                                ((D =
                                  r.lencode[
                                    O + ((y & ((1 << (A + j)) - 1)) >> A)
                                  ]) >>>
                                  16) &
                                255),
                                (x = 65535 & D),
                                !(A + (T = D >>> 24) <= f);

                            ) {
                              if (0 === m) break e;
                              m--, (y += c[l++] << f), (f += 8);
                            }
                            (y >>>= A), (f -= A), (r.back += A);
                          }
                          if (
                            ((y >>>= T),
                            (f -= T),
                            (r.back += T),
                            (r.length = x),
                            0 === P)
                          ) {
                            r.mode = 26;
                            break;
                          }
                          if (32 & P) {
                            (r.back = -1), (r.mode = 12);
                            break;
                          }
                          if (64 & P) {
                            (e.msg = "invalid literal/length code"),
                              (r.mode = 30);
                            break;
                          }
                          (r.extra = 15 & P), (r.mode = 22);
                        case 22:
                          if (r.extra) {
                            for (I = r.extra; f < I; ) {
                              if (0 === m) break e;
                              m--, (y += c[l++] << f), (f += 8);
                            }
                            (r.length += y & ((1 << r.extra) - 1)),
                              (y >>>= r.extra),
                              (f -= r.extra),
                              (r.back += r.extra);
                          }
                          (r.was = r.length), (r.mode = 23);
                        case 23:
                          for (
                            ;
                            (P =
                              ((D = r.distcode[y & ((1 << r.distbits) - 1)]) >>>
                                16) &
                              255),
                              (x = 65535 & D),
                              !((T = D >>> 24) <= f);

                          ) {
                            if (0 === m) break e;
                            m--, (y += c[l++] << f), (f += 8);
                          }
                          if (0 == (240 & P)) {
                            for (
                              A = T, j = P, O = x;
                              (P =
                                ((D =
                                  r.distcode[
                                    O + ((y & ((1 << (A + j)) - 1)) >> A)
                                  ]) >>>
                                  16) &
                                255),
                                (x = 65535 & D),
                                !(A + (T = D >>> 24) <= f);

                            ) {
                              if (0 === m) break e;
                              m--, (y += c[l++] << f), (f += 8);
                            }
                            (y >>>= A), (f -= A), (r.back += A);
                          }
                          if (((y >>>= T), (f -= T), (r.back += T), 64 & P)) {
                            (e.msg = "invalid distance code"), (r.mode = 30);
                            break;
                          }
                          (r.offset = x), (r.extra = 15 & P), (r.mode = 24);
                        case 24:
                          if (r.extra) {
                            for (I = r.extra; f < I; ) {
                              if (0 === m) break e;
                              m--, (y += c[l++] << f), (f += 8);
                            }
                            (r.offset += y & ((1 << r.extra) - 1)),
                              (y >>>= r.extra),
                              (f -= r.extra),
                              (r.back += r.extra);
                          }
                          if (r.offset > r.dmax) {
                            (e.msg = "invalid distance too far back"),
                              (r.mode = 30);
                            break;
                          }
                          r.mode = 25;
                        case 25:
                          if (0 === g) break e;
                          if (((q = v - g), r.offset > q)) {
                            if ((q = r.offset - q) > r.whave && r.sane) {
                              (e.msg = "invalid distance too far back"),
                                (r.mode = 30);
                              break;
                            }
                            (k =
                              q > r.wnext
                                ? ((q -= r.wnext), r.wsize - q)
                                : r.wnext - q),
                              q > r.length && (q = r.length),
                              (E = r.window);
                          } else (E = d), (k = h - r.offset), (q = r.length);
                          for (
                            g < q && (q = g), g -= q, r.length -= q;
                            (d[h++] = E[k++]), --q;

                          );
                          0 === r.length && (r.mode = 21);
                          break;
                        case 26:
                          if (0 === g) break e;
                          (d[h++] = r.length), g--, (r.mode = 21);
                          break;
                        case 27:
                          if (r.wrap) {
                            for (; f < 32; ) {
                              if (0 === m) break e;
                              m--, (y |= c[l++] << f), (f += 8);
                            }
                            if (
                              ((v -= g),
                              (e.total_out += v),
                              (r.total += v),
                              v &&
                                (e.adler = r.check = r.flags
                                  ? s(r.check, d, v, h - v)
                                  : i(r.check, d, v, h - v)),
                              (v = g),
                              (r.flags ? y : u(y)) !== r.check)
                            ) {
                              (e.msg = "incorrect data check"), (r.mode = 30);
                              break;
                            }
                            f = y = 0;
                          }
                          r.mode = 28;
                        case 28:
                          if (r.wrap && r.flags) {
                            for (; f < 32; ) {
                              if (0 === m) break e;
                              m--, (y += c[l++] << f), (f += 8);
                            }
                            if (y !== (4294967295 & r.total)) {
                              (e.msg = "incorrect length check"), (r.mode = 30);
                              break;
                            }
                            f = y = 0;
                          }
                          r.mode = 29;
                        case 29:
                          C = 1;
                          break e;
                        case 30:
                          C = -3;
                          break e;
                        case 31:
                          return -4;
                        case 32:
                        default:
                          return p;
                      }
                    return (
                      (e.next_out = h),
                      (e.avail_out = g),
                      (e.next_in = l),
                      (e.avail_in = m),
                      (r.hold = y),
                      (r.bits = f),
                      (r.wsize ||
                        (v !== e.avail_out &&
                          r.mode < 30 &&
                          (r.mode < 27 || 4 !== t))) &&
                      b(e, e.output, e.next_out, v - e.avail_out)
                        ? ((r.mode = 31), -4)
                        : ((w -= e.avail_in),
                          (v -= e.avail_out),
                          (e.total_in += w),
                          (e.total_out += v),
                          (r.total += v),
                          r.wrap &&
                            v &&
                            (e.adler = r.check = r.flags
                              ? s(r.check, d, v, e.next_out - v)
                              : i(r.check, d, v, e.next_out - v)),
                          (e.data_type =
                            r.bits +
                            (r.last ? 64 : 0) +
                            (12 === r.mode ? 128 : 0) +
                            (20 === r.mode || 15 === r.mode ? 256 : 0)),
                          ((0 == w && 0 === v) || 4 === t) &&
                            0 === C &&
                            (C = -5),
                          C)
                    );
                  }),
                  (r.inflateEnd = function(e) {
                    if (!e || !e.state) return p;
                    var t = e.state;
                    return t.window && (t.window = null), (e.state = null), 0;
                  }),
                  (r.inflateGetHeader = function(e, t) {
                    var r;
                    return e && e.state
                      ? 0 == (2 & (r = e.state).wrap)
                        ? p
                        : (((r.head = t).done = !1), 0)
                      : p;
                  }),
                  (r.inflateSetDictionary = function(e, t) {
                    var r,
                      n = t.length;
                    return e && e.state
                      ? 0 !== (r = e.state).wrap && 11 !== r.mode
                        ? p
                        : 11 === r.mode && i(1, t, n, 0) !== r.check
                        ? -3
                        : b(e, t, n, n)
                        ? ((r.mode = 31), -4)
                        : ((r.havedict = 1), 0)
                      : p;
                  }),
                  (r.inflateInfo = "pako inflate (from Nodeca project)");
              },
              {
                "../utils/common": 41,
                "./adler32": 43,
                "./crc32": 45,
                "./inffast": 48,
                "./inftrees": 50
              }
            ],
            50: [
              function(e, t, r) {
                "use strict";
                var n = e("../utils/common"),
                  i = [
                    3,
                    4,
                    5,
                    6,
                    7,
                    8,
                    9,
                    10,
                    11,
                    13,
                    15,
                    17,
                    19,
                    23,
                    27,
                    31,
                    35,
                    43,
                    51,
                    59,
                    67,
                    83,
                    99,
                    115,
                    131,
                    163,
                    195,
                    227,
                    258,
                    0,
                    0
                  ],
                  s = [
                    16,
                    16,
                    16,
                    16,
                    16,
                    16,
                    16,
                    16,
                    17,
                    17,
                    17,
                    17,
                    18,
                    18,
                    18,
                    18,
                    19,
                    19,
                    19,
                    19,
                    20,
                    20,
                    20,
                    20,
                    21,
                    21,
                    21,
                    21,
                    16,
                    72,
                    78
                  ],
                  o = [
                    1,
                    2,
                    3,
                    4,
                    5,
                    7,
                    9,
                    13,
                    17,
                    25,
                    33,
                    49,
                    65,
                    97,
                    129,
                    193,
                    257,
                    385,
                    513,
                    769,
                    1025,
                    1537,
                    2049,
                    3073,
                    4097,
                    6145,
                    8193,
                    12289,
                    16385,
                    24577,
                    0,
                    0
                  ],
                  a = [
                    16,
                    16,
                    16,
                    16,
                    17,
                    17,
                    18,
                    18,
                    19,
                    19,
                    20,
                    20,
                    21,
                    21,
                    22,
                    22,
                    23,
                    23,
                    24,
                    24,
                    25,
                    25,
                    26,
                    26,
                    27,
                    27,
                    28,
                    28,
                    29,
                    29,
                    64,
                    64
                  ];
                t.exports = function(e, t, r, p, u, c, d, l) {
                  var h,
                    m,
                    g,
                    y,
                    f,
                    _,
                    b,
                    w,
                    v,
                    q = l.bits,
                    k = 0,
                    E = 0,
                    T = 0,
                    P = 0,
                    x = 0,
                    A = 0,
                    j = 0,
                    O = 0,
                    S = 0,
                    C = 0,
                    R = null,
                    I = 0,
                    D = new n.Buf16(16),
                    L = new n.Buf16(16),
                    G = null,
                    z = 0;
                  for (k = 0; k <= 15; k++) D[k] = 0;
                  for (E = 0; E < p; E++) D[t[r + E]]++;
                  for (x = q, P = 15; 1 <= P && 0 === D[P]; P--);
                  if ((P < x && (x = P), 0 === P))
                    return (
                      (u[c++] = 20971520), (u[c++] = 20971520), (l.bits = 1), 0
                    );
                  for (T = 1; T < P && 0 === D[T]; T++);
                  for (x < T && (x = T), k = O = 1; k <= 15; k++)
                    if (((O <<= 1), (O -= D[k]) < 0)) return -1;
                  if (0 < O && (0 === e || 1 !== P)) return -1;
                  for (L[1] = 0, k = 1; k < 15; k++) L[k + 1] = L[k] + D[k];
                  for (E = 0; E < p; E++)
                    0 !== t[r + E] && (d[L[t[r + E]]++] = E);
                  if (
                    ((_ =
                      0 === e
                        ? ((R = G = d), 19)
                        : 1 === e
                        ? ((R = i), (I -= 257), (G = s), (z -= 257), 256)
                        : ((R = o), (G = a), -1)),
                    (k = T),
                    (f = c),
                    (j = E = C = 0),
                    (g = -1),
                    (y = (S = 1 << (A = x)) - 1),
                    (1 === e && 852 < S) || (2 === e && 592 < S))
                  )
                    return 1;
                  for (;;) {
                    for (
                      b = k - j,
                        v =
                          d[E] < _
                            ? ((w = 0), d[E])
                            : d[E] > _
                            ? ((w = G[z + d[E]]), R[I + d[E]])
                            : ((w = 96), 0),
                        h = 1 << (k - j),
                        T = m = 1 << A;
                      (u[f + (C >> j) + (m -= h)] =
                        (b << 24) | (w << 16) | v | 0),
                        0 !== m;

                    );
                    for (h = 1 << (k - 1); C & h; ) h >>= 1;
                    if (
                      (0 !== h ? ((C &= h - 1), (C += h)) : (C = 0),
                      E++,
                      0 == --D[k])
                    ) {
                      if (k === P) break;
                      k = t[r + d[E]];
                    }
                    if (x < k && (C & y) !== g) {
                      for (
                        0 === j && (j = x), f += T, O = 1 << (A = k - j);
                        A + j < P && !((O -= D[A + j]) <= 0);

                      )
                        A++, (O <<= 1);
                      if (
                        ((S += 1 << A),
                        (1 === e && 852 < S) || (2 === e && 592 < S))
                      )
                        return 1;
                      u[(g = C & y)] = (x << 24) | (A << 16) | (f - c) | 0;
                    }
                  }
                  return (
                    0 !== C && (u[f + C] = ((k - j) << 24) | (64 << 16) | 0),
                    (l.bits = x),
                    0
                  );
                };
              },
              { "../utils/common": 41 }
            ],
            51: [
              function(e, t, r) {
                "use strict";
                t.exports = {
                  2: "need dictionary",
                  1: "stream end",
                  0: "",
                  "-1": "file error",
                  "-2": "stream error",
                  "-3": "data error",
                  "-4": "insufficient memory",
                  "-5": "buffer error",
                  "-6": "incompatible version"
                };
              },
              {}
            ],
            52: [
              function(e, t, r) {
                "use strict";
                var n = e("../utils/common");
                function i(e) {
                  for (var t = e.length; 0 <= --t; ) e[t] = 0;
                }
                var s = 256,
                  o = 286,
                  a = 30,
                  p = 15,
                  u = [
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    1,
                    1,
                    1,
                    1,
                    2,
                    2,
                    2,
                    2,
                    3,
                    3,
                    3,
                    3,
                    4,
                    4,
                    4,
                    4,
                    5,
                    5,
                    5,
                    5,
                    0
                  ],
                  c = [
                    0,
                    0,
                    0,
                    0,
                    1,
                    1,
                    2,
                    2,
                    3,
                    3,
                    4,
                    4,
                    5,
                    5,
                    6,
                    6,
                    7,
                    7,
                    8,
                    8,
                    9,
                    9,
                    10,
                    10,
                    11,
                    11,
                    12,
                    12,
                    13,
                    13
                  ],
                  d = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 3, 7],
                  l = [
                    16,
                    17,
                    18,
                    0,
                    8,
                    7,
                    9,
                    6,
                    10,
                    5,
                    11,
                    4,
                    12,
                    3,
                    13,
                    2,
                    14,
                    1,
                    15
                  ],
                  h = new Array(576);
                i(h);
                var m = new Array(60);
                i(m);
                var g = new Array(512);
                i(g);
                var y = new Array(256);
                i(y);
                var f = new Array(29);
                i(f);
                var _,
                  b,
                  w,
                  v = new Array(a);
                function q(e, t, r, n, i) {
                  (this.static_tree = e),
                    (this.extra_bits = t),
                    (this.extra_base = r),
                    (this.elems = n),
                    (this.max_length = i),
                    (this.has_stree = e && e.length);
                }
                function k(e, t) {
                  (this.dyn_tree = e),
                    (this.max_code = 0),
                    (this.stat_desc = t);
                }
                function E(e) {
                  return e < 256 ? g[e] : g[256 + (e >>> 7)];
                }
                function T(e, t) {
                  (e.pending_buf[e.pending++] = 255 & t),
                    (e.pending_buf[e.pending++] = (t >>> 8) & 255);
                }
                function P(e, t, r) {
                  e.bi_valid > 16 - r
                    ? ((e.bi_buf |= (t << e.bi_valid) & 65535),
                      T(e, e.bi_buf),
                      (e.bi_buf = t >> (16 - e.bi_valid)),
                      (e.bi_valid += r - 16))
                    : ((e.bi_buf |= (t << e.bi_valid) & 65535),
                      (e.bi_valid += r));
                }
                function x(e, t, r) {
                  P(e, r[2 * t], r[2 * t + 1]);
                }
                function A(e, t) {
                  for (
                    var r = 0;
                    (r |= 1 & e), (e >>>= 1), (r <<= 1), 0 < --t;

                  );
                  return r >>> 1;
                }
                function j(e, t, r) {
                  var n,
                    i,
                    s = new Array(16),
                    o = 0;
                  for (n = 1; n <= p; n++) s[n] = o = (o + r[n - 1]) << 1;
                  for (i = 0; i <= t; i++) {
                    var a = e[2 * i + 1];
                    0 !== a && (e[2 * i] = A(s[a]++, a));
                  }
                }
                function O(e) {
                  var t;
                  for (t = 0; t < o; t++) e.dyn_ltree[2 * t] = 0;
                  for (t = 0; t < a; t++) e.dyn_dtree[2 * t] = 0;
                  for (t = 0; t < 19; t++) e.bl_tree[2 * t] = 0;
                  (e.dyn_ltree[512] = 1),
                    (e.opt_len = e.static_len = 0),
                    (e.last_lit = e.matches = 0);
                }
                function S(e) {
                  8 < e.bi_valid
                    ? T(e, e.bi_buf)
                    : 0 < e.bi_valid && (e.pending_buf[e.pending++] = e.bi_buf),
                    (e.bi_buf = 0),
                    (e.bi_valid = 0);
                }
                function C(e, t, r, n) {
                  var i = 2 * t,
                    s = 2 * r;
                  return e[i] < e[s] || (e[i] === e[s] && n[t] <= n[r]);
                }
                function R(e, t, r) {
                  for (
                    var n = e.heap[r], i = r << 1;
                    i <= e.heap_len &&
                    (i < e.heap_len &&
                      C(t, e.heap[i + 1], e.heap[i], e.depth) &&
                      i++,
                    !C(t, n, e.heap[i], e.depth));

                  )
                    (e.heap[r] = e.heap[i]), (r = i), (i <<= 1);
                  e.heap[r] = n;
                }
                function I(e, t, r) {
                  var n,
                    i,
                    o,
                    a,
                    p = 0;
                  if (0 !== e.last_lit)
                    for (
                      ;
                      (n =
                        (e.pending_buf[e.d_buf + 2 * p] << 8) |
                        e.pending_buf[e.d_buf + 2 * p + 1]),
                        (i = e.pending_buf[e.l_buf + p]),
                        p++,
                        0 === n
                          ? x(e, i, t)
                          : (x(e, (o = y[i]) + s + 1, t),
                            0 !== (a = u[o]) && P(e, (i -= f[o]), a),
                            x(e, (o = E(--n)), r),
                            0 !== (a = c[o]) && P(e, (n -= v[o]), a)),
                        p < e.last_lit;

                    );
                  x(e, 256, t);
                }
                function D(e, t) {
                  var r,
                    n,
                    i,
                    s = t.dyn_tree,
                    o = t.stat_desc.static_tree,
                    a = t.stat_desc.has_stree,
                    u = t.stat_desc.elems,
                    c = -1;
                  for (e.heap_len = 0, e.heap_max = 573, r = 0; r < u; r++)
                    0 !== s[2 * r]
                      ? ((e.heap[++e.heap_len] = c = r), (e.depth[r] = 0))
                      : (s[2 * r + 1] = 0);
                  for (; e.heap_len < 2; )
                    (s[2 * (i = e.heap[++e.heap_len] = c < 2 ? ++c : 0)] = 1),
                      (e.depth[i] = 0),
                      e.opt_len--,
                      a && (e.static_len -= o[2 * i + 1]);
                  for (t.max_code = c, r = e.heap_len >> 1; 1 <= r; r--)
                    R(e, s, r);
                  for (
                    i = u;
                    (r = e.heap[1]),
                      (e.heap[1] = e.heap[e.heap_len--]),
                      R(e, s, 1),
                      (n = e.heap[1]),
                      (e.heap[--e.heap_max] = r),
                      (e.heap[--e.heap_max] = n),
                      (s[2 * i] = s[2 * r] + s[2 * n]),
                      (e.depth[i] =
                        (e.depth[r] >= e.depth[n] ? e.depth[r] : e.depth[n]) +
                        1),
                      (s[2 * r + 1] = s[2 * n + 1] = i),
                      (e.heap[1] = i++),
                      R(e, s, 1),
                      2 <= e.heap_len;

                  );
                  (e.heap[--e.heap_max] = e.heap[1]),
                    (function(e, t) {
                      var r,
                        n,
                        i,
                        s,
                        o,
                        a,
                        u = t.dyn_tree,
                        c = t.max_code,
                        d = t.stat_desc.static_tree,
                        l = t.stat_desc.has_stree,
                        h = t.stat_desc.extra_bits,
                        m = t.stat_desc.extra_base,
                        g = t.stat_desc.max_length,
                        y = 0;
                      for (s = 0; s <= p; s++) e.bl_count[s] = 0;
                      for (
                        u[2 * e.heap[e.heap_max] + 1] = 0, r = e.heap_max + 1;
                        r < 573;
                        r++
                      )
                        g < (s = u[2 * u[2 * (n = e.heap[r]) + 1] + 1] + 1) &&
                          ((s = g), y++),
                          (u[2 * n + 1] = s),
                          c < n ||
                            (e.bl_count[s]++,
                            (o = 0),
                            m <= n && (o = h[n - m]),
                            (a = u[2 * n]),
                            (e.opt_len += a * (s + o)),
                            l && (e.static_len += a * (d[2 * n + 1] + o)));
                      if (0 !== y) {
                        do {
                          for (s = g - 1; 0 === e.bl_count[s]; ) s--;
                          e.bl_count[s]--,
                            (e.bl_count[s + 1] += 2),
                            e.bl_count[g]--,
                            (y -= 2);
                        } while (0 < y);
                        for (s = g; 0 !== s; s--)
                          for (n = e.bl_count[s]; 0 !== n; )
                            c < (i = e.heap[--r]) ||
                              (u[2 * i + 1] !== s &&
                                ((e.opt_len += (s - u[2 * i + 1]) * u[2 * i]),
                                (u[2 * i + 1] = s)),
                              n--);
                      }
                    })(e, t),
                    j(s, c, e.bl_count);
                }
                function L(e, t, r) {
                  var n,
                    i,
                    s = -1,
                    o = t[1],
                    a = 0,
                    p = 7,
                    u = 4;
                  for (
                    0 === o && ((p = 138), (u = 3)),
                      t[2 * (r + 1) + 1] = 65535,
                      n = 0;
                    n <= r;
                    n++
                  )
                    (i = o),
                      (o = t[2 * (n + 1) + 1]),
                      (++a < p && i === o) ||
                        (a < u
                          ? (e.bl_tree[2 * i] += a)
                          : 0 !== i
                          ? (i !== s && e.bl_tree[2 * i]++, e.bl_tree[32]++)
                          : a <= 10
                          ? e.bl_tree[34]++
                          : e.bl_tree[36]++,
                        (s = i),
                        (u =
                          (a = 0) === o
                            ? ((p = 138), 3)
                            : i === o
                            ? ((p = 6), 3)
                            : ((p = 7), 4)));
                }
                function G(e, t, r) {
                  var n,
                    i,
                    s = -1,
                    o = t[1],
                    a = 0,
                    p = 7,
                    u = 4;
                  for (0 === o && ((p = 138), (u = 3)), n = 0; n <= r; n++)
                    if (
                      ((i = o), (o = t[2 * (n + 1) + 1]), !(++a < p && i === o))
                    ) {
                      if (a < u) for (; x(e, i, e.bl_tree), 0 != --a; );
                      else
                        0 !== i
                          ? (i !== s && (x(e, i, e.bl_tree), a--),
                            x(e, 16, e.bl_tree),
                            P(e, a - 3, 2))
                          : a <= 10
                          ? (x(e, 17, e.bl_tree), P(e, a - 3, 3))
                          : (x(e, 18, e.bl_tree), P(e, a - 11, 7));
                      (s = i),
                        (u =
                          (a = 0) === o
                            ? ((p = 138), 3)
                            : i === o
                            ? ((p = 6), 3)
                            : ((p = 7), 4));
                    }
                }
                i(v);
                var z = !1;
                function F(e, t, r, i) {
                  P(e, 0 + (i ? 1 : 0), 3),
                    (function(e, t, r, i) {
                      S(e),
                        T(e, r),
                        T(e, ~r),
                        n.arraySet(e.pending_buf, e.window, t, r, e.pending),
                        (e.pending += r);
                    })(e, t, r);
                }
                (r._tr_init = function(e) {
                  z ||
                    ((function() {
                      var e,
                        t,
                        r,
                        n,
                        i,
                        s = new Array(16);
                      for (n = r = 0; n < 28; n++)
                        for (f[n] = r, e = 0; e < 1 << u[n]; e++) y[r++] = n;
                      for (y[r - 1] = n, n = i = 0; n < 16; n++)
                        for (v[n] = i, e = 0; e < 1 << c[n]; e++) g[i++] = n;
                      for (i >>= 7; n < a; n++)
                        for (v[n] = i << 7, e = 0; e < 1 << (c[n] - 7); e++)
                          g[256 + i++] = n;
                      for (t = 0; t <= p; t++) s[t] = 0;
                      for (e = 0; e <= 143; ) (h[2 * e + 1] = 8), e++, s[8]++;
                      for (; e <= 255; ) (h[2 * e + 1] = 9), e++, s[9]++;
                      for (; e <= 279; ) (h[2 * e + 1] = 7), e++, s[7]++;
                      for (; e <= 287; ) (h[2 * e + 1] = 8), e++, s[8]++;
                      for (j(h, 287, s), e = 0; e < a; e++)
                        (m[2 * e + 1] = 5), (m[2 * e] = A(e, 5));
                      (_ = new q(h, u, 257, o, p)),
                        (b = new q(m, c, 0, a, p)),
                        (w = new q(new Array(0), d, 0, 19, 7));
                    })(),
                    (z = !0)),
                    (e.l_desc = new k(e.dyn_ltree, _)),
                    (e.d_desc = new k(e.dyn_dtree, b)),
                    (e.bl_desc = new k(e.bl_tree, w)),
                    (e.bi_buf = 0),
                    (e.bi_valid = 0),
                    O(e);
                }),
                  (r._tr_stored_block = F),
                  (r._tr_flush_block = function(e, t, r, n) {
                    var i,
                      o,
                      a = 0;
                    0 < e.level
                      ? (2 === e.strm.data_type &&
                          (e.strm.data_type = (function(e) {
                            var t,
                              r = 4093624447;
                            for (t = 0; t <= 31; t++, r >>>= 1)
                              if (1 & r && 0 !== e.dyn_ltree[2 * t]) return 0;
                            if (
                              0 !== e.dyn_ltree[18] ||
                              0 !== e.dyn_ltree[20] ||
                              0 !== e.dyn_ltree[26]
                            )
                              return 1;
                            for (t = 32; t < s; t++)
                              if (0 !== e.dyn_ltree[2 * t]) return 1;
                            return 0;
                          })(e)),
                        D(e, e.l_desc),
                        D(e, e.d_desc),
                        (a = (function(e) {
                          var t;
                          for (
                            L(e, e.dyn_ltree, e.l_desc.max_code),
                              L(e, e.dyn_dtree, e.d_desc.max_code),
                              D(e, e.bl_desc),
                              t = 18;
                            3 <= t && 0 === e.bl_tree[2 * l[t] + 1];
                            t--
                          );
                          return (e.opt_len += 3 * (t + 1) + 5 + 5 + 4), t;
                        })(e)),
                        (i = (e.opt_len + 3 + 7) >>> 3),
                        (o = (e.static_len + 3 + 7) >>> 3) <= i && (i = o))
                      : (i = o = r + 5),
                      r + 4 <= i && -1 !== t
                        ? F(e, t, r, n)
                        : 4 === e.strategy || o === i
                        ? (P(e, 2 + (n ? 1 : 0), 3), I(e, h, m))
                        : (P(e, 4 + (n ? 1 : 0), 3),
                          (function(e, t, r, n) {
                            var i;
                            for (
                              P(e, t - 257, 5),
                                P(e, r - 1, 5),
                                P(e, n - 4, 4),
                                i = 0;
                              i < n;
                              i++
                            )
                              P(e, e.bl_tree[2 * l[i] + 1], 3);
                            G(e, e.dyn_ltree, t - 1), G(e, e.dyn_dtree, r - 1);
                          })(
                            e,
                            e.l_desc.max_code + 1,
                            e.d_desc.max_code + 1,
                            a + 1
                          ),
                          I(e, e.dyn_ltree, e.dyn_dtree)),
                      O(e),
                      n && S(e);
                  }),
                  (r._tr_tally = function(e, t, r) {
                    return (
                      (e.pending_buf[e.d_buf + 2 * e.last_lit] =
                        (t >>> 8) & 255),
                      (e.pending_buf[e.d_buf + 2 * e.last_lit + 1] = 255 & t),
                      (e.pending_buf[e.l_buf + e.last_lit] = 255 & r),
                      e.last_lit++,
                      0 === t
                        ? e.dyn_ltree[2 * r]++
                        : (e.matches++,
                          t--,
                          e.dyn_ltree[2 * (y[r] + s + 1)]++,
                          e.dyn_dtree[2 * E(t)]++),
                      e.last_lit === e.lit_bufsize - 1
                    );
                  }),
                  (r._tr_align = function(e) {
                    P(e, 2, 3),
                      x(e, 256, h),
                      (function(e) {
                        16 === e.bi_valid
                          ? (T(e, e.bi_buf), (e.bi_buf = 0), (e.bi_valid = 0))
                          : 8 <= e.bi_valid &&
                            ((e.pending_buf[e.pending++] = 255 & e.bi_buf),
                            (e.bi_buf >>= 8),
                            (e.bi_valid -= 8));
                      })(e);
                  });
              },
              { "../utils/common": 41 }
            ],
            53: [
              function(e, t, r) {
                "use strict";
                t.exports = function() {
                  (this.input = null),
                    (this.next_in = 0),
                    (this.avail_in = 0),
                    (this.total_in = 0),
                    (this.output = null),
                    (this.next_out = 0),
                    (this.avail_out = 0),
                    (this.total_out = 0),
                    (this.msg = ""),
                    (this.state = null),
                    (this.data_type = 2),
                    (this.adler = 0);
                };
              },
              {}
            ],
            54: [
              function(e, t, r) {
                "use strict";
                t.exports =
                  "function" == typeof n
                    ? n
                    : function() {
                        var e = [].slice.apply(arguments);
                        e.splice(1, 0, 0), setTimeout.apply(null, e);
                      };
              },
              {}
            ]
          },
          {},
          [10]
        )(10);
      }.call(this, r(95).Buffer, r(6), r(99).setImmediate));
    },
    function(e, t, r) {
      var n = (function(e) {
        "use strict";
        var t = Object.prototype,
          r = t.hasOwnProperty,
          n = "function" == typeof Symbol ? Symbol : {},
          i = n.iterator || "@@iterator",
          s = n.asyncIterator || "@@asyncIterator",
          o = n.toStringTag || "@@toStringTag";
        function a(e, t, r, n) {
          var i = t && t.prototype instanceof c ? t : c,
            s = Object.create(i.prototype),
            o = new q(n || []);
          return (
            (s._invoke = (function(e, t, r) {
              var n = "suspendedStart";
              return function(i, s) {
                if ("executing" === n)
                  throw new Error("Generator is already running");
                if ("completed" === n) {
                  if ("throw" === i) throw s;
                  return E();
                }
                for (r.method = i, r.arg = s; ; ) {
                  var o = r.delegate;
                  if (o) {
                    var a = b(o, r);
                    if (a) {
                      if (a === u) continue;
                      return a;
                    }
                  }
                  if ("next" === r.method) r.sent = r._sent = r.arg;
                  else if ("throw" === r.method) {
                    if ("suspendedStart" === n)
                      throw ((n = "completed"), r.arg);
                    r.dispatchException(r.arg);
                  } else "return" === r.method && r.abrupt("return", r.arg);
                  n = "executing";
                  var c = p(e, t, r);
                  if ("normal" === c.type) {
                    if (
                      ((n = r.done ? "completed" : "suspendedYield"),
                      c.arg === u)
                    )
                      continue;
                    return { value: c.arg, done: r.done };
                  }
                  "throw" === c.type &&
                    ((n = "completed"), (r.method = "throw"), (r.arg = c.arg));
                }
              };
            })(e, r, o)),
            s
          );
        }
        function p(e, t, r) {
          try {
            return { type: "normal", arg: e.call(t, r) };
          } catch (e) {
            return { type: "throw", arg: e };
          }
        }
        e.wrap = a;
        var u = {};
        function c() {}
        function d() {}
        function l() {}
        var h = {};
        h[i] = function() {
          return this;
        };
        var m = Object.getPrototypeOf,
          g = m && m(m(k([])));
        g && g !== t && r.call(g, i) && (h = g);
        var y = (l.prototype = c.prototype = Object.create(h));
        function f(e) {
          ["next", "throw", "return"].forEach(function(t) {
            e[t] = function(e) {
              return this._invoke(t, e);
            };
          });
        }
        function _(e, t) {
          var n;
          this._invoke = function(i, s) {
            function o() {
              return new t(function(n, o) {
                !(function n(i, s, o, a) {
                  var u = p(e[i], e, s);
                  if ("throw" !== u.type) {
                    var c = u.arg,
                      d = c.value;
                    return d && "object" == typeof d && r.call(d, "__await")
                      ? t.resolve(d.__await).then(
                          function(e) {
                            n("next", e, o, a);
                          },
                          function(e) {
                            n("throw", e, o, a);
                          }
                        )
                      : t.resolve(d).then(
                          function(e) {
                            (c.value = e), o(c);
                          },
                          function(e) {
                            return n("throw", e, o, a);
                          }
                        );
                  }
                  a(u.arg);
                })(i, s, n, o);
              });
            }
            return (n = n ? n.then(o, o) : o());
          };
        }
        function b(e, t) {
          var r = e.iterator[t.method];
          if (void 0 === r) {
            if (((t.delegate = null), "throw" === t.method)) {
              if (
                e.iterator.return &&
                ((t.method = "return"),
                (t.arg = void 0),
                b(e, t),
                "throw" === t.method)
              )
                return u;
              (t.method = "throw"),
                (t.arg = new TypeError(
                  "The iterator does not provide a 'throw' method"
                ));
            }
            return u;
          }
          var n = p(r, e.iterator, t.arg);
          if ("throw" === n.type)
            return (
              (t.method = "throw"), (t.arg = n.arg), (t.delegate = null), u
            );
          var i = n.arg;
          return i
            ? i.done
              ? ((t[e.resultName] = i.value),
                (t.next = e.nextLoc),
                "return" !== t.method &&
                  ((t.method = "next"), (t.arg = void 0)),
                (t.delegate = null),
                u)
              : i
            : ((t.method = "throw"),
              (t.arg = new TypeError("iterator result is not an object")),
              (t.delegate = null),
              u);
        }
        function w(e) {
          var t = { tryLoc: e[0] };
          1 in e && (t.catchLoc = e[1]),
            2 in e && ((t.finallyLoc = e[2]), (t.afterLoc = e[3])),
            this.tryEntries.push(t);
        }
        function v(e) {
          var t = e.completion || {};
          (t.type = "normal"), delete t.arg, (e.completion = t);
        }
        function q(e) {
          (this.tryEntries = [{ tryLoc: "root" }]),
            e.forEach(w, this),
            this.reset(!0);
        }
        function k(e) {
          if (e) {
            var t = e[i];
            if (t) return t.call(e);
            if ("function" == typeof e.next) return e;
            if (!isNaN(e.length)) {
              var n = -1,
                s = function t() {
                  for (; ++n < e.length; )
                    if (r.call(e, n)) return (t.value = e[n]), (t.done = !1), t;
                  return (t.value = void 0), (t.done = !0), t;
                };
              return (s.next = s);
            }
          }
          return { next: E };
        }
        function E() {
          return { value: void 0, done: !0 };
        }
        return (
          (d.prototype = y.constructor = l),
          (l.constructor = d),
          (l[o] = d.displayName = "GeneratorFunction"),
          (e.isGeneratorFunction = function(e) {
            var t = "function" == typeof e && e.constructor;
            return (
              !!t &&
              (t === d || "GeneratorFunction" === (t.displayName || t.name))
            );
          }),
          (e.mark = function(e) {
            return (
              Object.setPrototypeOf
                ? Object.setPrototypeOf(e, l)
                : ((e.__proto__ = l), o in e || (e[o] = "GeneratorFunction")),
              (e.prototype = Object.create(y)),
              e
            );
          }),
          (e.awrap = function(e) {
            return { __await: e };
          }),
          f(_.prototype),
          (_.prototype[s] = function() {
            return this;
          }),
          (e.AsyncIterator = _),
          (e.async = function(t, r, n, i, s) {
            void 0 === s && (s = Promise);
            var o = new _(a(t, r, n, i), s);
            return e.isGeneratorFunction(r)
              ? o
              : o.next().then(function(e) {
                  return e.done ? e.value : o.next();
                });
          }),
          f(y),
          (y[o] = "Generator"),
          (y[i] = function() {
            return this;
          }),
          (y.toString = function() {
            return "[object Generator]";
          }),
          (e.keys = function(e) {
            var t = [];
            for (var r in e) t.push(r);
            return (
              t.reverse(),
              function r() {
                for (; t.length; ) {
                  var n = t.pop();
                  if (n in e) return (r.value = n), (r.done = !1), r;
                }
                return (r.done = !0), r;
              }
            );
          }),
          (e.values = k),
          (q.prototype = {
            constructor: q,
            reset: function(e) {
              if (
                ((this.prev = 0),
                (this.next = 0),
                (this.sent = this._sent = void 0),
                (this.done = !1),
                (this.delegate = null),
                (this.method = "next"),
                (this.arg = void 0),
                this.tryEntries.forEach(v),
                !e)
              )
                for (var t in this)
                  "t" === t.charAt(0) &&
                    r.call(this, t) &&
                    !isNaN(+t.slice(1)) &&
                    (this[t] = void 0);
            },
            stop: function() {
              this.done = !0;
              var e = this.tryEntries[0].completion;
              if ("throw" === e.type) throw e.arg;
              return this.rval;
            },
            dispatchException: function(e) {
              if (this.done) throw e;
              var t = this;
              function n(r, n) {
                return (
                  (o.type = "throw"),
                  (o.arg = e),
                  (t.next = r),
                  n && ((t.method = "next"), (t.arg = void 0)),
                  !!n
                );
              }
              for (var i = this.tryEntries.length - 1; i >= 0; --i) {
                var s = this.tryEntries[i],
                  o = s.completion;
                if ("root" === s.tryLoc) return n("end");
                if (s.tryLoc <= this.prev) {
                  var a = r.call(s, "catchLoc"),
                    p = r.call(s, "finallyLoc");
                  if (a && p) {
                    if (this.prev < s.catchLoc) return n(s.catchLoc, !0);
                    if (this.prev < s.finallyLoc) return n(s.finallyLoc);
                  } else if (a) {
                    if (this.prev < s.catchLoc) return n(s.catchLoc, !0);
                  } else {
                    if (!p)
                      throw new Error("try statement without catch or finally");
                    if (this.prev < s.finallyLoc) return n(s.finallyLoc);
                  }
                }
              }
            },
            abrupt: function(e, t) {
              for (var n = this.tryEntries.length - 1; n >= 0; --n) {
                var i = this.tryEntries[n];
                if (
                  i.tryLoc <= this.prev &&
                  r.call(i, "finallyLoc") &&
                  this.prev < i.finallyLoc
                ) {
                  var s = i;
                  break;
                }
              }
              s &&
                ("break" === e || "continue" === e) &&
                s.tryLoc <= t &&
                t <= s.finallyLoc &&
                (s = null);
              var o = s ? s.completion : {};
              return (
                (o.type = e),
                (o.arg = t),
                s
                  ? ((this.method = "next"), (this.next = s.finallyLoc), u)
                  : this.complete(o)
              );
            },
            complete: function(e, t) {
              if ("throw" === e.type) throw e.arg;
              return (
                "break" === e.type || "continue" === e.type
                  ? (this.next = e.arg)
                  : "return" === e.type
                  ? ((this.rval = this.arg = e.arg),
                    (this.method = "return"),
                    (this.next = "end"))
                  : "normal" === e.type && t && (this.next = t),
                u
              );
            },
            finish: function(e) {
              for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                var r = this.tryEntries[t];
                if (r.finallyLoc === e)
                  return this.complete(r.completion, r.afterLoc), v(r), u;
              }
            },
            catch: function(e) {
              for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                var r = this.tryEntries[t];
                if (r.tryLoc === e) {
                  var n = r.completion;
                  if ("throw" === n.type) {
                    var i = n.arg;
                    v(r);
                  }
                  return i;
                }
              }
              throw new Error("illegal catch attempt");
            },
            delegateYield: function(e, t, r) {
              return (
                (this.delegate = { iterator: k(e), resultName: t, nextLoc: r }),
                "next" === this.method && (this.arg = void 0),
                u
              );
            }
          }),
          e
        );
      })(e.exports);
      try {
        regeneratorRuntime = n;
      } catch (e) {
        Function("r", "regeneratorRuntime = r")(n);
      }
    },
    function(e, t, r) {
      "use strict";
      function n(e) {
        return e && e.__esModule ? e : { default: e };
      }
      (t.__esModule = !0), (t.HandlebarsEnvironment = c);
      var i = r(5),
        s = n(r(9)),
        o = r(22),
        a = r(44),
        p = n(r(23)),
        u = r(24);
      t.VERSION = "4.7.6";
      t.COMPILER_REVISION = 8;
      t.LAST_COMPATIBLE_COMPILER_REVISION = 7;
      t.REVISION_CHANGES = {
        1: "<= 1.0.rc.2",
        2: "== 1.0.0-rc.3",
        3: "== 1.0.0-rc.4",
        4: "== 1.x.x",
        5: "== 2.0.0-alpha.x",
        6: ">= 2.0.0-beta.1",
        7: ">= 4.0.0 <4.3.0",
        8: ">= 4.3.0"
      };
      function c(e, t, r) {
        (this.helpers = e || {}),
          (this.partials = t || {}),
          (this.decorators = r || {}),
          o.registerDefaultHelpers(this),
          a.registerDefaultDecorators(this);
      }
      c.prototype = {
        constructor: c,
        logger: p.default,
        log: p.default.log,
        registerHelper: function(e, t) {
          if ("[object Object]" === i.toString.call(e)) {
            if (t)
              throw new s.default("Arg not supported with multiple helpers");
            i.extend(this.helpers, e);
          } else this.helpers[e] = t;
        },
        unregisterHelper: function(e) {
          delete this.helpers[e];
        },
        registerPartial: function(e, t) {
          if ("[object Object]" === i.toString.call(e))
            i.extend(this.partials, e);
          else {
            if (void 0 === t)
              throw new s.default(
                'Attempting to register a partial called "' +
                  e +
                  '" as undefined'
              );
            this.partials[e] = t;
          }
        },
        unregisterPartial: function(e) {
          delete this.partials[e];
        },
        registerDecorator: function(e, t) {
          if ("[object Object]" === i.toString.call(e)) {
            if (t)
              throw new s.default("Arg not supported with multiple decorators");
            i.extend(this.decorators, e);
          } else this.decorators[e] = t;
        },
        unregisterDecorator: function(e) {
          delete this.decorators[e];
        },
        resetLoggedPropertyAccesses: function() {
          u.resetLoggedProperties();
        }
      };
      var d = p.default.log;
      (t.log = d), (t.createFrame = i.createFrame), (t.logger = p.default);
    },
    function(e, t, r) {
      "use strict";
      function n(e) {
        return e && e.__esModule ? e : { default: e };
      }
      (t.__esModule = !0),
        (t.registerDefaultHelpers = function(e) {
          i.default(e),
            s.default(e),
            o.default(e),
            a.default(e),
            p.default(e),
            u.default(e),
            c.default(e);
        }),
        (t.moveHelperToHooks = function(e, t, r) {
          e.helpers[t] &&
            ((e.hooks[t] = e.helpers[t]), r || delete e.helpers[t]);
        });
      var i = n(r(37)),
        s = n(r(38)),
        o = n(r(39)),
        a = n(r(40)),
        p = n(r(41)),
        u = n(r(42)),
        c = n(r(43));
    },
    function(e, t, r) {
      "use strict";
      t.__esModule = !0;
      var n = r(5),
        i = {
          methodMap: ["debug", "info", "warn", "error"],
          level: "info",
          lookupLevel: function(e) {
            if ("string" == typeof e) {
              var t = n.indexOf(i.methodMap, e.toLowerCase());
              e = t >= 0 ? t : parseInt(e, 10);
            }
            return e;
          },
          log: function(e) {
            if (
              ((e = i.lookupLevel(e)),
              "undefined" != typeof console && i.lookupLevel(i.level) <= e)
            ) {
              var t = i.methodMap[e];
              console[t] || (t = "log");
              for (
                var r = arguments.length, n = Array(r > 1 ? r - 1 : 0), s = 1;
                s < r;
                s++
              )
                n[s - 1] = arguments[s];
              console[t].apply(console, n);
            }
          }
        };
      (t.default = i), (e.exports = t.default);
    },
    function(e, t, r) {
      "use strict";
      (t.__esModule = !0),
        (t.createProtoAccessControl = function(e) {
          var t = Object.create(null);
          (t.constructor = !1),
            (t.__defineGetter__ = !1),
            (t.__defineSetter__ = !1),
            (t.__lookupGetter__ = !1);
          var r = Object.create(null);
          return (
            (r.__proto__ = !1),
            {
              properties: {
                whitelist: n.createNewLookupObject(r, e.allowedProtoProperties),
                defaultValue: e.allowProtoPropertiesByDefault
              },
              methods: {
                whitelist: n.createNewLookupObject(t, e.allowedProtoMethods),
                defaultValue: e.allowProtoMethodsByDefault
              }
            }
          );
        }),
        (t.resultIsAllowed = function(e, t, r) {
          return o("function" == typeof e ? t.methods : t.properties, r);
        }),
        (t.resetLoggedProperties = function() {
          Object.keys(s).forEach(function(e) {
            delete s[e];
          });
        });
      var n = r(46),
        i = (function(e) {
          if (e && e.__esModule) return e;
          var t = {};
          if (null != e)
            for (var r in e)
              Object.prototype.hasOwnProperty.call(e, r) && (t[r] = e[r]);
          return (t.default = e), t;
        })(r(23)),
        s = Object.create(null);
      function o(e, t) {
        return void 0 !== e.whitelist[t]
          ? !0 === e.whitelist[t]
          : void 0 !== e.defaultValue
          ? e.defaultValue
          : ((function(e) {
              !0 !== s[e] &&
                ((s[e] = !0),
                i.log(
                  "error",
                  'Handlebars: Access has been denied to resolve the property "' +
                    e +
                    '" because it is not an "own property" of its parent.\nYou can add a runtime option to disable the check or this warning:\nSee https://handlebarsjs.com/api-reference/runtime-options.html#options-to-control-prototype-access for details'
                ));
            })(t),
            !1);
      }
    },
    function(e, t, r) {
      e.exports = function(e) {
        const t = n.bind(null, e || []);
        return (t.plugin = i.bind(null, e || [])), t;
      };
      const n = r(58),
        i = r(67);
    },
    function(e, t) {
      e.exports = function(e) {
        return btoa(e);
      };
    },
    function(e, t, r) {
      e.exports = function(e) {
        if (/^(basic|bearer|token) /i.test(e)) return e;
        try {
          if (i.test(n(e))) return "basic " + e;
        } catch (e) {}
        if (3 === e.split(/\./).length) return "bearer " + e;
        return "token " + e;
      };
      const n = r(71),
        i = /^[\w-]+:/;
    },
    function(e, t, r) {
      var n = r(11);
      e.exports = (n.default || n).template({
        compiler: [8, ">= 4.3.0"],
        main: function(e, t, r, n, i) {
          var s,
            o = null != t ? t : e.nullContext || {},
            a = e.hooks.helperMissing,
            p = e.escapeExpression,
            u =
              e.lookupProperty ||
              function(e, t) {
                if (Object.prototype.hasOwnProperty.call(e, t)) return e[t];
              };
          return (
            '<!doctype html>\n<html>\n    <head>\n        <meta charset="utf-8">\n        <meta http-equiv="\'X-UA-Compatible\' content=\'IE=edge\'">\n        <script src="https://aframe.io/releases/0.9.2/aframe.min.js"></script>\n        <script src="https://raw.githack.com/AR-js-org/AR.js/master/aframe/build/aframe-ar-nft.js"></script>\n        <script src="https://unpkg.com/aframe-look-at-component@0.8.0/dist/aframe-look-at-component.min.js"></script>\n    </head>\n\n    <body style="margin: 0; overflow: hidden;">\n        <a-scene\n            loading-screen="enabled: false;"\n            renderer="logarithmicDepthBuffer: true;"\n            vr-mode-ui="enabled: false"\n            arjs="sourceType: webcam; debugUIEnabled: false;"\n            embedded\n        >\n            <a-entity\n                gltf-model="' +
            p(
              "function" ==
                typeof (s =
                  null !=
                  (s = u(r, "assetSrc") || (null != t ? u(t, "assetSrc") : t))
                    ? s
                    : a)
                ? s.call(o, {
                    name: "assetSrc",
                    hash: {},
                    data: i,
                    loc: {
                      start: { line: 20, column: 28 },
                      end: { line: 20, column: 40 }
                    }
                  })
                : s
            ) +
            '"\n                look-at="[gps-camera]"\n                gps-entity-place="longitude: ' +
            p(
              "function" ==
                typeof (s =
                  null !=
                  (s = u(r, "longitude") || (null != t ? u(t, "longitude") : t))
                    ? s
                    : a)
                ? s.call(o, {
                    name: "longitude",
                    hash: {},
                    data: i,
                    loc: {
                      start: { line: 22, column: 45 },
                      end: { line: 22, column: 58 }
                    }
                  })
                : s
            ) +
            "; latitude: " +
            p(
              "function" ==
                typeof (s =
                  null !=
                  (s = u(r, "latitude") || (null != t ? u(t, "latitude") : t))
                    ? s
                    : a)
                ? s.call(o, {
                    name: "latitude",
                    hash: {},
                    data: i,
                    loc: {
                      start: { line: 22, column: 70 },
                      end: { line: 22, column: 82 }
                    }
                  })
                : s
            ) +
            ';"\n                animation-mixer\n            ></a-entity>\n\n            <a-camera\n                gps-camera\n                rotation-reader\n            ></a-camera>\n        </a-scene>\n    </body>\n</html>\n'
          );
        },
        useData: !0
      });
    },
    function(e, t, r) {
      const { requestLog: n } = r(55),
        { restEndpointMethods: i } = r(56),
        s = r(57),
        o = [r(68), r(74), n, r(79), i, r(81), r(85)],
        a = s.plugin(o);
      const p = Object.assign(
        function(e) {
          return (
            (e && e.log && e.log.warn ? e.log.warn : console.warn)(
              '[@octokit/rest] `const Octokit = require("@octokit/rest")` is deprecated. Use `const { Octokit } = require("@octokit/rest")` instead'
            ),
            new a(e)
          );
        },
        { Octokit: a }
      );
      Object.keys(a).forEach(e => {
        a.hasOwnProperty(e) && (p[e] = a[e]);
      }),
        (e.exports = p);
    },
    function(e, t, r) {
      "use strict";
      var n = (function() {
        if ("undefined" != typeof self) return self;
        if ("undefined" != typeof window) return window;
        if (void 0 !== n) return n;
        throw new Error("unable to locate global object");
      })();
      (e.exports = t = n.fetch),
        (t.default = n.fetch.bind(n)),
        (t.Headers = n.Headers),
        (t.Request = n.Request),
        (t.Response = n.Response);
    },
    function(e, t, r) {
      var n = r(11);
      e.exports = (n.default || n).template({
        compiler: [8, ">= 4.3.0"],
        main: function(e, t, r, n, i) {
          var s,
            o = null != t ? t : e.nullContext || {},
            a = e.hooks.helperMissing,
            p = e.escapeExpression,
            u =
              e.lookupProperty ||
              function(e, t) {
                if (Object.prototype.hasOwnProperty.call(e, t)) return e[t];
              };
          return (
            '<!doctype html>\n<html>\n    <head>\n        <meta name="viewport" content="width=device-width, user-scalable=no, minimum-scale=1.0, maximum-scale=1.0">\n    </head>\n\n    <script src="https://aframe.io/releases/0.9.2/aframe.min.js"></script>\n    <script src="https://raw.githack.com/AR-js-org/AR.js/master/aframe/build/aframe-ar-nft.js"></script>\n    <script src="https://raw.githack.com/donmccurdy/aframe-extras/master/dist/aframe-extras.loaders.min.js"></script>\n\n    <body style=\'margin : 0px; overflow: hidden;\'>\n        <a-scene\n            loading-screen="enabled: false;"\n            vr-mode-ui="enabled: false"\n            renderer="logarithmicDepthBuffer: true;"\n            arjs="sourceType: webcam; debugUIEnabled: false; detectionMode: mono_and_matrix; matrixCodeType: ' +
            p(
              "function" ==
                typeof (s =
                  null !=
                  (s =
                    u(r, "matrixType") || (null != t ? u(t, "matrixType") : t))
                    ? s
                    : a)
                ? s.call(o, {
                    name: "matrixType",
                    hash: {},
                    data: i,
                    loc: {
                      start: { line: 16, column: 109 },
                      end: { line: 16, column: 123 }
                    }
                  })
                : s
            ) +
            ';"\n            embedded\n        >\n            <a-assets>\n                <a-asset-item\n                    id="animated-asset"\n                    src="' +
            p(
              "function" ==
                typeof (s =
                  null !=
                  (s = u(r, "assetPath") || (null != t ? u(t, "assetPath") : t))
                    ? s
                    : a)
                ? s.call(o, {
                    name: "assetPath",
                    hash: {},
                    data: i,
                    loc: {
                      start: { line: 22, column: 25 },
                      end: { line: 22, column: 38 }
                    }
                  })
                : s
            ) +
            '"\n                ></a-asset-item>\n            </a-assets>\n\n            <a-marker\n                id="animated-marker"\n                type="barcode"\n                value="' +
            p(
              "function" ==
                typeof (s =
                  null !=
                  (s =
                    u(r, "markerValue") ||
                    (null != t ? u(t, "markerValue") : t))
                    ? s
                    : a)
                ? s.call(o, {
                    name: "markerValue",
                    hash: {},
                    data: i,
                    loc: {
                      start: { line: 29, column: 23 },
                      end: { line: 29, column: 38 }
                    }
                  })
                : s
            ) +
            '"\n            >\n                <a-entity\n                    gltf-model="#animated-asset"\n                    animation-mixer\n                ></a-entity>\n            </a-marker>\n\n            <a-entity camera></a-entity>\n        </a-scene>\n    </body>\n</html>\n'
          );
        },
        useData: !0
      });
    },
    function(e, t, r) {
      var n = r(11);
      e.exports = (n.default || n).template({
        compiler: [8, ">= 4.3.0"],
        main: function(e, t, r, n, i) {
          var s,
            o,
            a = e.escapeExpression,
            p = e.lambda,
            u =
              e.lookupProperty ||
              function(e, t) {
                if (Object.prototype.hasOwnProperty.call(e, t)) return e[t];
              };
          return (
            '<!doctype html>\n<html>\n    <head>\n        <script src="https://aframe.io/releases/1.0.4/aframe.min.js"></script>\n	<script src="https://unpkg.com/aframe-event-set-component@3.0.3/dist/aframe-event-set-component.min.js"></script>\n     <script src="https://unpkg.com/aframe-play-sound-on-event@1.0.2/dist/aframe-play-sound-on-event.min.js"></script>\n\n	<script src="https://raw.githack.com/donmccurdy/aframe-extras/master/dist/aframe-extras.loaders.min.js"></script>\n\n	<script src="travel-node-component.js"></script>\n\n    </head>\n\n    <body style="margin : 0px; overflow: hidden;">\n        <a-scene\n            vr-mode-ui="enabled: true;"\n            loading-screen="enabled: false;"\n            renderer="logarithmicDepthBuffer: true;"\n        >\n            <a-assets>\n                <a-asset-item\n                    id="animated-asset"\n                    src="' +
            a(
              "function" ==
                typeof (o =
                  null !=
                  (o = u(r, "assetPath") || (null != t ? u(t, "assetPath") : t))
                    ? o
                    : e.hooks.helperMissing)
                ? o.call(null != t ? t : e.nullContext || {}, {
                    name: "assetPath",
                    hash: {},
                    data: i,
                    loc: {
                      start: { line: 21, column: 25 },
                      end: { line: 21, column: 38 }
                    }
                  })
                : o
            ) +
            '"\n                ></a-asset-item>\n            </a-assets>\n\n            <a-entity\n                id="animated-entity"\n                type="pattern"\n                preset="custom"\n                url="assets/entity.patt"\n            >\n                <a-entity\n                    scale="' +
            a(
              p(
                null != (s = null != t ? u(t, "assetParam") : t)
                  ? u(s, "scale")
                  : s,
                t
              )
            ) +
            " " +
            a(
              p(
                null != (s = null != t ? u(t, "assetParam") : t)
                  ? u(s, "scale")
                  : s,
                t
              )
            ) +
            " " +
            a(
              p(
                null != (s = null != t ? u(t, "assetParam") : t)
                  ? u(s, "scale")
                  : s,
                t
              )
            ) +
            '"\n                    animation-mixer="loop: repeat"\n                    gltf-model="#animated-asset"\n                ></a-entity>\n            </a-entity>\n\n	<a-sphere\n		id="geo-dome"\n		radius="10"\n		material="color: #ff2c2c; transparent: true; opacity: 0.3; side: double;"\n		position="0 0 0">\n</a-sphere>            <a-entity camera\n	position="0 1.6 3"\n	wasd-controls\n		look-controls\n		touch-controls>\n	</a-entity>\n		</a-scene>\n    </body>\n</html>\n'
          );
        },
        useData: !0
      });
    },
    function(e, t, r) {
      var n = r(11);
      e.exports = (n.default || n).template({
        compiler: [8, ">= 4.3.0"],
        main: function(e, t, r, n, i) {
          var s,
            o,
            a = e.escapeExpression,
            p = e.lambda,
            u =
              e.lookupProperty ||
              function(e, t) {
                if (Object.prototype.hasOwnProperty.call(e, t)) return e[t];
              };
          return (
            '<!doctype html>\n<html>\n    <head>\n        <script src="https://aframe.io/releases/1.0.4/aframe.min.js"></script>\n	<script src="https://unpkg.com/aframe-event-set-component@3.0.3/dist/aframe-event-set-component.min.js"></script>\n     <script src="https://unpkg.com/aframe-play-sound-on-event@1.0.2/dist/aframe-play-sound-on-event.min.js"></script>\n\n	<script src="https://raw.githack.com/donmccurdy/aframe-extras/master/dist/aframe-extras.loaders.min.js"></script>\n\n	<script src="travel-node-component.js"></script>\n\n    </head>\n\n    <body style="margin : 0px; overflow: hidden;">\n        <a-scene\n            vr-mode-ui="enabled: true;"\n            loading-screen="enabled: true;"\n        >\n            <a-entity\n                id="animated-entity"\n                type="pattern"\n                preset="custom"\n                url="assets/entity.patt"\n            >\n                <a-image\n                    src="' +
            a(
              "function" ==
                typeof (o =
                  null !=
                  (o = u(r, "assetPath") || (null != t ? u(t, "assetPath") : t))
                    ? o
                    : e.hooks.helperMissing)
                ? o.call(null != t ? t : e.nullContext || {}, {
                    name: "assetPath",
                    hash: {},
                    data: i,
                    loc: {
                      start: { line: 22, column: 25 },
                      end: { line: 22, column: 38 }
                    }
                  })
                : o
            ) +
            '"\n                    scale="' +
            a(
              p(
                null != (s = null != t ? u(t, "assetParam") : t)
                  ? u(s, "scale")
                  : s,
                t
              )
            ) +
            " " +
            a(
              p(
                null != (s = null != t ? u(t, "assetParam") : t)
                  ? u(s, "scale")
                  : s,
                t
              )
            ) +
            " " +
            a(
              p(
                null != (s = null != t ? u(t, "assetParam") : t)
                  ? u(s, "scale")
                  : s,
                t
              )
            ) +
            '"\n                ></a-image>\n            </a-entity>\n\n		<a-sphere\n		id="geo-dome"\n		radius="10"\n		material="color: #ff2c2c; transparent: true; opacity: 0.3; side: double;"\n	position="0 0 0">	\n</a-sphere>            <a-entity camera\n	position="0 1.6 3"\n	wasd-controls\n		look-controls\n		touch-controls>\n	</a-entity>\n        </a-scene>\n    </body>\n</html>\n'
          );
        },
        useData: !0
      });
    },
    function(e, t, r) {
      var n = r(11);
      e.exports = (n.default || n).template({
        compiler: [8, ">= 4.3.0"],
        main: function(e, t, r, n, i) {
          var s,
            o =
              e.lookupProperty ||
              function(e, t) {
                if (Object.prototype.hasOwnProperty.call(e, t)) return e[t];
              };
          return (
            '<!doctype html>\n<html>\n    <head>\n        <script src="https://aframe.io/releases/1.0.4/aframe.min.js"></script>\n	<script src="https://unpkg.com/aframe-event-set-component@3.0.3/dist/aframe-event-set-component.min.js"></script>\n     <script src="https://unpkg.com/aframe-play-sound-on-event@1.0.2/dist/aframe-play-sound-on-event.min.js"></script>\n\n	<script src="https://raw.githack.com/donmccurdy/aframe-extras/master/dist/aframe-extras.loaders.min.js"></script>\n\n	<script src="travel-node-component.js"></script>\n\n    </head>\n\n    <body style="margin : 0px; overflow: hidden;">\n        <a-scene\n            vr-mode-ui="enabled: false"\n            loading-screen="enabled: false;"\n        >\n            <a-assets>\n                <a-asset-item\n                    id="sound"\n                    src="' +
            e.escapeExpression(
              "function" ==
                typeof (s =
                  null !=
                  (s = o(r, "assetPath") || (null != t ? o(t, "assetPath") : t))
                    ? s
                    : e.hooks.helperMissing)
                ? s.call(null != t ? t : e.nullContext || {}, {
                    name: "assetPath",
                    hash: {},
                    data: i,
                    loc: {
                      start: { line: 18, column: 25 },
                      end: { line: 18, column: 38 }
                    }
                  })
                : s
            ) +
            '"\n                    response-type="arraybuffer"\n                ></a-asset-item>\n            </a-assets>\n\n            <a-entity\n                id="animated-entity"\n                type="pattern"\n                preset="custom"\n                url="assets/entity.patt"\n                emitsevent="true"\n            ></a-entity>\n\n            <a-entity\n                id="sound-entity"\n                sound="src: #sound"\n           autoplay="false"\n            ></a-entity>\n\n		<a-sphere\n		id="geo-dome"\n		radius="10"\n		material="color: #ff2c2c; transparent: true; opacity: 0.3; side: double;"\n		position="0 0 0">\n	</a-sphere>            <a-entity camera\n	position="0 1.6 3"\n	wasd-controls\n		look-controls\n		touch-controls>\n	</a-entity>\n        </a-scene>\n    </body>\n</html>\n'
          );
        },
        useData: !0
      });
    },
    function(e, t, r) {
      var n = r(11);
      e.exports = (n.default || n).template({
        compiler: [8, ">= 4.3.0"],
        main: function(e, t, r, n, i) {
          var s,
            o,
            a = e.escapeExpression,
            p = e.lambda,
            u =
              e.lookupProperty ||
              function(e, t) {
                if (Object.prototype.hasOwnProperty.call(e, t)) return e[t];
              };
          return (
            '<!doctype html>\n<html>\n    <head>\n        <script src="https://aframe.io/releases/1.0.4/aframe.min.js"></script>\n	<script src="https://unpkg.com/aframe-event-set-component@3.0.3/dist/aframe-event-set-component.min.js"></script>\n     <script src="https://unpkg.com/aframe-play-sound-on-event@1.0.2/dist/aframe-play-sound-on-event.min.js"></script>\n\n	 <script src="https://raw.githack.com/donmccurdy/aframe-extras/master/dist/aframe-extras.loaders.min.js"></script>\n\n	<script src="travel-node-component.js"></script>\n    </head>\n\n    <body style=\'margin : 0px; overflow: hidden;\'>\n        <a-scene\n            vr-mode-ui="enabled: true"\n            loading-screen="enabled: false;"\n            >\n\n            <a-assets>\n                <video\n                    id="vid"\n                    src="' +
            a(
              "function" ==
                typeof (o =
                  null !=
                  (o = u(r, "assetPath") || (null != t ? u(t, "assetPath") : t))
                    ? o
                    : e.hooks.helperMissing)
                ? o.call(null != t ? t : e.nullContext || {}, {
                    name: "assetPath",
                    hash: {},
                    data: i,
                    loc: {
                      start: { line: 19, column: 25 },
                      end: { line: 19, column: 38 }
                    }
                  })
                : o
            ) +
            '"\n                    preload="auto"\n                    response-type="arraybuffer"\n                    loop\n                    crossorigin\n                    webkit-playsinline\n                    autoplay\n        muted\n  playsinline\n                ></video>\n            </a-assets>\n\n            <a-entity\n                type="pattern"\n                preset="custom"\n                url="assets/entity.patt"\n                videohandler\n                smooth="true"\n                smoothCount="10"\n                smoothTolerance="0.01"\n                smoothThreshold="5"\n            >\n                <a-video\n                    src="#vid"\n                    scale="' +
            a(
              p(
                null != (s = null != t ? u(t, "assetParam") : t)
                  ? u(s, "scale")
                  : s,
                t
              )
            ) +
            " " +
            a(
              p(
                null != (s = null != t ? u(t, "assetParam") : t)
                  ? u(s, "scale")
                  : s,
                t
              )
            ) +
            " " +
            a(
              p(
                null != (s = null != t ? u(t, "assetParam") : t)
                  ? u(s, "scale")
                  : s,
                t
              )
            ) +
            '"\n                    position="0 0.1 0"\n                    rotation="-90 0 0"\n                ></a-video>\n            </a-entity>\n\n<a-sphere\n		id="geo-dome"\n		radius="10"\n		material="color: #ff2c2c; transparent: true; opacity: 0.3; side: double;"\n		position="0 0 0">\n	</a-sphere>\n            <a-entity camera\n	position="0 1.6 3"\n	wasd-controls\n	look-controls\n		touch-controls>\n	</a-entity>\n        </a-scene>\n    </body>\n</html>\n'
          );
        },
        useData: !0
      });
    },
    function(e, t, r) {
      "use strict";
      function n(e) {
        return e && e.__esModule ? e : { default: e };
      }
      function i(e) {
        if (e && e.__esModule) return e;
        var t = {};
        if (null != e)
          for (var r in e)
            Object.prototype.hasOwnProperty.call(e, r) && (t[r] = e[r]);
        return (t.default = e), t;
      }
      t.__esModule = !0;
      var s = i(r(21)),
        o = n(r(47)),
        a = n(r(9)),
        p = i(r(5)),
        u = i(r(48)),
        c = n(r(50));
      function d() {
        var e = new s.HandlebarsEnvironment();
        return (
          p.extend(e, s),
          (e.SafeString = o.default),
          (e.Exception = a.default),
          (e.Utils = p),
          (e.escapeExpression = p.escapeExpression),
          (e.VM = u),
          (e.template = function(t) {
            return u.template(t, e);
          }),
          e
        );
      }
      var l = d();
      (l.create = d),
        c.default(l),
        (l.default = l),
        (t.default = l),
        (e.exports = t.default);
    },
    function(e, t, r) {
      "use strict";
      t.__esModule = !0;
      var n = r(5);
      (t.default = function(e) {
        e.registerHelper("blockHelperMissing", function(t, r) {
          var i = r.inverse,
            s = r.fn;
          if (!0 === t) return s(this);
          if (!1 === t || null == t) return i(this);
          if (n.isArray(t))
            return t.length > 0
              ? (r.ids && (r.ids = [r.name]), e.helpers.each(t, r))
              : i(this);
          if (r.data && r.ids) {
            var o = n.createFrame(r.data);
            (o.contextPath = n.appendContextPath(r.data.contextPath, r.name)),
              (r = { data: o });
          }
          return s(t, r);
        });
      }),
        (e.exports = t.default);
    },
    function(e, t, r) {
      "use strict";
      (function(n) {
        t.__esModule = !0;
        var i,
          s = r(5),
          o = r(9),
          a = (i = o) && i.__esModule ? i : { default: i };
        (t.default = function(e) {
          e.registerHelper("each", function(e, t) {
            if (!t) throw new a.default("Must pass iterator to #each");
            var r,
              i = t.fn,
              o = t.inverse,
              p = 0,
              u = "",
              c = void 0,
              d = void 0;
            function l(t, r, n) {
              c &&
                ((c.key = t),
                (c.index = r),
                (c.first = 0 === r),
                (c.last = !!n),
                d && (c.contextPath = d + t)),
                (u += i(e[t], {
                  data: c,
                  blockParams: s.blockParams([e[t], t], [d + t, null])
                }));
            }
            if (
              (t.data &&
                t.ids &&
                (d = s.appendContextPath(t.data.contextPath, t.ids[0]) + "."),
              s.isFunction(e) && (e = e.call(this)),
              t.data && (c = s.createFrame(t.data)),
              e && "object" == typeof e)
            )
              if (s.isArray(e))
                for (var h = e.length; p < h; p++)
                  p in e && l(p, p, p === e.length - 1);
              else if (n.Symbol && e[n.Symbol.iterator]) {
                for (
                  var m = [], g = e[n.Symbol.iterator](), y = g.next();
                  !y.done;
                  y = g.next()
                )
                  m.push(y.value);
                for (h = (e = m).length; p < h; p++)
                  l(p, p, p === e.length - 1);
              } else
                (r = void 0),
                  Object.keys(e).forEach(function(e) {
                    void 0 !== r && l(r, p - 1), (r = e), p++;
                  }),
                  void 0 !== r && l(r, p - 1, !0);
            return 0 === p && (u = o(this)), u;
          });
        }),
          (e.exports = t.default);
      }.call(this, r(6)));
    },
    function(e, t, r) {
      "use strict";
      t.__esModule = !0;
      var n,
        i = r(9),
        s = (n = i) && n.__esModule ? n : { default: n };
      (t.default = function(e) {
        e.registerHelper("helperMissing", function() {
          if (1 !== arguments.length)
            throw new s.default(
              'Missing helper: "' + arguments[arguments.length - 1].name + '"'
            );
        });
      }),
        (e.exports = t.default);
    },
    function(e, t, r) {
      "use strict";
      t.__esModule = !0;
      var n,
        i = r(5),
        s = r(9),
        o = (n = s) && n.__esModule ? n : { default: n };
      (t.default = function(e) {
        e.registerHelper("if", function(e, t) {
          if (2 != arguments.length)
            throw new o.default("#if requires exactly one argument");
          return (
            i.isFunction(e) && (e = e.call(this)),
            (!t.hash.includeZero && !e) || i.isEmpty(e)
              ? t.inverse(this)
              : t.fn(this)
          );
        }),
          e.registerHelper("unless", function(t, r) {
            if (2 != arguments.length)
              throw new o.default("#unless requires exactly one argument");
            return e.helpers.if.call(this, t, {
              fn: r.inverse,
              inverse: r.fn,
              hash: r.hash
            });
          });
      }),
        (e.exports = t.default);
    },
    function(e, t, r) {
      "use strict";
      (t.__esModule = !0),
        (t.default = function(e) {
          e.registerHelper("log", function() {
            for (
              var t = [void 0], r = arguments[arguments.length - 1], n = 0;
              n < arguments.length - 1;
              n++
            )
              t.push(arguments[n]);
            var i = 1;
            null != r.hash.level
              ? (i = r.hash.level)
              : r.data && null != r.data.level && (i = r.data.level),
              (t[0] = i),
              e.log.apply(e, t);
          });
        }),
        (e.exports = t.default);
    },
    function(e, t, r) {
      "use strict";
      (t.__esModule = !0),
        (t.default = function(e) {
          e.registerHelper("lookup", function(e, t, r) {
            return e ? r.lookupProperty(e, t) : e;
          });
        }),
        (e.exports = t.default);
    },
    function(e, t, r) {
      "use strict";
      t.__esModule = !0;
      var n,
        i = r(5),
        s = r(9),
        o = (n = s) && n.__esModule ? n : { default: n };
      (t.default = function(e) {
        e.registerHelper("with", function(e, t) {
          if (2 != arguments.length)
            throw new o.default("#with requires exactly one argument");
          i.isFunction(e) && (e = e.call(this));
          var r = t.fn;
          if (i.isEmpty(e)) return t.inverse(this);
          var n = t.data;
          return (
            t.data &&
              t.ids &&
              ((n = i.createFrame(t.data)).contextPath = i.appendContextPath(
                t.data.contextPath,
                t.ids[0]
              )),
            r(e, {
              data: n,
              blockParams: i.blockParams([e], [n && n.contextPath])
            })
          );
        });
      }),
        (e.exports = t.default);
    },
    function(e, t, r) {
      "use strict";
      (t.__esModule = !0),
        (t.registerDefaultDecorators = function(e) {
          s.default(e);
        });
      var n,
        i = r(45),
        s = (n = i) && n.__esModule ? n : { default: n };
    },
    function(e, t, r) {
      "use strict";
      t.__esModule = !0;
      var n = r(5);
      (t.default = function(e) {
        e.registerDecorator("inline", function(e, t, r, i) {
          var s = e;
          return (
            t.partials ||
              ((t.partials = {}),
              (s = function(i, s) {
                var o = r.partials;
                r.partials = n.extend({}, o, t.partials);
                var a = e(i, s);
                return (r.partials = o), a;
              })),
            (t.partials[i.args[0]] = i.fn),
            s
          );
        });
      }),
        (e.exports = t.default);
    },
    function(e, t, r) {
      "use strict";
      (t.__esModule = !0),
        (t.createNewLookupObject = function() {
          for (var e = arguments.length, t = Array(e), r = 0; r < e; r++)
            t[r] = arguments[r];
          return n.extend.apply(void 0, [Object.create(null)].concat(t));
        });
      var n = r(5);
    },
    function(e, t, r) {
      "use strict";
      function n(e) {
        this.string = e;
      }
      (t.__esModule = !0),
        (n.prototype.toString = n.prototype.toHTML = function() {
          return "" + this.string;
        }),
        (t.default = n),
        (e.exports = t.default);
    },
    function(e, t, r) {
      "use strict";
      (t.__esModule = !0),
        (t.checkRevision = function(e) {
          var t = (e && e[0]) || 1,
            r = a.COMPILER_REVISION;
          if (
            t >= a.LAST_COMPATIBLE_COMPILER_REVISION &&
            t <= a.COMPILER_REVISION
          )
            return;
          if (t < a.LAST_COMPATIBLE_COMPILER_REVISION) {
            var n = a.REVISION_CHANGES[r],
              i = a.REVISION_CHANGES[t];
            throw new o.default(
              "Template was precompiled with an older version of Handlebars than the current runtime. Please update your precompiler to a newer version (" +
                n +
                ") or downgrade your runtime to an older version (" +
                i +
                ")."
            );
          }
          throw new o.default(
            "Template was precompiled with a newer version of Handlebars than the current runtime. Please update your runtime to a newer version (" +
              e[1] +
              ")."
          );
        }),
        (t.template = function(e, t) {
          if (!t) throw new o.default("No environment passed to template");
          if (!e || !e.main)
            throw new o.default("Unknown template object: " + typeof e);
          (e.main.decorator = e.main_d), t.VM.checkRevision(e.compiler);
          var r = e.compiler && 7 === e.compiler[0];
          var n = {
            strict: function(e, t, r) {
              if (!e || !(t in e))
                throw new o.default('"' + t + '" not defined in ' + e, {
                  loc: r
                });
              return e[t];
            },
            lookupProperty: function(e, t) {
              var r = e[t];
              return null == r ||
                Object.prototype.hasOwnProperty.call(e, t) ||
                c.resultIsAllowed(r, n.protoAccessControl, t)
                ? r
                : void 0;
            },
            lookup: function(e, t) {
              for (var r = e.length, i = 0; i < r; i++) {
                if (null != (e[i] && n.lookupProperty(e[i], t))) return e[i][t];
              }
            },
            lambda: function(e, t) {
              return "function" == typeof e ? e.call(t) : e;
            },
            escapeExpression: i.escapeExpression,
            invokePartial: function(r, n, s) {
              s.hash &&
                ((n = i.extend({}, n, s.hash)), s.ids && (s.ids[0] = !0)),
                (r = t.VM.resolvePartial.call(this, r, n, s));
              var a = i.extend({}, s, {
                  hooks: this.hooks,
                  protoAccessControl: this.protoAccessControl
                }),
                p = t.VM.invokePartial.call(this, r, n, a);
              if (
                (null == p &&
                  t.compile &&
                  ((s.partials[s.name] = t.compile(r, e.compilerOptions, t)),
                  (p = s.partials[s.name](n, a))),
                null != p)
              ) {
                if (s.indent) {
                  for (
                    var u = p.split("\n"), c = 0, d = u.length;
                    c < d && (u[c] || c + 1 !== d);
                    c++
                  )
                    u[c] = s.indent + u[c];
                  p = u.join("\n");
                }
                return p;
              }
              throw new o.default(
                "The partial " +
                  s.name +
                  " could not be compiled when running in runtime-only mode"
              );
            },
            fn: function(t) {
              var r = e[t];
              return (r.decorator = e[t + "_d"]), r;
            },
            programs: [],
            program: function(e, t, r, n, i) {
              var s = this.programs[e],
                o = this.fn(e);
              return (
                t || i || n || r
                  ? (s = d(this, e, o, t, r, n, i))
                  : s || (s = this.programs[e] = d(this, e, o)),
                s
              );
            },
            data: function(e, t) {
              for (; e && t--; ) e = e._parent;
              return e;
            },
            mergeIfNeeded: function(e, t) {
              var r = e || t;
              return e && t && e !== t && (r = i.extend({}, t, e)), r;
            },
            nullContext: Object.seal({}),
            noop: t.VM.noop,
            compilerInfo: e.compiler
          };
          function s(t) {
            var r =
                arguments.length <= 1 || void 0 === arguments[1]
                  ? {}
                  : arguments[1],
              i = r.data;
            s._setup(r), !r.partial && e.useData && (i = h(t, i));
            var o = void 0,
              a = e.useBlockParams ? [] : void 0;
            function p(t) {
              return "" + e.main(n, t, n.helpers, n.partials, i, a, o);
            }
            return (
              e.useDepths &&
                (o = r.depths
                  ? t != r.depths[0]
                    ? [t].concat(r.depths)
                    : r.depths
                  : [t]),
              (p = m(e.main, p, n, r.depths || [], i, a))(t, r)
            );
          }
          return (
            (s.isTop = !0),
            (s._setup = function(s) {
              if (s.partial)
                (n.protoAccessControl = s.protoAccessControl),
                  (n.helpers = s.helpers),
                  (n.partials = s.partials),
                  (n.decorators = s.decorators),
                  (n.hooks = s.hooks);
              else {
                var o = i.extend({}, t.helpers, s.helpers);
                !(function(e, t) {
                  Object.keys(e).forEach(function(r) {
                    var n = e[r];
                    e[r] = (function(e, t) {
                      var r = t.lookupProperty;
                      return u.wrapHelper(e, function(e) {
                        return i.extend({ lookupProperty: r }, e);
                      });
                    })(n, t);
                  });
                })(o, n),
                  (n.helpers = o),
                  e.usePartial &&
                    (n.partials = n.mergeIfNeeded(s.partials, t.partials)),
                  (e.usePartial || e.useDecorators) &&
                    (n.decorators = i.extend({}, t.decorators, s.decorators)),
                  (n.hooks = {}),
                  (n.protoAccessControl = c.createProtoAccessControl(s));
                var a = s.allowCallsToHelperMissing || r;
                p.moveHelperToHooks(n, "helperMissing", a),
                  p.moveHelperToHooks(n, "blockHelperMissing", a);
              }
            }),
            (s._child = function(t, r, i, s) {
              if (e.useBlockParams && !i)
                throw new o.default("must pass block params");
              if (e.useDepths && !s)
                throw new o.default("must pass parent depths");
              return d(n, t, e[t], r, 0, i, s);
            }),
            s
          );
        }),
        (t.wrapProgram = d),
        (t.resolvePartial = function(e, t, r) {
          e
            ? e.call || r.name || ((r.name = e), (e = r.partials[e]))
            : (e =
                "@partial-block" === r.name
                  ? r.data["partial-block"]
                  : r.partials[r.name]);
          return e;
        }),
        (t.invokePartial = function(e, t, r) {
          var n = r.data && r.data["partial-block"];
          (r.partial = !0),
            r.ids && (r.data.contextPath = r.ids[0] || r.data.contextPath);
          var s = void 0;
          r.fn &&
            r.fn !== l &&
            (function() {
              r.data = a.createFrame(r.data);
              var e = r.fn;
              (s = r.data["partial-block"] = function(t) {
                var r =
                  arguments.length <= 1 || void 0 === arguments[1]
                    ? {}
                    : arguments[1];
                return (
                  (r.data = a.createFrame(r.data)),
                  (r.data["partial-block"] = n),
                  e(t, r)
                );
              }),
                e.partials &&
                  (r.partials = i.extend({}, r.partials, e.partials));
            })();
          void 0 === e && s && (e = s);
          if (void 0 === e)
            throw new o.default(
              "The partial " + r.name + " could not be found"
            );
          if (e instanceof Function) return e(t, r);
        }),
        (t.noop = l);
      var n,
        i = (function(e) {
          if (e && e.__esModule) return e;
          var t = {};
          if (null != e)
            for (var r in e)
              Object.prototype.hasOwnProperty.call(e, r) && (t[r] = e[r]);
          return (t.default = e), t;
        })(r(5)),
        s = r(9),
        o = (n = s) && n.__esModule ? n : { default: n },
        a = r(21),
        p = r(22),
        u = r(49),
        c = r(24);
      function d(e, t, r, n, i, s, o) {
        function a(t) {
          var i =
              arguments.length <= 1 || void 0 === arguments[1]
                ? {}
                : arguments[1],
            a = o;
          return (
            !o ||
              t == o[0] ||
              (t === e.nullContext && null === o[0]) ||
              (a = [t].concat(o)),
            r(
              e,
              t,
              e.helpers,
              e.partials,
              i.data || n,
              s && [i.blockParams].concat(s),
              a
            )
          );
        }
        return (
          ((a = m(r, a, e, o, n, s)).program = t),
          (a.depth = o ? o.length : 0),
          (a.blockParams = i || 0),
          a
        );
      }
      function l() {
        return "";
      }
      function h(e, t) {
        return (
          (t && "root" in t) || ((t = t ? a.createFrame(t) : {}).root = e), t
        );
      }
      function m(e, t, r, n, s, o) {
        if (e.decorator) {
          var a = {};
          (t = e.decorator(t, a, r, n && n[0], s, o, n)), i.extend(t, a);
        }
        return t;
      }
    },
    function(e, t, r) {
      "use strict";
      (t.__esModule = !0),
        (t.wrapHelper = function(e, t) {
          if ("function" != typeof e) return e;
          return function() {
            var r = arguments[arguments.length - 1];
            return (
              (arguments[arguments.length - 1] = t(r)), e.apply(this, arguments)
            );
          };
        });
    },
    function(e, t, r) {
      "use strict";
      (function(r) {
        (t.__esModule = !0),
          (t.default = function(e) {
            var t = void 0 !== r ? r : window,
              n = t.Handlebars;
            e.noConflict = function() {
              return t.Handlebars === e && (t.Handlebars = n), e;
            };
          }),
          (e.exports = t.default);
      }.call(this, r(6)));
    },
    function(e, t, r) {
      var n = r(7);
      e.exports = function(e, t) {
        for (
          ;
          !Object.prototype.hasOwnProperty.call(e, t) && null !== (e = n(e));

        );
        return e;
      };
    },
    function(e, t) {
      function r(t, n) {
        return (
          (e.exports = r =
            Object.setPrototypeOf ||
            function(e, t) {
              return (e.__proto__ = t), e;
            }),
          r(t, n)
        );
      }
      e.exports = r;
    },
    function(e, t) {
      function r(t) {
        return (
          "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
            ? (e.exports = r = function(e) {
                return typeof e;
              })
            : (e.exports = r = function(e) {
                return e &&
                  "function" == typeof Symbol &&
                  e.constructor === Symbol &&
                  e !== Symbol.prototype
                  ? "symbol"
                  : typeof e;
              }),
          r(t)
        );
      }
      e.exports = r;
    },
    function(e, t) {
      e.exports = function(e) {
        if (void 0 === e)
          throw new ReferenceError(
            "this hasn't been initialised - super() hasn't been called"
          );
        return e;
      };
    },
    function(e, t, r) {
      "use strict";
      r.r(t),
        r.d(t, "requestLog", function() {
          return n;
        });
      function n(e) {
        e.hook.wrap("request", (t, r) => {
          e.log.debug("request", r);
          const n = Date.now(),
            i = e.request.endpoint.parse(r),
            s = i.url.replace(r.baseUrl, "");
          return t(r)
            .then(
              t => (
                e.log.info(
                  `${i.method} ${s} - ${t.status} in ${Date.now() - n}ms`
                ),
                t
              )
            )
            .catch(t => {
              throw (e.log.info(
                `${i.method} ${s} - ${t.status} in ${Date.now() - n}ms`
              ),
              t);
            });
        });
      }
      n.VERSION = "1.0.0";
    },
    function(e, t, r) {
      "use strict";
      r.r(t),
        r.d(t, "restEndpointMethods", function() {
          return a;
        });
      var n = r(4),
        i = {
          actions: {
            cancelWorkflowRun: {
              method: "POST",
              params: {
                owner: { required: !0, type: "string" },
                repo: { required: !0, type: "string" },
                run_id: { required: !0, type: "integer" }
              },
              url: "/repos/:owner/:repo/actions/runs/:run_id/cancel"
            },
            createOrUpdateSecretForRepo: {
              method: "PUT",
              params: {
                encrypted_value: { type: "string" },
                key_id: { type: "string" },
                name: { required: !0, type: "string" },
                owner: { required: !0, type: "string" },
                repo: { required: !0, type: "string" }
              },
              url: "/repos/:owner/:repo/actions/secrets/:name"
            },
            createRegistrationToken: {
              method: "POST",
              params: {
                owner: { required: !0, type: "string" },
                repo: { required: !0, type: "string" }
              },
              url: "/repos/:owner/:repo/actions/runners/registration-token"
            },
            createRemoveToken: {
              method: "POST",
              params: {
                owner: { required: !0, type: "string" },
                repo: { required: !0, type: "string" }
              },
              url: "/repos/:owner/:repo/actions/runners/remove-token"
            },
            deleteArtifact: {
              method: "DELETE",
              params: {
                artifact_id: { required: !0, type: "integer" },
                owner: { required: !0, type: "string" },
                repo: { required: !0, type: "string" }
              },
              url: "/repos/:owner/:repo/actions/artifacts/:artifact_id"
            },
            deleteSecretFromRepo: {
              method: "DELETE",
              params: {
                name: { required: !0, type: "string" },
                owner: { required: !0, type: "string" },
                repo: { required: !0, type: "string" }
              },
              url: "/repos/:owner/:repo/actions/secrets/:name"
            },
            downloadArtifact: {
              method: "GET",
              params: {
                archive_format: { required: !0, type: "string" },
                artifact_id: { required: !0, type: "integer" },
                owner: { required: !0, type: "string" },
                repo: { required: !0, type: "string" }
              },
              url:
                "/repos/:owner/:repo/actions/artifacts/:artifact_id/:archive_format"
            },
            getArtifact: {
              method: "GET",
              params: {
                artifact_id: { required: !0, type: "integer" },
                owner: { required: !0, type: "string" },
                repo: { required: !0, type: "string" }
              },
              url: "/repos/:owner/:repo/actions/artifacts/:artifact_id"
            },
            getPublicKey: {
              method: "GET",
              params: {
                owner: { required: !0, type: "string" },
                repo: { required: !0, type: "string" }
              },
              url: "/repos/:owner/:repo/actions/secrets/public-key"
            },
            getSecret: {
              method: "GET",
              params: {
                name: { required: !0, type: "string" },
                owner: { required: !0, type: "string" },
                page: { type: "integer" },
                per_page: { type: "integer" },
                repo: { required: !0, type: "string" }
              },
              url: "/repos/:owner/:repo/actions/secrets/:name"
            },
            getSelfHostedRunner: {
              method: "GET",
              params: {
                owner: { required: !0, type: "string" },
                repo: { required: !0, type: "string" },
                runner_id: { required: !0, type: "integer" }
              },
              url: "/repos/:owner/:repo/actions/runners/:runner_id"
            },
            getWorkflow: {
              method: "GET",
              params: {
                owner: { required: !0, type: "string" },
                repo: { required: !0, type: "string" },
                workflow_id: { required: !0, type: "integer" }
              },
              url: "/repos/:owner/:repo/actions/workflows/:workflow_id"
            },
            getWorkflowJob: {
              method: "GET",
              params: {
                job_id: { required: !0, type: "integer" },
                owner: { required: !0, type: "string" },
                repo: { required: !0, type: "string" }
              },
              url: "/repos/:owner/:repo/actions/jobs/:job_id"
            },
            getWorkflowRun: {
              method: "GET",
              params: {
                owner: { required: !0, type: "string" },
                repo: { required: !0, type: "string" },
                run_id: { required: !0, type: "integer" }
              },
              url: "/repos/:owner/:repo/actions/runs/:run_id"
            },
            listDownloadsForSelfHostedRunnerApplication: {
              method: "GET",
              params: {
                owner: { required: !0, type: "string" },
                repo: { required: !0, type: "string" }
              },
              url: "/repos/:owner/:repo/actions/runners/downloads"
            },
            listJobsForWorkflowRun: {
              method: "GET",
              params: {
                owner: { required: !0, type: "string" },
                page: { type: "integer" },
                per_page: { type: "integer" },
                repo: { required: !0, type: "string" },
                run_id: { required: !0, type: "integer" }
              },
              url: "/repos/:owner/:repo/actions/runs/:run_id/jobs"
            },
            listRepoWorkflowRuns: {
              method: "GET",
              params: {
                actor: { type: "string" },
                branch: { type: "string" },
                event: { type: "string" },
                owner: { required: !0, type: "string" },
                page: { type: "integer" },
                per_page: { type: "integer" },
                repo: { required: !0, type: "string" },
                status: {
                  enum: ["completed", "status", "conclusion"],
                  type: "string"
                }
              },
              url: "/repos/:owner/:repo/actions/runs"
            },
            listRepoWorkflows: {
              method: "GET",
              params: {
                owner: { required: !0, type: "string" },
                page: { type: "integer" },
                per_page: { type: "integer" },
                repo: { required: !0, type: "string" }
              },
              url: "/repos/:owner/:repo/actions/workflows"
            },
            listSecretsForRepo: {
              method: "GET",
              params: {
                owner: { required: !0, type: "string" },
                page: { type: "integer" },
                per_page: { type: "integer" },
                repo: { required: !0, type: "string" }
              },
              url: "/repos/:owner/:repo/actions/secrets"
            },
            listSelfHostedRunnersForRepo: {
              method: "GET",
              params: {
                owner: { required: !0, type: "string" },
                page: { type: "integer" },
                per_page: { type: "integer" },
                repo: { required: !0, type: "string" }
              },
              url: "/repos/:owner/:repo/actions/runners"
            },
            listWorkflowJobLogs: {
              method: "GET",
              params: {
                job_id: { required: !0, type: "integer" },
                owner: { required: !0, type: "string" },
                page: { type: "integer" },
                per_page: { type: "integer" },
                repo: { required: !0, type: "string" }
              },
              url: "/repos/:owner/:repo/actions/jobs/:job_id/logs"
            },
            listWorkflowRunArtifacts: {
              method: "GET",
              params: {
                owner: { required: !0, type: "string" },
                page: { type: "integer" },
                per_page: { type: "integer" },
                repo: { required: !0, type: "string" },
                run_id: { required: !0, type: "integer" }
              },
              url: "/repos/:owner/:repo/actions/runs/:run_id/artifacts"
            },
            listWorkflowRunLogs: {
              method: "GET",
              params: {
                owner: { required: !0, type: "string" },
                page: { type: "integer" },
                per_page: { type: "integer" },
                repo: { required: !0, type: "string" },
                run_id: { required: !0, type: "integer" }
              },
              url: "/repos/:owner/:repo/actions/runs/:run_id/logs"
            },
            listWorkflowRuns: {
              method: "GET",
              params: {
                actor: { type: "string" },
                branch: { type: "string" },
                event: { type: "string" },
                owner: { required: !0, type: "string" },
                page: { type: "integer" },
                per_page: { type: "integer" },
                repo: { required: !0, type: "string" },
                status: {
                  enum: ["completed", "status", "conclusion"],
                  type: "string"
                },
                workflow_id: { required: !0, type: "integer" }
              },
              url: "/repos/:owner/:repo/actions/workflows/:workflow_id/runs"
            },
            reRunWorkflow: {
              method: "POST",
              params: {
                owner: { required: !0, type: "string" },
                repo: { required: !0, type: "string" },
                run_id: { required: !0, type: "integer" }
              },
              url: "/repos/:owner/:repo/actions/runs/:run_id/rerun"
            },
            removeSelfHostedRunner: {
              method: "DELETE",
              params: {
                owner: { required: !0, type: "string" },
                repo: { required: !0, type: "string" },
                runner_id: { required: !0, type: "integer" }
              },
              url: "/repos/:owner/:repo/actions/runners/:runner_id"
            }
          },
          activity: {
            checkStarringRepo: {
              method: "GET",
              params: {
                owner: { required: !0, type: "string" },
                repo: { required: !0, type: "string" }
              },
              url: "/user/starred/:owner/:repo"
            },
            deleteRepoSubscription: {
              method: "DELETE",
              params: {
                owner: { required: !0, type: "string" },
                repo: { required: !0, type: "string" }
              },
              url: "/repos/:owner/:repo/subscription"
            },
            deleteThreadSubscription: {
              method: "DELETE",
              params: { thread_id: { required: !0, type: "integer" } },
              url: "/notifications/threads/:thread_id/subscription"
            },
            getRepoSubscription: {
              method: "GET",
              params: {
                owner: { required: !0, type: "string" },
                repo: { required: !0, type: "string" }
              },
              url: "/repos/:owner/:repo/subscription"
            },
            getThread: {
              method: "GET",
              params: { thread_id: { required: !0, type: "integer" } },
              url: "/notifications/threads/:thread_id"
            },
            getThreadSubscription: {
              method: "GET",
              params: { thread_id: { required: !0, type: "integer" } },
              url: "/notifications/threads/:thread_id/subscription"
            },
            listEventsForOrg: {
              method: "GET",
              params: {
                org: { required: !0, type: "string" },
                page: { type: "integer" },
                per_page: { type: "integer" },
                username: { required: !0, type: "string" }
              },
              url: "/users/:username/events/orgs/:org"
            },
            listEventsForUser: {
              method: "GET",
              params: {
                page: { type: "integer" },
                per_page: { type: "integer" },
                username: { required: !0, type: "string" }
              },
              url: "/users/:username/events"
            },
            listFeeds: { method: "GET", params: {}, url: "/feeds" },
            listNotifications: {
              method: "GET",
              params: {
                all: { type: "boolean" },
                before: { type: "string" },
                page: { type: "integer" },
                participating: { type: "boolean" },
                per_page: { type: "integer" },
                since: { type: "string" }
              },
              url: "/notifications"
            },
            listNotificationsForRepo: {
              method: "GET",
              params: {
                all: { type: "boolean" },
                before: { type: "string" },
                owner: { required: !0, type: "string" },
                page: { type: "integer" },
                participating: { type: "boolean" },
                per_page: { type: "integer" },
                repo: { required: !0, type: "string" },
                since: { type: "string" }
              },
              url: "/repos/:owner/:repo/notifications"
            },
            listPublicEvents: {
              method: "GET",
              params: {
                page: { type: "integer" },
                per_page: { type: "integer" }
              },
              url: "/events"
            },
            listPublicEventsForOrg: {
              method: "GET",
              params: {
                org: { required: !0, type: "string" },
                page: { type: "integer" },
                per_page: { type: "integer" }
              },
              url: "/orgs/:org/events"
            },
            listPublicEventsForRepoNetwork: {
              method: "GET",
              params: {
                owner: { required: !0, type: "string" },
                page: { type: "integer" },
                per_page: { type: "integer" },
                repo: { required: !0, type: "string" }
              },
              url: "/networks/:owner/:repo/events"
            },
            listPublicEventsForUser: {
              method: "GET",
              params: {
                page: { type: "integer" },
                per_page: { type: "integer" },
                username: { required: !0, type: "string" }
              },
              url: "/users/:username/events/public"
            },
            listReceivedEventsForUser: {
              method: "GET",
              params: {
                page: { type: "integer" },
                per_page: { type: "integer" },
                username: { required: !0, type: "string" }
              },
              url: "/users/:username/received_events"
            },
            listReceivedPublicEventsForUser: {
              method: "GET",
              params: {
                page: { type: "integer" },
                per_page: { type: "integer" },
                username: { required: !0, type: "string" }
              },
              url: "/users/:username/received_events/public"
            },
            listRepoEvents: {
              method: "GET",
              params: {
                owner: { required: !0, type: "string" },
                page: { type: "integer" },
                per_page: { type: "integer" },
                repo: { required: !0, type: "string" }
              },
              url: "/repos/:owner/:repo/events"
            },
            listReposStarredByAuthenticatedUser: {
              method: "GET",
              params: {
                direction: { enum: ["asc", "desc"], type: "string" },
                page: { type: "integer" },
                per_page: { type: "integer" },
                sort: { enum: ["created", "updated"], type: "string" }
              },
              url: "/user/starred"
            },
            listReposStarredByUser: {
              method: "GET",
              params: {
                direction: { enum: ["asc", "desc"], type: "string" },
                page: { type: "integer" },
                per_page: { type: "integer" },
                sort: { enum: ["created", "updated"], type: "string" },
                username: { required: !0, type: "string" }
              },
              url: "/users/:username/starred"
            },
            listReposWatchedByUser: {
              method: "GET",
              params: {
                page: { type: "integer" },
                per_page: { type: "integer" },
                username: { required: !0, type: "string" }
              },
              url: "/users/:username/subscriptions"
            },
            listStargazersForRepo: {
              method: "GET",
              params: {
                owner: { required: !0, type: "string" },
                page: { type: "integer" },
                per_page: { type: "integer" },
                repo: { required: !0, type: "string" }
              },
              url: "/repos/:owner/:repo/stargazers"
            },
            listWatchedReposForAuthenticatedUser: {
              method: "GET",
              params: {
                page: { type: "integer" },
                per_page: { type: "integer" }
              },
              url: "/user/subscriptions"
            },
            listWatchersForRepo: {
              method: "GET",
              params: {
                owner: { required: !0, type: "string" },
                page: { type: "integer" },
                per_page: { type: "integer" },
                repo: { required: !0, type: "string" }
              },
              url: "/repos/:owner/:repo/subscribers"
            },
            markAsRead: {
              method: "PUT",
              params: { last_read_at: { type: "string" } },
              url: "/notifications"
            },
            markNotificationsAsReadForRepo: {
              method: "PUT",
              params: {
                last_read_at: { type: "string" },
                owner: { required: !0, type: "string" },
                repo: { required: !0, type: "string" }
              },
              url: "/repos/:owner/:repo/notifications"
            },
            markThreadAsRead: {
              method: "PATCH",
              params: { thread_id: { required: !0, type: "integer" } },
              url: "/notifications/threads/:thread_id"
            },
            setRepoSubscription: {
              method: "PUT",
              params: {
                ignored: { type: "boolean" },
                owner: { required: !0, type: "string" },
                repo: { required: !0, type: "string" },
                subscribed: { type: "boolean" }
              },
              url: "/repos/:owner/:repo/subscription"
            },
            setThreadSubscription: {
              method: "PUT",
              params: {
                ignored: { type: "boolean" },
                thread_id: { required: !0, type: "integer" }
              },
              url: "/notifications/threads/:thread_id/subscription"
            },
            starRepo: {
              method: "PUT",
              params: {
                owner: { required: !0, type: "string" },
                repo: { required: !0, type: "string" }
              },
              url: "/user/starred/:owner/:repo"
            },
            unstarRepo: {
              method: "DELETE",
              params: {
                owner: { required: !0, type: "string" },
                repo: { required: !0, type: "string" }
              },
              url: "/user/starred/:owner/:repo"
            }
          },
          apps: {
            addRepoToInstallation: {
              headers: {
                accept: "application/vnd.github.machine-man-preview+json"
              },
              method: "PUT",
              params: {
                installation_id: { required: !0, type: "integer" },
                repository_id: { required: !0, type: "integer" }
              },
              url:
                "/user/installations/:installation_id/repositories/:repository_id"
            },
            checkAccountIsAssociatedWithAny: {
              method: "GET",
              params: { account_id: { required: !0, type: "integer" } },
              url: "/marketplace_listing/accounts/:account_id"
            },
            checkAccountIsAssociatedWithAnyStubbed: {
              method: "GET",
              params: { account_id: { required: !0, type: "integer" } },
              url: "/marketplace_listing/stubbed/accounts/:account_id"
            },
            checkAuthorization: {
              deprecated:
                "octokit.apps.checkAuthorization() is deprecated, see https://developer.github.com/v3/apps/oauth_applications/#check-an-authorization",
              method: "GET",
              params: {
                access_token: { required: !0, type: "string" },
                client_id: { required: !0, type: "string" }
              },
              url: "/applications/:client_id/tokens/:access_token"
            },
            checkToken: {
              headers: {
                accept: "application/vnd.github.doctor-strange-preview+json"
              },
              method: "POST",
              params: {
                access_token: { type: "string" },
                client_id: { required: !0, type: "string" }
              },
              url: "/applications/:client_id/token"
            },
            createContentAttachment: {
              headers: {
                accept: "application/vnd.github.corsair-preview+json"
              },
              method: "POST",
              params: {
                body: { required: !0, type: "string" },
                content_reference_id: { required: !0, type: "integer" },
                title: { required: !0, type: "string" }
              },
              url: "/content_references/:content_reference_id/attachments"
            },
            createFromManifest: {
              headers: { accept: "application/vnd.github.fury-preview+json" },
              method: "POST",
              params: { code: { required: !0, type: "string" } },
              url: "/app-manifests/:code/conversions"
            },
            createInstallationToken: {
              headers: {
                accept: "application/vnd.github.machine-man-preview+json"
              },
              method: "POST",
              params: {
                installation_id: { required: !0, type: "integer" },
                permissions: { type: "object" },
                repository_ids: { type: "integer[]" }
              },
              url: "/app/installations/:installation_id/access_tokens"
            },
            deleteAuthorization: {
              headers: {
                accept: "application/vnd.github.doctor-strange-preview+json"
              },
              method: "DELETE",
              params: {
                access_token: { type: "string" },
                client_id: { required: !0, type: "string" }
              },
              url: "/applications/:client_id/grant"
            },
            deleteInstallation: {
              headers: {
                accept:
                  "application/vnd.github.gambit-preview+json,application/vnd.github.machine-man-preview+json"
              },
              method: "DELETE",
              params: { installation_id: { required: !0, type: "integer" } },
              url: "/app/installations/:installation_id"
            },
            deleteToken: {
              headers: {
                accept: "application/vnd.github.doctor-strange-preview+json"
              },
              method: "DELETE",
              params: {
                access_token: { type: "string" },
                client_id: { required: !0, type: "string" }
              },
              url: "/applications/:client_id/token"
            },
            findOrgInstallation: {
              deprecated:
                "octokit.apps.findOrgInstallation() has been renamed to octokit.apps.getOrgInstallation() (2019-04-10)",
              headers: {
                accept: "application/vnd.github.machine-man-preview+json"
              },
              method: "GET",
              params: { org: { required: !0, type: "string" } },
              url: "/orgs/:org/installation"
            },
            findRepoInstallation: {
              deprecated:
                "octokit.apps.findRepoInstallation() has been renamed to octokit.apps.getRepoInstallation() (2019-04-10)",
              headers: {
                accept: "application/vnd.github.machine-man-preview+json"
              },
              method: "GET",
              params: {
                owner: { required: !0, type: "string" },
                repo: { required: !0, type: "string" }
              },
              url: "/repos/:owner/:repo/installation"
            },
            findUserInstallation: {
              deprecated:
                "octokit.apps.findUserInstallation() has been renamed to octokit.apps.getUserInstallation() (2019-04-10)",
              headers: {
                accept: "application/vnd.github.machine-man-preview+json"
              },
              method: "GET",
              params: { username: { required: !0, type: "string" } },
              url: "/users/:username/installation"
            },
            getAuthenticated: {
              headers: {
                accept: "application/vnd.github.machine-man-preview+json"
              },
              method: "GET",
              params: {},
              url: "/app"
            },
            getBySlug: {
              headers: {
                accept: "application/vnd.github.machine-man-preview+json"
              },
              method: "GET",
              params: { app_slug: { required: !0, type: "string" } },
              url: "/apps/:app_slug"
            },
            getInstallation: {
              headers: {
                accept: "application/vnd.github.machine-man-preview+json"
              },
              method: "GET",
              params: { installation_id: { required: !0, type: "integer" } },
              url: "/app/installations/:installation_id"
            },
            getOrgInstallation: {
              headers: {
                accept: "application/vnd.github.machine-man-preview+json"
              },
              method: "GET",
              params: { org: { required: !0, type: "string" } },
              url: "/orgs/:org/installation"
            },
            getRepoInstallation: {
              headers: {
                accept: "application/vnd.github.machine-man-preview+json"
              },
              method: "GET",
              params: {
                owner: { required: !0, type: "string" },
                repo: { required: !0, type: "string" }
              },
              url: "/repos/:owner/:repo/installation"
            },
            getUserInstallation: {
              headers: {
                accept: "application/vnd.github.machine-man-preview+json"
              },
              method: "GET",
              params: { username: { required: !0, type: "string" } },
              url: "/users/:username/installation"
            },
            listAccountsUserOrOrgOnPlan: {
              method: "GET",
              params: {
                direction: { enum: ["asc", "desc"], type: "string" },
                page: { type: "integer" },
                per_page: { type: "integer" },
                plan_id: { required: !0, type: "integer" },
                sort: { enum: ["created", "updated"], type: "string" }
              },
              url: "/marketplace_listing/plans/:plan_id/accounts"
            },
            listAccountsUserOrOrgOnPlanStubbed: {
              method: "GET",
              params: {
                direction: { enum: ["asc", "desc"], type: "string" },
                page: { type: "integer" },
                per_page: { type: "integer" },
                plan_id: { required: !0, type: "integer" },
                sort: { enum: ["created", "updated"], type: "string" }
              },
              url: "/marketplace_listing/stubbed/plans/:plan_id/accounts"
            },
            listInstallationReposForAuthenticatedUser: {
              headers: {
                accept: "application/vnd.github.machine-man-preview+json"
              },
              method: "GET",
              params: {
                installation_id: { required: !0, type: "integer" },
                page: { type: "integer" },
                per_page: { type: "integer" }
              },
              url: "/user/installations/:installation_id/repositories"
            },
            listInstallations: {
              headers: {
                accept: "application/vnd.github.machine-man-preview+json"
              },
              method: "GET",
              params: {
                page: { type: "integer" },
                per_page: { type: "integer" }
              },
              url: "/app/installations"
            },
            listInstallationsForAuthenticatedUser: {
              headers: {
                accept: "application/vnd.github.machine-man-preview+json"
              },
              method: "GET",
              params: {
                page: { type: "integer" },
                per_page: { type: "integer" }
              },
              url: "/user/installations"
            },
            listMarketplacePurchasesForAuthenticatedUser: {
              method: "GET",
              params: {
                page: { type: "integer" },
                per_page: { type: "integer" }
              },
              url: "/user/marketplace_purchases"
            },
            listMarketplacePurchasesForAuthenticatedUserStubbed: {
              method: "GET",
              params: {
                page: { type: "integer" },
                per_page: { type: "integer" }
              },
              url: "/user/marketplace_purchases/stubbed"
            },
            listPlans: {
              method: "GET",
              params: {
                page: { type: "integer" },
                per_page: { type: "integer" }
              },
              url: "/marketplace_listing/plans"
            },
            listPlansStubbed: {
              method: "GET",
              params: {
                page: { type: "integer" },
                per_page: { type: "integer" }
              },
              url: "/marketplace_listing/stubbed/plans"
            },
            listRepos: {
              headers: {
                accept: "application/vnd.github.machine-man-preview+json"
              },
              method: "GET",
              params: {
                page: { type: "integer" },
                per_page: { type: "integer" }
              },
              url: "/installation/repositories"
            },
            removeRepoFromInstallation: {
              headers: {
                accept: "application/vnd.github.machine-man-preview+json"
              },
              method: "DELETE",
              params: {
                installation_id: { required: !0, type: "integer" },
                repository_id: { required: !0, type: "integer" }
              },
              url:
                "/user/installations/:installation_id/repositories/:repository_id"
            },
            resetAuthorization: {
              deprecated:
                "octokit.apps.resetAuthorization() is deprecated, see https://developer.github.com/v3/apps/oauth_applications/#reset-an-authorization",
              method: "POST",
              params: {
                access_token: { required: !0, type: "string" },
                client_id: { required: !0, type: "string" }
              },
              url: "/applications/:client_id/tokens/:access_token"
            },
            resetToken: {
              headers: {
                accept: "application/vnd.github.doctor-strange-preview+json"
              },
              method: "PATCH",
              params: {
                access_token: { type: "string" },
                client_id: { required: !0, type: "string" }
              },
              url: "/applications/:client_id/token"
            },
            revokeAuthorizationForApplication: {
              deprecated:
                "octokit.apps.revokeAuthorizationForApplication() is deprecated, see https://developer.github.com/v3/apps/oauth_applications/#revoke-an-authorization-for-an-application",
              method: "DELETE",
              params: {
                access_token: { required: !0, type: "string" },
                client_id: { required: !0, type: "string" }
              },
              url: "/applications/:client_id/tokens/:access_token"
            },
            revokeGrantForApplication: {
              deprecated:
                "octokit.apps.revokeGrantForApplication() is deprecated, see https://developer.github.com/v3/apps/oauth_applications/#revoke-a-grant-for-an-application",
              method: "DELETE",
              params: {
                access_token: { required: !0, type: "string" },
                client_id: { required: !0, type: "string" }
              },
              url: "/applications/:client_id/grants/:access_token"
            },
            revokeInstallationToken: {
              headers: { accept: "application/vnd.github.gambit-preview+json" },
              method: "DELETE",
              params: {},
              url: "/installation/token"
            }
          },
          checks: {
            create: {
              headers: {
                accept: "application/vnd.github.antiope-preview+json"
              },
              method: "POST",
              params: {
                actions: { type: "object[]" },
                "actions[].description": { required: !0, type: "string" },
                "actions[].identifier": { required: !0, type: "string" },
                "actions[].label": { required: !0, type: "string" },
                completed_at: { type: "string" },
                conclusion: {
                  enum: [
                    "success",
                    "failure",
                    "neutral",
                    "cancelled",
                    "timed_out",
                    "action_required"
                  ],
                  type: "string"
                },
                details_url: { type: "string" },
                external_id: { type: "string" },
                head_sha: { required: !0, type: "string" },
                name: { required: !0, type: "string" },
                output: { type: "object" },
                "output.annotations": { type: "object[]" },
                "output.annotations[].annotation_level": {
                  enum: ["notice", "warning", "failure"],
                  required: !0,
                  type: "string"
                },
                "output.annotations[].end_column": { type: "integer" },
                "output.annotations[].end_line": {
                  required: !0,
                  type: "integer"
                },
                "output.annotations[].message": {
                  required: !0,
                  type: "string"
                },
                "output.annotations[].path": { required: !0, type: "string" },
                "output.annotations[].raw_details": { type: "string" },
                "output.annotations[].start_column": { type: "integer" },
                "output.annotations[].start_line": {
                  required: !0,
                  type: "integer"
                },
                "output.annotations[].title": { type: "string" },
                "output.images": { type: "object[]" },
                "output.images[].alt": { required: !0, type: "string" },
                "output.images[].caption": { type: "string" },
                "output.images[].image_url": { required: !0, type: "string" },
                "output.summary": { required: !0, type: "string" },
                "output.text": { type: "string" },
                "output.title": { required: !0, type: "string" },
                owner: { required: !0, type: "string" },
                repo: { required: !0, type: "string" },
                started_at: { type: "string" },
                status: {
                  enum: ["queued", "in_progress", "completed"],
                  type: "string"
                }
              },
              url: "/repos/:owner/:repo/check-runs"
            },
            createSuite: {
              headers: {
                accept: "application/vnd.github.antiope-preview+json"
              },
              method: "POST",
              params: {
                head_sha: { required: !0, type: "string" },
                owner: { required: !0, type: "string" },
                repo: { required: !0, type: "string" }
              },
              url: "/repos/:owner/:repo/check-suites"
            },
            get: {
              headers: {
                accept: "application/vnd.github.antiope-preview+json"
              },
              method: "GET",
              params: {
                check_run_id: { required: !0, type: "integer" },
                owner: { required: !0, type: "string" },
                repo: { required: !0, type: "string" }
              },
              url: "/repos/:owner/:repo/check-runs/:check_run_id"
            },
            getSuite: {
              headers: {
                accept: "application/vnd.github.antiope-preview+json"
              },
              method: "GET",
              params: {
                check_suite_id: { required: !0, type: "integer" },
                owner: { required: !0, type: "string" },
                repo: { required: !0, type: "string" }
              },
              url: "/repos/:owner/:repo/check-suites/:check_suite_id"
            },
            listAnnotations: {
              headers: {
                accept: "application/vnd.github.antiope-preview+json"
              },
              method: "GET",
              params: {
                check_run_id: { required: !0, type: "integer" },
                owner: { required: !0, type: "string" },
                page: { type: "integer" },
                per_page: { type: "integer" },
                repo: { required: !0, type: "string" }
              },
              url: "/repos/:owner/:repo/check-runs/:check_run_id/annotations"
            },
            listForRef: {
              headers: {
                accept: "application/vnd.github.antiope-preview+json"
              },
              method: "GET",
              params: {
                check_name: { type: "string" },
                filter: { enum: ["latest", "all"], type: "string" },
                owner: { required: !0, type: "string" },
                page: { type: "integer" },
                per_page: { type: "integer" },
                ref: { required: !0, type: "string" },
                repo: { required: !0, type: "string" },
                status: {
                  enum: ["queued", "in_progress", "completed"],
                  type: "string"
                }
              },
              url: "/repos/:owner/:repo/commits/:ref/check-runs"
            },
            listForSuite: {
              headers: {
                accept: "application/vnd.github.antiope-preview+json"
              },
              method: "GET",
              params: {
                check_name: { type: "string" },
                check_suite_id: { required: !0, type: "integer" },
                filter: { enum: ["latest", "all"], type: "string" },
                owner: { required: !0, type: "string" },
                page: { type: "integer" },
                per_page: { type: "integer" },
                repo: { required: !0, type: "string" },
                status: {
                  enum: ["queued", "in_progress", "completed"],
                  type: "string"
                }
              },
              url: "/repos/:owner/:repo/check-suites/:check_suite_id/check-runs"
            },
            listSuitesForRef: {
              headers: {
                accept: "application/vnd.github.antiope-preview+json"
              },
              method: "GET",
              params: {
                app_id: { type: "integer" },
                check_name: { type: "string" },
                owner: { required: !0, type: "string" },
                page: { type: "integer" },
                per_page: { type: "integer" },
                ref: { required: !0, type: "string" },
                repo: { required: !0, type: "string" }
              },
              url: "/repos/:owner/:repo/commits/:ref/check-suites"
            },
            rerequestSuite: {
              headers: {
                accept: "application/vnd.github.antiope-preview+json"
              },
              method: "POST",
              params: {
                check_suite_id: { required: !0, type: "integer" },
                owner: { required: !0, type: "string" },
                repo: { required: !0, type: "string" }
              },
              url: "/repos/:owner/:repo/check-suites/:check_suite_id/rerequest"
            },
            setSuitesPreferences: {
              headers: {
                accept: "application/vnd.github.antiope-preview+json"
              },
              method: "PATCH",
              params: {
                auto_trigger_checks: { type: "object[]" },
                "auto_trigger_checks[].app_id": {
                  required: !0,
                  type: "integer"
                },
                "auto_trigger_checks[].setting": {
                  required: !0,
                  type: "boolean"
                },
                owner: { required: !0, type: "string" },
                repo: { required: !0, type: "string" }
              },
              url: "/repos/:owner/:repo/check-suites/preferences"
            },
            update: {
              headers: {
                accept: "application/vnd.github.antiope-preview+json"
              },
              method: "PATCH",
              params: {
                actions: { type: "object[]" },
                "actions[].description": { required: !0, type: "string" },
                "actions[].identifier": { required: !0, type: "string" },
                "actions[].label": { required: !0, type: "string" },
                check_run_id: { required: !0, type: "integer" },
                completed_at: { type: "string" },
                conclusion: {
                  enum: [
                    "success",
                    "failure",
                    "neutral",
                    "cancelled",
                    "timed_out",
                    "action_required"
                  ],
                  type: "string"
                },
                details_url: { type: "string" },
                external_id: { type: "string" },
                name: { type: "string" },
                output: { type: "object" },
                "output.annotations": { type: "object[]" },
                "output.annotations[].annotation_level": {
                  enum: ["notice", "warning", "failure"],
                  required: !0,
                  type: "string"
                },
                "output.annotations[].end_column": { type: "integer" },
                "output.annotations[].end_line": {
                  required: !0,
                  type: "integer"
                },
                "output.annotations[].message": {
                  required: !0,
                  type: "string"
                },
                "output.annotations[].path": { required: !0, type: "string" },
                "output.annotations[].raw_details": { type: "string" },
                "output.annotations[].start_column": { type: "integer" },
                "output.annotations[].start_line": {
                  required: !0,
                  type: "integer"
                },
                "output.annotations[].title": { type: "string" },
                "output.images": { type: "object[]" },
                "output.images[].alt": { required: !0, type: "string" },
                "output.images[].caption": { type: "string" },
                "output.images[].image_url": { required: !0, type: "string" },
                "output.summary": { required: !0, type: "string" },
                "output.text": { type: "string" },
                "output.title": { type: "string" },
                owner: { required: !0, type: "string" },
                repo: { required: !0, type: "string" },
                started_at: { type: "string" },
                status: {
                  enum: ["queued", "in_progress", "completed"],
                  type: "string"
                }
              },
              url: "/repos/:owner/:repo/check-runs/:check_run_id"
            }
          },
          codesOfConduct: {
            getConductCode: {
              headers: {
                accept: "application/vnd.github.scarlet-witch-preview+json"
              },
              method: "GET",
              params: { key: { required: !0, type: "string" } },
              url: "/codes_of_conduct/:key"
            },
            getForRepo: {
              headers: {
                accept: "application/vnd.github.scarlet-witch-preview+json"
              },
              method: "GET",
              params: {
                owner: { required: !0, type: "string" },
                repo: { required: !0, type: "string" }
              },
              url: "/repos/:owner/:repo/community/code_of_conduct"
            },
            listConductCodes: {
              headers: {
                accept: "application/vnd.github.scarlet-witch-preview+json"
              },
              method: "GET",
              params: {},
              url: "/codes_of_conduct"
            }
          },
          emojis: { get: { method: "GET", params: {}, url: "/emojis" } },
          gists: {
            checkIsStarred: {
              method: "GET",
              params: { gist_id: { required: !0, type: "string" } },
              url: "/gists/:gist_id/star"
            },
            create: {
              method: "POST",
              params: {
                description: { type: "string" },
                files: { required: !0, type: "object" },
                "files.content": { type: "string" },
                public: { type: "boolean" }
              },
              url: "/gists"
            },
            createComment: {
              method: "POST",
              params: {
                body: { required: !0, type: "string" },
                gist_id: { required: !0, type: "string" }
              },
              url: "/gists/:gist_id/comments"
            },
            delete: {
              method: "DELETE",
              params: { gist_id: { required: !0, type: "string" } },
              url: "/gists/:gist_id"
            },
            deleteComment: {
              method: "DELETE",
              params: {
                comment_id: { required: !0, type: "integer" },
                gist_id: { required: !0, type: "string" }
              },
              url: "/gists/:gist_id/comments/:comment_id"
            },
            fork: {
              method: "POST",
              params: { gist_id: { required: !0, type: "string" } },
              url: "/gists/:gist_id/forks"
            },
            get: {
              method: "GET",
              params: { gist_id: { required: !0, type: "string" } },
              url: "/gists/:gist_id"
            },
            getComment: {
              method: "GET",
              params: {
                comment_id: { required: !0, type: "integer" },
                gist_id: { required: !0, type: "string" }
              },
              url: "/gists/:gist_id/comments/:comment_id"
            },
            getRevision: {
              method: "GET",
              params: {
                gist_id: { required: !0, type: "string" },
                sha: { required: !0, type: "string" }
              },
              url: "/gists/:gist_id/:sha"
            },
            list: {
              method: "GET",
              params: {
                page: { type: "integer" },
                per_page: { type: "integer" },
                since: { type: "string" }
              },
              url: "/gists"
            },
            listComments: {
              method: "GET",
              params: {
                gist_id: { required: !0, type: "string" },
                page: { type: "integer" },
                per_page: { type: "integer" }
              },
              url: "/gists/:gist_id/comments"
            },
            listCommits: {
              method: "GET",
              params: {
                gist_id: { required: !0, type: "string" },
                page: { type: "integer" },
                per_page: { type: "integer" }
              },
              url: "/gists/:gist_id/commits"
            },
            listForks: {
              method: "GET",
              params: {
                gist_id: { required: !0, type: "string" },
                page: { type: "integer" },
                per_page: { type: "integer" }
              },
              url: "/gists/:gist_id/forks"
            },
            listPublic: {
              method: "GET",
              params: {
                page: { type: "integer" },
                per_page: { type: "integer" },
                since: { type: "string" }
              },
              url: "/gists/public"
            },
            listPublicForUser: {
              method: "GET",
              params: {
                page: { type: "integer" },
                per_page: { type: "integer" },
                since: { type: "string" },
                username: { required: !0, type: "string" }
              },
              url: "/users/:username/gists"
            },
            listStarred: {
              method: "GET",
              params: {
                page: { type: "integer" },
                per_page: { type: "integer" },
                since: { type: "string" }
              },
              url: "/gists/starred"
            },
            star: {
              method: "PUT",
              params: { gist_id: { required: !0, type: "string" } },
              url: "/gists/:gist_id/star"
            },
            unstar: {
              method: "DELETE",
              params: { gist_id: { required: !0, type: "string" } },
              url: "/gists/:gist_id/star"
            },
            update: {
              method: "PATCH",
              params: {
                description: { type: "string" },
                files: { type: "object" },
                "files.content": { type: "string" },
                "files.filename": { type: "string" },
                gist_id: { required: !0, type: "string" }
              },
              url: "/gists/:gist_id"
            },
            updateComment: {
              method: "PATCH",
              params: {
                body: { required: !0, type: "string" },
                comment_id: { required: !0, type: "integer" },
                gist_id: { required: !0, type: "string" }
              },
              url: "/gists/:gist_id/comments/:comment_id"
            }
          },
          git: {
            createBlob: {
              method: "POST",
              params: {
                content: { required: !0, type: "string" },
                encoding: { type: "string" },
                owner: { required: !0, type: "string" },
                repo: { required: !0, type: "string" }
              },
              url: "/repos/:owner/:repo/git/blobs"
            },
            createCommit: {
              method: "POST",
              params: {
                author: { type: "object" },
                "author.date": { type: "string" },
                "author.email": { type: "string" },
                "author.name": { type: "string" },
                committer: { type: "object" },
                "committer.date": { type: "string" },
                "committer.email": { type: "string" },
                "committer.name": { type: "string" },
                message: { required: !0, type: "string" },
                owner: { required: !0, type: "string" },
                parents: { required: !0, type: "string[]" },
                repo: { required: !0, type: "string" },
                signature: { type: "string" },
                tree: { required: !0, type: "string" }
              },
              url: "/repos/:owner/:repo/git/commits"
            },
            createRef: {
              method: "POST",
              params: {
                owner: { required: !0, type: "string" },
                ref: { required: !0, type: "string" },
                repo: { required: !0, type: "string" },
                sha: { required: !0, type: "string" }
              },
              url: "/repos/:owner/:repo/git/refs"
            },
            createTag: {
              method: "POST",
              params: {
                message: { required: !0, type: "string" },
                object: { required: !0, type: "string" },
                owner: { required: !0, type: "string" },
                repo: { required: !0, type: "string" },
                tag: { required: !0, type: "string" },
                tagger: { type: "object" },
                "tagger.date": { type: "string" },
                "tagger.email": { type: "string" },
                "tagger.name": { type: "string" },
                type: {
                  enum: ["commit", "tree", "blob"],
                  required: !0,
                  type: "string"
                }
              },
              url: "/repos/:owner/:repo/git/tags"
            },
            createTree: {
              method: "POST",
              params: {
                base_tree: { type: "string" },
                owner: { required: !0, type: "string" },
                repo: { required: !0, type: "string" },
                tree: { required: !0, type: "object[]" },
                "tree[].content": { type: "string" },
                "tree[].mode": {
                  enum: ["100644", "100755", "040000", "160000", "120000"],
                  type: "string"
                },
                "tree[].path": { type: "string" },
                "tree[].sha": { allowNull: !0, type: "string" },
                "tree[].type": {
                  enum: ["blob", "tree", "commit"],
                  type: "string"
                }
              },
              url: "/repos/:owner/:repo/git/trees"
            },
            deleteRef: {
              method: "DELETE",
              params: {
                owner: { required: !0, type: "string" },
                ref: { required: !0, type: "string" },
                repo: { required: !0, type: "string" }
              },
              url: "/repos/:owner/:repo/git/refs/:ref"
            },
            getBlob: {
              method: "GET",
              params: {
                file_sha: { required: !0, type: "string" },
                owner: { required: !0, type: "string" },
                repo: { required: !0, type: "string" }
              },
              url: "/repos/:owner/:repo/git/blobs/:file_sha"
            },
            getCommit: {
              method: "GET",
              params: {
                commit_sha: { required: !0, type: "string" },
                owner: { required: !0, type: "string" },
                repo: { required: !0, type: "string" }
              },
              url: "/repos/:owner/:repo/git/commits/:commit_sha"
            },
            getRef: {
              method: "GET",
              params: {
                owner: { required: !0, type: "string" },
                ref: { required: !0, type: "string" },
                repo: { required: !0, type: "string" }
              },
              url: "/repos/:owner/:repo/git/ref/:ref"
            },
            getTag: {
              method: "GET",
              params: {
                owner: { required: !0, type: "string" },
                repo: { required: !0, type: "string" },
                tag_sha: { required: !0, type: "string" }
              },
              url: "/repos/:owner/:repo/git/tags/:tag_sha"
            },
            getTree: {
              method: "GET",
              params: {
                owner: { required: !0, type: "string" },
                recursive: { enum: ["1"], type: "integer" },
                repo: { required: !0, type: "string" },
                tree_sha: { required: !0, type: "string" }
              },
              url: "/repos/:owner/:repo/git/trees/:tree_sha"
            },
            listMatchingRefs: {
              method: "GET",
              params: {
                owner: { required: !0, type: "string" },
                page: { type: "integer" },
                per_page: { type: "integer" },
                ref: { required: !0, type: "string" },
                repo: { required: !0, type: "string" }
              },
              url: "/repos/:owner/:repo/git/matching-refs/:ref"
            },
            listRefs: {
              method: "GET",
              params: {
                namespace: { type: "string" },
                owner: { required: !0, type: "string" },
                page: { type: "integer" },
                per_page: { type: "integer" },
                repo: { required: !0, type: "string" }
              },
              url: "/repos/:owner/:repo/git/refs/:namespace"
            },
            updateRef: {
              method: "PATCH",
              params: {
                force: { type: "boolean" },
                owner: { required: !0, type: "string" },
                ref: { required: !0, type: "string" },
                repo: { required: !0, type: "string" },
                sha: { required: !0, type: "string" }
              },
              url: "/repos/:owner/:repo/git/refs/:ref"
            }
          },
          gitignore: {
            getTemplate: {
              method: "GET",
              params: { name: { required: !0, type: "string" } },
              url: "/gitignore/templates/:name"
            },
            listTemplates: {
              method: "GET",
              params: {},
              url: "/gitignore/templates"
            }
          },
          interactions: {
            addOrUpdateRestrictionsForOrg: {
              headers: { accept: "application/vnd.github.sombra-preview+json" },
              method: "PUT",
              params: {
                limit: {
                  enum: [
                    "existing_users",
                    "contributors_only",
                    "collaborators_only"
                  ],
                  required: !0,
                  type: "string"
                },
                org: { required: !0, type: "string" }
              },
              url: "/orgs/:org/interaction-limits"
            },
            addOrUpdateRestrictionsForRepo: {
              headers: { accept: "application/vnd.github.sombra-preview+json" },
              method: "PUT",
              params: {
                limit: {
                  enum: [
                    "existing_users",
                    "contributors_only",
                    "collaborators_only"
                  ],
                  required: !0,
                  type: "string"
                },
                owner: { required: !0, type: "string" },
                repo: { required: !0, type: "string" }
              },
              url: "/repos/:owner/:repo/interaction-limits"
            },
            getRestrictionsForOrg: {
              headers: { accept: "application/vnd.github.sombra-preview+json" },
              method: "GET",
              params: { org: { required: !0, type: "string" } },
              url: "/orgs/:org/interaction-limits"
            },
            getRestrictionsForRepo: {
              headers: { accept: "application/vnd.github.sombra-preview+json" },
              method: "GET",
              params: {
                owner: { required: !0, type: "string" },
                repo: { required: !0, type: "string" }
              },
              url: "/repos/:owner/:repo/interaction-limits"
            },
            removeRestrictionsForOrg: {
              headers: { accept: "application/vnd.github.sombra-preview+json" },
              method: "DELETE",
              params: { org: { required: !0, type: "string" } },
              url: "/orgs/:org/interaction-limits"
            },
            removeRestrictionsForRepo: {
              headers: { accept: "application/vnd.github.sombra-preview+json" },
              method: "DELETE",
              params: {
                owner: { required: !0, type: "string" },
                repo: { required: !0, type: "string" }
              },
              url: "/repos/:owner/:repo/interaction-limits"
            }
          },
          issues: {
            addAssignees: {
              method: "POST",
              params: {
                assignees: { type: "string[]" },
                issue_number: { required: !0, type: "integer" },
                number: {
                  alias: "issue_number",
                  deprecated: !0,
                  type: "integer"
                },
                owner: { required: !0, type: "string" },
                repo: { required: !0, type: "string" }
              },
              url: "/repos/:owner/:repo/issues/:issue_number/assignees"
            },
            addLabels: {
              method: "POST",
              params: {
                issue_number: { required: !0, type: "integer" },
                labels: { required: !0, type: "string[]" },
                number: {
                  alias: "issue_number",
                  deprecated: !0,
                  type: "integer"
                },
                owner: { required: !0, type: "string" },
                repo: { required: !0, type: "string" }
              },
              url: "/repos/:owner/:repo/issues/:issue_number/labels"
            },
            checkAssignee: {
              method: "GET",
              params: {
                assignee: { required: !0, type: "string" },
                owner: { required: !0, type: "string" },
                repo: { required: !0, type: "string" }
              },
              url: "/repos/:owner/:repo/assignees/:assignee"
            },
            create: {
              method: "POST",
              params: {
                assignee: { type: "string" },
                assignees: { type: "string[]" },
                body: { type: "string" },
                labels: { type: "string[]" },
                milestone: { type: "integer" },
                owner: { required: !0, type: "string" },
                repo: { required: !0, type: "string" },
                title: { required: !0, type: "string" }
              },
              url: "/repos/:owner/:repo/issues"
            },
            createComment: {
              method: "POST",
              params: {
                body: { required: !0, type: "string" },
                issue_number: { required: !0, type: "integer" },
                number: {
                  alias: "issue_number",
                  deprecated: !0,
                  type: "integer"
                },
                owner: { required: !0, type: "string" },
                repo: { required: !0, type: "string" }
              },
              url: "/repos/:owner/:repo/issues/:issue_number/comments"
            },
            createLabel: {
              method: "POST",
              params: {
                color: { required: !0, type: "string" },
                description: { type: "string" },
                name: { required: !0, type: "string" },
                owner: { required: !0, type: "string" },
                repo: { required: !0, type: "string" }
              },
              url: "/repos/:owner/:repo/labels"
            },
            createMilestone: {
              method: "POST",
              params: {
                description: { type: "string" },
                due_on: { type: "string" },
                owner: { required: !0, type: "string" },
                repo: { required: !0, type: "string" },
                state: { enum: ["open", "closed"], type: "string" },
                title: { required: !0, type: "string" }
              },
              url: "/repos/:owner/:repo/milestones"
            },
            deleteComment: {
              method: "DELETE",
              params: {
                comment_id: { required: !0, type: "integer" },
                owner: { required: !0, type: "string" },
                repo: { required: !0, type: "string" }
              },
              url: "/repos/:owner/:repo/issues/comments/:comment_id"
            },
            deleteLabel: {
              method: "DELETE",
              params: {
                name: { required: !0, type: "string" },
                owner: { required: !0, type: "string" },
                repo: { required: !0, type: "string" }
              },
              url: "/repos/:owner/:repo/labels/:name"
            },
            deleteMilestone: {
              method: "DELETE",
              params: {
                milestone_number: { required: !0, type: "integer" },
                number: {
                  alias: "milestone_number",
                  deprecated: !0,
                  type: "integer"
                },
                owner: { required: !0, type: "string" },
                repo: { required: !0, type: "string" }
              },
              url: "/repos/:owner/:repo/milestones/:milestone_number"
            },
            get: {
              method: "GET",
              params: {
                issue_number: { required: !0, type: "integer" },
                number: {
                  alias: "issue_number",
                  deprecated: !0,
                  type: "integer"
                },
                owner: { required: !0, type: "string" },
                repo: { required: !0, type: "string" }
              },
              url: "/repos/:owner/:repo/issues/:issue_number"
            },
            getComment: {
              method: "GET",
              params: {
                comment_id: { required: !0, type: "integer" },
                owner: { required: !0, type: "string" },
                repo: { required: !0, type: "string" }
              },
              url: "/repos/:owner/:repo/issues/comments/:comment_id"
            },
            getEvent: {
              method: "GET",
              params: {
                event_id: { required: !0, type: "integer" },
                owner: { required: !0, type: "string" },
                repo: { required: !0, type: "string" }
              },
              url: "/repos/:owner/:repo/issues/events/:event_id"
            },
            getLabel: {
              method: "GET",
              params: {
                name: { required: !0, type: "string" },
                owner: { required: !0, type: "string" },
                repo: { required: !0, type: "string" }
              },
              url: "/repos/:owner/:repo/labels/:name"
            },
            getMilestone: {
              method: "GET",
              params: {
                milestone_number: { required: !0, type: "integer" },
                number: {
                  alias: "milestone_number",
                  deprecated: !0,
                  type: "integer"
                },
                owner: { required: !0, type: "string" },
                repo: { required: !0, type: "string" }
              },
              url: "/repos/:owner/:repo/milestones/:milestone_number"
            },
            list: {
              method: "GET",
              params: {
                direction: { enum: ["asc", "desc"], type: "string" },
                filter: {
                  enum: [
                    "assigned",
                    "created",
                    "mentioned",
                    "subscribed",
                    "all"
                  ],
                  type: "string"
                },
                labels: { type: "string" },
                page: { type: "integer" },
                per_page: { type: "integer" },
                since: { type: "string" },
                sort: {
                  enum: ["created", "updated", "comments"],
                  type: "string"
                },
                state: { enum: ["open", "closed", "all"], type: "string" }
              },
              url: "/issues"
            },
            listAssignees: {
              method: "GET",
              params: {
                owner: { required: !0, type: "string" },
                page: { type: "integer" },
                per_page: { type: "integer" },
                repo: { required: !0, type: "string" }
              },
              url: "/repos/:owner/:repo/assignees"
            },
            listComments: {
              method: "GET",
              params: {
                issue_number: { required: !0, type: "integer" },
                number: {
                  alias: "issue_number",
                  deprecated: !0,
                  type: "integer"
                },
                owner: { required: !0, type: "string" },
                page: { type: "integer" },
                per_page: { type: "integer" },
                repo: { required: !0, type: "string" },
                since: { type: "string" }
              },
              url: "/repos/:owner/:repo/issues/:issue_number/comments"
            },
            listCommentsForRepo: {
              method: "GET",
              params: {
                direction: { enum: ["asc", "desc"], type: "string" },
                owner: { required: !0, type: "string" },
                repo: { required: !0, type: "string" },
                since: { type: "string" },
                sort: { enum: ["created", "updated"], type: "string" }
              },
              url: "/repos/:owner/:repo/issues/comments"
            },
            listEvents: {
              method: "GET",
              params: {
                issue_number: { required: !0, type: "integer" },
                number: {
                  alias: "issue_number",
                  deprecated: !0,
                  type: "integer"
                },
                owner: { required: !0, type: "string" },
                page: { type: "integer" },
                per_page: { type: "integer" },
                repo: { required: !0, type: "string" }
              },
              url: "/repos/:owner/:repo/issues/:issue_number/events"
            },
            listEventsForRepo: {
              method: "GET",
              params: {
                owner: { required: !0, type: "string" },
                page: { type: "integer" },
                per_page: { type: "integer" },
                repo: { required: !0, type: "string" }
              },
              url: "/repos/:owner/:repo/issues/events"
            },
            listEventsForTimeline: {
              headers: {
                accept: "application/vnd.github.mockingbird-preview+json"
              },
              method: "GET",
              params: {
                issue_number: { required: !0, type: "integer" },
                number: {
                  alias: "issue_number",
                  deprecated: !0,
                  type: "integer"
                },
                owner: { required: !0, type: "string" },
                page: { type: "integer" },
                per_page: { type: "integer" },
                repo: { required: !0, type: "string" }
              },
              url: "/repos/:owner/:repo/issues/:issue_number/timeline"
            },
            listForAuthenticatedUser: {
              method: "GET",
              params: {
                direction: { enum: ["asc", "desc"], type: "string" },
                filter: {
                  enum: [
                    "assigned",
                    "created",
                    "mentioned",
                    "subscribed",
                    "all"
                  ],
                  type: "string"
                },
                labels: { type: "string" },
                page: { type: "integer" },
                per_page: { type: "integer" },
                since: { type: "string" },
                sort: {
                  enum: ["created", "updated", "comments"],
                  type: "string"
                },
                state: { enum: ["open", "closed", "all"], type: "string" }
              },
              url: "/user/issues"
            },
            listForOrg: {
              method: "GET",
              params: {
                direction: { enum: ["asc", "desc"], type: "string" },
                filter: {
                  enum: [
                    "assigned",
                    "created",
                    "mentioned",
                    "subscribed",
                    "all"
                  ],
                  type: "string"
                },
                labels: { type: "string" },
                org: { required: !0, type: "string" },
                page: { type: "integer" },
                per_page: { type: "integer" },
                since: { type: "string" },
                sort: {
                  enum: ["created", "updated", "comments"],
                  type: "string"
                },
                state: { enum: ["open", "closed", "all"], type: "string" }
              },
              url: "/orgs/:org/issues"
            },
            listForRepo: {
              method: "GET",
              params: {
                assignee: { type: "string" },
                creator: { type: "string" },
                direction: { enum: ["asc", "desc"], type: "string" },
                labels: { type: "string" },
                mentioned: { type: "string" },
                milestone: { type: "string" },
                owner: { required: !0, type: "string" },
                page: { type: "integer" },
                per_page: { type: "integer" },
                repo: { required: !0, type: "string" },
                since: { type: "string" },
                sort: {
                  enum: ["created", "updated", "comments"],
                  type: "string"
                },
                state: { enum: ["open", "closed", "all"], type: "string" }
              },
              url: "/repos/:owner/:repo/issues"
            },
            listLabelsForMilestone: {
              method: "GET",
              params: {
                milestone_number: { required: !0, type: "integer" },
                number: {
                  alias: "milestone_number",
                  deprecated: !0,
                  type: "integer"
                },
                owner: { required: !0, type: "string" },
                page: { type: "integer" },
                per_page: { type: "integer" },
                repo: { required: !0, type: "string" }
              },
              url: "/repos/:owner/:repo/milestones/:milestone_number/labels"
            },
            listLabelsForRepo: {
              method: "GET",
              params: {
                owner: { required: !0, type: "string" },
                page: { type: "integer" },
                per_page: { type: "integer" },
                repo: { required: !0, type: "string" }
              },
              url: "/repos/:owner/:repo/labels"
            },
            listLabelsOnIssue: {
              method: "GET",
              params: {
                issue_number: { required: !0, type: "integer" },
                number: {
                  alias: "issue_number",
                  deprecated: !0,
                  type: "integer"
                },
                owner: { required: !0, type: "string" },
                page: { type: "integer" },
                per_page: { type: "integer" },
                repo: { required: !0, type: "string" }
              },
              url: "/repos/:owner/:repo/issues/:issue_number/labels"
            },
            listMilestonesForRepo: {
              method: "GET",
              params: {
                direction: { enum: ["asc", "desc"], type: "string" },
                owner: { required: !0, type: "string" },
                page: { type: "integer" },
                per_page: { type: "integer" },
                repo: { required: !0, type: "string" },
                sort: { enum: ["due_on", "completeness"], type: "string" },
                state: { enum: ["open", "closed", "all"], type: "string" }
              },
              url: "/repos/:owner/:repo/milestones"
            },
            lock: {
              method: "PUT",
              params: {
                issue_number: { required: !0, type: "integer" },
                lock_reason: {
                  enum: ["off-topic", "too heated", "resolved", "spam"],
                  type: "string"
                },
                number: {
                  alias: "issue_number",
                  deprecated: !0,
                  type: "integer"
                },
                owner: { required: !0, type: "string" },
                repo: { required: !0, type: "string" }
              },
              url: "/repos/:owner/:repo/issues/:issue_number/lock"
            },
            removeAssignees: {
              method: "DELETE",
              params: {
                assignees: { type: "string[]" },
                issue_number: { required: !0, type: "integer" },
                number: {
                  alias: "issue_number",
                  deprecated: !0,
                  type: "integer"
                },
                owner: { required: !0, type: "string" },
                repo: { required: !0, type: "string" }
              },
              url: "/repos/:owner/:repo/issues/:issue_number/assignees"
            },
            removeLabel: {
              method: "DELETE",
              params: {
                issue_number: { required: !0, type: "integer" },
                name: { required: !0, type: "string" },
                number: {
                  alias: "issue_number",
                  deprecated: !0,
                  type: "integer"
                },
                owner: { required: !0, type: "string" },
                repo: { required: !0, type: "string" }
              },
              url: "/repos/:owner/:repo/issues/:issue_number/labels/:name"
            },
            removeLabels: {
              method: "DELETE",
              params: {
                issue_number: { required: !0, type: "integer" },
                number: {
                  alias: "issue_number",
                  deprecated: !0,
                  type: "integer"
                },
                owner: { required: !0, type: "string" },
                repo: { required: !0, type: "string" }
              },
              url: "/repos/:owner/:repo/issues/:issue_number/labels"
            },
            replaceLabels: {
              method: "PUT",
              params: {
                issue_number: { required: !0, type: "integer" },
                labels: { type: "string[]" },
                number: {
                  alias: "issue_number",
                  deprecated: !0,
                  type: "integer"
                },
                owner: { required: !0, type: "string" },
                repo: { required: !0, type: "string" }
              },
              url: "/repos/:owner/:repo/issues/:issue_number/labels"
            },
            unlock: {
              method: "DELETE",
              params: {
                issue_number: { required: !0, type: "integer" },
                number: {
                  alias: "issue_number",
                  deprecated: !0,
                  type: "integer"
                },
                owner: { required: !0, type: "string" },
                repo: { required: !0, type: "string" }
              },
              url: "/repos/:owner/:repo/issues/:issue_number/lock"
            },
            update: {
              method: "PATCH",
              params: {
                assignee: { type: "string" },
                assignees: { type: "string[]" },
                body: { type: "string" },
                issue_number: { required: !0, type: "integer" },
                labels: { type: "string[]" },
                milestone: { allowNull: !0, type: "integer" },
                number: {
                  alias: "issue_number",
                  deprecated: !0,
                  type: "integer"
                },
                owner: { required: !0, type: "string" },
                repo: { required: !0, type: "string" },
                state: { enum: ["open", "closed"], type: "string" },
                title: { type: "string" }
              },
              url: "/repos/:owner/:repo/issues/:issue_number"
            },
            updateComment: {
              method: "PATCH",
              params: {
                body: { required: !0, type: "string" },
                comment_id: { required: !0, type: "integer" },
                owner: { required: !0, type: "string" },
                repo: { required: !0, type: "string" }
              },
              url: "/repos/:owner/:repo/issues/comments/:comment_id"
            },
            updateLabel: {
              method: "PATCH",
              params: {
                color: { type: "string" },
                current_name: { required: !0, type: "string" },
                description: { type: "string" },
                name: { type: "string" },
                owner: { required: !0, type: "string" },
                repo: { required: !0, type: "string" }
              },
              url: "/repos/:owner/:repo/labels/:current_name"
            },
            updateMilestone: {
              method: "PATCH",
              params: {
                description: { type: "string" },
                due_on: { type: "string" },
                milestone_number: { required: !0, type: "integer" },
                number: {
                  alias: "milestone_number",
                  deprecated: !0,
                  type: "integer"
                },
                owner: { required: !0, type: "string" },
                repo: { required: !0, type: "string" },
                state: { enum: ["open", "closed"], type: "string" },
                title: { type: "string" }
              },
              url: "/repos/:owner/:repo/milestones/:milestone_number"
            }
          },
          licenses: {
            get: {
              method: "GET",
              params: { license: { required: !0, type: "string" } },
              url: "/licenses/:license"
            },
            getForRepo: {
              method: "GET",
              params: {
                owner: { required: !0, type: "string" },
                repo: { required: !0, type: "string" }
              },
              url: "/repos/:owner/:repo/license"
            },
            list: {
              deprecated:
                "octokit.licenses.list() has been renamed to octokit.licenses.listCommonlyUsed() (2019-03-05)",
              method: "GET",
              params: {},
              url: "/licenses"
            },
            listCommonlyUsed: { method: "GET", params: {}, url: "/licenses" }
          },
          markdown: {
            render: {
              method: "POST",
              params: {
                context: { type: "string" },
                mode: { enum: ["markdown", "gfm"], type: "string" },
                text: { required: !0, type: "string" }
              },
              url: "/markdown"
            },
            renderRaw: {
              headers: { "content-type": "text/plain; charset=utf-8" },
              method: "POST",
              params: { data: { mapTo: "data", required: !0, type: "string" } },
              url: "/markdown/raw"
            }
          },
          meta: { get: { method: "GET", params: {}, url: "/meta" } },
          migrations: {
            cancelImport: {
              method: "DELETE",
              params: {
                owner: { required: !0, type: "string" },
                repo: { required: !0, type: "string" }
              },
              url: "/repos/:owner/:repo/import"
            },
            deleteArchiveForAuthenticatedUser: {
              headers: {
                accept: "application/vnd.github.wyandotte-preview+json"
              },
              method: "DELETE",
              params: { migration_id: { required: !0, type: "integer" } },
              url: "/user/migrations/:migration_id/archive"
            },
            deleteArchiveForOrg: {
              headers: {
                accept: "application/vnd.github.wyandotte-preview+json"
              },
              method: "DELETE",
              params: {
                migration_id: { required: !0, type: "integer" },
                org: { required: !0, type: "string" }
              },
              url: "/orgs/:org/migrations/:migration_id/archive"
            },
            downloadArchiveForOrg: {
              headers: {
                accept: "application/vnd.github.wyandotte-preview+json"
              },
              method: "GET",
              params: {
                migration_id: { required: !0, type: "integer" },
                org: { required: !0, type: "string" }
              },
              url: "/orgs/:org/migrations/:migration_id/archive"
            },
            getArchiveForAuthenticatedUser: {
              headers: {
                accept: "application/vnd.github.wyandotte-preview+json"
              },
              method: "GET",
              params: { migration_id: { required: !0, type: "integer" } },
              url: "/user/migrations/:migration_id/archive"
            },
            getArchiveForOrg: {
              deprecated:
                "octokit.migrations.getArchiveForOrg() has been renamed to octokit.migrations.downloadArchiveForOrg() (2020-01-27)",
              headers: {
                accept: "application/vnd.github.wyandotte-preview+json"
              },
              method: "GET",
              params: {
                migration_id: { required: !0, type: "integer" },
                org: { required: !0, type: "string" }
              },
              url: "/orgs/:org/migrations/:migration_id/archive"
            },
            getCommitAuthors: {
              method: "GET",
              params: {
                owner: { required: !0, type: "string" },
                repo: { required: !0, type: "string" },
                since: { type: "string" }
              },
              url: "/repos/:owner/:repo/import/authors"
            },
            getImportProgress: {
              method: "GET",
              params: {
                owner: { required: !0, type: "string" },
                repo: { required: !0, type: "string" }
              },
              url: "/repos/:owner/:repo/import"
            },
            getLargeFiles: {
              method: "GET",
              params: {
                owner: { required: !0, type: "string" },
                repo: { required: !0, type: "string" }
              },
              url: "/repos/:owner/:repo/import/large_files"
            },
            getStatusForAuthenticatedUser: {
              headers: {
                accept: "application/vnd.github.wyandotte-preview+json"
              },
              method: "GET",
              params: { migration_id: { required: !0, type: "integer" } },
              url: "/user/migrations/:migration_id"
            },
            getStatusForOrg: {
              headers: {
                accept: "application/vnd.github.wyandotte-preview+json"
              },
              method: "GET",
              params: {
                migration_id: { required: !0, type: "integer" },
                org: { required: !0, type: "string" }
              },
              url: "/orgs/:org/migrations/:migration_id"
            },
            listForAuthenticatedUser: {
              headers: {
                accept: "application/vnd.github.wyandotte-preview+json"
              },
              method: "GET",
              params: {
                page: { type: "integer" },
                per_page: { type: "integer" }
              },
              url: "/user/migrations"
            },
            listForOrg: {
              headers: {
                accept: "application/vnd.github.wyandotte-preview+json"
              },
              method: "GET",
              params: {
                org: { required: !0, type: "string" },
                page: { type: "integer" },
                per_page: { type: "integer" }
              },
              url: "/orgs/:org/migrations"
            },
            listReposForOrg: {
              headers: {
                accept: "application/vnd.github.wyandotte-preview+json"
              },
              method: "GET",
              params: {
                migration_id: { required: !0, type: "integer" },
                org: { required: !0, type: "string" },
                page: { type: "integer" },
                per_page: { type: "integer" }
              },
              url: "/orgs/:org/migrations/:migration_id/repositories"
            },
            listReposForUser: {
              headers: {
                accept: "application/vnd.github.wyandotte-preview+json"
              },
              method: "GET",
              params: {
                migration_id: { required: !0, type: "integer" },
                page: { type: "integer" },
                per_page: { type: "integer" }
              },
              url: "/user/:migration_id/repositories"
            },
            mapCommitAuthor: {
              method: "PATCH",
              params: {
                author_id: { required: !0, type: "integer" },
                email: { type: "string" },
                name: { type: "string" },
                owner: { required: !0, type: "string" },
                repo: { required: !0, type: "string" }
              },
              url: "/repos/:owner/:repo/import/authors/:author_id"
            },
            setLfsPreference: {
              method: "PATCH",
              params: {
                owner: { required: !0, type: "string" },
                repo: { required: !0, type: "string" },
                use_lfs: {
                  enum: ["opt_in", "opt_out"],
                  required: !0,
                  type: "string"
                }
              },
              url: "/repos/:owner/:repo/import/lfs"
            },
            startForAuthenticatedUser: {
              method: "POST",
              params: {
                exclude_attachments: { type: "boolean" },
                lock_repositories: { type: "boolean" },
                repositories: { required: !0, type: "string[]" }
              },
              url: "/user/migrations"
            },
            startForOrg: {
              method: "POST",
              params: {
                exclude_attachments: { type: "boolean" },
                lock_repositories: { type: "boolean" },
                org: { required: !0, type: "string" },
                repositories: { required: !0, type: "string[]" }
              },
              url: "/orgs/:org/migrations"
            },
            startImport: {
              method: "PUT",
              params: {
                owner: { required: !0, type: "string" },
                repo: { required: !0, type: "string" },
                tfvc_project: { type: "string" },
                vcs: {
                  enum: ["subversion", "git", "mercurial", "tfvc"],
                  type: "string"
                },
                vcs_password: { type: "string" },
                vcs_url: { required: !0, type: "string" },
                vcs_username: { type: "string" }
              },
              url: "/repos/:owner/:repo/import"
            },
            unlockRepoForAuthenticatedUser: {
              headers: {
                accept: "application/vnd.github.wyandotte-preview+json"
              },
              method: "DELETE",
              params: {
                migration_id: { required: !0, type: "integer" },
                repo_name: { required: !0, type: "string" }
              },
              url: "/user/migrations/:migration_id/repos/:repo_name/lock"
            },
            unlockRepoForOrg: {
              headers: {
                accept: "application/vnd.github.wyandotte-preview+json"
              },
              method: "DELETE",
              params: {
                migration_id: { required: !0, type: "integer" },
                org: { required: !0, type: "string" },
                repo_name: { required: !0, type: "string" }
              },
              url: "/orgs/:org/migrations/:migration_id/repos/:repo_name/lock"
            },
            updateImport: {
              method: "PATCH",
              params: {
                owner: { required: !0, type: "string" },
                repo: { required: !0, type: "string" },
                vcs_password: { type: "string" },
                vcs_username: { type: "string" }
              },
              url: "/repos/:owner/:repo/import"
            }
          },
          oauthAuthorizations: {
            checkAuthorization: {
              deprecated:
                "octokit.oauthAuthorizations.checkAuthorization() has been renamed to octokit.apps.checkAuthorization() (2019-11-05)",
              method: "GET",
              params: {
                access_token: { required: !0, type: "string" },
                client_id: { required: !0, type: "string" }
              },
              url: "/applications/:client_id/tokens/:access_token"
            },
            createAuthorization: {
              deprecated:
                "octokit.oauthAuthorizations.createAuthorization() is deprecated, see https://developer.github.com/v3/oauth_authorizations/#create-a-new-authorization",
              method: "POST",
              params: {
                client_id: { type: "string" },
                client_secret: { type: "string" },
                fingerprint: { type: "string" },
                note: { required: !0, type: "string" },
                note_url: { type: "string" },
                scopes: { type: "string[]" }
              },
              url: "/authorizations"
            },
            deleteAuthorization: {
              deprecated:
                "octokit.oauthAuthorizations.deleteAuthorization() is deprecated, see https://developer.github.com/v3/oauth_authorizations/#delete-an-authorization",
              method: "DELETE",
              params: { authorization_id: { required: !0, type: "integer" } },
              url: "/authorizations/:authorization_id"
            },
            deleteGrant: {
              deprecated:
                "octokit.oauthAuthorizations.deleteGrant() is deprecated, see https://developer.github.com/v3/oauth_authorizations/#delete-a-grant",
              method: "DELETE",
              params: { grant_id: { required: !0, type: "integer" } },
              url: "/applications/grants/:grant_id"
            },
            getAuthorization: {
              deprecated:
                "octokit.oauthAuthorizations.getAuthorization() is deprecated, see https://developer.github.com/v3/oauth_authorizations/#get-a-single-authorization",
              method: "GET",
              params: { authorization_id: { required: !0, type: "integer" } },
              url: "/authorizations/:authorization_id"
            },
            getGrant: {
              deprecated:
                "octokit.oauthAuthorizations.getGrant() is deprecated, see https://developer.github.com/v3/oauth_authorizations/#get-a-single-grant",
              method: "GET",
              params: { grant_id: { required: !0, type: "integer" } },
              url: "/applications/grants/:grant_id"
            },
            getOrCreateAuthorizationForApp: {
              deprecated:
                "octokit.oauthAuthorizations.getOrCreateAuthorizationForApp() is deprecated, see https://developer.github.com/v3/oauth_authorizations/#get-or-create-an-authorization-for-a-specific-app",
              method: "PUT",
              params: {
                client_id: { required: !0, type: "string" },
                client_secret: { required: !0, type: "string" },
                fingerprint: { type: "string" },
                note: { type: "string" },
                note_url: { type: "string" },
                scopes: { type: "string[]" }
              },
              url: "/authorizations/clients/:client_id"
            },
            getOrCreateAuthorizationForAppAndFingerprint: {
              deprecated:
                "octokit.oauthAuthorizations.getOrCreateAuthorizationForAppAndFingerprint() is deprecated, see https://developer.github.com/v3/oauth_authorizations/#get-or-create-an-authorization-for-a-specific-app-and-fingerprint",
              method: "PUT",
              params: {
                client_id: { required: !0, type: "string" },
                client_secret: { required: !0, type: "string" },
                fingerprint: { required: !0, type: "string" },
                note: { type: "string" },
                note_url: { type: "string" },
                scopes: { type: "string[]" }
              },
              url: "/authorizations/clients/:client_id/:fingerprint"
            },
            getOrCreateAuthorizationForAppFingerprint: {
              deprecated:
                "octokit.oauthAuthorizations.getOrCreateAuthorizationForAppFingerprint() has been renamed to octokit.oauthAuthorizations.getOrCreateAuthorizationForAppAndFingerprint() (2018-12-27)",
              method: "PUT",
              params: {
                client_id: { required: !0, type: "string" },
                client_secret: { required: !0, type: "string" },
                fingerprint: { required: !0, type: "string" },
                note: { type: "string" },
                note_url: { type: "string" },
                scopes: { type: "string[]" }
              },
              url: "/authorizations/clients/:client_id/:fingerprint"
            },
            listAuthorizations: {
              deprecated:
                "octokit.oauthAuthorizations.listAuthorizations() is deprecated, see https://developer.github.com/v3/oauth_authorizations/#list-your-authorizations",
              method: "GET",
              params: {
                page: { type: "integer" },
                per_page: { type: "integer" }
              },
              url: "/authorizations"
            },
            listGrants: {
              deprecated:
                "octokit.oauthAuthorizations.listGrants() is deprecated, see https://developer.github.com/v3/oauth_authorizations/#list-your-grants",
              method: "GET",
              params: {
                page: { type: "integer" },
                per_page: { type: "integer" }
              },
              url: "/applications/grants"
            },
            resetAuthorization: {
              deprecated:
                "octokit.oauthAuthorizations.resetAuthorization() has been renamed to octokit.apps.resetAuthorization() (2019-11-05)",
              method: "POST",
              params: {
                access_token: { required: !0, type: "string" },
                client_id: { required: !0, type: "string" }
              },
              url: "/applications/:client_id/tokens/:access_token"
            },
            revokeAuthorizationForApplication: {
              deprecated:
                "octokit.oauthAuthorizations.revokeAuthorizationForApplication() has been renamed to octokit.apps.revokeAuthorizationForApplication() (2019-11-05)",
              method: "DELETE",
              params: {
                access_token: { required: !0, type: "string" },
                client_id: { required: !0, type: "string" }
              },
              url: "/applications/:client_id/tokens/:access_token"
            },
            revokeGrantForApplication: {
              deprecated:
                "octokit.oauthAuthorizations.revokeGrantForApplication() has been renamed to octokit.apps.revokeGrantForApplication() (2019-11-05)",
              method: "DELETE",
              params: {
                access_token: { required: !0, type: "string" },
                client_id: { required: !0, type: "string" }
              },
              url: "/applications/:client_id/grants/:access_token"
            },
            updateAuthorization: {
              deprecated:
                "octokit.oauthAuthorizations.updateAuthorization() is deprecated, see https://developer.github.com/v3/oauth_authorizations/#update-an-existing-authorization",
              method: "PATCH",
              params: {
                add_scopes: { type: "string[]" },
                authorization_id: { required: !0, type: "integer" },
                fingerprint: { type: "string" },
                note: { type: "string" },
                note_url: { type: "string" },
                remove_scopes: { type: "string[]" },
                scopes: { type: "string[]" }
              },
              url: "/authorizations/:authorization_id"
            }
          },
          orgs: {
            addOrUpdateMembership: {
              method: "PUT",
              params: {
                org: { required: !0, type: "string" },
                role: { enum: ["admin", "member"], type: "string" },
                username: { required: !0, type: "string" }
              },
              url: "/orgs/:org/memberships/:username"
            },
            blockUser: {
              method: "PUT",
              params: {
                org: { required: !0, type: "string" },
                username: { required: !0, type: "string" }
              },
              url: "/orgs/:org/blocks/:username"
            },
            checkBlockedUser: {
              method: "GET",
              params: {
                org: { required: !0, type: "string" },
                username: { required: !0, type: "string" }
              },
              url: "/orgs/:org/blocks/:username"
            },
            checkMembership: {
              method: "GET",
              params: {
                org: { required: !0, type: "string" },
                username: { required: !0, type: "string" }
              },
              url: "/orgs/:org/members/:username"
            },
            checkPublicMembership: {
              method: "GET",
              params: {
                org: { required: !0, type: "string" },
                username: { required: !0, type: "string" }
              },
              url: "/orgs/:org/public_members/:username"
            },
            concealMembership: {
              method: "DELETE",
              params: {
                org: { required: !0, type: "string" },
                username: { required: !0, type: "string" }
              },
              url: "/orgs/:org/public_members/:username"
            },
            convertMemberToOutsideCollaborator: {
              method: "PUT",
              params: {
                org: { required: !0, type: "string" },
                username: { required: !0, type: "string" }
              },
              url: "/orgs/:org/outside_collaborators/:username"
            },
            createHook: {
              method: "POST",
              params: {
                active: { type: "boolean" },
                config: { required: !0, type: "object" },
                "config.content_type": { type: "string" },
                "config.insecure_ssl": { type: "string" },
                "config.secret": { type: "string" },
                "config.url": { required: !0, type: "string" },
                events: { type: "string[]" },
                name: { required: !0, type: "string" },
                org: { required: !0, type: "string" }
              },
              url: "/orgs/:org/hooks"
            },
            createInvitation: {
              method: "POST",
              params: {
                email: { type: "string" },
                invitee_id: { type: "integer" },
                org: { required: !0, type: "string" },
                role: {
                  enum: ["admin", "direct_member", "billing_manager"],
                  type: "string"
                },
                team_ids: { type: "integer[]" }
              },
              url: "/orgs/:org/invitations"
            },
            deleteHook: {
              method: "DELETE",
              params: {
                hook_id: { required: !0, type: "integer" },
                org: { required: !0, type: "string" }
              },
              url: "/orgs/:org/hooks/:hook_id"
            },
            get: {
              method: "GET",
              params: { org: { required: !0, type: "string" } },
              url: "/orgs/:org"
            },
            getHook: {
              method: "GET",
              params: {
                hook_id: { required: !0, type: "integer" },
                org: { required: !0, type: "string" }
              },
              url: "/orgs/:org/hooks/:hook_id"
            },
            getMembership: {
              method: "GET",
              params: {
                org: { required: !0, type: "string" },
                username: { required: !0, type: "string" }
              },
              url: "/orgs/:org/memberships/:username"
            },
            getMembershipForAuthenticatedUser: {
              method: "GET",
              params: { org: { required: !0, type: "string" } },
              url: "/user/memberships/orgs/:org"
            },
            list: {
              method: "GET",
              params: {
                page: { type: "integer" },
                per_page: { type: "integer" },
                since: { type: "integer" }
              },
              url: "/organizations"
            },
            listBlockedUsers: {
              method: "GET",
              params: { org: { required: !0, type: "string" } },
              url: "/orgs/:org/blocks"
            },
            listForAuthenticatedUser: {
              method: "GET",
              params: {
                page: { type: "integer" },
                per_page: { type: "integer" }
              },
              url: "/user/orgs"
            },
            listForUser: {
              method: "GET",
              params: {
                page: { type: "integer" },
                per_page: { type: "integer" },
                username: { required: !0, type: "string" }
              },
              url: "/users/:username/orgs"
            },
            listHooks: {
              method: "GET",
              params: {
                org: { required: !0, type: "string" },
                page: { type: "integer" },
                per_page: { type: "integer" }
              },
              url: "/orgs/:org/hooks"
            },
            listInstallations: {
              headers: {
                accept: "application/vnd.github.machine-man-preview+json"
              },
              method: "GET",
              params: {
                org: { required: !0, type: "string" },
                page: { type: "integer" },
                per_page: { type: "integer" }
              },
              url: "/orgs/:org/installations"
            },
            listInvitationTeams: {
              method: "GET",
              params: {
                invitation_id: { required: !0, type: "integer" },
                org: { required: !0, type: "string" },
                page: { type: "integer" },
                per_page: { type: "integer" }
              },
              url: "/orgs/:org/invitations/:invitation_id/teams"
            },
            listMembers: {
              method: "GET",
              params: {
                filter: { enum: ["2fa_disabled", "all"], type: "string" },
                org: { required: !0, type: "string" },
                page: { type: "integer" },
                per_page: { type: "integer" },
                role: { enum: ["all", "admin", "member"], type: "string" }
              },
              url: "/orgs/:org/members"
            },
            listMemberships: {
              method: "GET",
              params: {
                page: { type: "integer" },
                per_page: { type: "integer" },
                state: { enum: ["active", "pending"], type: "string" }
              },
              url: "/user/memberships/orgs"
            },
            listOutsideCollaborators: {
              method: "GET",
              params: {
                filter: { enum: ["2fa_disabled", "all"], type: "string" },
                org: { required: !0, type: "string" },
                page: { type: "integer" },
                per_page: { type: "integer" }
              },
              url: "/orgs/:org/outside_collaborators"
            },
            listPendingInvitations: {
              method: "GET",
              params: {
                org: { required: !0, type: "string" },
                page: { type: "integer" },
                per_page: { type: "integer" }
              },
              url: "/orgs/:org/invitations"
            },
            listPublicMembers: {
              method: "GET",
              params: {
                org: { required: !0, type: "string" },
                page: { type: "integer" },
                per_page: { type: "integer" }
              },
              url: "/orgs/:org/public_members"
            },
            pingHook: {
              method: "POST",
              params: {
                hook_id: { required: !0, type: "integer" },
                org: { required: !0, type: "string" }
              },
              url: "/orgs/:org/hooks/:hook_id/pings"
            },
            publicizeMembership: {
              method: "PUT",
              params: {
                org: { required: !0, type: "string" },
                username: { required: !0, type: "string" }
              },
              url: "/orgs/:org/public_members/:username"
            },
            removeMember: {
              method: "DELETE",
              params: {
                org: { required: !0, type: "string" },
                username: { required: !0, type: "string" }
              },
              url: "/orgs/:org/members/:username"
            },
            removeMembership: {
              method: "DELETE",
              params: {
                org: { required: !0, type: "string" },
                username: { required: !0, type: "string" }
              },
              url: "/orgs/:org/memberships/:username"
            },
            removeOutsideCollaborator: {
              method: "DELETE",
              params: {
                org: { required: !0, type: "string" },
                username: { required: !0, type: "string" }
              },
              url: "/orgs/:org/outside_collaborators/:username"
            },
            unblockUser: {
              method: "DELETE",
              params: {
                org: { required: !0, type: "string" },
                username: { required: !0, type: "string" }
              },
              url: "/orgs/:org/blocks/:username"
            },
            update: {
              method: "PATCH",
              params: {
                billing_email: { type: "string" },
                company: { type: "string" },
                default_repository_permission: {
                  enum: ["read", "write", "admin", "none"],
                  type: "string"
                },
                description: { type: "string" },
                email: { type: "string" },
                has_organization_projects: { type: "boolean" },
                has_repository_projects: { type: "boolean" },
                location: { type: "string" },
                members_allowed_repository_creation_type: {
                  enum: ["all", "private", "none"],
                  type: "string"
                },
                members_can_create_internal_repositories: { type: "boolean" },
                members_can_create_private_repositories: { type: "boolean" },
                members_can_create_public_repositories: { type: "boolean" },
                members_can_create_repositories: { type: "boolean" },
                name: { type: "string" },
                org: { required: !0, type: "string" }
              },
              url: "/orgs/:org"
            },
            updateHook: {
              method: "PATCH",
              params: {
                active: { type: "boolean" },
                config: { type: "object" },
                "config.content_type": { type: "string" },
                "config.insecure_ssl": { type: "string" },
                "config.secret": { type: "string" },
                "config.url": { required: !0, type: "string" },
                events: { type: "string[]" },
                hook_id: { required: !0, type: "integer" },
                org: { required: !0, type: "string" }
              },
              url: "/orgs/:org/hooks/:hook_id"
            },
            updateMembership: {
              method: "PATCH",
              params: {
                org: { required: !0, type: "string" },
                state: { enum: ["active"], required: !0, type: "string" }
              },
              url: "/user/memberships/orgs/:org"
            }
          },
          projects: {
            addCollaborator: {
              headers: {
                accept: "application/vnd.github.inertia-preview+json"
              },
              method: "PUT",
              params: {
                permission: {
                  enum: ["read", "write", "admin"],
                  type: "string"
                },
                project_id: { required: !0, type: "integer" },
                username: { required: !0, type: "string" }
              },
              url: "/projects/:project_id/collaborators/:username"
            },
            createCard: {
              headers: {
                accept: "application/vnd.github.inertia-preview+json"
              },
              method: "POST",
              params: {
                column_id: { required: !0, type: "integer" },
                content_id: { type: "integer" },
                content_type: { type: "string" },
                note: { type: "string" }
              },
              url: "/projects/columns/:column_id/cards"
            },
            createColumn: {
              headers: {
                accept: "application/vnd.github.inertia-preview+json"
              },
              method: "POST",
              params: {
                name: { required: !0, type: "string" },
                project_id: { required: !0, type: "integer" }
              },
              url: "/projects/:project_id/columns"
            },
            createForAuthenticatedUser: {
              headers: {
                accept: "application/vnd.github.inertia-preview+json"
              },
              method: "POST",
              params: {
                body: { type: "string" },
                name: { required: !0, type: "string" }
              },
              url: "/user/projects"
            },
            createForOrg: {
              headers: {
                accept: "application/vnd.github.inertia-preview+json"
              },
              method: "POST",
              params: {
                body: { type: "string" },
                name: { required: !0, type: "string" },
                org: { required: !0, type: "string" }
              },
              url: "/orgs/:org/projects"
            },
            createForRepo: {
              headers: {
                accept: "application/vnd.github.inertia-preview+json"
              },
              method: "POST",
              params: {
                body: { type: "string" },
                name: { required: !0, type: "string" },
                owner: { required: !0, type: "string" },
                repo: { required: !0, type: "string" }
              },
              url: "/repos/:owner/:repo/projects"
            },
            delete: {
              headers: {
                accept: "application/vnd.github.inertia-preview+json"
              },
              method: "DELETE",
              params: { project_id: { required: !0, type: "integer" } },
              url: "/projects/:project_id"
            },
            deleteCard: {
              headers: {
                accept: "application/vnd.github.inertia-preview+json"
              },
              method: "DELETE",
              params: { card_id: { required: !0, type: "integer" } },
              url: "/projects/columns/cards/:card_id"
            },
            deleteColumn: {
              headers: {
                accept: "application/vnd.github.inertia-preview+json"
              },
              method: "DELETE",
              params: { column_id: { required: !0, type: "integer" } },
              url: "/projects/columns/:column_id"
            },
            get: {
              headers: {
                accept: "application/vnd.github.inertia-preview+json"
              },
              method: "GET",
              params: { project_id: { required: !0, type: "integer" } },
              url: "/projects/:project_id"
            },
            getCard: {
              headers: {
                accept: "application/vnd.github.inertia-preview+json"
              },
              method: "GET",
              params: { card_id: { required: !0, type: "integer" } },
              url: "/projects/columns/cards/:card_id"
            },
            getColumn: {
              headers: {
                accept: "application/vnd.github.inertia-preview+json"
              },
              method: "GET",
              params: { column_id: { required: !0, type: "integer" } },
              url: "/projects/columns/:column_id"
            },
            listCards: {
              headers: {
                accept: "application/vnd.github.inertia-preview+json"
              },
              method: "GET",
              params: {
                archived_state: {
                  enum: ["all", "archived", "not_archived"],
                  type: "string"
                },
                column_id: { required: !0, type: "integer" },
                page: { type: "integer" },
                per_page: { type: "integer" }
              },
              url: "/projects/columns/:column_id/cards"
            },
            listCollaborators: {
              headers: {
                accept: "application/vnd.github.inertia-preview+json"
              },
              method: "GET",
              params: {
                affiliation: {
                  enum: ["outside", "direct", "all"],
                  type: "string"
                },
                page: { type: "integer" },
                per_page: { type: "integer" },
                project_id: { required: !0, type: "integer" }
              },
              url: "/projects/:project_id/collaborators"
            },
            listColumns: {
              headers: {
                accept: "application/vnd.github.inertia-preview+json"
              },
              method: "GET",
              params: {
                page: { type: "integer" },
                per_page: { type: "integer" },
                project_id: { required: !0, type: "integer" }
              },
              url: "/projects/:project_id/columns"
            },
            listForOrg: {
              headers: {
                accept: "application/vnd.github.inertia-preview+json"
              },
              method: "GET",
              params: {
                org: { required: !0, type: "string" },
                page: { type: "integer" },
                per_page: { type: "integer" },
                state: { enum: ["open", "closed", "all"], type: "string" }
              },
              url: "/orgs/:org/projects"
            },
            listForRepo: {
              headers: {
                accept: "application/vnd.github.inertia-preview+json"
              },
              method: "GET",
              params: {
                owner: { required: !0, type: "string" },
                page: { type: "integer" },
                per_page: { type: "integer" },
                repo: { required: !0, type: "string" },
                state: { enum: ["open", "closed", "all"], type: "string" }
              },
              url: "/repos/:owner/:repo/projects"
            },
            listForUser: {
              headers: {
                accept: "application/vnd.github.inertia-preview+json"
              },
              method: "GET",
              params: {
                page: { type: "integer" },
                per_page: { type: "integer" },
                state: { enum: ["open", "closed", "all"], type: "string" },
                username: { required: !0, type: "string" }
              },
              url: "/users/:username/projects"
            },
            moveCard: {
              headers: {
                accept: "application/vnd.github.inertia-preview+json"
              },
              method: "POST",
              params: {
                card_id: { required: !0, type: "integer" },
                column_id: { type: "integer" },
                position: {
                  required: !0,
                  type: "string",
                  validation: "^(top|bottom|after:\\d+)$"
                }
              },
              url: "/projects/columns/cards/:card_id/moves"
            },
            moveColumn: {
              headers: {
                accept: "application/vnd.github.inertia-preview+json"
              },
              method: "POST",
              params: {
                column_id: { required: !0, type: "integer" },
                position: {
                  required: !0,
                  type: "string",
                  validation: "^(first|last|after:\\d+)$"
                }
              },
              url: "/projects/columns/:column_id/moves"
            },
            removeCollaborator: {
              headers: {
                accept: "application/vnd.github.inertia-preview+json"
              },
              method: "DELETE",
              params: {
                project_id: { required: !0, type: "integer" },
                username: { required: !0, type: "string" }
              },
              url: "/projects/:project_id/collaborators/:username"
            },
            reviewUserPermissionLevel: {
              headers: {
                accept: "application/vnd.github.inertia-preview+json"
              },
              method: "GET",
              params: {
                project_id: { required: !0, type: "integer" },
                username: { required: !0, type: "string" }
              },
              url: "/projects/:project_id/collaborators/:username/permission"
            },
            update: {
              headers: {
                accept: "application/vnd.github.inertia-preview+json"
              },
              method: "PATCH",
              params: {
                body: { type: "string" },
                name: { type: "string" },
                organization_permission: { type: "string" },
                private: { type: "boolean" },
                project_id: { required: !0, type: "integer" },
                state: { enum: ["open", "closed"], type: "string" }
              },
              url: "/projects/:project_id"
            },
            updateCard: {
              headers: {
                accept: "application/vnd.github.inertia-preview+json"
              },
              method: "PATCH",
              params: {
                archived: { type: "boolean" },
                card_id: { required: !0, type: "integer" },
                note: { type: "string" }
              },
              url: "/projects/columns/cards/:card_id"
            },
            updateColumn: {
              headers: {
                accept: "application/vnd.github.inertia-preview+json"
              },
              method: "PATCH",
              params: {
                column_id: { required: !0, type: "integer" },
                name: { required: !0, type: "string" }
              },
              url: "/projects/columns/:column_id"
            }
          },
          pulls: {
            checkIfMerged: {
              method: "GET",
              params: {
                number: {
                  alias: "pull_number",
                  deprecated: !0,
                  type: "integer"
                },
                owner: { required: !0, type: "string" },
                pull_number: { required: !0, type: "integer" },
                repo: { required: !0, type: "string" }
              },
              url: "/repos/:owner/:repo/pulls/:pull_number/merge"
            },
            create: {
              method: "POST",
              params: {
                base: { required: !0, type: "string" },
                body: { type: "string" },
                draft: { type: "boolean" },
                head: { required: !0, type: "string" },
                maintainer_can_modify: { type: "boolean" },
                owner: { required: !0, type: "string" },
                repo: { required: !0, type: "string" },
                title: { required: !0, type: "string" }
              },
              url: "/repos/:owner/:repo/pulls"
            },
            createComment: {
              method: "POST",
              params: {
                body: { required: !0, type: "string" },
                commit_id: { required: !0, type: "string" },
                in_reply_to: {
                  deprecated: !0,
                  description:
                    "The comment ID to reply to. **Note**: This must be the ID of a top-level comment, not a reply to that comment. Replies to replies are not supported.",
                  type: "integer"
                },
                line: { type: "integer" },
                number: {
                  alias: "pull_number",
                  deprecated: !0,
                  type: "integer"
                },
                owner: { required: !0, type: "string" },
                path: { required: !0, type: "string" },
                position: { type: "integer" },
                pull_number: { required: !0, type: "integer" },
                repo: { required: !0, type: "string" },
                side: { enum: ["LEFT", "RIGHT"], type: "string" },
                start_line: { type: "integer" },
                start_side: { enum: ["LEFT", "RIGHT", "side"], type: "string" }
              },
              url: "/repos/:owner/:repo/pulls/:pull_number/comments"
            },
            createCommentReply: {
              deprecated:
                "octokit.pulls.createCommentReply() has been renamed to octokit.pulls.createComment() (2019-09-09)",
              method: "POST",
              params: {
                body: { required: !0, type: "string" },
                commit_id: { required: !0, type: "string" },
                in_reply_to: {
                  deprecated: !0,
                  description:
                    "The comment ID to reply to. **Note**: This must be the ID of a top-level comment, not a reply to that comment. Replies to replies are not supported.",
                  type: "integer"
                },
                line: { type: "integer" },
                number: {
                  alias: "pull_number",
                  deprecated: !0,
                  type: "integer"
                },
                owner: { required: !0, type: "string" },
                path: { required: !0, type: "string" },
                position: { type: "integer" },
                pull_number: { required: !0, type: "integer" },
                repo: { required: !0, type: "string" },
                side: { enum: ["LEFT", "RIGHT"], type: "string" },
                start_line: { type: "integer" },
                start_side: { enum: ["LEFT", "RIGHT", "side"], type: "string" }
              },
              url: "/repos/:owner/:repo/pulls/:pull_number/comments"
            },
            createFromIssue: {
              deprecated:
                "octokit.pulls.createFromIssue() is deprecated, see https://developer.github.com/v3/pulls/#create-a-pull-request",
              method: "POST",
              params: {
                base: { required: !0, type: "string" },
                draft: { type: "boolean" },
                head: { required: !0, type: "string" },
                issue: { required: !0, type: "integer" },
                maintainer_can_modify: { type: "boolean" },
                owner: { required: !0, type: "string" },
                repo: { required: !0, type: "string" }
              },
              url: "/repos/:owner/:repo/pulls"
            },
            createReview: {
              method: "POST",
              params: {
                body: { type: "string" },
                comments: { type: "object[]" },
                "comments[].body": { required: !0, type: "string" },
                "comments[].path": { required: !0, type: "string" },
                "comments[].position": { required: !0, type: "integer" },
                commit_id: { type: "string" },
                event: {
                  enum: ["APPROVE", "REQUEST_CHANGES", "COMMENT"],
                  type: "string"
                },
                number: {
                  alias: "pull_number",
                  deprecated: !0,
                  type: "integer"
                },
                owner: { required: !0, type: "string" },
                pull_number: { required: !0, type: "integer" },
                repo: { required: !0, type: "string" }
              },
              url: "/repos/:owner/:repo/pulls/:pull_number/reviews"
            },
            createReviewCommentReply: {
              method: "POST",
              params: {
                body: { required: !0, type: "string" },
                comment_id: { required: !0, type: "integer" },
                owner: { required: !0, type: "string" },
                pull_number: { required: !0, type: "integer" },
                repo: { required: !0, type: "string" }
              },
              url:
                "/repos/:owner/:repo/pulls/:pull_number/comments/:comment_id/replies"
            },
            createReviewRequest: {
              method: "POST",
              params: {
                number: {
                  alias: "pull_number",
                  deprecated: !0,
                  type: "integer"
                },
                owner: { required: !0, type: "string" },
                pull_number: { required: !0, type: "integer" },
                repo: { required: !0, type: "string" },
                reviewers: { type: "string[]" },
                team_reviewers: { type: "string[]" }
              },
              url: "/repos/:owner/:repo/pulls/:pull_number/requested_reviewers"
            },
            deleteComment: {
              method: "DELETE",
              params: {
                comment_id: { required: !0, type: "integer" },
                owner: { required: !0, type: "string" },
                repo: { required: !0, type: "string" }
              },
              url: "/repos/:owner/:repo/pulls/comments/:comment_id"
            },
            deletePendingReview: {
              method: "DELETE",
              params: {
                number: {
                  alias: "pull_number",
                  deprecated: !0,
                  type: "integer"
                },
                owner: { required: !0, type: "string" },
                pull_number: { required: !0, type: "integer" },
                repo: { required: !0, type: "string" },
                review_id: { required: !0, type: "integer" }
              },
              url: "/repos/:owner/:repo/pulls/:pull_number/reviews/:review_id"
            },
            deleteReviewRequest: {
              method: "DELETE",
              params: {
                number: {
                  alias: "pull_number",
                  deprecated: !0,
                  type: "integer"
                },
                owner: { required: !0, type: "string" },
                pull_number: { required: !0, type: "integer" },
                repo: { required: !0, type: "string" },
                reviewers: { type: "string[]" },
                team_reviewers: { type: "string[]" }
              },
              url: "/repos/:owner/:repo/pulls/:pull_number/requested_reviewers"
            },
            dismissReview: {
              method: "PUT",
              params: {
                message: { required: !0, type: "string" },
                number: {
                  alias: "pull_number",
                  deprecated: !0,
                  type: "integer"
                },
                owner: { required: !0, type: "string" },
                pull_number: { required: !0, type: "integer" },
                repo: { required: !0, type: "string" },
                review_id: { required: !0, type: "integer" }
              },
              url:
                "/repos/:owner/:repo/pulls/:pull_number/reviews/:review_id/dismissals"
            },
            get: {
              method: "GET",
              params: {
                number: {
                  alias: "pull_number",
                  deprecated: !0,
                  type: "integer"
                },
                owner: { required: !0, type: "string" },
                pull_number: { required: !0, type: "integer" },
                repo: { required: !0, type: "string" }
              },
              url: "/repos/:owner/:repo/pulls/:pull_number"
            },
            getComment: {
              method: "GET",
              params: {
                comment_id: { required: !0, type: "integer" },
                owner: { required: !0, type: "string" },
                repo: { required: !0, type: "string" }
              },
              url: "/repos/:owner/:repo/pulls/comments/:comment_id"
            },
            getCommentsForReview: {
              method: "GET",
              params: {
                number: {
                  alias: "pull_number",
                  deprecated: !0,
                  type: "integer"
                },
                owner: { required: !0, type: "string" },
                page: { type: "integer" },
                per_page: { type: "integer" },
                pull_number: { required: !0, type: "integer" },
                repo: { required: !0, type: "string" },
                review_id: { required: !0, type: "integer" }
              },
              url:
                "/repos/:owner/:repo/pulls/:pull_number/reviews/:review_id/comments"
            },
            getReview: {
              method: "GET",
              params: {
                number: {
                  alias: "pull_number",
                  deprecated: !0,
                  type: "integer"
                },
                owner: { required: !0, type: "string" },
                pull_number: { required: !0, type: "integer" },
                repo: { required: !0, type: "string" },
                review_id: { required: !0, type: "integer" }
              },
              url: "/repos/:owner/:repo/pulls/:pull_number/reviews/:review_id"
            },
            list: {
              method: "GET",
              params: {
                base: { type: "string" },
                direction: { enum: ["asc", "desc"], type: "string" },
                head: { type: "string" },
                owner: { required: !0, type: "string" },
                page: { type: "integer" },
                per_page: { type: "integer" },
                repo: { required: !0, type: "string" },
                sort: {
                  enum: ["created", "updated", "popularity", "long-running"],
                  type: "string"
                },
                state: { enum: ["open", "closed", "all"], type: "string" }
              },
              url: "/repos/:owner/:repo/pulls"
            },
            listComments: {
              method: "GET",
              params: {
                direction: { enum: ["asc", "desc"], type: "string" },
                number: {
                  alias: "pull_number",
                  deprecated: !0,
                  type: "integer"
                },
                owner: { required: !0, type: "string" },
                page: { type: "integer" },
                per_page: { type: "integer" },
                pull_number: { required: !0, type: "integer" },
                repo: { required: !0, type: "string" },
                since: { type: "string" },
                sort: { enum: ["created", "updated"], type: "string" }
              },
              url: "/repos/:owner/:repo/pulls/:pull_number/comments"
            },
            listCommentsForRepo: {
              method: "GET",
              params: {
                direction: { enum: ["asc", "desc"], type: "string" },
                owner: { required: !0, type: "string" },
                page: { type: "integer" },
                per_page: { type: "integer" },
                repo: { required: !0, type: "string" },
                since: { type: "string" },
                sort: { enum: ["created", "updated"], type: "string" }
              },
              url: "/repos/:owner/:repo/pulls/comments"
            },
            listCommits: {
              method: "GET",
              params: {
                number: {
                  alias: "pull_number",
                  deprecated: !0,
                  type: "integer"
                },
                owner: { required: !0, type: "string" },
                page: { type: "integer" },
                per_page: { type: "integer" },
                pull_number: { required: !0, type: "integer" },
                repo: { required: !0, type: "string" }
              },
              url: "/repos/:owner/:repo/pulls/:pull_number/commits"
            },
            listFiles: {
              method: "GET",
              params: {
                number: {
                  alias: "pull_number",
                  deprecated: !0,
                  type: "integer"
                },
                owner: { required: !0, type: "string" },
                page: { type: "integer" },
                per_page: { type: "integer" },
                pull_number: { required: !0, type: "integer" },
                repo: { required: !0, type: "string" }
              },
              url: "/repos/:owner/:repo/pulls/:pull_number/files"
            },
            listReviewRequests: {
              method: "GET",
              params: {
                number: {
                  alias: "pull_number",
                  deprecated: !0,
                  type: "integer"
                },
                owner: { required: !0, type: "string" },
                page: { type: "integer" },
                per_page: { type: "integer" },
                pull_number: { required: !0, type: "integer" },
                repo: { required: !0, type: "string" }
              },
              url: "/repos/:owner/:repo/pulls/:pull_number/requested_reviewers"
            },
            listReviews: {
              method: "GET",
              params: {
                number: {
                  alias: "pull_number",
                  deprecated: !0,
                  type: "integer"
                },
                owner: { required: !0, type: "string" },
                page: { type: "integer" },
                per_page: { type: "integer" },
                pull_number: { required: !0, type: "integer" },
                repo: { required: !0, type: "string" }
              },
              url: "/repos/:owner/:repo/pulls/:pull_number/reviews"
            },
            merge: {
              method: "PUT",
              params: {
                commit_message: { type: "string" },
                commit_title: { type: "string" },
                merge_method: {
                  enum: ["merge", "squash", "rebase"],
                  type: "string"
                },
                number: {
                  alias: "pull_number",
                  deprecated: !0,
                  type: "integer"
                },
                owner: { required: !0, type: "string" },
                pull_number: { required: !0, type: "integer" },
                repo: { required: !0, type: "string" },
                sha: { type: "string" }
              },
              url: "/repos/:owner/:repo/pulls/:pull_number/merge"
            },
            submitReview: {
              method: "POST",
              params: {
                body: { type: "string" },
                event: {
                  enum: ["APPROVE", "REQUEST_CHANGES", "COMMENT"],
                  required: !0,
                  type: "string"
                },
                number: {
                  alias: "pull_number",
                  deprecated: !0,
                  type: "integer"
                },
                owner: { required: !0, type: "string" },
                pull_number: { required: !0, type: "integer" },
                repo: { required: !0, type: "string" },
                review_id: { required: !0, type: "integer" }
              },
              url:
                "/repos/:owner/:repo/pulls/:pull_number/reviews/:review_id/events"
            },
            update: {
              method: "PATCH",
              params: {
                base: { type: "string" },
                body: { type: "string" },
                maintainer_can_modify: { type: "boolean" },
                number: {
                  alias: "pull_number",
                  deprecated: !0,
                  type: "integer"
                },
                owner: { required: !0, type: "string" },
                pull_number: { required: !0, type: "integer" },
                repo: { required: !0, type: "string" },
                state: { enum: ["open", "closed"], type: "string" },
                title: { type: "string" }
              },
              url: "/repos/:owner/:repo/pulls/:pull_number"
            },
            updateBranch: {
              headers: { accept: "application/vnd.github.lydian-preview+json" },
              method: "PUT",
              params: {
                expected_head_sha: { type: "string" },
                owner: { required: !0, type: "string" },
                pull_number: { required: !0, type: "integer" },
                repo: { required: !0, type: "string" }
              },
              url: "/repos/:owner/:repo/pulls/:pull_number/update-branch"
            },
            updateComment: {
              method: "PATCH",
              params: {
                body: { required: !0, type: "string" },
                comment_id: { required: !0, type: "integer" },
                owner: { required: !0, type: "string" },
                repo: { required: !0, type: "string" }
              },
              url: "/repos/:owner/:repo/pulls/comments/:comment_id"
            },
            updateReview: {
              method: "PUT",
              params: {
                body: { required: !0, type: "string" },
                number: {
                  alias: "pull_number",
                  deprecated: !0,
                  type: "integer"
                },
                owner: { required: !0, type: "string" },
                pull_number: { required: !0, type: "integer" },
                repo: { required: !0, type: "string" },
                review_id: { required: !0, type: "integer" }
              },
              url: "/repos/:owner/:repo/pulls/:pull_number/reviews/:review_id"
            }
          },
          rateLimit: { get: { method: "GET", params: {}, url: "/rate_limit" } },
          reactions: {
            createForCommitComment: {
              headers: {
                accept: "application/vnd.github.squirrel-girl-preview+json"
              },
              method: "POST",
              params: {
                comment_id: { required: !0, type: "integer" },
                content: {
                  enum: [
                    "+1",
                    "-1",
                    "laugh",
                    "confused",
                    "heart",
                    "hooray",
                    "rocket",
                    "eyes"
                  ],
                  required: !0,
                  type: "string"
                },
                owner: { required: !0, type: "string" },
                repo: { required: !0, type: "string" }
              },
              url: "/repos/:owner/:repo/comments/:comment_id/reactions"
            },
            createForIssue: {
              headers: {
                accept: "application/vnd.github.squirrel-girl-preview+json"
              },
              method: "POST",
              params: {
                content: {
                  enum: [
                    "+1",
                    "-1",
                    "laugh",
                    "confused",
                    "heart",
                    "hooray",
                    "rocket",
                    "eyes"
                  ],
                  required: !0,
                  type: "string"
                },
                issue_number: { required: !0, type: "integer" },
                number: {
                  alias: "issue_number",
                  deprecated: !0,
                  type: "integer"
                },
                owner: { required: !0, type: "string" },
                repo: { required: !0, type: "string" }
              },
              url: "/repos/:owner/:repo/issues/:issue_number/reactions"
            },
            createForIssueComment: {
              headers: {
                accept: "application/vnd.github.squirrel-girl-preview+json"
              },
              method: "POST",
              params: {
                comment_id: { required: !0, type: "integer" },
                content: {
                  enum: [
                    "+1",
                    "-1",
                    "laugh",
                    "confused",
                    "heart",
                    "hooray",
                    "rocket",
                    "eyes"
                  ],
                  required: !0,
                  type: "string"
                },
                owner: { required: !0, type: "string" },
                repo: { required: !0, type: "string" }
              },
              url: "/repos/:owner/:repo/issues/comments/:comment_id/reactions"
            },
            createForPullRequestReviewComment: {
              headers: {
                accept: "application/vnd.github.squirrel-girl-preview+json"
              },
              method: "POST",
              params: {
                comment_id: { required: !0, type: "integer" },
                content: {
                  enum: [
                    "+1",
                    "-1",
                    "laugh",
                    "confused",
                    "heart",
                    "hooray",
                    "rocket",
                    "eyes"
                  ],
                  required: !0,
                  type: "string"
                },
                owner: { required: !0, type: "string" },
                repo: { required: !0, type: "string" }
              },
              url: "/repos/:owner/:repo/pulls/comments/:comment_id/reactions"
            },
            createForTeamDiscussion: {
              deprecated:
                "octokit.reactions.createForTeamDiscussion() has been renamed to octokit.reactions.createForTeamDiscussionLegacy() (2020-01-16)",
              headers: {
                accept: "application/vnd.github.squirrel-girl-preview+json"
              },
              method: "POST",
              params: {
                content: {
                  enum: [
                    "+1",
                    "-1",
                    "laugh",
                    "confused",
                    "heart",
                    "hooray",
                    "rocket",
                    "eyes"
                  ],
                  required: !0,
                  type: "string"
                },
                discussion_number: { required: !0, type: "integer" },
                team_id: { required: !0, type: "integer" }
              },
              url: "/teams/:team_id/discussions/:discussion_number/reactions"
            },
            createForTeamDiscussionComment: {
              deprecated:
                "octokit.reactions.createForTeamDiscussionComment() has been renamed to octokit.reactions.createForTeamDiscussionCommentLegacy() (2020-01-16)",
              headers: {
                accept: "application/vnd.github.squirrel-girl-preview+json"
              },
              method: "POST",
              params: {
                comment_number: { required: !0, type: "integer" },
                content: {
                  enum: [
                    "+1",
                    "-1",
                    "laugh",
                    "confused",
                    "heart",
                    "hooray",
                    "rocket",
                    "eyes"
                  ],
                  required: !0,
                  type: "string"
                },
                discussion_number: { required: !0, type: "integer" },
                team_id: { required: !0, type: "integer" }
              },
              url:
                "/teams/:team_id/discussions/:discussion_number/comments/:comment_number/reactions"
            },
            createForTeamDiscussionCommentInOrg: {
              headers: {
                accept: "application/vnd.github.squirrel-girl-preview+json"
              },
              method: "POST",
              params: {
                comment_number: { required: !0, type: "integer" },
                content: {
                  enum: [
                    "+1",
                    "-1",
                    "laugh",
                    "confused",
                    "heart",
                    "hooray",
                    "rocket",
                    "eyes"
                  ],
                  required: !0,
                  type: "string"
                },
                discussion_number: { required: !0, type: "integer" },
                org: { required: !0, type: "string" },
                team_slug: { required: !0, type: "string" }
              },
              url:
                "/orgs/:org/teams/:team_slug/discussions/:discussion_number/comments/:comment_number/reactions"
            },
            createForTeamDiscussionCommentLegacy: {
              deprecated:
                "octokit.reactions.createForTeamDiscussionCommentLegacy() is deprecated, see https://developer.github.com/v3/reactions/#create-reaction-for-a-team-discussion-comment-legacy",
              headers: {
                accept: "application/vnd.github.squirrel-girl-preview+json"
              },
              method: "POST",
              params: {
                comment_number: { required: !0, type: "integer" },
                content: {
                  enum: [
                    "+1",
                    "-1",
                    "laugh",
                    "confused",
                    "heart",
                    "hooray",
                    "rocket",
                    "eyes"
                  ],
                  required: !0,
                  type: "string"
                },
                discussion_number: { required: !0, type: "integer" },
                team_id: { required: !0, type: "integer" }
              },
              url:
                "/teams/:team_id/discussions/:discussion_number/comments/:comment_number/reactions"
            },
            createForTeamDiscussionInOrg: {
              headers: {
                accept: "application/vnd.github.squirrel-girl-preview+json"
              },
              method: "POST",
              params: {
                content: {
                  enum: [
                    "+1",
                    "-1",
                    "laugh",
                    "confused",
                    "heart",
                    "hooray",
                    "rocket",
                    "eyes"
                  ],
                  required: !0,
                  type: "string"
                },
                discussion_number: { required: !0, type: "integer" },
                org: { required: !0, type: "string" },
                team_slug: { required: !0, type: "string" }
              },
              url:
                "/orgs/:org/teams/:team_slug/discussions/:discussion_number/reactions"
            },
            createForTeamDiscussionLegacy: {
              deprecated:
                "octokit.reactions.createForTeamDiscussionLegacy() is deprecated, see https://developer.github.com/v3/reactions/#create-reaction-for-a-team-discussion-legacy",
              headers: {
                accept: "application/vnd.github.squirrel-girl-preview+json"
              },
              method: "POST",
              params: {
                content: {
                  enum: [
                    "+1",
                    "-1",
                    "laugh",
                    "confused",
                    "heart",
                    "hooray",
                    "rocket",
                    "eyes"
                  ],
                  required: !0,
                  type: "string"
                },
                discussion_number: { required: !0, type: "integer" },
                team_id: { required: !0, type: "integer" }
              },
              url: "/teams/:team_id/discussions/:discussion_number/reactions"
            },
            delete: {
              headers: {
                accept: "application/vnd.github.squirrel-girl-preview+json"
              },
              method: "DELETE",
              params: { reaction_id: { required: !0, type: "integer" } },
              url: "/reactions/:reaction_id"
            },
            listForCommitComment: {
              headers: {
                accept: "application/vnd.github.squirrel-girl-preview+json"
              },
              method: "GET",
              params: {
                comment_id: { required: !0, type: "integer" },
                content: {
                  enum: [
                    "+1",
                    "-1",
                    "laugh",
                    "confused",
                    "heart",
                    "hooray",
                    "rocket",
                    "eyes"
                  ],
                  type: "string"
                },
                owner: { required: !0, type: "string" },
                page: { type: "integer" },
                per_page: { type: "integer" },
                repo: { required: !0, type: "string" }
              },
              url: "/repos/:owner/:repo/comments/:comment_id/reactions"
            },
            listForIssue: {
              headers: {
                accept: "application/vnd.github.squirrel-girl-preview+json"
              },
              method: "GET",
              params: {
                content: {
                  enum: [
                    "+1",
                    "-1",
                    "laugh",
                    "confused",
                    "heart",
                    "hooray",
                    "rocket",
                    "eyes"
                  ],
                  type: "string"
                },
                issue_number: { required: !0, type: "integer" },
                number: {
                  alias: "issue_number",
                  deprecated: !0,
                  type: "integer"
                },
                owner: { required: !0, type: "string" },
                page: { type: "integer" },
                per_page: { type: "integer" },
                repo: { required: !0, type: "string" }
              },
              url: "/repos/:owner/:repo/issues/:issue_number/reactions"
            },
            listForIssueComment: {
              headers: {
                accept: "application/vnd.github.squirrel-girl-preview+json"
              },
              method: "GET",
              params: {
                comment_id: { required: !0, type: "integer" },
                content: {
                  enum: [
                    "+1",
                    "-1",
                    "laugh",
                    "confused",
                    "heart",
                    "hooray",
                    "rocket",
                    "eyes"
                  ],
                  type: "string"
                },
                owner: { required: !0, type: "string" },
                page: { type: "integer" },
                per_page: { type: "integer" },
                repo: { required: !0, type: "string" }
              },
              url: "/repos/:owner/:repo/issues/comments/:comment_id/reactions"
            },
            listForPullRequestReviewComment: {
              headers: {
                accept: "application/vnd.github.squirrel-girl-preview+json"
              },
              method: "GET",
              params: {
                comment_id: { required: !0, type: "integer" },
                content: {
                  enum: [
                    "+1",
                    "-1",
                    "laugh",
                    "confused",
                    "heart",
                    "hooray",
                    "rocket",
                    "eyes"
                  ],
                  type: "string"
                },
                owner: { required: !0, type: "string" },
                page: { type: "integer" },
                per_page: { type: "integer" },
                repo: { required: !0, type: "string" }
              },
              url: "/repos/:owner/:repo/pulls/comments/:comment_id/reactions"
            },
            listForTeamDiscussion: {
              deprecated:
                "octokit.reactions.listForTeamDiscussion() has been renamed to octokit.reactions.listForTeamDiscussionLegacy() (2020-01-16)",
              headers: {
                accept: "application/vnd.github.squirrel-girl-preview+json"
              },
              method: "GET",
              params: {
                content: {
                  enum: [
                    "+1",
                    "-1",
                    "laugh",
                    "confused",
                    "heart",
                    "hooray",
                    "rocket",
                    "eyes"
                  ],
                  type: "string"
                },
                discussion_number: { required: !0, type: "integer" },
                page: { type: "integer" },
                per_page: { type: "integer" },
                team_id: { required: !0, type: "integer" }
              },
              url: "/teams/:team_id/discussions/:discussion_number/reactions"
            },
            listForTeamDiscussionComment: {
              deprecated:
                "octokit.reactions.listForTeamDiscussionComment() has been renamed to octokit.reactions.listForTeamDiscussionCommentLegacy() (2020-01-16)",
              headers: {
                accept: "application/vnd.github.squirrel-girl-preview+json"
              },
              method: "GET",
              params: {
                comment_number: { required: !0, type: "integer" },
                content: {
                  enum: [
                    "+1",
                    "-1",
                    "laugh",
                    "confused",
                    "heart",
                    "hooray",
                    "rocket",
                    "eyes"
                  ],
                  type: "string"
                },
                discussion_number: { required: !0, type: "integer" },
                page: { type: "integer" },
                per_page: { type: "integer" },
                team_id: { required: !0, type: "integer" }
              },
              url:
                "/teams/:team_id/discussions/:discussion_number/comments/:comment_number/reactions"
            },
            listForTeamDiscussionCommentInOrg: {
              headers: {
                accept: "application/vnd.github.squirrel-girl-preview+json"
              },
              method: "GET",
              params: {
                comment_number: { required: !0, type: "integer" },
                content: {
                  enum: [
                    "+1",
                    "-1",
                    "laugh",
                    "confused",
                    "heart",
                    "hooray",
                    "rocket",
                    "eyes"
                  ],
                  type: "string"
                },
                discussion_number: { required: !0, type: "integer" },
                org: { required: !0, type: "string" },
                page: { type: "integer" },
                per_page: { type: "integer" },
                team_slug: { required: !0, type: "string" }
              },
              url:
                "/orgs/:org/teams/:team_slug/discussions/:discussion_number/comments/:comment_number/reactions"
            },
            listForTeamDiscussionCommentLegacy: {
              deprecated:
                "octokit.reactions.listForTeamDiscussionCommentLegacy() is deprecated, see https://developer.github.com/v3/reactions/#list-reactions-for-a-team-discussion-comment-legacy",
              headers: {
                accept: "application/vnd.github.squirrel-girl-preview+json"
              },
              method: "GET",
              params: {
                comment_number: { required: !0, type: "integer" },
                content: {
                  enum: [
                    "+1",
                    "-1",
                    "laugh",
                    "confused",
                    "heart",
                    "hooray",
                    "rocket",
                    "eyes"
                  ],
                  type: "string"
                },
                discussion_number: { required: !0, type: "integer" },
                page: { type: "integer" },
                per_page: { type: "integer" },
                team_id: { required: !0, type: "integer" }
              },
              url:
                "/teams/:team_id/discussions/:discussion_number/comments/:comment_number/reactions"
            },
            listForTeamDiscussionInOrg: {
              headers: {
                accept: "application/vnd.github.squirrel-girl-preview+json"
              },
              method: "GET",
              params: {
                content: {
                  enum: [
                    "+1",
                    "-1",
                    "laugh",
                    "confused",
                    "heart",
                    "hooray",
                    "rocket",
                    "eyes"
                  ],
                  type: "string"
                },
                discussion_number: { required: !0, type: "integer" },
                org: { required: !0, type: "string" },
                page: { type: "integer" },
                per_page: { type: "integer" },
                team_slug: { required: !0, type: "string" }
              },
              url:
                "/orgs/:org/teams/:team_slug/discussions/:discussion_number/reactions"
            },
            listForTeamDiscussionLegacy: {
              deprecated:
                "octokit.reactions.listForTeamDiscussionLegacy() is deprecated, see https://developer.github.com/v3/reactions/#list-reactions-for-a-team-discussion-legacy",
              headers: {
                accept: "application/vnd.github.squirrel-girl-preview+json"
              },
              method: "GET",
              params: {
                content: {
                  enum: [
                    "+1",
                    "-1",
                    "laugh",
                    "confused",
                    "heart",
                    "hooray",
                    "rocket",
                    "eyes"
                  ],
                  type: "string"
                },
                discussion_number: { required: !0, type: "integer" },
                page: { type: "integer" },
                per_page: { type: "integer" },
                team_id: { required: !0, type: "integer" }
              },
              url: "/teams/:team_id/discussions/:discussion_number/reactions"
            }
          },
          repos: {
            acceptInvitation: {
              method: "PATCH",
              params: { invitation_id: { required: !0, type: "integer" } },
              url: "/user/repository_invitations/:invitation_id"
            },
            addCollaborator: {
              method: "PUT",
              params: {
                owner: { required: !0, type: "string" },
                permission: { enum: ["pull", "push", "admin"], type: "string" },
                repo: { required: !0, type: "string" },
                username: { required: !0, type: "string" }
              },
              url: "/repos/:owner/:repo/collaborators/:username"
            },
            addDeployKey: {
              method: "POST",
              params: {
                key: { required: !0, type: "string" },
                owner: { required: !0, type: "string" },
                read_only: { type: "boolean" },
                repo: { required: !0, type: "string" },
                title: { type: "string" }
              },
              url: "/repos/:owner/:repo/keys"
            },
            addProtectedBranchAdminEnforcement: {
              method: "POST",
              params: {
                branch: { required: !0, type: "string" },
                owner: { required: !0, type: "string" },
                repo: { required: !0, type: "string" }
              },
              url:
                "/repos/:owner/:repo/branches/:branch/protection/enforce_admins"
            },
            addProtectedBranchAppRestrictions: {
              method: "POST",
              params: {
                apps: { mapTo: "data", required: !0, type: "string[]" },
                branch: { required: !0, type: "string" },
                owner: { required: !0, type: "string" },
                repo: { required: !0, type: "string" }
              },
              url:
                "/repos/:owner/:repo/branches/:branch/protection/restrictions/apps"
            },
            addProtectedBranchRequiredSignatures: {
              headers: { accept: "application/vnd.github.zzzax-preview+json" },
              method: "POST",
              params: {
                branch: { required: !0, type: "string" },
                owner: { required: !0, type: "string" },
                repo: { required: !0, type: "string" }
              },
              url:
                "/repos/:owner/:repo/branches/:branch/protection/required_signatures"
            },
            addProtectedBranchRequiredStatusChecksContexts: {
              method: "POST",
              params: {
                branch: { required: !0, type: "string" },
                contexts: { mapTo: "data", required: !0, type: "string[]" },
                owner: { required: !0, type: "string" },
                repo: { required: !0, type: "string" }
              },
              url:
                "/repos/:owner/:repo/branches/:branch/protection/required_status_checks/contexts"
            },
            addProtectedBranchTeamRestrictions: {
              method: "POST",
              params: {
                branch: { required: !0, type: "string" },
                owner: { required: !0, type: "string" },
                repo: { required: !0, type: "string" },
                teams: { mapTo: "data", required: !0, type: "string[]" }
              },
              url:
                "/repos/:owner/:repo/branches/:branch/protection/restrictions/teams"
            },
            addProtectedBranchUserRestrictions: {
              method: "POST",
              params: {
                branch: { required: !0, type: "string" },
                owner: { required: !0, type: "string" },
                repo: { required: !0, type: "string" },
                users: { mapTo: "data", required: !0, type: "string[]" }
              },
              url:
                "/repos/:owner/:repo/branches/:branch/protection/restrictions/users"
            },
            checkCollaborator: {
              method: "GET",
              params: {
                owner: { required: !0, type: "string" },
                repo: { required: !0, type: "string" },
                username: { required: !0, type: "string" }
              },
              url: "/repos/:owner/:repo/collaborators/:username"
            },
            checkVulnerabilityAlerts: {
              headers: { accept: "application/vnd.github.dorian-preview+json" },
              method: "GET",
              params: {
                owner: { required: !0, type: "string" },
                repo: { required: !0, type: "string" }
              },
              url: "/repos/:owner/:repo/vulnerability-alerts"
            },
            compareCommits: {
              method: "GET",
              params: {
                base: { required: !0, type: "string" },
                head: { required: !0, type: "string" },
                owner: { required: !0, type: "string" },
                repo: { required: !0, type: "string" }
              },
              url: "/repos/:owner/:repo/compare/:base...:head"
            },
            createCommitComment: {
              method: "POST",
              params: {
                body: { required: !0, type: "string" },
                commit_sha: { required: !0, type: "string" },
                line: { type: "integer" },
                owner: { required: !0, type: "string" },
                path: { type: "string" },
                position: { type: "integer" },
                repo: { required: !0, type: "string" },
                sha: { alias: "commit_sha", deprecated: !0, type: "string" }
              },
              url: "/repos/:owner/:repo/commits/:commit_sha/comments"
            },
            createDeployment: {
              method: "POST",
              params: {
                auto_merge: { type: "boolean" },
                description: { type: "string" },
                environment: { type: "string" },
                owner: { required: !0, type: "string" },
                payload: { type: "string" },
                production_environment: { type: "boolean" },
                ref: { required: !0, type: "string" },
                repo: { required: !0, type: "string" },
                required_contexts: { type: "string[]" },
                task: { type: "string" },
                transient_environment: { type: "boolean" }
              },
              url: "/repos/:owner/:repo/deployments"
            },
            createDeploymentStatus: {
              method: "POST",
              params: {
                auto_inactive: { type: "boolean" },
                deployment_id: { required: !0, type: "integer" },
                description: { type: "string" },
                environment: {
                  enum: ["production", "staging", "qa"],
                  type: "string"
                },
                environment_url: { type: "string" },
                log_url: { type: "string" },
                owner: { required: !0, type: "string" },
                repo: { required: !0, type: "string" },
                state: {
                  enum: [
                    "error",
                    "failure",
                    "inactive",
                    "in_progress",
                    "queued",
                    "pending",
                    "success"
                  ],
                  required: !0,
                  type: "string"
                },
                target_url: { type: "string" }
              },
              url: "/repos/:owner/:repo/deployments/:deployment_id/statuses"
            },
            createDispatchEvent: {
              method: "POST",
              params: {
                client_payload: { type: "object" },
                event_type: { type: "string" },
                owner: { required: !0, type: "string" },
                repo: { required: !0, type: "string" }
              },
              url: "/repos/:owner/:repo/dispatches"
            },
            createFile: {
              deprecated:
                "octokit.repos.createFile() has been renamed to octokit.repos.createOrUpdateFile() (2019-06-07)",
              method: "PUT",
              params: {
                author: { type: "object" },
                "author.email": { required: !0, type: "string" },
                "author.name": { required: !0, type: "string" },
                branch: { type: "string" },
                committer: { type: "object" },
                "committer.email": { required: !0, type: "string" },
                "committer.name": { required: !0, type: "string" },
                content: { required: !0, type: "string" },
                message: { required: !0, type: "string" },
                owner: { required: !0, type: "string" },
                path: { required: !0, type: "string" },
                repo: { required: !0, type: "string" },
                sha: { type: "string" }
              },
              url: "/repos/:owner/:repo/contents/:path"
            },
            createForAuthenticatedUser: {
              method: "POST",
              params: {
                allow_merge_commit: { type: "boolean" },
                allow_rebase_merge: { type: "boolean" },
                allow_squash_merge: { type: "boolean" },
                auto_init: { type: "boolean" },
                delete_branch_on_merge: { type: "boolean" },
                description: { type: "string" },
                gitignore_template: { type: "string" },
                has_issues: { type: "boolean" },
                has_projects: { type: "boolean" },
                has_wiki: { type: "boolean" },
                homepage: { type: "string" },
                is_template: { type: "boolean" },
                license_template: { type: "string" },
                name: { required: !0, type: "string" },
                private: { type: "boolean" },
                team_id: { type: "integer" },
                visibility: {
                  enum: ["public", "private", "visibility", "internal"],
                  type: "string"
                }
              },
              url: "/user/repos"
            },
            createFork: {
              method: "POST",
              params: {
                organization: { type: "string" },
                owner: { required: !0, type: "string" },
                repo: { required: !0, type: "string" }
              },
              url: "/repos/:owner/:repo/forks"
            },
            createHook: {
              method: "POST",
              params: {
                active: { type: "boolean" },
                config: { required: !0, type: "object" },
                "config.content_type": { type: "string" },
                "config.insecure_ssl": { type: "string" },
                "config.secret": { type: "string" },
                "config.url": { required: !0, type: "string" },
                events: { type: "string[]" },
                name: { type: "string" },
                owner: { required: !0, type: "string" },
                repo: { required: !0, type: "string" }
              },
              url: "/repos/:owner/:repo/hooks"
            },
            createInOrg: {
              method: "POST",
              params: {
                allow_merge_commit: { type: "boolean" },
                allow_rebase_merge: { type: "boolean" },
                allow_squash_merge: { type: "boolean" },
                auto_init: { type: "boolean" },
                delete_branch_on_merge: { type: "boolean" },
                description: { type: "string" },
                gitignore_template: { type: "string" },
                has_issues: { type: "boolean" },
                has_projects: { type: "boolean" },
                has_wiki: { type: "boolean" },
                homepage: { type: "string" },
                is_template: { type: "boolean" },
                license_template: { type: "string" },
                name: { required: !0, type: "string" },
                org: { required: !0, type: "string" },
                private: { type: "boolean" },
                team_id: { type: "integer" },
                visibility: {
                  enum: ["public", "private", "visibility", "internal"],
                  type: "string"
                }
              },
              url: "/orgs/:org/repos"
            },
            createOrUpdateFile: {
              method: "PUT",
              params: {
                author: { type: "object" },
                "author.email": { required: !0, type: "string" },
                "author.name": { required: !0, type: "string" },
                branch: { type: "string" },
                committer: { type: "object" },
                "committer.email": { required: !0, type: "string" },
                "committer.name": { required: !0, type: "string" },
                content: { required: !0, type: "string" },
                message: { required: !0, type: "string" },
                owner: { required: !0, type: "string" },
                path: { required: !0, type: "string" },
                repo: { required: !0, type: "string" },
                sha: { type: "string" }
              },
              url: "/repos/:owner/:repo/contents/:path"
            },
            createRelease: {
              method: "POST",
              params: {
                body: { type: "string" },
                draft: { type: "boolean" },
                name: { type: "string" },
                owner: { required: !0, type: "string" },
                prerelease: { type: "boolean" },
                repo: { required: !0, type: "string" },
                tag_name: { required: !0, type: "string" },
                target_commitish: { type: "string" }
              },
              url: "/repos/:owner/:repo/releases"
            },
            createStatus: {
              method: "POST",
              params: {
                context: { type: "string" },
                description: { type: "string" },
                owner: { required: !0, type: "string" },
                repo: { required: !0, type: "string" },
                sha: { required: !0, type: "string" },
                state: {
                  enum: ["error", "failure", "pending", "success"],
                  required: !0,
                  type: "string"
                },
                target_url: { type: "string" }
              },
              url: "/repos/:owner/:repo/statuses/:sha"
            },
            createUsingTemplate: {
              headers: {
                accept: "application/vnd.github.baptiste-preview+json"
              },
              method: "POST",
              params: {
                description: { type: "string" },
                name: { required: !0, type: "string" },
                owner: { type: "string" },
                private: { type: "boolean" },
                template_owner: { required: !0, type: "string" },
                template_repo: { required: !0, type: "string" }
              },
              url: "/repos/:template_owner/:template_repo/generate"
            },
            declineInvitation: {
              method: "DELETE",
              params: { invitation_id: { required: !0, type: "integer" } },
              url: "/user/repository_invitations/:invitation_id"
            },
            delete: {
              method: "DELETE",
              params: {
                owner: { required: !0, type: "string" },
                repo: { required: !0, type: "string" }
              },
              url: "/repos/:owner/:repo"
            },
            deleteCommitComment: {
              method: "DELETE",
              params: {
                comment_id: { required: !0, type: "integer" },
                owner: { required: !0, type: "string" },
                repo: { required: !0, type: "string" }
              },
              url: "/repos/:owner/:repo/comments/:comment_id"
            },
            deleteDownload: {
              method: "DELETE",
              params: {
                download_id: { required: !0, type: "integer" },
                owner: { required: !0, type: "string" },
                repo: { required: !0, type: "string" }
              },
              url: "/repos/:owner/:repo/downloads/:download_id"
            },
            deleteFile: {
              method: "DELETE",
              params: {
                author: { type: "object" },
                "author.email": { type: "string" },
                "author.name": { type: "string" },
                branch: { type: "string" },
                committer: { type: "object" },
                "committer.email": { type: "string" },
                "committer.name": { type: "string" },
                message: { required: !0, type: "string" },
                owner: { required: !0, type: "string" },
                path: { required: !0, type: "string" },
                repo: { required: !0, type: "string" },
                sha: { required: !0, type: "string" }
              },
              url: "/repos/:owner/:repo/contents/:path"
            },
            deleteHook: {
              method: "DELETE",
              params: {
                hook_id: { required: !0, type: "integer" },
                owner: { required: !0, type: "string" },
                repo: { required: !0, type: "string" }
              },
              url: "/repos/:owner/:repo/hooks/:hook_id"
            },
            deleteInvitation: {
              method: "DELETE",
              params: {
                invitation_id: { required: !0, type: "integer" },
                owner: { required: !0, type: "string" },
                repo: { required: !0, type: "string" }
              },
              url: "/repos/:owner/:repo/invitations/:invitation_id"
            },
            deleteRelease: {
              method: "DELETE",
              params: {
                owner: { required: !0, type: "string" },
                release_id: { required: !0, type: "integer" },
                repo: { required: !0, type: "string" }
              },
              url: "/repos/:owner/:repo/releases/:release_id"
            },
            deleteReleaseAsset: {
              method: "DELETE",
              params: {
                asset_id: { required: !0, type: "integer" },
                owner: { required: !0, type: "string" },
                repo: { required: !0, type: "string" }
              },
              url: "/repos/:owner/:repo/releases/assets/:asset_id"
            },
            disableAutomatedSecurityFixes: {
              headers: { accept: "application/vnd.github.london-preview+json" },
              method: "DELETE",
              params: {
                owner: { required: !0, type: "string" },
                repo: { required: !0, type: "string" }
              },
              url: "/repos/:owner/:repo/automated-security-fixes"
            },
            disablePagesSite: {
              headers: {
                accept: "application/vnd.github.switcheroo-preview+json"
              },
              method: "DELETE",
              params: {
                owner: { required: !0, type: "string" },
                repo: { required: !0, type: "string" }
              },
              url: "/repos/:owner/:repo/pages"
            },
            disableVulnerabilityAlerts: {
              headers: { accept: "application/vnd.github.dorian-preview+json" },
              method: "DELETE",
              params: {
                owner: { required: !0, type: "string" },
                repo: { required: !0, type: "string" }
              },
              url: "/repos/:owner/:repo/vulnerability-alerts"
            },
            enableAutomatedSecurityFixes: {
              headers: { accept: "application/vnd.github.london-preview+json" },
              method: "PUT",
              params: {
                owner: { required: !0, type: "string" },
                repo: { required: !0, type: "string" }
              },
              url: "/repos/:owner/:repo/automated-security-fixes"
            },
            enablePagesSite: {
              headers: {
                accept: "application/vnd.github.switcheroo-preview+json"
              },
              method: "POST",
              params: {
                owner: { required: !0, type: "string" },
                repo: { required: !0, type: "string" },
                source: { type: "object" },
                "source.branch": {
                  enum: ["master", "gh-pages"],
                  type: "string"
                },
                "source.path": { type: "string" }
              },
              url: "/repos/:owner/:repo/pages"
            },
            enableVulnerabilityAlerts: {
              headers: { accept: "application/vnd.github.dorian-preview+json" },
              method: "PUT",
              params: {
                owner: { required: !0, type: "string" },
                repo: { required: !0, type: "string" }
              },
              url: "/repos/:owner/:repo/vulnerability-alerts"
            },
            get: {
              method: "GET",
              params: {
                owner: { required: !0, type: "string" },
                repo: { required: !0, type: "string" }
              },
              url: "/repos/:owner/:repo"
            },
            getAppsWithAccessToProtectedBranch: {
              method: "GET",
              params: {
                branch: { required: !0, type: "string" },
                owner: { required: !0, type: "string" },
                repo: { required: !0, type: "string" }
              },
              url:
                "/repos/:owner/:repo/branches/:branch/protection/restrictions/apps"
            },
            getArchiveLink: {
              method: "GET",
              params: {
                archive_format: { required: !0, type: "string" },
                owner: { required: !0, type: "string" },
                ref: { required: !0, type: "string" },
                repo: { required: !0, type: "string" }
              },
              url: "/repos/:owner/:repo/:archive_format/:ref"
            },
            getBranch: {
              method: "GET",
              params: {
                branch: { required: !0, type: "string" },
                owner: { required: !0, type: "string" },
                repo: { required: !0, type: "string" }
              },
              url: "/repos/:owner/:repo/branches/:branch"
            },
            getBranchProtection: {
              method: "GET",
              params: {
                branch: { required: !0, type: "string" },
                owner: { required: !0, type: "string" },
                repo: { required: !0, type: "string" }
              },
              url: "/repos/:owner/:repo/branches/:branch/protection"
            },
            getClones: {
              method: "GET",
              params: {
                owner: { required: !0, type: "string" },
                per: { enum: ["day", "week"], type: "string" },
                repo: { required: !0, type: "string" }
              },
              url: "/repos/:owner/:repo/traffic/clones"
            },
            getCodeFrequencyStats: {
              method: "GET",
              params: {
                owner: { required: !0, type: "string" },
                repo: { required: !0, type: "string" }
              },
              url: "/repos/:owner/:repo/stats/code_frequency"
            },
            getCollaboratorPermissionLevel: {
              method: "GET",
              params: {
                owner: { required: !0, type: "string" },
                repo: { required: !0, type: "string" },
                username: { required: !0, type: "string" }
              },
              url: "/repos/:owner/:repo/collaborators/:username/permission"
            },
            getCombinedStatusForRef: {
              method: "GET",
              params: {
                owner: { required: !0, type: "string" },
                ref: { required: !0, type: "string" },
                repo: { required: !0, type: "string" }
              },
              url: "/repos/:owner/:repo/commits/:ref/status"
            },
            getCommit: {
              method: "GET",
              params: {
                commit_sha: { alias: "ref", deprecated: !0, type: "string" },
                owner: { required: !0, type: "string" },
                ref: { required: !0, type: "string" },
                repo: { required: !0, type: "string" },
                sha: { alias: "ref", deprecated: !0, type: "string" }
              },
              url: "/repos/:owner/:repo/commits/:ref"
            },
            getCommitActivityStats: {
              method: "GET",
              params: {
                owner: { required: !0, type: "string" },
                repo: { required: !0, type: "string" }
              },
              url: "/repos/:owner/:repo/stats/commit_activity"
            },
            getCommitComment: {
              method: "GET",
              params: {
                comment_id: { required: !0, type: "integer" },
                owner: { required: !0, type: "string" },
                repo: { required: !0, type: "string" }
              },
              url: "/repos/:owner/:repo/comments/:comment_id"
            },
            getCommitRefSha: {
              deprecated:
                "octokit.repos.getCommitRefSha() is deprecated, see https://developer.github.com/v3/repos/commits/#get-a-single-commit",
              headers: { accept: "application/vnd.github.v3.sha" },
              method: "GET",
              params: {
                owner: { required: !0, type: "string" },
                ref: { required: !0, type: "string" },
                repo: { required: !0, type: "string" }
              },
              url: "/repos/:owner/:repo/commits/:ref"
            },
            getContents: {
              method: "GET",
              params: {
                owner: { required: !0, type: "string" },
                path: { required: !0, type: "string" },
                ref: { type: "string" },
                repo: { required: !0, type: "string" }
              },
              url: "/repos/:owner/:repo/contents/:path"
            },
            getContributorsStats: {
              method: "GET",
              params: {
                owner: { required: !0, type: "string" },
                repo: { required: !0, type: "string" }
              },
              url: "/repos/:owner/:repo/stats/contributors"
            },
            getDeployKey: {
              method: "GET",
              params: {
                key_id: { required: !0, type: "integer" },
                owner: { required: !0, type: "string" },
                repo: { required: !0, type: "string" }
              },
              url: "/repos/:owner/:repo/keys/:key_id"
            },
            getDeployment: {
              method: "GET",
              params: {
                deployment_id: { required: !0, type: "integer" },
                owner: { required: !0, type: "string" },
                repo: { required: !0, type: "string" }
              },
              url: "/repos/:owner/:repo/deployments/:deployment_id"
            },
            getDeploymentStatus: {
              method: "GET",
              params: {
                deployment_id: { required: !0, type: "integer" },
                owner: { required: !0, type: "string" },
                repo: { required: !0, type: "string" },
                status_id: { required: !0, type: "integer" }
              },
              url:
                "/repos/:owner/:repo/deployments/:deployment_id/statuses/:status_id"
            },
            getDownload: {
              method: "GET",
              params: {
                download_id: { required: !0, type: "integer" },
                owner: { required: !0, type: "string" },
                repo: { required: !0, type: "string" }
              },
              url: "/repos/:owner/:repo/downloads/:download_id"
            },
            getHook: {
              method: "GET",
              params: {
                hook_id: { required: !0, type: "integer" },
                owner: { required: !0, type: "string" },
                repo: { required: !0, type: "string" }
              },
              url: "/repos/:owner/:repo/hooks/:hook_id"
            },
            getLatestPagesBuild: {
              method: "GET",
              params: {
                owner: { required: !0, type: "string" },
                repo: { required: !0, type: "string" }
              },
              url: "/repos/:owner/:repo/pages/builds/latest"
            },
            getLatestRelease: {
              method: "GET",
              params: {
                owner: { required: !0, type: "string" },
                repo: { required: !0, type: "string" }
              },
              url: "/repos/:owner/:repo/releases/latest"
            },
            getPages: {
              method: "GET",
              params: {
                owner: { required: !0, type: "string" },
                repo: { required: !0, type: "string" }
              },
              url: "/repos/:owner/:repo/pages"
            },
            getPagesBuild: {
              method: "GET",
              params: {
                build_id: { required: !0, type: "integer" },
                owner: { required: !0, type: "string" },
                repo: { required: !0, type: "string" }
              },
              url: "/repos/:owner/:repo/pages/builds/:build_id"
            },
            getParticipationStats: {
              method: "GET",
              params: {
                owner: { required: !0, type: "string" },
                repo: { required: !0, type: "string" }
              },
              url: "/repos/:owner/:repo/stats/participation"
            },
            getProtectedBranchAdminEnforcement: {
              method: "GET",
              params: {
                branch: { required: !0, type: "string" },
                owner: { required: !0, type: "string" },
                repo: { required: !0, type: "string" }
              },
              url:
                "/repos/:owner/:repo/branches/:branch/protection/enforce_admins"
            },
            getProtectedBranchPullRequestReviewEnforcement: {
              method: "GET",
              params: {
                branch: { required: !0, type: "string" },
                owner: { required: !0, type: "string" },
                repo: { required: !0, type: "string" }
              },
              url:
                "/repos/:owner/:repo/branches/:branch/protection/required_pull_request_reviews"
            },
            getProtectedBranchRequiredSignatures: {
              headers: { accept: "application/vnd.github.zzzax-preview+json" },
              method: "GET",
              params: {
                branch: { required: !0, type: "string" },
                owner: { required: !0, type: "string" },
                repo: { required: !0, type: "string" }
              },
              url:
                "/repos/:owner/:repo/branches/:branch/protection/required_signatures"
            },
            getProtectedBranchRequiredStatusChecks: {
              method: "GET",
              params: {
                branch: { required: !0, type: "string" },
                owner: { required: !0, type: "string" },
                repo: { required: !0, type: "string" }
              },
              url:
                "/repos/:owner/:repo/branches/:branch/protection/required_status_checks"
            },
            getProtectedBranchRestrictions: {
              method: "GET",
              params: {
                branch: { required: !0, type: "string" },
                owner: { required: !0, type: "string" },
                repo: { required: !0, type: "string" }
              },
              url:
                "/repos/:owner/:repo/branches/:branch/protection/restrictions"
            },
            getPunchCardStats: {
              method: "GET",
              params: {
                owner: { required: !0, type: "string" },
                repo: { required: !0, type: "string" }
              },
              url: "/repos/:owner/:repo/stats/punch_card"
            },
            getReadme: {
              method: "GET",
              params: {
                owner: { required: !0, type: "string" },
                ref: { type: "string" },
                repo: { required: !0, type: "string" }
              },
              url: "/repos/:owner/:repo/readme"
            },
            getRelease: {
              method: "GET",
              params: {
                owner: { required: !0, type: "string" },
                release_id: { required: !0, type: "integer" },
                repo: { required: !0, type: "string" }
              },
              url: "/repos/:owner/:repo/releases/:release_id"
            },
            getReleaseAsset: {
              method: "GET",
              params: {
                asset_id: { required: !0, type: "integer" },
                owner: { required: !0, type: "string" },
                repo: { required: !0, type: "string" }
              },
              url: "/repos/:owner/:repo/releases/assets/:asset_id"
            },
            getReleaseByTag: {
              method: "GET",
              params: {
                owner: { required: !0, type: "string" },
                repo: { required: !0, type: "string" },
                tag: { required: !0, type: "string" }
              },
              url: "/repos/:owner/:repo/releases/tags/:tag"
            },
            getTeamsWithAccessToProtectedBranch: {
              method: "GET",
              params: {
                branch: { required: !0, type: "string" },
                owner: { required: !0, type: "string" },
                repo: { required: !0, type: "string" }
              },
              url:
                "/repos/:owner/:repo/branches/:branch/protection/restrictions/teams"
            },
            getTopPaths: {
              method: "GET",
              params: {
                owner: { required: !0, type: "string" },
                repo: { required: !0, type: "string" }
              },
              url: "/repos/:owner/:repo/traffic/popular/paths"
            },
            getTopReferrers: {
              method: "GET",
              params: {
                owner: { required: !0, type: "string" },
                repo: { required: !0, type: "string" }
              },
              url: "/repos/:owner/:repo/traffic/popular/referrers"
            },
            getUsersWithAccessToProtectedBranch: {
              method: "GET",
              params: {
                branch: { required: !0, type: "string" },
                owner: { required: !0, type: "string" },
                repo: { required: !0, type: "string" }
              },
              url:
                "/repos/:owner/:repo/branches/:branch/protection/restrictions/users"
            },
            getViews: {
              method: "GET",
              params: {
                owner: { required: !0, type: "string" },
                per: { enum: ["day", "week"], type: "string" },
                repo: { required: !0, type: "string" }
              },
              url: "/repos/:owner/:repo/traffic/views"
            },
            list: {
              method: "GET",
              params: {
                affiliation: { type: "string" },
                direction: { enum: ["asc", "desc"], type: "string" },
                page: { type: "integer" },
                per_page: { type: "integer" },
                sort: {
                  enum: ["created", "updated", "pushed", "full_name"],
                  type: "string"
                },
                type: {
                  enum: ["all", "owner", "public", "private", "member"],
                  type: "string"
                },
                visibility: {
                  enum: ["all", "public", "private"],
                  type: "string"
                }
              },
              url: "/user/repos"
            },
            listAppsWithAccessToProtectedBranch: {
              deprecated:
                "octokit.repos.listAppsWithAccessToProtectedBranch() has been renamed to octokit.repos.getAppsWithAccessToProtectedBranch() (2019-09-13)",
              method: "GET",
              params: {
                branch: { required: !0, type: "string" },
                owner: { required: !0, type: "string" },
                repo: { required: !0, type: "string" }
              },
              url:
                "/repos/:owner/:repo/branches/:branch/protection/restrictions/apps"
            },
            listAssetsForRelease: {
              method: "GET",
              params: {
                owner: { required: !0, type: "string" },
                page: { type: "integer" },
                per_page: { type: "integer" },
                release_id: { required: !0, type: "integer" },
                repo: { required: !0, type: "string" }
              },
              url: "/repos/:owner/:repo/releases/:release_id/assets"
            },
            listBranches: {
              method: "GET",
              params: {
                owner: { required: !0, type: "string" },
                page: { type: "integer" },
                per_page: { type: "integer" },
                protected: { type: "boolean" },
                repo: { required: !0, type: "string" }
              },
              url: "/repos/:owner/:repo/branches"
            },
            listBranchesForHeadCommit: {
              headers: { accept: "application/vnd.github.groot-preview+json" },
              method: "GET",
              params: {
                commit_sha: { required: !0, type: "string" },
                owner: { required: !0, type: "string" },
                repo: { required: !0, type: "string" }
              },
              url: "/repos/:owner/:repo/commits/:commit_sha/branches-where-head"
            },
            listCollaborators: {
              method: "GET",
              params: {
                affiliation: {
                  enum: ["outside", "direct", "all"],
                  type: "string"
                },
                owner: { required: !0, type: "string" },
                page: { type: "integer" },
                per_page: { type: "integer" },
                repo: { required: !0, type: "string" }
              },
              url: "/repos/:owner/:repo/collaborators"
            },
            listCommentsForCommit: {
              method: "GET",
              params: {
                commit_sha: { required: !0, type: "string" },
                owner: { required: !0, type: "string" },
                page: { type: "integer" },
                per_page: { type: "integer" },
                ref: { alias: "commit_sha", deprecated: !0, type: "string" },
                repo: { required: !0, type: "string" }
              },
              url: "/repos/:owner/:repo/commits/:commit_sha/comments"
            },
            listCommitComments: {
              method: "GET",
              params: {
                owner: { required: !0, type: "string" },
                page: { type: "integer" },
                per_page: { type: "integer" },
                repo: { required: !0, type: "string" }
              },
              url: "/repos/:owner/:repo/comments"
            },
            listCommits: {
              method: "GET",
              params: {
                author: { type: "string" },
                owner: { required: !0, type: "string" },
                page: { type: "integer" },
                path: { type: "string" },
                per_page: { type: "integer" },
                repo: { required: !0, type: "string" },
                sha: { type: "string" },
                since: { type: "string" },
                until: { type: "string" }
              },
              url: "/repos/:owner/:repo/commits"
            },
            listContributors: {
              method: "GET",
              params: {
                anon: { type: "string" },
                owner: { required: !0, type: "string" },
                page: { type: "integer" },
                per_page: { type: "integer" },
                repo: { required: !0, type: "string" }
              },
              url: "/repos/:owner/:repo/contributors"
            },
            listDeployKeys: {
              method: "GET",
              params: {
                owner: { required: !0, type: "string" },
                page: { type: "integer" },
                per_page: { type: "integer" },
                repo: { required: !0, type: "string" }
              },
              url: "/repos/:owner/:repo/keys"
            },
            listDeploymentStatuses: {
              method: "GET",
              params: {
                deployment_id: { required: !0, type: "integer" },
                owner: { required: !0, type: "string" },
                page: { type: "integer" },
                per_page: { type: "integer" },
                repo: { required: !0, type: "string" }
              },
              url: "/repos/:owner/:repo/deployments/:deployment_id/statuses"
            },
            listDeployments: {
              method: "GET",
              params: {
                environment: { type: "string" },
                owner: { required: !0, type: "string" },
                page: { type: "integer" },
                per_page: { type: "integer" },
                ref: { type: "string" },
                repo: { required: !0, type: "string" },
                sha: { type: "string" },
                task: { type: "string" }
              },
              url: "/repos/:owner/:repo/deployments"
            },
            listDownloads: {
              method: "GET",
              params: {
                owner: { required: !0, type: "string" },
                page: { type: "integer" },
                per_page: { type: "integer" },
                repo: { required: !0, type: "string" }
              },
              url: "/repos/:owner/:repo/downloads"
            },
            listForOrg: {
              method: "GET",
              params: {
                direction: { enum: ["asc", "desc"], type: "string" },
                org: { required: !0, type: "string" },
                page: { type: "integer" },
                per_page: { type: "integer" },
                sort: {
                  enum: ["created", "updated", "pushed", "full_name"],
                  type: "string"
                },
                type: {
                  enum: [
                    "all",
                    "public",
                    "private",
                    "forks",
                    "sources",
                    "member",
                    "internal"
                  ],
                  type: "string"
                }
              },
              url: "/orgs/:org/repos"
            },
            listForUser: {
              method: "GET",
              params: {
                direction: { enum: ["asc", "desc"], type: "string" },
                page: { type: "integer" },
                per_page: { type: "integer" },
                sort: {
                  enum: ["created", "updated", "pushed", "full_name"],
                  type: "string"
                },
                type: { enum: ["all", "owner", "member"], type: "string" },
                username: { required: !0, type: "string" }
              },
              url: "/users/:username/repos"
            },
            listForks: {
              method: "GET",
              params: {
                owner: { required: !0, type: "string" },
                page: { type: "integer" },
                per_page: { type: "integer" },
                repo: { required: !0, type: "string" },
                sort: {
                  enum: ["newest", "oldest", "stargazers"],
                  type: "string"
                }
              },
              url: "/repos/:owner/:repo/forks"
            },
            listHooks: {
              method: "GET",
              params: {
                owner: { required: !0, type: "string" },
                page: { type: "integer" },
                per_page: { type: "integer" },
                repo: { required: !0, type: "string" }
              },
              url: "/repos/:owner/:repo/hooks"
            },
            listInvitations: {
              method: "GET",
              params: {
                owner: { required: !0, type: "string" },
                page: { type: "integer" },
                per_page: { type: "integer" },
                repo: { required: !0, type: "string" }
              },
              url: "/repos/:owner/:repo/invitations"
            },
            listInvitationsForAuthenticatedUser: {
              method: "GET",
              params: {
                page: { type: "integer" },
                per_page: { type: "integer" }
              },
              url: "/user/repository_invitations"
            },
            listLanguages: {
              method: "GET",
              params: {
                owner: { required: !0, type: "string" },
                repo: { required: !0, type: "string" }
              },
              url: "/repos/:owner/:repo/languages"
            },
            listPagesBuilds: {
              method: "GET",
              params: {
                owner: { required: !0, type: "string" },
                page: { type: "integer" },
                per_page: { type: "integer" },
                repo: { required: !0, type: "string" }
              },
              url: "/repos/:owner/:repo/pages/builds"
            },
            listProtectedBranchRequiredStatusChecksContexts: {
              method: "GET",
              params: {
                branch: { required: !0, type: "string" },
                owner: { required: !0, type: "string" },
                repo: { required: !0, type: "string" }
              },
              url:
                "/repos/:owner/:repo/branches/:branch/protection/required_status_checks/contexts"
            },
            listProtectedBranchTeamRestrictions: {
              deprecated:
                "octokit.repos.listProtectedBranchTeamRestrictions() has been renamed to octokit.repos.getTeamsWithAccessToProtectedBranch() (2019-09-09)",
              method: "GET",
              params: {
                branch: { required: !0, type: "string" },
                owner: { required: !0, type: "string" },
                repo: { required: !0, type: "string" }
              },
              url:
                "/repos/:owner/:repo/branches/:branch/protection/restrictions/teams"
            },
            listProtectedBranchUserRestrictions: {
              deprecated:
                "octokit.repos.listProtectedBranchUserRestrictions() has been renamed to octokit.repos.getUsersWithAccessToProtectedBranch() (2019-09-09)",
              method: "GET",
              params: {
                branch: { required: !0, type: "string" },
                owner: { required: !0, type: "string" },
                repo: { required: !0, type: "string" }
              },
              url:
                "/repos/:owner/:repo/branches/:branch/protection/restrictions/users"
            },
            listPublic: {
              method: "GET",
              params: {
                page: { type: "integer" },
                per_page: { type: "integer" },
                since: { type: "integer" }
              },
              url: "/repositories"
            },
            listPullRequestsAssociatedWithCommit: {
              headers: { accept: "application/vnd.github.groot-preview+json" },
              method: "GET",
              params: {
                commit_sha: { required: !0, type: "string" },
                owner: { required: !0, type: "string" },
                page: { type: "integer" },
                per_page: { type: "integer" },
                repo: { required: !0, type: "string" }
              },
              url: "/repos/:owner/:repo/commits/:commit_sha/pulls"
            },
            listReleases: {
              method: "GET",
              params: {
                owner: { required: !0, type: "string" },
                page: { type: "integer" },
                per_page: { type: "integer" },
                repo: { required: !0, type: "string" }
              },
              url: "/repos/:owner/:repo/releases"
            },
            listStatusesForRef: {
              method: "GET",
              params: {
                owner: { required: !0, type: "string" },
                page: { type: "integer" },
                per_page: { type: "integer" },
                ref: { required: !0, type: "string" },
                repo: { required: !0, type: "string" }
              },
              url: "/repos/:owner/:repo/commits/:ref/statuses"
            },
            listTags: {
              method: "GET",
              params: {
                owner: { required: !0, type: "string" },
                page: { type: "integer" },
                per_page: { type: "integer" },
                repo: { required: !0, type: "string" }
              },
              url: "/repos/:owner/:repo/tags"
            },
            listTeams: {
              method: "GET",
              params: {
                owner: { required: !0, type: "string" },
                page: { type: "integer" },
                per_page: { type: "integer" },
                repo: { required: !0, type: "string" }
              },
              url: "/repos/:owner/:repo/teams"
            },
            listTeamsWithAccessToProtectedBranch: {
              deprecated:
                "octokit.repos.listTeamsWithAccessToProtectedBranch() has been renamed to octokit.repos.getTeamsWithAccessToProtectedBranch() (2019-09-13)",
              method: "GET",
              params: {
                branch: { required: !0, type: "string" },
                owner: { required: !0, type: "string" },
                repo: { required: !0, type: "string" }
              },
              url:
                "/repos/:owner/:repo/branches/:branch/protection/restrictions/teams"
            },
            listTopics: {
              headers: { accept: "application/vnd.github.mercy-preview+json" },
              method: "GET",
              params: {
                owner: { required: !0, type: "string" },
                repo: { required: !0, type: "string" }
              },
              url: "/repos/:owner/:repo/topics"
            },
            listUsersWithAccessToProtectedBranch: {
              deprecated:
                "octokit.repos.listUsersWithAccessToProtectedBranch() has been renamed to octokit.repos.getUsersWithAccessToProtectedBranch() (2019-09-13)",
              method: "GET",
              params: {
                branch: { required: !0, type: "string" },
                owner: { required: !0, type: "string" },
                repo: { required: !0, type: "string" }
              },
              url:
                "/repos/:owner/:repo/branches/:branch/protection/restrictions/users"
            },
            merge: {
              method: "POST",
              params: {
                base: { required: !0, type: "string" },
                commit_message: { type: "string" },
                head: { required: !0, type: "string" },
                owner: { required: !0, type: "string" },
                repo: { required: !0, type: "string" }
              },
              url: "/repos/:owner/:repo/merges"
            },
            pingHook: {
              method: "POST",
              params: {
                hook_id: { required: !0, type: "integer" },
                owner: { required: !0, type: "string" },
                repo: { required: !0, type: "string" }
              },
              url: "/repos/:owner/:repo/hooks/:hook_id/pings"
            },
            removeBranchProtection: {
              method: "DELETE",
              params: {
                branch: { required: !0, type: "string" },
                owner: { required: !0, type: "string" },
                repo: { required: !0, type: "string" }
              },
              url: "/repos/:owner/:repo/branches/:branch/protection"
            },
            removeCollaborator: {
              method: "DELETE",
              params: {
                owner: { required: !0, type: "string" },
                repo: { required: !0, type: "string" },
                username: { required: !0, type: "string" }
              },
              url: "/repos/:owner/:repo/collaborators/:username"
            },
            removeDeployKey: {
              method: "DELETE",
              params: {
                key_id: { required: !0, type: "integer" },
                owner: { required: !0, type: "string" },
                repo: { required: !0, type: "string" }
              },
              url: "/repos/:owner/:repo/keys/:key_id"
            },
            removeProtectedBranchAdminEnforcement: {
              method: "DELETE",
              params: {
                branch: { required: !0, type: "string" },
                owner: { required: !0, type: "string" },
                repo: { required: !0, type: "string" }
              },
              url:
                "/repos/:owner/:repo/branches/:branch/protection/enforce_admins"
            },
            removeProtectedBranchAppRestrictions: {
              method: "DELETE",
              params: {
                apps: { mapTo: "data", required: !0, type: "string[]" },
                branch: { required: !0, type: "string" },
                owner: { required: !0, type: "string" },
                repo: { required: !0, type: "string" }
              },
              url:
                "/repos/:owner/:repo/branches/:branch/protection/restrictions/apps"
            },
            removeProtectedBranchPullRequestReviewEnforcement: {
              method: "DELETE",
              params: {
                branch: { required: !0, type: "string" },
                owner: { required: !0, type: "string" },
                repo: { required: !0, type: "string" }
              },
              url:
                "/repos/:owner/:repo/branches/:branch/protection/required_pull_request_reviews"
            },
            removeProtectedBranchRequiredSignatures: {
              headers: { accept: "application/vnd.github.zzzax-preview+json" },
              method: "DELETE",
              params: {
                branch: { required: !0, type: "string" },
                owner: { required: !0, type: "string" },
                repo: { required: !0, type: "string" }
              },
              url:
                "/repos/:owner/:repo/branches/:branch/protection/required_signatures"
            },
            removeProtectedBranchRequiredStatusChecks: {
              method: "DELETE",
              params: {
                branch: { required: !0, type: "string" },
                owner: { required: !0, type: "string" },
                repo: { required: !0, type: "string" }
              },
              url:
                "/repos/:owner/:repo/branches/:branch/protection/required_status_checks"
            },
            removeProtectedBranchRequiredStatusChecksContexts: {
              method: "DELETE",
              params: {
                branch: { required: !0, type: "string" },
                contexts: { mapTo: "data", required: !0, type: "string[]" },
                owner: { required: !0, type: "string" },
                repo: { required: !0, type: "string" }
              },
              url:
                "/repos/:owner/:repo/branches/:branch/protection/required_status_checks/contexts"
            },
            removeProtectedBranchRestrictions: {
              method: "DELETE",
              params: {
                branch: { required: !0, type: "string" },
                owner: { required: !0, type: "string" },
                repo: { required: !0, type: "string" }
              },
              url:
                "/repos/:owner/:repo/branches/:branch/protection/restrictions"
            },
            removeProtectedBranchTeamRestrictions: {
              method: "DELETE",
              params: {
                branch: { required: !0, type: "string" },
                owner: { required: !0, type: "string" },
                repo: { required: !0, type: "string" },
                teams: { mapTo: "data", required: !0, type: "string[]" }
              },
              url:
                "/repos/:owner/:repo/branches/:branch/protection/restrictions/teams"
            },
            removeProtectedBranchUserRestrictions: {
              method: "DELETE",
              params: {
                branch: { required: !0, type: "string" },
                owner: { required: !0, type: "string" },
                repo: { required: !0, type: "string" },
                users: { mapTo: "data", required: !0, type: "string[]" }
              },
              url:
                "/repos/:owner/:repo/branches/:branch/protection/restrictions/users"
            },
            replaceProtectedBranchAppRestrictions: {
              method: "PUT",
              params: {
                apps: { mapTo: "data", required: !0, type: "string[]" },
                branch: { required: !0, type: "string" },
                owner: { required: !0, type: "string" },
                repo: { required: !0, type: "string" }
              },
              url:
                "/repos/:owner/:repo/branches/:branch/protection/restrictions/apps"
            },
            replaceProtectedBranchRequiredStatusChecksContexts: {
              method: "PUT",
              params: {
                branch: { required: !0, type: "string" },
                contexts: { mapTo: "data", required: !0, type: "string[]" },
                owner: { required: !0, type: "string" },
                repo: { required: !0, type: "string" }
              },
              url:
                "/repos/:owner/:repo/branches/:branch/protection/required_status_checks/contexts"
            },
            replaceProtectedBranchTeamRestrictions: {
              method: "PUT",
              params: {
                branch: { required: !0, type: "string" },
                owner: { required: !0, type: "string" },
                repo: { required: !0, type: "string" },
                teams: { mapTo: "data", required: !0, type: "string[]" }
              },
              url:
                "/repos/:owner/:repo/branches/:branch/protection/restrictions/teams"
            },
            replaceProtectedBranchUserRestrictions: {
              method: "PUT",
              params: {
                branch: { required: !0, type: "string" },
                owner: { required: !0, type: "string" },
                repo: { required: !0, type: "string" },
                users: { mapTo: "data", required: !0, type: "string[]" }
              },
              url:
                "/repos/:owner/:repo/branches/:branch/protection/restrictions/users"
            },
            replaceTopics: {
              headers: { accept: "application/vnd.github.mercy-preview+json" },
              method: "PUT",
              params: {
                names: { required: !0, type: "string[]" },
                owner: { required: !0, type: "string" },
                repo: { required: !0, type: "string" }
              },
              url: "/repos/:owner/:repo/topics"
            },
            requestPageBuild: {
              method: "POST",
              params: {
                owner: { required: !0, type: "string" },
                repo: { required: !0, type: "string" }
              },
              url: "/repos/:owner/:repo/pages/builds"
            },
            retrieveCommunityProfileMetrics: {
              method: "GET",
              params: {
                owner: { required: !0, type: "string" },
                repo: { required: !0, type: "string" }
              },
              url: "/repos/:owner/:repo/community/profile"
            },
            testPushHook: {
              method: "POST",
              params: {
                hook_id: { required: !0, type: "integer" },
                owner: { required: !0, type: "string" },
                repo: { required: !0, type: "string" }
              },
              url: "/repos/:owner/:repo/hooks/:hook_id/tests"
            },
            transfer: {
              method: "POST",
              params: {
                new_owner: { type: "string" },
                owner: { required: !0, type: "string" },
                repo: { required: !0, type: "string" },
                team_ids: { type: "integer[]" }
              },
              url: "/repos/:owner/:repo/transfer"
            },
            update: {
              method: "PATCH",
              params: {
                allow_merge_commit: { type: "boolean" },
                allow_rebase_merge: { type: "boolean" },
                allow_squash_merge: { type: "boolean" },
                archived: { type: "boolean" },
                default_branch: { type: "string" },
                delete_branch_on_merge: { type: "boolean" },
                description: { type: "string" },
                has_issues: { type: "boolean" },
                has_projects: { type: "boolean" },
                has_wiki: { type: "boolean" },
                homepage: { type: "string" },
                is_template: { type: "boolean" },
                name: { type: "string" },
                owner: { required: !0, type: "string" },
                private: { type: "boolean" },
                repo: { required: !0, type: "string" },
                visibility: {
                  enum: ["public", "private", "visibility", "internal"],
                  type: "string"
                }
              },
              url: "/repos/:owner/:repo"
            },
            updateBranchProtection: {
              method: "PUT",
              params: {
                allow_deletions: { type: "boolean" },
                allow_force_pushes: { allowNull: !0, type: "boolean" },
                branch: { required: !0, type: "string" },
                enforce_admins: {
                  allowNull: !0,
                  required: !0,
                  type: "boolean"
                },
                owner: { required: !0, type: "string" },
                repo: { required: !0, type: "string" },
                required_linear_history: { type: "boolean" },
                required_pull_request_reviews: {
                  allowNull: !0,
                  required: !0,
                  type: "object"
                },
                "required_pull_request_reviews.dismiss_stale_reviews": {
                  type: "boolean"
                },
                "required_pull_request_reviews.dismissal_restrictions": {
                  type: "object"
                },
                "required_pull_request_reviews.dismissal_restrictions.teams": {
                  type: "string[]"
                },
                "required_pull_request_reviews.dismissal_restrictions.users": {
                  type: "string[]"
                },
                "required_pull_request_reviews.require_code_owner_reviews": {
                  type: "boolean"
                },
                "required_pull_request_reviews.required_approving_review_count": {
                  type: "integer"
                },
                required_status_checks: {
                  allowNull: !0,
                  required: !0,
                  type: "object"
                },
                "required_status_checks.contexts": {
                  required: !0,
                  type: "string[]"
                },
                "required_status_checks.strict": {
                  required: !0,
                  type: "boolean"
                },
                restrictions: { allowNull: !0, required: !0, type: "object" },
                "restrictions.apps": { type: "string[]" },
                "restrictions.teams": { required: !0, type: "string[]" },
                "restrictions.users": { required: !0, type: "string[]" }
              },
              url: "/repos/:owner/:repo/branches/:branch/protection"
            },
            updateCommitComment: {
              method: "PATCH",
              params: {
                body: { required: !0, type: "string" },
                comment_id: { required: !0, type: "integer" },
                owner: { required: !0, type: "string" },
                repo: { required: !0, type: "string" }
              },
              url: "/repos/:owner/:repo/comments/:comment_id"
            },
            updateFile: {
              deprecated:
                "octokit.repos.updateFile() has been renamed to octokit.repos.createOrUpdateFile() (2019-06-07)",
              method: "PUT",
              params: {
                author: { type: "object" },
                "author.email": { required: !0, type: "string" },
                "author.name": { required: !0, type: "string" },
                branch: { type: "string" },
                committer: { type: "object" },
                "committer.email": { required: !0, type: "string" },
                "committer.name": { required: !0, type: "string" },
                content: { required: !0, type: "string" },
                message: { required: !0, type: "string" },
                owner: { required: !0, type: "string" },
                path: { required: !0, type: "string" },
                repo: { required: !0, type: "string" },
                sha: { type: "string" }
              },
              url: "/repos/:owner/:repo/contents/:path"
            },
            updateHook: {
              method: "PATCH",
              params: {
                active: { type: "boolean" },
                add_events: { type: "string[]" },
                config: { type: "object" },
                "config.content_type": { type: "string" },
                "config.insecure_ssl": { type: "string" },
                "config.secret": { type: "string" },
                "config.url": { required: !0, type: "string" },
                events: { type: "string[]" },
                hook_id: { required: !0, type: "integer" },
                owner: { required: !0, type: "string" },
                remove_events: { type: "string[]" },
                repo: { required: !0, type: "string" }
              },
              url: "/repos/:owner/:repo/hooks/:hook_id"
            },
            updateInformationAboutPagesSite: {
              method: "PUT",
              params: {
                cname: { type: "string" },
                owner: { required: !0, type: "string" },
                repo: { required: !0, type: "string" },
                source: {
                  enum: ['"gh-pages"', '"master"', '"master /docs"'],
                  type: "string"
                }
              },
              url: "/repos/:owner/:repo/pages"
            },
            updateInvitation: {
              method: "PATCH",
              params: {
                invitation_id: { required: !0, type: "integer" },
                owner: { required: !0, type: "string" },
                permissions: {
                  enum: ["read", "write", "admin"],
                  type: "string"
                },
                repo: { required: !0, type: "string" }
              },
              url: "/repos/:owner/:repo/invitations/:invitation_id"
            },
            updateProtectedBranchPullRequestReviewEnforcement: {
              method: "PATCH",
              params: {
                branch: { required: !0, type: "string" },
                dismiss_stale_reviews: { type: "boolean" },
                dismissal_restrictions: { type: "object" },
                "dismissal_restrictions.teams": { type: "string[]" },
                "dismissal_restrictions.users": { type: "string[]" },
                owner: { required: !0, type: "string" },
                repo: { required: !0, type: "string" },
                require_code_owner_reviews: { type: "boolean" },
                required_approving_review_count: { type: "integer" }
              },
              url:
                "/repos/:owner/:repo/branches/:branch/protection/required_pull_request_reviews"
            },
            updateProtectedBranchRequiredStatusChecks: {
              method: "PATCH",
              params: {
                branch: { required: !0, type: "string" },
                contexts: { type: "string[]" },
                owner: { required: !0, type: "string" },
                repo: { required: !0, type: "string" },
                strict: { type: "boolean" }
              },
              url:
                "/repos/:owner/:repo/branches/:branch/protection/required_status_checks"
            },
            updateRelease: {
              method: "PATCH",
              params: {
                body: { type: "string" },
                draft: { type: "boolean" },
                name: { type: "string" },
                owner: { required: !0, type: "string" },
                prerelease: { type: "boolean" },
                release_id: { required: !0, type: "integer" },
                repo: { required: !0, type: "string" },
                tag_name: { type: "string" },
                target_commitish: { type: "string" }
              },
              url: "/repos/:owner/:repo/releases/:release_id"
            },
            updateReleaseAsset: {
              method: "PATCH",
              params: {
                asset_id: { required: !0, type: "integer" },
                label: { type: "string" },
                name: { type: "string" },
                owner: { required: !0, type: "string" },
                repo: { required: !0, type: "string" }
              },
              url: "/repos/:owner/:repo/releases/assets/:asset_id"
            },
            uploadReleaseAsset: {
              method: "POST",
              params: {
                data: { mapTo: "data", required: !0, type: "string | object" },
                file: {
                  alias: "data",
                  deprecated: !0,
                  type: "string | object"
                },
                headers: { required: !0, type: "object" },
                "headers.content-length": { required: !0, type: "integer" },
                "headers.content-type": { required: !0, type: "string" },
                label: { type: "string" },
                name: { required: !0, type: "string" },
                url: { required: !0, type: "string" }
              },
              url: ":url"
            }
          },
          search: {
            code: {
              method: "GET",
              params: {
                order: { enum: ["desc", "asc"], type: "string" },
                page: { type: "integer" },
                per_page: { type: "integer" },
                q: { required: !0, type: "string" },
                sort: { enum: ["indexed"], type: "string" }
              },
              url: "/search/code"
            },
            commits: {
              headers: { accept: "application/vnd.github.cloak-preview+json" },
              method: "GET",
              params: {
                order: { enum: ["desc", "asc"], type: "string" },
                page: { type: "integer" },
                per_page: { type: "integer" },
                q: { required: !0, type: "string" },
                sort: {
                  enum: ["author-date", "committer-date"],
                  type: "string"
                }
              },
              url: "/search/commits"
            },
            issues: {
              deprecated:
                "octokit.search.issues() has been renamed to octokit.search.issuesAndPullRequests() (2018-12-27)",
              method: "GET",
              params: {
                order: { enum: ["desc", "asc"], type: "string" },
                page: { type: "integer" },
                per_page: { type: "integer" },
                q: { required: !0, type: "string" },
                sort: {
                  enum: [
                    "comments",
                    "reactions",
                    "reactions-+1",
                    "reactions--1",
                    "reactions-smile",
                    "reactions-thinking_face",
                    "reactions-heart",
                    "reactions-tada",
                    "interactions",
                    "created",
                    "updated"
                  ],
                  type: "string"
                }
              },
              url: "/search/issues"
            },
            issuesAndPullRequests: {
              method: "GET",
              params: {
                order: { enum: ["desc", "asc"], type: "string" },
                page: { type: "integer" },
                per_page: { type: "integer" },
                q: { required: !0, type: "string" },
                sort: {
                  enum: [
                    "comments",
                    "reactions",
                    "reactions-+1",
                    "reactions--1",
                    "reactions-smile",
                    "reactions-thinking_face",
                    "reactions-heart",
                    "reactions-tada",
                    "interactions",
                    "created",
                    "updated"
                  ],
                  type: "string"
                }
              },
              url: "/search/issues"
            },
            labels: {
              method: "GET",
              params: {
                order: { enum: ["desc", "asc"], type: "string" },
                q: { required: !0, type: "string" },
                repository_id: { required: !0, type: "integer" },
                sort: { enum: ["created", "updated"], type: "string" }
              },
              url: "/search/labels"
            },
            repos: {
              method: "GET",
              params: {
                order: { enum: ["desc", "asc"], type: "string" },
                page: { type: "integer" },
                per_page: { type: "integer" },
                q: { required: !0, type: "string" },
                sort: {
                  enum: ["stars", "forks", "help-wanted-issues", "updated"],
                  type: "string"
                }
              },
              url: "/search/repositories"
            },
            topics: {
              method: "GET",
              params: { q: { required: !0, type: "string" } },
              url: "/search/topics"
            },
            users: {
              method: "GET",
              params: {
                order: { enum: ["desc", "asc"], type: "string" },
                page: { type: "integer" },
                per_page: { type: "integer" },
                q: { required: !0, type: "string" },
                sort: {
                  enum: ["followers", "repositories", "joined"],
                  type: "string"
                }
              },
              url: "/search/users"
            }
          },
          teams: {
            addMember: {
              deprecated:
                "octokit.teams.addMember() has been renamed to octokit.teams.addMemberLegacy() (2020-01-16)",
              method: "PUT",
              params: {
                team_id: { required: !0, type: "integer" },
                username: { required: !0, type: "string" }
              },
              url: "/teams/:team_id/members/:username"
            },
            addMemberLegacy: {
              deprecated:
                "octokit.teams.addMemberLegacy() is deprecated, see https://developer.github.com/v3/teams/members/#add-team-member-legacy",
              method: "PUT",
              params: {
                team_id: { required: !0, type: "integer" },
                username: { required: !0, type: "string" }
              },
              url: "/teams/:team_id/members/:username"
            },
            addOrUpdateMembership: {
              deprecated:
                "octokit.teams.addOrUpdateMembership() has been renamed to octokit.teams.addOrUpdateMembershipLegacy() (2020-01-16)",
              method: "PUT",
              params: {
                role: { enum: ["member", "maintainer"], type: "string" },
                team_id: { required: !0, type: "integer" },
                username: { required: !0, type: "string" }
              },
              url: "/teams/:team_id/memberships/:username"
            },
            addOrUpdateMembershipInOrg: {
              method: "PUT",
              params: {
                org: { required: !0, type: "string" },
                role: { enum: ["member", "maintainer"], type: "string" },
                team_slug: { required: !0, type: "string" },
                username: { required: !0, type: "string" }
              },
              url: "/orgs/:org/teams/:team_slug/memberships/:username"
            },
            addOrUpdateMembershipLegacy: {
              deprecated:
                "octokit.teams.addOrUpdateMembershipLegacy() is deprecated, see https://developer.github.com/v3/teams/members/#add-or-update-team-membership-legacy",
              method: "PUT",
              params: {
                role: { enum: ["member", "maintainer"], type: "string" },
                team_id: { required: !0, type: "integer" },
                username: { required: !0, type: "string" }
              },
              url: "/teams/:team_id/memberships/:username"
            },
            addOrUpdateProject: {
              deprecated:
                "octokit.teams.addOrUpdateProject() has been renamed to octokit.teams.addOrUpdateProjectLegacy() (2020-01-16)",
              headers: {
                accept: "application/vnd.github.inertia-preview+json"
              },
              method: "PUT",
              params: {
                permission: {
                  enum: ["read", "write", "admin"],
                  type: "string"
                },
                project_id: { required: !0, type: "integer" },
                team_id: { required: !0, type: "integer" }
              },
              url: "/teams/:team_id/projects/:project_id"
            },
            addOrUpdateProjectInOrg: {
              headers: {
                accept: "application/vnd.github.inertia-preview+json"
              },
              method: "PUT",
              params: {
                org: { required: !0, type: "string" },
                permission: {
                  enum: ["read", "write", "admin"],
                  type: "string"
                },
                project_id: { required: !0, type: "integer" },
                team_slug: { required: !0, type: "string" }
              },
              url: "/orgs/:org/teams/:team_slug/projects/:project_id"
            },
            addOrUpdateProjectLegacy: {
              deprecated:
                "octokit.teams.addOrUpdateProjectLegacy() is deprecated, see https://developer.github.com/v3/teams/#add-or-update-team-project-legacy",
              headers: {
                accept: "application/vnd.github.inertia-preview+json"
              },
              method: "PUT",
              params: {
                permission: {
                  enum: ["read", "write", "admin"],
                  type: "string"
                },
                project_id: { required: !0, type: "integer" },
                team_id: { required: !0, type: "integer" }
              },
              url: "/teams/:team_id/projects/:project_id"
            },
            addOrUpdateRepo: {
              deprecated:
                "octokit.teams.addOrUpdateRepo() has been renamed to octokit.teams.addOrUpdateRepoLegacy() (2020-01-16)",
              method: "PUT",
              params: {
                owner: { required: !0, type: "string" },
                permission: { enum: ["pull", "push", "admin"], type: "string" },
                repo: { required: !0, type: "string" },
                team_id: { required: !0, type: "integer" }
              },
              url: "/teams/:team_id/repos/:owner/:repo"
            },
            addOrUpdateRepoInOrg: {
              method: "PUT",
              params: {
                org: { required: !0, type: "string" },
                owner: { required: !0, type: "string" },
                permission: { enum: ["pull", "push", "admin"], type: "string" },
                repo: { required: !0, type: "string" },
                team_slug: { required: !0, type: "string" }
              },
              url: "/orgs/:org/teams/:team_slug/repos/:owner/:repo"
            },
            addOrUpdateRepoLegacy: {
              deprecated:
                "octokit.teams.addOrUpdateRepoLegacy() is deprecated, see https://developer.github.com/v3/teams/#add-or-update-team-repository-legacy",
              method: "PUT",
              params: {
                owner: { required: !0, type: "string" },
                permission: { enum: ["pull", "push", "admin"], type: "string" },
                repo: { required: !0, type: "string" },
                team_id: { required: !0, type: "integer" }
              },
              url: "/teams/:team_id/repos/:owner/:repo"
            },
            checkManagesRepo: {
              deprecated:
                "octokit.teams.checkManagesRepo() has been renamed to octokit.teams.checkManagesRepoLegacy() (2020-01-16)",
              method: "GET",
              params: {
                owner: { required: !0, type: "string" },
                repo: { required: !0, type: "string" },
                team_id: { required: !0, type: "integer" }
              },
              url: "/teams/:team_id/repos/:owner/:repo"
            },
            checkManagesRepoInOrg: {
              method: "GET",
              params: {
                org: { required: !0, type: "string" },
                owner: { required: !0, type: "string" },
                repo: { required: !0, type: "string" },
                team_slug: { required: !0, type: "string" }
              },
              url: "/orgs/:org/teams/:team_slug/repos/:owner/:repo"
            },
            checkManagesRepoLegacy: {
              deprecated:
                "octokit.teams.checkManagesRepoLegacy() is deprecated, see https://developer.github.com/v3/teams/#check-if-a-team-manages-a-repository-legacy",
              method: "GET",
              params: {
                owner: { required: !0, type: "string" },
                repo: { required: !0, type: "string" },
                team_id: { required: !0, type: "integer" }
              },
              url: "/teams/:team_id/repos/:owner/:repo"
            },
            create: {
              method: "POST",
              params: {
                description: { type: "string" },
                maintainers: { type: "string[]" },
                name: { required: !0, type: "string" },
                org: { required: !0, type: "string" },
                parent_team_id: { type: "integer" },
                permission: { enum: ["pull", "push", "admin"], type: "string" },
                privacy: { enum: ["secret", "closed"], type: "string" },
                repo_names: { type: "string[]" }
              },
              url: "/orgs/:org/teams"
            },
            createDiscussion: {
              deprecated:
                "octokit.teams.createDiscussion() has been renamed to octokit.teams.createDiscussionLegacy() (2020-01-16)",
              method: "POST",
              params: {
                body: { required: !0, type: "string" },
                private: { type: "boolean" },
                team_id: { required: !0, type: "integer" },
                title: { required: !0, type: "string" }
              },
              url: "/teams/:team_id/discussions"
            },
            createDiscussionComment: {
              deprecated:
                "octokit.teams.createDiscussionComment() has been renamed to octokit.teams.createDiscussionCommentLegacy() (2020-01-16)",
              method: "POST",
              params: {
                body: { required: !0, type: "string" },
                discussion_number: { required: !0, type: "integer" },
                team_id: { required: !0, type: "integer" }
              },
              url: "/teams/:team_id/discussions/:discussion_number/comments"
            },
            createDiscussionCommentInOrg: {
              method: "POST",
              params: {
                body: { required: !0, type: "string" },
                discussion_number: { required: !0, type: "integer" },
                org: { required: !0, type: "string" },
                team_slug: { required: !0, type: "string" }
              },
              url:
                "/orgs/:org/teams/:team_slug/discussions/:discussion_number/comments"
            },
            createDiscussionCommentLegacy: {
              deprecated:
                "octokit.teams.createDiscussionCommentLegacy() is deprecated, see https://developer.github.com/v3/teams/discussion_comments/#create-a-comment-legacy",
              method: "POST",
              params: {
                body: { required: !0, type: "string" },
                discussion_number: { required: !0, type: "integer" },
                team_id: { required: !0, type: "integer" }
              },
              url: "/teams/:team_id/discussions/:discussion_number/comments"
            },
            createDiscussionInOrg: {
              method: "POST",
              params: {
                body: { required: !0, type: "string" },
                org: { required: !0, type: "string" },
                private: { type: "boolean" },
                team_slug: { required: !0, type: "string" },
                title: { required: !0, type: "string" }
              },
              url: "/orgs/:org/teams/:team_slug/discussions"
            },
            createDiscussionLegacy: {
              deprecated:
                "octokit.teams.createDiscussionLegacy() is deprecated, see https://developer.github.com/v3/teams/discussions/#create-a-discussion-legacy",
              method: "POST",
              params: {
                body: { required: !0, type: "string" },
                private: { type: "boolean" },
                team_id: { required: !0, type: "integer" },
                title: { required: !0, type: "string" }
              },
              url: "/teams/:team_id/discussions"
            },
            delete: {
              deprecated:
                "octokit.teams.delete() has been renamed to octokit.teams.deleteLegacy() (2020-01-16)",
              method: "DELETE",
              params: { team_id: { required: !0, type: "integer" } },
              url: "/teams/:team_id"
            },
            deleteDiscussion: {
              deprecated:
                "octokit.teams.deleteDiscussion() has been renamed to octokit.teams.deleteDiscussionLegacy() (2020-01-16)",
              method: "DELETE",
              params: {
                discussion_number: { required: !0, type: "integer" },
                team_id: { required: !0, type: "integer" }
              },
              url: "/teams/:team_id/discussions/:discussion_number"
            },
            deleteDiscussionComment: {
              deprecated:
                "octokit.teams.deleteDiscussionComment() has been renamed to octokit.teams.deleteDiscussionCommentLegacy() (2020-01-16)",
              method: "DELETE",
              params: {
                comment_number: { required: !0, type: "integer" },
                discussion_number: { required: !0, type: "integer" },
                team_id: { required: !0, type: "integer" }
              },
              url:
                "/teams/:team_id/discussions/:discussion_number/comments/:comment_number"
            },
            deleteDiscussionCommentInOrg: {
              method: "DELETE",
              params: {
                comment_number: { required: !0, type: "integer" },
                discussion_number: { required: !0, type: "integer" },
                org: { required: !0, type: "string" },
                team_slug: { required: !0, type: "string" }
              },
              url:
                "/orgs/:org/teams/:team_slug/discussions/:discussion_number/comments/:comment_number"
            },
            deleteDiscussionCommentLegacy: {
              deprecated:
                "octokit.teams.deleteDiscussionCommentLegacy() is deprecated, see https://developer.github.com/v3/teams/discussion_comments/#delete-a-comment-legacy",
              method: "DELETE",
              params: {
                comment_number: { required: !0, type: "integer" },
                discussion_number: { required: !0, type: "integer" },
                team_id: { required: !0, type: "integer" }
              },
              url:
                "/teams/:team_id/discussions/:discussion_number/comments/:comment_number"
            },
            deleteDiscussionInOrg: {
              method: "DELETE",
              params: {
                discussion_number: { required: !0, type: "integer" },
                org: { required: !0, type: "string" },
                team_slug: { required: !0, type: "string" }
              },
              url: "/orgs/:org/teams/:team_slug/discussions/:discussion_number"
            },
            deleteDiscussionLegacy: {
              deprecated:
                "octokit.teams.deleteDiscussionLegacy() is deprecated, see https://developer.github.com/v3/teams/discussions/#delete-a-discussion-legacy",
              method: "DELETE",
              params: {
                discussion_number: { required: !0, type: "integer" },
                team_id: { required: !0, type: "integer" }
              },
              url: "/teams/:team_id/discussions/:discussion_number"
            },
            deleteInOrg: {
              method: "DELETE",
              params: {
                org: { required: !0, type: "string" },
                team_slug: { required: !0, type: "string" }
              },
              url: "/orgs/:org/teams/:team_slug"
            },
            deleteLegacy: {
              deprecated:
                "octokit.teams.deleteLegacy() is deprecated, see https://developer.github.com/v3/teams/#delete-team-legacy",
              method: "DELETE",
              params: { team_id: { required: !0, type: "integer" } },
              url: "/teams/:team_id"
            },
            get: {
              deprecated:
                "octokit.teams.get() has been renamed to octokit.teams.getLegacy() (2020-01-16)",
              method: "GET",
              params: { team_id: { required: !0, type: "integer" } },
              url: "/teams/:team_id"
            },
            getByName: {
              method: "GET",
              params: {
                org: { required: !0, type: "string" },
                team_slug: { required: !0, type: "string" }
              },
              url: "/orgs/:org/teams/:team_slug"
            },
            getDiscussion: {
              deprecated:
                "octokit.teams.getDiscussion() has been renamed to octokit.teams.getDiscussionLegacy() (2020-01-16)",
              method: "GET",
              params: {
                discussion_number: { required: !0, type: "integer" },
                team_id: { required: !0, type: "integer" }
              },
              url: "/teams/:team_id/discussions/:discussion_number"
            },
            getDiscussionComment: {
              deprecated:
                "octokit.teams.getDiscussionComment() has been renamed to octokit.teams.getDiscussionCommentLegacy() (2020-01-16)",
              method: "GET",
              params: {
                comment_number: { required: !0, type: "integer" },
                discussion_number: { required: !0, type: "integer" },
                team_id: { required: !0, type: "integer" }
              },
              url:
                "/teams/:team_id/discussions/:discussion_number/comments/:comment_number"
            },
            getDiscussionCommentInOrg: {
              method: "GET",
              params: {
                comment_number: { required: !0, type: "integer" },
                discussion_number: { required: !0, type: "integer" },
                org: { required: !0, type: "string" },
                team_slug: { required: !0, type: "string" }
              },
              url:
                "/orgs/:org/teams/:team_slug/discussions/:discussion_number/comments/:comment_number"
            },
            getDiscussionCommentLegacy: {
              deprecated:
                "octokit.teams.getDiscussionCommentLegacy() is deprecated, see https://developer.github.com/v3/teams/discussion_comments/#get-a-single-comment-legacy",
              method: "GET",
              params: {
                comment_number: { required: !0, type: "integer" },
                discussion_number: { required: !0, type: "integer" },
                team_id: { required: !0, type: "integer" }
              },
              url:
                "/teams/:team_id/discussions/:discussion_number/comments/:comment_number"
            },
            getDiscussionInOrg: {
              method: "GET",
              params: {
                discussion_number: { required: !0, type: "integer" },
                org: { required: !0, type: "string" },
                team_slug: { required: !0, type: "string" }
              },
              url: "/orgs/:org/teams/:team_slug/discussions/:discussion_number"
            },
            getDiscussionLegacy: {
              deprecated:
                "octokit.teams.getDiscussionLegacy() is deprecated, see https://developer.github.com/v3/teams/discussions/#get-a-single-discussion-legacy",
              method: "GET",
              params: {
                discussion_number: { required: !0, type: "integer" },
                team_id: { required: !0, type: "integer" }
              },
              url: "/teams/:team_id/discussions/:discussion_number"
            },
            getLegacy: {
              deprecated:
                "octokit.teams.getLegacy() is deprecated, see https://developer.github.com/v3/teams/#get-team-legacy",
              method: "GET",
              params: { team_id: { required: !0, type: "integer" } },
              url: "/teams/:team_id"
            },
            getMember: {
              deprecated:
                "octokit.teams.getMember() has been renamed to octokit.teams.getMemberLegacy() (2020-01-16)",
              method: "GET",
              params: {
                team_id: { required: !0, type: "integer" },
                username: { required: !0, type: "string" }
              },
              url: "/teams/:team_id/members/:username"
            },
            getMemberLegacy: {
              deprecated:
                "octokit.teams.getMemberLegacy() is deprecated, see https://developer.github.com/v3/teams/members/#get-team-member-legacy",
              method: "GET",
              params: {
                team_id: { required: !0, type: "integer" },
                username: { required: !0, type: "string" }
              },
              url: "/teams/:team_id/members/:username"
            },
            getMembership: {
              deprecated:
                "octokit.teams.getMembership() has been renamed to octokit.teams.getMembershipLegacy() (2020-01-16)",
              method: "GET",
              params: {
                team_id: { required: !0, type: "integer" },
                username: { required: !0, type: "string" }
              },
              url: "/teams/:team_id/memberships/:username"
            },
            getMembershipInOrg: {
              method: "GET",
              params: {
                org: { required: !0, type: "string" },
                team_slug: { required: !0, type: "string" },
                username: { required: !0, type: "string" }
              },
              url: "/orgs/:org/teams/:team_slug/memberships/:username"
            },
            getMembershipLegacy: {
              deprecated:
                "octokit.teams.getMembershipLegacy() is deprecated, see https://developer.github.com/v3/teams/members/#get-team-membership-legacy",
              method: "GET",
              params: {
                team_id: { required: !0, type: "integer" },
                username: { required: !0, type: "string" }
              },
              url: "/teams/:team_id/memberships/:username"
            },
            list: {
              method: "GET",
              params: {
                org: { required: !0, type: "string" },
                page: { type: "integer" },
                per_page: { type: "integer" }
              },
              url: "/orgs/:org/teams"
            },
            listChild: {
              deprecated:
                "octokit.teams.listChild() has been renamed to octokit.teams.listChildLegacy() (2020-01-16)",
              method: "GET",
              params: {
                page: { type: "integer" },
                per_page: { type: "integer" },
                team_id: { required: !0, type: "integer" }
              },
              url: "/teams/:team_id/teams"
            },
            listChildInOrg: {
              method: "GET",
              params: {
                org: { required: !0, type: "string" },
                page: { type: "integer" },
                per_page: { type: "integer" },
                team_slug: { required: !0, type: "string" }
              },
              url: "/orgs/:org/teams/:team_slug/teams"
            },
            listChildLegacy: {
              deprecated:
                "octokit.teams.listChildLegacy() is deprecated, see https://developer.github.com/v3/teams/#list-child-teams-legacy",
              method: "GET",
              params: {
                page: { type: "integer" },
                per_page: { type: "integer" },
                team_id: { required: !0, type: "integer" }
              },
              url: "/teams/:team_id/teams"
            },
            listDiscussionComments: {
              deprecated:
                "octokit.teams.listDiscussionComments() has been renamed to octokit.teams.listDiscussionCommentsLegacy() (2020-01-16)",
              method: "GET",
              params: {
                direction: { enum: ["asc", "desc"], type: "string" },
                discussion_number: { required: !0, type: "integer" },
                page: { type: "integer" },
                per_page: { type: "integer" },
                team_id: { required: !0, type: "integer" }
              },
              url: "/teams/:team_id/discussions/:discussion_number/comments"
            },
            listDiscussionCommentsInOrg: {
              method: "GET",
              params: {
                direction: { enum: ["asc", "desc"], type: "string" },
                discussion_number: { required: !0, type: "integer" },
                org: { required: !0, type: "string" },
                page: { type: "integer" },
                per_page: { type: "integer" },
                team_slug: { required: !0, type: "string" }
              },
              url:
                "/orgs/:org/teams/:team_slug/discussions/:discussion_number/comments"
            },
            listDiscussionCommentsLegacy: {
              deprecated:
                "octokit.teams.listDiscussionCommentsLegacy() is deprecated, see https://developer.github.com/v3/teams/discussion_comments/#list-comments-legacy",
              method: "GET",
              params: {
                direction: { enum: ["asc", "desc"], type: "string" },
                discussion_number: { required: !0, type: "integer" },
                page: { type: "integer" },
                per_page: { type: "integer" },
                team_id: { required: !0, type: "integer" }
              },
              url: "/teams/:team_id/discussions/:discussion_number/comments"
            },
            listDiscussions: {
              deprecated:
                "octokit.teams.listDiscussions() has been renamed to octokit.teams.listDiscussionsLegacy() (2020-01-16)",
              method: "GET",
              params: {
                direction: { enum: ["asc", "desc"], type: "string" },
                page: { type: "integer" },
                per_page: { type: "integer" },
                team_id: { required: !0, type: "integer" }
              },
              url: "/teams/:team_id/discussions"
            },
            listDiscussionsInOrg: {
              method: "GET",
              params: {
                direction: { enum: ["asc", "desc"], type: "string" },
                org: { required: !0, type: "string" },
                page: { type: "integer" },
                per_page: { type: "integer" },
                team_slug: { required: !0, type: "string" }
              },
              url: "/orgs/:org/teams/:team_slug/discussions"
            },
            listDiscussionsLegacy: {
              deprecated:
                "octokit.teams.listDiscussionsLegacy() is deprecated, see https://developer.github.com/v3/teams/discussions/#list-discussions-legacy",
              method: "GET",
              params: {
                direction: { enum: ["asc", "desc"], type: "string" },
                page: { type: "integer" },
                per_page: { type: "integer" },
                team_id: { required: !0, type: "integer" }
              },
              url: "/teams/:team_id/discussions"
            },
            listForAuthenticatedUser: {
              method: "GET",
              params: {
                page: { type: "integer" },
                per_page: { type: "integer" }
              },
              url: "/user/teams"
            },
            listMembers: {
              deprecated:
                "octokit.teams.listMembers() has been renamed to octokit.teams.listMembersLegacy() (2020-01-16)",
              method: "GET",
              params: {
                page: { type: "integer" },
                per_page: { type: "integer" },
                role: { enum: ["member", "maintainer", "all"], type: "string" },
                team_id: { required: !0, type: "integer" }
              },
              url: "/teams/:team_id/members"
            },
            listMembersInOrg: {
              method: "GET",
              params: {
                org: { required: !0, type: "string" },
                page: { type: "integer" },
                per_page: { type: "integer" },
                role: { enum: ["member", "maintainer", "all"], type: "string" },
                team_slug: { required: !0, type: "string" }
              },
              url: "/orgs/:org/teams/:team_slug/members"
            },
            listMembersLegacy: {
              deprecated:
                "octokit.teams.listMembersLegacy() is deprecated, see https://developer.github.com/v3/teams/members/#list-team-members-legacy",
              method: "GET",
              params: {
                page: { type: "integer" },
                per_page: { type: "integer" },
                role: { enum: ["member", "maintainer", "all"], type: "string" },
                team_id: { required: !0, type: "integer" }
              },
              url: "/teams/:team_id/members"
            },
            listPendingInvitations: {
              deprecated:
                "octokit.teams.listPendingInvitations() has been renamed to octokit.teams.listPendingInvitationsLegacy() (2020-01-16)",
              method: "GET",
              params: {
                page: { type: "integer" },
                per_page: { type: "integer" },
                team_id: { required: !0, type: "integer" }
              },
              url: "/teams/:team_id/invitations"
            },
            listPendingInvitationsInOrg: {
              method: "GET",
              params: {
                org: { required: !0, type: "string" },
                page: { type: "integer" },
                per_page: { type: "integer" },
                team_slug: { required: !0, type: "string" }
              },
              url: "/orgs/:org/teams/:team_slug/invitations"
            },
            listPendingInvitationsLegacy: {
              deprecated:
                "octokit.teams.listPendingInvitationsLegacy() is deprecated, see https://developer.github.com/v3/teams/members/#list-pending-team-invitations-legacy",
              method: "GET",
              params: {
                page: { type: "integer" },
                per_page: { type: "integer" },
                team_id: { required: !0, type: "integer" }
              },
              url: "/teams/:team_id/invitations"
            },
            listProjects: {
              deprecated:
                "octokit.teams.listProjects() has been renamed to octokit.teams.listProjectsLegacy() (2020-01-16)",
              headers: {
                accept: "application/vnd.github.inertia-preview+json"
              },
              method: "GET",
              params: {
                page: { type: "integer" },
                per_page: { type: "integer" },
                team_id: { required: !0, type: "integer" }
              },
              url: "/teams/:team_id/projects"
            },
            listProjectsInOrg: {
              headers: {
                accept: "application/vnd.github.inertia-preview+json"
              },
              method: "GET",
              params: {
                org: { required: !0, type: "string" },
                page: { type: "integer" },
                per_page: { type: "integer" },
                team_slug: { required: !0, type: "string" }
              },
              url: "/orgs/:org/teams/:team_slug/projects"
            },
            listProjectsLegacy: {
              deprecated:
                "octokit.teams.listProjectsLegacy() is deprecated, see https://developer.github.com/v3/teams/#list-team-projects-legacy",
              headers: {
                accept: "application/vnd.github.inertia-preview+json"
              },
              method: "GET",
              params: {
                page: { type: "integer" },
                per_page: { type: "integer" },
                team_id: { required: !0, type: "integer" }
              },
              url: "/teams/:team_id/projects"
            },
            listRepos: {
              deprecated:
                "octokit.teams.listRepos() has been renamed to octokit.teams.listReposLegacy() (2020-01-16)",
              method: "GET",
              params: {
                page: { type: "integer" },
                per_page: { type: "integer" },
                team_id: { required: !0, type: "integer" }
              },
              url: "/teams/:team_id/repos"
            },
            listReposInOrg: {
              method: "GET",
              params: {
                org: { required: !0, type: "string" },
                page: { type: "integer" },
                per_page: { type: "integer" },
                team_slug: { required: !0, type: "string" }
              },
              url: "/orgs/:org/teams/:team_slug/repos"
            },
            listReposLegacy: {
              deprecated:
                "octokit.teams.listReposLegacy() is deprecated, see https://developer.github.com/v3/teams/#list-team-repos-legacy",
              method: "GET",
              params: {
                page: { type: "integer" },
                per_page: { type: "integer" },
                team_id: { required: !0, type: "integer" }
              },
              url: "/teams/:team_id/repos"
            },
            removeMember: {
              deprecated:
                "octokit.teams.removeMember() has been renamed to octokit.teams.removeMemberLegacy() (2020-01-16)",
              method: "DELETE",
              params: {
                team_id: { required: !0, type: "integer" },
                username: { required: !0, type: "string" }
              },
              url: "/teams/:team_id/members/:username"
            },
            removeMemberLegacy: {
              deprecated:
                "octokit.teams.removeMemberLegacy() is deprecated, see https://developer.github.com/v3/teams/members/#remove-team-member-legacy",
              method: "DELETE",
              params: {
                team_id: { required: !0, type: "integer" },
                username: { required: !0, type: "string" }
              },
              url: "/teams/:team_id/members/:username"
            },
            removeMembership: {
              deprecated:
                "octokit.teams.removeMembership() has been renamed to octokit.teams.removeMembershipLegacy() (2020-01-16)",
              method: "DELETE",
              params: {
                team_id: { required: !0, type: "integer" },
                username: { required: !0, type: "string" }
              },
              url: "/teams/:team_id/memberships/:username"
            },
            removeMembershipInOrg: {
              method: "DELETE",
              params: {
                org: { required: !0, type: "string" },
                team_slug: { required: !0, type: "string" },
                username: { required: !0, type: "string" }
              },
              url: "/orgs/:org/teams/:team_slug/memberships/:username"
            },
            removeMembershipLegacy: {
              deprecated:
                "octokit.teams.removeMembershipLegacy() is deprecated, see https://developer.github.com/v3/teams/members/#remove-team-membership-legacy",
              method: "DELETE",
              params: {
                team_id: { required: !0, type: "integer" },
                username: { required: !0, type: "string" }
              },
              url: "/teams/:team_id/memberships/:username"
            },
            removeProject: {
              deprecated:
                "octokit.teams.removeProject() has been renamed to octokit.teams.removeProjectLegacy() (2020-01-16)",
              method: "DELETE",
              params: {
                project_id: { required: !0, type: "integer" },
                team_id: { required: !0, type: "integer" }
              },
              url: "/teams/:team_id/projects/:project_id"
            },
            removeProjectInOrg: {
              method: "DELETE",
              params: {
                org: { required: !0, type: "string" },
                project_id: { required: !0, type: "integer" },
                team_slug: { required: !0, type: "string" }
              },
              url: "/orgs/:org/teams/:team_slug/projects/:project_id"
            },
            removeProjectLegacy: {
              deprecated:
                "octokit.teams.removeProjectLegacy() is deprecated, see https://developer.github.com/v3/teams/#remove-team-project-legacy",
              method: "DELETE",
              params: {
                project_id: { required: !0, type: "integer" },
                team_id: { required: !0, type: "integer" }
              },
              url: "/teams/:team_id/projects/:project_id"
            },
            removeRepo: {
              deprecated:
                "octokit.teams.removeRepo() has been renamed to octokit.teams.removeRepoLegacy() (2020-01-16)",
              method: "DELETE",
              params: {
                owner: { required: !0, type: "string" },
                repo: { required: !0, type: "string" },
                team_id: { required: !0, type: "integer" }
              },
              url: "/teams/:team_id/repos/:owner/:repo"
            },
            removeRepoInOrg: {
              method: "DELETE",
              params: {
                org: { required: !0, type: "string" },
                owner: { required: !0, type: "string" },
                repo: { required: !0, type: "string" },
                team_slug: { required: !0, type: "string" }
              },
              url: "/orgs/:org/teams/:team_slug/repos/:owner/:repo"
            },
            removeRepoLegacy: {
              deprecated:
                "octokit.teams.removeRepoLegacy() is deprecated, see https://developer.github.com/v3/teams/#remove-team-repository-legacy",
              method: "DELETE",
              params: {
                owner: { required: !0, type: "string" },
                repo: { required: !0, type: "string" },
                team_id: { required: !0, type: "integer" }
              },
              url: "/teams/:team_id/repos/:owner/:repo"
            },
            reviewProject: {
              deprecated:
                "octokit.teams.reviewProject() has been renamed to octokit.teams.reviewProjectLegacy() (2020-01-16)",
              headers: {
                accept: "application/vnd.github.inertia-preview+json"
              },
              method: "GET",
              params: {
                project_id: { required: !0, type: "integer" },
                team_id: { required: !0, type: "integer" }
              },
              url: "/teams/:team_id/projects/:project_id"
            },
            reviewProjectInOrg: {
              headers: {
                accept: "application/vnd.github.inertia-preview+json"
              },
              method: "GET",
              params: {
                org: { required: !0, type: "string" },
                project_id: { required: !0, type: "integer" },
                team_slug: { required: !0, type: "string" }
              },
              url: "/orgs/:org/teams/:team_slug/projects/:project_id"
            },
            reviewProjectLegacy: {
              deprecated:
                "octokit.teams.reviewProjectLegacy() is deprecated, see https://developer.github.com/v3/teams/#review-a-team-project-legacy",
              headers: {
                accept: "application/vnd.github.inertia-preview+json"
              },
              method: "GET",
              params: {
                project_id: { required: !0, type: "integer" },
                team_id: { required: !0, type: "integer" }
              },
              url: "/teams/:team_id/projects/:project_id"
            },
            update: {
              deprecated:
                "octokit.teams.update() has been renamed to octokit.teams.updateLegacy() (2020-01-16)",
              method: "PATCH",
              params: {
                description: { type: "string" },
                name: { required: !0, type: "string" },
                parent_team_id: { type: "integer" },
                permission: { enum: ["pull", "push", "admin"], type: "string" },
                privacy: { enum: ["secret", "closed"], type: "string" },
                team_id: { required: !0, type: "integer" }
              },
              url: "/teams/:team_id"
            },
            updateDiscussion: {
              deprecated:
                "octokit.teams.updateDiscussion() has been renamed to octokit.teams.updateDiscussionLegacy() (2020-01-16)",
              method: "PATCH",
              params: {
                body: { type: "string" },
                discussion_number: { required: !0, type: "integer" },
                team_id: { required: !0, type: "integer" },
                title: { type: "string" }
              },
              url: "/teams/:team_id/discussions/:discussion_number"
            },
            updateDiscussionComment: {
              deprecated:
                "octokit.teams.updateDiscussionComment() has been renamed to octokit.teams.updateDiscussionCommentLegacy() (2020-01-16)",
              method: "PATCH",
              params: {
                body: { required: !0, type: "string" },
                comment_number: { required: !0, type: "integer" },
                discussion_number: { required: !0, type: "integer" },
                team_id: { required: !0, type: "integer" }
              },
              url:
                "/teams/:team_id/discussions/:discussion_number/comments/:comment_number"
            },
            updateDiscussionCommentInOrg: {
              method: "PATCH",
              params: {
                body: { required: !0, type: "string" },
                comment_number: { required: !0, type: "integer" },
                discussion_number: { required: !0, type: "integer" },
                org: { required: !0, type: "string" },
                team_slug: { required: !0, type: "string" }
              },
              url:
                "/orgs/:org/teams/:team_slug/discussions/:discussion_number/comments/:comment_number"
            },
            updateDiscussionCommentLegacy: {
              deprecated:
                "octokit.teams.updateDiscussionCommentLegacy() is deprecated, see https://developer.github.com/v3/teams/discussion_comments/#edit-a-comment-legacy",
              method: "PATCH",
              params: {
                body: { required: !0, type: "string" },
                comment_number: { required: !0, type: "integer" },
                discussion_number: { required: !0, type: "integer" },
                team_id: { required: !0, type: "integer" }
              },
              url:
                "/teams/:team_id/discussions/:discussion_number/comments/:comment_number"
            },
            updateDiscussionInOrg: {
              method: "PATCH",
              params: {
                body: { type: "string" },
                discussion_number: { required: !0, type: "integer" },
                org: { required: !0, type: "string" },
                team_slug: { required: !0, type: "string" },
                title: { type: "string" }
              },
              url: "/orgs/:org/teams/:team_slug/discussions/:discussion_number"
            },
            updateDiscussionLegacy: {
              deprecated:
                "octokit.teams.updateDiscussionLegacy() is deprecated, see https://developer.github.com/v3/teams/discussions/#edit-a-discussion-legacy",
              method: "PATCH",
              params: {
                body: { type: "string" },
                discussion_number: { required: !0, type: "integer" },
                team_id: { required: !0, type: "integer" },
                title: { type: "string" }
              },
              url: "/teams/:team_id/discussions/:discussion_number"
            },
            updateInOrg: {
              method: "PATCH",
              params: {
                description: { type: "string" },
                name: { required: !0, type: "string" },
                org: { required: !0, type: "string" },
                parent_team_id: { type: "integer" },
                permission: { enum: ["pull", "push", "admin"], type: "string" },
                privacy: { enum: ["secret", "closed"], type: "string" },
                team_slug: { required: !0, type: "string" }
              },
              url: "/orgs/:org/teams/:team_slug"
            },
            updateLegacy: {
              deprecated:
                "octokit.teams.updateLegacy() is deprecated, see https://developer.github.com/v3/teams/#edit-team-legacy",
              method: "PATCH",
              params: {
                description: { type: "string" },
                name: { required: !0, type: "string" },
                parent_team_id: { type: "integer" },
                permission: { enum: ["pull", "push", "admin"], type: "string" },
                privacy: { enum: ["secret", "closed"], type: "string" },
                team_id: { required: !0, type: "integer" }
              },
              url: "/teams/:team_id"
            }
          },
          users: {
            addEmails: {
              method: "POST",
              params: { emails: { required: !0, type: "string[]" } },
              url: "/user/emails"
            },
            block: {
              method: "PUT",
              params: { username: { required: !0, type: "string" } },
              url: "/user/blocks/:username"
            },
            checkBlocked: {
              method: "GET",
              params: { username: { required: !0, type: "string" } },
              url: "/user/blocks/:username"
            },
            checkFollowing: {
              method: "GET",
              params: { username: { required: !0, type: "string" } },
              url: "/user/following/:username"
            },
            checkFollowingForUser: {
              method: "GET",
              params: {
                target_user: { required: !0, type: "string" },
                username: { required: !0, type: "string" }
              },
              url: "/users/:username/following/:target_user"
            },
            createGpgKey: {
              method: "POST",
              params: { armored_public_key: { type: "string" } },
              url: "/user/gpg_keys"
            },
            createPublicKey: {
              method: "POST",
              params: { key: { type: "string" }, title: { type: "string" } },
              url: "/user/keys"
            },
            deleteEmails: {
              method: "DELETE",
              params: { emails: { required: !0, type: "string[]" } },
              url: "/user/emails"
            },
            deleteGpgKey: {
              method: "DELETE",
              params: { gpg_key_id: { required: !0, type: "integer" } },
              url: "/user/gpg_keys/:gpg_key_id"
            },
            deletePublicKey: {
              method: "DELETE",
              params: { key_id: { required: !0, type: "integer" } },
              url: "/user/keys/:key_id"
            },
            follow: {
              method: "PUT",
              params: { username: { required: !0, type: "string" } },
              url: "/user/following/:username"
            },
            getAuthenticated: { method: "GET", params: {}, url: "/user" },
            getByUsername: {
              method: "GET",
              params: { username: { required: !0, type: "string" } },
              url: "/users/:username"
            },
            getContextForUser: {
              method: "GET",
              params: {
                subject_id: { type: "string" },
                subject_type: {
                  enum: ["organization", "repository", "issue", "pull_request"],
                  type: "string"
                },
                username: { required: !0, type: "string" }
              },
              url: "/users/:username/hovercard"
            },
            getGpgKey: {
              method: "GET",
              params: { gpg_key_id: { required: !0, type: "integer" } },
              url: "/user/gpg_keys/:gpg_key_id"
            },
            getPublicKey: {
              method: "GET",
              params: { key_id: { required: !0, type: "integer" } },
              url: "/user/keys/:key_id"
            },
            list: {
              method: "GET",
              params: {
                page: { type: "integer" },
                per_page: { type: "integer" },
                since: { type: "string" }
              },
              url: "/users"
            },
            listBlocked: { method: "GET", params: {}, url: "/user/blocks" },
            listEmails: {
              method: "GET",
              params: {
                page: { type: "integer" },
                per_page: { type: "integer" }
              },
              url: "/user/emails"
            },
            listFollowersForAuthenticatedUser: {
              method: "GET",
              params: {
                page: { type: "integer" },
                per_page: { type: "integer" }
              },
              url: "/user/followers"
            },
            listFollowersForUser: {
              method: "GET",
              params: {
                page: { type: "integer" },
                per_page: { type: "integer" },
                username: { required: !0, type: "string" }
              },
              url: "/users/:username/followers"
            },
            listFollowingForAuthenticatedUser: {
              method: "GET",
              params: {
                page: { type: "integer" },
                per_page: { type: "integer" }
              },
              url: "/user/following"
            },
            listFollowingForUser: {
              method: "GET",
              params: {
                page: { type: "integer" },
                per_page: { type: "integer" },
                username: { required: !0, type: "string" }
              },
              url: "/users/:username/following"
            },
            listGpgKeys: {
              method: "GET",
              params: {
                page: { type: "integer" },
                per_page: { type: "integer" }
              },
              url: "/user/gpg_keys"
            },
            listGpgKeysForUser: {
              method: "GET",
              params: {
                page: { type: "integer" },
                per_page: { type: "integer" },
                username: { required: !0, type: "string" }
              },
              url: "/users/:username/gpg_keys"
            },
            listPublicEmails: {
              method: "GET",
              params: {
                page: { type: "integer" },
                per_page: { type: "integer" }
              },
              url: "/user/public_emails"
            },
            listPublicKeys: {
              method: "GET",
              params: {
                page: { type: "integer" },
                per_page: { type: "integer" }
              },
              url: "/user/keys"
            },
            listPublicKeysForUser: {
              method: "GET",
              params: {
                page: { type: "integer" },
                per_page: { type: "integer" },
                username: { required: !0, type: "string" }
              },
              url: "/users/:username/keys"
            },
            togglePrimaryEmailVisibility: {
              method: "PATCH",
              params: {
                email: { required: !0, type: "string" },
                visibility: { required: !0, type: "string" }
              },
              url: "/user/email/visibility"
            },
            unblock: {
              method: "DELETE",
              params: { username: { required: !0, type: "string" } },
              url: "/user/blocks/:username"
            },
            unfollow: {
              method: "DELETE",
              params: { username: { required: !0, type: "string" } },
              url: "/user/following/:username"
            },
            updateAuthenticated: {
              method: "PATCH",
              params: {
                bio: { type: "string" },
                blog: { type: "string" },
                company: { type: "string" },
                email: { type: "string" },
                hireable: { type: "boolean" },
                location: { type: "string" },
                name: { type: "string" }
              },
              url: "/user"
            }
          }
        };
      function s(e, t) {
        Object.keys(t).forEach(r => {
          e[r] || (e[r] = {}),
            Object.keys(t[r]).forEach(i => {
              const s = t[r][i],
                a = ["method", "url", "headers"].reduce(
                  (e, t) => (void 0 !== s[t] && (e[t] = s[t]), e),
                  {}
                );
              a.request = { validate: s.params };
              let p = e.request.defaults(a);
              if (
                Object.keys(s.params || {}).find(e => s.params[e].deprecated)
              ) {
                const t = o.bind(null, e, s);
                (p = t(e.request.defaults(a), `.${r}.${i}()`)),
                  (p.endpoint = t(p.endpoint, `.${r}.${i}.endpoint()`)),
                  (p.endpoint.merge = t(
                    p.endpoint.merge,
                    `.${r}.${i}.endpoint.merge()`
                  ));
              }
              s.deprecated
                ? (e[r][i] = Object.assign(function() {
                    return (
                      e.log.warn(
                        new n.Deprecation("[@octokit/rest] " + s.deprecated)
                      ),
                      (e[r][i] = p),
                      p.apply(null, arguments)
                    );
                  }, p))
                : (e[r][i] = p);
            });
        });
      }
      function o(e, t, r, i) {
        const s = s => (
          (s = Object.assign({}, s)),
          Object.keys(s).forEach(r => {
            if (t.params[r] && t.params[r].deprecated) {
              const o = t.params[r].alias;
              e.log.warn(
                new n.Deprecation(
                  `[@octokit/rest] "${r}" parameter is deprecated for "${i}". Use "${o}" instead`
                )
              ),
                o in s || (s[o] = s[r]),
                delete s[r];
            }
          }),
          r(s)
        );
        return (
          Object.keys(r).forEach(e => {
            s[e] = r[e];
          }),
          s
        );
      }
      function a(e) {
        return (
          (e.registerEndpoints = s.bind(null, e)),
          s(e, i),
          [
            ["gitdata", "git"],
            ["authorization", "oauthAuthorizations"],
            ["pullRequests", "pulls"]
          ].forEach(([t, r]) => {
            Object.defineProperty(e, t, {
              get: () => (
                e.log.warn(
                  new n.Deprecation(
                    `[@octokit/plugin-rest-endpoint-methods] "octokit.${t}.*" methods are deprecated, use "octokit.${r}.*" instead`
                  )
                ),
                e[r]
              )
            });
          }),
          {}
        );
      }
      a.VERSION = "2.4.0";
    },
    function(e, t, r) {
      const n = r(25);
      e.exports = n();
    },
    function(e, t, r) {
      e.exports = function(e, t) {
        t = t || {};
        const r = new i.Collection(),
          o = Object.assign(
            {
              debug: () => {},
              info: () => {},
              warn: console.warn,
              error: console.error
            },
            t && t.log
          ),
          a = { hook: r, log: o, request: n.defaults(s(t, o, r)) };
        return e.forEach(e => e(a, t)), a;
      };
      const { request: n } = r(103),
        i = r(60),
        s = r(64);
    },
    function(e, t) {
      e.exports = function e(t, r) {
        if (t && r) return e(t)(r);
        if ("function" != typeof t)
          throw new TypeError("need wrapper function");
        return (
          Object.keys(t).forEach(function(e) {
            n[e] = t[e];
          }),
          n
        );
        function n() {
          for (var e = new Array(arguments.length), r = 0; r < e.length; r++)
            e[r] = arguments[r];
          var n = t.apply(this, e),
            i = e[e.length - 1];
          return (
            "function" == typeof n &&
              n !== i &&
              Object.keys(i).forEach(function(e) {
                n[e] = i[e];
              }),
            n
          );
        }
      };
    },
    function(e, t, r) {
      var n = r(61),
        i = r(62),
        s = r(63),
        o = Function.bind,
        a = o.bind(o);
      function p(e, t, r) {
        var n = a(s, null).apply(null, r ? [t, r] : [t]);
        (e.api = { remove: n }),
          (e.remove = n),
          ["before", "error", "after", "wrap"].forEach(function(n) {
            var s = r ? [t, n, r] : [t, n];
            e[n] = e.api[n] = a(i, null).apply(null, s);
          });
      }
      function u() {
        var e = { registry: {} },
          t = n.bind(null, e);
        return p(t, e), t;
      }
      var c = !1;
      function d() {
        return (
          c ||
            (console.warn(
              '[before-after-hook]: "Hook()" repurposing warning, use "Hook.Collection()". Read more: https://git.io/upgrade-before-after-hook-to-1.4'
            ),
            (c = !0)),
          u()
        );
      }
      (d.Singular = function() {
        var e = { registry: {} },
          t = n.bind(null, e, "h");
        return p(t, e, "h"), t;
      }.bind()),
        (d.Collection = u.bind()),
        (e.exports = d),
        (e.exports.Hook = d),
        (e.exports.Singular = d.Singular),
        (e.exports.Collection = d.Collection);
    },
    function(e, t) {
      e.exports = function e(t, r, n, i) {
        if ("function" != typeof n)
          throw new Error("method for before hook must be a function");
        i || (i = {});
        if (Array.isArray(r))
          return r.reverse().reduce(function(r, n) {
            return e.bind(null, t, n, r, i);
          }, n)();
        return Promise.resolve().then(function() {
          return t.registry[r]
            ? t.registry[r].reduce(function(e, t) {
                return t.hook.bind(null, e, i);
              }, n)()
            : n(i);
        });
      };
    },
    function(e, t) {
      e.exports = function(e, t, r, n) {
        var i = n;
        e.registry[r] || (e.registry[r] = []);
        "before" === t &&
          (n = function(e, t) {
            return Promise.resolve()
              .then(i.bind(null, t))
              .then(e.bind(null, t));
          });
        "after" === t &&
          (n = function(e, t) {
            var r;
            return Promise.resolve()
              .then(e.bind(null, t))
              .then(function(e) {
                return i((r = e), t);
              })
              .then(function() {
                return r;
              });
          });
        "error" === t &&
          (n = function(e, t) {
            return Promise.resolve()
              .then(e.bind(null, t))
              .catch(function(e) {
                return i(e, t);
              });
          });
        e.registry[r].push({ hook: n, orig: i });
      };
    },
    function(e, t) {
      e.exports = function(e, t, r) {
        if (!e.registry[t]) return;
        var n = e.registry[t]
          .map(function(e) {
            return e.orig;
          })
          .indexOf(r);
        if (-1 === n) return;
        e.registry[t].splice(n, 1);
      };
    },
    function(e, t, r) {
      e.exports = function(e, t, r) {
        e.headers &&
          (e.headers = Object.keys(e.headers).reduce(
            (t, r) => ((t[r.toLowerCase()] = e.headers[r]), t),
            {}
          ));
        const s = {
          headers: e.headers || {},
          request: e.request || {},
          mediaType: { previews: [], format: "" }
        };
        e.baseUrl && (s.baseUrl = e.baseUrl);
        e.userAgent && (s.headers["user-agent"] = e.userAgent);
        e.previews && (s.mediaType.previews = e.previews);
        e.timeZone && (s.headers["time-zone"] = e.timeZone);
        e.timeout &&
          (a(
            t,
            new n(
              "[@octokit/rest] new Octokit({timeout}) is deprecated. Use {request: {timeout}} instead. See https://github.com/octokit/request.js#request"
            )
          ),
          (s.request.timeout = e.timeout));
        e.agent &&
          (p(
            t,
            new n(
              "[@octokit/rest] new Octokit({agent}) is deprecated. Use {request: {agent}} instead. See https://github.com/octokit/request.js#request"
            )
          ),
          (s.request.agent = e.agent));
        e.headers &&
          u(
            t,
            new n(
              "[@octokit/rest] new Octokit({headers}) is deprecated. Use {userAgent, previews} instead. See https://github.com/octokit/request.js#request"
            )
          );
        const c = s.headers["user-agent"],
          d = `octokit.js/${o.version} ${i()}`;
        return (
          (s.headers["user-agent"] = [c, d].filter(Boolean).join(" ")),
          (s.request.hook = r.bind(null, "request")),
          s
        );
      };
      const { Deprecation: n } = r(4),
        { getUserAgent: i } = r(65),
        s = r(8),
        o = r(66),
        a = s((e, t) => e.warn(t)),
        p = s((e, t) => e.warn(t)),
        u = s((e, t) => e.warn(t));
    },
    function(e, t, r) {
      "use strict";
      function n() {
        try {
          return navigator.userAgent;
        } catch (e) {
          return "<environment unknown>";
        }
      }
      r.r(t),
        r.d(t, "getUserAgent", function() {
          return n;
        });
    },
    function(e) {
      e.exports = JSON.parse(
        '{"name":"@octokit/rest","version":"16.43.1","publishConfig":{"access":"public"},"description":"GitHub REST API client for Node.js","keywords":["octokit","github","rest","api-client"],"author":"Gregor Martynus (https://github.com/gr2m)","contributors":[{"name":"Mike de Boer","email":"info@mikedeboer.nl"},{"name":"Fabian Jakobs","email":"fabian@c9.io"},{"name":"Joe Gallo","email":"joe@brassafrax.com"},{"name":"Gregor Martynus","url":"https://github.com/gr2m"}],"repository":"https://github.com/octokit/rest.js","dependencies":{"@octokit/auth-token":"^2.4.0","@octokit/plugin-paginate-rest":"^1.1.1","@octokit/plugin-request-log":"^1.0.0","@octokit/plugin-rest-endpoint-methods":"2.4.0","@octokit/request":"^5.2.0","@octokit/request-error":"^1.0.2","atob-lite":"^2.0.0","before-after-hook":"^2.0.0","btoa-lite":"^1.0.0","deprecation":"^2.0.0","lodash.get":"^4.4.2","lodash.set":"^4.3.2","lodash.uniq":"^4.5.0","octokit-pagination-methods":"^1.1.0","once":"^1.4.0","universal-user-agent":"^4.0.0"},"devDependencies":{"@gimenete/type-writer":"^0.1.3","@octokit/auth":"^1.1.1","@octokit/fixtures-server":"^5.0.6","@octokit/graphql":"^4.2.0","@types/node":"^13.1.0","bundlesize":"^0.18.0","chai":"^4.1.2","compression-webpack-plugin":"^3.1.0","cypress":"^3.0.0","glob":"^7.1.2","http-proxy-agent":"^4.0.0","lodash.camelcase":"^4.3.0","lodash.merge":"^4.6.1","lodash.upperfirst":"^4.3.1","lolex":"^5.1.2","mkdirp":"^1.0.0","mocha":"^7.0.1","mustache":"^4.0.0","nock":"^11.3.3","npm-run-all":"^4.1.2","nyc":"^15.0.0","prettier":"^1.14.2","proxy":"^1.0.0","semantic-release":"^17.0.0","sinon":"^8.0.0","sinon-chai":"^3.0.0","sort-keys":"^4.0.0","string-to-arraybuffer":"^1.0.0","string-to-jsdoc-comment":"^1.0.0","typescript":"^3.3.1","webpack":"^4.0.0","webpack-bundle-analyzer":"^3.0.0","webpack-cli":"^3.0.0"},"types":"index.d.ts","scripts":{"coverage":"nyc report --reporter=html && open coverage/index.html","lint":"prettier --check \'{lib,plugins,scripts,test}/**/*.{js,json,ts}\' \'docs/*.{js,json}\' \'docs/src/**/*\' index.js README.md package.json","lint:fix":"prettier --write \'{lib,plugins,scripts,test}/**/*.{js,json,ts}\' \'docs/*.{js,json}\' \'docs/src/**/*\' index.js README.md package.json","pretest":"npm run -s lint","test":"nyc mocha test/mocha-node-setup.js \\"test/*/**/*-test.js\\"","test:browser":"cypress run --browser chrome","build":"npm-run-all build:*","build:ts":"npm run -s update-endpoints:typescript","prebuild:browser":"mkdirp dist/","build:browser":"npm-run-all build:browser:*","build:browser:development":"webpack --mode development --entry . --output-library=Octokit --output=./dist/octokit-rest.js --profile --json > dist/bundle-stats.json","build:browser:production":"webpack --mode production --entry . --plugin=compression-webpack-plugin --output-library=Octokit --output-path=./dist --output-filename=octokit-rest.min.js --devtool source-map","generate-bundle-report":"webpack-bundle-analyzer dist/bundle-stats.json --mode=static --no-open --report dist/bundle-report.html","update-endpoints":"npm-run-all update-endpoints:*","update-endpoints:fetch-json":"node scripts/update-endpoints/fetch-json","update-endpoints:typescript":"node scripts/update-endpoints/typescript","prevalidate:ts":"npm run -s build:ts","validate:ts":"tsc --target es6 --noImplicitAny index.d.ts","postvalidate:ts":"tsc --noEmit --target es6 test/typescript-validate.ts","start-fixtures-server":"octokit-fixtures-server"},"license":"MIT","files":["index.js","index.d.ts","lib","plugins"],"nyc":{"ignore":["test"]},"release":{"publish":["@semantic-release/npm",{"path":"@semantic-release/github","assets":["dist/*","!dist/*.map.gz"]}]},"bundlesize":[{"path":"./dist/octokit-rest.min.js.gz","maxSize":"33 kB"}]}'
      );
    },
    function(e, t, r) {
      e.exports = function(e, t) {
        return n(e.includes(t) ? e : e.concat(t));
      };
      const n = r(25);
    },
    function(e, t, r) {
      e.exports = function(e, t) {
        if (t.authStrategy) {
          const r = t.authStrategy(t.auth);
          return e.hook.wrap("request", r.hook), void (e.auth = r);
        }
        if (!t.auth)
          return void (e.auth = () =>
            Promise.resolve({ type: "unauthenticated" }));
        const r = "string" == typeof t.auth && /^basic/.test(u(t.auth));
        if ("string" == typeof t.auth && !r) {
          const r = n(t.auth);
          return e.hook.wrap("request", r.hook), void (e.auth = r);
        }
        const [s, l] = r
          ? [
              c,
              'Setting the "new Octokit({ auth })" option to a Basic Auth string is deprecated. Use https://github.com/octokit/auth-basic.js instead. See (https://octokit.github.io/rest.js/#authentication)'
            ]
          : [
              d,
              'Setting the "new Octokit({ auth })" option to an object without also setting the "authStrategy" option is deprecated and will be removed in v17. See (https://octokit.github.io/rest.js/#authentication)'
            ];
        s(e.log, new i("[@octokit/rest] " + l)),
          (e.auth = () => Promise.resolve({ type: "deprecated", message: l })),
          p(t.auth);
        const h = { octokit: e, auth: t.auth };
        e.hook.before("request", o.bind(null, h)),
          e.hook.error("request", a.bind(null, h));
      };
      const { createTokenAuth: n } = r(69),
        { Deprecation: i } = r(4),
        s = r(8),
        o = r(70),
        a = r(72),
        p = r(73),
        u = r(27),
        c = s((e, t) => e.warn(t)),
        d = s((e, t) => e.warn(t));
    },
    function(e, t, r) {
      "use strict";
      async function n(e) {
        const t =
          3 === e.split(/\./).length
            ? "app"
            : /^v\d+\./.test(e)
            ? "installation"
            : "oauth";
        return { type: "token", token: e, tokenType: t };
      }
      async function i(e, t, r, n) {
        const i = t.endpoint.merge(r, n);
        return (
          (i.headers.authorization = (function(e) {
            return 3 === e.split(/\./).length ? "bearer " + e : "token " + e;
          })(e)),
          t(i)
        );
      }
      r.r(t),
        r.d(t, "createTokenAuth", function() {
          return s;
        });
      const s = function(e) {
        if (!e)
          throw new Error(
            "[@octokit/auth-token] No token passed to createTokenAuth"
          );
        if ("string" != typeof e)
          throw new Error(
            "[@octokit/auth-token] Token passed to createTokenAuth is not a string"
          );
        return (
          (e = e.replace(/^(token|bearer) +/i, "")),
          Object.assign(n.bind(null, e), { hook: i.bind(null, e) })
        );
      };
    },
    function(e, t, r) {
      e.exports = function(e, t) {
        if ("string" == typeof e.auth)
          return void (t.headers.authorization = i(e.auth));
        if (e.auth.username) {
          const r = n(`${e.auth.username}:${e.auth.password}`);
          return (
            (t.headers.authorization = "Basic " + r),
            void (e.otp && (t.headers["x-github-otp"] = e.otp))
          );
        }
        if (e.auth.clientId) {
          if (/\/applications\/:?[\w_]+\/tokens\/:?[\w_]+($|\?)/.test(t.url)) {
            const r = n(`${e.auth.clientId}:${e.auth.clientSecret}`);
            return void (t.headers.authorization = "Basic " + r);
          }
          return (
            (t.url += -1 === t.url.indexOf("?") ? "?" : "&"),
            void (t.url += `client_id=${e.auth.clientId}&client_secret=${e.auth.clientSecret}`)
          );
        }
        return Promise.resolve()
          .then(() => e.auth())
          .then(e => {
            t.headers.authorization = i(e);
          });
      };
      const n = r(26),
        i = r(27);
    },
    function(e, t) {
      e.exports = function(e) {
        return atob(e);
      };
    },
    function(e, t, r) {
      e.exports = function(e, t, r) {
        if (!t.headers) throw t;
        const i = /required/.test(t.headers["x-github-otp"] || "");
        if (401 !== t.status || !i) throw t;
        if (
          401 === t.status &&
          i &&
          t.request &&
          t.request.headers["x-github-otp"]
        ) {
          if (!e.otp)
            throw new n(
              "Invalid one-time password for two-factor authentication",
              401,
              { headers: t.headers, request: r }
            );
          delete e.otp;
        }
        if ("function" != typeof e.auth.on2fa)
          throw new n(
            "2FA required, but options.on2fa is not a function. See https://github.com/octokit/rest.js#authentication",
            401,
            { headers: t.headers, request: r }
          );
        return Promise.resolve()
          .then(() => e.auth.on2fa())
          .then(t => {
            const n = Object.assign(r, {
              headers: Object.assign(r.headers, { "x-github-otp": t })
            });
            return e.octokit.request(n).then(r => ((e.otp = t), r));
          });
      };
      const { RequestError: n } = r(18);
    },
    function(e, t) {
      e.exports = function(e) {
        if ("string" == typeof e) return;
        if ("function" == typeof e) return;
        if (e.username && e.password) return;
        if (e.clientId && e.clientSecret) return;
        throw new Error('Invalid "auth" option: ' + JSON.stringify(e));
      };
    },
    function(e, t, r) {
      e.exports = function(e, t) {
        if (t.auth)
          return void (e.authenticate = () => {
            i(
              e.log,
              new n(
                '[@octokit/rest] octokit.authenticate() is deprecated and has no effect when "auth" option is set on Octokit constructor'
              )
            );
          });
        const r = { octokit: e, auth: !1 };
        (e.authenticate = s.bind(null, r)),
          e.hook.before("request", o.bind(null, r)),
          e.hook.error("request", a.bind(null, r));
      };
      const { Deprecation: n } = r(4),
        i = r(8)((e, t) => e.warn(t)),
        s = r(75),
        o = r(76),
        a = r(78);
    },
    function(e, t, r) {
      e.exports = function(e, t) {
        if (
          (i(
            e.octokit.log,
            new n(
              '[@octokit/rest] octokit.authenticate() is deprecated. Use "auth" constructor option instead.'
            )
          ),
          !t)
        )
          return void (e.auth = !1);
        switch (t.type) {
          case "basic":
            if (!t.username || !t.password)
              throw new Error(
                "Basic authentication requires both a username and password to be set"
              );
            break;
          case "oauth":
            if (!(t.token || (t.key && t.secret)))
              throw new Error(
                "OAuth2 authentication requires a token or key & secret to be set"
              );
            break;
          case "token":
          case "app":
            if (!t.token)
              throw new Error(
                "Token authentication requires a token to be set"
              );
            break;
          default:
            throw new Error(
              "Invalid authentication type, must be 'basic', 'oauth', 'token' or 'app'"
            );
        }
        e.auth = t;
      };
      const { Deprecation: n } = r(4),
        i = r(8)((e, t) => e.warn(t));
    },
    function(e, t, r) {
      e.exports = function(e, t) {
        if (!e.auth.type) return;
        if ("basic" === e.auth.type) {
          const r = n(`${e.auth.username}:${e.auth.password}`);
          return void (t.headers.authorization = "Basic " + r);
        }
        if ("token" === e.auth.type)
          return void (t.headers.authorization = "token " + e.auth.token);
        if ("app" === e.auth.type) {
          t.headers.authorization = "Bearer " + e.auth.token;
          const r = t.headers.accept
            .split(",")
            .concat("application/vnd.github.machine-man-preview+json");
          return void (t.headers.accept = i(r)
            .filter(Boolean)
            .join(","));
        }
        if (((t.url += -1 === t.url.indexOf("?") ? "?" : "&"), e.auth.token))
          return void (t.url +=
            "access_token=" + encodeURIComponent(e.auth.token));
        const r = encodeURIComponent(e.auth.key),
          s = encodeURIComponent(e.auth.secret);
        t.url += `client_id=${r}&client_secret=${s}`;
      };
      const n = r(26),
        i = r(77);
    },
    function(e, t, r) {
      (function(t) {
        var r = /^\[object .+?Constructor\]$/,
          n = "object" == typeof t && t && t.Object === Object && t,
          i = "object" == typeof self && self && self.Object === Object && self,
          s = n || i || Function("return this")();
        function o(e, t) {
          return (
            !!(e ? e.length : 0) &&
            (function(e, t, r) {
              if (t != t)
                return (function(e, t, r, n) {
                  var i = e.length,
                    s = r + (n ? 1 : -1);
                  for (; n ? s-- : ++s < i; ) if (t(e[s], s, e)) return s;
                  return -1;
                })(e, p, r);
              var n = r - 1,
                i = e.length;
              for (; ++n < i; ) if (e[n] === t) return n;
              return -1;
            })(e, t, 0) > -1
          );
        }
        function a(e, t, r) {
          for (var n = -1, i = e ? e.length : 0; ++n < i; )
            if (r(t, e[n])) return !0;
          return !1;
        }
        function p(e) {
          return e != e;
        }
        function u(e, t) {
          return e.has(t);
        }
        function c(e) {
          var t = -1,
            r = Array(e.size);
          return (
            e.forEach(function(e) {
              r[++t] = e;
            }),
            r
          );
        }
        var d,
          l = Array.prototype,
          h = Function.prototype,
          m = Object.prototype,
          g = s["__core-js_shared__"],
          y = (d = /[^.]+$/.exec((g && g.keys && g.keys.IE_PROTO) || ""))
            ? "Symbol(src)_1." + d
            : "",
          f = h.toString,
          _ = m.hasOwnProperty,
          b = m.toString,
          w = RegExp(
            "^" +
              f
                .call(_)
                .replace(/[\\^$.*+?()[\]{}|]/g, "\\$&")
                .replace(
                  /hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,
                  "$1.*?"
                ) +
              "$"
          ),
          v = l.splice,
          q = R(s, "Map"),
          k = R(s, "Set"),
          E = R(Object, "create");
        function T(e) {
          var t = -1,
            r = e ? e.length : 0;
          for (this.clear(); ++t < r; ) {
            var n = e[t];
            this.set(n[0], n[1]);
          }
        }
        function P(e) {
          var t = -1,
            r = e ? e.length : 0;
          for (this.clear(); ++t < r; ) {
            var n = e[t];
            this.set(n[0], n[1]);
          }
        }
        function x(e) {
          var t = -1,
            r = e ? e.length : 0;
          for (this.clear(); ++t < r; ) {
            var n = e[t];
            this.set(n[0], n[1]);
          }
        }
        function A(e) {
          var t = -1,
            r = e ? e.length : 0;
          for (this.__data__ = new x(); ++t < r; ) this.add(e[t]);
        }
        function j(e, t) {
          for (var r, n, i = e.length; i--; )
            if ((r = e[i][0]) === (n = t) || (r != r && n != n)) return i;
          return -1;
        }
        function O(e) {
          return (
            !(!I(e) || ((t = e), y && y in t)) &&
            ((function(e) {
              var t = I(e) ? b.call(e) : "";
              return (
                "[object Function]" == t || "[object GeneratorFunction]" == t
              );
            })(e) ||
            (function(e) {
              var t = !1;
              if (null != e && "function" != typeof e.toString)
                try {
                  t = !!(e + "");
                } catch (e) {}
              return t;
            })(e)
              ? w
              : r
            ).test(
              (function(e) {
                if (null != e) {
                  try {
                    return f.call(e);
                  } catch (e) {}
                  try {
                    return e + "";
                  } catch (e) {}
                }
                return "";
              })(e)
            )
          );
          var t;
        }
        (T.prototype.clear = function() {
          this.__data__ = E ? E(null) : {};
        }),
          (T.prototype.delete = function(e) {
            return this.has(e) && delete this.__data__[e];
          }),
          (T.prototype.get = function(e) {
            var t = this.__data__;
            if (E) {
              var r = t[e];
              return "__lodash_hash_undefined__" === r ? void 0 : r;
            }
            return _.call(t, e) ? t[e] : void 0;
          }),
          (T.prototype.has = function(e) {
            var t = this.__data__;
            return E ? void 0 !== t[e] : _.call(t, e);
          }),
          (T.prototype.set = function(e, t) {
            return (
              (this.__data__[e] =
                E && void 0 === t ? "__lodash_hash_undefined__" : t),
              this
            );
          }),
          (P.prototype.clear = function() {
            this.__data__ = [];
          }),
          (P.prototype.delete = function(e) {
            var t = this.__data__,
              r = j(t, e);
            return (
              !(r < 0) && (r == t.length - 1 ? t.pop() : v.call(t, r, 1), !0)
            );
          }),
          (P.prototype.get = function(e) {
            var t = this.__data__,
              r = j(t, e);
            return r < 0 ? void 0 : t[r][1];
          }),
          (P.prototype.has = function(e) {
            return j(this.__data__, e) > -1;
          }),
          (P.prototype.set = function(e, t) {
            var r = this.__data__,
              n = j(r, e);
            return n < 0 ? r.push([e, t]) : (r[n][1] = t), this;
          }),
          (x.prototype.clear = function() {
            this.__data__ = {
              hash: new T(),
              map: new (q || P)(),
              string: new T()
            };
          }),
          (x.prototype.delete = function(e) {
            return C(this, e).delete(e);
          }),
          (x.prototype.get = function(e) {
            return C(this, e).get(e);
          }),
          (x.prototype.has = function(e) {
            return C(this, e).has(e);
          }),
          (x.prototype.set = function(e, t) {
            return C(this, e).set(e, t), this;
          }),
          (A.prototype.add = A.prototype.push = function(e) {
            return this.__data__.set(e, "__lodash_hash_undefined__"), this;
          }),
          (A.prototype.has = function(e) {
            return this.__data__.has(e);
          });
        var S =
          k && 1 / c(new k([, -0]))[1] == 1 / 0
            ? function(e) {
                return new k(e);
              }
            : function() {};
        function C(e, t) {
          var r,
            n,
            i = e.__data__;
          return ("string" == (n = typeof (r = t)) ||
          "number" == n ||
          "symbol" == n ||
          "boolean" == n
          ? "__proto__" !== r
          : null === r)
            ? i["string" == typeof t ? "string" : "hash"]
            : i.map;
        }
        function R(e, t) {
          var r = (function(e, t) {
            return null == e ? void 0 : e[t];
          })(e, t);
          return O(r) ? r : void 0;
        }
        function I(e) {
          var t = typeof e;
          return !!e && ("object" == t || "function" == t);
        }
        e.exports = function(e) {
          return e && e.length
            ? (function(e, t, r) {
                var n = -1,
                  i = o,
                  s = e.length,
                  p = !0,
                  d = [],
                  l = d;
                if (r) (p = !1), (i = a);
                else if (s >= 200) {
                  var h = t ? null : S(e);
                  if (h) return c(h);
                  (p = !1), (i = u), (l = new A());
                } else l = t ? [] : d;
                e: for (; ++n < s; ) {
                  var m = e[n],
                    g = t ? t(m) : m;
                  if (((m = r || 0 !== m ? m : 0), p && g == g)) {
                    for (var y = l.length; y--; ) if (l[y] === g) continue e;
                    t && l.push(g), d.push(m);
                  } else i(l, g, r) || (l !== d && l.push(g), d.push(m));
                }
                return d;
              })(e)
            : [];
        };
      }.call(this, r(6)));
    },
    function(e, t, r) {
      e.exports = function(e, t, r) {
        if (!t.headers) throw t;
        const i = /required/.test(t.headers["x-github-otp"] || "");
        if (401 !== t.status || !i) throw t;
        if (
          401 === t.status &&
          i &&
          t.request &&
          t.request.headers["x-github-otp"]
        )
          throw new n(
            "Invalid one-time password for two-factor authentication",
            401,
            { headers: t.headers, request: r }
          );
        if ("function" != typeof e.auth.on2fa)
          throw new n(
            "2FA required, but options.on2fa is not a function. See https://github.com/octokit/rest.js#authentication",
            401,
            { headers: t.headers, request: r }
          );
        return Promise.resolve()
          .then(() => e.auth.on2fa())
          .then(t => {
            const n = Object.assign(r, {
              headers: Object.assign({ "x-github-otp": t }, r.headers)
            });
            return e.octokit.request(n);
          });
      };
      const { RequestError: n } = r(18);
    },
    function(e, t, r) {
      e.exports = function(e) {
        Object.assign(e, n(e));
      };
      const { paginateRest: n } = r(80);
    },
    function(e, t, r) {
      "use strict";
      r.r(t),
        r.d(t, "paginateRest", function() {
          return o;
        });
      const n = [
        /^\/search\//,
        /^\/repos\/[^/]+\/[^/]+\/commits\/[^/]+\/(check-runs|check-suites)([^/]|$)/,
        /^\/installation\/repositories([^/]|$)/,
        /^\/user\/installations([^/]|$)/,
        /^\/repos\/[^/]+\/[^/]+\/actions\/secrets([^/]|$)/,
        /^\/repos\/[^/]+\/[^/]+\/actions\/workflows(\/[^/]+\/runs)?([^/]|$)/,
        /^\/repos\/[^/]+\/[^/]+\/actions\/runs(\/[^/]+\/(artifacts|jobs))?([^/]|$)/
      ];
      function i(e, t, r) {
        const i = e.request.endpoint(t, r),
          s = i.method,
          o = i.headers;
        let a = i.url;
        return {
          [Symbol.asyncIterator]: () => ({
            next: () =>
              a
                ? e.request({ method: s, url: a, headers: o }).then(
                    t => (
                      (function(e, t, r) {
                        const i = t.replace(
                          e.request.endpoint.DEFAULTS.baseUrl,
                          ""
                        );
                        if (!n.find(e => e.test(i))) return;
                        const s = r.data.incomplete_results,
                          o = r.data.repository_selection,
                          a = r.data.total_count;
                        delete r.data.incomplete_results,
                          delete r.data.repository_selection,
                          delete r.data.total_count;
                        const p = Object.keys(r.data)[0],
                          u = r.data[p];
                        (r.data = u),
                          void 0 !== s && (r.data.incomplete_results = s),
                          void 0 !== o && (r.data.repository_selection = o),
                          (r.data.total_count = a),
                          Object.defineProperty(r.data, p, {
                            get: () => (
                              e.log.warn(
                                `[@octokit/paginate-rest] "response.data.${p}" is deprecated for "GET ${i}". Get the results directly from "response.data"`
                              ),
                              Array.from(u)
                            )
                          });
                      })(e, a, t),
                      (a = ((t.headers.link || "").match(
                        /<([^>]+)>;\s*rel="next"/
                      ) || [])[1]),
                      { value: t }
                    )
                  )
                : Promise.resolve({ done: !0 })
          })
        };
      }
      function s(e, t, r, n) {
        return (
          "function" == typeof r && ((n = r), (r = void 0)),
          (function e(t, r, n, i) {
            return n.next().then(s => {
              if (s.done) return r;
              let o = !1;
              return (
                (r = r.concat(
                  i
                    ? i(s.value, function() {
                        o = !0;
                      })
                    : s.value.data
                )),
                o ? r : e(t, r, n, i)
              );
            });
          })(e, [], i(e, t, r)[Symbol.asyncIterator](), n)
        );
      }
      function o(e) {
        return {
          paginate: Object.assign(s.bind(null, e), {
            iterator: i.bind(null, e)
          })
        };
      }
      o.VERSION = "1.1.2";
    },
    function(e, t, r) {
      e.exports = function(e) {
        e.hook.before("request", n.bind(null, e));
      };
      const n = r(82);
    },
    function(e, t, r) {
      "use strict";
      e.exports = function(e, t) {
        if (!t.request.validate) return;
        const { validate: r } = t.request;
        return (
          Object.keys(r).forEach(e => {
            const o = i(r, e),
              a = o.type;
            let p,
              u,
              c = !0,
              d = !1;
            /\./.test(e) &&
              ((p = e.replace(/\.[^.]+$/, "")),
              (d = "[]" === p.slice(-2)),
              d && (p = p.slice(0, -2)),
              (u = i(t, p)),
              (c = "headers" === p || ("object" == typeof u && null !== u))),
              (d
                ? (i(t, p) || []).map(t => t[e.split(/\./).pop()])
                : [i(t, e)]
              ).forEach((r, i) => {
                const p = void 0 !== r,
                  u = null === r,
                  l = d ? e.replace(/\[\]/, `[${i}]`) : e;
                if ((o.required || p) && c && (!o.allowNull || !u)) {
                  if (!o.allowNull && u)
                    throw new n(`'${l}' cannot be null`, 400, { request: t });
                  if (o.required && !p)
                    throw new n(
                      `Empty value for parameter '${l}': ${JSON.stringify(r)}`,
                      400,
                      { request: t }
                    );
                  if ("integer" === a) {
                    const e = r;
                    if (((r = parseInt(r, 10)), isNaN(r)))
                      throw new n(
                        `Invalid value for parameter '${l}': ${JSON.stringify(
                          e
                        )} is NaN`,
                        400,
                        { request: t }
                      );
                  }
                  if (o.enum && -1 === o.enum.indexOf(String(r)))
                    throw new n(
                      `Invalid value for parameter '${l}': ${JSON.stringify(
                        r
                      )}`,
                      400,
                      { request: t }
                    );
                  if (o.validation) {
                    if (!new RegExp(o.validation).test(r))
                      throw new n(
                        `Invalid value for parameter '${l}': ${JSON.stringify(
                          r
                        )}`,
                        400,
                        { request: t }
                      );
                  }
                  if ("object" === a && "string" == typeof r)
                    try {
                      r = JSON.parse(r);
                    } catch (e) {
                      throw new n(
                        `JSON parse error of value for parameter '${l}': ${JSON.stringify(
                          r
                        )}`,
                        400,
                        { request: t }
                      );
                    }
                  s(t, o.mapTo || l, r);
                }
              });
          }),
          t
        );
      };
      const { RequestError: n } = r(18),
        i = r(83),
        s = r(84);
    },
    function(e, t, r) {
      (function(t) {
        var r = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
          n = /^\w*$/,
          i = /^\./,
          s = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,
          o = /\\(\\)?/g,
          a = /^\[object .+?Constructor\]$/,
          p = "object" == typeof t && t && t.Object === Object && t,
          u = "object" == typeof self && self && self.Object === Object && self,
          c = p || u || Function("return this")();
        var d,
          l = Array.prototype,
          h = Function.prototype,
          m = Object.prototype,
          g = c["__core-js_shared__"],
          y = (d = /[^.]+$/.exec((g && g.keys && g.keys.IE_PROTO) || ""))
            ? "Symbol(src)_1." + d
            : "",
          f = h.toString,
          _ = m.hasOwnProperty,
          b = m.toString,
          w = RegExp(
            "^" +
              f
                .call(_)
                .replace(/[\\^$.*+?()[\]{}|]/g, "\\$&")
                .replace(
                  /hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,
                  "$1.*?"
                ) +
              "$"
          ),
          v = c.Symbol,
          q = l.splice,
          k = I(c, "Map"),
          E = I(Object, "create"),
          T = v ? v.prototype : void 0,
          P = T ? T.toString : void 0;
        function x(e) {
          var t = -1,
            r = e ? e.length : 0;
          for (this.clear(); ++t < r; ) {
            var n = e[t];
            this.set(n[0], n[1]);
          }
        }
        function A(e) {
          var t = -1,
            r = e ? e.length : 0;
          for (this.clear(); ++t < r; ) {
            var n = e[t];
            this.set(n[0], n[1]);
          }
        }
        function j(e) {
          var t = -1,
            r = e ? e.length : 0;
          for (this.clear(); ++t < r; ) {
            var n = e[t];
            this.set(n[0], n[1]);
          }
        }
        function O(e, t) {
          for (var r, n, i = e.length; i--; )
            if ((r = e[i][0]) === (n = t) || (r != r && n != n)) return i;
          return -1;
        }
        function S(e, t) {
          for (
            var i,
              s = 0,
              o = (t = (function(e, t) {
                if (z(e)) return !1;
                var i = typeof e;
                if (
                  "number" == i ||
                  "symbol" == i ||
                  "boolean" == i ||
                  null == e ||
                  U(e)
                )
                  return !0;
                return (
                  n.test(e) || !r.test(e) || (null != t && (e in Object(t)))
                );
              })(t, e)
                ? [t]
                : z((i = t))
                ? i
                : D(i)).length;
            null != e && s < o;

          )
            e = e[L(t[s++])];
          return s && s == o ? e : void 0;
        }
        function C(e) {
          return (
            !(!F(e) || ((t = e), y && y in t)) &&
            ((function(e) {
              var t = F(e) ? b.call(e) : "";
              return (
                "[object Function]" == t || "[object GeneratorFunction]" == t
              );
            })(e) ||
            (function(e) {
              var t = !1;
              if (null != e && "function" != typeof e.toString)
                try {
                  t = !!(e + "");
                } catch (e) {}
              return t;
            })(e)
              ? w
              : a
            ).test(
              (function(e) {
                if (null != e) {
                  try {
                    return f.call(e);
                  } catch (e) {}
                  try {
                    return e + "";
                  } catch (e) {}
                }
                return "";
              })(e)
            )
          );
          var t;
        }
        function R(e, t) {
          var r,
            n,
            i = e.__data__;
          return ("string" == (n = typeof (r = t)) ||
          "number" == n ||
          "symbol" == n ||
          "boolean" == n
          ? "__proto__" !== r
          : null === r)
            ? i["string" == typeof t ? "string" : "hash"]
            : i.map;
        }
        function I(e, t) {
          var r = (function(e, t) {
            return null == e ? void 0 : e[t];
          })(e, t);
          return C(r) ? r : void 0;
        }
        (x.prototype.clear = function() {
          this.__data__ = E ? E(null) : {};
        }),
          (x.prototype.delete = function(e) {
            return this.has(e) && delete this.__data__[e];
          }),
          (x.prototype.get = function(e) {
            var t = this.__data__;
            if (E) {
              var r = t[e];
              return "__lodash_hash_undefined__" === r ? void 0 : r;
            }
            return _.call(t, e) ? t[e] : void 0;
          }),
          (x.prototype.has = function(e) {
            var t = this.__data__;
            return E ? void 0 !== t[e] : _.call(t, e);
          }),
          (x.prototype.set = function(e, t) {
            return (
              (this.__data__[e] =
                E && void 0 === t ? "__lodash_hash_undefined__" : t),
              this
            );
          }),
          (A.prototype.clear = function() {
            this.__data__ = [];
          }),
          (A.prototype.delete = function(e) {
            var t = this.__data__,
              r = O(t, e);
            return (
              !(r < 0) && (r == t.length - 1 ? t.pop() : q.call(t, r, 1), !0)
            );
          }),
          (A.prototype.get = function(e) {
            var t = this.__data__,
              r = O(t, e);
            return r < 0 ? void 0 : t[r][1];
          }),
          (A.prototype.has = function(e) {
            return O(this.__data__, e) > -1;
          }),
          (A.prototype.set = function(e, t) {
            var r = this.__data__,
              n = O(r, e);
            return n < 0 ? r.push([e, t]) : (r[n][1] = t), this;
          }),
          (j.prototype.clear = function() {
            this.__data__ = {
              hash: new x(),
              map: new (k || A)(),
              string: new x()
            };
          }),
          (j.prototype.delete = function(e) {
            return R(this, e).delete(e);
          }),
          (j.prototype.get = function(e) {
            return R(this, e).get(e);
          }),
          (j.prototype.has = function(e) {
            return R(this, e).has(e);
          }),
          (j.prototype.set = function(e, t) {
            return R(this, e).set(e, t), this;
          });
        var D = G(function(e) {
          var t;
          e =
            null == (t = e)
              ? ""
              : (function(e) {
                  if ("string" == typeof e) return e;
                  if (U(e)) return P ? P.call(e) : "";
                  var t = e + "";
                  return "0" == t && 1 / e == -1 / 0 ? "-0" : t;
                })(t);
          var r = [];
          return (
            i.test(e) && r.push(""),
            e.replace(s, function(e, t, n, i) {
              r.push(n ? i.replace(o, "$1") : t || e);
            }),
            r
          );
        });
        function L(e) {
          if ("string" == typeof e || U(e)) return e;
          var t = e + "";
          return "0" == t && 1 / e == -1 / 0 ? "-0" : t;
        }
        function G(e, t) {
          if ("function" != typeof e || (t && "function" != typeof t))
            throw new TypeError("Expected a function");
          var r = function() {
            var n = arguments,
              i = t ? t.apply(this, n) : n[0],
              s = r.cache;
            if (s.has(i)) return s.get(i);
            var o = e.apply(this, n);
            return (r.cache = s.set(i, o)), o;
          };
          return (r.cache = new (G.Cache || j)()), r;
        }
        G.Cache = j;
        var z = Array.isArray;
        function F(e) {
          var t = typeof e;
          return !!e && ("object" == t || "function" == t);
        }
        function U(e) {
          return (
            "symbol" == typeof e ||
            ((function(e) {
              return !!e && "object" == typeof e;
            })(e) &&
              "[object Symbol]" == b.call(e))
          );
        }
        e.exports = function(e, t, r) {
          var n = null == e ? void 0 : S(e, t);
          return void 0 === n ? r : n;
        };
      }.call(this, r(6)));
    },
    function(e, t, r) {
      (function(t) {
        var r = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
          n = /^\w*$/,
          i = /^\./,
          s = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,
          o = /\\(\\)?/g,
          a = /^\[object .+?Constructor\]$/,
          p = /^(?:0|[1-9]\d*)$/,
          u = "object" == typeof t && t && t.Object === Object && t,
          c = "object" == typeof self && self && self.Object === Object && self,
          d = u || c || Function("return this")();
        var l,
          h = Array.prototype,
          m = Function.prototype,
          g = Object.prototype,
          y = d["__core-js_shared__"],
          f = (l = /[^.]+$/.exec((y && y.keys && y.keys.IE_PROTO) || ""))
            ? "Symbol(src)_1." + l
            : "",
          _ = m.toString,
          b = g.hasOwnProperty,
          w = g.toString,
          v = RegExp(
            "^" +
              _.call(b)
                .replace(/[\\^$.*+?()[\]{}|]/g, "\\$&")
                .replace(
                  /hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,
                  "$1.*?"
                ) +
              "$"
          ),
          q = d.Symbol,
          k = h.splice,
          E = L(d, "Map"),
          T = L(Object, "create"),
          P = q ? q.prototype : void 0,
          x = P ? P.toString : void 0;
        function A(e) {
          var t = -1,
            r = e ? e.length : 0;
          for (this.clear(); ++t < r; ) {
            var n = e[t];
            this.set(n[0], n[1]);
          }
        }
        function j(e) {
          var t = -1,
            r = e ? e.length : 0;
          for (this.clear(); ++t < r; ) {
            var n = e[t];
            this.set(n[0], n[1]);
          }
        }
        function O(e) {
          var t = -1,
            r = e ? e.length : 0;
          for (this.clear(); ++t < r; ) {
            var n = e[t];
            this.set(n[0], n[1]);
          }
        }
        function S(e, t, r) {
          var n = e[t];
          (b.call(e, t) && B(n, r) && (void 0 !== r || t in e)) || (e[t] = r);
        }
        function C(e, t) {
          for (var r = e.length; r--; ) if (B(e[r][0], t)) return r;
          return -1;
        }
        function R(e) {
          return (
            !(!N(e) || ((t = e), f && f in t)) &&
            ((function(e) {
              var t = N(e) ? w.call(e) : "";
              return (
                "[object Function]" == t || "[object GeneratorFunction]" == t
              );
            })(e) ||
            (function(e) {
              var t = !1;
              if (null != e && "function" != typeof e.toString)
                try {
                  t = !!(e + "");
                } catch (e) {}
              return t;
            })(e)
              ? v
              : a
            ).test(
              (function(e) {
                if (null != e) {
                  try {
                    return _.call(e);
                  } catch (e) {}
                  try {
                    return e + "";
                  } catch (e) {}
                }
                return "";
              })(e)
            )
          );
          var t;
        }
        function I(e, t, i, s) {
          if (!N(e)) return e;
          for (
            var o = -1,
              a = (t = (function(e, t) {
                if (M(e)) return !1;
                var i = typeof e;
                if (
                  "number" == i ||
                  "symbol" == i ||
                  "boolean" == i ||
                  null == e ||
                  H(e)
                )
                  return !0;
                return (
                  n.test(e) || !r.test(e) || (null != t && (e in Object(t)))
                );
              })(t, e)
                ? [t]
                : (function(e) {
                    return M(e) ? e : z(e);
                  })(t)).length,
              p = a - 1,
              u = e;
            null != u && ++o < a;

          ) {
            var c = F(t[o]),
              d = i;
            if (o != p) {
              var l = u[c];
              void 0 === (d = s ? s(l, c, u) : void 0) &&
                (d = N(l) ? l : G(t[o + 1]) ? [] : {});
            }
            S(u, c, d), (u = u[c]);
          }
          return e;
        }
        function D(e, t) {
          var r,
            n,
            i = e.__data__;
          return ("string" == (n = typeof (r = t)) ||
          "number" == n ||
          "symbol" == n ||
          "boolean" == n
          ? "__proto__" !== r
          : null === r)
            ? i["string" == typeof t ? "string" : "hash"]
            : i.map;
        }
        function L(e, t) {
          var r = (function(e, t) {
            return null == e ? void 0 : e[t];
          })(e, t);
          return R(r) ? r : void 0;
        }
        function G(e, t) {
          return (
            !!(t = null == t ? 9007199254740991 : t) &&
            ("number" == typeof e || p.test(e)) &&
            e > -1 &&
            e % 1 == 0 &&
            e < t
          );
        }
        (A.prototype.clear = function() {
          this.__data__ = T ? T(null) : {};
        }),
          (A.prototype.delete = function(e) {
            return this.has(e) && delete this.__data__[e];
          }),
          (A.prototype.get = function(e) {
            var t = this.__data__;
            if (T) {
              var r = t[e];
              return "__lodash_hash_undefined__" === r ? void 0 : r;
            }
            return b.call(t, e) ? t[e] : void 0;
          }),
          (A.prototype.has = function(e) {
            var t = this.__data__;
            return T ? void 0 !== t[e] : b.call(t, e);
          }),
          (A.prototype.set = function(e, t) {
            return (
              (this.__data__[e] =
                T && void 0 === t ? "__lodash_hash_undefined__" : t),
              this
            );
          }),
          (j.prototype.clear = function() {
            this.__data__ = [];
          }),
          (j.prototype.delete = function(e) {
            var t = this.__data__,
              r = C(t, e);
            return (
              !(r < 0) && (r == t.length - 1 ? t.pop() : k.call(t, r, 1), !0)
            );
          }),
          (j.prototype.get = function(e) {
            var t = this.__data__,
              r = C(t, e);
            return r < 0 ? void 0 : t[r][1];
          }),
          (j.prototype.has = function(e) {
            return C(this.__data__, e) > -1;
          }),
          (j.prototype.set = function(e, t) {
            var r = this.__data__,
              n = C(r, e);
            return n < 0 ? r.push([e, t]) : (r[n][1] = t), this;
          }),
          (O.prototype.clear = function() {
            this.__data__ = {
              hash: new A(),
              map: new (E || j)(),
              string: new A()
            };
          }),
          (O.prototype.delete = function(e) {
            return D(this, e).delete(e);
          }),
          (O.prototype.get = function(e) {
            return D(this, e).get(e);
          }),
          (O.prototype.has = function(e) {
            return D(this, e).has(e);
          }),
          (O.prototype.set = function(e, t) {
            return D(this, e).set(e, t), this;
          });
        var z = U(function(e) {
          var t;
          e =
            null == (t = e)
              ? ""
              : (function(e) {
                  if ("string" == typeof e) return e;
                  if (H(e)) return x ? x.call(e) : "";
                  var t = e + "";
                  return "0" == t && 1 / e == -1 / 0 ? "-0" : t;
                })(t);
          var r = [];
          return (
            i.test(e) && r.push(""),
            e.replace(s, function(e, t, n, i) {
              r.push(n ? i.replace(o, "$1") : t || e);
            }),
            r
          );
        });
        function F(e) {
          if ("string" == typeof e || H(e)) return e;
          var t = e + "";
          return "0" == t && 1 / e == -1 / 0 ? "-0" : t;
        }
        function U(e, t) {
          if ("function" != typeof e || (t && "function" != typeof t))
            throw new TypeError("Expected a function");
          var r = function() {
            var n = arguments,
              i = t ? t.apply(this, n) : n[0],
              s = r.cache;
            if (s.has(i)) return s.get(i);
            var o = e.apply(this, n);
            return (r.cache = s.set(i, o)), o;
          };
          return (r.cache = new (U.Cache || O)()), r;
        }
        function B(e, t) {
          return e === t || (e != e && t != t);
        }
        U.Cache = O;
        var M = Array.isArray;
        function N(e) {
          var t = typeof e;
          return !!e && ("object" == t || "function" == t);
        }
        function H(e) {
          return (
            "symbol" == typeof e ||
            ((function(e) {
              return !!e && "object" == typeof e;
            })(e) &&
              "[object Symbol]" == w.call(e))
          );
        }
        e.exports = function(e, t, r) {
          return null == e ? e : I(e, t, r);
        };
      }.call(this, r(6)));
    },
    function(e, t, r) {
      e.exports = function(e) {
        (e.getFirstPage = r(86).bind(null, e)),
          (e.getLastPage = r(88).bind(null, e)),
          (e.getNextPage = r(89).bind(null, e)),
          (e.getPreviousPage = r(90).bind(null, e)),
          (e.hasFirstPage = r(91)),
          (e.hasLastPage = r(92)),
          (e.hasNextPage = r(93)),
          (e.hasPreviousPage = r(94));
      };
    },
    function(e, t, r) {
      e.exports = function(e, t, r) {
        return n(e, t, "first", r);
      };
      const n = r(14);
    },
    function(e, t) {
      e.exports = class extends Error {
        constructor(e, t, r) {
          super(e),
            Error.captureStackTrace &&
              Error.captureStackTrace(this, this.constructor),
            (this.name = "HttpError"),
            (this.code = t),
            (this.headers = r);
        }
      };
    },
    function(e, t, r) {
      e.exports = function(e, t, r) {
        return n(e, t, "last", r);
      };
      const n = r(14);
    },
    function(e, t, r) {
      e.exports = function(e, t, r) {
        return n(e, t, "next", r);
      };
      const n = r(14);
    },
    function(e, t, r) {
      e.exports = function(e, t, r) {
        return n(e, t, "prev", r);
      };
      const n = r(14);
    },
    function(e, t, r) {
      e.exports = function(e) {
        return (
          n(
            "octokit.hasFirstPage() – You can use octokit.paginate or async iterators instead: https://github.com/octokit/rest.js#pagination."
          ),
          i(e).first
        );
      };
      const n = r(12),
        i = r(13);
    },
    function(e, t, r) {
      e.exports = function(e) {
        return (
          n(
            "octokit.hasLastPage() – You can use octokit.paginate or async iterators instead: https://github.com/octokit/rest.js#pagination."
          ),
          i(e).last
        );
      };
      const n = r(12),
        i = r(13);
    },
    function(e, t, r) {
      e.exports = function(e) {
        return (
          n(
            "octokit.hasNextPage() – You can use octokit.paginate or async iterators instead: https://github.com/octokit/rest.js#pagination."
          ),
          i(e).next
        );
      };
      const n = r(12),
        i = r(13);
    },
    function(e, t, r) {
      e.exports = function(e) {
        return (
          n(
            "octokit.hasPreviousPage() – You can use octokit.paginate or async iterators instead: https://github.com/octokit/rest.js#pagination."
          ),
          i(e).prev
        );
      };
      const n = r(12),
        i = r(13);
    },
    function(e, t, r) {
      "use strict";
      (function(e) {
        /*!
         * The buffer module from node.js, for the browser.
         *
         * @author   Feross Aboukhadijeh <http://feross.org>
         * @license  MIT
         */
        var n = r(96),
          i = r(97),
          s = r(98);
        function o() {
          return p.TYPED_ARRAY_SUPPORT ? 2147483647 : 1073741823;
        }
        function a(e, t) {
          if (o() < t) throw new RangeError("Invalid typed array length");
          return (
            p.TYPED_ARRAY_SUPPORT
              ? ((e = new Uint8Array(t)).__proto__ = p.prototype)
              : (null === e && (e = new p(t)), (e.length = t)),
            e
          );
        }
        function p(e, t, r) {
          if (!(p.TYPED_ARRAY_SUPPORT || this instanceof p))
            return new p(e, t, r);
          if ("number" == typeof e) {
            if ("string" == typeof t)
              throw new Error(
                "If encoding is specified then the first argument must be a string"
              );
            return d(this, e);
          }
          return u(this, e, t, r);
        }
        function u(e, t, r, n) {
          if ("number" == typeof t)
            throw new TypeError('"value" argument must not be a number');
          return "undefined" != typeof ArrayBuffer && t instanceof ArrayBuffer
            ? (function(e, t, r, n) {
                if ((t.byteLength, r < 0 || t.byteLength < r))
                  throw new RangeError("'offset' is out of bounds");
                if (t.byteLength < r + (n || 0))
                  throw new RangeError("'length' is out of bounds");
                t =
                  void 0 === r && void 0 === n
                    ? new Uint8Array(t)
                    : void 0 === n
                    ? new Uint8Array(t, r)
                    : new Uint8Array(t, r, n);
                p.TYPED_ARRAY_SUPPORT
                  ? ((e = t).__proto__ = p.prototype)
                  : (e = l(e, t));
                return e;
              })(e, t, r, n)
            : "string" == typeof t
            ? (function(e, t, r) {
                ("string" == typeof r && "" !== r) || (r = "utf8");
                if (!p.isEncoding(r))
                  throw new TypeError(
                    '"encoding" must be a valid string encoding'
                  );
                var n = 0 | m(t, r),
                  i = (e = a(e, n)).write(t, r);
                i !== n && (e = e.slice(0, i));
                return e;
              })(e, t, r)
            : (function(e, t) {
                if (p.isBuffer(t)) {
                  var r = 0 | h(t.length);
                  return 0 === (e = a(e, r)).length || t.copy(e, 0, 0, r), e;
                }
                if (t) {
                  if (
                    ("undefined" != typeof ArrayBuffer &&
                      t.buffer instanceof ArrayBuffer) ||
                    "length" in t
                  )
                    return "number" != typeof t.length || (n = t.length) != n
                      ? a(e, 0)
                      : l(e, t);
                  if ("Buffer" === t.type && s(t.data)) return l(e, t.data);
                }
                var n;
                throw new TypeError(
                  "First argument must be a string, Buffer, ArrayBuffer, Array, or array-like object."
                );
              })(e, t);
        }
        function c(e) {
          if ("number" != typeof e)
            throw new TypeError('"size" argument must be a number');
          if (e < 0)
            throw new RangeError('"size" argument must not be negative');
        }
        function d(e, t) {
          if ((c(t), (e = a(e, t < 0 ? 0 : 0 | h(t))), !p.TYPED_ARRAY_SUPPORT))
            for (var r = 0; r < t; ++r) e[r] = 0;
          return e;
        }
        function l(e, t) {
          var r = t.length < 0 ? 0 : 0 | h(t.length);
          e = a(e, r);
          for (var n = 0; n < r; n += 1) e[n] = 255 & t[n];
          return e;
        }
        function h(e) {
          if (e >= o())
            throw new RangeError(
              "Attempt to allocate Buffer larger than maximum size: 0x" +
                o().toString(16) +
                " bytes"
            );
          return 0 | e;
        }
        function m(e, t) {
          if (p.isBuffer(e)) return e.length;
          if (
            "undefined" != typeof ArrayBuffer &&
            "function" == typeof ArrayBuffer.isView &&
            (ArrayBuffer.isView(e) || e instanceof ArrayBuffer)
          )
            return e.byteLength;
          "string" != typeof e && (e = "" + e);
          var r = e.length;
          if (0 === r) return 0;
          for (var n = !1; ; )
            switch (t) {
              case "ascii":
              case "latin1":
              case "binary":
                return r;
              case "utf8":
              case "utf-8":
              case void 0:
                return U(e).length;
              case "ucs2":
              case "ucs-2":
              case "utf16le":
              case "utf-16le":
                return 2 * r;
              case "hex":
                return r >>> 1;
              case "base64":
                return B(e).length;
              default:
                if (n) return U(e).length;
                (t = ("" + t).toLowerCase()), (n = !0);
            }
        }
        function g(e, t, r) {
          var n = !1;
          if (((void 0 === t || t < 0) && (t = 0), t > this.length)) return "";
          if (((void 0 === r || r > this.length) && (r = this.length), r <= 0))
            return "";
          if ((r >>>= 0) <= (t >>>= 0)) return "";
          for (e || (e = "utf8"); ; )
            switch (e) {
              case "hex":
                return j(this, t, r);
              case "utf8":
              case "utf-8":
                return P(this, t, r);
              case "ascii":
                return x(this, t, r);
              case "latin1":
              case "binary":
                return A(this, t, r);
              case "base64":
                return T(this, t, r);
              case "ucs2":
              case "ucs-2":
              case "utf16le":
              case "utf-16le":
                return O(this, t, r);
              default:
                if (n) throw new TypeError("Unknown encoding: " + e);
                (e = (e + "").toLowerCase()), (n = !0);
            }
        }
        function y(e, t, r) {
          var n = e[t];
          (e[t] = e[r]), (e[r] = n);
        }
        function f(e, t, r, n, i) {
          if (0 === e.length) return -1;
          if (
            ("string" == typeof r
              ? ((n = r), (r = 0))
              : r > 2147483647
              ? (r = 2147483647)
              : r < -2147483648 && (r = -2147483648),
            (r = +r),
            isNaN(r) && (r = i ? 0 : e.length - 1),
            r < 0 && (r = e.length + r),
            r >= e.length)
          ) {
            if (i) return -1;
            r = e.length - 1;
          } else if (r < 0) {
            if (!i) return -1;
            r = 0;
          }
          if (("string" == typeof t && (t = p.from(t, n)), p.isBuffer(t)))
            return 0 === t.length ? -1 : _(e, t, r, n, i);
          if ("number" == typeof t)
            return (
              (t &= 255),
              p.TYPED_ARRAY_SUPPORT &&
              "function" == typeof Uint8Array.prototype.indexOf
                ? i
                  ? Uint8Array.prototype.indexOf.call(e, t, r)
                  : Uint8Array.prototype.lastIndexOf.call(e, t, r)
                : _(e, [t], r, n, i)
            );
          throw new TypeError("val must be string, number or Buffer");
        }
        function _(e, t, r, n, i) {
          var s,
            o = 1,
            a = e.length,
            p = t.length;
          if (
            void 0 !== n &&
            ("ucs2" === (n = String(n).toLowerCase()) ||
              "ucs-2" === n ||
              "utf16le" === n ||
              "utf-16le" === n)
          ) {
            if (e.length < 2 || t.length < 2) return -1;
            (o = 2), (a /= 2), (p /= 2), (r /= 2);
          }
          function u(e, t) {
            return 1 === o ? e[t] : e.readUInt16BE(t * o);
          }
          if (i) {
            var c = -1;
            for (s = r; s < a; s++)
              if (u(e, s) === u(t, -1 === c ? 0 : s - c)) {
                if ((-1 === c && (c = s), s - c + 1 === p)) return c * o;
              } else -1 !== c && (s -= s - c), (c = -1);
          } else
            for (r + p > a && (r = a - p), s = r; s >= 0; s--) {
              for (var d = !0, l = 0; l < p; l++)
                if (u(e, s + l) !== u(t, l)) {
                  d = !1;
                  break;
                }
              if (d) return s;
            }
          return -1;
        }
        function b(e, t, r, n) {
          r = Number(r) || 0;
          var i = e.length - r;
          n ? (n = Number(n)) > i && (n = i) : (n = i);
          var s = t.length;
          if (s % 2 != 0) throw new TypeError("Invalid hex string");
          n > s / 2 && (n = s / 2);
          for (var o = 0; o < n; ++o) {
            var a = parseInt(t.substr(2 * o, 2), 16);
            if (isNaN(a)) return o;
            e[r + o] = a;
          }
          return o;
        }
        function w(e, t, r, n) {
          return M(U(t, e.length - r), e, r, n);
        }
        function v(e, t, r, n) {
          return M(
            (function(e) {
              for (var t = [], r = 0; r < e.length; ++r)
                t.push(255 & e.charCodeAt(r));
              return t;
            })(t),
            e,
            r,
            n
          );
        }
        function q(e, t, r, n) {
          return v(e, t, r, n);
        }
        function k(e, t, r, n) {
          return M(B(t), e, r, n);
        }
        function E(e, t, r, n) {
          return M(
            (function(e, t) {
              for (
                var r, n, i, s = [], o = 0;
                o < e.length && !((t -= 2) < 0);
                ++o
              )
                (r = e.charCodeAt(o)),
                  (n = r >> 8),
                  (i = r % 256),
                  s.push(i),
                  s.push(n);
              return s;
            })(t, e.length - r),
            e,
            r,
            n
          );
        }
        function T(e, t, r) {
          return 0 === t && r === e.length
            ? n.fromByteArray(e)
            : n.fromByteArray(e.slice(t, r));
        }
        function P(e, t, r) {
          r = Math.min(e.length, r);
          for (var n = [], i = t; i < r; ) {
            var s,
              o,
              a,
              p,
              u = e[i],
              c = null,
              d = u > 239 ? 4 : u > 223 ? 3 : u > 191 ? 2 : 1;
            if (i + d <= r)
              switch (d) {
                case 1:
                  u < 128 && (c = u);
                  break;
                case 2:
                  128 == (192 & (s = e[i + 1])) &&
                    (p = ((31 & u) << 6) | (63 & s)) > 127 &&
                    (c = p);
                  break;
                case 3:
                  (s = e[i + 1]),
                    (o = e[i + 2]),
                    128 == (192 & s) &&
                      128 == (192 & o) &&
                      (p = ((15 & u) << 12) | ((63 & s) << 6) | (63 & o)) >
                        2047 &&
                      (p < 55296 || p > 57343) &&
                      (c = p);
                  break;
                case 4:
                  (s = e[i + 1]),
                    (o = e[i + 2]),
                    (a = e[i + 3]),
                    128 == (192 & s) &&
                      128 == (192 & o) &&
                      128 == (192 & a) &&
                      (p =
                        ((15 & u) << 18) |
                        ((63 & s) << 12) |
                        ((63 & o) << 6) |
                        (63 & a)) > 65535 &&
                      p < 1114112 &&
                      (c = p);
              }
            null === c
              ? ((c = 65533), (d = 1))
              : c > 65535 &&
                ((c -= 65536),
                n.push(((c >>> 10) & 1023) | 55296),
                (c = 56320 | (1023 & c))),
              n.push(c),
              (i += d);
          }
          return (function(e) {
            var t = e.length;
            if (t <= 4096) return String.fromCharCode.apply(String, e);
            var r = "",
              n = 0;
            for (; n < t; )
              r += String.fromCharCode.apply(String, e.slice(n, (n += 4096)));
            return r;
          })(n);
        }
        (t.Buffer = p),
          (t.SlowBuffer = function(e) {
            +e != e && (e = 0);
            return p.alloc(+e);
          }),
          (t.INSPECT_MAX_BYTES = 50),
          (p.TYPED_ARRAY_SUPPORT =
            void 0 !== e.TYPED_ARRAY_SUPPORT
              ? e.TYPED_ARRAY_SUPPORT
              : (function() {
                  try {
                    var e = new Uint8Array(1);
                    return (
                      (e.__proto__ = {
                        __proto__: Uint8Array.prototype,
                        foo: function() {
                          return 42;
                        }
                      }),
                      42 === e.foo() &&
                        "function" == typeof e.subarray &&
                        0 === e.subarray(1, 1).byteLength
                    );
                  } catch (e) {
                    return !1;
                  }
                })()),
          (t.kMaxLength = o()),
          (p.poolSize = 8192),
          (p._augment = function(e) {
            return (e.__proto__ = p.prototype), e;
          }),
          (p.from = function(e, t, r) {
            return u(null, e, t, r);
          }),
          p.TYPED_ARRAY_SUPPORT &&
            ((p.prototype.__proto__ = Uint8Array.prototype),
            (p.__proto__ = Uint8Array),
            "undefined" != typeof Symbol &&
              Symbol.species &&
              p[Symbol.species] === p &&
              Object.defineProperty(p, Symbol.species, {
                value: null,
                configurable: !0
              })),
          (p.alloc = function(e, t, r) {
            return (function(e, t, r, n) {
              return (
                c(t),
                t <= 0
                  ? a(e, t)
                  : void 0 !== r
                  ? "string" == typeof n
                    ? a(e, t).fill(r, n)
                    : a(e, t).fill(r)
                  : a(e, t)
              );
            })(null, e, t, r);
          }),
          (p.allocUnsafe = function(e) {
            return d(null, e);
          }),
          (p.allocUnsafeSlow = function(e) {
            return d(null, e);
          }),
          (p.isBuffer = function(e) {
            return !(null == e || !e._isBuffer);
          }),
          (p.compare = function(e, t) {
            if (!p.isBuffer(e) || !p.isBuffer(t))
              throw new TypeError("Arguments must be Buffers");
            if (e === t) return 0;
            for (
              var r = e.length, n = t.length, i = 0, s = Math.min(r, n);
              i < s;
              ++i
            )
              if (e[i] !== t[i]) {
                (r = e[i]), (n = t[i]);
                break;
              }
            return r < n ? -1 : n < r ? 1 : 0;
          }),
          (p.isEncoding = function(e) {
            switch (String(e).toLowerCase()) {
              case "hex":
              case "utf8":
              case "utf-8":
              case "ascii":
              case "latin1":
              case "binary":
              case "base64":
              case "ucs2":
              case "ucs-2":
              case "utf16le":
              case "utf-16le":
                return !0;
              default:
                return !1;
            }
          }),
          (p.concat = function(e, t) {
            if (!s(e))
              throw new TypeError(
                '"list" argument must be an Array of Buffers'
              );
            if (0 === e.length) return p.alloc(0);
            var r;
            if (void 0 === t)
              for (t = 0, r = 0; r < e.length; ++r) t += e[r].length;
            var n = p.allocUnsafe(t),
              i = 0;
            for (r = 0; r < e.length; ++r) {
              var o = e[r];
              if (!p.isBuffer(o))
                throw new TypeError(
                  '"list" argument must be an Array of Buffers'
                );
              o.copy(n, i), (i += o.length);
            }
            return n;
          }),
          (p.byteLength = m),
          (p.prototype._isBuffer = !0),
          (p.prototype.swap16 = function() {
            var e = this.length;
            if (e % 2 != 0)
              throw new RangeError("Buffer size must be a multiple of 16-bits");
            for (var t = 0; t < e; t += 2) y(this, t, t + 1);
            return this;
          }),
          (p.prototype.swap32 = function() {
            var e = this.length;
            if (e % 4 != 0)
              throw new RangeError("Buffer size must be a multiple of 32-bits");
            for (var t = 0; t < e; t += 4)
              y(this, t, t + 3), y(this, t + 1, t + 2);
            return this;
          }),
          (p.prototype.swap64 = function() {
            var e = this.length;
            if (e % 8 != 0)
              throw new RangeError("Buffer size must be a multiple of 64-bits");
            for (var t = 0; t < e; t += 8)
              y(this, t, t + 7),
                y(this, t + 1, t + 6),
                y(this, t + 2, t + 5),
                y(this, t + 3, t + 4);
            return this;
          }),
          (p.prototype.toString = function() {
            var e = 0 | this.length;
            return 0 === e
              ? ""
              : 0 === arguments.length
              ? P(this, 0, e)
              : g.apply(this, arguments);
          }),
          (p.prototype.equals = function(e) {
            if (!p.isBuffer(e))
              throw new TypeError("Argument must be a Buffer");
            return this === e || 0 === p.compare(this, e);
          }),
          (p.prototype.inspect = function() {
            var e = "",
              r = t.INSPECT_MAX_BYTES;
            return (
              this.length > 0 &&
                ((e = this.toString("hex", 0, r)
                  .match(/.{2}/g)
                  .join(" ")),
                this.length > r && (e += " ... ")),
              "<Buffer " + e + ">"
            );
          }),
          (p.prototype.compare = function(e, t, r, n, i) {
            if (!p.isBuffer(e))
              throw new TypeError("Argument must be a Buffer");
            if (
              (void 0 === t && (t = 0),
              void 0 === r && (r = e ? e.length : 0),
              void 0 === n && (n = 0),
              void 0 === i && (i = this.length),
              t < 0 || r > e.length || n < 0 || i > this.length)
            )
              throw new RangeError("out of range index");
            if (n >= i && t >= r) return 0;
            if (n >= i) return -1;
            if (t >= r) return 1;
            if (this === e) return 0;
            for (
              var s = (i >>>= 0) - (n >>>= 0),
                o = (r >>>= 0) - (t >>>= 0),
                a = Math.min(s, o),
                u = this.slice(n, i),
                c = e.slice(t, r),
                d = 0;
              d < a;
              ++d
            )
              if (u[d] !== c[d]) {
                (s = u[d]), (o = c[d]);
                break;
              }
            return s < o ? -1 : o < s ? 1 : 0;
          }),
          (p.prototype.includes = function(e, t, r) {
            return -1 !== this.indexOf(e, t, r);
          }),
          (p.prototype.indexOf = function(e, t, r) {
            return f(this, e, t, r, !0);
          }),
          (p.prototype.lastIndexOf = function(e, t, r) {
            return f(this, e, t, r, !1);
          }),
          (p.prototype.write = function(e, t, r, n) {
            if (void 0 === t) (n = "utf8"), (r = this.length), (t = 0);
            else if (void 0 === r && "string" == typeof t)
              (n = t), (r = this.length), (t = 0);
            else {
              if (!isFinite(t))
                throw new Error(
                  "Buffer.write(string, encoding, offset[, length]) is no longer supported"
                );
              (t |= 0),
                isFinite(r)
                  ? ((r |= 0), void 0 === n && (n = "utf8"))
                  : ((n = r), (r = void 0));
            }
            var i = this.length - t;
            if (
              ((void 0 === r || r > i) && (r = i),
              (e.length > 0 && (r < 0 || t < 0)) || t > this.length)
            )
              throw new RangeError("Attempt to write outside buffer bounds");
            n || (n = "utf8");
            for (var s = !1; ; )
              switch (n) {
                case "hex":
                  return b(this, e, t, r);
                case "utf8":
                case "utf-8":
                  return w(this, e, t, r);
                case "ascii":
                  return v(this, e, t, r);
                case "latin1":
                case "binary":
                  return q(this, e, t, r);
                case "base64":
                  return k(this, e, t, r);
                case "ucs2":
                case "ucs-2":
                case "utf16le":
                case "utf-16le":
                  return E(this, e, t, r);
                default:
                  if (s) throw new TypeError("Unknown encoding: " + n);
                  (n = ("" + n).toLowerCase()), (s = !0);
              }
          }),
          (p.prototype.toJSON = function() {
            return {
              type: "Buffer",
              data: Array.prototype.slice.call(this._arr || this, 0)
            };
          });
        function x(e, t, r) {
          var n = "";
          r = Math.min(e.length, r);
          for (var i = t; i < r; ++i) n += String.fromCharCode(127 & e[i]);
          return n;
        }
        function A(e, t, r) {
          var n = "";
          r = Math.min(e.length, r);
          for (var i = t; i < r; ++i) n += String.fromCharCode(e[i]);
          return n;
        }
        function j(e, t, r) {
          var n = e.length;
          (!t || t < 0) && (t = 0), (!r || r < 0 || r > n) && (r = n);
          for (var i = "", s = t; s < r; ++s) i += F(e[s]);
          return i;
        }
        function O(e, t, r) {
          for (var n = e.slice(t, r), i = "", s = 0; s < n.length; s += 2)
            i += String.fromCharCode(n[s] + 256 * n[s + 1]);
          return i;
        }
        function S(e, t, r) {
          if (e % 1 != 0 || e < 0) throw new RangeError("offset is not uint");
          if (e + t > r)
            throw new RangeError("Trying to access beyond buffer length");
        }
        function C(e, t, r, n, i, s) {
          if (!p.isBuffer(e))
            throw new TypeError('"buffer" argument must be a Buffer instance');
          if (t > i || t < s)
            throw new RangeError('"value" argument is out of bounds');
          if (r + n > e.length) throw new RangeError("Index out of range");
        }
        function R(e, t, r, n) {
          t < 0 && (t = 65535 + t + 1);
          for (var i = 0, s = Math.min(e.length - r, 2); i < s; ++i)
            e[r + i] =
              (t & (255 << (8 * (n ? i : 1 - i)))) >>> (8 * (n ? i : 1 - i));
        }
        function I(e, t, r, n) {
          t < 0 && (t = 4294967295 + t + 1);
          for (var i = 0, s = Math.min(e.length - r, 4); i < s; ++i)
            e[r + i] = (t >>> (8 * (n ? i : 3 - i))) & 255;
        }
        function D(e, t, r, n, i, s) {
          if (r + n > e.length) throw new RangeError("Index out of range");
          if (r < 0) throw new RangeError("Index out of range");
        }
        function L(e, t, r, n, s) {
          return s || D(e, 0, r, 4), i.write(e, t, r, n, 23, 4), r + 4;
        }
        function G(e, t, r, n, s) {
          return s || D(e, 0, r, 8), i.write(e, t, r, n, 52, 8), r + 8;
        }
        (p.prototype.slice = function(e, t) {
          var r,
            n = this.length;
          if (
            ((e = ~~e) < 0 ? (e += n) < 0 && (e = 0) : e > n && (e = n),
            (t = void 0 === t ? n : ~~t) < 0
              ? (t += n) < 0 && (t = 0)
              : t > n && (t = n),
            t < e && (t = e),
            p.TYPED_ARRAY_SUPPORT)
          )
            (r = this.subarray(e, t)).__proto__ = p.prototype;
          else {
            var i = t - e;
            r = new p(i, void 0);
            for (var s = 0; s < i; ++s) r[s] = this[s + e];
          }
          return r;
        }),
          (p.prototype.readUIntLE = function(e, t, r) {
            (e |= 0), (t |= 0), r || S(e, t, this.length);
            for (var n = this[e], i = 1, s = 0; ++s < t && (i *= 256); )
              n += this[e + s] * i;
            return n;
          }),
          (p.prototype.readUIntBE = function(e, t, r) {
            (e |= 0), (t |= 0), r || S(e, t, this.length);
            for (var n = this[e + --t], i = 1; t > 0 && (i *= 256); )
              n += this[e + --t] * i;
            return n;
          }),
          (p.prototype.readUInt8 = function(e, t) {
            return t || S(e, 1, this.length), this[e];
          }),
          (p.prototype.readUInt16LE = function(e, t) {
            return t || S(e, 2, this.length), this[e] | (this[e + 1] << 8);
          }),
          (p.prototype.readUInt16BE = function(e, t) {
            return t || S(e, 2, this.length), (this[e] << 8) | this[e + 1];
          }),
          (p.prototype.readUInt32LE = function(e, t) {
            return (
              t || S(e, 4, this.length),
              (this[e] | (this[e + 1] << 8) | (this[e + 2] << 16)) +
                16777216 * this[e + 3]
            );
          }),
          (p.prototype.readUInt32BE = function(e, t) {
            return (
              t || S(e, 4, this.length),
              16777216 * this[e] +
                ((this[e + 1] << 16) | (this[e + 2] << 8) | this[e + 3])
            );
          }),
          (p.prototype.readIntLE = function(e, t, r) {
            (e |= 0), (t |= 0), r || S(e, t, this.length);
            for (var n = this[e], i = 1, s = 0; ++s < t && (i *= 256); )
              n += this[e + s] * i;
            return n >= (i *= 128) && (n -= Math.pow(2, 8 * t)), n;
          }),
          (p.prototype.readIntBE = function(e, t, r) {
            (e |= 0), (t |= 0), r || S(e, t, this.length);
            for (var n = t, i = 1, s = this[e + --n]; n > 0 && (i *= 256); )
              s += this[e + --n] * i;
            return s >= (i *= 128) && (s -= Math.pow(2, 8 * t)), s;
          }),
          (p.prototype.readInt8 = function(e, t) {
            return (
              t || S(e, 1, this.length),
              128 & this[e] ? -1 * (255 - this[e] + 1) : this[e]
            );
          }),
          (p.prototype.readInt16LE = function(e, t) {
            t || S(e, 2, this.length);
            var r = this[e] | (this[e + 1] << 8);
            return 32768 & r ? 4294901760 | r : r;
          }),
          (p.prototype.readInt16BE = function(e, t) {
            t || S(e, 2, this.length);
            var r = this[e + 1] | (this[e] << 8);
            return 32768 & r ? 4294901760 | r : r;
          }),
          (p.prototype.readInt32LE = function(e, t) {
            return (
              t || S(e, 4, this.length),
              this[e] |
                (this[e + 1] << 8) |
                (this[e + 2] << 16) |
                (this[e + 3] << 24)
            );
          }),
          (p.prototype.readInt32BE = function(e, t) {
            return (
              t || S(e, 4, this.length),
              (this[e] << 24) |
                (this[e + 1] << 16) |
                (this[e + 2] << 8) |
                this[e + 3]
            );
          }),
          (p.prototype.readFloatLE = function(e, t) {
            return t || S(e, 4, this.length), i.read(this, e, !0, 23, 4);
          }),
          (p.prototype.readFloatBE = function(e, t) {
            return t || S(e, 4, this.length), i.read(this, e, !1, 23, 4);
          }),
          (p.prototype.readDoubleLE = function(e, t) {
            return t || S(e, 8, this.length), i.read(this, e, !0, 52, 8);
          }),
          (p.prototype.readDoubleBE = function(e, t) {
            return t || S(e, 8, this.length), i.read(this, e, !1, 52, 8);
          }),
          (p.prototype.writeUIntLE = function(e, t, r, n) {
            ((e = +e), (t |= 0), (r |= 0), n) ||
              C(this, e, t, r, Math.pow(2, 8 * r) - 1, 0);
            var i = 1,
              s = 0;
            for (this[t] = 255 & e; ++s < r && (i *= 256); )
              this[t + s] = (e / i) & 255;
            return t + r;
          }),
          (p.prototype.writeUIntBE = function(e, t, r, n) {
            ((e = +e), (t |= 0), (r |= 0), n) ||
              C(this, e, t, r, Math.pow(2, 8 * r) - 1, 0);
            var i = r - 1,
              s = 1;
            for (this[t + i] = 255 & e; --i >= 0 && (s *= 256); )
              this[t + i] = (e / s) & 255;
            return t + r;
          }),
          (p.prototype.writeUInt8 = function(e, t, r) {
            return (
              (e = +e),
              (t |= 0),
              r || C(this, e, t, 1, 255, 0),
              p.TYPED_ARRAY_SUPPORT || (e = Math.floor(e)),
              (this[t] = 255 & e),
              t + 1
            );
          }),
          (p.prototype.writeUInt16LE = function(e, t, r) {
            return (
              (e = +e),
              (t |= 0),
              r || C(this, e, t, 2, 65535, 0),
              p.TYPED_ARRAY_SUPPORT
                ? ((this[t] = 255 & e), (this[t + 1] = e >>> 8))
                : R(this, e, t, !0),
              t + 2
            );
          }),
          (p.prototype.writeUInt16BE = function(e, t, r) {
            return (
              (e = +e),
              (t |= 0),
              r || C(this, e, t, 2, 65535, 0),
              p.TYPED_ARRAY_SUPPORT
                ? ((this[t] = e >>> 8), (this[t + 1] = 255 & e))
                : R(this, e, t, !1),
              t + 2
            );
          }),
          (p.prototype.writeUInt32LE = function(e, t, r) {
            return (
              (e = +e),
              (t |= 0),
              r || C(this, e, t, 4, 4294967295, 0),
              p.TYPED_ARRAY_SUPPORT
                ? ((this[t + 3] = e >>> 24),
                  (this[t + 2] = e >>> 16),
                  (this[t + 1] = e >>> 8),
                  (this[t] = 255 & e))
                : I(this, e, t, !0),
              t + 4
            );
          }),
          (p.prototype.writeUInt32BE = function(e, t, r) {
            return (
              (e = +e),
              (t |= 0),
              r || C(this, e, t, 4, 4294967295, 0),
              p.TYPED_ARRAY_SUPPORT
                ? ((this[t] = e >>> 24),
                  (this[t + 1] = e >>> 16),
                  (this[t + 2] = e >>> 8),
                  (this[t + 3] = 255 & e))
                : I(this, e, t, !1),
              t + 4
            );
          }),
          (p.prototype.writeIntLE = function(e, t, r, n) {
            if (((e = +e), (t |= 0), !n)) {
              var i = Math.pow(2, 8 * r - 1);
              C(this, e, t, r, i - 1, -i);
            }
            var s = 0,
              o = 1,
              a = 0;
            for (this[t] = 255 & e; ++s < r && (o *= 256); )
              e < 0 && 0 === a && 0 !== this[t + s - 1] && (a = 1),
                (this[t + s] = (((e / o) >> 0) - a) & 255);
            return t + r;
          }),
          (p.prototype.writeIntBE = function(e, t, r, n) {
            if (((e = +e), (t |= 0), !n)) {
              var i = Math.pow(2, 8 * r - 1);
              C(this, e, t, r, i - 1, -i);
            }
            var s = r - 1,
              o = 1,
              a = 0;
            for (this[t + s] = 255 & e; --s >= 0 && (o *= 256); )
              e < 0 && 0 === a && 0 !== this[t + s + 1] && (a = 1),
                (this[t + s] = (((e / o) >> 0) - a) & 255);
            return t + r;
          }),
          (p.prototype.writeInt8 = function(e, t, r) {
            return (
              (e = +e),
              (t |= 0),
              r || C(this, e, t, 1, 127, -128),
              p.TYPED_ARRAY_SUPPORT || (e = Math.floor(e)),
              e < 0 && (e = 255 + e + 1),
              (this[t] = 255 & e),
              t + 1
            );
          }),
          (p.prototype.writeInt16LE = function(e, t, r) {
            return (
              (e = +e),
              (t |= 0),
              r || C(this, e, t, 2, 32767, -32768),
              p.TYPED_ARRAY_SUPPORT
                ? ((this[t] = 255 & e), (this[t + 1] = e >>> 8))
                : R(this, e, t, !0),
              t + 2
            );
          }),
          (p.prototype.writeInt16BE = function(e, t, r) {
            return (
              (e = +e),
              (t |= 0),
              r || C(this, e, t, 2, 32767, -32768),
              p.TYPED_ARRAY_SUPPORT
                ? ((this[t] = e >>> 8), (this[t + 1] = 255 & e))
                : R(this, e, t, !1),
              t + 2
            );
          }),
          (p.prototype.writeInt32LE = function(e, t, r) {
            return (
              (e = +e),
              (t |= 0),
              r || C(this, e, t, 4, 2147483647, -2147483648),
              p.TYPED_ARRAY_SUPPORT
                ? ((this[t] = 255 & e),
                  (this[t + 1] = e >>> 8),
                  (this[t + 2] = e >>> 16),
                  (this[t + 3] = e >>> 24))
                : I(this, e, t, !0),
              t + 4
            );
          }),
          (p.prototype.writeInt32BE = function(e, t, r) {
            return (
              (e = +e),
              (t |= 0),
              r || C(this, e, t, 4, 2147483647, -2147483648),
              e < 0 && (e = 4294967295 + e + 1),
              p.TYPED_ARRAY_SUPPORT
                ? ((this[t] = e >>> 24),
                  (this[t + 1] = e >>> 16),
                  (this[t + 2] = e >>> 8),
                  (this[t + 3] = 255 & e))
                : I(this, e, t, !1),
              t + 4
            );
          }),
          (p.prototype.writeFloatLE = function(e, t, r) {
            return L(this, e, t, !0, r);
          }),
          (p.prototype.writeFloatBE = function(e, t, r) {
            return L(this, e, t, !1, r);
          }),
          (p.prototype.writeDoubleLE = function(e, t, r) {
            return G(this, e, t, !0, r);
          }),
          (p.prototype.writeDoubleBE = function(e, t, r) {
            return G(this, e, t, !1, r);
          }),
          (p.prototype.copy = function(e, t, r, n) {
            if (
              (r || (r = 0),
              n || 0 === n || (n = this.length),
              t >= e.length && (t = e.length),
              t || (t = 0),
              n > 0 && n < r && (n = r),
              n === r)
            )
              return 0;
            if (0 === e.length || 0 === this.length) return 0;
            if (t < 0) throw new RangeError("targetStart out of bounds");
            if (r < 0 || r >= this.length)
              throw new RangeError("sourceStart out of bounds");
            if (n < 0) throw new RangeError("sourceEnd out of bounds");
            n > this.length && (n = this.length),
              e.length - t < n - r && (n = e.length - t + r);
            var i,
              s = n - r;
            if (this === e && r < t && t < n)
              for (i = s - 1; i >= 0; --i) e[i + t] = this[i + r];
            else if (s < 1e3 || !p.TYPED_ARRAY_SUPPORT)
              for (i = 0; i < s; ++i) e[i + t] = this[i + r];
            else Uint8Array.prototype.set.call(e, this.subarray(r, r + s), t);
            return s;
          }),
          (p.prototype.fill = function(e, t, r, n) {
            if ("string" == typeof e) {
              if (
                ("string" == typeof t
                  ? ((n = t), (t = 0), (r = this.length))
                  : "string" == typeof r && ((n = r), (r = this.length)),
                1 === e.length)
              ) {
                var i = e.charCodeAt(0);
                i < 256 && (e = i);
              }
              if (void 0 !== n && "string" != typeof n)
                throw new TypeError("encoding must be a string");
              if ("string" == typeof n && !p.isEncoding(n))
                throw new TypeError("Unknown encoding: " + n);
            } else "number" == typeof e && (e &= 255);
            if (t < 0 || this.length < t || this.length < r)
              throw new RangeError("Out of range index");
            if (r <= t) return this;
            var s;
            if (
              ((t >>>= 0),
              (r = void 0 === r ? this.length : r >>> 0),
              e || (e = 0),
              "number" == typeof e)
            )
              for (s = t; s < r; ++s) this[s] = e;
            else {
              var o = p.isBuffer(e) ? e : U(new p(e, n).toString()),
                a = o.length;
              for (s = 0; s < r - t; ++s) this[s + t] = o[s % a];
            }
            return this;
          });
        var z = /[^+\/0-9A-Za-z-_]/g;
        function F(e) {
          return e < 16 ? "0" + e.toString(16) : e.toString(16);
        }
        function U(e, t) {
          var r;
          t = t || 1 / 0;
          for (var n = e.length, i = null, s = [], o = 0; o < n; ++o) {
            if ((r = e.charCodeAt(o)) > 55295 && r < 57344) {
              if (!i) {
                if (r > 56319) {
                  (t -= 3) > -1 && s.push(239, 191, 189);
                  continue;
                }
                if (o + 1 === n) {
                  (t -= 3) > -1 && s.push(239, 191, 189);
                  continue;
                }
                i = r;
                continue;
              }
              if (r < 56320) {
                (t -= 3) > -1 && s.push(239, 191, 189), (i = r);
                continue;
              }
              r = 65536 + (((i - 55296) << 10) | (r - 56320));
            } else i && (t -= 3) > -1 && s.push(239, 191, 189);
            if (((i = null), r < 128)) {
              if ((t -= 1) < 0) break;
              s.push(r);
            } else if (r < 2048) {
              if ((t -= 2) < 0) break;
              s.push((r >> 6) | 192, (63 & r) | 128);
            } else if (r < 65536) {
              if ((t -= 3) < 0) break;
              s.push((r >> 12) | 224, ((r >> 6) & 63) | 128, (63 & r) | 128);
            } else {
              if (!(r < 1114112)) throw new Error("Invalid code point");
              if ((t -= 4) < 0) break;
              s.push(
                (r >> 18) | 240,
                ((r >> 12) & 63) | 128,
                ((r >> 6) & 63) | 128,
                (63 & r) | 128
              );
            }
          }
          return s;
        }
        function B(e) {
          return n.toByteArray(
            (function(e) {
              if (
                (e = (function(e) {
                  return e.trim ? e.trim() : e.replace(/^\s+|\s+$/g, "");
                })(e).replace(z, "")).length < 2
              )
                return "";
              for (; e.length % 4 != 0; ) e += "=";
              return e;
            })(e)
          );
        }
        function M(e, t, r, n) {
          for (var i = 0; i < n && !(i + r >= t.length || i >= e.length); ++i)
            t[i + r] = e[i];
          return i;
        }
      }.call(this, r(6)));
    },
    function(e, t, r) {
      "use strict";
      (t.byteLength = function(e) {
        var t = u(e),
          r = t[0],
          n = t[1];
        return (3 * (r + n)) / 4 - n;
      }),
        (t.toByteArray = function(e) {
          var t,
            r,
            n = u(e),
            o = n[0],
            a = n[1],
            p = new s(
              (function(e, t, r) {
                return (3 * (t + r)) / 4 - r;
              })(0, o, a)
            ),
            c = 0,
            d = a > 0 ? o - 4 : o;
          for (r = 0; r < d; r += 4)
            (t =
              (i[e.charCodeAt(r)] << 18) |
              (i[e.charCodeAt(r + 1)] << 12) |
              (i[e.charCodeAt(r + 2)] << 6) |
              i[e.charCodeAt(r + 3)]),
              (p[c++] = (t >> 16) & 255),
              (p[c++] = (t >> 8) & 255),
              (p[c++] = 255 & t);
          2 === a &&
            ((t = (i[e.charCodeAt(r)] << 2) | (i[e.charCodeAt(r + 1)] >> 4)),
            (p[c++] = 255 & t));
          1 === a &&
            ((t =
              (i[e.charCodeAt(r)] << 10) |
              (i[e.charCodeAt(r + 1)] << 4) |
              (i[e.charCodeAt(r + 2)] >> 2)),
            (p[c++] = (t >> 8) & 255),
            (p[c++] = 255 & t));
          return p;
        }),
        (t.fromByteArray = function(e) {
          for (
            var t, r = e.length, i = r % 3, s = [], o = 0, a = r - i;
            o < a;
            o += 16383
          )
            s.push(c(e, o, o + 16383 > a ? a : o + 16383));
          1 === i
            ? ((t = e[r - 1]), s.push(n[t >> 2] + n[(t << 4) & 63] + "=="))
            : 2 === i &&
              ((t = (e[r - 2] << 8) + e[r - 1]),
              s.push(n[t >> 10] + n[(t >> 4) & 63] + n[(t << 2) & 63] + "="));
          return s.join("");
        });
      for (
        var n = [],
          i = [],
          s = "undefined" != typeof Uint8Array ? Uint8Array : Array,
          o =
            "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",
          a = 0,
          p = o.length;
        a < p;
        ++a
      )
        (n[a] = o[a]), (i[o.charCodeAt(a)] = a);
      function u(e) {
        var t = e.length;
        if (t % 4 > 0)
          throw new Error("Invalid string. Length must be a multiple of 4");
        var r = e.indexOf("=");
        return -1 === r && (r = t), [r, r === t ? 0 : 4 - (r % 4)];
      }
      function c(e, t, r) {
        for (var i, s, o = [], a = t; a < r; a += 3)
          (i =
            ((e[a] << 16) & 16711680) +
            ((e[a + 1] << 8) & 65280) +
            (255 & e[a + 2])),
            o.push(
              n[((s = i) >> 18) & 63] +
                n[(s >> 12) & 63] +
                n[(s >> 6) & 63] +
                n[63 & s]
            );
        return o.join("");
      }
      (i["-".charCodeAt(0)] = 62), (i["_".charCodeAt(0)] = 63);
    },
    function(e, t) {
      (t.read = function(e, t, r, n, i) {
        var s,
          o,
          a = 8 * i - n - 1,
          p = (1 << a) - 1,
          u = p >> 1,
          c = -7,
          d = r ? i - 1 : 0,
          l = r ? -1 : 1,
          h = e[t + d];
        for (
          d += l, s = h & ((1 << -c) - 1), h >>= -c, c += a;
          c > 0;
          s = 256 * s + e[t + d], d += l, c -= 8
        );
        for (
          o = s & ((1 << -c) - 1), s >>= -c, c += n;
          c > 0;
          o = 256 * o + e[t + d], d += l, c -= 8
        );
        if (0 === s) s = 1 - u;
        else {
          if (s === p) return o ? NaN : (1 / 0) * (h ? -1 : 1);
          (o += Math.pow(2, n)), (s -= u);
        }
        return (h ? -1 : 1) * o * Math.pow(2, s - n);
      }),
        (t.write = function(e, t, r, n, i, s) {
          var o,
            a,
            p,
            u = 8 * s - i - 1,
            c = (1 << u) - 1,
            d = c >> 1,
            l = 23 === i ? Math.pow(2, -24) - Math.pow(2, -77) : 0,
            h = n ? 0 : s - 1,
            m = n ? 1 : -1,
            g = t < 0 || (0 === t && 1 / t < 0) ? 1 : 0;
          for (
            t = Math.abs(t),
              isNaN(t) || t === 1 / 0
                ? ((a = isNaN(t) ? 1 : 0), (o = c))
                : ((o = Math.floor(Math.log(t) / Math.LN2)),
                  t * (p = Math.pow(2, -o)) < 1 && (o--, (p *= 2)),
                  (t += o + d >= 1 ? l / p : l * Math.pow(2, 1 - d)) * p >= 2 &&
                    (o++, (p /= 2)),
                  o + d >= c
                    ? ((a = 0), (o = c))
                    : o + d >= 1
                    ? ((a = (t * p - 1) * Math.pow(2, i)), (o += d))
                    : ((a = t * Math.pow(2, d - 1) * Math.pow(2, i)), (o = 0)));
            i >= 8;
            e[r + h] = 255 & a, h += m, a /= 256, i -= 8
          );
          for (
            o = (o << i) | a, u += i;
            u > 0;
            e[r + h] = 255 & o, h += m, o /= 256, u -= 8
          );
          e[r + h - m] |= 128 * g;
        });
    },
    function(e, t) {
      var r = {}.toString;
      e.exports =
        Array.isArray ||
        function(e) {
          return "[object Array]" == r.call(e);
        };
    },
    function(e, t, r) {
      (function(e) {
        var n =
            (void 0 !== e && e) ||
            ("undefined" != typeof self && self) ||
            window,
          i = Function.prototype.apply;
        function s(e, t) {
          (this._id = e), (this._clearFn = t);
        }
        (t.setTimeout = function() {
          return new s(i.call(setTimeout, n, arguments), clearTimeout);
        }),
          (t.setInterval = function() {
            return new s(i.call(setInterval, n, arguments), clearInterval);
          }),
          (t.clearTimeout = t.clearInterval = function(e) {
            e && e.close();
          }),
          (s.prototype.unref = s.prototype.ref = function() {}),
          (s.prototype.close = function() {
            this._clearFn.call(n, this._id);
          }),
          (t.enroll = function(e, t) {
            clearTimeout(e._idleTimeoutId), (e._idleTimeout = t);
          }),
          (t.unenroll = function(e) {
            clearTimeout(e._idleTimeoutId), (e._idleTimeout = -1);
          }),
          (t._unrefActive = t.active = function(e) {
            clearTimeout(e._idleTimeoutId);
            var t = e._idleTimeout;
            t >= 0 &&
              (e._idleTimeoutId = setTimeout(function() {
                e._onTimeout && e._onTimeout();
              }, t));
          }),
          r(100),
          (t.setImmediate =
            ("undefined" != typeof self && self.setImmediate) ||
            (void 0 !== e && e.setImmediate) ||
            (this && this.setImmediate)),
          (t.clearImmediate =
            ("undefined" != typeof self && self.clearImmediate) ||
            (void 0 !== e && e.clearImmediate) ||
            (this && this.clearImmediate));
      }.call(this, r(6)));
    },
    function(e, t, r) {
      (function(e, t) {
        !(function(e, r) {
          "use strict";
          if (!e.setImmediate) {
            var n,
              i,
              s,
              o,
              a,
              p = 1,
              u = {},
              c = !1,
              d = e.document,
              l = Object.getPrototypeOf && Object.getPrototypeOf(e);
            (l = l && l.setTimeout ? l : e),
              "[object process]" === {}.toString.call(e.process)
                ? (n = function(e) {
                    t.nextTick(function() {
                      m(e);
                    });
                  })
                : !(function() {
                    if (e.postMessage && !e.importScripts) {
                      var t = !0,
                        r = e.onmessage;
                      return (
                        (e.onmessage = function() {
                          t = !1;
                        }),
                        e.postMessage("", "*"),
                        (e.onmessage = r),
                        t
                      );
                    }
                  })()
                ? e.MessageChannel
                  ? (((s = new MessageChannel()).port1.onmessage = function(e) {
                      m(e.data);
                    }),
                    (n = function(e) {
                      s.port2.postMessage(e);
                    }))
                  : d && "onreadystatechange" in d.createElement("script")
                  ? ((i = d.documentElement),
                    (n = function(e) {
                      var t = d.createElement("script");
                      (t.onreadystatechange = function() {
                        m(e),
                          (t.onreadystatechange = null),
                          i.removeChild(t),
                          (t = null);
                      }),
                        i.appendChild(t);
                    }))
                  : (n = function(e) {
                      setTimeout(m, 0, e);
                    })
                : ((o = "setImmediate$" + Math.random() + "$"),
                  (a = function(t) {
                    t.source === e &&
                      "string" == typeof t.data &&
                      0 === t.data.indexOf(o) &&
                      m(+t.data.slice(o.length));
                  }),
                  e.addEventListener
                    ? e.addEventListener("message", a, !1)
                    : e.attachEvent("onmessage", a),
                  (n = function(t) {
                    e.postMessage(o + t, "*");
                  })),
              (l.setImmediate = function(e) {
                "function" != typeof e && (e = new Function("" + e));
                for (
                  var t = new Array(arguments.length - 1), r = 0;
                  r < t.length;
                  r++
                )
                  t[r] = arguments[r + 1];
                var i = { callback: e, args: t };
                return (u[p] = i), n(p), p++;
              }),
              (l.clearImmediate = h);
          }
          function h(e) {
            delete u[e];
          }
          function m(e) {
            if (c) setTimeout(m, 0, e);
            else {
              var t = u[e];
              if (t) {
                c = !0;
                try {
                  !(function(e) {
                    var t = e.callback,
                      r = e.args;
                    switch (r.length) {
                      case 0:
                        t();
                        break;
                      case 1:
                        t(r[0]);
                        break;
                      case 2:
                        t(r[0], r[1]);
                        break;
                      case 3:
                        t(r[0], r[1], r[2]);
                        break;
                      default:
                        t.apply(void 0, r);
                    }
                  })(t);
                } finally {
                  h(e), (c = !1);
                }
              }
            }
          }
        })("undefined" == typeof self ? (void 0 === e ? this : e) : self);
      }.call(this, r(6), r(101)));
    },
    function(e, t) {
      var r,
        n,
        i = (e.exports = {});
      function s() {
        throw new Error("setTimeout has not been defined");
      }
      function o() {
        throw new Error("clearTimeout has not been defined");
      }
      function a(e) {
        if (r === setTimeout) return setTimeout(e, 0);
        if ((r === s || !r) && setTimeout)
          return (r = setTimeout), setTimeout(e, 0);
        try {
          return r(e, 0);
        } catch (t) {
          try {
            return r.call(null, e, 0);
          } catch (t) {
            return r.call(this, e, 0);
          }
        }
      }
      !(function() {
        try {
          r = "function" == typeof setTimeout ? setTimeout : s;
        } catch (e) {
          r = s;
        }
        try {
          n = "function" == typeof clearTimeout ? clearTimeout : o;
        } catch (e) {
          n = o;
        }
      })();
      var p,
        u = [],
        c = !1,
        d = -1;
      function l() {
        c &&
          p &&
          ((c = !1), p.length ? (u = p.concat(u)) : (d = -1), u.length && h());
      }
      function h() {
        if (!c) {
          var e = a(l);
          c = !0;
          for (var t = u.length; t; ) {
            for (p = u, u = []; ++d < t; ) p && p[d].run();
            (d = -1), (t = u.length);
          }
          (p = null),
            (c = !1),
            (function(e) {
              if (n === clearTimeout) return clearTimeout(e);
              if ((n === o || !n) && clearTimeout)
                return (n = clearTimeout), clearTimeout(e);
              try {
                n(e);
              } catch (t) {
                try {
                  return n.call(null, e);
                } catch (t) {
                  return n.call(this, e);
                }
              }
            })(e);
        }
      }
      function m(e, t) {
        (this.fun = e), (this.array = t);
      }
      function g() {}
      (i.nextTick = function(e) {
        var t = new Array(arguments.length - 1);
        if (arguments.length > 1)
          for (var r = 1; r < arguments.length; r++) t[r - 1] = arguments[r];
        u.push(new m(e, t)), 1 !== u.length || c || a(h);
      }),
        (m.prototype.run = function() {
          this.fun.apply(null, this.array);
        }),
        (i.title = "browser"),
        (i.browser = !0),
        (i.env = {}),
        (i.argv = []),
        (i.version = ""),
        (i.versions = {}),
        (i.on = g),
        (i.addListener = g),
        (i.once = g),
        (i.off = g),
        (i.removeListener = g),
        (i.removeAllListeners = g),
        (i.emit = g),
        (i.prependListener = g),
        (i.prependOnceListener = g),
        (i.listeners = function(e) {
          return [];
        }),
        (i.binding = function(e) {
          throw new Error("process.binding is not supported");
        }),
        (i.cwd = function() {
          return "/";
        }),
        (i.chdir = function(e) {
          throw new Error("process.chdir is not supported");
        }),
        (i.umask = function() {
          return 0;
        });
    },
    function(e, t, r) {
      "use strict";
      r.r(t),
        r.d(t, "LocationModule", function() {
          return u;
        }),
        r.d(t, "MATRIX_3X3_HAMMING_63", function() {
          return V;
        }),
        r.d(t, "MATRIX_3X3_PARITY_65", function() {
          return K;
        }),
        r.d(t, "MATRIX_4X4_BCH_1355", function() {
          return X;
        }),
        r.d(t, "MATRIX_4X4_BCH_1393", function() {
          return J;
        }),
        r.d(t, "MATRIX_5X5_BCH_2277", function() {
          return Q;
        }),
        r.d(t, "MATRIX_5X5_BCH_22125", function() {
          return ee;
        }),
        r.d(t, "ASSET_3D", function() {
          return me;
        }),
        r.d(t, "ASSET_IMAGE", function() {
          return ge;
        }),
        r.d(t, "ASSET_AUDIO", function() {
          return ye;
        }),
        r.d(t, "ASSET_VIDEO", function() {
          return fe;
        }),
        r.d(t, "MarkerModule", function() {
          return be;
        }),
        r.d(t, "AR_BARCODE", function() {
          return we;
        }),
        r.d(t, "AR_PATTERN", function() {
          return ve;
        }),
        r.d(t, "AR_LOCATION", function() {
          return qe;
        }),
        r.d(t, "AR_NTF", function() {
          return ke;
        }),
        r.d(t, "Package", function() {
          return Te;
        }),
        r.d(t, "NFTModule", function() {
          return Pe;
        }),
        r.d(t, "ENC_BASE64", function() {
          return y;
        }),
        r.d(t, "ENC_UTF8", function() {
          return g;
        }),
        r.d(t, "ENC_BINARY", function() {
          return G;
        }),
        r.d(t, "GithubProvider", function() {
          return j;
        }),
        r.d(t, "ZIP_TYPE_BASE64", function() {
          return z;
        }),
        r.d(t, "ZIP_TYPE_BINARY_STRING", function() {
          return F;
        }),
        r.d(t, "ZIP_TYPE_ARRAY", function() {
          return U;
        }),
        r.d(t, "ZIP_TYPE_UINT8_ARRAY", function() {
          return B;
        }),
        r.d(t, "ZIP_TYPE_ARRAY_BUFFER", function() {
          return M;
        }),
        r.d(t, "ZIP_TYPE_BLOB", function() {
          return N;
        }),
        r.d(t, "ZIP_TYPE_NODE_BUFFER", function() {
          return H;
        }),
        r.d(t, "ZipProvider", function() {
          return W;
        });
      r(20);
      var n = r(1),
        i = r.n(n),
        s = r(2),
        o = r.n(s),
        a = r(28),
        p = r.n(a),
        u = (function() {
          function e() {
            i()(this, e);
          }
          return (
            o()(e, null, [
              {
                key: "generateLocation3dHtml",
                value: function(e, t, r) {
                  return p()({ longitude: e, latitude: t, assetSrc: r });
                }
              }
            ]),
            e
          );
        })(),
        c = r(0),
        d = r.n(c),
        l = r(3),
        h = r.n(l),
        m = function(e) {
          var t = new Image(),
            r = new Promise(function(e, r) {
              t.addEventListener("load", function() {
                e(t);
              }),
                t.addEventListener("error", function() {
                  r("Error loading image");
                });
            });
          return (t.src = e), r;
        },
        g = "utf-8",
        y = "base64",
        f = (function() {
          function e() {
            i()(this, e), (this.files = []);
          }
          var t;
          return (
            o()(e, [
              {
                key: "addFile",
                value: function(e, t) {
                  var r =
                    arguments.length > 2 && void 0 !== arguments[2]
                      ? arguments[2]
                      : null;
                  this.files.push({ path: e, content: t, encoding: r });
                }
              },
              {
                key: "clearFiles",
                value: function() {
                  this.files = [];
                }
              },
              {
                key: "serveFiles",
                value:
                  ((t = h()(
                    d.a.mark(function e() {
                      return d.a.wrap(
                        function(e) {
                          for (;;)
                            switch ((e.prev = e.next)) {
                              case 0:
                                if (0 !== this.files.length) {
                                  e.next = 2;
                                  break;
                                }
                                throw new Error("No files to serve");
                              case 2:
                              case "end":
                                return e.stop();
                            }
                        },
                        e,
                        this
                      );
                    })
                  )),
                  function() {
                    return t.apply(this, arguments);
                  })
              }
            ]),
            e
          );
        })(),
        _ = r(15),
        b = r.n(_),
        w = r(16),
        v = r.n(w),
        q = r(17),
        k = r.n(q),
        E = r(7),
        T = r.n(E),
        P = r(29);
      function x() {
        if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
        if (Reflect.construct.sham) return !1;
        if ("function" == typeof Proxy) return !0;
        try {
          return (
            Date.prototype.toString.call(
              Reflect.construct(Date, [], function() {})
            ),
            !0
          );
        } catch (e) {
          return !1;
        }
      }
      var A = function() {
          return "arjs-studio-".concat(
            Math.floor(899999 * Math.random()) + 1e5
          );
        },
        j = (function(e) {
          v()(p, e);
          var t,
            r,
            n,
            s,
            a =
              ((t = p),
              function() {
                var e,
                  r = T()(t);
                if (x()) {
                  var n = T()(this).constructor;
                  e = Reflect.construct(r, arguments, n);
                } else e = r.apply(this, arguments);
                return k()(this, e);
              });
          function p() {
            return i()(this, p), a.apply(this, arguments);
          }
          return (
            o()(p, [
              {
                key: "addFile",
                value: function(e, t) {
                  var r =
                    arguments.length > 2 && void 0 !== arguments[2]
                      ? arguments[2]
                      : g;
                  this.files.push({ content: t, encoding: r, path: e });
                }
              },
              {
                key: "serveFiles",
                value:
                  ((s = h()(
                    d.a.mark(function e() {
                      var t,
                        r,
                        n,
                        i,
                        s,
                        o,
                        a,
                        u,
                        c,
                        l,
                        h,
                        m,
                        g,
                        y,
                        f = this,
                        _ = arguments;
                      return d.a.wrap(
                        function(e) {
                          for (;;)
                            switch ((e.prev = e.next)) {
                              case 0:
                                return (
                                  (t =
                                    _.length > 0 && void 0 !== _[0]
                                      ? _[0]
                                      : {}),
                                  (r = t.token),
                                  (n = t.message),
                                  (i =
                                    void 0 === n
                                      ? "built with AR.js Studio"
                                      : n),
                                  (s = t.repo),
                                  (o = void 0 === s ? null : s),
                                  (a = t.branch),
                                  (u = void 0 === a ? null : a),
                                  (c = t.owner),
                                  (l = void 0 === c ? null : c),
                                  (e.next = 3),
                                  b()(
                                    T()(p.prototype),
                                    "serveFiles",
                                    this
                                  ).call(this)
                                );
                              case 3:
                                if (r) {
                                  e.next = 5;
                                  break;
                                }
                                throw new Error(
                                  "Missing required token parameter"
                                );
                              case 5:
                                if (
                                  ((this.client = new P.Octokit({ auth: r })),
                                  (e.t0 = l),
                                  e.t0)
                                ) {
                                  e.next = 11;
                                  break;
                                }
                                return (e.next = 10), this.getOwner();
                              case 10:
                                e.t0 = e.sent;
                              case 11:
                                return (
                                  (this.owner = e.t0),
                                  (this.repo = o || A()),
                                  (this.branch = u || "gh-pages"),
                                  (e.next = 16),
                                  this.getOrCreateRepo(this.repo)
                                );
                              case 16:
                                return (
                                  (e.next = 18),
                                  this.getOrCreateBranch(this.branch)
                                );
                              case 18:
                                return (
                                  (h = e.sent),
                                  (e.next = 21),
                                  Promise.all(
                                    this.files.map(function(e) {
                                      return f
                                        .createBlob(e.content, e.encoding)
                                        .then(function(t) {
                                          return {
                                            path: e.path,
                                            sha: t.sha,
                                            mode: "100644",
                                            type: "blob"
                                          };
                                        });
                                    })
                                  )
                                );
                              case 21:
                                return (
                                  (m = e.sent),
                                  (e.next = 24),
                                  this.createTree(m)
                                );
                              case 24:
                                return (
                                  (g = e.sent),
                                  (e.next = 27),
                                  this.createCommit(i, g.sha, [h.commit.sha])
                                );
                              case 27:
                                return (
                                  (y = e.sent),
                                  (e.next = 30),
                                  this.updateRef(y.sha, this.branch)
                                );
                              case 30:
                                if ("gh-pages" === this.branch) {
                                  e.next = 33;
                                  break;
                                }
                                return (
                                  (e.next = 33), this.enablePages(this.branch)
                                );
                              case 33:
                                return (e.next = 35), this.rebuildPages();
                              case 35:
                                return e.abrupt("return", this.getPagesUrl());
                              case 36:
                              case "end":
                                return e.stop();
                            }
                        },
                        e,
                        this
                      );
                    })
                  )),
                  function() {
                    return s.apply(this, arguments);
                  })
              },
              {
                key: "getOwner",
                value: function() {
                  return this.client.users.getAuthenticated().then(function(e) {
                    return e.data.login;
                  });
                }
              },
              {
                key: "getOrCreateRepo",
                value:
                  ((n = h()(
                    d.a.mark(function e(t) {
                      return d.a.wrap(
                        function(e) {
                          for (;;)
                            switch ((e.prev = e.next)) {
                              case 0:
                                return (
                                  (e.prev = 0), (e.next = 3), this.getRepo(t)
                                );
                              case 3:
                                return e.abrupt("return", e.sent);
                              case 6:
                                return (
                                  (e.prev = 6),
                                  (e.t0 = e.catch(0)),
                                  (e.next = 10),
                                  this.createRepo(t)
                                );
                              case 10:
                                return e.abrupt("return", e.sent);
                              case 11:
                              case "end":
                                return e.stop();
                            }
                        },
                        e,
                        this,
                        [[0, 6]]
                      );
                    })
                  )),
                  function(e) {
                    return n.apply(this, arguments);
                  })
              },
              {
                key: "getOrCreateBranch",
                value:
                  ((r = h()(
                    d.a.mark(function e(t) {
                      var r;
                      return d.a.wrap(
                        function(e) {
                          for (;;)
                            switch ((e.prev = e.next)) {
                              case 0:
                                return (
                                  (e.prev = 0), (e.next = 3), this.getBranch(t)
                                );
                              case 3:
                                return e.abrupt("return", e.sent);
                              case 6:
                                return (
                                  (e.prev = 6),
                                  (e.t0 = e.catch(0)),
                                  (e.next = 10),
                                  this.getRef("master")
                                );
                              case 10:
                                return (
                                  (r = e.sent),
                                  (e.next = 13),
                                  this.createBranch(r.object.sha, t)
                                );
                              case 13:
                                return (e.next = 15), this.getBranch(t);
                              case 15:
                                return e.abrupt("return", e.sent);
                              case 16:
                              case "end":
                                return e.stop();
                            }
                        },
                        e,
                        this,
                        [[0, 6]]
                      );
                    })
                  )),
                  function(e) {
                    return r.apply(this, arguments);
                  })
              },
              {
                key: "createRepo",
                value: function(e) {
                  return this.client.repos
                    .createForAuthenticatedUser({ name: e, auto_init: !0 })
                    .then(function(e) {
                      return e.data;
                    });
                }
              },
              {
                key: "getRepo",
                value: function(e) {
                  return this.client.repos
                    .get({ owner: this.owner, repo: e })
                    .then(function(e) {
                      return e.data;
                    });
                }
              },
              {
                key: "createBranch",
                value: function(e) {
                  var t =
                    arguments.length > 1 && void 0 !== arguments[1]
                      ? arguments[1]
                      : "gh-pages";
                  return this.client.git
                    .createRef({
                      owner: this.owner,
                      repo: this.repo,
                      ref: "refs/heads/".concat(t),
                      sha: e
                    })
                    .then(function(e) {
                      return e.data;
                    });
                }
              },
              {
                key: "getBranch",
                value: function(e) {
                  return this.client.repos
                    .getBranch({
                      owner: this.owner,
                      repo: this.repo,
                      branch: e
                    })
                    .then(function(e) {
                      return e.data;
                    });
                }
              },
              {
                key: "getRef",
                value: function() {
                  var e =
                    arguments.length > 0 && void 0 !== arguments[0]
                      ? arguments[0]
                      : "master";
                  return this.client.git
                    .getRef({
                      owner: this.owner,
                      repo: this.repo,
                      ref: "heads/".concat(e)
                    })
                    .then(function(e) {
                      return e.data;
                    });
                }
              },
              {
                key: "enablePages",
                value: function() {
                  var e =
                    arguments.length > 0 && void 0 !== arguments[0]
                      ? arguments[0]
                      : this.branch;
                  return this.client.repos.enablePagesSite({
                    owner: this.owner,
                    repo: this.repo,
                    source: { branch: e }
                  });
                }
              },
              {
                key: "rebuildPages",
                value: function() {
                  return this.client.repos
                    .requestPageBuild({ owner: this.owner, repo: this.repo })
                    .then(function(e) {
                      return e.data;
                    });
                }
              },
              {
                key: "getPagesUrl",
                value: function() {
                  return this.client.repos
                    .getPages({ owner: this.owner, repo: this.repo })
                    .then(function(e) {
                      return e.data.html_url;
                    });
                }
              },
              {
                key: "commitFile",
                value: function(e, t, r) {
                  var n =
                    arguments.length > 3 && void 0 !== arguments[3]
                      ? arguments[3]
                      : this.branch;
                  return this.client.repos
                    .createOrUpdateFile({
                      owner: this.owner,
                      repo: this.repo,
                      path: t,
                      message: r,
                      content: e,
                      branch: n
                    })
                    .then(function(e) {
                      return e.data;
                    });
                }
              },
              {
                key: "createTree",
                value: function(e) {
                  return this.client.git
                    .createTree({ owner: this.owner, repo: this.repo, tree: e })
                    .then(function(e) {
                      return e.data;
                    });
                }
              },
              {
                key: "createBlob",
                value: function(e) {
                  var t =
                    arguments.length > 1 && void 0 !== arguments[1]
                      ? arguments[1]
                      : g;
                  return this.client.git
                    .createBlob({
                      owner: this.owner,
                      repo: this.repo,
                      content: e,
                      encoding: t
                    })
                    .then(function(e) {
                      return e.data;
                    });
                }
              },
              {
                key: "createCommit",
                value: function(e, t) {
                  var r =
                    arguments.length > 2 && void 0 !== arguments[2]
                      ? arguments[2]
                      : [];
                  return this.client.git
                    .createCommit({
                      owner: this.owner,
                      repo: this.repo,
                      message: e,
                      tree: t,
                      parents: r
                    })
                    .then(function(e) {
                      return e.data;
                    });
                }
              },
              {
                key: "updateRef",
                value: function(e) {
                  var t =
                    arguments.length > 1 && void 0 !== arguments[1]
                      ? arguments[1]
                      : this.branch;
                  return this.client.git
                    .updateRef({
                      owner: this.owner,
                      repo: this.repo,
                      ref: "heads/".concat(t),
                      sha: e,
                      force: !0
                    })
                    .then(function(e) {
                      return e.data;
                    });
                }
              }
            ]),
            p
          );
        })(f),
        O = r(10),
        S = r.n(O),
        C = r(19),
        R = r.n(C);
      function I(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t &&
            (n = n.filter(function(t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            r.push.apply(r, n);
        }
        return r;
      }
      function D(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? I(Object(r), !0).forEach(function(t) {
                S()(e, t, r[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
            : I(Object(r)).forEach(function(t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(r, t)
                );
              });
        }
        return e;
      }
      function L() {
        if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
        if (Reflect.construct.sham) return !1;
        if ("function" == typeof Proxy) return !0;
        try {
          return (
            Date.prototype.toString.call(
              Reflect.construct(Date, [], function() {})
            ),
            !0
          );
        } catch (e) {
          return !1;
        }
      }
      var G = "binary",
        z = "base64",
        F = "binarystring",
        U = "array",
        B = "uint8array",
        M = "arraybuffer",
        N = "blob",
        H = "nodebuffer",
        W = (function(e) {
          v()(s, e);
          var t,
            r,
            n =
              ((t = s),
              function() {
                var e,
                  r = T()(t);
                if (L()) {
                  var n = T()(this).constructor;
                  e = Reflect.construct(r, arguments, n);
                } else e = r.apply(this, arguments);
                return k()(this, e);
              });
          function s() {
            return i()(this, s), n.apply(this, arguments);
          }
          return (
            o()(s, [
              {
                key: "addFile",
                value: function(e, t) {
                  var r =
                    arguments.length > 2 && void 0 !== arguments[2]
                      ? arguments[2]
                      : g;
                  this.files.push({ content: t, encoding: r, path: e });
                }
              },
              {
                key: "serveFiles",
                value:
                  ((r = h()(
                    d.a.mark(function e() {
                      var t,
                        r,
                        n,
                        i,
                        o,
                        a = this,
                        p = arguments;
                      return d.a.wrap(
                        function(e) {
                          for (;;)
                            switch ((e.prev = e.next)) {
                              case 0:
                                return (
                                  (t =
                                    p.length > 0 && void 0 !== p[0]
                                      ? p[0]
                                      : {}),
                                  (r = t.type),
                                  (n = void 0 === r ? z : r),
                                  (i = t.compress),
                                  (o = void 0 === i ? 0 : i),
                                  (e.next = 3),
                                  b()(
                                    T()(s.prototype),
                                    "serveFiles",
                                    this
                                  ).call(this)
                                );
                              case 3:
                                if (
                                  ((this.zip = new R.a()),
                                  -1 === [M, B, N, H].indexOf(n))
                                ) {
                                  e.next = 7;
                                  break;
                                }
                                if (R.a.support[n]) {
                                  e.next = 7;
                                  break;
                                }
                                throw new Error(
                                  "Output type not supported by browser: ".concat(
                                    n
                                  )
                                );
                              case 7:
                                return (
                                  this.files.forEach(function(e) {
                                    a.zip.file(
                                      e.path,
                                      e.content,
                                      D(
                                        { base64: e.encoding === y },
                                        e.encoding === G && { binary: !0 }
                                      )
                                    );
                                  }),
                                  e.abrupt(
                                    "return",
                                    this.zip.generateAsync({
                                      type: n,
                                      compression: o > 0 ? "DEFLATE" : "STORE",
                                      compressionOptions: { level: o }
                                    })
                                  )
                                );
                              case 9:
                              case "end":
                                return e.stop();
                            }
                        },
                        e,
                        this
                      );
                    })
                  )),
                  function() {
                    return r.apply(this, arguments);
                  })
              }
            ]),
            s
          );
        })(f);
      function $(e, t) {
        for (var r = []; e > 0; ) r.push(0 != (1 & e)), (e >>= 1);
        for (; r.length < t; ) r.push(!1);
        return r.reverse();
      }
      function Z(e, t, r, n) {
        if (!Number.isInteger(n) || n < 0 || n >= 1 << t)
          throw new Error(
            "value invalid or out of range for BCH with n = "
              .concat(e, ", k = ")
              .concat(t, ": ")
              .concat(n)
          );
        if (e <= t)
          throw new Error(
            "invalid BCH parameters: n = ".concat(e, ", k = ").concat(t)
          );
        if (r < (1 << (e - t) || r >= 1 << (e - t + 1)))
          throw new Error(
            "invalid generator polynomial for BCH with n = "
              .concat(e, ", k = ")
              .concat(t, ": ")
              .concat(r)
          );
        var i = $(
          (n << (e - t)) ^
            (function(e, t) {
              var r = e,
                n = t;
              if (0 === t) throw new Error("divisor may not be zero");
              for (var i = 1; (n | r) > n << 1; ) (n <<= 1), ++i;
              for (var s = 0; i > 0; )
                (s <<= 1), --i, (r ^ n) < r && ((s |= 1), (r ^= n)), (n >>= 1);
              return { quot: s, rem: r };
            })(n << (e - t), r).rem,
          e
        );
        if (i.length < e) throw new Error("BCH calculation invalid");
        return i;
      }
      var Y,
        V = "3x3_hamming_6_3",
        K = "3x3_parity_6_5",
        X = "4x4_bch_13_5_5",
        J = "4x4_bch_13_9_3",
        Q = "5x5_bch_22_7_7",
        ee = "5x5_bch_22_12_5",
        te = [
          {
            id: V,
            maxNumMarkers: 8,
            hamming: 3,
            matrixSize: 3,
            encoder: function(e) {
              if (!Number.isInteger(e) || e < 0 || e >= 8)
                throw new Error(
                  "value invalid or out of range for 3x3_hamming_6_3: ".concat(
                    e
                  )
                );
              var t = $(e, 3);
              return [
                !0,
                t[0],
                t[1],
                (t[0] ^ t[1]) > 0,
                t[2],
                (t[0] ^ t[2]) > 0,
                !0,
                (t[1] ^ t[2]) > 0,
                !1
              ];
            }
          },
          {
            id: K,
            maxNumMarkers: 32,
            hamming: 1,
            matrixSize: 3,
            encoder: function(e) {
              if (!Number.isInteger(e) || e < 0 || e >= 32)
                throw new Error(
                  "value invalid or out of range for 3x3_parity_6_5: ".concat(e)
                );
              var t = $(e, 5);
              return [
                !0,
                (t[0] ^ t[1] ^ t[2] ^ t[3] ^ t[4]) > 0,
                t[0],
                t[1],
                t[2],
                t[3],
                !0,
                t[4],
                !1
              ];
            }
          },
          {
            id: X,
            maxNumMarkers: 32,
            hamming: 5,
            matrixSize: 4,
            encoder: function(e) {
              var t = Z(13, 5, 465, e);
              return (
                t.splice(0, 0, !0), t.splice(12, 0, !0), t.splice(15, 0, !1), t
              );
            }
          },
          {
            id: J,
            maxNumMarkers: 512,
            hamming: 3,
            matrixSize: 4,
            encoder: function(e) {
              var t = Z(13, 9, 19, e);
              return (
                t.splice(0, 0, !0), t.splice(12, 0, !0), t.splice(15, 0, !1), t
              );
            }
          },
          {
            id: Q,
            maxNumMarkers: 128,
            hamming: 7,
            matrixSize: 5,
            encoder: function(e) {
              var t = Z(22, 7, 36783, e);
              return (
                t.splice(0, 0, !0), t.splice(20, 0, !0), t.splice(25, 0, !1), t
              );
            }
          },
          {
            id: ee,
            maxNumMarkers: 4096,
            hamming: 5,
            matrixSize: 5,
            encoder: function(e) {
              var t = Z(22, 12, 1897, e);
              return (
                t.splice(0, 0, !0), t.splice(20, 0, !0), t.splice(25, 0, !1), t
              );
            }
          }
        ],
        re = (function() {
          function e(t, r) {
            if (
              (i()(this, e),
              (this.typeDesc = te.find(function(e) {
                return e.id === t;
              })),
              !this.typeDesc)
            )
              throw new Error("unknown barcode matrix type id: ".concat(t));
            if (!Number.isInteger(r))
              throw new Error("barcode value is not an integer: ".concat(r));
            if (r < 0 || r >= this.typeDesc.maxNumMarkers)
              throw new Error("barcode value out of range: ".concat(r));
            (this.value = r), (this.valueEncoded = this.typeDesc.encoder(r));
          }
          return (
            o()(
              e,
              [
                {
                  key: "asSVG",
                  value: function() {
                    for (
                      var e =
                          '<?xml version="1.0" encoding="utf-8"?><svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="100" height="100"><rect x="0" y="0" width="100" height="100" fill="black" />',
                        t = 50 / this.typeDesc.matrixSize,
                        r = 0;
                      r < this.typeDesc.matrixSize;
                      ++r
                    )
                      for (var n = 0; n < this.typeDesc.matrixSize; ++n)
                        this.valueEncoded[r * this.typeDesc.matrixSize + n] ||
                          (e += '<rect x="'
                            .concat(25 + n * t, '" y="')
                            .concat(25 + r * t, '" width="')
                            .concat(t, '" height="')
                            .concat(t, '" fill="white" />'));
                    return (e += "</svg>");
                  }
                },
                {
                  key: "asSVGDataURI",
                  value: function() {
                    return "data:image/svg+xml,".concat(
                      encodeURIComponent(this.asSVG())
                        .replace(/'/g, "%27")
                        .replace(/"/g, "%22")
                    );
                  }
                }
              ],
              [
                {
                  key: "getMatrixTypes",
                  value: function() {
                    return te;
                  }
                }
              ]
            ),
            e
          );
        })(),
        ne = (function() {
          function e(t) {
            if ((i()(this, e), !t.startsWith("data:image")))
              throw new Error("Invalid data URI");
            this.dataURI = t;
          }
          var t, r;
          return (
            o()(e, [
              {
                key: "toPattern",
                value:
                  ((r = h()(
                    d.a.mark(function e() {
                      var t, r, n, i, s, o, a, p, u, c, l;
                      return d.a.wrap(
                        function(e) {
                          for (;;)
                            switch ((e.prev = e.next)) {
                              case 0:
                                return (e.next = 2), m(this.dataURI);
                              case 2:
                                for (
                                  t = e.sent,
                                    r = document.createElement("canvas"),
                                    n = r.getContext("2d"),
                                    r.width = 16,
                                    r.height = 16,
                                    i = "",
                                    s = 0;
                                  s > -2 * Math.PI;
                                  s -= Math.PI / 2
                                )
                                  for (
                                    n.save(),
                                      n.clearRect(0, 0, r.width, r.height),
                                      n.translate(r.width / 2, r.height / 2),
                                      n.rotate(s),
                                      n.drawImage(
                                        t,
                                        -r.width / 2,
                                        -r.height / 2,
                                        r.width,
                                        r.height
                                      ),
                                      n.restore(),
                                      o = n.getImageData(
                                        0,
                                        0,
                                        r.width,
                                        r.height
                                      ),
                                      0 !== s && (i += "\n"),
                                      a = 2;
                                    a >= 0;
                                    a--
                                  )
                                    for (p = 0; p < o.height; p++) {
                                      for (u = 0; u < o.width; u++)
                                        0 !== u && (i += " "),
                                          (c = p * o.width * 4 + 4 * u + a),
                                          (l = o.data[c]),
                                          (i += String(l).padStart(3));
                                      i += "\n";
                                    }
                                return e.abrupt("return", i);
                              case 10:
                              case "end":
                                return e.stop();
                            }
                        },
                        e,
                        this
                      );
                    })
                  )),
                  function() {
                    return r.apply(this, arguments);
                  })
              },
              {
                key: "toFullMarker",
                value:
                  ((t = h()(
                    d.a.mark(function e(t, r, n) {
                      var i, s, o, a;
                      return d.a.wrap(
                        function(e) {
                          for (;;)
                            switch ((e.prev = e.next)) {
                              case 0:
                                return (e.next = 2), m(this.dataURI);
                              case 2:
                                return (
                                  (i = e.sent),
                                  (s = 0.1 + ((1 - t) / 2) * 0.8),
                                  (o = document.createElement("canvas")),
                                  (a = o.getContext("2d")),
                                  (o.width = o.height = r),
                                  (a.fillStyle = "white"),
                                  a.fillRect(0, 0, o.width, o.height),
                                  (a.fillStyle = n),
                                  a.fillRect(
                                    0.1 * o.width,
                                    0.1 * o.height,
                                    0.8 * o.width,
                                    0.8 * o.height
                                  ),
                                  (a.fillStyle = "white"),
                                  a.fillRect(
                                    s * o.width,
                                    s * o.height,
                                    o.width * (1 - 2 * s),
                                    o.height * (1 - 2 * s)
                                  ),
                                  a.drawImage(
                                    i,
                                    s * o.width,
                                    s * o.height,
                                    o.width * (1 - 2 * s),
                                    o.height * (1 - 2 * s)
                                  ),
                                  e.abrupt("return", o.toDataURL())
                                );
                              case 17:
                              case "end":
                                return e.stop();
                            }
                        },
                        e,
                        this
                      );
                    })
                  )),
                  function(e, r, n) {
                    return t.apply(this, arguments);
                  })
              }
            ]),
            e
          );
        })(),
        ie = r(31),
        se = r.n(ie),
        oe = r(32),
        ae = r.n(oe),
        pe = r(33),
        ue = r.n(pe),
        ce = r(34),
        de = r.n(ce),
        le = r(35),
        he = r.n(le),
        me = "3d",
        ge = "image",
        ye = "audio",
        fe = "video",
        _e =
          ((Y = {}),
          S()(Y, me, ae.a),
          S()(Y, ge, ue.a),
          S()(Y, ye, de.a),
          S()(Y, fe, he.a),
          Y),
        be = (function() {
          function e() {
            i()(this, e);
          }
          var t, r;
          return (
            o()(e, null, [
              {
                key: "getBarcodeMarkerSVGDataURI",
                value: function(e, t) {
                  return new re(e, t).asSVGDataURI();
                }
              },
              {
                key: "getMarkerPattern",
                value:
                  ((r = h()(
                    d.a.mark(function e(t) {
                      return d.a.wrap(function(e) {
                        for (;;)
                          switch ((e.prev = e.next)) {
                            case 0:
                              return (e.next = 2), new ne(t).toPattern();
                            case 2:
                              return e.abrupt("return", e.sent);
                            case 3:
                            case "end":
                              return e.stop();
                          }
                      }, e);
                    })
                  )),
                  function(e) {
                    return r.apply(this, arguments);
                  })
              },
              {
                key: "getFullMarkerImage",
                value:
                  ((t = h()(
                    d.a.mark(function e(t, r, n, i) {
                      return d.a.wrap(function(e) {
                        for (;;)
                          switch ((e.prev = e.next)) {
                            case 0:
                              return (
                                (e.next = 2), new ne(t).toFullMarker(r, n, i)
                              );
                            case 2:
                              return e.abrupt("return", e.sent);
                            case 3:
                            case "end":
                              return e.stop();
                          }
                      }, e);
                    })
                  )),
                  function(e, r, n, i) {
                    return t.apply(this, arguments);
                  })
              },
              {
                key: "generateBarcodeHtml",
                value: function(e, t, r) {
                  return se()({ matrixType: e, markerValue: t, assetPath: r });
                }
              },
              {
                key: "generatePatternHtml",
                value: function(e, t, r) {
                  return _e[e]({ assetParam: t, assetPath: r });
                }
              }
            ]),
            e
          );
        })(),
        we = "barcode",
        ve = "pattern",
        qe = "location",
        ke = "ntf",
        Ee = { isValid: !0, scale: 1, size: { width: 1, height: 1, depth: 1 } },
        Te = (function() {
          function e(t) {
            if (
              (i()(this, e),
              (this.arType = t.arType),
              (this.assetType = t.assetType),
              (this.assetFile = t.assetFile),
              (this.assetName = t.assetName),
              (this.assetParam = t.assetParam || Ee),
              !this.assetParam.isValid)
            )
              throw new Error("Asset parameters are not valid");
            this.config = t;
          }
          var t;
          return (
            o()(e, [
              {
                key: "serve",
                value:
                  ((t = h()(
                    d.a.mark(function e(t) {
                      var r, n;
                      return d.a.wrap(
                        function(e) {
                          for (;;)
                            switch ((e.prev = e.next)) {
                              case 0:
                                (r = this.initProvider(t.packageType)),
                                  (n = ""),
                                  (e.t0 = this.arType),
                                  (e.next =
                                    e.t0 === we
                                      ? 5
                                      : e.t0 === ve
                                      ? 11
                                      : e.t0 === qe
                                      ? 16
                                      : e.t0 === ke
                                      ? 17
                                      : 18);
                                break;
                              case 5:
                                if (this.config.matrixType) {
                                  e.next = 7;
                                  break;
                                }
                                throw new Error(
                                  "Barcode-based AR needs a matrix type"
                                );
                              case 7:
                                if (this.config.markerValue) {
                                  e.next = 9;
                                  break;
                                }
                                throw new Error(
                                  "Barcode-based AR needs a marker value"
                                );
                              case 9:
                                return (
                                  (n = be.generateBarcodeHtml(
                                    this.config.matrixType,
                                    this.config.markerValue,
                                    "assets/".concat(this.assetName)
                                  )),
                                  e.abrupt("break", 19)
                                );
                              case 11:
                                if (
                                  ((n = be.generatePatternHtml(
                                    this.assetType,
                                    this.assetParam,
                                    "assets/".concat(this.assetName)
                                  )),
                                  this.config.markerPatt)
                                ) {
                                  e.next = 14;
                                  break;
                                }
                                throw new Error(
                                  "Pattern-based AR needs a marker.patt file"
                                );
                              case 14:
                                return (
                                  r.addFile(
                                    "assets/marker.patt",
                                    this.config.markerPatt
                                  ),
                                  e.abrupt("break", 19)
                                );
                              case 16:
                                throw new Error(
                                  "Location template is not implemented"
                                );
                              case 17:
                                throw new Error(
                                  "NTF template is not implemented"
                                );
                              case 18:
                                throw new Error(
                                  "Unknown AR type: ".concat(this.arType)
                                );
                              case 19:
                                return (
                                  r.addFile("index.html", n),
                                  this.addAssetToProvider(r),
                                  e.abrupt("return", r.serveFiles(t))
                                );
                              case 22:
                              case "end":
                                return e.stop();
                            }
                        },
                        e,
                        this
                      );
                    })
                  )),
                  function(e) {
                    return t.apply(this, arguments);
                  })
              },
              {
                key: "initProvider",
                value: function(e) {
                  var t = null;
                  switch (e) {
                    case "zip":
                      t = new W();
                      break;
                    case "github":
                      t = new j();
                      break;
                    default:
                      throw new Error("Unknown provider: ".concat(e));
                  }
                  return t;
                }
              },
              {
                key: "addAssetToProvider",
                value: function(e) {
                  switch (this.assetType) {
                    case me:
                    case ge:
                      e.addFile(
                        "assets/".concat(this.assetName),
                        this.assetFile,
                        y
                      );
                      break;
                    case ye:
                    case fe:
                      if (e instanceof W)
                        e.addFile(
                          "assets/".concat(this.assetName),
                          this.assetFile,
                          G
                        );
                      else if (e instanceof j) {
                        if (!(this.assetFile instanceof ArrayBuffer))
                          throw new Error(
                            "Audio/video asset files for GitHub must be converted to ArrayBuffer"
                          );
                        e.addFile(
                          "assets/".concat(this.assetName),
                          (function(e) {
                            for (
                              var t = [],
                                r = new Uint8Array(e),
                                n = r.byteLength,
                                i = 0;
                              i < n;
                              i++
                            )
                              t.push(String.fromCharCode(r[i]));
                            return btoa(t.join(""));
                          })(this.assetFile),
                          y
                        );
                      }
                      break;
                    default:
                      throw new Error(
                        "Unknown asset type: ".concat(this.assetType)
                      );
                  }
                }
              }
            ]),
            e
          );
        })(),
        Pe = function e() {
          i()(this, e);
        };
    },
    function(e, t, r) {
      "use strict";
      /*!
       * is-plain-object <https://github.com/jonschlinkert/is-plain-object>
       *
       * Copyright (c) 2014-2017, Jon Schlinkert.
       * Released under the MIT License.
       */
      function n(e) {
        return (
          !0 ==
            (null != (t = e) &&
              "object" == typeof t &&
              !1 === Array.isArray(t)) &&
          "[object Object]" === Object.prototype.toString.call(e)
        );
        /*!
         * isobject <https://github.com/jonschlinkert/isobject>
         *
         * Copyright (c) 2014-2017, Jon Schlinkert.
         * Released under the MIT License.
         */
        var t;
      }
      function i() {
        try {
          return navigator.userAgent;
        } catch (e) {
          return "<environment undetectable>";
        }
      }
      function s(e, t) {
        const r = Object.assign({}, e);
        return (
          Object.keys(t).forEach(i => {
            var o, a, p;
            !1 !== n((o = t[i])) &&
            "function" == typeof (a = o.constructor) &&
            !1 !== n((p = a.prototype)) &&
            !1 !== p.hasOwnProperty("isPrototypeOf")
              ? i in e
                ? (r[i] = s(e[i], t[i]))
                : Object.assign(r, { [i]: t[i] })
              : Object.assign(r, { [i]: t[i] });
          }),
          r
        );
      }
      function o(e, t, r) {
        if ("string" == typeof t) {
          let [e, n] = t.split(" ");
          r = Object.assign(n ? { method: e, url: n } : { url: e }, r);
        } else r = Object.assign({}, t);
        var n;
        r.headers = (n = r.headers)
          ? Object.keys(n).reduce(
              (e, t) => ((e[t.toLowerCase()] = n[t]), e),
              {}
            )
          : {};
        const i = s(e || {}, r);
        return (
          e &&
            e.mediaType.previews.length &&
            (i.mediaType.previews = e.mediaType.previews
              .filter(e => !i.mediaType.previews.includes(e))
              .concat(i.mediaType.previews)),
          (i.mediaType.previews = i.mediaType.previews.map(e =>
            e.replace(/-preview/, "")
          )),
          i
        );
      }
      r.r(t),
        r.d(t, "request", function() {
          return x;
        });
      const a = /\{[^}]+\}/g;
      function p(e) {
        return e.replace(/^\W+|\W+$/g, "").split(/,/);
      }
      function u(e, t) {
        return Object.keys(e)
          .filter(e => !t.includes(e))
          .reduce((t, r) => ((t[r] = e[r]), t), {});
      }
      function c(e) {
        return e
          .split(/(%[0-9A-Fa-f]{2})/g)
          .map(function(e) {
            return (
              /%[0-9A-Fa-f]/.test(e) ||
                (e = encodeURI(e)
                  .replace(/%5B/g, "[")
                  .replace(/%5D/g, "]")),
              e
            );
          })
          .join("");
      }
      function d(e) {
        return encodeURIComponent(e).replace(/[!'()*]/g, function(e) {
          return (
            "%" +
            e
              .charCodeAt(0)
              .toString(16)
              .toUpperCase()
          );
        });
      }
      function l(e, t, r) {
        return (
          (t = "+" === e || "#" === e ? c(t) : d(t)), r ? d(r) + "=" + t : t
        );
      }
      function h(e) {
        return null != e;
      }
      function m(e) {
        return ";" === e || "&" === e || "?" === e;
      }
      function g(e, t) {
        var r = ["+", "#", ".", "/", ";", "?", "&"];
        return e.replace(/\{([^\{\}]+)\}|([^\{\}]+)/g, function(e, n, i) {
          if (n) {
            let e = "";
            const i = [];
            if (
              (-1 !== r.indexOf(n.charAt(0)) &&
                ((e = n.charAt(0)), (n = n.substr(1))),
              n.split(/,/g).forEach(function(r) {
                var n = /([^:\*]*)(?::(\d+)|(\*))?/.exec(r);
                i.push(
                  (function(e, t, r, n) {
                    var i = e[r],
                      s = [];
                    if (h(i) && "" !== i)
                      if (
                        "string" == typeof i ||
                        "number" == typeof i ||
                        "boolean" == typeof i
                      )
                        (i = i.toString()),
                          n &&
                            "*" !== n &&
                            (i = i.substring(0, parseInt(n, 10))),
                          s.push(l(t, i, m(t) ? r : ""));
                      else if ("*" === n)
                        Array.isArray(i)
                          ? i.filter(h).forEach(function(e) {
                              s.push(l(t, e, m(t) ? r : ""));
                            })
                          : Object.keys(i).forEach(function(e) {
                              h(i[e]) && s.push(l(t, i[e], e));
                            });
                      else {
                        const e = [];
                        Array.isArray(i)
                          ? i.filter(h).forEach(function(r) {
                              e.push(l(t, r));
                            })
                          : Object.keys(i).forEach(function(r) {
                              h(i[r]) &&
                                (e.push(d(r)), e.push(l(t, i[r].toString())));
                            }),
                          m(t)
                            ? s.push(d(r) + "=" + e.join(","))
                            : 0 !== e.length && s.push(e.join(","));
                      }
                    else
                      ";" === t
                        ? h(i) && s.push(d(r))
                        : "" !== i || ("&" !== t && "?" !== t)
                        ? "" === i && s.push("")
                        : s.push(d(r) + "=");
                    return s;
                  })(t, e, n[1], n[2] || n[3])
                );
              }),
              e && "+" !== e)
            ) {
              var s = ",";
              return (
                "?" === e ? (s = "&") : "#" !== e && (s = e),
                (0 !== i.length ? e : "") + i.join(s)
              );
            }
            return i.join(",");
          }
          return c(i);
        });
      }
      function y(e) {
        let t,
          r = e.method.toUpperCase(),
          n = (e.url || "/").replace(/:([a-z]\w+)/g, "{+$1}"),
          i = Object.assign({}, e.headers),
          s = u(e, [
            "method",
            "baseUrl",
            "url",
            "headers",
            "request",
            "mediaType"
          ]);
        const o = (function(e) {
          const t = e.match(a);
          return t ? t.map(p).reduce((e, t) => e.concat(t), []) : [];
        })(n);
        var c;
        (n = ((c = n), { expand: g.bind(null, c) }).expand(s)),
          /^http/.test(n) || (n = e.baseUrl + n);
        const d = u(
          s,
          Object.keys(e)
            .filter(e => o.includes(e))
            .concat("baseUrl")
        );
        if (
          !/application\/octet-stream/i.test(i.accept) &&
          (e.mediaType.format &&
            (i.accept = i.accept
              .split(/,/)
              .map(t =>
                t.replace(
                  /application\/vnd(\.\w+)(\.v3)?(\.\w+)?(\+json)?$/,
                  "application/vnd$1$2." + e.mediaType.format
                )
              )
              .join(",")),
          e.mediaType.previews.length)
        ) {
          const t = i.accept.match(/[\w-]+(?=-preview)/g) || [];
          i.accept = t
            .concat(e.mediaType.previews)
            .map(
              t =>
                `application/vnd.github.${t}-preview${
                  e.mediaType.format ? "." + e.mediaType.format : "+json"
                }`
            )
            .join(",");
        }
        return (
          ["GET", "HEAD"].includes(r)
            ? (n = (function(e, t) {
                const r = /\?/.test(e) ? "&" : "?",
                  n = Object.keys(t);
                return 0 === n.length
                  ? e
                  : e +
                      r +
                      n
                        .map(e =>
                          "q" === e
                            ? "q=" +
                              t.q
                                .split("+")
                                .map(encodeURIComponent)
                                .join("+")
                            : `${e}=${encodeURIComponent(t[e])}`
                        )
                        .join("&");
              })(n, d))
            : "data" in d
            ? (t = d.data)
            : Object.keys(d).length
            ? (t = d)
            : (i["content-length"] = 0),
          i["content-type"] ||
            void 0 === t ||
            (i["content-type"] = "application/json; charset=utf-8"),
          ["PATCH", "PUT"].includes(r) && void 0 === t && (t = ""),
          Object.assign(
            { method: r, url: n, headers: i },
            void 0 !== t ? { body: t } : null,
            e.request ? { request: e.request } : null
          )
        );
      }
      function f(e, t, r) {
        return y(o(e, t, r));
      }
      const _ = (function e(t, r) {
        const n = o(t, r),
          i = f.bind(null, n);
        return Object.assign(i, {
          DEFAULTS: n,
          defaults: e.bind(null, n),
          merge: o.bind(null, n),
          parse: y
        });
      })(null, {
        method: "GET",
        baseUrl: "https://api.github.com",
        headers: {
          accept: "application/vnd.github.v3+json",
          "user-agent": "octokit-endpoint.js/6.0.0 " + i()
        },
        mediaType: { format: "", previews: [] }
      });
      /*!
       * is-plain-object <https://github.com/jonschlinkert/is-plain-object>
       *
       * Copyright (c) 2014-2017, Jon Schlinkert.
       * Released under the MIT License.
       */
      function b(e) {
        return (
          !0 ==
            (null != (t = e) &&
              "object" == typeof t &&
              !1 === Array.isArray(t)) &&
          "[object Object]" === Object.prototype.toString.call(e)
        );
        /*!
         * isobject <https://github.com/jonschlinkert/isobject>
         *
         * Copyright (c) 2014-2017, Jon Schlinkert.
         * Released under the MIT License.
         */
        var t;
      }
      var w = r(30),
        v = r.n(w),
        q = r(4),
        k = r(8);
      const E = r.n(k)()(e => console.warn(e));
      class T extends Error {
        constructor(e, t, r) {
          super(e),
            Error.captureStackTrace &&
              Error.captureStackTrace(this, this.constructor),
            (this.name = "HttpError"),
            (this.status = t),
            Object.defineProperty(this, "code", {
              get: () => (
                E(
                  new q.Deprecation(
                    "[@octokit/request-error] `error.code` is deprecated, use `error.status`."
                  )
                ),
                t
              )
            }),
            (this.headers = r.headers || {});
          const n = Object.assign({}, r.request);
          r.request.headers.authorization &&
            (n.headers = Object.assign({}, r.request.headers, {
              authorization: r.request.headers.authorization.replace(
                / .*$/,
                " [REDACTED]"
              )
            })),
            (n.url = n.url
              .replace(/\bclient_secret=\w+/g, "client_secret=[REDACTED]")
              .replace(/\baccess_token=\w+/g, "access_token=[REDACTED]")),
            (this.request = n);
        }
      }
      function P(e) {
        var t, r, n;
        ((!1 !== b((t = e.body)) &&
          "function" == typeof (r = t.constructor) &&
          !1 !== b((n = r.prototype)) &&
          !1 !== n.hasOwnProperty("isPrototypeOf")) ||
          Array.isArray(e.body)) &&
          (e.body = JSON.stringify(e.body));
        let i,
          s,
          o = {};
        return ((e.request && e.request.fetch) || v.a)(
          e.url,
          Object.assign(
            {
              method: e.method,
              body: e.body,
              headers: e.headers,
              redirect: e.redirect
            },
            e.request
          )
        )
          .then(t => {
            (s = t.url), (i = t.status);
            for (const e of t.headers) o[e[0]] = e[1];
            if (204 === i || 205 === i) return;
            if ("HEAD" === e.method) {
              if (i < 400) return;
              throw new T(t.statusText, i, { headers: o, request: e });
            }
            if (304 === i)
              throw new T("Not modified", i, { headers: o, request: e });
            if (i >= 400)
              return t.text().then(t => {
                const r = new T(t, i, { headers: o, request: e });
                try {
                  let e = JSON.parse(r.message);
                  Object.assign(r, e);
                  let t = e.errors;
                  r.message =
                    r.message + ": " + t.map(JSON.stringify).join(", ");
                } catch (e) {}
                throw r;
              });
            const r = t.headers.get("content-type");
            return /application\/json/.test(r)
              ? t.json()
              : !r || /^text\/|charset=utf-8$/.test(r)
              ? t.text()
              : (function(e) {
                  return e.arrayBuffer();
                })(t);
          })
          .then(e => ({ status: i, url: s, headers: o, data: e }))
          .catch(t => {
            if (t instanceof T) throw t;
            throw new T(t.message, 500, { headers: o, request: e });
          });
      }
      const x = (function e(t, r) {
        const n = t.defaults(r);
        return Object.assign(
          function(t, r) {
            const i = n.merge(t, r);
            if (!i.request || !i.request.hook) return P(n.parse(i));
            const s = (e, t) => P(n.parse(n.merge(e, t)));
            return (
              Object.assign(s, { endpoint: n, defaults: e.bind(null, n) }),
              i.request.hook(s, i)
            );
          },
          { endpoint: n, defaults: e.bind(null, n) }
        );
      })(_, { headers: { "user-agent": "octokit-request.js/5.3.4 " + i() } });
    }
  ]);
});
//# sourceMappingURL=arjs-studio-backend.min.js.map
