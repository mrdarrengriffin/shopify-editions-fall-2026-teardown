import { w as zt, C as bt } from "./canvas-RLtP6qLT.js";
import { w as Vt } from "./runtime-CljIenoa.js";
import { g as Ut, f as rt } from "./formatCopy-Cs7MVtfe.js";
import "./constants-Dvx39Bnh.js";
import "./fontFamily-DUpol7iY.js";
import "./frameLoop-CeLX9Qef.js";
import "./residentSections-BEssGc_p.js";
import "./colorPalette-VQpnhwit.js";
import "./locale-DXEWuBc6.js";
const Ht = {
  description:
    "Every product shipped in 2025, its trip laid end to end: 5.8 trillion miles. One product’s 214 miles; about 116 go once around Earth, 1,116 reach the Moon, 434,000 the Sun; all 27.1 billion reach 370 times as far as Voyager 1.",
  oneProduct: "1 product",
  products: "{count} products",
  miles: "{distance} mi",
  reached: "{miles} · {landmark}",
  earthLaps: "{count} laps of Earth",
  earthTo: "once around Earth",
  earthRing: "Around Earth",
  moonTo: "to the Moon",
  moonPast: "past the Moon",
  moonRing: "Moon",
  sunTo: "to the Sun",
  sunPast: "past the Sun",
  sunRing: "Sun",
  neptuneTo: "to Neptune",
  neptunePast: "past Neptune",
  neptuneRing: "Neptune",
  voyagerTo: "as far as Voyager 1",
  voyagerPast: "past Voyager 1",
  voyagerRing: "Voyager 1",
  allTo: "370× Voyager 1",
};
function Bt(n, r = "en") {
  const o = { ...Ht, ...n },
    b = Ut(r),
    q = new Intl.NumberFormat(b, { maximumFractionDigits: 0 }),
    tt = (i) =>
      new Intl.NumberFormat(b, { notation: "compact", minimumFractionDigits: i, maximumFractionDigits: i }),
    t = tt(0),
    V = tt(1),
    E = (i) =>
      i >= 1e9 ? V.format(i) : i >= 1e7 ? t.format(i) : i >= 1e6 ? V.format(i) : q.format(Math.round(i)),
    g = (i) =>
      i >= 1e9
        ? V.format(i)
        : i >= 1e7
          ? t.format(i)
          : i >= 1e6
            ? V.format(i)
            : i >= 1e4
              ? t.format(i)
              : q.format(Math.round(i));
  return {
    description: o.description,
    products: (i) => (i < 1.5 ? o.oneProduct : rt(o.products, { count: g(i) })),
    miles: (i) => rt(o.miles, { distance: E(i) }),
    reached: (i, C) => rt(o.reached, { miles: i, landmark: C }),
    earthLaps: (i) => (i >= 2 ? rt(o.earthLaps, { count: q.format(i) }) : o.earthTo),
    allTo: o.allTo,
    rings: {
      earth: { name: o.earthRing, to: o.earthTo, past: o.earthTo },
      moon: { name: o.moonRing, to: o.moonTo, past: o.moonPast },
      sun: { name: o.sunRing, to: o.sunTo, past: o.sunPast },
      neptune: { name: o.neptuneRing, to: o.neptuneTo, past: o.neptunePast },
      voyager: { name: o.voyagerRing, to: o.voyagerTo, past: o.voyagerPast },
    },
  };
}
const Rt = "#fff",
  ft = `300 8px ${bt}`,
  dt = `300 9.5px ${bt}`,
  Mt = `300 12px ${bt}`,
  Gt = 258,
  Kt = 163,
  St = 0.56,
  ct = -0.38,
  kt = Math.cos(ct),
  It = Math.sin(ct),
  qt = 0.3,
  $t = 3959,
  wt = 92955807,
  Nt = 58e11,
  Et = 271e8,
  W = Nt / Et,
  D = [
    { d: W },
    { d: 24901, ring: "earth" },
    { d: 238855, ring: "moon" },
    { d: wt, ring: "sun" },
    { d: 30.07 * wt, ring: "neptune" },
    { d: 156e8, ring: "voyager" },
    { d: Nt },
  ],
  u = D.map((n) => Math.log10(n.d)),
  _ = u[0],
  B = u[u.length - 1],
  it = 0.5,
  X = 0.6,
  Tt = 0.4,
  Lt = it + (u.length - 1) * (X + Tt),
  Z = (n, r = 0, o = 1) => Math.min(o, Math.max(r, n)),
  J = (n, r, o) => n + (r - n) * o,
  L = (n, r, o) => {
    const b = Z((o - n) / (r - n));
    return b * b * (3 - 2 * b);
  },
  jt = (n) => (n < 0.5 ? 4 * n * n * n : 1 - (-2 * n + 2) ** 3 / 2),
  Yt = (n) => (n < 0.5 ? Math.cbrt(n / 4) : 1 - Math.cbrt(2 * (1 - n)) / 2);
function Jt(n) {
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
function Q(n, r) {
  const o = n * Math.cos(r),
    b = n * Math.sin(r) * St;
  return [o * kt - b * It, o * It + b * kt];
}
const lt = Q(1, qt),
  G = Math.hypot(lt[0], lt[1]),
  K = [lt[0] / G, lt[1] / G],
  H = [K[1], -K[0]],
  z = Jt(111),
  Qt = Array.from({ length: 480 }, () => {
    const n = 10 ** (2.2 + z() * 10.4),
      [r, o] = Q(1, z() * Math.PI * 2);
    return { r: n, ux: r, uy: o, alpha: 0.16 + z() * 0.4, size: z() < 0.12 ? 1.4 : 0.9 };
  }),
  Xt = Array.from({ length: 6 }, (n, r) => ({
    a: (r / 6) * Math.PI * 2 + z() * 0.6,
    len: 0.9 + z() * 0.8,
    alpha: 0.07 + z() * 0.07,
  })),
  Zt = (n, r) => (n <= 0 ? 0 : Math.max(0, 0.5 * n + 0.5 * (1 + Math.log10(n) / r))),
  to = (n) => {
    if (n < it) return _;
    n -= it;
    const r = X + Tt,
      o = Math.floor(n / r);
    return o >= u.length - 1 ? B : J(u[o], u[o + 1], jt(Z((n - o * r) / X)));
  },
  oo = (n) => {
    if (n <= _ + 0.002) return 0;
    let r = 0;
    for (; r < u.length - 1 && u[r + 1] <= n; ) r++;
    if (r >= u.length - 1) return Lt;
    const o = Z((n - u[r]) / (u[r + 1] - u[r]));
    return it + r * (X + Tt) + Yt(o) * X;
  },
  eo = (n) => {
    let r = 0;
    return (
      u.forEach((o, b) => {
        Math.abs(o - n) < Math.abs(u[r] - n) && (r = b);
      }),
      r
    );
  },
  go = (n, r) => {
    const o = Bt(r?.strings, r?.locale),
      b = Vt(n),
      { signal: q } = b;
    n.setAttribute("role", "img"), n.setAttribute("aria-label", o.description);
    const tt = () => yt.wake(),
      { ctx: t, size: V } = zt(n, { signal: q, invalidate: tt, fonts: [ft, dt, Mt] });
    t.canvas.style.touchAction = "pan-y";
    let E = b.state.reducedMotion,
      g = E ? B : _,
      i = E ? 1 : 0,
      C = !1,
      Pt = "rest",
      ot = 0,
      $ = 0;
    const F = D.map(() => 0),
      ht = (h, P, f, A, v = 1) => (
        (t.font = A),
        (t.textAlign = "left"),
        (t.textBaseline = "alphabetic"),
        (t.globalAlpha = v),
        (t.fillStyle = Rt),
        t.fillText(h, P, f),
        (t.globalAlpha = 1),
        t.measureText(h).width
      ),
      j = (h, P, f, A) => {
        t.save(),
          (t.globalCompositeOperation = "destination-out"),
          (t.globalAlpha = 1),
          t.fillRect(h, P, f, A),
          t.restore();
      },
      Ot = (h, P, f, A) => {
        (t.globalAlpha = A),
          t.beginPath(),
          t.moveTo(h - f, P - f),
          t.lineTo(h + f, P + f),
          t.moveTo(h + f, P - f),
          t.lineTo(h - f, P + f),
          t.stroke(),
          (t.globalAlpha = 1);
      },
      Dt = () => {
        const h = V(),
          P = Math.min(h.w / Gt, h.h / Kt),
          f = h.w / P,
          A = h.h / P;
        t.setTransform(h.dpr * P, 0, 0, h.dpr * P, 0, 0),
          t.clearRect(0, 0, f, A),
          (t.strokeStyle = t.fillStyle = Rt),
          (t.lineWidth = 0.75),
          (t.lineCap = "round"),
          (t.lineJoin = "round");
        const v = 10 ** g,
          pt = Math.exp(-(((g - u[1]) / 0.3) ** 2)),
          R = 30,
          I = A * J(0.68, 0.55, pt),
          gt = J(44, 158, i),
          _t = Math.max(1, g - _ + 1),
          ut = (e) => gt * Zt(e / v, _t),
          O = (e) => {
            const s = ut(e);
            return [R + K[0] * s, I + K[1] * s];
          },
          [U, Y] = O(v),
          et = 234,
          mt = (e, s, l = 0) => e > -l && e < et + l && s > -l && s < A + l;
        t.save(), t.beginPath(), t.rect(0, 0, et, A), t.clip();
        for (const e of Xt) {
          const [s, l] = Q((gt * e.len) / G, e.a + $ * 0.02);
          (t.globalAlpha = e.alpha * i), t.beginPath(), t.moveTo(R, I), t.lineTo(R + s, I + l), t.stroke();
        }
        for (const e of Qt) {
          const s = ut(e.r);
          if (s < 18 || s > 600) continue;
          const l = R + (e.ux * s) / G,
            p = I + (e.uy * s) / G;
          mt(l, p) &&
            ((t.globalAlpha = e.alpha * L(18, 60, s)),
            t.fillRect(l - e.size / 2, p - e.size / 2, e.size, e.size));
        }
        t.globalAlpha = 1;
        const x = (gt * $t) / v,
          At = (x + 0.5 + 3 * (1 - L(30, 200, x))) * L(2.5, 7, x),
          nt = R - H[0] * At,
          at = I - H[1] * At;
        if (x < 8e4) {
          if (x > 200) {
            (t.globalAlpha = 0.26 * L(200, 700, x)), t.beginPath();
            for (let e = 2; e < et; e += 6) {
              const s = e - nt,
                l = at - Math.sqrt(Math.max(0, x * x - s * s));
              t.moveTo(e, l + 3), t.lineTo(e - 4, l + 7);
            }
            t.stroke();
          }
          (t.globalAlpha = 0.8),
            t.beginPath(),
            t.arc(nt, at, Math.max(x, 2), 0, Math.PI * 2),
            t.stroke(),
            x > 8 &&
              x < 40 &&
              ((t.globalAlpha = 0.35),
              t.beginPath(),
              t.ellipse(nt, at, x, x * 0.32, ct, 0, Math.PI * 2),
              t.stroke()),
            pt > 0.02 &&
              x > 4 &&
              (t.save(),
              t.setLineDash([1.2, 2.2]),
              (t.globalAlpha = 0.9 * pt),
              (t.lineWidth = 1),
              t.beginPath(),
              t.arc(nt, at, x + 3, 0, Math.PI * 2),
              t.stroke(),
              t.restore()),
            (t.globalAlpha = 1);
        }
        const xt = [],
          Ct = (e) =>
            !xt.some(
              (s) => e[0] < s[0] + s[2] && e[0] + e[2] > s[0] && e[1] < s[1] + s[3] && e[1] + e[3] > s[1],
            ),
          vt = [];
        D.forEach((e, s) => {
          if (!e.ring) return;
          const l = ut(e.d),
            p = l / G,
            m = (e.d > v * 1.0001 ? 0.3 * L(320, 160, l) : 0.5) * L(3, 10, l) + 0.5 * F[s];
          if (m <= 0.01 || l > 600) return;
          if (
            ((t.globalAlpha = m),
            (t.lineWidth = 0.75 + F[s] * 0.6),
            t.beginPath(),
            t.ellipse(R, I, p, p * St, ct, 0, Math.PI * 2),
            t.stroke(),
            (t.lineWidth = 0.75),
            l > 14)
          ) {
            (t.globalAlpha = 0.3 * m), t.beginPath();
            const M = $ * (0.12 / (1 + s * 0.5));
            for (let y = 0; y < Math.PI * 2; y += Math.PI / 15) {
              const [w, S] = Q(p, y + M),
                [k, T] = Q(p + 3, y + M);
              !mt(R + w, I + S, 4) ||
                Math.hypot(R + w - U, I + S - Y) < 10 ||
                (t.moveTo(R + w, I + S), t.lineTo(R + k, I + T));
            }
            t.stroke();
          }
          const [c, a] = O(e.d),
            d = L(8, 24, l);
          if (d > 0.02 && mt(c, a, 10)) {
            if (((t.globalAlpha = d), e.ring === "moon"))
              j(c - 3.2, a - 3.2, 6.4, 6.4), t.beginPath(), t.arc(c, a, 2.6, 0, Math.PI * 2), t.stroke();
            else if (e.ring === "sun") {
              t.beginPath(), t.arc(c, a, 2.8, 0, Math.PI * 2), t.fill(), t.beginPath();
              for (let k = 0; k < 8; k++) {
                const T = (k / 8) * Math.PI * 2;
                t.moveTo(c + Math.cos(T) * 4.5, a + Math.sin(T) * 4.5),
                  t.lineTo(c + Math.cos(T) * 7, a + Math.sin(T) * 7);
              }
              t.stroke();
            } else
              e.ring === "neptune"
                ? (j(c - 3, a - 3, 6, 6),
                  t.beginPath(),
                  t.arc(c, a, 2.4, 0, Math.PI * 2),
                  t.stroke(),
                  (t.globalAlpha = d * (1 - 0.8 * Math.exp(-(((g - u[s]) / 0.05) ** 2)))),
                  t.beginPath(),
                  t.ellipse(c, a, 5, 1.6, -0.3, 0, Math.PI * 2),
                  t.stroke())
                : e.ring === "voyager"
                  ? (t.beginPath(),
                    t.moveTo(c - 3, a),
                    t.lineTo(c + 3, a),
                    t.moveTo(c, a - 3),
                    t.lineTo(c, a + 3),
                    t.stroke())
                  : (t.beginPath(), t.moveTo(c, a - 3), t.lineTo(c, a + 3), t.stroke());
            t.globalAlpha = 1;
            const M = o.rings[e.ring].name;
            t.font = ft;
            const y = t.measureText(M).width,
              w = Math.abs(g - u[s]) < 0.06,
              S = c + 2 + y > et - 2;
            if ((Math.abs(c - U) > 30 || w) && l > 16 && !(w && S)) {
              const k = S ? c - 4 - y : c + 2;
              vt.unshift(() => {
                const T = [k - 1, a + 6, y + 2, 10];
                Ct(T) &&
                  (xt.push(T), j(T[0], T[1], T[2], T[3]), ht(M, k, a + 14, ft, Math.min(1, 0.45 + d * 0.5)));
              });
            }
          }
        });
        {
          let e = 0,
            s = 0;
          for (t.globalAlpha = 0.95, t.lineWidth = 1.1, t.beginPath(), t.moveTo(R, I); e < 200; e++) {
            const l = Math.min(v, (e + 1) * W),
              [p, N] = O(s),
              [m, c] = O(l),
              a = Math.hypot(m - p, c - N);
            if (a < 3.5 || s >= v) break;
            const d = Math.min(30, a * 0.34) * L(3.5, 12, a),
              M = (p + m) / 2 + H[0] * d,
              y = (N + c) / 2 + H[1] * d;
            t.quadraticCurveTo(M, y, m, c), (s = l);
          }
          if (
            (s < v && t.lineTo(U, Y),
            t.stroke(),
            (t.lineWidth = 0.75),
            g < B - 0.01 &&
              (t.save(),
              t.setLineDash([1.5, 3]),
              (t.globalAlpha = 0.28),
              t.beginPath(),
              t.moveTo(U, Y),
              t.lineTo(U + K[0] * 50, Y + K[1] * 50),
              t.stroke(),
              t.restore()),
            !E)
          ) {
            const p = ($ % 2.4) / 2.4,
              N = (c, a) => {
                const [d, M] = O(c),
                  [y, w] = O(c + W),
                  S = Math.hypot(y - d, w - M),
                  k = Math.min(30, S * 0.34) * L(3.5, 12, S),
                  T = (d + y) / 2 + H[0] * k,
                  st = (M + w) / 2 + H[1] * k;
                return [
                  (1 - a) ** 2 * d + 2 * (1 - a) * a * T + a * a * y,
                  (1 - a) ** 2 * M + 2 * (1 - a) * a * st + a * a * w,
                ];
              };
            if (O(W)[0] - R > 12) {
              const [c, a] = N(0, Math.min(1, p * 1.5));
              if (
                ((t.globalAlpha = p < 0.66 ? 1 : Math.max(0, 1 - (p - 0.66) * 4)),
                t.fillRect(c - 1.5, a - 1.5, 3, 3),
                p > 0.6)
              ) {
                const [d, M] = N(W, Math.min(1, (p - 0.6) * 2));
                (t.globalAlpha = Math.max(0, 1 - (p - 0.6) * 2.4)), t.fillRect(d - 1.5, M - 1.5, 3, 3);
              }
            } else
              for (let c = 0; c < 4; c++) {
                const a = ($ * 0.35 + c / 4) % 1,
                  [d, M] = O(v * 10 ** (-1.4 + a * 1.4) * 0.98);
                (t.globalAlpha = Math.sin(a * Math.PI) * 0.85), t.fillRect(d - 1.2, M - 1.2, 2.4, 2.4);
              }
            t.globalAlpha = 1;
          }
        }
        for (const e of vt) e();
        j(R - 2.5, I - 2.5, 5, 5), t.strokeRect(R - 2, I - 2, 4, 4), t.restore();
        {
          const e = eo(g),
            s = Math.abs(u[e] - g) < 0.06;
          Ot(U, Y, 3.5 + F[e] * 1.5, 1);
          const l = v / W,
            p = D[e],
            N = s && e > 0 ? p.d / W : l,
            m = o.products(g >= B - 0.004 ? Et : N);
          let c = 0;
          u.forEach((Ft, Wt) => {
            g >= Ft - 0.005 && (c = Wt);
          });
          const a = D[c].ring,
            d = a === "earth" ? o.earthLaps(Math.round(v / D[1].d)) : a ? o.rings[a].past : "",
            M =
              s && e > 0
                ? o.reached(o.miles(p.d), p.ring ? o.rings[p.ring].to : o.allTo)
                : l < 1.5 || !d
                  ? o.miles(v)
                  : o.reached(o.miles(v), d);
          t.font = Mt;
          const y = t.measureText(m).width;
          t.font = dt;
          const w = t.measureText(M).width,
            S = Math.max(y, w),
            k = 5,
            T = 15,
            st = Math.min(1, (f - 24 - k) / S);
          t.save(),
            t.translate(k, T),
            t.scale(st, st),
            j(-3, -12, S + 6, 27),
            ht(m, 0, 0, Mt),
            ht(M, 0, 12.5, dt),
            t.restore();
        }
        {
          const e = f - 9,
            s = 14,
            l = A - 14,
            p = (m) => J(s, l, m / (D.length - 1));
          (t.globalAlpha = 0.4),
            t.beginPath(),
            t.moveTo(e, s),
            t.lineTo(e, l),
            t.stroke(),
            (t.globalAlpha = 0.6),
            t.beginPath(),
            D.forEach((m, c) => {
              t.moveTo(e - 2.5, p(c)), t.lineTo(e + 2.5, p(c));
            }),
            t.stroke();
          let N = l;
          for (let m = 0; m < u.length - 1; m++)
            if (g <= u[m + 1]) {
              N = J(p(m), p(m + 1), Z((g - u[m]) / (u[m + 1] - u[m])));
              break;
            }
          (t.globalAlpha = 1), t.fillRect(e - 3, N - 3, 6, 6);
        }
      },
      yt = b.loop((h) => {
        if ((($ += h), !E)) {
          const P = g;
          (i += ((C ? 1 : 0) - i) * Math.min(1, h * 7)),
            Pt === "auto"
              ? ((ot = Math.min(Lt, ot + h)), (g = to(ot)))
              : ((g += (_ - g) * Math.min(1, h * 3.2)), Math.abs(g - _) < 0.001 && (g = _)),
            (g = Z(g, _, B)),
            u.forEach((f, A) => {
              (P - f) * (g - f) <= 0 && P !== g && (F[A] = 1), (F[A] = Math.max(0, F[A] - h * 2.2));
            });
        }
        return Dt(), !E;
      });
    return (
      b.watch((h) => {
        h.reducedMotion !== E && ((E = h.reducedMotion), E && ((g = B), (i = 1), F.fill(0))),
          h.revealed !== C && ((C = h.revealed), (Pt = C ? "auto" : "rest"), C && (ot = oo(g))),
          yt.wake();
      }),
      () => {
        b.dispose(), n.removeAttribute("role"), n.removeAttribute("aria-label");
      }
    );
  };
export { go as mount };
