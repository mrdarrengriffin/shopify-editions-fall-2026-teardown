import { a as Mt, E as nt, N as Ut, b as is, e as _s } from "./frame-uyhWmNSJ.js";
import { h as Ms, r as Ot, a as se, b as Fs, S as ee, R as ne } from "./highlight-BjwrNyM6.js";
import { M as oe, a as wt, P as O, f as Ns, b as ke } from "./pack-D8z7b37W.js";
import { s as k, r as w, a as Ee, l as x, c as ie } from "./easing-BhDfN7yX.js";
import { G as Yt } from "./style-i6E2ipwK.js";
import { c as lt } from "./clamp-co6UzHBn.js";
import { W as vt } from "./wire-BRlyKbjJ.js";
import { S as xs, a as Tt, s as we, b as Ie, c as Te, d as be } from "./journey-B8CyvxC_.js";
const B = { push: 420, coverAt: 252, takeover: 612, focus: 1152, gather: 980, end: 1692, drop: 48 },
  ae = 900,
  Re = 0.76,
  yo = `max(1px, calc(100svh / ${ae}))`;
function As(e) {
  return Math.max(1, e / ae);
}
function xo(e) {
  const t = parseFloat(getComputedStyle(e).getPropertyValue("--hero-runway"));
  return t > 0 ? t : As(window.innerHeight);
}
const _e = 112;
function as(e, t, s = !1, i = 1440, n = 0, a = As(t)) {
  const o = e > 0,
    h = e / a,
    r = e + n,
    c = s ? +(h >= B.focus) : w(r / a, B.gather, B.end),
    f = k(w(c, 0.03, Re)),
    l = s ? 0 : k(w(c, 0, 0.72)),
    m = i <= 600 ? 88 : _e;
  return {
    scroll: e,
    expandX: s && o ? 1 : k(w(h, 0, B.push)),
    expandY: s && o ? 1 : k(w(h, B.coverAt, B.takeover)),
    blend: s ? Number(o) : k(w(h, 0, B.coverAt)),
    focus: s ? Number(o) : Ee(w(h, 0, B.focus)),
    label: s ? Number(o) : w(h, 0, B.focus),
    open: c,
    menu: f,
    depth: l,
    turn: s ? 0 : he(Math.min(h, B.focus)),
    contentY:
      re(c, t, m, a) + B.drop * (1 - k(c)) - (s ? Math.max(0, e - a * B.focus) : Math.max(0, r - a * B.end)),
  };
}
function Ao(e, t, s = 1440, i = As(t)) {
  return {
    ...as(i * x(B.gather, B.end, lt(e, 0, 1)), t, !1, s, 0, i),
    focus: 1,
    label: 1,
    turn: he(B.focus),
  };
}
function he(e) {
  return (e * 0.0015 * Math.PI) / 180;
}
function re(e, t, s, i = 1) {
  const n = Math.max(1, t + 78 - s),
    a = Math.min(i * (B.end - B.gather), n * 3),
    o = Math.min(32, Math.max(0, (3 * n - a) / 18));
  return s + n * (1 - k(e)) + a * e * e * (1 - e) + o * 64 * e ** 3 * (1 - e) ** 3;
}
function ce(e, t) {
  const s = t * 0.24,
    i = 0.8 + t * 0.168,
    n = k(w(e, s, i)),
    a = k(w(e, s, 1));
  return { amount: n, follow: x(a, e, n), alpha: 1 - k(w(n, 0.94, 1)) };
}
function Fe(e, t, s, i, n) {
  const { amount: a, follow: o } = ce(i, n);
  return { x: x(e.x, s.x, o) + (t.x - e.x) * (1 - a), y: x(e.y, s.y, o) + (t.y - e.y) * (1 - a) };
}
function Ne(e) {
  return 1 - k(w(e, 0, 0.2));
}
function Os(e, t, s) {
  return { scale: e.scale * s, x: t.x + (e.x - t.x) / s, y: t.y + (e.y - t.y) / s };
}
function Oe(e, t, s, i, n) {
  const a = e
      .map((c, f) => {
        const l = Math.max(c.top, t),
          m = Math.min(c.bottom, s);
        return {
          index: f,
          visible: Math.max(0, m - l),
          score: Math.abs((l + m) / 2 - (t + s) / 2) + Math.max(0, c.left) * 0.015,
          rect: c,
        };
      })
      .filter(({ visible: c, rect: f }) => c > 0 && f.right > 0 && f.left < i)
      .sort((c, f) => c.score - f.score || c.index - f.index),
    o = a[4]?.score ?? 1 / 0,
    h = e.map(() => 0);
  for (const c of a.slice(0, 4))
    h[c.index] =
      k(w(c.visible, 0, Math.min(72, Math.max(1, c.rect.height * 0.4)))) *
      (o === 1 / 0 ? 1 : k(w(o - c.score, 0, 36)));
  const r = n && a.find(({ index: c }) => c === n.index);
  return r && (h[r.index] = Math.max(h[r.index], n.weight)), h;
}
const Ps = { top: 72, bottom: 76 },
  Cs = 32;
function So(e, t, s, i) {
  const n = Math.max(s, t.top),
    a = Math.min(i, t.bottom);
  return Math.max(n + 2, Math.min(a - 2, e));
}
function Pe(e, t, s = t) {
  if (!(t > 0 && t < 1 && s > 0 && s < 1)) return 0;
  const i = (n) => Math.sin((Math.PI / 2) * lt(n <= s ? n / s : (1 - n) / (1 - s), 0, 1));
  return i(e) / i(t);
}
function vo(e, t) {
  if (t <= 0) return e;
  const s = (2 / Math.PI) * Math.asin(1 / (1 + t));
  return e < 0.5 ? Math.min(0.5, e / s) : Math.max(0.5, 1 - (1 - e) / s);
}
function ko(e, t) {
  return Math.max(0.1, 0.44 / (1 + (Math.abs(t.y - e.y) / Math.max(1, Math.abs(t.x - e.x))) * 0.6));
}
const Ce = (e) => k(w(e, 0.7, 1));
function Le(e, t, s, i, n, a = oe) {
  const o = a.orbitAlternate && s % 2 ? -1 : 1,
    h = a.orbitOn ? i * a.orbitSpeed * o : 0,
    r = Math.cos(h),
    c = Math.sin(h);
  return { x: (e * r - t * c - e) * n, y: (e * c + t * r - t) * n };
}
const De = 48;
function os(e, t, s = Yt) {
  return e
    ? { width: s.tetherWidth * 1.2, alpha: 0.65 }
    : { width: t ? s.relatedWidth : s.tetherWidth, alpha: 0.14 };
}
function le(e, t, s) {
  let i = 2166136261;
  for (const a of e) i = Math.imul(i ^ a.charCodeAt(0), 16777619);
  const n = ((i >>> 0) / 4294967295) * Math.PI * 2;
  return {
    x: s * (2.2 * Math.sin(t * 0.55 + n) + 0.8 * Math.sin(t * 0.23 + n * 2)),
    y: s * (2 * Math.cos(t * 0.43 + n) + Math.sin(t * 0.19 + n * 3)),
  };
}
function We(e, t, s, i = t + 78) {
  if (e >= i) return 0;
  if (e <= s) return 1;
  const n = s + ((e - s) / Math.max(1, i - s)) * (t + 78 - s);
  let a = 0,
    o = 1;
  for (let h = 0; h < 24; h++) {
    const r = (a + o) / 2;
    re(r, t, s) > n ? (a = r) : (o = r);
  }
  return (a + o) / 2;
}
function Eo(e, t, s, i = !1, n = -1 / 0, a = 1440, o = !1) {
  const h = s * (o ? xs : 0.2),
    r = w(e, s * 0.8, h),
    c = Math.min(s + 78, t - e + s * 0.2 - 24, t - n + s - De - 24),
    f = Math.min(a <= 600 ? 88 : 112, c - 1),
    l = We(t, s, f, c),
    m = w(e, h, Math.min(h - 1, f - (t - e)));
  return { enter: r, leave: l, dock: i ? 1 : Math.max(1 - r, l, m) };
}
function Ls(e, t) {
  return `${Math.min(e, t)}:${Math.max(e, t)}`;
}
class wo {
  frame;
  images;
  labelFrame = { labels: [], bounds: { left: 0, top: 0, width: 0, height: 0 } };
  links;
  #t;
  #e;
  #n = [];
  #a;
  #o;
  #i;
  #r = -1;
  #h = new Map();
  #f;
  #c;
  #l;
  #d;
  #s;
  persistent;
  constructor(t, s, i, n, a = Yt, o) {
    this.#s = a;
    const h = new Map(t.nodes.map((f, l) => [f.id, l])),
      r = [];
    for (const [f, l] of i.entries())
      for (const m of l) r.push({ from: f, to: m, key: Ls(f, m), related: !1, ...Ue(f, n, i, a) });
    for (const f of t.edges) {
      if (f.type !== "related_to") continue;
      const l = h.get(f.source),
        m = h.get(f.target);
      l === void 0 ||
        m === void 0 ||
        r.push({
          from: l,
          to: m,
          key: Ls(l, m),
          related: !0,
          ink: this.#s.related,
          inkAlpha: 1,
          inkEnd: this.#s.related,
          inkEndAlpha: 1,
        });
    }
    (this.links = r),
      (this.#t = new Float32Array(r.length)),
      (this.#d = n),
      (this.#c = s),
      (this.#o = new Float32Array(n + 1)),
      (this.#i = new Uint8Array(n + 1)),
      (this.#f = new Uint8Array(n + 1)),
      (this.#l = new Float32Array((n + 1) * 3));
    for (const [f, l] of t.nodes.entries())
      (this.#o[f] = Mt[l.shape]),
        (this.#i[f] = l.role === "section" ? 1 : 0),
        l.role === "section" && this.#r < 0 && (this.#r = f),
        (this.#f[f] = l.role === "section" || t.hubIds?.includes(l.id) ? 1 : 0),
        this.#l.set(
          l.shape === "ring"
            ? this.#s.ink
            : l.role === "section"
              ? this.#s.section
              : l.prominence === "featured"
                ? this.#s.featured
                : this.#s.update,
          f * 3,
        );
    const c = o ? [...o] : [];
    this.#a = new Float32Array(n + 1).fill(-1);
    for (const [f, l] of t.nodes.entries()) {
      if (l.shape !== "image" || !l.thumbnailUrl) continue;
      const m = c.indexOf(l.thumbnailUrl);
      this.#a[f] = m >= 0 ? m : o ? -1 : c.push(l.thumbnailUrl) - 1;
    }
    (this.images = c),
      (this.#o[n] = Mt.ring),
      this.#l.set(this.#s.ink, n * 3),
      (this.#e = t.nodes.map((f, l) => ({ id: f.id, x: 0, y: 0, radius: s[l], alpha: 0, interactive: !1 }))),
      (this.frame = {
        nodes: new Float32Array((n + 1) * Ut),
        nodeCount: n + 1,
        edges: new Float32Array((r.length + n * wt + He(t)) * nt),
        edgeCount: 0,
        background: this.#s.background,
        outline: this.#s.imageStroke,
      });
  }
  scatterInks(t) {
    for (const s of this.links)
      s.related || s.from === this.#d || Object.assign(s, fe(this.#s, Ge(t[s.to] ?? "")));
  }
  build(t, s, i, n, a, o, h = { left: 0, top: 0, width: t, height: s }, r, c = !1) {
    const f = r?.fade ?? 1,
      { nodes: l, edges: m } = this.frame,
      g = 1 + (this.#s.contextAlpha - 1) * n.focus,
      p = h.left + h.width / 2,
      A = h.top + h.height / 2,
      P = (u) => Math.max(g, n.nodes[u] ?? 0),
      b = (u) => (u === n.hovered ? 1 - this.#i[u] : (n.labels[u] ?? 0));
    for (let u = 0; u <= this.#d; u++) {
      const S = u * O,
        M = u * Ut,
        F = u === this.#d;
      if (F && this.persistent?.fill) {
        this.#g(l, M, i, p, A, t, s);
        continue;
      }
      const D = F ? f : i.reveal[u],
        E = F ? i.rootScale : i.scale[u],
        V = i.positions[S] + p,
        z = i.positions[S + 1] + A;
      (l[M] = V), (l[M + 1] = z);
      const L = this.#c[u] * Math.max(0, E);
      (l[M + 2] = L), (l[M + 3] = this.#o[u]);
      const Z = this.#o[u] === Mt.circle ? (n.glow[u] ?? 0) : 0;
      for (let W = 0; W < 3; W++) {
        const H = this.#l[u * 3 + W];
        l[M + 4 + W] = H + (1 - H) * Z;
      }
      const $ = this.#M(u);
      (l[M + 7] = u === n.hovered ? D : D * Math.max($, P(u))),
        (l[M + 10] = t),
        (l[M + 11] = s),
        (l[M + is] = this.#a[u]);
      const q = u === n.hovered ? 1 : Math.max($, n.nodes[u] ?? 0),
        j = this.persistent?.anchor === u;
      Ms(l, M, q, this.#s.hover, Math.max(q * D, this.#s.imageStrokeAlpha * l[M + 7]), j ? 0 : b(u));
      const J = j ? 0 : (n.sectionRings[u] ?? 0);
      if (
        (j || (Ot(l, M, J, ee), Ot(l, M, n.labels[u] ?? 0, ne), Ot(l, M, n.rings[u] ?? 0)),
        J > 0 && se(this.#o[u]))
      ) {
        for (let W = 0; W < 3; W++) l[M + 4 + W] += (this.#s.sectionRing[W] - l[M + 4 + W]) * J;
        l[M + 7] *= 1 + (this.#s.sectionRingAlpha - 1) * J;
      }
      const I = this.#e[u];
      if (I && this.persistent) {
        (I.x = V), (I.y = z), (I.radius = Math.max(L, l[M + 2]));
        const W = u === n.hovered,
          H = this.persistent.resting?.[u] !== 0,
          Q = Math.max(n.rings[u] ?? 0, n.sectionRings[u] ?? 0);
        (I.alpha = o * D * (H ? 1 : Q)),
          (I.interactive = (!H && W) || I.alpha >= 0.8),
          (I.focusable = !H && o * D >= 0.8),
          (I.side = n.sides.get(u)),
          (I.hovered =
            u === this.persistent.anchor || W || this.persistent.held.includes(u) || (!H && Q > 0)),
          (I.emphasized = I.hovered),
          (I.full = !0);
      } else if (I) {
        (I.x = V), (I.y = z), (I.radius = Math.max(L, l[M + 2]));
        const W = u === n.hovered,
          H = n.rings[u] ?? 0,
          Q = n.labels[u] ?? 0,
          ft = Math.min(1, Math.max(H * o * D, Q)),
          U = this.#i[u] === 1,
          dt = U ? D * k(w(i.travel?.[u] ?? 1, 0.5, 1)) : 0;
        (I.alpha = Math.max(ft, dt)),
          (I.interactive = W || (c && U ? o * D : ft) >= 0.8),
          (I.focusable = !r && this.#f[u] === 1 && o * D >= 0.8),
          (I.side = r?.labelSide(u) ?? n.sides.get(u)),
          !r &&
            this.#i[u] === 1 &&
            (u === this.#r
              ? ((I.side = "right"), this.#h.set(u, "right"))
              : I.alpha > 0
                ? ((I.side ??= this.#h.get(u) ?? (V > p ? "left" : "right")),
                  I.side !== "center" && this.#h.set(u, I.side))
                : this.#h.delete(u)),
          (I.hovered = W || (u !== n.ambient && H > 0 && H >= Math.max(Q, dt) - 0.001)),
          (I.emphasized = I.hovered && this.#o[u] !== Mt.square);
      }
    }
    let R = 0;
    for (const [u, S] of this.links.entries()) {
      const M = S.from * O,
        F = S.to * O,
        D = Math.min(Ws(i, S.from, this.#d), Ws(i, S.to, this.#d)),
        E = n.connections.get(S.key)?.alpha ?? 0,
        V = S.from === this.#d ? (n.nodes[S.to] ?? 0) : E,
        z =
          f *
          (S.related
            ? this.#s.relatedIdleAlpha * D * (1 - E) * g
            : Math.max(D, E * this.#s.containsAlpha) * Math.max(g, V));
      if (((this.#t[u] = z), z < 0.005)) continue;
      const L = R++ * nt,
        Z = S.related ? this.#s.relatedWidth : this.#s.tetherWidth;
      (m[L] = i.positions[M] + p),
        (m[L + 1] = i.positions[M + 1] + A),
        (m[L + 2] = i.positions[F] + p),
        (m[L + 3] = i.positions[F + 1] + A),
        (m[L + 4] = m[L + 5] = Z);
      const $ = !S.related && this.#p(S, n.hovered);
      m.set(S.ink, L + 8),
        (m[L + 11] = $ ? z : z * S.inkAlpha),
        m.set(S.inkEnd, L + 12),
        (m[L + 15] = $ ? z : z * S.inkEndAlpha),
        (m[L + 18] = t),
        (m[L + 19] = s),
        $ && Fs(m, L, this.#s.hover, this.#s.hoverAlpha);
    }
    (R = this.#A(R, a, i, n.hovered, p, A, t, s)),
      (R = this.#m(R, n.connections, i, p, A, t, s)),
      (this.frame.edgeCount = R),
      (this.#n.length = 0),
      n.hovered >= 0 && this.#e[n.hovered] && this.#n.push(this.#e[n.hovered]);
    for (const u of this.#e) (u.alpha >= 0.01 || u.focusable) && u !== this.#n[0] && this.#n.push(u);
    return (this.labelFrame.labels = this.#n), Object.assign(this.labelFrame.bounds, h), this.frame;
  }
  #g(t, s, i, n, a, o, h) {
    const r = this.persistent.anchor,
      c = r * O;
    (t[s] = i.positions[c] + n),
      (t[s + 1] = i.positions[c + 1] + a),
      (t[s + 2] = Math.max(0, this.#c[r] * Math.max(0, i.scale[r]) - 0.5)),
      (t[s + 3] = Mt.circle);
    for (let f = 0; f < 3; f++) t[s + 4 + f] = this.#s.backdrop[f];
    (t[s + 7] = i.reveal[r]),
      (t[s + 8] = t[s + 9] = 0),
      (t[s + 10] = o),
      (t[s + 11] = h),
      (t[s + is] = -1),
      Ms(t, s, 0, this.#s.hover, 0, 0);
  }
  nameSide(t) {
    return this.#h.get(t);
  }
  #M(t) {
    const s = this.persistent;
    return s?.held.includes(t) ? s.holding : 0;
  }
  #p(t, s) {
    return Ds(t, s) || (this.persistent?.held.some((i) => Ds(t, i)) ?? !1);
  }
  #A(t, s, i, n, a, o, h, r) {
    const { edges: c } = this.frame;
    for (const f of s) {
      const l = this.links[f.edge];
      if (!l || l.related || (t + 1) * nt > c.length) continue;
      const m = l.from * O,
        g = l.to * O,
        p = this.#t[f.edge] * 0.8;
      if (p < 0.05) continue;
      const A = i.positions[m] + a,
        P = i.positions[m + 1] + o,
        b = i.positions[g] + a - A,
        R = i.positions[g + 1] + o - P,
        u = t++ * nt;
      (c[u] = A + b * f.tail),
        (c[u + 1] = P + R * f.tail),
        (c[u + 2] = A + b * f.head),
        (c[u + 3] = P + R * f.head),
        (c[u + 4] = c[u + 5] = this.#s.flowWidth);
      const S = this.#p(l, n);
      c.set(l.ink, u + 8),
        (c[u + 11] = 0),
        c.set(l.ink, u + 12),
        (c[u + 15] = S ? p : p * l.inkAlpha),
        (c[u + 18] = h),
        (c[u + 19] = r),
        S && Fs(c, u, this.#s.hover, this.#s.hoverAlpha);
    }
    return t;
  }
  #m(t, s, i, n, a, o, h) {
    const { edges: r } = this.frame;
    for (const c of s.values()) {
      const f = c.alpha * this.#s.relatedHoverAlpha;
      if (c.kind !== "related_to" || f < 0.005) continue;
      if ((t + 1) * nt > r.length) break;
      const l = c.from * O,
        m = c.to * O,
        g = t++ * nt;
      (r[g] = i.positions[l] + n),
        (r[g + 1] = i.positions[l + 1] + a),
        (r[g + 2] = i.positions[m] + n),
        (r[g + 3] = i.positions[m + 1] + a),
        (r[g + 4] = r[g + 5] = this.#s.relatedHoverWidth),
        r.set(this.#s.related, g + 8),
        (r[g + 11] = f),
        r.set(this.#s.related, g + 12),
        (r[g + 15] = f),
        (r[g + 18] = o),
        (r[g + 19] = h);
    }
    return t;
  }
}
function He(e) {
  let t = 0;
  for (const s of Object.values(e.relatedById)) t += s.length;
  return t;
}
function Ds(e, t) {
  return t >= 0 && (e.from === t || e.to === t);
}
function Ws(e, t, s) {
  return t === s ? 1 : e.reveal[t];
}
function Ue(e, t, s, i) {
  if (e === t) return { ink: i.tetherStart, inkAlpha: 1, inkEnd: i.tetherEnd, inkEndAlpha: i.tetherEndAlpha };
  const n = s[t]?.indexOf(e) ?? 0;
  return fe(i, Math.max(0, n));
}
function fe(e, t) {
  const s = t % e.sectionInks.length;
  return {
    ink: e.sectionInks[s],
    inkAlpha: e.sectionInkAlphas[s],
    inkEnd: e.sectionInkEnds[s],
    inkEndAlpha: e.sectionInkEndAlphas[s],
  };
}
function Ge(e) {
  let t = 2166136261;
  for (let s = 0; s < e.length; s++) t = Math.imul(t ^ e.charCodeAt(s), 16777619) >>> 0;
  return (t = Math.imul(t ^ (t >>> 16), 2246822507) >>> 0), (t ^ (t >>> 13)) >>> 0;
}
const de = as(B.focus, 1).turn,
  ze = as(B.end, 1).turn,
  Be = (-22 * Math.PI) / 180;
function Gt(e, t) {
  const s = Math.cos(t),
    i = Math.sin(t);
  return { x: e.x * s - e.y * i, y: e.x * i + e.y * s };
}
function Ye(e, t) {
  return Math.hypot(e.x, e.y) < 1e-6 || Math.hypot(t.x, t.y) < 1e-6
    ? 0
    : ue(Math.atan2(e.y, e.x) - Math.atan2(t.y, t.x));
}
const ue = (e) => ((((e + Math.PI) % (2 * Math.PI)) + 2 * Math.PI) % (2 * Math.PI)) - Math.PI,
  Bt = (e) => !e.reduced && (e.journey !== void 0 || e.previousSectionId !== void 0);
function Xe(e, t, s) {
  if (!Bt(e)) return;
  const i = t(e.firstSectionId ?? e.sectionId),
    n = t(e.sectionId);
  if (!i || !n) return;
  const a = (f) => de + Ye(i, f),
    { journey: o } = e,
    h = o && t(o.to);
  if (!h) {
    const f = a(n),
      l = Gt(n, f);
    return { angle: f, total: 0, from: l, to: l };
  }
  const r = e.previousSectionId === void 0 ? ze : a(n),
    c = ue(a(h) - r);
  return { angle: r + c * Math.min(1, Math.max(0, s)), total: c, from: Gt(n, r), to: Gt(h, r + c) };
}
const fs = (e) => k(w(e, 0.45, 1)) * Be,
  Ve = 1.2,
  $e = 0.08,
  Ke = 1.5,
  Hs = 0.45;
function me(e) {
  const { journey: t } = e;
  return t && Bt(e) ? t.sample.reveal * (1 - t.sample.isolate) : 0;
}
function qe(e) {
  const { journey: t, reduced: s, sample: i } = e;
  return s ? 0 : (t ? k(w(t.sample.progress, 0, 0.24)) : k(w(i.focus, 0.88, 1))) * (1 - k(w(i.open, 0, 0.2)));
}
class Je {
  #t = 0;
  #e;
  #n;
  #a;
  step(t, s, i, n, a) {
    t !== this.#a && this.reset(), (this.#a = t);
    const o = lt(a - (this.#n ?? a), 0, 0.05),
      h = s !== void 0 && this.#e !== void 0 && o > 0 ? (s - this.#e) / o : 0;
    (this.#n = a), (this.#e = s);
    const r = lt(-i * h * Ke * 0.12, -Hs, Hs) * n;
    return (this.#t += (r - this.#t) * Math.min(1, o * 5)), this.#t * n;
  }
  reset() {
    (this.#t = 0), (this.#e = void 0), (this.#n = void 0), (this.#a = void 0);
  }
}
function ge(e, t, s, i, n, a, o) {
  if (a < 0.005 && Math.abs(o) < 5e-4) return e;
  const h = le(t, n * 1.7, a * Ve * 5),
    r = e.x + h.x,
    c = e.y + h.y;
  if (!i) return { x: r, y: c };
  const f = 1 + $e * a * Math.sin(n * 1.1 + s * 2.1),
    l = (r - i.x) * f,
    m = (c - i.y) * f,
    g = Math.cos(o),
    p = Math.sin(o);
  return { x: i.x + l * g - m * p, y: i.y + l * p + m * g };
}
function pe(e, t) {
  return e.shape === "image" ? t * Math.SQRT2 : e.role === "section" ? t * 0.9 * Math.SQRT2 : t;
}
function Me(e, t, s) {
  return pe(e, t) * Math.max(1, s) + 2;
}
function ye(e, t, s, i, n, a) {
  const o = s === void 0 ? -1 : (i.get(s) ?? -1),
    h = new Set(o >= 0 ? (n[o] ?? []) : []);
  return {
    incomingHub: o,
    incomingChildren: h,
    labelHub: o >= 0 ? o : e,
    amount: (r, c = a) => Number(r === e || t.has(r)) * (1 - c) + Number(r === o || h.has(r)) * c,
  };
}
function ds(e, t, s, i) {
  if (!i) return;
  const n = e[t],
    a = Math.cos(i),
    o = Math.sin(i);
  for (const h of s) {
    const r = e[h].x - n.x,
      c = e[h].y - n.y;
    e[h] = { x: n.x + r * a - c * o, y: n.y + r * o + c * a };
  }
}
const Qe = 1.4,
  Ze = 0.25;
function Us(e, t, s, i) {
  if (i < 0.005 || s.length === 0) return;
  const n = e[t];
  let a = 0,
    o = 0,
    h = 0;
  for (const l of s) {
    const m = e[l].x - n.x,
      g = e[l].y - n.y;
    (a += m), (o += g), (h += Math.hypot(m, g));
  }
  h /= s.length;
  const r = Math.hypot(a, o),
    c = r > 1e-6 ? (h * Ze * i) / r : 0,
    f = 1 + (Qe - 1) * i;
  for (const l of s) e[l] = { x: n.x + (e[l].x - n.x) * f + a * c, y: n.y + (e[l].y - n.y) * f + o * c };
}
const je = 0.97,
  tn = 0.4,
  sn = (e, t) => k(w(e, t * (1 + tn), t)),
  en = (e) => k(w(e, 0, je)),
  nn = (e) => 1 - k(w(e, 0.78, 1));
function on(e, t, s, i) {
  return { width: x(t >= 1 ? e : e * t, s.width, i), height: x(t >= 1 ? e / t : e, s.height, i) };
}
function an(e, t, s) {
  const i = Math.max(1, x(e.width, t.width, s)),
    n = Math.max(1, x(e.height, t.height, s)),
    a = x(e.x, t.left + t.width / 2, s),
    o = x(e.y, t.top + t.height / 2, s);
  return { left: a - i / 2, top: o - n / 2, width: i, height: n, radius: t.radius * s };
}
const hn = 0.5,
  rn = 8;
function cn(e, t, s, i, n = -1) {
  for (let a = 0; a < rn; a++)
    for (const [o, h] of t.entries())
      for (const r of t.slice(o + 1)) {
        const c = e[h],
          f = e[r],
          l = f.x - c.x,
          m = f.y - c.y,
          g = Math.hypot(l, m),
          p = g ? l / g : 1,
          A = g ? m / g : 0,
          b =
            ((((s(h) + s(r)) * (1 + hn)) / Math.max(Math.abs(p), Math.abs(A)) - g) / 2) *
            Math.min(i(h), i(r));
        if (b <= 0) continue;
        const R = h === n || r === n ? 2 : 1,
          u = h === n ? 0 : b * R,
          S = r === n ? 0 : b * R;
        (e[h] = { x: c.x - p * u, y: c.y - A * u }), (e[r] = { x: f.x + p * S, y: f.y + A * S });
      }
}
const ln = 2.2,
  fn = 0.35,
  Gs = (60 * Math.PI) / 180,
  dn = 0.25;
function zs(e, t) {
  let s = 2166136261 ^ t;
  for (const i of e) s = Math.imul(s ^ i.charCodeAt(0), 16777619);
  return (s >>> 0) / 4294967295;
}
function un({
  data: e,
  radius: t,
  children: s,
  rootIndex: i,
  hub: n,
  sections: a,
  activeChildren: o,
  ranks: h,
  sectionIndexById: r,
  parents: c,
  edges: f,
  frame: l,
  options: m,
  projection: g,
  labelOrigin: p,
  style: A,
  orbit: P,
  lag: b,
  floatAmount: R,
  orbitTime: u,
  firstArcOrder: S,
}) {
  const { sample: M, target: F, reduced: D, journey: E } = l,
    { homePresentation: V, homePose: z } = m,
    { sectionMix: L } = g,
    Z = (d) => z?.scale[d] ?? 1,
    $ = Ce(M.menu),
    q = Math.max($, V ? (l.homeMix ?? (!l.layout && !E ? M.focus : 1)) : 1),
    {
      incomingHub: j,
      incomingChildren: J,
      labelHub: I,
      amount: W,
    } = ye(n, o, E?.to, r, s, E?.sample.pan ?? 0),
    H = Bt(l),
    Q = H
      ? E
        ? Math.max(x(l.previousSectionId === void 0 ? 0 : Tt, Tt, E.sample.pan), E.sample.context)
        : Tt
      : 0,
    ft = H ? Q : we(M.menu),
    U = me(l),
    dt = Math.max(U, fn * R),
    v = E ? J : o,
    C = E ? j : n,
    Y = a.indexOf(C),
    ht = (d) => Me(e.nodes[d], t[d], g.camera.scale),
    tt = (d) => ((l.focusAnchor && d === n) || (E?.focusAnchor && d === j) ? 0 : W(d)),
    st = g.contain(g.screen(g.hub), ht(n), tt(n)),
    yt = !!l.fitLayouts,
    G = yt && l.hero ? (r.get(l.hero.id) ?? -1) : -1,
    et = l.hero && !D ? sn(l.hero.cardTop, m.height) : 0,
    rt = l.hero && !E && !D && M.open > 0 ? (r.get(l.hero.id) ?? -1) : -1,
    ot = o.has(rt),
    it = ot ? rt : et > 0 && (E ? J : o).has(G) ? G : -1;
  let xt;
  const Pt = Ne(M.open),
    Xt = (d) => x((V?.radii[d] ?? t[d]) * Z(d), t[d], L) * g.camera.scale,
    Vt = (d) => Xt(d) * Pt,
    $t = (d) => on(Xt(d) * 2, l.hero?.aspect ?? 1, l.hero.target, et),
    _t = new Map();
  for (const d of yt ? [n, j] : []) {
    if (d < 0) continue;
    const _ = (d === a[0] ? S : (s[d] ?? [])).filter((N) => e.nodes[N].shape === "image" && N !== G);
    for (const [N, K] of _.entries()) _t.set(K, { slot: N, count: _.length });
  }
  const { bounds: kt } = g,
    Kt = (d) =>
      E
        ? E.focusAnchor && d === j
          ? k(w(E.sample.progress, 0.9, 1))
          : 0
        : d === n
          ? k(w(l.focusAnchor?.hold ?? 0, 0.972, 1))
          : 0,
    bt = g.rest.map((d, _) => {
      const N = c[_] ?? -1,
        { id: K, role: ct } = e.nodes[_],
        gt = g.screen(d),
        pt = N >= 0 ? g.screen(g.rest[N]) : void 0,
        hs = ge(gt, K, N, pt, m.clock, ct === "section" ? U : dt, b),
        jt = mn(hs, K, _, g, v, R, C, Y, m.clock, u, H ? void 0 : P),
        rs = tt(_);
      if (!rs) return jt;
      const cs = g.contain(jt, ht(_), rs),
        St = _ === G ? l.hero?.target : void 0,
        Lt = St ? x(ht(_), St.height * 2, et) : ht(_),
        ls = _t.get(_);
      let Dt;
      if (St)
        Dt = {
          x: St.left + St.width / 2,
          y: Math.min(kt.bottom - Lt, x(St.top - Lt, St.top + St.height / 2, et)),
        };
      else if (ls && pt) {
        const bs = g.firstTurn + x(-Gs, Gs, (ls.slot + 0.5 + (zs(K, 1) - 0.5) * 2 * dn) / ls.count),
          Rs = x(0.75, 1, zs(K, 2));
        Dt = {
          x: pt.x + (kt.right - Lt - pt.x) * Math.cos(bs) * Rs,
          y: pt.y + ((kt.bottom - kt.top) / 2) * Math.sin(bs) * Rs,
        };
      }
      if (!Dt) return cs;
      const Is = k(M.focus) * rs,
        Ts = St ? x(0.5, 0, et) : 1;
      return {
        x: x(cs.x, Dt.x + (jt.x - gt.x) * Ts, Is),
        y: x(cs.y, lt(Dt.y, kt.top + Lt, kt.bottom - Lt) + (jt.y - gt.y) * Ts, Is),
      };
    });
  cn(
    bt,
    e.nodes.flatMap((d, _) => (d.shape === "image" && W(_) > 0 ? [_] : [])),
    (d) => (d === it ? Math.max(...Object.values($t(d))) / 2 : Vt(d)),
    W,
    G,
  );
  const At = bt.map((d, _) => {
      if (_ === it && l.hero) {
        const N = $t(_);
        return (
          (xt = ot
            ? an({ ...d, ...N }, l.hero.target, en(M.menu))
            : { left: d.x - N.width / 2, top: d.y - N.height / 2, ...N, radius: 0 }),
          { x: xt.left + xt.width / 2, y: xt.top + xt.height / 2 }
        );
      }
      return _ === n
        ? { x: x(d.x, F.x, M.menu), y: x(d.y, F.y, M.menu) }
        : o.has(_)
          ? Fe(st, d, F, M.menu, h.get(_) ?? 0)
          : d;
    }),
    Rt = (d) => {
      const _ = e.nodes[d];
      if ((ot && d === rt) || (_.shape === "image" && Pt === 0)) return 0;
      if (E && M.open === 0) {
        const N = d === n || o.has(d),
          K = d === j || J.has(d);
        return H ? x(x(Number(N), Number(K), E.sample.pan), 1, Q) : Ie(N, K, E.sample);
      }
      if (d !== n && !o.has(d)) {
        const N = H ? x(1, Q, k(M.focus)) : x(1, Tt, k(M.focus)) * (1 - M.menu);
        return E && (d === j || J.has(d)) ? Math.max(N, E.sample.context) : N;
      }
      return d === n ? 1 : ce(M.menu, h.get(d) ?? 0).alpha;
    },
    Ft = (d) => Rt(d) * (e.nodes[d]?.shape === "image" ? Pt : 1),
    Et = (d) => z?.reveal[d] ?? 1,
    y = (d) => x((V?.nodes[d] ?? 1) * Et(d), Rt(d), L),
    T = At.map((d, _) => {
      const N = t[_],
        K = (V?.radii[_] ?? N) * Z(_),
        ct = e.nodes[_],
        gt =
          ct.shape === "image"
            ? Vt(_)
            : x(
                K,
                E && M.open === 0
                  ? ct.role === "section"
                    ? 4
                    : 1.3
                  : x(N, _ === n ? x(4, 2, M.menu) : ct.role === "section" ? 4 : 1.3, M.focus),
                L,
              );
      return {
        x: d.x,
        y: d.y,
        radius: gt,
        scale: gt / Math.max(N, 1e-4),
        alpha: _ === it ? 0 : y(_),
        inkMix: ct.shape === "image" ? 0 : q,
        round: ct.role === "section" ? Math.max(k(w($, 0.4, 0.6)), Kt(_)) : 0,
      };
    }),
    X = g.screen(g.rest[I]),
    at = g.contain(X, ht(I), tt(I)),
    mt = tt(I) ? { x: 0, y: 0 } : { x: bt[I].x - X.x, y: bt[I].y - X.y },
    ut = g.screen(g.root),
    Ct = x(1, E ? ft * 0.65 : Math.max(ft * 0.65, 1 - M.focus * 1.6), L),
    qt = t[i] * x(z?.rootScale ?? 1, g.camera.scale, L),
    Jt = A.tetherWidth * 1.2,
    Qt = a
      .map((d) => ({
        sectionIndex: d,
        from: ut,
        to: At[d],
        width: Jt,
        alpha: Ct * x(Et(d), 1, L) * (d === n ? 1 - k(w(M.menu, 0.55, 0.95)) : 1),
        inkMix: q,
      }))
      .filter((d) => d.alpha >= 0.001),
    Zt = f
      .map((d, _) => {
        const N = os(d.sectionSpoke, d.related, A),
          K = V?.edges[_] ?? 0,
          ct = K > 0 ? (d.related ? A.relatedIdleAlpha : K) * Math.min(Et(d.from), Et(d.to)) : 0,
          pt =
            ot && d.sectionSpoke && (d.from === rt || d.to === rt)
              ? N.alpha * nn(M.menu)
              : x(
                  ct,
                  Math.min(Ft(d.from), Ft(d.to)) *
                    N.alpha *
                    (d.sectionSpoke ? 1 : H ? 1 + (ln - 1) * (1 - M.menu) : 1 - M.menu),
                  L,
                );
        return {
          fromIndex: d.from,
          toIndex: d.to,
          from: At[d.from],
          to: At[d.to],
          width: L === 1 ? N.width : d.related ? A.relatedWidth : A.tetherWidth,
          alpha: pt,
          inkMix: q,
          related: d.related,
        };
      })
      .filter((d) => d.alpha >= 0.001),
    Ss = Ps.top,
    vs = m.height - Ps.bottom,
    Se = k(w(M.menu, 0.7, 1)),
    ve = l.anchors.map((d) => ({
      top: d.top ?? d.y,
      bottom: (d.top ?? d.y) + (d.height ?? 0),
      left: d.left ?? d.x,
      right: (d.left ?? d.x) + (d.width ?? 0),
      height: d.height ?? 0,
    })),
    ks = m.pinned ? l.anchors.findIndex(({ id: d }) => d === m.pinned.id) : -1,
    Es = Oe(ve, Ss, vs, m.width, ks < 0 ? void 0 : { index: ks, weight: m.pinned.weight })
      .map((d, _) => {
        const N = l.anchors[_],
          K = Math.min(1, d * Se * 1.25);
        if (K <= 0) return;
        const ct = Ss + Cs,
          gt = vs - Cs,
          pt = N.y > ct && N.y < gt,
          hs = { x: N.x, y: lt(N.y, ct, gt) };
        return {
          id: N.id,
          from: At[n],
          point: hs,
          alpha: K,
          handle: 0,
          reach: pt ? 1 : 0,
          domMarker: !!N.domMarker,
          animated: !D && M.menu === 1 && pt,
        };
      })
      .filter((d) => d !== void 0),
    ws = !D && $ < 1;
  return (
    (T[i] = { x: ut.x, y: ut.y, radius: qt, scale: qt / t[i], alpha: Ct, inkMix: $, round: 0 }),
    {
      nodes: T,
      guides: Qt,
      edges: Zt,
      tethers: Es,
      camera: g.camera,
      bounds: g.bounds,
      label: {
        sectionId: e.nodes[I].id,
        mark: T[I],
        anchor: { x: at.x + 8, y: at.y - 5, origin: { x: p.x + 8, y: p.y - 5 } },
        departure: { x: p.x + mt.x, y: p.y + mt.y },
        source: at,
      },
      hero: xt && {
        sectionId: E ? E.to : l.sectionId,
        id: e.nodes[it].id,
        flight: xt,
        shrink: et,
        menu: ot ? M.menu : 0,
        alpha: ot ? 1 : y(it),
      },
      fade: x(1, A.pageLineAlpha, q),
      markFade: x(1, A.pageMarkAlpha, q),
      flowActive: ws,
      moving: R > 0 || dt > 0 || Math.abs(b) > 0.002 || ws || Es.some((d) => d.animated),
    }
  );
}
function mn(e, t, s, i, n, a, o, h, r, c, f) {
  if (!a || !n.has(s) || o < 0) return e;
  const l = i.screen(i.rest[o]),
    m = le(t, r, a),
    g = f ? Le(e.x - l.x, e.y - l.y, h, c, a, f) : { x: 0, y: 0 };
  return { x: e.x + m.x + g.x, y: e.y + m.y + g.y };
}
const gn = 0.22,
  ts = 0.35,
  Bs = 3,
  pn = 6,
  Mn = 0.7,
  yn = new Map();
function xn(e, t, s, i) {
  const n = (a) => {
    const o = Math.atan2(e[a * t] - e[s * t], -(e[a * t + 1] - e[s * t + 1]));
    return o < 0 ? o + 2 * Math.PI : o;
  };
  return [...i].sort((a, o) => n(a) - n(o) || a - o);
}
function An(e, t, s, i) {
  const n = new Map(),
    a = new Map();
  for (const h of s) {
    const r = i[h] ?? [];
    n.set(h, xn(e, t, h, r));
    let c = 1e-6;
    for (const f of r) c = Math.max(c, Math.hypot(e[f * t] - e[h * t], e[f * t + 1] - e[h * t + 1]));
    a.set(h, c);
  }
  const o = [...a.values()].sort((h, r) => h - r);
  return { orders: n, reaches: a, reach: o[Math.floor(o.length / 2)] ?? 1 };
}
function Ys(e, t, s, i) {
  if (!e.length || s <= 0.001) return;
  const n = (t / gn) % (e.length + pn);
  for (const [a, o] of e.entries()) {
    const h = n - a;
    if (h < 0 || h > Bs) continue;
    const r = h < ts ? h / ts : 1 - (h - ts) / (Bs - ts);
    i.set(o, Math.max(i.get(o) ?? 0, k(r) * s));
  }
}
function Sn(e, t, s) {
  return k(w(e, ...t)) * (1 - k(w(e, ...s)));
}
function vn(e, t, s) {
  return !t.size && !s.size ? e : { ...e, hover: { rings: t, related: yn, family: s }, moving: !0 };
}
function kn(e, t, s, i, n) {
  return ge(e, t, s, i, n, Mn, 0);
}
function En(e, t, s) {
  const i = (n) => ({ ...n, x: n.x + t, y: n.y + s });
  return {
    ...e,
    mark: i(e.mark),
    anchor: { ...i(e.anchor), origin: i(e.anchor.origin) },
    departure: i(e.departure),
    source: i(e.source),
  };
}
const wn = 0.25,
  In = 1.42,
  Tn = 0.2,
  Wt = [0.05, 0.45],
  bn = [0, 0.25],
  Rn = [0.55, 1],
  _n = 1.3,
  Fn = 1.12,
  Nn = 0.4,
  On = 0.7,
  Pn = 0.2,
  Cn = 0.5,
  Ln = 0.4,
  Dn = 0.5,
  Xs = 0.65,
  Wn = 1.4,
  Vs = 100,
  Hn = 60,
  $s = 0.2,
  Un = 120,
  Ks = 0.55,
  Gn = 0.1,
  zn = [0.62, 0.78],
  Bn = [0.86, 1],
  us = (e) => (e * Math.PI) / 180;
function Yn({ height: e, ahead: t, behind: s }) {
  const i = e * xs,
    n = s ? Math.max(0, i - s.toTop) : 1 / 0;
  if (!t || n < e * Wt[1]) {
    if (!s) return { along: 0, pan: 0, lift: 0, shown: 0, world: 0, heading: !1 };
    const r = e * Tn;
    return {
      along: 0,
      pan: 0,
      lift: -(n < r ? (n * n) / (2 * r) : n - r / 2),
      shown: 1 - k(w(n, e * Wt[0], e * Wt[1])),
      world: 0,
      heading: !1,
    };
  }
  const a = t.toTop - t.fromBottom,
    o = w(t.fromBottom, e * In, i - a),
    h = ie(o);
  return {
    along: o,
    pan: h,
    lift: (t.fromBottom + e * (wn - 0.5)) * (1 - h),
    shown: k(w(n, e * Wt[1], e * 2 * Wt[1])),
    world: k(w(o, ...bn)) * (1 - k(w(o, ...Rn))),
    heading: !0,
  };
}
function Xn(e, t) {
  const { hub: s, parents: i, clock: n, course: a } = t,
    o = t.zoomIn?.amount ?? 1,
    h = o < 1 ? t.zoomIn?.posed : void 0,
    r = h
      ? (y) => {
          const T = t.world(y);
          return { x: x(h[y * O], T.x, o), y: x(h[y * O + 1], T.y, o) };
        }
      : t.world,
    { pan: c, shown: f } = a,
    l = a.heading ? t.toward : -1,
    m = { x: t.width / 2, y: t.height / 2 + a.lift * o },
    g = r(s),
    p = l >= 0 ? r(l) : g,
    A = Math.hypot(p.x - g.x, p.y - g.y) * t.scale,
    P = l >= 0 ? Math.max(Pn, A / (m.x * 2 * On) - 1) : 0,
    b = t.scale / (1 + P * Math.sin(Math.PI * c)),
    R = { x: x(g.x, p.x, c), y: x(g.y, p.y, c) },
    u = a.heading ? ie(w(a.along, 0, 1 - $s)) : 0,
    S = o < 1 ? (t.zoomIn?.along ?? o) : 1,
    M = k(S),
    F = (Hn + Vs * t.ordinal) % 360,
    D = us(F > 180 ? F - 360 : F),
    E = -D * M - us(Vs) * u,
    V = o < 1 ? D * (M - k(w(S, $s, 1))) : 0,
    z = Math.cos(E),
    L = Math.sin(E),
    Z = t.zoomIn?.home,
    $ = Z && o < 1 ? Math.exp(x(Math.log(Z.scale), Math.log(b), o)) : b,
    q = Z && o < 1 ? { x: x(Z.x, R.x, o), y: x(Z.y, R.y, o) } : R,
    j = (y) => {
      const T = (y.x - q.x) * $,
        X = (y.y - q.y) * $;
      return { x: m.x + T * z - X * L, y: m.y + T * L + X * z };
    },
    J = x(1, _n, o) * (a.heading ? x(Fn, 1, k(w(c, 0, Nn))) : 1),
    I = l >= 0 ? us(Un) * (1 - k(w(a.along, Gn, 1))) : 0,
    W = (y) => {
      const T = i[y] ?? -1;
      if (T < 0) return r(y);
      const X = r(T),
        at = r(y),
        mt = (at.x - X.x) * J,
        ut = (at.y - X.y) * J,
        Ct = T === l ? I : T === s && V !== 0 ? V : 0;
      if (Ct === 0) return { x: X.x + mt, y: X.y + ut };
      const qt = (t.reaches.get(T) ?? 1) * J,
        Jt = Ct * (Ks + (1 - Ks) * Math.min(1, Math.hypot(mt, ut) / qt)),
        Qt = Math.cos(Jt),
        Zt = Math.sin(Jt);
      return { x: X.x + mt * Qt - ut * Zt, y: X.y + mt * Zt + ut * Qt };
    },
    H = e.nodes.map((y, T) => j(W(T))),
    Q = 1 - k(w(c, 0.5, 1)),
    ft = l >= 0 ? k(w(c, 0, 0.5)) : 0,
    U = (y) => (y === s || i[y] === s ? Q : l >= 0 && (y === l || i[y] === l) ? ft : 0),
    dt = Tt + (1 - Tt) * a.world,
    v = (y) => {
      if (y === t.root) return Xs * dt;
      const T = Cn * (Tt + (1 - Tt) * a.world * Ln * (t.images.has(y) ? Dn : 1));
      return x(T, 1, U(y));
    },
    { fade: C, markFade: Y } = e,
    ht = (t.heroScale * b) / t.scale,
    tt = e.nodes.map((y, T) => {
      const X = t.images.has(T) ? 1 : Y;
      if (T === t.keep) return { ...y, alpha: y.alpha * X };
      const at = i[T] ?? -1,
        mt = kn(H[T], t.ids[T] ?? "", at, at >= 0 ? H[at] : void 0, n),
        ut = x(y.radius, T === t.root || t.images.has(T) ? t.radius[T] * ht : t.hubs.has(T) ? 4 : 1.3, o);
      return {
        ...y,
        x: x(H[T].x, mt.x, o),
        y: x(H[T].y, mt.y, o),
        alpha: x(y.alpha, v(T) * f, o) * X,
        radius: ut,
        scale: ut / Math.max(t.radius[T], 1e-6),
        round: x(y.round, 0, o),
      };
    }),
    st = (y) => tt[y] ?? m,
    yt = e.edges[0]?.inkMix ?? e.guides[0]?.inkMix ?? 1,
    G = t.style ?? Yt,
    et = os(!0, !1, G),
    rt = os(!1, !0, G),
    ot = os(!1, !1, G),
    it = (y, T) => y * tt.length + T,
    xt = o < 1 ? new Map(e.edges.map((y) => [it(y.fromIndex, y.toIndex), y])) : void 0,
    Pt = t.edges.flatMap((y) => {
      const T = y.sectionSpoke ? et : y.related ? rt : ot,
        X = xt?.get(it(y.from, y.to)),
        at = x(X?.alpha ?? 0, Math.min(v(y.from), v(y.to)) * T.alpha * (y.sectionSpoke ? 1 : Wn) * f, o) * C;
      return at < 0.001
        ? []
        : [
            {
              fromIndex: y.from,
              toIndex: y.to,
              from: st(y.from),
              to: st(y.to),
              width: x(X?.width ?? T.width, T.width, o),
              alpha: at,
              inkMix: yt,
              related: y.related,
            },
          ];
    }),
    Xt = st(t.root),
    Vt = o < 1 ? new Map(e.guides.map((y) => [y.sectionIndex, y])) : void 0,
    $t = [...t.hubs].map((y) => ({
      sectionIndex: y,
      from: Xt,
      to: st(y),
      width: et.width,
      alpha: x(Vt?.get(y)?.alpha ?? 0, Xs * dt * f, o) * C,
      inkMix: yt,
    })),
    _t = t.incoming >= 0 ? e.nodes[t.incoming] : void 0,
    kt = _t ? En(e.label, st(t.incoming).x - _t.x, st(t.incoming).y - _t.y) : e.label,
    Kt = t.height * 0.75,
    bt = (y) => y.y > -Kt && y.y < t.height + Kt,
    At = f > 0.001 && (bt(st(s)) || (l >= 0 && bt(st(l)))),
    Rt = new Map(),
    Ft = new Map(),
    Et = At ? f : 0;
  if ((Ys(t.orders.get(s) ?? [], n, Q * Et, Rt), l >= 0)) {
    Ys(t.orders.get(l) ?? [], n, ft * Et, Rt);
    const y = Sn(t.progress, zn, Bn) * Et;
    if (t.incoming === l && y > 0.001) for (const T of t.orders.get(l) ?? []) Ft.set(T, y);
  }
  return (
    Rt.delete(t.keep),
    Ft.delete(t.keep),
    vn(
      {
        ...e,
        nodes: tt,
        edges: Pt,
        guides: $t,
        label: kt,
        flowActive: At || e.flowActive,
        moving: At || e.moving,
        camera: { ...e.camera, scale: b },
        fade: 1,
        markFade: 1,
        wireFade: { line: C, dot: Y },
      },
      Rt,
      Ft,
    )
  );
}
const qs = (e) => e ?? 1;
function Io(e) {
  return [...e.nodes, ...(e.concepts ?? [])];
}
const xe = {
  relatedMax: 6,
  hoverRelatedMax: 6,
  exploreRelatedMax: 24,
  hoverIntentDelay: 0,
  hoverFadeDuration: 0.3,
  sectionRingStagger: 0.02,
};
class To {
  neighbors;
  nodes;
  labels;
  rings;
  sectionRings;
  connections = new Map();
  settings = { ...xe };
  #t = { alpha: 0, alphaFrom: 0, alphaTarget: 0, alphaStartedAt: 0 };
  #e = -1;
  #n;
  #a = 0;
  #o;
  #i;
  #r = -1;
  #h;
  #f = new Map();
  #c = new Map();
  #l = [];
  #d = [];
  #s = [];
  #g;
  constructor(t) {
    const s = new Map(t.nodes.map(({ id: n }, a) => [n, a])),
      i = Array.from({ length: t.nodes.length }, () => []);
    (this.nodes = new Float32Array(t.nodes.length)),
      (this.labels = new Float32Array(t.nodes.length)),
      (this.rings = new Float32Array(t.nodes.length)),
      (this.sectionRings = new Float32Array(t.nodes.length)),
      (this.#h = new Uint8Array(t.nodes.length));
    for (const [n, a] of t.nodes.entries()) a.role === "section" && (this.#h[n] = 1);
    for (const n of t.edges) {
      if (n.type !== "contains") continue;
      const a = s.get(n.source),
        o = s.get(n.target);
      a === void 0 || o === void 0 || !this.#h[a] || this.#h[o] || i[a].push(o);
    }
    (this.#g = t.nodes.map((n) => {
      const a = new Map();
      for (const o of t.productAreaMatchesById?.[n.id] ?? []) {
        const h = s.get(o.id);
        h !== void 0 && a.set(h, o.productAreaIds.length);
      }
      return a;
    })),
      (this.neighbors = t.nodes.map((n, a) => {
        if (this.#h[a]) return i[a];
        const o = t.relatedById[n.id] ?? [],
          h = [];
        for (const c of o) {
          const f = s.get(c);
          f === void 0 || f === a || this.#h[f] || h.push(f);
        }
        const r = Math.max(...h.map((c) => qs(t.nodes[c].weight)));
        return h.filter((c) => qs(t.nodes[c].weight) === r);
      }));
  }
  get focus() {
    return this.#t.alpha;
  }
  get labelled() {
    return this.#d;
  }
  get titled() {
    return this.#s;
  }
  get ambientSection() {
    return this.#r;
  }
  ambient(t) {
    this.#i = t >= 0 && this.#h[t] ? t : void 0;
  }
  hover(t, s) {
    const i = t >= 0 ? t : void 0;
    i !== this.#n && ((this.#n = i), (this.#a = s), (i === void 0 || i === this.#e) && (this.#o = i));
  }
  step(t, s, i) {
    this.#A(this.#p(i), s, i, t),
      this.nodes.fill(0),
      this.labels.fill(0),
      this.rings.fill(0),
      this.sectionRings.fill(0),
      this.#e >= 0 && (this.nodes[this.#e] = 1);
    let n = zt(
      this.#t,
      this.#e >= 0 && this.#e !== this.#r ? 1 : 0,
      i,
      t ? 0 : this.settings.hoverFadeDuration,
    );
    n = Vn(this.#f, this.#e, i, t ? 0 : this.settings.hoverFadeDuration) || n;
    for (const [a, o] of this.#f) this.rings[a] = o.alpha;
    for (const [a, o] of this.#c)
      (n = zt(o, o.alphaTarget, i, t ? 0 : this.settings.hoverFadeDuration) || n),
        o.alphaTarget === 0 && o.alpha === 0 ? this.#c.delete(a) : (this.sectionRings[a] = o.alpha);
    for (const [a, o] of this.connections) {
      if (
        ((n = zt(o, o.active ? 1 : 0, i, t ? 0 : this.settings.hoverFadeDuration) || n),
        !o.active && o.alpha === 0)
      ) {
        this.connections.delete(a);
        continue;
      }
      (this.nodes[o.from] = Math.max(this.nodes[o.from], o.alpha)),
        (this.nodes[o.to] = Math.max(this.nodes[o.to], o.alpha)),
        o.kind === "related_to" &&
          ((this.labels[o.from] = Math.max(this.labels[o.from], o.alpha)),
          (this.labels[o.to] = Math.max(this.labels[o.to], o.alpha)));
    }
    return n || this.#M;
  }
  get #M() {
    return this.#n !== void 0 && this.#n !== this.#o;
  }
  #p(t) {
    return (
      this.#M && t - this.#a >= this.settings.hoverIntentDelay && (this.#o = this.#n),
      this.#o ?? this.#i ?? -1
    );
  }
  #A(t, s, i, n) {
    const a = t >= 0 && this.#o === void 0;
    if (t === this.#e) {
      t >= 0 &&
        a !== (t === this.#r) &&
        ((this.#r = a ? t : -1), (this.#s = a ? [] : [t, ...(this.neighbors[t] ?? [])]));
      return;
    }
    (this.#e = t),
      a ? (this.#r = t) : t >= 0 && (this.#r = -1),
      this.#m(t >= 0 && this.#h[t] ? t : -1, s, i, n ? 0 : this.settings.sectionRingStagger);
    for (const r of this.connections.values()) r.active = !1;
    if (((this.#d = []), (this.#s = []), t < 0)) return;
    const o = !!this.#h[t],
      h = this.related(t, this.settings.hoverRelatedMax, s);
    o && !a ? (this.#s = [t, ...h]) : o || (this.#d = [t, ...h]);
    for (const r of h) {
      const c = `${Math.min(t, r)}:${Math.max(t, r)}`,
        f = this.connections.get(c);
      this.connections.set(c, {
        from: t,
        to: r,
        kind: o ? "contains" : "related_to",
        active: !0,
        alpha: f?.alpha ?? 0,
        alphaFrom: f?.alphaFrom ?? f?.alpha ?? 0,
        alphaTarget: f?.alphaTarget ?? f?.alpha ?? 0,
        alphaStartedAt: f?.alphaStartedAt ?? 0,
      });
    }
  }
  #m(t, s, i, n) {
    const a = (o, h, r) => {
      const c = this.#c.get(o) ?? { alpha: 0, alphaFrom: 0, alphaTarget: 0, alphaStartedAt: i };
      (c.alphaFrom = c.alpha), (c.alphaTarget = h), (c.alphaStartedAt = i + r), this.#c.set(o, c);
    };
    for (const [o, h] of this.#l.entries()) this.#c.get(h)?.alphaTarget === 1 && a(h, 0, o * n);
    this.#l = t < 0 ? [] : this.#S(t, s);
    for (const [o, h] of this.#l.entries()) a(h, 1, o * n);
  }
  #S(t, s) {
    const i = s[t * O],
      n = s[t * O + 1],
      a = (o) => {
        const r = (Math.atan2(s[o * O + 1] - n, s[o * O] - i) + Math.PI / 2) / (Math.PI * 2);
        return r - Math.floor(r);
      };
    return [...(this.neighbors[t] ?? [])].sort((o, h) => a(o) - a(h) || o - h);
  }
  related(t, s, i) {
    const n = this.neighbors[t] ?? [];
    if (this.#h[t]) return n;
    const a = this.#g[t];
    return a
      ? [...n]
          .sort((o, h) => (a.get(h) ?? 0) - (a.get(o) ?? 0) || this.#x(t, o, i) - this.#x(t, h, i) || o - h)
          .slice(0, s)
      : [];
  }
  #x(t, s, i) {
    return Math.hypot(i[s * O] - i[t * O], i[s * O + 1] - i[t * O + 1]);
  }
}
function Vn(e, t, s, i) {
  t >= 0 && !e.has(t) && e.set(t, { alpha: 0, alphaFrom: 0, alphaTarget: 0, alphaStartedAt: s });
  let n = !1;
  for (const [a, o] of e) {
    const h = a === t ? 1 : 0;
    (n = zt(o, h, s, i) || n), h === 0 && o.alpha === 0 && e.delete(a);
  }
  return n;
}
function zt(e, t, s, i) {
  t !== e.alphaTarget && ((e.alphaFrom = e.alpha), (e.alphaTarget = t), (e.alphaStartedAt = s));
  const n = i <= 0 ? 1 : Math.max(0, Math.min(1, (s - e.alphaStartedAt) / i)),
    a = n * n * (3 - 2 * n);
  return (e.alpha = n === 1 ? t : e.alphaFrom + (t - e.alphaFrom) * a), e.alpha !== e.alphaTarget;
}
const $n = 48,
  ys = 0.05,
  ms = new Set();
class Kn {
  #t = new Map();
  #e = new Map();
  #n = new Map();
  #a = new Map();
  #o = new Map();
  #i = new Map();
  #r;
  #h = 0;
  #f = -1;
  #c = -1;
  reset() {
    this.#t.clear(),
      this.#e.clear(),
      this.#n.clear(),
      this.#a.clear(),
      this.#o.clear(),
      this.#i.clear(),
      (this.#r = void 0),
      (this.#c = -1);
  }
  changes(t) {
    return this.#r ? (t ? Js(this.#r, t, this.#h, this.#f) : -1) !== this.#c : !1;
  }
  apply(t, s, i, n, a, o, h = ms) {
    const r = i ? Js(t, i, n, a) : -1;
    if (
      ((this.#r = t),
      (this.#h = n),
      (this.#f = a),
      (this.#c = r),
      r < 0 && !this.#t.size && !this.#e.size && !this.#n.size)
    )
      return t;
    const c = new Set();
    if (r >= 0)
      for (const P of t.edges) {
        if (P.alpha < ys) continue;
        const b = P.fromIndex === r ? P.toIndex : P.toIndex === r ? P.fromIndex : -1;
        b >= 0 && b < n && (t.nodes[b]?.alpha ?? 0) >= ys && c.add(b);
      }
    const f = o ? 0 : xe.hoverFadeDuration,
      l = ps(this.#t, this.#a, new Set([r]), s, f),
      m = h.has(r),
      g = ps(this.#e, this.#o, m ? ms : c, s, f),
      p = ps(this.#n, this.#i, m ? c : ms, s, f);
    if (!this.#a.size && !this.#o.size && !this.#i.size) return t;
    const { hover: A } = t;
    return (
      A && (gs(this.#a, A.rings), gs(this.#o, A.related), gs(this.#i, A.family)),
      { ...t, hover: { rings: this.#a, related: this.#o, family: this.#i }, moving: t.moving || l || g || p }
    );
  }
}
function gs(e, t) {
  for (const [s, i] of t) e.set(s, Math.max(e.get(s) ?? 0, i));
}
function Js({ nodes: e }, t, s, i) {
  let n = -1,
    a = $n;
  for (let o = 0; o < Math.min(s, e.length); o++) {
    const h = e[o];
    if (o === i || h.alpha < ys || h.radius <= 0) continue;
    const r = Math.hypot(h.x - t.x, h.y - t.y) - h.radius;
    r < a && ((a = r), (n = o));
  }
  return n;
}
function ps(e, t, s, i, n) {
  for (const o of s)
    o >= 0 && !e.has(o) && e.set(o, { alpha: 0, alphaFrom: 0, alphaTarget: 0, alphaStartedAt: i });
  let a = !1;
  t.clear();
  for (const [o, h] of e) {
    const r = s.has(o) ? 1 : 0;
    (a = zt(h, r, i, n) || a), r === 0 && h.alpha === 0 ? e.delete(o) : t.set(o, h.alpha);
  }
  return a;
}
const qn = 3,
  Jn = (e) => x(1, qn, k(lt(e, 0, 1)));
function Qn(e, t, s = { left: 0, top: 0, width: e, height: t }) {
  const i = Math.max(18, s.left + 12),
    n = Math.max(78, s.top + 12);
  return {
    left: i,
    right: Math.max(i + 1, Math.min(e - 24, s.left + s.width - 12)),
    top: n,
    bottom: Math.max(n + 1, Math.min(t * 0.72, s.top + s.height - 24)),
  };
}
function Zn(e, t, s = 0) {
  const i = (n, a, o) => {
    const h = (a + o) / 2,
      r = Math.max(0, (o - a) / 2 - s);
    if (!r) return h;
    const c = r * 0.72,
      f = Math.abs(n - h);
    if (f <= c) return n;
    const l = r - c;
    return h + Math.sign(n - h) * (c + l * (1 - Math.exp(-(f - c) / l)));
  };
  return { x: i(e.x, t.left, t.right), y: i(e.y, t.top, t.bottom) };
}
const jn = (-20 * Math.PI) / 180;
function Qs({
  data: e,
  radius: t,
  children: s,
  sectionIndexById: i,
  hub: n,
  captured: a,
  frame: o,
  options: h,
  resize: r,
  forcedPan: c = o.journey?.sample.pan ?? 0,
}) {
  const { width: f, height: l, viewport: m } = h,
    { sample: g, layout: p, journey: A } = o,
    P = h.homePresentation ? (o.homeMix ?? (!p && !A ? g.expandY : 1)) : 1,
    b = (v) => ({ x: a[v * O] * r, y: a[v * O + 1] * r }),
    R = h.homePose?.positions,
    u = (v) => {
      const C = b(v);
      return !R || P === 1 ? C : { x: x(R[v * O], C.x, P), y: x(R[v * O + 1], C.y, P) };
    },
    S = Xe(
      o,
      (v) => {
        const C = i.get(v);
        return C === void 0 ? void 0 : u(C);
      },
      c,
    ),
    M = o.homeMix === void 0 ? 1 : P,
    F = Array.from({ length: e.nodes.length }, (v, C) => Gt(u(C), S ? S.angle * M : g.turn)),
    D = o.reduced ? F : Array.from({ length: e.nodes.length }, (v, C) => Gt(b(C), de)),
    E = A ? (i.get(A.to) ?? -1) : -1,
    V = S || o.reduced ? 0 : jn * g.focus * (1 - k(g.open)),
    z = [...F, { x: 0, y: 0 }];
  ds(
    z,
    n,
    z.map((v, C) => C).filter((v) => v !== n),
    V,
  );
  const L = z.pop();
  if ((F.splice(0, F.length, ...z), S)) {
    A && o.previousSectionId !== void 0 && ds(F, n, s[n] ?? [], fs(1) - fs(c));
    const v = A ? E : n;
    v >= 0 && ds(F, v, s[v] ?? [], fs(A ? c : 1) * M);
  }
  o.reduced ||
    (Us(F, n, s[n] ?? [], A ? 1 - A.sample.unfold : k(g.focus)),
    A && E >= 0 && Us(F, E, s[E] ?? [], A.sample.isolate));
  const Z = F[n],
    $ = (v, C, Y, ht, tt = F[v]) => {
      const st = f >= 780 ? (Y?.anchorX ?? f * 0.22) : f * (f <= 600 ? 0.26 : 0.22),
        yt = Y ? (Y.anchorY ?? (Y.top + Y.bottom) / 2) : l * 0.35;
      let G = 2.8;
      for (const et of C) {
        const rt = D[et].x - D[v].x,
          ot = D[et].y - D[v].y,
          it = pe(e.nodes[et], t[et]);
        rt < 0 && (G = Math.min(G, Math.max(12, st - (Y?.left ?? 18)) / (-rt + it))),
          rt > 0 && (G = Math.min(G, ((Y?.right ?? f - 24) - st) / (rt + it))),
          ot < 0 && (G = Math.min(G, Math.max(12, yt - (Y?.top ?? 82)) / (-ot + it))),
          ot > 0 && (G = Math.min(G, ((Y?.bottom ?? l * 0.61) - yt) / (ot + it)));
      }
      return (
        (G = ht ?? Math.max(0.08, G * 0.92)),
        { scale: G, x: tt.x - (st - f / 2) / G, y: tt.y - (yt - l / 2) / G }
      );
    };
  let q;
  for (const v of o.fitLayouts ?? []) {
    const C = i.get(v.sectionId);
    C !== void 0 && (q = Math.min(q ?? 1 / 0, $(C, s[C] ?? [], v.layout).scale));
  }
  const j = p ?? o.fitLayouts?.find((v) => v.sectionId === o.sectionId)?.layout,
    J = (v, C) => (v && C ? { ...v, anchorX: C.x, anchorY: C.y } : v),
    I = J(j, o.focusAnchor),
    W = A && S ? S.from : Z,
    H = $(n, s[n] ?? [], I, q, W),
    Q = h.homeCamera
      ? { x: h.homeCamera.cx, y: h.homeCamera.cy, scale: h.homeCamera.scale }
      : { x: f / 2 - m.left - m.width / 2, y: l / 2 - m.top - m.height / 2, scale: 1 },
    ft = Jn(g.focus) * (1 + 0.28 * g.depth);
  let U = Os(
    {
      scale: Math.exp(x(Math.log(Q.scale), Math.log(H.scale), g.focus)),
      x: x(Q.x, H.x, g.focus),
      y: x(Q.y, H.y, g.focus),
    },
    W,
    ft,
  );
  if (o.focusAnchor && !A) {
    const { x: v, y: C, hold: Y } = o.focusAnchor;
    U = { ...U, x: x(U.x, W.x - (v - f / 2) / U.scale, Y), y: x(U.y, W.y - (C - l / 2) / U.scale, Y) };
  }
  if (A && E >= 0) {
    const v = S?.to ?? F[E];
    (U = Te(U, Os($(E, s[E] ?? [], J(A.layout, A.focusAnchor), q, v), v, ft), c)),
      S && (U = { ...U, scale: U.scale / (1 + be(c)) });
  }
  const dt = Qn(f, l, m);
  return {
    rest: F,
    root: L,
    hub: Z,
    camera: U,
    bounds: dt,
    orbitTotal: S?.total ?? 0,
    firstTurn: V,
    sectionMix: P,
    screen(v) {
      return { x: f / 2 + (v.x - U.x) * U.scale, y: l / 2 + (v.y - U.y) * U.scale };
    },
    contain(v, C = 0, Y = 1) {
      const ht = Zn(v, dt, C),
        tt = k(g.focus) * Y;
      return { x: x(v.x, ht.x, tt), y: x(v.y, ht.y, tt) };
    },
  };
}
const to = 0.4;
class so {
  #t = new Map();
  #e;
  step(t, s, i) {
    const n = lt(s - (this.#e ?? s), 0, 0.05);
    this.#e = s;
    const a = n / to;
    let o = !1;
    for (const h of t) {
      const r = h.reach,
        c = this.#t.get(h.id),
        f = i || c === void 0 ? r : lt(r, c - a, c + a);
      this.#t.set(h.id, f), (h.reach = k(f)), f < 1 && (h.animated = !1), f !== r && (o = !0);
    }
    for (const h of this.#t.keys()) t.some((r) => r.id === h) || this.#t.delete(h);
    return o;
  }
  reset() {
    this.#t.clear(), (this.#e = void 0);
  }
}
const eo = 0.4;
class bo {
  #t;
  #e;
  #n;
  #a;
  #o;
  #i;
  #r;
  #h;
  #f = new Je();
  #c = new Kn();
  #l;
  #d;
  #s;
  #g;
  #M = new so();
  #p;
  #A = [];
  #m;
  #S = 1;
  #x = 1;
  #u = -1;
  #k;
  #v = new Set();
  #y = new Map();
  constructor(t, s, i, n) {
    (this.#t = t),
      (this.#e = s),
      (this.#n = i),
      (this.#a = n),
      (this.#o = [...(i[n] ?? [])]),
      (this.#l = new Set(this.#o)),
      (this.#d = t.nodes.map((a) => a.id)),
      (this.#s = new Set(t.nodes.flatMap((a, o) => (a.shape === "image" ? [o] : [])))),
      (this.#i = new Map(t.nodes.map((a, o) => [a.id, o]))),
      (this.#r = Ae(t, i, n, this.#i)),
      (this.#h = new Int32Array(t.nodes.length).fill(-1));
    for (const a of this.#o) for (const o of i[a] ?? []) this.#h[o] = a;
  }
  reset() {
    (this.#m = void 0),
      (this.#g = void 0),
      (this.#S = 1),
      (this.#x = 1),
      (this.#u = -1),
      (this.#k = void 0),
      this.#v.clear(),
      this.#y.clear(),
      this.#f.reset(),
      this.#c.reset(),
      this.#M.reset(),
      (this.#p = void 0);
  }
  present(t, s) {
    let i = this.#I(t, s);
    if (!i) return i;
    const n = i.hero ? (this.#i.get(i.hero.id) ?? -1) : -1;
    return (
      this.#m && this.#g && t.fitLayouts && !t.reduced && (i = this.#w(i, t, s, n, this.#m, this.#g)),
      this.#c.apply(i, s.clock, s.pointer, this.#a, n, t.reduced, this.#l)
    );
  }
  hoverChanges(t) {
    return this.#c.changes(t);
  }
  #w(t, s, i, n, a, o) {
    const { journey: h } = s,
      r = !h && s.landedBy !== void 0,
      c = h ? h.gap !== void 0 : r || s.gapAbove !== void 0 || s.next !== void 0;
    if (this.#u < 0 || !c || !(Bt(s) || r)) return t;
    const f = h ? (this.#i.get(h.to) ?? -1) : -1,
      l = h ? f : s.next ? (this.#i.get(s.next.id) ?? -1) : -1,
      m = Yn({
        height: i.height,
        ahead: h ? h.gap : s.next?.gap,
        behind: h ? void 0 : r ? { toTop: i.height * xs - s.landedBy } : s.gapAbove,
      }),
      g = i.homeCamera,
      p = (r || s.homeMix !== void 0) && s.sample.focus < 1;
    return Xn(t, {
      world: (A) => ({ x: a[A * O], y: a[A * O + 1] }),
      scale: (eo * Math.min(i.width, i.height)) / o.reach,
      heroScale: Math.min(i.width / this.#S, i.height / this.#x),
      width: i.width,
      height: i.height,
      course: m,
      hub: this.#u,
      ordinal: Math.max(0, this.#o.indexOf(this.#u)),
      toward: l,
      incoming: f,
      progress: h?.sample.progress ?? 0,
      clock: i.clock,
      ids: this.#d,
      parents: this.#h,
      radius: this.#e,
      root: this.#a,
      hubs: this.#l,
      orders: o.orders,
      reaches: o.reaches,
      edges: this.#r,
      style: i.style,
      zoomIn:
        p && g
          ? {
              amount: s.sample.focus,
              along: s.sample.label,
              home: { x: g.cx, y: g.cy, scale: g.scale },
              posed: i.homePose?.positions,
            }
          : void 0,
      images: this.#s,
      keep: n,
    });
  }
  #I(t, s) {
    this.#m ||
      ((this.#m = s.positions.slice()),
      (this.#S = s.width),
      (this.#x = s.height),
      (this.#A = no(this.#t, this.#m, this.#n, this.#o[0])),
      (this.#g = An(this.#m, O, this.#o, this.#n)));
    const i = this.#m;
    if (!i) return;
    if (this.#k !== t.sectionId) {
      if (
        ((this.#k = t.sectionId),
        this.#v.clear(),
        this.#y.clear(),
        (this.#u = this.#i.get(t.sectionId) ?? -1),
        this.#u < 0)
      )
        return;
      for (const u of this.#n[this.#u] ?? []) this.#v.add(u);
      this.#y = oo(i, this.#u, this.#v);
    }
    if (this.#u < 0) return;
    const { sample: n, journey: a } = t,
      { style: o = Yt, orbit: h = oe } = s,
      r = Math.min(s.width / this.#S, s.height / this.#x),
      c = Qs({
        data: this.#t,
        radius: this.#e,
        children: this.#n,
        sectionIndexById: this.#i,
        hub: this.#u,
        captured: i,
        frame: t,
        options: s,
        resize: r,
      }),
      f = this.#f.step(a && `${t.sectionId} ${a.to}`, a?.sample.pan, c.orbitTotal, me(t), s.clock),
      l = qe(t);
    Bt(t) || l === 0 ? (this.#p = void 0) : (this.#p ??= s.clock);
    const { labelHub: m, amount: g } = ye(this.#u, this.#v, a?.to, this.#i, this.#n, a?.sample.pan ?? 0),
      p = (u) => Me(this.#t.nodes[u], this.#e[u], c.camera.scale),
      A = !!(a ? a.focusAnchor : t.focusAnchor);
    let P = c.contain(c.screen(c.rest[m]), p(m), A ? 0 : g(m));
    if (!a && n.label > 0 && n.label < 1) {
      const u = Qs({
        data: this.#t,
        radius: this.#e,
        children: this.#n,
        sectionIndexById: this.#i,
        hub: this.#u,
        captured: i,
        frame: {
          ...t,
          sample: as(0, s.height, !1, s.width),
          focusAnchor: t.focusAnchor && { ...t.focusAnchor, hold: 0 },
        },
        options: s,
        resize: r,
      });
      P = u.contain(u.screen(u.rest[m]), p(m), A ? 0 : 1);
    }
    const b = un({
      data: this.#t,
      radius: this.#e,
      children: this.#n,
      rootIndex: this.#a,
      hub: this.#u,
      sections: this.#o,
      activeChildren: this.#v,
      ranks: this.#y,
      sectionIndexById: this.#i,
      parents: this.#h,
      edges: this.#r,
      frame: t,
      options: s,
      projection: c,
      labelOrigin: P,
      style: o,
      orbit: h,
      lag: f,
      floatAmount: l,
      orbitTime: s.clock - (this.#p ?? s.clock),
      firstArcOrder: this.#A,
    });
    return this.#M.step(b.tethers, s.clock, t.reduced) && (b.moving = !0), b;
  }
}
function Ae(e, t, s, i) {
  const n = [];
  for (let a = 0; a < s; a++)
    for (const o of t[a] ?? [])
      n.push({ from: a, to: o, related: !1, sectionSpoke: e.nodes[a]?.role === "section" });
  for (const a of e.edges) {
    if (a.type !== "related_to") continue;
    const o = i.get(a.source),
      h = i.get(a.target);
    o === void 0 || h === void 0 || n.push({ from: o, to: h, related: !0, sectionSpoke: !1 });
  }
  return n;
}
function no(e, t, s, i) {
  if (i === void 0) return [];
  const n = (o) => t[o * O + 1];
  return (s[i] ?? []).filter((o) => e.nodes[o].shape === "image").sort((o, h) => n(o) - n(h) || o - h);
}
function oo(e, t, s) {
  const i = new Map(),
    n = [...s].sort(
      (a, o) =>
        Math.hypot(e[a * O] - e[t * O], e[a * O + 1] - e[t * O + 1]) -
          Math.hypot(e[o * O] - e[t * O], e[o * O + 1] - e[t * O + 1]) || a - o,
    );
  for (const [a, o] of n.entries()) i.set(o, a / Math.max(1, n.length - 1));
  return i;
}
const ss = 5,
  It = 24,
  es = 8,
  io = 3,
  Ht = [1, 1, 1];
class Ro {
  frame;
  homePresentation;
  #t;
  #e;
  #n;
  #a;
  #o;
  #i;
  #r = new Map();
  #h;
  #f;
  #c = new Float32Array(ss);
  #l = { x: 0, y: 0 };
  #d = { x: 0, y: 0 };
  #s = new Float32Array(3);
  constructor(t, s, i, n, a = Yt) {
    (this.#t = a), (this.#e = n), (this.#n = s);
    for (const [c, f] of (i[n] ?? []).entries()) this.#r.set(f, c);
    (this.#a = new Float32Array(n + 1)),
      (this.#o = new Float32Array(n + 1).fill(-1)),
      (this.#i = new Float32Array((n + 1) * 3));
    const o = [];
    for (const [c, f] of t.nodes.entries()) {
      if (
        ((this.#a[c] = Mt[f.shape]),
        this.#i.set(ro(f, this.#t), c * 3),
        f.shape !== "image" || !f.thumbnailUrl)
      )
        continue;
      const l = o.indexOf(f.thumbnailUrl);
      this.#o[c] = l >= 0 ? l : o.push(f.thumbnailUrl) - 1;
    }
    (this.#a[n] = Mt.ring),
      this.#i.set(this.#t.ink, n * 3),
      (this.#h = new Uint32Array((n + 1) * wt)),
      (this.#f = new Uint32Array((n + 1) * wt));
    for (const c of i[n] ?? []) te(this.#h, c, `root:${c}`);
    for (let c = 0; c < n; c++) for (const f of i[c] ?? []) te(this.#f, f, `${c}:${f}:contains`);
    const h = new Map(t.nodes.map((c, f) => [c.id, f])),
      r = Ae(t, i, n, h).length;
    (this.frame = {
      nodes: new Float32Array((n + 1 + ss) * Ut),
      nodeCount: n + 1,
      edges: new Float32Array(((n + r) * (1 + wt) + ss * (2 * It + vt.pulses * es)) * nt),
      edgeCount: 0,
      background: this.#t.background,
      outline: this.#t.imageStroke,
    }),
      (this.homePresentation = {
        nodes: new Float32Array(n).fill(1),
        edges: new Float32Array(r).fill(1),
        radii: s,
      });
  }
  build(t, s, i, n, a, o, h) {
    (this.frame.fade = t.fade), (this.frame.markFade = t.markFade), this.#g(t, s, i);
    let r = this.#p(t, s, i);
    (r = this.#A(r, t, s, i)),
      t.flowActive &&
        a.settings.flowOn &&
        !o &&
        ((r = this.#x(r, t, s, i, n, a)), (r = this.#u(r, t, s, i, n, a)));
    const c = t.tethers.slice(0, ss),
      f = t.wireFade?.line ?? 1;
    if (
      ((r = this.#m(r, c, s, i, h, f)),
      (this.frame.nodeCount = this.#S(c, s, i, t.wireFade?.dot ?? 1)),
      a.settings.flowOn && !o)
    )
      for (const [l, m] of c.entries())
        !m.animated || m.alpha < 0.05 || (r = this.#v(r, m, h?.(m.id), this.#c[l], n, s, i, f));
    return (this.frame.edgeCount = r), this.frame;
  }
  #g(t, s, i) {
    const { nodes: n } = this.frame,
      { hover: a } = t;
    for (let o = 0; o <= this.#e; o++) {
      const h = t.nodes[o],
        r = o * Ut,
        c = Math.max(0, h?.scale ?? 0);
      (n[r] = h?.x ?? 0),
        (n[r + 1] = h?.y ?? 0),
        (n[r + 2] = this.#n[o] * c),
        (n[r + 3] = this.#a[o] === Mt.square && h?.round ? Mt.square - h.round : this.#a[o]),
        ns(n, r + 4, this.#i.subarray(o * 3, o * 3 + 3), h?.inkMix ?? 0),
        (n[r + 7] = h?.alpha ?? 0),
        (n[r + 8] = 0),
        (n[r + 9] = 0),
        (n[r + 10] = s),
        (n[r + 11] = i),
        (n[r + is] = this.#o[o]);
      const f = a?.rings.get(o) ?? 0,
        l = a?.related.get(o) ?? 0,
        m = a?.family.get(o) ?? 0,
        g = Math.max(f, l, m);
      if (
        ((n[r + 7] += (1 - n[r + 7]) * g),
        Ms(n, r, g, this.#t.hover, Math.max(g, this.#t.imageStrokeAlpha) * n[r + 7], this.#r.has(o) ? 0 : g),
        Ot(n, r, l, ne),
        Ot(n, r, m, ee),
        Ot(n, r, f),
        m > 0 && se(this.#a[o]))
      ) {
        for (let p = 0; p < 3; p++) n[r + 4 + p] += (this.#t.sectionRing[p] - n[r + 4 + p]) * m;
        n[r + 7] *= 1 + (this.#t.sectionRingAlpha - 1) * m;
      }
    }
  }
  #M(t, s, i, n) {
    const a = Math.max(s?.rings.get(i) ?? 0, s?.rings.get(n) ?? 0);
    if (a <= 0) return;
    const { edges: o } = this.frame;
    for (const h of [t + 8, t + 12]) {
      for (let r = 0; r < 3; r++) o[h + r] += (this.#t.hover[r] - o[h + r]) * a;
      o[h + 3] += (1 - o[h + 3]) * a;
    }
  }
  #p({ guides: t, hover: s }, i, n) {
    let a = 0;
    for (const o of t) {
      const h = a++ * nt;
      this.#y(
        h,
        o.from.x,
        o.from.y,
        o.to.x,
        o.to.y,
        o.width,
        this.#t.tetherStart,
        this.#t.tetherEnd,
        o.inkMix,
        o.inkMix,
        o.alpha,
        i,
        n,
      ),
        (this.frame.edges[h + 15] *= this.#E(this.#t.tetherEndAlpha, o.inkMix)),
        this.#M(h, s, o.sectionIndex, -1);
    }
    return a;
  }
  #A(t, { edges: s, hover: i }, n, a) {
    for (const o of s) {
      const h = t++ * nt;
      this.#y(
        h,
        o.from.x,
        o.from.y,
        o.to.x,
        o.to.y,
        o.width,
        o.related ? this.#t.related : this.#w(o.fromIndex),
        o.related ? this.#t.related : this.#b(o.fromIndex),
        o.inkMix,
        o.inkMix,
        o.alpha,
        n,
        a,
      ),
        (this.frame.edges[h + 11] *= this.#E(o.related ? 1 : this.#I(o.fromIndex), o.inkMix)),
        (this.frame.edges[h + 15] *= this.#E(o.related ? 1 : this.#R(o.fromIndex), o.inkMix)),
        this.#M(h, i, o.fromIndex, o.toIndex);
    }
    return t;
  }
  #m(t, s, i, n, a, o) {
    for (const [h, r] of s.entries()) {
      if (((this.#c[h] = 0), r.reach <= 0)) continue;
      const c = r.alpha * o,
        f = a?.(r.id),
        l = r.reach < 1 ? Nt(this.#d, r.from, r.point, r.handle, r.reach, f) : r.point;
      let m = 0,
        g = 0,
        p = r.from.x,
        A = r.from.y;
      const P = f ? 2 * It : It;
      for (let b = 1; b <= P; b++) {
        const R = ho(b, f) * r.reach,
          u = Nt(this.#l, r.from, r.point, r.handle, R, f),
          S = t++ * nt;
        this.#y(S, p, A, u.x, u.y, vt.width, Ht, Ht, 0, 0, c, i, n);
        const M = ao(r.from, l, u);
        (this.frame.edges[S + 11] = c * js(1 - g)),
          (this.frame.edges[S + 15] = c * js(1 - M)),
          b > 1 && (this.frame.edges[S + _s] = 1),
          (m += Math.hypot(u.x - p, u.y - A)),
          (g = M),
          (p = u.x),
          (A = u.y);
      }
      this.#c[h] = m;
    }
    return t;
  }
  #S(t, s, i, n) {
    const { nodes: a } = this.frame;
    let o = this.#e + 1;
    for (const h of t) {
      if (h.domMarker || h.reach < 1) continue;
      const r = o++ * Ut;
      (a[r] = h.point.x),
        (a[r + 1] = h.point.y),
        (a[r + 2] = io),
        (a[r + 3] = Mt.circle),
        a.set(Ht, r + 4),
        (a[r + 7] = h.alpha * n),
        (a[r + 8] = 0),
        (a[r + 9] = 0),
        (a[r + 10] = s),
        (a[r + 11] = i),
        (a[r + is] = -1);
    }
    return o;
  }
  #x(t, s, i, n, a, o) {
    for (const h of s.guides)
      Zs(h) &&
        (t = this.#k(
          t,
          this.#h,
          h.sectionIndex,
          h.from,
          h.to,
          void 0,
          void 0,
          1,
          this.#T(this.#t.tetherStart, h.inkMix),
          h.alpha * 0.8 * this.#E(1, h.inkMix),
          i,
          n,
          a,
          o,
        ));
    return t;
  }
  #u(t, s, i, n, a, o) {
    for (const h of s.edges)
      h.related ||
        !Zs(h) ||
        (t = this.#k(
          t,
          this.#f,
          h.toIndex,
          h.from,
          h.to,
          void 0,
          void 0,
          1,
          this.#T(this.#w(h.fromIndex), h.inkMix),
          h.alpha * 0.8 * this.#E(this.#I(h.fromIndex), h.inkMix),
          i,
          n,
          a,
          o,
        ));
    return t;
  }
  #k(t, s, i, n, a, o, h, r, c, f, l, m, g, p) {
    for (let A = 0; A < wt; A++) {
      if ((t + r) * nt > this.frame.edges.length) return t;
      const P = s[i * wt + A],
        b = Ns(P, g, p.settings.flowSpeed),
        R = Ns(P, g - p.settings.flowTrail, p.settings.flowSpeed);
      if (Math.abs(b - R) > 0.5) continue;
      let { x: u, y: S } = Nt(this.#l, n, a, o, R, h);
      for (let M = 1; M <= r; M++) {
        const F = M / r,
          D = Nt(this.#l, n, a, o, M === r ? b : R + (b - R) * F, h),
          E = t++ * nt;
        this.#y(E, u, S, D.x, D.y, this.#t.flowWidth, c, c, 0, 0, f * F, l, m),
          (this.frame.edges[E + 11] = f * (F - 1 / r)),
          (u = D.x),
          (S = D.y);
      }
    }
    return t;
  }
  #v(t, s, i, n, a, o, h, r) {
    const c = vt.pulseTail / Math.max(n, 1),
      { pulseFade: f } = vt;
    for (let l = 0; l < vt.pulses; l++) {
      if ((t + es) * nt > this.frame.edges.length) return t;
      const m = (a / vt.pulseSeconds + l / vt.pulses) % 1,
        g = Math.max(0, m - c),
        p = s.alpha * r * 0.8 * Math.min(1, m / f.in, (1 - m) / f.out);
      let { x: A, y: P } = Nt(this.#l, s.from, s.point, s.handle, g, i),
        b = 0;
      for (let R = 1; R <= es; R++) {
        const u = R / es,
          S = Nt(this.#l, s.from, s.point, s.handle, g + (m - g) * u, i),
          M = p * u,
          F = t++ * nt;
        this.#y(F, A, P, S.x, S.y, vt.pulseWidth, Ht, Ht, 0, 0, M, o, h),
          (this.frame.edges[F + 11] = b),
          R > 1 && (this.frame.edges[F + _s] = 1),
          (b = M),
          (A = S.x),
          (P = S.y);
      }
    }
    return t;
  }
  #y(t, s, i, n, a, o, h, r, c, f, l, m, g) {
    const { edges: p } = this.frame;
    (p[t] = s),
      (p[t + 1] = i),
      (p[t + 2] = n),
      (p[t + 3] = a),
      (p[t + 4] = o),
      (p[t + 5] = o),
      (p[t + 6] = 0),
      (p[t + 7] = 0),
      ns(p, t + 8, h, c),
      (p[t + 11] = l),
      ns(p, t + 12, r, f),
      (p[t + 15] = l),
      (p[t + 16] = 0),
      (p[t + 17] = 0),
      (p[t + 18] = m),
      (p[t + 19] = g);
  }
  #w(t) {
    const s = this.#r.get(t) ?? 0,
      i = this.#t.sectionInks;
    return i[s % i.length];
  }
  #I(t) {
    const s = this.#r.get(t) ?? 0,
      i = this.#t.sectionInkAlphas;
    return i[s % i.length];
  }
  #b(t) {
    const s = this.#r.get(t) ?? 0,
      i = this.#t.sectionInkEnds;
    return i[s % i.length];
  }
  #R(t) {
    const s = this.#r.get(t) ?? 0,
      i = this.#t.sectionInkEndAlphas;
    return i[s % i.length];
  }
  #E(t, s) {
    return t + (1 - t) * lt(s, 0, 1);
  }
  #T(t, s) {
    return ns(this.#s, 0, t, s), this.#s;
  }
}
function Zs(e) {
  return e.alpha >= 0.05 && Math.hypot(e.to.x - e.from.x, e.to.y - e.from.y) >= 1;
}
function ao(e, t, s) {
  const i = t.x - e.x,
    n = t.y - e.y,
    a = i * i + n * n;
  return a <= 0 ? 0 : lt(((s.x - e.x) * i + (s.y - e.y) * n) / a, 0, 1);
}
function js(e) {
  const { start: t, mid: s, end: i } = vt.fade;
  return e < 0.5 ? t + (s - t) * e * 2 : s + (i - s) * (e - 0.5) * 2;
}
function ho(e, t) {
  return t ? (e <= It ? (t.peak * e) / It : t.peak + ((1 - t.peak) * (e - It)) / It) : e / It;
}
function te(e, t, s) {
  for (let i = 0; i < wt; i++) e[t * wt + i] = ke(`${s}:dot:${i}`);
}
function Nt(e, t, s, i, n, a) {
  if (i === void 0) return (e.x = t.x + (s.x - t.x) * n), (e.y = t.y + (s.y - t.y) * n), e;
  const o = (s.x - t.x) * i,
    h = 1 - n,
    r = h * h * h,
    c = 3 * h * h * n,
    f = 3 * h * n * n,
    l = n * n * n;
  if (((e.x = r * t.x + c * (t.x + o) + f * (s.x - o) + l * s.x), (e.y = (r + c) * t.y + (f + l) * s.y), a)) {
    const m = Pe(n, a.at, a.peak);
    (e.x += a.x * m), (e.y += a.y * m);
  }
  return e;
}
function ro(e, t) {
  return e.role === "section" ? t.section : e.prominence === "featured" ? t.featured : t.update;
}
function ns(e, t, s, i) {
  const n = lt(i, 0, 1);
  for (let a = 0; a < 3; a++) {
    const o = s[a] ?? 0;
    e[t + a] = o + (1 - o) * n;
  }
}
export {
  _e as D,
  B as F,
  To as H,
  Re as M,
  xe as R,
  Ro as S,
  io as T,
  Ps as W,
  wo as a,
  Vn as b,
  vo as c,
  Io as d,
  bo as e,
  as as f,
  Ao as g,
  qs as h,
  Eo as i,
  As as j,
  ae as k,
  je as l,
  os as m,
  ko as n,
  Oe as o,
  Nt as p,
  Cs as q,
  xo as r,
  zt as s,
  So as t,
  Ue as u,
  Zn as v,
  Pe as w,
  ce as x,
  Fe as y,
  yo as z,
};
