class a {
  #t = new Map();
  #e = new Set();
  register(t, r) {
    if (r.aborted) return;
    this.#t.get(t)?.abort();
    const e = new AbortController();
    this.#t.set(t, e),
      e.signal.addEventListener("abort", () => this.#t.delete(t), { once: !0 }),
      r.addEventListener("abort", () => e.abort(), { once: !0, signal: e.signal });
    for (const n of this.#e) {
      if (e.signal.aborted) break;
      n(t, e.signal);
    }
  }
  subscribe(t, r) {
    if (!r.aborted) {
      this.#e.add(t), r.addEventListener("abort", () => this.#e.delete(t), { once: !0 });
      for (const [e, n] of this.#t) {
        if (r.aborted) break;
        t(e, n.signal);
      }
    }
  }
}
const i = new WeakMap();
function o(s) {
  let t = i.get(s);
  return t || ((t = new a()), i.set(s, t)), t;
}
export { o as g };
