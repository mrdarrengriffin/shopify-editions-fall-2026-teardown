import { _ as ue } from "./preload-helper-CZudbPKK.js";
import { t as X } from "./index-CRnHN5xY.js";
import { c as ie } from "./clsx-B-dksMZM.js";
import { a as je } from "./constants-Dvx39Bnh.js";
import { a as Ke, f as Ue } from "./breadcrumbs-D6XkVKYD.js";
import { n as _e } from "./frameLoop-CeLX9Qef.js";
import { r as Ae } from "./reportError-C6Wenmm6.js";
import { p as ne } from "./pageCover-D_pd6g0y.js";
import { o as $e } from "./residentSections-BEssGc_p.js";
import { s as ce } from "./sectionJump-VOWWJQmH.js";
import { Image as Oe } from "./Image-D_dPd3ZK.js";
import { c as We } from "./client-entries-B1h-jQ5r.js";
import { r as Te } from "./ref-mixin-D6m2Cu20.js";
import { o as q } from "./on-mixin-Ci1jclOX.js";
import { j as Z } from "./jsx-CLqwgotn.js";
import "./typed-event-target-DhbNxY-V.js";
import "./mixin-CMuDUxNx.js";
const Ye = "(min-width: 58.75rem)",
  Ge = "100%",
  Je = "40%",
  Qe = "30%",
  ke = { desktop: 300, mobile: 600 },
  Xe = 200,
  Le = "data-rive-prefetch",
  Ne = "data-html-in-canvas-drawn",
  ee = () => Math.min(je, window.devicePixelRatio || 1);
let le;
const qe = () => (
    (le ??= ue(async () => {
      const { default: a } = await import("./runtime.client-k1FWwaxJ.js");
      return { default: a };
    }, [])
      .then(({ default: a }) => a())
      .catch((a) => {
        throw ((le = void 0), a);
      })),
    le
  ),
  Ze = (a) =>
    a
      .toLowerCase()
      .replace(/\s+/g, "-")
      .replace(/\.(png|webp|jpg|jpeg|ttf|woff2?|otf)$/i, ""),
  et = (a, t, c, N, l) => {
    if (t)
      return (o) => {
        const _ = t[Ze(o.name)];
        if (!_ || (!o.isFont && !o.isImage)) return !1;
        const A = fetch(_, { signal: c })
          .then(async (n) => {
            if (!n.ok) throw new Error(`Rive asset failed: ${n.status}`);
            const f = new Uint8Array(await n.arrayBuffer());
            if (o.isFont) {
              const I = await a.decodeFont(f);
              if (!I) throw new Error(`Unable to decode ${o.name}`);
              try {
                c.aborted || o.setFont(I);
              } finally {
                I.unref();
              }
              return;
            }
            const g = await a.decodeImage(f);
            if (!g) throw new Error(`Unable to decode ${o.name}`);
            try {
              c.aborted || o.setRenderImage(g);
            } finally {
              g.unref();
            }
          })
          .catch((n) => {
            c.aborted || N(n);
          });
        return l.push(A), !0;
      };
  },
  tt = (a, { artboard: t, stateMachines: c, viewModelName: N }) => {
    const l = c && a.stateMachineNames.includes(c) ? c : a.stateMachineNames[0];
    if (l) return a.reset({ artboard: t, autoBind: !N, stateMachines: l }), l;
  },
  Ce = (a) => (a ?? "1:1").replace(":", " / "),
  Rt = We(import.meta.url + "#Rive", function (t) {
    let c,
      N = 0,
      l,
      o,
      _ = null,
      A,
      n,
      f,
      g,
      I = !1,
      te = !1,
      v = "poster",
      O = !1,
      re = !1,
      de = !1,
      pe = !1,
      fe = !1,
      ve = !1,
      K = !1,
      U = !1,
      oe = !1,
      me = !1,
      x = !1;
    const $ = () =>
        JSON.stringify([
          t.props.src,
          t.props.artboard,
          t.props.stateMachines,
          t.props.viewModelName,
          t.props.strings,
          t.props.assetsMap,
          t.props.playsOnHover,
          t.props.tracksMouseOver,
          !!t.props.mobileAspectRatio,
          t.props.useFallbackImage,
          t.props.paused,
        ]),
      W = () => K || U,
      C = () => O && (t.props.playsOnHover === !0 || re),
      be = () => re && !O,
      we = () =>
        !me && !x && t.props.paused !== !0 && t.props.useFallbackImage !== !0 && !be() && v !== "error",
      ye = () => (de || pe) && we() && (n !== void 0 || !C() || W()),
      Re = () => {
        !l?.hasAttribute(Le) ||
          n ||
          !we() ||
          C() ||
          !("transferControlToOffscreen" in HTMLCanvasElement.prototype) ||
          ue(async () => {
            const { prefetchWorkerRive: e } = await import("./workerRive.client-DsVbTr16.js");
            return { prefetchWorkerRive: e };
          }, [])
            .then(({ prefetchWorkerRive: e }) => e(t.props.src))
            .catch(() => {});
      },
      P = (e) => {
        v !== e && ((v = e), t.update());
      },
      Me = (e, r = "Rive.mount") => {
        Ae(e, r, { artboard: t.props.artboard }),
          l?.dispatchEvent(new CustomEvent("rive:error", { bubbles: !0, detail: e }));
      },
      ge = () => {
        const e = _?.boolean("isMobile");
        e && (e.value = !O && !!t.props.mobileAspectRatio);
      },
      Pe = (e) => {
        const { viewModelName: r, strings: u } = t.props,
          s = r ? (e.viewModelByName(r)?.defaultInstance() ?? null) : e.viewModelInstance;
        r && s && e.bindViewModelInstance(s);
        for (const [d, w] of Object.entries(u ?? {}))
          try {
            const y = s?.string(d);
            y && (y.value = w);
          } catch {}
        (_ = s), ge();
      },
      Ee = () => {
        const e = t.props.tracksMouseOver || (t.props.playsOnHover === !0 && O);
        if (!o || !A || !e) return;
        const r = o.stateMachineInputs(A)?.find(({ name: u }) => u === "mouseOver");
        r && (r.value = W());
      },
      B = () => {
        if (!o || !I) return;
        const e = t.props.paused === !0 || oe || (C() && !W());
        (ve || fe) && !e ? o.isPlaying || o.play() : o.isPlaying && o.pause();
      },
      Ie = () => {
        te && v === "poster" && (!C() || W()) && P("ready");
      },
      S = (e = !0) => {
        clearTimeout(f),
          (f = void 0),
          n && (n.abort(), (n = void 0), e && (v === "ready" && (v = "poster"), t.update()));
      },
      z = (e) => {
        S(), P("error"), Me(e);
      },
      he = async () => {
        if (((f = void 0), n || !ye())) return;
        const e = new AbortController(),
          r = e.signal;
        let u, s, d, w;
        const y = [];
        let h;
        const { src: T, artboard: E } = t.props,
          b = (i) => Ke(i, { src: Ue(T), artboard: E, mode: h });
        (n = e),
          (N += 1),
          r.addEventListener(
            "abort",
            () => {
              s?.disconnect(), d?.(), clearTimeout(w), u && b("rive.cleanup");
              try {
                u?.cleanup();
              } catch (i) {
                Ae(i, "Rive.cleanup");
              }
              o === u && ((o = void 0), (_ = null), (A = void 0), (I = !1), (te = !1));
            },
            { once: !0 },
          );
        const R = () => {
          b("rive.ready"),
            (I = !0),
            Ee(),
            B(),
            t.update(),
            (w = setTimeout(() => {
              r.aborted || ((te = !0), Ie());
            }, Xe));
        };
        try {
          if ((await t.update(), r.aborted || !c)) return;
          const i = c;
          if ("transferControlToOffscreen" in i) {
            const { createWorkerRive: p } = await ue(async () => {
              const { createWorkerRive: j } = await import("./workerRive.client-DsVbTr16.js");
              return { createWorkerRive: j };
            }, []);
            if (r.aborted) return;
            const {
              artboard: G,
              assetsMap: J,
              mobileAspectRatio: se,
              src: Be,
              stateMachines: ze,
              strings: Ve,
              viewModelName: He,
            } = t.props;
            (h = "worker"), b("rive.mount");
            const Q = p({
              canvas: i,
              src: Be,
              artboard: G,
              stateMachines: ze,
              viewModelName: He,
              strings: Ve,
              assetsMap: J,
              isMobile: !O && !!se,
              pixelRatio: ee(),
              onPainted: (j) => {
                r.aborted || ((A = j), R());
              },
              onContextLost: () => {
                r.aborted || (b("rive.contextLost"), S(), P("error"));
              },
              onError: (j) => {
                r.aborted || z(j);
              },
            });
            (u = Q),
              (o = Q),
              (_ = Q.viewModel),
              (s = new ResizeObserver(() => Q.resizeDrawingSurfaceToCanvas(ee()))),
              s.observe(i);
            return;
          }
          const [k, F] = await Promise.all([qe(), fetch(t.props.src, { signal: r })]);
          if (!F.ok) throw new Error(`Rive file failed: ${F.status}`);
          const ae = await F.arrayBuffer();
          if (r.aborted) return;
          const { artboard: L, assetsMap: M, interactive: Y, viewModelName: H } = t.props;
          (h = "page"), b("rive.mount");
          const m = new k.Rive({
            artboard: L,
            assetLoader: et(k, M, r, (p) => Me(p, "Rive.createAssetLoader"), y),
            autoBind: !H,
            autoplay: !1,
            buffer: ae,
            canvas: i,
            isTouchScrollEnabled: !0,
            layout: new k.Layout({ fit: k.Fit.Cover }),
            tabIndex: Y ? 0 : -1,
            useOffscreenRenderer: !0,
            onLoad: async () => {
              await Promise.all(y),
                !r.aborted &&
                  (d = _e(() => {
                    if (!r.aborted)
                      try {
                        (A = tt(m, t.props)),
                          Pe(m),
                          m.resizeDrawingSurfaceToCanvas(ee()),
                          (d = _e(() => {
                            if (!r.aborted)
                              try {
                                R();
                              } catch (p) {
                                z(p);
                              }
                          }));
                      } catch (p) {
                        z(p);
                      }
                  }));
            },
            onLoadError: (p) => {
              r.aborted || z(p.data);
            },
          });
          (u = m),
            (o = m),
            (s = new ResizeObserver(() => m.resizeDrawingSurfaceToCanvas(ee()))),
            s.observe(i);
        } catch (i) {
          r.aborted || z(i);
        }
      },
      D = () => {
        if ((clearTimeout(f), (f = void 0), !ye())) {
          S();
          return;
        }
        if (!n && !ce.holds(l)) {
          if (C()) {
            he();
            return;
          }
          f = setTimeout(
            () => {
              he();
            },
            O ? ke.desktop : ke.mobile,
          );
        }
      },
      Se = () => {
        ce.holds(l) ? (clearTimeout(f), (f = void 0)) : f === void 0 && D();
      },
      V = () => {
        Ee(), D(), B(), Ie();
      },
      De = () => {
        g !== $() && ((g = $()), S(), v === "error" && P("poster"), D());
      },
      Fe = Te((e, r) => {
        (l = e), (me = new URLSearchParams(location.search).has("no-rive")), (g = $());
        const u = matchMedia(Ye),
          s = matchMedia("(prefers-reduced-motion: reduce)"),
          d = () => {
            (O = u.matches),
              (re = s.matches),
              be() ? (S(), P("static")) : v === "static" && P("poster"),
              ge(),
              V(),
              t.update();
          };
        u.addEventListener("change", d, { signal: r }), s.addEventListener("change", d, { signal: r });
        const w = new IntersectionObserver(
            ([R]) => {
              (de = R?.isIntersecting === !0),
                (K = e.matches(":hover")),
                (U = e.contains(document.activeElement)),
                D();
            },
            { rootMargin: t.props.nearPageTop ? Je : Ge },
          ),
          y = new IntersectionObserver(
            ([R]) => {
              (ve = R?.isIntersecting === !0), B();
            },
            { rootMargin: Qe },
          );
        w.observe(e), y.observe(e);
        const h = () => {
          (oe = ne.covered), B();
        };
        ne.addEventListener("change", h, { signal: r }),
          ce.addEventListener("change", Se, { signal: r }),
          (oe = ne.covered);
        const T = () => !!e.closest(`[${Ne}]`),
          E = new MutationObserver(() => {
            x !== T() && ((x = !x), D());
          });
        E.observe(document.documentElement, { subtree: !0, attributeFilter: [Ne] }),
          (x = T()),
          $e(e, r, (R, i) => {
            (pe = R), (fe = i), D(), B();
          });
        const b = new MutationObserver(Re);
        b.observe(e, { attributeFilter: [Le] }),
          r.addEventListener(
            "abort",
            () => {
              w.disconnect(), y.disconnect(), E.disconnect(), b.disconnect(), S(!1), l === e && (l = void 0);
            },
            { once: !0 },
          ),
          d(),
          Re();
      }),
      xe = Te((e, r) => {
        (c = e),
          r.addEventListener(
            "abort",
            () => {
              c === e && (c = void 0);
            },
            { once: !0 },
          );
      });
    return () => {
      const {
        ariaHidden: e,
        aspectRatio: r,
        className: u,
        description: s,
        fallbackImage: d,
        fallbackImageMobile: w,
        interactive: y,
        loading: h = "lazy",
        mobileAspectRatio: T,
        posterImage: E,
        posterImageMobile: b,
        riveClassName: R,
        role: i,
        sizes: k = "100vw",
        skipAspectRatio: F,
        useFallbackImage: ae,
      } = t.props;
      g !== void 0 && g !== $() && t.queueTask(De);
      const L = e || !s?.trim(),
        M = y === !0 && !L,
        Y = !L && !M && C(),
        H = ae || v === "error" || v === "static",
        m = H ? (w ?? d ?? b ?? E) : (b ?? E ?? w ?? d),
        p = (H ? (d ?? E) : (E ?? d)) ?? m,
        G = !!(m && m.url !== p?.url),
        J = ie(
          "pointer-events-none absolute inset-0 size-full object-cover transition-opacity duration-200 motion-reduce:transition-none",
          v === "ready" ? "opacity-0" : "opacity-100",
        );
      return Z("div", {
        "aria-hidden": L ? !0 : void 0,
        "aria-label": L || M ? void 0 : s,
        class: X(
          ie(
            "relative w-full overflow-hidden",
            F ? "h-full" : "rive-aspect-ratio",
            Y && "focus-visible:outline-2 focus-visible:-outline-offset-2",
          ),
          u,
        ),
        "data-component-name": "rive",
        "data-click-enabled": M && !H && !t.props.paused ? !0 : void 0,
        "data-rive-phase": v,
        mix: [
          Fe,
          q("mouseenter", () => {
            (K = !0), V();
          }),
          q("mouseleave", () => {
            (K = !1), V();
          }),
          q("focusin", () => {
            (U = !0), V();
          }),
          q("focusout", (se) => {
            l?.contains(se.relatedTarget) || ((U = !1), V());
          }),
        ],
        role: L || M ? void 0 : (i ?? "img"),
        style: F
          ? void 0
          : { "--rive-aspect-ratio": Ce(r), "--rive-mobile-aspect-ratio": T ? Ce(T) : void 0 },
        tabIndex: Y ? 0 : void 0,
        children: [
          n
            ? Z(
                "canvas",
                {
                  "aria-hidden": M ? void 0 : !0,
                  "aria-label": M ? s : void 0,
                  class: X(
                    ie(
                      "absolute inset-0 size-full transition-opacity duration-300 motion-reduce:transition-none",
                      I ? "opacity-100" : "opacity-0",
                      "pointer-coarse:pointer-events-none",
                    ),
                    R,
                  ),
                  "data-rmx-preserve-dom": !0,
                  height: 0,
                  mix: xe,
                  role: M ? (i ?? "application") : void 0,
                  tabIndex: M ? 0 : -1,
                  width: 0,
                },
                N,
              )
            : null,
          p
            ? Z(Oe, {
                alt: "",
                className: X(J, G && "hidden global-lg:block"),
                data: p,
                loading: h,
                sizes: k,
              })
            : null,
          G && m
            ? Z(Oe, { alt: "", className: X(J, "global-lg:hidden"), data: m, loading: h, sizes: k })
            : null,
        ],
      });
    };
  });
export { Rt as Rive, Rt as default, Ce as getAspectRatio, Ze as normalizeAssetKey };
