const s = new Set(),
  o = new Set();
let n = 0,
  i = 0,
  l = !1;
const m = (t) => {
    const r = t - i;
    (i = t), (n = 0), (l = !0);
    for (const e of [...s, ...o])
      if (!(!s.has(e) && !o.has(e)))
        try {
          e(t, r);
        } catch (a) {
          reportError(a);
        }
    (l = !1), (s.size || o.size) && (n = requestAnimationFrame(m));
  },
  b = (t, r) => {
    const e = r?.signal;
    if (e?.aborted) return () => {};
    const a = (d, u) => t(d, u),
      f = r?.late ? o : s;
    f.add(a), !n && !l && ((i = performance.now()), (n = requestAnimationFrame(m)));
    const c = () => {
      e?.removeEventListener("abort", c),
        f.delete(a),
        !s.size && !o.size && n && (cancelAnimationFrame(n), (n = 0));
    };
    return e?.addEventListener("abort", c), c;
  },
  k = (t, r) => {
    const e = b((a) => {
      e(), t(a);
    }, r);
    return e;
  };
export { k as n, b as o };
