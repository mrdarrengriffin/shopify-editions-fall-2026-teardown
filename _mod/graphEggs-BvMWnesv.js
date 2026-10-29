const s = {},
  n = Object.keys(s),
  G = "graph-egg:open";
function a(t, e) {
  e.launcher.dispatchEvent(new CustomEvent(G, { bubbles: !0, detail: { id: t, launch: e } }));
}
export { s as G, G as a, n as b, a as o };
