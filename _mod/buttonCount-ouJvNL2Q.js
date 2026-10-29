import { o as v } from "./frameLoop-CeLX9Qef.js";
const E = "[data-count]",
  A = 350,
  w = 150,
  C = 18,
  N = 36,
  y = "012345789",
  S = /[\p{Script=Latin}\p{Script=Greek}\p{Script=Cyrillic}0-9]/u,
  k = "audio, canvas, iframe, img, picture, svg, video",
  M = { glyphs: S, digits: /[0-9]/ };
function I(s, d, o) {
  const c = [];
  let n = 0;
  const t = (r) => {
      const i = document.createElement("span"),
        l = Array.from(r, (u) => (o.test(u) ? { char: u, seed: u.codePointAt(0), start: n++ } : u));
      return i.setAttribute("data-glyphs", r), c.push({ element: i, glyphs: l, shown: r }), i;
    },
    e = (r) => {
      const i = [];
      let l = "",
        u;
      const g = () => {
        (l.trim() || (l && r !== s)) && i.push(t(l)), (l = "");
      };
      for (const a of r.childNodes) {
        if (a.nodeType === Node.TEXT_NODE) {
          l += a.nodeValue;
          continue;
        }
        if (
          !(a instanceof Element) ||
          a === d ||
          a.classList.contains("button-ink") ||
          a.classList.contains("sr-only")
        )
          continue;
        g(), a.hasAttribute("data-face") && (n = u ??= n);
        const f = a.cloneNode(!1);
        if ((f.removeAttribute("id"), a.matches(k))) {
          f.setAttribute("data-count-skip", "");
          for (const L of a.childNodes) f.append(L.cloneNode(!0));
        } else f.append(...e(a));
        i.push(f);
      }
      return g(), i;
    },
    p = e(s);
  if (n === 0) return null;
  const h = n > 1 ? Math.min(C, (A - w) / (n - 1)) : 0;
  for (const { glyphs: r } of c) for (const i of r) typeof i != "string" && (i.start *= h);
  return d.replaceChildren(...p), c;
}
function b(s, d) {
  for (const o of s) {
    let c = "";
    for (const n of o.glyphs) {
      if (typeof n == "string") {
        c += n;
        continue;
      }
      const t = d - n.start;
      c += t < 0 || t >= w ? n.char : y[(n.seed + Math.floor(t / N) + 1) % y.length];
    }
    c !== o.shown && (o.element.setAttribute("data-glyphs", c), (o.shown = c));
  }
}
let O;
const T = () =>
    (O ??= window.matchMedia("(prefers-reduced-motion: reduce), (forced-colors: active)")).matches,
  m = new WeakMap();
function _(s, d, { onDone: o, isStill: c = T } = {}) {
  const n = m.get(s);
  if (n) {
    o && n.add(o);
    return;
  }
  const t = s.querySelector(":scope > .button-count"),
    e = !t || c() || s.matches(':disabled, [aria-disabled="true"]') ? null : I(s, t, M[d]);
  if (!t || !e) {
    o?.();
    return;
  }
  const p = new Set(o ? [o] : []);
  m.set(s, p), b(e, 0), s.setAttribute("data-counting", "");
  const h = performance.now(),
    r = v((i) => {
      const l = Math.max(0, i - h);
      if (l < A && s.isConnected) {
        b(e, l);
        return;
      }
      r(), s.removeAttribute("data-counting"), t.replaceChildren(), m.delete(s);
      for (const u of p) u();
    });
}
function G({ isStill: s = T } = {}) {
  const d = window.matchMedia("(hover: hover)"),
    o = new AbortController(),
    c = { passive: !0, signal: o.signal },
    n = (t) => {
      const e = t.dataset.count;
      (e === "glyphs" || e === "digits") && _(t, e, { isStill: s });
    };
  return (
    document.addEventListener(
      "pointerover",
      (t) => {
        if (t.pointerType === "touch" || !d.matches) return;
        const e = t.target instanceof Element ? t.target.closest(E) : null;
        !e || (t.relatedTarget instanceof Node && e.contains(t.relatedTarget)) || n(e);
      },
      c,
    ),
    document.addEventListener(
      "focusin",
      (t) => {
        const { target: e } = t;
        e instanceof HTMLElement && e.hasAttribute("data-count") && e.matches(":focus-visible") && n(e);
      },
      c,
    ),
    () => o.abort()
  );
}
export { _ as c, G as i };
