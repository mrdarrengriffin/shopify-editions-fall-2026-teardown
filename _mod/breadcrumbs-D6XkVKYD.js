const e = [];
let d = "";
function a(t, n = {}) {
  const r = Math.round(performance.now()),
    o = { e: t };
  for (const [l, s] of Object.entries(n)) s !== void 0 && (o[l] = typeof s == "string" ? s.slice(0, 80) : s);
  const c = JSON.stringify(o),
    i = e.at(-1);
  if (i && c === d) {
    (i.t = r), (i.n = (i.n ?? 1) + 1);
    return;
  }
  (d = c), e.push({ t: r, ...o }), e.length > 20 && e.shift();
}
const p = () => e.map((t) => ({ ...t })),
  u = (t) => t.split(/[?#]/)[0].split("../shop/").pop();
function f() {
  document.addEventListener("visibilitychange", () =>
    a("page.visibility", { state: document.visibilityState }),
  ),
    window.addEventListener("pagehide", (t) => a("page.hide", { persisted: t.persisted })),
    window.addEventListener(
      "webglcontextlost",
      ({ target: t }) => {
        const n = t instanceof Element && t.closest("[data-component-name]");
        a("webgl.contextlost", { owner: n ? n.getAttribute("data-component-name") : void 0 });
      },
      { capture: !0 },
    );
}
export { a, u as f, f as i, p as r };
