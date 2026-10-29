const g = "data-resident-media",
  c = "data-resident",
  u = "data-on-stage";
function d(t, n, o) {
  const r = t.flatMap((e) => {
    const i = n.includes(e);
    return [...e.querySelectorAll(`[${g}]`)].map((s) => {
      const a = i && s.checkVisibility();
      return { media: s, shows: a, staged: a && o(s) };
    });
  });
  for (const { media: e, shows: i, staged: s } of r) e.toggleAttribute(c, i), e.toggleAttribute(u, s);
}
const b = (t) => t.getClientRects().length > 0;
function f(t) {
  return [...t.querySelectorAll('img[loading="lazy"]')].filter(b);
}
function h(t, n, o) {
  d(t, n, o);
  const r = n.flatMap(f);
  for (const e of r) e.loading = "eager";
}
function A(t, n) {
  d(t, t, n);
}
function v(t, n, o) {
  const r = new MutationObserver(o);
  r.observe(t, { subtree: !0, attributeFilter: [g] }),
    n.addEventListener("abort", () => r.disconnect(), { once: !0 });
}
const w = (t) => [...t.querySelectorAll(`[${c}]`)];
function M(t) {
  const { innerWidth: n, innerHeight: o } = window,
    r = [...t.querySelectorAll(`[${g}]`)].filter((e) => {
      if (e.hasAttribute(c) || !e.checkVisibility()) return !1;
      const { top: i, right: s, bottom: a, left: l } = e.getBoundingClientRect();
      return a > 0 && i < o && s > 0 && l < n;
    });
  for (const e of r) e.toggleAttribute(c, !0), e.toggleAttribute(u, !0);
  return () => {
    for (const e of r) e.toggleAttribute(c, !1), e.toggleAttribute(u, !1);
  };
}
function R(t, n, o) {
  let r = !1,
    e = !1;
  const i = () => {
    if (n.aborted) return;
    const a = t.hasAttribute(c),
      l = t.hasAttribute(u);
    (a === r && l === e) || ((r = a), (e = l), o(r, e));
  };
  t.toggleAttribute(g, !0);
  const s = new MutationObserver(i);
  s.observe(t, { attributeFilter: [c, u] }),
    n.addEventListener("abort", () => s.disconnect(), { once: !0 }),
    queueMicrotask(i);
}
export { b as a, v as b, h as c, w as d, M as h, R as o, A as r, f as s };
