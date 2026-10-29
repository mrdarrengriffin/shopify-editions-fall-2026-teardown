const S = "[data-f26-page-section]";
function w(s, r) {
  let t = -1;
  return (
    s.forEach((a, n) => {
      a <= r && (t = n);
    }),
    s.map((a, n) => ({ entered: n <= t, handedOver: n < t }))
  );
}
function E(s) {
  const r = document.documentElement,
    t = [...document.querySelectorAll(S)],
    a = t[0];
  if (!a) return;
  const n = document.querySelector(".fall-navigation"),
    g = parseFloat(getComputedStyle(r).getPropertyValue("--f26-crossfade-line")) || 0.5;
  let v = "",
    y;
  function x() {
    const e = w(
        t.map((o) => o.getBoundingClientRect().top),
        window.innerHeight * g,
      ),
      l = e.map(({ entered: o, handedOver: d }) => `${o ? 1 : 0}${d ? 1 : 0}`).join("");
    if (l === v) return;
    v = l;
    const u = t.filter((o, d) => e[d].entered).at(-1),
      p = u ? getComputedStyle(u).getPropertyValue("--f26-section-background") : "";
    t.forEach((o, d) => {
      const { entered: h, handedOver: P } = e[d];
      o.toggleAttribute("data-f26-entered", h),
        o.toggleAttribute("data-f26-pending", !h),
        o.toggleAttribute("data-f26-handed-over", P);
    }),
      (document.body.style.backgroundColor = p),
      p ? n?.style.setProperty("--f26-page-fill", p) : n?.style.removeProperty("--f26-page-fill");
  }
  function m() {
    return parseFloat(getComputedStyle(r).scrollPaddingTop) || 0;
  }
  function C() {
    const e = a.getBoundingClientRect().top <= m();
    e !== y && ((y = e), r.style.setProperty("--f26-nav-dark", e ? "1" : "0"));
  }
  function f() {
    x(), C();
  }
  let c, i;
  function b() {
    c?.disconnect(), i?.disconnect();
    const e = window.innerHeight;
    c = new IntersectionObserver(f, { rootMargin: `0px 0px -${Math.max(0, Math.round(e * (1 - g)))}px 0px` });
    for (const u of t) c.observe(u);
    const l = m();
    (i = new IntersectionObserver(f, { rootMargin: `0px 0px -${Math.max(0, Math.round(e - l))}px 0px` })),
      i.observe(a),
      f();
  }
  b(),
    window.addEventListener("resize", b, { passive: !0, signal: s }),
    s.addEventListener(
      "abort",
      () => {
        c?.disconnect(),
          i?.disconnect(),
          r.style.removeProperty("--f26-nav-dark"),
          document.body.style.removeProperty("background-color"),
          n?.style.removeProperty("--f26-page-fill");
        for (const e of t)
          e.removeAttribute("data-f26-entered"),
            e.removeAttribute("data-f26-pending"),
            e.removeAttribute("data-f26-handed-over");
      },
      { once: !0 },
    );
}
export { w as resolveCrossfadeFlags, E as startSectionCrossfadeFallback };
