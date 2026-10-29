import { o as q } from "./frameLoop-CeLX9Qef.js";
import { c as X } from "./buttonCount-ouJvNL2Q.js";
import { c as Y, l as z } from "./easing-BhDfN7yX.js";
import { r as U } from "./ref-mixin-D6m2Cu20.js";
import { o as P } from "./on-mixin-Ci1jclOX.js";
import { j as h } from "./jsx-CLqwgotn.js";
import "./clamp-co6UzHBn.js";
import "./mixin-CMuDUxNx.js";
import "./typed-event-target-DhbNxY-V.js";
const Z = 500,
  J = 600,
  F = Math.PI / 180,
  B = 19,
  tt = 13,
  et = 24 * F,
  ot = 30 * F,
  O = 3.2,
  $ = 40,
  w = (t) => (Math.round(t * 1e3) / 1e3).toString(),
  nt = ([t, s]) => `${w(t)} ${w(s)}`,
  j = (t) => `M${t.map(nt).join("L")}`,
  G = ([t, s, a], d, k) => {
    const v = t * Math.cos(k) + a * Math.sin(k),
      b = -t * Math.sin(k) + a * Math.cos(k);
    return [v, s * Math.cos(d) - b * Math.sin(d), s * Math.sin(d) + b * Math.cos(d)];
  },
  V = (t) => {
    const s = z(B, tt, t),
      a = s * t,
      d = t * et,
      k = t * ot,
      v = ([r, o, g]) => {
        const [m, M] = G([r - s / 2, o - s / 2, g + a / 2], d, k);
        return [m, -M];
      },
      b = (r) => G(r, d, k)[2] > 1e-4,
      i = (r, o, g) => [r * s, o * s, -g * a];
    let E = "",
      C = "";
    if (a < 0.01) E = `${j([i(0, 0, 0), i(1, 0, 0), i(1, 1, 0), i(0, 1, 0)].map(v))}Z`;
    else
      for (const r of [0, 1])
        for (const o of [0, 1]) {
          const g = [
            [i(0, r, o), i(1, r, o), [0, r ? 1 : -1, 0], [0, 0, o ? -1 : 1]],
            [i(r, 0, o), i(r, 1, o), [r ? 1 : -1, 0, 0], [0, 0, o ? -1 : 1]],
            [i(r, o, 0), i(r, o, 1), [r ? 1 : -1, 0, 0], [0, o ? 1 : -1, 0]],
          ];
          for (const [m, M, L, _] of g) {
            const I = j([v(m), v(M)]);
            b(L) || b(_) ? (E += I) : (C += I);
          }
        }
    const u = (3 * s) / B,
      A = s - u * 2,
      p = -u * t,
      R = -(a - u * t),
      S = [];
    for (let r = 0; r <= $; r++) {
      const o = r / $,
        g = (Math.exp(O * o) - 1) / (Math.exp(O) - 1);
      S.push(v([u + o * A, u + g * A, z(p, R, o)]));
    }
    return { solid: E, hidden: C, curve: j(S), shadow: j([v([u, 0, p]), v([u + A, 0, R])]), tip: S[$] };
  };
function mt(t) {
  let s,
    a,
    d = !1;
  const k = (e) => {
      if (!(a && (a.effect?.getComputedTiming().progress ?? null) === null))
        return Number(getComputedStyle(e).getPropertyValue("--hero-menu"));
    },
    v = () => {
      if (!s) return !0;
      let e;
      (!a || a.playState === "idle") &&
        ((e = s.getAnimations()),
        (a = e.find((l) => l instanceof CSSAnimation && l.animationName === "hero-menu")));
      const n = k(s),
        c =
          d ||
          (e ?? s.getAnimations()).some(
            (l) => !(l instanceof CSSAnimation) && !(l instanceof CSSTransition) && l.playState === "running",
          );
      return (
        (d = !1), s.toggleAttribute("data-arrived", t.props.pressed || (n ?? 0) >= 0.5), n !== void 0 && !c
      );
    };
  let b;
  const i = () => {
    b ||= q(() => {
      v() && (b?.(), (b = void 0));
    });
  };
  t.signal.addEventListener("abort", () => b?.(), { once: !0 });
  const E = U((e, n) => {
    (s = e),
      (a = void 0),
      window.addEventListener(
        "scroll",
        () => {
          (d = !0), i();
        },
        { passive: !0, signal: n },
      ),
      window.addEventListener("resize", i, { passive: !0, signal: n }),
      i();
  });
  let C, u, A, p;
  t.signal.addEventListener("abort", () => p?.abort(), { once: !0 });
  const R = () => {
      p = new AbortController();
      const { signal: e } = p,
        n = () => {
          e.aborted || (p?.abort(), (p = void 0), t.update());
        };
      u?.addEventListener(
        "transitionend",
        (l) => {
          l.target === u && l.propertyName === "opacity" && n();
        },
        { signal: e },
      );
      const c = setTimeout(n, Z);
      e.addEventListener("abort", () => clearTimeout(c), { once: !0 });
    },
    S = () => {
      u && X(u, "glyphs");
    },
    r = () => !!C?.matches(":hover, :focus-visible");
  let o,
    g = 0,
    m = 0,
    M = 0,
    L,
    _;
  const I = () => Math.max(Y(m), g),
    H = () => {
      const e = I();
      if (!o || e === _) return;
      _ = e;
      const n = V(e),
        [c, l, T, D, x] = o;
      c?.setAttribute("d", n.hidden),
        c?.setAttribute("opacity", w(0.35 * e)),
        l?.setAttribute("d", n.shadow),
        l?.setAttribute("opacity", w(0.35 * e)),
        T?.setAttribute("d", n.solid),
        D?.setAttribute("d", n.curve),
        x?.setAttribute("cx", w(n.tip[0])),
        x?.setAttribute("cy", w(n.tip[1]));
    },
    K = (e) => {
      (g = e), H();
    },
    Q = (e, n) => {
      const c = n / J;
      (m = M > m ? Math.min(M, m + c) : Math.max(M, m - c)), H(), m === M && (L?.(), (L = void 0));
    },
    N = (e) => {
      if (((M = e), matchMedia("(prefers-reduced-motion: reduce)").matches)) {
        (m = e), H();
        return;
      }
      L ||= q(Q, { signal: t.signal });
    },
    W = U((e, n) => {
      const c = [...e.querySelectorAll("path, circle")];
      (o = c),
        (_ = void 0),
        H(),
        t.props.connect?.(K, n),
        n.addEventListener(
          "abort",
          () => {
            o === c && (o = void 0);
          },
          { once: !0 },
        );
    });
  return () => {
    const { settled: e, label: n, backLabel: c, onToggle: l } = t.props,
      T = e ? c : n;
    A !== void 0 && T !== A && (p?.abort(), (p = void 0), e || r() ? t.queueTask(S) : R()), (A = T);
    const D = p ? c : T,
      x = I(),
      y = V(x);
    return (
      t.queueTask(i),
      h("div", {
        class: "html-in-canvas-corner-dock fixed bottom-24 z-50 hidden global-lg:pointer-fine:block",
        style: { position: "fixed" },
        mix: E,
        children: h("button", {
          type: "button",
          "aria-label": T,
          class:
            "html-in-canvas-corner relative grid h-32 cursor-pointer place-items-center rounded-full text-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white",
          mix: [
            P("click", () => l()),
            P("pointerenter", (f) => {
              f.pointerType === "mouse" && (N(1), t.props.settled || (t.props.onPrefetch(), S()));
            }),
            P("pointerleave", (f) => N(f.currentTarget.matches(":focus-visible") ? 1 : 0)),
            P("focus", (f) => {
              f.currentTarget.matches(":focus-visible") &&
                (N(1), t.props.settled || (t.props.onPrefetch(), S()));
            }),
            P("blur", (f) => N(f.currentTarget.matches(":hover") ? 1 : 0)),
            U((f) => (C = f)),
          ],
          children: [
            h("span", {
              class: "html-in-canvas-corner-mark",
              "aria-hidden": "true",
              children: h("svg", {
                class: "block overflow-visible",
                viewBox: "-12 -12 24 24",
                width: "24",
                height: "24",
                fill: "none",
                stroke: "currentColor",
                "stroke-width": "1",
                "stroke-linecap": "round",
                "stroke-linejoin": "round",
                mix: W,
                children: [
                  h("path", { d: y.hidden, opacity: w(0.35 * x) }),
                  h("path", { d: y.shadow, opacity: w(0.35 * x) }),
                  h("path", { d: y.solid }),
                  h("path", { d: y.curve }),
                  h("circle", {
                    cx: w(y.tip[0]),
                    cy: w(y.tip[1]),
                    r: "1",
                    fill: "currentColor",
                    stroke: "none",
                  }),
                ],
              }),
            }),
            h("span", {
              class: "html-in-canvas-corner-tip whitespace-nowrap font-mono text-mono text-white",
              "aria-hidden": "true",
              "data-shown": e ? "" : void 0,
              mix: U((f) => (u = f)),
              children: [h("span", { "aria-hidden": "true", class: "button-count" }), D],
            }),
          ],
        }),
      })
    );
  };
}
export { mt as HtmlInCanvasCornerButton };
