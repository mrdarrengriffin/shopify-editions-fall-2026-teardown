import { w as Bt, C as ot } from "./canvas-RLtP6qLT.js";
import { w as Ht } from "./runtime-CljIenoa.js";
import { g as Ft, f as ct } from "./formatCopy-Cs7MVtfe.js";
import "./constants-Dvx39Bnh.js";
import "./fontFamily-DUpol7iY.js";
import "./frameLoop-CeLX9Qef.js";
import "./residentSections-BEssGc_p.js";
import "./colorPalette-VQpnhwit.js";
import "./locale-DXEWuBc6.js";
const Vt = {
    description:
      "Two lines over the 12 months after a first purchase: known customers spend 60% more than guests by month 12. Illustrative. The lines bounce under the pointer, and the known one says hello.",
    guest: "Guest",
    known: "Known",
    gap: "+{percent}%",
    month: "Month {month} · +{percent}%",
    monthControl: "Month",
    monthValue: "Month {month}: known customers spend {percent}% more",
    replay: "Redraw",
    greeting1: "Hi again, Jo",
    greeting2: "Your size is back, Ana",
    greeting3: "New in linen, Sam?",
    greeting4: "Your usual, Lee?",
    greeting5: "The tote you saved is in",
    greeting6: "Welcome back, Rosa",
    greeting7: "Kai, it’s in navy now",
    greeting8: "Back in stock, Priya",
    greeting9: "2 points to a reward, Mo",
    greeting10: "New: the mug you liked",
  },
  Yt = [
    "greeting1",
    "greeting2",
    "greeting3",
    "greeting4",
    "greeting5",
    "greeting6",
    "greeting7",
    "greeting8",
    "greeting9",
    "greeting10",
  ];
function Kt(g, N = "en") {
  const s = { ...Vt, ...g },
    u = new Intl.NumberFormat(Ft(N)),
    G = (w, R) => ({ month: u.format(w), percent: u.format(R) });
  return {
    description: s.description,
    guest: s.guest,
    known: s.known,
    monthControl: s.monthControl,
    replay: s.replay,
    greetings: Yt.map((w) => s[w]),
    tick: (w) => u.format(w),
    gap: (w) => ct(s.gap, { percent: u.format(w) }),
    month: (w, R) => ct(s.month, G(w, R)),
    monthValue: (w, R) => ct(s.monthValue, G(w, R)),
  };
}
const yt = "#fff",
  et = `300 8px ${ot}`,
  Lt = `400 9px ${ot}`,
  Et = 36,
  Wt = 64,
  ht = 5.5,
  h = 12,
  Xt = 3.6,
  Pt = 4,
  zt = Math.exp(h / Pt) - 1,
  Ct = (g) => (N) => 1 + ((g - 1) * (Math.exp(N / Pt) - 1)) / zt,
  nt = 60,
  ut = Ct(5),
  j = Ct(5 * (1 + nt / 100)),
  mt = (g) => j(g) / ut(g) - 1,
  qt = (g) => (g < 0.5 ? 8 * g ** 4 : 1 - (-2 * g + 2) ** 4 / 2),
  Jt = j(h) * 1.03,
  St = 1 - (j(h) - 1) * 0.04,
  jt = [0, 3, 6, 9, 12],
  v = 72,
  Qt = 4400,
  Ut = 70,
  Zt = 5.5,
  te = 4,
  ee = 1 / 600,
  Nt = 1.9,
  ne = 1.1,
  oe = 2,
  Rt = () => ({ u: new Float32Array(v), v: new Float32Array(v) }),
  _t = (g, N) =>
    Array.from({ length: g }, (s, u) => ({ t: (u * 0.618 + N) % 1, speed: 0.05 + ((u * 7) % 5) / 90 })),
  gt = (g, N) => {
    const s = (N / h) * (v - 1),
      u = Math.min(v - 2, Math.floor(s)),
      G = s - u;
    return g.u[u] * (1 - G) + g.u[u + 1] * G;
  },
  ue = (g, N) => {
    const s = Kt(N?.strings, N?.locale),
      u = Ht(g),
      { signal: G, surface: w } = u,
      R = g.ownerDocument,
      Q = R.createElement("div");
    Q.className = "retail-lines";
    const C = R.createElement("div");
    (C.className = "retail-lines__board"),
      C.setAttribute("role", "img"),
      C.setAttribute("aria-label", s.description);
    const x = R.createElement("input");
    (x.className = "retail-lines__month"),
      (x.type = "range"),
      (x.min = "0"),
      (x.max = String(h)),
      (x.step = "1"),
      (x.value = String(h)),
      x.setAttribute("aria-label", s.monthControl);
    const K = R.createElement("button");
    (K.className = "retail-lines__replay"),
      (K.type = "button"),
      (K.textContent = s.replay),
      Q.append(x, K, C),
      g.append(Q);
    const It = () => V.wake(),
      { ctx: t, size: ft } = Bt(C, { signal: G, invalidate: It, fonts: [et, Lt] });
    let pt = !1,
      F = 0,
      U,
      _,
      I = 0;
    const Ot = _t(11, 0.3),
      Dt = _t(17, 0.7),
      dt = Rt(),
      st = Rt(),
      at = [
        [dt, ut],
        [st, j],
      ],
      O = [];
    let Mt = 0,
      Gt = Math.floor(Math.random() * s.greetings.length),
      P,
      xt = 0,
      W = Et;
    const it = (i, M, y, f) => {
        const T = (d) => ((t.font = `${i} ${d}px ${ot}`), Math.max(...y.map((r) => t.measureText(r).width))),
          L = T(M);
        if (L <= f) return;
        let e = Math.max(ht, (M * f) / L);
        for (; e > ht && T(e) > f + 0.5; ) e = Math.max(ht, e - 0.25);
        t.font = `${i} ${e}px ${ot}`;
      },
      Z = (i, M) => {
        const y = (T) => t.measureText(T).width <= M + 0.5;
        if (y(i)) return i;
        let f = i;
        for (; f && !y(`${f}…`); ) f = f.slice(0, -1);
        return `${f.trimEnd()}…`;
      };
    let lt;
    function $t(i, M, y, f) {
      const T = Math.max(1, Math.ceil(i / ee)),
        L = i / T;
      for (const [e, d] of at)
        for (let r = 0; r < T; r++) {
          for (let o = 1; o < v - 1; o++) {
            const a = (o / (v - 1)) * h;
            let l =
              Qt * (e.u[o - 1] - 2 * e.u[o] + e.u[o + 1]) -
              Ut * e.u[o] -
              Zt * e.v[o] +
              te * (e.v[o - 1] - 2 * e.v[o] + e.v[o + 1]);
            if (P && a <= f) {
              const D = M(a),
                m = y(d(a)) + e.u[o],
                E = (D - P.x) / 14,
                p = m - P.y,
                $ = Math.exp(-E * E) * Math.max(0, 1 - Math.abs(p) / 20);
              $ > 0.001 && (l += $ * (p / (Math.abs(p) + 1.5)) * 1900);
            }
            e.v[o] = Math.max(-1500, Math.min(1500, e.v[o] + l * L));
          }
          for (let o = 1; o < v - 1; o++) {
            const a = e.u[o] + e.v[o] * L;
            Math.abs(a) > 9
              ? ((e.u[o] = Math.sign(a) * 9), (e.v[o] = -0.2 * e.v[o]))
              : (e.u[o] = Number.isFinite(a) ? a : 0);
          }
          (e.u[0] = 0), (e.u[v - 1] = e.u[v - 1] * 0.9);
        }
      if (I > Mt && O.length < oe) {
        let e = -1,
          d = 0;
        for (let r = 4; r < v - 3 && !((r / (v - 1)) * h > f); r++) {
          const a = Math.abs(st.v[r]);
          a > d && ((d = a), (e = r));
        }
        e >= 0 &&
          d > 120 &&
          (O.push({ text: s.greetings[Gt++ % s.greetings.length], m: (e / (v - 1)) * h, at: I }),
          (Mt = I + ne));
      }
      for (let e = O.length - 1; e >= 0; e--) I - O[e].at > Nt && O.splice(e, 1);
    }
    const V = u.loop((i) => {
      const M = u.state.reducedMotion;
      (I += i), pt && (F = M ? 1 : Math.min(1, F + i / Xt));
      const { w: y, h: f, dpr: T } = ft();
      t.setTransform(T, 0, 0, T, 0, 0), t.clearRect(0, 0, y, f), (t.font = et);
      const L = Math.max(t.measureText(s.guest).width, t.measureText(s.known).width);
      t.font = Lt;
      const e = t.measureText(s.gap(nt)).width;
      W = Math.min(Wt, Math.max(Et, L + 6, e + 10));
      const d = 10,
        r = y - W,
        o = 14,
        a = f - 18,
        l = (n) => d + ((r - d) * n) / h,
        D = (n) => a - ((a - o) * (n - St)) / (Jt - St),
        m = h * qt(F);
      if (((lt = { X: l, Y: D, end: m, L: d, R: r }), !M)) $t(i, l, D, m);
      else {
        O.length = 0;
        for (const [n] of at) n.u.fill(0), n.v.fill(0);
      }
      (t.lineWidth = 0.75),
        (t.strokeStyle = t.fillStyle = yt),
        (t.font = et),
        (t.textBaseline = "middle"),
        (t.globalAlpha = 0.35),
        t.beginPath(),
        t.moveTo(d, a + 0.5),
        t.lineTo(r, a + 0.5),
        t.stroke(),
        (t.globalAlpha = 0.6),
        (t.textAlign = "center");
      for (const n of jt)
        t.beginPath(),
          t.moveTo(l(n), a + 0.5),
          t.lineTo(l(n), a + 3.5),
          t.stroke(),
          t.fillText(s.tick(n), Math.min(r - 4, Math.max(d + 4, l(n))), a + 10);
      const E = (n) => D(ut(n)) + gt(dt, n),
        p = (n) => D(j(n)) + gt(st, n),
        $ = (n, S, A) => {
          (t.globalAlpha = A), t.setLineDash(S ? [1.5, 2.5] : []), t.beginPath();
          for (let c = 0; c <= m; c += 0.05) {
            const k = l(c),
              b = n(c);
            c ? t.lineTo(k, b) : t.moveTo(k, b);
          }
          t.lineTo(l(m), n(m)), t.stroke(), t.setLineDash([]);
        };
      $(E, !0, 0.7), $(p, !1, 1);
      const Y = (n, S, A = 1.6) => {
        t.beginPath(), t.arc(n, S, A, 0, Math.PI * 2), t.fill();
      };
      (t.globalAlpha = 1), Y(l(0), D(1), 2), Y(l(m), E(m)), Y(l(m), p(m));
      const Tt = (n, S, A) => {
        t.globalAlpha = A;
        for (const c of n) {
          M || (c.t = (c.t + c.speed * i) % 1);
          const k = c.t * m;
          Y(l(k), S(k), 1.1);
        }
      };
      Tt(Ot, E, 0.55), Tt(Dt, p, 1), (t.textAlign = "left");
      const rt = W - 6;
      it(300, 8, [s.guest, s.known], rt),
        (t.globalAlpha = 0.7),
        t.fillText(Z(s.guest, rt), l(m) + 4, E(m) + 1),
        (t.globalAlpha = 1),
        t.fillText(Z(s.known, rt), l(m) + 4, p(m) - 1);
      const At = F >= 1;
      if ((At && U === void 0 && (U = I), At)) {
        const n = M ? 10 : I - (U ?? I),
          S = 1 - (1 - Math.min(1, n / 0.5)) ** 3,
          A = Math.min(1, Math.max(0, (n - 0.4) / 0.15)),
          c = l(h) + 4,
          k = p(h) + 7,
          b = E(h) - 7,
          B = (k + b) / 2,
          X = ((b - k) / 2) * S;
        (t.globalAlpha = 0.8),
          t.beginPath(),
          t.moveTo(c, B - X),
          t.lineTo(c, B + X),
          A > 0 && (t.moveTo(c, k), t.lineTo(c + 2 * A, k), t.moveTo(c, b), t.lineTo(c + 2 * A, b)),
          t.stroke();
        const z = Math.min(1, Math.max(0, (n - 0.1) / 0.6));
        t.globalAlpha = Math.min(1, z * 1.6);
        const q = W - 10;
        it(400, 9, [s.gap(nt)], q), t.fillText(Z(s.gap(Math.round(nt * (1 - (1 - z) ** 3))), q), c + 4, B);
      }
      if (_ !== void 0 && _ <= m && O.length === 0) {
        const n = l(_);
        (t.globalAlpha = 0.45),
          t.setLineDash([1.5, 2.5]),
          t.beginPath(),
          t.moveTo(n, o),
          t.lineTo(n, a),
          t.stroke(),
          t.setLineDash([]),
          (t.globalAlpha = 1),
          Y(n, p(_), 2),
          Y(n, E(_), 2),
          (t.font = et),
          (t.textAlign = n > r - 50 ? "right" : "left"),
          (t.textBaseline = "alphabetic"),
          (t.globalAlpha = 0.85),
          t.fillText(s.month(Math.round(_), Math.round(mt(_) * 100)), n + (n > r - 50 ? -4 : 4), o + 4),
          (t.textBaseline = "middle");
      }
      for (const n of O) {
        const S = I - n.at,
          A = Math.min(1, S / 0.22),
          c = A < 1 ? 0.6 + 0.5 * Math.sin(A * Math.PI * 0.75) : 1,
          k = Math.min(1, (Nt - S) / 0.4),
          b = l(n.m),
          B = p(n.m) - 6 - S * 7,
          X = r - 12;
        it(300, 8, [n.text], X);
        const z = Z(n.text, X),
          q = t.measureText(z).width + 10,
          J = 12,
          kt = Math.max(2, Math.min(r - q, b - 8)),
          tt = B - J - 3;
        t.save(),
          (t.globalAlpha = Math.max(0, k)),
          t.translate(b, B),
          t.scale(c, c),
          t.translate(-b, -B),
          (t.fillStyle = yt),
          t.beginPath(),
          t.roundRect(kt, tt, q, J, 6),
          t.fill(),
          t.beginPath(),
          t.moveTo(b - 2.5, tt + J - 0.5),
          t.lineTo(b, B),
          t.lineTo(b + 2.5, tt + J - 0.5),
          t.fill(),
          (t.fillStyle = w),
          (t.textAlign = "left"),
          (t.textBaseline = "middle"),
          t.fillText(z, kt + 5, tt + J / 2 + 0.5),
          t.restore();
      }
      return (t.globalAlpha = 1), !M;
    });
    u.watch((i) => {
      i.presented && (pt = !0), V.wake();
    });
    const bt = () => {
        F < 1 || ((F = 0), (U = void 0), (O.length = 0), V.wake());
      },
      vt = () => {
        const i = x.valueAsNumber;
        (_ = i), x.setAttribute("aria-valuetext", s.monthValue(i, Math.round(mt(i) * 100))), V.wake();
      },
      wt = () => {
        (_ = void 0), V.wake();
      };
    x.setAttribute("aria-valuetext", s.monthValue(h, Math.round(mt(h) * 100)));
    const H = { signal: G };
    return (
      C.addEventListener(
        "pointermove",
        (i) => {
          const M = C.getBoundingClientRect(),
            { w: y } = ft(),
            f = 10,
            T = y - W,
            L = i.clientX - M.left,
            e = i.clientY - M.top,
            d = performance.now(),
            r = P ? (e - P.y) / Math.max(0.008, (d - xt) / 1e3) : 0;
          if (((xt = d), P && lt && !u.state.reducedMotion)) {
            const o = lt,
              a = Math.max(0, Math.min(h, ((L - o.L) / (o.R - o.L)) * h));
            if (a <= o.end)
              for (const [l, D] of at) {
                const m = o.Y(D(a)) + gt(l, a);
                if ((P.y - m) * (e - m) < 0) {
                  const E = Math.sign(e - P.y) * Math.min(520, 240 + Math.abs(r) * 0.3);
                  for (let p = 1; p < v - 1; p++) {
                    const $ = ((p / (v - 1)) * h - a) / 0.9;
                    l.v[p] = l.v[p] + E * Math.exp(-$ * $);
                  }
                }
              }
          }
          (P = { x: L, y: e }), (_ = Math.max(0, Math.min(h, ((L - f) / (T - f)) * h))), V.wake();
        },
        H,
      ),
      C.addEventListener(
        "pointerleave",
        () => {
          (P = void 0), wt();
        },
        H,
      ),
      C.addEventListener("click", bt, H),
      K.addEventListener("click", bt, H),
      x.addEventListener("input", vt, H),
      x.addEventListener("focus", vt, H),
      x.addEventListener("blur", wt, H),
      () => {
        u.dispose(), Q.remove();
      }
    );
  };
export { ue as mount };
