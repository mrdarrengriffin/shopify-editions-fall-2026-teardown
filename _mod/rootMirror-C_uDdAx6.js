const c = new Map();
function v(n, t, s, l) {
  const o = document.documentElement,
    i = () => {
      for (const [r, f] of Object.entries(s)) {
        const b = n.getAttribute(r);
        b === null ? o.removeAttribute(`${t}-${f}`) : o.setAttribute(`${t}-${f}`, b);
      }
    },
    u = new MutationObserver(i);
  Object.keys(s).length && u.observe(n, { attributeFilter: Object.keys(s) });
  let e = c.get(t);
  e || c.set(t, (e = new Set())),
    e.add(i),
    o.setAttribute(t, ""),
    i(),
    l.addEventListener(
      "abort",
      () => {
        if ((u.disconnect(), e.delete(i), e.size)) {
          for (const r of e) r();
          return;
        }
        c.delete(t), o.removeAttribute(t);
        for (const r of Object.values(s)) o.removeAttribute(`${t}-${r}`);
      },
      { once: !0 },
    );
}
export { v as m };
