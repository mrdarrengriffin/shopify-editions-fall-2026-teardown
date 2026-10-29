import { N as P, a as l, b as M, c as k, d as A, f as _ } from "./frame-uyhWmNSJ.js";
import { d as y } from "./color-CltOj4AS.js";
const S = [1, 1, 1];
class F {
  #i = new Float32Array(0);
  #h = 0;
  #r = S;
  #a = [];
  #s = [];
  #e = Promise.resolve();
  #l = null;
  #o = !1;
  #t = 0;
  update(i, a, h = S) {
    (this.#r = h), (this.#i = i), (this.#h = Math.min(a, Math.floor(i.length / P)));
  }
  loadImages(i, a) {
    if ((this.#o || !this.#l?.aborted) && D(this.#a, i)) return this.#e;
    const h = ++this.#t;
    (this.#l = a), (this.#o = !1);
    const t = new Map();
    for (const [s, e] of this.#a.entries()) {
      const n = this.#s[s];
      n && t.set(e, n);
    }
    for (const [s, e] of t) i.includes(s) || e.close();
    return (
      (this.#a = [...i]),
      (this.#s = i.map((s) => t.get(s) ?? null)),
      (this.#e = Promise.all(i.map((s, e) => (this.#s[e] ? void 0 : this.#f(s, e, a, h)))).then(() => {
        h === this.#t && !a.aborted && (this.#o = !0);
      })),
      this.#e
    );
  }
  async #f(i, a, h, t) {
    try {
      const s = await fetch(i, { signal: h });
      if (!s.ok) throw new Error(`Failed to load image: ${s.status}`);
      const e = await createImageBitmap(await s.blob());
      if (h.aborted || t !== this.#t) {
        e.close();
        return;
      }
      this.#s[a] = e;
    } catch {
      !h.aborted && t === this.#t && (this.#s[a] = null);
    }
  }
  draw(i) {
    this.drawMarks(i), this.drawThumbnails(i);
  }
  drawMarks(i) {
    this.#n(i, !1);
  }
  drawThumbnails(i) {
    this.#n(i, !0);
  }
  #n(i, a) {
    for (let h = 0; h < this.#h; h++) {
      const t = h * P;
      if ((this.#i[t + 3] === l.image) !== a) continue;
      const s = this.#i[t + 2],
        e = this.#i[t + 7],
        n = this.#i[t + 8],
        c = this.#i[t + 9],
        w = this.#i[t + 10],
        E = this.#i[t + 11];
      if (s <= 0 || e <= 0 || w <= n || E <= c) continue;
      const f = this.#i[t],
        m = this.#i[t + 1],
        o = this.#i[t + 3],
        d = o === l.image ? this.#s[this.#i[t + M]] : null,
        N = y(this.#i[t + 4], this.#i[t + 5], this.#i[t + 6], e),
        [u, p] = d ? U(s, d.width / d.height) : [s, s];
      i.save(),
        i.beginPath(),
        i.rect(n, c, w - n, E - c),
        i.clip(),
        o === l.ring
          ? ((i.strokeStyle = N),
            (i.lineWidth = 1),
            i.beginPath(),
            i.arc(f, m, s, 0, Math.PI * 2),
            i.stroke())
          : d
            ? ((i.globalAlpha = e), i.drawImage(d, f - u, m - p, u * 2, p * 2))
            : ((i.fillStyle = N),
              i.beginPath(),
              o === l.square || o === l.image
                ? i.rect(f - s, m - s, s * 2, s * 2)
                : o > l.circle && o < l.square
                  ? i.roundRect(f - s, m - s, s * 2, s * 2, s * (1 - o))
                  : i.arc(f, m, s, 0, Math.PI * 2),
              i.fill());
      const T = this.#i[t + k];
      if (o === l.image && T > 0) {
        const I = u + _,
          O = p + _;
        i.globalAlpha = 1;
        const L = this.#i[t + A] ?? 0,
          b = (g) => this.#r[g] + (this.#i[t + 4 + g] - this.#r[g]) * L;
        (i.strokeStyle = y(b(0), b(1), b(2), T)),
          (i.lineWidth = 1),
          i.beginPath(),
          i.rect(f - I, m - O, I * 2, O * 2),
          i.stroke();
      }
      i.restore();
    }
  }
  dispose() {
    (this.#i = new Float32Array(0)),
      (this.#h = 0),
      (this.#a = []),
      (this.#e = Promise.resolve()),
      this.#t++,
      this.#m();
  }
  #m() {
    for (const i of this.#s) i?.close();
    this.#s = [];
  }
}
function D(r, i) {
  if (r.length !== i.length) return !1;
  for (let a = 0; a < r.length; a++) if (r[a] !== i[a]) return !1;
  return !0;
}
function U(r, i) {
  return !Number.isFinite(i) || i <= 0 ? [r, r] : i >= 1 ? [r, r / i] : [r * i, r];
}
export { F as N };
