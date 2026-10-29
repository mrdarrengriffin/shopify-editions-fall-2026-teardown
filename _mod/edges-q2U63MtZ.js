import { c as R } from "./clamp-co6UzHBn.js";
import { E as m, e as F } from "./frame-uyhWmNSJ.js";
import { d as Y } from "./color-CltOj4AS.js";
const G = 0.002,
  E = 5;
class I {
  #t = new Float32Array(0);
  #o = 0;
  #s = new Float32Array(0);
  update(t, o) {
    (this.#t = t), (this.#o = Math.min(o, Math.floor(t.length / m)));
  }
  draw(t, o, s) {
    const n = Math.fround(o),
      h = Math.fround(s);
    let i = 0;
    for (; i < this.#o; ) {
      const c = i * m,
        a = this.#t[c + 16],
        r = this.#t[c + 17],
        f = this.#t[c + 18],
        p = this.#t[c + 19];
      if (!this.#i(i) || f <= a || p <= r) {
        i++;
        continue;
      }
      const l = this.#a(i),
        e = a > 0 || r > 0 || f < n || p < h;
      e && (t.save(), t.beginPath(), t.rect(a, r, f - a, p - r), t.clip()),
        (t.fillStyle = l - i > 1 && !this.#h(i, l) ? this.#l(t, i, l) : this.#c(t, i)),
        t.beginPath();
      for (let d = i; d < l; d++) this.#d(t, d);
      t.fill(), e && t.restore(), (i = l);
    }
  }
  dispose() {
    (this.#t = new Float32Array(0)), (this.#o = 0), (this.#s = new Float32Array(0));
  }
  #i(t) {
    const o = t * m;
    return this.#t[o + 4] > 0 || this.#t[o + 5] > 0;
  }
  #a(t) {
    let o = t + 1;
    for (; o < this.#o && this.#t[o * m + F] === 1 && this.#i(o) && this.#r((o - 1) * m + 12, o * m + 8); )
      o++;
    return o;
  }
  #h(t, o) {
    const s = t * m + 8;
    for (let n = t; n < o; n++) if (!this.#r(s, n * m + 12)) return !1;
    return !0;
  }
  #r(t, o) {
    const s = this.#t;
    return s[t] === s[o] && s[t + 1] === s[o + 1] && s[t + 2] === s[o + 2] && s[t + 3] === s[o + 3];
  }
  #e(t) {
    const o = this.#t;
    return Y(o[t], o[t + 1], o[t + 2], o[t + 3]);
  }
  #c(t, o) {
    const s = o * m,
      n = this.#e(s + 8),
      h = this.#e(s + 12);
    if (n === h) return n;
    const i = this.#t[s],
      c = this.#t[s + 1],
      a = this.#t[s + 2],
      r = this.#t[s + 3],
      f = this.#t[s + 4],
      p = this.#t[s + 5],
      l = Math.hypot(a - i, r - c),
      e = t.createLinearGradient(l > 0 ? i : i - f / 2, c, l > 0 ? a : a + Math.max(f, p) / 2, r);
    return e.addColorStop(0, n), e.addColorStop(1, h), e;
  }
  #l(t, o, s) {
    const n = this.#t,
      h = o * m,
      i = (s - 1) * m,
      c = n[h],
      a = n[h + 1],
      r = n[i + 2],
      f = n[i + 3],
      p = r - c,
      l = f - a,
      e = p * p + l * l,
      d = s - o + 1;
    this.#s.length < d * E && (this.#s = new Float32Array(d * E * 2));
    const S = this.#s;
    let w = 0;
    for (let u = 0; u < d; u++) {
      const y = u === d - 1,
        v = y ? i : h + u * m,
        A = n[v + (y ? 2 : 0)],
        C = n[v + (y ? 3 : 1)];
      w = Math.max(w, e > 0 ? R(((A - c) * p + (C - a) * l) / e, 0, 1) : u / (d - 1));
      const X = u * E,
        L = v + (y ? 12 : 8);
      S[X] = w;
      for (let M = 0; M < 4; M++) S[X + 1 + M] = n[L + M];
    }
    const T = t.createLinearGradient(c, a, r, f);
    this.#n(T, 0);
    let P = 0;
    for (let u = 1; u < d - 1; u++) O(S, P, u, u + 1) || (this.#n(T, u), (P = u));
    return this.#n(T, d - 1), T;
  }
  #n(t, o) {
    const s = o * E,
      n = this.#s;
    t.addColorStop(n[s], Y(n[s + 1], n[s + 2], n[s + 3], n[s + 4]));
  }
  #d(t, o) {
    const s = o * m,
      n = this.#t[s],
      h = this.#t[s + 1],
      i = this.#t[s + 2],
      c = this.#t[s + 3],
      a = Math.max(0, this.#t[s + 4]) / 2,
      r = Math.max(0, this.#t[s + 5]) / 2,
      f = i - n,
      p = c - h,
      l = Math.hypot(f, p);
    if (l <= 0) {
      const e = Math.max(a, r);
      t.moveTo(n - e, h - e), t.lineTo(n + e, h - e), t.lineTo(n + e, h + e), t.lineTo(n - e, h + e);
    } else {
      const e = -p / l,
        d = f / l;
      t.moveTo(n + e * a, h + d * a),
        t.lineTo(n - e * a, h - d * a),
        t.lineTo(i - e * r, c - d * r),
        t.lineTo(i + e * r, c + d * r);
    }
    t.closePath();
  }
}
function O(g, t, o, s) {
  const n = t * E,
    h = o * E,
    i = s * E,
    c = g[i] - g[n],
    a = c > 0 ? (g[h] - g[n]) / c : 0;
  for (let r = 1; r < E; r++) {
    const f = g[n + r] + (g[i + r] - g[n + r]) * a;
    if (Math.abs(g[h + r] - f) > G) return !1;
  }
  return !0;
}
export { I as E };
