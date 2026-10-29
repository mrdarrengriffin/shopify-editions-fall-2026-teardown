import { a as H, f as J } from "./breadcrumbs-D6XkVKYD.js";
import { n as K } from "./frameLoop-CeLX9Qef.js";
import { o as Q } from "./residentSections-BEssGc_p.js";
import { s as z } from "./sectionJump-VOWWJQmH.js";
import { s as U } from "./settleImages-BXogfgwb.js";
import { c as V } from "./client-entries-B1h-jQ5r.js";
import { r as X } from "./ref-mixin-D6m2Cu20.js";
import { c as Y, i as O, h as Z } from "./mixin-CMuDUxNx.js";
import { p as _ } from "./style-BrvkoWQt.js";
import { a as h } from "./component-BWKvSpCv.js";
import { j as k } from "./jsx-CLqwgotn.js";
import "./typed-event-target-DhbNxY-V.js";
const ee = new Map(),
  I = Y((a) => {
    let e = "",
      m = -1,
      f = {};
    return (
      a.addEventListener("remove", () => {
        if (!e) return;
        let n = a.frame.$runtime;
        O(n, "css mixin requires frame runtime"), $(n).styleManager?.remove(e), (e = ""), (m = -1);
      }),
      (n, c) => {
        f = n;
        let l = a.frame.$runtime;
        O(l, "css mixin requires frame runtime");
        let t = $(l),
          { selector: s, css: g } = _(f, t.styleCache),
          p = t.styleManager?.getGeneration?.() ?? 0;
        return (
          t.styleManager &&
            (e && e !== s && t.styleManager.remove(e),
            s && (e !== s || m !== p) && t.styleManager.insert(s, g),
            (e = s),
            (m = s ? p : -1)),
          s ? Z(a.element, { ...(c ?? {}), className: c?.className ? `${c.className} ${s}` : s }) : a.element
        );
      }
    );
  });
function $(a) {
  return { styleCache: a.styleCache ?? ee, styleManager: a.styleManager };
}
const te = "320px 0px",
  G = "data-html-in-canvas-risen",
  ve = V(import.meta.url + "#LazyFrame", function (e) {
    let m = !1,
      f = !1,
      n = !1,
      c = !1,
      l = !1,
      t,
      s,
      g = !0,
      p = !1,
      b = null,
      E = !1,
      T;
    const q = () => !!e.props.overlay && (c || (p && b !== "up")),
      M = () => {
        const r = !!(
          e.props.renderRootMargin &&
          n &&
          (p ? q() : !g) &&
          T &&
          !s?.contains(document.activeElement)
        );
        E !== r && ((E = r), e.update());
      },
      B = () =>
        !!e.props.paused ||
        !!(e.props.overlay && (!n || c)) ||
        !!(e.props.pauseAnimationsWhenInactive && !(f || p)),
      C = () => {
        for (const r of t?.getAnimations({ subtree: !0 }) ?? []) r.currentTime = 0;
      },
      S = () => {
        t?.toggleAttribute("data-motion-paused", B());
      },
      x = () => {
        m || (q() && b !== "rising") || z.holds(s) || ((m = !0), e.update());
      },
      j = (r) => {
        r.aborted ||
          (H("frame.ready", { target: e.props.name, src: J(e.props.src) }),
          e.props.overlay && C(),
          (n = !0),
          M(),
          e.update());
      },
      W = (r, i) => {
        const { pauseSelector: v, readySelector: o } = e.props;
        if (!v && !o) return;
        let u = !1;
        const y = new MutationObserver(() => L()),
          L = () => {
            if (i.aborted) return;
            v && !t && ((t = r.querySelector(v) ?? void 0), t && (S(), e.props.overlay && !n && C()));
            const d = o && !u ? r.querySelector(o) : null;
            d &&
              ((u = !0),
              e.props.renderRootMargin &&
                d instanceof HTMLElement &&
                ((T = d.style.aspectRatio || void 0), M()),
              U(d)
                .then(() => new Promise((R) => K(R)))
                .then(() => document.fonts?.ready)
                .then(() => j(i))),
              (!v || t) && (!o || u) && y.disconnect();
          };
        y.observe(r, { childList: !0, subtree: !0 }),
          i.addEventListener("abort", () => y.disconnect(), { once: !0 }),
          L();
      },
      D = X((r, i) => {
        s = r;
        const v = matchMedia("(prefers-reduced-motion: reduce)");
        if (
          ((c = v.matches),
          v.addEventListener(
            "change",
            () => {
              (c = v.matches), (l || p) && x(), e.update();
            },
            { signal: i },
          ),
          W(r, i),
          z.addEventListener(
            "change",
            () => {
              (l || p) && x();
            },
            { signal: i },
          ),
          e.props.renderRootMargin &&
            (A(
              r,
              i,
              (o) => {
                (g = o.isIntersecting), M();
              },
              e.props.renderRootMargin,
            ),
            r.addEventListener(
              "focusout",
              () => {
                queueMicrotask(() => {
                  i.aborted || M();
                });
              },
              { signal: i },
            )),
          Q(r, i, (o) => {
            (p = o), (p || l) && x(), S(), M(), e.props.overlay && e.update();
          }),
          e.props.overlay)
        ) {
          const o = new MutationObserver(() => {
            const u = r.getAttribute(G);
            b !== u && ((b = u), b && x(), b === "up" && C(), M(), e.update());
          });
          o.observe(r, { attributeFilter: [G] }),
            i.addEventListener("abort", () => o.disconnect(), { once: !0 });
        }
        if (e.props.eager) (l = !0), queueMicrotask(x);
        else {
          let o;
          i.addEventListener("abort", () => clearTimeout(o), { once: !0 });
          const u = () => {
              x(), m && y();
            },
            y = A(
              r,
              i,
              (L) => {
                if (((l = L.isIntersecting), clearTimeout(o), !l)) return;
                const { requestDelay: d } = e.props;
                d ? (o = setTimeout(u, d)) : u();
              },
              e.props.rootMargin ?? te,
            );
        }
        e.props.pauseAnimationsWhenInactive &&
          A(
            r,
            i,
            (o) => {
              const u = o.isIntersecting;
              f !== u && ((f = u), S(), e.update());
            },
            "0px 0px 0px 0px",
          );
      });
    return () => {
      const {
          aspectRatio: r,
          className: i,
          fallback: v,
          imageLabel: o,
          name: u,
          overlay: y,
          renderRootMargin: L,
          src: d,
        } = e.props,
        R = m ? k(h, { fallback: v, name: u, src: d }) : e.props.children;
      e.queueTask(S);
      const F =
          y && (!n || q())
            ? k("div", {
                "aria-hidden": "true",
                mix: I({ pointerEvents: "none", "&:not(:first-child)": { position: "absolute", inset: 0 } }),
                children: y,
              })
            : null,
        N = !!(L || o),
        P = N && !E;
      return k("div", {
        "aria-label": o || void 0,
        role: o ? "img" : void 0,
        class: i,
        "data-frame-render-suspended": E ? "true" : void 0,
        style: { aspectRatio: r ?? T },
        mix: [
          D,
          I({ position: "relative" }),
          B() && !t && I({ "& *, & *::before, & *::after": { animationPlayState: "paused !important" } }),
        ],
        children: [
          N
            ? k("div", {
                "aria-hidden": o ? "true" : void 0,
                "data-frame-render-content": "",
                style: E ? { display: "none" } : void 0,
                children: [R, P ? F : null],
              })
            : R,
          P ? null : F,
        ],
      });
    };
  }),
  w = new Map();
function A(a, e, m, f) {
  if (e.aborted) return () => {};
  let n = w.get(f);
  if (n === void 0) {
    const t = new Map(),
      s = new IntersectionObserver(
        (g) => {
          for (const p of g) for (const b of t.get(p.target) ?? []) b(p);
        },
        { rootMargin: f },
      );
    (n = { callbacks: t, observer: s }), w.set(f, n);
  }
  let c = n.callbacks.get(a);
  c === void 0 && ((c = new Set()), n.callbacks.set(a, c), n.observer.observe(a));
  function l() {
    e.removeEventListener("abort", l);
    const t = w.get(f);
    if (t === void 0) return;
    const s = t.callbacks.get(a);
    s === void 0 ||
      !s.delete(m) ||
      (s.size === 0 && (t.callbacks.delete(a), t.observer.unobserve(a)),
      t.callbacks.size === 0 && (t.observer.disconnect(), w.delete(f)));
  }
  return c.add(m), e.addEventListener("abort", l, { once: !0 }), l;
}
export { ve as LazyFrame };
