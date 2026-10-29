const __vite__mapDeps = (
  i,
  m = __vite__mapDeps,
  d = m.f || (m.f = ["assets/stackedVideo.client-D827o6Gh.js", "assets/frameLoop-CeLX9Qef.js"]),
) => i.map((i) => d[i]);
import { _ as U } from "./preload-helper-CZudbPKK.js";
import { t as V } from "./index-CRnHN5xY.js";
import { c as X } from "./clsx-B-dksMZM.js";
import { o as Y } from "./residentSections-BEssGc_p.js";
import { s as B } from "./sectionJump-VOWWJQmH.js";
import { isShopifyHost as Z, Image as ee } from "./Image-D_dPd3ZK.js";
import { c as te } from "./client-entries-B1h-jQ5r.js";
import { r as z } from "./ref-mixin-D6m2Cu20.js";
import { o as y } from "./on-mixin-Ci1jclOX.js";
import { j as E } from "./jsx-CLqwgotn.js";
import "./typed-event-target-DhbNxY-V.js";
import "./mixin-CMuDUxNx.js";
const oe = 16 / 9,
  re = (T) => {
    const e =
        /iPad|iPhone|iPod/i.test(navigator.userAgent) ||
        (navigator.platform === "MacIntel" && navigator.maxTouchPoints > 1),
      o = /Chrome|Chromium|Firefox/i.test(navigator.userAgent),
      u = e || (/Safari/i.test(navigator.userAgent) && !o),
      i = T?.sources ?? [],
      m = !e && o && document.createElement("video").canPlayType('video/webm; codecs="vp9"') === "probably",
      b = T?.isStacked === !0 && !(m && i.some((c) => c.mimeType === "video/webm"));
    return {
      composite: b,
      webkit: u,
      sources: i.filter((c) =>
        b
          ? c.mimeType.startsWith("video/mp4") && !(u && c.mimeType.includes("av01"))
          : T?.isStacked
            ? c.mimeType === "video/webm"
            : c.mimeType === "video/quicktime"
              ? u
              : !(u && c.mimeType === "video/webm"),
      ),
    };
  },
  ye = te(import.meta.url + "#Video", function (e) {
    let o,
      u,
      i = !1,
      m = !1,
      b = !1,
      c = !1,
      l = "poster",
      d = 0,
      C = !1,
      L = !1,
      w = !1,
      k = !1,
      N = !1,
      A = [],
      h;
    const M = () =>
        JSON.stringify([e.props.paused, e.props.forcePlay, e.props.data?.isStacked, e.props.data?.sources]),
      I = () => m || b || e.props.forcePlay === !0,
      S = () => !C && e.props.paused !== !0 && !L,
      J = () => e.props.forcePlay !== !0 && B.holds(u),
      _ = () => {
        o && !o.paused && l === "ready" && b && !m && !c && e.props.forcePlay !== !0 && o.pause();
      },
      f = async () => {
        if (!i) return;
        const t = ++d;
        (i = !1),
          o?.pause(),
          (w = !1),
          (l = "poster"),
          await e.update(),
          !(e.signal.aborted || t !== d) && o?.load();
      },
      R = async () => {
        if (!o?.paused) return;
        const t = d;
        await o.play().catch(() => {
          e.signal.aborted || t !== d || f();
        });
      },
      F = async () => {
        const t = ++d;
        if (!i) {
          if (
            (({ sources: A, composite: k, webkit: N } = re(e.props.data)),
            !A.some((s) => !s.media || matchMedia(s.media).matches) ||
              ((i = !0), await e.update(), e.signal.aborted || t !== d))
          )
            return;
          o?.load();
        }
        return t;
      },
      g = async () => {
        if (i || !I() || J() || !S()) return;
        const t = await F();
        e.signal.aborted || t !== d || !I() || !S() || (await R());
      },
      O = async () => {
        if (!o || e.props.paused === !0) return;
        if (!o.paused) {
          (L = !0), d++, o.pause();
          return;
        }
        L = !1;
        const t = await F();
        e.signal.aborted || t !== d || (await R());
      },
      K = async () => {
        const t = M();
        t !== h && ((h = t), await f(), e.signal.aborted || (await g()));
      },
      q = z((t, s) => {
        (u = t), (h = M());
        const n = matchMedia("(prefers-reduced-motion: reduce)");
        (C = n.matches),
          n.addEventListener(
            "change",
            (r) => {
              (C = r.matches), r.matches ? f() : g();
            },
            { signal: s },
          );
        const p = new IntersectionObserver(
          ([r]) => {
            (m = r?.isIntersecting === !0), I() ? (i ? ((m || c) && S() ? R() : _()) : g()) : f();
          },
          { rootMargin: "5%" },
        );
        p.observe(t),
          B.addEventListener(
            "change",
            () => {
              g();
            },
            { signal: s },
          ),
          Y(t, s, (r, P) => {
            b = r;
            const j = c;
            (c = P), I() ? (i ? (c && !j && S() ? R() : _()) : g()) : f();
          }),
          s.addEventListener(
            "abort",
            () => {
              p.disconnect(), u === t && (u = void 0), d++, (m = i = w = !1), (l = "poster");
            },
            { once: !0 },
          ),
          e.props.forcePlay && g();
      }),
      H = z((t, s) => {
        const n = t;
        (o = n),
          s.addEventListener(
            "abort",
            () => {
              n.pause(),
                n.querySelectorAll("source").forEach((p) => p.remove()),
                n.load(),
                o === n && (o = void 0);
            },
            { once: !0 },
          );
      }),
      W = z((t, s) => {
        const n = o;
        n &&
          U(
            async () => {
              const { renderStackedVideo: p } = await import("./stackedVideo.client-D827o6Gh.js");
              return { renderStackedVideo: p };
            },
            __vite__mapDeps([0, 1]),
          )
            .then(({ renderStackedVideo: p }) => {
              s.aborted ||
                p(n, t, {
                  signal: s,
                  webkit: N,
                  onFrame: (r) => {
                    const P = r ? "ready" : "poster";
                    !i || s.aborted || l === P || ((l = P), _(), e.update());
                  },
                  onError: () => {
                    f();
                  },
                });
            })
            .catch(() => {
              s.aborted || f();
            });
      });
    return () => {
      const {
          data: t,
          className: s,
          videoClassName: n,
          placeholderClassName: p,
          interactive: r,
          loop: P = !0,
          loading: j = "lazy",
          sizes: G = "100vw",
        } = e.props,
        D = r ? e.props.description : void 0,
        $ = e.props.paused === !0,
        x = t?.sources[0],
        v = t?.previewImage;
      if (!x && !v) return null;
      h !== void 0 && h !== M() && e.queueTask(K);
      const Q =
        t?.aspectRatio ??
        (x?.width && x.height ? x.width / x.height : v?.width && v.height ? v.width / v.height : oe);
      return E("div", {
        "aria-disabled": r && $ ? !0 : void 0,
        "aria-hidden": r ? void 0 : !0,
        "aria-label": r ? ($ ? `Video paused: ${D}` : `${w ? "Pause" : "Play"} video: ${D}`) : void 0,
        "aria-pressed": r ? w : void 0,
        class: V("video-aspect-ratio relative w-full overflow-hidden", s),
        "data-component-name": "video",
        "data-video-phase": l,
        mix: r
          ? [
              q,
              y("click", () => {
                O();
              }),
              y("keydown", (a) => {
                (a.key !== " " && a.key !== "Enter") ||
                  (a.preventDefault(), a.key === "Enter" && !a.repeat && O());
              }),
              y("keyup", (a) => {
                a.key === " " && (a.preventDefault(), O());
              }),
            ]
          : q,
        role: r ? "button" : void 0,
        style: { "--video-aspect-ratio": Q },
        tabIndex: r ? 0 : void 0,
        children: [
          E("video", {
            class: V("absolute inset-0 size-full object-cover", n, k && "pointer-events-none opacity-0"),
            crossOrigin: k || A.every((a) => Z(a.url)) ? "anonymous" : void 0,
            disablePictureInPicture: !0,
            disableRemotePlayback: !0,
            loop: P,
            "aria-hidden": !0,
            mix: [
              H,
              y("playing", () => {
                !i || k || l === "ready" || ((l = "ready"), _(), e.update());
              }),
              y("play", () => {
                (w = !0), e.update();
              }),
              y("pause", () => {
                (w = !1), e.update();
              }),
              y("error", () => {
                f();
              }),
            ],
            muted: !0,
            playsInline: !0,
            preload: i ? "auto" : "none",
            tabIndex: -1,
            children: i
              ? A.map((a) => E("source", { media: a.media, src: a.url, type: a.mimeType }, a.url))
              : null,
          }),
          i && k
            ? E("canvas", {
                "aria-hidden": !0,
                class: V("pointer-events-none absolute inset-0 size-full object-cover", n),
                mix: W,
              })
            : null,
          v
            ? E(ee, {
                alt: "",
                className: V(
                  X(
                    "pointer-events-none absolute inset-0 size-full object-cover transition-opacity duration-300 motion-reduce:transition-none",
                    l === "ready" ? "opacity-0" : "opacity-100",
                  ),
                  p,
                ),
                data: v,
                loading: j,
                sizes: G,
              })
            : null,
        ],
      });
    };
  });
export { ye as Video, ye as default };
