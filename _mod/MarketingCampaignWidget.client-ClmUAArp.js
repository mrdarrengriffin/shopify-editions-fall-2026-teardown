import { w as dt, C as ut, a as gt } from "./canvas-RLtP6qLT.js";
import { w as ft } from "./runtime-CljIenoa.js";
import { g as Mt, f as bt } from "./formatCopy-Cs7MVtfe.js";
import "./constants-Dvx39Bnh.js";
import "./fontFamily-DUpol7iY.js";
import "./frameLoop-CeLX9Qef.js";
import "./residentSections-BEssGc_p.js";
import "./colorPalette-VQpnhwit.js";
import "./locale-DXEWuBc6.js";
const wt = {
  description:
    "The Shop app feed, with sponsored products from Shop Campaigns. Each one bought flies into a list of sales from Shop Campaigns beside it, which keeps filling with sales from businesses everywhere.",
  sales: "Sales from Shop Campaigns",
  sponsored: "Sponsored",
  sold: "Sold ✓",
  sale: "+{amount}",
  overshirt: "Linen overshirt",
  mug: "Stoneware mug",
  tote: "Canvas tote",
  lamp: "Desk lamp",
  runners: "Trail runners",
  vase: "Bud vase",
};
function vt(s, g = "en") {
  const o = { ...wt, ...s },
    N = new Intl.NumberFormat(Mt(g), { style: "currency", currency: "USD", maximumFractionDigits: 0 });
  return {
    description: o.description,
    sales: o.sales,
    sponsored: o.sponsored,
    sold: o.sold,
    price: (L) => N.format(L),
    sale: (L) => bt(o.sale, { amount: N.format(L) }),
    product: (L) => o[L],
  };
}
const tt = "#fff",
  at = 258,
  J = 163,
  yt =
    "M9.29 14.07c-3.13-.67-4.53-.94-4.53-2.15q0-1.7 2.83-1.7a4.2 4.2 0 0 1 3.78 2.15c.06.11.2.15.32.09l3.52-1.78a.25.25 0 0 0 .1-.34C13.85 7.8 11.15 6.42 7.6 6.42c-4.7 0-7.6 2.3-7.6 5.96 0 3.88 3.54 4.86 6.68 5.54s4.54.95 4.54 2.15q0 1.79-3.06 1.78a4.3 4.3 0 0 1-4.12-2.53.25.25 0 0 0-.34-.11L.2 20.95a.25.25 0 0 0-.11.34c1.4 2.8 4.26 4.37 8.08 4.37 4.88 0 7.82-2.26 7.82-6.03s-3.56-4.87-6.69-5.55m18.9-7.66c-2 0-3.78.7-5.05 1.96a.12.12 0 0 1-.2-.08V.25a.25.25 0 0 0-.26-.25h-4.4a.25.25 0 0 0-.26.25v24.97q.02.23.25.25h4.41q.23-.01.25-.25V14.27a3.7 3.7 0 0 1 3.82-3.74 3.64 3.64 0 0 1 3.77 3.74v10.95q.02.23.25.25h4.41q.23-.01.25-.25V14.27c0-4.6-3.02-7.85-7.25-7.85M44.4 5.7c-2.4 0-4.64.73-6.26 1.79a.25.25 0 0 0-.08.33l1.95 3.32c.07.12.22.16.34.09a8 8 0 0 1 4.05-1.11c3.86 0 6.69 2.71 6.69 6.3a5.14 5.14 0 0 1-5.14 5.32c-2.34 0-3.97-1.36-3.97-3.29 0-1.1.47-2 1.69-2.64a.24.24 0 0 0 .1-.34l-1.84-3.1a.25.25 0 0 0-.3-.1 6.3 6.3 0 0 0-4.18 6.04c0 4.45 3.55 7.77 8.5 7.77 5.77 0 9.93-4 9.93-9.74 0-6.15-4.84-10.64-11.48-10.64m24.39.68c-2.23 0-4.23.82-5.68 2.27a.12.12 0 0 1-.21-.09V6.82a.25.25 0 0 0-.25-.25h-4.3a.25.25 0 0 0-.25.25v24.94c0 .13.1.24.25.24h4.41q.23-.02.25-.24v-8.18c0-.11.13-.17.21-.1a8 8 0 0 0 5.57 2.14c5.18 0 9.21-4.18 9.21-9.62s-4.04-9.62-9.21-9.62m-.84 15.02c-2.94 0-5.17-2.34-5.17-5.43 0-3.1 2.23-5.44 5.17-5.44 2.95 0 5.18 2.3 5.18 5.44 0 3.13-2.2 5.43-5.18 5.43",
  At = {
    shirt: "M8 4.5l4 1.8 4-1.8 4.2 3.4-2.4 2.6-1.6-1.2V20H7.8V9.3L6.2 10.5 3.8 7.9z M12 6.3V20",
    mug: "M6 7h10v10a3 3 0 0 1-3 3H9a3 3 0 0 1-3-3z M16 9.5h1.5a2.5 2.5 0 0 1 0 5H16",
    tote: "M5 9h14l-1.2 11H6.2z M9 9V7.5a3 3 0 0 1 6 0V9",
    sneaker:
      "M3.5 17V12.5l4-1.2 2.5 2.4 4.5.6 5.6 1.9a1.5 1.5 0 0 1 .3 2.8H3.5z M3.5 17h17.2 M9 13l1.2-1.4 M11 14l1.1-1.3",
    lamp: "M8 4h8l3 7H5z M12 11v8 M8.5 19.5h7",
    vase: "M10 4h4v2c0 1.5 3 3 3 7s-2 7-5 7-5-3-5-7 3-5.5 3-7z",
  },
  C = [
    { name: "overshirt", price: 92, icon: "shirt", store: "Field Supply", ad: !0 },
    { name: "mug", price: 38, icon: "mug", store: "Kiln & Co", ad: !1 },
    { name: "tote", price: 54, icon: "tote", store: "Paper Moon", ad: !0 },
    { name: "lamp", price: 120, icon: "lamp", store: "Lumen Goods", ad: !1 },
    { name: "runners", price: 140, icon: "sneaker", store: "Northwind", ad: !0 },
    { name: "vase", price: 46, icon: "vase", store: "Cocotte", ad: !0 },
  ],
  et = [
    "Field Supply",
    "Cocotte",
    "Kiln & Co",
    "Northwind",
    "Paper Moon",
    "Lumen Goods",
    "Salt & Stone",
    "Juniper Tea",
    "Hollow Oak",
    "Ferro Cycles",
    "Maru Studio",
    "Good Thread",
  ],
  O = { x: 6, y: 3, w: 70, h: J - 6 },
  T = { h: 56, gap: 6, img: 36 },
  ot = 78,
  u = { x0: O.x + O.w + 12, x1: at - 6, rule: O.y + 18.5, y: O.y + 34, line: 14, rows: 9 },
  nt = [24, 38, 46, 54, 64, 72, 88, 92, 110, 140, 180],
  St = 38,
  U = 4,
  xt = 5,
  D = (s, g = 0, o = 1) => Math.min(o, Math.max(g, s)),
  j = (s, g, o) => s + (g - s) * o,
  Ct = (s) => 1 - (1 - s) ** 3,
  Tt = (s) => (s < 0.5 ? 4 * s * s * s : 1 - (-2 * s + 2) ** 3 / 2);
function Pt(s) {
  let g = s >>> 0;
  return () => {
    g = (g + 1831565813) >>> 0;
    let o = g;
    return (
      (o = Math.imul(o ^ (o >>> 15), o | 1)),
      (o ^= o + Math.imul(o ^ (o >>> 7), o | 61)),
      ((o ^ (o >>> 14)) >>> 0) / 4294967296
    );
  };
}
const v = (s) => `300 ${s}px ${ut}`,
  st = (s) => `500 ${s}px ${gt}`,
  zt = (s, g) => {
    const o = vt(g?.strings, g?.locale),
      N = ft(s),
      { signal: L } = N,
      lt = s.ownerDocument,
      rt = () => Q.wake(),
      { ctx: t, size: it } = dt(s, { signal: L, invalidate: rt, fonts: [v(9), v(8), v(7), st(7)] }),
      F = lt.createElement("div");
    (F.className = "sr-only"),
      F.setAttribute("role", "img"),
      F.setAttribute("aria-label", o.description),
      s.append(F);
    const B = Pt(19),
      ct = new Path2D(yt),
      pt = Object.fromEntries(Object.entries(At).map(([n, A]) => [n, new Path2D(A)]));
    let l = 0,
      H = !1,
      X = -1,
      W = 0,
      $ = 16;
    const p = [],
      y = [],
      _ = new Map();
    let G = 0.4;
    const P = (n, A, S, h, f = 1, q = "left", z = v, e = 1 / 0) => {
        t.font = z(h);
        const m = t.measureText(n).width;
        return (
          m > e && (t.font = z(Math.max(xt, (h * e) / m))),
          (t.textAlign = q),
          (t.textBaseline = "alphabetic"),
          f > 0 && ((t.globalAlpha = f), t.fillText(n, A, S)),
          t.measureText(n).width
        );
      },
      Y = (n) => {
        p.push({ ...n, at: l, pos: 0 }), p.length > 14 && p.shift();
      },
      ht = () => {
        const n = it(),
          A = Math.min(n.w / at, n.h / J);
        t.setTransform(n.dpr * A, 0, 0, n.dpr * A, 0, 0),
          t.clearRect(0, 0, n.w / A, n.h / A),
          (t.strokeStyle = t.fillStyle = tt),
          (t.lineCap = "round"),
          (t.lineJoin = "round");
        const { x: S, y: h, w: f, h: q } = O;
        (t.globalAlpha = 0.6),
          (t.lineWidth = 0.75),
          t.beginPath(),
          t.roundRect(S + 0.5, h + 0.5, f - 1, q - 1, 8),
          t.stroke(),
          t.save(),
          t.translate(S + 8, h + 6),
          t.scale(8 / 32, 8 / 32),
          (t.globalAlpha = 1),
          t.fill(ct),
          t.restore(),
          (t.globalAlpha = 0.3),
          t.beginPath(),
          t.moveTo(S + 1, h + 18.5),
          t.lineTo(S + f - 1, h + 18.5),
          t.stroke(),
          t.save(),
          t.beginPath(),
          t.roundRect(S + 1, h + 19, f - 2, q - 20, [0, 0, 7, 7]),
          t.clip();
        const z = T.h + T.gap,
          e = Math.floor(W / z);
        for (let a = e; a < e + 4; a++) {
          const c = C[((a % C.length) + C.length) % C.length],
            d = h + 24 + a * z - W,
            r = S + 5,
            M = f - 10;
          (t.globalAlpha = 0.12),
            t.beginPath(),
            t.roundRect(r, d, M, T.img, 3),
            t.fill(),
            t.save(),
            t.translate(r + M / 2 - 12, d + T.img / 2 - 12),
            (t.globalAlpha = 0.9),
            (t.lineWidth = 1),
            t.stroke(pt[c.icon]),
            t.restore(),
            P(o.product(c.name), r + 1, d + T.img + 9, 7, 0.95, "left", st, M - 1),
            P(c.ad ? o.sponsored : o.price(c.price), r + 1, d + T.img + 17.5, 7, 0.7, "left", v, M - 1);
          const b = _.get(a),
            x = b === void 0 ? 9 : l - b;
          if (x < 0.5) {
            const w = Ct(x / 0.5);
            (t.globalAlpha = 0.8 * (1 - w)),
              (t.lineWidth = 0.8),
              t.beginPath(),
              t.arc(r + M / 2, d + T.img / 2, 4 + w * 16, 0, Math.PI * 2),
              t.stroke();
          }
          if (b !== void 0 && x > 0.3) {
            const w = D((x - 0.3) / 0.15);
            t.font = v(7);
            const V = Math.min(M - 6, t.measureText(o.sold).width + 7),
              E = d + T.img - 13;
            (t.globalAlpha = w),
              t.beginPath(),
              t.roundRect(r + M - V - 3, E, V, 10, 2),
              t.fill(),
              t.save(),
              (t.globalCompositeOperation = "destination-out"),
              P(o.sold, r + M - V + 0.5, E + 7.6, 7, w, "left", v, V - 7),
              t.restore();
          }
        }
        t.globalCompositeOperation = "destination-out";
        const m = t.createLinearGradient(0, h + 19, 0, h + 33);
        m.addColorStop(0, "rgba(0,0,0,1)"),
          m.addColorStop(1, "rgba(0,0,0,0)"),
          (t.globalAlpha = 1),
          (t.fillStyle = m),
          t.fillRect(S, h + 19, f, 14),
          (t.globalCompositeOperation = "source-over"),
          (t.fillStyle = tt),
          t.restore();
        const { x0: i, x1: k } = u;
        t.font = v(9);
        const I =
          i +
          Math.max(
            St,
            ...[...nt, ...C.map((a) => a.price)].map((a) => Math.ceil(t.measureText(o.sale(a)).width) + U),
          );
        P(o.sales, i, O.y + 13, 8, 0.85, "left", v, k - i - 8);
        const R = p.length ? D(1 - (l - p[p.length - 1].at) / 0.4) : 0;
        (t.globalAlpha = 0.5 + 0.5 * R),
          t.fillRect(k - 4, O.y + 8, 4, 4),
          (t.globalAlpha = 0.35),
          (t.lineWidth = 0.75),
          t.beginPath(),
          t.moveTo(i, Math.round(u.rule) + 0.5),
          t.lineTo(k, Math.round(u.rule) + 0.5),
          t.stroke(),
          t.save(),
          t.beginPath(),
          t.rect(i - 2, u.rule + 1, k - i + 4, J - u.rule - 1),
          t.clip();
        for (let a = 0; a < Math.min(u.rows + 1, p.length); a++) {
          const c = p[p.length - 1 - a],
            d = c.pos ?? a,
            r = u.y + d * u.line,
            M = a === 0 && !c.from ? D((l - c.at - 0.05) / 0.1) : 1,
            b = D(1 - (d - (u.rows - 2)) / 2) * M * (1 - (d / u.rows) * 0.45);
          if (b <= 0.02) continue;
          const x = o.sale(c.amount),
            w = a === 0 && c.from ? D(1 - (l - c.at) / 0.3) : 0;
          if (w > 0) {
            t.font = v(9);
            const E = t.measureText(x).width + U * 2;
            (t.globalAlpha = w),
              t.beginPath(),
              t.roundRect(I - E + U, r - 8.5, E, 12, 2),
              t.fill(),
              t.save(),
              (t.globalCompositeOperation = "destination-out"),
              P(x, I, r, 9, w, "right"),
              t.restore(),
              P(x, I, r, 9, b * (1 - w), "right");
          } else P(x, I, r, 9, b, "right");
          const V = P(c.store, I + 7, r, 8, 0.75 * b);
          c.product && P(o.product(c.product), k, r, 7, 0.5 * b, "right", v, k - (I + 7 + V + 4)),
            (t.globalAlpha = 0.12 * b),
            (t.lineWidth = 0.5),
            t.beginPath(),
            t.moveTo(i, Math.round(r + 5) + 0.5),
            t.lineTo(k, Math.round(r + 5) + 0.5),
            t.stroke();
        }
        t.restore();
        for (const a of y) {
          if (l < a.at) continue;
          const c = Tt(D((l - a.at) / (a.dur ?? 0.6))),
            d = o.sale(a.amount);
          t.font = v(9);
          const r = t.measureText(d).width + U * 2,
            [M, b] = a.from,
            x = I + U - r / 2,
            w = u.y - 2.5,
            V = j(M, x, c),
            E = j(b, w, c) - Math.sin(c * Math.PI) * 22;
          (t.globalAlpha = 1),
            t.beginPath(),
            t.roundRect(V - r / 2, E - 6, r, 12, 2),
            t.fill(),
            t.save(),
            (t.globalCompositeOperation = "destination-out"),
            P(d, V + r / 2 - 4, E + 2.5, 9, 1, "right"),
            t.restore();
        }
        t.globalAlpha = 1;
      },
      Q = N.loop((n) => {
        const A = N.state.reducedMotion;
        if (!A) {
          l += n;
          const S = H ? l - X : -1;
          ($ = j($, H ? 95 : 16, Math.min(1, n * (H ? 1.8 : 3)))), (W += $ * n);
          const h = T.h + T.gap,
            f = Math.floor(W / h);
          for (let e = f - 1; e < f + 4; e++) {
            const m = C[((e % C.length) + C.length) % C.length],
              i = O.y + 24 + e * h - W + T.img / 2;
            m.ad &&
              !_.has(e) &&
              i < ot &&
              i > ot - 30 &&
              (_.set(e, l),
              y.push({
                amount: m.price,
                store: m.store,
                product: m.name,
                at: l + 0.05,
                dur: 0.6,
                from: [O.x + O.w / 2, i],
              }));
          }
          for (let e = y.length - 1; e >= 0; e--)
            l - y[e].at >= (y[e].dur ?? 0.6) && (Y(y[e]), y.splice(e, 1));
          const q = y.some((e) => l >= e.at && (l - e.at) / (e.dur ?? 0.6) > 0.6) ? 1 : 0;
          p.forEach((e, m) => {
            const i = p.length - 1 - m + q;
            e.pos = (e.pos ?? i) + (i - (e.pos ?? i)) * Math.min(1, n * 30);
          });
          const z = y.some((e) => (l - e.at) / (e.dur ?? 0.6) > 0.75);
          if (l >= G && !z) {
            const e = p.slice(-3).map((R) => R.store),
              m = p.slice(-2).map((R) => R.amount),
              i = et.filter((R) => !e.includes(R)),
              k = nt.filter((R) => !m.includes(R));
            Y({ amount: k[Math.floor(B() * k.length)], store: i[Math.floor(B() * i.length)], at: l });
            const I = H ? j(0.3, 0.045, D(S / 1.5) ** 0.7) : 1.1;
            G = l + I * (0.7 + B() * 0.6);
          }
          for (const e of [..._.keys()]) e < f - 2 && _.delete(e);
        }
        return ht(), !A;
      }),
      Z = () => {
        (y.length = 0), (p.length = 0);
        for (let n = 0; n < u.rows; n++)
          p.push({ amount: C[n % C.length].price, store: et[n], at: -9, pos: u.rows - 1 - n });
      },
      mt = () => {
        (y.length = 0), (p.length = 0), _.clear(), ($ = 16), (G = l + 0.4);
      };
    let K = N.state.reducedMotion;
    return (
      K && Z(),
      N.watch((n) => {
        n.reducedMotion !== K && ((K = n.reducedMotion), K ? Z() : mt()),
          n.revealed !== H && ((H = n.revealed), H && !K && ((X = l), (G = Math.min(G, l + 0.12)))),
          Q.wake();
      }),
      () => {
        N.dispose(), F.remove();
      }
    );
  };
export { zt as mount };
