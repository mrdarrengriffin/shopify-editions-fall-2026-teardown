const ee = {
  description:
    "Illustrative transactions arrive in a disordered crowd, meet a protective line and leave in four orderly streams. Blocked events bounce back off the line.",
  disclaimer:
    "Illustrative local animation only. It is not connected to payments or fraud services. The header figures are supplied marketing copy, not live measurements or the animation’s event rate. Visual impacts are illustrative, not a proportional fraud rate. Classifications are illustrative and use no personal information.",
};
function oe(u) {
  return { ...ee, ...u };
}
function ne(u) {
  return u?.closest("[data-hero-colour]")?.dataset.heroColour ?? "#051daa";
}
const ae = 5e3,
  et = ae / 60;
function se() {
  return { activeSeconds: 0, fractional: 0, emitted: 0 };
}
function re(u, f) {
  if (!Number.isFinite(f) || f < 0)
    throw new RangeError("activeSeconds must be a finite non-negative number");
  const h = u.fractional + f * et,
    S = Math.floor(h + 1e-10),
    L = h - S,
    R = Math.abs(L) < 1e-9 ? 0 : L;
  return {
    arrivals: S,
    state: { activeSeconds: u.activeSeconds + f, fractional: R, emitted: u.emitted + S },
  };
}
function ie(u, f, h, S, L, R) {
  return R <= 0 ? f : (f + (h - u) * S * R) * Math.exp(-L * R);
}
function ce(u, f, h, S, L, R, m) {
  const w = (u.x - f.x) * h,
    d = u.y - f.y,
    P = Math.hypot(w, d);
  if (m <= 0 || P < 0.004 || P >= S) return { x: 0, y: 0 };
  const X = (1 - P / S) ** 2;
  return { x: (w / P / h) * L * X * m + f.vx * X * R, y: (d / P) * L * X * m + f.vy * X * R };
}
const le = {
    background: "#ffffff",
    ink: "#171716",
    paper: "#ffffff",
    blue: "#0E1FA0",
    pink: "#B01162",
    green: "#08572A",
    orange: "#BA4100",
    violet: "#654799",
    teal: "#217080",
  },
  de = {
    background: "#131312",
    ink: "#F0F0EF",
    paper: "#131312",
    blue: "#8293FF",
    pink: "#FF67AD",
    green: "#68DFA0",
    orange: "#FF9664",
    violet: "#B99AEC",
    teal: "#6BC9D7",
  },
  fe = {
    background: "transparent",
    ink: "#ffffff",
    paper: "#051daa",
    blue: "#ffffff",
    pink: "#ffffff",
    green: "#ffffff",
    orange: "#ffffff",
    violet: "#ffffff",
    teal: "#ffffff",
  },
  ft = 384,
  he = 4,
  ue = 4.6,
  ge = 0.5,
  me = [0.2, 0.4, 0.6, 0.8],
  ht = 3.5,
  ye = 0.04,
  ut = 1.1,
  xe = [0.17, 0.49],
  Me = 1.3,
  Lt = ["circle", "triangle", "square", "diamond"];
let be = 0;
function v(u, f, h) {
  return Math.max(f, Math.min(h, u));
}
function V(u, f, h) {
  const S = v((h - u) / Math.max(Number.EPSILON, f - u), 0, 1);
  return S * S * (3 - 2 * S);
}
function Dt() {
  const u = Math.max(Number.EPSILON, Math.random()),
    f = Math.max(Number.EPSILON, Math.random());
  return Math.sqrt(-2 * Math.log(u)) * Math.cos(Math.PI * 2 * f);
}
function ve(u, f = "light", h = "default", S) {
  const L = oe(S?.strings),
    R = `protect-checkpoint-${f}-${++be}`;
  let m = f === "mono" ? { ...fe } : f !== "light" ? de : le;
  const w = me,
    d = document.createElement("div");
  (d.className = `protect-widget protect-checkpoint protect-${f}${h !== "default" ? ` protect-${h}` : ""}`),
    (d.dataset.variant = h),
    (d.dataset.paused = "false"),
    (d.dataset.theme = f),
    (d.dataset.streamCount = String(w.length)),
    (d.dataset.rejectionMode = h === "ledger" ? "bounce" : "absorb"),
    (d.dataset.rejectionRate = String(ht)),
    (d.dataset.arrivalRate = String(et)),
    (d.dataset.pacedCount = "0"),
    (d.dataset.activeSimulationSeconds = "0"),
    (d.dataset.droppedPacedCount = "0"),
    (d.dataset.particleCap = String(ft + he)),
    (d.innerHTML = `
    <canvas role="img" aria-describedby="${R}-help"></canvas>
    <span class="protect-sr" id="${R}-help"></span>
    <span class="protect-sr protect-live" aria-live="polite"></span>`),
    u.append(d);
  const P = d.querySelector("canvas");
  P.setAttribute("aria-label", L.description), (d.querySelector(".protect-sr").textContent = L.disclaimer);
  const X = P.getContext("2d");
  if (!X) return d.remove(), () => {};
  const o = X;
  d.querySelector(".protect-live");
  const gt = new AbortController(),
    { signal: K } = gt,
    mt = window.matchMedia("(prefers-reduced-motion: reduce)");
  let M = 220,
    p = 130,
    B = 1,
    $ = 0,
    H = 0,
    yt = !0,
    ot = !1,
    nt = mt.matches,
    W = se(),
    xt = 0,
    at = 0,
    Mt = 0;
  const I = ge;
  let _ = { x: 0, y: 0, active: !1, vx: 0, vy: 0 },
    Y = null,
    bt = 0;
  const y = [],
    A = [],
    G = () => ({
      left: Math.max(6, M * 0.012),
      right: M - Math.max(6, M * 0.012),
      top: 12,
      bottom: Math.max(40, p - 10),
    });
  function x(t) {
    const e = G();
    return { x: e.left + t.x * (e.right - e.left), y: e.top + t.y * (e.bottom - e.top) };
  }
  function vt(t) {
    return [m.blue, m.pink, m.green, m.orange, m.violet, m.teal][t] ?? m.blue;
  }
  const Ot = () => I + 0.15,
    N = h === "ledger",
    b = h === "lanes" || N,
    Ct = h === "form" || b;
  let st = 0;
  function rt(t) {
    return I;
  }
  function Pt(t, e) {
    const n = Math.floor(Math.random() * w.length),
      a = b ? 0.14 + Math.random() * 0.72 : 0.05 + Math.random() * 0.9;
    let r = Math.random() < ht / et;
    t === "paced" && ((at += ht / et), (r = at >= 1), r && (at -= 1));
    const s = t === "test",
      c = s ? 0.34 : 0.2 + Math.random() * 0.2,
      i = {
        x: -0.055 - Math.random() * 0.025,
        y: a,
        vx: c,
        vy: 0,
        sourceY: a,
        state: "approach",
        stateAge: 0,
        reject: r,
        color: vt(n),
        age: 0,
        source: t,
        radius: s
          ? 2.25
          : h === "shapes"
            ? 2.1
            : b
              ? 1.1
              : h !== "default"
                ? 0.8
                : 0.95 + Math.random() * 0.95,
        phase: Math.random() * Math.PI * 2,
        speed: c,
        bundle: n,
        bundleOffset: Dt() * 0.0035,
        collisionX: 0,
        crossingY: a,
        trailClock: 0,
        trail: [],
        wobble: 0.05 + Math.random() * 0.1,
        freq: 1.4 + Math.random() * 3.8,
        phase2: Math.random() * Math.PI * 2,
        spin: (Math.random() < 0.5 ? -1 : 1) * (1.2 + Math.random() * 2.6),
      };
    for (let l = 4; l > 0; l--) {
      const g = -l / 42;
      i.trail.push({ x: i.x + g * c, y: a, age: g, color: i.color, state: "approach" });
    }
    return i;
  }
  function pt() {
    return y.reduce((t, e) => t + (e.source === "test" ? 0 : 1), 0);
  }
  function St(t, e) {
    if (!_.active) return;
    const n = ce(
      t,
      _,
      M / Math.max(1, p),
      Math.min(0.26, 0.16 + 70 / Math.max(420, M)),
      t.state === "rejected" ? 4.4 : 8.6,
      t.state === "rejected" ? 0.045 : 0.105,
      e,
    );
    (n.x === 0 && n.y === 0) || ((t.vx += n.x), (t.vy += n.y), (bt += 1));
  }
  function qt(t) {
    const e = rt(t.y);
    if (!(t.state !== "approach" || t.x < e)) {
      if (((t.collisionX = e), (t.crossingY = t.y), (t.stateAge = 0), !t.reject)) {
        (t.state = "allowed"), (t.vx = Math.max(t.speed, t.vx)), (t.vy *= 0.34);
        return;
      }
      if (((t.state = "rejected"), (t.x = e - 0.002), (t.vx = 0), (t.vy = 0), (t.trail.length = 0), N)) {
        const n = G(),
          [a, r] = xe,
          s = (Math.random() < 0.5 ? -1 : 1) * (a + Math.random() * (r - a));
        (t.vx = -(0.24 + Math.random() * 0.12)),
          (t.vy = (-t.vx * Math.tan(s) * (n.right - n.left)) / Math.max(1, n.bottom - n.top));
      }
      t.source === "paced" && Mt++,
        A.push({ x: e, y: t.y, age: 0, color: t.color, strength: t.source === "test" ? 1.3 : 0.9 }),
        A.length > 18 && A.shift();
    }
  }
  function Bt(t, e) {
    t.trailClock += e;
    const n = Math.min(M, p) < 190,
      a = h === "wispy" || h === "form",
      r = a ? 1 / 40 : n ? 1 / 20 : t.state === "rejected" ? 1 / 48 : 1 / 36;
    if (t.trailClock < r) return;
    (t.trailClock %= r), t.trail.push({ x: t.x, y: t.y, age: t.age, color: t.color, state: t.state });
    const s = a
        ? 1.15
        : b && t.state === "approach"
          ? 0.1
          : h === "shapes" || b
            ? 0.3
            : t.state === "rejected"
              ? 1.75
              : n
                ? 0.16
                : 0.48,
      c = t.age - s;
    for (; t.trail.length > 2 && t.trail[0].age < c; ) t.trail.shift();
    const i = a ? 48 : t.source === "test" ? 82 : n ? 6 : t.state === "rejected" ? 72 : 20;
    t.trail.length > i && t.trail.splice(0, t.trail.length - i);
  }
  function wt(t) {
    const e = w[t.bundle];
    if (t.state === "approach") {
      const a = V(I - 0.17, I + 0.02, t.x),
        r =
          (b
            ? Math.sin(t.x * 3.1 + t.sourceY * 2.4 + st * 0.45) * 0.07 +
              Math.sin(t.x * 1.7 - t.sourceY * 3.3 - st * 0.3 + 1.3) * 0.045 +
              Math.sin(t.phase + t.age * t.freq * 0.3) * t.wobble * 0.25
            : Math.sin(t.phase + t.age * t.freq) * t.wobble +
              Math.sin(t.phase2 + t.age * t.freq * 1.73 + t.x * 11) * t.wobble * 0.6) *
          (1 - a),
        s = t.sourceY + (e - t.sourceY) * a * 0.45 + r;
      return b ? 0.5 + 0.4 * Math.tanh((s - 0.5) / 0.4) : h !== "default" ? v(s, 0.1, 0.9) : s;
    }
    const n = V(t.collisionX, t.collisionX + 0.1, t.x);
    return t.crossingY + (e + t.bundleOffset - t.crossingY) * n;
  }
  function At(t, e) {
    if (((t.age += e), (t.stateAge += e), t.state === "rejected")) {
      N && _t(t, e);
      return;
    }
    St(t, e);
    {
      const n = wt(t);
      t.vy = ie(t.y, t.vy, n, t.state === "allowed" ? 300 : 20, t.state === "allowed" ? 32 : 4.4, e);
      let a = t.speed;
      if (t.state === "approach") {
        const r = V(I - 0.14, I, t.x);
        (t.vy += Dt() * (b ? 0.12 : 1.1) * Math.sqrt(e) * (1 - r)),
          (a *= 1 + (b ? 0.12 : 0.38) * Math.sin(t.phase2 + t.age * t.freq * (b ? 0.3 : 0.8)) * (1 - r));
      }
      (t.vy = v(t.vy, t.state === "allowed" ? -2.4 : -0.92, t.state === "allowed" ? 2.4 : 0.92)),
        (t.vx += (a - t.vx) * (1 - Math.exp(-1.65 * e))),
        (t.vx = v(t.vx, 0.075, 0.48));
    }
    (t.x += t.vx * e),
      (t.y += t.vy * e),
      h !== "default" &&
        (t.y < 0.06 || t.y > 0.94) &&
        ((t.y = t.y < 0.06 ? 0.12 - t.y : 1.88 - t.y), (t.vy = -t.vy * 0.6)),
      (t.y = v(t.y, 0.045, 0.955)),
      qt(t),
      Bt(t, e);
  }
  function _t(t, e) {
    if (t.stateAge > ye) {
      St(t, e);
      const n = Math.exp(-0.9 * e);
      (t.vx *= n),
        (t.vy *= n),
        (t.x = Math.min(I - 0.002, t.x + t.vx * e)),
        (t.y += t.vy * e),
        (t.y < 0.06 || t.y > 0.94) && ((t.y = t.y < 0.06 ? 0.12 - t.y : 1.88 - t.y), (t.vy = -t.vy * 0.6));
    }
  }
  function it(t) {
    return t.state === "rejected" ? !N || t.stateAge > ut : t.x > 1.09 || t.age > ue;
  }
  function Yt(t) {
    for (const e of A) e.age += t;
    for (; A.length && A[0].age > 0.52; ) A.shift();
  }
  function Nt(t, e = !0) {
    if (e) {
      const n = re(W, t);
      W = n.state;
      for (let a = 0; a < n.arrivals; a++) {
        if (pt() >= ft) {
          xt += 1;
          continue;
        }
        y.push(Pt("paced"));
      }
    }
    for (const n of y) At(n, t);
    (_.vx *= Math.exp(-10 * t)), (_.vy *= Math.exp(-10 * t));
    for (let n = y.length - 1; n >= 0; n--) it(y[n]) && y.splice(n, 1);
    Yt(t), (st += t), Ct && $t(t);
  }
  const T = 22,
    kt = w.map((t) => ({ mean: new Float64Array(T).fill(t), sd: new Float64Array(T).fill(0.2) }));
  let Et = !1;
  const Xt = (t) => -0.01 + ((t + 0.5) / T) * 1.04;
  function $t(t) {
    const e = w.map(() => new Float64Array(T)),
      n = w.map(() => new Float64Array(T)),
      a = w.map(() => new Float64Array(T));
    for (const s of y) {
      if (s.state === "rejected") continue;
      const c = Math.floor(((s.x + 0.01) / 1.04) * T);
      if (c < 0 || c >= T) continue;
      const i = e[s.bundle],
        l = n[s.bundle],
        g = a[s.bundle];
      (i[c] = i[c] + 1), (l[c] = l[c] + s.y), (g[c] = g[c] + s.y * s.y);
    }
    const r = Et ? 1 - Math.exp(-t * 1.6) : 1;
    kt.forEach((s, c) => {
      for (let i = 0; i < T; i++) {
        let l = 0,
          g = 0,
          k = 0;
        for (let j = Math.max(0, i - 1); j <= Math.min(T - 1, i + 1); j++)
          (l += e[c][j]), (g += n[c][j]), (k += a[c][j]);
        if (l < 3) continue;
        const C = g / l,
          D = Math.sqrt(Math.max(0, k / l - C * C));
        (s.mean[i] = s.mean[i] + (C - s.mean[i]) * r),
          (s.sd[i] = s.sd[i] + (Math.max(0.008, D) - s.sd[i]) * r);
      }
    }),
      (Et = !0);
  }
  function z(t, e, n = !0) {
    n ? t.moveTo(e[0].x, e[0].y) : t.lineTo(e[0].x, e[0].y);
    for (let a = 1; a < e.length - 1; a++) {
      const r = e[a],
        s = e[a + 1];
      t.quadraticCurveTo(r.x, r.y, (r.x + s.x) / 2, (r.y + s.y) / 2);
    }
    t.lineTo(e[e.length - 1].x, e[e.length - 1].y);
  }
  function Gt(t, e, n) {
    if (t.length < 2) return;
    const a = [0];
    for (let i = 1; i < t.length; i++)
      a.push(a[i - 1] + Math.hypot(t[i].x - t[i - 1].x, t[i].y - t[i - 1].y));
    const r = a[a.length - 1];
    if (r < 8) return;
    const s = 34,
      c = 46;
    o.save(), (o.fillStyle = m.ink);
    for (let i = (n * s + e * c) % c; i < r; i += c) {
      let l = 1;
      for (; l < a.length - 1 && a[l] < i; ) l++;
      const g = (i - a[l - 1]) / Math.max(1e-6, a[l] - a[l - 1]),
        k = t[l - 1].x + (t[l].x - t[l - 1].x) * g,
        C = t[l - 1].y + (t[l].y - t[l - 1].y) * g;
      (o.globalAlpha = 0.95 * Math.min(1, i / 12, (r - i) / 12)),
        o.beginPath(),
        o.arc(k, C, 1.2, 0, Math.PI * 2),
        o.fill();
    }
    o.restore();
  }
  function Ht(t) {
    const e = m.ink,
      n = x({ x: I, y: 0 }).x,
      a = G(),
      r = (s) => {
        const c = o.createLinearGradient(a.left, 0, a.left + (n - a.left) * 0.45, 0);
        return c.addColorStop(0, "rgba(255, 255, 255, 0)"), c.addColorStop(1, `rgba(255, 255, 255, ${s})`), c;
      };
    o.save(),
      b && (o.beginPath(), o.rect(n, 0, M - n, p), o.clip()),
      kt.forEach((s, c) => {
        const i = [],
          l = [],
          g = [];
        for (let E = 0; E < T; E++) {
          const O = Xt(E),
            q = s.mean[E],
            tt = b ? Math.max(0.024, s.sd[E]) : s.sd[E];
          i.push(x({ x: O, y: v(q - tt, 0.02, 0.98) })),
            l.push(x({ x: O, y: v(q + tt, 0.02, 0.98) })),
            g.push(x({ x: O, y: q }));
        }
        const k = new Path2D();
        if (
          (z(k, i),
          z(k, l.slice().reverse(), !1),
          k.closePath(),
          (o.fillStyle = b ? "rgba(255, 255, 255, 0.09)" : r(0.09)),
          (o.globalAlpha = 1),
          o.fill(k),
          b)
        ) {
          for (const E of [i, l]) {
            const O = new Path2D();
            z(O, E), F(e, 0.6, 0.75), o.stroke(O);
            const q = E.filter((tt) => tt.x >= n - 2);
            Gt(q, c * 0.37 + (E === l ? 0.5 : 0), t);
          }
          return;
        }
        for (const [E, O] of [
          [i, 0.5],
          [l, 0.5],
          [g, 0.75],
        ]) {
          const q = new Path2D();
          z(q, E),
            o.save(),
            o.beginPath(),
            o.rect(0, 0, n, p),
            o.clip(),
            F(e, 1, 0.75),
            (o.strokeStyle = r(O * 0.8)),
            o.setLineDash([1.5, 2.5]),
            o.stroke(q),
            o.restore(),
            o.save(),
            o.beginPath(),
            o.rect(n, 0, M - n, p),
            o.clip(),
            F(e, O, 0.75),
            o.setLineDash([]),
            o.stroke(q),
            o.restore();
        }
        const C = ((I + 0.01) / 1.04) * T - 0.5,
          D = v(Math.floor(C), 0, T - 2),
          j = v(C - D, 0, 1),
          Z = x({ x: I, y: s.mean[D] * (1 - j) + s.mean[D + 1] * j });
        (o.globalAlpha = 0.95),
          (o.fillStyle = e),
          o.beginPath(),
          o.arc(Z.x, Z.y, 1.6 + Math.sin(t * 2.2) * 0.3, 0, Math.PI * 2),
          o.fill();
      }),
      o.restore();
  }
  const U = 7;
  function It(t, e) {
    const n = Array.from({ length: U }, () => new Path2D());
    for (const a of y) {
      if (a.state === "rejected") continue;
      const r = a.trail,
        s = r.length;
      if (s < 2) continue;
      let c = x(r[0]);
      for (let i = 1; i <= s; i++) {
        const l = i < s ? x(r[i]) : x(a),
          g = Math.min(U - 1, Math.floor((i / s) * U));
        n[g].moveTo(c.x, c.y), n[g].lineTo(l.x, l.y), (c = l);
      }
    }
    for (let a = 0; a < U; a++) {
      const r = (a + 1) / U;
      F(m.ink, t * r ** 2.2, e * (0.3 + 0.7 * r)), o.stroke(n[a]);
    }
  }
  function Wt(t, e, n, a, r) {
    if ((o.beginPath(), t === "circle")) {
      o.arc(e, n, a * 0.92, 0, Math.PI * 2);
      return;
    }
    const s = t === "triangle" ? 3 : 4,
      c = t === "triangle" ? a * 1.25 : t === "square" ? a * 1.12 : a * 1.3,
      i = (t === "triangle" ? -Math.PI / 2 : t === "square" ? Math.PI / 4 : 0) + r;
    for (let l = 0; l < s; l++) {
      const g = i + (l / s) * Math.PI * 2,
        k = e + Math.cos(g) * c,
        C = n + Math.sin(g) * c * (t === "diamond" ? 1.15 : 1);
      l ? o.lineTo(k, C) : o.moveTo(k, C);
    }
    o.closePath();
  }
  function Ut(t) {
    h === "shapes" || b ? It(0.32, 0.6) : It(h === "form" ? 0.22 : 0.62, 0.7),
      o.save(),
      (o.fillStyle = m.ink);
    for (const e of y) {
      if (e.state === "rejected") continue;
      const n = x(e);
      if (
        ((o.globalAlpha = h === "form" ? 0.55 : b ? 0.92 : e.source === "seed" ? 0.85 : 0.96), h === "shapes")
      ) {
        const a = Lt[e.bundle % Lt.length];
        let r = e.phase + e.age * e.spin;
        if (e.state === "allowed") {
          const s = a === "triangle" ? (Math.PI * 2) / 3 : Math.PI / 2;
          r =
            (((((e.phase + (e.age - e.stateAge) * e.spin) % s) + s * 1.5) % s) - s / 2) *
            (1 - V(0, 0.3, e.stateAge));
        }
        Wt(a, n.x, n.y, e.radius, r), o.fill();
      } else N && e.reject ? Tt(n) : (o.beginPath(), o.arc(n.x, n.y, e.radius, 0, Math.PI * 2), o.fill());
    }
    o.restore();
  }
  function ct() {
    (y.length = 0), (A.length = 0);
    const t = Math.min(150, ft - 1);
    for (let e = 0; e < t; e++) {
      const n = Pt("seed"),
        a = 0.15 + (e / t) * 3.7 + Math.random() * 0.08,
        r = Math.ceil(a * 40);
      for (let s = 0; s < r && !it(n); s++) At(n, 1 / 40);
      it(n) || y.push(n);
    }
    A.length = 0;
  }
  function F(t, e, n) {
    (o.strokeStyle = t),
      (o.globalAlpha = e),
      (o.lineWidth = n),
      (o.lineCap = "round"),
      (o.lineJoin = "round");
  }
  function Vt(t) {
    const e = f !== "light",
      n = G(),
      a = Math.min(M, p) < 190,
      r = a ? 24 : 42;
    for (let s = 0; s < r; s++) {
      const c = s % w.length,
        i = Math.floor(s / w.length),
        l = 0.09 + ((s * 0.137 + i * 0.041) % 0.82),
        g = w[c] + (i - r / (2 * w.length)) * 0.0022,
        k = l + (g - l) * (0.5 + (s % 3) * 0.055),
        C = x({ x: rt(), y: k }),
        D = x({ x: Ot(), y: g }),
        j = x({ x: 1.08, y: g }),
        Z = vt(c),
        E = 0.82 + Math.sin(t * 0.22 + s * 1.7) * 0.18;
      F(Z, (e ? 0.23 : 0.105) * E * (b ? 0.4 : 1), a ? 0.42 : e ? 0.72 : 0.58),
        o.beginPath(),
        o.moveTo(C.x, C.y),
        o.bezierCurveTo(
          C.x + (n.right - n.left) * 0.045,
          C.y,
          D.x - (n.right - n.left) * 0.04,
          D.y,
          D.x,
          D.y,
        ),
        o.lineTo(j.x, j.y),
        o.stroke();
    }
  }
  function Kt() {
    const t = G(),
      e = x({ x: I, y: 0 }).x,
      n = t.top + 4,
      a = t.bottom;
    o.save(), (o.globalAlpha = 1);
    const r = m.paper,
      s = o.createLinearGradient(e - 6, 0, e + 7, 0);
    s.addColorStop(0, `${r}00`),
      s.addColorStop(0.35, `${r}cc`),
      s.addColorStop(0.65, `${r}cc`),
      s.addColorStop(1, `${r}00`),
      (o.fillStyle = s),
      o.fillRect(e - 6, n, 13, a - n);
    const c = o.createLinearGradient(0, n, 0, a);
    c.addColorStop(0, "rgba(255, 255, 255, 0)"),
      c.addColorStop(0.2, "rgba(255, 255, 255, 0.72)"),
      c.addColorStop(0.8, "rgba(255, 255, 255, 0.72)"),
      c.addColorStop(1, "rgba(255, 255, 255, 0)"),
      (o.strokeStyle = c),
      (o.lineWidth = 1),
      o.beginPath(),
      o.moveTo(e + 0.5, n),
      o.lineTo(e + 0.5, a),
      o.stroke(),
      o.restore(),
      (d.dataset.fieldFlash = "0");
  }
  function zt() {
    if (N) return;
    const t = f !== "light",
      e = G(),
      n = x({ x: I, y: 0.5 }),
      a = A[A.length - 1],
      r = a ? Math.max(0, 1 - a.age / 0.42) ** 2 : 0,
      s = Math.max(1, (e.bottom - e.top) * 0.47),
      c = () => {
        o.beginPath(), o.moveTo(n.x, n.y - s), o.lineTo(n.x, n.y + s);
      };
    c(),
      F(m.ink, t ? 0.7 : 0.62, 1),
      (o.lineCap = "butt"),
      o.stroke(),
      a && r > 0 && (c(), F(a.color, r * 0.95, 1 + r * 0.6), (o.lineCap = "butt"), o.stroke()),
      (d.dataset.fieldFlash = r.toFixed(3));
  }
  function Jt() {
    for (const t of A) {
      const e = x({ x: rt(t.y), y: t.y });
      {
        const n = v(t.age / 0.52, 0, 1),
          a = (1 - n) ** 2,
          r = v(Math.min(M, p) / 420, 0.5, 1.3) * t.strength,
          s = (5 + 21 * (1 - (1 - n) ** 3)) * r;
        o.save();
        const c = o.createRadialGradient(e.x, e.y, 0, e.x, e.y, s);
        c.addColorStop(0, t.color),
          c.addColorStop(1, "transparent"),
          (o.fillStyle = c),
          (o.globalAlpha = a * 0.22),
          o.beginPath(),
          o.ellipse(e.x, e.y, s * 0.55, s, 0, 0, Math.PI * 2),
          o.fill(),
          F(t.color, a * 0.9, 1.1 + a * 0.6),
          o.beginPath(),
          o.ellipse(e.x, e.y, s * 0.36, s, 0, 0, Math.PI * 2),
          o.stroke(),
          F(t.color, a * 0.5, 0.7),
          o.beginPath(),
          o.ellipse(e.x, e.y, s * 0.58, s * 0.62, 0, 0, Math.PI * 2),
          o.stroke(),
          F(t.color, a * 0.85, (2.5 + a * 2) * r),
          o.beginPath(),
          o.moveTo(e.x, e.y - 5 * r * a),
          o.lineTo(e.x, e.y + 5 * r * a),
          o.stroke(),
          F(f !== "light" ? m.ink : m.paper, a * 0.95, 1.3 * r),
          o.beginPath(),
          o.moveTo(e.x, e.y - 3 * r * a),
          o.lineTo(e.x, e.y + 3 * r * a),
          o.stroke(),
          o.restore();
      }
    }
  }
  function Tt(t) {
    (o.strokeStyle = m.ink),
      (o.lineWidth = 0.8),
      o.beginPath(),
      o.arc(t.x, t.y, Me, 0, Math.PI * 2),
      o.stroke();
  }
  function Qt() {
    o.save();
    for (const t of y)
      t.state === "rejected" && ((o.globalAlpha = 0.92 * (1 - V(ut - 0.5, ut, t.stateAge))), Tt(x(t)));
    o.restore();
  }
  function Zt(t) {
    if (t.state === "rejected") return;
    const e = t.trail;
    if (e.length > 1) {
      const a = f !== "light" ? 0.42 : 0.19;
      F(t.color, t.source === "test" ? Math.min(0.82, a * 1.45) : a, t.source === "test" ? 1.45 : 0.52);
      const r = x(e[0]);
      o.beginPath(), o.moveTo(r.x, r.y);
      for (let c = 1; c < e.length - 1; c++) {
        const i = x(e[c]),
          l = x(e[c + 1]);
        o.quadraticCurveTo(i.x, i.y, (i.x + l.x) / 2, (i.y + l.y) / 2);
      }
      const s = x(e[e.length - 1]);
      o.lineTo(s.x, s.y), o.stroke();
    }
    const n = x(t);
    o.save(),
      (o.fillStyle = t.color),
      (o.globalAlpha = t.source === "seed" ? 0.82 : 0.96),
      f !== "light" && ((o.shadowColor = t.color), (o.shadowBlur = 6)),
      o.beginPath(),
      o.arc(
        n.x,
        n.y,
        t.radius * (f !== "light" ? 1.18 : 1) * (Math.min(M, p) < 190 ? 0.68 : 1),
        0,
        Math.PI * 2,
      ),
      o.fill(),
      o.restore();
  }
  function te() {
    (d.dataset.particleCount = String(y.length)),
      (d.dataset.ordinaryCount = String(pt())),
      (d.dataset.seedCount = String(y.filter((e) => e.source === "seed").length)),
      (d.dataset.testCount = String(y.filter((e) => e.source === "test").length)),
      (d.dataset.rejectCount = String(y.filter((e) => e.state === "rejected").length)),
      (d.dataset.impactCount = String(A.length)),
      (d.dataset.absorbedCount = String(Mt)),
      (d.dataset.barrierX = I.toFixed(4)),
      (d.dataset.allowedCount = String(y.filter((e) => e.state === "allowed").length)),
      (d.dataset.pacedCount = String(W.emitted)),
      (d.dataset.activeSimulationSeconds = W.activeSeconds.toFixed(6)),
      (d.dataset.pacedFraction = W.fractional.toFixed(9)),
      (d.dataset.droppedPacedCount = String(xt)),
      (d.dataset.pointerImpulseCount = String(bt));
    const t = y.reduce((e, n) => (n.state === "rejected" ? e : Math.max(e, Math.abs(n.y - wt(n)))), 0);
    d.dataset.maxPathDeflection = t.toFixed(5);
  }
  function J(t = 0) {
    if (
      (o.setTransform(B, 0, 0, B, 0, 0),
      o.clearRect(0, 0, M, p),
      f === "mono" && (m.paper = ne(u)),
      (o.fillStyle = m.background),
      (o.globalAlpha = 1),
      o.fillRect(0, 0, M, p),
      Vt(t),
      zt(),
      Ct && Ht(t),
      h !== "default")
    )
      Ut();
    else for (const e of y) Zt(e);
    N && Kt(), Jt(), N && Qt(), (o.globalAlpha = 1), te();
  }
  function Ft() {
    return !ot && !nt && yt && !document.hidden;
  }
  function lt(t) {
    if (!Ft()) {
      ($ = 0), (H = 0);
      return;
    }
    if (!H) {
      (H = t), ($ = requestAnimationFrame(lt));
      return;
    }
    const e = v((t - H) / 1e3, 0, 0.05);
    (H = t), e > 0 && Nt(e, !0), J(t / 1e3), ($ = requestAnimationFrame(lt));
  }
  function Q() {
    cancelAnimationFrame($),
      ($ = 0),
      (H = 0),
      Ft() ? ($ = requestAnimationFrame(lt)) : J(performance.now() / 1e3);
  }
  function dt() {
    const t = d.getBoundingClientRect(),
      e = Math.max(1, Math.round(t.width)),
      n = Math.max(1, Math.round(t.height)),
      a = Math.min(2, Math.max(1, window.devicePixelRatio || 1));
    if (e === M && n === p && a === B) return;
    const r = y.length === 0;
    (M = e),
      (p = n),
      (B = a),
      (P.width = Math.max(1, Math.round(M * B))),
      (P.height = Math.max(1, Math.round(p * B))),
      r && ct(),
      J(performance.now() / 1e3);
  }
  P.addEventListener(
    "pointermove",
    (t) => {
      const e = P.getBoundingClientRect(),
        n = G(),
        a = {
          x: v((t.clientX - e.left - n.left) / Math.max(1, n.right - n.left), -0.1, 1.1),
          y: v((t.clientY - e.top - n.top) / Math.max(1, n.bottom - n.top), -0.1, 1.1),
        },
        r = Y ? v((t.timeStamp - Y.time) / 1e3, 0.008, 0.08) : 1;
      (_ = {
        ...a,
        active: !0,
        vx: Y ? v((a.x - Y.x) / r, -3.2, 3.2) : 0,
        vy: Y ? v((a.y - Y.y) / r, -3.2, 3.2) : 0,
      }),
        (Y = { ...a, time: t.timeStamp });
    },
    { signal: K, passive: !0 },
  ),
    P.addEventListener(
      "pointerleave",
      () => {
        (_.active = !1), (_.vx = 0), (_.vy = 0), (Y = null);
      },
      { signal: K },
    );
  const Rt = new ResizeObserver(dt);
  Rt.observe(d),
    document.fonts.ready.then(() => {
      ot || dt();
    });
  const jt = new IntersectionObserver(
    (t) => {
      (yt = t[0]?.isIntersecting ?? !0), Q();
    },
    { threshold: 0.01 },
  );
  return (
    jt.observe(d),
    document.addEventListener(
      "visibilitychange",
      () => {
        Q();
      },
      { signal: K },
    ),
    mt.addEventListener(
      "change",
      (t) => {
        (nt = t.matches), nt && y.length === 0 && ct(), Q();
      },
      { signal: K },
    ),
    (P.width = Math.round(M * B)),
    (P.height = Math.round(p * B)),
    dt(),
    y.length || ct(),
    J(),
    Q(),
    () => {
      (ot = !0),
        gt.abort(),
        Rt.disconnect(),
        jt.disconnect(),
        cancelAnimationFrame($),
        (y.length = 0),
        (A.length = 0),
        d.remove();
    }
  );
}
function Ce(u, f) {
  return ve(u, "mono", "ledger", f);
}
export { Ce as mountCheckpointLedger };
