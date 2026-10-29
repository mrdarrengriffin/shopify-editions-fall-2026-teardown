import { o as R } from "./frameLoop-CeLX9Qef.js";
import { C as v } from "./cardWire-CPLlDeJq.js";
import { c as C } from "./client-entries-B1h-jQ5r.js";
import { r as T } from "./ref-mixin-D6m2Cu20.js";
import { j as w } from "./jsx-CLqwgotn.js";
import "./mixin-CMuDUxNx.js";
import "./typed-event-target-DhbNxY-V.js";
const x = 120,
  $ = 400,
  W = 3e3,
  P = 6e3,
  F = 400,
  k = 2500,
  D = 3,
  N = 12,
  G = 34,
  O = 8e3,
  H = 600,
  U = 750,
  X = "cubic-bezier(0.65, 0, 0.35, 1)",
  _ = 1,
  Y = 0.6,
  j = 0.7,
  A = 0.2,
  S = [
    ["top", "scaleX"],
    ["right", "scaleY"],
    ["bottom", "scaleX"],
    ["left", "scaleY"],
  ],
  E = 6,
  q = 20,
  K = "http://www.w3.org/2000/svg",
  g = (t) => {
    if (!t || t === "#") return null;
    let r;
    try {
      r = decodeURIComponent(t.slice(1));
    } catch {
      return null;
    }
    const n = document.getElementById(r);
    return n?.classList.contains("product-card") ? n : null;
  },
  B = (t) => {
    const { top: r, bottom: n } = t.getBoundingClientRect();
    return n > 0 && r < innerHeight;
  },
  y = (t, r) => {
    const n = { handle: t.id, pin: r };
    return t.dispatchEvent(new CustomEvent(v, { bubbles: !0, detail: n })), n.wire;
  };
let b = !1;
const h = new WeakMap(),
  V = { wireWait: F, calmFrames: D },
  z = { wireWait: k, calmFrames: N };
function J(t, r) {
  h.get(t)?.abort();
  const n = new AbortController();
  h.set(t, n);
  const { signal: s } = n;
  if (matchMedia("(prefers-reduced-motion: reduce)").matches) {
    I(t, n);
    return;
  }
  let i = y(t, !0);
  const c = performance.now();
  let d = 0;
  const e = R(
    (l, o) => {
      (d = o < G ? d + 1 : 0), (i ??= y(t, !1));
      const a = !i && l - c < r.wireWait,
        u = d < r.calmFrames && l - c < O;
      a || u || (e(), i && (i = y(t, !0) ?? i), I(t, n, i));
    },
    { signal: s },
  );
}
function I(t, r, n) {
  const s = t.getBoundingClientRect(),
    i = t.querySelector(":scope > [data-card-marker]"),
    c = document.createElement("span");
  (c.className = "related-signal"), c.setAttribute("aria-hidden", "true");
  let d = "";
  if (n) {
    const o = { x: n.from.x - s.left, y: n.from.y - s.top },
      a = { x: n.to.x - s.left, y: n.to.y - s.top },
      u = (a.x - o.x) * n.handle,
      m = `M${o.x} ${o.y}C${o.x + u} ${o.y} ${a.x - u} ${a.y} ${a.x} ${a.y}`,
      f = Math.hypot(a.x - o.x, a.y - o.y),
      p = Math.min(100 / E, (q / Math.max(f, 1)) * 100);
    c.style.setProperty("--related-step", String(p)),
      (d += `<svg class="related-signal-pulse" xmlns="${K}">${Array.from({ length: E }, (M, L) => `<path d="${m}" pathLength="100" vector-effect="non-scaling-stroke" style="--segment:${L}" />`).join("")}</svg>`);
  }
  (d += `<span class="related-signal-rim">${S.map(([o]) => `<span data-side="${o}"></span>`).join("")}</span>`),
    (c.innerHTML = d);
  const e = n ? H : 0;
  if (
    (t.querySelector(":scope > .related-signal")?.remove(),
    t.style.setProperty("--related-arrive", `${e}ms`),
    t.setAttribute("data-related-signal", ""),
    t.append(c),
    !matchMedia("(prefers-reduced-motion: reduce)").matches)
  ) {
    const o = Math.max(2 * (s.width + s.height), 1);
    let a = 0;
    for (const [u, m] of S) {
      const f = m === "scaleX" ? s.width : s.height,
        p = Math.min(a + f / o, 1);
      c.querySelector(`[data-side='${u}']`)?.animate(
        [
          { transform: `${m}(0)`, opacity: _, offset: 0 },
          { transform: `${m}(0)`, opacity: _, offset: a },
          { opacity: Y, offset: a + (p - a) * j },
          { transform: `${m}(1)`, opacity: A, offset: p },
          { transform: `${m}(1)`, opacity: A, offset: 1 },
        ],
        { duration: U, delay: e, easing: X, fill: "both" },
      ),
        (a = p);
    }
  }
  const l = () => {
    c.remove(),
      h.get(t) === r &&
        (h.delete(t), t.removeAttribute("data-related-signal"), t.style.removeProperty("--related-arrive"));
  };
  r.signal.addEventListener("abort", l, { once: !0 }),
    Promise.all(
      [...c.getAnimations({ subtree: !0 }), ...(i?.getAnimations() ?? [])].map((o) => o.finished),
    ).then(
      () => {
        r.signal.aborted || r.abort();
      },
      () => {},
    );
}
const rt = C(import.meta.url + "#HomePageCardSignal", function () {
  const r = T((n, s) => {
    let i;
    s.addEventListener("abort", () => i?.abort(), { once: !0 });
    const c = (e, l = W, o = V) => {
      i?.abort(), (i = new AbortController());
      const a = i.signal,
        u = performance.now() + l;
      let m = 0;
      const f = (M = x) => {
          clearTimeout(m), (m = window.setTimeout(p, Math.min(M, Math.max(0, u - performance.now()))));
        },
        p = () => {
          if (!B(e)) {
            performance.now() < u ? f() : i?.abort();
            return;
          }
          i?.abort(), J(e, o);
        };
      addEventListener("scroll", () => f(), { capture: !0, passive: !0, signal: a }),
        a.addEventListener("abort", () => clearTimeout(m), { once: !0 }),
        f($);
    };
    addEventListener(
      "hashchange",
      () => {
        const e = g(location.hash);
        e && c(e);
      },
      { signal: s },
    ),
      document.addEventListener(
        "click",
        (e) => {
          if (e.defaultPrevented || e.button || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;
          const l = e.target instanceof Element ? e.target.closest('a[href*="#"]') : null;
          if (
            !l ||
            l.hash !== location.hash ||
            l.origin !== location.origin ||
            l.pathname !== location.pathname ||
            l.search !== location.search
          )
            return;
          const o = g(l.hash);
          o && c(o);
        },
        { signal: s },
      );
    const d = b ? null : g(location.hash);
    if (d) {
      b = !0;
      const e = () => {
        document.visibilityState === "visible"
          ? c(d, P, z)
          : document.addEventListener("visibilitychange", e, { once: !0, signal: s });
      };
      document.readyState === "complete" ? e() : addEventListener("load", e, { once: !0, signal: s });
    }
  });
  return () => w("span", { hidden: !0, mix: r });
});
export { rt as HomePageCardSignal };
