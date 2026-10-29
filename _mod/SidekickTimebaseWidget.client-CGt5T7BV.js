import { w as z, C as Q } from "./canvas-RLtP6qLT.js";
import { w as V } from "./runtime-CljIenoa.js";
import { g as q, f as U } from "./formatCopy-Cs7MVtfe.js";
import "./constants-Dvx39Bnh.js";
import "./fontFamily-DUpol7iY.js";
import "./frameLoop-CeLX9Qef.js";
import "./residentSections-BEssGc_p.js";
import "./colorPalette-VQpnhwit.js";
import "./locale-DXEWuBc6.js";
const tt = {
    description:
      "Sidekick’s conversations streaming past on a graph of conversations over time: a constant, busy stream, about {count} a day.",
    conversations: "conversations",
    time: "time",
  },
  ot = 386e3;
function et(n, r = "en") {
  const o = { ...tt, ...n },
    f = new Intl.NumberFormat(q(r)).format(ot);
  return { description: U(o.description, { count: f }), conversations: o.conversations, time: o.time };
}
const nt = "#fff",
  it = 22,
  N = 66,
  F = 0.2,
  st = 0.62,
  at = 26,
  l = 5,
  lt = 1.6,
  rt = 0.4,
  ct = 8,
  E = 7.5,
  pt = 5.5,
  W = (n) => `300 ${n}px ${Q}`,
  K = (n, r = 0, o = 1) => Math.min(o, Math.max(r, n));
function mt(n) {
  let r = n >>> 0;
  return () => {
    r = (r + 1831565813) >>> 0;
    let o = r;
    return (
      (o = Math.imul(o ^ (o >>> 15), o | 1)),
      (o ^= o + Math.imul(o ^ (o >>> 7), o | 61)),
      ((o ^ (o >>> 14)) >>> 0) / 4294967296
    );
  };
}
const Mt = (n, r) => {
  const o = et(r?.strings, r?.locale),
    f = V(n),
    { signal: S } = f,
    G = n.ownerDocument,
    J = () => C.wake(),
    { ctx: t, size: I } = z(n, { signal: S, invalidate: J, fonts: [W(E)] }),
    M = G.createElement("div");
  (M.className = "sr-only"),
    M.setAttribute("role", "img"),
    M.setAttribute("aria-label", o.description),
    n.append(M);
  const Y = mt(43),
    y = () => -Math.log(1 - Y()) / it;
  let h = ct;
  const g = [];
  for (let e = 0; e < h; e += y()) g.push({ t: e, lift: 0, v: 0 });
  let k = y(),
    w;
  const _ = (e, m) => {
      t.font = W(E);
      const d = t.measureText(e).width,
        A = d > m ? Math.max(pt, (E * m) / d) : E;
      t.font = W(A);
    },
    Z = (e) => {
      const { w: m, h: d, dpr: A } = I();
      t.setTransform(A, 0, 0, A, 0, 0), t.clearRect(0, 0, m, d), (t.strokeStyle = t.fillStyle = nt);
      const i = 18,
        c = m - 8,
        s = 8,
        b = d - 15,
        L = c - i,
        P = b - s,
        u = Math.round(i) + 0.5,
        v = Math.round(b) + 0.5;
      t.globalAlpha = 0.3;
      for (let p = 0; p <= 10; p++)
        for (let a = 0; a < 6; a++)
          t.fillRect(Math.round(i + (L * p) / 10) - 0.5, Math.round(s + 4 + ((P - 4) * a) / 6) - 0.5, 1, 1);
      (t.globalAlpha = 0.75),
        (t.lineWidth = 0.75),
        (t.lineJoin = "miter"),
        t.beginPath(),
        t.moveTo(u, s),
        t.lineTo(u, v),
        t.lineTo(c + 4, v),
        t.moveTo(u - 2.5, s + 3.5),
        t.lineTo(u, s),
        t.lineTo(u + 2.5, s + 3.5),
        t.moveTo(c + 0.5, v - 2.5),
        t.lineTo(c + 4, v),
        t.lineTo(c + 0.5, v + 2.5),
        t.stroke(),
        (t.globalAlpha = 0.7),
        t.save(),
        t.translate(9.5, s),
        t.rotate(-Math.PI / 2),
        (t.textAlign = "right"),
        (t.textBaseline = "alphabetic"),
        _(o.conversations, P),
        t.fillText(o.conversations, 0, 0),
        t.restore(),
        (t.textAlign = "right"),
        _(o.time, L / 2),
        t.fillText(o.time, c + 4, d - 4);
      const T = new Path2D(),
        O = [];
      let R = -99,
        x = 0,
        H = 0;
      t.save(), t.beginPath(), t.rect(u + 1, s - 2, c - u + 2, v - s + 1), t.clip();
      for (const p of g) {
        const a = c - (h - p.t) * N;
        if (a < i - l) continue;
        (x = a - R < l + 1.2 ? x + 1 : 0), x || ((R = a), (H = p.lift));
        const D = Math.round(x ? R : a) + 0.5,
          X = b - P * (F + (st - F) * H),
          B = K((h - p.t) / rt),
          $ = e ? 0 : 14 * (1 - B) ** 2 * Math.cos(B * Math.PI * 2.5),
          j = X - x * (l + lt) - $;
        x || (T.moveTo(D, v), T.lineTo(D, X)), O.push([D, j]);
      }
      (t.lineJoin = "round"),
        (t.globalAlpha = 0.12),
        (t.lineWidth = 3.2),
        t.stroke(T),
        (t.globalAlpha = 0.3),
        (t.lineWidth = 1.6),
        t.stroke(T),
        (t.globalAlpha = 1),
        (t.lineWidth = 0.9),
        t.stroke(T),
        (t.lineWidth = 0.8);
      for (const [p, a] of O)
        t.save(),
          (t.globalCompositeOperation = "destination-out"),
          (t.globalAlpha = 1),
          t.fillRect(p - l / 2 - 0.5, a - l, l + 1, l + 1),
          t.restore(),
          (t.globalAlpha = 1),
          t.strokeRect(Math.round(p - l / 2) + 0.5, Math.round(a - l) + 0.5, l - 1, l - 1);
      t.restore(), (t.globalAlpha = 1), (t.textAlign = "left");
    },
    C = f.loop((e) => {
      const m = f.state.reducedMotion;
      if (!m) {
        for (h += e, k -= e; k <= 0; ) g.push({ t: h + k, lift: 0, v: 0 }), (k += y());
        const d = (I().w + 40) / N;
        for (; g.length && h - g[0].t > d; ) g.shift();
        const A = I().w - 8;
        for (const i of g) {
          const c = w === void 0 ? 1 / 0 : A - (h - i.t) * N - w,
            s = Math.exp(-((c / at) ** 2)),
            b = s > i.lift;
          (i.v += ((b ? 170 : 26) * (s - i.lift) - (b ? 16 : 9) * i.v) * e),
            (i.lift = K(i.lift + i.v * e, -0.05, 1.08));
        }
      }
      return Z(m), !m;
    });
  return (
    n.addEventListener(
      "pointermove",
      (e) => {
        f.state.revealed && ((w = e.clientX - n.getBoundingClientRect().left), C.wake());
      },
      { signal: S },
    ),
    n.addEventListener(
      "pointerleave",
      () => {
        w = void 0;
      },
      { signal: S },
    ),
    f.watch((e) => {
      e.revealed || (w = void 0), C.wake();
    }),
    () => {
      f.dispose(), M.remove();
    }
  );
};
export { Mt as mount };
