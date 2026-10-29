import { c as Tt } from "./clamp-co6UzHBn.js";
import { l as pe } from "./easing-BhDfN7yX.js";
import {
  G as rt,
  T as fa,
  o as is,
  s as da,
  M as ge,
  W as ua,
  L as ve,
  p as lt,
  f as ha,
  l as pa,
  a as me,
  b as ma,
  c as ga,
  g as Xn,
  d as ya,
  S as Po,
  h as sn,
  r as Te,
  e as ba,
  i as xa,
  n as Io,
  j as va,
  w as wa,
  k as ka,
  m as Ma,
  P as Sa,
  q as Ro,
  t as Fo,
  u as za,
  v as Aa,
  x as qo,
  y as Ta,
  H as Oa,
  z as Ea,
  A as Ha,
  B as jo,
  C as Ca,
  D as $a,
  E as Wa,
  F as La,
  I as Pa,
  J as Wt,
  K as Ia,
  N as Ra,
  O as Fa,
  Q as Bo,
  R as qa,
  U as ja,
  V as Ba,
  X as Ka,
  Y as Ko,
  Z as Na,
  _ as Ga,
  $ as Da,
  a0 as Ua,
} from "./htmlInCanvasWebGpu.client-CCocYEXD.js";
import { g as On } from "./HtmlInCanvasEntry-Bdoyn_tT.js";
import { r as Ya } from "./reportError-C6Wenmm6.js";
import { f as No } from "./fontFamily-DUpol7iY.js";
import { c as Va } from "./colorPalette-VQpnhwit.js";
const Za = 1 / 120,
  _a = 0.4;
function Pe(e, s, l, n) {
  for (let m = 0; m < 32; m++) {
    const i = (l + n) / 2;
    e(i) < s ? (l = i) : (n = i);
  }
  return (l + n) / 2;
}
function Go({ y: e, v: s }, l) {
  const n = Math.max(1, e - l);
  return Math.max(1, (s * s) / (2 * n + s * Za));
}
function Ja(e, s, l, n, m) {
  const i = (b, T) => {
      let H = 0,
        $ = s;
      for (let v = 0; v < 22; v++) {
        const L = (H + $) / 2;
        e(L, T) < b ? (H = L) : ($ = L);
      }
      return H;
    },
    g = i(m, !0) + l;
  return { lo: Math.min(g, i(n, !1) + l), hi: g };
}
const Do = (e) =>
    Array.from({ length: 32 }, (s, l) => {
      const n = (l / 32) * fa;
      return [e * Math.sin(n), e * Math.cos(n)];
    }),
  Xa = (e) => rt.grades.find(([s]) => e >= s)?.[1] ?? "E",
  ls = (e, s, l, n) => {
    const m = n.number;
    return l
      ? n.format("sumJumps", { nodes: m(e), words: m(s), jumps: m(l) })
      : n.format("sum", { nodes: m(e), words: m(s) });
  };
function Nn({ dist: e, r: s, nodes: l, words: n, jumps: m = 0, share: i }, g, b = On()) {
  const T = b.number,
    H = ls(l, n, m, b);
  return {
    fell: !1,
    cells: [
      [b.copy.finish, g, ""],
      [b.copy.gradeLabel, Xa(i), ""],
      [b.copy.distance, T(e), b.copy.pixels],
      [b.copy.size, T(s), b.copy.pixels],
      [b.copy.points, T(l + n + m), ""],
      [b.copy.breakdown, H, ""],
    ],
  };
}
function Qa({ dist: e, r: s, nodes: l, words: n, jumps: m = 0 }, i = On()) {
  const g = i.number,
    b = ls(l, n, m, i);
  return {
    fell: !0,
    cells: [
      [i.copy.distance, g(e), i.copy.pixels],
      [i.copy.size, g(s), i.copy.pixels],
      [i.copy.points, g(l + n + m), ""],
      [i.copy.breakdown, b, ""],
    ],
  };
}
const Ze = (e) => e / Math.max(4, Math.round(e / 54)),
  Uo = [0.1, 0.1];
function tr(e, s, l, n, m, i = 0, g) {
  const b = Math.max(4, Math.round(s / 54)),
    T = s / b,
    H = 0.3,
    $ = [];
  if (n <= 0.003 || i >= 1 || e + T < -50 || e - T > l + 50) return $;
  for (let v = 0; v < b; v++) {
    const L = Tt((i - 0.4 * Math.abs((2 * v + 1) / b - 1)) / 0.6, 0, 1),
      j = 0.5 * L * L * (3 - 2 * L);
    if (!(j >= 0.5)) {
      if (g) {
        for (let z = 0; z < 2; z++) er($, g, { i: v, q: z, n: b, s: T, e: j, row: e, k: n, white: m });
        continue;
      }
      for (let z = 0; z < 4; z++) {
        const V = (v + j) * T,
          et = (v + 1 - j) * T,
          J = e - T + ((z + j) * T) / 2,
          k = J + ((1 - 2 * j) * T) / 2,
          q = (v + (z >> 1)) % 2,
          Rt = q ? m : [0, 0, 0],
          st = (q ? 0.85 : 0.92) * n,
          mt = (wt, Ot) => $.push(wt, Ot, H, ...Rt, st, 0);
        for (const [wt, Ot] of [
          [V, J],
          [et, J],
          [et, k],
          [V, J],
          [et, k],
          [V, k],
        ])
          mt(wt, Ot);
      }
    }
  }
  return $;
}
function er(e, s, { i: l, q: n, n: m, s: i, e: g, row: b, k: T, white: H }) {
  const v = (l + n) % 2,
    L = (l + g) * i,
    j = (l + 1 - g) * i,
    z = b - i + (n + g) * i,
    V = z + (1 - 2 * g) * i,
    et = T,
    J = (v ? Uo[0] : Uo[1]) * (1 - 2 * g) * i,
    k = (O) => H.map((M) => M * O),
    q = (O, M) => {
      for (const h of [0, 1, 2, 0, 2, 3]) e.push(...O[h], M[0], M[1], M[2], et, 0);
    },
    Rt = (O, M, h, F, U, gt) => {
      if (h - O < 0.05 || F - M < 0.05) return;
      const Et = F - M > i / 3 ? [M, (M + F) / 2, F] : [M, F];
      for (let X = 0; X + 1 < Et.length; X++)
        q(
          [
            [O, Et[X], U],
            [h, Et[X], U],
            [h, Et[X + 1], U],
            [O, Et[X + 1], U],
          ],
          gt,
        );
    },
    st = (L + j) / 2,
    mt = (z + V) / 2,
    [wt, Ot, Pt, $t] = [s(st, mt, 0), s(st + 1, mt, 0), s(st, mt + 1, 0), s(st, mt, -J)];
  let [Ut, te] = [0, 0];
  if (wt && Ot && Pt && $t) {
    const [O, M, h, F] = [Ot.x - wt.x, Ot.y - wt.y, Pt.x - wt.x, Pt.y - wt.y],
      U = O * F - h * M;
    if (Math.abs(U) > 1e-9) {
      const [gt, Et] = [$t.x - wt.x, $t.y - wt.y];
      (Ut = Tt((gt * F - h * Et) / U, -(j - L), j - L)), (te = Tt((O * Et - gt * M) / U, 0, V - z));
    }
  }
  if (v) {
    Rt(L, z, j, V, J, k(0.92)),
      q(
        [
          [L, V, J],
          [j, V, J],
          [j, V, 0],
          [L, V, 0],
        ],
        k(0.72),
      );
    const O = Ut > 0 ? j : L;
    Math.abs(Ut) > 0.05 &&
      q(
        [
          [O, z, J],
          [O, V, J],
          [O, V, 0],
          [O, z, 0],
        ],
        k(0.58),
      );
    return;
  }
  const xt = (O) => (O ? k(0.42) : [0.2, 0.2, 0.21]),
    [kt, W] = Ut > 0 ? [L + Ut, j] : [L, j + Ut];
  Rt(kt, z, W, z + te, 0.3, xt(n > 0)),
    Ut > 0 ? Rt(L, z, kt, V, 0.3, xt(l > 0)) : Rt(W, z, j, V, 0.3, xt(l < m - 1)),
    Rt(kt, z + te, W, V, 0.3, [0, 0, 0]);
}
const nr = (e, s, l) =>
    ["PageUp", "PageDown", "Home", "End", " ", "ArrowUp", "ArrowDown"].includes(e.key) &&
    !e.repeat &&
    !(s && e.key === " ") &&
    l > _a,
  or = (e, s) => !(e - s < 250),
  ae = 6,
  Oe = 40,
  Qn = 1.2,
  cs = 2.6,
  sr = 0.55;
function ar() {
  return {
    state: new Uint8Array(ae),
    t: new Float32Array(ae),
    rise: new Float32Array(ae),
    from: new Float32Array(ae * 3),
    to: new Float32Array(ae * 3),
    spread: new Float32Array(ae),
    ink: new Uint8Array(ae),
    n: new Uint8Array(ae),
    p: new Float32Array(ae * Oe * 3),
    v: new Float32Array(ae * Oe * 3),
    life: new Float32Array(ae * Oe),
    up: new Int8Array(ae * Oe),
    cursor: 0,
  };
}
function rr(e, s, l, n) {
  const m = e.cursor;
  (e.cursor = (m + 1) % ae),
    (e.state[m] = n.delay > 0 ? 1 : 2),
    (e.t[m] = n.delay > 0 ? n.delay : 0),
    (e.rise[m] = n.rise),
    (e.spread[m] = n.spread),
    (e.ink[m] = n.ink),
    (e.n[m] = 0);
  for (let i = 0; i < 3; i++) (e.from[3 * m + i] = s[i]), (e.to[3 * m + i] = l[i]);
  return m;
}
function ir(e, s, l) {
  const n = Math.min(1, e.t[s] / e.rise[s]),
    m = 1 - (1 - n) * (1 - n);
  for (let i = 0; i < 3; i++) l[i] = e.from[3 * s + i] + (e.to[3 * s + i] - e.from[3 * s + i]) * m;
  return l;
}
function lr(e, s, l = Math.random) {
  const n = e.spread[s] * cs,
    m = s * Oe,
    i = (T, H, $, v, L) => {
      const j = 3 * (m + T);
      (e.p[j] = e.to[3 * s]),
        (e.p[j + 1] = e.to[3 * s + 1]),
        (e.p[j + 2] = e.to[3 * s + 2]),
        (e.v[j] = $),
        (e.v[j + 1] = v),
        (e.v[j + 2] = L),
        (e.up[m + T] = H),
        (e.life[m + T] = T ? Qn * (0.75 + 0.25 * l()) : Qn);
    };
  i(0, -1, 0, 0, 0.12 * n);
  let g = 1;
  const b = 8 + Math.floor(l() * 7);
  for (let T = 0; T < b && g < Oe; T++) {
    const H = ((T + 0.3 * l()) / b) * 2 * Math.PI,
      $ = 2 * l() - 1,
      v = Math.sqrt(1 - $ * $),
      L = n * (0.7 + 0.4 * l()),
      [j, z, V] = [L * v * Math.cos(H), L * v * Math.sin(H), L * $],
      et = g;
    if ((i(g++, 0, j, z, V), !(l() > 0.4)))
      for (let J = l() < 0.5 ? 1 : 2; J > 0 && g < Oe; J--)
        i(
          g++,
          et,
          j * 1.15 + 0.3 * n * (l() - 0.5),
          z * 1.15 + 0.3 * n * (l() - 0.5),
          V * 1.15 + 0.3 * n * (l() - 0.5),
        );
  }
  e.n[s] = g;
}
function cr(e, s, l = Math.random) {
  const n = Math.min(Math.max(s, 0), 0.03333333333333333),
    m = Math.exp(-cs * n);
  let i = !1;
  for (let g = 0; g < ae; g++) {
    const b = e.state[g];
    if (b)
      if (((i = !0), b === 1)) (e.t[g] -= n), e.t[g] <= 0 && ((e.state[g] = 2), (e.t[g] = 0));
      else if (b === 2) (e.t[g] += n), e.t[g] >= e.rise[g] && ((e.state[g] = 3), (e.t[g] = 0), lr(e, g, l));
      else {
        if (((e.t[g] += n), e.t[g] >= Qn)) {
          e.state[g] = e.n[g] = 0;
          continue;
        }
        const T = sr * e.spread[g] * n;
        for (let H = 0, $ = 3 * g * Oe; H < e.n[g]; H++, $ += 3)
          (e.v[$] *= m),
            (e.v[$ + 1] *= m),
            (e.v[$ + 2] = e.v[$ + 2] * m - T),
            (e.p[$] += e.v[$] * n),
            (e.p[$ + 1] += e.v[$ + 1] * n),
            (e.p[$ + 2] += e.v[$ + 2] * n);
      }
  }
  return i;
}
function wn(e) {
  e.state.fill(0), e.n.fill(0), (e.cursor = 0);
}
const fr = 9,
  dr = 1 / 120,
  ur = () => ({ o: new Float32Array(0), v: new Float32Array(0), on: !1 });
function Gn(e, s) {
  if (e.o.length >= 3 * s) return;
  const l = new Float32Array(3 * Math.max(s, 2 * (e.o.length / 3))),
    n = new Float32Array(l.length);
  l.set(e.o), n.set(e.v), Object.assign(e, { o: l, v: n });
}
function fs(e) {
  e.o.fill(0), e.v.fill(0), (e.on = !1);
}
function hr(e, s, l, n, m) {
  const i = l * (1 - 0.7 ** (60 * m));
  for (let g = 0; g < 3; g++) e.v[3 * s + g] += (n[g] - e.v[3 * s + g]) * i;
  e.on = !0;
}
function pr(e, s, l) {
  for (let n = 0; n < 3; n++) e.v[3 * s + n] += l[n];
  e.on = !0;
}
function mr(e, s, l) {
  for (let n = 0; n < 3; n++) e.o[3 * s + n] += l[n];
  e.on = !0;
}
const Dn = (e, s) =>
    3 * s + 2 < e.o.length && s > 0 ? [e.o[3 * s], e.o[3 * s + 1], e.o[3 * s + 2]] : [0, 0, 0],
  gr = (e, s, l, n) => {
    const m = n * n - n;
    return [
      e[0] + (s[0] - e[0]) * n + l[0] * m,
      e[1] + (s[1] - e[1]) * n + l[1] * m,
      e[2] + (s[2] - e[2]) * n + l[2] * m,
    ];
  };
function yr(e, s, l) {
  if (!e.on) return !1;
  const { o: n, v: m } = e,
    i = Math.max(1, Math.ceil(s / dr - 1e-9)),
    g = s / i;
  let b = 0;
  for (let T = 0; T < i; T++)
    for (let H = 3; H < n.length; H += 3) {
      let $ = 0;
      for (let v = 0; v < 3; v++)
        (m[H + v] += (-180 * n[H + v] - fr * m[H + v]) * g), (n[H + v] += m[H + v] * g), ($ += n[H + v] ** 2);
      if ((($ = Math.sqrt($)), $ > l)) for (let v = 0; v < 3; v++) (n[H + v] *= l / $), (m[H + v] *= 0.5);
      T === i - 1 && (b = Math.max(b, $, Math.hypot(m[H], m[H + 1], m[H + 2]) / 20));
    }
  return b < 0.05 && fs(e), e.on;
}
const Yo = {
    music: new URL(
      "https://cdn.shopify.com/oxygen-v2/58886/167724/342939/4898937/assets/music-C6mESqbD.opus",
      import.meta.url,
    ),
    standby: new URL(
      "https://cdn.shopify.com/oxygen-v2/58886/167724/342939/4898937/assets/standby-CfKogsYQ.opus",
      import.meta.url,
    ),
    pick: new URL(
      "https://cdn.shopify.com/oxygen-v2/58886/167724/342939/4898937/assets/pick-CiplPmEc.opus",
      import.meta.url,
    ),
    hop: new URL(
      "https://cdn.shopify.com/oxygen-v2/58886/167724/342939/4898937/assets/hop-BvXoeo5E.opus",
      import.meta.url,
    ),
    land: new URL(
      "https://cdn.shopify.com/oxygen-v2/58886/167724/342939/4898937/assets/land-C7x3Zrqd.opus",
      import.meta.url,
    ),
    ramp: new URL(
      "https://cdn.shopify.com/oxygen-v2/58886/167724/342939/4898937/assets/ramp-wIjvJH6e.opus",
      import.meta.url,
    ),
    hole: new URL(
      "https://cdn.shopify.com/oxygen-v2/58886/167724/342939/4898937/assets/hole-DJXexovJ.opus",
      import.meta.url,
    ),
  },
  ct = {
    loop: [6.8669, 65.5],
    standby: [1, 14.82],
    gain: {
      music: 1,
      standby: 0.9,
      tick: 0.2,
      hop: 4,
      land: 2,
      ramp: 1.5,
      hole: 1,
      finish: 1.5,
      burst: 0.3,
      bump: 0.3,
    },
    ticks: {
      step: 0.25,
      pause: 2,
      ahead: 0.03,
      len: 0.07,
      voices: [
        { from: 170, to: 45, fall: 0.012, decay: 0.03, knock: 1.4, level: 1 },
        { from: 200, to: 90, fall: 0.01, decay: 0.02, knock: 4, level: 0.4 },
        { from: 320, to: 130, fall: 0.015, decay: 0.03, knock: 1.7, level: 0.8 },
      ],
      knock: { hz: 784, decay: 0.012, partials: [0.6, 1, 1.47, 2], amps: [0.45, 1, 0.5, 0.3] },
    },
    ramp: { wait: 0.8, lead: 0.35 },
    thud: 0.15,
    landGap: 0.5,
    out: { drop: 0.05, rest: 0.33, ring: 0.5, finish: 1.6, close: 0.13 },
    in: 2,
  },
  eo = (e) => e.phase === "idle" || !((e.volume ?? 0) > 0),
  br = (e, s) => s.phase === "idle" || (e.phase === "play" && s.phase !== "play"),
  xr = (e, s, l) => !eo(s) && s.phase === "play" && (e.phase !== "play" || !l),
  ze = (e, s, l) => (s[l] ?? 0) > (e[l] ?? 0);
function vr(e, s, l = []) {
  if (((l.length = 0), eo(s))) return l;
  const n = s.phase === "play";
  return (
    n && ze(e, s, "boosts") && l.push("ramp"),
    n && ze(e, s, "jumps") && l.push("jump"),
    ze(e, s, "falls") && l.push("hole"),
    n && ze(e, s, "hops") && l.push("hop"),
    (n || s.phase === "finish") && ze(e, s, "lands") && (s.thud ?? 0) > ct.thud && !s.air && l.push("land"),
    n && (ze(e, s, "nodes") || ze(e, s, "words")) && l.push("pick"),
    s.phase === "finish" && e.phase === "play" && l.push("finish"),
    ze(e, s, "bursts") && l.push("burst"),
    ze(e, s, "bumps") && l.push("bump"),
    l
  );
}
const ds = (ct.loop[1] - ct.loop[0]) / 128;
function wr(e, s, l) {
  const n = ct.ticks.step * ds,
    m = s + ct.loop[0],
    i = Math.max(e, l + n / 2);
  return m + Math.ceil((i - m) / n - 1e-6) * n;
}
function kr(e) {
  const { len: s, voices: l, knock: n } = ct.ticks,
    m = Math.round(s * e);
  return l.map(({ from: i, to: g, fall: b, decay: T, knock: H, level: $ }) => {
    const v = new Float32Array(m);
    let L = 0,
      j = 0;
    for (let z = 0; z < m; z++) {
      const V = z / e;
      L += (2 * Math.PI * (g + (i - g) * Math.exp(-V / b))) / e;
      let et = 0;
      for (let k = 0; k < n.partials.length; k++)
        et += n.amps[k] * Math.sin(2 * Math.PI * n.hz * n.partials[k] * V);
      const J = Math.min(1, (m - 1 - z) / (0.005 * e));
      (v[z] =
        (Math.sin(L) * Math.exp(-V / T) + H * et * Math.exp(-V / n.decay)) * (1 - Math.exp(-V / 8e-4)) * J),
        (j = Math.max(j, Math.abs(v[z])));
    }
    for (let z = 0; z < m; z++) v[z] = (v[z] / j) * $;
    return v;
  });
}
function Mr() {
  let e = null,
    s = {},
    l = null,
    n = null,
    m = { phase: "idle" },
    i = { phase: "idle" },
    g,
    b = null,
    T = null,
    H = null,
    $ = 0,
    v = -1e9,
    L = !0,
    j = -1e9;
  const z = { last: -1e9, n: 0, pending: !1 };
  let V = 0;
  const et = [],
    J = [],
    k = () => e?.suspend().catch(() => {}),
    q = () => e?.resume().catch(() => {});
  function Rt(M) {
    const h = M.createGain(),
      F = M.createDynamicsCompressor(),
      U = M.createWaveShaper();
    (h.gain.value = 0),
      (F.threshold.value = -6),
      (F.knee.value = 4),
      (F.ratio.value = 12),
      (F.attack.value = 0.003),
      (F.release.value = 0.15),
      (U.curve = Float32Array.from(
        { length: 2048 },
        (X, a) => Math.tanh((a / 1023.5 - 1) * 1.5) / Math.tanh(1.5),
      )),
      h.connect(F),
      F.connect(U),
      U.connect(M.destination);
    const gt = (X) => {
        const a = M.createGain();
        return (a.gain.value = X), a.connect(h), a;
      },
      Et = kr(M.sampleRate).map((X) => {
        const a = M.createBuffer(1, X.length, M.sampleRate);
        return a.copyToChannel(X, 0), a;
      });
    return {
      vol: h,
      clip: U,
      tick: gt(ct.gain.tick),
      ticks: Et,
      hop: gt(ct.gain.hop),
      land: gt(ct.gain.land),
      ramp: gt(ct.gain.ramp),
      hole: gt(ct.gain.hole),
      finish: gt(ct.gain.finish),
      burst: gt(ct.gain.burst),
      bump: gt(ct.gain.bump),
    };
  }
  function st(M, h, F, U = 0, gt = 1) {
    const Et = typeof M == "string" ? s[M] : M;
    if (!e || !Et) return null;
    const X = e.createBufferSource();
    return (
      (X.buffer = Et),
      (X.playbackRate.value = gt),
      X.connect(h),
      (X.onended = () => X.disconnect()),
      X.start(F, U),
      X
    );
  }
  function mt(M, h, F) {
    const U = s[M];
    if (!e || !n || !U) return null;
    const gt = e.createGain(),
      Et = e.createBufferSource(),
      [X, a] = M === "music" ? ct.loop : ct.standby;
    return (
      (Et.buffer = U),
      (Et.loop = !0),
      (Et.loopStart = X),
      (Et.loopEnd = Math.min(a, U.duration)),
      (gt.gain.value = 0),
      gt.gain.setValueAtTime(0, h),
      M === "music"
        ? (gt.gain.linearRampToValueAtTime(F, h + ct.in), (V = h))
        : gt.gain.setTargetAtTime(F, h, 0.1),
      Et.connect(gt),
      gt.connect(n.vol),
      Et.start(h),
      J.push([M, h]),
      { src: Et, gain: gt }
    );
  }
  function wt(M, h, F) {
    if (!M) return;
    const U = M.gain.gain;
    U.cancelAndHoldAtTime
      ? U.cancelAndHoldAtTime(h)
      : (U.cancelScheduledValues(h), U.setValueAtTime(U.value, h)),
      U.setTargetAtTime(0, h, F),
      M.src.stop(h + F * 8),
      (M.src.onended = () => {
        M.src.disconnect(), M.gain.disconnect();
      });
  }
  function Ot(M) {
    wt(T, M, ct.out.drop),
      (T = null),
      wt(b, M, ct.out.drop),
      (b = mt("music", M, ct.gain.music)),
      (H = b ? null : "music");
  }
  function Pt(M) {
    (H = "standby"), ($ = M);
  }
  function $t(M, h, F) {
    if (n) {
      if (M === "land") {
        if (h - j < ct.landGap) return;
        j = h;
      }
      switch ((J.push([M, h]), J.length > 200 && J.splice(0, 100), M)) {
        case "ramp":
          n.ramp.gain.cancelScheduledValues(h),
            n.ramp.gain.setValueAtTime(ct.gain.ramp, h),
            st("ramp", n.ramp, h),
            (v = h),
            (L = !1);
          break;
        case "jump":
          (h - v > ct.ramp.wait || L) &&
            (n.ramp.gain.cancelScheduledValues(h),
            n.ramp.gain.setValueAtTime(ct.gain.ramp, h),
            st("ramp", n.ramp, h, ct.ramp.lead),
            (v = h - ct.ramp.lead)),
            (L = !0);
          break;
        case "hole":
          st("hole", n.hole, h),
            wt(b, h, ct.out.drop),
            (b = null),
            H === "music" && (H = null),
            Pt(h + ct.out.rest);
          break;
        case "hop":
          st("hop", n.hop, h);
          break;
        case "land":
          n.land.gain.setValueAtTime(ct.gain.land * Math.min(1, 0.35 + 0.65 * (F.thud ?? 0)), h),
            st("land", n.land, h);
          break;
        case "pick":
          (z.n = h - z.last > (ct.ticks.pause + 0.5) * ct.ticks.step * ds ? 0 : z.n + 1),
            (z.last = h),
            st(n.ticks[z.n % n.ticks.length], n.tick, h);
          break;
        case "finish":
          wt(b, h, ct.out.ring), (b = null), H === "music" && (H = null);
          for (let U = 0; U < 3; U++) st("pick", n.finish, h + 0.12 * U, 0, [1, 1.5, 2][U]);
          Pt(h + ct.out.finish);
          break;
        case "burst":
          st("land", n.burst, h, 0, 0.6);
          break;
        case "bump":
          st("land", n.bump, h, 0, 1.5);
          break;
      }
    }
  }
  function Ut() {
    if (l || typeof OfflineAudioContext > "u") return;
    const M = new OfflineAudioContext(2, 1, 48e3);
    l = Promise.all(
      Object.keys(Yo).map(async (h) => {
        const F = await fetch(Yo[h]);
        if (!F.ok) throw new Error(`${h}: ${F.status}`);
        (s[h] = await M.decodeAudioData(await F.arrayBuffer())),
          h === "music" && H === "music" && e && m.phase === "play" && Ot(e.currentTime);
      }),
    )
      .then(() => {})
      .catch((h) => {
        (l = null), navigator.onLine && Ya(h, "HtmlInCanvas.music");
      });
  }
  const te = () => {
    document.hidden && k();
  };
  document.addEventListener("visibilitychange", te);
  let xt = !1,
    kt = !1;
  const W = () => {
    if (!e) return;
    const M = e.currentTime;
    wt(b, M, 0.01), wt(T, M, 0.01), (b = T = null), (H = null);
  };
  function O(M) {
    const h = i;
    if (((m = i = M), !e || !n)) return;
    const F = e.currentTime;
    if (eo(M)) {
      const U = br(h, M);
      xt
        ? ((xt = !1),
          n.vol.gain.cancelScheduledValues(F),
          n.vol.gain.setTargetAtTime(0, F, ct.out.close),
          clearTimeout(g),
          (kt = U),
          (g = setTimeout(() => {
            (g = void 0), kt && W(), (kt = !1), k();
          }, 600)))
        : U && g !== void 0
          ? (kt = !0)
          : U && (b || T || H) && W();
      return;
    }
    xt ||
      ((xt = !0),
      clearTimeout(g),
      (g = void 0),
      kt && W(),
      (kt = !1),
      n.vol.gain.cancelScheduledValues(F),
      n.vol.gain.setTargetAtTime(M.volume, F, 0.05)),
      e.state === "suspended" && q(),
      xr(h, M, !!b || H === "music") && Ot(F),
      M.phase !== "play" && !T && H !== "standby" && Pt(F);
    for (const U of vr(h, M, et)) U !== "pick" && $t(U, F, M);
    if ((et.includes("pick") && (z.pending = !0), M.phase !== "play" && (z.pending = !1), z.pending && b)) {
      const U = wr(F, V, z.last);
      U - F < ct.ticks.ahead && ((z.pending = !1), $t("pick", U, M));
    }
    !L && F - v > ct.ramp.wait && ((L = !0), n.ramp.gain.setTargetAtTime(0, F, 0.08)),
      H === "standby" &&
        F >= $ &&
        s.standby &&
        ((H = null), wt(T, F, ct.out.drop), (T = mt("standby", F, ct.gain.standby)));
  }
  return {
    get debug() {
      return {
        context: e?.state ?? null,
        loaded: Object.keys(s),
        durations: Object.fromEntries(Object.entries(s).map(([M, h]) => [M, h.duration])),
        music: !!b,
        standby: !!T,
        state: m,
        gain: n?.vol.gain.value ?? 0,
        time: e?.currentTime ?? 0,
        cues: J.slice(),
        tap: () => (e && n ? { ctx: e, out: n.clip, cues: n } : null),
      };
    },
    load: Ut,
    wake() {
      if ((Ut(), e)) {
        e.state === "suspended" && q();
        return;
      }
      try {
        e = new AudioContext({ latencyHint: "interactive" });
      } catch {
        return;
      }
      n = Rt(e);
    },
    update: O,
    stop: () => O({ phase: "idle" }),
    destroy() {
      document.removeEventListener("visibilitychange", te),
        clearTimeout(g),
        (g = void 0),
        e?.close().catch(() => {}),
        (e = n = b = T = null),
        (xt = !1),
        (s = {}),
        (l = null);
    },
  };
}
const Sr = (e) => e < 700,
  us = [180, 52],
  Tn = (e) => (Sr(e) ? [150, 48] : us);
function zr(e, s, l, n, m = 1 / 0) {
  const [i, g] = Tn(m);
  let b = -1 / 0;
  for (let L = 0; L <= 24; L++) {
    const j = (L / 24) * Math.PI,
      z = e(s + l * Math.sin(j), n + l * Math.cos(j));
    z != null && (b = Math.max(b, z));
  }
  const H = ((L, j) => {
      let z = j,
        V = j + 4e3;
      for (let et = 0; et < 26; et++) {
        const J = (z + V) / 2;
        (e(J) ?? 1 / 0) < L ? (z = J) : (V = J);
      }
      return V;
    })(b + 10, s),
    $ = 1.45,
    v = H + 1.5 * $ * g;
  return { br: s, far: H, near: v, fw: $ * i, wr: v + 1.7 * $ * 16, low: b };
}
function Un(e, s, l) {
  const n = hs(e, s, l);
  return n.every(Number.isFinite) ? `matrix3d(${n.join(",")})` : "";
}
function Ar(e, s, l) {
  const [n, m, , i, g, b, , T, , , , , H, $] = hs(e, s, l),
    v = [b - $ * T, H * T - g, g * $ - H * b],
    L = [$ * i - m, n - H * i, H * m - n * $],
    j = [m * T - b * i, g * i - n * T, n * b - g * m];
  return ({ x: z, y: V }) => {
    const et = j[0] * z + j[1] * V + j[2];
    if (!(et > 1e-9 || et < -1e-9)) return null;
    const J = { x: (v[0] * z + v[1] * V + v[2]) / et, y: (L[0] * z + L[1] * V + L[2]) / et };
    return Number.isFinite(J.x) && Number.isFinite(J.y) ? J : null;
  };
}
function hs([e, s, l, n], m, i) {
  const g = s.x - l.x,
    b = n.x - l.x,
    T = e.x - s.x + l.x - n.x,
    H = s.y - l.y,
    $ = n.y - l.y,
    v = e.y - s.y + l.y - n.y,
    L = g * $ - b * H,
    j = (T * $ - b * v) / L,
    z = (g * v - T * H) / L;
  return [
    (s.x - e.x + j * s.x) / m,
    (s.y - e.y + j * s.y) / m,
    0,
    j / m,
    (n.x - e.x + z * n.x) / i,
    (n.y - e.y + z * n.y) / i,
    0,
    z / i,
    0,
    0,
    1,
    0,
    e.x,
    e.y,
    0,
    1,
  ];
}
function Tr(e, s, l, n) {
  const m = l > 0.15 * s.r;
  for (const i of e) {
    if (m && !i.deep) continue;
    const { hx: g, hy: b } = is(i, n);
    if (Math.abs(s.x - i.x) < g && Math.abs(s.y - i.y) < b) return i;
  }
  return null;
}
const Or = (e) => ({ h: e, fell: 0, still: 0, done: 0, card: !1, dist: 0 }),
  Vo = (e) => (Math.max(0, rt.worm) + ua.tube) * e;
function Er(e, s, l, n, m, i) {
  const { h: g } = e,
    { R: b, hx: T, hy: H, lx: $, ly: v } = is(g, m);
  if (e.card && s.z < -Vo(b)) return null;
  da(
    s,
    { x: g.x, y: g.y, R: b, D: Math.max(0, rt.worm) * b, rt: Tt(rt.throat, 0.05, 1.3) * b, lx: $, ly: v },
    l,
  );
  let L = null;
  if (!e.fell) {
    if (((s.t += l), s.z < 0)) (e.fell = n), (e.dist = i - s.y), (L = "fell");
    else if (Math.abs(s.x - g.x) >= T || Math.abs(s.y - g.y) >= H) return "out";
  }
  return (
    e.fell &&
      !e.done &&
      (Math.hypot(s.vx, s.vy, s.vz) > 20 ? (e.still = 0) : (e.still ||= n),
      (s.z < -Vo(b) || (e.still && n - e.still > 0.3) || n - e.fell > 2) && (e.done = n)),
    e.done && !e.card && n - e.done >= ge.over / 1e3 ? ((e.card = !0), (e.cardAt = n), "card") : L
  );
}
const Zo = (e) => `rgb(${e.map((s) => Math.round(s * 255)).join(" ")})`,
  [Hr, Cr] = us,
  on = "(max-height: 520px) and (min-width: 600px)",
  _o = "M3.5 3.5l9 9M12.5 3.5l-9 9",
  to = 763,
  $r = 600,
  Wr = `
.game-ui {
  position: fixed;
  inset: 0;
  z-index: 1001;
  pointer-events: none;
  --game-bg: ${Zo(ve.background)};
  --game-fg: #fff;
  --game-slab: ${Zo(rt.slab)};
  --game-mono: ${No.mono.join(", ")};
  color: var(--game-fg);
  font-family: ${No.sans.join(", ")};
  font-weight: 500;
}
.game-ui {
  --game-line: rgb(255 255 255 / 0.35);
  --game-dim: rgb(255 255 255 / 0.55);
  letter-spacing: 0.01em;
}
/* A picked word's gone from the page (the ball's chip carries it): a transparent highlight takes its glyphs out of the strip upload. */
::highlight(game-picked) { color: transparent; background-color: transparent; text-decoration-color: transparent; }
.game-ui[hidden], .game-ui [hidden] { display: none !important; }
.game-ui button { pointer-events: auto; }
/* A run closing: all but the board fade (it falls into the floor: index.ts end). */
.game-ui > :not(.game-card) { opacity: var(--game-fade, 1); }
/* Past the line: over the ball (placed each frame), to pick it up and drop it. */
.game-grab {
  position: absolute;
  left: 0;
  top: 0;
  border-radius: 50%;
  pointer-events: auto;
  touch-action: none;
  cursor: grab;
}
.game-grab.is-held { cursor: grabbing; }
/* The finish board across the page past the band or the hole (index.ts placeBoard), its face upright toward the viewer,
   filled: the cells in a row (each a name over its figure, ruled between; the sum the last, smaller), Again and Close at
   its end (each its icon before its label), Again filled. Sized in --game-q, a hundredth of the width its type's for
   (set: the board's wider, its cells spread; the bar's is its width); on a narrow one the cells go two to a row over
   the keys, but on a short screen it stays a row, smaller (the sum wraps if it must). */
.game-card, .game-bar {
  position: absolute;
  left: 0;
  top: 0;
  transform-origin: 0 0;
  box-sizing: border-box;
  border: 1px solid var(--game-fg);
  background: var(--game-slab);
  container-type: inline-size;
  pointer-events: auto;
  --game-q: 1cqi;
  /* Two sizes of type: the figures, and the rest (the names, units, the sum and the keys' labels). */
  --game-big: clamp(20px, calc(2.75 * var(--game-q)), 42px);
  --game-small: clamp(12px, calc(1.45 * var(--game-q)), 22px);
}
.game-u { color: var(--game-dim); }
.game-card-body { display: flex; }
.game-card-row { display: flex; flex: 1; min-width: 0; margin: 0; }
.game-card-row > div { display: flex; flex-direction: column; justify-content: space-between; gap: calc(0.8 * var(--game-q)); padding: var(--game-q) calc(1.2 * var(--game-q)) calc(1.3 * var(--game-q)); border-left: 1px solid var(--game-line); }
.game-card-row > div:first-child { border-left: 0; }
.game-card-row > div:last-child { flex: 1; min-width: 0; }
.game-card-row dt { font-size: var(--game-small); line-height: 1.2; color: var(--game-dim); white-space: nowrap; }
.game-card-row dd { margin: 0; font-family: var(--game-mono); font-size: var(--game-big); font-weight: 300; line-height: 1; white-space: nowrap; font-variant-numeric: tabular-nums; }
.game-card-row > div:last-child dd { font-size: var(--game-small); line-height: 1.2; white-space: normal; }
.game-card-row .game-u { font-size: var(--game-small); }
/* The grade: its letter on a white stamp, heavier. */
.game-card-row > .is-grade dd { align-self: flex-start; padding: 0.06em 0.3em; border-radius: 0.12em; background: var(--game-fg); color: var(--game-slab); font-weight: 600; }
.game-card-keys { display: flex; gap: calc(0.8 * var(--game-q)); padding: calc(0.8 * var(--game-q)); border-left: 1px solid var(--game-line); }
.game-card-keys button {
  flex: none;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.5em;
  min-width: max(calc(12 * var(--game-q)), 8.5em);
  min-height: 44px;
  padding: 0 calc(2 * var(--game-q));
  border: 1px solid var(--game-fg);
  color: var(--game-fg);
  font: inherit;
  font-size: var(--game-small);
  cursor: pointer;
  touch-action: manipulation;
  --game-fill: var(--game-fg);
  background: linear-gradient(var(--game-fill) 0 0) 0 100% / 100% 0 no-repeat transparent;
  transition: background-size 0.25s cubic-bezier(0.2, 0.7, 0.2, 1), border-color 0.15s, color 0.2s, scale 0.1s;
}
.game-card-keys svg { flex: none; width: 1em; height: 1em; }
.game-card-keys [data-act=again] { --game-fill: var(--game-slab); background-color: var(--game-fg); color: var(--game-bg); }
/* Focused (Again is, as the board shows) it's ringed; hovered it fills from its foot up (Close white, Again the board's
   black), so a hover shows on a focused one too. */
.game-card-keys button:focus-visible { outline: 2px solid var(--game-fg); outline-offset: 2px; }
@media (hover: hover) {
  .game-card-keys button:hover { background-size: 100% 100%; color: var(--game-bg); }
  .game-card-keys [data-act=again]:hover { color: var(--game-fg); }
}
.game-card-keys button:active { scale: 0.96; }
@media not all and ${on} { @container (max-width: ${to - 3}px) {
  .game-card-body { flex-direction: column; }
  .game-card-row { display: grid; grid-template-columns: 1fr 1fr; }
  .game-card-row > div { gap: 8px; padding: 10px 14px 12px; border-left: 0; }
  .game-card-row > div:nth-child(even) { border-left: 1px solid var(--game-line); }
  .game-card-row > div:nth-child(n + 3) { border-top: 1px solid var(--game-line); }
  .game-card-body { --game-big: 22px; --game-small: 13px; }
  .game-card-keys { gap: 8px; padding: 10px; border-left: 0; border-top: 1px solid var(--game-line); }
  .game-card-keys button { flex: 1; padding: 0 14px; }
} }
@media ${on} {
  .game-card, .game-bar { --game-big: 16px; --game-small: 11px; }
  .game-card-row > div { gap: 4px; padding: 6px 8px 8px; }
  .game-card-keys { gap: 6px; padding: 6px; }
  .game-card-keys button { min-width: 104px; padding: 0 12px; }
}
/* The pad's bar (index.ts placeBar): the board's look, standing on the floor with Start, its cells the keys and what
   they do, the least speed and how far the line is, spread across it, each figure at the sum's size; no buttons. Split
   (is-split), it's two boards of three cells either side of the slot Start stands in (--game-slot), their type a little
   smaller to fit (in --game-q, as the board's: set wider than its type's for, its cells spread); whole, the two halves'
   cells run on as one board's. */
.game-bar { pointer-events: none; }
.game-bar-body { display: flex; }
.game-bar .game-card-row > div { flex: 1 0 auto; }
.game-bar .game-card-row > div dd { font-size: clamp(14px, 1.8cqi, 27px); line-height: 1.2; white-space: nowrap; }
.game-bar:not(.is-split) .game-card-row { display: contents; }
.game-bar:not(.is-split) .game-card-row + .game-card-row > div:first-child { border-left: 1px solid var(--game-line); }
.game-bar.is-split { border: 0; background: none; }
.game-bar.is-split .game-bar-body { gap: var(--game-slot); }
.game-bar.is-split .game-card-row { flex: 1 1 0; border: 1px solid var(--game-fg); background: var(--game-slab); }
.game-bar.is-split .game-card-row > div { gap: calc(0.65 * var(--game-q)); padding: calc(0.8 * var(--game-q)) var(--game-q) calc(1.05 * var(--game-q)); }
.game-bar.is-split .game-card-row dt { font-size: clamp(11px, calc(1.15 * var(--game-q)), 18px); }
.game-bar.is-split .game-card-row > div dd { font-size: clamp(12px, calc(1.45 * var(--game-q)), 22px); }
@media not all and ${on} { @container (max-width: ${to - 3}px) {
  .game-bar-body { display: grid; grid-template-columns: 1fr 1fr; }
  .game-bar .game-card-row + .game-card-row > div { border-top: 1px solid var(--game-line); border-left: 0; }
  .game-bar .game-card-row + .game-card-row > div:nth-child(odd) { border-left: 1px solid var(--game-line); }
} }
@media ${on} { .game-bar .game-card-row > div dd { font-size: 11px; } }
/* On the floor under the ball: laid flat by a matrix3d, in perspective, and still a button. */
.game-start {
  position: absolute;
  left: 0;
  top: 0;
  box-sizing: border-box;
  width: ${Hr}px;
  height: ${Cr}px;
  padding: 0;
  border: 0;
  background: none;
  color: var(--game-bg);
  font: inherit;
  font-size: 15px;
  line-height: 1;
  transform-origin: 0 0;
  cursor: pointer;
  pointer-events: auto;
  touch-action: manipulation;
}
/* What's seen of it: its stand's face, or as the stand turns over (index.ts startStand), laid on whichever side of it
   faces the camera, Start on both. The button stays put, so a still pointer stays on it. */
.game-start-face {
  position: absolute;
  inset: 0;
  transform-origin: 0 0;
  pointer-events: none;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.8em;
  box-sizing: border-box;
  border: 1px solid var(--game-fg);
  background: var(--game-fg);
}
.game-start kbd {
  font-family: var(--game-mono);
  font-weight: 300;
  color: color-mix(in srgb, var(--game-bg) 55%, transparent);
  clip-path: inset(-0.15em -0.5em);
}
/* Its arrow, hovered: up out of its slot and back up from under it, as its stand turns over (index.ts FLIP): out as
   Start tips away, in as its back comes round. Not under reduced motion. */
.game-start kbd span { display: inline-block; }
@media (hover: hover) and (prefers-reduced-motion: no-preference) {
  .game-start:hover kbd span { animation: game-start-arrow 0.7s; }
}
@keyframes game-start-arrow {
  0% { translate: 0 0; animation-timing-function: cubic-bezier(0.5, 0, 0.75, 0); }
  30% { translate: 0 -1.3em; animation-timing-function: step-end; }
  31% { translate: 0 1.3em; animation-timing-function: cubic-bezier(0.2, 0.9, 0.3, 1); }
  85%, 100% { translate: 0 0; }
}
/* The face of a stand (index.ts startStand: it rises hovered or focused, goes down pressed): white, light grey hovered,
   greyer pressed. */
.game-start-face { transition: background-color 0.15s; }
@media (hover: hover) {
  .game-start:hover .game-start-face { background: color-mix(in srgb, var(--game-fg) 80%, var(--game-bg)); }
}
.game-start:active .game-start-face { background: color-mix(in srgb, var(--game-fg) 64%, var(--game-bg)); }
/* F26's focus ring (2px, 2px out), white: the button's text is black, so currentColor would vanish on the floor. */
.game-start:focus-visible { outline: 2px solid var(--game-fg); outline-offset: 2px; }
/* Its hit area reaches down past its foot as it rises hovered (and up past its top as it goes down pressed), so a
   pointer at its edge stays on it as it moves: no hover flicker. */
.game-start::after { content: ''; position: absolute; inset: 0; }
.game-start:hover::after { bottom: -16px; }
.game-start:active::after { top: -16px; }
/* The run's clock, close and mute (beside the close), as game.css's and the journey's close (44 px for a finger): the
   buttons as far off the page's top as its right, the clock level with them. */
.game-time {
  position: absolute;
  top: 28px;
  left: 20px;
  margin: 0;
  font-family: var(--game-mono);
  font-size: 14px;
  font-weight: 300;
  font-variant-numeric: tabular-nums;
}
.game-close, .game-mute {
  position: absolute;
  top: 16px;
  right: 16px;
  display: grid;
  place-items: center;
  box-sizing: border-box;
  width: 44px;
  height: 44px;
  padding: 0;
  border: 1px solid var(--game-line);
  border-radius: 0;
  background: var(--game-bg);
  color: var(--game-fg);
  cursor: pointer;
  pointer-events: auto;
  touch-action: manipulation;
  transition: background-color 0.2s, border-color 0.2s, color 0.2s;
}
.game-mute { right: 68px; }
.game-close:hover, .game-mute:hover { border-color: var(--game-fg); background: var(--game-fg); color: var(--game-bg); }
.game-close:focus-visible, .game-mute:focus-visible { outline: 1px solid var(--game-fg); outline-offset: 2px; }
.game-mute[aria-pressed=true] .game-sound, .game-mute[aria-pressed=false] .game-muted { display: none; }
`;
function Lr(e, s, l, n = On()) {
  const m = new CSSStyleSheet();
  m.replaceSync(Wr), (document.adoptedStyleSheets = [...document.adoptedStyleSheets, m]);
  const i = document.createElement("div");
  (i.className = "game-ui"), (i.hidden = !0);
  const g = document.createElement("button");
  (g.type = "button"), (g.className = "game-start"), (g.hidden = !0);
  const b = g.appendChild(document.createElement("span"));
  b.className = "game-start-face";
  const T = document.createElement("kbd");
  T.append(document.createElement("span")), (T.firstChild.textContent = "↑"), b.append(n.copy.start + " ", T);
  const H = document.createElement("p");
  (H.className = "game-time"), (H.hidden = !0);
  const $ = H.appendChild(new Text()),
    v = document.createElement("button");
  (v.type = "button"),
    (v.className = "game-close"),
    (v.hidden = !0),
    (v.ariaLabel = n.copy.closeGame),
    (v.innerHTML = `<svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"><path d="${_o}"/></svg>`);
  const L = document.createElement("button");
  (L.type = "button"),
    (L.className = "game-mute"),
    (L.hidden = !0),
    (L.ariaLabel = n.copy.muteGame),
    (L.ariaPressed = "false"),
    (L.innerHTML =
      '<svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M2 6h2.5L8 3v10L4.5 10H2z"/><path class="game-sound" d="M10.5 6a2.5 2.5 0 0 1 0 4M12.5 4a5 5 0 0 1 0 8"/><path class="game-muted" d="M10.5 6l4 4M14.5 6l-4 4"/></svg>');
  const j = document.createElement("div");
  (j.className = "game-grab"), (j.hidden = !0), (j.ariaHidden = "true");
  const z = document.createElement("div");
  (z.className = "game-card"),
    (z.role = "dialog"),
    (z.ariaLabel = n.copy.finished),
    (z.hidden = !0),
    (z.innerHTML = `<div class="game-card-body"><dl class="game-card-row"></dl>
    <div class="game-card-keys"><button type="button" data-act="again"></button><button type="button" data-act="close"></button></div></div>`);
  const V = (W) => z.querySelector(W),
    et = (W) =>
      `<svg viewBox="0 0 16 16" fill="none" aria-hidden="true" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="${W}"/></svg>`;
  (V("[data-act=again]").innerHTML = et("M3.67 5.5A5 5 0 1 1 3 8M3.67 2.5v3h3")),
    (V("[data-act=close]").innerHTML = et(_o)),
    V("[data-act=again]").append(n.copy.again),
    V("[data-act=close]").append(n.copy.close);
  const J = V(".game-card-row"),
    k = V("[data-act=again]"),
    q = document.createElement("div");
  (q.className = "game-bar"),
    (q.hidden = !0),
    (q.innerHTML =
      '<div class="game-bar-body"><dl class="game-card-row"></dl><dl class="game-card-row"></dl></div>');
  const Rt = [...q.firstElementChild.children],
    st = (W, O) => {
      q.classList.toggle("is-split", W > 0),
        q.style.setProperty("--game-slot", `${W}px`),
        q.style.setProperty("--game-q", O);
    },
    mt = (W, O) => (O < W ? `${O / 100}px` : ""),
    wt = (W, O, M = "") => {
      const h = document.createElement("span");
      (h.className = "game-u"), (h.textContent = ` ${M}`), W.replaceChildren(O, ...(M ? [h] : []));
    },
    Ot = (W) =>
      W.map(([O, M, h]) => {
        const F = document.createElement("div"),
          U = document.createElement("dt"),
          gt = document.createElement("dd");
        return (
          (U.textContent = O),
          wt(gt, M, h),
          O === n.copy.gradeLabel && (F.className = "is-grade"),
          F.append(U, gt),
          F
        );
      });
  i.append(j, q, g, H, L, v, z),
    z.addEventListener("click", (W) => {
      const O = W.target.closest("button")?.dataset.act;
      O === "again" ? l() : O && s();
    });
  for (const W of ["pointerdown", "mousedown", "click"]) i.addEventListener(W, (O) => O.stopPropagation());
  g.addEventListener("click", e), v.addEventListener("click", s), document.body.append(i);
  let Pt = "",
    $t = "",
    Ut = "",
    te = NaN,
    xt = 0,
    kt = "";
  return {
    layer: i,
    size([W, O]) {
      (g.style.width === `${W}px` && g.style.height === `${O}px`) ||
        ((g.style.width = `${W}px`), (g.style.height = `${O}px`));
    },
    grab: j,
    card: z,
    button: g,
    fill(W) {
      const O = JSON.stringify(W);
      O !== Ut &&
        ((Ut = O), (z.ariaLabel = W.fell ? n.copy.fell : n.copy.finished), J.replaceChildren(...Ot(W.cells)));
    },
    fillBar(W) {
      if (W === te) return;
      te = W;
      const O = n.copy;
      Rt[0].replaceChildren(
        ...Ot([
          [O.hop, O.hopKey, ""],
          [O.steer, O.steerKeys, ""],
          [O.faster, O.fasterKeys, ""],
        ]),
      ),
        Rt[1].replaceChildren(
          ...Ot([
            [O.brake, O.brakeKeys, ""],
            [O.speedLabel, n.format("minSpeed", { speed: n.number(rt.minSpeed) }), ""],
            [O.toFinishLabel, n.format("toFinishShort", { distance: n.number(W) }), ""],
          ]),
        );
    },
    measureBar(W, O = 0, M = W) {
      const h = [i.hidden, q.hidden, q.style.width];
      (i.hidden = q.hidden = !1), st(O, mt(W, M)), (q.style.width = `${W}px`);
      const F = q.offsetHeight,
        U = Rt.every((gt) => gt.scrollWidth <= gt.clientWidth);
      return st(xt, kt), ([i.hidden, q.hidden, q.style.width] = h), U ? F : 0;
    },
    placeBar(W, O = "", M = 0, h = 0, F = M) {
      `${W}|${O}|${M}|${h}|${F}` !== $t &&
        (($t = `${W}|${O}|${M}|${h}|${F}`),
        (q.hidden = !W),
        (q.style.transform = W),
        (q.style.clipPath = O),
        M && (q.style.width = `${M}px`),
        (xt = h),
        (kt = mt(M, F)),
        st(xt, kt));
    },
    showCard(W, O = !1) {
      (z.hidden = !W), W && O && k.focus({ preventScroll: !0 });
    },
    placeGrab(W) {
      if (((j.hidden = !W), !W)) return;
      const { x: O, y: M, R: h } = W;
      (j.style.transform = `translate(${(O - h).toFixed(1)}px, ${(M - h).toFixed(1)}px)`),
        (j.style.width = j.style.height = `${(2 * h).toFixed(1)}px`);
    },
    get short() {
      return matchMedia(on).matches;
    },
    sizeCard(W, O = W) {
      (z.style.width = `${W}px`), z.style.setProperty("--game-q", `${(O - 2) / 100}px`);
    },
    measure(W, O, M = O) {
      const h = [i.hidden, z.hidden];
      (i.hidden = z.hidden = !1), this.fill(W), this.sizeCard(O, M);
      const F = z.offsetHeight;
      return ([i.hidden, z.hidden] = h), F;
    },
    fit(W, O, M = O) {
      const h = [i.hidden, z.hidden];
      (i.hidden = z.hidden = !1), this.fill(W), this.sizeCard(O, M);
      const F = J.lastElementChild?.querySelector("dd");
      let U = 0;
      return (
        F &&
          getComputedStyle(J).display === "flex" &&
          ((F.style.whiteSpace = "nowrap"), (U = F.scrollWidth - F.clientWidth), (F.style.whiteSpace = "")),
        ([i.hidden, z.hidden] = h),
        U > 0 ? O + U + 1 : O
      );
    },
    close: v,
    top() {
      return Math.max(H.getBoundingClientRect().bottom, v.getBoundingClientRect().bottom) + 12;
    },
    time(W) {
      $.data = W;
    },
    mute: L,
    muted(W) {
      L.ariaPressed = String(W);
    },
    run(W) {
      H.hidden = v.hidden = L.hidden = !W;
    },
    place(W, O = "", M = "") {
      `${W}|${O}|${M}` !== Pt &&
        ((Pt = `${W}|${O}|${M}`),
        (g.hidden = !W),
        (g.style.transform = W),
        (g.style.clipPath = O),
        (b.style.transform = M));
    },
    show(W) {
      i.hidden !== !W && (i.hidden = !W);
    },
    destroy() {
      i.remove(), (document.adoptedStyleSheets = document.adoptedStyleSheets.filter((W) => W !== m));
    },
  };
}
const kn = ["pink", "orange", "purple", "green", "blue"].map((e) => {
    const s = Va[e];
    return { box: s.srgb, fills: [[s.srgb, s.button.foreground]] };
  }),
  Pr = new Set(
    "an and are as at be but by for from has have her his if in is it its of on or our she so than that the their them then there these they this to was we were what when where which who will with you your".split(
      " ",
    ),
  );
function Ir(e, s, l) {
  const n = l.trimEnd(),
    m = !!n && !/[.!?:]$/.test(n);
  return Pr.has(e.toLowerCase())
    ? 0
    : /\d/.test(e) || /^[A-Z0-9]{2,}$/.test(e)
      ? 4
      : s !== "copy"
        ? 3
        : m && new RegExp("^\\p{Lu}", "u").test(e)
          ? 2
          : 1;
}
const Rr = (e, s) => s && (e.length >= 2 || /\d/.test(e));
function Mn(e, s) {
  let l = 0,
    n = e.length;
  for (; l < n; ) {
    const m = (l + n) >> 1;
    e[m].cy < s ? (l = m + 1) : (n = m);
  }
  return l;
}
function Fr(e, s, l) {
  const n = Math.max(e, s, l),
    m = n - Math.min(e, s, l);
  return m < 40
    ? null
    : ((n === e ? ((s - l) / m) % 6 : n === s ? (l - e) / m + 2 : (e - s) / m + 4) * 60 + 360) % 360;
}
let Ne = null;
function Yn(e) {
  if (((Ne ??= document.createElement("canvas").getContext("2d", { willReadFrequently: !0 })), !Ne))
    return null;
  Ne.clearRect(0, 0, 1, 1), (Ne.fillStyle = "#000"), (Ne.fillStyle = e), Ne.fillRect(0, 0, 1, 1);
  const [s, l, n] = Ne.getImageData(0, 0, 1, 1).data;
  return Fr(s, l, n);
}
function qr(e, s, l, n, m = null) {
  const i = n.length,
    g = ($, v) => {
      if (v === null) return !1;
      const L = Math.abs($ - v);
      return Math.min(L, 360 - L) < 30;
    },
    b = ($) => {
      const v = n[$];
      return v === null || (!g(v, l) && !g(v, m));
    };
  let T = (s - 1 - e) % i;
  for (let $ = 0; $ < i && !b(T); $++) T = (T + 1) % i;
  let H = T;
  for (let $ = 1; $ < i; $++) {
    const v = (T + $) % i;
    if (b(v)) {
      H = v;
      break;
    }
  }
  return [T, H];
}
function jr(e, s, l, n, m, i, g, b, T) {
  T.length = 0;
  for (let H = s; H < e.length && e[H].cy < n + m; H++) {
    const $ = e[H];
    if ($.st || !($.u < g * $.wt)) continue;
    const v = Math.hypot($.cx - l, $.cy - n);
    if (v >= i) continue;
    let L = T.length;
    for (; L > 0 && T[L - 1][0] > v; ) L--;
    L < b && (T.splice(L, 0, [v, $]), T.length > b && T.pop());
  }
  return T;
}
const Jo = (e) => (e < 700 ? [10, 14] : [24, 30]),
  Br = "a.inline-link-decoration",
  Xo = (e) => 1 - (1 - e) ** 3,
  Vn = (e, s, l) => e + (s - e) * l;
function Kr(e, s, l = new Set()) {
  const n = new Map();
  for (const m of e) {
    const { startContainer: i, startOffset: g } = m.r;
    n.has(i) || n.set(i, new Map()), n.get(i).set(g, m);
  }
  return s.map((m) => {
    const i = n.get(m.r.startContainer)?.get(m.r.startOffset);
    if (!i) return m;
    l.add(i);
    const { x: g, y: b, w: T, h: H, cx: $, cy: v, font: L, wt: j, kind: z, si: V } = m;
    return Object.assign(i, { x: g, y: b, w: T, h: H, cx: $, cy: v, font: L, wt: j, kind: z, si: V });
  });
}
const Qo = (e, s) =>
    e.startContainer.isConnected && e.startContainer.data?.slice(e.startOffset, e.endOffset) === s,
  ts = (e) => e * e * (3 - 2 * e),
  Nr = 1 / 120,
  Sn = 1,
  zn = 0.28,
  Gr = 0.4,
  Zn = [Math.cos((20 * Math.PI) / 180), Math.sin((20 * Math.PI) / 180)],
  An = (e, s) => Math.hypot(e[0] - s[0], e[1] - s[1], e[2] - s[2]),
  ps = (e) => `rgb(${e.map((s) => Math.round(s * 255)).join(" ")})`,
  es = (e, s) => ps(e.map((l) => l + (1 - l) * Tt(s, 0, 1)));
function Dr(e, s) {
  let l = [],
    n = [],
    m = [],
    i = [],
    g = [],
    b = null,
    T = [0, 0],
    H = [-1 / 0, 1 / 0],
    $ = 0,
    v = 0,
    L = 0,
    j = 0,
    z = 0,
    V = 0,
    et = [],
    J = 0,
    k = [],
    q = !0;
  const Rt = [];
  let st = [],
    mt = -1,
    wt = null;
  function Ot(a) {
    if (!Qo(a.r, a.text)) return (a.st = 4), !1;
    (wt ??= document.createRange()),
      wt.setStart(a.r.startContainer, a.r.startOffset),
      wt.setEnd(a.r.endContainer, a.r.endOffset);
    const [C, P, E, Y] = e.place(wt);
    return Y > 0 && P > 0 && Object.assign(a, { x: E, y: C, w: Y, h: P, cx: E + Y / 2, cy: C + P / 2 }), !0;
  }
  const Pt = () => {
    for (const a of l) (a.st = 0), (a.leg = null);
    (i = []),
      (g = []),
      (et = []),
      ($ = v = L = j = V = z = 0),
      (b = null),
      (T = [0, 0]),
      CSS.highlights?.delete("game-picked");
  };
  function $t() {
    if (l.length) return;
    const a = performance.now(),
      C = new Intl.Segmenter(void 0, { granularity: "word" }),
      P = new Map(),
      E = [],
      Y = [],
      G = document.createRange(),
      _ = e.sections();
    e.measure(() => {
      _.forEach((at, dt) => {
        for (const ut of at.el.querySelectorAll(ya)) {
          if (ut.closest(Po) || !ut.getClientRects().length) continue;
          const A = ut.matches("a") ? "cta" : /^H\d$/.test(ut.tagName) ? "title" : "copy";
          if (A !== "cta") {
            const [Ft, tt, nt, Ht] = e.place(ut);
            Ht > 0 && tt > 0 && Y.push({ el: ut, x0: nt, x1: nt + Ht, y0: Ft, y1: Ft + tt });
          }
          for (const Ft = document.createTreeWalker(ut, NodeFilter.SHOW_TEXT); Ft.nextNode(); ) {
            const tt = Ft.currentNode,
              nt = tt.parentElement;
            if (!nt || nt.closest(Po)) continue;
            let Ht = P.get(nt);
            if (!Ht) {
              const Q = getComputedStyle(nt);
              (Ht = { wt: Q.fontWeight, px: parseFloat(Q.fontSize), fam: Q.fontFamily }), P.set(nt, Ht);
            }
            const Dt = A === "copy" && nt.closest(Br) ? "link" : A,
              Nt = tt.data;
            for (const { segment: Q, index: Mt, isWordLike: Z } of C.segment(Nt)) {
              if (!Rr(Q, !!Z)) continue;
              const Gt = Ir(Q, Dt, Nt.slice(0, Mt));
              G.setStart(tt, Mt), G.setEnd(tt, Mt + Q.length);
              const [f, ht, Ct, vt] = e.place(G);
              vt > 0 &&
                ht > 0 &&
                E.push({
                  r: new StaticRange({
                    startContainer: tt,
                    startOffset: Mt,
                    endContainer: tt,
                    endOffset: Mt + Q.length,
                  }),
                  text: Q,
                  kind: Dt,
                  si: dt,
                  x: Ct,
                  y: f,
                  w: vt,
                  h: ht,
                  cx: Ct + vt / 2,
                  cy: f + ht / 2,
                  font: Ht,
                  wt: Gt,
                  u: sn(E.length),
                  i: E.length,
                  st: 0,
                  set: null,
                  t0: 0,
                  z: 0,
                  leg: null,
                });
            }
          }
        }
      }),
        (n = _.map((at) => e.place(at.el)[0]));
    }),
      (l = E.sort((at, dt) => at.cy - dt.cy)),
      (k = Y);
    const yt = _.length,
      bt = kn.map((at) => Yn(at.fills[0][0]));
    (m = _.map((at, dt) => {
      const [ut, A] = qr(dt, yt, Yn(at.colour), bt, dt ? Yn(_[dt - 1].colour) : null);
      return { box: kn[ut].box, fills: [kn[ut].fills[0], kn[A].fills[0]] };
    })),
      (J = performance.now() - a),
      performance.measure("game:index", { start: a });
  }
  function Ut() {
    const a = l;
    if (!a.length) return $t();
    (l = []), $t();
    const C = new Set();
    (l = Kr(a, l, C)),
      (i = i.filter((P) => C.has(P))),
      (g = g.filter((P) => C.has(P.wd))),
      (et = et.filter((P) => C.has(P.wd)));
    for (const P of a) !C.has(P) && P.st === 3 && b?.delete(P.r);
    for (const P of C) P.st === 3 && b?.delete(P.r);
    (T = [0, 0]), te();
  }
  function te(a = s.geo()) {
    if (!a || !l.length) return;
    const C = a.offset - a.H,
      P = a.offset + a.T + a.H,
      E = Mn(l, C),
      Y = Mn(l, P),
      G = Math.min(T[0], l.length),
      _ = Math.min(T[1], l.length);
    if (((H = [C, P]), b && (E !== G || Y !== _))) {
      const yt = (at, dt) => {
          for (let ut = at; ut < dt; ut++) l[ut].st === 3 && b.delete(l[ut].r);
        },
        bt = (at, dt) => {
          for (let ut = at; ut < dt; ut++) l[ut].st === 3 && b.add(l[ut].r);
        };
      yt(G, Math.min(_, E)), yt(Math.max(G, Y), _), bt(E, Math.min(Y, G)), bt(Math.max(E, _), Y);
    }
    T = [E, Y];
  }
  const xt = (a) => {
    let C = n.length - 1;
    for (; C > 0 && n[C] > a; ) C--;
    return Math.max(C, 0);
  };
  function kt(a, C) {
    const P = s.ball(),
      E = a.leg?.phase === "reach" || a.leg?.phase === "plant" ? a.leg : null;
    if (
      ((a.st = 3),
      $++,
      window.Highlight &&
        CSS.highlights &&
        (b || CSS.highlights.set("game-picked", (b = new Highlight())),
        a.cy >= H[0] && a.cy < H[1] && b.add(a.r)),
      !C)
    ) {
      E && U(E);
      return;
    }
    let Y = E?.node;
    if (!Y) {
      const bt = [a.cx - P.x, a.cy - P.y, a.z - s.centreZ()],
        at = Math.hypot(...bt) || 1;
      Y = s.nodeNear(bt.map((dt) => dt / at));
    }
    const G = (20 + 40 * sn(a.i + 7)) * (sn(a.i + 13) < 0.5 ? -1 : 1) * (Math.PI / 180),
      _ = a.set,
      yt = {
        wd: a,
        from: E ? [...E.foot] : [a.cx, a.cy, a.z],
        node: Y,
        ang: G,
        t0: s.clock(),
        set: _,
        fill: _.fills[a.i % _.fills.length],
      };
    g.push(yt),
      E && Object.assign(E, { phase: "pull", chip: yt, t0: s.clock() }),
      g.length > Jo(s.geo()?.W ?? 0)[1] && g.shift();
  }
  function W(a, C) {
    const P = s.ball(),
      E = a.node.ra || P.r,
      Y = s.onBall(
        C,
        Te(P.q, a.node.dir).map((_) => _ * E),
      ),
      G = Xo(Tt((s.clock() - a.t0) / (ge.fly / 1e3), 0, 1));
    return [Vn(a.from[0], Y[0], G), Vn(a.from[1], Y[1], G), Vn(a.from[2], Y[2], G)];
  }
  function O(a, C) {
    const P = s.ball(),
      E = s.clock();
    if (mt !== E) {
      const _ = s.rowOf(P.y, C),
        yt = Math.max(rt.scan * P.r, rt.scanMin * C.W) + innerHeight;
      (st = s.boxes().filter((bt) => bt.alpha > 0.05 && !bt.letters && bt.r1 > _ - yt && bt.r0 < _ + yt)),
        (mt = E);
    }
    const Y = s.rowOf(a.cy, C);
    let G = 0;
    for (const _ of st) a.cx > _.x0 && a.cx < _.x1 && Y > _.r0 && Y < _.r1 && _.top > G && (G = _.top);
    return (a.z = G);
  }
  const M = () => {
    const a = s.ball();
    return [a.x, a.y, s.centreZ()];
  };
  function h(a, C) {
    const P = s.ball(),
      E = a.foot[0] - C[0],
      Y = a.foot[1] - C[1],
      G = Math.hypot(E, Y);
    G > 1 && (a.dir = [E / G, Y / G]);
    const _ = [a.dir[0] * Zn[0], a.dir[1] * Zn[0], -Zn[1]];
    a.node ??= s.nodeNear(_);
    const yt = Te(P.q, a.node.dir).map((bt) => bt * (a.node.ra || P.r));
    return [s.onBall(C, yt), _];
  }
  function F(a, C) {
    const P = a.font.px,
      E = a.st === 2,
      Y = E ? a.cx - 0.725 * a.w : a.x - 0.15 * P,
      G = E ? a.cx + 0.725 * a.w : a.x + a.w + 0.15 * P,
      _ = E ? a.y : a.y - 0.35 * P,
      yt = E ? a.y + 1.6 * a.h : a.y + a.h + 0.35 * P;
    return C === 0
      ? [(Y + G) / 2, _, a.z]
      : C === 1
        ? [G, (_ + yt) / 2, a.z]
        : C === 2
          ? [(Y + G) / 2, yt, a.z]
          : [Y, (_ + yt) / 2, a.z];
  }
  function U(a) {
    (a.phase = "drop"), (a.t0 = s.clock()), a.wd.leg === a && (a.wd.leg = null);
  }
  function gt(a) {
    const C = s.playing();
    if (!et.length && !C) return;
    const P = s.ball(),
      E = s.geo();
    if (!P || !E) return;
    const Y = s.clock(),
      G = P.r,
      _ = ((Math.max(1.2, rt.legStretch) - 1) * G) / 2,
      yt = M(),
      bt = me.foot;
    if (C) {
      let A = ha(et.length, E.W < 700);
      if (A > 0)
        for (const Ft of pa(i, P)) {
          if (A <= 0) break;
          let tt = 0,
            nt = 1 / 0;
          const Ht = [0, 1, 2, 3].map((Q) => F(Ft, Q));
          Ht.forEach((Q, Mt) => {
            const Z = Math.hypot(Q[0] - P.x, Q[1] - P.y);
            Z < nt && ((nt = Z), (tt = Mt));
          });
          const Dt = {
              wd: Ft,
              side: tt,
              phase: "reach",
              t0: Y,
              dir: [0, -1],
              foot: Ht[tt],
              fv: [P.vx, P.vy, 0],
              knee: [0, 0, 0],
              kv: [0, 0, 0],
              aim: null,
              len: 0,
              chip: null,
              a: 1,
              node: null,
            },
            [Nt] = h(Dt, yt);
          An(Nt, Ht[tt]) > 1.8 * _ ||
            ((Dt.foot = [...Nt]),
            (Dt.knee = [...Nt]),
            (Dt.fv[2] += me.step * G),
            et.push(Dt),
            (Ft.leg = Dt),
            A--);
        }
    }
    const at = Math.max(1, Math.ceil(a / Nr)),
      dt = a / at,
      ut = 1 - Math.exp(-a / 0.07);
    for (const A of et) {
      if (
        ((A.phase === "reach" || A.phase === "plant") && (!C || A.wd.st === 4 || A.wd.st === 0) && U(A),
        A.phase === "reach")
      ) {
        const Q = F(A.wd, A.side);
        for (let Mt = 0; Mt < at; Mt++)
          for (let Z = 0; Z < 3; Z++)
            (A.fv[Z] += (bt * bt * (Q[Z] - A.foot[Z]) - 2 * bt * A.fv[Z]) * dt), (A.foot[Z] += A.fv[Z] * dt);
        (An(A.foot, Q) < 3 || Y - A.t0 > 0.25) &&
          ((A.phase = "plant"), (A.t0 = A.lit = Y), (A.kv[2] -= me.give * G));
      }
      if (A.phase === "plant" && ((A.foot = F(A.wd, A.side)), An(h(A, yt)[0], A.foot) > 2 * _ * 0.98)) {
        const Q = i.indexOf(A.wd);
        Q >= 0 && i.splice(Q, 1), kt(A.wd, !0), V++;
      }
      if (A.phase === "pull") {
        const Q = Tt((Y - A.chip.t0) / (ge.fly / 1e3), 0, 1);
        (A.foot = W(A.chip, yt)), (A.a = 1 - ts(Tt((Q - 0.6) / 0.4, 0, 1))), Q === 1 && (A.done = !0);
      } else if (A.phase === "drop") {
        const Q = Tt((Y - A.t0) / (ge.drop / 1e3), 0, 1),
          [Mt] = h(A, yt);
        for (let Z = 0; Z < at; Z++)
          for (let Gt = 0; Gt < 3; Gt++)
            (A.fv[Gt] +=
              (bt * bt * (Mt[Gt] - A.foot[Gt]) - 2 * bt * A.fv[Gt] - (Gt === 2 ? me.gravity * G : 0)) * dt),
              (A.foot[Gt] += A.fv[Gt] * dt);
        (A.a = 1 - Q), Q === 1 && (A.done = !0);
      }
      const [Ft, tt] = h(A, yt),
        nt = A.foot;
      A.len += ((A.phase === "reach" || A.phase === "plant" ? _ : 0) - A.len) * ut;
      const Ht = ma(Ft, nt, tt, A.len),
        Dt =
          A.aim && a > 0
            ? [(Ht[0] - A.aim[0]) / a, (Ht[1] - A.aim[1]) / a, (Ht[2] - A.aim[2]) / a]
            : [0, 0, 0],
        Nt = An(Ft, nt) >= 2 * A.len;
      A.aim = Ht;
      for (let Q = 0; Q < at; Q++) {
        for (let Mt = 0; Mt < 3; Mt++)
          (A.kv[Mt] +=
            (me.spring * (Ht[Mt] - A.knee[Mt]) +
              me.damp * (Dt[Mt] - A.kv[Mt]) -
              (Mt === 2 ? me.gravity * G : 0)) *
            dt),
            (A.knee[Mt] += A.kv[Mt] * dt);
        A.knee = Nt ? [...Ht] : ga(Ft, nt, A.len, A.knee);
      }
      Nt && (A.kv = Dt);
    }
    et.some((A) => A.done) &&
      (et = et.filter((A) => (A.done && A.wd.leg === A && (A.wd.leg = null), !A.done)));
  }
  function Et() {
    const a = s.ball(),
      C = s.geo();
    if (!q || !l.length || !a || !C) return;
    const P = s.clock(),
      { r: E, x: Y, y: G } = a,
      _ = E * (1 + rt.reach),
      yt = Math.max(rt.scan * E, rt.scanMin * C.W),
      bt = m[xt(G)],
      [at] = Jo(C.W),
      dt = s.up();
    i = i.filter((tt) => tt.st !== 4);
    for (let tt = dt ? -1 : i.length - 1; tt >= 0; tt--) {
      const nt = i[tt];
      Math.hypot(nt.cx - Y, nt.cy - G) >= _ || (i.splice(tt, 1), kt(nt, !0));
    }
    const ut = rt.eat * E;
    for (let tt = dt ? l.length : Mn(l, G - ut); tt < l.length && l[tt].cy < G + ut; tt++) {
      const nt = l[tt];
      if (nt.st || Math.hypot(nt.cx - Y, nt.cy - G) >= ut) continue;
      const Ht = P >= z;
      if (!(Ht ? Ot(nt) : Qo(nt.r, nt.text))) {
        nt.st = 4;
        continue;
      }
      Ht && ((z = P + 1 / rt.chipRate), (nt.set = bt), O(nt, C)), kt(nt, Ht), j++, Xn(a, 0, 1);
    }
    for (const tt of i) tt.st === 1 && P - tt.t0 >= ge.hold / 1e3 && ((tt.st = 2), L++);
    const A = Math.min(3, at - i.length);
    if (A <= 0) return;
    const Ft = Mn(l, G - yt);
    jr(l, Ft, Y, G, E, yt, rt.words, A, Rt);
    for (const [, tt] of Rt) Ot(tt) && ((tt.st = 1), (tt.t0 = P), (tt.set = bt), O(tt, C), i.push(tt), v++);
  }
  function X(a, C, P = []) {
    if (!q || (!i.length && !g.length && !et.length)) return;
    const E = s.ball();
    if (!E) return;
    const Y = s.fade(),
      G = s.centreZ(),
      _ = s.rowOf(E.y, C),
      yt = lt(C, E.x, _, G),
      bt = lt(C, E.x + E.r, _, G);
    if (!yt || !bt) return;
    const at = Math.hypot(bt.x - yt.x, bt.y - yt.y),
      dt = s.clock();
    a.save(), (a.globalAlpha = Y);
    const ut = [];
    for (const f of i) {
      const ht = O(f, C),
        Ct = s.rowOf(f.y, C),
        vt = f.font.px,
        qt = f.st === 2,
        Yt = qt ? f.cx - 0.725 * f.w : f.x - 0.15 * vt,
        ee = qt ? f.cx + 0.725 * f.w : f.x + f.w + 0.15 * vt,
        jt = qt ? Ct : Ct - 0.35 * vt,
        he = qt ? Ct + 1.6 * f.h : Ct + f.h + 0.35 * vt,
        ne = lt(C, Yt, jt, ht),
        le = lt(C, ee, jt, ht),
        Xt = lt(C, Yt, he, ht);
      if (!(!ne || !le || !Xt)) {
        if (ne.y > innerHeight + 60 && Xt.y > innerHeight + 60) {
          f.st = 4;
          continue;
        }
        ut.push({
          wd: f,
          p: ne,
          q: le,
          s: Xt,
          d: { x: le.x + Xt.x - ne.x, y: le.y + Xt.y - ne.y },
          fill: qt,
          W: ee - Yt,
          H: he - jt,
        });
      }
    }
    const A = ps(rt.colour),
      Ft = (f) =>
        f.lit === void 0 ? 0 : Math.max(f.phase === "plant" ? 0.35 : 0, Math.exp(-(dt - f.lit) / me.glow)),
      tt = [],
      nt = (f) => lt(C, f[0], s.rowOf(f[1], C), f[2]),
      Ht = [E.x, E.y, G],
      Dt = 0.75;
    (a.lineWidth = Dt), (a.lineJoin = a.lineCap = "round"), (a.strokeStyle = A);
    for (const f of et) {
      const ht = nt(h(f, Ht)[0]),
        Ct = nt(f.knee),
        vt = nt(f.foot);
      if (!ht || !Ct || !vt || !(f.a > 0.01)) continue;
      const qt = Ft(f),
        Yt = 2 * Ct.x - (ht.x + vt.x) / 2,
        ee = 2 * Ct.y - (ht.y + vt.y) / 2,
        jt = () => {
          a.beginPath(), a.moveTo(ht.x, ht.y), a.quadraticCurveTo(Yt, ee, vt.x, vt.y), a.stroke();
        };
      qt > 0.01 &&
        ((a.globalAlpha = Y * f.a * 0.35 * qt),
        (a.strokeStyle = f.wd.set?.box ?? "#fff"),
        (a.lineWidth = Dt + 2 * qt),
        jt(),
        (a.lineWidth = Dt)),
        (a.globalAlpha = Y * f.a),
        (a.strokeStyle = qt > 0.01 ? es(rt.colour, qt) : A),
        jt(),
        f.phase === "plant" && tt.push({ ...vt, k: qt });
    }
    (a.strokeStyle = A), (a.globalAlpha = Y), (a.lineCap = "butt"), (a.lineJoin = "miter"), a.save();
    for (const f of P) {
      const ht = new Path2D();
      ht.rect(0, 0, C.W, C.H), ht.moveTo(f[0].x, f[0].y);
      for (const Ct of f) ht.lineTo(Ct.x, Ct.y);
      ht.closePath(), a.clip(ht, "evenodd");
    }
    (a.lineWidth = 2), (a.lineJoin = "miter");
    for (const f of ut)
      f.fill ||
        ((a.strokeStyle = f.wd.set.box),
        a.beginPath(),
        a.moveTo(f.p.x, f.p.y),
        a.lineTo(f.q.x, f.q.y),
        a.lineTo(f.d.x, f.d.y),
        a.lineTo(f.s.x, f.s.y),
        a.closePath(),
        a.stroke());
    for (const f of ut) {
      if (!f.fill) continue;
      const { wd: ht } = f,
        [Ct, vt] = ht.set.fills[ht.i % ht.set.fills.length];
      a.save(),
        a.transform(
          (f.q.x - f.p.x) / f.W,
          (f.q.y - f.p.y) / f.W,
          (f.s.x - f.p.x) / f.H,
          (f.s.y - f.p.y) / f.H,
          f.p.x,
          f.p.y,
        ),
        (a.fillStyle = Ct),
        a.beginPath(),
        a.roundRect(0, 0, f.W, f.H, 0.2 * ht.font.px),
        a.fill(),
        (a.font = `${ht.font.wt} ${1.45 * ht.font.px}px ${ht.font.fam}`),
        (a.fillStyle = vt),
        (a.textAlign = "center"),
        (a.textBaseline = "middle"),
        a.fillText(ht.text, f.W / 2, f.H / 2),
        a.restore();
    }
    a.restore(), (a.lineWidth = 1.5);
    for (const f of tt)
      (a.fillStyle = es(rt.colour, f.k)),
        (a.strokeStyle = "#000"),
        a.beginPath(),
        a.arc(f.x, f.y, 2.5 + 1.5 * f.k, 0, Math.PI * 2),
        a.fill(),
        a.stroke();
    const Nt = Tt(0.22 * at, 9, 14) * Math.min(1, s.size()),
      Q = a.getTransform().a,
      Mt = [E.x, E.y, G];
    let Z = "";
    (a.textAlign = "center"), (a.textBaseline = "middle");
    const Gt = ge.fly / 1e3;
    for (const f of g) {
      const ht = dt - f.t0,
        Ct = Tt(ht / Gt, 0, 1),
        vt = Tt((ht - Gt - Sn) / zn, 0, 1),
        qt = ht - Gt - Sn - zn,
        Yt = vt < 1 ? ts(vt) : Math.exp(-qt / me.glow);
      if (vt === 1 && Yt < 0.01) continue;
      const ee = W(f, Mt),
        jt = lt(C, ee[0], s.rowOf(ee[1], C), ee[2]);
      if (!jt || (Ct === 1 && jt.z > yt.z)) continue;
      a.setTransform(Q, 0, 0, Q, jt.x * Q, jt.y * Q),
        Yt > 0.01 &&
          ((a.globalAlpha = Y * 0.45 * Yt),
          (a.fillStyle = f.fill[0]),
          a.beginPath(),
          a.arc(0, 0, 3 + 5 * Yt, 0, Math.PI * 2),
          a.fill(),
          (a.globalAlpha = Y));
      const he = qt / Gr;
      if (
        (he > 0 &&
          he < 1 &&
          ((a.globalAlpha = Y * (1 - he)),
          (a.strokeStyle = f.fill[0]),
          (a.lineWidth = 1.5),
          a.beginPath(),
          a.arc(0, 0, 4 + 1.2 * Nt * Xo(he), 0, Math.PI * 2),
          a.stroke(),
          (a.globalAlpha = Y)),
        vt < 1)
      ) {
        const ne = f.wd.font,
          Xt = (f.wd.w / ne.px) * Nt + 0.9 * Nt,
          ce = 1.5 * Nt,
          ft = 1 - vt * vt,
          Ie = f.ang + Math.sign(f.ang) * 1.6 * vt * vt,
          we = Math.cos(Ie) * Q * ft,
          ot = Math.sin(Ie) * Q * ft,
          Qt = `${ne.wt} ${Nt}px ${ne.fam}`;
        a.setTransform(we, ot, -ot, we, jt.x * Q, jt.y * Q),
          (a.fillStyle = f.fill[0]),
          a.beginPath(),
          a.roundRect(-Xt / 2, -ce / 2, Xt, ce, 0.3 * Nt),
          a.fill(),
          Qt !== Z && (a.font = Z = Qt),
          (a.fillStyle = f.fill[1]),
          a.fillText(f.wd.text, 0, 0.05 * Nt),
          a.setTransform(Q, 0, 0, Q, jt.x * Q, jt.y * Q);
      }
      Yt > 0.01 &&
        ((a.fillStyle = "#fff"), a.beginPath(), a.arc(0, 0, 1.5 + 1.5 * Yt, 0, Math.PI * 2), a.fill());
    }
    a.restore(),
      g.some((f) => dt - f.t0 > Gt + Sn + zn + 3 * me.glow) &&
        (g = g.filter((f) => dt - f.t0 <= Gt + Sn + zn + 3 * me.glow));
  }
  return {
    index: $t,
    reindex: Ut,
    crawl: Et,
    label: X,
    syncStrip: te,
    clear: Pt,
    drop() {
      Pt(), (l = []), (n = []), (m = []), (k = []);
    },
    get texts() {
      return k;
    },
    get ready() {
      return l.length > 0;
    },
    get picked() {
      return $;
    },
    get size() {
      return l.length;
    },
    stepLegs: gt,
    hip: (a, C) => h(a, C)[0],
    get legs() {
      return et;
    },
    get yanked() {
      return V;
    },
    retire() {
      for (const a of i) a.st = 4;
      i = [];
    },
    set enabled(a) {
      a || Pt(), (q = a);
    },
    get enabled() {
      return q;
    },
    get debug() {
      return {
        indexed: l.length,
        live: i.length,
        popped: v,
        filled: L,
        eaten: j,
        picked: $,
        chips: g.length,
        highlight: b?.size ?? 0,
        indexMs: J,
        has: CSS.highlights?.has("game-picked") ?? !1,
      };
    },
    words: () => l,
    screen(a) {
      const C = s.geo(),
        P = l[a];
      if (!C || !P) return null;
      const E = O(P, C),
        Y = s.rowOf(P.y, C),
        G = lt(C, P.x, Y, E),
        _ = lt(C, P.x + P.w, Y + P.h, E);
      return G && _ ? [G.x, G.y, _.x, _.y] : null;
    },
  };
}
const ns = 0.15,
  Ur = 0.7,
  os = 0.35,
  Yr = 0.85,
  Ae = { rest: 12, hover: 20, down: 3, gone: -130 },
  Vr = 16,
  _n = 0.7,
  Zr = [
    [1, 1],
    [1, 1],
    [1, -1],
    [1, -1],
  ],
  ss = [
    [-1, 1],
    [-1, 1],
    [1, 1],
    [1, 1],
  ],
  as = (e) =>
    !!e &&
    e.reduce((s, l, n) => {
      const m = e[(n + 1) % 4];
      return s + l.x * m.y - m.x * l.y;
    }, 0) > 0,
  Jn = (e) => 1 - (1 - e) ** 3,
  rs = (e) => e * e * (3 - 2 * e),
  ms = "f26-game-muted",
  _r = () => {
    try {
      return localStorage.getItem(ms) === "1";
    } catch {
      return !1;
    }
  },
  Ge = (e) => Math.min(rt.lookAhead, 0.34 * e);
function Jr(e) {
  const s = On(e),
    l = s.clock,
    n = Lr(
      () => oo(),
      () => De(),
      () => Js(),
      s,
    ),
    m = new AbortController();
  let i = "idle",
    g = !0,
    b = !1,
    T = 1,
    H = 0,
    $ = 0;
  const v = { y: 0 };
  let L = 0,
    j = 0,
    z = 0,
    V = !1,
    et = "";
  const J = new Set();
  let k = null,
    q = null,
    Rt = 0,
    st = null,
    mt = 0,
    wt = 0,
    Ot = 0,
    Pt = 0,
    $t = null,
    Ut = 0,
    te = 0,
    xt = null;
  const kt = ar();
  let W = [],
    O = 0,
    M = null,
    h = 0,
    F = 0,
    U = -1e9,
    gt = "",
    Et = null,
    X = null;
  const a = { vx: 0, vy: 0 },
    C = ur();
  let P = null;
  const E = { h: Ae.gone, v: 0, turn: 0, from: 0, aim: 0, t: 0 };
  let Y = !1;
  const G = { hover: !1, focus: !1, down: !1, flips: 0 };
  let _ = !1,
    yt = !1,
    bt = !1,
    at = 0,
    dt = !1,
    ut = 0,
    A = 0;
  const Ft = new Uint8Array(kt.state.length);
  let tt = 0,
    nt = !1,
    Ht = [],
    Dt = 0,
    Nt = 0,
    Q = !1,
    Mt = !1;
  const Z = () => {
    Q ? (Mt = !0) : e.redraw();
  };
  let Gt = 0,
    f = null,
    ht = null,
    Ct = null,
    vt = [],
    qt = [],
    Yt = [],
    ee = null,
    jt = !1,
    he = null,
    ne = !1;
  const le = Mr();
  let Xt = !1;
  const ce = matchMedia("(prefers-reduced-motion: reduce)"),
    ft = Io();
  let Ie = 1,
    we = 1;
  const ot = va({
    ball: () => k,
    hop: ft,
    clock: () => h,
    height: () => innerHeight,
    redraw: () => Z(),
    shut: () => (b ? rs(T) : 1),
  });
  let Qt = [];
  const Re = {},
    an = new Set(),
    _e = new Map(),
    no = [],
    gs = [],
    fe = () => innerHeight,
    En = (t) => t.target instanceof Element && !!t.target.closest(".game-ui button");
  function oo() {
    if (i !== "pad" || !k || !e.on()) return;
    le.wake(),
      (Xt = _r()),
      n.muted(Xt),
      ({ end: j, trackTop: L } = e.measure()),
      (j -= L),
      Bt.index(),
      Bt.syncStrip(),
      bs(),
      (i = "play"),
      e.resetProps(),
      (v.y = za(scrollY, L, e.over(), fe())),
      (V = !0),
      (k.vy = -350),
      (z = 0),
      (et = ""),
      e.takeover(!0),
      (G.down = !1),
      Xe(),
      (a.vx = a.vy = 0),
      n.run(!0),
      n.time(l(0));
    const t = document.activeElement;
    (he = t instanceof HTMLElement && t !== document.body && !n.layer.contains(t) ? t : null),
      (ne = !1),
      t instanceof HTMLElement && t.blur(),
      Z();
  }
  function ys() {
    const t = he;
    if (((he = null), t?.isConnected)) return t.focus({ preventScroll: !0 });
    const o = e.words.sections().at(-1)?.el;
    o instanceof HTMLElement &&
      (o.hasAttribute("tabindex") ||
        ((o.tabIndex = -1), o.addEventListener("blur", () => o.removeAttribute("tabindex"), { once: !0 })),
      o.focus({ preventScroll: !0 }));
  }
  function bs() {
    if ((ot.clear(), !rt.board || !f || !k)) return;
    const t = f,
      o = t.W,
      r = Math.min(Ot * rt.maxGrow, rt.maxH * t.H),
      c = (d) => {
        const p = lt(t, o / 2, t.focusRow + Ge(fe()), d);
        return Math.max(0, (p ? (o * Math.tan(t.fov / 2) * p.z) / t.H : o / 2) - o / 2);
      },
      y = performance.now();
    ot.start(() =>
      e.words.measure(() => {
        const d = e.words.sections(),
          p = (Ht = []);
        for (let x = d.length - 2; x >= 0; x--) {
          const w = d[x].el.querySelectorAll(".product-card"),
            S = d[x + 1].heading;
          if (!w.length || !S) continue;
          let I = -1 / 0;
          for (const B of w) {
            const [R, K] = e.words.place(B);
            I = Math.max(I, R + K);
          }
          p.push({ k: x, top: I, bottom: e.words.place(S)[0] });
        }
        const u = d[0]?.heading;
        return {
          gaps: p,
          W: o,
          padY: mt,
          first: d.length ? e.words.place(d[0].el)[0] : 0,
          R0: Ot,
          maxR: r,
          m: c,
          runIn: u ? { lo: Pt + Ze(o), hi: e.words.place(u)[0] - 60 } : void 0,
        };
      }),
    ),
      (Dt = performance.now() - y);
  }
  function xs() {
    const t = k,
      o = Tr(ot.holes, t, ft.z, ot.openK());
    if (!o) return;
    const r = be() + (1 - we) * t.r;
    (q = Or(o)),
      Object.assign(t, { z: r, vz: ft.air ? ft.vz : 0, pinch: 1 }),
      Object.assign(ft, { z: 0, vz: 0, air: !1, press: -1, s: 0, sv: 0 }),
      (ot.ramp = 0),
      (ot.rampOn = null),
      Z();
  }
  function vs(t) {
    const o = k,
      r = Er(q, o, t, h, ot.openK(), mt);
    if (r === "out") {
      const c = Math.max(0, o.z - Math.max(o.r, at));
      Object.assign(ft, { z: c, vz: o.vz, air: c > 0.5 || o.vz > 0 }), (q = null), Z();
      return;
    }
    r === "fell" ? ws() : r === "card" && (Cn = Cs(q.h.y)), q?.card && n.fill(ro());
  }
  function ws() {
    (i = "over"), Rt++, (F = h), J.clear(), (z = 0), (ot.boostAt = -1e9), Bt.retire(), Z();
  }
  let rn = "",
    ie = null,
    ye = null;
  const so = () => (ye === null ? 0 : Tt((h - ye) / os, 0, 1) ** 2),
    Hn = () => (ie ? Jn(Tt((h - ie.at) / (ge.slide / 1e3), 0, 1)) * (1 - so()) : 0),
    ao = (2 * ge.slide) / 1e3;
  let Cn = 0;
  const ro = () => Qa({ ...Je(), dist: q.dist }, s),
    ks = () => (q ? ro() : Nn(Je(), l(k.t), s));
  function ln(t) {
    if (t && k && (i === "finish" || (i === "over" && q?.card))) return Ms(t);
    rn && ((n.card.style.transform = n.card.style.clipPath = ""), (rn = "")), (ie = null);
  }
  function Ms(t) {
    const o = n.card,
      r = k,
      c = `${innerWidth}x${innerHeight} ${o.textContent}`;
    if (ie?.key !== c) {
      const p = q
        ? v.y === Cn || h - (q.cardAt ?? 0) > 1.5
        : (!r.vx && !r.vy && !X && v.y === te && Qt.every((w) => w.landed)) || h - F > 1.5;
      if (!ie && (!p || b)) return;
      const u = q ? Is(t, q.h) : Ut,
        x = ks();
      ($t = mn(
        t,
        (w, S) => n.measure(x, w, S),
        v.y,
        u,
        void 0,
        !0,
        (w, S) => n.fit(x, w, S),
      )),
        n.sizeCard($t.w, $t.tw),
        n.showCard(!0, !ie),
        (ie = { key: c, at: ie?.at ?? h });
    }
    const { css: y, clip: d } = io(t, $t, Hn());
    `${y}|${d}` !== rn &&
      ((rn = `${y}|${d}`), (o.style.transform = y), (o.style.clipPath = y ? d : "inset(50%)"));
  }
  function io(t, o, r) {
    const c = o.face - t.offset,
      { left: y, top: d } = e.canvas(),
      [p, u, x, w] = [
        [o.x0, r],
        [o.x1, r],
        [o.x1, r - 1],
        [o.x0, r - 1],
      ].map(([B, R]) => {
        const K = lt(t, B, c, R * o.hz);
        return K && { x: K.x + y, y: K.y + d };
      }),
      S = p && u && x && w ? Un([p, u, x, w], o.w, o.ht) : "",
      I = r < 1 ? `inset(0 0 ${((1 - r) * o.ht).toFixed(1)}px 0)` : "";
    return { css: S, clip: I };
  }
  function cn(t, o, r) {
    if (!o || r < 0.5) return;
    const [c, y] = [Vt(o.back), Vt(o.face)],
      d = (w, S) => t.fills.push(w, S, r, ...rt.slab, 1, 0),
      { x0: p, x1: u } = o;
    for (const [w, S] of [
      [p, c],
      [u, c],
      [u, y],
      [p, c],
      [u, y],
      [p, y],
    ])
      d(w, S);
    const x = 0.85;
    t.seg([p, c, r], [u, c, r], Wt, x),
      t.seg([p, c, r], [p, y, r], Wt, x),
      t.seg([u, c, r], [u, y, r], Wt, x);
  }
  function Ss(t) {
    if (!$t || !ie || !f) return;
    const o = Jn(Tt((h - ie.at) / ao, 0, 1)) * (1 - so()),
      r = 0.9,
      c = Vt($t.face),
      y = Math.min(t.d1, Vt(mt));
    if (o <= 0 || y <= c) return;
    const d = y - (y - c) * o,
      p = 22,
      u = 0.5,
      x = (q ? c : Vt(Pt)) + 30,
      w = '500 11px "Shopify Inter", system-ui, sans-serif';
    for (const [S, I] of [
      [$t.x0, 1],
      [$t.x1, -1],
    ]) {
      const B = S + I * p,
        R = t.along(S, d, y).map((N) => N[1]);
      for (let N = 0; N + 1 < R.length; N++)
        for (const [it, zt] of [
          [S, R[N]],
          [B, R[N]],
          [B, R[N + 1]],
          [S, R[N]],
          [B, R[N + 1]],
          [S, R[N + 1]],
        ])
          t.fills.push(it, zt, u, ...rt.slab, 1, 0);
      t.path(t.along(S, d, y, u), Wt, r),
        t.path(t.along(B, d, y, u), Wt, r),
        t.seg([S, d, u], [B, d, u], Wt, r);
      let K = null;
      for (let N = Math.ceil((mt - y - t.off) / 100) * 100; mt - N - t.off >= d; N += 100) {
        const it = mt - N - t.off,
          zt = N % 500 === 0;
        t.seg([S, it, u], [S + I * (zt ? p : 0.4 * p), it, u], Wt, r);
        const Kt = lt(f, B, it, u);
        !zt ||
          !t.inView(Kt, 8) ||
          t.under(Kt.y) <= 0 ||
          it < x + 40 ||
          (K !== null && Math.abs(Kt.y - K) < 18) ||
          ((K = Kt.y),
          t.flat(s.number(N), [B + I * 6, it, u], {
            alpha: 0.75 * r,
            align: I > 0 ? "left" : "right",
            font: w,
          }));
      }
    }
  }
  function De(t = !1) {
    if (!(!ke() || (b && !t))) {
      if (
        ((g = !1),
        Xe(),
        J.clear(),
        (z = 0),
        e.takeover(!1),
        wn(kt),
        (n.layer.inert = !0),
        n.place(""),
        (ne = !1),
        ys(),
        t)
      )
        return gn();
      (b = !0), (T = 1), (H = h), ($ = 0), ho(), (ye ??= h);
    }
  }
  addEventListener(
    "keydown",
    (t) => {
      const o = t.metaKey || t.ctrlKey || t.altKey;
      if (ke() && !b) {
        if (t.key === "Enter" && t.target instanceof Element && t.target.closest("a[href]")) return;
        if ($n() && nr(t, En(t), h - F)) return De();
        const r = Aa(t, En(t));
        r.prevent && t.preventDefault(),
          r.end
            ? De()
            : r.dir && i === "play"
              ? J.add(r.dir)
              : t.key === " " &&
                !o &&
                i === "play" &&
                !q &&
                !En(t) &&
                !t.repeat &&
                !ft.air &&
                ft.press < 0 &&
                (ft.press = h);
      } else if (
        i === "pad" &&
        !o &&
        ["ArrowUp", " ", "Enter"].includes(t.key) &&
        e.over() >= 0.8 * qo(fe())
      ) {
        const r = t.target;
        (r === document.body || r === document.documentElement || r === n.button) &&
          (t.preventDefault(), t.repeat || oo());
      }
    },
    { capture: !0, signal: m.signal },
  ),
    addEventListener(
      "keyup",
      (t) => {
        const o = ba(t.key);
        o && J.delete(o);
      },
      { capture: !0, signal: m.signal },
    ),
    addEventListener("blur", () => J.clear(), { signal: m.signal }),
    addEventListener(
      "click",
      (t) => {
        if (!ke() || t.button || t.metaKey || t.ctrlKey || t.shiftKey || t.altKey) return;
        const o = t.target instanceof Element ? t.target.closest("a") : null;
        o?.hash &&
          o.origin === location.origin &&
          o.pathname === location.pathname &&
          document.getElementById(decodeURIComponent(o.hash.slice(1))) &&
          De();
      },
      { capture: !0, signal: m.signal },
    );
  function zs(t, o) {
    if (!ke() || b) return !1;
    if (o) {
      const r = o.timeStamp,
        c = or(r, U);
      if (((U = r), $n() && c)) return De(), !1;
    }
    return i === "play" && !b && (z = Tt(z - t / 400, -1, 1)), !0;
  }
  const Vt = (t) => t - (f?.offset ?? 0);
  function ke() {
    return i === "play" || i === "finish" || i === "over";
  }
  function $n() {
    return i === "finish" || i === "over";
  }
  const fn = () => (b ? Tt((h - H) / Ur, 0, 1) : 0),
    dn = () => {
      const t = fn();
      return 1 - t * t * (2.3 * t - 1.3);
    },
    lo = () => 1 - rs(Tt((fn() - 0.6) / 0.4, 0, 1)),
    be = () => (q ? k.z : Math.max(k.r, at) + ot.ramp + ft.z - (1 - we) * k.r - (1 - dn()) * (k.r - $)),
    un = (t, o) => {
      const r = (q ? (k.pinch ?? 1) : 1) * dn();
      return [t[0] + o[0] * Ie * r, t[1] + o[1] * Ie * r, t[2] + o[2] * we * r];
    },
    co = () => {
      if (!q) return 0;
      const t = k,
        o = t.r * (t.pinch ?? 1);
      return Tt((o - t.z) / (2 * o), 0, 1);
    };
  function As(t) {
    const o = k;
    let r = { dir: st.dirs[0], ra: 0 },
      c = -2;
    const y = (d, p) => {
      const u = Te(o.q, d),
        x = u[0] * t[0] + u[1] * t[1] + u[2] * t[2];
      x > c && ((c = x), (r = { dir: d, ra: p }));
    };
    for (const d of st.dirs) y(d, 0);
    for (const d of Qt) d.landed && d.ra >= 0.85 * o.r && y(d.dir, d.ra);
    return r;
  }
  const Bt = Dr(e.words, {
      playing: () => i === "play" && !b && !q,
      up: () => ft.z > 0.15 * k.r,
      onBall: un,
      nodeNear: As,
      ball: () => k,
      clock: () => h,
      geo: () => f,
      boxes: () => (Yt.length ? [...vt, ...Yt] : vt),
      centreZ: be,
      fade: () => lo() * (1 - co()),
      size: dn,
      rowOf: (t, o) => t - o.offset,
    }),
    hn = xa(e.lift),
    Wn = (t) => Math.hypot(t[0] - k.x, t[1] - k.y, t[2] - be());
  function Ts() {
    const t = k,
      o = qa(t.r);
    for (const c of e.graphs()) {
      _e.set(c.name, c.nodes.length);
      const y = ja(c, t.x, t.y, o, no);
      for (const d of no) {
        const p = c.nodes[d],
          u = [c.anchor[0] + p.x, c.anchor[1] + p.y + c.offset, c.anchor[2] + p.z];
        fo(u, c.ink, Ba(c.index, d), y ? Wn(u) / 3e3 : 0),
          c.gone.add(d),
          an.add(c.gone),
          (Re[c.name] = (Re[c.name] ?? 0) + 1);
      }
    }
    const r = e.hero();
    if (r.length) {
      _e.set("Home", Math.max(_e.get("Home") ?? 0, r.length));
      for (const c of Ka(r, e.heroGone, t.x, t.y, o, gs))
        uo(c, Math.hypot(c.at[0] - t.x, c.at[1] - t.y) < o ? 0 : Math.min(0.7, Wn(c.at) / 3e3));
    }
  }
  function fo(t, o, r, c) {
    const y = k,
      d = [t[0] - y.x, t[1] - y.y, t[2] - be()],
      p = Math.hypot(...d),
      u = Da(y.q, p > 1e-6 ? d.map((R) => R / p) : [0, 0, 1]),
      x = y.r * (0.92 + 0.16 * r),
      w = u.map((R) => R * x);
    let S = 1,
      I = 1 / 0;
    const B = (R, K) => {
      const N = Math.hypot(w[0] - K[0], w[1] - K[1], w[2] - K[2]);
      N < I && ((I = N), (S = R));
    };
    st.dirs.forEach((R, K) =>
      B(
        K + 1,
        R.map((N) => N * y.r),
      ),
    ),
      Qt.forEach((R, K) =>
        B(
          st.dirs.length + 1 + K,
          R.dir.map((N) => N * R.ra),
        ),
      ),
      Qt.push({ ink: o, from: [...t], t0: h + c, dir: u, ra: x, near: S, landed: !1 });
  }
  function uo(t, o) {
    e.heroGone.add(t.w),
      an.add(e.heroGone),
      (Re.Home = (Re.Home ?? 0) + 1),
      fo(t.at, t.ink, sn(t.w + 977), o);
  }
  function Os() {
    for (const t of e.hero()) e.heroGone.has(t.w) || uo(t, Math.min(0.7, Wn(t.at) / 3e3));
  }
  function Es() {
    let t = !1;
    for (const o of Qt) o.landed || (h >= o.t0 + ge.fly / 1e3 ? ((o.landed = !0), Xn(k, 1)) : (t = !0));
    t && Z();
  }
  function ho() {
    e.heroGone.size && (e.heroGone.clear(), ce.matches || e.replayHero());
  }
  function Ln() {
    ut = 0;
    for (const t of an) t.clear();
    an.clear(), (Qt = []), fs(C);
    for (const t of Object.keys(Re)) delete Re[t];
    _e.clear(),
      Bt.clear(),
      Object.assign(ft, Io()),
      (Ie = we = 1),
      ot.clear(),
      (q = null),
      (Rt = 0),
      (A = 0),
      Ft.fill(0),
      wn(kt),
      ln(null),
      hn.clear();
  }
  function Hs() {
    if (!f) return;
    const t = e.measure(),
      o = Math.min(Math.round(0.13 * f.H), Math.max(24, Math.round(rt.size * f.W)));
    (wt = t.end - t.trackTop + f.H),
      (mt = wt + (Sa - 1) * f.H),
      (Ot = o),
      (rt.radius = Ot),
      (k = Ro({ x: f.W / 2, y: mt, width: f.W, height: f.H, startY: mt, finishY: 0, radius: Ot })),
      (k.vy = 0),
      (st = Fo()),
      (at = Ot),
      (dt = !1),
      (i = "pad"),
      le.load(),
      (O = 0),
      (M = null),
      n.show(!nt),
      Ws(f);
  }
  const Cs = (t) => Math.max(innerHeight / 2, t - Ge(fe())),
    $s = () => innerHeight / 2,
    po = (t, o, r = 1 / 0) => {
      v.y = Math.abs(t - v.y) < 0.5 ? t : v.y + Math.max((t - v.y) * (1 - Math.exp(-14 * o)), -r * o);
    },
    pn = (t, o, r) => t.focusRow + o - r;
  function mo(t, o, r, c, y) {
    let d = 1 / 0,
      p = -1 / 0;
    for (const [u, x] of Do(c)) {
      const w = lt(t, t.W / 2, pn(t, o, y) + u, r + x);
      w && ((d = Math.min(d, w.y)), (p = Math.max(p, w.y)));
    }
    return d < p ? [d, p] : [-1 / 0, -1 / 0];
  }
  const Je = () => {
    const t = k?.n ?? 0;
    let o = Bt.size;
    for (const r of _e.values()) o += r;
    return {
      dist: mt - Pt,
      r: k?.r ?? 0,
      nodes: t,
      words: Bt.picked,
      jumps: ot.jumpPoints,
      share: o ? (t + Bt.picked) / o : 0,
    };
  };
  function Ws(t) {
    if (!k) return;
    const o = Pe(
      (r) => lt(t, t.W / 2, pn(t, r, innerHeight / 2))?.y ?? 1 / 0,
      Yr * innerHeight,
      -2 * innerHeight,
      2 * innerHeight,
    );
    (Pt = Tt(o - Ze(t.W), 0, 2 * innerHeight)), (k.finishY = Pt);
  }
  function mn(t, o, r, c, y = new Map(), d = !1, p = (u) => u) {
    const u = Ze(t.W),
      x = c - u / 2,
      w = (se, Me, de = 0) => lt(t, se, pn(t, Me, r), de),
      S = (se) => {
        const [Me, de] = [w(0, c, se), w(t.W, c, se)];
        return Me && de ? de.x - Me.x : innerWidth;
      },
      I = w(t.W / 2, c)?.y ?? innerHeight,
      B = Math.min(innerWidth - 32, n.short ? $r : to),
      [R, K] = [0, t.W].map((se) => lt(t, se, t.focusRow)),
      N = Math.max(B, R && K ? K.x - R.x : innerWidth);
    let [it, zt, Kt, Zt, re, _t] = [1, 0, 0, 0, 0, 0];
    for (let se = 0; se < 2; se++) {
      const Me = Math.min(1, (innerWidth - 32) / Math.max(S(0), S(_t))),
        de = Math.min(Me, N / S(0));
      (it = d ? Me : de),
        (zt = Math.round(it * S(0))),
        (Zt = Math.max(Math.round(de * S(0)), B)),
        (Kt = p(Math.max(zt, B), Zt)),
        (re = y.get(Kt) ?? o(Kt, Zt)),
        y.set(Kt, re);
      const He = (re * zt) / Kt;
      _t = Pe((Ve) => I - (w(t.W / 2, c, Ve)?.y ?? I), He, 0, 8 * He);
    }
    const je = (t.W * (1 - it)) / 2,
      tn = w(t.W / 2, x, _t)?.y ?? I - re;
    return { face: c, back: x, x0: je, x1: t.W - je, hz: _t, w: Kt, tw: Zt, ht: re, top: tn };
  }
  function Ls(t, o, r, c) {
    const d = $s(),
      p = Pt - Ze(t.W),
      u = mn(
        t,
        (K, N) => n.measure(o, K, N),
        d,
        p,
        void 0,
        !0,
        (K, N) => n.fit(o, K, N),
      ),
      x = (K) => mo(t, K, Ua(qt, c, Vt(K), r, t.rise), r, d),
      w = (K) => x(K)[0],
      S = (K) => x(K)[1],
      I = u.back - r,
      B = S(I) > u.top - 4 ? Pe(S, u.top - 4, -innerHeight, I) : I,
      R = w(-innerHeight) >= 12 ? -1 / 0 : Pe(w, 12, -innerHeight, I);
    return { face: p, slab: u, c: d, lo: R, hi: B, r, x: c };
  }
  function Pn({ lo: t, hi: o, r, x: c }, y) {
    const d = e.heroCard();
    return [Tt(d ? d[0] : c, r, y - r), Math.max(t, Math.min(o, d ? d[1] : o - r))];
  }
  function Ps(t, o, r) {
    const [c, y] = Pn(M, r.W),
      d = c - t.x,
      p = y - t.y,
      u = Math.hypot(d, p),
      x = Math.hypot(t.vx, t.vy);
    if (u < 0.5) {
      t.vx = t.vy = 0;
      return;
    }
    const w = 1 - Math.exp(-6 * o),
      S = t.vx / x + (d / u - t.vx / x) * w,
      I = t.vy / x + (p / u - t.vy / x) * w,
      B = Math.hypot(S, I) || 1;
    (t.vx = (x * S) / B), (t.vy = (x * I) / B), (O = Go({ y: u, v: x }, 0));
  }
  const Is = (t, o) => o.y - o.R * ot.openK() - Ze(t.W) / 2,
    Rs = () => {
      ln(null),
        (X = null),
        (a.vx = a.vy = 0),
        n.grab.classList.remove("is-held"),
        n.placeGrab(null),
        n.showCard(!1);
    };
  let In = 1;
  const Fs = (t) => {
    (t = Math.round(t * 100) / 100),
      t !== In &&
        ((In = t),
        t < 1
          ? n.layer.style.setProperty("--game-fade", String(t))
          : n.layer.style.removeProperty("--game-fade"));
  };
  function gn() {
    Rs(),
      (i = "idle"),
      (b = !1),
      (T = 1),
      (In = 1),
      (ye = null),
      Object.assign(E, { h: 0, v: 0 }),
      Object.assign(G, { hover: !1, down: !1 }),
      Ln(),
      Bt.drop(),
      (bt = !1),
      (k = st = null),
      (ee = null),
      (ne = !1),
      J.clear(),
      e.takeover(!1),
      (n.layer.inert = !1),
      n.layer.style.removeProperty("--game-fade"),
      n.run(!1),
      n.place(""),
      n.placeBar(""),
      (xt = null),
      n.show(!1),
      Z();
  }
  function go(t = 0) {
    const o = lt(f, f.W / 2, f.focusRow + k.y - v.y, be()),
      r = o ? (f.W * Math.tan(f.fov / 2) * o.z) / f.H : f.W / 2,
      { r: c } = k,
      y = f.W / 2 - r + c,
      d = f.W / 2 + r - c;
    return [y + t * Math.max(0, Math.min(c, d) - y), d - t * Math.max(0, d - Math.max(f.W - c, y))];
  }
  function qs(t) {
    const o = k,
      r = Ge(fe()),
      c = (u) => (J.has(u) ? 1 : 0);
    z *= Math.exp(-1.8 * t);
    let y = [];
    if (q) vs(t);
    else {
      ot.onPads();
      const u = c("right") - c("left");
      (y = Ra(o, { steer: u, throttle: Tt(c("up") - c("down") + z, -1, 1) }, t, {
        camY: v.y,
        slope: (x) => Ko(f, f.focusRow - x),
        sides: go(ot.fenced(o.y)),
        blocks: e.blocks(),
        boost: ot.boostK(),
        push: ot.pushAt(),
        ramp: (x, w) => (ft.air ? 0 : jo(qt, x, Vt(w), o.r, f.rise, dt ? 1 / 0 : at).t),
      })),
        ot.rideRamps(),
        xs(),
        q || (Ts(), Bt.crawl());
    }
    const d = l(o.t);
    d !== et && n.time((et = d));
    const p = y.find((u) => u.type === "finish");
    if ((p && js(p.left), i === "finish")) return Z();
    q?.card
      ? po(Cn, t)
      : V && v.y < o.y - r - rt.camMax
        ? (v.y += (o.y - r - v.y) * (1 - Math.exp(-14 * t)))
        : ((V = !1), Fa(v, o, t, r, rt.camSpeed + ot.boostK() * Math.max(0, rt.boostSpeed - rt.cruise))),
      yn(),
      Z();
  }
  function js(t) {
    const o = k;
    (i = "finish"), ot.collapse(ce.matches), Bt.retire(), (F = h), J.clear(), (z = 0), Os();
    const r = f,
      c = { ...o };
    Xn(c, Qt.filter((I) => !I.landed).length);
    const y = Nn(Je(), l(o.t), s);
    n.fill(y);
    const d = Ls(r, y, c.r, o.x);
    ($t = d.slab), (Ut = d.face), (te = d.c), (M = d);
    const [p, u] = Pn(d, r.W),
      x = Math.hypot(p - o.x, u - o.y),
      w = Math.hypot(o.vx, o.vy),
      S = Math.max(1, x / 1.2 / Math.max(1, w));
    w ? Object.assign(o, { vx: o.vx * S, vy: o.vy * S }) : Object.assign(o, { vy: -x / 1.2 }),
      (O = Go({ y: x, v: Math.hypot(o.vx, o.vy) }, 0)),
      t > 0 && Bo(o, t, yo(r)),
      ce.matches || Bs(r, { back: u - c.r, top: mo(r, u, 0, c.r, d.c)[0] }, d.c);
  }
  function Bs(t, o, r) {
    wn(kt),
      (W = [...new Map(Qt.map((p) => [p.ink.join(), p.ink])).values()].slice(0, 8)),
      W.length || (W = [rt.colour]);
    const c = (p, u, x) => lt(t, p, pn(t, u, r), x),
      y = Ze(t.W),
      d = 0.1 * innerHeight;
    for (let p = 0; p < 5; p++) {
      const u = t.W * (0.2 + 0.15 * ((p * 3) % 5) + 0.05 * (Math.random() - 0.5)),
        x = o.back - y * (1 + 2 * Math.random()),
        w = pe(d, Math.max(d, o.top - 40), Math.random()),
        S = Pe((K) => -(c(u, x, K)?.y ?? -1 / 0), -w, 0, 20 * innerHeight),
        I = c(u, x, S),
        B = c(u + 100, x, S),
        R = I && B ? Math.max(0.02, Math.hypot(B.x - I.x, B.y - I.y) / 100) : 1;
      rr(kt, [u, x, 0], [u, x, S], {
        delay: 0.1 + 0.55 * p + 0.15 * Math.random(),
        rise: 0.65 + 0.2 * Math.random(),
        spread: (0.13 * Math.min(innerWidth, innerHeight)) / R,
        ink: p % W.length,
      });
    }
  }
  const Ee = [0, 0, 0],
    Ue = [0, 0, 0];
  function Ks(t, o) {
    const r = kt,
      c = ve.layers.graph.size,
      y = o.rise * ve.layers.graph.alpha,
      d = (p, u) => ((p[0] = r.p[u]), (p[1] = r.p[u + 1] - o.offset), (p[2] = r.p[u + 2]), p);
    for (let p = 0; p < ae; p++) {
      const u = W[r.ink[p]] ?? Wt;
      if (r.state[p] === 2)
        ir(r, p, Ee),
          (Ee[1] -= o.offset),
          (Ue[0] = r.from[3 * p]),
          (Ue[1] = r.from[3 * p + 1] - o.offset),
          (Ue[2] = r.from[3 * p + 2]),
          t.segC(Ue, Ee, u, Wt, 0, 0.3 * y),
          t.dot(Ee, 0.6 * c, Wt, y);
      else if (r.state[p] === 3) {
        const x = p * Oe;
        for (let w = 0; w < r.n[p]; w++) {
          const S = Tt(1 - r.t[p] / r.life[x + w], 0, 1),
            I = y * S * Math.sqrt(S),
            B = r.up[x + w];
          if ((d(Ee, 3 * (x + w)), B < 0)) {
            t.dot(Ee, -1.6 * c * (0.4 + 0.6 * S), Wt, I);
            continue;
          }
          d(Ue, 3 * (x + B)),
            t.segC(Ue, Ee, u, Wt, (B ? 0.5 : 0.8) * I, (B ? 0.5 : 0.8) * I),
            t.dot(Ee, c * (0.35 + 0.65 * S), B ? u : Wt, I);
        }
      }
    }
  }
  const yo = (t) => ({
    slope: O ? () => 0 : (o) => Ko(t, Vt(o)),
    ...(O ? null : Ns(t)),
    sides: go(),
    blocks: e.blocks(),
    air: ft.z > 0.5,
    friction: O || rt.friction,
  });
  function Ns(t) {
    const [o, r] = [0.08 * innerHeight, innerHeight - 160],
      c = k.r,
      y = `${c} ${t.offset} ${o} ${r} ${t.H}`;
    return y === gt && Et
      ? Et
      : ((gt = y),
        (Et = Ja(
          (d, p) => {
            let u = null;
            for (const [x, w] of Do(c)) {
              const S = lt(t, t.W / 2, d + x, c + w);
              S && (u = u === null ? S.y : p ? Math.max(u, S.y) : Math.min(u, S.y));
            }
            return u ?? -1 / 0;
          },
          t.T,
          t.offset,
          o,
          r,
        )));
  }
  function bo(t, o) {
    const r = k,
      c = (p, u, x) => {
        const w = r.q;
        xo(p, u, x), Gs(w);
      };
    let { vx: y, vy: d } = a;
    if (X) {
      const p = Vt(r.y),
        u = Math.max(r.r, at),
        x = lt(o, r.x, p, u),
        w = lt(o, r.x + r.r, p, u),
        S = x && w ? r.r / Math.max(1, Math.hypot(w.x - x.x, w.y - x.y)) : 1,
        I = X.ax * S,
        B = X.ay * S;
      (X.ax = X.ay = 0), c(I, B, 1);
      const R = 1 - 0.65 ** (60 * t);
      t > 0 && ((y += (I / t - y) * R), (d += (B / t - d) * R));
    } else if (y || d) {
      const p = 0.97 ** (60 * t);
      (y *= p), (d *= p), Math.hypot(y, d) < 3 && (y = d = 0), c(y, d, t);
    }
    Object.assign(a, { vx: y, vy: d });
  }
  function Rn(t) {
    const o = k;
    if (!st) return;
    const r = 1 + st.dirs.length;
    st.dirs.forEach((c, y) => t(y + 1, [c[0] * o.r, c[1] * o.r, c[2] * o.r])),
      Qt.forEach((c, y) => {
        c.landed && t(r + y, [c.dir[0] * c.ra, c.dir[1] * c.ra, c.dir[2] * c.ra]);
      });
  }
  function Gs(t) {
    if (ce.matches) return;
    const o = 0.3,
      r = k;
    Gn(C, 1 + (st?.dirs.length ?? 0) + Qt.length),
      Rn((c, y) => {
        const [d, p] = [Te(t, y), Te(r.q, y)];
        mr(C, c, [o * (d[0] - p[0]), o * (d[1] - p[1]), o * (d[2] - p[2])]);
      });
  }
  function Ds() {
    if (ce.matches || !k) return;
    const t = k;
    Gn(C, 1 + (st?.dirs.length ?? 0) + Qt.length),
      Rn((o, r) => {
        const c = Te(t.q, r),
          y = (2.4 * t.r * (0.75 + 0.5 * sn(o))) / Math.hypot(...c);
        pr(C, o, [c[0] * y, c[1] * y, c[2] * y]);
      });
  }
  function Us(t, o) {
    const r = k;
    if (P && (P.ax || P.ay) && t > 0 && !ce.matches) {
      const { ax: c, ay: y } = P;
      P.ax = P.ay = 0;
      const d = Vt(r.y),
        p = be(),
        u = lt(o, r.x, d, p),
        x = lt(o, r.x + 1, d, p),
        w = lt(o, r.x, d + 1, p),
        S = lt(o, r.x, d, p + 1);
      if (u && x && w && S && x.x > u.x) {
        const I = x.x - u.x,
          [B, R] = [w.y - u.y, S.y - u.y],
          K = B * B + R * R || 1,
          N = 1.2 / t,
          it = [(N * c) / I, (N * B * y) / K, (N * R * y) / K],
          zt = (0.6 * I * r.r) ** 2,
          Kt = [r.x, d, p];
        Gn(C, 1 + (st?.dirs.length ?? 0) + Qt.length),
          Rn((Zt, re) => {
            const _t = lt(o, ...un(Kt, Te(r.q, re)));
            if (!_t) return;
            const je = (_t.x - P.x) ** 2 + (_t.y - P.y) ** 2;
            je < 4 * zt && hr(C, Zt, Math.exp(-je / zt), it, t);
          });
      }
    }
    yr(C, t, 0.6 * r.r) && Z();
  }
  function xo(t, o, r) {
    const c = { ...k, vx: t, vy: o };
    Na(c, r), (k.q = c.q);
  }
  function Ys(t) {
    if ((bo(t, f), !X)) {
      const o = h,
        r = Math.max(0, 1 - Math.hypot(a.vx, a.vy) / 80);
      xo(
        r * (22 * Math.sin(0.37 * o) + 10 * Math.sin(0.83 * o + 1.3)),
        r * (-30 + 12 * Math.sin(0.29 * o + 0.7)),
        t,
      );
    }
    _ && Z();
  }
  function Vs(t) {
    const r = i === "pad" ? (G.down ? Ae.down : G.hover || G.focus ? Ae.hover : Ae.rest) : Ae.gone,
      c = G.flips * Math.PI;
    E.aim !== c && Object.assign(E, { from: E.turn, aim: c, t: 0 });
    const y = E.turn;
    E.t = Math.min(_n, E.t + t);
    const d = E.t / _n;
    if (
      ((E.turn = d >= 1 ? c : E.from + (c - E.from) * d * d * (8 - 12 * d + 5 * d * d)),
      ce.matches || (Math.abs(r - E.h) < 0.05 && Math.abs(E.v) < 0.5 && E.turn === c))
    )
      return (
        (Y = !1), E.h === r && y === c ? void 0 : (Object.assign(E, { h: r, v: 0, turn: c, t: _n }), Z())
      );
    Y = !0;
    for (let p = t; p > 1e-6; p -= 1 / 120) {
      const u = Math.min(p, 0.008333333333333333),
        [x, w] = r === Ae.gone ? [30, 11] : [700, 30];
      (E.v += (x * (r - E.h) - w * E.v) * u), (E.h = Math.max(1.2 * Ae.gone, E.h + E.v * u));
    }
    Z();
  }
  function Zs(t) {
    const o = k,
      r = f,
      c = [o.x, o.y, v.y],
      y = o.q;
    M && O && (o.vx || o.vy) && Ps(o, t, r),
      (o.vx || o.vy) && Bo(o, t, yo(r)),
      bo(t, r),
      po(te, t, rt.camSpeed),
      yn(),
      (yt = c[0] !== o.x || c[1] !== o.y || c[2] !== v.y || o.q !== y),
      n.fill(Nn(Je(), l(o.t), s)),
      (yt || !ie || h - ie.at < ao + 0.05) && Z();
  }
  function Xe() {
    if (!X) return;
    const { id: t, t0: o, moved: r } = X;
    (X = null),
      n.grab.classList.remove("is-held"),
      n.grab.hasPointerCapture?.(t) && n.grab.releasePointerCapture(t),
      h - o < 0.35 && r < 8 && ((a.vx = a.vy = 0), !ft.air && ft.press < 0 && (ft.press = h)),
      Z();
  }
  function _s() {
    if (!rt.props || b || q || (i !== "play" && i !== "finish")) return;
    const t = k,
      o = t.r,
      r = Math.hypot(t.vx, t.vy);
    if ((t.x - o > 0 && t.x + o < t.width) || r < 60) return;
    const c = { z: be(), R: rt.propReach * o, r: o, v: [t.vx, t.vy], power: Tt(r / rt.cruise, 0.5, 1.6) };
    let y = e.bump({ col: t.x, y: t.y, ...c });
    t.touch && (y += e.bump({ col: t.touch[0], y: t.touch[1], ...c })), y && ((ut += y), Z());
  }
  function Js() {
    !$n() || b || !k || ye !== null || (wn(kt), (ye = h), Z());
  }
  function Xs() {
    (ye = null),
      k &&
        (Xe(),
        (a.vx = a.vy = 0),
        Object.assign(
          k,
          Ro({
            x: k.width / 2,
            y: mt,
            width: k.width,
            height: k.height,
            startY: mt,
            finishY: Pt,
            radius: Ot,
          }),
          { vy: 0 },
        ),
        (st = Fo()),
        ho(),
        Ln(),
        e.resetProps(),
        (at = Ot),
        (dt = !1),
        (O = 0),
        (M = null),
        (et = ""),
        J.clear(),
        (i = "pad"),
        e.takeover(!1),
        Object.assign(G, { hover: !1, down: !1 }),
        (ne = !0),
        n.showCard(!1),
        ln(null),
        n.placeGrab(null),
        n.run(!1),
        n.show(!nt),
        (v.y = mt - Ge(fe())),
        yn(),
        Z());
  }
  const Ye = (t, o) => {
      (G[t] = o), Z();
    },
    Fe = { signal: m.signal };
  n.button.addEventListener(
    "pointerenter",
    (t) => {
      t.pointerType === "mouse" && i === "pad" && !ce.matches && G.flips++,
        Ye("hover", !0),
        t.pointerType === "mouse" &&
          i === "pad" &&
          k &&
          !ft.air &&
          ft.press < 0 &&
          !ce.matches &&
          ((ft.vz = (2 * Ta(k.r, fe())) / Oa.rise / 3), (ft.air = !0), Z());
    },
    Fe,
  ),
    n.mute.addEventListener(
      "click",
      (t) => {
        (Xt = !Xt), n.muted(Xt);
        try {
          localStorage.setItem(ms, Xt ? "1" : "0");
        } catch {}
        Xt || le.wake(), t.detail && n.mute.blur(), Z();
      },
      Fe,
    ),
    n.button.addEventListener(
      "pointerleave",
      () => {
        (G.down = !1), Ye("hover", !1);
      },
      Fe,
    ),
    n.button.addEventListener("pointerdown", (t) => t.button === 0 && Ye("down", !0), Fe);
  for (const t of ["pointerup", "pointercancel"]) n.button.addEventListener(t, () => Ye("down", !1), Fe);
  n.button.addEventListener("focus", () => Ye("focus", n.button.matches(":focus-visible")), Fe),
    n.button.addEventListener("blur", () => Ye("focus", !1), Fe);
  const Fn = (t) => {
    const { left: o, top: r } = e.canvas();
    return { x: t.clientX - o, y: t.clientY - r };
  };
  let qe = null;
  n.grab.addEventListener(
    "pointerdown",
    (t) => {
      (i !== "finish" && i !== "pad") ||
        b ||
        ye !== null ||
        !k ||
        !f ||
        !t.isPrimary ||
        t.button !== 0 ||
        (t.preventDefault(),
        n.grab.setPointerCapture(t.pointerId),
        (qe = Fn(t)),
        (X = { id: t.pointerId, ax: 0, ay: 0, x0: qe.x, y0: qe.y, t0: h, moved: 0 }),
        (a.vx = a.vy = 0),
        n.grab.classList.add("is-held"),
        Ds(),
        Z());
    },
    { signal: m.signal },
  ),
    n.grab.addEventListener(
      "pointermove",
      (t) => {
        if (!X && t.pointerType !== "touch") {
          const r = Fn(t);
          P = P ? { ...r, ax: P.ax + r.x - P.x, ay: P.ay + r.y - P.y } : { ...r, ax: 0, ay: 0 };
          return;
        }
        if (X?.id !== t.pointerId || !qe) return;
        if (!t.buttons) return Xe();
        const o = Fn(t);
        (X.ax += o.x - qe.x),
          (X.ay += o.y - qe.y),
          (X.moved = Math.max(X.moved, Math.hypot(o.x - X.x0, o.y - X.y0))),
          (qe = o),
          Z();
      },
      { signal: m.signal },
    ),
    n.grab.addEventListener(
      "pointerleave",
      () => {
        P = null;
      },
      { signal: m.signal },
    );
  for (const t of ["pointerup", "pointercancel", "lostpointercapture"])
    n.grab.addEventListener(
      t,
      (o) => {
        X?.id === o.pointerId && Xe();
      },
      { signal: m.signal },
    );
  function yn() {
    const t = Ga(v.y, fe(), j, L);
    (v.y = t.camY), e.drive(L + t.scroll, t.over);
  }
  function Qs(t) {
    const o = performance.now();
    Q = !0;
    try {
      ta(t);
    } finally {
      (Q = !1), Mt && ((Mt = !1), e.redraw());
    }
    Nt = performance.now() - o;
  }
  function ta(t) {
    if (jt || !f) return;
    const o = Math.min(0.05, Math.max(0, (t - tt) / 1e3));
    (tt = t),
      (h += o),
      le.update(
        Ma({
          phase: i,
          ending: b,
          ball: k,
          boosts: ot.boosts,
          falls: Rt,
          jumps: ot.jumps,
          hops: ft.n,
          air: !!q || ft.z > 0.15 * (k?.r ?? 0),
          nodes: k?.n ?? 0,
          words: Bt.picked,
          lands: ft.lands,
          thud: ft.thud,
          bursts: A,
          bumps: ut,
          muted: Xt,
        }),
      );
    const r = i === "pad" ? e.shown() : e.on();
    if (i !== "idle" && k && (!r || Math.abs(f.W - k.width) > 1)) {
      const w = r;
      ke() ? De(!0) : gn(), w && (g = !0);
    }
    const c = fe(),
      y = e.end(),
      d = e.over();
    if (i === "idle") {
      if (!g) {
        const w = lt(f, f.W / 2, Vt(mt) - 400);
        (!w || w.y > c || d >= 0.8 * qo(c)) && (g = !0);
      }
      g && e.shown() && (d > 0 || scrollY >= y - 1.5 * c) && Hs();
    } else i === "pad" && d <= 0 && scrollY < y - 2 * c && gn();
    if (i === "idle" || !k) return;
    if ((i === "pad" && Fs(f.rise), ye !== null && !b && (h - ye >= os ? Xs() : Z()), b)) {
      const w = i === "finish" && e.hero().find((S) => S.w === -1);
      if (
        (w && Math.hypot(w.at[0] - k.x, w.at[1] - k.y) < k.r && ($ = w.at[2]),
        (T = Tt(T - (o * 1e3) / ge.fade, 0, 1)),
        !T && fn() >= 1)
      )
        return gn();
      n.layer.style.setProperty("--game-fade", String(T)), Z();
    } else i === "play" || i === "over" ? qs(o) : i === "finish" ? Zs(o) : i === "pad" && Ys(o);
    Es(), _s(), Vs(o), cr(kt, o) && Z();
    for (let w = 0; w < kt.state.length; w++) {
      const S = kt.state[w] === 3;
      S && !Ft[w] && A++, (Ft[w] = +S);
    }
    Ea(ft, o, h, k.r, fe()),
      (we = 1 - ft.s),
      (Ie = 1 / Math.sqrt(we)),
      Bt.stepLegs(o),
      ea(o),
      Us(o, f),
      (Ha(ft) || Bt.legs.length || (i === "play" && ot.opening()) || (q && !q.card)) && Z(),
      ke() && (bt && ((bt = !1), Bt.reindex()), Bt.syncStrip());
    const p = jo(qt, k.x, Vt(k.y), k.r, f.rise, dt ? 1 / 0 : at),
      u = p.z;
    dt && !p.ramp && u < at && !q && ((ft.z += at - u), (ft.air = !0), (ft.press = -1), (at = u)),
      (dt = p.ramp);
    const x = p.ramp ? u : at + (u - at) * (1 - Math.exp(-30 * o));
    Math.abs(x - at) > 0.01 && ((at = x), Z());
  }
  function ea(t) {
    const o = ve.layers.inspect;
    if (!o.on || o.always) {
      hn.clear() && Z();
      return;
    }
    hn.set(Bt.texts);
    const r = k;
    hn.step({
      dt: t,
      clock: h,
      touching: i === "play" && !b && !q && ft.z < 0.15 * r.r && !!f,
      ending: b,
      small: !!f && f.W < 700,
      hold: o.hold,
      ball: r,
      reach: rt.touch,
    }) && Z(),
      e.rollTitles(i === "play" && !b && !q ? { col: r.x, y: r.y, r: r.r, vx: r.vx, vy: r.vy } : null);
  }
  let vo = [];
  function na(t, o, r) {
    if (
      ((f = o),
      (vo = t.labels),
      (Yt = r.filter((D) => D.text)),
      (vt = Yt.length ? r.filter((D) => !D.text) : r),
      (qt = vt.filter((D) => D.alpha > 0.05 && D.top > 0)),
      (ht = oa(o)),
      ln(o),
      i === "idle" || !k || !st || jt || (n.show(!nt), nt))
    )
      return;
    const c = performance.now(),
      { W: y } = f,
      d = k.r,
      p = Vt(k.y),
      u = y / 2,
      x = qn(f);
    Ho(f, x);
    const w = ve.callouts.alpha * ve.layers.rulers.alpha * f.rise * T,
      I = `500 ${(12 * (ve.layers.rulers.size / 12)).toFixed(1)}px "Shopify Inter", system-ui, sans-serif`,
      B = (D, pt) => {
        const At = (St, It) => t.seg(St, It, Wt, w);
        At([0, D], [y, D]);
        for (const St of [0, y])
          At([St, D - 6], [St, D + 6]), At([St + (St ? -4 : 4), D + 4], [St + (St ? 4 : -4), D - 4]);
        const Lt = t.labels.length;
        if (
          (t.flat(s.format("pageWidth", { width: s.number(y) }), [u, D + 20], {
            alpha: w,
            align: "center",
            font: I,
          }),
          pt)
        )
          for (const St of t.labels.slice(Lt)) delete St.z;
      },
      R = xt ? Math.max(x.wr, Vt(xt.face) + x.wr - x.face) : x.wr;
    (lt(f, u, R + 20)?.y ?? 1 / 0) + 16 < f.H && B(R, !0), B(Vt(wt) + 24, !1);
    const K = (D, pt, At) => lt(o, D, pt, At);
    t.fills.push(...tr(Vt(Pt), y, f.T, f.rise, Wt, fn(), K)),
      cn(t, $t, Hn() * ($t?.hz ?? 0)),
      Ss(t),
      Ks(t, f),
      Ca(t, f, ot.pads, ot.liftK(), f.rise * ot.openK(), ot.downK(), h),
      $a(t, f, ot.pushes, ot.openK(), f.rise * ot.openK(), h),
      Wa(t, f, ot.holes, ot.openK(), f.rise * (b ? 1 : ot.openK()), h),
      La(
        t,
        f,
        ot,
        ot.openK(),
        T * ve.callouts.alpha * f.rise,
        (D) =>
          D.j < 0
            ? s.format("finaleLine", { height: s.number(ot.jumpH(D)) })
            : s.format("boostLine", { speed: s.number(rt.boostSpeed), height: s.number(ot.jumpH(D)) }),
        q ? { hole: q.h, k: 1 - Hn() } : void 0,
        s,
      ),
      wo(f);
    const N = ee ? Eo(x) * (xt?.hz ?? 0) : 0;
    if (xt?.slot) {
      const D = x.fw / 2 + Mo;
      cn(t, { ...xt, x1: u - D }, N), cn(t, { ...xt, x0: u + D }, N);
    } else cn(t, xt, N);
    i === "pad" || Qe() + x.hz > 0.5 ? (ko(f, x), ia(t, f, x)) : n.place("");
    const it = [k.x, p, be()],
      zt = lt(f, ...it);
    if (((_ = !!zt && zt.y > -2 * d && zt.y < f.H + 2 * d), !zt)) return;
    const Kt = ve.layers.graph,
      Zt = dn(),
      re = Kt.size * Tt(Zt / 0.3, 0, 1),
      _t = f.rise * Kt.alpha * lo(),
      je = co(),
      tn = _t * Kt.shadow * (1 - je),
      se = rt.colour,
      Me = 2 * Kt.width,
      de = q ? Pa(f, q.h, ot.openK()) : null,
      He = (D) => !!de && D[2] < 0,
      Ve = (D, pt, At, Lt, St, It, $e = 0) => {
        if (!de || (!He(D) && !He(pt))) {
          t.segC(D, pt, At, Lt, St, It), tn > 0.003 && t.shadowThick(D, pt, tn * $e, Me);
          return;
        }
        const We = (Jt) => [pe(D[0], pt[0], Jt), pe(D[1], pt[1], Jt), pe(D[2], pt[2], Jt)],
          ue = (Jt) => At.map((oe, xe) => pe(oe, Lt[xe], Jt)),
          Be = (Jt, oe) => t.segC(We(Jt), We(oe), ue(Jt), ue(oe), pe(St, It, Jt), pe(St, It, oe));
        let Le = 0,
          en = 1;
        He(D)
          ? He(pt) || ((en = pt[2] / (pt[2] - D[2])), Be(1 - en, 1), (en = 1 - en))
          : ((Le = D[2] / (D[2] - pt[2])), Be(0, Le));
        const nn = (Jt) => de(We(Jt)),
          Bn = (Jt, oe, xe, Se) =>
            t.segC(
              [oe[0], oe[1], oe[2]],
              [Se[0], Se[1], Se[2]],
              ue(Jt),
              ue(xe),
              pe(St, It, Jt) * oe[3],
              pe(St, It, xe) * Se[3],
            );
        let xn = Le,
          Ke = nn(Le);
        for (let Jt = 1; Jt <= 6; Jt++) {
          const oe = Le + ((en - Le) * Jt) / 6,
            xe = nn(oe);
          if (Ke[3] > 0 && xe[3] > 0) Bn(xn, Ke, oe, xe);
          else if (Ke[3] > 0 != xe[3] > 0) {
            let Se = xn,
              vn = oe;
            for (let Lo = 0; Lo < 6; Lo++) {
              const Kn = (Se + vn) / 2;
              nn(Kn)[3] > 0 == Ke[3] > 0 ? (Se = Kn) : (vn = Kn);
            }
            Ke[3] > 0 ? Bn(xn, Ke, Se, nn(Se)) : Bn(vn, nn(vn), oe, xe);
          }
          (xn = oe), (Ke = xe);
        }
      },
      bn = 5,
      Wo = (D, pt, At, Lt, St, It) => {
        if (!pt || Math.abs(pt[0]) + Math.abs(pt[1]) + Math.abs(pt[2]) < 0.5)
          return Ve(it, D, At, Lt, St, St, It);
        const $e = (ue) => (At === Lt ? At : At.map((Be, Le) => pe(Be, Lt[Le], ue)));
        let We = it;
        for (let ue = 1; ue <= bn; ue++) {
          const Be = gr(it, D, pt, ue / bn);
          Ve(We, Be, $e((ue - 1) / bn), $e(ue / bn), St, St, It), (We = Be);
        }
      },
      la = (D) => (i === "pad" ? 1 + 0.06 * Math.sin(1.6 * h + 2.4 * D) : 1),
      Ce = [
        it,
        ...st.dirs.map((D, pt) => {
          const At = d * la(pt),
            Lt = un(
              it,
              Te(
                k.q,
                D.map((It) => It * At),
              ),
            );
          if (!C.on) return Lt;
          const St = Dn(C, pt + 1);
          return [Lt[0] + St[0], Lt[1] + St[1], Lt[2] + St[2]];
        }),
      ];
    for (const [D, pt] of st.links)
      D
        ? Ve(Ce[D], Ce[pt], se, se, _t * 0.4, _t * 0.4, 0.3)
        : Wo(Ce[pt], C.on ? Dn(C, pt) : null, se, se, _t, 0.5);
    const ca = Ce.length;
    for (const D of Qt) {
      const pt = Te(
          k.q,
          D.dir.map((We) => We * D.ra),
        ),
        At = Jn(Tt((h - D.t0) / (ge.fly / 1e3), 0, 1)),
        Lt = [D.from[0], Vt(D.from[1]), D.from[2]],
        St = un(it, pt),
        It = C.on ? Dn(C, Ce.length) : null,
        $e = [
          Lt[0] + (St[0] - Lt[0]) * At + (It ? It[0] * At : 0),
          Lt[1] + (St[1] - Lt[1]) * At + (It ? It[1] * At : 0),
          Lt[2] + (St[2] - Lt[2]) * At + (It ? It[2] * At : 0),
        ];
      Ce.push($e),
        Wo($e, It && [It[0] * At, It[1] * At, It[2] * At], D.ink, Wt, _t, 0.5),
        Ve(Ce[D.near], $e, Wt, Wt, _t * ns, _t * ns, 0.3);
    }
    Ce.forEach((D, pt) => {
      const At = pt < ca ? se : Wt;
      if (He(D)) {
        const Lt = de(D);
        t.dot([Lt[0], Lt[1], Lt[2]], pt ? re : -2 * re, At, _t * Lt[3]);
        return;
      }
      t.dot(D, pt ? re : -2 * re, At, _t), t.shadowDot(D, pt ? re : -2 * re, tn * (pt ? 0.8 : 1));
    }),
      (Gt = performance.now() - c);
  }
  function oa(t) {
    if (!Ct) return i === "idle" || !k || jt ? null : Ia(t, ot.holes, 1, ot.openK());
    const o = wa(t, Ct.col, Ct.row, Ct.R);
    return o ? { shape: ka(t), list: [[Ct.col, Ct.row, Ct.R, 1, o.ex, o.ey, o.ez, 0]] } : null;
  }
  function wo(t) {
    const o = k;
    let r = null;
    if ((i === "finish" || i === "pad") && !b) {
      const c = o.y - t.offset,
        y = be(),
        d = lt(t, o.x, c, y),
        p = lt(t, o.x + o.r, c, y),
        u = lt(t, o.x, c, y + o.r);
      if (d && p && u) {
        const { left: x, top: w } = e.canvas(),
          S = Math.max(
            22,
            1.1 * Math.max(Math.hypot(p.x - d.x, p.y - d.y), Math.hypot(u.x - d.x, u.y - d.y)),
          );
        r = { x: d.x + x, y: d.y + w, R: S };
      }
    }
    n.placeGrab(r);
  }
  function qn(t) {
    const o = zr((R, K = 0) => lt(t, t.W / 2, R, K)?.y, mt - t.offset, k.r, Math.max(k.r, at), t.W),
      { fw: r, far: c, low: y } = o,
      d = t.W / 2,
      [p, u] = Tn(t.W),
      x = (R, K = 0) => lt(t, d, R, K)?.y ?? 1 / 0,
      w = (R) => {
        const [K, N] = [lt(t, d - r / 2, R, 0), lt(t, d + r / 2, R, 0)];
        return K && N ? N.x - K.x : r;
      },
      S = (R) => {
        const K = (w(R) * u) / p;
        let N = 1.45 * u;
        for (let it = 0; it < 3; it++) {
          const zt = x(R) - x(R, N);
          if (!(zt > 0.1)) break;
          N *= K / zt;
        }
        return N;
      },
      I = (R) => x(R, 1.45 * Ae.hover + S(R)),
      B = I(c) >= y + 10 ? c : Pe(I, y + 10, c, c + 4e3);
    return { ...o, face: B, back: B - Vr, hz: S(B), wr: B + 1.7 * 1.45 * 16 };
  }
  function ko(t, o) {
    const { face: r, fw: c, hz: y } = o,
      d = t.W / 2,
      { left: p, top: u } = e.canvas(),
      x = Qe(),
      w = [
        [d - c / 2, x + y],
        [d + c / 2, x + y],
        [d + c / 2, x],
        [d - c / 2, x],
      ].map(([R, K]) => lt(t, R, r, K));
    let S = "",
      I = "",
      B = "";
    if (
      ((ee = null),
      x + y > 0.5 &&
        w.every((R) => R) &&
        w.some((R) => R.y + u > 0 && R.y + u < innerHeight) &&
        w.some((R) => R.x + p > 0 && R.x + p < innerWidth))
    ) {
      ee = w.map((it) => ({ x: it.x + p, y: it.y + u }));
      const [R, K] = Tn(t.W),
        N = ee;
      if (
        ((S = Un(N, R, K)),
        x < 0 && (I = `inset(0 0 ${((-x / y) * K).toFixed(1)}px 0)`),
        Math.abs(Math.sin(E.turn)) > 1e-4)
      ) {
        const it = Ar(N, R, K),
          Kt = [1, -1]
            .map((Zt) => $o(t, o, Zr, Zt))
            .find((Zt) => Zt && as(Zt))
            ?.map((Zt) => it({ x: Zt.x + p, y: Zt.y + u }));
        B = (Kt?.every((Zt) => Zt) && Un(Kt, R, K)) || "scale(0)";
      }
    }
    n.size(Tn(t.W)),
      n.place(S, I, B),
      ne && S && !n.layer.hidden && ((ne = !1), n.button.focus({ preventScroll: !0 }));
  }
  const Qe = () => 1.45 * E.h,
    Mo = 8,
    sa = 12,
    aa = 20;
  let So = "";
  const jn = ["", ""],
    zo = [!1, !1],
    Ao = new Map(),
    To = new Map(),
    Oo = new Map();
  function ra(t, { face: o, fw: r }) {
    const c = mt - Pt;
    n.fillBar(c);
    const y = `${innerWidth}x${innerHeight} ${c}`;
    y !== So && ((So = y), Ao.clear(), To.clear(), Oo.clear(), jn.fill(""));
    const d = t.offset + t.focusRow,
      p = (S) => mn(t, (I) => n.measureBar(I), d, S + t.offset, Oo);
    for (const S of [0, 1]) {
      const I = mn(t, (R, K) => n.measureBar(R, 1, K), d, o + t.offset, S ? To : Ao, S === 1),
        B = (I.w * (r + 2 * Mo)) / (I.x1 - I.x0);
      if (
        (`${I.w} ${B} ${I.tw}` !== jn[S] &&
          ((jn[S] = `${I.w} ${B} ${I.tw}`), (zo[S] = n.measureBar(I.w, B, I.tw) > 0)),
        zo[S])
      )
        return { ...I, slot: B };
    }
    const u = (S, I = 0) => lt(t, t.W / 2, S, I)?.y ?? 1 / 0,
      x = Pe(u, innerHeight - aa, t.focusRow, t.T);
    let w = p(o);
    for (let S = 0; S < 2; S++)
      w = p(Math.min(x, Pe((I) => u(I, w.hz), u(o) + sa, o, t.T) + w.face - w.back));
    return { ...w, slot: 0 };
  }
  const Eo = (t) => Tt((Qe() + t.hz) / (1.45 * Ae.down + t.hz), 0, 1);
  function Ho(t, o) {
    const r = Eo(o);
    if (r > 0 || i === "pad" || !xt) {
      const d = { ...t, offset: mt - t.focusRow - Ge(fe()) },
        p = qn(d),
        u = ra(d, p),
        x = o.face + t.offset - p.face - d.offset;
      xt = { ...u, face: u.face + x, back: u.back + x };
    }
    const { css: c, clip: y } = r > 0 && ee ? io(t, xt, r) : { css: "", clip: "" };
    n.placeBar(c, y, xt.w, xt.slot, xt.tw);
  }
  function Co(t, { face: o, back: r, fw: c, hz: y }, d, p) {
    const u = (o + r) / 2,
      x = Qe() + y / 2,
      w = Math.cos(E.turn),
      S = Math.sin(E.turn),
      I = [-1, 1, 1, -1].map((B) => t.W / 2 + (B * c) / 2);
    return d.map(([B, R], K) => {
      const N = (p * B * (o - r)) / 2,
        it = (p * R * y) / 2;
      return [I[K], u + N * w + it * S, x - N * S + it * w];
    });
  }
  function $o(t, o, r, c) {
    const y = Co(t, o, r, c).map((d) => lt(t, ...d));
    return y.every((d) => d) ? y : null;
  }
  function ia(t, o, r) {
    const { face: c, back: y, fw: d, hz: p } = r,
      u = Qe();
    if (u + p < 0.5) return;
    const w = o.W / 2 - d / 2,
      S = o.W / 2 + d / 2,
      I = (N, it) => {
        for (const zt of [0, 1, 2, 0, 2, 3]) t.fills.push(...N[zt], it[0], it[1], it[2], 1, 0);
      },
      B = Math.abs(Math.sin(E.turn)) > 1e-4;
    for (const N of B ? [1, -1] : [Math.cos(E.turn) > 0 ? 1 : -1]) {
      if (B && !as($o(o, r, ss, N))) continue;
      const it = Co(o, r, ss, N);
      I(it, rt.slab);
      for (let zt = 0; zt < 4; zt++) (B || zt !== 2) && t.seg(it[zt], it[(zt + 1) % 4], Wt, 0.85);
    }
    if (u < 0.5) return;
    if (B) {
      const N = [
        [w, y, u],
        [S, y, u],
        [S, c, u],
        [w, c, u],
      ];
      I(N, rt.slab), t.seg(N[0], N[1], Wt, 0.85), t.seg(N[0], N[3], Wt, 0.85), t.seg(N[1], N[2], Wt, 0.85);
    }
    const R = ve.background.map((N) => pe(N, 0.62, 0.15));
    I(
      [
        [w, c, u],
        [S, c, u],
        [S, c, 0],
        [w, c, 0],
      ],
      R,
    );
    const K = c + 0.5;
    t.seg([w, K, 0], [S, K, 0], Wt, 1),
      t.seg([w, K, 0], [w, K, u], Wt, 1),
      t.seg([S, K, 0], [S, K, u], Wt, 1);
  }
  return {
    step: Qs,
    draw: na,
    label: Bt.label,
    resize() {
      Bt.ready && (ke() ? (bt = !0) : Bt.drop());
    },
    wheel: zs,
    placeStart(t) {
      if (i !== "pad" || !k || !st || jt || nt) return;
      const o = t(),
        r = qn(o);
      ko(o, r), Ho(o, r), wo(o);
    },
    get startMoving() {
      return Y;
    },
    get running() {
      return ke() && !b;
    },
    get playing() {
      return ke();
    },
    get wells() {
      return ht;
    },
    destroy() {
      (jt = !0), Ln(), Bt.drop(), m.abort(), le.destroy(), e.takeover(!1), n.destroy();
    },
    dev: {
      state: () => ({
        phase: i,
        padY: mt,
        ending: b,
        armed: g,
        camY: v.y,
        ball: k,
        pit: q,
        falls: Rt,
        shoved: ut,
        R0: Ot,
        cz: at,
        clock: h,
        g: f,
        quad: ee,
        labels: vo,
        raised: Yt,
        solid: qt,
        finCard: ie,
        aim: M && f ? Pn(M, f.W) : null,
        fuzz: C,
        fin: $t,
        bar: xt,
        gapsSeen: Ht,
        layoutMs: Dt,
        stepMs: Nt,
        drawMs: Gt,
        hidden: nt,
        taken: Re,
        picked: Qt,
        fireworks: kt,
        startBox: { ...E, ...G },
      }),
      board: ot,
      hop: ft,
      words: Bt,
      music: le,
      ui: n,
      redraw: Z,
      tally: () => Je(),
      centreZ: be,
      rowOf: Vt,
      well(t) {
        (Ct = t), Z();
      },
      hide(t) {
        (nt = t), n.show(!t && i === "pad"), Z();
      },
      place(t, o) {
        i !== "play" ||
          !k ||
          ((q = null),
          (k.y = t),
          o !== void 0 && (k.x = o),
          (k.vx = 0),
          (V = !1),
          (v.y = t - Ge(fe())),
          yn(),
          Z());
      },
    },
  };
}
const ai = Object.freeze(
  Object.defineProperty({ __proto__: null, createGame: Jr, lookOf: Ge }, Symbol.toStringTag, {
    value: "Module",
  }),
);
export { ai as i, Ge as l, zr as p };
