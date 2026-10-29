import { n as m } from "./frameLoop-CeLX9Qef.js";
class p extends Event {
  context;
  drawables;
  constructor(e, r) {
    super("htmlincanvaspaint", { cancelable: !0 }), (this.context = e), (this.drawables = r);
  }
}
const x = 3e3;
function T(s, e) {
  const r = new AbortController(),
    n = AbortSignal.any([e, r.signal]);
  let t = new AbortController();
  const o = () => t.abort(),
    i = () => {
      o(), (t = new AbortController()), E(s, AbortSignal.any([n, t.signal]), () => r.abort());
    };
  window.addEventListener("beforeprint", o, { signal: n }),
    window.addEventListener("afterprint", i, { signal: n }),
    i();
}
function E(s, e, r) {
  const n = s.querySelector(":scope > [drawable]");
  if (!n) return;
  const t = document.createElement("canvas"),
    o = t.getContext("2d");
  t.setAttribute("content", "drawable"),
    t.setAttribute("layoutsubtree", ""),
    (t.style.display = "block"),
    (t.style.width = "100%"),
    t.append(document.createElement("slot"));
  const i = setTimeout(() => {
      document.hidden || r();
    }, x),
    u = () => m(r),
    f = () => {
      const a = window.devicePixelRatio,
        c = n.offsetHeight,
        l = Math.round(t.clientWidth * a),
        d = Math.round(c * a);
      (t.style.height = `${c}px`),
        !(t.width === l && t.height === d) && ((t.width = l), (t.height = d), t.requestPaint());
    },
    h = new ResizeObserver(f);
  t.addEventListener(
    "paint",
    () => {
      try {
        const a = y(n);
        o.reset(), o.scale(t.width / t.clientWidth, t.height / n.offsetHeight), clearTimeout(i);
        const c = new p(o, a);
        if (!s.dispatchEvent(c)) return;
        for (const { element: l, x: d, y: w, width: v, height: g } of a) o.drawElementImage(l, d, w, v, g);
      } catch {
        u();
      }
    },
    { signal: e },
  ),
    t.addEventListener("contextlost", u, { signal: e });
  const b = s.shadowRoot ?? s.attachShadow({ mode: "open" });
  b.replaceChildren(t),
    h.observe(n),
    h.observe(t, { box: "device-pixel-content-box" }),
    f(),
    e.addEventListener("abort", () => {
      clearTimeout(i), h.disconnect(), b.replaceChildren(document.createElement("slot"));
    });
}
function y(s) {
  return [s, ...s.querySelectorAll("[drawable]")].flatMap((e) => {
    let r = 0,
      n = 0,
      t = e;
    for (; t !== s; ) {
      const o = t.offsetParent;
      if (!o) return [];
      (r += t.offsetLeft + o.clientLeft), (n += t.offsetTop + o.clientTop), (t = o);
    }
    return [{ element: e, x: r, y: n, width: e.offsetWidth, height: e.offsetHeight }];
  });
}
export { p as HtmlInCanvasPaintEvent, T as runHtmlInCanvas };
