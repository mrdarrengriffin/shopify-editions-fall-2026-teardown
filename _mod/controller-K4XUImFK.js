import { s as $t } from "./htmlInCanvasSupport-jvDIQ00h.js";
import { t as Ct } from "./reportError-C6Wenmm6.js";
import {
  H as Ht,
  a as dt,
  s as it,
  b as Xt,
  p as et,
  w as ut,
  c as gt,
  d as Vt,
  S as pt,
  e as Kt,
  h as Zt,
  R as Jt,
} from "./build-section-frame-DWD4QmNv.js";
import { h as Qt, r as ts, a as ss, H as is, R as es } from "./highlight-BjwrNyM6.js";
import {
  S as Pt,
  P as Ut,
  a as mt,
  b as ns,
  F as xt,
  H as os,
  p as hs,
  G as rs,
} from "./renderer-BovJ3rtt.js";
import { N, E as P, a as B, b as as, c as ls, d as cs } from "./frame-uyhWmNSJ.js";
import { G as zt, S as Mt, c as ds } from "./style-i6E2ipwK.js";
import { P as v, H as jt, r as us, M as fs, F as gs } from "./pack-D8z7b37W.js";
import { s as Z, L as W } from "./label-geometry-bLZ-6wUC.js";
import { s as ps, r as ms } from "./easing-BhDfN7yX.js";
const xs = 1e3,
  Ms = 5e3;
let nt = !1;
function ci(l, t) {
  let s,
    i = 0,
    e = 0,
    n = 0;
  function h(o = !1) {
    if (nt) return;
    nt = !0;
    const { width: r, height: a, ...u } = t();
    Ct(
      "render",
      {
        ...u,
        webgpuAvailable: !!navigator.gpu,
        htmlInCanvasAvailable: $t(),
        loadMs: s,
        devicePixelRatio: window.devicePixelRatio,
        fps: n ? Math.round((n * 1e3) / e) : void 0,
      },
      { width: r, height: a, duration: Math.round(e), flush: o },
    );
  }
  return (
    document.addEventListener(
      "visibilitychange",
      () => {
        document.hidden && h(!0);
      },
      { signal: l },
    ),
    window.addEventListener("pagehide", () => h(!0), { signal: l }),
    (o) => {
      if (!(nt || document.hidden) && ((s ??= Math.round(performance.now())), !(o <= 0))) {
        if (i < xs) {
          i += o;
          return;
        }
        (e += o), n++, e >= Ms && h();
      }
    }
  );
}
function di(l) {
  const t = new Set();
  let s = 0,
    i = 0,
    e = 0,
    n = 0;
  function h() {
    e !== n &&
      ((n = e),
      Ct("graph_exploration", { uniqueNodeCount: t.size, explorationCount: e, maxDepth: i }, { flush: !0 }));
  }
  return (
    document.addEventListener(
      "visibilitychange",
      () => {
        document.hidden && h();
      },
      { signal: l },
    ),
    window.addEventListener("pagehide", h, { signal: l }),
    l.addEventListener("abort", h, { once: !0 }),
    {
      explore(o) {
        t.add(o), e++, (i = Math.max(i, ++s));
      },
      reset() {
        (s = 0), h();
      },
    }
  );
}
const ui = {
    description: "Shopify Editions updates grouped by section",
    learnMore: "Learn more",
    learnMoreAriaLabel: "Learn more about {title}",
    captions: { persona: "It’s for", outcome: "Maximizes", theme: "Related topics", product: "Product" },
  },
  fi = (l, t) => (l.includes("{title}") ? l.replaceAll("{title}", () => t) : `${l} ${t}`),
  ot = 1.18,
  ys = 0.18,
  bs = 1.75,
  vs = 3;
class yt {
  frame;
  labelFrame = { labels: [], bounds: { left: 0, top: 0, width: 0, height: 0 } };
  #t;
  #h;
  #n;
  #e = [];
  #i = new Map();
  constructor(t, s, i = zt) {
    (this.#t = t),
      (this.#h = t.map(({ shape: e, thumbnailUrl: n }) => (e === "image" && n ? s.indexOf(n) : -1))),
      (this.#n = i),
      (this.frame = {
        nodes: new Float32Array(0),
        nodeCount: 0,
        edges: new Float32Array(0),
        edgeCount: 0,
        background: i.background,
        outline: i.imageStroke,
      });
  }
  build(t, s, i, e, n, h, o, r) {
    const a = e.scene,
      u = e.layout;
    if (!a || !u) return this.frame;
    const f = e.poses,
      p = this.#n,
      c = i.left + i.width / 2,
      d = i.top + i.height / 2,
      m = e.returning,
      M = m ? void 0 : e.junction,
      b = 1 + (p.contextAlpha - 1) * n.focus.alpha,
      g = o || m ? 0 : a.edges.length;
    this.#o(
      (r?.nodeCount ?? 0) + g + f.size + (M ? 1 : 0),
      (r?.edgeCount ?? 0) + a.edges.length + (M ? 1 : 0),
    );
    const { nodes: x, edges: y } = this.frame;
    let S = r?.nodeCount ?? 0,
      I = r?.edgeCount ?? 0;
    r && (x.set(r.nodes.subarray(0, S * N)), y.set(r.edges.subarray(0, I * P)));
    const k = (A, O, E, R, T, w, _ = -1) => {
        const F = S++ * N;
        return (
          (x[F] = A + c),
          (x[F + 1] = O + d),
          (x[F + 2] = E),
          (x[F + 3] = R),
          x.set(T, F + 4),
          (x[F + 7] = w),
          (x[F + 8] = x[F + 9] = 0),
          (x[F + 10] = t),
          (x[F + 11] = s),
          (x[F + as] = _),
          (x[F + ls] = 0),
          (x[F + cs] = 0),
          F
        );
      },
      L = (A, O, E, R, T = p.relatedWidth) => {
        const w = I++ * P;
        (y[w] = A.x + c),
          (y[w + 1] = A.y + d),
          (y[w + 2] = O.x + c),
          (y[w + 3] = O.y + d),
          (y[w + 4] = y[w + 5] = T),
          (y[w + 6] = y[w + 7] = 0),
          y.set(E, w + 8),
          (y[w + 11] = R),
          y.set(E, w + 12),
          (y[w + 15] = R),
          (y[w + 16] = y[w + 17] = 0),
          (y[w + 18] = t),
          (y[w + 19] = s);
      };
    for (const [A, [O, E]] of a.edges.entries()) {
      if (m) break;
      const R = O === a.center && a.tags.includes(E),
        T = R ? M : f.get(O),
        w = f.get(E);
      if (!T || !w) continue;
      const _ = n.edges[A].alpha,
        F = R ? 1 : Math.max(b, _),
        z = Math.min(T.alpha, w.alpha),
        G = R ? 0.7 : p.relatedIdleAlpha,
        q = z * (G + (Math.max(G, p.relatedHoverAlpha) - G) * _) * F;
      if ((L(T, w, a.kind === "update" ? p.ink : p.related, q, R ? 0.75 : p.relatedWidth), !g || R)) continue;
      const $ = O === n.hovered || E === n.hovered,
        j = (h * ys + Ss(this.#c(O), this.#c(E))) % 1;
      k(
        T.x + (w.x - T.x) * j,
        T.y + (w.y - T.y) * j,
        $ ? 1.1 : 0.75,
        B.circle,
        $ ? p.hover : p.tetherStart,
        z * (0.72 + 0.28 * _) * F * ($ ? p.hoverAlpha : 1),
      );
    }
    if (M) {
      const A = f.get(a.center);
      L(A, M, p.ink, Math.min(A.alpha, M.alpha) * 0.25), k(M.x, M.y, vs, B.square, p.ink, M.alpha);
    }
    this.#e.length = 0;
    let C;
    for (const [A, O] of f) {
      const E = A === a.center,
        R = a.parents.includes(A),
        T = a.tags.includes(A),
        w = this.#t[A],
        _ = w.role !== "section" && w.role !== "update";
      if (m && !_) continue;
      const F = A === n.hovered,
        z = m ? 0 : n.nodeFocus(a, A),
        G = T ? bs : R ? 6 : e.radius(A),
        q = T ? B.circle : E || R ? B.ring : B[w.shape],
        $ = E ? -1 : this.#h[A],
        j = k(
          O.x,
          O.y,
          G,
          q,
          E ? p.ink : this.#s(A),
          O.alpha * (E && a.kind === "update" ? 0 : T || R ? 1 : Math.max(b, z)),
          $,
        );
      if (
        (Qt(x, j, z, p.hover, Math.max(z * O.alpha, p.imageStrokeAlpha * x[j + 7])),
        !E && ss(q) && ts(x, j, n.ring(A)),
        m)
      )
        continue;
      const tt = E || R || u.titled || w.role !== "update",
        st = n.labels.get(A)?.alpha ?? 0,
        K = n.ring(A),
        ft = O.alpha * (E || R || T ? 1 : tt ? Math.max(b, z, K) : Math.max(st, K));
      if (ft < 0.01) continue;
      const D = this.#i.get(A) ?? { ...ws, id: w.id };
      this.#i.set(A, D),
        (D.x = O.x + c),
        (D.y = O.y + d),
        (D.radius = Math.max(G, x[j + 2])),
        (D.alpha = ft),
        (D.interactive = O.alpha >= 0.8 && (tt || F || st >= 0.8)),
        (D.side = e.labelSide(A)),
        (D.maxWidth = u.targets.get(A)?.labelWidth),
        (D.detail = !0),
        (D.caption = T),
        (D.emphasized = !E && q !== B.square && (F || (!tt && K > 0 && K >= st - 0.001))),
        F ? (C = D) : this.#e.push(D);
    }
    return (
      C && this.#e.unshift(C),
      (this.frame.nodeCount = S),
      (this.frame.edgeCount = I),
      (this.labelFrame.labels = this.#e),
      Object.assign(this.labelFrame.bounds, i),
      this.frame
    );
  }
  #o(t, s) {
    this.frame.nodes.length < t * N && (this.frame.nodes = new Float32Array(t * N * 2)),
      this.frame.edges.length < s * P && (this.frame.edges = new Float32Array(s * P * 2));
  }
  #c(t) {
    return this.#t[t].id;
  }
  #s(t) {
    const s = this.#t[t];
    return s.role === "section"
      ? this.#n.section
      : s.role !== "update"
        ? this.#n.ink
        : s.prominence === "featured"
          ? this.#n.featured
          : this.#n.update;
  }
}
const ws = { id: "", x: 0, y: 0, radius: 0, alpha: 0, interactive: !1 };
function Ss(l, t) {
  let s = 2166136261;
  for (const i of `${l}\0${t}`) s = Math.imul(s ^ i.charCodeAt(0), 16777619);
  return (s >>> 0) / 4294967295;
}
const ht = 4,
  Is = 4,
  ks = 0.5,
  bt = 0.05;
class Gt {
  offsets;
  sides = new Map();
  #t = new Map();
  #h = 0;
  constructor(t) {
    this.offsets = new Float32Array(t * 2);
  }
  step(t) {
    const { members: s, positions: i, bounds: e, dt: n, reduced: h } = t;
    this.#h += n;
    const o = h ? 1 : 1 - Math.exp(-12 * n),
      r = s[0] ?? -1,
      a = new Set(s),
      u = s.map((c, d) => ({
        index: c,
        slot: d,
        x: i[c * v] + this.offsets[c * 2],
        y: i[c * v + 1] + this.offsets[c * 2 + 1],
        fixed: c === r,
        size: t.size(c),
        radius: t.radius(c),
      }));
    for (const c of u) {
      if ((this.#t.delete(c.index), !c.size)) continue;
      const d = this.sides.get(c.index);
      d
        ? c.fixed && this.sides.set(c.index, this.#e(c, d, e))
        : this.sides.set(c.index, c === u[0] && t.anchorSide ? t.anchorSide : this.#n(c, u[0], e));
    }
    const f = u.filter((c) => c.size && this.sides.has(c.index));
    for (let c = 0; c < (t.still ? 0 : Is); c++) {
      for (const d of f)
        for (const m of u)
          m === d || (m.slot < d.slot && m.size) || (m.slot < d.slot ? this.#c(m, d, e) : this.#c(d, m, e));
      for (const d of u) this.#r(d, e);
    }
    let p = !1;
    for (const c of u) {
      if (c.fixed) continue;
      const d = c.index * 2,
        m = c.x - i[c.index * v] - this.offsets[d],
        M = c.y - i[c.index * v + 1] - this.offsets[d + 1];
      (this.offsets[d] += m * o), (this.offsets[d + 1] += M * o), (p ||= Math.hypot(m, M) * (1 - o) > bt);
    }
    for (let c = 0; c < this.offsets.length / 2; c++) {
      if (a.has(c)) continue;
      const d = c * 2;
      (this.offsets[d] || this.offsets[d + 1]) &&
        ((this.offsets[d] -= this.offsets[d] * o),
        (this.offsets[d + 1] -= this.offsets[d + 1] * o),
        Math.hypot(this.offsets[d], this.offsets[d + 1]) < bt
          ? (this.offsets[d] = this.offsets[d + 1] = 0)
          : (p = !0));
    }
    for (const c of this.sides.keys()) {
      if (a.has(c)) continue;
      const d = this.#t.get(c);
      d === void 0 ? this.#t.set(c, this.#h) : this.#h - d >= ks && (this.sides.delete(c), this.#t.delete(c));
    }
    return p || this.#t.size > 0;
  }
  apply(t) {
    for (let s = 0; s < this.offsets.length / 2; s++)
      (t[s * v] += this.offsets[s * 2]), (t[s * v + 1] += this.offsets[s * 2 + 1]);
  }
  #n(t, s, i) {
    const e = t === s ? (t.x > i.left + i.width / 2 ? "left" : "right") : t.x < s.x ? "left" : "right";
    return this.#e(t, e, i);
  }
  #e(t, s, i) {
    const { size: e, radius: n } = t;
    if (!e || s === "above") return s;
    const h = (r) =>
        r === "right" ? t.x + n + e.width <= i.left + i.width - W : t.x - n - e.width >= i.left + W,
      o = s === "left" ? "right" : "left";
    return !h(s) && h(o) ? o : s;
  }
  #i(t, s) {
    const i = this.sides.get(t.index);
    if (!(!t.size || !i)) return As(Z(t.x, t.y, t.radius, i, t.size, s));
  }
  #o(t) {
    const { radius: s } = t;
    return { left: t.x - s, top: t.y - s, right: t.x + s, bottom: t.y + s };
  }
  #c(t, s, i) {
    if (t.fixed && s.fixed) return;
    const e = this.#i(t, i),
      n = this.#i(s, i);
    (e && n && this.#s(t, s, e, n, i)) ||
      (e && this.#s(t, s, e, this.#o(s), i)) ||
      (n && this.#s(t, s, this.#o(t), n, i));
  }
  #s(t, s, i, e, n) {
    const h = Math.min(i.right, e.right) - Math.max(i.left, e.left) + ht,
      o = Math.min(i.bottom, e.bottom) - Math.max(i.top, e.top) + ht;
    if (h <= 0 || o <= 0) return !1;
    const r = o <= h,
      a = t.fixed ? 0 : s.fixed ? 1 : 0.5,
      u = 1 - a,
      f = (d, m) => this.#l(t, -d * m * a, r, n) || this.#l(s, d * m * u, r, n);
    let p = r
        ? Math.sign(e.top + e.bottom - i.top - i.bottom) || 1
        : Math.sign(e.left + e.right - i.left - i.right) || 1,
      c = r ? o : h;
    if (f(p, c)) {
      const d = -p,
        m =
          (r ? (d > 0 ? i.bottom - e.top : e.bottom - i.top) : d > 0 ? i.right - e.left : e.right - i.left) +
          ht;
      f(d, m) || ((p = d), (c = m));
    }
    return r ? ((t.y -= p * c * a), (s.y += p * c * u)) : ((t.x -= p * c * a), (s.x += p * c * u)), !0;
  }
  #l(t, s, i, e) {
    const n = this.sides.get(t.index);
    if (!s || !t.size || !n) return !1;
    const h = Z(t.x + (i ? 0 : s), t.y + (i ? s : 0), t.radius, n, t.size);
    return i
      ? s < 0
        ? h.top < e.top + W
        : h.top + h.height > e.top + e.height - W
      : s < 0
        ? h.left < e.left + W
        : h.left + h.width > e.left + e.width - W;
  }
  #r(t, s) {
    const { size: i, radius: e } = t,
      n = this.sides.get(t.index);
    if (t.fixed || !i || !n) return;
    const h = Z(t.x, t.y, e, n, i),
      o = Z(t.x, t.y, e, n, i, s);
    (t.x += o.left - h.left), (t.y += o.top - h.top);
  }
}
function As(l) {
  return { left: l.left, top: l.top, right: l.left + l.width, bottom: l.top + l.height };
}
const rt = [[0.82], [0.82, 0.58], [0.82, 0.48, 0.65]],
  Es = 12,
  vt = { trunkReach: 0, rootRepel: 0, sectionSpace: 0 },
  Os = 0.5,
  wt = 12,
  St = 0.7;
function Ts(l) {
  const t = Math.min(1, Math.max(0, l * 2 - 1));
  return t * t * (3 - 2 * t);
}
const It = () => {},
  kt = "explore-cluster:tags";
function Fs(l, t) {
  const s = l[t.center],
    i = [],
    e = [],
    n = [],
    h = (a, u) => {
      i.push(a),
        e.push(u),
        a.primarySectionId && n.push({ source: a.primarySectionId, target: a.id, type: "contains" });
    };
  i.push({ ...at(s, void 0), shape: "ring" }), delete i[0].thumbnailUrl, e.push(t.center);
  for (const a of [...t.parents, ...t.around]) h(at(l[a], s.id), a);
  let o = -1;
  const r = new Set();
  if (t.tags.length > 0) {
    (o = i.length),
      r.add(o),
      h(
        {
          id: kt,
          role: "section",
          label: "",
          handle: "",
          prominence: "normal",
          shape: "square",
          primarySectionId: s.id,
        },
        l.length,
      );
    for (const a of t.tags) r.add(i.length), h(at(l[a], kt), a);
  }
  return {
    tagHub: o,
    resting: Uint8Array.from(i, (a, u) => (r.has(u) ? 0 : 1)),
    data: { nodes: i, edges: n, relatedById: {}, hubIds: s.role === "section" ? [] : [s.id] },
    labelIndex: Int32Array.from(e),
  };
}
function Rs(l, t) {
  const s = rt[Math.min(rt.length, Math.ceil(t.length / Es)) - 1] ?? rt[0],
    i = new Float32Array(l);
  for (const [e, n] of t.entries()) i[n] = s[e % s.length];
  return i;
}
function at(l, t) {
  const s = l.role === "section";
  return {
    id: l.id,
    role: s ? "section" : "update",
    label: l.label,
    handle: l.handle,
    prominence: l.prominence,
    shape: s || l.role === "update" ? l.shape : "circle",
    ...(l.thumbnailUrl && { thumbnailUrl: l.thumbnailUrl }),
    ...("weight" in l && l.weight !== void 0 && { weight: l.weight }),
    ...(t && { primarySectionId: t }),
  };
}
class Ls {
  simulation;
  relations;
  spread;
  glow;
  flow;
  #t;
  #h;
  #n = new Map();
  #e;
  #i;
  #o;
  #c;
  #s;
  #l;
  #r;
  #w;
  #F = 0;
  #u = 0;
  #f = 0;
  #A;
  #E;
  #O = 0;
  #S;
  #P;
  constructor(t) {
    const { data: s, labelIndex: i, tagHub: e, resting: n } = Fs(t.nodes, t.scene);
    this.#h = i;
    for (const [a, u] of i.entries()) this.#n.set(u, a);
    (this.#l = t.labelSize),
      (this.#r = n),
      (this.#w = t.viewport),
      (this.#A = t.mixFrom ?? 0),
      (this.#E = t.opens ?? !1),
      (this.simulation = new Pt(s, t.viewport)),
      (this.simulation.pinned = 0),
      this.simulation.configure({ ...t.motion, ...vt });
    const h = Rs(
      s.nodes.length,
      (this.simulation.children[0] ?? []).filter((a) => a !== e),
    );
    for (e >= 0 && (h[e] = Os), this.simulation.rings = h; !this.simulation.warm(Number.POSITIVE_INFINITY); );
    (this.relations = new Ht(s)),
      Object.assign(this.relations.settings, t.relations),
      (this.spread = new Gt(s.nodes.length)),
      (this.glow = new Ut(s.nodes.map(({ id: a }) => a))),
      Object.assign(this.glow.settings, t.glow),
      (this.#t = new dt(
        s,
        this.simulation.radius,
        this.simulation.children,
        this.simulation.rootIndex,
        t.style,
        t.images,
      )),
      this.#t.scatterInks(s.nodes.map(({ id: a }) => a)),
      (this.#t.persistent = {
        anchor: 0,
        held: Array.from({ length: t.scene.parents.length }, (a, u) => u + 1),
        holding: 0,
        resting: n,
        fill: !0,
      }),
      (this.flow = new jt(this.#t.links.map((a) => `${a.from}:${a.to}`))),
      Object.assign(this.flow.settings, t.flow);
    const o = this.simulation.rootIndex;
    (this.#i = {
      positions: new Float32Array((o + 1) * v),
      reveal: new Float32Array(o + 1),
      scale: new Float32Array(o + 1).fill(1),
      rootScale: 0,
    }),
      (this.#o = new Float32Array(o * 2)),
      (this.#c = new Uint8Array(o));
    const r = t.start(t.scene.center) ?? { x: 0, y: 0 };
    for (let a = 0; a < o; a++) {
      const u = i[a],
        f = u < t.nodes.length ? t.start(u) : void 0;
      (this.#c[a] = f ? 1 : 0), (this.#o[a * 2] = (f ?? r).x), (this.#o[a * 2 + 1] = (f ?? r).y);
    }
    (this.#s = Array.from({ length: o }, (a, u) => u)),
      (this.#e = {
        nodes: this.relations.nodes,
        labels: this.relations.labels,
        rings: this.relations.rings,
        sectionRings: this.relations.sectionRings,
        glow: this.glow.values,
        focus: 0,
        hovered: -1,
        connections: this.relations.connections,
        sides: this.spread.sides,
      });
  }
  get labelFrame() {
    return this.#t.labelFrame;
  }
  get mix() {
    return this.#f;
  }
  get arrived() {
    return this.#u;
  }
  get left() {
    return this.#S !== void 0 && this.#S.progress >= 1;
  }
  leave(t) {
    this.#S ||
      (this.endDrag(!0),
      this.hover(-1),
      this.setPointer(null),
      (this.#S = { home: t, from: this.#f, elapsed: 0, progress: 0 }));
  }
  drawnAt(t) {
    const s = this.#n.get(t);
    if (s !== void 0) return { x: this.#i.positions[s * v], y: this.#i.positions[s * v + 1] };
  }
  configure(t) {
    if (t.motion && Object.keys(t.motion).length > 0)
      for (
        this.simulation.configure({ ...t.motion, ...vt });
        !this.simulation.warm(Number.POSITIVE_INFINITY);

      );
    Object.assign(this.relations.settings, t.relations),
      Object.assign(this.glow.settings, t.glow),
      Object.assign(this.flow.settings, t.flow);
  }
  resize(t) {
    (this.#w = t), this.simulation.resize(t.width, t.height);
  }
  hover(t) {
    const s = t < 0 ? -1 : (this.#n.get(t) ?? -1);
    this.relations.hover(s, this.simulation.time),
      (this.#e.hovered = s),
      this.simulation.setHovered(s === this.simulation.pinned ? -1 : s);
  }
  setPointer(t) {
    this.simulation.setPointer(t);
  }
  pick(t, s) {
    if (this.#S) return -1;
    const { positions: i } = this.#i;
    let e = -1,
      n = Number.POSITIVE_INFINITY;
    for (let h = 0; h < this.simulation.rootIndex; h++) {
      if (this.#i.reveal[h] < 0.8) continue;
      const o = Math.hypot(t - i[h * v], s - i[h * v + 1]),
        r = h === 0 && this.#E ? wt : Math.max(10, this.simulation.radius[h]);
      o <= r && o < n && ((n = o), (e = h));
    }
    return e < 0 ? -1 : this.#h[e];
  }
  get dragging() {
    const t = this.simulation.dragging;
    return t < 0 ? -1 : this.#h[t];
  }
  beginDrag(t, s, i, e) {
    const n = this.#n.get(t);
    n !== void 0 && n !== this.simulation.pinned && this.simulation.beginDrag(n, s, i, e);
  }
  dragTo(t, s, i) {
    this.simulation.dragTo(t, s, i);
  }
  endDrag(t, s) {
    this.simulation.endDrag(t, s);
  }
  step(t, s) {
    const i = Number.isFinite(t) && t > 0 ? Math.min(t, 0.05) : 0;
    (this.#O += i), (this.#F += i);
    const e = s ? 1 : Math.min(1, this.#F / St);
    this.#u = 1 - (1 - e) ** 3;
    let n = 1;
    const h = this.#S;
    h
      ? ((h.elapsed += i),
        (h.progress = s ? 1 : Math.min(1, h.elapsed / St)),
        (n = (1 - h.progress) ** 3),
        (this.#f = h.from * n))
      : (this.#f = this.#A + (1 - this.#A) * this.#u),
      this.simulation.step(t);
    const o = this.relations.step(s, this.simulation.positions, this.simulation.time);
    if (((this.#e.focus = this.relations.focus), this.#E)) {
      const g = this.relations.rings[0] ?? 0,
        x = g * g * (3 - 2 * g);
      this.#i.scale[0] = 1 + (wt / Math.max(0.001, this.simulation.radius[0]) - 1) * x;
    }
    const { positions: r, reveal: a } = this.#i,
      u = this.simulation.positions,
      f = this.simulation.rootIndex,
      p = h?.home(this.#h[0]);
    for (let g = 0; g < f; g++) {
      const x = g * v;
      let y = this.#o[g * 2] + (u[x] - this.#o[g * 2]) * this.#u,
        S = this.#o[g * 2 + 1] + (u[x + 1] - this.#o[g * 2 + 1]) * this.#u,
        I = g === 0 ? this.#f : this.#c[g] ? 1 : this.#u;
      if (h) {
        const k = h.home(this.#h[g]) ?? (this.#c[g] ? void 0 : p);
        k && ((y = k.x + (y - k.x) * n), (S = k.y + (S - k.y) * n)), g > 0 && (!k || !this.#c[g]) && (I *= n);
      }
      (r[x] = y), (r[x + 1] = S), (r[x + 2] = u[x + 2]), (a[g] = I);
    }
    r.set(u.subarray(f * v, (f + 1) * v), f * v);
    const c = this.#e.hovered,
      { sectionRings: d } = this.#e,
      m = this.spread.step({
        members: this.#s,
        anchorSide: "above",
        still: !0,
        positions: r,
        size: (g) => (this.#r[g] || g === c || (d[g] ?? 0) > 0 ? this.#l(this.#h[g]) : void 0),
        radius: (g) => this.simulation.radius[g] * Math.max(0, this.#i.scale[g]),
        bounds: {
          left: -this.#w.width / 2,
          top: -this.#w.height / 2,
          width: this.#w.width,
          height: this.#w.height,
        },
        dt: i,
        reduced: s,
      }),
      M = this.glow.step({
        pointer: this.simulation.pointer,
        positions: r,
        radius: this.simulation.settings.repelRadius * this.simulation.unit,
        now: this.#O,
        dt: i,
        reduced: s,
      }),
      b =
        !s &&
        (this.simulation.settings.orbitOn || this.simulation.settings.driftOn || this.flow.settings.flowOn);
    return e < 1 || (h !== void 0 && h.progress < 1) || o || m || M || this.simulation.hoverEasing || b;
  }
  build(t, s, i, e) {
    return (
      (this.#t.persistent.holding = this.#f),
      this.#t.build(t, s, this.#i, this.#e, e ? [] : this.flow.step(this.simulation.time), Ts(this.#f), i, {
        fade: this.#f,
        labelSide: It,
      })
    );
  }
  buildUnder(t, s, i, e, n) {
    const h = this.#i,
      o = (this.#P ??= {
        positions: new Float32Array(h.positions.length),
        reveal: new Float32Array(h.reveal.length),
        scale: new Float32Array(h.scale.length),
        rootScale: 0,
      });
    o.positions.set(h.positions), o.scale.set(h.scale);
    for (let r = 0; r < this.simulation.rootIndex; r++) {
      o.reveal[r] = h.reveal[r] * e;
      const a = n.drawnAt(this.#h[r]);
      a && ((o.positions[r * v] = a.x), (o.positions[r * v + 1] = a.y));
    }
    return this.#t.build(t, s, o, this.#e, [], 0, i, { fade: e, labelSide: It });
  }
}
const J = () => ({ alpha: 0, alphaFrom: 0, alphaTarget: 0, alphaStartedAt: 0 });
class Ds {
  hovered = -1;
  focus = J();
  edges = [];
  labels = new Map();
  rings = new Map();
  #t = -1;
  #h = 0;
  #n = -1;
  #e = [];
  #i;
  constructor(t) {
    this.#i = t;
  }
  reset(t) {
    (this.hovered = this.#t = this.#n = -1),
      Object.assign(this.focus, J()),
      (this.edges = (t?.edges ?? []).map(J)),
      this.labels.clear(),
      this.rings.clear(),
      (this.#e = []);
  }
  ring(t) {
    return this.rings.get(t)?.alpha ?? 0;
  }
  hover(t, s) {
    (this.hovered = t), t !== this.#t && ((this.#t = t), (this.#h = s), (this.#n = -1), (this.#e = []));
  }
  nodeFocus(t, s) {
    if (s === this.hovered) return 1;
    let i = 0;
    for (const [e, [n, h]] of t.edges.entries())
      (n === s || h === s) && (i = Math.max(i, this.edges[e].alpha));
    return i;
  }
  step(t, s, i, e, n, h) {
    const o = this.#t >= 0 && this.#t !== this.#n;
    o && i - this.#h >= this.#i.hoverIntentDelay && this.#o(t, s, this.#t, n);
    const r = e ? 0 : this.#i.hoverFadeDuration;
    let a = o;
    (a = it(this.focus, this.#n >= 0 ? 1 : 0, i, r) || a), (a = Xt(this.rings, this.hovered, i, r) || a);
    for (const [f, [p, c]] of t.edges.entries()) {
      const d = p === this.#n || c === this.#n;
      a = it(this.edges[f], d ? 1 : 0, i, r) || a;
    }
    const u = this.#e.slice(0, h);
    for (const f of u) this.labels.has(f) || this.labels.set(f, J());
    for (const [f, p] of this.labels) {
      const c = u.includes(f) ? 1 : 0;
      (a = it(p, c, i, r) || a), p.alpha === 0 && c === 0 && this.labels.delete(f);
    }
    return a;
  }
  #o(t, s, i, e) {
    this.#n = i;
    const n = s.get(i),
      h = (r) => {
        const a = s.get(r);
        return n && a ? Math.hypot(a.x - n.x, a.y - n.y) : 0;
      },
      o = new Set();
    for (const [r, a] of t.edges) r === i && o.add(a), a === i && o.add(r);
    this.#e = [...o]
      .filter((r) => r !== i && e(r))
      .sort((r, a) => h(r) - h(a))
      .slice(0, this.#i.relatedMax);
  }
}
function _s(l, t, s, i) {
  const e = l[t]?.role === "update",
    n = s.filter((r) => e && l[r]?.role === "section" && i.some(([a, u]) => a === r && u === t)),
    h = { persona: 0, outcome: 1, theme: 2, product: 3 },
    o = s.filter((r) => e && l[r].role in h).sort((r, a) => h[l[r].role] - h[l[a].role]);
  return {
    kind: l[t].role,
    center: t,
    parents: n,
    tags: o,
    around: s.filter((r) => !n.includes(r) && !o.includes(r)),
    edges: i,
  };
}
function Ns(l, t, s, i) {
  const e = new Map([
      [l.center, { x: 0, y: 0, scale: 1, labelSide: "center", labelWidth: Math.min(260, s * 0.3) }],
    ]),
    n = Math.min(220, (s - 48) / Math.max(1, l.parents.length));
  for (const [g, x] of l.parents.entries())
    e.set(x, {
      x: (g - (l.parents.length - 1) / 2) * n,
      y: -i * 0.38,
      scale: 1,
      labelSide: "above",
      labelWidth: n - 24,
    });
  const h = s >= 700 ? 2 : 1,
    o = -s / 2 + 24,
    r = -Math.min(144, s * 0.2),
    a = Math.max(70, Math.min(180, (r - o - (h === 2 ? 80 : 12)) / h)),
    u = [];
  for (let g = 0; g < Math.ceil(l.tags.length / h); g++) {
    const x = Math.max(...l.tags.slice(g * h, (g + 1) * h).map((y) => t[y].length));
    u.push((1 + Math.ceil((x * 7.2) / a)) * 16 + 16);
  }
  const f = u.reduce((g, x) => g + x, 0),
    p = Math.max(12, Math.min(32, (i * 0.6 - f) / Math.max(1, u.length - 1))),
    c = f + p * Math.max(0, u.length - 1);
  let d = -c / 2;
  for (const [g, x] of u.entries()) {
    for (let y = 0; y < h; y++) {
      const S = l.tags[g * h + y];
      S !== void 0 &&
        e.set(S, { x: y === 0 ? o : r - a - 10, y: d + x / 2, scale: 1, labelSide: "right", labelWidth: a });
    }
    d += x + p;
  }
  const m = Math.min(200, s * 0.22),
    M = Math.max(24, s / 2 - m - 32),
    b = Math.ceil(l.around.length / U);
  for (let g = 0; g < b; g++) {
    const x = 1 - (0.35 * g) / Math.max(1, b - 1),
      y = [];
    for (let I = 0; I < 360; I++) {
      const k = -Math.PI / 2 + (I * Math.PI) / 180,
        L = Math.cos(k) * M * x,
        C = Math.sin(k) * i * 0.44 * x;
      (l.tags.length && L < -80 && Math.abs(C) < c / 2 + 48) ||
        (l.parents.length && C < -i * 0.25 && Math.abs(L) < (n * l.parents.length) / 2 + 32) ||
        y.push({ x: L, y: C });
    }
    const S = l.around.slice(g * U, (g + 1) * U);
    for (const [I, k] of S.entries()) {
      const L = y[Math.floor((I * y.length) / S.length)];
      e.set(k, { ...L, scale: 1, labelSide: L.x < 0 ? "left" : "right", labelWidth: m });
    }
  }
  return {
    targets: e,
    titled: l.around.length <= 10,
    ...(l.tags.length ? { junction: { x: (o + r) / 2, y: 0 } } : {}),
  };
}
const Bt = 14,
  Wt = 18,
  Cs = 24,
  U = 14;
function lt(l, t, s) {
  if (l.labelWidth === void 0) return { left: l.x - 8, top: l.y - 8, width: 16, height: 16 };
  const i = s ? Wt : Bt,
    e = Math.min(3, Math.ceil((t.length * i * 0.64) / l.labelWidth) + 1);
  return {
    left: l.labelSide === "left" ? l.x - l.labelWidth - 14 : l.x - 8,
    top: l.y - i / 2,
    width: l.labelWidth + 22,
    height: Math.max(16, e * (i + 4)),
  };
}
function Hs(l, t, s, i) {
  if (l.kind === "update") return Ns(l, t, s, i);
  const e = [l.center, ...l.around],
    n = new Map([[l.center, { x: 0, y: 0 }]]);
  if (e.length === 1)
    return { targets: new Map([[l.center, { x: 0, y: 0, scale: 1, labelSide: "right" }]]), titled: !1 };
  const h = 170 + Math.sqrt(e.length) * 32,
    o = Math.max(0.6, Math.min(1.6, s / Math.max(1, i))),
    r = h * Math.sqrt(o),
    a = h / Math.sqrt(o),
    u = Math.ceil(l.around.length / U);
  for (const [c, d] of l.around.entries()) {
    const m = Math.floor(c / U),
      M = Math.min(U, l.around.length - m * U),
      b = c % U,
      g = -Math.PI / 2 + (b / M) * Math.PI * 2 + m * 0.3,
      x = (m + 1) / u;
    n.set(d, {
      x: Math.cos(g) * r * x,
      y: Math.sin(g) * a * x,
      labelSide: Math.cos(g) < -0.1 ? "left" : "right",
    });
  }
  if (e.length - 1 <= Cs && s >= 250) {
    const c = p(f());
    if (c.get(l.center).scale >= 0.75) return { targets: c, titled: !0 };
  }
  return { targets: p(n), titled: !1 };
  function f() {
    const c = new Map();
    for (const [d, m] of n) {
      const M = d === l.center,
        b = M ? Wt : Bt;
      c.set(d, {
        ...m,
        labelWidth: Math.min(M ? 280 : 220, Math.max(100, t[d].length * b * 0.64)),
        labelSide: m.labelSide ?? (m.x < 0 ? "left" : "right"),
      });
    }
    for (let d = 0; d < 100; d++) {
      let m = !1;
      for (let M = 0; M < e.length; M++)
        for (let b = M + 1; b < e.length; b++) {
          const g = e[M],
            x = e[b],
            y = c.get(g),
            S = c.get(x),
            I = lt(y, t[g], g === l.center),
            k = lt(S, t[x], x === l.center),
            L = Math.min(I.left + I.width, k.left + k.width) - Math.max(I.left, k.left) + 16,
            C = Math.min(I.top + I.height, k.top + k.height) - Math.max(I.top, k.top) + 16;
          if (L <= 0 || C <= 0) continue;
          m = !0;
          const A = I.left + I.width / 2 - k.left - k.width / 2,
            O = I.top + I.height / 2 - k.top - k.height / 2,
            E = Math.hypot(A, O),
            R = E ? A / E : 0,
            T = E ? O / E : 1,
            w = Math.min(L / Math.max(0.01, Math.abs(R)), C / Math.max(0.01, Math.abs(T))) + 1,
            _ = g === l.center ? 0 : x === l.center ? 1 : 0.5;
          (y.x += R * w * _), (y.y += T * w * _), (S.x -= R * w * (1 - _)), (S.y -= T * w * (1 - _));
        }
      if (!m) break;
    }
    return c;
  }
  function p(c) {
    let d = 0,
      m = 0;
    for (const [x, y] of c) {
      const S = lt(y, t[x], x === l.center);
      (d = Math.max(d, Math.abs(S.left), Math.abs(S.left + S.width))),
        (m = Math.max(m, Math.abs(S.top), Math.abs(S.top + S.height)));
    }
    const M = Math.min(32, s * 0.06, i * 0.06),
      b = Math.min(
        1.4,
        Math.max(1, s - M * 2) / Math.max(1, d * 2),
        Math.max(1, i - M * 2) / Math.max(1, m * 2),
      ),
      g = new Map();
    for (const [x, y] of c) {
      const S = Math.min(y.labelWidth ?? 220, s * 0.3),
        I = Math.max(0, s / 2 - M - S - 22);
      g.set(x, {
        x: Math.max(-I, Math.min(I, y.x * b)),
        y: y.y * b,
        scale: b,
        labelSide: y.labelSide ?? (y.x < 0 ? "left" : "right"),
        labelWidth: S,
      });
    }
    return g;
  }
}
const Ps = 0.7,
  Us = 4;
class zs {
  scene;
  layout;
  poses = new Map();
  junction;
  #t;
  #h = new Map();
  #n = 0;
  #e = 0;
  #i;
  #o;
  #c;
  #s;
  #l = new Map();
  constructor(t, s) {
    (this.#o = t), (this.#c = s);
  }
  get active() {
    return this.scene !== void 0;
  }
  get returning() {
    return this.#i !== void 0;
  }
  get arrived() {
    return this.returning ? this.#e : 0;
  }
  leave(t) {
    this.endDrag(),
      (this.#h = new Map([...this.poses].map(([s, i]) => [s, { ...i }]))),
      (this.#n = 0),
      (this.#e = 0),
      (this.#i = t);
  }
  show(t, s, i) {
    const e = new Map();
    for (const n of [t.center, ...t.parents, ...t.tags, ...t.around])
      e.set(n, this.poses.get(n) ?? { ...i(n), alpha: 0, scale: 1 });
    (this.scene = t), this.#r(s, e);
  }
  relayout(t) {
    this.#r(t, new Map(this.poses));
  }
  get dragging() {
    return this.#s?.index ?? -1;
  }
  beginDrag(t, s, i) {
    const e = this.poses.get(t);
    !e || this.returning || (this.#s = { index: t, offsetX: e.x - s, offsetY: e.y - i });
  }
  dragTo(t, s) {
    if (!this.#s) return;
    const { index: i, offsetX: e, offsetY: n } = this.#s,
      h = { x: t + e, y: s + n };
    this.#l.set(i, h), Object.assign(this.poses.get(i), h);
  }
  endDrag() {
    this.#s = void 0;
  }
  clear() {
    this.endDrag(),
      this.#l.clear(),
      (this.scene = void 0),
      (this.layout = void 0),
      this.poses.clear(),
      (this.junction = this.#t = void 0),
      this.#h.clear(),
      (this.#i = void 0);
  }
  step(t, s) {
    const i = this.layout;
    if (!i) return !1;
    this.#n += t;
    const e = s ? 1 : Math.min(1, this.#n / Ps),
      n = (this.#e = 1 - (1 - e) ** 3),
      h = this.#i;
    if (h && e === 1) return this.clear(), !1;
    for (const [o, r] of this.#h) {
      const a = h ? { ...h(o), scale: 1 } : i.targets.get(o),
        u = this.poses.get(o),
        f = h ? void 0 : this.#l.get(o);
      (u.x = f?.x ?? r.x + (a.x - r.x) * n),
        (u.y = f?.y ?? r.y + (a.y - r.y) * n),
        (u.scale = r.scale + (a.scale - r.scale) * n),
        (u.alpha = r.alpha + ((a.alpha ?? 1) - r.alpha) * n);
    }
    if (this.junction && this.#t && i.junction) {
      const o = this.#t;
      (this.junction.x = o.x + (i.junction.x - o.x) * n),
        (this.junction.y = o.y + (i.junction.y - o.y) * n),
        (this.junction.alpha = o.alpha + (1 - o.alpha) * n);
    }
    return h !== void 0 || e < 1;
  }
  radius(t) {
    const s = this.poses.get(t);
    return (
      (t === this.scene?.center ? this.#o[this.#c] : t >= this.#c ? Us : this.#o[t]) *
      Math.max(0.75, s?.scale ?? 1)
    );
  }
  pick(t, s) {
    if (this.returning) return -1;
    let i = -1,
      e = 1 / 0;
    for (const [n, h] of this.poses) {
      if (h.alpha < 0.8) continue;
      const o = Math.hypot(t - h.x, s - h.y);
      o < Math.max(10, this.radius(n) + 5) && o < e && ((e = o), (i = n));
    }
    return i;
  }
  labelSide(t) {
    const s = this.scene;
    return !s || (!this.#l.has(t) && !this.#l.has(s.center)) || !s.around.includes(t)
      ? this.layout?.targets.get(t)?.labelSide
      : this.poses.get(t).x < this.poses.get(s.center).x
        ? "left"
        : "right";
  }
  #r(t, s) {
    this.endDrag(),
      this.#l.clear(),
      (this.layout = t),
      (this.#t = t.junction ? { ...(this.junction ?? s.get(this.scene.center)) } : void 0),
      (this.junction = this.#t ? { ...this.#t } : void 0),
      (this.#h = s),
      (this.#n = 0),
      (this.#i = void 0),
      this.poses.clear();
    for (const [i, e] of s) this.poses.set(i, { ...e });
  }
}
const js = Math.PI / 180,
  Yt = {
    introOn: !0,
    introSeedIn: 0.25,
    introSeedFrom: 0,
    introDelay: 0,
    introStagger: 0.07,
    introTravel: 1.1,
    introHold: 0,
    introLeafDelay: 0.45,
    introLeafStagger: 0.025,
    introSwell: 0.7,
    introScale: 5.6,
    introScaleHold: 0.25,
    introScaleRelease: 1.75,
    introScalePow: 3,
    introScaleInOut: 0.2,
    introSpin: -180,
    introSpinDuration: 3,
    introLeafSpin: -67,
    introLeafSpinDuration: 3,
  };
function X(l) {
  return Math.max(0, Math.min(1, l));
}
function Gs(l, t) {
  return t <= 0
    ? 1 - (1 - l) ** 5
    : t >= 1
      ? l * 0.12
      : l < t
        ? (l / t) * 0.12
        : 0.12 + 0.88 * (1 - (1 - (l - t) / (1 - t)) ** 5);
}
class Bs {
  birth;
  reveal;
  travel;
  scale;
  positions;
  settings;
  rootScale = 0;
  done = !1;
  #t = 0;
  #h = [];
  #n;
  #e;
  #i;
  #o;
  constructor(t, s = {}) {
    (this.settings = { ...Yt, ...s }),
      (this.#o = t.nodes.length),
      (this.birth = new Float32Array(this.#o)),
      (this.reveal = new Float32Array(this.#o)),
      (this.travel = new Float32Array(this.#o)),
      (this.scale = new Float32Array(this.#o)),
      (this.positions = new Float32Array((this.#o + 1) * v)),
      (this.#i = new Int32Array(this.#o).fill(this.#o));
    const i = new Map(t.nodes.map((o, r) => [o.id, r])),
      e = new Set(t.hubIds ?? []),
      n = t.nodes
        .map((o, r) => ({ node: o, index: r }))
        .filter(({ node: o }) => o.role === "section" || e.has(o.id))
        .sort((o, r) => o.node.id.localeCompare(r.node.id))
        .map(({ index: o }) => o),
      h = new Map();
    for (const o of n) h.set(o, []);
    for (const [o, r] of t.nodes.entries()) {
      if (r.role === "section" || e.has(r.id)) continue;
      const a = i.get(r.primarySectionId ?? "");
      if (a === void 0 || (t.nodes[a]?.role !== "section" && !e.has(t.nodes[a].id)))
        throw new Error(`Graph update ${r.id} is missing a primary section`);
      (this.#i[o] = a), h.get(a)?.push(o);
    }
    (this.#n = n), (this.#e = h), this.#c();
  }
  configure(t) {
    Object.assign(this.settings, t), this.#c();
  }
  #c() {
    const t = [],
      s = us(this.#n);
    for (const [i, e] of this.#n.entries()) {
      const n = this.settings.introDelay + s[i] * this.settings.introStagger;
      (this.birth[e] = n), t.push(e);
      for (const [h, o] of (this.#e.get(e) ?? []).entries())
        t.push(o), (this.birth[o] = n + this.settings.introLeafDelay + h * this.settings.introLeafStagger);
    }
    this.#h = t;
  }
  reset() {
    (this.#t = 0),
      (this.done = !1),
      (this.rootScale = 0),
      this.reveal.fill(0),
      this.travel.fill(0),
      this.scale.fill(0);
  }
  seed(t) {
    const s = X(this.settings.introSeedFrom / this.breath(0));
    return this.settings.introSeedIn > 0
      ? s + (1 - s) * (1 - (1 - X(t / this.settings.introSeedIn)) ** 5)
      : 1;
  }
  spin(t, s, i, e) {
    return !i || e <= 0 ? 0 : i * js * (1 - X((t - s) / e)) ** 5;
  }
  breath(t) {
    const {
      introScale: s,
      introScaleHold: i,
      introScaleRelease: e,
      introScalePow: n,
      introScaleInOut: h,
    } = this.settings;
    if (s <= 1 || e <= 0) return 1;
    const o = X((t - i) / e),
      r = 1 - (1 - o) ** n,
      a = o < 0.5 ? 2 ** (n - 1) * o ** n : 1 - (-2 * o + 2) ** n / 2;
    return s ** (1 - (r + (a - r) * h));
  }
  step(t, s, i = !1) {
    this.#t += Math.max(0, t);
    const e = this.done || i || !this.settings.introOn,
      n = e ? 1 : this.breath(this.#t);
    this.done =
      e ||
      (n === 1 &&
        this.seed(this.#t) === 1 &&
        this.#t >= Math.max(this.settings.introSpinDuration, this.settings.introLeafSpinDuration));
    const h = e ? 0 : this.spin(this.#t, 0, this.settings.introSpin, this.settings.introSpinDuration),
      o = e ? 0 : this.spin(this.#t, 0, this.settings.introLeafSpin, this.settings.introLeafSpinDuration),
      r = this.#o * v;
    (this.positions[r] = s[r] ?? 0),
      (this.positions[r + 1] = s[r + 1] ?? 0),
      (this.positions[r + 2] = s[r + 2] ?? 0);
    for (const f of this.#h) {
      const p = this.#i[f],
        c = this.settings.introTravel * (p === this.#o ? 1 : 0.9),
        d = e || c <= 0 ? 1 : X((this.#t - this.birth[f]) / c),
        m = Gs(d, this.settings.introHold),
        M = f * v,
        b = p * v,
        g = Math.atan2(s[M + 1] - (s[b + 1] ?? 0), s[M] - (s[b] ?? 0)) + (p === this.#o ? h : o),
        x = Math.hypot(s[M] - (s[b] ?? 0), s[M + 1] - (s[b + 1] ?? 0)) * m;
      (this.positions[M] = this.positions[b] + Math.cos(g) * x),
        (this.positions[M + 1] = this.positions[b + 1] + Math.sin(g) * x),
        (this.positions[M + 2] = s[M + 2] ?? 0),
        (this.travel[f] = d),
        (this.reveal[f] = Math.min(1, d * 6)),
        (this.scale[f] = this.reveal[f] * (1 + Math.sin(Math.PI * d) * this.settings.introSwell) * n),
        (this.done &&= d === 1);
    }
    const a = this.#t - this.settings.introDelay,
      u = e || a < 0 || a > 0.6 ? 1 : 1 + Math.sin((Math.PI * a) / 0.6) * this.settings.introSwell * 0.6;
    this.rootScale = (e ? 1 : this.seed(this.#t)) * u * n;
  }
}
const qt = {
    pluckOn: !0,
    pluckReach: 8,
    pluckStretch: 220,
    pluckRoundness: 0.3,
    pluckFollowRate: 6,
    pluckFollowDamping: 0.6,
    pluckWiggleRate: 3.1,
    pluckWiggleDamping: 0.15,
    pluckBrushOn: !0,
    pluckBrush: 0.2,
    pluckBrushLimit: 14,
  },
  Y = 48,
  Ws = 65,
  At = 0.06,
  Et = 0.94,
  Ot = 1 / 240,
  Tt = 0.05,
  Ft = (l) => l.animated && l.alpha >= 0.5;
function Rt(l, t, s, i, e, n, h) {
  const o = t ? ut(t.peak, t.at, t.peak) : 0,
    r = h + Math.abs(t?.x ?? 0) * o,
    a = h + Math.abs(t?.y ?? 0) * o;
  return (
    e >= Math.min(l.from.x, l.point.x) - r &&
    s <= Math.max(l.from.x, l.point.x) + r &&
    n >= Math.min(l.from.y, l.point.y) - a &&
    i <= Math.max(l.from.y, l.point.y) + a
  );
}
function Ys(l) {
  if (l >= 1) return Math.exp(-1);
  const t = Math.sqrt(1 - l * l);
  return Math.exp((-l / t) * Math.atan2(t, l));
}
class qs {
  settings = { ...qt };
  #t;
  #h;
  #n;
  #e = new Map();
  #i;
  #o = { x: 0, y: 0 };
  #c = { x: 0, y: 0 };
  constructor(t, s, i = () => []) {
    (this.#t = t), (this.#h = s), (this.#n = i);
  }
  overCard(t, s) {
    for (const i of this.#n()) {
      const e = i.left ?? i.x,
        n = i.top ?? i.y;
      if (t >= e && t <= e + (i.width ?? 0) && s >= n && s <= n + (i.height ?? 0)) return !0;
    }
    return !1;
  }
  bend = (t) => this.#e.get(t);
  pick(t, s) {
    if (!this.settings.pluckOn || this.#h() || this.overCard(t, s)) return;
    let i,
      e = this.settings.pluckReach;
    for (const n of this.#t()) {
      if (!Ft(n)) continue;
      const h = this.#e.get(n.id);
      if (!Rt(n, h, t, s, t, s, e)) continue;
      const o = this.#c;
      (o.x = n.from.x), (o.y = n.from.y);
      for (let r = 1; r <= Y; r++) {
        const a = et(this.#o, n.from, n.point, n.handle, r / Y, h),
          u = a.x - o.x,
          f = a.y - o.y,
          p = u * u + f * f,
          c = p > 0 ? Math.max(0, Math.min(1, ((t - o.x) * u + (s - o.y) * f) / p)) : 0,
          d = Math.hypot(o.x + u * c - t, o.y + f * c - s),
          m = (r - 1 + c) / Y;
        d < e && m >= At && m <= Et && ((e = d), (i = { id: n.id, at: m })), (o.x = a.x), (o.y = a.y);
      }
    }
    return i;
  }
  grab(t, s) {
    const i = this.pick(t, s);
    if (!i) return !1;
    const e = this.#e.get(i.id),
      n = e ? ut(i.at, e.at, e.peak) : 0,
      h = gt(i.at, this.settings.pluckRoundness);
    return (
      this.#e.set(i.id, {
        at: i.at,
        peak: e?.peak ?? h,
        peakTo: e ? h : void 0,
        x: (e?.x ?? 0) * n,
        y: (e?.y ?? 0) * n,
        vx: (e?.vx ?? 0) * n,
        vy: (e?.vy ?? 0) * n,
      }),
      (this.#i = { id: i.id, x: t, y: s }),
      !0
    );
  }
  drag(t, s) {
    this.#i && ((this.#i.x = t), (this.#i.y = s));
  }
  release() {
    this.#i = void 0;
  }
  brush(t, s, i, e) {
    const { pluckOn: n, pluckBrushOn: h, pluckBrush: o, pluckBrushLimit: r } = this.settings;
    if (!n || !h || o <= 0 || r <= 0 || this.#h() || (t.x === s.x && t.y === s.y)) return !1;
    const { omega: a, damping: u } = this.#s(!1),
      f = (r * a) / Ys(u);
    let p = !1;
    for (const c of this.#t()) {
      if (!Ft(c) || this.#i?.id === c.id) continue;
      let d = this.#e.get(c.id);
      if (e - (d?.brushed ?? -1 / 0) < Ws) continue;
      const m = this.#l(c, t, s);
      if (!m) continue;
      const { at: M, nx: b, ny: g } = m,
        x = ((s.x - t.x) * b + (s.y - t.y) * g) / Math.max(i, 0.008),
        y = d ? ut(M, d.at, d.peak) : 1;
      if (!d) {
        const L = Math.min(Et, Math.max(At, M));
        (d = { at: L, peak: gt(L, this.settings.pluckRoundness), x: 0, y: 0, vx: 0, vy: 0 }),
          this.#e.set(c.id, d);
      }
      d.brushed = e;
      const S = d.vx * b + d.vy * g,
        I = Math.max(f, Math.abs(S)),
        k = Math.max(-I, Math.min(I, S + x * o * y));
      (d.vx += (k - S) * b), (d.vy += (k - S) * g), (p = !0);
    }
    return p;
  }
  clear() {
    this.#e.clear(), (this.#i = void 0);
  }
  step(t) {
    if (this.#h()) return this.clear(), !1;
    const s = this.#t();
    for (const [i, e] of this.#e) {
      const n = s.find((c) => c.id === i);
      if (!n) {
        this.#e.delete(i), this.#i?.id === i && (this.#i = void 0);
        continue;
      }
      this.#i?.id === i && (!n.animated || !this.settings.pluckOn) && (this.#i = void 0);
      const h = this.#i?.id === i ? this.#i : void 0;
      let o = 0,
        r = 0;
      if (h) {
        const c = et(this.#o, n.from, n.point, n.handle, e.at),
          d = h.x - c.x,
          m = h.y - c.y,
          M = Math.hypot(d, m),
          b = Math.max(1, this.settings.pluckStretch),
          g = M > 0 ? (b * Math.tanh(M / b)) / M : 0;
        (o = d * g), (r = m * g);
      }
      if (e.peakTo !== void 0) {
        const c = e.peakTo - e.peak;
        Math.abs(c) < 0.001
          ? ((e.peak = e.peakTo), (e.peakTo = void 0))
          : (e.peak += c * (1 - Math.exp(-12 * t)));
      }
      const { omega: a, damping: u } = this.#s(h !== void 0),
        f = a * a,
        p = 2 * u * a;
      for (let c = t; c > 0; c -= Ot) {
        const d = Math.min(Ot, c);
        (e.vx += (f * (o - e.x) - p * e.vx) * d),
          (e.vy += (f * (r - e.y) - p * e.vy) * d),
          (e.x += e.vx * d),
          (e.y += e.vy * d);
      }
      !h && Math.hypot(e.x, e.y) < Tt && Math.hypot(e.vx, e.vy) < Tt * 10 && this.#e.delete(i);
    }
    return this.#e.size > 0;
  }
  #s(t) {
    const {
      pluckFollowRate: s,
      pluckFollowDamping: i,
      pluckWiggleRate: e,
      pluckWiggleDamping: n,
    } = this.settings;
    return { omega: 2 * Math.PI * Math.max(0.25, t ? s : e), damping: Math.max(0.02, t ? i : n) };
  }
  #l(t, s, i) {
    const e = this.#e.get(t.id);
    if (!Rt(t, e, Math.min(s.x, i.x), Math.min(s.y, i.y), Math.max(s.x, i.x), Math.max(s.y, i.y), 1)) return;
    const n = i.x - s.x,
      h = i.y - s.y,
      o = this.#c;
    (o.x = t.from.x), (o.y = t.from.y);
    for (let r = 1; r <= Y; r++) {
      const a = et(this.#o, t.from, t.point, t.handle, r / Y, e),
        u = a.x - o.x,
        f = a.y - o.y,
        p = n * f - h * u;
      if (Math.abs(p) > 1e-9) {
        const c = o.x - s.x,
          d = o.y - s.y,
          m = (c * f - d * u) / p,
          M = (c * h - d * n) / p;
        if (m >= 0 && m <= 1 && M >= 0 && M <= 1 && !this.overCard(o.x + u * M, o.y + f * M)) {
          const b = Math.hypot(u, f);
          return { at: (r - 1 + M) / Y, nx: -f / b, ny: u / b };
        }
      }
      (o.x = a.x), (o.y = a.y);
    }
  }
}
const Lt = 40,
  $s = 160;
function Xs(l) {
  const { sample: t } = l;
  return l.reduced || l.journey || l.sectionId !== l.firstSectionId || t.label >= 1
    ? 0
    : 1 - ps(ms(t.scroll, Lt, Lt + $s));
}
const Vs = 0.35,
  ct = 5,
  Ks = 5,
  Zs = 2.5,
  Dt = [],
  Js = [],
  _t = 3,
  Nt = { in: 0.2, hold: 2.2, out: 0.4 };
class gi {
  simulation;
  intro;
  relations;
  spread;
  glow;
  flow;
  pluck = new qs(
    () => this.#q(),
    () => this.reducedMotion,
    () => this.#d?.anchors ?? Js,
  );
  scene;
  pointerLayout;
  reducedMotion = !1;
  #t;
  glyphLayers = !1;
  heroGlyphs = !0;
  sectionLabels = !1;
  #h;
  get sectionSeats() {
    return this.#h;
  }
  set sectionSeats(t) {
    if (t === this.#h) return;
    this.#h = t;
    const { children: s, rootIndex: i } = this.simulation,
      e = new Map();
    for (const n of s[i] ?? []) {
      const h = this.#u.nodes[n];
      if (h?.role !== "section") continue;
      const o = t?.[h.handle];
      if (!o) {
        e.clear();
        break;
      }
      e.set(n, o);
    }
    this.simulation.slots = e.size > 0 ? e : void 0;
  }
  ambientSections = !1;
  #n;
  #e = null;
  #i = ct;
  #o = 0;
  #c = !1;
  #s;
  #l;
  #r;
  #w;
  #F;
  #u;
  #f;
  #A;
  #E = { ...Mt };
  #O = { ...mt };
  #S = { painting: !1, from: [0, 0, 0], to: [0, 0, 0], mix: 0, originX: 0, originY: 0, settings: this.#O };
  #P = { id: "", index: -1 };
  #I = new ns();
  #k = { ...xt };
  #T = zt;
  #x;
  #R;
  #L;
  #M;
  #b;
  #D;
  #Z;
  #j = {
    fade: 0,
    labelSide: (t) => {
      if (this.scene.poses.has(t)) return this.intro.positions[t * v] > 0 ? "left" : "right";
    },
  };
  #y = 0;
  #_;
  #N;
  #U = 0;
  #g;
  #p;
  #a;
  #m = 0;
  #d;
  #G;
  #B;
  #v;
  #W;
  #J = { labels: [], bounds: { left: 0, top: 0, width: 0, height: 0 } };
  constructor(t, s) {
    (this.#u = t),
      (this.#B = new Map(t.nodes.flatMap((h, o) => (h.role === "section" ? [[h.handle, o]] : [])))),
      (this.#f = Vt(t)),
      (this.#A = this.#f.map(({ label: h }) => h)),
      (this.#W = t.nodes.map(({ id: h }) => ({ id: h, x: 0, y: 0, radius: 0, alpha: 0, interactive: !1 }))),
      (this.simulation = new Pt(t, s)),
      (this.intro = new Bs(t)),
      (this.relations = new Ht(t)),
      (this.spread = new Gt(t.nodes.length)),
      (this.glow = new Ut(t.nodes.map(({ id: h }) => h))),
      (this.#_ = new Float32Array(this.#f.length * 3)),
      (this.#N = new Float32Array(t.nodes.length * 3)),
      (this.#g = s.width),
      (this.#p = s.height),
      (this.#a = { left: 0, top: 0, width: s.width, height: s.height }),
      (this.#x = new dt(t, this.simulation.radius, this.simulation.children, this.simulation.rootIndex)),
      (this.#R = new pt(t, this.simulation.radius, this.simulation.children, this.simulation.rootIndex)),
      (this.#L = new Kt(t, this.simulation.radius, this.simulation.children, this.simulation.rootIndex));
    const i = () => this.#s,
      e = () => this.#r,
      n = () => this.scene;
    (this.pointerLayout = {
      get active() {
        return i() !== void 0 || e() !== void 0 || n().active;
      },
      get dragging() {
        return i()?.dragging ?? (e() ? -1 : n().dragging);
      },
      pick: (h, o) => (this.#s ? this.#s.pick(h, o) : this.#r ? -1 : this.scene.pick(h, o)),
      beginDrag: (h, o, r, a) => {
        this.#s ? this.#s.beginDrag(h, o, r, a) : this.#r || this.scene.beginDrag(h, o, r);
      },
      dragTo: (h, o, r) => {
        this.#s ? this.#s.dragTo(h, o, r) : this.#r || this.scene.dragTo(h, o);
      },
      endDrag: (h, o) => {
        this.#s ? this.#s.endDrag(h, o) : this.#r || this.scene.endDrag();
      },
      setPointer: (h) => this.#s?.setPointer(h),
    }),
      (this.scene = new zs(this.simulation.radius, this.simulation.rootIndex)),
      (this.#b = new Ds(this.relations.settings)),
      (this.#D = new yt(this.#f, this.#x.images)),
      (this.flow = new jt(this.#x.links.map((h) => `${h.from}:${h.to}`))),
      (this.#M = {
        nodes: this.relations.nodes,
        labels: this.relations.labels,
        rings: this.relations.rings,
        sectionRings: this.relations.sectionRings,
        glow: this.glow.values,
        sides: this.spread.sides,
        focus: 0,
        hovered: -1,
        ambient: -1,
        connections: this.relations.connections,
      }),
      (this.#n = t.nodes.flatMap(({ role: h }, o) => (h === "section" ? [o] : [])));
  }
  get labelFrame() {
    const t = this.#s ?? this.#r;
    return !this.#d && t
      ? t.labelFrame
      : this.#d
        ? this.#Q(this.#d)
        : this.exploring
          ? this.#D.labelFrame
          : this.#x.labelFrame;
  }
  #Q(t) {
    const s = this.#J;
    Object.assign(s.bounds, { left: 0, top: 0, width: this.#g, height: this.#p }), (s.labels.length = 0);
    const i = this.#v?.nodes;
    if (!i || this.reducedMotion) return s;
    const e = Xs(t);
    if (e > 0)
      for (const n of this.#n) {
        const h = i[n];
        if (!h) continue;
        const o = this.#W[n];
        (o.alpha = h.alpha * e),
          !(o.alpha < 0.01) &&
            ((o.x = h.x),
            (o.y = h.y),
            (o.radius = h.radius),
            (o.side = this.#x.nameSide(n) ?? o.side),
            s.labels.push(o));
      }
    return s;
  }
  get section() {
    const t = this.#d,
      s = this.#v;
    return t && s && { frame: t, presentation: s };
  }
  get heroMedia() {
    return this.#d ? this.#v?.hero : void 0;
  }
  pinCard(t) {
    const s = this.#Y();
    this.#t = { id: t, since: this.#t?.id === t && s > 0 ? this.#m - Nt.in : this.#m };
  }
  #Y() {
    if (!this.#t) return 0;
    const t = this.#m - this.#t.since,
      { in: s, hold: i, out: e } = Nt;
    return t >= s + i + e ? ((this.#t = void 0), 0) : Q(Math.min(1, t / s, (s + i + e - t) / e));
  }
  cardWire(t) {
    return this.#q().find((s) => s.id === t && s.alpha >= 0.3 && !this.pluck.bend(t));
  }
  sectionHubPoint(t) {
    const s = this.#B.get(t),
      i = this.#d && s !== void 0 ? this.#v?.nodes[s] : void 0;
    return i && i.alpha > 0.05 ? { x: i.x, y: i.y } : void 0;
  }
  #q() {
    return this.#d ? (this.#v?.tethers ?? Dt) : Dt;
  }
  get images() {
    return this.#x.images;
  }
  get labelReveal() {
    return this.#y;
  }
  get introDone() {
    return this.intro.done;
  }
  setLabelSize(t, s, i, e) {
    t < 0 || t * 3 >= this.#_.length || this.#_.set([s, i, e], t * 3);
  }
  setTitleSize(t, s, i, e) {
    t < 0 || t * 3 >= this.#N.length || this.#N.set([s, i, e], t * 3);
  }
  resize(t, s, i = { left: 0, top: 0, width: t, height: s }) {
    (this.#g = t), (this.#p = s);
    const e = i.width !== this.#a.width || i.height !== this.#a.height;
    (this.#a = i),
      this.#l?.resize(i),
      this.#r?.resize(i),
      this.#s ? this.#s.resize(i) : e && this.exploring && this.scene.relayout(this.#$(this.scene.scene)),
      this.simulation.resize(i.width, i.height),
      this.simulation.spreadHome(i);
  }
  get origin() {
    return { x: this.#a.left + this.#a.width / 2, y: this.#a.top + this.#a.height / 2 };
  }
  configure(t) {
    const s = H(t, fs);
    this.simulation.configure(s),
      Object.keys(s).length > 0 && (this.#U = this.simulation.time + _t),
      this.intro.configure(H(t, Yt));
    const i = H(t, gs),
      e = H(t, Jt),
      n = H(t, rs);
    Object.assign(this.flow.settings, i),
      Object.assign(this.relations.settings, e),
      Object.assign(this.glow.settings, n),
      Object.assign(this.pluck.settings, H(t, qt)),
      Object.assign(this.#O, H(t, mt)),
      Object.assign(this.#k, H(t, xt)),
      this.#s?.configure({ motion: s, relations: e, glow: n, flow: i });
    const h = H(t, Mt);
    Object.keys(h).length !== 0 &&
      (Object.assign(this.#E, h),
      (this.#T = ds(this.#E)),
      (this.#x = new dt(
        this.#u,
        this.simulation.radius,
        this.simulation.children,
        this.simulation.rootIndex,
        this.#T,
      )),
      (this.#D = new yt(this.#f, this.#x.images, this.#T)),
      (this.#R = new pt(
        this.#u,
        this.simulation.radius,
        this.simulation.children,
        this.simulation.rootIndex,
        this.#T,
      )));
  }
  hover(t) {
    if (this.#s) {
      this.#s.hover(t);
      return;
    }
    if (this.#r) {
      this.simulation.setHovered(-1);
      return;
    }
    if (this.scene.active) {
      this.simulation.setHovered(-1), this.exploring && this.#b.hover(t, this.#m);
      return;
    }
    const s = t < this.#u.nodes.length ? t : -1;
    this.relations.hover(s, this.simulation.time), (this.#M.hovered = s), this.simulation.setHovered(s);
  }
  explore(t, s = [], i = [], e = !1) {
    this.hover(-1), this.simulation.setPointer(null);
    const n = _s(this.#f, t, s, i);
    if (e) {
      this.#it(n.kind === "update" ? this.#tt(n) : n.kind === "section" ? n : this.#st(n));
      return;
    }
    this.#s = this.#l = this.#r = void 0;
    const { positions: h } = this.intro,
      o = t < this.#u.nodes.length ? t : this.simulation.rootIndex,
      r = this.scene.poses.get(t) ?? { x: h[o * v], y: h[o * v + 1] };
    this.scene.show(n, this.#$(n), (a) => (a < this.#u.nodes.length ? { x: h[a * v], y: h[a * v + 1] } : r)),
      this.#b.reset(n);
  }
  #tt(t) {
    const s = new Set(t.around);
    return {
      ...t,
      around: this.relations
        .related(t.center, this.relations.settings.exploreRelatedMax, this.simulation.positions)
        .filter((i) => s.has(i)),
    };
  }
  #st(t) {
    const s = (i) => {
      const e = this.#f[i];
      return e?.role === "update" ? Zt(e.weight) : 0;
    };
    return {
      ...t,
      around: t.around.toSorted((i, e) => s(e) - s(i)).slice(0, this.relations.settings.exploreRelatedMax),
    };
  }
  #it(t) {
    const s = this.#s,
      i = this.#r;
    (this.#r = void 0), (this.#l = this.reducedMotion ? void 0 : s);
    const { positions: e } = this.intro,
      n = new Map(this.scene.poses);
    this.scene.clear(), this.#b.reset(void 0);
    const h = this.#_;
    this.#s = new Ls({
      nodes: this.#f,
      scene: t,
      viewport: { width: this.#a.width, height: this.#a.height },
      motion: this.simulation.settings,
      flow: this.flow.settings,
      relations: this.relations.settings,
      glow: this.glow.settings,
      style: this.#T,
      images: this.#x.images,
      mixFrom: s ? 0 : (i?.mix ?? 0),
      opens: t.kind === "update" || t.kind === "section",
      start: (o) =>
        s?.drawnAt(o) ??
        i?.drawnAt(o) ??
        n.get(o) ??
        (o < this.#u.nodes.length ? { x: e[o * v], y: e[o * v + 1] } : void 0),
      labelSize: (o) =>
        h[o * 3] ? { width: h[o * 3], height: h[o * 3 + 1], lineHeight: h[o * 3 + 2] } : void 0,
    });
  }
  showAll() {
    if (this.#s) {
      const s = this.#s;
      if (((this.#s = this.#l = void 0), this.reducedMotion)) return;
      const { positions: i } = this.intro;
      s.leave((e) => (e < this.#u.nodes.length ? { x: i[e * v], y: i[e * v + 1] } : void 0)), (this.#r = s);
      return;
    }
    if (!this.exploring) return;
    if ((this.#b.reset(void 0), this.reducedMotion)) {
      this.scene.clear();
      return;
    }
    const { positions: t } = this.intro;
    this.scene.leave((s) => {
      const i = s < this.#u.nodes.length,
        e = i ? s : this.simulation.rootIndex;
      return { x: t[e * v], y: t[e * v + 1], alpha: i ? 1 : 0 };
    });
  }
  get exploring() {
    return this.#s !== void 0 || (this.scene.active && !this.scene.returning);
  }
  #$(t) {
    const s = Math.min(20, this.#a.width * 0.04);
    return Hs(t, this.#A, this.#a.width - s * 2, this.#a.height - s * 2);
  }
  setScrollFrame(t) {
    if (!t) {
      if (!this.#d) return;
      (this.#d = void 0), this.#I.clear(), (this.#v = void 0), this.#L.reset(), this.pluck.clear();
      return;
    }
    (this.#s = this.#l = this.#r = void 0), this.scene.clear(), this.#b.reset(void 0), (this.#d = t);
  }
  get #C() {
    return this.glyphLayers && !this.reducedMotion;
  }
  pageInput = {
    pick: (t, s) => this.pluck.pick(t, s),
    grab: (t, s) => this.pluck.grab(t, s),
    drag: (t, s) => this.pluck.drag(t, s),
    release: () => this.pluck.release(),
    hover: (t) => ((this.#G = t), this.#L.hoverChanges(t)),
    brush: (t, s, i, e) => {
      const n = this.#C && !!this.#d?.fluidTone;
      return n && this.#I.stir(t, s, i, this.#m, this.#k), this.pluck.brush(t, s, i, e) || n;
    },
  };
  stirHero(t, s, i) {
    return this.#z ? (this.#I.stir(t, s, i, this.#m, this.#k), !0) : !1;
  }
  get #z() {
    return (
      this.#C &&
      this.heroGlyphs &&
      !this.#d &&
      !this.#s &&
      !this.#r &&
      !this.scene.active &&
      !this.scene.returning
    );
  }
  replayIntro() {
    this.intro.reset(), (this.#y = 0);
  }
  step(t) {
    const s = Number.isFinite(t) && t > 0 ? Math.min(t, 0.05) : 0;
    if (((this.#m += s), this.#d)) {
      this.glow.clear(),
        (this.#i = this.simulation.time + ct),
        this.#c && (this.#H(-1), this.relations.step(!0, this.simulation.positions, this.simulation.time));
      const u = this.simulation.warming;
      u && this.simulation.warm() && (this.simulation.spreadHome(this.#a), this.#L.reset()),
        u || this.intro.step(t * ot, this.simulation.positions, this.reducedMotion),
        (this.#v = this.#K());
      const f = this.pluck.step(s);
      return (
        u ||
        !this.intro.done ||
        f ||
        this.#t !== void 0 ||
        (this.#C && this.#I.animating(this.#m, this.#k)) ||
        (this.#v?.moving ?? !1)
      );
    }
    if (this.simulation.warming) return this.simulation.warm() && this.simulation.spreadHome(this.#a), !0;
    this.simulation.step(t), this.intro.step(t * ot, this.simulation.positions, this.reducedMotion);
    const i = this.#et(this.simulation.time),
      e = this.relations.step(this.reducedMotion, this.simulation.positions, this.simulation.time);
    (this.#M.focus = this.relations.focus), (this.#M.ambient = this.relations.ambientSection);
    const n = this.#ot(s),
      h = this.glow.step({
        pointer: this.scene.active || this.#s || this.#r ? null : this.simulation.pointer,
        positions: this.intro.positions,
        radius: this.simulation.settings.repelRadius * this.simulation.unit,
        now: this.#m,
        dt: s,
        reduced: this.reducedMotion,
      }),
      o = this.#ht(s),
      r = this.#nt(t);
    this.simulation.dragging >= 0 && (this.#U = this.simulation.time + _t),
      this.intro.done
        ? this.reducedMotion
          ? (this.#y = 1)
          : (this.#y = Math.min(1, this.#y + (t * ot) / Vs))
        : (this.#y = 0);
    const a =
      !this.reducedMotion &&
      (this.simulation.settings.orbitOn || this.simulation.settings.driftOn || this.flow.settings.flowOn);
    return (
      o ||
      !this.intro.done ||
      this.#y < 1 ||
      e ||
      n ||
      h ||
      r ||
      this.simulation.hoverEasing ||
      this.simulation.time < this.#U ||
      a ||
      (this.#z && this.#I.animating(this.#m, this.#k)) ||
      i
    );
  }
  #et(t) {
    const s = this.simulation.pointer,
      i = s !== this.#e || this.#M.hovered >= 0 || this.simulation.dragging >= 0;
    if (
      ((this.#e = s),
      !(
        this.ambientSections &&
        !this.reducedMotion &&
        this.intro.done &&
        !this.scene.active &&
        !this.#s &&
        !this.#r
      ) || i)
    )
      return (this.#i = t + ct), this.#H(-1), !1;
    if ((t >= this.#o && this.#H(-1), t >= this.#i)) {
      const n = this.#n.filter((h) => h !== this.relations.ambientSection);
      this.#H(n[Math.floor(Math.random() * n.length)] ?? -1), (this.#o = t + Zs), (this.#i = t + Ks);
    }
    return !0;
  }
  #H(t) {
    this.relations.ambient(t), (this.#c = t >= 0);
  }
  #nt(t) {
    let s = this.#s?.step(t, this.reducedMotion) ?? !1;
    return (
      this.#l &&
        (this.#l.step(t, this.reducedMotion),
        !this.#s || this.#s.arrived >= 1 ? (this.#l = void 0) : (s = !0)),
      this.#r && (this.#r.step(t, this.reducedMotion), this.#r.left && (this.#r = void 0), (s = !0)),
      s
    );
  }
  #ot(t) {
    const { positions: s, scale: i } = this.intro,
      e = this.#_,
      n = this.relations.labelled.length > 0,
      h = n ? this.relations.labelled : this.relations.titled,
      o = this.spread.step({
        members: h,
        positions: s,
        anchorSide: n ? void 0 : this.#x.nameSide(h[0] ?? -1),
        size: (r) => {
          if (!n && r !== h[0]) return;
          const a = !n && this.#N[r * 3] ? this.#N : e;
          return a[r * 3] ? { width: a[r * 3], height: a[r * 3 + 1], lineHeight: a[r * 3 + 2] } : void 0;
        },
        radius: (r) => {
          const a = this.simulation.radius[r] * Math.max(0, i[r]);
          if (!n) return a;
          const u = r === h[0] ? is : es;
          return this.#u.nodes[r]?.shape === "circle" ? Math.max(a, u) : a;
        },
        bounds: {
          left: -this.#a.width / 2,
          top: -this.#a.height / 2,
          width: this.#a.width,
          height: this.#a.height,
        },
        dt: t,
        reduced: this.reducedMotion,
      });
    return this.spread.apply(s), o;
  }
  #ht(t) {
    const s = this.scene.scene;
    if (!s) return !1;
    if (this.scene.returning) return this.scene.step(t, this.reducedMotion);
    const i = this.scene.step(t, this.reducedMotion),
      e = this.scene.layout,
      n = this.#b.step(
        s,
        this.scene.poses,
        this.#m,
        this.reducedMotion,
        (o) => !e.titled && o !== s.center && this.#f[o]?.role === "update",
        Math.max(1, Math.floor(this.#a.width / 150)),
      ),
      h = !this.reducedMotion && s.edges.length > 0;
    return i || n || h;
  }
  build() {
    const t = this.#s ?? this.#r;
    if (!this.#d && t) return this.#at(t);
    if (!this.#d && this.scene.returning) {
      const u = this.#x.build(this.#g, this.#p, this.#lt(), this.#M, V, Q(this.#y), this.#a, this.#j);
      return this.#D.build(this.#g, this.#p, this.#a, this.scene, this.#b, this.#m, this.reducedMotion, u);
    }
    if (!this.#d && this.scene.active)
      return this.#D.build(this.#g, this.#p, this.#a, this.scene, this.#b, this.#m, this.reducedMotion);
    if (!this.#d) {
      const u = this.#x.build(
          this.#g,
          this.#p,
          this.intro,
          this.#M,
          this.reducedMotion ? V : this.flow.step(this.simulation.time),
          Q(this.#y),
          this.#a,
          void 0,
          this.sectionLabels,
        ),
        f = this.#k;
      return (
        (u.fluid = this.#z
          ? this.#I.frame(os, f, f.fluidHeroOpacity, f.fluidAmbientHeroOpacity, this.#m)
          : void 0),
        u
      );
    }
    const s = this.#v ?? this.#K();
    if (!s) return this.#R.frame;
    const i = this.#R.build(s, this.#g, this.#p, this.#m, this.flow, this.reducedMotion, this.pluck.bend);
    i.pageColour = this.#rt(i.nodes);
    const e = this.#d,
      n = this.#C && !e.reduced && e.fluidTone,
      h = e.journey || e.sectionId !== e.firstSectionId ? 1 : e.sample.focus ** 2,
      { open: o } = e.sample,
      r = this.#k,
      a = (u) => {
        const f = this.heroGlyphs ? u : 0;
        return f + (1 - f) * h;
      };
    return (
      (i.fluid = n
        ? this.#I.frame(
            n,
            r,
            a(r.fluidHeroOpacity) * (1 + (r.fluidReadingOpacity - 1) * o),
            a(r.fluidAmbientHeroOpacity) * (1 + (r.fluidAmbientReadingOpacity - 1) * o),
            this.#m,
          )
        : void 0),
      i
    );
  }
  #rt(t) {
    const s = this.#d,
      i = s?.pageColours;
    if (!s || !i?.length || s.reduced || this.reducedMotion) return;
    const e = this.#O;
    let n = i[0],
      h;
    for (const u of i) if (((h = hs(u.progress, e)), (n = u), h !== void 0)) break;
    const o = this.#S;
    (o.painting = h !== void 0), (o.from = n.from), (o.to = n.to), (o.mix = h ?? 0);
    const r = this.#P;
    r.id !== n.sectionId &&
      ((r.id = n.sectionId), (r.index = this.#u.nodes.findIndex(({ id: u }) => u === r.id)));
    const a = e.pageColourOrigin === "root" ? this.simulation.rootIndex : r.index;
    return (
      e.pageColourOrigin === "center"
        ? ((o.originX = this.#g / 2), (o.originY = this.#p / 2))
        : a >= 0 && ((o.originX = t[a * N]), (o.originY = t[a * N + 1])),
      o
    );
  }
  buildHero() {
    return this.#x.build(this.#g, this.#p, this.intro, this.#M, V, Q(this.#y), this.#a);
  }
  buildHeroExplored() {
    const t = this.#s ?? this.#r;
    if (!t) return;
    const s = this.#X(1, t);
    for (let i = 0; i < s.reveal.length; i++) t.drawnAt(i) || (s.reveal[i] *= 1 - t.mix);
    return this.#x.build(this.#g, this.#p, s, this.#M, V, 0, this.#a);
  }
  #at(t) {
    const s = t.build(this.#g, this.#p, this.#a, this.reducedMotion);
    if (this.#l && t === this.#s)
      return this.#V(this.#l.buildUnder(this.#g, this.#p, this.#a, 1 - t.arrived, t), s);
    if (t.mix >= 1) return s;
    const i = 1 - t.mix,
      e = this.#x.build(this.#g, this.#p, this.#X(i, t), this.#M, V, 0, this.#a, {
        fade: i,
        labelSide: () => {},
      });
    return this.#V(e, s);
  }
  #X(t, s) {
    const { positions: i, reveal: e, scale: n, rootScale: h } = this.intro,
      o = (this.#w ??= {
        positions: new Float32Array(i.length),
        reveal: new Float32Array(e.length),
        scale: new Float32Array(n.length),
        rootScale: h,
      });
    o.positions.set(i), o.reveal.set(e), o.scale.set(n), (o.rootScale = h);
    for (let r = 0; r < this.#u.nodes.length; r++) {
      o.reveal[r] *= t;
      const a = s.drawnAt(r);
      a && ((o.positions[r * v] = a.x), (o.positions[r * v + 1] = a.y));
    }
    return o;
  }
  #V(t, s) {
    const i = t.nodeCount + s.nodeCount,
      e = t.edgeCount + s.edgeCount;
    let n = this.#F;
    return (
      (!n || n.nodes.length < i * N || n.edges.length < e * P) &&
        (n = this.#F =
          {
            nodes: new Float32Array(i * N),
            nodeCount: 0,
            edges: new Float32Array(e * P),
            edgeCount: 0,
            background: s.background,
          }),
      n.nodes.set(t.nodes.subarray(0, t.nodeCount * N)),
      n.nodes.set(s.nodes.subarray(0, s.nodeCount * N), t.nodeCount * N),
      n.edges.set(t.edges.subarray(0, t.edgeCount * P)),
      n.edges.set(s.edges.subarray(0, s.edgeCount * P), t.edgeCount * P),
      (n.nodeCount = i),
      (n.edgeCount = e),
      (n.background = s.background),
      (n.outline = s.outline),
      n
    );
  }
  #lt() {
    const { positions: t, reveal: s, scale: i, rootScale: e } = this.intro,
      n = (this.#Z ??= {
        positions: new Float32Array(t.length),
        reveal: new Float32Array(s.length),
        scale: new Float32Array(i.length),
        rootScale: e,
      });
    n.positions.set(t), n.reveal.set(s), n.scale.set(i), (n.rootScale = e);
    const h = this.scene.arrived;
    this.#j.fade = h;
    for (let o = 0; o < n.reveal.length; o++) this.scene.poses.has(o) || (n.reveal[o] *= h);
    for (const [o, r] of this.scene.poses)
      o >= this.#u.nodes.length ||
        ((n.positions[o * v] = r.x),
        (n.positions[o * v + 1] = r.y),
        (n.scale[o] = i[o] * Math.max(0.75, r.scale)));
    return n;
  }
  #K() {
    if (!this.#d) return;
    const t = this.reducedMotion && !this.#d.reduced ? { ...this.#d, reduced: !0 } : this.#d;
    return this.#L.present(t, {
      pointer: this.#G,
      positions: this.simulation.positions,
      width: this.#g,
      height: this.#p,
      viewport: { left: 0, top: 0, width: this.#g, height: this.#p },
      homeCamera: { scale: 1, cx: this.#g / 2 - this.origin.x, cy: this.#p / 2 - this.origin.y },
      clock: this.#m,
      homePresentation: this.#R.homePresentation,
      homePose: this.intro,
      style: this.#T,
      orbit: this.simulation.settings,
      pinned: this.#t && { id: this.#t.id, weight: this.#Y() },
    });
  }
}
const V = [];
function Q(l) {
  return l * l * (3 - 2 * l);
}
function H(l, t) {
  const s = {};
  for (const i of Object.keys(t)) i in l && (s[i] = l[i]);
  return s;
}
export { ui as D, gi as G, ot as I, qt as P, ci as a, wt as b, di as c, Yt as d, fi as f };
