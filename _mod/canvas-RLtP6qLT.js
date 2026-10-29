import { a as w } from "./constants-Dvx39Bnh.js";
import { f as p } from "./fontFamily-DUpol7iY.js";
const b = (o) => o.map((t) => (t.includes(" ") ? `"${t}"` : t)).join(", "),
  S = b(p.mono),
  C = b(p.sans);
function g(o, { signal: t, invalidate: c, fonts: h = [] }) {
  const e = o.ownerDocument.createElement("canvas");
  e.setAttribute("aria-hidden", "true"),
    (e.style.cssText = "position:absolute;inset:0;width:100%;height:100%;display:block"),
    o.append(e);
  const v = e.getContext("2d");
  let i = 0,
    r = 0,
    a = 0;
  const d = (s, n) => {
    const m = Math.max(1, Math.round(s)),
      f = Math.max(1, Math.round(n)),
      x = Math.min(w, devicePixelRatio || 1);
    return m === i && f === r && x === a
      ? !1
      : ((i = m), (r = f), (a = x), (e.width = Math.round(i * a)), (e.height = Math.round(r * a)), !0);
  };
  d(e.clientWidth, e.clientHeight);
  const u = new ResizeObserver(([s]) => {
    const n = s?.contentBoxSize[0];
    n && d(n.inlineSize, n.blockSize) && c();
  });
  u.observe(e);
  const l = () => {
    matchMedia(`(resolution: ${devicePixelRatio}dppx)`).addEventListener(
      "change",
      () => {
        t.aborted || (d(i, r) && c(), l());
      },
      { once: !0, signal: t },
    );
  };
  if ((l(), h.length && "fonts" in o.ownerDocument)) {
    const s = o.ownerDocument.fonts;
    Promise.all(h.map((n) => s.load(n))).then(
      () => {
        t.aborted || c();
      },
      () => {},
    );
  }
  return (
    t.addEventListener(
      "abort",
      () => {
        u.disconnect(), (e.width = e.height = 0), e.remove();
      },
      { once: !0 },
    ),
    { ctx: v, size: () => ({ w: i, h: r, dpr: a }) }
  );
}
export { S as C, C as a, g as w };
