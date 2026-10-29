import { g as xt, f as Q } from "./formatCopy-Cs7MVtfe.js";
import "./locale-DXEWuBc6.js";
const zt = {
  description: "A Canvas board of {count} stores. Hover to zoom out, click a store to zoom in.",
  caption: `{stores} already
designed with Canvas`,
  one: "{count} store",
  other: "{count} stores",
  all: "{count}+ stores",
  allInView: "All {count} stores in view",
  selected: "{name}, one of {count}",
};
function It(o, r = "en") {
  const e = { ...zt, ...o },
    s = new Intl.NumberFormat(xt(r)),
    l = new Intl.PluralRules(xt(r)),
    a = s.format(5e4);
  return {
    description: Q(e.description, { count: a }),
    caption: e.caption,
    stores: (c, d) => Q(d ? e.all : (e[l.select(c)] ?? e.other), { count: d ? a : s.format(c) }),
    allInView: Q(e.allInView, { count: a }),
    selected: (c) => Q(e.selected, { name: c, count: a }),
  };
}
const bt = { cell: { w: 240, h: 226 } },
  $ = [
    {
      name: "Clay & Ember",
      kind: "ceramics",
      x: 0,
      y: 0,
      w: 240,
      h: 226,
      colour: "#b48870",
      hero: "#955233",
    },
    {
      name: "River & Pine",
      kind: "coffee",
      x: 240,
      y: 0,
      w: 240,
      h: 226,
      colour: "#776e65",
      hero: "#32271e",
    },
    { name: "Lumière", kind: "skincare", x: 480, y: 0, w: 240, h: 226, colour: "#afb3b2", hero: "#8a8f92" },
    {
      name: "Kicks & Co.",
      kind: "sneakers",
      x: 720,
      y: 0,
      w: 240,
      h: 226,
      colour: "#84a1bd",
      hero: "#3c6d9f",
    },
    { name: "Verdant", kind: "plants", x: 960, y: 0, w: 240, h: 226, colour: "#798566", hero: "#354a1e" },
    {
      name: "Ember & Oak",
      kind: "candles",
      x: 1200,
      y: 0,
      w: 240,
      h: 226,
      colour: "#85705d",
      hero: "#4a2d16",
    },
    { name: "Ride & Co.", kind: "bikes", x: 0, y: 226, w: 240, h: 226, colour: "#afbfc6", hero: "#8aa6b7" },
    { name: "Matcha Lane", kind: "tea", x: 240, y: 226, w: 240, h: 226, colour: "#848c6d", hero: "#4d5b2c" },
    { name: "Solstice", kind: "jewelry", x: 480, y: 226, w: 240, h: 226, colour: "#b2947b", hero: "#855c3a" },
    {
      name: "House & Harbor",
      kind: "furniture",
      x: 720,
      y: 226,
      w: 240,
      h: 226,
      colour: "#ac9d8a",
      hero: "#847156",
    },
    {
      name: "The Sourdough Co.",
      kind: "bakery",
      x: 960,
      y: 226,
      w: 240,
      h: 226,
      colour: "#96816e",
      hero: "#664a33",
    },
    { name: "Salty Days", kind: "surf", x: 1200, y: 226, w: 240, h: 226, colour: "#a7b6bd", hero: "#8fa8b7" },
    {
      name: "The Last Chapter",
      kind: "books",
      x: 0,
      y: 452,
      w: 240,
      h: 226,
      colour: "#887c6e",
      hero: "#4e3b28",
    },
    { name: "Little Pine", kind: "toys", x: 240, y: 452, w: 240, h: 226, colour: "#cda789", hero: "#b77a4f" },
    {
      name: "Nocturnal",
      kind: "streetwear",
      x: 480,
      y: 452,
      w: 240,
      h: 226,
      colour: "#8b8a88",
      hero: "#5c5c58",
    },
    {
      name: "Good Boy Treats",
      kind: "pet",
      x: 720,
      y: 452,
      w: 240,
      h: 226,
      colour: "#d8b97a",
      hero: "#d3a23b",
    },
    {
      name: "Fire & Forge",
      kind: "hot sauce",
      x: 960,
      y: 452,
      w: 240,
      h: 226,
      colour: "#b57865",
      hero: "#9f3517",
    },
    {
      name: "Coastline Eyewear",
      kind: "eyewear",
      x: 1200,
      y: 452,
      w: 240,
      h: 226,
      colour: "#a2b3ba",
      hero: "#648ca3",
    },
    {
      name: "Terra & Sky",
      kind: "outdoor",
      x: 0,
      y: 678,
      w: 240,
      h: 226,
      colour: "#88969a",
      hero: "#435c67",
    },
    { name: "Spin Cycle", kind: "vinyl", x: 240, y: 678, w: 240, h: 226, colour: "#766c65", hero: "#2f2115" },
    {
      name: "Petal & Stone",
      kind: "flowers",
      x: 480,
      y: 678,
      w: 240,
      h: 226,
      colour: "#dfbcb3",
      hero: "#daa197",
    },
    {
      name: "Paper & Ink",
      kind: "stationery",
      x: 720,
      y: 678,
      w: 240,
      h: 226,
      colour: "#a4b1b8",
      hero: "#758f9f",
    },
    {
      name: "Vine & Table",
      kind: "wine",
      x: 960,
      y: 678,
      w: 240,
      h: 226,
      colour: "#a09881",
      hero: "#5d5631",
    },
    {
      name: "Salt + Sun",
      kind: "swimwear",
      x: 1200,
      y: 678,
      w: 240,
      h: 226,
      colour: "#8db0bb",
      hero: "#3a8299",
    },
  ],
  Rt = "https://cdn.shopify.com/s/files/1/0762/1885/9705/files/stores.jpg?v=1791461807";
let st;
function jt() {
  return (
    (st ??= new Promise((o, r) => {
      const e = new Image();
      (e.decoding = "async"),
        (e.onload = () => o(e)),
        (e.onerror = (s) => {
          (st = void 0), r(s);
        }),
        (e.src = Rt);
    })),
    st
  );
}
function Tt(o, r) {
  return { sx: o.x, sy: o.y, sw: o.w, sh: o.h };
}
const gt = (o, r = 0) => {
  let e = Math.imul(o ^ 2654435769, 2246822507) ^ Math.imul(r + 1663821227, 3266489909);
  return (e ^= e >>> 15), (e = Math.imul(e, 668265263)), (e ^= e >>> 13), (e >>> 0) / 4294967296;
};
function P(o, r, e) {
  const s = document.createElement(o);
  return (s.className = r), s;
}
function Pt(o, r, e, s, l, a = 1) {
  if (!(a <= 0.01)) {
    o.save(),
      (o.globalAlpha = a),
      (o.strokeStyle = "#fff"),
      (o.lineWidth = 1),
      o.strokeRect(Math.round(r) + 0.5, Math.round(e) + 0.5, Math.round(s), Math.round(l));
    for (const [c, d] of [
      [r, e],
      [r + s, e],
      [r, e + l],
      [r + s, e + l],
    ])
      (o.fillStyle = "rgba(0,0,0,0)"),
        o.clearRect(Math.round(c) - 2, Math.round(d) - 2, 4, 4),
        o.strokeRect(Math.round(c) - 1.5, Math.round(d) - 1.5, 4, 4);
    o.restore();
  }
}
function _t(o, r) {
  const e = P("canvas", r);
  o.append(e);
  const s = e.getContext("2d");
  let l = 1,
    a = 1,
    c = 1;
  const d = () => {
      const F = e.getBoundingClientRect();
      (l = Math.max(1, Math.round(F.width))),
        (a = Math.max(1, Math.round(F.height))),
        (c = Math.min(2, devicePixelRatio || 1)),
        (e.width = Math.round(l * c)),
        (e.height = Math.round(a * c));
    },
    b = new ResizeObserver(d);
  return (
    b.observe(e),
    d(),
    { canvas: e, ctx: s, size: () => ({ w: l, h: a, dpr: c }), dispose: () => b.disconnect() }
  );
}
const Ot = () => matchMedia("(prefers-reduced-motion: reduce)").matches,
  v = 196,
  k = 256,
  B = bt.cell.h / bt.cell.w,
  vt = 0.14,
  U = 1 + vt,
  J = B + vt,
  it = { i: Math.floor(v / 2), j: Math.floor(k / 2) },
  tt = (o, r) => (o === it.i && r === it.j ? 0 : Math.floor(gt(o, r) * $.length)),
  Vt = (o, r, e) => {
    const s = It(e?.strings, e?.locale);
    o.dataset.size = "zoom";
    const l = P("div", "ow ow-zoom"),
      a = P("div", "ow-board"),
      c = P("span", "ow-label"),
      d = P("span", "ow-status");
    d.setAttribute("aria-live", "polite");
    const b = P("div", "oz-count"),
      F = [];
    for (const t of s.caption.split(/(\{stores\}|\n)/)) {
      if (
        t ===
        `
`
      ) {
        b.append(document.createElement("br"));
        continue;
      }
      const n = P("span", t === "{stores}" ? "oz-count__n" : "oz-count__note");
      t === "{stores}" ? F.push(n) : (n.textContent = t), b.append(n);
    }
    b.setAttribute("aria-hidden", "true"),
      l.append(a, b, d),
      o.append(l),
      l.setAttribute("role", "img"),
      l.setAttribute("aria-label", s.description);
    const { ctx: m, size: E, dispose: kt } = _t(a, "ow-zoom__canvas");
    a.append(c);
    const Z = document.createElement("canvas");
    (Z.width = v), (Z.height = k);
    const Ct = (t, n) => {
        const i = [1, 3, 5].map((u) =>
          Math.max(0, Math.min(255, Math.round(parseInt(t.slice(u, u + 2), 16) * n))),
        );
        return `rgb(${i[0]},${i[1]},${i[2]})`;
      },
      ct = (t, n) => Ct($[tt(t, n)].hero, 0.82 + gt(n, t) * 0.36);
    {
      const t = Z.getContext("2d");
      for (let n = 0; n < k; n++)
        for (let i = 0; i < v; i++) (t.fillStyle = ct(i, n)), t.fillRect(i, n, 1, 1);
    }
    let et;
    jt().then((t) => {
      (et = t), C();
    });
    const D = 13,
      N = () => Math.min(E().w - 20, (E().h - D * 2 - 10) / B),
      ot = () => Math.max(E().w / (v * U), E().h / (k * J));
    let x = { ...it },
      w = Math.log(N()),
      H = w,
      p = { x: x.i + 0.5, y: x.j + 0.5 },
      z = !1,
      I = !1,
      V,
      M,
      X = 0,
      nt = performance.now(),
      at = !1;
    const q = () => {
      const t = Math.log(N()),
        n = Math.log(ot());
      return Math.max(0, Math.min(1, (t - w) / (t - n)));
    };
    function lt(t) {
      X = 0;
      const n = Math.min(0.05, (t - nt) / 1e3);
      nt = t;
      const { w: i, h: u, dpr: j } = E(),
        _ = Ot();
      H = V ?? Math.log(z && !I ? ot() : N());
      const T = H < w ? 0.85 : 2.4;
      w = _ ? H : w + (H - w) * (1 - Math.exp(-n * T));
      const f = Math.exp(w),
        y = q(),
        S = { x: x.i + 0.5, y: x.j + 0.5 };
      if (!M) {
        const h = { x: S.x + (v / 2 - S.x) * y * y, y: S.y + (k / 2 - S.y) * y * y };
        (p.x += (h.x - p.x) * (1 - Math.exp(-n * 6))), (p.y += (h.y - p.y) * (1 - Math.exp(-n * 6)));
      }
      m.setTransform(j, 0, 0, j, 0, 0), m.clearRect(0, 0, i, u);
      const A = f * U,
        L = f * J,
        St = (D / 2) * (1 - y),
        O = i / 2 - p.x * A,
        Y = u / 2 + St - p.y * L,
        mt = Math.max(0, Math.floor(-O / A)),
        ut = Math.min(v - 1, Math.ceil((i - O) / A)),
        ft = Math.max(0, Math.floor(-Y / L)),
        pt = Math.min(k - 1, Math.ceil((u - Y) / L)),
        G = Math.max(0, Math.min(1, (f - 10) / 8)),
        K = Math.max(0, Math.min(1, (f - 1.4) / 1.6));
      if (
        (K < 1 &&
          ((m.globalAlpha = 1 - K), (m.imageSmoothingEnabled = !1), m.drawImage(Z, O, Y, v * A, k * L)),
        K > 0 && G < 1)
      ) {
        m.globalAlpha = K * (1 - G);
        for (let h = ft; h <= pt; h++)
          for (let g = mt; g <= ut; g++) (m.fillStyle = ct(g, h)), m.fillRect(O + g * A, Y + h * L, f, f * B);
      }
      if (G > 0 && et) {
        (m.globalAlpha = G), (m.imageSmoothingEnabled = !0), (m.imageSmoothingQuality = "high");
        for (let h = ft; h <= pt; h++)
          for (let g = mt; g <= ut; g++) {
            const W = Tt($[tt(g, h)]);
            m.drawImage(et, W.sx, W.sy, W.sw, W.sh, O + g * A, Y + h * L, f, f * B);
          }
      }
      m.globalAlpha = 1;
      const Mt = O + x.i * A,
        yt = Y + x.j * L,
        At = Math.max(0, Math.min(1, (f - 8) / 10));
      Pt(m, Mt, yt, f, f * B, At);
      const Lt = $[tt(x.i, x.j)].name;
      (c.textContent = Lt),
        (c.style.opacity = String(Math.max(0, Math.min(1, (f - 40) / 30)) * 0.85)),
        (c.style.transform = `translate(${Math.round(Mt)}px, ${Math.round(yt - D)}px)`);
      const Et = Math.max(1, Math.min(v, Math.round(i / A)) * Math.min(k, Math.round(u / L)));
      at = y > 0.985 || (at && y > 0.9);
      const rt = at,
        wt = s.stores(Math.min(5e4, Et), rt);
      for (const h of F) h.textContent !== wt && (h.textContent = wt);
      b.classList.toggle("is-all", rt),
        b.classList.toggle("is-shown", z || y > 0.02),
        rt && d.textContent !== s.allInView && (d.textContent = s.allInView),
        (Math.abs(H - w) > 0.001 || M || z) && (X = requestAnimationFrame(lt));
    }
    function C() {
      X || ((nt = performance.now()), (X = requestAnimationFrame(lt)));
    }
    const ht = (t, n) => {
        const { w: i, h: u } = E(),
          j = Math.exp(w),
          _ = j * U,
          T = j * J,
          f = (D / 2) * (1 - q()),
          y = Math.floor((t - (i / 2 - p.x * _)) / _),
          S = Math.floor((n - (u / 2 + f - p.y * T)) / T);
        return y >= 0 && y < v && S >= 0 && S < k ? { i: y, j: S } : void 0;
      },
      dt = new AbortController(),
      { signal: R } = dt;
    return (
      a.addEventListener(
        "pointerenter",
        (t) => {
          t.pointerType === "mouse" && ((z = !0), C());
        },
        { signal: R },
      ),
      a.addEventListener(
        "pointerleave",
        (t) => {
          t.pointerType === "mouse" && ((z = !1), (I = !1), (V = void 0), C());
        },
        { signal: R },
      ),
      a.addEventListener(
        "pointerdown",
        (t) => {
          (M = { x: t.clientX, y: t.clientY, cx: p.x, cy: p.y, moved: 0 }), a.setPointerCapture(t.pointerId);
        },
        { signal: R },
      ),
      a.addEventListener(
        "pointermove",
        (t) => {
          if (!M) return;
          const n = Math.exp(w);
          (M.moved += Math.abs(t.movementX) + Math.abs(t.movementY)),
            !(M.moved < 4) &&
              ((p.x = M.cx - (t.clientX - M.x) / (n * U)), (p.y = M.cy - (t.clientY - M.y) / (n * J)), C());
        },
        { signal: R },
      ),
      a.addEventListener(
        "pointerup",
        (t) => {
          const n = (M?.moved ?? 0) >= 4;
          if (((M = void 0), n)) {
            const { w: j, h: _ } = E(),
              T = ht(j / 2, _ / 2);
            T && (x = T);
            return;
          }
          const i = a.getBoundingClientRect(),
            u = ht(t.clientX - i.left, t.clientY - i.top);
          t.pointerType !== "mouse" && ((z = !z || q() < 0.5), (I = !1)),
            u && q() > 0.08
              ? ((x = u), (I = !0), (V = void 0), (d.textContent = s.selected($[tt(u.i, u.j)].name)))
              : I && (I = !1),
            C();
        },
        { signal: R },
      ),
      a.addEventListener(
        "wheel",
        (t) => {
          if (!t.ctrlKey) return;
          t.preventDefault();
          const n = V ?? w;
          (V = Math.max(Math.log(ot()), Math.min(Math.log(N() * 1.6), n - t.deltaY * 0.012))), (I = !1), C();
        },
        { signal: R, passive: !1 },
      ),
      addEventListener("resize", C, { signal: R }),
      C(),
      () => {
        dt.abort(), cancelAnimationFrame(X), kt(), l.remove();
      }
    );
  };
export { Vt as mountZoom };
