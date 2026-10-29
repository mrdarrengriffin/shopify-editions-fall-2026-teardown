function yn(Mt) {
  return Mt && Mt.__esModule && Object.prototype.hasOwnProperty.call(Mt, "default") ? Mt.default : Mt;
}
var lr = { exports: {} },
  _n = lr.exports,
  $r;
function wn() {
  return (
    $r ||
      (($r = 1),
      (function (Mt, Er) {
        (function (yt, vt) {
          Mt.exports = vt();
        })(_n, () =>
          (() => {
            var rr = [
                ,
                (We, ve, re) => {
                  re.r(ve), re.d(ve, { Animation: () => oe.Animation });
                  var oe = re(2);
                },
                (We, ve, re) => {
                  re.r(ve), re.d(ve, { Animation: () => oe });
                  var oe = (function () {
                    function P(M, se, $, k) {
                      (this.animation = M),
                        (this.artboard = se),
                        (this.playing = k),
                        (this.loopCount = 0),
                        (this.scrubTo = null),
                        (this.instance = new $.LinearAnimationInstance(M, se));
                    }
                    return (
                      Object.defineProperty(P.prototype, "name", {
                        get: function () {
                          return this.animation.name;
                        },
                        enumerable: !1,
                        configurable: !0,
                      }),
                      Object.defineProperty(P.prototype, "time", {
                        get: function () {
                          return this.instance.time;
                        },
                        set: function (M) {
                          this.instance.time = M;
                        },
                        enumerable: !1,
                        configurable: !0,
                      }),
                      Object.defineProperty(P.prototype, "loopValue", {
                        get: function () {
                          return this.animation.loopValue;
                        },
                        enumerable: !1,
                        configurable: !0,
                      }),
                      Object.defineProperty(P.prototype, "needsScrub", {
                        get: function () {
                          return this.scrubTo !== null;
                        },
                        enumerable: !1,
                        configurable: !0,
                      }),
                      (P.prototype.advance = function (M) {
                        this.scrubTo === null
                          ? this.instance.advance(M)
                          : ((this.instance.time = 0),
                            this.instance.advance(this.scrubTo),
                            (this.scrubTo = null));
                      }),
                      (P.prototype.apply = function (M) {
                        this.instance.apply(M);
                      }),
                      (P.prototype.cleanup = function () {
                        this.instance.delete();
                      }),
                      P
                    );
                  })();
                },
                (We, ve, re) => {
                  re.r(ve), re.d(ve, { RuntimeLoader: () => se });
                  var oe = re(4),
                    P = re(5),
                    M = function () {
                      return (
                        (M =
                          Object.assign ||
                          function ($) {
                            for (var k, le = 1, J = arguments.length; le < J; le++) {
                              k = arguments[le];
                              for (var ne in k)
                                Object.prototype.hasOwnProperty.call(k, ne) && ($[ne] = k[ne]);
                            }
                            return $;
                          }),
                        M.apply(this, arguments)
                      );
                    },
                    se = (function () {
                      function $() {}
                      return (
                        ($.notifyError = function (k) {
                          var le;
                          for ($.isLoading = !1; $.errorCallbackQueue.length > 0; )
                            (le = $.errorCallbackQueue.shift()) === null || le === void 0 || le(k);
                          $.callBackQueue = [];
                        }),
                        ($.loadRuntime = function () {
                          var k = $.wasmURL,
                            le = $.wasmBinary;
                          $.enablePerfMarks && performance.mark("rive:wasm-init:start"),
                            oe
                              .default(
                                M(
                                  {
                                    locateFile: function () {
                                      return k;
                                    },
                                  },
                                  le ? { wasmBinary: le } : {},
                                ),
                              )
                              .then(function (J) {
                                var ne;
                                for (
                                  $.enablePerfMarks &&
                                    (performance.mark("rive:wasm-init:end"),
                                    performance.measure(
                                      "rive:wasm-init",
                                      "rive:wasm-init:start",
                                      "rive:wasm-init:end",
                                    )),
                                    $.runtime = J,
                                    $.errorCallbackQueue = [];
                                  $.callBackQueue.length > 0;

                                )
                                  (ne = $.callBackQueue.shift()) === null || ne === void 0 || ne($.runtime);
                              })
                              .catch(function (J) {
                                var ne = {
                                  message: J?.message || "Unknown error",
                                  type: J?.name || "Error",
                                  wasmError:
                                    J instanceof WebAssembly.CompileError ||
                                    J instanceof WebAssembly.RuntimeError,
                                  originalError: J,
                                };
                                console.debug("Rive WASM load error details:", ne);
                                var U = $.wasmFallbackURL,
                                  D = U !== null && k.toLowerCase() === U.toLowerCase();
                                if (U !== null && !D)
                                  console.warn(
                                    "Failed to load WASM from "
                                      .concat(k, " (")
                                      .concat(ne.message, "), trying fallback URL: ")
                                      .concat(U),
                                  ),
                                    ($.wasmBinary = null),
                                    $.setWasmUrl(U),
                                    $.loadRuntime();
                                else {
                                  var B = D ? "the configured WASM URL or its fallback (".concat(U, ")") : k,
                                    Q = [
                                      "Could not load Rive WASM file from ".concat(B, "."),
                                      "Possible reasons:",
                                      "- Network connection is down",
                                      "- WebAssembly is not supported in this environment",
                                      "- The WASM file is corrupted or incompatible",
                                      `
Error details:`,
                                      "- Type: ".concat(ne.type),
                                      "- Message: ".concat(ne.message),
                                      "- WebAssembly-specific error: ".concat(ne.wasmError),
                                      `
To resolve, you may need to:`,
                                      "1. Check your network connection",
                                      "2. Set a new WASM source via RuntimeLoader.setWasmUrl()",
                                      "3. Call RuntimeLoader.awaitInstance() again",
                                    ].join(`
`);
                                  console.error(Q), $.notifyError(new Error(Q));
                                }
                              });
                        }),
                        ($.getInstance = function (k, le) {
                          $.isLoading || (($.isLoading = !0), $.loadRuntime()),
                            $.runtime
                              ? k($.runtime)
                              : ($.callBackQueue.push(k), le && $.errorCallbackQueue.push(le));
                        }),
                        ($.awaitInstance = function () {
                          return new Promise(function (k, le) {
                            return $.getInstance(k, le);
                          });
                        }),
                        ($.setWasmUrl = function (k) {
                          $.wasmURL = k;
                        }),
                        ($.getWasmUrl = function () {
                          return $.wasmURL;
                        }),
                        ($.setWasmFallbackUrl = function (k) {
                          $.wasmFallbackURL = k;
                        }),
                        ($.getWasmFallbackUrl = function () {
                          return $.wasmFallbackURL;
                        }),
                        ($.setWasmBinary = function (k) {
                          if (k instanceof ArrayBuffer || k === null) {
                            $.wasmBinary = k;
                            return;
                          }
                          console.error("setWasmBinary expects an ArrayBuffer or null");
                        }),
                        ($.getWasmBinary = function () {
                          return $.wasmBinary;
                        }),
                        ($.isLoading = !1),
                        ($.callBackQueue = []),
                        ($.wasmURL = "https://unpkg.com/"
                          .concat(P.name, "@")
                          .concat(P.version, "/rive.wasm")),
                        ($.wasmFallbackURL = "https://cdn.jsdelivr.net/npm/"
                          .concat(P.name, "@")
                          .concat(P.version, "/rive_fallback.wasm")),
                        ($.wasmBinary = null),
                        ($.errorCallbackQueue = []),
                        ($.enablePerfMarks = !1),
                        $
                      );
                    })();
                },
                (We, ve, re) => {
                  re.r(ve), re.d(ve, { default: () => P });
                  var oe = (() => {
                    var M = globalThis.document?.currentScript?.src;
                    return async function (se = {}) {
                      var $,
                        k = se,
                        le = !!globalThis.window,
                        J = !!globalThis.WorkerGlobalScope;
                      function ne() {
                        function n(F) {
                          const R = p;
                          (u = o = 0),
                            (p = new Map()),
                            R.forEach((N) => {
                              try {
                                N(F);
                              } catch (q) {
                                console.error(q);
                              }
                            }),
                            this.Sa(),
                            E && E.Ab();
                        }
                        let o = 0,
                          u = 0,
                          p = new Map(),
                          E = null,
                          x = null;
                        (this.requestAnimationFrame = function (F) {
                          o ||= requestAnimationFrame(n.bind(this));
                          const R = ++u;
                          return p.set(R, F), R;
                        }),
                          (this.cancelAnimationFrame = function (F) {
                            p.delete(F), o && p.size == 0 && (cancelAnimationFrame(o), (o = 0));
                          }),
                          (this.vb = function (F) {
                            x && (document.body.remove(x), (x = null)),
                              F ||
                                ((x = document.createElement("div")),
                                (x.style.backgroundColor = "black"),
                                (x.style.position = "fixed"),
                                (x.style.right = 0),
                                (x.style.top = 0),
                                (x.style.color = "white"),
                                (x.style.padding = "4px"),
                                (x.innerHTML = "RIVE FPS"),
                                (F = function (R) {
                                  x.innerHTML = "RIVE FPS " + R.toFixed(1);
                                }),
                                document.body.appendChild(x)),
                              (E = new (function () {
                                let R = 0,
                                  N = 0;
                                this.Ab = function () {
                                  var q = performance.now();
                                  N
                                    ? (++R, (q -= N), 1e3 < q && (F((1e3 * R) / q), (R = N = 0)))
                                    : ((N = q), (R = 0));
                                };
                              })());
                          }),
                          (this.Sa = function () {});
                      }
                      function U() {
                        console.assert(!0);
                        const n = new Map();
                        let o = -1 / 0;
                        this.push = function (u) {
                          return (
                            (u = (u + 255) >> 8),
                            n.has(u) && clearTimeout(n.get(u)),
                            n.set(
                              u,
                              setTimeout(function () {
                                n.delete(u),
                                  n.length == 0
                                    ? (o = -1 / 0)
                                    : u == o && ((o = Math.max(...n.keys())), console.assert(o < u));
                              }, 1e3),
                            ),
                            (o = Math.max(u, o)),
                            o << 8
                          );
                        };
                      }
                      function D(n) {
                        return function () {
                          n();
                          const o = k.riveScripting;
                          if (o) for (const u of o.frameBoundary()) console.warn(u);
                        };
                      }
                      const B = k.onRuntimeInitialized;
                      (k.onRuntimeInitialized = function () {
                        B && B(),
                          (k.startFileScripts = function (F) {
                            const R = k.riveScripting;
                            return F && R && F.startScripts
                              ? R.prepare().then(function () {
                                  return F.startScripts(), F;
                                })
                              : Promise.resolve(F);
                          });
                        let n = k.decodeAudio;
                        k.decodeAudio = function (F, R, N = null) {
                          (F = n(F, N ?? null)), R(F);
                        };
                        let o = k.decodeFont;
                        k.decodeFont = function (F, R, N = null) {
                          (F = o(F, N ?? null)), R(F);
                        };
                        const u = k.FileAsset.prototype.decode;
                        k.FileAsset.prototype.decode = function (F, R) {
                          return u.call(this, F, R ?? null);
                        };
                        let p = k.setFallbackFontCb;
                        k.setFallbackFontCallback =
                          typeof p == "function"
                            ? function (F) {
                                p(F);
                              }
                            : function () {
                                console.warn(
                                  "Module.setFallbackFontCallback called, but text support is not enabled in this build.",
                                );
                              };
                        const E = k.FileAssetLoader;
                        (k.ptrToAsset = (F) => {
                          let R = k.ptrToFileAsset(F);
                          return R.isImage
                            ? k.ptrToImageAsset(F)
                            : R.isFont
                              ? k.ptrToFontAsset(F)
                              : R.isAudio
                                ? k.ptrToAudioAsset(F)
                                : R;
                        }),
                          (k.CustomFileAssetLoader = E.extend("CustomFileAssetLoader", {
                            __construct: function ({ loadContents: F }) {
                              this.__parent.__construct.call(this), (this.hb = F);
                            },
                            loadContents: function (F, R) {
                              return (F = k.ptrToAsset(F)), this.hb(F, R);
                            },
                          })),
                          (k.CDNFileAssetLoader = E.extend("CDNFileAssetLoader", {
                            __construct: function (F) {
                              this.__parent.__construct.call(this), (this.jb = F ?? null);
                            },
                            loadContents: function (F) {
                              let R = k.ptrToAsset(F);
                              if (((F = R.cdnUuid), F === "")) return !1;
                              const N = this.jb ?? null;
                              return (
                                (function (q, ue) {
                                  var we = new XMLHttpRequest();
                                  (we.responseType = "arraybuffer"),
                                    (we.onreadystatechange = function () {
                                      we.readyState == 4 && we.status == 200 && ue(we);
                                    }),
                                    we.open("GET", q, !0),
                                    we.send(null);
                                })(R.cdnBaseUrl + "../shop/" + F, (q) => {
                                  R.decode(new Uint8Array(q.response), N);
                                }),
                                !0
                              );
                            },
                          })),
                          (k.FallbackFileAssetLoader = E.extend("FallbackFileAssetLoader", {
                            __construct: function () {
                              this.__parent.__construct.call(this), (this.Ra = []);
                            },
                            addLoader: function (F) {
                              this.Ra.push(F);
                            },
                            loadContents: function (F, R) {
                              for (let N of this.Ra) if (N.loadContents(F, R)) return !0;
                              return !1;
                            },
                          }));
                        let x = k.computeAlignment;
                        k.computeAlignment = function (F, R, N, q, ue = 1) {
                          return x.call(this, F, R, N, q, ue);
                        };
                      }),
                        (function () {
                          function n(w, e) {
                            const r = w.pb,
                              d = w.da,
                              g = w.ca,
                              b = w.Ca ?? { i: !1 },
                              a = (h, v) => {
                                h = new Uint8Array(e().buffer, h >>> 0, v);
                                const f = 4096 < v ? w.Ha(v) : w.va(v);
                                if (f === 0) throw Error(`could not stage ${v} bytes for the host`);
                                return w.Z().set(h, f), b.i && (b.ma += v), f;
                              },
                              t = (h, v) => {
                                h !== 0 && 4096 < v && w.Ea(h);
                              },
                              s = (h, v, f) => {
                                new Uint8Array(e().buffer, v >>> 0, f).set(w.Z().subarray(h, h + f)),
                                  b.i && (b.ka += f);
                              },
                              c = (h, v) => {
                                if (((h >>>= 0), 4 > h)) var f = 0;
                                else {
                                  f = e().buffer;
                                  var C = h;
                                  if (C > f.byteLength) f = -1;
                                  else {
                                    var y = new DataView(f).getUint32(C - 4, !0);
                                    f = C + y <= f.byteLength ? y : -1;
                                  }
                                }
                                if (0 > f) throw Error("out of bounds memory access");
                                (C = d()), (y = 0);
                                try {
                                  (y = a(h, f)), v(y, f);
                                } finally {
                                  t(y, f), g(C);
                                }
                              },
                              _ = (h) => (v) => c(v, (f, C) => r.rd(h, f, C));
                            return {
                              env: {
                                seed: () => Date.now() * Math.random(),
                                emscripten_get_now: () => performance.now(),
                                emscripten_date_now: () => Date.now(),
                                trace: (h, v, f, C, y, L, G) =>
                                  c(h, (ge, Pe) => r.Bh(ge, Pe, v, f, C, y, L, G)),
                                "console.log": _(0),
                                "console.debug": _(0),
                                "console.info": _(0),
                                "console.warn": _(0),
                                "console.error": _(0),
                                "console.time": _(1),
                                "console.timeLog": _(2),
                                "console.timeEnd": _(3),
                              },
                              rive_rt_v1: {
                                log: (h, v, f) => {
                                  const C = d();
                                  let y = 0;
                                  try {
                                    (y = a(v, f)), r.fh(h, y, f);
                                  } finally {
                                    t(y, f), g(C);
                                  }
                                },
                                mark_needs_update: r.gh,
                                budget_exceeded: r.Zg,
                                error: (h, v) => {
                                  const f = d();
                                  let C = 0;
                                  try {
                                    (C = a(h, v)), r.dh(C, v);
                                  } finally {
                                    t(C, v), g(f);
                                  }
                                },
                                now: () => performance.now(),
                                date_now: () => Date.now(),
                                debug_enter: r.$g,
                                debug_line: r.bh,
                                debug_leave: r.ah,
                                utc_offset: r.hh,
                                is_dst: r.eh,
                                zone_name: (h, v, f) => {
                                  const C = d();
                                  let y = 0;
                                  try {
                                    y = a(v, f);
                                    const L = r.ih(h, y, f);
                                    return s(y, v, f), L;
                                  } finally {
                                    t(y, f), g(C);
                                  }
                                },
                              },
                              rive_data_v1: {
                                view_model: r.ne,
                                root_view_model: r.he,
                                global_view_model: (h, v, f) => {
                                  const C = d();
                                  let y = 0;
                                  try {
                                    return (y = a(v, f)), r.Od(h, y, f);
                                  } finally {
                                    t(y, f), g(C);
                                  }
                                },
                                global_view_model_names: (h, v, f) => {
                                  const C = d();
                                  let y = 0;
                                  try {
                                    y = a(v, f);
                                    const L = r.Pd(h, y, f);
                                    return s(y, v, f), L;
                                  } finally {
                                    t(y, f), g(C);
                                  }
                                },
                                context: r.Dd,
                                context_parent: r.Ed,
                                context_view_model: r.Gd,
                                context_release: r.Fd,
                                has_view_model: (h, v) => {
                                  const f = d();
                                  let C = 0;
                                  try {
                                    return (C = a(h, v)), r.Qd(C, v);
                                  } finally {
                                    t(C, v), g(f);
                                  }
                                },
                                new_view_model: (h, v, f, C) => {
                                  const y = d();
                                  let L = 0,
                                    G = 0;
                                  try {
                                    return (L = a(h, v)), (G = a(f, C)), r.de(L, v, G, C);
                                  } finally {
                                    t(G, C), t(L, v), g(y);
                                  }
                                },
                                vmi_release: r.Ce,
                                vmi_number: (h, v, f) => {
                                  const C = d();
                                  let y = 0;
                                  try {
                                    return (y = a(v, f)), r.Ae(h, y, f);
                                  } finally {
                                    t(y, f), g(C);
                                  }
                                },
                                vmi_boolean: (h, v, f) => {
                                  const C = d();
                                  let y = 0;
                                  try {
                                    return (y = a(v, f)), r.se(h, y, f);
                                  } finally {
                                    t(y, f), g(C);
                                  }
                                },
                                vmi_string: (h, v, f) => {
                                  const C = d();
                                  let y = 0;
                                  try {
                                    return (y = a(v, f)), r.De(h, y, f);
                                  } finally {
                                    t(y, f), g(C);
                                  }
                                },
                                vmi_trigger: (h, v, f) => {
                                  const C = d();
                                  let y = 0;
                                  try {
                                    return (y = a(v, f)), r.Fe(h, y, f);
                                  } finally {
                                    t(y, f), g(C);
                                  }
                                },
                                vmi_color: (h, v, f) => {
                                  const C = d();
                                  let y = 0;
                                  try {
                                    return (y = a(v, f)), r.te(h, y, f);
                                  } finally {
                                    t(y, f), g(C);
                                  }
                                },
                                vmi_view_model: (h, v, f) => {
                                  const C = d();
                                  let y = 0;
                                  try {
                                    return (y = a(v, f)), r.Ge(h, y, f);
                                  } finally {
                                    t(y, f), g(C);
                                  }
                                },
                                vmi_property: (h, v, f, C, y) => {
                                  const L = d();
                                  let G = 0,
                                    ge = 0;
                                  try {
                                    (G = a(v, f)), (ge = a(C, 4 * y));
                                    const Pe = r.Be(h, G, f, ge, y);
                                    return s(ge, C, 4 * y), Pe;
                                  } finally {
                                    t(ge, 4 * y), t(G, f), g(L);
                                  }
                                },
                                vmi_instance: (h, v, f) => {
                                  const C = d();
                                  let y = 0;
                                  try {
                                    return (y = a(v, f)), r.ye(h, y, f);
                                  } finally {
                                    t(y, f), g(C);
                                  }
                                },
                                vmi_symbol_index: r.Ee,
                                vmi_equal: r.ve,
                                view_model_get: r.oe,
                                vmi_list: (h, v, f) => {
                                  const C = d();
                                  let y = 0;
                                  try {
                                    return (y = a(v, f)), r.ze(h, y, f);
                                  } finally {
                                    t(y, f), g(C);
                                  }
                                },
                                vmi_enum: (h, v, f) => {
                                  const C = d();
                                  let y = 0;
                                  try {
                                    return (y = a(v, f)), r.ue(h, y, f);
                                  } finally {
                                    t(y, f), g(C);
                                  }
                                },
                                vmi_image: (h, v, f) => {
                                  const C = d();
                                  let y = 0;
                                  try {
                                    return (y = a(v, f)), r.xe(h, y, f);
                                  } finally {
                                    t(y, f), g(C);
                                  }
                                },
                                vmi_font: (h, v, f) => {
                                  const C = d();
                                  let y = 0;
                                  try {
                                    return (y = a(v, f)), r.we(h, y, f);
                                  } finally {
                                    t(y, f), g(C);
                                  }
                                },
                                vmi_blob: (h, v, f) => {
                                  const C = d();
                                  let y = 0;
                                  try {
                                    return (y = a(v, f)), r.re(h, y, f);
                                  } finally {
                                    t(y, f), g(C);
                                  }
                                },
                                vmi_artboard: (h, v, f) => {
                                  const C = d();
                                  let y = 0;
                                  try {
                                    return (y = a(v, f)), r.qe(h, y, f);
                                  } finally {
                                    t(y, f), g(C);
                                  }
                                },
                                image_get: r.Rd,
                                image_set: r.Sd,
                                font_get: r.Ld,
                                font_set: r.Nd,
                                font_release: r.Md,
                                blob_present: r.xd,
                                blob_get: (h, v, f) => {
                                  const C = d();
                                  let y = 0;
                                  try {
                                    y = a(v, f);
                                    const L = r.vd(h, y, f);
                                    return s(y, v, f), L;
                                  } finally {
                                    t(y, f), g(C);
                                  }
                                },
                                blob_name: (h, v, f) => {
                                  const C = d();
                                  let y = 0;
                                  try {
                                    y = a(v, f);
                                    const L = r.wd(h, y, f);
                                    return s(y, v, f), L;
                                  } finally {
                                    t(y, f), g(C);
                                  }
                                },
                                blob_set: (h, v, f) => {
                                  const C = d();
                                  let y = 0;
                                  try {
                                    (y = a(v, f)), r.yd(h, y, f);
                                  } finally {
                                    t(y, f), g(C);
                                  }
                                },
                                blob_clear: r.ud,
                                artboard_get: r.sd,
                                artboard_set: r.td,
                                enum_get: (h, v, f) => {
                                  const C = d();
                                  let y = 0;
                                  try {
                                    y = a(v, f);
                                    const L = r.Id(h, y, f);
                                    return s(y, v, f), L;
                                  } finally {
                                    t(y, f), g(C);
                                  }
                                },
                                enum_set: (h, v, f) => {
                                  const C = d();
                                  let y = 0;
                                  try {
                                    (y = a(v, f)), r.Jd(h, y, f);
                                  } finally {
                                    t(y, f), g(C);
                                  }
                                },
                                enum_values: (h, v, f) => {
                                  const C = d();
                                  let y = 0;
                                  try {
                                    y = a(v, f);
                                    const L = r.Kd(h, y, f);
                                    return s(y, v, f), L;
                                  } finally {
                                    t(y, f), g(C);
                                  }
                                },
                                prop_release: r.ge,
                                trigger_fire: r.le,
                                list_length: r.Wd,
                                list_push: r.Yd,
                                list_pop: r.Xd,
                                list_shift: r.be,
                                list_clear: r.Td,
                                list_swap: r.ce,
                                list_insert: r.Vd,
                                list_remove: r.Zd,
                                list_remove_at: r.ae,
                                list_remove_all_of: r.$d,
                                list_get: r.Ud,
                                view_model_set: r.pe,
                                color_get: r.Bd,
                                color_set: r.Cd,
                                number_get: r.ee,
                                number_set: r.fe,
                                boolean_get: r.zd,
                                boolean_set: r.Ad,
                                string_get: (h, v, f) => {
                                  const C = d();
                                  let y = 0;
                                  try {
                                    y = a(v, f);
                                    const L = r.je(h, y, f);
                                    return s(y, v, f), L;
                                  } finally {
                                    t(y, f), g(C);
                                  }
                                },
                                string_changed: r.ie,
                                string_set: (h, v, f) => {
                                  const C = d();
                                  let y = 0;
                                  try {
                                    (y = a(v, f)), r.ke(h, y, f);
                                  } finally {
                                    t(y, f), g(C);
                                  }
                                },
                                watch: r.He,
                                unwatch: r.me,
                                convert_result: (h, v, f, C, y, L) => {
                                  const G = d();
                                  let ge = 0;
                                  try {
                                    (ge = a(y, L)), r.Hd(h, v, f, C, ge, L);
                                  } finally {
                                    t(ge, L), g(G);
                                  }
                                },
                              },
                              rive_artboard_v1: {
                                release: r.Ac,
                                advance: r.Tb,
                                draw: r.ac,
                                instance: r.lc,
                                data: r.$b,
                                width: r.Fc,
                                height: r.kc,
                                set_width: r.Ec,
                                set_height: r.Dc,
                                frame_origin: r.ic,
                                set_frame_origin: r.Cc,
                                bounds: (h, v, f) => {
                                  const C = d();
                                  let y = 0;
                                  try {
                                    (y = a(v, 4 * f)), r.Zb(h, y, f), s(y, v, 4 * f);
                                  } finally {
                                    t(y, 4 * f), g(C);
                                  }
                                },
                                pointer_event: r.yc,
                                scroll_event: r.Bc,
                                gamepad_event: (h, v, f) => {
                                  const C = d();
                                  let y = 0;
                                  try {
                                    return (y = a(v, f)), r.jc(h, y, f);
                                  } finally {
                                    t(y, f), g(C);
                                  }
                                },
                                animation: (h, v, f) => {
                                  const C = d();
                                  let y = 0;
                                  try {
                                    return (y = a(v, f)), r.Ub(h, y, f);
                                  } finally {
                                    t(y, f), g(C);
                                  }
                                },
                                animation_release: r.Xb,
                                animation_duration: r.Wb,
                                animation_advance: r.Vb,
                                animation_set_time: r.Yb,
                                add_to_path: r.Sb,
                                node: (h, v, f) => {
                                  const C = d();
                                  let y = 0;
                                  try {
                                    return (y = a(v, f)), r.mc(h, y, f);
                                  } finally {
                                    t(y, f), g(C);
                                  }
                                },
                                node_release: r.tc,
                                node_transform: (h, v, f) => {
                                  const C = d();
                                  let y = 0;
                                  try {
                                    (y = a(v, 4 * f)), r.wc(h, y, f), s(y, v, 4 * f);
                                  } finally {
                                    t(y, 4 * f), g(C);
                                  }
                                },
                                node_set: r.uc,
                                node_world_transform: (h, v, f) => {
                                  const C = d();
                                  let y = 0;
                                  try {
                                    (y = a(v, 4 * f)), r.xc(h, y, f), s(y, v, 4 * f);
                                  } finally {
                                    t(y, 4 * f), g(C);
                                  }
                                },
                                node_set_world_transform: (h, v, f) => {
                                  const C = d();
                                  let y = 0;
                                  try {
                                    (y = a(v, 4 * f)), r.vc(h, y, f);
                                  } finally {
                                    t(y, 4 * f), g(C);
                                  }
                                },
                                node_decompose: (h, v, f) => {
                                  const C = d();
                                  let y = 0;
                                  try {
                                    (y = a(v, 4 * f)), r.oc(h, y, f);
                                  } finally {
                                    t(y, 4 * f), g(C);
                                  }
                                },
                                node_path_verbs: (h, v, f) => {
                                  const C = d();
                                  let y = 0;
                                  try {
                                    y = a(v, f);
                                    const L = r.sc(h, y, f);
                                    return s(y, v, f), L;
                                  } finally {
                                    t(y, f), g(C);
                                  }
                                },
                                node_path_points: (h, v, f) => {
                                  const C = d();
                                  let y = 0;
                                  try {
                                    y = a(v, 4 * f);
                                    const L = r.rc(h, y, f);
                                    return s(y, v, 4 * f), L;
                                  } finally {
                                    t(y, 4 * f), g(C);
                                  }
                                },
                                node_paint: (h, v, f) => {
                                  const C = d();
                                  let y = 0;
                                  try {
                                    y = a(v, 4 * f);
                                    const L = r.pc(h, y, f);
                                    return s(y, v, 4 * f), L;
                                  } finally {
                                    t(y, 4 * f), g(C);
                                  }
                                },
                                node_children: (h, v, f) => {
                                  const C = d();
                                  let y = 0;
                                  try {
                                    y = a(v, 4 * f);
                                    const L = r.nc(h, y, f);
                                    return s(y, v, 4 * f), L;
                                  } finally {
                                    t(y, 4 * f), g(C);
                                  }
                                },
                                node_parent: r.qc,
                                property_key: (h, v, f) => {
                                  const C = d();
                                  let y = 0;
                                  try {
                                    return (y = a(v, f)), r.zc(h, y, f);
                                  } finally {
                                    t(y, f), g(C);
                                  }
                                },
                                draw_visit: r.cc,
                                draw_modulated: r.bc,
                                drawable_draw: r.dc,
                                drawable_value: (h, v, f, C) => {
                                  const y = d();
                                  let L = 0;
                                  try {
                                    L = a(f, 4 * C);
                                    const G = r.hc(h, v, L, C);
                                    return s(L, f, 4 * C), G;
                                  } finally {
                                    t(L, 4 * C), g(y);
                                  }
                                },
                                drawable_string: (h, v, f, C) => {
                                  const y = d();
                                  let L = 0;
                                  try {
                                    L = a(f, C);
                                    const G = r.fc(h, v, L, C);
                                    return s(L, f, C), G;
                                  } finally {
                                    t(L, C), g(y);
                                  }
                                },
                                drawable_properties: (h, v, f) => {
                                  const C = d();
                                  let y = 0;
                                  try {
                                    y = a(v, f);
                                    const L = r.ec(h, y, f);
                                    return s(y, v, f), L;
                                  } finally {
                                    t(y, f), g(C);
                                  }
                                },
                              },
                              rive_audio_v1: {
                                source: (h, v, f) => {
                                  const C = d();
                                  let y = 0;
                                  try {
                                    return (y = a(v, f)), r.Yc(h, y, f);
                                  } finally {
                                    t(y, f), g(C);
                                  }
                                },
                                source_release: r.ad,
                                source_duration: r.$c,
                                source_sample_rate: r.bd,
                                source_channels: r.Zc,
                                play: r.Gc,
                                play_at_time: r.Ic,
                                play_in_time: r.Kc,
                                play_at_frame: r.Hc,
                                play_in_frame: r.Jc,
                                time: r.cd,
                                time_frame: r.dd,
                                sample_rate: r.Lc,
                                sound_release: r.Pc,
                                sound_play: r.Oc,
                                sound_pause: r.Nc,
                                sound_resume: r.Qc,
                                sound_stop: r.Uc,
                                sound_seek: r.Rc,
                                sound_seek_frame: r.Sc,
                                sound_completed: r.Mc,
                                sound_time: r.Vc,
                                sound_time_frame: r.Wc,
                                sound_volume: r.Xc,
                                sound_set_volume: r.Tc,
                              },
                              rive_path_v1: {
                                new: r.Kg,
                                update: (h, v, f, C, y, L) => {
                                  const G = d();
                                  let ge = 0,
                                    Pe = 0;
                                  try {
                                    (ge = a(v, f)), (Pe = a(C, 4 * y)), r.Ng(h, ge, f, Pe, y, L);
                                  } finally {
                                    t(Pe, 4 * y), t(ge, f), g(G);
                                  }
                                },
                                release: r.Mg,
                                add: r.Ig,
                                verbs: (h, v, f) => {
                                  const C = d();
                                  let y = 0;
                                  try {
                                    y = a(v, f);
                                    const L = r.Og(h, y, f);
                                    return s(y, v, f), L;
                                  } finally {
                                    t(y, f), g(C);
                                  }
                                },
                                points: (h, v, f) => {
                                  const C = d();
                                  let y = 0;
                                  try {
                                    y = a(v, 4 * f);
                                    const L = r.Lg(h, y, f);
                                    return s(y, v, 4 * f), L;
                                  } finally {
                                    t(y, 4 * f), g(C);
                                  }
                                },
                                effect_result: (h, v, f, C) => {
                                  const y = d();
                                  let L = 0,
                                    G = 0;
                                  try {
                                    (L = a(h, v)), (G = a(f, 4 * C)), r.Jg(L, v, G, C);
                                  } finally {
                                    t(G, 4 * C), t(L, v), g(y);
                                  }
                                },
                              },
                              rive_measure_v1: {
                                path_new: (h, v, f, C) => {
                                  const y = d();
                                  let L = 0,
                                    G = 0;
                                  try {
                                    return (L = a(h, v)), (G = a(f, 4 * C)), r.ng(L, v, G, C);
                                  } finally {
                                    t(G, 4 * C), t(L, v), g(y);
                                  }
                                },
                                contours_new: (h, v, f, C) => {
                                  const y = d();
                                  let L = 0,
                                    G = 0;
                                  try {
                                    return (L = a(h, v)), (G = a(f, 4 * C)), r.ig(L, v, G, C);
                                  } finally {
                                    t(G, 4 * C), t(L, v), g(y);
                                  }
                                },
                                contour_next: r.hg,
                                length: r.mg,
                                is_closed: r.lg,
                                pos_tan: (h, v, f, C) => {
                                  const y = d();
                                  let L = 0;
                                  try {
                                    (L = a(f, 4 * C)), r.og(h, v, L, C), s(L, f, 4 * C);
                                  } finally {
                                    t(L, 4 * C), g(y);
                                  }
                                },
                                warp: (h, v, f, C, y) => {
                                  const L = d();
                                  let G = 0;
                                  try {
                                    (G = a(C, 4 * y)), r.qg(h, v, f, G, y), s(G, C, 4 * y);
                                  } finally {
                                    t(G, 4 * y), g(L);
                                  }
                                },
                                extract: r.jg,
                                extract_read: (h, v, f, C, y) => {
                                  const L = d();
                                  let G = 0,
                                    ge = 0;
                                  try {
                                    (G = a(v, f)), (ge = a(C, 4 * y));
                                    const Pe = r.kg(h, G, f, ge, y);
                                    return s(G, v, f), s(ge, C, 4 * y), Pe;
                                  } finally {
                                    t(ge, 4 * y), t(G, f), g(L);
                                  }
                                },
                                release: r.pg,
                              },
                              rive_paint_v1: {
                                new: r.Cg,
                                release: r.Dg,
                                style: r.Gg,
                                color: r.zg,
                                thickness: r.Hg,
                                join: r.Bg,
                                cap: r.yg,
                                blend_mode: r.xg,
                                feather: r.Ag,
                                shader: r.Eg,
                                shader_transform: (h, v, f) => {
                                  const C = d();
                                  let y = 0;
                                  try {
                                    (y = a(v, 4 * f)), r.Fg(h, y, f);
                                  } finally {
                                    t(y, 4 * f), g(C);
                                  }
                                },
                              },
                              rive_canvas_v1: {
                                new: r.nd,
                                release: r.od,
                                width: r.qd,
                                height: r.ld,
                                resize: r.pd,
                                image: r.md,
                                begin_frame: r.jd,
                                end_frame: r.kd,
                              },
                              rive_gpu_v1: {
                                features: (h, v) => {
                                  const f = d();
                                  let C = 0;
                                  try {
                                    C = a(h, 4 * v);
                                    const y = r.vf(C, v);
                                    return s(C, h, 4 * v), y;
                                  } finally {
                                    t(C, 4 * v), g(f);
                                  }
                                },
                                canvas_new: r.sf,
                                canvas_release: r.tf,
                                canvas_color_view: (h, v, f) => {
                                  const C = d();
                                  let y = 0;
                                  try {
                                    y = a(v, 4 * f);
                                    const L = r.qf(h, y, f);
                                    return s(y, v, 4 * f), L;
                                  } finally {
                                    t(y, 4 * f), g(C);
                                  }
                                },
                                canvas_image: r.rf,
                                canvas_resize: (h, v, f, C, y) => {
                                  const L = d();
                                  let G = 0;
                                  try {
                                    G = a(C, 4 * y);
                                    const ge = r.uf(h, v, f, G, y);
                                    return s(G, C, 4 * y), ge;
                                  } finally {
                                    t(G, 4 * y), g(L);
                                  }
                                },
                                target_view: (h, v, f) => {
                                  const C = d();
                                  let y = 0;
                                  try {
                                    y = a(v, 4 * f);
                                    const L = r.Uf(h, y, f);
                                    return s(y, v, 4 * f), L;
                                  } finally {
                                    t(y, 4 * f), g(C);
                                  }
                                },
                                pass_begin: (h, v, f, C) => {
                                  const y = d();
                                  let L = 0,
                                    G = 0;
                                  try {
                                    return (L = a(h, v)), (G = a(f, C)), r.xf(L, v, G, C);
                                  } finally {
                                    t(G, C), t(L, v), g(y);
                                  }
                                },
                                pass_set_pipeline: r.Ff,
                                pass_set_vertex_buffer: r.If,
                                pass_set_index_buffer: r.Ef,
                                pass_set_bind_group: (h, v, f, C, y) => {
                                  const L = d();
                                  let G = 0;
                                  try {
                                    (G = a(C, y)), r.Cf(h, v, f, G, y);
                                  } finally {
                                    t(G, y), g(L);
                                  }
                                },
                                pass_set_viewport: r.Jf,
                                pass_set_scissor: r.Gf,
                                pass_set_stencil_reference: r.Hf,
                                pass_set_blend_color: r.Df,
                                pass_draw: r.yf,
                                pass_draw_indexed: r.zf,
                                pass_finish: r.Af,
                                pass_release: r.Bf,
                                image_view: r.wf,
                                buffer_new: (h, v, f, C, y) => {
                                  const L = d();
                                  let G = 0;
                                  try {
                                    return (G = a(C, y)), r.mf(h, v, f, G, y);
                                  } finally {
                                    t(G, y), g(L);
                                  }
                                },
                                buffer_update: (h, v, f, C) => {
                                  const y = d();
                                  let L = 0;
                                  try {
                                    (L = a(f, C)), r.pf(h, v, L, C);
                                  } finally {
                                    t(L, C), g(y);
                                  }
                                },
                                buffer_release: r.nf,
                                texture_new: (h, v) => {
                                  const f = d();
                                  let C = 0;
                                  try {
                                    return (C = a(h, v)), r.Vf(C, v);
                                  } finally {
                                    t(C, v), g(f);
                                  }
                                },
                                texture_upload: (h, v, f, C, y) => {
                                  const L = d();
                                  let G = 0,
                                    ge = 0;
                                  try {
                                    (G = a(v, f)), (ge = a(C, y)), r.Xf(h, G, f, ge, y);
                                  } finally {
                                    t(ge, y), t(G, f), g(L);
                                  }
                                },
                                texture_release: r.Wf,
                                sampler_new: (h, v) => {
                                  const f = d();
                                  let C = 0;
                                  try {
                                    return (C = a(h, v)), r.Mf(C, v);
                                  } finally {
                                    t(C, v), g(f);
                                  }
                                },
                                sampler_release: r.Nf,
                                texture_view_new: (h, v, f) => {
                                  const C = d();
                                  let y = 0;
                                  try {
                                    return (y = a(v, f)), r.Yf(h, y, f);
                                  } finally {
                                    t(y, f), g(C);
                                  }
                                },
                                texture_view_release: r.Zf,
                                shader_target: r.Tf,
                                shader_asset_bytes: (h, v, f, C, y) => {
                                  const L = d();
                                  let G = 0,
                                    ge = 0;
                                  try {
                                    (G = a(v, f)), (ge = a(C, y));
                                    const Pe = r.Of(h, G, f, ge, y);
                                    return s(ge, C, y), Pe;
                                  } finally {
                                    t(ge, y), t(G, f), g(L);
                                  }
                                },
                                shader_asset_id: (h, v, f) => {
                                  const C = d();
                                  let y = 0;
                                  try {
                                    return (y = a(v, f)), r.Pf(h, y, f);
                                  } finally {
                                    t(y, f), g(C);
                                  }
                                },
                                shader_module_from_asset: (h, v, f, C) => {
                                  const y = d();
                                  let L = 0;
                                  try {
                                    return (L = a(v, f)), r.Qf(h, L, f, C);
                                  } finally {
                                    t(L, f), g(y);
                                  }
                                },
                                shader_module_from_rstb: (h, v, f, C) => {
                                  const y = d();
                                  let L = 0;
                                  try {
                                    return (L = a(h, v)), r.Rf(L, v, f, C);
                                  } finally {
                                    t(L, v), g(y);
                                  }
                                },
                                shader_module_release: r.Sf,
                                bind_group_layout_new: (h, v, f) => {
                                  const C = d();
                                  let y = 0;
                                  try {
                                    return (y = a(v, f)), r.hf(h, y, f);
                                  } finally {
                                    t(y, f), g(C);
                                  }
                                },
                                bind_group_layout_release: r.jf,
                                bind_group_layout_from_shader: (h, v, f, C) => {
                                  const y = d();
                                  let L = 0;
                                  try {
                                    return (L = a(f, 4 * C)), r.ff(h, v, L, C);
                                  } finally {
                                    t(L, 4 * C), g(y);
                                  }
                                },
                                bind_group_layout_from_shaders: (h, v, f, C, y) => {
                                  const L = d();
                                  let G = 0;
                                  try {
                                    return (G = a(C, 4 * y)), r.gf(h, v, f, G, y);
                                  } finally {
                                    t(G, 4 * y), g(L);
                                  }
                                },
                                bind_group_layout_from_entries: (h, v, f, C, y, L, G) => {
                                  const ge = d();
                                  let Pe = 0,
                                    gt = 0;
                                  try {
                                    return (Pe = a(v, f)), (gt = a(y, L)), r.ef(h, Pe, f, C, gt, L, G);
                                  } finally {
                                    t(gt, L), t(Pe, f), g(ge);
                                  }
                                },
                                bind_group_new: (h, v, f, C, y, L, G) => {
                                  const ge = d();
                                  let Pe = 0,
                                    gt = 0,
                                    pt = 0;
                                  try {
                                    return (
                                      (Pe = a(v, f)),
                                      (gt = a(C, y)),
                                      (pt = a(L, G)),
                                      r.kf(h, Pe, f, gt, y, pt, G)
                                    );
                                  } finally {
                                    t(pt, G), t(gt, y), t(Pe, f), g(ge);
                                  }
                                },
                                bind_group_release: r.lf,
                                pipeline_new: (h, v, f, C) => {
                                  const y = d();
                                  let L = 0,
                                    G = 0;
                                  try {
                                    return (L = a(h, v)), (G = a(f, C)), r.Kf(L, v, G, C);
                                  } finally {
                                    t(G, C), t(L, v), g(y);
                                  }
                                },
                                pipeline_release: r.Lf,
                              },
                              rive_mat4_v1: {
                                multiply: (h, v, f, C, y, L) => {
                                  const G = d();
                                  let ge = 0,
                                    Pe = 0,
                                    gt = 0;
                                  try {
                                    (ge = a(h, v)),
                                      (Pe = a(f, C)),
                                      (gt = a(y, L)),
                                      r.gg(ge, v, Pe, C, gt, L),
                                      s(ge, h, v);
                                  } finally {
                                    t(gt, L), t(Pe, C), t(ge, v), g(G);
                                  }
                                },
                                invert: (h, v, f, C) => {
                                  const y = d();
                                  let L = 0,
                                    G = 0;
                                  try {
                                    (L = a(h, v)), (G = a(f, C));
                                    const ge = r.fg(L, v, G, C);
                                    return s(L, h, v), ge;
                                  } finally {
                                    t(G, C), t(L, v), g(y);
                                  }
                                },
                              },
                              rive_buffer_v1: {
                                new: r.fd,
                                update: (h, v, f) => {
                                  const C = d();
                                  let y = 0;
                                  try {
                                    (y = a(v, f)), r.hd(h, y, f);
                                  } finally {
                                    t(y, f), g(C);
                                  }
                                },
                                release: r.gd,
                              },
                              rive_mesh_instances_v1: {
                                new: r.rg,
                                resize: r.tg,
                                update: (h, v, f, C) => {
                                  const y = d();
                                  let L = 0;
                                  try {
                                    (L = a(f, C)), r.ug(h, v, L, C);
                                  } finally {
                                    t(L, C), g(y);
                                  }
                                },
                                release: r.sg,
                              },
                              rive_blob_v1: {
                                asset_bytes: (h, v, f, C, y) => {
                                  const L = d();
                                  let G = 0,
                                    ge = 0;
                                  try {
                                    (G = a(v, f)), (ge = a(C, y));
                                    const Pe = r.ed(h, G, f, ge, y);
                                    return s(ge, C, y), Pe;
                                  } finally {
                                    t(ge, y), t(G, f), g(L);
                                  }
                                },
                              },
                              rive_image_v1: {
                                from_asset: (h, v, f) => {
                                  const C = d();
                                  let y = 0;
                                  try {
                                    return (y = a(v, f)), r.bg(h, y, f);
                                  } finally {
                                    t(y, f), g(C);
                                  }
                                },
                                width: r.eg,
                                height: r.cg,
                                release: r.dg,
                                decode: (h, v, f) => {
                                  const C = d();
                                  let y = 0;
                                  try {
                                    return (y = a(h, v)), r.$f(y, v, f);
                                  } finally {
                                    t(y, v), g(C);
                                  }
                                },
                                decode_cancel: r.ag,
                              },
                              rive_font_v1: {
                                from_asset: (h, v, f) => {
                                  const C = d();
                                  let y = 0;
                                  try {
                                    return (y = a(v, f)), r.We(h, y, f);
                                  } finally {
                                    t(y, f), g(C);
                                  }
                                },
                                decode: (h, v) => {
                                  const f = d();
                                  let C = 0;
                                  try {
                                    return (C = a(h, v)), r.Ue(C, v);
                                  } finally {
                                    t(C, v), g(f);
                                  }
                                },
                                release: r.bf,
                                metrics: (h, v, f) => {
                                  const C = d();
                                  let y = 0;
                                  try {
                                    (y = a(v, 4 * f)), r.af(h, y, f), s(y, v, 4 * f);
                                  } finally {
                                    t(y, 4 * f), g(C);
                                  }
                                },
                                weight: r.cf,
                                is_italic: r.$e,
                                axis_count: r.Se,
                                axis: (h, v, f, C) => {
                                  const y = d();
                                  let L = 0;
                                  try {
                                    (L = a(f, 4 * C)), r.Re(h, v, L, C), s(L, f, 4 * C);
                                  } finally {
                                    t(L, 4 * C), g(y);
                                  }
                                },
                                axis_value: r.Te,
                                features: (h, v, f) => {
                                  const C = d();
                                  let y = 0;
                                  try {
                                    y = a(v, 4 * f);
                                    const L = r.Ve(h, y, f);
                                    return s(y, v, 4 * f), L;
                                  } finally {
                                    t(y, 4 * f), g(C);
                                  }
                                },
                                has_glyph: r.Ze,
                                with_options: (h, v, f, C, y) => {
                                  const L = d();
                                  let G = 0,
                                    ge = 0;
                                  try {
                                    return (G = a(v, 4 * f)), (ge = a(C, 4 * y)), r.df(h, G, f, ge, y);
                                  } finally {
                                    t(ge, 4 * y), t(G, 4 * f), g(L);
                                  }
                                },
                                glyph_verbs: (h, v, f, C) => {
                                  const y = d();
                                  let L = 0;
                                  try {
                                    L = a(f, C);
                                    const G = r.Ye(h, v, L, C);
                                    return s(L, f, C), G;
                                  } finally {
                                    t(L, C), g(y);
                                  }
                                },
                                glyph_points: (h, v, f, C) => {
                                  const y = d();
                                  let L = 0;
                                  try {
                                    L = a(f, 4 * C);
                                    const G = r.Xe(h, v, L, C);
                                    return s(L, f, 4 * C), G;
                                  } finally {
                                    t(L, 4 * C), g(y);
                                  }
                                },
                              },
                              rive_text_v1: {
                                new: r.xh,
                                release: r.yh,
                                append: (h, v, f, C, y, L, G, ge, Pe) => {
                                  const gt = d();
                                  let pt = 0;
                                  try {
                                    (pt = a(v, f)), r.nh(h, pt, f, C, y, L, G, ge, Pe);
                                  } finally {
                                    t(pt, f), g(gt);
                                  }
                                },
                                clear: r.qh,
                                layout: (h, v, f) => {
                                  const C = d();
                                  let y = 0;
                                  try {
                                    (y = a(v, f)), r.uh(h, y, f);
                                  } finally {
                                    t(y, f), g(C);
                                  }
                                },
                                draw: r.rh,
                                bounds: (h, v, f) => {
                                  const C = d();
                                  let y = 0;
                                  try {
                                    (y = a(v, 4 * f)), r.oh(h, y, f), s(y, v, 4 * f);
                                  } finally {
                                    t(y, 4 * f), g(C);
                                  }
                                },
                                length: r.vh,
                                lines: (h, v, f) => {
                                  const C = d();
                                  let y = 0;
                                  try {
                                    y = a(v, 4 * f);
                                    const L = r.wh(h, y, f);
                                    return s(y, v, 4 * f), L;
                                  } finally {
                                    t(y, 4 * f), g(C);
                                  }
                                },
                                runs: (h, v, f) => {
                                  const C = d();
                                  let y = 0;
                                  try {
                                    y = a(v, 4 * f);
                                    const L = r.zh(h, y, f);
                                    return s(y, v, 4 * f), L;
                                  } finally {
                                    t(y, 4 * f), g(C);
                                  }
                                },
                                glyphs: (h, v, f) => {
                                  const C = d();
                                  let y = 0;
                                  try {
                                    y = a(v, 4 * f);
                                    const L = r.sh(h, y, f);
                                    return s(y, v, 4 * f), L;
                                  } finally {
                                    t(y, 4 * f), g(C);
                                  }
                                },
                                hit_test: r.th,
                                caret: (h, v, f, C) => {
                                  const y = d();
                                  let L = 0;
                                  try {
                                    L = a(f, 4 * C);
                                    const G = r.ph(h, v, L, C);
                                    return s(L, f, 4 * C), G;
                                  } finally {
                                    t(L, 4 * C), g(y);
                                  }
                                },
                                selection_rects: (h, v, f, C, y) => {
                                  const L = d();
                                  let G = 0;
                                  try {
                                    G = a(C, 4 * y);
                                    const ge = r.Ah(h, v, f, G, y);
                                    return s(G, C, 4 * y), ge;
                                  } finally {
                                    t(G, 4 * y), g(L);
                                  }
                                },
                              },
                              rive_shader_v1: { linear: r.jh, radial: r.kh, release: r.lh },
                              rive_test_v1: {
                                blob: (h, v, f, C) => {
                                  const y = d();
                                  let L = 0,
                                    G = 0;
                                  try {
                                    (L = a(h, v)), (G = a(f, C));
                                    const ge = r.mh(L, v, G, C);
                                    return s(G, f, C), ge;
                                  } finally {
                                    t(G, C), t(L, v), g(y);
                                  }
                                },
                              },
                              rive_transition_v1: { child_draw: r.Ch, child_width: r.Eh, child_height: r.Dh },
                              rive_renderer_v1: {
                                save: r.Xg,
                                restore: r.Wg,
                                transform: r.Yg,
                                draw_path: r.Tg,
                                clip_path: r.Pg,
                                modulate_opacity: r.Vg,
                                modulate_color: r.Ug,
                                draw_image: r.Qg,
                                draw_image_mesh: r.Rg,
                                draw_image_mesh_instanced: r.Sg,
                              },
                              rive_net_v1: {
                                fetch: (h, v, f) => {
                                  const C = d();
                                  let y = 0;
                                  try {
                                    return (y = a(h, v)), r.vg(y, v, f);
                                  } finally {
                                    t(y, v), g(C);
                                  }
                                },
                                fetch_cancel: r.wg,
                              },
                              rive_file_v1: {
                                decode: (h, v, f, C) => {
                                  const y = d();
                                  let L = 0,
                                    G = 0;
                                  try {
                                    (L = a(h, v)), (G = a(f, 4 * C));
                                    const ge = r.Pe(L, v, G, C);
                                    return s(G, f, 4 * C), ge;
                                  } finally {
                                    t(G, 4 * C), t(L, v), g(y);
                                  }
                                },
                                release: r.Qe,
                                artboard_count: r.Ie,
                                artboard_name: (h, v, f, C) => {
                                  const y = d();
                                  let L = 0;
                                  try {
                                    L = a(f, C);
                                    const G = r.Je(h, v, L, C);
                                    return s(L, f, C), G;
                                  } finally {
                                    t(L, C), g(y);
                                  }
                                },
                                bindable: (h, v, f, C) => {
                                  const y = d();
                                  let L = 0;
                                  try {
                                    return (L = a(v, f)), r.Ke(h, L, f, C);
                                  } finally {
                                    t(L, f), g(y);
                                  }
                                },
                                bindable_release: r.Oe,
                                bindable_name: (h, v, f) => {
                                  const C = d();
                                  let y = 0;
                                  try {
                                    y = a(v, f);
                                    const L = r.Ne(h, y, f);
                                    return s(y, v, f), L;
                                  } finally {
                                    t(y, f), g(C);
                                  }
                                },
                                bindable_data: r.Le,
                                bindable_equal: r.Me,
                              },
                            };
                          }
                          function o(w, e) {
                            const r = e.Ca ?? { i: !1 },
                              d = () => {
                                const a = Error(e.j);
                                throw ((e.j = null), a);
                              },
                              g = () => {
                                throw Error("librive faulted in a nested script call");
                              },
                              b = () => {
                                throw Error("script VM was released");
                              };
                            return {
                              fh: ((a) => (t, s, c) => {
                                e.g === 0 && b(), r.i && r.l++;
                                try {
                                  a(e.g, t, s, c);
                                } catch (_) {
                                  throw ((t = _), (e.h = !0), t);
                                }
                                e.h && g(), e.j !== null && d();
                              })(w(0)),
                              gh: ((a) => (t) => {
                                e.g === 0 && b(), r.i && r.l++;
                                try {
                                  a(e.g, t);
                                } catch (s) {
                                  throw ((t = s), (e.h = !0), t);
                                }
                                e.h && g(), e.j !== null && d();
                              })(w(1)),
                              Zg: ((a) => (t) => {
                                e.g === 0 && b(), r.i && r.l++;
                                try {
                                  a(e.g, t);
                                } catch (s) {
                                  throw ((t = s), (e.h = !0), t);
                                }
                                e.h && g(), e.j !== null && d();
                              })(w(2)),
                              dh: ((a) => (t, s) => {
                                e.g === 0 && b(), r.i && r.l++;
                                try {
                                  a(e.g, t, s);
                                } catch (c) {
                                  throw ((t = c), (e.h = !0), t);
                                }
                                e.h && g(), e.j !== null && d();
                              })(w(3)),
                              $g: ((a) => (t, s) => {
                                e.g === 0 && b(), r.i && r.l++;
                                try {
                                  a(e.g, t, s);
                                } catch (c) {
                                  throw ((t = c), (e.h = !0), t);
                                }
                                e.h && g(), e.j !== null && d();
                              })(w(4)),
                              bh: ((a) => (t) => {
                                e.g === 0 && b(), r.i && r.l++;
                                let s;
                                try {
                                  s = a(e.g, t);
                                } catch (c) {
                                  throw ((t = c), (e.h = !0), t);
                                }
                                return e.h && g(), e.j !== null && d(), s;
                              })(w(5)),
                              ah: ((a) => () => {
                                e.g === 0 && b(), r.i && r.l++;
                                try {
                                  a(e.g);
                                } catch (s) {
                                  var t = s;
                                  throw ((e.h = !0), t);
                                }
                                e.h && g(), e.j !== null && d();
                              })(w(6)),
                              hh: ((a) => (t) => {
                                e.g === 0 && b(), r.i && r.l++;
                                let s;
                                try {
                                  s = a(e.g, t);
                                } catch (c) {
                                  throw ((t = c), (e.h = !0), t);
                                }
                                return e.h && g(), e.j !== null && d(), s;
                              })(w(7)),
                              eh: ((a) => (t) => {
                                e.g === 0 && b(), r.i && r.l++;
                                let s;
                                try {
                                  s = a(e.g, t);
                                } catch (c) {
                                  throw ((t = c), (e.h = !0), t);
                                }
                                return e.h && g(), e.j !== null && d(), s;
                              })(w(8)),
                              ih: ((a) => (t, s, c) => {
                                e.g === 0 && b(), r.i && r.l++;
                                let _;
                                try {
                                  _ = a(e.g, t, s, c);
                                } catch (h) {
                                  throw ((t = h), (e.h = !0), t);
                                }
                                return e.h && g(), e.j !== null && d(), _;
                              })(w(9)),
                              ne: ((a) => (t) => {
                                e.g === 0 && b(), r.i && r.l++;
                                let s;
                                try {
                                  s = a(e.g, t);
                                } catch (c) {
                                  throw ((t = c), (e.h = !0), t);
                                }
                                return e.h && g(), e.j !== null && d(), s;
                              })(w(10)),
                              he: ((a) => (t) => {
                                e.g === 0 && b(), r.i && r.l++;
                                let s;
                                try {
                                  s = a(e.g, t);
                                } catch (c) {
                                  throw ((t = c), (e.h = !0), t);
                                }
                                return e.h && g(), e.j !== null && d(), s;
                              })(w(11)),
                              Od: ((a) => (t, s, c) => {
                                e.g === 0 && b(), r.i && r.l++;
                                let _;
                                try {
                                  _ = a(e.g, t, s, c);
                                } catch (h) {
                                  throw ((t = h), (e.h = !0), t);
                                }
                                return e.h && g(), e.j !== null && d(), _;
                              })(w(12)),
                              Pd: ((a) => (t, s, c) => {
                                e.g === 0 && b(), r.i && r.l++;
                                let _;
                                try {
                                  _ = a(e.g, t, s, c);
                                } catch (h) {
                                  throw ((t = h), (e.h = !0), t);
                                }
                                return e.h && g(), e.j !== null && d(), _;
                              })(w(13)),
                              Dd: ((a) => (t) => {
                                e.g === 0 && b(), r.i && r.l++;
                                let s;
                                try {
                                  s = a(e.g, t);
                                } catch (c) {
                                  throw ((t = c), (e.h = !0), t);
                                }
                                return e.h && g(), e.j !== null && d(), s;
                              })(w(14)),
                              Ed: ((a) => (t) => {
                                e.g === 0 && b(), r.i && r.l++;
                                let s;
                                try {
                                  s = a(e.g, t);
                                } catch (c) {
                                  throw ((t = c), (e.h = !0), t);
                                }
                                return e.h && g(), e.j !== null && d(), s;
                              })(w(15)),
                              Gd: ((a) => (t) => {
                                e.g === 0 && b(), r.i && r.l++;
                                let s;
                                try {
                                  s = a(e.g, t);
                                } catch (c) {
                                  throw ((t = c), (e.h = !0), t);
                                }
                                return e.h && g(), e.j !== null && d(), s;
                              })(w(16)),
                              Fd: ((a) => (t) => {
                                e.g === 0 && b(), r.i && r.l++;
                                try {
                                  a(e.g, t);
                                } catch (s) {
                                  throw ((t = s), (e.h = !0), t);
                                }
                                e.h && g(), e.j !== null && d();
                              })(w(17)),
                              Qd: ((a) => (t, s) => {
                                e.g === 0 && b(), r.i && r.l++;
                                let c;
                                try {
                                  c = a(e.g, t, s);
                                } catch (_) {
                                  throw ((t = _), (e.h = !0), t);
                                }
                                return e.h && g(), e.j !== null && d(), c;
                              })(w(18)),
                              de: ((a) => (t, s, c, _) => {
                                e.g === 0 && b(), r.i && r.l++;
                                let h;
                                try {
                                  h = a(e.g, t, s, c, _);
                                } catch (v) {
                                  throw ((t = v), (e.h = !0), t);
                                }
                                return e.h && g(), e.j !== null && d(), h;
                              })(w(19)),
                              Ce: ((a) => (t) => {
                                e.g === 0 && b(), r.i && r.l++;
                                try {
                                  a(e.g, t);
                                } catch (s) {
                                  throw ((t = s), (e.h = !0), t);
                                }
                                e.h && g(), e.j !== null && d();
                              })(w(20)),
                              Ae: ((a) => (t, s, c) => {
                                e.g === 0 && b(), r.i && r.l++;
                                let _;
                                try {
                                  _ = a(e.g, t, s, c);
                                } catch (h) {
                                  throw ((t = h), (e.h = !0), t);
                                }
                                return e.h && g(), e.j !== null && d(), _;
                              })(w(21)),
                              se: ((a) => (t, s, c) => {
                                e.g === 0 && b(), r.i && r.l++;
                                let _;
                                try {
                                  _ = a(e.g, t, s, c);
                                } catch (h) {
                                  throw ((t = h), (e.h = !0), t);
                                }
                                return e.h && g(), e.j !== null && d(), _;
                              })(w(22)),
                              De: ((a) => (t, s, c) => {
                                e.g === 0 && b(), r.i && r.l++;
                                let _;
                                try {
                                  _ = a(e.g, t, s, c);
                                } catch (h) {
                                  throw ((t = h), (e.h = !0), t);
                                }
                                return e.h && g(), e.j !== null && d(), _;
                              })(w(23)),
                              Fe: ((a) => (t, s, c) => {
                                e.g === 0 && b(), r.i && r.l++;
                                let _;
                                try {
                                  _ = a(e.g, t, s, c);
                                } catch (h) {
                                  throw ((t = h), (e.h = !0), t);
                                }
                                return e.h && g(), e.j !== null && d(), _;
                              })(w(24)),
                              te: ((a) => (t, s, c) => {
                                e.g === 0 && b(), r.i && r.l++;
                                let _;
                                try {
                                  _ = a(e.g, t, s, c);
                                } catch (h) {
                                  throw ((t = h), (e.h = !0), t);
                                }
                                return e.h && g(), e.j !== null && d(), _;
                              })(w(25)),
                              Ge: ((a) => (t, s, c) => {
                                e.g === 0 && b(), r.i && r.l++;
                                let _;
                                try {
                                  _ = a(e.g, t, s, c);
                                } catch (h) {
                                  throw ((t = h), (e.h = !0), t);
                                }
                                return e.h && g(), e.j !== null && d(), _;
                              })(w(26)),
                              Be: ((a) => (t, s, c, _, h) => {
                                e.g === 0 && b(), r.i && r.l++;
                                let v;
                                try {
                                  v = a(e.g, t, s, c, _, h);
                                } catch (f) {
                                  throw ((t = f), (e.h = !0), t);
                                }
                                return e.h && g(), e.j !== null && d(), v;
                              })(w(27)),
                              ye: ((a) => (t, s, c) => {
                                e.g === 0 && b(), r.i && r.l++;
                                let _;
                                try {
                                  _ = a(e.g, t, s, c);
                                } catch (h) {
                                  throw ((t = h), (e.h = !0), t);
                                }
                                return e.h && g(), e.j !== null && d(), _;
                              })(w(28)),
                              Ee: ((a) => (t) => {
                                e.g === 0 && b(), r.i && r.l++;
                                let s;
                                try {
                                  s = a(e.g, t);
                                } catch (c) {
                                  throw ((t = c), (e.h = !0), t);
                                }
                                return e.h && g(), e.j !== null && d(), s;
                              })(w(29)),
                              ve: ((a) => (t, s) => {
                                e.g === 0 && b(), r.i && r.l++;
                                let c;
                                try {
                                  c = a(e.g, t, s);
                                } catch (_) {
                                  throw ((t = _), (e.h = !0), t);
                                }
                                return e.h && g(), e.j !== null && d(), c;
                              })(w(30)),
                              oe: ((a) => (t) => {
                                e.g === 0 && b(), r.i && r.l++;
                                let s;
                                try {
                                  s = a(e.g, t);
                                } catch (c) {
                                  throw ((t = c), (e.h = !0), t);
                                }
                                return e.h && g(), e.j !== null && d(), s;
                              })(w(31)),
                              ze: ((a) => (t, s, c) => {
                                e.g === 0 && b(), r.i && r.l++;
                                let _;
                                try {
                                  _ = a(e.g, t, s, c);
                                } catch (h) {
                                  throw ((t = h), (e.h = !0), t);
                                }
                                return e.h && g(), e.j !== null && d(), _;
                              })(w(32)),
                              ue: ((a) => (t, s, c) => {
                                e.g === 0 && b(), r.i && r.l++;
                                let _;
                                try {
                                  _ = a(e.g, t, s, c);
                                } catch (h) {
                                  throw ((t = h), (e.h = !0), t);
                                }
                                return e.h && g(), e.j !== null && d(), _;
                              })(w(33)),
                              xe: ((a) => (t, s, c) => {
                                e.g === 0 && b(), r.i && r.l++;
                                let _;
                                try {
                                  _ = a(e.g, t, s, c);
                                } catch (h) {
                                  throw ((t = h), (e.h = !0), t);
                                }
                                return e.h && g(), e.j !== null && d(), _;
                              })(w(34)),
                              we: ((a) => (t, s, c) => {
                                e.g === 0 && b(), r.i && r.l++;
                                let _;
                                try {
                                  _ = a(e.g, t, s, c);
                                } catch (h) {
                                  throw ((t = h), (e.h = !0), t);
                                }
                                return e.h && g(), e.j !== null && d(), _;
                              })(w(35)),
                              re: ((a) => (t, s, c) => {
                                e.g === 0 && b(), r.i && r.l++;
                                let _;
                                try {
                                  _ = a(e.g, t, s, c);
                                } catch (h) {
                                  throw ((t = h), (e.h = !0), t);
                                }
                                return e.h && g(), e.j !== null && d(), _;
                              })(w(36)),
                              qe: ((a) => (t, s, c) => {
                                e.g === 0 && b(), r.i && r.l++;
                                let _;
                                try {
                                  _ = a(e.g, t, s, c);
                                } catch (h) {
                                  throw ((t = h), (e.h = !0), t);
                                }
                                return e.h && g(), e.j !== null && d(), _;
                              })(w(37)),
                              Rd: ((a) => (t) => {
                                e.g === 0 && b(), r.i && r.l++;
                                let s;
                                try {
                                  s = a(e.g, t);
                                } catch (c) {
                                  throw ((t = c), (e.h = !0), t);
                                }
                                return e.h && g(), e.j !== null && d(), s;
                              })(w(38)),
                              Sd: ((a) => (t, s) => {
                                e.g === 0 && b(), r.i && r.l++;
                                try {
                                  a(e.g, t, s);
                                } catch (c) {
                                  throw ((t = c), (e.h = !0), t);
                                }
                                e.h && g(), e.j !== null && d();
                              })(w(39)),
                              Ld: ((a) => (t) => {
                                e.g === 0 && b(), r.i && r.l++;
                                let s;
                                try {
                                  s = a(e.g, t);
                                } catch (c) {
                                  throw ((t = c), (e.h = !0), t);
                                }
                                return e.h && g(), e.j !== null && d(), s;
                              })(w(40)),
                              Nd: ((a) => (t, s) => {
                                e.g === 0 && b(), r.i && r.l++;
                                try {
                                  a(e.g, t, s);
                                } catch (c) {
                                  throw ((t = c), (e.h = !0), t);
                                }
                                e.h && g(), e.j !== null && d();
                              })(w(41)),
                              Md: ((a) => (t) => {
                                e.g === 0 && b(), r.i && r.l++;
                                try {
                                  a(e.g, t);
                                } catch (s) {
                                  throw ((t = s), (e.h = !0), t);
                                }
                                e.h && g(), e.j !== null && d();
                              })(w(42)),
                              xd: ((a) => (t) => {
                                e.g === 0 && b(), r.i && r.l++;
                                let s;
                                try {
                                  s = a(e.g, t);
                                } catch (c) {
                                  throw ((t = c), (e.h = !0), t);
                                }
                                return e.h && g(), e.j !== null && d(), s;
                              })(w(43)),
                              vd: ((a) => (t, s, c) => {
                                e.g === 0 && b(), r.i && r.l++;
                                let _;
                                try {
                                  _ = a(e.g, t, s, c);
                                } catch (h) {
                                  throw ((t = h), (e.h = !0), t);
                                }
                                return e.h && g(), e.j !== null && d(), _;
                              })(w(44)),
                              wd: ((a) => (t, s, c) => {
                                e.g === 0 && b(), r.i && r.l++;
                                let _;
                                try {
                                  _ = a(e.g, t, s, c);
                                } catch (h) {
                                  throw ((t = h), (e.h = !0), t);
                                }
                                return e.h && g(), e.j !== null && d(), _;
                              })(w(45)),
                              yd: ((a) => (t, s, c) => {
                                e.g === 0 && b(), r.i && r.l++;
                                try {
                                  a(e.g, t, s, c);
                                } catch (_) {
                                  throw ((t = _), (e.h = !0), t);
                                }
                                e.h && g(), e.j !== null && d();
                              })(w(46)),
                              ud: ((a) => (t) => {
                                e.g === 0 && b(), r.i && r.l++;
                                try {
                                  a(e.g, t);
                                } catch (s) {
                                  throw ((t = s), (e.h = !0), t);
                                }
                                e.h && g(), e.j !== null && d();
                              })(w(47)),
                              sd: ((a) => (t) => {
                                e.g === 0 && b(), r.i && r.l++;
                                let s;
                                try {
                                  s = a(e.g, t);
                                } catch (c) {
                                  throw ((t = c), (e.h = !0), t);
                                }
                                return e.h && g(), e.j !== null && d(), s;
                              })(w(48)),
                              td: ((a) => (t, s) => {
                                e.g === 0 && b(), r.i && r.l++;
                                try {
                                  a(e.g, t, s);
                                } catch (c) {
                                  throw ((t = c), (e.h = !0), t);
                                }
                                e.h && g(), e.j !== null && d();
                              })(w(49)),
                              Id: ((a) => (t, s, c) => {
                                e.g === 0 && b(), r.i && r.l++;
                                let _;
                                try {
                                  _ = a(e.g, t, s, c);
                                } catch (h) {
                                  throw ((t = h), (e.h = !0), t);
                                }
                                return e.h && g(), e.j !== null && d(), _;
                              })(w(50)),
                              Jd: ((a) => (t, s, c) => {
                                e.g === 0 && b(), r.i && r.l++;
                                try {
                                  a(e.g, t, s, c);
                                } catch (_) {
                                  throw ((t = _), (e.h = !0), t);
                                }
                                e.h && g(), e.j !== null && d();
                              })(w(51)),
                              Kd: ((a) => (t, s, c) => {
                                e.g === 0 && b(), r.i && r.l++;
                                let _;
                                try {
                                  _ = a(e.g, t, s, c);
                                } catch (h) {
                                  throw ((t = h), (e.h = !0), t);
                                }
                                return e.h && g(), e.j !== null && d(), _;
                              })(w(52)),
                              ge: ((a) => (t) => {
                                e.g === 0 && b(), r.i && r.l++;
                                try {
                                  a(e.g, t);
                                } catch (s) {
                                  throw ((t = s), (e.h = !0), t);
                                }
                                e.h && g(), e.j !== null && d();
                              })(w(53)),
                              le: ((a) => (t) => {
                                e.g === 0 && b(), r.i && r.l++;
                                try {
                                  a(e.g, t);
                                } catch (s) {
                                  throw ((t = s), (e.h = !0), t);
                                }
                                e.h && g(), e.j !== null && d();
                              })(w(54)),
                              Wd: ((a) => (t) => {
                                e.g === 0 && b(), r.i && r.l++;
                                let s;
                                try {
                                  s = a(e.g, t);
                                } catch (c) {
                                  throw ((t = c), (e.h = !0), t);
                                }
                                return e.h && g(), e.j !== null && d(), s;
                              })(w(55)),
                              Yd: ((a) => (t, s) => {
                                e.g === 0 && b(), r.i && r.l++;
                                try {
                                  a(e.g, t, s);
                                } catch (c) {
                                  throw ((t = c), (e.h = !0), t);
                                }
                                e.h && g(), e.j !== null && d();
                              })(w(56)),
                              Xd: ((a) => (t) => {
                                e.g === 0 && b(), r.i && r.l++;
                                let s;
                                try {
                                  s = a(e.g, t);
                                } catch (c) {
                                  throw ((t = c), (e.h = !0), t);
                                }
                                return e.h && g(), e.j !== null && d(), s;
                              })(w(57)),
                              be: ((a) => (t) => {
                                e.g === 0 && b(), r.i && r.l++;
                                let s;
                                try {
                                  s = a(e.g, t);
                                } catch (c) {
                                  throw ((t = c), (e.h = !0), t);
                                }
                                return e.h && g(), e.j !== null && d(), s;
                              })(w(58)),
                              Td: ((a) => (t) => {
                                e.g === 0 && b(), r.i && r.l++;
                                try {
                                  a(e.g, t);
                                } catch (s) {
                                  throw ((t = s), (e.h = !0), t);
                                }
                                e.h && g(), e.j !== null && d();
                              })(w(59)),
                              ce: ((a) => (t, s, c) => {
                                e.g === 0 && b(), r.i && r.l++;
                                try {
                                  a(e.g, t, s, c);
                                } catch (_) {
                                  throw ((t = _), (e.h = !0), t);
                                }
                                e.h && g(), e.j !== null && d();
                              })(w(60)),
                              Vd: ((a) => (t, s, c) => {
                                e.g === 0 && b(), r.i && r.l++;
                                try {
                                  a(e.g, t, s, c);
                                } catch (_) {
                                  throw ((t = _), (e.h = !0), t);
                                }
                                e.h && g(), e.j !== null && d();
                              })(w(61)),
                              Zd: ((a) => (t, s) => {
                                e.g === 0 && b(), r.i && r.l++;
                                try {
                                  a(e.g, t, s);
                                } catch (c) {
                                  throw ((t = c), (e.h = !0), t);
                                }
                                e.h && g(), e.j !== null && d();
                              })(w(62)),
                              ae: ((a) => (t, s) => {
                                e.g === 0 && b(), r.i && r.l++;
                                try {
                                  a(e.g, t, s);
                                } catch (c) {
                                  throw ((t = c), (e.h = !0), t);
                                }
                                e.h && g(), e.j !== null && d();
                              })(w(63)),
                              $d: ((a) => (t, s) => {
                                e.g === 0 && b(), r.i && r.l++;
                                try {
                                  a(e.g, t, s);
                                } catch (c) {
                                  throw ((t = c), (e.h = !0), t);
                                }
                                e.h && g(), e.j !== null && d();
                              })(w(64)),
                              Ud: ((a) => (t, s) => {
                                e.g === 0 && b(), r.i && r.l++;
                                let c;
                                try {
                                  c = a(e.g, t, s);
                                } catch (_) {
                                  throw ((t = _), (e.h = !0), t);
                                }
                                return e.h && g(), e.j !== null && d(), c;
                              })(w(65)),
                              pe: ((a) => (t, s) => {
                                e.g === 0 && b(), r.i && r.l++;
                                try {
                                  a(e.g, t, s);
                                } catch (c) {
                                  throw ((t = c), (e.h = !0), t);
                                }
                                e.h && g(), e.j !== null && d();
                              })(w(66)),
                              Bd: ((a) => (t) => {
                                e.g === 0 && b(), r.i && r.l++;
                                let s;
                                try {
                                  s = a(e.g, t);
                                } catch (c) {
                                  throw ((t = c), (e.h = !0), t);
                                }
                                return e.h && g(), e.j !== null && d(), s;
                              })(w(67)),
                              Cd: ((a) => (t, s) => {
                                e.g === 0 && b(), r.i && r.l++;
                                try {
                                  a(e.g, t, s);
                                } catch (c) {
                                  throw ((t = c), (e.h = !0), t);
                                }
                                e.h && g(), e.j !== null && d();
                              })(w(68)),
                              ee: ((a) => (t) => {
                                e.g === 0 && b(), r.i && r.l++;
                                let s;
                                try {
                                  s = a(e.g, t);
                                } catch (c) {
                                  throw ((t = c), (e.h = !0), t);
                                }
                                return e.h && g(), e.j !== null && d(), s;
                              })(w(69)),
                              fe: ((a) => (t, s) => {
                                e.g === 0 && b(), r.i && r.l++;
                                try {
                                  a(e.g, t, s);
                                } catch (c) {
                                  throw ((t = c), (e.h = !0), t);
                                }
                                e.h && g(), e.j !== null && d();
                              })(w(70)),
                              zd: ((a) => (t) => {
                                e.g === 0 && b(), r.i && r.l++;
                                let s;
                                try {
                                  s = a(e.g, t);
                                } catch (c) {
                                  throw ((t = c), (e.h = !0), t);
                                }
                                return e.h && g(), e.j !== null && d(), s;
                              })(w(71)),
                              Ad: ((a) => (t, s) => {
                                e.g === 0 && b(), r.i && r.l++;
                                try {
                                  a(e.g, t, s);
                                } catch (c) {
                                  throw ((t = c), (e.h = !0), t);
                                }
                                e.h && g(), e.j !== null && d();
                              })(w(72)),
                              je: ((a) => (t, s, c) => {
                                e.g === 0 && b(), r.i && r.l++;
                                let _;
                                try {
                                  _ = a(e.g, t, s, c);
                                } catch (h) {
                                  throw ((t = h), (e.h = !0), t);
                                }
                                return e.h && g(), e.j !== null && d(), _;
                              })(w(73)),
                              ie: ((a) => (t) => {
                                e.g === 0 && b(), r.i && r.l++;
                                let s;
                                try {
                                  s = a(e.g, t);
                                } catch (c) {
                                  throw ((t = c), (e.h = !0), t);
                                }
                                return e.h && g(), e.j !== null && d(), s;
                              })(w(74)),
                              ke: ((a) => (t, s, c) => {
                                e.g === 0 && b(), r.i && r.l++;
                                try {
                                  a(e.g, t, s, c);
                                } catch (_) {
                                  throw ((t = _), (e.h = !0), t);
                                }
                                e.h && g(), e.j !== null && d();
                              })(w(75)),
                              He: ((a) => (t, s) => {
                                e.g === 0 && b(), r.i && r.l++;
                                try {
                                  a(e.g, t, s);
                                } catch (c) {
                                  throw ((t = c), (e.h = !0), t);
                                }
                                e.h && g(), e.j !== null && d();
                              })(w(76)),
                              me: ((a) => (t) => {
                                e.g === 0 && b(), r.i && r.l++;
                                try {
                                  a(e.g, t);
                                } catch (s) {
                                  throw ((t = s), (e.h = !0), t);
                                }
                                e.h && g(), e.j !== null && d();
                              })(w(77)),
                              Hd: ((a) => (t, s, c, _, h, v) => {
                                e.g === 0 && b(), r.i && r.l++;
                                try {
                                  a(e.g, t, s, c, _, h, v);
                                } catch (f) {
                                  throw ((t = f), (e.h = !0), t);
                                }
                                e.h && g(), e.j !== null && d();
                              })(w(78)),
                              Ac: ((a) => (t) => {
                                e.g === 0 && b(), r.i && r.l++;
                                try {
                                  a(e.g, t);
                                } catch (s) {
                                  throw ((t = s), (e.h = !0), t);
                                }
                                e.h && g(), e.j !== null && d();
                              })(w(79)),
                              Tb: ((a) => (t, s) => {
                                e.g === 0 && b(), r.i && r.l++;
                                let c;
                                try {
                                  c = a(e.g, t, s);
                                } catch (_) {
                                  throw ((t = _), (e.h = !0), t);
                                }
                                return e.h && g(), e.j !== null && d(), c;
                              })(w(80)),
                              ac: ((a) => (t, s) => {
                                e.g === 0 && b(), r.i && r.l++;
                                try {
                                  a(e.g, t, s);
                                } catch (c) {
                                  throw ((t = c), (e.h = !0), t);
                                }
                                e.h && g(), e.j !== null && d();
                              })(w(81)),
                              lc: ((a) => (t, s) => {
                                e.g === 0 && b(), r.i && r.l++;
                                let c;
                                try {
                                  c = a(e.g, t, s);
                                } catch (_) {
                                  throw ((t = _), (e.h = !0), t);
                                }
                                return e.h && g(), e.j !== null && d(), c;
                              })(w(82)),
                              $b: ((a) => (t) => {
                                e.g === 0 && b(), r.i && r.l++;
                                let s;
                                try {
                                  s = a(e.g, t);
                                } catch (c) {
                                  throw ((t = c), (e.h = !0), t);
                                }
                                return e.h && g(), e.j !== null && d(), s;
                              })(w(83)),
                              Fc: ((a) => (t) => {
                                e.g === 0 && b(), r.i && r.l++;
                                let s;
                                try {
                                  s = a(e.g, t);
                                } catch (c) {
                                  throw ((t = c), (e.h = !0), t);
                                }
                                return e.h && g(), e.j !== null && d(), s;
                              })(w(84)),
                              kc: ((a) => (t) => {
                                e.g === 0 && b(), r.i && r.l++;
                                let s;
                                try {
                                  s = a(e.g, t);
                                } catch (c) {
                                  throw ((t = c), (e.h = !0), t);
                                }
                                return e.h && g(), e.j !== null && d(), s;
                              })(w(85)),
                              Ec: ((a) => (t, s) => {
                                e.g === 0 && b(), r.i && r.l++;
                                try {
                                  a(e.g, t, s);
                                } catch (c) {
                                  throw ((t = c), (e.h = !0), t);
                                }
                                e.h && g(), e.j !== null && d();
                              })(w(86)),
                              Dc: ((a) => (t, s) => {
                                e.g === 0 && b(), r.i && r.l++;
                                try {
                                  a(e.g, t, s);
                                } catch (c) {
                                  throw ((t = c), (e.h = !0), t);
                                }
                                e.h && g(), e.j !== null && d();
                              })(w(87)),
                              ic: ((a) => (t) => {
                                e.g === 0 && b(), r.i && r.l++;
                                let s;
                                try {
                                  s = a(e.g, t);
                                } catch (c) {
                                  throw ((t = c), (e.h = !0), t);
                                }
                                return e.h && g(), e.j !== null && d(), s;
                              })(w(88)),
                              Cc: ((a) => (t, s) => {
                                e.g === 0 && b(), r.i && r.l++;
                                try {
                                  a(e.g, t, s);
                                } catch (c) {
                                  throw ((t = c), (e.h = !0), t);
                                }
                                e.h && g(), e.j !== null && d();
                              })(w(89)),
                              Zb: ((a) => (t, s, c) => {
                                e.g === 0 && b(), r.i && r.l++;
                                try {
                                  a(e.g, t, s, c);
                                } catch (_) {
                                  throw ((t = _), (e.h = !0), t);
                                }
                                e.h && g(), e.j !== null && d();
                              })(w(90)),
                              yc: ((a) => (t, s, c, _, h) => {
                                e.g === 0 && b(), r.i && r.l++;
                                let v;
                                try {
                                  v = a(e.g, t, s, c, _, h);
                                } catch (f) {
                                  throw ((t = f), (e.h = !0), t);
                                }
                                return e.h && g(), e.j !== null && d(), v;
                              })(w(91)),
                              Bc: ((a) => (t, s, c, _, h, v, f, C, y) => {
                                e.g === 0 && b(), r.i && r.l++;
                                let L;
                                try {
                                  L = a(e.g, t, s, c, _, h, v, f, C, y);
                                } catch (G) {
                                  throw ((t = G), (e.h = !0), t);
                                }
                                return e.h && g(), e.j !== null && d(), L;
                              })(w(92)),
                              jc: ((a) => (t, s, c) => {
                                e.g === 0 && b(), r.i && r.l++;
                                let _;
                                try {
                                  _ = a(e.g, t, s, c);
                                } catch (h) {
                                  throw ((t = h), (e.h = !0), t);
                                }
                                return e.h && g(), e.j !== null && d(), _;
                              })(w(93)),
                              Ub: ((a) => (t, s, c) => {
                                e.g === 0 && b(), r.i && r.l++;
                                let _;
                                try {
                                  _ = a(e.g, t, s, c);
                                } catch (h) {
                                  throw ((t = h), (e.h = !0), t);
                                }
                                return e.h && g(), e.j !== null && d(), _;
                              })(w(94)),
                              Xb: ((a) => (t) => {
                                e.g === 0 && b(), r.i && r.l++;
                                try {
                                  a(e.g, t);
                                } catch (s) {
                                  throw ((t = s), (e.h = !0), t);
                                }
                                e.h && g(), e.j !== null && d();
                              })(w(95)),
                              Wb: ((a) => (t) => {
                                e.g === 0 && b(), r.i && r.l++;
                                let s;
                                try {
                                  s = a(e.g, t);
                                } catch (c) {
                                  throw ((t = c), (e.h = !0), t);
                                }
                                return e.h && g(), e.j !== null && d(), s;
                              })(w(96)),
                              Vb: ((a) => (t, s) => {
                                e.g === 0 && b(), r.i && r.l++;
                                let c;
                                try {
                                  c = a(e.g, t, s);
                                } catch (_) {
                                  throw ((t = _), (e.h = !0), t);
                                }
                                return e.h && g(), e.j !== null && d(), c;
                              })(w(97)),
                              Yb: ((a) => (t, s, c) => {
                                e.g === 0 && b(), r.i && r.l++;
                                try {
                                  a(e.g, t, s, c);
                                } catch (_) {
                                  throw ((t = _), (e.h = !0), t);
                                }
                                e.h && g(), e.j !== null && d();
                              })(w(98)),
                              Sb: ((a) => (t, s, c, _, h, v, f, C) => {
                                e.g === 0 && b(), r.i && r.l++;
                                try {
                                  a(e.g, t, s, c, _, h, v, f, C);
                                } catch (y) {
                                  throw ((t = y), (e.h = !0), t);
                                }
                                e.h && g(), e.j !== null && d();
                              })(w(99)),
                              mc: ((a) => (t, s, c) => {
                                e.g === 0 && b(), r.i && r.l++;
                                let _;
                                try {
                                  _ = a(e.g, t, s, c);
                                } catch (h) {
                                  throw ((t = h), (e.h = !0), t);
                                }
                                return e.h && g(), e.j !== null && d(), _;
                              })(w(100)),
                              tc: ((a) => (t) => {
                                e.g === 0 && b(), r.i && r.l++;
                                try {
                                  a(e.g, t);
                                } catch (s) {
                                  throw ((t = s), (e.h = !0), t);
                                }
                                e.h && g(), e.j !== null && d();
                              })(w(101)),
                              wc: ((a) => (t, s, c) => {
                                e.g === 0 && b(), r.i && r.l++;
                                try {
                                  a(e.g, t, s, c);
                                } catch (_) {
                                  throw ((t = _), (e.h = !0), t);
                                }
                                e.h && g(), e.j !== null && d();
                              })(w(102)),
                              uc: ((a) => (t, s, c, _) => {
                                e.g === 0 && b(), r.i && r.l++;
                                try {
                                  a(e.g, t, s, c, _);
                                } catch (h) {
                                  throw ((t = h), (e.h = !0), t);
                                }
                                e.h && g(), e.j !== null && d();
                              })(w(103)),
                              xc: ((a) => (t, s, c) => {
                                e.g === 0 && b(), r.i && r.l++;
                                try {
                                  a(e.g, t, s, c);
                                } catch (_) {
                                  throw ((t = _), (e.h = !0), t);
                                }
                                e.h && g(), e.j !== null && d();
                              })(w(104)),
                              vc: ((a) => (t, s, c) => {
                                e.g === 0 && b(), r.i && r.l++;
                                try {
                                  a(e.g, t, s, c);
                                } catch (_) {
                                  throw ((t = _), (e.h = !0), t);
                                }
                                e.h && g(), e.j !== null && d();
                              })(w(105)),
                              oc: ((a) => (t, s, c) => {
                                e.g === 0 && b(), r.i && r.l++;
                                try {
                                  a(e.g, t, s, c);
                                } catch (_) {
                                  throw ((t = _), (e.h = !0), t);
                                }
                                e.h && g(), e.j !== null && d();
                              })(w(106)),
                              sc: ((a) => (t, s, c) => {
                                e.g === 0 && b(), r.i && r.l++;
                                let _;
                                try {
                                  _ = a(e.g, t, s, c);
                                } catch (h) {
                                  throw ((t = h), (e.h = !0), t);
                                }
                                return e.h && g(), e.j !== null && d(), _;
                              })(w(107)),
                              rc: ((a) => (t, s, c) => {
                                e.g === 0 && b(), r.i && r.l++;
                                let _;
                                try {
                                  _ = a(e.g, t, s, c);
                                } catch (h) {
                                  throw ((t = h), (e.h = !0), t);
                                }
                                return e.h && g(), e.j !== null && d(), _;
                              })(w(108)),
                              pc: ((a) => (t, s, c) => {
                                e.g === 0 && b(), r.i && r.l++;
                                let _;
                                try {
                                  _ = a(e.g, t, s, c);
                                } catch (h) {
                                  throw ((t = h), (e.h = !0), t);
                                }
                                return e.h && g(), e.j !== null && d(), _;
                              })(w(109)),
                              nc: ((a) => (t, s, c) => {
                                e.g === 0 && b(), r.i && r.l++;
                                let _;
                                try {
                                  _ = a(e.g, t, s, c);
                                } catch (h) {
                                  throw ((t = h), (e.h = !0), t);
                                }
                                return e.h && g(), e.j !== null && d(), _;
                              })(w(110)),
                              qc: ((a) => (t) => {
                                e.g === 0 && b(), r.i && r.l++;
                                let s;
                                try {
                                  s = a(e.g, t);
                                } catch (c) {
                                  throw ((t = c), (e.h = !0), t);
                                }
                                return e.h && g(), e.j !== null && d(), s;
                              })(w(111)),
                              zc: ((a) => (t, s, c) => {
                                e.g === 0 && b(), r.i && r.l++;
                                let _;
                                try {
                                  _ = a(e.g, t, s, c);
                                } catch (h) {
                                  throw ((t = h), (e.h = !0), t);
                                }
                                return e.h && g(), e.j !== null && d(), _;
                              })(w(112)),
                              cc: ((a) => (t, s) => {
                                e.g === 0 && b(), r.i && r.l++;
                                try {
                                  a(e.g, t, s);
                                } catch (c) {
                                  throw ((t = c), (e.h = !0), t);
                                }
                                e.h && g(), e.j !== null && d();
                              })(w(113)),
                              bc: ((a) => (t, s, c) => {
                                e.g === 0 && b(), r.i && r.l++;
                                try {
                                  a(e.g, t, s, c);
                                } catch (_) {
                                  throw ((t = _), (e.h = !0), t);
                                }
                                e.h && g(), e.j !== null && d();
                              })(w(114)),
                              dc: ((a) => (t, s) => {
                                e.g === 0 && b(), r.i && r.l++;
                                try {
                                  a(e.g, t, s);
                                } catch (c) {
                                  throw ((t = c), (e.h = !0), t);
                                }
                                e.h && g(), e.j !== null && d();
                              })(w(115)),
                              hc: ((a) => (t, s, c, _) => {
                                e.g === 0 && b(), r.i && r.l++;
                                let h;
                                try {
                                  h = a(e.g, t, s, c, _);
                                } catch (v) {
                                  throw ((t = v), (e.h = !0), t);
                                }
                                return e.h && g(), e.j !== null && d(), h;
                              })(w(116)),
                              fc: ((a) => (t, s, c, _) => {
                                e.g === 0 && b(), r.i && r.l++;
                                let h;
                                try {
                                  h = a(e.g, t, s, c, _);
                                } catch (v) {
                                  throw ((t = v), (e.h = !0), t);
                                }
                                return e.h && g(), e.j !== null && d(), h;
                              })(w(117)),
                              ec: ((a) =>
                                a === void 0
                                  ? u("rive_artboard_v1", "drawable_properties")
                                  : (t, s, c) => {
                                      e.g === 0 && b(), r.i && r.l++;
                                      let _;
                                      try {
                                        _ = a(e.g, t, s, c);
                                      } catch (h) {
                                        throw ((t = h), (e.h = !0), t);
                                      }
                                      return e.h && g(), e.j !== null && d(), _;
                                    })(w(118)),
                              Yc: ((a) => (t, s, c) => {
                                e.g === 0 && b(), r.i && r.l++;
                                let _;
                                try {
                                  _ = a(e.g, t, s, c);
                                } catch (h) {
                                  throw ((t = h), (e.h = !0), t);
                                }
                                return e.h && g(), e.j !== null && d(), _;
                              })(w(119)),
                              ad: ((a) => (t) => {
                                e.g === 0 && b(), r.i && r.l++;
                                try {
                                  a(e.g, t);
                                } catch (s) {
                                  throw ((t = s), (e.h = !0), t);
                                }
                                e.h && g(), e.j !== null && d();
                              })(w(120)),
                              $c: ((a) => (t) => {
                                e.g === 0 && b(), r.i && r.l++;
                                let s;
                                try {
                                  s = a(e.g, t);
                                } catch (c) {
                                  throw ((t = c), (e.h = !0), t);
                                }
                                return e.h && g(), e.j !== null && d(), s;
                              })(w(121)),
                              bd: ((a) => (t) => {
                                e.g === 0 && b(), r.i && r.l++;
                                let s;
                                try {
                                  s = a(e.g, t);
                                } catch (c) {
                                  throw ((t = c), (e.h = !0), t);
                                }
                                return e.h && g(), e.j !== null && d(), s;
                              })(w(122)),
                              Zc: ((a) => (t) => {
                                e.g === 0 && b(), r.i && r.l++;
                                let s;
                                try {
                                  s = a(e.g, t);
                                } catch (c) {
                                  throw ((t = c), (e.h = !0), t);
                                }
                                return e.h && g(), e.j !== null && d(), s;
                              })(w(123)),
                              Gc: ((a) => (t) => {
                                e.g === 0 && b(), r.i && r.l++;
                                let s;
                                try {
                                  s = a(e.g, t);
                                } catch (c) {
                                  throw ((t = c), (e.h = !0), t);
                                }
                                return e.h && g(), e.j !== null && d(), s;
                              })(w(124)),
                              Ic: ((a) => (t, s) => {
                                e.g === 0 && b(), r.i && r.l++;
                                let c;
                                try {
                                  c = a(e.g, t, s);
                                } catch (_) {
                                  throw ((t = _), (e.h = !0), t);
                                }
                                return e.h && g(), e.j !== null && d(), c;
                              })(w(125)),
                              Kc: ((a) => (t, s) => {
                                e.g === 0 && b(), r.i && r.l++;
                                let c;
                                try {
                                  c = a(e.g, t, s);
                                } catch (_) {
                                  throw ((t = _), (e.h = !0), t);
                                }
                                return e.h && g(), e.j !== null && d(), c;
                              })(w(126)),
                              Hc: ((a) => (t, s) => {
                                e.g === 0 && b(), r.i && r.l++;
                                let c;
                                try {
                                  c = a(e.g, t, s);
                                } catch (_) {
                                  throw ((t = _), (e.h = !0), t);
                                }
                                return e.h && g(), e.j !== null && d(), c;
                              })(w(127)),
                              Jc: ((a) => (t, s) => {
                                e.g === 0 && b(), r.i && r.l++;
                                let c;
                                try {
                                  c = a(e.g, t, s);
                                } catch (_) {
                                  throw ((t = _), (e.h = !0), t);
                                }
                                return e.h && g(), e.j !== null && d(), c;
                              })(w(128)),
                              cd: ((a) => () => {
                                e.g === 0 && b(), r.i && r.l++;
                                try {
                                  var t = a(e.g);
                                } catch (s) {
                                  throw ((t = s), (e.h = !0), t);
                                }
                                return e.h && g(), e.j !== null && d(), t;
                              })(w(129)),
                              dd: ((a) => () => {
                                e.g === 0 && b(), r.i && r.l++;
                                try {
                                  var t = a(e.g);
                                } catch (s) {
                                  throw ((t = s), (e.h = !0), t);
                                }
                                return e.h && g(), e.j !== null && d(), t;
                              })(w(130)),
                              Lc: ((a) => () => {
                                e.g === 0 && b(), r.i && r.l++;
                                try {
                                  var t = a(e.g);
                                } catch (s) {
                                  throw ((t = s), (e.h = !0), t);
                                }
                                return e.h && g(), e.j !== null && d(), t;
                              })(w(131)),
                              Pc: ((a) => (t) => {
                                e.g === 0 && b(), r.i && r.l++;
                                try {
                                  a(e.g, t);
                                } catch (s) {
                                  throw ((t = s), (e.h = !0), t);
                                }
                                e.h && g(), e.j !== null && d();
                              })(w(132)),
                              Oc: ((a) => (t) => {
                                e.g === 0 && b(), r.i && r.l++;
                                try {
                                  a(e.g, t);
                                } catch (s) {
                                  throw ((t = s), (e.h = !0), t);
                                }
                                e.h && g(), e.j !== null && d();
                              })(w(133)),
                              Nc: ((a) => (t) => {
                                e.g === 0 && b(), r.i && r.l++;
                                try {
                                  a(e.g, t);
                                } catch (s) {
                                  throw ((t = s), (e.h = !0), t);
                                }
                                e.h && g(), e.j !== null && d();
                              })(w(134)),
                              Qc: ((a) => (t) => {
                                e.g === 0 && b(), r.i && r.l++;
                                try {
                                  a(e.g, t);
                                } catch (s) {
                                  throw ((t = s), (e.h = !0), t);
                                }
                                e.h && g(), e.j !== null && d();
                              })(w(135)),
                              Uc: ((a) => (t, s) => {
                                e.g === 0 && b(), r.i && r.l++;
                                try {
                                  a(e.g, t, s);
                                } catch (c) {
                                  throw ((t = c), (e.h = !0), t);
                                }
                                e.h && g(), e.j !== null && d();
                              })(w(136)),
                              Rc: ((a) => (t, s) => {
                                e.g === 0 && b(), r.i && r.l++;
                                let c;
                                try {
                                  c = a(e.g, t, s);
                                } catch (_) {
                                  throw ((t = _), (e.h = !0), t);
                                }
                                return e.h && g(), e.j !== null && d(), c;
                              })(w(137)),
                              Sc: ((a) => (t, s) => {
                                e.g === 0 && b(), r.i && r.l++;
                                let c;
                                try {
                                  c = a(e.g, t, s);
                                } catch (_) {
                                  throw ((t = _), (e.h = !0), t);
                                }
                                return e.h && g(), e.j !== null && d(), c;
                              })(w(138)),
                              Mc: ((a) => (t) => {
                                e.g === 0 && b(), r.i && r.l++;
                                let s;
                                try {
                                  s = a(e.g, t);
                                } catch (c) {
                                  throw ((t = c), (e.h = !0), t);
                                }
                                return e.h && g(), e.j !== null && d(), s;
                              })(w(139)),
                              Vc: ((a) => (t) => {
                                e.g === 0 && b(), r.i && r.l++;
                                let s;
                                try {
                                  s = a(e.g, t);
                                } catch (c) {
                                  throw ((t = c), (e.h = !0), t);
                                }
                                return e.h && g(), e.j !== null && d(), s;
                              })(w(140)),
                              Wc: ((a) => (t) => {
                                e.g === 0 && b(), r.i && r.l++;
                                let s;
                                try {
                                  s = a(e.g, t);
                                } catch (c) {
                                  throw ((t = c), (e.h = !0), t);
                                }
                                return e.h && g(), e.j !== null && d(), s;
                              })(w(141)),
                              Xc: ((a) => (t) => {
                                e.g === 0 && b(), r.i && r.l++;
                                let s;
                                try {
                                  s = a(e.g, t);
                                } catch (c) {
                                  throw ((t = c), (e.h = !0), t);
                                }
                                return e.h && g(), e.j !== null && d(), s;
                              })(w(142)),
                              Tc: ((a) => (t, s) => {
                                e.g === 0 && b(), r.i && r.l++;
                                try {
                                  a(e.g, t, s);
                                } catch (c) {
                                  throw ((t = c), (e.h = !0), t);
                                }
                                e.h && g(), e.j !== null && d();
                              })(w(143)),
                              Kg: ((a) => () => {
                                e.g === 0 && b(), r.i && r.l++;
                                try {
                                  var t = a(e.g);
                                } catch (s) {
                                  throw ((t = s), (e.h = !0), t);
                                }
                                return e.h && g(), e.j !== null && d(), t;
                              })(w(144)),
                              Ng: ((a) => (t, s, c, _, h, v) => {
                                e.g === 0 && b(), r.i && r.l++;
                                try {
                                  a(e.g, t, s, c, _, h, v);
                                } catch (f) {
                                  throw ((t = f), (e.h = !0), t);
                                }
                                e.h && g(), e.j !== null && d();
                              })(w(145)),
                              Mg: ((a) => (t) => {
                                e.g === 0 && b(), r.i && r.l++;
                                try {
                                  a(e.g, t);
                                } catch (s) {
                                  throw ((t = s), (e.h = !0), t);
                                }
                                e.h && g(), e.j !== null && d();
                              })(w(146)),
                              Ig: ((a) => (t, s, c, _, h, v, f, C) => {
                                e.g === 0 && b(), r.i && r.l++;
                                try {
                                  a(e.g, t, s, c, _, h, v, f, C);
                                } catch (y) {
                                  throw ((t = y), (e.h = !0), t);
                                }
                                e.h && g(), e.j !== null && d();
                              })(w(147)),
                              Og: ((a) => (t, s, c) => {
                                e.g === 0 && b(), r.i && r.l++;
                                let _;
                                try {
                                  _ = a(e.g, t, s, c);
                                } catch (h) {
                                  throw ((t = h), (e.h = !0), t);
                                }
                                return e.h && g(), e.j !== null && d(), _;
                              })(w(148)),
                              Lg: ((a) => (t, s, c) => {
                                e.g === 0 && b(), r.i && r.l++;
                                let _;
                                try {
                                  _ = a(e.g, t, s, c);
                                } catch (h) {
                                  throw ((t = h), (e.h = !0), t);
                                }
                                return e.h && g(), e.j !== null && d(), _;
                              })(w(149)),
                              Jg: ((a) => (t, s, c, _) => {
                                e.g === 0 && b(), r.i && r.l++;
                                try {
                                  a(e.g, t, s, c, _);
                                } catch (h) {
                                  throw ((t = h), (e.h = !0), t);
                                }
                                e.h && g(), e.j !== null && d();
                              })(w(150)),
                              ng: ((a) => (t, s, c, _) => {
                                e.g === 0 && b(), r.i && r.l++;
                                let h;
                                try {
                                  h = a(e.g, t, s, c, _);
                                } catch (v) {
                                  throw ((t = v), (e.h = !0), t);
                                }
                                return e.h && g(), e.j !== null && d(), h;
                              })(w(151)),
                              ig: ((a) => (t, s, c, _) => {
                                e.g === 0 && b(), r.i && r.l++;
                                let h;
                                try {
                                  h = a(e.g, t, s, c, _);
                                } catch (v) {
                                  throw ((t = v), (e.h = !0), t);
                                }
                                return e.h && g(), e.j !== null && d(), h;
                              })(w(152)),
                              hg: ((a) => (t) => {
                                e.g === 0 && b(), r.i && r.l++;
                                let s;
                                try {
                                  s = a(e.g, t);
                                } catch (c) {
                                  throw ((t = c), (e.h = !0), t);
                                }
                                return e.h && g(), e.j !== null && d(), s;
                              })(w(153)),
                              mg: ((a) => (t) => {
                                e.g === 0 && b(), r.i && r.l++;
                                let s;
                                try {
                                  s = a(e.g, t);
                                } catch (c) {
                                  throw ((t = c), (e.h = !0), t);
                                }
                                return e.h && g(), e.j !== null && d(), s;
                              })(w(154)),
                              lg: ((a) => (t) => {
                                e.g === 0 && b(), r.i && r.l++;
                                let s;
                                try {
                                  s = a(e.g, t);
                                } catch (c) {
                                  throw ((t = c), (e.h = !0), t);
                                }
                                return e.h && g(), e.j !== null && d(), s;
                              })(w(155)),
                              og: ((a) => (t, s, c, _) => {
                                e.g === 0 && b(), r.i && r.l++;
                                try {
                                  a(e.g, t, s, c, _);
                                } catch (h) {
                                  throw ((t = h), (e.h = !0), t);
                                }
                                e.h && g(), e.j !== null && d();
                              })(w(156)),
                              qg: ((a) => (t, s, c, _, h) => {
                                e.g === 0 && b(), r.i && r.l++;
                                try {
                                  a(e.g, t, s, c, _, h);
                                } catch (v) {
                                  throw ((t = v), (e.h = !0), t);
                                }
                                e.h && g(), e.j !== null && d();
                              })(w(157)),
                              jg: ((a) => (t, s, c, _) => {
                                e.g === 0 && b(), r.i && r.l++;
                                let h;
                                try {
                                  h = a(e.g, t, s, c, _);
                                } catch (v) {
                                  throw ((t = v), (e.h = !0), t);
                                }
                                return e.h && g(), e.j !== null && d(), h;
                              })(w(158)),
                              kg: ((a) => (t, s, c, _, h) => {
                                e.g === 0 && b(), r.i && r.l++;
                                let v;
                                try {
                                  v = a(e.g, t, s, c, _, h);
                                } catch (f) {
                                  throw ((t = f), (e.h = !0), t);
                                }
                                return e.h && g(), e.j !== null && d(), v;
                              })(w(159)),
                              pg: ((a) => (t) => {
                                e.g === 0 && b(), r.i && r.l++;
                                try {
                                  a(e.g, t);
                                } catch (s) {
                                  throw ((t = s), (e.h = !0), t);
                                }
                                e.h && g(), e.j !== null && d();
                              })(w(160)),
                              Cg: ((a) => () => {
                                e.g === 0 && b(), r.i && r.l++;
                                try {
                                  var t = a(e.g);
                                } catch (s) {
                                  throw ((t = s), (e.h = !0), t);
                                }
                                return e.h && g(), e.j !== null && d(), t;
                              })(w(161)),
                              Dg: ((a) => (t) => {
                                e.g === 0 && b(), r.i && r.l++;
                                try {
                                  a(e.g, t);
                                } catch (s) {
                                  throw ((t = s), (e.h = !0), t);
                                }
                                e.h && g(), e.j !== null && d();
                              })(w(162)),
                              Gg: ((a) => (t, s) => {
                                e.g === 0 && b(), r.i && r.l++;
                                try {
                                  a(e.g, t, s);
                                } catch (c) {
                                  throw ((t = c), (e.h = !0), t);
                                }
                                e.h && g(), e.j !== null && d();
                              })(w(163)),
                              zg: ((a) => (t, s) => {
                                e.g === 0 && b(), r.i && r.l++;
                                try {
                                  a(e.g, t, s);
                                } catch (c) {
                                  throw ((t = c), (e.h = !0), t);
                                }
                                e.h && g(), e.j !== null && d();
                              })(w(164)),
                              Hg: ((a) => (t, s) => {
                                e.g === 0 && b(), r.i && r.l++;
                                try {
                                  a(e.g, t, s);
                                } catch (c) {
                                  throw ((t = c), (e.h = !0), t);
                                }
                                e.h && g(), e.j !== null && d();
                              })(w(165)),
                              Bg: ((a) => (t, s) => {
                                e.g === 0 && b(), r.i && r.l++;
                                try {
                                  a(e.g, t, s);
                                } catch (c) {
                                  throw ((t = c), (e.h = !0), t);
                                }
                                e.h && g(), e.j !== null && d();
                              })(w(166)),
                              yg: ((a) => (t, s) => {
                                e.g === 0 && b(), r.i && r.l++;
                                try {
                                  a(e.g, t, s);
                                } catch (c) {
                                  throw ((t = c), (e.h = !0), t);
                                }
                                e.h && g(), e.j !== null && d();
                              })(w(167)),
                              xg: ((a) => (t, s) => {
                                e.g === 0 && b(), r.i && r.l++;
                                try {
                                  a(e.g, t, s);
                                } catch (c) {
                                  throw ((t = c), (e.h = !0), t);
                                }
                                e.h && g(), e.j !== null && d();
                              })(w(168)),
                              Ag: ((a) => (t, s) => {
                                e.g === 0 && b(), r.i && r.l++;
                                try {
                                  a(e.g, t, s);
                                } catch (c) {
                                  throw ((t = c), (e.h = !0), t);
                                }
                                e.h && g(), e.j !== null && d();
                              })(w(169)),
                              Eg: ((a) => (t, s) => {
                                e.g === 0 && b(), r.i && r.l++;
                                try {
                                  a(e.g, t, s);
                                } catch (c) {
                                  throw ((t = c), (e.h = !0), t);
                                }
                                e.h && g(), e.j !== null && d();
                              })(w(170)),
                              Fg: ((a) => (t, s, c) => {
                                e.g === 0 && b(), r.i && r.l++;
                                try {
                                  a(e.g, t, s, c);
                                } catch (_) {
                                  throw ((t = _), (e.h = !0), t);
                                }
                                e.h && g(), e.j !== null && d();
                              })(w(171)),
                              nd: ((a) => (t, s) => {
                                e.g === 0 && b(), r.i && r.l++;
                                let c;
                                try {
                                  c = a(e.g, t, s);
                                } catch (_) {
                                  throw ((t = _), (e.h = !0), t);
                                }
                                return e.h && g(), e.j !== null && d(), c;
                              })(w(172)),
                              od: ((a) => (t) => {
                                e.g === 0 && b(), r.i && r.l++;
                                try {
                                  a(e.g, t);
                                } catch (s) {
                                  throw ((t = s), (e.h = !0), t);
                                }
                                e.h && g(), e.j !== null && d();
                              })(w(173)),
                              qd: ((a) => (t) => {
                                e.g === 0 && b(), r.i && r.l++;
                                let s;
                                try {
                                  s = a(e.g, t);
                                } catch (c) {
                                  throw ((t = c), (e.h = !0), t);
                                }
                                return e.h && g(), e.j !== null && d(), s;
                              })(w(174)),
                              ld: ((a) => (t) => {
                                e.g === 0 && b(), r.i && r.l++;
                                let s;
                                try {
                                  s = a(e.g, t);
                                } catch (c) {
                                  throw ((t = c), (e.h = !0), t);
                                }
                                return e.h && g(), e.j !== null && d(), s;
                              })(w(175)),
                              pd: ((a) => (t, s, c) => {
                                e.g === 0 && b(), r.i && r.l++;
                                let _;
                                try {
                                  _ = a(e.g, t, s, c);
                                } catch (h) {
                                  throw ((t = h), (e.h = !0), t);
                                }
                                return e.h && g(), e.j !== null && d(), _;
                              })(w(176)),
                              md: ((a) => (t) => {
                                e.g === 0 && b(), r.i && r.l++;
                                let s;
                                try {
                                  s = a(e.g, t);
                                } catch (c) {
                                  throw ((t = c), (e.h = !0), t);
                                }
                                return e.h && g(), e.j !== null && d(), s;
                              })(w(177)),
                              jd: ((a) => (t, s) => {
                                e.g === 0 && b(), r.i && r.l++;
                                let c;
                                try {
                                  c = a(e.g, t, s);
                                } catch (_) {
                                  throw ((t = _), (e.h = !0), t);
                                }
                                return e.h && g(), e.j !== null && d(), c;
                              })(w(178)),
                              kd: ((a) => (t) => {
                                e.g === 0 && b(), r.i && r.l++;
                                try {
                                  a(e.g, t);
                                } catch (s) {
                                  throw ((t = s), (e.h = !0), t);
                                }
                                e.h && g(), e.j !== null && d();
                              })(w(179)),
                              vf: ((a) => (t, s) => {
                                e.g === 0 && b(), r.i && r.l++;
                                let c;
                                try {
                                  c = a(e.g, t, s);
                                } catch (_) {
                                  throw ((t = _), (e.h = !0), t);
                                }
                                return e.h && g(), e.j !== null && d(), c;
                              })(w(180)),
                              sf: ((a) => (t, s) => {
                                e.g === 0 && b(), r.i && r.l++;
                                let c;
                                try {
                                  c = a(e.g, t, s);
                                } catch (_) {
                                  throw ((t = _), (e.h = !0), t);
                                }
                                return e.h && g(), e.j !== null && d(), c;
                              })(w(181)),
                              tf: ((a) => (t) => {
                                e.g === 0 && b(), r.i && r.l++;
                                try {
                                  a(e.g, t);
                                } catch (s) {
                                  throw ((t = s), (e.h = !0), t);
                                }
                                e.h && g(), e.j !== null && d();
                              })(w(182)),
                              qf: ((a) => (t, s, c) => {
                                e.g === 0 && b(), r.i && r.l++;
                                let _;
                                try {
                                  _ = a(e.g, t, s, c);
                                } catch (h) {
                                  throw ((t = h), (e.h = !0), t);
                                }
                                return e.h && g(), e.j !== null && d(), _;
                              })(w(183)),
                              rf: ((a) => (t) => {
                                e.g === 0 && b(), r.i && r.l++;
                                let s;
                                try {
                                  s = a(e.g, t);
                                } catch (c) {
                                  throw ((t = c), (e.h = !0), t);
                                }
                                return e.h && g(), e.j !== null && d(), s;
                              })(w(184)),
                              uf: ((a) => (t, s, c, _, h) => {
                                e.g === 0 && b(), r.i && r.l++;
                                let v;
                                try {
                                  v = a(e.g, t, s, c, _, h);
                                } catch (f) {
                                  throw ((t = f), (e.h = !0), t);
                                }
                                return e.h && g(), e.j !== null && d(), v;
                              })(w(185)),
                              Uf: ((a) => (t, s, c) => {
                                e.g === 0 && b(), r.i && r.l++;
                                let _;
                                try {
                                  _ = a(e.g, t, s, c);
                                } catch (h) {
                                  throw ((t = h), (e.h = !0), t);
                                }
                                return e.h && g(), e.j !== null && d(), _;
                              })(w(186)),
                              xf: ((a) => (t, s, c, _) => {
                                e.g === 0 && b(), r.i && r.l++;
                                let h;
                                try {
                                  h = a(e.g, t, s, c, _);
                                } catch (v) {
                                  throw ((t = v), (e.h = !0), t);
                                }
                                return e.h && g(), e.j !== null && d(), h;
                              })(w(187)),
                              Ff: ((a) => (t, s) => {
                                e.g === 0 && b(), r.i && r.l++;
                                try {
                                  a(e.g, t, s);
                                } catch (c) {
                                  throw ((t = c), (e.h = !0), t);
                                }
                                e.h && g(), e.j !== null && d();
                              })(w(188)),
                              If: ((a) => (t, s, c, _) => {
                                e.g === 0 && b(), r.i && r.l++;
                                try {
                                  a(e.g, t, s, c, _);
                                } catch (h) {
                                  throw ((t = h), (e.h = !0), t);
                                }
                                e.h && g(), e.j !== null && d();
                              })(w(189)),
                              Ef: ((a) => (t, s, c, _) => {
                                e.g === 0 && b(), r.i && r.l++;
                                try {
                                  a(e.g, t, s, c, _);
                                } catch (h) {
                                  throw ((t = h), (e.h = !0), t);
                                }
                                e.h && g(), e.j !== null && d();
                              })(w(190)),
                              Cf: ((a) => (t, s, c, _, h) => {
                                e.g === 0 && b(), r.i && r.l++;
                                try {
                                  a(e.g, t, s, c, _, h);
                                } catch (v) {
                                  throw ((t = v), (e.h = !0), t);
                                }
                                e.h && g(), e.j !== null && d();
                              })(w(191)),
                              Jf: ((a) => (t, s, c, _, h, v, f) => {
                                e.g === 0 && b(), r.i && r.l++;
                                try {
                                  a(e.g, t, s, c, _, h, v, f);
                                } catch (C) {
                                  throw ((t = C), (e.h = !0), t);
                                }
                                e.h && g(), e.j !== null && d();
                              })(w(192)),
                              Gf: ((a) => (t, s, c, _, h) => {
                                e.g === 0 && b(), r.i && r.l++;
                                try {
                                  a(e.g, t, s, c, _, h);
                                } catch (v) {
                                  throw ((t = v), (e.h = !0), t);
                                }
                                e.h && g(), e.j !== null && d();
                              })(w(193)),
                              Hf: ((a) => (t, s) => {
                                e.g === 0 && b(), r.i && r.l++;
                                try {
                                  a(e.g, t, s);
                                } catch (c) {
                                  throw ((t = c), (e.h = !0), t);
                                }
                                e.h && g(), e.j !== null && d();
                              })(w(194)),
                              Df: ((a) => (t, s, c, _, h) => {
                                e.g === 0 && b(), r.i && r.l++;
                                try {
                                  a(e.g, t, s, c, _, h);
                                } catch (v) {
                                  throw ((t = v), (e.h = !0), t);
                                }
                                e.h && g(), e.j !== null && d();
                              })(w(195)),
                              yf: ((a) => (t, s, c, _, h) => {
                                e.g === 0 && b(), r.i && r.l++;
                                try {
                                  a(e.g, t, s, c, _, h);
                                } catch (v) {
                                  throw ((t = v), (e.h = !0), t);
                                }
                                e.h && g(), e.j !== null && d();
                              })(w(196)),
                              zf: ((a) => (t, s, c, _, h, v) => {
                                e.g === 0 && b(), r.i && r.l++;
                                try {
                                  a(e.g, t, s, c, _, h, v);
                                } catch (f) {
                                  throw ((t = f), (e.h = !0), t);
                                }
                                e.h && g(), e.j !== null && d();
                              })(w(197)),
                              Af: ((a) => (t) => {
                                e.g === 0 && b(), r.i && r.l++;
                                try {
                                  a(e.g, t);
                                } catch (s) {
                                  throw ((t = s), (e.h = !0), t);
                                }
                                e.h && g(), e.j !== null && d();
                              })(w(198)),
                              Bf: ((a) => (t) => {
                                e.g === 0 && b(), r.i && r.l++;
                                try {
                                  a(e.g, t);
                                } catch (s) {
                                  throw ((t = s), (e.h = !0), t);
                                }
                                e.h && g(), e.j !== null && d();
                              })(w(199)),
                              wf: ((a) => (t, s, c) => {
                                e.g === 0 && b(), r.i && r.l++;
                                let _;
                                try {
                                  _ = a(e.g, t, s, c);
                                } catch (h) {
                                  throw ((t = h), (e.h = !0), t);
                                }
                                return e.h && g(), e.j !== null && d(), _;
                              })(w(200)),
                              mf: ((a) => (t, s, c, _, h) => {
                                e.g === 0 && b(), r.i && r.l++;
                                let v;
                                try {
                                  v = a(e.g, t, s, c, _, h);
                                } catch (f) {
                                  throw ((t = f), (e.h = !0), t);
                                }
                                return e.h && g(), e.j !== null && d(), v;
                              })(w(201)),
                              pf: ((a) => (t, s, c, _) => {
                                e.g === 0 && b(), r.i && r.l++;
                                try {
                                  a(e.g, t, s, c, _);
                                } catch (h) {
                                  throw ((t = h), (e.h = !0), t);
                                }
                                e.h && g(), e.j !== null && d();
                              })(w(202)),
                              nf: ((a) => (t) => {
                                e.g === 0 && b(), r.i && r.l++;
                                try {
                                  a(e.g, t);
                                } catch (s) {
                                  throw ((t = s), (e.h = !0), t);
                                }
                                e.h && g(), e.j !== null && d();
                              })(w(203)),
                              Vf: ((a) => (t, s) => {
                                e.g === 0 && b(), r.i && r.l++;
                                let c;
                                try {
                                  c = a(e.g, t, s);
                                } catch (_) {
                                  throw ((t = _), (e.h = !0), t);
                                }
                                return e.h && g(), e.j !== null && d(), c;
                              })(w(204)),
                              Xf: ((a) => (t, s, c, _, h) => {
                                e.g === 0 && b(), r.i && r.l++;
                                try {
                                  a(e.g, t, s, c, _, h);
                                } catch (v) {
                                  throw ((t = v), (e.h = !0), t);
                                }
                                e.h && g(), e.j !== null && d();
                              })(w(205)),
                              Wf: ((a) => (t) => {
                                e.g === 0 && b(), r.i && r.l++;
                                try {
                                  a(e.g, t);
                                } catch (s) {
                                  throw ((t = s), (e.h = !0), t);
                                }
                                e.h && g(), e.j !== null && d();
                              })(w(206)),
                              Mf: ((a) => (t, s) => {
                                e.g === 0 && b(), r.i && r.l++;
                                let c;
                                try {
                                  c = a(e.g, t, s);
                                } catch (_) {
                                  throw ((t = _), (e.h = !0), t);
                                }
                                return e.h && g(), e.j !== null && d(), c;
                              })(w(207)),
                              Nf: ((a) => (t) => {
                                e.g === 0 && b(), r.i && r.l++;
                                try {
                                  a(e.g, t);
                                } catch (s) {
                                  throw ((t = s), (e.h = !0), t);
                                }
                                e.h && g(), e.j !== null && d();
                              })(w(208)),
                              Yf: ((a) => (t, s, c) => {
                                e.g === 0 && b(), r.i && r.l++;
                                let _;
                                try {
                                  _ = a(e.g, t, s, c);
                                } catch (h) {
                                  throw ((t = h), (e.h = !0), t);
                                }
                                return e.h && g(), e.j !== null && d(), _;
                              })(w(209)),
                              Zf: ((a) => (t) => {
                                e.g === 0 && b(), r.i && r.l++;
                                try {
                                  a(e.g, t);
                                } catch (s) {
                                  throw ((t = s), (e.h = !0), t);
                                }
                                e.h && g(), e.j !== null && d();
                              })(w(210)),
                              Tf: ((a) => () => {
                                e.g === 0 && b(), r.i && r.l++;
                                try {
                                  var t = a(e.g);
                                } catch (s) {
                                  throw ((t = s), (e.h = !0), t);
                                }
                                return e.h && g(), e.j !== null && d(), t;
                              })(w(211)),
                              Of: ((a) => (t, s, c, _, h) => {
                                e.g === 0 && b(), r.i && r.l++;
                                let v;
                                try {
                                  v = a(e.g, t, s, c, _, h);
                                } catch (f) {
                                  throw ((t = f), (e.h = !0), t);
                                }
                                return e.h && g(), e.j !== null && d(), v;
                              })(w(212)),
                              Pf: ((a) => (t, s, c) => {
                                e.g === 0 && b(), r.i && r.l++;
                                let _;
                                try {
                                  _ = a(e.g, t, s, c);
                                } catch (h) {
                                  throw ((t = h), (e.h = !0), t);
                                }
                                return e.h && g(), e.j !== null && d(), _;
                              })(w(213)),
                              Qf: ((a) => (t, s, c, _) => {
                                e.g === 0 && b(), r.i && r.l++;
                                let h;
                                try {
                                  h = a(e.g, t, s, c, _);
                                } catch (v) {
                                  throw ((t = v), (e.h = !0), t);
                                }
                                return e.h && g(), e.j !== null && d(), h;
                              })(w(214)),
                              Rf: ((a) =>
                                a === void 0
                                  ? u("rive_gpu_v1", "shader_module_from_rstb")
                                  : (t, s, c, _) => {
                                      e.g === 0 && b(), r.i && r.l++;
                                      let h;
                                      try {
                                        h = a(e.g, t, s, c, _);
                                      } catch (v) {
                                        throw ((t = v), (e.h = !0), t);
                                      }
                                      return e.h && g(), e.j !== null && d(), h;
                                    })(w(215)),
                              Sf: ((a) => (t) => {
                                e.g === 0 && b(), r.i && r.l++;
                                try {
                                  a(e.g, t);
                                } catch (s) {
                                  throw ((t = s), (e.h = !0), t);
                                }
                                e.h && g(), e.j !== null && d();
                              })(w(216)),
                              hf: ((a) => (t, s, c) => {
                                e.g === 0 && b(), r.i && r.l++;
                                let _;
                                try {
                                  _ = a(e.g, t, s, c);
                                } catch (h) {
                                  throw ((t = h), (e.h = !0), t);
                                }
                                return e.h && g(), e.j !== null && d(), _;
                              })(w(217)),
                              jf: ((a) => (t) => {
                                e.g === 0 && b(), r.i && r.l++;
                                try {
                                  a(e.g, t);
                                } catch (s) {
                                  throw ((t = s), (e.h = !0), t);
                                }
                                e.h && g(), e.j !== null && d();
                              })(w(218)),
                              ff: ((a) => (t, s, c, _) => {
                                e.g === 0 && b(), r.i && r.l++;
                                let h;
                                try {
                                  h = a(e.g, t, s, c, _);
                                } catch (v) {
                                  throw ((t = v), (e.h = !0), t);
                                }
                                return e.h && g(), e.j !== null && d(), h;
                              })(w(219)),
                              gf: ((a) => (t, s, c, _, h) => {
                                e.g === 0 && b(), r.i && r.l++;
                                let v;
                                try {
                                  v = a(e.g, t, s, c, _, h);
                                } catch (f) {
                                  throw ((t = f), (e.h = !0), t);
                                }
                                return e.h && g(), e.j !== null && d(), v;
                              })(w(220)),
                              ef: ((a) => (t, s, c, _, h, v, f) => {
                                e.g === 0 && b(), r.i && r.l++;
                                let C;
                                try {
                                  C = a(e.g, t, s, c, _, h, v, f);
                                } catch (y) {
                                  throw ((t = y), (e.h = !0), t);
                                }
                                return e.h && g(), e.j !== null && d(), C;
                              })(w(221)),
                              kf: ((a) => (t, s, c, _, h, v, f) => {
                                e.g === 0 && b(), r.i && r.l++;
                                let C;
                                try {
                                  C = a(e.g, t, s, c, _, h, v, f);
                                } catch (y) {
                                  throw ((t = y), (e.h = !0), t);
                                }
                                return e.h && g(), e.j !== null && d(), C;
                              })(w(222)),
                              lf: ((a) => (t) => {
                                e.g === 0 && b(), r.i && r.l++;
                                try {
                                  a(e.g, t);
                                } catch (s) {
                                  throw ((t = s), (e.h = !0), t);
                                }
                                e.h && g(), e.j !== null && d();
                              })(w(223)),
                              Kf: ((a) => (t, s, c, _) => {
                                e.g === 0 && b(), r.i && r.l++;
                                let h;
                                try {
                                  h = a(e.g, t, s, c, _);
                                } catch (v) {
                                  throw ((t = v), (e.h = !0), t);
                                }
                                return e.h && g(), e.j !== null && d(), h;
                              })(w(224)),
                              Lf: ((a) => (t) => {
                                e.g === 0 && b(), r.i && r.l++;
                                try {
                                  a(e.g, t);
                                } catch (s) {
                                  throw ((t = s), (e.h = !0), t);
                                }
                                e.h && g(), e.j !== null && d();
                              })(w(225)),
                              gg: ((a) => (t, s, c, _, h, v) => {
                                e.g === 0 && b(), r.i && r.l++;
                                try {
                                  a(e.g, t, s, c, _, h, v);
                                } catch (f) {
                                  throw ((t = f), (e.h = !0), t);
                                }
                                e.h && g(), e.j !== null && d();
                              })(w(226)),
                              fg: ((a) => (t, s, c, _) => {
                                e.g === 0 && b(), r.i && r.l++;
                                let h;
                                try {
                                  h = a(e.g, t, s, c, _);
                                } catch (v) {
                                  throw ((t = v), (e.h = !0), t);
                                }
                                return e.h && g(), e.j !== null && d(), h;
                              })(w(227)),
                              fd: ((a) => (t, s, c) => {
                                e.g === 0 && b(), r.i && r.l++;
                                let _;
                                try {
                                  _ = a(e.g, t, s, c);
                                } catch (h) {
                                  throw ((t = h), (e.h = !0), t);
                                }
                                return e.h && g(), e.j !== null && d(), _;
                              })(w(228)),
                              hd: ((a) => (t, s, c) => {
                                e.g === 0 && b(), r.i && r.l++;
                                try {
                                  a(e.g, t, s, c);
                                } catch (_) {
                                  throw ((t = _), (e.h = !0), t);
                                }
                                e.h && g(), e.j !== null && d();
                              })(w(229)),
                              gd: ((a) => (t) => {
                                e.g === 0 && b(), r.i && r.l++;
                                try {
                                  a(e.g, t);
                                } catch (s) {
                                  throw ((t = s), (e.h = !0), t);
                                }
                                e.h && g(), e.j !== null && d();
                              })(w(230)),
                              rg: ((a) => (t) => {
                                e.g === 0 && b(), r.i && r.l++;
                                let s;
                                try {
                                  s = a(e.g, t);
                                } catch (c) {
                                  throw ((t = c), (e.h = !0), t);
                                }
                                return e.h && g(), e.j !== null && d(), s;
                              })(w(231)),
                              tg: ((a) => (t, s) => {
                                e.g === 0 && b(), r.i && r.l++;
                                try {
                                  a(e.g, t, s);
                                } catch (c) {
                                  throw ((t = c), (e.h = !0), t);
                                }
                                e.h && g(), e.j !== null && d();
                              })(w(232)),
                              ug: ((a) => (t, s, c, _) => {
                                e.g === 0 && b(), r.i && r.l++;
                                try {
                                  a(e.g, t, s, c, _);
                                } catch (h) {
                                  throw ((t = h), (e.h = !0), t);
                                }
                                e.h && g(), e.j !== null && d();
                              })(w(233)),
                              sg: ((a) => (t) => {
                                e.g === 0 && b(), r.i && r.l++;
                                try {
                                  a(e.g, t);
                                } catch (s) {
                                  throw ((t = s), (e.h = !0), t);
                                }
                                e.h && g(), e.j !== null && d();
                              })(w(234)),
                              ed: ((a) => (t, s, c, _, h) => {
                                e.g === 0 && b(), r.i && r.l++;
                                let v;
                                try {
                                  v = a(e.g, t, s, c, _, h);
                                } catch (f) {
                                  throw ((t = f), (e.h = !0), t);
                                }
                                return e.h && g(), e.j !== null && d(), v;
                              })(w(235)),
                              bg: ((a) => (t, s, c) => {
                                e.g === 0 && b(), r.i && r.l++;
                                let _;
                                try {
                                  _ = a(e.g, t, s, c);
                                } catch (h) {
                                  throw ((t = h), (e.h = !0), t);
                                }
                                return e.h && g(), e.j !== null && d(), _;
                              })(w(236)),
                              eg: ((a) => (t) => {
                                e.g === 0 && b(), r.i && r.l++;
                                let s;
                                try {
                                  s = a(e.g, t);
                                } catch (c) {
                                  throw ((t = c), (e.h = !0), t);
                                }
                                return e.h && g(), e.j !== null && d(), s;
                              })(w(237)),
                              cg: ((a) => (t) => {
                                e.g === 0 && b(), r.i && r.l++;
                                let s;
                                try {
                                  s = a(e.g, t);
                                } catch (c) {
                                  throw ((t = c), (e.h = !0), t);
                                }
                                return e.h && g(), e.j !== null && d(), s;
                              })(w(238)),
                              dg: ((a) => (t) => {
                                e.g === 0 && b(), r.i && r.l++;
                                try {
                                  a(e.g, t);
                                } catch (s) {
                                  throw ((t = s), (e.h = !0), t);
                                }
                                e.h && g(), e.j !== null && d();
                              })(w(239)),
                              $f: ((a) => (t, s, c) => {
                                e.g === 0 && b(), r.i && r.l++;
                                let _;
                                try {
                                  _ = a(e.g, t, s, c);
                                } catch (h) {
                                  throw ((t = h), (e.h = !0), t);
                                }
                                return e.h && g(), e.j !== null && d(), _;
                              })(w(240)),
                              ag: ((a) => (t) => {
                                e.g === 0 && b(), r.i && r.l++;
                                try {
                                  a(e.g, t);
                                } catch (s) {
                                  throw ((t = s), (e.h = !0), t);
                                }
                                e.h && g(), e.j !== null && d();
                              })(w(241)),
                              We: ((a) => (t, s, c) => {
                                e.g === 0 && b(), r.i && r.l++;
                                let _;
                                try {
                                  _ = a(e.g, t, s, c);
                                } catch (h) {
                                  throw ((t = h), (e.h = !0), t);
                                }
                                return e.h && g(), e.j !== null && d(), _;
                              })(w(242)),
                              Ue: ((a) =>
                                a === void 0
                                  ? u("rive_font_v1", "decode")
                                  : (t, s) => {
                                      e.g === 0 && b(), r.i && r.l++;
                                      let c;
                                      try {
                                        c = a(e.g, t, s);
                                      } catch (_) {
                                        throw ((t = _), (e.h = !0), t);
                                      }
                                      return e.h && g(), e.j !== null && d(), c;
                                    })(w(243)),
                              bf: ((a) => (t) => {
                                e.g === 0 && b(), r.i && r.l++;
                                try {
                                  a(e.g, t);
                                } catch (s) {
                                  throw ((t = s), (e.h = !0), t);
                                }
                                e.h && g(), e.j !== null && d();
                              })(w(244)),
                              af: ((a) => (t, s, c) => {
                                e.g === 0 && b(), r.i && r.l++;
                                try {
                                  a(e.g, t, s, c);
                                } catch (_) {
                                  throw ((t = _), (e.h = !0), t);
                                }
                                e.h && g(), e.j !== null && d();
                              })(w(245)),
                              cf: ((a) => (t) => {
                                e.g === 0 && b(), r.i && r.l++;
                                let s;
                                try {
                                  s = a(e.g, t);
                                } catch (c) {
                                  throw ((t = c), (e.h = !0), t);
                                }
                                return e.h && g(), e.j !== null && d(), s;
                              })(w(246)),
                              $e: ((a) => (t) => {
                                e.g === 0 && b(), r.i && r.l++;
                                let s;
                                try {
                                  s = a(e.g, t);
                                } catch (c) {
                                  throw ((t = c), (e.h = !0), t);
                                }
                                return e.h && g(), e.j !== null && d(), s;
                              })(w(247)),
                              Se: ((a) => (t) => {
                                e.g === 0 && b(), r.i && r.l++;
                                let s;
                                try {
                                  s = a(e.g, t);
                                } catch (c) {
                                  throw ((t = c), (e.h = !0), t);
                                }
                                return e.h && g(), e.j !== null && d(), s;
                              })(w(248)),
                              Re: ((a) => (t, s, c, _) => {
                                e.g === 0 && b(), r.i && r.l++;
                                try {
                                  a(e.g, t, s, c, _);
                                } catch (h) {
                                  throw ((t = h), (e.h = !0), t);
                                }
                                e.h && g(), e.j !== null && d();
                              })(w(249)),
                              Te: ((a) => (t, s) => {
                                e.g === 0 && b(), r.i && r.l++;
                                let c;
                                try {
                                  c = a(e.g, t, s);
                                } catch (_) {
                                  throw ((t = _), (e.h = !0), t);
                                }
                                return e.h && g(), e.j !== null && d(), c;
                              })(w(250)),
                              Ve: ((a) => (t, s, c) => {
                                e.g === 0 && b(), r.i && r.l++;
                                let _;
                                try {
                                  _ = a(e.g, t, s, c);
                                } catch (h) {
                                  throw ((t = h), (e.h = !0), t);
                                }
                                return e.h && g(), e.j !== null && d(), _;
                              })(w(251)),
                              Ze: ((a) => (t, s) => {
                                e.g === 0 && b(), r.i && r.l++;
                                let c;
                                try {
                                  c = a(e.g, t, s);
                                } catch (_) {
                                  throw ((t = _), (e.h = !0), t);
                                }
                                return e.h && g(), e.j !== null && d(), c;
                              })(w(252)),
                              df: ((a) => (t, s, c, _, h) => {
                                e.g === 0 && b(), r.i && r.l++;
                                let v;
                                try {
                                  v = a(e.g, t, s, c, _, h);
                                } catch (f) {
                                  throw ((t = f), (e.h = !0), t);
                                }
                                return e.h && g(), e.j !== null && d(), v;
                              })(w(253)),
                              Ye: ((a) =>
                                a === void 0
                                  ? u("rive_font_v1", "glyph_verbs")
                                  : (t, s, c, _) => {
                                      e.g === 0 && b(), r.i && r.l++;
                                      let h;
                                      try {
                                        h = a(e.g, t, s, c, _);
                                      } catch (v) {
                                        throw ((t = v), (e.h = !0), t);
                                      }
                                      return e.h && g(), e.j !== null && d(), h;
                                    })(w(254)),
                              Xe: ((a) =>
                                a === void 0
                                  ? u("rive_font_v1", "glyph_points")
                                  : (t, s, c, _) => {
                                      e.g === 0 && b(), r.i && r.l++;
                                      let h;
                                      try {
                                        h = a(e.g, t, s, c, _);
                                      } catch (v) {
                                        throw ((t = v), (e.h = !0), t);
                                      }
                                      return e.h && g(), e.j !== null && d(), h;
                                    })(w(255)),
                              xh: ((a) =>
                                a === void 0
                                  ? u("rive_text_v1", "new")
                                  : () => {
                                      e.g === 0 && b(), r.i && r.l++;
                                      try {
                                        var t = a(e.g);
                                      } catch (s) {
                                        throw ((t = s), (e.h = !0), t);
                                      }
                                      return e.h && g(), e.j !== null && d(), t;
                                    })(w(256)),
                              yh: ((a) =>
                                a === void 0
                                  ? u("rive_text_v1", "release")
                                  : (t) => {
                                      e.g === 0 && b(), r.i && r.l++;
                                      try {
                                        a(e.g, t);
                                      } catch (s) {
                                        throw ((t = s), (e.h = !0), t);
                                      }
                                      e.h && g(), e.j !== null && d();
                                    })(w(257)),
                              nh: ((a) =>
                                a === void 0
                                  ? u("rive_text_v1", "append")
                                  : (t, s, c, _, h, v, f, C, y) => {
                                      e.g === 0 && b(), r.i && r.l++;
                                      try {
                                        a(e.g, t, s, c, _, h, v, f, C, y);
                                      } catch (L) {
                                        throw ((t = L), (e.h = !0), t);
                                      }
                                      e.h && g(), e.j !== null && d();
                                    })(w(258)),
                              qh: ((a) =>
                                a === void 0
                                  ? u("rive_text_v1", "clear")
                                  : (t) => {
                                      e.g === 0 && b(), r.i && r.l++;
                                      try {
                                        a(e.g, t);
                                      } catch (s) {
                                        throw ((t = s), (e.h = !0), t);
                                      }
                                      e.h && g(), e.j !== null && d();
                                    })(w(259)),
                              uh: ((a) =>
                                a === void 0
                                  ? u("rive_text_v1", "layout")
                                  : (t, s, c) => {
                                      e.g === 0 && b(), r.i && r.l++;
                                      try {
                                        a(e.g, t, s, c);
                                      } catch (_) {
                                        throw ((t = _), (e.h = !0), t);
                                      }
                                      e.h && g(), e.j !== null && d();
                                    })(w(260)),
                              rh: ((a) =>
                                a === void 0
                                  ? u("rive_text_v1", "draw")
                                  : (t, s, c) => {
                                      e.g === 0 && b(), r.i && r.l++;
                                      try {
                                        a(e.g, t, s, c);
                                      } catch (_) {
                                        throw ((t = _), (e.h = !0), t);
                                      }
                                      e.h && g(), e.j !== null && d();
                                    })(w(261)),
                              oh: ((a) =>
                                a === void 0
                                  ? u("rive_text_v1", "bounds")
                                  : (t, s, c) => {
                                      e.g === 0 && b(), r.i && r.l++;
                                      try {
                                        a(e.g, t, s, c);
                                      } catch (_) {
                                        throw ((t = _), (e.h = !0), t);
                                      }
                                      e.h && g(), e.j !== null && d();
                                    })(w(262)),
                              vh: ((a) =>
                                a === void 0
                                  ? u("rive_text_v1", "length")
                                  : (t) => {
                                      e.g === 0 && b(), r.i && r.l++;
                                      let s;
                                      try {
                                        s = a(e.g, t);
                                      } catch (c) {
                                        throw ((t = c), (e.h = !0), t);
                                      }
                                      return e.h && g(), e.j !== null && d(), s;
                                    })(w(263)),
                              wh: ((a) =>
                                a === void 0
                                  ? u("rive_text_v1", "lines")
                                  : (t, s, c) => {
                                      e.g === 0 && b(), r.i && r.l++;
                                      let _;
                                      try {
                                        _ = a(e.g, t, s, c);
                                      } catch (h) {
                                        throw ((t = h), (e.h = !0), t);
                                      }
                                      return e.h && g(), e.j !== null && d(), _;
                                    })(w(264)),
                              zh: ((a) =>
                                a === void 0
                                  ? u("rive_text_v1", "runs")
                                  : (t, s, c) => {
                                      e.g === 0 && b(), r.i && r.l++;
                                      let _;
                                      try {
                                        _ = a(e.g, t, s, c);
                                      } catch (h) {
                                        throw ((t = h), (e.h = !0), t);
                                      }
                                      return e.h && g(), e.j !== null && d(), _;
                                    })(w(265)),
                              sh: ((a) =>
                                a === void 0
                                  ? u("rive_text_v1", "glyphs")
                                  : (t, s, c) => {
                                      e.g === 0 && b(), r.i && r.l++;
                                      let _;
                                      try {
                                        _ = a(e.g, t, s, c);
                                      } catch (h) {
                                        throw ((t = h), (e.h = !0), t);
                                      }
                                      return e.h && g(), e.j !== null && d(), _;
                                    })(w(266)),
                              th: ((a) =>
                                a === void 0
                                  ? u("rive_text_v1", "hit_test")
                                  : (t, s, c) => {
                                      e.g === 0 && b(), r.i && r.l++;
                                      let _;
                                      try {
                                        _ = a(e.g, t, s, c);
                                      } catch (h) {
                                        throw ((t = h), (e.h = !0), t);
                                      }
                                      return e.h && g(), e.j !== null && d(), _;
                                    })(w(267)),
                              ph: ((a) =>
                                a === void 0
                                  ? u("rive_text_v1", "caret")
                                  : (t, s, c, _) => {
                                      e.g === 0 && b(), r.i && r.l++;
                                      let h;
                                      try {
                                        h = a(e.g, t, s, c, _);
                                      } catch (v) {
                                        throw ((t = v), (e.h = !0), t);
                                      }
                                      return e.h && g(), e.j !== null && d(), h;
                                    })(w(268)),
                              Ah: ((a) =>
                                a === void 0
                                  ? u("rive_text_v1", "selection_rects")
                                  : (t, s, c, _, h) => {
                                      e.g === 0 && b(), r.i && r.l++;
                                      let v;
                                      try {
                                        v = a(e.g, t, s, c, _, h);
                                      } catch (f) {
                                        throw ((t = f), (e.h = !0), t);
                                      }
                                      return e.h && g(), e.j !== null && d(), v;
                                    })(w(269)),
                              jh: ((a) => (t, s, c, _, h, v, f) => {
                                e.g === 0 && b(), r.i && r.l++;
                                let C;
                                try {
                                  C = a(e.g, t, s, c, _, h, v, f);
                                } catch (y) {
                                  throw ((t = y), (e.h = !0), t);
                                }
                                return e.h && g(), e.j !== null && d(), C;
                              })(w(270)),
                              kh: ((a) => (t, s, c, _, h, v) => {
                                e.g === 0 && b(), r.i && r.l++;
                                let f;
                                try {
                                  f = a(e.g, t, s, c, _, h, v);
                                } catch (C) {
                                  throw ((t = C), (e.h = !0), t);
                                }
                                return e.h && g(), e.j !== null && d(), f;
                              })(w(271)),
                              lh: ((a) => (t) => {
                                e.g === 0 && b(), r.i && r.l++;
                                try {
                                  a(e.g, t);
                                } catch (s) {
                                  throw ((t = s), (e.h = !0), t);
                                }
                                e.h && g(), e.j !== null && d();
                              })(w(272)),
                              mh: ((a) => (t, s, c, _) => {
                                e.g === 0 && b(), r.i && r.l++;
                                let h;
                                try {
                                  h = a(e.g, t, s, c, _);
                                } catch (v) {
                                  throw ((t = v), (e.h = !0), t);
                                }
                                return e.h && g(), e.j !== null && d(), h;
                              })(w(273)),
                              Ch: ((a) => (t, s) => {
                                e.g === 0 && b(), r.i && r.l++;
                                try {
                                  a(e.g, t, s);
                                } catch (c) {
                                  throw ((t = c), (e.h = !0), t);
                                }
                                e.h && g(), e.j !== null && d();
                              })(w(274)),
                              Eh: ((a) => (t) => {
                                e.g === 0 && b(), r.i && r.l++;
                                let s;
                                try {
                                  s = a(e.g, t);
                                } catch (c) {
                                  throw ((t = c), (e.h = !0), t);
                                }
                                return e.h && g(), e.j !== null && d(), s;
                              })(w(275)),
                              Dh: ((a) => (t) => {
                                e.g === 0 && b(), r.i && r.l++;
                                let s;
                                try {
                                  s = a(e.g, t);
                                } catch (c) {
                                  throw ((t = c), (e.h = !0), t);
                                }
                                return e.h && g(), e.j !== null && d(), s;
                              })(w(276)),
                              Xg: ((a) => (t) => {
                                e.g === 0 && b(), r.i && r.l++;
                                try {
                                  a(e.g, t);
                                } catch (s) {
                                  throw ((t = s), (e.h = !0), t);
                                }
                                e.h && g(), e.j !== null && d();
                              })(w(277)),
                              Wg: ((a) => (t) => {
                                e.g === 0 && b(), r.i && r.l++;
                                try {
                                  a(e.g, t);
                                } catch (s) {
                                  throw ((t = s), (e.h = !0), t);
                                }
                                e.h && g(), e.j !== null && d();
                              })(w(278)),
                              Yg: ((a) => (t, s, c, _, h, v, f) => {
                                e.g === 0 && b(), r.i && r.l++;
                                try {
                                  a(e.g, t, s, c, _, h, v, f);
                                } catch (C) {
                                  throw ((t = C), (e.h = !0), t);
                                }
                                e.h && g(), e.j !== null && d();
                              })(w(279)),
                              Tg: ((a) => (t, s, c) => {
                                e.g === 0 && b(), r.i && r.l++;
                                try {
                                  a(e.g, t, s, c);
                                } catch (_) {
                                  throw ((t = _), (e.h = !0), t);
                                }
                                e.h && g(), e.j !== null && d();
                              })(w(280)),
                              Pg: ((a) => (t, s) => {
                                e.g === 0 && b(), r.i && r.l++;
                                try {
                                  a(e.g, t, s);
                                } catch (c) {
                                  throw ((t = c), (e.h = !0), t);
                                }
                                e.h && g(), e.j !== null && d();
                              })(w(281)),
                              Vg: ((a) => (t, s) => {
                                e.g === 0 && b(), r.i && r.l++;
                                try {
                                  a(e.g, t, s);
                                } catch (c) {
                                  throw ((t = c), (e.h = !0), t);
                                }
                                e.h && g(), e.j !== null && d();
                              })(w(282)),
                              Ug: ((a) => (t, s, c) => {
                                e.g === 0 && b(), r.i && r.l++;
                                try {
                                  a(e.g, t, s, c);
                                } catch (_) {
                                  throw ((t = _), (e.h = !0), t);
                                }
                                e.h && g(), e.j !== null && d();
                              })(w(283)),
                              Qg: ((a) => (t, s, c, _, h) => {
                                e.g === 0 && b(), r.i && r.l++;
                                try {
                                  a(e.g, t, s, c, _, h);
                                } catch (v) {
                                  throw ((t = v), (e.h = !0), t);
                                }
                                e.h && g(), e.j !== null && d();
                              })(w(284)),
                              Rg: ((a) => (t, s, c, _, h, v, f, C) => {
                                e.g === 0 && b(), r.i && r.l++;
                                try {
                                  a(e.g, t, s, c, _, h, v, f, C);
                                } catch (y) {
                                  throw ((t = y), (e.h = !0), t);
                                }
                                e.h && g(), e.j !== null && d();
                              })(w(285)),
                              Sg: ((a) => (t, s, c, _, h, v, f) => {
                                e.g === 0 && b(), r.i && r.l++;
                                try {
                                  a(e.g, t, s, c, _, h, v, f);
                                } catch (C) {
                                  throw ((t = C), (e.h = !0), t);
                                }
                                e.h && g(), e.j !== null && d();
                              })(w(286)),
                              vg: ((a) => (t, s, c) => {
                                e.g === 0 && b(), r.i && r.l++;
                                let _;
                                try {
                                  _ = a(e.g, t, s, c);
                                } catch (h) {
                                  throw ((t = h), (e.h = !0), t);
                                }
                                return e.h && g(), e.j !== null && d(), _;
                              })(w(287)),
                              wg: ((a) => (t) => {
                                e.g === 0 && b(), r.i && r.l++;
                                try {
                                  a(e.g, t);
                                } catch (s) {
                                  throw ((t = s), (e.h = !0), t);
                                }
                                e.h && g(), e.j !== null && d();
                              })(w(288)),
                              Pe: ((a) => (t, s, c, _) => {
                                e.g === 0 && b(), r.i && r.l++;
                                let h;
                                try {
                                  h = a(e.g, t, s, c, _);
                                } catch (v) {
                                  throw ((t = v), (e.h = !0), t);
                                }
                                return e.h && g(), e.j !== null && d(), h;
                              })(w(289)),
                              Qe: ((a) => (t) => {
                                e.g === 0 && b(), r.i && r.l++;
                                try {
                                  a(e.g, t);
                                } catch (s) {
                                  throw ((t = s), (e.h = !0), t);
                                }
                                e.h && g(), e.j !== null && d();
                              })(w(290)),
                              Ie: ((a) => (t) => {
                                e.g === 0 && b(), r.i && r.l++;
                                let s;
                                try {
                                  s = a(e.g, t);
                                } catch (c) {
                                  throw ((t = c), (e.h = !0), t);
                                }
                                return e.h && g(), e.j !== null && d(), s;
                              })(w(291)),
                              Je: ((a) => (t, s, c, _) => {
                                e.g === 0 && b(), r.i && r.l++;
                                let h;
                                try {
                                  h = a(e.g, t, s, c, _);
                                } catch (v) {
                                  throw ((t = v), (e.h = !0), t);
                                }
                                return e.h && g(), e.j !== null && d(), h;
                              })(w(292)),
                              Ke: ((a) => (t, s, c, _) => {
                                e.g === 0 && b(), r.i && r.l++;
                                let h;
                                try {
                                  h = a(e.g, t, s, c, _);
                                } catch (v) {
                                  throw ((t = v), (e.h = !0), t);
                                }
                                return e.h && g(), e.j !== null && d(), h;
                              })(w(293)),
                              Oe: ((a) => (t) => {
                                e.g === 0 && b(), r.i && r.l++;
                                try {
                                  a(e.g, t);
                                } catch (s) {
                                  throw ((t = s), (e.h = !0), t);
                                }
                                e.h && g(), e.j !== null && d();
                              })(w(294)),
                              Ne: ((a) => (t, s, c) => {
                                e.g === 0 && b(), r.i && r.l++;
                                let _;
                                try {
                                  _ = a(e.g, t, s, c);
                                } catch (h) {
                                  throw ((t = h), (e.h = !0), t);
                                }
                                return e.h && g(), e.j !== null && d(), _;
                              })(w(295)),
                              Le: ((a) => (t) => {
                                e.g === 0 && b(), r.i && r.l++;
                                let s;
                                try {
                                  s = a(e.g, t);
                                } catch (c) {
                                  throw ((t = c), (e.h = !0), t);
                                }
                                return e.h && g(), e.j !== null && d(), s;
                              })(w(296)),
                              Me: ((a) => (t, s) => {
                                e.g === 0 && b(), r.i && r.l++;
                                let c;
                                try {
                                  c = a(e.g, t, s);
                                } catch (_) {
                                  throw ((t = _), (e.h = !0), t);
                                }
                                return e.h && g(), e.j !== null && d(), c;
                              })(w(297)),
                              rd: ((a) => (t, s, c) => {
                                e.g === 0 && b(), r.i && r.l++;
                                try {
                                  a(e.g, t, s, c);
                                } catch (_) {
                                  throw ((t = _), (e.h = !0), t);
                                }
                                e.h && g(), e.j !== null && d();
                              })(w(298)),
                              Bh: ((a) => (t, s, c, _, h, v, f, C) => {
                                e.g === 0 && b(), r.i && r.l++;
                                try {
                                  a(e.g, t, s, c, _, h, v, f, C);
                                } catch (y) {
                                  throw ((t = y), (e.h = !0), t);
                                }
                                e.h && g(), e.j !== null && d();
                              })(w(299)),
                            };
                          }
                          function u(w, e) {
                            return () => {
                              throw Error("failed to call unlinked import function " + w + "." + e);
                            };
                          }
                          function p(w) {
                            return (
                              (w = [0, ...w, 11]),
                              new Uint8Array([
                                0,
                                97,
                                115,
                                109,
                                1,
                                0,
                                0,
                                0,
                                1,
                                5,
                                1,
                                96,
                                0,
                                1,
                                123,
                                3,
                                2,
                                1,
                                0,
                                10,
                                w.length + 2,
                                1,
                                w.length,
                                ...w,
                              ])
                            );
                          }
                          function E(w) {
                            let e = 0,
                              r = 8;
                            const d = () => {
                                const [c, _] = x(w, r);
                                return (r = _), c;
                              },
                              g = () => {
                                const c = w[r++];
                                return c === 123 && (e = Math.max(e, 1)), c !== 99 && c !== 100;
                              },
                              b = () => {
                                var c = w[r++];
                                if (c === 253)
                                  (c = d()),
                                    (e = Math.max(e, 256 <= c && 275 >= c ? 2 : 1)),
                                    11 >= c || c === 92 || c === 93
                                      ? (d() & 64 && d(), d())
                                      : c === 12 || c === 13
                                        ? (r += 16)
                                        : 21 <= c && 34 >= c
                                          ? (r += 1)
                                          : 84 <= c && 91 >= c && (d() & 64 && d(), d(), (r += 1));
                                else if (c === 252) {
                                  if (((c = d()), c >= Ce.length)) return !1;
                                  for (let _ = 0; _ < Ce[c]; _++) d();
                                } else if (c === 254) d() === 3 ? (r += 1) : (d() & 64 && d(), d());
                                else if (40 <= c && 62 >= c) d() & 64 && d(), d();
                                else if (2 <= c && 4 >= c) w[r] === 123 && (e = Math.max(e, 1)), d();
                                else if (c === 14) for (c = d(); 0 <= c && r < w.length; c--) d();
                                else if (c === 28) {
                                  for (c = d(); 0 < c && r < w.length; c--) if (!g()) return !1;
                                } else if (c === 17 || c === 19) d(), d();
                                else if (c === 67 || c === 68) r += c === 67 ? 4 : 8;
                                else if ((32 <= c && 38 >= c) || Ue.includes(c)) d();
                                else if (
                                  !(
                                    1 >= c ||
                                    c === 5 ||
                                    c === 11 ||
                                    c === 15 ||
                                    c === 26 ||
                                    c === 27 ||
                                    c === 209 ||
                                    (69 <= c && 196 >= c)
                                  )
                                )
                                  return !1;
                                return !0;
                              };
                            for (; r < w.length; ) {
                              var a = w[r];
                              const [c, _] = x(w, r + 1);
                              if (((r = _), a === 1))
                                for (a = d(); 0 < a && r < w.length; a--) {
                                  if (w[r++] !== 96) return -1;
                                  for (var t = 0; 2 > t; t++)
                                    for (var s = d(); 0 < s && r < w.length; s--) if (!g()) return -1;
                                }
                              else if (a === 10)
                                for (a = d(); 0 < a && r < w.length; a--) {
                                  for (t = Math.min(d() + r, w.length), s = d(); 0 < s && r < t; s--)
                                    if ((d(), !g())) return -1;
                                  for (; r < t; ) if (!b()) return -1;
                                }
                              r = _ + c;
                            }
                            return e;
                          }
                          function x(w, e) {
                            let r = 0,
                              d = 0,
                              g;
                            do (g = w[e++]), (r |= (g & 127) << d), (d += 7);
                            while (g & 128);
                            return [r >>> 0, e];
                          }
                          function F(w) {
                            const e = [];
                            do {
                              const r = w & 127;
                              (w >>>= 7), e.push(w ? r | 128 : r);
                            } while (w);
                            return e;
                          }
                          function R(w) {
                            for (var e = [], r = -1, d = 8; d < w.length; ) {
                              const [g, b] = x(w, d + 1);
                              w[d] === 8
                                ? (r = x(w, b)[0])
                                : e.push({ id: w[d], at: d, body: b, end: b + g }),
                                (d = b + g);
                            }
                            if (0 > r || !e.some((g) => g.id === 7)) return w;
                            d = [w.subarray(0, 8)];
                            for (const g of e) {
                              if (g.id !== 7) {
                                d.push(w.subarray(g.at, g.end));
                                continue;
                              }
                              const [b, a] = x(w, g.body);
                              (e = Array.from("__riveLiftedStart", (c) => c.charCodeAt(0))),
                                (e = [...F(e.length), ...e, 0, ...F(r)]);
                              const t = F(b + 1),
                                s = w.subarray(a, g.end);
                              d.push(
                                Uint8Array.from([7, ...F(t.length + s.length + e.length), ...t]),
                                s,
                                Uint8Array.from(e),
                              );
                            }
                            (w = new Uint8Array(d.reduce((g, b) => g + b.length, 0))), (r = 0);
                            for (const g of d) w.set(g, r), (r += g.length);
                            return w;
                          }
                          function N(w, e, r, d) {
                            switch (d) {
                              case 0:
                                return w();
                              case 1:
                                return w(e[r]);
                              case 2:
                                return w(e[r], e[r + 1]);
                              case 3:
                                return w(e[r], e[r + 1], e[r + 2]);
                              case 4:
                                return w(e[r], e[r + 1], e[r + 2], e[r + 3]);
                              case 5:
                                return w(e[r], e[r + 1], e[r + 2], e[r + 3], e[r + 4]);
                              case 6:
                                return w(e[r], e[r + 1], e[r + 2], e[r + 3], e[r + 4], e[r + 5]);
                              case 7:
                                return w(e[r], e[r + 1], e[r + 2], e[r + 3], e[r + 4], e[r + 5], e[r + 6]);
                              case 8:
                                return w(
                                  e[r],
                                  e[r + 1],
                                  e[r + 2],
                                  e[r + 3],
                                  e[r + 4],
                                  e[r + 5],
                                  e[r + 6],
                                  e[r + 7],
                                );
                              default:
                                return w(...e.subarray(r, r + d));
                            }
                          }
                          const q = [253, 12, ...Array(16).fill(0)],
                            ue = p([...q]),
                            we = p([...q, ...q, 253, 128, 2]),
                            Ce = [0, 0, 0, 0, 0, 0, 0, 0, 2, 1, 2, 1, 2, 1, 2, 1, 1, 1],
                            Ue = [12, 13, 16, 18, 63, 64, 65, 66, 208, 210];
                          (function (w) {
                            function e(h, v) {
                              const f = n(
                                {
                                  pb: o(b.Hb, h.I),
                                  Z: b.Z,
                                  da: b.da,
                                  va: b.va,
                                  ca: b.ca,
                                  Ha: b.Ha,
                                  Ea: b.Ea,
                                  Ca: t,
                                },
                                () => {
                                  if (h.memory === null)
                                    throw Error(
                                      "script passed memory to the host while its module was still starting",
                                    );
                                  return h.memory;
                                },
                              );
                              for (const C of WebAssembly.Module.imports(v))
                                if (C.kind === "function") {
                                  let y, L, G, ge;
                                  (G = (y = f)[(L = C.module)] ?? (y[L] = {}))[(ge = C.name)] ??
                                    (G[ge] = u(C.module, C.name));
                                }
                              return f;
                            }
                            function r(h, v) {
                              const f = b.da();
                              for (const { name: C } of WebAssembly.Module.exports(v)) {
                                if (!C.startsWith("__rive")) continue;
                                v = 3 * C.length + 1;
                                const y = b.va(v);
                                b.cb(C, y, v), b.exports._rive_web_vm_module_export(h.I.g, y);
                              }
                              if ((b.ca(f), (h = b.exports._rive_web_vm_start_refusal(h.I.g)), h !== 0))
                                throw Error(b.ga(h));
                            }
                            function d(h, v) {
                              (h.memory = v.exports.memory),
                                (h.Ba = null),
                                (h.ob = Object.keys(v.exports)
                                  .filter((Pe) => Pe.startsWith("__riveCall"))
                                  .map((Pe) => v.exports[Pe])
                                  .filter((Pe) => {
                                    if (!(Pe instanceof WebAssembly.Global)) return !1;
                                    try {
                                      return (Pe.value = Pe.value), !0;
                                    } catch {
                                      return !1;
                                    }
                                  })),
                                (h.nb = []);
                              const f = b.exports._rive_web_vm_start_fuel(h.I.g),
                                C = v.exports.__riveFuelArm,
                                y = v.exports.__riveFuelEnd,
                                L = 0 < f && C !== void 0 && y !== void 0,
                                G = b.exports._rive_web_vm_booting;
                              G(h.I.g);
                              const ge = b.da();
                              try {
                                L && C(f), v.exports.__riveLiftedStart?.(), L && y();
                              } catch (Pe) {
                                throw (b.ca(ge), (h.I.j = null), Pe);
                              } finally {
                                G(0);
                              }
                              h.instance = v;
                            }
                            async function g(h) {
                              try {
                                const f = await WebAssembly.compile(R(h.Ba));
                                if (h.I.g !== 0) {
                                  r(h, f);
                                  var v = await WebAssembly.instantiate(f, e(h, f));
                                  h.I.g !== 0 && d(h, v);
                                }
                              } catch (f) {
                                h.error = String(f?.message ?? f);
                              }
                            }
                            let b = null;
                            const a = new Map(),
                              t = { i: !1, l: 0, ma: 0, ka: 0, la: 0, na: 0 },
                              s = w.riveScriptingValidate ?? ((h) => WebAssembly.validate(h));
                            let c = null;
                            const _ = {
                              lb(h) {
                                b ??= h;
                              },
                              register(h, v) {
                                v = v.slice();
                                var f = a.set;
                                if (((c ??= { Za: s(ue), Xa: s(we) }), (c.Za && c.Xa) || s(v))) var C = null;
                                else
                                  (C = E(v)),
                                    (C =
                                      !c.Za && 0 < C
                                        ? "this browser lacks WebAssembly SIMD, so this file's scripts are off; bake with wasmSimd: off to support it"
                                        : c.Xa || C !== 2
                                          ? null
                                          : "this browser lacks WebAssembly relaxed SIMD, so this file's scripts are off; bake with wasmSimd: on to support it");
                                f.call(a, h, {
                                  I: { g: h, j: null, h: !1, Ca: t },
                                  Ba: v,
                                  instance: null,
                                  memory: null,
                                  V: null,
                                  error: C,
                                  names: new Map(),
                                });
                              },
                              release(h) {
                                const v = a.get(h);
                                v && ((v.I.g = 0), a.delete(h));
                              },
                              Pb() {
                                const h = [];
                                for (const v of a.values())
                                  if (v.instance === null && v.error === null) {
                                    let f;
                                    (f = v).V ?? (f.V = g(v)), h.push(v.V);
                                  }
                                return Promise.all(h);
                              },
                              start(h) {
                                if (((h = a.get(h)), !h)) return "script module was never registered";
                                if (h.instance === null && h.error === null) {
                                  if (h.V !== null) return "script module is still being prepared";
                                  try {
                                    const v = new WebAssembly.Module(R(h.Ba));
                                    r(h, v), d(h, new WebAssembly.Instance(v, e(h, v)));
                                  } catch (v) {
                                    h.error = String(v?.message ?? v);
                                  }
                                }
                                return h.error;
                              },
                              V(h) {
                                return (
                                  (h = a.get(h)),
                                  h?.instance === null && h.error === null && h.V !== null ? 1 : 0
                                );
                              },
                              Gb(h, v) {
                                return typeof a.get(h)?.instance?.exports[b.ga(v)] == "function" ? 1 : 0;
                              },
                              call(h, v, f, C, y, L, G) {
                                if (((h = a.get(h)), !h || h.instance === null)) return 1;
                                let ge = h.names.get(v);
                                if (
                                  (ge === void 0 &&
                                    ((ge = h.instance.exports[b.ga(v)] ?? null), h.names.set(v, ge)),
                                  typeof ge != "function")
                                )
                                  return 1;
                                v = h.ob;
                                const Pe = h.nb,
                                  gt = Pe.length;
                                for (let pt = 0; pt < v.length; pt++) Pe.push(v[pt].value);
                                try {
                                  const pt = N(ge, b.Qa(), C >> 3, f);
                                  return (b.Qa()[y >> 3] = typeof pt == "number" ? pt : 0), 0;
                                } catch (pt) {
                                  return (h.I.j = null), b.cb(String(pt?.message ?? pt), L, G), h.I.h ? 3 : 2;
                                } finally {
                                  for (f = 0; f < v.length; f++) v[f].value = Pe[gt + f];
                                  Pe.length = gt;
                                }
                              },
                              Qb(h, v) {
                                (h = a.get(h)) && (h.I.j = b.ga(v));
                              },
                              read(h, v, f, C) {
                                return (
                                  (h = a.get(h)?.memory),
                                  !h || v + C > h.buffer.byteLength
                                    ? 0
                                    : (b.Z().set(new Uint8Array(h.buffer, v, C), f), t.i && (t.la += C), 1)
                                );
                              },
                              write(h, v, f, C) {
                                return (
                                  (h = a.get(h)?.memory),
                                  !h || v + C > h.buffer.byteLength
                                    ? 0
                                    : (new Uint8Array(h.buffer, v, C).set(b.Z().subarray(f, f + C)),
                                      t.i && (t.na += C),
                                      1)
                                );
                              },
                              Jh(h, v) {
                                return (
                                  (h = a.get(h)?.memory),
                                  !h || v >= h.buffer.byteLength
                                    ? -1
                                    : ((h = new Uint8Array(h.buffer).indexOf(0, v)), 0 > h ? -1 : h - v)
                                );
                              },
                              Nb(h) {
                                return (h = a.get(h)?.memory) ? h.buffer.byteLength / 65536 : 0;
                              },
                              zb() {
                                const h = [];
                                for (const v of a.keys()) {
                                  const f = b.exports._rive_web_vm_frame_boundary(v);
                                  f !== 0 && h.push(b.ga(f));
                                }
                                return h;
                              },
                              rb(h) {
                                (t.i = !!h), (t.l = 0), (t.ma = 0), (t.ka = 0), (t.la = 0), (t.na = 0);
                              },
                              Ib() {
                                return {
                                  hostCalls: t.l,
                                  bytesStaged: t.ma,
                                  bytesCopiedOut: t.ka,
                                  bytesRead: t.la,
                                  bytesWritten: t.na,
                                };
                              },
                            };
                            return (
                              (_.prepare = _.Pb),
                              (_.frameBoundary = _.zb),
                              (_.countHostCalls = _.rb),
                              (_.hostCallCounts = _.Ib),
                              (w.riveScripting = _)
                            );
                          })(k);
                        })();
                      const Q = k.onRuntimeInitialized;
                      k.onRuntimeInitialized = function () {
                        function n(e) {
                          (this.G = e),
                            (this.gb = e.getContext("2d")),
                            (this.La = p),
                            (this.O = []),
                            (this.aa = 0),
                            (this.clear = function () {
                              console.assert(this.aa == 0), (this.O = []), E.delete(this);
                            }),
                            (this.save = function () {
                              ++this.aa, this.O.push(p.save.bind(p));
                            }),
                            (this.restore = function () {
                              0 < this.aa && (this.O.push(p.restore.bind(p)), --this.aa);
                            }),
                            (this.transform = function (r) {
                              this.O.push(p.transform.bind(p, r));
                            }),
                            (this.align = function (r, d, g, b, a = 1) {
                              this.O.push(p.align.bind(p, r, d, g, b, a));
                            }),
                            (this.flush = function () {
                              console.assert(this.aa == 0), E.add(this), p.Ka || u();
                            }),
                            (this.bindContext = function () {
                              const r = this.La;
                              r && r.T && Zt(r.T);
                            }),
                            (this.delete = function () {});
                        }
                        function o(e, r = !1, d = !1) {
                          var g = {
                            alpha: !0,
                            depth: r || d,
                            stencil: r || d,
                            antialias: r && !d,
                            premultipliedAlpha: !0,
                            preserveDrawingBuffer: 0,
                            powerPreference: "high-performance",
                            failIfMajorPerformanceCaveat: 0,
                            enableExtensionsByDefault: !1,
                            explicitSwapControl: 0,
                            renderViaOffscreenBackBuffer: 0,
                          };
                          if (((r = e.getContext("webgl2", g)), !r)) return null;
                          (g = dn(r, g)), Zt(g);
                          const b = x(e.width, e.height);
                          (b.T = g),
                            (b.G = e),
                            (b.Aa = e.width),
                            (b.za = e.height),
                            (b.P = r),
                            (b.mb = function () {
                              this.T && Zt(this.T);
                            });
                          var a = b.delete;
                          return (
                            (b.delete = function () {
                              this.mb(), a.call(this);
                              var t = this.T;
                              Bt === dt[t] && (Bt = null),
                                typeof JSEvents == "object" && JSEvents.Oh(dt[t].F.canvas),
                                dt[t]?.F.canvas && (dt[t].F.canvas.eb = void 0),
                                (this.T = this.G = this.Aa = this.za = this.P = dt[t] = null);
                            }),
                            d && b.setInkbleed(!0),
                            b
                          );
                        }
                        function u() {
                          if (p) {
                            var e = p.ib,
                              r = 0,
                              d = 0,
                              g = 0,
                              b = Array(E.size),
                              a = 0;
                            for (var t of E)
                              (t.X = Math.min(t.G.width, e)),
                                (t.W = Math.min(t.G.height, e)),
                                (t.xa = t.W * t.X),
                                (r = Math.max(r, t.X)),
                                (d = Math.max(d, t.W)),
                                (g += t.xa),
                                (b[a++] = t);
                            if ((E.clear(), !(0 >= g))) {
                              for (
                                r = 1 << (0 >= r ? 0 : 32 - Math.clz32(r - 1)),
                                  d = 1 << (0 >= d ? 0 : 32 - Math.clz32(d - 1));
                                d * r < g;

                              )
                                r <= d ? (r *= 2) : (d *= 2);
                              (r = Math.min(r, e)),
                                (d = Math.min(d, e)),
                                b.sort((h, v) => v.xa - h.xa),
                                p.Ma || ((p.Ma = new k.DynamicRectanizer(e)), (p.fb = new k.Mat2D())),
                                (g = p.Ma),
                                (a = p.fb);
                              for (var s = 0; s < b.length; ) {
                                for (g.reset(r, d), t = s; t < b.length; ++t) {
                                  var c = b[t],
                                    _ = g.addRect(c.X, c.W);
                                  if (0 > _) {
                                    console.assert(t > s);
                                    break;
                                  }
                                  (c.ia = _ & 65535), (c.ja = _ >> 16);
                                }
                                for (
                                  c = N.push(g.drawWidth()),
                                    _ = q.push(g.drawHeight()),
                                    console.assert(c >= g.drawWidth()),
                                    console.assert(_ >= g.drawHeight()),
                                    console.assert(c <= e),
                                    console.assert(_ <= e),
                                    p.G.width != c && (p.G.width = c),
                                    p.G.height != _ && (p.G.height = _),
                                    p.clear(),
                                    c = s;
                                  c < t;
                                  ++c
                                ) {
                                  (_ = b[c]),
                                    p.saveClipRect(_.ia, _.ja, _.ia + _.X, _.ja + _.W),
                                    (a.xx = _.X / _.G.width),
                                    (a.yy = _.W / _.G.height),
                                    (a.xy = a.yx = 0),
                                    (a.tx = _.ia),
                                    (a.ty = _.ja),
                                    p.transform(a);
                                  for (const h of _.O) h();
                                  p.restoreClipRect(), (_.O = []);
                                }
                                for (p.flush(); s < t; ++s)
                                  (c = b[s]),
                                    (_ = c.gb),
                                    (_.globalCompositeOperation = "copy"),
                                    _.drawImage(p.G, c.ia, c.ja, c.X, c.W, 0, 0, c.G.width, c.G.height);
                                s = t;
                              }
                            }
                          }
                        }
                        Q && Q();
                        let p = null;
                        const E = new Set(),
                          x = k.makeRenderer;
                        k.makeRenderer = function (e, r, d) {
                          if (((d = !(!d || !d.inkbleed)), !p)) {
                            let g = function (b) {
                              var a =
                                typeof document > "u"
                                  ? new OffscreenCanvas(1, 1)
                                  : document.createElement("canvas");
                              return (
                                (a.width = 1),
                                (a.height = 1),
                                (p = o(a, b)),
                                p
                                  ? ((p.Ka = !!p.P.getExtension("WEBGL_shader_pixel_local_storage")),
                                    (p.ib = Math.min(
                                      p.P.getParameter(p.P.MAX_RENDERBUFFER_SIZE),
                                      p.P.getParameter(p.P.MAX_TEXTURE_SIZE),
                                    )),
                                    (p.ya = !p.Ka),
                                    (b = p.P.getExtension("WEBGL_debug_renderer_info")) &&
                                      ((a = p.P.getParameter(b.UNMASKED_RENDERER_WEBGL)),
                                      p.P.getParameter(b.UNMASKED_VENDOR_WEBGL).includes("Google") &&
                                        a.includes("ANGLE Metal Renderer") &&
                                        (p.ya = !1)),
                                    p)
                                  : null
                              );
                            };
                            if (((p = g(!0)), !p))
                              throw "Unable to create WebGL context, your environment may not support WebGL. Try out @rive-app/canvas as an alternative.";
                            p.ya || (p = g(!1));
                          }
                          return r ? new n(e) : o(e, p.ya, d);
                        };
                        const F = k.Artboard.prototype.delete;
                        k.Artboard.prototype.delete = function () {
                          (this.kb = !0), F.call(this);
                        };
                        const R = k.Artboard.prototype.draw;
                        k.Artboard.prototype.draw = function (e) {
                          e.O
                            ? e.O.push(() => {
                                this.kb || R.call(this, e.La);
                              })
                            : R.call(this, e);
                        };
                        const N = new U(),
                          q = new U(),
                          ue = new ne();
                        (k.requestAnimationFrame = ue.requestAnimationFrame.bind(ue)),
                          (k.cancelAnimationFrame = ue.cancelAnimationFrame.bind(ue)),
                          (k.enableFPSCounter = ue.vb.bind(ue));
                        const we = D(u);
                        (ue.Sa = we), (k.resolveAnimationFrame = we);
                        let Ce = k.load;
                        k.load = function (e, r, d = !0, g = null) {
                          const b = new k.FallbackFileAssetLoader();
                          return (
                            r !== void 0 && b.addLoader(r),
                            d && ((r = new k.CDNFileAssetLoader(g)), b.addLoader(r)),
                            k.startFileScripts(Ce(e, b, g ?? null))
                          );
                        };
                        const Ue = k.WebGL2Renderer.prototype.clear;
                        (k.WebGL2Renderer.prototype.clear = function () {
                          Zt(this.T);
                          const e = this.G;
                          (this.Aa != e.width || this.za != e.height) &&
                            (this.resize(e.width, e.height), (this.Aa = e.width), (this.za = e.height)),
                            Ue.call(this);
                        }),
                          (k.decodeImage = function (e, r, d = null) {
                            (e = k.decodeWebGL2Image(e, d ?? null)), r(e);
                          });
                        let w = k.Renderer.prototype.align;
                        k.Renderer.prototype.align = function (e, r, d, g, b = 1) {
                          w.call(this, e, r, d, g, b);
                        };
                      };
                      var pe = "./this.program";
                      J && (M = self.location.href);
                      var _e = "",
                        K,
                        X;
                      if (le || J) {
                        try {
                          _e = new URL(".", M).href;
                        } catch {}
                        J &&
                          (X = (n) => {
                            var o = new XMLHttpRequest();
                            return (
                              o.open("GET", n, !1),
                              (o.responseType = "arraybuffer"),
                              o.send(null),
                              new Uint8Array(o.response)
                            );
                          }),
                          (K = async (n) => {
                            if (ze(n))
                              return new Promise((u, p) => {
                                var E = new XMLHttpRequest();
                                E.open("GET", n, !0),
                                  (E.responseType = "arraybuffer"),
                                  (E.onload = () => {
                                    E.status == 200 || (E.status == 0 && E.response)
                                      ? u(E.response)
                                      : p(E.status);
                                  }),
                                  (E.onerror = p),
                                  E.send(null);
                              });
                            var o = await fetch(n, { credentials: "same-origin" });
                            if (o.ok) return o.arrayBuffer();
                            throw Error(o.status + " : " + o.url);
                          });
                      }
                      var te = console.log.bind(console),
                        Y = console.error.bind(console),
                        be,
                        ee = !1,
                        ze = (n) => n.startsWith("file://"),
                        xe,
                        ke,
                        ae,
                        A,
                        j,
                        V,
                        O,
                        H,
                        ie,
                        Z,
                        ye = !1;
                      function Ee() {
                        var n = Nt.buffer;
                        (k.HEAP8 = ae = new Int8Array(n)),
                          (j = new Int16Array(n)),
                          (k.HEAPU8 = A = new Uint8Array(n)),
                          (k.HEAPU16 = V = new Uint16Array(n)),
                          (k.HEAP32 = O = new Int32Array(n)),
                          (k.HEAPU32 = H = new Uint32Array(n)),
                          (k.HEAPF32 = ie = new Float32Array(n)),
                          (Z = new Float64Array(n));
                      }
                      function Se(n) {
                        throw (
                          (k.onAbort?.(n),
                          (n = "Aborted(" + n + ")"),
                          Y(n),
                          (ee = !0),
                          (n = new WebAssembly.RuntimeError(n + ". Build with -sASSERTIONS for more info.")),
                          ke?.(n),
                          n)
                        );
                      }
                      var Ie;
                      async function Ve(n) {
                        if (!be)
                          try {
                            var o = await K(n);
                            return new Uint8Array(o);
                          } catch {}
                        if (n == Ie && be) n = new Uint8Array(be);
                        else if (X) n = X(n);
                        else throw "both async and sync fetching of the wasm failed";
                        return n;
                      }
                      async function Ne(n, o) {
                        try {
                          var u = await Ve(n);
                          return await WebAssembly.instantiate(u, o);
                        } catch (p) {
                          Y(`failed to asynchronously prepare wasm: ${p}`), Se(p);
                        }
                      }
                      async function He(n) {
                        var o = Ie;
                        if (!be && !ze(o))
                          try {
                            var u = fetch(o, { credentials: "same-origin" });
                            return await WebAssembly.instantiateStreaming(u, n);
                          } catch (p) {
                            Y(`wasm streaming compile failed: ${p}`),
                              Y("falling back to ArrayBuffer instantiation");
                          }
                        return Ne(o, n);
                      }
                      var Fe,
                        Re,
                        me = (n) => {
                          for (; 0 < n.length; ) n.shift()(k);
                        },
                        De = [],
                        Be = [],
                        Ge = () => {
                          var n = k.preRun.shift();
                          Be.push(n);
                        },
                        Ze = (n) => Sr(n),
                        je = () => Cr(),
                        st = globalThis.TextDecoder && new TextDecoder(),
                        rt = (n, o, u, p) => {
                          if (((u = o + u), p)) return u;
                          for (; n[o] && !(o >= u); ) ++o;
                          return o;
                        },
                        Je = (n, o = 0, u, p) => {
                          if (((u = rt(n, o, u, p)), 16 < u - o && n.buffer && st))
                            return st.decode(n.subarray(o, u));
                          for (p = ""; o < u; ) {
                            var E = n[o++];
                            if (E & 128) {
                              var x = n[o++] & 63;
                              if ((E & 224) == 192) p += String.fromCharCode(((E & 31) << 6) | x);
                              else {
                                var F = n[o++] & 63;
                                (E =
                                  (E & 240) == 224
                                    ? ((E & 15) << 12) | (x << 6) | F
                                    : ((E & 7) << 18) | (x << 12) | (F << 6) | (n[o++] & 63)),
                                  65536 > E
                                    ? (p += String.fromCharCode(E))
                                    : ((E -= 65536),
                                      (p += String.fromCharCode(55296 | (E >> 10), 56320 | (E & 1023))));
                              }
                            } else p += String.fromCharCode(E);
                          }
                          return p;
                        },
                        lt = (n, o) => Object.defineProperty(o, "name", { value: n }),
                        Te = [],
                        Ye = [0, 1, , 1, null, 1, !0, 1, !1, 1],
                        de = class extends Error {
                          constructor(n) {
                            super(n), (this.name = "BindingError");
                          }
                        },
                        it = (n) => {
                          if (!n) throw new de(`Cannot use deleted val. handle = ${n}`);
                          return Ye[n];
                        },
                        ot = (n) => {
                          switch (n) {
                            case void 0:
                              return 2;
                            case null:
                              return 4;
                            case !0:
                              return 6;
                            case !1:
                              return 8;
                            default:
                              const o = Te.pop() || Ye.length;
                              return (Ye[o] = n), (Ye[o + 1] = 1), o;
                          }
                        };
                      class St extends Error {}
                      var Ke = (n) => {
                          for (var o = ""; ; ) {
                            var u = A[n++];
                            if (!u) return o;
                            o += String.fromCharCode(u);
                          }
                        },
                        at = {},
                        ht = (n, o) => {
                          if (o === void 0) throw new de("ptr should not be undefined");
                          for (; n.C; ) (o = n.fa(o)), (n = n.C);
                          return o;
                        },
                        ut = {},
                        Rt = (n) => {
                          n = Br(n);
                          var o = Ke(n);
                          return Wt(n), o;
                        },
                        It = (n, o) => {
                          var u = ut[n];
                          if (u === void 0) throw ((n = `${o} has unknown type ${Rt(n)}`), new de(n));
                          return u;
                        },
                        xt = () => {},
                        Ct = !1,
                        ct = (n) =>
                          globalThis.FinalizationRegistry
                            ? ((Ct = new FinalizationRegistry((o) => {
                                (o = o.m),
                                  --o.count.value,
                                  o.count.value === 0 && (o.D ? o.K.N(o.D) : o.v.o.N(o.u));
                              })),
                              (ct = (o) => {
                                var u = o.m;
                                return u.D && Ct.register(o, { m: u }, o), o;
                              }),
                              (xt = (o) => {
                                Ct.unregister(o);
                              }),
                              ct(n))
                            : ((ct = (o) => o), n),
                        Xe = {},
                        Le = (n) => {
                          for (; n.length; ) {
                            var o = n.pop();
                            n.pop()(o);
                          }
                        };
                      function Pt(n) {
                        return this.s(H[n >> 2]);
                      }
                      var Ft = {},
                        m = {},
                        i = class extends Error {
                          constructor(n) {
                            super(n), (this.name = "InternalError");
                          }
                        },
                        l = (n, o, u) => {
                          function p(R) {
                            if (((R = u(R)), R.length !== n.length))
                              throw new i("Mismatched type converter count");
                            for (var N = 0; N < n.length; ++N) I(n[N], R[N]);
                          }
                          n.forEach((R) => (m[R] = o));
                          var E = Array(o.length),
                            x = [],
                            F = 0;
                          for (let [R, N] of o.entries())
                            ut.hasOwnProperty(N)
                              ? (E[R] = ut[N])
                              : (x.push(N),
                                Ft.hasOwnProperty(N) || (Ft[N] = []),
                                Ft[N].push(() => {
                                  (E[R] = ut[N]), ++F, F === x.length && p(E);
                                }));
                          x.length === 0 && p(E);
                        };
                      function S(n, o, u = {}) {
                        var p = o.name;
                        if (!n) throw new de(`type "${p}" must have a positive integer typeid pointer`);
                        if (ut.hasOwnProperty(n)) {
                          if (u.Jb) return;
                          throw new de(`Cannot register type '${p}' twice`);
                        }
                        (ut[n] = o),
                          delete m[n],
                          Ft.hasOwnProperty(n) && ((o = Ft[n]), delete Ft[n], o.forEach((E) => E()));
                      }
                      function I(n, o, u = {}) {
                        return S(n, o, u);
                      }
                      var T = (n) => {
                        throw new de(n.m.v.o.name + " instance already deleted");
                      };
                      function z() {}
                      var ce = {},
                        fe = (n, o, u) => {
                          if (n[o].A === void 0) {
                            var p = n[o];
                            (n[o] = function (...E) {
                              if (!n[o].A.hasOwnProperty(E.length))
                                throw new de(
                                  `Function '${u}' called with an invalid number of arguments (${E.length}) - expects one of (${n[o].A})!`,
                                );
                              return n[o].A[E.length].apply(this, E);
                            }),
                              (n[o].A = []),
                              (n[o].A[p.R] = p);
                          }
                        },
                        he = (n, o, u) => {
                          if (k.hasOwnProperty(n)) {
                            if (u === void 0 || (k[n].A !== void 0 && k[n].A[u] !== void 0))
                              throw new de(`Cannot register public name '${n}' twice`);
                            if ((fe(k, n, n), k[n].A.hasOwnProperty(u)))
                              throw new de(
                                `Cannot register multiple overloads of a function with the same number of arguments (${u})!`,
                              );
                            k[n].A[u] = o;
                          } else (k[n] = o), (k[n].R = u);
                        },
                        Me = (n) => {
                          n = n.replace(/[^a-zA-Z0-9_]/g, "$");
                          var o = n.charCodeAt(0);
                          return 48 <= o && 57 >= o ? `_${n}` : n;
                        };
                      function Oe(n, o, u, p, E, x, F, R) {
                        (this.name = n),
                          (this.constructor = o),
                          (this.M = u),
                          (this.N = p),
                          (this.C = E),
                          (this.Bb = x),
                          (this.fa = F),
                          (this.tb = R),
                          (this.Ua = []);
                      }
                      var $e = (n, o, u) => {
                          for (; o !== u; ) {
                            if (!o.fa)
                              throw new de(
                                `Expected null or instance of ${u.name}, got an instance of ${o.name}`,
                              );
                            (n = o.fa(n)), (o = o.C);
                          }
                          return n;
                        },
                        nt = (n) => {
                          if (n === null) return "null";
                          var o = typeof n;
                          return o === "object" || o === "array" || o === "function" ? n.toString() : "" + n;
                        };
                      function et(n, o) {
                        if (o === null) {
                          if (this.Fa) throw new de(`null is not a valid ${this.name}`);
                          return 0;
                        }
                        if (!o.m) throw new de(`Cannot pass "${nt(o)}" as a ${this.name}`);
                        if (!o.m.u)
                          throw new de(`Cannot pass deleted object as a pointer of type ${this.name}`);
                        return $e(o.m.u, o.m.v.o, this.o);
                      }
                      function ft(n, o) {
                        if (o === null) {
                          if (this.Fa) throw new de(`null is not a valid ${this.name}`);
                          if (this.qa) {
                            var u = this.Ia();
                            return n !== null && n.push(this.N, u), u;
                          }
                          return 0;
                        }
                        if (!o || !o.m) throw new de(`Cannot pass "${nt(o)}" as a ${this.name}`);
                        if (!o.m.u)
                          throw new de(`Cannot pass deleted object as a pointer of type ${this.name}`);
                        if (!this.pa && o.m.v.pa)
                          throw new de(
                            `Cannot convert argument of type ${o.m.K ? o.m.K.name : o.m.v.name} to parameter type ${this.name}`,
                          );
                        if (((u = $e(o.m.u, o.m.v.o, this.o)), this.qa)) {
                          if (o.m.D === void 0)
                            throw new de("Passing raw pointer to smart pointer is illegal");
                          switch (this.Ih) {
                            case 0:
                              if (o.m.K === this) u = o.m.D;
                              else
                                throw new de(
                                  `Cannot convert argument of type ${o.m.K ? o.m.K.name : o.m.v.name} to parameter type ${this.name}`,
                                );
                              break;
                            case 1:
                              u = o.m.D;
                              break;
                            case 2:
                              if (o.m.K === this) u = o.m.D;
                              else {
                                var p = o.clone();
                                (u = this.Rb(
                                  u,
                                  ot(() => p.delete()),
                                )),
                                  n !== null && n.push(this.N, u);
                              }
                              break;
                            default:
                              throw new de("Unsupported sharing policy");
                          }
                        }
                        return u;
                      }
                      function jt(n, o) {
                        if (o === null) {
                          if (this.Fa) throw new de(`null is not a valid ${this.name}`);
                          return 0;
                        }
                        if (!o.m) throw new de(`Cannot pass "${nt(o)}" as a ${this.name}`);
                        if (!o.m.u)
                          throw new de(`Cannot pass deleted object as a pointer of type ${this.name}`);
                        if (o.m.v.pa)
                          throw new de(
                            `Cannot convert argument of type ${o.m.v.name} to parameter type ${this.name}`,
                          );
                        return $e(o.m.u, o.m.v.o, this.o);
                      }
                      var kt = (n, o, u) =>
                          o === u
                            ? n
                            : u.C === void 0
                              ? null
                              : ((n = kt(n, o, u.C)), n === null ? null : u.tb(n)),
                        Tt = (n, o) => ((o = ht(n, o)), at[o]),
                        _t = (n, o) => {
                          if (!o.v || !o.u) throw new i("makeClassHandle requires ptr and ptrType");
                          if (!!o.K != !!o.D) throw new i("Both smartPtrType and smartPtr must be specified");
                          return (
                            (o.count = { value: 1 }), ct(Object.create(n, { m: { value: o, writable: !0 } }))
                          );
                        };
                      function wt(n, o, u, p, E, x, F, R, N, q, ue) {
                        (this.name = n),
                          (this.o = o),
                          (this.Fa = u),
                          (this.pa = p),
                          (this.qa = E),
                          (this.Ob = x),
                          (this.Ih = F),
                          (this.Wa = R),
                          (this.Ia = N),
                          (this.Rb = q),
                          (this.N = ue),
                          E || o.C !== void 0 ? (this.B = ft) : ((this.B = p ? et : jt), (this.H = null));
                      }
                      var Et = (n, o, u) => {
                          if (!k.hasOwnProperty(n)) throw new i("Replacing nonexistent public symbol");
                          k[n].A !== void 0 && u !== void 0 ? (k[n].A[u] = o) : ((k[n] = o), (k[n].R = u));
                        },
                        tt = {},
                        mt = (n, o, u = []) => (
                          n.includes("j")
                            ? ((n = n.replace(/p/g, "i")), (o = (0, tt[n])(o, ...u)))
                            : (o = er.get(o)(...u)),
                          o
                        ),
                        bt =
                          (n, o) =>
                          (...u) =>
                            mt(n, o, u),
                        Ae = (n, o) => {
                          n = Ke(n);
                          var u = n.includes("j") ? bt(n, o) : er.get(o);
                          if (typeof u != "function")
                            throw new de(`unknown function pointer with signature ${n}: ${o}`);
                          return u;
                        };
                      class Yt extends Error {}
                      var Qe = (n, o) => {
                        function u(x) {
                          E[x] || ut[x] || (m[x] ? m[x].forEach(u) : (p.push(x), (E[x] = !0)));
                        }
                        var p = [],
                          E = {};
                        throw (o.forEach(u), new Yt(`${n}: ` + p.map(Rt).join([", "])));
                      };
                      function Ut(n) {
                        for (var o = 1; o < n.length; ++o) if (n[o] !== null && n[o].H === void 0) return !0;
                        return !1;
                      }
                      function Ot(n, o, u, p, E) {
                        var x = o.length;
                        if (2 > x)
                          throw new de(
                            "argTypes array size mismatch! Must at least get return value and 'this' types!",
                          );
                        var F = o[1] !== null && u !== null,
                          R = Ut(o),
                          N = !o[0].Lb,
                          q = x - 2,
                          ue = Array(q),
                          we = [],
                          Ce = [];
                        return lt(n, function (...Ue) {
                          if (((Ce.length = 0), (we.length = F ? 2 : 1), (we[0] = E), F)) {
                            var w = o[1].B(Ce, this);
                            we[1] = w;
                          }
                          for (var e = 0; e < q; ++e) (ue[e] = o[e + 2].B(Ce, Ue[e])), we.push(ue[e]);
                          if (((Ue = p(...we)), R)) Le(Ce);
                          else
                            for (e = F ? 1 : 2; e < o.length; e++) {
                              var r = e === 1 ? w : ue[e - 2];
                              o[e].H !== null && o[e].H(r);
                            }
                          return (w = N ? o[0].s(Ue) : void 0), w;
                        });
                      }
                      var nr = (n, o) => {
                          for (var u = [], p = 0; p < n; p++) u.push(H[(o + 4 * p) >> 2]);
                          return u;
                        },
                        cr = (n) => {
                          n = n.trim();
                          const o = n.indexOf("(");
                          return o === -1 ? n : n.slice(0, o);
                        },
                        Ar = (n, o, u) => {
                          if (!(n instanceof Object)) throw new de(`${u} with invalid "this": ${n}`);
                          if (!(n instanceof o.o.constructor))
                            throw new de(`${u} incompatible with "this" of type ${n.constructor.name}`);
                          if (!n.m.u)
                            throw new de(`cannot call emscripten binding method ${u} on deleted object`);
                          return $e(n.m.u, n.m.v.o, o.o);
                        },
                        hr = (n) => {
                          9 < n && --Ye[n + 1] === 0 && ((Ye[n] = void 0), Te.push(n));
                        },
                        Zr = {
                          name: "emscripten::val",
                          s: (n) => {
                            var o = it(n);
                            return hr(n), o;
                          },
                          B: (n, o) => ot(o),
                          J: Pt,
                          H: null,
                        },
                        fr = (n, o, u) => {
                          switch (o) {
                            case 1:
                              return u
                                ? function (p) {
                                    return this.s(ae[p]);
                                  }
                                : function (p) {
                                    return this.s(A[p]);
                                  };
                            case 2:
                              return u
                                ? function (p) {
                                    return this.s(j[p >> 1]);
                                  }
                                : function (p) {
                                    return this.s(V[p >> 1]);
                                  };
                            case 4:
                              return u
                                ? function (p) {
                                    return this.s(O[p >> 2]);
                                  }
                                : function (p) {
                                    return this.s(H[p >> 2]);
                                  };
                            default:
                              throw new TypeError(`invalid integer width (${o}): ${n}`);
                          }
                        },
                        qr = (n, o) => {
                          switch (o) {
                            case 4:
                              return function (u) {
                                return this.s(ie[u >> 2]);
                              };
                            case 8:
                              return function (u) {
                                return this.s(Z[u >> 3]);
                              };
                            default:
                              throw new TypeError(`invalid float width (${o}): ${n}`);
                          }
                        },
                        en = (n, o, u) => {
                          switch (o) {
                            case 1:
                              return u ? (p) => ae[p] : (p) => A[p];
                            case 2:
                              return u ? (p) => j[p >> 1] : (p) => V[p >> 1];
                            case 4:
                              return u ? (p) => O[p >> 2] : (p) => H[p >> 2];
                            default:
                              throw new TypeError(`invalid integer width (${o}): ${n}`);
                          }
                        },
                        Dt = (n, o, u) => {
                          var p = A;
                          if (!(0 < u)) return 0;
                          var E = o;
                          u = o + u - 1;
                          for (var x = 0; x < n.length; ++x) {
                            var F = n.codePointAt(x);
                            if (127 >= F) {
                              if (o >= u) break;
                              p[o++] = F;
                            } else if (2047 >= F) {
                              if (o + 1 >= u) break;
                              (p[o++] = 192 | (F >> 6)), (p[o++] = 128 | (F & 63));
                            } else if (65535 >= F) {
                              if (o + 2 >= u) break;
                              (p[o++] = 224 | (F >> 12)),
                                (p[o++] = 128 | ((F >> 6) & 63)),
                                (p[o++] = 128 | (F & 63));
                            } else {
                              if (o + 3 >= u) break;
                              (p[o++] = 240 | (F >> 18)),
                                (p[o++] = 128 | ((F >> 12) & 63)),
                                (p[o++] = 128 | ((F >> 6) & 63)),
                                (p[o++] = 128 | (F & 63)),
                                x++;
                            }
                          }
                          return (p[o] = 0), o - E;
                        },
                        dr = (n) => {
                          for (var o = 0, u = 0; u < n.length; ++u) {
                            var p = n.charCodeAt(u);
                            127 >= p
                              ? o++
                              : 2047 >= p
                                ? (o += 2)
                                : 55296 <= p && 57343 >= p
                                  ? ((o += 4), ++u)
                                  : (o += 3);
                          }
                          return o;
                        },
                        Ir = globalThis.TextDecoder ? new TextDecoder("utf-16le") : void 0,
                        tn = (n, o, u) => {
                          if (((n >>= 1), (o = rt(V, n, o / 2, u)), 16 < o - n && Ir))
                            return Ir.decode(V.subarray(n, o));
                          for (u = ""; n < o; ++n) u += String.fromCharCode(V[n]);
                          return u;
                        },
                        rn = (n, o, u) => {
                          if (((u ??= 2147483647), 2 > u)) return 0;
                          u -= 2;
                          var p = o;
                          u = u < 2 * n.length ? u / 2 : n.length;
                          for (var E = 0; E < u; ++E) (j[o >> 1] = n.charCodeAt(E)), (o += 2);
                          return (j[o >> 1] = 0), o - p;
                        },
                        nn = (n) => 2 * n.length,
                        on = (n, o, u) => {
                          var p = "";
                          n >>= 2;
                          for (var E = 0; !(E >= o / 4); E++) {
                            var x = H[n + E];
                            if (!x && !u) break;
                            p += String.fromCodePoint(x);
                          }
                          return p;
                        },
                        an = (n, o, u) => {
                          if (((u ??= 2147483647), 4 > u)) return 0;
                          var p = o;
                          u = p + u - 4;
                          for (var E = 0; E < n.length; ++E) {
                            var x = n.codePointAt(E);
                            if ((65535 < x && E++, (O[o >> 2] = x), (o += 4), o + 4 > u)) break;
                          }
                          return (O[o >> 2] = 0), o - p;
                        },
                        sn = (n) => {
                          for (var o = 0, u = 0; u < n.length; ++u) 65535 < n.codePointAt(u) && u++, (o += 4);
                          return o;
                        },
                        pr = [],
                        ln = (n) => {
                          var o = pr.length;
                          return pr.push(n), o;
                        },
                        un = (n, o) => {
                          for (var u = Array(n), p = 0; p < n; ++p)
                            u[p] = It(H[(o + 4 * p) >> 2], `parameter ${p}`);
                          return u;
                        },
                        cn = {},
                        xr = (n) => {
                          var o = cn[n];
                          return o === void 0 ? Ke(n) : o;
                        },
                        hn = [0, 31, 60, 91, 121, 152, 182, 213, 244, 274, 305, 335],
                        fn = [0, 31, 59, 90, 120, 151, 181, 212, 243, 273, 304, 334],
                        vr = [],
                        Fr = (n) => {
                          n.Lh = n.getExtension("WEBGL_draw_instanced_base_vertex_base_instance");
                        },
                        kr = (n) => {
                          n.Nh = n.getExtension("WEBGL_multi_draw_instanced_base_vertex_base_instance");
                        },
                        W,
                        Mr = (n) => {
                          var o =
                            "EXT_color_buffer_float EXT_conservative_depth EXT_disjoint_timer_query_webgl2 EXT_texture_norm16 NV_shader_noperspective_interpolation WEBGL_clip_cull_distance EXT_clip_control EXT_color_buffer_half_float EXT_depth_clamp EXT_float_blend EXT_polygon_offset_clamp EXT_texture_compression_bptc EXT_texture_compression_rgtc EXT_texture_filter_anisotropic KHR_parallel_shader_compile OES_texture_float_linear WEBGL_blend_func_extended WEBGL_compressed_texture_astc WEBGL_compressed_texture_etc WEBGL_compressed_texture_etc1 WEBGL_compressed_texture_s3tc WEBGL_compressed_texture_s3tc_srgb WEBGL_debug_renderer_info WEBGL_debug_shaders WEBGL_lose_context WEBGL_multi_draw WEBGL_polygon_mode".split(
                              " ",
                            );
                          return (n.getSupportedExtensions() || []).filter((u) => o.includes(u));
                        },
                        Rr = 1,
                        zt = [],
                        At = [],
                        ir = [],
                        $t = [],
                        Vt = [],
                        Lt = [],
                        or = [],
                        dt = [],
                        Kt = [],
                        Jt = [],
                        Pr = {},
                        jr = {},
                        gr = 4,
                        Lr = 0,
                        Qt = (n) => {
                          for (var o = Rr++, u = n.length; u < o; u++) n[u] = null;
                          return o;
                        },
                        Ht = (n, o, u, p) => {
                          for (var E = 0; E < n; E++) {
                            var x = W[u](),
                              F = x && Qt(p);
                            x ? ((x.name = F), (p[F] = x)) : (qe ||= 1282), (O[(o + 4 * E) >> 2] = F);
                          }
                        },
                        dn = (n, o) => {
                          var u = Qt(dt),
                            p = { handle: u, attributes: o, version: o.Mh, F: n };
                          if (
                            (n.canvas && (n.canvas.eb = p),
                            (dt[u] = p),
                            (typeof o.ub > "u" || o.ub) && ((n = p) || (n = Bt), !n.Kb))
                          ) {
                            (n.Kb = !0),
                              (o = n.F),
                              (o.Mb = o.getExtension("WEBGL_multi_draw")),
                              (o.xb = o.getExtension("EXT_polygon_offset_clamp")),
                              (o.wb = o.getExtension("EXT_clip_control")),
                              (o.Kh = o.getExtension("WEBGL_polygon_mode")),
                              Fr(o),
                              kr(o),
                              2 <= n.version && (o.Oa = o.getExtension("EXT_disjoint_timer_query_webgl2")),
                              (2 > n.version || !o.Oa) && (o.Oa = o.getExtension("EXT_disjoint_timer_query"));
                            for (var E of Mr(o))
                              E.includes("lose_context") || E.includes("debug") || o.getExtension(E);
                          }
                          return u;
                        },
                        Zt = (n) => ((Bt = dt[n]), (k.ctx = W = Bt?.F), !(n && !W)),
                        qe,
                        Bt,
                        mr = {},
                        Tr = () => {
                          if (!yr) {
                            var n = {
                                USER: "web_user",
                                LOGNAME: "web_user",
                                PATH: "../shop/",
                                PWD: "../shop/",
                                HOME: "/home/web_user",
                                LANG: (globalThis.navigator?.language ?? "C").replace("-", "_") + ".UTF-8",
                                _: pe || "./this.program",
                              },
                              o;
                            for (o in mr) mr[o] === void 0 ? delete n[o] : (n[o] = mr[o]);
                            var u = [];
                            for (o in n) u.push(`${o}=${n[o]}`);
                            yr = u;
                          }
                          return yr;
                        },
                        yr,
                        pn = [null, [], []],
                        _r = [],
                        wr = () => {
                          var n = Mr(W);
                          return (n = n.concat(n.map((o) => "GL_" + o)));
                        },
                        Or = (n, o, u) => {
                          if (o) {
                            var p = void 0;
                            switch (n) {
                              case 36346:
                                p = 1;
                                break;
                              case 36344:
                                u != 0 && u != 1 && (qe ||= 1280);
                                return;
                              case 34814:
                              case 36345:
                                p = 0;
                                break;
                              case 34466:
                                var E = W.getParameter(34467);
                                p = E ? E.length : 0;
                                break;
                              case 33309:
                                if (2 > Bt.version) {
                                  qe ||= 1282;
                                  return;
                                }
                                p = wr().length;
                                break;
                              case 33307:
                              case 33308:
                                if (2 > Bt.version) {
                                  qe ||= 1280;
                                  return;
                                }
                                p = n == 33307 ? 3 : 0;
                            }
                            if (p === void 0)
                              switch (((E = W.getParameter(n)), typeof E)) {
                                case "number":
                                  p = E;
                                  break;
                                case "boolean":
                                  p = E ? 1 : 0;
                                  break;
                                case "string":
                                  qe ||= 1280;
                                  return;
                                case "object":
                                  if (E === null)
                                    switch (n) {
                                      case 34964:
                                      case 35725:
                                      case 34965:
                                      case 36006:
                                      case 36007:
                                      case 32873:
                                      case 34229:
                                      case 36662:
                                      case 36663:
                                      case 35053:
                                      case 35055:
                                      case 36010:
                                      case 35097:
                                      case 35869:
                                      case 32874:
                                      case 36389:
                                      case 35983:
                                      case 35368:
                                      case 34068:
                                        p = 0;
                                        break;
                                      default:
                                        qe ||= 1280;
                                        return;
                                    }
                                  else {
                                    if (
                                      E instanceof Float32Array ||
                                      E instanceof Uint32Array ||
                                      E instanceof Int32Array ||
                                      E instanceof Array
                                    ) {
                                      for (n = 0; n < E.length; ++n)
                                        switch (u) {
                                          case 0:
                                            O[(o + 4 * n) >> 2] = E[n];
                                            break;
                                          case 2:
                                            ie[(o + 4 * n) >> 2] = E[n];
                                            break;
                                          case 4:
                                            ae[o + n] = E[n] ? 1 : 0;
                                        }
                                      return;
                                    }
                                    try {
                                      p = E.name | 0;
                                    } catch (x) {
                                      (qe ||= 1280),
                                        Y(
                                          `GL_INVALID_ENUM in glGet${u}v: Unknown object returned from WebGL getParameter(${n})! (error: ${x})`,
                                        );
                                      return;
                                    }
                                  }
                                  break;
                                default:
                                  (qe ||= 1280),
                                    Y(
                                      `GL_INVALID_ENUM in glGet${u}v: Native code calling glGet${u}v(${n}) and it returns ${E} of type ${typeof E}!`,
                                    );
                                  return;
                              }
                            switch (u) {
                              case 1:
                                (u = p), (H[o >> 2] = u), (H[(o + 4) >> 2] = (u - H[o >> 2]) / 4294967296);
                                break;
                              case 0:
                                O[o >> 2] = p;
                                break;
                              case 2:
                                ie[o >> 2] = p;
                                break;
                              case 4:
                                ae[o] = p ? 1 : 0;
                            }
                          } else qe ||= 1281;
                        },
                        Xt = (n) => {
                          var o = dr(n) + 1,
                            u = qt(o);
                          return u && Dt(n, u, o), u;
                        },
                        Dr = (n) => n.slice(-1) == "]" && n.lastIndexOf("["),
                        ar = (n) => (
                          (n -= 5120),
                          n == 0
                            ? ae
                            : n == 1
                              ? A
                              : n == 2
                                ? j
                                : n == 4
                                  ? O
                                  : n == 6
                                    ? ie
                                    : n == 5 || n == 28922 || n == 28520 || n == 30779 || n == 30782
                                      ? H
                                      : V
                        ),
                        vn = (n) => Yr(n);
                      (() => {
                        let n = z.prototype;
                        Object.assign(n, {
                          isAliasOf: function (u) {
                            if (!(this instanceof z && u instanceof z)) return !1;
                            var p = this.m.v.o,
                              E = this.m.u;
                            u.m = u.m;
                            var x = u.m.v.o;
                            for (u = u.m.u; p.C; ) (E = p.fa(E)), (p = p.C);
                            for (; x.C; ) (u = x.fa(u)), (x = x.C);
                            return p === x && E === u;
                          },
                          clone: function () {
                            if ((this.m.u || T(this), this.m.$)) return (this.m.count.value += 1), this;
                            var u = ct,
                              p = Object,
                              E = p.create,
                              x = Object.getPrototypeOf(this),
                              F = this.m;
                            return (
                              (u = u(
                                E.call(p, x, {
                                  m: {
                                    value: {
                                      count: F.count,
                                      ba: F.ba,
                                      $: F.$,
                                      u: F.u,
                                      v: F.v,
                                      D: F.D,
                                      K: F.K,
                                    },
                                  },
                                }),
                              )),
                              (u.m.count.value += 1),
                              (u.m.ba = !1),
                              u
                            );
                          },
                          delete() {
                            if ((this.m.u || T(this), this.m.ba && !this.m.$))
                              throw new de("Object already scheduled for deletion");
                            xt(this);
                            var u = this.m;
                            --u.count.value,
                              u.count.value === 0 && (u.D ? u.K.N(u.D) : u.v.o.N(u.u)),
                              this.m.$ || ((this.m.D = void 0), (this.m.u = void 0));
                          },
                          isDeleted: function () {
                            return !this.m.u;
                          },
                          deleteLater: function () {
                            if ((this.m.u || T(this), this.m.ba && !this.m.$))
                              throw new de("Object already scheduled for deletion");
                            return (this.m.ba = !0), this;
                          },
                        });
                        const o = Symbol.dispose;
                        o && (n[o] = n.delete);
                      })(),
                        Object.assign(wt.prototype, {
                          Cb(n) {
                            return this.Wa && (n = this.Wa(n)), n;
                          },
                          Na(n) {
                            this.N?.(n);
                          },
                          J: Pt,
                          s: function (n) {
                            function o() {
                              return this.qa
                                ? _t(this.o.M, { v: this.Ob, u, K: this, D: n })
                                : _t(this.o.M, { v: this, u: n });
                            }
                            var u = this.Cb(n);
                            if (!u) return this.Na(n), null;
                            var p = Tt(this.o, u);
                            if (p !== void 0)
                              return p.m.count.value === 0
                                ? ((p.m.u = u), (p.m.D = n), p.clone())
                                : ((p = p.clone()), this.Na(n), p);
                            if (((p = this.o.Bb(u)), (p = ce[p]), !p)) return o.call(this);
                            p = this.pa ? p.qb : p.pointerType;
                            var E = kt(u, this.o, p.o);
                            return E === null
                              ? o.call(this)
                              : this.qa
                                ? _t(p.o.M, { v: p, u: E, K: this, D: n })
                                : _t(p.o.M, { v: p, u: E });
                          },
                        });
                      for (let n = 0; 32 > n; ++n) _r.push(Array(n));
                      if (
                        (k.print && (te = k.print),
                        k.printErr && (Y = k.printErr),
                        k.wasmBinary && (be = k.wasmBinary),
                        k.thisProgram && (pe = k.thisProgram),
                        k.preInit)
                      )
                        for (
                          typeof k.preInit == "function" && (k.preInit = [k.preInit]);
                          0 < k.preInit.length;

                        )
                          k.preInit.shift()();
                      var gn = {
                          354273: (n, o, u, p, E) => {
                            if (
                              typeof window > "u" ||
                              (window.AudioContext || window.webkitAudioContext) === void 0
                            )
                              return 0;
                            if (typeof window.miniaudio > "u") {
                              (window.miniaudio = { referenceCount: 0 }),
                                (window.miniaudio.device_type = {}),
                                (window.miniaudio.device_type.playback = n),
                                (window.miniaudio.device_type.capture = o),
                                (window.miniaudio.device_type.duplex = u),
                                (window.miniaudio.device_state = {}),
                                (window.miniaudio.device_state.stopped = p),
                                (window.miniaudio.device_state.started = E);
                              let x = window.miniaudio;
                              (x.devices = []),
                                (x.track_device = function (F) {
                                  for (var R = 0; R < x.devices.length; ++R)
                                    if (x.devices[R] == null) return (x.devices[R] = F), R;
                                  return x.devices.push(F), x.devices.length - 1;
                                }),
                                (x.untrack_device_by_index = function (F) {
                                  for (
                                    x.devices[F] = null;
                                    0 < x.devices.length && x.devices[x.devices.length - 1] == null;

                                  )
                                    x.devices.pop();
                                }),
                                (x.untrack_device = function (F) {
                                  for (var R = 0; R < x.devices.length; ++R)
                                    if (x.devices[R] == F) return x.untrack_device_by_index(R);
                                }),
                                (x.get_device_by_index = function (F) {
                                  return x.devices[F];
                                }),
                                (x.unlock_event_types = ["touchend", "click"]),
                                (x.unlock = function () {
                                  for (var F = 0; F < x.devices.length; ++F) {
                                    var R = x.devices[F];
                                    R != null &&
                                      R.L != null &&
                                      R.state === x.device_state.started &&
                                      R.L.resume().then(
                                        () => {
                                          Vr(R.Ta);
                                        },
                                        (N) => {
                                          console.error("Failed to resume audiocontext", N);
                                        },
                                      );
                                  }
                                  x.unlock_event_types.map(function (N) {
                                    document.removeEventListener(N, x.unlock, !0);
                                  });
                                }),
                                x.unlock_event_types.map(function (F) {
                                  document.addEventListener(F, x.unlock, !0);
                                });
                            }
                            return (window.miniaudio.referenceCount += 1), 1;
                          },
                          356451: () => {
                            typeof window.miniaudio < "u" &&
                              (window.miniaudio.unlock_event_types.map(function (n) {
                                document.removeEventListener(n, window.miniaudio.unlock, !0);
                              }),
                              --window.miniaudio.referenceCount,
                              window.miniaudio.referenceCount === 0 && delete window.miniaudio);
                          },
                          356755: () =>
                            navigator.mediaDevices !== void 0 &&
                            navigator.mediaDevices.getUserMedia !== void 0,
                          356859: () => {
                            try {
                              var n = new (window.AudioContext || window.webkitAudioContext)(),
                                o = n.sampleRate;
                              return n.close(), o;
                            } catch {
                              return 0;
                            }
                          },
                          357030: (n, o, u, p, E, x) => {
                            if (typeof window.miniaudio > "u") return -1;
                            var F = {},
                              R = {};
                            return (
                              n == window.miniaudio.device_type.playback && u != 0 && (R.sampleRate = u),
                              (F.L = new (window.AudioContext || window.webkitAudioContext)(R)),
                              F.L.suspend(),
                              (F.state = window.miniaudio.device_state.stopped),
                              (u = 0),
                              n != window.miniaudio.device_type.playback && (u = o),
                              (F.S = F.L.createScriptProcessor(p, u, o)),
                              (F.S.onaudioprocess = function (N) {
                                if (
                                  ((F.oa == null || F.oa.length == 0) &&
                                    (F.oa = new Float32Array(ie.buffer, E, p * o)),
                                  n == window.miniaudio.device_type.capture ||
                                    n == window.miniaudio.device_type.duplex)
                                ) {
                                  for (var q = 0; q < o; q += 1)
                                    for (
                                      var ue = N.inputBuffer.getChannelData(q), we = F.oa, Ce = 0;
                                      Ce < p;
                                      Ce += 1
                                    )
                                      we[Ce * o + q] = ue[Ce];
                                  Gr(x, p, E);
                                }
                                if (
                                  n == window.miniaudio.device_type.playback ||
                                  n == window.miniaudio.device_type.duplex
                                )
                                  for (Kr(x, p, E), q = 0; q < N.outputBuffer.numberOfChannels; ++q)
                                    for (
                                      ue = N.outputBuffer.getChannelData(q), we = F.oa, Ce = 0;
                                      Ce < p;
                                      Ce += 1
                                    )
                                      ue[Ce] = we[Ce * o + q];
                                else
                                  for (q = 0; q < N.outputBuffer.numberOfChannels; ++q)
                                    N.outputBuffer.getChannelData(q).fill(0);
                              }),
                              (n != window.miniaudio.device_type.capture &&
                                n != window.miniaudio.device_type.duplex) ||
                                navigator.mediaDevices
                                  .getUserMedia({ audio: !0, video: !1 })
                                  .then(function (N) {
                                    (F.wa = F.L.createMediaStreamSource(N)),
                                      F.wa.connect(F.S),
                                      F.S.connect(F.L.destination);
                                  })
                                  .catch(function (N) {
                                    console.log("Failed to get user media: " + N);
                                  }),
                              n == window.miniaudio.device_type.playback && F.S.connect(F.L.destination),
                              (F.Ta = x),
                              window.miniaudio.track_device(F)
                            );
                          },
                          359907: (n) => window.miniaudio.get_device_by_index(n).L.sampleRate,
                          359980: (n) => {
                            (n = window.miniaudio.get_device_by_index(n)),
                              n.S !== void 0 &&
                                ((n.S.onaudioprocess = function () {}), n.S.disconnect(), (n.S = void 0)),
                              n.wa !== void 0 && (n.wa.disconnect(), (n.wa = void 0)),
                              n.L.close(),
                              (n.L = void 0),
                              (n.Ta = void 0);
                          },
                          360380: (n) => {
                            window.miniaudio.untrack_device_by_index(n);
                          },
                          360430: (n) => {
                            (n = window.miniaudio.get_device_by_index(n)),
                              n.L.resume(),
                              (n.state = window.miniaudio.device_state.started);
                          },
                          360569: (n) => {
                            (n = window.miniaudio.get_device_by_index(n)),
                              n.L.suspend(),
                              (n.state = window.miniaudio.device_state.stopped);
                          },
                        },
                        Wt,
                        qt,
                        Br,
                        Wr,
                        Nr,
                        br,
                        Ur,
                        Vr,
                        Gr,
                        Kr,
                        Hr,
                        Xr,
                        Sr,
                        Yr,
                        Cr,
                        Nt,
                        er,
                        zr = {
                          __syscall_fcntl64: function () {
                            return 0;
                          },
                          __syscall_ioctl: function () {
                            return 0;
                          },
                          __syscall_openat: function () {},
                          _abort_js: () => Se(""),
                          _embind_create_inheriting_constructor: (n, o, u) => {
                            (n = Ke(n)), (o = It(o, "wrapper")), (u = it(u));
                            var p = o.o,
                              E = p.M,
                              x = p.C.M,
                              F = p.C.constructor;
                            return (
                              (n = lt(n, function (...R) {
                                for (var N of p.C.Ua)
                                  if (this[N] === x[N])
                                    throw new St(
                                      `Pure virtual function ${N} must be implemented in JavaScript`,
                                    );
                                Object.defineProperty(this, "__parent", { value: E }), this.__construct(...R);
                              })),
                              (E.__construct = function (...R) {
                                if (this === E) throw new de("Pass correct 'this' to __construct");
                                (R = F.implement(this, ...R)), xt(R);
                                var N = R.m;
                                if (
                                  (R.notifyOnDestruction(),
                                  (N.$ = !0),
                                  Object.defineProperties(this, { m: { value: N } }),
                                  ct(this),
                                  (R = N.u),
                                  (R = ht(p, R)),
                                  at.hasOwnProperty(R))
                                )
                                  throw new de(`Tried to register registered instance: ${R}`);
                                at[R] = this;
                              }),
                              (E.__destruct = function () {
                                if (this === E) throw new de("Pass correct 'this' to __destruct");
                                xt(this);
                                var R = this.m.u;
                                if (((R = ht(p, R)), at.hasOwnProperty(R))) delete at[R];
                                else throw new de(`Tried to unregister unregistered instance: ${R}`);
                              }),
                              (n.prototype = Object.create(E)),
                              Object.assign(n.prototype, u),
                              ot(n)
                            );
                          },
                          _embind_finalize_value_object: (n) => {
                            var o = Xe[n];
                            delete Xe[n];
                            var u = o.Ia,
                              p = o.N,
                              E = o.Pa,
                              x = E.map((F) => F.Fb).concat(E.map((F) => F.Gh));
                            l([n], x, (F) => {
                              var R = {},
                                N,
                                q;
                              for ([N, q] of E.entries()) {
                                const ue = F[N],
                                  we = q.Db,
                                  Ce = q.Eb,
                                  Ue = F[N + E.length],
                                  w = q.Fh,
                                  e = q.Hh;
                                R[q.yb] = {
                                  read: (r) => ue.s(we(Ce, r)),
                                  write: (r, d) => {
                                    var g = [];
                                    w(e, r, Ue.B(g, d)), Le(g);
                                  },
                                  optional: ue.optional,
                                };
                              }
                              return [
                                {
                                  name: o.name,
                                  s: (ue) => {
                                    var we = {},
                                      Ce;
                                    for (Ce in R) we[Ce] = R[Ce].read(ue);
                                    return p(ue), we;
                                  },
                                  B: (ue, we) => {
                                    for (var Ce in R)
                                      if (!(Ce in we || R[Ce].optional))
                                        throw new TypeError(`Missing field: "${Ce}"`);
                                    var Ue = u();
                                    for (Ce in R) R[Ce].write(Ue, we[Ce]);
                                    return ue !== null && ue.push(p, Ue), Ue;
                                  },
                                  J: Pt,
                                  H: p,
                                },
                              ];
                            });
                          },
                          _embind_register_bigint: () => {},
                          _embind_register_bool: (n, o, u, p) => {
                            (o = Ke(o)),
                              I(n, {
                                name: o,
                                s: function (E) {
                                  return !!E;
                                },
                                B: function (E, x) {
                                  return x ? u : p;
                                },
                                J: function (E) {
                                  return this.s(A[E]);
                                },
                                H: null,
                              });
                          },
                          _embind_register_class: (n, o, u, p, E, x, F, R, N, q, ue, we, Ce) => {
                            (ue = Ke(ue)),
                              (x = Ae(E, x)),
                              (R &&= Ae(F, R)),
                              (q &&= Ae(N, q)),
                              (Ce = Ae(we, Ce));
                            var Ue = Me(ue);
                            he(Ue, function () {
                              Qe(`Cannot construct ${ue} due to unbound types`, [p]);
                            }),
                              l([n, o, u], p ? [p] : [], (w) => {
                                if (((w = w[0]), p))
                                  var e = w.o,
                                    r = e.M;
                                else r = z.prototype;
                                w = lt(ue, function (...a) {
                                  if (Object.getPrototypeOf(this) !== d)
                                    throw new de(`Use 'new' to construct ${ue}`);
                                  if (g.U === void 0) throw new de(`${ue} has no accessible constructor`);
                                  var t = g.U[a.length];
                                  if (t === void 0)
                                    throw new de(
                                      `Tried to invoke ctor of ${ue} with invalid number of parameters (${a.length}) - expected (${Object.keys(g.U).toString()}) parameters instead!`,
                                    );
                                  return t.apply(this, a);
                                });
                                var d = Object.create(r, { constructor: { value: w } });
                                w.prototype = d;
                                var g = new Oe(ue, w, d, Ce, e, x, R, q);
                                if (g.C) {
                                  var b;
                                  (b = g.C).ha ?? (b.ha = []), g.C.ha.push(g);
                                }
                                return (
                                  (e = new wt(ue, g, !0, !1, !1)),
                                  (b = new wt(ue + "*", g, !1, !1, !1)),
                                  (r = new wt(ue + " const*", g, !1, !0, !1)),
                                  (ce[n] = { pointerType: b, qb: r }),
                                  Et(Ue, w),
                                  [e, b, r]
                                );
                              });
                          },
                          _embind_register_class_class_function: (n, o, u, p, E, x, F) => {
                            var R = nr(u, p);
                            (o = Ke(o)),
                              (o = cr(o)),
                              (x = Ae(E, x)),
                              l([], [n], (N) => {
                                function q() {
                                  Qe(`Cannot call ${ue} due to unbound types`, R);
                                }
                                N = N[0];
                                var ue = `${N.name}.${o}`;
                                o.startsWith("@@") && (o = Symbol[o.substring(2)]);
                                var we = N.o.constructor;
                                return (
                                  we[o] === void 0
                                    ? ((q.R = u - 1), (we[o] = q))
                                    : (fe(we, o, ue), (we[o].A[u - 1] = q)),
                                  l([], R, (Ce) => {
                                    if (
                                      ((Ce = Ot(ue, [Ce[0], null].concat(Ce.slice(1)), null, x, F)),
                                      we[o].A === void 0
                                        ? ((Ce.R = u - 1), (we[o] = Ce))
                                        : (we[o].A[u - 1] = Ce),
                                      N.o.ha)
                                    )
                                      for (const Ue of N.o.ha)
                                        Ue.constructor.hasOwnProperty(o) || (Ue.constructor[o] = Ce);
                                    return [];
                                  }),
                                  []
                                );
                              });
                          },
                          _embind_register_class_class_property: (n, o, u, p, E, x, F, R) => {
                            (o = Ke(o)),
                              (x = Ae(E, x)),
                              l([], [n], (N) => {
                                N = N[0];
                                var q = `${N.name}.${o}`,
                                  ue = {
                                    get() {
                                      Qe(`Cannot access ${q} due to unbound types`, [u]);
                                    },
                                    enumerable: !0,
                                    configurable: !0,
                                  };
                                return (
                                  (ue.set = R
                                    ? () => {
                                        Qe(`Cannot access ${q} due to unbound types`, [u]);
                                      }
                                    : () => {
                                        throw new de(`${q} is a read-only property`);
                                      }),
                                  Object.defineProperty(N.o.constructor, o, ue),
                                  l([], [u], (we) => {
                                    we = we[0];
                                    var Ce = {
                                      get() {
                                        return we.s(x(p));
                                      },
                                      enumerable: !0,
                                    };
                                    return (
                                      R &&
                                        ((R = Ae(F, R)),
                                        (Ce.set = (Ue) => {
                                          var w = [];
                                          R(p, we.B(w, Ue)), Le(w);
                                        })),
                                      Object.defineProperty(N.o.constructor, o, Ce),
                                      []
                                    );
                                  }),
                                  []
                                );
                              });
                          },
                          _embind_register_class_constructor: (n, o, u, p, E, x) => {
                            var F = nr(o, u);
                            (E = Ae(p, E)),
                              l([], [n], (R) => {
                                R = R[0];
                                var N = `constructor ${R.name}`;
                                if ((R.o.U === void 0 && (R.o.U = []), R.o.U[o - 1] !== void 0))
                                  throw new de(
                                    `Cannot register multiple constructors with identical number of parameters (${o - 1}) for class '${R.name}'! Overload resolution is currently only performed using the parameter count, not actual type info!`,
                                  );
                                return (
                                  (R.o.U[o - 1] = () => {
                                    Qe(`Cannot construct ${R.name} due to unbound types`, F);
                                  }),
                                  l(
                                    [],
                                    F,
                                    (q) => (q.splice(1, 0, null), (R.o.U[o - 1] = Ot(N, q, null, E, x)), []),
                                  ),
                                  []
                                );
                              });
                          },
                          _embind_register_class_function: (n, o, u, p, E, x, F, R) => {
                            var N = nr(u, p);
                            (o = Ke(o)),
                              (o = cr(o)),
                              (x = Ae(E, x)),
                              l([], [n], (q) => {
                                function ue() {
                                  Qe(`Cannot call ${we} due to unbound types`, N);
                                }
                                q = q[0];
                                var we = `${q.name}.${o}`;
                                o.startsWith("@@") && (o = Symbol[o.substring(2)]), R && q.o.Ua.push(o);
                                var Ce = q.o.M,
                                  Ue = Ce[o];
                                return (
                                  Ue === void 0 ||
                                  (Ue.A === void 0 && Ue.className !== q.name && Ue.R === u - 2)
                                    ? ((ue.R = u - 2), (ue.className = q.name), (Ce[o] = ue))
                                    : (fe(Ce, o, we), (Ce[o].A[u - 2] = ue)),
                                  l(
                                    [],
                                    N,
                                    (w) => (
                                      (w = Ot(we, w, q, x, F)),
                                      Ce[o].A === void 0
                                        ? ((w.R = u - 2), (Ce[o] = w))
                                        : (Ce[o].A[u - 2] = w),
                                      []
                                    ),
                                  ),
                                  []
                                );
                              });
                          },
                          _embind_register_class_property: (n, o, u, p, E, x, F, R, N, q) => {
                            (o = Ke(o)),
                              (E = Ae(p, E)),
                              l([], [n], (ue) => {
                                ue = ue[0];
                                var we = `${ue.name}.${o}`,
                                  Ce = {
                                    get() {
                                      Qe(`Cannot access ${we} due to unbound types`, [u, F]);
                                    },
                                    enumerable: !0,
                                    configurable: !0,
                                  };
                                return (
                                  (Ce.set = N
                                    ? () => Qe(`Cannot access ${we} due to unbound types`, [u, F])
                                    : () => {
                                        throw new de(we + " is a read-only property");
                                      }),
                                  Object.defineProperty(ue.o.M, o, Ce),
                                  l([], N ? [u, F] : [u], (Ue) => {
                                    var w = Ue[0],
                                      e = {
                                        get() {
                                          var d = Ar(this, ue, we + " getter");
                                          return w.s(E(x, d));
                                        },
                                        enumerable: !0,
                                      };
                                    if (N) {
                                      N = Ae(R, N);
                                      var r = Ue[1];
                                      e.set = function (d) {
                                        var g = Ar(this, ue, we + " setter"),
                                          b = [];
                                        N(q, g, r.B(b, d)), Le(b);
                                      };
                                    }
                                    return Object.defineProperty(ue.o.M, o, e), [];
                                  }),
                                  []
                                );
                              });
                          },
                          _embind_register_emval: (n) => I(n, Zr),
                          _embind_register_enum: (n, o, u, p, E) => {
                            switch (
                              ((o = Ke(o)), (E = E === 0 ? "object" : E === 1 ? "number" : "string"), E)
                            ) {
                              case "object":
                                let F = function () {};
                                (F.values = {}),
                                  I(n, {
                                    name: o,
                                    constructor: F,
                                    valueType: E,
                                    s: function (R) {
                                      return this.constructor.values[R];
                                    },
                                    B: (R, N) => N.value,
                                    J: fr(o, u, p),
                                    H: null,
                                  }),
                                  he(o, F);
                                break;
                              case "number":
                                var x = {};
                                I(n, {
                                  name: o,
                                  Ga: x,
                                  valueType: E,
                                  s: (R) => R,
                                  B: (R, N) => N,
                                  J: fr(o, u, p),
                                  H: null,
                                }),
                                  he(o, x),
                                  delete k[o].R;
                                break;
                              case "string":
                                (x = {}),
                                  I(n, {
                                    name: o,
                                    bb: {},
                                    Ya: {},
                                    Ga: x,
                                    valueType: E,
                                    s: function (R) {
                                      return this.Ya[R];
                                    },
                                    B: function (R, N) {
                                      return this.bb[N];
                                    },
                                    J: fr(o, u, p),
                                    H: null,
                                  }),
                                  he(o, x),
                                  delete k[o].R;
                            }
                          },
                          _embind_register_enum_value: (n, o, u) => {
                            var p = It(n, "enum");
                            switch (((o = Ke(o)), p.valueType)) {
                              case "object":
                                (n = p.constructor),
                                  (p = Object.create(p.constructor.prototype, {
                                    value: { value: u },
                                    constructor: { value: lt(`${p.name}_${o}`, function () {}) },
                                  })),
                                  (n.values[u] = p),
                                  (n[o] = p);
                                break;
                              case "number":
                                p.Ga[o] = u;
                                break;
                              case "string":
                                (p.bb[o] = u), (p.Ya[u] = o), (p.Ga[o] = o);
                            }
                          },
                          _embind_register_float: (n, o, u) => {
                            (o = Ke(o)), I(n, { name: o, s: (p) => p, B: (p, E) => E, J: qr(o, u), H: null });
                          },
                          _embind_register_function: (n, o, u, p, E, x) => {
                            var F = nr(o, u);
                            (n = Ke(n)),
                              (n = cr(n)),
                              (E = Ae(p, E)),
                              he(
                                n,
                                function () {
                                  Qe(`Cannot call ${n} due to unbound types`, F);
                                },
                                o - 1,
                              ),
                              l(
                                [],
                                F,
                                (R) => (Et(n, Ot(n, [R[0], null].concat(R.slice(1)), null, E, x), o - 1), []),
                              );
                          },
                          _embind_register_integer: (n, o, u, p, E) => {
                            o = Ke(o);
                            let x = (R) => R;
                            if (p === 0) {
                              var F = 32 - 8 * u;
                              (x = (R) => (R << F) >>> F), (E = x(E));
                            }
                            I(n, { name: o, s: x, B: (R, N) => N, J: en(o, u, p !== 0), H: null });
                          },
                          _embind_register_memory_view: (n, o, u) => {
                            function p(x) {
                              return new E(ae.buffer, H[(x + 4) >> 2], H[x >> 2]);
                            }
                            var E = [
                              Int8Array,
                              Uint8Array,
                              Int16Array,
                              Uint16Array,
                              Int32Array,
                              Uint32Array,
                              Float32Array,
                              Float64Array,
                            ][o];
                            (u = Ke(u)), I(n, { name: u, s: p, J: p }, { Jb: !0 });
                          },
                          _embind_register_std_string: (n, o) => {
                            (o = Ke(o)),
                              I(n, {
                                name: o,
                                s(u) {
                                  var p = (p = u + 4) ? Je(A, p, H[u >> 2], !0) : "";
                                  return Wt(u), p;
                                },
                                B(u, p) {
                                  p instanceof ArrayBuffer && (p = new Uint8Array(p));
                                  var E = typeof p == "string";
                                  if (!(E || (ArrayBuffer.isView(p) && p.BYTES_PER_ELEMENT == 1)))
                                    throw new de("Cannot pass non-string to std::string");
                                  var x = E ? dr(p) : p.length,
                                    F = qt(4 + x + 1),
                                    R = F + 4;
                                  return (
                                    (H[F >> 2] = x),
                                    E ? Dt(p, R, x + 1) : A.set(p, R),
                                    u !== null && u.push(Wt, F),
                                    F
                                  );
                                },
                                J: Pt,
                                H(u) {
                                  Wt(u);
                                },
                              });
                          },
                          _embind_register_std_wstring: (n, o, u) => {
                            if (((u = Ke(u)), o === 2))
                              var p = tn,
                                E = rn,
                                x = nn;
                            else (p = on), (E = an), (x = sn);
                            I(n, {
                              name: u,
                              s: (F) => {
                                var R = p(F + 4, H[F >> 2] * o, !0);
                                return Wt(F), R;
                              },
                              B: (F, R) => {
                                if (typeof R != "string")
                                  throw new de(`Cannot pass non-string to C++ string type ${u}`);
                                var N = x(R),
                                  q = qt(4 + N + o);
                                return (
                                  (H[q >> 2] = N / o), E(R, q + 4, N + o), F !== null && F.push(Wt, q), q
                                );
                              },
                              J: Pt,
                              H(F) {
                                Wt(F);
                              },
                            });
                          },
                          _embind_register_value_object: (n, o, u, p, E, x) => {
                            Xe[n] = { name: Ke(o), Ia: Ae(u, p), N: Ae(E, x), Pa: [] };
                          },
                          _embind_register_value_object_field: (n, o, u, p, E, x, F, R, N, q) => {
                            Xe[n].Pa.push({
                              yb: Ke(o),
                              Fb: u,
                              Db: Ae(p, E),
                              Eb: x,
                              Gh: F,
                              Fh: Ae(R, N),
                              Hh: q,
                            });
                          },
                          _embind_register_void: (n, o) => {
                            (o = Ke(o)), I(n, { Lb: !0, name: o, s: () => {}, B: () => {} });
                          },
                          _emscripten_throw_longjmp: () => {
                            throw 1 / 0;
                          },
                          _emval_create_invoker: (n, o, u) => {
                            var [p, ...E] = un(n, o),
                              x = p.B.bind(p),
                              F = E.map((N) => N.J.bind(N));
                            n--;
                            var R = Array(n);
                            return (
                              (o = `methodCaller<(${E.map((N) => N.name)}) => ${p.name}>`),
                              ln(
                                lt(o, (N, q, ue, we) => {
                                  for (var Ce = 0, Ue = 0; Ue < n; ++Ue) (R[Ue] = F[Ue](we + Ce)), (Ce += 8);
                                  switch (u) {
                                    case 0:
                                      var w = it(N).apply(null, R);
                                      break;
                                    case 2:
                                      w = Reflect.construct(it(N), R);
                                      break;
                                    case 3:
                                      w = R[0];
                                      break;
                                    case 1:
                                      w = it(N)[xr(q)](...R);
                                  }
                                  return (N = []), (w = x(N, w)), N.length && (H[ue >> 2] = ot(N)), w;
                                }),
                              )
                            );
                          },
                          _emval_decref: hr,
                          _emval_get_property: (n, o) => ((n = it(n)), (o = it(o)), ot(n[o])),
                          _emval_incref: (n) => {
                            9 < n && (Ye[n + 1] += 1);
                          },
                          _emval_invoke: (n, o, u, p, E) => pr[n](o, u, p, E),
                          _emval_new_array: () => ot([]),
                          _emval_new_cstring: (n) => ot(xr(n)),
                          _emval_new_object: () => ot({}),
                          _emval_run_destructors: (n) => {
                            var o = it(n);
                            Le(o), hr(n);
                          },
                          _emval_set_property: (n, o, u) => {
                            (n = it(n)), (o = it(o)), (u = it(u)), (n[o] = u);
                          },
                          _gmtime_js: function (n, o, u) {
                            (n = new Date(
                              1e3 * ((o + 2097152) >>> 0 < 4194305 - !!n ? (n >>> 0) + 4294967296 * o : NaN),
                            )),
                              (O[u >> 2] = n.getUTCSeconds()),
                              (O[(u + 4) >> 2] = n.getUTCMinutes()),
                              (O[(u + 8) >> 2] = n.getUTCHours()),
                              (O[(u + 12) >> 2] = n.getUTCDate()),
                              (O[(u + 16) >> 2] = n.getUTCMonth()),
                              (O[(u + 20) >> 2] = n.getUTCFullYear() - 1900),
                              (O[(u + 24) >> 2] = n.getUTCDay()),
                              (O[(u + 28) >> 2] =
                                ((n.getTime() - Date.UTC(n.getUTCFullYear(), 0, 1, 0, 0, 0, 0)) / 864e5) | 0);
                          },
                          _localtime_js: function (n, o, u) {
                            (n = new Date(
                              1e3 * ((o + 2097152) >>> 0 < 4194305 - !!n ? (n >>> 0) + 4294967296 * o : NaN),
                            )),
                              (O[u >> 2] = n.getSeconds()),
                              (O[(u + 4) >> 2] = n.getMinutes()),
                              (O[(u + 8) >> 2] = n.getHours()),
                              (O[(u + 12) >> 2] = n.getDate()),
                              (O[(u + 16) >> 2] = n.getMonth()),
                              (O[(u + 20) >> 2] = n.getFullYear() - 1900),
                              (O[(u + 24) >> 2] = n.getDay()),
                              (o = n.getFullYear()),
                              (O[(u + 28) >> 2] =
                                ((o % 4 !== 0 || (o % 100 === 0 && o % 400 !== 0) ? fn : hn)[n.getMonth()] +
                                  n.getDate() -
                                  1) |
                                0),
                              (O[(u + 36) >> 2] = -(60 * n.getTimezoneOffset())),
                              (o = new Date(n.getFullYear(), 6, 1).getTimezoneOffset());
                            var p = new Date(n.getFullYear(), 0, 1).getTimezoneOffset();
                            O[(u + 32) >> 2] = (o != p && n.getTimezoneOffset() == Math.min(p, o)) | 0;
                          },
                          _timegm_js: function (n) {
                            var o = new Date(
                              Date.UTC(
                                O[(n + 20) >> 2] + 1900,
                                O[(n + 16) >> 2],
                                O[(n + 12) >> 2],
                                O[(n + 8) >> 2],
                                O[(n + 4) >> 2],
                                O[n >> 2],
                                0,
                              ),
                            );
                            return (
                              (O[(n + 24) >> 2] = o.getUTCDay()),
                              (O[(n + 28) >> 2] =
                                ((o.getTime() - Date.UTC(o.getUTCFullYear(), 0, 1, 0, 0, 0, 0)) / 864e5) | 0),
                              (n = o.getTime() / 1e3),
                              Xr(
                                ((Fe = n),
                                1 <= +Math.abs(Fe)
                                  ? 0 < Fe
                                    ? +Math.floor(Fe / 4294967296) >>> 0
                                    : ~~+Math.ceil((Fe - +(~~Fe >>> 0)) / 4294967296) >>> 0
                                  : 0),
                              ),
                              n >>> 0
                            );
                          },
                          _tzset_js: (n, o, u, p) => {
                            var E = new Date().getFullYear(),
                              x = new Date(E, 0, 1).getTimezoneOffset();
                            (E = new Date(E, 6, 1).getTimezoneOffset()),
                              (H[n >> 2] = 60 * Math.max(x, E)),
                              (O[o >> 2] = +(x != E)),
                              (o = (F) => {
                                var R = Math.abs(F);
                                return `UTC${0 <= F ? "-" : "+"}${String(Math.floor(R / 60)).padStart(2, "0")}${String(R % 60).padStart(2, "0")}`;
                              }),
                              (n = o(x)),
                              (o = o(E)),
                              E < x ? (Dt(n, u, 17), Dt(o, p, 17)) : (Dt(n, p, 17), Dt(o, u, 17));
                          },
                          beginPixelLocalStorageWEBGL: function (n, o, u) {
                            (n = dt[n].F.ua) &&
                              n.beginPixelLocalStorageWEBGL(new Uint32Array(Nt.buffer, 4 * u, o));
                          },
                          clock_time_get: function (n, o, u, p) {
                            return 0 <= n && 3 >= n
                              ? ((n = Math.round(1e6 * (n === 0 ? Date.now() : performance.now()))),
                                (Re = [
                                  n >>> 0,
                                  ((Fe = n),
                                  1 <= +Math.abs(Fe)
                                    ? 0 < Fe
                                      ? +Math.floor(Fe / 4294967296) >>> 0
                                      : ~~+Math.ceil((Fe - +(~~Fe >>> 0)) / 4294967296) >>> 0
                                    : 0),
                                ]),
                                (O[p >> 2] = Re[0]),
                                (O[(p + 4) >> 2] = Re[1]),
                                0)
                              : 28;
                          },
                          decode_image: function (n, o, u) {
                            var p = k.images;
                            p || ((p = new Map()), (k.images = p));
                            var E = new Image();
                            p.set(n, E),
                              (o = k.HEAP8.subarray(o, o + u)),
                              (u = new Uint8Array(u)),
                              u.set(o),
                              (E.src = URL.createObjectURL(new Blob([u], { type: "image/png" }))),
                              (E.onload = function () {
                                k._setWebImage(n, E.width, E.height);
                              });
                          },
                          delete_image: function (n) {
                            var o = k.images;
                            o && o.get(n) && o.delete(n);
                          },
                          emscripten_asm_const_int: (n, o, u) => {
                            vr.length = 0;
                            for (var p; (p = A[o++]); ) {
                              var E = p != 105;
                              (E &= p != 112),
                                (u += E && u % 8 ? 4 : 0),
                                vr.push(p == 112 ? H[u >> 2] : p == 105 ? O[u >> 2] : Z[u >> 3]),
                                (u += E ? 8 : 4);
                            }
                            return gn[n](...vr);
                          },
                          emscripten_date_now: () => Date.now(),
                          emscripten_get_now: () => performance.now(),
                          emscripten_resize_heap: (n) => {
                            var o = A.length;
                            if (((n >>>= 0), 2147483648 < n)) return !1;
                            for (var u = 1; 4 >= u; u *= 2) {
                              var p = o * (1 + 0.2 / u);
                              p = Math.min(p, n + 100663296);
                              e: {
                                p =
                                  ((Math.min(2147483648, 65536 * Math.ceil(Math.max(n, p) / 65536)) -
                                    Nt.buffer.byteLength +
                                    65535) /
                                    65536) |
                                  0;
                                try {
                                  Nt.grow(p), Ee();
                                  var E = 1;
                                  break e;
                                } catch {}
                                E = void 0;
                              }
                              if (E) return !0;
                            }
                            return !1;
                          },
                          emscripten_webgl_enable_extension: (n, o) => (
                            (n = dt[n]),
                            (o = o ? Je(A, o) : ""),
                            o.startsWith("GL_") && (o = o.slice(3)),
                            o == "WEBGL_draw_instanced_base_vertex_base_instance" && Fr(W),
                            o == "WEBGL_multi_draw_instanced_base_vertex_base_instance" && kr(W),
                            o == "WEBGL_multi_draw" && (W.Mb = W.getExtension("WEBGL_multi_draw")),
                            o == "EXT_polygon_offset_clamp" &&
                              (W.xb = W.getExtension("EXT_polygon_offset_clamp")),
                            o == "EXT_clip_control" && (W.wb = W.getExtension("EXT_clip_control")),
                            o == "WEBGL_polygon_mode" && (W.Kh = W.getExtension("WEBGL_polygon_mode")),
                            !!n.F.getExtension(o)
                          ),
                          emscripten_webgl_get_current_context: () => (Bt ? Bt.handle : 0),
                          emscripten_webgl_make_context_current: (n) => (Zt(n) ? 0 : -5),
                          enable_WEBGL_provoking_vertex: function (n) {
                            return (n = dt[n].F), (n.Va = n.getExtension("WEBGL_provoking_vertex")), !!n.Va;
                          },
                          enable_WEBGL_shader_pixel_local_storage_coherent: function (n) {
                            n = dt[n].F;
                            const o = n.getExtension("WEBGL_shader_pixel_local_storage");
                            if (o && o.isCoherent()) {
                              if (o.framebufferTexturePixelLocalStorageWEBGL.length == 5)
                                return (n.ua = o), !0;
                              console.warn(
                                "WEBGL_shader_pixel_local_storage is advertised, but a deprecated version has been detected. Disabling.",
                              );
                            }
                            return !1;
                          },
                          endPixelLocalStorageWEBGL: function (n, o, u) {
                            (n = dt[n].F.ua) &&
                              n.endPixelLocalStorageWEBGL(new Uint32Array(Nt.buffer, 4 * u, o));
                          },
                          environ_get: (n, o) => {
                            var u = 0,
                              p = 0,
                              E;
                            for (E of Tr()) {
                              var x = o + u;
                              (H[(n + p) >> 2] = x), (u += Dt(E, x, 1 / 0) + 1), (p += 4);
                            }
                            return 0;
                          },
                          environ_sizes_get: (n, o) => {
                            var u = Tr();
                            (H[n >> 2] = u.length), (n = 0);
                            for (var p of u) n += dr(p) + 1;
                            return (H[o >> 2] = n), 0;
                          },
                          fd_close: () => 52,
                          fd_read: () => 52,
                          fd_seek: function () {
                            return 70;
                          },
                          fd_write: (n, o, u, p) => {
                            for (var E = 0, x = 0; x < u; x++) {
                              var F = H[o >> 2],
                                R = H[(o + 4) >> 2];
                              o += 8;
                              for (var N = 0; N < R; N++) {
                                var q = n,
                                  ue = A[F + N],
                                  we = pn[q];
                                ue === 0 || ue === 10
                                  ? ((q === 1 ? te : Y)(Je(we)), (we.length = 0))
                                  : we.push(ue);
                              }
                              E += R;
                            }
                            return (H[p >> 2] = E), 0;
                          },
                          framebufferPixelLocalClearValuefvWEBGL: function (n, o, u, p, E, x) {
                            (n = dt[n].F.ua) && n.framebufferPixelLocalClearValuefvWEBGL(o, [u, p, E, x]);
                          },
                          framebufferTexturePixelLocalStorageWEBGL: function (n, o, u, p, E, x) {
                            (n = dt[n].F.ua) && n.framebufferTexturePixelLocalStorageWEBGL(o, Vt[u], p, E, x);
                          },
                          glActiveTexture: (n) => W.activeTexture(n),
                          glAttachShader: (n, o) => {
                            W.attachShader(At[n], Lt[o]);
                          },
                          glBindAttribLocation: (n, o, u) => {
                            W.bindAttribLocation(At[n], o, u ? Je(A, u) : "");
                          },
                          glBindBuffer: (n, o) => {
                            n == 35051 ? (W.Da = o) : n == 35052 && (W.Y = o), W.bindBuffer(n, zt[o]);
                          },
                          glBindBufferRange: (n, o, u, p, E) => {
                            W.bindBufferRange(n, o, zt[u], p, E);
                          },
                          glBindFramebuffer: (n, o) => {
                            W.bindFramebuffer(n, ir[o]);
                          },
                          glBindRenderbuffer: (n, o) => {
                            W.bindRenderbuffer(n, $t[o]);
                          },
                          glBindSampler: (n, o) => {
                            W.bindSampler(n, Kt[o]);
                          },
                          glBindTexture: (n, o) => {
                            W.bindTexture(n, Vt[o]);
                          },
                          glBindVertexArray: (n) => {
                            W.bindVertexArray(or[n]);
                          },
                          glBlendColor: (n, o, u, p) => W.blendColor(n, o, u, p),
                          glBlendEquation: (n) => W.blendEquation(n),
                          glBlendEquationSeparate: (n, o) => W.blendEquationSeparate(n, o),
                          glBlendFunc: (n, o) => W.blendFunc(n, o),
                          glBlendFuncSeparate: (n, o, u, p) => W.blendFuncSeparate(n, o, u, p),
                          glBlitFramebuffer: (n, o, u, p, E, x, F, R, N, q) =>
                            W.blitFramebuffer(n, o, u, p, E, x, F, R, N, q),
                          glBufferData: (n, o, u, p) => {
                            u && o ? W.bufferData(n, A, p, u, o) : W.bufferData(n, o, p);
                          },
                          glBufferSubData: (n, o, u, p) => {
                            u && W.bufferSubData(n, o, A, p, u);
                          },
                          glCheckFramebufferStatus: (n) => W.checkFramebufferStatus(n),
                          glClear: (n) => W.clear(n),
                          glClearBufferfi: (n, o, u, p) => W.clearBufferfi(n, o, u, p),
                          glClearBufferfv: (n, o, u) => {
                            W.clearBufferfv(n, o, ie, u >> 2);
                          },
                          glClearBufferiv: (n, o, u) => {
                            W.clearBufferiv(n, o, O, u >> 2);
                          },
                          glClearBufferuiv: (n, o, u) => {
                            W.clearBufferuiv(n, o, H, u >> 2);
                          },
                          glClearColor: (n, o, u, p) => W.clearColor(n, o, u, p),
                          glClearDepthf: (n) => W.clearDepth(n),
                          glClearStencil: (n) => W.clearStencil(n),
                          glClientWaitSync: (n, o, u, p) =>
                            W.clientWaitSync(Jt[n], o, (u >>> 0) + 4294967296 * p),
                          glColorMask: (n, o, u, p) => {
                            W.colorMask(!!n, !!o, !!u, !!p);
                          },
                          glCompileShader: (n) => {
                            W.compileShader(Lt[n]);
                          },
                          glCompressedTexSubImage2D: (n, o, u, p, E, x, F, R, N) => {
                            W.Y || !R
                              ? W.compressedTexSubImage2D(n, o, u, p, E, x, F, R, N)
                              : W.compressedTexSubImage2D(n, o, u, p, E, x, F, A, N, R);
                          },
                          glCompressedTexSubImage3D: (n, o, u, p, E, x, F, R, N, q, ue) => {
                            W.Y
                              ? W.compressedTexSubImage3D(n, o, u, p, E, x, F, R, N, q, ue)
                              : W.compressedTexSubImage3D(n, o, u, p, E, x, F, R, N, A, ue, q);
                          },
                          glCreateProgram: () => {
                            var n = Qt(At),
                              o = W.createProgram();
                            return (o.name = n), (o.ta = o.ra = o.sa = 0), (o.Ja = 1), (At[n] = o), n;
                          },
                          glCreateShader: (n) => {
                            var o = Qt(Lt);
                            return (Lt[o] = W.createShader(n)), o;
                          },
                          glCullFace: (n) => W.cullFace(n),
                          glDeleteBuffers: (n, o) => {
                            for (var u = 0; u < n; u++) {
                              var p = O[(o + 4 * u) >> 2],
                                E = zt[p];
                              E &&
                                (W.deleteBuffer(E),
                                (E.name = 0),
                                (zt[p] = null),
                                p == W.Da && (W.Da = 0),
                                p == W.Y && (W.Y = 0));
                            }
                          },
                          glDeleteFramebuffers: (n, o) => {
                            for (var u = 0; u < n; ++u) {
                              var p = O[(o + 4 * u) >> 2],
                                E = ir[p];
                              E && (W.deleteFramebuffer(E), (E.name = 0), (ir[p] = null));
                            }
                          },
                          glDeleteProgram: (n) => {
                            if (n) {
                              var o = At[n];
                              o ? (W.deleteProgram(o), (o.name = 0), (At[n] = null)) : (qe ||= 1281);
                            }
                          },
                          glDeleteRenderbuffers: (n, o) => {
                            for (var u = 0; u < n; u++) {
                              var p = O[(o + 4 * u) >> 2],
                                E = $t[p];
                              E && (W.deleteRenderbuffer(E), (E.name = 0), ($t[p] = null));
                            }
                          },
                          glDeleteSamplers: (n, o) => {
                            for (var u = 0; u < n; u++) {
                              var p = O[(o + 4 * u) >> 2],
                                E = Kt[p];
                              E && (W.deleteSampler(E), (E.name = 0), (Kt[p] = null));
                            }
                          },
                          glDeleteShader: (n) => {
                            if (n) {
                              var o = Lt[n];
                              o ? (W.deleteShader(o), (Lt[n] = null)) : (qe ||= 1281);
                            }
                          },
                          glDeleteSync: (n) => {
                            if (n) {
                              var o = Jt[n];
                              o ? (W.deleteSync(o), (o.name = 0), (Jt[n] = null)) : (qe ||= 1281);
                            }
                          },
                          glDeleteTextures: (n, o) => {
                            for (var u = 0; u < n; u++) {
                              var p = O[(o + 4 * u) >> 2],
                                E = Vt[p];
                              E && (W.deleteTexture(E), (E.name = 0), (Vt[p] = null));
                            }
                          },
                          glDeleteVertexArrays: (n, o) => {
                            for (var u = 0; u < n; u++) {
                              var p = O[(o + 4 * u) >> 2];
                              W.deleteVertexArray(or[p]), (or[p] = null);
                            }
                          },
                          glDepthFunc: (n) => W.depthFunc(n),
                          glDepthMask: (n) => {
                            W.depthMask(!!n);
                          },
                          glDepthRangef: (n, o) => W.depthRange(n, o),
                          glDisable: (n) => W.disable(n),
                          glDisableVertexAttribArray: (n) => {
                            W.disableVertexAttribArray(n);
                          },
                          glDrawArrays: (n, o, u) => {
                            W.drawArrays(n, o, u);
                          },
                          glDrawArraysInstanced: (n, o, u, p) => {
                            W.drawArraysInstanced(n, o, u, p);
                          },
                          glDrawBuffers: (n, o) => {
                            for (var u = _r[n], p = 0; p < n; p++) u[p] = O[(o + 4 * p) >> 2];
                            W.drawBuffers(u);
                          },
                          glDrawElements: (n, o, u, p) => {
                            W.drawElements(n, o, u, p);
                          },
                          glDrawElementsInstanced: (n, o, u, p, E) => {
                            W.drawElementsInstanced(n, o, u, p, E);
                          },
                          glEnable: (n) => W.enable(n),
                          glEnableVertexAttribArray: (n) => {
                            W.enableVertexAttribArray(n);
                          },
                          glFenceSync: (n, o) =>
                            (n = W.fenceSync(n, o)) ? ((o = Qt(Jt)), (n.name = o), (Jt[o] = n), o) : 0,
                          glFlush: () => W.flush(),
                          glFramebufferRenderbuffer: (n, o, u, p) => {
                            W.framebufferRenderbuffer(n, o, u, $t[p]);
                          },
                          glFramebufferTexture2D: (n, o, u, p, E) => {
                            W.framebufferTexture2D(n, o, u, Vt[p], E);
                          },
                          glFramebufferTextureLayer: (n, o, u, p, E) => {
                            W.framebufferTextureLayer(n, o, Vt[u], p, E);
                          },
                          glFrontFace: (n) => W.frontFace(n),
                          glGenBuffers: (n, o) => {
                            Ht(n, o, "createBuffer", zt);
                          },
                          glGenFramebuffers: (n, o) => {
                            Ht(n, o, "createFramebuffer", ir);
                          },
                          glGenRenderbuffers: (n, o) => {
                            Ht(n, o, "createRenderbuffer", $t);
                          },
                          glGenSamplers: (n, o) => {
                            Ht(n, o, "createSampler", Kt);
                          },
                          glGenTextures: (n, o) => {
                            Ht(n, o, "createTexture", Vt);
                          },
                          glGenVertexArrays: (n, o) => {
                            Ht(n, o, "createVertexArray", or);
                          },
                          glGenerateMipmap: (n) => W.generateMipmap(n),
                          glGetFloatv: (n, o) => Or(n, o, 2),
                          glGetFramebufferAttachmentParameteriv: (n, o, u, p) => {
                            (n = W.getFramebufferAttachmentParameter(n, o, u)),
                              (n instanceof WebGLRenderbuffer || n instanceof WebGLTexture) &&
                                (n = n.name | 0),
                              (O[p >> 2] = n);
                          },
                          glGetIntegerv: (n, o) => Or(n, o, 0),
                          glGetProgramInfoLog: (n, o, u, p) => {
                            (n = W.getProgramInfoLog(At[n])),
                              n === null && (n = "(unknown error)"),
                              (o = 0 < o && p ? Dt(n, p, o) : 0),
                              u && (O[u >> 2] = o);
                          },
                          glGetProgramiv: (n, o, u) => {
                            if (u)
                              if (n >= Rr) qe ||= 1281;
                              else if (((n = At[n]), o == 35716))
                                (n = W.getProgramInfoLog(n)),
                                  n === null && (n = "(unknown error)"),
                                  (O[u >> 2] = n.length + 1);
                              else if (o == 35719) {
                                if (!n.ta) {
                                  var p = W.getProgramParameter(n, 35718);
                                  for (o = 0; o < p; ++o)
                                    n.ta = Math.max(n.ta, W.getActiveUniform(n, o).name.length + 1);
                                }
                                O[u >> 2] = n.ta;
                              } else if (o == 35722) {
                                if (!n.ra)
                                  for (p = W.getProgramParameter(n, 35721), o = 0; o < p; ++o)
                                    n.ra = Math.max(n.ra, W.getActiveAttrib(n, o).name.length + 1);
                                O[u >> 2] = n.ra;
                              } else if (o == 35381) {
                                if (!n.sa)
                                  for (p = W.getProgramParameter(n, 35382), o = 0; o < p; ++o)
                                    n.sa = Math.max(n.sa, W.getActiveUniformBlockName(n, o).length + 1);
                                O[u >> 2] = n.sa;
                              } else O[u >> 2] = W.getProgramParameter(n, o);
                            else qe ||= 1281;
                          },
                          glGetShaderInfoLog: (n, o, u, p) => {
                            (n = W.getShaderInfoLog(Lt[n])),
                              n === null && (n = "(unknown error)"),
                              (o = 0 < o && p ? Dt(n, p, o) : 0),
                              u && (O[u >> 2] = o);
                          },
                          glGetShaderiv: (n, o, u) => {
                            u
                              ? o == 35716
                                ? ((n = W.getShaderInfoLog(Lt[n])),
                                  n === null && (n = "(unknown error)"),
                                  (O[u >> 2] = n ? n.length + 1 : 0))
                                : o == 35720
                                  ? ((n = W.getShaderSource(Lt[n])), (O[u >> 2] = n ? n.length + 1 : 0))
                                  : (O[u >> 2] = W.getShaderParameter(Lt[n], o))
                              : (qe ||= 1281);
                          },
                          glGetString: (n) => {
                            var o = Pr[n];
                            if (!o) {
                              switch (n) {
                                case 7939:
                                  o = Xt(wr().join(" "));
                                  break;
                                case 7936:
                                case 7937:
                                case 37445:
                                case 37446:
                                  (o = W.getParameter(n)) || (qe ||= 1280), (o = o ? Xt(o) : 0);
                                  break;
                                case 7938:
                                  o = Xt(`OpenGL ES 3.0 (${W.getParameter(7938)})`);
                                  break;
                                case 35724:
                                  o = W.getParameter(35724);
                                  var u = o.match(/^WebGL GLSL ES ([0-9]\.[0-9][0-9]?)(?:$| .*)/);
                                  u !== null &&
                                    (u[1].length == 3 && (u[1] += "0"),
                                    (o = `OpenGL ES GLSL ES ${u[1]} (${o})`)),
                                    (o = Xt(o));
                                  break;
                                default:
                                  qe ||= 1280;
                              }
                              Pr[n] = o;
                            }
                            return o;
                          },
                          glGetStringi: (n, o) => {
                            if (2 > Bt.version) return (qe ||= 1282), 0;
                            var u = jr[n];
                            return u
                              ? 0 > o || o >= u.length
                                ? ((qe ||= 1281), 0)
                                : u[o]
                              : n === 7939
                                ? ((u = wr().map(Xt)),
                                  (u = jr[n] = u),
                                  0 > o || o >= u.length ? ((qe ||= 1281), 0) : u[o])
                                : ((qe ||= 1280), 0);
                          },
                          glGetUniformBlockIndex: (n, o) => W.getUniformBlockIndex(At[n], o ? Je(A, o) : ""),
                          glGetUniformLocation: (n, o) => {
                            if (((o = o ? Je(A, o) : ""), (n = At[n]))) {
                              var u = n,
                                p = u.ea,
                                E = u.ab,
                                x;
                              if (!p) {
                                (u.ea = p = {}), (u.$a = {});
                                var F = W.getProgramParameter(u, 35718);
                                for (x = 0; x < F; ++x) {
                                  var R = W.getActiveUniform(u, x),
                                    N = R.name;
                                  R = R.size;
                                  var q = Dr(N);
                                  q = 0 < q ? N.slice(0, q) : N;
                                  var ue = u.Ja;
                                  for (u.Ja += R, E[q] = [R, ue], N = 0; N < R; ++N)
                                    (p[ue] = N), (u.$a[ue++] = q);
                                }
                              }
                              if (
                                ((u = n.ea),
                                (p = 0),
                                (E = o),
                                (x = Dr(o)),
                                0 < x && ((p = parseInt(o.slice(x + 1)) >>> 0), (E = o.slice(0, x))),
                                (E = n.ab[E]) &&
                                  p < E[0] &&
                                  ((p += E[1]), (u[p] = u[p] || W.getUniformLocation(n, o))))
                              )
                                return p;
                            } else qe ||= 1281;
                            return -1;
                          },
                          glInvalidateFramebuffer: (n, o, u) => {
                            for (var p = _r[o], E = 0; E < o; E++) p[E] = O[(u + 4 * E) >> 2];
                            W.invalidateFramebuffer(n, p);
                          },
                          glLinkProgram: (n) => {
                            (n = At[n]), W.linkProgram(n), (n.ea = 0), (n.ab = {});
                          },
                          glPixelStorei: (n, o) => {
                            n == 3317 ? (gr = o) : n == 3314 && (Lr = o), W.pixelStorei(n, o);
                          },
                          glPolygonOffset: (n, o) => W.polygonOffset(n, o),
                          glReadBuffer: (n) => W.readBuffer(n),
                          glReadPixels: (n, o, u, p, E, x, F) => {
                            if (W.Da) W.readPixels(n, o, u, p, E, x, F);
                            else {
                              var R = ar(x);
                              (F >>>= 31 - Math.clz32(R.BYTES_PER_ELEMENT)),
                                W.readPixels(n, o, u, p, E, x, R, F);
                            }
                          },
                          glRenderbufferStorage: (n, o, u, p) => W.renderbufferStorage(n, o, u, p),
                          glRenderbufferStorageMultisample: (n, o, u, p, E) =>
                            W.renderbufferStorageMultisample(n, o, u, p, E),
                          glSamplerParameterf: (n, o, u) => {
                            W.samplerParameterf(Kt[n], o, u);
                          },
                          glSamplerParameteri: (n, o, u) => {
                            W.samplerParameteri(Kt[n], o, u);
                          },
                          glScissor: (n, o, u, p) => W.scissor(n, o, u, p),
                          glShaderSource: (n, o, u, p) => {
                            for (var E = "", x = 0; x < o; ++x) {
                              var F = (F = H[(u + 4 * x) >> 2])
                                ? Je(A, F, p ? H[(p + 4 * x) >> 2] : void 0)
                                : "";
                              E += F;
                            }
                            W.shaderSource(Lt[n], E);
                          },
                          glStencilFunc: (n, o, u) => W.stencilFunc(n, o, u),
                          glStencilFuncSeparate: (n, o, u, p) => W.stencilFuncSeparate(n, o, u, p),
                          glStencilMask: (n) => W.stencilMask(n),
                          glStencilMaskSeparate: (n, o) => W.stencilMaskSeparate(n, o),
                          glStencilOp: (n, o, u) => W.stencilOp(n, o, u),
                          glStencilOpSeparate: (n, o, u, p) => W.stencilOpSeparate(n, o, u, p),
                          glTexParameteri: (n, o, u) => W.texParameteri(n, o, u),
                          glTexStorage2D: (n, o, u, p, E) => W.texStorage2D(n, o, u, p, E),
                          glTexStorage3D: (n, o, u, p, E, x) => W.texStorage3D(n, o, u, p, E, x),
                          glTexSubImage2D: (n, o, u, p, E, x, F, R, N) => {
                            if (W.Y) W.texSubImage2D(n, o, u, p, E, x, F, R, N);
                            else if (N) {
                              var q = ar(R);
                              W.texSubImage2D(
                                n,
                                o,
                                u,
                                p,
                                E,
                                x,
                                F,
                                R,
                                q,
                                N >>> (31 - Math.clz32(q.BYTES_PER_ELEMENT)),
                              );
                            } else {
                              if (N) {
                                q = ar(R);
                                var ue =
                                  x *
                                  (((Lr || E) *
                                    ({
                                      5: 3,
                                      6: 4,
                                      8: 2,
                                      29502: 3,
                                      29504: 4,
                                      26917: 2,
                                      26918: 2,
                                      29846: 3,
                                      29847: 4,
                                    }[F - 6402] || 1) *
                                    q.BYTES_PER_ELEMENT +
                                    gr -
                                    1) &
                                    -gr);
                                N = q.subarray(
                                  N >>> (31 - Math.clz32(q.BYTES_PER_ELEMENT)),
                                  (N + ue) >>> (31 - Math.clz32(q.BYTES_PER_ELEMENT)),
                                );
                              } else N = null;
                              W.texSubImage2D(n, o, u, p, E, x, F, R, N);
                            }
                          },
                          glTexSubImage3D: (n, o, u, p, E, x, F, R, N, q, ue) => {
                            if (W.Y) W.texSubImage3D(n, o, u, p, E, x, F, R, N, q, ue);
                            else if (ue) {
                              var we = ar(q);
                              W.texSubImage3D(
                                n,
                                o,
                                u,
                                p,
                                E,
                                x,
                                F,
                                R,
                                N,
                                q,
                                we,
                                ue >>> (31 - Math.clz32(we.BYTES_PER_ELEMENT)),
                              );
                            } else W.texSubImage3D(n, o, u, p, E, x, F, R, N, q, null);
                          },
                          glUniform1i: (n, o) => {
                            var u = W,
                              p = u.uniform1i,
                              E = W.sb;
                            if (E) {
                              var x = E.ea[n];
                              typeof x == "number" &&
                                (E.ea[n] = x = W.getUniformLocation(E, E.$a[n] + (0 < x ? `[${x}]` : ""))),
                                (n = x);
                            } else (qe ||= 1282), (n = void 0);
                            p.call(u, n, o);
                          },
                          glUniformBlockBinding: (n, o, u) => {
                            (n = At[n]), W.uniformBlockBinding(n, o, u);
                          },
                          glUseProgram: (n) => {
                            (n = At[n]), W.useProgram(n), (W.sb = n);
                          },
                          glVertexAttribDivisor: (n, o) => {
                            W.vertexAttribDivisor(n, o);
                          },
                          glVertexAttribIPointer: (n, o, u, p, E) => {
                            W.vertexAttribIPointer(n, o, u, p, E);
                          },
                          glVertexAttribPointer: (n, o, u, p, E, x) => {
                            W.vertexAttribPointer(n, o, u, !!p, E, x);
                          },
                          glViewport: (n, o, u, p) => W.viewport(n, o, u, p),
                          invoke_vii: mn,
                          isWindowsBrowser: function () {
                            return -1 < navigator.platform.indexOf("Win");
                          },
                          provokingVertexWEBGL: function (n, o) {
                            (n = dt[n].F.Va) && n.provokingVertexWEBGL(o);
                          },
                          riveWebCall: function (n, o, u, p, E, x, F) {
                            return k.riveScripting.call(n, o, u, p, E, x, F);
                          },
                          riveWebHasExport: function (n, o) {
                            return k.riveScripting.Gb(n, o);
                          },
                          riveWebMemoryPages: function (n) {
                            return k.riveScripting.Nb(n);
                          },
                          riveWebPreparing: function (n) {
                            return k.riveScripting.V(n);
                          },
                          riveWebRaise: function (n, o) {
                            k.riveScripting.Qb(n, o);
                          },
                          riveWebReadMemory: function (n, o, u, p) {
                            return k.riveScripting.read(n, o >>> 0, u, p >>> 0);
                          },
                          riveWebRegister: function (n, o, u) {
                            const p = k.riveScripting;
                            return p
                              ? (p.lb({
                                  exports: k,
                                  Hb: (E) => ((E = H[(Ur() >> 2) + E]), E === 0 ? void 0 : er.get(E)),
                                  Z: () => A,
                                  Qa: () => Z,
                                  da: je,
                                  va: vn,
                                  ca: Ze,
                                  Ha: qt,
                                  Ea: Wt,
                                  ga: (E) => (E ? Je(A, E) : ""),
                                  cb: (E, x, F) => Dt(E, x, F),
                                }),
                                p.register(n, A.subarray(o, o + u)),
                                1)
                              : 0;
                          },
                          riveWebRelease: function (n) {
                            k.riveScripting?.release(n);
                          },
                          riveWebStart: function (n) {
                            return (n = k.riveScripting.start(n)), n === null ? 0 : Xt(n);
                          },
                          riveWebStringLength: function (n, o) {
                            return k.riveScripting.Jh(n, o >>> 0);
                          },
                          riveWebWriteMemory: function (n, o, u, p) {
                            return k.riveScripting.write(n, o >>> 0, u, p >>> 0);
                          },
                          upload_image: function (n, o) {
                            var u = k.images;
                            u &&
                              (o = u.get(o)) &&
                              ((n = dt[n].F),
                              n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL, !0),
                              n.texImage2D(n.TEXTURE_2D, 0, n.RGBA, n.RGBA, n.UNSIGNED_BYTE, o),
                              n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL, !1));
                          },
                          wasm_start_image_decode: function (n, o, u) {
                            o = new Uint8Array(Nt.buffer, o, u);
                            var p = new Uint8Array(u);
                            p.set(o),
                              Promise.resolve()
                                .then(function () {
                                  return createImageBitmap(new Blob([p]));
                                })
                                .then(function (E) {
                                  var x = new OffscreenCanvas(E.width, E.height).getContext("2d");
                                  x.drawImage(E, 0, 0), (x = x.getImageData(0, 0, E.width, E.height));
                                  var F = x.data.length,
                                    R = Wr(F);
                                  R
                                    ? (new Uint8Array(Nt.buffer, R, F).set(x.data),
                                      Nr(n, E.width, E.height, R, F))
                                    : br(n);
                                })
                                .catch(function () {
                                  br(n);
                                });
                          },
                        };
                      function mn(n, o, u) {
                        var p = Cr();
                        try {
                          er.get(n)(o, u);
                        } catch (E) {
                          if ((Sr(p), E !== E + 0)) throw E;
                          Hr(1, 0);
                        }
                      }
                      var sr;
                      return (
                        (sr = await (async function () {
                          function n(u) {
                            return (
                              (u = sr = u.exports),
                              (Wt = u.free),
                              (qt = u.malloc),
                              (k._setWebImage = u.setWebImage),
                              (Br = u.__getTypeName),
                              (Wr = k._wasm_image_decode_alloc = u.wasm_image_decode_alloc),
                              (Nr = k._wasm_image_decode_complete = u.wasm_image_decode_complete),
                              (br = k._wasm_image_decode_error = u.wasm_image_decode_error),
                              (k._rive_web_vm_module_export = u.rive_web_vm_module_export),
                              (k._rive_web_vm_frame_boundary = u.rive_web_vm_frame_boundary),
                              (k._rive_web_vm_booting = u.rive_web_vm_booting),
                              (k._rive_web_vm_start_fuel = u.rive_web_vm_start_fuel),
                              (k._rive_web_vm_start_refusal = u.rive_web_vm_start_refusal),
                              (Ur = k._rive_web_calls = u.rive_web_calls),
                              (Vr = k._ma_device__on_notification_unlocked =
                                u.ma_device__on_notification_unlocked),
                              (k._ma_malloc_emscripten = u.ma_malloc_emscripten),
                              (k._ma_free_emscripten = u.ma_free_emscripten),
                              (Gr = k._ma_device_process_pcm_frames_capture__webaudio =
                                u.ma_device_process_pcm_frames_capture__webaudio),
                              (Kr = k._ma_device_process_pcm_frames_playback__webaudio =
                                u.ma_device_process_pcm_frames_playback__webaudio),
                              (Hr = u.setThrew),
                              (Xr = u._emscripten_tempret_set),
                              (Sr = u._emscripten_stack_restore),
                              (Yr = u._emscripten_stack_alloc),
                              (Cr = u.emscripten_stack_get_current),
                              (tt.vij = u.dynCall_vij),
                              (tt.iij = u.dynCall_iij),
                              (tt.ji = u.dynCall_ji),
                              (tt.iijii = u.dynCall_iijii),
                              (tt.iiiji = u.dynCall_iiiji),
                              (tt.iiji = u.dynCall_iiji),
                              (tt.jii = u.dynCall_jii),
                              (tt.vijj = u.dynCall_vijj),
                              (tt.jiji = u.dynCall_jiji),
                              (Nt = u.memory),
                              (er = u.__indirect_function_table),
                              Ee(),
                              sr
                            );
                          }
                          var o = { env: zr, wasi_snapshot_preview1: zr };
                          return k.instantiateWasm
                            ? new Promise((u) => {
                                k.instantiateWasm(o, (p, E) => {
                                  u(n(p));
                                });
                              })
                            : ((Ie ??= k.locateFile
                                ? k.locateFile("webgl2_advanced.wasm", _e)
                                : _e + "webgl2_advanced.wasm"),
                              n((await He(o)).instance));
                        })()),
                        (function () {
                          function n() {
                            if (((k.calledRun = !0), !ee)) {
                              if (
                                ((ye = !0),
                                sr.__wasm_call_ctors(),
                                xe?.(k),
                                k.onRuntimeInitialized?.(),
                                k.postRun)
                              )
                                for (
                                  typeof k.postRun == "function" && (k.postRun = [k.postRun]);
                                  k.postRun.length;

                                ) {
                                  var o = k.postRun.shift();
                                  De.push(o);
                                }
                              me(De);
                            }
                          }
                          if (k.preRun)
                            for (typeof k.preRun == "function" && (k.preRun = [k.preRun]); k.preRun.length; )
                              Ge();
                          me(Be),
                            k.setStatus
                              ? (k.setStatus("Running..."),
                                setTimeout(() => {
                                  setTimeout(() => k.setStatus(""), 1), n();
                                }, 1))
                              : n();
                        })(),
                        ye
                          ? ($ = k)
                          : ($ = new Promise((n, o) => {
                              (xe = n), (ke = o);
                            })),
                        $
                      );
                    };
                  })();
                  const P = oe;
                },
                (We) => {
                  We.exports = JSON.parse(
                    `{"name":"@rive-app/webgl2","version":"2.45.1","description":"Rive's webgl2 based web api.","main":"rive.js","homepage":"https://rive.app","repository":{"type":"git","url":"https://github.com/rive-app/rive-wasm/tree/master/js"},"keywords":["rive","animation"],"author":"Rive","contributors":["Luigi Rosso <luigi@rive.app> (https://rive.app)","Maxwell Talbot <max@rive.app> (https://rive.app)","Arthur Vivian <arthur@rive.app> (https://rive.app)","Umberto Sonnino <umberto@rive.app> (https://rive.app)","Matthew Sullivan <matt.j.sullivan@gmail.com> (mailto:matt.j.sullivan@gmail.com)","Chris Dalton <chris@rive.app> (https://rive.app)"],"license":"MIT","files":["rive.js","rive.wasm","rive_fallback.wasm","rive.js.map","rive.d.ts","rive_advanced.mjs.d.ts","runtimeLoader.d.ts","utils","semantics"],"typings":"rive.d.ts","dependencies":{},"browser":{"fs":false,"path":false}}`,
                  );
                },
                (We, ve, re) => {
                  re.r(ve),
                    re.d(ve, {
                      AccessibilityOverlay: () => P.AccessibilityOverlay,
                      CHECK_STATE_MASK: () => M.CHECK_STATE_MASK,
                      CHECK_STATE_OFFSET: () => M.CHECK_STATE_OFFSET,
                      SemanticActionType: () => M.SemanticActionType,
                      SemanticCheckState: () => M.SemanticCheckState,
                      SemanticMode: () => M.SemanticMode,
                      SemanticRole: () => M.SemanticRole,
                      SemanticState: () => M.SemanticState,
                      SemanticTrait: () => M.SemanticTrait,
                      SemanticTreeModel: () => oe.SemanticTreeModel,
                      checkStateOf: () => M.checkStateOf,
                      hasState: () => M.hasState,
                      hasTrait: () => M.hasTrait,
                      roleName: () => M.roleName,
                      stateNames: () => M.stateNames,
                      traitNames: () => M.traitNames,
                    });
                  var oe = re(7),
                    P = re(9),
                    M = re(8);
                },
                (We, ve, re) => {
                  re.r(ve), re.d(ve, { SemanticTreeModel: () => M });
                  var oe = re(8),
                    P = function (D, B, Q) {
                      for (var pe = 0, _e = B.length, K; pe < _e; pe++)
                        (K || !(pe in B)) &&
                          (K || (K = Array.prototype.slice.call(B, 0, pe)), (K[pe] = B[pe]));
                      return D.concat(K || Array.prototype.slice.call(B));
                    },
                    M = (function () {
                      function D() {
                        (this._nodesById = new Map()),
                          (this._roots = []),
                          (this._semanticVersion = 0),
                          (this._geometryVersion = 0),
                          (this._geometryChangedIds = new Set()),
                          (this._semanticChangedIds = new Set()),
                          (this._debug = !1);
                      }
                      return (
                        Object.defineProperty(D.prototype, "nodeCount", {
                          get: function () {
                            return this._nodesById.size;
                          },
                          enumerable: !1,
                          configurable: !0,
                        }),
                        Object.defineProperty(D.prototype, "semanticVersion", {
                          get: function () {
                            return this._semanticVersion;
                          },
                          enumerable: !1,
                          configurable: !0,
                        }),
                        Object.defineProperty(D.prototype, "geometryVersion", {
                          get: function () {
                            return this._geometryVersion;
                          },
                          enumerable: !1,
                          configurable: !0,
                        }),
                        Object.defineProperty(D.prototype, "geometryChangedIds", {
                          get: function () {
                            return this._geometryChangedIds;
                          },
                          enumerable: !1,
                          configurable: !0,
                        }),
                        Object.defineProperty(D.prototype, "semanticChangedIds", {
                          get: function () {
                            return this._semanticChangedIds;
                          },
                          enumerable: !1,
                          configurable: !0,
                        }),
                        Object.defineProperty(D.prototype, "roots", {
                          get: function () {
                            return this._roots;
                          },
                          enumerable: !1,
                          configurable: !0,
                        }),
                        (D.prototype.nodeById = function (B) {
                          return this._nodesById.get(B);
                        }),
                        (D.prototype.focusedNode = function () {
                          for (var B = this._nodesById.values(), Q = B.next(); !Q.done; Q = B.next())
                            if ((0, oe.hasState)(Q.value.stateFlags, oe.SemanticState.Focused))
                              return Q.value;
                        }),
                        (D.prototype.siblingIndexOf = function (B) {
                          var Q = this._nodesById.get(B);
                          if (!Q) return -1;
                          if (Q.parentId < 0) return this._roots.indexOf(B);
                          var pe = this._nodesById.get(Q.parentId);
                          return pe ? pe.children.indexOf(B) : -1;
                        }),
                        (D.prototype.detach = function (B) {
                          var Q = this._nodesById.get(B);
                          if (Q)
                            if (Q.parentId < 0) {
                              var pe = this._roots.indexOf(B);
                              pe !== -1 && this._roots.splice(pe, 1);
                            } else {
                              var _e = this._nodesById.get(Q.parentId);
                              if (_e) {
                                var pe = _e.children.indexOf(B);
                                pe !== -1 && _e.children.splice(pe, 1);
                              }
                            }
                        }),
                        (D.prototype.attach = function (B, Q, pe) {
                          var _e = this._nodesById.get(B);
                          if (_e)
                            if (Q < 0) {
                              _e.parentId = -1;
                              var K = se(pe, 0, this._roots.length);
                              this._roots.splice(K, 0, B);
                            } else {
                              var X = this._nodesById.get(Q);
                              if (!X) (_e.parentId = -1), this._roots.push(B);
                              else {
                                _e.parentId = Q;
                                var K = se(pe, 0, X.children.length);
                                X.children.splice(K, 0, B);
                              }
                            }
                        }),
                        (D.prototype.removeSubtree = function (B) {
                          var Q = this._nodesById.get(B);
                          if (Q) {
                            for (var pe = P([], Q.children), _e = 0, K = pe; _e < K.length; _e++) {
                              var X = K[_e];
                              this.removeSubtree(X);
                            }
                            this.detach(B), this._nodesById.delete(B);
                          }
                        }),
                        (D.prototype.applyDiff = function (B) {
                          var Q,
                            pe,
                            _e = this;
                          this._geometryChangedIds.clear(), this._semanticChangedIds.clear();
                          for (
                            var K = !1,
                              X = !1,
                              te = function () {
                                K = !0;
                              },
                              Y = function (je) {
                                (K = !0), _e._semanticChangedIds.add(je);
                              },
                              be = function (je) {
                                (X = !0), _e._geometryChangedIds.add(je);
                              },
                              ee = 0,
                              ze = B.removed;
                            ee < ze.length;
                            ee++
                          ) {
                            var xe = ze[ee];
                            this._nodesById.has(xe) && (this.removeSubtree(xe), te());
                          }
                          for (var ke = 0, ae = B.added; ke < ae.length; ke++) {
                            var A = ae[ke],
                              j = this._nodesById.get(A.id);
                            j
                              ? (le(j, A) && (ne(j, A), Y(A.id)), J(j, A) && (U(j, A), be(A.id)))
                              : (this._nodesById.set(A.id, k(A)), Y(A.id), be(A.id)),
                              this.detach(A.id),
                              this.attach(A.id, A.parentId, A.siblingIndex);
                          }
                          for (var V = 0, O = B.moved; V < O.length; V++) {
                            var A = O[V],
                              j = this._nodesById.get(A.id);
                            if (j) {
                              var H = j.parentId !== A.parentId,
                                ie = this.siblingIndexOf(A.id),
                                Z = J(j, A);
                              Z && (U(j, A), be(A.id)),
                                this.detach(A.id),
                                this.attach(A.id, A.parentId, A.siblingIndex),
                                (H || this.siblingIndexOf(A.id) !== ie) && te();
                            }
                          }
                          for (var ye = 0, Ee = B.childrenUpdated; ye < Ee.length; ye++) {
                            var Se = Ee[ye];
                            if (Se.parentId < 0) {
                              var Ie = Se.childIds.filter(function (je) {
                                return _e._nodesById.has(je);
                              });
                              if (!$(this._roots, Ie)) {
                                (this._roots.length = 0), (Q = this._roots).push.apply(Q, Ie);
                                for (var Ve = 0, Ne = this._roots; Ve < Ne.length; Ve++) {
                                  var xe = Ne[Ve],
                                    He = this._nodesById.get(xe);
                                  He && (He.parentId = -1);
                                }
                                te();
                              }
                            } else {
                              var Fe = this._nodesById.get(Se.parentId);
                              if (!Fe) continue;
                              var Ie = Se.childIds.filter(function (st) {
                                return _e._nodesById.has(st);
                              });
                              if (!$(Fe.children, Ie)) {
                                (Fe.children.length = 0), (pe = Fe.children).push.apply(pe, Ie);
                                for (var Re = 0, me = Fe.children; Re < me.length; Re++) {
                                  var xe = me[Re],
                                    He = this._nodesById.get(xe);
                                  He && (He.parentId = Se.parentId);
                                }
                                te();
                              }
                            }
                          }
                          for (var De = 0, Be = B.updatedSemantic; De < Be.length; De++) {
                            var A = Be[De],
                              j = this._nodesById.get(A.id);
                            j && le(j, A) && (ne(j, A), Y(A.id));
                          }
                          for (var Ge = 0, Ze = B.updatedGeometry; Ge < Ze.length; Ge++) {
                            var A = Ze[Ge],
                              j = this._nodesById.get(A.id);
                            j && J(j, A) && (U(j, A), be(A.id));
                          }
                          (!K && !X) ||
                            (K && this._semanticVersion++,
                            X && this._geometryVersion++,
                            this._debug && this.logDiff(B, K, X));
                        }),
                        Object.defineProperty(D.prototype, "debug", {
                          set: function (B) {
                            this._debug = B;
                          },
                          enumerable: !1,
                          configurable: !0,
                        }),
                        (D.prototype.logDiff = function (B, Q, pe) {
                          for (
                            var _e = [
                                "[rive:semantics] semantic v".concat(this._semanticVersion) +
                                  (pe ? " geometry v".concat(this._geometryVersion) : "") +
                                  (Q ? "" : " (geometry-only)"),
                              ],
                              K = 0,
                              X = B.removed;
                            K < X.length;
                            K++
                          ) {
                            var te = X[K];
                            _e.push("  - removed #".concat(te));
                          }
                          for (var Y = 0, be = B.added; Y < be.length; Y++) {
                            var ee = be[Y];
                            _e.push(
                              "  + added #".concat(ee.id, " ").concat((0, oe.roleName)(ee.role)) +
                                (ee.label ? ' "'.concat(ee.label, '"') : "") +
                                " bounds:("
                                  .concat(ee.minX.toFixed(1), ",")
                                  .concat(ee.minY.toFixed(1), ")-(")
                                  .concat(ee.maxX.toFixed(1), ",")
                                  .concat(ee.maxY.toFixed(1), ")") +
                                " states=[".concat((0, oe.stateNames)(ee.stateFlags), "]") +
                                " traits=[".concat((0, oe.traitNames)(ee.traitFlags), "]"),
                            );
                          }
                          for (var ze = 0, xe = B.moved; ze < xe.length; ze++) {
                            var ee = xe[ze];
                            _e.push(
                              "  ~ moved #"
                                .concat(ee.id, " → parent=")
                                .concat(ee.parentId, " idx=")
                                .concat(ee.siblingIndex) +
                                " bounds:("
                                  .concat(ee.minX.toFixed(1), ",")
                                  .concat(ee.minY.toFixed(1), ")-(")
                                  .concat(ee.maxX.toFixed(1), ",")
                                  .concat(ee.maxY.toFixed(1), ")"),
                            );
                          }
                          for (var ke = 0, ae = B.childrenUpdated; ke < ae.length; ke++) {
                            var A = ae[ke];
                            _e.push(
                              "  ↕ children of "
                                .concat(A.parentId < 0 ? "root" : "#" + A.parentId, ": [")
                                .concat(A.childIds.join(", "), "]"),
                            );
                          }
                          for (var j = 0, V = B.updatedSemantic; j < V.length; j++) {
                            var ee = V[j];
                            _e.push(
                              "  ✎ semantic #".concat(ee.id, " ").concat((0, oe.roleName)(ee.role)) +
                                (ee.label ? ' "'.concat(ee.label, '"') : "") +
                                " states=[".concat((0, oe.stateNames)(ee.stateFlags), "]") +
                                " traits=[".concat((0, oe.traitNames)(ee.traitFlags), "]"),
                            );
                          }
                          for (var O = 0, H = B.updatedGeometry; O < H.length; O++) {
                            var ee = H[O];
                            _e.push(
                              "  ⊞ geometry #"
                                .concat(ee.id, " (")
                                .concat(ee.minX.toFixed(1), ",")
                                .concat(ee.minY.toFixed(1), ")-(")
                                .concat(ee.maxX.toFixed(1), ",")
                                .concat(ee.maxY.toFixed(1), ")"),
                            );
                          }
                          console.log(
                            _e.join(`
`),
                          );
                        }),
                        (D.prototype.flattened = function () {
                          for (
                            var B = this,
                              Q = [],
                              pe = function (te, Y) {
                                var be = B._nodesById.get(te);
                                if (be) {
                                  Q.push({ depth: Y, node: be });
                                  for (var ee = 0, ze = be.children; ee < ze.length; ee++) {
                                    var xe = ze[ee];
                                    pe(xe, Y + 1);
                                  }
                                }
                              },
                              _e = 0,
                              K = this._roots;
                            _e < K.length;
                            _e++
                          ) {
                            var X = K[_e];
                            pe(X, 0);
                          }
                          return Q;
                        }),
                        D
                      );
                    })();
                  function se(D, B, Q) {
                    return D < B ? B : D > Q ? Q : D;
                  }
                  function $(D, B) {
                    if (D.length !== B.length) return !1;
                    for (var Q = 0; Q < D.length; Q++) if (D[Q] !== B[Q]) return !1;
                    return !0;
                  }
                  function k(D) {
                    return {
                      id: D.id,
                      parentId: -1,
                      role: D.role,
                      label: D.label,
                      value: D.value,
                      hint: D.hint,
                      stateFlags: D.stateFlags,
                      traitFlags: D.traitFlags,
                      headingLevel: D.headingLevel,
                      minX: D.minX,
                      minY: D.minY,
                      maxX: D.maxX,
                      maxY: D.maxY,
                      children: [],
                    };
                  }
                  function le(D, B) {
                    return (
                      D.role !== B.role ||
                      D.label !== B.label ||
                      D.value !== B.value ||
                      D.hint !== B.hint ||
                      D.stateFlags !== B.stateFlags ||
                      D.traitFlags !== B.traitFlags ||
                      D.headingLevel !== B.headingLevel
                    );
                  }
                  function J(D, B) {
                    return D.minX !== B.minX || D.minY !== B.minY || D.maxX !== B.maxX || D.maxY !== B.maxY;
                  }
                  function ne(D, B) {
                    (D.role = B.role),
                      (D.label = B.label),
                      (D.value = B.value),
                      (D.hint = B.hint),
                      (D.stateFlags = B.stateFlags),
                      (D.traitFlags = B.traitFlags),
                      (D.headingLevel = B.headingLevel);
                  }
                  function U(D, B) {
                    (D.minX = B.minX), (D.minY = B.minY), (D.maxX = B.maxX), (D.maxY = B.maxY);
                  }
                },
                (We, ve, re) => {
                  re.r(ve),
                    re.d(ve, {
                      CHECK_STATE_MASK: () => k,
                      CHECK_STATE_OFFSET: () => $,
                      SemanticActionType: () => D,
                      SemanticCheckState: () => se,
                      SemanticMode: () => J,
                      SemanticRole: () => oe,
                      SemanticState: () => P,
                      SemanticTrait: () => ne,
                      checkStateOf: () => le,
                      hasState: () => M,
                      hasTrait: () => U,
                      roleName: () => be,
                      stateNames: () => ee,
                      traitNames: () => ze,
                    });
                  var oe = {
                      none: 0,
                      button: 1,
                      link: 2,
                      checkbox: 3,
                      switchControl: 4,
                      slider: 5,
                      textField: 6,
                      text: 7,
                      image: 8,
                      group: 9,
                      list: 10,
                      listItem: 11,
                      tab: 12,
                      tabList: 13,
                      dialog: 14,
                      alertDialog: 15,
                      radioGroup: 16,
                      radioButton: 17,
                    },
                    P = {
                      None: 0,
                      Expanded: 1,
                      Selected: 2,
                      Toggled: 16,
                      Required: 32,
                      Disabled: 64,
                      Focused: 128,
                      Hidden: 256,
                      LiveRegion: 512,
                      ReadOnly: 1024,
                      Modal: 2048,
                      Obscured: 4096,
                      Multiline: 8192,
                    };
                  function M(xe, ke) {
                    return (xe & ke) !== 0;
                  }
                  var se = { Unchecked: 0, Checked: 1, Mixed: 2 },
                    $ = 2,
                    k = 3 << $;
                  function le(xe) {
                    var ke = (xe & k) >> $;
                    return ke >= se.Mixed ? se.Mixed : ke;
                  }
                  var J = { Disabled: "disabled", Enabled: "enabled" },
                    ne = {
                      None: 0,
                      Expandable: 1,
                      Selectable: 2,
                      Checkable: 4,
                      Toggleable: 8,
                      Requirable: 16,
                      Enablable: 32,
                      Focusable: 64,
                    };
                  function U(xe, ke) {
                    return (xe & ke) !== 0;
                  }
                  for (
                    var D = { tap: 0, increase: 1, decrease: 2 }, B = {}, Q = 0, pe = Object.entries(oe);
                    Q < pe.length;
                    Q++
                  ) {
                    var _e = pe[Q],
                      K = _e[0],
                      X = _e[1];
                    B[X] = K;
                  }
                  var te = Object.entries(P).filter(function (xe) {
                      var ke = xe[1];
                      return ke !== 0;
                    }),
                    Y = Object.entries(ne).filter(function (xe) {
                      var ke = xe[1];
                      return ke !== 0;
                    });
                  function be(xe) {
                    var ke;
                    return (ke = B[xe]) !== null && ke !== void 0 ? ke : "unknown(".concat(xe, ")");
                  }
                  function ee(xe) {
                    if (xe === 0) return "none";
                    for (var ke = [], ae = 0, A = te; ae < A.length; ae++) {
                      var j = A[ae],
                        V = j[0],
                        O = j[1];
                      xe & O && ke.push(V);
                    }
                    switch (le(xe)) {
                      case se.Checked:
                        ke.push("Checked");
                        break;
                      case se.Mixed:
                        ke.push("Mixed");
                        break;
                    }
                    return ke.join(", ") || "none";
                  }
                  function ze(xe) {
                    if (xe === 0) return "none";
                    for (var ke = [], ae = 0, A = Y; ae < A.length; ae++) {
                      var j = A[ae],
                        V = j[0],
                        O = j[1];
                      xe & O && ke.push(V);
                    }
                    return ke.join(", ") || "none";
                  }
                },
                (We, ve, re) => {
                  re.r(ve), re.d(ve, { AccessibilityOverlay: () => k });
                  var oe = re(10),
                    P = re(11),
                    M = re(8),
                    se = !1;
                  function $(ae) {
                    if (!se) {
                      var A = ae.offsetParent;
                      if (A) {
                        for (
                          var j = function (ye) {
                              return ye === "auto" || ye === "scroll" || ye === "overlay";
                            },
                            V = null,
                            O = ae.parentElement,
                            H = 32,
                            ie = 0;
                          O && O !== document.documentElement && ie < H;
                          ie++, O = O.parentElement
                        ) {
                          var Z = getComputedStyle(O);
                          if (j(Z.overflowX) || j(Z.overflowY)) {
                            V = O;
                            break;
                          }
                        }
                        !V ||
                          V.contains(A) ||
                          ((se = !0),
                          console.warn(
                            '[Rive] Semantics: give the element wrapping the <canvas> "position: relative" (or another positioned value) so the semantic overlay scrolls with the canvas. Without it, screen readers may scroll to stale positions when the canvas is inside a scrolling container.',
                          ));
                      }
                    }
                  }
                  var k = (function () {
                      function ae(A) {
                        var j = this,
                          V,
                          O;
                        (this.elements = new Map()),
                          (this.descElements = new Map()),
                          (this.lastSemanticVersion = -1),
                          (this.lastGeometryVersion = -1),
                          (this.pendingTextGeometry = []),
                          (this.textGeometryKeys = new WeakMap()),
                          (this.appliedNodes = new WeakMap()),
                          (this.lastCanvasPositioning = {
                            width: -1,
                            height: -1,
                            offsetTop: -1,
                            offsetLeft: -1,
                          }),
                          (this._geometryDirty = !0),
                          (this.isUpdating = !1),
                          (this.editingHostNodeId = null),
                          (this.editingHostSemanticVersion = -1),
                          (this.transformContainer = null),
                          (this._artboardBounds = { minX: 0, minY: 0, maxX: 0, maxY: 0 }),
                          (this.repositionTimer = null),
                          (this.canvasResizeObserver = null),
                          (this.parentResizeObserver = null),
                          (this.positionObserver = null),
                          (this._onWindowResize = function () {
                            return j.scheduleReposition();
                          }),
                          (this.instanceId = A.instanceId),
                          (this.fireAction = A.fireAction),
                          (this.requestFocus = A.requestFocus),
                          (this.clearFocus = A.clearFocus),
                          (this.canvas = A.canvas),
                          (this.semanticsOptions = A.semanticsOptions),
                          (this.allowFocusInterrupt =
                            (V = A.allowFocusInterrupt) !== null && V !== void 0 ? V : !1),
                          (this.isEditingHostFocused =
                            (O = A.isEditingHostFocused) !== null && O !== void 0
                              ? O
                              : function () {
                                  return !1;
                                }),
                          (this.container = this.createContainer(A.canvas)),
                          this.attachPositionObservers(),
                          $(A.canvas);
                      }
                      return (
                        (ae.prototype.setEditingHostNode = function (A) {
                          if (this.editingHostNodeId !== A) {
                            var j = this.editingHostNodeId;
                            if (((this.editingHostNodeId = A), j !== null)) {
                              var V = this.elements.get(j);
                              if (V) {
                                var O = this.appliedNodes.get(V);
                                O && this.isAriaHidden(O) ? K(V, "aria-hidden", "true") : X(V, "aria-hidden");
                              }
                            }
                            if (A !== null) {
                              var H = this.elements.get(A);
                              H && K(H, "aria-hidden", "true");
                            }
                          }
                        }),
                        (ae.prototype.syncEditingHost = function (A, j, V) {
                          var O;
                          if (!(!V && A.semanticVersion === this.editingHostSemanticVersion)) {
                            this.editingHostSemanticVersion = A.semanticVersion;
                            var H = A.focusedNode();
                            if (H === void 0 || H.role !== M.SemanticRole.textField) {
                              this.editingHostNodeId !== null &&
                                (j.resetDecoration(), this.setEditingHostNode(null));
                              return;
                            }
                            j.setSecure((0, M.hasState)(H.stateFlags, M.SemanticState.Obscured)),
                              j.decorate({
                                "aria-label": H.label || null,
                                "aria-readonly": (0, M.hasState)(H.stateFlags, M.SemanticState.ReadOnly)
                                  ? "true"
                                  : null,
                                "aria-multiline": (0, M.hasState)(H.stateFlags, M.SemanticState.Multiline)
                                  ? "true"
                                  : null,
                                "aria-required":
                                  (0, M.hasTrait)(H.traitFlags, M.SemanticTrait.Requirable) &&
                                  (0, M.hasState)(H.stateFlags, M.SemanticState.Required)
                                    ? "true"
                                    : null,
                                "aria-describedby":
                                  (H.hint &&
                                    ((O = this.descElements.get(H.id)) === null || O === void 0
                                      ? void 0
                                      : O.id)) ||
                                  null,
                              }),
                              this.setEditingHostNode(H.id);
                          }
                        }),
                        (ae.prototype.hasEditingHost = function () {
                          return this.editingHostNodeId !== null;
                        }),
                        (ae.prototype.releaseEditingHost = function (A, j) {
                          var V;
                          if (
                            (j?.resetDecoration(),
                            this.setEditingHostNode(null),
                            (this.editingHostSemanticVersion = -1),
                            !!j?.hasDomFocus())
                          ) {
                            var O = (V = A?.focusedNode()) === null || V === void 0 ? void 0 : V.id;
                            O !== void 0 && this.focusNodeElement(O);
                          }
                        }),
                        (ae.prototype.focusNodeElement = function (A) {
                          var j = this.elements.get(A);
                          j && this.focusElementInPlace(j);
                        }),
                        (ae.prototype.focusElementInPlace = function (A) {
                          var j, V;
                          this.syncContainerBeforeFocus(),
                            A.focus({ preventScroll: !0 }),
                            (V = (j = this.canvas).scrollIntoView) === null ||
                              V === void 0 ||
                              V.call(j, { block: "nearest", inline: "nearest", behavior: "instant" }),
                            this.syncContainerGeometry(),
                            this.observePosition();
                        }),
                        (ae.prototype.getSemanticOverlayContainer = function () {
                          return this.container;
                        }),
                        (ae.prototype.attachPositionObservers = function () {
                          var A = this;
                          (this.canvasResizeObserver = new ResizeObserver(function () {
                            return A.scheduleReposition();
                          })),
                            this.canvasResizeObserver.observe(this.canvas);
                          var j = this.canvas.parentElement;
                          j &&
                            ((this.parentResizeObserver = new ResizeObserver(function () {
                              return A.scheduleReposition();
                            })),
                            this.parentResizeObserver.observe(j)),
                            window.addEventListener("resize", this._onWindowResize),
                            this.observePosition();
                        }),
                        (ae.prototype.observePosition = function () {
                          var A = this,
                            j;
                          if (!(typeof IntersectionObserver > "u")) {
                            (j = this.positionObserver) === null || j === void 0 || j.disconnect(),
                              (this.positionObserver = null);
                            var V = this.canvas.getBoundingClientRect();
                            if (!(!V.width || !V.height)) {
                              var O = function (Z) {
                                  return "".concat(-Math.round(Z), "px");
                                },
                                H = [
                                  V.top,
                                  window.innerWidth - V.right,
                                  window.innerHeight - V.bottom,
                                  V.left,
                                ]
                                  .map(O)
                                  .join(" "),
                                ie = !1;
                              (this.positionObserver = new IntersectionObserver(
                                function () {
                                  if (!ie) {
                                    ie = !0;
                                    return;
                                  }
                                  A.scheduleReposition();
                                },
                                { threshold: 1, rootMargin: H },
                              )),
                                this.positionObserver.observe(this.canvas);
                            }
                          }
                        }),
                        (ae.prototype.scheduleReposition = function () {
                          var A = this;
                          (this._geometryDirty = !0),
                            this.repositionTimer === null &&
                              (this.repositionTimer = setTimeout(function () {
                                (A.repositionTimer = null), A.syncContainerGeometry(), A.observePosition();
                              }, 500));
                        }),
                        (ae.prototype.syncContainerGeometry = function () {
                          var A = this.canvas.getBoundingClientRect(),
                            j = (0, P.canvasOffset)(this.canvas),
                            V = j.top,
                            O = j.left,
                            H =
                              A.width !== this.lastCanvasPositioning.width ||
                              A.height !== this.lastCanvasPositioning.height;
                          return !H &&
                            V === this.lastCanvasPositioning.offsetTop &&
                            O === this.lastCanvasPositioning.offsetLeft
                            ? !1
                            : ((this.container.style.top = V + "px"),
                              (this.container.style.left = O + "px"),
                              (this.container.style.width = A.width + "px"),
                              (this.container.style.height = A.height + "px"),
                              (this.container.tabIndex = -1),
                              (this.lastCanvasPositioning.width = A.width),
                              (this.lastCanvasPositioning.height = A.height),
                              (this.lastCanvasPositioning.offsetTop = V),
                              (this.lastCanvasPositioning.offsetLeft = O),
                              H);
                        }),
                        (ae.prototype.syncContainerBeforeFocus = function () {
                          this.syncContainerGeometry() && (this._geometryDirty = !0);
                        }),
                        (ae.prototype.createContainer = function (A) {
                          var j,
                            V,
                            O = document.createElement("div");
                          (O.id = "rive-a11y-".concat(this.instanceId)),
                            O.setAttribute("role", "region"),
                            O.setAttribute(
                              "aria-label",
                              (V =
                                (j = this.semanticsOptions) === null || j === void 0
                                  ? void 0
                                  : j.riveCanvasLabel) !== null && V !== void 0
                                ? V
                                : "Rive animation",
                            );
                          var H = A.getBoundingClientRect(),
                            ie = (0, P.canvasOffset)(this.canvas),
                            Z = ie.top,
                            ye = ie.left;
                          return (
                            (O.style.cssText = [
                              "position:absolute",
                              "top:".concat(Z, "px"),
                              "left:".concat(ye, "px"),
                              "line-height:normal",
                              "font-size:16px",
                              "width:".concat(H.width, "px"),
                              "height:".concat(H.height, "px"),
                              "overflow:hidden",
                              "pointer-events:none",
                              "opacity:0",
                            ].join(";")),
                            A.insertAdjacentElement("afterend", O),
                            O
                          );
                        }),
                        (ae.prototype.needsUpdate = function (A) {
                          var j = A.semanticVersion !== this.lastSemanticVersion,
                            V = A.geometryVersion !== this.lastGeometryVersion,
                            O = this._geometryDirty || !this.transformContainer;
                          return !j && !V && !O
                            ? null
                            : { semanticChanged: j, nodeGeometryChanged: V, layoutChanged: O };
                        }),
                        (ae.prototype.update = function (A, j, V, O, H) {
                          var ie = H ?? this.needsUpdate(A);
                          !ie &&
                            j &&
                            (ie = { semanticChanged: !1, nodeGeometryChanged: !1, layoutChanged: !0 }),
                            ie && this.performUpdate(A, j, V, O, ie);
                        }),
                        (ae.prototype.performUpdate = function (A, j, V, O, H) {
                          var ie,
                            Z = H.semanticChanged,
                            ye = H.nodeGeometryChanged,
                            Ee = A.semanticVersion - this.lastSemanticVersion > 1;
                          if (
                            ((this.lastSemanticVersion = A.semanticVersion),
                            (this.lastGeometryVersion = A.geometryVersion),
                            (this.isUpdating = !0),
                            (this._artboardBounds = O),
                            j &&
                              (this.syncContainerGeometry(),
                              this.syncTransformContainer(j, V, O),
                              (this._geometryDirty = !1)),
                            Z)
                          ) {
                            var Se =
                                (ie = this.transformContainer) !== null && ie !== void 0
                                  ? ie
                                  : this.container,
                              Ie = new Set();
                            this.rebuildChildren(Se, A.roots, A, 0, 0, Ie, Ee);
                            var Ve = [];
                            this.elements.forEach(function (De, Be) {
                              Ie.has(Be) || Ve.push(Be);
                            });
                            for (var Ne = 0, He = Ve; Ne < He.length; Ne++) {
                              var Fe = He[Ne],
                                Re = this.elements.get(Fe);
                              Re && Re.parentNode && Re.parentNode.removeChild(Re), this.elements.delete(Fe);
                              var me = this.descElements.get(Fe);
                              me && me.parentNode && me.parentNode.removeChild(me),
                                this.descElements.delete(Fe);
                            }
                          } else ye && this.updateGeometryForChangedNodes(A);
                          this.flushTextGeometry(), (this.isUpdating = !1);
                        }),
                        (ae.prototype.destroy = function () {
                          var A, j, V;
                          this.repositionTimer !== null &&
                            (clearTimeout(this.repositionTimer), (this.repositionTimer = null)),
                            window.removeEventListener("resize", this._onWindowResize),
                            (A = this.canvasResizeObserver) === null || A === void 0 || A.disconnect(),
                            (j = this.parentResizeObserver) === null || j === void 0 || j.disconnect(),
                            (V = this.positionObserver) === null || V === void 0 || V.disconnect(),
                            this.container.parentNode &&
                              this.container.parentNode.removeChild(this.container),
                            this.elements.clear(),
                            this.descElements.clear(),
                            (this.pendingTextGeometry.length = 0);
                        }),
                        (ae.prototype.rebuildChildren = function (A, j, V, O, H, ie, Z) {
                          for (var ye = 0; ye < j.length; ye++) {
                            var Ee = j[ye],
                              Se = V.nodeById(Ee);
                            if (Se) {
                              ie.add(Ee);
                              var Ie = this.elements.get(Ee),
                                Ve = !Ie;
                              Ie || ((Ie = this.createElement(Se)), this.elements.set(Ee, Ie)),
                                (Ve || Z || V.semanticChangedIds.has(Ee)) && this.applyAttributes(Ie, Se),
                                this.applyPosition(Ie, Se, O, H);
                              var Ne = A.children[ye];
                              if (
                                (Ne !== Ie && (Ne ? A.insertBefore(Ie, Ne) : A.appendChild(Ie)),
                                (0, M.hasTrait)(Se.traitFlags, M.SemanticTrait.Focusable) &&
                                  (0, M.hasState)(Se.stateFlags, M.SemanticState.Focused))
                              ) {
                                var He = document.activeElement,
                                  Fe = He?.closest('[aria-modal="true"]'),
                                  Re = !!Fe && this.container.contains(Fe) && !Fe.contains(Ie);
                                Ee !== this.editingHostNodeId &&
                                  He !== Ie &&
                                  !Re &&
                                  !this.isEditingHostFocused() &&
                                  this.canMoveFocus() &&
                                  (this.syncContainerBeforeFocus(), Ie.focus({ preventScroll: !0 }));
                              }
                              Se.children.length > 0 &&
                                this.rebuildChildren(Ie, Se.children, V, Se.minX, Se.minY, ie, Z),
                                Ve && this.autoFocusDialogOnAppear(Ie, Se, V);
                            }
                          }
                        }),
                        (ae.prototype.updateGeometryForChangedNodes = function (A) {
                          for (var j, V, O = 0, H = Array.from(A.geometryChangedIds); O < H.length; O++) {
                            var ie = H[O],
                              Z = A.nodeById(ie);
                            if (Z) {
                              var ye = 0,
                                Ee = 0,
                                Se =
                                  (j = this.transformContainer) !== null && j !== void 0 ? j : this.container;
                              if (Z.parentId >= 0) {
                                var Ie = A.nodeById(Z.parentId);
                                Ie &&
                                  ((ye = Ie.minX),
                                  (Ee = Ie.minY),
                                  (Se =
                                    (V = this.elements.get(Z.parentId)) !== null && V !== void 0 ? V : Se));
                              }
                              this.updateNodeGeometrySubtree(A, ie, ye, Ee, Se);
                            }
                          }
                        }),
                        (ae.prototype.updateNodeGeometrySubtree = function (A, j, V, O, H) {
                          var ie = A.nodeById(j);
                          if (ie) {
                            var Z = this.elements.get(j);
                            if (Z) {
                              this.applyPosition(Z, ie, V, O);
                              for (var ye = 0, Ee = ie.children; ye < Ee.length; ye++) {
                                var Se = Ee[ye];
                                this.updateNodeGeometrySubtree(A, Se, ie.minX, ie.minY, Z);
                              }
                            }
                          }
                        }),
                        (ae.prototype.canMoveFocus = function () {
                          var A = document.activeElement,
                            j = A === this.canvas || this.container.contains(A);
                          return j || this.allowFocusInterrupt;
                        }),
                        (ae.prototype.autoFocusDialogOnAppear = function (A, j, V) {
                          var O;
                          if (ee(j.role, j.stateFlags) && this.canMoveFocus()) {
                            var H = document.activeElement;
                            if (!(H && H !== A && A.contains(H))) {
                              var ie =
                                (O = this.routeDefaultFocusTarget(j, V)) !== null && O !== void 0 ? O : A;
                              ie.hasAttribute("tabindex") || ie.setAttribute("tabindex", "-1"),
                                document.activeElement !== ie && ie.focus({ preventScroll: !0 });
                            }
                          }
                        }),
                        (ae.prototype.routeDefaultFocusTarget = function (A, j) {
                          for (var V, O = 0, H = A.children; O < H.length; O++) {
                            var ie = H[O],
                              Z = j.nodeById(ie);
                            if (Z) {
                              var ye = this.elements.get(ie);
                              if (ye && ze(Z)) return ye;
                              if (Z.children.length > 0 || !Z.label) {
                                var Ee = this.routeDefaultFocusTarget(Z, j);
                                if (Ee) return Ee;
                                continue;
                              }
                              if (ye)
                                return (V = ye.querySelector(":scope > span")) !== null && V !== void 0
                                  ? V
                                  : ye;
                            }
                          }
                          return null;
                        }),
                        Object.defineProperty(ae.prototype, "nodeIdPrefix", {
                          get: function () {
                            return "rive-".concat(this.instanceId, "-sem-");
                          },
                          enumerable: !1,
                          configurable: !0,
                        }),
                        (ae.prototype.nodeIdFromElement = function (A) {
                          if (!A.id.startsWith(this.nodeIdPrefix)) return null;
                          var j = A.id.slice(this.nodeIdPrefix.length);
                          if (!j) return null;
                          var V = Number(j);
                          return Number.isNaN(V) ? null : V;
                        }),
                        (ae.prototype.createElement = function (A) {
                          var j = xe(A.role),
                            V = document.createElement(j);
                          if (
                            ((V.id = "".concat(this.nodeIdPrefix).concat(A.id)),
                            (V.style.cssText = pe),
                            A.role === M.SemanticRole.text)
                          ) {
                            var O = document.createElement("span");
                            (O.style.cssText = _e), V.appendChild(O);
                          }
                          return this.attachActionHandlers(V, A), V;
                        }),
                        (ae.prototype.attachRovingNav = function (A, j) {
                          var V = this;
                          A.addEventListener("keydown", function (O) {
                            var H = null;
                            if (
                              (O.key === "ArrowRight" || O.key === "ArrowDown"
                                ? (H = "next")
                                : O.key === "ArrowLeft" || O.key === "ArrowUp"
                                  ? (H = "prev")
                                  : j.includeHomeEnd && O.key === "Home"
                                    ? (H = "first")
                                    : j.includeHomeEnd && O.key === "End" && (H = "last"),
                              !!H)
                            ) {
                              (0, oe.claimKeyEvent)(O);
                              var ie = j.members(),
                                Z = ie.indexOf(A);
                              if (!(Z < 0)) {
                                var ye = ie.length,
                                  Ee =
                                    H === "next"
                                      ? ie[(Z + 1) % ye]
                                      : H === "prev"
                                        ? ie[(Z - 1 + ye) % ye]
                                        : H === "first"
                                          ? ie[0]
                                          : ie[ye - 1];
                                if (Ee && Ee !== A) {
                                  V.focusElementInPlace(Ee);
                                  var Se = V.nodeIdFromElement(Ee);
                                  Se !== null && V.fireAction(Se, M.SemanticActionType.tap);
                                }
                              }
                            }
                          });
                        }),
                        (ae.prototype.attachActionHandlers = function (A, j) {
                          var V = this,
                            O = j.role,
                            H = j.id;
                          if (Y(O)) {
                            A.addEventListener("click", function () {
                              V.fireAction(H, M.SemanticActionType.tap);
                            });
                            var ie = O === M.SemanticRole.link ? ["Enter"] : ["Enter", " "];
                            A.addEventListener("keydown", function (Z) {
                              ie.includes(Z.key) &&
                                ((0, oe.claimKeyEvent)(Z), V.fireAction(H, M.SemanticActionType.tap));
                            });
                          }
                          O === M.SemanticRole.slider &&
                            A.addEventListener("keydown", function (Z) {
                              Z.key === "ArrowRight" || Z.key === "ArrowUp"
                                ? ((0, oe.claimKeyEvent)(Z), V.fireAction(H, M.SemanticActionType.increase))
                                : (Z.key === "ArrowLeft" || Z.key === "ArrowDown") &&
                                  ((0, oe.claimKeyEvent)(Z), V.fireAction(H, M.SemanticActionType.decrease));
                            }),
                            O === M.SemanticRole.tab &&
                              this.attachRovingNav(A, {
                                includeHomeEnd: !0,
                                members: function () {
                                  var Z = A.parentElement;
                                  return Z
                                    ? Array.from(Z.children).filter(function (ye) {
                                        return ye instanceof HTMLElement && ye.getAttribute("role") === "tab";
                                      })
                                    : [];
                                },
                              }),
                            O === M.SemanticRole.radioButton &&
                              this.attachRovingNav(A, {
                                includeHomeEnd: !1,
                                members: function () {
                                  var Z,
                                    ye =
                                      (Z = A.closest('[role="radiogroup"]')) !== null && Z !== void 0
                                        ? Z
                                        : A.parentElement;
                                  return ye ? Array.from(ye.querySelectorAll('[role="radio"]')) : [];
                                },
                              }),
                            (0, M.hasTrait)(j.traitFlags, M.SemanticTrait.Focusable) &&
                              A.addEventListener("focus", function () {
                                V.requestFocus(H);
                              });
                        }),
                        (ae.prototype.isAriaHidden = function (A) {
                          var j = A.role,
                            V = A.stateFlags,
                            O = j === M.SemanticRole.image && !A.label,
                            H = A.id === this.editingHostNodeId;
                          return (
                            (0, M.hasState)(V, M.SemanticState.Hidden) ||
                            ((0, M.hasState)(V, M.SemanticState.Obscured) &&
                              j !== M.SemanticRole.textField) ||
                            O ||
                            H
                          );
                        }),
                        (ae.prototype.applyAttributes = function (A, j) {
                          var V, O, H;
                          this.appliedNodes.set(A, j);
                          var ie = j.role,
                            Z = j.stateFlags,
                            ye = j.traitFlags,
                            Ee = ke(ie);
                          if (
                            (Ee ? K(A, "role", Ee) : X(A, "role"),
                            ie === M.SemanticRole.link && K(A, "role", "link"),
                            be(ie) ||
                            (0, M.hasTrait)(ye, M.SemanticTrait.Focusable) ||
                            ie === M.SemanticRole.listItem
                              ? K(A, "tabindex", "-1")
                              : X(A, "tabindex"),
                            j.label ? K(A, "aria-label", j.label) : X(A, "aria-label"),
                            ie === M.SemanticRole.slider)
                          ) {
                            if (j.value) {
                              var Se = parseFloat(j.value);
                              Number.isFinite(Se) ? K(A, "aria-valuenow", String(Se)) : X(A, "aria-valuenow"),
                                K(A, "aria-valuetext", j.value);
                            } else X(A, "aria-valuenow"), X(A, "aria-valuetext");
                            K(A, "aria-orientation", "horizontal"),
                              te(A, "aria-readonly", (0, M.hasState)(Z, M.SemanticState.ReadOnly));
                          } else
                            X(A, "aria-valuenow"),
                              X(A, "aria-valuetext"),
                              X(A, "aria-orientation"),
                              X(A, "aria-readonly");
                          if (j.hint) {
                            var Ie = "rive-".concat(this.instanceId, "-desc-").concat(j.id),
                              Ve = this.descElements.get(j.id);
                            Ve ||
                              ((Ve = document.createElement("span")),
                              (Ve.id = Ie),
                              (Ve.style.cssText = Q),
                              this.container.appendChild(Ve),
                              this.descElements.set(j.id, Ve)),
                              Ve.textContent !== j.hint && (Ve.textContent = j.hint),
                              K(A, "aria-describedby", Ie);
                          } else {
                            X(A, "aria-describedby");
                            var Ne = this.descElements.get(j.id);
                            Ne &&
                              (Ne.parentNode && Ne.parentNode.removeChild(Ne),
                              this.descElements.delete(j.id));
                          }
                          if (ie === M.SemanticRole.text) {
                            var He = (V = A.querySelector(":scope > span")) !== null && V !== void 0 ? V : A,
                              Fe = (O = j.label) !== null && O !== void 0 ? O : "";
                            He.textContent !== Fe && (He.textContent = Fe),
                              X(A, "aria-label"),
                              j.headingLevel > 0
                                ? (K(A, "role", "heading"), K(A, "aria-level", String(j.headingLevel)))
                                : X(A, "aria-level");
                          }
                          if (
                            ((0, M.hasTrait)(ye, M.SemanticTrait.Expandable) && le.has(ie)
                              ? te(A, "aria-expanded", (0, M.hasState)(Z, M.SemanticState.Expanded))
                              : X(A, "aria-expanded"),
                            ie === M.SemanticRole.tab ||
                            ((0, M.hasTrait)(ye, M.SemanticTrait.Selectable) && J.has(ie))
                              ? te(A, "aria-selected", (0, M.hasState)(Z, M.SemanticState.Selected))
                              : X(A, "aria-selected"),
                            (0, M.hasTrait)(ye, M.SemanticTrait.Checkable) && ne.has(ie))
                          ) {
                            var Re = (0, M.checkStateOf)(Z);
                            Re === M.SemanticCheckState.Mixed && U.has(ie)
                              ? K(A, "aria-checked", "mixed")
                              : te(A, "aria-checked", Re === M.SemanticCheckState.Checked);
                          } else X(A, "aria-checked");
                          if (
                            ((0, M.hasTrait)(ye, M.SemanticTrait.Toggleable)
                              ? (D.has(ie)
                                  ? te(A, "aria-pressed", (0, M.hasState)(Z, M.SemanticState.Toggled))
                                  : X(A, "aria-pressed"),
                                ie === M.SemanticRole.switchControl &&
                                  te(A, "aria-checked", (0, M.hasState)(Z, M.SemanticState.Toggled)))
                              : X(A, "aria-pressed"),
                            (0, M.hasTrait)(ye, M.SemanticTrait.Requirable) && B.has(ie)
                              ? te(A, "aria-required", (0, M.hasState)(Z, M.SemanticState.Required))
                              : X(A, "aria-required"),
                            (0, M.hasTrait)(ye, M.SemanticTrait.Enablable)
                              ? te(A, "aria-disabled", (0, M.hasState)(Z, M.SemanticState.Disabled))
                              : X(A, "aria-disabled"),
                            this.isAriaHidden(j) ? K(A, "aria-hidden", "true") : X(A, "aria-hidden"),
                            (0, M.hasState)(Z, M.SemanticState.LiveRegion)
                              ? K(A, "aria-live", "polite")
                              : X(A, "aria-live"),
                            ie === M.SemanticRole.textField)
                          )
                            if (
                              (te(A, "aria-readonly", (0, M.hasState)(Z, M.SemanticState.ReadOnly)),
                              te(A, "aria-multiline", (0, M.hasState)(Z, M.SemanticState.Multiline)),
                              j.children.length === 0)
                            ) {
                              var me = (0, M.hasState)(Z, M.SemanticState.Obscured)
                                ? ""
                                : (H = j.value) !== null && H !== void 0
                                  ? H
                                  : "";
                              A.textContent !== me && (A.textContent = me);
                            } else
                              for (var De = 0, Be = Array.from(A.childNodes); De < Be.length; De++) {
                                var Ge = Be[De];
                                Ge.nodeType === Node.TEXT_NODE && Ge.remove();
                              }
                          else X(A, "aria-multiline");
                          ee(ie, Z) ? K(A, "aria-modal", "true") : X(A, "aria-modal");
                        }),
                        (ae.prototype.applyPosition = function (A, j, V, O) {
                          var H = this._artboardBounds,
                            ie = Math.max(j.minX, H.minX),
                            Z = Math.max(j.minY, H.minY),
                            ye = Math.min(j.maxX, H.maxX),
                            Ee = Math.min(j.maxY, H.maxY),
                            Se = ie - V,
                            Ie = Z - O,
                            Ve = Math.max(0, ye - ie),
                            Ne = Math.max(0, Ee - Z),
                            He = Math.round(Se),
                            Fe = Math.round(Ie),
                            Re = Math.round(Ve) + "px",
                            me = Math.round(Ne) + "px",
                            De = He + "px",
                            Be = Fe + "px";
                          A.style.left !== De && (A.style.left = De),
                            A.style.top !== Be && (A.style.top = Be),
                            A.style.width !== Re && (A.style.width = Re),
                            A.style.height !== me && (A.style.height = me),
                            A.style.transform && (A.style.transform = ""),
                            j.role === M.SemanticRole.text && this.pendingTextGeometry.push(A);
                        }),
                        (ae.prototype.flushTextGeometry = function () {
                          var A;
                          if (this.pendingTextGeometry.length !== 0) {
                            for (var j = [], V = 0, O = this.pendingTextGeometry; V < O.length; V++) {
                              var H = O[V],
                                ie = (A = H.querySelector(":scope > span")) !== null && A !== void 0 ? A : H,
                                Z = ""
                                  .concat(H.style.width, "|")
                                  .concat(H.style.height, "|")
                                  .concat(ie.textContent);
                              this.textGeometryKeys.get(H) !== Z &&
                                ((ie.style.width = "auto"),
                                (ie.style.height = "auto"),
                                (ie.style.transformOrigin = "0 0"),
                                (ie.style.transform = ""),
                                j.push({ host: H, span: ie, key: Z }));
                            }
                            this.pendingTextGeometry.length = 0;
                            for (
                              var ye = j.map(function (Ie) {
                                  var Ve = Ie.host,
                                    Ne = Ie.span,
                                    He = Ve.getBoundingClientRect(),
                                    Fe = Ne.getBoundingClientRect();
                                  if (Fe.width > 0 && Fe.height > 0) {
                                    var Re = He.width / Fe.width,
                                      me = He.height / Fe.height;
                                    return "scale(".concat(Re, ", ").concat(me, ")");
                                  }
                                  return "none";
                                }),
                                Ee = 0;
                              Ee < j.length;
                              Ee++
                            ) {
                              var Se = j[Ee],
                                H = Se.host,
                                ie = Se.span,
                                Z = Se.key;
                              (ie.style.transform = ye[Ee]), this.textGeometryKeys.set(H, Z);
                            }
                          }
                        }),
                        (ae.prototype.syncTransformContainer = function (A, j, V) {
                          if (!this.transformContainer) {
                            var O = document.createElement("div");
                            (O.style.cssText = [
                              "position:absolute",
                              "top:0",
                              "left:0",
                              "overflow:visible",
                              "pointer-events:none",
                              "transform-origin:0 0",
                            ].join(";")),
                              this.container.appendChild(O),
                              (this.transformContainer = O);
                          }
                          var H = V.maxX - V.minX,
                            ie = V.maxY - V.minY;
                          (this.transformContainer.style.width = Math.round(H) + "px"),
                            (this.transformContainer.style.height = Math.round(ie) + "px");
                          var Z = this.lastCanvasPositioning.width,
                            ye = this.lastCanvasPositioning.height,
                            Ee = 1 / (j || 1),
                            Se = this.canvas.width > 0 && Z > 0 ? Z / this.canvas.width : Ee,
                            Ie = this.canvas.height > 0 && ye > 0 ? ye / this.canvas.height : Ee,
                            Ve = A.xx * Se,
                            Ne = A.xy * Ie,
                            He = A.yx * Se,
                            Fe = A.yy * Ie,
                            Re = A.tx * Se,
                            me = A.ty * Ie;
                          this.transformContainer.style.transform = "matrix("
                            .concat(Ve, ",")
                            .concat(Ne, ",")
                            .concat(He, ",")
                            .concat(Fe, ",")
                            .concat(Re, ",")
                            .concat(me, ")");
                        }),
                        ae
                      );
                    })(),
                    le = new Set([
                      M.SemanticRole.button,
                      M.SemanticRole.link,
                      M.SemanticRole.checkbox,
                      M.SemanticRole.switchControl,
                      M.SemanticRole.tab,
                    ]),
                    J = new Set([M.SemanticRole.tab]),
                    ne = new Set([
                      M.SemanticRole.checkbox,
                      M.SemanticRole.radioButton,
                      M.SemanticRole.switchControl,
                    ]),
                    U = new Set([M.SemanticRole.checkbox]),
                    D = new Set([M.SemanticRole.button]),
                    B = new Set([
                      M.SemanticRole.checkbox,
                      M.SemanticRole.textField,
                      M.SemanticRole.radioGroup,
                    ]),
                    Q = [
                      "position:absolute",
                      "width:1px",
                      "height:1px",
                      "overflow:hidden",
                      "pointer-events:none",
                      "left:-9999px",
                    ].join(";"),
                    pe = [
                      "position:absolute",
                      "pointer-events:none",
                      "box-sizing:border-box",
                      "overflow:visible",
                      "margin:0",
                      "padding:0",
                      "transform-origin: 0px 0px 0px",
                      "border:none",
                      "background:transparent",
                      "color:transparent",
                    ].join(";"),
                    _e = ["display:inline-block", "white-space:nowrap", "pointer-events:none"].join(";");
                  function K(ae, A, j) {
                    ae.getAttribute(A) !== j && ae.setAttribute(A, j);
                  }
                  function X(ae, A) {
                    ae.hasAttribute(A) && ae.removeAttribute(A);
                  }
                  function te(ae, A, j) {
                    K(ae, A, j ? "true" : "false");
                  }
                  function Y(ae) {
                    switch (ae) {
                      case M.SemanticRole.button:
                      case M.SemanticRole.link:
                      case M.SemanticRole.checkbox:
                      case M.SemanticRole.switchControl:
                      case M.SemanticRole.tab:
                      case M.SemanticRole.radioButton:
                        return !0;
                      default:
                        return !1;
                    }
                  }
                  function be(ae) {
                    switch (ae) {
                      case M.SemanticRole.button:
                      case M.SemanticRole.link:
                      case M.SemanticRole.checkbox:
                      case M.SemanticRole.switchControl:
                      case M.SemanticRole.slider:
                      case M.SemanticRole.tab:
                      case M.SemanticRole.radioButton:
                      case M.SemanticRole.textField:
                        return !0;
                      default:
                        return !1;
                    }
                  }
                  function ee(ae, A) {
                    return (
                      ae === M.SemanticRole.alertDialog ||
                      (ae === M.SemanticRole.dialog && (0, M.hasState)(A, M.SemanticState.Modal))
                    );
                  }
                  function ze(ae) {
                    return be(ae.role) || (0, M.hasTrait)(ae.traitFlags, M.SemanticTrait.Focusable);
                  }
                  function xe(ae) {
                    switch (ae) {
                      case M.SemanticRole.link:
                        return "a";
                      case M.SemanticRole.text:
                        return "div";
                      default:
                        return "div";
                    }
                  }
                  function ke(ae) {
                    switch (ae) {
                      case M.SemanticRole.none:
                        return "group";
                      case M.SemanticRole.button:
                        return "button";
                      case M.SemanticRole.link:
                        return null;
                      case M.SemanticRole.checkbox:
                        return "checkbox";
                      case M.SemanticRole.switchControl:
                        return "switch";
                      case M.SemanticRole.slider:
                        return "slider";
                      case M.SemanticRole.textField:
                        return "textbox";
                      case M.SemanticRole.image:
                        return "img";
                      case M.SemanticRole.group:
                        return "group";
                      case M.SemanticRole.list:
                        return "list";
                      case M.SemanticRole.listItem:
                        return "listitem";
                      case M.SemanticRole.tab:
                        return "tab";
                      case M.SemanticRole.tabList:
                        return "tablist";
                      case M.SemanticRole.dialog:
                        return "dialog";
                      case M.SemanticRole.alertDialog:
                        return "alertdialog";
                      case M.SemanticRole.radioGroup:
                        return "radiogroup";
                      case M.SemanticRole.radioButton:
                        return "radio";
                      case M.SemanticRole.text:
                        return null;
                      default:
                        return null;
                    }
                  }
                },
                (We, ve, re) => {
                  re.r(ve), re.d(ve, { claimKeyEvent: () => P, isKeyEventClaimed: () => M });
                  var oe = new WeakSet();
                  function P(se) {
                    se.preventDefault(), oe.add(se);
                  }
                  function M(se) {
                    return oe.has(se);
                  }
                },
                (We, ve, re) => {
                  re.r(ve), re.d(ve, { canvasOffset: () => oe });
                  function oe(P) {
                    var M = P.offsetTop,
                      se = P.offsetLeft,
                      $ = P.offsetParent;
                    if (!$) return { top: M, left: se };
                    for (var k = P.parentElement; k && k !== $; k = k.parentElement)
                      (M -= k.scrollTop), (se -= k.scrollLeft);
                    return { top: M, left: se };
                  }
                },
                (We, ve, re) => {
                  re.r(ve),
                    re.d(ve, {
                      AudioAssetWrapper: () => se.AudioAssetWrapper,
                      AudioWrapper: () => se.AudioWrapper,
                      BLANK_URL: () => M.BLANK_URL,
                      CustomFileAssetLoaderWrapper: () => se.CustomFileAssetLoaderWrapper,
                      FileAssetWrapper: () => se.FileAssetWrapper,
                      FileFinalizer: () => se.FileFinalizer,
                      FocusSessionState: () => P.FocusSessionState,
                      FontAssetWrapper: () => se.FontAssetWrapper,
                      FontWrapper: () => se.FontWrapper,
                      ImageAssetWrapper: () => se.ImageAssetWrapper,
                      ImageWrapper: () => se.ImageWrapper,
                      KeyboardInteractions: () => P.KeyboardInteractions,
                      RiveFont: () => $.RiveFont,
                      createFinalization: () => se.createFinalization,
                      finalizationRegistry: () => se.finalizationRegistry,
                      registerTouchInteractions: () => oe.registerTouchInteractions,
                      sanitizeUrl: () => M.sanitizeUrl,
                    });
                  var oe = re(13),
                    P = re(14),
                    M = re(17),
                    se = re(18),
                    $ = re(19);
                },
                (We, ve, re) => {
                  re.r(ve), re.d(ve, { registerTouchInteractions: () => le });
                  var oe = void 0,
                    P = 16,
                    M = 1,
                    se = new WeakMap(),
                    $ = function (J, ne, U) {
                      var D,
                        B = [];
                      if (ne)
                        for (var Q = 0; Q < J.length; Q++) {
                          var pe = J[Q];
                          B.push({ clientX: pe.clientX, clientY: pe.clientY, identifier: pe.identifier });
                        }
                      else {
                        var _e =
                          U !== null
                            ? (D = Array.from(J).find(function (K) {
                                return K.identifier === U;
                              })) !== null && D !== void 0
                              ? D
                              : null
                            : J[0];
                        _e && B.push({ clientX: _e.clientX, clientY: _e.clientY, identifier: _e.identifier });
                      }
                      return B;
                    },
                    k = function (J, ne, U, D) {
                      var B,
                        Q = J;
                      return !((B = Q.changedTouches) === null || B === void 0) && B.length
                        ? (!ne && ["touchstart", "touchmove"].includes(J.type) && J.preventDefault(),
                          $(Q.changedTouches, U, D))
                        : [{ clientX: J.clientX, clientY: J.clientY, identifier: 0 }];
                    },
                    le = function (J) {
                      var ne,
                        U = J.canvas,
                        D = J.artboard,
                        B = J.stateMachines,
                        Q = B === void 0 ? [] : B,
                        pe = J.renderer,
                        _e = J.rive,
                        K = J.fit,
                        X = J.alignment,
                        te = J.isTouchScrollEnabled,
                        Y = te === void 0 ? !1 : te,
                        be = J.dispatchPointerExit,
                        ee = be === void 0 ? !0 : be,
                        ze = J.enableMultiTouch,
                        xe = ze === void 0 ? !1 : ze,
                        ke = J.layoutScaleFactor,
                        ae = ke === void 0 ? 1 : ke,
                        A = J.advanceAndDrain,
                        j = J.summonKeyboard,
                        V = J.isTextProxyFocused;
                      if (!U || !Q.length || !pe || !_e || !D || typeof window > "u") return null;
                      for (var O = 0, H = Q; O < H.length; O++) {
                        var ie = H[O];
                        ie.cancelScroll();
                      }
                      var Z = null,
                        ye = !1,
                        Ee =
                          (ne = se.get(U)) !== null && ne !== void 0
                            ? ne
                            : { touches: new Map(), primaryTouchId: null };
                      se.set(U, Ee);
                      var Se = Ee.touches,
                        Ie = function (me) {
                          var De,
                            Be = me.touches,
                            Ge = me.changedTouches;
                          if (Be) {
                            for (var Ze = new Set(), je = 0; je < Be.length; je++) Ze.add(Be[je].identifier);
                            for (
                              var je = 0;
                              je < ((De = Ge?.length) !== null && De !== void 0 ? De : 0);
                              je++
                            )
                              Ze.add(Ge[je].identifier);
                            Se.forEach(function (st, rt) {
                              Ze.has(rt) || Se.delete(rt);
                            }),
                              Ee.primaryTouchId !== null &&
                                !Ze.has(Ee.primaryTouchId) &&
                                (Ee.primaryTouchId = null);
                          }
                        },
                        Ve = function (me, De) {
                          var Be = _e.computeAlignment(
                              K,
                              X,
                              { minX: 0, minY: 0, maxX: me.width, maxY: me.height },
                              D.bounds,
                              ae,
                            ),
                            Ge = new _e.Mat2D();
                          Be.invert(Ge);
                          var Ze = De.map(function (je) {
                            var st = je.clientX,
                              rt = je.clientY,
                              Je = st - me.left,
                              lt = rt - me.top,
                              Te = new _e.Vec2D(Je, lt),
                              Ye = _e.mapXY(Ge, Te),
                              de = { x: Ye.x(), y: Ye.y() };
                            return Ye.delete(), Te.delete(), de;
                          });
                          return Ge.delete(), Be.delete(), Ze;
                        },
                        Ne = function (me) {
                          var De, Be;
                          if (ye && me instanceof MouseEvent) {
                            me.type === "mousedown" && V?.() && me.preventDefault(),
                              me.type == "mouseup" && (ye = !1);
                            return;
                          }
                          (ye = Y && me.type === "touchend" && Z === "touchstart"), (Z = me.type);
                          var Ge = me.currentTarget.getBoundingClientRect();
                          if (
                            ((me.type === "touchstart" || me.type === "touchmove") && Ie(me),
                            !xe && me.type === "touchstart" && Ee.primaryTouchId === null)
                          ) {
                            var Ze = (De = me.changedTouches) === null || De === void 0 ? void 0 : De[0];
                            Ze && (Ee.primaryTouchId = Ze.identifier);
                          }
                          var je = k(me, Y, xe, xe ? null : Ee.primaryTouchId),
                            st = je.filter(function (Xe) {
                              return Xe.clientX || Xe.clientY;
                            });
                          if (
                            (Ve(Ge, st).forEach(function (Xe, Le) {
                              (st[Le].transformedX = Xe.x), (st[Le].transformedY = Xe.y);
                            }),
                            me.type === "touchend")
                          )
                            for (
                              var rt = (Be = me.changedTouches) !== null && Be !== void 0 ? Be : [], Je = 0;
                              Je < rt.length;
                              Je++
                            )
                              Se.delete(rt[Je].identifier);
                          else
                            (me.type === "touchstart" || me.type === "touchmove") &&
                              je.forEach(function (Xe) {
                                var Le = Xe.clientX,
                                  Pt = Xe.clientY,
                                  Ft = Xe.identifier,
                                  m = Se.has(Ft);
                                me.type === "touchstart" && !m
                                  ? Se.set(Ft, { clientX: Le, clientY: Pt })
                                  : m && (Le || Pt) && Se.set(Ft, { clientX: Le, clientY: Pt });
                              });
                          switch (me.type) {
                            case "mouseout":
                              for (
                                var lt = function (Xe) {
                                    ee
                                      ? je.forEach(function (Le) {
                                          Xe.pointerExit(Le.transformedX, Le.transformedY, Le.identifier);
                                        })
                                      : je.forEach(function (Le) {
                                          Xe.pointerMove(Le.transformedX, Le.transformedY, Le.identifier);
                                        });
                                  },
                                  Te = 0,
                                  Ye = Q;
                                Te < Ye.length;
                                Te++
                              ) {
                                var de = Ye[Te];
                                lt(de);
                              }
                              break;
                            case "touchmove":
                            case "mouseover":
                            case "mousemove": {
                              for (
                                var it = function (Xe) {
                                    je.forEach(function (Le) {
                                      Xe.pointerMove(Le.transformedX, Le.transformedY, Le.identifier);
                                    });
                                  },
                                  ot = 0,
                                  St = Q;
                                ot < St.length;
                                ot++
                              ) {
                                var de = St[ot];
                                it(de);
                              }
                              break;
                            }
                            case "touchstart":
                            case "mousedown": {
                              for (
                                var Ke = function (Xe) {
                                    je.forEach(function (Le) {
                                      Xe.pointerDown(Le.transformedX, Le.transformedY, Le.identifier);
                                    });
                                  },
                                  at = 0,
                                  ht = Q;
                                at < ht.length;
                                at++
                              ) {
                                var de = ht[at];
                                Ke(de);
                              }
                              A(0, { pointerDown: !0 });
                              break;
                            }
                            case "touchend": {
                              for (
                                var ut = function (Xe) {
                                    je.forEach(function (Le) {
                                      Xe.pointerUp(Le.transformedX, Le.transformedY, Le.identifier),
                                        Xe.pointerExit(Le.transformedX, Le.transformedY, Le.identifier);
                                    });
                                  },
                                  Rt = 0,
                                  It = Q;
                                Rt < It.length;
                                Rt++
                              ) {
                                var de = It[Rt];
                                ut(de);
                              }
                              A(0),
                                j?.(),
                                !xe &&
                                  je.some(function (Xe) {
                                    return Xe.identifier === Ee.primaryTouchId;
                                  }) &&
                                  (Ee.primaryTouchId = null);
                              break;
                            }
                            case "mouseup": {
                              for (
                                var xt = function (Xe) {
                                    je.forEach(function (Le) {
                                      Xe.pointerUp(Le.transformedX, Le.transformedY, Le.identifier);
                                    });
                                  },
                                  Ct = 0,
                                  ct = Q;
                                Ct < ct.length;
                                Ct++
                              ) {
                                var de = ct[Ct];
                                xt(de);
                              }
                              A(0), j?.();
                              break;
                            }
                          }
                        },
                        He = function (me) {
                          for (
                            var De,
                              Be,
                              Ge = new Set(),
                              Ze = (De = me.changedTouches) !== null && De !== void 0 ? De : [],
                              je = 0;
                            je < Ze.length;
                            je++
                          ) {
                            var st = Ze[je],
                              rt = st.identifier,
                              Je = st.clientX,
                              lt = st.clientY;
                            Se.has(rt) &&
                              (Ge.add(rt), (Je || lt) && Se.set(rt, { clientX: Je, clientY: lt }));
                          }
                          for (
                            var Te = new Set(),
                              Ye = (Be = me.touches) !== null && Be !== void 0 ? Be : [],
                              je = 0;
                            je < Ye.length;
                            je++
                          )
                            Te.add(Ye[je].identifier);
                          if (
                            (Se.forEach(function (ht, ut) {
                              Te.has(ut) || Ge.add(ut);
                            }),
                            (Ee.primaryTouchId === null || Ge.has(Ee.primaryTouchId)) &&
                              (Ee.primaryTouchId = null),
                            !!Ge.size)
                          ) {
                            var de = Array.from(Ge),
                              it = Ve(
                                me.currentTarget.getBoundingClientRect(),
                                de.map(function (ht) {
                                  return Se.get(ht);
                                }),
                              );
                            de.forEach(function (ht) {
                              return Se.delete(ht);
                            });
                            for (
                              var ot = function (ht) {
                                  de.forEach(function (ut, Rt) {
                                    var It = it[Rt],
                                      xt = It.x,
                                      Ct = It.y;
                                    ht.pointerUp(xt, Ct, ut), ht.pointerExit(xt, Ct, ut);
                                  });
                                },
                                St = 0,
                                Ke = Q;
                              St < Ke.length;
                              St++
                            ) {
                              var at = Ke[St];
                              ot(at);
                            }
                            A(0);
                          }
                        },
                        Fe = function (me) {
                          if (!(me.ctrlKey || !me.cancelable)) {
                            var De = me.deltaMode,
                              Be = me.deltaX,
                              Ge = me.deltaY;
                            me.shiftKey && !Be && ((Be = Ge), (Ge = 0));
                            var Ze = me.currentTarget.getBoundingClientRect(),
                              je =
                                De === WheelEvent.DOM_DELTA_LINE
                                  ? P
                                  : De === WheelEvent.DOM_DELTA_PAGE
                                    ? Ze.width
                                    : 1,
                              st =
                                De === WheelEvent.DOM_DELTA_LINE
                                  ? P
                                  : De === WheelEvent.DOM_DELTA_PAGE
                                    ? Ze.height
                                    : 1,
                              rt = -Be * je,
                              Je = -Ge * st;
                            if (!(!rt && !Je)) {
                              var lt = Ve(Ze, [
                                  { clientX: me.clientX, clientY: me.clientY },
                                  { clientX: me.clientX + rt, clientY: me.clientY + Je },
                                ]),
                                Te = lt[0],
                                Ye = lt[1],
                                de = De === WheelEvent.DOM_DELTA_PIXEL,
                                it = me.timeStamp / 1e3,
                                ot = Q.filter(function (at) {
                                  return at.hasScrollLatch();
                                }),
                                St = ot.concat(
                                  Q.filter(function (at) {
                                    return ot.indexOf(at) === -1;
                                  }),
                                ),
                                Ke = St.some(function (at) {
                                  return (
                                    at.pointerScroll(Te.x, Te.y, Ye.x - Te.x, Ye.y - Te.y, M, de, it, 0) !== 0
                                  );
                                });
                              Ke && (me.preventDefault(), A(0));
                            }
                          }
                        },
                        Re = Ne.bind(oe);
                      return (
                        U.addEventListener("mouseover", Re),
                        U.addEventListener("mouseout", Re),
                        U.addEventListener("mousemove", Re),
                        U.addEventListener("mousedown", Re),
                        U.addEventListener("mouseup", Re),
                        U.addEventListener("touchmove", Re, { passive: Y }),
                        U.addEventListener("touchstart", Re, { passive: Y }),
                        U.addEventListener("touchend", Re),
                        U.addEventListener("touchcancel", He),
                        U.addEventListener("wheel", Fe, { passive: !1 }),
                        function () {
                          U.removeEventListener("mouseover", Re),
                            U.removeEventListener("mouseout", Re),
                            U.removeEventListener("mousemove", Re),
                            U.removeEventListener("mousedown", Re),
                            U.removeEventListener("mouseup", Re),
                            U.removeEventListener("touchmove", Re),
                            U.removeEventListener("touchstart", Re),
                            U.removeEventListener("touchend", Re),
                            U.removeEventListener("touchcancel", He),
                            U.removeEventListener("wheel", Fe);
                        }
                      );
                    };
                },
                (We, ve, re) => {
                  re.r(ve), re.d(ve, { FocusSessionState: () => J, KeyboardInteractions: () => ne });
                  var oe = re(15),
                    P = re(10),
                    M = re(16),
                    se = new Set([
                      "Space",
                      "ArrowLeft",
                      "ArrowRight",
                      "ArrowUp",
                      "ArrowDown",
                      "Backspace",
                      "Delete",
                      "Home",
                      "End",
                      "Enter",
                      "NumpadEnter",
                    ]);
                  function $(U) {
                    return U.key.length === 1 && !U.ctrlKey && !U.metaKey;
                  }
                  function k(U) {
                    return U === oe.Key.left || U === oe.Key.right || U === oe.Key.up || U === oe.Key.down;
                  }
                  function le(U) {
                    return U.altKey || U.ctrlKey || U.metaKey;
                  }
                  var J;
                  (function (U) {
                    (U.NotFocused = "notFocused"),
                      (U.EntryPending = "entryPending"),
                      (U.RiveFocused = "riveFocused");
                  })(J || (J = {}));
                  var ne = (function () {
                    function U(D) {
                      var B = D.canvas,
                        Q = D.stateMachine,
                        pe = D.hasFocusNodes,
                        _e = D.getOverlayElement,
                        K = this,
                        X,
                        te;
                      (this.focusSessionState = J.NotFocused),
                        (this.canvasHasFocus = !1),
                        (this.focusDomainReleased = !1),
                        (this.currentOverlayElement = null),
                        (this.claimedKeyCodes = new Set()),
                        (this.textInputSessionActive = !1),
                        (this.onCopy = function (Y) {
                          var be;
                          Y.preventDefault();
                          var ee = K.mainSm.selectedText();
                          ee &&
                            ((be = Y.clipboardData) === null ||
                              be === void 0 ||
                              be.setData("text/plain", ee));
                        }),
                        (this.onCanvasFocus = function (Y) {
                          if (
                            (K.syncOverlayListener(),
                            (K.canvasHasFocus = !0),
                            (K.focusDomainReleased = !1),
                            !(
                              K.isInFocusDomain(Y.relatedTarget) ||
                              !K.hasFocusNodes ||
                              K.mainSm.focusState().hasFocus
                            ) && ((K.focusSessionState = J.EntryPending), !!K.isKeyboardDrivenFocus()))
                          ) {
                            var be = K.cameFromBeforeCanvas(Y.relatedTarget);
                            (be ? K.mainSm.focusNext() : K.mainSm.focusPrevious()) &&
                              (K.focusSessionState = J.RiveFocused);
                          }
                        }),
                        (this.onCanvasBlur = function (Y) {
                          K.inputProxy.owns(Y.relatedTarget) ||
                            ((K.focusSessionState = J.NotFocused),
                            (K.canvasHasFocus = !1),
                            !K.blurStaysWithRive(Y.relatedTarget) && K.mainSm.clearFocus());
                        }),
                        (this.onOverlayFocusIn = function (Y) {
                          K.isInOverlay(Y.target) &&
                            ((K.focusDomainReleased = !1),
                            K.hasFocusNodes &&
                              K.focusSessionState === J.NotFocused &&
                              (K.focusSessionState = K.mainSm.focusState().hasFocus
                                ? J.RiveFocused
                                : J.EntryPending));
                        }),
                        (this.onFocusDomainHostFocusIn = function (Y) {
                          K.syncOverlayListener(),
                            K.onOverlayFocusIn(Y),
                            K.inputProxy.owns(Y.target) && (K.focusDomainReleased = !1);
                        }),
                        (this.onKeyDown = function (Y) {
                          if (
                            (K.syncOverlayListener(),
                            !(Y.isComposing || Y.keyCode === 229) &&
                              !K.focusDomainReleased &&
                              K.shouldRiveHandleKeyEvent(Y))
                          ) {
                            if (Y.key === "Tab" && K.hasFocusNodes) {
                              if (
                                K.mainSm.focusState().hasFocus &&
                                K.mainSm.keyInput(oe.Key.tab, (0, oe.modifiersFromEvent)(Y), !0, Y.repeat)
                              ) {
                                Y.preventDefault();
                                return;
                              }
                              var be = !Y.shiftKey,
                                ee = be ? K.mainSm.focusNext() : K.mainSm.focusPrevious(),
                                ze = K.mainSm.focusState();
                              ee || ze.hasFocus
                                ? ((K.focusSessionState = J.RiveFocused), Y.preventDefault())
                                : (document.activeElement !== K.canvas &&
                                    K.isInFocusDomain(document.activeElement) &&
                                    K.canvas.focus({ preventScroll: !0 }),
                                  (K.focusSessionState = J.NotFocused),
                                  (K.focusDomainReleased = !0),
                                  (K.canvasHasFocus = !1)),
                                K.syncOverlayListener();
                              return;
                            }
                            if ((0, P.isKeyEventClaimed)(Y)) {
                              K.claimedKeyCodes.add(Y.code);
                              return;
                            }
                            K.claimedKeyCodes.delete(Y.code);
                            var xe = K.textInputSessionActive && K.inputProxy.owns(Y.target),
                              ke = K.mainSm.focusState().expectsKeyboardInput,
                              ae = (0, oe.keyboardEventToRiveKey)(Y),
                              A =
                                ae !== null &&
                                K.mainSm.keyInput(ae, (0, oe.modifiersFromEvent)(Y), !0, Y.repeat);
                            if (
                              (!A &&
                                ae !== null &&
                                k(ae) &&
                                !le(Y) &&
                                (A = K.focusInDirection(ae) || K.mainSm.focusState().hasFocus),
                              $(Y))
                            ) {
                              if (xe) return;
                              if (K.textInputSessionActive && K.isInFocusDomain(Y.target)) {
                                K.inputProxy.focus();
                                return;
                              }
                              !K.textInputSessionActive && ke && K.mainSm.textInput(Y.key);
                            }
                            var j = xe || ke;
                            (A || (j && !le(Y) && se.has(Y.code))) && Y.preventDefault();
                          }
                        }),
                        (this.onKeyUp = function (Y) {
                          if (
                            !(Y.isComposing || Y.keyCode === 229) &&
                            !K.claimedKeyCodes.delete(Y.code) &&
                            K.focusSessionState !== J.NotFocused
                          ) {
                            var be = (0, oe.keyboardEventToRiveKey)(Y);
                            be !== null && K.mainSm.keyInput(be, (0, oe.modifiersFromEvent)(Y), !1, !1);
                          }
                        }),
                        (this.canvas = B),
                        (this.mainSm = Q),
                        (this.hasFocusNodes = pe),
                        (this.getOverlayElement = _e),
                        (this.focusDomainHost =
                          (X = B.parentElement) !== null && X !== void 0 ? X : document),
                        B.addEventListener("focus", this.onCanvasFocus),
                        B.addEventListener("blur", this.onCanvasBlur),
                        B.addEventListener("keydown", this.onKeyDown),
                        B.addEventListener("keyup", this.onKeyUp),
                        this.focusDomainHost.addEventListener("focusin", this.onFocusDomainHostFocusIn),
                        this.syncOverlayListener(),
                        (this.inputProxy = new M.TextInputProxy({
                          container: (te = B.parentElement) !== null && te !== void 0 ? te : document.body,
                          canvas: B,
                          textInput: function (Y) {
                            return K.mainSm.textInput(Y);
                          },
                          onKeyDown: this.onKeyDown,
                          onKeyUp: this.onKeyUp,
                          onCopy: this.onCopy,
                          onBlur: function (Y) {
                            return K.handleProxyBlur(Y);
                          },
                        }));
                    }
                    return (
                      (U.prototype.isTextInputSessionActive = function () {
                        return this.textInputSessionActive;
                      }),
                      (U.prototype.isEditingHostFocused = function () {
                        return this.textInputSessionActive && this.inputProxy.hasDomFocus();
                      }),
                      (U.prototype.beginTextInputSession = function (D) {
                        (this.textInputSessionActive = !0),
                          (this.focusSessionState = J.RiveFocused),
                          D && this.inputProxy.focus();
                      }),
                      (U.prototype.endTextInputSession = function (D) {
                        D === void 0 && (D = !1),
                          this.textInputSessionActive &&
                            ((this.textInputSessionActive = !1),
                            this.inputProxy.endSession(),
                            !(D || !this.inputProxy.hasDomFocus()) &&
                              this.canvas.focus({ preventScroll: !0 }));
                      }),
                      (U.prototype.summonForPointer = function () {
                        this.textInputSessionActive
                          ? this.inputProxy.focus()
                          : this.beginTextInputSession(!0);
                      }),
                      Object.defineProperty(U.prototype, "editingHost", {
                        get: function () {
                          return this.inputProxy;
                        },
                        enumerable: !1,
                        configurable: !0,
                      }),
                      (U.prototype.handleProxyBlur = function (D) {
                        this.textInputSessionActive &&
                          (this.blurStaysWithRive(D) ||
                            (this.mainSm.clearFocus(),
                            this.endTextInputSession(!0),
                            (this.focusSessionState = J.NotFocused)));
                      }),
                      (U.prototype.setFocusSessionState = function (D) {
                        this.focusSessionState = D;
                      }),
                      (U.prototype.notifyRiveFocused = function () {
                        this.focusSessionState = J.RiveFocused;
                      }),
                      (U.prototype.blurStaysWithRive = function (D) {
                        return this.isInFocusDomain(D) || (D === null && !document.hasFocus());
                      }),
                      (U.prototype.focusInDirection = function (D) {
                        switch (D) {
                          case oe.Key.left:
                            return this.mainSm.focusLeft();
                          case oe.Key.right:
                            return this.mainSm.focusRight();
                          case oe.Key.up:
                            return this.mainSm.focusUp();
                          case oe.Key.down:
                            return this.mainSm.focusDown();
                          default:
                            return !1;
                        }
                      }),
                      (U.prototype.shouldRiveHandleKeyEvent = function (D) {
                        if (this.focusSessionState === J.NotFocused) return !1;
                        var B = this.isInFocusDomain(document.activeElement) || this.isInOverlay(D.target),
                          Q = D.target === this.canvas;
                        return B || this.canvasHasFocus || Q;
                      }),
                      (U.prototype.isInFocusDomain = function (D) {
                        return D === this.canvas || this.inputProxy.owns(D) ? !0 : this.isInOverlay(D);
                      }),
                      (U.prototype.isInOverlay = function (D) {
                        var B, Q, pe;
                        return D instanceof Node &&
                          (pe =
                            (Q =
                              (B = this.getOverlayElement) === null || B === void 0
                                ? void 0
                                : B.call(this)) === null || Q === void 0
                              ? void 0
                              : Q.contains(D)) !== null &&
                          pe !== void 0
                          ? pe
                          : !1;
                      }),
                      (U.prototype.syncOverlayListener = function () {
                        var D,
                          B,
                          Q,
                          pe,
                          _e,
                          K,
                          X,
                          te,
                          Y =
                            (B =
                              (D = this.getOverlayElement) === null || D === void 0
                                ? void 0
                                : D.call(this)) !== null && B !== void 0
                              ? B
                              : null;
                        Y !== this.currentOverlayElement &&
                          ((Q = this.currentOverlayElement) === null ||
                            Q === void 0 ||
                            Q.removeEventListener("focusin", this.onOverlayFocusIn),
                          (pe = this.currentOverlayElement) === null ||
                            pe === void 0 ||
                            pe.removeEventListener("keydown", this.onKeyDown),
                          (_e = this.currentOverlayElement) === null ||
                            _e === void 0 ||
                            _e.removeEventListener("keyup", this.onKeyUp),
                          (this.currentOverlayElement = Y),
                          (K = this.currentOverlayElement) === null ||
                            K === void 0 ||
                            K.addEventListener("focusin", this.onOverlayFocusIn),
                          (X = this.currentOverlayElement) === null ||
                            X === void 0 ||
                            X.addEventListener("keydown", this.onKeyDown),
                          (te = this.currentOverlayElement) === null ||
                            te === void 0 ||
                            te.addEventListener("keyup", this.onKeyUp));
                      }),
                      (U.prototype.isKeyboardDrivenFocus = function () {
                        try {
                          return this.canvas.matches(":focus-visible");
                        } catch {
                          return !1;
                        }
                      }),
                      (U.prototype.cameFromBeforeCanvas = function (D) {
                        if (!D) return !0;
                        var B = this.canvas.compareDocumentPosition(D);
                        return B & Node.DOCUMENT_POSITION_PRECEDING
                          ? !0
                          : !(B & Node.DOCUMENT_POSITION_FOLLOWING);
                      }),
                      (U.prototype.cleanup = function () {
                        var D, B, Q;
                        this.canvas.removeEventListener("focus", this.onCanvasFocus),
                          this.canvas.removeEventListener("blur", this.onCanvasBlur),
                          this.canvas.removeEventListener("keydown", this.onKeyDown),
                          this.canvas.removeEventListener("keyup", this.onKeyUp),
                          this.claimedKeyCodes.clear(),
                          this.focusDomainHost.removeEventListener("focusin", this.onFocusDomainHostFocusIn),
                          (D = this.currentOverlayElement) === null ||
                            D === void 0 ||
                            D.removeEventListener("focusin", this.onOverlayFocusIn),
                          (B = this.currentOverlayElement) === null ||
                            B === void 0 ||
                            B.removeEventListener("keydown", this.onKeyDown),
                          (Q = this.currentOverlayElement) === null ||
                            Q === void 0 ||
                            Q.removeEventListener("keyup", this.onKeyUp),
                          this.inputProxy.hasDomFocus() && this.canvas.focus({ preventScroll: !0 }),
                          this.inputProxy.cleanup(),
                          (this.textInputSessionActive = !1);
                      }),
                      U
                    );
                  })();
                },
                (We, ve, re) => {
                  re.r(ve),
                    re.d(ve, {
                      Key: () => P,
                      KeyModifiers: () => M,
                      keyboardEventToRiveKey: () => le,
                      modifiersFromEvent: () => J,
                    });
                  var oe = function (ne, U, D) {
                      for (var B = 0, Q = U.length, pe; B < Q; B++)
                        (pe || !(B in U)) &&
                          (pe || (pe = Array.prototype.slice.call(U, 0, B)), (pe[B] = U[B]));
                      return ne.concat(pe || Array.prototype.slice.call(U));
                    },
                    P = {
                      space: 32,
                      apostrophe: 39,
                      comma: 44,
                      minus: 45,
                      period: 46,
                      slash: 47,
                      key0: 48,
                      key1: 49,
                      key2: 50,
                      key3: 51,
                      key4: 52,
                      key5: 53,
                      key6: 54,
                      key7: 55,
                      key8: 56,
                      key9: 57,
                      semicolon: 59,
                      equal: 61,
                      a: 65,
                      b: 66,
                      c: 67,
                      d: 68,
                      e: 69,
                      f: 70,
                      g: 71,
                      h: 72,
                      i: 73,
                      j: 74,
                      k: 75,
                      l: 76,
                      m: 77,
                      n: 78,
                      o: 79,
                      p: 80,
                      q: 81,
                      r: 82,
                      s: 83,
                      t: 84,
                      u: 85,
                      v: 86,
                      w: 87,
                      x: 88,
                      y: 89,
                      z: 90,
                      leftBracket: 91,
                      backslash: 92,
                      rightBracket: 93,
                      graveAccent: 96,
                      world1: 161,
                      world2: 162,
                      escape: 256,
                      enter: 257,
                      tab: 258,
                      backspace: 259,
                      insert: 260,
                      deleteKey: 261,
                      right: 262,
                      left: 263,
                      down: 264,
                      up: 265,
                      pageUp: 266,
                      pageDown: 267,
                      home: 268,
                      end: 269,
                      capsLock: 280,
                      scrollLock: 281,
                      numLock: 282,
                      printScreen: 283,
                      pause: 284,
                      f1: 290,
                      f2: 291,
                      f3: 292,
                      f4: 293,
                      f5: 294,
                      f6: 295,
                      f7: 296,
                      f8: 297,
                      f9: 298,
                      f10: 299,
                      f11: 300,
                      f12: 301,
                      f13: 302,
                      f14: 303,
                      f15: 304,
                      f16: 305,
                      f17: 306,
                      f18: 307,
                      f19: 308,
                      f20: 309,
                      f21: 310,
                      f22: 311,
                      f23: 312,
                      f24: 313,
                      f25: 314,
                      kp0: 320,
                      kp1: 321,
                      kp2: 322,
                      kp3: 323,
                      kp4: 324,
                      kp5: 325,
                      kp6: 326,
                      kp7: 327,
                      kp8: 328,
                      kp9: 329,
                      kpDecimal: 330,
                      kpDivide: 331,
                      kpMultiply: 332,
                      kpSubtract: 333,
                      kpAdd: 334,
                      kpEnter: 335,
                      kpEqual: 336,
                      leftShift: 340,
                      leftControl: 341,
                      leftAlt: 342,
                      leftSuper: 343,
                      rightShift: 344,
                      rightControl: 345,
                      rightAlt: 346,
                      rightSuper: 347,
                      menu: 348,
                    },
                    M = { none: 0, shift: 1, ctrl: 2, alt: 4, meta: 8 },
                    se = {
                      ShiftLeft: P.leftShift,
                      ShiftRight: P.rightShift,
                      ControlLeft: P.leftControl,
                      ControlRight: P.rightControl,
                      AltLeft: P.leftAlt,
                      AltRight: P.rightAlt,
                      MetaLeft: P.leftSuper,
                      MetaRight: P.rightSuper,
                      KeyA: P.a,
                      KeyB: P.b,
                      KeyC: P.c,
                      KeyD: P.d,
                      KeyE: P.e,
                      KeyF: P.f,
                      KeyG: P.g,
                      KeyH: P.h,
                      KeyI: P.i,
                      KeyJ: P.j,
                      KeyK: P.k,
                      KeyL: P.l,
                      KeyM: P.m,
                      KeyN: P.n,
                      KeyO: P.o,
                      KeyP: P.p,
                      KeyQ: P.q,
                      KeyR: P.r,
                      KeyS: P.s,
                      KeyT: P.t,
                      KeyU: P.u,
                      KeyV: P.v,
                      KeyW: P.w,
                      KeyX: P.x,
                      KeyY: P.y,
                      KeyZ: P.z,
                      Digit0: P.key0,
                      Digit1: P.key1,
                      Digit2: P.key2,
                      Digit3: P.key3,
                      Digit4: P.key4,
                      Digit5: P.key5,
                      Digit6: P.key6,
                      Digit7: P.key7,
                      Digit8: P.key8,
                      Digit9: P.key9,
                      Numpad0: P.kp0,
                      Numpad1: P.kp1,
                      Numpad2: P.kp2,
                      Numpad3: P.kp3,
                      Numpad4: P.kp4,
                      Numpad5: P.kp5,
                      Numpad6: P.kp6,
                      Numpad7: P.kp7,
                      Numpad8: P.kp8,
                      Numpad9: P.kp9,
                      NumpadDecimal: P.kpDecimal,
                      NumpadDivide: P.kpDivide,
                      NumpadMultiply: P.kpMultiply,
                      NumpadSubtract: P.kpSubtract,
                      NumpadAdd: P.kpAdd,
                      NumpadEnter: P.kpEnter,
                      NumpadEqual: P.kpEqual,
                      Minus: P.minus,
                      Equal: P.equal,
                      BracketLeft: P.leftBracket,
                      BracketRight: P.rightBracket,
                      Backslash: P.backslash,
                      Semicolon: P.semicolon,
                      Quote: P.apostrophe,
                      Backquote: P.graveAccent,
                      Comma: P.comma,
                      Period: P.period,
                      Slash: P.slash,
                      IntlBackslash: P.world1,
                      IntlRo: P.world2,
                      Space: P.space,
                      Enter: P.enter,
                      Tab: P.tab,
                      Backspace: P.backspace,
                      Insert: P.insert,
                      Delete: P.deleteKey,
                      Escape: P.escape,
                      ArrowRight: P.right,
                      ArrowLeft: P.left,
                      ArrowDown: P.down,
                      ArrowUp: P.up,
                      PageUp: P.pageUp,
                      PageDown: P.pageDown,
                      Home: P.home,
                      End: P.end,
                      CapsLock: P.capsLock,
                      ScrollLock: P.scrollLock,
                      NumLock: P.numLock,
                      PrintScreen: P.printScreen,
                      Pause: P.pause,
                      ContextMenu: P.menu,
                      F1: P.f1,
                      F2: P.f2,
                      F3: P.f3,
                      F4: P.f4,
                      F5: P.f5,
                      F6: P.f6,
                      F7: P.f7,
                      F8: P.f8,
                      F9: P.f9,
                      F10: P.f10,
                      F11: P.f11,
                      F12: P.f12,
                      F13: P.f13,
                      F14: P.f14,
                      F15: P.f15,
                      F16: P.f16,
                      F17: P.f17,
                      F18: P.f18,
                      F19: P.f19,
                      F20: P.f20,
                      F21: P.f21,
                      F22: P.f22,
                      F23: P.f23,
                      F24: P.f24,
                      F25: P.f25,
                    },
                    $ = (function () {
                      for (
                        var ne = {
                            " ": P.space,
                            "'": P.apostrophe,
                            ",": P.comma,
                            "-": P.minus,
                            ".": P.period,
                            "../shop/": P.slash,
                            ";": P.semicolon,
                            "=": P.equal,
                            "[": P.leftBracket,
                            "\\": P.backslash,
                            "]": P.rightBracket,
                            "`": P.graveAccent,
                          },
                          U = 0;
                        U < 26;
                        U++
                      )
                        ne[String.fromCharCode(97 + U)] = P.a + U;
                      for (var D = 0; D <= 9; D++) ne[String(D)] = P.key0 + D;
                      return ne;
                    })(),
                    k = new Set(
                      oe(
                        [
                          "Enter",
                          "Tab",
                          "Backspace",
                          "Insert",
                          "Delete",
                          "Escape",
                          "ArrowRight",
                          "ArrowLeft",
                          "ArrowDown",
                          "ArrowUp",
                          "PageUp",
                          "PageDown",
                          "Home",
                          "End",
                          "CapsLock",
                          "ScrollLock",
                          "NumLock",
                          "PrintScreen",
                          "Pause",
                          "ContextMenu",
                        ],
                        Array.from({ length: 25 }, function (ne, U) {
                          return "F".concat(U + 1);
                        }),
                      ),
                    );
                  function le(ne) {
                    var U,
                      D,
                      B = ne.code,
                      Q = ne.key;
                    if (k.has(Q))
                      return B === "NumpadEnter"
                        ? P.kpEnter
                        : (U = se[Q]) !== null && U !== void 0
                          ? U
                          : null;
                    if (!B.startsWith("Digit") && !B.startsWith("Numpad") && Q) {
                      var pe = $[Q.toLowerCase()];
                      if (pe !== void 0) return pe;
                    }
                    return (D = se[B]) !== null && D !== void 0 ? D : null;
                  }
                  function J(ne) {
                    var U = M.none;
                    return (
                      ne.shiftKey && (U |= M.shift),
                      ne.ctrlKey && (U |= M.ctrl),
                      ne.altKey && (U |= M.alt),
                      ne.metaKey && (U |= M.meta),
                      U
                    );
                  }
                },
                (We, ve, re) => {
                  re.r(ve), re.d(ve, { TextInputProxy: () => se });
                  var oe = re(11),
                    P = 16,
                    M = new Set([
                      "type",
                      "value",
                      "style",
                      "tabindex",
                      "autocapitalize",
                      "autocomplete",
                      "autocorrect",
                      "spellcheck",
                    ]),
                    se = (function () {
                      function k(le) {
                        var J = this;
                        (this.composing = !1),
                          (this.decoratedKeys = new Set()),
                          (this.lastLeft = NaN),
                          (this.lastTop = NaN),
                          (this.reposition = function () {
                            return J.positionOverCanvas();
                          }),
                          (this.onCompositionStart = function () {
                            J.composing = !0;
                          }),
                          (this.onCompositionEnd = function () {
                            (J.composing = !1), J.commit();
                          }),
                          (this.onInput = function () {
                            J.composing || J.commit();
                          }),
                          (this.onPaste = function (ne) {
                            var U,
                              D =
                                (U = ne.clipboardData) === null || U === void 0
                                  ? void 0
                                  : U.getData("text/plain");
                            D &&
                              (ne.preventDefault(),
                              J.params.textInput(
                                D.replace(
                                  /\r\n?/g,
                                  `
`,
                                ),
                              ));
                          }),
                          (this.onBlur = function (ne) {
                            J.params.onBlur(ne.relatedTarget);
                          }),
                          (this.params = le),
                          (this.element = this.createElement()),
                          this.positionOverCanvas(),
                          this.params.container.appendChild(this.element);
                      }
                      return (
                        (k.prototype.listeners = function () {
                          return [
                            ["keydown", this.reposition],
                            ["beforeinput", this.reposition],
                            ["keydown", this.params.onKeyDown],
                            ["keyup", this.params.onKeyUp],
                            ["input", this.onInput],
                            ["compositionstart", this.onCompositionStart],
                            ["compositionend", this.onCompositionEnd],
                            ["paste", this.onPaste],
                            ["copy", this.params.onCopy],
                            ["blur", this.onBlur],
                          ];
                        }),
                        (k.prototype.createElement = function () {
                          var le = document.createElement("input");
                          (le.type = "text"),
                            (le.tabIndex = -1),
                            le.setAttribute("aria-hidden", "true"),
                            le.setAttribute("autocapitalize", "off"),
                            le.setAttribute("autocomplete", "off"),
                            le.setAttribute("autocorrect", "off"),
                            (le.spellcheck = !1),
                            (le.style.cssText =
                              "position:absolute;width:1px;height:1px;padding:0;margin:0;border:0;outline:none;opacity:0;background:transparent;color:transparent;caret-color:transparent;overflow:hidden;resize:none;z-index:0;pointer-events:none;" +
                              "font-size:".concat(P, "px;line-height:1;"));
                          for (var J = 0, ne = this.listeners(); J < ne.length; J++) {
                            var U = ne[J],
                              D = U[0],
                              B = U[1];
                            le.addEventListener(D, B);
                          }
                          return le;
                        }),
                        (k.prototype.positionOverCanvas = function () {
                          var le = (0, oe.canvasOffset)(this.params.canvas),
                            J = le.top,
                            ne = le.left;
                          if (window.innerHeight > 0) {
                            var U = this.params.canvas.getBoundingClientRect();
                            (J += $(U.top, 0, window.innerHeight - P) - U.top),
                              (ne += $(U.left, 0, window.innerWidth - P) - U.left);
                          }
                          ne !== this.lastLeft &&
                            ((this.element.style.left = "".concat(ne, "px")), (this.lastLeft = ne)),
                            J !== this.lastTop &&
                              ((this.element.style.top = "".concat(J, "px")), (this.lastTop = J));
                        }),
                        (k.prototype.commit = function () {
                          var le = this.element.value;
                          le && ((this.element.value = ""), this.params.textInput(le));
                        }),
                        (k.prototype.endSession = function () {
                          (this.element.value = ""), (this.composing = !1), this.resetDecoration();
                        }),
                        (k.prototype.focus = function () {
                          this.positionOverCanvas(), this.element.focus({ preventScroll: !0 });
                        }),
                        (k.prototype.hasDomFocus = function () {
                          return document.activeElement === this.element;
                        }),
                        (k.prototype.owns = function (le) {
                          return le === this.element;
                        }),
                        (k.prototype.decorate = function (le) {
                          this.element.removeAttribute("aria-hidden");
                          for (var J = 0, ne = Object.entries(le); J < ne.length; J++) {
                            var U = ne[J],
                              D = U[0],
                              B = U[1];
                            M.has(D.toLowerCase()) ||
                              (B === null
                                ? (this.element.removeAttribute(D), this.decoratedKeys.delete(D))
                                : (this.element.getAttribute(D) !== B && this.element.setAttribute(D, B),
                                  this.decoratedKeys.add(D)));
                          }
                        }),
                        (k.prototype.setSecure = function (le) {
                          var J = le ? "password" : "text";
                          this.element.type !== J && (this.element.type = J);
                        }),
                        (k.prototype.resetDecoration = function () {
                          var le = this;
                          this.setSecure(!1),
                            this.decoratedKeys.forEach(function (J) {
                              return le.element.removeAttribute(J);
                            }),
                            this.decoratedKeys.clear(),
                            this.element.setAttribute("aria-hidden", "true");
                        }),
                        (k.prototype.cleanup = function () {
                          for (var le = 0, J = this.listeners(); le < J.length; le++) {
                            var ne = J[le],
                              U = ne[0],
                              D = ne[1];
                            this.element.removeEventListener(U, D);
                          }
                          this.element.remove();
                        }),
                        k
                      );
                    })();
                  function $(k, le, J) {
                    return Math.min(Math.max(k, le), Math.max(le, J));
                  }
                },
                (We, ve, re) => {
                  re.r(ve), re.d(ve, { BLANK_URL: () => le, sanitizeUrl: () => U });
                  var oe = /^([^\w]*)(javascript|data|vbscript)/im,
                    P = /&#(\w+)(^\w|;)?/g,
                    M = /&(newline|tab);/gi,
                    se = /[\u0000-\u001F\u007F-\u009F\u2000-\u200D\uFEFF]/gim,
                    $ = /^.+(:|&colon;)/gim,
                    k = [".", "../shop/"],
                    le = "about:blank";
                  function J(D) {
                    return k.indexOf(D[0]) > -1;
                  }
                  function ne(D) {
                    var B = D.replace(se, "");
                    return B.replace(P, function (Q, pe) {
                      return String.fromCharCode(pe);
                    });
                  }
                  function U(D) {
                    if (!D) return le;
                    var B = ne(D).replace(M, "").replace(se, "").trim();
                    if (!B) return le;
                    if (J(B)) return B;
                    var Q = B.match($);
                    if (!Q) return B;
                    var pe = Q[0];
                    return oe.test(pe) ? le : B;
                  }
                },
                (We, ve, re) => {
                  re.r(ve),
                    re.d(ve, {
                      AudioAssetWrapper: () => D,
                      AudioWrapper: () => k,
                      CustomFileAssetLoaderWrapper: () => J,
                      FileAssetWrapper: () => ne,
                      FileFinalizer: () => P,
                      FontAssetWrapper: () => B,
                      FontWrapper: () => le,
                      ImageAssetWrapper: () => U,
                      ImageWrapper: () => $,
                      createFinalization: () => K,
                      finalizationRegistry: () => _e,
                    });
                  var oe = (function () {
                      var X = function (te, Y) {
                        return (
                          (X =
                            Object.setPrototypeOf ||
                            ({ __proto__: [] } instanceof Array &&
                              function (be, ee) {
                                be.__proto__ = ee;
                              }) ||
                            function (be, ee) {
                              for (var ze in ee)
                                Object.prototype.hasOwnProperty.call(ee, ze) && (be[ze] = ee[ze]);
                            }),
                          X(te, Y)
                        );
                      };
                      return function (te, Y) {
                        if (typeof Y != "function" && Y !== null)
                          throw new TypeError(
                            "Class extends value " + String(Y) + " is not a constructor or null",
                          );
                        X(te, Y);
                        function be() {
                          this.constructor = te;
                        }
                        te.prototype =
                          Y === null ? Object.create(Y) : ((be.prototype = Y.prototype), new be());
                      };
                    })(),
                    P = (function () {
                      function X(te, Y) {
                        Y === void 0 && (Y = null),
                          (this.selfUnref = !1),
                          (this._file = te),
                          (this._session = Y);
                      }
                      return (
                        (X.prototype.unref = function () {
                          this._file && this._file.unref(),
                            this._session && (this._session.delete(), (this._session = null));
                        }),
                        (X.prototype.release = function () {
                          (this._file = null), (this._session = null);
                        }),
                        X
                      );
                    })(),
                    M = (function () {
                      function X(te) {
                        this._finalizableObject = te;
                      }
                      return (
                        (X.prototype.unref = function () {
                          this._finalizableObject.unref();
                        }),
                        X
                      );
                    })(),
                    se = (function () {
                      function X() {
                        this.selfUnref = !1;
                      }
                      return (X.prototype.unref = function () {}), X;
                    })(),
                    $ = (function (X) {
                      oe(te, X);
                      function te(Y) {
                        var be = X.call(this) || this;
                        return (be._nativeImage = Y), be;
                      }
                      return (
                        Object.defineProperty(te.prototype, "nativeImage", {
                          get: function () {
                            return this._nativeImage;
                          },
                          enumerable: !1,
                          configurable: !0,
                        }),
                        (te.prototype.unref = function () {
                          this.selfUnref && this._nativeImage.unref();
                        }),
                        te
                      );
                    })(se),
                    k = (function (X) {
                      oe(te, X);
                      function te(Y) {
                        var be = X.call(this) || this;
                        return (be._nativeAudio = Y), be;
                      }
                      return (
                        Object.defineProperty(te.prototype, "nativeAudio", {
                          get: function () {
                            return this._nativeAudio;
                          },
                          enumerable: !1,
                          configurable: !0,
                        }),
                        (te.prototype.unref = function () {
                          this.selfUnref && this._nativeAudio.unref();
                        }),
                        te
                      );
                    })(se),
                    le = (function (X) {
                      oe(te, X);
                      function te(Y) {
                        var be = X.call(this) || this;
                        return (be._nativeFont = Y), be;
                      }
                      return (
                        Object.defineProperty(te.prototype, "nativeFont", {
                          get: function () {
                            return this._nativeFont;
                          },
                          enumerable: !1,
                          configurable: !0,
                        }),
                        (te.prototype.unref = function () {
                          this.selfUnref && this._nativeFont.unref();
                        }),
                        te
                      );
                    })(se),
                    J = (function () {
                      function X(te, Y, be) {
                        be === void 0 && (be = null),
                          (this._assetLoaderCallback = Y),
                          (this._session = be),
                          (this.assetLoader = new te.CustomFileAssetLoader({
                            loadContents: this.loadContents.bind(this),
                          }));
                      }
                      return (
                        (X.prototype.loadContents = function (te, Y) {
                          var be;
                          if (te.isImage) be = new U(te, this._session);
                          else if (te.isAudio) be = new D(te, this._session);
                          else if (te.isFont) be = new B(te, this._session);
                          else return !1;
                          return this._assetLoaderCallback(be, Y);
                        }),
                        X
                      );
                    })(),
                    ne = (function () {
                      function X(te, Y) {
                        Y === void 0 && (Y = null), (this._nativeFileAsset = te), (this._session = Y);
                      }
                      return (
                        (X.prototype.decode = function (te) {
                          this._nativeFileAsset.decode(te, this._session);
                        }),
                        Object.defineProperty(X.prototype, "name", {
                          get: function () {
                            return this._nativeFileAsset.name;
                          },
                          enumerable: !1,
                          configurable: !0,
                        }),
                        Object.defineProperty(X.prototype, "fileExtension", {
                          get: function () {
                            return this._nativeFileAsset.fileExtension;
                          },
                          enumerable: !1,
                          configurable: !0,
                        }),
                        Object.defineProperty(X.prototype, "uniqueFilename", {
                          get: function () {
                            return this._nativeFileAsset.uniqueFilename;
                          },
                          enumerable: !1,
                          configurable: !0,
                        }),
                        Object.defineProperty(X.prototype, "isAudio", {
                          get: function () {
                            return this._nativeFileAsset.isAudio;
                          },
                          enumerable: !1,
                          configurable: !0,
                        }),
                        Object.defineProperty(X.prototype, "isImage", {
                          get: function () {
                            return this._nativeFileAsset.isImage;
                          },
                          enumerable: !1,
                          configurable: !0,
                        }),
                        Object.defineProperty(X.prototype, "isFont", {
                          get: function () {
                            return this._nativeFileAsset.isFont;
                          },
                          enumerable: !1,
                          configurable: !0,
                        }),
                        Object.defineProperty(X.prototype, "cdnUuid", {
                          get: function () {
                            return this._nativeFileAsset.cdnUuid;
                          },
                          enumerable: !1,
                          configurable: !0,
                        }),
                        Object.defineProperty(X.prototype, "nativeFileAsset", {
                          get: function () {
                            return this._nativeFileAsset;
                          },
                          enumerable: !1,
                          configurable: !0,
                        }),
                        X
                      );
                    })(),
                    U = (function (X) {
                      oe(te, X);
                      function te() {
                        return (X !== null && X.apply(this, arguments)) || this;
                      }
                      return (
                        (te.prototype.setRenderImage = function (Y) {
                          this._nativeFileAsset.setRenderImage(Y.nativeImage);
                        }),
                        te
                      );
                    })(ne),
                    D = (function (X) {
                      oe(te, X);
                      function te() {
                        return (X !== null && X.apply(this, arguments)) || this;
                      }
                      return (
                        (te.prototype.setAudioSource = function (Y) {
                          this._nativeFileAsset.setAudioSource(Y.nativeAudio);
                        }),
                        te
                      );
                    })(ne),
                    B = (function (X) {
                      oe(te, X);
                      function te() {
                        return (X !== null && X.apply(this, arguments)) || this;
                      }
                      return (
                        (te.prototype.setFont = function (Y) {
                          this._nativeFileAsset.setFont(Y.nativeFont);
                        }),
                        te
                      );
                    })(ne),
                    Q = (function () {
                      function X(te) {}
                      return (
                        (X.prototype.register = function (te) {
                          te.selfUnref = !0;
                        }),
                        (X.prototype.unregister = function (te) {}),
                        X
                      );
                    })(),
                    pe = typeof FinalizationRegistry < "u" ? FinalizationRegistry : Q,
                    _e = new pe(function (X) {
                      X?.unref();
                    }),
                    K = function (X, te) {
                      var Y = new M(te);
                      _e.register(X, Y);
                    };
                },
                (We, ve, re) => {
                  re.r(ve), re.d(ve, { RiveFont: () => P });
                  var oe = re(3),
                    P = (function () {
                      function M() {}
                      return (
                        (M.setFallbackFontCallback = function (se) {
                          (M._fallbackFontCallback = se ?? null), M._wireFallbackProc();
                        }),
                        (M._fontToPtr = function (se) {
                          var $;
                          if (se == null) return null;
                          var k = se.nativeFont,
                            le = ($ = k?.ptr) === null || $ === void 0 ? void 0 : $.call(k);
                          return le ?? null;
                        }),
                        (M._getFallbackPtr = function (se, $) {
                          return $ < 0 || $ >= se.length ? null : M._fontToPtr(se[$]);
                        }),
                        (M._wireFallbackProc = function () {
                          oe.RuntimeLoader.getInstance(function (se) {
                            var $ = M._fallbackFontCallback;
                            $
                              ? se.setFallbackFontCallback(function (k, le, J) {
                                  var ne = $(k, J);
                                  return ne
                                    ? Array.isArray(ne)
                                      ? M._getFallbackPtr(ne, le)
                                      : le === 0
                                        ? M._fontToPtr(ne)
                                        : null
                                    : null;
                                })
                              : se.setFallbackFontCallback(null);
                          });
                        }),
                        (M._fallbackFontCallback = null),
                        M
                      );
                    })();
                },
              ],
              yt = {};
            function vt(We) {
              var ve = yt[We];
              if (ve !== void 0) return ve.exports;
              var re = (yt[We] = { exports: {} });
              return rr[We](re, re.exports, vt), re.exports;
            }
            (vt.d = (We, ve) => {
              for (var re in ve)
                vt.o(ve, re) &&
                  !vt.o(We, re) &&
                  Object.defineProperty(We, re, { enumerable: !0, get: ve[re] });
            }),
              (vt.o = (We, ve) => Object.prototype.hasOwnProperty.call(We, ve)),
              (vt.r = (We) => {
                typeof Symbol < "u" &&
                  Symbol.toStringTag &&
                  Object.defineProperty(We, Symbol.toStringTag, { value: "Module" }),
                  Object.defineProperty(We, "__esModule", { value: !0 });
              });
            var ur = {};
            return (
              (() => {
                vt.r(ur),
                  vt.d(ur, {
                    Alignment: () => U,
                    DataEnum: () => lt,
                    DataType: () => rt,
                    DeprecationKeys: () => j,
                    DrawOptimizationOptions: () => D,
                    EventType: () => ee,
                    Fit: () => ne,
                    Layout: () => B,
                    LoopType: () => Se,
                    Rive: () => st,
                    RiveEventType: () => _e,
                    RiveFile: () => je,
                    RiveFont: () => oe.RiveFont,
                    RuntimeLoader: () => ve.RuntimeLoader,
                    SemanticMode: () => re.SemanticMode,
                    StateMachineInput: () => pe,
                    StateMachineInputType: () => Q,
                    Testing: () => Xe,
                    ViewModel: () => Je,
                    ViewModelInstance: () => Ye,
                    ViewModelInstanceArtboard: () => xt,
                    ViewModelInstanceAssetFont: () => It,
                    ViewModelInstanceAssetImage: () => Rt,
                    ViewModelInstanceBoolean: () => St,
                    ViewModelInstanceColor: () => ut,
                    ViewModelInstanceEnum: () => at,
                    ViewModelInstanceList: () => ht,
                    ViewModelInstanceNumber: () => ot,
                    ViewModelInstanceString: () => it,
                    ViewModelInstanceTrigger: () => Ke,
                    ViewModelInstanceValue: () => de,
                    decodeAudio: () => Le,
                    decodeFont: () => Ft,
                    decodeImage: () => Pt,
                  });
                var We = vt(1),
                  ve = vt(3),
                  re = vt(6),
                  oe = vt(12),
                  P = (function () {
                    var m = function (i, l) {
                      return (
                        (m =
                          Object.setPrototypeOf ||
                          ({ __proto__: [] } instanceof Array &&
                            function (S, I) {
                              S.__proto__ = I;
                            }) ||
                          function (S, I) {
                            for (var T in I) Object.prototype.hasOwnProperty.call(I, T) && (S[T] = I[T]);
                          }),
                        m(i, l)
                      );
                    };
                    return function (i, l) {
                      if (typeof l != "function" && l !== null)
                        throw new TypeError(
                          "Class extends value " + String(l) + " is not a constructor or null",
                        );
                      m(i, l);
                      function S() {
                        this.constructor = i;
                      }
                      i.prototype = l === null ? Object.create(l) : ((S.prototype = l.prototype), new S());
                    };
                  })(),
                  M = function () {
                    return (
                      (M =
                        Object.assign ||
                        function (m) {
                          for (var i, l = 1, S = arguments.length; l < S; l++) {
                            i = arguments[l];
                            for (var I in i) Object.prototype.hasOwnProperty.call(i, I) && (m[I] = i[I]);
                          }
                          return m;
                        }),
                      M.apply(this, arguments)
                    );
                  },
                  se = function (m, i, l, S) {
                    function I(T) {
                      return T instanceof l
                        ? T
                        : new l(function (z) {
                            z(T);
                          });
                    }
                    return new (l || (l = Promise))(function (T, z) {
                      function ce(Me) {
                        try {
                          he(S.next(Me));
                        } catch (Oe) {
                          z(Oe);
                        }
                      }
                      function fe(Me) {
                        try {
                          he(S.throw(Me));
                        } catch (Oe) {
                          z(Oe);
                        }
                      }
                      function he(Me) {
                        Me.done ? T(Me.value) : I(Me.value).then(ce, fe);
                      }
                      he((S = S.apply(m, [])).next());
                    });
                  },
                  $ = function (m, i) {
                    var l = {
                        label: 0,
                        sent: function () {
                          if (T[0] & 1) throw T[1];
                          return T[1];
                        },
                        trys: [],
                        ops: [],
                      },
                      S,
                      I,
                      T,
                      z = Object.create((typeof Iterator == "function" ? Iterator : Object).prototype);
                    return (
                      (z.next = ce(0)),
                      (z.throw = ce(1)),
                      (z.return = ce(2)),
                      typeof Symbol == "function" &&
                        (z[Symbol.iterator] = function () {
                          return this;
                        }),
                      z
                    );
                    function ce(he) {
                      return function (Me) {
                        return fe([he, Me]);
                      };
                    }
                    function fe(he) {
                      if (S) throw new TypeError("Generator is already executing.");
                      for (; z && ((z = 0), he[0] && (l = 0)), l; )
                        try {
                          if (
                            ((S = 1),
                            I &&
                              (T =
                                he[0] & 2
                                  ? I.return
                                  : he[0]
                                    ? I.throw || ((T = I.return) && T.call(I), 0)
                                    : I.next) &&
                              !(T = T.call(I, he[1])).done)
                          )
                            return T;
                          switch (((I = 0), T && (he = [he[0] & 2, T.value]), he[0])) {
                            case 0:
                            case 1:
                              T = he;
                              break;
                            case 4:
                              return l.label++, { value: he[1], done: !1 };
                            case 5:
                              l.label++, (I = he[1]), (he = [0]);
                              continue;
                            case 7:
                              (he = l.ops.pop()), l.trys.pop();
                              continue;
                            default:
                              if (
                                ((T = l.trys),
                                !(T = T.length > 0 && T[T.length - 1]) && (he[0] === 6 || he[0] === 2))
                              ) {
                                l = 0;
                                continue;
                              }
                              if (he[0] === 3 && (!T || (he[1] > T[0] && he[1] < T[3]))) {
                                l.label = he[1];
                                break;
                              }
                              if (he[0] === 6 && l.label < T[1]) {
                                (l.label = T[1]), (T = he);
                                break;
                              }
                              if (T && l.label < T[2]) {
                                (l.label = T[2]), l.ops.push(he);
                                break;
                              }
                              T[2] && l.ops.pop(), l.trys.pop();
                              continue;
                          }
                          he = i.call(m, l);
                        } catch (Me) {
                          (he = [6, Me]), (I = 0);
                        } finally {
                          S = T = 0;
                        }
                      if (he[0] & 5) throw he[1];
                      return { value: he[0] ? he[1] : void 0, done: !0 };
                    }
                  },
                  k = function (m, i, l) {
                    for (var S = 0, I = i.length, T; S < I; S++)
                      (T || !(S in i)) && (T || (T = Array.prototype.slice.call(i, 0, S)), (T[S] = i[S]));
                    return m.concat(T || Array.prototype.slice.call(i));
                  },
                  le = (function (m) {
                    P(i, m);
                    function i() {
                      var l = (m !== null && m.apply(this, arguments)) || this;
                      return (l.isHandledError = !0), l;
                    }
                    return i;
                  })(Error),
                  J = function (m) {
                    return m && m.isHandledError ? m.message : "Problem loading file; may be corrupt!";
                  },
                  ne;
                (function (m) {
                  (m.Cover = "cover"),
                    (m.Contain = "contain"),
                    (m.Fill = "fill"),
                    (m.FitWidth = "fitWidth"),
                    (m.FitHeight = "fitHeight"),
                    (m.None = "none"),
                    (m.ScaleDown = "scaleDown"),
                    (m.Layout = "layout");
                })(ne || (ne = {}));
                var U;
                (function (m) {
                  (m.Center = "center"),
                    (m.TopLeft = "topLeft"),
                    (m.TopCenter = "topCenter"),
                    (m.TopRight = "topRight"),
                    (m.CenterLeft = "centerLeft"),
                    (m.CenterRight = "centerRight"),
                    (m.BottomLeft = "bottomLeft"),
                    (m.BottomCenter = "bottomCenter"),
                    (m.BottomRight = "bottomRight");
                })(U || (U = {}));
                var D;
                (function (m) {
                  (m.AlwaysDraw = "alwaysDraw"), (m.DrawOnChanged = "drawOnChanged");
                })(D || (D = {}));
                var B = (function () {
                    function m(i) {
                      var l, S, I, T, z, ce, fe;
                      (this.fit = (l = i?.fit) !== null && l !== void 0 ? l : ne.Contain),
                        (this.alignment = (S = i?.alignment) !== null && S !== void 0 ? S : U.Center),
                        (this.layoutScaleFactor =
                          (I = i?.layoutScaleFactor) !== null && I !== void 0 ? I : 1),
                        (this.minX = (T = i?.minX) !== null && T !== void 0 ? T : 0),
                        (this.minY = (z = i?.minY) !== null && z !== void 0 ? z : 0),
                        (this.maxX = (ce = i?.maxX) !== null && ce !== void 0 ? ce : 0),
                        (this.maxY = (fe = i?.maxY) !== null && fe !== void 0 ? fe : 0);
                    }
                    return (
                      (m.new = function (i) {
                        var l = i.fit,
                          S = i.alignment,
                          I = i.minX,
                          T = i.minY,
                          z = i.maxX,
                          ce = i.maxY;
                        return (
                          Z(
                            j.legacyConstructors,
                            "This function is deprecated: please use `new Layout({})` instead",
                          ),
                          new m({ fit: l, alignment: S, minX: I, minY: T, maxX: z, maxY: ce })
                        );
                      }),
                      (m.prototype.copyWith = function (i) {
                        var l = i.fit,
                          S = i.alignment,
                          I = i.layoutScaleFactor,
                          T = i.minX,
                          z = i.minY,
                          ce = i.maxX,
                          fe = i.maxY;
                        return new m({
                          fit: l ?? this.fit,
                          alignment: S ?? this.alignment,
                          layoutScaleFactor: I ?? this.layoutScaleFactor,
                          minX: T ?? this.minX,
                          minY: z ?? this.minY,
                          maxX: ce ?? this.maxX,
                          maxY: fe ?? this.maxY,
                        });
                      }),
                      (m.prototype.runtimeFit = function (i) {
                        if (this.cachedRuntimeFit) return this.cachedRuntimeFit;
                        var l;
                        return (
                          this.fit === ne.Cover
                            ? (l = i.Fit.cover)
                            : this.fit === ne.Contain
                              ? (l = i.Fit.contain)
                              : this.fit === ne.Fill
                                ? (l = i.Fit.fill)
                                : this.fit === ne.FitWidth
                                  ? (l = i.Fit.fitWidth)
                                  : this.fit === ne.FitHeight
                                    ? (l = i.Fit.fitHeight)
                                    : this.fit === ne.ScaleDown
                                      ? (l = i.Fit.scaleDown)
                                      : this.fit === ne.Layout
                                        ? (l = i.Fit.layout)
                                        : (l = i.Fit.none),
                          (this.cachedRuntimeFit = l),
                          l
                        );
                      }),
                      (m.prototype.runtimeAlignment = function (i) {
                        if (this.cachedRuntimeAlignment) return this.cachedRuntimeAlignment;
                        var l;
                        return (
                          this.alignment === U.TopLeft
                            ? (l = i.Alignment.topLeft)
                            : this.alignment === U.TopCenter
                              ? (l = i.Alignment.topCenter)
                              : this.alignment === U.TopRight
                                ? (l = i.Alignment.topRight)
                                : this.alignment === U.CenterLeft
                                  ? (l = i.Alignment.centerLeft)
                                  : this.alignment === U.CenterRight
                                    ? (l = i.Alignment.centerRight)
                                    : this.alignment === U.BottomLeft
                                      ? (l = i.Alignment.bottomLeft)
                                      : this.alignment === U.BottomCenter
                                        ? (l = i.Alignment.bottomCenter)
                                        : this.alignment === U.BottomRight
                                          ? (l = i.Alignment.bottomRight)
                                          : (l = i.Alignment.center),
                          (this.cachedRuntimeAlignment = l),
                          l
                        );
                      }),
                      m
                    );
                  })(),
                  Q;
                (function (m) {
                  (m[(m.Number = 56)] = "Number"),
                    (m[(m.Trigger = 58)] = "Trigger"),
                    (m[(m.Boolean = 59)] = "Boolean");
                })(Q || (Q = {}));
                var pe = (function () {
                    function m(i, l) {
                      (this.type = i), (this.runtimeInput = l);
                    }
                    return (
                      Object.defineProperty(m.prototype, "name", {
                        get: function () {
                          return this.runtimeInput.name;
                        },
                        enumerable: !1,
                        configurable: !0,
                      }),
                      Object.defineProperty(m.prototype, "value", {
                        get: function () {
                          return this.runtimeInput.value;
                        },
                        set: function (i) {
                          this.runtimeInput.value = i;
                        },
                        enumerable: !1,
                        configurable: !0,
                      }),
                      (m.prototype.fire = function () {
                        this.type === Q.Trigger && this.runtimeInput.fire();
                      }),
                      (m.prototype.delete = function () {
                        this.runtimeInput = null;
                      }),
                      m
                    );
                  })(),
                  _e;
                (function (m) {
                  (m[(m.General = 128)] = "General"), (m[(m.OpenUrl = 131)] = "OpenUrl");
                })(_e || (_e = {}));
                var K = (function () {
                    function m(i) {
                      (this.isBindableArtboard = !1), (this.isBindableArtboard = i);
                    }
                    return m;
                  })(),
                  X = (function (m) {
                    P(i, m);
                    function i(l, S) {
                      var I = m.call(this, !1) || this;
                      return (I.nativeArtboard = l), (I.file = S), I;
                    }
                    return i;
                  })(K),
                  te = (function (m) {
                    P(i, m);
                    function i(l) {
                      var S = m.call(this, !0) || this;
                      return (S.selfUnref = !1), (S.nativeArtboard = l), S;
                    }
                    return (
                      Object.defineProperty(i.prototype, "viewModel", {
                        set: function (l) {
                          this.nativeViewModel = l.nativeInstance;
                        },
                        enumerable: !1,
                        configurable: !0,
                      }),
                      (i.prototype.destroy = function () {
                        var l;
                        this.selfUnref &&
                          (this.nativeArtboard.unref(),
                          (l = this.nativeViewModel) === null || l === void 0 || l.unref());
                      }),
                      i
                    );
                  })(K),
                  Y = (function () {
                    function m(i, l, S, I) {
                      (this.stateMachine = i),
                        (this.playing = S),
                        (this.artboard = I),
                        (this.inputs = []),
                        (this.instance = new l.StateMachineInstance(i, I)),
                        this.initInputs(l);
                    }
                    return (
                      Object.defineProperty(m.prototype, "hasFocusNodes", {
                        get: function () {
                          return this.instance.hasFocusNodes();
                        },
                        enumerable: !1,
                        configurable: !0,
                      }),
                      Object.defineProperty(m.prototype, "name", {
                        get: function () {
                          return this.stateMachine.name;
                        },
                        enumerable: !1,
                        configurable: !0,
                      }),
                      Object.defineProperty(m.prototype, "statesChanged", {
                        get: function () {
                          for (var i = [], l = 0; l < this.instance.stateChangedCount(); l++)
                            i.push(this.instance.stateChangedNameByIndex(l));
                          return i;
                        },
                        enumerable: !1,
                        configurable: !0,
                      }),
                      (m.prototype.advance = function (i) {
                        this.instance.advance(i);
                      }),
                      (m.prototype.advanceAndApply = function (i) {
                        this.instance.advanceAndApply(i);
                      }),
                      (m.prototype.enableSemantics = function () {
                        this.instance.enableSemantics();
                      }),
                      (m.prototype.drainSemanticsDiff = function () {
                        return this.instance.drainSemanticsDiff();
                      }),
                      (m.prototype.fireSemanticAction = function (i, l) {
                        this.instance.fireSemanticAction(i, l);
                      }),
                      (m.prototype.focusSemanticNode = function (i) {
                        return this.instance.focusSemanticNode(i);
                      }),
                      (m.prototype.reportedEventCount = function () {
                        return this.instance.reportedEventCount();
                      }),
                      (m.prototype.reportedEventAt = function (i) {
                        return this.instance.reportedEventAt(i);
                      }),
                      (m.prototype.initInputs = function (i) {
                        for (var l = 0; l < this.instance.inputCount(); l++) {
                          var S = this.instance.input(l);
                          this.inputs.push(this.mapRuntimeInput(S, i));
                        }
                      }),
                      (m.prototype.mapRuntimeInput = function (i, l) {
                        if (i.type === l.SMIInput.bool) return new pe(Q.Boolean, i.asBool());
                        if (i.type === l.SMIInput.number) return new pe(Q.Number, i.asNumber());
                        if (i.type === l.SMIInput.trigger) return new pe(Q.Trigger, i.asTrigger());
                      }),
                      (m.prototype.cleanup = function () {
                        this.inputs.forEach(function (i) {
                          i.delete();
                        }),
                          (this.inputs.length = 0),
                          this.instance.delete();
                      }),
                      (m.prototype.bindViewModelInstance = function (i) {
                        i.runtimeInstance != null && this.instance.bindViewModelInstance(i.runtimeInstance);
                      }),
                      (m.prototype.focusState = function () {
                        return this.instance.focusState();
                      }),
                      (m.prototype.clearFocus = function () {
                        this.instance.clearFocus();
                      }),
                      m
                    );
                  })(),
                  be = (function () {
                    function m(i, l, S, I, T) {
                      I === void 0 && (I = []),
                        T === void 0 && (T = []),
                        (this.runtime = i),
                        (this.artboard = l),
                        (this.eventManager = S),
                        (this.animations = I),
                        (this.stateMachines = T);
                    }
                    return (
                      (m.prototype.add = function (i, l, S, I) {
                        if ((S === void 0 && (S = !0), I === void 0 && (I = !1), (i = ct(i)), i.length === 0))
                          this.animations.forEach(function (et) {
                            return (et.playing = l);
                          }),
                            this.stateMachines.forEach(function (et) {
                              return (et.playing = l);
                            });
                        else
                          for (
                            var T = this.animations.map(function (et) {
                                return et.name;
                              }),
                              z = this.stateMachines.map(function (et) {
                                return et.name;
                              }),
                              ce = 0;
                            ce < i.length;
                            ce++
                          ) {
                            var fe = T.indexOf(i[ce]),
                              he = z.indexOf(i[ce]);
                            if (fe >= 0 || he >= 0)
                              fe >= 0
                                ? (this.animations[fe].playing = l)
                                : (this.stateMachines[he].playing = l);
                            else {
                              var Me = this.artboard.animationByName(i[ce]);
                              if (Me) {
                                var Oe = new We.Animation(Me, this.artboard, this.runtime, l);
                                Oe.advance(0), Oe.apply(1), this.animations.push(Oe);
                              } else {
                                var $e = this.artboard.stateMachineByName(i[ce]);
                                if ($e) {
                                  var nt = new Y($e, this.runtime, l, this.artboard);
                                  I && nt.enableSemantics(), this.stateMachines.push(nt);
                                }
                              }
                            }
                          }
                        return (
                          S &&
                            (l
                              ? this.eventManager.fire({ type: ee.Play, data: this.playing })
                              : this.eventManager.fire({ type: ee.Pause, data: this.paused })),
                          l ? this.playing : this.paused
                        );
                      }),
                      (m.prototype.initLinearAnimations = function (i, l, S) {
                        S === void 0 && (S = !1);
                        for (
                          var I = this.animations.map(function (Me) {
                              return Me.name;
                            }),
                            T = 0;
                          T < i.length;
                          T++
                        ) {
                          var z = I.indexOf(i[T]);
                          if (z >= 0) this.animations[z].playing = l;
                          else {
                            var ce = this.artboard.animationByName(i[T]);
                            if (ce) {
                              var fe = new We.Animation(ce, this.artboard, this.runtime, l);
                              fe.advance(0), fe.apply(1), this.animations.push(fe);
                            } else if (S) {
                              var he = "State Machine with name ".concat(i[T], " not found");
                              throw new le(he);
                            } else console.error("Animation with name ".concat(i[T], " not found."));
                          }
                        }
                      }),
                      (m.prototype.initStateMachines = function (i, l, S) {
                        for (
                          var I = this.stateMachines.map(function (he) {
                              return he.name;
                            }),
                            T = 0;
                          T < i.length;
                          T++
                        ) {
                          var z = I.indexOf(i[T]);
                          if (z >= 0) this.stateMachines[z].playing = l;
                          else {
                            var ce = this.artboard.stateMachineByName(i[T]);
                            if (ce) {
                              var fe = new Y(ce, this.runtime, l, this.artboard);
                              S && fe.enableSemantics(), this.stateMachines.push(fe);
                            } else
                              console.warn(
                                "State Machine with name ".concat(
                                  i[T],
                                  " not found. Falling back to find an animation with the same name.",
                                ),
                              ),
                                this.initLinearAnimations([i[T]], l, !0);
                          }
                        }
                      }),
                      (m.prototype.play = function (i) {
                        return this.add(i, !0);
                      }),
                      (m.prototype.advanceIfPaused = function () {
                        this.stateMachines.forEach(function (i) {
                          i.playing || i.advanceAndApply(0);
                        });
                      }),
                      (m.prototype.pause = function (i) {
                        return this.add(i, !1);
                      }),
                      (m.prototype.scrub = function (i, l) {
                        var S = this.animations.filter(function (I) {
                          return i.includes(I.name);
                        });
                        return (
                          S.forEach(function (I) {
                            return (I.scrubTo = l);
                          }),
                          S.map(function (I) {
                            return I.name;
                          })
                        );
                      }),
                      Object.defineProperty(m.prototype, "playing", {
                        get: function () {
                          return this.animations
                            .filter(function (i) {
                              return i.playing;
                            })
                            .map(function (i) {
                              return i.name;
                            })
                            .concat(
                              this.stateMachines
                                .filter(function (i) {
                                  return i.playing;
                                })
                                .map(function (i) {
                                  return i.name;
                                }),
                            );
                        },
                        enumerable: !1,
                        configurable: !0,
                      }),
                      Object.defineProperty(m.prototype, "paused", {
                        get: function () {
                          return this.animations
                            .filter(function (i) {
                              return !i.playing;
                            })
                            .map(function (i) {
                              return i.name;
                            })
                            .concat(
                              this.stateMachines
                                .filter(function (i) {
                                  return !i.playing;
                                })
                                .map(function (i) {
                                  return i.name;
                                }),
                            );
                        },
                        enumerable: !1,
                        configurable: !0,
                      }),
                      (m.prototype.stop = function (i) {
                        var l = this;
                        i = ct(i);
                        var S = [];
                        if (i.length === 0)
                          (S = this.animations
                            .map(function (z) {
                              return z.name;
                            })
                            .concat(
                              this.stateMachines.map(function (z) {
                                return z.name;
                              }),
                            )),
                            this.animations.forEach(function (z) {
                              return z.cleanup();
                            }),
                            this.stateMachines.forEach(function (z) {
                              return z.cleanup();
                            }),
                            this.animations.splice(0, this.animations.length),
                            this.stateMachines.splice(0, this.stateMachines.length);
                        else {
                          var I = this.animations.filter(function (z) {
                            return i.includes(z.name);
                          });
                          I.forEach(function (z) {
                            z.cleanup(), l.animations.splice(l.animations.indexOf(z), 1);
                          });
                          var T = this.stateMachines.filter(function (z) {
                            return i.includes(z.name);
                          });
                          T.forEach(function (z) {
                            z.cleanup(), l.stateMachines.splice(l.stateMachines.indexOf(z), 1);
                          }),
                            (S = I.map(function (z) {
                              return z.name;
                            }).concat(
                              T.map(function (z) {
                                return z.name;
                              }),
                            ));
                        }
                        return this.eventManager.fire({ type: ee.Stop, data: S }), S;
                      }),
                      Object.defineProperty(m.prototype, "isPlaying", {
                        get: function () {
                          return (
                            this.animations.reduce(function (i, l) {
                              return i || l.playing;
                            }, !1) ||
                            this.stateMachines.reduce(function (i, l) {
                              return i || l.playing;
                            }, !1)
                          );
                        },
                        enumerable: !1,
                        configurable: !0,
                      }),
                      Object.defineProperty(m.prototype, "isPaused", {
                        get: function () {
                          return (
                            !this.isPlaying && (this.animations.length > 0 || this.stateMachines.length > 0)
                          );
                        },
                        enumerable: !1,
                        configurable: !0,
                      }),
                      Object.defineProperty(m.prototype, "isStopped", {
                        get: function () {
                          return this.animations.length === 0 && this.stateMachines.length === 0;
                        },
                        enumerable: !1,
                        configurable: !0,
                      }),
                      (m.prototype.atLeastOne = function (i, l, S) {
                        l === void 0 && (l = !0), S === void 0 && (S = !1);
                        var I;
                        return (
                          this.animations.length === 0 &&
                            this.stateMachines.length === 0 &&
                            (this.artboard.animationCount() > 0
                              ? (this.artboard.stateMachineCount() > 0 &&
                                  Z(
                                    j.defaultStateMachine,
                                    "No `stateMachine` was specified, so the artboard's first linear animation is playing by default. In the next major version, the artboard's state machine will be played by default instead when one exists. Pass the `stateMachine` parameter to adopt that behavior now.",
                                  ),
                                this.add([(I = this.artboard.animationByIndex(0).name)], i, l))
                              : this.artboard.stateMachineCount() > 0 &&
                                this.add([(I = this.artboard.stateMachineByIndex(0).name)], i, l, S)),
                          I
                        );
                      }),
                      (m.prototype.handleLooping = function () {
                        for (
                          var i = 0,
                            l = this.animations.filter(function (I) {
                              return I.playing;
                            });
                          i < l.length;
                          i++
                        ) {
                          var S = l[i];
                          S.loopValue === 0 && S.loopCount
                            ? ((S.loopCount = 0), this.stop(S.name))
                            : S.loopValue === 1 && S.loopCount
                              ? (this.eventManager.fire({
                                  type: ee.Loop,
                                  data: { animation: S.name, type: Se.Loop },
                                }),
                                (S.loopCount = 0))
                              : S.loopValue === 2 &&
                                S.loopCount > 1 &&
                                (this.eventManager.fire({
                                  type: ee.Loop,
                                  data: { animation: S.name, type: Se.PingPong },
                                }),
                                (S.loopCount = 0));
                        }
                      }),
                      (m.prototype.handleStateChanges = function () {
                        for (
                          var i = [],
                            l = 0,
                            S = this.stateMachines.filter(function (T) {
                              return T.playing;
                            });
                          l < S.length;
                          l++
                        ) {
                          var I = S[l];
                          i.push.apply(i, I.statesChanged);
                        }
                        i.length > 0 && this.eventManager.fire({ type: ee.StateChange, data: i });
                      }),
                      (m.prototype.handleAdvancing = function (i) {
                        this.eventManager.fire({ type: ee.Advance, data: i });
                      }),
                      m
                    );
                  })(),
                  ee;
                (function (m) {
                  (m.Load = "load"),
                    (m.LoadError = "loaderror"),
                    (m.Play = "play"),
                    (m.Pause = "pause"),
                    (m.Stop = "stop"),
                    (m.Loop = "loop"),
                    (m.Draw = "draw"),
                    (m.Advance = "advance"),
                    (m.StateChange = "statechange"),
                    (m.RiveEvent = "riveevent"),
                    (m.AudioStatusChange = "audiostatuschange");
                })(ee || (ee = {}));
                var ze =
                    "Subscribing to Rive Events at runtime is deprecated and will be removed in a future major version: please use data binding instead. See https://rive.app/docs/runtimes/web/rive-events for how to migrate.",
                  xe =
                    "State machine inputs are deprecated and will be removed in a future major version: please use data binding properties instead. See https://rive.app/docs/editor/data-binding/migration-guide#state-machine-inputs for how to migrate.",
                  ke =
                    "Text run APIs are deprecated and will be removed in a future major version: please use data binding instead. See https://rive.app/docs/editor/data-binding/migration-guide#updating-text-runs-at-runtime for how to migrate.",
                  ae =
                    "Loop events are deprecated and will be removed in a future major version: they are only reported for linear animation playback, which is deprecated. Use a state machine to control playback and data binding to react to changes instead. See https://rive.app/docs/editor/data-binding/migration-guide for how to migrate.",
                  A =
                    "Subscribing to state change events at runtime is deprecated and will be removed in a future major version: use data binding (view model property observers) or state machine actions to react to changes from your graphic instead. See https://rive.app/docs/editor/state-machine/states#actions for how to migrate.",
                  j = {
                    animationNames: "animation-names",
                    animationsParam: "animations-param",
                    defaultStateMachine: "default-state-machine",
                    legacyConstructors: "legacy-constructors",
                    legacyUnsubscribe: "legacy-unsubscribe",
                    loopEvents: "loop-events",
                    namesArray: "names-array",
                    riveEvents: "rive-events",
                    scrub: "scrub",
                    stateChangeEvents: "state-change-events",
                    stateMachineInputs: "state-machine-inputs",
                    stateMachinesParam: "state-machines-param",
                    textRuns: "text-runs",
                  },
                  V = new Set(
                    Object.keys(j).map(function (m) {
                      return j[m];
                    }),
                  ),
                  O = new Set(),
                  H = function (m) {
                    if ((O.clear(), !Array.isArray(m))) {
                      console.warn(
                        "[Rive] `suppressDeprecationWarnings` expects an array of deprecation ids, " +
                          "received ".concat(typeof m, ". Nothing was suppressed."),
                      );
                      return;
                    }
                    for (var i = 0, l = m; i < l.length; i++) {
                      var S = l[i];
                      V.has(S) && O.add(S);
                    }
                  },
                  ie = new Set(),
                  Z = function (m, i) {
                    if (!O.has(m)) {
                      var l = "".concat(m, ":").concat(i);
                      ie.has(l) ||
                        (ie.add(l),
                        console.warn(
                          "[Rive: ".concat(m, "] ").concat(
                            i,
                            `
`,
                          ) +
                            'To suppress this warning, set Rive.suppressDeprecationWarnings = ["'.concat(
                              m,
                              '"]',
                            ),
                        ));
                    }
                  },
                  ye = function (m, i) {
                    Array.isArray(m) &&
                      Z(
                        j.namesArray,
                        "Passing an array of names to `".concat(
                          i,
                          "()` is deprecated: in the next major version this parameter will be a single string, and playing multiple animations or state machines at once will not be supported.",
                        ),
                      );
                  },
                  Ee = function (m) {
                    Z(
                      j.animationNames,
                      "Passing linear animation names to `".concat(
                        m,
                        "()` is deprecated and will be removed in a future major version: ",
                      ) + "Pass a single state machine name to control playback instead.",
                    );
                  },
                  Se;
                (function (m) {
                  (m.OneShot = "oneshot"), (m.Loop = "loop"), (m.PingPong = "pingpong");
                })(Se || (Se = {}));
                var Ie = (function () {
                    function m(i) {
                      i === void 0 && (i = []), (this.listeners = i);
                    }
                    return (
                      (m.prototype.getListeners = function (i) {
                        return this.listeners.filter(function (l) {
                          return l.type === i;
                        });
                      }),
                      (m.prototype.add = function (i) {
                        this.listeners.includes(i) || this.listeners.push(i);
                      }),
                      (m.prototype.remove = function (i) {
                        for (var l = 0; l < this.listeners.length; l++) {
                          var S = this.listeners[l];
                          if (S.type === i.type && S.callback === i.callback) {
                            this.listeners.splice(l, 1);
                            break;
                          }
                        }
                      }),
                      (m.prototype.removeAll = function (i) {
                        var l = this;
                        i
                          ? this.listeners
                              .filter(function (S) {
                                return S.type === i;
                              })
                              .forEach(function (S) {
                                return l.remove(S);
                              })
                          : this.listeners.splice(0, this.listeners.length);
                      }),
                      (m.prototype.fire = function (i) {
                        var l = this.getListeners(i.type);
                        l.forEach(function (S) {
                          return S.callback(i);
                        });
                      }),
                      m
                    );
                  })(),
                  Ve = (function () {
                    function m(i) {
                      (this.eventManager = i), (this.queue = []);
                    }
                    return (
                      (m.prototype.add = function (i) {
                        this.queue.push(i);
                      }),
                      (m.prototype.process = function () {
                        for (; this.queue.length > 0; ) {
                          var i = this.queue.shift();
                          i?.action && i.action(), i?.event && this.eventManager.fire(i.event);
                        }
                      }),
                      m
                    );
                  })(),
                  Ne;
                (function (m) {
                  (m[(m.AVAILABLE = 0)] = "AVAILABLE"), (m[(m.UNAVAILABLE = 1)] = "UNAVAILABLE");
                })(Ne || (Ne = {}));
                var He = (function (m) {
                    P(i, m);
                    function i() {
                      var l = (m !== null && m.apply(this, arguments)) || this;
                      return (l._started = !1), (l._enabled = !1), (l._status = Ne.UNAVAILABLE), l;
                    }
                    return (
                      (i.prototype.delay = function (l) {
                        return se(this, void 0, void 0, function () {
                          return $(this, function (S) {
                            return [
                              2,
                              new Promise(function (I) {
                                return setTimeout(I, l);
                              }),
                            ];
                          });
                        });
                      }),
                      (i.prototype.timeout = function () {
                        return se(this, void 0, void 0, function () {
                          return $(this, function (l) {
                            return [
                              2,
                              new Promise(function (S, I) {
                                return setTimeout(I, 50);
                              }),
                            ];
                          });
                        });
                      }),
                      (i.prototype.reportToListeners = function () {
                        this.fire({ type: ee.AudioStatusChange }), this.removeAll();
                      }),
                      (i.prototype.enableAudio = function () {
                        return se(this, void 0, void 0, function () {
                          return $(this, function (l) {
                            return (
                              this._enabled ||
                                ((this._enabled = !0),
                                (this._status = Ne.AVAILABLE),
                                this.reportToListeners()),
                              [2]
                            );
                          });
                        });
                      }),
                      (i.prototype.testAudio = function () {
                        return se(this, void 0, void 0, function () {
                          return $(this, function (l) {
                            switch (l.label) {
                              case 0:
                                if (!(this._status === Ne.UNAVAILABLE && this._audioContext !== null))
                                  return [3, 4];
                                l.label = 1;
                              case 1:
                                return (
                                  l.trys.push([1, 3, , 4]),
                                  [4, Promise.race([this._audioContext.resume(), this.timeout()])]
                                );
                              case 2:
                                return l.sent(), this.enableAudio(), [3, 4];
                              case 3:
                                return l.sent(), [3, 4];
                              case 4:
                                return [2];
                            }
                          });
                        });
                      }),
                      (i.prototype._establishAudio = function () {
                        return se(this, void 0, void 0, function () {
                          return $(this, function (l) {
                            switch (l.label) {
                              case 0:
                                return this._started
                                  ? [3, 5]
                                  : ((this._started = !0),
                                    typeof window > "u" ? (this.enableAudio(), [3, 5]) : [3, 1]);
                              case 1:
                                (this._audioContext = new AudioContext()),
                                  this.listenForUserAction(),
                                  (l.label = 2);
                              case 2:
                                return this._status !== Ne.UNAVAILABLE ? [3, 5] : [4, this.testAudio()];
                              case 3:
                                return l.sent(), [4, this.delay(1e3)];
                              case 4:
                                return l.sent(), [3, 2];
                              case 5:
                                return [2];
                            }
                          });
                        });
                      }),
                      (i.prototype.listenForUserAction = function () {
                        var l = this,
                          S = function () {
                            return se(l, void 0, void 0, function () {
                              return $(this, function (I) {
                                return this.enableAudio(), [2];
                              });
                            });
                          };
                        document.addEventListener("pointerdown", S, { once: !0 });
                      }),
                      (i.prototype.establishAudio = function () {
                        return se(this, void 0, void 0, function () {
                          return $(this, function (l) {
                            return this._establishAudio(), [2];
                          });
                        });
                      }),
                      Object.defineProperty(i.prototype, "systemVolume", {
                        get: function () {
                          return this._status === Ne.UNAVAILABLE ? (this.testAudio(), 0) : 1;
                        },
                        enumerable: !1,
                        configurable: !0,
                      }),
                      Object.defineProperty(i.prototype, "status", {
                        get: function () {
                          return this._status;
                        },
                        enumerable: !1,
                        configurable: !0,
                      }),
                      i
                    );
                  })(Ie),
                  Fe = new He(),
                  Re = (function () {
                    function m() {}
                    return (
                      (m.prototype.observe = function () {}),
                      (m.prototype.unobserve = function () {}),
                      (m.prototype.disconnect = function () {}),
                      m
                    );
                  })(),
                  me = globalThis.ResizeObserver || Re,
                  De = (function () {
                    function m() {
                      var i = this;
                      (this._elementsMap = new Map()),
                        (this._onObservedEntry = function (l) {
                          var S = i._elementsMap.get(l.target);
                          S !== null
                            ? S.onResize(l.target.clientWidth == 0 || l.target.clientHeight == 0)
                            : i._resizeObserver.unobserve(l.target);
                        }),
                        (this._onObserved = function (l) {
                          l.forEach(i._onObservedEntry);
                        }),
                        (this._resizeObserver = new me(this._onObserved));
                    }
                    return (
                      (m.prototype.add = function (i, l) {
                        var S = { onResize: l, element: i };
                        return this._elementsMap.set(i, S), this._resizeObserver.observe(i), S;
                      }),
                      (m.prototype.remove = function (i) {
                        this._resizeObserver.unobserve(i.element), this._elementsMap.delete(i.element);
                      }),
                      m
                    );
                  })(),
                  Be = new De(),
                  Ge = 0,
                  Ze = function (m) {
                    var i = m.stateMachine,
                      l = m.animations,
                      S = m.stateMachines;
                    return (
                      l !== void 0 &&
                        Z(
                          j.animationsParam,
                          "The `animations` parameter is deprecated and will be removed in a future major version: please use the `stateMachine` parameter to play a state machine instead.",
                        ),
                      S !== void 0 &&
                        Z(
                          j.stateMachinesParam,
                          "The `stateMachines` parameter is deprecated: please use `stateMachine` with a single state machine name instead.",
                        ),
                      i
                        ? { startingAnimationNames: [], startingStateMachineNames: [i] }
                        : { startingAnimationNames: ct(l), startingStateMachineNames: ct(S) }
                    );
                  },
                  je = (function () {
                    function m(i) {
                      (this.enableRiveAssetCDN = !0),
                        (this.enablePerfMarks = !1),
                        (this.referenceCount = 0),
                        (this.destroyed = !1),
                        (this.selfUnref = !1),
                        (this.bindableArtboards = []),
                        (this.deferred = !1),
                        (this.session = null),
                        (this._sessionClaimed = !1),
                        (this.fileFinalizer = null),
                        (this.boundElsewhereWarned = !1),
                        (this.src = i.src),
                        (this.buffer = i.buffer),
                        (this.deferred = !!i.enableGPUCanvas),
                        i.assetLoader && (this.assetLoader = i.assetLoader),
                        (this.enableRiveAssetCDN =
                          typeof i.enableRiveAssetCDN == "boolean" ? i.enableRiveAssetCDN : !0),
                        (this.enablePerfMarks = !!i.enablePerfMarks),
                        this.enablePerfMarks && (ve.RuntimeLoader.enablePerfMarks = !0),
                        (this.eventManager = new Ie()),
                        i.onLoad && this.on(ee.Load, i.onLoad),
                        i.onLoadError && this.on(ee.LoadError, i.onLoadError);
                    }
                    return (
                      (m.prototype.releaseFile = function () {
                        var i, l;
                        (i = this.fileFinalizer) === null || i === void 0 || i.release(),
                          (l = this.file) === null || l === void 0 || l.unref(),
                          (this.fileFinalizer = null),
                          (this.file = null);
                      }),
                      (m.prototype.releaseSession = function () {
                        var i;
                        (i = this.session) === null || i === void 0 || i.delete(), (this.session = null);
                      }),
                      (m.prototype.releaseBindableArtboards = function () {
                        this.bindableArtboards.forEach(function (i) {
                          return i.destroy();
                        });
                      }),
                      (m.prototype.initData = function () {
                        return se(this, void 0, void 0, function () {
                          var i, l, S, I, T, z, ce;
                          return $(this, function (fe) {
                            switch (fe.label) {
                              case 0:
                                if (!(this.src && !this.buffer)) return [3, 4];
                                fe.label = 1;
                              case 1:
                                return fe.trys.push([1, 3, , 4]), (i = this), [4, Ct(this.src)];
                              case 2:
                                return (i.buffer = fe.sent()), [3, 4];
                              case 3:
                                throw (
                                  ((l = fe.sent()), l instanceof Error ? l : new le(m.fileLoadErrorMessage))
                                );
                              case 4:
                                if (this.destroyed) return [2];
                                this.deferred &&
                                  this.session === null &&
                                  (this.session = m.makeDeferredSession(this.runtime)),
                                  this.assetLoader &&
                                    ((I = new oe.CustomFileAssetLoaderWrapper(
                                      this.runtime,
                                      this.assetLoader,
                                      this.session,
                                    )),
                                    (S = I.assetLoader)),
                                  this.enablePerfMarks && performance.mark("rive:file-load:start"),
                                  (fe.label = 5);
                              case 5:
                                return (
                                  fe.trys.push([5, 7, , 8]),
                                  (T = this),
                                  [
                                    4,
                                    this.runtime.load(
                                      new Uint8Array(this.buffer),
                                      S,
                                      this.enableRiveAssetCDN,
                                      this.session,
                                    ),
                                  ]
                                );
                              case 6:
                                return (T.file = fe.sent()), [3, 8];
                              case 7:
                                throw ((z = fe.sent()), this.releaseSession(), z);
                              case 8:
                                return (
                                  this.enablePerfMarks &&
                                    (performance.mark("rive:file-load:end"),
                                    performance.measure(
                                      "rive:file-load",
                                      "rive:file-load:start",
                                      "rive:file-load:end",
                                    )),
                                  this.destroyed
                                    ? (this.releaseFile(), this.releaseSession(), [2])
                                    : this.file === null
                                      ? (this.releaseSession(),
                                        this.fireLoadError(m.fileLoadErrorMessage),
                                        [2])
                                      : ((ce = new oe.FileFinalizer(this.file, this.session)),
                                        (this.fileFinalizer = ce),
                                        oe.finalizationRegistry.register(this, ce),
                                        this.eventManager.fire({ type: ee.Load, data: this }),
                                        [2])
                                );
                            }
                          });
                        });
                      }),
                      (m.prototype.loadRiveFileBytes = function () {
                        return se(this, void 0, void 0, function () {
                          var i;
                          return $(this, function (l) {
                            return (
                              this.enablePerfMarks && performance.mark("rive:fetch-riv:start"),
                              (i = this.src ? Ct(this.src) : Promise.resolve(this.buffer)),
                              this.enablePerfMarks &&
                                this.src &&
                                i.then(function () {
                                  performance.mark("rive:fetch-riv:end"),
                                    performance.measure(
                                      "rive:fetch-riv",
                                      "rive:fetch-riv:start",
                                      "rive:fetch-riv:end",
                                    );
                                }),
                              [2, i]
                            );
                          });
                        });
                      }),
                      (m.prototype.loadRuntime = function () {
                        return se(this, void 0, void 0, function () {
                          var i;
                          return $(this, function (l) {
                            return (
                              this.enablePerfMarks && performance.mark("rive:await-wasm:start"),
                              (i = ve.RuntimeLoader.awaitInstance()),
                              this.enablePerfMarks &&
                                i.then(function () {
                                  performance.mark("rive:await-wasm:end"),
                                    performance.measure(
                                      "rive:await-wasm",
                                      "rive:await-wasm:start",
                                      "rive:await-wasm:end",
                                    );
                                }),
                              [2, i]
                            );
                          });
                        });
                      }),
                      (m.prototype.init = function () {
                        return se(this, void 0, void 0, function () {
                          var i, l, S, I;
                          return $(this, function (T) {
                            switch (T.label) {
                              case 0:
                                if (!this.src && !this.buffer)
                                  return this.fireLoadError(m.missingErrorMessage), [2];
                                T.label = 1;
                              case 1:
                                return (
                                  T.trys.push([1, 4, , 5]),
                                  [4, Promise.all([this.loadRiveFileBytes(), this.loadRuntime()])]
                                );
                              case 2:
                                return (
                                  (i = T.sent()),
                                  (l = i[0]),
                                  (S = i[1]),
                                  this.destroyed
                                    ? [2]
                                    : ((this.buffer = l),
                                      (this.runtime = S),
                                      this.enablePerfMarks && performance.mark("rive:init-data:start"),
                                      [4, this.initData()])
                                );
                              case 3:
                                return (
                                  T.sent(),
                                  this.enablePerfMarks &&
                                    (performance.mark("rive:init-data:end"),
                                    performance.measure(
                                      "rive:init-data",
                                      "rive:init-data:start",
                                      "rive:init-data:end",
                                    )),
                                  [3, 5]
                                );
                              case 4:
                                return (
                                  (I = T.sent()),
                                  this.fireLoadError(I instanceof Error ? I.message : m.fileLoadErrorMessage),
                                  [3, 5]
                                );
                              case 5:
                                return [2];
                            }
                          });
                        });
                      }),
                      (m.prototype.fireLoadError = function (i) {
                        throw (this.eventManager.fire({ type: ee.LoadError, data: i }), new le(i));
                      }),
                      (m.prototype.on = function (i, l) {
                        this.eventManager.add({ type: i, callback: l });
                      }),
                      (m.prototype.off = function (i, l) {
                        this.eventManager.remove({ type: i, callback: l });
                      }),
                      (m.prototype.cleanup = function () {
                        (this.referenceCount -= 1),
                          this.referenceCount <= 0 &&
                            (this.removeAllRiveEventListeners(),
                            this.releaseFile(),
                            this.releaseBindableArtboards(),
                            this.releaseSession(),
                            (this.destroyed = !0));
                      }),
                      (m.makeDeferredSession = function (i) {
                        var l,
                          S,
                          I =
                            (S =
                              (l = i.makeDeferredSession) === null || l === void 0 ? void 0 : l.call(i)) !==
                              null && S !== void 0
                              ? S
                              : null;
                        return (
                          I === null &&
                            !m.deferredUnsupportedWarned &&
                            ((m.deferredUnsupportedWarned = !0),
                            console.warn(
                              "Rive: `enableGPUCanvas: true` was ignored because this runtime build has no GPU Canvas support; importing in immediate mode. Use a @rive-app/webgl2 or @rive-app/canvas build with deferred rendering compiled in.",
                            )),
                          I
                        );
                      }),
                      Object.defineProperty(m.prototype, "deferredSession", {
                        get: function () {
                          return this.session;
                        },
                        enumerable: !1,
                        configurable: !0,
                      }),
                      Object.defineProperty(m.prototype, "deferredRequested", {
                        get: function () {
                          return this.deferred;
                        },
                        enumerable: !1,
                        configurable: !0,
                      }),
                      Object.defineProperty(m.prototype, "sessionClaimed", {
                        get: function () {
                          return this._sessionClaimed;
                        },
                        enumerable: !1,
                        configurable: !0,
                      }),
                      (m.prototype.claimSession = function () {
                        this._sessionClaimed = !0;
                      }),
                      (m.prototype.warnBoundElsewhereOnce = function () {
                        this.boundElsewhereWarned ||
                          ((this.boundElsewhereWarned = !0),
                          console.warn(
                            "Rive: this deferred RiveFile is already bound to another Rive instance's canvas, and a deferred session cannot span canvases. Re-importing the file for this instance (an extra parse of the retained buffer, no extra network request).",
                          ));
                      }),
                      (m.prototype.reimport = function (i) {
                        return se(this, void 0, void 0, function () {
                          var l;
                          return $(this, function (S) {
                            switch (S.label) {
                              case 0:
                                return (
                                  (l = new m({
                                    buffer: this.buffer,
                                    assetLoader: this.assetLoader,
                                    enableRiveAssetCDN: this.enableRiveAssetCDN,
                                    enablePerfMarks: this.enablePerfMarks,
                                    enableGPUCanvas: i,
                                  })),
                                  [4, l.init()]
                                );
                              case 1:
                                return S.sent(), [2, l];
                            }
                          });
                        });
                      }),
                      (m.prototype.removeAllRiveEventListeners = function (i) {
                        this.eventManager.removeAll(i);
                      }),
                      (m.prototype.getInstance = function () {
                        if (this.file !== null) return (this.referenceCount += 1), this.file;
                      }),
                      (m.prototype.destroyIfUnused = function () {
                        this.referenceCount <= 0 && this.cleanup();
                      }),
                      (m.prototype.createBindableArtboard = function (i) {
                        if (i != null) {
                          var l = new te(i);
                          return (
                            (0, oe.createFinalization)(l, l.nativeArtboard), this.bindableArtboards.push(l), l
                          );
                        }
                        return null;
                      }),
                      (m.prototype.getArtboard = function (i) {
                        var l = this.file.artboardByName(i);
                        if (l != null) return new X(l, this);
                      }),
                      (m.prototype.getBindableArtboard = function (i) {
                        var l = this.file.bindableArtboardByName(i);
                        return this.createBindableArtboard(l);
                      }),
                      (m.prototype.getDefaultBindableArtboard = function () {
                        var i = this.file.bindableArtboardDefault();
                        return this.createBindableArtboard(i);
                      }),
                      (m.prototype.internalBindableArtboardFromArtboard = function (i) {
                        var l = this.file.internalBindableArtboardFromArtboard(i);
                        return this.createBindableArtboard(l);
                      }),
                      (m.prototype.viewModelByName = function (i) {
                        var l = this.file.viewModelByName(i);
                        return l !== null ? new Je(l) : null;
                      }),
                      (m.prototype.globalViewModelNames = function () {
                        return this.file.globalViewModelNames();
                      }),
                      (m.missingErrorMessage = "Rive source file or data buffer required"),
                      (m.fileLoadErrorMessage = "The file failed to load"),
                      (m.deferredUnsupportedWarned = !1),
                      m
                    );
                  })(),
                  st = (function () {
                    function m(i) {
                      var l = this,
                        S,
                        I,
                        T,
                        z;
                      (this.loaded = !1),
                        (this.destroyed = !1),
                        (this._observed = null),
                        (this.readyForPlaying = !1),
                        (this.deferredRenderer = !1),
                        (this._inkbleedCapable = !1),
                        (this._inkbleed = !1),
                        (this.ownsRiveFile = !1),
                        (this.artboard = null),
                        (this.eventCleanup = null),
                        (this._keyboardInteractions = null),
                        (this.shouldDisableRiveListeners = !1),
                        (this.automaticallyHandleEvents = !1),
                        (this.dispatchPointerExit = !0),
                        (this.enableMultiTouch = !1),
                        (this.enableRiveAssetCDN = !0),
                        (this.semanticsMode = re.SemanticMode.Disabled),
                        (this.semanticsOptions = { riveCanvasLabel: "Rive animation" }),
                        (this._semanticsActive = !1),
                        (this._volume = 1),
                        (this._artboardWidth = void 0),
                        (this._artboardHeight = void 0),
                        (this._devicePixelRatioUsed = 1),
                        (this._hasZeroSize = !1),
                        (this._needsRedraw = !1),
                        (this._currentCanvasWidth = 0),
                        (this._currentCanvasHeight = 0),
                        (this._audioEventListener = null),
                        (this._boundDraw = null),
                        (this._pageVisibilityHandler = null),
                        (this._explicitlyStoppedRendering = !1),
                        (this._viewModelInstance = null),
                        (this._globalViewModelInstances = new Map()),
                        (this._dataEnums = null),
                        (this._tabIndex = null),
                        (this._prevHasFocus = !1),
                        (this._prevWantsTextInputSession = !1),
                        (this._inPointerDownDrain = !1),
                        (this._focusOptions = { allowFocusInterrupt: !1 }),
                        (this._semanticTree = null),
                        (this._accessibilityOverlay = null),
                        (this._overlayTransformDirty = !0),
                        (this._instanceId = "".concat(Ge++)),
                        (this.drawOptimization = D.DrawOnChanged),
                        (this.enablePerfMarks = !1),
                        (this.durations = []),
                        (this.frameTimes = []),
                        (this.frameCount = 0),
                        (this.isTouchScrollEnabled = !1),
                        (this.onCanvasResize = function (ce) {
                          var fe = l._hasZeroSize !== ce;
                          (l._hasZeroSize = ce),
                            ce
                              ? (!l._layout.maxX || !l._layout.maxY) && l.resizeToCanvas()
                              : fe && l.resizeDrawingSurfaceToCanvas();
                        }),
                        (this.isEditingHostFocused = function () {
                          var ce, fe;
                          return (fe =
                            (ce = l._keyboardInteractions) === null || ce === void 0
                              ? void 0
                              : ce.isEditingHostFocused()) !== null && fe !== void 0
                            ? fe
                            : !1;
                        }),
                        (this.frameRequestId = null),
                        (this.renderSecondTimer = 0),
                        (this._boundDraw = this.draw.bind(this)),
                        typeof document < "u" &&
                          ((this._pageVisibilityHandler = this._onPageVisibilityChange.bind(this)),
                          document.addEventListener("visibilitychange", this._pageVisibilityHandler)),
                        (this.canvas = i.canvas),
                        i.canvas.constructor === HTMLCanvasElement &&
                          (this._observed = Be.add(this.canvas, this.onCanvasResize)),
                        (this._currentCanvasWidth = this.canvas.width),
                        (this._currentCanvasHeight = this.canvas.height),
                        (this.src = i.src),
                        (this.buffer = i.buffer),
                        (this.riveFile = i.riveFile),
                        (this.layout = (S = i.layout) !== null && S !== void 0 ? S : new B()),
                        (this.shouldDisableRiveListeners = !!i.shouldDisableRiveListeners),
                        (this.isTouchScrollEnabled = !!i.isTouchScrollEnabled),
                        i.automaticallyHandleEvents &&
                          Z(j.riveEvents, "The `automaticallyHandleEvents` parameter is deprecated. " + ze),
                        (this.automaticallyHandleEvents = !!i.automaticallyHandleEvents),
                        (this.dispatchPointerExit =
                          i.dispatchPointerExit === !1 ? i.dispatchPointerExit : this.dispatchPointerExit),
                        (this.enableMultiTouch = !!i.enableMultiTouch),
                        (this.drawOptimization =
                          (I = i.drawingOptions) !== null && I !== void 0 ? I : this.drawOptimization),
                        (this.enableRiveAssetCDN =
                          i.enableRiveAssetCDN === void 0 ? !0 : i.enableRiveAssetCDN),
                        (this.enablePerfMarks = !!i.enablePerfMarks),
                        this.enablePerfMarks && (ve.RuntimeLoader.enablePerfMarks = !0),
                        (this._focusOptions =
                          (T = i.focusOptions) !== null && T !== void 0 ? T : this._focusOptions),
                        (this._tabIndex = (z = i.tabIndex) !== null && z !== void 0 ? z : null),
                        (this.deferredRenderer = !!i.enableGPUCanvas),
                        (this._inkbleedCapable = !!i.enableInkbleed),
                        (this._inkbleed = this._inkbleedCapable),
                        (this.eventManager = new Ie()),
                        i.onLoad && this.on(ee.Load, i.onLoad),
                        i.onLoadError && this.on(ee.LoadError, i.onLoadError),
                        i.onPlay && this.on(ee.Play, i.onPlay),
                        i.onPause && this.on(ee.Pause, i.onPause),
                        i.onStop && this.on(ee.Stop, i.onStop),
                        i.onLoop && this.on(ee.Loop, i.onLoop),
                        i.onStateChange && this.on(ee.StateChange, i.onStateChange),
                        i.onAdvance && this.on(ee.Advance, i.onAdvance),
                        i.onload && !i.onLoad && this.on(ee.Load, i.onload),
                        i.onloaderror && !i.onLoadError && this.on(ee.LoadError, i.onloaderror),
                        i.onplay && !i.onPlay && this.on(ee.Play, i.onplay),
                        i.onpause && !i.onPause && this.on(ee.Pause, i.onpause),
                        i.onstop && !i.onStop && this.on(ee.Stop, i.onstop),
                        i.onloop && !i.onLoop && this.on(ee.Loop, i.onloop),
                        i.onstatechange && !i.onStateChange && this.on(ee.StateChange, i.onstatechange),
                        i.assetLoader && (this.assetLoader = i.assetLoader),
                        (this.taskQueue = new Ve(this.eventManager)),
                        this.init({
                          src: this.src,
                          buffer: this.buffer,
                          riveFile: this.riveFile,
                          autoplay: i.autoplay,
                          autoBind: i.autoBind,
                          stateMachine: i.stateMachine,
                          animations: i.animations,
                          stateMachines: i.stateMachines,
                          artboard: i.artboard,
                          useOffscreenRenderer: i.useOffscreenRenderer,
                          tabIndex: i.tabIndex,
                          semanticsMode: i.semanticsMode,
                          semanticsOptions: i.semanticsOptions,
                          enableGPUCanvas: this.deferredRenderer,
                        });
                    }
                    return (
                      Object.defineProperty(m, "suppressDeprecationWarnings", {
                        get: function () {
                          return Object.freeze(Array.from(O));
                        },
                        set: function (i) {
                          H(i);
                        },
                        enumerable: !1,
                        configurable: !0,
                      }),
                      Object.defineProperty(m.prototype, "viewModelCount", {
                        get: function () {
                          return this.file.viewModelCount();
                        },
                        enumerable: !1,
                        configurable: !0,
                      }),
                      (m.new = function (i) {
                        return (
                          Z(
                            j.legacyConstructors,
                            "This function is deprecated: please use `new Rive({})` instead",
                          ),
                          new m(i)
                        );
                      }),
                      (m.prototype.enableSemantics = function () {
                        (this.semanticsMode = re.SemanticMode.Enabled), this.activateSemantics();
                      }),
                      (m.prototype.activateSemantics = function () {
                        this._semanticsActive ||
                          this.semanticsMode === re.SemanticMode.Disabled ||
                          ((this._semanticsActive = !0), this.syncSemanticsOnStateMachines());
                      }),
                      (m.prototype.syncSemanticsOnStateMachines = function () {
                        if (!(!this._semanticsActive || !this.animator))
                          for (var i = 0, l = this.animator.stateMachines; i < l.length; i++) {
                            var S = l[i];
                            S.enableSemantics();
                          }
                      }),
                      (m.prototype.cleanupSemantics = function () {
                        (this._semanticTree = null),
                          this._accessibilityOverlay &&
                            (this._accessibilityOverlay.destroy(), (this._accessibilityOverlay = null));
                      }),
                      (m.prototype.onSystemAudioChanged = function () {
                        this.volume = this._volume;
                      }),
                      (m.prototype.init = function (i) {
                        var l = this,
                          S,
                          I,
                          T,
                          z,
                          ce,
                          fe = i.src,
                          he = i.buffer,
                          Me = i.riveFile,
                          Oe = i.stateMachine,
                          $e = i.animations,
                          nt = i.stateMachines,
                          et = i.artboard,
                          ft = i.autoplay,
                          jt = ft === void 0 ? !1 : ft,
                          kt = i.useOffscreenRenderer,
                          Tt = kt === void 0 ? !1 : kt,
                          _t = i.autoBind,
                          wt = _t === void 0 ? !1 : _t,
                          Et = i.tabIndex,
                          tt = i.semanticsMode,
                          mt = i.semanticsOptions,
                          bt = i.enableGPUCanvas;
                        if (!this.destroyed) {
                          if (!fe && !he && !Me) throw new le(m.missingErrorMessage);
                          this.artboard &&
                            ((I = (S = this.renderer) === null || S === void 0 ? void 0 : S.bindContext) ===
                              null ||
                              I === void 0 ||
                              I.call(S),
                            (T = this.animator) === null || T === void 0 || T.stop(),
                            this.artboard.delete(),
                            (this.artboard = null)),
                            this.renderer &&
                              ((ce = (z = this.renderer).detachSession) === null ||
                                ce === void 0 ||
                                ce.call(z)),
                            this.releaseCurrentRiveFile(!1),
                            (this.src = fe),
                            (this.buffer = he),
                            (this.riveFile = Me),
                            (this.ownsRiveFile = !1),
                            (this.deferredRenderer = bt ?? this.deferredRenderer),
                            (this._tabIndex = Et ?? null),
                            (this.semanticsMode = tt ?? re.SemanticMode.Disabled),
                            (this.semanticsOptions = mt ?? this.semanticsOptions);
                          var Ae = Ze({ stateMachine: Oe, animations: $e, stateMachines: nt }),
                            Yt = Ae.startingAnimationNames,
                            Qe = Ae.startingStateMachineNames;
                          (this.loaded = !1),
                            (this.readyForPlaying = !1),
                            ve.RuntimeLoader.awaitInstance()
                              .then(function (Ut) {
                                if (!l.destroyed) {
                                  (l.runtime = Ut),
                                    l.removeRiveListeners(),
                                    l.cleanupSemantics(),
                                    l.deleteRiveRenderer(),
                                    l.enablePerfMarks && performance.mark("rive:make-renderer:start");
                                  try {
                                    if (
                                      ((l.renderer = l.runtime.makeRenderer(l.canvas, Tt, {
                                        inkbleed: l._inkbleedCapable,
                                      })),
                                      !l.renderer)
                                    )
                                      throw new Error("Renderer is null, cannot render Rive on the canvas.");
                                  } catch (Ot) {
                                    throw (
                                      (console.error(Ot),
                                      new le(
                                        "Unable to create the renderer, your environment may not support WebGL. Try the @rive-app/canvas runtime as an alternative.",
                                      ))
                                    );
                                  }
                                  l._inkbleedCapable && l.applyInkbleed(),
                                    l.enablePerfMarks &&
                                      (performance.mark("rive:make-renderer:end"),
                                      performance.measure(
                                        "rive:make-renderer",
                                        "rive:make-renderer:start",
                                        "rive:make-renderer:end",
                                      )),
                                    l.canvas.width || l.canvas.height || l.resizeDrawingSurfaceToCanvas(),
                                    l
                                      .initData(et, Yt, Qe, jt, wt)
                                      .then(function (Ot) {
                                        if (Ot) return l.setupRiveListeners();
                                      })
                                      .catch(function (Ot) {
                                        console.error(Ot);
                                      });
                                }
                              })
                              .catch(function (Ut) {
                                l.eventManager.fire({ type: ee.LoadError, data: Ut.message });
                              });
                        }
                      }),
                      (m.prototype.setupRiveListeners = function (i) {
                        var l = this;
                        if (
                          (this.eventCleanup && this.eventCleanup(),
                          this.cleanupKeyboardInteractions(),
                          !this.shouldDisableRiveListeners)
                        ) {
                          var S = this.animator.stateMachines.filter(function (fe) {
                              return fe.playing;
                            }),
                            I = S.filter(function (fe) {
                              return l.runtime.hasListeners(fe.instance);
                            }).map(function (fe) {
                              return fe.instance;
                            }),
                            T = this.isTouchScrollEnabled,
                            z = this.dispatchPointerExit,
                            ce = this.enableMultiTouch;
                          i && "isTouchScrollEnabled" in i && (T = i.isTouchScrollEnabled),
                            (this.eventCleanup = (0, oe.registerTouchInteractions)({
                              canvas: this.canvas,
                              artboard: this.artboard,
                              stateMachines: I,
                              renderer: this.renderer,
                              rive: this.runtime,
                              fit: this._layout.runtimeFit(this.runtime),
                              alignment: this._layout.runtimeAlignment(this.runtime),
                              isTouchScrollEnabled: T,
                              dispatchPointerExit: z,
                              enableMultiTouch: ce,
                              layoutScaleFactor: this._layout.layoutScaleFactor,
                              advanceAndDrain: this.advanceAndDrainForPointer.bind(this),
                              summonKeyboard: this.summonKeyboardForGesture.bind(this),
                              isTextProxyFocused: this.isEditingHostFocused,
                            })),
                            this.ensureKeyboardInteractions();
                        }
                      }),
                      Object.defineProperty(m.prototype, "focusStateMachine", {
                        get: function () {
                          return this.animator.stateMachines.find(function (i) {
                            return i.playing && i.hasFocusNodes;
                          });
                        },
                        enumerable: !1,
                        configurable: !0,
                      }),
                      (m.prototype.ensureKeyboardInteractions = function () {
                        var i = this;
                        if (
                          !(
                            this._keyboardInteractions ||
                            this.shouldDisableRiveListeners ||
                            typeof window > "u" ||
                            !(this.canvas instanceof HTMLCanvasElement)
                          )
                        ) {
                          var l = this.focusStateMachine;
                          if (l) {
                            var S = this.canvas.tabIndex;
                            (S === -1 || isNaN(S)) &&
                              (this.canvas.tabIndex = this._tabIndex !== null ? this._tabIndex : 0),
                              (this._keyboardInteractions = new oe.KeyboardInteractions({
                                canvas: this.canvas,
                                stateMachine: l.instance,
                                hasFocusNodes: !0,
                                getOverlayElement: function () {
                                  var I, T;
                                  return (T =
                                    (I = i._accessibilityOverlay) === null || I === void 0
                                      ? void 0
                                      : I.getSemanticOverlayContainer()) !== null && T !== void 0
                                    ? T
                                    : null;
                                },
                              }));
                          }
                        }
                      }),
                      (m.prototype.summonKeyboardForGesture = function () {
                        if (this._keyboardInteractions) {
                          var i = this.focusStateMachine;
                          i &&
                            this.wantsTextInputSession(i.focusState().expectsKeyboardInput) &&
                            this._keyboardInteractions.summonForPointer();
                        }
                      }),
                      (m.prototype.wantsTextInputSession = function (i) {
                        var l;
                        if (!i) return !1;
                        var S = (l = this._semanticTree) === null || l === void 0 ? void 0 : l.focusedNode();
                        return S === void 0 || S.role === re.SemanticRole.textField;
                      }),
                      (m.prototype.advanceAndDrainForPointer = function (i, l) {
                        if (!l?.pointerDown) {
                          this.advanceAndReportChanges(i);
                          return;
                        }
                        this._inPointerDownDrain = !0;
                        try {
                          this.advanceAndReportChanges(i);
                        } finally {
                          this._inPointerDownDrain = !1;
                        }
                      }),
                      (m.prototype.cleanupKeyboardInteractions = function () {
                        var i;
                        this._keyboardInteractions &&
                          (this._keyboardInteractions.cleanup(), (this._keyboardInteractions = null)),
                          (this._prevWantsTextInputSession = !1),
                          (i = this._accessibilityOverlay) === null ||
                            i === void 0 ||
                            i.releaseEditingHost(null, null);
                      }),
                      (m.prototype.removeRiveListeners = function () {
                        this.eventCleanup && (this.eventCleanup(), (this.eventCleanup = null)),
                          this.cleanupKeyboardInteractions();
                      }),
                      (m.prototype.initializeAudio = function () {
                        var i = this,
                          l;
                        Fe.status == Ne.UNAVAILABLE &&
                          (this.file.hasAudio ||
                            (!((l = this.artboard) === null || l === void 0) &&
                              l.hasAudio &&
                              this._audioEventListener === null)) &&
                          ((this._audioEventListener = {
                            type: ee.AudioStatusChange,
                            callback: function () {
                              return i.onSystemAudioChanged();
                            },
                          }),
                          Fe.add(this._audioEventListener),
                          Fe.establishAudio());
                      }),
                      (m.prototype.initArtboardSize = function () {
                        this.artboard &&
                          ((this._artboardWidth = this.artboard.width =
                            this._artboardWidth || this.artboard.width),
                          (this._artboardHeight = this.artboard.height =
                            this._artboardHeight || this.artboard.height));
                      }),
                      (m.prototype.initData = function (i, l, S, I, T) {
                        return se(this, void 0, void 0, function () {
                          var z, ce, fe, he, Me;
                          return $(this, function (Oe) {
                            switch (Oe.label) {
                              case 0:
                                return (
                                  Oe.trys.push([0, 5, , 6]),
                                  (this.ownsRiveFile = this.riveFile == null),
                                  this.ownsRiveFile
                                    ? ((z = new je({
                                        src: this.src,
                                        buffer: this.buffer,
                                        enableRiveAssetCDN: this.enableRiveAssetCDN,
                                        assetLoader: this.assetLoader,
                                        enablePerfMarks: this.enablePerfMarks,
                                        enableGPUCanvas: this.deferredRenderer,
                                      })),
                                      (this.riveFile = z),
                                      [4, z.init()])
                                    : [3, 2]
                                );
                              case 1:
                                if ((Oe.sent(), this.destroyed)) return z.destroyIfUnused(), [2, !1];
                                Oe.label = 2;
                              case 2:
                                return this.riveFile.deferredSession !== null || this.deferredRenderer
                                  ? [4, this.resolveDeferredRendering()]
                                  : [3, 4];
                              case 3:
                                if ((Oe.sent(), this.destroyed))
                                  return (
                                    this.ownsRiveFile &&
                                      ((he = this.riveFile) === null ||
                                        he === void 0 ||
                                        he.destroyIfUnused()),
                                    [2, !1]
                                  );
                                Oe.label = 4;
                              case 4:
                                (this.file = this.riveFile.getInstance()),
                                  this.reportDisplayScale(),
                                  this.initArtboard(i, l, S, I, T),
                                  this.initArtboardSize(),
                                  this.initializeAudio(),
                                  this.semanticsMode === re.SemanticMode.Enabled
                                    ? this.activateSemantics()
                                    : this._semanticsActive && this.syncSemanticsOnStateMachines();
                                try {
                                  (this.loaded = !0),
                                    this.eventManager.fire({
                                      type: ee.Load,
                                      data: (Me = this.src) !== null && Me !== void 0 ? Me : "buffer",
                                    });
                                } catch ($e) {
                                  console.error($e);
                                }
                                return (
                                  this.animator.advanceIfPaused(),
                                  (this.readyForPlaying = !0),
                                  this.taskQueue.process(),
                                  this.drawFrame(),
                                  [2, !0]
                                );
                              case 5:
                                return (
                                  (ce = Oe.sent()),
                                  (fe = J(ce)),
                                  this.eventManager.fire({ type: ee.LoadError, data: fe }),
                                  [2, Promise.reject(fe)]
                                );
                              case 6:
                                return [2];
                            }
                          });
                        });
                      }),
                      (m.prototype.resolveDeferredRendering = function () {
                        return se(this, void 0, void 0, function () {
                          var i, l, S, I, T, z, ce, fe, he, Me;
                          return $(this, function (Oe) {
                            switch (Oe.label) {
                              case 0:
                                return (
                                  (i = this.riveFile),
                                  (l = this.ownsRiveFile),
                                  (S = this.renderer),
                                  (I = i.deferredSession),
                                  I === null
                                    ? (this.deferredRenderer &&
                                        !i.deferredRequested &&
                                        console.warn(
                                          "Rive: `enableGPUCanvas: true` was ignored because this RiveFile was imported without it. The mode is fixed at import: construct the RiveFile with `enableGPUCanvas: true` to opt in.",
                                        ),
                                      [2])
                                    : (this.deferredRenderer ||
                                        console.warn(
                                          "Rive: this RiveFile was imported with `enableGPUCanvas: true`, so this instance renders deferred even though `enableGPUCanvas` is false on the instance. An immediate renderer would drop the file's deferred resources and draw nothing.",
                                        ),
                                      (T = S?.attachSession),
                                      typeof T == "function"
                                        ? [3, 2]
                                        : (console.warn(
                                            "Rive: this renderer cannot replay a deferred session (`useOffscreenRenderer` is not supported with deferred rendering). Re-importing the file in immediate mode for this instance.",
                                          ),
                                          [4, i.reimport(!1)]))
                                );
                              case 1:
                                return (
                                  (z = Oe.sent()),
                                  this.destroyed
                                    ? (z.destroyIfUnused(), [2])
                                    : ((this.riveFile = z),
                                      (this.ownsRiveFile = !0),
                                      l && i.destroyIfUnused(),
                                      [2])
                                );
                              case 2:
                                return !i.sessionClaimed && T.call(S, I)
                                  ? (i.claimSession(), [2])
                                  : (i.warnBoundElsewhereOnce(), [4, i.reimport(!0)]);
                              case 3:
                                return (
                                  (ce = Oe.sent()),
                                  this.destroyed
                                    ? (ce.destroyIfUnused(), [2])
                                    : ((this.riveFile = ce),
                                      (this.ownsRiveFile = !0),
                                      (fe = ce.deferredSession),
                                      fe !== null && T.call(S, fe)
                                        ? (ce.claimSession(), [2])
                                        : (console.warn(
                                            "Rive: could not attach the re-imported file's deferred session to this canvas; falling back to immediate rendering for this instance.",
                                          ),
                                          (Me = S.detachSession) === null || Me === void 0 || Me.call(S),
                                          [4, i.reimport(!1)]))
                                );
                              case 4:
                                return (
                                  (he = Oe.sent()),
                                  ce.destroyIfUnused(),
                                  this.destroyed
                                    ? (he.destroyIfUnused(), [2])
                                    : ((this.riveFile = he),
                                      (this.ownsRiveFile = !0),
                                      l && i.destroyIfUnused(),
                                      [2])
                                );
                            }
                          });
                        });
                      }),
                      (m.prototype.initArtboard = function (i, l, S, I, T) {
                        if (this.file) {
                          var z = i ? this.file.artboardByName(i) : this.file.defaultArtboard();
                          if (!z) throw new le("Invalid artboard name or no default artboard");
                          (this.artboard = z),
                            (z.volume = this._volume * Fe.systemVolume),
                            (this.animator = new be(this.runtime, this.artboard, this.eventManager));
                          var ce;
                          if (
                            (l.length > 0 || S.length > 0
                              ? ((ce = l.concat(S)),
                                this.animator.initLinearAnimations(l, I),
                                this.animator.initStateMachines(S, I, this._semanticsActive))
                              : (ce = [this.animator.atLeastOne(I, !1, this._semanticsActive)]),
                            this.taskQueue.add({ event: { type: I ? ee.Play : ee.Pause, data: ce } }),
                            T)
                          ) {
                            var fe = this.file.defaultArtboardViewModel(z);
                            if (fe !== null) {
                              var he = fe.defaultInstance();
                              if (he !== null) {
                                var Me = new Ye(he, null);
                                (0, oe.createFinalization)(Me, Me.runtimeInstance),
                                  this.setViewModelInstance(Me);
                              }
                            }
                            for (var Oe = 0, $e = this.file.globalViewModelNames(); Oe < $e.length; Oe++) {
                              var nt = $e[Oe],
                                et = this.file.viewModelByName(nt);
                              if (et !== null) {
                                var ft = new Je(et).defaultInstance();
                                ft !== null && this.setGlobalViewModelInstance(nt, ft);
                              }
                            }
                            this.bind();
                          }
                        }
                      }),
                      (m.prototype.drawFrame = function () {
                        var i, l;
                        !((i = document?.timeline) === null || i === void 0) && i.currentTime
                          ? this.loaded &&
                            this.artboard &&
                            !this.frameRequestId &&
                            (this._boundDraw(document.timeline.currentTime),
                            (l = this.runtime) === null || l === void 0 || l.resolveAnimationFrame())
                          : this.scheduleRendering();
                      }),
                      (m.prototype._canvasSizeChanged = function () {
                        var i = !1;
                        return (
                          this.canvas &&
                            (this.canvas.width !== this._currentCanvasWidth &&
                              ((this._currentCanvasWidth = this.canvas.width), (i = !0)),
                            this.canvas.height !== this._currentCanvasHeight &&
                              ((this._currentCanvasHeight = this.canvas.height), (i = !0))),
                          i
                        );
                      }),
                      (m.prototype._deferredWorkPending = function () {
                        var i, l, S;
                        return (S =
                          (l = (i = this.riveFile) === null || i === void 0 ? void 0 : i.deferredSession) ===
                            null || l === void 0
                            ? void 0
                            : l.recordedThisFrame()) !== null && S !== void 0
                          ? S
                          : !1;
                      }),
                      (m.prototype.pollFocusState = function () {
                        this.ensureKeyboardInteractions();
                        var i = this._keyboardInteractions,
                          l = i ? this.focusStateMachine : void 0;
                        if (!i || !l || !(this.canvas instanceof HTMLCanvasElement)) {
                          (this._prevHasFocus = !1), (this._prevWantsTextInputSession = !1);
                          return;
                        }
                        var S = l.focusState(),
                          I = S.hasFocus,
                          T = S.expectsKeyboardInput;
                        this.syncTextInputSession(i, this.wantsTextInputSession(T)),
                          this.syncRiveFocus(i, this.canvas, I);
                      }),
                      (m.prototype.syncTextInputSession = function (i, l) {
                        var S = i.editingHost,
                          I = this._accessibilityOverlay;
                        if (l) {
                          var T = !this._prevWantsTextInputSession;
                          if (T) {
                            var z =
                              !this._inPointerDownDrain &&
                              (i.isInFocusDomain(document.activeElement) ||
                                !!this._focusOptions.allowFocusInterrupt);
                            i.beginTextInputSession(z);
                          }
                          I &&
                            this._semanticTree &&
                            (S.hasDomFocus()
                              ? I.syncEditingHost(this._semanticTree, S, T || !I.hasEditingHost())
                              : I.hasEditingHost() && I.releaseEditingHost(this._semanticTree, S));
                        } else
                          this._prevWantsTextInputSession &&
                            (I?.releaseEditingHost(this._semanticTree, S), i.endTextInputSession());
                        this._prevWantsTextInputSession = l;
                      }),
                      (m.prototype.syncRiveFocus = function (i, l, S) {
                        S
                          ? (i.notifyRiveFocused(),
                            this._prevHasFocus ||
                              (!i.isInFocusDomain(document.activeElement) &&
                                this._focusOptions.allowFocusInterrupt &&
                                l.focus(),
                              (this._prevHasFocus = !0)))
                          : ((this._prevHasFocus = !1),
                            i.focusSessionState === oe.FocusSessionState.RiveFocused &&
                              i.setFocusSessionState(oe.FocusSessionState.NotFocused));
                      }),
                      (m.prototype.advanceAndReportChanges = function (i) {
                        for (
                          var l,
                            S,
                            I = this.animator.animations
                              .filter(function (Qe) {
                                return Qe.playing || Qe.needsScrub;
                              })
                              .sort(function (Qe) {
                                return Qe.needsScrub ? -1 : 1;
                              }),
                            T = 0,
                            z = I;
                          T < z.length;
                          T++
                        ) {
                          var ce = z[T];
                          ce.advance(i), ce.instance.didLoop && (ce.loopCount += 1), ce.apply(1);
                        }
                        for (
                          var fe = this.animator.stateMachines.filter(function (Qe) {
                              return Qe.playing;
                            }),
                            he = this.enablePerfMarks && this.frameCount < 3 ? this.frameCount : -1,
                            Me = 0,
                            Oe = fe;
                          Me < Oe.length;
                          Me++
                        ) {
                          var $e = Oe[Me],
                            nt = $e.reportedEventCount();
                          if (nt)
                            for (var et = 0; et < nt; et++) {
                              var ft = $e.reportedEventAt(et);
                              if (ft)
                                if (ft.type === _e.OpenUrl) {
                                  if (
                                    (this.eventManager.fire({ type: ee.RiveEvent, data: ft }),
                                    this.automaticallyHandleEvents)
                                  ) {
                                    var jt = document.createElement("a"),
                                      kt = ft,
                                      Tt = kt.url,
                                      _t = kt.target,
                                      wt = (0, oe.sanitizeUrl)(Tt);
                                    Tt && jt.setAttribute("href", wt),
                                      _t && jt.setAttribute("target", _t),
                                      wt && wt !== oe.BLANK_URL && jt.click();
                                  }
                                } else this.eventManager.fire({ type: ee.RiveEvent, data: ft });
                            }
                          if (
                            (he >= 0 && performance.mark("rive:sm-advance:start:f".concat(he)),
                            $e.advanceAndApply(i),
                            he >= 0 &&
                              (performance.mark("rive:sm-advance:end:f".concat(he)),
                              performance.measure(
                                "rive:sm-advance:f".concat(he),
                                "rive:sm-advance:start:f".concat(he),
                                "rive:sm-advance:end:f".concat(he),
                              )),
                            this._semanticsActive)
                          ) {
                            var Et = $e.drainSemanticsDiff();
                            Et &&
                              (this._semanticTree || (this._semanticTree = new re.SemanticTreeModel()),
                              this._semanticTree.applyDiff(Et));
                          }
                        }
                        if (
                          this._semanticsActive &&
                          this._semanticTree &&
                          fe.length > 0 &&
                          this.canvas instanceof HTMLCanvasElement
                        ) {
                          if (!this._accessibilityOverlay) {
                            var tt = fe[0];
                            this._accessibilityOverlay = new re.AccessibilityOverlay({
                              canvas: this.canvas,
                              instanceId: this._instanceId,
                              semanticsOptions: this.semanticsOptions,
                              allowFocusInterrupt: this._focusOptions.allowFocusInterrupt,
                              isEditingHostFocused: this.isEditingHostFocused,
                              fireAction: function (Qe, Ut) {
                                tt.fireSemanticAction(Qe, Ut);
                              },
                              requestFocus: function (Qe) {
                                return tt.focusSemanticNode(Qe);
                              },
                              clearFocus: function () {
                                return tt.instance.clearFocus();
                              },
                            });
                          }
                          var mt =
                            (l = this._accessibilityOverlay) === null || l === void 0
                              ? void 0
                              : l.needsUpdate(this._semanticTree);
                          if (mt || this._overlayTransformDirty) {
                            var bt = null;
                            if (mt?.layoutChanged || this._overlayTransformDirty) {
                              var Ae = this._layout.runtimeFit(this.runtime),
                                Yt = this._layout.runtimeAlignment(this.runtime);
                              (bt = this.runtime.computeAlignment(
                                Ae,
                                Yt,
                                {
                                  minX: this._layout.minX,
                                  minY: this._layout.minY,
                                  maxX: this._layout.maxX,
                                  maxY: this._layout.maxY,
                                },
                                this.artboard.bounds,
                                this._devicePixelRatioUsed * this._layout.layoutScaleFactor,
                              )),
                                (this._overlayTransformDirty = !1);
                            }
                            this._accessibilityOverlay.update(
                              this._semanticTree,
                              bt,
                              this._devicePixelRatioUsed,
                              this.artboard.bounds,
                              mt,
                            ),
                              bt?.delete();
                          }
                        }
                        this.animator.stateMachines.length == 0 && this.artboard.advance(i),
                          this.animator.handleLooping(),
                          this.animator.handleStateChanges(),
                          this.animator.handleAdvancing(i),
                          this.pollFocusState(),
                          (S = this._viewModelInstance) === null || S === void 0 || S.handleCallbacks(),
                          this._globalViewModelInstances.forEach(function (Qe) {
                            Qe && Qe.handleCallbacks();
                          });
                      }),
                      (m.prototype.draw = function (i, l) {
                        if (((this.frameRequestId = null), !!this.artboard)) {
                          var S = performance.now(),
                            I = this.enablePerfMarks && this.frameCount < 3 ? this.frameCount : -1;
                          this.lastRenderTime || (this.lastRenderTime = i),
                            (this.renderSecondTimer += i - this.lastRenderTime),
                            this.renderSecondTimer > 5e3 && ((this.renderSecondTimer = 0), l?.());
                          var T = (i - this.lastRenderTime) / 1e3;
                          (this.lastRenderTime = i), this.advanceAndReportChanges(T);
                          var z = this.renderer;
                          this._hasZeroSize ||
                            ((this.drawOptimization == D.AlwaysDraw ||
                              this.artboard.didChange() ||
                              this._deferredWorkPending() ||
                              this._needsRedraw ||
                              this._canvasSizeChanged()) &&
                              (z.clear(),
                              z.save(),
                              I >= 0 && performance.mark("rive:align-renderer:start:f".concat(I)),
                              this.alignRenderer(),
                              I >= 0 &&
                                (performance.mark("rive:align-renderer:end:f".concat(I)),
                                performance.measure(
                                  "rive:align-renderer:f".concat(I),
                                  "rive:align-renderer:start:f".concat(I),
                                  "rive:align-renderer:end:f".concat(I),
                                )),
                              I >= 0 && performance.mark("rive:artboard-draw:start:f".concat(I)),
                              this.artboard.draw(z),
                              I >= 0 &&
                                (performance.mark("rive:artboard-draw:end:f".concat(I)),
                                performance.measure(
                                  "rive:artboard-draw:f".concat(I),
                                  "rive:artboard-draw:start:f".concat(I),
                                  "rive:artboard-draw:end:f".concat(I),
                                )),
                              z.restore(),
                              I >= 0 && performance.mark("rive:renderer-flush:start:f".concat(I)),
                              z.flush(),
                              I >= 0 &&
                                (performance.mark("rive:renderer-flush:end:f".concat(I)),
                                performance.measure(
                                  "rive:renderer-flush:f".concat(I),
                                  "rive:renderer-flush:start:f".concat(I),
                                  "rive:renderer-flush:end:f".concat(I),
                                )),
                              (this._needsRedraw = !1))),
                            this.frameCount++;
                          var ce = performance.now();
                          for (
                            this.frameTimes.push(ce), this.durations.push(ce - S);
                            this.frameTimes[0] <= ce - 1e3;

                          )
                            this.frameTimes.shift(), this.durations.shift();
                          this.animator.isPlaying
                            ? this.scheduleRendering()
                            : this.animator.isPaused
                              ? (this.lastRenderTime = 0)
                              : this.animator.isStopped && (this.lastRenderTime = 0);
                        }
                      }),
                      (m.prototype.alignRenderer = function () {
                        var i = this,
                          l = i.renderer,
                          S = i.runtime,
                          I = i._layout,
                          T = i.artboard;
                        l.align(
                          I.runtimeFit(S),
                          I.runtimeAlignment(S),
                          { minX: I.minX, minY: I.minY, maxX: I.maxX, maxY: I.maxY },
                          T.bounds,
                          this._devicePixelRatioUsed * I.layoutScaleFactor,
                        );
                      }),
                      Object.defineProperty(m.prototype, "fps", {
                        get: function () {
                          return this.durations.length;
                        },
                        enumerable: !1,
                        configurable: !0,
                      }),
                      Object.defineProperty(m.prototype, "frameTime", {
                        get: function () {
                          return this.durations.length === 0
                            ? 0
                            : (
                                this.durations.reduce(function (i, l) {
                                  return i + l;
                                }, 0) / this.durations.length
                              ).toFixed(4);
                        },
                        enumerable: !1,
                        configurable: !0,
                      }),
                      (m.prototype.cleanup = function () {
                        var i, l, S, I, T;
                        (this.destroyed = !0),
                          this.stopRendering(),
                          (l = (i = this.renderer) === null || i === void 0 ? void 0 : i.bindContext) ===
                            null ||
                            l === void 0 ||
                            l.call(i),
                          this.cleanupInstances(),
                          this._observed !== null && Be.remove(this._observed),
                          this.removeRiveListeners(),
                          this.renderer &&
                            ((I = (S = this.renderer).detachSession) === null || I === void 0 || I.call(S)),
                          this.releaseCurrentRiveFile(!0),
                          (this.riveFile = null),
                          this.deleteRiveRenderer(),
                          this._audioEventListener !== null &&
                            (Fe.remove(this._audioEventListener), (this._audioEventListener = null)),
                          this._pageVisibilityHandler &&
                            (document.removeEventListener("visibilitychange", this._pageVisibilityHandler),
                            (this._pageVisibilityHandler = null)),
                          (T = this._viewModelInstance) === null || T === void 0 || T.cleanup(),
                          (this._viewModelInstance = null),
                          this._globalViewModelInstances.forEach(function (z) {
                            return z.cleanup();
                          }),
                          this._globalViewModelInstances.clear(),
                          (this._dataEnums = null);
                      }),
                      (m.prototype.releaseCurrentRiveFile = function (i) {
                        var l, S;
                        this.file
                          ? ((i || this.ownsRiveFile) &&
                              ((l = this.riveFile) === null || l === void 0 || l.cleanup()),
                            (this.file = null))
                          : this.ownsRiveFile &&
                            ((S = this.riveFile) === null || S === void 0 || S.destroyIfUnused());
                      }),
                      (m.prototype.deleteRiveRenderer = function () {
                        var i, l;
                        this.renderer &&
                          ((l = (i = this.renderer).detachSession) === null || l === void 0 || l.call(i),
                          this.renderer.delete()),
                          (this.renderer = null);
                      }),
                      Object.defineProperty(m.prototype, "deferredRendererActive", {
                        get: function () {
                          var i, l, S;
                          return (S =
                            (l = (i = this.renderer) === null || i === void 0 ? void 0 : i.deferredActive) ===
                              null || l === void 0
                              ? void 0
                              : l.call(i)) !== null && S !== void 0
                            ? S
                            : !1;
                        },
                        enumerable: !1,
                        configurable: !0,
                      }),
                      (m.prototype.cleanupInstances = function () {
                        var i;
                        this.eventCleanup !== null && this.eventCleanup(),
                          this.cleanupKeyboardInteractions(),
                          this.cleanupSemantics(),
                          (i = this.animator) === null || i === void 0 || i.stop(),
                          this.artboard && (this.artboard.delete(), (this.artboard = null));
                      }),
                      (m.prototype.retrieveTextRun = function (i) {
                        var l;
                        if (!i) {
                          console.warn("No text run name provided");
                          return;
                        }
                        if (!this.artboard) {
                          console.warn("Tried to access text run, but the Artboard is null");
                          return;
                        }
                        var S = this.artboard.textRun(i);
                        if (!S) {
                          console.warn(
                            "Could not access a text run with name '"
                              .concat(i, "' in the '")
                              .concat(
                                (l = this.artboard) === null || l === void 0 ? void 0 : l.name,
                                "' Artboard. Note that you must rename a text run node in the Rive editor to make it queryable at runtime.",
                              ),
                          );
                          return;
                        }
                        return S;
                      }),
                      (m.prototype.getTextRunValue = function (i) {
                        Z(j.textRuns, ke);
                        var l = this.retrieveTextRun(i);
                        return l ? l.text : void 0;
                      }),
                      (m.prototype.setTextRunValue = function (i, l) {
                        Z(j.textRuns, ke);
                        var S = this.retrieveTextRun(i);
                        S && (S.text = l);
                      }),
                      (m.prototype.warnIfLinearAnimationNames = function (i, l) {
                        this.animator &&
                          this.animator.animations.some(function (S) {
                            return i.includes(S.name);
                          }) &&
                          Ee(l);
                      }),
                      (m.prototype.play = function (i, l) {
                        var S = this;
                        ye(i, "play");
                        var I = ct(i);
                        if (!this.readyForPlaying) {
                          this.taskQueue.add({
                            action: function () {
                              return S.play(i, l);
                            },
                          });
                          return;
                        }
                        this.animator.play(I),
                          this.warnIfLinearAnimationNames(I, "play"),
                          this.syncSemanticsOnStateMachines(),
                          this.eventCleanup && this.eventCleanup(),
                          this.cleanupKeyboardInteractions(),
                          this.setupRiveListeners(),
                          this.startRendering();
                      }),
                      (m.prototype.pause = function (i) {
                        var l = this;
                        ye(i, "pause");
                        var S = ct(i);
                        if (!this.readyForPlaying) {
                          this.taskQueue.add({
                            action: function () {
                              return l.pause(i);
                            },
                          });
                          return;
                        }
                        this.eventCleanup && this.eventCleanup(),
                          this.cleanupKeyboardInteractions(),
                          this.animator.pause(S),
                          this.warnIfLinearAnimationNames(S, "pause");
                      }),
                      (m.prototype.scrub = function (i, l) {
                        var S = this;
                        Z(
                          j.scrub,
                          "`scrub()` is deprecated and will be removed in a future major version: use a state machine to control playback instead.",
                        );
                        var I = ct(i);
                        if (!this.readyForPlaying) {
                          this.taskQueue.add({
                            action: function () {
                              return S.scrub(i, l);
                            },
                          });
                          return;
                        }
                        this.animator.scrub(I, l || 0), this.drawFrame();
                      }),
                      (m.prototype.stop = function (i) {
                        var l = this;
                        ye(i, "stop");
                        var S = ct(i);
                        if (!this.readyForPlaying) {
                          this.taskQueue.add({
                            action: function () {
                              return l.stop(i);
                            },
                          });
                          return;
                        }
                        this.warnIfLinearAnimationNames(S, "stop"),
                          this.animator && this.animator.stop(S),
                          this.eventCleanup && this.eventCleanup(),
                          this.cleanupKeyboardInteractions(),
                          this.cleanupSemantics();
                      }),
                      (m.prototype.reset = function (i) {
                        var l,
                          S,
                          I = i?.artboard,
                          T = Ze({
                            stateMachine: i?.stateMachine,
                            animations: i?.animations,
                            stateMachines: i?.stateMachines,
                          }),
                          z = T.startingAnimationNames,
                          ce = T.startingStateMachineNames,
                          fe = (l = i?.autoplay) !== null && l !== void 0 ? l : !1,
                          he = (S = i?.autoBind) !== null && S !== void 0 ? S : !1;
                        this.cleanupInstances(),
                          this.initArtboard(I, z, ce, fe, he),
                          this.readyForPlaying && this.taskQueue.process();
                      }),
                      (m.prototype.load = function (i) {
                        if (!i.src && !i.buffer && !i.riveFile) throw new le(m.missingErrorMessage);
                        this.stop(), this.init(i);
                      }),
                      Object.defineProperty(m.prototype, "layout", {
                        get: function () {
                          return this._layout;
                        },
                        set: function (i) {
                          (this._layout = i),
                            this.reportDisplayScale(),
                            (this._overlayTransformDirty = !0),
                            (!i.maxX || !i.maxY) && this.resizeToCanvas(),
                            this.loaded && !this.animator.isPlaying && this.drawFrame();
                        },
                        enumerable: !1,
                        configurable: !0,
                      }),
                      (m.prototype.resizeToCanvas = function () {
                        (this._layout = this.layout.copyWith({
                          minX: 0,
                          minY: 0,
                          maxX: this.canvas.width,
                          maxY: this.canvas.height,
                        })),
                          (this._overlayTransformDirty = !0);
                      }),
                      (m.prototype.resizeDrawingSurfaceToCanvas = function (i) {
                        if (this.canvas instanceof HTMLCanvasElement && window) {
                          var l = this.canvas.getBoundingClientRect(),
                            S = l.width,
                            I = l.height,
                            T = i || window.devicePixelRatio || 1;
                          if (
                            ((this.devicePixelRatioUsed = T),
                            (this.canvas.width = T * S),
                            (this.canvas.height = T * I),
                            (this._needsRedraw = !0),
                            this.resizeToCanvas(),
                            this.layout.fit === ne.Layout && this.artboard)
                          ) {
                            var z = this._layout.layoutScaleFactor;
                            (this.artboard.width = S / z), (this.artboard.height = I / z);
                          }
                          this.drawFrame();
                        }
                      }),
                      Object.defineProperty(m.prototype, "source", {
                        get: function () {
                          return this.src;
                        },
                        enumerable: !1,
                        configurable: !0,
                      }),
                      Object.defineProperty(m.prototype, "activeArtboard", {
                        get: function () {
                          return this.artboard ? this.artboard.name : "";
                        },
                        enumerable: !1,
                        configurable: !0,
                      }),
                      Object.defineProperty(m.prototype, "semanticTree", {
                        get: function () {
                          return this._semanticTree;
                        },
                        enumerable: !1,
                        configurable: !0,
                      }),
                      Object.defineProperty(m.prototype, "accessibilityOverlay", {
                        get: function () {
                          return this._accessibilityOverlay;
                        },
                        enumerable: !1,
                        configurable: !0,
                      }),
                      Object.defineProperty(m.prototype, "animationNames", {
                        get: function () {
                          if (!this.loaded || !this.artboard) return [];
                          for (var i = [], l = 0; l < this.artboard.animationCount(); l++)
                            i.push(this.artboard.animationByIndex(l).name);
                          return i;
                        },
                        enumerable: !1,
                        configurable: !0,
                      }),
                      Object.defineProperty(m.prototype, "stateMachineNames", {
                        get: function () {
                          if (!this.loaded || !this.artboard) return [];
                          for (var i = [], l = 0; l < this.artboard.stateMachineCount(); l++)
                            i.push(this.artboard.stateMachineByIndex(l).name);
                          return i;
                        },
                        enumerable: !1,
                        configurable: !0,
                      }),
                      (m.prototype.stateMachineInputs = function (i) {
                        if ((Z(j.stateMachineInputs, xe), !!this.loaded)) {
                          var l = this.animator.stateMachines.find(function (S) {
                            return S.name === i;
                          });
                          return l?.inputs;
                        }
                      }),
                      (m.prototype.retrieveInputAtPath = function (i, l) {
                        if (!i) {
                          console.warn("No input name provided for path '".concat(l, "'"));
                          return;
                        }
                        if (!this.artboard) {
                          console.warn(
                            "Tried to access input: '"
                              .concat(i, "', at path: '")
                              .concat(l, "', but the Artboard is null"),
                          );
                          return;
                        }
                        var S = this.artboard.inputByPath(i, l);
                        if (!S) {
                          console.warn(
                            "Could not access an input with name: '".concat(i, "', at path:'").concat(l, "'"),
                          );
                          return;
                        }
                        return S;
                      }),
                      (m.prototype.setBooleanStateAtPath = function (i, l, S) {
                        Z(j.stateMachineInputs, xe);
                        var I = this.retrieveInputAtPath(i, S);
                        I &&
                          (I.type === Q.Boolean
                            ? (I.asBool().value = l)
                            : console.warn(
                                "Input with name: '"
                                  .concat(i, "', at path:'")
                                  .concat(S, "' is not a boolean"),
                              ));
                      }),
                      (m.prototype.setNumberStateAtPath = function (i, l, S) {
                        Z(j.stateMachineInputs, xe);
                        var I = this.retrieveInputAtPath(i, S);
                        I &&
                          (I.type === Q.Number
                            ? (I.asNumber().value = l)
                            : console.warn(
                                "Input with name: '".concat(i, "', at path:'").concat(S, "' is not a number"),
                              ));
                      }),
                      (m.prototype.fireStateAtPath = function (i, l) {
                        Z(j.stateMachineInputs, xe);
                        var S = this.retrieveInputAtPath(i, l);
                        S &&
                          (S.type === Q.Trigger
                            ? S.asTrigger().fire()
                            : console.warn(
                                "Input with name: '"
                                  .concat(i, "', at path:'")
                                  .concat(l, "' is not a trigger"),
                              ));
                      }),
                      (m.prototype.retrieveTextAtPath = function (i, l) {
                        if (!i) {
                          console.warn("No text name provided for path '".concat(l, "'"));
                          return;
                        }
                        if (!l) {
                          console.warn("No path provided for text '".concat(i, "'"));
                          return;
                        }
                        if (!this.artboard) {
                          console.warn(
                            "Tried to access text: '"
                              .concat(i, "', at path: '")
                              .concat(l, "', but the Artboard is null"),
                          );
                          return;
                        }
                        var S = this.artboard.textByPath(i, l);
                        if (!S) {
                          console.warn(
                            "Could not access text with name: '".concat(i, "', at path:'").concat(l, "'"),
                          );
                          return;
                        }
                        return S;
                      }),
                      (m.prototype.getTextRunValueAtPath = function (i, l) {
                        Z(j.textRuns, ke);
                        var S = this.retrieveTextAtPath(i, l);
                        if (!S) {
                          console.warn(
                            "Could not get text with name: '".concat(i, "', at path:'").concat(l, "'"),
                          );
                          return;
                        }
                        return S.text;
                      }),
                      (m.prototype.setTextRunValueAtPath = function (i, l, S) {
                        Z(j.textRuns, ke);
                        var I = this.retrieveTextAtPath(i, S);
                        if (!I) {
                          console.warn(
                            "Could not set text with name: '".concat(i, "', at path:'").concat(S, "'"),
                          );
                          return;
                        }
                        I.text = l;
                      }),
                      Object.defineProperty(m.prototype, "playingStateMachineNames", {
                        get: function () {
                          return this.loaded
                            ? this.animator.stateMachines
                                .filter(function (i) {
                                  return i.playing;
                                })
                                .map(function (i) {
                                  return i.name;
                                })
                            : [];
                        },
                        enumerable: !1,
                        configurable: !0,
                      }),
                      Object.defineProperty(m.prototype, "playingAnimationNames", {
                        get: function () {
                          return this.loaded
                            ? this.animator.animations
                                .filter(function (i) {
                                  return i.playing;
                                })
                                .map(function (i) {
                                  return i.name;
                                })
                            : [];
                        },
                        enumerable: !1,
                        configurable: !0,
                      }),
                      Object.defineProperty(m.prototype, "pausedAnimationNames", {
                        get: function () {
                          return this.loaded
                            ? this.animator.animations
                                .filter(function (i) {
                                  return !i.playing;
                                })
                                .map(function (i) {
                                  return i.name;
                                })
                            : [];
                        },
                        enumerable: !1,
                        configurable: !0,
                      }),
                      Object.defineProperty(m.prototype, "pausedStateMachineNames", {
                        get: function () {
                          return this.loaded
                            ? this.animator.stateMachines
                                .filter(function (i) {
                                  return !i.playing;
                                })
                                .map(function (i) {
                                  return i.name;
                                })
                            : [];
                        },
                        enumerable: !1,
                        configurable: !0,
                      }),
                      Object.defineProperty(m.prototype, "isPlaying", {
                        get: function () {
                          return this.animator.isPlaying;
                        },
                        enumerable: !1,
                        configurable: !0,
                      }),
                      Object.defineProperty(m.prototype, "isPaused", {
                        get: function () {
                          return this.animator.isPaused;
                        },
                        enumerable: !1,
                        configurable: !0,
                      }),
                      Object.defineProperty(m.prototype, "isStopped", {
                        get: function () {
                          var i, l;
                          return (l = (i = this.animator) === null || i === void 0 ? void 0 : i.isStopped) !==
                            null && l !== void 0
                            ? l
                            : !0;
                        },
                        enumerable: !1,
                        configurable: !0,
                      }),
                      Object.defineProperty(m.prototype, "bounds", {
                        get: function () {
                          return this.artboard ? this.artboard.bounds : void 0;
                        },
                        enumerable: !1,
                        configurable: !0,
                      }),
                      (m.prototype.on = function (i, l) {
                        i === ee.RiveEvent
                          ? Z(j.riveEvents, ze)
                          : i === ee.StateChange
                            ? Z(j.stateChangeEvents, A)
                            : i === ee.Loop && Z(j.loopEvents, ae),
                          this.eventManager.add({ type: i, callback: l });
                      }),
                      (m.prototype.off = function (i, l) {
                        this.eventManager.remove({ type: i, callback: l });
                      }),
                      (m.prototype.unsubscribe = function (i, l) {
                        Z(j.legacyUnsubscribe, "This function is deprecated: please use `off()` instead."),
                          this.off(i, l);
                      }),
                      (m.prototype.removeAllRiveEventListeners = function (i) {
                        this.eventManager.removeAll(i);
                      }),
                      (m.prototype.unsubscribeAll = function (i) {
                        Z(
                          j.legacyUnsubscribe,
                          "This function is deprecated: please use `removeAllRiveEventListeners()` instead.",
                        ),
                          this.removeAllRiveEventListeners(i);
                      }),
                      (m.prototype.stopRendering = function () {
                        (this._explicitlyStoppedRendering = !0),
                          this.loaded &&
                            this.frameRequestId &&
                            (this.runtime.cancelAnimationFrame
                              ? this.runtime.cancelAnimationFrame(this.frameRequestId)
                              : cancelAnimationFrame(this.frameRequestId),
                            (this.frameRequestId = null));
                      }),
                      (m.prototype.startRendering = function () {
                        (this._explicitlyStoppedRendering = !1), this.drawFrame();
                      }),
                      (m.prototype.scheduleRendering = function () {
                        this.loaded &&
                          this.artboard &&
                          !this.frameRequestId &&
                          (this.runtime.requestAnimationFrame
                            ? (this.frameRequestId = this.runtime.requestAnimationFrame(this._boundDraw))
                            : (this.frameRequestId = requestAnimationFrame(this._boundDraw)));
                      }),
                      (m.prototype._onPageVisibilityChange = function () {
                        var i, l;
                        document.hidden
                          ? (this.frameRequestId !== null &&
                              (!((i = this.runtime) === null || i === void 0) && i.cancelAnimationFrame
                                ? this.runtime.cancelAnimationFrame(this.frameRequestId)
                                : cancelAnimationFrame(this.frameRequestId),
                              (this.frameRequestId = null)),
                            (this.lastRenderTime = 0))
                          : !((l = this.animator) === null || l === void 0) &&
                            l.isPlaying &&
                            !this._explicitlyStoppedRendering &&
                            this.scheduleRendering();
                      }),
                      (m.prototype.enableFPSCounter = function (i) {
                        this.runtime.enableFPSCounter(i);
                      }),
                      (m.prototype.disableFPSCounter = function () {
                        this.runtime.disableFPSCounter();
                      }),
                      Object.defineProperty(m.prototype, "contents", {
                        get: function () {
                          if (this.loaded) {
                            for (var i = { artboards: [] }, l = 0; l < this.file.artboardCount(); l++) {
                              for (
                                var S = this.file.artboardByIndex(l),
                                  I = { name: S.name, animations: [], stateMachines: [] },
                                  T = 0;
                                T < S.animationCount();
                                T++
                              ) {
                                var z = S.animationByIndex(T);
                                I.animations.push(z.name);
                              }
                              for (var ce = 0; ce < S.stateMachineCount(); ce++) {
                                for (
                                  var fe = S.stateMachineByIndex(ce),
                                    he = fe.name,
                                    Me = new this.runtime.StateMachineInstance(fe, S),
                                    Oe = [],
                                    $e = 0;
                                  $e < Me.inputCount();
                                  $e++
                                ) {
                                  var nt = Me.input($e);
                                  Oe.push({ name: nt.name, type: nt.type });
                                }
                                I.stateMachines.push({ name: he, inputs: Oe });
                              }
                              i.artboards.push(I);
                            }
                            return i;
                          }
                        },
                        enumerable: !1,
                        configurable: !0,
                      }),
                      Object.defineProperty(m.prototype, "volume", {
                        get: function () {
                          return (
                            this.artboard &&
                              this.artboard.volume !== this._volume &&
                              (this._volume = this.artboard.volume),
                            this._volume
                          );
                        },
                        set: function (i) {
                          (this._volume = i), this.artboard && (this.artboard.volume = i * Fe.systemVolume);
                        },
                        enumerable: !1,
                        configurable: !0,
                      }),
                      Object.defineProperty(m.prototype, "artboardWidth", {
                        get: function () {
                          var i;
                          return this.artboard
                            ? this.artboard.width
                            : (i = this._artboardWidth) !== null && i !== void 0
                              ? i
                              : 0;
                        },
                        set: function (i) {
                          (this._artboardWidth = i), this.artboard && (this.artboard.width = i);
                        },
                        enumerable: !1,
                        configurable: !0,
                      }),
                      Object.defineProperty(m.prototype, "artboardHeight", {
                        get: function () {
                          var i;
                          return this.artboard
                            ? this.artboard.height
                            : (i = this._artboardHeight) !== null && i !== void 0
                              ? i
                              : 0;
                        },
                        set: function (i) {
                          (this._artboardHeight = i), this.artboard && (this.artboard.height = i);
                        },
                        enumerable: !1,
                        configurable: !0,
                      }),
                      (m.prototype.resetArtboardSize = function () {
                        this.artboard
                          ? (this.artboard.resetArtboardSize(),
                            (this._artboardWidth = this.artboard.width),
                            (this._artboardHeight = this.artboard.height))
                          : ((this._artboardWidth = void 0), (this._artboardHeight = void 0));
                      }),
                      Object.defineProperty(m.prototype, "devicePixelRatioUsed", {
                        get: function () {
                          return this._devicePixelRatioUsed;
                        },
                        set: function (i) {
                          i !== this._devicePixelRatioUsed && (this._overlayTransformDirty = !0),
                            (this._devicePixelRatioUsed = i),
                            this.reportDisplayScale();
                        },
                        enumerable: !1,
                        configurable: !0,
                      }),
                      Object.defineProperty(m.prototype, "inkbleed", {
                        get: function () {
                          return this._inkbleedCapable && this._inkbleed;
                        },
                        set: function (i) {
                          if (!this._inkbleedCapable) {
                            i &&
                              !m.inkbleedNotCapableWarned &&
                              ((m.inkbleedNotCapableWarned = !0),
                              console.warn(
                                "Rive: `inkbleed` can't be enabled on this instance. It needs `enableInkbleed: true` at construction, on @rive-app/webgl2 without `useOffscreenRenderer`.",
                              ));
                            return;
                          }
                          (this._inkbleed = i),
                            this.renderer && this.applyInkbleed(),
                            (this._needsRedraw = !0),
                            this.drawFrame();
                        },
                        enumerable: !1,
                        configurable: !0,
                      }),
                      (m.prototype.applyInkbleed = function () {
                        var i = this._inkbleed,
                          l = this.renderer.setInkbleed,
                          S = typeof l == "function" ? l.call(this.renderer, i) : !i;
                        S ||
                          ((this._inkbleedCapable = !1),
                          m.inkbleedUnsupportedWarned ||
                            ((m.inkbleedUnsupportedWarned = !0),
                            console.warn(
                              "Rive: `inkbleed` is not supported by this renderer (it needs @rive-app/webgl2 without `useOffscreenRenderer`, and a canvas context with depth and stencil). Rendering without it.",
                            )));
                      }),
                      (m.prototype.reportDisplayScale = function () {
                        var i;
                        (i = this.file) === null ||
                          i === void 0 ||
                          i.displayScale(this._devicePixelRatioUsed * this._layout.layoutScaleFactor);
                      }),
                      (m.prototype.bindViewModelInstance = function (i) {
                        i && (this.setViewModelInstance(i), this.bind());
                      }),
                      (m.prototype.setViewModelInstance = function (i) {
                        var l,
                          S = i?.runtimeInstance;
                        !this.artboard ||
                          this.destroyed ||
                          !i ||
                          !S ||
                          (i.internalIncrementReferenceCount(),
                          (l = this._viewModelInstance) === null || l === void 0 || l.cleanup(),
                          (this._viewModelInstance = i),
                          this.animator.stateMachines.length > 0
                            ? this.animator.stateMachines.forEach(function (I) {
                                return I.instance.setViewModelInstance(S);
                              })
                            : this.artboard.setViewModelInstance(S));
                      }),
                      (m.prototype.bind = function () {
                        !this.artboard ||
                          this.destroyed ||
                          (this.animator.stateMachines.length > 0
                            ? this.animator.stateMachines.forEach(function (i) {
                                return i.instance.bind();
                              })
                            : this.artboard.bind());
                      }),
                      Object.defineProperty(m.prototype, "viewModelInstance", {
                        get: function () {
                          return this._viewModelInstance;
                        },
                        enumerable: !1,
                        configurable: !0,
                      }),
                      (m.prototype.setGlobalViewModelInstance = function (i, l) {
                        var S,
                          I = l?.runtimeInstance;
                        if (!this.artboard || this.destroyed || !I) return !1;
                        var T = !1;
                        return (
                          this.animator.stateMachines.length > 0
                            ? this.animator.stateMachines.forEach(function (z) {
                                z.instance.setGlobalViewModelInstance(i, I) && (T = !0);
                              })
                            : (T = this.artboard.setGlobalViewModelInstance(i, I)),
                          T &&
                            (l.internalIncrementReferenceCount(),
                            (S = this._globalViewModelInstances.get(i)) === null ||
                              S === void 0 ||
                              S.cleanup(),
                            this._globalViewModelInstances.set(i, l)),
                          T
                        );
                      }),
                      (m.prototype.globalViewModelInstance = function (i) {
                        var l = this._globalViewModelInstances.get(i);
                        if (l) return l;
                        if (!this.artboard || this.destroyed) return null;
                        var S =
                          this.animator.stateMachines.length > 0
                            ? this.animator.stateMachines[0].instance.globalViewModelInstance(i)
                            : this.artboard.globalViewModelInstance(i);
                        if (S === null) return null;
                        var I = new Ye(S, null);
                        return (
                          (0, oe.createFinalization)(I, S),
                          I.internalIncrementReferenceCount(),
                          this._globalViewModelInstances.set(i, I),
                          I
                        );
                      }),
                      (m.prototype.globalViewModelNames = function () {
                        var i, l;
                        return (l =
                          (i = this.file) === null || i === void 0 ? void 0 : i.globalViewModelNames()) !==
                          null && l !== void 0
                          ? l
                          : [];
                      }),
                      (m.prototype.viewModelByIndex = function (i) {
                        var l = this.file.viewModelByIndex(i);
                        return l !== null ? new Je(l) : null;
                      }),
                      (m.prototype.viewModelByName = function (i) {
                        var l;
                        return (l = this.riveFile) === null || l === void 0 ? void 0 : l.viewModelByName(i);
                      }),
                      (m.prototype.enums = function () {
                        if (this._dataEnums === null) {
                          var i = this.file.enums();
                          this._dataEnums = i.map(function (l) {
                            return new lt(l);
                          });
                        }
                        return this._dataEnums;
                      }),
                      (m.prototype.defaultViewModel = function () {
                        if (this.artboard) {
                          var i = this.file.defaultArtboardViewModel(this.artboard);
                          if (i) return new Je(i);
                        }
                        return null;
                      }),
                      (m.prototype.getArtboard = function (i) {
                        var l, S;
                        return (S =
                          (l = this.riveFile) === null || l === void 0 ? void 0 : l.getArtboard(i)) !==
                          null && S !== void 0
                          ? S
                          : null;
                      }),
                      (m.prototype.getBindableArtboard = function (i) {
                        var l, S;
                        return (S =
                          (l = this.riveFile) === null || l === void 0
                            ? void 0
                            : l.getBindableArtboard(i)) !== null && S !== void 0
                          ? S
                          : null;
                      }),
                      (m.prototype.getDefaultBindableArtboard = function () {
                        var i, l;
                        return (l =
                          (i = this.riveFile) === null || i === void 0
                            ? void 0
                            : i.getDefaultBindableArtboard()) !== null && l !== void 0
                          ? l
                          : null;
                      }),
                      (m.prototype.clearFocus = function () {
                        var i = this.animator.stateMachines.filter(function (l) {
                          return l.playing && l.hasFocusNodes;
                        });
                        i.forEach(function (l) {
                          return l.clearFocus();
                        });
                      }),
                      (m.inkbleedUnsupportedWarned = !1),
                      (m.inkbleedNotCapableWarned = !1),
                      (m.missingErrorMessage = "Rive source file or data buffer required"),
                      (m.cleanupErrorMessage = "Attempt to use file after calling cleanup."),
                      m
                    );
                  })(),
                  rt;
                (function (m) {
                  (m.none = "none"),
                    (m.string = "string"),
                    (m.number = "number"),
                    (m.boolean = "boolean"),
                    (m.color = "color"),
                    (m.list = "list"),
                    (m.enumType = "enumType"),
                    (m.trigger = "trigger"),
                    (m.viewModel = "viewModel"),
                    (m.integer = "integer"),
                    (m.listIndex = "listIndex"),
                    (m.image = "image"),
                    (m.artboard = "artboard");
                })(rt || (rt = {}));
                var Je = (function () {
                    function m(i) {
                      this._viewModel = i;
                    }
                    return (
                      Object.defineProperty(m.prototype, "instanceCount", {
                        get: function () {
                          return this._viewModel.instanceCount;
                        },
                        enumerable: !1,
                        configurable: !0,
                      }),
                      Object.defineProperty(m.prototype, "name", {
                        get: function () {
                          return this._viewModel.name;
                        },
                        enumerable: !1,
                        configurable: !0,
                      }),
                      (m.prototype.instanceByIndex = function (i) {
                        var l = this._viewModel.instanceByIndex(i);
                        if (l !== null) {
                          var S = new Ye(l, null);
                          return (0, oe.createFinalization)(S, l), S;
                        }
                        return null;
                      }),
                      (m.prototype.instanceByName = function (i) {
                        var l = this._viewModel.instanceByName(i);
                        if (l !== null) {
                          var S = new Ye(l, null);
                          return (0, oe.createFinalization)(S, l), S;
                        }
                        return null;
                      }),
                      (m.prototype.defaultInstance = function () {
                        var i = this._viewModel.defaultInstance();
                        if (i !== null) {
                          var l = new Ye(i, null);
                          return (0, oe.createFinalization)(l, i), l;
                        }
                        return null;
                      }),
                      (m.prototype.instance = function () {
                        var i = this._viewModel.instance();
                        if (i !== null) {
                          var l = new Ye(i, null);
                          return (0, oe.createFinalization)(l, i), l;
                        }
                        return null;
                      }),
                      Object.defineProperty(m.prototype, "properties", {
                        get: function () {
                          return this._viewModel.getProperties();
                        },
                        enumerable: !1,
                        configurable: !0,
                      }),
                      Object.defineProperty(m.prototype, "instanceNames", {
                        get: function () {
                          return this._viewModel.getInstanceNames();
                        },
                        enumerable: !1,
                        configurable: !0,
                      }),
                      m
                    );
                  })(),
                  lt = (function () {
                    function m(i) {
                      this._dataEnum = i;
                    }
                    return (
                      Object.defineProperty(m.prototype, "name", {
                        get: function () {
                          return this._dataEnum.name;
                        },
                        enumerable: !1,
                        configurable: !0,
                      }),
                      Object.defineProperty(m.prototype, "values", {
                        get: function () {
                          return this._dataEnum.values;
                        },
                        enumerable: !1,
                        configurable: !0,
                      }),
                      m
                    );
                  })(),
                  Te;
                (function (m) {
                  (m.Number = "number"),
                    (m.String = "string"),
                    (m.Boolean = "boolean"),
                    (m.Color = "color"),
                    (m.Trigger = "trigger"),
                    (m.Enum = "enum"),
                    (m.List = "list"),
                    (m.Image = "image"),
                    (m.Font = "font"),
                    (m.Artboard = "artboard");
                })(Te || (Te = {}));
                var Ye = (function () {
                    function m(i, l) {
                      (this._parents = []),
                        (this._children = []),
                        (this._viewModelInstances = new Map()),
                        (this._propertiesWithCallbacks = []),
                        (this._referenceCount = 0),
                        (this.selfUnref = !1),
                        (this._runtimeInstance = i),
                        l !== null && this._parents.push(l);
                    }
                    return (
                      Object.defineProperty(m.prototype, "runtimeInstance", {
                        get: function () {
                          return this._runtimeInstance;
                        },
                        enumerable: !1,
                        configurable: !0,
                      }),
                      Object.defineProperty(m.prototype, "nativeInstance", {
                        get: function () {
                          return this._runtimeInstance;
                        },
                        enumerable: !1,
                        configurable: !0,
                      }),
                      (m.prototype.handleCallbacks = function () {
                        this._propertiesWithCallbacks.length !== 0 &&
                          (this._propertiesWithCallbacks.forEach(function (i) {
                            i.handleCallbacks();
                          }),
                          this._propertiesWithCallbacks.forEach(function (i) {
                            i.clearChanges();
                          })),
                          this._children.forEach(function (i) {
                            return i.handleCallbacks();
                          });
                      }),
                      (m.prototype.addParent = function (i) {
                        this._parents.includes(i) ||
                          (this._parents.push(i),
                          (this._propertiesWithCallbacks.length > 0 || this._children.length > 0) &&
                            i.addToViewModelCallbacks(this));
                      }),
                      (m.prototype.removeParent = function (i) {
                        var l = this._parents.indexOf(i);
                        if (l !== -1) {
                          var S = this._parents[l];
                          S.removeFromViewModelCallbacks(this), this._parents.splice(l, 1);
                        }
                      }),
                      (m.prototype.addToPropertyCallbacks = function (i) {
                        var l = this;
                        this._propertiesWithCallbacks.includes(i) ||
                          (this._propertiesWithCallbacks.push(i),
                          this._propertiesWithCallbacks.length > 0 &&
                            this._parents.forEach(function (S) {
                              S.addToViewModelCallbacks(l);
                            }));
                      }),
                      (m.prototype.removeFromPropertyCallbacks = function (i) {
                        var l = this;
                        this._propertiesWithCallbacks.includes(i) &&
                          ((this._propertiesWithCallbacks = this._propertiesWithCallbacks.filter(
                            function (S) {
                              return S !== i;
                            },
                          )),
                          this._children.length === 0 &&
                            this._propertiesWithCallbacks.length === 0 &&
                            this._parents.forEach(function (S) {
                              S.removeFromViewModelCallbacks(l);
                            }));
                      }),
                      (m.prototype.addToViewModelCallbacks = function (i) {
                        var l = this;
                        this._children.includes(i) ||
                          (this._children.push(i),
                          this._parents.forEach(function (S) {
                            S.addToViewModelCallbacks(l);
                          }));
                      }),
                      (m.prototype.removeFromViewModelCallbacks = function (i) {
                        var l = this;
                        this._children.includes(i) &&
                          ((this._children = this._children.filter(function (S) {
                            return S !== i;
                          })),
                          this._children.length === 0 &&
                            this._propertiesWithCallbacks.length === 0 &&
                            this._parents.forEach(function (S) {
                              S.removeFromViewModelCallbacks(l);
                            }));
                      }),
                      (m.prototype.clearCallbacks = function () {
                        this._propertiesWithCallbacks.forEach(function (i) {
                          i.clearCallbacks();
                        });
                      }),
                      (m.prototype.propertyFromPath = function (i, l) {
                        var S = i.split("../shop/");
                        return this.propertyFromPathSegments(S, 0, l);
                      }),
                      (m.prototype.viewModelFromPathSegments = function (i, l) {
                        var S = this.internalViewModelInstance(i[l]);
                        return S !== null
                          ? l == i.length - 1
                            ? S
                            : S.viewModelFromPathSegments(i, l++)
                          : null;
                      }),
                      (m.prototype.propertyFromPathSegments = function (i, l, S) {
                        var I, T, z, ce, fe, he, Me, Oe, $e, nt, et, ft, jt, kt, Tt, _t, wt, Et, tt, mt;
                        if (l < i.length - 1) {
                          var bt = this.internalViewModelInstance(i[l]);
                          return bt !== null ? bt.propertyFromPathSegments(i, l + 1, S) : null;
                        }
                        var Ae = null;
                        switch (S) {
                          case Te.Number:
                            if (
                              ((Ae =
                                (T =
                                  (I = this._runtimeInstance) === null || I === void 0
                                    ? void 0
                                    : I.number(i[l])) !== null && T !== void 0
                                  ? T
                                  : null),
                              Ae !== null)
                            )
                              return new ot(Ae, this);
                            break;
                          case Te.String:
                            if (
                              ((Ae =
                                (ce =
                                  (z = this._runtimeInstance) === null || z === void 0
                                    ? void 0
                                    : z.string(i[l])) !== null && ce !== void 0
                                  ? ce
                                  : null),
                              Ae !== null)
                            )
                              return new it(Ae, this);
                            break;
                          case Te.Boolean:
                            if (
                              ((Ae =
                                (he =
                                  (fe = this._runtimeInstance) === null || fe === void 0
                                    ? void 0
                                    : fe.boolean(i[l])) !== null && he !== void 0
                                  ? he
                                  : null),
                              Ae !== null)
                            )
                              return new St(Ae, this);
                            break;
                          case Te.Color:
                            if (
                              ((Ae =
                                (Oe =
                                  (Me = this._runtimeInstance) === null || Me === void 0
                                    ? void 0
                                    : Me.color(i[l])) !== null && Oe !== void 0
                                  ? Oe
                                  : null),
                              Ae !== null)
                            )
                              return new ut(Ae, this);
                            break;
                          case Te.Trigger:
                            if (
                              ((Ae =
                                (nt =
                                  ($e = this._runtimeInstance) === null || $e === void 0
                                    ? void 0
                                    : $e.trigger(i[l])) !== null && nt !== void 0
                                  ? nt
                                  : null),
                              Ae !== null)
                            )
                              return new Ke(Ae, this);
                            break;
                          case Te.Enum:
                            if (
                              ((Ae =
                                (ft =
                                  (et = this._runtimeInstance) === null || et === void 0
                                    ? void 0
                                    : et.enum(i[l])) !== null && ft !== void 0
                                  ? ft
                                  : null),
                              Ae !== null)
                            )
                              return new at(Ae, this);
                            break;
                          case Te.List:
                            if (
                              ((Ae =
                                (kt =
                                  (jt = this._runtimeInstance) === null || jt === void 0
                                    ? void 0
                                    : jt.list(i[l])) !== null && kt !== void 0
                                  ? kt
                                  : null),
                              Ae !== null)
                            )
                              return new ht(Ae, this);
                            break;
                          case Te.Image:
                            if (
                              ((Ae =
                                (_t =
                                  (Tt = this._runtimeInstance) === null || Tt === void 0
                                    ? void 0
                                    : Tt.image(i[l])) !== null && _t !== void 0
                                  ? _t
                                  : null),
                              Ae !== null)
                            )
                              return new Rt(Ae, this);
                            break;
                          case Te.Font:
                            if (
                              ((Ae =
                                (Et =
                                  (wt = this._runtimeInstance) === null || wt === void 0
                                    ? void 0
                                    : wt.font(i[l])) !== null && Et !== void 0
                                  ? Et
                                  : null),
                              Ae !== null)
                            )
                              return new It(Ae, this);
                            break;
                          case Te.Artboard:
                            if (
                              ((Ae =
                                (mt =
                                  (tt = this._runtimeInstance) === null || tt === void 0
                                    ? void 0
                                    : tt.artboard(i[l])) !== null && mt !== void 0
                                  ? mt
                                  : null),
                              Ae !== null)
                            )
                              return new xt(Ae, this);
                            break;
                        }
                        return null;
                      }),
                      (m.prototype.internalViewModelInstance = function (i) {
                        var l;
                        if (this._viewModelInstances.has(i)) return this._viewModelInstances.get(i);
                        var S =
                          (l = this._runtimeInstance) === null || l === void 0 ? void 0 : l.viewModel(i);
                        if (S !== null) {
                          var I = new m(S, this);
                          return (
                            (0, oe.createFinalization)(I, S),
                            I.internalIncrementReferenceCount(),
                            this._viewModelInstances.set(i, I),
                            I
                          );
                        }
                        return null;
                      }),
                      (m.prototype.number = function (i) {
                        var l = this.propertyFromPath(i, Te.Number);
                        return l;
                      }),
                      (m.prototype.string = function (i) {
                        var l = this.propertyFromPath(i, Te.String);
                        return l;
                      }),
                      (m.prototype.boolean = function (i) {
                        var l = this.propertyFromPath(i, Te.Boolean);
                        return l;
                      }),
                      (m.prototype.color = function (i) {
                        var l = this.propertyFromPath(i, Te.Color);
                        return l;
                      }),
                      (m.prototype.trigger = function (i) {
                        var l = this.propertyFromPath(i, Te.Trigger);
                        return l;
                      }),
                      (m.prototype.enum = function (i) {
                        var l = this.propertyFromPath(i, Te.Enum);
                        return l;
                      }),
                      (m.prototype.list = function (i) {
                        var l = this.propertyFromPath(i, Te.List);
                        return l;
                      }),
                      (m.prototype.image = function (i) {
                        var l = this.propertyFromPath(i, Te.Image);
                        return l;
                      }),
                      (m.prototype.font = function (i) {
                        var l = this.propertyFromPath(i, Te.Font);
                        return l;
                      }),
                      (m.prototype.artboard = function (i) {
                        var l = this.propertyFromPath(i, Te.Artboard);
                        return l;
                      }),
                      (m.prototype.viewModel = function (i) {
                        var l = i.split("../shop/"),
                          S =
                            l.length > 1 ? this.viewModelFromPathSegments(l.slice(0, l.length - 1), 0) : this;
                        return S != null ? S.internalViewModelInstance(l[l.length - 1]) : null;
                      }),
                      (m.prototype.internalReplaceViewModel = function (i, l) {
                        var S;
                        if (l.runtimeInstance !== null) {
                          var I =
                            ((S = this._runtimeInstance) === null || S === void 0
                              ? void 0
                              : S.replaceViewModel(i, l.runtimeInstance)) || !1;
                          if (I) {
                            l.internalIncrementReferenceCount();
                            var T = this.internalViewModelInstance(i);
                            T !== null &&
                              (T.removeParent(this),
                              this._children.includes(T) &&
                                (this._children = this._children.filter(function (z) {
                                  return z !== T;
                                })),
                              T.cleanup()),
                              this._viewModelInstances.set(i, l),
                              l.addParent(this);
                          }
                          return I;
                        }
                        return !1;
                      }),
                      (m.prototype.replaceViewModel = function (i, l) {
                        var S,
                          I = i.split("../shop/"),
                          T =
                            I.length > 1 ? this.viewModelFromPathSegments(I.slice(0, I.length - 1), 0) : this;
                        return (S = T?.internalReplaceViewModel(I[I.length - 1], l)) !== null && S !== void 0
                          ? S
                          : !1;
                      }),
                      (m.prototype.incrementReferenceCount = function () {
                        var i;
                        this._referenceCount++,
                          (i = this._runtimeInstance) === null || i === void 0 || i.incrementReferenceCount();
                      }),
                      (m.prototype.decrementReferenceCount = function () {
                        var i;
                        this._referenceCount--,
                          (i = this._runtimeInstance) === null || i === void 0 || i.decrementReferenceCount();
                      }),
                      Object.defineProperty(m.prototype, "properties", {
                        get: function () {
                          var i;
                          return (
                            ((i = this._runtimeInstance) === null || i === void 0
                              ? void 0
                              : i.getProperties().map(function (l) {
                                  return M({}, l);
                                })) || []
                          );
                        },
                        enumerable: !1,
                        configurable: !0,
                      }),
                      Object.defineProperty(m.prototype, "viewModelName", {
                        get: function () {
                          var i, l;
                          return (l =
                            (i = this._runtimeInstance) === null || i === void 0
                              ? void 0
                              : i.getViewModelName()) !== null && l !== void 0
                            ? l
                            : "";
                        },
                        enumerable: !1,
                        configurable: !0,
                      }),
                      (m.prototype.internalIncrementReferenceCount = function () {
                        this._referenceCount++;
                      }),
                      (m.prototype.cleanup = function () {
                        var i = this,
                          l;
                        if ((this._referenceCount--, this._referenceCount <= 0)) {
                          this.selfUnref &&
                            ((l = this._runtimeInstance) === null || l === void 0 || l.unref()),
                            (this._runtimeInstance = null),
                            this.clearCallbacks(),
                            (this._propertiesWithCallbacks = []),
                            this._viewModelInstances.forEach(function (T) {
                              T.cleanup();
                            }),
                            this._viewModelInstances.clear();
                          var S = k([], this._children);
                          this._children.length = 0;
                          var I = k([], this._parents);
                          (this._parents.length = 0),
                            S.forEach(function (T) {
                              T.removeParent(i);
                            }),
                            I.forEach(function (T) {
                              T.removeFromViewModelCallbacks(i);
                            });
                        }
                      }),
                      m
                    );
                  })(),
                  de = (function () {
                    function m(i, l) {
                      (this.callbacks = []), (this._viewModelInstanceValue = i), (this._parentViewModel = l);
                    }
                    return (
                      (m.prototype.on = function (i) {
                        this.callbacks.length === 0 && this._viewModelInstanceValue.clearChanges(),
                          this.callbacks.includes(i) ||
                            (this.callbacks.push(i), this._parentViewModel.addToPropertyCallbacks(this));
                      }),
                      (m.prototype.off = function (i) {
                        i
                          ? (this.callbacks = this.callbacks.filter(function (l) {
                              return l !== i;
                            }))
                          : (this.callbacks.length = 0),
                          this.callbacks.length === 0 &&
                            this._parentViewModel.removeFromPropertyCallbacks(this);
                      }),
                      (m.prototype.internalHandleCallback = function (i) {}),
                      (m.prototype.handleCallbacks = function () {
                        var i = this;
                        this._viewModelInstanceValue.hasChanged &&
                          this.callbacks.forEach(function (l) {
                            i.internalHandleCallback(l);
                          });
                      }),
                      (m.prototype.clearChanges = function () {
                        this._viewModelInstanceValue.clearChanges();
                      }),
                      (m.prototype.clearCallbacks = function () {
                        this.callbacks.length = 0;
                      }),
                      Object.defineProperty(m.prototype, "name", {
                        get: function () {
                          return this._viewModelInstanceValue.name;
                        },
                        enumerable: !1,
                        configurable: !0,
                      }),
                      m
                    );
                  })(),
                  it = (function (m) {
                    P(i, m);
                    function i(l, S) {
                      return m.call(this, l, S) || this;
                    }
                    return (
                      Object.defineProperty(i.prototype, "value", {
                        get: function () {
                          return this._viewModelInstanceValue.value;
                        },
                        set: function (l) {
                          this._viewModelInstanceValue.value = l;
                        },
                        enumerable: !1,
                        configurable: !0,
                      }),
                      (i.prototype.internalHandleCallback = function (l) {
                        l(this.value);
                      }),
                      i
                    );
                  })(de),
                  ot = (function (m) {
                    P(i, m);
                    function i(l, S) {
                      return m.call(this, l, S) || this;
                    }
                    return (
                      Object.defineProperty(i.prototype, "value", {
                        get: function () {
                          return this._viewModelInstanceValue.value;
                        },
                        set: function (l) {
                          this._viewModelInstanceValue.value = l;
                        },
                        enumerable: !1,
                        configurable: !0,
                      }),
                      (i.prototype.internalHandleCallback = function (l) {
                        l(this.value);
                      }),
                      i
                    );
                  })(de),
                  St = (function (m) {
                    P(i, m);
                    function i(l, S) {
                      return m.call(this, l, S) || this;
                    }
                    return (
                      Object.defineProperty(i.prototype, "value", {
                        get: function () {
                          return this._viewModelInstanceValue.value;
                        },
                        set: function (l) {
                          this._viewModelInstanceValue.value = l;
                        },
                        enumerable: !1,
                        configurable: !0,
                      }),
                      (i.prototype.internalHandleCallback = function (l) {
                        l(this.value);
                      }),
                      i
                    );
                  })(de),
                  Ke = (function (m) {
                    P(i, m);
                    function i(l, S) {
                      return m.call(this, l, S) || this;
                    }
                    return (
                      (i.prototype.trigger = function () {
                        return this._viewModelInstanceValue.trigger();
                      }),
                      (i.prototype.internalHandleCallback = function (l) {
                        l();
                      }),
                      i
                    );
                  })(de),
                  at = (function (m) {
                    P(i, m);
                    function i(l, S) {
                      return m.call(this, l, S) || this;
                    }
                    return (
                      Object.defineProperty(i.prototype, "value", {
                        get: function () {
                          return this._viewModelInstanceValue.value;
                        },
                        set: function (l) {
                          this._viewModelInstanceValue.value = l;
                        },
                        enumerable: !1,
                        configurable: !0,
                      }),
                      Object.defineProperty(i.prototype, "valueIndex", {
                        get: function () {
                          return this._viewModelInstanceValue.valueIndex;
                        },
                        set: function (l) {
                          this._viewModelInstanceValue.valueIndex = l;
                        },
                        enumerable: !1,
                        configurable: !0,
                      }),
                      Object.defineProperty(i.prototype, "values", {
                        get: function () {
                          return this._viewModelInstanceValue.values;
                        },
                        enumerable: !1,
                        configurable: !0,
                      }),
                      (i.prototype.internalHandleCallback = function (l) {
                        l(this.value);
                      }),
                      i
                    );
                  })(de),
                  ht = (function (m) {
                    P(i, m);
                    function i(l, S) {
                      return m.call(this, l, S) || this;
                    }
                    return (
                      Object.defineProperty(i.prototype, "length", {
                        get: function () {
                          return this._viewModelInstanceValue.size;
                        },
                        enumerable: !1,
                        configurable: !0,
                      }),
                      (i.prototype.addInstance = function (l) {
                        l.runtimeInstance != null &&
                          (this._viewModelInstanceValue.addInstance(l.runtimeInstance),
                          l.addParent(this._parentViewModel));
                      }),
                      (i.prototype.addInstanceAt = function (l, S) {
                        return l.runtimeInstance != null &&
                          this._viewModelInstanceValue.addInstanceAt(l.runtimeInstance, S)
                          ? (l.addParent(this._parentViewModel), !0)
                          : !1;
                      }),
                      (i.prototype.removeInstance = function (l) {
                        l.runtimeInstance != null &&
                          (this._viewModelInstanceValue.removeInstance(l.runtimeInstance),
                          l.removeParent(this._parentViewModel));
                      }),
                      (i.prototype.removeInstanceAt = function (l) {
                        this._viewModelInstanceValue.removeInstanceAt(l);
                      }),
                      (i.prototype.instanceAt = function (l) {
                        var S = this._viewModelInstanceValue.instanceAt(l);
                        if (S != null) {
                          var I = new Ye(S, this._parentViewModel);
                          return (0, oe.createFinalization)(I, S), I;
                        }
                        return null;
                      }),
                      (i.prototype.swap = function (l, S) {
                        this._viewModelInstanceValue.swap(l, S);
                      }),
                      (i.prototype.internalHandleCallback = function (l) {
                        l();
                      }),
                      i
                    );
                  })(de),
                  ut = (function (m) {
                    P(i, m);
                    function i(l, S) {
                      return m.call(this, l, S) || this;
                    }
                    return (
                      Object.defineProperty(i.prototype, "value", {
                        get: function () {
                          return this._viewModelInstanceValue.value;
                        },
                        set: function (l) {
                          this._viewModelInstanceValue.value = l;
                        },
                        enumerable: !1,
                        configurable: !0,
                      }),
                      (i.prototype.rgb = function (l, S, I) {
                        this._viewModelInstanceValue.rgb(l, S, I);
                      }),
                      (i.prototype.rgba = function (l, S, I, T) {
                        this._viewModelInstanceValue.argb(T, l, S, I);
                      }),
                      (i.prototype.argb = function (l, S, I, T) {
                        this._viewModelInstanceValue.argb(l, S, I, T);
                      }),
                      (i.prototype.alpha = function (l) {
                        this._viewModelInstanceValue.alpha(l);
                      }),
                      (i.prototype.opacity = function (l) {
                        this._viewModelInstanceValue.alpha(Math.round(Math.max(0, Math.min(1, l)) * 255));
                      }),
                      (i.prototype.internalHandleCallback = function (l) {
                        l(this.value);
                      }),
                      i
                    );
                  })(de),
                  Rt = (function (m) {
                    P(i, m);
                    function i(l, S) {
                      return m.call(this, l, S) || this;
                    }
                    return (
                      Object.defineProperty(i.prototype, "value", {
                        set: function (l) {
                          var S;
                          this._viewModelInstanceValue.value(
                            (S = l?.nativeImage) !== null && S !== void 0 ? S : null,
                          );
                        },
                        enumerable: !1,
                        configurable: !0,
                      }),
                      (i.prototype.internalHandleCallback = function (l) {
                        l();
                      }),
                      i
                    );
                  })(de),
                  It = (function (m) {
                    P(i, m);
                    function i(l, S) {
                      return m.call(this, l, S) || this;
                    }
                    return (
                      Object.defineProperty(i.prototype, "value", {
                        set: function (l) {
                          var S;
                          this._viewModelInstanceValue.value(
                            (S = l?.nativeFont) !== null && S !== void 0 ? S : null,
                          );
                        },
                        enumerable: !1,
                        configurable: !0,
                      }),
                      (i.prototype.internalHandleCallback = function (l) {
                        l();
                      }),
                      i
                    );
                  })(de),
                  xt = (function (m) {
                    P(i, m);
                    function i(l, S) {
                      return m.call(this, l, S) || this;
                    }
                    return (
                      Object.defineProperty(i.prototype, "value", {
                        set: function (l) {
                          var S, I, T;
                          l.isBindableArtboard
                            ? (T = l)
                            : (T = l.file.internalBindableArtboardFromArtboard(l.nativeArtboard)),
                            this._viewModelInstanceValue.value(
                              (S = T?.nativeArtboard) !== null && S !== void 0 ? S : null,
                            ),
                            T?.nativeViewModel &&
                              this._viewModelInstanceValue.viewModelInstance(
                                (I = T?.nativeViewModel) !== null && I !== void 0 ? I : null,
                              );
                        },
                        enumerable: !1,
                        configurable: !0,
                      }),
                      (i.prototype.internalHandleCallback = function (l) {
                        l();
                      }),
                      i
                    );
                  })(de),
                  Ct = function (m) {
                    return se(void 0, void 0, void 0, function () {
                      var i, l, S;
                      return $(this, function (I) {
                        switch (I.label) {
                          case 0:
                            return (i = new Request(m)), [4, fetch(i)];
                          case 1:
                            if (((l = I.sent()), !l.ok))
                              throw new Error("Failed to fetch the Rive file: HTTP ".concat(l.status));
                            return [4, l.arrayBuffer()];
                          case 2:
                            return (S = I.sent()), [2, S];
                        }
                      });
                    });
                  },
                  ct = function (m) {
                    return typeof m == "string" ? [m] : m instanceof Array ? m : [];
                  },
                  Xe = { EventManager: Ie, TaskQueueManager: Ve },
                  Le = function (m) {
                    return se(void 0, void 0, void 0, function () {
                      var i, l, S;
                      return $(this, function (I) {
                        switch (I.label) {
                          case 0:
                            return (
                              (i = new Promise(function (T) {
                                return ve.RuntimeLoader.getInstance(function (z) {
                                  z.decodeAudio(m, T, null);
                                });
                              })),
                              [4, i]
                            );
                          case 1:
                            return (
                              (l = I.sent()),
                              (S = new oe.AudioWrapper(l)),
                              oe.finalizationRegistry.register(S, l),
                              [2, S]
                            );
                        }
                      });
                    });
                  },
                  Pt = function (m) {
                    return se(void 0, void 0, void 0, function () {
                      var i, l, S;
                      return $(this, function (I) {
                        switch (I.label) {
                          case 0:
                            return (
                              (i = new Promise(function (T) {
                                return ve.RuntimeLoader.getInstance(function (z) {
                                  z.decodeImage(m, T, null);
                                });
                              })),
                              [4, i]
                            );
                          case 1:
                            return (
                              (l = I.sent()),
                              (S = new oe.ImageWrapper(l)),
                              oe.finalizationRegistry.register(S, l),
                              [2, S]
                            );
                        }
                      });
                    });
                  },
                  Ft = function (m) {
                    return se(void 0, void 0, void 0, function () {
                      var i, l, S;
                      return $(this, function (I) {
                        switch (I.label) {
                          case 0:
                            return (
                              (i = new Promise(function (T) {
                                return ve.RuntimeLoader.getInstance(function (z) {
                                  z.decodeFont(m, T, null);
                                });
                              })),
                              [4, i]
                            );
                          case 1:
                            return (
                              (l = I.sent()),
                              (S = new oe.FontWrapper(l)),
                              oe.finalizationRegistry.register(S, l),
                              [2, S]
                            );
                        }
                      });
                    });
                  };
              })(),
              ur
            );
          })(),
        );
      })(lr)),
    lr.exports
  );
}
var bn = wn();
const Gt = yn(bn),
  Jr = new URL(
    "https://cdn.shopify.com/oxygen-v2/58886/167724/342939/4898937/assets/rive-BOXe3KNZ.bin",
    import.meta.url,
  ).href,
  Sn = new URL(
    "https://cdn.shopify.com/oxygen-v2/58886/167724/342939/4898937/assets/rive-gzip-rnDI8fie.bin",
    import.meta.url,
  ).href;
let tr, Qr;
const Cn = () => typeof DecompressionStream == "function",
  En = () => {
    if (tr) return tr;
    const Mt = Cn() ? new DecompressionStream("gzip") : void 0,
      Er = Mt ? Sn : Jr,
      rr = Qr;
    return (
      (Qr = void 0),
      (tr = Promise.resolve(rr)
        .then((yt) => (yt ? new Response(yt) : fetch(Er)))
        .then(async (yt) => {
          if (!yt.ok || !yt.body) throw new Error(`Rive WASM failed: ${yt.status}`);
          const vt = Mt ? new Response(yt.body.pipeThrough(Mt)) : yt;
          return (
            Gt.RuntimeLoader.setWasmUrl(Jr),
            Gt.RuntimeLoader.setWasmFallbackUrl(null),
            Gt.RuntimeLoader.setWasmBinary(await vt.arrayBuffer()),
            await Gt.RuntimeLoader.awaitInstance(),
            Gt.RuntimeLoader.setWasmBinary(null),
            Gt
          );
        })
        .catch((yt) => {
          throw (Gt.RuntimeLoader.setWasmBinary(null), (tr = void 0), yt);
        })),
      tr
    );
  };
export { En as default };
